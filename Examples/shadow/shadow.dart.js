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
b6.$ise=b5
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
var d=supportsDirectProtoAccess&&b2!="e"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cL"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cL"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cL(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aE=function(){}
var dart=[["","",,H,{"^":"",mS:{"^":"e;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
cP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cO==null){H.ln()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.er("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ck()]
if(v!=null)return v
v=H.lt(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$ck(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
h:{"^":"e;",
J:function(a,b){return a===b},
gF:function(a){return H.aU(a)},
k:["d7",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hU:{"^":"h;",
k:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iscJ:1},
hV:{"^":"h;",
J:function(a,b){return null==b},
k:function(a){return"null"},
gF:function(a){return 0},
$isbj:1},
cl:{"^":"h;",
gF:function(a){return 0},
k:["d9",function(a){return String(a)}]},
iu:{"^":"cl;"},
bt:{"^":"cl;"},
aS:{"^":"cl;",
k:function(a){var z=a[$.$get$dq()]
return z==null?this.d9(a):J.aK(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aO:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.a_(P.u("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
E:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.Q(a))}},
an:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
bu:function(a,b){return H.e5(a,b,null,H.x(a,0))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
geC:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.dG())},
d1:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.a_(P.u("setRange"))
P.dY(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.H()
if(typeof b!=="number")return H.v(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$isi){x=e
w=d}else{w=y.bu(d,e).eN(0,!1)
x=0}y=J.al(w)
v=y.gj(w)
if(typeof v!=="number")return H.v(v)
if(x+z>v)throw H.c(H.hS())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
as:function(a,b,c,d){return this.d1(a,b,c,d,0)},
bZ:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.c(P.Q(a))}return!1},
d2:function(a,b){if(!!a.immutable$list)H.a_(P.u("sort"))
H.iT(a,J.kV())},
aM:function(a){return this.d2(a,null)},
B:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
k:function(a){return P.ci(a,"[","]")},
gM:function(a){return new J.h8(a,a.length,0,null,[H.x(a,0)])},
gF:function(a){return H.aU(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.a_(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.dc(b,"newLength",null))
if(b<0)throw H.c(P.aA(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ad(a,b))
if(b>=a.length||b<0)throw H.c(H.ad(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.a_(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ad(a,b))
if(b>=a.length||b<0)throw H.c(H.ad(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.c.l(a.length,C.c.gj(b))
y=H.D([],[H.x(a,0)])
this.sj(y,z)
this.as(y,0,a.length,a)
this.as(y,a.length,z,b)
return y},
$isp:1,
$asp:I.aE,
$isk:1,
$isi:1,
q:{
aP:function(a){a.fixed$length=Array
return a},
mQ:[function(a,b){return J.ft(a,b)},"$2","kV",8,0,23]}},
mR:{"^":"aO;$ti"},
h8:{"^":"e;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aQ:{"^":"h;",
a_:function(a,b){var z
if(typeof b!=="number")throw H.c(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaG(b)
if(this.gaG(a)===z)return 0
if(this.gaG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaG:function(a){return a===0?1/a<0:a<0},
eM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.u(""+a+".toInt()"))},
ee:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.u(""+a+".ceil()"))},
er:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.u(""+a+".floor()"))},
ef:function(a,b,c){if(this.a_(b,c)>0)throw H.c(H.X(b))
if(this.a_(a,b)<0)return b
if(this.a_(a,c)>0)return c
return a},
eP:function(a,b){var z
if(b>20)throw H.c(P.aA(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaG(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a+b},
H:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a-b},
bw:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bT(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.bT(a,b)},
bT:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.u("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bR:function(a,b){var z
if(a>0)z=this.e_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e_:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a<b},
aq:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a>b},
$isak:1,
$isb5:1},
dI:{"^":"aQ;",$isK:1},
dH:{"^":"aQ;"},
aR:{"^":"h;",
b7:function(a,b){if(b<0)throw H.c(H.ad(a,b))
if(b>=a.length)H.a_(H.ad(a,b))
return a.charCodeAt(b)},
az:function(a,b){if(b>=a.length)throw H.c(H.ad(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.c(P.dc(b,null,null))
return a+b},
d3:function(a,b,c){var z
if(c>a.length)throw H.c(P.aA(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aN:function(a,b){return this.d3(a,b,0)},
aO:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.a_(H.X(c))
if(b<0)throw H.c(P.bN(b,null,null))
if(typeof c!=="number")return H.v(c)
if(b>c)throw H.c(P.bN(b,null,null))
if(c>a.length)throw H.c(P.bN(c,null,null))
return a.substring(b,c)},
d5:function(a,b){return this.aO(a,b,null)},
eO:function(a){return a.toLowerCase()},
eR:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.az(z,0)===133){x=J.hW(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.b7(z,w)===133?J.hX(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
ei:function(a,b,c){if(c>a.length)throw H.c(P.aA(c,0,a.length,null,null))
return H.lD(a,b,c)},
a_:function(a,b){var z
if(typeof b!=="string")throw H.c(H.X(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gF:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ad(a,b))
return a[b]},
$isp:1,
$asp:I.aE,
$iso:1,
q:{
dJ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hW:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.az(a,b)
if(y!==32&&y!==13&&!J.dJ(y))break;++b}return b},
hX:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.b7(a,z)
if(y!==32&&y!==13&&!J.dJ(y))break}return b}}}}],["","",,H,{"^":"",
dG:function(){return new P.bP("No element")},
hT:function(){return new P.bP("Too many elements")},
hS:function(){return new P.bP("Too few elements")},
iT:function(a,b){var z=J.a7(a)
if(typeof z!=="number")return z.H()
H.bn(a,0,z-1,b)},
bn:function(a,b,c,d){if(c-b<=32)H.iS(a,b,c,d)
else H.iR(a,b,c,d)},
iS:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.al(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.T(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.a6(c-b+1,6)
y=b+z
x=c-z
w=C.c.a6(b+c,2)
v=w-z
u=w+z
t=J.al(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.T(d.$2(s,r),0)){n=r
r=s
s=n}if(J.T(d.$2(p,o),0)){n=o
o=p
p=n}if(J.T(d.$2(s,q),0)){n=q
q=s
s=n}if(J.T(d.$2(r,q),0)){n=q
q=r
r=n}if(J.T(d.$2(s,p),0)){n=p
p=s
s=n}if(J.T(d.$2(q,p),0)){n=p
p=q
q=n}if(J.T(d.$2(r,o),0)){n=o
o=r
r=n}if(J.T(d.$2(r,q),0)){n=q
q=r
r=n}if(J.T(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.N(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.J(i,0))continue
if(h.a8(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.b4(i)
if(h.aq(i,0)){--l
continue}else{g=l-1
if(h.a8(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.b7(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.T(d.$2(j,p),0))for(;!0;)if(J.T(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b7(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}e=!1}h=m-1
t.i(a,b,t.h(a,h))
t.i(a,h,r)
h=l+1
t.i(a,c,t.h(a,h))
t.i(a,h,p)
H.bn(a,b,m-2,d)
H.bn(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.N(d.$2(t.h(a,m),r),0);)++m
for(;J.N(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.N(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b7(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.bn(a,m,l,d)}else H.bn(a,m,l,d)},
k:{"^":"aN;$ti"},
bJ:{"^":"k;$ti",
gM:function(a){return new H.dN(this,this.gj(this),0,null,[H.cN(this,"bJ",0)])},
E:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.w(0,y))
if(z!==this.gj(this))throw H.c(P.Q(this))}},
bi:function(a,b){return this.d8(0,b)}},
j4:{"^":"bJ;a,b,c,$ti",
dt:function(a,b,c,d){},
gdO:function(){var z=J.a7(this.a)
return z},
ge0:function(){var z,y
z=J.a7(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a7(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>=z)return 0
return z-y},
w:function(a,b){var z,y
z=this.ge0()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.v(b)
y=z+b
if(!(b<0)){z=this.gdO()
if(typeof z!=="number")return H.v(z)
z=y>=z}else z=!0
if(z)throw H.c(P.E(b,this,"index",null,null))
return J.cW(this.a,y)},
eN:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.al(y)
w=x.gj(y)
if(typeof w!=="number")return w.H()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.D(u,this.$ti)
for(s=0;s<v;++s){u=x.w(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.a8()
if(u<w)throw H.c(P.Q(this))}return t},
q:{
e5:function(a,b,c,d){var z=new H.j4(a,b,c,[d])
z.dt(a,b,c,d)
return z}}},
dN:{"^":"e;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.al(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.Q(z))
w=this.c
if(typeof x!=="number")return H.v(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
dP:{"^":"aN;a,b,$ti",
gM:function(a){return new H.dQ(null,J.av(this.a),this.b,this.$ti)},
gj:function(a){return J.a7(this.a)},
$asaN:function(a,b){return[b]},
q:{
i5:function(a,b,c,d){if(!!a.$isk)return new H.hA(a,b,[c,d])
return new H.dP(a,b,[c,d])}}},
hA:{"^":"dP;a,b,$ti",$isk:1,
$ask:function(a,b){return[b]}},
dQ:{"^":"cj;a,b,c,$ti",
u:function(){var z=this.b
if(z.u()){this.a=this.c.$1(z.gC(z))
return!0}this.a=null
return!1},
gC:function(a){return this.a},
$ascj:function(a,b){return[b]}},
i6:{"^":"bJ;a,b,$ti",
gj:function(a){return J.a7(this.a)},
w:function(a,b){return this.b.$1(J.cW(this.a,b))},
$ask:function(a,b){return[b]},
$asbJ:function(a,b){return[b]},
$asaN:function(a,b){return[b]}},
es:{"^":"aN;a,b,$ti",
gM:function(a){return new H.jh(J.av(this.a),this.b,this.$ti)}},
jh:{"^":"cj;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z))===!0)return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bH:{"^":"e;$ti"}}],["","",,H,{"^":"",
lf:function(a){return init.types[a]},
lq:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isr},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aK(a)
if(typeof z!=="string")throw H.c(H.X(a))
return z},
aU:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iC:function(a){var z,y
if(typeof a!=="string")H.a_(H.X(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.h_(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.q(a).$isbt){v=C.x(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.az(w,0)===36)w=C.h.d5(w,1)
r=H.bZ(H.aF(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iB:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
iz:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
iv:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
iw:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
iy:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
iA:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
ix:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
v:function(a){throw H.c(H.X(a))},
a:function(a,b){if(a==null)J.a7(a)
throw H.c(H.ad(a,b))},
ad:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=J.a7(a)
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bN(b,"index",null)},
X:function(a){return new P.an(!0,a,null,null)},
a6:function(a){if(typeof a!=="number")throw H.c(H.X(a))
return a},
c:function(a){var z
if(a==null)a=new P.dW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fh})
z.name=""}else z.toString=H.fh
return z},
fh:function(){return J.aK(this.dartException)},
a_:function(a){throw H.c(a)},
y:function(a){throw H.c(P.Q(a))},
a0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bR(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cm(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dV(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ed()
u=$.$get$ee()
t=$.$get$ef()
s=$.$get$eg()
r=$.$get$ek()
q=$.$get$el()
p=$.$get$ei()
$.$get$eh()
o=$.$get$en()
n=$.$get$em()
m=v.X(y)
if(m!=null)return z.$1(H.cm(y,m))
else{m=u.X(y)
if(m!=null){m.method="call"
return z.$1(H.cm(y,m))}else{m=t.X(y)
if(m==null){m=s.X(y)
if(m==null){m=r.X(y)
if(m==null){m=q.X(y)
if(m==null){m=p.X(y)
if(m==null){m=s.X(y)
if(m==null){m=o.X(y)
if(m==null){m=n.X(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dV(y,m))}}return z.$1(new H.jc(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e1()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e1()
return a},
au:function(a){var z
if(a==null)return new H.eJ(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eJ(a,null)},
lb:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
lp:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.dB("Unsupported number of arguments for wrapped closure"))},
aj:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lp)
a.$identity=z
return z},
hj:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$isi){z.$reflectionInfo=c
x=H.iF(z).r}else x=c
w=d?Object.create(new H.iU().constructor.prototype):Object.create(new H.c9(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a8
$.a8=J.aI(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dh(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lf,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.df:H.ca
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dh(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
hg:function(a,b,c,d){var z=H.ca
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hg(y,!w,z,b)
if(y===0){w=$.a8
$.a8=J.aI(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aL
if(v==null){v=H.bE("self")
$.aL=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
$.a8=J.aI(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aL
if(v==null){v=H.bE("self")
$.aL=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
hh:function(a,b,c,d){var z,y
z=H.ca
y=H.df
switch(b?-1:a){case 0:throw H.c(H.iK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hi:function(a,b){var z,y,x,w,v,u,t,s
z=$.aL
if(z==null){z=H.bE("self")
$.aL=z}y=$.de
if(y==null){y=H.bE("receiver")
$.de=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.a8
$.a8=J.aI(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.a8
$.a8=J.aI(y,1)
return new Function(z+H.b(y)+"}")()},
cL:function(a,b,c,d,e,f){var z,y
z=J.aP(b)
y=!!J.q(c).$isi?J.aP(c):c
return H.hj(a,z,y,!!d,e,f)},
lz:function(a,b){var z=J.al(b)
throw H.c(H.dg(a,z.aO(b,3,z.gj(b))))},
G:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.lz(a,b)},
cM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eY:function(a,b){var z,y
if(a==null)return!1
z=H.cM(J.q(a))
if(z==null)y=!1
else y=H.f1(z,b)
return y},
l2:function(a){var z
if(a instanceof H.j){z=H.cM(J.q(a))
if(z!=null)return H.cQ(z,null)
return"Closure"}return H.aV(a)},
lE:function(a){throw H.c(new P.ho(a))},
f_:function(a){return init.getIsolateTag(a)},
D:function(a,b){a.$ti=b
return a},
aF:function(a){if(a==null)return
return a.$ti},
ok:function(a,b,c){return H.b6(a["$as"+H.b(c)],H.aF(b))},
bw:function(a,b,c,d){var z=H.b6(a["$as"+H.b(c)],H.aF(b))
return z==null?null:z[d]},
cN:function(a,b,c){var z=H.b6(a["$as"+H.b(b)],H.aF(a))
return z==null?null:z[c]},
x:function(a,b){var z=H.aF(a)
return z==null?null:z[b]},
cQ:function(a,b){var z=H.aH(a,b)
return z},
aH:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bZ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aH(z,b)
return H.kU(a,b)}return"unknown-reified-type"},
kU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aH(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aH(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aH(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.la(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aH(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bZ:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cx("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aH(u,c)}return w?"":"<"+z.k(0)+">"},
le:function(a){var z,y,x
if(a instanceof H.j){z=H.cM(J.q(a))
if(z!=null)return H.cQ(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bZ(a.$ti,0,null)
return y+x},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cK:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aF(a)
y=J.q(a)
if(y[b]==null)return!1
return H.eU(H.b6(y[d],z),c)},
bz:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cK(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bZ(c,0,null)
throw H.c(H.dg(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eU:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.S(a[y],b[y]))return!1
return!0},
oi:function(a,b,c){return a.apply(b,H.b6(J.q(b)["$as"+H.b(c)],H.aF(b)))},
S:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="bj")return!0
if('func' in b)return H.f1(a,b)
if('func' in a)return b.builtin$cls==="mI"||b.builtin$cls==="e"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cQ(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eU(H.b6(u,z),x)},
eT:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.S(z,v)||H.S(v,z)))return!1}return!0},
l3:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aP(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.S(v,u)||H.S(u,v)))return!1}return!0},
f1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.S(z,y)||H.S(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eT(x,w,!1))return!1
if(!H.eT(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.S(o,n)||H.S(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.S(o,n)||H.S(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.S(o,n)||H.S(n,o)))return!1}}return H.l3(a.named,b.named)},
oj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lt:function(a){var z,y,x,w,v,u
z=$.f0.$1(a)
y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eS.$2(a,z)
if(z!=null){y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c_(x)
$.bV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bY[z]=x
return x}if(v==="-"){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f8(a,x)
if(v==="*")throw H.c(P.er(z))
if(init.leafTags[z]===true){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f8(a,x)},
f8:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cP(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_:function(a){return J.cP(a,!1,null,!!a.$isr)},
ly:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c_(z)
else return J.cP(z,c,null,null)},
ln:function(){if(!0===$.cO)return
$.cO=!0
H.lo()},
lo:function(){var z,y,x,w,v,u,t,s
$.bV=Object.create(null)
$.bY=Object.create(null)
H.lj()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fa.$1(v)
if(u!=null){t=H.ly(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lj:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.aD(C.F,H.aD(C.K,H.aD(C.w,H.aD(C.w,H.aD(C.J,H.aD(C.G,H.aD(C.H(C.x),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f0=new H.lk(v)
$.eS=new H.ll(u)
$.fa=new H.lm(t)},
aD:function(a,b){return a(b)||b},
lD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iE:{"^":"e;a,b,c,d,e,f,r,x",q:{
iF:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aP(z)
y=z[0]
x=z[1]
return new H.iE(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
j9:{"^":"e;a,b,c,d,e,f",
X:function(a){var z,y,x
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
q:{
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ej:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iq:{"^":"M;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
q:{
dV:function(a,b){return new H.iq(a,b==null?null:b.method)}}},
hZ:{"^":"M;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
q:{
cm:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hZ(a,y,z?null:b.receiver)}}},
jc:{"^":"M;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lF:{"^":"j:0;a",
$1:function(a){if(!!J.q(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eJ:{"^":"e;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaX:1},
j:{"^":"e;",
k:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gcX:function(){return this},
gcX:function(){return this}},
e6:{"^":"j;"},
iU:{"^":"e6;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c9:{"^":"e6;a,b,c,d",
J:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c9))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var z,y
z=this.c
if(z==null)y=H.aU(this.a)
else y=typeof z!=="object"?J.af(z):H.aU(z)
return(y^H.aU(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
q:{
ca:function(a){return a.a},
df:function(a){return a.c},
bE:function(a){var z,y,x,w,v
z=new H.c9("self","target","receiver","name")
y=J.aP(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hd:{"^":"M;a",
k:function(a){return this.a},
q:{
dg:function(a,b){return new H.hd("CastError: "+H.b(P.ce(a))+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")}}},
iJ:{"^":"M;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
q:{
iK:function(a){return new H.iJ(a)}}},
eo:{"^":"e;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gF:function(a){return J.af(this.a)},
J:function(a,b){if(b==null)return!1
return b instanceof H.eo&&J.N(this.a,b.a)}},
dK:{"^":"cr;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gS:function(a){return new H.dL(this,[H.x(this,0)])},
geS:function(a){var z=H.x(this,0)
return H.i5(new H.dL(this,[z]),new H.hY(this),z,H.x(this,1))},
aE:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bK(y,b)}else return this.eA(b)},
eA:function(a){var z=this.d
if(z==null)return!1
return this.ba(this.aZ(z,J.af(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aB(z,b)
x=y==null?null:y.gam()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aB(w,b)
x=y==null?null:y.gam()
return x}else return this.eB(b)},
eB:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aZ(z,J.af(a)&0x3ffffff)
x=this.ba(y,a)
if(x<0)return
return y[x].gam()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.b1()
this.b=z}this.bF(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.b1()
this.c=y}this.bF(y,b,c)}else{x=this.d
if(x==null){x=this.b1()
this.d=x}w=J.af(b)&0x3ffffff
v=this.aZ(x,w)
if(v==null)this.b5(x,w,[this.aT(b,c)])
else{u=this.ba(v,b)
if(u>=0)v[u].sam(c)
else v.push(this.aT(b,c))}}},
E:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.Q(this))
z=z.c}},
bF:function(a,b,c){var z=this.aB(a,b)
if(z==null)this.b5(a,b,this.aT(b,c))
else z.sam(c)},
bG:function(){this.r=this.r+1&67108863},
aT:function(a,b){var z,y
z=new H.i3(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bG()
return z},
ba:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].gey(),b))return y
return-1},
k:function(a){return P.dO(this)},
aB:function(a,b){return a[b]},
aZ:function(a,b){return a[b]},
b5:function(a,b,c){a[b]=c},
dM:function(a,b){delete a[b]},
bK:function(a,b){return this.aB(a,b)!=null},
b1:function(){var z=Object.create(null)
this.b5(z,"<non-identifier-key>",z)
this.dM(z,"<non-identifier-key>")
return z}},
hY:{"^":"j:0;a",
$1:function(a){return this.a.h(0,a)}},
i3:{"^":"e;ey:a<,am:b@,c,d"},
dL:{"^":"k;a,$ti",
gj:function(a){return this.a.a},
gM:function(a){var z,y
z=this.a
y=new H.ah(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
E:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.c(P.Q(z))
y=y.c}}},
ah:{"^":"e;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.Q(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lk:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
ll:{"^":"j:12;a",
$2:function(a,b){return this.a(a,b)}},
lm:{"^":"j:13;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
la:function(a){return J.aP(H.D(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
by:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bS:function(a){var z,y,x
if(!!J.q(a).$isp)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ad(b,a))},
ik:{"^":"h;","%":"DataView;ArrayBufferView;cs|eD|eE|dS|eF|eG|ap"},
cs:{"^":"ik;",
gj:function(a){return a.length},
$isp:1,
$asp:I.aE,
$isr:1,
$asr:I.aE},
dS:{"^":"eE;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.ak]},
$asbH:function(){return[P.ak]},
$asl:function(){return[P.ak]},
$isi:1,
$asi:function(){return[P.ak]},
"%":"Float64Array"},
ap:{"^":"eG;",
i:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.K]},
$asbH:function(){return[P.K]},
$asl:function(){return[P.K]},
$isi:1,
$asi:function(){return[P.K]}},
ij:{"^":"dS;",$iscf:1,"%":"Float32Array"},
n9:{"^":"ap;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
na:{"^":"ap;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ishQ:1,
"%":"Int32Array"},
nb:{"^":"ap;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nc:{"^":"ap;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nd:{"^":"ap;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ne:{"^":"ap;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
nf:{"^":"ap;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eD:{"^":"cs+l;"},
eE:{"^":"eD+bH;"},
eF:{"^":"cs+l;"},
eG:{"^":"eF+bH;"}}],["","",,P,{"^":"",
jm:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l4()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aj(new P.jo(z),1)).observe(y,{childList:true})
return new P.jn(z,y,x)}else if(self.setImmediate!=null)return P.l5()
return P.l6()},
o4:[function(a){self.scheduleImmediate(H.aj(new P.jp(a),0))},"$1","l4",4,0,6],
o5:[function(a){self.setImmediate(H.aj(new P.jq(a),0))},"$1","l5",4,0,6],
o6:[function(a){P.ky(0,a)},"$1","l6",4,0,6],
kY:function(a,b){if(H.eY(a,{func:1,args:[P.bj,P.bj]})){b.toString
return a}else{b.toString
return a}},
kX:function(){var z,y
for(;z=$.aC,z!=null;){$.b2=null
y=z.b
$.aC=y
if(y==null)$.b1=null
z.a.$0()}},
oh:[function(){$.cF=!0
try{P.kX()}finally{$.b2=null
$.cF=!1
if($.aC!=null)$.$get$cA().$1(P.eV())}},"$0","eV",0,0,3],
eQ:function(a){var z=new P.et(a,null)
if($.aC==null){$.b1=z
$.aC=z
if(!$.cF)$.$get$cA().$1(P.eV())}else{$.b1.b=z
$.b1=z}},
l1:function(a){var z,y,x
z=$.aC
if(z==null){P.eQ(a)
$.b2=$.b1
return}y=new P.et(a,null)
x=$.b2
if(x==null){y.b=z
$.b2=y
$.aC=y}else{y.b=x.b
x.b=y
$.b2=y
if(y.b==null)$.b1=y}},
lA:function(a){var z=$.C
if(C.f===z){P.bU(null,null,C.f,a)
return}z.toString
P.bU(null,null,z,z.c1(a))},
l0:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.a0(u)
y=H.au(u)
$.C.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aJ(x)
w=t
v=x.gab()
c.$2(w,v)}}},
kQ:function(a,b,c,d){var z=a.ed(0)
if(!!J.q(z).$isbe&&z!==$.$get$dE())z.eU(new P.kT(b,c,d))
else b.ai(c,d)},
kR:function(a,b){return new P.kS(a,b)},
jk:function(){return $.C},
bT:function(a,b,c,d,e){var z={}
z.a=d
P.l1(new P.kZ(z,e))},
eO:function(a,b,c,d){var z,y
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
eP:function(a,b,c,d,e){var z,y
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
l_:function(a,b,c,d,e,f){var z,y
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
bU:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.c1(d):c.ea(d)
P.eQ(d)},
jo:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jn:{"^":"j:14;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jp:{"^":"j:1;a",
$0:function(){this.a.$0()}},
jq:{"^":"j:1;a",
$0:function(){this.a.$0()}},
kx:{"^":"e;a,b,c",
dI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aj(new P.kz(this,b),0),a)
else throw H.c(P.u("`setTimeout()` not found."))},
q:{
ky:function(a,b){var z=new P.kx(!0,null,0)
z.dI(a,b)
return z}}},
kz:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lT:{"^":"e;$ti"},
jt:{"^":"e;$ti"},
ks:{"^":"jt;a,$ti",
eh:function(a,b){var z=this.a
if(z.a!==0)throw H.c(P.cw("Future already completed"))
z.aA(b)}},
ew:{"^":"e;b3:a<,b,c,d,e,$ti",
ge5:function(){return this.b.b},
gct:function(){return(this.c&1)!==0},
gex:function(){return(this.c&2)!==0},
gcs:function(){return this.c===8},
ev:function(a){return this.b.b.bh(this.d,a)},
eD:function(a){if(this.c!==6)return!0
return this.b.b.bh(this.d,J.aJ(a))},
eu:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.eY(z,{func:1,args:[P.e,P.aX]}))return x.eH(z,y.gU(a),a.gab())
else return x.bh(z,y.gU(a))},
ew:function(){return this.b.b.cC(this.d)}},
as:{"^":"e;bS:a<,b,dW:c<,$ti",
dE:function(a,b){this.a=4
this.c=a},
gdR:function(){return this.a===2},
gb_:function(){return this.a>=4},
cG:function(a,b){var z,y,x
z=$.C
if(z!==C.f){z.toString
if(b!=null)b=P.kY(b,z)}y=new P.as(0,z,null,[null])
x=b==null?1:3
this.aU(new P.ew(null,y,x,a,b,[H.x(this,0),null]))
return y},
cF:function(a){return this.cG(a,null)},
eU:function(a){var z,y
z=$.C
y=new P.as(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.x(this,0)
this.aU(new P.ew(null,y,8,a,null,[z,z]))
return y},
aU:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gb_()){y.aU(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bU(null,null,z,new P.jI(this,a))}},
bO:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gb3()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gb_()){v.bO(a)
return}this.a=v.a
this.c=v.c}z.a=this.b4(a)
y=this.b
y.toString
P.bU(null,null,y,new P.jN(z,this))}},
aC:function(){var z=this.c
this.c=null
return this.b4(z)},
b4:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gb3()
z.a=y}return y},
aA:function(a){var z,y,x
z=this.$ti
y=H.cK(a,"$isbe",z,"$asbe")
if(y){z=H.cK(a,"$isas",z,null)
if(z)P.ex(a,this)
else P.jJ(a,this)}else{x=this.aC()
this.a=4
this.c=a
P.b0(this,x)}},
ai:[function(a,b){var z=this.aC()
this.a=8
this.c=new P.bD(a,b)
P.b0(this,z)},function(a){return this.ai(a,null)},"eX","$2","$1","gbJ",4,2,15],
$isbe:1,
q:{
jJ:function(a,b){var z,y,x
b.a=1
try{a.cG(new P.jK(b),new P.jL(b))}catch(x){z=H.a0(x)
y=H.au(x)
P.lA(new P.jM(b,z,y))}},
ex:function(a,b){var z
for(;a.gdR();)a=a.c
if(a.gb_()){z=b.aC()
b.a=a.a
b.c=a.c
P.b0(b,z)}else{z=b.c
b.a=2
b.c=a
a.bO(z)}},
b0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aJ(v)
t=v.gab()
y.toString
P.bT(null,null,y,u,t)}return}for(;b.gb3()!=null;b=s){s=b.a
b.a=null
P.b0(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gct()||b.gcs()){q=b.ge5()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aJ(v)
t=v.gab()
y.toString
P.bT(null,null,y,u,t)
return}p=$.C
if(p==null?q!=null:p!==q)$.C=q
else p=null
if(b.gcs())new P.jQ(z,x,b,w).$0()
else if(y){if(b.gct())new P.jP(x,b,r).$0()}else if(b.gex())new P.jO(z,x,b).$0()
if(p!=null)$.C=p
y=x.b
if(!!J.q(y).$isbe){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.b4(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.ex(y,o)
return}}o=b.b
b=o.aC()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
jI:{"^":"j:1;a,b",
$0:function(){P.b0(this.a,this.b)}},
jN:{"^":"j:1;a,b",
$0:function(){P.b0(this.b,this.a.a)}},
jK:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.aA(a)}},
jL:{"^":"j:16;a",
$2:function(a,b){this.a.ai(a,b)},
$1:function(a){return this.$2(a,null)}},
jM:{"^":"j:1;a,b,c",
$0:function(){this.a.ai(this.b,this.c)}},
jQ:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ew()}catch(w){y=H.a0(w)
x=H.au(w)
if(this.d){v=J.aJ(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bD(y,x)
u.a=!0
return}if(!!J.q(z).$isbe){if(z instanceof P.as&&z.gbS()>=4){if(z.gbS()===8){v=this.b
v.b=z.gdW()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cF(new P.jR(t))
v.a=!1}}},
jR:{"^":"j:0;a",
$1:function(a){return this.a}},
jP:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ev(this.c)}catch(x){z=H.a0(x)
y=H.au(x)
w=this.a
w.b=new P.bD(z,y)
w.a=!0}}},
jO:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.eD(z)===!0&&w.e!=null){v=this.b
v.b=w.eu(z)
v.a=!1}}catch(u){y=H.a0(u)
x=H.au(u)
w=this.a
v=J.aJ(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bD(y,x)
s.a=!0}}},
et:{"^":"e;a,b"},
e3:{"^":"e;$ti",
E:function(a,b){var z,y
z={}
y=new P.as(0,$.C,null,[null])
z.a=null
z.a=this.cw(new P.j0(z,this,b,y),!0,new P.j1(y),y.gbJ())
return y},
gj:function(a){var z,y
z={}
y=new P.as(0,$.C,null,[P.K])
z.a=0
this.cw(new P.j2(z),!0,new P.j3(z,y),y.gbJ())
return y}},
j0:{"^":"j;a,b,c,d",
$1:function(a){P.l0(new P.iZ(this.c,a),new P.j_(),P.kR(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cN(this.b,"e3",0)]}}},
iZ:{"^":"j:1;a,b",
$0:function(){return this.a.$1(this.b)}},
j_:{"^":"j:0;",
$1:function(a){}},
j1:{"^":"j:1;a",
$0:function(){this.a.aA(null)}},
j2:{"^":"j:0;a",
$1:function(a){++this.a.a}},
j3:{"^":"j:1;a,b",
$0:function(){this.b.aA(this.a.a)}},
iY:{"^":"e;$ti"},
kT:{"^":"j:1;a,b,c",
$0:function(){return this.a.ai(this.b,this.c)}},
kS:{"^":"j:17;a,b",
$2:function(a,b){P.kQ(this.a,this.b,a,b)}},
bD:{"^":"e;U:a>,ab:b<",
k:function(a){return H.b(this.a)},
$isM:1},
kF:{"^":"e;"},
kZ:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dW()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=J.aK(y)
throw x}},
kb:{"^":"kF;",
eI:function(a){var z,y,x
try{if(C.f===$.C){a.$0()
return}P.eO(null,null,this,a)}catch(x){z=H.a0(x)
y=H.au(x)
P.bT(null,null,this,z,y)}},
eJ:function(a,b){var z,y,x
try{if(C.f===$.C){a.$1(b)
return}P.eP(null,null,this,a,b)}catch(x){z=H.a0(x)
y=H.au(x)
P.bT(null,null,this,z,y)}},
ea:function(a){return new P.kd(this,a)},
c1:function(a){return new P.kc(this,a)},
eb:function(a){return new P.ke(this,a)},
h:function(a,b){return},
cC:function(a){if($.C===C.f)return a.$0()
return P.eO(null,null,this,a)},
bh:function(a,b){if($.C===C.f)return a.$1(b)
return P.eP(null,null,this,a,b)},
eH:function(a,b,c){if($.C===C.f)return a.$2(b,c)
return P.l_(null,null,this,a,b,c)}},
kd:{"^":"j:1;a,b",
$0:function(){return this.a.cC(this.b)}},
kc:{"^":"j:1;a,b",
$0:function(){return this.a.eI(this.b)}},
ke:{"^":"j:0;a,b",
$1:function(a){return this.a.eJ(this.b,a)}}}],["","",,P,{"^":"",
J:function(){return new H.dK(0,null,null,null,null,null,0,[null,null])},
cp:function(a){return H.lb(a,new H.dK(0,null,null,null,null,null,0,[null,null]))},
a3:function(a,b,c,d){return new P.jZ(0,null,null,null,null,null,0,[d])},
hR:function(a,b,c){var z,y
if(P.cG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b3()
y.push(a)
try{P.kW(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.e4(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cG(a))return b+"..."+c
z=new P.cx(b)
y=$.$get$b3()
y.push(a)
try{x=z
x.a=P.e4(x.gac(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gac()+c
y=z.gac()
return y.charCodeAt(0)==0?y:y},
cG:function(a){var z,y
for(z=0;y=$.$get$b3(),z<y.length;++z)if(a===y[z])return!0
return!1},
kW:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gM(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gC(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
cq:function(a,b){var z,y
z=P.a3(null,null,null,b)
for(y=J.av(a);y.u();)z.I(0,y.gC(y))
return z},
dO:function(a){var z,y,x
z={}
if(P.cG(a))return"{...}"
y=new P.cx("")
try{$.$get$b3().push(a)
x=y
x.a=x.gac()+"{"
z.a=!0
J.cX(a,new P.i4(z,y))
z=y
z.a=z.gac()+"}"}finally{z=$.$get$b3()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gac()
return z.charCodeAt(0)==0?z:z},
jZ:{"^":"jT;a,b,c,d,e,f,r,$ti",
gM:function(a){var z=new P.cD(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dL(b)},
dL:function(a){var z=this.d
if(z==null)return!1
return this.aY(z[this.aV(a)],a)>=0},
E:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.c(P.Q(this))
z=z.b}},
I:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cE()
this.b=z}return this.bH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cE()
this.c=y}return this.bH(y,b)}else return this.dJ(0,b)},
dJ:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cE()
this.d=z}y=this.aV(b)
x=z[y]
if(x==null)z[y]=[this.b2(b)]
else{if(this.aY(x,b)>=0)return!1
x.push(this.b2(b))}return!0},
cB:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bQ(this.c,b)
else return this.dT(0,b)},
dT:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aV(b)]
x=this.aY(y,b)
if(x<0)return!1
this.bU(y.splice(x,1)[0])
return!0},
al:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b0()}},
bH:function(a,b){if(a[b]!=null)return!1
a[b]=this.b2(b)
return!0},
bQ:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bU(z)
delete a[b]
return!0},
b0:function(){this.r=this.r+1&67108863},
b2:function(a){var z,y
z=new P.k_(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.b0()
return z},
bU:function(a){var z,y
z=a.gdS()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.b0()},
aV:function(a){return J.af(a)&0x3ffffff},
aY:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].gdN(),b))return y
return-1},
q:{
cE:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
k_:{"^":"e;dN:a<,b,dS:c<"},
cD:{"^":"e;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.Q(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jT:{"^":"iL;$ti"},
mV:{"^":"e;$ti",$isk:1},
dM:{"^":"eC;$ti",$isk:1,$isi:1},
l:{"^":"e;$ti",
gM:function(a){return new H.dN(a,this.gj(a),0,null,[H.bw(this,a,"l",0)])},
w:function(a,b){return this.h(a,b)},
E:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.c(P.Q(a))}},
es:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.v(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.Q(a))}return y},
bu:function(a,b){return H.e5(a,b,null,H.bw(this,a,"l",0))},
l:function(a,b){var z,y,x
z=H.D([],[H.bw(this,a,"l",0)])
y=this.gj(a)
x=C.c.gj(b)
if(typeof y!=="number")return y.l()
C.b.sj(z,C.c.l(y,x))
C.b.as(z,0,this.gj(a),a)
C.b.as(z,this.gj(a),z.length,b)
return z},
cq:function(a,b,c,d){var z
P.dY(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
k:function(a){return P.ci(a,"[","]")}},
cr:{"^":"U;$ti"},
i4:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
U:{"^":"e;$ti",
E:function(a,b){var z,y
for(z=J.av(this.gS(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a7(this.gS(a))},
k:function(a){return P.dO(a)}},
iM:{"^":"e;$ti",
O:function(a,b){var z
for(z=J.av(b);z.u();)this.I(0,z.gC(z))},
k:function(a){return P.ci(this,"{","}")},
E:function(a,b){var z
for(z=new P.cD(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)},
$isk:1},
iL:{"^":"iM;$ti"},
eC:{"^":"e+l;$ti"}}],["","",,P,{"^":"",
l9:function(a,b){var z=H.iC(a)
if(z!=null)return z
throw H.c(new P.hI("Invalid double",a,null))},
hD:function(a){var z=J.q(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.aV(a)+"'"},
ce:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hD(a)},
dB:function(a){return new P.jF(a)},
Z:function(a){H.by(H.b(a))},
cJ:{"^":"e;"},
"+bool":0,
cc:{"^":"e;e4:a<,b",
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.cc))return!1
return this.a===b.a&&this.b===b.b},
a_:function(a,b){return C.c.a_(this.a,b.ge4())},
gF:function(a){var z=this.a
return(z^C.c.bR(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hq(H.iB(this))
y=P.b9(H.iz(this))
x=P.b9(H.iv(this))
w=P.b9(H.iw(this))
v=P.b9(H.iy(this))
u=P.b9(H.iA(this))
t=P.hr(H.ix(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b9:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"b5;"},
"+double":0,
bb:{"^":"e;aj:a<",
l:function(a,b){return new P.bb(C.c.l(this.a,b.gaj()))},
H:function(a,b){return new P.bb(this.a-b.gaj())},
a8:function(a,b){return C.c.a8(this.a,b.gaj())},
aq:function(a,b){return C.c.aq(this.a,b.gaj())},
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a},
gF:function(a){return this.a&0x1FFFFFFF},
a_:function(a,b){return C.c.a_(this.a,b.gaj())},
k:function(a){var z,y,x,w,v
z=new P.hz()
y=this.a
if(y<0)return"-"+new P.bb(0-y).k(0)
x=z.$1(C.c.a6(y,6e7)%60)
w=z.$1(C.c.a6(y,1e6)%60)
v=new P.hy().$1(y%1e6)
return""+C.c.a6(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
q:{
dw:function(a,b,c,d,e,f){return new P.bb(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hy:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hz:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"e;",
gab:function(){return H.au(this.$thrownJsError)}},
dW:{"^":"M;",
k:function(a){return"Throw of null."}},
an:{"^":"M;a,b,c,d",
gaX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaW:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaX()+y+x
if(!this.a)return w
v=this.gaW()
u=P.ce(this.b)
return w+v+": "+H.b(u)},
q:{
dc:function(a,b,c){return new P.an(!0,a,b,c)},
h7:function(a){return new P.an(!1,null,a,"Must not be null")}}},
dX:{"^":"an;e,f,a,b,c,d",
gaX:function(){return"RangeError"},
gaW:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
q:{
bN:function(a,b,c){return new P.dX(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.dX(b,c,!0,a,d,"Invalid value")},
dY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
z=a>c}else z=!0
if(z)throw H.c(P.aA(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
z=b>c}else z=!0
if(z)throw H.c(P.aA(b,a,c,"end",f))
return b}return c}}},
hP:{"^":"an;e,j:f>,a,b,c,d",
gaX:function(){return"RangeError"},
gaW:function(){if(J.b7(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
q:{
E:function(a,b,c,d,e){var z=e!=null?e:J.a7(b)
return new P.hP(b,z,!0,a,c,"Index out of range")}}},
jd:{"^":"M;a",
k:function(a){return"Unsupported operation: "+this.a},
q:{
u:function(a){return new P.jd(a)}}},
jb:{"^":"M;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
q:{
er:function(a){return new P.jb(a)}}},
bP:{"^":"M;a",
k:function(a){return"Bad state: "+this.a},
q:{
cw:function(a){return new P.bP(a)}}},
hk:{"^":"M;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.ce(z))+"."},
q:{
Q:function(a){return new P.hk(a)}}},
e1:{"^":"e;",
k:function(a){return"Stack Overflow"},
gab:function(){return},
$isM:1},
ho:{"^":"M;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
mg:{"^":"e;"},
jF:{"^":"e;a",
k:function(a){return"Exception: "+this.a}},
hI:{"^":"e;a,b,c",
k:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.h.aO(x,0,75)+"..."
return y+"\n"+x}},
K:{"^":"b5;"},
"+int":0,
aN:{"^":"e;$ti",
bi:["d8",function(a,b){return new H.es(this,b,[H.cN(this,"aN",0)])}],
E:function(a,b){var z
for(z=this.gM(this);z.u();)b.$1(z.gC(z))},
gj:function(a){var z,y
z=this.gM(this)
for(y=0;z.u();)++y
return y},
gaa:function(a){var z,y
z=this.gM(this)
if(!z.u())throw H.c(H.dG())
y=z.gC(z)
if(z.u())throw H.c(H.hT())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.h7("index"))
if(b<0)H.a_(P.aA(b,0,null,"index",null))
for(z=this.gM(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
k:function(a){return P.hR(this,"(",")")}},
cj:{"^":"e;$ti"},
i:{"^":"e;$ti",$isk:1},
"+List":0,
bK:{"^":"e;$ti"},
bj:{"^":"e;",
gF:function(a){return P.e.prototype.gF.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
b5:{"^":"e;"},
"+num":0,
e:{"^":";",
J:function(a,b){return this===b},
gF:function(a){return H.aU(this)},
k:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.k(this)}},
aX:{"^":"e;"},
o:{"^":"e;"},
"+String":0,
cx:{"^":"e;ac:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
e4:function(a,b,c){var z=J.av(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.u())}else{a+=H.b(z.gC(z))
for(;z.u();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
hB:function(a,b,c){var z,y
z=document.body
y=(z&&C.u).a0(z,a,b,c)
y.toString
z=new H.es(new W.V(y),new W.hC(),[W.t])
return z.gaa(z)},
dz:function(a){return"wheel"},
aM:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fI(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a0(x)}return z},
jC:function(a,b){return document.createElement(a)},
at:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bR:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jw(a)
if(!!J.q(z).$isH)return z
return}else return a},
eR:function(a){var z=$.C
if(z===C.f)return a
return z.eb(a)},
z:{"^":"aw;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lH:{"^":"cv;m:x=,n:y=,A:z=","%":"Accelerometer|LinearAccelerationSensor"},
lI:{"^":"h;j:length=","%":"AccessibleNodeList"},
lJ:{"^":"z;T:target=,aF:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lK:{"^":"z;T:target=,aF:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lP:{"^":"z;aF:href},T:target=","%":"HTMLBaseElement"},
hb:{"^":"h;","%":"Response;Body"},
c8:{"^":"z;",$isc8:1,"%":"HTMLBodyElement"},
lQ:{"^":"z;N:name=","%":"HTMLButtonElement"},
lR:{"^":"z;K:height},L:width}",
cY:function(a,b,c){var z=a.getContext(b,P.l7(c,null))
return z},
"%":"HTMLCanvasElement"},
lS:{"^":"h;",
aL:function(a){return P.Y(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
he:{"^":"t;j:length=","%":"CDATASection|Comment|Text;CharacterData"},
lU:{"^":"a2;a3:style=","%":"CSSFontFaceRule"},
lV:{"^":"a2;a3:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lW:{"^":"a2;a3:style=","%":"CSSPageRule"},
lX:{"^":"bF;j:length=","%":"CSSPerspective"},
lY:{"^":"cb;m:x=,n:y=","%":"CSSPositionValue"},
lZ:{"^":"bF;m:x=,n:y=,A:z=","%":"CSSRotation"},
a2:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
m_:{"^":"bF;m:x=,n:y=,A:z=","%":"CSSScale"},
hl:{"^":"ju;j:length=",
bI:function(a,b){var z,y
z=$.$get$dp()
y=z[b]
if(typeof y==="string")return y
y=this.e1(a,b)
z[b]=y
return y},
e1:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hs()+b
if(z in a)return z
return b},
dZ:function(a,b,c,d){a.setProperty(b,c,d)},
sK:function(a,b){a.height=b},
sL:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hm:{"^":"e;",
seq:function(a,b){this.dZ(a,this.bI(a,"float"),b,"")}},
m0:{"^":"a2;a3:style=","%":"CSSStyleRule"},
cb:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bF:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
m1:{"^":"cb;j:length=","%":"CSSTransformValue"},
m2:{"^":"bF;m:x=,n:y=,A:z=","%":"CSSTranslation"},
m3:{"^":"cb;j:length=","%":"CSSUnparsedValue"},
m4:{"^":"a2;a3:style=","%":"CSSViewportRule"},
m5:{"^":"h;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
m6:{"^":"h;m:x=,n:y=,A:z=","%":"DeviceAcceleration"},
ht:{"^":"z;","%":"HTMLDivElement"},
m7:{"^":"t;",
gbb:function(a){return new W.aB(a,"change",!1,[W.L])},
gbc:function(a){return new W.aB(a,"input",!1,[W.L])},
gbd:function(a){return new W.aB(a,"mousedown",!1,[W.R])},
gaI:function(a){return new W.aB(a,"mousemove",!1,[W.R])},
gbe:function(a){return new W.aB(a,"mouseup",!1,[W.R])},
gbf:function(a){return new W.aB(a,W.dz(a),!1,[W.b_])},
"%":"Document|HTMLDocument|XMLDocument"},
m8:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
m9:{"^":"hu;",
gZ:function(a){return a.a},
gW:function(a){return a.b},
ga2:function(a){return a.c},
"%":"DOMMatrix"},
hu:{"^":"h;",
gZ:function(a){return a.a},
gW:function(a){return a.b},
ga2:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
ma:{"^":"hv;",
gap:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gA:function(a){return a.z},
"%":"DOMPoint"},
hv:{"^":"h;",
gap:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gA:function(a){return a.z},
"%":";DOMPointReadOnly"},
mb:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.a9]},
$isk:1,
$ask:function(){return[P.a9]},
$isr:1,
$asr:function(){return[P.a9]},
$asl:function(){return[P.a9]},
$isi:1,
$asi:function(){return[P.a9]},
$asm:function(){return[P.a9]},
"%":"ClientRectList|DOMRectList"},
hw:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gL(a))+" x "+H.b(this.gK(a))},
J:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa9)return!1
return a.left===z.gcu(b)&&a.top===z.gcH(b)&&this.gL(a)===z.gL(b)&&this.gK(a)===z.gK(b)},
gF:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gL(a)
w=this.gK(a)
return W.eB(W.at(W.at(W.at(W.at(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcI:function(a){return new P.ai(a.left,a.top,[null])},
gK:function(a){return a.height},
gcu:function(a){return a.left},
gcH:function(a){return a.top},
gL:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa9:1,
$asa9:I.aE,
"%":";DOMRectReadOnly"},
mc:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$isr:1,
$asr:function(){return[P.o]},
$asl:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$asm:function(){return[P.o]},
"%":"DOMStringList"},
md:{"^":"h;j:length=","%":"DOMTokenList"},
aw:{"^":"t;a3:style=,ez:id=,bN:namespaceURI=,eK:tagName=",
ge8:function(a){return new W.jB(a)},
k:function(a){return a.localName},
a0:["aP",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dy
if(z==null){z=H.D([],[W.dT])
y=new W.dU(z)
z.push(W.ey(null))
z.push(W.eK())
$.dy=y
d=y}else d=z
z=$.dx
if(z==null){z=new W.eN(d)
$.dx=z
c=z}else{z.a=d
c=z}}if($.ag==null){z=document
y=z.implementation.createHTMLDocument("")
$.ag=y
$.cd=y.createRange()
y=$.ag
y.toString
x=y.createElement("base")
J.fS(x,z.baseURI)
$.ag.head.appendChild(x)}z=$.ag
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ag
if(!!this.$isc8)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ag.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.B(C.N,a.tagName)){$.cd.selectNodeContents(w)
v=$.cd.createContextualFragment(b)}else{w.innerHTML=b
v=$.ag.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ag.body
if(w==null?z!=null:w!==z)J.d5(w)
c.bq(v)
document.adoptNode(v)
return v},function(a,b,c){return this.a0(a,b,c,null)},"ek",null,null,"geY",5,5,null],
d0:function(a,b,c,d){a.textContent=null
a.appendChild(this.a0(a,b,c,d))},
br:function(a,b){return this.d0(a,b,null,null)},
bj:function(a){return a.getBoundingClientRect()},
gbb:function(a){return new W.W(a,"change",!1,[W.L])},
gbc:function(a){return new W.W(a,"input",!1,[W.L])},
gbd:function(a){return new W.W(a,"mousedown",!1,[W.R])},
gaI:function(a){return new W.W(a,"mousemove",!1,[W.R])},
gbe:function(a){return new W.W(a,"mouseup",!1,[W.R])},
gbf:function(a){return new W.W(a,W.dz(a),!1,[W.b_])},
$isaw:1,
"%":";Element"},
hC:{"^":"j:0;",
$1:function(a){return!!J.q(a).$isaw}},
me:{"^":"z;K:height},N:name=,L:width}","%":"HTMLEmbedElement"},
mf:{"^":"L;U:error=","%":"ErrorEvent"},
L:{"^":"h;",
gT:function(a){return W.bR(a.target)},
aK:function(a){return a.preventDefault()},
d4:function(a){return a.stopPropagation()},
$isL:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
H:{"^":"h;",
bY:["d6",function(a,b,c,d){if(c!=null)this.dK(a,b,c,!1)}],
dK:function(a,b,c,d){return a.addEventListener(b,H.aj(c,1),!1)},
dU:function(a,b,c,d){return a.removeEventListener(b,H.aj(c,1),!1)},
$isH:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eH|eI|eL|eM"},
mz:{"^":"z;N:name=","%":"HTMLFieldSetElement"},
mA:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isr:1,
$asr:function(){return[W.bc]},
$asl:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$asm:function(){return[W.bc]},
"%":"FileList"},
mB:{"^":"H;U:error=","%":"FileReader"},
mC:{"^":"H;U:error=,j:length=","%":"FileWriter"},
mE:{"^":"h;a3:style=","%":"FontFace"},
mF:{"^":"H;",
eZ:function(a,b,c){return a.forEach(H.aj(b,3),c)},
E:function(a,b){b=H.aj(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mH:{"^":"z;j:length=,N:name=,T:target=","%":"HTMLFormElement"},
mJ:{"^":"cv;m:x=,n:y=,A:z=","%":"Gyroscope"},
mK:{"^":"h;j:length=","%":"History"},
mL:{"^":"jV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
mM:{"^":"z;K:height},N:name=,L:width}","%":"HTMLIFrameElement"},
mN:{"^":"z;K:height},L:width}","%":"HTMLImageElement"},
ch:{"^":"z;K:height},N:name=,L:width}",$isch:1,"%":"HTMLInputElement"},
mP:{"^":"h;T:target=","%":"IntersectionObserverEntry"},
bI:{"^":"eq;",
geV:function(a){return a.which},
$isbI:1,
"%":"KeyboardEvent"},
mU:{"^":"z;aF:href}","%":"HTMLLinkElement"},
mW:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
mX:{"^":"cv;m:x=,n:y=,A:z=","%":"Magnetometer"},
mY:{"^":"z;N:name=","%":"HTMLMapElement"},
i8:{"^":"z;U:error=","%":"HTMLAudioElement;HTMLMediaElement"},
n0:{"^":"h;j:length=","%":"MediaList"},
n1:{"^":"H;",
R:function(a){return a.clone()},
"%":"MediaStream"},
n2:{"^":"H;b9:enabled=",
R:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
n3:{"^":"H;",
bY:function(a,b,c,d){if(J.N(b,"message"))a.start()
this.d6(a,b,c,!1)},
"%":"MessagePort"},
n4:{"^":"z;N:name=","%":"HTMLMetaElement"},
n5:{"^":"k0;",
h:function(a,b){return P.Y(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.D([],[P.o])
this.E(a,new W.ia(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.o,null]},
"%":"MIDIInputMap"},
ia:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
n6:{"^":"k1;",
h:function(a,b){return P.Y(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.D([],[P.o])
this.E(a,new W.ib(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
ib:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
n7:{"^":"k3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isr:1,
$asr:function(){return[W.bi]},
$asl:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$asm:function(){return[W.bi]},
"%":"MimeTypeArray"},
R:{"^":"eq;c7:button=",
geE:function(a){return new P.ai(a.movementX,a.movementY,[null])},
gcA:function(a){var z,y,x
if(!!a.offsetX)return new P.ai(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.bR(z)).$isaw)throw H.c(P.u("offsetX is only supported on elements"))
y=W.bR(z)
z=[null]
x=new P.ai(a.clientX,a.clientY,z).H(0,J.fJ(J.fL(y)))
return new P.ai(J.d6(x.a),J.d6(x.b),z)}},
$isR:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
n8:{"^":"h;T:target=","%":"MutationRecord"},
V:{"^":"dM;a",
gaa:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cw("No elements"))
if(y>1)throw H.c(P.cw("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.q(b)
if(!!z.$isV){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gM(b),y=this.a;z.u();)y.appendChild(z.gC(z))},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gM:function(a){var z=this.a.childNodes
return new W.dC(z,z.length,-1,null,[H.bw(C.P,z,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$ask:function(){return[W.t]},
$asdM:function(){return[W.t]},
$asl:function(){return[W.t]},
$asi:function(){return[W.t]},
$aseC:function(){return[W.t]}},
t:{"^":"H;aJ:parentNode=,bg:previousSibling=",
gcz:function(a){return new W.V(a)},
eG:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.d7(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ng:{"^":"h;",
eF:[function(a){return a.previousNode()},"$0","gbg",1,0,4],
"%":"NodeIterator"},
il:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
nj:{"^":"z;K:height},N:name=,L:width}","%":"HTMLObjectElement"},
nl:{"^":"z;N:name=","%":"HTMLOutputElement"},
nm:{"^":"z;N:name=","%":"HTMLParamElement"},
aT:{"^":"h;j:length=","%":"Plugin"},
no:{"^":"k9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aT]},
$isk:1,
$ask:function(){return[W.aT]},
$isr:1,
$asr:function(){return[W.aT]},
$asl:function(){return[W.aT]},
$isi:1,
$asi:function(){return[W.aT]},
$asm:function(){return[W.aT]},
"%":"PluginArray"},
nr:{"^":"he;T:target=","%":"ProcessingInstruction"},
ns:{"^":"h;",
bj:function(a){return a.getBoundingClientRect()},
"%":"Range"},
ny:{"^":"h;T:target=","%":"ResizeObserverEntry"},
nz:{"^":"kf;",
h:function(a,b){return P.Y(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.D([],[P.o])
this.E(a,new W.iI(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.o,null]},
"%":"RTCStatsReport"},
iI:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
nA:{"^":"z;j:length=,N:name=","%":"HTMLSelectElement"},
cv:{"^":"H;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
nB:{"^":"L;U:error=","%":"SensorErrorEvent"},
nC:{"^":"z;N:name=","%":"HTMLSlotElement"},
nD:{"^":"eI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bo]},
$isk:1,
$ask:function(){return[W.bo]},
$isr:1,
$asr:function(){return[W.bo]},
$asl:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$asm:function(){return[W.bo]},
"%":"SourceBufferList"},
nE:{"^":"kl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bp]},
$isk:1,
$ask:function(){return[W.bp]},
$isr:1,
$asr:function(){return[W.bp]},
$asl:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$asm:function(){return[W.bp]},
"%":"SpeechGrammarList"},
nF:{"^":"L;U:error=","%":"SpeechRecognitionError"},
aW:{"^":"h;j:length=","%":"SpeechRecognitionResult"},
nH:{"^":"ko;",
h:function(a,b){return a.getItem(b)},
E:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gS:function(a){var z=H.D([],[P.o])
this.E(a,new W.iX(z))
return z},
gj:function(a){return a.length},
$asU:function(){return[P.o,P.o]},
"%":"Storage"},
iX:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
j5:{"^":"z;",
a0:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=W.hB("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.V(y).O(0,J.fG(z))
return y},
"%":"HTMLTableElement"},
nL:{"^":"z;",
a0:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.a0(z.createElement("table"),b,c,d)
z.toString
z=new W.V(z)
x=z.gaa(z)
x.toString
z=new W.V(x)
w=z.gaa(z)
y.toString
w.toString
new W.V(y).O(0,new W.V(w))
return y},
"%":"HTMLTableRowElement"},
nM:{"^":"z;",
a0:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.a0(z.createElement("table"),b,c,d)
z.toString
z=new W.V(z)
x=z.gaa(z)
y.toString
x.toString
new W.V(y).O(0,new W.V(x))
return y},
"%":"HTMLTableSectionElement"},
e7:{"^":"z;",$ise7:1,"%":"HTMLTemplateElement"},
nN:{"^":"z;N:name=","%":"HTMLTextAreaElement"},
nP:{"^":"kw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bs]},
$isk:1,
$ask:function(){return[W.bs]},
$isr:1,
$asr:function(){return[W.bs]},
$asl:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$asm:function(){return[W.bs]},
"%":"TextTrackCueList"},
nQ:{"^":"eM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.br]},
$isk:1,
$ask:function(){return[W.br]},
$isr:1,
$asr:function(){return[W.br]},
$asl:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$asm:function(){return[W.br]},
"%":"TextTrackList"},
nR:{"^":"h;j:length=","%":"TimeRanges"},
aY:{"^":"h;",
gT:function(a){return W.bR(a.target)},
"%":"Touch"},
nS:{"^":"kB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aY]},
$isk:1,
$ask:function(){return[W.aY]},
$isr:1,
$asr:function(){return[W.aY]},
$asl:function(){return[W.aY]},
$isi:1,
$asi:function(){return[W.aY]},
$asm:function(){return[W.aY]},
"%":"TouchList"},
nT:{"^":"h;j:length=","%":"TrackDefaultList"},
nW:{"^":"h;",
f_:[function(a){return a.parentNode()},"$0","gaJ",1,0,4],
eF:[function(a){return a.previousNode()},"$0","gbg",1,0,4],
"%":"TreeWalker"},
eq:{"^":"L;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nY:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
o_:{"^":"h;m:x=,A:z=","%":"VRStageBoundsPoint"},
o1:{"^":"i8;K:height},L:width}","%":"HTMLVideoElement"},
o2:{"^":"H;j:length=","%":"VideoTrackList"},
b_:{"^":"R;",
gem:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isb_:1,
"%":"WheelEvent"},
ji:{"^":"H;",
ge7:function(a){var z,y
z=P.b5
y=new P.as(0,$.C,null,[z])
this.dP(a)
this.dV(a,W.eR(new W.jj(new P.ks(y,[z]))))
return y},
dV:function(a,b){return a.requestAnimationFrame(H.aj(b,1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
jj:{"^":"j:0;a",
$1:function(a){this.a.eh(0,a)}},
o3:{"^":"H;"},
o7:{"^":"t;N:name=,bN:namespaceURI=","%":"Attr"},
o8:{"^":"kH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.a2]},
$isk:1,
$ask:function(){return[W.a2]},
$isr:1,
$asr:function(){return[W.a2]},
$asl:function(){return[W.a2]},
$isi:1,
$asi:function(){return[W.a2]},
$asm:function(){return[W.a2]},
"%":"CSSRuleList"},
o9:{"^":"hw;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
J:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa9)return!1
return a.left===z.gcu(b)&&a.top===z.gcH(b)&&a.width===z.gL(b)&&a.height===z.gK(b)},
gF:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.eB(W.at(W.at(W.at(W.at(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcI:function(a){return new P.ai(a.left,a.top,[null])},
gK:function(a){return a.height},
gL:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oa:{"^":"kJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isr:1,
$asr:function(){return[W.bf]},
$asl:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$asm:function(){return[W.bf]},
"%":"GamepadList"},
od:{"^":"kL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oe:{"^":"hb;",
R:function(a){return a.clone()},
"%":"Request"},
of:{"^":"kN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aW]},
$isk:1,
$ask:function(){return[W.aW]},
$isr:1,
$asr:function(){return[W.aW]},
$asl:function(){return[W.aW]},
$isi:1,
$asi:function(){return[W.aW]},
$asm:function(){return[W.aW]},
"%":"SpeechRecognitionResultList"},
og:{"^":"kP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bq]},
$isk:1,
$ask:function(){return[W.bq]},
$isr:1,
$asr:function(){return[W.bq]},
$asl:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asm:function(){return[W.bq]},
"%":"StyleSheetList"},
jr:{"^":"cr;dQ:a<",
E:function(a,b){var z,y,x,w,v
for(z=this.gS(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gS:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.D([],[P.o])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.f(v)
if(u.gbN(v)==null)y.push(u.gN(v))}return y},
$ascr:function(){return[P.o,P.o]},
$asU:function(){return[P.o,P.o]}},
jB:{"^":"jr;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gS(this).length}},
aB:{"^":"e3;a,b,c,$ti",
cw:function(a,b,c,d){return W.a4(this.a,this.b,a,!1,H.x(this,0))}},
W:{"^":"aB;a,b,c,$ti"},
jD:{"^":"iY;a,b,c,d,e,$ti",
dD:function(a,b,c,d,e){this.e2()},
ed:function(a){if(this.b==null)return
this.e3()
this.b=null
this.d=null
return},
e2:function(){var z=this.d
if(z!=null&&this.a<=0)J.fm(this.b,this.c,z,!1)},
e3:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.fl(x,this.c,z,!1)}},
q:{
a4:function(a,b,c,d,e){var z=c==null?null:W.eR(new W.jE(c))
z=new W.jD(0,a,b,z,!1,[e])
z.dD(a,b,c,!1,e)
return z}}},
jE:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
cB:{"^":"e;cS:a<",
dF:function(a){var z,y
z=$.$get$cC()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.M[y],W.lh())
for(y=0;y<12;++y)z.i(0,C.q[y],W.li())}},
ad:function(a){return $.$get$ez().B(0,W.aM(a))},
a7:function(a,b,c){var z,y,x
z=W.aM(a)
y=$.$get$cC()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
q:{
ey:function(a){var z,y
z=document.createElement("a")
y=new W.kg(z,window.location)
y=new W.cB(y)
y.dF(a)
return y},
ob:[function(a,b,c,d){return!0},"$4","lh",16,0,11],
oc:[function(a,b,c,d){var z,y,x,w,v
z=d.gcS()
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
return z},"$4","li",16,0,11]}},
m:{"^":"e;$ti",
gM:function(a){return new W.dC(a,this.gj(a),-1,null,[H.bw(this,a,"m",0)])}},
dU:{"^":"e;a",
ad:function(a){return C.b.bZ(this.a,new W.io(a))},
a7:function(a,b,c){return C.b.bZ(this.a,new W.im(a,b,c))}},
io:{"^":"j:0;a",
$1:function(a){return a.ad(this.a)}},
im:{"^":"j:0;a,b,c",
$1:function(a){return a.a7(this.a,this.b,this.c)}},
kh:{"^":"e;cS:d<",
dH:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.bi(0,new W.ki())
y=b.bi(0,new W.kj())
this.b.O(0,z)
x=this.c
x.O(0,C.O)
x.O(0,y)},
ad:function(a){return this.a.B(0,W.aM(a))},
a7:["da",function(a,b,c){var z,y
z=W.aM(a)
y=this.c
if(y.B(0,H.b(z)+"::"+b))return this.d.e6(c)
else if(y.B(0,"*::"+b))return this.d.e6(c)
else{y=this.b
if(y.B(0,H.b(z)+"::"+b))return!0
else if(y.B(0,"*::"+b))return!0
else if(y.B(0,H.b(z)+"::*"))return!0
else if(y.B(0,"*::*"))return!0}return!1}]},
ki:{"^":"j:0;",
$1:function(a){return!C.b.B(C.q,a)}},
kj:{"^":"j:0;",
$1:function(a){return C.b.B(C.q,a)}},
kt:{"^":"kh;e,a,b,c,d",
a7:function(a,b,c){if(this.da(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cZ(a).a.getAttribute("template")==="")return this.e.B(0,b)
return!1},
q:{
eK:function(){var z=P.o
z=new W.kt(P.cq(C.p,z),P.a3(null,null,null,z),P.a3(null,null,null,z),P.a3(null,null,null,z),null)
z.dH(null,new H.i6(C.p,new W.ku(),[H.x(C.p,0),null]),["TEMPLATE"],null)
return z}}},
ku:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
kr:{"^":"e;",
ad:function(a){var z=J.q(a)
if(!!z.$isdZ)return!1
z=!!z.$isF
if(z&&W.aM(a)==="foreignObject")return!1
if(z)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.h.aN(b,"on"))return!1
return this.ad(a)}},
dC:{"^":"e;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.b8(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
jv:{"^":"e;a",$isH:1,q:{
jw:function(a){if(a===window)return a
else return new W.jv(a)}}},
dT:{"^":"e;"},
nh:{"^":"e;"},
nX:{"^":"e;"},
kg:{"^":"e;a,b"},
eN:{"^":"e;a",
bq:function(a){new W.kE(this).$2(a,null)},
ak:function(a,b){if(b==null)J.d5(a)
else b.removeChild(a)},
dY:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cZ(a)
x=y.gdQ().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a0(t)}v="element unprintable"
try{v=J.aK(a)}catch(t){H.a0(t)}try{u=W.aM(a)
this.dX(a,b,z,v,u,y,x)}catch(t){if(H.a0(t) instanceof P.an)throw t
else{this.ak(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dX:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ak(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ad(a)){this.ak(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a7(a,"is",g)){this.ak(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gS(f)
y=H.D(z.slice(0),[H.x(z,0)])
for(x=f.gS(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a7(a,J.fY(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$ise7)this.bq(a.content)}},
kE:{"^":"j:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dY(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ak(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fH(z)}catch(w){H.a0(w)
v=z
if(x){u=J.f(v)
if(u.gaJ(v)!=null){u.gaJ(v)
u.gaJ(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ju:{"^":"h+hm;"},
jx:{"^":"h+l;"},
jy:{"^":"jx+m;"},
jz:{"^":"h+l;"},
jA:{"^":"jz+m;"},
jG:{"^":"h+l;"},
jH:{"^":"jG+m;"},
jU:{"^":"h+l;"},
jV:{"^":"jU+m;"},
k0:{"^":"h+U;"},
k1:{"^":"h+U;"},
k2:{"^":"h+l;"},
k3:{"^":"k2+m;"},
k4:{"^":"h+l;"},
k5:{"^":"k4+m;"},
k8:{"^":"h+l;"},
k9:{"^":"k8+m;"},
kf:{"^":"h+U;"},
eH:{"^":"H+l;"},
eI:{"^":"eH+m;"},
kk:{"^":"h+l;"},
kl:{"^":"kk+m;"},
ko:{"^":"h+U;"},
kv:{"^":"h+l;"},
kw:{"^":"kv+m;"},
eL:{"^":"H+l;"},
eM:{"^":"eL+m;"},
kA:{"^":"h+l;"},
kB:{"^":"kA+m;"},
kG:{"^":"h+l;"},
kH:{"^":"kG+m;"},
kI:{"^":"h+l;"},
kJ:{"^":"kI+m;"},
kK:{"^":"h+l;"},
kL:{"^":"kK+m;"},
kM:{"^":"h+l;"},
kN:{"^":"kM+m;"},
kO:{"^":"h+l;"},
kP:{"^":"kO+m;"}}],["","",,P,{"^":"",
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.J()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
l7:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cX(a,new P.l8(z))
return z},
dv:function(){var z=$.du
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.du=z}return z},
hs:function(){var z,y
z=$.dr
if(z!=null)return z
y=$.ds
if(y==null){y=J.c2(window.navigator.userAgent,"Firefox",0)
$.ds=y}if(y)z="-moz-"
else{y=$.dt
if(y==null){y=P.dv()!==!0&&J.c2(window.navigator.userAgent,"Trident/",0)
$.dt=y}if(y)z="-ms-"
else z=P.dv()===!0?"-o-":"-webkit-"}$.dr=z
return z},
l8:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",nx:{"^":"H;U:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nU:{"^":"H;U:error=","%":"IDBTransaction"},o0:{"^":"L;T:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lC:function(a){return Math.sqrt(a)},
eA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:{"^":"e;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
J:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ai))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gF:function(a){var z,y
z=J.af(this.a)
y=J.af(this.b)
return P.jW(P.eA(P.eA(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.ai(y,C.a.l(z,x),this.$ti)},
H:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.H()
if(typeof x!=="number")return H.v(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.H()
if(typeof y!=="number")return H.v(y)
return new P.ai(z-x,w-y,this.$ti)}},
ka:{"^":"e;$ti"},
a9:{"^":"ka;$ti"}}],["","",,P,{"^":"",lG:{"^":"ax;T:target=","%":"SVGAElement"},mh:{"^":"F;m:x=,n:y=","%":"SVGFEBlendElement"},mi:{"^":"F;m:x=,n:y=","%":"SVGFEColorMatrixElement"},mj:{"^":"F;m:x=,n:y=","%":"SVGFEComponentTransferElement"},mk:{"^":"F;m:x=,n:y=","%":"SVGFECompositeElement"},ml:{"^":"F;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},mm:{"^":"F;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},mn:{"^":"F;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},mo:{"^":"F;m:x=,n:y=","%":"SVGFEFloodElement"},mp:{"^":"F;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},mq:{"^":"F;m:x=,n:y=","%":"SVGFEImageElement"},mr:{"^":"F;m:x=,n:y=","%":"SVGFEMergeElement"},ms:{"^":"F;m:x=,n:y=","%":"SVGFEMorphologyElement"},mt:{"^":"F;m:x=,n:y=","%":"SVGFEOffsetElement"},mu:{"^":"F;m:x=,n:y=,A:z=","%":"SVGFEPointLightElement"},mv:{"^":"F;m:x=,n:y=","%":"SVGFESpecularLightingElement"},mw:{"^":"F;m:x=,n:y=,A:z=","%":"SVGFESpotLightElement"},mx:{"^":"F;m:x=,n:y=","%":"SVGFETileElement"},my:{"^":"F;m:x=,n:y=","%":"SVGFETurbulenceElement"},mD:{"^":"F;m:x=,n:y=","%":"SVGFilterElement"},mG:{"^":"ax;m:x=,n:y=","%":"SVGForeignObjectElement"},hK:{"^":"ax;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ax:{"^":"F;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mO:{"^":"ax;m:x=,n:y=","%":"SVGImageElement"},mT:{"^":"jY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.cn]},
$asl:function(){return[P.cn]},
$isi:1,
$asi:function(){return[P.cn]},
$asm:function(){return[P.cn]},
"%":"SVGLengthList"},mZ:{"^":"F;m:x=,n:y=","%":"SVGMaskElement"},n_:{"^":"h;Z:a=,W:b=,a2:c=","%":"SVGMatrix"},ni:{"^":"k7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.ct]},
$asl:function(){return[P.ct]},
$isi:1,
$asi:function(){return[P.ct]},
$asm:function(){return[P.ct]},
"%":"SVGNumberList"},nn:{"^":"F;m:x=,n:y=","%":"SVGPatternElement"},np:{"^":"h;m:x=,n:y=","%":"SVGPoint"},nq:{"^":"h;j:length=","%":"SVGPointList"},nt:{"^":"h;m:x=,n:y=","%":"SVGRect"},nu:{"^":"hK;m:x=,n:y=","%":"SVGRectElement"},dZ:{"^":"F;",$isdZ:1,"%":"SVGScriptElement"},nI:{"^":"kq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.o]},
$asl:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$asm:function(){return[P.o]},
"%":"SVGStringList"},F:{"^":"aw;",
a0:function(a,b,c,d){var z,y,x,w,v,u
z=H.D([],[W.dT])
z.push(W.ey(null))
z.push(W.eK())
z.push(new W.kr())
c=new W.eN(new W.dU(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.u).ek(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.V(w)
u=z.gaa(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gbb:function(a){return new W.W(a,"change",!1,[W.L])},
gbc:function(a){return new W.W(a,"input",!1,[W.L])},
gbd:function(a){return new W.W(a,"mousedown",!1,[W.R])},
gaI:function(a){return new W.W(a,"mousemove",!1,[W.R])},
gbe:function(a){return new W.W(a,"mouseup",!1,[W.R])},
gbf:function(a){return new W.W(a,"mousewheel",!1,[W.b_])},
$isF:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nJ:{"^":"ax;m:x=,n:y=","%":"SVGSVGElement"},j6:{"^":"ax;","%":"SVGTextPathElement;SVGTextContentElement"},nO:{"^":"j6;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nV:{"^":"kD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.cz]},
$asl:function(){return[P.cz]},
$isi:1,
$asi:function(){return[P.cz]},
$asm:function(){return[P.cz]},
"%":"SVGTransformList"},nZ:{"^":"ax;m:x=,n:y=","%":"SVGUseElement"},jX:{"^":"h+l;"},jY:{"^":"jX+m;"},k6:{"^":"h+l;"},k7:{"^":"k6+m;"},kp:{"^":"h+l;"},kq:{"^":"kp+m;"},kC:{"^":"h+l;"},kD:{"^":"kC+m;"}}],["","",,P,{"^":"",lL:{"^":"h;j:length=","%":"AudioBuffer"},lM:{"^":"js;",
h:function(a,b){return P.Y(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.D([],[P.o])
this.E(a,new P.h9(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.o,null]},
"%":"AudioParamMap"},h9:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},lN:{"^":"h;b9:enabled=","%":"AudioTrack"},lO:{"^":"H;j:length=","%":"AudioTrackList"},ha:{"^":"H;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nk:{"^":"ha;j:length=","%":"OfflineAudioContext"},js:{"^":"h+U;"}}],["","",,P,{"^":"",nv:{"^":"h;",
bX:function(a,b){return a.activeTexture(b)},
c_:function(a,b,c){return a.attachShader(b,c)},
c0:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindFramebuffer(b,c)},
c3:function(a,b,c){return a.bindTexture(b,c)},
c4:function(a,b){return a.blendEquation(b)},
c5:function(a,b,c){return a.blendFunc(b,c)},
c6:function(a,b,c,d){return a.bufferData(b,c,d)},
c8:function(a,b){return a.checkFramebufferStatus(b)},
c9:function(a,b){return a.clear(b)},
ca:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cb:function(a,b){return a.compileShader(b)},
cc:function(a){return a.createBuffer()},
cd:function(a){return a.createFramebuffer()},
ce:function(a){return a.createProgram()},
cf:function(a,b){return a.createShader(b)},
cg:function(a){return a.createTexture()},
cj:function(a,b){return a.depthMask(b)},
ck:function(a,b){return a.disable(b)},
cl:function(a,b,c,d){return a.drawArrays(b,c,d)},
cm:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cn:function(a,b){return a.enable(b)},
co:function(a,b){return a.enableVertexAttribArray(b)},
cr:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL:function(a){return P.Y(a.getContextAttributes())},
bk:function(a){return a.getError()},
bl:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
bn:function(a,b){return a.getShaderInfoLog(b)},
bo:function(a,b,c){return a.getShaderParameter(b,c)},
bp:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cD:function(a,b,c,d){return a.texParameterf(b,c,d)},
cE:function(a,b,c,d){return a.texParameteri(b,c,d)},
cJ:function(a,b,c){return a.uniform1f(b,c)},
cK:function(a,b,c){return a.uniform1fv(b,c)},
cL:function(a,b,c){return a.uniform1i(b,c)},
cM:function(a,b,c){return a.uniform1iv(b,c)},
cN:function(a,b,c){return a.uniform2fv(b,c)},
cO:function(a,b,c){return a.uniform3fv(b,c)},
cP:function(a,b,c){return a.uniform4fv(b,c)},
cQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
cU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cW:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},nw:{"^":"h;",
e9:function(a,b){return a.beginTransformFeedback(b)},
ec:function(a,b){return a.bindVertexArray(b)},
el:function(a){return a.createVertexArray()},
en:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eo:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ep:function(a){return a.endTransformFeedback()},
eL:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eQ:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eT:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bX:function(a,b){return a.activeTexture(b)},
c_:function(a,b,c){return a.attachShader(b,c)},
c0:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindFramebuffer(b,c)},
c3:function(a,b,c){return a.bindTexture(b,c)},
c4:function(a,b){return a.blendEquation(b)},
c5:function(a,b,c){return a.blendFunc(b,c)},
c6:function(a,b,c,d){return a.bufferData(b,c,d)},
c8:function(a,b){return a.checkFramebufferStatus(b)},
c9:function(a,b){return a.clear(b)},
ca:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cb:function(a,b){return a.compileShader(b)},
cc:function(a){return a.createBuffer()},
cd:function(a){return a.createFramebuffer()},
ce:function(a){return a.createProgram()},
cf:function(a,b){return a.createShader(b)},
cg:function(a){return a.createTexture()},
cj:function(a,b){return a.depthMask(b)},
ck:function(a,b){return a.disable(b)},
cl:function(a,b,c,d){return a.drawArrays(b,c,d)},
cm:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cn:function(a,b){return a.enable(b)},
co:function(a,b){return a.enableVertexAttribArray(b)},
cr:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL:function(a){return P.Y(a.getContextAttributes())},
bk:function(a){return a.getError()},
bl:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
bn:function(a,b){return a.getShaderInfoLog(b)},
bo:function(a,b,c){return a.getShaderParameter(b,c)},
bp:function(a,b,c){return a.getUniformLocation(b,c)},
cv:function(a,b){return a.linkProgram(b)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cD:function(a,b,c,d){return a.texParameterf(b,c,d)},
cE:function(a,b,c,d){return a.texParameteri(b,c,d)},
cJ:function(a,b,c){return a.uniform1f(b,c)},
cK:function(a,b,c){return a.uniform1fv(b,c)},
cL:function(a,b,c){return a.uniform1i(b,c)},
cM:function(a,b,c){return a.uniform1iv(b,c)},
cN:function(a,b,c){return a.uniform2fv(b,c)},
cO:function(a,b,c){return a.uniform3fv(b,c)},
cP:function(a,b,c){return a.uniform4fv(b,c)},
cQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
cU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cW:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nG:{"^":"kn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.Y(a.item(b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.bK]},
$asl:function(){return[P.bK]},
$isi:1,
$asi:function(){return[P.bK]},
$asm:function(){return[P.bK]},
"%":"SQLResultSetRowList"},km:{"^":"h+l;"},kn:{"^":"km+m;"}}],["","",,G,{"^":"",
jl:function(a){var z,y,x,w
z=H.D(a.split("\n"),[P.o])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.b.an(z,"\n")},
eu:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.cf(a,b)
z.bt(a,y,c)
z.cb(a,y)
x=z.bo(a,y,35713)
if(x!=null&&J.N(x,!1)){w=z.bn(a,y)
P.Z("E:Compilation failed:")
P.Z("E:"+G.jl(c))
P.Z("E:Failure:")
P.Z(C.h.l("E:",w))
throw H.c(w)}return y},
ip:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.p(b)
d.ae(0,a)
e.p(c)
e.ae(0,a)
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
r=Math.sqrt(e.gao())
if(r===0)return!1
e.V(0,-1/r)
return!0},
bd:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.c5(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.c6(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.d3(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
hG:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.c5(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.c6(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hH:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.c5(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.c6(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.d3(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.fK(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hF:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.b8(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.b8(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.b8(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.b8(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
jS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ah(z,z.r,null,null,[H.x(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.K]],v=[P.ak],u=[T.ab],t=[T.d],s=[T.n];y.u();){r=y.d
if(!x.aE(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eZ>0)H.by("I: "+q)
continue}p=z.h(0,r)
switch($.$get$a5().h(0,r).a){case"vec2":b.af(r,G.hG(H.bz(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.af(r,G.bd(H.bz(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.af(r,G.hH(H.bz(p,"$isi",u,"$asi"),null),4)
break
case"float":b.af(r,new Float32Array(H.bS(H.bz(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.af(r,G.hF(H.bz(p,"$isi",w,"$asi"),null),4)
break}}},
bh:function(a,b,c){var z=G.dR(a,b.d,4,b.e.x)
z.ag(G.bd(c.d,null))
z.bx(c.di())
G.jS(c,z)
return z},
ay:{"^":"e;b9:c>"},
aZ:{"^":"ay;d,a,b,c",
ah:function(a,b){this.d.i(0,a,b)},
aS:function(){return this.d},
k:function(a){var z,y,x,w
z=H.D(["{"+H.b(new H.eo(H.le(this),null))+"}["+this.a+"]"],[P.o])
for(y=this.d,x=new H.ah(y,y.r,null,null,[H.x(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.b.an(z,"\n")}},
hc:{"^":"e0;"},
hf:{"^":"e;a,b",
cp:function(a,b,c){J.fD(this.a,b)
if(c>0)J.h4(this.a,b,c)},
cV:function(a,b,c,d,e,f,g,h){J.c0(this.a,34962,b)
J.h5(this.a,c,d,e,!1,g,h)}},
dD:{"^":"e;a,b,c,d,e",
dh:function(a,b,c,d,e){var z,y,x
z=this.a
y=J.fu(z.a)
this.b=y
J.c1(z.a,36160,y)
y=this.c
if(y!=null){y=y.b
J.cY(z.a,36160,36064,3553,y,0)}y=this.d
if(y!=null){y=y.b
J.cY(z.a,36160,36096,3553,y,0)}x=J.fq(z.a,36160)
if(x!==36053)throw H.c("Error Incomplete Framebuffer: "+H.b(x))
J.c1(z.a,36160,null)},
q:{
hJ:function(a,b,c,d,e){var z=new G.dD(a,null,b,c,d)
z.dh(a,b,c,d,!1)
return z}}},
ao:{"^":"e;Z:a>,W:b>,a2:c>",q:{
I:function(a,b,c){return new G.ao(a,b,c)}}},
bG:{"^":"e;Z:a>,W:b>,a2:c>,d"},
bg:{"^":"e;a,b,c,d,e",
Y:function(a){switch($.$get$a5().h(0,a).a){case"vec2":this.e.i(0,a,H.D([],[T.n]))
break
case"vec3":this.e.i(0,a,H.D([],[T.d]))
break
case"vec4":this.e.i(0,a,H.D([],[T.ab]))
break
case"float":this.e.i(0,a,H.D([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.D([],[[P.i,P.K]]))
break}},
dc:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.bG(z,z+1,z+2,z+3))},
ag:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.y)(a),++x)y.push(a[x].R(0))},
dd:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.ao(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.bB(a[x]))},
au:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(b[x].R(0))},
av:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(J.bB(b[x]))},
de:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.bG(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].R(0))},
di:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.D(x,[P.K])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.a(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.a(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.a(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.a(w,u)
w[u]=x
r=u+1
if(r>=v)return H.a(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.a(w,r)
w[r]=p
r=u+3
if(r>=v)return H.a(w,r)
w[r]=x
x=u+4
if(x>=v)return H.a(w,x)
w[x]=p
p=u+5
if(p>=v)return H.a(w,p)
w[p]=q.d
u+=6}return w},
dk:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.n(t))}},
dj:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.bG(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ah(y,y.r,null,null,[H.x(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$a5().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.an(z," ")}},
co:{"^":"ay;"},
bk:{"^":"co;x,y,z,Q,d,a,b,c",
aQ:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.a(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+8
w=this.y.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+9
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+10
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+12
z=this.z.a
y=z[0]
if(w>=x)return H.a(a,w)
a[w]=y
y=b+13
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+14
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+7
if(z>=x)return H.a(a,z)
a[z]=this.Q},
aR:function(){return new T.A(new Float32Array(16))},
k:function(a){return"PL: p:"+H.b(this.x)+"  r:"+this.Q}},
ba:{"^":"co;x,y,z,Q,ch,cx,d,a,b,c",
aQ:function(a,b){var z,y,x,w
z=b+4
y=this.x.a
x=y[0]
w=a.length
if(z>=w)return H.a(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.a(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.a(a,z)
a[z]=y
y=b+8
z=this.y.a
x=z[0]
if(y>=w)return H.a(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.a(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.a(a,y)
a[y]=z
z=b+12
y=this.z.a
x=y[0]
if(z>=w)return H.a(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.a(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.a(a,z)
a[z]=y},
aR:function(){var z,y,x,w,v,u,t
z=this.ch
y=this.Q
x=-y
w=y-x
z.bs()
v=2/w
u=z.a
u[0]=v
u[5]=v
u[10]=-2/w
x=-(y+x)/w
u[12]=x
u[13]=x
u[14]=x
u[15]=1
y=this.x
x=y.a
t=x[0]===0&&x[2]===0?$.$get$cI():$.$get$cH()
x=this.cx
T.cR(x,new T.d(new Float32Array(3)),y,t)
z.aH(0,x)
return z},
k:function(a){return"DL: p:"+H.b(this.x)}},
ar:{"^":"co;x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,a,b,c",
aQ:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.a(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+4
w=this.y.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+5
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+6
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+8
z=this.z.a
y=z[0]
if(w>=x)return H.a(a,w)
a[w]=y
y=b+9
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+10
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+12
w=this.Q.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+13
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+14
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+7
if(w>=x)return H.a(a,w)
a[w]=this.ch
w=b+11
z=Math.cos(H.a6(this.cx))
if(w>=x)return H.a(a,w)
a[w]=z
z=b+15
if(z>=x)return H.a(a,z)
a[z]=this.cy},
aR:function(){var z,y,x,w
z=this.y
y=z.a
x=y[0]===0&&y[2]===0?$.$get$cI():$.$get$cH()
y=this.fr
w=this.x
T.cR(y,w,z.l(0,w),x)
w=this.fx
z=this.cx
if(typeof z!=="number")return H.v(z)
T.fb(w,2.1*z,this.db,this.dx,this.dy)
w.aH(0,y)
return w},
k:function(a){return"SL: p:"+H.b(this.x)+"  d:"+H.b(this.y)+"  r:"+this.ch+"  a:"+H.b(this.cx)}},
hN:{"^":"aZ;x,y,z,d,a,b,c",
aS:function(){var z,y,x
z=this.y
y=this.z
G.hO(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
q:{
hO:function(a,b,c){var z,y,x,w,v
C.r.cq(a,0,a.length,0)
C.r.cq(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.y)(c),++x){w=c[x]
if(J.d_(w)===!0){w.aQ(a,y*16)
v=w.d
if(y>=4)return H.a(b,y)
b[y]=v;++y}}}}},
ec:{"^":"e;a,b,c"},
eb:{"^":"e;a,b,c"},
i7:{"^":"aZ;d,a,b,c",
dm:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$dd())
z.i(0,"cStencilFunc",$.$get$e2())},
q:{
bL:function(a){var z=new G.i7(P.J(),a,!1,!0)
z.dm(a)
return z}}},
i9:{"^":"ay;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
by:function(a,b,c){var z,y
C.h.az(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c0(z.a,34962,y)
J.cU(z.a,34962,b,35048)},
ay:function(a){this.ch=a
this.by("aPosition",a,3)},
bB:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
af:function(a,b,c){var z,y,x,w,v
z=J.cV(a,0)===105
if(z&&this.z===0)this.z=C.c.bw(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c3(x.a))
this.by(a,b,c)
w=$.$get$a5().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bA(x.a,this.e)
x.cp(0,v,z?1:0)
x.cV(0,y.h(0,a),v,w.bC(),5126,!1,0,0)},
ag:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c3(y.a))
this.ay(a)
x=$.$get$a5().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bA(y.a,this.e)
y.cp(0,w,0)
y.cV(0,z.h(0,"aPosition"),w,x.bC(),5126,!1,0,0)},
ax:function(a){var z,y,x
z=this.ch.length
if(z<768){this.cx=new Uint8Array(H.bS(a))
this.Q=5121}else if(z<196608){this.cx=new Uint16Array(H.bS(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bS(a))
this.Q=5125}z=this.d
J.bA(z.a,this.e)
y=this.y
x=this.cx
J.c0(z.a,34963,y)
J.cU(z.a,34963,x,35048)},
bx:function(a){this.y=J.c3(this.d.a)
this.ax(a)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ah(z,z.r,null,null,[H.x(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.an(y,"  ")},
q:{
dR:function(a,b,c,d){return new G.i9(b,J.fx(b.a),c,P.J(),d,null,0,-1,null,null,P.J(),"meshdata:"+a,!1,!0)}}},
it:{"^":"aZ;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
df:function(a,b){var z
if(typeof b!=="number")return H.v(b)
z=a/b
if(this.z===z)return
this.z=z
this.bE()},
bE:function(){T.fb(this.db,this.y*3.141592653589793/180,this.z,this.Q,this.ch)},
aS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.d(new Float32Array(3))
u.t(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
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
x=!!y.$isab
q=x?y.gap(t):1
if(!!y.$isd){p=y.gm(t)
s=y.gn(t)
r=y.gA(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gA(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.v(t)
x=z[4]
if(typeof s!=="number")return H.v(s)
w=z[8]
if(typeof r!=="number")return H.v(r)
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
c.aH(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
hx:{"^":"e;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
iH:{"^":"ay;d,e,f,r,x,y,z,Q,ch,a,b,c",
dr:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.i(0,t,J.d4(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.i(0,t,J.d4(w.a,v,t))}},
dv:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ah(y,y.r,null,null,[H.x(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.aE(0,v))x.push(v)}for(z=this.x,y=new P.cD(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.B(0,v))x.push(v)}return x},
dB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ah(b,b.r,null,null,[H.x(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cV(t,0)){case 117:if(w.aE(0,t)){s=b.h(0,t)
if(v.aE(0,t))H.by("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$a5().h(0,t)
if(r==null)H.a_("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.c7(x.a,q,s)
else if(!!J.q(s).$ishQ)J.h2(x.a,q,s)
break
case"float":if(r.c===0)J.h0(x.a,q,s)
else if(!!J.q(s).$iscf)J.h1(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.G(s,"$isA").a
J.db(x.a,q,!1,p)}else if(!!J.q(s).$iscf)J.db(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.G(s,"$isO").a
J.da(x.a,q,!1,p)}else if(!!J.q(s).$iscf)J.da(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.d9(o,q,H.G(s,"$isab").a)
else J.d9(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.d8(o,q,H.G(s,"$isd").a)
else J.d8(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.d7(o,q,H.G(s,"$isn").a)
else J.d7(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.v(p)
J.cS(x.a,33984+p)
p=H.G(s,"$iscy").b
J.am(x.a,3553,p)
p=this.ch
J.c7(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.v(p)
J.cS(x.a,33984+p)
p=H.G(s,"$iscy").b
J.am(x.a,34067,p)
p=this.ch
J.c7(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.by("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.N(s,!0)
o=x.a
if(p)J.bC(o,2929)
else J.c4(o,2929)
break
case"cStencilFunc":H.G(s,"$isec")
p=s.a
o=x.a
if(p===1281)J.c4(o,2960)
else{J.bC(o,2960)
o=s.b
n=s.c
J.fU(x.a,p,o,n)}break
case"cDepthWrite":J.fy(x.a,s)
break
case"cBlendEquation":H.G(s,"$iseb")
p=s.a
o=x.a
if(p===1281)J.c4(o,3042)
else{J.bC(o,3042)
o=s.b
n=s.c
J.fp(x.a,o,n)
J.fo(x.a,p)}break}++u
break}}m=P.dw(0,0,0,Date.now()-new P.cc(z,!1).a,0,0)
""+u
m.k(0)},
dg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.d
J.h3(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bG()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.y)(b),++w){v=b[w]
this.dB(v.a,v.aS())}x=this.Q
x.al(0)
for(u=a.cy,t=new H.ah(u,u.r,null,null,[H.x(u,0)]),t.c=u.e;t.u();)x.I(0,t.d)
s=this.dv()
if(s.length!==0)P.Z("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(s)))
J.bA(a.d.a,a.e)
r=this.e.f.length>0
x=a.f
u=a.bB()
t=a.Q
q=a.z
if(r)J.fn(y.a,x)
if(t!==-1){p=y.a
if(q>1)J.fC(p,x,u,t,0,q)
else J.fB(p,x,u,t,0)}else{t=y.a
if(q>1)J.fA(t,x,0,u,q)
else J.fz(t,x,0,u)}if(r)J.fE(y.a)
if(c!=null)c.push(new G.hx(this.a,a.z,a.bB(),x,P.dw(0,0,0,Date.now()-new P.cc(z,!1).a,0,0)))},
q:{
bO:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.a3(null,null,null,P.o)
y=c.b
x=d.b
w=c.f
v=J.fv(b.a)
u=G.eu(b.a,35633,y)
J.cT(b.a,v,u)
t=G.eu(b.a,35632,x)
J.cT(b.a,v,t)
if(w.length>0)J.fZ(b.a,v,w,35980)
J.fR(b.a,v)
if(J.fQ(b.a,v,35714)!==!0)H.a_(J.fP(b.a,v))
z=new G.iH(b,c,d,v,P.cq(c.c,null),P.J(),P.J(),z,null,a,!1,!0)
z.dr(a,b,c,d)
return z}}},
B:{"^":"e;a,b,c",
bC:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iN:{"^":"e;a,b,c,d,e,f,r,x",
at:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.y)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.b.aM(y)},
a4:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.y)(a),++x)y.push(a[x])
C.b.aM(y)},
aw:function(a){var z,y,x
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.y)(a),++x)y.push(a[x])
C.b.aM(y)},
bD:function(a,b){this.b=this.dC(!0,a,b)},
a5:function(a){return this.bD(a,null)},
dC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
s=$.$get$a5().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$a5().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$a5().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$a5().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(c!=null)C.b.O(w,c)
w.push("void main(void) {")
C.b.O(w,b)
w.push("}")
return C.b.an(w,"\n")},
q:{
aq:function(a){return new G.iN(a,null,[],[],[],[],0,P.J())}}},
e0:{"^":"ay;",
a9:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
j7:{"^":"e;a,b,c,d,e,f,r",q:{
e8:function(){return new G.j7(!1,!1,!1,!0,1,9729,9729)}}},
cy:{"^":"e;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ja:{"^":"cy;f,r,x,a,b,c,d,e",
du:function(a,b,c,d,e,f){var z,y,x,w
z=this.d
y=this.c
J.am(z.a,y,this.b)
J.fX(z.a,3553,1,this.x,this.f,this.r)
x=this.e
w=x.e
if(w!==1)J.fW(z.a,y,34046,w)
w=x.r
J.a1(z.a,y,10240,w)
w=x.f
J.a1(z.a,y,10241,w)
if(x.b){J.a1(z.a,y,10242,33071)
J.a1(z.a,y,10243,33071)}if(x.c)J.a1(z.a,y,34892,34894)
J.fO(z.a)
J.am(z.a,y,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"},
q:{
ep:function(a,b,c,d,e,f){var z=new G.ja(c,d,e,b,J.fw(a.a),3553,a,f)
z.du(a,b,c,d,e,f)
return z}}}}],["","",,R,{"^":"",
e_:function(a,b,c,d,e,f,g,h){return G.bh("cube",a,B.hn(!0,b,c,d,e,f,g,h))},
je:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.o.er(y/c)
w=-x
v=d.P(y).P(1/z[1])
u=[]
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.d(z)
z[0]=t
z[1]=0
z[2]=s
r.I(0,v)
u.push(r)
z=new Float32Array(3)
r=new T.d(z)
z[0]=t
z[1]=0
z[2]=s
r.ae(0,v)
u.push(r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
u.push(new T.d(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
u.push(new T.d(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
u.push(new T.d(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
u.push(new T.d(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
u.push(new T.d(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
u.push(new T.d(o))}}a.ay(G.bd(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.D(z,[P.K])
for(z=u.length,r=n.length,q=0;q<z;++q){if(q>=r)return H.a(n,q)
n[q]=q}a.ax(n)},
hL:function(a){var z,y,x
z=a.a
y=z[0]
if(y!==0){x=z[1]
if(x!==0){z=new T.d(new Float32Array(3))
z.t(-x,y,0)
return z}z=z[2]
if(z!==0){x=new T.d(new Float32Array(3))
x.t(-z,0,y)
return x}z=new T.d(new Float32Array(3))
z.t(0,1,1)
return z}else{y=z[1]
if(y===0){z=new T.d(new Float32Array(3))
z.t(1,1,0)
return z}z=z[2]
if(z===0){z=new T.d(new Float32Array(3))
z.t(1,0,1)
return z}x=new T.d(new Float32Array(3))
x.t(0,-z,y)
return x}},
jg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.d(new Float32Array(3))
z.p(c)
z.D(0)
y=b.l(0,z.P(d))
x=[b,y]
w=R.hL(c)
w.D(0)
w.V(0,Math.tan(H.a6(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.d(z)
u.p(w)
t=new Float32Array(4)
new T.bl(t).d_(c,v*2*3.141592653589793/8)
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
u.I(0,y)
x.push(u)}f=[]
for(v=1;v<x.length;++v){f.push(0)
f.push(v)}for(v=3;z=x.length,v<z;++v){f.push(v-1)
f.push(v)}f.push(z-1)
f.push(2)
for(v=2;v<x.length;++v)if(v%2===0){f.push(1)
f.push(v)}a.ay(G.bd(x,null))
a.ax(f)},
jf:function(a,b,c){var z,y,x,w,v,u,t
z=[]
y=[]
for(x=$.$get$cg(),w=0;w<12;++w){v=x[w]
y.push(z.length)
y.push(12)
u=v.ar(0,c)
b.toString
t=new T.d(new Float32Array(3))
t.p(b)
t.I(0,u)
z.push(t)}z.push(b)
a.ay(G.bd(z,null))
a.ax(y)},
iV:{"^":"e;",
ds:function(a,b,c){var z,y,x
if(a==null)throw H.c("no element provided")
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
x=this.dG(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dG:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.jC("span",null)
y=J.d0(v)
J.f(y).sL(y,"1px")
C.n.sK(y,""+d+"px")
C.n.seq(y,"left")
x=C.n.bI(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
iW:{"^":"iV;e,f,a,b,c,d",
dz:function(a,b){var z,y,x,w,v;++this.e
if(J.b7(J.fk(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eP(z,2)+" fps"
y=this.c;(y&&C.v).br(y,b)
x=C.c.a6(30*C.o.ee(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.d0(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dw:function(a){return this.dz(a,"")}},
iO:{"^":"e;a,b,c,d,e,f,r,x,y"}}],["","",,A,{"^":"",
eX:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.d_(b)!==!0)return
z=b.dA(c)
y=b.ch
if(y!=null&&!0){b.k(0)
x=C.b.geC(e)
w=b.db
v=b.dx
u=new Float32Array(9)
t=v.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[4]
u[4]=t[5]
u[5]=t[6]
u[6]=t[8]
u[7]=t[9]
u[8]=t[10]
w.ej(new T.O(u))
u=w.a
s=u[3]
u[3]=u[1]
u[1]=s
s=u[6]
u[6]=u[2]
u[2]=s
s=u[7]
u[7]=u[5]
u[5]=s
u=b.d
x=x.d
x.i(0,"uTransformationMatrix",u)
x.i(0,"uModelMatrix",v)
x.i(0,"uNormalMatrix",w)
e.push(y)
a.dg(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.y)(y),++r)A.eX(a,y[r],z,d,e)},
az:{"^":"e0;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dA:function(a){var z=this.dx
z.p(a)
z.aH(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
bm:{"^":"ay;d,e,cz:f>,a,b,c"},
iG:{"^":"ay;d,e,f,r,x,y,z,Q,a,b,c",
dq:function(a,b,c){if(this.d==null)this.d=new G.dD(this.e,null,null,null,null)},
seg:function(a){this.r&=4294950911},
bA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=z.a
z=z.b
J.c1(t.a,36160,z)
J.h6(t.a,x,w,v,u)
if(y!==0)J.fr(t.a,y)
for(z=this.f,y=z.length,s=0;s<z.length;z.length===y||(0,H.y)(z),++s){r=z[s]
if(!r.c)continue
x=r.d
if(!x.c)continue
q=r.e
q.push(new G.aZ(P.J(),"transforms",!1,!0))
p=new T.A(new Float32Array(16))
p.G()
for(w=r.f,v=w.length,o=0;o<w.length;w.length===v||(0,H.y)(w),++o)A.eX(x,w[o],p,a,q)
if(0>=q.length)return H.a(q,-1)
q.pop()}},
bz:function(){return this.bA(null)},
q:{
cu:function(a,b,c){var z=new A.iG(c,b,H.D([],[A.bm]),17664,0,0,0,0,a,!1,!0)
z.dq(a,b,c)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
hn:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.d(new Float32Array(3))
x.t(z,y,d2)
w=new T.d(new Float32Array(3))
w.t(d0,y,d2)
v=new T.d(new Float32Array(3))
v.t(d0,d1,d2)
u=new T.d(new Float32Array(3))
u.t(z,d1,d2)
t=-d2
s=new T.d(new Float32Array(3))
s.t(z,y,t)
r=new T.d(new Float32Array(3))
r.t(z,d1,t)
q=new T.d(new Float32Array(3))
q.t(d0,d1,t)
p=new T.d(new Float32Array(3))
p.t(d0,y,t)
o=new T.d(new Float32Array(3))
o.t(z,d1,t)
n=new T.d(new Float32Array(3))
n.t(z,d1,d2)
m=new T.d(new Float32Array(3))
m.t(d0,d1,d2)
l=new T.d(new Float32Array(3))
l.t(d0,d1,t)
k=new T.d(new Float32Array(3))
k.t(d0,y,d2)
j=new T.d(new Float32Array(3))
j.t(z,y,d2)
i=new T.d(new Float32Array(3))
i.t(z,y,t)
h=new T.d(new Float32Array(3))
h.t(d0,y,t)
g=new T.d(new Float32Array(3))
g.t(d0,y,t)
f=new T.d(new Float32Array(3))
f.t(d0,d1,t)
e=new T.d(new Float32Array(3))
e.t(d0,d1,d2)
d=new T.d(new Float32Array(3))
d.t(d0,y,d2)
c=new T.d(new Float32Array(3))
c.t(z,y,t)
b=new T.d(new Float32Array(3))
b.t(z,y,d2)
y=new T.d(new Float32Array(3))
y.t(z,d1,d2)
a=new T.d(new Float32Array(3))
a.t(z,d1,t)
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
c2=new G.bg(!1,[],[],[],P.J())
c2.Y("aTexUV")
c2.Y("aNormal")
c2.dc(6)
c2.ag([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.au("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$ev(),c3<6;++c3){c4=z[c3]
c2.av("aNormal",[c4,c4,c4,c4])}return c2},
hp:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c/2
y=[]
x=[]
w=[]
v=new T.d(new Float32Array(3))
v.t(0,z,0)
y.push(v)
v=new T.n(new Float32Array(2))
v.v(0,0)
x.push(v)
v=new T.d(new Float32Array(3))
v.t(0,1,0)
w.push(v)
v=-z
u=new T.d(new Float32Array(3))
u.t(0,v,0)
y.push(u)
u=new T.n(new Float32Array(2))
u.v(1,1)
x.push(u)
u=new T.d(new Float32Array(3))
u.t(0,-1,0)
w.push(u)
for(t=0;t<d;++t){s=t/d
u=s*3.141592653589793*2
r=Math.sin(u)
q=Math.cos(u)
u=new Float32Array(3)
u[0]=r*a
u[1]=z
u[2]=q*a
y.push(new T.d(u))
u=new Float32Array(2)
u[0]=s
u[1]=1
x.push(new T.n(u))
u=new Float32Array(3)
u[0]=0
u[1]=1
u[2]=0
w.push(new T.d(u))
u=new Float32Array(3)
u[0]=r*b
u[1]=v
u[2]=q*b
y.push(new T.d(u))
u=new Float32Array(2)
u[0]=s
u[1]=0
x.push(new T.n(u))
u=new Float32Array(3)
u[0]=0
u[1]=-1
u[2]=0
w.push(new T.d(u))}for(v=2*d,t=0;t<v;t=p){p=t+2
if(p>=y.length)return H.a(y,p)
y.push(y[p])
u=t+3
if(u>=y.length)return H.a(y,u)
y.push(y[u])
if(p>=x.length)return H.a(x,p)
x.push(x[p])
if(u>=x.length)return H.a(x,u)
x.push(x[u])
o=y.length
if(p>=o)return H.a(y,p)
n=y[p]
if(u>=o)return H.a(y,u)
m=y[u]
u=t+4
if(u>=o)return H.a(y,u)
l=y[u]
u=new Float32Array(3)
k=new T.d(new Float32Array(3))
G.ip(n,m,l,new T.d(u),k)
w.push(k)
w.push(k)}v=[]
u=[]
j=new G.bg(!1,v,u,[],P.J())
j.Y("aTexUV")
j.ag(y)
j.au("aTexUV",x)
j.Y("aNormal")
j.av("aNormal",w)
for(i=d*2,t=0;t<d;t=g){h=t*2+2
m=h+1
g=t+1
f=(g===d?0:g)*2+2
e=f+1
v.push(new G.ao(0,h,f))
v.push(new G.ao(1,e,m))
u.push(new G.bG(i+f,i+h,i+m,i+e))}return j},
hM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.O(z,$.$get$dF())
C.b.O(y,$.$get$cg())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.y)(z),++u){t=z[u]
s=J.f(t)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
q=new T.d(new Float32Array(3))
q.p(r)
r=s.gW(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
q.I(0,y[r])
q.V(0,0.5)
q.D(0)
r=s.gW(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
p=new T.d(new Float32Array(3))
p.p(r)
r=s.ga2(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
p.I(0,y[r])
p.V(0,0.5)
p.D(0)
r=s.ga2(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
o=new T.d(new Float32Array(3))
o.p(r)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
o.I(0,y[r])
o.V(0,0.5)
o.D(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.ao(s.gZ(t),n,l))
w.push(new G.ao(s.gW(t),m,n))
w.push(new G.ao(s.ga2(t),l,m))
w.push(new G.ao(n,m,l))}}k=new G.bg(!1,[],[],[],P.J())
k.Y("aTexUV")
k.Y("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.y)(z),++u){t=z[u]
s=J.f(t)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
j=y[r]
r=s.gW(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
i=y[r]
s=s.ga2(t)
if(s>>>0!==s||s>=y.length)return H.a(y,s)
h=y[s]
s=J.f(j)
r=s.gA(j)
g=s.gm(j)
g=Math.atan2(H.a6(r),H.a6(g))
s=Math.acos(H.a6(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.f(i)
g=s.gA(i)
f=s.gm(i)
f=Math.atan2(H.a6(g),H.a6(f))
s=Math.acos(H.a6(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.f(h)
f=s.gA(h)
e=s.gm(h)
e=Math.atan2(H.a6(f),H.a6(e))
s=Math.acos(H.a6(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.av("aNormal",[j,i,h])
k.dd([j.P(b),i.P(b),h.P(b)])
k.au("aTexUV",[new T.n(r),new T.n(g),new T.n(f)])}return k},
iD:function(a){var z,y,x,w,v,u,t,s,r,q
z=-1*a
y=new T.d(new Float32Array(3))
y.t(z,z,0)
x=new T.d(new Float32Array(3))
x.t(a,z,0)
w=new T.d(new Float32Array(3))
w.t(a,a,0)
v=new T.d(new Float32Array(3))
v.t(z,a,0)
z=new T.n(new Float32Array(2))
z.v(0,0)
u=new T.n(new Float32Array(2))
u.v(1,0)
t=new T.n(new Float32Array(2))
t.v(1,1)
s=new T.n(new Float32Array(2))
s.v(0,1)
r=new T.d(new Float32Array(3))
r.t(0,0,1)
q=new G.bg(!1,[],[],[],P.J())
q.Y("aTexUV")
q.de([y,x,w,v])
q.au("aTexUV",[z,u,t,s])
q.Y("aNormal")
q.av("aNormal",[r,r,r,r])
return q},
iP:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p
z=h+1
y=g+1
x=B.j8(B.is(new B.iQ(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.bg(!1,[],[],w,P.J())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.y)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.bB(s[r]))}v.dj(z,y,!1)
v.dk(z,y)
v.Y("aNormal")
for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.y)(x),++t){s=x[t]
for(r=0;q=s.length,r<q;r+=2){p=r+1
if(p>=q)return H.a(s,p)
p=s[p]
u.h(0,"aNormal").push(J.bB(p))}}return v},
j8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.d(y)
w=new Float32Array(3)
v=new T.d(w)
u=new Float32Array(3)
t=new T.d(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.a(a,o)
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
u[2]=k*j}v.D(0)
t.D(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.p(p)
x.aD(v,g)
x.aD(t,f)
q=new T.d(new Float32Array(3))
q.p(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.aD(v,g)
x.aD(t,f)
x.D(0)
q=new T.d(new Float32Array(3))
q.p(x)
m.push(q)}}return z},
is:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.d(new Float32Array(3))
x=new T.d(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ae(0,y)
t=new T.d(new Float32Array(3))
t.p(y)
z.push(t)
t=new T.d(new Float32Array(3))
t.p(x)
z.push(t)}return z},
iQ:{"^":"j:19;a,b,c,d",
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
b.sA(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",i_:{"^":"e;a,b,c",
dl:function(a){var z
a=document
z=W.bI
W.a4(a,"keydown",new D.i1(this),!1,z)
W.a4(a,"keyup",new D.i2(this),!1,z)},
q:{
i0:function(a){var z=P.K
z=new D.i_(P.a3(null,null,null,z),P.a3(null,null,null,z),P.a3(null,null,null,z))
z.dl(a)
return z}}},i1:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.I(0,J.d2(a))
z.b.I(0,a.which)}},i2:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.cB(0,J.d2(a))
z.c.I(0,a.which)}},ic:{"^":"e;a,b,c,d,e,f,r,x",
dn:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gaI(a)
W.a4(y.a,y.b,new D.ie(this),!1,H.x(y,0))
y=z.gbd(a)
W.a4(y.a,y.b,new D.ig(this),!1,H.x(y,0))
y=z.gbe(a)
W.a4(y.a,y.b,new D.ih(this),!1,H.x(y,0))
z=z.gbf(a)
W.a4(z.a,z.b,new D.ii(this),!1,H.x(z,0))},
q:{
id:function(a){var z=P.K
z=new D.ic(P.a3(null,null,null,z),P.a3(null,null,null,z),P.a3(null,null,null,z),0,0,0,0,0)
z.dn(a)
return z}}},ie:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.aK(a)
y=this.a
y.r=z.gcA(a).a
y.x=z.gcA(a).b
y.d=z.geE(a).a
y.e=a.movementY}},ig:{"^":"j:5;a",
$1:function(a){var z=J.f(a)
z.aK(a)
P.Z("BUTTON "+H.b(z.gc7(a)))
z=this.a
z.a.I(0,a.button)
z.b.I(0,a.button)}},ih:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.aK(a)
y=this.a
y.a.cB(0,z.gc7(a))
y.c.I(0,a.button)}},ii:{"^":"j:20;a",
$1:function(a){var z=J.f(a)
z.aK(a)
this.a.f=z.gem(a)}},ir:{"^":"hc;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bx:function(a){var z,y
z=C.r.es(a,0,new A.lg())
if(typeof z!=="number")return H.v(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lg:{"^":"j:21;",
$2:function(a,b){var z,y
z=J.aI(a,J.af(b))
if(typeof z!=="number")return H.v(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",
cR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=b.H(0,c)
z.D(0)
y=d.ci(z)
y.D(0)
x=z.ci(y)
x.D(0)
w=y.b8(b)
v=x.b8(b)
u=z.b8(b)
t=y.a
s=t[0]
r=x.a
q=r[0]
p=z.a
o=p[0]
n=t[1]
m=r[1]
l=p[1]
t=t[2]
r=r[2]
p=p[2]
k=a.a
k[15]=1
k[14]=-u
k[13]=-v
k[12]=-w
k[11]=0
k[10]=p
k[9]=r
k[8]=t
k[7]=0
k[6]=l
k[5]=m
k[4]=n
k[3]=0
k[2]=o
k[1]=q
k[0]=s},
fb:function(a,b,c,d,e){var z,y,x
z=Math.tan(b*0.5)
y=d-e
a.bs()
x=a.a
x[0]=1/(z*c)
x[5]=1/z
x[10]=(e+d)/y
x[11]=-1
x[14]=2*d*e/y},
O:{"^":"e;bL:a<",
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
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.a(z,b)
return z[b]},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gF:function(a){return A.bx(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.a(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.a(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.a(y,x)
z[2]=y[x]
return new T.d(z)},
R:function(a){var z=new T.O(new Float32Array(9))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.O(z)
y.p(this)
x=b.gbL()
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
H:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.O(z)
y.p(this)
x=b.gbL()
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
ej:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
P:function(a){var z,y
z=new Float32Array(9)
y=new T.O(z)
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
return y}},
A:{"^":"e;bM:a<",
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
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n[3] "+this.a1(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.a(z,b)
return z[b]},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gF:function(a){return A.bx(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.a(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.a(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.a(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.a(y,x)
z[3]=y[x]
return new T.ab(z)},
R:function(a){var z=new T.A(new Float32Array(16))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.A(z)
y.p(this)
x=b.gbM()
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
H:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.A(z)
y.p(this)
x=b.gbM()
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
cZ:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.A(z)
y.p(this)
if(typeof a==="number"){x=a
w=x
v=w}else{v=null
w=null
x=null}u=z[0]
if(typeof v!=="number")return H.v(v)
z[0]=u*v
z[1]=z[1]*v
z[2]=z[2]*v
z[3]=z[3]*v
u=z[4]
if(typeof w!=="number")return H.v(w)
z[4]=u*w
z[5]=z[5]*w
z[6]=z[6]*w
z[7]=z[7]*w
u=z[8]
if(typeof x!=="number")return H.v(x)
z[8]=u*x
z[9]=z[9]*x
z[10]=z[10]*x
z[11]=z[11]*x
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
P:function(a){return this.cZ(a,null,null)},
bs:function(){var z=this.a
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
z[15]=m*e+l*a+k*a3+j*a7},
q:{
bM:function(){return new T.A(new Float32Array(16))}}},
bl:{"^":"e;bP:a<",
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
gap:function(a){return this.a[3]},
R:function(a){var z=new T.bl(new Float32Array(4))
z.p(this)
return z},
p:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
d_:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gao())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gj:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
P:function(a){var z,y
z=new Float32Array(4)
y=new T.bl(z)
y.p(this)
z[3]=z[3]*a
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.bl(z)
y.p(this)
x=b.gbP()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.bl(z)
y.p(this)
x=b.gbP()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
return z[b]},
k:function(a){var z=this.a
return H.b(z[0])+", "+H.b(z[1])+", "+H.b(z[2])+" @ "+H.b(z[3])}},
n:{"^":"e;bV:a<",
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
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.n){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gF:function(a){return A.bx(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.n(z)
y.p(this)
x=b.gbV()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.n(z)
y.p(this)
x=b.gbV()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.a(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
V:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
P:function(a){var z=new T.n(new Float32Array(2))
z.p(this)
z.V(0,a)
return z},
R:function(a){var z=new T.n(new Float32Array(2))
z.p(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},
d:{"^":"e;b6:a<",
t:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
p:function(a){var z,y
z=a.gb6()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.d){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gF:function(a){return A.bx(this.a)},
H:function(a,b){var z=new T.d(new Float32Array(3))
z.p(this)
z.ae(0,b)
return z},
l:function(a,b){var z=new T.d(new Float32Array(3))
z.p(this)
z.I(0,b)
return z},
ar:function(a,b){return this.P(b)},
h:function(a,b){var z=this.a
if(b>=3)return H.a(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gao())},
gao:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
D:function(a){var z,y,x
z=Math.sqrt(this.gao())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
b8:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
ci:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.d(new Float32Array(3))
z.t(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
I:function(a,b){var z,y
z=b.gb6()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
aD:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ae:function(a,b){var z,y
z=b.gb6()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
V:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
P:function(a){var z=new T.d(new Float32Array(3))
z.p(this)
z.V(0,a)
return z},
R:function(a){var z=new T.d(new Float32Array(3))
z.p(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sA:function(a,b){this.a[2]=b
return b},
gW:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
q:{
w:function(a,b,c){var z=new T.d(new Float32Array(3))
z.t(a,b,c)
return z}}},
ab:{"^":"e;bW:a<",
p:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ab){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gF:function(a){return A.bx(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ab(z)
y.p(this)
x=b.gbW()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ab(z)
y.p(this)
x=b.gbW()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
V:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
P:function(a){var z=new T.ab(new Float32Array(4))
z.p(this)
z.V(0,a)
return z},
R:function(a){var z=new T.ab(new Float32Array(4))
z.p(this)
return z},
gW:function(a){return this.a[2]},
gZ:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
gap:function(a){return this.a[3]}}}],["","",,L,{"^":"",
hE:function(a){var z,y,x
P.Z(H.b(a)+" toggle ")
z=$.$get$ae()
$.bW=z.h(0,a)
z.h(0,a).c=!0
for(y=new H.ah(z,z.r,null,null,[H.x(z,0)]),y.c=z.e;y.u();){x=y.d
if(!J.N(x,a))$.$get$ae().h(0,x).c=!1}},
nK:[function(a){J.fV(a)},"$1","lB",4,0,10],
f5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z={}
y=document
x=new R.iW(0,0,null,null,null,null)
x.ds(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.hf(null,w)
u=J.fM(w,"webgl2",P.cp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.a_(P.dB('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.fN(u))
if($.eZ>0)P.Z("I: "+t)
J.fs(u,0,0,0,1)
J.bC(u,2929)
u=new Float32Array(3)
t=D.i0(null)
s=D.id(w)
r=new T.A(new Float32Array(16))
r.G()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.ir(25,10,0,0,new T.d(u),-0.02,t,s,r,new T.d(q),new T.d(p),new T.d(o),new T.d(new Float32Array(3)),"camera:orbit",!1,!0)
w.width=w.clientWidth
w.height=w.clientHeight
u=$.ls
t=$.lr
s=new T.A(new Float32Array(16))
s.G()
r=new T.A(new Float32Array(16))
r.G()
m=new G.it(n,50,1,u,t,s,r,new T.A(new Float32Array(16)),P.J(),"perspective",!1,!0)
m.bE()
u=[]
t=new Float32Array(64)
l=new G.hN(u,t,new Float32Array(4),P.J(),"illumination",!1,!0)
for(t=$.$get$ae(),t=t.geS(t),t=new H.dQ(null,J.av(t.a),t.b,[H.x(t,0),H.x(t,1)]);t.u();)u.push(t.a)
u=P.J()
t=new G.aZ(u,"uniforms",!1,!0)
k=new R.iO(v,null,null,null,null,null,t,null,null)
s=new T.n(new Float32Array(2))
s.v(512,512)
k.y=s
j=G.ep(v,"frame::color",512,512,32856,$.$get$e9())
r=G.ep(v,"frame::depth",512,512,33190,$.$get$ea())
k.b=r
q=G.hJ(v,j,r,null,!1)
k.d=q
q=A.cu("compute-shadow",v,q)
q.z=512
q.Q=512
k.c=q
u.i(0,"uTexture",r)
u.i(0,"uCutOff",0)
u.i(0,"uCameraNear",0.5)
u.i(0,"uCameraFar",20)
u=G.bO("shadowCompute",v,$.$get$fd(),$.$get$fc())
u=new A.bm(u,[t],[],"shadowCompute",!1,!0)
k.e=u
q.f.push(u)
u=A.cu("visualize-shadow",v,null)
u.seg(!1)
k.f=u
q=G.bO("shadowVisualize",v,$.$get$fj(),$.$get$fi())
p=[]
t=new A.bm(q,[t],p,"shadowVisualize",!1,!0)
k.x=t
i=G.bh("quad",q,B.iD(1))
q=$.$get$dA()
o=new Float32Array(9)
h=new T.A(new Float32Array(16))
h.G()
g=new T.A(new Float32Array(16))
g.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
p.push(new A.az(q,i,[],new T.O(o),h,g,new T.d(f),new T.d(e),new T.d(d),new T.d(new Float32Array(3)),"unit-mesh",!1,!0))
u.f.push(t)
u=P.J()
c=new G.aZ(u,"plain",!1,!0)
u.i(0,"uShadowMap",r)
u.i(0,"uCanvasSize",s)
u.i(0,"uShadowBias",0.03)
b=A.cu("main",v,null)
u=G.bO("solid",v,$.$get$f4(),$.$get$f2())
s=[]
t=b.f
t.push(new A.bm(u,[m,l,c],s,"solid",!1,!0))
r=G.bO("solid",v,$.$get$ff(),$.$get$fe())
a=new A.bm(r,[m,l],[],"solid",!1,!0)
t.push(a)
t=G.bh("icosahedron-3",u,B.hM(3,1,!0))
r=$.$get$f7()
q=new Float32Array(9)
p=new T.A(new Float32Array(16))
p.G()
o=new T.A(new Float32Array(16))
o.G()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
t=new A.az(r,t,[],new T.O(q),p,o,new T.d(h),new T.d(g),new T.d(f),new T.d(new Float32Array(3)),"sphere",!1,!0)
t.a9(0,0,0)
s.push(t)
t=R.e_(u,1,0,1,0,1,1,1)
q=new Float32Array(9)
p=new T.A(new Float32Array(16))
p.G()
o=new T.A(new Float32Array(16))
o.G()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
t=new A.az(r,t,[],new T.O(q),p,o,new T.d(h),new T.d(g),new T.d(f),new T.d(new Float32Array(3)),"cube",!1,!0)
t.a9(-5,0,-5)
s.push(t)
t=G.bh("cylinder-32",u,B.hp(3,6,2,32,!0))
q=new Float32Array(9)
p=new T.A(new Float32Array(16))
p.G()
o=new T.A(new Float32Array(16))
o.G()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
t=new A.az(r,t,[],new T.O(q),p,o,new T.d(h),new T.d(g),new T.d(f),new T.d(new Float32Array(3)),"cylinder",!1,!0)
t.a9(5,0,-5)
s.push(t)
t=G.bh("torusknot",u,B.iP(!0,!0,1,2,3,1,128,16,0.4,!1))
q=new Float32Array(9)
p=new T.A(new Float32Array(16))
p.G()
o=new T.A(new Float32Array(16))
o.G()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
t=new A.az(r,t,[],new T.O(q),p,o,new T.d(h),new T.d(g),new T.d(f),new T.d(new Float32Array(3)),"torusknot",!1,!0)
t.a9(5,0,5)
s.push(t)
u=R.e_(u,1,0,1,0,30,0.1,30)
t=$.$get$f6()
r=new Float32Array(9)
q=new T.A(new Float32Array(16))
q.G()
p=new T.A(new Float32Array(16))
p.G()
o=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
u=new A.az(t,u,[],new T.O(r),q,p,new T.d(o),new T.d(h),new T.d(g),new T.d(new Float32Array(3)),"plane",!1,!0)
u.a9(0,-10,0)
s.push(u)
for(u=s.length,a0=0;a0<s.length;s.length===u||(0,H.y)(s),++a0){a1=s[a0]
k.e.f.push(a1)}u=a.d
a2=G.dR("light",u.d,1,u.e.x)
a2.ag(new Float32Array(3))
a2.bx([0,0])
u=$.$get$f3()
t=new Float32Array(9)
s=new T.A(new Float32Array(16))
s.G()
r=new T.A(new Float32Array(16))
r.G()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
a.f.push(new A.az(u,a2,[],new T.O(t),s,r,new T.d(q),new T.d(p),new T.d(o),new T.d(new Float32Array(3)),"light",!1,!0))
for(u=y.getElementsByTagName("input"),t=u.length,a0=0;a0<u.length;u.length===t||(0,H.y)(u),++a0){a3=u[a0]
s=J.f(a3)
r=s.gbb(a3)
W.a4(r.a,r.b,new L.lv(),!1,H.x(r,0))
r=s.gbc(a3)
W.a4(r.a,r.b,new L.lw(),!1,H.x(r,0))
s=s.gaI(a3)
W.a4(s.a,s.b,L.lB(),!1,H.x(s,0))}for(u=y.getElementsByTagName("input"),t=u.length,a0=0;a0<u.length;u.length===t||(0,H.y)(u),++a0){a4=u[a0]
H.by("initialize inputs "+H.b(J.fF(a4)))
a5=y.createEvent("Event")
a5.initEvent("change",!0,!0)
a4.dispatchEvent(a5)
a5=y.createEvent("Event")
a5.initEvent("input",!0,!0)
a4.dispatchEvent(a5)}y=new L.lx(w,m,b,k)
y.$1(null)
W.a4(window,"resize",y,!1,W.L)
z.a=0
new L.lu(z,n,a2,x,k,c,b).$1(0)},
lv:{"^":"j:9;",
$1:function(a){var z=H.G(J.d1(a),"$isch")
if(z.type==="radio")L.hE(z.id)}},
lw:{"^":"j:9;",
$1:function(a){var z,y,x,w
z=H.G(J.d1(a),"$isch")
if(z.type==="range"){y=z.id
x=P.l9(z.value,null)
if(J.fT(y,"pos")){P.Z("EventPositionChanged "+y+" "+H.b(x))
switch(y){case"posx":w=$.$get$ae()
H.G(w.h(0,"idSpot"),"$isar").x.sm(0,x)
H.G(w.h(0,"idPoint"),"$isbk").x.sm(0,x)
break
case"posy":w=$.$get$ae()
H.G(w.h(0,"idSpot"),"$isar").x.sn(0,x)
H.G(w.h(0,"idPoint"),"$isbk").x.sn(0,x)
break
case"posz":w=$.$get$ae()
H.G(w.h(0,"idSpot"),"$isar").x.sA(0,x)
H.G(w.h(0,"idPoint"),"$isbk").x.sA(0,x)
break}}else if(C.h.aN(y,"dir")){P.Z("EventDirectionChanged "+y+" "+H.b(x))
switch(y){case"dirx":w=$.$get$ae()
H.G(w.h(0,"idSpot"),"$isar").y.sm(0,x)
H.G(w.h(0,"idDirectional"),"$isba").x.sm(0,x)
break
case"diry":w=$.$get$ae()
H.G(w.h(0,"idSpot"),"$isar").y.sn(0,x)
H.G(w.h(0,"idDirectional"),"$isba").x.sn(0,x)
break
case"dirz":w=$.$get$ae()
H.G(w.h(0,"idSpot"),"$isar").y.sA(0,x)
H.G(w.h(0,"idDirectional"),"$isba").x.sA(0,x)
break}}else if(y==="cutoff")P.Z("set cutoff "+H.b(x))}}},
lx:{"^":"j:10;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
w=J.f(z)
w.sL(z,y)
w.sK(z,x)
P.Z("size change "+H.b(y)+" "+H.b(x))
if(typeof y!=="number")return y.bw()
z=C.c.a6(y,2)
this.b.df(z,x)
w=this.c
w.z=z
w.Q=x
w=this.d.f
w.x=z
w.y=0
w.z=z
w.Q=x}},
lu:{"^":"j:22;a,b,c,d,e,f,r",
$1:function(b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
z=this.a
y=J.b4(b0)
y.H(b0,z.a)
z.a=y.l(b0,0)
y=this.b
x=y.r1
w=x.a
if(w.B(0,0)||w.B(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.ar()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.ar()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.B(0,37))y.go+=0.03
else if(v.B(0,39))y.go-=0.03
if(v.B(0,38))y.id+=0.03
else if(v.B(0,40))y.id-=0.03
if(v.B(0,33))y.fy*=0.99
else if(v.B(0,34))y.fy*=1.01
if(v.B(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.ar()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.ef(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a9(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d
u=v.a
r=t.a
u[12]=u[12]+r[0]
u[13]=u[13]+r[1]
u[14]=u[14]+r[2]
q=u[12]
p=u[13]
o=u[14]
n=new T.d(new Float32Array(3))
n.t(0,1,0)
r=y.e
m=r.a
m[0]=u[12]
m[1]=u[13]
m[2]=u[14]
T.cR(v,r,t,n)
u[12]=q
u[13]=p
u[14]=o
t=y.f
r=t.a
r[0]=u[2]
r[1]=u[6]
r[2]=u[10]
y=-y.k1
l=Math.sqrt(t.gao())
q=r[0]/l
p=r[1]/l
o=r[2]/l
k=Math.cos(y)
j=Math.sin(y)
i=1-k
h=q*q*i+k
y=o*j
g=q*p*i-y
r=p*j
f=q*o*i+r
e=p*q*i+y
d=p*p*i+k
y=q*j
c=p*o*i-y
b=o*q*i-r
a=o*p*i+y
a0=o*o*i+k
y=u[0]
r=u[4]
t=u[8]
v=u[1]
m=u[5]
a1=u[9]
a2=u[2]
a3=u[6]
a4=u[10]
a5=u[3]
a6=u[7]
a7=u[11]
u[0]=y*h+r*e+t*b
u[1]=v*h+m*e+a1*b
u[2]=a2*h+a3*e+a4*b
u[3]=a5*h+a6*e+a7*b
u[4]=y*g+r*d+t*a
u[5]=v*g+m*d+a1*a
u[6]=a2*g+a3*d+a4*a
u[7]=a5*g+a6*d+a7*a
u[8]=y*f+r*c+t*a0
u[9]=v*f+m*c+a1*a0
u[10]=a2*f+a3*c+a4*a0
u[11]=a5*f+a6*c+a7*a0
w.c.al(0)
w.b.al(0)
x.e=0
x.d=0
x.f=0
x.c.al(0)
x.b.al(0)
a8=$.bW.aR()
x=this.c
a9=$.bW
y=J.q(a9)
if(!!y.$isba){y=a9.Q
R.je(x,y,y/4,a9.x)}else if(!!y.$isar)R.jg(x,a9.x,a9.y,a9.ch,a9.cx)
else if(!!y.$isbk)R.jf(x,a9.x,a9.Q)
y=this.d
x=H.b($.bW)
w=y.c;(w&&C.v).br(w,x)
x=this.e
x.r.d.i(0,"uLightPerspectiveViewMatrix",a8)
x.c.bz()
this.f.d.i(0,"uLightPerspectiveViewMatrix",a8)
this.r.bz()
w=x.a
v=x.b
J.am(w.a,3553,v.b)
J.a1(w.a,3553,34892,0)
J.a1(w.a,3553,10240,9728)
J.a1(w.a,3553,10241,9728)
J.am(w.a,3553,null)
x.f.bA([])
x=x.b
J.am(w.a,3553,x.b)
J.a1(w.a,3553,34892,34894)
J.a1(w.a,3553,10240,9729)
J.a1(w.a,3553,10241,9729)
J.am(w.a,3553,null)
C.a5.ge7(window).cF(this)
y.dw(z.a)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dI.prototype
return J.dH.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.hV.prototype
if(typeof a=="boolean")return J.hU.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.e)return a
return J.bv(a)}
J.lc=function(a){if(typeof a=="number")return J.aQ.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.e)return a
return J.bv(a)}
J.al=function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.e)return a
return J.bv(a)}
J.bu=function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.e)return a
return J.bv(a)}
J.b4=function(a){if(typeof a=="number")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bt.prototype
return a}
J.ld=function(a){if(typeof a=="number")return J.aQ.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bt.prototype
return a}
J.bX=function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bt.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.e)return a
return J.bv(a)}
J.aI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lc(a).l(a,b)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).J(a,b)}
J.T=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.b4(a).aq(a,b)}
J.b7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.b4(a).a8(a,b)}
J.fk=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.b4(a).H(a,b)}
J.b8=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lq(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).h(a,b)}
J.fl=function(a,b,c,d){return J.f(a).dU(a,b,c,d)}
J.cS=function(a,b){return J.f(a).bX(a,b)}
J.fm=function(a,b,c,d){return J.f(a).bY(a,b,c,d)}
J.cT=function(a,b,c){return J.f(a).c_(a,b,c)}
J.fn=function(a,b){return J.f(a).e9(a,b)}
J.c0=function(a,b,c){return J.f(a).c0(a,b,c)}
J.c1=function(a,b,c){return J.f(a).c2(a,b,c)}
J.am=function(a,b,c){return J.f(a).c3(a,b,c)}
J.bA=function(a,b){return J.f(a).ec(a,b)}
J.fo=function(a,b){return J.f(a).c4(a,b)}
J.fp=function(a,b,c){return J.f(a).c5(a,b,c)}
J.cU=function(a,b,c,d){return J.f(a).c6(a,b,c,d)}
J.fq=function(a,b){return J.f(a).c8(a,b)}
J.fr=function(a,b){return J.bu(a).c9(a,b)}
J.fs=function(a,b,c,d,e){return J.f(a).ca(a,b,c,d,e)}
J.bB=function(a){return J.f(a).R(a)}
J.cV=function(a,b){return J.bX(a).b7(a,b)}
J.ft=function(a,b){return J.ld(a).a_(a,b)}
J.c2=function(a,b,c){return J.al(a).ei(a,b,c)}
J.c3=function(a){return J.f(a).cc(a)}
J.fu=function(a){return J.f(a).cd(a)}
J.fv=function(a){return J.f(a).ce(a)}
J.fw=function(a){return J.f(a).cg(a)}
J.fx=function(a){return J.f(a).el(a)}
J.fy=function(a,b){return J.f(a).cj(a,b)}
J.c4=function(a,b){return J.f(a).ck(a,b)}
J.fz=function(a,b,c,d){return J.f(a).cl(a,b,c,d)}
J.fA=function(a,b,c,d,e){return J.f(a).en(a,b,c,d,e)}
J.fB=function(a,b,c,d,e){return J.f(a).cm(a,b,c,d,e)}
J.fC=function(a,b,c,d,e,f){return J.f(a).eo(a,b,c,d,e,f)}
J.cW=function(a,b){return J.bu(a).w(a,b)}
J.bC=function(a,b){return J.f(a).cn(a,b)}
J.fD=function(a,b){return J.f(a).co(a,b)}
J.fE=function(a){return J.f(a).ep(a)}
J.cX=function(a,b){return J.bu(a).E(a,b)}
J.cY=function(a,b,c,d,e,f){return J.f(a).cr(a,b,c,d,e,f)}
J.cZ=function(a){return J.f(a).ge8(a)}
J.d_=function(a){return J.f(a).gb9(a)}
J.aJ=function(a){return J.f(a).gU(a)}
J.af=function(a){return J.q(a).gF(a)}
J.fF=function(a){return J.f(a).gez(a)}
J.av=function(a){return J.bu(a).gM(a)}
J.a7=function(a){return J.al(a).gj(a)}
J.fG=function(a){return J.f(a).gcz(a)}
J.fH=function(a){return J.f(a).gbg(a)}
J.d0=function(a){return J.f(a).ga3(a)}
J.fI=function(a){return J.f(a).geK(a)}
J.d1=function(a){return J.f(a).gT(a)}
J.fJ=function(a){return J.f(a).gcI(a)}
J.fK=function(a){return J.f(a).gap(a)}
J.d2=function(a){return J.f(a).geV(a)}
J.c5=function(a){return J.f(a).gm(a)}
J.c6=function(a){return J.f(a).gn(a)}
J.d3=function(a){return J.f(a).gA(a)}
J.fL=function(a){return J.f(a).bj(a)}
J.fM=function(a,b,c){return J.f(a).cY(a,b,c)}
J.fN=function(a){return J.f(a).aL(a)}
J.fO=function(a){return J.f(a).bk(a)}
J.fP=function(a,b){return J.f(a).bl(a,b)}
J.fQ=function(a,b,c){return J.f(a).bm(a,b,c)}
J.d4=function(a,b,c){return J.f(a).bp(a,b,c)}
J.fR=function(a,b){return J.f(a).cv(a,b)}
J.d5=function(a){return J.bu(a).eG(a)}
J.fS=function(a,b){return J.f(a).saF(a,b)}
J.fT=function(a,b){return J.bX(a).aN(a,b)}
J.fU=function(a,b,c,d){return J.f(a).bv(a,b,c,d)}
J.fV=function(a){return J.f(a).d4(a)}
J.fW=function(a,b,c,d){return J.f(a).cD(a,b,c,d)}
J.a1=function(a,b,c,d){return J.f(a).cE(a,b,c,d)}
J.fX=function(a,b,c,d,e,f){return J.f(a).eL(a,b,c,d,e,f)}
J.d6=function(a){return J.b4(a).eM(a)}
J.fY=function(a){return J.bX(a).eO(a)}
J.aK=function(a){return J.q(a).k(a)}
J.fZ=function(a,b,c,d){return J.f(a).eQ(a,b,c,d)}
J.h_=function(a){return J.bX(a).eR(a)}
J.h0=function(a,b,c){return J.f(a).cJ(a,b,c)}
J.h1=function(a,b,c){return J.f(a).cK(a,b,c)}
J.c7=function(a,b,c){return J.f(a).cL(a,b,c)}
J.h2=function(a,b,c){return J.f(a).cM(a,b,c)}
J.d7=function(a,b,c){return J.f(a).cN(a,b,c)}
J.d8=function(a,b,c){return J.f(a).cO(a,b,c)}
J.d9=function(a,b,c){return J.f(a).cP(a,b,c)}
J.da=function(a,b,c,d){return J.f(a).cQ(a,b,c,d)}
J.db=function(a,b,c,d){return J.f(a).cR(a,b,c,d)}
J.h3=function(a,b){return J.f(a).cT(a,b)}
J.h4=function(a,b,c){return J.f(a).eT(a,b,c)}
J.h5=function(a,b,c,d,e,f,g){return J.f(a).cU(a,b,c,d,e,f,g)}
J.h6=function(a,b,c,d,e){return J.f(a).cW(a,b,c,d,e)}
I.aG=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.u=W.c8.prototype
C.n=W.hl.prototype
C.v=W.ht.prototype
C.E=J.h.prototype
C.b=J.aO.prototype
C.o=J.dH.prototype
C.c=J.dI.prototype
C.a=J.aQ.prototype
C.h=J.aR.prototype
C.L=J.aS.prototype
C.r=H.ij.prototype
C.P=W.il.prototype
C.y=J.iu.prototype
C.D=W.j5.prototype
C.t=J.bt.prototype
C.a5=W.ji.prototype
C.f=new P.kb()
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
C.M=H.D(I.aG(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.N=I.aG(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=I.aG([])
C.p=H.D(I.aG(["bind","if","ref","repeat","syntax"]),[P.o])
C.q=H.D(I.aG(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.Q=new G.B("vec3","vertex btangents",0)
C.d=new G.B("vec3","",0)
C.R=new G.B("vec4","delta from light",0)
C.m=new G.B("","",0)
C.z=new G.B("vec3","vertex coordinates",0)
C.S=new G.B("vec3","vertex binormals",0)
C.A=new G.B("vec4","for wireframe",0)
C.T=new G.B("vec4","per vertex color",0)
C.U=new G.B("float","for normal maps",0)
C.j=new G.B("mat4","",0)
C.W=new G.B("mat4","",4)
C.V=new G.B("mat4","",128)
C.e=new G.B("float","",0)
C.X=new G.B("float","",4)
C.Y=new G.B("float","depth for shadowmaps",0)
C.i=new G.B("sampler2D","",0)
C.Z=new G.B("float","for bump maps",0)
C.a_=new G.B("vec2","texture uvs",0)
C.a0=new G.B("float","time since program start in sec",0)
C.k=new G.B("vec2","",0)
C.a1=new G.B("samplerCube","",0)
C.l=new G.B("vec4","",0)
C.a2=new G.B("vec3","vertex normals",0)
C.a3=new G.B("sampler2DShadow","",0)
C.B=new G.B("vec3","per vertex color",0)
C.C=new G.B("mat3","",0)
C.a4=new G.B("vec3","vertex tangents",0)
$.a8=0
$.aL=null
$.de=null
$.f0=null
$.eS=null
$.fa=null
$.bV=null
$.bY=null
$.cO=null
$.aC=null
$.b1=null
$.b2=null
$.cF=!1
$.C=C.f
$.ag=null
$.cd=null
$.dy=null
$.dx=null
$.du=null
$.dt=null
$.ds=null
$.dr=null
$.eZ=0
$.bW=null
$.ls=0.1
$.lr=50
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
I.$lazy(y,x,w)}})(["dq","$get$dq",function(){return H.f_("_$dart_dartClosure")},"ck","$get$ck",function(){return H.f_("_$dart_js")},"ed","$get$ed",function(){return H.aa(H.bQ({
toString:function(){return"$receiver$"}}))},"ee","$get$ee",function(){return H.aa(H.bQ({$method$:null,
toString:function(){return"$receiver$"}}))},"ef","$get$ef",function(){return H.aa(H.bQ(null))},"eg","$get$eg",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.aa(H.bQ(void 0))},"el","$get$el",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ei","$get$ei",function(){return H.aa(H.ej(null))},"eh","$get$eh",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"en","$get$en",function(){return H.aa(H.ej(void 0))},"em","$get$em",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cA","$get$cA",function(){return P.jm()},"dE","$get$dE",function(){var z,y
z=P.bj
y=new P.as(0,P.jk(),null,[z])
y.dE(null,z)
return y},"b3","$get$b3",function(){return[]},"dp","$get$dp",function(){return{}},"ez","$get$ez",function(){return P.cq(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cC","$get$cC",function(){return P.J()},"cH","$get$cH",function(){return T.w(0,1,0)},"cI","$get$cI",function(){return T.w(0,0,1)},"e2","$get$e2",function(){return new G.ec(1281,0,4294967295)},"dd","$get$dd",function(){return new G.eb(1281,1281,1281)},"a5","$get$a5",function(){return P.cp(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.B,"aColorAlpha",C.T,"aPosition",C.z,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.A,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.B,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.z,"vPositionFromLight",C.R,"vCenter",C.A,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a1,"uAnimationTable",C.i,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"e9","$get$e9",function(){var z=G.e8()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"ea","$get$ea",function(){var z=G.e8()
z.d=!1
z.b=!0
z.a=!1
z.c=!0
return z},"dA","$get$dA",function(){return G.bL("empty-mat")},"dl","$get$dl",function(){return T.w(0.4,0.4,0.4)},"dk","$get$dk",function(){return T.w(0.2,0.2,0.2)},"di","$get$di",function(){return T.w(0,0,0)},"dj","$get$dj",function(){return T.w(0,0,1)},"dm","$get$dm",function(){return T.w(0,0,0.5)},"dn","$get$dn",function(){return T.w(1,1,0)},"fd","$get$fd",function(){var z=G.aq("ShadowMapV")
z.at(["aPosition"])
z.a4(["uLightPerspectiveViewMatrix","uModelMatrix"])
z.a5(["    gl_Position = uLightPerspectiveViewMatrix * uModelMatrix *\n                  vec4(aPosition, 1.0);\n    "])
return z},"fc","$get$fc",function(){var z=G.aq("ShadowMapF")
z.a5(["oFragColor.r = 1.0;"])
return z},"fj","$get$fj",function(){var z=G.aq("copyV")
z.at(["aPosition","aTexUV"])
z.aw(["vTexUV"])
z.a5(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"fi","$get$fi",function(){var z=G.aq("copyF")
z.aw(["vTexUV"])
z.a4(["uTexture","uCutOff","uCameraFar","uCameraNear"])
z.a5(["   float d = texture(uTexture,  vTexUV).x;\n   float near = uCameraNear;\n   float far = uCameraFar;\n   float gray = (2.0 * near) / (far + near - d * (far - near));\n   oFragColor.rgb = vec3(gray);\n   // oFragColor.rgb = vec3(d >= uCutOff ? d : 0.0);\n   // oFragColor.rgb = vec3(d);\n"])
return z},"ff","$get$ff",function(){var z=G.aq("SolidColor")
z.at(["aPosition"])
z.a4(["uPerspectiveViewMatrix","uModelMatrix"])
z.a5(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"fe","$get$fe",function(){var z=G.aq("SolidColorF")
z.a4(["uColor"])
z.a5(["oFragColor = vec4( uColor, 1.0 );"])
return z},"ev","$get$ev",function(){return[T.w(0,0,1),T.w(0,0,-1),T.w(0,1,0),T.w(0,-1,0),T.w(1,0,0),T.w(-1,0,0)]},"dF","$get$dF",function(){return[G.I(0,11,5),G.I(0,5,1),G.I(0,1,7),G.I(0,7,10),G.I(0,10,11),G.I(1,5,9),G.I(5,11,4),G.I(11,10,2),G.I(10,7,6),G.I(7,1,8),G.I(3,9,4),G.I(3,4,2),G.I(3,2,6),G.I(3,6,8),G.I(3,8,9),G.I(4,9,5),G.I(2,4,11),G.I(6,2,10),G.I(8,6,7),G.I(9,8,1)]},"fg","$get$fg",function(){return(1+P.lC(5))/2},"cg","$get$cg",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$fg()
y=T.w(-1,z,0)
y.D(0)
x=T.w(1,z,0)
x.D(0)
if(typeof z!=="number")return z.eW()
w=T.w(-1,-z,0)
w.D(0)
v=T.w(1,-z,0)
v.D(0)
u=T.w(0,-1,z)
u.D(0)
t=T.w(0,1,z)
t.D(0)
s=T.w(0,-1,-z)
s.D(0)
r=T.w(0,1,-z)
r.D(0)
q=T.w(z,0,-1)
q.D(0)
p=T.w(z,0,1)
p.D(0)
o=T.w(-z,0,-1)
o.D(0)
z=T.w(-z,0,1)
z.D(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"f4","$get$f4",function(){var z=G.aq("LightBlinnPhongShadowV")
z.at(["aPosition","aNormal"])
z.aw(["vPosition","vNormal","vPositionFromLight"])
z.a4(["uPerspectiveViewMatrix","uLightPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.a5(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        vPositionFromLight = uLightPerspectiveViewMatrix * pos;\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        "])
return z},"f2","$get$f2",function(){var z=G.aq("LightBlinnPhongShadowF")
z.aw(["vPosition","vNormal","vPositionFromLight"])
z.a4(["uLightDescs","uLightTypes","uShininess"])
z.a4(["uShadowMap","uEyePosition","uColor","uShadowBias"])
z.bD(["\n    vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n\t\t// depth is in [-1, 1] but we want [0, 1] for the texture lookup\n\t\tdepth = 0.5 * depth + vec3(0.5);\n\n    float shadow = GetShadow(depth, uShadowMap, 0.001, 0.001);\n\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n    if (shadow > 0.0) {\n        acc = CombinedLight(vPosition, vNormal, uEyePosition,\n                            uLightDescs, uLightTypes, uShininess);\n    }\n\n    oFragColor.rgb = shadow * acc.diffuse +\n                       shadow * acc.specular +\n                       uColor;\n    oFragColor.a = 1.0;\n    // if ( oFragColor.r != 66.0)  gl_FragColor.rgb = vec3(shadow);\n\n      "],["","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n","\nfloat GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {\n    depth.z = depth.z - bias1;\n    return texture(shadowMap, depth);\n    //return 1.0 - smoothstep(bias1, bias2, depth.z - d);\n}\n"])
return z},"f9","$get$f9",function(){return T.w(11,20,0)},"eW","$get$eW",function(){return T.w(0,-30,0)},"ae","$get$ae",function(){var z,y,x,w,v,u
z=$.$get$eW()
y=$.$get$dj()
x=$.$get$di()
w=T.bM()
v=T.bM()
u=$.$get$f9()
return P.cp(["idDirectional",new G.ba(z,y,x,40,w,v,1,"dir",!1,!0),"idSpot",new G.ar(u,z,y,x,40,0.5235987755982988,0.5,1,0.5,44,T.bM(),T.bM(),2,"spot",!1,!0),"idPoint",new G.bk(u,$.$get$dm(),y,40,3,"point",!1,!0)])},"f6","$get$f6",function(){var z=G.bL("matGray")
z.ah("uColor",$.$get$dl())
z.ah("uShininess",10)
return z},"f7","$get$f7",function(){var z=G.bL("objects")
z.ah("uColor",$.$get$dk())
z.ah("uShininess",10)
return z},"f3","$get$f3",function(){var z=G.bL("light")
z.ah("uColor",$.$get$dn())
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.R]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.o,args:[P.K]},{func:1,args:[W.bI]},{func:1,args:[W.L]},{func:1,v:true,args:[W.L]},{func:1,ret:P.cJ,args:[W.aw,P.o,P.o,W.cB]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.e],opt:[P.aX]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aX]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[P.ak,T.d]},{func:1,args:[W.b_]},{func:1,args:[P.K,P.e]},{func:1,v:true,args:[P.b5]},{func:1,ret:P.K,args:[,,]}]
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
if(x==y)H.lE(d||a)
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
Isolate.aG=a.aG
Isolate.aE=a.aE
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
if(typeof dartMainRunner==="function")dartMainRunner(L.f5,[])
else L.f5([])})})()
//# sourceMappingURL=shadow.dart.js.map
