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
b6.$isd=b5
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
var d=supportsDirectProtoAccess&&b2!="d"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cm"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cm"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cm(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.au=function(){}
var dart=[["","",,H,{"^":"",lK:{"^":"d;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
cq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bd:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cp==null){H.kj()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dS("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c1()]
if(v!=null)return v
v=H.kn(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$c1(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"d;",
H:function(a,b){return a===b},
gC:function(a){return H.aK(a)},
k:["cI",function(a){return"Instance of '"+H.aL(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fZ:{"^":"h;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isck:1},
h_:{"^":"h;",
H:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isb6:1},
c2:{"^":"h;",
gC:function(a){return 0},
k:["cK",function(a){return String(a)}]},
hu:{"^":"c2;"},
ba:{"^":"c2;"},
aI:{"^":"c2;",
k:function(a){var z=a[$.$get$cW()]
return z==null?this.cK(a):J.aA(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aE:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.U(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.M(a))}},
ah:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.c(y,x)
y[x]=w}return y.join(b)},
ba:function(a,b){return H.dz(a,b,null,H.D(a,0))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
ged:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.db())},
cC:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.U(P.r("setRange"))
P.hC(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.G()
if(typeof b!=="number")return H.u(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$isi){x=e
w=d}else{w=y.ba(d,e).em(0,!1)
x=0}y=J.ab(w)
v=y.gi(w)
if(typeof v!=="number")return H.u(v)
if(x+z>v)throw H.a(H.fW())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ak:function(a,b,c,d){return this.cC(a,b,c,d,0)},
bF:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.M(a))}return!1},
cD:function(a,b){if(!!a.immutable$list)H.U(P.r("sort"))
H.hS(a,J.jS())},
bb:function(a){return this.cD(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.K(a[z],b))return!0
return!1},
k:function(a){return P.c0(a,"[","]")},
gN:function(a){return new J.fk(a,a.length,0,null,[H.D(a,0)])},
gC:function(a){return H.aK(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.U(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cK(b,"newLength",null))
if(b<0)throw H.a(P.ar(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.U(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.A([],[H.D(a,0)])
this.si(y,z)
this.ak(y,0,a.length,a)
this.ak(y,a.length,z,b)
return y},
$iso:1,
$aso:I.au,
$isi:1,
t:{
aF:function(a){a.fixed$length=Array
return a},
lI:[function(a,b){return J.eK(a,b)},"$2","jS",8,0,23]}},
lJ:{"^":"aE;$ti"},
fk:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aG:{"^":"h;",
Z:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Y(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gau(b)
if(this.gau(a)===z)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
el:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
dT:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dU:function(a,b,c){if(this.Z(b,c)>0)throw H.a(H.Y(b))
if(this.Z(a,b)<0)return b
if(this.Z(a,c)>0)return c
return a},
eo:function(a,b){var z
if(b>20)throw H.a(P.ar(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a+b},
G:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a-b},
cM:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bz(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.bz(a,b)},
bz:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bx:function(a,b){var z
if(a>0)z=this.dE(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dE:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a>b},
$isao:1,
$isaT:1},
dd:{"^":"aG;",$isH:1},
dc:{"^":"aG;"},
aH:{"^":"h;",
dV:function(a,b){if(b>=a.length)H.U(H.aa(a,b))
return a.charCodeAt(b)},
bp:function(a,b){if(b>=a.length)throw H.a(H.aa(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cK(b,null,null))
return a+b},
cF:function(a,b,c){var z
if(c>a.length)throw H.a(P.ar(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cE:function(a,b){return this.cF(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.U(H.Y(c))
if(b<0)throw H.a(P.bv(b,null,null))
if(typeof c!=="number")return H.u(c)
if(b>c)throw H.a(P.bv(b,null,null))
if(c>a.length)throw H.a(P.bv(c,null,null))
return a.substring(b,c)},
cG:function(a,b){return this.bd(a,b,null)},
en:function(a){return a.toLowerCase()},
dX:function(a,b,c){if(c>a.length)throw H.a(P.ar(c,0,a.length,null,null))
return H.kv(a,b,c)},
Z:function(a,b){var z
if(typeof b!=="string")throw H.a(H.Y(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.aa(a,b))
return a[b]},
$iso:1,
$aso:I.au,
$ism:1}}],["","",,H,{"^":"",
db:function(){return new P.by("No element")},
fX:function(){return new P.by("Too many elements")},
fW:function(){return new P.by("Too few elements")},
hS:function(a,b){var z=J.a4(a)
if(typeof z!=="number")return z.G()
H.b8(a,0,z-1,b)},
b8:function(a,b,c,d){if(c-b<=32)H.hR(a,b,c,d)
else H.hQ(a,b,c,d)},
hR:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ab(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.P(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a9(c-b+1,6)
y=b+z
x=c-z
w=C.b.a9(b+c,2)
v=w-z
u=w+z
t=J.ab(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.P(d.$2(s,r),0)){n=r
r=s
s=n}if(J.P(d.$2(p,o),0)){n=o
o=p
p=n}if(J.P(d.$2(s,q),0)){n=q
q=s
s=n}if(J.P(d.$2(r,q),0)){n=q
q=r
r=n}if(J.P(d.$2(s,p),0)){n=p
p=s
s=n}if(J.P(d.$2(q,p),0)){n=p
p=q
q=n}if(J.P(d.$2(r,o),0)){n=o
o=r
r=n}if(J.P(d.$2(r,q),0)){n=q
q=r
r=n}if(J.P(d.$2(p,o),0)){n=o
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
h=J.q(i)
if(h.H(i,0))continue
if(h.a4(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aS(i)
if(h.ai(i,0)){--l
continue}else{g=l-1
if(h.a4(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aV(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aV(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b8(a,b,m-2,d)
H.b8(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.K(d.$2(t.h(a,m),r),0);)++m
for(;J.K(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.K(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aV(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b8(a,m,l,d)}else H.b8(a,m,l,d)},
bX:{"^":"br;$ti"},
bt:{"^":"bX;$ti",
gN:function(a){return new H.dh(this,this.gi(this),0,null,[H.co(this,"bt",0)])},
B:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.w(0,y))
if(z!==this.gi(this))throw H.a(P.M(this))}},
b_:function(a,b){return this.cJ(0,b)}},
i3:{"^":"bt;a,b,c,$ti",
d5:function(a,b,c,d){},
gdq:function(){var z=J.a4(this.a)
return z},
gdF:function(){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>=z)return 0
return z-y},
w:function(a,b){var z,y
z=this.gdF()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.u(b)
y=z+b
if(!(b<0)){z=this.gdq()
if(typeof z!=="number")return H.u(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cw(this.a,y)},
em:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ab(y)
w=x.gi(y)
if(typeof w!=="number")return w.G()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.w(y,z+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a4()
if(u<w)throw H.a(P.M(this))}return t},
t:{
dz:function(a,b,c,d){var z=new H.i3(a,b,c,[d])
z.d5(a,b,c,d)
return z}}},
dh:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.ab(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.M(z))
w=this.c
if(typeof x!=="number")return H.u(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
h8:{"^":"bt;a,b,$ti",
gi:function(a){return J.a4(this.a)},
w:function(a,b){return this.b.$1(J.cw(this.a,b))},
$asbX:function(a,b){return[b]},
$asbt:function(a,b){return[b]},
$asbr:function(a,b){return[b]}},
dT:{"^":"br;a,b,$ti",
gN:function(a){return new H.ic(J.aZ(this.a),this.b,this.$ti)}},
ic:{"^":"fY;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bp:{"^":"d;$ti"}}],["","",,H,{"^":"",
kb:function(a){return init.types[a]},
km:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aA(a)
if(typeof z!=="string")throw H.a(H.Y(a))
return z},
aK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.q(a).$isba){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bp(w,0)===36)w=C.i.cG(w,1)
r=H.bJ(H.av(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hB:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
hz:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
hv:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
hw:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
hy:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
hA:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
hx:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
u:function(a){throw H.a(H.Y(a))},
c:function(a,b){if(a==null)J.a4(a)
throw H.a(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,"index",null)
z=J.a4(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bv(b,"index",null)},
Y:function(a){return new P.ae(!0,a,null,null)},
a8:function(a){if(typeof a!=="number")throw H.a(H.Y(a))
return a},
a:function(a){var z
if(a==null)a=new P.dn()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eA})
z.name=""}else z.toString=H.eA
return z},
eA:function(){return J.aA(this.dartException)},
U:function(a){throw H.a(a)},
E:function(a){throw H.a(P.M(a))},
V:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bx(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c3(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dm(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dF()
u=$.$get$dG()
t=$.$get$dH()
s=$.$get$dI()
r=$.$get$dM()
q=$.$get$dN()
p=$.$get$dK()
$.$get$dJ()
o=$.$get$dP()
n=$.$get$dO()
m=v.W(y)
if(m!=null)return z.$1(H.c3(y,m))
else{m=u.W(y)
if(m!=null){m.method="call"
return z.$1(H.c3(y,m))}else{m=t.W(y)
if(m==null){m=s.W(y)
if(m==null){m=r.W(y)
if(m==null){m=q.W(y)
if(m==null){m=p.W(y)
if(m==null){m=s.W(y)
if(m==null){m=o.W(y)
if(m==null){m=n.W(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dm(y,m))}}return z.$1(new H.ia(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ae(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
ap:function(a){var z
if(a==null)return new H.e9(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e9(a,null)},
k7:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kl:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d5("Unsupported number of arguments for wrapped closure"))},
a9:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kl)
a.$identity=z
return z},
fu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$isi){z.$reflectionInfo=c
x=H.hE(z).r}else x=c
w=d?Object.create(new H.hT().constructor.prototype):Object.create(new H.bT(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Z
$.Z=J.ay(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cP(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kb,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cN:H.bU
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cP(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fr:function(a,b,c,d){var z=H.bU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ft(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fr(y,!w,z,b)
if(y===0){w=$.Z
$.Z=J.ay(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aB
if(v==null){v=H.bl("self")
$.aB=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Z
$.Z=J.ay(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aB
if(v==null){v=H.bl("self")
$.aB=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fs:function(a,b,c,d){var z,y
z=H.bU
y=H.cN
switch(b?-1:a){case 0:throw H.a(H.hK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ft:function(a,b){var z,y,x,w,v,u,t,s
z=$.aB
if(z==null){z=H.bl("self")
$.aB=z}y=$.cM
if(y==null){y=H.bl("receiver")
$.cM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fs(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Z
$.Z=J.ay(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Z
$.Z=J.ay(y,1)
return new Function(z+H.b(y)+"}")()},
cm:function(a,b,c,d,e,f){var z,y
z=J.aF(b)
y=!!J.q(c).$isi?J.aF(c):c
return H.fu(a,z,y,!!d,e,f)},
ks:function(a,b){var z=J.ab(b)
throw H.a(H.cO(a,z.bd(b,3,z.gi(b))))},
ac:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.ks(a,b)},
cn:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eo:function(a,b){var z,y
if(a==null)return!1
z=H.cn(J.q(a))
if(z==null)y=!1
else y=H.et(z,b)
return y},
k_:function(a){var z
if(a instanceof H.j){z=H.cn(J.q(a))
if(z!=null)return H.cr(z,null)
return"Closure"}return H.aL(a)},
kw:function(a){throw H.a(new P.fz(a))},
er:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
av:function(a){if(a==null)return
return a.$ti},
n7:function(a,b,c){return H.aU(a["$as"+H.b(c)],H.av(b))},
be:function(a,b,c,d){var z=H.aU(a["$as"+H.b(c)],H.av(b))
return z==null?null:z[d]},
co:function(a,b,c){var z=H.aU(a["$as"+H.b(b)],H.av(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.av(a)
return z==null?null:z[b]},
cr:function(a,b){var z=H.ax(a,b)
return z},
ax:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bJ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ax(z,b)
return H.jR(a,b)}return"unknown-reified-type"},
jR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ax(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ax(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.k6(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ax(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bJ:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cb("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return w?"":"<"+z.k(0)+">"},
ka:function(a){var z,y,x
if(a instanceof H.j){z=H.cn(J.q(a))
if(z!=null)return H.cr(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bJ(a.$ti,0,null)
return y+x},
aU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cl:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.av(a)
y=J.q(a)
if(y[b]==null)return!1
return H.el(H.aU(y[d],z),c)},
bg:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cl(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bJ(c,0,null)
throw H.a(H.cO(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
el:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.O(a[y],b[y]))return!1
return!0},
n5:function(a,b,c){return a.apply(b,H.aU(J.q(b)["$as"+H.b(c)],H.av(b)))},
O:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b6")return!0
if('func' in b)return H.et(a,b)
if('func' in a)return b.builtin$cls==="lA"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cr(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.el(H.aU(u,z),x)},
ek:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.O(z,v)||H.O(v,z)))return!1}return!0},
k0:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aF(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.O(v,u)||H.O(u,v)))return!1}return!0},
et:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.O(z,y)||H.O(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ek(x,w,!1))return!1
if(!H.ek(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}}return H.k0(a.named,b.named)},
n6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kn:function(a){var z,y,x,w,v,u
z=$.es.$1(a)
y=$.bH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ej.$2(a,z)
if(z!=null){y=$.bH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bK(x)
$.bH[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bI[z]=x
return x}if(v==="-"){u=H.bK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ev(a,x)
if(v==="*")throw H.a(P.dS(z))
if(init.leafTags[z]===true){u=H.bK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ev(a,x)},
ev:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cq(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bK:function(a){return J.cq(a,!1,null,!!a.$isp)},
kr:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bK(z)
else return J.cq(z,c,null,null)},
kj:function(){if(!0===$.cp)return
$.cp=!0
H.kk()},
kk:function(){var z,y,x,w,v,u,t,s
$.bH=Object.create(null)
$.bI=Object.create(null)
H.kf()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ew.$1(v)
if(u!=null){t=H.kr(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kf:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.at(C.E,H.at(C.J,H.at(C.u,H.at(C.u,H.at(C.I,H.at(C.F,H.at(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.es=new H.kg(v)
$.ej=new H.kh(u)
$.ew=new H.ki(t)},
at:function(a,b){return a(b)||b},
kv:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hD:{"^":"d;a,b,c,d,e,f,r,x",t:{
hE:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aF(z)
y=z[0]
x=z[1]
return new H.hD(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i8:{"^":"d;a,b,c,d,e,f",
W:function(a){var z,y,x
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
t:{
a0:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hq:{"^":"I;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
t:{
dm:function(a,b){return new H.hq(a,b==null?null:b.method)}}},
h0:{"^":"I;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
t:{
c3:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h0(a,y,z?null:b.receiver)}}},
ia:{"^":"I;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kx:{"^":"j:0;a",
$1:function(a){if(!!J.q(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e9:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaM:1},
j:{"^":"d;",
k:function(a){return"Closure '"+H.aL(this).trim()+"'"},
gcz:function(){return this},
gcz:function(){return this}},
dA:{"^":"j;"},
hT:{"^":"dA;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bT:{"^":"dA;a,b,c,d",
H:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aK(this.a)
else y=typeof z!=="object"?J.a3(z):H.aK(z)
return(y^H.aK(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aL(z)+"'")},
t:{
bU:function(a){return a.a},
cN:function(a){return a.c},
bl:function(a){var z,y,x,w,v
z=new H.bT("self","target","receiver","name")
y=J.aF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fp:{"^":"I;a",
k:function(a){return this.a},
t:{
cO:function(a,b){return new H.fp("CastError: "+H.b(P.bZ(a))+": type '"+H.k_(a)+"' is not a subtype of type '"+b+"'")}}},
hJ:{"^":"I;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
t:{
hK:function(a){return new H.hJ(a)}}},
dQ:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a3(this.a)},
H:function(a,b){if(b==null)return!1
return b instanceof H.dQ&&J.K(this.a,b.a)}},
de:{"^":"c7;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gP:function(a){return new H.h6(this,[H.D(this,0)])},
as:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.br(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.br(y,b)}else return this.eb(b)},
eb:function(a){var z=this.d
if(z==null)return!1
return this.aT(this.aI(z,J.a3(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ap(z,b)
x=y==null?null:y.gag()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ap(w,b)
x=y==null?null:y.gag()
return x}else return this.ec(b)},
ec:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aI(z,J.a3(a)&0x3ffffff)
x=this.aT(y,a)
if(x<0)return
return y[x].gag()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aL()
this.b=z}this.bl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aL()
this.c=y}this.bl(y,b,c)}else{x=this.d
if(x==null){x=this.aL()
this.d=x}w=J.a3(b)&0x3ffffff
v=this.aI(x,w)
if(v==null)this.aP(x,w,[this.aC(b,c)])
else{u=this.aT(v,b)
if(u>=0)v[u].sag(c)
else v.push(this.aC(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.M(this))
z=z.c}},
bl:function(a,b,c){var z=this.ap(a,b)
if(z==null)this.aP(a,b,this.aC(b,c))
else z.sag(c)},
bm:function(){this.r=this.r+1&67108863},
aC:function(a,b){var z,y
z=new H.h5(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bm()
return z},
aT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gea(),b))return y
return-1},
k:function(a){return P.di(this)},
ap:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
aP:function(a,b,c){a[b]=c},
dm:function(a,b){delete a[b]},
br:function(a,b){return this.ap(a,b)!=null},
aL:function(){var z=Object.create(null)
this.aP(z,"<non-identifier-key>",z)
this.dm(z,"<non-identifier-key>")
return z}},
h5:{"^":"d;ea:a<,ag:b@,c,d"},
h6:{"^":"bX;a,$ti",
gi:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.a6(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.M(z))
y=y.c}}},
a6:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kg:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
kh:{"^":"j:10;a",
$2:function(a,b){return this.a(a,b)}},
ki:{"^":"j:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
k6:function(a){return J.aF(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bE:function(a){var z,y,x
if(!!J.q(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aa(b,a))},
hl:{"^":"h;","%":"DataView;ArrayBufferView;c8|e3|e4|dj|e5|e6|ah"},
c8:{"^":"hl;",
gi:function(a){return a.length},
$iso:1,
$aso:I.au,
$isp:1,
$asp:I.au},
dj:{"^":"e4;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbp:function(){return[P.ao]},
$ask:function(){return[P.ao]},
$isi:1,
$asi:function(){return[P.ao]},
"%":"Float64Array"},
ah:{"^":"e6;",
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbp:function(){return[P.H]},
$ask:function(){return[P.H]},
$isi:1,
$asi:function(){return[P.H]}},
hk:{"^":"dj;",$isc_:1,"%":"Float32Array"},
m0:{"^":"ah;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m1:{"^":"ah;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
$isfU:1,
"%":"Int32Array"},
m2:{"^":"ah;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m3:{"^":"ah;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m4:{"^":"ah;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m5:{"^":"ah;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m6:{"^":"ah;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e3:{"^":"c8+k;"},
e4:{"^":"e3+bp;"},
e5:{"^":"c8+k;"},
e6:{"^":"e5+bp;"}}],["","",,P,{"^":"",
ii:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k1()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a9(new P.ik(z),1)).observe(y,{childList:true})
return new P.ij(z,y,x)}else if(self.setImmediate!=null)return P.k2()
return P.k3()},
mS:[function(a){self.scheduleImmediate(H.a9(new P.il(a),0))},"$1","k1",4,0,6],
mT:[function(a){self.setImmediate(H.a9(new P.im(a),0))},"$1","k2",4,0,6],
mU:[function(a){P.jv(0,a)},"$1","k3",4,0,6],
jV:function(a,b){if(H.eo(a,{func:1,args:[P.b6,P.b6]})){b.toString
return a}else{b.toString
return a}},
jU:function(){var z,y
for(;z=$.as,z!=null;){$.aQ=null
y=z.b
$.as=y
if(y==null)$.aP=null
z.a.$0()}},
n4:[function(){$.ci=!0
try{P.jU()}finally{$.aQ=null
$.ci=!1
if($.as!=null)$.$get$cd().$1(P.em())}},"$0","em",0,0,3],
eh:function(a){var z=new P.dU(a,null)
if($.as==null){$.aP=z
$.as=z
if(!$.ci)$.$get$cd().$1(P.em())}else{$.aP.b=z
$.aP=z}},
jZ:function(a){var z,y,x
z=$.as
if(z==null){P.eh(a)
$.aQ=$.aP
return}y=new P.dU(a,null)
x=$.aQ
if(x==null){y.b=z
$.aQ=y
$.as=y}else{y.b=x.b
x.b=y
$.aQ=y
if(y.b==null)$.aP=y}},
kt:function(a){var z=$.x
if(C.f===z){P.bG(null,null,C.f,a)
return}z.toString
P.bG(null,null,z,z.bI(a))},
jY:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.V(u)
y=H.ap(u)
$.x.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.az(x)
w=t
v=x.ga7()
c.$2(w,v)}}},
jN:function(a,b,c,d){var z=a.dS(0)
if(!!J.q(z).$isb1&&z!==$.$get$d8())z.er(new P.jQ(b,c,d))
else b.ac(c,d)},
jO:function(a,b){return new P.jP(a,b)},
ig:function(){return $.x},
bF:function(a,b,c,d,e){var z={}
z.a=d
P.jZ(new P.jW(z,e))},
ef:function(a,b,c,d){var z,y
y=$.x
if(y===c)return d.$0()
$.x=c
z=y
try{y=d.$0()
return y}finally{$.x=z}},
eg:function(a,b,c,d,e){var z,y
y=$.x
if(y===c)return d.$1(e)
$.x=c
z=y
try{y=d.$1(e)
return y}finally{$.x=z}},
jX:function(a,b,c,d,e,f){var z,y
y=$.x
if(y===c)return d.$2(e,f)
$.x=c
z=y
try{y=d.$2(e,f)
return y}finally{$.x=z}},
bG:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bI(d):c.dP(d)
P.eh(d)},
ik:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ij:{"^":"j:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
il:{"^":"j:1;a",
$0:function(){this.a.$0()}},
im:{"^":"j:1;a",
$0:function(){this.a.$0()}},
ju:{"^":"d;a,b,c",
di:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a9(new P.jw(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
t:{
jv:function(a,b){var z=new P.ju(!0,null,0)
z.di(a,b)
return z}}},
jw:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kL:{"^":"d;$ti"},
iq:{"^":"d;$ti"},
jp:{"^":"iq;a,$ti",
dW:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.ca("Future already completed"))
z.ao(b)}},
dX:{"^":"d;aN:a<,b,c,d,e,$ti",
gdK:function(){return this.b.b},
gc3:function(){return(this.c&1)!==0},
ge9:function(){return(this.c&2)!==0},
gc2:function(){return this.c===8},
e7:function(a){return this.b.b.aZ(this.d,a)},
ee:function(a){if(this.c!==6)return!0
return this.b.b.aZ(this.d,J.az(a))},
e6:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.eo(z,{func:1,args:[P.d,P.aM]}))return x.eh(z,y.gS(a),a.ga7())
else return x.aZ(z,y.gS(a))},
e8:function(){return this.b.b.cd(this.d)}},
am:{"^":"d;by:a<,b,dA:c<,$ti",
de:function(a,b){this.a=4
this.c=a},
gdt:function(){return this.a===2},
gaJ:function(){return this.a>=4},
cf:function(a,b){var z,y,x
z=$.x
if(z!==C.f){z.toString
if(b!=null)b=P.jV(b,z)}y=new P.am(0,z,null,[null])
x=b==null?1:3
this.aD(new P.dX(null,y,x,a,b,[H.D(this,0),null]))
return y},
ce:function(a){return this.cf(a,null)},
er:function(a){var z,y
z=$.x
y=new P.am(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.D(this,0)
this.aD(new P.dX(null,y,8,a,null,[z,z]))
return y},
aD:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaJ()){y.aD(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bG(null,null,z,new P.iF(this,a))}},
bv:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaN()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaJ()){v.bv(a)
return}this.a=v.a
this.c=v.c}z.a=this.aO(a)
y=this.b
y.toString
P.bG(null,null,y,new P.iK(z,this))}},
aq:function(){var z=this.c
this.c=null
return this.aO(z)},
aO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaN()
z.a=y}return y},
ao:function(a){var z,y,x
z=this.$ti
y=H.cl(a,"$isb1",z,"$asb1")
if(y){z=H.cl(a,"$isam",z,null)
if(z)P.dY(a,this)
else P.iG(a,this)}else{x=this.aq()
this.a=4
this.c=a
P.aO(this,x)}},
ac:[function(a,b){var z=this.aq()
this.a=8
this.c=new P.bk(a,b)
P.aO(this,z)},function(a){return this.ac(a,null)},"ew","$2","$1","gbq",4,2,13],
$isb1:1,
t:{
iG:function(a,b){var z,y,x
b.a=1
try{a.cf(new P.iH(b),new P.iI(b))}catch(x){z=H.V(x)
y=H.ap(x)
P.kt(new P.iJ(b,z,y))}},
dY:function(a,b){var z
for(;a.gdt();)a=a.c
if(a.gaJ()){z=b.aq()
b.a=a.a
b.c=a.c
P.aO(b,z)}else{z=b.c
b.a=2
b.c=a
a.bv(z)}},
aO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.az(v)
t=v.ga7()
y.toString
P.bF(null,null,y,u,t)}return}for(;b.gaN()!=null;b=s){s=b.a
b.a=null
P.aO(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc3()||b.gc2()){q=b.gdK()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.az(v)
t=v.ga7()
y.toString
P.bF(null,null,y,u,t)
return}p=$.x
if(p==null?q!=null:p!==q)$.x=q
else p=null
if(b.gc2())new P.iN(z,x,b,w).$0()
else if(y){if(b.gc3())new P.iM(x,b,r).$0()}else if(b.ge9())new P.iL(z,x,b).$0()
if(p!=null)$.x=p
y=x.b
if(!!J.q(y).$isb1){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aO(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dY(y,o)
return}}o=b.b
b=o.aq()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iF:{"^":"j:1;a,b",
$0:function(){P.aO(this.a,this.b)}},
iK:{"^":"j:1;a,b",
$0:function(){P.aO(this.b,this.a.a)}},
iH:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.ao(a)}},
iI:{"^":"j:14;a",
$2:function(a,b){this.a.ac(a,b)},
$1:function(a){return this.$2(a,null)}},
iJ:{"^":"j:1;a,b,c",
$0:function(){this.a.ac(this.b,this.c)}},
iN:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e8()}catch(w){y=H.V(w)
x=H.ap(w)
if(this.d){v=J.az(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bk(y,x)
u.a=!0
return}if(!!J.q(z).$isb1){if(z instanceof P.am&&z.gby()>=4){if(z.gby()===8){v=this.b
v.b=z.gdA()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ce(new P.iO(t))
v.a=!1}}},
iO:{"^":"j:0;a",
$1:function(a){return this.a}},
iM:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e7(this.c)}catch(x){z=H.V(x)
y=H.ap(x)
w=this.a
w.b=new P.bk(z,y)
w.a=!0}}},
iL:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ee(z)===!0&&w.e!=null){v=this.b
v.b=w.e6(z)
v.a=!1}}catch(u){y=H.V(u)
x=H.ap(u)
w=this.a
v=J.az(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bk(y,x)
s.a=!0}}},
dU:{"^":"d;a,b"},
dx:{"^":"d;$ti",
B:function(a,b){var z,y
z={}
y=new P.am(0,$.x,null,[null])
z.a=null
z.a=this.c7(new P.i_(z,this,b,y),!0,new P.i0(y),y.gbq())
return y},
gi:function(a){var z,y
z={}
y=new P.am(0,$.x,null,[P.H])
z.a=0
this.c7(new P.i1(z),!0,new P.i2(z,y),y.gbq())
return y}},
i_:{"^":"j;a,b,c,d",
$1:function(a){P.jY(new P.hY(this.c,a),new P.hZ(),P.jO(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.co(this.b,"dx",0)]}}},
hY:{"^":"j:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hZ:{"^":"j:0;",
$1:function(a){}},
i0:{"^":"j:1;a",
$0:function(){this.a.ao(null)}},
i1:{"^":"j:0;a",
$1:function(a){++this.a.a}},
i2:{"^":"j:1;a,b",
$0:function(){this.b.ao(this.a.a)}},
hX:{"^":"d;$ti"},
jQ:{"^":"j:1;a,b,c",
$0:function(){return this.a.ac(this.b,this.c)}},
jP:{"^":"j:15;a,b",
$2:function(a,b){P.jN(this.a,this.b,a,b)}},
bk:{"^":"d;S:a>,a7:b<",
k:function(a){return H.b(this.a)},
$isI:1},
jC:{"^":"d;"},
jW:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dn()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aA(y)
throw x}},
j8:{"^":"jC;",
ei:function(a){var z,y,x
try{if(C.f===$.x){a.$0()
return}P.ef(null,null,this,a)}catch(x){z=H.V(x)
y=H.ap(x)
P.bF(null,null,this,z,y)}},
ej:function(a,b){var z,y,x
try{if(C.f===$.x){a.$1(b)
return}P.eg(null,null,this,a,b)}catch(x){z=H.V(x)
y=H.ap(x)
P.bF(null,null,this,z,y)}},
dP:function(a){return new P.ja(this,a)},
bI:function(a){return new P.j9(this,a)},
dQ:function(a){return new P.jb(this,a)},
h:function(a,b){return},
cd:function(a){if($.x===C.f)return a.$0()
return P.ef(null,null,this,a)},
aZ:function(a,b){if($.x===C.f)return a.$1(b)
return P.eg(null,null,this,a,b)},
eh:function(a,b,c){if($.x===C.f)return a.$2(b,c)
return P.jX(null,null,this,a,b,c)}},
ja:{"^":"j:1;a,b",
$0:function(){return this.a.cd(this.b)}},
j9:{"^":"j:1;a,b",
$0:function(){return this.a.ei(this.b)}},
jb:{"^":"j:0;a,b",
$1:function(a){return this.a.ej(this.b,a)}}}],["","",,P,{"^":"",
J:function(){return new H.de(0,null,null,null,null,null,0,[null,null])},
c4:function(a){return H.k7(a,new H.de(0,null,null,null,null,null,0,[null,null]))},
W:function(a,b,c,d){return new P.iW(0,null,null,null,null,null,0,[d])},
fV:function(a,b,c){var z,y
if(P.cj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aR()
y.push(a)
try{P.jT(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.dy(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c0:function(a,b,c){var z,y,x
if(P.cj(a))return b+"..."+c
z=new P.cb(b)
y=$.$get$aR()
y.push(a)
try{x=z
x.a=P.dy(x.ga8(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.ga8()+c
y=z.ga8()
return y.charCodeAt(0)==0?y:y},
cj:function(a){var z,y
for(z=0;y=$.$get$aR(),z<y.length;++z)if(a===y[z])return!0
return!1},
jT:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.u();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
c5:function(a,b){var z,y
z=P.W(null,null,null,b)
for(y=J.aZ(a);y.u();)z.M(0,y.gD(y))
return z},
di:function(a){var z,y,x
z={}
if(P.cj(a))return"{...}"
y=new P.cb("")
try{$.$get$aR().push(a)
x=y
x.a=x.ga8()+"{"
z.a=!0
J.cx(a,new P.h7(z,y))
z=y
z.a=z.ga8()+"}"}finally{z=$.$get$aR()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.ga8()
return z.charCodeAt(0)==0?z:z},
iW:{"^":"iQ;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.cg(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dl(b)},
dl:function(a){var z=this.d
if(z==null)return!1
return this.aH(z[this.aE(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.M(this))
z=z.b}},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ch()
this.b=z}return this.bn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ch()
this.c=y}return this.bn(y,b)}else return this.dj(0,b)},
dj:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ch()
this.d=z}y=this.aE(b)
x=z[y]
if(x==null)z[y]=[this.aM(b)]
else{if(this.aH(x,b)>=0)return!1
x.push(this.aM(b))}return!0},
cc:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bw(this.c,b)
else return this.dv(0,b)},
dv:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aE(b)]
x=this.aH(y,b)
if(x<0)return!1
this.bA(y.splice(x,1)[0])
return!0},
af:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aK()}},
bn:function(a,b){if(a[b]!=null)return!1
a[b]=this.aM(b)
return!0},
bw:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bA(z)
delete a[b]
return!0},
aK:function(){this.r=this.r+1&67108863},
aM:function(a){var z,y
z=new P.iX(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aK()
return z},
bA:function(a){var z,y
z=a.gdu()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aK()},
aE:function(a){return J.a3(a)&0x3ffffff},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gdn(),b))return y
return-1},
t:{
ch:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iX:{"^":"d;dn:a<,b,du:c<"},
cg:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iQ:{"^":"hL;$ti"},
lN:{"^":"d;$ti"},
dg:{"^":"e2;$ti",$isi:1},
k:{"^":"d;$ti",
gN:function(a){return new H.dh(a,this.gi(a),0,null,[H.be(this,a,"k",0)])},
w:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.M(a))}},
e5:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.M(a))}return y},
ba:function(a,b){return H.dz(a,b,null,H.be(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.be(this,a,"k",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.ak(z,0,this.gi(a),a)
C.c.ak(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.c0(a,"[","]")}},
c7:{"^":"Q;$ti"},
h7:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
Q:{"^":"d;$ti",
B:function(a,b){var z,y
for(z=J.aZ(this.gP(a));z.u();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a4(this.gP(a))},
k:function(a){return P.di(a)}},
hM:{"^":"d;$ti",
O:function(a,b){var z
for(z=J.aZ(b);z.u();)this.M(0,z.gD(z))},
k:function(a){return P.c0(this,"{","}")},
B:function(a,b){var z
for(z=new P.cg(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)}},
hL:{"^":"hM;$ti"},
e2:{"^":"d+k;$ti"}}],["","",,P,{"^":"",
fM:function(a){var z=J.q(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.aL(a)+"'"},
bZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fM(a)},
d5:function(a){return new P.iC(a)},
ad:function(a){H.bL(H.b(a))},
ck:{"^":"d;"},
"+bool":0,
bW:{"^":"d;dJ:a<,b",
H:function(a,b){if(b==null)return!1
if(!(b instanceof P.bW))return!1
return this.a===b.a&&this.b===b.b},
Z:function(a,b){return C.b.Z(this.a,b.gdJ())},
gC:function(a){var z=this.a
return(z^C.b.bx(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fB(H.hB(this))
y=P.b_(H.hz(this))
x=P.b_(H.hv(this))
w=P.b_(H.hw(this))
v=P.b_(H.hy(this))
u=P.b_(H.hA(this))
t=P.fC(H.hx(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b_:function(a){if(a>=10)return""+a
return"0"+a}}},
ao:{"^":"aT;"},
"+double":0,
b0:{"^":"d;ad:a<",
l:function(a,b){return new P.b0(C.b.l(this.a,b.gad()))},
G:function(a,b){return new P.b0(this.a-b.gad())},
a4:function(a,b){return C.b.a4(this.a,b.gad())},
ai:function(a,b){return C.b.ai(this.a,b.gad())},
H:function(a,b){if(b==null)return!1
if(!(b instanceof P.b0))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
Z:function(a,b){return C.b.Z(this.a,b.gad())},
k:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.b0(0-y).k(0)
x=z.$1(C.b.a9(y,6e7)%60)
w=z.$1(C.b.a9(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.b.a9(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
t:{
d1:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"d;",
ga7:function(){return H.ap(this.$thrownJsError)}},
dn:{"^":"I;",
k:function(a){return"Throw of null."}},
ae:{"^":"I;a,b,c,d",
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaG()+y+x
if(!this.a)return w
v=this.gaF()
u=P.bZ(this.b)
return w+v+": "+H.b(u)},
t:{
cK:function(a,b,c){return new P.ae(!0,a,b,c)},
fj:function(a){return new P.ae(!1,null,a,"Must not be null")}}},
dq:{"^":"ae;e,f,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
t:{
bv:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
hC:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
z=a>c}else z=!0
if(z)throw H.a(P.ar(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
z=b>c}else z=!0
if(z)throw H.a(P.ar(b,a,c,"end",f))
return b}return c}}},
fT:{"^":"ae;e,i:f>,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){if(J.aV(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
t:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a4(b)
return new P.fT(b,z,!0,a,c,"Index out of range")}}},
ib:{"^":"I;a",
k:function(a){return"Unsupported operation: "+this.a},
t:{
r:function(a){return new P.ib(a)}}},
i9:{"^":"I;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
t:{
dS:function(a){return new P.i9(a)}}},
by:{"^":"I;a",
k:function(a){return"Bad state: "+this.a},
t:{
ca:function(a){return new P.by(a)}}},
fv:{"^":"I;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bZ(z))+"."},
t:{
M:function(a){return new P.fv(a)}}},
dv:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga7:function(){return},
$isI:1},
fz:{"^":"I;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
l8:{"^":"d;"},
iC:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
H:{"^":"aT;"},
"+int":0,
br:{"^":"d;$ti",
b_:["cJ",function(a,b){return new H.dT(this,b,[H.co(this,"br",0)])}],
B:function(a,b){var z
for(z=this.gN(this);z.u();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gN(this)
for(y=0;z.u();)++y
return y},
ga6:function(a){var z,y
z=this.gN(this)
if(!z.u())throw H.a(H.db())
y=z.gD(z)
if(z.u())throw H.a(H.fX())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fj("index"))
if(b<0)H.U(P.ar(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.u();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.fV(this,"(",")")}},
fY:{"^":"d;$ti"},
i:{"^":"d;$ti"},
"+List":0,
c6:{"^":"d;$ti"},
b6:{"^":"d;",
gC:function(a){return P.d.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aT:{"^":"d;"},
"+num":0,
d:{"^":";",
H:function(a,b){return this===b},
gC:function(a){return H.aK(this)},
k:function(a){return"Instance of '"+H.aL(this)+"'"},
toString:function(){return this.k(this)}},
aM:{"^":"d;"},
m:{"^":"d;"},
"+String":0,
cb:{"^":"d;a8:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dy:function(a,b,c){var z=J.aZ(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.u())}else{a+=H.b(z.gD(z))
for(;z.u();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fK:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).V(z,a,b,c)
y.toString
z=new H.dT(new W.S(y),new W.fL(),[W.t])
return z.ga6(z)},
d4:function(a){return"wheel"},
aC:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eX(a)
if(typeof y==="string")z=a.tagName}catch(x){H.V(x)}return z},
iz:function(a,b){return document.createElement(a)},
an:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ee:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.it(a)
if(!!J.q(z).$isF)return z
return}else return a},
ei:function(a){var z=$.x
if(z===C.f)return a
return z.dQ(a)},
v:{"^":"aq;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ky:{"^":"c9;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
kz:{"^":"h;i:length=","%":"AccessibleNodeList"},
kA:{"^":"v;at:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kB:{"^":"v;at:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kG:{"^":"v;at:href}","%":"HTMLBaseElement"},
fn:{"^":"h;","%":"Response;Body"},
bS:{"^":"v;",$isbS:1,"%":"HTMLBodyElement"},
kH:{"^":"v;K:name=","%":"HTMLButtonElement"},
kI:{"^":"v;I:height},J:width}",
cA:function(a,b,c){var z=a.getContext(b,P.k4(c,null))
return z},
"%":"HTMLCanvasElement"},
kJ:{"^":"h;",
az:function(a){return P.T(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kK:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kM:{"^":"a_;a2:style=","%":"CSSFontFaceRule"},
kN:{"^":"a_;a2:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kO:{"^":"a_;a2:style=","%":"CSSPageRule"},
kP:{"^":"bm;i:length=","%":"CSSPerspective"},
kQ:{"^":"bV;m:x=,n:y=","%":"CSSPositionValue"},
kR:{"^":"bm;m:x=,n:y=,F:z=","%":"CSSRotation"},
a_:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kS:{"^":"bm;m:x=,n:y=,F:z=","%":"CSSScale"},
fw:{"^":"ir;i:length=",
bo:function(a,b){var z,y
z=$.$get$cV()
y=z[b]
if(typeof y==="string")return y
y=this.dG(a,b)
z[b]=y
return y},
dG:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fD()+b
if(z in a)return z
return b},
dD:function(a,b,c,d){a.setProperty(b,c,d)},
sI:function(a,b){a.height=b},
sJ:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"d;",
se4:function(a,b){this.dD(a,this.bo(a,"float"),b,"")}},
kT:{"^":"a_;a2:style=","%":"CSSStyleRule"},
bV:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bm:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kU:{"^":"bV;i:length=","%":"CSSTransformValue"},
kV:{"^":"bm;m:x=,n:y=,F:z=","%":"CSSTranslation"},
kW:{"^":"bV;i:length=","%":"CSSUnparsedValue"},
kX:{"^":"a_;a2:style=","%":"CSSViewportRule"},
kY:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kZ:{"^":"h;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
fE:{"^":"v;","%":"HTMLDivElement"},
l_:{"^":"t;",
gaU:function(a){return new W.bb(a,"mousedown",!1,[W.N])},
gaV:function(a){return new W.bb(a,"mousemove",!1,[W.N])},
gaW:function(a){return new W.bb(a,"mouseup",!1,[W.N])},
gaX:function(a){return new W.bb(a,W.d4(a),!1,[W.aN])},
"%":"Document|HTMLDocument|XMLDocument"},
l0:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
l1:{"^":"fF;",
gY:function(a){return a.a},
gU:function(a){return a.b},
ga0:function(a){return a.c},
"%":"DOMMatrix"},
fF:{"^":"h;",
gY:function(a){return a.a},
gU:function(a){return a.b},
ga0:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
l2:{"^":"fG;",
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
fG:{"^":"h;",
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
l3:{"^":"iv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.a7]},
$isp:1,
$asp:function(){return[P.a7]},
$ask:function(){return[P.a7]},
$isi:1,
$asi:function(){return[P.a7]},
$asl:function(){return[P.a7]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gJ(a))+" x "+H.b(this.gI(a))},
H:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa7)return!1
return a.left===z.gc5(b)&&a.top===z.gcg(b)&&this.gJ(a)===z.gJ(b)&&this.gI(a)===z.gI(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gJ(a)
w=this.gI(a)
return W.e1(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gci:function(a){return new P.ai(a.left,a.top,[null])},
gI:function(a){return a.height},
gc5:function(a){return a.left},
gcg:function(a){return a.top},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa7:1,
$asa7:I.au,
"%":";DOMRectReadOnly"},
l4:{"^":"ix;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$ask:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"DOMStringList"},
l5:{"^":"h;i:length=","%":"DOMTokenList"},
aq:{"^":"t;a2:style=,bu:namespaceURI=,ek:tagName=",
gdN:function(a){return new W.iy(a)},
k:function(a){return a.localName},
V:["aB",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d3
if(z==null){z=H.A([],[W.dk])
y=new W.dl(z)
z.push(W.dZ(null))
z.push(W.ea())
$.d3=y
d=y}else d=z
z=$.d2
if(z==null){z=new W.ed(d)
$.d2=z
c=z}else{z.a=d
c=z}}if($.a5==null){z=document
y=z.implementation.createHTMLDocument("")
$.a5=y
$.bY=y.createRange()
y=$.a5
y.toString
x=y.createElement("base")
J.f7(x,z.baseURI)
$.a5.head.appendChild(x)}z=$.a5
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a5
if(!!this.$isbS)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a5.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.A(C.M,a.tagName)){$.bY.selectNodeContents(w)
v=$.bY.createContextualFragment(b)}else{w.innerHTML=b
v=$.a5.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a5.body
if(w==null?z!=null:w!==z)J.cD(w)
c.b8(v)
document.adoptNode(v)
return v},function(a,b,c){return this.V(a,b,c,null)},"dZ",null,null,"gex",5,5,null],
sc4:function(a,b){this.aj(a,b)},
aA:function(a,b,c,d){a.textContent=null
a.appendChild(this.V(a,b,c,d))},
aj:function(a,b){return this.aA(a,b,null,null)},
b0:function(a){return a.getBoundingClientRect()},
gaU:function(a){return new W.ak(a,"mousedown",!1,[W.N])},
gaV:function(a){return new W.ak(a,"mousemove",!1,[W.N])},
gaW:function(a){return new W.ak(a,"mouseup",!1,[W.N])},
gaX:function(a){return new W.ak(a,W.d4(a),!1,[W.aN])},
$isaq:1,
"%":";Element"},
fL:{"^":"j:0;",
$1:function(a){return!!J.q(a).$isaq}},
l6:{"^":"v;I:height},K:name=,J:width}","%":"HTMLEmbedElement"},
l7:{"^":"af;S:error=","%":"ErrorEvent"},
af:{"^":"h;",
ax:function(a){return a.preventDefault()},
$isaf:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
F:{"^":"h;",
bE:["cH",function(a,b,c,d){if(c!=null)this.dk(a,b,c,!1)}],
dk:function(a,b,c,d){return a.addEventListener(b,H.a9(c,1),!1)},
dw:function(a,b,c,d){return a.removeEventListener(b,H.a9(c,1),!1)},
$isF:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e7|e8|eb|ec"},
lr:{"^":"v;K:name=","%":"HTMLFieldSetElement"},
ls:{"^":"iE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bo]},
$isp:1,
$asp:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$asl:function(){return[W.bo]},
"%":"FileList"},
lt:{"^":"F;S:error=","%":"FileReader"},
lu:{"^":"F;S:error=,i:length=","%":"FileWriter"},
lw:{"^":"h;a2:style=","%":"FontFace"},
lx:{"^":"F;",
ey:function(a,b,c){return a.forEach(H.a9(b,3),c)},
B:function(a,b){b=H.a9(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lz:{"^":"v;i:length=,K:name=","%":"HTMLFormElement"},
lB:{"^":"c9;m:x=,n:y=,F:z=","%":"Gyroscope"},
lC:{"^":"h;i:length=","%":"History"},
lD:{"^":"iS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lE:{"^":"v;I:height},K:name=,J:width}","%":"HTMLIFrameElement"},
lF:{"^":"v;I:height},J:width}","%":"HTMLImageElement"},
lH:{"^":"v;I:height},K:name=,J:width}","%":"HTMLInputElement"},
bs:{"^":"dR;",
ges:function(a){return a.which},
$isbs:1,
"%":"KeyboardEvent"},
lM:{"^":"v;at:href}","%":"HTMLLinkElement"},
lO:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lP:{"^":"c9;m:x=,n:y=,F:z=","%":"Magnetometer"},
lQ:{"^":"v;K:name=","%":"HTMLMapElement"},
ha:{"^":"v;S:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lT:{"^":"h;i:length=","%":"MediaList"},
lU:{"^":"F;",
R:function(a){return a.clone()},
"%":"MediaStream"},
lV:{"^":"F;aS:enabled=",
R:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lW:{"^":"F;",
bE:function(a,b,c,d){if(J.K(b,"message"))a.start()
this.cH(a,b,c,!1)},
"%":"MessagePort"},
lX:{"^":"v;K:name=","%":"HTMLMetaElement"},
lY:{"^":"iY;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hc(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hc:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lZ:{"^":"iZ;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hd(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hd:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
m_:{"^":"j0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bu]},
$isp:1,
$asp:function(){return[W.bu]},
$ask:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$asl:function(){return[W.bu]},
"%":"MimeTypeArray"},
N:{"^":"dR;bO:button=",
gca:function(a){var z,y,x
if(!!a.offsetX)return new P.ai(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.ee(z)).$isaq)throw H.a(P.r("offsetX is only supported on elements"))
y=W.ee(z)
z=[null]
x=new P.ai(a.clientX,a.clientY,z).G(0,J.eY(J.f_(y)))
return new P.ai(J.cE(x.a),J.cE(x.b),z)}},
$isN:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
S:{"^":"dg;a",
ga6:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.ca("No elements"))
if(y>1)throw H.a(P.ca("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.q(b)
if(!!z.$isS){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gN(b),y=this.a;z.u();)y.appendChild(z.gD(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
gN:function(a){var z=this.a.childNodes
return new W.d6(z,z.length,-1,null,[H.be(C.P,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asdg:function(){return[W.t]},
$ask:function(){return[W.t]},
$asi:function(){return[W.t]},
$ase2:function(){return[W.t]}},
t:{"^":"F;aw:parentNode=,aY:previousSibling=",
gc9:function(a){return new W.S(a)},
eg:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cI(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m7:{"^":"h;",
ef:[function(a){return a.previousNode()},"$0","gaY",1,0,4],
"%":"NodeIterator"},
hm:{"^":"j2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
ma:{"^":"v;I:height},K:name=,J:width}","%":"HTMLObjectElement"},
mc:{"^":"v;K:name=","%":"HTMLOutputElement"},
md:{"^":"v;K:name=","%":"HTMLParamElement"},
b7:{"^":"h;i:length=","%":"Plugin"},
mf:{"^":"j6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b7]},
$isp:1,
$asp:function(){return[W.b7]},
$ask:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$asl:function(){return[W.b7]},
"%":"PluginArray"},
mi:{"^":"h;",
b0:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mo:{"^":"jc;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hI(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hI:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mp:{"^":"v;i:length=,K:name=","%":"HTMLSelectElement"},
c9:{"^":"F;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mq:{"^":"af;S:error=","%":"SensorErrorEvent"},
mr:{"^":"v;K:name=","%":"HTMLSlotElement"},
ms:{"^":"e8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$ask:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asl:function(){return[W.bw]},
"%":"SourceBufferList"},
mt:{"^":"ji;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bx]},
$isp:1,
$asp:function(){return[W.bx]},
$ask:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$asl:function(){return[W.bx]},
"%":"SpeechGrammarList"},
mu:{"^":"af;S:error=","%":"SpeechRecognitionError"},
b9:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
mw:{"^":"jl;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hW(z))
return z},
gi:function(a){return a.length},
$asQ:function(){return[P.m,P.m]},
"%":"Storage"},
hW:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
i4:{"^":"v;",
V:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=W.fK("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.S(y).O(0,J.eV(z))
return y},
"%":"HTMLTableElement"},
mz:{"^":"v;",
V:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.V(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.ga6(z)
x.toString
z=new W.S(x)
w=z.ga6(z)
y.toString
w.toString
new W.S(y).O(0,new W.S(w))
return y},
"%":"HTMLTableRowElement"},
mA:{"^":"v;",
V:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.V(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.ga6(z)
y.toString
x.toString
new W.S(y).O(0,new W.S(x))
return y},
"%":"HTMLTableSectionElement"},
dB:{"^":"v;",
aA:function(a,b,c,d){var z
a.textContent=null
z=this.V(a,b,c,d)
a.content.appendChild(z)},
aj:function(a,b){return this.aA(a,b,null,null)},
$isdB:1,
"%":"HTMLTemplateElement"},
mB:{"^":"v;K:name=","%":"HTMLTextAreaElement"},
mD:{"^":"jt;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bB]},
$isp:1,
$asp:function(){return[W.bB]},
$ask:function(){return[W.bB]},
$isi:1,
$asi:function(){return[W.bB]},
$asl:function(){return[W.bB]},
"%":"TextTrackCueList"},
mE:{"^":"ec;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bA]},
$isp:1,
$asp:function(){return[W.bA]},
$ask:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$asl:function(){return[W.bA]},
"%":"TextTrackList"},
mF:{"^":"h;i:length=","%":"TimeRanges"},
mG:{"^":"jy;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bC]},
$isp:1,
$asp:function(){return[W.bC]},
$ask:function(){return[W.bC]},
$isi:1,
$asi:function(){return[W.bC]},
$asl:function(){return[W.bC]},
"%":"TouchList"},
mH:{"^":"h;i:length=","%":"TrackDefaultList"},
mK:{"^":"h;",
ez:[function(a){return a.parentNode()},"$0","gaw",1,0,4],
ef:[function(a){return a.previousNode()},"$0","gaY",1,0,4],
"%":"TreeWalker"},
dR:{"^":"af;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mM:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mO:{"^":"h;m:x=,F:z=","%":"VRStageBoundsPoint"},
mP:{"^":"ha;I:height},J:width}","%":"HTMLVideoElement"},
mQ:{"^":"F;i:length=","%":"VideoTrackList"},
aN:{"^":"N;",
ge0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
id:{"^":"F;",
gdM:function(a){var z,y
z=P.aT
y=new P.am(0,$.x,null,[z])
this.dr(a)
this.dz(a,W.ei(new W.ie(new P.jp(y,[z]))))
return y},
dz:function(a,b){return a.requestAnimationFrame(H.a9(b,1))},
dr:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ie:{"^":"j:0;a",
$1:function(a){this.a.dW(0,a)}},
mR:{"^":"F;"},
mV:{"^":"t;K:name=,bu:namespaceURI=","%":"Attr"},
mW:{"^":"jE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$ask:function(){return[W.a_]},
$isi:1,
$asi:function(){return[W.a_]},
$asl:function(){return[W.a_]},
"%":"CSSRuleList"},
mX:{"^":"fH;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
H:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa7)return!1
return a.left===z.gc5(b)&&a.top===z.gcg(b)&&a.width===z.gJ(b)&&a.height===z.gI(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e1(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gci:function(a){return new P.ai(a.left,a.top,[null])},
gI:function(a){return a.height},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mY:{"^":"jG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bq]},
$isp:1,
$asp:function(){return[W.bq]},
$ask:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asl:function(){return[W.bq]},
"%":"GamepadList"},
n0:{"^":"jI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n1:{"^":"fn;",
R:function(a){return a.clone()},
"%":"Request"},
n2:{"^":"jK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b9]},
$isp:1,
$asp:function(){return[W.b9]},
$ask:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$asl:function(){return[W.b9]},
"%":"SpeechRecognitionResultList"},
n3:{"^":"jM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bz]},
$isp:1,
$asp:function(){return[W.bz]},
$ask:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$asl:function(){return[W.bz]},
"%":"StyleSheetList"},
io:{"^":"c7;ds:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gP(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gP:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
v=z[w]
u=J.f(v)
if(u.gbu(v)==null)y.push(u.gK(v))}return y},
$asc7:function(){return[P.m,P.m]},
$asQ:function(){return[P.m,P.m]}},
iy:{"^":"io;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gP(this).length}},
bb:{"^":"dx;a,b,c,$ti",
c7:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.D(this,0))}},
ak:{"^":"bb;a,b,c,$ti"},
iA:{"^":"hX;a,b,c,d,e,$ti",
dd:function(a,b,c,d,e){this.dH()},
dS:function(a){if(this.b==null)return
this.dI()
this.b=null
this.d=null
return},
dH:function(){var z=this.d
if(z!=null&&this.a<=0)J.eD(this.b,this.c,z,!1)},
dI:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eC(x,this.c,z,!1)}},
t:{
al:function(a,b,c,d,e){var z=c==null?null:W.ei(new W.iB(c))
z=new W.iA(0,a,b,z,!1,[e])
z.dd(a,b,c,!1,e)
return z}}},
iB:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
ce:{"^":"d;cs:a<",
df:function(a){var z,y
z=$.$get$cf()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.L[y],W.kd())
for(y=0;y<12;++y)z.j(0,C.p[y],W.ke())}},
aa:function(a){return $.$get$e_().A(0,W.aC(a))},
a3:function(a,b,c){var z,y,x
z=W.aC(a)
y=$.$get$cf()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
t:{
dZ:function(a){var z,y
z=document.createElement("a")
y=new W.jd(z,window.location)
y=new W.ce(y)
y.df(a)
return y},
mZ:[function(a,b,c,d){return!0},"$4","kd",16,0,9],
n_:[function(a,b,c,d){var z,y,x,w,v
z=d.gcs()
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
return z},"$4","ke",16,0,9]}},
l:{"^":"d;$ti",
gN:function(a){return new W.d6(a,this.gi(a),-1,null,[H.be(this,a,"l",0)])}},
dl:{"^":"d;a",
aa:function(a){return C.c.bF(this.a,new W.ho(a))},
a3:function(a,b,c){return C.c.bF(this.a,new W.hn(a,b,c))}},
ho:{"^":"j:0;a",
$1:function(a){return a.aa(this.a)}},
hn:{"^":"j:0;a,b,c",
$1:function(a){return a.a3(this.a,this.b,this.c)}},
je:{"^":"d;cs:d<",
dh:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.b_(0,new W.jf())
y=b.b_(0,new W.jg())
this.b.O(0,z)
x=this.c
x.O(0,C.N)
x.O(0,y)},
aa:function(a){return this.a.A(0,W.aC(a))},
a3:["cL",function(a,b,c){var z,y
z=W.aC(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dL(c)
else if(y.A(0,"*::"+b))return this.d.dL(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
jf:{"^":"j:0;",
$1:function(a){return!C.c.A(C.p,a)}},
jg:{"^":"j:0;",
$1:function(a){return C.c.A(C.p,a)}},
jq:{"^":"je;e,a,b,c,d",
a3:function(a,b,c){if(this.cL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cy(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
t:{
ea:function(){var z=P.m
z=new W.jq(P.c5(C.o,z),P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),null)
z.dh(null,new H.h8(C.o,new W.jr(),[H.D(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jr:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jo:{"^":"d;",
aa:function(a){var z=J.q(a)
if(!!z.$isds)return!1
z=!!z.$isz
if(z&&W.aC(a)==="foreignObject")return!1
if(z)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.i.cE(b,"on"))return!1
return this.aa(a)}},
d6:{"^":"d;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aW(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
is:{"^":"d;a",$isF:1,t:{
it:function(a){if(a===window)return a
else return new W.is(a)}}},
dk:{"^":"d;"},
m8:{"^":"d;"},
mL:{"^":"d;"},
jd:{"^":"d;a,b"},
ed:{"^":"d;a",
b8:function(a){new W.jB(this).$2(a,null)},
ae:function(a,b){if(b==null)J.cD(a)
else b.removeChild(a)},
dC:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cy(a)
x=y.gds().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.V(t)}v="element unprintable"
try{v=J.aA(a)}catch(t){H.V(t)}try{u=W.aC(a)
this.dB(a,b,z,v,u,y,x)}catch(t){if(H.V(t) instanceof P.ae)throw t
else{this.ae(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dB:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ae(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aa(a)){this.ae(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.ae(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gP(f)
y=H.A(z.slice(0),[H.D(z,0)])
for(x=f.gP(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.c(y,x)
w=y[x]
if(!this.a.a3(a,J.fa(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$isdB)this.b8(a.content)}},
jB:{"^":"j:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dC(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ae(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eW(z)}catch(w){H.V(w)
v=z
if(x){u=J.f(v)
if(u.gaw(v)!=null){u.gaw(v)
u.gaw(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ir:{"^":"h+fx;"},
iu:{"^":"h+k;"},
iv:{"^":"iu+l;"},
iw:{"^":"h+k;"},
ix:{"^":"iw+l;"},
iD:{"^":"h+k;"},
iE:{"^":"iD+l;"},
iR:{"^":"h+k;"},
iS:{"^":"iR+l;"},
iY:{"^":"h+Q;"},
iZ:{"^":"h+Q;"},
j_:{"^":"h+k;"},
j0:{"^":"j_+l;"},
j1:{"^":"h+k;"},
j2:{"^":"j1+l;"},
j5:{"^":"h+k;"},
j6:{"^":"j5+l;"},
jc:{"^":"h+Q;"},
e7:{"^":"F+k;"},
e8:{"^":"e7+l;"},
jh:{"^":"h+k;"},
ji:{"^":"jh+l;"},
jl:{"^":"h+Q;"},
js:{"^":"h+k;"},
jt:{"^":"js+l;"},
eb:{"^":"F+k;"},
ec:{"^":"eb+l;"},
jx:{"^":"h+k;"},
jy:{"^":"jx+l;"},
jD:{"^":"h+k;"},
jE:{"^":"jD+l;"},
jF:{"^":"h+k;"},
jG:{"^":"jF+l;"},
jH:{"^":"h+k;"},
jI:{"^":"jH+l;"},
jJ:{"^":"h+k;"},
jK:{"^":"jJ+l;"},
jL:{"^":"h+k;"},
jM:{"^":"jL+l;"}}],["","",,P,{"^":"",
T:function(a){var z,y,x,w,v
if(a==null)return
z=P.J()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
k4:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cx(a,new P.k5(z))
return z},
d0:function(){var z=$.d_
if(z==null){z=J.bN(window.navigator.userAgent,"Opera",0)
$.d_=z}return z},
fD:function(){var z,y
z=$.cX
if(z!=null)return z
y=$.cY
if(y==null){y=J.bN(window.navigator.userAgent,"Firefox",0)
$.cY=y}if(y)z="-moz-"
else{y=$.cZ
if(y==null){y=P.d0()!==!0&&J.bN(window.navigator.userAgent,"Trident/",0)
$.cZ=y}if(y)z="-ms-"
else z=P.d0()===!0?"-o-":"-webkit-"}$.cX=z
return z},
k5:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mn:{"^":"F;S:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mI:{"^":"F;S:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ku:function(a){return Math.sqrt(a)},
e0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
H:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ai))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a3(this.a)
y=J.a3(this.b)
return P.iT(P.e0(P.e0(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ai(y,C.a.l(z,x),this.$ti)},
G:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.G()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.G()
if(typeof y!=="number")return H.u(y)
return new P.ai(z-x,w-y,this.$ti)}},
j7:{"^":"d;$ti"},
a7:{"^":"j7;$ti"}}],["","",,P,{"^":"",l9:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},la:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},lb:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},lc:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},ld:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},le:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},lf:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lg:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},lh:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},li:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},lj:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},lk:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},ll:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},lm:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},ln:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},lo:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},lp:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},lq:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},lv:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},ly:{"^":"aD;m:x=,n:y=","%":"SVGForeignObjectElement"},fR:{"^":"aD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aD:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lG:{"^":"aD;m:x=,n:y=","%":"SVGImageElement"},lL:{"^":"iV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.df]},
$isi:1,
$asi:function(){return[P.df]},
$asl:function(){return[P.df]},
"%":"SVGLengthList"},lR:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},lS:{"^":"h;Y:a=,U:b=,a0:c=","%":"SVGMatrix"},m9:{"^":"j4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dp]},
$isi:1,
$asi:function(){return[P.dp]},
$asl:function(){return[P.dp]},
"%":"SVGNumberList"},me:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},mg:{"^":"h;m:x=,n:y=","%":"SVGPoint"},mh:{"^":"h;i:length=","%":"SVGPointList"},mj:{"^":"h;m:x=,n:y=","%":"SVGRect"},mk:{"^":"fR;m:x=,n:y=","%":"SVGRectElement"},ds:{"^":"z;",$isds:1,"%":"SVGScriptElement"},mx:{"^":"jn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"SVGStringList"},z:{"^":"aq;",
sc4:function(a,b){this.aj(a,b)},
V:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.dk])
z.push(W.dZ(null))
z.push(W.ea())
z.push(new W.jo())
c=new W.ed(new W.dl(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dZ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.S(w)
u=z.ga6(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaU:function(a){return new W.ak(a,"mousedown",!1,[W.N])},
gaV:function(a){return new W.ak(a,"mousemove",!1,[W.N])},
gaW:function(a){return new W.ak(a,"mouseup",!1,[W.N])},
gaX:function(a){return new W.ak(a,"mousewheel",!1,[W.aN])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},my:{"^":"aD;m:x=,n:y=","%":"SVGSVGElement"},i5:{"^":"aD;","%":"SVGTextPathElement;SVGTextContentElement"},mC:{"^":"i5;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mJ:{"^":"jA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dE]},
$isi:1,
$asi:function(){return[P.dE]},
$asl:function(){return[P.dE]},
"%":"SVGTransformList"},mN:{"^":"aD;m:x=,n:y=","%":"SVGUseElement"},iU:{"^":"h+k;"},iV:{"^":"iU+l;"},j3:{"^":"h+k;"},j4:{"^":"j3+l;"},jm:{"^":"h+k;"},jn:{"^":"jm+l;"},jz:{"^":"h+k;"},jA:{"^":"jz+l;"}}],["","",,P,{"^":"",kC:{"^":"h;i:length=","%":"AudioBuffer"},kD:{"^":"ip;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new P.fl(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"AudioParamMap"},fl:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},kE:{"^":"h;aS:enabled=","%":"AudioTrack"},kF:{"^":"F;i:length=","%":"AudioTrackList"},fm:{"^":"F;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mb:{"^":"fm;i:length=","%":"OfflineAudioContext"},ip:{"^":"h+Q;"}}],["","",,P,{"^":"",ml:{"^":"h;",
bD:function(a,b){return a.activeTexture(b)},
bG:function(a,b,c){return a.attachShader(b,c)},
bH:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindFramebuffer(b,c)},
bK:function(a,b,c){return a.bindTexture(b,c)},
bL:function(a,b){return a.blendEquation(b)},
bM:function(a,b,c){return a.blendFunc(b,c)},
bN:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b){return a.clear(b)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bW:function(a,b){return a.depthMask(b)},
bX:function(a,b){return a.disable(b)},
bY:function(a,b,c,d){return a.drawArrays(b,c,d)},
bZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.T(a.getContextAttributes())},
b1:function(a,b){return a.getExtension(b)},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c){return a.uniform1f(b,c)},
ck:function(a,b,c){return a.uniform1fv(b,c)},
cl:function(a,b,c){return a.uniform1i(b,c)},
cm:function(a,b,c){return a.uniform1iv(b,c)},
cn:function(a,b,c){return a.uniform2fv(b,c)},
co:function(a,b,c){return a.uniform3fv(b,c)},
cp:function(a,b,c){return a.uniform4fv(b,c)},
cq:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cr:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ct:function(a,b){return a.useProgram(b)},
cu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
cb:function(a,b,c,d,e,f,g,h){a.readPixels(b,c,d,e,f,g,h)},
"%":"WebGLRenderingContext"},mm:{"^":"h;",
dO:function(a,b){return a.beginTransformFeedback(b)},
dR:function(a,b){return a.bindVertexArray(b)},
e_:function(a){return a.createVertexArray()},
e1:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e2:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e3:function(a){return a.endTransformFeedback()},
ep:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eq:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bD:function(a,b){return a.activeTexture(b)},
bG:function(a,b,c){return a.attachShader(b,c)},
bH:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindFramebuffer(b,c)},
bK:function(a,b,c){return a.bindTexture(b,c)},
bL:function(a,b){return a.blendEquation(b)},
bM:function(a,b,c){return a.blendFunc(b,c)},
bN:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b){return a.clear(b)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bW:function(a,b){return a.depthMask(b)},
bX:function(a,b){return a.disable(b)},
bY:function(a,b,c,d){return a.drawArrays(b,c,d)},
bZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.T(a.getContextAttributes())},
b1:function(a,b){return a.getExtension(b)},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c){return a.uniform1f(b,c)},
ck:function(a,b,c){return a.uniform1fv(b,c)},
cl:function(a,b,c){return a.uniform1i(b,c)},
cm:function(a,b,c){return a.uniform1iv(b,c)},
cn:function(a,b,c){return a.uniform2fv(b,c)},
co:function(a,b,c){return a.uniform3fv(b,c)},
cp:function(a,b,c){return a.uniform4fv(b,c)},
cq:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cr:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ct:function(a,b){return a.useProgram(b)},
cu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
cb:function(a,b,c,d,e,f,g,h){a.readPixels(b,c,d,e,f,g,h)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mv:{"^":"jk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.T(a.item(b))},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.c6]},
$isi:1,
$asi:function(){return[P.c6]},
$asl:function(){return[P.c6]},
"%":"SQLResultSetRowList"},jj:{"^":"h+k;"},jk:{"^":"jj+l;"}}],["","",,G,{"^":"",
ih:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.m])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.c(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.c(z,y)
z[y]=w}return C.c.ah(z,"\n")},
dV:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.bU(a,b)
z.b9(a,y,c)
z.bR(a,y)
x=z.b5(a,y,35713)
if(x!=null&&J.K(x,!1)){w=z.b4(a,y)
P.ad("E:Compilation failed:")
P.ad("E:"+G.ih(c))
P.ad("E:Failure:")
P.ad(C.i.l("E:",w))
throw H.a(w)}return y},
hp:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.p(b)
d.al(0,a)
e.p(c)
e.al(0,a)
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
r=Math.sqrt(e.gav())
if(r===0)return!1
e.T(0,-1/r)
return!0},
d7:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bP(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bQ(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.c(a,y)
v=J.cB(a[y])
if(z>=w)return H.c(b,z)
b[z]=v}return b},
fO:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bP(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x;++z
if(y>=a.length)return H.c(a,y)
x=J.bQ(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
fP:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bP(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bQ(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.cB(a[y])
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.eZ(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
fN:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aW(a[y],0)
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.aW(a[y],1)
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.aW(a[y],2)
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.aW(a[y],3)
if(z>=w)return H.c(b,z)
b[z]=x}return b},
iP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a6(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.H]],v=[P.ao],u=[T.a1],t=[T.e],s=[T.n];y.u();){r=y.d
if(!x.as(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.ep>0)H.bL("I: "+q)
continue}p=z.h(0,r)
switch($.$get$X().h(0,r).a){case"vec2":b.ab(r,G.fO(H.bg(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.ab(r,G.d7(H.bg(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.ab(r,G.fP(H.bg(p,"$isi",u,"$asi"),null),4)
break
case"float":b.ab(r,new Float32Array(H.bE(H.bg(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.ab(r,G.fN(H.bg(p,"$isi",w,"$asi"),null),4)
break}}},
b3:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.J()
w=J.eM(z.a)
v=new G.hb(z,w,4,x,y,null,0,-1,null,null,P.J(),"meshdata:"+a,!1,!0)
u=G.d7(c.d,null)
x.j(0,"aPosition",J.bj(z.a))
v.ch=u
v.bg("aPosition",u,3)
t=$.$get$X().h(0,"aPosition")
if(t==null)H.U("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bh(z.a,w)
z.c1(0,s,0)
z.cv(0,x.h(0,"aPosition"),s,t.bh(),5126,!1,0,0)
y=c.cV()
v.y=J.bj(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bE(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bE(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bE(y))
v.Q=5125}J.bh(z.a,w)
y=v.y
x=v.cx
J.aX(z.a,34963,y)
J.bM(z.a,34963,x,35048)
G.iP(c,v)
return v},
aJ:{"^":"d;aS:c>"},
cc:{"^":"aJ;d,a,b,c",
bi:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.dQ(H.ka(this),null))+"}["+this.a+"]"],[P.m])
for(y=this.d,x=new H.a6(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.ah(z,"\n")}},
fo:{"^":"du;"},
fq:{"^":"d;a,b",
c1:function(a,b,c){J.eS(this.a,b)
if(c>0)J.fg(this.a,b,c)},
cv:function(a,b,c,d,e,f,g,h){J.aX(this.a,34962,b)
J.fh(this.a,c,d,e,!1,g,h)}},
fQ:{"^":"d;a,b,c,d,e"},
ag:{"^":"d;Y:a>,U:b>,a0:c>",t:{
G:function(a,b,c){return new G.ag(a,b,c)}}},
bn:{"^":"d;Y:a>,U:b>,a0:c>,d"},
b2:{"^":"d;a,b,c,d,e",
X:function(a){switch($.$get$X().h(0,a).a){case"vec2":this.e.j(0,a,H.A([],[T.n]))
break
case"vec3":this.e.j(0,a,H.A([],[T.e]))
break
case"vec4":this.e.j(0,a,H.A([],[T.a1]))
break
case"float":this.e.j(0,a,H.A([],[P.ao]))
break
case"uvec4":this.e.j(0,a,H.A([],[[P.i,P.H]]))
break}},
cO:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.bn(z,z+1,z+2,z+3))},
bf:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x].R(0))},
cP:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.ag(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.bi(a[x]))},
am:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x)z.push(b[x].R(0))},
an:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x)z.push(J.bi(b[x]))},
cQ:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.bn(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].R(0))},
cV:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.H])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.c(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.c(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.c(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.c(w,u)
w[u]=x
r=u+1
if(r>=v)return H.c(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.c(w,r)
w[r]=p
r=u+3
if(r>=v)return H.c(w,r)
w[r]=x
x=u+4
if(x>=v)return H.c(w,x)
w[x]=p
p=u+5
if(p>=v)return H.c(w,p)
w[p]=q.d
u+=6}return w},
cX:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.j(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.n(t))}},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.bn(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a6(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$X().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.ah(z," ")}},
dD:{"^":"d;a,b,c"},
dC:{"^":"d;a,b,c"},
h9:{"^":"cc;d,a,b,c",
d0:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$cL())
z.j(0,"cStencilFunc",$.$get$dw())},
t:{
b4:function(a){var z=new G.h9(P.J(),a,!1,!0)
z.d0(a)
return z}}},
hb:{"^":"aJ;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bg:function(a,b,c){var z,y
C.i.bp(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.aX(z.a,34962,y)
J.bM(z.a,34962,b,35048)},
cY:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ab:function(a,b,c){var z,y,x,w,v
z=J.cv(a,0)===105
if(z&&this.z===0)this.z=C.b.cM(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bj(x.a))
this.bg(a,b,c)
w=$.$get$X().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bh(x.a,this.e)
x.c1(0,v,z?1:0)
x.cv(0,y.h(0,a),v,w.bh(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a6(z,z.r,null,null,[H.D(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.ah(y,"  ")}},
ht:{"^":"cc;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cR:function(a,b){var z
if(typeof a!=="number")return a.eu()
if(typeof b!=="number")return H.u(b)
z=a/b
if(this.z===z)return
this.z=z
this.bk()},
bk:function(){var z,y,x,w,v,u
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
bi:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.e(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.p(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.q(t)
x=!!y.$isa1
q=x?y.gay(t):1
if(!!y.$ise){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
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
c.p(this.db)
c.c8(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hG:{"^":"aJ;d,e,f,r,x,y,z,Q,ch,a,b,c",
d2:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.cC(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.cC(w.a,v,t))}},
d6:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a6(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.as(0,v))x.push(v)}for(z=this.x,y=new P.cg(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
da:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a6(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cv(t,0)){case 117:if(w.as(0,t)){s=b.h(0,t)
if(v.as(0,t))H.bL("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$X().h(0,t)
if(r==null)H.U("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bR(x.a,q,s)
else if(!!J.q(s).$isfU)J.fe(x.a,q,s)
break
case"float":if(r.c===0)J.fc(x.a,q,s)
else if(!!J.q(s).$isc_)J.fd(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ac(s,"$isC").a
J.cJ(x.a,q,!1,p)}else if(!!J.q(s).$isc_)J.cJ(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ac(s,"$isR").a
J.cI(x.a,q,!1,p)}else if(!!J.q(s).$isc_)J.cI(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cH(o,q,H.ac(s,"$isa1").a)
else J.cH(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cG(o,q,H.ac(s,"$ise").a)
else J.cG(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cF(o,q,H.ac(s,"$isn").a)
else J.cF(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cs(x.a,33984+p)
p=H.ac(s,"$isi6").cZ()
J.cu(x.a,3553,p)
p=this.ch
J.bR(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cs(x.a,33984+p)
p=H.ac(s,"$isi6").cZ()
J.cu(x.a,34067,p)
p=this.ch
J.bR(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bL("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.K(s,!0)
o=x.a
if(p)J.aY(o,2929)
else J.bO(o,2929)
break
case"cStencilFunc":H.ac(s,"$isdD")
p=s.a
o=x.a
if(p===1281)J.bO(o,2960)
else{J.aY(o,2960)
o=s.b
n=s.c
J.f9(x.a,p,o,n)}break
case"cDepthWrite":J.eN(x.a,s)
break
case"cBlendEquation":H.ac(s,"$isdC")
p=s.a
o=x.a
if(p===1281)J.bO(o,3042)
else{J.aY(o,3042)
o=s.b
n=s.c
J.eH(x.a,o,n)
J.eG(x.a,p)}break}++u
break}}m=P.d1(0,0,0,Date.now()-new P.bW(z,!1).a,0,0)
""+u
m.k(0)},
cU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.ff(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bm()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x){w=b[x]
this.da(w.a,w.bi())}y=this.Q
y.af(0)
for(v=a.cy,u=new H.a6(v,v.r,null,null,[H.D(v,0)]),u.c=v.e;u.u();)y.M(0,u.d)
t=this.d6()
if(t.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.bh(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cY()
u=a.Q
r=a.z
if(s)J.eE(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eR(q,y,v,u,0,r)
else J.eQ(q,y,v,u,0)}else{u=z.a
if(r>1)J.eP(u,y,0,v,r)
else J.eO(u,y,0,v)}if(s)J.eT(z.a)},
t:{
hH:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.W(null,null,null,P.m)
y=c.b
x=d.b
w=c.f
v=J.eL(b.a)
u=G.dV(b.a,35633,y)
J.ct(b.a,v,u)
t=G.dV(b.a,35632,x)
J.ct(b.a,v,t)
if(w.length>0)J.fb(b.a,v,w,35980)
J.f5(b.a,v)
if(J.f4(b.a,v,35714)!==!0)H.U(J.f3(b.a,v))
z=new G.hG(b,c,d,v,P.c5(c.c,null),P.J(),P.J(),z,null,a,!1,!0)
z.d2(a,b,c,d)
return z}}},
w:{"^":"d;a,b,c",
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hN:{"^":"d;a,b,c,d,e,f,r,x",
cN:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.bb(z)},
be:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x])
C.c.bb(y)},
d3:function(a,b){this.b=this.dc(!0,a,b)},
bj:function(a){return this.d3(a,null)},
dc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
s=$.$get$X().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.c(z,u)
q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.O(w,b)
w.push("}")
return C.c.ah(w,"\n")},
t:{
dt:function(a){return new G.hN(a,null,[],[],[],[],0,P.J())}}},
du:{"^":"aJ;",
a5:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",hU:{"^":"d;",
d4:function(a,b,c){var z,y,x
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
x=this.dg(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dg:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iz("span",null)
y=J.cz(v)
J.f(y).sJ(y,"1px")
C.n.sI(y,""+d+"px")
C.n.se4(y,"left")
x=C.n.bo(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hV:{"^":"hU;e,f,a,b,c,d",
d8:function(a,b){var z,y,x,w,v;++this.e
if(J.aV(J.eB(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eo(z,2)+" fps"
y=this.c;(y&&C.C).aj(y,b)
x=C.b.a9(30*C.t.dT(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cz(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d7:function(a){return this.d8(a,"")}}}],["","",,A,{"^":"",
en:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eU(b)!==!0)return
z=b.d9(c)
b.k(0)
y=C.c.ged(e)
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
x.dY(new T.R(v))
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
a.cU(b.cx,e,d)
if(0>=e.length)return H.c(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.E)(y),++s)A.en(a,y[s],z,d,e)},
b5:{"^":"du;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
d9:function(a){var z=this.dx
z.p(a)
z.c8(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
dr:{"^":"aJ;d,e,c9:f>,a,b,c"},
hF:{"^":"aJ;d,e,f,r,x,y,z,Q,a,b,c",
cT:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eF(v.a,36160,z)
J.fi(v.a,this.x,this.y,x,w)
if(y!==0)J.eI(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.cc(P.J(),"transforms",!1,!0))
r=new T.C(new Float32Array(16))
r.L()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.E)(x),++q)A.en(v,x[q],r,a,s)
if(0>=s.length)return H.c(s,-1)
s.pop()}},
cS:function(){return this.cT(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fy:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.e(new Float32Array(3))
x.q(z,y,d2)
w=new T.e(new Float32Array(3))
w.q(d0,y,d2)
v=new T.e(new Float32Array(3))
v.q(d0,d1,d2)
u=new T.e(new Float32Array(3))
u.q(z,d1,d2)
t=-d2
s=new T.e(new Float32Array(3))
s.q(z,y,t)
r=new T.e(new Float32Array(3))
r.q(z,d1,t)
q=new T.e(new Float32Array(3))
q.q(d0,d1,t)
p=new T.e(new Float32Array(3))
p.q(d0,y,t)
o=new T.e(new Float32Array(3))
o.q(z,d1,t)
n=new T.e(new Float32Array(3))
n.q(z,d1,d2)
m=new T.e(new Float32Array(3))
m.q(d0,d1,d2)
l=new T.e(new Float32Array(3))
l.q(d0,d1,t)
k=new T.e(new Float32Array(3))
k.q(d0,y,d2)
j=new T.e(new Float32Array(3))
j.q(z,y,d2)
i=new T.e(new Float32Array(3))
i.q(z,y,t)
h=new T.e(new Float32Array(3))
h.q(d0,y,t)
g=new T.e(new Float32Array(3))
g.q(d0,y,t)
f=new T.e(new Float32Array(3))
f.q(d0,d1,t)
e=new T.e(new Float32Array(3))
e.q(d0,d1,d2)
d=new T.e(new Float32Array(3))
d.q(d0,y,d2)
c=new T.e(new Float32Array(3))
c.q(z,y,t)
b=new T.e(new Float32Array(3))
b.q(z,y,d2)
y=new T.e(new Float32Array(3))
y.q(z,d1,d2)
a=new T.e(new Float32Array(3))
a.q(z,d1,t)
z=new T.n(new Float32Array(2))
z.v(c7,c9)
t=new T.n(new Float32Array(2))
t.v(c6,c9)
a0=new T.n(new Float32Array(2))
a0.v(c6,c8)
a1=new T.n(new Float32Array(2))
a1.v(c7,c8)
a2=new T.n(new Float32Array(2))
a2.v(c6,c9)
a3=new T.n(new Float32Array(2))
a3.v(c6,c8)
a4=new T.n(new Float32Array(2))
a4.v(c7,c8)
a5=new T.n(new Float32Array(2))
a5.v(c7,c9)
a6=new T.n(new Float32Array(2))
a6.v(c7,c8)
a7=new T.n(new Float32Array(2))
a7.v(c7,c9)
a8=new T.n(new Float32Array(2))
a8.v(c6,c9)
a9=new T.n(new Float32Array(2))
a9.v(c6,c8)
b0=new T.n(new Float32Array(2))
b0.v(c6,c8)
b1=new T.n(new Float32Array(2))
b1.v(c7,c8)
b2=new T.n(new Float32Array(2))
b2.v(c7,c9)
b3=new T.n(new Float32Array(2))
b3.v(c6,c9)
b4=new T.n(new Float32Array(2))
b4.v(c6,c9)
b5=new T.n(new Float32Array(2))
b5.v(c6,c8)
b6=new T.n(new Float32Array(2))
b6.v(c7,c8)
b7=new T.n(new Float32Array(2))
b7.v(c7,c9)
b8=new T.n(new Float32Array(2))
b8.v(c7,c9)
b9=new T.n(new Float32Array(2))
b9.v(c6,c9)
c0=new T.n(new Float32Array(2))
c0.v(c6,c8)
c1=new T.n(new Float32Array(2))
c1.v(c7,c8)
c2=new G.b2(!1,[],[],[],P.J())
c2.X("aTexUV")
c2.X("aNormal")
c2.cO(6)
c2.bf([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.am("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dW(),c3<6;++c3){c4=z[c3]
c2.an("aNormal",[c4,c4,c4,c4])}return c2},
fA:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c/2
y=[]
x=[]
w=[]
v=new T.e(new Float32Array(3))
v.q(0,z,0)
y.push(v)
v=new T.n(new Float32Array(2))
v.v(0,0)
x.push(v)
v=new T.e(new Float32Array(3))
v.q(0,1,0)
w.push(v)
v=-z
u=new T.e(new Float32Array(3))
u.q(0,v,0)
y.push(u)
u=new T.n(new Float32Array(2))
u.v(1,1)
x.push(u)
u=new T.e(new Float32Array(3))
u.q(0,-1,0)
w.push(u)
for(t=0;t<d;++t){s=t/d
u=s*3.141592653589793*2
r=Math.sin(u)
q=Math.cos(u)
u=new Float32Array(3)
u[0]=r*a
u[1]=z
u[2]=q*a
y.push(new T.e(u))
u=new Float32Array(2)
u[0]=s
u[1]=1
x.push(new T.n(u))
u=new Float32Array(3)
u[0]=0
u[1]=1
u[2]=0
w.push(new T.e(u))
u=new Float32Array(3)
u[0]=r*b
u[1]=v
u[2]=q*b
y.push(new T.e(u))
u=new Float32Array(2)
u[0]=s
u[1]=0
x.push(new T.n(u))
u=new Float32Array(3)
u[0]=0
u[1]=-1
u[2]=0
w.push(new T.e(u))}for(v=2*d,t=0;t<v;t=p){p=t+2
if(p>=y.length)return H.c(y,p)
y.push(y[p])
u=t+3
if(u>=y.length)return H.c(y,u)
y.push(y[u])
if(p>=x.length)return H.c(x,p)
x.push(x[p])
if(u>=x.length)return H.c(x,u)
x.push(x[u])
o=y.length
if(p>=o)return H.c(y,p)
n=y[p]
if(u>=o)return H.c(y,u)
m=y[u]
u=t+4
if(u>=o)return H.c(y,u)
l=y[u]
u=new Float32Array(3)
k=new T.e(new Float32Array(3))
G.hp(n,m,l,new T.e(u),k)
w.push(k)
w.push(k)}v=[]
u=[]
j=new G.b2(!1,v,u,[],P.J())
j.X("aTexUV")
j.bf(y)
j.am("aTexUV",x)
j.X("aNormal")
j.an("aNormal",w)
for(i=d*2,t=0;t<d;t=g){h=t*2+2
m=h+1
g=t+1
f=(g===d?0:g)*2+2
e=f+1
v.push(new G.ag(0,h,f))
v.push(new G.ag(1,e,m))
u.push(new G.bn(i+f,i+h,i+m,i+e))}return j},
fS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.c.O(z,$.$get$d9())
C.c.O(y,$.$get$da())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.E)(z),++u){t=z[u]
s=J.f(t)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
q=new T.e(new Float32Array(3))
q.p(r)
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
q.M(0,y[r])
q.T(0,0.5)
q.E(0)
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
p=new T.e(new Float32Array(3))
p.p(r)
r=s.ga0(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
p.M(0,y[r])
p.T(0,0.5)
p.E(0)
r=s.ga0(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
o=new T.e(new Float32Array(3))
o.p(r)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
o.M(0,y[r])
o.T(0,0.5)
o.E(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.ag(s.gY(t),n,l))
w.push(new G.ag(s.gU(t),m,n))
w.push(new G.ag(s.ga0(t),l,m))
w.push(new G.ag(n,m,l))}}k=new G.b2(!1,[],[],[],P.J())
k.X("aTexUV")
k.X("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.E)(z),++u){t=z[u]
s=J.f(t)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
j=y[r]
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
i=y[r]
s=s.ga0(t)
if(s>>>0!==s||s>=y.length)return H.c(y,s)
h=y[s]
s=J.f(j)
r=s.gF(j)
g=s.gm(j)
g=Math.atan2(H.a8(r),H.a8(g))
s=Math.acos(H.a8(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.f(i)
g=s.gF(i)
f=s.gm(i)
f=Math.atan2(H.a8(g),H.a8(f))
s=Math.acos(H.a8(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.f(h)
f=s.gF(h)
e=s.gm(h)
e=Math.atan2(H.a8(f),H.a8(e))
s=Math.acos(H.a8(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.an("aNormal",[j,i,h])
k.cP([j.a1(b),i.a1(b),h.a1(b)])
k.am("aTexUV",[new T.n(r),new T.n(g),new T.n(f)])}return k},
hO:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p
z=h+1
y=g+1
x=B.i7(B.hs(new B.hP(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.b2(!1,[],[],w,P.J())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.E)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.bi(s[r]))}v.cW(z,y,!1)
v.cX(z,y)
v.X("aNormal")
for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.E)(x),++t){s=x[t]
for(r=0;q=s.length,r<q;r+=2){p=r+1
if(p>=q)return H.c(s,p)
p=s[p]
u.h(0,"aNormal").push(J.bi(p))}}return v},
i7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.e(y)
w=new Float32Array(3)
v=new T.e(w)
u=new Float32Array(3)
t=new T.e(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.c(a,o)
n=a[o]
m=[]
z.push(m)
q=n.a
o=q[2]
if(Math.abs(o)>0.7071067811865476){l=q[1]
k=l*l+o*o
j=1/Math.sqrt(k)
w[0]=0
w[1]=-q[2]*j
w[2]=q[1]*j
u[0]=k*j
u[1]=-q[0]*(q[1]*j)
u[2]=q[0]*(-q[2]*j)}else{o=q[0]
l=q[1]
k=o*o+l*l
j=1/Math.sqrt(k)
w[0]=-q[1]*j
w[1]=q[0]*j
w[2]=0
u[0]=-q[2]*(q[0]*j)
u[1]=q[2]*(-q[1]*j)
u[2]=k*j}v.E(0)
t.E(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.p(p)
x.ar(v,g)
x.ar(t,f)
q=new T.e(new Float32Array(3))
q.p(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.ar(v,g)
x.ar(t,f)
x.E(0)
q=new T.e(new Float32Array(3))
q.p(x)
m.push(q)}}return z},
hs:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.e(new Float32Array(3))
x=new T.e(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.al(0,y)
t=new T.e(new Float32Array(3))
t.p(y)
z.push(t)
t=new T.e(new Float32Array(3))
t.p(x)
z.push(t)}return z},
hP:{"^":"j:17;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sm(0,y*v)
b.sn(0,y*u)
b.sF(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",h1:{"^":"d;a,b,c",
d_:function(a){var z
a=document
z=W.bs
W.al(a,"keydown",new D.h3(this),!1,z)
W.al(a,"keyup",new D.h4(this),!1,z)},
t:{
h2:function(a){var z=P.H
z=new D.h1(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z))
z.d_(a)
return z}}},h3:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.M(0,J.cA(a))
z.b.M(0,a.which)}},h4:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.cc(0,J.cA(a))
z.c.M(0,a.which)}},he:{"^":"d;a,b,c,d,e,f,r,x",
d1:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gaV(a)
W.al(y.a,y.b,new D.hg(this),!1,H.D(y,0))
y=z.gaU(a)
W.al(y.a,y.b,new D.hh(this),!1,H.D(y,0))
y=z.gaW(a)
W.al(y.a,y.b,new D.hi(this),!1,H.D(y,0))
z=z.gaX(a)
W.al(z.a,z.b,new D.hj(this),!1,H.D(z,0))},
t:{
hf:function(a){var z=P.H
z=new D.he(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),0,0,0,0,0)
z.d1(a)
return z}}},hg:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.ax(a)
y=this.a
y.r=z.gca(a).a
y.x=z.gca(a).b
y.d=a.movementX
y.e=a.movementY}},hh:{"^":"j:5;a",
$1:function(a){var z=J.f(a)
z.ax(a)
P.ad("BUTTON "+H.b(z.gbO(a)))
z=this.a
z.a.M(0,a.button)
z.b.M(0,a.button)}},hi:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.ax(a)
y=this.a
y.a.cc(0,z.gbO(a))
y.c.M(0,a.button)}},hj:{"^":"j:18;a",
$1:function(a){var z=J.f(a)
z.ax(a)
this.a.f=z.ge0(a)}},hr:{"^":"fo;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bf:function(a){var z,y
z=C.O.e5(a,0,new A.kc())
if(typeof z!=="number")return H.u(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kc:{"^":"j:19;",
$2:function(a,b){var z,y
z=J.ay(a,J.a3(b))
if(typeof z!=="number")return H.u(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",R:{"^":"d;bs:a<",
p:function(a){var z,y
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
k:function(a){return"[0] "+this.a_(0).k(0)+"\n[1] "+this.a_(1).k(0)+"\n[2] "+this.a_(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.c(z,b)
return z[b]},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.R){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bf(this.a)},
a_:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.c(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.c(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.c(y,x)
z[2]=y[x]
return new T.e(z)},
R:function(a){var z=new T.R(new Float32Array(9))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.R(z)
y.p(this)
x=b.gbs()
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
G:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.R(z)
y.p(this)
x=b.gbs()
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
dY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.p(a)
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
a1:function(a){var z,y
z=new Float32Array(9)
y=new T.R(z)
y.p(this)
z[0]=z[0]*a
z[1]=z[1]*a
z[2]=z[2]*a
z[3]=z[3]*a
z[4]=z[4]*a
z[5]=z[5]*a
z[6]=z[6]*a
z[7]=z[7]*a
z[8]=z[8]*a
return y}},C:{"^":"d;bt:a<",
p:function(a){var z,y
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
k:function(a){return"[0] "+this.a_(0).k(0)+"\n[1] "+this.a_(1).k(0)+"\n[2] "+this.a_(2).k(0)+"\n[3] "+this.a_(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.c(z,b)
return z[b]},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.bf(this.a)},
a_:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.c(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.c(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.c(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.c(y,x)
z[3]=y[x]
return new T.a1(z)},
R:function(a){var z=new T.C(new Float32Array(16))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
x=b.gbt()
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
G:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
x=b.gbt()
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
cB:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
if(typeof a==="number"){x=a
w=x
v=w}else{v=null
w=null
x=null}u=z[0]
if(typeof v!=="number")return H.u(v)
z[0]=u*v
z[1]=z[1]*v
z[2]=z[2]*v
z[3]=z[3]*v
u=z[4]
if(typeof w!=="number")return H.u(w)
z[4]=u*w
z[5]=z[5]*w
z[6]=z[6]*w
z[7]=z[7]*w
u=z[8]
if(typeof x!=="number")return H.u(x)
z[8]=u*x
z[9]=z[9]*x
z[10]=z[10]*x
z[11]=z[11]*x
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
a1:function(a){return this.cB(a,null,null)},
L:function(){var z=this.a
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
c8:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},n:{"^":"d;bB:a<",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
p:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.n){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.bf(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.n(z)
y.p(this)
x=b.gbB()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.n(z)
y.p(this)
x=b.gbB()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.c(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
T:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a1:function(a){var z=new T.n(new Float32Array(2))
z.p(this)
z.T(0,a)
return z},
R:function(a){var z=new T.n(new Float32Array(2))
z.p(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},e:{"^":"d;aQ:a<",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
p:function(a){var z,y
z=a.gaQ()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.e){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.bf(this.a)},
G:function(a,b){var z=new T.e(new Float32Array(3))
z.p(this)
z.al(0,b)
return z},
l:function(a,b){var z=new T.e(new Float32Array(3))
z.p(this)
z.M(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.c(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gav())},
gav:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
E:function(a){var z,y,x
z=Math.sqrt(this.gav())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aR:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bV:function(a){var z,y,x,w,v,u,t,s
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
M:function(a,b){var z,y
z=b.gaQ()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ar:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
al:function(a,b){var z,y
z=b.gaQ()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
T:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a1:function(a){var z=new T.e(new Float32Array(3))
z.p(this)
z.T(0,a)
return z},
R:function(a){var z=new T.e(new Float32Array(3))
z.p(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sF:function(a,b){this.a[2]=b
return b},
gU:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
t:{
B:function(a,b,c){var z=new T.e(new Float32Array(3))
z.q(a,b,c)
return z}}},a1:{"^":"d;bC:a<",
p:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bf(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.p(this)
x=b.gbC()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.p(this)
x=b.gbC()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.c(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
T:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
a1:function(a){var z=new T.a1(new Float32Array(4))
z.p(this)
z.T(0,a)
return z},
R:function(a){var z=new T.a1(new Float32Array(4))
z.p(this)
return z},
gU:function(a){return this.a[2]},
gY:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}}],["","",,U,{"^":"",
eu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=y.querySelector("#info")
w=new R.hV(0,0,null,null,null,null)
w.d4(y.getElementById("stats"),"blue","gray")
v=y.querySelector("#webgl-canvas")
u=new G.fq(null,v)
y=J.f0(v,"webgl2",P.c4(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
u.a=y
if(y==null)H.U(P.d5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.f1(y))
if($.ep>0)P.ad("I: "+t)
J.eJ(y,0,0,0,1)
J.aY(y,2929)
J.aY(y,2884)
s=J.f2(y,"WEBGL_get_buffer_sub_data_async")
P.ad("Ext "+H.b(s))
y=new Float32Array(3)
t=D.h2(null)
r=D.hf(v)
q=new T.C(new Float32Array(16))
q.L()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.hr(25,10,0,0,new T.e(y),-0.02,t,r,q,new T.e(p),new T.e(o),new T.e(n),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.C(new Float32Array(16))
y.L()
t=new T.C(new Float32Array(16))
t.L()
l=new G.ht(m,50,1,0.1,1000,y,t,new T.C(new Float32Array(16)),P.J(),"perspective",!1,!0)
l.bk()
y=H.A([],[A.dr])
k=new A.hF(null,u,y,17664,0,0,0,0,"main",!1,!0)
k.d=new G.fQ(u,null,null,null,null)
t=G.hH("prog",u,$.$get$ey(),$.$get$ex())
r=[]
y.push(new A.dr(t,[l],r,"objects",!1,!0))
j=G.b4("sphere")
j.d.j(0,"uColor",$.$get$aj().h(0,"sphere"))
y=G.b3("icosahedron-3",t,B.fS(3,1,!0))
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.L()
o=new T.C(new Float32Array(16))
o.L()
n=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.b5(j,y,[],new T.R(q),p,o,new T.e(n),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"sphere",!1,!0)
g.a5(0,0,0)
r.push(g)
j=G.b4("cube")
j.d.j(0,"uColor",$.$get$aj().h(0,"cube"))
y=G.b3("cube",t,B.fy(!0,1,0,1,0,1,1,1))
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.L()
o=new T.C(new Float32Array(16))
o.L()
n=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.b5(j,y,[],new T.R(q),p,o,new T.e(n),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"cube",!1,!0)
g.a5(-5,0,-5)
r.push(g)
j=G.b4("cylinder")
j.d.j(0,"uColor",$.$get$aj().h(0,"cylinder"))
y=G.b3("cylinder-32",t,B.fA(3,6,2,32,!0))
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.L()
o=new T.C(new Float32Array(16))
o.L()
n=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.b5(j,y,[],new T.R(q),p,o,new T.e(n),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"cylinder",!1,!0)
g.a5(5,0,-5)
r.push(g)
j=G.b4("quad")
j.d.j(0,"uColor",$.$get$aj().h(0,"quad"))
y=new T.e(new Float32Array(3))
y.q(-2,-2,0)
q=new T.e(new Float32Array(3))
q.q(2,-2,0)
p=new T.e(new Float32Array(3))
p.q(2,2,0)
o=new T.e(new Float32Array(3))
o.q(-2,2,0)
n=new T.n(new Float32Array(2))
n.v(0,0)
i=new T.n(new Float32Array(2))
i.v(1,0)
h=new T.n(new Float32Array(2))
h.v(1,1)
f=new T.n(new Float32Array(2))
f.v(0,1)
e=new T.e(new Float32Array(3))
e.q(0,0,1)
d=new G.b2(!1,[],[],[],P.J())
d.X("aTexUV")
d.cQ([y,q,p,o])
d.am("aTexUV",[n,i,h,f])
d.X("aNormal")
d.an("aNormal",[e,e,e,e])
y=G.b3("quad",t,d)
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.L()
o=new T.C(new Float32Array(16))
o.L()
n=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.b5(j,y,[],new T.R(q),p,o,new T.e(n),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"quad",!1,!0)
g.a5(-5,0,5)
r.push(g)
j=G.b4("torus")
j.d.j(0,"uColor",$.$get$aj().h(0,"torus"))
y=G.b3("torusknot",t,B.hO(!0,!0,1,2,3,1,128,16,0.4,!1))
t=new Float32Array(9)
q=new T.C(new Float32Array(16))
q.L()
p=new T.C(new Float32Array(16))
p.L()
o=new Float32Array(3)
n=new Float32Array(3)
i=new Float32Array(3)
g=new A.b5(j,y,[],new T.R(t),q,p,new T.e(o),new T.e(n),new T.e(i),new T.e(new Float32Array(3)),"torus",!1,!0)
g.a5(5,0,5)
r.push(g)
y=new U.kq(v,l,k)
y.$1(null)
W.al(window,"resize",y,!1,W.af)
c=new Uint8Array(4)
b=J.bj(u.a)
J.aX(u.a,35051,b)
J.bM(u.a,35051,4,35049)
J.aX(u.a,35051,null)
z.a=0
new U.ko(z,m,k,x,new U.kp(m,v,s,u,b,c),w).$1(0)},
kq:{"^":"j:20;a,b,c",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
w=J.f(z)
w.sJ(z,y)
w.sI(z,x)
P.ad("size change "+H.b(y)+" "+H.b(x))
this.b.cR(y,x)
z=this.c
z.z=y
z.Q=x}},
kp:{"^":"j:21;a,b,c,d,e,f",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.a.r1
x=y.r
w=this.b.clientHeight
y=y.x
if(typeof w!=="number")return w.G()
if(typeof y!=="number")return H.u(y)
v=w-y
y=this.f
J.f6(this.d.a,x,v,1,1,6408,5121,y)
w=y.length
if(0>=w)return H.c(y,0)
u=y[0]
if(1>=w)return H.c(y,1)
t=y[1]
if(2>=w)return H.c(y,2)
w=y[2]
s=new T.e(new Float32Array(3))
s.q(u,t,w)
s.T(0,0.00392156862745098)
w=$.$get$aj()
u=new H.a6(w,w.r,null,null,[H.D(w,0)])
u.c=w.e
while(!0){if(!u.u()){r="NONE"
break}q=u.d
if(J.K($.$get$aj().h(0,q),s)){r=q
break}}p=P.d1(0,0,0,Date.now()-new P.bW(z,!1).a,0,0)
return H.b(r)+"<br>"+H.b(x)+"."+H.b(v)+"<br>"+H.b(y)+"<br>"+p.a+"us"}},
ko:{"^":"j:22;a,b,c,d,e,f",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aS(b2)
y.G(b2,z.a)
z.a=y.l(b2,0)
y=this.b
y.go+=0.001
this.c.cS()
J.f8(this.d,this.e.$0())
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b7()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b7()
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
if(typeof v!=="number")return v.b7()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dU(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a5(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.e(new Float32Array(3))
o.q(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
m=u.G(0,t)
m.E(0)
l=o.bV(m)
l.E(0)
k=m.bV(l)
k.E(0)
t=l.aR(u)
n=k.aR(u)
u=m.aR(u)
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
a=Math.sqrt(i.gav())
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
w.c.af(0)
w.b.af(0)
x.e=0
x.d=0
x.f=0
x.c.af(0)
x.b.af(0)
C.a5.gdM(window).ce(this)
this.f.d7(z.a)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.dc.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.h_.prototype
if(typeof a=="boolean")return J.fZ.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.k8=function(a){if(typeof a=="number")return J.aG.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.ab=function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.bc=function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.aS=function(a){if(typeof a=="number")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.ba.prototype
return a}
J.k9=function(a){if(typeof a=="number")return J.aG.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.ba.prototype
return a}
J.eq=function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.ba.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.ay=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k8(a).l(a,b)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).H(a,b)}
J.P=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aS(a).ai(a,b)}
J.aV=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aS(a).a4(a,b)}
J.eB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aS(a).G(a,b)}
J.aW=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.km(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).h(a,b)}
J.eC=function(a,b,c,d){return J.f(a).dw(a,b,c,d)}
J.cs=function(a,b){return J.f(a).bD(a,b)}
J.eD=function(a,b,c,d){return J.f(a).bE(a,b,c,d)}
J.ct=function(a,b,c){return J.f(a).bG(a,b,c)}
J.eE=function(a,b){return J.f(a).dO(a,b)}
J.aX=function(a,b,c){return J.f(a).bH(a,b,c)}
J.eF=function(a,b,c){return J.f(a).bJ(a,b,c)}
J.cu=function(a,b,c){return J.f(a).bK(a,b,c)}
J.bh=function(a,b){return J.f(a).dR(a,b)}
J.eG=function(a,b){return J.f(a).bL(a,b)}
J.eH=function(a,b,c){return J.f(a).bM(a,b,c)}
J.bM=function(a,b,c,d){return J.f(a).bN(a,b,c,d)}
J.eI=function(a,b){return J.bc(a).bP(a,b)}
J.eJ=function(a,b,c,d,e){return J.f(a).bQ(a,b,c,d,e)}
J.bi=function(a){return J.f(a).R(a)}
J.cv=function(a,b){return J.eq(a).dV(a,b)}
J.eK=function(a,b){return J.k9(a).Z(a,b)}
J.bN=function(a,b,c){return J.ab(a).dX(a,b,c)}
J.bj=function(a){return J.f(a).bS(a)}
J.eL=function(a){return J.f(a).bT(a)}
J.eM=function(a){return J.f(a).e_(a)}
J.eN=function(a,b){return J.f(a).bW(a,b)}
J.bO=function(a,b){return J.f(a).bX(a,b)}
J.eO=function(a,b,c,d){return J.f(a).bY(a,b,c,d)}
J.eP=function(a,b,c,d,e){return J.f(a).e1(a,b,c,d,e)}
J.eQ=function(a,b,c,d,e){return J.f(a).bZ(a,b,c,d,e)}
J.eR=function(a,b,c,d,e,f){return J.f(a).e2(a,b,c,d,e,f)}
J.cw=function(a,b){return J.bc(a).w(a,b)}
J.aY=function(a,b){return J.f(a).c_(a,b)}
J.eS=function(a,b){return J.f(a).c0(a,b)}
J.eT=function(a){return J.f(a).e3(a)}
J.cx=function(a,b){return J.bc(a).B(a,b)}
J.cy=function(a){return J.f(a).gdN(a)}
J.eU=function(a){return J.f(a).gaS(a)}
J.az=function(a){return J.f(a).gS(a)}
J.a3=function(a){return J.q(a).gC(a)}
J.aZ=function(a){return J.bc(a).gN(a)}
J.a4=function(a){return J.ab(a).gi(a)}
J.eV=function(a){return J.f(a).gc9(a)}
J.eW=function(a){return J.f(a).gaY(a)}
J.cz=function(a){return J.f(a).ga2(a)}
J.eX=function(a){return J.f(a).gek(a)}
J.eY=function(a){return J.f(a).gci(a)}
J.eZ=function(a){return J.f(a).gay(a)}
J.cA=function(a){return J.f(a).ges(a)}
J.bP=function(a){return J.f(a).gm(a)}
J.bQ=function(a){return J.f(a).gn(a)}
J.cB=function(a){return J.f(a).gF(a)}
J.f_=function(a){return J.f(a).b0(a)}
J.f0=function(a,b,c){return J.f(a).cA(a,b,c)}
J.f1=function(a){return J.f(a).az(a)}
J.f2=function(a,b){return J.f(a).b1(a,b)}
J.f3=function(a,b){return J.f(a).b2(a,b)}
J.f4=function(a,b,c){return J.f(a).b3(a,b,c)}
J.cC=function(a,b,c){return J.f(a).b6(a,b,c)}
J.f5=function(a,b){return J.f(a).c6(a,b)}
J.f6=function(a,b,c,d,e,f,g,h){return J.f(a).cb(a,b,c,d,e,f,g,h)}
J.cD=function(a){return J.bc(a).eg(a)}
J.f7=function(a,b){return J.f(a).sat(a,b)}
J.f8=function(a,b){return J.f(a).sc4(a,b)}
J.f9=function(a,b,c,d){return J.f(a).bc(a,b,c,d)}
J.cE=function(a){return J.aS(a).el(a)}
J.fa=function(a){return J.eq(a).en(a)}
J.aA=function(a){return J.q(a).k(a)}
J.fb=function(a,b,c,d){return J.f(a).ep(a,b,c,d)}
J.fc=function(a,b,c){return J.f(a).cj(a,b,c)}
J.fd=function(a,b,c){return J.f(a).ck(a,b,c)}
J.bR=function(a,b,c){return J.f(a).cl(a,b,c)}
J.fe=function(a,b,c){return J.f(a).cm(a,b,c)}
J.cF=function(a,b,c){return J.f(a).cn(a,b,c)}
J.cG=function(a,b,c){return J.f(a).co(a,b,c)}
J.cH=function(a,b,c){return J.f(a).cp(a,b,c)}
J.cI=function(a,b,c,d){return J.f(a).cq(a,b,c,d)}
J.cJ=function(a,b,c,d){return J.f(a).cr(a,b,c,d)}
J.ff=function(a,b){return J.f(a).ct(a,b)}
J.fg=function(a,b,c){return J.f(a).eq(a,b,c)}
J.fh=function(a,b,c,d,e,f,g){return J.f(a).cu(a,b,c,d,e,f,g)}
J.fi=function(a,b,c,d,e){return J.f(a).cw(a,b,c,d,e)}
I.aw=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bS.prototype
C.n=W.fw.prototype
C.C=W.fE.prototype
C.D=J.h.prototype
C.c=J.aE.prototype
C.t=J.dc.prototype
C.b=J.dd.prototype
C.a=J.aG.prototype
C.i=J.aH.prototype
C.K=J.aI.prototype
C.O=H.hk.prototype
C.P=W.hm.prototype
C.w=J.hu.prototype
C.B=W.i4.prototype
C.q=J.ba.prototype
C.a5=W.id.prototype
C.f=new P.j8()
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
C.L=H.A(I.aw(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.M=I.aw(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=I.aw([])
C.o=H.A(I.aw(["bind","if","ref","repeat","syntax"]),[P.m])
C.p=H.A(I.aw(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
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
$.Z=0
$.aB=null
$.cM=null
$.es=null
$.ej=null
$.ew=null
$.bH=null
$.bI=null
$.cp=null
$.as=null
$.aP=null
$.aQ=null
$.ci=!1
$.x=C.f
$.a5=null
$.bY=null
$.d3=null
$.d2=null
$.d_=null
$.cZ=null
$.cY=null
$.cX=null
$.ep=0
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
I.$lazy(y,x,w)}})(["cW","$get$cW",function(){return H.er("_$dart_dartClosure")},"c1","$get$c1",function(){return H.er("_$dart_js")},"dF","$get$dF",function(){return H.a0(H.bD({
toString:function(){return"$receiver$"}}))},"dG","$get$dG",function(){return H.a0(H.bD({$method$:null,
toString:function(){return"$receiver$"}}))},"dH","$get$dH",function(){return H.a0(H.bD(null))},"dI","$get$dI",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dM","$get$dM",function(){return H.a0(H.bD(void 0))},"dN","$get$dN",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.a0(H.dL(null))},"dJ","$get$dJ",function(){return H.a0(function(){try{null.$method$}catch(z){return z.message}}())},"dP","$get$dP",function(){return H.a0(H.dL(void 0))},"dO","$get$dO",function(){return H.a0(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cd","$get$cd",function(){return P.ii()},"d8","$get$d8",function(){var z,y
z=P.b6
y=new P.am(0,P.ig(),null,[z])
y.de(null,z)
return y},"aR","$get$aR",function(){return[]},"cV","$get$cV",function(){return{}},"e_","$get$e_",function(){return P.c5(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cf","$get$cf",function(){return P.J()},"dw","$get$dw",function(){return new G.dD(1281,0,4294967295)},"cL","$get$cL",function(){return new G.dC(1281,1281,1281)},"X","$get$X",function(){return P.c4(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.T,"aPosition",C.x,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.R,"vCenter",C.y,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a1,"uAnimationTable",C.h,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"cQ","$get$cQ",function(){return T.B(0,0,1)},"cU","$get$cU",function(){return T.B(1,0,0)},"cS","$get$cS",function(){return T.B(0,1,0)},"cT","$get$cT",function(){return T.B(1,0,1)},"cR","$get$cR",function(){return T.B(0,1,1)},"ey","$get$ey",function(){var z=G.dt("SolidColor")
z.cN(["aPosition"])
z.be(["uPerspectiveViewMatrix","uModelMatrix"])
z.bj(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"ex","$get$ex",function(){var z=G.dt("SolidColorF")
z.be(["uColor"])
z.bj(["oFragColor = vec4( uColor, 1.0 );"])
return z},"dW","$get$dW",function(){return[T.B(0,0,1),T.B(0,0,-1),T.B(0,1,0),T.B(0,-1,0),T.B(1,0,0),T.B(-1,0,0)]},"d9","$get$d9",function(){return[G.G(0,11,5),G.G(0,5,1),G.G(0,1,7),G.G(0,7,10),G.G(0,10,11),G.G(1,5,9),G.G(5,11,4),G.G(11,10,2),G.G(10,7,6),G.G(7,1,8),G.G(3,9,4),G.G(3,4,2),G.G(3,2,6),G.G(3,6,8),G.G(3,8,9),G.G(4,9,5),G.G(2,4,11),G.G(6,2,10),G.G(8,6,7),G.G(9,8,1)]},"ez","$get$ez",function(){return(1+P.ku(5))/2},"da","$get$da",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$ez()
y=T.B(-1,z,0)
y.E(0)
x=T.B(1,z,0)
x.E(0)
if(typeof z!=="number")return z.ev()
w=T.B(-1,-z,0)
w.E(0)
v=T.B(1,-z,0)
v.E(0)
u=T.B(0,-1,z)
u.E(0)
t=T.B(0,1,z)
t.E(0)
s=T.B(0,-1,-z)
s.E(0)
r=T.B(0,1,-z)
r.E(0)
q=T.B(z,0,-1)
q.E(0)
p=T.B(z,0,1)
p.E(0)
o=T.B(-z,0,-1)
o.E(0)
z=T.B(-z,0,1)
z.E(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"aj","$get$aj",function(){return P.c4(["sphere",$.$get$cR(),"cube",$.$get$cU(),"cylinder",$.$get$cS(),"quad",$.$get$cT(),"torus",$.$get$cQ()])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.N]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.m,args:[P.H]},{func:1,args:[W.bs]},{func:1,ret:P.ck,args:[W.aq,P.m,P.m,W.ce]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aM]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aM]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[P.ao,T.e]},{func:1,args:[W.aN]},{func:1,args:[P.H,P.d]},{func:1,v:true,args:[W.af]},{func:1,ret:P.m},{func:1,v:true,args:[P.aT]},{func:1,ret:P.H,args:[,,]}]
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
if(x==y)H.kw(d||a)
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
Isolate.aw=a.aw
Isolate.au=a.au
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
if(typeof dartMainRunner==="function")dartMainRunner(U.eu,[])
else U.eu([])})})()
//# sourceMappingURL=picking.dart.js.map
