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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b7=function(){}
var dart=[["","",,H,{"^":"",lc:{"^":"b;a"}}],["","",,J,{"^":"",
cu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cr==null){H.k1()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cf("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cw()]
if(v!=null)return v
v=H.k6(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.cw(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
h:{"^":"b;",
v:function(a,b){return a===b},
gt:function(a){return H.b0(a)},
j:["cf",function(a){return"Instance of '"+H.b1(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fP:{"^":"h;",
j:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isck:1},
fR:{"^":"h;",
v:function(a,b){return null==b},
j:function(a){return"null"},
gt:function(a){return 0},
$isz:1},
c7:{"^":"h;",
gt:function(a){return 0},
j:["cg",function(a){return String(a)}]},
ho:{"^":"c7;"},
b4:{"^":"c7;"},
bk:{"^":"c7;",
j:function(a){var z=a[$.e7()]
if(z==null)return this.cg(a)
return"JavaScript function for "+H.d(J.by(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc4:1},
bh:{"^":"h;$ti",
l:function(a,b){H.x(b,H.o(a,0))
if(!!a.fixed$length)H.X(P.A("add"))
a.push(b)},
bg:function(a,b){var z,y
H.v(b,"$isk",[H.o(a,0)],"$ask")
if(!!a.fixed$length)H.X(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.H)(b),++y)a.push(b[y])},
Y:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.d(a[y]))
return z.join(b)},
gdk:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.fN())},
cc:function(a,b){if(!!a.immutable$list)H.X(P.A("sort"))
H.hQ(a,J.jC(),H.o(a,0))},
aa:function(a){return this.cc(a,null)},
j:function(a){return P.c5(a,"[","]")},
gw:function(a){return new J.f3(a,a.length,0,[H.o(a,0)])},
gt:function(a){return H.b0(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.af(a,b))
return a[b]},
h:function(a,b,c){H.r(b)
H.x(c,H.o(a,0))
if(!!a.immutable$list)H.X(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.af(a,b))
if(b>=a.length||b<0)throw H.c(H.af(a,b))
a[b]=c},
$isu:1,
$asu:I.b7,
$isk:1,
$isa:1,
p:{
fO:function(a,b){return J.c6(H.m(a,[b]))},
c6:function(a){H.b8(a)
a.fixed$length=Array
return a},
la:[function(a,b){return J.ex(H.e0(a,"$isT"),H.e0(b,"$isT"))},"$2","jC",8,0,29]}},
lb:{"^":"bh;$ti"},
f3:{"^":"b;a,b,c,0d,$ti",
saU:function(a){this.d=H.x(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.H(z))
x=this.c
if(x>=y){this.saU(null)
return!1}this.saU(z[x]);++this.c
return!0}},
bi:{"^":"h;",
I:function(a,b){var z
H.cv(b)
if(typeof b!=="number")throw H.c(H.az(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gas(b)
if(this.gas(a)===z)return 0
if(this.gas(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gas:function(a){return a===0?1/a<0:a<0},
bV:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
d2:function(a,b,c){if(this.I(b,c)>0)throw H.c(H.az(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
ci:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bd(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.bd(a,b)},
bd:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.cU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cU:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.c(H.az(b))
return a>b},
$isT:1,
$asT:function(){return[P.G]},
$isa4:1,
$isG:1},
d0:{"^":"bi;",$isD:1},
fQ:{"^":"bi;"},
bj:{"^":"h;",
br:function(a,b){if(b<0)throw H.c(H.af(a,b))
if(b>=a.length)H.X(H.af(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(b>=a.length)throw H.c(H.af(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.y(b)
if(typeof b!=="string")throw H.c(P.cL(b,null,null))
return a+b},
cd:function(a,b){var z=H.m(a.split(b),[P.f])
return z},
aK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bD(b,null,null))
if(b>c)throw H.c(P.bD(b,null,null))
if(c>a.length)throw H.c(P.bD(c,null,null))
return a.substring(b,c)},
ce:function(a,b){return this.aK(a,b,null)},
dA:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.V(z,0)===133){x=J.fS(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.br(z,w)===133?J.fT(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
d5:function(a,b,c){if(c>a.length)throw H.c(P.hB(c,0,a.length,null,null))
return H.kf(a,b,c)},
I:function(a,b){var z
H.y(b)
if(typeof b!=="string")throw H.c(H.az(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gt:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.af(a,b))
return a[b]},
$isu:1,
$asu:I.b7,
$isT:1,
$asT:function(){return[P.f]},
$isda:1,
$isf:1,
p:{
d1:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fS:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.V(a,b)
if(y!==32&&y!==13&&!J.d1(y))break;++b}return b},
fT:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.br(a,z)
if(y!==32&&y!==13&&!J.d1(y))break}return b}}}}],["","",,H,{"^":"",
fN:function(){return new P.di("No element")},
hQ:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.D,args:[c,c]})
H.bn(a,0,J.bd(a)-1,b,c)},
bn:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.hP(a,b,c,d,e)
else H.hO(a,b,c,d,e)},
hP:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aO(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
hO:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.f.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.W(b+a0,2)
v=w-z
u=w+z
t=J.aO(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a7(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a7(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a7(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a7(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.S(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a_()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.O()
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
if(typeof e!=="number")return e.a_()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.O()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.O()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a_()
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
H.bn(a,b,m-2,a1,a2)
H.bn(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.S(a1.$2(t.i(a,m),r),0);)++m
for(;J.S(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a_()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bn(a,m,l,a1,a2)}else H.bn(a,m,l,a1,a2)},
fr:{"^":"k;"},
h3:{"^":"b;a,b,c,0d,$ti",
saV:function(a){this.d=H.x(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aO(z)
x=y.gk(z)
if(this.b!==x)throw H.c(P.aT(z))
w=this.c
if(w>=x){this.saV(null)
return!1}this.saV(y.q(z,w));++this.c
return!0}},
bB:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.y(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jW:function(a){return init.types[H.r(a)]},
k4:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isw},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.by(a)
if(typeof z!=="string")throw H.c(H.az(a))
return z},
b0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hy:function(a,b){var z,y
if(typeof a!=="string")H.X(H.az(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.y(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hx:function(a){var z,y
if(typeof a!=="string")H.X(H.az(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eU(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b1:function(a){return H.hp(a)+H.bK(H.aC(a),0,null)},
hp:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.E||!!z.$isb4){u=C.x(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.h.V(w,0)===36?C.h.ce(w,1):w)},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hw:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
hu:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
hq:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
hr:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
ht:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
hv:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
hs:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
aD:function(a){throw H.c(H.az(a))},
e:function(a,b){if(a==null)J.bd(a)
throw H.c(H.af(a,b))},
af:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.r(J.bd(a))
if(!(b<0)){if(typeof z!=="number")return H.aD(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bD(b,"index",null)},
az:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bC()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e3})
z.name=""}else z.toString=H.e3
return z},
e3:function(){return J.by(this.dartException)},
X:function(a){throw H.c(a)},
H:function(a){throw H.c(P.aT(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c9(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d9(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.e9()
u=$.ea()
t=$.eb()
s=$.ec()
r=$.ef()
q=$.eg()
p=$.ee()
$.ed()
o=$.ei()
n=$.eh()
m=v.H(y)
if(m!=null)return z.$1(H.c9(H.y(y),m))
else{m=u.H(y)
if(m!=null){m.method="call"
return z.$1(H.c9(H.y(y),m))}else{m=t.H(y)
if(m==null){m=s.H(y)
if(m==null){m=r.H(y)
if(m==null){m=q.H(y)
if(m==null){m=p.H(y)
if(m==null){m=s.H(y)
if(m==null){m=o.H(y)
if(m==null){m=n.H(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d9(H.y(y),m))}}return z.$1(new H.i3(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dh()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dh()
return a},
aP:function(a){var z
if(a==null)return new H.dH(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dH(a)},
jS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
k3:function(a,b,c,d,e,f){H.i(a,"$isc4")
switch(H.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cX("Unsupported number of arguments for wrapped closure"))},
aA:function(a,b){var z
H.r(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k3)
a.$identity=z
return z},
ff:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hD(z).r}else x=d
w=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.bY(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.C()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cP(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jW,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cN:H.bZ
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cP(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fc:function(a,b,c,d){var z=H.bZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fe(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fc(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.C()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aS
if(v==null){v=H.bz("self")
$.aS=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.C()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aS
if(v==null){v=H.bz("self")
$.aS=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fd:function(a,b,c,d){var z,y
z=H.bZ
y=H.cN
switch(b?-1:a){case 0:throw H.c(H.hJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fe:function(a,b){var z,y,x,w,v,u,t,s
z=$.aS
if(z==null){z=H.bz("self")
$.aS=z}y=$.cM
if(y==null){y=H.bz("receiver")
$.cM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fd(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a8
if(typeof y!=="number")return y.C()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.C()
$.a8=y+1
return new Function(z+y+"}")()},
cn:function(a,b,c,d,e,f,g){return H.ff(a,b,H.r(c),d,!!e,!!f,g)},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
dU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
cv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
cl:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
r:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
bR:function(a,b){throw H.c(H.a3(a,H.aE(H.y(b).substring(3))))},
kd:function(a,b){throw H.c(H.cO(a,H.aE(H.y(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.bR(a,b)},
ag:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kd(a,b)},
e0:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.bR(a,b)},
mA:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.B(a)[b])return a
H.bR(a,b)},
b8:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
k5:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.bR(a,b)},
co:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.r(z)]
else return a.$S()}return},
bq:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.co(J.B(a))
if(z==null)return!1
return H.dL(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.ch)return a
$.ch=!0
try{if(H.bq(a,b))return a
z=H.bt(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.ch=!1}},
aN:function(a,b){if(a!=null&&!H.cm(a,b))H.X(H.a3(a,H.bt(b)))
return a},
dP:function(a){var z,y
z=J.B(a)
if(!!z.$isl){y=H.co(z)
if(y!=null)return H.bt(y)
return"Closure"}return H.b1(a)},
kk:function(a){throw H.c(new P.fk(H.y(a)))},
dX:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
aC:function(a){if(a==null)return
return a.$ti},
mx:function(a,b,c){return H.b9(a["$as"+H.d(c)],H.aC(b))},
br:function(a,b,c,d){var z
H.y(c)
H.r(d)
z=H.b9(a["$as"+H.d(c)],H.aC(b))
return z==null?null:z[d]},
o:function(a,b){var z
H.r(b)
z=H.aC(a)
return z==null?null:z[b]},
bt:function(a){return H.ay(a,null)},
ay:function(a,b){var z,y
H.v(b,"$isa",[P.f],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bK(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.r(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.d(b[y])}if('func' in a)return H.jB(a,b)
if('futureOr' in a)return"FutureOr<"+H.ay("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.h.C(t,b[r])
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
for(z=H.jR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.y(z[l])
n=n+m+H.ay(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bK:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.f],"$asa")
if(a==null)return""
z=new P.cd("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ay(u,c)}return"<"+z.j(0)+">"},
jV:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isl){y=H.co(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aC(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ae:function(a,b,c,d){var z,y
H.y(b)
H.b8(c)
H.y(d)
if(a==null)return!1
z=H.aC(a)
y=J.B(a)
if(y[b]==null)return!1
return H.dS(H.b9(y[d],z),null,c,null)},
bu:function(a,b,c,d){H.y(b)
H.b8(c)
H.y(d)
if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.c(H.cO(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bK(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.y(b)
H.b8(c)
H.y(d)
if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bK(c,0,null),init.mangledGlobalNames)))},
dS:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
ms:function(a,b,c){return a.apply(b,H.b9(J.B(b)["$as"+H.d(c)],H.aC(b)))},
dZ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.dZ(z)}return!1},
cm:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.dZ(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bq(a,b)}z=J.B(a).constructor
y=H.aC(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a0(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.cm(a,b))throw H.c(H.a3(a,H.bt(b)))
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
if('func' in c)return H.dL(a,b,c,d)
if('func' in a)return c.builtin$cls==="c4"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"U" in y.prototype))return!1
w=y.prototype["$as"+"U"]
v=H.b9(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dS(H.b9(r,z),b,u,d)},
dL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kc(m,b,l,d)},
kc:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
mt:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
k6:function(a){var z,y,x,w,v,u
z=H.y($.dY.$1(a))
y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.y($.dR.$2(a,z))
if(z!=null){y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bQ(x)
$.bM[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bP[z]=x
return x}if(v==="-"){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e1(a,x)
if(v==="*")throw H.c(P.cf(z))
if(init.leafTags[z]===true){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e1(a,x)},
e1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cu(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bQ:function(a){return J.cu(a,!1,null,!!a.$isw)},
kb:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bQ(z)
else return J.cu(z,c,null,null)},
k1:function(){if(!0===$.cr)return
$.cr=!0
H.k2()},
k2:function(){var z,y,x,w,v,u,t,s
$.bM=Object.create(null)
$.bP=Object.create(null)
H.jY()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e2.$1(v)
if(u!=null){t=H.kb(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jY:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.aM(C.F,H.aM(C.K,H.aM(C.w,H.aM(C.w,H.aM(C.J,H.aM(C.G,H.aM(C.H(C.x),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dY=new H.jZ(v)
$.dR=new H.k_(u)
$.e2=new H.k0(t)},
aM:function(a,b){return a(b)||b},
kf:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
kh:function(a,b,c,d){var z=b.cL(a,d)
if(z==null)return a
return H.kj(a,z.b.index,z.gdc(z),c)},
kg:function(a,b,c){var z,y
z=b.gb8()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
ki:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.kh(a,b,c,d)},
kj:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hC:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c6(z)
y=z[0]
x=z[1]
return new H.hC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hZ:{"^":"b;a,b,c,d,e,f",
H:function(a){var z,y,x
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
a9:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.m([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dp:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hl:{"^":"M;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
d9:function(a,b){return new H.hl(a,b==null?null:b.method)}}},
fV:{"^":"M;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
c9:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fV(a,y,z?null:b.receiver)}}},
i3:{"^":"M;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kl:{"^":"l:5;a",
$1:function(a){if(!!J.B(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dH:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isO:1},
l:{"^":"b;",
j:function(a){return"Closure '"+H.b1(this).trim()+"'"},
gc9:function(){return this},
$isc4:1,
gc9:function(){return this}},
dk:{"^":"l;"},
hR:{"^":"dk;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
bY:{"^":"dk;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.b0(this.a)
else y=typeof z!=="object"?J.ah(z):H.b0(z)
return(y^H.b0(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b1(z)+"'")},
p:{
bZ:function(a){return a.a},
cN:function(a){return a.c},
bz:function(a){var z,y,x,w,v
z=new H.bY("self","target","receiver","name")
y=J.c6(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i_:{"^":"M;a",
j:function(a){return this.a},
p:{
a3:function(a,b){return new H.i_("TypeError: "+P.bA(a)+": type '"+H.dP(a)+"' is not a subtype of type '"+b+"'")}}},
fa:{"^":"M;a",
j:function(a){return this.a},
p:{
cO:function(a,b){return new H.fa("CastError: "+P.bA(a)+": type '"+H.dP(a)+"' is not a subtype of type '"+b+"'")}}},
hI:{"^":"M;a",
j:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
hJ:function(a){return new H.hI(a)}}},
dq:{"^":"b;a,0b,0c,0d",
ga3:function(){var z=this.b
if(z==null){z=H.bt(this.a)
this.b=z}return z},
j:function(a){return this.ga3()},
gt:function(a){var z=this.d
if(z==null){z=C.h.gt(this.ga3())
this.d=z}return z},
v:function(a,b){if(b==null)return!1
return b instanceof H.dq&&this.ga3()===b.ga3()}},
c8:{"^":"h6;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gM:function(a){return new H.al(this,[H.o(this,0)])},
a5:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cI(z,b)}else{y=this.di(b)
return y}},
di:function(a){var z=this.d
if(z==null)return!1
return this.ar(this.ak(z,J.ah(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a0(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a0(w,b)
x=y==null?null:y.b
return x}else return this.dj(b)},
dj:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ak(z,J.ah(a)&0x3ffffff)
x=this.ar(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.al()
this.b=z}this.aX(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.al()
this.c=y}this.aX(y,b,c)}else{x=this.d
if(x==null){x=this.al()
this.d=x}w=J.ah(b)&0x3ffffff
v=this.ak(x,w)
if(v==null)this.an(x,w,[this.am(b,c)])
else{u=this.ar(v,b)
if(u>=0)v[u].b=c
else v.push(this.am(b,c))}}},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aT(this))
z=z.c}},
aX:function(a,b,c){var z
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
z=this.a0(a,b)
if(z==null)this.an(a,b,this.am(b,c))
else z.b=c},
b7:function(){this.r=this.r+1&67108863},
am:function(a,b){var z,y
z=new H.h_(H.x(a,H.o(this,0)),H.x(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b7()
return z},
ar:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
j:function(a){return P.d5(this)},
a0:function(a,b){return a[b]},
ak:function(a,b){return a[b]},
an:function(a,b,c){a[b]=c},
cJ:function(a,b){delete a[b]},
cI:function(a,b){return this.a0(a,b)!=null},
al:function(){var z=Object.create(null)
this.an(z,"<non-identifier-key>",z)
this.cJ(z,"<non-identifier-key>")
return z},
$isd3:1},
h_:{"^":"b;a,b,0c,0d"},
al:{"^":"fr;a,$ti",
gk:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.h0(z,z.r,this.$ti)
y.c=z.e
return y}},
h0:{"^":"b;a,b,0c,0d,$ti",
saW:function(a){this.d=H.x(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aT(z))
else{z=this.c
if(z==null){this.saW(null)
return!1}else{this.saW(z.a)
this.c=this.c.c
return!0}}}},
jZ:{"^":"l:5;a",
$1:function(a){return this.a(a)}},
k_:{"^":"l:11;a",
$2:function(a,b){return this.a(a,b)}},
k0:{"^":"l:12;a",
$1:function(a){return this.a(H.y(a))}},
fU:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gb8:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.d2(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cL:function(a,b){var z,y
z=this.gb8()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.iS(this,y)},
$isda:1,
p:{
d2:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.c3("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
iS:{"^":"b;a,b",
gdc:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.e(z,b)
return z[b]}}}],["","",,H,{"^":"",
jR:function(a){return J.fO(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bJ:function(a){var z,y
if(!!J.B(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.af(b,a))},
hj:{"^":"h;",$isi0:1,"%":"DataView;ArrayBufferView;ca|dB|dC|d8|dD|dE|ap"},
ca:{"^":"hj;",
gk:function(a){return a.length},
$isu:1,
$asu:I.b7,
$isw:1,
$asw:I.b7},
d8:{"^":"dC;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
h:function(a,b,c){H.r(b)
H.dU(c)
H.ab(b,a,a.length)
a[b]=c},
$asbB:function(){return[P.a4]},
$asp:function(){return[P.a4]},
$isk:1,
$ask:function(){return[P.a4]},
$isa:1,
$asa:function(){return[P.a4]},
"%":"Float64Array"},
ap:{"^":"dE;",
h:function(a,b,c){H.r(b)
H.r(c)
H.ab(b,a,a.length)
a[b]=c},
$asbB:function(){return[P.D]},
$asp:function(){return[P.D]},
$isk:1,
$ask:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hi:{"^":"d8;",$isac:1,"%":"Float32Array"},
ll:{"^":"ap;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lm:{"^":"ap;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isfL:1,
"%":"Int32Array"},
ln:{"^":"ap;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lo:{"^":"ap;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hk:{"^":"ap;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ism6:1,
"%":"Uint32Array"},
lp:{"^":"ap;",
gk:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lq:{"^":"ap;",
gk:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dB:{"^":"ca+p;"},
dC:{"^":"dB+bB;"},
dD:{"^":"ca+p;"},
dE:{"^":"dD+bB;"}}],["","",,P,{"^":"",
id:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jJ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aA(new P.ig(z),1)).observe(y,{childList:true})
return new P.ie(z,y,x)}else if(self.setImmediate!=null)return P.jK()
return P.jL()},
mg:[function(a){self.scheduleImmediate(H.aA(new P.ih(H.j(a,{func:1,ret:-1})),0))},"$1","jJ",4,0,4],
mh:[function(a){self.setImmediate(H.aA(new P.ii(H.j(a,{func:1,ret:-1})),0))},"$1","jK",4,0,4],
mi:[function(a){H.j(a,{func:1,ret:-1})
P.jj(0,a)},"$1","jL",4,0,4],
fA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.v(a,"$isk",[[P.U,d]],"$ask")
s=[[P.a,d]]
y=new P.N(0,$.C,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fC(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.H)(r),++p){w=r[p]
v=o
w.av(new P.fB(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.N(0,$.C,s)
r.aZ(C.M)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.m(r,[d])}catch(n){u=H.aR(n)
t=H.aP(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bC()
r=$.C
if(r!==C.e)r.toString
s=new P.N(0,r,s)
s.b_(m,t)
return s}else{z.c=u
z.d=t}}return y},
jF:function(a,b){if(H.bq(a,{func:1,args:[P.b,P.O]}))return H.j(a,{func:1,ret:null,args:[P.b,P.O]})
if(H.bq(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cL(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jE:function(){var z,y
for(;z=$.aK,z!=null;){$.b6=null
y=z.b
$.aK=y
if(y==null)$.b5=null
z.a.$0()}},
mq:[function(){$.ci=!0
try{P.jE()}finally{$.b6=null
$.ci=!1
if($.aK!=null)$.cx().$1(P.dT())}},"$0","dT",0,0,1],
dO:function(a){var z=new P.dt(H.j(a,{func:1,ret:-1}))
if($.aK==null){$.b5=z
$.aK=z
if(!$.ci)$.cx().$1(P.dT())}else{$.b5.b=z
$.b5=z}},
jI:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aK
if(z==null){P.dO(a)
$.b6=$.b5
return}y=new P.dt(a)
x=$.b6
if(x==null){y.b=z
$.b6=y
$.aK=y}else{y.b=x.b
x.b=y
$.b6=y
if(y.b==null)$.b5=y}},
ke:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.C
if(C.e===y){P.aL(null,null,C.e,a)
return}y.toString
P.aL(null,null,y,H.j(y.bj(a),z))},
bL:function(a,b,c,d,e){var z={}
z.a=d
P.jI(new P.jG(z,e))},
dM:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
dN:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
jH:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
aL:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bj(d):c.d_(d,-1)
P.dO(d)},
ig:{"^":"l:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ie:{"^":"l:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ih:{"^":"l:0;a",
$0:function(){this.a.$0()}},
ii:{"^":"l:0;a",
$0:function(){this.a.$0()}},
ji:{"^":"b;a,0b,c",
cC:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aA(new P.jk(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
jj:function(a,b){var z=new P.ji(!0,0)
z.cC(a,b)
return z}}},
jk:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
U:{"^":"b;$ti"},
fC:{"^":"l:14;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isO")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.F(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.F(z.c,z.d)}},
fB:{"^":"l;a,b,c,d,e,f",
$1:function(a){var z,y
H.x(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.b2(z.a)}else if(z.b===0&&!this.e)this.c.F(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dw:{"^":"b;$ti",
d4:function(a,b){if(a==null)a=new P.bC()
if(this.a.a!==0)throw H.c(P.cc("Future already completed"))
$.C.toString
this.F(a,b)},
d3:function(a){return this.d4(a,null)}},
du:{"^":"dw;a,$ti",
bt:function(a,b){var z
H.aN(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.cc("Future already completed"))
z.aZ(b)},
F:function(a,b){this.a.b_(a,b)}},
jf:{"^":"dw;a,$ti",
F:function(a,b){this.a.F(a,b)}},
aI:{"^":"b;0a,b,c,d,e,$ti",
dm:function(a){if(this.c!==6)return!0
return this.b.b.at(H.j(this.d,{func:1,ret:P.ck,args:[P.b]}),a.a,P.ck,P.b)},
dh:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bq(z,{func:1,args:[P.b,P.O]}))return H.aN(w.du(z,a.a,a.b,null,y,P.O),x)
else return H.aN(w.at(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
N:{"^":"b;bc:a<,b,0cT:c<,$ti",
av:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jF(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.N(0,$.C,[c])
w=b==null?1:3
this.aY(new P.aI(x,w,a,b,[z,c]))
return x},
a7:function(a,b){return this.av(a,null,b)},
aY:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.i(this.c,"$isN")
z=y.a
if(z<4){y.aY(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aL(null,null,z,H.j(new P.ix(this,a),{func:1,ret:-1}))}},
b9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isN")
y=u.a
if(y<4){u.b9(a)
return}this.a=y
this.c=u.c}z.a=this.a2(a)
y=this.b
y.toString
P.aL(null,null,y,H.j(new P.iE(z,this),{func:1,ret:-1}))}},
a1:function(){var z=H.i(this.c,"$isaI")
this.c=null
return this.a2(z)},
a2:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
af:function(a){var z,y,x
z=H.o(this,0)
H.aN(a,{futureOr:1,type:z})
y=this.$ti
if(H.ae(a,"$isU",y,"$asU"))if(H.ae(a,"$isN",y,null))P.bH(a,this)
else P.dx(a,this)
else{x=this.a1()
H.x(a,z)
this.a=4
this.c=a
P.aJ(this,x)}},
b2:function(a){var z
H.x(a,H.o(this,0))
z=this.a1()
this.a=4
this.c=a
P.aJ(this,z)},
F:function(a,b){var z
H.i(b,"$isO")
z=this.a1()
this.a=8
this.c=new P.Y(a,b)
P.aJ(this,z)},
aZ:function(a){var z
H.aN(a,{futureOr:1,type:H.o(this,0)})
if(H.ae(a,"$isU",this.$ti,"$asU")){this.cG(a)
return}this.a=1
z=this.b
z.toString
P.aL(null,null,z,H.j(new P.iz(this,a),{func:1,ret:-1}))},
cG:function(a){var z=this.$ti
H.v(a,"$isU",z,"$asU")
if(H.ae(a,"$isN",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aL(null,null,z,H.j(new P.iD(this,a),{func:1,ret:-1}))}else P.bH(a,this)
return}P.dx(a,this)},
b_:function(a,b){var z
H.i(b,"$isO")
this.a=1
z=this.b
z.toString
P.aL(null,null,z,H.j(new P.iy(this,a,b),{func:1,ret:-1}))},
$isU:1,
p:{
dx:function(a,b){var z,y,x
b.a=1
try{a.av(new P.iA(b),new P.iB(b),null)}catch(x){z=H.aR(x)
y=H.aP(x)
P.ke(new P.iC(b,z,y))}},
bH:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isN")
if(z>=4){y=b.a1()
b.a=a.a
b.c=a.c
P.aJ(b,y)}else{y=H.i(b.c,"$isaI")
b.a=2
b.c=a
a.b9(y)}},
aJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isY")
y=y.b
u=v.a
t=v.b
y.toString
P.bL(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aJ(z.a,b)}y=z.a
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
if(p){H.i(r,"$isY")
y=y.b
u=r.a
t=r.b
y.toString
P.bL(null,null,y,u,t)
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.iH(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iG(x,b,r).$0()}else if((y&2)!==0)new P.iF(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.B(y).$isU){if(y.a>=4){n=H.i(t.c,"$isaI")
t.c=null
b=t.a2(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bH(y,t)
return}}m=b.b
n=H.i(m.c,"$isaI")
m.c=null
b=m.a2(n)
y=x.a
u=x.b
if(!y){H.x(u,H.o(m,0))
m.a=4
m.c=u}else{H.i(u,"$isY")
m.a=8
m.c=u}z.a=m
y=m}}}},
ix:{"^":"l:0;a,b",
$0:function(){P.aJ(this.a,this.b)}},
iE:{"^":"l:0;a,b",
$0:function(){P.aJ(this.b,this.a.a)}},
iA:{"^":"l:6;a",
$1:function(a){var z=this.a
z.a=0
z.af(a)}},
iB:{"^":"l:15;a",
$2:function(a,b){H.i(b,"$isO")
this.a.F(a,b)},
$1:function(a){return this.$2(a,null)}},
iC:{"^":"l:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
iz:{"^":"l:0;a,b",
$0:function(){var z=this.a
z.b2(H.x(this.b,H.o(z,0)))}},
iD:{"^":"l:0;a,b",
$0:function(){P.bH(this.b,this.a)}},
iy:{"^":"l:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
iH:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.j(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.aP(v)
if(this.d){w=H.i(this.a.a.c,"$isY").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isY")
else u.b=new P.Y(y,x)
u.a=!0
return}if(!!J.B(z).$isU){if(z instanceof P.N&&z.gbc()>=4){if(z.gbc()===8){w=this.b
w.b=H.i(z.gcT(),"$isY")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a7(new P.iI(t),null)
w.a=!1}}},
iI:{"^":"l:16;a",
$1:function(a){return this.a}},
iG:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.x(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.at(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.aP(t)
x=this.a
x.b=new P.Y(z,y)
x.a=!0}}},
iF:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isY")
w=this.c
if(w.dm(z)&&w.e!=null){v=this.b
v.b=w.dh(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.aP(u)
w=H.i(this.a.a.c,"$isY")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Y(y,x)
s.a=!0}}},
dt:{"^":"b;a,0b"},
hT:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.N(0,$.C,[P.D])
z.a=0
x=H.o(this,0)
w=H.j(new P.hV(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.hW(z,y),{func:1,ret:-1})
W.ad(this.a,this.b,w,!1,x)
return y}},
hV:{"^":"l;a,b",
$1:function(a){H.x(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
hW:{"^":"l:0;a,b",
$0:function(){this.b.af(this.a.a)}},
hU:{"^":"b;"},
Y:{"^":"b;a,b",
j:function(a){return H.d(this.a)},
$isM:1},
jp:{"^":"b;",$isme:1},
jG:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bC()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.j(0)
throw x}},
j3:{"^":"jp;",
dv:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.C){a.$0()
return}P.dM(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.aP(x)
P.bL(null,null,this,z,H.i(y,"$isO"))}},
dw:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.e===$.C){a.$1(b)
return}P.dN(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.aP(x)
P.bL(null,null,this,z,H.i(y,"$isO"))}},
d_:function(a,b){return new P.j5(this,H.j(a,{func:1,ret:b}),b)},
bj:function(a){return new P.j4(this,H.j(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.j6(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bS:function(a,b){H.j(a,{func:1,ret:b})
if($.C===C.e)return a.$0()
return P.dM(null,null,this,a,b)},
at:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.C===C.e)return a.$1(b)
return P.dN(null,null,this,a,b,c,d)},
du:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.C===C.e)return a.$2(b,c)
return P.jH(null,null,this,a,b,c,d,e,f)}},
j5:{"^":"l;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j4:{"^":"l:1;a,b",
$0:function(){return this.a.dv(this.b)}},
j6:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dw(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d4:function(a,b,c){H.b8(a)
return H.v(H.jS(a,new H.c8(0,0,[b,c])),"$isd3",[b,c],"$asd3")},
a_:function(a,b){return new H.c8(0,0,[a,b])},
h1:function(){return new H.c8(0,0,[null,null])},
am:function(a,b,c,d){return new P.iQ(0,0,[d])},
fM:function(a,b,c){var z,y
if(P.cj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.f])
y=$.ba()
C.a.l(y,a)
try{P.jD(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.dj(b,H.k5(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
c5:function(a,b,c){var z,y,x
if(P.cj(a))return b+"..."+c
z=new P.cd(b)
y=$.ba()
C.a.l(y,a)
try{x=z
x.a=P.dj(x.gP(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
cj:function(a){var z,y
for(z=0;y=$.ba(),z<y.length;++z)if(a===y[z])return!0
return!1},
jD:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.f],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gB(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.u();t=s,s=r){r=z.gB(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
h2:function(a,b){var z,y,x
z=P.am(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.H)(a),++x)z.l(0,H.x(a[x],b))
return z},
d5:function(a){var z,y,x
z={}
if(P.cj(a))return"{...}"
y=new P.cd("")
try{C.a.l($.ba(),a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.eI(a,new P.h7(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.ba()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
iQ:{"^":"iK;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){return P.dA(this,this.r,H.o(this,0))},
gk:function(a){return this.a},
G:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbp")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbp")!=null}else return this.cH(b)},
cH:function(a){var z=this.d
if(z==null)return!1
return this.aj(this.b5(z,a),a)>=0},
l:function(a,b){var z,y
H.x(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cg()
this.b=z}return this.b0(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cg()
this.c=y}return this.b0(y,b)}else return this.cD(0,b)},
cD:function(a,b){var z,y,x
H.x(b,H.o(this,0))
z=this.d
if(z==null){z=P.cg()
this.d=z}y=this.b3(b)
x=z[y]
if(x==null)z[y]=[this.ae(b)]
else{if(this.aj(x,b)>=0)return!1
x.push(this.ae(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ba(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ba(this.c,b)
else return this.cR(0,b)},
cR:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b5(z,b)
x=this.aj(y,b)
if(x<0)return!1
this.be(y.splice(x,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ad()}},
b0:function(a,b){H.x(b,H.o(this,0))
if(H.i(a[b],"$isbp")!=null)return!1
a[b]=this.ae(b)
return!0},
ba:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbp")
if(z==null)return!1
this.be(z)
delete a[b]
return!0},
ad:function(){this.r=this.r+1&67108863},
ae:function(a){var z,y
z=new P.bp(H.x(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ad()
return z},
be:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ad()},
b3:function(a){return J.ah(a)&0x3ffffff},
b5:function(a,b){return a[this.b3(b)]},
aj:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
p:{
cg:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bp:{"^":"b;a,0b,0c"},
iR:{"^":"b;a,b,0c,0d,$ti",
sb1:function(a){this.d=H.x(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aT(z))
else{z=this.c
if(z==null){this.sb1(null)
return!1}else{this.sb1(H.x(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
p:{
dA:function(a,b,c){var z=new P.iR(a,b,[c])
z.c=a.e
return z}}},
iK:{"^":"hK;"},
p:{"^":"b;$ti",
gw:function(a){return new H.h3(a,this.gk(a),0,[H.br(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
df:function(a,b,c,d){var z,y,x
H.x(b,d)
H.j(c,{func:1,ret:d,args:[d,H.br(this,a,"p",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.c(P.aT(a))}return y},
j:function(a){return P.c5(a,"[","]")}},
h6:{"^":"V;"},
h7:{"^":"l:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
V:{"^":"b;$ti",
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.br(this,a,"V",0),H.br(this,a,"V",1)]})
for(z=J.cC(this.gM(a));z.u();){y=z.gB(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.bd(this.gM(a))},
j:function(a){return P.d5(a)},
$isL:1},
hL:{"^":"b;$ti",
j:function(a){return P.c5(this,"{","}")},
$isk:1,
$islI:1},
hK:{"^":"hL;"}}],["","",,P,{"^":"",
cs:function(a,b,c){var z
H.y(a)
z=H.hy(a,c)
if(z!=null)return z
throw H.c(P.c3(a,null,null))},
aB:function(a,b){var z
H.y(a)
z=H.hx(a)
if(z!=null)return z
throw H.c(P.c3("Invalid double",a,null))},
fs:function(a){if(a instanceof H.l)return a.j(0)
return"Instance of '"+H.b1(a)+"'"},
de:function(a,b,c){return new H.fU(a,H.d2(a,!1,!0,!1))},
bA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.by(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fs(a)},
cX:function(a){return new P.iu(a)},
a5:function(a){H.aQ(H.d(a))},
ck:{"^":"b;"},
"+bool":0,
aU:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a&&this.b===b.b},
I:function(a,b){return C.f.I(this.a,H.i(b,"$isaU").a)},
gt:function(a){var z=this.a
return(z^C.f.bb(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fl(H.hw(this))
y=P.be(H.hu(this))
x=P.be(H.hq(this))
w=P.be(H.hr(this))
v=P.be(H.ht(this))
u=P.be(H.hv(this))
t=P.fm(H.hs(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isT:1,
$asT:function(){return[P.aU]},
p:{
fl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
be:function(a){if(a>=10)return""+a
return"0"+a}}},
a4:{"^":"G;"},
"+double":0,
aV:{"^":"b;a",
O:function(a,b){return C.f.O(this.a,H.i(b,"$isaV").a)},
v:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
I:function(a,b){return C.f.I(this.a,H.i(b,"$isaV").a)},
j:function(a){var z,y,x,w,v
z=new P.fq()
y=this.a
if(y<0)return"-"+new P.aV(0-y).j(0)
x=z.$1(C.f.W(y,6e7)%60)
w=z.$1(C.f.W(y,1e6)%60)
v=new P.fp().$1(y%1e6)
return""+C.f.W(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isT:1,
$asT:function(){return[P.aV]},
p:{
cV:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fp:{"^":"l:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fq:{"^":"l:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"b;"},
bC:{"^":"M;",
j:function(a){return"Throw of null."}},
aF:{"^":"M;a,b,c,d",
gah:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gag:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gah()+y+x
if(!this.a)return w
v=this.gag()
u=P.bA(this.b)
return w+v+": "+u},
p:{
f2:function(a){return new P.aF(!1,null,null,a)},
cL:function(a,b,c){return new P.aF(!0,a,b,c)}}},
dd:{"^":"aF;e,f,a,b,c,d",
gah:function(){return"RangeError"},
gag:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bD:function(a,b,c){return new P.dd(null,null,!0,a,b,"Value not in range")},
hB:function(a,b,c,d,e){return new P.dd(b,c,!0,a,d,"Invalid value")}}},
fK:{"^":"aF;e,k:f>,a,b,c,d",
gah:function(){return"RangeError"},
gag:function(){var z,y
z=H.r(this.b)
if(typeof z!=="number")return z.a_()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
I:function(a,b,c,d,e){var z=H.r(e==null?J.bd(b):e)
return new P.fK(b,z,!0,a,c,"Index out of range")}}},
i4:{"^":"M;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.i4(a)}}},
i2:{"^":"M;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cf:function(a){return new P.i2(a)}}},
di:{"^":"M;a",
j:function(a){return"Bad state: "+this.a},
p:{
cc:function(a){return new P.di(a)}}},
fg:{"^":"M;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bA(z)+"."},
p:{
aT:function(a){return new P.fg(a)}}},
dh:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isM:1},
fk:{"^":"M;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iu:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
fx:{"^":"b;a,b,c",
j:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.d(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aK(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
c3:function(a,b,c){return new P.fx(a,b,c)}}},
D:{"^":"G;"},
"+int":0,
k:{"^":"b;$ti",
gk:function(a){var z,y
z=this.gw(this)
for(y=0;z.u();)++y
return y},
j:function(a){return P.fM(this,"(",")")}},
a:{"^":"b;$ti",$isk:1},
"+List":0,
L:{"^":"b;$ti"},
z:{"^":"b;",
gt:function(a){return P.b.prototype.gt.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isT:1,
$asT:function(){return[P.G]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gt:function(a){return H.b0(this)},
j:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.j(this)}},
O:{"^":"b;"},
f:{"^":"b;",$isT:1,
$asT:function(){return[P.f]},
$isda:1},
"+String":0,
cd:{"^":"b;P:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dj:function(a,b,c){var z=J.cC(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gB(z))
while(z.u())}else{a+=H.d(z.gB(z))
for(;z.u();)a=a+c+H.d(z.gB(z))}return a}}}}],["","",,W,{"^":"",
cW:function(a){H.i(a,"$isK")
return"wheel"},
bI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dz:function(a,b,c,d){var z,y
z=W.bI(W.bI(W.bI(W.bI(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dK:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.im(a)
if(!!J.B(z).$isK)return z
return}else return H.i(a,"$isK")},
jA:function(a){var z
if(!!J.B(a).$isc2)return a
z=new P.ia([],[],!1)
z.c=!0
return z.aw(a)},
dQ:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.e)return a
return z.d0(a,b)},
a2:{"^":"bf;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
km:{"^":"h;0k:length=","%":"AccessibleNodeList"},
kn:{"^":"a2;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ko:{"^":"a2;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
f6:{"^":"h;","%":";Blob"},
c_:{"^":"a2;0n:height=,0m:width=",
ax:function(a,b,c){if(c!=null)return this.cM(a,b,P.jM(c,null))
return this.cN(a,b)},
ca:function(a,b){return this.ax(a,b,null)},
cM:function(a,b,c){return a.getContext(b,c)},
cN:function(a,b){return a.getContext(b)},
$isc_:1,
"%":"HTMLCanvasElement"},
f9:{"^":"h;",
a4:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
c0:{"^":"h;",
bw:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
de:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
a9:function(a){return P.a1(a.getContextAttributes())},
$isc0:1,
"%":"CanvasRenderingContext2D"},
ku:{"^":"F;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fh:{"^":"c1;",$isfh:1,"%":"CSSNumericValue|CSSUnitValue"},
kv:{"^":"fj;0k:length=","%":"CSSPerspective"},
ai:{"^":"h;",$isai:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kw:{"^":"ik;0k:length=",
aB:function(a,b){var z=this.cO(a,this.cF(a,b))
return z==null?"":z},
cF:function(a,b){var z,y
z=$.e6()
y=z[b]
if(typeof y==="string")return y
y=this.cV(a,b)
z[b]=y
return y},
cV:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fn()+b
if(z in a)return z
return b},
cO:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fi:{"^":"b;",
gn:function(a){return this.aB(a,"height")},
gm:function(a){return this.aB(a,"width")}},
c1:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fj:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ky:{"^":"c1;0k:length=","%":"CSSTransformValue"},
kz:{"^":"c1;0k:length=","%":"CSSUnparsedValue"},
kB:{"^":"h;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
c2:{"^":"F;",
dr:function(a,b){return a.querySelector(b)},
gbM:function(a){return new W.bo(a,"mousedown",!1,[W.P])},
gbN:function(a){return new W.bo(a,"mousemove",!1,[W.P])},
gbO:function(a){return new W.bo(a,"mouseup",!1,[W.P])},
gbP:function(a){return new W.bo(a,H.y(W.cW(a)),!1,[W.aH])},
$isc2:1,
"%":"XMLDocument;Document"},
kC:{"^":"h;",
j:function(a){return String(a)},
"%":"DOMException"},
kD:{"^":"ip;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.v(c,"$isR",[P.G],"$asR")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.R,P.G]]},
$isw:1,
$asw:function(){return[[P.R,P.G]]},
$asp:function(){return[[P.R,P.G]]},
$isk:1,
$ask:function(){return[[P.R,P.G]]},
$isa:1,
$asa:function(){return[[P.R,P.G]]},
$asq:function(){return[[P.R,P.G]]},
"%":"ClientRectList|DOMRectList"},
fo:{"^":"h;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
v:function(a,b){var z
if(b==null)return!1
if(!H.ae(b,"$isR",[P.G],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.dz(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isR:1,
$asR:function(){return[P.G]},
"%":";DOMRectReadOnly"},
kE:{"^":"ir;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.y(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.f]},
$isw:1,
$asw:function(){return[P.f]},
$asp:function(){return[P.f]},
$isk:1,
$ask:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asq:function(){return[P.f]},
"%":"DOMStringList"},
kF:{"^":"h;0k:length=","%":"DOMTokenList"},
bf:{"^":"F;",
j:function(a){return a.localName},
gbM:function(a){return new W.bG(a,"mousedown",!1,[W.P])},
gbN:function(a){return new W.bG(a,"mousemove",!1,[W.P])},
gbO:function(a){return new W.bG(a,"mouseup",!1,[W.P])},
gbP:function(a){return new W.bG(a,H.y(W.cW(a)),!1,[W.aH])},
$isbf:1,
"%":";Element"},
kH:{"^":"a2;0n:height=,0m:width=","%":"HTMLEmbedElement"},
Z:{"^":"h;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
cX:function(a,b,c,d){H.j(c,{func:1,args:[W.Z]})
if(c!=null)this.cE(a,b,c,!1)},
cE:function(a,b,c,d){return a.addEventListener(b,H.aA(H.j(c,{func:1,args:[W.Z]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dF|dG|dI|dJ"},
aj:{"^":"f6;",$isaj:1,"%":"File"},
kY:{"^":"iw;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isaj")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aj]},
$isw:1,
$asw:function(){return[W.aj]},
$asp:function(){return[W.aj]},
$isk:1,
$ask:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"FileList"},
kZ:{"^":"K;0k:length=","%":"FileWriter"},
l1:{"^":"a2;0k:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
l2:{"^":"h;0k:length=","%":"History"},
l3:{"^":"iM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isF")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.F]},
$isw:1,
$asw:function(){return[W.F]},
$asp:function(){return[W.F]},
$isk:1,
$ask:function(){return[W.F]},
$isa:1,
$asa:function(){return[W.F]},
$asq:function(){return[W.F]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fF:{"^":"c2;","%":"HTMLDocument"},
fG:{"^":"fH;",
dD:function(a,b,c,d,e,f){return a.open(b,c)},
dq:function(a,b,c){return a.open(b,c)},
cb:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
fH:{"^":"K;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
l4:{"^":"a2;0n:height=,0m:width=","%":"HTMLIFrameElement"},
l5:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
l6:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
l7:{"^":"a2;0n:height=,0m:width=","%":"HTMLImageElement"},
l9:{"^":"a2;0n:height=,0m:width=","%":"HTMLInputElement"},
aW:{"^":"dr;",$isaW:1,"%":"KeyboardEvent"},
lf:{"^":"h;",
j:function(a){return String(a)},
"%":"Location"},
h8:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
lh:{"^":"h;0k:length=","%":"MediaList"},
li:{"^":"iT;",
i:function(a,b){return P.a1(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.f])
this.A(a,new W.ha(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.f,null]},
$isL:1,
$asL:function(){return[P.f,null]},
"%":"MIDIInputMap"},
ha:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lj:{"^":"iU;",
i:function(a,b){return P.a1(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.f])
this.A(a,new W.hb(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.f,null]},
$isL:1,
$asL:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
hb:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ao:{"^":"h;",$isao:1,"%":"MimeType"},
lk:{"^":"iW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isao")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isw:1,
$asw:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"MimeTypeArray"},
P:{"^":"dr;",
gbL:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b_(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.B(W.dK(z)).$isbf)throw H.c(P.A("offsetX is only supported on elements"))
y=H.i(W.dK(z),"$isbf")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.b_(u,v,w),"$isb_",w,"$asb_")
if(typeof z!=="number")return z.T()
if(typeof x!=="number")return x.T()
return new P.b_(C.q.bV(z-u),C.q.bV(x-v),w)}},
$isP:1,
"%":";DragEvent|MouseEvent"},
F:{"^":"K;",
j:function(a){var z=a.nodeValue
return z==null?this.cf(a):z},
$isF:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
lr:{"^":"iY;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isF")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.F]},
$isw:1,
$asw:function(){return[W.F]},
$asp:function(){return[W.F]},
$isk:1,
$ask:function(){return[W.F]},
$isa:1,
$asa:function(){return[W.F]},
$asq:function(){return[W.F]},
"%":"NodeList|RadioNodeList"},
lt:{"^":"a2;0n:height=,0m:width=","%":"HTMLObjectElement"},
lv:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lw:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aq:{"^":"h;0k:length=",$isaq:1,"%":"Plugin"},
ly:{"^":"j1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isaq")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isw:1,
$asw:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"PluginArray"},
lA:{"^":"P;0n:height=,0m:width=","%":"PointerEvent"},
bm:{"^":"Z;",$isbm:1,"%":"ProgressEvent|ResourceProgressEvent"},
lF:{"^":"j7;",
i:function(a,b){return P.a1(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.f])
this.A(a,new W.hH(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.f,null]},
$isL:1,
$asL:function(){return[P.f,null]},
"%":"RTCStatsReport"},
hH:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lG:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lH:{"^":"a2;0k:length=","%":"HTMLSelectElement"},
ar:{"^":"K;",$isar:1,"%":"SourceBuffer"},
lJ:{"^":"dG;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isar")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isw:1,
$asw:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isk:1,
$ask:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SourceBufferList"},
as:{"^":"h;",$isas:1,"%":"SpeechGrammar"},
lK:{"^":"j9;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isas")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isw:1,
$asw:function(){return[W.as]},
$asp:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"SpeechGrammarList"},
at:{"^":"h;0k:length=",$isat:1,"%":"SpeechRecognitionResult"},
lN:{"^":"jc;",
i:function(a,b){return this.b6(a,H.y(b))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.cQ(a,z)
if(y==null)return
b.$2(y,this.b6(a,y))}},
gM:function(a){var z=H.m([],[P.f])
this.A(a,new W.hS(z))
return z},
gk:function(a){return a.length},
b6:function(a,b){return a.getItem(b)},
cQ:function(a,b){return a.key(b)},
$asV:function(){return[P.f,P.f]},
$isL:1,
$asL:function(){return[P.f,P.f]},
"%":"Storage"},
hS:{"^":"l:17;a",
$2:function(a,b){return C.a.l(this.a,a)}},
au:{"^":"h;",$isau:1,"%":"CSSStyleSheet|StyleSheet"},
lQ:{"^":"h;0m:width=","%":"TextMetrics"},
av:{"^":"K;",$isav:1,"%":"TextTrack"},
aw:{"^":"K;",$isaw:1,"%":"TextTrackCue|VTTCue"},
lR:{"^":"jh;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"TextTrackCueList"},
lS:{"^":"dJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isav")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$asp:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TextTrackList"},
lT:{"^":"h;0k:length=","%":"TimeRanges"},
ax:{"^":"h;",$isax:1,"%":"Touch"},
lU:{"^":"jm;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"TouchList"},
lV:{"^":"h;0k:length=","%":"TrackDefaultList"},
dr:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
m7:{"^":"h;",
j:function(a){return String(a)},
"%":"URL"},
ma:{"^":"h8;0n:height=,0m:width=","%":"HTMLVideoElement"},
mb:{"^":"K;0k:length=","%":"VideoTrackList"},
mc:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
md:{"^":"h;0m:width=","%":"VTTRegion"},
aH:{"^":"P;",
gd8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
i7:{"^":"K;",
gcY:function(a){var z,y,x
z=P.G
y=new P.N(0,$.C,[z])
x=H.j(new W.i8(new P.jf(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cK(a)
this.cS(a,W.dQ(x,z))
return y},
cS:function(a,b){return a.requestAnimationFrame(H.aA(H.j(b,{func:1,ret:-1,args:[P.G]}),1))},
cK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isds:1,
"%":"DOMWindow|Window"},
i8:{"^":"l:18;a",
$1:function(a){var z=this.a
a=H.aN(H.cv(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.X(P.cc("Future already completed"))
z.af(a)}},
mj:{"^":"jr;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isai")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ai]},
$isw:1,
$asw:function(){return[W.ai]},
$asp:function(){return[W.ai]},
$isk:1,
$ask:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asq:function(){return[W.ai]},
"%":"CSSRuleList"},
mk:{"^":"fo;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.ae(b,"$isR",[P.G],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.dz(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ml:{"^":"jt;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isak")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ak]},
$isw:1,
$asw:function(){return[W.ak]},
$asp:function(){return[W.ak]},
$isk:1,
$ask:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"GamepadList"},
mm:{"^":"jv;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isF")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.F]},
$isw:1,
$asw:function(){return[W.F]},
$asp:function(){return[W.F]},
$isk:1,
$ask:function(){return[W.F]},
$isa:1,
$asa:function(){return[W.F]},
$asq:function(){return[W.F]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mn:{"^":"jx;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isat")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isw:1,
$asw:function(){return[W.at]},
$asp:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"SpeechRecognitionResultList"},
mo:{"^":"jz;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.i(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$asp:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"StyleSheetList"},
bo:{"^":"hT;a,b,c,$ti"},
bG:{"^":"bo;a,b,c,$ti"},
is:{"^":"hU;a,b,c,d,e,$ti",p:{
ad:function(a,b,c,d,e){var z=W.dQ(new W.it(c),W.Z)
if(z!=null&&!0)J.eq(a,b,z,!1)
return new W.is(0,a,b,z,!1,[e])}}},
it:{"^":"l:19;a",
$1:function(a){return this.a.$1(H.i(a,"$isZ"))}},
q:{"^":"b;$ti",
gw:function(a){return new W.ft(a,this.gk(a),-1,[H.br(this,a,"q",0)])}},
ft:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.x(a,H.o(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb4(J.bb(this.a,z))
this.c=z
return!0}this.sb4(null)
this.c=y
return!1},
gB:function(a){return this.d}},
il:{"^":"b;a",$isK:1,$isds:1,p:{
im:function(a){if(a===window)return H.i(a,"$isds")
else return new W.il(a)}}},
ik:{"^":"h+fi;"},
io:{"^":"h+p;"},
ip:{"^":"io+q;"},
iq:{"^":"h+p;"},
ir:{"^":"iq+q;"},
iv:{"^":"h+p;"},
iw:{"^":"iv+q;"},
iL:{"^":"h+p;"},
iM:{"^":"iL+q;"},
iT:{"^":"h+V;"},
iU:{"^":"h+V;"},
iV:{"^":"h+p;"},
iW:{"^":"iV+q;"},
iX:{"^":"h+p;"},
iY:{"^":"iX+q;"},
j0:{"^":"h+p;"},
j1:{"^":"j0+q;"},
j7:{"^":"h+V;"},
dF:{"^":"K+p;"},
dG:{"^":"dF+q;"},
j8:{"^":"h+p;"},
j9:{"^":"j8+q;"},
jc:{"^":"h+V;"},
jg:{"^":"h+p;"},
jh:{"^":"jg+q;"},
dI:{"^":"K+p;"},
dJ:{"^":"dI+q;"},
jl:{"^":"h+p;"},
jm:{"^":"jl+q;"},
jq:{"^":"h+p;"},
jr:{"^":"jq+q;"},
js:{"^":"h+p;"},
jt:{"^":"js+q;"},
ju:{"^":"h+p;"},
jv:{"^":"ju+q;"},
jw:{"^":"h+p;"},
jx:{"^":"jw+q;"},
jy:{"^":"h+p;"},
jz:{"^":"jy+q;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=H.y(y[w])
z.h(0,v,a[v])}return z},
jM:function(a,b){var z={}
a.A(0,new P.jN(z))
return z},
jO:function(a){var z,y
z=new P.N(0,$.C,[null])
y=new P.du(z,[null])
a.then(H.aA(new P.jP(y),1))["catch"](H.aA(new P.jQ(y),1))
return z},
cU:function(){var z=$.cT
if(z==null){z=J.bT(window.navigator.userAgent,"Opera",0)
$.cT=z}return z},
fn:function(){var z,y
z=$.cQ
if(z!=null)return z
y=$.cR
if(y==null){y=J.bT(window.navigator.userAgent,"Firefox",0)
$.cR=y}if(y)z="-moz-"
else{y=$.cS
if(y==null){y=!P.cU()&&J.bT(window.navigator.userAgent,"Trident/",0)
$.cS=y}if(y)z="-ms-"
else z=P.cU()?"-o-":"-webkit-"}$.cQ=z
return z},
i9:{"^":"b;",
bH:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aw:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.X(P.f2("DateTime is outside valid range: "+y))
return new P.aU(y,!0)}if(a instanceof RegExp)throw H.c(P.cf("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.jO(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bH(a)
x=this.b
if(v>=x.length)return H.e(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.h1()
z.a=u
C.a.h(x,v,u)
this.dg(a,new P.ib(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bH(t)
x=this.b
if(v>=x.length)return H.e(x,v)
u=x[v]
if(u!=null)return u
s=J.aO(t)
r=s.gk(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.cp(u),q=0;q<r;++q)x.h(u,q,this.aw(s.i(t,q)))
return u}return a}},
ib:{"^":"l:20;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aw(b)
J.ep(z,a,y)
return y}},
jN:{"^":"l:7;a",
$2:function(a,b){this.a[a]=b}},
ia:{"^":"i9;a,b,c",
dg:function(a,b){var z,y,x,w
H.j(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
b.$2(w,a[w])}}},
jP:{"^":"l:9;a",
$1:function(a){return this.a.bt(0,a)}},
jQ:{"^":"l:9;a",
$1:function(a){return this.a.d3(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
hA:function(a){return C.t},
dy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iN:{"^":"b;",
Z:function(){return Math.random()},
dn:function(){return Math.random()<0.5}},
b_:{"^":"b;S:a>,N:b>,$ti",
j:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
v:function(a,b){if(b==null)return!1
return H.ae(b,"$isb_",[P.G],null)&&this.a==J.bx(b)&&this.b==b.gN(b)},
gt:function(a){var z,y,x
z=J.ah(this.a)
y=J.ah(this.b)
y=P.dy(P.dy(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
j2:{"^":"b;"},
R:{"^":"j2;$ti"}}],["","",,P,{"^":"",f1:{"^":"h;",$isf1:1,"%":"SVGAnimatedLength"},kI:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},kJ:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kK:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kL:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},kM:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kN:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kO:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kP:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},kQ:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},kR:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},kS:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},kT:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},kU:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},kV:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},kW:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},kX:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},l_:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},l0:{"^":"bg;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fE:{"^":"bg;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bg:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},l8:{"^":"bg;0n:height=,0m:width=","%":"SVGImageElement"},aX:{"^":"h;",$isaX:1,"%":"SVGLength"},le:{"^":"iP;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.K(a,b)},
h:function(a,b,c){H.r(b)
H.i(c,"$isaX")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
K:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aX]},
$isk:1,
$ask:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGLengthList"},lg:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},aZ:{"^":"h;",$isaZ:1,"%":"SVGNumber"},ls:{"^":"j_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.K(a,b)},
h:function(a,b,c){H.r(b)
H.i(c,"$isaZ")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
K:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aZ]},
$isk:1,
$ask:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGNumberList"},lx:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},lz:{"^":"h;0k:length=","%":"SVGPointList"},lB:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lC:{"^":"fE;0n:height=,0m:width=","%":"SVGRectElement"},lO:{"^":"je;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.K(a,b)},
h:function(a,b,c){H.r(b)
H.y(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
K:function(a,b){return a.getItem(b)},
$asp:function(){return[P.f]},
$isk:1,
$ask:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asq:function(){return[P.f]},
"%":"SVGStringList"},J:{"^":"bf;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lP:{"^":"bg;0n:height=,0m:width=","%":"SVGSVGElement"},b2:{"^":"h;",$isb2:1,"%":"SVGTransform"},lW:{"^":"jo;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.K(a,b)},
h:function(a,b,c){H.r(b)
H.i(c,"$isb2")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
K:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b2]},
$isk:1,
$ask:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$asq:function(){return[P.b2]},
"%":"SVGTransformList"},m8:{"^":"bg;0n:height=,0m:width=","%":"SVGUseElement"},iO:{"^":"h+p;"},iP:{"^":"iO+q;"},iZ:{"^":"h+p;"},j_:{"^":"iZ+q;"},jd:{"^":"h+p;"},je:{"^":"jd+q;"},jn:{"^":"h+p;"},jo:{"^":"jn+q;"}}],["","",,P,{"^":"",ac:{"^":"b;",$isk:1,
$ask:function(){return[P.a4]},
$isa:1,
$asa:function(){return[P.a4]},
$isi0:1}}],["","",,P,{"^":"",kp:{"^":"h;0k:length=","%":"AudioBuffer"},kq:{"^":"ij;",
i:function(a,b){return P.a1(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.f])
this.A(a,new P.f4(z))
return z},
gk:function(a){return a.size},
$asV:function(){return[P.f,null]},
$isL:1,
$asL:function(){return[P.f,null]},
"%":"AudioParamMap"},f4:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kr:{"^":"K;0k:length=","%":"AudioTrackList"},f5:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lu:{"^":"f5;0k:length=","%":"OfflineAudioContext"},ij:{"^":"h+V;"}}],["","",,P,{"^":"",f7:{"^":"h;",$isf7:1,"%":"WebGLBuffer"},fz:{"^":"h;",$isfz:1,"%":"WebGLFramebuffer"},hz:{"^":"h;",$ishz:1,"%":"WebGLProgram"},lD:{"^":"h;",
bf:function(a,b){return a.activeTexture(b)},
bh:function(a,b,c){return a.attachShader(b,c)},
bi:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindFramebuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bp:function(a,b){return a.clear(b)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bs:function(a,b){return a.compileShader(b)},
bu:function(a){return a.createBuffer()},
bv:function(a){return a.createProgram()},
bx:function(a,b){return a.createShader(b)},
by:function(a){return a.createTexture()},
bA:function(a,b){return a.depthMask(b)},
bB:function(a,b){return a.disable(b)},
bC:function(a,b,c,d){return a.drawArrays(b,c,d)},
bD:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bE:function(a,b){return a.enable(b)},
bF:function(a,b){return a.enableVertexAttribArray(b)},
a9:function(a){return P.a1(a.getContextAttributes())},
ay:function(a){return a.getError()},
az:function(a,b){return a.getProgramInfoLog(b)},
aA:function(a,b,c){return a.getProgramParameter(b,c)},
aC:function(a,b){return a.getShaderInfoLog(b)},
aD:function(a,b,c){return a.getShaderParameter(b,c)},
aE:function(a,b,c){return a.getUniformLocation(b,c)},
bI:function(a,b){return a.linkProgram(b)},
bQ:function(a,b,c){return a.pixelStorei(b,c)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
au:function(a,b,c,d,e,f,g,h,i,j){this.ao(a,b,c,d,e,f,g)
return},
bT:function(a,b,c,d,e,f,g){return this.au(a,b,c,d,e,f,g,null,null,null)},
ao:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},lE:{"^":"h;",
cZ:function(a,b){return a.beginTransformFeedback(b)},
d1:function(a,b){return a.bindVertexArray(b)},
d7:function(a){return a.createVertexArray()},
d9:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
da:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dd:function(a){return a.endTransformFeedback()},
dz:function(a,b,c,d){this.cW(a,b,H.v(c,"$isa",[P.f],"$asa"),d)
return},
cW:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dB:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bf:function(a,b){return a.activeTexture(b)},
bh:function(a,b,c){return a.attachShader(b,c)},
bi:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindFramebuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bp:function(a,b){return a.clear(b)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bs:function(a,b){return a.compileShader(b)},
bu:function(a){return a.createBuffer()},
bv:function(a){return a.createProgram()},
bx:function(a,b){return a.createShader(b)},
by:function(a){return a.createTexture()},
bA:function(a,b){return a.depthMask(b)},
bB:function(a,b){return a.disable(b)},
bC:function(a,b,c,d){return a.drawArrays(b,c,d)},
bD:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bE:function(a,b){return a.enable(b)},
bF:function(a,b){return a.enableVertexAttribArray(b)},
a9:function(a){return P.a1(a.getContextAttributes())},
ay:function(a){return a.getError()},
az:function(a,b){return a.getProgramInfoLog(b)},
aA:function(a,b,c){return a.getProgramParameter(b,c)},
aC:function(a,b){return a.getShaderInfoLog(b)},
aD:function(a,b,c){return a.getShaderParameter(b,c)},
aE:function(a,b,c){return a.getUniformLocation(b,c)},
bI:function(a,b){return a.linkProgram(b)},
bQ:function(a,b,c){return a.pixelStorei(b,c)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
au:function(a,b,c,d,e,f,g,h,i,j){this.ao(a,b,c,d,e,f,g)
return},
bT:function(a,b,c,d,e,f,g){return this.au(a,b,c,d,e,f,g,null,null,null)},
ao:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"},hM:{"^":"h;",$ishM:1,"%":"WebGLShader"},hX:{"^":"h;",$ishX:1,"%":"WebGLTexture"},i1:{"^":"h;",$isi1:1,"%":"WebGLUniformLocation"},i6:{"^":"h;",$isi6:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lL:{"^":"jb;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.a1(this.cP(a,b))},
h:function(a,b,c){H.r(b)
H.i(c,"$isL")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cP:function(a,b){return a.item(b)},
$asp:function(){return[[P.L,,,]]},
$isk:1,
$ask:function(){return[[P.L,,,]]},
$isa:1,
$asa:function(){return[[P.L,,,]]},
$asq:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},ja:{"^":"h+p;"},jb:{"^":"ja+q;"}}],["","",,G,{"^":"",
ic:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.e(z,y)
C.a.h(z,y,w+H.d(z[y]))}return C.a.Y(z,"\n")},
dv:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bx(a,b)
z.aI(a,y,c)
z.bs(a,y)
x=H.cl(z.aD(a,y,35713))
if(x!=null&&!x){w=z.aC(a,y)
P.a5("E:Compilation failed:")
P.a5("E:"+G.ic(c))
P.a5("E:Failure:")
P.a5(C.h.C("E:",w))
throw H.c(w)}return y},
d_:function(a,b){var z,y,x
H.v(a,"$isa",[T.t],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.e(a,y)
C.b.h(b,z+1,J.bW(a[y]))
z+=2
if(y>=a.length)return H.e(a,y)
x=J.cD(a[y])
if(z>=b.length)return H.e(b,z)
b[z]=x}return b},
fv:function(a,b){var z,y
H.v(a,"$isa",[T.aa],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.e(a,y)
C.b.h(b,z+1,J.bW(a[y]))}return b},
fw:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.aG],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.e(a,y)
C.b.h(b,z+1,J.bW(a[y]))
x=z+2
if(y>=a.length)return H.e(a,y)
w=J.cD(a[y])
v=b.length
if(x>=v)return H.e(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.e(a,y)
w=J.eJ(a[y])
if(z>=v)return H.e(b,z)
b[z]=w}return b},
fu:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bb(a[y],0))
if(y>=a.length)return H.e(a,y)
C.n.h(b,z+1,J.bb(a[y],1))
if(y>=a.length)return H.e(a,y)
C.n.h(b,z+2,J.bb(a[y],2))
if(y>=a.length)return H.e(a,y)
C.n.h(b,z+3,J.bb(a[y],3))}return b},
iJ:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.D]],v=[P.a4],u=[T.aG],t=[T.t],s=[T.aa];y.u();){r=y.d
if(!x.a5(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.dW>0)H.aQ("I: "+r)
continue}q=z.i(0,r)
switch($.a6().i(0,r).a){case"vec2":b.U(r,G.fv(H.bu(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.U(r,G.d_(H.bu(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.U(r,G.fw(H.bu(q,"$isa",u,"$asa"),null),4)
break
case"float":b.U(r,new Float32Array(H.bJ(H.bu(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.U(r,G.fu(H.bu(q,"$isa",w,"$asa"),null),4)
break}}},
aY:{"^":"b;"},
b3:{"^":"aY;d,a,b,c",
aR:function(){return this.d},
j:function(a){var z,y,x,w
z=H.m(["{"+new H.dq(H.jV(this)).j(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.al(y,[H.o(y,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.Y(z,"\n")}},
f8:{"^":"dg;"},
fb:{"^":"b;0a,b",
bG:function(a,b,c){J.eG(this.a,b)
if(c>0)J.eZ(this.a,b,c)},
c6:function(a,b,c,d,e,f,g,h){J.bS(this.a,34962,b)
J.f_(this.a,c,d,e,!1,g,h)}},
fy:{"^":"b;a,b,c,d,e"},
cY:{"^":"b;a,b,c"},
cZ:{"^":"b;a,b,c,d"},
fD:{"^":"b;a,b,c,d,e",
aP:function(a){switch($.a6().i(0,a).a){case"vec2":this.e.h(0,a,H.m([],[T.aa]))
break
case"vec3":this.e.h(0,a,H.m([],[T.t]))
break
case"vec4":this.e.h(0,a,H.m([],[T.aG]))
break
case"float":this.e.h(0,a,H.m([],[P.a4]))
break
case"uvec4":this.e.h(0,a,H.m([],[[P.a,P.D]]))
break}},
cl:function(a){var z,y,x,w,v,u
H.v(a,"$isa",[T.t],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.cY(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.H)(a),++w){v=a[w]
u=new T.t(new Float32Array(3))
u.D(v)
C.a.l(z,u)}},
cj:function(a,b){var z,y,x,w,v,u,t
z=[T.aa]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.H)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.aa(u))}},
ck:function(a,b){var z,y,x,w,v,u
z=[T.t]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.H)(b),++w){v=b[w]
u=new T.t(new Float32Array(3))
u.D(v)
x.l(y,u)}},
cm:function(a){var z,y,x,w,v,u
H.v(a,"$isa",[T.t],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.cZ(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.H)(a),++w){v=a[w]
u=new T.t(new Float32Array(3))
u.D(v)
C.a.l(z,u)}},
cr:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.m(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.H)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.H)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
j:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.f])
for(y=this.e,x=new H.al(y,[H.o(y,0)]),x=x.gw(x);x.u();){w=x.d
v=$.a6().i(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.Y(z," ")}},
dn:{"^":"b;a,b,c"},
dl:{"^":"b;a,b,c",p:{
dm:function(a,b,c){return new G.dl(a,b,c)}}},
d6:{"^":"b3;d,a,b,c"},
h9:{"^":"aY;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sai:function(a){this.cx=H.v(a,"$isa",[P.D],"$asa")},
aO:function(a,b,c){var z,y
C.h.V(a,0)
H.i(b,"$isac")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.bS(z.a,34962,y)
J.cB(z.a,34962,b,35048)},
cs:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
U:function(a,b,c){var z,y,x,w,v
z=J.cy(a,0)===105
if(z&&this.z===0)this.z=C.f.ci(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.bU(x.a))
this.aO(a,b,c)
w=$.a6().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bv(x.a,this.e)
x.bG(0,v,z?1:0)
x.c6(0,y.i(0,a),v,w.aQ(),5126,!1,0,0)},
aN:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.bU(y.a))
this.ch=a
this.aO("aPosition",a,3)
x=$.a6().i(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bv(y.a,this.e)
y.bG(0,w,0)
y.c6(0,z.i(0,"aPosition"),w,x.aQ(),5126,!1,0,0)},
j:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.f])
for(z=this.cy,x=new H.al(z,[H.o(z,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.Y(y,"  ")},
p:{
d7:function(a,b,c,d){var z=P.f
return new G.h9(b,J.eA(b.a),c,P.a_(z,P.b),d,0,-1,P.a_(z,P.ac),"meshdata:"+a,!1,!0)}}},
hn:{"^":"b3;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cn:function(a,b){var z
if(typeof a!=="number")return a.dC()
if(typeof b!=="number")return H.aD(b)
z=a/b
if(this.z===z)return
this.z=z
this.aT()},
aT:function(){var z,y,x,w,v,u
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
aR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.t(new Float32Array(3))
u.L(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.D(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.B(t)
x=!!y.$isaG
q=x?t.gc8(t):1
if(!!y.$ist){p=t.gS(t)
s=t.gN(t)
r=t.ga8(t)
t=p}else if(x){p=t.gS(t)
s=t.gN(t)
r=t.ga8(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aD(t)
x=z[4]
if(typeof s!=="number")return H.aD(s)
w=z[8]
if(typeof r!=="number")return H.aD(r)
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
c.D(this.db)
c.bK(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
kG:{"^":"b;"},
hG:{"^":"aY;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cw:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
x.h(0,t,J.cE(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
x.h(0,t,J.cE(w.a,v,t))}},
cz:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.f])
x=H.m([],[P.f])
for(y=new H.al(y,[H.o(y,0)]),y=y.gw(y);y.u();){w=y.d
if(!z.a5(0,w))C.a.l(x,w)}for(z=this.x,z=P.dA(z,z.r,H.o(z,0)),y=this.Q;z.u();){w=z.d
if(!y.G(0,w))C.a.l(x,w)}return x},
cA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isL",[P.f,P.b],"$asL")
z=Date.now()
for(y=new H.al(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cy(s,0)){case 117:if(w.a5(0,s)){r=b.i(0,s)
if(v.a5(0,s))H.aQ("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a6().i(0,s)
if(q==null)H.X("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.r(r)
J.bX(x.a,p,r)}else if(!!J.B(r).$isfL)J.eX(x.a,p,r)
break
case"float":if(q.c===0){H.dU(r)
J.eV(x.a,p,r)}else if(!!J.B(r).$isac)J.eW(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ag(r,"$isW").a
J.cK(x.a,p,!1,s)}else if(!!J.B(r).$isac)J.cK(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ag(r,"$isan").a
J.cJ(x.a,p,!1,s)}else if(!!J.B(r).$isac)J.cJ(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cI(o,p,H.ag(r,"$isaG").a)
else J.cI(o,p,H.i(r,"$isac"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cH(o,p,H.ag(r,"$ist").a)
else J.cH(o,p,H.i(r,"$isac"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cG(o,p,H.ag(r,"$isaa").a)
else J.cG(o,p,H.i(r,"$isac"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aD(s)
J.cz(x.a,33984+s)
s=H.ag(r,"$isce").b
J.bc(x.a,3553,s)
s=this.ch
J.bX(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aD(s)
J.cz(x.a,33984+s)
s=H.ag(r,"$isce").b
J.bc(x.a,34067,s)
s=this.ch
J.bX(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.aQ("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.S(r,!0)
o=x.a
if(s)J.bw(o,2929)
else J.bV(o,2929)
break
case"cStencilFunc":H.ag(r,"$isdn")
s=r.a
o=x.a
if(s===1281)J.bV(o,2960)
else{J.bw(o,2960)
o=r.b
n=r.c
J.eR(x.a,s,o,n)}break
case"cDepthWrite":H.cl(r)
J.eB(x.a,r)
break
case"cBlendEquation":H.ag(r,"$isdl")
s=r.a
o=x.a
if(s===1281)J.bV(o,3042)
else{J.bw(o,3042)
o=r.b
n=r.c
J.eu(x.a,o,n)
J.et(x.a,s)}break}++t
break}}m=P.cV(0,0,0,Date.now()-new P.aU(z,!1).a,0,0)
""+t
m.j(0)},
cq:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.b3],"$asa")
Date.now()
z=this.d
J.eY(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b7()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.H)(b),++x){w=b[x]
this.cA(w.a,w.aR())}y=this.Q
y.X(0)
for(v=a.cy,v=new H.al(v,[H.o(v,0)]),v=v.gw(v);v.u();)y.l(0,v.d)
u=this.cz()
if(u.length!==0)P.a5("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
y=a.d
v=a.e
J.bv(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cs()
s=a.Q
r=a.z
if(t)J.er(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.eF(q,v,y,s,0,r)
else J.eE(q,v,y,s,0)}else{s=z.a
if(r>1)J.eD(s,v,0,y,r)
else J.eC(s,v,0,y)}if(t)J.eH(z.a)},
p:{
df:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.am(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.ey(b.a)
t=G.dv(b.a,35633,x)
J.cA(b.a,u,t)
s=G.dv(b.a,35632,w)
J.cA(b.a,u,s)
if(v.length>0)J.eT(b.a,u,v,35980)
J.eO(b.a,u)
if(!H.cl(J.eN(b.a,u,35714)))H.X(J.eM(b.a,u))
z=new G.hG(b,c,d,u,P.h2(c.c,z),P.a_(z,P.b),P.a_(z,z),y,a,!1,!0)
z.cw(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
aQ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hN:{"^":"b;a,0b,c,d,e,f,r,x",
aL:function(a){var z,y,x,w
H.v(a,"$isa",[P.f],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.h(0,w,this.r);++this.r}C.a.aa(z)},
ab:function(a){var z,y,x
H.v(a,"$isa",[P.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.H)(a),++x)C.a.l(y,a[x])
C.a.aa(y)},
aM:function(a){var z,y
H.v(a,"$isa",[P.f],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.aa(z)},
aS:function(a,b){var z=[P.f]
this.b=this.cB(!0,H.v(a,"$isa",z,"$asa"),H.v(b,"$isa",z,"$asa"))},
ac:function(a){return this.aS(a,null)},
cB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.v(b,"$isa",z,"$asa")
H.v(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.H)(y),++u){t=y[u]
s=$.a6().i(0,t)
C.a.l(w,"layout (location="+H.d(v.i(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){q=z[u]
s=$.a6().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){q=z[u]
s=$.a6().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){q=z[u]
s=$.a6().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.bg(w,c)
C.a.l(w,"void main(void) {")
C.a.bg(w,b)
C.a.l(w,"}")
return C.a.Y(w,"\n")},
p:{
bE:function(a){var z,y
z=P.f
y=[z]
return new G.hN(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.a_(z,P.D))}}},
dg:{"^":"aY;",
dl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.t(new Float32Array(3))
b.L(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
u=new Float32Array(3)
t=new T.t(u)
t.D(v)
s=a.a
u[0]=u[0]-s[0]
u[1]=u[1]-s[1]
u[2]=u[2]-s[2]
t.a6(0)
r=b.bz(t)
r.a6(0)
q=t.bz(r)
q.a6(0)
p=r.aq(v)
o=q.aq(v)
v=t.aq(v)
n=r.a
m=n[0]
l=q.a
k=l[0]
j=u[0]
i=n[1]
h=l[1]
g=u[1]
n=n[2]
l=l[2]
u=u[2]
z[15]=1
z[14]=-v
z[13]=-o
z[12]=-p
z[11]=0
z[10]=u
z[9]=l
z[8]=n
z[7]=0
z[6]=g
z[5]=h
z[4]=i
z[3]=0
z[2]=j
z[1]=k
z[0]=m
z[12]=y
z[13]=x
z[14]=w},
bJ:function(a){return this.dl(a,null)}},
hY:{"^":"b;a,b,c,d,e,f,r"},
ce:{"^":"b;",
j:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fI:{"^":"ce;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
fJ:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.t]
y=P.f
x=new G.fD(!1,H.m([],[G.cY]),H.m([],[G.cZ]),H.m([],z),P.a_(y,[P.a,,]))
x.aP("aTexUV")
x.aP("aNormal")
w=P.a_(y,P.D)
v=a2.split("\n")
u=H.m([],z)
t=H.m([],z)
y=[T.aa]
s=H.m([],y)
r=Date.now()
q=P.de("\\s+",!0,!1)
p=P.de("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.H)(v),++n){m=v[n]
m.toString
l=H.kg(m,q," ")
k=H.ki(l,p,"",0)
l=k.length
if(l!==0){if(0>=l)return H.e(k,0)
l=k[0]==="#"}else l=!0
if(l)continue
j=k.split(" ")
l=j.length
if(0>=l)return H.e(j,0)
i=j[0]
if(J.S(i,"g")){if(1>=l)return H.e(j,1)
w.h(0,j[1],u.length)}else if(J.S(i,"v")){if(1>=l)return H.e(j,1)
i=P.aB(j[1],null)
if(2>=l)return H.e(j,2)
h=P.aB(j[2],null)
if(3>=l)return H.e(j,3)
l=P.aB(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(u,new T.t(g))}else if(J.S(i,"vt")){if(1>=l)return H.e(j,1)
i=P.aB(j[1],null)
if(2>=l)return H.e(j,2)
l=P.aB(j[2],null)
h=new Float32Array(2)
C.b.h(h,0,i)
C.b.h(h,1,l)
C.a.l(s,new T.aa(h))}else if(J.S(i,"vn")){if(1>=l)return H.e(j,1)
i=P.aB(j[1],null)
if(2>=l)return H.e(j,2)
h=P.aB(j[2],null)
if(3>=l)return H.e(j,3)
l=P.aB(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(t,new T.t(g))}else if(J.S(i,"f")){if(l!==4&&l!==5){H.aQ("*** Error: face '"+k+"' not handled")
continue}f=H.m([],z)
e=H.m([],z)
d=H.m([],y)
for(c=1;l=j.length,c<l;++c){b=J.eQ(j[c],"/")
for(;b.length<3;)C.a.l(b,"")
l=P.cs(b[0],null,null)
if(typeof l!=="number")return l.T()
a=l-1
if(1>=b.length)return H.e(b,1)
if(J.S(b[1],""))a0=-1
else{if(1>=b.length)return H.e(b,1)
l=P.cs(b[1],null,null)
if(typeof l!=="number")return l.T()
a0=l-1}if(2>=b.length)return H.e(b,2)
if(J.S(b[2],""))a1=-1
else{if(2>=b.length)return H.e(b,2)
l=P.cs(b[2],null,null)
if(typeof l!=="number")return l.T()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.e(u,a)
C.a.l(f,u[a])}else C.a.l(f,new T.t(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.e(s,a0)
C.a.l(d,s[a0])}else{H.aQ("problem uv "+c+" "+a0)
C.a.l(d,new T.aa(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.e(t,a1)
C.a.l(e,t[a1])}else{H.aQ("problem normals "+c+" "+a1)
C.a.l(e,new T.t(new Float32Array(3)))}}if(l===4)x.cl(f)
else x.cm(f)
x.ck("aNormal",e)
x.cj("aTexUV",d)}}P.a5("loaded ("+P.cV(0,0,0,Date.now()-new P.aU(r,!1).a,0,0).j(0)+") "+x.j(0))
return x}}],["","",,R,{"^":"",
i5:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.ej().Z()
if(v>=w)return H.e(x,v)
x[v]=(u-0.5)*c}y=G.d7(z,a.d,0,a.e.x)
y.aN(x)
return y},
hF:{"^":"hE;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dt:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.a5("size change "+H.d(y)+" "+H.d(x))
this.dx.cn(y,x)
this.z=y
this.Q=x},"$1","gds",4,0,21]}}],["","",,A,{"^":"",
dV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(e,"$isa",[G.b3],"$asa")
z=b.dx
z.D(c)
y=b.d
z.bK(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.d(b)
w=C.a.gdk(e)
v=b.db
u=new T.an(new Float32Array(9))
z.ap(u)
v.d6(u)
t=v.a
s=t[3]
t[3]=t[1]
t[1]=s
s=t[6]
t[6]=t[2]
t[2]=s
s=t[7]
t[7]=t[5]
t[5]=s
w=w.d
w.h(0,"uTransformationMatrix",y)
w.h(0,"uModelMatrix",z)
w.h(0,"uNormalMatrix",v)
C.a.l(e,x)
a.cq(b.cx,e,d)
if(0>=e.length)return H.e(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.H)(y),++r)A.dV(a,y[r],z,d,e)},
bl:{"^":"dg;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
j:function(a){return"NODE["+this.a+"]"}},
cb:{"^":"aY;d,e,f,a,b,c"},
hE:{"^":"aY;",
cv:function(a,b,c){if(this.d==null)this.d=new G.fy(this.e,null,null,null,null)},
cp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.es(v.a,36160,z)
J.f0(v.a,this.x,this.y,x,w)
if(y!==0)J.ev(v.a,y)
for(z=this.f,y=z.length,x=P.f,w=P.b,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b3(P.a_(x,w),"transforms",!1,!0))
r=new T.W(new Float32Array(16))
r.E()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.H)(v),++o)A.dV(p,v[o],r,a,s)
if(0>=s.length)return H.e(s,-1)
s.pop()}},
co:function(){return this.cp(null)}}}],["","",,V,{}],["","",,D,{"^":"",
h4:function(a){var z,y,x,w
z=P.f
y=new P.N(0,$.C,[z])
x=new XMLHttpRequest()
C.v.dq(x,"GET",a)
w=W.bm
W.ad(x,"loadend",H.j(new D.h5(new P.du(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.v.cb(x,"")
return y},
h5:{"^":"l:22;a,b",
$1:function(a){H.i(a,"$isbm")
this.a.bt(0,H.aN(W.jA(this.b.response),{futureOr:1,type:P.f}))}},
fW:{"^":"b;a,b,c",
ct:function(a){var z,y
a=document
z=W.aW
y={func:1,ret:-1,args:[z]}
W.ad(a,"keydown",H.j(new D.fY(this),y),!1,z)
W.ad(a,"keyup",H.j(new D.fZ(this),y),!1,z)},
p:{
fX:function(a){var z=P.D
z=new D.fW(P.am(null,null,null,z),P.am(null,null,null,z),P.am(null,null,null,z))
z.ct(a)
return z}}},
fY:{"^":"l:10;a",
$1:function(a){var z
H.i(a,"$isaW")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
fZ:{"^":"l:10;a",
$1:function(a){var z
H.i(a,"$isaW")
z=this.a
z.a.bR(0,a.which)
z.c.l(0,a.which)}},
hc:{"^":"b;a,b,c,d,e,f,r,x",
cu:function(a){var z,y,x
if(a==null)a=document
z=J.n(a)
y=z.gbN(a)
x=H.o(y,0)
W.ad(y.a,y.b,H.j(new D.he(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbM(a)
y=H.o(x,0)
W.ad(x.a,x.b,H.j(new D.hf(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbO(a)
x=H.o(y,0)
W.ad(y.a,y.b,H.j(new D.hg(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbP(a)
x=H.o(z,0)
W.ad(z.a,z.b,H.j(new D.hh(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hd:function(a){var z=P.D
z=new D.hc(P.am(null,null,null,z),P.am(null,null,null,z),P.am(null,null,null,z),0,0,0,0,0)
z.cu(a)
return z}}},
he:{"^":"l:3;a",
$1:function(a){var z,y
H.i(a,"$isP")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.r(y.gbL(a).a)
z.x=H.r(y.gbL(a).b)
z.d=a.movementX
z.e=a.movementY}},
hf:{"^":"l:3;a",
$1:function(a){var z
H.i(a,"$isP")
a.preventDefault()
P.a5("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hg:{"^":"l:3;a",
$1:function(a){var z
H.i(a,"$isP")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.l(0,a.button)}},
hh:{"^":"l:23;a",
$1:function(a){H.i(a,"$isaH")
a.preventDefault()
this.a.f=H.r(C.a2.gd8(a))}},
hm:{"^":"f8;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bs:function(a){var z,y
z=C.b.df(H.v(a,"$isk",[P.b],"$ask"),0,new A.jX(),P.D)
if(typeof z!=="number")return H.aD(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jX:{"^":"l:24;",
$2:function(a,b){var z,y
H.r(a)
z=J.ah(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",an:{"^":"b;a",
D:function(a){var z,y
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
j:function(a){return"[0] "+this.J(0).j(0)+"\n[1] "+this.J(1).j(0)+"\n[2] "+this.J(2).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.e(z,b)
return z[b]},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.an){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gt:function(a){return A.bs(this.a)},
J:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.e(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.e(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.e(y,x)
z[2]=y[x]
return new T.t(z)},
d6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.D(a)
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
return m}},W:{"^":"b;a",
D:function(a){var z,y
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
j:function(a){return"[0] "+this.J(0).j(0)+"\n[1] "+this.J(1).j(0)+"\n[2] "+this.J(2).j(0)+"\n[3] "+this.J(3).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.e(z,b)
return z[b]},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.W){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.bs(this.a)},
J:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.e(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.e(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.e(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.e(y,x)
z[3]=y[x]
return new T.aG(z)},
E:function(){var z=this.a
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
ap:function(a){var z,y
z=a.a
y=this.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[3]=y[4]
z[4]=y[5]
z[5]=y[6]
z[6]=y[8]
z[7]=y[9]
z[8]=y[10]},
bK:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},db:{"^":"b;a",
aG:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gR())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
aH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=a.a
y=z[0]
x=z[4]
w=z[8]
v=0+y+x+w
if(v>0){u=Math.sqrt(v+1)
y=this.a
y[3]=u*0.5
u=0.5/u
y[0]=(z[5]-z[7])*u
y[1]=(z[6]-z[2])*u
y[2]=(z[1]-z[3])*u}else{if(y<x)t=x<w?2:1
else t=y<w?2:0
s=(t+1)%3
r=(t+2)%3
y=t*3
x=y+t
if(x>=9)return H.e(z,x)
x=z[x]
w=s*3
q=w+s
if(q>=9)return H.e(z,q)
q=z[q]
p=r*3
o=p+r
if(o>=9)return H.e(z,o)
u=Math.sqrt(x-q-z[o]+1)
o=this.a
o[t]=u*0.5
u=0.5/u
q=w+r
if(q>=9)return H.e(z,q)
q=z[q]
x=p+s
if(x>=9)return H.e(z,x)
o[3]=(q-z[x])*u
x=y+s
if(x>=9)return H.e(z,x)
x=z[x]
w+=t
if(w>=9)return H.e(z,w)
o[s]=(x+z[w])*u
y+=r
if(y>=9)return H.e(z,y)
y=z[y]
p+=t
if(p>=9)return H.e(z,p)
o[r]=(y+z[p])*u}},
gR:function(){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return y*y+x*x+w*w+v*v},
gk:function(a){return Math.sqrt(this.gR())},
i:function(a,b){var z=this.a
if(b>=4)return H.e(z,b)
return z[b]},
j:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])},
p:{
dc:function(){var z=new Float32Array(4)
z[3]=1
return new T.db(z)}}},aa:{"^":"b;a",
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aa){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gt:function(a){return A.bs(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.e(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]}},t:{"^":"b;a",
L:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.t){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gt:function(a){return A.bs(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.e(z,b)
return z[b]},
gk:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gR:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
a6:function(a){var z,y,x
z=Math.sqrt(this.gR())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aq:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bz:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.t(new Float32Array(3))
z.L(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
ga8:function(a){return this.a[2]}},aG:{"^":"b;a",
j:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aG){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gt:function(a){return A.bs(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.e(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
ga8:function(a){return this.a[2]},
gc8:function(a){return this.a[3]}}}],["","",,F,{"^":"",
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=H.i(C.D.dr(y,"#webgl-canvas"),"$isc_")
w=new G.fb(x)
v=P.f
u=P.b
t=(x&&C.u).ax(x,"webgl2",P.d4(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],v,u))
w.a=t
if(t==null)H.X(P.cX('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.d(J.eK(t))
if($.dW>0)P.a5("I: "+s)
J.ew(t,0,0,0,1)
J.bw(t,2929)
t=new Float32Array(3)
s=D.fX(null)
r=D.hd(x)
q=new T.W(new Float32Array(16))
q.E()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.hm(15,-45,0.3,0,new T.t(t),-0.02,s,r,q,new T.t(p),new T.t(o),new T.t(n),new T.t(new Float32Array(3)),"camera:orbit",!1,!0)
t=new T.W(new Float32Array(16))
t.E()
s=new T.W(new Float32Array(16))
s.E()
l=new G.hn(m,50,1,1,1000,t,s,new T.W(new Float32Array(16)),P.a_(v,u),"perspective",!1,!0)
l.aT()
t=H.m([],[A.cb])
k=new R.hF(x,l,null,w,t,17664,0,0,0,0,"main",!1,!0)
k.cv("main",w,null)
k.dt(null)
s=W.Z
W.ad(window,"resize",H.j(k.gds(),{func:1,ret:-1,args:[s]}),!1,s)
s=G.df("demo",w,$.el(),$.ek())
r=[G.b3]
q=H.m([l],r)
p=[A.bl]
o=H.m([],p)
j=new A.cb(s,q,o,"demo",!1,!0)
C.a.l(t,j)
s=G.df("stars",w,$.eo(),$.en())
r=H.m([l],r)
q=H.m([],p)
n=s.d
i=$.e4()
h=P.a_(v,u)
h.h(0,"cDepthTest",!0)
h.h(0,"cDepthWrite",!1)
h.h(0,"cBlendEquation",i)
i=$.e8()
h.h(0,"cStencilFunc",i)
g=y.createElement("canvas")
g.width=64
g.height=64
f=H.i(C.u.ca(g,"2d"),"$isc0")
e=(f&&C.p).bw(f,32,32,1,32,32,22);(e&&C.m).a4(e,0,"gray")
C.m.a4(e,1,"black")
f.fillStyle=e
C.p.de(f,0,0,64,64)
e=C.p.bw(f,32,32,1,32,32,6);(e&&C.m).a4(e,0,"white")
C.m.a4(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill()
y=J.ez(n.a)
J.bc(n.a,3553,y)
J.eP(n.a,37440,1)
J.bc(n.a,3553,y)
J.eS(n.a,3553,0,6408,6408,5121,g)
J.cF(n.a,3553,10240,9729)
J.cF(n.a,3553,10241,9729)
J.eL(n.a)
J.bc(n.a,3553,null)
h.h(0,"uTexture",new G.fI(g,"Utils::Particles",y,3553,n,new G.hY(!1,!1,!1,!0,1,9729,9729)))
h.h(0,"uPointSize",1000)
d=R.i5(s,2000,100)
y=H.m([],p)
n=new Float32Array(9)
c=new T.W(new Float32Array(16))
c.E()
b=new T.W(new Float32Array(16))
b.E()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
C.a.l(q,new A.bl(new G.d6(h,"stars",!1,!0),d,y,new T.an(n),c,b,new T.t(a),new T.t(a0),new T.t(a1),new T.t(new Float32Array(3)),d.a,!1,!0))
C.a.l(t,new A.cb(s,r,q,"stars",!1,!0))
y=P.a_(v,u)
y.h(0,"cDepthTest",!0)
y.h(0,"cDepthWrite",!0)
y.h(0,"cBlendEquation",$.e5())
y.h(0,"cStencilFunc",i)
a2=T.dc()
a3=T.dc()
a4=new T.t(new Float32Array(3))
a4.L(0,0,1)
v=H.m([],p)
t=new Float32Array(9)
s=new T.W(new Float32Array(16))
s.E()
r=new T.W(new Float32Array(16))
r.E()
q=new Float32Array(3)
p=new Float32Array(3)
n=new Float32Array(3)
a5=new A.bl(null,null,v,new T.an(t),s,r,new T.t(q),new T.t(p),new T.t(n),new T.t(new Float32Array(3)),"wrapper",!1,!0)
C.a.l(o,a5)
v=new T.t(new Float32Array(3))
v.L(100,0,-100)
a5.bJ(v)
a6=D.h4("../ct_logo.obj")
a6.a7(new F.k9(j,new G.d6(y,"mat",!1,!0),a2,a5,a3,a4),null)
y=$.em()
C.a.l(y,a6)
z.a=0
z.b=0
P.fA(y,null,!1,u).a7(new F.ka(new F.k7(z,m,new F.k8(z,a2,a3,a5,C.t,a4),k)),null)},
k9:{"^":"l:25;a,b,c,d,e,f",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=Y.fJ(H.y(a))
y=this.a.d
x=G.d7("",y.d,4,y.e.x)
x.aN(G.d_(z.d,null))
y=H.v(z.cr(),"$isa",[P.D],"$asa")
w=x.d
x.y=J.bU(w.a)
v=x.ch.length
if(v<768){x.sai(new Uint8Array(H.bJ(y)))
x.Q=5121}else if(v<196608){x.sai(new Uint16Array(H.bJ(y)))
x.Q=5123}else{x.sai(new Uint32Array(H.bJ(y)))
x.Q=5125}J.bv(w.a,x.e)
y=x.y
v=x.cx
J.bS(w.a,34963,y)
J.cB(w.a,34963,v,35048)
G.iJ(z,x)
y=H.m([],[A.bl])
w=new Float32Array(9)
v=new T.W(new Float32Array(16))
v.E()
u=new Float32Array(16)
t=new T.W(u)
t.E()
s=new Float32Array(3)
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=Math.cos(1.57)
n=Math.sin(1.57)
m=u[4]
l=u[8]
k=u[5]
j=u[9]
i=u[6]
h=u[10]
g=u[7]
f=u[11]
e=-n
u[4]=m*o+l*n
u[5]=k*o+j*n
u[6]=i*o+h*n
u[7]=g*o+f*n
u[8]=m*e+l*o
u[9]=k*e+j*o
u[10]=i*e+h*o
u[11]=g*e+f*o
o=Math.cos(3.14)
n=Math.sin(3.14)
f=u[0]
e=u[4]
g=u[1]
h=u[5]
i=u[2]
j=u[6]
k=u[3]
l=u[7]
m=-n
u[0]=f*o+e*n
u[1]=g*o+h*n
u[2]=i*o+j*n
u[3]=k*o+l*n
u[4]=f*m+e*o
u[5]=g*m+h*o
u[6]=i*m+j*o
u[7]=k*m+l*o
l=this.d
d=new T.an(new Float32Array(9))
l.d.ap(d)
this.c.aH(d)
this.e.aG(this.f,3.14)
C.a.l(l.cy,new A.bl(this.b,x,y,new T.an(w),v,t,new T.t(s),new T.t(r),new T.t(q),new T.t(p),x.a,!1,!0))}},
k8:{"^":"l:26;a,b,c,d,e,f",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
z=this.a
y=z.a
if(y<1){x=y+0.2*a9/1000
z.a=x
z=this.b.a
w=z[0]
v=z[1]
u=z[2]
t=z[3]
z=this.c.a
s=z[0]
r=z[1]
q=z[2]
p=z[3]
o=w*s+v*r+u*q+t*p
if(o<0){o=-o
s=-s
r=-r
q=-q
p=-p}n=1-x
if(1-o>0.000001){m=Math.acos(o)
l=Math.sin(m)
n=Math.sin(n*m)/l
k=Math.sin(x*m)/l}else k=x
z=new Float32Array(4)
z[0]=n*w+k*s
z[1]=n*v+k*r
z[2]=n*u+k*q
z[3]=n*t+k*p
y=new Float32Array(9)
j=2/new T.db(z).gR()
i=z[0]
h=z[1]
g=z[2]
f=z[3]
e=i*j
d=h*j
c=g*j
b=f*e
a=f*d
a0=f*c
a1=i*e
a2=i*d
a3=i*c
a4=h*d
a5=h*c
a6=g*c
y[0]=1-(a4+a6)
y[1]=a2+a0
y[2]=a3-a
y[3]=a2-a0
y[4]=1-(a1+a6)
y[5]=a5+b
y[6]=a3+a
y[7]=a5-b
y[8]=1-(a1+a4)
z=this.d.d.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[4]=y[3]
z[5]=y[4]
z[6]=y[5]
z[8]=y[6]
z[9]=y[7]
z[10]=y[8]
return}else{P.a5("new rotation")
z.a=0
z=this.e
y=this.f
if(z.dn()){y.L(z.Z(),z.Z(),z.Z())
y.a6(0)
a7=6.283185307179586*z.Z()}else{y.L(1,0,0)
a7=0}P.a5("new rotation axis: "+y.j(0))
a8=new T.an(new Float32Array(9))
this.d.d.ap(a8)
this.b.aH(a8)
this.c.aG(y,a7)}}},
k7:{"^":"l:27;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cv(a7)
z=this.a
y=z.b
if(typeof a7!=="number")return a7.T()
z.b=a7+0
z=this.b
z.go+=0.001
x=z.r1
w=x.a
if(w.G(0,0)||w.G(0,1)){w=z.go
v=x.d
if(typeof v!=="number")return v.aF()
z.go=w+v*0.01
v=z.id
w=x.e
if(typeof w!=="number")return w.aF()
z.id=v+w*0.01}w=z.k4
v=w.a
if(v.G(0,37))z.go+=0.03
else if(v.G(0,39))z.go-=0.03
if(v.G(0,38))z.id+=0.03
else if(v.G(0,40))z.id-=0.03
if(v.G(0,33))z.fy*=0.99
else if(v.G(0,34))z.fy*=1.01
if(v.G(0,32)){z.go=0
z.id=0}v=x.f
if(typeof v!=="number")return v.aF()
v=z.fy-v*z.k3
if(v>0)z.fy=v
v=C.q.d2(z.id,-1.4707963267948965,1.4707963267948965)
z.id=v
u=z.fy
t=z.go
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=z.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=z.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
z.bJ(t)
t=z.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
z=-z.k1
p=Math.sqrt(t.gR())
o=v[0]/p
n=v[1]/p
m=v[2]/p
l=Math.cos(z)
k=Math.sin(z)
j=1-l
i=o*o*j+l
z=m*k
h=o*n*j-z
v=n*k
g=o*m*j+v
f=n*o*j+z
e=n*n*j+l
z=o*k
d=n*m*j-z
c=m*o*j-v
b=m*n*j+z
a=m*m*j+l
z=q[0]
v=q[4]
t=q[8]
u=q[1]
r=q[5]
a0=q[9]
a1=q[2]
a2=q[6]
a3=q[10]
a4=q[3]
a5=q[7]
a6=q[11]
q[0]=z*i+v*f+t*c
q[1]=u*i+r*f+a0*c
q[2]=a1*i+a2*f+a3*c
q[3]=a4*i+a5*f+a6*c
q[4]=z*h+v*e+t*b
q[5]=u*h+r*e+a0*b
q[6]=a1*h+a2*e+a3*b
q[7]=a4*h+a5*e+a6*b
q[8]=z*g+v*d+t*a
q[9]=u*g+r*d+a0*a
q[10]=a1*g+a2*d+a3*a
q[11]=a4*g+a5*d+a6*a
w.c.X(0)
w.b.X(0)
x.e=0
x.d=0
x.f=0
x.c.X(0)
x.b.X(0)
this.c.$1(a7-y)
this.d.co()
C.a3.gcY(window).a7(this,-1)}},
ka:{"^":"l:28;a",
$1:function(a){H.b8(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d0.prototype
return J.fQ.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.fR.prototype
if(typeof a=="boolean")return J.fP.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bO(a)}
J.aO=function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bO(a)}
J.cp=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bO(a)}
J.jT=function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.jU=function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.cq=function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bO(a)}
J.bN=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).v(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jT(a).O(a,b)}
J.bb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k4(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aO(a).i(a,b)}
J.ep=function(a,b,c){return J.cp(a).h(a,b,c)}
J.cy=function(a,b){return J.cq(a).V(a,b)}
J.cz=function(a,b){return J.n(a).bf(a,b)}
J.eq=function(a,b,c,d){return J.n(a).cX(a,b,c,d)}
J.cA=function(a,b,c){return J.n(a).bh(a,b,c)}
J.er=function(a,b){return J.n(a).cZ(a,b)}
J.bS=function(a,b,c){return J.n(a).bi(a,b,c)}
J.es=function(a,b,c){return J.n(a).bk(a,b,c)}
J.bc=function(a,b,c){return J.n(a).bl(a,b,c)}
J.bv=function(a,b){return J.n(a).d1(a,b)}
J.et=function(a,b){return J.n(a).bm(a,b)}
J.eu=function(a,b,c){return J.n(a).bn(a,b,c)}
J.cB=function(a,b,c,d){return J.n(a).bo(a,b,c,d)}
J.ev=function(a,b){return J.n(a).bp(a,b)}
J.ew=function(a,b,c,d,e){return J.n(a).bq(a,b,c,d,e)}
J.ex=function(a,b){return J.jU(a).I(a,b)}
J.bT=function(a,b,c){return J.aO(a).d5(a,b,c)}
J.bU=function(a){return J.n(a).bu(a)}
J.ey=function(a){return J.n(a).bv(a)}
J.ez=function(a){return J.n(a).by(a)}
J.eA=function(a){return J.n(a).d7(a)}
J.eB=function(a,b){return J.n(a).bA(a,b)}
J.bV=function(a,b){return J.n(a).bB(a,b)}
J.eC=function(a,b,c,d){return J.n(a).bC(a,b,c,d)}
J.eD=function(a,b,c,d,e){return J.n(a).d9(a,b,c,d,e)}
J.eE=function(a,b,c,d,e){return J.n(a).bD(a,b,c,d,e)}
J.eF=function(a,b,c,d,e,f){return J.n(a).da(a,b,c,d,e,f)}
J.bw=function(a,b){return J.n(a).bE(a,b)}
J.eG=function(a,b){return J.n(a).bF(a,b)}
J.eH=function(a){return J.n(a).dd(a)}
J.eI=function(a,b){return J.n(a).A(a,b)}
J.ah=function(a){return J.B(a).gt(a)}
J.cC=function(a){return J.cp(a).gw(a)}
J.bd=function(a){return J.aO(a).gk(a)}
J.eJ=function(a){return J.bN(a).gc8(a)}
J.bx=function(a){return J.bN(a).gS(a)}
J.bW=function(a){return J.bN(a).gN(a)}
J.cD=function(a){return J.bN(a).ga8(a)}
J.eK=function(a){return J.n(a).a9(a)}
J.eL=function(a){return J.n(a).ay(a)}
J.eM=function(a,b){return J.n(a).az(a,b)}
J.eN=function(a,b,c){return J.n(a).aA(a,b,c)}
J.cE=function(a,b,c){return J.n(a).aE(a,b,c)}
J.eO=function(a,b){return J.n(a).bI(a,b)}
J.eP=function(a,b,c){return J.n(a).bQ(a,b,c)}
J.eQ=function(a,b){return J.cq(a).cd(a,b)}
J.eR=function(a,b,c,d){return J.n(a).aJ(a,b,c,d)}
J.eS=function(a,b,c,d,e,f,g){return J.n(a).bT(a,b,c,d,e,f,g)}
J.cF=function(a,b,c,d){return J.n(a).bU(a,b,c,d)}
J.by=function(a){return J.B(a).j(a)}
J.eT=function(a,b,c,d){return J.n(a).dz(a,b,c,d)}
J.eU=function(a){return J.cq(a).dA(a)}
J.eV=function(a,b,c){return J.n(a).bW(a,b,c)}
J.eW=function(a,b,c){return J.n(a).bX(a,b,c)}
J.bX=function(a,b,c){return J.n(a).bY(a,b,c)}
J.eX=function(a,b,c){return J.n(a).bZ(a,b,c)}
J.cG=function(a,b,c){return J.n(a).c_(a,b,c)}
J.cH=function(a,b,c){return J.n(a).c0(a,b,c)}
J.cI=function(a,b,c){return J.n(a).c1(a,b,c)}
J.cJ=function(a,b,c,d){return J.n(a).c2(a,b,c,d)}
J.cK=function(a,b,c,d){return J.n(a).c3(a,b,c,d)}
J.eY=function(a,b){return J.n(a).c4(a,b)}
J.eZ=function(a,b,c){return J.n(a).dB(a,b,c)}
J.f_=function(a,b,c,d,e,f,g){return J.n(a).c5(a,b,c,d,e,f,g)}
J.f0=function(a,b,c,d,e){return J.n(a).c7(a,b,c,d,e)}
I.ct=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.u=W.c_.prototype
C.m=W.f9.prototype
C.p=W.c0.prototype
C.D=W.fF.prototype
C.v=W.fG.prototype
C.E=J.h.prototype
C.a=J.bh.prototype
C.f=J.d0.prototype
C.q=J.bi.prototype
C.h=J.bj.prototype
C.L=J.bk.prototype
C.b=H.hi.prototype
C.n=H.hk.prototype
C.y=J.ho.prototype
C.r=J.b4.prototype
C.a2=W.aH.prototype
C.a3=W.i7.prototype
C.t=new P.iN()
C.e=new P.j3()
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.m(I.ct([]),[P.z])
C.N=new G.E("vec3","vertex btangents",0)
C.d=new G.E("vec3","",0)
C.O=new G.E("vec4","delta from light",0)
C.o=new G.E("","",0)
C.z=new G.E("vec3","vertex coordinates",0)
C.P=new G.E("vec3","vertex binormals",0)
C.A=new G.E("vec4","for wireframe",0)
C.Q=new G.E("vec4","per vertex color",0)
C.R=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.T=new G.E("mat4","",4)
C.S=new G.E("mat4","",128)
C.c=new G.E("float","",0)
C.U=new G.E("float","",4)
C.V=new G.E("float","depth for shadowmaps",0)
C.i=new G.E("sampler2D","",0)
C.W=new G.E("float","for bump maps",0)
C.X=new G.E("vec2","texture uvs",0)
C.Y=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.Z=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.a_=new G.E("vec3","vertex normals",0)
C.a0=new G.E("sampler2DShadow","",0)
C.B=new G.E("vec3","per vertex color",0)
C.C=new G.E("mat3","",0)
C.a1=new G.E("vec3","vertex tangents",0)
$.a8=0
$.aS=null
$.cM=null
$.ch=!1
$.dY=null
$.dR=null
$.e2=null
$.bM=null
$.bP=null
$.cr=null
$.aK=null
$.b5=null
$.b6=null
$.ci=!1
$.C=C.e
$.cT=null
$.cS=null
$.cR=null
$.cQ=null
$.dW=0
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
I.$lazy(y,x,w)}})(["kA","e7",function(){return H.dX("_$dart_dartClosure")},"ld","cw",function(){return H.dX("_$dart_js")},"lX","e9",function(){return H.a9(H.bF({
toString:function(){return"$receiver$"}}))},"lY","ea",function(){return H.a9(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))},"lZ","eb",function(){return H.a9(H.bF(null))},"m_","ec",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"m2","ef",function(){return H.a9(H.bF(void 0))},"m3","eg",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"m1","ee",function(){return H.a9(H.dp(null))},"m0","ed",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"m5","ei",function(){return H.a9(H.dp(void 0))},"m4","eh",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mf","cx",function(){return P.id()},"mr","ba",function(){return[]},"kx","e6",function(){return{}},"lM","e8",function(){return new G.dn(1281,0,4294967295)},"kt","e5",function(){return G.dm(1281,1281,1281)},"ks","e4",function(){return G.dm(32774,770,769)},"mp","a6",function(){return P.d4(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.B,"aColorAlpha",C.Q,"aPosition",C.z,"aTexUV",C.X,"aNormal",C.a_,"aBinormal",C.P,"aCenter",C.A,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a1,"aBitangent",C.N,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.B,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.z,"vPositionFromLight",C.O,"vCenter",C.A,"vDepth",C.V,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a0,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.Z,"uAnimationTable",C.i,"uTime",C.Y,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.S,"uLightDescs",C.T,"uLightCount",C.c,"uLightTypes",C.U,"uBumpScale",C.W,"uNormalScale",C.R],P.f,G.E)},"m9","ej",function(){return P.hA(null)},"mz","eo",function(){var z,y
z=G.bE("PointSpritesV")
y=[P.f]
z.aL(H.m(["aPosition"],y))
z.ab(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.ac(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"my","en",function(){var z,y
z=G.bE("PointSpritesF")
y=[P.f]
z.ab(H.m(["uTexture"],y))
z.ac(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mv","el",function(){var z,y
z=G.bE("FixedVertexColorV")
y=[P.f]
z.aL(H.m(["aPosition"],y))
z.ab(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aM(H.m(["vColor"],y))
z.aS(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],y),H.m(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"mu","ek",function(){var z,y
z=G.bE("FixedVertexColorF")
y=[P.f]
z.aM(H.m(["vColor"],y))
z.ac(H.m(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"mw","em",function(){return H.m([],[[P.U,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.z,args:[W.P]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.f,args:[P.D]},{func:1,ret:-1,args:[,]},{func:1,ret:P.z,args:[W.aW]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[,P.O]},{func:1,ret:P.z,args:[,],opt:[P.O]},{func:1,ret:[P.N,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.z,args:[P.G]},{func:1,args:[W.Z]},{func:1,args:[,,]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:P.z,args:[W.bm]},{func:1,ret:P.z,args:[W.aH]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:P.z,args:[P.f]},{func:1,ret:-1,args:[P.a4]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kk(d||a)
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
Isolate.ct=a.ct
Isolate.b7=a.b7
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
if(typeof dartMainRunner==="function")dartMainRunner(F.e_,[])
else F.e_([])})})()
//# sourceMappingURL=slerp.dart.js.map
