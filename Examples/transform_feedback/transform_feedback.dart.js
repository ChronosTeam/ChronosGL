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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ise)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.c_"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.c_"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.c_(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bf=function(){}
var dart=[["","",,H,{"^":"",lo:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
c6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c4==null){H.k0()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ds("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$by()]
if(v!=null)return v
v=H.k5(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$by(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
e:{"^":"c;",
F:function(a,b){return a===b},
gB:function(a){return H.ay(a)},
k:["cu",function(a){return"Instance of '"+H.az(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fH:{"^":"e;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isbZ:1},
cN:{"^":"e;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isaQ:1},
bz:{"^":"e;",
gB:function(a){return 0},
k:["cw",function(a){return String(a)}]},
h9:{"^":"bz;"},
aS:{"^":"bz;"},
aw:{"^":"bz;",
k:function(a){var z=a[$.$get$cw()]
return z==null?this.cw(a):J.ao(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
as:{"^":"e;$ti",
M:function(a,b){var z,y
if(!!a.fixed$length)H.I(P.o("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.F(a))}},
aj:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.j(y,x)
y[x]=w}return y.join(b)},
aY:function(a,b){return H.d7(a,b,null,H.x(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
cn:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.I(P.o("setRange"))
P.hk(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$ish){x=e
w=d}else{w=y.aY(d,e).ef(0,!1)
x=0}y=J.a3(w)
if(x+z>y.gi(w))throw H.a(H.fE())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
aa:function(a,b,c,d){return this.cn(a,b,c,d,0)},
bo:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.F(a))}return!1},
co:function(a,b){if(!!a.immutable$list)H.I(P.o("sort"))
H.hw(a,J.jy())},
ao:function(a){return this.co(a,null)},
e1:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.C(a[z],b))return z
return-1},
e0:function(a,b){return this.e1(a,b,0)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.C(a[z],b))return!0
return!1},
k:function(a){return P.bx(a,"[","]")},
gH:function(a){return new J.f4(a,a.length,0,null,[H.x(a,0)])},
gB:function(a){return H.ay(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.I(P.o("set length"))
if(b<0)throw H.a(P.ah(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ad(a,b))
if(b>=a.length||b<0)throw H.a(H.ad(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.I(P.o("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ad(a,b))
if(b>=a.length||b<0)throw H.a(H.ad(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.a.n(a.length,C.a.gi(b))
y=H.z([],[H.x(a,0)])
this.si(y,z)
this.aa(y,0,a.length,a)
this.aa(y,a.length,z,b)
return y},
$ish:1,
p:{
at:function(a){a.fixed$length=Array
return a},
lm:[function(a,b){return J.eo(a,b)},"$2","jy",8,0,22]}},
ln:{"^":"as;$ti"},
f4:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
au:{"^":"e;",
R:function(a,b){var z
if(typeof b!=="number")throw H.a(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
ee:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.o(""+a+".toInt()"))},
dF:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.o(""+a+".ceil()"))},
dH:function(a,b,c){if(this.R(b,c)>0)throw H.a(H.P(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
eh:function(a,b){var z
if(b>20)throw H.a(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.P(b))
return a+b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.P(b))
return a-b},
G:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.o("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bh:function(a,b){var z
if(a>0)z=this.dj(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dj:function(a,b){return b>31?0:a>>>b},
a_:function(a,b){if(typeof b!=="number")throw H.a(H.P(b))
return a<b},
a9:function(a,b){if(typeof b!=="number")throw H.a(H.P(b))
return a>b},
$isaG:1,
$isaH:1},
cM:{"^":"au;",$isG:1},
cL:{"^":"au;"},
av:{"^":"e;",
dI:function(a,b){if(b>=a.length)H.I(H.ad(a,b))
return a.charCodeAt(b)},
d2:function(a,b){if(b>=a.length)throw H.a(H.ad(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.f3(b,null,null))
return a+b},
cq:function(a,b,c){var z
if(c>a.length)throw H.a(P.ah(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cp:function(a,b){return this.cq(a,b,0)},
b_:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.I(H.P(c))
if(b<0)throw H.a(P.b7(b,null,null))
if(typeof c!=="number")return H.E(c)
if(b>c)throw H.a(P.b7(b,null,null))
if(c>a.length)throw H.a(P.b7(c,null,null))
return a.substring(b,c)},
cs:function(a,b){return this.b_(a,b,null)},
eg:function(a){return a.toLowerCase()},
dK:function(a,b,c){if(c>a.length)throw H.a(P.ah(c,0,a.length,null,null))
return H.kc(a,b,c)},
R:function(a,b){var z
if(typeof b!=="string")throw H.a(H.P(b))
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
gi:function(a){return a.length},
$isl:1}}],["","",,H,{"^":"",
fD:function(){return new P.ba("No element")},
fF:function(){return new P.ba("Too many elements")},
fE:function(){return new P.ba("Too few elements")},
hw:function(a,b){H.aR(a,0,J.X(a)-1,b)},
aR:function(a,b,c,d){if(c-b<=32)H.hv(a,b,c,d)
else H.hu(a,b,c,d)},
hv:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a3(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.J(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.G(c-b+1,6)
y=b+z
x=c-z
w=C.a.G(b+c,2)
v=w-z
u=w+z
t=J.a3(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.J(d.$2(s,r),0)){n=r
r=s
s=n}if(J.J(d.$2(p,o),0)){n=o
o=p
p=n}if(J.J(d.$2(s,q),0)){n=q
q=s
s=n}if(J.J(d.$2(r,q),0)){n=q
q=r
r=n}if(J.J(d.$2(s,p),0)){n=p
p=s
s=n}if(J.J(d.$2(q,p),0)){n=p
p=q
q=n}if(J.J(d.$2(r,o),0)){n=o
o=r
r=n}if(J.J(d.$2(r,q),0)){n=q
q=r
r=n}if(J.J(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.C(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.F(i,0))continue
if(h.a_(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aU(i)
if(h.a9(i,0)){--l
continue}else{g=l-1
if(h.a_(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aJ(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.J(d.$2(j,p),0))for(;!0;)if(J.J(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aJ(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aR(a,b,m-2,d)
H.aR(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.C(d.$2(t.h(a,m),r),0);)++m
for(;J.C(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.C(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.C(d.$2(j,p),0))for(;!0;)if(J.C(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aJ(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aR(a,m,l,d)}else H.aR(a,m,l,d)},
bq:{"^":"b1;$ti"},
b3:{"^":"bq;$ti",
gH:function(a){return new H.cS(this,this.gi(this),0,null,[H.c2(this,"b3",0)])},
w:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.F(this))}},
aM:function(a,b){return this.cv(0,b)}},
hJ:{"^":"b3;a,b,c,$ti",
cO:function(a,b,c,d){},
gd6:function(){var z=J.X(this.a)
return z},
gdk:function(){var z,y
z=J.X(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.X(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdk()+b
if(b>=0){y=this.gd6()
if(typeof y!=="number")return H.E(y)
y=z>=y}else y=!0
if(y)throw H.a(P.v(b,this,"index",null,null))
return J.cd(this.a,z)},
ef:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a3(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.z(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.j(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.F(this))}return t},
p:{
d7:function(a,b,c,d){var z=new H.hJ(a,b,c,[d])
z.cO(a,b,c,d)
return z}}},
cS:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a3(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.F(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
fQ:{"^":"b3;a,b,$ti",
gi:function(a){return J.X(this.a)},
q:function(a,b){return this.b.$1(J.cd(this.a,b))},
$asbq:function(a,b){return[b]},
$asb3:function(a,b){return[b]},
$asb1:function(a,b){return[b]}},
du:{"^":"b1;a,b,$ti",
gH:function(a){return new H.hR(J.aM(this.a),this.b,this.$ti)}},
hR:{"^":"fG;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
b0:{"^":"c;$ti"}}],["","",,H,{"^":"",
jT:function(a){return init.types[a]},
k4:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$ism},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ao(a)
if(typeof z!=="string")throw H.a(H.P(a))
return z},
ay:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hi:function(a,b){var z,y
if(typeof a!=="string")H.I(H.P(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
az:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.n(a).$isaS){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.l.d2(w,0)===36)w=C.l.cs(w,1)
r=H.c5(H.ak(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
D:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hh:function(a){return a.b?H.D(a).getUTCFullYear()+0:H.D(a).getFullYear()+0},
hf:function(a){return a.b?H.D(a).getUTCMonth()+1:H.D(a).getMonth()+1},
hb:function(a){return a.b?H.D(a).getUTCDate()+0:H.D(a).getDate()+0},
hc:function(a){return a.b?H.D(a).getUTCHours()+0:H.D(a).getHours()+0},
he:function(a){return a.b?H.D(a).getUTCMinutes()+0:H.D(a).getMinutes()+0},
hg:function(a){return a.b?H.D(a).getUTCSeconds()+0:H.D(a).getSeconds()+0},
hd:function(a){return a.b?H.D(a).getUTCMilliseconds()+0:H.D(a).getMilliseconds()+0},
E:function(a){throw H.a(H.P(a))},
j:function(a,b){if(a==null)J.X(a)
throw H.a(H.ad(a,b))},
ad:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a6(!0,b,"index",null)
z=J.X(a)
if(!(b<0)){if(typeof z!=="number")return H.E(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.b7(b,"index",null)},
P:function(a){return new P.a6(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.d_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ec})
z.name=""}else z.toString=H.ec
return z},
ec:function(){return J.ao(this.dartException)},
I:function(a){throw H.a(a)},
B:function(a){throw H.a(P.F(a))},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ke(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.bh(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bA(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cZ(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dd()
u=$.$get$de()
t=$.$get$df()
s=$.$get$dg()
r=$.$get$dk()
q=$.$get$dl()
p=$.$get$di()
$.$get$dh()
o=$.$get$dn()
n=$.$get$dm()
m=v.N(y)
if(m!=null)return z.$1(H.bA(y,m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.bA(y,m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cZ(y,m))}}return z.$1(new H.hP(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a6(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d3()
return a},
ae:function(a){var z
if(a==null)return new H.dK(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dK(a,null)},
jO:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
k3:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cF("Unsupported number of arguments for wrapped closure"))},
a2:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k3)
a.$identity=z
return z},
ff:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$ish){z.$reflectionInfo=c
x=H.hm(z).r}else x=c
w=d?Object.create(new H.hy().constructor.prototype):Object.create(new H.bn(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Q
$.Q=J.af(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cu(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jT,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.ct:H.bo
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cu(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fc:function(a,b,c,d){var z=H.bo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cu:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fe(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fc(y,!w,z,b)
if(y===0){w=$.Q
$.Q=J.af(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ap
if(v==null){v=H.aZ("self")
$.ap=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Q
$.Q=J.af(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ap
if(v==null){v=H.aZ("self")
$.ap=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fd:function(a,b,c,d){var z,y
z=H.bo
y=H.ct
switch(b?-1:a){case 0:throw H.a(H.hq("Intercepted function with no arguments."))
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
z=$.ap
if(z==null){z=H.aZ("self")
$.ap=z}y=$.cs
if(y==null){y=H.aZ("receiver")
$.cs=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fd(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Q
$.Q=J.af(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Q
$.Q=J.af(y,1)
return new Function(z+H.b(y)+"}")()},
c_:function(a,b,c,d,e,f){var z,y
z=J.at(b)
y=!!J.n(c).$ish?J.at(c):c
return H.ff(a,z,y,!!d,e,f)},
ka:function(a,b){var z=J.a3(b)
throw H.a(H.fa(a,z.b_(b,3,z.gi(b))))},
a4:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.ka(a,b)},
c0:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
e_:function(a,b){var z,y
if(a==null)return!1
z=H.c0(J.n(a))
if(z==null)y=!1
else y=H.e4(z,b)
return y},
jG:function(a){var z
if(a instanceof H.f){z=H.c0(J.n(a))
if(z!=null)return H.c8(z,null)
return"Closure"}return H.az(a)},
kd:function(a){throw H.a(new P.fj(a))},
e2:function(a){return init.getIsolateTag(a)},
z:function(a,b){a.$ti=b
return a},
ak:function(a){if(a==null)return
return a.$ti},
mP:function(a,b,c){return H.aI(a["$as"+H.b(c)],H.ak(b))},
aW:function(a,b,c,d){var z=H.aI(a["$as"+H.b(c)],H.ak(b))
return z==null?null:z[d]},
c2:function(a,b,c){var z=H.aI(a["$as"+H.b(b)],H.ak(a))
return z==null?null:z[c]},
x:function(a,b){var z=H.ak(a)
return z==null?null:z[b]},
c8:function(a,b){var z=H.am(a,b)
return z},
am:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.c5(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.am(z,b)
return H.jx(a,b)}return"unknown-reified-type"},
jx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.am(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.am(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.am(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jN(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.am(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
c5:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bM("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.am(u,c)}return w?"":"<"+z.k(0)+">"},
jS:function(a){var z,y,x
if(a instanceof H.f){z=H.c0(J.n(a))
if(z!=null)return H.c8(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.c5(a.$ti,0,null)
return y+x},
aI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dY:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ak(a)
y=J.n(a)
if(y[b]==null)return!1
return H.dW(H.aI(y[d],z),c)},
dW:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.H(a[y],b[y]))return!1
return!0},
mN:function(a,b,c){return a.apply(b,H.aI(J.n(b)["$as"+H.b(c)],H.ak(b)))},
H:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aQ")return!0
if('func' in b)return H.e4(a,b)
if('func' in a)return b.builtin$cls==="le"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.c8(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dW(H.aI(u,z),x)},
dV:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.H(z,v)||H.H(v,z)))return!1}return!0},
jH:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.at(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.H(v,u)||H.H(u,v)))return!1}return!0},
e4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.H(z,y)||H.H(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dV(x,w,!1))return!1
if(!H.dV(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.H(o,n)||H.H(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.H(o,n)||H.H(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.H(o,n)||H.H(n,o)))return!1}}return H.jH(a.named,b.named)},
mO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k5:function(a){var z,y,x,w,v,u
z=$.e3.$1(a)
y=$.be[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bh[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dU.$2(a,z)
if(z!=null){y=$.be[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bh[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bi(x)
$.be[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bh[z]=x
return x}if(v==="-"){u=H.bi(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e8(a,x)
if(v==="*")throw H.a(P.ds(z))
if(init.leafTags[z]===true){u=H.bi(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e8(a,x)},
e8:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c6(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bi:function(a){return J.c6(a,!1,null,!!a.$ism)},
k9:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bi(z)
else return J.c6(z,c,null,null)},
k0:function(){if(!0===$.c4)return
$.c4=!0
H.k1()},
k1:function(){var z,y,x,w,v,u,t,s
$.be=Object.create(null)
$.bh=Object.create(null)
H.jX()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eb.$1(v)
if(u!=null){t=H.k9(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jX:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.aj(C.H,H.aj(C.M,H.aj(C.v,H.aj(C.v,H.aj(C.L,H.aj(C.I,H.aj(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e3=new H.jY(v)
$.dU=new H.jZ(u)
$.eb=new H.k_(t)},
aj:function(a,b){return a(b)||b},
kc:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hl:{"^":"c;a,b,c,d,e,f,r,x",p:{
hm:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.at(z)
y=z[0]
x=z[1]
return new H.hl(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hN:{"^":"c;a,b,c,d,e,f",
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
T:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dj:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h6:{"^":"A;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
cZ:function(a,b){return new H.h6(a,b==null?null:b.method)}}},
fI:{"^":"A;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bA:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fI(a,y,z?null:b.receiver)}}},
hP:{"^":"A;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ke:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dK:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.az(this).trim()+"'"},
gci:function(){return this},
gci:function(){return this}},
d8:{"^":"f;"},
hy:{"^":"d8;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bn:{"^":"d8;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.ay(this.a)
else y=typeof z!=="object"?J.W(z):H.ay(z)
return(y^H.ay(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.az(z)+"'")},
p:{
bo:function(a){return a.a},
ct:function(a){return a.c},
aZ:function(a){var z,y,x,w,v
z=new H.bn("self","target","receiver","name")
y=J.at(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
f9:{"^":"A;a",
k:function(a){return this.a},
p:{
fa:function(a,b){return new H.f9("CastError: "+H.b(P.bs(a))+": type '"+H.jG(a)+"' is not a subtype of type '"+b+"'")}}},
hp:{"^":"A;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hq:function(a){return new H.hp(a)}}},
dp:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.W(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.dp&&J.C(this.a,b.a)}},
cO:{"^":"bD;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gI:function(a){return new H.fO(this,[H.x(this,0)])},
aF:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bc(y,b)}else return this.e2(b)},
e2:function(a){var z=this.d
if(z==null)return!1
return this.aH(this.ax(z,J.W(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.af(z,b)
x=y==null?null:y.ga6()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.af(w,b)
x=y==null?null:y.ga6()
return x}else return this.e3(b)},
e3:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ax(z,J.W(a)&0x3ffffff)
x=this.aH(y,a)
if(x<0)return
return y[x].ga6()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aA()
this.b=z}this.b7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aA()
this.c=y}this.b7(y,b,c)}else{x=this.d
if(x==null){x=this.aA()
this.d=x}w=J.W(b)&0x3ffffff
v=this.ax(x,w)
if(v==null)this.aE(x,w,[this.ar(b,c)])
else{u=this.aH(v,b)
if(u>=0)v[u].sa6(c)
else v.push(this.ar(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.F(this))
z=z.c}},
b7:function(a,b,c){var z=this.af(a,b)
if(z==null)this.aE(a,b,this.ar(b,c))
else z.sa6(c)},
b8:function(){this.r=this.r+1&67108863},
ar:function(a,b){var z,y
z=new H.fN(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.C(a[y].ge_(),b))return y
return-1},
k:function(a){return P.cU(this)},
af:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aE:function(a,b,c){a[b]=c},
d4:function(a,b){delete a[b]},
bc:function(a,b){return this.af(a,b)!=null},
aA:function(){var z=Object.create(null)
this.aE(z,"<non-identifier-key>",z)
this.d4(z,"<non-identifier-key>")
return z}},
fN:{"^":"c;e_:a<,a6:b@,c,d"},
fO:{"^":"bq;a,$ti",
gi:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.ax(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.F(z))
y=y.c}}},
ax:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.F(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jY:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
jZ:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
k_:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jN:function(a){return J.at(H.z(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
c7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
V:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.ad(b,a))},
h2:{"^":"e;","%":"DataView;ArrayBufferView;bG|dE|dF|cW|dG|dH|a7"},
bG:{"^":"h2;",
gi:function(a){return a.length},
$ism:1,
$asm:I.bf},
cW:{"^":"dF;",
h:function(a,b){H.V(b,a,a.length)
return a[b]},
j:function(a,b,c){H.V(b,a,a.length)
a[b]=c},
$asb0:function(){return[P.aG]},
$asi:function(){return[P.aG]},
$ish:1,
$ash:function(){return[P.aG]},
"%":"Float64Array"},
a7:{"^":"dH;",
j:function(a,b,c){H.V(b,a,a.length)
a[b]=c},
$asb0:function(){return[P.G]},
$asi:function(){return[P.G]},
$ish:1,
$ash:function(){return[P.G]}},
h1:{"^":"cW;",$isbv:1,"%":"Float32Array"},
lF:{"^":"a7;",
h:function(a,b){H.V(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lG:{"^":"a7;",
h:function(a,b){H.V(b,a,a.length)
return a[b]},
$isfB:1,
"%":"Int32Array"},
lH:{"^":"a7;",
h:function(a,b){H.V(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lI:{"^":"a7;",
h:function(a,b){H.V(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lJ:{"^":"a7;",
h:function(a,b){H.V(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lK:{"^":"a7;",
gi:function(a){return a.length},
h:function(a,b){H.V(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lL:{"^":"a7;",
gi:function(a){return a.length},
h:function(a,b){H.V(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dE:{"^":"bG+i;"},
dF:{"^":"dE+b0;"},
dG:{"^":"bG+i;"},
dH:{"^":"dG+b0;"}}],["","",,P,{"^":"",
hW:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jI()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a2(new P.hY(z),1)).observe(y,{childList:true})
return new P.hX(z,y,x)}else if(self.setImmediate!=null)return P.jJ()
return P.jK()},
mA:[function(a){self.scheduleImmediate(H.a2(new P.hZ(a),0))},"$1","jI",4,0,6],
mB:[function(a){self.setImmediate(H.a2(new P.i_(a),0))},"$1","jJ",4,0,6],
mC:[function(a){P.jb(0,a)},"$1","jK",4,0,6],
jB:function(a,b){if(H.e_(a,{func:1,args:[P.aQ,P.aQ]})){b.toString
return a}else{b.toString
return a}},
jA:function(){var z,y
for(;z=$.ai,z!=null;){$.aE=null
y=z.b
$.ai=y
if(y==null)$.aD=null
z.a.$0()}},
mM:[function(){$.bX=!0
try{P.jA()}finally{$.aE=null
$.bX=!1
if($.ai!=null)$.$get$bS().$1(P.dX())}},"$0","dX",0,0,3],
dS:function(a){var z=new P.dv(a,null)
if($.ai==null){$.aD=z
$.ai=z
if(!$.bX)$.$get$bS().$1(P.dX())}else{$.aD.b=z
$.aD=z}},
jF:function(a){var z,y,x
z=$.ai
if(z==null){P.dS(a)
$.aE=$.aD
return}y=new P.dv(a,null)
x=$.aE
if(x==null){y.b=z
$.aE=y
$.ai=y}else{y.b=x.b
x.b=y
$.aE=y
if(y.b==null)$.aD=y}},
kb:function(a){var z=$.u
if(C.f===z){P.bd(null,null,C.f,a)
return}z.toString
P.bd(null,null,z,z.br(a))},
jE:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.M(u)
y=H.ae(u)
$.u.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.an(x)
w=t
v=x.gX()
c.$2(w,v)}}},
jt:function(a,b,c,d){var z=a.dE(0)
if(!!J.n(z).$isaP&&z!==$.$get$cI())z.ej(new P.jw(b,c,d))
else b.a2(c,d)},
ju:function(a,b){return new P.jv(a,b)},
hU:function(){return $.u},
bc:function(a,b,c,d,e){var z={}
z.a=d
P.jF(new P.jC(z,e))},
dQ:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
dR:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
jD:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
bd:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.br(d):c.dA(d)
P.dS(d)},
hY:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hX:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hZ:{"^":"f:1;a",
$0:function(){this.a.$0()}},
i_:{"^":"f:1;a",
$0:function(){this.a.$0()}},
ja:{"^":"c;a,b,c",
d_:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a2(new P.jc(this,b),0),a)
else throw H.a(P.o("`setTimeout()` not found."))},
p:{
jb:function(a,b){var z=new P.ja(!0,null,0)
z.d_(a,b)
return z}}},
jc:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kq:{"^":"c;$ti"},
i2:{"^":"c;$ti"},
j5:{"^":"i2;a,$ti",
dJ:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bL("Future already completed"))
z.ae(b)}},
dx:{"^":"c;aC:a<,b,c,d,e,$ti",
gds:function(){return this.b.b},
gbL:function(){return(this.c&1)!==0},
gdZ:function(){return(this.c&2)!==0},
gbK:function(){return this.c===8},
dX:function(a){return this.b.b.aK(this.d,a)},
e4:function(a){if(this.c!==6)return!0
return this.b.b.aK(this.d,J.an(a))},
dW:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.e_(z,{func:1,args:[P.c,P.aA]}))return x.ea(z,y.gJ(a),a.gX())
else return x.aK(z,y.gJ(a))},
dY:function(){return this.b.b.bY(this.d)}},
aa:{"^":"c;bi:a<,b,df:c<,$ti",
cV:function(a,b){this.a=4
this.c=a},
gd9:function(){return this.a===2},
gay:function(){return this.a>=4},
c2:function(a,b){var z,y,x
z=$.u
if(z!==C.f){z.toString
if(b!=null)b=P.jB(b,z)}y=new P.aa(0,z,null,[null])
x=b==null?1:3
this.as(new P.dx(null,y,x,a,b,[H.x(this,0),null]))
return y},
c1:function(a){return this.c2(a,null)},
ej:function(a){var z,y
z=$.u
y=new P.aa(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.x(this,0)
this.as(new P.dx(null,y,8,a,null,[z,z]))
return y},
as:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gay()){y.as(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bd(null,null,z,new P.ij(this,a))}},
bf:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaC()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gay()){v.bf(a)
return}this.a=v.a
this.c=v.c}z.a=this.aD(a)
y=this.b
y.toString
P.bd(null,null,y,new P.ip(z,this))}},
ag:function(){var z=this.c
this.c=null
return this.aD(z)},
aD:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaC()
z.a=y}return y},
ae:function(a){var z,y,x
z=this.$ti
y=H.dY(a,"$isaP",z,"$asaP")
if(y){z=H.dY(a,"$isaa",z,null)
if(z)P.dy(a,this)
else P.ik(a,this)}else{x=this.ag()
this.a=4
this.c=a
P.aC(this,x)}},
a2:[function(a,b){var z=this.ag()
this.a=8
this.c=new P.aY(a,b)
P.aC(this,z)},function(a){return this.a2(a,null)},"en","$2","$1","gbb",4,2,13],
$isaP:1,
p:{
ik:function(a,b){var z,y,x
b.a=1
try{a.c2(new P.il(b),new P.im(b))}catch(x){z=H.M(x)
y=H.ae(x)
P.kb(new P.io(b,z,y))}},
dy:function(a,b){var z
for(;a.gd9();)a=a.c
if(a.gay()){z=b.ag()
b.a=a.a
b.c=a.c
P.aC(b,z)}else{z=b.c
b.a=2
b.c=a
a.bf(z)}},
aC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.an(v)
t=v.gX()
y.toString
P.bc(null,null,y,u,t)}return}for(;b.gaC()!=null;b=s){s=b.a
b.a=null
P.aC(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbL()||b.gbK()){q=b.gds()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.an(v)
t=v.gX()
y.toString
P.bc(null,null,y,u,t)
return}p=$.u
if(p==null?q!=null:p!==q)$.u=q
else p=null
if(b.gbK())new P.is(z,x,b,w).$0()
else if(y){if(b.gbL())new P.ir(x,b,r).$0()}else if(b.gdZ())new P.iq(z,x,b).$0()
if(p!=null)$.u=p
y=x.b
if(!!J.n(y).$isaP){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aD(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dy(y,o)
return}}o=b.b
b=o.ag()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
ij:{"^":"f:1;a,b",
$0:function(){P.aC(this.a,this.b)}},
ip:{"^":"f:1;a,b",
$0:function(){P.aC(this.b,this.a.a)}},
il:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.ae(a)}},
im:{"^":"f:14;a",
$2:function(a,b){this.a.a2(a,b)},
$1:function(a){return this.$2(a,null)}},
io:{"^":"f:1;a,b,c",
$0:function(){this.a.a2(this.b,this.c)}},
is:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dY()}catch(w){y=H.M(w)
x=H.ae(w)
if(this.d){v=J.an(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aY(y,x)
u.a=!0
return}if(!!J.n(z).$isaP){if(z instanceof P.aa&&z.gbi()>=4){if(z.gbi()===8){v=this.b
v.b=z.gdf()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.c1(new P.it(t))
v.a=!1}}},
it:{"^":"f:0;a",
$1:function(a){return this.a}},
ir:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dX(this.c)}catch(x){z=H.M(x)
y=H.ae(x)
w=this.a
w.b=new P.aY(z,y)
w.a=!0}}},
iq:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e4(z)===!0&&w.e!=null){v=this.b
v.b=w.dW(z)
v.a=!1}}catch(u){y=H.M(u)
x=H.ae(u)
w=this.a
v=J.an(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aY(y,x)
s.a=!0}}},
dv:{"^":"c;a,b"},
d5:{"^":"c;$ti",
w:function(a,b){var z,y
z={}
y=new P.aa(0,$.u,null,[null])
z.a=null
z.a=this.bO(new P.hF(z,this,b,y),!0,new P.hG(y),y.gbb())
return y},
gi:function(a){var z,y
z={}
y=new P.aa(0,$.u,null,[P.G])
z.a=0
this.bO(new P.hH(z),!0,new P.hI(z,y),y.gbb())
return y}},
hF:{"^":"f;a,b,c,d",
$1:function(a){P.jE(new P.hD(this.c,a),new P.hE(),P.ju(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.c2(this.b,"d5",0)]}}},
hD:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hE:{"^":"f:0;",
$1:function(a){}},
hG:{"^":"f:1;a",
$0:function(){this.a.ae(null)}},
hH:{"^":"f:0;a",
$1:function(a){++this.a.a}},
hI:{"^":"f:1;a,b",
$0:function(){this.b.ae(this.a.a)}},
hC:{"^":"c;$ti"},
jw:{"^":"f:1;a,b,c",
$0:function(){return this.a.a2(this.b,this.c)}},
jv:{"^":"f:15;a,b",
$2:function(a,b){P.jt(this.a,this.b,a,b)}},
aY:{"^":"c;J:a>,X:b<",
k:function(a){return H.b(this.a)},
$isA:1},
ji:{"^":"c;"},
jC:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.d_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ao(y)
throw x}},
iP:{"^":"ji;",
eb:function(a){var z,y,x
try{if(C.f===$.u){a.$0()
return}P.dQ(null,null,this,a)}catch(x){z=H.M(x)
y=H.ae(x)
P.bc(null,null,this,z,y)}},
ec:function(a,b){var z,y,x
try{if(C.f===$.u){a.$1(b)
return}P.dR(null,null,this,a,b)}catch(x){z=H.M(x)
y=H.ae(x)
P.bc(null,null,this,z,y)}},
dA:function(a){return new P.iR(this,a)},
br:function(a){return new P.iQ(this,a)},
dC:function(a){return new P.iS(this,a)},
bY:function(a){if($.u===C.f)return a.$0()
return P.dQ(null,null,this,a)},
aK:function(a,b){if($.u===C.f)return a.$1(b)
return P.dR(null,null,this,a,b)},
ea:function(a,b,c){if($.u===C.f)return a.$2(b,c)
return P.jD(null,null,this,a,b,c)}},
iR:{"^":"f:1;a,b",
$0:function(){return this.a.bY(this.b)}},
iQ:{"^":"f:1;a,b",
$0:function(){return this.a.eb(this.b)}},
iS:{"^":"f:0;a,b",
$1:function(a){return this.a.ec(this.b,a)}}}],["","",,P,{"^":"",
a0:function(){return new H.cO(0,null,null,null,null,null,0,[null,null])},
cQ:function(a){return H.jO(a,new H.cO(0,null,null,null,null,null,0,[null,null]))},
N:function(a,b,c,d){return new P.iA(0,null,null,null,null,null,0,[d])},
fC:function(a,b,c){var z,y
if(P.bY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aF()
y.push(a)
try{P.jz(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.d6(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bx:function(a,b,c){var z,y,x
if(P.bY(a))return b+"..."+c
z=new P.bM(b)
y=$.$get$aF()
y.push(a)
try{x=z
x.a=P.d6(x.gY(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gY()+c
y=z.gY()
return y.charCodeAt(0)==0?y:y},
bY:function(a){var z,y
for(z=0;y=$.$get$aF(),z<y.length;++z)if(a===y[z])return!0
return!1},
jz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bB:function(a,b){var z,y
z=P.N(null,null,null,b)
for(y=J.aM(a);y.t();)z.P(0,y.gA(y))
return z},
cU:function(a){var z,y,x
z={}
if(P.bY(a))return"{...}"
y=new P.bM("")
try{$.$get$aF().push(a)
x=y
x.a=x.gY()+"{"
z.a=!0
J.ce(a,new P.fP(z,y))
z=y
z.a=z.gY()+"}"}finally{z=$.$get$aF()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gY()
return z.charCodeAt(0)==0?z:z},
iA:{"^":"iu;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.bV(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.d3(b)},
d3:function(a){var z=this.d
if(z==null)return!1
return this.aw(z[this.at(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.F(this))
z=z.b}},
P:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bW()
this.b=z}return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bW()
this.c=y}return this.b9(y,b)}else return this.d0(0,b)},
d0:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bW()
this.d=z}y=this.at(b)
x=z[y]
if(x==null)z[y]=[this.aB(b)]
else{if(this.aw(x,b)>=0)return!1
x.push(this.aB(b))}return!0},
bX:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bg(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bg(this.c,b)
else return this.dc(0,b)},
dc:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.at(b)]
x=this.aw(y,b)
if(x<0)return!1
this.bj(y.splice(x,1)[0])
return!0},
a5:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.az()}},
b9:function(a,b){if(a[b]!=null)return!1
a[b]=this.aB(b)
return!0},
bg:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bj(z)
delete a[b]
return!0},
az:function(){this.r=this.r+1&67108863},
aB:function(a){var z,y
z=new P.iB(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.az()
return z},
bj:function(a){var z,y
z=a.gda()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.az()},
at:function(a){return J.W(a)&0x3ffffff},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.C(a[y].gd5(),b))return y
return-1},
p:{
bW:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iB:{"^":"c;d5:a<,b,da:c<"},
bV:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.F(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iu:{"^":"hr;$ti"},
ls:{"^":"c;$ti"},
cR:{"^":"dD;$ti",$ish:1},
i:{"^":"c;$ti",
gH:function(a){return new H.cS(a,this.gi(a),0,null,[H.aW(this,a,"i",0)])},
q:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.F(a))}},
dV:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.F(a))}return y},
aY:function(a,b){return H.d7(a,b,null,H.aW(this,a,"i",0))},
n:function(a,b){var z=H.z([],[H.aW(this,a,"i",0)])
C.c.si(z,C.a.n(this.gi(a),C.a.gi(b)))
C.c.aa(z,0,this.gi(a),a)
C.c.aa(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bx(a,"[","]")}},
bD:{"^":"K;$ti"},
fP:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
K:{"^":"c;$ti",
w:function(a,b){var z,y
for(z=J.aM(this.gI(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.X(this.gI(a))},
k:function(a){return P.cU(a)}},
hs:{"^":"c;$ti",
M:function(a,b){var z
for(z=J.aM(b);z.t();)this.P(0,z.gA(z))},
k:function(a){return P.bx(this,"{","}")},
w:function(a,b){var z
for(z=new P.bV(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hr:{"^":"hs;$ti"},
dD:{"^":"c+i;$ti"}}],["","",,P,{"^":"",
k2:function(a,b,c){var z=H.hi(a,c)
if(z!=null)return z
throw H.a(new P.fx(a,null,null))},
fw:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.az(a)+"'"},
bs:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fw(a)},
cF:function(a){return new P.ig(a)},
a5:function(a){H.c7(H.b(a))},
bZ:{"^":"c;"},
"+bool":0,
cx:{"^":"c;dr:a<,b",
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.cx))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.a.R(this.a,b.gdr())},
gB:function(a){var z=this.a
return(z^C.a.bh(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fk(H.hh(this))
y=P.aN(H.hf(this))
x=P.aN(H.hb(this))
w=P.aN(H.hc(this))
v=P.aN(H.he(this))
u=P.aN(H.hg(this))
t=P.fl(H.hd(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fk:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aN:function(a){if(a>=10)return""+a
return"0"+a}}},
aG:{"^":"aH;"},
"+double":0,
aO:{"^":"c;a3:a<",
n:function(a,b){return new P.aO(C.a.n(this.a,b.ga3()))},
L:function(a,b){return new P.aO(this.a-b.ga3())},
a_:function(a,b){return C.a.a_(this.a,b.ga3())},
a9:function(a,b){return C.a.a9(this.a,b.ga3())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.a.R(this.a,b.ga3())},
k:function(a){var z,y,x,w,v
z=new P.fs()
y=this.a
if(y<0)return"-"+new P.aO(0-y).k(0)
x=z.$1(C.a.G(y,6e7)%60)
w=z.$1(C.a.G(y,1e6)%60)
v=new P.fr().$1(y%1e6)
return""+C.a.G(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fq:function(a,b,c,d,e,f){return new P.aO(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
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
A:{"^":"c;",
gX:function(){return H.ae(this.$thrownJsError)}},
d_:{"^":"A;",
k:function(a){return"Throw of null."}},
a6:{"^":"A;a,b,c,d",
gav:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gau:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gav()+y+x
if(!this.a)return w
v=this.gau()
u=P.bs(this.b)
return w+v+": "+H.b(u)},
p:{
f2:function(a){return new P.a6(!1,null,null,a)},
f3:function(a,b,c){return new P.a6(!0,a,b,c)}}},
bH:{"^":"a6;e,f,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
hj:function(a){return new P.bH(null,null,!1,null,null,a)},
b7:function(a,b,c){return new P.bH(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.bH(b,c,!0,a,d,"Invalid value")},
hk:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.ah(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.ah(b,a,c,"end",f))
return b}}},
fA:{"^":"a6;e,i:f>,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){if(J.aJ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.X(b)
return new P.fA(b,z,!0,a,c,"Index out of range")}}},
hQ:{"^":"A;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
o:function(a){return new P.hQ(a)}}},
hO:{"^":"A;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
ds:function(a){return new P.hO(a)}}},
ba:{"^":"A;a",
k:function(a){return"Bad state: "+this.a},
p:{
bL:function(a){return new P.ba(a)}}},
fg:{"^":"A;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bs(z))+"."},
p:{
F:function(a){return new P.fg(a)}}},
d3:{"^":"c;",
k:function(a){return"Stack Overflow"},
gX:function(){return},
$isA:1},
fj:{"^":"A;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kN:{"^":"c;"},
ig:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
fx:{"^":"c;a,b,c",
k:function(a){var z,y
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.b(z):"FormatException"
return y}},
G:{"^":"aH;"},
"+int":0,
b1:{"^":"c;$ti",
aM:["cv",function(a,b){return new H.du(this,b,[H.c2(this,"b1",0)])}],
w:function(a,b){var z
for(z=this.gH(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gH(this)
for(y=0;z.t();)++y
return y},
gW:function(a){var z,y
z=this.gH(this)
if(!z.t())throw H.a(H.fD())
y=z.gA(z)
if(z.t())throw H.a(H.fF())
return y},
q:function(a,b){var z,y,x
if(b<0)H.I(P.ah(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.fC(this,"(",")")}},
fG:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bC:{"^":"c;$ti"},
aQ:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aH:{"^":"c;"},
"+num":0,
c:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.ay(this)},
k:function(a){return"Instance of '"+H.az(this)+"'"},
toString:function(){return this.k(this)}},
aA:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
bM:{"^":"c;Y:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d6:function(a,b,c){var z=J.aM(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.t())}else{a+=H.b(z.gA(z))
for(;z.t();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
dZ:function(){return document},
ft:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).S(z,a,b,c)
y.toString
z=new H.du(new W.O(y),new W.fu(),[W.t])
return z.gW(z)},
fv:function(a){return"wheel"},
aq:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eH(a)
if(typeof y==="string")z=a.tagName}catch(x){H.M(x)}return z},
ib:function(a,b){return document.createElement(a)},
ab:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dC:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dP:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.i5(a)
if(!!J.n(z).$isy)return z
return}else return a},
dT:function(a){var z=$.u
if(z===C.f)return a
return z.dC(a)},
p:{"^":"ag;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kf:{"^":"bI;l:x=,m:y=","%":"Accelerometer|LinearAccelerationSensor"},
kg:{"^":"e;i:length=","%":"AccessibleNodeList"},
kh:{"^":"p;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ki:{"^":"p;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
km:{"^":"p;ah:href}","%":"HTMLBaseElement"},
bm:{"^":"p;",$isbm:1,"%":"HTMLBodyElement"},
kn:{"^":"p;E:name=,K:value=","%":"HTMLButtonElement"},
f8:{"^":"p;C:height},D:width}",
aO:function(a,b,c){if(c!=null)return a.getContext(b,P.jL(c,null))
return a.getContext(b)},
cj:function(a,b){return this.aO(a,b,null)},
"%":"HTMLCanvasElement"},
ko:{"^":"e;",
dN:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
an:function(a){return P.L(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kp:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kr:{"^":"Y;U:style=","%":"CSSFontFaceRule"},
ks:{"^":"Y;U:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kt:{"^":"Y;U:style=","%":"CSSPageRule"},
ku:{"^":"b_;i:length=","%":"CSSPerspective"},
kv:{"^":"bp;l:x=,m:y=","%":"CSSPositionValue"},
kw:{"^":"b_;l:x=,m:y=","%":"CSSRotation"},
Y:{"^":"e;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kx:{"^":"b_;l:x=,m:y=","%":"CSSScale"},
fh:{"^":"i3;i:length=",
ba:function(a,b){var z,y
z=$.$get$cv()
y=z[b]
if(typeof y==="string")return y
y=this.dl(a,b)
z[b]=y
return y},
dl:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fm()+b
if(z in a)return z
return b},
di:function(a,b,c,d){a.setProperty(b,c,d)},
sC:function(a,b){a.height=b},
sD:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fi:{"^":"c;",
sdU:function(a,b){this.di(a,this.ba(a,"float"),b,"")}},
ky:{"^":"Y;U:style=","%":"CSSStyleRule"},
bp:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b_:{"^":"e;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kz:{"^":"bp;i:length=","%":"CSSTransformValue"},
kA:{"^":"b_;l:x=,m:y=","%":"CSSTranslation"},
kB:{"^":"bp;i:length=","%":"CSSUnparsedValue"},
kC:{"^":"Y;U:style=","%":"CSSViewportRule"},
kD:{"^":"p;K:value=","%":"HTMLDataElement"},
kE:{"^":"e;i:length=","%":"DataTransferItemList"},
kF:{"^":"e;l:x=,m:y=","%":"DeviceAcceleration"},
fn:{"^":"p;","%":"HTMLDivElement"},
kG:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
kH:{"^":"fo;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"DOMPoint"},
fo:{"^":"e;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":";DOMPointReadOnly"},
kI:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a8]},
$asi:function(){return[P.a8]},
$ish:1,
$ash:function(){return[P.a8]},
$ask:function(){return[P.a8]},
"%":"ClientRectList|DOMRectList"},
fp:{"^":"e;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gD(a))+" x "+H.b(this.gC(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa8)return!1
return a.left===z.gbM(b)&&a.top===z.gc3(b)&&this.gD(a)===z.gD(b)&&this.gC(a)===z.gC(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gD(a)
w=this.gC(a)
return W.dC(W.ab(W.ab(W.ab(W.ab(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc4:function(a){return new P.a1(a.left,a.top,[null])},
gC:function(a){return a.height},
gbM:function(a){return a.left},
gc3:function(a){return a.top},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa8:1,
$asa8:I.bf,
"%":";DOMRectReadOnly"},
kJ:{"^":"i9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$asi:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kK:{"^":"e;i:length=","%":"DOMTokenList"},
ag:{"^":"t;U:style=,be:namespaceURI=,ed:tagName=",
gdv:function(a){return new W.ia(a)},
k:function(a){return a.localName},
S:["ap",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cE
if(z==null){z=H.z([],[W.cX])
y=new W.cY(z)
z.push(W.dz(null))
z.push(W.dL())
$.cE=y
d=y}else d=z
z=$.cD
if(z==null){z=new W.dO(d)
$.cD=z
c=z}else{z.a=d
c=z}}if($.Z==null){z=document
y=z.implementation.createHTMLDocument("")
$.Z=y
$.br=y.createRange()
y=$.Z
y.toString
x=y.createElement("base")
J.eS(x,z.baseURI)
$.Z.head.appendChild(x)}z=$.Z
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.Z
if(!!this.$isbm)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.Z.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.v(C.P,a.tagName)){$.br.selectNodeContents(w)
v=$.br.createContextualFragment(b)}else{w.innerHTML=b
v=$.Z.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.Z.body
if(w==null?z!=null:w!==z)J.cj(w)
c.aW(v)
document.adoptNode(v)
return v},function(a,b,c){return this.S(a,b,c,null)},"dM",null,null,"geo",5,5,null],
cm:function(a,b,c,d){a.textContent=null
a.appendChild(this.S(a,b,c,d))},
cl:function(a,b){return this.cm(a,b,null,null)},
aN:function(a){return a.getBoundingClientRect()},
gbR:function(a){return new W.U(a,"change",!1,[W.a_])},
gbS:function(a){return new W.U(a,"mousedown",!1,[W.S])},
gbT:function(a){return new W.U(a,"mousemove",!1,[W.S])},
gbU:function(a){return new W.U(a,"mouseup",!1,[W.S])},
gbV:function(a){return new W.U(a,W.fv(a),!1,[W.aT])},
$isag:1,
"%":";Element"},
fu:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isag}},
kL:{"^":"p;C:height},E:name=,D:width}","%":"HTMLEmbedElement"},
kM:{"^":"a_;J:error=","%":"ErrorEvent"},
a_:{"^":"e;",
am:function(a){return a.preventDefault()},
$isa_:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
y:{"^":"e;",
bn:["ct",function(a,b,c,d){if(c!=null)this.d1(a,b,c,!1)}],
d1:function(a,b,c,d){return a.addEventListener(b,H.a2(c,1),!1)},
dd:function(a,b,c,d){return a.removeEventListener(b,H.a2(c,1),!1)},
$isy:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dI|dJ|dM|dN"},
l5:{"^":"p;E:name=","%":"HTMLFieldSetElement"},
l6:{"^":"ii;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bu]},
$asi:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$ask:function(){return[W.bu]},
"%":"FileList"},
l7:{"^":"y;J:error=","%":"FileReader"},
l8:{"^":"y;J:error=,i:length=","%":"FileWriter"},
la:{"^":"e;U:style=","%":"FontFace"},
lb:{"^":"y;",
ep:function(a,b,c){return a.forEach(H.a2(b,3),c)},
w:function(a,b){b=H.a2(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
ld:{"^":"p;i:length=,E:name=","%":"HTMLFormElement"},
lf:{"^":"bI;l:x=,m:y=","%":"Gyroscope"},
lg:{"^":"e;i:length=","%":"History"},
lh:{"^":"iw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
li:{"^":"p;C:height},E:name=,D:width}","%":"HTMLIFrameElement"},
lj:{"^":"p;C:height},D:width}","%":"HTMLImageElement"},
ll:{"^":"p;dG:checked=,C:height},E:name=,K:value=,D:width}","%":"HTMLInputElement"},
b2:{"^":"dq;",
gek:function(a){return a.which},
$isb2:1,
"%":"KeyboardEvent"},
lp:{"^":"p;K:value=","%":"HTMLLIElement"},
lr:{"^":"p;ah:href}","%":"HTMLLinkElement"},
lt:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
lu:{"^":"bI;l:x=,m:y=","%":"Magnetometer"},
lv:{"^":"p;E:name=","%":"HTMLMapElement"},
fS:{"^":"p;J:error=","%":"HTMLAudioElement;HTMLMediaElement"},
ly:{"^":"e;i:length=","%":"MediaList"},
lz:{"^":"y;",
bn:function(a,b,c,d){if(J.C(b,"message"))a.start()
this.ct(a,b,c,!1)},
"%":"MessagePort"},
lA:{"^":"p;E:name=","%":"HTMLMetaElement"},
lB:{"^":"p;K:value=","%":"HTMLMeterElement"},
lC:{"^":"iC;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.z([],[P.l])
this.w(a,new W.fU(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"MIDIInputMap"},
fU:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
lD:{"^":"iD;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.z([],[P.l])
this.w(a,new W.fV(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
fV:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
lE:{"^":"iF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bF]},
$asi:function(){return[W.bF]},
$ish:1,
$ash:function(){return[W.bF]},
$ask:function(){return[W.bF]},
"%":"MimeTypeArray"},
S:{"^":"dq;bw:button=",
ge5:function(a){return new P.a1(a.movementX,a.movementY,[null])},
gbQ:function(a){var z,y,x
if(!!a.offsetX)return new P.a1(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.dP(z)).$isag)throw H.a(P.o("offsetX is only supported on elements"))
y=W.dP(z)
z=[null]
x=new P.a1(a.clientX,a.clientY,z).L(0,J.eI(J.eK(y)))
return new P.a1(J.cl(x.a),J.cl(x.b),z)}},
$isS:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
O:{"^":"cR;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bL("No elements"))
if(y>1)throw H.a(P.bL("More than one element"))
return z.firstChild},
M:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.j(y,b)
z.replaceChild(c,y[b])},
gH:function(a){var z=this.a.childNodes
return new W.cH(z,z.length,-1,null,[H.aW(C.S,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$ascR:function(){return[W.t]},
$asi:function(){return[W.t]},
$ash:function(){return[W.t]},
$asdD:function(){return[W.t]}},
t:{"^":"y;al:parentNode=,aJ:previousSibling=",
ge7:function(a){return new W.O(a)},
e9:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cu(a):z},
$ist:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lM:{"^":"e;",
e8:[function(a){return a.previousNode()},"$0","gaJ",1,0,4],
"%":"NodeIterator"},
h3:{"^":"iH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lP:{"^":"p;C:height},E:name=,D:width}","%":"HTMLObjectElement"},
lR:{"^":"p;K:value=","%":"HTMLOptionElement"},
lS:{"^":"p;E:name=,K:value=","%":"HTMLOutputElement"},
lT:{"^":"p;E:name=,K:value=","%":"HTMLParamElement"},
b5:{"^":"e;i:length=","%":"Plugin"},
lV:{"^":"iL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b5]},
$asi:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$ask:function(){return[W.b5]},
"%":"PluginArray"},
lY:{"^":"p;K:value=","%":"HTMLProgressElement"},
m_:{"^":"e;",
aN:function(a){return a.getBoundingClientRect()},
"%":"Range"},
m5:{"^":"iT;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.z([],[P.l])
this.w(a,new W.ho(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"RTCStatsReport"},
ho:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m6:{"^":"p;i:length=,E:name=,K:value=","%":"HTMLSelectElement"},
bI:{"^":"y;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
m7:{"^":"a_;J:error=","%":"SensorErrorEvent"},
m8:{"^":"p;E:name=","%":"HTMLSlotElement"},
m9:{"^":"dJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bJ]},
$asi:function(){return[W.bJ]},
$ish:1,
$ash:function(){return[W.bJ]},
$ask:function(){return[W.bJ]},
"%":"SourceBufferList"},
ma:{"^":"iZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bK]},
$asi:function(){return[W.bK]},
$ish:1,
$ash:function(){return[W.bK]},
$ask:function(){return[W.bK]},
"%":"SpeechGrammarList"},
mb:{"^":"a_;J:error=","%":"SpeechRecognitionError"},
b9:{"^":"e;i:length=","%":"SpeechRecognitionResult"},
md:{"^":"j1;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gI:function(a){var z=H.z([],[P.l])
this.w(a,new W.hB(z))
return z},
gi:function(a){return a.length},
$asK:function(){return[P.l,P.l]},
"%":"Storage"},
hB:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
hK:{"^":"p;",
S:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=W.ft("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.O(y).M(0,J.eE(z))
return y},
"%":"HTMLTableElement"},
mg:{"^":"p;",
S:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.S(z.createElement("table"),b,c,d)
z.toString
z=new W.O(z)
x=z.gW(z)
x.toString
z=new W.O(x)
w=z.gW(z)
y.toString
w.toString
new W.O(y).M(0,new W.O(w))
return y},
"%":"HTMLTableRowElement"},
mh:{"^":"p;",
S:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.S(z.createElement("table"),b,c,d)
z.toString
z=new W.O(z)
x=z.gW(z)
y.toString
x.toString
new W.O(y).M(0,new W.O(x))
return y},
"%":"HTMLTableSectionElement"},
d9:{"^":"p;",$isd9:1,"%":"HTMLTemplateElement"},
mi:{"^":"p;E:name=,K:value=","%":"HTMLTextAreaElement"},
mk:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bP]},
$asi:function(){return[W.bP]},
$ish:1,
$ash:function(){return[W.bP]},
$ask:function(){return[W.bP]},
"%":"TextTrackCueList"},
ml:{"^":"dN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bO]},
$asi:function(){return[W.bO]},
$ish:1,
$ash:function(){return[W.bO]},
$ask:function(){return[W.bO]},
"%":"TextTrackList"},
mm:{"^":"e;i:length=","%":"TimeRanges"},
mn:{"^":"je;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bR]},
$asi:function(){return[W.bR]},
$ish:1,
$ash:function(){return[W.bR]},
$ask:function(){return[W.bR]},
"%":"TouchList"},
mo:{"^":"e;i:length=","%":"TrackDefaultList"},
mr:{"^":"e;",
eq:[function(a){return a.parentNode()},"$0","gal",1,0,4],
e8:[function(a){return a.previousNode()},"$0","gaJ",1,0,4],
"%":"TreeWalker"},
dq:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mt:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
mv:{"^":"e;l:x=","%":"VRStageBoundsPoint"},
mx:{"^":"fS;C:height},D:width}","%":"HTMLVideoElement"},
my:{"^":"y;i:length=","%":"VideoTrackList"},
aT:{"^":"S;",
gdQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.o("deltaY is not supported"))},
$isaT:1,
"%":"WheelEvent"},
hS:{"^":"y;",
gdu:function(a){var z,y
z=P.aH
y=new P.aa(0,$.u,null,[z])
this.d7(a)
this.de(a,W.dT(new W.hT(new P.j5(y,[z]))))
return y},
de:function(a,b){return a.requestAnimationFrame(H.a2(b,1))},
d7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hT:{"^":"f:0;a",
$1:function(a){this.a.dJ(0,a)}},
mz:{"^":"y;"},
mD:{"^":"t;E:name=,be:namespaceURI=","%":"Attr"},
mE:{"^":"jk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$ish:1,
$ash:function(){return[W.Y]},
$ask:function(){return[W.Y]},
"%":"CSSRuleList"},
mF:{"^":"fp;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa8)return!1
return a.left===z.gbM(b)&&a.top===z.gc3(b)&&a.width===z.gD(b)&&a.height===z.gC(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dC(W.ab(W.ab(W.ab(W.ab(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc4:function(a){return new P.a1(a.left,a.top,[null])},
gC:function(a){return a.height},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mG:{"^":"jm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bw]},
$asi:function(){return[W.bw]},
$ish:1,
$ash:function(){return[W.bw]},
$ask:function(){return[W.bw]},
"%":"GamepadList"},
mJ:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mK:{"^":"jq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b9]},
$asi:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"SpeechRecognitionResultList"},
mL:{"^":"js;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bN]},
$asi:function(){return[W.bN]},
$ish:1,
$ash:function(){return[W.bN]},
$ask:function(){return[W.bN]},
"%":"StyleSheetList"},
i0:{"^":"bD;d8:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gI(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gI:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.z([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=z[w]
u=J.d(v)
if(u.gbe(v)==null)y.push(u.gE(v))}return y},
$asbD:function(){return[P.l,P.l]},
$asK:function(){return[P.l,P.l]}},
ia:{"^":"i0;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gI(this).length}},
ic:{"^":"d5;a,b,c,$ti",
bO:function(a,b,c,d){return W.a9(this.a,this.b,a,!1,H.x(this,0))}},
U:{"^":"ic;a,b,c,$ti"},
id:{"^":"hC;a,b,c,d,e,$ti",
cU:function(a,b,c,d,e){this.dn()},
dE:function(a){if(this.b==null)return
this.dq()
this.b=null
this.d=null
return},
dn:function(){var z=this.d
if(z!=null&&this.a<=0)J.eg(this.b,this.c,z,!1)},
dq:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ef(x,this.c,z,!1)}},
p:{
a9:function(a,b,c,d,e){var z=W.dT(new W.ie(c))
z=new W.id(0,a,b,z,!1,[e])
z.cU(a,b,c,!1,e)
return z}}},
ie:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
bT:{"^":"c;ce:a<",
cW:function(a){var z,y
z=$.$get$bU()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.O[y],W.jV())
for(y=0;y<12;++y)z.j(0,C.p[y],W.jW())}},
Z:function(a){return $.$get$dA().v(0,W.aq(a))},
V:function(a,b,c){var z,y,x
z=W.aq(a)
y=$.$get$bU()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dz:function(a){var z,y
z=document.createElement("a")
y=new W.iU(z,window.location)
y=new W.bT(y)
y.cW(a)
return y},
mH:[function(a,b,c,d){return!0},"$4","jV",16,0,9],
mI:[function(a,b,c,d){var z,y,x,w,v
z=d.gce()
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
return z},"$4","jW",16,0,9]}},
k:{"^":"c;$ti",
gH:function(a){return new W.cH(a,this.gi(a),-1,null,[H.aW(this,a,"k",0)])}},
cY:{"^":"c;a",
Z:function(a){return C.c.bo(this.a,new W.h5(a))},
V:function(a,b,c){return C.c.bo(this.a,new W.h4(a,b,c))}},
h5:{"^":"f:0;a",
$1:function(a){return a.Z(this.a)}},
h4:{"^":"f:0;a,b,c",
$1:function(a){return a.V(this.a,this.b,this.c)}},
iV:{"^":"c;ce:d<",
cZ:function(a,b,c,d){var z,y,x
this.a.M(0,c)
z=b.aM(0,new W.iW())
y=b.aM(0,new W.iX())
this.b.M(0,z)
x=this.c
x.M(0,C.Q)
x.M(0,y)},
Z:function(a){return this.a.v(0,W.aq(a))},
V:["cz",function(a,b,c){var z,y
z=W.aq(a)
y=this.c
if(y.v(0,H.b(z)+"::"+b))return this.d.dt(c)
else if(y.v(0,"*::"+b))return this.d.dt(c)
else{y=this.b
if(y.v(0,H.b(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.b(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
iW:{"^":"f:0;",
$1:function(a){return!C.c.v(C.p,a)}},
iX:{"^":"f:0;",
$1:function(a){return C.c.v(C.p,a)}},
j6:{"^":"iV;e,a,b,c,d",
V:function(a,b,c){if(this.cz(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cf(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
dL:function(){var z=P.l
z=new W.j6(P.bB(C.o,z),P.N(null,null,null,z),P.N(null,null,null,z),P.N(null,null,null,z),null)
z.cZ(null,new H.fQ(C.o,new W.j7(),[H.x(C.o,0),null]),["TEMPLATE"],null)
return z}}},
j7:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
j4:{"^":"c;",
Z:function(a){var z=J.n(a)
if(!!z.$isd2)return!1
z=!!z.$isw
if(z&&W.aq(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.l.cp(b,"on"))return!1
return this.Z(a)}},
cH:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ee(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
i4:{"^":"c;a",$isy:1,p:{
i5:function(a){if(a===window)return a
else return new W.i4(a)}}},
cX:{"^":"c;"},
lN:{"^":"c;"},
ms:{"^":"c;"},
iU:{"^":"c;a,b"},
dO:{"^":"c;a",
aW:function(a){new W.jh(this).$2(a,null)},
a4:function(a,b){if(b==null)J.cj(a)
else b.removeChild(a)},
dh:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cf(a)
x=y.gd8().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.M(t)}v="element unprintable"
try{v=J.ao(a)}catch(t){H.M(t)}try{u=W.aq(a)
this.dg(a,b,z,v,u,y,x)}catch(t){if(H.M(t) instanceof P.a6)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dg:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gI(f)
y=H.z(z.slice(0),[H.x(z,0)])
for(x=f.gI(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.j(y,x)
w=y[x]
if(!this.a.V(a,J.eW(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isd9)this.aW(a.content)}},
jh:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dh(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eG(z)}catch(w){H.M(w)
v=z
if(x){u=J.d(v)
if(u.gal(v)!=null){u.gal(v)
u.gal(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
i3:{"^":"e+fi;"},
i6:{"^":"e+i;"},
i7:{"^":"i6+k;"},
i8:{"^":"e+i;"},
i9:{"^":"i8+k;"},
ih:{"^":"e+i;"},
ii:{"^":"ih+k;"},
iv:{"^":"e+i;"},
iw:{"^":"iv+k;"},
iC:{"^":"e+K;"},
iD:{"^":"e+K;"},
iE:{"^":"e+i;"},
iF:{"^":"iE+k;"},
iG:{"^":"e+i;"},
iH:{"^":"iG+k;"},
iK:{"^":"e+i;"},
iL:{"^":"iK+k;"},
iT:{"^":"e+K;"},
dI:{"^":"y+i;"},
dJ:{"^":"dI+k;"},
iY:{"^":"e+i;"},
iZ:{"^":"iY+k;"},
j1:{"^":"e+K;"},
j8:{"^":"e+i;"},
j9:{"^":"j8+k;"},
dM:{"^":"y+i;"},
dN:{"^":"dM+k;"},
jd:{"^":"e+i;"},
je:{"^":"jd+k;"},
jj:{"^":"e+i;"},
jk:{"^":"jj+k;"},
jl:{"^":"e+i;"},
jm:{"^":"jl+k;"},
jn:{"^":"e+i;"},
jo:{"^":"jn+k;"},
jp:{"^":"e+i;"},
jq:{"^":"jp+k;"},
jr:{"^":"e+i;"},
js:{"^":"jr+k;"}}],["","",,P,{"^":"",
L:function(a){var z,y,x,w,v
if(a==null)return
z=P.a0()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jL:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.ce(a,new P.jM(z))
return z},
cC:function(){var z=$.cB
if(z==null){z=J.bj(window.navigator.userAgent,"Opera",0)
$.cB=z}return z},
fm:function(){var z,y
z=$.cy
if(z!=null)return z
y=$.cz
if(y==null){y=J.bj(window.navigator.userAgent,"Firefox",0)
$.cz=y}if(y)z="-moz-"
else{y=$.cA
if(y==null){y=P.cC()!==!0&&J.bj(window.navigator.userAgent,"Trident/",0)
$.cA=y}if(y)z="-ms-"
else z=P.cC()===!0?"-o-":"-webkit-"}$.cy=z
return z},
jM:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",m4:{"^":"y;J:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mp:{"^":"y;J:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ix:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iM:{"^":"c;a,b",
cY:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.a.G(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.a.G(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.a.G(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.a.G(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.a.G(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.a.G(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.a.G(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.T()
this.T()
this.T()
this.T()},
T:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.a.G(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
bP:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.a(P.hj("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)>>>0===0){this.T()
return(this.a&z)>>>0}do{this.T()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
aI:function(){this.T()
var z=this.a
this.T()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
p:{
iN:function(a){var z=new P.iM(0,0)
z.cY(a)
return z}}},
a1:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
F:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a1))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gB:function(a){var z,y
z=J.W(this.a)
y=J.W(this.b)
return P.ix(P.dB(P.dB(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.a.gl(b)
if(typeof z!=="number")return z.n()
y=C.b.n(z,y)
z=this.b
x=C.a.gm(b)
if(typeof z!=="number")return z.n()
return new P.a1(y,C.b.n(z,x),this.$ti)},
L:function(a,b){var z,y,x,w
z=this.a
y=J.d(b)
x=y.gl(b)
if(typeof z!=="number")return z.L()
if(typeof x!=="number")return H.E(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.L()
if(typeof y!=="number")return H.E(y)
return new P.a1(z-x,w-y,this.$ti)}},
lZ:{"^":"c;"},
iO:{"^":"c;$ti"},
a8:{"^":"iO;$ti"}}],["","",,P,{"^":"",kO:{"^":"w;l:x=,m:y=","%":"SVGFEBlendElement"},kP:{"^":"w;l:x=,m:y=","%":"SVGFEColorMatrixElement"},kQ:{"^":"w;l:x=,m:y=","%":"SVGFEComponentTransferElement"},kR:{"^":"w;l:x=,m:y=","%":"SVGFECompositeElement"},kS:{"^":"w;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},kT:{"^":"w;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},kU:{"^":"w;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},kV:{"^":"w;l:x=,m:y=","%":"SVGFEFloodElement"},kW:{"^":"w;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},kX:{"^":"w;l:x=,m:y=","%":"SVGFEImageElement"},kY:{"^":"w;l:x=,m:y=","%":"SVGFEMergeElement"},kZ:{"^":"w;l:x=,m:y=","%":"SVGFEMorphologyElement"},l_:{"^":"w;l:x=,m:y=","%":"SVGFEOffsetElement"},l0:{"^":"w;l:x=,m:y=","%":"SVGFEPointLightElement"},l1:{"^":"w;l:x=,m:y=","%":"SVGFESpecularLightingElement"},l2:{"^":"w;l:x=,m:y=","%":"SVGFESpotLightElement"},l3:{"^":"w;l:x=,m:y=","%":"SVGFETileElement"},l4:{"^":"w;l:x=,m:y=","%":"SVGFETurbulenceElement"},l9:{"^":"w;l:x=,m:y=","%":"SVGFilterElement"},lc:{"^":"ar;l:x=,m:y=","%":"SVGForeignObjectElement"},fy:{"^":"ar;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ar:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lk:{"^":"ar;l:x=,m:y=","%":"SVGImageElement"},lq:{"^":"iz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cP]},
$ish:1,
$ash:function(){return[P.cP]},
$ask:function(){return[P.cP]},
"%":"SVGLengthList"},lw:{"^":"w;l:x=,m:y=","%":"SVGMaskElement"},lO:{"^":"iJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.d0]},
$ish:1,
$ash:function(){return[P.d0]},
$ask:function(){return[P.d0]},
"%":"SVGNumberList"},lU:{"^":"w;l:x=,m:y=","%":"SVGPatternElement"},lW:{"^":"e;l:x=,m:y=","%":"SVGPoint"},lX:{"^":"e;i:length=","%":"SVGPointList"},m0:{"^":"e;l:x=,m:y=","%":"SVGRect"},m1:{"^":"fy;l:x=,m:y=","%":"SVGRectElement"},d2:{"^":"w;",$isd2:1,"%":"SVGScriptElement"},me:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},w:{"^":"ag;",
S:function(a,b,c,d){var z,y,x,w,v,u
z=H.z([],[W.cX])
z.push(W.dz(null))
z.push(W.dL())
z.push(new W.j4())
c=new W.dO(new W.cY(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dM(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.O(w)
u=z.gW(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gbR:function(a){return new W.U(a,"change",!1,[W.a_])},
gbS:function(a){return new W.U(a,"mousedown",!1,[W.S])},
gbT:function(a){return new W.U(a,"mousemove",!1,[W.S])},
gbU:function(a){return new W.U(a,"mouseup",!1,[W.S])},
gbV:function(a){return new W.U(a,"mousewheel",!1,[W.aT])},
$isw:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mf:{"^":"ar;l:x=,m:y=","%":"SVGSVGElement"},hL:{"^":"ar;","%":"SVGTextPathElement;SVGTextContentElement"},mj:{"^":"hL;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mq:{"^":"jg;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.dc]},
$ish:1,
$ash:function(){return[P.dc]},
$ask:function(){return[P.dc]},
"%":"SVGTransformList"},mu:{"^":"ar;l:x=,m:y=","%":"SVGUseElement"},iy:{"^":"e+i;"},iz:{"^":"iy+k;"},iI:{"^":"e+i;"},iJ:{"^":"iI+k;"},j2:{"^":"e+i;"},j3:{"^":"j2+k;"},jf:{"^":"e+i;"},jg:{"^":"jf+k;"}}],["","",,P,{"^":"",kj:{"^":"e;i:length=","%":"AudioBuffer"},kk:{"^":"i1;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.z([],[P.l])
this.w(a,new P.f5(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"AudioParamMap"},f5:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},kl:{"^":"y;i:length=","%":"AudioTrackList"},f6:{"^":"y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lQ:{"^":"f6;i:length=","%":"OfflineAudioContext"},i1:{"^":"e+K;"}}],["","",,P,{"^":"",m2:{"^":"e;",
bm:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindTexture(b,c)},
bt:function(a,b){return a.blendEquation(b)},
bu:function(a,b,c){return a.blendFunc(b,c)},
bv:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
an:function(a){return P.L(a.getContextAttributes())},
aP:function(a){return a.getError()},
aQ:function(a,b){return a.getProgramInfoLog(b)},
aR:function(a,b,c){return a.getProgramParameter(b,c)},
aS:function(a,b){return a.getShaderInfoLog(b)},
aT:function(a,b,c){return a.getShaderParameter(b,c)},
aU:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bW:function(a,b,c){return a.pixelStorei(b,c)},
aX:function(a,b,c){return a.shaderSource(b,c)},
aZ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aL:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bZ:function(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
c_:function(a,b,c,d){return a.texParameterf(b,c,d)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
c5:function(a,b,c){return a.uniform1f(b,c)},
c6:function(a,b,c){return a.uniform1fv(b,c)},
c7:function(a,b,c){return a.uniform1i(b,c)},
c8:function(a,b,c){return a.uniform1iv(b,c)},
c9:function(a,b,c){return a.uniform2fv(b,c)},
ca:function(a,b,c){return a.uniform3fv(b,c)},
cb:function(a,b,c){return a.uniform4fv(b,c)},
cc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},m3:{"^":"e;",
dw:function(a,b){return a.beginTransformFeedback(b)},
dz:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
dB:function(a,b,c){return a.bindTransformFeedback(b,c)},
dD:function(a,b){return a.bindVertexArray(b)},
dL:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
dO:function(a){return a.createTransformFeedback()},
dP:function(a){return a.createVertexArray()},
dR:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dS:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dT:function(a){return a.endTransformFeedback()},
ei:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
bm:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindTexture(b,c)},
bt:function(a,b){return a.blendEquation(b)},
bu:function(a,b,c){return a.blendFunc(b,c)},
bv:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
an:function(a){return P.L(a.getContextAttributes())},
aP:function(a){return a.getError()},
aQ:function(a,b){return a.getProgramInfoLog(b)},
aR:function(a,b,c){return a.getProgramParameter(b,c)},
aS:function(a,b){return a.getShaderInfoLog(b)},
aT:function(a,b,c){return a.getShaderParameter(b,c)},
aU:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bW:function(a,b,c){return a.pixelStorei(b,c)},
aX:function(a,b,c){return a.shaderSource(b,c)},
aZ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aL:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bZ:function(a,b,c,d,e,f,g){return this.aL(a,b,c,d,e,f,g,null,null,null)},
c_:function(a,b,c,d){return a.texParameterf(b,c,d)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
c5:function(a,b,c){return a.uniform1f(b,c)},
c6:function(a,b,c){return a.uniform1fv(b,c)},
c7:function(a,b,c){return a.uniform1i(b,c)},
c8:function(a,b,c){return a.uniform1iv(b,c)},
c9:function(a,b,c){return a.uniform2fv(b,c)},
ca:function(a,b,c){return a.uniform3fv(b,c)},
cb:function(a,b,c){return a.uniform4fv(b,c)},
cc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mc:{"^":"j0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.L(a.item(b))},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bC]},
$ish:1,
$ash:function(){return[P.bC]},
$ask:function(){return[P.bC]},
"%":"SQLResultSetRowList"},j_:{"^":"e+i;"},j0:{"^":"j_+k;"}}],["","",,G,{"^":"",
hV:function(a){var z,y,x,w
z=H.z(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.j(z,y)
z[y]=w}return C.c.aj(z,"\n")},
dw:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bB(a,b)
z.aX(a,y,c)
z.by(a,y)
x=z.aT(a,y,35713)
if(x!=null&&J.C(x,!1)){w=z.aS(a,y)
P.a5("E:Compilation failed:")
P.a5("E:"+G.hV(c))
P.a5("E:Failure:")
P.a5(C.l.n("E:",w))
throw H.a(w)}return y},
b4:{"^":"c;"},
dr:{"^":"b4;",
b2:function(){return this.d},
k:function(a){var z,y,x,w
z=H.z(["{"+H.b(new H.dp(H.jS(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.ax(y,y.r,null,null,[H.x(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.aj(z,"\n")}},
f7:{"^":"hx;"},
fb:{"^":"c;a,b"},
db:{"^":"c;a,b,c"},
da:{"^":"c;a,b,c"},
fR:{"^":"dr;d,a,b,c",
cH:function(a,b){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!1)
z.j(0,"cBlendEquation",b)
z.j(0,"cStencilFunc",$.$get$d4())},
p:{
cV:function(a,b){var z=new G.fR(P.a0(),a,!1,!0)
z.cH(a,b)
return z}}},
fT:{"^":"b4;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
ad:function(a){var z,y
this.ch=a
this.cy.j(0,"aPosition",a)
z=this.d
y=this.r.h(0,"aPosition")
J.aK(z.a,34962,y)
J.el(z.a,34962,a,35048)},
cD:function(){return this.ch.length/3|0},
aq:function(a){var z,y,x,w,v
z=this.r
y=this.d
z.j(0,"aPosition",J.eq(y.a))
this.ad(a)
x=$.$get$ac().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.cc(y.a,this.e)
J.eB(y.a,w)
z=z.h(0,"aPosition")
v=x.cE()
J.aK(y.a,34962,z)
J.f1(y.a,w,v,5126,!1,0,0)},
k:function(a){var z,y,x,w
z=["Faces:0"]
for(y=this.cy,x=new H.ax(y,y.r,null,null,[H.x(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.c.aj(z,"  ")},
p:{
bE:function(a,b,c,d){return new G.fT(b,J.ev(b.a),c,P.a0(),d,null,0,-1,null,null,P.a0(),"meshdata:"+a,!1,!0)}}},
h8:{"^":"dr;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cB:function(a,b){var z
if(typeof a!=="number")return a.em()
if(typeof b!=="number")return H.E(b)
z=a/b
if(this.z===z)return
this.z=z
this.b5()},
b5:function(){var z,y,x,w,v,u
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
u=new T.q(new Float32Array(3))
u.ab(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.u(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isaB
q=x?y.ger(t):1
if(!!y.$isq){p=y.gl(t)
s=y.gm(t)
r=y.gel(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gel(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.E(t)
x=z[4]
if(typeof s!=="number")return H.E(s)
w=z[8]
if(typeof r!=="number")return H.E(r)
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
c.u(this.db)
c.e6(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hn:{"^":"b4;d,e,f,r,x,y,z,Q,ch,a,b,c",
cJ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
x.j(0,t,J.ci(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
x.j(0,t,J.ci(w.a,v,t))}},
cP:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ax(y,y.r,null,null,[H.x(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.aF(0,v))x.push(v)}for(z=this.x,y=new P.bV(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
cT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ax(b,b.r,null,null,[H.x(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.en(t,0)){case 117:if(w.aF(0,t)){s=b.h(0,t)
if(v.aF(0,t))H.c7("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$ac().h(0,t)
if(r==null)H.I("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bl(x.a,q,s)
else if(!!J.n(s).$isfB)J.f_(x.a,q,s)
break
case"float":if(r.c===0)J.eY(x.a,q,s)
else if(!!J.n(s).$isbv)J.eZ(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a4(s,"$isR").a
J.cq(x.a,q,!1,p)}else if(!!J.n(s).$isbv)J.cq(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.u.gcr(H.a4(s,"$islx"))
J.cp(x.a,q,!1,p)}else if(!!J.n(s).$isbv)J.cp(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.co(o,q,H.a4(s,"$isaB").a)
else J.co(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cn(o,q,H.a4(s,"$isq").a)
else J.cn(o,q,s)
break
case"vec2":if(r.c===0){p=C.u.gcr(H.a4(s,"$ismw"))
J.cm(x.a,q,p)}else J.cm(x.a,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.E(p)
J.c9(x.a,33984+p)
p=H.a4(s,"$isbQ").b
J.aL(x.a,3553,p)
p=this.ch
J.bl(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.E(p)
J.c9(x.a,33984+p)
p=H.a4(s,"$isbQ").b
J.aL(x.a,34067,p)
p=this.ch
J.bl(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.c7("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.C(s,!0)
o=x.a
if(p)J.aX(o,2929)
else J.bk(o,2929)
break
case"cStencilFunc":H.a4(s,"$isdb")
p=s.a
o=x.a
if(p===1281)J.bk(o,2960)
else{J.aX(o,2960)
o=s.b
n=s.c
J.eT(x.a,p,o,n)}break
case"cDepthWrite":J.ew(x.a,s)
break
case"cBlendEquation":H.a4(s,"$isda")
p=s.a
o=x.a
if(p===1281)J.bk(o,3042)
else{J.aX(o,3042)
o=s.b
n=s.c
J.ek(x.a,o,n)
J.ej(x.a,p)}break}++u
break}}m=P.fq(0,0,0,Date.now()-new P.cx(z,!1).a,0,0)
""+u
m.k(0)},
cC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.f0(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(x=0;x<2;++x){w=b[x]
this.cT(w.a,w.b2())}y=this.Q
y.a5(0)
for(v=a.cy,u=new H.ax(v,v.r,null,null,[H.x(v,0)]),u.c=v.e;u.t();)y.P(0,u.d)
t=this.cP()
if(t.length!==0)P.a5("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.cc(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cD()
u=a.Q
r=a.z
if(s)J.eh(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eA(q,y,v,u,0,r)
else J.ez(q,y,v,u,0)}else{u=z.a
if(r>1)J.ey(u,y,0,v,r)
else J.ex(u,y,0,v)}if(s)J.eC(z.a)},
b1:function(a,b){return this.cC(a,b,null)},
p:{
d1:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.N(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.er(b.a)
u=G.dw(b.a,35633,y)
J.ca(b.a,v,u)
t=G.dw(b.a,35632,x)
J.ca(b.a,v,t)
if(w.length>0)J.eX(b.a,v,w,35980)
J.eQ(b.a,v)
if(J.eP(b.a,v,35714)!==!0)H.I(J.eO(b.a,v))
z=new G.hn(b,c,d,v,P.bB(c.c,null),P.a0(),P.a0(),z,null,a,!1,!0)
z.cJ(a,b,c,d)
return z}}},
r:{"^":"c;a,b,c",
cE:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ht:{"^":"c;a,b,c,d,e,f,r,x",
b0:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.ao(z)},
ac:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.B)(a),++x)y.push(a[x])
C.c.ao(y)},
cA:function(a){var z,y
for(z=this.f,y=0;y<1;++y)z.push(a[y])
C.c.ao(z)},
cL:function(a,b){this.b=this.b6(!0,a,b)},
b4:function(a){return this.cL(a,null)},
cK:function(a,b){this.b=this.b6(!1,a,b)},
b3:function(a){return this.cK(a,null)},
b6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
s=$.$get$ac().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.j(z,u)
q=z[u]
s=$.$get$ac().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$ac().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$ac().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.M(w,b)
if(a)w.push("}")
return C.c.aj(w,"\n")},
p:{
b8:function(a){return new G.ht(a,null,[],[],[],[],0,P.a0())}}},
hx:{"^":"b4;"},
hM:{"^":"c;a,b,c,d,e,f,r"},
bQ:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fz:{"^":"bQ;f,a,b,c,d,e",
cF:function(a,b,c,d,e){var z,y,x,w
z=this.d
y=this.c
J.aL(z.a,y,this.b)
J.eR(z.a,37440,1)
this.cM(this.f)
x=this.e
w=x.e
if(w!==1)J.eV(z.a,y,34046,w)
J.ck(z.a,y,10240,x.r)
J.ck(z.a,y,10241,x.f)
J.eN(z.a)
J.aL(z.a,y,null)},
cM:function(a){var z,y
z=this.d
y=this.c
J.aL(z.a,y,this.b)
J.eU(z.a,y,0,6408,6408,5121,a)},
p:{
cJ:function(a,b,c,d,e){var z=new G.fz(c,b,J.et(a.a),e,a,new G.hM(!1,!1,!1,!0,1,9729,9729))
z.cF(a,b,c,d,e)
return z}}}}],["","",,R,{"^":"",
dt:function(){var z,y,x
z=document.createElement("canvas")
z.width=64
z.height=64
y=C.E.cj(z,"2d")
x=J.es(y,32,32,1,32,32,22)
x.addColorStop(0,"gray")
x.addColorStop(1,"black")
y.fillStyle=x
y.fillRect(0,0,64,64)
x=y.createRadialGradient(32,32,1,32,32,6)
x.addColorStop(0,"white")
x.addColorStop(1,"gray")
y.globalAlpha=0.9
y.fillStyle=x
y.arc(32,32,4,0,6.283185307179586,!1)
y.fill("nonzero")
return z},
hz:{"^":"c;",
cN:function(a,b,c){var z,y,x
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
x=this.cX(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cX:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.ib("span",null)
y=J.cg(v)
J.d(y).sD(y,"1px")
C.n.sC(y,""+d+"px")
C.n.sdU(y,"left")
x=C.n.ba(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hA:{"^":"hz;e,f,a,b,c,d",
cS:function(a,b){var z,y,x,w,v;++this.e
if(J.aJ(J.ed(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eh(z,2)+" fps"
y=this.c;(y&&C.F).cl(y,b)
x=C.a.G(30*C.t.dF(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cg(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
cR:function(a){return this.cS(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",fJ:{"^":"c;a,b,c",
cG:function(a){var z
a=document
z=W.b2
W.a9(a,"keydown",new D.fL(this),!1,z)
W.a9(a,"keyup",new D.fM(this),!1,z)},
p:{
fK:function(a){var z=P.G
z=new D.fJ(P.N(null,null,null,z),P.N(null,null,null,z),P.N(null,null,null,z))
z.cG(a)
return z}}},fL:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.P(0,J.ch(a))
z.b.P(0,a.which)}},fM:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.bX(0,J.ch(a))
z.c.P(0,a.which)}},fW:{"^":"c;a,b,c,d,e,f,r,x",
cI:function(a){var z,y
z=J.d(a)
y=z.gbT(a)
W.a9(y.a,y.b,new D.fY(this),!1,H.x(y,0))
y=z.gbS(a)
W.a9(y.a,y.b,new D.fZ(this),!1,H.x(y,0))
y=z.gbU(a)
W.a9(y.a,y.b,new D.h_(this),!1,H.x(y,0))
z=z.gbV(a)
W.a9(z.a,z.b,new D.h0(this),!1,H.x(z,0))},
p:{
fX:function(a){var z=P.G
z=new D.fW(P.N(null,null,null,z),P.N(null,null,null,z),P.N(null,null,null,z),0,0,0,0,0)
z.cI(a)
return z}}},fY:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.am(a)
y=this.a
y.r=z.gbQ(a).a
y.x=z.gbQ(a).b
y.d=z.ge5(a).a
y.e=a.movementY}},fZ:{"^":"f:5;a",
$1:function(a){var z=J.d(a)
z.am(a)
P.a5("BUTTON "+H.b(z.gbw(a)))
z=this.a
z.a.P(0,a.button)
z.b.P(0,a.button)}},h_:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.am(a)
y=this.a
y.a.bX(0,z.gbw(a))
y.c.P(0,a.button)}},h0:{"^":"f:17;a",
$1:function(a){var z=J.d(a)
z.am(a)
this.a.f=z.gdQ(a)}},h7:{"^":"f7;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c3:function(a){var z,y
z=C.R.dV(a,0,new A.jU())
if(typeof z!=="number")return H.E(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jU:{"^":"f:18;",
$2:function(a,b){var z,y
z=J.af(a,J.W(b))
if(typeof z!=="number")return H.E(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",R:{"^":"c;bd:a<",
u:function(a){var z,y
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
k:function(a){return"[0] "+this.a8(0).k(0)+"\n[1] "+this.a8(1).k(0)+"\n[2] "+this.a8(2).k(0)+"\n[3] "+this.a8(3).k(0)+"\n"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.R){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.c3(this.a)},
a8:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.j(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.j(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.j(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.j(y,x)
z[3]=y[x]
return new T.aB(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.R(z)
y.u(this)
x=b.gbd()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
z[3]=C.b.n(z[3],x.h(0,3))
z[4]=C.b.n(z[4],x.h(0,4))
z[5]=C.b.n(z[5],x.h(0,5))
z[6]=C.b.n(z[6],x.h(0,6))
z[7]=C.b.n(z[7],x.h(0,7))
z[8]=C.b.n(z[8],x.h(0,8))
z[9]=C.b.n(z[9],x.h(0,9))
z[10]=C.b.n(z[10],x.h(0,10))
z[11]=C.b.n(z[11],x.h(0,11))
z[12]=C.b.n(z[12],x.h(0,12))
z[13]=C.b.n(z[13],x.h(0,13))
z[14]=C.b.n(z[14],x.h(0,14))
z[15]=C.b.n(z[15],x.h(0,15))
return y},
L:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.R(z)
y.u(this)
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
a1:function(){var z=this.a
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
e6:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},q:{"^":"c;bk:a<",
ab:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
u:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.c3(this.a)},
L:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.q(z)
y.u(this)
x=b.gbk()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.q(z)
y.u(this)
x=b.gbk()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
return y},
gi:function(a){return Math.sqrt(this.ga7())},
ga7:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ak:function(a){var z,y,x
z=Math.sqrt(this.ga7())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aG:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.q(new Float32Array(3))
z.ab(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a0:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
ck:function(a){var z=new T.q(new Float32Array(3))
z.u(this)
z.a0(0,a)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},aB:{"^":"c;bl:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aB){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.c3(this.a)},
L:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.aB(z)
y.u(this)
x=b.gbl()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.aB(z)
y.u(this)
x=b.gbl()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
z[3]=C.b.n(z[3],x.h(0,3))
return y},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}}}],["","",,Z,{"^":"",
b6:function(a,b){var z,y,x,w
z=a.aI()
y=a.aI()
x=a.aI()
w=new T.q(new Float32Array(3))
w.ab(z-0.5,y-0.5,x-0.5)
w.a0(0,b)
return w},
cT:function(a,b,c,d){var z,y,x,w,v,u
z=[]
for(y=0;y<5;++y){x=a[y]
w=new Float32Array(3)
w[0]=x
w[1]=b
w[2]=c
v=new T.q(new Float32Array(3))
v.u(new T.q(w))
v.a0(0,d)
w=new Z.ha(new T.q(new Float32Array(3)))
u=new T.q(new Float32Array(3))
u.u(v)
w.a=u
z.push(w)}return z},
cG:function(a){var z,y,x,w,v,u,t,s
z=a.length
y=new Float32Array(3*z)
for(z=a.length,x=y.length,w=0,v=0;v<a.length;a.length===z||(0,H.B)(a),++v){u=a[v]
t=u.O().a[0]
if(w>=x)return H.j(y,w)
y[w]=t
t=w+1
s=u.O().a[1]
if(t>=x)return H.j(y,t)
y[t]=s
s=w+2
t=u.O().a[2]
if(s>=x)return H.j(y,s)
y[s]=t
w+=3}return y},
bt:function(a,b){var z,y,x,w,v,u,t
for(z=a.length,y=b.length,x=0,w=0;w<a.length;a.length===z||(0,H.B)(a),++w){v=a[w]
u=v.O().a[0]
if(x>=y)return H.j(b,x)
b[x]=u
u=x+1
t=v.O().a[1]
if(u>=y)return H.j(b,u)
b[u]=t
t=x+2
u=v.O().a[2]
if(t>=y)return H.j(b,t)
b[t]=u
x+=3}},
e5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z={}
y=$.$get$ac()
y.j(0,"uSources",C.y)
y.j(0,"uSinks",C.y)
y=document
x=new R.hA(0,0,null,null,null,null)
x.cN(y.getElementById("stats"),"blue","gray")
w=P.iN(0)
v=y.querySelector("#webgl-canvas")
u=v.clientWidth
t=v.clientHeight
y=J.d(v)
y.sD(v,u)
y.sC(v,t)
s=new G.fb(null,v)
y=J.eL(v,"webgl2",P.cQ(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
s.a=y
if(y==null)H.I(P.cF('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.b(J.eM(y))
if($.jP>0)P.a5("I: "+r)
J.em(y,0,0,0,1)
J.aX(y,2929)
y=new Float32Array(3)
r=D.fK(null)
q=D.fX(v)
p=new T.R(new Float32Array(16))
p.a1()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.h7(15,0.5,0.5,0,new T.q(y),-0.02,r,q,p,new T.q(o),new T.q(n),new T.q(m),new T.q(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.R(new Float32Array(16))
y.a1()
r=new T.R(new Float32Array(16))
r.a1()
k=new G.h8(l,50,1,0.1,1000,y,r,new T.R(new Float32Array(16)),P.a0(),"perspective",!1,!0)
k.b5()
k.cB(u,t)
j=G.d1("CPU",s,$.$get$ea(),$.$get$e9())
i=G.d1("GPU",s,$.$get$e7(),$.$get$e6())
y=i.e
h=C.c.e0(y.f,"tPosition")
P.a5("@@@@ "+h)
g=Z.cT([2,1,0,-1,-2],0,2,3)
f=Z.cT([2,1,0,-1,-2],0,-2,3)
r=Z.b6(w,10010)
q=new Z.cK(null)
p=new T.q(new Float32Array(3))
p.u(r)
q.a=p
e=[q]
q=e.length
d=new Float32Array(3*q)
z.a=d
Z.bt(e,d)
r=$.$get$cr()
c=G.cV("stars",r)
q=c.d
q.j(0,"uTexture",G.cJ(s,"Utils::Particles",R.dt(),null,3553))
p=new T.R(new Float32Array(16))
p.a1()
q.j(0,"uModelMatrix",p)
q.j(0,"uPointSize",200)
b=G.bE("mdJS",j.d,0,j.e.x)
b.aq(d)
a=G.cV("stars",r)
r=a.d
r.j(0,"uTexture",G.cJ(s,"Utils::Particles",R.dt(),null,3553))
q=new T.R(new Float32Array(16))
q.a1()
r.j(0,"uModelMatrix",q)
r.j(0,"uPointSize",200)
r.j(0,"uSources",Z.cG(g))
r.j(0,"uSinks",Z.cG(f))
r=i.d
y=y.x
a0=G.bE("ionsOut",r,0,y)
a0.aq(d)
a1=G.bE("ionsIn",r,0,y)
a1.aq(d)
y=new Z.k6(z,e,w,s,h,a0,a1)
a2=J.eu(s.a)
J.ei(s.a,36386,a2)
y.$1(null)
r=J.eF($.$get$c1())
W.a9(r.a,r.b,y,!1,H.x(r,0))
new Z.k8(l,new Z.k7(z,e,g,f,w,b),j,b,k,c,i,a1,a,s,a0,e,x).$1(0)},
ha:{"^":"c;a",
O:function(){return this.a},
k:function(a){var z=this.a.a
return"POLE: "+(H.b(z[0])+" "+H.b(z[1])+" "+H.b(z[2]))}},
cK:{"^":"c;a",
O:function(){return this.a},
cQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p
z=new T.q(new Float32Array(3))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
v=this.a
u=w.O()
t=new Float32Array(3)
s=new T.q(t)
s.u(v)
r=u.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
q=Math.sqrt(s.ga7())
if(q<=0.2)continue
if(q>100.1){y=c.bP(a.length)
if(y<0||y>=a.length)return H.j(a,y)
y=a[y].a
v=Z.b6(c,0.35)
u=new Float32Array(3)
t=new T.q(u)
t.u(y)
r=v.a
u[0]=u[0]+r[0]
u[1]=u[1]+r[1]
u[2]=u[2]+r[2]
this.a=t
return}v=new Float32Array(3)
u=new T.q(v)
u.u(s)
u.a0(0,1/(q*q))
u=new Float32Array(3)
p=new T.q(u)
p.u(z)
u[0]=u[0]+v[0]
u[1]=u[1]+v[1]
u[2]=u[2]+v[2]
z=p}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.B)(b),++x,z=p){v=b[x].O()
u=this.a
t=new Float32Array(3)
s=new T.q(t)
s.u(v)
r=u.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
q=Math.sqrt(s.ga7())
if(q<=0.2){y=c.bP(a.length)
if(y<0||y>=a.length)return H.j(a,y)
y=a[y].a
v=Z.b6(c,0.35)
u=new Float32Array(3)
t=new T.q(u)
t.u(y)
r=v.a
u[0]=u[0]+r[0]
u[1]=u[1]+r[1]
u[2]=u[2]+r[2]
this.a=t
return}v=new Float32Array(3)
u=new T.q(v)
u.u(s)
u.a0(0,1/(q*q))
u=new Float32Array(3)
p=new T.q(u)
p.u(z)
u[0]=u[0]+v[0]
u[1]=u[1]+v[1]
u[2]=u[2]+v[2]}y=this.a
v=new T.q(new Float32Array(3))
v.u(z)
v.ak(0)
this.a=y.n(0,v.ck(d))},
k:function(a){var z=this.a.a
return"ION: "+(H.b(z[0])+" "+H.b(z[1])+" "+H.b(z[2]))}},
k6:{"^":"f:19;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w,v,u,t,s
z=P.k2(J.eJ($.$get$c1()),null,null)
P.a5("resize to "+H.b(z)+" ions")
y=this.b
C.c.si(y,0)
if(typeof z!=="number")return H.E(z)
x=this.c
w=0
for(;w<z;++w){v=Z.b6(x,10010)
u=new Z.cK(null)
t=new T.q(new Float32Array(3))
t.u(v)
u.a=t
y.push(u)}x=3*z
if(typeof x!=="number"||Math.floor(x)!==x)H.I(P.f2("Invalid length "+H.b(x)))
s=new Float32Array(x)
x=this.a
x.a=s
Z.bt(y,s)
y=this.d
J.aK(y.a,34962,null)
v=this.e
J.cb(y.a,35982,v,null)
t=this.f
t.ad(x.a)
this.r.ad(x.a)
t=t.r.h(0,"aPosition")
J.cb(y.a,35982,v,t)}},
k7:{"^":"f:20;a,b,c,d,e,f",
$1:function(a){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=this.c,w=this.d,v=this.e,u=0;u<z.length;z.length===y||(0,H.B)(z),++u)z[u].cQ(x,w,v,a)
y=this.a
Z.bt(z,y.a)
this.f.ad(y.a)}},
k8:{"^":"f:21;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.a
z.go+=0.002
y=z.r1
x=y.a
if(x.v(0,0)||x.v(0,1)){x=z.go
w=y.d
if(typeof w!=="number")return w.aV()
z.go=x+w*0.01
w=z.id
x=y.e
if(typeof x!=="number")return x.aV()
z.id=w+x*0.01}x=z.k4
w=x.a
if(w.v(0,37))z.go+=0.03
else if(w.v(0,39))z.go-=0.03
if(w.v(0,38))z.id+=0.03
else if(w.v(0,40))z.id-=0.03
if(w.v(0,33))z.fy*=0.99
else if(w.v(0,34))z.fy*=1.01
if(w.v(0,32)){z.go=0
z.id=0}w=y.f
if(typeof w!=="number")return w.aV()
w=z.fy-w*z.k3
if(w>0)z.fy=w
w=C.b.dH(z.id,-1.4707963267948965,1.4707963267948965)
z.id=w
v=z.fy
u=z.go
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=z.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=z.k2
w=u.a
r[12]=r[12]+w[0]
r[13]=r[13]+w[1]
r[14]=r[14]+w[2]
q=r[12]
p=r[13]
o=r[14]
n=new T.q(new Float32Array(3))
n.ab(0,1,0)
w=z.e
v=w.a
v[0]=r[12]
v[1]=r[13]
v[2]=r[14]
m=w.L(0,u)
m.ak(0)
l=n.bD(m)
l.ak(0)
k=m.bD(l)
k.ak(0)
u=l.aG(w)
v=k.aG(w)
w=m.aG(w)
s=l.a
j=s[0]
i=k.a
h=i[0]
g=m.a
f=g[0]
e=s[1]
d=i[1]
c=g[1]
s=s[2]
i=i[2]
g=g[2]
r[15]=1
r[14]=-w
r[13]=-v
r[12]=-u
r[11]=0
r[10]=g
r[9]=i
r[8]=s
r[7]=0
r[6]=c
r[5]=d
r[4]=e
r[3]=0
r[2]=f
r[1]=h
r[0]=j
r[12]=q
r[13]=p
r[14]=o
j=z.f
h=j.a
h[0]=r[2]
h[1]=r[6]
h[2]=r[10]
z=-z.k1
b=Math.sqrt(j.ga7())
q=h[0]/b
p=h[1]/b
o=h[2]/b
a=Math.cos(z)
a0=Math.sin(z)
a1=1-a
a2=q*q*a1+a
z=o*a0
a3=q*p*a1-z
h=p*a0
a4=q*o*a1+h
a5=p*q*a1+z
a6=p*p*a1+a
z=q*a0
a7=p*o*a1-z
a8=o*q*a1-h
a9=o*p*a1+z
b0=o*o*a1+a
z=r[0]
h=r[4]
j=r[8]
f=r[1]
e=r[5]
d=r[9]
c=r[2]
s=r[6]
i=r[10]
g=r[3]
u=r[7]
v=r[11]
r[0]=z*a2+h*a5+j*a8
r[1]=f*a2+e*a5+d*a8
r[2]=c*a2+s*a5+i*a8
r[3]=g*a2+u*a5+v*a8
r[4]=z*a3+h*a6+j*a9
r[5]=f*a3+e*a6+d*a9
r[6]=c*a3+s*a6+i*a9
r[7]=g*a3+u*a6+v*a9
r[8]=z*a4+h*a7+j*b0
r[9]=f*a4+e*a7+d*b0
r[10]=c*a4+s*a7+i*b0
r[11]=g*a4+u*a7+v*b0
x.c.a5(0)
x.b.a5(0)
y.e=0
y.d=0
y.f=0
y.c.a5(0)
y.b.a5(0)
z=this.e
if(J.eD($.$get$e0())===!0){this.b.$1(0.06)
this.c.b1(this.d,[z,this.f])}else{y=this.x
this.r.b1(y,[z,this.y])
z=this.z
y=y.r.h(0,"aPosition")
J.aK(z.a,34962,y)
y=this.Q.r.h(0,"aPosition")
J.aK(z.a,35982,y)
y=this.ch.length
J.ep(z.a,35982,34962,0,0,y*3*4)}C.a8.gdu(window).c1(this)
this.cx.cR(J.af(b1,0))}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.cL.prototype}if(typeof a=="string")return J.av.prototype
if(a==null)return J.cN.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.c)return a
return J.aV(a)}
J.jQ=function(a){if(typeof a=="number")return J.au.prototype
if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.c)return a
return J.aV(a)}
J.a3=function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.c)return a
return J.aV(a)}
J.bg=function(a){if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.c)return a
return J.aV(a)}
J.aU=function(a){if(typeof a=="number")return J.au.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aS.prototype
return a}
J.jR=function(a){if(typeof a=="number")return J.au.prototype
if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aS.prototype
return a}
J.e1=function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aS.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.c)return a
return J.aV(a)}
J.af=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jQ(a).n(a,b)}
J.C=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).F(a,b)}
J.J=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aU(a).a9(a,b)}
J.aJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aU(a).a_(a,b)}
J.ed=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aU(a).L(a,b)}
J.ee=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k4(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a3(a).h(a,b)}
J.ef=function(a,b,c,d){return J.d(a).dd(a,b,c,d)}
J.c9=function(a,b){return J.d(a).bm(a,b)}
J.eg=function(a,b,c,d){return J.d(a).bn(a,b,c,d)}
J.ca=function(a,b,c){return J.d(a).bp(a,b,c)}
J.eh=function(a,b){return J.d(a).dw(a,b)}
J.aK=function(a,b,c){return J.d(a).bq(a,b,c)}
J.cb=function(a,b,c,d){return J.d(a).dz(a,b,c,d)}
J.aL=function(a,b,c){return J.d(a).bs(a,b,c)}
J.ei=function(a,b,c){return J.d(a).dB(a,b,c)}
J.cc=function(a,b){return J.d(a).dD(a,b)}
J.ej=function(a,b){return J.d(a).bt(a,b)}
J.ek=function(a,b,c){return J.d(a).bu(a,b,c)}
J.el=function(a,b,c,d){return J.d(a).bv(a,b,c,d)}
J.em=function(a,b,c,d,e){return J.d(a).bx(a,b,c,d,e)}
J.en=function(a,b){return J.e1(a).dI(a,b)}
J.eo=function(a,b){return J.jR(a).R(a,b)}
J.bj=function(a,b,c){return J.a3(a).dK(a,b,c)}
J.ep=function(a,b,c,d,e,f){return J.d(a).dL(a,b,c,d,e,f)}
J.eq=function(a){return J.d(a).bz(a)}
J.er=function(a){return J.d(a).bA(a)}
J.es=function(a,b,c,d,e,f,g){return J.d(a).dN(a,b,c,d,e,f,g)}
J.et=function(a){return J.d(a).bC(a)}
J.eu=function(a){return J.d(a).dO(a)}
J.ev=function(a){return J.d(a).dP(a)}
J.ew=function(a,b){return J.d(a).bE(a,b)}
J.bk=function(a,b){return J.d(a).bF(a,b)}
J.ex=function(a,b,c,d){return J.d(a).bG(a,b,c,d)}
J.ey=function(a,b,c,d,e){return J.d(a).dR(a,b,c,d,e)}
J.ez=function(a,b,c,d,e){return J.d(a).bH(a,b,c,d,e)}
J.eA=function(a,b,c,d,e,f){return J.d(a).dS(a,b,c,d,e,f)}
J.cd=function(a,b){return J.bg(a).q(a,b)}
J.aX=function(a,b){return J.d(a).bI(a,b)}
J.eB=function(a,b){return J.d(a).bJ(a,b)}
J.eC=function(a){return J.d(a).dT(a)}
J.ce=function(a,b){return J.bg(a).w(a,b)}
J.cf=function(a){return J.d(a).gdv(a)}
J.eD=function(a){return J.d(a).gdG(a)}
J.an=function(a){return J.d(a).gJ(a)}
J.W=function(a){return J.n(a).gB(a)}
J.aM=function(a){return J.bg(a).gH(a)}
J.X=function(a){return J.a3(a).gi(a)}
J.eE=function(a){return J.d(a).ge7(a)}
J.eF=function(a){return J.d(a).gbR(a)}
J.eG=function(a){return J.d(a).gaJ(a)}
J.cg=function(a){return J.d(a).gU(a)}
J.eH=function(a){return J.d(a).ged(a)}
J.eI=function(a){return J.d(a).gc4(a)}
J.eJ=function(a){return J.d(a).gK(a)}
J.ch=function(a){return J.d(a).gek(a)}
J.eK=function(a){return J.d(a).aN(a)}
J.eL=function(a,b,c){return J.d(a).aO(a,b,c)}
J.eM=function(a){return J.d(a).an(a)}
J.eN=function(a){return J.d(a).aP(a)}
J.eO=function(a,b){return J.d(a).aQ(a,b)}
J.eP=function(a,b,c){return J.d(a).aR(a,b,c)}
J.ci=function(a,b,c){return J.d(a).aU(a,b,c)}
J.eQ=function(a,b){return J.d(a).bN(a,b)}
J.eR=function(a,b,c){return J.d(a).bW(a,b,c)}
J.cj=function(a){return J.bg(a).e9(a)}
J.eS=function(a,b){return J.d(a).sah(a,b)}
J.eT=function(a,b,c,d){return J.d(a).aZ(a,b,c,d)}
J.eU=function(a,b,c,d,e,f,g){return J.d(a).bZ(a,b,c,d,e,f,g)}
J.eV=function(a,b,c,d){return J.d(a).c_(a,b,c,d)}
J.ck=function(a,b,c,d){return J.d(a).c0(a,b,c,d)}
J.cl=function(a){return J.aU(a).ee(a)}
J.eW=function(a){return J.e1(a).eg(a)}
J.ao=function(a){return J.n(a).k(a)}
J.eX=function(a,b,c,d){return J.d(a).ei(a,b,c,d)}
J.eY=function(a,b,c){return J.d(a).c5(a,b,c)}
J.eZ=function(a,b,c){return J.d(a).c6(a,b,c)}
J.bl=function(a,b,c){return J.d(a).c7(a,b,c)}
J.f_=function(a,b,c){return J.d(a).c8(a,b,c)}
J.cm=function(a,b,c){return J.d(a).c9(a,b,c)}
J.cn=function(a,b,c){return J.d(a).ca(a,b,c)}
J.co=function(a,b,c){return J.d(a).cb(a,b,c)}
J.cp=function(a,b,c,d){return J.d(a).cc(a,b,c,d)}
J.cq=function(a,b,c,d){return J.d(a).cd(a,b,c,d)}
J.f0=function(a,b){return J.d(a).cf(a,b)}
J.f1=function(a,b,c,d,e,f,g){return J.d(a).cg(a,b,c,d,e,f,g)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bm.prototype
C.E=W.f8.prototype
C.n=W.fh.prototype
C.F=W.fn.prototype
C.G=J.e.prototype
C.c=J.as.prototype
C.t=J.cL.prototype
C.a=J.cM.prototype
C.u=J.cN.prototype
C.b=J.au.prototype
C.l=J.av.prototype
C.N=J.aw.prototype
C.R=H.h1.prototype
C.S=W.h3.prototype
C.x=J.h9.prototype
C.D=W.hK.prototype
C.q=J.aS.prototype
C.a8=W.hS.prototype
C.f=new P.iP()
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
C.v=function(hooks) { return hooks; }

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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=H.z(I.al(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=I.al(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=I.al([])
C.o=H.z(I.al(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.z(I.al(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.T=new G.r("vec3","vertex btangents",0)
C.d=new G.r("vec3","",0)
C.y=new G.r("vec3","",5)
C.U=new G.r("vec4","delta from light",0)
C.m=new G.r("","",0)
C.z=new G.r("vec3","vertex coordinates",0)
C.V=new G.r("vec3","vertex binormals",0)
C.A=new G.r("vec4","for wireframe",0)
C.W=new G.r("vec4","per vertex color",0)
C.X=new G.r("float","for normal maps",0)
C.i=new G.r("mat4","",0)
C.Z=new G.r("mat4","",4)
C.Y=new G.r("mat4","",128)
C.e=new G.r("float","",0)
C.a_=new G.r("float","",4)
C.a0=new G.r("float","depth for shadowmaps",0)
C.h=new G.r("sampler2D","",0)
C.a1=new G.r("float","for bump maps",0)
C.a2=new G.r("vec2","texture uvs",0)
C.a3=new G.r("float","time since program start in sec",0)
C.j=new G.r("vec2","",0)
C.a4=new G.r("samplerCube","",0)
C.k=new G.r("vec4","",0)
C.a5=new G.r("vec3","vertex normals",0)
C.a6=new G.r("sampler2DShadow","",0)
C.B=new G.r("vec3","per vertex color",0)
C.C=new G.r("mat3","",0)
C.a7=new G.r("vec3","vertex tangents",0)
$.Q=0
$.ap=null
$.cs=null
$.e3=null
$.dU=null
$.eb=null
$.be=null
$.bh=null
$.c4=null
$.ai=null
$.aD=null
$.aE=null
$.bX=!1
$.u=C.f
$.Z=null
$.br=null
$.cE=null
$.cD=null
$.cB=null
$.cA=null
$.cz=null
$.cy=null
$.jP=0
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
I.$lazy(y,x,w)}})(["cw","$get$cw",function(){return H.e2("_$dart_dartClosure")},"by","$get$by",function(){return H.e2("_$dart_js")},"dd","$get$dd",function(){return H.T(H.bb({
toString:function(){return"$receiver$"}}))},"de","$get$de",function(){return H.T(H.bb({$method$:null,
toString:function(){return"$receiver$"}}))},"df","$get$df",function(){return H.T(H.bb(null))},"dg","$get$dg",function(){return H.T(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dk","$get$dk",function(){return H.T(H.bb(void 0))},"dl","$get$dl",function(){return H.T(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"di","$get$di",function(){return H.T(H.dj(null))},"dh","$get$dh",function(){return H.T(function(){try{null.$method$}catch(z){return z.message}}())},"dn","$get$dn",function(){return H.T(H.dj(void 0))},"dm","$get$dm",function(){return H.T(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bS","$get$bS",function(){return P.hW()},"cI","$get$cI",function(){var z,y
z=P.aQ
y=new P.aa(0,P.hU(),null,[z])
y.cV(null,z)
return y},"aF","$get$aF",function(){return[]},"cv","$get$cv",function(){return{}},"dA","$get$dA",function(){return P.bB(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bU","$get$bU",function(){return P.a0()},"d4","$get$d4",function(){return new G.db(1281,0,4294967295)},"cr","$get$cr",function(){return new G.da(32774,770,769)},"ac","$get$ac",function(){return P.cQ(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.B,"aColorAlpha",C.W,"aPosition",C.z,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.A,"aPointSize",C.e,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.k,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.B,"vTexUV",C.j,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.z,"vPositionFromLight",C.U,"vCenter",C.A,"vDepth",C.a0,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.d,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.e,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"ea","$get$ea",function(){var z=G.b8("PointSpritesV")
z.b0(["aPosition"])
z.ac(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.b4(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"e9","$get$e9",function(){var z=G.b8("PointSpritesF")
z.ac(["uTexture"])
z.b4(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"c1","$get$c1",function(){return W.dZ().querySelector("#particles")},"e0","$get$e0",function(){return W.dZ().querySelector("#cpucompute")},"e7","$get$e7",function(){var z=G.b8("ParticleV")
z.b0(["aPosition"])
z.ac(["uPerspectiveViewMatrix","uModelMatrix","uPointSize","uSources","uSinks"])
z.cA(["tPosition"])
z.b3(["const float kMaxDistance = 100.1;\nconst float kMinDistance = 0.2;\nconst float dt = 0.06;  \n    \nfloat rand(vec2 seed){\n    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453);\n}      \n\nint irand(int n, vec2 seed) {\n    return int(floor(rand(seed) * float(n)));\n}\n\nvec3 vec3rand(vec3 seed) {\n    return vec3(rand(seed.yz) - 0.5, rand(seed.xz) - 0.5, rand(seed.xy) - 0.5);\n}\n\nvec3 RandomSource(vec3 seed) {\n    return uSources[irand(uSources.length(), seed.xy * seed.z)];\n}\n\nvec3 Update(vec3 pos, vec3 seed) {\n    vec3 force = vec3(0.0, 0.0, 0.0);\n    for (int i = 0; i < uSources.length(); ++i) {\n       vec3 d = pos - uSources[i];\n       float l = length(d);\n       if (l <= kMinDistance) continue;\n       if (l >= kMaxDistance) {\n           return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    \n    for (int i = 0; i < uSinks.length(); ++i) {\n       vec3 d = uSinks[i] - pos;\n       float l = length(d);\n       if (l <= kMinDistance) {\n          return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    return pos + normalize(force) * dt;\n}\n      \nvoid main() {        \n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * \n                  vec4(aPosition, 1.0);\n    gl_PointSize = uPointSize/gl_Position.z;\n    \n    // new position for next round\n    tPosition = Update(aPosition, gl_Position.xyz);\n}\n"])
return z},"e6","$get$e6",function(){var z=G.b8("ParticleF")
z.ac(["uTexture"])
z.b3(["void main() {\n      oFragColor = texture( uTexture,  gl_PointCoord);\n}\n"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.S]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.G]},{func:1,args:[W.b2]},{func:1,ret:P.bZ,args:[W.ag,P.l,P.l,W.bT]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aA]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aA]},{func:1,v:true,args:[W.t,W.t]},{func:1,args:[W.aT]},{func:1,args:[P.G,P.c]},{func:1,v:true,args:[W.a_]},{func:1,v:true,args:[P.aG]},{func:1,v:true,args:[P.aH]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.kd(d||a)
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
Isolate.al=a.al
Isolate.bf=a.bf
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.e5,[])
else Z.e5([])})})()
//# sourceMappingURL=transform_feedback.dart.js.map
