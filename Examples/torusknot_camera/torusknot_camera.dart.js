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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bT"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bT"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bT(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ae=function(){}
var dart=[["","",,H,{"^":"",k8:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
bW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aL:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bV==null){H.iY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.d2("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bz()]
if(v!=null)return v
v=H.j1(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$bz(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
f:{"^":"c;",
B:function(a,b){return a===b},
gw:function(a){return H.as(a)},
k:["bW",function(a){return"Instance of '"+H.at(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
f2:{"^":"f;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isiJ:1},
f4:{"^":"f;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaG:1},
bA:{"^":"f;",
gw:function(a){return 0},
k:["bX",function(a){return String(a)}]},
fl:{"^":"bA;"},
aK:{"^":"bA;"},
aq:{"^":"bA;",
k:function(a){var z=a[$.$get$ch()]
return z==null?this.bX(a):J.aD(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
am:{"^":"f;$ti",
cE:function(a,b){var z,y
if(!!a.fixed$length)H.O(P.q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.I(a))}},
X:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
aC:function(a,b){return H.cL(a,b,null,H.D(a,0))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
gd1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.f0())},
bS:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.O(P.q("setRange"))
P.ft(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.aE()
if(typeof b!=="number")return H.v(b)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.aC(d,e).da(0,!1)
x=0}y=J.a6(w)
v=y.gi(w)
if(typeof v!=="number")return H.v(v)
if(x+z>v)throw H.a(H.f1())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
Z:function(a,b,c,d){return this.bS(a,b,c,d,0)},
bT:function(a,b){if(!!a.immutable$list)H.O(P.q("sort"))
H.fJ(a,J.iw())},
aa:function(a){return this.bT(a,null)},
k:function(a){return P.by(a,"[","]")},
gG:function(a){return new J.es(a,a.length,0,null,[H.D(a,0)])},
gw:function(a){return H.as(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.O(P.q("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.b0(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.X(a,b))
if(b>=a.length||b<0)throw H.a(H.X(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.O(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.X(a,b))
if(b>=a.length||b<0)throw H.a(H.X(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.x([],[H.D(a,0)])
this.si(y,z)
this.Z(y,0,a.length,a)
this.Z(y,a.length,z,b)
return y},
$isl:1,
$asl:I.ae,
$ish:1,
p:{
an:function(a){a.fixed$length=Array
return a},
k6:[function(a,b){return J.dT(a,b)},"$2","iw",8,0,16]}},
k7:{"^":"am;$ti"},
es:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ao:{"^":"f;",
R:function(a,b){var z
if(typeof b!=="number")throw H.a(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gap(b)
if(this.gap(a)===z)return 0
if(this.gap(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gap:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.T(b))
return a+b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.T(b))
return a/b},
bY:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b0(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.b0(a,b)},
b0:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.q("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
aZ:function(a,b){var z
if(a>0)z=this.cw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cw:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.a(H.T(b))
return a<b},
Y:function(a,b){if(typeof b!=="number")throw H.a(H.T(b))
return a>b},
$isa5:1,
$isaz:1},
cp:{"^":"ao;",$isE:1},
f3:{"^":"ao;"},
ap:{"^":"f;",
cL:function(a,b){if(b>=a.length)H.O(H.X(a,b))
return a.charCodeAt(b)},
aQ:function(a,b){if(b>=a.length)throw H.a(H.X(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aG:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.O(H.T(c))
if(b<0)throw H.a(P.b1(b,null,null))
if(typeof c!=="number")return H.v(c)
if(b>c)throw H.a(P.b1(b,null,null))
if(c>a.length)throw H.a(P.b1(c,null,null))
return a.substring(b,c)},
bU:function(a,b){return this.aG(a,b,null)},
R:function(a,b){var z
if(typeof b!=="string")throw H.a(H.T(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.X(a,b))
return a[b]},
$isl:1,
$asl:I.ae,
$isp:1}}],["","",,H,{"^":"",
f0:function(){return new P.bG("No element")},
f1:function(){return new P.bG("Too few elements")},
fJ:function(a,b){var z=J.Z(a)
if(typeof z!=="number")return z.aE()
H.aI(a,0,z-1,b)},
aI:function(a,b,c,d){if(c-b<=32)H.fI(a,b,c,d)
else H.fH(a,b,c,d)},
fI:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a6(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.H(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
fH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.V(c-b+1,6)
y=b+z
x=c-z
w=C.b.V(b+c,2)
v=w-z
u=w+z
t=J.a6(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.H(d.$2(s,r),0)){n=r
r=s
s=n}if(J.H(d.$2(p,o),0)){n=o
o=p
p=n}if(J.H(d.$2(s,q),0)){n=q
q=s
s=n}if(J.H(d.$2(r,q),0)){n=q
q=r
r=n}if(J.H(d.$2(s,p),0)){n=p
p=s
s=n}if(J.H(d.$2(q,p),0)){n=p
p=q
q=n}if(J.H(d.$2(r,o),0)){n=o
o=r
r=n}if(J.H(d.$2(r,q),0)){n=q
q=r
r=n}if(J.H(d.$2(p,o),0)){n=o
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
h=J.o(i)
if(h.B(i,0))continue
if(h.N(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.bf(i)
if(h.Y(i,0)){--l
continue}else{g=l-1
if(h.N(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aO(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aO(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aI(a,b,m-2,d)
H.aI(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.K(d.$2(t.h(a,m),r),0);)++m
for(;J.K(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.K(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aO(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aI(a,m,l,d)}else H.aI(a,m,l,d)},
cj:{"^":"eZ;$ti"},
cu:{"^":"cj;$ti",
gG:function(a){return new H.cv(this,this.gi(this),0,null,[H.dx(this,"cu",0)])},
v:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.I(this))}}},
fU:{"^":"cu;a,b,c,$ti",
cc:function(a,b,c,d){},
gcq:function(){var z=J.Z(this.a)
return z},
gcz:function(){var z,y
z=J.Z(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.Z(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gcz()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.v(b)
y=z+b
if(!(b<0)){z=this.gcq()
if(typeof z!=="number")return H.v(z)
z=y>=z}else z=!0
if(z)throw H.a(P.u(b,this,"index",null,null))
return J.e2(this.a,y)},
da:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a6(y)
w=x.gi(y)
if(typeof w!=="number")return w.aE()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.x(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.N()
if(u<w)throw H.a(P.I(this))}return t},
p:{
cL:function(a,b,c,d){var z=new H.fU(a,b,c,[d])
z.cc(a,b,c,d)
return z}}},
cv:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a6(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.I(z))
w=this.c
if(typeof x!=="number")return H.v(x)
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
aY:{"^":"c;$ti"}}],["","",,H,{"^":"",
iS:function(a){return init.types[a]},
j0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aD(a)
if(typeof z!=="string")throw H.a(H.T(a))
return z},
as:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
at:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.o(a).$isaK){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.l.aQ(w,0)===36)w=C.l.bU(w,1)
r=H.bi(H.af(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
C:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fs:function(a){return a.b?H.C(a).getUTCFullYear()+0:H.C(a).getFullYear()+0},
fq:function(a){return a.b?H.C(a).getUTCMonth()+1:H.C(a).getMonth()+1},
fm:function(a){return a.b?H.C(a).getUTCDate()+0:H.C(a).getDate()+0},
fn:function(a){return a.b?H.C(a).getUTCHours()+0:H.C(a).getHours()+0},
fp:function(a){return a.b?H.C(a).getUTCMinutes()+0:H.C(a).getMinutes()+0},
fr:function(a){return a.b?H.C(a).getUTCSeconds()+0:H.C(a).getSeconds()+0},
fo:function(a){return a.b?H.C(a).getUTCMilliseconds()+0:H.C(a).getMilliseconds()+0},
v:function(a){throw H.a(H.T(a))},
d:function(a,b){if(a==null)J.Z(a)
throw H.a(H.X(a,b))},
X:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a_(!0,b,"index",null)
z=J.Z(a)
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.u(b,a,"index",null,z)
return P.b1(b,"index",null)},
T:function(a){return new P.a_(!0,a,null,null)},
iK:function(a){if(typeof a!=="number")throw H.a(H.T(a))
return a},
a:function(a){var z
if(a==null)a=new P.cC()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dH})
z.name=""}else z.toString=H.dH
return z},
dH:function(){return J.aD(this.dartException)},
O:function(a){throw H.a(a)},
A:function(a){throw H.a(P.I(a))},
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.j7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.aZ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bB(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cB(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$cR()
u=$.$get$cS()
t=$.$get$cT()
s=$.$get$cU()
r=$.$get$cY()
q=$.$get$cZ()
p=$.$get$cW()
$.$get$cV()
o=$.$get$d0()
n=$.$get$d_()
m=v.H(y)
if(m!=null)return z.$1(H.bB(y,m))
else{m=u.H(y)
if(m!=null){m.method="call"
return z.$1(H.bB(y,m))}else{m=t.H(y)
if(m==null){m=s.H(y)
if(m==null){m=r.H(y)
if(m==null){m=q.H(y)
if(m==null){m=p.H(y)
if(m==null){m=s.H(y)
if(m==null){m=o.H(y)
if(m==null){m=n.H(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cB(y,m))}}return z.$1(new H.h1(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cH()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a_(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cH()
return a},
a7:function(a){var z
if(a==null)return new H.dg(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dg(a,null)},
iO:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
j_:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cl("Unsupported number of arguments for wrapped closure"))},
W:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j_)
a.$identity=z
return z},
eC:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.fv(z).r}else x=c
w=d?Object.create(new H.fL().constructor.prototype):Object.create(new H.bs(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.P
$.P=J.a8(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cg(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.iS,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.ce:H.bt
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cg(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
ez:function(a,b,c,d){var z=H.bt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cg:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ez(y,!w,z,b)
if(y===0){w=$.P
$.P=J.a8(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ak
if(v==null){v=H.aS("self")
$.ak=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.P
$.P=J.a8(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ak
if(v==null){v=H.aS("self")
$.ak=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
eA:function(a,b,c,d){var z,y
z=H.bt
y=H.ce
switch(b?-1:a){case 0:throw H.a(H.fB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eB:function(a,b){var z,y,x,w,v,u,t,s
z=$.ak
if(z==null){z=H.aS("self")
$.ak=z}y=$.cd
if(y==null){y=H.aS("receiver")
$.cd=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eA(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.P
$.P=J.a8(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.P
$.P=J.a8(y,1)
return new Function(z+H.b(y)+"}")()},
bT:function(a,b,c,d,e,f){var z,y
z=J.an(b)
y=!!J.o(c).$ish?J.an(c):c
return H.eC(a,z,y,!!d,e,f)},
j4:function(a,b){var z=J.a6(b)
throw H.a(H.cf(a,z.aG(b,3,z.gi(b))))},
Y:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.j4(a,b)},
bU:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dt:function(a,b){var z,y
if(a==null)return!1
z=H.bU(J.o(a))
if(z==null)y=!1
else y=H.dz(z,b)
return y},
iE:function(a){var z
if(a instanceof H.j){z=H.bU(J.o(a))
if(z!=null)return H.bX(z,null)
return"Closure"}return H.at(a)},
j6:function(a){throw H.a(new P.eF(a))},
dw:function(a){return init.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
af:function(a){if(a==null)return
return a.$ti},
lf:function(a,b,c){return H.aA(a["$as"+H.b(c)],H.af(b))},
bg:function(a,b,c,d){var z=H.aA(a["$as"+H.b(c)],H.af(b))
return z==null?null:z[d]},
dx:function(a,b,c){var z=H.aA(a["$as"+H.b(b)],H.af(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.af(a)
return z==null?null:z[b]},
bX:function(a,b){var z=H.ah(a,b)
return z},
ah:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bi(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ah(z,b)
return H.iv(a,b)}return"unknown-reified-type"},
iv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ah(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ah(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ah(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.iN(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ah(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bi:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bH("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ah(u,c)}return w?"":"<"+z.k(0)+">"},
iR:function(a){var z,y,x
if(a instanceof H.j){z=H.bU(J.o(a))
if(z!=null)return H.bX(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bi(a.$ti,0,null)
return y+x},
aA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bS:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.af(a)
y=J.o(a)
if(y[b]==null)return!1
return H.dq(H.aA(y[d],z),c)},
aN:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bS(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bi(c,0,null)
throw H.a(H.cf(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
dq:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.G(a[y],b[y]))return!1
return!0},
ld:function(a,b,c){return a.apply(b,H.aA(J.o(b)["$as"+H.b(c)],H.af(b)))},
G:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aG")return!0
if('func' in b)return H.dz(a,b)
if('func' in a)return b.builtin$cls==="k_"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.bX(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dq(H.aA(u,z),x)},
dp:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.G(z,v)||H.G(v,z)))return!1}return!0},
iF:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.an(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.G(v,u)||H.G(u,v)))return!1}return!0},
dz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.G(z,y)||H.G(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dp(x,w,!1))return!1
if(!H.dp(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.G(o,n)||H.G(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.G(o,n)||H.G(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.G(o,n)||H.G(n,o)))return!1}}return H.iF(a.named,b.named)},
le:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j1:function(a){var z,y,x,w,v,u
z=$.dy.$1(a)
y=$.bd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bh[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dn.$2(a,z)
if(z!=null){y=$.bd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bh[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bj(x)
$.bd[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bh[z]=x
return x}if(v==="-"){u=H.bj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dB(a,x)
if(v==="*")throw H.a(P.d2(z))
if(init.leafTags[z]===true){u=H.bj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dB(a,x)},
dB:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bj:function(a){return J.bW(a,!1,null,!!a.$isn)},
j3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bj(z)
else return J.bW(z,c,null,null)},
iY:function(){if(!0===$.bV)return
$.bV=!0
H.iZ()},
iZ:function(){var z,y,x,w,v,u,t,s
$.bd=Object.create(null)
$.bh=Object.create(null)
H.iU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dE.$1(v)
if(u!=null){t=H.j3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iU:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.ad(C.z,H.ad(C.E,H.ad(C.o,H.ad(C.o,H.ad(C.D,H.ad(C.A,H.ad(C.B(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dy=new H.iV(v)
$.dn=new H.iW(u)
$.dE=new H.iX(t)},
ad:function(a,b){return a(b)||b},
fu:{"^":"c;a,b,c,d,e,f,r,x",p:{
fv:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.an(z)
y=z[0]
x=z[1]
return new H.fu(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
h_:{"^":"c;a,b,c,d,e,f",
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
R:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.h_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
b9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fi:{"^":"B;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
cB:function(a,b){return new H.fi(a,b==null?null:b.method)}}},
f5:{"^":"B;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bB:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.f5(a,y,z?null:b.receiver)}}},
h1:{"^":"B;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
j7:{"^":"j:1;a",
$1:function(a){if(!!J.o(a).$isB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dg:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isau:1},
j:{"^":"c;",
k:function(a){return"Closure '"+H.at(this).trim()+"'"},
gbQ:function(){return this},
gbQ:function(){return this}},
cN:{"^":"j;"},
fL:{"^":"cN;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bs:{"^":"cN;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bs))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.as(this.a)
else y=typeof z!=="object"?J.a9(z):H.as(z)
return(y^H.as(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.at(z)+"'")},
p:{
bt:function(a){return a.a},
ce:function(a){return a.c},
aS:function(a){var z,y,x,w,v
z=new H.bs("self","target","receiver","name")
y=J.an(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ex:{"^":"B;a",
k:function(a){return this.a},
p:{
cf:function(a,b){return new H.ex("CastError: "+H.b(P.bv(a))+": type '"+H.iE(a)+"' is not a subtype of type '"+b+"'")}}},
fA:{"^":"B;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
fB:function(a){return new H.fA(a)}}},
d1:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.a9(this.a)},
B:function(a,b){if(b==null)return!1
return b instanceof H.d1&&J.K(this.a,b.a)}},
cq:{"^":"f9;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gL:function(a){return new H.f7(this,[H.D(this,0)])},
a6:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.aV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.aV(y,b)}else return this.d_(b)},
d_:function(a){var z=this.d
if(z==null)return!1
return this.ao(this.af(z,J.a9(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a3(z,b)
x=y==null?null:y.gW()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a3(w,b)
x=y==null?null:y.gW()
return x}else return this.d0(b)},
d0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.af(z,J.a9(a)&0x3ffffff)
x=this.ao(y,a)
if(x<0)return
return y[x].gW()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ah()
this.b=z}this.aP(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ah()
this.c=y}this.aP(y,b,c)}else{x=this.d
if(x==null){x=this.ah()
this.d=x}w=J.a9(b)&0x3ffffff
v=this.af(x,w)
if(v==null)this.al(x,w,[this.ai(b,c)])
else{u=this.ao(v,b)
if(u>=0)v[u].sW(c)
else v.push(this.ai(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.I(this))
z=z.c}},
aP:function(a,b,c){var z=this.a3(a,b)
if(z==null)this.al(a,b,this.ai(b,c))
else z.sW(c)},
aX:function(){this.r=this.r+1&67108863},
ai:function(a,b){var z,y
z=new H.f6(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aX()
return z},
ao:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gcZ(),b))return y
return-1},
k:function(a){return P.cw(this)},
a3:function(a,b){return a[b]},
af:function(a,b){return a[b]},
al:function(a,b,c){a[b]=c},
co:function(a,b){delete a[b]},
aV:function(a,b){return this.a3(a,b)!=null},
ah:function(){var z=Object.create(null)
this.al(z,"<non-identifier-key>",z)
this.co(z,"<non-identifier-key>")
return z}},
f6:{"^":"c;cZ:a<,W:b@,c,d"},
f7:{"^":"cj;a,$ti",
gi:function(a){return this.a.a},
gG:function(a){var z,y
z=this.a
y=new H.a0(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.I(z))
y=y.c}}},
a0:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
iV:{"^":"j:1;a",
$1:function(a){return this.a(a)}},
iW:{"^":"j:6;a",
$2:function(a,b){return this.a(a,b)}},
iX:{"^":"j:7;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
iN:function(a){return J.an(H.x(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ba:function(a){var z,y,x
if(!!J.o(a).$isl)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
S:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.X(b,a))},
fh:{"^":"f;","%":"DataView;ArrayBufferView;bD|da|db|cz|dc|dd|a1"},
bD:{"^":"fh;",
gi:function(a){return a.length},
$isl:1,
$asl:I.ae,
$isn:1,
$asn:I.ae},
cz:{"^":"db;",
h:function(a,b){H.S(b,a,a.length)
return a[b]},
j:function(a,b,c){H.S(b,a,a.length)
a[b]=c},
$asaY:function(){return[P.a5]},
$asi:function(){return[P.a5]},
$ish:1,
$ash:function(){return[P.a5]},
"%":"Float64Array"},
a1:{"^":"dd;",
j:function(a,b,c){H.S(b,a,a.length)
a[b]=c},
$asaY:function(){return[P.E]},
$asi:function(){return[P.E]},
$ish:1,
$ash:function(){return[P.E]}},
fg:{"^":"cz;",$isbw:1,"%":"Float32Array"},
kl:{"^":"a1;",
h:function(a,b){H.S(b,a,a.length)
return a[b]},
"%":"Int16Array"},
km:{"^":"a1;",
h:function(a,b){H.S(b,a,a.length)
return a[b]},
$iseY:1,
"%":"Int32Array"},
kn:{"^":"a1;",
h:function(a,b){H.S(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ko:{"^":"a1;",
h:function(a,b){H.S(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kp:{"^":"a1;",
h:function(a,b){H.S(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kq:{"^":"a1;",
gi:function(a){return a.length},
h:function(a,b){H.S(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kr:{"^":"a1;",
gi:function(a){return a.length},
h:function(a,b){H.S(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
da:{"^":"bD+i;"},
db:{"^":"da+aY;"},
dc:{"^":"bD+i;"},
dd:{"^":"dc+aY;"}}],["","",,P,{"^":"",
h8:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iG()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.W(new P.ha(z),1)).observe(y,{childList:true})
return new P.h9(z,y,x)}else if(self.setImmediate!=null)return P.iH()
return P.iI()},
l1:[function(a){self.scheduleImmediate(H.W(new P.hb(a),0))},"$1","iG",4,0,4],
l2:[function(a){self.setImmediate(H.W(new P.hc(a),0))},"$1","iH",4,0,4],
l3:[function(a){P.i8(0,a)},"$1","iI",4,0,4],
iz:function(a,b){if(H.dt(a,{func:1,args:[P.aG,P.aG]})){b.toString
return a}else{b.toString
return a}},
iy:function(){var z,y
for(;z=$.ac,z!=null;){$.ax=null
y=z.b
$.ac=y
if(y==null)$.aw=null
z.a.$0()}},
lc:[function(){$.bQ=!0
try{P.iy()}finally{$.ax=null
$.bQ=!1
if($.ac!=null)$.$get$bN().$1(P.dr())}},"$0","dr",0,0,3],
dl:function(a){var z=new P.d4(a,null)
if($.ac==null){$.aw=z
$.ac=z
if(!$.bQ)$.$get$bN().$1(P.dr())}else{$.aw.b=z
$.aw=z}},
iD:function(a){var z,y,x
z=$.ac
if(z==null){P.dl(a)
$.ax=$.aw
return}y=new P.d4(a,null)
x=$.ax
if(x==null){y.b=z
$.ax=y
$.ac=y}else{y.b=x.b
x.b=y
$.ax=y
if(y.b==null)$.aw=y}},
j5:function(a){var z=$.t
if(C.f===z){P.bc(null,null,C.f,a)
return}z.toString
P.bc(null,null,z,z.b6(a))},
iC:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.ai(u)
y=H.a7(u)
$.t.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aj(x)
w=t
v=x.gO()
c.$2(w,v)}}},
ir:function(a,b,c,d){var z=a.cK(0)
if(!!J.o(z).$isaF&&z!==$.$get$cn())z.de(new P.iu(b,c,d))
else b.U(c,d)},
is:function(a,b){return new P.it(a,b)},
h6:function(){return $.t},
bb:function(a,b,c,d,e){var z={}
z.a=d
P.iD(new P.iA(z,e))},
dj:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
dk:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
iB:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
bc:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.b6(d):c.cH(d)
P.dl(d)},
ha:{"^":"j:1;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
h9:{"^":"j:8;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hb:{"^":"j:0;a",
$0:function(){this.a.$0()}},
hc:{"^":"j:0;a",
$0:function(){this.a.$0()}},
i7:{"^":"c;a,b,c",
ck:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.W(new P.i9(this,b),0),a)
else throw H.a(P.q("`setTimeout()` not found."))},
p:{
i8:function(a,b){var z=new P.i7(!0,null,0)
z.ck(a,b)
return z}}},
i9:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ji:{"^":"c;$ti"},
he:{"^":"c;$ti"},
i4:{"^":"he;a,$ti",
cM:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.fK("Future already completed"))
z.a1(b)}},
d7:{"^":"c;aj:a<,b,c,d,e,$ti",
gcD:function(){return this.b.b},
gbs:function(){return(this.c&1)!==0},
gcY:function(){return(this.c&2)!==0},
gbr:function(){return this.c===8},
cW:function(a){return this.b.b.aq(this.d,a)},
d2:function(a){if(this.c!==6)return!0
return this.b.b.aq(this.d,J.aj(a))},
cV:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.dt(z,{func:1,args:[P.c,P.au]}))return x.d7(z,y.gF(a),a.gO())
else return x.aq(z,y.gF(a))},
cX:function(){return this.b.b.bx(this.d)}},
a3:{"^":"c;b_:a<,b,cv:c<,$ti",
cj:function(a,b){this.a=4
this.c=a},
gcs:function(){return this.a===2},
gag:function(){return this.a>=4},
bC:function(a,b){var z,y,x
z=$.t
if(z!==C.f){z.toString
if(b!=null)b=P.iz(b,z)}y=new P.a3(0,z,null,[null])
x=b==null?1:3
this.ab(new P.d7(null,y,x,a,b,[H.D(this,0),null]))
return y},
bB:function(a){return this.bC(a,null)},
de:function(a){var z,y
z=$.t
y=new P.a3(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.D(this,0)
this.ab(new P.d7(null,y,8,a,null,[z,z]))
return y},
ab:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gag()){y.ab(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bc(null,null,z,new P.hp(this,a))}},
aY:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaj()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gag()){v.aY(a)
return}this.a=v.a
this.c=v.c}z.a=this.ak(a)
y=this.b
y.toString
P.bc(null,null,y,new P.hu(z,this))}},
a4:function(){var z=this.c
this.c=null
return this.ak(z)},
ak:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaj()
z.a=y}return y},
a1:function(a){var z,y,x
z=this.$ti
y=H.bS(a,"$isaF",z,"$asaF")
if(y){z=H.bS(a,"$isa3",z,null)
if(z)P.d8(a,this)
else P.hq(a,this)}else{x=this.a4()
this.a=4
this.c=a
P.av(this,x)}},
U:[function(a,b){var z=this.a4()
this.a=8
this.c=new P.aR(a,b)
P.av(this,z)},function(a){return this.U(a,null)},"dg","$2","$1","gaT",4,2,9],
$isaF:1,
p:{
hq:function(a,b){var z,y,x
b.a=1
try{a.bC(new P.hr(b),new P.hs(b))}catch(x){z=H.ai(x)
y=H.a7(x)
P.j5(new P.ht(b,z,y))}},
d8:function(a,b){var z
for(;a.gcs();)a=a.c
if(a.gag()){z=b.a4()
b.a=a.a
b.c=a.c
P.av(b,z)}else{z=b.c
b.a=2
b.c=a
a.aY(z)}},
av:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aj(v)
t=v.gO()
y.toString
P.bb(null,null,y,u,t)}return}for(;b.gaj()!=null;b=s){s=b.a
b.a=null
P.av(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbs()||b.gbr()){q=b.gcD()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aj(v)
t=v.gO()
y.toString
P.bb(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gbr())new P.hx(z,x,b,w).$0()
else if(y){if(b.gbs())new P.hw(x,b,r).$0()}else if(b.gcY())new P.hv(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.o(y).$isaF){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.ak(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.d8(y,o)
return}}o=b.b
b=o.a4()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
hp:{"^":"j:0;a,b",
$0:function(){P.av(this.a,this.b)}},
hu:{"^":"j:0;a,b",
$0:function(){P.av(this.b,this.a.a)}},
hr:{"^":"j:1;a",
$1:function(a){var z=this.a
z.a=0
z.a1(a)}},
hs:{"^":"j:10;a",
$2:function(a,b){this.a.U(a,b)},
$1:function(a){return this.$2(a,null)}},
ht:{"^":"j:0;a,b,c",
$0:function(){this.a.U(this.b,this.c)}},
hx:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.cX()}catch(w){y=H.ai(w)
x=H.a7(w)
if(this.d){v=J.aj(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aR(y,x)
u.a=!0
return}if(!!J.o(z).$isaF){if(z instanceof P.a3&&z.gb_()>=4){if(z.gb_()===8){v=this.b
v.b=z.gcv()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bB(new P.hy(t))
v.a=!1}}},
hy:{"^":"j:1;a",
$1:function(a){return this.a}},
hw:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.cW(this.c)}catch(x){z=H.ai(x)
y=H.a7(x)
w=this.a
w.b=new P.aR(z,y)
w.a=!0}}},
hv:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.d2(z)===!0&&w.e!=null){v=this.b
v.b=w.cV(z)
v.a=!1}}catch(u){y=H.ai(u)
x=H.a7(u)
w=this.a
v=J.aj(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aR(y,x)
s.a=!0}}},
d4:{"^":"c;a,b"},
cJ:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.a3(0,$.t,null,[null])
z.a=null
z.a=this.bu(new P.fQ(z,this,b,y),!0,new P.fR(y),y.gaT())
return y},
gi:function(a){var z,y
z={}
y=new P.a3(0,$.t,null,[P.E])
z.a=0
this.bu(new P.fS(z),!0,new P.fT(z,y),y.gaT())
return y}},
fQ:{"^":"j;a,b,c,d",
$1:function(a){P.iC(new P.fO(this.c,a),new P.fP(),P.is(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.dx(this.b,"cJ",0)]}}},
fO:{"^":"j:0;a,b",
$0:function(){return this.a.$1(this.b)}},
fP:{"^":"j:1;",
$1:function(a){}},
fR:{"^":"j:0;a",
$0:function(){this.a.a1(null)}},
fS:{"^":"j:1;a",
$1:function(a){++this.a.a}},
fT:{"^":"j:0;a,b",
$0:function(){this.b.a1(this.a.a)}},
fN:{"^":"c;$ti"},
iu:{"^":"j:0;a,b,c",
$0:function(){return this.a.U(this.b,this.c)}},
it:{"^":"j:11;a,b",
$2:function(a,b){P.ir(this.a,this.b,a,b)}},
aR:{"^":"c;F:a>,O:b<",
k:function(a){return H.b(this.a)},
$isB:1},
ie:{"^":"c;"},
iA:{"^":"j:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cC()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aD(y)
throw x}},
hT:{"^":"ie;",
d8:function(a){var z,y,x
try{if(C.f===$.t){a.$0()
return}P.dj(null,null,this,a)}catch(x){z=H.ai(x)
y=H.a7(x)
P.bb(null,null,this,z,y)}},
d9:function(a,b){var z,y,x
try{if(C.f===$.t){a.$1(b)
return}P.dk(null,null,this,a,b)}catch(x){z=H.ai(x)
y=H.a7(x)
P.bb(null,null,this,z,y)}},
cH:function(a){return new P.hV(this,a)},
b6:function(a){return new P.hU(this,a)},
cI:function(a){return new P.hW(this,a)},
h:function(a,b){return},
bx:function(a){if($.t===C.f)return a.$0()
return P.dj(null,null,this,a)},
aq:function(a,b){if($.t===C.f)return a.$1(b)
return P.dk(null,null,this,a,b)},
d7:function(a,b,c){if($.t===C.f)return a.$2(b,c)
return P.iB(null,null,this,a,b,c)}},
hV:{"^":"j:0;a,b",
$0:function(){return this.a.bx(this.b)}},
hU:{"^":"j:0;a,b",
$0:function(){return this.a.d8(this.b)}},
hW:{"^":"j:1;a,b",
$1:function(a){return this.a.d9(this.b,a)}}}],["","",,P,{"^":"",
Q:function(){return new H.cq(0,null,null,null,null,null,0,[null,null])},
cs:function(a){return H.iO(a,new H.cq(0,null,null,null,null,null,0,[null,null]))},
ct:function(a,b,c,d){return new P.hG(0,null,null,null,null,null,0,[d])},
f_:function(a,b,c){var z,y
if(P.bR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$ay()
y.push(a)
try{P.ix(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.cK(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
by:function(a,b,c){var z,y,x
if(P.bR(a))return b+"..."+c
z=new P.bH(b)
y=$.$get$ay()
y.push(a)
try{x=z
x.a=P.cK(x.gP(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
bR:function(a){var z,y
for(z=0;y=$.$get$ay(),z<y.length;++z)if(a===y[z])return!0
return!1},
ix:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gG(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gC(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.t();t=s,s=r){r=z.gC(z);++x
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
f8:function(a,b){var z,y
z=P.ct(null,null,null,b)
for(y=J.bo(a);y.t();)z.b2(0,y.gC(y))
return z},
cw:function(a){var z,y,x
z={}
if(P.bR(a))return"{...}"
y=new P.bH("")
try{$.$get$ay().push(a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.c1(a,new P.fa(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.$get$ay()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
hG:{"^":"hA;a,b,c,d,e,f,r,$ti",
gG:function(a){var z=new P.bO(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
cN:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cn(b)},
cn:function(a){var z=this.d
if(z==null)return!1
return this.aW(z[this.aU(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.I(this))
z=z.b}},
b2:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bP()
this.b=z}return this.aR(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bP()
this.c=y}return this.aR(y,b)}else return this.cl(0,b)},
cl:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bP()
this.d=z}y=this.aU(b)
x=z[y]
if(x==null)z[y]=[this.ac(b)]
else{if(this.aW(x,b)>=0)return!1
x.push(this.ac(b))}return!0},
aR:function(a,b){if(a[b]!=null)return!1
a[b]=this.ac(b)
return!0},
aS:function(){this.r=this.r+1&67108863},
ac:function(a){var z,y
z=new P.hH(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aS()
return z},
aU:function(a){return J.a9(a)&0x3ffffff},
aW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gcp(),b))return y
return-1},
p:{
bP:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
hH:{"^":"c;cp:a<,b,c"},
bO:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
hA:{"^":"fC;$ti"},
ka:{"^":"c;$ti"},
i:{"^":"c;$ti",
gG:function(a){return new H.cv(a,this.gi(a),0,null,[H.bg(this,a,"i",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.I(a))}},
cU:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.v(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.I(a))}return y},
aC:function(a,b){return H.cL(a,b,null,H.bg(this,a,"i",0))},
l:function(a,b){var z,y,x
z=H.x([],[H.bg(this,a,"i",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.Z(z,0,this.gi(a),a)
C.c.Z(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.by(a,"[","]")}},
f9:{"^":"M;$ti"},
fa:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
M:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.bo(this.gL(a));z.t();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.Z(this.gL(a))},
k:function(a){return P.cw(a)}},
fD:{"^":"c;$ti",
k:function(a){return P.by(this,"{","}")},
v:function(a,b){var z
for(z=new P.bO(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
fC:{"^":"fD;$ti"}}],["","",,P,{"^":"",
eN:function(a){var z=J.o(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.at(a)+"'"},
bv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eN(a)},
cl:function(a){return new P.hm(a)},
ag:function(a){H.bk(H.b(a))},
iJ:{"^":"c;"},
"+bool":0,
ci:{"^":"c;cC:a<,b",
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.ci))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.gcC())},
gw:function(a){var z=this.a
return(z^C.b.aZ(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.eG(H.fs(this))
y=P.aE(H.fq(this))
x=P.aE(H.fm(this))
w=P.aE(H.fn(this))
v=P.aE(H.fp(this))
u=P.aE(H.fr(this))
t=P.eH(H.fo(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
eG:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aE:function(a){if(a>=10)return""+a
return"0"+a}}},
a5:{"^":"az;"},
"+double":0,
aW:{"^":"c;a2:a<",
l:function(a,b){return new P.aW(C.b.l(this.a,b.ga2()))},
N:function(a,b){return C.b.N(this.a,b.ga2())},
Y:function(a,b){return C.b.Y(this.a,b.ga2())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.ga2())},
k:function(a){var z,y,x,w,v
z=new P.eM()
y=this.a
if(y<0)return"-"+new P.aW(0-y).k(0)
x=z.$1(C.b.V(y,6e7)%60)
w=z.$1(C.b.V(y,1e6)%60)
v=new P.eL().$1(y%1e6)
return""+C.b.V(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
eK:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eL:{"^":"j:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eM:{"^":"j:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
B:{"^":"c;",
gO:function(){return H.a7(this.$thrownJsError)}},
cC:{"^":"B;",
k:function(a){return"Throw of null."}},
a_:{"^":"B;a,b,c,d",
gae:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gad:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gae()+y+x
if(!this.a)return w
v=this.gad()
u=P.bv(this.b)
return w+v+": "+H.b(u)},
p:{
ca:function(a){return new P.a_(!1,null,null,a)},
cb:function(a,b,c){return new P.a_(!0,a,b,c)},
er:function(a){return new P.a_(!1,null,a,"Must not be null")}}},
cE:{"^":"a_;e,f,a,b,c,d",
gae:function(){return"RangeError"},
gad:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
b1:function(a,b,c){return new P.cE(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.cE(b,c,!0,a,d,"Invalid value")},
ft:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
z=a>c}else z=!0
if(z)throw H.a(P.b0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
z=b>c}else z=!0
if(z)throw H.a(P.b0(b,a,c,"end",f))
return b}return c}}},
eX:{"^":"a_;e,i:f>,a,b,c,d",
gae:function(){return"RangeError"},
gad:function(){if(J.aO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
u:function(a,b,c,d,e){var z=e!=null?e:J.Z(b)
return new P.eX(b,z,!0,a,c,"Index out of range")}}},
h2:{"^":"B;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
q:function(a){return new P.h2(a)}}},
h0:{"^":"B;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
d2:function(a){return new P.h0(a)}}},
bG:{"^":"B;a",
k:function(a){return"Bad state: "+this.a},
p:{
fK:function(a){return new P.bG(a)}}},
eD:{"^":"B;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bv(z))+"."},
p:{
I:function(a){return new P.eD(a)}}},
cH:{"^":"c;",
k:function(a){return"Stack Overflow"},
gO:function(){return},
$isB:1},
eF:{"^":"B;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
jA:{"^":"c;"},
hm:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
E:{"^":"az;"},
"+int":0,
eZ:{"^":"c;$ti",
v:function(a,b){var z
for(z=this.gG(this);z.t();)b.$1(z.gC(z))},
gi:function(a){var z,y
z=this.gG(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.er("index"))
if(b<0)H.O(P.b0(b,0,null,"index",null))
for(z=this.gG(this),y=0;z.t();){x=z.gC(z)
if(b===y)return x;++y}throw H.a(P.u(b,this,"index",null,y))},
k:function(a){return P.f_(this,"(",")")}},
h:{"^":"c;$ti"},
"+List":0,
bC:{"^":"c;$ti"},
aG:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
az:{"^":"c;"},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gw:function(a){return H.as(this)},
k:function(a){return"Instance of '"+H.at(this)+"'"},
toString:function(){return this.k(this)}},
au:{"^":"c;"},
p:{"^":"c;"},
"+String":0,
bH:{"^":"c;P:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cK:function(a,b,c){var z=J.bo(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.t())}else{a+=H.b(z.gC(z))
for(;z.t();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
a4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
d9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dm:function(a){var z=$.t
if(z===C.f)return a
return z.cI(a)},
L:{"^":"ck;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
j8:{"^":"bF;m:x=,n:y=,A:z=","%":"Accelerometer|LinearAccelerationSensor"},
j9:{"^":"f;i:length=","%":"AccessibleNodeList"},
ja:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jb:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
ev:{"^":"f;","%":"Response;Body"},
aT:{"^":"L;D:height},E:width}",
at:function(a,b,c){if(c!=null)return a.getContext(b,P.iL(c,null))
return a.getContext(b)},
as:function(a,b){return this.at(a,b,null)},
$isaT:1,
"%":"HTMLCanvasElement"},
jg:{"^":"f;",
cP:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
a8:function(a){return P.J(a.getContextAttributes())},
d4:function(a,b,c,d,e){return a.rect(b,c,d,e)},
"%":"CanvasRenderingContext2D"},
jh:{"^":"z;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
jj:{"^":"aV;i:length=","%":"CSSPerspective"},
jk:{"^":"bu;m:x=,n:y=","%":"CSSPositionValue"},
jl:{"^":"aV;m:x=,n:y=,A:z=","%":"CSSRotation"},
jm:{"^":"aV;m:x=,n:y=,A:z=","%":"CSSScale"},
jn:{"^":"hf;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eE:{"^":"c;"},
bu:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aV:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
jo:{"^":"bu;i:length=","%":"CSSTransformValue"},
jp:{"^":"aV;m:x=,n:y=,A:z=","%":"CSSTranslation"},
jq:{"^":"bu;i:length=","%":"CSSUnparsedValue"},
jr:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
js:{"^":"f;m:x=,n:y=,A:z=","%":"DeviceAcceleration"},
jt:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
ju:{"^":"eI;",
ga7:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gA:function(a){return a.z},
"%":"DOMPoint"},
eI:{"^":"f;",
ga7:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gA:function(a){return a.z},
"%":";DOMPointReadOnly"},
jv:{"^":"hh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]},
$asi:function(){return[P.U]},
$ish:1,
$ash:function(){return[P.U]},
$ask:function(){return[P.U]},
"%":"ClientRectList|DOMRectList"},
eJ:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gE(a))+" x "+H.b(this.gD(a))},
B:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isU)return!1
return a.left===b.left&&a.top===b.top&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.d9(W.a4(W.a4(W.a4(W.a4(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gD:function(a){return a.height},
gE:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isU:1,
$asU:I.ae,
"%":";DOMRectReadOnly"},
jw:{"^":"hj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.p]},
$isn:1,
$asn:function(){return[P.p]},
$asi:function(){return[P.p]},
$ish:1,
$ash:function(){return[P.p]},
$ask:function(){return[P.p]},
"%":"DOMStringList"},
jx:{"^":"f;i:length=","%":"DOMTokenList"},
ck:{"^":"z;",
k:function(a){return a.localName},
"%":";Element"},
jy:{"^":"L;D:height},E:width}","%":"HTMLEmbedElement"},
jz:{"^":"aa;F:error=","%":"ErrorEvent"},
aa:{"^":"f;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CompositionEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|DragEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FocusEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|KeyboardEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MouseEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PointerEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TextEvent|TouchEvent|TrackEvent|TransitionEvent|UIEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent|WheelEvent;Event|InputEvent"},
y:{"^":"f;",
b3:["bV",function(a,b,c,d){if(c!=null)this.cm(a,b,c,!1)}],
cm:function(a,b,c,d){return a.addEventListener(b,H.W(c,1),!1)},
ct:function(a,b,c,d){return a.removeEventListener(b,H.W(c,1),!1)},
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;de|df|dh|di"},
jT:{"^":"ho;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aX]},
$isn:1,
$asn:function(){return[W.aX]},
$asi:function(){return[W.aX]},
$ish:1,
$ash:function(){return[W.aX]},
$ask:function(){return[W.aX]},
"%":"FileList"},
jU:{"^":"y;F:error=","%":"FileReader"},
jV:{"^":"y;F:error=,i:length=","%":"FileWriter"},
jX:{"^":"y;",
dr:function(a,b,c){return a.forEach(H.W(b,3),c)},
v:function(a,b){b=H.W(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
jZ:{"^":"L;i:length=","%":"HTMLFormElement"},
k0:{"^":"bF;m:x=,n:y=,A:z=","%":"Gyroscope"},
k1:{"^":"f;i:length=","%":"History"},
k2:{"^":"hC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.z]},
$isn:1,
$asn:function(){return[W.z]},
$asi:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$ask:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
k3:{"^":"L;D:height},E:width}","%":"HTMLIFrameElement"},
bx:{"^":"L;D:height},E:width}",$isbx:1,"%":"HTMLImageElement"},
k5:{"^":"L;D:height},E:width}","%":"HTMLInputElement"},
kb:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
kc:{"^":"bF;m:x=,n:y=,A:z=","%":"Magnetometer"},
fc:{"^":"L;F:error=","%":"HTMLAudioElement;HTMLMediaElement"},
ke:{"^":"f;i:length=","%":"MediaList"},
kf:{"^":"y;",
I:function(a){return a.clone()},
"%":"MediaStream"},
kg:{"^":"y;an:enabled=",
I:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
kh:{"^":"y;",
b3:function(a,b,c,d){if(b==="message")a.start()
this.bV(a,b,c,!1)},
"%":"MessagePort"},
ki:{"^":"hI;",
h:function(a,b){return P.J(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gL:function(a){var z=H.x([],[P.p])
this.v(a,new W.fe(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.p,null]},
"%":"MIDIInputMap"},
fe:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
kj:{"^":"hJ;",
h:function(a,b){return P.J(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gL:function(a){var z=H.x([],[P.p])
this.v(a,new W.ff(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.p,null]},
"%":"MIDIOutputMap"},
ff:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
kk:{"^":"hL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b_]},
$isn:1,
$asn:function(){return[W.b_]},
$asi:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$ask:function(){return[W.b_]},
"%":"MimeTypeArray"},
z:{"^":"y;",
k:function(a){var z=a.nodeValue
return z==null?this.bW(a):z},
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ks:{"^":"hN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.z]},
$isn:1,
$asn:function(){return[W.z]},
$asi:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$ask:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
ku:{"^":"L;D:height},E:width}","%":"HTMLObjectElement"},
aH:{"^":"f;i:length=","%":"Plugin"},
kx:{"^":"hR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aH]},
$isn:1,
$asn:function(){return[W.aH]},
$asi:function(){return[W.aH]},
$ish:1,
$ash:function(){return[W.aH]},
$ask:function(){return[W.aH]},
"%":"PluginArray"},
kF:{"^":"hX;",
h:function(a,b){return P.J(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gL:function(a){var z=H.x([],[P.p])
this.v(a,new W.fz(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.p,null]},
"%":"RTCStatsReport"},
fz:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
kG:{"^":"L;i:length=","%":"HTMLSelectElement"},
bF:{"^":"y;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
kH:{"^":"aa;F:error=","%":"SensorErrorEvent"},
kI:{"^":"df;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b3]},
$isn:1,
$asn:function(){return[W.b3]},
$asi:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$ask:function(){return[W.b3]},
"%":"SourceBufferList"},
kJ:{"^":"hZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b4]},
$isn:1,
$asn:function(){return[W.b4]},
$asi:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$ask:function(){return[W.b4]},
"%":"SpeechGrammarList"},
kK:{"^":"aa;F:error=","%":"SpeechRecognitionError"},
aJ:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
kM:{"^":"i1;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gL:function(a){var z=H.x([],[P.p])
this.v(a,new W.fM(z))
return z},
gi:function(a){return a.length},
$asM:function(){return[P.p,P.p]},
"%":"Storage"},
fM:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
kQ:{"^":"i6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b7]},
$isn:1,
$asn:function(){return[W.b7]},
$asi:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$ask:function(){return[W.b7]},
"%":"TextTrackCueList"},
kR:{"^":"di;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b6]},
$isn:1,
$asn:function(){return[W.b6]},
$asi:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$ask:function(){return[W.b6]},
"%":"TextTrackList"},
kS:{"^":"f;i:length=","%":"TimeRanges"},
kT:{"^":"ib;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b8]},
$isn:1,
$asn:function(){return[W.b8]},
$asi:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$ask:function(){return[W.b8]},
"%":"TouchList"},
kU:{"^":"f;i:length=","%":"TrackDefaultList"},
kX:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
kZ:{"^":"f;m:x=,A:z=","%":"VRStageBoundsPoint"},
bM:{"^":"fc;D:height},E:width}",$isbM:1,"%":"HTMLVideoElement"},
l_:{"^":"y;i:length=","%":"VideoTrackList"},
h4:{"^":"y;",
gcF:function(a){var z,y
z=P.az
y=new P.a3(0,$.t,null,[z])
this.cr(a)
this.cu(a,W.dm(new W.h5(new P.i4(y,[z]))))
return y},
cu:function(a,b){return a.requestAnimationFrame(H.W(b,1))},
cr:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
h5:{"^":"j:1;a",
$1:function(a){this.a.cM(0,a)}},
l0:{"^":"y;"},
l4:{"^":"ih;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aU]},
$isn:1,
$asn:function(){return[W.aU]},
$asi:function(){return[W.aU]},
$ish:1,
$ash:function(){return[W.aU]},
$ask:function(){return[W.aU]},
"%":"CSSRuleList"},
l5:{"^":"eJ;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isU)return!1
return a.left===b.left&&a.top===b.top&&a.width===z.gE(b)&&a.height===z.gD(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.d9(W.a4(W.a4(W.a4(W.a4(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gD:function(a){return a.height},
gE:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
l7:{"^":"ij;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aZ]},
$isn:1,
$asn:function(){return[W.aZ]},
$asi:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$ask:function(){return[W.aZ]},
"%":"GamepadList"},
l8:{"^":"il;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.z]},
$isn:1,
$asn:function(){return[W.z]},
$asi:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$ask:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
l9:{"^":"ev;",
I:function(a){return a.clone()},
"%":"Request"},
la:{"^":"io;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aJ]},
$isn:1,
$asn:function(){return[W.aJ]},
$asi:function(){return[W.aJ]},
$ish:1,
$ash:function(){return[W.aJ]},
$ask:function(){return[W.aJ]},
"%":"SpeechRecognitionResultList"},
lb:{"^":"iq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b5]},
$isn:1,
$asn:function(){return[W.b5]},
$asi:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$ask:function(){return[W.b5]},
"%":"StyleSheetList"},
l6:{"^":"cJ;a,b,c,$ti",
bu:function(a,b,c,d){return W.d6(this.a,this.b,a,!1,H.D(this,0))}},
hk:{"^":"fN;a,b,c,d,e,$ti",
ci:function(a,b,c,d,e){this.cA()},
cK:function(a){if(this.b==null)return
this.cB()
this.b=null
this.d=null
return},
cA:function(){var z=this.d
if(z!=null&&this.a<=0)J.dL(this.b,this.c,z,!1)},
cB:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.dK(x,this.c,z,!1)}},
p:{
d6:function(a,b,c,d,e){var z=c==null?null:W.dm(new W.hl(c))
z=new W.hk(0,a,b,z,!1,[e])
z.ci(a,b,c,!1,e)
return z}}},
hl:{"^":"j:1;a",
$1:function(a){return this.a.$1(a)}},
k:{"^":"c;$ti",
gG:function(a){return new W.eP(a,this.gi(a),-1,null,[H.bg(this,a,"k",0)])}},
eP:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aB(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
hf:{"^":"f+eE;"},
hg:{"^":"f+i;"},
hh:{"^":"hg+k;"},
hi:{"^":"f+i;"},
hj:{"^":"hi+k;"},
hn:{"^":"f+i;"},
ho:{"^":"hn+k;"},
hB:{"^":"f+i;"},
hC:{"^":"hB+k;"},
hI:{"^":"f+M;"},
hJ:{"^":"f+M;"},
hK:{"^":"f+i;"},
hL:{"^":"hK+k;"},
hM:{"^":"f+i;"},
hN:{"^":"hM+k;"},
hQ:{"^":"f+i;"},
hR:{"^":"hQ+k;"},
hX:{"^":"f+M;"},
de:{"^":"y+i;"},
df:{"^":"de+k;"},
hY:{"^":"f+i;"},
hZ:{"^":"hY+k;"},
i1:{"^":"f+M;"},
i5:{"^":"f+i;"},
i6:{"^":"i5+k;"},
dh:{"^":"y+i;"},
di:{"^":"dh+k;"},
ia:{"^":"f+i;"},
ib:{"^":"ia+k;"},
ig:{"^":"f+i;"},
ih:{"^":"ig+k;"},
ii:{"^":"f+i;"},
ij:{"^":"ii+k;"},
ik:{"^":"f+i;"},
il:{"^":"ik+k;"},
im:{"^":"f+i;"},
io:{"^":"im+k;"},
ip:{"^":"f+i;"},
iq:{"^":"ip+k;"}}],["","",,P,{"^":"",
J:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
iL:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.c1(a,new P.iM(z))
return z},
iM:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",kE:{"^":"y;F:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},kV:{"^":"y;F:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",hD:{"^":"c;",
d3:function(){return Math.random()}},hS:{"^":"c;$ti"},U:{"^":"hS;$ti"}}],["","",,P,{"^":"",jB:{"^":"w;m:x=,n:y=","%":"SVGFEBlendElement"},jC:{"^":"w;m:x=,n:y=","%":"SVGFEColorMatrixElement"},jD:{"^":"w;m:x=,n:y=","%":"SVGFEComponentTransferElement"},jE:{"^":"w;m:x=,n:y=","%":"SVGFECompositeElement"},jF:{"^":"w;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},jG:{"^":"w;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},jH:{"^":"w;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},jI:{"^":"w;m:x=,n:y=","%":"SVGFEFloodElement"},jJ:{"^":"w;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},jK:{"^":"w;m:x=,n:y=","%":"SVGFEImageElement"},jL:{"^":"w;m:x=,n:y=","%":"SVGFEMergeElement"},jM:{"^":"w;m:x=,n:y=","%":"SVGFEMorphologyElement"},jN:{"^":"w;m:x=,n:y=","%":"SVGFEOffsetElement"},jO:{"^":"w;m:x=,n:y=,A:z=","%":"SVGFEPointLightElement"},jP:{"^":"w;m:x=,n:y=","%":"SVGFESpecularLightingElement"},jQ:{"^":"w;m:x=,n:y=,A:z=","%":"SVGFESpotLightElement"},jR:{"^":"w;m:x=,n:y=","%":"SVGFETileElement"},jS:{"^":"w;m:x=,n:y=","%":"SVGFETurbulenceElement"},jW:{"^":"w;m:x=,n:y=","%":"SVGFilterElement"},jY:{"^":"al;m:x=,n:y=","%":"SVGForeignObjectElement"},eV:{"^":"al;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},al:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},k4:{"^":"al;m:x=,n:y=","%":"SVGImageElement"},k9:{"^":"hF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cr]},
$ish:1,
$ash:function(){return[P.cr]},
$ask:function(){return[P.cr]},
"%":"SVGLengthList"},kd:{"^":"w;m:x=,n:y=","%":"SVGMaskElement"},kt:{"^":"hP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cD]},
$ish:1,
$ash:function(){return[P.cD]},
$ask:function(){return[P.cD]},
"%":"SVGNumberList"},kw:{"^":"w;m:x=,n:y=","%":"SVGPatternElement"},ky:{"^":"f;m:x=,n:y=","%":"SVGPoint"},kz:{"^":"f;i:length=","%":"SVGPointList"},kA:{"^":"f;m:x=,n:y=","%":"SVGRect"},kB:{"^":"eV;m:x=,n:y=","%":"SVGRectElement"},kN:{"^":"i3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.p]},
$ish:1,
$ash:function(){return[P.p]},
$ask:function(){return[P.p]},
"%":"SVGStringList"},w:{"^":"ck;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kO:{"^":"al;m:x=,n:y=","%":"SVGSVGElement"},fV:{"^":"al;","%":"SVGTextPathElement;SVGTextContentElement"},kP:{"^":"fV;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},kW:{"^":"id;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cQ]},
$ish:1,
$ash:function(){return[P.cQ]},
$ask:function(){return[P.cQ]},
"%":"SVGTransformList"},kY:{"^":"al;m:x=,n:y=","%":"SVGUseElement"},hE:{"^":"f+i;"},hF:{"^":"hE+k;"},hO:{"^":"f+i;"},hP:{"^":"hO+k;"},i2:{"^":"f+i;"},i3:{"^":"i2+k;"},ic:{"^":"f+i;"},id:{"^":"ic+k;"}}],["","",,P,{"^":"",jc:{"^":"f;i:length=","%":"AudioBuffer"},jd:{"^":"hd;",
h:function(a,b){return P.J(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gL:function(a){var z=H.x([],[P.p])
this.v(a,new P.et(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.p,null]},
"%":"AudioParamMap"},et:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},je:{"^":"f;an:enabled=","%":"AudioTrack"},jf:{"^":"y;i:length=","%":"AudioTrackList"},eu:{"^":"y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kv:{"^":"eu;i:length=","%":"OfflineAudioContext"},hd:{"^":"f+M;"}}],["","",,P,{"^":"",kC:{"^":"f;",
b1:function(a,b){return a.activeTexture(b)},
b4:function(a,b,c){return a.attachShader(b,c)},
b5:function(a,b,c){return a.bindBuffer(b,c)},
b7:function(a,b,c){return a.bindFramebuffer(b,c)},
b8:function(a,b,c){return a.bindTexture(b,c)},
b9:function(a,b){return a.blendEquation(b)},
ba:function(a,b,c){return a.blendFunc(b,c)},
bb:function(a,b,c,d){return a.bufferData(b,c,d)},
bc:function(a,b){return a.clear(b)},
bd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
be:function(a,b){return a.compileShader(b)},
bf:function(a){return a.createBuffer()},
bg:function(a){return a.createProgram()},
bh:function(a,b){return a.createShader(b)},
bi:function(a){return a.createTexture()},
bk:function(a,b){return a.depthMask(b)},
bl:function(a,b){return a.disable(b)},
bm:function(a,b,c,d){return a.drawArrays(b,c,d)},
bn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bo:function(a,b){return a.enable(b)},
bp:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.J(a.getContextAttributes())},
au:function(a){return a.getError()},
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ax:function(a,b){return a.getShaderInfoLog(b)},
ay:function(a,b,c){return a.getShaderParameter(b,c)},
az:function(a,b,c){return a.getUniformLocation(b,c)},
bt:function(a,b){return a.linkProgram(b)},
bw:function(a,b,c){return a.pixelStorei(b,c)},
aB:function(a,b,c){return a.shaderSource(b,c)},
aD:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ar:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isbx)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isaT)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbM)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.ca("Incorrect number or type of arguments"))},
by:function(a,b,c,d,e,f,g){return this.ar(a,b,c,d,e,f,g,null,null,null)},
bz:function(a,b,c,d){return a.texParameterf(b,c,d)},
bA:function(a,b,c,d){return a.texParameteri(b,c,d)},
bD:function(a,b,c){return a.uniform1f(b,c)},
bE:function(a,b,c){return a.uniform1fv(b,c)},
bF:function(a,b,c){return a.uniform1i(b,c)},
bG:function(a,b,c){return a.uniform1iv(b,c)},
bH:function(a,b,c){return a.uniform2fv(b,c)},
bI:function(a,b,c){return a.uniform3fv(b,c)},
bJ:function(a,b,c){return a.uniform4fv(b,c)},
bK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bM:function(a,b){return a.useProgram(b)},
bN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bP:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},kD:{"^":"f;",
cG:function(a,b){return a.beginTransformFeedback(b)},
cJ:function(a,b){return a.bindVertexArray(b)},
cQ:function(a){return a.createVertexArray()},
cR:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cS:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cT:function(a){return a.endTransformFeedback()},
dc:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dd:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b1:function(a,b){return a.activeTexture(b)},
b4:function(a,b,c){return a.attachShader(b,c)},
b5:function(a,b,c){return a.bindBuffer(b,c)},
b7:function(a,b,c){return a.bindFramebuffer(b,c)},
b8:function(a,b,c){return a.bindTexture(b,c)},
b9:function(a,b){return a.blendEquation(b)},
ba:function(a,b,c){return a.blendFunc(b,c)},
bb:function(a,b,c,d){return a.bufferData(b,c,d)},
bc:function(a,b){return a.clear(b)},
bd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
be:function(a,b){return a.compileShader(b)},
bf:function(a){return a.createBuffer()},
bg:function(a){return a.createProgram()},
bh:function(a,b){return a.createShader(b)},
bi:function(a){return a.createTexture()},
bk:function(a,b){return a.depthMask(b)},
bl:function(a,b){return a.disable(b)},
bm:function(a,b,c,d){return a.drawArrays(b,c,d)},
bn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bo:function(a,b){return a.enable(b)},
bp:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.J(a.getContextAttributes())},
au:function(a){return a.getError()},
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ax:function(a,b){return a.getShaderInfoLog(b)},
ay:function(a,b,c){return a.getShaderParameter(b,c)},
az:function(a,b,c){return a.getUniformLocation(b,c)},
bt:function(a,b){return a.linkProgram(b)},
bw:function(a,b,c){return a.pixelStorei(b,c)},
aB:function(a,b,c){return a.shaderSource(b,c)},
aD:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ar:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isbx)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isaT)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbM)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.ca("Incorrect number or type of arguments"))},
by:function(a,b,c,d,e,f,g){return this.ar(a,b,c,d,e,f,g,null,null,null)},
bz:function(a,b,c,d){return a.texParameterf(b,c,d)},
bA:function(a,b,c,d){return a.texParameteri(b,c,d)},
bD:function(a,b,c){return a.uniform1f(b,c)},
bE:function(a,b,c){return a.uniform1fv(b,c)},
bF:function(a,b,c){return a.uniform1i(b,c)},
bG:function(a,b,c){return a.uniform1iv(b,c)},
bH:function(a,b,c){return a.uniform2fv(b,c)},
bI:function(a,b,c){return a.uniform3fv(b,c)},
bJ:function(a,b,c){return a.uniform4fv(b,c)},
bK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bM:function(a,b){return a.useProgram(b)},
bN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bP:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",kL:{"^":"i0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return P.J(a.item(b))},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bC]},
$ish:1,
$ash:function(){return[P.bC]},
$ask:function(){return[P.bC]},
"%":"SQLResultSetRowList"},i_:{"^":"f+i;"},i0:{"^":"i_+k;"}}],["","",,G,{"^":"",
h7:function(a){var z,y,x,w
z=H.x(a.split("\n"),[P.p])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.X(z,"\n")},
d5:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bh(a,b)
z.aB(a,y,c)
z.be(a,y)
x=z.ay(a,y,35713)
if(x!=null&&J.K(x,!1)){w=z.ax(a,y)
P.ag("E:Compilation failed:")
P.ag("E:"+G.h7(c))
P.ag("E:Failure:")
P.ag(C.l.l("E:",w))
throw H.a(w)}return y},
cm:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bp(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bq(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.c2(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
eR:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bp(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bq(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
eS:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bp(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bq(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.c2(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.e6(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
eQ:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aB(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aB(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aB(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aB(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
hz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a0(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.E]],v=[P.a5],u=[T.V],t=[T.m],s=[T.a2];y.t();){r=y.d
if(!x.a6(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.du>0)H.bk("I: "+q)
continue}p=z.h(0,r)
switch($.$get$N().h(0,r).a){case"vec2":b.T(r,G.eR(H.aN(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.T(r,G.cm(H.aN(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.T(r,G.eS(H.aN(p,"$ish",u,"$ash"),null),4)
break
case"float":b.T(r,new Float32Array(H.ba(H.aN(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.T(r,G.eQ(H.aN(p,"$ish",w,"$ash"),null),4)
break}}},
ar:{"^":"c;an:c>"},
bK:{"^":"ar;d,a,b,c",
aM:function(){return this.d},
k:function(a){var z,y,x,w
z=H.x(["{"+H.b(new H.d1(H.iR(this),null))+"}["+this.a+"]"],[P.p])
for(y=this.d,x=new H.a0(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.X(z,"\n")}},
ew:{"^":"cG;"},
ey:{"^":"c;a,b",
bq:function(a,b,c){J.e3(this.a,b)
if(c>0)J.eo(this.a,b,c)},
bO:function(a,b,c,d,e,f,g,h){J.bl(this.a,34962,b)
J.ep(this.a,c,d,e,!1,g,h)}},
eT:{"^":"c;a,b,c,d,e"},
eO:{"^":"c;a,b,c,d"},
eU:{"^":"c;a,b,c,d,e",
c3:function(a){switch($.$get$N().h(0,a).a){case"vec2":this.e.j(0,a,H.x([],[T.a2]))
break
case"vec3":this.e.j(0,a,H.x([],[T.m]))
break
case"vec4":this.e.j(0,a,H.x([],[T.V]))
break
case"float":this.e.j(0,a,H.x([],[P.a5]))
break
case"uvec4":this.e.j(0,a,H.x([],[[P.h,P.E]]))
break}},
bZ:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.A)(b),++x)z.push(b[x].I(0))},
c4:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.x(y,[P.E])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.gdm(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.gdn(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.gdq(t)
if(r>=w)return H.d(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.d(x,v)
x[v]=s
r=v+1
if(r>=w)return H.d(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.d(x,r)
x[r]=p
r=v+3
if(r>=w)return H.d(x,r)
x[r]=s
s=v+4
if(s>=w)return H.d(x,s)
x[s]=p
p=v+5
if(p>=w)return H.d(x,p)
x[p]=q.d
v+=6}return x},
c5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.c
y=a-0
x=b-0
w=0
while(!0){if(!(w<x))break
v=w*a
u=w+1
t=0
while(!0){if(!(t<y))break
s=t+1
r=s%a
q=u%b*a
z.push(new G.eO(v+r,q+r,q+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a0(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$N().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.X(z," ")}},
cP:{"^":"c;a,b,c"},
cO:{"^":"c;a,b,c"},
fb:{"^":"bK;d,a,b,c",
c8:function(a,b){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!1)
z.j(0,"cBlendEquation",b)
z.j(0,"cStencilFunc",$.$get$cI())},
p:{
cx:function(a,b){var z=new G.fb(P.Q(),a,!1,!0)
z.c8(a,b)
return z}}},
fd:{"^":"ar;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aK:function(a,b,c){var z,y
C.l.aQ(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bl(z.a,34962,y)
J.c_(z.a,34962,b,35048)},
c6:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
T:function(a,b,c){var z,y,x,w,v
z=J.c0(a,0)===105
if(z&&this.z===0)this.z=C.b.bY(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bm(x.a))
this.aK(a,b,c)
w=$.$get$N().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.aP(x.a,this.e)
x.bq(0,v,z?1:0)
x.bO(0,y.h(0,a),v,w.aL(),5126,!1,0,0)},
aJ:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bm(y.a))
this.ch=a
this.aK("aPosition",a,3)
x=$.$get$N().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.aP(y.a,this.e)
y.bq(0,w,0)
y.bO(0,z.h(0,"aPosition"),w,x.aL(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a0(z,z.r,null,null,[H.D(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.X(y,"  ")},
p:{
cy:function(a,b,c,d){return new G.fd(b,J.dX(b.a),c,P.Q(),d,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)}}},
fk:{"^":"bK;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
c_:function(a,b){var z
if(typeof a!=="number")return a.M()
if(typeof b!=="number")return H.v(b)
z=a/b
if(this.z===z)return
this.z=z
this.aO()},
aO:function(){var z,y,x,w,v,u
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
aM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.m(new Float32Array(3))
u.aA(x,w,v)
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
y=J.o(t)
x=!!y.$isV
q=x?y.ga7(t):1
if(!!y.$ism){p=y.gm(t)
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
c.u(this.db)
c.bv(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
fy:{"^":"ar;d,e,f,r,x,y,z,Q,ch,a,b,c",
ca:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
x.j(0,t,J.c3(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
x.j(0,t,J.c3(w.a,v,t))}},
cd:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a0(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.a6(0,v))x.push(v)}for(z=this.x,y=new P.bO(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.cN(0,v))x.push(v)}return x},
cf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a0(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.c0(t,0)){case 117:if(w.a6(0,t)){s=b.h(0,t)
if(v.a6(0,t))H.bk("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$N().h(0,t)
if(r==null)H.O("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.br(x.a,q,s)
else if(!!J.o(s).$iseY)J.em(x.a,q,s)
break
case"float":if(r.c===0)J.ek(x.a,q,s)
else if(!!J.o(s).$isbw)J.el(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.Y(s,"$isF").a
J.c9(x.a,q,!1,p)}else if(!!J.o(s).$isbw)J.c9(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.Y(s,"$isab").a
J.c8(x.a,q,!1,p)}else if(!!J.o(s).$isbw)J.c8(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.c7(o,q,H.Y(s,"$isV").a)
else J.c7(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.c6(o,q,H.Y(s,"$ism").a)
else J.c6(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.c5(o,q,H.Y(s,"$isa2").a)
else J.c5(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.v(p)
J.bY(x.a,33984+p)
p=H.Y(s,"$isbI").b
J.aC(x.a,3553,p)
p=this.ch
J.br(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.v(p)
J.bY(x.a,33984+p)
p=H.Y(s,"$isbI").b
J.aC(x.a,34067,p)
p=this.ch
J.br(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bk("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.K(s,!0)
o=x.a
if(p)J.aQ(o,2929)
else J.bn(o,2929)
break
case"cStencilFunc":H.Y(s,"$iscP")
p=s.a
o=x.a
if(p===1281)J.bn(o,2960)
else{J.aQ(o,2960)
o=s.b
n=s.c
J.eg(x.a,p,o,n)}break
case"cDepthWrite":J.dY(x.a,s)
break
case"cBlendEquation":H.Y(s,"$iscO")
p=s.a
o=x.a
if(p===1281)J.bn(o,3042)
else{J.aQ(o,3042)
o=s.b
n=s.c
J.dP(x.a,o,n)
J.dO(x.a,p)}break}++u
break}}m=P.eK(0,0,0,Date.now()-new P.ci(z,!1).a,0,0)
""+u
m.k(0)},
c2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.en(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aX()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.A)(b),++x){w=b[x]
this.cf(w.a,w.aM())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aS()}for(v=a.cy,u=new H.a0(v,v.r,null,null,[H.D(v,0)]),u.c=v.e;u.t();)y.b2(0,u.d)
t=this.cd()
if(t.length!==0)P.ag("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.aP(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.c6()
u=a.Q
r=a.z
if(s)J.dM(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.e1(q,y,v,u,0,r)
else J.e0(q,y,v,u,0)}else{u=z.a
if(r>1)J.e_(u,y,0,v,r)
else J.dZ(u,y,0,v)}if(s)J.e4(z.a)},
p:{
cF:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.ct(null,null,null,P.p)
y=c.b
x=d.b
w=c.f
v=J.dU(b.a)
u=G.d5(b.a,35633,y)
J.bZ(b.a,v,u)
t=G.d5(b.a,35632,x)
J.bZ(b.a,v,t)
if(w.length>0)J.ej(b.a,v,w,35980)
J.ed(b.a,v)
if(J.ec(b.a,v,35714)!==!0)H.O(J.eb(b.a,v))
z=new G.fy(b,c,d,v,P.f8(c.c,null),P.Q(),P.Q(),z,null,a,!1,!0)
z.ca(a,b,c,d)
return z}}},
r:{"^":"c;a,b,c",
aL:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fE:{"^":"c;a,b,c,d,e,f,r,x",
aH:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.A)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.aa(y)},
a_:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.A)(a),++x)y.push(a[x])
C.c.aa(y)},
aI:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.aa(z)},
cb:function(a,b){this.b=this.cg(!0,a,b)},
a0:function(a){return this.cb(a,null)},
cg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
s=$.$get$N().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.cE(w,b)
w.push("}")
return C.c.X(w,"\n")},
p:{
b2:function(a){return new G.fE(a,null,[],[],[],[],0,P.Q())}}},
cG:{"^":"ar;"},
fW:{"^":"c;a,b,c,d,e,f,r"},
bI:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
eW:{"^":"bI;f,a,b,c,d,e",
c7:function(a,b,c,d,e){var z,y,x,w
z=this.d
y=this.c
J.aC(z.a,y,this.b)
J.ee(z.a,37440,1)
this.aN(this.f)
x=this.e
w=x.e
if(w!==1)J.ei(z.a,y,34046,w)
J.c4(z.a,y,10240,x.r)
J.c4(z.a,y,10241,x.f)
J.ea(z.a)
J.aC(z.a,y,null)},
aN:function(a){var z,y
z=this.d
y=this.c
J.aC(z.a,y,this.b)
J.eh(z.a,y,0,6408,6408,5121,a)},
p:{
co:function(a,b,c,d,e){var z=new G.eW(c,b,J.dW(a.a),e,a,new G.fW(!1,!1,!1,!0,1,9729,9729))
z.c7(a,b,c,d,e)
return z}}}}],["","",,R,{"^":"",
h3:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$d3().d3()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.cy(z,a.d,0,a.e.x)
y.aJ(x)
return y},
fx:{"^":"fw;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
d6:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sE(z,y)
w.sD(z,x)
P.ag("size change "+H.b(y)+" "+H.b(x))
this.dx.c_(y,x)
this.z=y
this.Q=x},"$1","gd5",4,0,12]}}],["","",,A,{"^":"",
ds:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.e5(b)!==!0)return
z=b.ce(c)
b.k(0)
y=C.c.gd1(e)
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
x.cO(new T.ab(v))
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
a.c2(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.A)(y),++s)A.ds(a,y[s],z,d,e)},
cA:{"^":"cG;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
ce:function(a){var z=this.dx
z.u(a)
z.bv(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
bE:{"^":"ar;d,e,f,a,b,c"},
fw:{"^":"ar;",
c9:function(a,b,c){if(this.d==null)this.d=new G.eT(this.e,null,null,null,null)},
c1:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.dN(v.a,36160,z)
J.eq(v.a,this.x,this.y,x,w)
if(y!==0)J.dQ(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.bK(P.Q(),"transforms",!1,!0))
r=new T.F(new Float32Array(16))
r.K()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.A)(x),++q)A.ds(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}},
c0:function(){return this.c1(null)}}}],["","",,V,{}],["","",,B,{"^":"",
bJ:function(a,b,c,d,e,f){var z,y,x,w,v
if(typeof a!=="number")return H.v(a)
z=b*a
y=Math.cos(z)
x=Math.sin(z)
z=c*a
w=Math.cos(z)
v=Math.sin(z)
z=d*(2+y)*0.5
f.sm(0,z*w)
f.sn(0,z*v)
f.sA(0,e*d*0.5*x)},
fF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
z=B.fZ(B.fj(new B.fG(e,d,f,c),0,6.283185307179586,g,!0,0.001),h,i,!0)
y=[]
x=new G.eU(!1,[],[],y,P.Q())
for(w=z.length,v=0;v<z.length;z.length===w||(0,H.A)(z),++v){u=z[v]
for(t=0;t<u.length;t+=2)y.push(J.dS(u[t]))}x.c5(h,g,!0)
return x},
fZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=[]
y=new Float32Array(3)
x=new T.m(y)
w=new Float32Array(3)
v=new T.m(w)
u=new Float32Array(3)
t=new T.m(u)
for(s=0;r=a.length,s<r;s+=2){q=a[s]
p=s+1
if(p>=r)return H.d(a,p)
o=a[p]
n=[]
z.push(n)
r=o.a
p=r[2]
if(Math.abs(p)>0.7071067811865476){m=r[1]
l=m*m+p*p
k=1/Math.sqrt(l)
w[0]=0
w[1]=-r[2]*k
w[2]=r[1]*k
u[0]=l*k
u[1]=-r[0]*(r[1]*k)
u[2]=r[0]*(-r[2]*k)}else{p=r[0]
m=r[1]
l=p*p+m*m
k=1/Math.sqrt(l)
w[0]=-r[1]*k
w[1]=r[0]*k
w[2]=0
u[0]=-r[2]*(r[0]*k)
u[1]=r[2]*(-r[1]*k)
u[2]=l*k}v.S(0)
t.S(0)
for(j=0;j<b;++j){i=j/b*2*3.141592653589793
h=c*Math.cos(i)
g=c*Math.sin(i)
x.u(q)
x.a5(v,h)
x.a5(t,g)
r=new T.m(new Float32Array(3))
r.u(x)
n.push(r)
y[2]=0
y[1]=0
y[0]=0
x.a5(v,h)
x.a5(t,g)
x.S(0)
r=new T.m(new Float32Array(3))
r.u(x)
n.push(r)}}return z},
fj:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.m(new Float32Array(3))
x=new T.m(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aF(0,y)
t=new T.m(new Float32Array(3))
t.u(y)
z.push(t)
t=new T.m(new Float32Array(3))
t.u(x)
z.push(t)}return z},
fG:{"^":"j:13;a,b,c,d",
$2:function(a,b){B.bJ(a,this.a,this.b,this.c,this.d,b)}},
fX:{"^":"ew;fy,go,id,k1,k2,k3,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
aM:function(a){var z,y
z=C.G.cU(a,0,new A.iT())
if(typeof z!=="number")return H.v(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iT:{"^":"j:14;",
$2:function(a,b){var z,y
z=J.a8(a,J.a9(b))
if(typeof z!=="number")return H.v(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ab:{"^":"c;a",
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
k:function(a){return"[0] "+this.J(0).k(0)+"\n[1] "+this.J(1).k(0)+"\n[2] "+this.J(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.d(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ab){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gw:function(a){return A.aM(this.a)},
J:function(a){var z,y,x
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
return new T.m(z)},
I:function(a){var z=new T.ab(new Float32Array(9))
z.u(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ab(z)
y.u(this)
x=b.gdh()
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
cO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.u(a)
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
return m}},F:{"^":"c;a",
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
k:function(a){return"[0] "+this.J(0).k(0)+"\n[1] "+this.J(1).k(0)+"\n[2] "+this.J(2).k(0)+"\n[3] "+this.J(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.F){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.aM(this.a)},
J:function(a){var z,y,x
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
return new T.V(z)},
I:function(a){var z=new T.F(new Float32Array(16))
z.u(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.F(z)
y.u(this)
x=b.gdi()
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
K:function(){var z=this.a
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
bv:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},a2:{"^":"c;a",
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a2){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.aM(this.a)},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gdj()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return new T.a2(z)},
M:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a2(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.a9(0,1/b)
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a9:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
I:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.a2(z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
p:{
bL:function(a,b){var z=new Float32Array(2)
z[0]=a
z[1]=b
return new T.a2(z)}}},m:{"^":"c;a",
aA:function(a,b,c){var z=this.a
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
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.aM(this.a)},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.u(this)
x=b.gdk()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
M:function(a,b){return this.bR(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
S:function(a){var z,y,x,w,v,u
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
am:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bj:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.m(new Float32Array(3))
z.aA(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a5:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aF:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
bR:function(a){var z,y
z=new Float32Array(3)
y=new T.m(z)
y.u(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
I:function(a){var z=new T.m(new Float32Array(3))
z.u(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sA:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]}},V:{"^":"c;a",
u:function(a){var z,y
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
if(b instanceof T.V){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.aM(this.a)},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.V(z)
y.u(this)
x=b.gdl()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
M:function(a,b){var z=new T.V(new Float32Array(4))
z.u(this)
z.a9(0,1/b)
return z},
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
a9:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
I:function(a){var z=new T.V(new Float32Array(4))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
ga7:function(a){return this.a[3]}}}],["","",,M,{"^":"",
dI:function(a,b){var z,y,x,w,v,u
z=J.e7(b,"2d")
y=(Math.sin(H.iK(a))+1)/2
J.ef(z,0,0,b.width,b.height)
x=b.width
if(typeof x!=="number")return x.df()
w=z.createLinearGradient(0,0,x*y,b.height)
v=Math.floor(360*y)
u=Math.floor(90*y)
w.addColorStop(0,"hsla("+H.b(v)+", 100%, 40%, 1)")
w.addColorStop(0.2,"black")
w.addColorStop(0.3,"black")
w.addColorStop(0.5,"hsla("+H.b(u)+", 100%, 40%, 1)")
w.addColorStop(0.7,"black")
w.addColorStop(0.9,"black")
w.addColorStop(1,"hsla("+H.b(v)+", 100%, 40%, 1)")
z.fillStyle=w
z.fill("nonzero")},
fY:function(a){var z,y,x,w,v,u,t
z=B.fF(!1,!1,1,2,3,20,128,17,4,!0)
z.c3("aTexUV")
y=[]
for(x=z.d,w=0;w<x.length;++w)y.push($.$get$cM()[w%3])
z.bZ("aTexUV",y)
v=G.cy("torusknot",a.d,4,a.e.x)
v.aJ(G.cm(x,null))
x=z.c4()
u=v.d
v.y=J.bm(u.a)
t=v.ch.length
if(t<768){v.cx=new Uint8Array(H.ba(x))
v.Q=5121}else if(t<196608){v.cx=new Uint16Array(H.ba(x))
v.Q=5123}else{v.cx=new Uint32Array(H.ba(x))
v.Q=5125}J.aP(u.a,v.e)
x=v.y
t=v.cx
J.bl(u.a,34963,x)
J.c_(u.a,34963,t,35048)
G.hz(z,v)
return v},
dA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z={}
y=document
x=y.querySelector("#webgl-canvas")
w=new G.ey(null,x)
v=J.e8(x,"webgl2",P.cs(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
w.a=v
if(v==null)H.O(P.cl('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.e9(v))
if($.du>0)P.ag("I: "+u)
J.dR(v,0,0,0,1)
J.aQ(v,2929)
v=new Float32Array(3)
u=new Float32Array(3)
t=new T.F(new Float32Array(16))
t.K()
s=new Float32Array(3)
r=new Float32Array(3)
q=new Float32Array(3)
p=new B.fX(20,2,3,1,new T.m(v),new T.m(u),t,new T.m(s),new T.m(r),new T.m(q),new T.m(new Float32Array(3)),"camera:torusknot",!1,!0)
v=new T.F(new Float32Array(16))
v.K()
u=new T.F(new Float32Array(16))
u.K()
o=new G.fk(p,50,1,0.1,1000,v,u,new T.F(new Float32Array(16)),P.Q(),"perspective",!1,!0)
o.aO()
v=G.cF("textured",w,$.$get$dG(),$.$get$dF())
u=[]
t=H.x([],[A.bE])
n=new R.fx(x,o,null,w,t,17664,0,0,0,0,"main",!1,!0)
n.c9("main",w,null)
n.d6(null)
W.d6(window,"resize",n.gd5(),!1,W.aa)
s=G.cF("stars",w,$.$get$dD(),$.$get$dC())
r=[]
q=$.$get$cc()
m=G.cx("stars",q)
l=y.createElement("canvas")
l.width=64
l.height=64
k=C.x.as(l,"2d")
j=J.dV(k,32,32,1,32,32,22)
j.addColorStop(0,"gray")
j.addColorStop(1,"black")
k.fillStyle=j
k.fillRect(0,0,64,64)
j=k.createRadialGradient(32,32,1,32,32,6)
j.addColorStop(0,"white")
j.addColorStop(1,"gray")
k.globalAlpha=0.9
k.fillStyle=j
k.arc(32,32,4,0,6.283185307179586,!1)
k.fill("nonzero")
i=m.d
i.j(0,"uTexture",G.co(s.d,"Utils::Particles",l,null,3553))
i.j(0,"uPointSize",1000)
h=R.h3(s,2000,100)
i=new Float32Array(9)
g=new T.F(new Float32Array(16))
g.K()
f=new T.F(new Float32Array(16))
f.K()
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
r.push(new A.cA(m,h,[],new T.ab(i),g,f,new T.m(e),new T.m(d),new T.m(c),new T.m(new Float32Array(3)),h.a,!1,!0))
t.push(new A.bE(s,[o],r,"stars",!1,!0))
t.push(new A.bE(v,[o],u,"objects",!1,!0))
b=y.querySelector("#texture")
M.dI(0,b)
a=G.co(w,"gen",b,null,3553)
m=G.cx("torus",q)
y=m.d
y.j(0,"uTexture",a)
y.j(0,"uColor",new T.m(new Float32Array(3)))
y=M.fY(v)
v=new Float32Array(9)
t=new T.F(new Float32Array(16))
t.K()
s=new T.F(new Float32Array(16))
s.K()
r=new Float32Array(3)
q=new Float32Array(3)
i=new Float32Array(3)
u.push(new A.cA(m,y,[],new T.ab(v),t,s,new T.m(r),new T.m(q),new T.m(i),new T.m(new Float32Array(3)),"torus",!1,!0))
z.a=0
new M.j2(z,p,b,a,n).$1(0)},
j2:{"^":"j:15;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=J.dv(a)
y=z.l(a,0)
this.a.a=y
x=this.b
w=J.dJ(y,3000)
v=x.id
u=x.go
t=x.fy
s=x.k1
r=x.k2
B.bJ(w,v,u,t,s,r)
q=x.k3
B.bJ(J.a8(w,0.01),v,u,t,s,q)
s=r.a
t=x.d.a
t[12]=s[0]
t[13]=s[1]
t[14]=s[2]
p=t[12]
o=t[13]
n=t[14]
x=x.e
v=x.a
v[0]=p
v[1]=t[13]
v[2]=t[14]
v=new Float32Array(3)
m=new T.m(v)
m.u(x)
m.aF(0,q)
m.S(0)
l=r.bj(m)
l.S(0)
k=m.bj(l)
k.S(0)
r=l.am(x)
q=k.am(x)
x=m.am(x)
u=l.a
s=u[0]
j=k.a
i=j[0]
h=v[0]
g=u[1]
f=j[1]
e=v[1]
u=u[2]
j=j[2]
v=v[2]
t[15]=1
t[14]=-x
t[13]=-q
t[12]=-r
t[11]=0
t[10]=v
t[9]=j
t[8]=u
t[7]=0
t[6]=e
t[5]=f
t[4]=g
t[3]=0
t[2]=h
t[1]=i
t[0]=s
t[12]=p
t[13]=o
t[14]=n
t=this.c
M.dI(z.M(a,1000),t)
this.d.aN(t)
this.e.c0()
C.X.gcF(window).bB(this)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cp.prototype
return J.f3.prototype}if(typeof a=="string")return J.ap.prototype
if(a==null)return J.f4.prototype
if(typeof a=="boolean")return J.f2.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aL(a)}
J.dv=function(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aL(a)}
J.a6=function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aL(a)}
J.be=function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aL(a)}
J.bf=function(a){if(typeof a=="number")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aK.prototype
return a}
J.iP=function(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aK.prototype
return a}
J.iQ=function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aK.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aL(a)}
J.a8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.dv(a).l(a,b)}
J.dJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.bf(a).M(a,b)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).B(a,b)}
J.H=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.bf(a).Y(a,b)}
J.aO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.bf(a).N(a,b)}
J.aB=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.j0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a6(a).h(a,b)}
J.dK=function(a,b,c,d){return J.e(a).ct(a,b,c,d)}
J.bY=function(a,b){return J.e(a).b1(a,b)}
J.dL=function(a,b,c,d){return J.e(a).b3(a,b,c,d)}
J.bZ=function(a,b,c){return J.e(a).b4(a,b,c)}
J.dM=function(a,b){return J.e(a).cG(a,b)}
J.bl=function(a,b,c){return J.e(a).b5(a,b,c)}
J.dN=function(a,b,c){return J.e(a).b7(a,b,c)}
J.aC=function(a,b,c){return J.e(a).b8(a,b,c)}
J.aP=function(a,b){return J.e(a).cJ(a,b)}
J.dO=function(a,b){return J.e(a).b9(a,b)}
J.dP=function(a,b,c){return J.e(a).ba(a,b,c)}
J.c_=function(a,b,c,d){return J.e(a).bb(a,b,c,d)}
J.dQ=function(a,b){return J.be(a).bc(a,b)}
J.dR=function(a,b,c,d,e){return J.e(a).bd(a,b,c,d,e)}
J.dS=function(a){return J.e(a).I(a)}
J.c0=function(a,b){return J.iQ(a).cL(a,b)}
J.dT=function(a,b){return J.iP(a).R(a,b)}
J.bm=function(a){return J.e(a).bf(a)}
J.dU=function(a){return J.e(a).bg(a)}
J.dV=function(a,b,c,d,e,f,g){return J.e(a).cP(a,b,c,d,e,f,g)}
J.dW=function(a){return J.e(a).bi(a)}
J.dX=function(a){return J.e(a).cQ(a)}
J.dY=function(a,b){return J.e(a).bk(a,b)}
J.bn=function(a,b){return J.e(a).bl(a,b)}
J.dZ=function(a,b,c,d){return J.e(a).bm(a,b,c,d)}
J.e_=function(a,b,c,d,e){return J.e(a).cR(a,b,c,d,e)}
J.e0=function(a,b,c,d,e){return J.e(a).bn(a,b,c,d,e)}
J.e1=function(a,b,c,d,e,f){return J.e(a).cS(a,b,c,d,e,f)}
J.e2=function(a,b){return J.be(a).q(a,b)}
J.aQ=function(a,b){return J.e(a).bo(a,b)}
J.e3=function(a,b){return J.e(a).bp(a,b)}
J.e4=function(a){return J.e(a).cT(a)}
J.c1=function(a,b){return J.be(a).v(a,b)}
J.e5=function(a){return J.e(a).gan(a)}
J.aj=function(a){return J.e(a).gF(a)}
J.a9=function(a){return J.o(a).gw(a)}
J.bo=function(a){return J.be(a).gG(a)}
J.Z=function(a){return J.a6(a).gi(a)}
J.e6=function(a){return J.e(a).ga7(a)}
J.bp=function(a){return J.e(a).gm(a)}
J.bq=function(a){return J.e(a).gn(a)}
J.c2=function(a){return J.e(a).gA(a)}
J.e7=function(a,b){return J.e(a).as(a,b)}
J.e8=function(a,b,c){return J.e(a).at(a,b,c)}
J.e9=function(a){return J.e(a).a8(a)}
J.ea=function(a){return J.e(a).au(a)}
J.eb=function(a,b){return J.e(a).av(a,b)}
J.ec=function(a,b,c){return J.e(a).aw(a,b,c)}
J.c3=function(a,b,c){return J.e(a).az(a,b,c)}
J.ed=function(a,b){return J.e(a).bt(a,b)}
J.ee=function(a,b,c){return J.e(a).bw(a,b,c)}
J.ef=function(a,b,c,d,e){return J.e(a).d4(a,b,c,d,e)}
J.eg=function(a,b,c,d){return J.e(a).aD(a,b,c,d)}
J.eh=function(a,b,c,d,e,f,g){return J.e(a).by(a,b,c,d,e,f,g)}
J.ei=function(a,b,c,d){return J.e(a).bz(a,b,c,d)}
J.c4=function(a,b,c,d){return J.e(a).bA(a,b,c,d)}
J.aD=function(a){return J.o(a).k(a)}
J.ej=function(a,b,c,d){return J.e(a).dc(a,b,c,d)}
J.ek=function(a,b,c){return J.e(a).bD(a,b,c)}
J.el=function(a,b,c){return J.e(a).bE(a,b,c)}
J.br=function(a,b,c){return J.e(a).bF(a,b,c)}
J.em=function(a,b,c){return J.e(a).bG(a,b,c)}
J.c5=function(a,b,c){return J.e(a).bH(a,b,c)}
J.c6=function(a,b,c){return J.e(a).bI(a,b,c)}
J.c7=function(a,b,c){return J.e(a).bJ(a,b,c)}
J.c8=function(a,b,c,d){return J.e(a).bK(a,b,c,d)}
J.c9=function(a,b,c,d){return J.e(a).bL(a,b,c,d)}
J.en=function(a,b){return J.e(a).bM(a,b)}
J.eo=function(a,b,c){return J.e(a).dd(a,b,c)}
J.ep=function(a,b,c,d,e,f,g){return J.e(a).bN(a,b,c,d,e,f,g)}
J.eq=function(a,b,c,d,e){return J.e(a).bP(a,b,c,d,e)}
var $=I.p
C.x=W.aT.prototype
C.y=J.f.prototype
C.c=J.am.prototype
C.b=J.cp.prototype
C.a=J.ao.prototype
C.l=J.ap.prototype
C.F=J.aq.prototype
C.G=H.fg.prototype
C.q=J.fl.prototype
C.n=J.aK.prototype
C.X=W.h4.prototype
C.w=new P.hD()
C.f=new P.hT()
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.B=function(getTagFallback) {
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
C.C=function() {
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
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=new G.r("vec3","vertex btangents",0)
C.d=new G.r("vec3","",0)
C.I=new G.r("vec4","delta from light",0)
C.m=new G.r("","",0)
C.r=new G.r("vec3","vertex coordinates",0)
C.J=new G.r("vec3","vertex binormals",0)
C.t=new G.r("vec4","for wireframe",0)
C.K=new G.r("vec4","per vertex color",0)
C.L=new G.r("float","for normal maps",0)
C.i=new G.r("mat4","",0)
C.N=new G.r("mat4","",4)
C.M=new G.r("mat4","",128)
C.e=new G.r("float","",0)
C.O=new G.r("float","",4)
C.P=new G.r("float","depth for shadowmaps",0)
C.h=new G.r("sampler2D","",0)
C.Q=new G.r("float","for bump maps",0)
C.R=new G.r("vec2","texture uvs",0)
C.S=new G.r("float","time since program start in sec",0)
C.j=new G.r("vec2","",0)
C.T=new G.r("samplerCube","",0)
C.k=new G.r("vec4","",0)
C.U=new G.r("vec3","vertex normals",0)
C.V=new G.r("sampler2DShadow","",0)
C.u=new G.r("vec3","per vertex color",0)
C.v=new G.r("mat3","",0)
C.W=new G.r("vec3","vertex tangents",0)
$.P=0
$.ak=null
$.cd=null
$.dy=null
$.dn=null
$.dE=null
$.bd=null
$.bh=null
$.bV=null
$.ac=null
$.aw=null
$.ax=null
$.bQ=!1
$.t=C.f
$.du=0
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
I.$lazy(y,x,w)}})(["ch","$get$ch",function(){return H.dw("_$dart_dartClosure")},"bz","$get$bz",function(){return H.dw("_$dart_js")},"cR","$get$cR",function(){return H.R(H.b9({
toString:function(){return"$receiver$"}}))},"cS","$get$cS",function(){return H.R(H.b9({$method$:null,
toString:function(){return"$receiver$"}}))},"cT","$get$cT",function(){return H.R(H.b9(null))},"cU","$get$cU",function(){return H.R(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cY","$get$cY",function(){return H.R(H.b9(void 0))},"cZ","$get$cZ",function(){return H.R(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cW","$get$cW",function(){return H.R(H.cX(null))},"cV","$get$cV",function(){return H.R(function(){try{null.$method$}catch(z){return z.message}}())},"d0","$get$d0",function(){return H.R(H.cX(void 0))},"d_","$get$d_",function(){return H.R(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bN","$get$bN",function(){return P.h8()},"cn","$get$cn",function(){var z,y
z=P.aG
y=new P.a3(0,P.h6(),null,[z])
y.cj(null,z)
return y},"ay","$get$ay",function(){return[]},"cI","$get$cI",function(){return new G.cP(1281,0,4294967295)},"cc","$get$cc",function(){return new G.cO(32774,770,769)},"N","$get$N",function(){return P.cs(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.u,"aColorAlpha",C.K,"aPosition",C.r,"aTexUV",C.R,"aNormal",C.U,"aBinormal",C.J,"aCenter",C.t,"aPointSize",C.e,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.W,"aBitangent",C.H,"iaRotation",C.k,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.u,"vTexUV",C.j,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.r,"vPositionFromLight",C.I,"vCenter",C.t,"vDepth",C.P,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.v,"uConvolutionMatrix",C.v,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.V,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.T,"uAnimationTable",C.h,"uTime",C.S,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.d,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.M,"uLightDescs",C.N,"uLightCount",C.e,"uLightTypes",C.O,"uBumpScale",C.Q,"uNormalScale",C.L])},"d3","$get$d3",function(){return C.w},"dG","$get$dG",function(){var z=G.b2("Textured")
z.aH(["aPosition","aTexUV"])
z.a_(["uPerspectiveViewMatrix","uModelMatrix"])
z.aI(["vTexUV"])
z.a0(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"dF","$get$dF",function(){var z=G.b2("TexturedF")
z.aI(["vTexUV"])
z.a_(["uColor","uTexture"])
z.a0(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return z},"dD","$get$dD",function(){var z=G.b2("PointSpritesV")
z.aH(["aPosition"])
z.a_(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.a0(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"dC","$get$dC",function(){var z=G.b2("PointSpritesF")
z.a_(["uTexture"])
z.a0(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"cM","$get$cM",function(){return[T.bL(1,0.2),T.bL(0,0.7),T.bL(0,0.7)]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1},{func:1,args:[,]},{func:1,args:[,,]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.p,args:[P.E]},{func:1,args:[,P.p]},{func:1,args:[P.p]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.au]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.au]},{func:1,v:true,args:[W.aa]},{func:1,v:true,args:[P.a5,T.m]},{func:1,args:[P.E,P.c]},{func:1,v:true,args:[P.az]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.j6(d||a)
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
Isolate.ae=a.ae
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
if(typeof dartMainRunner==="function")dartMainRunner(M.dA,[])
else M.dA([])})})()
//# sourceMappingURL=torusknot_camera.dart.js.map
