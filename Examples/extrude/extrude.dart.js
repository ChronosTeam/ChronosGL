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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.c4"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.c4"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.c4(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.an=function(){}
var dart=[["","",,H,{"^":"",lu:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
ca:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c8==null){H.jY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dv("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bM()]
if(v!=null)return v
v=H.k6(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$bM(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
f:{"^":"c;",
C:function(a,b){return a===b},
gw:function(a){return H.aD(a)},
k:["cn",function(a){return"Instance of '"+H.aE(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fG:{"^":"f;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isc3:1},
cR:{"^":"f;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaU:1},
bN:{"^":"f;",
gw:function(a){return 0},
k:["cp",function(a){return String(a)}]},
ha:{"^":"bN;"},
aY:{"^":"bN;"},
aB:{"^":"bN;",
k:function(a){var z=a[$.$get$cB()]
return z==null?this.cp(a):J.at(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ax:{"^":"f;$ti",
N:function(a,b){var z
if(!!a.fixed$length)H.N(P.p("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.H(a))}},
a9:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
aV:function(a,b){return H.da(a,b,null,H.y(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cg:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.N(P.p("setRange"))
P.hi(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$isi){x=e
w=d}else{w=y.aV(d,e).e3(0,!1)
x=0}y=J.a3(w)
if(x+z>y.gi(w))throw H.a(H.fD())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ac:function(a,b,c,d){return this.cg(a,b,c,d,0)},
bq:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.H(a))}return!1},
ci:function(a,b){if(!!a.immutable$list)H.N(P.p("sort"))
H.hv(a,J.jw())},
aW:function(a){return this.ci(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.G(a[z],b))return!0
return!1},
k:function(a){return P.bL(a,"[","]")},
gJ:function(a){return new J.eZ(a,a.length,0,null,[H.y(a,0)])},
gw:function(a){return H.aD(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.N(P.p("set length"))
if(b<0)throw H.a(P.ak(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ae(a,b))
if(b>=a.length||b<0)throw H.a(H.ae(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.N(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ae(a,b))
if(b>=a.length||b<0)throw H.a(H.ae(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.x([],[H.y(a,0)])
this.si(y,z)
this.ac(y,0,a.length,a)
this.ac(y,a.length,z,b)
return y},
$ism:1,
$asm:I.an,
$isi:1,
p:{
ay:function(a){a.fixed$length=Array
return a},
ls:[function(a,b){return J.eq(a,b)},"$2","jw",8,0,22]}},
lt:{"^":"ax;$ti"},
eZ:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.a5(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
az:{"^":"f;",
P:function(a,b){var z
if(typeof b!=="number")throw H.a(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gak(b)
if(this.gak(a)===z)return 0
if(this.gak(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gak:function(a){return a===0?1/a<0:a<0},
e2:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dw:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dz:function(a,b,c){if(this.P(b,c)>0)throw H.a(H.X(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
e5:function(a,b){var z
if(b>20)throw H.a(P.ak(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gak(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.X(b))
return a+b},
H:function(a,b){if(typeof b!=="number")throw H.a(H.X(b))
return a-b},
cr:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bj(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.bj(a,b)},
bj:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bh:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dc:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.a(H.X(b))
return a<b},
aa:function(a,b){if(typeof b!=="number")throw H.a(H.X(b))
return a>b},
$isaf:1,
$isaN:1},
cQ:{"^":"az;",$isF:1},
cP:{"^":"az;"},
aA:{"^":"f;",
dA:function(a,b){if(b>=a.length)H.N(H.ae(a,b))
return a.charCodeAt(b)},
b9:function(a,b){if(b>=a.length)throw H.a(H.ae(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.eY(b,null,null))
return a+b},
ck:function(a,b,c){var z
if(c>a.length)throw H.a(P.ak(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cj:function(a,b){return this.ck(a,b,0)},
aY:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.N(H.X(c))
if(b<0)throw H.a(P.bg(b,null,null))
if(typeof c!=="number")return H.C(c)
if(b>c)throw H.a(P.bg(b,null,null))
if(c>a.length)throw H.a(P.bg(c,null,null))
return a.substring(b,c)},
cl:function(a,b){return this.aY(a,b,null)},
e4:function(a){return a.toLowerCase()},
dC:function(a,b,c){if(c>a.length)throw H.a(P.ak(c,0,a.length,null,null))
return H.kb(a,b,c)},
P:function(a,b){var z
if(typeof b!=="string")throw H.a(H.X(b))
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
$ism:1,
$asm:I.an,
$isl:1}}],["","",,H,{"^":"",
fC:function(){return new P.bj("No element")},
fE:function(){return new P.bj("Too many elements")},
fD:function(){return new P.bj("Too few elements")},
hv:function(a,b){H.aW(a,0,J.Z(a)-1,b)},
aW:function(a,b,c,d){if(c-b<=32)H.hu(a,b,c,d)
else H.ht(a,b,c,d)},
hu:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a3(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.K(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
ht:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a_(c-b+1,6)
y=b+z
x=c-z
w=C.b.a_(b+c,2)
v=w-z
u=w+z
t=J.a3(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.K(d.$2(s,r),0)){n=r
r=s
s=n}if(J.K(d.$2(p,o),0)){n=o
o=p
p=n}if(J.K(d.$2(s,q),0)){n=q
q=s
s=n}if(J.K(d.$2(r,q),0)){n=q
q=r
r=n}if(J.K(d.$2(s,p),0)){n=p
p=s
s=n}if(J.K(d.$2(q,p),0)){n=p
p=q
q=n}if(J.K(d.$2(r,o),0)){n=o
o=r
r=n}if(J.K(d.$2(r,q),0)){n=q
q=r
r=n}if(J.K(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.G(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.C(i,0))continue
if(h.T(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aM(i)
if(h.aa(i,0)){--l
continue}else{g=l-1
if(h.T(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aP(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aP(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aW(a,b,m-2,d)
H.aW(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.G(d.$2(t.h(a,m),r),0);)++m
for(;J.G(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.G(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.G(d.$2(j,p),0))for(;!0;)if(J.G(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aP(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aW(a,m,l,d)}else H.aW(a,m,l,d)},
bH:{"^":"bb;$ti"},
bd:{"^":"bH;$ti",
gJ:function(a){return new H.cV(this,this.gi(this),0,null,[H.c7(this,"bd",0)])},
v:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.H(this))}},
aM:function(a,b){return this.co(0,b)}},
hI:{"^":"bd;a,b,c,$ti",
cJ:function(a,b,c,d){},
gd_:function(){var z=J.Z(this.a)
return z},
gdd:function(){var z,y
z=J.Z(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.Z(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdd()+b
if(b>=0){y=this.gd_()
if(typeof y!=="number")return H.C(y)
y=z>=y}else y=!0
if(y)throw H.a(P.v(b,this,"index",null,null))
return J.ch(this.a,z)},
e3:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a3(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.x(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.H(this))}return t},
p:{
da:function(a,b,c,d){var z=new H.hI(a,b,c,[d])
z.cJ(a,b,c,d)
return z}}},
cV:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a3(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.H(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
fQ:{"^":"bd;a,b,$ti",
gi:function(a){return J.Z(this.a)},
q:function(a,b){return this.b.$1(J.ch(this.a,b))},
$asbH:function(a,b){return[b]},
$asbd:function(a,b){return[b]},
$asbb:function(a,b){return[b]}},
dw:{"^":"bb;a,b,$ti",
gJ:function(a){return new H.hR(J.aQ(this.a),this.b,this.$ti)}},
hR:{"^":"fF;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
b9:{"^":"c;$ti"}}],["","",,H,{"^":"",
jQ:function(a){return init.types[a]},
k0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.a(H.X(a))
return z},
aD:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.o(a).$isaY){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.b9(w,0)===36)w=C.j.cl(w,1)
r=H.c9(H.ao(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
E:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hh:function(a){return a.b?H.E(a).getUTCFullYear()+0:H.E(a).getFullYear()+0},
hf:function(a){return a.b?H.E(a).getUTCMonth()+1:H.E(a).getMonth()+1},
hb:function(a){return a.b?H.E(a).getUTCDate()+0:H.E(a).getDate()+0},
hc:function(a){return a.b?H.E(a).getUTCHours()+0:H.E(a).getHours()+0},
he:function(a){return a.b?H.E(a).getUTCMinutes()+0:H.E(a).getMinutes()+0},
hg:function(a){return a.b?H.E(a).getUTCSeconds()+0:H.E(a).getSeconds()+0},
hd:function(a){return a.b?H.E(a).getUTCMilliseconds()+0:H.E(a).getMilliseconds()+0},
C:function(a){throw H.a(H.X(a))},
d:function(a,b){if(a==null)J.Z(a)
throw H.a(H.ae(a,b))},
ae:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
z=J.Z(a)
if(!(b<0)){if(typeof z!=="number")return H.C(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.bg(b,"index",null)},
X:function(a){return new P.ai(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.d1()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eh})
z.name=""}else z.toString=H.eh
return z},
eh:function(){return J.at(this.dartException)},
N:function(a){throw H.a(a)},
a5:function(a){throw H.a(P.H(a))},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bh(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bO(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d0(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dg()
u=$.$get$dh()
t=$.$get$di()
s=$.$get$dj()
r=$.$get$dn()
q=$.$get$dp()
p=$.$get$dl()
$.$get$dk()
o=$.$get$dr()
n=$.$get$dq()
m=v.O(y)
if(m!=null)return z.$1(H.bO(y,m))
else{m=u.O(y)
if(m!=null){m.method="call"
return z.$1(H.bO(y,m))}else{m=t.O(y)
if(m==null){m=s.O(y)
if(m==null){m=r.O(y)
if(m==null){m=q.O(y)
if(m==null){m=p.O(y)
if(m==null){m=s.O(y)
if(m==null){m=o.O(y)
if(m==null){m=n.O(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d0(y,m))}}return z.$1(new H.hO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d6()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ai(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d6()
return a},
ag:function(a){var z
if(a==null)return new H.dM(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dM(a,null)},
jM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
k_:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cL("Unsupported number of arguments for wrapped closure"))},
a2:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k_)
a.$identity=z
return z},
fa:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$isi){z.$reflectionInfo=c
x=H.hk(z).r}else x=c
w=d?Object.create(new H.hx().constructor.prototype):Object.create(new H.bE(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.R
$.R=J.ar(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cy(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jQ,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cx:H.bF
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cy(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
f7:function(a,b,c,d){var z=H.bF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cy:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f9(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f7(y,!w,z,b)
if(y===0){w=$.R
$.R=J.ar(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.au
if(v==null){v=H.b6("self")
$.au=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.R
$.R=J.ar(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.au
if(v==null){v=H.b6("self")
$.au=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
f8:function(a,b,c,d){var z,y
z=H.bF
y=H.cx
switch(b?-1:a){case 0:throw H.a(H.hp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f9:function(a,b){var z,y,x,w,v,u,t,s
z=$.au
if(z==null){z=H.b6("self")
$.au=z}y=$.cw
if(y==null){y=H.b6("receiver")
$.cw=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f8(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.R
$.R=J.ar(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.R
$.R=J.ar(y,1)
return new Function(z+H.b(y)+"}")()},
c4:function(a,b,c,d,e,f){var z,y
z=J.ay(b)
y=!!J.o(c).$isi?J.ay(c):c
return H.fa(a,z,y,!!d,e,f)},
k9:function(a,b){var z=J.a3(b)
throw H.a(H.f5(a,z.aY(b,3,z.gi(b))))},
a4:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.k9(a,b)},
c5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
e0:function(a,b){var z,y
if(a==null)return!1
z=H.c5(J.o(a))
if(z==null)y=!1
else y=H.eb(z,b)
return y},
jE:function(a){var z
if(a instanceof H.h){z=H.c5(J.o(a))
if(z!=null)return H.cb(z,null)
return"Closure"}return H.aE(a)},
kc:function(a){throw H.a(new P.ff(a))},
e9:function(a){return init.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
ao:function(a){if(a==null)return
return a.$ti},
mS:function(a,b,c){return H.aO(a["$as"+H.b(c)],H.ao(b))},
b1:function(a,b,c,d){var z=H.aO(a["$as"+H.b(c)],H.ao(b))
return z==null?null:z[d]},
c7:function(a,b,c){var z=H.aO(a["$as"+H.b(b)],H.ao(a))
return z==null?null:z[c]},
y:function(a,b){var z=H.ao(a)
return z==null?null:z[b]},
cb:function(a,b){var z=H.aq(a,b)
return z},
aq:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.c9(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aq(z,b)
return H.jv(a,b)}return"unknown-reified-type"},
jv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aq(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aq(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aq(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jL(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aq(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
c9:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bW("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aq(u,c)}return w?"":"<"+z.k(0)+">"},
jP:function(a){var z,y,x
if(a instanceof H.h){z=H.c5(J.o(a))
if(z!=null)return H.cb(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.c9(a.$ti,0,null)
return y+x},
aO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e_:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ao(a)
y=J.o(a)
if(y[b]==null)return!1
return H.dY(H.aO(y[d],z),c)},
dY:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.J(a[y],b[y]))return!1
return!0},
mQ:function(a,b,c){return a.apply(b,H.aO(J.o(b)["$as"+H.b(c)],H.ao(b)))},
J:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aU")return!0
if('func' in b)return H.eb(a,b)
if('func' in a)return b.builtin$cls==="lk"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cb(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dY(H.aO(u,z),x)},
dX:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.J(z,v)||H.J(v,z)))return!1}return!0},
jF:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.ay(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.J(v,u)||H.J(u,v)))return!1}return!0},
eb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.J(z,y)||H.J(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dX(x,w,!1))return!1
if(!H.dX(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.J(o,n)||H.J(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.J(o,n)||H.J(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.J(o,n)||H.J(n,o)))return!1}}return H.jF(a.named,b.named)},
mR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k6:function(a){var z,y,x,w,v,u
z=$.ea.$1(a)
y=$.bs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bu[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dW.$2(a,z)
if(z!=null){y=$.bs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bu[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bv(x)
$.bs[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bu[z]=x
return x}if(v==="-"){u=H.bv(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ed(a,x)
if(v==="*")throw H.a(P.dv(z))
if(init.leafTags[z]===true){u=H.bv(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ed(a,x)},
ed:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ca(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bv:function(a){return J.ca(a,!1,null,!!a.$isn)},
k8:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bv(z)
else return J.ca(z,c,null,null)},
jY:function(){if(!0===$.c8)return
$.c8=!0
H.jZ()},
jZ:function(){var z,y,x,w,v,u,t,s
$.bs=Object.create(null)
$.bu=Object.create(null)
H.jU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ee.$1(v)
if(u!=null){t=H.k8(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jU:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.am(C.F,H.am(C.K,H.am(C.v,H.am(C.v,H.am(C.J,H.am(C.G,H.am(C.H(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ea=new H.jV(v)
$.dW=new H.jW(u)
$.ee=new H.jX(t)},
am:function(a,b){return a(b)||b},
kb:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hj:{"^":"c;a,b,c,d,e,f,r,x",p:{
hk:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ay(z)
y=z[0]
x=z[1]
return new H.hj(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hM:{"^":"c;a,b,c,d,e,f",
O:function(a){var z,y,x
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
U:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bo:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dm:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h6:{"^":"D;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
d0:function(a,b){return new H.h6(a,b==null?null:b.method)}}},
fH:{"^":"D;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bO:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fH(a,y,z?null:b.receiver)}}},
hO:{"^":"D;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kd:{"^":"h:0;a",
$1:function(a){if(!!J.o(a).$isD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dM:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaF:1},
h:{"^":"c;",
k:function(a){return"Closure '"+H.aE(this).trim()+"'"},
gcb:function(){return this},
gcb:function(){return this}},
db:{"^":"h;"},
hx:{"^":"db;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bE:{"^":"db;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aD(this.a)
else y=typeof z!=="object"?J.Y(z):H.aD(z)
return(y^H.aD(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aE(z)+"'")},
p:{
bF:function(a){return a.a},
cx:function(a){return a.c},
b6:function(a){var z,y,x,w,v
z=new H.bE("self","target","receiver","name")
y=J.ay(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
f4:{"^":"D;a",
k:function(a){return this.a},
p:{
f5:function(a,b){return new H.f4("CastError: "+H.b(P.bJ(a))+": type '"+H.jE(a)+"' is not a subtype of type '"+b+"'")}}},
ho:{"^":"D;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hp:function(a){return new H.ho(a)}}},
ds:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.Y(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.ds&&J.G(this.a,b.a)}},
cS:{"^":"bS;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gK:function(a){return new H.fO(this,[H.y(this,0)])},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bb(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bb(y,b)}else return this.dQ(b)},
dQ:function(a){var z=this.d
if(z==null)return!1
return this.aE(this.av(z,J.Y(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ag(z,b)
x=y==null?null:y.ga8()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ag(w,b)
x=y==null?null:y.ga8()
return x}else return this.dR(b)},
dR:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.av(z,J.Y(a)&0x3ffffff)
x=this.aE(y,a)
if(x<0)return
return y[x].ga8()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ay()
this.b=z}this.b5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ay()
this.c=y}this.b5(y,b,c)}else{x=this.d
if(x==null){x=this.ay()
this.d=x}w=J.Y(b)&0x3ffffff
v=this.av(x,w)
if(v==null)this.aC(x,w,[this.ap(b,c)])
else{u=this.aE(v,b)
if(u>=0)v[u].sa8(c)
else v.push(this.ap(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.H(this))
z=z.c}},
b5:function(a,b,c){var z=this.ag(a,b)
if(z==null)this.aC(a,b,this.ap(b,c))
else z.sa8(c)},
b6:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.fN(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b6()
return z},
aE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].gdP(),b))return y
return-1},
k:function(a){return P.cW(this)},
ag:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
cY:function(a,b){delete a[b]},
bb:function(a,b){return this.ag(a,b)!=null},
ay:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.cY(z,"<non-identifier-key>")
return z}},
fN:{"^":"c;dP:a<,a8:b@,c,d"},
fO:{"^":"bH;a,$ti",
gi:function(a){return this.a.a},
gJ:function(a){var z,y
z=this.a
y=new H.a7(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.H(z))
y=y.c}}},
a7:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.H(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jV:{"^":"h:0;a",
$1:function(a){return this.a(a)}},
jW:{"^":"h:11;a",
$2:function(a,b){return this.a(a,b)}},
jX:{"^":"h:12;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jL:function(a){return J.ay(H.x(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
W:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.ae(b,a))},
h2:{"^":"f;","%":"DataView;ArrayBufferView;bT|dG|dH|cY|dI|dJ|a8"},
bT:{"^":"h2;",
gi:function(a){return a.length},
$ism:1,
$asm:I.an,
$isn:1,
$asn:I.an},
cY:{"^":"dH;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
j:function(a,b,c){H.W(b,a,a.length)
a[b]=c},
$asb9:function(){return[P.af]},
$asj:function(){return[P.af]},
$isi:1,
$asi:function(){return[P.af]},
"%":"Float64Array"},
a8:{"^":"dJ;",
j:function(a,b,c){H.W(b,a,a.length)
a[b]=c},
$asb9:function(){return[P.F]},
$asj:function(){return[P.F]},
$isi:1,
$asi:function(){return[P.F]}},
h1:{"^":"cY;",$isbK:1,"%":"Float32Array"},
lK:{"^":"a8;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lL:{"^":"a8;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
$isfA:1,
"%":"Int32Array"},
lM:{"^":"a8;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lN:{"^":"a8;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lO:{"^":"a8;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lP:{"^":"a8;",
gi:function(a){return a.length},
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lQ:{"^":"a8;",
gi:function(a){return a.length},
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dG:{"^":"bT+j;"},
dH:{"^":"dG+b9;"},
dI:{"^":"bT+j;"},
dJ:{"^":"dI+b9;"}}],["","",,P,{"^":"",
hW:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jG()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a2(new P.hY(z),1)).observe(y,{childList:true})
return new P.hX(z,y,x)}else if(self.setImmediate!=null)return P.jH()
return P.jI()},
mD:[function(a){self.scheduleImmediate(H.a2(new P.hZ(a),0))},"$1","jG",4,0,7],
mE:[function(a){self.setImmediate(H.a2(new P.i_(a),0))},"$1","jH",4,0,7],
mF:[function(a){P.j9(0,a)},"$1","jI",4,0,7],
jz:function(a,b){if(H.e0(a,{func:1,args:[P.aU,P.aU]})){b.toString
return a}else{b.toString
return a}},
jy:function(){var z,y
for(;z=$.al,z!=null;){$.aK=null
y=z.b
$.al=y
if(y==null)$.aJ=null
z.a.$0()}},
mP:[function(){$.c1=!0
try{P.jy()}finally{$.aK=null
$.c1=!1
if($.al!=null)$.$get$bX().$1(P.dZ())}},"$0","dZ",0,0,3],
dU:function(a){var z=new P.dx(a,null)
if($.al==null){$.aJ=z
$.al=z
if(!$.c1)$.$get$bX().$1(P.dZ())}else{$.aJ.b=z
$.aJ=z}},
jD:function(a){var z,y,x
z=$.al
if(z==null){P.dU(a)
$.aK=$.aJ
return}y=new P.dx(a,null)
x=$.aK
if(x==null){y.b=z
$.aK=y
$.al=y}else{y.b=x.b
x.b=y
$.aK=y
if(y.b==null)$.aJ=y}},
ka:function(a){var z=$.u
if(C.h===z){P.br(null,null,C.h,a)
return}z.toString
P.br(null,null,z,z.bt(a))},
jC:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.O(u)
y=H.ag(u)
$.u.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.as(x)
w=t
v=x.gY()
c.$2(w,v)}}},
jr:function(a,b,c,d){var z=a.dv(0)
if(!!J.o(z).$isaT&&z!==$.$get$cO())z.ea(new P.ju(b,c,d))
else b.a3(c,d)},
js:function(a,b){return new P.jt(a,b)},
hU:function(){return $.u},
bq:function(a,b,c,d,e){var z={}
z.a=d
P.jD(new P.jA(z,e))},
dS:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
dT:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
jB:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
br:function(a,b,c,d){var z=C.h!==c
if(z)d=!(!z||!1)?c.bt(d):c.dr(d)
P.dU(d)},
hY:{"^":"h:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hX:{"^":"h:13;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hZ:{"^":"h:1;a",
$0:function(){this.a.$0()}},
i_:{"^":"h:1;a",
$0:function(){this.a.$0()}},
j8:{"^":"c;a,b,c",
cU:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a2(new P.ja(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
j9:function(a,b){var z=new P.j8(!0,null,0)
z.cU(a,b)
return z}}},
ja:{"^":"h:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kq:{"^":"c;$ti"},
i2:{"^":"c;$ti"},
j3:{"^":"i2;a,$ti",
dB:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bV("Future already completed"))
z.af(b)}},
dz:{"^":"c;aA:a<,b,c,d,e,$ti",
gdi:function(){return this.b.b},
gbN:function(){return(this.c&1)!==0},
gdO:function(){return(this.c&2)!==0},
gbM:function(){return this.c===8},
dM:function(a){return this.b.b.aL(this.d,a)},
dS:function(a){if(this.c!==6)return!0
return this.b.b.aL(this.d,J.as(a))},
dL:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.e0(z,{func:1,args:[P.c,P.aF]}))return x.dZ(z,y.gL(a),a.gY())
else return x.aL(z,y.gL(a))},
dN:function(){return this.b.b.bT(this.d)}},
ac:{"^":"c;bi:a<,b,d7:c<,$ti",
cQ:function(a,b){this.a=4
this.c=a},
gd2:function(){return this.a===2},
gaw:function(){return this.a>=4},
bV:function(a,b){var z,y,x
z=$.u
if(z!==C.h){z.toString
if(b!=null)b=P.jz(b,z)}y=new P.ac(0,z,null,[null])
x=b==null?1:3
this.aq(new P.dz(null,y,x,a,b,[H.y(this,0),null]))
return y},
bU:function(a){return this.bV(a,null)},
ea:function(a){var z,y
z=$.u
y=new P.ac(0,z,null,this.$ti)
if(z!==C.h)z.toString
z=H.y(this,0)
this.aq(new P.dz(null,y,8,a,null,[z,z]))
return y},
aq:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaw()){y.aq(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.br(null,null,z,new P.ii(this,a))}},
bf:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaA()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaw()){v.bf(a)
return}this.a=v.a
this.c=v.c}z.a=this.aB(a)
y=this.b
y.toString
P.br(null,null,y,new P.io(z,this))}},
ah:function(){var z=this.c
this.c=null
return this.aB(z)},
aB:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaA()
z.a=y}return y},
af:function(a){var z,y,x
z=this.$ti
y=H.e_(a,"$isaT",z,"$asaT")
if(y){z=H.e_(a,"$isac",z,null)
if(z)P.dA(a,this)
else P.ij(a,this)}else{x=this.ah()
this.a=4
this.c=a
P.aI(this,x)}},
a3:[function(a,b){var z=this.ah()
this.a=8
this.c=new P.b5(a,b)
P.aI(this,z)},function(a){return this.a3(a,null)},"ed","$2","$1","gba",4,2,14],
$isaT:1,
p:{
ij:function(a,b){var z,y,x
b.a=1
try{a.bV(new P.ik(b),new P.il(b))}catch(x){z=H.O(x)
y=H.ag(x)
P.ka(new P.im(b,z,y))}},
dA:function(a,b){var z
for(;a.gd2();)a=a.c
if(a.gaw()){z=b.ah()
b.a=a.a
b.c=a.c
P.aI(b,z)}else{z=b.c
b.a=2
b.c=a
a.bf(z)}},
aI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.as(v)
t=v.gY()
y.toString
P.bq(null,null,y,u,t)}return}for(;b.gaA()!=null;b=s){s=b.a
b.a=null
P.aI(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbN()||b.gbM()){q=b.gdi()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.as(v)
t=v.gY()
y.toString
P.bq(null,null,y,u,t)
return}p=$.u
if(p==null?q!=null:p!==q)$.u=q
else p=null
if(b.gbM())new P.ir(z,x,b,w).$0()
else if(y){if(b.gbN())new P.iq(x,b,r).$0()}else if(b.gdO())new P.ip(z,x,b).$0()
if(p!=null)$.u=p
y=x.b
if(!!J.o(y).$isaT){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aB(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dA(y,o)
return}}o=b.b
b=o.ah()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
ii:{"^":"h:1;a,b",
$0:function(){P.aI(this.a,this.b)}},
io:{"^":"h:1;a,b",
$0:function(){P.aI(this.b,this.a.a)}},
ik:{"^":"h:0;a",
$1:function(a){var z=this.a
z.a=0
z.af(a)}},
il:{"^":"h:15;a",
$2:function(a,b){this.a.a3(a,b)},
$1:function(a){return this.$2(a,null)}},
im:{"^":"h:1;a,b,c",
$0:function(){this.a.a3(this.b,this.c)}},
ir:{"^":"h:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dN()}catch(w){y=H.O(w)
x=H.ag(w)
if(this.d){v=J.as(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b5(y,x)
u.a=!0
return}if(!!J.o(z).$isaT){if(z instanceof P.ac&&z.gbi()>=4){if(z.gbi()===8){v=this.b
v.b=z.gd7()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bU(new P.is(t))
v.a=!1}}},
is:{"^":"h:0;a",
$1:function(a){return this.a}},
iq:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dM(this.c)}catch(x){z=H.O(x)
y=H.ag(x)
w=this.a
w.b=new P.b5(z,y)
w.a=!0}}},
ip:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dS(z)===!0&&w.e!=null){v=this.b
v.b=w.dL(z)
v.a=!1}}catch(u){y=H.O(u)
x=H.ag(u)
w=this.a
v=J.as(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b5(y,x)
s.a=!0}}},
dx:{"^":"c;a,b"},
d8:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.ac(0,$.u,null,[null])
z.a=null
z.a=this.bQ(new P.hE(z,this,b,y),!0,new P.hF(y),y.gba())
return y},
gi:function(a){var z,y
z={}
y=new P.ac(0,$.u,null,[P.F])
z.a=0
this.bQ(new P.hG(z),!0,new P.hH(z,y),y.gba())
return y}},
hE:{"^":"h;a,b,c,d",
$1:function(a){P.jC(new P.hC(this.c,a),new P.hD(),P.js(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.c7(this.b,"d8",0)]}}},
hC:{"^":"h:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hD:{"^":"h:0;",
$1:function(a){}},
hF:{"^":"h:1;a",
$0:function(){this.a.af(null)}},
hG:{"^":"h:0;a",
$1:function(a){++this.a.a}},
hH:{"^":"h:1;a,b",
$0:function(){this.b.af(this.a.a)}},
hB:{"^":"c;$ti"},
ju:{"^":"h:1;a,b,c",
$0:function(){return this.a.a3(this.b,this.c)}},
jt:{"^":"h:16;a,b",
$2:function(a,b){P.jr(this.a,this.b,a,b)}},
b5:{"^":"c;L:a>,Y:b<",
k:function(a){return H.b(this.a)},
$isD:1},
jg:{"^":"c;"},
jA:{"^":"h:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.d1()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.at(y)
throw x}},
iN:{"^":"jg;",
e_:function(a){var z,y,x
try{if(C.h===$.u){a.$0()
return}P.dS(null,null,this,a)}catch(x){z=H.O(x)
y=H.ag(x)
P.bq(null,null,this,z,y)}},
e0:function(a,b){var z,y,x
try{if(C.h===$.u){a.$1(b)
return}P.dT(null,null,this,a,b)}catch(x){z=H.O(x)
y=H.ag(x)
P.bq(null,null,this,z,y)}},
dr:function(a){return new P.iP(this,a)},
bt:function(a){return new P.iO(this,a)},
ds:function(a){return new P.iQ(this,a)},
bT:function(a){if($.u===C.h)return a.$0()
return P.dS(null,null,this,a)},
aL:function(a,b){if($.u===C.h)return a.$1(b)
return P.dT(null,null,this,a,b)},
dZ:function(a,b,c){if($.u===C.h)return a.$2(b,c)
return P.jB(null,null,this,a,b,c)}},
iP:{"^":"h:1;a,b",
$0:function(){return this.a.bT(this.b)}},
iO:{"^":"h:1;a,b",
$0:function(){return this.a.e_(this.b)}},
iQ:{"^":"h:0;a,b",
$1:function(a){return this.a.e0(this.b,a)}}}],["","",,P,{"^":"",
T:function(){return new H.cS(0,null,null,null,null,null,0,[null,null])},
bP:function(a){return H.jM(a,new H.cS(0,null,null,null,null,null,0,[null,null]))},
P:function(a,b,c,d){return new P.iA(0,null,null,null,null,null,0,[d])},
fB:function(a,b,c){var z,y
if(P.c2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aL()
y.push(a)
try{P.jx(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.d9(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bL:function(a,b,c){var z,y,x
if(P.c2(a))return b+"..."+c
z=new P.bW(b)
y=$.$get$aL()
y.push(a)
try{x=z
x.a=P.d9(x.gZ(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gZ()+c
y=z.gZ()
return y.charCodeAt(0)==0?y:y},
c2:function(a){var z,y
for(z=0;y=$.$get$aL(),z<y.length;++z)if(a===y[z])return!0
return!1},
jx:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gJ(a)
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
bQ:function(a,b){var z,y
z=P.P(null,null,null,b)
for(y=J.aQ(a);y.t();)z.I(0,y.gA(y))
return z},
cW:function(a){var z,y,x
z={}
if(P.c2(a))return"{...}"
y=new P.bW("")
try{$.$get$aL().push(a)
x=y
x.a=x.gZ()+"{"
z.a=!0
J.ci(a,new P.fP(z,y))
z=y
z.a=z.gZ()+"}"}finally{z=$.$get$aL()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gZ()
return z.charCodeAt(0)==0?z:z},
iA:{"^":"iu;a,b,c,d,e,f,r,$ti",
gJ:function(a){var z=new P.c_(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cX(b)},
cX:function(a){var z=this.d
if(z==null)return!1
return this.au(z[this.ar(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.H(this))
z=z.b}},
I:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c0()
this.b=z}return this.b7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c0()
this.c=y}return this.b7(y,b)}else return this.cV(0,b)},
cV:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c0()
this.d=z}y=this.ar(b)
x=z[y]
if(x==null)z[y]=[this.az(b)]
else{if(this.au(x,b)>=0)return!1
x.push(this.az(b))}return!0},
bS:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bg(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bg(this.c,b)
else return this.d4(0,b)},
d4:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ar(b)]
x=this.au(y,b)
if(x<0)return!1
this.bk(y.splice(x,1)[0])
return!0},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ax()}},
b7:function(a,b){if(a[b]!=null)return!1
a[b]=this.az(b)
return!0},
bg:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bk(z)
delete a[b]
return!0},
ax:function(){this.r=this.r+1&67108863},
az:function(a){var z,y
z=new P.iB(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ax()
return z},
bk:function(a){var z,y
z=a.gd3()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ax()},
ar:function(a){return J.Y(a)&0x3ffffff},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].gcZ(),b))return y
return-1},
p:{
c0:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iB:{"^":"c;cZ:a<,b,d3:c<"},
c_:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.H(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iu:{"^":"hq;$ti"},
ly:{"^":"c;$ti"},
cU:{"^":"dF;$ti",$isi:1},
j:{"^":"c;$ti",
gJ:function(a){return new H.cV(a,this.gi(a),0,null,[H.b1(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.H(a))}},
dK:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.H(a))}return y},
aV:function(a,b){return H.da(a,b,null,H.b1(this,a,"j",0))},
l:function(a,b){var z=H.x([],[H.b1(this,a,"j",0)])
C.d.si(z,C.b.l(this.gi(a),C.b.gi(b)))
C.d.ac(z,0,this.gi(a),a)
C.d.ac(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bL(a,"[","]")}},
bS:{"^":"L;$ti"},
fP:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
L:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aQ(this.gK(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.Z(this.gK(a))},
k:function(a){return P.cW(a)}},
hr:{"^":"c;$ti",
N:function(a,b){var z
for(z=J.aQ(b);z.t();)this.I(0,z.gA(z))},
k:function(a){return P.bL(this,"{","}")},
v:function(a,b){var z
for(z=new P.c_(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hq:{"^":"hr;$ti"},
dF:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fr:function(a){var z=J.o(a)
if(!!z.$ish)return z.k(a)
return"Instance of '"+H.aE(a)+"'"},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fr(a)},
cL:function(a){return new P.ie(a)},
ah:function(a){H.bw(H.b(a))},
c3:{"^":"c;"},
"+bool":0,
cC:{"^":"c;dh:a<,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.cC))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.gdh())},
gw:function(a){var z=this.a
return(z^C.b.bh(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fg(H.hh(this))
y=P.aR(H.hf(this))
x=P.aR(H.hb(this))
w=P.aR(H.hc(this))
v=P.aR(H.he(this))
u=P.aR(H.hg(this))
t=P.fh(H.hd(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fg:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aR:function(a){if(a>=10)return""+a
return"0"+a}}},
af:{"^":"aN;"},
"+double":0,
aS:{"^":"c;a4:a<",
l:function(a,b){return new P.aS(C.b.l(this.a,b.ga4()))},
H:function(a,b){return new P.aS(this.a-b.ga4())},
T:function(a,b){return C.b.T(this.a,b.ga4())},
aa:function(a,b){return C.b.aa(this.a,b.ga4())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.ga4())},
k:function(a){var z,y,x,w,v
z=new P.fo()
y=this.a
if(y<0)return"-"+new P.aS(0-y).k(0)
x=z.$1(C.b.a_(y,6e7)%60)
w=z.$1(C.b.a_(y,1e6)%60)
v=new P.fn().$1(y%1e6)
return""+C.b.a_(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fm:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fn:{"^":"h:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fo:{"^":"h:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
D:{"^":"c;",
gY:function(){return H.ag(this.$thrownJsError)}},
d1:{"^":"D;",
k:function(a){return"Throw of null."}},
ai:{"^":"D;a,b,c,d",
gat:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gas:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gat()+y+x
if(!this.a)return w
v=this.gas()
u=P.bJ(this.b)
return w+v+": "+H.b(u)},
p:{
eY:function(a,b,c){return new P.ai(!0,a,b,c)}}},
d3:{"^":"ai;e,f,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bg:function(a,b,c){return new P.d3(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.d3(b,c,!0,a,d,"Invalid value")},
hi:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.ak(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.ak(b,a,c,"end",f))
return b}}},
fz:{"^":"ai;e,i:f>,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){if(J.aP(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.Z(b)
return new P.fz(b,z,!0,a,c,"Index out of range")}}},
hP:{"^":"D;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.hP(a)}}},
hN:{"^":"D;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dv:function(a){return new P.hN(a)}}},
bj:{"^":"D;a",
k:function(a){return"Bad state: "+this.a},
p:{
bV:function(a){return new P.bj(a)}}},
fb:{"^":"D;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bJ(z))+"."},
p:{
H:function(a){return new P.fb(a)}}},
d6:{"^":"c;",
k:function(a){return"Stack Overflow"},
gY:function(){return},
$isD:1},
ff:{"^":"D;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kT:{"^":"c;"},
ie:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
F:{"^":"aN;"},
"+int":0,
bb:{"^":"c;$ti",
aM:["co",function(a,b){return new H.dw(this,b,[H.c7(this,"bb",0)])}],
v:function(a,b){var z
for(z=this.gJ(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gJ(this)
for(y=0;z.t();)++y
return y},
gX:function(a){var z,y
z=this.gJ(this)
if(!z.t())throw H.a(H.fC())
y=z.gA(z)
if(z.t())throw H.a(H.fE())
return y},
q:function(a,b){var z,y,x
if(b<0)H.N(P.ak(b,0,null,"index",null))
for(z=this.gJ(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.fB(this,"(",")")}},
fF:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
bR:{"^":"c;$ti"},
aU:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aN:{"^":"c;"},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gw:function(a){return H.aD(this)},
k:function(a){return"Instance of '"+H.aE(this)+"'"},
toString:function(){return this.k(this)}},
aF:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
bW:{"^":"c;Z:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d9:function(a,b,c){var z=J.aQ(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.t())}else{a+=H.b(z.gA(z))
for(;z.t();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
b_:function(){return document},
fp:function(a,b,c){var z,y
z=document.body
y=(z&&C.t).R(z,a,b,c)
y.toString
z=new H.dw(new W.Q(y),new W.fq(),[W.r])
return z.gX(z)},
cK:function(a){return"wheel"},
av:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eC(a)
if(typeof y==="string")z=a.tagName}catch(x){H.O(x)}return z},
ib:function(a,b){return document.createElement(a)},
ad:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dR:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.i5(a)
if(!!J.o(z).$isA)return z
return}else return a},
dV:function(a){var z=$.u
if(z===C.h)return a
return z.ds(a)},
q:{"^":"aj;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ke:{"^":"bU;m:x=,n:y=,B:z=","%":"Accelerometer|LinearAccelerationSensor"},
kf:{"^":"f;i:length=","%":"AccessibleNodeList"},
kg:{"^":"q;aj:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kh:{"^":"q;aj:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kl:{"^":"q;aj:href}","%":"HTMLBaseElement"},
bD:{"^":"q;",$isbD:1,"%":"HTMLBodyElement"},
km:{"^":"q;G:name=,M:value=","%":"HTMLButtonElement"},
kn:{"^":"q;E:height},F:width}",
cc:function(a,b,c){var z=a.getContext(b,P.jJ(c,null))
return z},
"%":"HTMLCanvasElement"},
ko:{"^":"f;",
an:function(a){return P.M(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kp:{"^":"r;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kr:{"^":"S;V:style=","%":"CSSFontFaceRule"},
ks:{"^":"S;V:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kt:{"^":"S;V:style=","%":"CSSPageRule"},
ku:{"^":"b7;i:length=","%":"CSSPerspective"},
kv:{"^":"bG;m:x=,n:y=","%":"CSSPositionValue"},
kw:{"^":"b7;m:x=,n:y=,B:z=","%":"CSSRotation"},
S:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kx:{"^":"b7;m:x=,n:y=,B:z=","%":"CSSScale"},
fd:{"^":"i3;i:length=",
b8:function(a,b){var z,y
z=$.$get$cA()
y=z[b]
if(typeof y==="string")return y
y=this.de(a,b)
z[b]=y
return y},
de:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fi()+b
if(z in a)return z
return b},
da:function(a,b,c,d){a.setProperty(b,c,d)},
sE:function(a,b){a.height=b},
sF:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fe:{"^":"c;",
sdJ:function(a,b){this.da(a,this.b8(a,"float"),b,"")}},
ky:{"^":"S;V:style=","%":"CSSStyleRule"},
bG:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b7:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kz:{"^":"bG;i:length=","%":"CSSTransformValue"},
kA:{"^":"b7;m:x=,n:y=,B:z=","%":"CSSTranslation"},
kB:{"^":"bG;i:length=","%":"CSSUnparsedValue"},
kC:{"^":"S;V:style=","%":"CSSViewportRule"},
kD:{"^":"q;M:value=","%":"HTMLDataElement"},
kE:{"^":"f;i:length=","%":"DataTransferItemList"},
kF:{"^":"f;m:x=,n:y=,B:z=","%":"DeviceAcceleration"},
fj:{"^":"q;","%":"HTMLDivElement"},
kG:{"^":"r;",
gaG:function(a){return new W.aZ(a,"mousedown",!1,[W.I])},
gaH:function(a){return new W.aZ(a,"mousemove",!1,[W.I])},
gaI:function(a){return new W.aZ(a,"mouseup",!1,[W.I])},
gaJ:function(a){return new W.aZ(a,W.cK(a),!1,[W.aH])},
"%":"Document|HTMLDocument|XMLDocument"},
kH:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
kI:{"^":"fk;",
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z},
"%":"DOMPoint"},
fk:{"^":"f;",
gm:function(a){return a.x},
gn:function(a){return a.y},
gB:function(a){return a.z},
"%":";DOMPointReadOnly"},
kJ:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a1]},
$isn:1,
$asn:function(){return[P.a1]},
$asj:function(){return[P.a1]},
$isi:1,
$asi:function(){return[P.a1]},
$ask:function(){return[P.a1]},
"%":"ClientRectList|DOMRectList"},
fl:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gF(a))+" x "+H.b(this.gE(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa1)return!1
return a.left===z.gbO(b)&&a.top===z.gbW(b)&&this.gF(a)===z.gF(b)&&this.gE(a)===z.gE(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gF(a)
w=this.gE(a)
return W.dE(W.ad(W.ad(W.ad(W.ad(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbX:function(a){return new P.a9(a.left,a.top,[null])},
gE:function(a){return a.height},
gbO:function(a){return a.left},
gbW:function(a){return a.top},
gF:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa1:1,
$asa1:I.an,
"%":";DOMRectReadOnly"},
kK:{"^":"i9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kL:{"^":"f;i:length=","%":"DOMTokenList"},
aj:{"^":"r;V:style=,be:namespaceURI=,e1:tagName=",
gdm:function(a){return new W.ia(a)},
k:function(a){return a.localName},
R:["ao",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cJ
if(z==null){z=H.x([],[W.cZ])
y=new W.d_(z)
z.push(W.dB(null))
z.push(W.dN())
$.cJ=y
d=y}else d=z
z=$.cI
if(z==null){z=new W.dQ(d)
$.cI=z
c=z}else{z.a=d
c=z}}if($.a_==null){z=document
y=z.implementation.createHTMLDocument("")
$.a_=y
$.bI=y.createRange()
y=$.a_
y.toString
x=y.createElement("base")
J.eN(x,z.baseURI)
$.a_.head.appendChild(x)}z=$.a_
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a_
if(!!this.$isbD)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a_.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.d.u(C.N,a.tagName)){$.bI.selectNodeContents(w)
v=$.bI.createContextualFragment(b)}else{w.innerHTML=b
v=$.a_.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a_.body
if(w==null?z!=null:w!==z)J.co(w)
c.aT(v)
document.adoptNode(v)
return v},function(a,b,c){return this.R(a,b,c,null)},"dD",null,null,"gee",5,5,null],
cf:function(a,b,c,d){a.textContent=null
a.appendChild(this.R(a,b,c,d))},
ce:function(a,b){return this.cf(a,b,null,null)},
aN:function(a){return a.getBoundingClientRect()},
gaG:function(a){return new W.aa(a,"mousedown",!1,[W.I])},
gaH:function(a){return new W.aa(a,"mousemove",!1,[W.I])},
gaI:function(a){return new W.aa(a,"mouseup",!1,[W.I])},
gaJ:function(a){return new W.aa(a,W.cK(a),!1,[W.aH])},
$isaj:1,
"%":";Element"},
fq:{"^":"h:0;",
$1:function(a){return!!J.o(a).$isaj}},
kR:{"^":"q;E:height},G:name=,F:width}","%":"HTMLEmbedElement"},
kS:{"^":"a6;L:error=","%":"ErrorEvent"},
a6:{"^":"f;",
am:function(a){return a.preventDefault()},
$isa6:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
A:{"^":"f;",
bp:["cm",function(a,b,c,d){if(c!=null)this.cW(a,b,c,!1)}],
cW:function(a,b,c,d){return a.addEventListener(b,H.a2(c,1),!1)},
d5:function(a,b,c,d){return a.removeEventListener(b,H.a2(c,1),!1)},
$isA:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dK|dL|dO|dP"},
lb:{"^":"q;G:name=","%":"HTMLFieldSetElement"},
lc:{"^":"ih;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b8]},
$isn:1,
$asn:function(){return[W.b8]},
$asj:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$ask:function(){return[W.b8]},
"%":"FileList"},
ld:{"^":"A;L:error=","%":"FileReader"},
le:{"^":"A;L:error=,i:length=","%":"FileWriter"},
lg:{"^":"f;V:style=","%":"FontFace"},
lh:{"^":"A;",
ef:function(a,b,c){return a.forEach(H.a2(b,3),c)},
v:function(a,b){b=H.a2(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lj:{"^":"q;i:length=,G:name=","%":"HTMLFormElement"},
ll:{"^":"bU;m:x=,n:y=,B:z=","%":"Gyroscope"},
lm:{"^":"f;i:length=","%":"History"},
ln:{"^":"iw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lo:{"^":"q;E:height},G:name=,F:width}","%":"HTMLIFrameElement"},
lp:{"^":"q;E:height},F:width}","%":"HTMLImageElement"},
lr:{"^":"q;E:height},G:name=,M:value=,e7:valueAsNumber=,F:width}","%":"HTMLInputElement"},
bc:{"^":"dt;",
geb:function(a){return a.which},
$isbc:1,
"%":"KeyboardEvent"},
lv:{"^":"q;M:value=","%":"HTMLLIElement"},
lx:{"^":"q;aj:href}","%":"HTMLLinkElement"},
lz:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lA:{"^":"bU;m:x=,n:y=,B:z=","%":"Magnetometer"},
lB:{"^":"q;G:name=","%":"HTMLMapElement"},
fS:{"^":"q;L:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lD:{"^":"f;i:length=","%":"MediaList"},
lE:{"^":"A;",
bp:function(a,b,c,d){if(J.G(b,"message"))a.start()
this.cm(a,b,c,!1)},
"%":"MessagePort"},
lF:{"^":"q;G:name=","%":"HTMLMetaElement"},
lG:{"^":"q;M:value=","%":"HTMLMeterElement"},
lH:{"^":"iC;",
h:function(a,b){return P.M(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.M(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.fU(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"MIDIInputMap"},
fU:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
lI:{"^":"iD;",
h:function(a,b){return P.M(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.M(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.fV(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
fV:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
lJ:{"^":"iF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.be]},
$isn:1,
$asn:function(){return[W.be]},
$asj:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"MimeTypeArray"},
I:{"^":"dt;by:button=",
gbR:function(a){var z,y,x
if(!!a.offsetX)return new P.a9(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.dR(z)).$isaj)throw H.a(P.p("offsetX is only supported on elements"))
y=W.dR(z)
z=[null]
x=new P.a9(a.clientX,a.clientY,z).H(0,J.eD(J.eH(y)))
return new P.a9(J.cp(x.a),J.cp(x.b),z)}},
$isI:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
Q:{"^":"cU;a",
gX:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bV("No elements"))
if(y>1)throw H.a(P.bV("More than one element"))
return z.firstChild},
N:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gJ:function(a){var z=this.a.childNodes
return new W.cM(z,z.length,-1,null,[H.b1(C.Q,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$ascU:function(){return[W.r]},
$asj:function(){return[W.r]},
$asi:function(){return[W.r]},
$asdF:function(){return[W.r]}},
r:{"^":"A;al:parentNode=,aK:previousSibling=",
gdU:function(a){return new W.Q(a)},
dW:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cn(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
lR:{"^":"f;",
dV:[function(a){return a.previousNode()},"$0","gaK",1,0,5],
"%":"NodeIterator"},
h3:{"^":"iH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lU:{"^":"q;E:height},G:name=,F:width}","%":"HTMLObjectElement"},
lW:{"^":"q;M:value=","%":"HTMLOptionElement"},
lX:{"^":"q;G:name=,M:value=","%":"HTMLOutputElement"},
lY:{"^":"q;G:name=,M:value=","%":"HTMLParamElement"},
aV:{"^":"f;i:length=","%":"Plugin"},
m_:{"^":"iL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aV]},
$isn:1,
$asn:function(){return[W.aV]},
$asj:function(){return[W.aV]},
$isi:1,
$asi:function(){return[W.aV]},
$ask:function(){return[W.aV]},
"%":"PluginArray"},
m2:{"^":"q;M:value=","%":"HTMLProgressElement"},
m3:{"^":"f;",
aN:function(a){return a.getBoundingClientRect()},
"%":"Range"},
m9:{"^":"iR;",
h:function(a,b){return P.M(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.M(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.hn(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hn:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
ma:{"^":"q;i:length=,G:name=,M:value=","%":"HTMLSelectElement"},
bU:{"^":"A;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mb:{"^":"a6;L:error=","%":"SensorErrorEvent"},
mc:{"^":"q;G:name=","%":"HTMLSlotElement"},
md:{"^":"dL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bh]},
$isn:1,
$asn:function(){return[W.bh]},
$asj:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$ask:function(){return[W.bh]},
"%":"SourceBufferList"},
me:{"^":"iX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"SpeechGrammarList"},
mf:{"^":"a6;L:error=","%":"SpeechRecognitionError"},
aX:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mh:{"^":"j_;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new W.hA(z))
return z},
gi:function(a){return a.length},
$asL:function(){return[P.l,P.l]},
"%":"Storage"},
hA:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
hJ:{"^":"q;",
R:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=W.fp("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.Q(y).N(0,J.eA(z))
return y},
"%":"HTMLTableElement"},
mk:{"^":"q;",
R:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.gX(z)
x.toString
z=new W.Q(x)
w=z.gX(z)
y.toString
w.toString
new W.Q(y).N(0,new W.Q(w))
return y},
"%":"HTMLTableRowElement"},
ml:{"^":"q;",
R:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.gX(z)
y.toString
x.toString
new W.Q(y).N(0,new W.Q(x))
return y},
"%":"HTMLTableSectionElement"},
dc:{"^":"q;",$isdc:1,"%":"HTMLTemplateElement"},
mm:{"^":"q;G:name=,M:value=","%":"HTMLTextAreaElement"},
mo:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"TextTrackCueList"},
mp:{"^":"dP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bl]},
$isn:1,
$asn:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$ask:function(){return[W.bl]},
"%":"TextTrackList"},
mq:{"^":"f;i:length=","%":"TimeRanges"},
mr:{"^":"jc;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bn]},
$isn:1,
$asn:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ask:function(){return[W.bn]},
"%":"TouchList"},
ms:{"^":"f;i:length=","%":"TrackDefaultList"},
mv:{"^":"f;",
eg:[function(a){return a.parentNode()},"$0","gal",1,0,5],
dV:[function(a){return a.previousNode()},"$0","gaK",1,0,5],
"%":"TreeWalker"},
dt:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mx:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mz:{"^":"f;m:x=,B:z=","%":"VRStageBoundsPoint"},
mA:{"^":"fS;E:height},F:width}","%":"HTMLVideoElement"},
mB:{"^":"A;i:length=","%":"VideoTrackList"},
aH:{"^":"I;",
gdF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
hS:{"^":"A;",
gdl:function(a){var z,y
z=P.aN
y=new P.ac(0,$.u,null,[z])
this.d0(a)
this.d6(a,W.dV(new W.hT(new P.j3(y,[z]))))
return y},
d6:function(a,b){return a.requestAnimationFrame(H.a2(b,1))},
d0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hT:{"^":"h:0;a",
$1:function(a){this.a.dB(0,a)}},
mC:{"^":"A;"},
mG:{"^":"r;G:name=,be:namespaceURI=","%":"Attr"},
mH:{"^":"ji;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.S]},
$isn:1,
$asn:function(){return[W.S]},
$asj:function(){return[W.S]},
$isi:1,
$asi:function(){return[W.S]},
$ask:function(){return[W.S]},
"%":"CSSRuleList"},
mI:{"^":"fl;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa1)return!1
return a.left===z.gbO(b)&&a.top===z.gbW(b)&&a.width===z.gF(b)&&a.height===z.gE(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dE(W.ad(W.ad(W.ad(W.ad(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbX:function(a){return new P.a9(a.left,a.top,[null])},
gE:function(a){return a.height},
gF:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mJ:{"^":"jk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.ba]},
$isn:1,
$asn:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$ask:function(){return[W.ba]},
"%":"GamepadList"},
mM:{"^":"jm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mN:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aX]},
$isn:1,
$asn:function(){return[W.aX]},
$asj:function(){return[W.aX]},
$isi:1,
$asi:function(){return[W.aX]},
$ask:function(){return[W.aX]},
"%":"SpeechRecognitionResultList"},
mO:{"^":"jq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bk]},
$isn:1,
$asn:function(){return[W.bk]},
$asj:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$ask:function(){return[W.bk]},
"%":"StyleSheetList"},
i0:{"^":"bS;d1:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gK(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.a5)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gK:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.x([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbe(v)==null)y.push(u.gG(v))}return y},
$asbS:function(){return[P.l,P.l]},
$asL:function(){return[P.l,P.l]}},
ia:{"^":"i0;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gK(this).length}},
aZ:{"^":"d8;a,b,c,$ti",
bQ:function(a,b,c,d){return W.ab(this.a,this.b,a,!1,H.y(this,0))}},
aa:{"^":"aZ;a,b,c,$ti"},
ic:{"^":"hB;a,b,c,d,e,$ti",
cP:function(a,b,c,d,e){this.df()},
dv:function(a){if(this.b==null)return
this.dg()
this.b=null
this.d=null
return},
df:function(){var z=this.d
if(z!=null&&this.a<=0)J.el(this.b,this.c,z,!1)},
dg:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ek(x,this.c,z,!1)}},
p:{
ab:function(a,b,c,d,e){var z=W.dV(new W.id(c))
z=new W.ic(0,a,b,z,!1,[e])
z.cP(a,b,c,!1,e)
return z}}},
id:{"^":"h:0;a",
$1:function(a){return this.a.$1(a)}},
bY:{"^":"c;c6:a<",
cR:function(a){var z,y
z=$.$get$bZ()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.M[y],W.jS())
for(y=0;y<12;++y)z.j(0,C.q[y],W.jT())}},
a0:function(a){return $.$get$dC().u(0,W.av(a))},
W:function(a,b,c){var z,y,x
z=W.av(a)
y=$.$get$bZ()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dB:function(a){var z,y
z=document.createElement("a")
y=new W.iS(z,window.location)
y=new W.bY(y)
y.cR(a)
return y},
mK:[function(a,b,c,d){return!0},"$4","jS",16,0,10],
mL:[function(a,b,c,d){var z,y,x,w,v
z=d.gc6()
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
return z},"$4","jT",16,0,10]}},
k:{"^":"c;$ti",
gJ:function(a){return new W.cM(a,this.gi(a),-1,null,[H.b1(this,a,"k",0)])}},
d_:{"^":"c;a",
a0:function(a){return C.d.bq(this.a,new W.h5(a))},
W:function(a,b,c){return C.d.bq(this.a,new W.h4(a,b,c))}},
h5:{"^":"h:0;a",
$1:function(a){return a.a0(this.a)}},
h4:{"^":"h:0;a,b,c",
$1:function(a){return a.W(this.a,this.b,this.c)}},
iT:{"^":"c;c6:d<",
cT:function(a,b,c,d){var z,y,x
this.a.N(0,c)
z=b.aM(0,new W.iU())
y=b.aM(0,new W.iV())
this.b.N(0,z)
x=this.c
x.N(0,C.O)
x.N(0,y)},
a0:function(a){return this.a.u(0,W.av(a))},
W:["cq",function(a,b,c){var z,y
z=W.av(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.dk(c)
else if(y.u(0,"*::"+b))return this.d.dk(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
iU:{"^":"h:0;",
$1:function(a){return!C.d.u(C.q,a)}},
iV:{"^":"h:0;",
$1:function(a){return C.d.u(C.q,a)}},
j4:{"^":"iT;e,a,b,c,d",
W:function(a,b,c){if(this.cq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cj(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
dN:function(){var z=P.l
z=new W.j4(P.bQ(C.p,z),P.P(null,null,null,z),P.P(null,null,null,z),P.P(null,null,null,z),null)
z.cT(null,new H.fQ(C.p,new W.j5(),[H.y(C.p,0),null]),["TEMPLATE"],null)
return z}}},
j5:{"^":"h:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
j2:{"^":"c;",
a0:function(a){var z=J.o(a)
if(!!z.$isd4)return!1
z=!!z.$isw
if(z&&W.av(a)==="foreignObject")return!1
if(z)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.j.cj(b,"on"))return!1
return this.a0(a)}},
cM:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ej(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
i4:{"^":"c;a",$isA:1,p:{
i5:function(a){if(a===window)return a
else return new W.i4(a)}}},
cZ:{"^":"c;"},
lS:{"^":"c;"},
mw:{"^":"c;"},
iS:{"^":"c;a,b"},
dQ:{"^":"c;a",
aT:function(a){new W.jf(this).$2(a,null)},
a5:function(a,b){if(b==null)J.co(a)
else b.removeChild(a)},
d9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cj(a)
x=y.gd1().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.O(t)}v="element unprintable"
try{v=J.at(a)}catch(t){H.O(t)}try{u=W.av(a)
this.d8(a,b,z,v,u,y,x)}catch(t){if(H.O(t) instanceof P.ai)throw t
else{this.a5(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d8:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a0(a)){this.a5(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.a5(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gK(f)
y=H.x(z.slice(0),[H.y(z,0)])
for(x=f.gK(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.W(a,J.eP(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdc)this.aT(a.content)}},
jf:{"^":"h:17;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eB(z)}catch(w){H.O(w)
v=z
if(x){u=J.e(v)
if(u.gal(v)!=null){u.gal(v)
u.gal(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
i3:{"^":"f+fe;"},
i6:{"^":"f+j;"},
i7:{"^":"i6+k;"},
i8:{"^":"f+j;"},
i9:{"^":"i8+k;"},
ig:{"^":"f+j;"},
ih:{"^":"ig+k;"},
iv:{"^":"f+j;"},
iw:{"^":"iv+k;"},
iC:{"^":"f+L;"},
iD:{"^":"f+L;"},
iE:{"^":"f+j;"},
iF:{"^":"iE+k;"},
iG:{"^":"f+j;"},
iH:{"^":"iG+k;"},
iK:{"^":"f+j;"},
iL:{"^":"iK+k;"},
iR:{"^":"f+L;"},
dK:{"^":"A+j;"},
dL:{"^":"dK+k;"},
iW:{"^":"f+j;"},
iX:{"^":"iW+k;"},
j_:{"^":"f+L;"},
j6:{"^":"f+j;"},
j7:{"^":"j6+k;"},
dO:{"^":"A+j;"},
dP:{"^":"dO+k;"},
jb:{"^":"f+j;"},
jc:{"^":"jb+k;"},
jh:{"^":"f+j;"},
ji:{"^":"jh+k;"},
jj:{"^":"f+j;"},
jk:{"^":"jj+k;"},
jl:{"^":"f+j;"},
jm:{"^":"jl+k;"},
jn:{"^":"f+j;"},
jo:{"^":"jn+k;"},
jp:{"^":"f+j;"},
jq:{"^":"jp+k;"}}],["","",,P,{"^":"",
M:function(a){var z,y,x,w,v
if(a==null)return
z=P.T()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a5)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jJ:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.ci(a,new P.jK(z))
return z},
cH:function(){var z=$.cG
if(z==null){z=J.by(window.navigator.userAgent,"Opera",0)
$.cG=z}return z},
fi:function(){var z,y
z=$.cD
if(z!=null)return z
y=$.cE
if(y==null){y=J.by(window.navigator.userAgent,"Firefox",0)
$.cE=y}if(y)z="-moz-"
else{y=$.cF
if(y==null){y=P.cH()!==!0&&J.by(window.navigator.userAgent,"Trident/",0)
$.cF=y}if(y)z="-ms-"
else z=P.cH()===!0?"-o-":"-webkit-"}$.cD=z
return z},
jK:{"^":"h:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",m8:{"^":"A;L:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mt:{"^":"A;L:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ix:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a9:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a9))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gw:function(a){var z,y
z=J.Y(this.a)
y=J.Y(this.b)
return P.ix(P.dD(P.dD(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.a9(y,C.a.l(z,x),this.$ti)},
H:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.H()
if(typeof x!=="number")return H.C(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.H()
if(typeof y!=="number")return H.C(y)
return new P.a9(z-x,w-y,this.$ti)}},
iM:{"^":"c;$ti"},
a1:{"^":"iM;$ti"}}],["","",,P,{"^":"",kU:{"^":"w;m:x=,n:y=","%":"SVGFEBlendElement"},kV:{"^":"w;m:x=,n:y=","%":"SVGFEColorMatrixElement"},kW:{"^":"w;m:x=,n:y=","%":"SVGFEComponentTransferElement"},kX:{"^":"w;m:x=,n:y=","%":"SVGFECompositeElement"},kY:{"^":"w;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},kZ:{"^":"w;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},l_:{"^":"w;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},l0:{"^":"w;m:x=,n:y=","%":"SVGFEFloodElement"},l1:{"^":"w;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},l2:{"^":"w;m:x=,n:y=","%":"SVGFEImageElement"},l3:{"^":"w;m:x=,n:y=","%":"SVGFEMergeElement"},l4:{"^":"w;m:x=,n:y=","%":"SVGFEMorphologyElement"},l5:{"^":"w;m:x=,n:y=","%":"SVGFEOffsetElement"},l6:{"^":"w;m:x=,n:y=,B:z=","%":"SVGFEPointLightElement"},l7:{"^":"w;m:x=,n:y=","%":"SVGFESpecularLightingElement"},l8:{"^":"w;m:x=,n:y=,B:z=","%":"SVGFESpotLightElement"},l9:{"^":"w;m:x=,n:y=","%":"SVGFETileElement"},la:{"^":"w;m:x=,n:y=","%":"SVGFETurbulenceElement"},lf:{"^":"w;m:x=,n:y=","%":"SVGFilterElement"},li:{"^":"aw;m:x=,n:y=","%":"SVGForeignObjectElement"},fx:{"^":"aw;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aw:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lq:{"^":"aw;m:x=,n:y=","%":"SVGImageElement"},lw:{"^":"iz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cT]},
$isi:1,
$asi:function(){return[P.cT]},
$ask:function(){return[P.cT]},
"%":"SVGLengthList"},lC:{"^":"w;m:x=,n:y=","%":"SVGMaskElement"},lT:{"^":"iJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d2]},
$isi:1,
$asi:function(){return[P.d2]},
$ask:function(){return[P.d2]},
"%":"SVGNumberList"},lZ:{"^":"w;m:x=,n:y=","%":"SVGPatternElement"},m0:{"^":"f;m:x=,n:y=","%":"SVGPoint"},m1:{"^":"f;i:length=","%":"SVGPointList"},m4:{"^":"f;m:x=,n:y=","%":"SVGRect"},m5:{"^":"fx;m:x=,n:y=","%":"SVGRectElement"},d4:{"^":"w;",$isd4:1,"%":"SVGScriptElement"},mi:{"^":"j1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},w:{"^":"aj;",
R:function(a,b,c,d){var z,y,x,w,v,u
z=H.x([],[W.cZ])
z.push(W.dB(null))
z.push(W.dN())
z.push(new W.j2())
c=new W.dQ(new W.d_(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.t).dD(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.Q(w)
u=z.gX(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaG:function(a){return new W.aa(a,"mousedown",!1,[W.I])},
gaH:function(a){return new W.aa(a,"mousemove",!1,[W.I])},
gaI:function(a){return new W.aa(a,"mouseup",!1,[W.I])},
gaJ:function(a){return new W.aa(a,"mousewheel",!1,[W.aH])},
$isw:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mj:{"^":"aw;m:x=,n:y=","%":"SVGSVGElement"},hK:{"^":"aw;","%":"SVGTextPathElement;SVGTextContentElement"},mn:{"^":"hK;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mu:{"^":"je;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.df]},
$isi:1,
$asi:function(){return[P.df]},
$ask:function(){return[P.df]},
"%":"SVGTransformList"},my:{"^":"aw;m:x=,n:y=","%":"SVGUseElement"},iy:{"^":"f+j;"},iz:{"^":"iy+k;"},iI:{"^":"f+j;"},iJ:{"^":"iI+k;"},j0:{"^":"f+j;"},j1:{"^":"j0+k;"},jd:{"^":"f+j;"},je:{"^":"jd+k;"}}],["","",,P,{"^":"",ki:{"^":"f;i:length=","%":"AudioBuffer"},kj:{"^":"i1;",
h:function(a,b){return P.M(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.M(y.value[1]))}},
gK:function(a){var z=H.x([],[P.l])
this.v(a,new P.f_(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"AudioParamMap"},f_:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},kk:{"^":"A;i:length=","%":"AudioTrackList"},f0:{"^":"A;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lV:{"^":"f0;i:length=","%":"OfflineAudioContext"},i1:{"^":"f+L;"}}],["","",,P,{"^":"",m6:{"^":"f;",
bo:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindTexture(b,c)},
bv:function(a,b){return a.blendEquation(b)},
bw:function(a,b,c){return a.blendFunc(b,c)},
bx:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bB:function(a,b){return a.compileShader(b)},
bC:function(a){return a.createBuffer()},
bD:function(a){return a.createProgram()},
bE:function(a,b){return a.createShader(b)},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
an:function(a){return P.M(a.getContextAttributes())},
aO:function(a,b){return a.getProgramInfoLog(b)},
aP:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bP:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bY:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1fv(b,c)},
c_:function(a,b,c){return a.uniform1i(b,c)},
c0:function(a,b,c){return a.uniform1iv(b,c)},
c1:function(a,b,c){return a.uniform2fv(b,c)},
c2:function(a,b,c){return a.uniform3fv(b,c)},
c3:function(a,b,c){return a.uniform4fv(b,c)},
c4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c7:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ca:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m7:{"^":"f;",
dq:function(a,b){return a.beginTransformFeedback(b)},
dt:function(a,b){return a.bindVertexArray(b)},
dE:function(a){return a.createVertexArray()},
dG:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dH:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dI:function(a){return a.endTransformFeedback()},
e6:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
e8:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bo:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindTexture(b,c)},
bv:function(a,b){return a.blendEquation(b)},
bw:function(a,b,c){return a.blendFunc(b,c)},
bx:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bB:function(a,b){return a.compileShader(b)},
bC:function(a){return a.createBuffer()},
bD:function(a){return a.createProgram()},
bE:function(a,b){return a.createShader(b)},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
an:function(a){return P.M(a.getContextAttributes())},
aO:function(a,b){return a.getProgramInfoLog(b)},
aP:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bP:function(a,b){return a.linkProgram(b)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bY:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1fv(b,c)},
c_:function(a,b,c){return a.uniform1i(b,c)},
c0:function(a,b,c){return a.uniform1iv(b,c)},
c1:function(a,b,c){return a.uniform2fv(b,c)},
c2:function(a,b,c){return a.uniform3fv(b,c)},
c3:function(a,b,c){return a.uniform4fv(b,c)},
c4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c7:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ca:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mg:{"^":"iZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.M(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$ask:function(){return[P.bR]},
"%":"SQLResultSetRowList"},iY:{"^":"f+j;"},iZ:{"^":"iY+k;"}}],["","",,G,{"^":"",
hV:function(a){var z,y,x,w
z=H.x(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.d.a9(z,"\n")},
dy:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bE(a,b)
z.aU(a,y,c)
z.bB(a,y)
x=z.aR(a,y,35713)
if(x!=null&&J.G(x,!1)){w=z.aQ(a,y)
P.ah("E:Compilation failed:")
P.ah("E:"+G.hV(c))
P.ah("E:Failure:")
P.ah(C.j.l("E:",w))
throw H.a(w)}return y},
cN:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.eE(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.eF(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.eG(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fu:function(a,b){var z,y,x,w
z=C.c.gi(a).U(0,2)
b=new Float32Array(z)
for(y=0;C.b.T(y,C.c.gi(a));++y){z=y*2
x=C.c.h(a,y)
x=x.gm(x)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
x=C.c.h(a,y)
x=x.gn(x)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fv:function(a,b){var z,y,x,w,v
z=C.c.gi(a).U(0,4)
b=new Float32Array(z)
for(y=0;C.b.T(y,C.c.gi(a));++y){z=y*4
x=C.c.h(a,y)
x=x.gm(x)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
v=C.c.h(a,y)
v=v.gn(v)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
x=C.c.h(a,y)
x=x.gB(x)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
x=C.c.h(a,y)
x=x.ge9(x)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
ft:function(a,b){var z,y,x,w,v
z=C.c.gi(a).U(0,4)
b=new Uint32Array(z)
for(y=0;C.b.T(y,C.c.gi(a));++y){z=y*4
x=C.c.h(a,y).h(0,0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
v=C.c.h(a,y).h(0,1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
x=C.c.h(a,y).h(0,2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
x=C.c.h(a,y).h(0,3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
it:function(a,b){var z,y,x,w,v,u
for(z=a.e,y=new H.a7(z,z.r,null,null,[H.y(z,0)]),y.c=z.e,x=b.x;y.t();){w=y.d
if(!x.ai(0,w)){v="Dropping unnecessary attribute: "+H.b(w)
if($.e5>0)H.bw("I: "+v)
continue}u=z.h(0,w)
switch($.$get$V().h(0,w).a){case"vec2":b.a2(w,G.fu(u,null),2)
break
case"vec3":b.a2(w,G.cN(u,null),3)
break
case"vec4":b.a2(w,G.fv(u,null),4)
break
case"float":b.a2(w,new Float32Array(H.bp(u)),1)
break
case"uvec4":b.a2(w,G.ft(u,null),4)
break}}},
bf:{"^":"c;"},
du:{"^":"bf;",
b2:function(){return this.d},
k:function(a){var z,y,x,w
z=H.x(["{"+H.b(new H.ds(H.jP(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.a7(y,y.r,null,null,[H.y(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.d.a9(z,"\n")}},
f3:{"^":"hw;"},
f6:{"^":"c;a,b",
bL:function(a,b,c){J.ey(this.a,b)
if(c>0)J.eV(this.a,b,c)},
c9:function(a,b,c,d,e,f,g,h){J.bx(this.a,34962,b)
J.eW(this.a,c,d,e,!1,g,h)}},
fs:{"^":"c;a,b,c,d"},
fw:{"^":"c;a,b,c,d,e",
b_:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.fs(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].bA(0))},
ct:function(a,b,c){var z,y,x,w,v,u
z=a.length
y=z-1
for(x=b.length,w=0;w<y;w=u){if(w>=x)return H.d(b,w)
v=b[w]
u=w+1
if(u>=x)return H.d(b,u)
this.b_([v,b[u],a[u],a[w]])}if(y<0||y>=x)return H.d(b,y)
v=b[y]
if(0>=x)return H.d(b,0)
x=b[0]
if(0>=z)return H.d(a,0)
this.b_([v,x,a[0],a[y]])},
cv:function(a,b,c){var z,y
for(z=0;z<a.length-1;z=y){y=z+1
this.ct(a[y],a[z],!0)}},
cu:function(a,b){return this.cv(a,b,!1)},
cB:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*8)
y.fixed$length=Array
x=H.x(y,[P.F])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.gdj(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.gdn(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.gdn(t)
if(r>=w)return H.d(x,r)
x[r]=s
s=v+3
r=t.gdu(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+4
s=t.gdu(t)
if(r>=w)return H.d(x,r)
x[r]=s
s=v+5
r=t.gdj(t)
if(s>=w)return H.d(x,s)
x[s]=r
v+=6}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.d(x,v)
x[v]=s
r=v+1
p=q.b
if(r>=w)return H.d(x,r)
x[r]=p
r=v+2
if(r>=w)return H.d(x,r)
x[r]=p
p=v+3
r=q.c
if(p>=w)return H.d(x,p)
x[p]=r
p=v+4
if(p>=w)return H.d(x,p)
x[p]=r
r=v+5
p=q.d
if(r>=w)return H.d(x,r)
x[r]=p
r=v+6
if(r>=w)return H.d(x,r)
x[r]=p
p=v+7
if(p>=w)return H.d(x,p)
x[p]=s
v+=8}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a7(y,y.r,null,null,[H.y(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$V().h(0,w).a
z.push(H.b(w)+"["+v+","+H.b(C.c.gi(y.h(0,w)))+"]")}return C.d.a9(z," ")}},
de:{"^":"c;a,b,c"},
dd:{"^":"c;a,b,c"},
fR:{"^":"du;d,a,b,c"},
fT:{"^":"bf;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b0:function(a,b,c){var z,y
C.j.b9(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bx(z.a,34962,y)
J.cf(z.a,34962,b,35048)},
cC:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a2:function(a,b,c){var z,y,x,w,v
z=J.cg(a,0)===105
if(z&&this.z===0)this.z=C.b.cr(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bz(x.a))
this.b0(a,b,c)
w=$.$get$V().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b3(x.a,this.e)
x.bL(0,v,z?1:0)
x.c9(0,y.h(0,a),v,w.b1(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a7(z,z.r,null,null,[H.y(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.d.a9(y,"  ")}},
h8:{"^":"du;",
cw:function(a,b){var z
if(typeof a!=="number")return a.ec()
if(typeof b!=="number")return H.C(b)
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
b2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.z(new Float32Array(3))
u.ad(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
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
y=J.o(t)
x=!!y.$isaG
q=x?y.ge9(t):1
if(!!y.$isz){p=y.gm(t)
s=y.gn(t)
r=y.gB(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gB(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.C(t)
x=z[4]
if(typeof s!=="number")return H.C(s)
w=z[8]
if(typeof r!=="number")return H.C(r)
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
c.dT(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hl:{"^":"bf;d,e,f,r,x,y,z,Q,ch,a,b,c",
cG:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a5)(z),++u){t=z[u]
x.j(0,t,J.cn(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a5)(z),++u){t=z[u]
x.j(0,t,J.cn(w.a,v,t))}},
cK:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a7(y,y.r,null,null,[H.y(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ai(0,v))x.push(v)}for(z=this.x,y=new P.c_(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
cN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a7(b,b.r,null,null,[H.y(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cg(t,0)){case 117:if(w.ai(0,t)){s=b.h(0,t)
if(v.ai(0,t))H.bw("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$V().h(0,t)
if(r==null)H.N("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bC(x.a,q,s)
else if(!!J.o(s).$isfA)J.eT(x.a,q,s)
break
case"float":if(r.c===0)J.eR(x.a,q,s)
else if(!!J.o(s).$isbK)J.eS(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a4(s,"$isa0").a
J.cu(x.a,q,!1,p)}else if(!!J.o(s).$isbK)J.cu(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a4(s,"$isaC").a
J.ct(x.a,q,!1,p)}else if(!!J.o(s).$isbK)J.ct(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cs(o,q,H.a4(s,"$isaG").a)
else J.cs(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cr(o,q,H.a4(s,"$isz").a)
else J.cr(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cq(o,q,H.a4(s,"$isB").a)
else J.cq(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.C(p)
J.cc(x.a,33984+p)
p=H.a4(s,"$ishL").cD()
J.ce(x.a,3553,p)
p=this.ch
J.bC(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.C(p)
J.cc(x.a,33984+p)
p=H.a4(s,"$ishL").cD()
J.ce(x.a,34067,p)
p=this.ch
J.bC(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bw("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.G(s,!0)
o=x.a
if(p)J.b4(o,2929)
else J.bA(o,2929)
break
case"cStencilFunc":H.a4(s,"$isde")
p=s.a
o=x.a
if(p===1281)J.bA(o,2960)
else{J.b4(o,2960)
o=s.b
n=s.c
J.eO(x.a,p,o,n)}break
case"cDepthWrite":J.et(x.a,s)
break
case"cBlendEquation":H.a4(s,"$isdd")
p=s.a
o=x.a
if(p===1281)J.bA(o,3042)
else{J.b4(o,3042)
o=s.b
n=s.c
J.eo(x.a,o,n)
J.en(x.a,p)}break}++u
break}}m=P.fm(0,0,0,Date.now()-new P.cC(z,!1).a,0,0)
""+u
m.k(0)},
cA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.eU(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b6()}for(x=0;x<2;++x){w=b[x]
this.cN(w.a,w.b2())}y=this.Q
y.a6(0)
for(v=a.cy,u=new H.a7(v,v.r,null,null,[H.y(v,0)]),u.c=v.e;u.t();)y.I(0,u.d)
t=this.cK()
if(t.length!==0)P.ah("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b3(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cC()
u=a.Q
r=a.z
if(s)J.em(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.ex(q,y,v,u,0,r)
else J.ew(q,y,v,u,0)}else{u=z.a
if(r>1)J.ev(u,y,0,v,r)
else J.eu(u,y,0,v)}if(s)J.ez(z.a)},
cz:function(a,b){return this.cA(a,b,null)},
p:{
hm:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.P(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.er(b.a)
u=G.dy(b.a,35633,y)
J.cd(b.a,v,u)
t=G.dy(b.a,35632,x)
J.cd(b.a,v,t)
if(w.length>0)J.eQ(b.a,v,w,35980)
J.eM(b.a,v)
if(J.eL(b.a,v,35714)!==!0)H.N(J.eK(b.a,v))
z=new G.hl(b,c,d,v,P.bQ(c.c,null),P.T(),P.T(),z,null,a,!1,!0)
z.cG(a,b,c,d)
return z}}},
t:{"^":"c;a,b,c",
b1:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hs:{"^":"c;a,b,c,d,e,f,r,x",
cs:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.d.aW(z)},
aZ:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.a5)(a),++x)y.push(a[x])
C.d.aW(y)},
cH:function(a,b){this.b=this.cO(!0,a,b)},
b3:function(a){return this.cH(a,null)},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.a5)(z),++u){t=z[u]
s=$.$get$V().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.d(z,u)
q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a5)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a5)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.d.N(w,b)
w.push("}")
return C.d.a9(w,"\n")},
p:{
d5:function(a){return new G.hs(a,null,[],[],[],[],0,P.T())}}},
hw:{"^":"bf;"}}],["","",,R,{"^":"",h9:{"^":"h8;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dY:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sF(z,y)
w.sE(z,x)
P.ah("size change "+H.b(y)+" "+H.b(x))
this.cw(y,x)
J.eX(this.go.a,0,0,y,x)},"$1","gdX",4,0,18]},hy:{"^":"c;",
cI:function(a,b,c){var z,y,x
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
x=this.cS(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cS:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.ib("span",null)
y=J.ck(v)
J.e(y).sF(y,"1px")
C.o.sE(y,""+d+"px")
C.o.sdJ(y,"left")
x=C.o.b8(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hz:{"^":"hy;e,f,a,b,c,d",
cM:function(a,b){var z,y,x,w,v;++this.e
if(J.aP(J.ei(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.u.e5(z,2)+" fps"
y=this.c;(y&&C.D).ce(y,b)
x=C.b.a_(30*C.u.dw(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.ck(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
cL:function(a){return this.cM(a,"")}}}],["","",,X,{"^":"",
fM:function(a,b,c,d){var z,y,x
z=b.a7(d)
if(z===0)return
y=c.H(0,a).a7(d)
x=new T.B(new Float32Array(2))
x.D(b)
x.cd(0,y/z)
return a.l(0,x)},
fy:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=H.x([],[T.B])
y=a.length
for(x=0;x<y;x=v){w=x-1
if(w<0)w+=y
v=x+1
u=v>=y?v-y:v
t=a[w]
s=a[x]
if(u<0)return H.d(a,u)
r=a[u]
s.toString
q=new Float32Array(2)
p=new T.B(q)
o=s.a
q[1]=o[1]
q[0]=o[0]
p.ae(0,t)
r.toString
n=new Float32Array(2)
m=new T.B(n)
o=r.a
n[1]=o[1]
n[0]=o[0]
m.ae(0,s)
r=q[1]
q=q[0]
l=new Float32Array(2)
k=new T.B(l)
l[0]=r
l[1]=-q
k.a1(0)
q=n[1]
n=n[0]
r=new Float32Array(2)
j=new T.B(r)
r[0]=q
r[1]=-n
j.a1(0)
t.toString
r=new Float32Array(2)
i=new T.B(r)
h=t.a
r[1]=h[1]
r[0]=h[0]
i.I(0,k)
t=new Float32Array(2)
g=new T.B(t)
t[1]=o[1]
t[0]=o[0]
g.I(0,j)
f=X.fM(i,p,g,m)
f.toString
t=new Float32Array(2)
e=new T.B(t)
o=f.a
t[1]=o[1]
t[0]=o[0]
e.ae(0,s)
z.push(e)}return z},
fc:function(a,b,c){var z,y,x,w,v,u,t
z=new Array(a)
z.fixed$length=Array
y=H.x(z,[T.B])
for(z=y.length,x=0;x<a;++x){w=6.283185307179586*x/a
v=Math.cos(w)
u=Math.sin(w)
t=new Float32Array(2)
t[0]=b*v
t[1]=b*u
if(x>=z)return H.d(y,x)
y[x]=new T.B(t)}return y},
kM:[function(a){return 1-Math.cos(a*3.141592653589793/2)},"$1","k1",4,0,4],
kQ:[function(a){return Math.sin(a*3.141592653589793/2)},"$1","k5",4,0,4],
kO:[function(a){return a},"$1","k3",4,0,4],
kP:[function(a){return a*a},"$1","k4",4,0,4],
kN:[function(a){return a*a*a},"$1","k2",4,0,4],
f2:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(typeof c!=="number")return H.C(c)
z=new Array(c)
z.fixed$length=Array
y=H.x(z,[T.B])
for(z=y.length,x=c-1,w=-a,v=0;v<c;++v){u=v/x
t=e.$1(u)
if(typeof t!=="number")return H.C(t)
s=d.$1(u)
if(typeof s!=="number")return H.C(s)
r=new Float32Array(2)
r[0]=w*t
r[1]=b*s
if(v>=z)return H.d(y,v)
y[v]=new T.B(r)}return y},
f1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o
z=[]
y=new Float32Array(3)
x=new T.z(y)
for(w=c.length,v=[T.z],u=0;u<w;++u){t=c[u]
s=a.length
r=new Array(s)
r.fixed$length=Array
q=H.x(r,v)
for(r=q.length,p=0;p<r;++p){if(p>=s)return H.d(a,p)
o=a[p].a[0]
if(p>=b.length)return H.d(b,p)
y[0]=o+b[p].a[0]*t.gm(t)
o=a[p].a[1]
if(p>=b.length)return H.d(b,p)
y[1]=o+b[p].a[1]*t.gm(t)
y[2]=t.gn(t)
q[p]=d.U(0,x)}z.push(q)}return z}}],["","",,V,{}],["","",,D,{"^":"",fI:{"^":"c;a,b,c",
cE:function(a){var z
a=document
z=W.bc
W.ab(a,"keydown",new D.fK(this),!1,z)
W.ab(a,"keyup",new D.fL(this),!1,z)},
p:{
fJ:function(a){var z=P.F
z=new D.fI(P.P(null,null,null,z),P.P(null,null,null,z),P.P(null,null,null,z))
z.cE(a)
return z}}},fK:{"^":"h:9;a",
$1:function(a){var z=this.a
z.a.I(0,J.cm(a))
z.b.I(0,a.which)}},fL:{"^":"h:9;a",
$1:function(a){var z=this.a
z.a.bS(0,J.cm(a))
z.c.I(0,a.which)}},fW:{"^":"c;a,b,c,d,e,f,r,x",
cF:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaH(a)
W.ab(y.a,y.b,new D.fY(this),!1,H.y(y,0))
y=z.gaG(a)
W.ab(y.a,y.b,new D.fZ(this),!1,H.y(y,0))
y=z.gaI(a)
W.ab(y.a,y.b,new D.h_(this),!1,H.y(y,0))
z=z.gaJ(a)
W.ab(z.a,z.b,new D.h0(this),!1,H.y(z,0))},
p:{
fX:function(a){var z=P.F
z=new D.fW(P.P(null,null,null,z),P.P(null,null,null,z),P.P(null,null,null,z),0,0,0,0,0)
z.cF(a)
return z}}},fY:{"^":"h:6;a",
$1:function(a){var z,y
z=J.e(a)
z.am(a)
y=this.a
y.r=z.gbR(a).a
y.x=z.gbR(a).b
y.d=a.movementX
y.e=a.movementY}},fZ:{"^":"h:6;a",
$1:function(a){var z=J.e(a)
z.am(a)
P.ah("BUTTON "+H.b(z.gby(a)))
z=this.a
z.a.I(0,a.button)
z.b.I(0,a.button)}},h_:{"^":"h:6;a",
$1:function(a){var z,y
z=J.e(a)
z.am(a)
y=this.a
y.a.bS(0,z.gby(a))
y.c.I(0,a.button)}},h0:{"^":"h:19;a",
$1:function(a){var z=J.e(a)
z.am(a)
this.a.f=z.gdF(a)}},h7:{"^":"f3;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b2:function(a){var z,y
z=C.P.dK(a,0,new A.jR())
if(typeof z!=="number")return H.C(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jR:{"^":"h:20;",
$2:function(a,b){var z,y
z=J.ar(a,J.Y(b))
if(typeof z!=="number")return H.C(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aC:{"^":"c;bc:a<",
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aC){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gw:function(a){return A.b2(this.a)},
S:function(a){var z,y,x
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
return new T.z(z)},
bA:function(a){var z,y
z=new Float32Array(9)
y=this.a
z[8]=y[8]
z[7]=y[7]
z[6]=y[6]
z[5]=y[5]
z[4]=y[4]
z[3]=y[3]
z[2]=y[2]
z[1]=y[1]
z[0]=y[0]
return new T.aC(z)},
U:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=new T.z(new Float32Array(3))
z.D(b)
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
z.sm(0,w*v+u*t+s*r)
z.sn(0,q*v+p*t+o*r)
z.sB(0,n*v+m*t+x*r)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=this.a
z[8]=y[8]
z[7]=y[7]
z[6]=y[6]
z[5]=y[5]
z[4]=y[4]
z[3]=y[3]
z[2]=y[2]
z[1]=y[1]
z[0]=y[0]
x=b.gbc()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
z[4]=C.a.l(z[4],x.h(0,4))
z[5]=C.a.l(z[5],x.h(0,5))
z[6]=C.a.l(z[6],x.h(0,6))
z[7]=C.a.l(z[7],x.h(0,7))
z[8]=C.a.l(z[8],x.h(0,8))
return new T.aC(z)},
H:function(a,b){var z,y,x
z=new Float32Array(9)
y=this.a
z[8]=y[8]
z[7]=y[7]
z[6]=y[6]
z[5]=y[5]
z[4]=y[4]
z[3]=y[3]
z[2]=y[2]
z[1]=y[1]
z[0]=y[0]
x=b.gbc()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
return new T.aC(z)}},a0:{"^":"c;bd:a<",
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n[3] "+this.S(3).k(0)+"\n"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a0){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.b2(this.a)},
S:function(a){var z,y,x
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
return new T.aG(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a0(z)
y.D(this)
x=b.gbd()
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
y=new T.a0(z)
y.D(this)
x=b.gbd()
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
ab:function(){var z=this.a
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
dT:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},B:{"^":"c;bl:a<",
D:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.b2(this.a)},
H:function(a,b){var z=new T.B(new Float32Array(2))
z.D(this)
z.ae(0,b)
return z},
l:function(a,b){var z=new T.B(new Float32Array(2))
z.D(this)
z.I(0,b)
return z},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a1:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=Math.sqrt(y*y+x*x)
if(w===0)return 0
v=1/w
z[0]=z[0]*v
z[1]=z[1]*v
return w},
a7:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
I:function(a,b){var z,y
z=b.gbl()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
ae:function(a,b){var z,y
z=b.gbl()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
cd:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},z:{"^":"c;bm:a<",
ad:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.z){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.b2(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.z(z)
y.D(this)
x=b.gbm()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.z(z)
y.D(this)
x=b.gbm()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
gi:function(a){return Math.sqrt(this.gaF())},
gaF:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
a1:function(a){var z,y,x
z=Math.sqrt(this.gaF())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aD:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
a7:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.z(new Float32Array(3))
z.ad(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
bA:function(a){var z=new T.z(new Float32Array(3))
z.D(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sB:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]},
p:{
hQ:function(a,b,c){var z=new T.z(new Float32Array(3))
z.ad(a,b,c)
return z}}},aG:{"^":"c;bn:a<",
D:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aG){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.b2(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.aG(z)
y.D(this)
x=b.gbn()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.aG(z)
y.D(this)
x=b.gbn()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gB:function(a){return this.a[2]}}}],["","",,N,{"^":"",
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
y=document
x=new R.hz(0,0,null,null,null,null)
x.cI(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.f6(null,w)
y=J.eI(w,"webgl2",P.bP(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.N(P.cL('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.eJ(y))
if($.e5>0)P.ah("I: "+u)
J.ep(y,0,0,0,1)
J.b4(y,2929)
y=new Float32Array(3)
u=D.fJ(null)
t=D.fX(w)
s=new T.a0(new Float32Array(16))
s.ab()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.h7(25,10,0,0,new T.z(y),-0.02,u,t,s,new T.z(r),new T.z(q),new T.z(p),new T.z(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.a0(new Float32Array(16))
y.ab()
u=new T.a0(new Float32Array(16))
u.ab()
n=new R.h9(w,v,o,50,1,0.1,1000,y,u,new T.a0(new Float32Array(16)),P.T(),"perspective",!1,!0)
n.b4()
n.dY(null)
W.ab(window,"resize",n.gdX(),!1,W.a6)
m=G.hm("basic",v,$.$get$eg(),$.$get$ef())
y=P.T()
y.j(0,"cDepthTest",!0)
y.j(0,"cDepthWrite",!0)
y.j(0,"cBlendEquation",$.$get$cv())
y.j(0,"cStencilFunc",$.$get$d7())
y.j(0,"uColor",$.$get$cz())
u=new T.a0(new Float32Array(16))
u.ab()
y.j(0,"uModelMatrix",u)
z.a=0
new N.k7(z,m,o,n,new G.fR(y,"wire",!1,!0),x).$1(0)},
k7:{"^":"h:21;a,b,c,d,e,f",
$1:function(c0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
z=this.a
y=J.aM(c0)
y.H(c0,z.a)
z.a=y.l(c0,0)
y=this.b
x=J.bB($.$get$e7())
if(typeof x!=="number")return x.l()
w=J.bB($.$get$e4())
if(typeof w!=="number")return w.l()
v=$.$get$cX()
u=v.h(0,J.cl($.$get$e2()))
t=v.h(0,J.cl($.$get$e1()))
s=X.f2(x+0,w+0,J.bB($.$get$e6()),t,u)
w=$.$get$c6()
x=$.$get$e3()
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
r=[]
q=new G.fw(!1,[],[],r,P.T())
q.cu(X.f1(w,x,s,new T.aC(v)),!0)
v=y.d
x=y.e.x
w=P.T()
p=J.es(v.a)
o=new G.fT(v,p,1,w,x,null,0,-1,null,null,P.T(),"meshdata:",!1,!0)
r=G.cN(r,null)
w.j(0,"aPosition",J.bz(v.a))
o.ch=r
o.b0("aPosition",r,3)
n=$.$get$V().h(0,"aPosition")
if(n==null)H.N("Unknown canonical aPosition")
m=x.h(0,"aPosition")
J.b3(v.a,p)
v.bL(0,m,0)
v.c9(0,w.h(0,"aPosition"),m,n.b1(),5126,!1,0,0)
x=q.cB()
o.y=J.bz(v.a)
w=o.ch.length
if(w<768){o.cx=new Uint8Array(H.bp(x))
o.Q=5121}else if(w<196608){o.cx=new Uint16Array(H.bp(x))
o.Q=5123}else{o.cx=new Uint32Array(H.bp(x))
o.Q=5125}J.b3(v.a,p)
x=o.y
w=o.cx
J.bx(v.a,34963,x)
J.cf(v.a,34963,w,35048)
G.it(q,o)
w=this.c
x=w.r1
v=x.a
if(v.u(0,0)||v.u(0,1)){v=w.go
r=x.d
if(typeof r!=="number")return r.U()
w.go=v+r*0.01
r=w.id
v=x.e
if(typeof v!=="number")return v.U()
w.id=r+v*0.01}v=w.k4
r=v.a
if(r.u(0,37))w.go+=0.03
else if(r.u(0,39))w.go-=0.03
if(r.u(0,38))w.id+=0.03
else if(r.u(0,40))w.id-=0.03
if(r.u(0,33))w.fy*=0.99
else if(r.u(0,34))w.fy*=1.01
if(r.u(0,32)){w.go=0
w.id=0}r=x.f
if(typeof r!=="number")return r.U()
r=w.fy-r*w.k3
if(r>0)w.fy=r
r=C.a.dz(w.id,-1.4707963267948965,1.4707963267948965)
w.id=r
p=w.fy
l=w.go
k=p*Math.cos(r)
j=Math.cos(l)
r=Math.sin(r)
l=Math.sin(l)
i=w.d.a
i[12]=k*j
i[13]=p*r
i[14]=k*l
l=w.k2
r=l.a
i[12]=i[12]+r[0]
i[13]=i[13]+r[1]
i[14]=i[14]+r[2]
h=i[12]
g=i[13]
f=i[14]
e=new T.z(new Float32Array(3))
e.ad(0,1,0)
r=w.e
p=r.a
p[0]=i[12]
p[1]=i[13]
p[2]=i[14]
d=r.H(0,l)
d.a1(0)
c=e.a7(d)
c.a1(0)
b=d.a7(c)
b.a1(0)
l=c.aD(r)
p=b.aD(r)
r=d.aD(r)
j=c.a
a=j[0]
a0=b.a
a1=a0[0]
a2=d.a
a3=a2[0]
a4=j[1]
a5=a0[1]
a6=a2[1]
j=j[2]
a0=a0[2]
a2=a2[2]
i[15]=1
i[14]=-r
i[13]=-p
i[12]=-l
i[11]=0
i[10]=a2
i[9]=a0
i[8]=j
i[7]=0
i[6]=a6
i[5]=a5
i[4]=a4
i[3]=0
i[2]=a3
i[1]=a1
i[0]=a
i[12]=h
i[13]=g
i[14]=f
a=w.f
a1=a.a
a1[0]=i[2]
a1[1]=i[6]
a1[2]=i[10]
w=-w.k1
a7=Math.sqrt(a.gaF())
h=a1[0]/a7
g=a1[1]/a7
f=a1[2]/a7
a8=Math.cos(w)
a9=Math.sin(w)
b0=1-a8
b1=h*h*b0+a8
w=f*a9
b2=h*g*b0-w
a1=g*a9
b3=h*f*b0+a1
b4=g*h*b0+w
b5=g*g*b0+a8
w=h*a9
b6=g*f*b0-w
b7=f*h*b0-a1
b8=f*g*b0+w
b9=f*f*b0+a8
w=i[0]
a1=i[4]
a=i[8]
a3=i[1]
a4=i[5]
a5=i[9]
a6=i[2]
j=i[6]
a0=i[10]
a2=i[3]
l=i[7]
p=i[11]
i[0]=w*b1+a1*b4+a*b7
i[1]=a3*b1+a4*b4+a5*b7
i[2]=a6*b1+j*b4+a0*b7
i[3]=a2*b1+l*b4+p*b7
i[4]=w*b2+a1*b5+a*b8
i[5]=a3*b2+a4*b5+a5*b8
i[6]=a6*b2+j*b5+a0*b8
i[7]=a2*b2+l*b5+p*b8
i[8]=w*b3+a1*b6+a*b9
i[9]=a3*b3+a4*b6+a5*b9
i[10]=a6*b3+j*b6+a0*b9
i[11]=a2*b3+l*b6+p*b9
v.c.a6(0)
v.b.a6(0)
x.e=0
x.d=0
x.f=0
x.c.a6(0)
x.b.a6(0)
y.cz(o,[this.d,this.e])
C.a6.gdl(window).bU(this)
this.f.cL(z.a)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cQ.prototype
return J.cP.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.cR.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b0(a)}
J.jN=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b0(a)}
J.a3=function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b0(a)}
J.bt=function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b0(a)}
J.aM=function(a){if(typeof a=="number")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aY.prototype
return a}
J.jO=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aY.prototype
return a}
J.e8=function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aY.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b0(a)}
J.ar=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jN(a).l(a,b)}
J.G=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).C(a,b)}
J.K=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aM(a).aa(a,b)}
J.aP=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aM(a).T(a,b)}
J.ei=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aM(a).H(a,b)}
J.ej=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a3(a).h(a,b)}
J.ek=function(a,b,c,d){return J.e(a).d5(a,b,c,d)}
J.cc=function(a,b){return J.e(a).bo(a,b)}
J.el=function(a,b,c,d){return J.e(a).bp(a,b,c,d)}
J.cd=function(a,b,c){return J.e(a).br(a,b,c)}
J.em=function(a,b){return J.e(a).dq(a,b)}
J.bx=function(a,b,c){return J.e(a).bs(a,b,c)}
J.ce=function(a,b,c){return J.e(a).bu(a,b,c)}
J.b3=function(a,b){return J.e(a).dt(a,b)}
J.en=function(a,b){return J.e(a).bv(a,b)}
J.eo=function(a,b,c){return J.e(a).bw(a,b,c)}
J.cf=function(a,b,c,d){return J.e(a).bx(a,b,c,d)}
J.ep=function(a,b,c,d,e){return J.e(a).bz(a,b,c,d,e)}
J.cg=function(a,b){return J.e8(a).dA(a,b)}
J.eq=function(a,b){return J.jO(a).P(a,b)}
J.by=function(a,b,c){return J.a3(a).dC(a,b,c)}
J.bz=function(a){return J.e(a).bC(a)}
J.er=function(a){return J.e(a).bD(a)}
J.es=function(a){return J.e(a).dE(a)}
J.et=function(a,b){return J.e(a).bF(a,b)}
J.bA=function(a,b){return J.e(a).bG(a,b)}
J.eu=function(a,b,c,d){return J.e(a).bH(a,b,c,d)}
J.ev=function(a,b,c,d,e){return J.e(a).dG(a,b,c,d,e)}
J.ew=function(a,b,c,d,e){return J.e(a).bI(a,b,c,d,e)}
J.ex=function(a,b,c,d,e,f){return J.e(a).dH(a,b,c,d,e,f)}
J.ch=function(a,b){return J.bt(a).q(a,b)}
J.b4=function(a,b){return J.e(a).bJ(a,b)}
J.ey=function(a,b){return J.e(a).bK(a,b)}
J.ez=function(a){return J.e(a).dI(a)}
J.ci=function(a,b){return J.bt(a).v(a,b)}
J.cj=function(a){return J.e(a).gdm(a)}
J.as=function(a){return J.e(a).gL(a)}
J.Y=function(a){return J.o(a).gw(a)}
J.aQ=function(a){return J.bt(a).gJ(a)}
J.Z=function(a){return J.a3(a).gi(a)}
J.eA=function(a){return J.e(a).gdU(a)}
J.eB=function(a){return J.e(a).gaK(a)}
J.ck=function(a){return J.e(a).gV(a)}
J.eC=function(a){return J.e(a).ge1(a)}
J.eD=function(a){return J.e(a).gbX(a)}
J.cl=function(a){return J.e(a).gM(a)}
J.bB=function(a){return J.e(a).ge7(a)}
J.cm=function(a){return J.e(a).geb(a)}
J.eE=function(a){return J.e(a).gm(a)}
J.eF=function(a){return J.e(a).gn(a)}
J.eG=function(a){return J.e(a).gB(a)}
J.eH=function(a){return J.e(a).aN(a)}
J.eI=function(a,b,c){return J.e(a).cc(a,b,c)}
J.eJ=function(a){return J.e(a).an(a)}
J.eK=function(a,b){return J.e(a).aO(a,b)}
J.eL=function(a,b,c){return J.e(a).aP(a,b,c)}
J.cn=function(a,b,c){return J.e(a).aS(a,b,c)}
J.eM=function(a,b){return J.e(a).bP(a,b)}
J.co=function(a){return J.bt(a).dW(a)}
J.eN=function(a,b){return J.e(a).saj(a,b)}
J.eO=function(a,b,c,d){return J.e(a).aX(a,b,c,d)}
J.cp=function(a){return J.aM(a).e2(a)}
J.eP=function(a){return J.e8(a).e4(a)}
J.at=function(a){return J.o(a).k(a)}
J.eQ=function(a,b,c,d){return J.e(a).e6(a,b,c,d)}
J.eR=function(a,b,c){return J.e(a).bY(a,b,c)}
J.eS=function(a,b,c){return J.e(a).bZ(a,b,c)}
J.bC=function(a,b,c){return J.e(a).c_(a,b,c)}
J.eT=function(a,b,c){return J.e(a).c0(a,b,c)}
J.cq=function(a,b,c){return J.e(a).c1(a,b,c)}
J.cr=function(a,b,c){return J.e(a).c2(a,b,c)}
J.cs=function(a,b,c){return J.e(a).c3(a,b,c)}
J.ct=function(a,b,c,d){return J.e(a).c4(a,b,c,d)}
J.cu=function(a,b,c,d){return J.e(a).c5(a,b,c,d)}
J.eU=function(a,b){return J.e(a).c7(a,b)}
J.eV=function(a,b,c){return J.e(a).e8(a,b,c)}
J.eW=function(a,b,c,d,e,f,g){return J.e(a).c8(a,b,c,d,e,f,g)}
J.eX=function(a,b,c,d,e){return J.e(a).ca(a,b,c,d,e)}
I.ap=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.bD.prototype
C.o=W.fd.prototype
C.D=W.fj.prototype
C.E=J.f.prototype
C.d=J.ax.prototype
C.u=J.cP.prototype
C.b=J.cQ.prototype
C.c=J.cR.prototype
C.a=J.az.prototype
C.j=J.aA.prototype
C.L=J.aB.prototype
C.P=H.h1.prototype
C.Q=W.h3.prototype
C.x=J.ha.prototype
C.C=W.hJ.prototype
C.r=J.aY.prototype
C.a6=W.hS.prototype
C.h=new P.iN()
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
C.v=function(hooks) { return hooks; }

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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.x(I.ap(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.N=I.ap(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=I.ap([])
C.p=H.x(I.ap(["bind","if","ref","repeat","syntax"]),[P.l])
C.q=H.x(I.ap(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.R=new G.t("vec3","vertex btangents",0)
C.e=new G.t("vec3","",0)
C.S=new G.t("vec4","delta from light",0)
C.n=new G.t("","",0)
C.y=new G.t("vec3","vertex coordinates",0)
C.T=new G.t("vec3","vertex binormals",0)
C.z=new G.t("vec4","for wireframe",0)
C.U=new G.t("vec4","per vertex color",0)
C.V=new G.t("float","for normal maps",0)
C.k=new G.t("mat4","",0)
C.X=new G.t("mat4","",4)
C.W=new G.t("mat4","",128)
C.f=new G.t("float","",0)
C.Y=new G.t("float","",4)
C.Z=new G.t("float","depth for shadowmaps",0)
C.i=new G.t("sampler2D","",0)
C.a_=new G.t("float","for bump maps",0)
C.a0=new G.t("vec2","texture uvs",0)
C.a1=new G.t("float","time since program start in sec",0)
C.l=new G.t("vec2","",0)
C.a2=new G.t("samplerCube","",0)
C.m=new G.t("vec4","",0)
C.a3=new G.t("vec3","vertex normals",0)
C.a4=new G.t("sampler2DShadow","",0)
C.A=new G.t("vec3","per vertex color",0)
C.B=new G.t("mat3","",0)
C.a5=new G.t("vec3","vertex tangents",0)
$.R=0
$.au=null
$.cw=null
$.ea=null
$.dW=null
$.ee=null
$.bs=null
$.bu=null
$.c8=null
$.al=null
$.aJ=null
$.aK=null
$.c1=!1
$.u=C.h
$.a_=null
$.bI=null
$.cJ=null
$.cI=null
$.cG=null
$.cF=null
$.cE=null
$.cD=null
$.e5=0
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
I.$lazy(y,x,w)}})(["cB","$get$cB",function(){return H.e9("_$dart_dartClosure")},"bM","$get$bM",function(){return H.e9("_$dart_js")},"dg","$get$dg",function(){return H.U(H.bo({
toString:function(){return"$receiver$"}}))},"dh","$get$dh",function(){return H.U(H.bo({$method$:null,
toString:function(){return"$receiver$"}}))},"di","$get$di",function(){return H.U(H.bo(null))},"dj","$get$dj",function(){return H.U(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dn","$get$dn",function(){return H.U(H.bo(void 0))},"dp","$get$dp",function(){return H.U(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dl","$get$dl",function(){return H.U(H.dm(null))},"dk","$get$dk",function(){return H.U(function(){try{null.$method$}catch(z){return z.message}}())},"dr","$get$dr",function(){return H.U(H.dm(void 0))},"dq","$get$dq",function(){return H.U(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bX","$get$bX",function(){return P.hW()},"cO","$get$cO",function(){var z,y
z=P.aU
y=new P.ac(0,P.hU(),null,[z])
y.cQ(null,z)
return y},"aL","$get$aL",function(){return[]},"cA","$get$cA",function(){return{}},"dC","$get$dC",function(){return P.bQ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bZ","$get$bZ",function(){return P.T()},"d7","$get$d7",function(){return new G.de(1281,0,4294967295)},"cv","$get$cv",function(){return new G.dd(1281,1281,1281)},"V","$get$V",function(){return P.bP(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.U,"aPosition",C.y,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.S,"vCenter",C.z,"vDepth",C.Z,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a4,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a2,"uAnimationTable",C.i,"uTime",C.a1,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.f,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"cz","$get$cz",function(){return T.hQ(1,1,0)},"cX","$get$cX",function(){return P.bP(["Cosine",X.k1(),"Sine",X.k5(),"Quadratic",X.k4(),"Cubic",X.k2(),"Linear",X.k3()])},"eg","$get$eg",function(){var z=G.d5("SolidColor")
z.cs(["aPosition"])
z.aZ(["uPerspectiveViewMatrix","uModelMatrix"])
z.b3(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"ef","$get$ef",function(){var z=G.d5("SolidColorF")
z.aZ(["uColor"])
z.b3(["oFragColor = vec4( uColor, 1.0 );"])
return z},"e7","$get$e7",function(){return W.b_().querySelector("#width")},"e4","$get$e4",function(){return W.b_().querySelector("#height")},"e6","$get$e6",function(){return W.b_().querySelector("#segments")},"e2","$get$e2",function(){return W.b_().querySelector("#easingWidth")},"e1","$get$e1",function(){return W.b_().querySelector("#easingHeight")},"c6","$get$c6",function(){return X.fc(20,10,!0)},"e3","$get$e3",function(){return X.fy($.$get$c6())}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:P.af,args:[P.af]},{func:1,ret:W.r},{func:1,args:[W.I]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.F]},{func:1,args:[W.bc]},{func:1,ret:P.c3,args:[W.aj,P.l,P.l,W.bY]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aF]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aF]},{func:1,v:true,args:[W.r,W.r]},{func:1,v:true,args:[W.a6]},{func:1,args:[W.aH]},{func:1,args:[P.F,P.c]},{func:1,v:true,args:[P.aN]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.kc(d||a)
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
Isolate.ap=a.ap
Isolate.an=a.an
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
if(typeof dartMainRunner==="function")dartMainRunner(N.ec,[])
else N.ec([])})})()
//# sourceMappingURL=extrude.dart.js.map
