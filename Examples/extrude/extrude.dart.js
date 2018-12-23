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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cn(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b5=function(){}
var dart=[["","",,H,{"^":"",lq:{"^":"b;a"}}],["","",,J,{"^":"",
cr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bQ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cq==null){H.ke()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dq("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cu()]
if(v!=null)return v
v=H.ko(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cu(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aX(a)},
k:["c2",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fW:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isO:1},
d3:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
c7:{"^":"h;",
gv:function(a){return 0},
k:["c4",function(a){return String(a)}]},
hu:{"^":"c7;"},
b_:{"^":"c7;"},
bh:{"^":"c7;",
k:function(a){var z=a[$.ea()]
if(z==null)return this.c4(a)
return"JavaScript function for "+H.e(J.ba(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbc:1},
be:{"^":"h;$ti",
l:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.V(P.x("add"))
a.push(b)},
H:function(a,b){var z
H.w(b,"$isi",[H.o(a,0)],"$asi")
if(!!a.fixed$length)H.V(P.x("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
ba:function(a,b){var z,y
H.j(b,{func:1,ret:P.O,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aC(a))}return!1},
bY:function(a,b){if(!!a.immutable$list)H.V(P.x("sort"))
H.hS(a,J.jP(),H.o(a,0))},
aI:function(a){return this.bY(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aA(a[z],b))return!0
return!1},
k:function(a){return P.c5(a,"[","]")},
gw:function(a){return new J.f8(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.aX(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bm(a,b))
return a[b]},
i:function(a,b,c){H.y(c,H.o(a,0))
if(!!a.immutable$list)H.V(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bm(a,b))
a[b]=c},
$ist:1,
$ast:I.b5,
$isi:1,
$isa:1,
p:{
fV:function(a,b){return J.c6(H.p(a,[b]))},
c6:function(a){H.bS(a)
a.fixed$length=Array
return a},
lo:[function(a,b){return J.eD(H.e3(a,"$isU"),H.e3(b,"$isU"))},"$2","jP",8,0,29]}},
lp:{"^":"be;$ti"},
f8:{"^":"b;a,b,c,0d,$ti",
saR:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.a4(z))
x=this.c
if(x>=y){this.saR(null)
return!1}this.saR(z[x]);++this.c
return!0},
$isaS:1},
bf:{"^":"h;",
L:function(a,b){var z
H.cs(b)
if(typeof b!=="number")throw H.c(H.aJ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gae(b)
if(this.gae(a)===z)return 0
if(this.gae(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gae:function(a){return a===0?1/a<0:a<0},
bE:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.x(""+a+".toInt()"))},
d4:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.x(""+a+".ceil()"))},
d5:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.aJ(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
dw:function(a,b){var z
if(b>20)throw H.c(P.bD(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gae(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
c6:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b7(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.b7(a,b)},
b7:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.x("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b5:function(a,b){var z
if(a>0)z=this.cQ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cQ:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.c(H.aJ(b))
return a<b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.aJ(b))
return a>b},
$isU:1,
$asU:function(){return[P.D]},
$isP:1,
$isD:1},
d2:{"^":"bf;",$isC:1},
d1:{"^":"bf;"},
bg:{"^":"h;",
ak:function(a,b){if(b>=a.length)throw H.c(H.bm(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cK(b,null,null))
return a+b},
c_:function(a,b,c){var z
if(c>a.length)throw H.c(P.bD(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bZ:function(a,b){return this.c_(a,b,0)},
c1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bE(b,null,null))
if(b>c)throw H.c(P.bE(b,null,null))
if(c>a.length)throw H.c(P.bE(c,null,null))
return a.substring(b,c)},
c0:function(a,b){return this.c1(a,b,null)},
dv:function(a){return a.toLowerCase()},
d6:function(a,b,c){if(c>a.length)throw H.c(P.bD(c,0,a.length,null,null))
return H.ku(a,b,c)},
L:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.aJ(b))
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
$ist:1,
$ast:I.b5,
$isU:1,
$asU:function(){return[P.d]},
$ishr:1,
$isd:1}}],["","",,H,{"^":"",
fT:function(){return new P.ce("No element")},
fU:function(){return new P.ce("Too many elements")},
hS:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.C,args:[c,c]})
H.bi(a,0,J.aN(a)-1,b,c)},
bi:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.hR(a,b,c,d,e)
else H.hQ(a,b,c,d,e)},
hR:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.b6(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hQ:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.b.V(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.V(b+a0,2)
v=w-z
u=w+z
t=J.b6(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a6(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a6(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a6(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a6(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aA(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.O()
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
if(typeof e!=="number")return e.O()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.O()
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
H.bi(a,b,m-2,a1,a2)
H.bi(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aA(a1.$2(t.h(a,m),r),0);)++m
for(;J.aA(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.O()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bi(a,m,l,a1,a2)}else H.bi(a,m,l,a1,a2)},
cU:{"^":"i;"},
bB:{"^":"cU;$ti",
gw:function(a){return new H.d6(this,this.gj(this),0,[H.cp(this,"bB",0)])},
az:function(a,b){return this.c3(0,H.j(b,{func:1,ret:P.O,args:[H.cp(this,"bB",0)]}))}},
d6:{"^":"b;a,b,c,0d,$ti",
saS:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b6(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aC(z))
w=this.c
if(w>=x){this.saS(null)
return!1}this.saS(y.q(z,w));++this.c
return!0},
$isaS:1},
h7:{"^":"bB;a,b,$ti",
gj:function(a){return J.aN(this.a)},
q:function(a,b){return this.b.$1(J.eL(this.a,b))},
$asbB:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dr:{"^":"i;a,b,$ti",
gw:function(a){return new H.id(J.bu(this.a),this.b,this.$ti)}},
id:{"^":"aS;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bz:{"^":"b;$ti"}}],["","",,H,{"^":"",
aM:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k6:function(a){return init.types[H.K(a)]},
kh:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.z(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ba(a)
if(typeof z!=="string")throw H.c(H.aJ(a))
return z},
aX:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aY:function(a){return H.hv(a)+H.cl(H.ag(a),0,null)},
hv:function(a){var z,y,x,w,v,u,t,s,r
z=J.z(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isb_){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aM(w.length>1&&C.i.ak(w,0)===36?C.i.c0(w,1):w)},
aE:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hC:function(a){var z=H.aE(a).getFullYear()+0
return z},
hA:function(a){var z=H.aE(a).getMonth()+1
return z},
hw:function(a){var z=H.aE(a).getDate()+0
return z},
hx:function(a){var z=H.aE(a).getHours()+0
return z},
hz:function(a){var z=H.aE(a).getMinutes()+0
return z},
hB:function(a){var z=H.aE(a).getSeconds()+0
return z},
hy:function(a){var z=H.aE(a).getMilliseconds()+0
return z},
a3:function(a){throw H.c(H.aJ(a))},
m:function(a,b){if(a==null)J.aN(a)
throw H.c(H.bm(a,b))},
bm:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.K(J.aN(a))
if(!(b<0)){if(typeof z!=="number")return H.a3(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bE(b,"index",null)},
aJ:function(a){return new P.aB(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dc()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e6})
z.name=""}else z.toString=H.e6
return z},
e6:function(){return J.ba(this.dartException)},
V:function(a){throw H.c(a)},
a4:function(a){throw H.c(P.aC(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.b5(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c8(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.db(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ed()
u=$.ee()
t=$.ef()
s=$.eg()
r=$.ej()
q=$.ek()
p=$.ei()
$.eh()
o=$.em()
n=$.el()
m=v.I(y)
if(m!=null)return z.$1(H.c8(H.u(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.c8(H.u(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.db(H.u(y),m))}}return z.$1(new H.i9(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dg()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dg()
return a},
b8:function(a){var z
if(a==null)return new H.dH(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dH(a)},
k1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kg:function(a,b,c,d,e,f){H.f(a,"$isbc")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cY("Unsupported number of arguments for wrapped closure"))},
b4:function(a,b){var z
H.K(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kg)
a.$identity=z
return z},
fm:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.z(d).$isa){z.$reflectionInfo=d
x=H.hG(z).r}else x=d
w=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.c0(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.C()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cO(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k6,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cN:H.c1
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cO(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fj:function(a,b,c,d){var z=H.c1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cO:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fl(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fj(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.C()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aO
if(v==null){v=H.bw("self")
$.aO=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.C()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aO
if(v==null){v=H.bw("self")
$.aO=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fk:function(a,b,c,d){var z,y
z=H.c1
y=H.cN
switch(b?-1:a){case 0:throw H.c(H.hL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fl:function(a,b){var z,y,x,w,v,u,t,s
z=$.aO
if(z==null){z=H.bw("self")
$.aO=z}y=$.cM
if(y==null){y=H.bw("receiver")
$.cM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fk(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a7
if(typeof y!=="number")return y.C()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.C()
$.a7=y+1
return new Function(z+y+"}")()},
cn:function(a,b,c,d,e,f,g){return H.fm(a,b,H.K(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a1(a,"String"))},
dW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a1(a,"double"))},
cs:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a1(a,"num"))},
bN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a1(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a1(a,"int"))},
ct:function(a,b){throw H.c(H.a1(a,H.aM(H.u(b).substring(3))))},
ks:function(a,b){throw H.c(H.fh(a,H.aM(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.z(a)[b])return a
H.ct(a,b)},
ah:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.z(a)[b]
else z=!0
if(z)return a
H.ks(a,b)},
e3:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.z(a)[b])return a
H.ct(a,b)},
bS:function(a){if(a==null)return a
if(!!J.z(a).$isa)return a
throw H.c(H.a1(a,"List<dynamic>"))},
kn:function(a,b){var z
if(a==null)return a
z=J.z(a)
if(!!z.$isa)return a
if(z[b])return a
H.ct(a,b)},
co:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.K(z)]
else return a.$S()}return},
bo:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.co(J.z(a))
if(z==null)return!1
return H.dN(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.ci)return a
$.ci=!0
try{if(H.bo(a,b))return a
z=H.bq(b)
y=H.a1(a,z)
throw H.c(y)}finally{$.ci=!1}},
bP:function(a,b){if(a!=null&&!H.cm(a,b))H.V(H.a1(a,H.bq(b)))
return a},
dR:function(a){var z,y
z=J.z(a)
if(!!z.$isl){y=H.co(z)
if(y!=null)return H.bq(y)
return"Closure"}return H.aY(a)},
kv:function(a){throw H.c(new P.ft(H.u(a)))},
e_:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
ag:function(a){if(a==null)return
return a.$ti},
mU:function(a,b,c){return H.aL(a["$as"+H.e(c)],H.ag(b))},
b7:function(a,b,c,d){var z
H.u(c)
H.K(d)
z=H.aL(a["$as"+H.e(c)],H.ag(b))
return z==null?null:z[d]},
cp:function(a,b,c){var z
H.u(b)
H.K(c)
z=H.aL(a["$as"+H.e(b)],H.ag(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.K(b)
z=H.ag(a)
return z==null?null:z[b]},
bq:function(a){return H.ay(a,null)},
ay:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aM(a[0].builtin$cls)+H.cl(a,1,b)
if(typeof a=="function")return H.aM(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.m(b,y)
return H.e(b[y])}if('func' in a)return H.jO(a,b)
if('futureOr' in a)return"FutureOr<"+H.ay("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.p([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.m(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ay(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ay(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ay(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ay(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k0(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.ay(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cl:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cg("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ay(u,c)}return"<"+z.k(0)+">"},
k5:function(a){var z,y,x,w
z=J.z(a)
if(!!z.$isl){y=H.co(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ag(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b3:function(a,b,c,d){var z,y
H.u(b)
H.bS(c)
H.u(d)
if(a==null)return!1
z=H.ag(a)
y=J.z(a)
if(y[b]==null)return!1
return H.dU(H.aL(y[d],z),null,c,null)},
w:function(a,b,c,d){H.u(b)
H.bS(c)
H.u(d)
if(a==null)return a
if(H.b3(a,b,c,d))return a
throw H.c(H.a1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aM(b.substring(3))+H.cl(c,0,null),init.mangledGlobalNames)))},
dU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.X(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.X(a[y],b,c[y],d))return!1
return!0},
mL:function(a,b,c){return a.apply(b,H.aL(J.z(b)["$as"+H.e(c)],H.ag(b)))},
e1:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.e1(z)}return!1},
cm:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.e1(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bo(a,b)}z=J.z(a).constructor
y=H.ag(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.X(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cm(a,b))throw H.c(H.a1(a,H.bq(b)))
return a},
X:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.X(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.dN(a,b,c,d)
if('func' in a)return c.builtin$cls==="bc"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.X("type" in a?a.type:null,b,x,d)
else if(H.X(a,b,x,d))return!0
else{if(!('$is'+"aR" in y.prototype))return!1
w=y.prototype["$as"+"aR"]
v=H.aL(w,z?a.slice(1):null)
return H.X(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dU(H.aL(r,z),b,u,d)},
dN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.X(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.X(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.X(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.X(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kr(m,b,l,d)},
kr:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.X(c[w],d,a[w],b))return!1}return!0},
mM:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
ko:function(a){var z,y,x,w,v,u
z=H.u($.e0.$1(a))
y=$.bO[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bR[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.dT.$2(a,z))
if(z!=null){y=$.bO[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bR[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bT(x)
$.bO[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bR[z]=x
return x}if(v==="-"){u=H.bT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e4(a,x)
if(v==="*")throw H.c(P.dq(z))
if(init.leafTags[z]===true){u=H.bT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e4(a,x)},
e4:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cr(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bT:function(a){return J.cr(a,!1,null,!!a.$isv)},
kq:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bT(z)
else return J.cr(z,c,null,null)},
ke:function(){if(!0===$.cq)return
$.cq=!0
H.kf()},
kf:function(){var z,y,x,w,v,u,t,s
$.bO=Object.create(null)
$.bR=Object.create(null)
H.ka()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e5.$1(v)
if(u!=null){t=H.kq(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ka:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aI(C.M,H.aI(C.R,H.aI(C.z,H.aI(C.z,H.aI(C.Q,H.aI(C.N,H.aI(C.O(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e0=new H.kb(v)
$.dT=new H.kc(u)
$.e5=new H.kd(t)},
aI:function(a,b){return a(b)||b},
ku:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hF:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c6(z)
y=z[0]
x=z[1]
return new H.hF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i4:{"^":"b;a,b,c,d,e,f",
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
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.p([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dm:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hp:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
db:function(a,b){return new H.hp(a,b==null?null:b.method)}}},
fX:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
c8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fX(a,y,z?null:b.receiver)}}},
i9:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kw:{"^":"l:6;a",
$1:function(a){if(!!J.z(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dH:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa0:1},
l:{"^":"b;",
k:function(a){return"Closure '"+H.aY(this).trim()+"'"},
gbS:function(){return this},
$isbc:1,
gbS:function(){return this}},
di:{"^":"l;"},
hU:{"^":"di;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aM(z)+"'"}},
c0:{"^":"di;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aX(this.a)
else y=typeof z!=="object"?J.ai(z):H.aX(z)
return(y^H.aX(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
p:{
c1:function(a){return a.a},
cN:function(a){return a.c},
bw:function(a){var z,y,x,w,v
z=new H.c0("self","target","receiver","name")
y=J.c6(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i5:{"^":"N;a",
k:function(a){return this.a},
p:{
a1:function(a,b){return new H.i5("TypeError: "+P.by(a)+": type '"+H.dR(a)+"' is not a subtype of type '"+b+"'")}}},
fg:{"^":"N;a",
k:function(a){return this.a},
p:{
fh:function(a,b){return new H.fg("CastError: "+P.by(a)+": type '"+H.dR(a)+"' is not a subtype of type '"+b+"'")}}},
hK:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hL:function(a){return new H.hK(a)}}},
dn:{"^":"b;a,0b,0c,0d",
gac:function(){var z=this.b
if(z==null){z=H.bq(this.a)
this.b=z}return z},
k:function(a){return this.gac()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gac())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dn&&this.gac()===b.gac()}},
d4:{"^":"d7;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gE:function(a){return new H.am(this,[H.o(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cA(z,b)}else{y=this.di(b)
return y}},
di:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.aq(z,J.ai(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aa(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aa(w,b)
x=y==null?null:y.b
return x}else return this.dj(b)},
dj:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.ai(a)&0x3ffffff)
x=this.ax(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.as()
this.b=z}this.aT(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.as()
this.c=y}this.aT(y,b,c)}else{x=this.d
if(x==null){x=this.as()
this.d=x}w=J.ai(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.av(x,w,[this.ai(b,c)])
else{u=this.ax(v,b)
if(u>=0)v[u].b=c
else v.push(this.ai(b,c))}}},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aC(this))
z=z.c}},
aT:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.aa(a,b)
if(z==null)this.av(a,b,this.ai(b,c))
else z.b=c},
aV:function(){this.r=this.r+1&67108863},
ai:function(a,b){var z,y
z=new H.h2(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aV()
return z},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aA(a[y].a,b))return y
return-1},
k:function(a){return P.d8(this)},
aa:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
av:function(a,b,c){a[b]=c},
cB:function(a,b){delete a[b]},
cA:function(a,b){return this.aa(a,b)!=null},
as:function(){var z=Object.create(null)
this.av(z,"<non-identifier-key>",z)
this.cB(z,"<non-identifier-key>")
return z},
$isd5:1},
h2:{"^":"b;a,b,0c,0d"},
am:{"^":"cU;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.h3(z,z.r,this.$ti)
y.c=z.e
return y}},
h3:{"^":"b;a,b,0c,0d,$ti",
saU:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.saU(null)
return!1}else{this.saU(z.a)
this.c=this.c.c
return!0}}},
$isaS:1},
kb:{"^":"l:6;a",
$1:function(a){return this.a(a)}},
kc:{"^":"l:14;a",
$2:function(a,b){return this.a(a,b)}},
kd:{"^":"l:15;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
k0:function(a){return J.fV(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bK:function(a){var z,y,x
if(!!J.z(a).$ist)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)C.a.i(y,x,a[x])
return y},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bm(b,a))},
hk:{"^":"h;",$isi6:1,"%":"DataView;ArrayBufferView;cc|dB|dC|d9|dD|dE|ao"},
cc:{"^":"hk;",
gj:function(a){return a.length},
$ist:1,
$ast:I.b5,
$isv:1,
$asv:I.b5},
d9:{"^":"dC;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.dW(c)
H.ac(b,a,a.length)
a[b]=c},
$asbz:function(){return[P.P]},
$asn:function(){return[P.P]},
$isi:1,
$asi:function(){return[P.P]},
$isa:1,
$asa:function(){return[P.P]},
"%":"Float64Array"},
ao:{"^":"dE;",
i:function(a,b,c){H.K(c)
H.ac(b,a,a.length)
a[b]=c},
$asbz:function(){return[P.C]},
$asn:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
hj:{"^":"d9;",$isaf:1,"%":"Float32Array"},
lz:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lA:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isfR:1,
"%":"Int32Array"},
lB:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lC:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hl:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isml:1,
"%":"Uint32Array"},
lD:{"^":"ao;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lE:{"^":"ao;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dB:{"^":"cc+n;"},
dC:{"^":"dB+bz;"},
dD:{"^":"cc+n;"},
dE:{"^":"dD+bz;"}}],["","",,P,{"^":"",
ii:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b4(new P.ik(z),1)).observe(y,{childList:true})
return new P.ij(z,y,x)}else if(self.setImmediate!=null)return P.jX()
return P.jY()},
mv:[function(a){self.scheduleImmediate(H.b4(new P.il(H.j(a,{func:1,ret:-1})),0))},"$1","jW",4,0,5],
mw:[function(a){self.setImmediate(H.b4(new P.im(H.j(a,{func:1,ret:-1})),0))},"$1","jX",4,0,5],
mx:[function(a){H.j(a,{func:1,ret:-1})
P.jw(0,a)},"$1","jY",4,0,5],
jS:function(a,b){if(H.bo(a,{func:1,args:[P.b,P.a0]}))return H.j(a,{func:1,ret:null,args:[P.b,P.a0]})
if(H.bo(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jR:function(){var z,y
for(;z=$.aH,z!=null;){$.b2=null
y=z.b
$.aH=y
if(y==null)$.b1=null
z.a.$0()}},
mJ:[function(){$.cj=!0
try{P.jR()}finally{$.b2=null
$.cj=!1
if($.aH!=null)$.cv().$1(P.dV())}},"$0","dV",0,0,1],
dQ:function(a){var z=new P.dt(H.j(a,{func:1,ret:-1}))
if($.aH==null){$.b1=z
$.aH=z
if(!$.cj)$.cv().$1(P.dV())}else{$.b1.b=z
$.b1=z}},
jV:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aH
if(z==null){P.dQ(a)
$.b2=$.b1
return}y=new P.dt(a)
x=$.b2
if(x==null){y.b=z
$.b2=y
$.aH=y}else{y.b=x.b
x.b=y
$.b2=y
if(y.b==null)$.b1=y}},
kt:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.H
if(C.e===y){P.bM(null,null,C.e,a)
return}y.toString
P.bM(null,null,y,H.j(y.bd(a),z))},
bL:function(a,b,c,d,e){var z={}
z.a=d
P.jV(new P.jT(z,e))},
dO:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
dP:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
jU:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bM:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bd(d):c.d0(d,-1)
P.dQ(d)},
ik:{"^":"l:7;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ij:{"^":"l:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
il:{"^":"l:0;a",
$0:function(){this.a.$0()}},
im:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jv:{"^":"b;a,0b,c",
cu:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b4(new P.jx(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
p:{
jw:function(a,b){var z=new P.jv(!0,0)
z.cu(a,b)
return z}}},
jx:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iq:{"^":"b;$ti"},
jq:{"^":"iq;a,$ti"},
aG:{"^":"b;0a,b,c,d,e,$ti",
dk:function(a){if(this.c!==6)return!0
return this.b.b.ay(H.j(this.d,{func:1,ret:P.O,args:[P.b]}),a.a,P.O,P.b)},
dh:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bo(z,{func:1,args:[P.b,P.a0]}))return H.bP(w.dr(z,a.a,a.b,null,y,P.a0),x)
else return H.bP(w.ay(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ab:{"^":"b;b6:a<,b,0cN:c<,$ti",
bD:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jS(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ab(0,$.H,[c])
w=b==null?1:3
this.aX(new P.aG(x,w,a,b,[z,c]))
return x},
bC:function(a,b){return this.bD(a,null,b)},
aX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaG")
this.c=a}else{if(z===2){y=H.f(this.c,"$isab")
z=y.a
if(z<4){y.aX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bM(null,null,z,H.j(new P.iF(this,a),{func:1,ret:-1}))}},
b3:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaG")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isab")
y=u.a
if(y<4){u.b3(a)
return}this.a=y
this.c=u.c}z.a=this.ab(a)
y=this.b
y.toString
P.bM(null,null,y,H.j(new P.iK(z,this),{func:1,ret:-1}))}},
au:function(){var z=H.f(this.c,"$isaG")
this.c=null
return this.ab(z)},
ab:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
al:function(a){var z,y,x
z=H.o(this,0)
H.bP(a,{futureOr:1,type:z})
y=this.$ti
if(H.b3(a,"$isaR",y,"$asaR"))if(H.b3(a,"$isab",y,null))P.dw(a,this)
else P.iG(a,this)
else{x=this.au()
H.y(a,z)
this.a=4
this.c=a
P.b0(this,x)}},
aZ:function(a,b){var z
H.f(b,"$isa0")
z=this.au()
this.a=8
this.c=new P.W(a,b)
P.b0(this,z)},
$isaR:1,
p:{
iG:function(a,b){var z,y,x
b.a=1
try{a.bD(new P.iH(b),new P.iI(b),null)}catch(x){z=H.a5(x)
y=H.b8(x)
P.kt(new P.iJ(b,z,y))}},
dw:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isab")
if(z>=4){y=b.au()
b.a=a.a
b.c=a.c
P.b0(b,y)}else{y=H.f(b.c,"$isaG")
b.a=2
b.c=a
a.b3(y)}},
b0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isW")
y=y.b
u=v.a
t=v.b
y.toString
P.bL(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b0(z.a,b)}y=z.a
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
if(p){H.f(r,"$isW")
y=y.b
u=r.a
t=r.b
y.toString
P.bL(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.iN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iM(x,b,r).$0()}else if((y&2)!==0)new P.iL(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.z(y).$isaR){if(y.a>=4){n=H.f(t.c,"$isaG")
t.c=null
b=t.ab(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dw(y,t)
return}}m=b.b
n=H.f(m.c,"$isaG")
m.c=null
b=m.ab(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isW")
m.a=8
m.c=u}z.a=m
y=m}}}},
iF:{"^":"l:0;a,b",
$0:function(){P.b0(this.a,this.b)}},
iK:{"^":"l:0;a,b",
$0:function(){P.b0(this.b,this.a.a)}},
iH:{"^":"l:7;a",
$1:function(a){var z=this.a
z.a=0
z.al(a)}},
iI:{"^":"l:17;a",
$2:function(a,b){H.f(b,"$isa0")
this.a.aZ(a,b)},
$1:function(a){return this.$2(a,null)}},
iJ:{"^":"l:0;a,b,c",
$0:function(){this.a.aZ(this.b,this.c)}},
iN:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bB(H.j(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.b8(v)
if(this.d){w=H.f(this.a.a.c,"$isW").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isW")
else u.b=new P.W(y,x)
u.a=!0
return}if(!!J.z(z).$isaR){if(z instanceof P.ab&&z.gb6()>=4){if(z.gb6()===8){w=this.b
w.b=H.f(z.gcN(),"$isW")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bC(new P.iO(t),null)
w.a=!1}}},
iO:{"^":"l:18;a",
$1:function(a){return this.a}},
iM:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.ay(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.b8(t)
x=this.a
x.b=new P.W(z,y)
x.a=!0}}},
iL:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isW")
w=this.c
if(w.dk(z)&&w.e!=null){v=this.b
v.b=w.dh(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.b8(u)
w=H.f(this.a.a.c,"$isW")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.W(y,x)
s.a=!0}}},
dt:{"^":"b;a,0b"},
hY:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ab(0,$.H,[P.C])
z.a=0
x=H.o(this,0)
w=H.j(new P.i_(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.i0(z,y),{func:1,ret:-1})
W.ax(this.a,this.b,w,!1,x)
return y}},
i_:{"^":"l;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.o(this.b,0)]}}},
i0:{"^":"l:0;a,b",
$0:function(){this.b.al(this.a.a)}},
hZ:{"^":"b;"},
W:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isN:1},
jD:{"^":"b;",$ismt:1},
jT:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dc()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
j9:{"^":"jD;",
ds:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.dO(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.b8(x)
P.bL(null,null,this,z,H.f(y,"$isa0"))}},
dt:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.dP(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.b8(x)
P.bL(null,null,this,z,H.f(y,"$isa0"))}},
d0:function(a,b){return new P.jb(this,H.j(a,{func:1,ret:b}),b)},
bd:function(a){return new P.ja(this,H.j(a,{func:1,ret:-1}))},
d1:function(a,b){return new P.jc(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
bB:function(a,b){H.j(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.dO(null,null,this,a,b)},
ay:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.H===C.e)return a.$1(b)
return P.dP(null,null,this,a,b,c,d)},
dr:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.H===C.e)return a.$2(b,c)
return P.jU(null,null,this,a,b,c,d,e,f)}},
jb:{"^":"l;a,b,c",
$0:function(){return this.a.bB(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ja:{"^":"l:1;a,b",
$0:function(){return this.a.ds(this.b)}},
jc:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dt(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
c9:function(a,b,c){H.bS(a)
return H.w(H.k1(a,new H.d4(0,0,[b,c])),"$isd5",[b,c],"$asd5")},
a8:function(a,b){return new H.d4(0,0,[a,b])},
a_:function(a,b,c,d){return new P.iV(0,0,[d])},
fS:function(a,b,c){var z,y
if(P.ck(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.p([],[P.d])
y=$.b9()
C.a.l(y,a)
try{P.jQ(a,z)}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=P.dh(b,H.kn(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
c5:function(a,b,c){var z,y,x
if(P.ck(a))return b+"..."+c
z=new P.cg(b)
y=$.b9()
C.a.l(y,a)
try{x=z
x.a=P.dh(x.gU(),a,", ")}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
ck:function(a){var z,y
for(z=0;y=$.b9(),z<y.length;++z)if(a===y[z])return!0
return!1},
jQ:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.m(b,-1)
v=b.pop()
if(0>=b.length)return H.m(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.m(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
ca:function(a,b){var z,y,x
z=P.a_(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.a4)(a),++x)z.l(0,H.y(a[x],b))
return z},
d8:function(a){var z,y,x
z={}
if(P.ck(a))return"{...}"
y=new P.cg("")
try{C.a.l($.b9(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.eO(a,new P.h6(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.b9()
if(0>=z.length)return H.m(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
iV:{"^":"iQ;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dA(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbl")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbl")!=null}else return this.cz(b)},
cz:function(a){var z=this.d
if(z==null)return!1
return this.ap(this.b1(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ch()
this.b=z}return this.aW(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ch()
this.c=y}return this.aW(y,b)}else return this.cv(0,b)},
cv:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.ch()
this.d=z}y=this.b_(b)
x=z[y]
if(x==null)z[y]=[this.at(b)]
else{if(this.ap(x,b)>=0)return!1
x.push(this.at(b))}return!0},
bA:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b4(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b4(this.c,b)
else return this.cI(0,b)},
cI:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b1(z,b)
x=this.ap(y,b)
if(x<0)return!1
this.b8(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ar()}},
aW:function(a,b){H.y(b,H.o(this,0))
if(H.f(a[b],"$isbl")!=null)return!1
a[b]=this.at(b)
return!0},
b4:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbl")
if(z==null)return!1
this.b8(z)
delete a[b]
return!0},
ar:function(){this.r=this.r+1&67108863},
at:function(a){var z,y
z=new P.bl(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ar()
return z},
b8:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ar()},
b_:function(a){return J.ai(a)&0x3ffffff},
b1:function(a,b){return a[this.b_(b)]},
ap:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aA(a[y].a,b))return y
return-1},
p:{
ch:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bl:{"^":"b;a,0b,0c"},
dA:{"^":"b;a,b,0c,0d,$ti",
saY:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aC(z))
else{z=this.c
if(z==null){this.saY(null)
return!1}else{this.saY(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isaS:1,
p:{
iW:function(a,b,c){var z=new P.dA(a,b,[c])
z.c=a.e
return z}}},
iQ:{"^":"hM;"},
h4:{"^":"iX;",$isi:1,$isa:1},
n:{"^":"b;$ti",
gw:function(a){return new H.d6(a,this.gj(a),0,[H.b7(this,a,"n",0)])},
q:function(a,b){return this.h(a,b)},
dg:function(a,b,c,d){var z,y,x
H.y(b,d)
H.j(c,{func:1,ret:d,args:[d,H.b7(this,a,"n",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aC(a))}return y},
k:function(a){return P.c5(a,"[","]")}},
d7:{"^":"R;"},
h6:{"^":"l:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
R:{"^":"b;$ti",
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.b7(this,a,"R",0),H.b7(this,a,"R",1)]})
for(z=J.bu(this.gE(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aN(this.gE(a))},
k:function(a){return P.d8(a)},
$isI:1},
hN:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bu(H.w(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.c5(this,"{","}")},
$isi:1,
$islV:1},
hM:{"^":"hN;"},
iX:{"^":"b+n;"}}],["","",,P,{"^":"",
fG:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.aY(a)+"'"},
by:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fG(a)},
cY:function(a){return new P.iC(a)},
az:function(a){H.bU(H.e(a))},
O:{"^":"b;"},
"+bool":0,
bx:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a&&!0},
L:function(a,b){return C.b.L(this.a,H.f(b,"$isbx").a)},
gv:function(a){var z=this.a
return(z^C.b.b5(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fu(H.hC(this))
y=P.bb(H.hA(this))
x=P.bb(H.hw(this))
w=P.bb(H.hx(this))
v=P.bb(H.hz(this))
u=P.bb(H.hB(this))
t=P.fv(H.hy(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isU:1,
$asU:function(){return[P.bx]},
p:{
fu:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bb:function(a){if(a>=10)return""+a
return"0"+a}}},
P:{"^":"D;"},
"+double":0,
aP:{"^":"b;a",
T:function(a,b){return C.b.T(this.a,H.f(b,"$isaP").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,H.f(b,"$isaP").a)},
k:function(a){var z,y,x,w,v
z=new P.fD()
y=this.a
if(y<0)return"-"+new P.aP(0-y).k(0)
x=z.$1(C.b.V(y,6e7)%60)
w=z.$1(C.b.V(y,1e6)%60)
v=new P.fC().$1(y%1e6)
return""+C.b.V(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isU:1,
$asU:function(){return[P.aP]},
p:{
fB:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fC:{"^":"l:9;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fD:{"^":"l:9;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"b;"},
dc:{"^":"N;",
k:function(a){return"Throw of null."}},
aB:{"^":"N;a,b,c,d",
gan:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gam:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gan()+y+x
if(!this.a)return w
v=this.gam()
u=P.by(this.b)
return w+v+": "+u},
p:{
cK:function(a,b,c){return new P.aB(!0,a,b,c)}}},
dd:{"^":"aB;e,f,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bE:function(a,b,c){return new P.dd(null,null,!0,a,b,"Value not in range")},
bD:function(a,b,c,d,e){return new P.dd(b,c,!0,a,d,"Invalid value")}}},
fQ:{"^":"aB;e,j:f>,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y
z=H.K(this.b)
if(typeof z!=="number")return z.O()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.K(e==null?J.aN(b):e)
return new P.fQ(b,z,!0,a,c,"Index out of range")}}},
ia:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
x:function(a){return new P.ia(a)}}},
i8:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dq:function(a){return new P.i8(a)}}},
ce:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
cf:function(a){return new P.ce(a)}}},
fn:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.by(z)+"."},
p:{
aC:function(a){return new P.fn(a)}}},
dg:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isN:1},
ft:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iC:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bc:{"^":"b;"},
C:{"^":"D;"},
"+int":0,
i:{"^":"b;$ti",
az:["c3",function(a,b){var z=H.cp(this,"i",0)
return new H.dr(this,H.j(b,{func:1,ret:P.O,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.V(P.bD(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
k:function(a){return P.fS(this,"(",")")}},
aS:{"^":"b;$ti"},
a:{"^":"b;$ti",$isi:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isU:1,
$asU:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aX(this)},
k:function(a){return"Instance of '"+H.aY(this)+"'"},
toString:function(){return this.k(this)}},
a0:{"^":"b;"},
d:{"^":"b;",$isU:1,
$asU:function(){return[P.d]},
$ishr:1},
"+String":0,
cg:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dh:function(a,b,c){var z=J.bu(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
bn:function(){return document},
fE:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).M(z,a,b,c)
y.toString
z=W.r
z=new H.dr(new W.a2(y),H.j(new W.fF(),{func:1,ret:P.O,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.V(H.fT())
w=x.gA(x)
if(x.t())H.V(H.fU())
return H.f(w,"$isQ")},
cX:function(a){H.f(a,"$isL")
return"wheel"},
aQ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eR(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
iz:function(a,b){return document.createElement(a)},
bJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dz:function(a,b,c,d){var z,y
z=W.bJ(W.bJ(W.bJ(W.bJ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dM:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.it(a)
if(!!J.z(z).$isL)return z
return}else return H.f(a,"$isL")},
dS:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.d1(a,b)},
J:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kx:{"^":"h;0j:length=","%":"AccessibleNodeList"},
f6:{"^":"J;",
k:function(a){return String(a)},
$isf6:1,
"%":"HTMLAnchorElement"},
ky:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cL:{"^":"J;",$iscL:1,"%":"HTMLBaseElement"},
fd:{"^":"h;","%":";Blob"},
bv:{"^":"J;",$isbv:1,"%":"HTMLBodyElement"},
c2:{"^":"J;0n:height=,0m:width=",
bT:function(a,b,c){var z=this.cE(a,b,P.jZ(c,null))
return z},
cE:function(a,b,c){return a.getContext(b,c)},
$isc2:1,
"%":"HTMLCanvasElement"},
kD:{"^":"h;",
ag:function(a){return P.Y(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kE:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fp:{"^":"c3;",$isfp:1,"%":"CSSNumericValue|CSSUnitValue"},
kG:{"^":"fs;0j:length=","%":"CSSPerspective"},
aj:{"^":"h;",$isaj:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fq:{"^":"ir;0j:length=",
aC:function(a,b){var z=this.cF(a,this.aj(a,b))
return z==null?"":z},
aj:function(a,b){var z,y
z=$.e9()
y=z[b]
if(typeof y==="string")return y
y=this.cR(a,b)
z[b]=y
return y},
cR:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fw()+b
if(z in a)return z
return b},
cF:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fr:{"^":"b;",
gn:function(a){return this.aC(a,"height")},
gm:function(a){return this.aC(a,"width")}},
c3:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fs:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kI:{"^":"c3;0j:length=","%":"CSSTransformValue"},
kJ:{"^":"c3;0j:length=","%":"CSSUnparsedValue"},
kL:{"^":"h;0j:length=","%":"DataTransferItemList"},
fx:{"^":"J;","%":"HTMLDivElement"},
fy:{"^":"r;",
cV:function(a,b){return a.adoptNode(b)},
bU:function(a,b){return a.getElementById(b)},
Y:function(a,b){return a.querySelector(b)},
gbw:function(a){return new W.bj(a,"mousedown",!1,[W.S])},
gbx:function(a){return new W.bj(a,"mousemove",!1,[W.S])},
gby:function(a){return new W.bj(a,"mouseup",!1,[W.S])},
gbz:function(a){return new W.bj(a,H.u(W.cX(a)),!1,[W.aF])},
"%":"XMLDocument;Document"},
kM:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fz:{"^":"h;",
d9:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kN:{"^":"iv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$isT",[P.D],"$asT")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.T,P.D]]},
$isv:1,
$asv:function(){return[[P.T,P.D]]},
$asn:function(){return[[P.T,P.D]]},
$isi:1,
$asi:function(){return[[P.T,P.D]]},
$isa:1,
$asa:function(){return[[P.T,P.D]]},
$asq:function(){return[[P.T,P.D]]},
"%":"ClientRectList|DOMRectList"},
fA:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.b3(b,"$isT",[P.D],"$asT"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dz(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isT:1,
$asT:function(){return[P.D]},
"%":";DOMRectReadOnly"},
kO:{"^":"ix;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asn:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kP:{"^":"h;0j:length=","%":"DOMTokenList"},
Q:{"^":"r;0du:tagName=",
gcY:function(a){return new W.iy(a)},
k:function(a){return a.localName},
M:["ah",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cW
if(z==null){z=H.p([],[W.a9])
y=new W.da(z)
C.a.l(z,W.dx(null))
C.a.l(z,W.dI())
$.cW=y
d=y}else d=z
z=$.cV
if(z==null){z=new W.dL(d)
$.cV=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.J).d9(y,"")
$.ae=y
$.c4=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.f(y,"$iscL")
y.href=z.baseURI
z=$.ae.head;(z&&C.K).F(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbv")}z=$.ae
if(!!this.$isbv)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.q).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.U,a.tagName)){z=$.c4;(z&&C.C).bV(z,x)
z=$.c4
w=(z&&C.C).d7(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cE(x)
c.aG(w)
C.h.cV(document,w)
return w},function(a,b,c){return this.M(a,b,c,null)},"d8",null,null,"gdD",5,5,null],
bX:function(a,b,c,d){a.textContent=null
this.F(a,this.M(a,b,c,d))},
bW:function(a,b){return this.bX(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
cJ:function(a,b){return a.removeAttribute(b)},
gbw:function(a){return new W.bI(a,"mousedown",!1,[W.S])},
gbx:function(a){return new W.bI(a,"mousemove",!1,[W.S])},
gby:function(a){return new W.bI(a,"mouseup",!1,[W.S])},
gbz:function(a){return new W.bI(a,H.u(W.cX(a)),!1,[W.aF])},
$isQ:1,
"%":";Element"},
fF:{"^":"l:19;",
$1:function(a){return!!J.z(H.f(a,"$isr")).$isQ}},
kW:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
Z:{"^":"h;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
cU:function(a,b,c,d){H.j(c,{func:1,args:[W.Z]})
if(c!=null)this.cw(a,b,c,!1)},
cw:function(a,b,c,d){return a.addEventListener(b,H.b4(H.j(c,{func:1,args:[W.Z]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dF|dG|dJ|dK"},
ak:{"^":"fd;",$isak:1,"%":"File"},
lc:{"^":"iE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isak")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ak]},
$isv:1,
$asv:function(){return[W.ak]},
$asn:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"FileList"},
ld:{"^":"L;0j:length=","%":"FileWriter"},
lg:{"^":"J;0j:length=","%":"HTMLFormElement"},
al:{"^":"h;",$isal:1,"%":"Gamepad"},
fO:{"^":"J;","%":"HTMLHeadElement"},
lh:{"^":"h;0j:length=","%":"History"},
li:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fP:{"^":"fy;","%":"HTMLDocument"},
lj:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lk:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
ll:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lm:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
bA:{"^":"J;0n:height=,0m:width=",$isbA:1,"%":"HTMLInputElement"},
aT:{"^":"dp;",$isaT:1,"%":"KeyboardEvent"},
h5:{"^":"h;",
k:function(a){return String(a)},
$ish5:1,
"%":"Location"},
h9:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lv:{"^":"h;0j:length=","%":"MediaList"},
lw:{"^":"iZ;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gE:function(a){var z=H.p([],[P.d])
this.D(a,new W.hb(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hb:{"^":"l:3;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lx:{"^":"j_;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gE:function(a){var z=H.p([],[P.d])
this.D(a,new W.hc(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hc:{"^":"l:3;a",
$2:function(a,b){return C.a.l(this.a,a)}},
an:{"^":"h;",$isan:1,"%":"MimeType"},
ly:{"^":"j1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isan")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.an]},
$isv:1,
$asv:function(){return[W.an]},
$asn:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"MimeTypeArray"},
S:{"^":"dp;",
gbv:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aW(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.z(W.dM(z)).$isQ)throw H.c(P.x("offsetX is only supported on elements"))
y=H.f(W.dM(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.aW(u,v,w),"$isaW",w,"$asaW")
if(typeof z!=="number")return z.a8()
if(typeof x!=="number")return x.a8()
return new P.aW(C.t.bE(z-u),C.t.bE(x-v),w)}},
$isS:1,
"%":";DragEvent|MouseEvent"},
a2:{"^":"h4;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cf("No elements"))
if(y>1)throw H.c(P.cf("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isi",[W.r],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.m(y,b)
J.ex(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.d_(z,z.length,-1,[H.b7(C.W,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.m(z,b)
return z[b]},
$asn:function(){return[W.r]},
$asi:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"L;0dl:previousSibling=",
dm:function(a){var z=a.parentNode
if(z!=null)J.br(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.c2(a):z},
F:function(a,b){return a.appendChild(b)},
cK:function(a,b){return a.removeChild(b)},
cL:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hm:{"^":"j3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lH:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lJ:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
lK:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"h;0j:length=",$isap:1,"%":"Plugin"},
lM:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ap]},
$isv:1,
$asv:function(){return[W.ap]},
$asn:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"PluginArray"},
lO:{"^":"S;0n:height=,0m:width=","%":"PointerEvent"},
hE:{"^":"h;",
d7:function(a,b){return a.createContextualFragment(b)},
bV:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lT:{"^":"jd;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gE:function(a){var z=H.p([],[P.d])
this.D(a,new W.hJ(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hJ:{"^":"l:3;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lU:{"^":"h;0n:height=,0m:width=","%":"Screen"},
cd:{"^":"J;0j:length=",$iscd:1,"%":"HTMLSelectElement"},
aq:{"^":"L;",$isaq:1,"%":"SourceBuffer"},
lW:{"^":"dG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asn:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SourceBufferList"},
ar:{"^":"h;",$isar:1,"%":"SpeechGrammar"},
lX:{"^":"jj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ar]},
$isv:1,
$asv:function(){return[W.ar]},
$asn:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechGrammarList"},
as:{"^":"h;0j:length=",$isas:1,"%":"SpeechRecognitionResult"},
m_:{"^":"jm;",
h:function(a,b){return this.b2(a,H.u(b))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cH(a,z)
if(y==null)return
b.$2(y,this.b2(a,y))}},
gE:function(a){var z=H.p([],[P.d])
this.D(a,new W.hX(z))
return z},
gj:function(a){return a.length},
b2:function(a,b){return a.getItem(b)},
cH:function(a,b){return a.key(b)},
$asR:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
hX:{"^":"l:20;a",
$2:function(a,b){return C.a.l(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
i1:{"^":"J;",
M:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ah(a,b,c,d)
z=W.fE("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a2(y).H(0,new W.a2(z))
return y},
"%":"HTMLTableElement"},
m2:{"^":"J;",
M:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ah(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a2(z)
x=z.ga7(z)
x.toString
z=new W.a2(x)
w=z.ga7(z)
y.toString
w.toString
new W.a2(y).H(0,new W.a2(w))
return y},
"%":"HTMLTableRowElement"},
m3:{"^":"J;",
M:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ah(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a2(z)
x=z.ga7(z)
y.toString
x.toString
new W.a2(y).H(0,new W.a2(x))
return y},
"%":"HTMLTableSectionElement"},
dj:{"^":"J;",$isdj:1,"%":"HTMLTemplateElement"},
m4:{"^":"h;0m:width=","%":"TextMetrics"},
au:{"^":"L;",$isau:1,"%":"TextTrack"},
av:{"^":"L;",$isav:1,"%":"TextTrackCue|VTTCue"},
m5:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.av]},
$isv:1,
$asv:function(){return[W.av]},
$asn:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TextTrackCueList"},
m6:{"^":"dK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.au]},
$isv:1,
$asv:function(){return[W.au]},
$asn:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackList"},
m7:{"^":"h;0j:length=","%":"TimeRanges"},
aw:{"^":"h;",$isaw:1,"%":"Touch"},
m8:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aw]},
$isv:1,
$asv:function(){return[W.aw]},
$asn:function(){return[W.aw]},
$isi:1,
$asi:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"TouchList"},
m9:{"^":"h;0j:length=","%":"TrackDefaultList"},
dp:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mn:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mp:{"^":"h9;0n:height=,0m:width=","%":"HTMLVideoElement"},
mq:{"^":"L;0j:length=","%":"VideoTrackList"},
mr:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
ms:{"^":"h;0m:width=","%":"VTTRegion"},
aF:{"^":"S;",
gdc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
$isaF:1,
"%":"WheelEvent"},
ie:{"^":"L;",
gcX:function(a){var z,y,x
z=P.D
y=new P.ab(0,$.H,[z])
x=H.j(new W.ig(new P.jq(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cD(a)
this.cM(a,W.dS(x,z))
return y},
cM:function(a,b){return a.requestAnimationFrame(H.b4(H.j(b,{func:1,ret:-1,args:[P.D]}),1))},
cD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isds:1,
"%":"DOMWindow|Window"},
ig:{"^":"l:21;a",
$1:function(a){var z=this.a
a=H.bP(H.cs(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.V(P.cf("Future already completed"))
z.al(a)}},
du:{"^":"r;",$isdu:1,"%":"Attr"},
my:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaj")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aj]},
$isv:1,
$asv:function(){return[W.aj]},
$asn:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"CSSRuleList"},
mz:{"^":"fA;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.b3(b,"$isT",[P.D],"$asT"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dz(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mA:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isal")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.al]},
$isv:1,
$asv:function(){return[W.al]},
$asn:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asq:function(){return[W.al]},
"%":"GamepadList"},
mF:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mG:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"SpeechRecognitionResultList"},
mH:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"StyleSheetList"},
io:{"^":"d7;cC:a<",
D:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gE(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.a4)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gE:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.p([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.m(z,w)
v=H.f(z[w],"$isdu")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asR:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iy:{"^":"io;a",
h:function(a,b){return J.bZ(this.a,H.u(b))},
gj:function(a){return this.gE(this).length}},
bj:{"^":"hY;a,b,c,$ti"},
bI:{"^":"bj;a,b,c,$ti"},
iA:{"^":"hZ;a,b,c,d,e,$ti",p:{
ax:function(a,b,c,d,e){var z=W.dS(new W.iB(c),W.Z)
if(z!=null&&!0)J.ey(a,b,z,!1)
return new W.iA(0,a,b,z,!1,[e])}}},
iB:{"^":"l:22;a",
$1:function(a){return this.a.$1(H.f(a,"$isZ"))}},
bk:{"^":"b;a",
cs:function(a){var z,y
z=$.cw()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.T[y],W.k8())
for(y=0;y<12;++y)z.i(0,C.v[y],W.k9())}},
W:function(a){return $.en().u(0,W.aQ(a))},
S:function(a,b,c){var z,y,x
z=W.aQ(a)
y=$.cw()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bN(x.$4(a,b,c,this))},
$isa9:1,
p:{
dx:function(a){var z,y
z=document.createElement("a")
y=new W.je(z,window.location)
y=new W.bk(y)
y.cs(a)
return y},
mD:[function(a,b,c,d){H.f(a,"$isQ")
H.u(b)
H.u(c)
H.f(d,"$isbk")
return!0},"$4","k8",16,0,13],
mE:[function(a,b,c,d){var z,y,x
H.f(a,"$isQ")
H.u(b)
H.u(c)
z=H.f(d,"$isbk").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","k9",16,0,13]}},
q:{"^":"b;$ti",
gw:function(a){return new W.d_(a,this.gj(a),-1,[H.b7(this,a,"q",0)])}},
da:{"^":"b;a",
W:function(a){return C.a.ba(this.a,new W.ho(a))},
S:function(a,b,c){return C.a.ba(this.a,new W.hn(a,b,c))},
$isa9:1},
ho:{"^":"l:10;a",
$1:function(a){return H.f(a,"$isa9").W(this.a)}},
hn:{"^":"l:10;a,b,c",
$1:function(a){return H.f(a,"$isa9").S(this.a,this.b,this.c)}},
jf:{"^":"b;",
ct:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.az(0,new W.jg())
y=b.az(0,new W.jh())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
W:function(a){return this.a.u(0,W.aQ(a))},
S:["c5",function(a,b,c){var z,y
z=W.aQ(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.cW(c)
else if(y.u(0,"*::"+b))return this.d.cW(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa9:1},
jg:{"^":"l:11;",
$1:function(a){return!C.a.u(C.v,H.u(a))}},
jh:{"^":"l:11;",
$1:function(a){return C.a.u(C.v,H.u(a))}},
jr:{"^":"jf;e,a,b,c,d",
S:function(a,b,c){if(this.c5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bZ(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dI:function(){var z,y,x,w,v
z=P.d
y=P.ca(C.u,z)
x=H.o(C.u,0)
w=H.j(new W.js(),{func:1,ret:z,args:[x]})
v=H.p(["TEMPLATE"],[z])
y=new W.jr(y,P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z),null)
y.ct(null,new H.h7(C.u,w,[x,z]),v,null)
return y}}},
js:{"^":"l:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jp:{"^":"b;",
W:function(a){var z=J.z(a)
if(!!z.$isde)return!1
z=!!z.$isG
if(z&&W.aQ(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.bZ(b,"on"))return!1
return this.W(a)},
$isa9:1},
d_:{"^":"b;a,b,c,0d,$ti",
sb0:function(a){this.d=H.y(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb0(J.ew(this.a,z))
this.c=z
return!0}this.sb0(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaS:1},
is:{"^":"b;a",$isL:1,$isds:1,p:{
it:function(a){if(a===window)return H.f(a,"$isds")
else return new W.is(a)}}},
a9:{"^":"b;"},
je:{"^":"b;a,b",$ismm:1},
dL:{"^":"b;a",
aG:function(a){new W.jC(this).$2(a,null)},
a0:function(a,b){if(b==null)J.cE(a)
else J.br(b,a)},
cP:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eP(a)
x=J.bZ(y.gcC(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.ba(a)}catch(t){H.a5(t)}try{u=W.aQ(a)
this.cO(H.f(a,"$isQ"),b,z,v,u,H.f(y,"$isI"),H.u(x))}catch(t){if(H.a5(t) instanceof P.aB)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cO:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gE(f)
y=H.p(z.slice(0),[H.o(z,0)])
for(x=f.gE(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.m(y,x)
v=y[x]
if(!this.a.S(a,J.eY(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.cJ(z,v)}}if(!!J.z(a).$isdj)this.aG(a.content)},
$islF:1},
jC:{"^":"l:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cP(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eQ(z)}catch(w){H.a5(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.br(u,v)}else J.br(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
ir:{"^":"h+fr;"},
iu:{"^":"h+n;"},
iv:{"^":"iu+q;"},
iw:{"^":"h+n;"},
ix:{"^":"iw+q;"},
iD:{"^":"h+n;"},
iE:{"^":"iD+q;"},
iR:{"^":"h+n;"},
iS:{"^":"iR+q;"},
iZ:{"^":"h+R;"},
j_:{"^":"h+R;"},
j0:{"^":"h+n;"},
j1:{"^":"j0+q;"},
j2:{"^":"h+n;"},
j3:{"^":"j2+q;"},
j6:{"^":"h+n;"},
j7:{"^":"j6+q;"},
jd:{"^":"h+R;"},
dF:{"^":"L+n;"},
dG:{"^":"dF+q;"},
ji:{"^":"h+n;"},
jj:{"^":"ji+q;"},
jm:{"^":"h+R;"},
jt:{"^":"h+n;"},
ju:{"^":"jt+q;"},
dJ:{"^":"L+n;"},
dK:{"^":"dJ+q;"},
jy:{"^":"h+n;"},
jz:{"^":"jy+q;"},
jE:{"^":"h+n;"},
jF:{"^":"jE+q;"},
jG:{"^":"h+n;"},
jH:{"^":"jG+q;"},
jI:{"^":"h+n;"},
jJ:{"^":"jI+q;"},
jK:{"^":"h+n;"},
jL:{"^":"jK+q;"},
jM:{"^":"h+n;"},
jN:{"^":"jM+q;"}}],["","",,P,{"^":"",
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.a8(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a4)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
jZ:function(a,b){var z={}
a.D(0,new P.k_(z))
return z},
cT:function(){var z=$.cS
if(z==null){z=J.bW(window.navigator.userAgent,"Opera",0)
$.cS=z}return z},
fw:function(){var z,y
z=$.cP
if(z!=null)return z
y=$.cQ
if(y==null){y=J.bW(window.navigator.userAgent,"Firefox",0)
$.cQ=y}if(y)z="-moz-"
else{y=$.cR
if(y==null){y=!P.cT()&&J.bW(window.navigator.userAgent,"Trident/",0)
$.cR=y}if(y)z="-ms-"
else z=P.cT()?"-o-":"-webkit-"}$.cP=z
return z},
k_:{"^":"l:8;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aW:{"^":"b;J:a>,K:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.b3(b,"$isaW",[P.D],null)&&this.a==J.eS(b)&&this.b==b.gK(b)},
gv:function(a){var z,y,x
z=J.ai(this.a)
y=J.ai(this.b)
y=P.dy(P.dy(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
j8:{"^":"b;"},
T:{"^":"j8;$ti"}}],["","",,P,{"^":"",f7:{"^":"h;",$isf7:1,"%":"SVGAnimatedLength"},kX:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},kY:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kZ:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},l_:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l0:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l1:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l2:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},le:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},lf:{"^":"bd;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fM:{"^":"bd;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bd:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},ln:{"^":"bd;0n:height=,0m:width=","%":"SVGImageElement"},aU:{"^":"h;",$isaU:1,"%":"SVGLength"},ls:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.f(c,"$isaU")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aU]},
$isi:1,
$asi:function(){return[P.aU]},
$isa:1,
$asa:function(){return[P.aU]},
$asq:function(){return[P.aU]},
"%":"SVGLengthList"},lu:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aV:{"^":"h;",$isaV:1,"%":"SVGNumber"},lG:{"^":"j5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.f(c,"$isaV")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aV]},
$isi:1,
$asi:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$asq:function(){return[P.aV]},
"%":"SVGNumberList"},lL:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lN:{"^":"h;0j:length=","%":"SVGPointList"},lP:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lQ:{"^":"fM;0n:height=,0m:width=","%":"SVGRectElement"},de:{"^":"G;",$isde:1,"%":"SVGScriptElement"},m0:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.u(c)
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asn:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"Q;",
M:function(a,b,c,d){var z,y,x,w,v,u
z=H.p([],[W.a9])
C.a.l(z,W.dx(null))
C.a.l(z,W.dI())
C.a.l(z,new W.jp())
c=new W.dL(new W.da(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).d8(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a2(w)
u=z.ga7(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m1:{"^":"bd;0n:height=,0m:width=","%":"SVGSVGElement"},aZ:{"^":"h;",$isaZ:1,"%":"SVGTransform"},ma:{"^":"jB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.f(c,"$isaZ")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aZ]},
$isi:1,
$asi:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGTransformList"},mo:{"^":"bd;0n:height=,0m:width=","%":"SVGUseElement"},iT:{"^":"h+n;"},iU:{"^":"iT+q;"},j4:{"^":"h+n;"},j5:{"^":"j4+q;"},jn:{"^":"h+n;"},jo:{"^":"jn+q;"},jA:{"^":"h+n;"},jB:{"^":"jA+q;"}}],["","",,P,{"^":"",af:{"^":"b;",$isi:1,
$asi:function(){return[P.P]},
$isa:1,
$asa:function(){return[P.P]},
$isi6:1}}],["","",,P,{"^":"",kz:{"^":"h;0j:length=","%":"AudioBuffer"},kA:{"^":"ip;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
D:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gE:function(a){var z=H.p([],[P.d])
this.D(a,new P.f9(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},f9:{"^":"l:3;a",
$2:function(a,b){return C.a.l(this.a,a)}},kB:{"^":"L;0j:length=","%":"AudioTrackList"},fa:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lI:{"^":"fa;0j:length=","%":"OfflineAudioContext"},ip:{"^":"h+R;"}}],["","",,P,{"^":"",fe:{"^":"h;",$isfe:1,"%":"WebGLBuffer"},hD:{"^":"h;",$ishD:1,"%":"WebGLProgram"},lR:{"^":"h;",
b9:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bj:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
ag:function(a){return P.Y(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bu:function(a,b){return a.linkProgram(b)},
aH:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bF:function(a,b,c){return a.uniform1f(b,c)},
bG:function(a,b,c){return a.uniform1fv(b,c)},
bH:function(a,b,c){return a.uniform1i(b,c)},
bI:function(a,b,c){return a.uniform1iv(b,c)},
bJ:function(a,b,c){return a.uniform2fv(b,c)},
bK:function(a,b,c){return a.uniform3fv(b,c)},
bL:function(a,b,c){return a.uniform4fv(b,c)},
bM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bO:function(a,b){return a.useProgram(b)},
bP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bR:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lS:{"^":"h;",
d_:function(a,b){return a.beginTransformFeedback(b)},
d2:function(a,b){return a.bindVertexArray(b)},
da:function(a){return a.createVertexArray()},
dd:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
de:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
df:function(a){return a.endTransformFeedback()},
dz:function(a,b,c,d){this.cS(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
cS:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dA:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b9:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bj:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
ag:function(a){return P.Y(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bu:function(a,b){return a.linkProgram(b)},
aH:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bF:function(a,b,c){return a.uniform1f(b,c)},
bG:function(a,b,c){return a.uniform1fv(b,c)},
bH:function(a,b,c){return a.uniform1i(b,c)},
bI:function(a,b,c){return a.uniform1iv(b,c)},
bJ:function(a,b,c){return a.uniform2fv(b,c)},
bK:function(a,b,c){return a.uniform3fv(b,c)},
bL:function(a,b,c){return a.uniform4fv(b,c)},
bM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bO:function(a,b){return a.useProgram(b)},
bP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bR:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hO:{"^":"h;",$ishO:1,"%":"WebGLShader"},i3:{"^":"h;",$isi3:1,"%":"WebGLTexture"},i7:{"^":"h;",$isi7:1,"%":"WebGLUniformLocation"},ic:{"^":"h;",$isic:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lY:{"^":"jl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.Y(this.cG(a,b))},
i:function(a,b,c){H.f(c,"$isI")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cG:function(a,b){return a.item(b)},
$asn:function(){return[[P.I,,,]]},
$isi:1,
$asi:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jk:{"^":"h+n;"},jl:{"^":"jk+q;"}}],["","",,G,{"^":"",
ih:function(a){var z,y,x,w
z=H.p(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.m(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a3(z,"\n")},
dv:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bm(a,b)
z.aH(a,y,c)
z.bj(a,y)
x=H.bN(z.aE(a,y,35713))
if(x!=null&&!x){w=z.aD(a,y)
P.az("E:Compilation failed:")
P.az("E:"+G.ih(c))
P.az("E:Failure:")
P.az(C.i.C("E:",w))
throw H.c(w)}return y},
d0:function(a,b){var z,y,x,w,v,u
H.w(a,"$isa",[T.B],"$asa")
z=a.length
b=new Float32Array(z*3)
for(z=a.length,y=0;y<z;++y){x=y*3
w=a[y].a[0]
v=b.length
if(x>=v)return H.m(b,x)
b[x]=w
w=x+1
u=a[y].a[1]
if(w>=v)return H.m(b,w)
b[w]=u
x+=2
u=a[y].a[2]
if(x>=v)return H.m(b,x)
b[x]=u}return b},
fJ:function(a,b){var z,y,x
z=C.n.gj(a).R(0,2)
b=new Float32Array(z)
for(y=0;C.b.O(y,a.gj(a));++y){z=y*2
x=a.h(0,y)
C.j.i(b,z,x.gJ(x))
x=a.h(0,y)
C.j.i(b,z+1,x.gK(x))}return b},
fK:function(a,b){var z,y,x
z=C.n.gj(a).R(0,4)
b=new Float32Array(z)
for(y=0;C.b.O(y,a.gj(a));++y){z=y*4
x=a.h(0,y)
C.j.i(b,z,x.gJ(x))
x=a.h(0,y)
C.j.i(b,z+1,x.gK(x))
x=a.h(0,y)
C.j.i(b,z+2,x.gaf(x))
x=a.h(0,y)
C.j.i(b,z+3,x.gdB(x))}return b},
fI:function(a,b){var z,y
z=C.n.gj(a).R(0,4)
b=new Uint32Array(z)
for(y=0;C.b.O(y,a.gj(a));++y){z=y*4
C.o.i(b,z,a.h(0,y).h(0,0))
C.o.i(b,z+1,a.h(0,y).h(0,1))
C.o.i(b,z+2,a.h(0,y).h(0,2))
C.o.i(b,z+3,a.h(0,y).h(0,3))}return b},
iP:function(a,b){var z,y,x,w,v
for(z=a.e,y=new H.am(z,[H.o(z,0)]),y=y.gw(y),x=b.x;y.t();){w=y.d
if(!x.ad(0,w)){w="Dropping unnecessary attribute: "+H.e(w)
if($.dX>0)H.bU("I: "+w)
continue}v=z.h(0,w)
switch($.ad().h(0,w).a){case"vec2":b.a_(w,G.fJ(v,null),2)
break
case"vec3":b.a_(w,G.d0(v,null),3)
break
case"vec4":b.a_(w,G.fK(v,null),4)
break
case"float":b.a_(w,new Float32Array(H.bK(v)),1)
break
case"uvec4":b.a_(w,G.fI(v,null),4)
break}}},
bC:{"^":"b;"},
bG:{"^":"bC;",
aO:function(){return this.d},
k:function(a){var z,y,x,w
z=H.p(["{"+new H.dn(H.k5(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.am(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a3(z,"\n")}},
ff:{"^":"hT;"},
fi:{"^":"b;0a,b",
bt:function(a,b,c){J.eM(this.a,b)
if(c>0)J.f3(this.a,b,c)},
bQ:function(a,b,c,d,e,f,g,h){J.bV(this.a,34962,b)
J.f4(this.a,c,d,e,!1,g,h)}},
fH:{"^":"b;"},
cZ:{"^":"b;a,b,c,d"},
fL:{"^":"b;a,b,c,d,e",
aL:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.B],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.cZ(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
w.toString
v=new T.B(new Float32Array(3))
v.G(w)
C.a.l(z,v)}},
c8:function(a,b,c){var z,y,x,w,v,u,t
z=[T.B]
H.w(a,"$isa",z,"$asa")
H.w(b,"$isa",z,"$asa")
y=a.length
x=y-1
for(w=b.length,v=0;v<x;v=t){if(v>=w)return H.m(b,v)
u=b[v]
t=v+1
if(t>=w)return H.m(b,t)
this.aL(H.p([u,b[t],a[t],a[v]],z))}if(x<0||x>=w)return H.m(b,x)
u=b[x]
if(0>=w)return H.m(b,0)
w=b[0]
if(0>=y)return H.m(a,0)
this.aL(H.p([u,w,a[0],a[x]],z))},
ca:function(a,b,c){var z,y
H.w(a,"$isa",[[P.a,T.B]],"$asa")
for(z=0;z<a.length-1;z=y){y=z+1
this.c8(a[y],a[z],!0)}},
c9:function(a,b){return this.ca(a,b,!1)},
ce:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*8)
y.fixed$length=Array
x=H.p(y,[P.C])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.m(y,v)
u=y[v]
C.a.i(x,w,u.gcT(u))
C.a.i(x,w+1,u.gcZ(u))
C.a.i(x,w+2,u.gcZ(u))
C.a.i(x,w+3,u.gd3(u))
C.a.i(x,w+4,u.gd3(u))
C.a.i(x,w+5,u.gcT(u))
w+=6}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.a4)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
r=t.b
C.a.i(x,w+1,r)
C.a.i(x,w+2,r)
r=t.c
C.a.i(x,w+3,r)
C.a.i(x,w+4,r)
r=t.d
C.a.i(x,w+5,r)
C.a.i(x,w+6,r)
C.a.i(x,w+7,s)
w+=8}return x},
k:function(a){var z,y,x,w,v
z=H.p(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.am(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.ad().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+H.e(C.n.gj(y.h(0,w)))+"]")}return C.a.a3(z," ")}},
dl:{"^":"b;a,b,c"},
dk:{"^":"b;a,b,c"},
h8:{"^":"bG;d,a,b,c"},
ha:{"^":"bC;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sao:function(a){this.cx=H.w(a,"$isa",[P.C],"$asa")},
aM:function(a,b,c){var z,y
C.i.ak(a,0)
H.f(b,"$isaf")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bV(z.a,34962,y)
J.cC(z.a,34962,b,35048)},
cf:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cy(a,0)===105
if(z&&this.z===0)this.z=C.b.c6(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bX(x.a))
this.aM(a,b,c)
w=$.ad().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bs(x.a,this.e)
x.bt(0,v,z?1:0)
x.bQ(0,y.h(0,a),v,w.aN(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.p(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.am(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")}},
hs:{"^":"bG;",
cb:function(a,b){var z
if(typeof a!=="number")return a.dC()
if(typeof b!=="number")return H.a3(b)
z=a/b
if(this.z===z)return
this.z=z
this.aQ()},
aQ:function(){var z,y,x,w,v,u
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
aO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.B(new Float32Array(3))
u.a6(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.G(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.z(t)
y=!!z.$isbH
q=y?t.gdB(t):1
if(!!z.$isB){p=t.gJ(t)
s=t.gK(t)
r=t.gaf(t)
t=p}else if(y){p=t.gJ(t)
s=t.gK(t)
r=t.gaf(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.a3(t)
y=u[4]
if(typeof s!=="number")return H.a3(s)
x=u[8]
if(typeof r!=="number")return H.a3(r)
w=u[12]
o=u[1]
n=u[5]
m=u[9]
l=u[13]
k=u[2]
j=u[6]
i=u[10]
h=u[14]
g=u[3]
f=u[7]
e=u[11]
d=u[15]
u[12]=z*t+y*s+x*r+w*q
u[13]=o*t+n*s+m*r+l*q
u[14]=k*t+j*s+i*r+h*q
u[15]=g*t+f*s+e*r+d*q
d=this.cx
d.G(this.db)
e=d.a
c=e[0]
b=e[4]
a=e[8]
a0=e[12]
a1=e[1]
a2=e[5]
a3=e[9]
a4=e[13]
a5=e[2]
a6=e[6]
a7=e[10]
a8=e[14]
a9=e[3]
b0=e[7]
b1=e[11]
b2=e[15]
b3=u[0]
b4=u[4]
b5=u[8]
b6=u[12]
b7=u[1]
b8=u[5]
b9=u[9]
c0=u[13]
c1=u[2]
c2=u[6]
c3=u[10]
c4=u[14]
c5=u[3]
c6=u[7]
c7=u[11]
c8=u[15]
e[0]=c*b3+b*b7+a*c1+a0*c5
e[4]=c*b4+b*b8+a*c2+a0*c6
e[8]=c*b5+b*b9+a*c3+a0*c7
e[12]=c*b6+b*c0+a*c4+a0*c8
e[1]=a1*b3+a2*b7+a3*c1+a4*c5
e[5]=a1*b4+a2*b8+a3*c2+a4*c6
e[9]=a1*b5+a2*b9+a3*c3+a4*c7
e[13]=a1*b6+a2*c0+a3*c4+a4*c8
e[2]=a5*b3+a6*b7+a7*c1+a8*c5
e[6]=a5*b4+a6*b8+a7*c2+a8*c6
e[10]=a5*b5+a6*b9+a7*c3+a8*c7
e[14]=a5*b6+a6*c0+a7*c4+a8*c8
e[3]=a9*b3+b0*b7+b1*c1+b2*c5
e[7]=a9*b4+b0*b8+b1*c2+b2*c6
e[11]=a9*b5+b0*b9+b1*c3+b2*c7
e[15]=a9*b6+b0*c0+b1*c4+b2*c8
v.i(0,"uPerspectiveViewMatrix",d)
return v}},
kQ:{"^":"b;"},
hH:{"^":"bC;d,e,f,r,x,y,z,Q,0ch,a,b,c",
ck:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){t=z[u]
x.i(0,t,J.cD(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){t=z[u]
x.i(0,t,J.cD(w.a,v,t))}},
cn:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.p([],[P.d])
x=H.p([],[P.d])
for(y=new H.am(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ad(0,w))C.a.l(x,w)}for(z=this.x,z=P.iW(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.am(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cy(s,0)){case 117:if(w.ad(0,s)){r=b.h(0,s)
if(v.ad(0,s))H.bU("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.ad().h(0,s)
if(q==null)H.V("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.K(r)
J.c_(x.a,p,r)}else if(!!J.z(r).$isfR)J.f1(x.a,p,r)
break
case"float":if(q.c===0){H.dW(r)
J.f_(x.a,p,r)}else if(!!J.z(r).$isaf)J.f0(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ah(r,"$isaD").a
J.cJ(x.a,p,!1,s)}else if(!!J.z(r).$isaf)J.cJ(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ah(r,"$iscb").a
J.cI(x.a,p,!1,s)}else if(!!J.z(r).$isaf)J.cI(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cH(o,p,H.ah(r,"$isbH").a)
else J.cH(o,p,H.f(r,"$isaf"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cG(o,p,H.ah(r,"$isB").a)
else J.cG(o,p,H.f(r,"$isaf"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cF(o,p,H.ah(r,"$isM").a)
else J.cF(o,p,H.f(r,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.a3(s)
J.cz(x.a,33984+s)
s=H.ah(r,"$isi2").cg()
J.cB(x.a,3553,s)
s=this.ch
J.c_(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.a3(s)
J.cz(x.a,33984+s)
s=H.ah(r,"$isi2").cg()
J.cB(x.a,34067,s)
s=this.ch
J.c_(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.bU("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aA(r,!0)
o=x.a
if(s)J.bt(o,2929)
else J.bY(o,2929)
break
case"cStencilFunc":H.ah(r,"$isdl")
s=r.a
o=x.a
if(s===1281)J.bY(o,2960)
else{J.bt(o,2960)
o=r.b
n=r.c
J.eX(x.a,s,o,n)}break
case"cDepthWrite":H.bN(r)
J.eG(x.a,r)
break
case"cBlendEquation":H.ah(r,"$isdk")
s=r.a
o=x.a
if(s===1281)J.bY(o,3042)
else{J.bt(o,3042)
o=r.b
n=r.c
J.eB(x.a,o,n)
J.eA(x.a,s)}break}++t
break}}m=P.fB(0,0,0,Date.now()-new P.bx(z,!1).a,0,0)
""+t
m.k(0)},
cd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bG],"$asa")
Date.now()
z=this.d
J.f2(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aV()}for(x=0;x<2;++x){w=b[x]
this.cq(w.a,w.aO())}y=this.Q
y.a1(0)
for(v=a.cy,v=new H.am(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cn()
if(u.length!==0)P.az("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bs(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cf()
s=a.Q
r=a.z
if(t)J.ez(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eK(q,y,v,s,0,r)
else J.eJ(q,y,v,s,0)}else{s=z.a
if(r>1)J.eI(s,y,0,v,r)
else J.eH(s,y,0,v)}if(t)J.eN(z.a)},
cc:function(a,b){return this.cd(a,b,null)},
p:{
hI:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a_(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eE(b.a)
t=G.dv(b.a,35633,x)
J.cA(b.a,u,t)
s=G.dv(b.a,35632,w)
J.cA(b.a,u,s)
if(v.length>0)J.eZ(b.a,u,v,35980)
J.eW(b.a,u)
if(!H.bN(J.eV(b.a,u,35714)))H.V(J.eU(b.a,u))
z=new G.hH(b,c,d,u,P.ca(c.c,z),P.a8(z,P.b),P.a8(z,z),y,a,!1,!0)
z.ck(a,b,c,d)
return z}}},
A:{"^":"b;a,b,c",
aN:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hP:{"^":"b;a,0b,c,d,e,f,r,x",
c7:function(a){var z,y,x,w
H.w(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.aI(z)},
aK:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.a4)(a),++x)C.a.l(y,a[x])
C.a.aI(y)},
cl:function(a,b){this.b=this.cr(!0,H.w(a,"$isa",[P.d],"$asa"),b)},
aP:function(a){return this.cl(a,null)},
cr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.p(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.a4)(y),++u){t=y[u]
s=$.ad().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.m(z,u)
q=z[u]
s=$.ad().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.ad().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.ad().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.H(w,b)
C.a.l(w,"}")
return C.a.a3(w,"\n")},
p:{
df:function(a){var z,y
z=P.d
y=[z]
return new G.hP(a,H.p([],y),H.p([],y),H.p([],y),H.p([],y),0,P.a8(z,P.C))}}},
hT:{"^":"bC;"}}],["","",,R,{"^":"",
iY:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iz("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).aj(y,"float")
y.setProperty(x,"left","")
x=C.x.aj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.F(z,v)}return z},
ht:{"^":"hs;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dq:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.az("size change "+H.e(y)+" "+H.e(x))
this.cb(y,x)
J.f5(this.go.a,0,0,y,x)},"$1","gdn",4,0,25]},
hV:{"^":"b;",
cm:function(a,b,c){var z,y
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
y=J.k(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
hW:{"^":"hV;e,f,a,b,c,d",
cp:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.dw(y,2)+" fps"
C.r.bW(this.c,b)
x=C.b.V(30*C.y.d4(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.r.F(z,w)},
co:function(a){return this.cp(a,"")}}}],["","",,X,{"^":"",
h1:function(a,b,c,d){var z,y,x,w
z=b.a2(d)
if(z===0)return
y=c.a8(0,a).a2(d)/z
x=new Float32Array(2)
w=new T.M(x)
w.G(b)
x[1]=x[1]*y
x[0]=x[0]*y
return a.C(0,w)},
fN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.M]
H.w(a,"$isa",z,"$asa")
y=H.p([],z)
x=a.length
for(w=0;w<x;w=u){v=w-1
if(v<0)v+=x
u=w+1
t=u>=x?u-x:u
z=a[v]
s=a[w]
if(t<0)return H.m(a,t)
r=a[t]
s.toString
q=new Float32Array(2)
p=new T.M(q)
o=s.a
q[1]=o[1]
q[0]=o[0]
p.a9(0,z)
r.toString
n=new Float32Array(2)
m=new T.M(n)
o=r.a
n[1]=o[1]
n[0]=o[0]
m.a9(0,s)
r=q[1]
q=q[0]
l=new Float32Array(2)
k=new T.M(l)
l[0]=r
l[1]=-q
k.X(0)
q=n[1]
n=n[0]
r=new Float32Array(2)
j=new T.M(r)
r[0]=q
r[1]=-n
j.X(0)
z.toString
r=new Float32Array(2)
i=new T.M(r)
h=z.a
r[1]=h[1]
r[0]=h[0]
i.l(0,k)
z=new Float32Array(2)
g=new T.M(z)
z[1]=o[1]
z[0]=o[0]
g.l(0,j)
f=X.h1(i,p,g,m)
f.toString
z=new Float32Array(2)
e=new T.M(z)
o=f.a
z[1]=o[1]
z[0]=o[0]
e.a9(0,s)
C.a.l(y,e)}return y},
fo:function(a,b,c){var z,y,x,w,v,u
z=new Array(a)
z.fixed$length=Array
y=H.p(z,[T.M])
for(x=0;x<a;++x){w=6.283185307179586*x/a
z=Math.cos(w)
v=Math.sin(w)
u=new Float32Array(2)
u[0]=b*z
u[1]=b*v
C.a.i(y,x,new T.M(u))}return y},
kR:[function(a){return 1-Math.cos(a*3.141592653589793/2)},"$1","ki",4,0,2],
kV:[function(a){return Math.sin(a*3.141592653589793/2)},"$1","km",4,0,2],
kT:[function(a){return a},"$1","kk",4,0,2],
kU:[function(a){return a*a},"$1","kl",4,0,2],
kS:[function(a){return a*a*a},"$1","kj",4,0,2],
fc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
z={func:1,ret:P.P,args:[P.P]}
H.j(e,z)
H.j(d,z)
if(typeof c!=="number")return H.a3(c)
z=new Array(c)
z.fixed$length=Array
y=H.p(z,[T.M])
for(z=c-1,x=-a,w=0;w<c;++w){v=w/z
u=e.$1(v)
if(typeof u!=="number")return H.a3(u)
t=d.$1(v)
if(typeof t!=="number")return H.a3(t)
s=new Float32Array(2)
s[0]=x*u
s[1]=b*t
C.a.i(y,w,new T.M(s))}return y},
fb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[T.M]
H.w(a,"$isa",z,"$asa")
H.w(b,"$isa",z,"$asa")
H.w(c,"$isa",z,"$asa")
y=H.p([],[[P.a,T.B]])
z=new Float32Array(3)
x=new T.B(z)
for(w=c.length,v=[T.B],u=0;u<w;++u){t=c[u]
s=a.length
r=new Array(s)
r.fixed$length=Array
q=H.p(r,v)
for(r=q.length,p=0;p<r;++p){if(p>=s)return H.m(a,p)
o=a[p].a[0]
if(p>=b.length)return H.m(b,p)
n=b[p].a[0]
m=t.a
z[0]=o+n*m[0]
z[1]=a[p].a[1]+b[p].a[1]*m[0]
z[2]=m[1]
C.a.i(q,p,H.f(d.R(0,x),"$isB"))}C.a.l(y,q)}return y}}],["","",,V,{}],["","",,D,{"^":"",fY:{"^":"b;a,b,c",
ci:function(a){var z,y
a=document
z=W.aT
y={func:1,ret:-1,args:[z]}
W.ax(a,"keydown",H.j(new D.h_(this),y),!1,z)
W.ax(a,"keyup",H.j(new D.h0(this),y),!1,z)},
p:{
fZ:function(a){var z=P.C
z=new D.fY(P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z))
z.ci(a)
return z}}},h_:{"^":"l:12;a",
$1:function(a){var z
H.f(a,"$isaT")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h0:{"^":"l:12;a",
$1:function(a){var z
H.f(a,"$isaT")
z=this.a
z.a.bA(0,a.which)
z.c.l(0,a.which)}},hd:{"^":"b;a,b,c,d,e,f,r,x",
cj:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbx(a)
x=H.o(y,0)
W.ax(y.a,y.b,H.j(new D.hf(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbw(a)
y=H.o(x,0)
W.ax(x.a,x.b,H.j(new D.hg(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gby(a)
x=H.o(y,0)
W.ax(y.a,y.b,H.j(new D.hh(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbz(a)
x=H.o(z,0)
W.ax(z.a,z.b,H.j(new D.hi(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
he:function(a){var z=P.C
z=new D.hd(P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z),0,0,0,0,0)
z.cj(a)
return z}}},hf:{"^":"l:4;a",
$1:function(a){var z,y
H.f(a,"$isS")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.K(y.gbv(a).a)
z.x=H.K(y.gbv(a).b)
z.d=a.movementX
z.e=a.movementY}},hg:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isS")
a.preventDefault()
P.az("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hh:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isS")
a.preventDefault()
z=this.a
z.a.bA(0,a.button)
z.c.l(0,a.button)}},hi:{"^":"l:26;a",
$1:function(a){H.f(a,"$isaF")
a.preventDefault()
this.a.f=H.K(C.ac.gdc(a))}},hq:{"^":"ff;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bp:function(a){var z,y
z=C.j.dg(H.w(a,"$isi",[P.b],"$asi"),0,new A.k7(),P.C)
if(typeof z!=="number")return H.a3(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k7:{"^":"l:27;",
$2:function(a,b){var z,y
H.K(a)
z=J.ai(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",cb:{"^":"b;a",
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.cb){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bp(this.a)},
N:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.m(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.m(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.m(y,x)
z[2]=y[x]
return new T.B(z)},
R:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=new T.B(new Float32Array(3))
z.G(b)
y=z.a
x=this.a
w=x[0]
v=y[0]
u=x[3]
t=y[1]
s=x[6]
r=y[2]
q=x[1]
p=x[4]
o=x[7]
n=x[2]
m=x[5]
x=x[8]
z.sJ(0,w*v+u*t+s*r)
z.sK(0,q*v+p*t+o*r)
z.saf(0,n*v+m*t+x*r)
return z}},aD:{"^":"b;a",
G:function(a){var z,y
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
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aD){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bp(this.a)},
N:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.m(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.m(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.m(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.m(y,x)
z[3]=y[x]
return new T.bH(z)},
a5:function(){var z=this.a
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
z[15]=1}},M:{"^":"b;a",
G:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.M){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bp(this.a)},
a8:function(a,b){var z=new T.M(new Float32Array(2))
z.G(this)
z.a9(0,b)
return z},
C:function(a,b){var z=new T.M(new Float32Array(2))
z.G(this)
z.l(0,b)
return z},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga4:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
X:function(a){var z,y,x
z=Math.sqrt(this.ga4())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
return z},
a2:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
l:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
a9:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
gJ:function(a){return this.a[0]},
gK:function(a){return this.a[1]}},B:{"^":"b;a",
a6:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
G:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bp(this.a)},
gj:function(a){return Math.sqrt(this.ga4())},
ga4:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
X:function(a){var z,y,x
z=Math.sqrt(this.ga4())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aw:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
a2:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.B(new Float32Array(3))
z.a6(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
sJ:function(a,b){this.a[0]=b
return b},
sK:function(a,b){this.a[1]=b
return b},
saf:function(a,b){this.a[2]=b
return b},
gJ:function(a){return this.a[0]},
gK:function(a){return this.a[1]},
p:{
ib:function(a,b,c){var z=new T.B(new Float32Array(3))
z.a6(a,b,c)
return z}}},bH:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bH){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bp(this.a)},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gJ:function(a){return this.a[0]},
gK:function(a){return this.a[1]}}}],["","",,N,{"^":"",
e2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=document
x=C.h.bU(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.hW(0,0,x,w,y.createElement("div"),R.iY("blue","gray",90,30))
u.cm(x,"blue","gray")
t=H.f(C.h.Y(y,"#webgl-canvas"),"$isc2")
s=new G.fi(t)
y=P.d
x=P.b
v=(t&&C.I).bT(t,"webgl2",P.c9(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.V(P.cY('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.eT(v))
if($.dX>0)P.az("I: "+r)
J.eC(v,0,0,0,1)
J.bt(v,2929)
v=new Float32Array(3)
r=D.fZ(null)
q=D.he(t)
p=new T.aD(new Float32Array(16))
p.a5()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hq(25,10,0,0,new T.B(v),-0.02,r,q,p,new T.B(o),new T.B(n),new T.B(m),new T.B(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aD(new Float32Array(16))
v.a5()
r=new T.aD(new Float32Array(16))
r.a5()
k=new R.ht(t,s,l,50,1,0.1,1000,v,r,new T.aD(new Float32Array(16)),P.a8(y,x),"perspective",!1,!0)
k.aQ()
k.dq(null)
v=W.Z
W.ax(window,"resize",H.j(k.gdn(),{func:1,ret:-1,args:[v]}),!1,v)
j=G.hI("basic",s,$.ev(),$.eu())
x=P.a8(y,x)
x.i(0,"cDepthTest",!0)
x.i(0,"cDepthWrite",!0)
x.i(0,"cBlendEquation",$.e7())
x.i(0,"cStencilFunc",$.ec())
x.i(0,"uColor",$.e8())
y=new T.aD(new Float32Array(16))
y.a5()
x.i(0,"uModelMatrix",y)
z.a=0
new N.kp(z,j,l,k,new G.h8(x,"wire",!1,!0),u).$1(0)},
kp:{"^":"l:28;a,b,c,d,e,f",
$1:function(c1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
H.cs(c1)
if(typeof c1!=="number")return c1.a8()
z=this.a
z.a=c1+0
y=this.b
x=$.et().valueAsNumber
if(typeof x!=="number")return x.C()
w=$.er().valueAsNumber
if(typeof w!=="number")return w.C()
v=$.eb()
u=v.h(0,$.ep().value)
t=v.h(0,$.eo().value)
s=X.fc(x+0,w+0,H.K($.es().valueAsNumber),t,u)
w=$.cx()
x=$.eq()
v=new Float32Array(9)
v[0]=1
v[1]=0
v[2]=0
v[3]=0
v[4]=1
v[5]=0
v[6]=0
v[7]=0
v[8]=1
r=X.fb(w,x,s,new T.cb(v))
v=H.p([],[G.fH])
x=H.p([],[G.cZ])
w=H.p([],[T.B])
q=P.d
p=new G.fL(!1,v,x,w,P.a8(q,[P.a,,]))
p.c9(r,!0)
x=y.d
v=y.e.x
o=P.a8(q,P.b)
n=J.eF(x.a)
m=new G.ha(x,n,1,o,v,0,-1,P.a8(q,P.af),"meshdata:",!1,!0)
w=G.d0(w,null)
o.i(0,"aPosition",J.bX(x.a))
m.ch=w
m.aM("aPosition",w,3)
l=$.ad().h(0,"aPosition")
if(l==null)H.V("Unknown canonical aPosition")
k=v.h(0,"aPosition")
J.bs(x.a,n)
x.bt(0,k,0)
x.bQ(0,o.h(0,"aPosition"),k,l.aN(),5126,!1,0,0)
w=H.w(p.ce(),"$isa",[P.C],"$asa")
m.y=J.bX(x.a)
v=m.ch.length
if(v<768){m.sao(new Uint8Array(H.bK(w)))
m.Q=5121}else if(v<196608){m.sao(new Uint16Array(H.bK(w)))
m.Q=5123}else{m.sao(new Uint32Array(H.bK(w)))
m.Q=5125}J.bs(x.a,n)
w=m.y
v=m.cx
J.bV(x.a,34963,w)
J.cC(x.a,34963,v,35048)
G.iP(p,m)
v=this.c
x=v.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=v.go
q=x.d
if(typeof q!=="number")return q.R()
v.go=w+q*0.01
q=v.id
w=x.e
if(typeof w!=="number")return w.R()
v.id=q+w*0.01}w=v.k4
q=w.a
if(q.u(0,37))v.go+=0.03
else if(q.u(0,39))v.go-=0.03
if(q.u(0,38))v.id+=0.03
else if(q.u(0,40))v.id-=0.03
if(q.u(0,33))v.fy*=0.99
else if(q.u(0,34))v.fy*=1.01
if(q.u(0,32)){v.go=0
v.id=0}q=x.f
if(typeof q!=="number")return q.R()
q=v.fy-q*v.k3
if(q>0)v.fy=q
q=C.t.d5(v.id,-1.4707963267948965,1.4707963267948965)
v.id=q
o=v.fy
n=v.go
j=o*Math.cos(q)
i=Math.cos(n)
q=Math.sin(q)
n=Math.sin(n)
h=v.d.a
h[12]=j*i
h[13]=o*q
h[14]=j*n
n=v.k2.a
h[12]=h[12]+n[0]
h[13]=h[13]+n[1]
h[14]=h[14]+n[2]
g=h[12]
f=h[13]
e=h[14]
d=new T.B(new Float32Array(3))
d.a6(0,1,0)
q=v.e
o=q.a
o[0]=h[12]
o[1]=h[13]
o[2]=h[14]
o=new Float32Array(3)
c=new T.B(o)
c.G(q)
o[0]=o[0]-n[0]
o[1]=o[1]-n[1]
o[2]=o[2]-n[2]
c.X(0)
b=d.a2(c)
b.X(0)
a=c.a2(b)
a.X(0)
n=b.aw(q)
i=a.aw(q)
q=c.aw(q)
a0=b.a
a1=a0[0]
a2=a.a
a3=a2[0]
a4=o[0]
a5=a0[1]
a6=a2[1]
a7=o[1]
a0=a0[2]
a2=a2[2]
o=o[2]
h[15]=1
h[14]=-q
h[13]=-i
h[12]=-n
h[11]=0
h[10]=o
h[9]=a2
h[8]=a0
h[7]=0
h[6]=a7
h[5]=a6
h[4]=a5
h[3]=0
h[2]=a4
h[1]=a3
h[0]=a1
h[12]=g
h[13]=f
h[14]=e
a1=v.f
a3=a1.a
a3[0]=h[2]
a3[1]=h[6]
a3[2]=h[10]
v=-v.k1
a8=Math.sqrt(a1.ga4())
g=a3[0]/a8
f=a3[1]/a8
e=a3[2]/a8
a9=Math.cos(v)
b0=Math.sin(v)
b1=1-a9
b2=g*g*b1+a9
v=e*b0
b3=g*f*b1-v
a3=f*b0
b4=g*e*b1+a3
b5=f*g*b1+v
b6=f*f*b1+a9
v=g*b0
b7=f*e*b1-v
b8=e*g*b1-a3
b9=e*f*b1+v
c0=e*e*b1+a9
v=h[0]
a3=h[4]
a1=h[8]
a4=h[1]
a5=h[5]
a6=h[9]
a7=h[2]
a0=h[6]
a2=h[10]
o=h[3]
n=h[7]
i=h[11]
h[0]=v*b2+a3*b5+a1*b8
h[1]=a4*b2+a5*b5+a6*b8
h[2]=a7*b2+a0*b5+a2*b8
h[3]=o*b2+n*b5+i*b8
h[4]=v*b3+a3*b6+a1*b9
h[5]=a4*b3+a5*b6+a6*b9
h[6]=a7*b3+a0*b6+a2*b9
h[7]=o*b3+n*b6+i*b9
h[8]=v*b4+a3*b7+a1*c0
h[9]=a4*b4+a5*b7+a6*c0
h[10]=a7*b4+a0*b7+a2*c0
h[11]=o*b4+n*b7+i*c0
w.c.a1(0)
w.b.a1(0)
x.e=0
x.d=0
x.f=0
x.c.a1(0)
x.b.a1(0)
y.cc(m,H.p([this.d,this.e],[G.bG]))
C.ad.gcX(window).bC(this,-1)
this.f.co(z.a)}}},1]]
setupProgram(dart,0,0)
J.z=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.d1.prototype}if(typeof a=="string")return J.bg.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.fW.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.b)return a
return J.bQ(a)}
J.b6=function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.b)return a
return J.bQ(a)}
J.dY=function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.b)return a
return J.bQ(a)}
J.k2=function(a){if(typeof a=="number")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.k3=function(a){if(typeof a=="number")return J.bf.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.dZ=function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.b)return a
return J.bQ(a)}
J.k4=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.aA=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.z(a).B(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k2(a).T(a,b)}
J.ew=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kh(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).h(a,b)}
J.cy=function(a,b){return J.dZ(a).ak(a,b)}
J.br=function(a,b){return J.k(a).cK(a,b)}
J.ex=function(a,b,c){return J.k(a).cL(a,b,c)}
J.cz=function(a,b){return J.k(a).b9(a,b)}
J.ey=function(a,b,c,d){return J.k(a).cU(a,b,c,d)}
J.cA=function(a,b,c){return J.k(a).bb(a,b,c)}
J.ez=function(a,b){return J.k(a).d_(a,b)}
J.bV=function(a,b,c){return J.k(a).bc(a,b,c)}
J.cB=function(a,b,c){return J.k(a).be(a,b,c)}
J.bs=function(a,b){return J.k(a).d2(a,b)}
J.eA=function(a,b){return J.k(a).bf(a,b)}
J.eB=function(a,b,c){return J.k(a).bg(a,b,c)}
J.cC=function(a,b,c,d){return J.k(a).bh(a,b,c,d)}
J.eC=function(a,b,c,d,e){return J.k(a).bi(a,b,c,d,e)}
J.eD=function(a,b){return J.k3(a).L(a,b)}
J.bW=function(a,b,c){return J.b6(a).d6(a,b,c)}
J.bX=function(a){return J.k(a).bk(a)}
J.eE=function(a){return J.k(a).bl(a)}
J.eF=function(a){return J.k(a).da(a)}
J.eG=function(a,b){return J.k(a).bn(a,b)}
J.bY=function(a,b){return J.k(a).bo(a,b)}
J.eH=function(a,b,c,d){return J.k(a).bp(a,b,c,d)}
J.eI=function(a,b,c,d,e){return J.k(a).dd(a,b,c,d,e)}
J.eJ=function(a,b,c,d,e){return J.k(a).bq(a,b,c,d,e)}
J.eK=function(a,b,c,d,e,f){return J.k(a).de(a,b,c,d,e,f)}
J.eL=function(a,b){return J.dY(a).q(a,b)}
J.bt=function(a,b){return J.k(a).br(a,b)}
J.eM=function(a,b){return J.k(a).bs(a,b)}
J.eN=function(a){return J.k(a).df(a)}
J.eO=function(a,b){return J.k(a).D(a,b)}
J.eP=function(a){return J.k(a).gcY(a)}
J.ai=function(a){return J.z(a).gv(a)}
J.bu=function(a){return J.dY(a).gw(a)}
J.aN=function(a){return J.b6(a).gj(a)}
J.eQ=function(a){return J.k(a).gdl(a)}
J.eR=function(a){return J.k(a).gdu(a)}
J.eS=function(a){return J.k4(a).gJ(a)}
J.bZ=function(a,b){return J.k(a).Z(a,b)}
J.eT=function(a){return J.k(a).ag(a)}
J.eU=function(a,b){return J.k(a).aA(a,b)}
J.eV=function(a,b,c){return J.k(a).aB(a,b,c)}
J.cD=function(a,b,c){return J.k(a).aF(a,b,c)}
J.eW=function(a,b){return J.k(a).bu(a,b)}
J.cE=function(a){return J.k(a).dm(a)}
J.eX=function(a,b,c,d){return J.k(a).aJ(a,b,c,d)}
J.eY=function(a){return J.dZ(a).dv(a)}
J.ba=function(a){return J.z(a).k(a)}
J.eZ=function(a,b,c,d){return J.k(a).dz(a,b,c,d)}
J.f_=function(a,b,c){return J.k(a).bF(a,b,c)}
J.f0=function(a,b,c){return J.k(a).bG(a,b,c)}
J.c_=function(a,b,c){return J.k(a).bH(a,b,c)}
J.f1=function(a,b,c){return J.k(a).bI(a,b,c)}
J.cF=function(a,b,c){return J.k(a).bJ(a,b,c)}
J.cG=function(a,b,c){return J.k(a).bK(a,b,c)}
J.cH=function(a,b,c){return J.k(a).bL(a,b,c)}
J.cI=function(a,b,c,d){return J.k(a).bM(a,b,c,d)}
J.cJ=function(a,b,c,d){return J.k(a).bN(a,b,c,d)}
J.f2=function(a,b){return J.k(a).bO(a,b)}
J.f3=function(a,b,c){return J.k(a).dA(a,b,c)}
J.f4=function(a,b,c,d,e,f,g){return J.k(a).bP(a,b,c,d,e,f,g)}
J.f5=function(a,b,c,d,e){return J.k(a).bR(a,b,c,d,e)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bv.prototype
C.I=W.c2.prototype
C.x=W.fq.prototype
C.r=W.fx.prototype
C.J=W.fz.prototype
C.K=W.fO.prototype
C.h=W.fP.prototype
C.L=J.h.prototype
C.a=J.be.prototype
C.y=J.d1.prototype
C.b=J.d2.prototype
C.n=J.d3.prototype
C.t=J.bf.prototype
C.i=J.bg.prototype
C.S=J.bh.prototype
C.j=H.hj.prototype
C.o=H.hl.prototype
C.W=W.hm.prototype
C.B=J.hu.prototype
C.C=W.hE.prototype
C.H=W.i1.prototype
C.w=J.b_.prototype
C.ac=W.aF.prototype
C.ad=W.ie.prototype
C.e=new P.j9()
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
C.T=H.p(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.p(I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.p(I.aK([]),[P.d])
C.u=H.p(I.aK(["bind","if","ref","repeat","syntax"]),[P.d])
C.v=H.p(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.X=new G.A("vec3","vertex btangents",0)
C.d=new G.A("vec3","",0)
C.Y=new G.A("vec4","delta from light",0)
C.p=new G.A("","",0)
C.D=new G.A("vec3","vertex coordinates",0)
C.Z=new G.A("vec3","vertex binormals",0)
C.E=new G.A("vec4","for wireframe",0)
C.a_=new G.A("vec4","per vertex color",0)
C.a0=new G.A("float","for normal maps",0)
C.k=new G.A("mat4","",0)
C.a2=new G.A("mat4","",4)
C.a1=new G.A("mat4","",128)
C.c=new G.A("float","",0)
C.a3=new G.A("float","",4)
C.a4=new G.A("float","depth for shadowmaps",0)
C.f=new G.A("sampler2D","",0)
C.a5=new G.A("float","for bump maps",0)
C.a6=new G.A("vec2","texture uvs",0)
C.a7=new G.A("float","time since program start in sec",0)
C.l=new G.A("vec2","",0)
C.a8=new G.A("samplerCube","",0)
C.m=new G.A("vec4","",0)
C.a9=new G.A("vec3","vertex normals",0)
C.aa=new G.A("sampler2DShadow","",0)
C.F=new G.A("vec3","per vertex color",0)
C.G=new G.A("mat3","",0)
C.ab=new G.A("vec3","vertex tangents",0)
$.a7=0
$.aO=null
$.cM=null
$.ci=!1
$.e0=null
$.dT=null
$.e5=null
$.bO=null
$.bR=null
$.cq=null
$.aH=null
$.b1=null
$.b2=null
$.cj=!1
$.H=C.e
$.ae=null
$.c4=null
$.cW=null
$.cV=null
$.cS=null
$.cR=null
$.cQ=null
$.cP=null
$.dX=0
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
I.$lazy(y,x,w)}})(["kK","ea",function(){return H.e_("_$dart_dartClosure")},"lr","cu",function(){return H.e_("_$dart_js")},"mb","ed",function(){return H.aa(H.bF({
toString:function(){return"$receiver$"}}))},"mc","ee",function(){return H.aa(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))},"md","ef",function(){return H.aa(H.bF(null))},"me","eg",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mh","ej",function(){return H.aa(H.bF(void 0))},"mi","ek",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mg","ei",function(){return H.aa(H.dm(null))},"mf","eh",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"mk","em",function(){return H.aa(H.dm(void 0))},"mj","el",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mu","cv",function(){return P.ii()},"mK","b9",function(){return[]},"kH","e9",function(){return{}},"mB","en",function(){return P.ca(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mC","cw",function(){return P.a8(P.d,P.bc)},"lZ","ec",function(){return new G.dl(1281,0,4294967295)},"kC","e7",function(){return new G.dk(1281,1281,1281)},"mI","ad",function(){return P.c9(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.F,"aColorAlpha",C.a_,"aPosition",C.D,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.E,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.F,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.D,"vPositionFromLight",C.Y,"vCenter",C.E,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a8,"uAnimationTable",C.f,"uTime",C.a7,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.c,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.d,G.A)},"kF","e8",function(){return T.ib(1,1,0)},"lt","eb",function(){return P.c9(["Cosine",X.ki(),"Sine",X.km(),"Quadratic",X.kl(),"Cubic",X.kj(),"Linear",X.kk()],P.d,{func:1,ret:P.P,args:[P.P]})},"mW","ev",function(){var z,y
z=G.df("SolidColor")
y=[P.d]
z.c7(H.p(["aPosition"],y))
z.aK(H.p(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aP(H.p(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"mV","eu",function(){var z,y
z=G.df("SolidColorF")
y=[P.d]
z.aK(H.p(["uColor"],y))
z.aP(H.p(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mT","et",function(){return H.f(C.h.Y(W.bn(),"#width"),"$isbA")},"mR","er",function(){return H.f(C.h.Y(W.bn(),"#height"),"$isbA")},"mS","es",function(){return H.f(C.h.Y(W.bn(),"#segments"),"$isbA")},"mP","ep",function(){return H.f(C.h.Y(W.bn(),"#easingWidth"),"$iscd")},"mO","eo",function(){return H.f(C.h.Y(W.bn(),"#easingHeight"),"$iscd")},"mN","cx",function(){return X.fo(20,10,!0)},"mQ","eq",function(){return X.fN($.cx())}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:P.P,args:[P.P]},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.S]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.C]},{func:1,ret:P.O,args:[W.a9]},{func:1,ret:P.O,args:[P.d]},{func:1,ret:P.F,args:[W.aT]},{func:1,ret:P.O,args:[W.Q,P.d,P.d,W.bk]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a0]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.O,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.Z]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:P.F,args:[W.aF]},{func:1,ret:P.C,args:[P.C,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.kv(d||a)
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
Isolate.b5=a.b5
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
if(typeof dartMainRunner==="function")dartMainRunner(N.e2,[])
else N.e2([])})})()
//# sourceMappingURL=extrude.dart.js.map
