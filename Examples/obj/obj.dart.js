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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.ce"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.ce"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.ce(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",lN:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
cj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b6:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ch==null){H.ko()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c5("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bX()]
if(v!=null)return v
v=H.kr(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$bX(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
i:{"^":"c;",
B:function(a,b){return a===b},
gw:function(a){return H.aJ(a)},
k:["cs",function(a){return"Instance of '"+H.aK(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fS:{"^":"i;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$iscd:1},
d2:{"^":"i;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaY:1},
bY:{"^":"i;",
gw:function(a){return 0},
k:["cu",function(a){return String(a)}]},
hq:{"^":"bY;"},
b2:{"^":"bY;"},
aI:{"^":"bY;",
k:function(a){var z=a[$.$get$cM()]
return z==null?this.cu(a):J.aA(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aE:{"^":"i;$ti",
L:function(a,b){var z,y
if(!!a.fixed$length)H.F(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.I(a))}},
a6:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b0:function(a,b){return H.dp(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cl:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.F(P.p("setRange"))
P.hA(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$ish){x=e
w=d}else{w=y.b0(d,e).ee(0,!1)
x=0}y=J.a0(w)
if(x+z>y.gi(w))throw H.a(H.fP())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
aa:function(a,b,c,d){return this.cl(a,b,c,d,0)},
bw:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.I(a))}return!1},
cm:function(a,b){if(!!a.immutable$list)H.F(P.p("sort"))
H.hN(a,J.jU())},
an:function(a){return this.cm(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.z(a[z],b))return!0
return!1},
k:function(a){return P.bW(a,"[","]")},
gI:function(a){return new J.f7(a,a.length,0,null,[H.A(a,0)])},
gw:function(a){return H.aJ(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.F(P.p("set length"))
if(b<0)throw H.a(P.am(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a_(a,b))
if(b>=a.length||b<0)throw H.a(H.a_(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.F(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a_(a,b))
if(b>=a.length||b<0)throw H.a(H.a_(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.x([],[H.A(a,0)])
this.si(y,z)
this.aa(y,0,a.length,a)
this.aa(y,a.length,z,b)
return y},
$ism:1,
$asm:I.ar,
$ish:1,
p:{
aF:function(a){a.fixed$length=Array
return a},
lL:[function(a,b){return J.ey(a,b)},"$2","jU",8,0,22]}},
lM:{"^":"aE;$ti"},
f7:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aG:{"^":"i;",
P:function(a,b){var z
if(typeof b!=="number")throw H.a(H.K(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
ed:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dE:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dF:function(a,b,c){if(this.P(b,c)>0)throw H.a(H.K(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
eg:function(a,b){var z
if(b>20)throw H.a(P.am(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a-b},
cw:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bp(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.bp(a,b)},
bp:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bn:function(a,b){var z
if(a>0)z=this.dl(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dl:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a<b},
a8:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a>b},
$isaQ:1,
$isaT:1},
d1:{"^":"aG;",$isC:1},
d0:{"^":"aG;"},
aH:{"^":"i;",
aE:function(a,b){if(b<0)throw H.a(H.a_(a,b))
if(b>=a.length)H.F(H.a_(a,b))
return a.charCodeAt(b)},
ac:function(a,b){if(b>=a.length)throw H.a(H.a_(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.f6(b,null,null))
return a+b},
e6:function(a,b,c){return H.ky(a,b,c)},
cn:function(a,b){var z=H.x(a.split(b),[P.l])
return z},
cp:function(a,b,c){var z
if(c>a.length)throw H.a(P.am(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
co:function(a,b){return this.cp(a,b,0)},
ao:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.F(H.K(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.F(H.K(c))
if(b<0)throw H.a(P.bp(b,null,null))
if(typeof c!=="number")return H.L(c)
if(b>c)throw H.a(P.bp(b,null,null))
if(c>a.length)throw H.a(P.bp(c,null,null))
return a.substring(b,c)},
cq:function(a,b){return this.ao(a,b,null)},
ef:function(a){return a.toLowerCase()},
ei:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.ac(z,0)===133){x=J.fT(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aE(z,w)===133?J.fU(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dI:function(a,b,c){if(c>a.length)throw H.a(P.am(c,0,a.length,null,null))
return H.kx(a,b,c)},
P:function(a,b){var z
if(typeof b!=="string")throw H.a(H.K(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gw:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a_(a,b))
return a[b]},
$ism:1,
$asm:I.ar,
$isl:1,
p:{
d3:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fT:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.ac(a,b)
if(y!==32&&y!==13&&!J.d3(y))break;++b}return b},
fU:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.aE(a,z)
if(y!==32&&y!==13&&!J.d3(y))break}return b}}}}],["","",,H,{"^":"",
fO:function(){return new P.bs("No element")},
fQ:function(){return new P.bs("Too many elements")},
fP:function(){return new P.bs("Too few elements")},
hN:function(a,b){H.b_(a,0,J.a2(a)-1,b)},
b_:function(a,b,c,d){if(c-b<=32)H.hM(a,b,c,d)
else H.hL(a,b,c,d)},
hM:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a0(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.O(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.Y(c-b+1,6)
y=b+z
x=c-z
w=C.b.Y(b+c,2)
v=w-z
u=w+z
t=J.a0(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.O(d.$2(s,r),0)){n=r
r=s
s=n}if(J.O(d.$2(p,o),0)){n=o
o=p
p=n}if(J.O(d.$2(s,q),0)){n=q
q=s
s=n}if(J.O(d.$2(r,q),0)){n=q
q=r
r=n}if(J.O(d.$2(s,p),0)){n=p
p=s
s=n}if(J.O(d.$2(q,p),0)){n=p
p=q
q=n}if(J.O(d.$2(r,o),0)){n=o
o=r
r=n}if(J.O(d.$2(r,q),0)){n=q
q=r
r=n}if(J.O(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.z(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.B(i,0))continue
if(h.S(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aS(i)
if(h.a8(i,0)){--l
continue}else{g=l-1
if(h.S(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.ax(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.O(d.$2(j,p),0))for(;!0;)if(J.O(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.ax(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b_(a,b,m-2,d)
H.b_(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.z(d.$2(t.h(a,m),r),0);)++m
for(;J.z(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.z(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.z(d.$2(j,p),0))for(;!0;)if(J.z(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.ax(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b_(a,m,l,d)}else H.b_(a,m,l,d)},
bR:{"^":"bj;$ti"},
bl:{"^":"bR;$ti",
gI:function(a){return new H.d9(this,this.gi(this),0,null,[H.cg(this,"bl",0)])},
v:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.I(this))}},
aR:function(a,b){return this.ct(0,b)}},
i_:{"^":"bl;a,b,c,$ti",
cR:function(a,b,c,d){},
gd7:function(){var z=J.a2(this.a)
return z},
gdm:function(){var z,y
z=J.a2(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a2(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdm()+b
if(b>=0){y=this.gd7()
if(typeof y!=="number")return H.L(y)
y=z>=y}else y=!0
if(y)throw H.a(P.v(b,this,"index",null,null))
return J.cq(this.a,z)},
ee:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a0(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.x(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.I(this))}return t},
p:{
dp:function(a,b,c,d){var z=new H.i_(a,b,c,[d])
z.cR(a,b,c,d)
return z}}},
d9:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a0(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.I(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
h5:{"^":"bl;a,b,$ti",
gi:function(a){return J.a2(this.a)},
q:function(a,b){return this.b.$1(J.cq(this.a,b))},
$asbR:function(a,b){return[b]},
$asbl:function(a,b){return[b]},
$asbj:function(a,b){return[b]}},
dJ:{"^":"bj;a,b,$ti",
gI:function(a){return new H.i8(J.aV(this.a),this.b,this.$ti)}},
i8:{"^":"fR;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bh:{"^":"c;$ti"}}],["","",,H,{"^":"",
kg:function(a){return init.types[a]},
el:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$iso},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aA(a)
if(typeof z!=="string")throw H.a(H.K(a))
return z},
aJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hz:function(a,b){var z,y
if(typeof a!=="string")H.F(H.K(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hy:function(a){var z,y
if(typeof a!=="string")H.F(H.K(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eY(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.n(a).$isb2){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.ac(w,0)===36)w=C.i.cq(w,1)
r=H.bE(H.as(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
G:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hx:function(a){return a.b?H.G(a).getUTCFullYear()+0:H.G(a).getFullYear()+0},
hv:function(a){return a.b?H.G(a).getUTCMonth()+1:H.G(a).getMonth()+1},
hr:function(a){return a.b?H.G(a).getUTCDate()+0:H.G(a).getDate()+0},
hs:function(a){return a.b?H.G(a).getUTCHours()+0:H.G(a).getHours()+0},
hu:function(a){return a.b?H.G(a).getUTCMinutes()+0:H.G(a).getMinutes()+0},
hw:function(a){return a.b?H.G(a).getUTCSeconds()+0:H.G(a).getSeconds()+0},
ht:function(a){return a.b?H.G(a).getUTCMilliseconds()+0:H.G(a).getMilliseconds()+0},
L:function(a){throw H.a(H.K(a))},
d:function(a,b){if(a==null)J.a2(a)
throw H.a(H.a_(a,b))},
a_:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a2(a)
if(!(b<0)){if(typeof z!=="number")return H.L(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.bp(b,"index",null)},
K:function(a){return new P.ac(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bo()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eq})
z.name=""}else z.toString=H.eq
return z},
eq:function(){return J.aA(this.dartException)},
F:function(a){throw H.a(a)},
D:function(a){throw H.a(P.I(a))},
N:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bn(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bZ(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.de(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dv()
u=$.$get$dw()
t=$.$get$dx()
s=$.$get$dy()
r=$.$get$dC()
q=$.$get$dD()
p=$.$get$dA()
$.$get$dz()
o=$.$get$dF()
n=$.$get$dE()
m=v.N(y)
if(m!=null)return z.$1(H.bZ(y,m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.bZ(y,m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.de(y,m))}}return z.$1(new H.i5(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dk()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dk()
return a},
a9:function(a){var z
if(a==null)return new H.e0(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e0(a,null)},
kc:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kq:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cX("Unsupported number of arguments for wrapped closure"))},
V:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kq)
a.$identity=z
return z},
fg:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$ish){z.$reflectionInfo=c
x=H.hC(z).r}else x=c
w=d?Object.create(new H.hP().constructor.prototype):Object.create(new H.bO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.W
$.W=J.aw(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cJ(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kg,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cH:H.bP
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cJ(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fd:function(a,b,c,d){var z=H.bP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cJ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ff(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fd(y,!w,z,b)
if(y===0){w=$.W
$.W=J.aw(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aB
if(v==null){v=H.bd("self")
$.aB=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.W
$.W=J.aw(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aB
if(v==null){v=H.bd("self")
$.aB=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fe:function(a,b,c,d){var z,y
z=H.bP
y=H.cH
switch(b?-1:a){case 0:throw H.a(H.hH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ff:function(a,b){var z,y,x,w,v,u,t,s
z=$.aB
if(z==null){z=H.bd("self")
$.aB=z}y=$.cG
if(y==null){y=H.bd("receiver")
$.cG=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fe(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.W
$.W=J.aw(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.W
$.W=J.aw(y,1)
return new Function(z+H.b(y)+"}")()},
ce:function(a,b,c,d,e,f){var z,y
z=J.aF(b)
y=!!J.n(c).$ish?J.aF(c):c
return H.fg(a,z,y,!!d,e,f)},
kv:function(a,b){var z=J.a0(b)
throw H.a(H.cI(a,z.ao(b,3,z.gi(b))))},
aa:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.kv(a,b)},
cf:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eg:function(a,b){var z,y
if(a==null)return!1
z=H.cf(J.n(a))
if(z==null)y=!1
else y=H.ek(z,b)
return y},
k1:function(a){var z
if(a instanceof H.f){z=H.cf(J.n(a))
if(z!=null)return H.ck(z,null)
return"Closure"}return H.aK(a)},
kC:function(a){throw H.a(new P.fk(a))},
ei:function(a){return init.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
n9:function(a,b,c){return H.aU(a["$as"+H.b(c)],H.as(b))},
b7:function(a,b,c,d){var z=H.aU(a["$as"+H.b(c)],H.as(b))
return z==null?null:z[d]},
cg:function(a,b,c){var z=H.aU(a["$as"+H.b(b)],H.as(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.as(a)
return z==null?null:z[b]},
ck:function(a,b){var z=H.av(a,b)
return z},
av:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bE(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.av(z,b)
return H.jT(a,b)}return"unknown-reified-type"},
jT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.av(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.av(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.av(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kb(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.av(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bE:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c4("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.av(u,c)}return w?"":"<"+z.k(0)+">"},
kf:function(a){var z,y,x
if(a instanceof H.f){z=H.cf(J.n(a))
if(z!=null)return H.ck(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bE(a.$ti,0,null)
return y+x},
aU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.as(a)
y=J.n(a)
if(y[b]==null)return!1
return H.ec(H.aU(y[d],z),c)},
b8:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bE(c,0,null)
throw H.a(H.cI(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ec:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
n7:function(a,b,c){return a.apply(b,H.aU(J.n(b)["$as"+H.b(c)],H.as(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aY")return!0
if('func' in b)return H.ek(a,b)
if('func' in a)return b.builtin$cls==="lD"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.ck(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ec(H.aU(u,z),x)},
eb:function(a,b,c){var z,y,x,w,v
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
k2:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aF(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
ek:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.eb(x,w,!1))return!1
if(!H.eb(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.k2(a.named,b.named)},
n8:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kr:function(a){var z,y,x,w,v,u
z=$.ej.$1(a)
y=$.bB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ea.$2(a,z)
if(z!=null){y=$.bB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bF(x)
$.bB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bD[z]=x
return x}if(v==="-"){u=H.bF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eo(a,x)
if(v==="*")throw H.a(P.c5(z))
if(init.leafTags[z]===true){u=H.bF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eo(a,x)},
eo:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bF:function(a){return J.cj(a,!1,null,!!a.$iso)},
ku:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bF(z)
else return J.cj(z,c,null,null)},
ko:function(){if(!0===$.ch)return
$.ch=!0
H.kp()},
kp:function(){var z,y,x,w,v,u,t,s
$.bB=Object.create(null)
$.bD=Object.create(null)
H.kk()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ep.$1(v)
if(u!=null){t=H.ku(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kk:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.aq(C.H,H.aq(C.M,H.aq(C.u,H.aq(C.u,H.aq(C.L,H.aq(C.I,H.aq(C.J(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ej=new H.kl(v)
$.ea=new H.km(u)
$.ep=new H.kn(t)},
aq:function(a,b){return a(b)||b},
kx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
kz:function(a,b,c,d){var z,y,x
z=b.d9(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.kB(a,x,x+y[0].length,c)},
ky:function(a,b,c){var z,y
z=b.gbk()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
kA:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.kz(a,b,c,d)},
kB:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hB:{"^":"c;a,b,c,d,e,f,r,x",p:{
hC:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aF(z)
y=z[0]
x=z[1]
return new H.hB(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i3:{"^":"c;a,b,c,d,e,f",
N:function(a){var z,y,x
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
Y:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bx:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hm:{"^":"E;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
de:function(a,b){return new H.hm(a,b==null?null:b.method)}}},
fW:{"^":"E;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fW(a,y,z?null:b.receiver)}}},
i5:{"^":"E;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kD:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e0:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aK(this).trim()+"'"},
gcg:function(){return this},
gcg:function(){return this}},
dq:{"^":"f;"},
hP:{"^":"dq;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bO:{"^":"dq;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aJ(this.a)
else y=typeof z!=="object"?J.a1(z):H.aJ(z)
return(y^H.aJ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aK(z)+"'")},
p:{
bP:function(a){return a.a},
cH:function(a){return a.c},
bd:function(a){var z,y,x,w,v
z=new H.bO("self","target","receiver","name")
y=J.aF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fb:{"^":"E;a",
k:function(a){return this.a},
p:{
cI:function(a,b){return new H.fb("CastError: "+H.b(P.bT(a))+": type '"+H.k1(a)+"' is not a subtype of type '"+b+"'")}}},
hG:{"^":"E;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hH:function(a){return new H.hG(a)}}},
dG:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.a1(this.a)},
B:function(a,b){if(b==null)return!1
return b instanceof H.dG&&J.z(this.a,b.a)}},
d5:{"^":"c1;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gK:function(a){return new H.h1(this,[H.A(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bh(y,b)}else return this.dX(b)},
dX:function(a){var z=this.d
if(z==null)return!1
return this.aG(this.aw(z,J.a1(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.ga5()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.ga5()
return x}else return this.dY(b)},
dY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aw(z,J.a1(a)&0x3ffffff)
x=this.aG(y,a)
if(x<0)return
return y[x].ga5()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.az()
this.b=z}this.b9(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.az()
this.c=y}this.b9(y,b,c)}else{x=this.d
if(x==null){x=this.az()
this.d=x}w=J.a1(b)&0x3ffffff
v=this.aw(x,w)
if(v==null)this.aD(x,w,[this.aq(b,c)])
else{u=this.aG(v,b)
if(u>=0)v[u].sa5(c)
else v.push(this.aq(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.I(this))
z=z.c}},
b9:function(a,b,c){var z=this.ae(a,b)
if(z==null)this.aD(a,b,this.aq(b,c))
else z.sa5(c)},
ba:function(){this.r=this.r+1&67108863},
aq:function(a,b){var z,y
z=new H.h0(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ba()
return z},
aG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.z(a[y].gdW(),b))return y
return-1},
k:function(a){return P.da(this)},
ae:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
aD:function(a,b,c){a[b]=c},
d5:function(a,b){delete a[b]},
bh:function(a,b){return this.ae(a,b)!=null},
az:function(){var z=Object.create(null)
this.aD(z,"<non-identifier-key>",z)
this.d5(z,"<non-identifier-key>")
return z}},
h0:{"^":"c;dW:a<,a5:b@,c,d"},
h1:{"^":"bR;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.af(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.I(z))
y=y.c}}},
af:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kl:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
km:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
kn:{"^":"f:11;a",
$1:function(a){return this.a(a)}},
fV:{"^":"c;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbk:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.d4(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
d9:function(a,b){var z,y
z=this.gbk()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.iY(this,y)},
p:{
d4:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.bV("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
iY:{"^":"c;a,b",
h:function(a,b){var z=this.b
if(b>=z.length)return H.d(z,b)
return z[b]}}}],["","",,H,{"^":"",
kb:function(a){return J.aF(H.x(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
au:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){var z,y,x
if(!!J.n(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Z:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a_(b,a))},
hi:{"^":"i;","%":"DataView;ArrayBufferView;c2|dV|dW|db|dX|dY|ag"},
c2:{"^":"hi;",
gi:function(a){return a.length},
$ism:1,
$asm:I.ar,
$iso:1,
$aso:I.ar},
db:{"^":"dW;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
j:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbh:function(){return[P.aQ]},
$asj:function(){return[P.aQ]},
$ish:1,
$ash:function(){return[P.aQ]},
"%":"Float64Array"},
ag:{"^":"dY;",
j:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbh:function(){return[P.C]},
$asj:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]}},
hh:{"^":"db;",$isbU:1,"%":"Float32Array"},
m1:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m2:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
$isfM:1,
"%":"Int32Array"},
m3:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m4:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m5:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m6:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m7:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dV:{"^":"c2+j;"},
dW:{"^":"dV+bh;"},
dX:{"^":"c2+j;"},
dY:{"^":"dX+bh;"}}],["","",,P,{"^":"",
ig:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k3()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.V(new P.ii(z),1)).observe(y,{childList:true})
return new P.ih(z,y,x)}else if(self.setImmediate!=null)return P.k4()
return P.k5()},
mV:[function(a){self.scheduleImmediate(H.V(new P.ij(a),0))},"$1","k3",4,0,6],
mW:[function(a){self.setImmediate(H.V(new P.ik(a),0))},"$1","k4",4,0,6],
mX:[function(a){P.jw(0,a)},"$1","k5",4,0,6],
jX:function(a,b){if(H.eg(a,{func:1,args:[P.aY,P.aY]})){b.toString
return a}else{b.toString
return a}},
fC:function(a,b,c){var z
if(a==null)a=new P.bo()
z=$.q
if(z!==C.d)z.toString
z=new P.H(0,z,null,[c])
z.bd(a,b)
return z},
fD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.H(0,$.q,null,[P.h])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fF(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aP(new P.fE(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.H(0,$.q,null,[null])
r.bc(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.N(p)
t=H.a9(p)
if(z.b===0||!1)return P.fC(u,t,null)
else{z.c=u
z.d=t}}return y},
jW:function(){var z,y
for(;z=$.ao,z!=null;){$.aO=null
y=z.b
$.ao=y
if(y==null)$.aN=null
z.a.$0()}},
n6:[function(){$.cb=!0
try{P.jW()}finally{$.aO=null
$.cb=!1
if($.ao!=null)$.$get$c6().$1(P.ed())}},"$0","ed",0,0,3],
e8:function(a){var z=new P.dK(a,null)
if($.ao==null){$.aN=z
$.ao=z
if(!$.cb)$.$get$c6().$1(P.ed())}else{$.aN.b=z
$.aN=z}},
k0:function(a){var z,y,x
z=$.ao
if(z==null){P.e8(a)
$.aO=$.aN
return}y=new P.dK(a,null)
x=$.aO
if(x==null){y.b=z
$.aO=y
$.ao=y}else{y.b=x.b
x.b=y
$.aO=y
if(y.b==null)$.aN=y}},
kw:function(a){var z=$.q
if(C.d===z){P.ap(null,null,C.d,a)
return}z.toString
P.ap(null,null,z,z.bz(a))},
k_:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.N(u)
y=H.a9(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.az(x)
w=t
v=x.gW()
c.$2(w,v)}}},
jO:function(a,b,c,d){var z=a.dD(0)
if(!!J.n(z).$isae&&z!==$.$get$d_())z.ek(new P.jR(b,c,d))
else b.H(c,d)},
jP:function(a,b){return new P.jQ(a,b)},
bA:function(a,b,c,d,e){var z={}
z.a=d
P.k0(new P.jY(z,e))},
e6:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
e7:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
jZ:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
ap:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bz(d):c.dA(d)
P.e8(d)},
ii:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ih:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ij:{"^":"f:1;a",
$0:function(){this.a.$0()}},
ik:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jv:{"^":"c;a,b,c",
d0:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.V(new P.jx(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jw:function(a,b){var z=new P.jv(!0,null,0)
z.d0(a,b)
return z}}},
jx:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ae:{"^":"c;$ti"},
fF:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.H(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.H(z.c,z.d)}},
fE:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.bg(x)}else if(z.b===0&&!this.e)this.c.H(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kQ:{"^":"c;$ti"},
dN:{"^":"c;$ti",
dH:function(a,b){if(a==null)a=new P.bo()
if(this.a.a!==0)throw H.a(P.b1("Future already completed"))
$.q.toString
this.H(a,b)},
dG:function(a){return this.dH(a,null)}},
dL:{"^":"dN;a,$ti",
af:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b1("Future already completed"))
z.bc(b)},
H:function(a,b){this.a.bd(a,b)}},
jq:{"^":"dN;a,$ti",
af:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b1("Future already completed"))
z.ad(b)},
H:function(a,b){this.a.H(a,b)}},
dO:{"^":"c;aB:a<,b,c,d,e,$ti",
gdt:function(){return this.b.b},
gbU:function(){return(this.c&1)!==0},
gdV:function(){return(this.c&2)!==0},
gbT:function(){return this.c===8},
dT:function(a){return this.b.b.aN(this.d,a)},
dZ:function(a){if(this.c!==6)return!0
return this.b.b.aN(this.d,J.az(a))},
dS:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eg(z,{func:1,args:[P.c,P.aL]}))return x.e9(z,y.gM(a),a.gW())
else return x.aN(z,y.gM(a))},
dU:function(){return this.b.b.c_(this.d)}},
H:{"^":"c;bo:a<,b,dh:c<,$ti",
gdc:function(){return this.a===2},
gax:function(){return this.a>=4},
aP:function(a,b){var z,y,x
z=$.q
if(z!==C.d){z.toString
if(b!=null)b=P.jX(b,z)}y=new P.H(0,z,null,[null])
x=b==null?1:3
this.ar(new P.dO(null,y,x,a,b,[H.A(this,0),null]))
return y},
aO:function(a){return this.aP(a,null)},
ek:function(a){var z,y
z=$.q
y=new P.H(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.A(this,0)
this.ar(new P.dO(null,y,8,a,null,[z,z]))
return y},
ar:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gax()){y.ar(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.ap(null,null,z,new P.iD(this,a))}},
bl:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaB()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gax()){v.bl(a)
return}this.a=v.a
this.c=v.c}z.a=this.aC(a)
y=this.b
y.toString
P.ap(null,null,y,new P.iK(z,this))}},
a1:function(){var z=this.c
this.c=null
return this.aC(z)},
aC:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaB()
z.a=y}return y},
ad:function(a){var z,y,x
z=this.$ti
y=H.b4(a,"$isae",z,"$asae")
if(y){z=H.b4(a,"$isH",z,null)
if(z)P.by(a,this)
else P.dP(a,this)}else{x=this.a1()
this.a=4
this.c=a
P.an(this,x)}},
bg:function(a){var z=this.a1()
this.a=4
this.c=a
P.an(this,z)},
H:[function(a,b){var z=this.a1()
this.a=8
this.c=new P.bc(a,b)
P.an(this,z)},function(a){return this.H(a,null)},"eo","$2","$1","gbf",4,2,13],
bc:function(a){var z=H.b4(a,"$isae",this.$ti,"$asae")
if(z){this.d3(a)
return}this.a=1
z=this.b
z.toString
P.ap(null,null,z,new P.iF(this,a))},
d3:function(a){var z=H.b4(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ap(null,null,z,new P.iJ(this,a))}else P.by(a,this)
return}P.dP(a,this)},
bd:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ap(null,null,z,new P.iE(this,a,b))},
$isae:1,
p:{
iC:function(a,b){var z=new P.H(0,$.q,null,[b])
z.a=4
z.c=a
return z},
dP:function(a,b){var z,y,x
b.a=1
try{a.aP(new P.iG(b),new P.iH(b))}catch(x){z=H.N(x)
y=H.a9(x)
P.kw(new P.iI(b,z,y))}},
by:function(a,b){var z
for(;a.gdc();)a=a.c
if(a.gax()){z=b.a1()
b.a=a.a
b.c=a.c
P.an(b,z)}else{z=b.c
b.a=2
b.c=a
a.bl(z)}},
an:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.az(v)
t=v.gW()
y.toString
P.bA(null,null,y,u,t)}return}for(;b.gaB()!=null;b=s){s=b.a
b.a=null
P.an(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbU()||b.gbT()){q=b.gdt()
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
t=v.gW()
y.toString
P.bA(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gbT())new P.iN(z,x,b,w).$0()
else if(y){if(b.gbU())new P.iM(x,b,r).$0()}else if(b.gdV())new P.iL(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.n(y).$isae){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aC(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.by(y,o)
return}}o=b.b
b=o.a1()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iD:{"^":"f:1;a,b",
$0:function(){P.an(this.a,this.b)}},
iK:{"^":"f:1;a,b",
$0:function(){P.an(this.b,this.a.a)}},
iG:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
iH:{"^":"f:14;a",
$2:function(a,b){this.a.H(a,b)},
$1:function(a){return this.$2(a,null)}},
iI:{"^":"f:1;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
iF:{"^":"f:1;a,b",
$0:function(){this.a.bg(this.b)}},
iJ:{"^":"f:1;a,b",
$0:function(){P.by(this.b,this.a)}},
iE:{"^":"f:1;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
iN:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dU()}catch(w){y=H.N(w)
x=H.a9(w)
if(this.d){v=J.az(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bc(y,x)
u.a=!0
return}if(!!J.n(z).$isae){if(z instanceof P.H&&z.gbo()>=4){if(z.gbo()===8){v=this.b
v.b=z.gdh()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aO(new P.iO(t))
v.a=!1}}},
iO:{"^":"f:0;a",
$1:function(a){return this.a}},
iM:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dT(this.c)}catch(x){z=H.N(x)
y=H.a9(x)
w=this.a
w.b=new P.bc(z,y)
w.a=!0}}},
iL:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dZ(z)===!0&&w.e!=null){v=this.b
v.b=w.dS(z)
v.a=!1}}catch(u){y=H.N(u)
x=H.a9(u)
w=this.a
v=J.az(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bc(y,x)
s.a=!0}}},
dK:{"^":"c;a,b"},
dm:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.H(0,$.q,null,[null])
z.a=null
z.a=this.bX(new P.hW(z,this,b,y),!0,new P.hX(y),y.gbf())
return y},
gi:function(a){var z,y
z={}
y=new P.H(0,$.q,null,[P.C])
z.a=0
this.bX(new P.hY(z),!0,new P.hZ(z,y),y.gbf())
return y}},
hW:{"^":"f;a,b,c,d",
$1:function(a){P.k_(new P.hU(this.c,a),new P.hV(),P.jP(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cg(this.b,"dm",0)]}}},
hU:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hV:{"^":"f:0;",
$1:function(a){}},
hX:{"^":"f:1;a",
$0:function(){this.a.ad(null)}},
hY:{"^":"f:0;a",
$1:function(a){++this.a.a}},
hZ:{"^":"f:1;a,b",
$0:function(){this.b.ad(this.a.a)}},
hT:{"^":"c;$ti"},
jR:{"^":"f:1;a,b,c",
$0:function(){return this.a.H(this.b,this.c)}},
jQ:{"^":"f:15;a,b",
$2:function(a,b){P.jO(this.a,this.b,a,b)}},
bc:{"^":"c;M:a>,W:b<",
k:function(a){return H.b(this.a)},
$isE:1},
jD:{"^":"c;"},
jY:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bo()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aA(y)
throw x}},
j9:{"^":"jD;",
ea:function(a){var z,y,x
try{if(C.d===$.q){a.$0()
return}P.e6(null,null,this,a)}catch(x){z=H.N(x)
y=H.a9(x)
P.bA(null,null,this,z,y)}},
eb:function(a,b){var z,y,x
try{if(C.d===$.q){a.$1(b)
return}P.e7(null,null,this,a,b)}catch(x){z=H.N(x)
y=H.a9(x)
P.bA(null,null,this,z,y)}},
dA:function(a){return new P.jb(this,a)},
bz:function(a){return new P.ja(this,a)},
dB:function(a){return new P.jc(this,a)},
h:function(a,b){return},
c_:function(a){if($.q===C.d)return a.$0()
return P.e6(null,null,this,a)},
aN:function(a,b){if($.q===C.d)return a.$1(b)
return P.e7(null,null,this,a,b)},
e9:function(a,b,c){if($.q===C.d)return a.$2(b,c)
return P.jZ(null,null,this,a,b,c)}},
jb:{"^":"f:1;a,b",
$0:function(){return this.a.c_(this.b)}},
ja:{"^":"f:1;a,b",
$0:function(){return this.a.ea(this.b)}},
jc:{"^":"f:0;a,b",
$1:function(a){return this.a.eb(this.b,a)}}}],["","",,P,{"^":"",
P:function(){return new H.d5(0,null,null,null,null,null,0,[null,null])},
d7:function(a){return H.kc(a,new H.d5(0,null,null,null,null,null,0,[null,null]))},
S:function(a,b,c,d){return new P.iW(0,null,null,null,null,null,0,[d])},
fN:function(a,b,c){var z,y
if(P.cc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aP()
y.push(a)
try{P.jV(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dn(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bW:function(a,b,c){var z,y,x
if(P.cc(a))return b+"..."+c
z=new P.c4(b)
y=$.$get$aP()
y.push(a)
try{x=z
x.a=P.dn(x.gX(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cc:function(a){var z,y
for(z=0;y=$.$get$aP(),z<y.length;++z)if(a===y[z])return!0
return!1},
jV:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
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
c_:function(a,b){var z,y
z=P.S(null,null,null,b)
for(y=J.aV(a);y.t();)z.O(0,y.gA(y))
return z},
da:function(a){var z,y,x
z={}
if(P.cc(a))return"{...}"
y=new P.c4("")
try{$.$get$aP().push(a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.cr(a,new P.h4(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.$get$aP()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
iW:{"^":"iQ;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.c9(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.d4(b)},
d4:function(a){var z=this.d
if(z==null)return!1
return this.av(z[this.as(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.I(this))
z=z.b}},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ca()
this.b=z}return this.bb(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ca()
this.c=y}return this.bb(y,b)}else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ca()
this.d=z}y=this.as(b)
x=z[y]
if(x==null)z[y]=[this.aA(b)]
else{if(this.av(x,b)>=0)return!1
x.push(this.aA(b))}return!0},
bZ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bm(this.c,b)
else return this.de(0,b)},
de:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.as(b)]
x=this.av(y,b)
if(x<0)return!1
this.bq(y.splice(x,1)[0])
return!0},
a3:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
bb:function(a,b){if(a[b]!=null)return!1
a[b]=this.aA(b)
return!0},
bm:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bq(z)
delete a[b]
return!0},
ay:function(){this.r=this.r+1&67108863},
aA:function(a){var z,y
z=new P.iX(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ay()
return z},
bq:function(a){var z,y
z=a.gdd()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ay()},
as:function(a){return J.a1(a)&0x3ffffff},
av:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.z(a[y].gd6(),b))return y
return-1},
p:{
ca:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iX:{"^":"c;d6:a<,b,dd:c<"},
c9:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iQ:{"^":"hI;$ti"},
lQ:{"^":"c;$ti"},
d8:{"^":"dU;$ti",$ish:1},
j:{"^":"c;$ti",
gI:function(a){return new H.d9(a,this.gi(a),0,null,[H.b7(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.I(a))}},
dQ:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.I(a))}return y},
b0:function(a,b){return H.dp(a,b,null,H.b7(this,a,"j",0))},
n:function(a,b){var z=H.x([],[H.b7(this,a,"j",0)])
C.c.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.c.aa(z,0,this.gi(a),a)
C.c.aa(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bW(a,"[","]")}},
c1:{"^":"Q;$ti"},
h4:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
Q:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aV(this.gK(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a2(this.gK(a))},
k:function(a){return P.da(a)}},
hJ:{"^":"c;$ti",
L:function(a,b){var z
for(z=J.aV(b);z.t();)this.O(0,z.gA(z))},
k:function(a){return P.bW(this,"{","}")},
v:function(a,b){var z
for(z=new P.c9(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hI:{"^":"hJ;$ti"},
dU:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
ci:function(a,b,c){var z=H.hz(a,c)
if(z!=null)return z
throw H.a(P.bV(a,null,null))},
ak:function(a,b){var z=H.hy(a)
if(z!=null)return z
throw H.a(P.bV("Invalid double",a,null))},
fv:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aK(a)+"'"},
dh:function(a,b,c){return new H.fV(a,H.d4(a,!1,!0,!1),null,null)},
bT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fv(a)},
cX:function(a){return new P.iz(a)},
ab:function(a){H.au(H.b(a))},
cd:{"^":"c;"},
"+bool":0,
bf:{"^":"c;ds:a<,b",
ge_:function(){return this.a},
cG:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.f5("DateTime is outside valid range: "+this.ge_()))},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.gds())},
gw:function(a){var z=this.a
return(z^C.b.bn(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fl(H.hx(this))
y=P.aW(H.hv(this))
x=P.aW(H.hr(this))
w=P.aW(H.hs(this))
v=P.aW(H.hu(this))
u=P.aW(H.hw(this))
t=P.fm(H.ht(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
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
aW:function(a){if(a>=10)return""+a
return"0"+a}}},
aQ:{"^":"aT;"},
"+double":0,
aX:{"^":"c;a0:a<",
n:function(a,b){return new P.aX(C.b.n(this.a,b.ga0()))},
J:function(a,b){return new P.aX(this.a-b.ga0())},
S:function(a,b){return C.b.S(this.a,b.ga0())},
a8:function(a,b){return C.b.a8(this.a,b.ga0())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aX))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.ga0())},
k:function(a){var z,y,x,w,v
z=new P.fs()
y=this.a
if(y<0)return"-"+new P.aX(0-y).k(0)
x=z.$1(C.b.Y(y,6e7)%60)
w=z.$1(C.b.Y(y,1e6)%60)
v=new P.fr().$1(y%1e6)
return""+C.b.Y(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
cT:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fr:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fs:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"c;",
gW:function(){return H.a9(this.$thrownJsError)}},
bo:{"^":"E;",
k:function(a){return"Throw of null."}},
ac:{"^":"E;a,b,c,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bT(this.b)
return w+v+": "+H.b(u)},
p:{
f5:function(a){return new P.ac(!1,null,null,a)},
f6:function(a,b,c){return new P.ac(!0,a,b,c)}}},
dg:{"^":"ac;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bp:function(a,b,c){return new P.dg(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.dg(b,c,!0,a,d,"Invalid value")},
hA:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.am(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.am(b,a,c,"end",f))
return b}}},
fL:{"^":"ac;e,i:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){if(J.ax(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.a2(b)
return new P.fL(b,z,!0,a,c,"Index out of range")}}},
i6:{"^":"E;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.i6(a)}}},
i4:{"^":"E;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
c5:function(a){return new P.i4(a)}}},
bs:{"^":"E;a",
k:function(a){return"Bad state: "+this.a},
p:{
b1:function(a){return new P.bs(a)}}},
fh:{"^":"E;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bT(z))+"."},
p:{
I:function(a){return new P.fh(a)}}},
dk:{"^":"c;",
k:function(a){return"Stack Overflow"},
gW:function(){return},
$isE:1},
fk:{"^":"E;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
lb:{"^":"c;"},
iz:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
fB:{"^":"c;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.b(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.ao(x,0,75)+"..."
return y+"\n"+x},
p:{
bV:function(a,b,c){return new P.fB(a,b,c)}}},
C:{"^":"aT;"},
"+int":0,
bj:{"^":"c;$ti",
aR:["ct",function(a,b){return new H.dJ(this,b,[H.cg(this,"bj",0)])}],
v:function(a,b){var z
for(z=this.gI(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.t();)++y
return y},
gV:function(a){var z,y
z=this.gI(this)
if(!z.t())throw H.a(H.fO())
y=z.gA(z)
if(z.t())throw H.a(H.fQ())
return y},
q:function(a,b){var z,y,x
if(b<0)H.F(P.am(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.fN(this,"(",")")}},
fR:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
c0:{"^":"c;$ti"},
aY:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aT:{"^":"c;"},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gw:function(a){return H.aJ(this)},
k:function(a){return"Instance of '"+H.aK(this)+"'"},
toString:function(){return this.k(this)}},
mn:{"^":"c;"},
aL:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
c4:{"^":"c;X:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dn:function(a,b,c){var z=J.aV(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.t())}else{a+=H.b(z.gA(z))
for(;z.t();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
ft:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).R(z,a,b,c)
y.toString
z=new H.dJ(new W.T(y),new W.fu(),[W.r])
return z.gV(z)},
cW:function(a){return"wheel"},
aC:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.N(x)}return z},
iw:function(a,b){return document.createElement(a)},
aj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e5:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iq(a)
if(!!J.n(z).$isB)return z
return}else return a},
jS:function(a){var z
if(!!J.n(a).$iscS)return a
z=new P.ic([],[],!1)
z.c=!0
return z.aQ(a)},
e9:function(a){var z=$.q
if(z===C.d)return a
return z.dB(a)},
t:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kE:{"^":"c3;l:x=,m:y=,E:z=","%":"Accelerometer|LinearAccelerationSensor"},
kF:{"^":"i;i:length=","%":"AccessibleNodeList"},
kG:{"^":"t;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kH:{"^":"t;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kL:{"^":"t;ah:href}","%":"HTMLBaseElement"},
bN:{"^":"t;",$isbN:1,"%":"HTMLBodyElement"},
kM:{"^":"t;G:name=","%":"HTMLButtonElement"},
kN:{"^":"t;C:height},D:width}",
ci:function(a,b,c){var z=a.getContext(b,P.k6(c,null))
return z},
"%":"HTMLCanvasElement"},
kO:{"^":"i;",
am:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kP:{"^":"r;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kR:{"^":"X;T:style=","%":"CSSFontFaceRule"},
kS:{"^":"X;T:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kT:{"^":"X;T:style=","%":"CSSPageRule"},
kU:{"^":"be;i:length=","%":"CSSPerspective"},
kV:{"^":"bQ;l:x=,m:y=","%":"CSSPositionValue"},
kW:{"^":"be;l:x=,m:y=,E:z=","%":"CSSRotation"},
X:{"^":"i;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kX:{"^":"be;l:x=,m:y=,E:z=","%":"CSSScale"},
fi:{"^":"io;i:length=",
be:function(a,b){var z,y
z=$.$get$cL()
y=z[b]
if(typeof y==="string")return y
y=this.dn(a,b)
z[b]=y
return y},
dn:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fn()+b
if(z in a)return z
return b},
dk:function(a,b,c,d){a.setProperty(b,c,d)},
sC:function(a,b){a.height=b},
sD:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"c;",
sdP:function(a,b){this.dk(a,this.be(a,"float"),b,"")}},
kY:{"^":"X;T:style=","%":"CSSStyleRule"},
bQ:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
be:{"^":"i;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kZ:{"^":"bQ;i:length=","%":"CSSTransformValue"},
l_:{"^":"be;l:x=,m:y=,E:z=","%":"CSSTranslation"},
l0:{"^":"bQ;i:length=","%":"CSSUnparsedValue"},
l1:{"^":"X;T:style=","%":"CSSViewportRule"},
l2:{"^":"i;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
l3:{"^":"i;l:x=,m:y=,E:z=","%":"DeviceAcceleration"},
fo:{"^":"t;","%":"HTMLDivElement"},
cS:{"^":"r;",
gaI:function(a){return new W.b3(a,"mousedown",!1,[W.J])},
gaJ:function(a){return new W.b3(a,"mousemove",!1,[W.J])},
gaK:function(a){return new W.b3(a,"mouseup",!1,[W.J])},
gaL:function(a){return new W.b3(a,W.cW(a),!1,[W.aM])},
$iscS:1,
"%":"Document|HTMLDocument|XMLDocument"},
l4:{"^":"i;",
k:function(a){return String(a)},
"%":"DOMException"},
l5:{"^":"fp;",
gal:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gE:function(a){return a.z},
"%":"DOMPoint"},
fp:{"^":"i;",
gal:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gE:function(a){return a.z},
"%":";DOMPointReadOnly"},
l6:{"^":"is;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a6]},
$iso:1,
$aso:function(){return[P.a6]},
$asj:function(){return[P.a6]},
$ish:1,
$ash:function(){return[P.a6]},
$ask:function(){return[P.a6]},
"%":"ClientRectList|DOMRectList"},
fq:{"^":"i;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gD(a))+" x "+H.b(this.gC(a))},
B:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa6)return!1
return a.left===z.gbV(b)&&a.top===z.gc0(b)&&this.gD(a)===z.gD(b)&&this.gC(a)===z.gC(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gD(a)
w=this.gC(a)
return W.dT(W.aj(W.aj(W.aj(W.aj(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc1:function(a){return new P.a5(a.left,a.top,[null])},
gC:function(a){return a.height},
gbV:function(a){return a.left},
gc0:function(a){return a.top},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa6:1,
$asa6:I.ar,
"%":";DOMRectReadOnly"},
l7:{"^":"iu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$iso:1,
$aso:function(){return[P.l]},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
l8:{"^":"i;i:length=","%":"DOMTokenList"},
al:{"^":"r;T:style=,bj:namespaceURI=,ec:tagName=",
gdw:function(a){return new W.iv(a)},
k:function(a){return a.localName},
R:["ap",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cV
if(z==null){z=H.x([],[W.dc])
y=new W.dd(z)
z.push(W.dQ(null))
z.push(W.e1())
$.cV=y
d=y}else d=z
z=$.cU
if(z==null){z=new W.e4(d)
$.cU=z
c=z}else{z.a=d
c=z}}if($.a3==null){z=document
y=z.implementation.createHTMLDocument("")
$.a3=y
$.bS=y.createRange()
y=$.a3
y.toString
x=y.createElement("base")
J.eU(x,z.baseURI)
$.a3.head.appendChild(x)}z=$.a3
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a3
if(!!this.$isbN)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a3.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.P,a.tagName)){$.bS.selectNodeContents(w)
v=$.bS.createContextualFragment(b)}else{w.innerHTML=b
v=$.a3.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a3.body
if(w==null?z!=null:w!==z)J.cx(w)
c.aZ(v)
document.adoptNode(v)
return v},function(a,b,c){return this.R(a,b,c,null)},"dJ",null,null,"gep",5,5,null],
ck:function(a,b,c,d){a.textContent=null
a.appendChild(this.R(a,b,c,d))},
cj:function(a,b){return this.ck(a,b,null,null)},
aS:function(a){return a.getBoundingClientRect()},
gaI:function(a){return new W.ai(a,"mousedown",!1,[W.J])},
gaJ:function(a){return new W.ai(a,"mousemove",!1,[W.J])},
gaK:function(a){return new W.ai(a,"mouseup",!1,[W.J])},
gaL:function(a){return new W.ai(a,W.cW(a),!1,[W.aM])},
$isal:1,
"%":";Element"},
fu:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isal}},
l9:{"^":"t;C:height},G:name=,D:width}","%":"HTMLEmbedElement"},
la:{"^":"ad;M:error=","%":"ErrorEvent"},
ad:{"^":"i;",
ak:function(a){return a.preventDefault()},
$isad:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"i;",
bv:["cr",function(a,b,c,d){if(c!=null)this.d2(a,b,c,!1)}],
d2:function(a,b,c,d){return a.addEventListener(b,H.V(c,1),!1)},
df:function(a,b,c,d){return a.removeEventListener(b,H.V(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dZ|e_|e2|e3"},
lu:{"^":"t;G:name=","%":"HTMLFieldSetElement"},
lv:{"^":"iB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bg]},
$iso:1,
$aso:function(){return[W.bg]},
$asj:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$ask:function(){return[W.bg]},
"%":"FileList"},
lw:{"^":"B;M:error=","%":"FileReader"},
lx:{"^":"B;M:error=,i:length=","%":"FileWriter"},
lz:{"^":"i;T:style=","%":"FontFace"},
lA:{"^":"B;",
eq:function(a,b,c){return a.forEach(H.V(b,3),c)},
v:function(a,b){b=H.V(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lC:{"^":"t;i:length=,G:name=","%":"HTMLFormElement"},
lE:{"^":"c3;l:x=,m:y=,E:z=","%":"Gyroscope"},
lF:{"^":"i;i:length=","%":"History"},
lG:{"^":"iS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fI:{"^":"fJ;",
er:function(a,b,c,d,e,f){return a.open(b,c)},
e3:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
fJ:{"^":"B;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lH:{"^":"t;C:height},G:name=,D:width}","%":"HTMLIFrameElement"},
lI:{"^":"t;C:height},D:width}","%":"HTMLImageElement"},
lK:{"^":"t;C:height},G:name=,D:width}","%":"HTMLInputElement"},
bk:{"^":"dH;",
gel:function(a){return a.which},
$isbk:1,
"%":"KeyboardEvent"},
lP:{"^":"t;ah:href}","%":"HTMLLinkElement"},
lR:{"^":"i;",
k:function(a){return String(a)},
"%":"Location"},
lS:{"^":"c3;l:x=,m:y=,E:z=","%":"Magnetometer"},
lT:{"^":"t;G:name=","%":"HTMLMapElement"},
h7:{"^":"t;M:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lW:{"^":"i;i:length=","%":"MediaList"},
lX:{"^":"B;",
bv:function(a,b,c,d){if(J.z(b,"message"))a.start()
this.cr(a,b,c,!1)},
"%":"MessagePort"},
lY:{"^":"t;G:name=","%":"HTMLMetaElement"},
lZ:{"^":"iZ;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.h9(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h9:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m_:{"^":"j_;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.ha(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
ha:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m0:{"^":"j1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$iso:1,
$aso:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"MimeTypeArray"},
J:{"^":"dH;bE:button=",
ge0:function(a){return new P.a5(a.movementX,a.movementY,[null])},
gbY:function(a){var z,y,x
if(!!a.offsetX)return new P.a5(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.e5(z)).$isal)throw H.a(P.p("offsetX is only supported on elements"))
y=W.e5(z)
z=[null]
x=new P.a5(a.clientX,a.clientY,z).J(0,J.eL(J.eN(y)))
return new P.a5(J.cz(x.a),J.cz(x.b),z)}},
$isJ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
T:{"^":"d8;a",
gV:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b1("No elements"))
if(y>1)throw H.a(P.b1("More than one element"))
return z.firstChild},
L:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.cY(z,z.length,-1,null,[H.b7(C.R,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asd8:function(){return[W.r]},
$asj:function(){return[W.r]},
$ash:function(){return[W.r]},
$asdU:function(){return[W.r]}},
r:{"^":"B;aj:parentNode=,aM:previousSibling=",
ge2:function(a){return new W.T(a)},
e5:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cs(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m8:{"^":"i;",
e4:[function(a){return a.previousNode()},"$0","gaM",1,0,4],
"%":"NodeIterator"},
hj:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
mb:{"^":"t;C:height},G:name=,D:width}","%":"HTMLObjectElement"},
md:{"^":"t;G:name=","%":"HTMLOutputElement"},
me:{"^":"t;G:name=","%":"HTMLParamElement"},
aZ:{"^":"i;i:length=","%":"Plugin"},
mg:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aZ]},
$iso:1,
$aso:function(){return[W.aZ]},
$asj:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$ask:function(){return[W.aZ]},
"%":"PluginArray"},
mk:{"^":"i;",
aS:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mr:{"^":"jd;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.hF(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hF:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
ms:{"^":"t;i:length=,G:name=","%":"HTMLSelectElement"},
c3:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mt:{"^":"ad;M:error=","%":"SensorErrorEvent"},
mu:{"^":"t;G:name=","%":"HTMLSlotElement"},
mv:{"^":"e_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bq]},
$iso:1,
$aso:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$ask:function(){return[W.bq]},
"%":"SourceBufferList"},
mw:{"^":"jj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.br]},
$iso:1,
$aso:function(){return[W.br]},
$asj:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$ask:function(){return[W.br]},
"%":"SpeechGrammarList"},
mx:{"^":"ad;M:error=","%":"SpeechRecognitionError"},
b0:{"^":"i;i:length=","%":"SpeechRecognitionResult"},
mz:{"^":"jm;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.hS(z))
return z},
gi:function(a){return a.length},
$asQ:function(){return[P.l,P.l]},
"%":"Storage"},
hS:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
i0:{"^":"t;",
R:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=W.ft("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.T(y).L(0,J.eI(z))
return y},
"%":"HTMLTableElement"},
mC:{"^":"t;",
R:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.gV(z)
x.toString
z=new W.T(x)
w=z.gV(z)
y.toString
w.toString
new W.T(y).L(0,new W.T(w))
return y},
"%":"HTMLTableRowElement"},
mD:{"^":"t;",
R:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.gV(z)
y.toString
x.toString
new W.T(y).L(0,new W.T(x))
return y},
"%":"HTMLTableSectionElement"},
dr:{"^":"t;",$isdr:1,"%":"HTMLTemplateElement"},
mE:{"^":"t;G:name=","%":"HTMLTextAreaElement"},
mG:{"^":"ju;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bv]},
$iso:1,
$aso:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$ask:function(){return[W.bv]},
"%":"TextTrackCueList"},
mH:{"^":"e3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bu]},
$iso:1,
$aso:function(){return[W.bu]},
$asj:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$ask:function(){return[W.bu]},
"%":"TextTrackList"},
mI:{"^":"i;i:length=","%":"TimeRanges"},
mJ:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bw]},
$iso:1,
$aso:function(){return[W.bw]},
$asj:function(){return[W.bw]},
$ish:1,
$ash:function(){return[W.bw]},
$ask:function(){return[W.bw]},
"%":"TouchList"},
mK:{"^":"i;i:length=","%":"TrackDefaultList"},
mN:{"^":"i;",
es:[function(a){return a.parentNode()},"$0","gaj",1,0,4],
e4:[function(a){return a.previousNode()},"$0","gaM",1,0,4],
"%":"TreeWalker"},
dH:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mP:{"^":"i;",
k:function(a){return String(a)},
"%":"URL"},
mR:{"^":"i;l:x=,E:z=","%":"VRStageBoundsPoint"},
mS:{"^":"h7;C:height},D:width}","%":"HTMLVideoElement"},
mT:{"^":"B;i:length=","%":"VideoTrackList"},
aM:{"^":"J;",
gdL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
i9:{"^":"B;",
gdv:function(a){var z,y
z=P.aT
y=new P.H(0,$.q,null,[z])
this.d8(a)
this.dg(a,W.e9(new W.ia(new P.jq(y,[z]))))
return y},
dg:function(a,b){return a.requestAnimationFrame(H.V(b,1))},
d8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ia:{"^":"f:0;a",
$1:function(a){this.a.af(0,a)}},
mU:{"^":"B;"},
mY:{"^":"r;G:name=,bj:namespaceURI=","%":"Attr"},
mZ:{"^":"jF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$asj:function(){return[W.X]},
$ish:1,
$ash:function(){return[W.X]},
$ask:function(){return[W.X]},
"%":"CSSRuleList"},
n_:{"^":"fq;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa6)return!1
return a.left===z.gbV(b)&&a.top===z.gc0(b)&&a.width===z.gD(b)&&a.height===z.gC(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dT(W.aj(W.aj(W.aj(W.aj(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc1:function(a){return new P.a5(a.left,a.top,[null])},
gC:function(a){return a.height},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
n0:{"^":"jH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$iso:1,
$aso:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"GamepadList"},
n3:{"^":"jJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n4:{"^":"jL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b0]},
$iso:1,
$aso:function(){return[W.b0]},
$asj:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$ask:function(){return[W.b0]},
"%":"SpeechRecognitionResultList"},
n5:{"^":"jN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bt]},
$iso:1,
$aso:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$ask:function(){return[W.bt]},
"%":"StyleSheetList"},
il:{"^":"c1;da:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gK(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gK:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.x([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbj(v)==null)y.push(u.gG(v))}return y},
$asc1:function(){return[P.l,P.l]},
$asQ:function(){return[P.l,P.l]}},
iv:{"^":"il;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gK(this).length}},
b3:{"^":"dm;a,b,c,$ti",
bX:function(a,b,c,d){return W.a8(this.a,this.b,a,!1,H.A(this,0))}},
ai:{"^":"b3;a,b,c,$ti"},
ix:{"^":"hT;a,b,c,d,e,$ti",
cX:function(a,b,c,d,e){this.dq()},
dD:function(a){if(this.b==null)return
this.dr()
this.b=null
this.d=null
return},
dq:function(){var z=this.d
if(z!=null&&this.a<=0)J.et(this.b,this.c,z,!1)},
dr:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.es(x,this.c,z,!1)}},
p:{
a8:function(a,b,c,d,e){var z=W.e9(new W.iy(c))
z=new W.ix(0,a,b,z,!1,[e])
z.cX(a,b,c,!1,e)
return z}}},
iy:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
c7:{"^":"c;cb:a<",
cY:function(a){var z,y
z=$.$get$c8()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.O[y],W.ki())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kj())}},
Z:function(a){return $.$get$dR().u(0,W.aC(a))},
U:function(a,b,c){var z,y,x
z=W.aC(a)
y=$.$get$c8()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dQ:function(a){var z,y
z=document.createElement("a")
y=new W.je(z,window.location)
y=new W.c7(y)
y.cY(a)
return y},
n1:[function(a,b,c,d){return!0},"$4","ki",16,0,9],
n2:[function(a,b,c,d){var z,y,x,w,v
z=d.gcb()
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
return z},"$4","kj",16,0,9]}},
k:{"^":"c;$ti",
gI:function(a){return new W.cY(a,this.gi(a),-1,null,[H.b7(this,a,"k",0)])}},
dd:{"^":"c;a",
Z:function(a){return C.c.bw(this.a,new W.hl(a))},
U:function(a,b,c){return C.c.bw(this.a,new W.hk(a,b,c))}},
hl:{"^":"f:0;a",
$1:function(a){return a.Z(this.a)}},
hk:{"^":"f:0;a,b,c",
$1:function(a){return a.U(this.a,this.b,this.c)}},
jf:{"^":"c;cb:d<",
d_:function(a,b,c,d){var z,y,x
this.a.L(0,c)
z=b.aR(0,new W.jg())
y=b.aR(0,new W.jh())
this.b.L(0,z)
x=this.c
x.L(0,C.w)
x.L(0,y)},
Z:function(a){return this.a.u(0,W.aC(a))},
U:["cv",function(a,b,c){var z,y
z=W.aC(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.du(c)
else if(y.u(0,"*::"+b))return this.d.du(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
jg:{"^":"f:0;",
$1:function(a){return!C.c.u(C.p,a)}},
jh:{"^":"f:0;",
$1:function(a){return C.c.u(C.p,a)}},
jr:{"^":"jf;e,a,b,c,d",
U:function(a,b,c){if(this.cv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cs(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
e1:function(){var z=P.l
z=new W.jr(P.c_(C.o,z),P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z),null)
z.d_(null,new H.h5(C.o,new W.js(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
js:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jp:{"^":"c;",
Z:function(a){var z=J.n(a)
if(!!z.$isdi)return!1
z=!!z.$isw
if(z&&W.aC(a)==="foreignObject")return!1
if(z)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.co(b,"on"))return!1
return this.Z(a)}},
cY:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ay(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
ip:{"^":"c;a",$isB:1,p:{
iq:function(a){if(a===window)return a
else return new W.ip(a)}}},
dc:{"^":"c;"},
m9:{"^":"c;"},
mO:{"^":"c;"},
je:{"^":"c;a,b"},
e4:{"^":"c;a",
aZ:function(a){new W.jC(this).$2(a,null)},
a2:function(a,b){if(b==null)J.cx(a)
else b.removeChild(a)},
dj:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cs(a)
x=y.gda().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.N(t)}v="element unprintable"
try{v=J.aA(a)}catch(t){H.N(t)}try{u=W.aC(a)
this.di(a,b,z,v,u,y,x)}catch(t){if(H.N(t) instanceof P.ac)throw t
else{this.a2(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
di:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a2(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a2(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.a2(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gK(f)
y=H.x(z.slice(0),[H.A(z,0)])
for(x=f.gK(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.U(a,J.eW(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdr)this.aZ(a.content)}},
jC:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dj(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a2(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eJ(z)}catch(w){H.N(w)
v=z
if(x){u=J.e(v)
if(u.gaj(v)!=null){u.gaj(v)
u.gaj(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
io:{"^":"i+fj;"},
ir:{"^":"i+j;"},
is:{"^":"ir+k;"},
it:{"^":"i+j;"},
iu:{"^":"it+k;"},
iA:{"^":"i+j;"},
iB:{"^":"iA+k;"},
iR:{"^":"i+j;"},
iS:{"^":"iR+k;"},
iZ:{"^":"i+Q;"},
j_:{"^":"i+Q;"},
j0:{"^":"i+j;"},
j1:{"^":"j0+k;"},
j2:{"^":"i+j;"},
j3:{"^":"j2+k;"},
j6:{"^":"i+j;"},
j7:{"^":"j6+k;"},
jd:{"^":"i+Q;"},
dZ:{"^":"B+j;"},
e_:{"^":"dZ+k;"},
ji:{"^":"i+j;"},
jj:{"^":"ji+k;"},
jm:{"^":"i+Q;"},
jt:{"^":"i+j;"},
ju:{"^":"jt+k;"},
e2:{"^":"B+j;"},
e3:{"^":"e2+k;"},
jy:{"^":"i+j;"},
jz:{"^":"jy+k;"},
jE:{"^":"i+j;"},
jF:{"^":"jE+k;"},
jG:{"^":"i+j;"},
jH:{"^":"jG+k;"},
jI:{"^":"i+j;"},
jJ:{"^":"jI+k;"},
jK:{"^":"i+j;"},
jL:{"^":"jK+k;"},
jM:{"^":"i+j;"},
jN:{"^":"jM+k;"}}],["","",,P,{"^":"",
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.P()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
k6:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cr(a,new P.k7(z))
return z},
k8:function(a){var z,y
z=new P.H(0,$.q,null,[null])
y=new P.dL(z,[null])
a.then(H.V(new P.k9(y),1))["catch"](H.V(new P.ka(y),1))
return z},
cR:function(){var z=$.cQ
if(z==null){z=J.bH(window.navigator.userAgent,"Opera",0)
$.cQ=z}return z},
fn:function(){var z,y
z=$.cN
if(z!=null)return z
y=$.cO
if(y==null){y=J.bH(window.navigator.userAgent,"Firefox",0)
$.cO=y}if(y)z="-moz-"
else{y=$.cP
if(y==null){y=P.cR()!==!0&&J.bH(window.navigator.userAgent,"Trident/",0)
$.cP=y}if(y)z="-ms-"
else z=P.cR()===!0?"-o-":"-webkit-"}$.cN=z
return z},
ib:{"^":"c;",
bS:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.bf(y,!0)
x.cG(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.c5("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.k8(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bS(a)
x=this.b
u=x.length
if(v>=u)return H.d(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.P()
z.a=t
if(v>=u)return H.d(x,v)
x[v]=t
this.dR(a,new P.id(z,this))
return z.a}if(a instanceof Array){s=a
v=this.bS(s)
x=this.b
if(v>=x.length)return H.d(x,v)
t=x[v]
if(t!=null)return t
u=J.a0(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.d(x,v)
x[v]=t
for(x=J.aR(t),q=0;q<r;++q)x.j(t,q,this.aQ(u.h(s,q)))
return t}return a}},
id:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aQ(b)
J.er(z,a,y)
return y}},
k7:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
ic:{"^":"ib;a,b,c",
dR:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
b.$2(w,a[w])}}},
k9:{"^":"f:0;a",
$1:function(a){return this.a.af(0,a)}},
ka:{"^":"f:0;a",
$1:function(a){return this.a.dG(a)}}}],["","",,P,{"^":"",mq:{"^":"B;M:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mL:{"^":"B;M:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a5:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
B:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a5))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gw:function(a){var z,y
z=J.a1(this.a)
y=J.a1(this.b)
return P.iT(P.dS(P.dS(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.a5(y,C.a.n(z,x),this.$ti)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gl(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.L(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.L(y)
return new P.a5(z-x,w-y,this.$ti)}},
j8:{"^":"c;$ti"},
a6:{"^":"j8;$ti"}}],["","",,P,{"^":"",lc:{"^":"w;l:x=,m:y=","%":"SVGFEBlendElement"},ld:{"^":"w;l:x=,m:y=","%":"SVGFEColorMatrixElement"},le:{"^":"w;l:x=,m:y=","%":"SVGFEComponentTransferElement"},lf:{"^":"w;l:x=,m:y=","%":"SVGFECompositeElement"},lg:{"^":"w;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},lh:{"^":"w;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},li:{"^":"w;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},lj:{"^":"w;l:x=,m:y=","%":"SVGFEFloodElement"},lk:{"^":"w;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},ll:{"^":"w;l:x=,m:y=","%":"SVGFEImageElement"},lm:{"^":"w;l:x=,m:y=","%":"SVGFEMergeElement"},ln:{"^":"w;l:x=,m:y=","%":"SVGFEMorphologyElement"},lo:{"^":"w;l:x=,m:y=","%":"SVGFEOffsetElement"},lp:{"^":"w;l:x=,m:y=,E:z=","%":"SVGFEPointLightElement"},lq:{"^":"w;l:x=,m:y=","%":"SVGFESpecularLightingElement"},lr:{"^":"w;l:x=,m:y=,E:z=","%":"SVGFESpotLightElement"},ls:{"^":"w;l:x=,m:y=","%":"SVGFETileElement"},lt:{"^":"w;l:x=,m:y=","%":"SVGFETurbulenceElement"},ly:{"^":"w;l:x=,m:y=","%":"SVGFilterElement"},lB:{"^":"aD;l:x=,m:y=","%":"SVGForeignObjectElement"},fH:{"^":"aD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aD:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lJ:{"^":"aD;l:x=,m:y=","%":"SVGImageElement"},lO:{"^":"iV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d6]},
$ish:1,
$ash:function(){return[P.d6]},
$ask:function(){return[P.d6]},
"%":"SVGLengthList"},lU:{"^":"w;l:x=,m:y=","%":"SVGMaskElement"},ma:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.df]},
$ish:1,
$ash:function(){return[P.df]},
$ask:function(){return[P.df]},
"%":"SVGNumberList"},mf:{"^":"w;l:x=,m:y=","%":"SVGPatternElement"},mh:{"^":"i;l:x=,m:y=","%":"SVGPoint"},mi:{"^":"i;i:length=","%":"SVGPointList"},ml:{"^":"i;l:x=,m:y=","%":"SVGRect"},mm:{"^":"fH;l:x=,m:y=","%":"SVGRectElement"},di:{"^":"w;",$isdi:1,"%":"SVGScriptElement"},mA:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},w:{"^":"al;",
R:function(a,b,c,d){var z,y,x,w,v,u
z=H.x([],[W.dc])
z.push(W.dQ(null))
z.push(W.e1())
z.push(new W.jp())
c=new W.e4(new W.dd(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dJ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.T(w)
u=z.gV(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaI:function(a){return new W.ai(a,"mousedown",!1,[W.J])},
gaJ:function(a){return new W.ai(a,"mousemove",!1,[W.J])},
gaK:function(a){return new W.ai(a,"mouseup",!1,[W.J])},
gaL:function(a){return new W.ai(a,"mousewheel",!1,[W.aM])},
$isw:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mB:{"^":"aD;l:x=,m:y=","%":"SVGSVGElement"},i1:{"^":"aD;","%":"SVGTextPathElement;SVGTextContentElement"},mF:{"^":"i1;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mM:{"^":"jB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.du]},
$ish:1,
$ash:function(){return[P.du]},
$ask:function(){return[P.du]},
"%":"SVGTransformList"},mQ:{"^":"aD;l:x=,m:y=","%":"SVGUseElement"},iU:{"^":"i+j;"},iV:{"^":"iU+k;"},j4:{"^":"i+j;"},j5:{"^":"j4+k;"},jn:{"^":"i+j;"},jo:{"^":"jn+k;"},jA:{"^":"i+j;"},jB:{"^":"jA+k;"}}],["","",,P,{"^":"",kI:{"^":"i;i:length=","%":"AudioBuffer"},kJ:{"^":"im;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new P.f8(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"AudioParamMap"},f8:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},kK:{"^":"B;i:length=","%":"AudioTrackList"},f9:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mc:{"^":"f9;i:length=","%":"OfflineAudioContext"},im:{"^":"i+Q;"}}],["","",,P,{"^":"",mo:{"^":"i;",
bu:function(a,b){return a.activeTexture(b)},
bx:function(a,b,c){return a.attachShader(b,c)},
by:function(a,b,c){return a.bindBuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bL:function(a,b){return a.depthMask(b)},
bM:function(a,b){return a.disable(b)},
bN:function(a,b,c,d){return a.drawArrays(b,c,d)},
bO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
bQ:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.R(a.getContextAttributes())},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
b_:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cc:function(a,b){return a.useProgram(b)},
cd:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cf:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mp:{"^":"i;",
dz:function(a,b){return a.beginTransformFeedback(b)},
dC:function(a,b){return a.bindVertexArray(b)},
dK:function(a){return a.createVertexArray()},
dM:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dN:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dO:function(a){return a.endTransformFeedback()},
eh:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ej:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bu:function(a,b){return a.activeTexture(b)},
bx:function(a,b,c){return a.attachShader(b,c)},
by:function(a,b,c){return a.bindBuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bL:function(a,b){return a.depthMask(b)},
bM:function(a,b){return a.disable(b)},
bN:function(a,b,c,d){return a.drawArrays(b,c,d)},
bO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
bQ:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.R(a.getContextAttributes())},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
b_:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cc:function(a,b){return a.useProgram(b)},
cd:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cf:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",my:{"^":"jl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.R(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c0]},
$ish:1,
$ash:function(){return[P.c0]},
$ask:function(){return[P.c0]},
"%":"SQLResultSetRowList"},jk:{"^":"i+j;"},jl:{"^":"jk+k;"}}],["","",,G,{"^":"",
ie:function(a){var z,y,x,w
z=H.x(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a6(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bJ(a,b)
z.b_(a,y,c)
z.bG(a,y)
x=z.aW(a,y,35713)
if(x!=null&&J.z(x,!1)){w=z.aV(a,y)
P.ab("E:Compilation failed:")
P.ab("E:"+G.ie(c))
P.ab("E:Failure:")
P.ab(C.i.n("E:",w))
throw H.a(w)}return y},
cZ:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bK(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bL(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cv(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fz:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bK(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bL(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fA:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bK(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bL(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cv(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.eM(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fy:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.ay(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.ay(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.ay(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.ay(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.af(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.C]],v=[P.aQ],u=[T.ah],t=[T.y],s=[T.a7];y.t();){r=y.d
if(!x.ag(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eh>0)H.au("I: "+q)
continue}p=z.h(0,r)
switch($.$get$U().h(0,r).a){case"vec2":b.a_(r,G.fz(H.b8(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a_(r,G.cZ(H.b8(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a_(r,G.fA(H.b8(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a_(r,new Float32Array(H.bz(H.b8(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a_(r,G.fy(H.b8(p,"$ish",w,"$ash"),null),4)
break}}},
bn:{"^":"c;"},
dI:{"^":"bn;",
b6:function(){return this.d},
k:function(a){var z,y,x,w
z=H.x(["{"+H.b(new H.dG(H.kf(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.af(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a6(z,"\n")}},
fa:{"^":"hO;"},
fc:{"^":"c;a,b",
bR:function(a,b,c){J.eG(this.a,b)
if(c>0)J.f2(this.a,b,c)},
ce:function(a,b,c,d,e,f,g,h){J.bG(this.a,34962,b)
J.f3(this.a,c,d,e,!1,g,h)}},
fw:{"^":"c;a,b,c"},
fx:{"^":"c;a,b,c,d"},
fG:{"^":"c;a,b,c,d,e",
b4:function(a){switch($.$get$U().h(0,a).a){case"vec2":this.e.j(0,a,H.x([],[T.a7]))
break
case"vec3":this.e.j(0,a,H.x([],[T.y]))
break
case"vec4":this.e.j(0,a,H.x([],[T.ah]))
break
case"float":this.e.j(0,a,H.x([],[P.aQ]))
break
case"uvec4":this.e.j(0,a,H.x([],[[P.h,P.C]]))
break}},
cD:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.fw(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.D)(a),++w)z.push(a[w].a4(0))},
cA:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(b[x].a4(0))},
cB:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(b[x].a4(0))},
cE:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.fx(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.D)(a),++w)z.push(a[w].a4(0))},
cJ:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.x(x,[P.C])
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
for(y=this.e,x=new H.af(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$U().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a6(z," ")}},
dt:{"^":"c;a,b,c"},
ds:{"^":"c;a,b,c"},
h6:{"^":"dI;d,a,b,c"},
h8:{"^":"bn;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b3:function(a,b,c){var z,y
C.i.ac(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bG(z.a,34962,y)
J.co(z.a,34962,b,35048)},
cK:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cp(a,0)===105
if(z&&this.z===0)this.z=C.b.cw(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bI(x.a))
this.b3(a,b,c)
w=$.$get$U().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.ba(x.a,this.e)
x.bR(0,v,z?1:0)
x.ce(0,y.h(0,a),v,w.b5(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.af(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a6(y,"  ")}},
ho:{"^":"dI;",
cF:function(a,b){var z
if(typeof a!=="number")return a.em()
if(typeof b!=="number")return H.L(b)
z=a/b
if(this.z===z)return
this.z=z
this.b8()},
b8:function(){var z,y,x,w,v,u
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
b6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.y(new Float32Array(3))
u.ab(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.F(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isah
q=x?y.gal(t):1
if(!!y.$isy){p=y.gl(t)
s=y.gm(t)
r=y.gE(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gE(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.L(t)
x=z[4]
if(typeof s!=="number")return H.L(s)
w=z[8]
if(typeof r!=="number")return H.L(r)
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
c.F(this.db)
c.e1(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hD:{"^":"bn;d,e,f,r,x,y,z,Q,ch,a,b,c",
cO:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cw(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cw(w.a,v,t))}},
cS:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.af(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ag(0,v))x.push(v)}for(z=this.x,y=new P.c9(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
cV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.af(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cp(t,0)){case 117:if(w.ag(0,t)){s=b.h(0,t)
if(v.ag(0,t))H.au("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$U().h(0,t)
if(r==null)H.F("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bM(x.a,q,s)
else if(!!J.n(s).$isfM)J.f0(x.a,q,s)
break
case"float":if(r.c===0)J.eZ(x.a,q,s)
else if(!!J.n(s).$isbU)J.f_(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.aa(s,"$isa4").a
J.cE(x.a,q,!1,p)}else if(!!J.n(s).$isbU)J.cE(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.G.gen(H.aa(s,"$islV"))
J.cD(x.a,q,!1,p)}else if(!!J.n(s).$isbU)J.cD(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cC(o,q,H.aa(s,"$isah").a)
else J.cC(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cB(o,q,H.aa(s,"$isy").a)
else J.cB(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cA(o,q,H.aa(s,"$isa7").a)
else J.cA(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.L(p)
J.cl(x.a,33984+p)
p=H.aa(s,"$isi2").cL()
J.cn(x.a,3553,p)
p=this.ch
J.bM(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.L(p)
J.cl(x.a,33984+p)
p=H.aa(s,"$isi2").cL()
J.cn(x.a,34067,p)
p=this.ch
J.bM(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.au("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.z(s,!0)
o=x.a
if(p)J.bb(o,2929)
else J.bJ(o,2929)
break
case"cStencilFunc":H.aa(s,"$isdt")
p=s.a
o=x.a
if(p===1281)J.bJ(o,2960)
else{J.bb(o,2960)
o=s.b
n=s.c
J.eV(x.a,p,o,n)}break
case"cDepthWrite":J.eB(x.a,s)
break
case"cBlendEquation":H.aa(s,"$isds")
p=s.a
o=x.a
if(p===1281)J.bJ(o,3042)
else{J.bb(o,3042)
o=s.b
n=s.c
J.ew(x.a,o,n)
J.ev(x.a,p)}break}++u
break}}m=P.cT(0,0,0,Date.now()-new P.bf(z,!1).a,0,0)
""+u
m.k(0)},
cI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.f1(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.ba()}for(x=0;x<2;++x){w=b[x]
this.cV(w.a,w.b6())}y=this.Q
y.a3(0)
for(v=a.cy,u=new H.af(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.O(0,u.d)
t=this.cS()
if(t.length!==0)P.ab("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
y=a.d
v=a.e
J.ba(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.cK()
u=a.Q
r=a.z
if(s)J.eu(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.eF(q,v,y,u,0,r)
else J.eE(q,v,y,u,0)}else{u=z.a
if(r>1)J.eD(u,v,0,y,r)
else J.eC(u,v,0,y)}if(s)J.eH(z.a)},
cH:function(a,b){return this.cI(a,b,null)},
p:{
hE:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.S(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.ez(b.a)
u=G.dM(b.a,35633,y)
J.cm(b.a,v,u)
t=G.dM(b.a,35632,x)
J.cm(b.a,v,t)
if(w.length>0)J.eX(b.a,v,w,35980)
J.eS(b.a,v)
if(J.eR(b.a,v,35714)!==!0)H.F(J.eQ(b.a,v))
z=new G.hD(b,c,d,v,P.c_(c.c,null),P.P(),P.P(),z,null,a,!1,!0)
z.cO(a,b,c,d)
return z}}},
u:{"^":"c;a,b,c",
b5:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hK:{"^":"c;a,b,c,d,e,f,r,x",
cz:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.an(z)},
cC:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.c.an(z)},
b2:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.an(z)},
b7:function(a,b){this.b=this.cW(!0,a,b)},
cP:function(a){return this.b7(a,null)},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
s=$.$get$U().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(c!=null)C.c.L(w,c)
w.push("void main(void) {")
C.c.L(w,b)
w.push("}")
return C.c.a6(w,"\n")},
p:{
dj:function(a){return new G.hK(a,null,[],[],[],[],0,P.P())}}},
hO:{"^":"bn;"}}],["","",,Y,{"^":"",
fK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.fG(!1,[],[],[],P.P())
z.b4("aTexUV")
z.b4("aNormal")
y=P.P()
x=J.cy(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.dh("\\s+",!0,!1)
r=P.dh("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.D)(x),++p){o=J.eT(x[p],s," ")
n=H.kA(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.d(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.d(m,0)
l=m[0]
if(J.z(l,"g")){if(1>=o)return H.d(m,1)
y.j(0,m[1],w.length)}else if(J.z(l,"v")){if(1>=o)return H.d(m,1)
l=P.ak(m[1],null)
if(2>=o)return H.d(m,2)
k=P.ak(m[2],null)
if(3>=o)return H.d(m,3)
o=P.ak(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.y(j))}else if(J.z(l,"vt")){if(1>=o)return H.d(m,1)
l=P.ak(m[1],null)
if(2>=o)return H.d(m,2)
o=P.ak(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.a7(k))}else if(J.z(l,"vn")){if(1>=o)return H.d(m,1)
l=P.ak(m[1],null)
if(2>=o)return H.d(m,2)
k=P.ak(m[2],null)
if(3>=o)return H.d(m,3)
o=P.ak(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.y(j))}else if(J.z(l,"f")){if(o!==4&&o!==5){H.au("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.cy(m[f],"/")
for(;e.length<3;)e.push("")
d=J.b9(P.ci(e[0],null,null),1)
if(1>=e.length)return H.d(e,1)
if(J.z(e[1],""))c=-1
else{if(1>=e.length)return H.d(e,1)
c=J.b9(P.ci(e[1],null,null),1)}if(2>=e.length)return H.d(e,2)
if(J.z(e[2],""))b=-1
else{if(2>=e.length)return H.d(e,2)
b=J.b9(P.ci(e[2],null,null),1)}o=w.length
if(J.ax(d,o)){if(d>>>0!==d||d>=o)return H.d(w,d)
i.push(w[d])}else i.push(new T.y(new Float32Array(3)))
o=J.n(c)
if(!o.B(c,-1)&&o.S(c,u.length)){if(c>>>0!==c||c>=u.length)return H.d(u,c)
g.push(u[c])}else{H.au("problem uv "+f+" "+H.b(c))
g.push(new T.a7(new Float32Array(2)))}o=J.n(b)
if(!o.B(b,-1)&&o.S(b,v.length)){if(b>>>0!==b||b>=v.length)return H.d(v,b)
h.push(v[b])}else{H.au("problem normals "+f+" "+H.b(b))
h.push(new T.y(new Float32Array(3)))}}if(o===4)z.cD(i)
else z.cE(i)
z.cB("aNormal",h)
z.cA("aTexUV",g)}}P.ab("loaded ("+P.cT(0,0,0,Date.now()-new P.bf(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",hp:{"^":"ho;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
e8:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sD(z,y)
w.sC(z,x)
P.ab("size change "+H.b(y)+" "+H.b(x))
this.cF(y,x)
J.f4(this.go.a,0,0,y,x)},"$1","ge7",4,0,17]},hQ:{"^":"c;",
cQ:function(a,b,c){var z,y,x
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
x=this.cZ(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cZ:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iw("span",null)
y=J.ct(v)
J.e(y).sD(y,"1px")
C.n.sC(y,""+d+"px")
C.n.sdP(y,"left")
x=C.n.be(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hR:{"^":"hQ;e,f,a,b,c,d",
cU:function(a,b){var z,y,x,w,v;++this.e
if(J.ax(J.b9(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eg(z,2)+" fps"
y=this.c;(y&&C.D).cj(y,b)
x=C.b.Y(30*C.t.dE(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.ct(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
cT:function(a){return this.cU(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",
h2:function(a){var z,y
z=new P.H(0,$.q,null,[null])
y=new XMLHttpRequest()
C.E.e3(y,"GET",a)
W.a8(y,"loadend",new D.h3(new P.dL(z,[null]),y),!1,W.mj)
y.send("")
return z},
h3:{"^":"f:0;a,b",
$1:function(a){this.a.af(0,W.jS(this.b.response))}},
fX:{"^":"c;a,b,c",
cM:function(a){var z
a=document
z=W.bk
W.a8(a,"keydown",new D.fZ(this),!1,z)
W.a8(a,"keyup",new D.h_(this),!1,z)},
p:{
fY:function(a){var z=P.C
z=new D.fX(P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z))
z.cM(a)
return z}}},
fZ:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.O(0,J.cu(a))
z.b.O(0,a.which)}},
h_:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.bZ(0,J.cu(a))
z.c.O(0,a.which)}},
hb:{"^":"c;a,b,c,d,e,f,r,x",
cN:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaJ(a)
W.a8(y.a,y.b,new D.hd(this),!1,H.A(y,0))
y=z.gaI(a)
W.a8(y.a,y.b,new D.he(this),!1,H.A(y,0))
y=z.gaK(a)
W.a8(y.a,y.b,new D.hf(this),!1,H.A(y,0))
z=z.gaL(a)
W.a8(z.a,z.b,new D.hg(this),!1,H.A(z,0))},
p:{
hc:function(a){var z=P.C
z=new D.hb(P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z),0,0,0,0,0)
z.cN(a)
return z}}},
hd:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.r=z.gbY(a).a
y.x=z.gbY(a).b
y.d=z.ge0(a).a
y.e=a.movementY}},
he:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.ak(a)
P.ab("BUTTON "+H.b(z.gbE(a)))
z=this.a
z.a.O(0,a.button)
z.b.O(0,a.button)}},
hf:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.a.bZ(0,z.gbE(a))
y.c.O(0,a.button)}},
hg:{"^":"f:18;a",
$1:function(a){var z=J.e(a)
z.ak(a)
this.a.f=z.gdL(a)}},
hn:{"^":"fa;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bC:function(a){var z,y
z=C.Q.dQ(a,0,new A.kh())
if(typeof z!=="number")return H.L(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kh:{"^":"f:19;",
$2:function(a,b){var z,y
z=J.aw(a,J.a1(b))
if(typeof z!=="number")return H.L(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a4:{"^":"c;bi:a<",
F:function(a){var z,y
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
k:function(a){return"[0] "+this.a7(0).k(0)+"\n[1] "+this.a7(1).k(0)+"\n[2] "+this.a7(2).k(0)+"\n[3] "+this.a7(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a4){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bC(this.a)},
a7:function(a){var z,y,x
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
return new T.ah(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a4(z)
y.F(this)
x=b.gbi()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
z[4]=C.a.n(z[4],x.h(0,4))
z[5]=C.a.n(z[5],x.h(0,5))
z[6]=C.a.n(z[6],x.h(0,6))
z[7]=C.a.n(z[7],x.h(0,7))
z[8]=C.a.n(z[8],x.h(0,8))
z[9]=C.a.n(z[9],x.h(0,9))
z[10]=C.a.n(z[10],x.h(0,10))
z[11]=C.a.n(z[11],x.h(0,11))
z[12]=C.a.n(z[12],x.h(0,12))
z[13]=C.a.n(z[13],x.h(0,13))
z[14]=C.a.n(z[14],x.h(0,14))
z[15]=C.a.n(z[15],x.h(0,15))
return y},
J:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a4(z)
y.F(this)
x=b.gbi()
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
a9:function(){var z=this.a
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
e1:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},a7:{"^":"c;br:a<",
F:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bC(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a7(z)
y.F(this)
x=b.gbr()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a7(z)
y.F(this)
x=b.gbr()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a4:function(a){var z=new T.a7(new Float32Array(2))
z.F(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},y:{"^":"c;bs:a<",
ab:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
F:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bC(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.y(z)
y.F(this)
x=b.gbs()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.y(z)
y.F(this)
x=b.gbs()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aH:function(a){var z,y,x,w,v,u
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)return 0
u=1/v
z[0]=z[0]*u
z[1]=z[1]*u
z[2]=z[2]*u
return v},
aF:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bK:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.y(new Float32Array(3))
z.ab(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a4:function(a){var z=new T.y(new Float32Array(3))
z.F(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
p:{
i7:function(a,b,c){var z=new T.y(new Float32Array(3))
z.ab(a,b,c)
return z}}},ah:{"^":"c;bt:a<",
F:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ah){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bC(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ah(z)
y.F(this)
x=b.gbt()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ah(z)
y.F(this)
x=b.gbt()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
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
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gal:function(a){return this.a[3]}}}],["","",,T,{"^":"",
em:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z={}
y=document
x=new R.hR(0,0,null,null,null,null)
x.cQ(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fc(null,w)
y=J.eO(w,"webgl2",P.d7(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.F(P.cX('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.eP(y))
if($.eh>0)P.ab("I: "+u)
J.ex(y,0,0,0,1)
J.bb(y,2929)
y=new Float32Array(3)
u=D.fY(null)
t=D.hc(w)
s=new T.a4(new Float32Array(16))
s.a9()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hn(25,0,0,0,new T.y(y),-0.02,u,t,s,new T.y(r),new T.y(q),new T.y(p),new T.y(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.a4(new Float32Array(16))
y.a9()
u=new T.a4(new Float32Array(16))
u.a9()
n=new R.hp(w,v,o,50,1,0.1,1000,y,u,new T.a4(new Float32Array(16)),P.P(),"perspective",!1,!0)
n.b8()
n.e8(null)
W.a8(window,"resize",n.ge7(),!1,W.ad)
m=G.hE("demo",v,$.$get$ef(),$.$get$ee())
z.a=null
y=P.P()
y.j(0,"cDepthTest",!0)
y.j(0,"cDepthWrite",!0)
y.j(0,"cBlendEquation",$.$get$cF())
y.j(0,"cStencilFunc",$.$get$dl())
y.j(0,"uColor",$.$get$cK())
u=new Float32Array(16)
t=new T.a4(u)
t.a9()
l=Math.cos(1.5707963267948966)
k=Math.sin(1.5707963267948966)
s=u[4]
r=u[8]
q=u[5]
p=u[9]
j=u[6]
i=u[10]
h=u[7]
g=u[11]
f=-k
u[4]=s*l+r*k
u[5]=q*l+p*k
u[6]=j*l+i*k
u[7]=h*l+g*k
u[8]=s*f+r*l
u[9]=q*f+p*l
u[10]=j*f+i*l
u[11]=h*f+g*l
y.j(0,"uModelMatrix",t)
z.b=0
P.fD([D.h2($.en)],null,!1).aO(new T.kt(z,m,new T.ks(z,o,m,n,new G.h6(y,"mat",!1,!0),x)))},
ks:{"^":"f:20;a,b,c,d,e,f",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aS(b2)
y.J(b2,z.b)
z.b=y.n(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aY()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aY()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.u(0,37))y.go+=0.03
else if(v.u(0,39))y.go-=0.03
if(v.u(0,38))y.id+=0.03
else if(v.u(0,40))y.id-=0.03
if(v.u(0,33))y.fy*=0.99
else if(v.u(0,34))y.fy*=1.01
if(v.u(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aY()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dF(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.y(new Float32Array(3))
m.ab(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.J(0,t)
l.aH(0)
k=m.bK(l)
k.aH(0)
j=l.bK(k)
j.aH(0)
t=k.aF(v)
u=j.aF(v)
v=l.aF(v)
r=k.a
i=r[0]
h=j.a
g=h[0]
f=l.a
e=f[0]
d=r[1]
c=h[1]
b=f[1]
r=r[2]
h=h[2]
f=f[2]
q[15]=1
q[14]=-v
q[13]=-u
q[12]=-t
q[11]=0
q[10]=f
q[9]=h
q[8]=r
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=g
q[0]=i
q[12]=p
q[13]=o
q[14]=n
i=y.f.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.k1
g=i[0]
e=i[1]
d=i[2]
a=Math.sqrt(g*g+e*e+d*d)
p=i[0]/a
o=i[1]/a
n=i[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
i=o*a1
a5=p*n*a2+i
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-i
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
i=q[4]
d=q[8]
e=q[1]
g=q[5]
c=q[9]
b=q[2]
r=q[6]
h=q[10]
f=q[3]
t=q[7]
u=q[11]
q[0]=y*a3+i*a6+d*a9
q[1]=e*a3+g*a6+c*a9
q[2]=b*a3+r*a6+h*a9
q[3]=f*a3+t*a6+u*a9
q[4]=y*a4+i*a7+d*b0
q[5]=e*a4+g*a7+c*b0
q[6]=b*a4+r*a7+h*b0
q[7]=f*a4+t*a7+u*b0
q[8]=y*a5+i*a8+d*b1
q[9]=e*a5+g*a8+c*b1
q[10]=b*a5+r*a8+h*b1
q[11]=f*a5+t*a8+u*b1
w.c.a3(0)
w.b.a3(0)
x.e=0
x.d=0
x.f=0
x.c.a3(0)
x.b.a3(0)
this.c.cH(z.a,[this.d,this.e])
C.a7.gdv(window).aO(this)
this.f.cT(z.b)}},
kt:{"^":"f:21;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r
z=Y.fK(J.ay(a,0))
y=$.en
x=this.b
w=x.d
x=x.e.x
v=P.P()
u=J.eA(w.a)
t=new G.h8(w,u,4,v,x,null,0,-1,null,null,P.P(),"meshdata:"+y,!1,!0)
y=G.cZ(z.d,null)
v.j(0,"aPosition",J.bI(w.a))
t.ch=y
t.b3("aPosition",y,3)
s=$.$get$U().h(0,"aPosition")
if(s==null)H.F("Unknown canonical aPosition")
r=x.h(0,"aPosition")
J.ba(w.a,u)
w.bR(0,r,0)
w.ce(0,v.h(0,"aPosition"),r,s.b5(),5126,!1,0,0)
y=z.cJ()
t.y=J.bI(w.a)
x=t.ch.length
if(x<768){t.cx=new Uint8Array(H.bz(y))
t.Q=5121}else if(x<196608){t.cx=new Uint16Array(H.bz(y))
t.Q=5123}else{t.cx=new Uint32Array(H.bz(y))
t.Q=5125}J.ba(w.a,u)
y=t.y
x=t.cx
J.bG(w.a,34963,y)
J.co(w.a,34963,x,35048)
G.iP(z,t)
this.a.a=t
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.d2.prototype
if(typeof a=="boolean")return J.fS.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.kd=function(a){if(typeof a=="number")return J.aG.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.a0=function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.aR=function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.aS=function(a){if(typeof a=="number")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.ke=function(a){if(typeof a=="number")return J.aG.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.b5=function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.aw=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kd(a).n(a,b)}
J.z=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).B(a,b)}
J.O=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aS(a).a8(a,b)}
J.ax=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aS(a).S(a,b)}
J.b9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aS(a).J(a,b)}
J.ay=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.el(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)}
J.er=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.el(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aR(a).j(a,b,c)}
J.es=function(a,b,c,d){return J.e(a).df(a,b,c,d)}
J.cl=function(a,b){return J.e(a).bu(a,b)}
J.et=function(a,b,c,d){return J.e(a).bv(a,b,c,d)}
J.cm=function(a,b,c){return J.e(a).bx(a,b,c)}
J.eu=function(a,b){return J.e(a).dz(a,b)}
J.bG=function(a,b,c){return J.e(a).by(a,b,c)}
J.cn=function(a,b,c){return J.e(a).bA(a,b,c)}
J.ba=function(a,b){return J.e(a).dC(a,b)}
J.ev=function(a,b){return J.e(a).bB(a,b)}
J.ew=function(a,b,c){return J.e(a).bC(a,b,c)}
J.co=function(a,b,c,d){return J.e(a).bD(a,b,c,d)}
J.ex=function(a,b,c,d,e){return J.e(a).bF(a,b,c,d,e)}
J.cp=function(a,b){return J.b5(a).aE(a,b)}
J.ey=function(a,b){return J.ke(a).P(a,b)}
J.bH=function(a,b,c){return J.a0(a).dI(a,b,c)}
J.bI=function(a){return J.e(a).bH(a)}
J.ez=function(a){return J.e(a).bI(a)}
J.eA=function(a){return J.e(a).dK(a)}
J.eB=function(a,b){return J.e(a).bL(a,b)}
J.bJ=function(a,b){return J.e(a).bM(a,b)}
J.eC=function(a,b,c,d){return J.e(a).bN(a,b,c,d)}
J.eD=function(a,b,c,d,e){return J.e(a).dM(a,b,c,d,e)}
J.eE=function(a,b,c,d,e){return J.e(a).bO(a,b,c,d,e)}
J.eF=function(a,b,c,d,e,f){return J.e(a).dN(a,b,c,d,e,f)}
J.cq=function(a,b){return J.aR(a).q(a,b)}
J.bb=function(a,b){return J.e(a).bP(a,b)}
J.eG=function(a,b){return J.e(a).bQ(a,b)}
J.eH=function(a){return J.e(a).dO(a)}
J.cr=function(a,b){return J.aR(a).v(a,b)}
J.cs=function(a){return J.e(a).gdw(a)}
J.az=function(a){return J.e(a).gM(a)}
J.a1=function(a){return J.n(a).gw(a)}
J.aV=function(a){return J.aR(a).gI(a)}
J.a2=function(a){return J.a0(a).gi(a)}
J.eI=function(a){return J.e(a).ge2(a)}
J.eJ=function(a){return J.e(a).gaM(a)}
J.ct=function(a){return J.e(a).gT(a)}
J.eK=function(a){return J.e(a).gec(a)}
J.eL=function(a){return J.e(a).gc1(a)}
J.eM=function(a){return J.e(a).gal(a)}
J.cu=function(a){return J.e(a).gel(a)}
J.bK=function(a){return J.e(a).gl(a)}
J.bL=function(a){return J.e(a).gm(a)}
J.cv=function(a){return J.e(a).gE(a)}
J.eN=function(a){return J.e(a).aS(a)}
J.eO=function(a,b,c){return J.e(a).ci(a,b,c)}
J.eP=function(a){return J.e(a).am(a)}
J.eQ=function(a,b){return J.e(a).aT(a,b)}
J.eR=function(a,b,c){return J.e(a).aU(a,b,c)}
J.cw=function(a,b,c){return J.e(a).aX(a,b,c)}
J.eS=function(a,b){return J.e(a).bW(a,b)}
J.cx=function(a){return J.aR(a).e5(a)}
J.eT=function(a,b,c){return J.b5(a).e6(a,b,c)}
J.eU=function(a,b){return J.e(a).sah(a,b)}
J.cy=function(a,b){return J.b5(a).cn(a,b)}
J.eV=function(a,b,c,d){return J.e(a).b1(a,b,c,d)}
J.cz=function(a){return J.aS(a).ed(a)}
J.eW=function(a){return J.b5(a).ef(a)}
J.aA=function(a){return J.n(a).k(a)}
J.eX=function(a,b,c,d){return J.e(a).eh(a,b,c,d)}
J.eY=function(a){return J.b5(a).ei(a)}
J.eZ=function(a,b,c){return J.e(a).c2(a,b,c)}
J.f_=function(a,b,c){return J.e(a).c3(a,b,c)}
J.bM=function(a,b,c){return J.e(a).c4(a,b,c)}
J.f0=function(a,b,c){return J.e(a).c5(a,b,c)}
J.cA=function(a,b,c){return J.e(a).c6(a,b,c)}
J.cB=function(a,b,c){return J.e(a).c7(a,b,c)}
J.cC=function(a,b,c){return J.e(a).c8(a,b,c)}
J.cD=function(a,b,c,d){return J.e(a).c9(a,b,c,d)}
J.cE=function(a,b,c,d){return J.e(a).ca(a,b,c,d)}
J.f1=function(a,b){return J.e(a).cc(a,b)}
J.f2=function(a,b,c){return J.e(a).ej(a,b,c)}
J.f3=function(a,b,c,d,e,f,g){return J.e(a).cd(a,b,c,d,e,f,g)}
J.f4=function(a,b,c,d,e){return J.e(a).cf(a,b,c,d,e)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bN.prototype
C.n=W.fi.prototype
C.D=W.fo.prototype
C.E=W.fI.prototype
C.F=J.i.prototype
C.c=J.aE.prototype
C.t=J.d0.prototype
C.b=J.d1.prototype
C.G=J.d2.prototype
C.a=J.aG.prototype
C.i=J.aH.prototype
C.N=J.aI.prototype
C.Q=H.hh.prototype
C.R=W.hj.prototype
C.x=J.hq.prototype
C.C=W.i0.prototype
C.q=J.b2.prototype
C.a7=W.i9.prototype
C.d=new P.j9()
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.O=H.x(I.at(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=I.at(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.at([])
C.o=H.x(I.at(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.x(I.at(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.S=new G.u("vec3","vertex btangents",0)
C.e=new G.u("vec3","",0)
C.T=new G.u("vec4","delta from light",0)
C.m=new G.u("","",0)
C.y=new G.u("vec3","vertex coordinates",0)
C.U=new G.u("vec3","vertex binormals",0)
C.z=new G.u("vec4","for wireframe",0)
C.V=new G.u("vec4","per vertex color",0)
C.W=new G.u("float","for normal maps",0)
C.j=new G.u("mat4","",0)
C.Y=new G.u("mat4","",4)
C.X=new G.u("mat4","",128)
C.f=new G.u("float","",0)
C.Z=new G.u("float","",4)
C.a_=new G.u("float","depth for shadowmaps",0)
C.h=new G.u("sampler2D","",0)
C.a0=new G.u("float","for bump maps",0)
C.a1=new G.u("vec2","texture uvs",0)
C.a2=new G.u("float","time since program start in sec",0)
C.k=new G.u("vec2","",0)
C.a3=new G.u("samplerCube","",0)
C.l=new G.u("vec4","",0)
C.a4=new G.u("vec3","vertex normals",0)
C.a5=new G.u("sampler2DShadow","",0)
C.A=new G.u("vec3","per vertex color",0)
C.B=new G.u("mat3","",0)
C.a6=new G.u("vec3","vertex tangents",0)
$.W=0
$.aB=null
$.cG=null
$.ej=null
$.ea=null
$.ep=null
$.bB=null
$.bD=null
$.ch=null
$.ao=null
$.aN=null
$.aO=null
$.cb=!1
$.q=C.d
$.a3=null
$.bS=null
$.cV=null
$.cU=null
$.cQ=null
$.cP=null
$.cO=null
$.cN=null
$.eh=0
$.en="../ct_logo.obj"
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
I.$lazy(y,x,w)}})(["cM","$get$cM",function(){return H.ei("_$dart_dartClosure")},"bX","$get$bX",function(){return H.ei("_$dart_js")},"dv","$get$dv",function(){return H.Y(H.bx({
toString:function(){return"$receiver$"}}))},"dw","$get$dw",function(){return H.Y(H.bx({$method$:null,
toString:function(){return"$receiver$"}}))},"dx","$get$dx",function(){return H.Y(H.bx(null))},"dy","$get$dy",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dC","$get$dC",function(){return H.Y(H.bx(void 0))},"dD","$get$dD",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dA","$get$dA",function(){return H.Y(H.dB(null))},"dz","$get$dz",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return H.Y(H.dB(void 0))},"dE","$get$dE",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c6","$get$c6",function(){return P.ig()},"d_","$get$d_",function(){return P.iC(null,P.aY)},"aP","$get$aP",function(){return[]},"cL","$get$cL",function(){return{}},"dR","$get$dR",function(){return P.c_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c8","$get$c8",function(){return P.P()},"dl","$get$dl",function(){return new G.dt(1281,0,4294967295)},"cF","$get$cF",function(){return new G.ds(1281,1281,1281)},"U","$get$U",function(){return P.d7(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"cK","$get$cK",function(){return T.i7(0.8,0.8,0.8)},"ef","$get$ef",function(){var z=G.dj("FixedVertexColorV")
z.cz(["aPosition"])
z.cC(["uPerspectiveViewMatrix","uModelMatrix"])
z.b2(["vColor"])
z.b7(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"ee","$get$ee",function(){var z=G.dj("FixedVertexColorF")
z.b2(["vColor"])
z.cP(["oFragColor = vec4( vColor, 1.0 );"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.J]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.C]},{func:1,args:[W.bk]},{func:1,ret:P.cd,args:[W.al,P.l,P.l,W.c7]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aL]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aL]},{func:1,v:true,args:[W.r,W.r]},{func:1,v:true,args:[W.ad]},{func:1,args:[W.aM]},{func:1,args:[P.C,P.c]},{func:1,v:true,args:[P.aT]},{func:1,args:[P.h]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.kC(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(T.em,[])
else T.em([])})})()
//# sourceMappingURL=obj.dart.js.map
