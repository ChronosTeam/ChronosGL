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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bj=function(){}
var dart=[["","",,H,{"^":"",ml:{"^":"b;a"}}],["","",,J,{"^":"",
cQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cc:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cP==null){H.lb()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dZ("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cV()]
if(v!=null)return v
v=H.lg(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cV(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
k:{"^":"b;",
F:function(a,b){return a===b},
gC:function(a){return H.b5(a)},
l:["cK",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hL:{"^":"k;",
l:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isV:1},
hM:{"^":"k;",
F:function(a,b){return null==b},
l:function(a){return"null"},
gC:function(a){return 0},
$isG:1},
cw:{"^":"k;",
gC:function(a){return 0},
l:["cM",function(a){return String(a)}]},
iq:{"^":"cw;"},
ba:{"^":"cw;"},
bA:{"^":"cw;",
l:function(a){var z=a[$.eN()]
if(z==null)return this.cM(a)
return"JavaScript function for "+H.c(J.br(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbv:1},
bx:{"^":"k;$ti",
j:function(a,b){H.A(b,H.o(a,0))
if(!!a.fixed$length)H.ai(P.B("add"))
a.push(b)},
H:function(a,b){var z,y
H.t(b,"$ism",[H.o(a,0)],"$asm")
if(!!a.fixed$length)H.ai(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
aa:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.c(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ge3:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.dw())},
bB:function(a,b){var z,y
H.n(b,{func:1,ret:P.V,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aJ(a))}return!1},
cF:function(a,b){if(!!a.immutable$list)H.ai(P.B("sort"))
H.iR(a,J.kN(),H.o(a,0))},
aq:function(a){return this.cF(a,null)},
B:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aH(a[z],b))return!0
return!1},
l:function(a){return P.cu(a,"[","]")},
gv:function(a){return new J.fW(a,a.length,0,[H.o(a,0)])},
gC:function(a){return H.b5(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bi(a,b))
return a[b]},
h:function(a,b,c){H.A(c,H.o(a,0))
if(!!a.immutable$list)H.ai(P.B("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bi(a,b))
a[b]=c},
$isw:1,
$asw:I.bj,
$ism:1,
$isa:1,
p:{
hK:function(a,b){return J.cv(H.h(a,[b]))},
cv:function(a){H.bL(a)
a.fixed$length=Array
return a},
mj:[function(a,b){return J.fk(H.eD(a,"$isZ"),H.eD(b,"$isZ"))},"$2","kN",8,0,30]}},
mk:{"^":"bx;$ti"},
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
by:{"^":"k;",
O:function(a,b){var z
H.cR(b)
if(typeof b!=="number")throw H.d(H.aR(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gal(b)
if(this.gal(a)===z)return 0
if(this.gal(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gal:function(a){return a===0?1/a<0:a<0},
cg:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.B(""+a+".toInt()"))},
dL:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.B(""+a+".ceil()"))},
dZ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.B(""+a+".floor()"))},
aR:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.B(""+a+".round()"))},
dM:function(a,b,c){if(this.O(b,c)>0)throw H.d(H.aR(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
ec:function(a,b){var z
if(b>20)throw H.d(P.b7(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gal(a))return"-"+z
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
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dz:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!=="number")throw H.d(H.aR(b))
return a>b},
$isZ:1,
$asZ:function(){return[P.H]},
$isal:1,
$isH:1},
dy:{"^":"by;",$isx:1},
dx:{"^":"by;"},
bz:{"^":"k;",
aA:function(a,b){if(b>=a.length)throw H.d(H.bi(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.v(b)
if(typeof b!=="string")throw H.d(P.dc(b,null,null))
return a+b},
cH:function(a,b,c){var z
if(c>a.length)throw H.d(P.b7(c,0,a.length,null,null))
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
eb:function(a){return a.toLowerCase()},
dN:function(a,b,c){if(c>a.length)throw H.d(P.b7(c,0,a.length,null,null))
return H.lp(a,b,c)},
O:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.d(H.aR(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.d(H.bi(a,b))
return a[b]},
$isw:1,
$asw:I.bj,
$isZ:1,
$asZ:function(){return[P.e]},
$isio:1,
$ise:1}}],["","",,H,{"^":"",
dw:function(){return new P.cC("No element")},
hJ:function(){return new P.cC("Too many elements")},
iR:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.x,args:[c,c]})
H.bD(a,0,J.aW(a)-1,b,c)},
bD:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.x,args:[e,e]})
if(c-b<=32)H.iQ(a,b,c,d,e)
else H.iP(a,b,c,d,e)},
iQ:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.x,args:[e,e]})
for(z=b+1,y=J.bk(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iP:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.x,args:[a2,a2]})
z=C.d.a0(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a0(b+a0,2)
v=w-z
u=w+z
t=J.bk(a)
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
if(J.aH(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.ad()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.W()
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
if(typeof e!=="number")return e.ad()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.W()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.W()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ad()
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
if(m<y&&l>x){for(;J.aH(a1.$2(t.i(a,m),r),0);)++m
for(;J.aH(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ad()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bD(a,m,l,a1,a2)}else H.bD(a,m,l,a1,a2)},
dp:{"^":"m;"},
bZ:{"^":"dp;$ti",
gv:function(a){return new H.dB(this,this.gk(this),0,[H.cO(this,"bZ",0)])},
aU:function(a,b){return this.cL(0,H.n(b,{func:1,ret:P.V,args:[H.cO(this,"bZ",0)]}))}},
dB:{"^":"b;a,b,c,0d,$ti",
sa5:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.bk(z)
x=y.gk(z)
if(this.b!==x)throw H.d(P.aJ(z))
w=this.c
if(w>=x){this.sa5(null)
return!1}this.sa5(y.u(z,w));++this.c
return!0},
$isas:1},
i_:{"^":"m;a,b,$ti",
gv:function(a){var z=this.a
return new H.bB(z.gv(z),this.b,this.$ti)},
gk:function(a){return this.a.a.a},
$asm:function(a,b){return[b]},
p:{
i0:function(a,b,c,d){H.t(a,"$ism",[c],"$asm")
H.n(b,{func:1,ret:d,args:[c]})
return new H.hn(a,b,[c,d])}}},
hn:{"^":"i_;a,b,$ti"},
bB:{"^":"as;0a,b,c,$ti",
sa5:function(a){this.a=H.A(a,H.o(this,1))},
t:function(){var z=this.b
if(z.t()){this.sa5(this.c.$1(z.d))
return!0}this.sa5(null)
return!1},
gE:function(a){return this.a},
$asas:function(a,b){return[b]}},
i1:{"^":"bZ;a,b,$ti",
gk:function(a){return J.aW(this.a)},
u:function(a,b){return this.b.$1(J.ft(this.a,b))},
$asbZ:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
e_:{"^":"m;a,b,$ti",
gv:function(a){return new H.jd(J.bS(this.a),this.b,this.$ti)}},
jd:{"^":"as;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bY:{"^":"b;$ti"}}],["","",,H,{"^":"",
aG:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
l3:function(a){return init.types[H.L(a)]},
le:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isz},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.br(a)
if(typeof z!=="string")throw H.d(H.aR(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.ir(a)+H.c6(H.am(a),0,null)},
ir:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isba){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aG(w.length>1&&C.j.aA(w,0)===36?C.j.cI(w,1):w)},
aM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iy:function(a){var z=H.aM(a).getFullYear()+0
return z},
iw:function(a){var z=H.aM(a).getMonth()+1
return z},
is:function(a){var z=H.aM(a).getDate()+0
return z},
it:function(a){var z=H.aM(a).getHours()+0
return z},
iv:function(a){var z=H.aM(a).getMinutes()+0
return z},
ix:function(a){var z=H.aM(a).getSeconds()+0
return z},
iu:function(a){var z=H.aM(a).getMilliseconds()+0
return z},
bK:function(a){throw H.d(H.aR(a))},
f:function(a,b){if(a==null)J.aW(a)
throw H.d(H.bi(a,b))},
bi:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.L(J.aW(a))
if(!(b<0)){if(typeof z!=="number")return H.bK(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c1(b,"index",null)},
aR:function(a){return new P.aI(!0,a,null,null)},
et:function(a){if(typeof a!=="number")throw H.d(H.aR(a))
return a},
d:function(a){var z
if(a==null)a=new P.dI()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eG})
z.name=""}else z.toString=H.eG
return z},
eG:function(){return J.br(this.dartException)},
ai:function(a){throw H.d(a)},
D:function(a){throw H.d(P.aJ(a))},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lr(a)
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
if(l)return z.$1(H.dH(H.v(y),m))}}return z.$1(new H.j7(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dQ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dQ()
return a},
bl:function(a){var z
if(a==null)return new H.ef(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ef(a)},
l_:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
ld:function(a,b,c,d,e,f){H.j(a,"$isbv")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.dt("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ld)
a.$identity=z
return z},
h5:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iE(z).r}else x=d
w=e?Object.create(new H.iS().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.l3,x)
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
h2:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h4(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h2(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aX
if(v==null){v=H.bV("self")
$.aX=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aX
if(v==null){v=H.bV("self")
$.aX=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
h3:function(a,b,c,d){var z,y
z=H.cn
y=H.df
switch(b?-1:a){case 0:throw H.d(H.iK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h4:function(a,b){var z,y,x,w,v,u,t,s
z=$.aX
if(z==null){z=H.bV("self")
$.aX=z}y=$.de
if(y==null){y=H.bV("receiver")
$.de=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h3(w,!u,x,b)
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
cM:function(a,b,c,d,e,f,g){return H.h5(a,b,H.L(c),d,!!e,!!f,g)},
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
cS:function(a,b){throw H.d(H.a4(a,H.aG(H.v(b).substring(3))))},
lm:function(a,b){throw H.d(H.dg(a,H.aG(H.v(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cS(a,b)},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.lm(a,b)},
eD:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cS(a,b)},
bL:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.d(H.a4(a,"List<dynamic>"))},
lf:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cS(a,b)},
cN:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bH:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cN(J.C(a))
if(z==null)return!1
return H.ek(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cI)return a
$.cI=!0
try{if(H.bH(a,b))return a
z=H.bN(b)
y=H.a4(a,z)
throw H.d(y)}finally{$.cI=!1}},
cb:function(a,b){if(a!=null&&!H.cL(a,b))H.ai(H.a4(a,H.bN(b)))
return a},
eo:function(a){var z,y
z=J.C(a)
if(!!z.$isp){y=H.cN(z)
if(y!=null)return H.bN(y)
return"Closure"}return H.b6(a)},
lq:function(a){throw H.d(new P.hc(H.v(a)))},
ez:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
nM:function(a,b,c){return H.aV(a["$as"+H.c(c)],H.am(b))},
aT:function(a,b,c,d){var z
H.v(c)
H.L(d)
z=H.aV(a["$as"+H.c(c)],H.am(b))
return z==null?null:z[d]},
cO:function(a,b,c){var z
H.v(b)
H.L(c)
z=H.aV(a["$as"+H.c(b)],H.am(a))
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
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].builtin$cls)+H.c6(a,1,b)
if(typeof a=="function")return H.aG(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.c(b[y])}if('func' in a)return H.kM(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.kZ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
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
l2:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isp){y=H.cN(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.am(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aS:function(a,b,c,d){var z,y
H.v(b)
H.bL(c)
H.v(d)
if(a==null)return!1
z=H.am(a)
y=J.C(a)
if(y[b]==null)return!1
return H.er(H.aV(y[d],z),null,c,null)},
bO:function(a,b,c,d){H.v(b)
H.bL(c)
H.v(d)
if(a==null)return a
if(H.aS(a,b,c,d))return a
throw H.d(H.dg(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(3))+H.c6(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.v(b)
H.bL(c)
H.v(d)
if(a==null)return a
if(H.aS(a,b,c,d))return a
throw H.d(H.a4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(3))+H.c6(c,0,null),init.mangledGlobalNames)))},
er:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
nH:function(a,b,c){return a.apply(b,H.aV(J.C(b)["$as"+H.c(c)],H.am(b)))},
eB:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.eB(z)}return!1},
cL:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.eB(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bH(a,b)}z=J.C(a).constructor
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
if('func' in a)return c.builtin$cls==="bv"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"b_" in y.prototype))return!1
w=y.prototype["$as"+"b_"]
v=H.aV(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.er(H.aV(r,z),b,u,d)},
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
return H.ll(m,b,l,d)},
ll:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
nI:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
lg:function(a){var z,y,x,w,v,u
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
lk:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ce(z)
else return J.cQ(z,c,null,null)},
lb:function(){if(!0===$.cP)return
$.cP=!0
H.lc()},
lc:function(){var z,y,x,w,v,u,t,s
$.ca=Object.create(null)
$.cd=Object.create(null)
H.l7()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eF.$1(v)
if(u!=null){t=H.lk(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l7:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aQ(C.M,H.aQ(C.R,H.aQ(C.z,H.aQ(C.z,H.aQ(C.Q,H.aQ(C.N,H.aQ(C.O(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eA=new H.l8(v)
$.eq=new H.l9(u)
$.eF=new H.la(t)},
aQ:function(a,b){return a(b)||b},
lp:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iD:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iE:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cv(z)
y=z[0]
x=z[1]
return new H.iD(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j2:{"^":"b;a,b,c,d,e,f",
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
return new H.j2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dW:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ik:{"^":"S;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dH:function(a,b){return new H.ik(a,b==null?null:b.method)}}},
hO:{"^":"S;a,b,c",
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
return new H.hO(a,y,z?null:b.receiver)}}},
j7:{"^":"S;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lr:{"^":"p:5;a",
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
l:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gcw:function(){return this},
$isbv:1,
gcw:function(){return this}},
dS:{"^":"p;"},
iS:{"^":"dS;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aG(z)+"'"}},
cm:{"^":"dS;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.ao(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
p:{
cn:function(a){return a.a},
df:function(a){return a.c},
bV:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.cv(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j3:{"^":"S;a",
l:function(a){return this.a},
p:{
a4:function(a,b){return new H.j3("TypeError: "+P.bX(a)+": type '"+H.eo(a)+"' is not a subtype of type '"+b+"'")}}},
h0:{"^":"S;a",
l:function(a){return this.a},
p:{
dg:function(a,b){return new H.h0("CastError: "+P.bX(a)+": type '"+H.eo(a)+"' is not a subtype of type '"+b+"'")}}},
iJ:{"^":"S;a",
l:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
iK:function(a){return new H.iJ(a)}}},
dX:{"^":"b;a,0b,0c,0d",
gai:function(){var z=this.b
if(z==null){z=H.bN(this.a)
this.b=z}return z},
l:function(a){return this.gai()},
gC:function(a){var z=this.d
if(z==null){z=C.j.gC(this.gai())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dX&&this.gai()===b.gai()}},
dz:{"^":"dC;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gK:function(a){return new H.ad(this,[H.o(this,0)])},
gam:function(a){var z=H.o(this,0)
return H.i0(new H.ad(this,[z]),new H.hN(this),z,H.o(this,1))},
ak:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dc(z,b)}else{y=this.e1(b)
return y}},
e1:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.aI(z,J.ao(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ag(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ag(w,b)
x=y==null?null:y.b
return x}else return this.e2(b)},
e2:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aI(z,J.ao(a)&0x3ffffff)
x=this.aP(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.o(this,0))
H.A(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aJ()
this.b=z}this.bk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aJ()
this.c=y}this.bk(y,b,c)}else{x=this.d
if(x==null){x=this.aJ()
this.d=x}w=J.ao(b)&0x3ffffff
v=this.aI(x,w)
if(v==null)this.aM(x,w,[this.aK(b,c)])
else{u=this.aP(v,b)
if(u>=0)v[u].b=c
else v.push(this.aK(b,c))}}},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aJ(this))
z=z.c}},
bk:function(a,b,c){var z
H.A(b,H.o(this,0))
H.A(c,H.o(this,1))
z=this.ag(a,b)
if(z==null)this.aM(a,b,this.aK(b,c))
else z.b=c},
bt:function(){this.r=this.r+1&67108863},
aK:function(a,b){var z,y
z=new H.hU(H.A(a,H.o(this,0)),H.A(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bt()
return z},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
l:function(a){return P.dD(this)},
ag:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
aM:function(a,b,c){a[b]=c},
de:function(a,b){delete a[b]},
dc:function(a,b){return this.ag(a,b)!=null},
aJ:function(){var z=Object.create(null)
this.aM(z,"<non-identifier-key>",z)
this.de(z,"<non-identifier-key>")
return z},
$isdA:1},
hN:{"^":"p;a",
$1:function(a){var z=this.a
return z.i(0,H.A(a,H.o(z,0)))},
$S:function(){var z=this.a
return{func:1,ret:H.o(z,1),args:[H.o(z,0)]}}},
hU:{"^":"b;a,b,0c,0d"},
ad:{"^":"dp;a,$ti",
gk:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.hV(z,z.r,this.$ti)
y.c=z.e
return y}},
hV:{"^":"b;a,b,0c,0d,$ti",
sbj:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aJ(z))
else{z=this.c
if(z==null){this.sbj(null)
return!1}else{this.sbj(z.a)
this.c=this.c.c
return!0}}},
$isas:1},
l8:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
l9:{"^":"p:13;a",
$2:function(a,b){return this.a(a,b)}},
la:{"^":"p:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kZ:function(a){return J.hK(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
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
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bi(b,a))},
ie:{"^":"k;",$isj4:1,"%":"DataView;ArrayBufferView;cA|e9|ea|dF|eb|ec|au"},
cA:{"^":"ie;",
gk:function(a){return a.length},
$isw:1,
$asw:I.bj,
$isz:1,
$asz:I.bj},
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
id:{"^":"dF;",$isac:1,"%":"Float32Array"},
mt:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mu:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ishH:1,
"%":"Int32Array"},
mv:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mw:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ig:{"^":"au;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isnf:1,
"%":"Uint32Array"},
mx:{"^":"au;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
my:{"^":"au;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e9:{"^":"cA+q;"},
ea:{"^":"e9+bY;"},
eb:{"^":"cA+q;"},
ec:{"^":"eb+bY;"}}],["","",,P,{"^":"",
jh:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kU()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bh(new P.jj(z),1)).observe(y,{childList:true})
return new P.ji(z,y,x)}else if(self.setImmediate!=null)return P.kV()
return P.kW()},
nq:[function(a){self.scheduleImmediate(H.bh(new P.jk(H.n(a,{func:1,ret:-1})),0))},"$1","kU",4,0,4],
nr:[function(a){self.setImmediate(H.bh(new P.jl(H.n(a,{func:1,ret:-1})),0))},"$1","kV",4,0,4],
ns:[function(a){H.n(a,{func:1,ret:-1})
P.ku(0,a)},"$1","kW",4,0,4],
kQ:function(a,b){if(H.bH(a,{func:1,args:[P.b,P.a3]}))return H.n(a,{func:1,ret:null,args:[P.b,P.a3]})
if(H.bH(a,{func:1,args:[P.b]}))return H.n(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.dc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kP:function(){var z,y
for(;z=$.aP,z!=null;){$.bg=null
y=z.b
$.aP=y
if(y==null)$.bf=null
z.a.$0()}},
nF:[function(){$.cJ=!0
try{P.kP()}finally{$.bg=null
$.cJ=!1
if($.aP!=null)$.cW().$1(P.es())}},"$0","es",0,0,1],
en:function(a){var z=new P.e1(H.n(a,{func:1,ret:-1}))
if($.aP==null){$.bf=z
$.aP=z
if(!$.cJ)$.cW().$1(P.es())}else{$.bf.b=z
$.bf=z}},
kT:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.en(a)
$.bg=$.bf
return}y=new P.e1(a)
x=$.bg
if(x==null){y.b=z
$.bg=y
$.aP=y}else{y.b=x.b
x.b=y
$.bg=y
if(y.b==null)$.bf=y}},
ln:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.K
if(C.f===y){P.c8(null,null,C.f,a)
return}y.toString
P.c8(null,null,y,H.n(y.bE(a),z))},
c7:function(a,b,c,d,e){var z={}
z.a=d
P.kT(new P.kR(z,e))},
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
kS:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.bE(d):c.dI(d,-1)
P.en(d)},
jj:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ji:{"^":"p:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jk:{"^":"p:0;a",
$0:function(){this.a.$0()}},
jl:{"^":"p:0;a",
$0:function(){this.a.$0()}},
kt:{"^":"b;a,0b,c",
d7:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bh(new P.kv(this,b),0),a)
else throw H.d(P.B("`setTimeout()` not found."))},
p:{
ku:function(a,b){var z=new P.kt(!0,0)
z.d7(a,b)
return z}}},
kv:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jo:{"^":"b;$ti"},
ko:{"^":"jo;a,$ti"},
aO:{"^":"b;0a,b,c,d,e,$ti",
e4:function(a){if(this.c!==6)return!0
return this.b.b.aS(H.n(this.d,{func:1,ret:P.V,args:[P.b]}),a.a,P.V,P.b)},
e0:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bH(z,{func:1,args:[P.b,P.a3]}))return H.cb(w.e7(z,a.a,a.b,null,y,P.a3),x)
else return H.cb(w.aS(H.n(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ag:{"^":"b;bx:a<,b,0du:c<,$ti",
cf:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.f){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kQ(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ag(0,$.K,[c])
w=b==null?1:3
this.bl(new P.aO(x,w,a,b,[z,c]))
return x},
ce:function(a,b){return this.cf(a,null,b)},
bl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.j(this.c,"$isag")
z=y.a
if(z<4){y.bl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c8(null,null,z,H.n(new P.jD(this,a),{func:1,ret:-1}))}},
bu:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isag")
y=u.a
if(y<4){u.bu(a)
return}this.a=y
this.c=u.c}z.a=this.ah(a)
y=this.b
y.toString
P.c8(null,null,y,H.n(new P.jI(z,this),{func:1,ret:-1}))}},
aL:function(){var z=H.j(this.c,"$isaO")
this.c=null
return this.ah(z)},
ah:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aD:function(a){var z,y,x
z=H.o(this,0)
H.cb(a,{futureOr:1,type:z})
y=this.$ti
if(H.aS(a,"$isb_",y,"$asb_"))if(H.aS(a,"$isag",y,null))P.e4(a,this)
else P.jE(a,this)
else{x=this.aL()
H.A(a,z)
this.a=4
this.c=a
P.be(this,x)}},
bo:function(a,b){var z
H.j(b,"$isa3")
z=this.aL()
this.a=8
this.c=new P.a_(a,b)
P.be(this,z)},
$isb_:1,
p:{
jE:function(a,b){var z,y,x
b.a=1
try{a.cf(new P.jF(b),new P.jG(b),null)}catch(x){z=H.a7(x)
y=H.bl(x)
P.ln(new P.jH(b,z,y))}},
e4:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isag")
if(z>=4){y=b.aL()
b.a=a.a
b.c=a.c
P.be(b,y)}else{y=H.j(b.c,"$isaO")
b.a=2
b.c=a
a.bu(y)}},
be:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.be(z.a,b)}y=z.a
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
if(y===8)new P.jL(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jK(x,b,r).$0()}else if((y&2)!==0)new P.jJ(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.C(y).$isb_){if(y.a>=4){n=H.j(t.c,"$isaO")
t.c=null
b=t.ah(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.e4(y,t)
return}}m=b.b
n=H.j(m.c,"$isaO")
m.c=null
b=m.ah(n)
y=x.a
u=x.b
if(!y){H.A(u,H.o(m,0))
m.a=4
m.c=u}else{H.j(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
jD:{"^":"p:0;a,b",
$0:function(){P.be(this.a,this.b)}},
jI:{"^":"p:0;a,b",
$0:function(){P.be(this.b,this.a.a)}},
jF:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aD(a)}},
jG:{"^":"p:16;a",
$2:function(a,b){H.j(b,"$isa3")
this.a.bo(a,b)},
$1:function(a){return this.$2(a,null)}},
jH:{"^":"p:0;a,b,c",
$0:function(){this.a.bo(this.b,this.c)}},
jL:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ca(H.n(w.d,{func:1}),null)}catch(v){y=H.a7(v)
x=H.bl(v)
if(this.d){w=H.j(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.C(z).$isb_){if(z instanceof P.ag&&z.gbx()>=4){if(z.gbx()===8){w=this.b
w.b=H.j(z.gdu(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ce(new P.jM(t),null)
w.a=!1}}},
jM:{"^":"p:17;a",
$1:function(a){return this.a}},
jK:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.A(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aS(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a7(t)
y=H.bl(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
jJ:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isa_")
w=this.c
if(w.e4(z)&&w.e!=null){v=this.b
v.b=w.e0(z)
v.a=!1}}catch(u){y=H.a7(u)
x=H.bl(u)
w=H.j(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
e1:{"^":"b;a,0b"},
iW:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.ag(0,$.K,[P.x])
z.a=0
x=H.o(this,0)
w=H.n(new P.iY(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.iZ(z,y),{func:1,ret:-1})
W.ak(this.a,this.b,w,!1,x)
return y}},
iY:{"^":"p;a,b",
$1:function(a){H.A(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.o(this.b,0)]}}},
iZ:{"^":"p:0;a,b",
$0:function(){this.b.aD(this.a.a)}},
iX:{"^":"b;"},
a_:{"^":"b;a,b",
l:function(a){return H.c(this.a)},
$isS:1},
kB:{"^":"b;",$isno:1},
kR:{"^":"p:0;a,b",
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
k7:{"^":"kB;",
e8:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.f===$.K){a.$0()
return}P.el(null,null,this,a,-1)}catch(x){z=H.a7(x)
y=H.bl(x)
P.c7(null,null,this,z,H.j(y,"$isa3"))}},
e9:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.K){a.$1(b)
return}P.em(null,null,this,a,b,-1,c)}catch(x){z=H.a7(x)
y=H.bl(x)
P.c7(null,null,this,z,H.j(y,"$isa3"))}},
dI:function(a,b){return new P.k9(this,H.n(a,{func:1,ret:b}),b)},
bE:function(a){return new P.k8(this,H.n(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.ka(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
ca:function(a,b){H.n(a,{func:1,ret:b})
if($.K===C.f)return a.$0()
return P.el(null,null,this,a,b)},
aS:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.K===C.f)return a.$1(b)
return P.em(null,null,this,a,b,c,d)},
e7:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.K===C.f)return a.$2(b,c)
return P.kS(null,null,this,a,b,c,d,e,f)}},
k9:{"^":"p;a,b,c",
$0:function(){return this.a.ca(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k8:{"^":"p:1;a,b",
$0:function(){return this.a.e8(this.b)}},
ka:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.e9(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cy:function(a,b,c){H.bL(a)
return H.t(H.l_(a,new H.dz(0,0,[b,c])),"$isdA",[b,c],"$asdA")},
Q:function(a,b){return new H.dz(0,0,[a,b])},
a2:function(a,b,c,d){return new P.jT(0,0,[d])},
hI:function(a,b,c){var z,y
if(P.cK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.e])
y=$.bm()
C.a.j(y,a)
try{P.kO(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.dR(b,H.lf(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cu:function(a,b,c){var z,y,x
if(P.cK(a))return b+"..."+c
z=new P.cE(b)
y=$.bm()
C.a.j(y,a)
try{x=z
x.a=P.dR(x.ga_(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
cK:function(a){var z,y
for(z=0;y=$.bm(),z<y.length;++z)if(a===y[z])return!0
return!1},
kO:function(a,b){var z,y,x,w,v,u,t,s,r,q
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
try{C.a.j($.bm(),a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.fw(a,new P.hZ(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.bm()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
jT:{"^":"jO;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){var z=new P.e8(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbG")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.j(y[b],"$isbG")!=null}else return this.da(b)},
da:function(a){var z=this.d
if(z==null)return!1
return this.aH(this.br(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cG()
this.b=z}return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cG()
this.c=y}return this.bm(y,b)}else return this.d8(0,b)},
d8:function(a,b){var z,y,x
H.A(b,H.o(this,0))
z=this.d
if(z==null){z=P.cG()
this.d=z}y=this.bp(b)
x=z[y]
if(x==null)z[y]=[this.aC(b)]
else{if(this.aH(x,b)>=0)return!1
x.push(this.aC(b))}return!0},
c9:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dn(0,b)},
dn:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.br(z,b)
x=this.aH(y,b)
if(x<0)return!1
this.bz(y.splice(x,1)[0])
return!0},
a9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aB()}},
bm:function(a,b){H.A(b,H.o(this,0))
if(H.j(a[b],"$isbG")!=null)return!1
a[b]=this.aC(b)
return!0},
bv:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isbG")
if(z==null)return!1
this.bz(z)
delete a[b]
return!0},
aB:function(){this.r=this.r+1&67108863},
aC:function(a){var z,y
z=new P.bG(H.A(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aB()
return z},
bz:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aB()},
bp:function(a){return J.ao(a)&0x3ffffff},
br:function(a,b){return a[this.bp(b)]},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
p:{
cG:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bG:{"^":"b;a,0b,0c"},
e8:{"^":"b;a,b,0c,0d,$ti",
sbn:function(a){this.d=H.A(a,H.o(this,0))},
gE:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aJ(z))
else{z=this.c
if(z==null){this.sbn(null)
return!1}else{this.sbn(H.A(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isas:1,
p:{
jU:function(a,b,c){var z=new P.e8(a,b,[c])
z.c=a.e
return z}}},
jO:{"^":"iL;"},
hW:{"^":"jV;",$ism:1,$isa:1},
q:{"^":"b;$ti",
gv:function(a){return new H.dB(a,this.gk(a),0,[H.aT(this,a,"q",0)])},
u:function(a,b){return this.i(a,b)},
e_:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.aT(this,a,"q",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.d(P.aJ(a))}return y},
bZ:function(a,b,c,d){var z
H.A(d,H.aT(this,a,"q",0))
P.iC(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.h(a,z,d)},
l:function(a){return P.cu(a,"[","]")}},
dC:{"^":"W;"},
hZ:{"^":"p:7;a,b",
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
H.n(b,{func:1,ret:-1,args:[H.aT(this,a,"W",0),H.aT(this,a,"W",1)]})
for(z=J.bS(this.gK(a));z.t();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.aW(this.gK(a))},
l:function(a){return P.dD(a)},
$isN:1},
iM:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bS(H.t(b,"$ism",this.$ti,"$asm"));z.t();)this.j(0,z.gE(z))},
l:function(a){return P.cu(this,"{","}")},
$ism:1,
$ismP:1},
iL:{"^":"iM;"},
jV:{"^":"b+q;"}}],["","",,P,{"^":"",
hq:function(a){if(a instanceof H.p)return a.l(0)
return"Instance of '"+H.b6(a)+"'"},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.br(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hq(a)},
dt:function(a){return new P.jA(a)},
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
z=P.hd(H.iy(this))
y=P.bs(H.iw(this))
x=P.bs(H.is(this))
w=P.bs(H.it(this))
v=P.bs(H.iv(this))
u=P.bs(H.ix(this))
t=P.he(H.iu(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isZ:1,
$asZ:function(){return[P.bW]},
p:{
hd:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
he:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bs:function(a){if(a>=10)return""+a
return"0"+a}}},
al:{"^":"H;"},
"+double":0,
aY:{"^":"b;a",
W:function(a,b){return C.d.W(this.a,H.j(b,"$isaY").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.d.O(this.a,H.j(b,"$isaY").a)},
l:function(a){var z,y,x,w,v
z=new P.hm()
y=this.a
if(y<0)return"-"+new P.aY(0-y).l(0)
x=z.$1(C.d.a0(y,6e7)%60)
w=z.$1(C.d.a0(y,1e6)%60)
v=new P.hl().$1(y%1e6)
return""+C.d.a0(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
$isZ:1,
$asZ:function(){return[P.aY]},
p:{
hk:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hl:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hm:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
S:{"^":"b;"},
dI:{"^":"S;",
l:function(a){return"Throw of null."}},
aI:{"^":"S;a,b,c,d",
gaF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaE:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaF()+y+x
if(!this.a)return w
v=this.gaE()
u=P.bX(this.b)
return w+v+": "+u},
p:{
dc:function(a,b,c){return new P.aI(!0,a,b,c)}}},
dK:{"^":"aI;e,f,a,b,c,d",
gaF:function(){return"RangeError"},
gaE:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
c1:function(a,b,c){return new P.dK(null,null,!0,a,b,"Value not in range")},
b7:function(a,b,c,d,e){return new P.dK(b,c,!0,a,d,"Invalid value")},
iC:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.b7(a,0,c,"start",f))
if(a>b||b>c)throw H.d(P.b7(b,a,c,"end",f))
return b}}},
hG:{"^":"aI;e,k:f>,a,b,c,d",
gaF:function(){return"RangeError"},
gaE:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.ad()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.c(y)},
p:{
I:function(a,b,c,d,e){var z=H.L(e==null?J.aW(b):e)
return new P.hG(b,z,!0,a,c,"Index out of range")}}},
j8:{"^":"S;a",
l:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.j8(a)}}},
j6:{"^":"S;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dZ:function(a){return new P.j6(a)}}},
cC:{"^":"S;a",
l:function(a){return"Bad state: "+this.a},
p:{
cD:function(a){return new P.cC(a)}}},
h6:{"^":"S;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bX(z)+"."},
p:{
aJ:function(a){return new P.h6(a)}}},
dQ:{"^":"b;",
l:function(a){return"Stack Overflow"},
$isS:1},
hc:{"^":"S;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jA:{"^":"b;a",
l:function(a){return"Exception: "+this.a}},
bv:{"^":"b;"},
x:{"^":"H;"},
"+int":0,
m:{"^":"b;$ti",
aU:["cL",function(a,b){var z=H.cO(this,"m",0)
return new H.e_(this,H.n(b,{func:1,ret:P.V,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gv(this)
for(y=0;z.t();)++y
return y},
gX:function(a){var z,y
z=this.gv(this)
if(!z.t())throw H.d(H.dw())
y=z.gE(z)
if(z.t())throw H.d(H.hJ())
return y},
u:function(a,b){var z,y,x
if(b<0)H.ai(P.b7(b,0,null,"index",null))
for(z=this.gv(this),y=0;z.t();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.I(b,this,"index",null,y))},
l:function(a){return P.hI(this,"(",")")}},
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
gC:function(a){return H.b5(this)},
l:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.l(this)}},
a3:{"^":"b;"},
e:{"^":"b;",$isZ:1,
$asZ:function(){return[P.e]},
$isio:1},
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
ho:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).P(z,a,b,c)
y.toString
z=W.u
z=new H.e_(new W.a5(y),H.n(new W.hp(),{func:1,ret:P.V,args:[z]}),[z])
return H.j(z.gX(z),"$isR")},
ds:function(a){H.j(a,"$isO")
return"wheel"},
aZ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fA(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a7(x)}return z},
jx:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.jr(a)
if(!!J.C(z).$isO)return z
return}else return H.j(a,"$isO")},
ep:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.f)return a
return z.dJ(a,b)},
P:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ls:{"^":"k;0k:length=","%":"AccessibleNodeList"},
fU:{"^":"P;",
l:function(a){return String(a)},
$isfU:1,
"%":"HTMLAnchorElement"},
lt:{"^":"P;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
dd:{"^":"P;",$isdd:1,"%":"HTMLBaseElement"},
fZ:{"^":"k;","%":";Blob"},
bU:{"^":"P;",$isbU:1,"%":"HTMLBodyElement"},
co:{"^":"P;0n:height=,0m:width=",
aW:function(a,b,c){if(c!=null)return this.dh(a,b,P.kX(c,null))
return this.di(a,b)},
cz:function(a,b){return this.aW(a,b,null)},
dh:function(a,b,c){return a.getContext(b,c)},
di:function(a,b){return a.getContext(b)},
$isco:1,
"%":"HTMLCanvasElement"},
cp:{"^":"k;",
dY:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ao:function(a){return P.a1(a.getContextAttributes())},
$iscp:1,
"%":"CanvasRenderingContext2D"},
ly:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
h7:{"^":"cq;",$ish7:1,"%":"CSSNumericValue|CSSUnitValue"},
lE:{"^":"ha;0k:length=","%":"CSSPerspective"},
ap:{"^":"k;",$isap:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
h8:{"^":"jp;0k:length=",
b1:function(a,b){var z=this.dj(a,this.az(a,b))
return z==null?"":z},
az:function(a,b){var z,y
z=$.eM()
y=z[b]
if(typeof y==="string")return y
y=this.dA(a,b)
z[b]=y
return y},
dA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hf()+b
if(z in a)return z
return b},
dj:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h9:{"^":"b;",
gn:function(a){return this.b1(a,"height")},
gm:function(a){return this.b1(a,"width")}},
cq:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ha:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lG:{"^":"cq;0k:length=","%":"CSSTransformValue"},
lH:{"^":"cq;0k:length=","%":"CSSUnparsedValue"},
lJ:{"^":"k;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hg:{"^":"P;","%":"HTMLDivElement"},
hh:{"^":"u;",
dD:function(a,b){return a.adoptNode(b)},
dd:function(a,b){return a.createEvent(b)},
aX:function(a,b){return a.getElementsByTagName(b)},
cA:function(a,b){return a.getElementById(b)},
c8:function(a,b){return a.querySelector(b)},
gc3:function(a){return new W.bE(a,"mousedown",!1,[W.X])},
gc4:function(a){return new W.bE(a,"mousemove",!1,[W.X])},
gc5:function(a){return new W.bE(a,"mouseup",!1,[W.X])},
gc6:function(a){return new W.bE(a,H.v(W.ds(a)),!1,[W.aN])},
"%":"XMLDocument;Document"},
lK:{"^":"k;",
l:function(a){return String(a)},
"%":"DOMException"},
hi:{"^":"k;",
dR:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lL:{"^":"jt;",
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
hj:{"^":"k;",
l:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gm(a))+" x "+H.c(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aS(b,"$isY",[P.H],"$asY"))return!1
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
lM:{"^":"jv;",
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
lN:{"^":"k;0k:length=","%":"DOMTokenList"},
R:{"^":"u;0ea:tagName=",
gdG:function(a){return new W.jw(a)},
l:function(a){return a.localName},
P:["ar",function(a,b,c,d){var z,y,x,w
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
y=(y&&C.J).dR(y,"")
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
w=(z&&C.C).dP(z,b)}else{x.innerHTML=b
w=$.aj.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.L(w,y)}z=$.aj.body
if(x==null?z!=null:x!==z)J.d5(x)
c.b7(w)
C.i.dD(document,w)
return w},function(a,b,c){return this.P(a,b,c,null)},"dQ",null,null,"gei",5,5,null],
cE:function(a,b,c,d){a.textContent=null
this.L(a,this.P(a,b,c,d))},
cD:function(a,b){return this.cE(a,b,null,null)},
a2:function(a,b){return a.getAttribute(b)},
dq:function(a,b){return a.removeAttribute(b)},
gc2:function(a){return new W.bd(a,"change",!1,[W.T])},
gc3:function(a){return new W.bd(a,"mousedown",!1,[W.X])},
gc4:function(a){return new W.bd(a,"mousemove",!1,[W.X])},
gc5:function(a){return new W.bd(a,"mouseup",!1,[W.X])},
gc6:function(a){return new W.bd(a,H.v(W.ds(a)),!1,[W.aN])},
$isR:1,
"%":";Element"},
hp:{"^":"p:18;",
$1:function(a){return!!J.C(H.j(a,"$isu")).$isR}},
lP:{"^":"P;0n:height=,0m:width=","%":"HTMLEmbedElement"},
T:{"^":"k;",
gcb:function(a){return W.cH(a.target)},
dk:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isT:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
O:{"^":"k;",
dC:function(a,b,c,d){H.n(c,{func:1,args:[W.T]})
if(c!=null)this.d9(a,b,c,!1)},
d9:function(a,b,c,d){return a.addEventListener(b,H.bh(H.n(c,{func:1,args:[W.T]}),1),!1)},
dU:function(a,b){return a.dispatchEvent(b)},
$isO:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ed|ee|eh|ei"},
aq:{"^":"fZ;",$isaq:1,"%":"File"},
m5:{"^":"jC;",
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
m6:{"^":"O;0k:length=","%":"FileWriter"},
m9:{"^":"P;0k:length=","%":"HTMLFormElement"},
ar:{"^":"k;",$isar:1,"%":"Gamepad"},
hA:{"^":"P;","%":"HTMLHeadElement"},
ma:{"^":"k;0k:length=","%":"History"},
mb:{"^":"jQ;",
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
hB:{"^":"hh;","%":"HTMLDocument"},
mc:{"^":"P;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mf:{"^":"k;0n:height=,0m:width=","%":"ImageBitmap"},
mg:{"^":"k;0n:height=,0m:width=","%":"ImageData"},
mh:{"^":"P;0n:height=,0m:width=","%":"HTMLImageElement"},
dv:{"^":"P;0n:height=,0m:width=",$isdv:1,"%":"HTMLInputElement"},
b0:{"^":"dY;",$isb0:1,"%":"KeyboardEvent"},
hX:{"^":"k;",
l:function(a){return String(a)},
$ishX:1,
"%":"Location"},
i3:{"^":"P;","%":"HTMLAudioElement;HTMLMediaElement"},
mp:{"^":"k;0k:length=","%":"MediaList"},
mq:{"^":"jX;",
i:function(a,b){return P.a1(a.get(H.v(b)))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.i5(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isN:1,
$asN:function(){return[P.e,null]},
"%":"MIDIInputMap"},
i5:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
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
"%":"MIDIOutputMap"},
i6:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
at:{"^":"k;",$isat:1,"%":"MimeType"},
ms:{"^":"k_;",
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
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.C(W.cH(z)).$isR)throw H.d(P.B("offsetX is only supported on elements"))
y=H.j(W.cH(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.ba()
if(typeof x!=="number")return x.ba()
return new P.b4(C.k.cg(z-u),C.k.cg(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
a5:{"^":"hW;a",
gX:function(a){var z,y
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
return new W.du(z,z.length,-1,[H.aT(C.W,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asq:function(){return[W.u]},
$asm:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"O;0e5:previousSibling=",
e6:function(a){var z=a.parentNode
if(z!=null)J.bP(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cK(a):z},
L:function(a,b){return a.appendChild(b)},
dr:function(a,b){return a.removeChild(b)},
ds:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ih:{"^":"k1;",
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
mB:{"^":"P;0n:height=,0m:width=","%":"HTMLObjectElement"},
mD:{"^":"O;0n:height=,0m:width=","%":"OffscreenCanvas"},
mE:{"^":"k;0n:height=,0m:width=","%":"PaintSize"},
aw:{"^":"k;0k:length=",$isaw:1,"%":"Plugin"},
mG:{"^":"k5;",
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
mI:{"^":"X;0n:height=,0m:width=","%":"PointerEvent"},
iB:{"^":"k;",
dP:function(a,b){return a.createContextualFragment(b)},
cB:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mN:{"^":"kb;",
i:function(a,b){return P.a1(a.get(H.v(b)))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.iI(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isN:1,
$asN:function(){return[P.e,null]},
"%":"RTCStatsReport"},
iI:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
mO:{"^":"k;0n:height=,0m:width=","%":"Screen"},
dN:{"^":"P;0k:length=",$isdN:1,"%":"HTMLSelectElement"},
ax:{"^":"O;",$isax:1,"%":"SourceBuffer"},
mQ:{"^":"ee;",
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
mR:{"^":"kh;",
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
mU:{"^":"kk;",
i:function(a,b){return this.bs(a,H.v(b))},
G:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.dm(a,z)
if(y==null)return
b.$2(y,this.bs(a,y))}},
gK:function(a){var z=H.h([],[P.e])
this.G(a,new W.iV(z))
return z},
gk:function(a){return a.length},
bs:function(a,b){return a.getItem(b)},
dm:function(a,b){return a.key(b)},
$asW:function(){return[P.e,P.e]},
$isN:1,
$asN:function(){return[P.e,P.e]},
"%":"Storage"},
iV:{"^":"p:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aA:{"^":"k;",$isaA:1,"%":"CSSStyleSheet|StyleSheet"},
j_:{"^":"P;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=W.ho("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a5(y).H(0,new W.a5(z))
return y},
"%":"HTMLTableElement"},
mX:{"^":"P;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gX(z)
x.toString
z=new W.a5(x)
w=z.gX(z)
y.toString
w.toString
new W.a5(y).H(0,new W.a5(w))
return y},
"%":"HTMLTableRowElement"},
mY:{"^":"P;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.P(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gX(z)
y.toString
x.toString
new W.a5(y).H(0,new W.a5(x))
return y},
"%":"HTMLTableSectionElement"},
dT:{"^":"P;",$isdT:1,"%":"HTMLTemplateElement"},
mZ:{"^":"k;0m:width=","%":"TextMetrics"},
aB:{"^":"O;",$isaB:1,"%":"TextTrack"},
aC:{"^":"O;",$isaC:1,"%":"TextTrackCue|VTTCue"},
n_:{"^":"ks;",
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
n0:{"^":"ei;",
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
n1:{"^":"k;0k:length=","%":"TimeRanges"},
aD:{"^":"k;",$isaD:1,"%":"Touch"},
n2:{"^":"kx;",
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
n3:{"^":"k;0k:length=","%":"TrackDefaultList"},
dY:{"^":"T;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nh:{"^":"k;",
l:function(a){return String(a)},
"%":"URL"},
nk:{"^":"i3;0n:height=,0m:width=","%":"HTMLVideoElement"},
nl:{"^":"O;0k:length=","%":"VideoTrackList"},
nm:{"^":"O;0n:height=,0m:width=","%":"VisualViewport"},
nn:{"^":"k;0m:width=","%":"VTTRegion"},
aN:{"^":"X;",
gdT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.B("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
je:{"^":"O;",
gdF:function(a){var z,y,x
z=P.H
y=new P.ag(0,$.K,[z])
x=H.n(new W.jf(new P.ko(y,[z])),{func:1,ret:-1,args:[P.H]})
this.dg(a)
this.dt(a,W.ep(x,z))
return y},
dt:function(a,b){return a.requestAnimationFrame(H.bh(H.n(b,{func:1,ret:-1,args:[P.H]}),1))},
dg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise0:1,
"%":"DOMWindow|Window"},
jf:{"^":"p:20;a",
$1:function(a){var z=this.a
a=H.cb(H.cR(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.ai(P.cD("Future already completed"))
z.aD(a)}},
e2:{"^":"u;",$ise2:1,"%":"Attr"},
nt:{"^":"kD;",
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
nv:{"^":"hj;",
l:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aS(b,"$isY",[P.H],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gC:function(a){return W.e7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nw:{"^":"kF;",
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
nB:{"^":"kH;",
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
nC:{"^":"kJ;",
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
nD:{"^":"kL;",
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
jm:{"^":"dC;df:a<",
G:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gK(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.D)(z),++v){u=z[v]
b.$2(u,w.a2(x,u))}},
gK:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.j(z[w],"$ise2")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.e,P.e]},
$asN:function(){return[P.e,P.e]}},
jw:{"^":"jm;a",
i:function(a,b){return J.ck(this.a,H.v(b))},
gk:function(a){return this.gK(this).length}},
bE:{"^":"iW;a,b,c,$ti"},
bd:{"^":"bE;a,b,c,$ti"},
jy:{"^":"iX;a,b,c,d,e,$ti",p:{
ak:function(a,b,c,d,e){var z=W.ep(new W.jz(c),W.T)
if(z!=null&&!0)J.fd(a,b,z,!1)
return new W.jy(0,a,b,z,!1,[e])}}},
jz:{"^":"p:21;a",
$1:function(a){return this.a.$1(H.j(a,"$isT"))}},
bF:{"^":"b;a",
d5:function(a){var z,y
z=$.cX()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.T[y],W.l5())
for(y=0;y<12;++y)z.h(0,C.v[y],W.l6())}},
a1:function(a){return $.f0().B(0,W.aZ(a))},
V:function(a,b,c){var z,y,x
z=W.aZ(a)
y=$.cX()
x=y.i(0,H.c(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c9(x.$4(a,b,c,this))},
$isae:1,
p:{
e5:function(a){var z,y
z=document.createElement("a")
y=new W.kc(z,window.location)
y=new W.bF(y)
y.d5(a)
return y},
nz:[function(a,b,c,d){H.j(a,"$isR")
H.v(b)
H.v(c)
H.j(d,"$isbF")
return!0},"$4","l5",16,0,12],
nA:[function(a,b,c,d){var z,y,x
H.j(a,"$isR")
H.v(b)
H.v(c)
z=H.j(d,"$isbF").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","l6",16,0,12]}},
r:{"^":"b;$ti",
gv:function(a){return new W.du(a,this.gk(a),-1,[H.aT(this,a,"r",0)])}},
dG:{"^":"b;a",
a1:function(a){return C.a.bB(this.a,new W.ij(a))},
V:function(a,b,c){return C.a.bB(this.a,new W.ii(a,b,c))},
$isae:1},
ij:{"^":"p:9;a",
$1:function(a){return H.j(a,"$isae").a1(this.a)}},
ii:{"^":"p:9;a,b,c",
$1:function(a){return H.j(a,"$isae").V(this.a,this.b,this.c)}},
kd:{"^":"b;",
d6:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aU(0,new W.ke())
y=b.aU(0,new W.kf())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
a1:function(a){return this.a.B(0,W.aZ(a))},
V:["cN",function(a,b,c){var z,y
z=W.aZ(a)
y=this.c
if(y.B(0,H.c(z)+"::"+b))return this.d.dE(c)
else if(y.B(0,"*::"+b))return this.d.dE(c)
else{y=this.b
if(y.B(0,H.c(z)+"::"+b))return!0
else if(y.B(0,"*::"+b))return!0
else if(y.B(0,H.c(z)+"::*"))return!0
else if(y.B(0,"*::*"))return!0}return!1}],
$isae:1},
ke:{"^":"p:10;",
$1:function(a){return!C.a.B(C.v,H.v(a))}},
kf:{"^":"p:10;",
$1:function(a){return C.a.B(C.v,H.v(a))}},
kp:{"^":"kd;e,a,b,c,d",
V:function(a,b,c){if(this.cN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ck(a,"template")==="")return this.e.B(0,b)
return!1},
p:{
eg:function(){var z,y,x,w,v
z=P.e
y=P.cz(C.u,z)
x=H.o(C.u,0)
w=H.n(new W.kq(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.kp(y,P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),null)
y.d6(null,new H.i1(C.u,w,[x,z]),v,null)
return y}}},
kq:{"^":"p:22;",
$1:function(a){return"TEMPLATE::"+H.c(H.v(a))}},
kn:{"^":"b;",
a1:function(a){var z=J.C(a)
if(!!z.$isdM)return!1
z=!!z.$isJ
if(z&&W.aZ(a)==="foreignObject")return!1
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
if(z<y){this.sbq(J.bo(this.a,z))
this.c=z
return!0}this.sbq(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isas:1},
jq:{"^":"b;a",$isO:1,$ise0:1,p:{
jr:function(a){if(a===window)return H.j(a,"$ise0")
else return new W.jq(a)}}},
ae:{"^":"b;"},
kc:{"^":"b;a,b",$isng:1},
ej:{"^":"b;a",
b7:function(a){new W.kA(this).$2(a,null)},
a6:function(a,b){if(b==null)J.d5(a)
else J.bP(b,a)},
dw:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fx(a)
x=J.ck(y.gdf(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a7(t)}v="element unprintable"
try{v=J.br(a)}catch(t){H.a7(t)}try{u=W.aZ(a)
this.dv(H.j(a,"$isR"),b,z,v,u,H.j(y,"$isN"),H.v(x))}catch(t){if(H.a7(t) instanceof P.aI)throw t
else{this.a6(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a1(a)){this.a6(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a6(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gK(f)
y=H.h(z.slice(0),[H.o(z,0)])
for(x=f.gK(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.V(a,J.fL(v),w.a2(z,v))){window
u="Removing disallowed attribute <"+H.c(e)+" "+v+'="'+H.c(w.a2(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a2(z,v)
w.dq(z,v)}}if(!!J.C(a).$isdT)this.b7(a.content)},
$ismz:1},
kA:{"^":"p:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dw(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fz(z)}catch(w){H.a7(w)
v=H.j(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bP(u,v)}else J.bP(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.j(y,"$isu")}}},
jp:{"^":"k+h9;"},
js:{"^":"k+q;"},
jt:{"^":"js+r;"},
ju:{"^":"k+q;"},
jv:{"^":"ju+r;"},
jB:{"^":"k+q;"},
jC:{"^":"jB+r;"},
jP:{"^":"k+q;"},
jQ:{"^":"jP+r;"},
jX:{"^":"k+W;"},
jY:{"^":"k+W;"},
jZ:{"^":"k+q;"},
k_:{"^":"jZ+r;"},
k0:{"^":"k+q;"},
k1:{"^":"k0+r;"},
k4:{"^":"k+q;"},
k5:{"^":"k4+r;"},
kb:{"^":"k+W;"},
ed:{"^":"O+q;"},
ee:{"^":"ed+r;"},
kg:{"^":"k+q;"},
kh:{"^":"kg+r;"},
kk:{"^":"k+W;"},
kr:{"^":"k+q;"},
ks:{"^":"kr+r;"},
eh:{"^":"O+q;"},
ei:{"^":"eh+r;"},
kw:{"^":"k+q;"},
kx:{"^":"kw+r;"},
kC:{"^":"k+q;"},
kD:{"^":"kC+r;"},
kE:{"^":"k+q;"},
kF:{"^":"kE+r;"},
kG:{"^":"k+q;"},
kH:{"^":"kG+r;"},
kI:{"^":"k+q;"},
kJ:{"^":"kI+r;"},
kK:{"^":"k+q;"},
kL:{"^":"kK+r;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.v(y[w])
z.h(0,v,a[v])}return z},
kX:function(a,b){var z={}
a.G(0,new P.kY(z))
return z},
dm:function(){var z=$.dl
if(z==null){z=J.ch(window.navigator.userAgent,"Opera",0)
$.dl=z}return z},
hf:function(){var z,y
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
kY:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",il:{"^":"iH;",$isil:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},iH:{"^":"O;","%":";IDBRequest"},nj:{"^":"T;0cb:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lo:function(a){return Math.sqrt(a)},
e6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"b;an:a>,ac:b>,$ti",
l:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aS(b,"$isb4",[P.H],null)&&this.a==J.bT(b)&&this.b==b.gac(b)},
gC:function(a){var z,y,x
z=J.ao(this.a)
y=J.ao(this.b)
y=P.e6(P.e6(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
k6:{"^":"b;"},
Y:{"^":"k6;$ti"}}],["","",,P,{"^":"",fV:{"^":"k;",$isfV:1,"%":"SVGAnimatedLength"},lQ:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},lR:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lS:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lT:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},lU:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lV:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lW:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lX:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},lY:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lZ:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},m_:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},m0:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},m1:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},m2:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},m3:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},m4:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},m7:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},m8:{"^":"bw;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hw:{"^":"bw;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bw:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mi:{"^":"bw;0n:height=,0m:width=","%":"SVGImageElement"},b1:{"^":"k;",$isb1:1,"%":"SVGLength"},mn:{"^":"jS;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.T(a,b)},
h:function(a,b,c){H.j(c,"$isb1")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
T:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b1]},
$ism:1,
$asm:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asr:function(){return[P.b1]},
"%":"SVGLengthList"},mo:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"k;",$isb3:1,"%":"SVGNumber"},mA:{"^":"k3;",
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
"%":"SVGNumberList"},mF:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},mH:{"^":"k;0k:length=","%":"SVGPointList"},mJ:{"^":"k;0n:height=,0m:width=","%":"SVGRect"},mK:{"^":"hw;0n:height=,0m:width=","%":"SVGRectElement"},dM:{"^":"J;",$isdM:1,"%":"SVGScriptElement"},mV:{"^":"km;",
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
C.a.j(z,new W.kn())
c=new W.ej(new W.dG(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dQ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a5(w)
u=z.gX(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.L(v,x)
return v},
gc2:function(a){return new W.bd(a,"change",!1,[W.T])},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mW:{"^":"bw;0n:height=,0m:width=","%":"SVGSVGElement"},b9:{"^":"k;",$isb9:1,"%":"SVGTransform"},n4:{"^":"kz;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.T(a,b)},
h:function(a,b,c){H.j(c,"$isb9")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
T:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b9]},
$ism:1,
$asm:function(){return[P.b9]},
$isa:1,
$asa:function(){return[P.b9]},
$asr:function(){return[P.b9]},
"%":"SVGTransformList"},ni:{"^":"bw;0n:height=,0m:width=","%":"SVGUseElement"},jR:{"^":"k+q;"},jS:{"^":"jR+r;"},k2:{"^":"k+q;"},k3:{"^":"k2+r;"},kl:{"^":"k+q;"},km:{"^":"kl+r;"},ky:{"^":"k+q;"},kz:{"^":"ky+r;"}}],["","",,P,{"^":"",ac:{"^":"b;",$ism:1,
$asm:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
$isj4:1}}],["","",,P,{"^":"",lu:{"^":"k;0k:length=","%":"AudioBuffer"},lv:{"^":"jn;",
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
$2:function(a,b){return C.a.j(this.a,a)}},lw:{"^":"O;0k:length=","%":"AudioTrackList"},fY:{"^":"O;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mC:{"^":"fY;0k:length=","%":"OfflineAudioContext"},jn:{"^":"k+W;"}}],["","",,P,{"^":"",h_:{"^":"k;",$ish_:1,"%":"WebGLBuffer"},hv:{"^":"k;",$ishv:1,"%":"WebGLFramebuffer"},iz:{"^":"k;",$isiz:1,"%":"WebGLProgram"},mL:{"^":"k;",
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
ao:function(a){return P.a1(a.getContextAttributes())},
aY:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){this.aN(a,b,c,d,e,f,g)
return},
cc:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
aN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
"%":"WebGLRenderingContext"},mM:{"^":"k;",
dH:function(a,b){return a.beginTransformFeedback(b)},
dK:function(a,b){return a.bindVertexArray(b)},
dS:function(a){return a.createVertexArray()},
dV:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dW:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dX:function(a){return a.endTransformFeedback()},
ed:function(a,b,c,d){this.dB(a,b,H.t(c,"$isa",[P.e],"$asa"),d)
return},
dB:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ee:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
ao:function(a){return P.a1(a.getContextAttributes())},
aY:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c_:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){this.aN(a,b,c,d,e,f,g)
return},
cc:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
aN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
"%":"WebGL2RenderingContext"},iN:{"^":"k;",$isiN:1,"%":"WebGLShader"},j0:{"^":"k;",$isj0:1,"%":"WebGLTexture"},j5:{"^":"k;",$isj5:1,"%":"WebGLUniformLocation"},jc:{"^":"k;",$isjc:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mS:{"^":"kj;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return P.a1(this.dl(a,b))},
h:function(a,b,c){H.j(c,"$isN")
throw H.d(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
dl:function(a,b){return a.item(b)},
$asq:function(){return[[P.N,,,]]},
$ism:1,
$asm:function(){return[[P.N,,,]]},
$isa:1,
$asa:function(){return[[P.N,,,]]},
$asr:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},ki:{"^":"k+q;"},kj:{"^":"ki+r;"}}],["","",,G,{"^":"",
jg:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.c(z[y]))}return C.a.aa(z,"\n")},
e3:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bP(a,b)
z.b8(a,y,c)
z.bM(a,y)
x=H.c9(z.b3(a,y,35713))
if(x!=null&&!x){w=z.b2(a,y)
P.an("E:Compilation failed:")
P.an("E:"+G.jg(c))
P.an("E:Failure:")
P.an(C.j.I("E:",w))
throw H.d(w)}return y},
bu:function(a,b){var z,y,x
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
hs:function(a,b){var z,y
H.t(a,"$isa",[T.y],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.e.h(b,z,J.bT(a[y]))
if(y>=a.length)return H.f(a,y)
C.e.h(b,z+1,J.cj(a[y]))}return b},
ht:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.bc],"$asa")
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
hr:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.x]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.h(b,z,J.bo(a[y],0))
if(y>=a.length)return H.f(a,y)
C.o.h(b,z+1,J.bo(a[y],1))
if(y>=a.length)return H.f(a,y)
C.o.h(b,z+2,J.bo(a[y],2))
if(y>=a.length)return H.f(a,y)
C.o.h(b,z+3,J.bo(a[y],3))}return b},
jN:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ad(z,[H.o(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.x]],v=[P.al],u=[T.bc],t=[T.i],s=[T.y];y.t();){r=y.d
if(!x.ak(0,r)){r="Dropping unnecessary attribute: "+H.c(r)
if($.ew>0)H.bM("I: "+r)
continue}q=z.i(0,r)
switch($.a8().i(0,r).a){case"vec2":b.a3(r,G.hs(H.bO(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a3(r,G.bu(H.bO(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a3(r,G.ht(H.bO(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a3(r,new Float32Array(H.c5(H.bO(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a3(r,G.hr(H.bO(q,"$isa",w,"$asa"),null),4)
break}}},
ct:function(a,b,c){var z=G.i4(a,b.d,4,b.e.x)
z.Y(G.bu(c.d,null))
z.cP(c.cV())
G.jN(c,z)
return z},
aL:{"^":"b;"},
aE:{"^":"aL;d,a,b,c",
aw:function(){return this.d},
l:function(a){var z,y,x,w
z=H.h(["{"+new H.dX(H.l2(this)).l(0)+"}["+H.c(this.a)+"]"],[P.e])
for(y=this.d,x=new H.ad(y,[H.o(y,0)]),x=x.gv(x);x.t();){w=x.d
C.a.j(z,H.c(w)+": "+H.c(y.i(0,w)))}return C.a.aa(z,"\n")}},
h1:{"^":"b;0a,b",
bY:function(a,b,c){J.fu(this.a,b)
if(c>0)J.fR(this.a,b,c)},
ct:function(a,b,c,d,e,f,g,h){J.cg(this.a,34962,b)
J.fS(this.a,c,d,e,!1,g,h)}},
hu:{"^":"b;a,b,c,d,e"},
ab:{"^":"b;aj:a>,a7:b>,a8:c>",p:{
M:function(a,b,c){return new G.ab(a,b,c)}}},
bt:{"^":"b;aj:a>,a7:b>,a8:c>,d"},
cs:{"^":"b;a,b,c,d,e",
Z:function(a){switch($.a8().i(0,a).a){case"vec2":this.e.h(0,a,H.h([],[T.y]))
break
case"vec3":this.e.h(0,a,H.h([],[T.i]))
break
case"vec4":this.e.h(0,a,H.h([],[T.bc]))
break
case"float":this.e.h(0,a,H.h([],[P.al]))
break
case"uvec4":this.e.h(0,a,H.h([],[[P.a,P.x]]))
break}},
cQ:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.bt(z,z+1,z+2,z+3))},
Y:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.i],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x){w=a[x]
w.toString
v=new T.i(new Float32Array(3))
v.A(w)
C.a.j(y,v)}},
at:function(a,b){var z,y,x,w,v,u,t
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
au:function(a,b){var z,y,x,w,v,u
z=[T.i]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.D)(b),++w){v=b[w]
v.toString
u=new T.i(new Float32Array(3))
u.A(v)
x.j(y,u)}},
cV:function(){var z,y,x,w,v,u,t,s,r
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
C.a.j(z,H.c(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.aa(z," ")}},
b2:{"^":"aL;",
ax:function(a,b,c,d){this.e.A(c)
this.f.A(d)}},
dJ:{"^":"b2;z,Q,d,e,f,a,b,c",
av:function(a,b){var z,y,x,w
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
dn:{"^":"b2;z,Q,ch,cx,d,e,f,a,b,c",
av:function(a,b){var z,y,x,w
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
dP:{"^":"b2;z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,e,f,a,b,c",
av:function(a,b){var z,y,x,w
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
hD:{"^":"aE;x,y,z,d,a,b,c",
aw:function(){var z,y,x
z=this.y
y=this.z
G.hE(z,y,this.x)
x=this.d
x.h(0,"uLightDescs",z)
x.h(0,"uLightTypes",y)
return x},
p:{
hE:function(a,b,c){var z,y,x,w,v
H.t(c,"$isa",[G.b2],"$asa")
C.e.bZ(a,0,a.length,0)
C.e.bZ(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.D)(c),++x){w=c[x]
if(w.c){w.av(a,y*16)
v=w.d
if(y>=4)return H.f(b,y)
b[y]=v;++y}}}}},
dV:{"^":"b;a,b,c"},
dU:{"^":"b;a,b,c"},
i2:{"^":"aE;d,a,b,c",p:{
bC:function(a){var z=P.Q(P.e,P.b)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eH())
z.h(0,"cStencilFunc",$.eP())
return new G.i2(z,a,!1,!0)}}},
dE:{"^":"aL;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saG:function(a){this.cx=H.t(a,"$isa",[P.x],"$asa")},
bc:function(a,b,c){var z,y
C.j.aA(a,0)
H.j(b,"$isac")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cg(z.a,34962,y)
J.d0(z.a,34962,b,35048)},
af:function(a){this.ch=a
this.bc("aPosition",a,3)},
cW:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
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
Y:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.bR(y.a))
this.af(a)
x=$.a8().i(0,"aPosition")
if(x==null)throw H.d("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bQ(y.a,this.e)
y.bY(0,w,0)
y.ct(0,z.i(0,"aPosition"),w,x.bd(),5126,!1,0,0)},
a4:function(a){var z,y,x
H.t(a,"$isa",[P.x],"$asa")
z=this.ch.length
if(z<768){this.saG(new Uint8Array(H.c5(a)))
this.Q=5121}else if(z<196608){this.saG(new Uint16Array(H.c5(a)))
this.Q=5123}else{this.saG(new Uint32Array(H.c5(a)))
this.Q=5125}z=this.d
J.bQ(z.a,this.e)
y=this.y
x=this.cx
J.cg(z.a,34963,y)
J.d0(z.a,34963,x,35048)},
cP:function(a){H.t(a,"$isa",[P.x],"$asa")
this.y=J.bR(this.d.a)
this.a4(a)},
l:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ad(z,[H.o(z,0)]),x=x.gv(x);x.t();){w=x.d
C.a.j(y,H.c(w)+":"+z.i(0,w).length)}return"MESH["+H.c(this.a)+"] "+C.a.aa(y,"  ")},
p:{
i4:function(a,b,c,d){var z=P.e
return new G.dE(b,J.d1(b.a),c,P.Q(z,P.b),d,0,-1,P.Q(z,P.ac),"meshdata:"+a,!1,!0)}}},
ip:{"^":"aE;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cR:function(a,b){var z
if(typeof a!=="number")return a.eg()
if(typeof b!=="number")return H.bK(b)
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
aw:function(){var z,y,x
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aZ())
x=this.cy
x.A(z.d)
z=this.cx
z.A(this.db)
z.c0(0,x)
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
lO:{"^":"b;"},
iG:{"^":"aL;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cZ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.h(0,t,J.d4(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.h(0,t,J.d4(w.a,v,t))}},
d1:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.e])
x=H.h([],[P.e])
for(y=new H.ad(y,[H.o(y,0)]),y=y.gv(y);y.t();){w=y.d
if(!z.ak(0,w))C.a.j(x,w)}for(z=this.x,z=P.jU(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.B(0,w))C.a.j(x,w)}return x},
d4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isN",[P.e,P.b],"$asN")
z=Date.now()
for(y=new H.ad(b,[H.o(b,0)]),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cY(s,0)){case 117:if(w.ak(0,s)){r=b.i(0,s)
if(v.ak(0,s))H.bM("E:"+(H.c(u)+":  "+s+" : group ["+H.c(a)+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a8().i(0,s)
if(q==null)H.ai("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.cl(x.a,p,r)}else if(!!J.C(r).$ishH)J.fP(x.a,p,r)
break
case"float":if(q.c===0){H.eu(r)
J.fN(x.a,p,r)}else if(!!J.C(r).$isac)J.fO(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a6(r,"$isU").a
J.db(x.a,p,!1,s)}else if(!!J.C(r).$isac)J.db(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.a6(r,"$isaK").a
J.da(x.a,p,!1,s)}else if(!!J.C(r).$isac)J.da(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d9(o,p,H.a6(r,"$isbc").a)
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
if(typeof s!=="number")return H.bK(s)
J.cZ(x.a,33984+s)
s=H.a6(r,"$iscF").b
J.bp(x.a,3553,s)
s=this.ch
J.cl(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bK(s)
J.cZ(x.a,33984+s)
s=H.a6(r,"$iscF").b
J.bp(x.a,34067,s)
s=this.ch
J.cl(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
default:H.bM("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aH(r,!0)
o=x.a
if(s)J.bq(o,2929)
else J.ci(o,2929)
break
case"cStencilFunc":H.a6(r,"$isdV")
s=r.a
o=x.a
if(s===1281)J.ci(o,2960)
else{J.bq(o,2960)
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
else{J.bq(o,3042)
o=r.b
n=r.c
J.fh(x.a,o,n)
J.fg(x.a,s)}break}++t
break}}m=P.hk(0,0,0,Date.now()-new P.bW(z,!1).a,0,0)
""+t
m.l(0)},
cU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
this.d4(w.a,w.aw())}y=this.Q
y.a9(0)
for(v=a.cy,v=new H.ad(v,[H.o(v,0)]),v=v.gv(v);v.t();)y.j(0,v.d)
u=this.d1()
if(u.length!==0)P.an("E:"+(H.c(this.a)+" "+a.f+": uninitialized inputs: "+H.c(u)))
y=a.d
v=a.e
J.bQ(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cW()
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
z=new G.iG(b,c,d,u,P.cz(c.c,z),P.Q(z,P.b),P.Q(z,z),y,a,!1,!0)
z.cZ(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iO:{"^":"b;a,0b,c,d,e,f,r,x",
as:function(a){var z,y,x,w,v
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.D)(a),++w){v=a[w]
C.a.j(y,v)
x.h(0,v,this.r);++this.r}C.a.aq(y)},
S:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)C.a.j(y,a[x])
C.a.aq(y)},
ae:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)C.a.j(y,a[x])
C.a.aq(y)},
bf:function(a,b){var z=[P.e]
this.b=this.bh(!0,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
ay:function(a){return this.bf(a,null)},
be:function(a,b){var z=[P.e]
this.b=this.bh(!1,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
d_:function(a){return this.be(a,null)},
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
return C.a.aa(w,"\n")},
p:{
b8:function(a){var z,y
z=P.e
y=[z]
return new G.iO(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.Q(z,P.x))}}},
dO:{"^":"aL;",
aZ:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
aV:function(){var z,y,x
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
ap:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
j1:{"^":"b;a,b,c,d,e,f,r"},
cF:{"^":"b;",
l:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hF:{"^":"cF;f,a,b,c,d,e"}}],["","",,R,{"^":"",
jW:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.j(W.jx("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).az(y,"float")
y.setProperty(x,"left","")
x=C.y.az(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.L(z,v)}return z},
j9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.t.dZ(y/c)
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
C.a.j(u,new T.i(o))}}a.af(G.bu(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.h(z,[P.x])
for(q=0;q<u.length;++q)C.a.h(n,q,q)
a.a4(n)},
hx:function(a){var z,y,x
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
jb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.i(new Float32Array(3))
z.A(c)
z.D(0)
y=b.I(0,z.U(d))
x=H.h([b,y],[T.i])
w=R.hx(c)
w.D(0)
w.N(0,Math.tan(H.et(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.i(z)
u.A(w)
t=new Float32Array(4)
new T.iA(t).cC(c,v*2*3.141592653589793/8)
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
C.a.j(f,v)}a.af(G.bu(x,null))
a.a4(f)},
ja:function(a,b,c){var z,y,x,w,v,u,t
z=H.h([],[T.i])
y=H.h([],[P.x])
for(x=$.cU(),w=0;w<12;++w){v=x[w]
C.a.j(y,z.length)
C.a.j(y,12)
u=new T.i(new Float32Array(3))
u.A(v)
u.N(0,c)
b.toString
t=new T.i(new Float32Array(3))
t.A(b)
t.j(0,u)
C.a.j(z,t)}C.a.j(z,b)
a.af(G.bu(z,null))
a.a4(y)},
iT:{"^":"b;",
d0:function(a,b,c){var z,y
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
iU:{"^":"iT;e,f,a,b,c,d",
d3:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ec(y,2)+" fps"
C.r.cD(this.c,b)
x=C.d.a0(30*C.t.dL(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.j(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.r.L(z,w)},
d2:function(a){return this.d3(a,"")}}}],["","",,A,{"^":"",
ev:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(e,"$isa",[G.aE],"$asa")
if(!b.c)return
z=b.dx
z.A(c)
y=b.d
z.c0(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.c(b)
w=C.a.ge3(e)
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
v.dO(new T.aK(u))
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
a.cU(b.cx,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.D)(y),++r)A.ev(a,y[r],z,d,e)},
av:{"^":"dO;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+H.c(this.a)+"]"}},
c2:{"^":"aL;d,e,f,a,b,c"},
iF:{"^":"aL;d,e,f,r,x,y,z,Q,a,b,c",
cT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
cS:function(){return this.cT(null)},
p:{
dL:function(a,b,c){var z=new A.iF(c,b,H.h([],[A.c2]),17664,0,0,0,0,a,!1,!0)
z.d=new G.hu(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
hb:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
z.w(a7,a9)
y=new T.y(new Float32Array(2))
y.w(a6,a9)
x=new T.y(new Float32Array(2))
x.w(a6,a8)
w=new T.y(new Float32Array(2))
w.w(a7,a8)
v=new T.y(new Float32Array(2))
v.w(a6,a9)
u=new T.y(new Float32Array(2))
u.w(a6,a8)
s=new T.y(new Float32Array(2))
s.w(a7,a8)
r=new T.y(new Float32Array(2))
r.w(a7,a9)
q=new T.y(new Float32Array(2))
q.w(a7,a8)
p=new T.y(new Float32Array(2))
p.w(a7,a9)
o=new T.y(new Float32Array(2))
o.w(a6,a9)
n=new T.y(new Float32Array(2))
n.w(a6,a8)
m=new T.y(new Float32Array(2))
m.w(a6,a8)
l=new T.y(new Float32Array(2))
l.w(a7,a8)
k=new T.y(new Float32Array(2))
k.w(a7,a9)
j=new T.y(new Float32Array(2))
j.w(a6,a9)
i=new T.y(new Float32Array(2))
i.w(a6,a9)
h=new T.y(new Float32Array(2))
h.w(a6,a8)
g=new T.y(new Float32Array(2))
g.w(a7,a8)
f=new T.y(new Float32Array(2))
f.w(a7,a9)
e=new T.y(new Float32Array(2))
e.w(a7,a9)
d=new T.y(new Float32Array(2))
d.w(a6,a9)
c=new T.y(new Float32Array(2))
c.w(a6,a8)
b=new T.y(new Float32Array(2))
b.w(a7,a8)
a1=H.h([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.y])
a2=new G.cs(!1,H.h([],[G.ab]),H.h([],[G.bt]),H.h([],t),P.Q(P.e,[P.a,,]))
a2.Z("aTexUV")
a2.Z("aNormal")
a2.cQ(6)
a2.Y(a0)
a2.at("aTexUV",a1)
for(a3=0;z=$.f_(),a3<6;++a3){a4=z[a3]
a2.au("aNormal",H.h([a4,a4,a4,a4],t))}return a2},
hC:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.ab]
y=H.h([],z)
x=[T.i]
w=H.h([],x)
C.a.H(y,$.eO())
C.a.H(w,$.cU())
for(v=0;v<a3;++v,y=u){u=H.h([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.D)(y),++s){r=y[s]
q=J.d2(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
p=new T.i(new Float32Array(3))
p.A(q)
q=r.ga7(r)
if(q>=w.length)return H.f(w,q)
p.j(0,w[q])
p.N(0,0.5)
p.D(0)
q=r.ga7(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
o=new T.i(new Float32Array(3))
o.A(q)
q=r.ga8(r)
if(q>=w.length)return H.f(w,q)
o.j(0,w[q])
o.N(0,0.5)
o.D(0)
q=r.ga8(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
n=new T.i(new Float32Array(3))
n.A(q)
q=r.gaj(r)
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
C.a.j(u,new G.ab(r.gaj(r),m,k))
C.a.j(u,new G.ab(r.ga7(r),l,m))
C.a.j(u,new G.ab(r.ga8(r),k,l))
C.a.j(u,new G.ab(m,l,k))}}z=H.h([],z)
t=H.h([],[G.bt])
q=H.h([],x)
j=new G.cs(!1,z,t,q,P.Q(P.e,[P.a,,]))
j.Z("aTexUV")
j.Z("aNormal")
for(t=y.length,i=[T.y],s=0;s<y.length;y.length===t||(0,H.D)(y),++s){r=y[s]
h=J.d2(r)
if(h>=w.length)return H.f(w,h)
g=w[h]
h=r.ga7(r)
if(h>=w.length)return H.f(w,h)
f=w[h]
h=r.ga8(r)
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
j.au("aNormal",H.h([g,f,e],x))
h=new T.i(new Float32Array(3))
h.A(g)
h.N(0,a2)
d=new T.i(new Float32Array(3))
d.A(f)
d.N(0,a2)
a0=new T.i(new Float32Array(3))
a0.A(e)
a0.N(0,a2)
a0=H.t(H.h([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.j(z,new G.ab(v,v+1,v+2))
j.Y(a0)
j.at("aTexUV",H.h([new T.y(c),new T.y(b),new T.y(a)],i))}return j},
hy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
n=new B.hz(a)
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
t=H.h([],[G.bt])
j=new G.cs(!1,u,t,H.h([],[s]),P.Q(P.e,[P.a,,]))
j.Y(q)
for(m=0;m<a;m=i)for(i=m+1,l=0;l<b;){u=n.$2(m,l)
s=n.$2(i,l);++l
r=n.$2(i,l)
h=n.$2(m,l)
C.a.j(t,new G.bt(H.L(u),H.L(s),H.L(r),H.L(h)))}j.Z("aTexUV")
j.at("aTexUV",o)
j.Z("aNormal")
j.au("aNormal",p)
return j},
hz:{"^":"p:24;a",
$2:function(a,b){return a*(this.a+1)+b}}}],["","",,D,{"^":"",
c_:function(a,b,c){var z,y,x,w,v,u
z=c.a
y=C.k.aR(255*z[0])
x=C.k.aR(255*z[1])
w=C.k.aR(255*z[2])
z="rgb("+y+", "+x+", "+w+")"
v=document.createElement("canvas")
v.width=2
v.height=2
u=H.j(C.x.cz(v,"2d"),"$iscp")
u.fillStyle=z;(u&&C.I).dY(u,0,0,v.width,v.height)
z=J.fm(a.a)
J.bp(a.a,3553,z)
J.fI(a.a,37440,1)
J.bp(a.a,3553,z)
J.fK(a.a,3553,0,6408,6408,5121,v)
J.d6(a.a,3553,10240,9729)
J.d6(a.a,3553,10241,9729)
J.fE(a.a)
J.bp(a.a,3553,null)
return new G.hF(v,b,z,3553,a,new G.j1(!1,!1,!1,!0,1,9729,9729))},
hP:{"^":"b;a,b,c",
cX:function(a){var z,y
a=document
z=W.b0
y={func:1,ret:-1,args:[z]}
W.ak(a,"keydown",H.n(new D.hR(this),y),!1,z)
W.ak(a,"keyup",H.n(new D.hS(this),y),!1,z)},
p:{
hQ:function(a){var z=P.x
z=new D.hP(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z))
z.cX(a)
return z}}},
hR:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isb0")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
hS:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isb0")
z=this.a
z.a.c9(0,a.which)
z.c.j(0,a.which)}},
i7:{"^":"b;a,b,c,d,e,f,r,x",
cY:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gc4(a)
x=H.o(y,0)
W.ak(y.a,y.b,H.n(new D.i9(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc3(a)
y=H.o(x,0)
W.ak(x.a,x.b,H.n(new D.ia(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc5(a)
x=H.o(y,0)
W.ak(y.a,y.b,H.n(new D.ib(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc6(a)
x=H.o(z,0)
W.ak(z.a,z.b,H.n(new D.ic(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
i8:function(a){var z=P.x
z=new D.i7(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),0,0,0,0,0)
z.cY(a)
return z}}},
i9:{"^":"p:3;a",
$1:function(a){var z,y
H.j(a,"$isX")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.L(y.gc1(a).a)
z.x=H.L(y.gc1(a).b)
z.d=a.movementX
z.e=a.movementY}},
ia:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isX")
a.preventDefault()
P.an("BUTTON "+H.c(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
ib:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isX")
a.preventDefault()
z=this.a
z.a.c9(0,a.button)
z.c.j(0,a.button)}},
ic:{"^":"p:25;a",
$1:function(a){H.j(a,"$isaN")
a.preventDefault()
this.a.f=H.L(C.ac.gdT(a))}},
im:{"^":"dO;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bJ:function(a){var z,y
z=C.e.e_(H.t(a,"$ism",[P.b],"$asm"),0,new A.l4(),P.x)
if(typeof z!=="number")return H.bK(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l4:{"^":"p:26;",
$2:function(a,b){var z,y
H.L(a)
z=J.ao(b)
if(typeof a!=="number")return a.I()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aK:{"^":"b;a",
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
l:function(a){return"[0] "+this.R(0).l(0)+"\n[1] "+this.R(1).l(0)+"\n[2] "+this.R(2).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aK){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bJ(this.a)},
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
return m}},U:{"^":"b;a",
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
gC:function(a){return A.bJ(this.a)},
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
return new T.bc(z)},
ab:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=Math.sqrt(a5.gaQ())
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
c0:function(){return new T.U(new Float32Array(16))}}},iA:{"^":"b;a",
cC:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gaQ())
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
w:function(a,b){var z=this.a
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
gC:function(a){return A.bJ(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gan:function(a){return this.a[0]},
gac:function(a){return this.a[1]}},i:{"^":"b;a",
q:function(a,b,c){var z=this.a
C.e.h(z,0,a)
C.e.h(z,1,b)
C.e.h(z,2,c)},
A:function(a){var z,y
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
gC:function(a){return A.bJ(this.a)},
I:function(a,b){var z=new T.i(new Float32Array(3))
z.A(this)
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
gaQ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
D:function(a){var z,y,x
z=Math.sqrt(this.gaQ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aO:function(a){var z,y
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
z.A(this)
z.N(0,a)
return z},
gan:function(a){return this.a[0]},
gac:function(a){return this.a[1]},
gcv:function(a){return this.a[2]},
p:{
F:function(a,b,c){var z=new T.i(new Float32Array(3))
z.q(a,b,c)
return z},
bb:function(){return new T.i(new Float32Array(3))}}},bc:{"^":"b;a",
l:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bc){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bJ(this.a)},
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
gan:function(a){return this.a[0]},
gac:function(a){return this.a[1]},
gcv:function(a){return this.a[2]},
gef:function(a){return this.a[3]}}}],["","",,K,{"^":"",
hT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.t(b,"$isa",[G.aE],"$asa")
z=G.cB("Fixed",a,$.f8(),$.f7())
y=[A.av]
x=H.h([],y)
w=new A.c2(z,b,x,"Fixed",!1,!0)
v=G.bC("light")
v.d.h(0,"uColor",$.eL())
for(x=$.bn(),u=new H.ad(x,[H.o(x,0)]),u=u.gv(u),t=[P.x],s=z.d,z=z.e,r=P.e,q=P.b,p=P.ac;u.t();){o=u.d
n=$.cf()
m=x.i(0,o)
l=z.x
k=new G.dE(s,J.d1(s.a),1,P.Q(r,q),l,0,-1,P.Q(r,p),"meshdata:dirLightViz",!1,!0)
k.Y(new Float32Array(3))
l=H.t(H.h([0,0],t),"$isa",t,"$asa")
k.y=J.bR(s.a)
k.a4(l)
l=J.C(m)
if(!!l.$isdn){l=m.Q
R.j9(k,l,l/4,m.z)}else if(!!l.$isdP)R.jb(k,m.z,m.Q,m.ch,m.cx)
else if(!!l.$isdJ)R.ja(k,m.z,m.Q)
l=H.h([],y)
j=new Float32Array(9)
i=new T.U(new Float32Array(16))
i.J()
h=new T.U(new Float32Array(16))
h.J()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
n.h(0,o,new A.av(v,k,l,new T.aK(j),i,h,new T.i(g),new T.i(f),new T.i(e),new T.i(new Float32Array(3)),o,!1,!0))}for(z=$.cf(),z=z.gam(z),y=z.a,z=new H.bB(y.gv(y),z.b,[H.o(z,0),H.o(z,1)]),y=w.f;z.t();)C.a.j(y,z.a)
return w},
hY:function(a,b,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=G.ct("cube",b,B.hb(!0,1,0,1,0,2,2,2))
y=G.ct("icosahedron-4",b,B.hC(!0,1,4))
x=G.bC("mat0")
w=x.d
w.h(0,"uTexture",D.c_(a,"blue",$.eI().U(0.5)))
w.h(0,"uShininess",50)
w=G.bC("mat1")
v=w.d
v.h(0,"uTexture",D.c_(a,"red",$.eK().U(0.5)))
v.h(0,"uShininess",50)
v=G.bC("mat2")
u=v.d
u.h(0,"uTexture",D.c_(a,"white",$.cT().U(0.5)))
u.h(0,"uShininess",50)
u=G.bC("mat3")
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
h=new A.av(u,v,t,new T.aK(n),m,k,new T.i(j),new T.i(i),new T.i(h),f,"mesh",!1,!0)
l[12]=q
l[13]=p
l[14]=o
g[0]=l[0]
g[1]=l[4]
g[2]=l[8]
k.ab(0,f,-1)
k.ab(0,h.b5(),-0.7)
C.a.j(x,h)}v=G.ct("strips",b,B.hy(20,20,80,80))
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
e=new A.av(u,v,w,new T.aK(t),n,l,new T.i(k),new T.i(j),new T.i(i),new T.i(new Float32Array(3)),"grid",!1,!0)
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
e.ap(0,-20,20)
C.a.j(x,e)},
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z={}
y=document
x=C.i.cA(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iU(0,0,x,w,y.createElement("div"),R.jW("blue","gray",90,30))
u.d0(x,"blue","gray")
t=H.j(C.i.c8(y,"#webgl-canvas"),"$isco")
s=new G.h1(t)
x=P.e
v=P.b
r=(t&&C.x).aW(t,"webgl2",P.cy(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.ai(P.dt('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.c(J.fD(r))
if($.ew>0)P.an("I: "+q)
J.fj(r,0,0,0,1)
J.bq(r,2929)
J.bq(r,2884)
r=new Float32Array(3)
q=D.hQ(null)
p=D.i8(t)
o=new T.U(new Float32Array(16))
o.J()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.im(50,10,0,0,new T.i(r),-0.02,q,p,o,new T.i(n),new T.i(m),new T.i(l),new T.i(new Float32Array(3)),"camera:orbit",!1,!0)
k.ap(0,0,56)
r=new T.U(new Float32Array(16))
r.J()
q=new T.U(new Float32Array(16))
q.J()
j=new G.ip(k,50,1,0.1,1e4,r,q,new T.U(new Float32Array(16)),P.Q(x,v),"perspective",!1,!0)
j.bg()
r=H.h([],[G.b2])
q=new Float32Array(64)
i=new G.hD(r,q,new Float32Array(4),P.Q(x,v),"illumination",!1,!0)
for(x=$.bn(),x=x.gam(x),v=x.a,x=new H.bB(v.gv(v),x.b,[H.o(x,0),H.o(x,1)]);x.t();)C.a.j(r,x.a)
x=[G.aE]
h=K.hT(s,H.h([j],x))
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
d=new A.av(null,null,q,new T.aK(x),r,o,new T.i(m),new T.i(l),new T.i(e),new T.i(new Float32Array(3)),"scene",!1,!0)
K.hY(s,v,d)
C.a.j(n,d)
C.a.j(p,d)
c=H.a6(C.i.c8(y,"#phase"),"$isdN")
c.selectedIndex=0
for(x=C.i.aX(y,"input"),v=x.length,b=0;b<x.length;x.length===v||(0,H.D)(x),++b){r=J.fy(H.j(x[b],"$isR"))
q=H.o(r,0)
W.ak(r.a,r.b,H.n(new K.li(),{func:1,ret:-1,args:[q]}),!1,q)}for(x=C.i.aX(y,"input"),v=x.length,b=0;b<x.length;x.length===v||(0,H.D)(x),++b){r=H.j(x[b],"$isR")
H.bM("initialize inputs "+H.c(r.id))
a=C.i.dd(y,"Event")
J.fb(a,"change",!0,!0)
J.fo(r,a)}y=new K.lj(t,j,f,g)
y.$1(null)
x=W.T
W.ak(window,"resize",H.n(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
new K.lh(z,k,d,c,g,f,u).$1(0)},
li:{"^":"p:27;",
$1:function(a){var z,y,x,w,v
z=H.a6(J.fB(a),"$isdv")
y=z.id
P.an(H.c(y)+" toggle "+H.c(z.checked))
if(y==="lightDiffuse")for(x=$.bn(),x=x.gam(x),w=x.a,x=new H.bB(w.gv(w),x.b,[H.o(x,0),H.o(x,1)]);x.t();){w=x.a
v=z.checked?1:0
w=w.e.a
w[0]=v
w[1]=v
w[2]=v}else if(y==="lightSpecular")for(x=$.bn(),x=x.gam(x),w=x.a,x=new H.bB(w.gv(w),x.b,[H.o(x,0),H.o(x,1)]);x.t();){w=x.a
v=z.checked?1:0
w=w.f.a
w[0]=v
w[1]=v
w[2]=v}else{$.bn().i(0,y).c=z.checked
$.cf().i(0,y).c=z.checked}}},
lj:{"^":"p:28;a,b,c,d",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.an("size change "+H.c(y)+" "+H.c(x))
this.b.cR(y,x)
z=this.c
z.z=y
z.Q=x
z=this.d
z.z=y
z.Q=x}},
lh:{"^":"p:29;a,b,c,d,e,f,r",
$1:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
H.cR(a0)
z=this.a
y=z.a
if(typeof a0!=="number")return a0.ba()
z.a=a0+0
x=this.b
x.cx+=0.001
w=x.fx
v=w.a
if(v.B(0,0)||v.B(0,1)){v=x.cx
u=w.d
if(typeof u!=="number")return u.b6()
x.cx=v+u*0.01
u=x.cy
v=w.e
if(typeof v!=="number")return v.b6()
x.cy=u+v*0.01}v=x.fr
u=v.a
if(u.B(0,37))x.cx+=0.03
else if(u.B(0,39))x.cx-=0.03
if(u.B(0,38))x.cy+=0.03
else if(u.B(0,40))x.cy-=0.03
if(u.B(0,33))x.ch*=0.99
else if(u.B(0,34))x.ch*=1.01
if(u.B(0,32)){x.cx=0
x.cy=0}u=w.f
if(typeof u!=="number")return u.b6()
u=x.ch-u*x.dy
if(u>0)x.ch=u
u=C.k.dM(x.cy,-1.4707963267948965,1.4707963267948965)
x.cy=u
t=x.ch
s=x.cx
r=t*Math.cos(u)
x.ap(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=x.dx
u=x.d
t=u.a
q=s.a
t[12]=t[12]+q[0]
t[13]=t[13]+q[1]
t[14]=t[14]+q[2]
p=new T.i(new Float32Array(3))
p.q(0,1,0)
q=x.aZ()
o=new Float32Array(3)
n=new T.i(o)
n.A(q)
n.bb(0,s)
n.D(0)
m=p.bR(n)
m.D(0)
l=n.bR(m)
l.D(0)
s=m.aO(q)
k=l.aO(q)
q=n.aO(q)
j=m.a
i=j[0]
h=l.a
g=h[0]
f=o[0]
e=j[1]
d=h[1]
c=o[1]
j=j[2]
h=h[2]
o=o[2]
t[15]=1
t[14]=-q
t[13]=-k
t[12]=-s
t[11]=0
t[10]=o
t[9]=h
t[8]=j
t[7]=0
t[6]=c
t[5]=d
t[4]=e
t[3]=0
t[2]=f
t[1]=g
t[0]=i
u.ab(0,x.aV(),-x.db)
v.c.a9(0)
v.b.a9(0)
w.e=0
w.d=0
w.f=0
w.c.a9(0)
w.b.a9(0)
for(x=this.c.cy,w=x.length,y=-((a0-y)*0.0003),b=0;b<x.length;x.length===w||(0,H.D)(x),++b){a=x[b]
if(a.a!=="grid"){v=a.d
v.ab(0,a.aV(),y)
v.ab(0,a.b5(),y)}}(this.d.selectedIndex===0?this.e:this.f).cS()
C.ad.gdF(window).ce(this,-1)
this.r.d2(z.a)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.bz.prototype
if(a==null)return J.hM.prototype
if(typeof a=="boolean")return J.hL.prototype
if(a.constructor==Array)return J.bx.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.bk=function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(a.constructor==Array)return J.bx.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.ex=function(a){if(a==null)return a
if(a.constructor==Array)return J.bx.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.l0=function(a){if(typeof a=="number")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.l1=function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.ey=function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.b)return a
return J.cc(a)}
J.bI=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.aH=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).F(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l0(a).W(a,b)}
J.bo=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.le(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).i(a,b)}
J.cY=function(a,b){return J.ey(a).aA(a,b)}
J.fb=function(a,b,c,d){return J.l(a).dk(a,b,c,d)}
J.bP=function(a,b){return J.l(a).dr(a,b)}
J.fc=function(a,b,c){return J.l(a).ds(a,b,c)}
J.cZ=function(a,b){return J.l(a).bA(a,b)}
J.fd=function(a,b,c,d){return J.l(a).dC(a,b,c,d)}
J.d_=function(a,b,c){return J.l(a).bC(a,b,c)}
J.fe=function(a,b){return J.l(a).dH(a,b)}
J.cg=function(a,b,c){return J.l(a).bD(a,b,c)}
J.ff=function(a,b,c){return J.l(a).bF(a,b,c)}
J.bp=function(a,b,c){return J.l(a).bG(a,b,c)}
J.bQ=function(a,b){return J.l(a).dK(a,b)}
J.fg=function(a,b){return J.l(a).bH(a,b)}
J.fh=function(a,b,c){return J.l(a).bI(a,b,c)}
J.d0=function(a,b,c,d){return J.l(a).bJ(a,b,c,d)}
J.fi=function(a,b){return J.l(a).bK(a,b)}
J.fj=function(a,b,c,d,e){return J.l(a).bL(a,b,c,d,e)}
J.fk=function(a,b){return J.l1(a).O(a,b)}
J.ch=function(a,b,c){return J.bk(a).dN(a,b,c)}
J.bR=function(a){return J.l(a).bN(a)}
J.fl=function(a){return J.l(a).bO(a)}
J.fm=function(a){return J.l(a).bQ(a)}
J.d1=function(a){return J.l(a).dS(a)}
J.fn=function(a,b){return J.l(a).bS(a,b)}
J.ci=function(a,b){return J.l(a).bT(a,b)}
J.fo=function(a,b){return J.l(a).dU(a,b)}
J.fp=function(a,b,c,d){return J.l(a).bU(a,b,c,d)}
J.fq=function(a,b,c,d,e){return J.l(a).dV(a,b,c,d,e)}
J.fr=function(a,b,c,d,e){return J.l(a).bV(a,b,c,d,e)}
J.fs=function(a,b,c,d,e,f){return J.l(a).dW(a,b,c,d,e,f)}
J.ft=function(a,b){return J.ex(a).u(a,b)}
J.bq=function(a,b){return J.l(a).bW(a,b)}
J.fu=function(a,b){return J.l(a).bX(a,b)}
J.fv=function(a){return J.l(a).dX(a)}
J.fw=function(a,b){return J.l(a).G(a,b)}
J.d2=function(a){return J.bI(a).gaj(a)}
J.fx=function(a){return J.l(a).gdG(a)}
J.ao=function(a){return J.C(a).gC(a)}
J.bS=function(a){return J.ex(a).gv(a)}
J.aW=function(a){return J.bk(a).gk(a)}
J.fy=function(a){return J.l(a).gc2(a)}
J.fz=function(a){return J.l(a).ge5(a)}
J.fA=function(a){return J.l(a).gea(a)}
J.fB=function(a){return J.l(a).gcb(a)}
J.fC=function(a){return J.bI(a).gef(a)}
J.bT=function(a){return J.bI(a).gan(a)}
J.cj=function(a){return J.bI(a).gac(a)}
J.d3=function(a){return J.bI(a).gcv(a)}
J.ck=function(a,b){return J.l(a).a2(a,b)}
J.fD=function(a){return J.l(a).ao(a)}
J.fE=function(a){return J.l(a).aY(a)}
J.fF=function(a,b){return J.l(a).b_(a,b)}
J.fG=function(a,b,c){return J.l(a).b0(a,b,c)}
J.d4=function(a,b,c){return J.l(a).b4(a,b,c)}
J.fH=function(a,b){return J.l(a).c_(a,b)}
J.fI=function(a,b,c){return J.l(a).c7(a,b,c)}
J.d5=function(a){return J.l(a).e6(a)}
J.fJ=function(a,b,c,d){return J.l(a).b9(a,b,c,d)}
J.fK=function(a,b,c,d,e,f,g){return J.l(a).cc(a,b,c,d,e,f,g)}
J.d6=function(a,b,c,d){return J.l(a).cd(a,b,c,d)}
J.fL=function(a){return J.ey(a).eb(a)}
J.br=function(a){return J.C(a).l(a)}
J.fM=function(a,b,c,d){return J.l(a).ed(a,b,c,d)}
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
J.fR=function(a,b,c){return J.l(a).ee(a,b,c)}
J.fS=function(a,b,c,d,e,f,g){return J.l(a).cs(a,b,c,d,e,f,g)}
J.fT=function(a,b,c,d,e){return J.l(a).cu(a,b,c,d,e)}
I.aU=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bU.prototype
C.x=W.co.prototype
C.I=W.cp.prototype
C.y=W.h8.prototype
C.r=W.hg.prototype
C.J=W.hi.prototype
C.K=W.hA.prototype
C.i=W.hB.prototype
C.L=J.k.prototype
C.a=J.bx.prototype
C.t=J.dx.prototype
C.d=J.dy.prototype
C.k=J.by.prototype
C.j=J.bz.prototype
C.S=J.bA.prototype
C.e=H.id.prototype
C.o=H.ig.prototype
C.W=W.ih.prototype
C.B=J.iq.prototype
C.C=W.iB.prototype
C.H=W.j_.prototype
C.w=J.ba.prototype
C.ac=W.aN.prototype
C.ad=W.je.prototype
C.f=new P.k7()
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
C.T=H.h(I.aU(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.U=H.h(I.aU(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.V=H.h(I.aU([]),[P.e])
C.u=H.h(I.aU(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.h(I.aU(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
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
$.aX=null
$.de=null
$.cI=!1
$.eA=null
$.eq=null
$.eF=null
$.ca=null
$.cd=null
$.cP=null
$.aP=null
$.bf=null
$.bg=null
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
I.$lazy(y,x,w)}})(["lI","eN",function(){return H.ez("_$dart_dartClosure")},"mm","cV",function(){return H.ez("_$dart_js")},"n5","eQ",function(){return H.af(H.c3({
toString:function(){return"$receiver$"}}))},"n6","eR",function(){return H.af(H.c3({$method$:null,
toString:function(){return"$receiver$"}}))},"n7","eS",function(){return H.af(H.c3(null))},"n8","eT",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nb","eW",function(){return H.af(H.c3(void 0))},"nc","eX",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"na","eV",function(){return H.af(H.dW(null))},"n9","eU",function(){return H.af(function(){try{null.$method$}catch(z){return z.message}}())},"ne","eZ",function(){return H.af(H.dW(void 0))},"nd","eY",function(){return H.af(function(){try{(void 0).$method$}catch(z){return z.message}}())},"np","cW",function(){return P.jh()},"nG","bm",function(){return[]},"lF","eM",function(){return{}},"nx","f0",function(){return P.cz(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"ny","cX",function(){return P.Q(P.e,P.bv)},"mT","eP",function(){return new G.dV(1281,0,4294967295)},"lx","eH",function(){return new G.dU(1281,1281,1281)},"nE","a8",function(){return P.cy(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.a_,"aPosition",C.D,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.n,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.m,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.Y,"vCenter",C.E,"vDepth",C.a4,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.aa,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a8,"uAnimationTable",C.h,"uTime",C.a7,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.c,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.b,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.e,G.E)},"lC","cT",function(){return T.F(1,1,1)},"lz","eI",function(){return T.F(0,0,1)},"lB","eK",function(){return T.F(1,0,0)},"lA","eJ",function(){return T.F(0,1,0)},"lD","eL",function(){return T.F(1,1,0)},"nQ","f5",function(){var z,y
z=G.b8("LightGouradV")
y=[P.e]
z.as(H.h(["aPosition","aNormal","aTexUV"],y))
z.ae(H.h(["vColor"],y))
z.S(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.S(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.S(H.h(["uEyePosition","uTexture"],y))
z.be(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nO","f3",function(){var z,y
z=G.b8("LightGrouradV")
y=[P.e]
z.ae(H.h(["vColor"],y))
z.ay(H.h(["oFragColor = vec4(vColor, 1.0 );"],y))
return z},"nP","f4",function(){var z,y
z=G.b8("LightBlinnPhongV")
y=[P.e]
z.as(H.h(["aPosition","aNormal","aTexUV"],y))
z.ae(H.h(["vPosition","vNormal","vTexUV"],y))
z.S(H.h(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.d_(H.h(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"],y))
return z},"nN","f2",function(){var z,y
z=G.b8("LightBlinnPhongF")
y=[P.e]
z.ae(H.h(["vPosition","vNormal","vTexUV"],y))
z.S(H.h(["uLightDescs","uLightTypes","uShininess"],y))
z.S(H.h(["uEyePosition","uTexture"],y))
z.bf(H.h(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],y),H.h(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nT","f8",function(){var z,y
z=G.b8("SolidColor")
y=[P.e]
z.as(H.h(["aPosition"],y))
z.S(H.h(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.ay(H.h(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nS","f7",function(){var z,y
z=G.b8("SolidColorF")
y=[P.e]
z.S(H.h(["uColor"],y))
z.ay(H.h(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"nu","f_",function(){return H.h([T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)],[T.i])},"md","eO",function(){return H.h([G.M(0,11,5),G.M(0,5,1),G.M(0,1,7),G.M(0,7,10),G.M(0,10,11),G.M(1,5,9),G.M(5,11,4),G.M(11,10,2),G.M(10,7,6),G.M(7,1,8),G.M(3,9,4),G.M(3,4,2),G.M(3,2,6),G.M(3,6,8),G.M(3,8,9),G.M(4,9,5),G.M(2,4,11),G.M(6,2,10),G.M(8,6,7),G.M(9,8,1)],[G.ab])},"nV","fa",function(){return(1+P.lo(5))/2},"me","cU",function(){var z,y,x,w,v,u,t,s,r,q,p,o
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
return H.h([y,x,w,v,u,t,s,r,q,p,o,z],[T.i])},"nR","f6",function(){return T.F(11,20,0)},"nJ","f1",function(){return T.F(0,-50,0)},"nU","f9",function(){return T.F(-11,-30,0)},"nK","bn",function(){var z,y,x,w
z=$.f1()
y=$.cT()
z=new G.dn(z,40,T.c0(),T.c0(),1,T.bb(),T.bb(),"dir",!1,!0)
z.ax("dir",1,y,y)
x=$.f6()
w=new G.dJ(x,80,3,T.bb(),T.bb(),"point",!1,!0)
w.ax("point",3,y,y)
x=new G.dP(x,$.f9(),80,0.4487989505128276,2,1,1,40,T.c0(),T.c0(),2,T.bb(),T.bb(),"spot",!1,!0)
x.ax("spot",2,y,y)
return P.cy(["idDirectional",z,"idPoint",w,"idSpot",x],P.e,G.b2)},"nL","cf",function(){return P.Q(P.e,A.av)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.G,args:[W.X]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.x]},{func:1,ret:P.V,args:[W.ae]},{func:1,ret:P.V,args:[P.e]},{func:1,ret:P.G,args:[W.b0]},{func:1,ret:P.V,args:[W.R,P.e,P.e,W.bF]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a3]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.V,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[P.H]},{func:1,args:[W.T]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.x,args:[P.x,P.x]},{func:1,ret:P.G,args:[W.aN]},{func:1,ret:P.x,args:[P.x,P.b]},{func:1,ret:P.G,args:[W.T]},{func:1,ret:-1,args:[W.T]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.x,args:[,,]}]
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
if(x==y)H.lq(d||a)
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
Isolate.aU=a.aU
Isolate.bj=a.bj
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
