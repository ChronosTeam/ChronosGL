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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cf"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cf"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cf(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.am=function(){}
var dart=[["","",,H,{"^":"",lz:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
cj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ci==null){H.kd()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dL("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bV()]
if(v!=null)return v
v=H.kh(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bV(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
f:{"^":"c;",
D:function(a,b){return a===b},
gA:function(a){return H.aC(a)},
k:["cH",function(a){return"Instance of '"+H.aD(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fV:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iscd:1},
d6:{"^":"f;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isaV:1},
bW:{"^":"f;",
gA:function(a){return 0},
k:["cJ",function(a){return String(a)}]},
hn:{"^":"bW;"},
b_:{"^":"bW;"},
aB:{"^":"bW;",
k:function(a){var z=a[$.$get$cN()]
return z==null?this.cJ(a):J.at(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ax:{"^":"f;$ti",
J:function(a,b){var z,y
if(!!a.fixed$length)H.P(P.q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.I(a))}},
ae:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.e(y,x)
y[x]=w}return y.join(b)},
b7:function(a,b){return H.dq(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cB:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.P(P.q("setRange"))
P.hw(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.b7(d,e).eh(0,!1)
x=0}y=J.a6(w)
if(x+z>y.gj(w))throw H.a(H.fS())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
aj:function(a,b,c,d){return this.cB(a,b,c,d,0)},
bA:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.I(a))}return!1},
cC:function(a,b){if(!!a.immutable$list)H.P(P.q("sort"))
H.hJ(a,J.jM())},
aw:function(a){return this.cC(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
k:function(a){return P.bU(a,"[","]")},
gF:function(a){return new J.fh(a,a.length,0,null,[H.A(a,0)])},
gA:function(a){return H.aC(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.P(P.q("set length"))
if(b<0)throw H.a(P.ai(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.P(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gj(b))
y=H.y([],[H.A(a,0)])
this.sj(y,z)
this.aj(y,0,a.length,a)
this.aj(y,a.length,z,b)
return y},
$ism:1,
$asm:I.am,
$ish:1,
p:{
ay:function(a){a.fixed$length=Array
return a},
lx:[function(a,b){return J.eG(a,b)},"$2","jM",8,0,21]}},
ly:{"^":"ax;$ti"},
fh:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
az:{"^":"f;",
O:function(a,b){var z
if(typeof b!=="number")throw H.a(H.W(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gar(b)
if(this.gar(a)===z)return 0
if(this.gar(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gar:function(a){return a===0?1/a<0:a<0},
eg:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.q(""+a+".toInt()"))},
dN:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.q(""+a+".ceil()"))},
dO:function(a,b,c){if(this.O(b,c)>0)throw H.a(H.W(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
ej:function(a,b){var z
if(b>20)throw H.a(P.ai(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gar(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a+b},
G:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a-b},
a2:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a/b},
ay:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bt(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bt(a,b)},
bt:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.q("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
br:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dw:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a<b},
ah:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a>b},
$isae:1,
$isaM:1},
d5:{"^":"az;",$isD:1},
d4:{"^":"az;"},
aA:{"^":"f;",
dP:function(a,b){if(b>=a.length)H.P(H.a5(a,b))
return a.charCodeAt(b)},
bk:function(a,b){if(b>=a.length)throw H.a(H.a5(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.fg(b,null,null))
return a+b},
cE:function(a,b,c){var z
if(c>a.length)throw H.a(P.ai(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cD:function(a,b){return this.cE(a,b,0)},
ba:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.P(H.W(c))
if(b<0)throw H.a(P.bk(b,null,null))
if(typeof c!=="number")return H.K(c)
if(b>c)throw H.a(P.bk(b,null,null))
if(c>a.length)throw H.a(P.bk(c,null,null))
return a.substring(b,c)},
cF:function(a,b){return this.ba(a,b,null)},
ei:function(a){return a.toLowerCase()},
dR:function(a,b,c){if(c>a.length)throw H.a(P.ai(c,0,a.length,null,null))
return H.kn(a,b,c)},
O:function(a,b){var z
if(typeof b!=="string")throw H.a(H.W(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gA:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a5(a,b))
return a[b]},
$ism:1,
$asm:I.am,
$isl:1}}],["","",,H,{"^":"",
fR:function(){return new P.bo("No element")},
fT:function(){return new P.bo("Too many elements")},
fS:function(){return new P.bo("Too few elements")},
hJ:function(a,b){H.aY(a,0,J.a1(a)-1,b)},
aY:function(a,b,c,d){if(c-b<=32)H.hI(a,b,c,d)
else H.hH(a,b,c,d)},
hI:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a6(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.M(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.S(c-b+1,6)
y=b+z
x=c-z
w=C.b.S(b+c,2)
v=w-z
u=w+z
t=J.a6(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.M(d.$2(s,r),0)){n=r
r=s
s=n}if(J.M(d.$2(p,o),0)){n=o
o=p
p=n}if(J.M(d.$2(s,q),0)){n=q
q=s
s=n}if(J.M(d.$2(r,q),0)){n=q
q=r
r=n}if(J.M(d.$2(s,p),0)){n=p
p=s
s=n}if(J.M(d.$2(q,p),0)){n=p
p=q
q=n}if(J.M(d.$2(r,o),0)){n=o
o=r
r=n}if(J.M(d.$2(r,q),0)){n=q
q=r
r=n}if(J.M(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.H(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.D(i,0))continue
if(h.a3(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aL(i)
if(h.ah(i,0)){--l
continue}else{g=l-1
if(h.a3(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aO(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.M(d.$2(j,p),0))for(;!0;)if(J.M(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aO(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.aY(a,b,m-2,d)
H.aY(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.H(d.$2(t.h(a,m),r),0);)++m
for(;J.H(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.H(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aO(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.aY(a,m,l,d)}else H.aY(a,m,l,d)},
bP:{"^":"bf;$ti"},
bh:{"^":"bP;$ti",
gF:function(a){return new H.db(this,this.gj(this),0,null,[H.ch(this,"bh",0)])},
w:function(a,b){var z,y
z=this.gj(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gj(this))throw H.a(P.I(this))}},
aY:function(a,b){return this.cI(0,b)}},
hW:{"^":"bh;a,b,c,$ti",
d0:function(a,b,c,d){},
gdi:function(){var z=J.a1(this.a)
return z},
gdz:function(){var z,y
z=J.a1(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a1(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdz()+b
if(b>=0){y=this.gdi()
if(typeof y!=="number")return H.K(y)
y=z>=y}else y=!0
if(y)throw H.a(P.w(b,this,"index",null,null))
return J.cq(this.a,z)},
eh:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a6(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.e(t,s)
t[s]=u
if(x.gj(y)<w)throw H.a(P.I(this))}return t},
p:{
dq:function(a,b,c,d){var z=new H.hW(a,b,c,[d])
z.d0(a,b,c,d)
return z}}},
db:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a6(z)
x=y.gj(z)
if(this.b!==x)throw H.a(P.I(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
h3:{"^":"bh;a,b,$ti",
gj:function(a){return J.a1(this.a)},
q:function(a,b){return this.b.$1(J.cq(this.a,b))},
$asbP:function(a,b){return[b]},
$asbh:function(a,b){return[b]},
$asbf:function(a,b){return[b]}},
dM:{"^":"bf;a,b,$ti",
gF:function(a){return new H.i6(J.aR(this.a),this.b,this.$ti)}},
i6:{"^":"fU;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gB(z))===!0)return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
bd:{"^":"c;$ti"}}],["","",,H,{"^":"",
k5:function(a){return init.types[a]},
kg:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.a(H.W(a))
return z},
aC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.o(a).$isb_){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bk(w,0)===36)w=C.i.cF(w,1)
r=H.bA(H.an(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
G:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hu:function(a){return a.b?H.G(a).getUTCFullYear()+0:H.G(a).getFullYear()+0},
hs:function(a){return a.b?H.G(a).getUTCMonth()+1:H.G(a).getMonth()+1},
ho:function(a){return a.b?H.G(a).getUTCDate()+0:H.G(a).getDate()+0},
hp:function(a){return a.b?H.G(a).getUTCHours()+0:H.G(a).getHours()+0},
hr:function(a){return a.b?H.G(a).getUTCMinutes()+0:H.G(a).getMinutes()+0},
ht:function(a){return a.b?H.G(a).getUTCSeconds()+0:H.G(a).getSeconds()+0},
hq:function(a){return a.b?H.G(a).getUTCMilliseconds()+0:H.G(a).getMilliseconds()+0},
K:function(a){throw H.a(H.W(a))},
e:function(a,b){if(a==null)J.a1(a)
throw H.a(H.a5(a,b))},
a5:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,"index",null)
z=J.a1(a)
if(!(b<0)){if(typeof z!=="number")return H.K(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bk(b,"index",null)},
W:function(a){return new P.ag(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.dh()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ev})
z.name=""}else z.toString=H.ev
return z},
ev:function(){return J.at(this.dartException)},
P:function(a){throw H.a(a)},
F:function(a){throw H.a(P.I(a))},
Q:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.br(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bX(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dg(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dx()
u=$.$get$dy()
t=$.$get$dz()
s=$.$get$dA()
r=$.$get$dE()
q=$.$get$dF()
p=$.$get$dC()
$.$get$dB()
o=$.$get$dH()
n=$.$get$dG()
m=v.L(y)
if(m!=null)return z.$1(H.bX(y,m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.bX(y,m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dg(y,m))}}return z.$1(new H.i3(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dl()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ag(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dl()
return a},
af:function(a){var z
if(a==null)return new H.e1(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e1(a,null)},
k1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kf:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cX("Unsupported number of arguments for wrapped closure"))},
a4:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kf)
a.$identity=z
return z},
fs:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.hy(z).r}else x=c
w=d?Object.create(new H.hL().constructor.prototype):Object.create(new H.bM(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.X
$.X=J.ar(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cK(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.k5,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cI:H.bN
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cK(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fp:function(a,b,c,d){var z=H.bN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cK:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fp(y,!w,z,b)
if(y===0){w=$.X
$.X=J.ar(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.au
if(v==null){v=H.b9("self")
$.au=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
$.X=J.ar(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.au
if(v==null){v=H.b9("self")
$.au=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fq:function(a,b,c,d){var z,y
z=H.bN
y=H.cI
switch(b?-1:a){case 0:throw H.a(H.hC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fr:function(a,b){var z,y,x,w,v,u,t,s
z=$.au
if(z==null){z=H.b9("self")
$.au=z}y=$.cH
if(y==null){y=H.b9("receiver")
$.cH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.X
$.X=J.ar(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.X
$.X=J.ar(y,1)
return new Function(z+H.b(y)+"}")()},
cf:function(a,b,c,d,e,f){var z,y
z=J.ay(b)
y=!!J.o(c).$ish?J.ay(c):c
return H.fs(a,z,y,!!d,e,f)},
kl:function(a,b){var z=J.a6(b)
throw H.a(H.cJ(a,z.ba(b,3,z.gj(b))))},
a7:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.kl(a,b)},
cg:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ei:function(a,b){var z,y
if(a==null)return!1
z=H.cg(J.o(a))
if(z==null)y=!1
else y=H.ep(z,b)
return y},
jU:function(a){var z
if(a instanceof H.i){z=H.cg(J.o(a))
if(z!=null)return H.ck(z,null)
return"Closure"}return H.aD(a)},
ko:function(a){throw H.a(new P.fx(a))},
en:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
an:function(a){if(a==null)return
return a.$ti},
mX:function(a,b,c){return H.aN(a["$as"+H.b(c)],H.an(b))},
b3:function(a,b,c,d){var z=H.aN(a["$as"+H.b(c)],H.an(b))
return z==null?null:z[d]},
ch:function(a,b,c){var z=H.aN(a["$as"+H.b(b)],H.an(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.an(a)
return z==null?null:z[b]},
ck:function(a,b){var z=H.aq(a,b)
return z},
aq:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bA(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aq(z,b)
return H.jL(a,b)}return"unknown-reified-type"},
jL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aq(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aq(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aq(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.k0(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aq(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bA:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c4("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aq(u,c)}return w?"":"<"+z.k(0)+">"},
k4:function(a){var z,y,x
if(a instanceof H.i){z=H.cg(J.o(a))
if(z!=null)return H.ck(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bA(a.$ti,0,null)
return y+x},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ce:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.an(a)
y=J.o(a)
if(y[b]==null)return!1
return H.ee(H.aN(y[d],z),c)},
b4:function(a,b,c,d){var z,y
if(a==null)return a
z=H.ce(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bA(c,0,null)
throw H.a(H.cJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ee:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.L(a[y],b[y]))return!1
return!0},
mV:function(a,b,c){return a.apply(b,H.aN(J.o(b)["$as"+H.b(c)],H.an(b)))},
L:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aV")return!0
if('func' in b)return H.ep(a,b)
if('func' in a)return b.builtin$cls==="lq"||b.builtin$cls==="c"
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
return H.ee(H.aN(u,z),x)},
ed:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.L(z,v)||H.L(v,z)))return!1}return!0},
jV:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.ay(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.L(v,u)||H.L(u,v)))return!1}return!0},
ep:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.L(z,y)||H.L(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ed(x,w,!1))return!1
if(!H.ed(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.L(o,n)||H.L(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.L(o,n)||H.L(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.L(o,n)||H.L(n,o)))return!1}}return H.jV(a.named,b.named)},
mW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kh:function(a){var z,y,x,w,v,u
z=$.eo.$1(a)
y=$.bx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bz[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eb.$2(a,z)
if(z!=null){y=$.bx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bz[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bB(x)
$.bx[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bz[z]=x
return x}if(v==="-"){u=H.bB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.es(a,x)
if(v==="*")throw H.a(P.dL(z))
if(init.leafTags[z]===true){u=H.bB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.es(a,x)},
es:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bB:function(a){return J.cj(a,!1,null,!!a.$isn)},
kj:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bB(z)
else return J.cj(z,c,null,null)},
kd:function(){if(!0===$.ci)return
$.ci=!0
H.ke()},
ke:function(){var z,y,x,w,v,u,t,s
$.bx=Object.create(null)
$.bz=Object.create(null)
H.k9()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eu.$1(v)
if(u!=null){t=H.kj(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k9:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.al(C.F,H.al(C.K,H.al(C.u,H.al(C.u,H.al(C.J,H.al(C.G,H.al(C.H(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eo=new H.ka(v)
$.eb=new H.kb(u)
$.eu=new H.kc(t)},
al:function(a,b){return a(b)||b},
kn:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hx:{"^":"c;a,b,c,d,e,f,r,x",p:{
hy:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ay(z)
y=z[0]
x=z[1]
return new H.hx(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i0:{"^":"c;a,b,c,d,e,f",
L:function(a){var z,y,x
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
Z:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bt:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hj:{"^":"E;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dg:function(a,b){return new H.hj(a,b==null?null:b.method)}}},
fW:{"^":"E;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bX:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fW(a,y,z?null:b.receiver)}}},
i3:{"^":"E;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kp:{"^":"i:0;a",
$1:function(a){if(!!J.o(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e1:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaE:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aD(this).trim()+"'"},
gcu:function(){return this},
gcu:function(){return this}},
dr:{"^":"i;"},
hL:{"^":"dr;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bM:{"^":"dr;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.aC(this.a)
else y=typeof z!=="object"?J.a0(z):H.aC(z)
return(y^H.aC(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aD(z)+"'")},
p:{
bN:function(a){return a.a},
cI:function(a){return a.c},
b9:function(a){var z,y,x,w,v
z=new H.bM("self","target","receiver","name")
y=J.ay(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fn:{"^":"E;a",
k:function(a){return this.a},
p:{
cJ:function(a,b){return new H.fn("CastError: "+H.b(P.bR(a))+": type '"+H.jU(a)+"' is not a subtype of type '"+b+"'")}}},
hB:{"^":"E;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hC:function(a){return new H.hB(a)}}},
dI:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gA:function(a){return J.a0(this.a)},
D:function(a,b){if(b==null)return!1
return b instanceof H.dI&&J.H(this.a,b.a)}},
d7:{"^":"c_;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.h1(this,[H.A(this,0)])},
ap:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bm(y,b)}else return this.e4(b)},
e4:function(a){var z=this.d
if(z==null)return!1
return this.aR(this.aI(z,J.a0(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.am(z,b)
x=y==null?null:y.gad()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.am(w,b)
x=y==null?null:y.gad()
return x}else return this.e5(b)},
e5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aI(z,J.a0(a)&0x3ffffff)
x=this.aR(y,a)
if(x<0)return
return y[x].gad()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aL()
this.b=z}this.bg(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aL()
this.c=y}this.bg(y,b,c)}else{x=this.d
if(x==null){x=this.aL()
this.d=x}w=J.a0(b)&0x3ffffff
v=this.aI(x,w)
if(v==null)this.aP(x,w,[this.aC(b,c)])
else{u=this.aR(v,b)
if(u>=0)v[u].sad(c)
else v.push(this.aC(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.I(this))
z=z.c}},
bg:function(a,b,c){var z=this.am(a,b)
if(z==null)this.aP(a,b,this.aC(b,c))
else z.sad(c)},
bh:function(){this.r=this.r+1&67108863},
aC:function(a,b){var z,y
z=new H.h0(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bh()
return z},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].ge3(),b))return y
return-1},
k:function(a){return P.dc(this)},
am:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
aP:function(a,b,c){a[b]=c},
dg:function(a,b){delete a[b]},
bm:function(a,b){return this.am(a,b)!=null},
aL:function(){var z=Object.create(null)
this.aP(z,"<non-identifier-key>",z)
this.dg(z,"<non-identifier-key>")
return z}},
h0:{"^":"c;e3:a<,ad:b@,c,d"},
h1:{"^":"bP;a,$ti",
gj:function(a){return this.a.a},
gF:function(a){var z,y
z=this.a
y=new H.a8(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.I(z))
y=y.c}}},
a8:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ka:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
kb:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
kc:{"^":"i:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
k0:function(a){return J.ay(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bu:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a5(b,a))},
hf:{"^":"f;","%":"DataView;ArrayBufferView;c0|dW|dX|dd|dY|dZ|a9"},
c0:{"^":"hf;",
gj:function(a){return a.length},
$ism:1,
$asm:I.am,
$isn:1,
$asn:I.am},
dd:{"^":"dX;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbd:function(){return[P.ae]},
$asj:function(){return[P.ae]},
$ish:1,
$ash:function(){return[P.ae]},
"%":"Float64Array"},
a9:{"^":"dZ;",
i:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbd:function(){return[P.D]},
$asj:function(){return[P.D]},
$ish:1,
$ash:function(){return[P.D]}},
he:{"^":"dd;",$isbS:1,"%":"Float32Array"},
lR:{"^":"a9;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lS:{"^":"a9;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isfP:1,
"%":"Int32Array"},
lT:{"^":"a9;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lU:{"^":"a9;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lV:{"^":"a9;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lW:{"^":"a9;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lX:{"^":"a9;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dW:{"^":"c0+j;"},
dX:{"^":"dW+bd;"},
dY:{"^":"c0+j;"},
dZ:{"^":"dY+bd;"}}],["","",,P,{"^":"",
ib:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a4(new P.id(z),1)).observe(y,{childList:true})
return new P.ic(z,y,x)}else if(self.setImmediate!=null)return P.jX()
return P.jY()},
mH:[function(a){self.scheduleImmediate(H.a4(new P.ie(a),0))},"$1","jW",4,0,6],
mI:[function(a){self.setImmediate(H.a4(new P.ig(a),0))},"$1","jX",4,0,6],
mJ:[function(a){P.jp(0,a)},"$1","jY",4,0,6],
jP:function(a,b){if(H.ei(a,{func:1,args:[P.aV,P.aV]})){b.toString
return a}else{b.toString
return a}},
jO:function(){var z,y
for(;z=$.ak,z!=null;){$.aJ=null
y=z.b
$.ak=y
if(y==null)$.aI=null
z.a.$0()}},
mU:[function(){$.cb=!0
try{P.jO()}finally{$.aJ=null
$.cb=!1
if($.ak!=null)$.$get$c6().$1(P.ef())}},"$0","ef",0,0,3],
e9:function(a){var z=new P.dN(a,null)
if($.ak==null){$.aI=z
$.ak=z
if(!$.cb)$.$get$c6().$1(P.ef())}else{$.aI.b=z
$.aI=z}},
jT:function(a){var z,y,x
z=$.ak
if(z==null){P.e9(a)
$.aJ=$.aI
return}y=new P.dN(a,null)
x=$.aJ
if(x==null){y.b=z
$.aJ=y
$.ak=y}else{y.b=x.b
x.b=y
$.aJ=y
if(y.b==null)$.aI=y}},
km:function(a){var z=$.v
if(C.f===z){P.bw(null,null,C.f,a)
return}z.toString
P.bw(null,null,z,z.bD(a))},
jS:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.Q(u)
y=H.af(u)
$.v.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.as(x)
w=t
v=x.gZ()
c.$2(w,v)}}},
jH:function(a,b,c,d){var z=a.dM(0)
if(!!J.o(z).$isaU&&z!==$.$get$d1())z.en(new P.jK(b,c,d))
else b.a9(c,d)},
jI:function(a,b){return new P.jJ(a,b)},
i9:function(){return $.v},
bv:function(a,b,c,d,e){var z={}
z.a=d
P.jT(new P.jQ(z,e))},
e7:function(a,b,c,d){var z,y
y=$.v
if(y===c)return d.$0()
$.v=c
z=y
try{y=d.$0()
return y}finally{$.v=z}},
e8:function(a,b,c,d,e){var z,y
y=$.v
if(y===c)return d.$1(e)
$.v=c
z=y
try{y=d.$1(e)
return y}finally{$.v=z}},
jR:function(a,b,c,d,e,f){var z,y
y=$.v
if(y===c)return d.$2(e,f)
$.v=c
z=y
try{y=d.$2(e,f)
return y}finally{$.v=z}},
bw:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bD(d):c.dJ(d)
P.e9(d)},
id:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ic:{"^":"i:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ie:{"^":"i:1;a",
$0:function(){this.a.$0()}},
ig:{"^":"i:1;a",
$0:function(){this.a.$0()}},
jo:{"^":"c;a,b,c",
dc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a4(new P.jq(this,b),0),a)
else throw H.a(P.q("`setTimeout()` not found."))},
p:{
jp:function(a,b){var z=new P.jo(!0,null,0)
z.dc(a,b)
return z}}},
jq:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kC:{"^":"c;$ti"},
ij:{"^":"c;$ti"},
jj:{"^":"ij;a,$ti",
dQ:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.c3("Future already completed"))
z.al(b)}},
dP:{"^":"c;aN:a<,b,c,d,e,$ti",
gdE:function(){return this.b.b},
gc2:function(){return(this.c&1)!==0},
ge2:function(){return(this.c&2)!==0},
gc1:function(){return this.c===8},
e0:function(a){return this.b.b.aX(this.d,a)},
e6:function(a){if(this.c!==6)return!0
return this.b.b.aX(this.d,J.as(a))},
e_:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.ei(z,{func:1,args:[P.c,P.aE]}))return x.eb(z,y.gI(a),a.gZ())
else return x.aX(z,y.gI(a))},
e1:function(){return this.b.b.c8(this.d)}},
ac:{"^":"c;bs:a<,b,ds:c<,$ti",
d7:function(a,b){this.a=4
this.c=a},
gdl:function(){return this.a===2},
gaJ:function(){return this.a>=4},
cc:function(a,b){var z,y,x
z=$.v
if(z!==C.f){z.toString
if(b!=null)b=P.jP(b,z)}y=new P.ac(0,z,null,[null])
x=b==null?1:3
this.aD(new P.dP(null,y,x,a,b,[H.A(this,0),null]))
return y},
cb:function(a){return this.cc(a,null)},
en:function(a){var z,y
z=$.v
y=new P.ac(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.A(this,0)
this.aD(new P.dP(null,y,8,a,null,[z,z]))
return y},
aD:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaJ()){y.aD(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bw(null,null,z,new P.iz(this,a))}},
bp:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaN()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaJ()){v.bp(a)
return}this.a=v.a
this.c=v.c}z.a=this.aO(a)
y=this.b
y.toString
P.bw(null,null,y,new P.iE(z,this))}},
an:function(){var z=this.c
this.c=null
return this.aO(z)},
aO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaN()
z.a=y}return y},
al:function(a){var z,y,x
z=this.$ti
y=H.ce(a,"$isaU",z,"$asaU")
if(y){z=H.ce(a,"$isac",z,null)
if(z)P.dQ(a,this)
else P.iA(a,this)}else{x=this.an()
this.a=4
this.c=a
P.aH(this,x)}},
a9:[function(a,b){var z=this.an()
this.a=8
this.c=new P.b8(a,b)
P.aH(this,z)},function(a){return this.a9(a,null)},"eq","$2","$1","gbl",4,2,13],
$isaU:1,
p:{
iA:function(a,b){var z,y,x
b.a=1
try{a.cc(new P.iB(b),new P.iC(b))}catch(x){z=H.Q(x)
y=H.af(x)
P.km(new P.iD(b,z,y))}},
dQ:function(a,b){var z
for(;a.gdl();)a=a.c
if(a.gaJ()){z=b.an()
b.a=a.a
b.c=a.c
P.aH(b,z)}else{z=b.c
b.a=2
b.c=a
a.bp(z)}},
aH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.as(v)
t=v.gZ()
y.toString
P.bv(null,null,y,u,t)}return}for(;b.gaN()!=null;b=s){s=b.a
b.a=null
P.aH(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc2()||b.gc1()){q=b.gdE()
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
t=v.gZ()
y.toString
P.bv(null,null,y,u,t)
return}p=$.v
if(p==null?q!=null:p!==q)$.v=q
else p=null
if(b.gc1())new P.iH(z,x,b,w).$0()
else if(y){if(b.gc2())new P.iG(x,b,r).$0()}else if(b.ge2())new P.iF(z,x,b).$0()
if(p!=null)$.v=p
y=x.b
if(!!J.o(y).$isaU){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aO(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dQ(y,o)
return}}o=b.b
b=o.an()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iz:{"^":"i:1;a,b",
$0:function(){P.aH(this.a,this.b)}},
iE:{"^":"i:1;a,b",
$0:function(){P.aH(this.b,this.a.a)}},
iB:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.al(a)}},
iC:{"^":"i:14;a",
$2:function(a,b){this.a.a9(a,b)},
$1:function(a){return this.$2(a,null)}},
iD:{"^":"i:1;a,b,c",
$0:function(){this.a.a9(this.b,this.c)}},
iH:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e1()}catch(w){y=H.Q(w)
x=H.af(w)
if(this.d){v=J.as(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b8(y,x)
u.a=!0
return}if(!!J.o(z).$isaU){if(z instanceof P.ac&&z.gbs()>=4){if(z.gbs()===8){v=this.b
v.b=z.gds()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cb(new P.iI(t))
v.a=!1}}},
iI:{"^":"i:0;a",
$1:function(a){return this.a}},
iG:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e0(this.c)}catch(x){z=H.Q(x)
y=H.af(x)
w=this.a
w.b=new P.b8(z,y)
w.a=!0}}},
iF:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e6(z)===!0&&w.e!=null){v=this.b
v.b=w.e_(z)
v.a=!1}}catch(u){y=H.Q(u)
x=H.af(u)
w=this.a
v=J.as(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b8(y,x)
s.a=!0}}},
dN:{"^":"c;a,b"},
dn:{"^":"c;$ti",
w:function(a,b){var z,y
z={}
y=new P.ac(0,$.v,null,[null])
z.a=null
z.a=this.c5(new P.hS(z,this,b,y),!0,new P.hT(y),y.gbl())
return y},
gj:function(a){var z,y
z={}
y=new P.ac(0,$.v,null,[P.D])
z.a=0
this.c5(new P.hU(z),!0,new P.hV(z,y),y.gbl())
return y}},
hS:{"^":"i;a,b,c,d",
$1:function(a){P.jS(new P.hQ(this.c,a),new P.hR(),P.jI(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ch(this.b,"dn",0)]}}},
hQ:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hR:{"^":"i:0;",
$1:function(a){}},
hT:{"^":"i:1;a",
$0:function(){this.a.al(null)}},
hU:{"^":"i:0;a",
$1:function(a){++this.a.a}},
hV:{"^":"i:1;a,b",
$0:function(){this.b.al(this.a.a)}},
hP:{"^":"c;$ti"},
jK:{"^":"i:1;a,b,c",
$0:function(){return this.a.a9(this.b,this.c)}},
jJ:{"^":"i:15;a,b",
$2:function(a,b){P.jH(this.a,this.b,a,b)}},
b8:{"^":"c;I:a>,Z:b<",
k:function(a){return H.b(this.a)},
$isE:1},
jw:{"^":"c;"},
jQ:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dh()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.at(y)
throw x}},
j2:{"^":"jw;",
ec:function(a){var z,y,x
try{if(C.f===$.v){a.$0()
return}P.e7(null,null,this,a)}catch(x){z=H.Q(x)
y=H.af(x)
P.bv(null,null,this,z,y)}},
ed:function(a,b){var z,y,x
try{if(C.f===$.v){a.$1(b)
return}P.e8(null,null,this,a,b)}catch(x){z=H.Q(x)
y=H.af(x)
P.bv(null,null,this,z,y)}},
dJ:function(a){return new P.j4(this,a)},
bD:function(a){return new P.j3(this,a)},
dK:function(a){return new P.j5(this,a)},
h:function(a,b){return},
c8:function(a){if($.v===C.f)return a.$0()
return P.e7(null,null,this,a)},
aX:function(a,b){if($.v===C.f)return a.$1(b)
return P.e8(null,null,this,a,b)},
eb:function(a,b,c){if($.v===C.f)return a.$2(b,c)
return P.jR(null,null,this,a,b,c)}},
j4:{"^":"i:1;a,b",
$0:function(){return this.a.c8(this.b)}},
j3:{"^":"i:1;a,b",
$0:function(){return this.a.ec(this.b)}},
j5:{"^":"i:0;a,b",
$1:function(a){return this.a.ed(this.b,a)}}}],["","",,P,{"^":"",
B:function(){return new H.d7(0,null,null,null,null,null,0,[null,null])},
d9:function(a){return H.k1(a,new H.d7(0,null,null,null,null,null,0,[null,null]))},
R:function(a,b,c,d){return new P.iQ(0,null,null,null,null,null,0,[d])},
fQ:function(a,b,c){var z,y
if(P.cc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aK()
y.push(a)
try{P.jN(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.dp(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bU:function(a,b,c){var z,y,x
if(P.cc(a))return b+"..."+c
z=new P.c4(b)
y=$.$get$aK()
y.push(a)
try{x=z
x.a=P.dp(x.ga_(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
cc:function(a){var z,y
for(z=0;y=$.$get$aK(),z<y.length;++z)if(a===y[z])return!0
return!1},
jN:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gF(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gB(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.t();t=s,s=r){r=z.gB(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bY:function(a,b){var z,y
z=P.R(null,null,null,b)
for(y=J.aR(a);y.t();)z.N(0,y.gB(y))
return z},
dc:function(a){var z,y,x
z={}
if(P.cc(a))return"{...}"
y=new P.c4("")
try{$.$get$aK().push(a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.cr(a,new P.h2(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.$get$aK()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
iQ:{"^":"iK;a,b,c,d,e,f,r,$ti",
gF:function(a){var z=new P.c9(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.df(b)},
df:function(a){var z=this.d
if(z==null)return!1
return this.aH(z[this.aE(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.I(this))
z=z.b}},
N:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ca()
this.b=z}return this.bi(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ca()
this.c=y}return this.bi(y,b)}else return this.dd(0,b)},
dd:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ca()
this.d=z}y=this.aE(b)
x=z[y]
if(x==null)z[y]=[this.aM(b)]
else{if(this.aH(x,b)>=0)return!1
x.push(this.aM(b))}return!0},
c7:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bq(this.c,b)
else return this.dn(0,b)},
dn:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aE(b)]
x=this.aH(y,b)
if(x<0)return!1
this.bu(y.splice(x,1)[0])
return!0},
ac:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aK()}},
bi:function(a,b){if(a[b]!=null)return!1
a[b]=this.aM(b)
return!0},
bq:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bu(z)
delete a[b]
return!0},
aK:function(){this.r=this.r+1&67108863},
aM:function(a){var z,y
z=new P.iR(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aK()
return z},
bu:function(a){var z,y
z=a.gdm()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aK()},
aE:function(a){return J.a0(a)&0x3ffffff},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gdh(),b))return y
return-1},
p:{
ca:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iR:{"^":"c;dh:a<,b,dm:c<"},
c9:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iK:{"^":"hD;$ti"},
lC:{"^":"c;$ti"},
da:{"^":"dV;$ti",$ish:1},
j:{"^":"c;$ti",
gF:function(a){return new H.db(a,this.gj(a),0,null,[H.b3(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gj(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.I(a))}},
dZ:function(a,b,c){var z,y,x
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.I(a))}return y},
b7:function(a,b){return H.dq(a,b,null,H.b3(this,a,"j",0))},
n:function(a,b){var z=H.y([],[H.b3(this,a,"j",0)])
C.c.sj(z,C.b.n(this.gj(a),C.b.gj(b)))
C.c.aj(z,0,this.gj(a),a)
C.c.aj(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bU(a,"[","]")}},
c_:{"^":"N;$ti"},
h2:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
N:{"^":"c;$ti",
w:function(a,b){var z,y
for(z=J.aR(this.gH(a));z.t();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a1(this.gH(a))},
k:function(a){return P.dc(a)}},
hE:{"^":"c;$ti",
J:function(a,b){var z
for(z=J.aR(b);z.t();)this.N(0,z.gB(z))},
k:function(a){return P.bU(this,"{","}")},
w:function(a,b){var z
for(z=new P.c9(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hD:{"^":"hE;$ti"},
dV:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fJ:function(a){var z=J.o(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aD(a)+"'"},
bR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fJ(a)},
cX:function(a){return new P.iw(a)},
ap:function(a){H.bC(H.b(a))},
cd:{"^":"c;"},
"+bool":0,
cO:{"^":"c;dD:a<,b",
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.cO))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.gdD())},
gA:function(a){var z=this.a
return(z^C.b.br(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fy(H.hu(this))
y=P.aS(H.hs(this))
x=P.aS(H.ho(this))
w=P.aS(H.hp(this))
v=P.aS(H.hr(this))
u=P.aS(H.ht(this))
t=P.fz(H.hq(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aS:function(a){if(a>=10)return""+a
return"0"+a}}},
ae:{"^":"aM;"},
"+double":0,
aT:{"^":"c;aa:a<",
n:function(a,b){return new P.aT(C.b.n(this.a,b.gaa()))},
G:function(a,b){return new P.aT(this.a-b.gaa())},
a3:function(a,b){return C.b.a3(this.a,b.gaa())},
ah:function(a,b){return C.b.ah(this.a,b.gaa())},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.aT))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.gaa())},
k:function(a){var z,y,x,w,v
z=new P.fG()
y=this.a
if(y<0)return"-"+new P.aT(0-y).k(0)
x=z.$1(C.b.S(y,6e7)%60)
w=z.$1(C.b.S(y,1e6)%60)
v=new P.fF().$1(y%1e6)
return""+C.b.S(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fE:function(a,b,c,d,e,f){return new P.aT(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fF:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fG:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"c;",
gZ:function(){return H.af(this.$thrownJsError)}},
dh:{"^":"E;",
k:function(a){return"Throw of null."}},
ag:{"^":"E;a,b,c,d",
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaG()+y+x
if(!this.a)return w
v=this.gaF()
u=P.bR(this.b)
return w+v+": "+H.b(u)},
p:{
fg:function(a,b,c){return new P.ag(!0,a,b,c)}}},
dj:{"^":"ag;e,f,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bk:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
hw:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.ai(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.ai(b,a,c,"end",f))
return b}}},
fO:{"^":"ag;e,j:f>,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){if(J.aO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
w:function(a,b,c,d,e){var z=e!=null?e:J.a1(b)
return new P.fO(b,z,!0,a,c,"Index out of range")}}},
i4:{"^":"E;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
q:function(a){return new P.i4(a)}}},
i2:{"^":"E;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dL:function(a){return new P.i2(a)}}},
bo:{"^":"E;a",
k:function(a){return"Bad state: "+this.a},
p:{
c3:function(a){return new P.bo(a)}}},
ft:{"^":"E;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bR(z))+"."},
p:{
I:function(a){return new P.ft(a)}}},
dl:{"^":"c;",
k:function(a){return"Stack Overflow"},
gZ:function(){return},
$isE:1},
fx:{"^":"E;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kZ:{"^":"c;"},
iw:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
D:{"^":"aM;"},
"+int":0,
bf:{"^":"c;$ti",
aY:["cI",function(a,b){return new H.dM(this,b,[H.ch(this,"bf",0)])}],
w:function(a,b){var z
for(z=this.gF(this);z.t();)b.$1(z.gB(z))},
gj:function(a){var z,y
z=this.gF(this)
for(y=0;z.t();)++y
return y},
gY:function(a){var z,y
z=this.gF(this)
if(!z.t())throw H.a(H.fR())
y=z.gB(z)
if(z.t())throw H.a(H.fT())
return y},
q:function(a,b){var z,y,x
if(b<0)H.P(P.ai(b,0,null,"index",null))
for(z=this.gF(this),y=0;z.t();){x=z.gB(z)
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
k:function(a){return P.fQ(this,"(",")")}},
fU:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bZ:{"^":"c;$ti"},
aV:{"^":"c;",
gA:function(a){return P.c.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aM:{"^":"c;"},
"+num":0,
c:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.aC(this)},
k:function(a){return"Instance of '"+H.aD(this)+"'"},
toString:function(){return this.k(this)}},
aE:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
c4:{"^":"c;a_:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dp:function(a,b,c){var z=J.aR(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gB(z))
while(z.t())}else{a+=H.b(z.gB(z))
for(;z.t();)a=a+c+H.b(z.gB(z))}return a}}}}],["","",,W,{"^":"",
eg:function(){return document},
fH:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).P(z,a,b,c)
y.toString
z=new H.dM(new W.U(y),new W.fI(),[W.r])
return z.gY(z)},
cW:function(a){return"wheel"},
av:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eU(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Q(x)}return z},
it:function(a,b){return document.createElement(a)},
ad:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e6:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.im(a)
if(!!J.o(z).$isz)return z
return}else return a},
ea:function(a){var z=$.v
if(z===C.f)return a
return z.dK(a)},
u:{"^":"ah;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kq:{"^":"c1;l:x=,m:y=,C:z=","%":"Accelerometer|LinearAccelerationSensor"},
kr:{"^":"f;j:length=","%":"AccessibleNodeList"},
ks:{"^":"u;aq:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kt:{"^":"u;aq:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kx:{"^":"u;aq:href}","%":"HTMLBaseElement"},
fl:{"^":"f;","%":"Response;Body"},
bL:{"^":"u;",$isbL:1,"%":"HTMLBodyElement"},
ky:{"^":"u;E:name=","%":"HTMLButtonElement"},
kz:{"^":"u;",
cv:function(a,b,c){var z=a.getContext(b,P.jZ(c,null))
return z},
"%":"HTMLCanvasElement"},
kA:{"^":"f;",
au:function(a){return P.O(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kB:{"^":"r;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kD:{"^":"Y;V:style=","%":"CSSFontFaceRule"},
kE:{"^":"Y;V:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kF:{"^":"Y;V:style=","%":"CSSPageRule"},
kG:{"^":"ba;j:length=","%":"CSSPerspective"},
kH:{"^":"bO;l:x=,m:y=","%":"CSSPositionValue"},
kI:{"^":"ba;l:x=,m:y=,C:z=","%":"CSSRotation"},
Y:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kJ:{"^":"ba;l:x=,m:y=,C:z=","%":"CSSScale"},
fv:{"^":"ik;j:length=",
bj:function(a,b){var z,y
z=$.$get$cM()
y=z[b]
if(typeof y==="string")return y
y=this.dA(a,b)
z[b]=y
return y},
dA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fA()+b
if(z in a)return z
return b},
dv:function(a,b,c,d){a.setProperty(b,c,d)},
sT:function(a,b){a.height=b},
sU:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fw:{"^":"c;",
sdY:function(a,b){this.dv(a,this.bj(a,"float"),b,"")}},
kK:{"^":"Y;V:style=","%":"CSSStyleRule"},
bO:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ba:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kL:{"^":"bO;j:length=","%":"CSSTransformValue"},
kM:{"^":"ba;l:x=,m:y=,C:z=","%":"CSSTranslation"},
kN:{"^":"bO;j:length=","%":"CSSUnparsedValue"},
kO:{"^":"Y;V:style=","%":"CSSViewportRule"},
kP:{"^":"f;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kQ:{"^":"f;l:x=,m:y=,C:z=","%":"DeviceAcceleration"},
fB:{"^":"u;","%":"HTMLDivElement"},
kR:{"^":"r;",
gaS:function(a){return new W.b0(a,"mousedown",!1,[W.J])},
gaT:function(a){return new W.b0(a,"mousemove",!1,[W.J])},
gaU:function(a){return new W.b0(a,"mouseup",!1,[W.J])},
gaV:function(a){return new W.b0(a,W.cW(a),!1,[W.aG])},
"%":"Document|HTMLDocument|XMLDocument"},
kS:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
kT:{"^":"fC;",
gaf:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":"DOMPoint"},
fC:{"^":"f;",
gaf:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":";DOMPointReadOnly"},
kU:{"^":"ip;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a3]},
$isn:1,
$asn:function(){return[P.a3]},
$asj:function(){return[P.a3]},
$ish:1,
$ash:function(){return[P.a3]},
$ask:function(){return[P.a3]},
"%":"ClientRectList|DOMRectList"},
fD:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gU(a))+" x "+H.b(this.gT(a))},
D:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa3)return!1
return a.left===z.gc3(b)&&a.top===z.gcd(b)&&this.gU(a)===z.gU(b)&&this.gT(a)===z.gT(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gU(a)
w=this.gT(a)
return W.dU(W.ad(W.ad(W.ad(W.ad(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gce:function(a){return new P.aa(a.left,a.top,[null])},
gT:function(a){return a.height},
gc3:function(a){return a.left},
gcd:function(a){return a.top},
gU:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa3:1,
$asa3:I.am,
"%":";DOMRectReadOnly"},
kV:{"^":"ir;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kW:{"^":"f;j:length=","%":"DOMTokenList"},
ah:{"^":"r;V:style=,bo:namespaceURI=,ee:tagName=",
gdH:function(a){return new W.is(a)},
k:function(a){return a.localName},
P:["ax",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cV
if(z==null){z=H.y([],[W.de])
y=new W.df(z)
z.push(W.dR(null))
z.push(W.e2())
$.cV=y
d=y}else d=z
z=$.cU
if(z==null){z=new W.e5(d)
$.cU=z
c=z}else{z.a=d
c=z}}if($.a2==null){z=document
y=z.implementation.createHTMLDocument("")
$.a2=y
$.bQ=y.createRange()
y=$.a2
y.toString
x=y.createElement("base")
J.f3(x,z.baseURI)
$.a2.head.appendChild(x)}z=$.a2
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a2
if(!!this.$isbL)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a2.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.v(C.N,a.tagName)){$.bQ.selectNodeContents(w)
v=$.bQ.createContextualFragment(b)}else{w.innerHTML=b
v=$.a2.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a2.body
if(w==null?z!=null:w!==z)J.cz(w)
c.b5(v)
document.adoptNode(v)
return v},function(a,b,c){return this.P(a,b,c,null)},"dS",null,null,"gev",5,5,null],
cA:function(a,b,c,d){a.textContent=null
a.appendChild(this.P(a,b,c,d))},
cz:function(a,b){return this.cA(a,b,null,null)},
aZ:function(a){return a.getBoundingClientRect()},
gaS:function(a){return new W.ab(a,"mousedown",!1,[W.J])},
gaT:function(a){return new W.ab(a,"mousemove",!1,[W.J])},
gaU:function(a){return new W.ab(a,"mouseup",!1,[W.J])},
gaV:function(a){return new W.ab(a,W.cW(a),!1,[W.aG])},
$isah:1,
"%":";Element"},
fI:{"^":"i:0;",
$1:function(a){return!!J.o(a).$isah}},
kX:{"^":"u;E:name=","%":"HTMLEmbedElement"},
kY:{"^":"bb;I:error=","%":"ErrorEvent"},
bb:{"^":"f;",
at:function(a){return a.preventDefault()},
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
z:{"^":"f;",
bz:["cG",function(a,b,c,d){if(c!=null)this.de(a,b,c,!1)}],
de:function(a,b,c,d){return a.addEventListener(b,H.a4(c,1),!1)},
dq:function(a,b,c,d){return a.removeEventListener(b,H.a4(c,1),!1)},
$isz:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e_|e0|e3|e4"},
lh:{"^":"u;E:name=","%":"HTMLFieldSetElement"},
li:{"^":"iy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$isn:1,
$asn:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"FileList"},
lj:{"^":"z;I:error=","%":"FileReader"},
lk:{"^":"z;I:error=,j:length=","%":"FileWriter"},
lm:{"^":"f;V:style=","%":"FontFace"},
ln:{"^":"z;",
ew:function(a,b,c){return a.forEach(H.a4(b,3),c)},
w:function(a,b){b=H.a4(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lp:{"^":"u;j:length=,E:name=","%":"HTMLFormElement"},
lr:{"^":"c1;l:x=,m:y=,C:z=","%":"Gyroscope"},
ls:{"^":"f;j:length=","%":"History"},
lt:{"^":"iM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lu:{"^":"u;E:name=","%":"HTMLIFrameElement"},
lw:{"^":"u;E:name=,el:valueAsNumber=","%":"HTMLInputElement"},
bg:{"^":"dK;",
geo:function(a){return a.which},
$isbg:1,
"%":"KeyboardEvent"},
lB:{"^":"u;aq:href}","%":"HTMLLinkElement"},
lD:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lE:{"^":"c1;l:x=,m:y=,C:z=","%":"Magnetometer"},
lF:{"^":"u;E:name=","%":"HTMLMapElement"},
lI:{"^":"u;I:error=","%":"HTMLAudioElement|HTMLMediaElement|HTMLVideoElement"},
lJ:{"^":"f;j:length=","%":"MediaList"},
lK:{"^":"z;",
K:function(a){return a.clone()},
"%":"MediaStream"},
lL:{"^":"z;",
K:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lM:{"^":"z;",
bz:function(a,b,c,d){if(J.H(b,"message"))a.start()
this.cG(a,b,c,!1)},
"%":"MessagePort"},
lN:{"^":"u;E:name=","%":"HTMLMetaElement"},
lO:{"^":"iS;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gH:function(a){var z=H.y([],[P.l])
this.w(a,new W.h6(z))
return z},
gj:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h6:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lP:{"^":"iT;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gH:function(a){var z=H.y([],[P.l])
this.w(a,new W.h7(z))
return z},
gj:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
h7:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lQ:{"^":"iV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"MimeTypeArray"},
J:{"^":"dK;bJ:button=",
gc6:function(a){var z,y,x
if(!!a.offsetX)return new P.aa(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.e6(z)).$isah)throw H.a(P.q("offsetX is only supported on elements"))
y=W.e6(z)
z=[null]
x=new P.aa(a.clientX,a.clientY,z).G(0,J.eV(J.eX(y)))
return new P.aa(J.cA(x.a),J.cA(x.b),z)}},
$isJ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
U:{"^":"da;a",
gY:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c3("No elements"))
if(y>1)throw H.a(P.c3("More than one element"))
return z.firstChild},
J:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gF:function(a){var z=this.a.childNodes
return new W.cZ(z,z.length,-1,null,[H.b3(C.Q,z,"k",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asda:function(){return[W.r]},
$asj:function(){return[W.r]},
$ash:function(){return[W.r]},
$asdV:function(){return[W.r]}},
r:{"^":"z;as:parentNode=,aW:previousSibling=",
ge8:function(a){return new W.U(a)},
ea:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cH(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
lY:{"^":"f;",
e9:[function(a){return a.previousNode()},"$0","gaW",1,0,4],
"%":"NodeIterator"},
hg:{"^":"iX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
m0:{"^":"u;E:name=","%":"HTMLObjectElement"},
m2:{"^":"u;E:name=","%":"HTMLOutputElement"},
m3:{"^":"u;E:name=","%":"HTMLParamElement"},
aW:{"^":"f;j:length=","%":"Plugin"},
m5:{"^":"j0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aW]},
$isn:1,
$asn:function(){return[W.aW]},
$asj:function(){return[W.aW]},
$ish:1,
$ash:function(){return[W.aW]},
$ask:function(){return[W.aW]},
"%":"PluginArray"},
m8:{"^":"f;",
aZ:function(a){return a.getBoundingClientRect()},
"%":"Range"},
me:{"^":"j6;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gH:function(a){var z=H.y([],[P.l])
this.w(a,new W.hA(z))
return z},
gj:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hA:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
mf:{"^":"u;j:length=,E:name=","%":"HTMLSelectElement"},
c1:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mg:{"^":"bb;I:error=","%":"SensorErrorEvent"},
mh:{"^":"u;E:name=","%":"HTMLSlotElement"},
mi:{"^":"e0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"SourceBufferList"},
mj:{"^":"jc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bn]},
$isn:1,
$asn:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$ask:function(){return[W.bn]},
"%":"SpeechGrammarList"},
mk:{"^":"bb;I:error=","%":"SpeechRecognitionError"},
aZ:{"^":"f;j:length=","%":"SpeechRecognitionResult"},
mm:{"^":"jf;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gH:function(a){var z=H.y([],[P.l])
this.w(a,new W.hO(z))
return z},
gj:function(a){return a.length},
$asN:function(){return[P.l,P.l]},
"%":"Storage"},
hO:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
hX:{"^":"u;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ax(a,b,c,d)
z=W.fH("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.U(y).J(0,J.eS(z))
return y},
"%":"HTMLTableElement"},
mp:{"^":"u;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ax(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.P(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.gY(z)
x.toString
z=new W.U(x)
w=z.gY(z)
y.toString
w.toString
new W.U(y).J(0,new W.U(w))
return y},
"%":"HTMLTableRowElement"},
mq:{"^":"u;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ax(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.P(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.gY(z)
y.toString
x.toString
new W.U(y).J(0,new W.U(x))
return y},
"%":"HTMLTableSectionElement"},
ds:{"^":"u;",$isds:1,"%":"HTMLTemplateElement"},
mr:{"^":"u;E:name=","%":"HTMLTextAreaElement"},
mt:{"^":"jn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.br]},
$isn:1,
$asn:function(){return[W.br]},
$asj:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$ask:function(){return[W.br]},
"%":"TextTrackCueList"},
mu:{"^":"e4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bq]},
$isn:1,
$asn:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$ask:function(){return[W.bq]},
"%":"TextTrackList"},
mv:{"^":"f;j:length=","%":"TimeRanges"},
mw:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bs]},
$isn:1,
$asn:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$ask:function(){return[W.bs]},
"%":"TouchList"},
mx:{"^":"f;j:length=","%":"TrackDefaultList"},
mA:{"^":"f;",
ex:[function(a){return a.parentNode()},"$0","gas",1,0,4],
e9:[function(a){return a.previousNode()},"$0","gaW",1,0,4],
"%":"TreeWalker"},
dK:{"^":"bb;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mC:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mE:{"^":"f;l:x=,C:z=","%":"VRStageBoundsPoint"},
mF:{"^":"z;j:length=","%":"VideoTrackList"},
aG:{"^":"J;",
gdU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.q("deltaY is not supported"))},
$isaG:1,
"%":"WheelEvent"},
i7:{"^":"z;",
gdG:function(a){var z,y
z=P.aM
y=new P.ac(0,$.v,null,[z])
this.dj(a)
this.dr(a,W.ea(new W.i8(new P.jj(y,[z]))))
return y},
dr:function(a,b){return a.requestAnimationFrame(H.a4(b,1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
i8:{"^":"i:0;a",
$1:function(a){this.a.dQ(0,a)}},
mG:{"^":"z;"},
mK:{"^":"r;E:name=,bo:namespaceURI=","%":"Attr"},
mL:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.Y]},
$isn:1,
$asn:function(){return[W.Y]},
$asj:function(){return[W.Y]},
$ish:1,
$ash:function(){return[W.Y]},
$ask:function(){return[W.Y]},
"%":"CSSRuleList"},
mM:{"^":"fD;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
D:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa3)return!1
return a.left===z.gc3(b)&&a.top===z.gcd(b)&&a.width===z.gU(b)&&a.height===z.gT(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dU(W.ad(W.ad(W.ad(W.ad(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gce:function(a){return new P.aa(a.left,a.top,[null])},
gT:function(a){return a.height},
gU:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mN:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.be]},
$isn:1,
$asn:function(){return[W.be]},
$asj:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"GamepadList"},
mQ:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mR:{"^":"fl;",
K:function(a){return a.clone()},
"%":"Request"},
mS:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aZ]},
$isn:1,
$asn:function(){return[W.aZ]},
$asj:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$ask:function(){return[W.aZ]},
"%":"SpeechRecognitionResultList"},
mT:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bp]},
$isn:1,
$asn:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"StyleSheetList"},
ih:{"^":"c_;dk:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gH(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.F)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gH:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.e(z,w)
v=z[w]
u=J.d(v)
if(u.gbo(v)==null)y.push(u.gE(v))}return y},
$asc_:function(){return[P.l,P.l]},
$asN:function(){return[P.l,P.l]}},
is:{"^":"ih;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gH(this).length}},
b0:{"^":"dn;a,b,c,$ti",
c5:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.A(this,0))}},
ab:{"^":"b0;a,b,c,$ti"},
iu:{"^":"hP;a,b,c,d,e,$ti",
d6:function(a,b,c,d,e){this.dB()},
dM:function(a){if(this.b==null)return
this.dC()
this.b=null
this.d=null
return},
dB:function(){var z=this.d
if(z!=null&&this.a<=0)J.ez(this.b,this.c,z,!1)},
dC:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ey(x,this.c,z,!1)}},
p:{
aj:function(a,b,c,d,e){var z=W.ea(new W.iv(c))
z=new W.iu(0,a,b,z,!1,[e])
z.d6(a,b,c,!1,e)
return z}}},
iv:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
c7:{"^":"c;cp:a<",
d8:function(a){var z,y
z=$.$get$c8()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.M[y],W.k7())
for(y=0;y<12;++y)z.i(0,C.p[y],W.k8())}},
a0:function(a){return $.$get$dS().v(0,W.av(a))},
X:function(a,b,c){var z,y,x
z=W.av(a)
y=$.$get$c8()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dR:function(a){var z,y
z=document.createElement("a")
y=new W.j7(z,window.location)
y=new W.c7(y)
y.d8(a)
return y},
mO:[function(a,b,c,d){return!0},"$4","k7",16,0,9],
mP:[function(a,b,c,d){var z,y,x,w,v
z=d.gcp()
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
return z},"$4","k8",16,0,9]}},
k:{"^":"c;$ti",
gF:function(a){return new W.cZ(a,this.gj(a),-1,null,[H.b3(this,a,"k",0)])}},
df:{"^":"c;a",
a0:function(a){return C.c.bA(this.a,new W.hi(a))},
X:function(a,b,c){return C.c.bA(this.a,new W.hh(a,b,c))}},
hi:{"^":"i:0;a",
$1:function(a){return a.a0(this.a)}},
hh:{"^":"i:0;a,b,c",
$1:function(a){return a.X(this.a,this.b,this.c)}},
j8:{"^":"c;cp:d<",
da:function(a,b,c,d){var z,y,x
this.a.J(0,c)
z=b.aY(0,new W.j9())
y=b.aY(0,new W.ja())
this.b.J(0,z)
x=this.c
x.J(0,C.O)
x.J(0,y)},
a0:function(a){return this.a.v(0,W.av(a))},
X:["cK",function(a,b,c){var z,y
z=W.av(a)
y=this.c
if(y.v(0,H.b(z)+"::"+b))return this.d.dF(c)
else if(y.v(0,"*::"+b))return this.d.dF(c)
else{y=this.b
if(y.v(0,H.b(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.b(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
j9:{"^":"i:0;",
$1:function(a){return!C.c.v(C.p,a)}},
ja:{"^":"i:0;",
$1:function(a){return C.c.v(C.p,a)}},
jk:{"^":"j8;e,a,b,c,d",
X:function(a,b,c){if(this.cK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ct(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
e2:function(){var z=P.l
z=new W.jk(P.bY(C.o,z),P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),null)
z.da(null,new H.h3(C.o,new W.jl(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jl:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
ji:{"^":"c;",
a0:function(a){var z=J.o(a)
if(!!z.$isdk)return!1
z=!!z.$isx
if(z&&W.av(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.cD(b,"on"))return!1
return this.a0(a)}},
cZ:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aP(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gB:function(a){return this.d}},
il:{"^":"c;a",$isz:1,p:{
im:function(a){if(a===window)return a
else return new W.il(a)}}},
de:{"^":"c;"},
lZ:{"^":"c;"},
mB:{"^":"c;"},
j7:{"^":"c;a,b"},
e5:{"^":"c;a",
b5:function(a){new W.jv(this).$2(a,null)},
ab:function(a,b){if(b==null)J.cz(a)
else b.removeChild(a)},
du:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.ct(a)
x=y.gdk().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Q(t)}v="element unprintable"
try{v=J.at(a)}catch(t){H.Q(t)}try{u=W.av(a)
this.dt(a,b,z,v,u,y,x)}catch(t){if(H.Q(t) instanceof P.ag)throw t
else{this.ab(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dt:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ab(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a0(a)){this.ab(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.ab(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.y(z.slice(0),[H.A(z,0)])
for(x=f.gH(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.e(y,x)
w=y[x]
if(!this.a.X(a,J.f7(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isds)this.b5(a.content)}},
jv:{"^":"i:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.du(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ab(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eT(z)}catch(w){H.Q(w)
v=z
if(x){u=J.d(v)
if(u.gas(v)!=null){u.gas(v)
u.gas(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ik:{"^":"f+fw;"},
io:{"^":"f+j;"},
ip:{"^":"io+k;"},
iq:{"^":"f+j;"},
ir:{"^":"iq+k;"},
ix:{"^":"f+j;"},
iy:{"^":"ix+k;"},
iL:{"^":"f+j;"},
iM:{"^":"iL+k;"},
iS:{"^":"f+N;"},
iT:{"^":"f+N;"},
iU:{"^":"f+j;"},
iV:{"^":"iU+k;"},
iW:{"^":"f+j;"},
iX:{"^":"iW+k;"},
j_:{"^":"f+j;"},
j0:{"^":"j_+k;"},
j6:{"^":"f+N;"},
e_:{"^":"z+j;"},
e0:{"^":"e_+k;"},
jb:{"^":"f+j;"},
jc:{"^":"jb+k;"},
jf:{"^":"f+N;"},
jm:{"^":"f+j;"},
jn:{"^":"jm+k;"},
e3:{"^":"z+j;"},
e4:{"^":"e3+k;"},
jr:{"^":"f+j;"},
js:{"^":"jr+k;"},
jx:{"^":"f+j;"},
jy:{"^":"jx+k;"},
jz:{"^":"f+j;"},
jA:{"^":"jz+k;"},
jB:{"^":"f+j;"},
jC:{"^":"jB+k;"},
jD:{"^":"f+j;"},
jE:{"^":"jD+k;"},
jF:{"^":"f+j;"},
jG:{"^":"jF+k;"}}],["","",,P,{"^":"",
O:function(a){var z,y,x,w,v
if(a==null)return
z=P.B()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
jZ:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cr(a,new P.k_(z))
return z},
cT:function(){var z=$.cS
if(z==null){z=J.bF(window.navigator.userAgent,"Opera",0)
$.cS=z}return z},
fA:function(){var z,y
z=$.cP
if(z!=null)return z
y=$.cQ
if(y==null){y=J.bF(window.navigator.userAgent,"Firefox",0)
$.cQ=y}if(y)z="-moz-"
else{y=$.cR
if(y==null){y=P.cT()!==!0&&J.bF(window.navigator.userAgent,"Trident/",0)
$.cR=y}if(y)z="-ms-"
else z=P.cT()===!0?"-o-":"-webkit-"}$.cP=z
return z},
k_:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",md:{"^":"z;I:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},my:{"^":"z;I:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aa:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
D:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.aa))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gA:function(a){var z,y
z=J.a0(this.a)
y=J.a0(this.b)
return P.iN(P.dT(P.dT(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.aa(y,C.a.n(z,x),this.$ti)},
G:function(a,b){var z,y,x,w
z=this.a
y=J.d(b)
x=y.gl(b)
if(typeof z!=="number")return z.G()
if(typeof x!=="number")return H.K(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.G()
if(typeof y!=="number")return H.K(y)
return new P.aa(z-x,w-y,this.$ti)}},
j1:{"^":"c;$ti"},
a3:{"^":"j1;$ti"}}],["","",,P,{"^":"",l_:{"^":"x;l:x=,m:y=","%":"SVGFEBlendElement"},l0:{"^":"x;l:x=,m:y=","%":"SVGFEColorMatrixElement"},l1:{"^":"x;l:x=,m:y=","%":"SVGFEComponentTransferElement"},l2:{"^":"x;l:x=,m:y=","%":"SVGFECompositeElement"},l3:{"^":"x;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},l4:{"^":"x;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},l5:{"^":"x;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},l6:{"^":"x;l:x=,m:y=","%":"SVGFEFloodElement"},l7:{"^":"x;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},l8:{"^":"x;l:x=,m:y=","%":"SVGFEImageElement"},l9:{"^":"x;l:x=,m:y=","%":"SVGFEMergeElement"},la:{"^":"x;l:x=,m:y=","%":"SVGFEMorphologyElement"},lb:{"^":"x;l:x=,m:y=","%":"SVGFEOffsetElement"},lc:{"^":"x;l:x=,m:y=,C:z=","%":"SVGFEPointLightElement"},ld:{"^":"x;l:x=,m:y=","%":"SVGFESpecularLightingElement"},le:{"^":"x;l:x=,m:y=,C:z=","%":"SVGFESpotLightElement"},lf:{"^":"x;l:x=,m:y=","%":"SVGFETileElement"},lg:{"^":"x;l:x=,m:y=","%":"SVGFETurbulenceElement"},ll:{"^":"x;l:x=,m:y=","%":"SVGFilterElement"},lo:{"^":"aw;l:x=,m:y=","%":"SVGForeignObjectElement"},fN:{"^":"aw;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aw:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lv:{"^":"aw;l:x=,m:y=","%":"SVGImageElement"},lA:{"^":"iP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d8]},
$ish:1,
$ash:function(){return[P.d8]},
$ask:function(){return[P.d8]},
"%":"SVGLengthList"},lG:{"^":"x;l:x=,m:y=","%":"SVGMaskElement"},m_:{"^":"iZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.di]},
$ish:1,
$ash:function(){return[P.di]},
$ask:function(){return[P.di]},
"%":"SVGNumberList"},m4:{"^":"x;l:x=,m:y=","%":"SVGPatternElement"},m6:{"^":"f;l:x=,m:y=","%":"SVGPoint"},m7:{"^":"f;j:length=","%":"SVGPointList"},m9:{"^":"f;l:x=,m:y=","%":"SVGRect"},ma:{"^":"fN;l:x=,m:y=","%":"SVGRectElement"},dk:{"^":"x;",$isdk:1,"%":"SVGScriptElement"},mn:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},x:{"^":"ah;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.de])
z.push(W.dR(null))
z.push(W.e2())
z.push(new W.ji())
c=new W.e5(new W.df(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.U(w)
u=z.gY(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaS:function(a){return new W.ab(a,"mousedown",!1,[W.J])},
gaT:function(a){return new W.ab(a,"mousemove",!1,[W.J])},
gaU:function(a){return new W.ab(a,"mouseup",!1,[W.J])},
gaV:function(a){return new W.ab(a,"mousewheel",!1,[W.aG])},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mo:{"^":"aw;l:x=,m:y=","%":"SVGSVGElement"},hY:{"^":"aw;","%":"SVGTextPathElement;SVGTextContentElement"},ms:{"^":"hY;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mz:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dw]},
$ish:1,
$ash:function(){return[P.dw]},
$ask:function(){return[P.dw]},
"%":"SVGTransformList"},mD:{"^":"aw;l:x=,m:y=","%":"SVGUseElement"},iO:{"^":"f+j;"},iP:{"^":"iO+k;"},iY:{"^":"f+j;"},iZ:{"^":"iY+k;"},jg:{"^":"f+j;"},jh:{"^":"jg+k;"},jt:{"^":"f+j;"},ju:{"^":"jt+k;"}}],["","",,P,{"^":"",ku:{"^":"f;j:length=","%":"AudioBuffer"},kv:{"^":"ii;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gH:function(a){var z=H.y([],[P.l])
this.w(a,new P.fi(z))
return z},
gj:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"AudioParamMap"},fi:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},kw:{"^":"z;j:length=","%":"AudioTrackList"},fj:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m1:{"^":"fj;j:length=","%":"OfflineAudioContext"},ii:{"^":"f+N;"}}],["","",,P,{"^":"",mb:{"^":"f;",
by:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bE:function(a,b,c){return a.bindFramebuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b){return a.checkFramebufferStatus(b)},
bL:function(a,b){return a.clear(b)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bO:function(a){return a.createBuffer()},
bP:function(a){return a.createFramebuffer()},
bQ:function(a){return a.createProgram()},
bR:function(a,b){return a.createShader(b)},
bS:function(a){return a.createTexture()},
bU:function(a,b){return a.depthMask(b)},
bV:function(a,b){return a.disable(b)},
bW:function(a,b,c,d){return a.drawArrays(b,c,d)},
bX:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bY:function(a,b){return a.enable(b)},
bZ:function(a,b){return a.enableVertexAttribArray(b)},
c0:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
au:function(a){return P.O(a.getContextAttributes())},
b_:function(a){return a.getError()},
b0:function(a,b){return a.getProgramInfoLog(b)},
b1:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c4:function(a,b){return a.linkProgram(b)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c9:function(a,b,c,d){return a.texParameterf(b,c,d)},
ca:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ct:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mc:{"^":"f;",
dI:function(a,b){return a.beginTransformFeedback(b)},
dL:function(a,b){return a.bindVertexArray(b)},
dT:function(a){return a.createVertexArray()},
dV:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dW:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dX:function(a){return a.endTransformFeedback()},
ef:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
ek:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
em:function(a,b,c){return a.vertexAttribDivisor(b,c)},
by:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bE:function(a,b,c){return a.bindFramebuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b){return a.checkFramebufferStatus(b)},
bL:function(a,b){return a.clear(b)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bO:function(a){return a.createBuffer()},
bP:function(a){return a.createFramebuffer()},
bQ:function(a){return a.createProgram()},
bR:function(a,b){return a.createShader(b)},
bS:function(a){return a.createTexture()},
bU:function(a,b){return a.depthMask(b)},
bV:function(a,b){return a.disable(b)},
bW:function(a,b,c,d){return a.drawArrays(b,c,d)},
bX:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bY:function(a,b){return a.enable(b)},
bZ:function(a,b){return a.enableVertexAttribArray(b)},
c0:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
au:function(a){return P.O(a.getContextAttributes())},
b_:function(a){return a.getError()},
b0:function(a,b){return a.getProgramInfoLog(b)},
b1:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c4:function(a,b){return a.linkProgram(b)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c9:function(a,b,c,d){return a.texParameterf(b,c,d)},
ca:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ct:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",ml:{"^":"je;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.O(a.item(b))},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bZ]},
$ish:1,
$ash:function(){return[P.bZ]},
$ask:function(){return[P.bZ]},
"%":"SQLResultSetRowList"},jd:{"^":"f+j;"},je:{"^":"jd+k;"}}],["","",,G,{"^":"",
ia:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.e(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.e(z,y)
z[y]=w}return C.c.ae(z,"\n")},
dO:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bR(a,b)
z.b6(a,y,c)
z.bN(a,y)
x=z.b3(a,y,35713)
if(x!=null&&J.H(x,!1)){w=z.b2(a,y)
P.ap("E:Compilation failed:")
P.ap("E:"+G.ia(c))
P.ap("E:Failure:")
P.ap(C.i.n("E:",w))
throw H.a(w)}return y},
d_:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bI(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.bJ(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.e(a,y)
v=J.cx(a[y])
if(z>=w)return H.e(b,z)
b[z]=v}return b},
fL:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bI(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x;++z
if(y>=a.length)return H.e(a,y)
x=J.bJ(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
fM:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bI(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.bJ(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.cx(a[y])
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.eW(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
fK:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aP(a[y],0)
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.aP(a[y],1)
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.aP(a[y],2)
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.aP(a[y],3)
if(z>=w)return H.e(b,z)
b[z]=x}return b},
iJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a8(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.D]],v=[P.ae],u=[T.T],t=[T.p],s=[T.C];y.t();){r=y.d
if(!x.ap(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.ek>0)H.bC("I: "+q)
continue}p=z.h(0,r)
switch($.$get$V().h(0,r).a){case"vec2":b.a6(r,G.fL(H.b4(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a6(r,G.d_(H.b4(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a6(r,G.fM(H.b4(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a6(r,new Float32Array(H.bu(H.b4(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a6(r,G.fK(H.b4(p,"$ish",w,"$ash"),null),4)
break}}},
d3:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.B()
w=J.eK(z.a)
v=new G.h5(z,w,4,x,y,null,0,-1,null,null,P.B(),"meshdata:"+a,!1,!0)
u=G.d_(c.d,null)
x.i(0,"aPosition",J.bG(z.a))
v.ch=u
v.bb("aPosition",u,3)
t=$.$get$V().h(0,"aPosition")
if(t==null)H.P("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.b6(z.a,w)
z.c_(0,s,0)
z.cs(0,x.h(0,"aPosition"),s,t.bc(),5126,!1,0,0)
y=c.cR()
v.y=J.bG(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bu(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bu(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bu(y))
v.Q=5125}J.b6(z.a,w)
y=v.y
x=v.cx
J.bD(z.a,34963,y)
J.cn(z.a,34963,x,35048)
G.iJ(c,v)
return v},
bj:{"^":"c;"},
aF:{"^":"bj;d,a,b,c",
bd:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.b(new H.dI(H.k4(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.a8(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.ae(z,"\n")}},
fm:{"^":"hK;"},
fo:{"^":"c;a,b",
c_:function(a,b,c){J.eQ(this.a,b)
if(c>0)J.fd(this.a,b,c)},
cs:function(a,b,c,d,e,f,g,h){J.bD(this.a,34962,b)
J.fe(this.a,c,d,e,!1,g,h)}},
d0:{"^":"c;a,b,c,d,e",
cQ:function(a,b,c,d,e){var z,y,x
z=this.a
y=J.eH(z.a)
this.b=y
J.bE(z.a,36160,y)
y=this.c
if(y!=null){y=y.b
J.cs(z.a,36160,36064,3553,y,0)}y=this.d
if(y!=null){y=y.b
J.cs(z.a,36160,36096,3553,y,0)}x=J.eD(z.a,36160)
if(x!==36053)throw H.a("Error Incomplete Framebuffer: "+H.b(x))
J.bE(z.a,36160,null)},
a5:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.bE(z.a,36160,y)
J.ff(z.a,b,c,d,e)
if(a!==0)J.eE(z.a,a)},
p:{
bT:function(a,b,c){var z,y,x
z=$.$get$dt()
y=G.dJ(a,"frame::color",b,c,32856,z)
z=G.dJ(a,"frame::depth",b,c,33190,z)
x=new G.d0(a,null,y,z,null)
x.cQ(a,y,z,null,!1)
return x}}},
cY:{"^":"c;a,b,c,d"},
d2:{"^":"c;a,b,c,d,e",
aA:function(a){switch($.$get$V().h(0,a).a){case"vec2":this.e.i(0,a,H.y([],[T.C]))
break
case"vec3":this.e.i(0,a,H.y([],[T.p]))
break
case"vec4":this.e.i(0,a,H.y([],[T.T]))
break
case"float":this.e.i(0,a,H.y([],[P.ae]))
break
case"uvec4":this.e.i(0,a,H.y([],[[P.h,P.D]]))
break}},
cL:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].K(0))},
cM:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].K(0))},
cN:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.cY(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].K(0))},
cR:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.y(y,[P.D])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.e(y,u)
t=y[u]
s=t.ger(t)
if(v>=w)return H.e(x,v)
x[v]=s
s=v+1
r=t.ges(t)
if(s>=w)return H.e(x,s)
x[s]=r
r=v+2
s=t.geu(t)
if(r>=w)return H.e(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.e(x,v)
x[v]=s
r=v+1
if(r>=w)return H.e(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.e(x,r)
x[r]=p
r=v+3
if(r>=w)return H.e(x,r)
x[r]=s
s=v+4
if(s>=w)return H.e(x,s)
x[s]=p
p=v+5
if(p>=w)return H.e(x,p)
x[p]=q.d
v+=6}return x},
cT:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.C(t))}},
cS:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.cY(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a8(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$V().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.ae(z," ")}},
dv:{"^":"c;a,b,c"},
du:{"^":"c;a,b,c"},
h4:{"^":"aF;d,a,b,c"},
h5:{"^":"bj;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bb:function(a,b,c){var z,y
C.i.bk(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bD(z.a,34962,y)
J.cn(z.a,34962,b,35048)},
cU:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a6:function(a,b,c){var z,y,x,w,v
z=J.cp(a,0)===105
if(z&&this.z===0)this.z=C.b.ay(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bG(x.a))
this.bb(a,b,c)
w=$.$get$V().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b6(x.a,this.e)
x.c_(0,v,z?1:0)
x.cs(0,y.h(0,a),v,w.bc(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a8(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.ae(y,"  ")}},
hm:{"^":"aF;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cO:function(a,b){var z
if(typeof a!=="number")return a.a2()
if(typeof b!=="number")return H.K(b)
z=a/b
if(this.z===z)return
this.z=z
this.bf()},
bf:function(){var z,y,x,w,v,u
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
bd:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.p(new Float32Array(3))
u.M(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
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
y=J.o(t)
x=!!y.$isT
q=x?y.gaf(t):1
if(!!y.$isp){p=y.gl(t)
s=y.gm(t)
r=y.gC(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gC(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.K(t)
x=z[4]
if(typeof s!=="number")return H.K(s)
w=z[8]
if(typeof r!=="number")return H.K(r)
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
c.e7(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
hz:{"^":"bj;d,e,f,r,x,y,z,Q,ch,a,b,c",
cX:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cy(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cy(w.a,v,t))}},
d2:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a8(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ap(0,v))x.push(v)}for(z=this.x,y=new P.c9(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
d5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a8(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cp(t,0)){case 117:if(w.ap(0,t)){s=b.h(0,t)
if(v.ap(0,t))H.bC("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$V().h(0,t)
if(r==null)H.P("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bK(x.a,q,s)
else if(!!J.o(s).$isfP)J.fb(x.a,q,s)
break
case"float":if(r.c===0)J.f9(x.a,q,s)
else if(!!J.o(s).$isbS)J.fa(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a7(s,"$isS").a
J.cF(x.a,q,!1,p)}else if(!!J.o(s).$isbS)J.cF(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.E.gep(H.a7(s,"$islH"))
J.cE(x.a,q,!1,p)}else if(!!J.o(s).$isbS)J.cE(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cD(o,q,H.a7(s,"$isT").a)
else J.cD(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cC(o,q,H.a7(s,"$isp").a)
else J.cC(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cB(o,q,H.a7(s,"$isC").a)
else J.cB(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.K(p)
J.cl(x.a,33984+p)
p=H.a7(s,"$isc5").b
J.b5(x.a,3553,p)
p=this.ch
J.bK(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.K(p)
J.cl(x.a,33984+p)
p=H.a7(s,"$isc5").b
J.b5(x.a,34067,p)
p=this.ch
J.bK(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bC("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.H(s,!0)
o=x.a
if(p)J.aQ(o,2929)
else J.bH(o,2929)
break
case"cStencilFunc":H.a7(s,"$isdv")
p=s.a
o=x.a
if(p===1281)J.bH(o,2960)
else{J.aQ(o,2960)
o=s.b
n=s.c
J.f4(x.a,p,o,n)}break
case"cDepthWrite":J.eL(x.a,s)
break
case"cBlendEquation":H.a7(s,"$isdu")
p=s.a
o=x.a
if(p===1281)J.bH(o,3042)
else{J.aQ(o,3042)
o=s.b
n=s.c
J.eC(x.a,o,n)
J.eB(x.a,p)}break}++u
break}}m=P.fE(0,0,0,Date.now()-new P.cO(z,!1).a,0,0)
""+u
m.k(0)},
cP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fc(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bh()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.d5(w.a,w.bd())}y=this.Q
y.ac(0)
for(v=a.cy,u=new H.a8(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.N(0,u.d)
t=this.d2()
if(t.length!==0)P.ap("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b6(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cU()
u=a.Q
r=a.z
if(s)J.eA(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eP(q,y,v,u,0,r)
else J.eO(q,y,v,u,0)}else{u=z.a
if(r>1)J.eN(u,y,0,v,r)
else J.eM(u,y,0,v)}if(s)J.eR(z.a)},
a8:function(a,b){return this.cP(a,b,null)},
p:{
bl:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.R(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eI(b.a)
u=G.dO(b.a,35633,y)
J.cm(b.a,v,u)
t=G.dO(b.a,35632,x)
J.cm(b.a,v,t)
if(w.length>0)J.f8(b.a,v,w,35980)
J.f2(b.a,v)
if(J.f1(b.a,v,35714)!==!0)H.P(J.f0(b.a,v))
z=new G.hz(b,c,d,v,P.bY(c.c,null),P.B(),P.B(),z,null,a,!1,!0)
z.cX(a,b,c,d)
return z}}},
t:{"^":"c;a,b,c",
bc:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
c2:{"^":"c;a,b,c,d,e,f,r,x",
az:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.F)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.c.aw(y)},
a7:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)y.push(a[x])
C.c.aw(y)},
W:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.aw(z)},
cZ:function(a,b){this.b=this.ak(!0,a,b)},
be:function(a){return this.cZ(a,null)},
cY:function(a,b){this.b=this.ak(!1,a,b)},
aB:function(a){return this.cY(a,null)},
ak:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=$.$get$V().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.J(w,b)
if(a)w.push("}")
return C.c.ae(w,"\n")},
p:{
aX:function(a){return new G.c2(a,null,[],[],[],[],0,P.B())}}},
hK:{"^":"bj;"},
hZ:{"^":"c;a,b,c,d,e,f,r"},
c5:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
i1:{"^":"c5;f,r,x,a,b,c,d,e",
d1:function(a,b,c,d,e,f){var z,y,x,w
z=this.d
y=this.c
J.b5(z.a,y,this.b)
J.f6(z.a,3553,1,this.x,this.f,this.r)
x=this.e
w=x.e
if(w!==1)J.f5(z.a,y,34046,w)
w=x.r
J.b7(z.a,y,10240,w)
w=x.f
J.b7(z.a,y,10241,w)
if(x.b){J.b7(z.a,y,10242,33071)
J.b7(z.a,y,10243,33071)}x.c
J.f_(z.a)
J.b5(z.a,y,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.b(this.f)+" X "+H.b(this.r)+"]"},
p:{
dJ:function(a,b,c,d,e,f){var z=new G.i1(c,d,e,b,J.eJ(a.a),3553,a,f)
z.d1(a,b,c,d,e,f)
return z}}}}],["","",,R,{"^":"",hM:{"^":"c;",
d_:function(a,b,c){var z,y,x
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
for(w=0;w<c;++w){v=W.it("span",null)
y=J.cu(v)
J.d(y).sU(y,"1px")
C.n.sT(y,""+d+"px")
C.n.sdY(y,"left")
x=C.n.bj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hN:{"^":"hM;e,f,a,b,c,d",
d4:function(a,b){var z,y,x,w,v;++this.e
if(J.aO(J.ex(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ej(z,2)+" fps"
y=this.c;(y&&C.C).cz(y,b)
x=C.b.S(30*C.t.dN(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cu(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d3:function(a){return this.d4(a,"")}}}],["","",,V,{"^":"",
kk:function(a,b){var z,y,x,w,v,u
z=[]
for(y=b*b,x=0,w=0;w<a;++w){v=0.39894*Math.exp(-0.5*w*w/y)/b
z.push(v)
x+=v
if(w>0)x+=v}for(u="",w=0,y="";w<a;++w,u=", "){y+=u
if(w>=z.length)return H.e(z,w)
y+=H.b(z[w]/x)}return"float kernel["+a+"] = float["+a+"]("+(y.charCodeAt(0)==0?y:y)+");"},
fu:function(a,b){var z,y
z=V.kk(a,b)
y=new G.c2("BloomPassF",null,[],[],[],[],0,P.B())
y.W(["vTexUV"])
y.a7(["uDirection","uTexture"])
y.b=y.ak(!1,[z,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"],null)
return y}}],["","",,B,{"^":"",
hv:function(a){var z,y,x,w,v,u,t,s,r,q
z=-1*a
y=new T.p(new Float32Array(3))
y.M(z,z,0)
x=new T.p(new Float32Array(3))
x.M(a,z,0)
w=new T.p(new Float32Array(3))
w.M(a,a,0)
v=new T.p(new Float32Array(3))
v.M(z,a,0)
z=new T.C(new Float32Array(2))
z.R(0,0)
u=new T.C(new Float32Array(2))
u.R(1,0)
t=new T.C(new Float32Array(2))
t.R(1,1)
s=new T.C(new Float32Array(2))
s.R(0,1)
r=new T.p(new Float32Array(3))
r.M(0,0,1)
q=new G.d2(!1,[],[],[],P.B())
q.aA("aTexUV")
q.cN([y,x,w,v])
q.cL("aTexUV",[z,u,t,s])
q.aA("aNormal")
q.cM("aNormal",[r,r,r,r])
return q},
hF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p
z=h+1
y=g+1
x=B.i_(B.hl(new B.hG(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.d2(!1,[],[],w,P.B())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.F)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.co(s[r]))}v.cS(z,y,!1)
v.cT(z,y)
v.aA("aNormal")
for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.F)(x),++t){s=x[t]
for(r=0;q=s.length,r<q;r+=2){p=r+1
if(p>=q)return H.e(s,p)
p=s[p]
u.h(0,"aNormal").push(J.co(p))}}return v},
i_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.p(y)
w=new Float32Array(3)
v=new T.p(w)
u=new Float32Array(3)
t=new T.p(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.e(a,o)
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
u[2]=k*j}v.a1(0)
t.a1(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.u(p)
x.ao(v,g)
x.ao(t,f)
q=new T.p(new Float32Array(3))
q.u(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.ao(v,g)
x.ao(t,f)
x.a1(0)
q=new T.p(new Float32Array(3))
q.u(x)
m.push(q)}}return z},
hl:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.p(new Float32Array(3))
x=new T.p(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.b9(0,y)
t=new T.p(new Float32Array(3))
t.u(y)
z.push(t)
t=new T.p(new Float32Array(3))
t.u(x)
z.push(t)}return z},
hG:{"^":"i:17;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sl(0,y*v)
b.sm(0,y*u)
b.sC(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",fX:{"^":"c;a,b,c",
cV:function(a){var z
a=document
z=W.bg
W.aj(a,"keydown",new D.fZ(this),!1,z)
W.aj(a,"keyup",new D.h_(this),!1,z)},
p:{
fY:function(a){var z=P.D
z=new D.fX(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z))
z.cV(a)
return z}}},fZ:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.N(0,J.cw(a))
z.b.N(0,a.which)}},h_:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.c7(0,J.cw(a))
z.c.N(0,a.which)}},h8:{"^":"c;a,b,c,d,e,f,r,x",
cW:function(a){var z,y
if(a==null)a=document
z=J.d(a)
y=z.gaT(a)
W.aj(y.a,y.b,new D.ha(this),!1,H.A(y,0))
y=z.gaS(a)
W.aj(y.a,y.b,new D.hb(this),!1,H.A(y,0))
y=z.gaU(a)
W.aj(y.a,y.b,new D.hc(this),!1,H.A(y,0))
z=z.gaV(a)
W.aj(z.a,z.b,new D.hd(this),!1,H.A(z,0))},
p:{
h9:function(a){var z=P.D
z=new D.h8(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),0,0,0,0,0)
z.cW(a)
return z}}},ha:{"^":"i:5;a",
$1:function(a){var z,y
z=J.d(a)
z.at(a)
y=this.a
y.r=z.gc6(a).a
y.x=z.gc6(a).b
y.d=a.movementX
y.e=a.movementY}},hb:{"^":"i:5;a",
$1:function(a){var z=J.d(a)
z.at(a)
P.ap("BUTTON "+H.b(z.gbJ(a)))
z=this.a
z.a.N(0,a.button)
z.b.N(0,a.button)}},hc:{"^":"i:5;a",
$1:function(a){var z,y
z=J.d(a)
z.at(a)
y=this.a
y.a.c7(0,z.gbJ(a))
y.c.N(0,a.button)}},hd:{"^":"i:18;a",
$1:function(a){var z=J.d(a)
z.at(a)
this.a.f=z.gdU(a)}},hk:{"^":"fm;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
by:function(a){var z,y
z=C.P.dZ(a,0,new A.k6())
if(typeof z!=="number")return H.K(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k6:{"^":"i:19;",
$2:function(a,b){var z,y
z=J.ar(a,J.a0(b))
if(typeof z!=="number")return H.K(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",S:{"^":"c;bn:a<",
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
k:function(a){return"[0] "+this.ag(0).k(0)+"\n[1] "+this.ag(1).k(0)+"\n[2] "+this.ag(2).k(0)+"\n[3] "+this.ag(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.e(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
ag:function(a){var z,y,x
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
return new T.T(z)},
K:function(a){var z=new T.S(new Float32Array(16))
z.u(this)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.S(z)
y.u(this)
x=b.gbn()
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
G:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.S(z)
y.u(this)
x=b.gbn()
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
a4:function(){var z=this.a
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
e7:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},C:{"^":"c;bv:a<",
R:function(a,b){var z=this.a
z[0]=a
z[1]=b},
u:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.C(z)
y.u(this)
x=b.gbv()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.C(z)
y.u(this)
x=b.gbv()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return y},
a2:function(a,b){var z=new T.C(new Float32Array(2))
z.u(this)
z.av(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.e(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
av:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
K:function(a){var z=new T.C(new Float32Array(2))
z.u(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},p:{"^":"c;bw:a<",
M:function(a,b,c){var z=this.a
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
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
G:function(a,b){var z=new T.p(new Float32Array(3))
z.u(this)
z.b9(0,b)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.p(z)
y.u(this)
x=b.gbw()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
a2:function(a,b){return this.cw(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.e(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
a1:function(a){var z,y,x,w,v,u
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
aQ:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bT:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.M(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ao:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
b9:function(a,b){var z,y
z=b.gbw()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
cw:function(a){var z,y
z=new Float32Array(3)
y=new T.p(z)
y.u(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
K:function(a){var z=new T.p(new Float32Array(3))
z.u(this)
return z},
sl:function(a,b){this.a[0]=b
return b},
sm:function(a,b){this.a[1]=b
return b},
sC:function(a,b){this.a[2]=b
return b},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
p:{
i5:function(a,b,c){var z=new T.p(new Float32Array(3))
z.M(a,b,c)
return z}}},T:{"^":"c;bx:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.T){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.by(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.T(z)
y.u(this)
x=b.gbx()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.T(z)
y.u(this)
x=b.gbx()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
return y},
a2:function(a,b){var z=new T.T(new Float32Array(4))
z.u(this)
z.av(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=4)return H.e(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
av:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
K:function(a){var z=new T.T(new Float32Array(4))
z.u(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
gaf:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=document
x=new R.hN(0,0,null,null,null,null)
x.d_(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fo(null,w)
y=J.eY(w,"webgl2",P.d9(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.P(P.cX('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.eZ(y))
if($.ek>0)P.ap("I: "+u)
J.eF(y,0,0,0,1)
J.aQ(y,2929)
J.aQ(y,2884)
y=new Float32Array(3)
u=D.fY(null)
t=D.h9(w)
s=new T.S(new Float32Array(16))
s.a4()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hk(165,0,0,0,new T.p(y),-0.02,u,t,s,new T.p(r),new T.p(q),new T.p(p),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.S(new Float32Array(16))
y.a4()
u=new T.S(new Float32Array(16))
u.a4()
n=new G.hm(o,50,1,0.1,1000,y,u,new T.S(new Float32Array(16)),P.B(),"perspective",!1,!0)
n.bf()
m=w.clientWidth
l=w.clientHeight
w.width=m
w.height=l
n.cO(m,l)
k=G.bT(v,m,l)
y=$.$get$et()
u=new G.c2("BlackPerlinNoiseColor F",null,[],[],[],[],0,P.B())
u.W(["vNormal"])
u.a7(["uTime","uTransformationMatrix"])
u.b=u.ak(!1,["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],null)
j=G.bl("perlin",v,y,u)
u=P.B()
u.i(0,"cDepthTest",!0)
u.i(0,"cDepthWrite",!0)
u.i(0,"cBlendEquation",$.$get$cG())
u.i(0,"cStencilFunc",$.$get$dm())
y=new T.S(new Float32Array(16))
y.a4()
u.i(0,"uTransformationMatrix",y)
y=new T.S(new Float32Array(16))
y.a4()
u.i(0,"uModelMatrix",y)
i=G.d3("torusknot",j,B.hF(!0,!0,1,2,3,20,128,16,4,!1))
if(typeof m!=="number")return m.ay()
y=C.b.S(m,2)
if(typeof l!=="number")return l.ay()
t=C.b.S(l,2)
s=G.bT(v,y,t)
r=G.bT(v,y,t)
h=new Q.fk(6,m,l,y,t,k,s,r,new G.d0(v,null,null,null,null),null,null,null,null,null,null,null,null)
h.z=G.bl("highpass",v,$.$get$eh(),$.$get$eq())
t=$.$get$ew()
h.Q=G.bl("bloom",v,t,V.fu(6,6))
t=G.bl("bloom",v,t,$.$get$ec())
h.ch=t
h.dy=G.d3("quad",t,B.hv(1))
t=P.B()
y=new T.C(new Float32Array(2))
y.R(0.65,0.66)
t.i(0,"uRange",y)
t.i(0,"uColorAlpha",new T.T(new Float32Array(4)))
y=k.c
t.i(0,"uTexture",y)
h.cx=new G.aF(t,"uniformsHighPass",!1,!0)
t=P.B()
q=new T.C(new Float32Array(2))
q.R(1.5,0)
t.i(0,"uDirection",q)
r=r.c
t.i(0,"uTexture",r)
h.cy=new G.aF(t,"Bloom Horizontal",!1,!0)
t=P.B()
q=new T.C(new Float32Array(2))
q.R(0,1.5)
t.i(0,"uDirection",q)
t.i(0,"uTexture",s.c)
h.db=new G.aF(t,"Bloom Vertical",!1,!0)
t=P.B()
t.i(0,"uTexture",y)
t.i(0,"uScale",0.6)
t.i(0,"uColor",$.$get$cL())
t.i(0,"uTexture2",r)
h.dx=new G.aF(t,"uniformApply",!1,!0)
z.a=0
new Q.ki(z,o,new G.h4(u,"mat",!1,!0),k,m,l,j,i,n,h,x).$1(0)},
fk:{"^":"c;a,af:b>,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy"},
ki:{"^":"i:20;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
z=this.a
y=J.aL(b3)
y.G(b3,z.a)
z.a=y.n(b3,0)
x=this.b
x.go+=0.01
w=x.r1
v=w.a
if(v.v(0,0)||v.v(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.ai()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.ai()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.v(0,37))x.go+=0.03
else if(u.v(0,39))x.go-=0.03
if(u.v(0,38))x.id+=0.03
else if(u.v(0,40))x.id-=0.03
if(u.v(0,33))x.fy*=0.99
else if(u.v(0,34))x.fy*=1.01
if(u.v(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.ai()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.dO(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
q=Math.cos(s)
u=Math.sin(u)
s=Math.sin(s)
p=x.d.a
p[12]=r*q
p[13]=t*u
p[14]=r*s
s=x.k2
u=s.a
p[12]=p[12]+u[0]
p[13]=p[13]+u[1]
p[14]=p[14]+u[2]
o=p[12]
n=p[13]
m=p[14]
l=new T.p(new Float32Array(3))
l.M(0,1,0)
u=x.e
t=u.a
t[0]=p[12]
t[1]=p[13]
t[2]=p[14]
k=u.G(0,s)
k.a1(0)
j=l.bT(k)
j.a1(0)
i=k.bT(j)
i.a1(0)
s=j.aQ(u)
t=i.aQ(u)
u=k.aQ(u)
q=j.a
h=q[0]
g=i.a
f=g[0]
e=k.a
d=e[0]
c=q[1]
b=g[1]
a=e[1]
q=q[2]
g=g[2]
e=e[2]
p[15]=1
p[14]=-u
p[13]=-t
p[12]=-s
p[11]=0
p[10]=e
p[9]=g
p[8]=q
p[7]=0
p[6]=a
p[5]=b
p[4]=c
p[3]=0
p[2]=d
p[1]=f
p[0]=h
p[12]=o
p[13]=n
p[14]=m
h=x.f.a
h[0]=p[2]
h[1]=p[6]
h[2]=p[10]
x=-x.k1
f=h[0]
d=h[1]
c=h[2]
a0=Math.sqrt(f*f+d*d+c*c)
o=h[0]/a0
n=h[1]/a0
m=h[2]/a0
a1=Math.cos(x)
a2=Math.sin(x)
a3=1-a1
a4=o*o*a3+a1
x=m*a2
a5=o*n*a3-x
h=n*a2
a6=o*m*a3+h
a7=n*o*a3+x
a8=n*n*a3+a1
x=o*a2
a9=n*m*a3-x
b0=m*o*a3-h
b1=m*n*a3+x
b2=m*m*a3+a1
x=p[0]
h=p[4]
c=p[8]
d=p[1]
f=p[5]
b=p[9]
a=p[2]
q=p[6]
g=p[10]
e=p[3]
s=p[7]
t=p[11]
p[0]=x*a4+h*a7+c*b0
p[1]=d*a4+f*a7+b*b0
p[2]=a*a4+q*a7+g*b0
p[3]=e*a4+s*a7+t*b0
p[4]=x*a5+h*a8+c*b1
p[5]=d*a5+f*a8+b*b1
p[6]=a*a5+q*a8+g*b1
p[7]=e*a5+s*a8+t*b1
p[8]=x*a6+h*a9+c*b2
p[9]=d*a6+f*a9+b*b2
p[10]=a*a6+q*a9+g*b2
p[11]=e*a6+s*a9+t*b2
v.c.ac(0)
v.b.ac(0)
w.e=0
w.d=0
w.f=0
w.c.ac(0)
w.b.ac(0)
w=this.c
w.d.i(0,"uTime",y.a2(b3,1000))
this.d.a5(17664,0,0,this.e,this.f)
this.r.a8(this.x,[this.y,w])
w=this.z
y=J.cv($.$get$el())
if(typeof y!=="number")return y.ai()
v=J.cv($.$get$ej())
if(typeof v!=="number")return v.ai()
t=w.x
s=w.d
e=w.e
t.a5(17664,0,0,s,e)
p=w.cx
x=new T.C(new Float32Array(2))
x.R(y,y+0.01)
p.d.i(0,"uRange",x)
w.z.a8(w.dy,[w.cx])
w.r.a5(17664,0,0,s,e)
w.Q.a8(w.dy,[w.cy])
t.a5(17664,0,0,s,e)
w.Q.a8(w.dy,[w.db])
w.y.a5(17664,0,0,w.b,w.c)
w.dx.d.i(0,"uScale",v)
w.ch.a8(w.dy,[w.dx])
C.a6.gdG(window).cb(this)
this.Q.d3(z.a)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.d4.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.d6.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.k2=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.a6=function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.b1=function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.aL=function(a){if(typeof a=="number")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b_.prototype
return a}
J.k3=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b_.prototype
return a}
J.em=function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b_.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.ar=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k2(a).n(a,b)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).D(a,b)}
J.M=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aL(a).ah(a,b)}
J.aO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aL(a).a3(a,b)}
J.ex=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aL(a).G(a,b)}
J.aP=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kg(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a6(a).h(a,b)}
J.ey=function(a,b,c,d){return J.d(a).dq(a,b,c,d)}
J.cl=function(a,b){return J.d(a).by(a,b)}
J.ez=function(a,b,c,d){return J.d(a).bz(a,b,c,d)}
J.cm=function(a,b,c){return J.d(a).bB(a,b,c)}
J.eA=function(a,b){return J.d(a).dI(a,b)}
J.bD=function(a,b,c){return J.d(a).bC(a,b,c)}
J.bE=function(a,b,c){return J.d(a).bE(a,b,c)}
J.b5=function(a,b,c){return J.d(a).bF(a,b,c)}
J.b6=function(a,b){return J.d(a).dL(a,b)}
J.eB=function(a,b){return J.d(a).bG(a,b)}
J.eC=function(a,b,c){return J.d(a).bH(a,b,c)}
J.cn=function(a,b,c,d){return J.d(a).bI(a,b,c,d)}
J.eD=function(a,b){return J.d(a).bK(a,b)}
J.eE=function(a,b){return J.b1(a).bL(a,b)}
J.eF=function(a,b,c,d,e){return J.d(a).bM(a,b,c,d,e)}
J.co=function(a){return J.d(a).K(a)}
J.cp=function(a,b){return J.em(a).dP(a,b)}
J.eG=function(a,b){return J.k3(a).O(a,b)}
J.bF=function(a,b,c){return J.a6(a).dR(a,b,c)}
J.bG=function(a){return J.d(a).bO(a)}
J.eH=function(a){return J.d(a).bP(a)}
J.eI=function(a){return J.d(a).bQ(a)}
J.eJ=function(a){return J.d(a).bS(a)}
J.eK=function(a){return J.d(a).dT(a)}
J.eL=function(a,b){return J.d(a).bU(a,b)}
J.bH=function(a,b){return J.d(a).bV(a,b)}
J.eM=function(a,b,c,d){return J.d(a).bW(a,b,c,d)}
J.eN=function(a,b,c,d,e){return J.d(a).dV(a,b,c,d,e)}
J.eO=function(a,b,c,d,e){return J.d(a).bX(a,b,c,d,e)}
J.eP=function(a,b,c,d,e,f){return J.d(a).dW(a,b,c,d,e,f)}
J.cq=function(a,b){return J.b1(a).q(a,b)}
J.aQ=function(a,b){return J.d(a).bY(a,b)}
J.eQ=function(a,b){return J.d(a).bZ(a,b)}
J.eR=function(a){return J.d(a).dX(a)}
J.cr=function(a,b){return J.b1(a).w(a,b)}
J.cs=function(a,b,c,d,e,f){return J.d(a).c0(a,b,c,d,e,f)}
J.ct=function(a){return J.d(a).gdH(a)}
J.as=function(a){return J.d(a).gI(a)}
J.a0=function(a){return J.o(a).gA(a)}
J.aR=function(a){return J.b1(a).gF(a)}
J.a1=function(a){return J.a6(a).gj(a)}
J.eS=function(a){return J.d(a).ge8(a)}
J.eT=function(a){return J.d(a).gaW(a)}
J.cu=function(a){return J.d(a).gV(a)}
J.eU=function(a){return J.d(a).gee(a)}
J.eV=function(a){return J.d(a).gce(a)}
J.cv=function(a){return J.d(a).gel(a)}
J.eW=function(a){return J.d(a).gaf(a)}
J.cw=function(a){return J.d(a).geo(a)}
J.bI=function(a){return J.d(a).gl(a)}
J.bJ=function(a){return J.d(a).gm(a)}
J.cx=function(a){return J.d(a).gC(a)}
J.eX=function(a){return J.d(a).aZ(a)}
J.eY=function(a,b,c){return J.d(a).cv(a,b,c)}
J.eZ=function(a){return J.d(a).au(a)}
J.f_=function(a){return J.d(a).b_(a)}
J.f0=function(a,b){return J.d(a).b0(a,b)}
J.f1=function(a,b,c){return J.d(a).b1(a,b,c)}
J.cy=function(a,b,c){return J.d(a).b4(a,b,c)}
J.f2=function(a,b){return J.d(a).c4(a,b)}
J.cz=function(a){return J.b1(a).ea(a)}
J.f3=function(a,b){return J.d(a).saq(a,b)}
J.f4=function(a,b,c,d){return J.d(a).b8(a,b,c,d)}
J.f5=function(a,b,c,d){return J.d(a).c9(a,b,c,d)}
J.b7=function(a,b,c,d){return J.d(a).ca(a,b,c,d)}
J.f6=function(a,b,c,d,e,f){return J.d(a).ef(a,b,c,d,e,f)}
J.cA=function(a){return J.aL(a).eg(a)}
J.f7=function(a){return J.em(a).ei(a)}
J.at=function(a){return J.o(a).k(a)}
J.f8=function(a,b,c,d){return J.d(a).ek(a,b,c,d)}
J.f9=function(a,b,c){return J.d(a).cf(a,b,c)}
J.fa=function(a,b,c){return J.d(a).cg(a,b,c)}
J.bK=function(a,b,c){return J.d(a).ci(a,b,c)}
J.fb=function(a,b,c){return J.d(a).cj(a,b,c)}
J.cB=function(a,b,c){return J.d(a).ck(a,b,c)}
J.cC=function(a,b,c){return J.d(a).cl(a,b,c)}
J.cD=function(a,b,c){return J.d(a).cm(a,b,c)}
J.cE=function(a,b,c,d){return J.d(a).cn(a,b,c,d)}
J.cF=function(a,b,c,d){return J.d(a).co(a,b,c,d)}
J.fc=function(a,b){return J.d(a).cq(a,b)}
J.fd=function(a,b,c){return J.d(a).em(a,b,c)}
J.fe=function(a,b,c,d,e,f,g){return J.d(a).cr(a,b,c,d,e,f,g)}
J.ff=function(a,b,c,d,e){return J.d(a).ct(a,b,c,d,e)}
I.ao=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bL.prototype
C.n=W.fv.prototype
C.C=W.fB.prototype
C.D=J.f.prototype
C.c=J.ax.prototype
C.t=J.d4.prototype
C.b=J.d5.prototype
C.E=J.d6.prototype
C.a=J.az.prototype
C.i=J.aA.prototype
C.L=J.aB.prototype
C.P=H.he.prototype
C.Q=W.hg.prototype
C.w=J.hn.prototype
C.B=W.hX.prototype
C.q=J.b_.prototype
C.a6=W.i7.prototype
C.f=new P.j2()
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
C.u=function(hooks) { return hooks; }

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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.y(I.ao(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.N=I.ao(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=I.ao([])
C.o=H.y(I.ao(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.y(I.ao(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.R=new G.t("vec3","vertex btangents",0)
C.d=new G.t("vec3","",0)
C.S=new G.t("vec4","delta from light",0)
C.m=new G.t("","",0)
C.x=new G.t("vec3","vertex coordinates",0)
C.T=new G.t("vec3","vertex binormals",0)
C.y=new G.t("vec4","for wireframe",0)
C.U=new G.t("vec4","per vertex color",0)
C.V=new G.t("float","for normal maps",0)
C.j=new G.t("mat4","",0)
C.X=new G.t("mat4","",4)
C.W=new G.t("mat4","",128)
C.e=new G.t("float","",0)
C.Y=new G.t("float","",4)
C.Z=new G.t("float","depth for shadowmaps",0)
C.h=new G.t("sampler2D","",0)
C.a_=new G.t("float","for bump maps",0)
C.a0=new G.t("vec2","texture uvs",0)
C.a1=new G.t("float","time since program start in sec",0)
C.k=new G.t("vec2","",0)
C.a2=new G.t("samplerCube","",0)
C.l=new G.t("vec4","",0)
C.a3=new G.t("vec3","vertex normals",0)
C.a4=new G.t("sampler2DShadow","",0)
C.z=new G.t("vec3","per vertex color",0)
C.A=new G.t("mat3","",0)
C.a5=new G.t("vec3","vertex tangents",0)
$.X=0
$.au=null
$.cH=null
$.eo=null
$.eb=null
$.eu=null
$.bx=null
$.bz=null
$.ci=null
$.ak=null
$.aI=null
$.aJ=null
$.cb=!1
$.v=C.f
$.a2=null
$.bQ=null
$.cV=null
$.cU=null
$.cS=null
$.cR=null
$.cQ=null
$.cP=null
$.ek=0
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
I.$lazy(y,x,w)}})(["cN","$get$cN",function(){return H.en("_$dart_dartClosure")},"bV","$get$bV",function(){return H.en("_$dart_js")},"dx","$get$dx",function(){return H.Z(H.bt({
toString:function(){return"$receiver$"}}))},"dy","$get$dy",function(){return H.Z(H.bt({$method$:null,
toString:function(){return"$receiver$"}}))},"dz","$get$dz",function(){return H.Z(H.bt(null))},"dA","$get$dA",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dE","$get$dE",function(){return H.Z(H.bt(void 0))},"dF","$get$dF",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dC","$get$dC",function(){return H.Z(H.dD(null))},"dB","$get$dB",function(){return H.Z(function(){try{null.$method$}catch(z){return z.message}}())},"dH","$get$dH",function(){return H.Z(H.dD(void 0))},"dG","$get$dG",function(){return H.Z(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c6","$get$c6",function(){return P.ib()},"d1","$get$d1",function(){var z,y
z=P.aV
y=new P.ac(0,P.i9(),null,[z])
y.d7(null,z)
return y},"aK","$get$aK",function(){return[]},"cM","$get$cM",function(){return{}},"dS","$get$dS",function(){return P.bY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c8","$get$c8",function(){return P.B()},"dm","$get$dm",function(){return new G.dv(1281,0,4294967295)},"cG","$get$cG",function(){return new G.du(1281,1281,1281)},"V","$get$V",function(){return P.d9(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.U,"aPosition",C.x,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.S,"vCenter",C.y,"vDepth",C.Z,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a4,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a2,"uAnimationTable",C.h,"uTime",C.a1,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.e,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"dt","$get$dt",function(){var z=new G.hZ(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"cL","$get$cL",function(){return T.i5(1,1,1)},"ew","$get$ew",function(){var z=G.aX("uv-passthru")
z.az(["aPosition","aTexUV"])
z.W(["vTexUV"])
z.be(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"ec","$get$ec",function(){var z=G.aX("BloomPassF")
z.W(["vTexUV"])
z.a7(["uTexture","uTexture2","uScale","uColor"])
z.aB(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"])
return z},"eh","$get$eh",function(){var z=G.aX("uv-passthru")
z.az(["aPosition","aTexUV"])
z.W(["vTexUV"])
z.be(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"eq","$get$eq",function(){var z=G.aX("LuminosityHighPassF")
z.W(["vTexUV"])
z.a7(["uRange","uColorAlpha","uTexture"])
z.aB(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return z},"et","$get$et",function(){var z=G.aX("PerlinNoiseV")
z.az(["aPosition"])
z.W(["vNormal"])
z.a7(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
z.aB(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return z},"el","$get$el",function(){return W.eg().querySelector("#luminance")},"ej","$get$ej",function(){return W.eg().querySelector("#intensity")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.J]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.D]},{func:1,args:[W.bg]},{func:1,ret:P.cd,args:[W.ah,P.l,P.l,W.c7]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aE]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aE]},{func:1,v:true,args:[W.r,W.r]},{func:1,v:true,args:[P.ae,T.p]},{func:1,args:[W.aG]},{func:1,args:[P.D,P.c]},{func:1,v:true,args:[P.aM]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.ko(d||a)
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
Isolate.ao=a.ao
Isolate.am=a.am
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.er,[])
else Q.er([])})})()
//# sourceMappingURL=bloom.dart.js.map
