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
else b1.push(a8+a9+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
for(var d=0;d<a3.length;d++){if(d!=0)f+=", "
var a0=generateAccessor(a3[d],g,a2)
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
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
b6.$isc=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isf)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="c"
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
processClassData(e,d,a5)}}}function addStubs(b5,b6,b7,b8,b9){var g=0,f=b6[g],e
if(typeof f=="string")e=b6[++g]
else{e=f
f=b7}var d=[b5[b7]=b5[f]=e]
e.$stubName=b7
b9.push(b7)
for(g++;g<b6.length;g++){e=b6[g]
if(typeof e!="function")break
if(!b8)e.$stubName=b6[++g]
d.push(e)
if(e.$stubName){b5[e.$stubName]=e
b9.push(e.$stubName)}}for(var a0=0;a0<d.length;g++,a0++)d[a0].$callName=b6[g]
var a1=b6[g]
b6=b6.slice(++g)
var a2=b6[0]
var a3=(a2&1)===1
a2=a2>>1
var a4=a2>>1
var a5=(a2&1)===1
var a6=a2===3
var a7=a2===1
var a8=b6[1]
var a9=a8>>1
var b0=(a8&1)===1
var b1=a4+a9
var b2=b6[2]
if(typeof b2=="number")b6[2]=b2+c
if(b>0){var b3=3
for(var a0=0;a0<a9;a0++){if(typeof b6[b3]=="number")b6[b3]=b6[b3]+b
b3++}for(var a0=0;a0<b1;a0++){b6[b3]=b6[b3]+b
b3++}}var b4=2*a9+a4+3
if(a1){e=tearOff(d,b6,b8,b7,a3)
b5[b7].$getter=e
e.$getterStub=true
if(b8)b9.push(a1)
b5[a1]=e
d.push(e)
e.$stubName=a1
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cd(this,d,e,true,[],a0).prototype
return g}:tearOffGetter(d,e,a0,a1)}var y=0
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ar=function(){}
var dart=[["","",,H,{"^":"",lu:{"^":"c;a"}}],["","",,J,{"^":"",
p:function(a){return void 0},
ch:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b5:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cg==null){H.k6()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dI("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bT()]
if(v!=null)return v
v=H.ka(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bT(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
f:{"^":"c;",
I:function(a,b){return a===b},
gC:function(a){return H.aI(a)},
k:["cG",function(a){return"Instance of '"+H.aJ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fQ:{"^":"f;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iscb:1},
fR:{"^":"f;",
I:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isaZ:1},
bU:{"^":"f;",
gC:function(a){return 0},
k:["cI",function(a){return String(a)}]},
hj:{"^":"bU;"},
b2:{"^":"bU;"},
aG:{"^":"bU;",
k:function(a){var z=a[$.$get$cK()]
return z==null?this.cI(a):J.ax(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aC:{"^":"f;$ti",
N:function(a,b){var z,y
if(!!a.fixed$length)H.S(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.L(a))}},
af:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b5:function(a,b){return H.dp(a,b,null,H.D(a,0))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
ge7:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d0())},
cA:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.S(P.r("setRange"))
P.hr(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.J()
if(typeof b!=="number")return H.u(b)
z=c-b
if(z===0)return
y=J.p(d)
if(!!y.$ish){x=e
w=d}else{w=y.b5(d,e).ei(0,!1)
x=0}y=J.aa(w)
v=y.gi(w)
if(typeof v!=="number")return H.u(v)
if(x+z>v)throw H.a(H.fN())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ah:function(a,b,c,d){return this.cA(a,b,c,d,0)},
by:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.L(a))}return!1},
cB:function(a,b){if(!!a.immutable$list)H.S(P.r("sort"))
H.hF(a,J.jF())},
au:function(a){return this.cB(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.K(a[z],b))return!0
return!1},
k:function(a){return P.bS(a,"[","]")},
gM:function(a){return new J.f9(a,a.length,0,null,[H.D(a,0)])},
gC:function(a){return H.aI(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.S(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cD(b,"newLength",null))
if(b<0)throw H.a(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a9(a,b))
if(b>=a.length||b<0)throw H.a(H.a9(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.S(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a9(a,b))
if(b>=a.length||b<0)throw H.a(H.a9(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.c.l(a.length,C.c.gi(b))
y=H.A([],[H.D(a,0)])
this.si(y,z)
this.ah(y,0,a.length,a)
this.ah(y,a.length,z,b)
return y},
$isn:1,
$asn:I.ar,
$ish:1,
p:{
aD:function(a){a.fixed$length=Array
return a},
ls:[function(a,b){return J.eC(a,b)},"$2","jF",8,0,21]}},
lt:{"^":"aC;$ti"},
f9:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aE:{"^":"f;",
W:function(a,b){var z
if(typeof b!=="number")throw H.a(H.W(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gap(b)
if(this.gap(a)===z)return 0
if(this.gap(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gap:function(a){return a===0?1/a<0:a<0},
eh:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
dN:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dO:function(a,b,c){if(this.W(b,c)>0)throw H.a(H.W(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
ek:function(a,b){var z
if(b>20)throw H.a(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gap(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a-b},
cK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bt(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.bt(a,b)},
bt:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
br:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dw:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a<b},
ag:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a>b},
$isaP:1,
$isaR:1},
d2:{"^":"aE;",$isG:1},
d1:{"^":"aE;"},
aF:{"^":"f;",
dP:function(a,b){if(b>=a.length)H.S(H.a9(a,b))
return a.charCodeAt(b)},
bl:function(a,b){if(b>=a.length)throw H.a(H.a9(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cD(b,null,null))
return a+b},
cD:function(a,b,c){var z
if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cC:function(a,b){return this.cD(a,b,0)},
b7:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.S(H.W(c))
if(b<0)throw H.a(P.bl(b,null,null))
if(typeof c!=="number")return H.u(c)
if(b>c)throw H.a(P.bl(b,null,null))
if(c>a.length)throw H.a(P.bl(c,null,null))
return a.substring(b,c)},
cE:function(a,b){return this.b7(a,b,null)},
ej:function(a){return a.toLowerCase()},
dR:function(a,b,c){if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
return H.kg(a,b,c)},
W:function(a,b){var z
if(typeof b!=="string")throw H.a(H.W(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a9(a,b))
return a[b]},
$isn:1,
$asn:I.ar,
$ism:1}}],["","",,H,{"^":"",
d0:function(){return new P.bp("No element")},
fO:function(){return new P.bp("Too many elements")},
fN:function(){return new P.bp("Too few elements")},
hF:function(a,b){var z=J.a3(a)
if(typeof z!=="number")return z.J()
H.b0(a,0,z-1,b)},
b0:function(a,b,c,d){if(c-b<=32)H.hE(a,b,c,d)
else H.hD(a,b,c,d)},
hE:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.aa(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.a7(c-b+1,6)
y=b+z
x=c-z
w=C.c.a7(b+c,2)
v=w-z
u=w+z
t=J.aa(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.N(d.$2(s,r),0)){n=r
r=s
s=n}if(J.N(d.$2(p,o),0)){n=o
o=p
p=n}if(J.N(d.$2(s,q),0)){n=q
q=s
s=n}if(J.N(d.$2(r,q),0)){n=q
q=r
r=n}if(J.N(d.$2(s,p),0)){n=p
p=s
s=n}if(J.N(d.$2(q,p),0)){n=p
p=q
q=n}if(J.N(d.$2(r,o),0)){n=o
o=r
r=n}if(J.N(d.$2(r,q),0)){n=q
q=r
r=n}if(J.N(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.K(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.p(i)
if(h.I(i,0))continue
if(h.a3(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aQ(i)
if(h.ag(i,0)){--l
continue}else{g=l-1
if(h.a3(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aT(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aT(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}e=!1}h=m-1
t.j(a,b,t.h(a,h))
t.j(a,h,r)
h=l+1
t.j(a,c,t.h(a,h))
t.j(a,h,p)
H.b0(a,b,m-2,d)
H.b0(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.K(d.$2(t.h(a,m),r),0);)++m
for(;J.K(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.K(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aT(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b0(a,m,l,d)}else H.b0(a,m,l,d)},
bO:{"^":"bh;$ti"},
bj:{"^":"bO;$ti",
gM:function(a){return new H.d7(this,this.gi(this),0,null,[H.cf(this,"bj",0)])},
B:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.u(0,y))
if(z!==this.gi(this))throw H.a(P.L(this))}},
aV:function(a,b){return this.cH(0,b)}},
hR:{"^":"bj;a,b,c,$ti",
d_:function(a,b,c,d){},
gdi:function(){var z=J.a3(this.a)
return z},
gdz:function(){var z,y
z=J.a3(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a3(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>=z)return 0
return z-y},
u:function(a,b){var z,y
z=this.gdz()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.u(b)
y=z+b
if(!(b<0)){z=this.gdi()
if(typeof z!=="number")return H.u(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cp(this.a,y)},
ei:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.aa(y)
w=x.gi(y)
if(typeof w!=="number")return w.J()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.u(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a3()
if(u<w)throw H.a(P.L(this))}return t},
p:{
dp:function(a,b,c,d){var z=new H.hR(a,b,c,[d])
z.d_(a,b,c,d)
return z}}},
d7:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aa(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.L(z))
w=this.c
if(typeof x!=="number")return H.u(x)
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
h_:{"^":"bj;a,b,$ti",
gi:function(a){return J.a3(this.a)},
u:function(a,b){return this.b.$1(J.cp(this.a,b))},
$asbO:function(a,b){return[b]},
$asbj:function(a,b){return[b]},
$asbh:function(a,b){return[b]}},
dJ:{"^":"bh;a,b,$ti",
gM:function(a){return new H.hZ(J.aV(this.a),this.b,this.$ti)}},
hZ:{"^":"fP;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bf:{"^":"c;$ti"}}],["","",,H,{"^":"",
jZ:function(a){return init.types[a]},
k9:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.p(a).$iso},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ax(a)
if(typeof z!=="string")throw H.a(H.W(a))
return z},
aI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aJ:function(a){var z,y,x,w,v,u,t,s,r
z=J.p(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.p(a).$isb2){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bl(w,0)===36)w=C.i.cE(w,1)
r=H.bA(H.as(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hq:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
ho:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
hk:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
hl:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
hn:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
hp:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
hm:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
u:function(a){throw H.a(H.W(a))},
d:function(a,b){if(a==null)J.a3(a)
throw H.a(H.a9(a,b))},
a9:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a3(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bl(b,"index",null)},
W:function(a){return new P.ac(!0,a,null,null)},
a7:function(a){if(typeof a!=="number")throw H.a(H.W(a))
return a},
a:function(a){var z
if(a==null)a=new P.de()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.es})
z.name=""}else z.toString=H.es
return z},
es:function(){return J.ax(this.dartException)},
S:function(a){throw H.a(a)},
E:function(a){throw H.a(P.L(a))},
T:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ki(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.br(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bV(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dd(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dv()
u=$.$get$dw()
t=$.$get$dx()
s=$.$get$dy()
r=$.$get$dC()
q=$.$get$dD()
p=$.$get$dA()
$.$get$dz()
o=$.$get$dF()
n=$.$get$dE()
m=v.U(y)
if(m!=null)return z.$1(H.bV(y,m))
else{m=u.U(y)
if(m!=null){m.method="call"
return z.$1(H.bV(y,m))}else{m=t.U(y)
if(m==null){m=s.U(y)
if(m==null){m=r.U(y)
if(m==null){m=q.U(y)
if(m==null){m=p.U(y)
if(m==null){m=s.U(y)
if(m==null){m=o.U(y)
if(m==null){m=n.U(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dd(y,m))}}return z.$1(new H.hX(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dk()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dk()
return a},
al:function(a){var z
if(a==null)return new H.e_(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e_(a,null)},
jV:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
k8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cT("Unsupported number of arguments for wrapped closure"))},
a8:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k8)
a.$identity=z
return z},
fj:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.p(c).$ish){z.$reflectionInfo=c
x=H.ht(z).r}else x=c
w=d?Object.create(new H.hG().constructor.prototype):Object.create(new H.bL(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.X
$.X=J.av(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cI(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jZ,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cG:H.bM
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cI(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fg:function(a,b,c,d){var z=H.bM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cI:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fg(y,!w,z,b)
if(y===0){w=$.X
$.X=J.av(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ay
if(v==null){v=H.bc("self")
$.ay=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
$.X=J.av(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ay
if(v==null){v=H.bc("self")
$.ay=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fh:function(a,b,c,d){var z,y
z=H.bM
y=H.cG
switch(b?-1:a){case 0:throw H.a(H.hz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fi:function(a,b){var z,y,x,w,v,u,t,s
z=$.ay
if(z==null){z=H.bc("self")
$.ay=z}y=$.cF
if(y==null){y=H.bc("receiver")
$.cF=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.X
$.X=J.av(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.X
$.X=J.av(y,1)
return new Function(z+H.b(y)+"}")()},
cd:function(a,b,c,d,e,f){var z,y
z=J.aD(b)
y=!!J.p(c).$ish?J.aD(c):c
return H.fj(a,z,y,!!d,e,f)},
kd:function(a,b){var z=J.aa(b)
throw H.a(H.cH(a,z.b7(b,3,z.gi(b))))},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else z=!0
if(z)return a
H.kd(a,b)},
ce:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eg:function(a,b){var z,y
if(a==null)return!1
z=H.ce(J.p(a))
if(z==null)y=!1
else y=H.el(z,b)
return y},
jN:function(a){var z
if(a instanceof H.i){z=H.ce(J.p(a))
if(z!=null)return H.ci(z,null)
return"Closure"}return H.aJ(a)},
kh:function(a){throw H.a(new P.fo(a))},
ej:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
mS:function(a,b,c){return H.aS(a["$as"+H.b(c)],H.as(b))},
b6:function(a,b,c,d){var z=H.aS(a["$as"+H.b(c)],H.as(b))
return z==null?null:z[d]},
cf:function(a,b,c){var z=H.aS(a["$as"+H.b(b)],H.as(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.as(a)
return z==null?null:z[b]},
ci:function(a,b){var z=H.au(a,b)
return z},
au:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bA(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.au(z,b)
return H.jE(a,b)}return"unknown-reified-type"},
jE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.au(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.au(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.au(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jU(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.au(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bA:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c2("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.au(u,c)}return w?"":"<"+z.k(0)+">"},
jY:function(a){var z,y,x
if(a instanceof H.i){z=H.ce(J.p(a))
if(z!=null)return H.ci(z,null)}y=J.p(a).constructor.builtin$cls
if(a==null)return y
x=H.bA(a.$ti,0,null)
return y+x},
aS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cc:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.as(a)
y=J.p(a)
if(y[b]==null)return!1
return H.eb(H.aS(y[d],z),c)},
b8:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cc(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bA(c,0,null)
throw H.a(H.cH(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eb:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
mQ:function(a,b,c){return a.apply(b,H.aS(J.p(b)["$as"+H.b(c)],H.as(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aZ")return!0
if('func' in b)return H.el(a,b)
if('func' in a)return b.builtin$cls==="lk"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.ci(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eb(H.aS(u,z),x)},
ea:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.M(z,v)||H.M(v,z)))return!1}return!0},
jO:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aD(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
el:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.M(z,y)||H.M(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ea(x,w,!1))return!1
if(!H.ea(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.jO(a.named,b.named)},
mR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ka:function(a){var z,y,x,w,v,u
z=$.ek.$1(a)
y=$.by[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bz[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.e9.$2(a,z)
if(z!=null){y=$.by[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bz[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bB(x)
$.by[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bz[z]=x
return x}if(v==="-"){u=H.bB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.en(a,x)
if(v==="*")throw H.a(P.dI(z))
if(init.leafTags[z]===true){u=H.bB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.en(a,x)},
en:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ch(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bB:function(a){return J.ch(a,!1,null,!!a.$iso)},
kc:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bB(z)
else return J.ch(z,c,null,null)},
k6:function(){if(!0===$.cg)return
$.cg=!0
H.k7()},
k7:function(){var z,y,x,w,v,u,t,s
$.by=Object.create(null)
$.bz=Object.create(null)
H.k2()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eo.$1(v)
if(u!=null){t=H.kc(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k2:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.aq(C.E,H.aq(C.J,H.aq(C.u,H.aq(C.u,H.aq(C.I,H.aq(C.F,H.aq(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ek=new H.k3(v)
$.e9=new H.k4(u)
$.eo=new H.k5(t)},
aq:function(a,b){return a(b)||b},
kg:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hs:{"^":"c;a,b,c,d,e,f,r,x",p:{
ht:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aD(z)
y=z[0]
x=z[1]
return new H.hs(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hV:{"^":"c;a,b,c,d,e,f",
U:function(a){var z,y,x
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
a_:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hg:{"^":"H;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dd:function(a,b){return new H.hg(a,b==null?null:b.method)}}},
fS:{"^":"H;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bV:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fS(a,y,z?null:b.receiver)}}},
hX:{"^":"H;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ki:{"^":"i:0;a",
$1:function(a){if(!!J.p(a).$isH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e_:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaK:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aJ(this).trim()+"'"},
gcs:function(){return this},
gcs:function(){return this}},
dq:{"^":"i;"},
hG:{"^":"dq;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bL:{"^":"dq;a,b,c,d",
I:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aI(this.a)
else y=typeof z!=="object"?J.a2(z):H.aI(z)
return(y^H.aI(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aJ(z)+"'")},
p:{
bM:function(a){return a.a},
cG:function(a){return a.c},
bc:function(a){var z,y,x,w,v
z=new H.bL("self","target","receiver","name")
y=J.aD(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fe:{"^":"H;a",
k:function(a){return this.a},
p:{
cH:function(a,b){return new H.fe("CastError: "+H.b(P.bQ(a))+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")}}},
hy:{"^":"H;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hz:function(a){return new H.hy(a)}}},
dG:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a2(this.a)},
I:function(a,b){if(b==null)return!1
return b instanceof H.dG&&J.K(this.a,b.a)}},
d3:{"^":"bY;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gO:function(a){return new H.fY(this,[H.D(this,0)])},
an:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bn(y,b)}else return this.e5(b)},
e5:function(a){var z=this.d
if(z==null)return!1
return this.aR(this.aD(z,J.a2(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.al(z,b)
x=y==null?null:y.gae()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.al(w,b)
x=y==null?null:y.gae()
return x}else return this.e6(b)},
e6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aD(z,J.a2(a)&0x3ffffff)
x=this.aR(y,a)
if(x<0)return
return y[x].gae()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aI()
this.b=z}this.bh(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aI()
this.c=y}this.bh(y,b,c)}else{x=this.d
if(x==null){x=this.aI()
this.d=x}w=J.a2(b)&0x3ffffff
v=this.aD(x,w)
if(v==null)this.aM(x,w,[this.ax(b,c)])
else{u=this.aR(v,b)
if(u>=0)v[u].sae(c)
else v.push(this.ax(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.L(this))
z=z.c}},
bh:function(a,b,c){var z=this.al(a,b)
if(z==null)this.aM(a,b,this.ax(b,c))
else z.sae(c)},
bi:function(){this.r=this.r+1&67108863},
ax:function(a,b){var z,y
z=new H.fX(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bi()
return z},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].ge4(),b))return y
return-1},
k:function(a){return P.d8(this)},
al:function(a,b){return a[b]},
aD:function(a,b){return a[b]},
aM:function(a,b,c){a[b]=c},
dg:function(a,b){delete a[b]},
bn:function(a,b){return this.al(a,b)!=null},
aI:function(){var z=Object.create(null)
this.aM(z,"<non-identifier-key>",z)
this.dg(z,"<non-identifier-key>")
return z}},
fX:{"^":"c;e4:a<,ae:b@,c,d"},
fY:{"^":"bO;a,$ti",
gi:function(a){return this.a.a},
gM:function(a){var z,y
z=this.a
y=new H.ae(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.L(z))
y=y.c}}},
ae:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.L(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k3:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
k4:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
k5:{"^":"i:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jU:function(a){return J.aD(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bv:function(a){var z,y,x
if(!!J.p(a).$isn)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a9(b,a))},
hc:{"^":"f;","%":"DataView;ArrayBufferView;bZ|dU|dV|d9|dW|dX|af"},
bZ:{"^":"hc;",
gi:function(a){return a.length},
$isn:1,
$asn:I.ar,
$iso:1,
$aso:I.ar},
d9:{"^":"dV;",
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a1(b,a,a.length)
a[b]=c},
$asbf:function(){return[P.aP]},
$ask:function(){return[P.aP]},
$ish:1,
$ash:function(){return[P.aP]},
"%":"Float64Array"},
af:{"^":"dX;",
j:function(a,b,c){H.a1(b,a,a.length)
a[b]=c},
$asbf:function(){return[P.G]},
$ask:function(){return[P.G]},
$ish:1,
$ash:function(){return[P.G]}},
hb:{"^":"d9;",$isbR:1,"%":"Float32Array"},
lL:{"^":"af;",
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lM:{"^":"af;",
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
$isfL:1,
"%":"Int32Array"},
lN:{"^":"af;",
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lO:{"^":"af;",
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lP:{"^":"af;",
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lQ:{"^":"af;",
gi:function(a){return a.length},
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lR:{"^":"af;",
gi:function(a){return a.length},
h:function(a,b){H.a1(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dU:{"^":"bZ+k;"},
dV:{"^":"dU+bf;"},
dW:{"^":"bZ+k;"},
dX:{"^":"dW+bf;"}}],["","",,P,{"^":"",
i3:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jP()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a8(new P.i5(z),1)).observe(y,{childList:true})
return new P.i4(z,y,x)}else if(self.setImmediate!=null)return P.jQ()
return P.jR()},
mC:[function(a){self.scheduleImmediate(H.a8(new P.i6(a),0))},"$1","jP",4,0,6],
mD:[function(a){self.setImmediate(H.a8(new P.i7(a),0))},"$1","jQ",4,0,6],
mE:[function(a){P.ji(0,a)},"$1","jR",4,0,6],
jI:function(a,b){if(H.eg(a,{func:1,args:[P.aZ,P.aZ]})){b.toString
return a}else{b.toString
return a}},
jH:function(){var z,y
for(;z=$.ap,z!=null;){$.aN=null
y=z.b
$.ap=y
if(y==null)$.aM=null
z.a.$0()}},
mP:[function(){$.c9=!0
try{P.jH()}finally{$.aN=null
$.c9=!1
if($.ap!=null)$.$get$c4().$1(P.ec())}},"$0","ec",0,0,3],
e7:function(a){var z=new P.dK(a,null)
if($.ap==null){$.aM=z
$.ap=z
if(!$.c9)$.$get$c4().$1(P.ec())}else{$.aM.b=z
$.aM=z}},
jM:function(a){var z,y,x
z=$.ap
if(z==null){P.e7(a)
$.aN=$.aM
return}y=new P.dK(a,null)
x=$.aN
if(x==null){y.b=z
$.aN=y
$.ap=y}else{y.b=x.b
x.b=y
$.aN=y
if(y.b==null)$.aM=y}},
ke:function(a){var z=$.x
if(C.f===z){P.bx(null,null,C.f,a)
return}z.toString
P.bx(null,null,z,z.bB(a))},
jL:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.T(u)
y=H.al(u)
$.x.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aw(x)
w=t
v=x.ga5()
c.$2(w,v)}}},
jA:function(a,b,c,d){var z=a.dM(0)
if(!!J.p(z).$isaY&&z!==$.$get$cW())z.en(new P.jD(b,c,d))
else b.aa(c,d)},
jB:function(a,b){return new P.jC(a,b)},
i1:function(){return $.x},
bw:function(a,b,c,d,e){var z={}
z.a=d
P.jM(new P.jJ(z,e))},
e5:function(a,b,c,d){var z,y
y=$.x
if(y===c)return d.$0()
$.x=c
z=y
try{y=d.$0()
return y}finally{$.x=z}},
e6:function(a,b,c,d,e){var z,y
y=$.x
if(y===c)return d.$1(e)
$.x=c
z=y
try{y=d.$1(e)
return y}finally{$.x=z}},
jK:function(a,b,c,d,e,f){var z,y
y=$.x
if(y===c)return d.$2(e,f)
$.x=c
z=y
try{y=d.$2(e,f)
return y}finally{$.x=z}},
bx:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bB(d):c.dJ(d)
P.e7(d)},
i5:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i4:{"^":"i:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i6:{"^":"i:1;a",
$0:function(){this.a.$0()}},
i7:{"^":"i:1;a",
$0:function(){this.a.$0()}},
jh:{"^":"c;a,b,c",
dc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a8(new P.jj(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
p:{
ji:function(a,b){var z=new P.jh(!0,null,0)
z.dc(a,b)
return z}}},
jj:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kw:{"^":"c;$ti"},
ia:{"^":"c;$ti"},
jc:{"^":"ia;a,$ti",
dQ:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.c1("Future already completed"))
z.ak(b)}},
dN:{"^":"c;aK:a<,b,c,d,e,$ti",
gdE:function(){return this.b.b},
gbX:function(){return(this.c&1)!==0},
ge3:function(){return(this.c&2)!==0},
gbW:function(){return this.c===8},
e1:function(a){return this.b.b.aU(this.d,a)},
e8:function(a){if(this.c!==6)return!0
return this.b.b.aU(this.d,J.aw(a))},
e0:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eg(z,{func:1,args:[P.c,P.aK]}))return x.ed(z,y.gP(a),a.ga5())
else return x.aU(z,y.gP(a))},
e2:function(){return this.b.b.c8(this.d)}},
aj:{"^":"c;bs:a<,b,ds:c<,$ti",
d7:function(a,b){this.a=4
this.c=a},
gdl:function(){return this.a===2},
gaE:function(){return this.a>=4},
ca:function(a,b){var z,y,x
z=$.x
if(z!==C.f){z.toString
if(b!=null)b=P.jI(b,z)}y=new P.aj(0,z,null,[null])
x=b==null?1:3
this.ay(new P.dN(null,y,x,a,b,[H.D(this,0),null]))
return y},
c9:function(a){return this.ca(a,null)},
en:function(a){var z,y
z=$.x
y=new P.aj(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.D(this,0)
this.ay(new P.dN(null,y,8,a,null,[z,z]))
return y},
ay:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaE()){y.ay(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bx(null,null,z,new P.is(this,a))}},
bp:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaK()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaE()){v.bp(a)
return}this.a=v.a
this.c=v.c}z.a=this.aL(a)
y=this.b
y.toString
P.bx(null,null,y,new P.ix(z,this))}},
am:function(){var z=this.c
this.c=null
return this.aL(z)},
aL:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaK()
z.a=y}return y},
ak:function(a){var z,y,x
z=this.$ti
y=H.cc(a,"$isaY",z,"$asaY")
if(y){z=H.cc(a,"$isaj",z,null)
if(z)P.dO(a,this)
else P.it(a,this)}else{x=this.am()
this.a=4
this.c=a
P.aL(this,x)}},
aa:[function(a,b){var z=this.am()
this.a=8
this.c=new P.bb(a,b)
P.aL(this,z)},function(a){return this.aa(a,null)},"er","$2","$1","gbm",4,2,13],
$isaY:1,
p:{
it:function(a,b){var z,y,x
b.a=1
try{a.ca(new P.iu(b),new P.iv(b))}catch(x){z=H.T(x)
y=H.al(x)
P.ke(new P.iw(b,z,y))}},
dO:function(a,b){var z
for(;a.gdl();)a=a.c
if(a.gaE()){z=b.am()
b.a=a.a
b.c=a.c
P.aL(b,z)}else{z=b.c
b.a=2
b.c=a
a.bp(z)}},
aL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aw(v)
t=v.ga5()
y.toString
P.bw(null,null,y,u,t)}return}for(;b.gaK()!=null;b=s){s=b.a
b.a=null
P.aL(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbX()||b.gbW()){q=b.gdE()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aw(v)
t=v.ga5()
y.toString
P.bw(null,null,y,u,t)
return}p=$.x
if(p==null?q!=null:p!==q)$.x=q
else p=null
if(b.gbW())new P.iA(z,x,b,w).$0()
else if(y){if(b.gbX())new P.iz(x,b,r).$0()}else if(b.ge3())new P.iy(z,x,b).$0()
if(p!=null)$.x=p
y=x.b
if(!!J.p(y).$isaY){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aL(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dO(y,o)
return}}o=b.b
b=o.am()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
is:{"^":"i:1;a,b",
$0:function(){P.aL(this.a,this.b)}},
ix:{"^":"i:1;a,b",
$0:function(){P.aL(this.b,this.a.a)}},
iu:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.ak(a)}},
iv:{"^":"i:14;a",
$2:function(a,b){this.a.aa(a,b)},
$1:function(a){return this.$2(a,null)}},
iw:{"^":"i:1;a,b,c",
$0:function(){this.a.aa(this.b,this.c)}},
iA:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e2()}catch(w){y=H.T(w)
x=H.al(w)
if(this.d){v=J.aw(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bb(y,x)
u.a=!0
return}if(!!J.p(z).$isaY){if(z instanceof P.aj&&z.gbs()>=4){if(z.gbs()===8){v=this.b
v.b=z.gds()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.c9(new P.iB(t))
v.a=!1}}},
iB:{"^":"i:0;a",
$1:function(a){return this.a}},
iz:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e1(this.c)}catch(x){z=H.T(x)
y=H.al(x)
w=this.a
w.b=new P.bb(z,y)
w.a=!0}}},
iy:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e8(z)===!0&&w.e!=null){v=this.b
v.b=w.e0(z)
v.a=!1}}catch(u){y=H.T(u)
x=H.al(u)
w=this.a
v=J.aw(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bb(y,x)
s.a=!0}}},
dK:{"^":"c;a,b"},
dm:{"^":"c;$ti",
B:function(a,b){var z,y
z={}
y=new P.aj(0,$.x,null,[null])
z.a=null
z.a=this.c_(new P.hN(z,this,b,y),!0,new P.hO(y),y.gbm())
return y},
gi:function(a){var z,y
z={}
y=new P.aj(0,$.x,null,[P.G])
z.a=0
this.c_(new P.hP(z),!0,new P.hQ(z,y),y.gbm())
return y}},
hN:{"^":"i;a,b,c,d",
$1:function(a){P.jL(new P.hL(this.c,a),new P.hM(),P.jB(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cf(this.b,"dm",0)]}}},
hL:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hM:{"^":"i:0;",
$1:function(a){}},
hO:{"^":"i:1;a",
$0:function(){this.a.ak(null)}},
hP:{"^":"i:0;a",
$1:function(a){++this.a.a}},
hQ:{"^":"i:1;a,b",
$0:function(){this.b.ak(this.a.a)}},
hK:{"^":"c;$ti"},
jD:{"^":"i:1;a,b,c",
$0:function(){return this.a.aa(this.b,this.c)}},
jC:{"^":"i:15;a,b",
$2:function(a,b){P.jA(this.a,this.b,a,b)}},
bb:{"^":"c;P:a>,a5:b<",
k:function(a){return H.b(this.a)},
$isH:1},
jp:{"^":"c;"},
jJ:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.de()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ax(y)
throw x}},
iW:{"^":"jp;",
ee:function(a){var z,y,x
try{if(C.f===$.x){a.$0()
return}P.e5(null,null,this,a)}catch(x){z=H.T(x)
y=H.al(x)
P.bw(null,null,this,z,y)}},
ef:function(a,b){var z,y,x
try{if(C.f===$.x){a.$1(b)
return}P.e6(null,null,this,a,b)}catch(x){z=H.T(x)
y=H.al(x)
P.bw(null,null,this,z,y)}},
dJ:function(a){return new P.iY(this,a)},
bB:function(a){return new P.iX(this,a)},
dK:function(a){return new P.iZ(this,a)},
h:function(a,b){return},
c8:function(a){if($.x===C.f)return a.$0()
return P.e5(null,null,this,a)},
aU:function(a,b){if($.x===C.f)return a.$1(b)
return P.e6(null,null,this,a,b)},
ed:function(a,b,c){if($.x===C.f)return a.$2(b,c)
return P.jK(null,null,this,a,b,c)}},
iY:{"^":"i:1;a,b",
$0:function(){return this.a.c8(this.b)}},
iX:{"^":"i:1;a,b",
$0:function(){return this.a.ee(this.b)}},
iZ:{"^":"i:0;a,b",
$1:function(a){return this.a.ef(this.b,a)}}}],["","",,P,{"^":"",
O:function(){return new H.d3(0,null,null,null,null,null,0,[null,null])},
d5:function(a){return H.jV(a,new H.d3(0,null,null,null,null,null,0,[null,null]))},
U:function(a,b,c,d){return new P.iJ(0,null,null,null,null,null,0,[d])},
fM:function(a,b,c){var z,y
if(P.ca(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aO()
y.push(a)
try{P.jG(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dn(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bS:function(a,b,c){var z,y,x
if(P.ca(a))return b+"..."+c
z=new P.c2(b)
y=$.$get$aO()
y.push(a)
try{x=z
x.a=P.dn(x.ga6(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga6()+c
y=z.ga6()
return y.charCodeAt(0)==0?y:y},
ca:function(a){var z,y
for(z=0;y=$.$get$aO(),z<y.length;++z)if(a===y[z])return!0
return!1},
jG:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gM(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.t();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bW:function(a,b){var z,y
z=P.U(null,null,null,b)
for(y=J.aV(a);y.t();)z.L(0,y.gD(y))
return z},
d8:function(a){var z,y,x
z={}
if(P.ca(a))return"{...}"
y=new P.c2("")
try{$.$get$aO().push(a)
x=y
x.a=x.ga6()+"{"
z.a=!0
J.cq(a,new P.fZ(z,y))
z=y
z.a=z.ga6()+"}"}finally{z=$.$get$aO()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga6()
return z.charCodeAt(0)==0?z:z},
iJ:{"^":"iD;a,b,c,d,e,f,r,$ti",
gM:function(a){var z=new P.c7(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.df(b)},
df:function(a){var z=this.d
if(z==null)return!1
return this.aC(z[this.az(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.L(this))
z=z.b}},
L:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c8()
this.b=z}return this.bj(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c8()
this.c=y}return this.bj(y,b)}else return this.dd(0,b)},
dd:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c8()
this.d=z}y=this.az(b)
x=z[y]
if(x==null)z[y]=[this.aJ(b)]
else{if(this.aC(x,b)>=0)return!1
x.push(this.aJ(b))}return!0},
c7:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bq(this.c,b)
else return this.dn(0,b)},
dn:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.az(b)]
x=this.aC(y,b)
if(x<0)return!1
this.bu(y.splice(x,1)[0])
return!0},
ad:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aH()}},
bj:function(a,b){if(a[b]!=null)return!1
a[b]=this.aJ(b)
return!0},
bq:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bu(z)
delete a[b]
return!0},
aH:function(){this.r=this.r+1&67108863},
aJ:function(a){var z,y
z=new P.iK(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aH()
return z},
bu:function(a){var z,y
z=a.gdm()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aH()},
az:function(a){return J.a2(a)&0x3ffffff},
aC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gdh(),b))return y
return-1},
p:{
c8:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iK:{"^":"c;dh:a<,b,dm:c<"},
c7:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.L(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iD:{"^":"hA;$ti"},
lx:{"^":"c;$ti"},
d6:{"^":"dT;$ti",$ish:1},
k:{"^":"c;$ti",
gM:function(a){return new H.d7(a,this.gi(a),0,null,[H.b6(this,a,"k",0)])},
u:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.L(a))}},
e_:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.L(a))}return y},
b5:function(a,b){return H.dp(a,b,null,H.b6(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.b6(this,a,"k",0)])
y=this.gi(a)
x=C.c.gi(b)
if(typeof y!=="number")return y.l()
C.b.si(z,C.c.l(y,x))
C.b.ah(z,0,this.gi(a),a)
C.b.ah(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bS(a,"[","]")}},
bY:{"^":"P;$ti"},
fZ:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
P:{"^":"c;$ti",
B:function(a,b){var z,y
for(z=J.aV(this.gO(a));z.t();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a3(this.gO(a))},
k:function(a){return P.d8(a)}},
hB:{"^":"c;$ti",
N:function(a,b){var z
for(z=J.aV(b);z.t();)this.L(0,z.gD(z))},
k:function(a){return P.bS(this,"{","}")},
B:function(a,b){var z
for(z=new P.c7(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hA:{"^":"hB;$ti"},
dT:{"^":"c+k;$ti"}}],["","",,P,{"^":"",
fC:function(a){var z=J.p(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aJ(a)+"'"},
bQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fC(a)},
cT:function(a){return new P.ip(a)},
am:function(a){H.bC(H.b(a))},
cb:{"^":"c;"},
"+bool":0,
cL:{"^":"c;dD:a<,b",
I:function(a,b){if(b==null)return!1
if(!(b instanceof P.cL))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.c.W(this.a,b.gdD())},
gC:function(a){var z=this.a
return(z^C.c.br(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fp(H.hq(this))
y=P.aW(H.ho(this))
x=P.aW(H.hk(this))
w=P.aW(H.hl(this))
v=P.aW(H.hn(this))
u=P.aW(H.hp(this))
t=P.fq(H.hm(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fp:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aW:function(a){if(a>=10)return""+a
return"0"+a}}},
aP:{"^":"aR;"},
"+double":0,
aX:{"^":"c;ab:a<",
l:function(a,b){return new P.aX(C.c.l(this.a,b.gab()))},
J:function(a,b){return new P.aX(this.a-b.gab())},
a3:function(a,b){return C.c.a3(this.a,b.gab())},
ag:function(a,b){return C.c.ag(this.a,b.gab())},
I:function(a,b){if(b==null)return!1
if(!(b instanceof P.aX))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.c.W(this.a,b.gab())},
k:function(a){var z,y,x,w,v
z=new P.fy()
y=this.a
if(y<0)return"-"+new P.aX(0-y).k(0)
x=z.$1(C.c.a7(y,6e7)%60)
w=z.$1(C.c.a7(y,1e6)%60)
v=new P.fx().$1(y%1e6)
return""+C.c.a7(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fw:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fx:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fy:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
H:{"^":"c;",
ga5:function(){return H.al(this.$thrownJsError)}},
de:{"^":"H;",
k:function(a){return"Throw of null."}},
ac:{"^":"H;a,b,c,d",
gaB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaA:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaB()+y+x
if(!this.a)return w
v=this.gaA()
u=P.bQ(this.b)
return w+v+": "+H.b(u)},
p:{
cD:function(a,b,c){return new P.ac(!0,a,b,c)},
f8:function(a){return new P.ac(!1,null,a,"Must not be null")}}},
dg:{"^":"ac;e,f,a,b,c,d",
gaB:function(){return"RangeError"},
gaA:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bl:function(a,b,c){return new P.dg(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.dg(b,c,!0,a,d,"Invalid value")},
hr:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
z=a>c}else z=!0
if(z)throw H.a(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
z=b>c}else z=!0
if(z)throw H.a(P.ao(b,a,c,"end",f))
return b}return c}}},
fK:{"^":"ac;e,i:f>,a,b,c,d",
gaB:function(){return"RangeError"},
gaA:function(){if(J.aT(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a3(b)
return new P.fK(b,z,!0,a,c,"Index out of range")}}},
hY:{"^":"H;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
r:function(a){return new P.hY(a)}}},
hW:{"^":"H;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dI:function(a){return new P.hW(a)}}},
bp:{"^":"H;a",
k:function(a){return"Bad state: "+this.a},
p:{
c1:function(a){return new P.bp(a)}}},
fk:{"^":"H;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bQ(z))+"."},
p:{
L:function(a){return new P.fk(a)}}},
dk:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga5:function(){return},
$isH:1},
fo:{"^":"H;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kT:{"^":"c;"},
ip:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
G:{"^":"aR;"},
"+int":0,
bh:{"^":"c;$ti",
aV:["cH",function(a,b){return new H.dJ(this,b,[H.cf(this,"bh",0)])}],
B:function(a,b){var z
for(z=this.gM(this);z.t();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gM(this)
for(y=0;z.t();)++y
return y},
ga4:function(a){var z,y
z=this.gM(this)
if(!z.t())throw H.a(H.d0())
y=z.gD(z)
if(z.t())throw H.a(H.fO())
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.f8("index"))
if(b<0)H.S(P.ao(b,0,null,"index",null))
for(z=this.gM(this),y=0;z.t();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.fM(this,"(",")")}},
fP:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bX:{"^":"c;$ti"},
aZ:{"^":"c;",
gC:function(a){return P.c.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aR:{"^":"c;"},
"+num":0,
c:{"^":";",
I:function(a,b){return this===b},
gC:function(a){return H.aI(this)},
k:function(a){return"Instance of '"+H.aJ(this)+"'"},
toString:function(){return this.k(this)}},
aK:{"^":"c;"},
m:{"^":"c;"},
"+String":0,
c2:{"^":"c;a6:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dn:function(a,b,c){var z=J.aV(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.t())}else{a+=H.b(z.gD(z))
for(;z.t();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fz:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).X(z,a,b,c)
y.toString
z=new H.dJ(new W.Q(y),new W.fA(),[W.t])
return z.ga4(z)},
fB:function(a){return"wheel"},
az:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eP(a)
if(typeof y==="string")z=a.tagName}catch(x){H.T(x)}return z},
ik:function(a,b){return document.createElement(a)},
ak:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e4:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.id(a)
if(!!J.p(z).$isB)return z
return}else return a},
e8:function(a){var z=$.x
if(z===C.f)return a
return z.dK(a)},
v:{"^":"an;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kj:{"^":"c0;m:x=,n:y=,E:z=","%":"Accelerometer|LinearAccelerationSensor"},
kk:{"^":"f;i:length=","%":"AccessibleNodeList"},
kl:{"^":"v;ao:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
km:{"^":"v;ao:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kr:{"^":"v;ao:href}","%":"HTMLBaseElement"},
fc:{"^":"f;","%":"Response;Body"},
bK:{"^":"v;",$isbK:1,"%":"HTMLBodyElement"},
ks:{"^":"v;K:name=","%":"HTMLButtonElement"},
kt:{"^":"v;G:height},H:width}",
ct:function(a,b,c){var z=a.getContext(b,P.jS(c,null))
return z},
"%":"HTMLCanvasElement"},
ku:{"^":"f;",
at:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kv:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kx:{"^":"Y;a1:style=","%":"CSSFontFaceRule"},
ky:{"^":"Y;a1:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kz:{"^":"Y;a1:style=","%":"CSSPageRule"},
kA:{"^":"bd;i:length=","%":"CSSPerspective"},
kB:{"^":"bN;m:x=,n:y=","%":"CSSPositionValue"},
kC:{"^":"bd;m:x=,n:y=,E:z=","%":"CSSRotation"},
Y:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kD:{"^":"bd;m:x=,n:y=,E:z=","%":"CSSScale"},
fl:{"^":"ib;i:length=",
bk:function(a,b){var z,y
z=$.$get$cJ()
y=z[b]
if(typeof y==="string")return y
y=this.dA(a,b)
z[b]=y
return y},
dA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fr()+b
if(z in a)return z
return b},
dv:function(a,b,c,d){a.setProperty(b,c,d)},
sG:function(a,b){a.height=b},
sH:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fm:{"^":"c;",
sdZ:function(a,b){this.dv(a,this.bk(a,"float"),b,"")}},
kE:{"^":"Y;a1:style=","%":"CSSStyleRule"},
bN:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bd:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kF:{"^":"bN;i:length=","%":"CSSTransformValue"},
kG:{"^":"bd;m:x=,n:y=,E:z=","%":"CSSTranslation"},
kH:{"^":"bN;i:length=","%":"CSSUnparsedValue"},
kI:{"^":"Y;a1:style=","%":"CSSViewportRule"},
kJ:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kK:{"^":"f;m:x=,n:y=,E:z=","%":"DeviceAcceleration"},
fs:{"^":"v;","%":"HTMLDivElement"},
kL:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
kM:{"^":"ft;",
gV:function(a){return a.a},
gS:function(a){return a.b},
ga_:function(a){return a.c},
"%":"DOMMatrix"},
ft:{"^":"f;",
gV:function(a){return a.a},
gS:function(a){return a.b},
ga_:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
kN:{"^":"fu;",
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z},
"%":"DOMPoint"},
fu:{"^":"f;",
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z},
"%":";DOMPointReadOnly"},
kO:{"^":"ig;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.a6]},
$iso:1,
$aso:function(){return[P.a6]},
$ask:function(){return[P.a6]},
$ish:1,
$ash:function(){return[P.a6]},
$asl:function(){return[P.a6]},
"%":"ClientRectList|DOMRectList"},
fv:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gH(a))+" x "+H.b(this.gG(a))},
I:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa6)return!1
return a.left===z.gbY(b)&&a.top===z.gcb(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.dS(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcc:function(a){return new P.ag(a.left,a.top,[null])},
gG:function(a){return a.height},
gbY:function(a){return a.left},
gcb:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa6:1,
$asa6:I.ar,
"%":";DOMRectReadOnly"},
kP:{"^":"ii;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.m]},
$iso:1,
$aso:function(){return[P.m]},
$ask:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"DOMStringList"},
kQ:{"^":"f;i:length=","%":"DOMTokenList"},
an:{"^":"t;a1:style=,bo:namespaceURI=,eg:tagName=",
gdH:function(a){return new W.ij(a)},
k:function(a){return a.localName},
X:["av",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cS
if(z==null){z=H.A([],[W.db])
y=new W.dc(z)
z.push(W.dP(null))
z.push(W.e0())
$.cS=y
d=y}else d=z
z=$.cR
if(z==null){z=new W.e3(d)
$.cR=z
c=z}else{z.a=d
c=z}}if($.a4==null){z=document
y=z.implementation.createHTMLDocument("")
$.a4=y
$.bP=y.createRange()
y=$.a4
y.toString
x=y.createElement("base")
J.eY(x,z.baseURI)
$.a4.head.appendChild(x)}z=$.a4
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a4
if(!!this.$isbK)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a4.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.A(C.M,a.tagName)){$.bP.selectNodeContents(w)
v=$.bP.createContextualFragment(b)}else{w.innerHTML=b
v=$.a4.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a4.body
if(w==null?z!=null:w!==z)J.cw(w)
c.b2(v)
document.adoptNode(v)
return v},function(a,b,c){return this.X(a,b,c,null)},"dT",null,null,"ges",5,5,null],
cw:function(a,b,c,d){a.textContent=null
a.appendChild(this.X(a,b,c,d))},
cv:function(a,b){return this.cw(a,b,null,null)},
aW:function(a){return a.getBoundingClientRect()},
gc3:function(a){return new W.ah(a,"mousedown",!1,[W.Z])},
gc4:function(a){return new W.ah(a,"mousemove",!1,[W.Z])},
gc5:function(a){return new W.ah(a,"mouseup",!1,[W.Z])},
gc6:function(a){return new W.ah(a,W.fB(a),!1,[W.b3])},
$isan:1,
"%":";Element"},
fA:{"^":"i:0;",
$1:function(a){return!!J.p(a).$isan}},
kR:{"^":"v;G:height},K:name=,H:width}","%":"HTMLEmbedElement"},
kS:{"^":"ad;P:error=","%":"ErrorEvent"},
ad:{"^":"f;",
ar:function(a){return a.preventDefault()},
$isad:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"f;",
bx:["cF",function(a,b,c,d){if(c!=null)this.de(a,b,c,!1)}],
de:function(a,b,c,d){return a.addEventListener(b,H.a8(c,1),!1)},
dq:function(a,b,c,d){return a.removeEventListener(b,H.a8(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dY|dZ|e1|e2"},
lb:{"^":"v;K:name=","%":"HTMLFieldSetElement"},
lc:{"^":"ir;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.be]},
$iso:1,
$aso:function(){return[W.be]},
$ask:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$asl:function(){return[W.be]},
"%":"FileList"},
ld:{"^":"B;P:error=","%":"FileReader"},
le:{"^":"B;P:error=,i:length=","%":"FileWriter"},
lg:{"^":"f;a1:style=","%":"FontFace"},
lh:{"^":"B;",
eu:function(a,b,c){return a.forEach(H.a8(b,3),c)},
B:function(a,b){b=H.a8(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lj:{"^":"v;i:length=,K:name=","%":"HTMLFormElement"},
ll:{"^":"c0;m:x=,n:y=,E:z=","%":"Gyroscope"},
lm:{"^":"f;i:length=","%":"History"},
ln:{"^":"iF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lo:{"^":"v;G:height},K:name=,H:width}","%":"HTMLIFrameElement"},
lp:{"^":"v;G:height},H:width}","%":"HTMLImageElement"},
lr:{"^":"v;G:height},K:name=,H:width}","%":"HTMLInputElement"},
bi:{"^":"dH;",
geo:function(a){return a.which},
$isbi:1,
"%":"KeyboardEvent"},
lw:{"^":"v;ao:href}","%":"HTMLLinkElement"},
ly:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lz:{"^":"c0;m:x=,n:y=,E:z=","%":"Magnetometer"},
lA:{"^":"v;K:name=","%":"HTMLMapElement"},
h1:{"^":"v;P:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lD:{"^":"f;i:length=","%":"MediaList"},
lE:{"^":"B;",
T:function(a){return a.clone()},
"%":"MediaStream"},
lF:{"^":"B;aQ:enabled=",
T:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lG:{"^":"B;",
bx:function(a,b,c,d){if(J.K(b,"message"))a.start()
this.cF(a,b,c,!1)},
"%":"MessagePort"},
lH:{"^":"v;K:name=","%":"HTMLMetaElement"},
lI:{"^":"iL;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gO:function(a){var z=H.A([],[P.m])
this.B(a,new W.h3(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"MIDIInputMap"},
h3:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lJ:{"^":"iM;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gO:function(a){var z=H.A([],[P.m])
this.B(a,new W.h4(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
h4:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lK:{"^":"iO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bk]},
$iso:1,
$aso:function(){return[W.bk]},
$ask:function(){return[W.bk]},
$ish:1,
$ash:function(){return[W.bk]},
$asl:function(){return[W.bk]},
"%":"MimeTypeArray"},
Z:{"^":"dH;bH:button=",
gc2:function(a){var z,y,x
if(!!a.offsetX)return new P.ag(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.p(W.e4(z)).$isan)throw H.a(P.r("offsetX is only supported on elements"))
y=W.e4(z)
z=[null]
x=new P.ag(a.clientX,a.clientY,z).J(0,J.eQ(J.eS(y)))
return new P.ag(J.cx(x.a),J.cx(x.b),z)}},
$isZ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
Q:{"^":"d6;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c1("No elements"))
if(y>1)throw H.a(P.c1("More than one element"))
return z.firstChild},
N:function(a,b){var z,y,x,w
z=J.p(b)
if(!!z.$isQ){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gM(b),y=this.a;z.t();)y.appendChild(z.gD(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gM:function(a){var z=this.a.childNodes
return new W.cU(z,z.length,-1,null,[H.b6(C.P,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asd6:function(){return[W.t]},
$ask:function(){return[W.t]},
$ash:function(){return[W.t]},
$asdT:function(){return[W.t]}},
t:{"^":"B;aq:parentNode=,aT:previousSibling=",
gc1:function(a){return new W.Q(a)},
ea:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cG(a):z},
$ist:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lS:{"^":"f;",
e9:[function(a){return a.previousNode()},"$0","gaT",1,0,4],
"%":"NodeIterator"},
hd:{"^":"iQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lV:{"^":"v;G:height},K:name=,H:width}","%":"HTMLObjectElement"},
lX:{"^":"v;K:name=","%":"HTMLOutputElement"},
lY:{"^":"v;K:name=","%":"HTMLParamElement"},
b_:{"^":"f;i:length=","%":"Plugin"},
m_:{"^":"iU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b_]},
$iso:1,
$aso:function(){return[W.b_]},
$ask:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$asl:function(){return[W.b_]},
"%":"PluginArray"},
m2:{"^":"f;",
aW:function(a){return a.getBoundingClientRect()},
"%":"Range"},
m8:{"^":"j_;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gO:function(a){var z=H.A([],[P.m])
this.B(a,new W.hx(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hx:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
m9:{"^":"v;i:length=,K:name=","%":"HTMLSelectElement"},
c0:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ma:{"^":"ad;P:error=","%":"SensorErrorEvent"},
mb:{"^":"v;K:name=","%":"HTMLSlotElement"},
mc:{"^":"dZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bn]},
$iso:1,
$aso:function(){return[W.bn]},
$ask:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$asl:function(){return[W.bn]},
"%":"SourceBufferList"},
md:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bo]},
$iso:1,
$aso:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$asl:function(){return[W.bo]},
"%":"SpeechGrammarList"},
me:{"^":"ad;P:error=","%":"SpeechRecognitionError"},
b1:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mg:{"^":"j8;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gO:function(a){var z=H.A([],[P.m])
this.B(a,new W.hJ(z))
return z},
gi:function(a){return a.length},
$asP:function(){return[P.m,P.m]},
"%":"Storage"},
hJ:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
hS:{"^":"v;",
X:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=W.fz("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.Q(y).N(0,J.eN(z))
return y},
"%":"HTMLTableElement"},
mj:{"^":"v;",
X:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.X(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.ga4(z)
x.toString
z=new W.Q(x)
w=z.ga4(z)
y.toString
w.toString
new W.Q(y).N(0,new W.Q(w))
return y},
"%":"HTMLTableRowElement"},
mk:{"^":"v;",
X:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.X(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.ga4(z)
y.toString
x.toString
new W.Q(y).N(0,new W.Q(x))
return y},
"%":"HTMLTableSectionElement"},
dr:{"^":"v;",$isdr:1,"%":"HTMLTemplateElement"},
ml:{"^":"v;K:name=","%":"HTMLTextAreaElement"},
mn:{"^":"jg;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bs]},
$iso:1,
$aso:function(){return[W.bs]},
$ask:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$asl:function(){return[W.bs]},
"%":"TextTrackCueList"},
mo:{"^":"e2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.br]},
$iso:1,
$aso:function(){return[W.br]},
$ask:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$asl:function(){return[W.br]},
"%":"TextTrackList"},
mp:{"^":"f;i:length=","%":"TimeRanges"},
mq:{"^":"jl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bt]},
$iso:1,
$aso:function(){return[W.bt]},
$ask:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$asl:function(){return[W.bt]},
"%":"TouchList"},
mr:{"^":"f;i:length=","%":"TrackDefaultList"},
mu:{"^":"f;",
ev:[function(a){return a.parentNode()},"$0","gaq",1,0,4],
e9:[function(a){return a.previousNode()},"$0","gaT",1,0,4],
"%":"TreeWalker"},
dH:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mw:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
my:{"^":"f;m:x=,E:z=","%":"VRStageBoundsPoint"},
mz:{"^":"h1;G:height},H:width}","%":"HTMLVideoElement"},
mA:{"^":"B;i:length=","%":"VideoTrackList"},
b3:{"^":"Z;",
gdV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isb3:1,
"%":"WheelEvent"},
i_:{"^":"B;",
gdG:function(a){var z,y
z=P.aR
y=new P.aj(0,$.x,null,[z])
this.dj(a)
this.dr(a,W.e8(new W.i0(new P.jc(y,[z]))))
return y},
dr:function(a,b){return a.requestAnimationFrame(H.a8(b,1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
i0:{"^":"i:0;a",
$1:function(a){this.a.dQ(0,a)}},
mB:{"^":"B;"},
mF:{"^":"t;K:name=,bo:namespaceURI=","%":"Attr"},
mG:{"^":"jr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$ask:function(){return[W.Y]},
$ish:1,
$ash:function(){return[W.Y]},
$asl:function(){return[W.Y]},
"%":"CSSRuleList"},
mH:{"^":"fv;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
I:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa6)return!1
return a.left===z.gbY(b)&&a.top===z.gcb(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dS(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcc:function(a){return new P.ag(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mI:{"^":"jt;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bg]},
$iso:1,
$aso:function(){return[W.bg]},
$ask:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$asl:function(){return[W.bg]},
"%":"GamepadList"},
mL:{"^":"jv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mM:{"^":"fc;",
T:function(a){return a.clone()},
"%":"Request"},
mN:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b1]},
$iso:1,
$aso:function(){return[W.b1]},
$ask:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$asl:function(){return[W.b1]},
"%":"SpeechRecognitionResultList"},
mO:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bq]},
$iso:1,
$aso:function(){return[W.bq]},
$ask:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$asl:function(){return[W.bq]},
"%":"StyleSheetList"},
i8:{"^":"bY;dk:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gO(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gO:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbo(v)==null)y.push(u.gK(v))}return y},
$asbY:function(){return[P.m,P.m]},
$asP:function(){return[P.m,P.m]}},
ij:{"^":"i8;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gO(this).length}},
il:{"^":"dm;a,b,c,$ti",
c_:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.D(this,0))}},
ah:{"^":"il;a,b,c,$ti"},
im:{"^":"hK;a,b,c,d,e,$ti",
d6:function(a,b,c,d,e){this.dB()},
dM:function(a){if(this.b==null)return
this.dC()
this.b=null
this.d=null
return},
dB:function(){var z=this.d
if(z!=null&&this.a<=0)J.ev(this.b,this.c,z,!1)},
dC:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eu(x,this.c,z,!1)}},
p:{
ai:function(a,b,c,d,e){var z=c==null?null:W.e8(new W.io(c))
z=new W.im(0,a,b,z,!1,[e])
z.d6(a,b,c,!1,e)
return z}}},
io:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
c5:{"^":"c;cn:a<",
d8:function(a){var z,y
z=$.$get$c6()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.L[y],W.k0())
for(y=0;y<12;++y)z.j(0,C.p[y],W.k1())}},
a8:function(a){return $.$get$dQ().A(0,W.az(a))},
a2:function(a,b,c){var z,y,x
z=W.az(a)
y=$.$get$c6()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.j0(z,window.location)
y=new W.c5(y)
y.d8(a)
return y},
mJ:[function(a,b,c,d){return!0},"$4","k0",16,0,9],
mK:[function(a,b,c,d){var z,y,x,w,v
z=d.gcn()
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","k1",16,0,9]}},
l:{"^":"c;$ti",
gM:function(a){return new W.cU(a,this.gi(a),-1,null,[H.b6(this,a,"l",0)])}},
dc:{"^":"c;a",
a8:function(a){return C.b.by(this.a,new W.hf(a))},
a2:function(a,b,c){return C.b.by(this.a,new W.he(a,b,c))}},
hf:{"^":"i:0;a",
$1:function(a){return a.a8(this.a)}},
he:{"^":"i:0;a,b,c",
$1:function(a){return a.a2(this.a,this.b,this.c)}},
j1:{"^":"c;cn:d<",
da:function(a,b,c,d){var z,y,x
this.a.N(0,c)
z=b.aV(0,new W.j2())
y=b.aV(0,new W.j3())
this.b.N(0,z)
x=this.c
x.N(0,C.N)
x.N(0,y)},
a8:function(a){return this.a.A(0,W.az(a))},
a2:["cJ",function(a,b,c){var z,y
z=W.az(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dF(c)
else if(y.A(0,"*::"+b))return this.d.dF(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
j2:{"^":"i:0;",
$1:function(a){return!C.b.A(C.p,a)}},
j3:{"^":"i:0;",
$1:function(a){return C.b.A(C.p,a)}},
jd:{"^":"j1;e,a,b,c,d",
a2:function(a,b,c){if(this.cJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cr(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
p:{
e0:function(){var z=P.m
z=new W.jd(P.bW(C.o,z),P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z),null)
z.da(null,new H.h_(C.o,new W.je(),[H.D(C.o,0),null]),["TEMPLATE"],null)
return z}}},
je:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jb:{"^":"c;",
a8:function(a){var z=J.p(a)
if(!!z.$isdi)return!1
z=!!z.$isz
if(z&&W.az(a)==="foreignObject")return!1
if(z)return!0
return!1},
a2:function(a,b,c){if(b==="is"||C.i.cC(b,"on"))return!1
return this.a8(a)}},
cU:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aU(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
ic:{"^":"c;a",$isB:1,p:{
id:function(a){if(a===window)return a
else return new W.ic(a)}}},
db:{"^":"c;"},
lT:{"^":"c;"},
mv:{"^":"c;"},
j0:{"^":"c;a,b"},
e3:{"^":"c;a",
b2:function(a){new W.jo(this).$2(a,null)},
ac:function(a,b){if(b==null)J.cw(a)
else b.removeChild(a)},
du:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cr(a)
x=y.gdk().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.T(t)}v="element unprintable"
try{v=J.ax(a)}catch(t){H.T(t)}try{u=W.az(a)
this.dt(a,b,z,v,u,y,x)}catch(t){if(H.T(t) instanceof P.ac)throw t
else{this.ac(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dt:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ac(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a8(a)){this.ac(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a2(a,"is",g)){this.ac(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gO(f)
y=H.A(z.slice(0),[H.D(z,0)])
for(x=f.gO(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.a2(a,J.f_(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.p(a).$isdr)this.b2(a.content)}},
jo:{"^":"i:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.du(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ac(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eO(z)}catch(w){H.T(w)
v=z
if(x){u=J.e(v)
if(u.gaq(v)!=null){u.gaq(v)
u.gaq(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ib:{"^":"f+fm;"},
ie:{"^":"f+k;"},
ig:{"^":"ie+l;"},
ih:{"^":"f+k;"},
ii:{"^":"ih+l;"},
iq:{"^":"f+k;"},
ir:{"^":"iq+l;"},
iE:{"^":"f+k;"},
iF:{"^":"iE+l;"},
iL:{"^":"f+P;"},
iM:{"^":"f+P;"},
iN:{"^":"f+k;"},
iO:{"^":"iN+l;"},
iP:{"^":"f+k;"},
iQ:{"^":"iP+l;"},
iT:{"^":"f+k;"},
iU:{"^":"iT+l;"},
j_:{"^":"f+P;"},
dY:{"^":"B+k;"},
dZ:{"^":"dY+l;"},
j4:{"^":"f+k;"},
j5:{"^":"j4+l;"},
j8:{"^":"f+P;"},
jf:{"^":"f+k;"},
jg:{"^":"jf+l;"},
e1:{"^":"B+k;"},
e2:{"^":"e1+l;"},
jk:{"^":"f+k;"},
jl:{"^":"jk+l;"},
jq:{"^":"f+k;"},
jr:{"^":"jq+l;"},
js:{"^":"f+k;"},
jt:{"^":"js+l;"},
ju:{"^":"f+k;"},
jv:{"^":"ju+l;"},
jw:{"^":"f+k;"},
jx:{"^":"jw+l;"},
jy:{"^":"f+k;"},
jz:{"^":"jy+l;"}}],["","",,P,{"^":"",
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.O()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jS:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cq(a,new P.jT(z))
return z},
cQ:function(){var z=$.cP
if(z==null){z=J.bE(window.navigator.userAgent,"Opera",0)
$.cP=z}return z},
fr:function(){var z,y
z=$.cM
if(z!=null)return z
y=$.cN
if(y==null){y=J.bE(window.navigator.userAgent,"Firefox",0)
$.cN=y}if(y)z="-moz-"
else{y=$.cO
if(y==null){y=P.cQ()!==!0&&J.bE(window.navigator.userAgent,"Trident/",0)
$.cO=y}if(y)z="-ms-"
else z=P.cQ()===!0?"-o-":"-webkit-"}$.cM=z
return z},
jT:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",m7:{"^":"B;P:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},ms:{"^":"B;P:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
kf:function(a){return Math.sqrt(a)},
dR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ag:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
I:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ag))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a2(this.a)
y=J.a2(this.b)
return P.iG(P.dR(P.dR(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.ag(y,C.a.l(z,x),this.$ti)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.u(y)
return new P.ag(z-x,w-y,this.$ti)}},
iV:{"^":"c;$ti"},
a6:{"^":"iV;$ti"}}],["","",,P,{"^":"",kU:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},kV:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},kW:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},kX:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},kY:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},kZ:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},l_:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},l0:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},l1:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},l2:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},l3:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},l4:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},l5:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},l6:{"^":"z;m:x=,n:y=,E:z=","%":"SVGFEPointLightElement"},l7:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},l8:{"^":"z;m:x=,n:y=,E:z=","%":"SVGFESpotLightElement"},l9:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},la:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},lf:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},li:{"^":"aB;m:x=,n:y=","%":"SVGForeignObjectElement"},fI:{"^":"aB;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aB:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lq:{"^":"aB;m:x=,n:y=","%":"SVGImageElement"},lv:{"^":"iI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.d4]},
$ish:1,
$ash:function(){return[P.d4]},
$asl:function(){return[P.d4]},
"%":"SVGLengthList"},lB:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},lC:{"^":"f;V:a=,S:b=,a_:c=","%":"SVGMatrix"},lU:{"^":"iS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.df]},
$ish:1,
$ash:function(){return[P.df]},
$asl:function(){return[P.df]},
"%":"SVGNumberList"},lZ:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},m0:{"^":"f;m:x=,n:y=","%":"SVGPoint"},m1:{"^":"f;i:length=","%":"SVGPointList"},m3:{"^":"f;m:x=,n:y=","%":"SVGRect"},m4:{"^":"fI;m:x=,n:y=","%":"SVGRectElement"},di:{"^":"z;",$isdi:1,"%":"SVGScriptElement"},mh:{"^":"ja;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"SVGStringList"},z:{"^":"an;",
X:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.db])
z.push(W.dP(null))
z.push(W.e0())
z.push(new W.jb())
c=new W.e3(new W.dc(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dT(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.Q(w)
u=z.ga4(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gc3:function(a){return new W.ah(a,"mousedown",!1,[W.Z])},
gc4:function(a){return new W.ah(a,"mousemove",!1,[W.Z])},
gc5:function(a){return new W.ah(a,"mouseup",!1,[W.Z])},
gc6:function(a){return new W.ah(a,"mousewheel",!1,[W.b3])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mi:{"^":"aB;m:x=,n:y=","%":"SVGSVGElement"},hT:{"^":"aB;","%":"SVGTextPathElement;SVGTextContentElement"},mm:{"^":"hT;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mt:{"^":"jn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.du]},
$ish:1,
$ash:function(){return[P.du]},
$asl:function(){return[P.du]},
"%":"SVGTransformList"},mx:{"^":"aB;m:x=,n:y=","%":"SVGUseElement"},iH:{"^":"f+k;"},iI:{"^":"iH+l;"},iR:{"^":"f+k;"},iS:{"^":"iR+l;"},j9:{"^":"f+k;"},ja:{"^":"j9+l;"},jm:{"^":"f+k;"},jn:{"^":"jm+l;"}}],["","",,P,{"^":"",kn:{"^":"f;i:length=","%":"AudioBuffer"},ko:{"^":"i9;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gO:function(a){var z=H.A([],[P.m])
this.B(a,new P.fa(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"AudioParamMap"},fa:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},kp:{"^":"f;aQ:enabled=","%":"AudioTrack"},kq:{"^":"B;i:length=","%":"AudioTrackList"},fb:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lW:{"^":"fb;i:length=","%":"OfflineAudioContext"},i9:{"^":"f+P;"}}],["","",,P,{"^":"",m5:{"^":"f;",
bw:function(a,b){return a.activeTexture(b)},
bz:function(a,b,c){return a.attachShader(b,c)},
bA:function(a,b,c){return a.bindBuffer(b,c)},
bC:function(a,b,c){return a.bindFramebuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bI:function(a,b){return a.clear(b)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.R(a.getContextAttributes())},
aX:function(a,b){return a.getProgramInfoLog(b)},
aY:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
b4:function(a,b,c){return a.shaderSource(b,c)},
b6:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cr:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m6:{"^":"f;",
dI:function(a,b){return a.beginTransformFeedback(b)},
dL:function(a,b){return a.bindVertexArray(b)},
dU:function(a){return a.createVertexArray()},
dW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dY:function(a){return a.endTransformFeedback()},
el:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
em:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bw:function(a,b){return a.activeTexture(b)},
bz:function(a,b,c){return a.attachShader(b,c)},
bA:function(a,b,c){return a.bindBuffer(b,c)},
bC:function(a,b,c){return a.bindFramebuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bI:function(a,b){return a.clear(b)},
bJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bK:function(a,b){return a.compileShader(b)},
bL:function(a){return a.createBuffer()},
bM:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.R(a.getContextAttributes())},
aX:function(a,b){return a.getProgramInfoLog(b)},
aY:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
b4:function(a,b,c){return a.shaderSource(b,c)},
b6:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cr:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mf:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.R(a.item(b))},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.bX]},
$ish:1,
$ash:function(){return[P.bX]},
$asl:function(){return[P.bX]},
"%":"SQLResultSetRowList"},j6:{"^":"f+k;"},j7:{"^":"j6+l;"}}],["","",,G,{"^":"",
i2:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.m])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.b.af(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bN(a,b)
z.b4(a,y,c)
z.bK(a,y)
x=z.b_(a,y,35713)
if(x!=null&&J.K(x,!1)){w=z.aZ(a,y)
P.am("E:Compilation failed:")
P.am("E:"+G.i2(c))
P.am("E:Failure:")
P.am(C.i.l("E:",w))
throw H.a(w)}return y},
cV:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bH(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bI(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cu(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fF:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bH(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bI(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fG:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bH(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bI(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cu(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.eR(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fE:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aU(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aU(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aU(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aU(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ae(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.G]],v=[P.aP],u=[T.a0],t=[T.j],s=[T.q];y.t();){r=y.d
if(!x.an(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eh>0)H.bC("I: "+q)
continue}p=z.h(0,r)
switch($.$get$V().h(0,r).a){case"vec2":b.a9(r,G.fF(H.b8(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a9(r,G.cV(H.b8(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a9(r,G.fG(H.b8(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a9(r,new Float32Array(H.bv(H.b8(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a9(r,G.fE(H.b8(p,"$ish",w,"$ash"),null),4)
break}}},
cY:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.O()
w=J.eE(z.a)
v=new G.h2(z,w,4,x,y,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)
u=G.cV(c.d,null)
x.j(0,"aPosition",J.bF(z.a))
v.ch=u
v.bc("aPosition",u,3)
t=$.$get$V().h(0,"aPosition")
if(t==null)H.S("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.b9(z.a,w)
z.bV(0,s,0)
z.cq(0,x.h(0,"aPosition"),s,t.bd(),5126,!1,0,0)
y=c.cS()
v.y=J.bF(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bv(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bv(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bv(y))
v.Q=5125}J.b9(z.a,w)
y=v.y
x=v.cx
J.bD(z.a,34963,y)
J.cm(z.a,34963,x,35048)
G.iC(c,v)
return v},
aH:{"^":"c;aQ:c>"},
c3:{"^":"aH;d,a,b,c",
be:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.dG(H.jY(this),null))+"}["+this.a+"]"],[P.m])
for(y=this.d,x=new H.ae(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.b.af(z,"\n")}},
fd:{"^":"dj;"},
ff:{"^":"c;a,b",
bV:function(a,b,c){J.eK(this.a,b)
if(c>0)J.f5(this.a,b,c)},
cq:function(a,b,c,d,e,f,g,h){J.bD(this.a,34962,b)
J.f6(this.a,c,d,e,!1,g,h)}},
fH:{"^":"c;a,b,c,d,e"},
aA:{"^":"c;V:a>,S:b>,a_:c>",p:{
C:function(a,b,c){return new G.aA(a,b,c)}}},
fD:{"^":"c;V:a>,S:b>,a_:c>,d"},
cX:{"^":"c;a,b,c,d,e",
aj:function(a){switch($.$get$V().h(0,a).a){case"vec2":this.e.j(0,a,H.A([],[T.q]))
break
case"vec3":this.e.j(0,a,H.A([],[T.j]))
break
case"vec4":this.e.j(0,a,H.A([],[T.a0]))
break
case"float":this.e.j(0,a,H.A([],[P.aP]))
break
case"uvec4":this.e.j(0,a,H.A([],[[P.h,P.G]]))
break}},
cL:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.fD(z,z+1,z+2,z+3))},
cM:function(a){var z,y
for(z=this.d,y=0;y<24;++y)z.push(a[y].T(0))},
cN:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.aA(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.cn(a[x]))},
b9:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x)z.push(b[x].T(0))},
ba:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x)z.push(J.cn(b[x]))},
cS:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.G])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.d(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.d(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.d(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.d(w,u)
w[u]=x
r=u+1
if(r>=v)return H.d(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.d(w,r)
w[r]=p
r=u+3
if(r>=v)return H.d(w,r)
w[r]=x
x=u+4
if(x>=v)return H.d(w,x)
w[x]=p
p=u+5
if(p>=v)return H.d(w,p)
w[p]=q.d
u+=6}return w},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ae(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$V().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.af(z," ")}},
dt:{"^":"c;a,b,c"},
ds:{"^":"c;a,b,c"},
h0:{"^":"c3;d,a,b,c"},
h2:{"^":"aH;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bc:function(a,b,c){var z,y
C.i.bl(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bD(z.a,34962,y)
J.cm(z.a,34962,b,35048)},
cT:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a9:function(a,b,c){var z,y,x,w,v
z=J.co(a,0)===105
if(z&&this.z===0)this.z=C.c.cK(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bF(x.a))
this.bc(a,b,c)
w=$.$get$V().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b9(x.a,this.e)
x.bV(0,v,z?1:0)
x.cq(0,y.h(0,a),v,w.bd(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ae(z,z.r,null,null,[H.D(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.af(y,"  ")}},
hi:{"^":"c3;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cO:function(a,b){var z
if(typeof a!=="number")return a.ep()
if(typeof b!=="number")return H.u(b)
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
be:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.j(new Float32Array(3))
u.v(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.q(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.p(t)
x=!!y.$isa0
q=x?y.gas(t):1
if(!!y.$isj){p=y.gm(t)
s=y.gn(t)
r=y.gE(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gE(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.u(t)
x=z[4]
if(typeof s!=="number")return H.u(s)
w=z[8]
if(typeof r!=="number")return H.u(r)
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
c.q(this.db)
c.c0(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hw:{"^":"aH;d,e,f,r,x,y,z,Q,ch,a,b,c",
cY:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.cv(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.cv(w.a,v,t))}},
d0:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ae(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.an(0,v))x.push(v)}for(z=this.x,y=new P.c7(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
d4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ae(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.co(t,0)){case 117:if(w.an(0,t)){s=b.h(0,t)
if(v.an(0,t))H.bC("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$V().h(0,t)
if(r==null)H.S("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bJ(x.a,q,s)
else if(!!J.p(s).$isfL)J.f3(x.a,q,s)
break
case"float":if(r.c===0)J.f1(x.a,q,s)
else if(!!J.p(s).$isbR)J.f2(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ab(s,"$isI").a
J.cC(x.a,q,!1,p)}else if(!!J.p(s).$isbR)J.cC(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ab(s,"$isa5").a
J.cB(x.a,q,!1,p)}else if(!!J.p(s).$isbR)J.cB(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cA(o,q,H.ab(s,"$isa0").a)
else J.cA(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cz(o,q,H.ab(s,"$isj").a)
else J.cz(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cy(o,q,H.ab(s,"$isq").a)
else J.cy(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cj(x.a,33984+p)
p=H.ab(s,"$ishU").cU()
J.cl(x.a,3553,p)
p=this.ch
J.bJ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cj(x.a,33984+p)
p=H.ab(s,"$ishU").cU()
J.cl(x.a,34067,p)
p=this.ch
J.bJ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bC("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.K(s,!0)
o=x.a
if(p)J.ba(o,2929)
else J.bG(o,2929)
break
case"cStencilFunc":H.ab(s,"$isdt")
p=s.a
o=x.a
if(p===1281)J.bG(o,2960)
else{J.ba(o,2960)
o=s.b
n=s.c
J.eZ(x.a,p,o,n)}break
case"cDepthWrite":J.eF(x.a,s)
break
case"cBlendEquation":H.ab(s,"$isds")
p=s.a
o=x.a
if(p===1281)J.bG(o,3042)
else{J.ba(o,3042)
o=s.b
n=s.c
J.ez(x.a,o,n)
J.ey(x.a,p)}break}++u
break}}m=P.fw(0,0,0,Date.now()-new P.cL(z,!1).a,0,0)
""+u
m.k(0)},
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.f4(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bi()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x){w=b[x]
this.d4(w.a,w.be())}y=this.Q
y.ad(0)
for(v=a.cy,u=new H.ae(v,v.r,null,null,[H.D(v,0)]),u.c=v.e;u.t();)y.L(0,u.d)
t=this.d0()
if(t.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b9(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cT()
u=a.Q
r=a.z
if(s)J.ew(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eJ(q,y,v,u,0,r)
else J.eI(q,y,v,u,0)}else{u=z.a
if(r>1)J.eH(u,y,0,v,r)
else J.eG(u,y,0,v)}if(s)J.eL(z.a)},
p:{
dh:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.U(null,null,null,P.m)
y=c.b
x=d.b
w=c.f
v=J.eD(b.a)
u=G.dL(b.a,35633,y)
J.ck(b.a,v,u)
t=G.dL(b.a,35632,x)
J.ck(b.a,v,t)
if(w.length>0)J.f0(b.a,v,w,35980)
J.eX(b.a,v)
if(J.eW(b.a,v,35714)!==!0)H.S(J.eV(b.a,v))
z=new G.hw(b,c,d,v,P.bW(c.c,null),P.O(),P.O(),z,null,a,!1,!0)
z.cY(a,b,c,d)
return z}}},
w:{"^":"c;a,b,c",
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hC:{"^":"c;a,b,c,d,e,f,r,x",
b8:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.E)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.b.au(y)},
bb:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.b.au(z)},
ai:function(a){var z,y,x
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x])
C.b.au(y)},
bf:function(a,b){this.b=this.d5(!0,a,b)},
aw:function(a){return this.bf(a,null)},
d5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
s=$.$get$V().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(c!=null)C.b.N(w,c)
w.push("void main(void) {")
C.b.N(w,b)
w.push("}")
return C.b.af(w,"\n")},
p:{
bm:function(a){return new G.hC(a,null,[],[],[],[],0,P.O())}}},
dj:{"^":"aH;",
cz:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",hv:{"^":"hu;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
ec:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sH(z,y)
w.sG(z,x)
P.am("size change "+H.b(y)+" "+H.b(x))
this.dx.cO(y,x)
this.z=y
this.Q=x},"$1","geb",4,0,17]},hH:{"^":"c;",
cZ:function(a,b,c){var z,y,x
if(a==null)throw H.a("no element provided")
this.a=a
z=a.style
z.color=b
z.fontFamily="Helvetica,Arial,sans-serif"
z.fontSize="9px"
z.lineHeight="15px"
z.padding="0 0 3px 3px"
z.textAlign="left"
z.background=c
z=document
y=z.createElement("div")
x=y.style
x.fontWeight="bold"
y.textContent="@@@@"
this.b=y
this.a.appendChild(y)
x=this.d9(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d9:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.ik("span",null)
y=J.cs(v)
J.e(y).sH(y,"1px")
C.n.sG(y,""+d+"px")
C.n.sdZ(y,"left")
x=C.n.bk(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hI:{"^":"hH;e,f,a,b,c,d",
d2:function(a,b){var z,y,x,w,v;++this.e
if(J.aT(J.et(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ek(z,2)+" fps"
y=this.c;(y&&C.C).cv(y,b)
x=C.c.a7(30*C.t.dN(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cs(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d1:function(a){return this.d2(a,"")}}}],["","",,A,{"^":"",
ef:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eM(b)!==!0)return
z=b.d3(c)
b.k(0)
y=C.b.ge7(e)
x=b.db
w=b.dx
v=new Float32Array(9)
u=w.a
v[0]=u[0]
v[1]=u[1]
v[2]=u[2]
v[3]=u[4]
v[4]=u[5]
v[5]=u[6]
v[6]=u[8]
v[7]=u[9]
v[8]=u[10]
x.dS(new T.a5(v))
v=x.a
t=v[3]
v[3]=v[1]
v[1]=t
t=v[6]
v[6]=v[2]
v[2]=t
t=v[7]
v[7]=v[5]
v[5]=t
y=y.d
y.j(0,"uTransformationMatrix",b.d)
y.j(0,"uModelMatrix",w)
y.j(0,"uNormalMatrix",x)
e.push(b.ch)
a.cR(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.E)(y),++s)A.ef(a,y[s],z,d,e)},
da:{"^":"dj;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
d3:function(a){var z=this.dx
z.q(a)
z.c0(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
c_:{"^":"aH;d,e,c1:f>,a,b,c"},
hu:{"^":"aH;",
cX:function(a,b,c){if(this.d==null)this.d=new G.fH(this.e,null,null,null,null)},
cQ:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ex(v.a,36160,z)
J.f7(v.a,this.x,this.y,x,w)
if(y!==0)J.eA(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.c3(P.O(),"transforms",!1,!0))
r=new T.I(new Float32Array(16))
r.Z()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.E)(x),++q)A.ef(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}},
cP:function(){return this.cQ(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fn:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.j(new Float32Array(3))
x.v(z,y,d2)
w=new T.j(new Float32Array(3))
w.v(d0,y,d2)
v=new T.j(new Float32Array(3))
v.v(d0,d1,d2)
u=new T.j(new Float32Array(3))
u.v(z,d1,d2)
t=-d2
s=new T.j(new Float32Array(3))
s.v(z,y,t)
r=new T.j(new Float32Array(3))
r.v(z,d1,t)
q=new T.j(new Float32Array(3))
q.v(d0,d1,t)
p=new T.j(new Float32Array(3))
p.v(d0,y,t)
o=new T.j(new Float32Array(3))
o.v(z,d1,t)
n=new T.j(new Float32Array(3))
n.v(z,d1,d2)
m=new T.j(new Float32Array(3))
m.v(d0,d1,d2)
l=new T.j(new Float32Array(3))
l.v(d0,d1,t)
k=new T.j(new Float32Array(3))
k.v(d0,y,d2)
j=new T.j(new Float32Array(3))
j.v(z,y,d2)
i=new T.j(new Float32Array(3))
i.v(z,y,t)
h=new T.j(new Float32Array(3))
h.v(d0,y,t)
g=new T.j(new Float32Array(3))
g.v(d0,y,t)
f=new T.j(new Float32Array(3))
f.v(d0,d1,t)
e=new T.j(new Float32Array(3))
e.v(d0,d1,d2)
d=new T.j(new Float32Array(3))
d.v(d0,y,d2)
c=new T.j(new Float32Array(3))
c.v(z,y,t)
b=new T.j(new Float32Array(3))
b.v(z,y,d2)
y=new T.j(new Float32Array(3))
y.v(z,d1,d2)
a=new T.j(new Float32Array(3))
a.v(z,d1,t)
z=new T.q(new Float32Array(2))
z.w(c7,c9)
t=new T.q(new Float32Array(2))
t.w(c6,c9)
a0=new T.q(new Float32Array(2))
a0.w(c6,c8)
a1=new T.q(new Float32Array(2))
a1.w(c7,c8)
a2=new T.q(new Float32Array(2))
a2.w(c6,c9)
a3=new T.q(new Float32Array(2))
a3.w(c6,c8)
a4=new T.q(new Float32Array(2))
a4.w(c7,c8)
a5=new T.q(new Float32Array(2))
a5.w(c7,c9)
a6=new T.q(new Float32Array(2))
a6.w(c7,c8)
a7=new T.q(new Float32Array(2))
a7.w(c7,c9)
a8=new T.q(new Float32Array(2))
a8.w(c6,c9)
a9=new T.q(new Float32Array(2))
a9.w(c6,c8)
b0=new T.q(new Float32Array(2))
b0.w(c6,c8)
b1=new T.q(new Float32Array(2))
b1.w(c7,c8)
b2=new T.q(new Float32Array(2))
b2.w(c7,c9)
b3=new T.q(new Float32Array(2))
b3.w(c6,c9)
b4=new T.q(new Float32Array(2))
b4.w(c6,c9)
b5=new T.q(new Float32Array(2))
b5.w(c6,c8)
b6=new T.q(new Float32Array(2))
b6.w(c7,c8)
b7=new T.q(new Float32Array(2))
b7.w(c7,c9)
b8=new T.q(new Float32Array(2))
b8.w(c7,c9)
b9=new T.q(new Float32Array(2))
b9.w(c6,c9)
c0=new T.q(new Float32Array(2))
c0.w(c6,c8)
c1=new T.q(new Float32Array(2))
c1.w(c7,c8)
c2=new G.cX(!1,[],[],[],P.O())
c2.aj("aTexUV")
c2.aj("aNormal")
c2.cL(6)
c2.cM([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.b9("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dM(),c3<6;++c3){c4=z[c3]
c2.ba("aNormal",[c4,c4,c4,c4])}return c2},
fJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.N(z,$.$get$cZ())
C.b.N(y,$.$get$d_())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.E)(z),++u){t=z[u]
s=J.e(t)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
q=new T.j(new Float32Array(3))
q.q(r)
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
q.L(0,y[r])
q.R(0,0.5)
q.F(0)
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
p=new T.j(new Float32Array(3))
p.q(r)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
p.L(0,y[r])
p.R(0,0.5)
p.F(0)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
o=new T.j(new Float32Array(3))
o.q(r)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
o.L(0,y[r])
o.R(0,0.5)
o.F(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.aA(s.gV(t),n,l))
w.push(new G.aA(s.gS(t),m,n))
w.push(new G.aA(s.ga_(t),l,m))
w.push(new G.aA(n,m,l))}}k=new G.cX(!1,[],[],[],P.O())
k.aj("aTexUV")
k.aj("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.E)(z),++u){t=z[u]
s=J.e(t)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
j=y[r]
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
i=y[r]
s=s.ga_(t)
if(s>>>0!==s||s>=y.length)return H.d(y,s)
h=y[s]
s=J.e(j)
r=s.gE(j)
g=s.gm(j)
g=Math.atan2(H.a7(r),H.a7(g))
s=Math.acos(H.a7(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.e(i)
g=s.gE(i)
f=s.gm(i)
f=Math.atan2(H.a7(g),H.a7(f))
s=Math.acos(H.a7(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.e(h)
f=s.gE(h)
e=s.gm(h)
e=Math.atan2(H.a7(f),H.a7(e))
s=Math.acos(H.a7(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.ba("aNormal",[j,i,h])
k.cN([j.a0(b),i.a0(b),h.a0(b)])
k.b9("aTexUV",[new T.q(r),new T.q(g),new T.q(f)])}return k}}],["","",,D,{"^":"",fT:{"^":"c;a,b,c",
cV:function(a){var z
a=document
z=W.bi
W.ai(a,"keydown",new D.fV(this),!1,z)
W.ai(a,"keyup",new D.fW(this),!1,z)},
p:{
fU:function(a){var z=P.G
z=new D.fT(P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z))
z.cV(a)
return z}}},fV:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.L(0,J.ct(a))
z.b.L(0,a.which)}},fW:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.c7(0,J.ct(a))
z.c.L(0,a.which)}},h5:{"^":"c;a,b,c,d,e,f,r,x",
cW:function(a){var z,y
z=J.e(a)
y=z.gc4(a)
W.ai(y.a,y.b,new D.h7(this),!1,H.D(y,0))
y=z.gc3(a)
W.ai(y.a,y.b,new D.h8(this),!1,H.D(y,0))
y=z.gc5(a)
W.ai(y.a,y.b,new D.h9(this),!1,H.D(y,0))
z=z.gc6(a)
W.ai(z.a,z.b,new D.ha(this),!1,H.D(z,0))},
p:{
h6:function(a){var z=P.G
z=new D.h5(P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z),0,0,0,0,0)
z.cW(a)
return z}}},h7:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ar(a)
y=this.a
y.r=z.gc2(a).a
y.x=z.gc2(a).b
y.d=a.movementX
y.e=a.movementY}},h8:{"^":"i:5;a",
$1:function(a){var z=J.e(a)
z.ar(a)
P.am("BUTTON "+H.b(z.gbH(a)))
z=this.a
z.a.L(0,a.button)
z.b.L(0,a.button)}},h9:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ar(a)
y=this.a
y.a.c7(0,z.gbH(a))
y.c.L(0,a.button)}},ha:{"^":"i:18;a",
$1:function(a){var z=J.e(a)
z.ar(a)
this.a.f=z.gdV(a)}},hh:{"^":"fd;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b7:function(a){var z,y
z=C.O.e_(a,0,new A.k_())
if(typeof z!=="number")return H.u(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k_:{"^":"i:19;",
$2:function(a,b){var z,y
z=J.av(a,J.a2(b))
if(typeof z!=="number")return H.u(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a5:{"^":"c;aF:a<",
q:function(a){var z,y
z=a.gaF()
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.d(z,b)
return z[b]},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.b7(this.a)},
Y:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.d(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.d(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.d(y,x)
z[2]=y[x]
return new T.j(z)},
T:function(a){var z=new T.a5(new Float32Array(9))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.a5(z)
y.q(this)
x=b.gaF()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
z[4]=C.a.l(z[4],x.h(0,4))
z[5]=C.a.l(z[5],x.h(0,5))
z[6]=C.a.l(z[6],x.h(0,6))
z[7]=C.a.l(z[7],x.h(0,7))
z[8]=C.a.l(z[8],x.h(0,8))
return y},
J:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.a5(z)
y.q(this)
x=b.gaF()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
return y},
dS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.q(a)
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
return m},
a0:function(a){var z,y
z=new Float32Array(9)
y=new T.a5(z)
y.q(this)
z[0]=z[0]*a
z[1]=z[1]*a
z[2]=z[2]*a
z[3]=z[3]*a
z[4]=z[4]*a
z[5]=z[5]*a
z[6]=z[6]*a
z[7]=z[7]*a
z[8]=z[8]*a
return y}},I:{"^":"c;aG:a<",
q:function(a){var z,y
z=a.gaG()
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n[3] "+this.Y(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.b7(this.a)},
Y:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.d(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.d(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.d(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.d(y,x)
z[3]=y[x]
return new T.a0(z)},
T:function(a){var z=new T.I(new Float32Array(16))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.I(z)
y.q(this)
x=b.gaG()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
z[4]=C.a.l(z[4],x.h(0,4))
z[5]=C.a.l(z[5],x.h(0,5))
z[6]=C.a.l(z[6],x.h(0,6))
z[7]=C.a.l(z[7],x.h(0,7))
z[8]=C.a.l(z[8],x.h(0,8))
z[9]=C.a.l(z[9],x.h(0,9))
z[10]=C.a.l(z[10],x.h(0,10))
z[11]=C.a.l(z[11],x.h(0,11))
z[12]=C.a.l(z[12],x.h(0,12))
z[13]=C.a.l(z[13],x.h(0,13))
z[14]=C.a.l(z[14],x.h(0,14))
z[15]=C.a.l(z[15],x.h(0,15))
return y},
J:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.I(z)
y.q(this)
x=b.gaG()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
z[9]=z[9]-x[9]
z[10]=z[10]-x[10]
z[11]=z[11]-x[11]
z[12]=z[12]-x[12]
z[13]=z[13]-x[13]
z[14]=z[14]-x[14]
z[15]=z[15]-x[15]
return y},
b3:function(a,b,c,d){var z,y,x,w,v
if(typeof b==="number"){z=b
y=z
x=y}else{x=null
y=null
z=null}w=this.a
v=w[0]
if(typeof x!=="number")return H.u(x)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
v=w[4]
if(typeof y!=="number")return H.u(y)
w[4]=v*y
w[5]=w[5]*y
w[6]=w[6]*y
w[7]=w[7]*y
v=w[8]
if(typeof z!=="number")return H.u(z)
w[8]=v*z
w[9]=w[9]*z
w[10]=w[10]*z
w[11]=w[11]*z
w[12]=w[12]
w[13]=w[13]
w[14]=w[14]
w[15]=w[15]},
R:function(a,b){return this.b3(a,b,null,null)},
cu:function(a,b,c){var z=new T.I(new Float32Array(16))
z.q(this)
z.b3(0,a,b,c)
return z},
a0:function(a){return this.cu(a,null,null)},
Z:function(){var z=this.a
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
z[15]=m*e+l*a+k*a3+j*a7}},q:{"^":"c;bv:a<",
w:function(a,b){var z=this.a
z[0]=a
z[1]=b},
q:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.b7(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.q(z)
y.q(this)
x=b.gbv()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.q(z)
y.q(this)
x=b.gbv()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
R:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a0:function(a){var z=new T.q(new Float32Array(2))
z.q(this)
z.R(0,a)
return z},
T:function(a){var z=new T.q(new Float32Array(2))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},j:{"^":"c;aN:a<",
v:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.gaN()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.j){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.b7(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.j(z)
y.q(this)
x=b.gaN()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z=new T.j(new Float32Array(3))
z.q(this)
z.L(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gaS())},
gaS:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
F:function(a){var z,y,x
z=Math.sqrt(this.gaS())
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
bO:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.j(new Float32Array(3))
z.v(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
L:function(a,b){var z,y
z=b.gaN()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
R:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a0:function(a){var z=new T.j(new Float32Array(3))
z.q(this)
z.R(0,a)
return z},
T:function(a){var z=new T.j(new Float32Array(3))
z.q(this)
return z},
gS:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
p:{
F:function(a,b,c){var z=new T.j(new Float32Array(3))
z.v(a,b,c)
return z}}},a0:{"^":"c;aO:a<",
q:function(a){var z,y
z=a.gaO()
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a0){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.b7(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a0(z)
y.q(this)
x=b.gaO()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a0(z)
y.q(this)
x=b.gaO()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
R:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
a0:function(a){var z=new T.a0(new Float32Array(4))
z.q(this)
z.R(0,a)
return z},
T:function(a){var z=new T.a0(new Float32Array(4))
z.q(this)
return z},
gS:function(a){return this.a[2]},
gV:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gas:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
em:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z={}
y=document
x=new R.hI(0,0,null,null,null,null)
x.cZ(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=w.clientWidth
u=w.clientHeight
y=J.e(w)
y.sH(w,v)
y.sG(w,u)
t=new G.ff(null,w)
y=J.eT(w,"webgl2",P.d5(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
t.a=y
if(y==null)H.S(P.cT('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.b(J.eU(y))
if($.eh>0)P.am("I: "+s)
J.eB(y,0,0,0,1)
J.ba(y,2929)
y=new Float32Array(3)
s=D.fU(null)
r=D.h6(w)
q=new T.I(new Float32Array(16))
q.Z()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.hh(25,0,0,0,new T.j(y),-0.02,s,r,q,new T.j(p),new T.j(o),new T.j(n),new T.j(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.I(new Float32Array(16))
y.Z()
s=new T.I(new Float32Array(16))
s.Z()
l=new G.hi(m,50,1,0.1,1000,y,s,new T.I(new Float32Array(16)),P.O(),"perspective",!1,!0)
l.bg()
y=H.A([],[A.c_])
k=new R.hv(w,l,null,t,y,17664,0,0,0,0,"main",!1,!0)
k.cX("main",t,null)
k.ec(null)
W.ai(window,"resize",k.geb(),!1,W.ad)
s=G.dh("building",t,$.$get$eq(),$.$get$ep())
j=new A.c_(s,[l],[],"building",!1,!0)
y.push(j)
s=G.dh("sky",t,$.$get$ee(),$.$get$ed())
r=[]
y.push(new A.c_(s,[l],r,"sky",!1,!0))
y=P.O()
i=new G.h0(y,"mat",!1,!0)
y.j(0,"cDepthTest",!0)
y.j(0,"cDepthWrite",!0)
y.j(0,"cBlendEquation",$.$get$cE())
y.j(0,"cStencilFunc",$.$get$dl())
h=G.cY("icosahedron-3",s,B.fJ(3,1,!0))
y=new Float32Array(9)
s=new T.I(new Float32Array(16))
s.Z()
q=new T.I(new Float32Array(16))
q.Z()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
g=new Float32Array(3)
q.R(0,100)
r.push(new A.da(i,h,[],new T.a5(y),s,q,new T.j(p),new T.j(o),new T.j(n),new T.j(g),h.a,!1,!0))
f=new T.q(new Float32Array(2))
f.w(0.01,0.01)
e=B.fn(!0,0.99,0.01,0.99,0.01,1,2,1)
d=e.e.h(0,"aTexUV")
for(c=8;c<16;++c){if(c>=d.length)return H.d(d,c)
d[c].q(f)}b=G.cY("house",j.d,e)
for(y=j.f,s=b.a,a=-10;a<10;a+=4)for(a0=-10;a0<10;a0+=4){r=new Float32Array(9)
q=new T.I(new Float32Array(16))
q.Z()
p=new Float32Array(16)
o=new T.I(p)
o.Z()
n=new Float32Array(3)
g=new Float32Array(3)
a1=new Float32Array(3)
a2=new Float32Array(3)
p[12]=a
p[13]=0
p[14]=a0
y.push(new A.da(i,b,[],new T.a5(r),q,o,new T.j(n),new T.j(g),new T.j(a1),new T.j(a2),s,!1,!0))}z.a=0
new Q.kb(z,m,k,x).$1(0)},
kb:{"^":"i:20;a,b,c,d",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aQ(b2)
y.J(b2,z.a)
z.a=y.l(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b1()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b1()
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
if(typeof v!=="number")return v.b1()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dO(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.cz(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.j(new Float32Array(3))
o.v(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
m=u.J(0,t)
m.F(0)
l=o.bO(m)
l.F(0)
k=m.bO(l)
k.F(0)
t=l.aP(u)
n=k.aP(u)
u=m.aP(u)
j=l.a
i=j[0]
h=k.a
g=h[0]
f=m.a
e=f[0]
d=j[1]
c=h[1]
b=f[1]
j=j[2]
h=h[2]
f=f[2]
v[15]=1
v[14]=-u
v[13]=-n
v[12]=-t
v[11]=0
v[10]=f
v[9]=h
v[8]=j
v[7]=0
v[6]=b
v[5]=c
v[4]=d
v[3]=0
v[2]=e
v[1]=g
v[0]=i
v[12]=r
v[13]=q
v[14]=p
i=y.f
g=i.a
g[0]=v[2]
g[1]=v[6]
g[2]=v[10]
y=-y.k1
a=Math.sqrt(i.gaS())
r=g[0]/a
q=g[1]/a
p=g[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
g=q*a1
a5=r*p*a2+g
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-g
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
g=v[4]
i=v[8]
e=v[1]
d=v[5]
c=v[9]
b=v[2]
j=v[6]
h=v[10]
f=v[3]
t=v[7]
n=v[11]
v[0]=y*a3+g*a6+i*a9
v[1]=e*a3+d*a6+c*a9
v[2]=b*a3+j*a6+h*a9
v[3]=f*a3+t*a6+n*a9
v[4]=y*a4+g*a7+i*b0
v[5]=e*a4+d*a7+c*b0
v[6]=b*a4+j*a7+h*b0
v[7]=f*a4+t*a7+n*b0
v[8]=y*a5+g*a8+i*b1
v[9]=e*a5+d*a8+c*b1
v[10]=b*a5+j*a8+h*b1
v[11]=f*a5+t*a8+n*b1
w.c.ad(0)
w.b.ad(0)
x.e=0
x.d=0
x.f=0
x.c.ad(0)
x.b.ad(0)
this.c.cP()
C.a5.gdG(window).c9(this)
this.d.d1(z.a)}}},1]]
setupProgram(dart,0,0)
J.p=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.d1.prototype}if(typeof a=="string")return J.aF.prototype
if(a==null)return J.fR.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b5(a)}
J.jW=function(a){if(typeof a=="number")return J.aE.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b5(a)}
J.aa=function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b5(a)}
J.b4=function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b5(a)}
J.aQ=function(a){if(typeof a=="number")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.jX=function(a){if(typeof a=="number")return J.aE.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.ei=function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b5(a)}
J.av=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jW(a).l(a,b)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).I(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aQ(a).ag(a,b)}
J.aT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aQ(a).a3(a,b)}
J.et=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aQ(a).J(a,b)}
J.aU=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k9(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aa(a).h(a,b)}
J.eu=function(a,b,c,d){return J.e(a).dq(a,b,c,d)}
J.cj=function(a,b){return J.e(a).bw(a,b)}
J.ev=function(a,b,c,d){return J.e(a).bx(a,b,c,d)}
J.ck=function(a,b,c){return J.e(a).bz(a,b,c)}
J.ew=function(a,b){return J.e(a).dI(a,b)}
J.bD=function(a,b,c){return J.e(a).bA(a,b,c)}
J.ex=function(a,b,c){return J.e(a).bC(a,b,c)}
J.cl=function(a,b,c){return J.e(a).bD(a,b,c)}
J.b9=function(a,b){return J.e(a).dL(a,b)}
J.ey=function(a,b){return J.e(a).bE(a,b)}
J.ez=function(a,b,c){return J.e(a).bF(a,b,c)}
J.cm=function(a,b,c,d){return J.e(a).bG(a,b,c,d)}
J.eA=function(a,b){return J.b4(a).bI(a,b)}
J.eB=function(a,b,c,d,e){return J.e(a).bJ(a,b,c,d,e)}
J.cn=function(a){return J.e(a).T(a)}
J.co=function(a,b){return J.ei(a).dP(a,b)}
J.eC=function(a,b){return J.jX(a).W(a,b)}
J.bE=function(a,b,c){return J.aa(a).dR(a,b,c)}
J.bF=function(a){return J.e(a).bL(a)}
J.eD=function(a){return J.e(a).bM(a)}
J.eE=function(a){return J.e(a).dU(a)}
J.eF=function(a,b){return J.e(a).bP(a,b)}
J.bG=function(a,b){return J.e(a).bQ(a,b)}
J.eG=function(a,b,c,d){return J.e(a).bR(a,b,c,d)}
J.eH=function(a,b,c,d,e){return J.e(a).dW(a,b,c,d,e)}
J.eI=function(a,b,c,d,e){return J.e(a).bS(a,b,c,d,e)}
J.eJ=function(a,b,c,d,e,f){return J.e(a).dX(a,b,c,d,e,f)}
J.cp=function(a,b){return J.b4(a).u(a,b)}
J.ba=function(a,b){return J.e(a).bT(a,b)}
J.eK=function(a,b){return J.e(a).bU(a,b)}
J.eL=function(a){return J.e(a).dY(a)}
J.cq=function(a,b){return J.b4(a).B(a,b)}
J.cr=function(a){return J.e(a).gdH(a)}
J.eM=function(a){return J.e(a).gaQ(a)}
J.aw=function(a){return J.e(a).gP(a)}
J.a2=function(a){return J.p(a).gC(a)}
J.aV=function(a){return J.b4(a).gM(a)}
J.a3=function(a){return J.aa(a).gi(a)}
J.eN=function(a){return J.e(a).gc1(a)}
J.eO=function(a){return J.e(a).gaT(a)}
J.cs=function(a){return J.e(a).ga1(a)}
J.eP=function(a){return J.e(a).geg(a)}
J.eQ=function(a){return J.e(a).gcc(a)}
J.eR=function(a){return J.e(a).gas(a)}
J.ct=function(a){return J.e(a).geo(a)}
J.bH=function(a){return J.e(a).gm(a)}
J.bI=function(a){return J.e(a).gn(a)}
J.cu=function(a){return J.e(a).gE(a)}
J.eS=function(a){return J.e(a).aW(a)}
J.eT=function(a,b,c){return J.e(a).ct(a,b,c)}
J.eU=function(a){return J.e(a).at(a)}
J.eV=function(a,b){return J.e(a).aX(a,b)}
J.eW=function(a,b,c){return J.e(a).aY(a,b,c)}
J.cv=function(a,b,c){return J.e(a).b0(a,b,c)}
J.eX=function(a,b){return J.e(a).bZ(a,b)}
J.cw=function(a){return J.b4(a).ea(a)}
J.eY=function(a,b){return J.e(a).sao(a,b)}
J.eZ=function(a,b,c,d){return J.e(a).b6(a,b,c,d)}
J.cx=function(a){return J.aQ(a).eh(a)}
J.f_=function(a){return J.ei(a).ej(a)}
J.ax=function(a){return J.p(a).k(a)}
J.f0=function(a,b,c,d){return J.e(a).el(a,b,c,d)}
J.f1=function(a,b,c){return J.e(a).cd(a,b,c)}
J.f2=function(a,b,c){return J.e(a).ce(a,b,c)}
J.bJ=function(a,b,c){return J.e(a).cf(a,b,c)}
J.f3=function(a,b,c){return J.e(a).cg(a,b,c)}
J.cy=function(a,b,c){return J.e(a).ci(a,b,c)}
J.cz=function(a,b,c){return J.e(a).cj(a,b,c)}
J.cA=function(a,b,c){return J.e(a).ck(a,b,c)}
J.cB=function(a,b,c,d){return J.e(a).cl(a,b,c,d)}
J.cC=function(a,b,c,d){return J.e(a).cm(a,b,c,d)}
J.f4=function(a,b){return J.e(a).co(a,b)}
J.f5=function(a,b,c){return J.e(a).em(a,b,c)}
J.f6=function(a,b,c,d,e,f,g){return J.e(a).cp(a,b,c,d,e,f,g)}
J.f7=function(a,b,c,d,e){return J.e(a).cr(a,b,c,d,e)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bK.prototype
C.n=W.fl.prototype
C.C=W.fs.prototype
C.D=J.f.prototype
C.b=J.aC.prototype
C.t=J.d1.prototype
C.c=J.d2.prototype
C.a=J.aE.prototype
C.i=J.aF.prototype
C.K=J.aG.prototype
C.O=H.hb.prototype
C.P=W.hd.prototype
C.w=J.hj.prototype
C.B=W.hS.prototype
C.q=J.b2.prototype
C.a5=W.i_.prototype
C.f=new P.iW()
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.A(I.at(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.M=I.at(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=I.at([])
C.o=H.A(I.at(["bind","if","ref","repeat","syntax"]),[P.m])
C.p=H.A(I.at(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.Q=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
C.R=new G.w("vec4","delta from light",0)
C.m=new G.w("","",0)
C.x=new G.w("vec3","vertex coordinates",0)
C.S=new G.w("vec3","vertex binormals",0)
C.y=new G.w("vec4","for wireframe",0)
C.T=new G.w("vec4","per vertex color",0)
C.U=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.W=new G.w("mat4","",4)
C.V=new G.w("mat4","",128)
C.e=new G.w("float","",0)
C.X=new G.w("float","",4)
C.Y=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.Z=new G.w("float","for bump maps",0)
C.a_=new G.w("vec2","texture uvs",0)
C.a0=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.a1=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.a2=new G.w("vec3","vertex normals",0)
C.a3=new G.w("sampler2DShadow","",0)
C.z=new G.w("vec3","per vertex color",0)
C.A=new G.w("mat3","",0)
C.a4=new G.w("vec3","vertex tangents",0)
$.X=0
$.ay=null
$.cF=null
$.ek=null
$.e9=null
$.eo=null
$.by=null
$.bz=null
$.cg=null
$.ap=null
$.aM=null
$.aN=null
$.c9=!1
$.x=C.f
$.a4=null
$.bP=null
$.cS=null
$.cR=null
$.cP=null
$.cO=null
$.cN=null
$.cM=null
$.eh=0
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
I.$lazy(y,x,w)}})(["cK","$get$cK",function(){return H.ej("_$dart_dartClosure")},"bT","$get$bT",function(){return H.ej("_$dart_js")},"dv","$get$dv",function(){return H.a_(H.bu({
toString:function(){return"$receiver$"}}))},"dw","$get$dw",function(){return H.a_(H.bu({$method$:null,
toString:function(){return"$receiver$"}}))},"dx","$get$dx",function(){return H.a_(H.bu(null))},"dy","$get$dy",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dC","$get$dC",function(){return H.a_(H.bu(void 0))},"dD","$get$dD",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dA","$get$dA",function(){return H.a_(H.dB(null))},"dz","$get$dz",function(){return H.a_(function(){try{null.$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return H.a_(H.dB(void 0))},"dE","$get$dE",function(){return H.a_(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c4","$get$c4",function(){return P.i3()},"cW","$get$cW",function(){var z,y
z=P.aZ
y=new P.aj(0,P.i1(),null,[z])
y.d7(null,z)
return y},"aO","$get$aO",function(){return[]},"cJ","$get$cJ",function(){return{}},"dQ","$get$dQ",function(){return P.bW(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c6","$get$c6",function(){return P.O()},"dl","$get$dl",function(){return new G.dt(1281,0,4294967295)},"cE","$get$cE",function(){return new G.ds(1281,1281,1281)},"V","$get$V",function(){return P.d5(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.T,"aPosition",C.x,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.R,"vCenter",C.y,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a1,"uAnimationTable",C.h,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"ee","$get$ee",function(){var z=G.bm("FixedVertexColorV")
z.b8(["aPosition"])
z.bb(["uPerspectiveViewMatrix","uModelMatrix"])
z.ai(["vColor"])
z.bf(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"ed","$get$ed",function(){var z=G.bm("FixedVertexColorF")
z.ai(["vColor"])
z.aw(["oFragColor = vec4( vColor, 1.0 );"])
return z},"dM","$get$dM",function(){return[T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)]},"cZ","$get$cZ",function(){return[G.C(0,11,5),G.C(0,5,1),G.C(0,1,7),G.C(0,7,10),G.C(0,10,11),G.C(1,5,9),G.C(5,11,4),G.C(11,10,2),G.C(10,7,6),G.C(7,1,8),G.C(3,9,4),G.C(3,4,2),G.C(3,2,6),G.C(3,6,8),G.C(3,8,9),G.C(4,9,5),G.C(2,4,11),G.C(6,2,10),G.C(8,6,7),G.C(9,8,1)]},"er","$get$er",function(){return(1+P.kf(5))/2},"d_","$get$d_",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$er()
y=T.F(-1,z,0)
y.F(0)
x=T.F(1,z,0)
x.F(0)
if(typeof z!=="number")return z.eq()
w=T.F(-1,-z,0)
w.F(0)
v=T.F(1,-z,0)
v.F(0)
u=T.F(0,-1,z)
u.F(0)
t=T.F(0,1,z)
t.F(0)
s=T.F(0,-1,-z)
s.F(0)
r=T.F(0,1,-z)
r.F(0)
q=T.F(z,0,-1)
q.F(0)
p=T.F(z,0,1)
p.F(0)
o=T.F(-z,0,-1)
o.F(0)
z=T.F(-z,0,1)
z.F(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"eq","$get$eq",function(){var z=G.bm("SkyScraperV")
z.b8(["aPosition","aTexUV"])
z.ai(["vPosition","vTexUV"])
z.bb(["uPerspectiveViewMatrix","uModelMatrix"])
z.aw(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = aPosition;","vTexUV = aTexUV;"])
return z},"ep","$get$ep",function(){var z=G.bm("SkyScraperF")
z.ai(["vPosition","vTexUV"])
z.aw(["      // the step finds the windows\n      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts\n      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the\n      // artifacts on the right side\n      float s1 = step(mod(vTexUV.x*11.+1., 2.), 1.);\n      float s2 = step(mod(vTexUV.y*21.+1., 2.), 1.);\n      float s3 = step( s1+s2, 1.1);\n\n      oFragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );\n\n      //gl_FragColor = vec4( mod(vPosition.x*10.0,2.0) ,\n      //                       mod(vPosition.y*20.0,2.0),\n      //                       mod(vPosition.z*10.0,2.0), 1. );\n"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.Z]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.m,args:[P.G]},{func:1,args:[W.bi]},{func:1,ret:P.cb,args:[W.an,P.m,P.m,W.c5]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aK]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aK]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[W.ad]},{func:1,args:[W.b3]},{func:1,args:[P.G,P.c]},{func:1,v:true,args:[P.aR]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.kh(d||a)
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
Isolate.at=a.at
Isolate.ar=a.ar
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.em,[])
else Q.em([])})})()
//# sourceMappingURL=skyscraper.dart.js.map
