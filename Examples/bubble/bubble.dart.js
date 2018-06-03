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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.co(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",lT:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
cr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b8:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cq==null){H.kw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dQ("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c4()]
if(v!=null)return v
v=H.kA(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c4(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
f:{"^":"c;",
E:function(a,b){return a===b},
gA:function(a){return H.aL(a)},
k:["cJ",function(a){return"Instance of '"+H.aM(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h4:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iscn:1},
h5:{"^":"f;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isb1:1},
c5:{"^":"f;",
gA:function(a){return 0},
k:["cL",function(a){return String(a)}]},
hB:{"^":"c5;"},
b5:{"^":"c5;"},
aK:{"^":"c5;",
k:function(a){var z=a[$.$get$cU()]
return z==null?this.cL(a):J.aB(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aG:{"^":"f;$ti",
L:function(a,b){var z,y
if(!!a.fixed$length)H.X(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.H)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.K(a))}},
af:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
ba:function(a,b){return H.dw(a,b,null,H.B(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cD:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.X(P.p("setRange"))
P.hJ(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isi){x=e
w=d}else{w=y.ba(d,e).em(0,!1)
x=0}y=J.ae(w)
if(x+z>y.gi(w))throw H.a(H.h1())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ah:function(a,b,c,d){return this.cD(a,b,c,d,0)},
bG:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.K(a))}return!1},
cE:function(a,b){if(!!a.immutable$list)H.X(P.p("sort"))
H.hV(a,J.k4())},
au:function(a){return this.cE(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
k:function(a){return P.c3(a,"[","]")},
gK:function(a){return new J.fm(a,a.length,0,null,[H.B(a,0)])},
gA:function(a){return H.aL(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.X(P.p("set length"))
if(b<0)throw H.a(P.ap(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ad(a,b))
if(b>=a.length||b<0)throw H.a(H.ad(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.X(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ad(a,b))
if(b>=a.length||b<0)throw H.a(H.ad(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.x([],[H.B(a,0)])
this.si(y,z)
this.ah(y,0,a.length,a)
this.ah(y,a.length,z,b)
return y},
$ism:1,
$asm:I.au,
$isi:1,
p:{
aH:function(a){a.fixed$length=Array
return a},
lR:[function(a,b){return J.eK(a,b)},"$2","k4",8,0,22]}},
lS:{"^":"aG;$ti"},
fm:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.H(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aI:{"^":"f;",
V:function(a,b){var z
if(typeof b!=="number")throw H.a(H.W(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gao(b)
if(this.gao(a)===z)return 0
if(this.gao(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gao:function(a){return a===0?1/a<0:a<0},
el:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dP:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dQ:function(a,b,c){if(this.V(b,c)>0)throw H.a(H.W(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
eo:function(a,b){var z
if(b>20)throw H.a(P.ap(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gao(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a-b},
cN:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bA(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
by:function(a,b){var z
if(a>0)z=this.dB(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dB:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a<b},
ag:function(a,b){if(typeof b!=="number")throw H.a(H.W(b))
return a>b},
$isaS:1,
$isaU:1},
db:{"^":"aI;",$isD:1},
da:{"^":"aI;"},
aJ:{"^":"f;",
dR:function(a,b){if(b>=a.length)H.X(H.ad(a,b))
return a.charCodeAt(b)},
bq:function(a,b){if(b>=a.length)throw H.a(H.ad(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.fl(b,null,null))
return a+b},
cG:function(a,b,c){var z
if(c>a.length)throw H.a(P.ap(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cF:function(a,b){return this.cG(a,b,0)},
bc:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.X(H.W(c))
if(b<0)throw H.a(P.bq(b,null,null))
if(typeof c!=="number")return H.C(c)
if(b>c)throw H.a(P.bq(b,null,null))
if(c>a.length)throw H.a(P.bq(c,null,null))
return a.substring(b,c)},
cH:function(a,b){return this.bc(a,b,null)},
en:function(a){return a.toLowerCase()},
dS:function(a,b,c){if(c>a.length)throw H.a(P.ap(c,0,a.length,null,null))
return H.kH(a,b,c)},
V:function(a,b){var z
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
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.ad(a,b))
return a[b]},
$ism:1,
$asm:I.au,
$isl:1}}],["","",,H,{"^":"",
d9:function(){return new P.bu("No element")},
h2:function(){return new P.bu("Too many elements")},
h1:function(){return new P.bu("Too few elements")},
hV:function(a,b){H.b3(a,0,J.a5(a)-1,b)},
b3:function(a,b,c,d){if(c-b<=32)H.hU(a,b,c,d)
else H.hT(a,b,c,d)},
hU:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ae(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a6(c-b+1,6)
y=b+z
x=c-z
w=C.b.a6(b+c,2)
v=w-z
u=w+z
t=J.ae(a)
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
if(J.J(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.E(i,0))continue
if(h.a8(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aT(i)
if(h.ag(i,0)){--l
continue}else{g=l-1
if(h.a8(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aW(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aW(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b3(a,b,m-2,d)
H.b3(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.J(d.$2(t.h(a,m),r),0);)++m
for(;J.J(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.J(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.J(d.$2(j,p),0))for(;!0;)if(J.J(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aW(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b3(a,m,l,d)}else H.b3(a,m,l,d)},
bW:{"^":"bl;$ti"},
bn:{"^":"bW;$ti",
gK:function(a){return new H.dg(this,this.gi(this),0,null,[H.b9(this,"bn",0)])},
w:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.K(this))}},
aZ:function(a,b){return this.cK(0,b)}},
i9:{"^":"bn;a,b,c,$ti",
d2:function(a,b,c,d){},
gdl:function(){var z=J.a5(this.a)
return z},
gdC:function(){var z,y
z=J.a5(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a5(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdC()+b
if(b>=0){y=this.gdl()
if(typeof y!=="number")return H.C(y)
y=z>=y}else y=!0
if(y)throw H.a(P.v(b,this,"index",null,null))
return J.cy(this.a,z)},
em:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ae(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.x(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.K(this))}return t},
p:{
dw:function(a,b,c,d){var z=new H.i9(a,b,c,[d])
z.d2(a,b,c,d)
return z}}},
dg:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.ae(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.K(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hg:{"^":"bn;a,b,$ti",
gi:function(a){return J.a5(this.a)},
q:function(a,b){return this.b.$1(J.cy(this.a,b))},
$asbW:function(a,b){return[b]},
$asbn:function(a,b){return[b]},
$asbl:function(a,b){return[b]}},
dS:{"^":"bl;a,b,$ti",
gK:function(a){return new H.ij(J.aZ(this.a),this.b,this.$ti)}},
ij:{"^":"h3;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gB(z))===!0)return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
bj:{"^":"c;$ti"}}],["","",,H,{"^":"",
ko:function(a){return init.types[a]},
kz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$iso},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aB(a)
if(typeof z!=="string")throw H.a(H.W(a))
return z},
aL:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aM:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.n(a).$isb5){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bq(w,0)===36)w=C.i.cH(w,1)
r=H.bI(H.av(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
F:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hI:function(a){return a.b?H.F(a).getUTCFullYear()+0:H.F(a).getFullYear()+0},
hG:function(a){return a.b?H.F(a).getUTCMonth()+1:H.F(a).getMonth()+1},
hC:function(a){return a.b?H.F(a).getUTCDate()+0:H.F(a).getDate()+0},
hD:function(a){return a.b?H.F(a).getUTCHours()+0:H.F(a).getHours()+0},
hF:function(a){return a.b?H.F(a).getUTCMinutes()+0:H.F(a).getMinutes()+0},
hH:function(a){return a.b?H.F(a).getUTCSeconds()+0:H.F(a).getSeconds()+0},
hE:function(a){return a.b?H.F(a).getUTCMilliseconds()+0:H.F(a).getMilliseconds()+0},
C:function(a){throw H.a(H.W(a))},
d:function(a,b){if(a==null)J.a5(a)
throw H.a(H.ad(a,b))},
ad:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,"index",null)
z=J.a5(a)
if(!(b<0)){if(typeof z!=="number")return H.C(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.bq(b,"index",null)},
W:function(a){return new P.ag(!0,a,null,null)},
ab:function(a){if(typeof a!=="number")throw H.a(H.W(a))
return a},
a:function(a){var z
if(a==null)a=new P.cb()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eC})
z.name=""}else z.toString=H.eC
return z},
eC:function(){return J.aB(this.dartException)},
X:function(a){throw H.a(a)},
H:function(a){throw H.a(P.K(a))},
I:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.by(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c6(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dn(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dC()
u=$.$get$dD()
t=$.$get$dE()
s=$.$get$dF()
r=$.$get$dJ()
q=$.$get$dK()
p=$.$get$dH()
$.$get$dG()
o=$.$get$dM()
n=$.$get$dL()
m=v.R(y)
if(m!=null)return z.$1(H.c6(y,m))
else{m=u.R(y)
if(m!=null){m.method="call"
return z.$1(H.c6(y,m))}else{m=t.R(y)
if(m==null){m=s.R(y)
if(m==null){m=r.R(y)
if(m==null){m=q.R(y)
if(m==null){m=p.R(y)
if(m==null){m=s.R(y)
if(m==null){m=o.R(y)
if(m==null){m=n.R(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dn(y,m))}}return z.$1(new H.ig(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dt()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ag(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dt()
return a},
a3:function(a){var z
if(a==null)return new H.e8(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e8(a,null)},
kk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
ky:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d3("Unsupported number of arguments for wrapped closure"))},
ac:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ky)
a.$identity=z
return z},
fw:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isi){z.$reflectionInfo=c
x=H.hL(z).r}else x=c
w=d?Object.create(new H.hX().constructor.prototype):Object.create(new H.bT(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Y
$.Y=J.ay(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cS(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ko,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cQ:H.bU
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cS(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
ft:function(a,b,c,d){var z=H.bU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cS:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fv(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ft(y,!w,z,b)
if(y===0){w=$.Y
$.Y=J.ay(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aC
if(v==null){v=H.bf("self")
$.aC=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Y
$.Y=J.ay(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aC
if(v==null){v=H.bf("self")
$.aC=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fu:function(a,b,c,d){var z,y
z=H.bU
y=H.cQ
switch(b?-1:a){case 0:throw H.a(H.hP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fv:function(a,b){var z,y,x,w,v,u,t,s
z=$.aC
if(z==null){z=H.bf("self")
$.aC=z}y=$.cP
if(y==null){y=H.bf("receiver")
$.cP=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fu(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Y
$.Y=J.ay(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Y
$.Y=J.ay(y,1)
return new Function(z+H.b(y)+"}")()},
co:function(a,b,c,d,e,f){var z,y
z=J.aH(b)
y=!!J.n(c).$isi?J.aH(c):c
return H.fw(a,z,y,!!d,e,f)},
kE:function(a,b){var z=J.ae(b)
throw H.a(H.cR(a,z.bc(b,3,z.gi(b))))},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.kE(a,b)},
cp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
en:function(a,b){var z,y
if(a==null)return!1
z=H.cp(J.n(a))
if(z==null)y=!1
else y=H.es(z,b)
return y},
kc:function(a){var z
if(a instanceof H.h){z=H.cp(J.n(a))
if(z!=null)return H.cs(z,null)
return"Closure"}return H.aM(a)},
kI:function(a){throw H.a(new P.fA(a))},
eq:function(a){return init.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
av:function(a){if(a==null)return
return a.$ti},
nf:function(a,b,c){return H.aV(a["$as"+H.b(c)],H.av(b))},
ba:function(a,b,c,d){var z=H.aV(a["$as"+H.b(c)],H.av(b))
return z==null?null:z[d]},
b9:function(a,b,c){var z=H.aV(a["$as"+H.b(b)],H.av(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.av(a)
return z==null?null:z[b]},
cs:function(a,b){var z=H.ax(a,b)
return z},
ax:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bI(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ax(z,b)
return H.k3(a,b)}return"unknown-reified-type"},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ax(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ax(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kj(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ax(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bI:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cd("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return w?"":"<"+z.k(0)+">"},
kn:function(a){var z,y,x
if(a instanceof H.h){z=H.cp(J.n(a))
if(z!=null)return H.cs(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bI(a.$ti,0,null)
return y+x},
aV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b7:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.av(a)
y=J.n(a)
if(y[b]==null)return!1
return H.ek(H.aV(y[d],z),c)},
bc:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b7(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bI(c,0,null)
throw H.a(H.cR(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ek:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
nd:function(a,b,c){return a.apply(b,H.aV(J.n(b)["$as"+H.b(c)],H.av(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b1")return!0
if('func' in b)return H.es(a,b)
if('func' in a)return b.builtin$cls==="lK"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cs(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ek(H.aV(u,z),x)},
ej:function(a,b,c){var z,y,x,w,v
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
kd:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aH(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
es:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.ej(x,w,!1))return!1
if(!H.ej(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.kd(a.named,b.named)},
ne:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kA:function(a){var z,y,x,w,v,u
z=$.er.$1(a)
y=$.bF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ei.$2(a,z)
if(z!=null){y=$.bF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bJ(x)
$.bF[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bH[z]=x
return x}if(v==="-"){u=H.bJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eu(a,x)
if(v==="*")throw H.a(P.dQ(z))
if(init.leafTags[z]===true){u=H.bJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eu(a,x)},
eu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cr(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bJ:function(a){return J.cr(a,!1,null,!!a.$iso)},
kD:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bJ(z)
else return J.cr(z,c,null,null)},
kw:function(){if(!0===$.cq)return
$.cq=!0
H.kx()},
kx:function(){var z,y,x,w,v,u,t,s
$.bF=Object.create(null)
$.bH=Object.create(null)
H.ks()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ex.$1(v)
if(u!=null){t=H.kD(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ks:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.at(C.H,H.at(C.M,H.at(C.u,H.at(C.u,H.at(C.L,H.at(C.I,H.at(C.J(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.er=new H.kt(v)
$.ei=new H.ku(u)
$.ex=new H.kv(t)},
at:function(a,b){return a(b)||b},
kH:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hK:{"^":"c;a,b,c,d,e,f,r,x",p:{
hL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aH(z)
y=z[0]
x=z[1]
return new H.hK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
id:{"^":"c;a,b,c,d,e,f",
R:function(a){var z,y,x
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
a0:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.id(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dI:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hx:{"^":"E;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dn:function(a,b){return new H.hx(a,b==null?null:b.method)}}},
h6:{"^":"E;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
c6:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h6(a,y,z?null:b.receiver)}}},
ig:{"^":"E;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kJ:{"^":"h:0;a",
$1:function(a){if(!!J.n(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e8:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaN:1},
h:{"^":"c;",
k:function(a){return"Closure '"+H.aM(this).trim()+"'"},
gcw:function(){return this},
gcw:function(){return this}},
dx:{"^":"h;"},
hX:{"^":"dx;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bT:{"^":"dx;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.aL(this.a)
else y=typeof z!=="object"?J.a4(z):H.aL(z)
return(y^H.aL(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aM(z)+"'")},
p:{
bU:function(a){return a.a},
cQ:function(a){return a.c},
bf:function(a){var z,y,x,w,v
z=new H.bT("self","target","receiver","name")
y=J.aH(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fr:{"^":"E;a",
k:function(a){return this.a},
p:{
cR:function(a,b){return new H.fr("CastError: "+H.b(P.bY(a))+": type '"+H.kc(a)+"' is not a subtype of type '"+b+"'")}}},
hO:{"^":"E;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hP:function(a){return new H.hO(a)}}},
dN:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gA:function(a){return J.a4(this.a)},
E:function(a,b){if(b==null)return!1
return b instanceof H.dN&&J.J(this.a,b.a)}},
dc:{"^":"c9;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gM:function(a){return new H.hc(this,[H.B(this,0)])},
am:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bs(y,b)}else return this.e7(b)},
e7:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.aE(z,J.a4(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.al(z,b)
x=y==null?null:y.gae()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.al(w,b)
x=y==null?null:y.gae()
return x}else return this.e8(b)},
e8:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aE(z,J.a4(a)&0x3ffffff)
x=this.aP(y,a)
if(x<0)return
return y[x].gae()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aH()
this.b=z}this.bl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aH()
this.c=y}this.bl(y,b,c)}else{x=this.d
if(x==null){x=this.aH()
this.d=x}w=J.a4(b)&0x3ffffff
v=this.aE(x,w)
if(v==null)this.aL(x,w,[this.ax(b,c)])
else{u=this.aP(v,b)
if(u>=0)v[u].sae(c)
else v.push(this.ax(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.K(this))
z=z.c}},
bl:function(a,b,c){var z=this.al(a,b)
if(z==null)this.aL(a,b,this.ax(b,c))
else z.sae(c)},
bm:function(){this.r=this.r+1&67108863},
ax:function(a,b){var z,y
z=new H.hb(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bm()
return z},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].ge6(),b))return y
return-1},
k:function(a){return P.dh(this)},
al:function(a,b){return a[b]},
aE:function(a,b){return a[b]},
aL:function(a,b,c){a[b]=c},
dj:function(a,b){delete a[b]},
bs:function(a,b){return this.al(a,b)!=null},
aH:function(){var z=Object.create(null)
this.aL(z,"<non-identifier-key>",z)
this.dj(z,"<non-identifier-key>")
return z}},
hb:{"^":"c;e6:a<,ae:b@,c,d"},
hc:{"^":"bW;a,$ti",
gi:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.ah(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.K(z))
y=y.c}}},
ah:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.K(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kt:{"^":"h:0;a",
$1:function(a){return this.a(a)}},
ku:{"^":"h:10;a",
$2:function(a,b){return this.a(a,b)}},
kv:{"^":"h:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kj:function(a){return J.aH(H.x(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){var z,y,x
if(!!J.n(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.ad(b,a))},
ht:{"^":"f;","%":"DataView;ArrayBufferView;ca|e2|e3|dk|e4|e5|ai"},
ca:{"^":"ht;",
gi:function(a){return a.length},
$ism:1,
$asm:I.au,
$iso:1,
$aso:I.au},
dk:{"^":"e3;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbj:function(){return[P.aS]},
$asj:function(){return[P.aS]},
$isi:1,
$asi:function(){return[P.aS]},
"%":"Float64Array"},
ai:{"^":"e5;",
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbj:function(){return[P.D]},
$asj:function(){return[P.D]},
$isi:1,
$asi:function(){return[P.D]}},
hs:{"^":"dk;",$isbZ:1,"%":"Float32Array"},
m9:{"^":"ai;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ma:{"^":"ai;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
$ish_:1,
"%":"Int32Array"},
mb:{"^":"ai;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mc:{"^":"ai;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
md:{"^":"ai;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
me:{"^":"ai;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mf:{"^":"ai;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e2:{"^":"ca+j;"},
e3:{"^":"e2+bj;"},
e4:{"^":"ca+j;"},
e5:{"^":"e4+bj;"}}],["","",,P,{"^":"",
ip:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ke()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ac(new P.ir(z),1)).observe(y,{childList:true})
return new P.iq(z,y,x)}else if(self.setImmediate!=null)return P.kf()
return P.kg()},
n_:[function(a){self.scheduleImmediate(H.ac(new P.is(a),0))},"$1","ke",4,0,6],
n0:[function(a){self.setImmediate(H.ac(new P.it(a),0))},"$1","kf",4,0,6],
n1:[function(a){P.jF(0,a)},"$1","kg",4,0,6],
k7:function(a,b){if(H.en(a,{func:1,args:[P.b1,P.b1]})){b.toString
return a}else{b.toString
return a}},
fR:function(a,b,c){var z
if(a==null)a=new P.cb()
z=$.q
if(z!==C.d)z.toString
z=new P.G(0,z,null,[c])
z.dg(a,b)
return z},
fS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.G(0,$.q,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fU(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aY(new P.fT(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.G(0,$.q,null,[null])
r.bo(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.I(p)
t=H.a3(p)
if(z.b===0||!1)return P.fR(u,t,null)
else{z.c=u
z.d=t}}return y},
k2:function(a,b,c){$.q.toString
a.O(b,c)},
k6:function(){var z,y
for(;z=$.ar,z!=null;){$.aQ=null
y=z.b
$.ar=y
if(y==null)$.aP=null
z.a.$0()}},
nc:[function(){$.cl=!0
try{P.k6()}finally{$.aQ=null
$.cl=!1
if($.ar!=null)$.$get$cg().$1(P.el())}},"$0","el",0,0,3],
eg:function(a){var z=new P.dT(a,null)
if($.ar==null){$.aP=z
$.ar=z
if(!$.cl)$.$get$cg().$1(P.el())}else{$.aP.b=z
$.aP=z}},
kb:function(a){var z,y,x
z=$.ar
if(z==null){P.eg(a)
$.aQ=$.aP
return}y=new P.dT(a,null)
x=$.aQ
if(x==null){y.b=z
$.aQ=y
$.ar=y}else{y.b=x.b
x.b=y
$.aQ=y
if(y.b==null)$.aP=y}},
kF:function(a){var z=$.q
if(C.d===z){P.as(null,null,C.d,a)
return}z.toString
P.as(null,null,z,z.bJ(a))},
ka:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.I(u)
y=H.a3(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aA(x)
w=t
v=x.ga3()
c.$2(w,v)}}},
jX:function(a,b,c,d){var z=a.bP(0)
if(!!J.n(z).$isa8&&z!==$.$get$c_())z.cv(new P.k_(b,c,d))
else b.O(c,d)},
jY:function(a,b){return new P.jZ(a,b)},
k0:function(a,b,c){var z=a.bP(0)
if(!!J.n(z).$isa8&&z!==$.$get$c_())z.cv(new P.k1(b,c))
else b.a4(c)},
bE:function(a,b,c,d,e){var z={}
z.a=d
P.kb(new P.k8(z,e))},
ee:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
ef:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
k9:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
as:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bJ(d):c.dM(d)
P.eg(d)},
ir:{"^":"h:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iq:{"^":"h:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
is:{"^":"h:1;a",
$0:function(){this.a.$0()}},
it:{"^":"h:1;a",
$0:function(){this.a.$0()}},
jE:{"^":"c;a,b,c",
dd:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ac(new P.jG(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jF:function(a,b){var z=new P.jE(!0,null,0)
z.dd(a,b)
return z}}},
jG:{"^":"h:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a8:{"^":"c;$ti"},
fU:{"^":"h:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.O(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.O(z.c,z.d)}},
fT:{"^":"h;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.br(x)}else if(z.b===0&&!this.e)this.c.O(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kV:{"^":"c;$ti"},
dV:{"^":"c;$ti"},
io:{"^":"dV;a,$ti",
aN:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bv("Future already completed"))
z.bo(b)}},
jz:{"^":"dV;a,$ti",
aN:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bv("Future already completed"))
z.a4(b)}},
dW:{"^":"c;aJ:a<,b,c,d,e,$ti",
gdH:function(){return this.b.b},
gc4:function(){return(this.c&1)!==0},
ge5:function(){return(this.c&2)!==0},
gc3:function(){return this.c===8},
e3:function(a){return this.b.b.aW(this.d,a)},
e9:function(a){if(this.c!==6)return!0
return this.b.b.aW(this.d,J.aA(a))},
e2:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.en(z,{func:1,args:[P.c,P.aN]}))return x.eh(z,y.gN(a),a.ga3())
else return x.aW(z,y.gN(a))},
e4:function(){return this.b.b.ca(this.d)}},
G:{"^":"c;bz:a<,b,dv:c<,$ti",
gdq:function(){return this.a===2},
gaF:function(){return this.a>=4},
aY:function(a,b){var z,y,x
z=$.q
if(z!==C.d){z.toString
if(b!=null)b=P.k7(b,z)}y=new P.G(0,z,null,[null])
x=b==null?1:3
this.ay(new P.dW(null,y,x,a,b,[H.B(this,0),null]))
return y},
ar:function(a){return this.aY(a,null)},
cv:function(a){var z,y
z=$.q
y=new P.G(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.B(this,0)
this.ay(new P.dW(null,y,8,a,null,[z,z]))
return y},
ay:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaF()){y.ay(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.as(null,null,z,new P.iL(this,a))}},
bw:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaJ()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaF()){v.bw(a)
return}this.a=v.a
this.c=v.c}z.a=this.aK(a)
y=this.b
y.toString
P.as(null,null,y,new P.iS(z,this))}},
ab:function(){var z=this.c
this.c=null
return this.aK(z)},
aK:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaJ()
z.a=y}return y},
a4:function(a){var z,y,x
z=this.$ti
y=H.b7(a,"$isa8",z,"$asa8")
if(y){z=H.b7(a,"$isG",z,null)
if(z)P.bC(a,this)
else P.dX(a,this)}else{x=this.ab()
this.a=4
this.c=a
P.aq(this,x)}},
br:function(a){var z=this.ab()
this.a=4
this.c=a
P.aq(this,z)},
O:[function(a,b){var z=this.ab()
this.a=8
this.c=new P.be(a,b)
P.aq(this,z)},function(a){return this.O(a,null)},"ev","$2","$1","gaz",4,2,13],
bo:function(a){var z=H.b7(a,"$isa8",this.$ti,"$asa8")
if(z){this.dh(a)
return}this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.iN(this,a))},
dh:function(a){var z=H.b7(a,"$isG",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.iR(this,a))}else P.bC(a,this)
return}P.dX(a,this)},
dg:function(a,b){var z
this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.iM(this,a,b))},
$isa8:1,
p:{
iK:function(a,b){var z=new P.G(0,$.q,null,[b])
z.a=4
z.c=a
return z},
dX:function(a,b){var z,y,x
b.a=1
try{a.aY(new P.iO(b),new P.iP(b))}catch(x){z=H.I(x)
y=H.a3(x)
P.kF(new P.iQ(b,z,y))}},
bC:function(a,b){var z
for(;a.gdq();)a=a.c
if(a.gaF()){z=b.ab()
b.a=a.a
b.c=a.c
P.aq(b,z)}else{z=b.c
b.a=2
b.c=a
a.bw(z)}},
aq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aA(v)
t=v.ga3()
y.toString
P.bE(null,null,y,u,t)}return}for(;b.gaJ()!=null;b=s){s=b.a
b.a=null
P.aq(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc4()||b.gc3()){q=b.gdH()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aA(v)
t=v.ga3()
y.toString
P.bE(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gc3())new P.iV(z,x,b,w).$0()
else if(y){if(b.gc4())new P.iU(x,b,r).$0()}else if(b.ge5())new P.iT(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.n(y).$isa8){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aK(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bC(y,o)
return}}o=b.b
b=o.ab()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iL:{"^":"h:1;a,b",
$0:function(){P.aq(this.a,this.b)}},
iS:{"^":"h:1;a,b",
$0:function(){P.aq(this.b,this.a.a)}},
iO:{"^":"h:0;a",
$1:function(a){var z=this.a
z.a=0
z.a4(a)}},
iP:{"^":"h:14;a",
$2:function(a,b){this.a.O(a,b)},
$1:function(a){return this.$2(a,null)}},
iQ:{"^":"h:1;a,b,c",
$0:function(){this.a.O(this.b,this.c)}},
iN:{"^":"h:1;a,b",
$0:function(){this.a.br(this.b)}},
iR:{"^":"h:1;a,b",
$0:function(){P.bC(this.b,this.a)}},
iM:{"^":"h:1;a,b,c",
$0:function(){this.a.O(this.b,this.c)}},
iV:{"^":"h:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e4()}catch(w){y=H.I(w)
x=H.a3(w)
if(this.d){v=J.aA(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.be(y,x)
u.a=!0
return}if(!!J.n(z).$isa8){if(z instanceof P.G&&z.gbz()>=4){if(z.gbz()===8){v=this.b
v.b=z.gdv()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ar(new P.iW(t))
v.a=!1}}},
iW:{"^":"h:0;a",
$1:function(a){return this.a}},
iU:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e3(this.c)}catch(x){z=H.I(x)
y=H.a3(x)
w=this.a
w.b=new P.be(z,y)
w.a=!0}}},
iT:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e9(z)===!0&&w.e!=null){v=this.b
v.b=w.e2(z)
v.a=!1}}catch(u){y=H.I(u)
x=H.a3(u)
w=this.a
v=J.aA(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.be(y,x)
s.a=!0}}},
dT:{"^":"c;a,b"},
bw:{"^":"c;$ti",
w:function(a,b){var z,y
z={}
y=new P.G(0,$.q,null,[null])
z.a=null
z.a=this.aQ(new P.i5(z,this,b,y),!0,new P.i6(y),y.gaz())
return y},
gi:function(a){var z,y
z={}
y=new P.G(0,$.q,null,[P.D])
z.a=0
this.aQ(new P.i7(z),!0,new P.i8(z,y),y.gaz())
return y},
ge_:function(a){var z,y
z={}
y=new P.G(0,$.q,null,[H.b9(this,"bw",0)])
z.a=null
z.a=this.aQ(new P.i1(z,this,y),!0,new P.i2(y),y.gaz())
return y}},
i5:{"^":"h;a,b,c,d",
$1:function(a){P.ka(new P.i3(this.c,a),new P.i4(),P.jY(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.b9(this.b,"bw",0)]}}},
i3:{"^":"h:1;a,b",
$0:function(){return this.a.$1(this.b)}},
i4:{"^":"h:0;",
$1:function(a){}},
i6:{"^":"h:1;a",
$0:function(){this.a.a4(null)}},
i7:{"^":"h:0;a",
$1:function(a){++this.a.a}},
i8:{"^":"h:1;a,b",
$0:function(){this.b.a4(this.a.a)}},
i1:{"^":"h;a,b,c",
$1:function(a){P.k0(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.b9(this.b,"bw",0)]}}},
i2:{"^":"h:1;a",
$0:function(){var z,y,x,w
try{x=H.d9()
throw H.a(x)}catch(w){z=H.I(w)
y=H.a3(w)
P.k2(this.a,z,y)}}},
i0:{"^":"c;$ti"},
k_:{"^":"h:1;a,b,c",
$0:function(){return this.a.O(this.b,this.c)}},
jZ:{"^":"h:15;a,b",
$2:function(a,b){P.jX(this.a,this.b,a,b)}},
k1:{"^":"h:1;a,b",
$0:function(){return this.a.a4(this.b)}},
be:{"^":"c;N:a>,a3:b<",
k:function(a){return H.b(this.a)},
$isE:1},
jM:{"^":"c;"},
k8:{"^":"h:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cb()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aB(y)
throw x}},
jh:{"^":"jM;",
ei:function(a){var z,y,x
try{if(C.d===$.q){a.$0()
return}P.ee(null,null,this,a)}catch(x){z=H.I(x)
y=H.a3(x)
P.bE(null,null,this,z,y)}},
ej:function(a,b){var z,y,x
try{if(C.d===$.q){a.$1(b)
return}P.ef(null,null,this,a,b)}catch(x){z=H.I(x)
y=H.a3(x)
P.bE(null,null,this,z,y)}},
dM:function(a){return new P.jj(this,a)},
bJ:function(a){return new P.ji(this,a)},
dN:function(a){return new P.jk(this,a)},
h:function(a,b){return},
ca:function(a){if($.q===C.d)return a.$0()
return P.ee(null,null,this,a)},
aW:function(a,b){if($.q===C.d)return a.$1(b)
return P.ef(null,null,this,a,b)},
eh:function(a,b,c){if($.q===C.d)return a.$2(b,c)
return P.k9(null,null,this,a,b,c)}},
jj:{"^":"h:1;a,b",
$0:function(){return this.a.ca(this.b)}},
ji:{"^":"h:1;a,b",
$0:function(){return this.a.ei(this.b)}},
jk:{"^":"h:0;a,b",
$1:function(a){return this.a.ej(this.b,a)}}}],["","",,P,{"^":"",
a_:function(){return new H.dc(0,null,null,null,null,null,0,[null,null])},
de:function(a){return H.kk(a,new H.dc(0,null,null,null,null,null,0,[null,null]))},
S:function(a,b,c,d){return new P.j4(0,null,null,null,null,null,0,[d])},
h0:function(a,b,c){var z,y
if(P.cm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aR()
y.push(a)
try{P.k5(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dv(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c3:function(a,b,c){var z,y,x
if(P.cm(a))return b+"..."+c
z=new P.cd(b)
y=$.$get$aR()
y.push(a)
try{x=z
x.a=P.dv(x.ga5(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga5()+c
y=z.ga5()
return y.charCodeAt(0)==0?y:y},
cm:function(a){var z,y
for(z=0;y=$.$get$aR(),z<y.length;++z)if(a===y[z])return!0
return!1},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gB(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.t();t=s,s=r){r=z.gB(z);++x
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
c7:function(a,b){var z,y
z=P.S(null,null,null,b)
for(y=J.aZ(a);y.t();)z.I(0,y.gB(y))
return z},
dh:function(a){var z,y,x
z={}
if(P.cm(a))return"{...}"
y=new P.cd("")
try{$.$get$aR().push(a)
x=y
x.a=x.ga5()+"{"
z.a=!0
J.cz(a,new P.hf(z,y))
z=y
z.a=z.ga5()+"}"}finally{z=$.$get$aR()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga5()
return z.charCodeAt(0)==0?z:z},
j4:{"^":"iY;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.cj(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.di(b)},
di:function(a){var z=this.d
if(z==null)return!1
return this.aD(z[this.aA(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.K(this))
z=z.b}},
I:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ck()
this.b=z}return this.bn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ck()
this.c=y}return this.bn(y,b)}else return this.de(0,b)},
de:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ck()
this.d=z}y=this.aA(b)
x=z[y]
if(x==null)z[y]=[this.aI(b)]
else{if(this.aD(x,b)>=0)return!1
x.push(this.aI(b))}return!0},
c9:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.ds(0,b)},
ds:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aA(b)]
x=this.aD(y,b)
if(x<0)return!1
this.bB(y.splice(x,1)[0])
return!0},
ad:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aG()}},
bn:function(a,b){if(a[b]!=null)return!1
a[b]=this.aI(b)
return!0},
bx:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bB(z)
delete a[b]
return!0},
aG:function(){this.r=this.r+1&67108863},
aI:function(a){var z,y
z=new P.j5(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aG()
return z},
bB:function(a){var z,y
z=a.gdr()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aG()},
aA:function(a){return J.a4(a)&0x3ffffff},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].gdk(),b))return y
return-1},
p:{
ck:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
j5:{"^":"c;dk:a<,b,dr:c<"},
cj:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.K(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iY:{"^":"hQ;$ti"},
lW:{"^":"c;$ti"},
df:{"^":"e1;$ti",$isi:1},
j:{"^":"c;$ti",
gK:function(a){return new H.dg(a,this.gi(a),0,null,[H.ba(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.K(a))}},
e1:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.K(a))}return y},
ba:function(a,b){return H.dw(a,b,null,H.ba(this,a,"j",0))},
l:function(a,b){var z=H.x([],[H.ba(this,a,"j",0)])
C.c.si(z,C.b.l(this.gi(a),C.b.gi(b)))
C.c.ah(z,0,this.gi(a),a)
C.c.ah(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.c3(a,"[","]")}},
c9:{"^":"O;$ti"},
hf:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
O:{"^":"c;$ti",
w:function(a,b){var z,y
for(z=J.aZ(this.gM(a));z.t();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a5(this.gM(a))},
k:function(a){return P.dh(a)}},
hR:{"^":"c;$ti",
L:function(a,b){var z
for(z=J.aZ(b);z.t();)this.I(0,z.gB(z))},
k:function(a){return P.c3(this,"{","}")},
w:function(a,b){var z
for(z=new P.cj(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hQ:{"^":"hR;$ti"},
e1:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fN:function(a){var z=J.n(a)
if(!!z.$ish)return z.k(a)
return"Instance of '"+H.aM(a)+"'"},
bY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fN(a)},
d3:function(a){return new P.iH(a)},
am:function(a){H.bK(H.b(a))},
cn:{"^":"c;"},
"+bool":0,
cV:{"^":"c;dG:a<,b",
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.cV))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.gdG())},
gA:function(a){var z=this.a
return(z^C.b.by(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fB(H.hI(this))
y=P.b_(H.hG(this))
x=P.b_(H.hC(this))
w=P.b_(H.hD(this))
v=P.b_(H.hF(this))
u=P.b_(H.hH(this))
t=P.fC(H.hE(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
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
aS:{"^":"aU;"},
"+double":0,
b0:{"^":"c;aa:a<",
l:function(a,b){return new P.b0(C.b.l(this.a,b.gaa()))},
J:function(a,b){return new P.b0(this.a-b.gaa())},
a8:function(a,b){return C.b.a8(this.a,b.gaa())},
ag:function(a,b){return C.b.ag(this.a,b.gaa())},
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.b0))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.gaa())},
k:function(a){var z,y,x,w,v
z=new P.fK()
y=this.a
if(y<0)return"-"+new P.b0(0-y).k(0)
x=z.$1(C.b.a6(y,6e7)%60)
w=z.$1(C.b.a6(y,1e6)%60)
v=new P.fJ().$1(y%1e6)
return""+C.b.a6(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fI:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fJ:{"^":"h:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fK:{"^":"h:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"c;",
ga3:function(){return H.a3(this.$thrownJsError)}},
cb:{"^":"E;",
k:function(a){return"Throw of null."}},
ag:{"^":"E;a,b,c,d",
gaC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaB:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaC()+y+x
if(!this.a)return w
v=this.gaB()
u=P.bY(this.b)
return w+v+": "+H.b(u)},
p:{
cN:function(a){return new P.ag(!1,null,null,a)},
fl:function(a,b,c){return new P.ag(!0,a,b,c)}}},
dq:{"^":"ag;e,f,a,b,c,d",
gaC:function(){return"RangeError"},
gaB:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bq:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
hJ:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.ap(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.ap(b,a,c,"end",f))
return b}}},
fZ:{"^":"ag;e,i:f>,a,b,c,d",
gaC:function(){return"RangeError"},
gaB:function(){if(J.aW(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.a5(b)
return new P.fZ(b,z,!0,a,c,"Index out of range")}}},
ih:{"^":"E;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.ih(a)}}},
ie:{"^":"E;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dQ:function(a){return new P.ie(a)}}},
bu:{"^":"E;a",
k:function(a){return"Bad state: "+this.a},
p:{
bv:function(a){return new P.bu(a)}}},
fx:{"^":"E;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bY(z))+"."},
p:{
K:function(a){return new P.fx(a)}}},
dt:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga3:function(){return},
$isE:1},
fA:{"^":"E;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
li:{"^":"c;"},
iH:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
D:{"^":"aU;"},
"+int":0,
bl:{"^":"c;$ti",
aZ:["cK",function(a,b){return new H.dS(this,b,[H.b9(this,"bl",0)])}],
w:function(a,b){var z
for(z=this.gK(this);z.t();)b.$1(z.gB(z))},
gi:function(a){var z,y
z=this.gK(this)
for(y=0;z.t();)++y
return y},
ga2:function(a){var z,y
z=this.gK(this)
if(!z.t())throw H.a(H.d9())
y=z.gB(z)
if(z.t())throw H.a(H.h2())
return y},
q:function(a,b){var z,y,x
if(b<0)H.X(P.ap(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.t();){x=z.gB(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.h0(this,"(",")")}},
h3:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
c8:{"^":"c;$ti"},
b1:{"^":"c;",
gA:function(a){return P.c.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aU:{"^":"c;"},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gA:function(a){return H.aL(this)},
k:function(a){return"Instance of '"+H.aM(this)+"'"},
toString:function(){return this.k(this)}},
aN:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
cd:{"^":"c;a5:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dv:function(a,b,c){var z=J.aZ(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gB(z))
while(z.t())}else{a+=H.b(z.gB(z))
for(;z.t();)a=a+c+H.b(z.gB(z))}return a}}}}],["","",,W,{"^":"",
fL:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).W(z,a,b,c)
y.toString
z=new H.dS(new W.U(y),new W.fM(),[W.r])
return z.ga2(z)},
d2:function(a){return"wheel"},
aD:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eY(a)
if(typeof y==="string")z=a.tagName}catch(x){H.I(x)}return z},
iE:function(a,b){return document.createElement(a)},
al:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ed:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iy(a)
if(!!J.n(z).$isz)return z
return}else return a},
eh:function(a){var z=$.q
if(z===C.d)return a
return z.dN(a)},
t:{"^":"an;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kK:{"^":"cc;m:x=,n:y=,C:z=","%":"Accelerometer|LinearAccelerationSensor"},
kL:{"^":"f;i:length=","%":"AccessibleNodeList"},
kM:{"^":"t;an:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kN:{"^":"t;an:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kR:{"^":"t;an:href}","%":"HTMLBaseElement"},
fp:{"^":"f;","%":"Response;Body"},
bS:{"^":"t;",$isbS:1,"%":"HTMLBodyElement"},
kS:{"^":"t;H:name=","%":"HTMLButtonElement"},
bg:{"^":"t;F:height},G:width}",
b0:function(a,b,c){if(c!=null)return a.getContext(b,P.kh(c,null))
return a.getContext(b)},
cz:function(a,b){return this.b0(a,b,null)},
$isbg:1,
"%":"HTMLCanvasElement"},
kT:{"^":"f;",
dU:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
at:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kU:{"^":"r;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kW:{"^":"Z;a_:style=","%":"CSSFontFaceRule"},
kX:{"^":"Z;a_:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kY:{"^":"Z;a_:style=","%":"CSSPageRule"},
kZ:{"^":"bh;i:length=","%":"CSSPerspective"},
l_:{"^":"bV;m:x=,n:y=","%":"CSSPositionValue"},
l0:{"^":"bh;m:x=,n:y=,C:z=","%":"CSSRotation"},
Z:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
l1:{"^":"bh;m:x=,n:y=,C:z=","%":"CSSScale"},
fy:{"^":"iw;i:length=",
bp:function(a,b){var z,y
z=$.$get$cT()
y=z[b]
if(typeof y==="string")return y
y=this.dD(a,b)
z[b]=y
return y},
dD:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fD()+b
if(z in a)return z
return b},
dA:function(a,b,c,d){a.setProperty(b,c,d)},
sF:function(a,b){a.height=b},
sG:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fz:{"^":"c;",
se0:function(a,b){this.dA(a,this.bp(a,"float"),b,"")}},
l2:{"^":"Z;a_:style=","%":"CSSStyleRule"},
bV:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bh:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l3:{"^":"bV;i:length=","%":"CSSTransformValue"},
l4:{"^":"bh;m:x=,n:y=,C:z=","%":"CSSTranslation"},
l5:{"^":"bV;i:length=","%":"CSSUnparsedValue"},
l6:{"^":"Z;a_:style=","%":"CSSViewportRule"},
l7:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
l8:{"^":"f;m:x=,n:y=,C:z=","%":"DeviceAcceleration"},
fE:{"^":"t;","%":"HTMLDivElement"},
l9:{"^":"r;",
gaR:function(a){return new W.b6(a,"mousedown",!1,[W.L])},
gaS:function(a){return new W.b6(a,"mousemove",!1,[W.L])},
gaT:function(a){return new W.b6(a,"mouseup",!1,[W.L])},
gaU:function(a){return new W.b6(a,W.d2(a),!1,[W.aO])},
"%":"Document|HTMLDocument|XMLDocument"},
la:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
lb:{"^":"fF;",
gP:function(a){return a.a},
gS:function(a){return a.b},
gT:function(a){return a.c},
"%":"DOMMatrix"},
fF:{"^":"f;",
gP:function(a){return a.a},
gS:function(a){return a.b},
gT:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
lc:{"^":"fG;",
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z},
"%":"DOMPoint"},
fG:{"^":"f;",
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z},
"%":";DOMPointReadOnly"},
ld:{"^":"iA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a9]},
$iso:1,
$aso:function(){return[P.a9]},
$asj:function(){return[P.a9]},
$isi:1,
$asi:function(){return[P.a9]},
$ask:function(){return[P.a9]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gG(a))+" x "+H.b(this.gF(a))},
E:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa9)return!1
return a.left===z.gc5(b)&&a.top===z.gce(b)&&this.gG(a)===z.gG(b)&&this.gF(a)===z.gF(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gG(a)
w=this.gF(a)
return W.e0(W.al(W.al(W.al(W.al(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcf:function(a){return new P.aj(a.left,a.top,[null])},
gF:function(a){return a.height},
gc5:function(a){return a.left},
gce:function(a){return a.top},
gG:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa9:1,
$asa9:I.au,
"%":";DOMRectReadOnly"},
le:{"^":"iC;",
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
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
lf:{"^":"f;i:length=","%":"DOMTokenList"},
an:{"^":"r;a_:style=,bv:namespaceURI=,ek:tagName=",
gdK:function(a){return new W.iD(a)},
k:function(a){return a.localName},
W:["av",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d1
if(z==null){z=H.x([],[W.dl])
y=new W.dm(z)
z.push(W.dY(null))
z.push(W.e9())
$.d1=y
d=y}else d=z
z=$.d0
if(z==null){z=new W.ec(d)
$.d0=z
c=z}else{z.a=d
c=z}}if($.a6==null){z=document
y=z.implementation.createHTMLDocument("")
$.a6=y
$.bX=y.createRange()
y=$.a6
y.toString
x=y.createElement("base")
J.f8(x,z.baseURI)
$.a6.head.appendChild(x)}z=$.a6
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a6
if(!!this.$isbS)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a6.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.v(C.P,a.tagName)){$.bX.selectNodeContents(w)
v=$.bX.createContextualFragment(b)}else{w.innerHTML=b
v=$.a6.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a6.body
if(w==null?z!=null:w!==z)J.cF(w)
c.b8(v)
document.adoptNode(v)
return v},function(a,b,c){return this.W(a,b,c,null)},"dT",null,null,"gew",5,5,null],
cC:function(a,b,c,d){a.textContent=null
a.appendChild(this.W(a,b,c,d))},
cB:function(a,b){return this.cC(a,b,null,null)},
b_:function(a){return a.getBoundingClientRect()},
gaR:function(a){return new W.aa(a,"mousedown",!1,[W.L])},
gaS:function(a){return new W.aa(a,"mousemove",!1,[W.L])},
gaT:function(a){return new W.aa(a,"mouseup",!1,[W.L])},
gaU:function(a){return new W.aa(a,W.d2(a),!1,[W.aO])},
$isan:1,
"%":";Element"},
fM:{"^":"h:0;",
$1:function(a){return!!J.n(a).$isan}},
lg:{"^":"t;F:height},H:name=,G:width}","%":"HTMLEmbedElement"},
lh:{"^":"a7;N:error=","%":"ErrorEvent"},
a7:{"^":"f;",
aq:function(a){return a.preventDefault()},
$isa7:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
z:{"^":"f;",
bF:["cI",function(a,b,c,d){if(c!=null)this.df(a,b,c,!1)}],
df:function(a,b,c,d){return a.addEventListener(b,H.ac(c,1),!1)},
dt:function(a,b,c,d){return a.removeEventListener(b,H.ac(c,1),!1)},
$isz:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e6|e7|ea|eb"},
lB:{"^":"t;H:name=","%":"HTMLFieldSetElement"},
lC:{"^":"iJ;",
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
$isi:1,
$asi:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"FileList"},
lD:{"^":"z;N:error=","%":"FileReader"},
lE:{"^":"z;N:error=,i:length=","%":"FileWriter"},
lG:{"^":"f;a_:style=","%":"FontFace"},
lH:{"^":"z;",
ey:function(a,b,c){return a.forEach(H.ac(b,3),c)},
w:function(a,b){b=H.ac(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lJ:{"^":"t;i:length=,H:name=","%":"HTMLFormElement"},
lL:{"^":"cc;m:x=,n:y=,C:z=","%":"Gyroscope"},
lM:{"^":"f;i:length=","%":"History"},
lN:{"^":"j_;",
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
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lO:{"^":"t;F:height},H:name=,G:width}","%":"HTMLIFrameElement"},
c0:{"^":"f;",$isc0:1,"%":"ImageBitmap"},
c1:{"^":"f;",$isc1:1,"%":"ImageData"},
c2:{"^":"t;F:height},G:width}",$isc2:1,"%":"HTMLImageElement"},
lQ:{"^":"t;F:height},H:name=,G:width}","%":"HTMLInputElement"},
bm:{"^":"dO;",
ger:function(a){return a.which},
$isbm:1,
"%":"KeyboardEvent"},
lV:{"^":"t;an:href}","%":"HTMLLinkElement"},
lX:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lY:{"^":"cc;m:x=,n:y=,C:z=","%":"Magnetometer"},
lZ:{"^":"t;H:name=","%":"HTMLMapElement"},
hi:{"^":"t;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
m1:{"^":"f;i:length=","%":"MediaList"},
m2:{"^":"z;",
U:function(a){return a.clone()},
"%":"MediaStream"},
m3:{"^":"z;",
U:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
m4:{"^":"z;",
bF:function(a,b,c,d){if(J.J(b,"message"))a.start()
this.cI(a,b,c,!1)},
"%":"MessagePort"},
m5:{"^":"t;H:name=","%":"HTMLMetaElement"},
m6:{"^":"j6;",
h:function(a,b){return P.R(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.x([],[P.l])
this.w(a,new W.hk(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.l,null]},
"%":"MIDIInputMap"},
hk:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
m7:{"^":"j7;",
h:function(a,b){return P.R(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.x([],[P.l])
this.w(a,new W.hl(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
hl:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
m8:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bo]},
$iso:1,
$aso:function(){return[W.bo]},
$asj:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$ask:function(){return[W.bo]},
"%":"MimeTypeArray"},
L:{"^":"dO;bO:button=",
gc7:function(a){var z,y,x
if(!!a.offsetX)return new P.aj(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.ed(z)).$isan)throw H.a(P.p("offsetX is only supported on elements"))
y=W.ed(z)
z=[null]
x=new P.aj(a.clientX,a.clientY,z).J(0,J.eZ(J.f0(y)))
return new P.aj(J.cH(x.a),J.cH(x.b),z)}},
$isL:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
U:{"^":"df;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bv("No elements"))
if(y>1)throw H.a(P.bv("More than one element"))
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
gK:function(a){var z=this.a.childNodes
return new W.d4(z,z.length,-1,null,[H.ba(C.R,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdf:function(){return[W.r]},
$asj:function(){return[W.r]},
$asi:function(){return[W.r]},
$ase1:function(){return[W.r]}},
r:{"^":"z;ap:parentNode=,aV:previousSibling=",
gec:function(a){return new W.U(a)},
ee:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cJ(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mg:{"^":"f;",
ed:[function(a){return a.previousNode()},"$0","gaV",1,0,4],
"%":"NodeIterator"},
hu:{"^":"jb;",
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
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
mj:{"^":"t;F:height},H:name=,G:width}","%":"HTMLObjectElement"},
ml:{"^":"t;H:name=","%":"HTMLOutputElement"},
mm:{"^":"t;H:name=","%":"HTMLParamElement"},
b2:{"^":"f;i:length=","%":"Plugin"},
mo:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b2]},
$iso:1,
$aso:function(){return[W.b2]},
$asj:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$ask:function(){return[W.b2]},
"%":"PluginArray"},
mr:{"^":"f;",
b_:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mx:{"^":"jl;",
h:function(a,b){return P.R(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.x([],[P.l])
this.w(a,new W.hN(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hN:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
my:{"^":"t;i:length=,H:name=","%":"HTMLSelectElement"},
cc:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mz:{"^":"a7;N:error=","%":"SensorErrorEvent"},
mA:{"^":"t;H:name=","%":"HTMLSlotElement"},
mB:{"^":"e7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bs]},
$iso:1,
$aso:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$ask:function(){return[W.bs]},
"%":"SourceBufferList"},
mC:{"^":"jr;",
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
$isi:1,
$asi:function(){return[W.bt]},
$ask:function(){return[W.bt]},
"%":"SpeechGrammarList"},
mD:{"^":"a7;N:error=","%":"SpeechRecognitionError"},
b4:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mF:{"^":"jv;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gM:function(a){var z=H.x([],[P.l])
this.w(a,new W.i_(z))
return z},
gi:function(a){return a.length},
$asO:function(){return[P.l,P.l]},
"%":"Storage"},
i_:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
ia:{"^":"t;",
W:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=W.fL("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.U(y).L(0,J.eW(z))
return y},
"%":"HTMLTableElement"},
mI:{"^":"t;",
W:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.W(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga2(z)
x.toString
z=new W.U(x)
w=z.ga2(z)
y.toString
w.toString
new W.U(y).L(0,new W.U(w))
return y},
"%":"HTMLTableRowElement"},
mJ:{"^":"t;",
W:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.W(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga2(z)
y.toString
x.toString
new W.U(y).L(0,new W.U(x))
return y},
"%":"HTMLTableSectionElement"},
dy:{"^":"t;",$isdy:1,"%":"HTMLTemplateElement"},
mK:{"^":"t;H:name=","%":"HTMLTextAreaElement"},
mM:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bz]},
$iso:1,
$aso:function(){return[W.bz]},
$asj:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$ask:function(){return[W.bz]},
"%":"TextTrackCueList"},
mN:{"^":"eb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.by]},
$iso:1,
$aso:function(){return[W.by]},
$asj:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$ask:function(){return[W.by]},
"%":"TextTrackList"},
mO:{"^":"f;i:length=","%":"TimeRanges"},
mP:{"^":"jI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bA]},
$iso:1,
$aso:function(){return[W.bA]},
$asj:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$ask:function(){return[W.bA]},
"%":"TouchList"},
mQ:{"^":"f;i:length=","%":"TrackDefaultList"},
mT:{"^":"f;",
ez:[function(a){return a.parentNode()},"$0","gap",1,0,4],
ed:[function(a){return a.previousNode()},"$0","gaV",1,0,4],
"%":"TreeWalker"},
dO:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mV:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mX:{"^":"f;m:x=,C:z=","%":"VRStageBoundsPoint"},
cf:{"^":"hi;F:height},G:width}",$iscf:1,"%":"HTMLVideoElement"},
mY:{"^":"z;i:length=","%":"VideoTrackList"},
aO:{"^":"L;",
gdW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaO:1,
"%":"WheelEvent"},
ik:{"^":"z;",
gdJ:function(a){var z,y
z=P.aU
y=new P.G(0,$.q,null,[z])
this.dm(a)
this.du(a,W.eh(new W.il(new P.jz(y,[z]))))
return y},
du:function(a,b){return a.requestAnimationFrame(H.ac(b,1))},
dm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
il:{"^":"h:0;a",
$1:function(a){this.a.aN(0,a)}},
mZ:{"^":"z;"},
n2:{"^":"r;H:name=,bv:namespaceURI=","%":"Attr"},
n3:{"^":"jO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.Z]},
$iso:1,
$aso:function(){return[W.Z]},
$asj:function(){return[W.Z]},
$isi:1,
$asi:function(){return[W.Z]},
$ask:function(){return[W.Z]},
"%":"CSSRuleList"},
n4:{"^":"fH;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
E:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa9)return!1
return a.left===z.gc5(b)&&a.top===z.gce(b)&&a.width===z.gG(b)&&a.height===z.gF(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e0(W.al(W.al(W.al(W.al(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcf:function(a){return new P.aj(a.left,a.top,[null])},
gF:function(a){return a.height},
gG:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
n5:{"^":"jQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bk]},
$iso:1,
$aso:function(){return[W.bk]},
$asj:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$ask:function(){return[W.bk]},
"%":"GamepadList"},
n8:{"^":"jS;",
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
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n9:{"^":"fp;",
U:function(a){return a.clone()},
"%":"Request"},
na:{"^":"jU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b4]},
$iso:1,
$aso:function(){return[W.b4]},
$asj:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$ask:function(){return[W.b4]},
"%":"SpeechRecognitionResultList"},
nb:{"^":"jW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bx]},
$iso:1,
$aso:function(){return[W.bx]},
$asj:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$ask:function(){return[W.bx]},
"%":"StyleSheetList"},
iu:{"^":"c9;dn:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gM(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.H)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gM:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.x([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbv(v)==null)y.push(u.gH(v))}return y},
$asc9:function(){return[P.l,P.l]},
$asO:function(){return[P.l,P.l]}},
iD:{"^":"iu;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gM(this).length}},
b6:{"^":"bw;a,b,c,$ti",
aQ:function(a,b,c,d){return W.ak(this.a,this.b,a,!1,H.B(this,0))}},
aa:{"^":"b6;a,b,c,$ti"},
iF:{"^":"i0;a,b,c,d,e,$ti",
d8:function(a,b,c,d,e){this.dE()},
bP:function(a){if(this.b==null)return
this.dF()
this.b=null
this.d=null
return},
dE:function(){var z=this.d
if(z!=null&&this.a<=0)J.eF(this.b,this.c,z,!1)},
dF:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eE(x,this.c,z,!1)}},
p:{
ak:function(a,b,c,d,e){var z=W.eh(new W.iG(c))
z=new W.iF(0,a,b,z,!1,[e])
z.d8(a,b,c,!1,e)
return z}}},
iG:{"^":"h:0;a",
$1:function(a){return this.a.$1(a)}},
ch:{"^":"c;cq:a<",
d9:function(a){var z,y
z=$.$get$ci()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.O[y],W.kq())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kr())}},
a7:function(a){return $.$get$dZ().v(0,W.aD(a))},
a0:function(a,b,c){var z,y,x
z=W.aD(a)
y=$.$get$ci()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dY:function(a){var z,y
z=document.createElement("a")
y=new W.jm(z,window.location)
y=new W.ch(y)
y.d9(a)
return y},
n6:[function(a,b,c,d){return!0},"$4","kq",16,0,9],
n7:[function(a,b,c,d){var z,y,x,w,v
z=d.gcq()
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
return z},"$4","kr",16,0,9]}},
k:{"^":"c;$ti",
gK:function(a){return new W.d4(a,this.gi(a),-1,null,[H.ba(this,a,"k",0)])}},
dm:{"^":"c;a",
a7:function(a){return C.c.bG(this.a,new W.hw(a))},
a0:function(a,b,c){return C.c.bG(this.a,new W.hv(a,b,c))}},
hw:{"^":"h:0;a",
$1:function(a){return a.a7(this.a)}},
hv:{"^":"h:0;a,b,c",
$1:function(a){return a.a0(this.a,this.b,this.c)}},
jn:{"^":"c;cq:d<",
dc:function(a,b,c,d){var z,y,x
this.a.L(0,c)
z=b.aZ(0,new W.jo())
y=b.aZ(0,new W.jp())
this.b.L(0,z)
x=this.c
x.L(0,C.w)
x.L(0,y)},
a7:function(a){return this.a.v(0,W.aD(a))},
a0:["cM",function(a,b,c){var z,y
z=W.aD(a)
y=this.c
if(y.v(0,H.b(z)+"::"+b))return this.d.dI(c)
else if(y.v(0,"*::"+b))return this.d.dI(c)
else{y=this.b
if(y.v(0,H.b(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.b(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
jo:{"^":"h:0;",
$1:function(a){return!C.c.v(C.p,a)}},
jp:{"^":"h:0;",
$1:function(a){return C.c.v(C.p,a)}},
jA:{"^":"jn;e,a,b,c,d",
a0:function(a,b,c){if(this.cM(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cA(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
e9:function(){var z=P.l
z=new W.jA(P.c7(C.o,z),P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z),null)
z.dc(null,new H.hg(C.o,new W.jB(),[H.B(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jB:{"^":"h:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jy:{"^":"c;",
a7:function(a){var z=J.n(a)
if(!!z.$isds)return!1
z=!!z.$isw
if(z&&W.aD(a)==="foreignObject")return!1
if(z)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.i.cF(b,"on"))return!1
return this.a7(a)}},
d4:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.az(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gB:function(a){return this.d}},
ix:{"^":"c;a",$isz:1,p:{
iy:function(a){if(a===window)return a
else return new W.ix(a)}}},
dl:{"^":"c;"},
mh:{"^":"c;"},
mU:{"^":"c;"},
jm:{"^":"c;a,b"},
ec:{"^":"c;a",
b8:function(a){new W.jL(this).$2(a,null)},
ac:function(a,b){if(b==null)J.cF(a)
else b.removeChild(a)},
dz:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cA(a)
x=y.gdn().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.I(t)}v="element unprintable"
try{v=J.aB(a)}catch(t){H.I(t)}try{u=W.aD(a)
this.dw(a,b,z,v,u,y,x)}catch(t){if(H.I(t) instanceof P.ag)throw t
else{this.ac(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dw:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ac(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a7(a)){this.ac(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.ac(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gM(f)
y=H.x(z.slice(0),[H.B(z,0)])
for(x=f.gM(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.a0(a,J.fc(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdy)this.b8(a.content)}},
jL:{"^":"h:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dz(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ac(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eX(z)}catch(w){H.I(w)
v=z
if(x){u=J.e(v)
if(u.gap(v)!=null){u.gap(v)
u.gap(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iw:{"^":"f+fz;"},
iz:{"^":"f+j;"},
iA:{"^":"iz+k;"},
iB:{"^":"f+j;"},
iC:{"^":"iB+k;"},
iI:{"^":"f+j;"},
iJ:{"^":"iI+k;"},
iZ:{"^":"f+j;"},
j_:{"^":"iZ+k;"},
j6:{"^":"f+O;"},
j7:{"^":"f+O;"},
j8:{"^":"f+j;"},
j9:{"^":"j8+k;"},
ja:{"^":"f+j;"},
jb:{"^":"ja+k;"},
je:{"^":"f+j;"},
jf:{"^":"je+k;"},
jl:{"^":"f+O;"},
e6:{"^":"z+j;"},
e7:{"^":"e6+k;"},
jq:{"^":"f+j;"},
jr:{"^":"jq+k;"},
jv:{"^":"f+O;"},
jC:{"^":"f+j;"},
jD:{"^":"jC+k;"},
ea:{"^":"z+j;"},
eb:{"^":"ea+k;"},
jH:{"^":"f+j;"},
jI:{"^":"jH+k;"},
jN:{"^":"f+j;"},
jO:{"^":"jN+k;"},
jP:{"^":"f+j;"},
jQ:{"^":"jP+k;"},
jR:{"^":"f+j;"},
jS:{"^":"jR+k;"},
jT:{"^":"f+j;"},
jU:{"^":"jT+k;"},
jV:{"^":"f+j;"},
jW:{"^":"jV+k;"}}],["","",,P,{"^":"",
em:function(a){return a},
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
kh:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cz(a,new P.ki(z))
return z},
d_:function(){var z=$.cZ
if(z==null){z=J.bM(window.navigator.userAgent,"Opera",0)
$.cZ=z}return z},
fD:function(){var z,y
z=$.cW
if(z!=null)return z
y=$.cX
if(y==null){y=J.bM(window.navigator.userAgent,"Firefox",0)
$.cX=y}if(y)z="-moz-"
else{y=$.cY
if(y==null){y=P.d_()!==!0&&J.bM(window.navigator.userAgent,"Trident/",0)
$.cY=y}if(y)z="-ms-"
else z=P.d_()===!0?"-o-":"-webkit-"}$.cW=z
return z},
ki:{"^":"h:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mw:{"^":"z;N:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mR:{"^":"z;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
kG:function(a){return Math.sqrt(a)},
e_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j0:{"^":"c;",
eb:function(){return Math.random()}},
aj:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
E:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.aj))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gA:function(a){var z,y
z=J.a4(this.a)
y=J.a4(this.b)
return P.j1(P.e_(P.e_(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.aj(y,C.a.l(z,x),this.$ti)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.C(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.C(y)
return new P.aj(z-x,w-y,this.$ti)}},
jg:{"^":"c;$ti"},
a9:{"^":"jg;$ti"}}],["","",,P,{"^":"",lj:{"^":"w;m:x=,n:y=","%":"SVGFEBlendElement"},lk:{"^":"w;m:x=,n:y=","%":"SVGFEColorMatrixElement"},ll:{"^":"w;m:x=,n:y=","%":"SVGFEComponentTransferElement"},lm:{"^":"w;m:x=,n:y=","%":"SVGFECompositeElement"},ln:{"^":"w;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},lo:{"^":"w;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},lp:{"^":"w;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lq:{"^":"w;m:x=,n:y=","%":"SVGFEFloodElement"},lr:{"^":"w;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},ls:{"^":"w;m:x=,n:y=","%":"SVGFEImageElement"},lt:{"^":"w;m:x=,n:y=","%":"SVGFEMergeElement"},lu:{"^":"w;m:x=,n:y=","%":"SVGFEMorphologyElement"},lv:{"^":"w;m:x=,n:y=","%":"SVGFEOffsetElement"},lw:{"^":"w;m:x=,n:y=,C:z=","%":"SVGFEPointLightElement"},lx:{"^":"w;m:x=,n:y=","%":"SVGFESpecularLightingElement"},ly:{"^":"w;m:x=,n:y=,C:z=","%":"SVGFESpotLightElement"},lz:{"^":"w;m:x=,n:y=","%":"SVGFETileElement"},lA:{"^":"w;m:x=,n:y=","%":"SVGFETurbulenceElement"},lF:{"^":"w;m:x=,n:y=","%":"SVGFilterElement"},lI:{"^":"aF;m:x=,n:y=","%":"SVGForeignObjectElement"},fW:{"^":"aF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aF:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lP:{"^":"aF;m:x=,n:y=","%":"SVGImageElement"},lU:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dd]},
$isi:1,
$asi:function(){return[P.dd]},
$ask:function(){return[P.dd]},
"%":"SVGLengthList"},m_:{"^":"w;m:x=,n:y=","%":"SVGMaskElement"},m0:{"^":"f;P:a=,S:b=,T:c=","%":"SVGMatrix"},mi:{"^":"jd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dp]},
$isi:1,
$asi:function(){return[P.dp]},
$ask:function(){return[P.dp]},
"%":"SVGNumberList"},mn:{"^":"w;m:x=,n:y=","%":"SVGPatternElement"},mp:{"^":"f;m:x=,n:y=","%":"SVGPoint"},mq:{"^":"f;i:length=","%":"SVGPointList"},ms:{"^":"f;m:x=,n:y=","%":"SVGRect"},mt:{"^":"fW;m:x=,n:y=","%":"SVGRectElement"},ds:{"^":"w;",$isds:1,"%":"SVGScriptElement"},mG:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},w:{"^":"an;",
W:function(a,b,c,d){var z,y,x,w,v,u
z=H.x([],[W.dl])
z.push(W.dY(null))
z.push(W.e9())
z.push(new W.jy())
c=new W.ec(new W.dm(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dT(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.U(w)
u=z.ga2(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaR:function(a){return new W.aa(a,"mousedown",!1,[W.L])},
gaS:function(a){return new W.aa(a,"mousemove",!1,[W.L])},
gaT:function(a){return new W.aa(a,"mouseup",!1,[W.L])},
gaU:function(a){return new W.aa(a,"mousewheel",!1,[W.aO])},
$isw:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mH:{"^":"aF;m:x=,n:y=","%":"SVGSVGElement"},ib:{"^":"aF;","%":"SVGTextPathElement;SVGTextContentElement"},mL:{"^":"ib;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mS:{"^":"jK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dB]},
$isi:1,
$asi:function(){return[P.dB]},
$ask:function(){return[P.dB]},
"%":"SVGTransformList"},mW:{"^":"aF;m:x=,n:y=","%":"SVGUseElement"},j2:{"^":"f+j;"},j3:{"^":"j2+k;"},jc:{"^":"f+j;"},jd:{"^":"jc+k;"},jw:{"^":"f+j;"},jx:{"^":"jw+k;"},jJ:{"^":"f+j;"},jK:{"^":"jJ+k;"}}],["","",,P,{"^":"",kO:{"^":"f;i:length=","%":"AudioBuffer"},kP:{"^":"iv;",
h:function(a,b){return P.R(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.x([],[P.l])
this.w(a,new P.fn(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.l,null]},
"%":"AudioParamMap"},fn:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},kQ:{"^":"z;i:length=","%":"AudioTrackList"},fo:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mk:{"^":"fo;i:length=","%":"OfflineAudioContext"},iv:{"^":"f+O;"}}],["","",,P,{"^":"",mu:{"^":"f;",
bE:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindTexture(b,c)},
bL:function(a,b){return a.blendEquation(b)},
bM:function(a,b,c){return a.blendFunc(b,c)},
bN:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.R(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
c8:function(a,b,c){return a.pixelStorei(b,c)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aX:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.em(g))
return}if(!!z.$isc2)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbg)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscf)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc0)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cN("Incorrect number or type of arguments"))},
cb:function(a,b,c,d,e,f,g){return this.aX(a,b,c,d,e,f,g,null,null,null)},
cc:function(a,b,c,d){return a.texParameterf(b,c,d)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
cg:function(a,b,c){return a.uniform1f(b,c)},
ci:function(a,b,c){return a.uniform1fv(b,c)},
cj:function(a,b,c){return a.uniform1i(b,c)},
ck:function(a,b,c){return a.uniform1iv(b,c)},
cl:function(a,b,c){return a.uniform2fv(b,c)},
cm:function(a,b,c){return a.uniform3fv(b,c)},
cn:function(a,b,c){return a.uniform4fv(b,c)},
co:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mv:{"^":"f;",
dL:function(a,b){return a.beginTransformFeedback(b)},
dO:function(a,b){return a.bindVertexArray(b)},
dV:function(a){return a.createVertexArray()},
dX:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dY:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dZ:function(a){return a.endTransformFeedback()},
ep:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eq:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bE:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindTexture(b,c)},
bL:function(a,b){return a.blendEquation(b)},
bM:function(a,b,c){return a.blendFunc(b,c)},
bN:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.R(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
c8:function(a,b,c){return a.pixelStorei(b,c)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aX:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.em(g))
return}if(!!z.$isc2)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbg)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscf)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc0)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cN("Incorrect number or type of arguments"))},
cb:function(a,b,c,d,e,f,g){return this.aX(a,b,c,d,e,f,g,null,null,null)},
cc:function(a,b,c,d){return a.texParameterf(b,c,d)},
cd:function(a,b,c,d){return a.texParameteri(b,c,d)},
cg:function(a,b,c){return a.uniform1f(b,c)},
ci:function(a,b,c){return a.uniform1fv(b,c)},
cj:function(a,b,c){return a.uniform1i(b,c)},
ck:function(a,b,c){return a.uniform1iv(b,c)},
cl:function(a,b,c){return a.uniform2fv(b,c)},
cm:function(a,b,c){return a.uniform3fv(b,c)},
cn:function(a,b,c){return a.uniform4fv(b,c)},
co:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
cs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mE:{"^":"ju;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.R(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c8]},
$isi:1,
$asi:function(){return[P.c8]},
$ask:function(){return[P.c8]},
"%":"SQLResultSetRowList"},jt:{"^":"f+j;"},ju:{"^":"jt+k;"}}],["","",,G,{"^":"",
im:function(a){var z,y,x,w
z=H.x(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.af(z,"\n")},
dU:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bU(a,b)
z.b9(a,y,c)
z.bR(a,y)
x=z.b5(a,y,35713)
if(x!=null&&J.J(x,!1)){w=z.b4(a,y)
P.am("E:Compilation failed:")
P.am("E:"+G.im(c))
P.am("E:Failure:")
P.am(C.i.l("E:",w))
throw H.a(w)}return y},
d5:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bP(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bQ(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cD(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fP:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bP(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bQ(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fQ:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bP(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bQ(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cD(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.f_(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fO:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.az(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.az(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.az(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.az(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ah(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.D]],v=[P.aS],u=[T.a1],t=[T.y],s=[T.T];y.t();){r=y.d
if(!x.am(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eo>0)H.bK("I: "+q)
continue}p=z.h(0,r)
switch($.$get$V().h(0,r).a){case"vec2":b.a9(r,G.fP(H.bc(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a9(r,G.d5(H.bc(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a9(r,G.fQ(H.bc(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a9(r,new Float32Array(H.bD(H.bc(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a9(r,G.fO(H.bc(p,"$isi",w,"$asi"),null),4)
break}}},
bp:{"^":"c;"},
dP:{"^":"bp;",
bj:function(){return this.d},
k:function(a){var z,y,x,w
z=H.x(["{"+H.b(new H.dN(H.kn(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.ah(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.af(z,"\n")}},
fq:{"^":"hW;"},
fs:{"^":"c;a,b",
c2:function(a,b,c){J.eU(this.a,b)
if(c>0)J.fi(this.a,b,c)},
ct:function(a,b,c,d,e,f,g,h){J.bL(this.a,34962,b)
J.fj(this.a,c,d,e,!1,g,h)}},
aE:{"^":"c;P:a>,S:b>,T:c>",p:{
A:function(a,b,c){return new G.aE(a,b,c)}}},
fV:{"^":"c;a,b,c,d,e",
bh:function(a){switch($.$get$V().h(0,a).a){case"vec2":this.e.j(0,a,H.x([],[T.T]))
break
case"vec3":this.e.j(0,a,H.x([],[T.y]))
break
case"vec4":this.e.j(0,a,H.x([],[T.a1]))
break
case"float":this.e.j(0,a,H.x([],[P.aS]))
break
case"uvec4":this.e.j(0,a,H.x([],[[P.i,P.D]]))
break}},
cQ:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.aE(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.cw(a[x]))},
cO:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<3;++y)z.push(b[y].U(0))},
cP:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<3;++y)z.push(J.cw(b[y]))},
cT:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=new Array(z.length*3)
y.fixed$length=Array
x=H.x(y,[P.D])
for(y=z.length,w=x.length,v=0,u=0;u<y;++u){t=z[u]
if(v>=w)return H.d(x,v)
x[v]=t.a
s=v+1
if(s>=w)return H.d(x,s)
x[s]=t.b
s=v+2
if(s>=w)return H.d(x,s)
x[s]=t.c
v+=3}for(z=this.c,u=0;!1;++u){if(u>=0)return H.d(z,u)
r=z[u]
y=r.gP(r)
if(v>=w)return H.d(x,v)
x[v]=y
y=v+1
s=r.gS(r)
if(y>=w)return H.d(x,y)
x[y]=s
s=v+2
y=r.gT(r)
if(s>=w)return H.d(x,s)
x[s]=y
y=v+3
s=r.gP(r)
if(y>=w)return H.d(x,y)
x[y]=s
s=v+4
y=r.gT(r)
if(s>=w)return H.d(x,s)
x[s]=y
y=v+5
s=r.gex(r)
if(y>=w)return H.d(x,y)
x[y]=s
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(y=this.e,x=new H.ah(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$V().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.af(z," ")}},
dA:{"^":"c;a,b,c"},
dz:{"^":"c;a,b,c"},
hh:{"^":"dP;d,a,b,c",
cX:function(a,b){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!1)
z.j(0,"cBlendEquation",b)
z.j(0,"cStencilFunc",$.$get$du())},
p:{
di:function(a,b){var z=new G.hh(P.a_(),a,!1,!0)
z.cX(a,b)
return z}}},
hj:{"^":"bp;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bg:function(a,b,c){var z,y
C.i.bq(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bL(z.a,34962,y)
J.cv(z.a,34962,b,35048)},
cU:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a9:function(a,b,c){var z,y,x,w,v
z=J.cx(a,0)===105
if(z&&this.z===0)this.z=C.b.cN(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bN(x.a))
this.bg(a,b,c)
w=$.$get$V().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bd(x.a,this.e)
x.c2(0,v,z?1:0)
x.ct(0,y.h(0,a),v,w.bi(),5126,!1,0,0)},
bf:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bN(y.a))
this.ch=a
this.bg("aPosition",a,3)
x=$.$get$V().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bd(y.a,this.e)
y.c2(0,w,0)
y.ct(0,z.h(0,"aPosition"),w,x.bi(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ah(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.af(y,"  ")},
p:{
dj:function(a,b,c,d){return new G.hj(b,J.eO(b.a),c,P.a_(),d,null,0,-1,null,null,P.a_(),"meshdata:"+a,!1,!0)}}},
hz:{"^":"dP;",
cR:function(a,b){var z
if(typeof a!=="number")return a.es()
if(typeof b!=="number")return H.C(b)
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
bj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.y(new Float32Array(3))
u.ai(x,w,v)
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
x=!!y.$isa1
q=x?y.gas(t):1
if(!!y.$isy){p=y.gm(t)
s=y.gn(t)
r=y.gC(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gC(t)
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
c.u(this.db)
c.ea(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hM:{"^":"bp;d,e,f,r,x,y,z,Q,ch,a,b,c",
cZ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
x.j(0,t,J.cE(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
x.j(0,t,J.cE(w.a,v,t))}},
d3:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ah(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.am(0,v))x.push(v)}for(z=this.x,y=new P.cj(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
d6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ah(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cx(t,0)){case 117:if(w.am(0,t)){s=b.h(0,t)
if(v.am(0,t))H.bK("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$V().h(0,t)
if(r==null)H.X("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bR(x.a,q,s)
else if(!!J.n(s).$ish_)J.fg(x.a,q,s)
break
case"float":if(r.c===0)J.fe(x.a,q,s)
else if(!!J.n(s).$isbZ)J.ff(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.af(s,"$isP").a
J.cM(x.a,q,!1,p)}else if(!!J.n(s).$isbZ)J.cM(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.af(s,"$isao").a
J.cL(x.a,q,!1,p)}else if(!!J.n(s).$isbZ)J.cL(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cK(o,q,H.af(s,"$isa1").a)
else J.cK(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cJ(o,q,H.af(s,"$isy").a)
else J.cJ(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cI(o,q,H.af(s,"$isT").a)
else J.cI(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.C(p)
J.ct(x.a,33984+p)
p=H.af(s,"$isce").b
J.aX(x.a,3553,p)
p=this.ch
J.bR(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.C(p)
J.ct(x.a,33984+p)
p=H.af(s,"$isce").b
J.aX(x.a,34067,p)
p=this.ch
J.bR(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bK("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.J(s,!0)
o=x.a
if(p)J.aY(o,2929)
else J.bO(o,2929)
break
case"cStencilFunc":H.af(s,"$isdA")
p=s.a
o=x.a
if(p===1281)J.bO(o,2960)
else{J.aY(o,2960)
o=s.b
n=s.c
J.f9(x.a,p,o,n)}break
case"cDepthWrite":J.eP(x.a,s)
break
case"cBlendEquation":H.af(s,"$isdz")
p=s.a
o=x.a
if(p===1281)J.bO(o,3042)
else{J.aY(o,3042)
o=s.b
n=s.c
J.eI(x.a,o,n)
J.eH(x.a,p)}break}++u
break}}m=P.fI(0,0,0,Date.now()-new P.cV(z,!1).a,0,0)
""+u
m.k(0)},
cS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fh(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bm()}for(x=0;x<2;++x){w=b[x]
this.d6(w.a,w.bj())}y=this.Q
y.ad(0)
for(v=a.cy,u=new H.ah(v,v.r,null,null,[H.B(v,0)]),u.c=v.e;u.t();)y.I(0,u.d)
t=this.d3()
if(t.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.bd(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cU()
u=a.Q
r=a.z
if(s)J.eG(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eT(q,y,v,u,0,r)
else J.eS(q,y,v,u,0)}else{u=z.a
if(r>1)J.eR(u,y,0,v,r)
else J.eQ(u,y,0,v)}if(s)J.eV(z.a)},
aw:function(a,b){return this.cS(a,b,null)},
p:{
dr:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.S(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eL(b.a)
u=G.dU(b.a,35633,y)
J.cu(b.a,v,u)
t=G.dU(b.a,35632,x)
J.cu(b.a,v,t)
if(w.length>0)J.fd(b.a,v,w,35980)
J.f6(b.a,v)
if(J.f5(b.a,v,35714)!==!0)H.X(J.f4(b.a,v))
z=new G.hM(b,c,d,v,P.c7(c.c,null),P.a_(),P.a_(),z,null,a,!1,!0)
z.cZ(a,b,c,d)
return z}}},
u:{"^":"c;a,b,c",
bi:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hS:{"^":"c;a,b,c,d,e,f,r,x",
bd:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.H)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.au(y)},
aj:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.H)(a),++x)y.push(a[x])
C.c.au(y)},
be:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.au(z)},
d_:function(a,b){this.b=this.d7(!0,a,b)},
ak:function(a){return this.d_(a,null)},
d7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
s=$.$get$V().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.L(w,b)
w.push("}")
return C.c.af(w,"\n")},
p:{
br:function(a){return new G.hS(a,null,[],[],[],[],0,P.a_())}}},
hW:{"^":"bp;"},
ic:{"^":"c;a,b,c,d,e,f,r"},
ce:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fY:{"^":"ce;f,a,b,c,d,e",
cV:function(a,b,c,d,e){var z,y,x,w
z=this.d
y=this.c
J.aX(z.a,y,this.b)
J.f7(z.a,37440,1)
this.d0(this.f)
x=this.e
w=x.e
if(w!==1)J.fb(z.a,y,34046,w)
J.cG(z.a,y,10240,x.r)
J.cG(z.a,y,10241,x.f)
J.f3(z.a)
J.aX(z.a,y,null)},
d0:function(a){var z,y
z=this.d
y=this.c
J.aX(z.a,y,this.b)
J.fa(z.a,y,0,6408,6408,5121,a)},
p:{
d8:function(a,b,c,d,e){var z=new G.fY(c,b,J.eN(a.a),e,a,new G.ic(!1,!1,!1,!0,1,9729,9729))
z.cV(a,b,c,d,e)
return z}}}}],["","",,R,{"^":"",
ii:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dR().eb()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.dj(z,a.d,0,a.e.x)
y.bf(x)
return y},
hA:{"^":"hz;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
eg:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sG(z,y)
w.sF(z,x)
P.am("size change "+H.b(y)+" "+H.b(x))
this.cR(y,x)
J.fk(this.go.a,0,0,y,x)},"$1","gef",4,0,17]},
hY:{"^":"c;",
d1:function(a,b,c){var z,y,x
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
x=this.da(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
da:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iE("span",null)
y=J.cB(v)
J.e(y).sG(y,"1px")
C.n.sF(y,""+d+"px")
C.n.se0(y,"left")
x=C.n.bp(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hZ:{"^":"hY;e,f,a,b,c,d",
d5:function(a,b){var z,y,x,w,v;++this.e
if(J.aW(J.eD(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eo(z,2)+" fps"
y=this.c;(y&&C.F).cB(y,b)
x=C.b.a6(30*C.t.dP(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cB(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d4:function(a){return this.d5(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
fX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.c.L(z,$.$get$d6())
C.c.L(y,$.$get$d7())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.H)(z),++u){t=z[u]
s=J.e(t)
r=s.gP(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
q=new T.y(new Float32Array(3))
q.u(r)
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
q.I(0,y[r])
q.Y(0,0.5)
q.D(0)
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
p=new T.y(new Float32Array(3))
p.u(r)
r=s.gT(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
p.I(0,y[r])
p.Y(0,0.5)
p.D(0)
r=s.gT(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
o=new T.y(new Float32Array(3))
o.u(r)
r=s.gP(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
o.I(0,y[r])
o.Y(0,0.5)
o.D(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.aE(s.gP(t),n,l))
w.push(new G.aE(s.gS(t),m,n))
w.push(new G.aE(s.gT(t),l,m))
w.push(new G.aE(n,m,l))}}k=new G.fV(!1,[],[],[],P.a_())
k.bh("aTexUV")
k.bh("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.H)(z),++u){t=z[u]
s=J.e(t)
r=s.gP(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
j=y[r]
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
i=y[r]
s=s.gT(t)
if(s>>>0!==s||s>=y.length)return H.d(y,s)
h=y[s]
s=J.e(j)
r=s.gC(j)
g=s.gm(j)
g=Math.atan2(H.ab(r),H.ab(g))
s=Math.acos(H.ab(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.e(i)
g=s.gC(i)
f=s.gm(i)
f=Math.atan2(H.ab(g),H.ab(f))
s=Math.acos(H.ab(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.e(h)
f=s.gC(h)
e=s.gm(h)
e=Math.atan2(H.ab(f),H.ab(e))
s=Math.acos(H.ab(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.cP("aNormal",[j,i,h])
k.cQ([j.Z(b),i.Z(b),h.Z(b)])
k.cO("aTexUV",[new T.T(r),new T.T(g),new T.T(f)])}return k}}],["","",,D,{"^":"",
hd:function(a){var z,y,x
z=new P.G(0,$.q,null,[null])
y=document.createElement("img")
x=new W.aa(y,"load",!1,[W.a7])
x.ge_(x).ar(new D.he(new P.io(z,[null]),y))
y.src=a
return z},
he:{"^":"h:0;a,b",
$1:function(a){return this.a.aN(0,this.b)}},
h7:{"^":"c;a,b,c",
cW:function(a){var z
a=document
z=W.bm
W.ak(a,"keydown",new D.h9(this),!1,z)
W.ak(a,"keyup",new D.ha(this),!1,z)},
p:{
h8:function(a){var z=P.D
z=new D.h7(P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z))
z.cW(a)
return z}}},
h9:{"^":"h:8;a",
$1:function(a){var z=this.a
z.a.I(0,J.cC(a))
z.b.I(0,a.which)}},
ha:{"^":"h:8;a",
$1:function(a){var z=this.a
z.a.c9(0,J.cC(a))
z.c.I(0,a.which)}},
hm:{"^":"c;a,b,c,d,e,f,r,x",
cY:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaS(a)
W.ak(y.a,y.b,new D.ho(this),!1,H.B(y,0))
y=z.gaR(a)
W.ak(y.a,y.b,new D.hp(this),!1,H.B(y,0))
y=z.gaT(a)
W.ak(y.a,y.b,new D.hq(this),!1,H.B(y,0))
z=z.gaU(a)
W.ak(z.a,z.b,new D.hr(this),!1,H.B(z,0))},
p:{
hn:function(a){var z=P.D
z=new D.hm(P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z),0,0,0,0,0)
z.cY(a)
return z}}},
ho:{"^":"h:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aq(a)
y=this.a
y.r=z.gc7(a).a
y.x=z.gc7(a).b
y.d=a.movementX
y.e=a.movementY}},
hp:{"^":"h:5;a",
$1:function(a){var z=J.e(a)
z.aq(a)
P.am("BUTTON "+H.b(z.gbO(a)))
z=this.a
z.a.I(0,a.button)
z.b.I(0,a.button)}},
hq:{"^":"h:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aq(a)
y=this.a
y.a.c9(0,z.gbO(a))
y.c.I(0,a.button)}},
hr:{"^":"h:18;a",
$1:function(a){var z=J.e(a)
z.aq(a)
this.a.f=z.gdW(a)}},
hy:{"^":"fq;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bb:function(a){var z,y
z=C.Q.e1(a,0,new A.kp())
if(typeof z!=="number")return H.C(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kp:{"^":"h:19;",
$2:function(a,b){var z,y
z=J.ay(a,J.a4(b))
if(typeof z!=="number")return H.C(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ao:{"^":"c;bt:a<",
u:function(a){var z,y
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.d(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ao){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.bb(this.a)},
X:function(a){var z,y,x
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
return new T.y(z)},
U:function(a){var z=new T.ao(new Float32Array(9))
z.u(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ao(z)
y.u(this)
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
return y},
J:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ao(z)
y.u(this)
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
return y},
Z:function(a){var z,y
z=new Float32Array(9)
y=new T.ao(z)
y.u(this)
z[0]=z[0]*a
z[1]=z[1]*a
z[2]=z[2]*a
z[3]=z[3]*a
z[4]=z[4]*a
z[5]=z[5]*a
z[6]=z[6]*a
z[7]=z[7]*a
z[8]=z[8]*a
return y}},P:{"^":"c;bu:a<",
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.bb(this.a)},
X:function(a){var z,y,x
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
return new T.a1(z)},
U:function(a){var z=new T.P(new Float32Array(16))
z.u(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.P(z)
y.u(this)
x=b.gbu()
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
y=new T.P(z)
y.u(this)
x=b.gbu()
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
cA:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.P(z)
y.u(this)
if(typeof a==="number"){x=a
w=x
v=w}else{v=null
w=null
x=null}u=z[0]
if(typeof v!=="number")return H.C(v)
z[0]=u*v
z[1]=z[1]*v
z[2]=z[2]*v
z[3]=z[3]*v
u=z[4]
if(typeof w!=="number")return H.C(w)
z[4]=u*w
z[5]=z[5]*w
z[6]=z[6]*w
z[7]=z[7]*w
u=z[8]
if(typeof x!=="number")return H.C(x)
z[8]=u*x
z[9]=z[9]*x
z[10]=z[10]*x
z[11]=z[11]*x
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
Z:function(a){return this.cA(a,null,null)},
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
ea:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},T:{"^":"c;bC:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.T){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bb(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.T(z)
y.u(this)
x=b.gbC()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.T(z)
y.u(this)
x=b.gbC()
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
Y:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
Z:function(a){var z=new T.T(new Float32Array(2))
z.u(this)
z.Y(0,a)
return z},
U:function(a){var z=new T.T(new Float32Array(2))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},y:{"^":"c;aM:a<",
ai:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
u:function(a){var z,y
z=a.gaM()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bb(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.y(z)
y.u(this)
x=b.gaM()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z=new T.y(new Float32Array(3))
z.u(this)
z.I(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
D:function(a){var z,y,x,w,v,u
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
aO:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bW:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.y(new Float32Array(3))
z.ai(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
I:function(a,b){var z,y
z=b.gaM()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
Y:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
Z:function(a){var z=new T.y(new Float32Array(3))
z.u(this)
z.Y(0,a)
return z},
U:function(a){var z=new T.y(new Float32Array(3))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
p:{
Q:function(a,b,c){var z=new T.y(new Float32Array(3))
z.ai(a,b,c)
return z}}},a1:{"^":"c;bD:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bb(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.u(this)
x=b.gbD()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.u(this)
x=b.gbD()
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
Y:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
Z:function(a){var z=new T.a1(new Float32Array(4))
z.u(this)
z.Y(0,a)
return z},
U:function(a){var z=new T.a1(new Float32Array(4))
z.u(this)
return z},
gS:function(a){return this.a[2]},
gP:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
gas:function(a){return this.a[3]}}}],["","",,A,{"^":"",
et:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=new R.hZ(0,0,null,null,null,null)
x.d1(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fs(null,w)
u=J.f1(w,"webgl2",P.de(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.X(P.d3('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.f2(u))
if($.eo>0)P.am("I: "+t)
J.eJ(u,0,0,0,1)
J.aY(u,2929)
J.aY(u,2884)
u=new Float32Array(3)
t=D.h8(null)
s=D.hn(w)
r=new T.P(new Float32Array(16))
r.a1()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hy(5,10,0,0,new T.y(u),-0.02,t,s,r,new T.y(q),new T.y(p),new T.y(o),new T.y(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.P(new Float32Array(16))
u.a1()
t=new T.P(new Float32Array(16))
t.a1()
m=new R.hA(w,v,n,50,1,0.1,1000,u,t,new T.P(new Float32Array(16)),P.a_(),"perspective",!1,!0)
m.bk()
m.eg(null)
W.ak(window,"resize",m.gef(),!1,W.a7)
l=G.dr("spheres",v,$.$get$ez(),$.$get$ey())
k=B.fX(3,1,!0)
j=G.dj("icosahedron-3",l.d,4,l.e.x)
j.bf(G.d5(k.d,null))
u=k.cT()
t=j.d
j.y=J.bN(t.a)
s=j.ch.length
if(s<768){j.cx=new Uint8Array(H.bD(u))
j.Q=5121}else if(s<196608){j.cx=new Uint16Array(H.bD(u))
j.Q=5123}else{j.cx=new Uint32Array(H.bD(u))
j.Q=5125}J.bd(t.a,j.e)
u=j.y
s=j.cx
J.bL(t.a,34963,u)
J.cv(t.a,34963,s,35048)
G.iX(k,j)
i=new T.P(new Float32Array(16))
i.a1()
u=new Float32Array(9)
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=1
u[5]=0
u[6]=0
u[7]=0
u[8]=1
t=$.$get$cO()
h=G.di("sphere",t)
s=h.d
s.j(0,"uNormalMatrix",new T.ao(u))
s.j(0,"uModelMatrix",i)
g=G.dr("stars",v,$.$get$ew(),$.$get$ev())
f=G.di("stars",t)
e=y.createElement("canvas")
e.width=64
e.height=64
d=C.E.cz(e,"2d")
c=J.eM(d,32,32,1,32,32,22)
c.addColorStop(0,"gray")
c.addColorStop(1,"black")
d.fillStyle=c
d.fillRect(0,0,64,64)
c=d.createRadialGradient(32,32,1,32,32,6)
c.addColorStop(0,"white")
c.addColorStop(1,"gray")
d.globalAlpha=0.9
d.fillStyle=c
d.arc(32,32,4,0,6.283185307179586,!1)
d.fill("nonzero")
y=f.d
y.j(0,"uTexture",G.d8(v,"Utils::Particles",e,null,3553))
y.j(0,"uPointSize",1000)
u=new T.P(new Float32Array(16))
u.a1()
y.j(0,"uModelMatrix",u)
b=R.ii(g,2000,100)
z.a=0
P.fS([D.hd($.eB)],null,!1).ar(new A.kC(v,h,new A.kB(z,n,i,l,j,h,m,g,b,f,x)))},
kB:{"^":"h:20;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aT(b2)
y.J(b2,z.a)
z.a=y.l(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.v(0,0)||w.v(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b7()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b7()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.v(0,37))y.go+=0.03
else if(v.v(0,39))y.go-=0.03
if(v.v(0,38))y.id+=0.03
else if(v.v(0,40))y.id-=0.03
if(v.v(0,33))y.fy*=0.99
else if(v.v(0,34))y.fy*=1.01
if(v.v(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.b7()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dQ(y.id,-1.4707963267948965,1.4707963267948965)
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
m.ai(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.J(0,t)
l.D(0)
k=m.bW(l)
k.D(0)
j=l.bW(k)
j.D(0)
t=k.aO(v)
u=j.aO(v)
v=l.aO(v)
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
w.c.ad(0)
w.b.ad(0)
x.e=0
x.d=0
x.f=0
x.c.ad(0)
x.b.ad(0)
x=this.c
x.a1()
w=this.d
u=this.e
t=this.f
f=this.r
w.aw(u,[t,f])
x=x.a
x[14]=0
x[13]=0
x[12]=1.5
w.aw(u,[t,f])
this.x.aw(this.y,[this.z,f])
C.a7.gdJ(window).ar(this)
this.Q.d4(z.a)}},
kC:{"^":"h:21;a,b,c",
$1:function(a){this.b.d.j(0,"uTexture",G.d8(this.a,$.eB,J.az(a,0),null,3553))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.h5.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b8(a)}
J.kl=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b8(a)}
J.ae=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b8(a)}
J.bG=function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b8(a)}
J.aT=function(a){if(typeof a=="number")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.km=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.ep=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b8(a)}
J.ay=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kl(a).l(a,b)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).E(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aT(a).ag(a,b)}
J.aW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aT(a).a8(a,b)}
J.eD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aT(a).J(a,b)}
J.az=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)}
J.eE=function(a,b,c,d){return J.e(a).dt(a,b,c,d)}
J.ct=function(a,b){return J.e(a).bE(a,b)}
J.eF=function(a,b,c,d){return J.e(a).bF(a,b,c,d)}
J.cu=function(a,b,c){return J.e(a).bH(a,b,c)}
J.eG=function(a,b){return J.e(a).dL(a,b)}
J.bL=function(a,b,c){return J.e(a).bI(a,b,c)}
J.aX=function(a,b,c){return J.e(a).bK(a,b,c)}
J.bd=function(a,b){return J.e(a).dO(a,b)}
J.eH=function(a,b){return J.e(a).bL(a,b)}
J.eI=function(a,b,c){return J.e(a).bM(a,b,c)}
J.cv=function(a,b,c,d){return J.e(a).bN(a,b,c,d)}
J.eJ=function(a,b,c,d,e){return J.e(a).bQ(a,b,c,d,e)}
J.cw=function(a){return J.e(a).U(a)}
J.cx=function(a,b){return J.ep(a).dR(a,b)}
J.eK=function(a,b){return J.km(a).V(a,b)}
J.bM=function(a,b,c){return J.ae(a).dS(a,b,c)}
J.bN=function(a){return J.e(a).bS(a)}
J.eL=function(a){return J.e(a).bT(a)}
J.eM=function(a,b,c,d,e,f,g){return J.e(a).dU(a,b,c,d,e,f,g)}
J.eN=function(a){return J.e(a).bV(a)}
J.eO=function(a){return J.e(a).dV(a)}
J.eP=function(a,b){return J.e(a).bX(a,b)}
J.bO=function(a,b){return J.e(a).bY(a,b)}
J.eQ=function(a,b,c,d){return J.e(a).bZ(a,b,c,d)}
J.eR=function(a,b,c,d,e){return J.e(a).dX(a,b,c,d,e)}
J.eS=function(a,b,c,d,e){return J.e(a).c_(a,b,c,d,e)}
J.eT=function(a,b,c,d,e,f){return J.e(a).dY(a,b,c,d,e,f)}
J.cy=function(a,b){return J.bG(a).q(a,b)}
J.aY=function(a,b){return J.e(a).c0(a,b)}
J.eU=function(a,b){return J.e(a).c1(a,b)}
J.eV=function(a){return J.e(a).dZ(a)}
J.cz=function(a,b){return J.bG(a).w(a,b)}
J.cA=function(a){return J.e(a).gdK(a)}
J.aA=function(a){return J.e(a).gN(a)}
J.a4=function(a){return J.n(a).gA(a)}
J.aZ=function(a){return J.bG(a).gK(a)}
J.a5=function(a){return J.ae(a).gi(a)}
J.eW=function(a){return J.e(a).gec(a)}
J.eX=function(a){return J.e(a).gaV(a)}
J.cB=function(a){return J.e(a).ga_(a)}
J.eY=function(a){return J.e(a).gek(a)}
J.eZ=function(a){return J.e(a).gcf(a)}
J.f_=function(a){return J.e(a).gas(a)}
J.cC=function(a){return J.e(a).ger(a)}
J.bP=function(a){return J.e(a).gm(a)}
J.bQ=function(a){return J.e(a).gn(a)}
J.cD=function(a){return J.e(a).gC(a)}
J.f0=function(a){return J.e(a).b_(a)}
J.f1=function(a,b,c){return J.e(a).b0(a,b,c)}
J.f2=function(a){return J.e(a).at(a)}
J.f3=function(a){return J.e(a).b1(a)}
J.f4=function(a,b){return J.e(a).b2(a,b)}
J.f5=function(a,b,c){return J.e(a).b3(a,b,c)}
J.cE=function(a,b,c){return J.e(a).b6(a,b,c)}
J.f6=function(a,b){return J.e(a).c6(a,b)}
J.f7=function(a,b,c){return J.e(a).c8(a,b,c)}
J.cF=function(a){return J.bG(a).ee(a)}
J.f8=function(a,b){return J.e(a).san(a,b)}
J.f9=function(a,b,c,d){return J.e(a).bb(a,b,c,d)}
J.fa=function(a,b,c,d,e,f,g){return J.e(a).cb(a,b,c,d,e,f,g)}
J.fb=function(a,b,c,d){return J.e(a).cc(a,b,c,d)}
J.cG=function(a,b,c,d){return J.e(a).cd(a,b,c,d)}
J.cH=function(a){return J.aT(a).el(a)}
J.fc=function(a){return J.ep(a).en(a)}
J.aB=function(a){return J.n(a).k(a)}
J.fd=function(a,b,c,d){return J.e(a).ep(a,b,c,d)}
J.fe=function(a,b,c){return J.e(a).cg(a,b,c)}
J.ff=function(a,b,c){return J.e(a).ci(a,b,c)}
J.bR=function(a,b,c){return J.e(a).cj(a,b,c)}
J.fg=function(a,b,c){return J.e(a).ck(a,b,c)}
J.cI=function(a,b,c){return J.e(a).cl(a,b,c)}
J.cJ=function(a,b,c){return J.e(a).cm(a,b,c)}
J.cK=function(a,b,c){return J.e(a).cn(a,b,c)}
J.cL=function(a,b,c,d){return J.e(a).co(a,b,c,d)}
J.cM=function(a,b,c,d){return J.e(a).cp(a,b,c,d)}
J.fh=function(a,b){return J.e(a).cr(a,b)}
J.fi=function(a,b,c){return J.e(a).eq(a,b,c)}
J.fj=function(a,b,c,d,e,f,g){return J.e(a).cs(a,b,c,d,e,f,g)}
J.fk=function(a,b,c,d,e){return J.e(a).cu(a,b,c,d,e)}
I.aw=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bS.prototype
C.E=W.bg.prototype
C.n=W.fy.prototype
C.F=W.fE.prototype
C.G=J.f.prototype
C.c=J.aG.prototype
C.t=J.da.prototype
C.b=J.db.prototype
C.a=J.aI.prototype
C.i=J.aJ.prototype
C.N=J.aK.prototype
C.Q=H.hs.prototype
C.R=W.hu.prototype
C.x=J.hB.prototype
C.C=W.ia.prototype
C.q=J.b5.prototype
C.a7=W.ik.prototype
C.D=new P.j0()
C.d=new P.jh()
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
C.O=H.x(I.aw(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=I.aw(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.aw([])
C.o=H.x(I.aw(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.x(I.aw(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
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
$.Y=0
$.aC=null
$.cP=null
$.er=null
$.ei=null
$.ex=null
$.bF=null
$.bH=null
$.cq=null
$.ar=null
$.aP=null
$.aQ=null
$.cl=!1
$.q=C.d
$.a6=null
$.bX=null
$.d1=null
$.d0=null
$.cZ=null
$.cY=null
$.cX=null
$.cW=null
$.eo=0
$.eB="sphere.png"
$.js="  vec3 u = normalize(vec3(uModelMatrix * vec4(aPosition, 1.0)));\n  vec3 n = normalize(uNormalMatrix * aNormal );\n  vec3 r = reflect( u, n );\n  r.z += 1.0;\n  float m = 2.0 * length(r);\n  vTexUV = vec2(r.x/m + 0.5, r.y/m + 0.5);\n"
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
I.$lazy(y,x,w)}})(["cU","$get$cU",function(){return H.eq("_$dart_dartClosure")},"c4","$get$c4",function(){return H.eq("_$dart_js")},"dC","$get$dC",function(){return H.a0(H.bB({
toString:function(){return"$receiver$"}}))},"dD","$get$dD",function(){return H.a0(H.bB({$method$:null,
toString:function(){return"$receiver$"}}))},"dE","$get$dE",function(){return H.a0(H.bB(null))},"dF","$get$dF",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dJ","$get$dJ",function(){return H.a0(H.bB(void 0))},"dK","$get$dK",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dH","$get$dH",function(){return H.a0(H.dI(null))},"dG","$get$dG",function(){return H.a0(function(){try{null.$method$}catch(z){return z.message}}())},"dM","$get$dM",function(){return H.a0(H.dI(void 0))},"dL","$get$dL",function(){return H.a0(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cg","$get$cg",function(){return P.ip()},"c_","$get$c_",function(){return P.iK(null,P.b1)},"aR","$get$aR",function(){return[]},"cT","$get$cT",function(){return{}},"dZ","$get$dZ",function(){return P.c7(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"ci","$get$ci",function(){return P.a_()},"du","$get$du",function(){return new G.dA(1281,0,4294967295)},"cO","$get$cO",function(){return new G.dz(32774,770,769)},"V","$get$V",function(){return P.de(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dR","$get$dR",function(){return C.D},"ew","$get$ew",function(){var z=G.br("PointSpritesV")
z.bd(["aPosition"])
z.aj(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ak(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"ev","$get$ev",function(){var z=G.br("PointSpritesF")
z.aj(["uTexture"])
z.ak(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"d6","$get$d6",function(){return[G.A(0,11,5),G.A(0,5,1),G.A(0,1,7),G.A(0,7,10),G.A(0,10,11),G.A(1,5,9),G.A(5,11,4),G.A(11,10,2),G.A(10,7,6),G.A(7,1,8),G.A(3,9,4),G.A(3,4,2),G.A(3,2,6),G.A(3,6,8),G.A(3,8,9),G.A(4,9,5),G.A(2,4,11),G.A(6,2,10),G.A(8,6,7),G.A(9,8,1)]},"eA","$get$eA",function(){return(1+P.kG(5))/2},"d7","$get$d7",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$eA()
y=T.Q(-1,z,0)
y.D(0)
x=T.Q(1,z,0)
x.D(0)
if(typeof z!=="number")return z.eu()
w=T.Q(-1,-z,0)
w.D(0)
v=T.Q(1,-z,0)
v.D(0)
u=T.Q(0,-1,z)
u.D(0)
t=T.Q(0,1,z)
t.D(0)
s=T.Q(0,-1,-z)
s.D(0)
r=T.Q(0,1,-z)
r.D(0)
q=T.Q(z,0,-1)
q.D(0)
p=T.Q(z,0,1)
p.D(0)
o=T.Q(-z,0,-1)
o.D(0)
z=T.Q(-z,0,1)
z.D(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"ez","$get$ez",function(){var z=G.br("sphereV")
z.bd(["aPosition","aNormal"])
z.aj(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.be(["vTexUV"])
z.ak(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);",$.js])
return z},"ey","$get$ey",function(){var z=G.br("sphereF")
z.be(["vTexUV"])
z.aj(["uTexture"])
z.ak(["oFragColor = texture(uTexture, vTexUV);"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.L]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.D]},{func:1,args:[W.bm]},{func:1,ret:P.cn,args:[W.an,P.l,P.l,W.ch]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aN]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aN]},{func:1,v:true,args:[W.r,W.r]},{func:1,v:true,args:[W.a7]},{func:1,args:[W.aO]},{func:1,args:[P.D,P.c]},{func:1,v:true,args:[P.aU]},{func:1,args:[P.i]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kI(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(A.et,[])
else A.et([])})})()
//# sourceMappingURL=bubble.dart.js.map
