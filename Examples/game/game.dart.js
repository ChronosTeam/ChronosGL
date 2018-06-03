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
if(a1==="l"){processStatics(init.statics[b2]=b3.l,b4)
delete b3.l}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bJ"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bJ"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bJ(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b0=function(){}
var dart=[["","",,H,{"^":"",jw:{"^":"c;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
bP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aF:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bN==null){H.iJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cV("Return interceptor for "+H.a(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bj()]
if(v!=null)return v
v=H.iN(a)
if(v!=null)return v
if(typeof a=="function")return C.J
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bj(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
e:{"^":"c;",
C:function(a,b){return a===b},
gu:function(a){return H.am(a)},
k:["bY",function(a){return"Instance of '"+H.an(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
eL:{"^":"e;",
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$isbI:1},
ci:{"^":"e;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
$isaR:1},
bk:{"^":"e;",
gu:function(a){return 0},
k:["c_",function(a){return String(a)}]},
f6:{"^":"bk;"},
aC:{"^":"bk;"},
ak:{"^":"bk;",
k:function(a){var z=a[$.$get$ca()]
return z==null?this.c_(a):J.ac(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ag:{"^":"e;$ti",
G:function(a,b){var z
if(!!a.fixed$length)H.F(P.n("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a5:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.a(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
aJ:function(a,b){return H.cC(a,b,null,H.A(a,0))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
bS:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.F(P.n("setRange"))
P.fe(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$ish){x=e
w=d}else{w=y.aJ(d,e).dk(0,!1)
x=0}y=J.a0(w)
if(x+z>y.gi(w))throw H.b(H.eI())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
a0:function(a,b,c,d){return this.bS(a,b,c,d,0)},
b9:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.S(a))}return!1},
bT:function(a,b){if(!!a.immutable$list)H.F(P.n("sort"))
H.fr(a,J.ie())},
aK:function(a){return this.bT(a,null)},
q:function(a,b){var z
for(z=0;z<a.length;++z)if(J.G(a[z],b))return!0
return!1},
k:function(a){return P.bi(a,"[","]")},
gD:function(a){return new J.ee(a,a.length,0,null,[H.A(a,0)])},
gu:function(a){return H.am(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.F(P.n("set length"))
if(b<0)throw H.b(P.aA(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a_(a,b))
if(b>=a.length||b<0)throw H.b(H.a_(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.F(P.n("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a_(a,b))
if(b>=a.length||b<0)throw H.b(H.a_(a,b))
a[b]=c},
p:function(a,b){var z,y
z=C.a.p(a.length,C.a.gi(b))
y=H.v([],[H.A(a,0)])
this.si(y,z)
this.a0(y,0,a.length,a)
this.a0(y,a.length,z,b)
return y},
$ish:1,
l:{
ah:function(a){a.fixed$length=Array
return a},
ju:[function(a,b){return J.dL(a,b)},"$2","ie",8,0,17]}},
jv:{"^":"ag;$ti"},
ee:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.I(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ai:{"^":"e;",
S:function(a,b){var z
if(typeof b!=="number")throw H.b(H.O(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaw(b)
if(this.gaw(a)===z)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.b(H.O(b))
return a+b},
a1:function(a,b){if(typeof b!=="number")throw H.b(H.O(b))
return a-b},
a7:function(a,b){return a/b},
c1:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b3(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.b3(a,b)},
b3:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.n("Result of truncating division is "+H.a(z)+": "+H.a(a)+" ~/ "+b))},
b1:function(a,b){var z
if(a>0)z=this.cG(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cG:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.b(H.O(b))
return a<b},
a_:function(a,b){if(typeof b!=="number")throw H.b(H.O(b))
return a>b},
$isau:1},
ch:{"^":"ai;",$isE:1},
eM:{"^":"ai;"},
aj:{"^":"e;",
cT:function(a,b){if(b>=a.length)H.F(H.a_(a,b))
return a.charCodeAt(b)},
ae:function(a,b){if(b>=a.length)throw H.b(H.a_(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.b(P.ed(b,null,null))
return a+b},
bV:function(a,b,c){var z
if(c>a.length)throw H.b(P.aA(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bU:function(a,b){return this.bV(a,b,0)},
aN:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.F(H.O(c))
if(b<0)throw H.b(P.aT(b,null,null))
if(typeof c!=="number")return H.a1(c)
if(b>c)throw H.b(P.aT(b,null,null))
if(c>a.length)throw H.b(P.aT(c,null,null))
return a.substring(b,c)},
bW:function(a,b){return this.aN(a,b,null)},
dl:function(a){return a.toLowerCase()},
S:function(a,b){var z
if(typeof b!=="string")throw H.b(H.O(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gu:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
$isl:1}}],["","",,H,{"^":"",
eH:function(){return new P.aW("No element")},
eJ:function(){return new P.aW("Too many elements")},
eI:function(){return new P.aW("Too few elements")},
fr:function(a,b){H.aB(a,0,J.K(a)-1,b)},
aB:function(a,b,c,d){if(c-b<=32)H.fq(a,b,c,d)
else H.fp(a,b,c,d)},
fq:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a0(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.x(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
fp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.Y(c-b+1,6)
y=b+z
x=c-z
w=C.a.Y(b+c,2)
v=w-z
u=w+z
t=J.a0(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.x(d.$2(s,r),0)){n=r
r=s
s=n}if(J.x(d.$2(p,o),0)){n=o
o=p
p=n}if(J.x(d.$2(s,q),0)){n=q
q=s
s=n}if(J.x(d.$2(r,q),0)){n=q
q=r
r=n}if(J.x(d.$2(s,p),0)){n=p
p=s
s=n}if(J.x(d.$2(q,p),0)){n=p
p=q
q=n}if(J.x(d.$2(r,o),0)){n=o
o=r
r=n}if(J.x(d.$2(r,q),0)){n=q
q=r
r=n}if(J.x(d.$2(p,o),0)){n=o
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
h=J.q(i)
if(h.C(i,0))continue
if(h.T(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aE(i)
if(h.a_(i,0)){--l
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
if(J.ab(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.x(d.$2(j,p),0))for(;!0;)if(J.x(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.ab(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aB(a,b,m-2,d)
H.aB(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.G(d.$2(t.h(a,m),r),0);)++m
for(;J.G(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.G(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.G(d.$2(j,p),0))for(;!0;)if(J.G(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.ab(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aB(a,m,l,d)}else H.aB(a,m,l,d)},
bd:{"^":"aO;$ti"},
aQ:{"^":"bd;$ti",
gD:function(a){return new H.cn(this,this.gi(this),0,null,[H.dv(this,"aQ",0)])},
az:function(a,b){return this.bZ(0,b)}},
fz:{"^":"aQ;a,b,c,$ti",
ce:function(a,b,c,d){},
gcu:function(){var z=J.K(this.a)
return z},
gcH:function(){var z,y
z=J.K(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.K(this.a)
y=this.b
if(y>=z)return 0
return z-y},
m:function(a,b){var z,y
z=this.gcH()+b
if(b>=0){y=this.gcu()
if(typeof y!=="number")return H.a1(y)
y=z>=y}else y=!0
if(y)throw H.b(P.t(b,this,"index",null,null))
return J.bW(this.a,z)},
dk:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a0(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.v(u,this.$ti)
for(s=0;s<v;++s){u=x.m(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.b(P.S(this))}return t},
l:{
cC:function(a,b,c,d){var z=new H.fz(a,b,c,[d])
z.ce(a,b,c,d)
return z}}},
cn:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z,y,x,w
z=this.a
y=J.a0(z)
x=y.gi(z)
if(this.b!==x)throw H.b(P.S(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.m(z,w);++this.c
return!0}},
eV:{"^":"aQ;a,b,$ti",
gi:function(a){return J.K(this.a)},
m:function(a,b){return this.b.$1(J.bW(this.a,b))},
$asbd:function(a,b){return[b]},
$asaQ:function(a,b){return[b]},
$asaO:function(a,b){return[b]}},
cW:{"^":"aO;a,b,$ti",
gD:function(a){return new H.fJ(J.ax(this.a),this.b,this.$ti)}},
fJ:{"^":"eK;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=this.b;z.n();)if(y.$1(z.gt(z))===!0)return!0
return!1},
gt:function(a){var z=this.a
return z.gt(z)}},
aM:{"^":"c;$ti"}}],["","",,H,{"^":"",
iB:function(a){return init.types[a]},
iM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$ism},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.b(H.O(a))
return z},
am:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
an:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.q(a).$isaC){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.ae(w,0)===36)w=C.h.bW(w,1)
r=H.bO(H.a6(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
z:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fd:function(a){return a.b?H.z(a).getUTCFullYear()+0:H.z(a).getFullYear()+0},
fb:function(a){return a.b?H.z(a).getUTCMonth()+1:H.z(a).getMonth()+1},
f7:function(a){return a.b?H.z(a).getUTCDate()+0:H.z(a).getDate()+0},
f8:function(a){return a.b?H.z(a).getUTCHours()+0:H.z(a).getHours()+0},
fa:function(a){return a.b?H.z(a).getUTCMinutes()+0:H.z(a).getMinutes()+0},
fc:function(a){return a.b?H.z(a).getUTCSeconds()+0:H.z(a).getSeconds()+0},
f9:function(a){return a.b?H.z(a).getUTCMilliseconds()+0:H.z(a).getMilliseconds()+0},
a1:function(a){throw H.b(H.O(a))},
d:function(a,b){if(a==null)J.K(a)
throw H.b(H.a_(a,b))},
a_:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a3(!0,b,"index",null)
z=J.K(a)
if(!(b<0)){if(typeof z!=="number")return H.a1(z)
y=b>=z}else y=!0
if(y)return P.t(b,a,"index",null,z)
return P.aT(b,"index",null)},
O:function(a){return new P.a3(!0,a,null,null)},
dn:function(a){if(typeof a!=="number")throw H.b(H.O(a))
return a},
b:function(a){var z
if(a==null)a=new P.ct()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dD})
z.name=""}else z.toString=H.dD
return z},
dD:function(){return J.ac(this.dartException)},
F:function(a){throw H.b(a)},
I:function(a){throw H.b(P.S(a))},
J:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.iT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.b1(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bl(H.a(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cs(H.a(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$cJ()
u=$.$get$cK()
t=$.$get$cL()
s=$.$get$cM()
r=$.$get$cQ()
q=$.$get$cR()
p=$.$get$cO()
$.$get$cN()
o=$.$get$cT()
n=$.$get$cS()
m=v.I(y)
if(m!=null)return z.$1(H.bl(y,m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.bl(y,m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cs(y,m))}}return z.$1(new H.fG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cz()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a3(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cz()
return a},
a7:function(a){var z
if(a==null)return new H.da(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.da(a,null)},
iw:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
iL:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.ce("Unsupported number of arguments for wrapped closure"))},
at:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iL)
a.$identity=z
return z},
en:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$ish){z.$reflectionInfo=c
x=H.fg(z).r}else x=c
w=d?Object.create(new H.ft().constructor.prototype):Object.create(new H.ba(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.L
$.L=J.R(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.c8(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.iB,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.c7:H.bb
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.c8(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
ek:function(a,b,c,d){var z=H.bb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
c8:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.em(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ek(y,!w,z,b)
if(y===0){w=$.L
$.L=J.R(w,1)
u="self"+H.a(w)
w="return function(){var "+u+" = this."
v=$.ad
if(v==null){v=H.aK("self")
$.ad=v}return new Function(w+H.a(v)+";return "+u+"."+H.a(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.L
$.L=J.R(w,1)
t+=H.a(w)
w="return function("+t+"){return this."
v=$.ad
if(v==null){v=H.aK("self")
$.ad=v}return new Function(w+H.a(v)+"."+H.a(z)+"("+t+");}")()},
el:function(a,b,c,d){var z,y
z=H.bb
y=H.c7
switch(b?-1:a){case 0:throw H.b(H.fl("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
em:function(a,b){var z,y,x,w,v,u,t,s
z=$.ad
if(z==null){z=H.aK("self")
$.ad=z}y=$.c6
if(y==null){y=H.aK("receiver")
$.c6=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.el(w,!u,x,b)
if(w===1){z="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
y=$.L
$.L=J.R(y,1)
return new Function(z+H.a(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
y=$.L
$.L=J.R(y,1)
return new Function(z+H.a(y)+"}")()},
bJ:function(a,b,c,d,e,f){var z,y
z=J.ah(b)
y=!!J.q(c).$ish?J.ah(c):c
return H.en(a,z,y,!!d,e,f)},
iQ:function(a,b){var z=J.a0(b)
throw H.b(H.ei(a,z.aN(b,3,z.gi(b))))},
Q:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.iQ(a,b)},
bL:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ds:function(a,b){var z,y
if(a==null)return!1
z=H.bL(J.q(a))
if(z==null)y=!1
else y=H.dy(z,b)
return y},
im:function(a){var z
if(a instanceof H.j){z=H.bL(J.q(a))
if(z!=null)return H.bQ(z,null)
return"Closure"}return H.an(a)},
iS:function(a){throw H.b(new P.er(a))},
du:function(a){return init.getIsolateTag(a)},
v:function(a,b){a.$ti=b
return a},
a6:function(a){if(a==null)return
return a.$ti},
kK:function(a,b,c){return H.av(a["$as"+H.a(c)],H.a6(b))},
aG:function(a,b,c,d){var z=H.av(a["$as"+H.a(c)],H.a6(b))
return z==null?null:z[d]},
dv:function(a,b,c){var z=H.av(a["$as"+H.a(b)],H.a6(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.a6(a)
return z==null?null:z[b]},
bQ:function(a,b){var z=H.aa(a,b)
return z},
aa:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bO(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.a(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aa(z,b)
return H.id(a,b)}return"unknown-reified-type"},
id:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aa(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aa(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aa(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.iv(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aa(r[p],b)+(" "+H.a(p))}w+="}"}return"("+w+") => "+z},
bO:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bv("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aa(u,c)}return w?"":"<"+z.k(0)+">"},
iA:function(a){var z,y,x
if(a instanceof H.j){z=H.bL(J.q(a))
if(z!=null)return H.bQ(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bO(a.$ti,0,null)
return y+x},
av:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dp:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.a6(a)
y=J.q(a)
if(y[b]==null)return!1
return H.dl(H.av(y[d],z),c)},
dl:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.B(a[y],b[y]))return!1
return!0},
kI:function(a,b,c){return a.apply(b,H.av(J.q(b)["$as"+H.a(c)],H.a6(b)))},
B:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aR")return!0
if('func' in b)return H.dy(a,b)
if('func' in a)return b.builtin$cls==="jn"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.bQ(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dl(H.av(u,z),x)},
dk:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.B(z,v)||H.B(v,z)))return!1}return!0},
io:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.ah(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.B(v,u)||H.B(u,v)))return!1}return!0},
dy:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.B(z,y)||H.B(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dk(x,w,!1))return!1
if(!H.dk(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.B(o,n)||H.B(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.B(o,n)||H.B(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.B(o,n)||H.B(n,o)))return!1}}return H.io(a.named,b.named)},
kJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
iN:function(a){var z,y,x,w,v,u
z=$.dw.$1(a)
y=$.b_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dj.$2(a,z)
if(z!=null){y=$.b_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.b3(x)
$.b_[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.b2[z]=x
return x}if(v==="-"){u=H.b3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dB(a,x)
if(v==="*")throw H.b(P.cV(z))
if(init.leafTags[z]===true){u=H.b3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dB(a,x)},
dB:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bP(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
b3:function(a){return J.bP(a,!1,null,!!a.$ism)},
iP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.b3(z)
else return J.bP(z,c,null,null)},
iJ:function(){if(!0===$.bN)return
$.bN=!0
H.iK()},
iK:function(){var z,y,x,w,v,u,t,s
$.b_=Object.create(null)
$.b2=Object.create(null)
H.iF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dC.$1(v)
if(u!=null){t=H.iP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iF:function(){var z,y,x,w,v,u,t
z=C.G()
z=H.a5(C.D,H.a5(C.I,H.a5(C.u,H.a5(C.u,H.a5(C.H,H.a5(C.E,H.a5(C.F(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dw=new H.iG(v)
$.dj=new H.iH(u)
$.dC=new H.iI(t)},
a5:function(a,b){return a(b)||b},
ff:{"^":"c;a,b,c,d,e,f,r,x",l:{
fg:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ah(z)
y=z[0]
x=z[1]
return new H.ff(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
fC:{"^":"c;a,b,c,d,e,f",
I:function(a){var z,y,x
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
l:{
M:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.fC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
aX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cP:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
f5:{"^":"w;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.a(this.a)
return"NullError: method not found: '"+H.a(z)+"' on null"},
l:{
cs:function(a,b){return new H.f5(a,b==null?null:b.method)}}},
eN:{"^":"w;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.a(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.a(this.a)+")"},
l:{
bl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eN(a,y,z?null:b.receiver)}}},
fG:{"^":"w;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
iT:{"^":"j:0;a",
$1:function(a){if(!!J.q(a).$isw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
da:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaV:1},
j:{"^":"c;",
k:function(a){return"Closure '"+H.an(this).trim()+"'"},
gbO:function(){return this},
gbO:function(){return this}},
cD:{"^":"j;"},
ft:{"^":"cD;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ba:{"^":"cD;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ba))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var z,y
z=this.c
if(z==null)y=H.am(this.a)
else y=typeof z!=="object"?J.a2(z):H.am(z)
return(y^H.am(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.an(z)+"'")},
l:{
bb:function(a){return a.a},
c7:function(a){return a.c},
aK:function(a){var z,y,x,w,v
z=new H.ba("self","target","receiver","name")
y=J.ah(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eh:{"^":"w;a",
k:function(a){return this.a},
l:{
ei:function(a,b){return new H.eh("CastError: "+H.a(P.bf(a))+": type '"+H.im(a)+"' is not a subtype of type '"+b+"'")}}},
fk:{"^":"w;a",
k:function(a){return"RuntimeError: "+H.a(this.a)},
l:{
fl:function(a){return new H.fk(a)}}},
cU:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gu:function(a){return J.a2(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.cU&&J.G(this.a,b.a)}},
cj:{"^":"bo;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gE:function(a){return new H.eT(this,[H.A(this,0)])},
au:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.aX(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.aX(y,b)}else return this.d5(b)},
d5:function(a){var z=this.d
if(z==null)return!1
return this.av(this.am(z,J.a2(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a2(z,b)
x=y==null?null:y.gZ()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a2(w,b)
x=y==null?null:y.gZ()
return x}else return this.d6(b)},
d6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.am(z,J.a2(a)&0x3ffffff)
x=this.av(y,a)
if(x<0)return
return y[x].gZ()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ao()
this.b=z}this.aU(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ao()
this.c=y}this.aU(y,b,c)}else{x=this.d
if(x==null){x=this.ao()
this.d=x}w=J.a2(b)&0x3ffffff
v=this.am(x,w)
if(v==null)this.as(x,w,[this.ad(b,c)])
else{u=this.av(v,b)
if(u>=0)v[u].sZ(c)
else v.push(this.ad(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.S(this))
z=z.c}},
aU:function(a,b,c){var z=this.a2(a,b)
if(z==null)this.as(a,b,this.ad(b,c))
else z.sZ(c)},
aY:function(){this.r=this.r+1&67108863},
ad:function(a,b){var z,y
z=new H.eS(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aY()
return z},
av:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].gd4(),b))return y
return-1},
k:function(a){return P.co(this)},
a2:function(a,b){return a[b]},
am:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
cs:function(a,b){delete a[b]},
aX:function(a,b){return this.a2(a,b)!=null},
ao:function(){var z=Object.create(null)
this.as(z,"<non-identifier-key>",z)
this.cs(z,"<non-identifier-key>")
return z}},
eS:{"^":"c;d4:a<,Z:b@,c,d"},
eT:{"^":"bd;a,$ti",
gi:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.al(z,z.r,null,null,this.$ti)
y.c=z.e
return y}},
al:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.S(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
iG:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
iH:{"^":"j:9;a",
$2:function(a,b){return this.a(a,b)}},
iI:{"^":"j:10;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
iv:function(a){return J.ah(H.v(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
aH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
N:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.a_(b,a))},
f1:{"^":"e;","%":"DataView;ArrayBufferView;br|d4|d5|cp|d6|d7|V"},
br:{"^":"f1;",
gi:function(a){return a.length},
$ism:1,
$asm:I.b0},
cp:{"^":"d5;",
h:function(a,b){H.N(b,a,a.length)
return a[b]},
j:function(a,b,c){H.N(b,a,a.length)
a[b]=c},
$asaM:function(){return[P.bK]},
$asi:function(){return[P.bK]},
$ish:1,
$ash:function(){return[P.bK]},
"%":"Float64Array"},
V:{"^":"d7;",
j:function(a,b,c){H.N(b,a,a.length)
a[b]=c},
$asaM:function(){return[P.E]},
$asi:function(){return[P.E]},
$ish:1,
$ash:function(){return[P.E]}},
f0:{"^":"cp;","%":"Float32Array"},
jK:{"^":"V;",
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":"Int16Array"},
jL:{"^":"V;",
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":"Int32Array"},
jM:{"^":"V;",
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":"Int8Array"},
jN:{"^":"V;",
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
jO:{"^":"V;",
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
jP:{"^":"V;",
gi:function(a){return a.length},
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
jQ:{"^":"V;",
gi:function(a){return a.length},
h:function(a,b){H.N(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
d4:{"^":"br+i;"},
d5:{"^":"d4+aM;"},
d6:{"^":"br+i;"},
d7:{"^":"d6+aM;"}}],["","",,P,{"^":"",
fN:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ip()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.at(new P.fP(z),1)).observe(y,{childList:true})
return new P.fO(z,y,x)}else if(self.setImmediate!=null)return P.iq()
return P.ir()},
ku:[function(a){self.scheduleImmediate(H.at(new P.fQ(a),0))},"$1","ip",4,0,5],
kv:[function(a){self.setImmediate(H.at(new P.fR(a),0))},"$1","iq",4,0,5],
kw:[function(a){P.hW(0,a)},"$1","ir",4,0,5],
ii:function(a,b){if(H.ds(a,{func:1,args:[P.aR,P.aR]})){b.toString
return a}else{b.toString
return a}},
ih:function(){var z,y
for(;z=$.a4,z!=null;){$.ar=null
y=z.b
$.a4=y
if(y==null)$.aq=null
z.a.$0()}},
kH:[function(){$.bG=!0
try{P.ih()}finally{$.ar=null
$.bG=!1
if($.a4!=null)$.$get$bB().$1(P.dm())}},"$0","dm",0,0,3],
dh:function(a){var z=new P.cX(a,null)
if($.a4==null){$.aq=z
$.a4=z
if(!$.bG)$.$get$bB().$1(P.dm())}else{$.aq.b=z
$.aq=z}},
il:function(a){var z,y,x
z=$.a4
if(z==null){P.dh(a)
$.ar=$.aq
return}y=new P.cX(a,null)
x=$.ar
if(x==null){y.b=z
$.ar=y
$.a4=y}else{y.b=x.b
x.b=y
$.ar=y
if(y.b==null)$.aq=y}},
iR:function(a){var z=$.u
if(C.e===z){P.aZ(null,null,C.e,a)
return}z.toString
P.aZ(null,null,z,z.bc(a))},
aY:function(a,b,c,d,e){var z={}
z.a=d
P.il(new P.ij(z,e))},
df:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
dg:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
ik:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
aZ:function(a,b,c,d){var z=C.e!==c
if(z)d=!(!z||!1)?c.bc(d):c.cQ(d)
P.dh(d)},
fP:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
fO:{"^":"j:11;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
fQ:{"^":"j:1;a",
$0:function(){this.a.$0()}},
fR:{"^":"j:1;a",
$0:function(){this.a.$0()}},
hV:{"^":"c;a,b,c",
cn:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.at(new P.hX(this,b),0),a)
else throw H.b(P.n("`setTimeout()` not found."))},
l:{
hW:function(a,b){var z=new P.hV(!0,null,0)
z.cn(a,b)
return z}}},
hX:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
j5:{"^":"c;$ti"},
fU:{"^":"c;$ti"},
hQ:{"^":"fU;a,$ti",
cU:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.bu("Future already completed"))
z.ag(b)}},
h5:{"^":"c;aq:a<,b,c,d,e,$ti",
gcK:function(){return this.b.b},
gbu:function(){return(this.c&1)!==0},
gd3:function(){return(this.c&2)!==0},
gbt:function(){return this.c===8},
d1:function(a){return this.b.b.ay(this.d,a)},
d9:function(a){if(this.c!==6)return!0
return this.b.b.ay(this.d,J.aw(a))},
d0:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.ds(z,{func:1,args:[P.c,P.aV]}))return x.dg(z,y.gF(a),a.gV())
else return x.ay(z,y.gF(a))},
d2:function(){return this.b.b.by(this.d)}},
aD:{"^":"c;b2:a<,b,cD:c<,$ti",
gcz:function(){return this.a===2},
gan:function(){return this.a>=4},
bA:function(a,b){var z,y,x
z=$.u
if(z!==C.e){z.toString
if(b!=null)b=P.ii(b,z)}y=new P.aD(0,z,null,[null])
x=b==null?1:3
this.aW(new P.h5(null,y,x,a,b,[H.A(this,0),null]))
return y},
bz:function(a){return this.bA(a,null)},
aW:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gan()){y.aW(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aZ(null,null,z,new P.h6(this,a))}},
b_:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaq()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gan()){v.b_(a)
return}this.a=v.a
this.c=v.c}z.a=this.ar(a)
y=this.b
y.toString
P.aZ(null,null,y,new P.hb(z,this))}},
a3:function(){var z=this.c
this.c=null
return this.ar(z)},
ar:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaq()
z.a=y}return y},
ag:function(a){var z,y,x
z=this.$ti
y=H.dp(a,"$isaN",z,"$asaN")
if(y){z=H.dp(a,"$isaD",z,null)
if(z)P.cZ(a,this)
else P.h7(a,this)}else{x=this.a3()
this.a=4
this.c=a
P.ap(this,x)}},
ah:[function(a,b){var z=this.a3()
this.a=8
this.c=new P.aJ(a,b)
P.ap(this,z)},function(a){return this.ah(a,null)},"dr","$2","$1","gcq",4,2,12],
$isaN:1,
l:{
h7:function(a,b){var z,y,x
b.a=1
try{a.bA(new P.h8(b),new P.h9(b))}catch(x){z=H.J(x)
y=H.a7(x)
P.iR(new P.ha(b,z,y))}},
cZ:function(a,b){var z
for(;a.gcz();)a=a.c
if(a.gan()){z=b.a3()
b.a=a.a
b.c=a.c
P.ap(b,z)}else{z=b.c
b.a=2
b.c=a
a.b_(z)}},
ap:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aw(v)
t=v.gV()
y.toString
P.aY(null,null,y,u,t)}return}for(;b.gaq()!=null;b=s){s=b.a
b.a=null
P.ap(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbu()||b.gbt()){q=b.gcK()
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
t=v.gV()
y.toString
P.aY(null,null,y,u,t)
return}p=$.u
if(p==null?q!=null:p!==q)$.u=q
else p=null
if(b.gbt())new P.he(z,x,b,w).$0()
else if(y){if(b.gbu())new P.hd(x,b,r).$0()}else if(b.gd3())new P.hc(z,x,b).$0()
if(p!=null)$.u=p
y=x.b
if(!!J.q(y).$isaN){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.ar(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.cZ(y,o)
return}}o=b.b
b=o.a3()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
h6:{"^":"j:1;a,b",
$0:function(){P.ap(this.a,this.b)}},
hb:{"^":"j:1;a,b",
$0:function(){P.ap(this.b,this.a.a)}},
h8:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.ag(a)}},
h9:{"^":"j:13;a",
$2:function(a,b){this.a.ah(a,b)},
$1:function(a){return this.$2(a,null)}},
ha:{"^":"j:1;a,b,c",
$0:function(){this.a.ah(this.b,this.c)}},
he:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.d2()}catch(w){y=H.J(w)
x=H.a7(w)
if(this.d){v=J.aw(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aJ(y,x)
u.a=!0
return}if(!!J.q(z).$isaN){if(z instanceof P.aD&&z.gb2()>=4){if(z.gb2()===8){v=this.b
v.b=z.gcD()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bz(new P.hf(t))
v.a=!1}}},
hf:{"^":"j:0;a",
$1:function(a){return this.a}},
hd:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.d1(this.c)}catch(x){z=H.J(x)
y=H.a7(x)
w=this.a
w.b=new P.aJ(z,y)
w.a=!0}}},
hc:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.d9(z)===!0&&w.e!=null){v=this.b
v.b=w.d0(z)
v.a=!1}}catch(u){y=H.J(u)
x=H.a7(u)
w=this.a
v=J.aw(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aJ(y,x)
s.a=!0}}},
cX:{"^":"c;a,b"},
fv:{"^":"c;$ti",
gi:function(a){var z,y
z={}
y=new P.aD(0,$.u,null,[P.E])
z.a=0
this.d8(new P.fx(z),!0,new P.fy(z,y),y.gcq())
return y}},
fx:{"^":"j:0;a",
$1:function(a){++this.a.a}},
fy:{"^":"j:1;a,b",
$0:function(){this.b.ag(this.a.a)}},
fw:{"^":"c;$ti"},
aJ:{"^":"c;F:a>,V:b<",
k:function(a){return H.a(this.a)},
$isw:1},
i2:{"^":"c;"},
ij:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ct()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.ac(y)
throw x}},
hz:{"^":"i2;",
dh:function(a){var z,y,x
try{if(C.e===$.u){a.$0()
return}P.df(null,null,this,a)}catch(x){z=H.J(x)
y=H.a7(x)
P.aY(null,null,this,z,y)}},
di:function(a,b){var z,y,x
try{if(C.e===$.u){a.$1(b)
return}P.dg(null,null,this,a,b)}catch(x){z=H.J(x)
y=H.a7(x)
P.aY(null,null,this,z,y)}},
cQ:function(a){return new P.hB(this,a)},
bc:function(a){return new P.hA(this,a)},
cR:function(a){return new P.hC(this,a)},
by:function(a){if($.u===C.e)return a.$0()
return P.df(null,null,this,a)},
ay:function(a,b){if($.u===C.e)return a.$1(b)
return P.dg(null,null,this,a,b)},
dg:function(a,b,c){if($.u===C.e)return a.$2(b,c)
return P.ik(null,null,this,a,b,c)}},
hB:{"^":"j:1;a,b",
$0:function(){return this.a.by(this.b)}},
hA:{"^":"j:1;a,b",
$0:function(){return this.a.dh(this.b)}},
hC:{"^":"j:0;a,b",
$1:function(a){return this.a.di(this.b,a)}}}],["","",,P,{"^":"",
T:function(){return new H.cj(0,null,null,null,null,null,0,[null,null])},
cl:function(a){return H.iw(a,new H.cj(0,null,null,null,null,null,0,[null,null]))},
U:function(a,b,c,d){return new P.hm(0,null,null,null,null,null,0,[d])},
eG:function(a,b,c){var z,y
if(P.bH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$as()
y.push(a)
try{P.ig(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.cB(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bi:function(a,b,c){var z,y,x
if(P.bH(a))return b+"..."+c
z=new P.bv(b)
y=$.$get$as()
y.push(a)
try{x=z
x.a=P.cB(x.gO(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gO()+c
y=z.gO()
return y.charCodeAt(0)==0?y:y},
bH:function(a){var z,y
for(z=0;y=$.$get$as(),z<y.length;++z)if(a===y[z])return!0
return!1},
ig:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.n())return
w=H.a(z.gt(z))
b.push(w)
y+=w.length+2;++x}if(!z.n()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gt(z);++x
if(!z.n()){if(x<=4){b.push(H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gt(z);++x
for(;z.n();t=s,s=r){r=z.gt(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bm:function(a,b){var z,y
z=P.U(null,null,null,b)
for(y=J.ax(a);y.n();)z.P(0,y.gt(y))
return z},
co:function(a){var z,y,x
z={}
if(P.bH(a))return"{...}"
y=new P.bv("")
try{$.$get$as().push(a)
x=y
x.a=x.gO()+"{"
z.a=!0
J.dV(a,new P.eU(z,y))
z=y
z.a=z.gO()+"}"}finally{z=$.$get$as()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gO()
return z.charCodeAt(0)==0?z:z},
hm:{"^":"hg;a,b,c,d,e,f,r,$ti",
gD:function(a){var z=new P.d2(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
q:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cr(b)},
cr:function(a){var z=this.d
if(z==null)return!1
return this.al(z[this.ai(a)],a)>=0},
P:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bF()
this.b=z}return this.aV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bF()
this.c=y}return this.aV(y,b)}else return this.co(0,b)},
co:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bF()
this.d=z}y=this.ai(b)
x=z[y]
if(x==null)z[y]=[this.ap(b)]
else{if(this.al(x,b)>=0)return!1
x.push(this.ap(b))}return!0},
df:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b0(this.c,b)
else return this.cB(0,b)},
cB:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ai(b)]
x=this.al(y,b)
if(x<0)return!1
this.b4(y.splice(x,1)[0])
return!0},
at:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.af()}},
aV:function(a,b){if(a[b]!=null)return!1
a[b]=this.ap(b)
return!0},
b0:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.b4(z)
delete a[b]
return!0},
af:function(){this.r=this.r+1&67108863},
ap:function(a){var z,y
z=new P.hn(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.af()
return z},
b4:function(a){var z,y
z=a.gcA()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.af()},
ai:function(a){return J.a2(a)&0x3ffffff},
al:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].gct(),b))return y
return-1},
l:{
bF:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
hn:{"^":"c;ct:a<,b,cA:c<"},
d2:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.S(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
hg:{"^":"fm;$ti"},
jz:{"^":"c;$ti"},
cm:{"^":"d3;$ti",$ish:1},
i:{"^":"c;$ti",
gD:function(a){return new H.cn(a,this.gi(a),0,null,[H.aG(this,a,"i",0)])},
m:function(a,b){return this.h(a,b)},
d_:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.S(a))}return y},
aJ:function(a,b){return H.cC(a,b,null,H.aG(this,a,"i",0))},
p:function(a,b){var z=H.v([],[H.aG(this,a,"i",0)])
C.b.si(z,C.a.p(this.gi(a),C.a.gi(b)))
C.b.a0(z,0,this.gi(a),a)
C.b.a0(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bi(a,"[","]")}},
bo:{"^":"C;$ti"},
eU:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.a(a)
z.a=y+": "
z.a+=H.a(b)}},
C:{"^":"c;$ti",
w:function(a,b){var z,y
for(z=J.ax(this.gE(a));z.n();){y=z.gt(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.K(this.gE(a))},
k:function(a){return P.co(a)}},
fn:{"^":"c;$ti",
G:function(a,b){var z
for(z=J.ax(b);z.n();)this.P(0,z.gt(z))},
k:function(a){return P.bi(this,"{","}")}},
fm:{"^":"fn;$ti"},
d3:{"^":"c+i;$ti"}}],["","",,P,{"^":"",
eA:function(a){var z=J.q(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.an(a)+"'"},
bf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eA(a)},
ce:function(a){return new P.h2(a)},
a9:function(a){H.aH(H.a(a))},
bI:{"^":"c;"},
"+bool":0,
cb:{"^":"c;cJ:a<,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.cb))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.a.S(this.a,b.gcJ())},
gu:function(a){var z=this.a
return(z^C.a.b1(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.es(H.fd(this))
y=P.ay(H.fb(this))
x=P.ay(H.f7(this))
w=P.ay(H.f8(this))
v=P.ay(H.fa(this))
u=P.ay(H.fc(this))
t=P.et(H.f9(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
l:{
es:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
et:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ay:function(a){if(a>=10)return""+a
return"0"+a}}},
bK:{"^":"au;"},
"+double":0,
az:{"^":"c;W:a<",
p:function(a,b){return new P.az(C.a.p(this.a,b.gW()))},
a1:function(a,b){return new P.az(this.a-b.gW())},
T:function(a,b){return C.a.T(this.a,b.gW())},
a_:function(a,b){return C.a.a_(this.a,b.gW())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.a.S(this.a,b.gW())},
k:function(a){var z,y,x,w,v
z=new P.ex()
y=this.a
if(y<0)return"-"+new P.az(0-y).k(0)
x=z.$1(C.a.Y(y,6e7)%60)
w=z.$1(C.a.Y(y,1e6)%60)
v=new P.ew().$1(y%1e6)
return""+C.a.Y(y,36e8)+":"+H.a(x)+":"+H.a(w)+"."+H.a(v)},
l:{
ev:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ew:{"^":"j:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ex:{"^":"j:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
w:{"^":"c;",
gV:function(){return H.a7(this.$thrownJsError)}},
ct:{"^":"w;",
k:function(a){return"Throw of null."}},
a3:{"^":"w;a,b,c,d",
gak:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaj:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gak()+y+x
if(!this.a)return w
v=this.gaj()
u=P.bf(this.b)
return w+v+": "+H.a(u)},
l:{
ed:function(a,b,c){return new P.a3(!0,a,b,c)}}},
cv:{"^":"a3;e,f,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else if(x>z)y=": Not in range "+H.a(z)+".."+H.a(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.a(z)}return y},
l:{
aT:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
fe:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.aA(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.aA(b,a,c,"end",f))
return b}}},
eF:{"^":"a3;e,i:f>,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){if(J.ab(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
l:{
t:function(a,b,c,d,e){var z=e!=null?e:J.K(b)
return new P.eF(b,z,!0,a,c,"Index out of range")}}},
fH:{"^":"w;a",
k:function(a){return"Unsupported operation: "+this.a},
l:{
n:function(a){return new P.fH(a)}}},
fF:{"^":"w;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.a(z):"UnimplementedError"},
l:{
cV:function(a){return new P.fF(a)}}},
aW:{"^":"w;a",
k:function(a){return"Bad state: "+this.a},
l:{
bu:function(a){return new P.aW(a)}}},
eo:{"^":"w;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.bf(z))+"."},
l:{
S:function(a){return new P.eo(a)}}},
cz:{"^":"c;",
k:function(a){return"Stack Overflow"},
gV:function(){return},
$isw:1},
er:{"^":"w;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.a(z)+"' during its initialization"}},
jh:{"^":"c;"},
h2:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
E:{"^":"au;"},
"+int":0,
aO:{"^":"c;$ti",
az:["bZ",function(a,b){return new H.cW(this,b,[H.dv(this,"aO",0)])}],
gi:function(a){var z,y
z=this.gD(this)
for(y=0;z.n();)++y
return y},
gM:function(a){var z,y
z=this.gD(this)
if(!z.n())throw H.b(H.eH())
y=z.gt(z)
if(z.n())throw H.b(H.eJ())
return y},
m:function(a,b){var z,y,x
if(b<0)H.F(P.aA(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.n();){x=z.gt(z)
if(b===y)return x;++y}throw H.b(P.t(b,this,"index",null,y))},
k:function(a){return P.eG(this,"(",")")}},
eK:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bn:{"^":"c;$ti"},
aR:{"^":"c;",
gu:function(a){return P.c.prototype.gu.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
au:{"^":"c;"},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gu:function(a){return H.am(this)},
k:function(a){return"Instance of '"+H.an(this)+"'"},
toString:function(){return this.k(this)}},
aV:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
bv:{"^":"c;O:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
l:{
cB:function(a,b,c){var z=J.ax(b)
if(!z.n())return a
if(c.length===0){do a+=H.a(z.gt(z))
while(z.n())}else{a+=H.a(z.gt(z))
for(;z.n();)a=a+c+H.a(z.gt(z))}return a}}}}],["","",,W,{"^":"",
iu:function(){return document},
ey:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).H(z,a,b,c)
y.toString
z=new H.cW(new W.H(y),new W.ez(),[W.o])
return z.gM(z)},
af:function(a){var z,y,x
z="element tag unavailable"
try{y=J.dY(a)
if(typeof y==="string")z=a.tagName}catch(x){H.J(x)}return z},
Y:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
d1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
di:function(a){var z=$.u
if(z===C.e)return a
return z.cR(a)},
r:{"^":"ae;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
iU:{"^":"y;bx:pressed=","%":"AccessibleNode"},
iV:{"^":"e;i:length=","%":"AccessibleNodeList"},
iW:{"^":"r;a4:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
iX:{"^":"r;a4:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
j0:{"^":"r;a4:href}","%":"HTMLBaseElement"},
b9:{"^":"r;",$isb9:1,"%":"HTMLBodyElement"},
j1:{"^":"r;v:name=","%":"HTMLButtonElement"},
j2:{"^":"r;A:height},B:width}",
bQ:function(a,b,c){var z=a.getContext(b,P.is(c,null))
return z},
"%":"HTMLCanvasElement"},
j3:{"^":"e;",
a8:function(a){return P.D(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
j4:{"^":"o;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
j6:{"^":"eq;i:length=","%":"CSSPerspective"},
j7:{"^":"fV;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ep:{"^":"c;"},
c9:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
eq:{"^":"e;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
j8:{"^":"c9;i:length=","%":"CSSTransformValue"},
j9:{"^":"c9;i:length=","%":"CSSUnparsedValue"},
ja:{"^":"e;i:length=","%":"DataTransferItemList"},
jb:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
jc:{"^":"fX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.W]},
$asi:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]},
$ask:function(){return[P.W]},
"%":"ClientRectList|DOMRectList"},
eu:{"^":"e;",
k:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(this.gB(a))+" x "+H.a(this.gA(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isW)return!1
return a.left===b.left&&a.top===b.top&&this.gB(a)===z.gB(b)&&this.gA(a)===z.gA(b)},
gu:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gB(a)
w=this.gA(a)
return W.d1(W.Y(W.Y(W.Y(W.Y(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gA:function(a){return a.height},
gB:function(a){return a.width},
$isW:1,
$asW:I.b0,
"%":";DOMRectReadOnly"},
jd:{"^":"fZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$asi:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
je:{"^":"e;i:length=","%":"DOMTokenList"},
ae:{"^":"o;aZ:namespaceURI=,dj:tagName=",
gcN:function(a){return new W.h_(a)},
k:function(a){return a.localName},
H:["ac",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cd
if(z==null){z=H.v([],[W.cq])
y=new W.cr(z)
z.push(W.d_(null))
z.push(W.db())
$.cd=y
d=y}else d=z
z=$.cc
if(z==null){z=new W.de(d)
$.cc=z
c=z}else{z.a=d
c=z}}if($.P==null){z=document
y=z.implementation.createHTMLDocument("")
$.P=y
$.be=y.createRange()
y=$.P
y.toString
x=y.createElement("base")
J.e3(x,z.baseURI)
$.P.head.appendChild(x)}z=$.P
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.P
if(!!this.$isb9)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.P.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.q(C.L,a.tagName)){$.be.selectNodeContents(w)
v=$.be.createContextualFragment(b)}else{w.innerHTML=b
v=$.P.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.P.body
if(w==null?z!=null:w!==z)J.c_(w)
c.aF(v)
document.adoptNode(v)
return v},function(a,b,c){return this.H(a,b,c,null)},"cV",null,null,"gds",5,5,null],
sbv:function(a,b){this.a9(a,b)},
aa:function(a,b,c,d){a.textContent=null
a.appendChild(this.H(a,b,c,d))},
a9:function(a,b){return this.aa(a,b,null,null)},
$isae:1,
"%":";Element"},
ez:{"^":"j:0;",
$1:function(a){return!!J.q(a).$isae}},
jf:{"^":"r;A:height},v:name=,B:width}","%":"HTMLEmbedElement"},
jg:{"^":"aL;F:error=","%":"ErrorEvent"},
aL:{"^":"e;","%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
y:{"^":"e;",
b8:["bX",function(a,b,c,d){if(c!=null)this.cp(a,b,c,!1)}],
cp:function(a,b,c,d){return a.addEventListener(b,H.at(c,1),!1)},
"%":"AbsoluteOrientationSensor|Accelerometer|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;d8|d9|dc|dd"},
ji:{"^":"r;v:name=","%":"HTMLFieldSetElement"},
jj:{"^":"h4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bg]},
$asi:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$ask:function(){return[W.bg]},
"%":"FileList"},
jk:{"^":"y;F:error=","%":"FileReader"},
jl:{"^":"y;F:error=,i:length=","%":"FileWriter"},
jm:{"^":"r;i:length=,v:name=","%":"HTMLFormElement"},
jo:{"^":"e;bx:pressed=","%":"GamepadButton"},
jp:{"^":"e;i:length=","%":"History"},
jq:{"^":"hi;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.o]},
$asi:function(){return[W.o]},
$ish:1,
$ash:function(){return[W.o]},
$ask:function(){return[W.o]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
jr:{"^":"r;A:height},v:name=,B:width}","%":"HTMLIFrameElement"},
js:{"^":"r;A:height},B:width}","%":"HTMLImageElement"},
jt:{"^":"r;A:height},v:name=,B:width}","%":"HTMLInputElement"},
aP:{"^":"fD;",
gdq:function(a){return a.which},
$isaP:1,
"%":"KeyboardEvent"},
jy:{"^":"r;a4:href}","%":"HTMLLinkElement"},
jA:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
jB:{"^":"r;v:name=","%":"HTMLMapElement"},
eX:{"^":"r;F:error=","%":"HTMLAudioElement;HTMLMediaElement"},
jE:{"^":"e;i:length=","%":"MediaList"},
jF:{"^":"y;",
b8:function(a,b,c,d){if(b==="message")a.start()
this.bX(a,b,c,!1)},
"%":"MessagePort"},
jG:{"^":"r;v:name=","%":"HTMLMetaElement"},
jH:{"^":"ho;",
h:function(a,b){return P.D(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.D(y.value[1]))}},
gE:function(a){var z=H.v([],[P.l])
this.w(a,new W.eZ(z))
return z},
gi:function(a){return a.size},
$asC:function(){return[P.l,null]},
"%":"MIDIInputMap"},
eZ:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
jI:{"^":"hp;",
h:function(a,b){return P.D(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.D(y.value[1]))}},
gE:function(a){var z=H.v([],[P.l])
this.w(a,new W.f_(z))
return z},
gi:function(a){return a.size},
$asC:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
f_:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
jJ:{"^":"hr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bp]},
$asi:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"MimeTypeArray"},
H:{"^":"cm;a",
gM:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bu("No elements"))
if(y>1)throw H.b(P.bu("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.cg(z,z.length,-1,null,[H.aG(C.O,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$ascm:function(){return[W.o]},
$asi:function(){return[W.o]},
$ash:function(){return[W.o]},
$asd3:function(){return[W.o]}},
o:{"^":"y;a6:parentNode=,ax:previousSibling=",
gda:function(a){return new W.H(a)},
de:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.bY(a):z},
$iso:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
jR:{"^":"e;",
dc:[function(a){return a.previousNode()},"$0","gax",1,0,4],
"%":"NodeIterator"},
f2:{"^":"ht;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.o]},
$asi:function(){return[W.o]},
$ish:1,
$ash:function(){return[W.o]},
$ask:function(){return[W.o]},
"%":"NodeList|RadioNodeList"},
jU:{"^":"r;A:height},v:name=,B:width}","%":"HTMLObjectElement"},
jW:{"^":"r;v:name=","%":"HTMLOutputElement"},
jX:{"^":"r;v:name=","%":"HTMLParamElement"},
aS:{"^":"e;i:length=","%":"Plugin"},
jY:{"^":"hx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aS]},
$asi:function(){return[W.aS]},
$ish:1,
$ash:function(){return[W.aS]},
$ask:function(){return[W.aS]},
"%":"PluginArray"},
k3:{"^":"hD;",
h:function(a,b){return P.D(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.D(y.value[1]))}},
gE:function(a){var z=H.v([],[P.l])
this.w(a,new W.fj(z))
return z},
gi:function(a){return a.size},
$asC:function(){return[P.l,null]},
"%":"RTCStatsReport"},
fj:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
k4:{"^":"r;i:length=,v:name=","%":"HTMLSelectElement"},
k5:{"^":"aL;F:error=","%":"SensorErrorEvent"},
k6:{"^":"r;v:name=","%":"HTMLSlotElement"},
k7:{"^":"d9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bs]},
$asi:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$ask:function(){return[W.bs]},
"%":"SourceBufferList"},
k8:{"^":"hJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bt]},
$asi:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$ask:function(){return[W.bt]},
"%":"SpeechGrammarList"},
k9:{"^":"aL;F:error=","%":"SpeechRecognitionError"},
aU:{"^":"e;i:length=","%":"SpeechRecognitionResult"},
kb:{"^":"hM;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gE:function(a){var z=H.v([],[P.l])
this.w(a,new W.fu(z))
return z},
gi:function(a){return a.length},
$asC:function(){return[P.l,P.l]},
"%":"Storage"},
fu:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
fA:{"^":"r;",
H:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=W.ey("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.H(y).G(0,J.dW(z))
return y},
"%":"HTMLTableElement"},
kd:{"^":"r;",
H:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.H(z.createElement("table"),b,c,d)
z.toString
z=new W.H(z)
x=z.gM(z)
x.toString
z=new W.H(x)
w=z.gM(z)
y.toString
w.toString
new W.H(y).G(0,new W.H(w))
return y},
"%":"HTMLTableRowElement"},
ke:{"^":"r;",
H:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.H(z.createElement("table"),b,c,d)
z.toString
z=new W.H(z)
x=z.gM(z)
y.toString
x.toString
new W.H(y).G(0,new W.H(x))
return y},
"%":"HTMLTableSectionElement"},
cE:{"^":"r;",
aa:function(a,b,c,d){var z
a.textContent=null
z=this.H(a,b,c,d)
a.content.appendChild(z)},
a9:function(a,b){return this.aa(a,b,null,null)},
$iscE:1,
"%":"HTMLTemplateElement"},
kf:{"^":"r;v:name=","%":"HTMLTextAreaElement"},
kg:{"^":"hU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bz]},
$asi:function(){return[W.bz]},
$ish:1,
$ash:function(){return[W.bz]},
$ask:function(){return[W.bz]},
"%":"TextTrackCueList"},
kh:{"^":"dd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.by]},
$asi:function(){return[W.by]},
$ish:1,
$ash:function(){return[W.by]},
$ask:function(){return[W.by]},
"%":"TextTrackList"},
ki:{"^":"e;i:length=","%":"TimeRanges"},
kj:{"^":"hZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bA]},
$asi:function(){return[W.bA]},
$ish:1,
$ash:function(){return[W.bA]},
$ask:function(){return[W.bA]},
"%":"TouchList"},
kk:{"^":"e;i:length=","%":"TrackDefaultList"},
kn:{"^":"e;",
dt:[function(a){return a.parentNode()},"$0","ga6",1,0,4],
dc:[function(a){return a.previousNode()},"$0","gax",1,0,4],
"%":"TreeWalker"},
fD:{"^":"aL;","%":"CompositionEvent|DragEvent|FocusEvent|MouseEvent|PointerEvent|TextEvent|TouchEvent|WheelEvent;UIEvent"},
kp:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
kr:{"^":"eX;A:height},B:width}","%":"HTMLVideoElement"},
ks:{"^":"y;i:length=","%":"VideoTrackList"},
fK:{"^":"y;",
gcM:function(a){var z,y
z=P.au
y=new P.aD(0,$.u,null,[z])
this.cv(a)
this.cC(a,W.di(new W.fL(new P.hQ(y,[z]))))
return y},
cC:function(a,b){return a.requestAnimationFrame(H.at(b,1))},
cv:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fL:{"^":"j:0;a",
$1:function(a){this.a.cU(0,a)}},
kt:{"^":"y;"},
kx:{"^":"o;v:name=,aZ:namespaceURI=","%":"Attr"},
ky:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$asi:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"CSSRuleList"},
kz:{"^":"eu;",
k:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isW)return!1
return a.left===b.left&&a.top===b.top&&a.width===z.gB(b)&&a.height===z.gA(b)},
gu:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.d1(W.Y(W.Y(W.Y(W.Y(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gA:function(a){return a.height},
gB:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kB:{"^":"i6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bh]},
$asi:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$ask:function(){return[W.bh]},
"%":"GamepadList"},
kE:{"^":"i8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.o]},
$asi:function(){return[W.o]},
$ish:1,
$ash:function(){return[W.o]},
$ask:function(){return[W.o]},
"%":"MozNamedAttrMap|NamedNodeMap"},
kF:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aU]},
$asi:function(){return[W.aU]},
$ish:1,
$ash:function(){return[W.aU]},
$ask:function(){return[W.aU]},
"%":"SpeechRecognitionResultList"},
kG:{"^":"ic;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bw]},
$asi:function(){return[W.bw]},
$ish:1,
$ash:function(){return[W.bw]},
$ask:function(){return[W.bw]},
"%":"StyleSheetList"},
fS:{"^":"bo;cw:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gE(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.I)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gE:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.v([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.f(v)
if(u.gaZ(v)==null)y.push(u.gv(v))}return y},
$asbo:function(){return[P.l,P.l]},
$asC:function(){return[P.l,P.l]}},
h_:{"^":"fS;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gE(this).length}},
kA:{"^":"fv;a,b,c,$ti",
d8:function(a,b,c,d){return W.bC(this.a,this.b,a,!1,H.A(this,0))}},
h0:{"^":"fw;a,b,c,d,e,$ti",
cj:function(a,b,c,d,e){this.cI()},
cI:function(){var z=this.d
if(z!=null&&this.a<=0)J.dE(this.b,this.c,z,!1)},
l:{
bC:function(a,b,c,d,e){var z=W.di(new W.h1(c))
z=new W.h0(0,a,b,z,!1,[e])
z.cj(a,b,c,!1,e)
return z}}},
h1:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
bD:{"^":"c;bI:a<",
ck:function(a){var z,y
z=$.$get$bE()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.K[y],W.iD())
for(y=0;y<12;++y)z.j(0,C.p[y],W.iE())}},
R:function(a){return $.$get$d0().q(0,W.af(a))},
K:function(a,b,c){var z,y,x
z=W.af(a)
y=$.$get$bE()
x=y.h(0,H.a(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
l:{
d_:function(a){var z,y
z=document.createElement("a")
y=new W.hE(z,window.location)
y=new W.bD(y)
y.ck(a)
return y},
kC:[function(a,b,c,d){return!0},"$4","iD",16,0,8],
kD:[function(a,b,c,d){var z,y,x,w,v
z=d.gbI()
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
return z},"$4","iE",16,0,8]}},
k:{"^":"c;$ti",
gD:function(a){return new W.cg(a,this.gi(a),-1,null,[H.aG(this,a,"k",0)])}},
cr:{"^":"c;a",
R:function(a){return C.b.b9(this.a,new W.f4(a))},
K:function(a,b,c){return C.b.b9(this.a,new W.f3(a,b,c))}},
f4:{"^":"j:0;a",
$1:function(a){return a.R(this.a)}},
f3:{"^":"j:0;a,b,c",
$1:function(a){return a.K(this.a,this.b,this.c)}},
hF:{"^":"c;bI:d<",
cm:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.az(0,new W.hG())
y=b.az(0,new W.hH())
this.b.G(0,z)
x=this.c
x.G(0,C.M)
x.G(0,y)},
R:function(a){return this.a.q(0,W.af(a))},
K:["c0",function(a,b,c){var z,y
z=W.af(a)
y=this.c
if(y.q(0,H.a(z)+"::"+b))return this.d.cL(c)
else if(y.q(0,"*::"+b))return this.d.cL(c)
else{y=this.b
if(y.q(0,H.a(z)+"::"+b))return!0
else if(y.q(0,"*::"+b))return!0
else if(y.q(0,H.a(z)+"::*"))return!0
else if(y.q(0,"*::*"))return!0}return!1}]},
hG:{"^":"j:0;",
$1:function(a){return!C.b.q(C.p,a)}},
hH:{"^":"j:0;",
$1:function(a){return C.b.q(C.p,a)}},
hR:{"^":"hF;e,a,b,c,d",
K:function(a,b,c){if(this.c0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bX(a).a.getAttribute("template")==="")return this.e.q(0,b)
return!1},
l:{
db:function(){var z=P.l
z=new W.hR(P.bm(C.o,z),P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z),null)
z.cm(null,new H.eV(C.o,new W.hS(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
hS:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.a(a)}},
hP:{"^":"c;",
R:function(a){var z=J.q(a)
if(!!z.$iscw)return!1
z=!!z.$isbx
if(z&&W.af(a)==="foreignObject")return!1
if(z)return!0
return!1},
K:function(a,b,c){if(b==="is"||C.h.bU(b,"on"))return!1
return this.R(a)}},
cg:{"^":"c;a,b,c,d,$ti",
n:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.b4(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gt:function(a){return this.d}},
cq:{"^":"c;"},
jS:{"^":"c;"},
ko:{"^":"c;"},
hE:{"^":"c;a,b"},
de:{"^":"c;a",
aF:function(a){new W.i1(this).$2(a,null)},
X:function(a,b){if(b==null)J.c_(a)
else b.removeChild(a)},
cF:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.bX(a)
x=y.gcw().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.J(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.J(t)}try{u=W.af(a)
this.cE(a,b,z,v,u,y,x)}catch(t){if(H.J(t) instanceof P.a3)throw t
else{this.X(a,b)
window
s="Removing corrupted element "+H.a(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cE:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.X(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.R(a)){this.X(a,b)
window
z="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.K(a,"is",g)){this.X(a,b)
window
z="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gE(f)
y=H.v(z.slice(0),[H.A(z,0)])
for(x=f.gE(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.K(a,J.e5(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.a(e)+" "+w+'="'+H.a(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$iscE)this.aF(a.content)}},
i1:{"^":"j:14;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cF(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.X(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.dX(z)}catch(w){H.J(w)
v=z
if(x){u=J.f(v)
if(u.ga6(v)!=null){u.ga6(v)
u.ga6(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
fV:{"^":"e+ep;"},
fW:{"^":"e+i;"},
fX:{"^":"fW+k;"},
fY:{"^":"e+i;"},
fZ:{"^":"fY+k;"},
h3:{"^":"e+i;"},
h4:{"^":"h3+k;"},
hh:{"^":"e+i;"},
hi:{"^":"hh+k;"},
ho:{"^":"e+C;"},
hp:{"^":"e+C;"},
hq:{"^":"e+i;"},
hr:{"^":"hq+k;"},
hs:{"^":"e+i;"},
ht:{"^":"hs+k;"},
hw:{"^":"e+i;"},
hx:{"^":"hw+k;"},
hD:{"^":"e+C;"},
d8:{"^":"y+i;"},
d9:{"^":"d8+k;"},
hI:{"^":"e+i;"},
hJ:{"^":"hI+k;"},
hM:{"^":"e+C;"},
hT:{"^":"e+i;"},
hU:{"^":"hT+k;"},
dc:{"^":"y+i;"},
dd:{"^":"dc+k;"},
hY:{"^":"e+i;"},
hZ:{"^":"hY+k;"},
i3:{"^":"e+i;"},
i4:{"^":"i3+k;"},
i5:{"^":"e+i;"},
i6:{"^":"i5+k;"},
i7:{"^":"e+i;"},
i8:{"^":"i7+k;"},
i9:{"^":"e+i;"},
ia:{"^":"i9+k;"},
ib:{"^":"e+i;"},
ic:{"^":"ib+k;"}}],["","",,P,{"^":"",
D:function(a){var z,y,x,w,v
if(a==null)return
z=P.T()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
is:function(a,b){var z={}
a.w(0,new P.it(z))
return z},
it:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",k2:{"^":"y;F:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},kl:{"^":"y;F:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",hj:{"^":"c;",
L:function(){return Math.random()}},k_:{"^":"c;"},hy:{"^":"c;$ti"},W:{"^":"hy;$ti"}}],["","",,P,{"^":"",jx:{"^":"hl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
$asi:function(){return[P.ck]},
$ish:1,
$ash:function(){return[P.ck]},
$ask:function(){return[P.ck]},
"%":"SVGLengthList"},jT:{"^":"hv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cu]},
$ish:1,
$ash:function(){return[P.cu]},
$ask:function(){return[P.cu]},
"%":"SVGNumberList"},jZ:{"^":"e;i:length=","%":"SVGPointList"},cw:{"^":"bx;",$iscw:1,"%":"SVGScriptElement"},kc:{"^":"hO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
$asi:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},bx:{"^":"ae;",
sbv:function(a,b){this.a9(a,b)},
H:function(a,b,c,d){var z,y,x,w,v,u
z=H.v([],[W.cq])
z.push(W.d_(null))
z.push(W.db())
z.push(new W.hP())
c=new W.de(new W.cr(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).cV(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.H(w)
u=z.gM(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isbx:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},km:{"^":"i0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cI]},
$ish:1,
$ash:function(){return[P.cI]},
$ask:function(){return[P.cI]},
"%":"SVGTransformList"},hk:{"^":"e+i;"},hl:{"^":"hk+k;"},hu:{"^":"e+i;"},hv:{"^":"hu+k;"},hN:{"^":"e+i;"},hO:{"^":"hN+k;"},i_:{"^":"e+i;"},i0:{"^":"i_+k;"}}],["","",,P,{"^":"",iY:{"^":"e;i:length=","%":"AudioBuffer"},iZ:{"^":"fT;",
h:function(a,b){return P.D(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.D(y.value[1]))}},
gE:function(a){var z=H.v([],[P.l])
this.w(a,new P.ef(z))
return z},
gi:function(a){return a.size},
$asC:function(){return[P.l,null]},
"%":"AudioParamMap"},ef:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},j_:{"^":"y;i:length=","%":"AudioTrackList"},eg:{"^":"y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},jV:{"^":"eg;i:length=","%":"OfflineAudioContext"},fT:{"^":"e+C;"}}],["","",,P,{"^":"",k0:{"^":"e;",
b7:function(a,b){return a.activeTexture(b)},
ba:function(a,b,c){return a.attachShader(b,c)},
bb:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindTexture(b,c)},
be:function(a,b){return a.blendEquation(b)},
bf:function(a,b,c){return a.blendFunc(b,c)},
bg:function(a,b,c,d){return a.bufferData(b,c,d)},
bh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bj:function(a){return a.createBuffer()},
bk:function(a){return a.createProgram()},
bl:function(a,b){return a.createShader(b)},
bm:function(a,b){return a.depthMask(b)},
bn:function(a,b){return a.disable(b)},
bo:function(a,b,c,d){return a.drawArrays(b,c,d)},
bp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bq:function(a,b){return a.enable(b)},
br:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.D(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aC:function(a,b){return a.getShaderInfoLog(b)},
aD:function(a,b,c){return a.getShaderParameter(b,c)},
aE:function(a,b,c){return a.getUniformLocation(b,c)},
bw:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aL:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bB:function(a,b,c){return a.uniform1f(b,c)},
bC:function(a,b,c){return a.uniform1i(b,c)},
bD:function(a,b,c){return a.uniform2fv(b,c)},
bE:function(a,b,c){return a.uniform3fv(b,c)},
bF:function(a,b,c){return a.uniform4fv(b,c)},
bG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bJ:function(a,b){return a.useProgram(b)},
bK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},k1:{"^":"e;",
cP:function(a,b){return a.beginTransformFeedback(b)},
cS:function(a,b){return a.bindVertexArray(b)},
cW:function(a){return a.createVertexArray()},
cX:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cY:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cZ:function(a){return a.endTransformFeedback()},
dm:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dn:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b7:function(a,b){return a.activeTexture(b)},
ba:function(a,b,c){return a.attachShader(b,c)},
bb:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindTexture(b,c)},
be:function(a,b){return a.blendEquation(b)},
bf:function(a,b,c){return a.blendFunc(b,c)},
bg:function(a,b,c,d){return a.bufferData(b,c,d)},
bh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bj:function(a){return a.createBuffer()},
bk:function(a){return a.createProgram()},
bl:function(a,b){return a.createShader(b)},
bm:function(a,b){return a.depthMask(b)},
bn:function(a,b){return a.disable(b)},
bo:function(a,b,c,d){return a.drawArrays(b,c,d)},
bp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bq:function(a,b){return a.enable(b)},
br:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.D(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aC:function(a,b){return a.getShaderInfoLog(b)},
aD:function(a,b,c){return a.getShaderParameter(b,c)},
aE:function(a,b,c){return a.getUniformLocation(b,c)},
bw:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aL:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bB:function(a,b,c){return a.uniform1f(b,c)},
bC:function(a,b,c){return a.uniform1i(b,c)},
bD:function(a,b,c){return a.uniform2fv(b,c)},
bE:function(a,b,c){return a.uniform3fv(b,c)},
bF:function(a,b,c){return a.uniform4fv(b,c)},
bG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bJ:function(a,b){return a.useProgram(b)},
bK:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",ka:{"^":"hL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return P.D(a.item(b))},
j:function(a,b,c){throw H.b(P.n("Cannot assign element of immutable List."))},
m:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bn]},
$ish:1,
$ash:function(){return[P.bn]},
$ask:function(){return[P.bn]},
"%":"SQLResultSetRowList"},hK:{"^":"e+i;"},hL:{"^":"hK+k;"}}],["","",,G,{"^":"",
fM:function(a){var z,y,x,w
z=H.v(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.a(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.b.a5(z,"\n")},
cY:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.bl(a,b)
z.aI(a,y,c)
z.bi(a,y)
x=z.aD(a,y,35713)
if(x!=null&&J.G(x,!1)){w=z.aC(a,y)
P.a9("E:Compilation failed:")
P.a9("E:"+G.fM(c))
P.a9("E:Failure:")
P.a9(C.h.p("E:",w))
throw H.b(w)}return y},
bq:{"^":"c;"},
fE:{"^":"bq;",
c8:function(){return this.d},
k:function(a){var z,y,x,w
z=H.v(["{"+H.a(new H.cU(H.iA(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.al(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.n();){w=x.d
z.push(H.a(w)+": "+H.a(y.h(0,w)))}return C.b.a5(z,"\n")}},
ej:{"^":"c;a,b",
bs:function(a,b,c){J.dT(this.a,b)
if(c>0)J.eb(this.a,b,c)},
bL:function(a,b,c,d,e,f,g,h){J.bT(this.a,34962,b)
J.ec(this.a,c,d,e,!1,g,h)}},
cH:{"^":"c;a,b,c"},
cF:{"^":"c;a,b,c",l:{
cG:function(a,b,c){return new G.cF(a,b,c)}}},
eW:{"^":"fE;d,a,b,c"},
eY:{"^":"bq;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aQ:function(a,b,c){var z,y
C.h.ae(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bT(z.a,34962,y)
J.dI(z.a,34962,b,35048)},
aR:function(a){this.ch=a
this.aQ("aPosition",a,3)},
c6:function(){return this.ch.length/3|0},
aO:function(a,b,c){var z,y,x,w,v
z=C.h.ae(a,0)===105
if(z&&this.z===0)this.z=C.a.c1(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bV(x.a))
this.aQ(a,b,c)
w=$.$get$Z().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.b5(x.a,this.e)
x.bs(0,v,z?1:0)
x.bL(0,y.h(0,a),v,w.aS(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=["Faces:0"]
for(y=this.cy,x=new H.al(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.n();){w=x.d
z.push(H.a(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.b.a5(z,"  ")}},
fh:{"^":"bq;d,e,f,r,x,y,z,Q,ch,a,b,c",
cb:function(a,b,c,d){var z,y,x,w,v,u
for(z=this.e.d,y=this.y,x=this.d,w=this.r,v=0;!1;++v){if(v>=0)return H.d(z,v)
u=z[v]
y.j(0,u,J.bZ(x.a,w,u))}for(z=this.f.d,v=0;!1;++v){if(v>=0)return H.d(z,v)
u=z[v]
y.j(0,u,J.bZ(x.a,w,u))}},
cf:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.al(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.n();){v=w.d
if(!z.au(0,v))x.push(v)}for(z=this.x,y=new P.d2(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.n();){v=y.d
if(!z.q(0,v))x.push(v)}return x},
cg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.al(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.n();){t=y.d
switch(J.dK(t,0)){case 117:if(w.au(0,t)){s=b.h(0,t)
if(v.au(0,t))H.aH("E:"+(t+" : group ["+H.a(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$Z().h(0,t)
if(r==null)H.F("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.b8(x.a,q,s)
break
case"float":if(r.c===0)J.e7(x.a,q,s)
break
case"mat4":if(r.c===0){p=C.i.gN(H.Q(s,"$isjD"))
J.e9(x.a,q,!1,p)}break
case"mat3":if(r.c===0){p=C.i.gN(H.Q(s,"$isjC"))
J.e8(x.a,q,!1,p)}break
case"vec4":if(r.c===0){p=C.i.gN(H.Q(s,"$iskq"))
J.c3(x.a,q,p)}else J.c3(x.a,q,s)
break
case"vec3":if(r.c===0){p=C.i.gN(H.Q(s,"$isao"))
J.c2(x.a,q,p)}else J.c2(x.a,q,s)
break
case"vec2":if(r.c===0){p=C.i.gN(H.Q(s,"$isX"))
J.c1(x.a,q,p)}else J.c1(x.a,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.a1(p)
J.bR(x.a,33984+p)
p=H.Q(s,"$isfB").c7()
J.bU(x.a,3553,p)
p=this.ch
J.b8(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.p()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.a1(p)
J.bR(x.a,33984+p)
p=H.Q(s,"$isfB").c7()
J.bU(x.a,34067,p)
p=this.ch
J.b8(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.p()
this.ch=p+1
break
default:H.aH("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=x.a
if(s===!0)J.aI(p,2929)
else J.b6(p,2929)
break
case"cStencilFunc":H.Q(s,"$iscH")
p=s.a
o=x.a
if(p===1281)J.b6(o,2960)
else{J.aI(o,2960)
o=s.b
n=s.c
J.e4(x.a,p,o,n)}break
case"cDepthWrite":J.dO(x.a,s)
break
case"cBlendEquation":H.Q(s,"$iscF")
p=s.a
o=x.a
if(p===1281)J.b6(o,3042)
else{J.aI(o,3042)
o=s.b
n=s.c
J.dH(x.a,o,n)
J.dG(x.a,p)}break}++u
break}}m=P.ev(0,0,0,Date.now()-new P.cb(z,!1).a,0,0)
""+u
m.k(0)},
c5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.ea(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aY()}for(x=0;x<1;++x){w=b[x]
this.cg(w.a,w.c8())}y=this.Q
y.at(0)
for(v=a.cy,u=new H.al(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.n();)y.P(0,u.d)
t=this.cf()
if(t.length!==0)P.a9("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.a(t)))
J.b5(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.c6()
u=a.Q
r=a.z
if(s)J.dF(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.dS(q,y,v,u,0,r)
else J.dR(q,y,v,u,0)}else{u=z.a
if(r>1)J.dQ(u,y,0,v,r)
else J.dP(u,y,0,v)}if(s)J.dU(z.a)},
c4:function(a,b){return this.c5(a,b,null)},
l:{
fi:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.U(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.dM(b.a)
u=G.cY(b.a,35633,y)
J.bS(b.a,v,u)
t=G.cY(b.a,35632,x)
J.bS(b.a,v,t)
if(w.length>0)J.e6(b.a,v,w,35980)
J.e2(b.a,v)
if(J.e1(b.a,v,35714)!==!0)H.F(J.e0(b.a,v))
z=new G.fh(b,c,d,v,P.bm(c.c,null),P.T(),P.T(),z,null,a,!1,!0)
z.cb(a,b,c,d)
return z}}},
p:{"^":"c;a,b,c",
aS:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fo:{"^":"c;a,b,c,d,e,f,r,x",
c2:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.b.aK(z)},
aP:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.b.aK(z)},
cc:function(a,b){this.b=this.ci(!1,a,b)},
aT:function(a){return this.cc(a,null)},
ci:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
s=$.$get$Z().h(0,t)
w.push("layout (location="+H.a(v.h(0,t))+") in "+s.a+" "+H.a(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.$get$Z().h(0,q)
w.push(r+" "+s.a+" "+H.a(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.$get$Z().h(0,q)
w.push(r+" "+s.a+" "+H.a(q)+";")}w.push("")
for(z=this.d,u=0;!1;++u){if(u>=0)return H.d(z,u)
q=z[u]
s=$.$get$Z().h(0,q)
y=s.c
p=y===0?"":"["+y+"]"
w.push("uniform "+s.a+" "+H.a(q)+p+";")}w.push("")
C.b.G(w,b)
return C.b.a5(w,"\n")},
l:{
cx:function(a){return new G.fo(a,null,[],[],[],[],0,P.T())}}}}],["","",,D,{"^":"",eO:{"^":"c;a,b,c",
c9:function(a){var z
a=document
z=W.aP
W.bC(a,"keydown",new D.eQ(this),!1,z)
W.bC(a,"keyup",new D.eR(this),!1,z)},
l:{
eP:function(a){var z=P.E
z=new D.eO(P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z))
z.c9(a)
return z}}},eQ:{"^":"j:7;a",
$1:function(a){var z=this.a
z.a.P(0,J.bY(a))
z.b.P(0,a.which)}},eR:{"^":"j:7;a",
$1:function(a){var z=this.a
z.a.df(0,J.bY(a))
z.c.P(0,a.which)}}}],["","",,A,{"^":"",
dx:function(a){var z,y
z=C.N.d_(a,0,new A.iC())
if(typeof z!=="number")return H.a1(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iC:{"^":"j:15;",
$2:function(a,b){var z,y
z=J.R(a,J.a2(b))
if(typeof z!=="number")return H.a1(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",X:{"^":"c;b5:a<",
gN:function(a){return this.a},
U:function(a,b){var z=this.a
z[0]=a
z[1]=b},
J:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.a(z[0])+","+H.a(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.X){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gu:function(a){return A.dx(this.a)},
a1:function(a,b){var z=new T.X(new Float32Array(2))
z.J(this)
z.aM(0,b)
return z},
p:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.X(z)
y.J(this)
x=b.gb5()
z[0]=C.j.p(z[0],x.h(0,0))
z[1]=C.j.p(z[1],x.h(0,1))
return y},
a7:function(a,b){var z=new T.X(new Float32Array(2))
z.J(this)
z.aG(0,1/b)
return z},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
aM:function(a,b){var z,y
z=b.gb5()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
aG:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
sbM:function(a,b){this.a[0]=b
return b},
sbN:function(a,b){this.a[1]=b
return b},
l:{
fI:function(a,b){var z=new T.X(new Float32Array(2))
z.U(a,b)
return z}}},ao:{"^":"c;b6:a<",
gN:function(a){return this.a},
J:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.a(z[0])+","+H.a(z[1])+","+H.a(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ao){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gu:function(a){return A.dx(this.a)},
a1:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.ao(z)
y.J(this)
x=b.gb6()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
p:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.ao(z)
y.J(this)
x=b.gb6()
z[0]=C.j.p(z[0],x.h(0,0))
z[1]=C.j.p(z[1],x.h(0,1))
z[2]=C.j.p(z[2],x.h(0,2))
return y},
a7:function(a,b){return this.bR(1/b)},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
bR:function(a){var z,y
z=new Float32Array(3)
y=new T.ao(z)
y.J(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
gdd:function(a){return this.a[0]},
gbP:function(){return this.a[1]},
gcO:function(a){return this.a[2]}}}],["","",,D,{"^":"",
cf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
for(z=a.length,y=b.length,x=0,w=0;w<a.length;a.length===z||(0,H.I)(a),++w){v=a[w]
u=x+1
t=x+2
s=x+3
r=v.c.a
if(v.a){q=Math.sin(v.d)
p=Math.cos(v.d)
o=-p*0.05
n=q*0.05
m=r[0]
if(x>=y)return H.d(b,x)
b[x]=m+q*0.07
m=r[1]
if(u>=y)return H.d(b,u)
b[u]=m+p*0.07
if(t>=y)return H.d(b,t)
b[t]=0
t=r[0]
if(s>=y)return H.d(b,s)
b[s]=t+o
t=s+1
m=r[1]
if(t>=y)return H.d(b,t)
b[t]=m+n
m=s+2
if(m>=y)return H.d(b,m)
b[m]=0
x=s+3
s=r[0]
if(x>=y)return H.d(b,x)
b[x]=s-o
s=x+1
r=r[1]
if(s>=y)return H.d(b,s)
b[s]=r-n
r=x+2
if(r>=y)return H.d(b,r)
b[r]=0
x+=3}else{m=r[0]
if(x>=y)return H.d(b,x)
b[x]=m
r=r[1]
if(u>=y)return H.d(b,u)
b[u]=r
if(t>=y)return H.d(b,t)
b[t]=0
x=s}}},
eB:function(a,b){var z,y,x,w,v,u,t,s,r
for(z=a.length,y=b.length,x=0,w=0;w<a.length;a.length===z||(0,H.I)(a),++w){v=a[w]
u=v.r
t=u.gdd(u)
if(x<0||x>=y)return H.d(b,x)
b[x]=t
t=x+1
s=u.gbP()
if(t>=y)return H.d(b,t)
b[t]=s
s=x+2
t=u.gcO(u)
if(s>=y)return H.d(b,s)
b[s]=t
x+=3
if(v.a)for(u=u.a,r=0;r<2;++r){t=u[0]
if(x>=y)return H.d(b,x)
b[x]=t*0.5
t=x+1
s=u[1]
if(t>=y)return H.d(b,t)
b[t]=s*0.5
s=x+2
t=u[2]
if(s>=y)return H.d(b,s)
b[s]=t*0.5
x+=3}}},
eC:function(a,b){var z,y,x,w,v,u,t
for(z=a.length,y=b.length,x=0,w=0;w<z;++w){v=a[w]
u=v.b
if(x<0||x>=y)return H.d(b,x)
b[x]=u;++x
if(v.a)for(t=0;t<2;++t){if(x>=y)return H.d(b,x)
b[x]=u;++x}}},
eE:function(a,b,c){var z,y,x,w,v,u,t,s,r
b.ca()
z=a.a
if(z.q(0,37)||J.ab(b.c,-0.5)){if(0>=c.length)return H.d(c,0)
z=c[0]
z.aH(z.d-0.031415926535897934)}else if(z.q(0,39)||J.x(b.c,0.5)){if(0>=c.length)return H.d(c,0)
z=c[0]
z.aH(z.d+0.031415926535897934)}else if(z.q(0,38)||J.ab(b.d,-0.5)){if(0>=c.length)return H.d(c,0)
z=c[0]
z.ab(z.e+0.05)}else if(z.q(0,40)||J.x(b.d,0.5)){if(0>=c.length)return H.d(c,0)
z=c[0]
z.ab(z.e-0.05)}else if(a.b.q(0,32)||b.f){P.a9("fire")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.I)(c),++y){x=c[y]
w=c[0]
if(x.d7()){v=w.c.a
z=x.c.a
z[1]=v[1]
z[0]=v[0]
z=w.d
x.d=z
u=x.e
z=Math.sin(z)
t=x.e
s=Math.cos(x.d)
r=x.f.a
r[0]=u*z
r[1]=t*s
x.ab(10)
break}}}b.f=!1
b.r=!1
a.c.at(0)
a.b.at(0)},
dz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z={}
y=document.querySelector("#webgl-canvas")
x=y.clientWidth
w=y.clientHeight
v=Math.min(H.dn(x),H.dn(w))
u=J.f(y)
u.sB(y,v)
u.sA(y,v)
t=D.eP(null)
s=[D.cy(!0,50,C.t)]
for(r=0;r<10;++r)s.push(D.cy(!1,20,C.t))
q=new G.ej(null,y)
u=J.dZ(y,"webgl2",P.cl(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=u
if(u==null)H.F(P.ce('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.a(J.e_(u))
if($.ix>0)P.a9("I: "+p)
J.dJ(u,0,0,0,1)
J.aI(u,2929)
o=G.fi("basic",q,$.$get$dr(),$.$get$dq())
u=s.length
n=new Float32Array(3*(u+2))
u=s.length
m=new Float32Array(u+2)
u=s.length
l=new Float32Array(3*(u+2))
D.cf(s,n)
D.eC(s,m)
D.eB(s,l)
u=o.d
p=o.e.x
k=P.T()
j=J.dN(u.a)
i=new G.eY(u,j,0,k,p,null,0,-1,null,null,P.T(),"meshdata:points",!1,!0)
k.j(0,"aPosition",J.bV(u.a))
i.aR(n)
h=$.$get$Z().h(0,"aPosition")
if(h==null)H.F("Unknown canonical aPosition")
g=p.h(0,"aPosition")
J.b5(u.a,j)
u.bs(0,g,0)
u.bL(0,k.h(0,"aPosition"),g,h.aS(),5126,!1,0,0)
i.aO("aPointSize",m,1)
i.aO("aColor",l,3)
u=P.T()
u.j(0,"cDepthTest",!0)
u.j(0,"cDepthWrite",!0)
u.j(0,"cBlendEquation",$.$get$c5())
u.j(0,"cStencilFunc",$.$get$cA())
u.j(0,"cBlendEquation",$.$get$c4())
u.j(0,"cDepthTest",!1)
u.j(0,"cDepthWrite",!1)
z.a=0
new D.iO(z,s,t,new D.eD(-1,null,0,0,!1,!1,!1),n,i,o,new G.eW(u,"nodepth",!1,!0)).$1(0)},
fs:{"^":"c;a,b,c,d,e,f,r",
cd:function(a,b,c){this.f.U(this.e*Math.sin(this.d),this.e*Math.cos(this.d))},
c3:function(a){var z,y,x,w,v
z=this.c
y=this.f.a
x=z.a
w=x[0]
v=y[0]
if(typeof a!=="number")return H.a1(a)
x[0]=w+v*a
x[1]=x[1]+y[1]*a
if(this.a){w=x[0]
if(w<-1)z.sbM(0,2-w)
w=x[0]
if(w>1)z.sbM(0,-2+w)
w=x[1]
if(w<-1)z.sbN(0,2-w)
x=x[1]
if(x>1)z.sbN(0,-2+x)}},
aH:function(a){this.d=a
this.f.U(this.e*Math.sin(a),this.e*Math.cos(this.d))},
ab:function(a){if(a>10)a=10
if(a<0)a=0
this.e=a
this.f.U(a*Math.sin(this.d),this.e*Math.cos(this.d))},
d7:function(){var z,y
if(this.a)return!1
z=this.c.a
y=z[0]
if(!(y>1))if(!(y<-1)){z=z[1]
z=z>1||z<-1}else z=!0
else z=!0
return z},
l:{
cy:function(a,b,c){var z,y,x,w,v,u,t,s
z=new Float32Array(2)
y=c.L()
x=c.L()
w=new T.X(new Float32Array(2))
w.U(y,x)
w.aM(0,$.$get$dA())
w.aG(0,2)
x=c.L()
y=c.L()
v=c.L()
u=c.L()
t=c.L()
s=new Float32Array(3)
s[0]=v
s[1]=u
s[2]=t
s=new D.fs(a,b,w,6.283185307179586*y,x,new T.X(z),new T.ao(s))
s.cd(a,b,c)
return s}}},
eD:{"^":"c;a,b,c,d,e,f,r",
cl:function(){var z,y,x,w,v,u,t
if(this.b!=null)return!0
z=window.navigator.getGamepads()
if(z.prototype==null)z.prototype=Object.create(null)
for(y=z.length,x=this.a,w=x===-1,v=0,u=0;u<y;++u){t=z[u]
if((v===x||w)&&t!=null){H.aH("found gamepad: "+H.a(t.id)+" "+H.a(t.mapping))
H.aH("buttons: "+t.buttons.length+" axes: "+J.K(t.axes))
this.b=t
this.a=v
return!0}++v}return!1},
ca:function(){var z,y,x,w
if(!this.cl()){J.c0($.$get$bM(),"no joystick detected")
return}z=[]
for(y=this.b.buttons,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)z.push(J.b7(y[w]))
J.c0($.$get$bM(),"device["+this.a+"]: "+H.a(this.b.id)+"<br>axes: "+H.a(this.b.axes)+"<br>buttons: "+H.a(z))
this.c=J.R(J.b4(this.b.axes,0),0)
this.d=J.R(J.b4(this.b.axes,1),0)
y=this.e
x=this.b.buttons
if(0>=x.length)return H.d(x,0)
x=J.b7(x[0])
if(y==null?x!=null:y!==x)if(this.e===!0)this.r=!0
else this.f=!0
y=this.b.buttons
if(0>=y.length)return H.d(y,0)
this.e=J.b7(y[0])}},
iO:{"^":"j:16;a,b,c,d,e,f,r,x",
$1:function(a){var z,y,x,w,v
z=this.a
y=J.aE(a)
x=y.a1(a,z.a)
z.a=y.p(a,0)
for(z=this.b,y=z.length,w=J.aE(x),v=0;v<z.length;z.length===y||(0,H.I)(z),++v)z[v].c3(w.a7(x,1e4))
D.eE(this.c,this.d,z)
y=this.e
D.cf(z,y)
z=this.f
z.aR(y)
this.r.c4(z,[this.x])
C.a4.gcM(window).bz(this)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.eM.prototype}if(typeof a=="string")return J.aj.prototype
if(a==null)return J.ci.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.c)return a
return J.aF(a)}
J.iy=function(a){if(typeof a=="number")return J.ai.prototype
if(typeof a=="string")return J.aj.prototype
if(a==null)return a
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.c)return a
return J.aF(a)}
J.a0=function(a){if(typeof a=="string")return J.aj.prototype
if(a==null)return a
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.c)return a
return J.aF(a)}
J.b1=function(a){if(a==null)return a
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.c)return a
return J.aF(a)}
J.aE=function(a){if(typeof a=="number")return J.ai.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aC.prototype
return a}
J.iz=function(a){if(typeof a=="number")return J.ai.prototype
if(typeof a=="string")return J.aj.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aC.prototype
return a}
J.dt=function(a){if(typeof a=="string")return J.aj.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aC.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.c)return a
return J.aF(a)}
J.R=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.iy(a).p(a,b)}
J.G=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).C(a,b)}
J.x=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aE(a).a_(a,b)}
J.ab=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aE(a).T(a,b)}
J.b4=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.iM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)}
J.bR=function(a,b){return J.f(a).b7(a,b)}
J.dE=function(a,b,c,d){return J.f(a).b8(a,b,c,d)}
J.bS=function(a,b,c){return J.f(a).ba(a,b,c)}
J.dF=function(a,b){return J.f(a).cP(a,b)}
J.bT=function(a,b,c){return J.f(a).bb(a,b,c)}
J.bU=function(a,b,c){return J.f(a).bd(a,b,c)}
J.b5=function(a,b){return J.f(a).cS(a,b)}
J.dG=function(a,b){return J.f(a).be(a,b)}
J.dH=function(a,b,c){return J.f(a).bf(a,b,c)}
J.dI=function(a,b,c,d){return J.f(a).bg(a,b,c,d)}
J.dJ=function(a,b,c,d,e){return J.f(a).bh(a,b,c,d,e)}
J.dK=function(a,b){return J.dt(a).cT(a,b)}
J.dL=function(a,b){return J.iz(a).S(a,b)}
J.bV=function(a){return J.f(a).bj(a)}
J.dM=function(a){return J.f(a).bk(a)}
J.dN=function(a){return J.f(a).cW(a)}
J.dO=function(a,b){return J.f(a).bm(a,b)}
J.b6=function(a,b){return J.f(a).bn(a,b)}
J.dP=function(a,b,c,d){return J.f(a).bo(a,b,c,d)}
J.dQ=function(a,b,c,d,e){return J.f(a).cX(a,b,c,d,e)}
J.dR=function(a,b,c,d,e){return J.f(a).bp(a,b,c,d,e)}
J.dS=function(a,b,c,d,e,f){return J.f(a).cY(a,b,c,d,e,f)}
J.bW=function(a,b){return J.b1(a).m(a,b)}
J.aI=function(a,b){return J.f(a).bq(a,b)}
J.dT=function(a,b){return J.f(a).br(a,b)}
J.dU=function(a){return J.f(a).cZ(a)}
J.dV=function(a,b){return J.b1(a).w(a,b)}
J.bX=function(a){return J.f(a).gcN(a)}
J.aw=function(a){return J.f(a).gF(a)}
J.a2=function(a){return J.q(a).gu(a)}
J.ax=function(a){return J.b1(a).gD(a)}
J.K=function(a){return J.a0(a).gi(a)}
J.dW=function(a){return J.f(a).gda(a)}
J.b7=function(a){return J.f(a).gbx(a)}
J.dX=function(a){return J.f(a).gax(a)}
J.dY=function(a){return J.f(a).gdj(a)}
J.bY=function(a){return J.f(a).gdq(a)}
J.dZ=function(a,b,c){return J.f(a).bQ(a,b,c)}
J.e_=function(a){return J.f(a).a8(a)}
J.e0=function(a,b){return J.f(a).aA(a,b)}
J.e1=function(a,b,c){return J.f(a).aB(a,b,c)}
J.bZ=function(a,b,c){return J.f(a).aE(a,b,c)}
J.e2=function(a,b){return J.f(a).bw(a,b)}
J.c_=function(a){return J.b1(a).de(a)}
J.e3=function(a,b){return J.f(a).sa4(a,b)}
J.c0=function(a,b){return J.f(a).sbv(a,b)}
J.e4=function(a,b,c,d){return J.f(a).aL(a,b,c,d)}
J.e5=function(a){return J.dt(a).dl(a)}
J.ac=function(a){return J.q(a).k(a)}
J.e6=function(a,b,c,d){return J.f(a).dm(a,b,c,d)}
J.e7=function(a,b,c){return J.f(a).bB(a,b,c)}
J.b8=function(a,b,c){return J.f(a).bC(a,b,c)}
J.c1=function(a,b,c){return J.f(a).bD(a,b,c)}
J.c2=function(a,b,c){return J.f(a).bE(a,b,c)}
J.c3=function(a,b,c){return J.f(a).bF(a,b,c)}
J.e8=function(a,b,c,d){return J.f(a).bG(a,b,c,d)}
J.e9=function(a,b,c,d){return J.f(a).bH(a,b,c,d)}
J.ea=function(a,b){return J.f(a).bJ(a,b)}
J.eb=function(a,b,c){return J.f(a).dn(a,b,c)}
J.ec=function(a,b,c,d,e,f,g){return J.f(a).bK(a,b,c,d,e,f,g)}
I.a8=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.b9.prototype
C.C=J.e.prototype
C.b=J.ag.prototype
C.a=J.ch.prototype
C.i=J.ci.prototype
C.j=J.ai.prototype
C.h=J.aj.prototype
C.J=J.ak.prototype
C.N=H.f0.prototype
C.O=W.f2.prototype
C.w=J.f6.prototype
C.B=W.fA.prototype
C.q=J.aC.prototype
C.a4=W.fK.prototype
C.t=new P.hj()
C.e=new P.hz()
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.K=H.v(I.a8(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.L=I.a8(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.M=I.a8([])
C.o=H.v(I.a8(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.v(I.a8(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.P=new G.p("vec3","vertex btangents",0)
C.c=new G.p("vec3","",0)
C.Q=new G.p("vec4","delta from light",0)
C.n=new G.p("","",0)
C.x=new G.p("vec3","vertex coordinates",0)
C.R=new G.p("vec3","vertex binormals",0)
C.y=new G.p("vec4","for wireframe",0)
C.S=new G.p("vec4","per vertex color",0)
C.T=new G.p("float","for normal maps",0)
C.k=new G.p("mat4","",0)
C.V=new G.p("mat4","",4)
C.U=new G.p("mat4","",128)
C.d=new G.p("float","",0)
C.W=new G.p("float","",4)
C.X=new G.p("float","depth for shadowmaps",0)
C.f=new G.p("sampler2D","",0)
C.Y=new G.p("float","for bump maps",0)
C.Z=new G.p("vec2","texture uvs",0)
C.a_=new G.p("float","time since program start in sec",0)
C.l=new G.p("vec2","",0)
C.a0=new G.p("samplerCube","",0)
C.m=new G.p("vec4","",0)
C.a1=new G.p("vec3","vertex normals",0)
C.a2=new G.p("sampler2DShadow","",0)
C.z=new G.p("vec3","per vertex color",0)
C.A=new G.p("mat3","",0)
C.a3=new G.p("vec3","vertex tangents",0)
$.L=0
$.ad=null
$.c6=null
$.dw=null
$.dj=null
$.dC=null
$.b_=null
$.b2=null
$.bN=null
$.a4=null
$.aq=null
$.ar=null
$.bG=!1
$.u=C.e
$.P=null
$.be=null
$.cd=null
$.cc=null
$.ix=0
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
I.$lazy(y,x,w)}})(["ca","$get$ca",function(){return H.du("_$dart_dartClosure")},"bj","$get$bj",function(){return H.du("_$dart_js")},"cJ","$get$cJ",function(){return H.M(H.aX({
toString:function(){return"$receiver$"}}))},"cK","$get$cK",function(){return H.M(H.aX({$method$:null,
toString:function(){return"$receiver$"}}))},"cL","$get$cL",function(){return H.M(H.aX(null))},"cM","$get$cM",function(){return H.M(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cQ","$get$cQ",function(){return H.M(H.aX(void 0))},"cR","$get$cR",function(){return H.M(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cO","$get$cO",function(){return H.M(H.cP(null))},"cN","$get$cN",function(){return H.M(function(){try{null.$method$}catch(z){return z.message}}())},"cT","$get$cT",function(){return H.M(H.cP(void 0))},"cS","$get$cS",function(){return H.M(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bB","$get$bB",function(){return P.fN()},"as","$get$as",function(){return[]},"d0","$get$d0",function(){return P.bm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bE","$get$bE",function(){return P.T()},"cA","$get$cA",function(){return new G.cH(1281,0,4294967295)},"c5","$get$c5",function(){return G.cG(1281,1281,1281)},"c4","$get$c4",function(){return G.cG(32774,1,1)},"Z","$get$Z",function(){return P.cl(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.z,"aColorAlpha",C.S,"aPosition",C.x,"aTexUV",C.Z,"aNormal",C.a1,"aBinormal",C.R,"aCenter",C.y,"aPointSize",C.d,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.a3,"aBitangent",C.P,"iaRotation",C.m,"iaTranslation",C.c,"iaScale",C.c,"vColor",C.z,"vTexUV",C.l,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.x,"vPositionFromLight",C.Q,"vCenter",C.y,"vDepth",C.X,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a2,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a0,"uAnimationTable",C.f,"uTime",C.a_,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.c,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.U,"uLightDescs",C.V,"uLightCount",C.d,"uLightTypes",C.W,"uBumpScale",C.Y,"uNormalScale",C.T])},"dr","$get$dr",function(){var z=G.cx("demoVertexShader")
z.c2(["aPosition","aPointSize","aColor"])
z.aP(["vColor"])
z.aT(["void main(void) {\n    gl_Position = vec4(aPosition.xy, 0.0, 1.0);\n    gl_PointSize = aPointSize;\n    vColor = aColor;\n} \n"])
return z},"dq","$get$dq",function(){var z=G.cx("demoFragmentShader")
z.aP(["vColor"])
z.aT(["void main(void) {\n    float r = length(gl_PointCoord.xy - vec2(0.5, 0.5));\n    oFragColor.rgb = r*r < 0.2 ? vColor : vec3(0.0, 0.0, 0.0);\n}\n"])
return z},"dA","$get$dA",function(){return T.fI(0.5,0.5)},"bM","$get$bM",function(){return W.iu().querySelector("#info")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.o},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.E]},{func:1,args:[W.aP]},{func:1,ret:P.bI,args:[W.ae,P.l,P.l,W.bD]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aV]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[W.o,W.o]},{func:1,args:[P.E,P.c]},{func:1,v:true,args:[P.au]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.iS(d||a)
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
Isolate.a8=a.a8
Isolate.b0=a.b0
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
if(typeof dartMainRunner==="function")dartMainRunner(D.dz,[])
else D.dz([])})})()
//# sourceMappingURL=game.dart.js.map
