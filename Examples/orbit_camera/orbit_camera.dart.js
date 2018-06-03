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
var d=supportsDirectProtoAccess&&b2!="d"
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.c3"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.c3"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.c3(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.al=function(){}
var dart=[["","",,H,{"^":"",kx:{"^":"d;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
c6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aZ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c5==null){H.ji()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dg("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bL()]
if(v!=null)return v
v=H.jm(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$bL(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
f:{"^":"d;",
C:function(a,b){return a===b},
gv:function(a){return H.aA(a)},
k:["cm",function(a){return"Instance of '"+H.aB(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fg:{"^":"f;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isj3:1},
fi:{"^":"f;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isaS:1},
bM:{"^":"f;",
gv:function(a){return 0},
k:["cn",function(a){return String(a)}]},
fI:{"^":"bM;"},
aW:{"^":"bM;"},
ay:{"^":"bM;",
k:function(a){var z=a[$.$get$cw()]
return z==null?this.cn(a):J.aN(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
au:{"^":"f;$ti",
ay:function(a,b){var z,y
if(!!a.fixed$length)H.W(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.M(a))}},
a6:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.c(y,x)
y[x]=w}return y.join(b)},
aV:function(a,b){return H.cY(a,b,null,H.B(a,0))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
gdB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.fe())},
ci:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.W(P.p("setRange"))
P.fQ(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.D()
if(typeof b!=="number")return H.r(b)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.aV(d,e).dK(0,!1)
x=0}y=J.af(w)
v=y.gj(w)
if(typeof v!=="number")return H.r(v)
if(x+z>v)throw H.a(H.ff())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
aa:function(a,b,c,d){return this.ci(a,b,c,d,0)},
cj:function(a,b){if(!!a.immutable$list)H.W(P.p("sort"))
H.h3(a,J.iR())},
aW:function(a){return this.cj(a,null)},
k:function(a){return P.bK(a,"[","]")},
gN:function(a){return new J.eE(a,a.length,0,null,[H.B(a,0)])},
gv:function(a){return H.aA(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.W(P.p("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.co(b,"newLength",null))
if(b<0)throw H.a(P.be(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a3(a,b))
if(b>=a.length||b<0)throw H.a(H.a3(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.W(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a3(a,b))
if(b>=a.length||b<0)throw H.a(H.a3(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gj(b))
y=H.C([],[H.B(a,0)])
this.sj(y,z)
this.aa(y,0,a.length,a)
this.aa(y,a.length,z,b)
return y},
$ism:1,
$asm:I.al,
$ish:1,
p:{
av:function(a){a.fixed$length=Array
return a},
kv:[function(a,b){return J.e4(a,b)},"$2","iR",8,0,18]}},
kw:{"^":"au;$ti"},
eE:{"^":"d;a,b,c,d,$ti",
gE:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aw:{"^":"f;",
T:function(a,b){var z
if(typeof b!=="number")throw H.a(H.V(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaC(b)
if(this.gaC(a)===z)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
dJ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
df:function(a,b,c){if(this.T(b,c)>0)throw H.a(H.V(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.V(b))
return a+b},
D:function(a,b){if(typeof b!=="number")throw H.a(H.V(b))
return a-b},
co:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bh(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.bh(a,b)},
bh:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bf:function(a,b){var z
if(a>0)z=this.d2(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d2:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.a(H.V(b))
return a<b},
a8:function(a,b){if(typeof b!=="number")throw H.a(H.V(b))
return a>b},
$isaI:1,
$isaJ:1},
cF:{"^":"aw;",$isD:1},
fh:{"^":"aw;"},
ax:{"^":"f;",
dg:function(a,b){if(b>=a.length)H.W(H.a3(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.a(H.a3(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.co(b,null,null))
return a+b},
aY:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.W(H.V(c))
if(b<0)throw H.a(P.bf(b,null,null))
if(typeof c!=="number")return H.r(c)
if(b>c)throw H.a(P.bf(b,null,null))
if(c>a.length)throw H.a(P.bf(c,null,null))
return a.substring(b,c)},
ck:function(a,b){return this.aY(a,b,null)},
T:function(a,b){var z
if(typeof b!=="string")throw H.a(H.V(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a3(a,b))
return a[b]},
$ism:1,
$asm:I.al,
$isq:1}}],["","",,H,{"^":"",
fe:function(){return new P.bT("No element")},
ff:function(){return new P.bT("Too few elements")},
h3:function(a,b){var z=J.a5(a)
if(typeof z!=="number")return z.D()
H.aU(a,0,z-1,b)},
aU:function(a,b,c,d){if(c-b<=32)H.h2(a,b,c,d)
else H.h1(a,b,c,d)},
h2:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.af(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.L(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
h1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a3(c-b+1,6)
y=b+z
x=c-z
w=C.b.a3(b+c,2)
v=w-z
u=w+z
t=J.af(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.L(d.$2(s,r),0)){n=r
r=s
s=n}if(J.L(d.$2(p,o),0)){n=o
o=p
p=n}if(J.L(d.$2(s,q),0)){n=q
q=s
s=n}if(J.L(d.$2(r,q),0)){n=q
q=r
r=n}if(J.L(d.$2(s,p),0)){n=p
p=s
s=n}if(J.L(d.$2(q,p),0)){n=p
p=q
q=n}if(J.L(d.$2(r,o),0)){n=o
o=r
r=n}if(J.L(d.$2(r,q),0)){n=q
q=r
r=n}if(J.L(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.K(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.C(i,0))continue
if(h.X(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aY(i)
if(h.a8(i,0)){--l
continue}else{g=l-1
if(h.X(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.b1(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.L(d.$2(j,p),0))for(;!0;)if(J.L(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b1(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.aU(a,b,m-2,d)
H.aU(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.K(d.$2(t.h(a,m),r),0);)++m
for(;J.K(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.K(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b1(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.aU(a,m,l,d)}else H.aU(a,m,l,d)},
cy:{"^":"fc;$ti"},
cJ:{"^":"cy;$ti",
gN:function(a){return new H.cK(this,this.gj(this),0,null,[H.dL(this,"cJ",0)])},
w:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.r(z)
y=0
for(;y<z;++y){b.$1(this.t(0,y))
if(z!==this.gj(this))throw H.a(P.M(this))}}},
he:{"^":"cJ;a,b,c,$ti",
cI:function(a,b,c,d){},
gcV:function(){var z=J.a5(this.a)
return z},
gd3:function(){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.r(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.r(z)
if(y>=z)return 0
return z-y},
t:function(a,b){var z,y
z=this.gd3()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.r(b)
y=z+b
if(!(b<0)){z=this.gcV()
if(typeof z!=="number")return H.r(z)
z=y>=z}else z=!0
if(z)throw H.a(P.v(b,this,"index",null,null))
return J.ee(this.a,y)},
dK:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.af(y)
w=x.gj(y)
if(typeof w!=="number")return w.D()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.C(u,this.$ti)
for(s=0;s<v;++s){u=x.t(y,z+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.X()
if(u<w)throw H.a(P.M(this))}return t},
p:{
cY:function(a,b,c,d){var z=new H.he(a,b,c,[d])
z.cI(a,b,c,d)
return z}}},
cK:{"^":"d;a,b,c,d,$ti",
gE:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.af(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.M(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.t(z,w);++this.c
return!0}},
ba:{"^":"d;$ti"}}],["","",,H,{"^":"",
jc:function(a){return init.types[a]},
jl:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aN(a)
if(typeof z!=="string")throw H.a(H.V(a))
return z},
aA:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aB:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.o(a).$isaW){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.l.b6(w,0)===36)w=C.l.ck(w,1)
r=H.bv(H.am(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
G:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fP:function(a){return a.b?H.G(a).getUTCFullYear()+0:H.G(a).getFullYear()+0},
fN:function(a){return a.b?H.G(a).getUTCMonth()+1:H.G(a).getMonth()+1},
fJ:function(a){return a.b?H.G(a).getUTCDate()+0:H.G(a).getDate()+0},
fK:function(a){return a.b?H.G(a).getUTCHours()+0:H.G(a).getHours()+0},
fM:function(a){return a.b?H.G(a).getUTCMinutes()+0:H.G(a).getMinutes()+0},
fO:function(a){return a.b?H.G(a).getUTCSeconds()+0:H.G(a).getSeconds()+0},
fL:function(a){return a.b?H.G(a).getUTCMilliseconds()+0:H.G(a).getMilliseconds()+0},
r:function(a){throw H.a(H.V(a))},
c:function(a,b){if(a==null)J.a5(a)
throw H.a(H.a3(a,b))},
a3:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
z=J.a5(a)
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.bf(b,"index",null)},
V:function(a){return new P.ai(!0,a,null,null)},
a1:function(a){if(typeof a!=="number")throw H.a(H.V(a))
return a},
a:function(a){var z
if(a==null)a=new P.cQ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dW})
z.name=""}else z.toString=H.dW
return z},
dW:function(){return J.aN(this.dartException)},
W:function(a){throw H.a(a)},
F:function(a){throw H.a(P.M(a))},
ao:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jt(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bf(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bN(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cP(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$d3()
u=$.$get$d4()
t=$.$get$d5()
s=$.$get$d6()
r=$.$get$da()
q=$.$get$db()
p=$.$get$d8()
$.$get$d7()
o=$.$get$dd()
n=$.$get$dc()
m=v.O(y)
if(m!=null)return z.$1(H.bN(y,m))
else{m=u.O(y)
if(m!=null){m.method="call"
return z.$1(H.bN(y,m))}else{m=t.O(y)
if(m==null){m=s.O(y)
if(m==null){m=r.O(y)
if(m==null){m=q.O(y)
if(m==null){m=p.O(y)
if(m==null){m=s.O(y)
if(m==null){m=o.O(y)
if(m==null){m=n.O(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cP(y,m))}}return z.$1(new H.hj(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cV()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ai(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cV()
return a},
ag:function(a){var z
if(a==null)return new H.dv(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dv(a,null)},
j7:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jk:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cA("Unsupported number of arguments for wrapped closure"))},
a2:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jk)
a.$identity=z
return z},
eP:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.fS(z).r}else x=c
w=d?Object.create(new H.h5().constructor.prototype):Object.create(new H.bF(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.X
$.X=J.ap(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cu(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jc,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cs:H.bG
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
eM:function(a,b,c,d){var z=H.bG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cu:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eO(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eM(y,!w,z,b)
if(y===0){w=$.X
$.X=J.ap(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ar
if(v==null){v=H.b5("self")
$.ar=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
$.X=J.ap(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ar
if(v==null){v=H.b5("self")
$.ar=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
eN:function(a,b,c,d){var z,y
z=H.bG
y=H.cs
switch(b?-1:a){case 0:throw H.a(H.fY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eO:function(a,b){var z,y,x,w,v,u,t,s
z=$.ar
if(z==null){z=H.b5("self")
$.ar=z}y=$.cr
if(y==null){y=H.b5("receiver")
$.cr=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eN(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.X
$.X=J.ap(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.X
$.X=J.ap(y,1)
return new Function(z+H.b(y)+"}")()},
c3:function(a,b,c,d,e,f){var z,y
z=J.av(b)
y=!!J.o(c).$ish?J.av(c):c
return H.eP(a,z,y,!!d,e,f)},
jp:function(a,b){var z=J.af(b)
throw H.a(H.ct(a,z.aY(b,3,z.gj(b))))},
a4:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.jp(a,b)},
c4:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dI:function(a,b){var z,y
if(a==null)return!1
z=H.c4(J.o(a))
if(z==null)y=!1
else y=H.dN(z,b)
return y},
iZ:function(a){var z
if(a instanceof H.i){z=H.c4(J.o(a))
if(z!=null)return H.c7(z,null)
return"Closure"}return H.aB(a)},
js:function(a){throw H.a(new P.eS(a))},
dK:function(a){return init.getIsolateTag(a)},
C:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
lG:function(a,b,c){return H.aK(a["$as"+H.b(c)],H.am(b))},
bt:function(a,b,c,d){var z=H.aK(a["$as"+H.b(c)],H.am(b))
return z==null?null:z[d]},
dL:function(a,b,c){var z=H.aK(a["$as"+H.b(b)],H.am(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.am(a)
return z==null?null:z[b]},
c7:function(a,b){var z=H.an(a,b)
return z},
an:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bv(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.an(z,b)
return H.iQ(a,b)}return"unknown-reified-type"},
iQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.an(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.an(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.an(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.j6(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.an(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bv:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bV("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.an(u,c)}return w?"":"<"+z.k(0)+">"},
jb:function(a){var z,y,x
if(a instanceof H.i){z=H.c4(J.o(a))
if(z!=null)return H.c7(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bv(a.$ti,0,null)
return y+x},
aK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c2:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.am(a)
y=J.o(a)
if(y[b]==null)return!1
return H.dF(H.aK(y[d],z),c)},
b0:function(a,b,c,d){var z,y
if(a==null)return a
z=H.c2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bv(c,0,null)
throw H.a(H.ct(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
dF:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.J(a[y],b[y]))return!1
return!0},
lE:function(a,b,c){return a.apply(b,H.aK(J.o(b)["$as"+H.b(c)],H.am(b)))},
J:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aS")return!0
if('func' in b)return H.dN(a,b)
if('func' in a)return b.builtin$cls==="kn"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.c7(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dF(H.aK(u,z),x)},
dE:function(a,b,c){var z,y,x,w,v
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
j_:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.av(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.J(v,u)||H.J(u,v)))return!1}return!0},
dN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.dE(x,w,!1))return!1
if(!H.dE(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.J(o,n)||H.J(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.J(o,n)||H.J(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.J(o,n)||H.J(n,o)))return!1}}return H.j_(a.named,b.named)},
lF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jm:function(a){var z,y,x,w,v,u
z=$.dM.$1(a)
y=$.br[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bu[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dD.$2(a,z)
if(z!=null){y=$.br[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bu[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bw(x)
$.br[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bu[z]=x
return x}if(v==="-"){u=H.bw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dP(a,x)
if(v==="*")throw H.a(P.dg(z))
if(init.leafTags[z]===true){u=H.bw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dP(a,x)},
dP:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c6(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bw:function(a){return J.c6(a,!1,null,!!a.$isn)},
jo:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bw(z)
else return J.c6(z,c,null,null)},
ji:function(){if(!0===$.c5)return
$.c5=!0
H.jj()},
jj:function(){var z,y,x,w,v,u,t,s
$.br=Object.create(null)
$.bu=Object.create(null)
H.je()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dS.$1(v)
if(u!=null){t=H.jo(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
je:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.ak(C.z,H.ak(C.E,H.ak(C.o,H.ak(C.o,H.ak(C.D,H.ak(C.A,H.ak(C.B(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dM=new H.jf(v)
$.dD=new H.jg(u)
$.dS=new H.jh(t)},
ak:function(a,b){return a(b)||b},
fR:{"^":"d;a,b,c,d,e,f,r,x",p:{
fS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.av(z)
y=z[0]
x=z[1]
return new H.fR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hh:{"^":"d;a,b,c,d,e,f",
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
Y:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
d9:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fF:{"^":"E;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
cP:function(a,b){return new H.fF(a,b==null?null:b.method)}}},
fj:{"^":"E;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bN:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fj(a,y,z?null:b.receiver)}}},
hj:{"^":"E;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jt:{"^":"i:1;a",
$1:function(a){if(!!J.o(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dv:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaC:1},
i:{"^":"d;",
k:function(a){return"Closure '"+H.aB(this).trim()+"'"},
gce:function(){return this},
gce:function(){return this}},
cZ:{"^":"i;"},
h5:{"^":"cZ;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bF:{"^":"cZ;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aA(this.a)
else y=typeof z!=="object"?J.a_(z):H.aA(z)
return(y^H.aA(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aB(z)+"'")},
p:{
bG:function(a){return a.a},
cs:function(a){return a.c},
b5:function(a){var z,y,x,w,v
z=new H.bF("self","target","receiver","name")
y=J.av(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eK:{"^":"E;a",
k:function(a){return this.a},
p:{
ct:function(a,b){return new H.eK("CastError: "+H.b(P.bI(a))+": type '"+H.iZ(a)+"' is not a subtype of type '"+b+"'")}}},
fX:{"^":"E;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
fY:function(a){return new H.fX(a)}}},
de:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.a_(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.de&&J.K(this.a,b.a)}},
cG:{"^":"fr;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gW:function(a){return new H.fp(this,[H.B(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b9(y,b)}else return this.dz(b)},
dz:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.aq(z,J.a_(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.ga5()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.ga5()
return x}else return this.dA(b)},
dA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.a_(a)&0x3ffffff)
x=this.aB(y,a)
if(x<0)return
return y[x].ga5()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.as()
this.b=z}this.b5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.as()
this.c=y}this.b5(y,b,c)}else{x=this.d
if(x==null){x=this.as()
this.d=x}w=J.a_(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.aw(x,w,[this.at(b,c)])
else{u=this.aB(v,b)
if(u>=0)v[u].sa5(c)
else v.push(this.at(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.M(this))
z=z.c}},
b5:function(a,b,c){var z=this.ae(a,b)
if(z==null)this.aw(a,b,this.at(b,c))
else z.sa5(c)},
bc:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.fo(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bc()
return z},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gdw(),b))return y
return-1},
k:function(a){return P.cL(this)},
ae:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cT:function(a,b){delete a[b]},
b9:function(a,b){return this.ae(a,b)!=null},
as:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cT(z,"<non-identifier-key>")
return z}},
fo:{"^":"d;dw:a<,a5:b@,c,d"},
fp:{"^":"cy;a,$ti",
gj:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.a7(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.M(z))
y=y.c}}},
a7:{"^":"d;a,b,c,d,$ti",
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jf:{"^":"i:1;a",
$1:function(a){return this.a(a)}},
jg:{"^":"i:8;a",
$2:function(a,b){return this.a(a,b)}},
jh:{"^":"i:9;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
j6:function(a){return J.av(H.C(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Z:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a3(b,a))},
fE:{"^":"f;","%":"DataView;ArrayBufferView;bQ|dp|dq|cO|dr|ds|a9"},
bQ:{"^":"fE;",
gj:function(a){return a.length},
$ism:1,
$asm:I.al,
$isn:1,
$asn:I.al},
cO:{"^":"dq;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
i:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asba:function(){return[P.aI]},
$asj:function(){return[P.aI]},
$ish:1,
$ash:function(){return[P.aI]},
"%":"Float64Array"},
a9:{"^":"ds;",
i:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asba:function(){return[P.D]},
$asj:function(){return[P.D]},
$ish:1,
$ash:function(){return[P.D]}},
fD:{"^":"cO;",$isbJ:1,"%":"Float32Array"},
kL:{"^":"a9;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kM:{"^":"a9;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
$isfb:1,
"%":"Int32Array"},
kN:{"^":"a9;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kO:{"^":"a9;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kP:{"^":"a9;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kQ:{"^":"a9;",
gj:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kR:{"^":"a9;",
gj:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dp:{"^":"bQ+j;"},
dq:{"^":"dp+ba;"},
dr:{"^":"bQ+j;"},
ds:{"^":"dr+ba;"}}],["","",,P,{"^":"",
hq:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.j0()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a2(new P.hs(z),1)).observe(y,{childList:true})
return new P.hr(z,y,x)}else if(self.setImmediate!=null)return P.j1()
return P.j2()},
lt:[function(a){self.scheduleImmediate(H.a2(new P.ht(a),0))},"$1","j0",4,0,5],
lu:[function(a){self.setImmediate(H.a2(new P.hu(a),0))},"$1","j1",4,0,5],
lv:[function(a){P.iv(0,a)},"$1","j2",4,0,5],
iU:function(a,b){if(H.dI(a,{func:1,args:[P.aS,P.aS]})){b.toString
return a}else{b.toString
return a}},
iT:function(){var z,y
for(;z=$.aj,z!=null;){$.aG=null
y=z.b
$.aj=y
if(y==null)$.aF=null
z.a.$0()}},
lD:[function(){$.c0=!0
try{P.iT()}finally{$.aG=null
$.c0=!1
if($.aj!=null)$.$get$bY().$1(P.dG())}},"$0","dG",0,0,3],
dB:function(a){var z=new P.di(a,null)
if($.aj==null){$.aF=z
$.aj=z
if(!$.c0)$.$get$bY().$1(P.dG())}else{$.aF.b=z
$.aF=z}},
iY:function(a){var z,y,x
z=$.aj
if(z==null){P.dB(a)
$.aG=$.aF
return}y=new P.di(a,null)
x=$.aG
if(x==null){y.b=z
$.aG=y
$.aj=y}else{y.b=x.b
x.b=y
$.aG=y
if(y.b==null)$.aF=y}},
jq:function(a){var z=$.u
if(C.f===z){P.bq(null,null,C.f,a)
return}z.toString
P.bq(null,null,z,z.bp(a))},
iX:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.ao(u)
y=H.ag(u)
$.u.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aq(x)
w=t
v=x.gZ()
c.$2(w,v)}}},
iM:function(a,b,c,d){var z=a.de(0)
if(!!J.o(z).$isaQ&&z!==$.$get$cC())z.dN(new P.iP(b,c,d))
else b.a1(c,d)},
iN:function(a,b){return new P.iO(a,b)},
ho:function(){return $.u},
bp:function(a,b,c,d,e){var z={}
z.a=d
P.iY(new P.iV(z,e))},
dz:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
dA:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
iW:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
bq:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bp(d):c.da(d)
P.dB(d)},
hs:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hr:{"^":"i:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ht:{"^":"i:0;a",
$0:function(){this.a.$0()}},
hu:{"^":"i:0;a",
$0:function(){this.a.$0()}},
iu:{"^":"d;a,b,c",
cP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a2(new P.iw(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
iv:function(a,b){var z=new P.iu(!0,null,0)
z.cP(a,b)
return z}}},
iw:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jE:{"^":"d;$ti"},
hw:{"^":"d;$ti"},
ir:{"^":"hw;a,$ti",
dh:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.h4("Future already completed"))
z.ad(b)}},
dk:{"^":"d;au:a<,b,c,d,e,$ti",
gd7:function(){return this.b.b},
gbM:function(){return(this.c&1)!==0},
gdv:function(){return(this.c&2)!==0},
gbL:function(){return this.c===8},
dt:function(a){return this.b.b.aI(this.d,a)},
dC:function(a){if(this.c!==6)return!0
return this.b.b.aI(this.d,J.aq(a))},
ds:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.dI(z,{func:1,args:[P.d,P.aC]}))return x.dG(z,y.gK(a),a.gZ())
else return x.aI(z,y.gK(a))},
du:function(){return this.b.b.bU(this.d)}},
ad:{"^":"d;bg:a<,b,d1:c<,$ti",
cO:function(a,b){this.a=4
this.c=a},
gcX:function(){return this.a===2},
gar:function(){return this.a>=4},
bZ:function(a,b){var z,y,x
z=$.u
if(z!==C.f){z.toString
if(b!=null)b=P.iU(b,z)}y=new P.ad(0,z,null,[null])
x=b==null?1:3
this.aj(new P.dk(null,y,x,a,b,[H.B(this,0),null]))
return y},
bY:function(a){return this.bZ(a,null)},
dN:function(a){var z,y
z=$.u
y=new P.ad(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.B(this,0)
this.aj(new P.dk(null,y,8,a,null,[z,z]))
return y},
aj:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gar()){y.aj(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bq(null,null,z,new P.hJ(this,a))}},
bd:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gau()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gar()){v.bd(a)
return}this.a=v.a
this.c=v.c}z.a=this.av(a)
y=this.b
y.toString
P.bq(null,null,y,new P.hO(z,this))}},
af:function(){var z=this.c
this.c=null
return this.av(z)},
av:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gau()
z.a=y}return y},
ad:function(a){var z,y,x
z=this.$ti
y=H.c2(a,"$isaQ",z,"$asaQ")
if(y){z=H.c2(a,"$isad",z,null)
if(z)P.dl(a,this)
else P.hK(a,this)}else{x=this.af()
this.a=4
this.c=a
P.aE(this,x)}},
a1:[function(a,b){var z=this.af()
this.a=8
this.c=new P.b4(a,b)
P.aE(this,z)},function(a){return this.a1(a,null)},"dR","$2","$1","gb8",4,2,11],
$isaQ:1,
p:{
hK:function(a,b){var z,y,x
b.a=1
try{a.bZ(new P.hL(b),new P.hM(b))}catch(x){z=H.ao(x)
y=H.ag(x)
P.jq(new P.hN(b,z,y))}},
dl:function(a,b){var z
for(;a.gcX();)a=a.c
if(a.gar()){z=b.af()
b.a=a.a
b.c=a.c
P.aE(b,z)}else{z=b.c
b.a=2
b.c=a
a.bd(z)}},
aE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aq(v)
t=v.gZ()
y.toString
P.bp(null,null,y,u,t)}return}for(;b.gau()!=null;b=s){s=b.a
b.a=null
P.aE(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbM()||b.gbL()){q=b.gd7()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aq(v)
t=v.gZ()
y.toString
P.bp(null,null,y,u,t)
return}p=$.u
if(p==null?q!=null:p!==q)$.u=q
else p=null
if(b.gbL())new P.hR(z,x,b,w).$0()
else if(y){if(b.gbM())new P.hQ(x,b,r).$0()}else if(b.gdv())new P.hP(z,x,b).$0()
if(p!=null)$.u=p
y=x.b
if(!!J.o(y).$isaQ){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.av(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dl(y,o)
return}}o=b.b
b=o.af()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
hJ:{"^":"i:0;a,b",
$0:function(){P.aE(this.a,this.b)}},
hO:{"^":"i:0;a,b",
$0:function(){P.aE(this.b,this.a.a)}},
hL:{"^":"i:1;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
hM:{"^":"i:12;a",
$2:function(a,b){this.a.a1(a,b)},
$1:function(a){return this.$2(a,null)}},
hN:{"^":"i:0;a,b,c",
$0:function(){this.a.a1(this.b,this.c)}},
hR:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.du()}catch(w){y=H.ao(w)
x=H.ag(w)
if(this.d){v=J.aq(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b4(y,x)
u.a=!0
return}if(!!J.o(z).$isaQ){if(z instanceof P.ad&&z.gbg()>=4){if(z.gbg()===8){v=this.b
v.b=z.gd1()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bY(new P.hS(t))
v.a=!1}}},
hS:{"^":"i:1;a",
$1:function(a){return this.a}},
hQ:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dt(this.c)}catch(x){z=H.ao(x)
y=H.ag(x)
w=this.a
w.b=new P.b4(z,y)
w.a=!0}}},
hP:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dC(z)===!0&&w.e!=null){v=this.b
v.b=w.ds(z)
v.a=!1}}catch(u){y=H.ao(u)
x=H.ag(u)
w=this.a
v=J.aq(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b4(y,x)
s.a=!0}}},
di:{"^":"d;a,b"},
cW:{"^":"d;$ti",
w:function(a,b){var z,y
z={}
y=new P.ad(0,$.u,null,[null])
z.a=null
z.a=this.bP(new P.ha(z,this,b,y),!0,new P.hb(y),y.gb8())
return y},
gj:function(a){var z,y
z={}
y=new P.ad(0,$.u,null,[P.D])
z.a=0
this.bP(new P.hc(z),!0,new P.hd(z,y),y.gb8())
return y}},
ha:{"^":"i;a,b,c,d",
$1:function(a){P.iX(new P.h8(this.c,a),new P.h9(),P.iN(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.dL(this.b,"cW",0)]}}},
h8:{"^":"i:0;a,b",
$0:function(){return this.a.$1(this.b)}},
h9:{"^":"i:1;",
$1:function(a){}},
hb:{"^":"i:0;a",
$0:function(){this.a.ad(null)}},
hc:{"^":"i:1;a",
$1:function(a){++this.a.a}},
hd:{"^":"i:0;a,b",
$0:function(){this.b.ad(this.a.a)}},
h7:{"^":"d;$ti"},
iP:{"^":"i:0;a,b,c",
$0:function(){return this.a.a1(this.b,this.c)}},
iO:{"^":"i:13;a,b",
$2:function(a,b){P.iM(this.a,this.b,a,b)}},
b4:{"^":"d;K:a>,Z:b<",
k:function(a){return H.b(this.a)},
$isE:1},
iB:{"^":"d;"},
iV:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cQ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aN(y)
throw x}},
id:{"^":"iB;",
dH:function(a){var z,y,x
try{if(C.f===$.u){a.$0()
return}P.dz(null,null,this,a)}catch(x){z=H.ao(x)
y=H.ag(x)
P.bp(null,null,this,z,y)}},
dI:function(a,b){var z,y,x
try{if(C.f===$.u){a.$1(b)
return}P.dA(null,null,this,a,b)}catch(x){z=H.ao(x)
y=H.ag(x)
P.bp(null,null,this,z,y)}},
da:function(a){return new P.ig(this,a)},
bp:function(a){return new P.ie(this,a)},
dc:function(a){return new P.ih(this,a)},
h:function(a,b){return},
bU:function(a){if($.u===C.f)return a.$0()
return P.dz(null,null,this,a)},
aI:function(a,b){if($.u===C.f)return a.$1(b)
return P.dA(null,null,this,a,b)},
dG:function(a,b,c){if($.u===C.f)return a.$2(b,c)
return P.iW(null,null,this,a,b,c)}},
ig:{"^":"i:0;a,b",
$0:function(){return this.a.bU(this.b)}},
ie:{"^":"i:0;a,b",
$0:function(){return this.a.dH(this.b)}},
ih:{"^":"i:1;a,b",
$1:function(a){return this.a.dI(this.b,a)}}}],["","",,P,{"^":"",
Q:function(){return new H.cG(0,null,null,null,null,null,0,[null,null])},
cI:function(a){return H.j7(a,new H.cG(0,null,null,null,null,null,0,[null,null]))},
a8:function(a,b,c,d){return new P.i0(0,null,null,null,null,null,0,[d])},
fd:function(a,b,c){var z,y
if(P.c1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aH()
y.push(a)
try{P.iS(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.cX(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bK:function(a,b,c){var z,y,x
if(P.c1(a))return b+"..."+c
z=new P.bV(b)
y=$.$get$aH()
y.push(a)
try{x=z
x.a=P.cX(x.ga_(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
c1:function(a){var z,y
for(z=0;y=$.$get$aH(),z<y.length;++z)if(a===y[z])return!0
return!1},
iS:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gE(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.u();t=s,s=r){r=z.gE(z);++x
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
fq:function(a,b){var z,y
z=P.a8(null,null,null,b)
for(y=J.bB(a);y.u();)z.I(0,y.gE(y))
return z},
cL:function(a){var z,y,x
z={}
if(P.c1(a))return"{...}"
y=new P.bV("")
try{$.$get$aH().push(a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.cd(a,new P.fs(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.$get$aH()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
i0:{"^":"hU;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.bZ(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cS(b)},
cS:function(a){var z=this.d
if(z==null)return!1
return this.ap(z[this.am(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.M(this))
z=z.b}},
I:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c_()
this.b=z}return this.b7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c_()
this.c=y}return this.b7(y,b)}else return this.cQ(0,b)},
cQ:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c_()
this.d=z}y=this.am(b)
x=z[y]
if(x==null)z[y]=[this.al(b)]
else{if(this.ap(x,b)>=0)return!1
x.push(this.al(b))}return!0},
bT:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.be(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.be(this.c,b)
else return this.cZ(0,b)},
cZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.am(b)]
x=this.ap(y,b)
if(x<0)return!1
this.bi(y.splice(x,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ak()}},
b7:function(a,b){if(a[b]!=null)return!1
a[b]=this.al(b)
return!0},
be:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bi(z)
delete a[b]
return!0},
ak:function(){this.r=this.r+1&67108863},
al:function(a){var z,y
z=new P.i1(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ak()
return z},
bi:function(a){var z,y
z=a.gcY()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ak()},
am:function(a){return J.a_(a)&0x3ffffff},
ap:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gcU(),b))return y
return-1},
p:{
c_:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
i1:{"^":"d;cU:a<,b,cY:c<"},
bZ:{"^":"d;a,b,c,d,$ti",
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
hU:{"^":"fZ;$ti"},
kz:{"^":"d;$ti"},
j:{"^":"d;$ti",
gN:function(a){return new H.cK(a,this.gj(a),0,null,[H.bt(this,a,"j",0)])},
t:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.r(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.M(a))}},
dr:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.r(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.M(a))}return y},
aV:function(a,b){return H.cY(a,b,null,H.bt(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.C([],[H.bt(this,a,"j",0)])
y=this.gj(a)
x=C.b.gj(b)
if(typeof y!=="number")return y.l()
C.c.sj(z,C.b.l(y,x))
C.c.aa(z,0,this.gj(a),a)
C.c.aa(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bK(a,"[","]")}},
fr:{"^":"R;$ti"},
fs:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
R:{"^":"d;$ti",
w:function(a,b){var z,y
for(z=J.bB(this.gW(a));z.u();){y=z.gE(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a5(this.gW(a))},
k:function(a){return P.cL(a)}},
h_:{"^":"d;$ti",
k:function(a){return P.bK(this,"{","}")},
w:function(a,b){var z
for(z=new P.bZ(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)}},
fZ:{"^":"h_;$ti"}}],["","",,P,{"^":"",
f0:function(a){var z=J.o(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aB(a)+"'"},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aN(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f0(a)},
cA:function(a){return new P.hG(a)},
ah:function(a){H.bx(H.b(a))},
j3:{"^":"d;"},
"+bool":0,
cx:{"^":"d;d6:a<,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.cx))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.gd6())},
gv:function(a){var z=this.a
return(z^C.b.bf(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.eT(H.fP(this))
y=P.aO(H.fN(this))
x=P.aO(H.fJ(this))
w=P.aO(H.fK(this))
v=P.aO(H.fM(this))
u=P.aO(H.fO(this))
t=P.eU(H.fL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
eT:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aO:function(a){if(a>=10)return""+a
return"0"+a}}},
aI:{"^":"aJ;"},
"+double":0,
aP:{"^":"d;a2:a<",
l:function(a,b){return new P.aP(C.b.l(this.a,b.ga2()))},
D:function(a,b){return new P.aP(this.a-b.ga2())},
X:function(a,b){return C.b.X(this.a,b.ga2())},
a8:function(a,b){return C.b.a8(this.a,b.ga2())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.ga2())},
k:function(a){var z,y,x,w,v
z=new P.f_()
y=this.a
if(y<0)return"-"+new P.aP(0-y).k(0)
x=z.$1(C.b.a3(y,6e7)%60)
w=z.$1(C.b.a3(y,1e6)%60)
v=new P.eZ().$1(y%1e6)
return""+C.b.a3(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
eY:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eZ:{"^":"i:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f_:{"^":"i:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"d;",
gZ:function(){return H.ag(this.$thrownJsError)}},
cQ:{"^":"E;",
k:function(a){return"Throw of null."}},
ai:{"^":"E;a,b,c,d",
gao:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gan:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gao()+y+x
if(!this.a)return w
v=this.gan()
u=P.bI(this.b)
return w+v+": "+H.b(u)},
p:{
co:function(a,b,c){return new P.ai(!0,a,b,c)},
eD:function(a){return new P.ai(!1,null,a,"Must not be null")}}},
cS:{"^":"ai;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bf:function(a,b,c){return new P.cS(null,null,!0,a,b,"Value not in range")},
be:function(a,b,c,d,e){return new P.cS(b,c,!0,a,d,"Invalid value")},
fQ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.a(P.be(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.a(P.be(b,a,c,"end",f))
return b}return c}}},
fa:{"^":"ai;e,j:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){if(J.b1(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.a5(b)
return new P.fa(b,z,!0,a,c,"Index out of range")}}},
hk:{"^":"E;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.hk(a)}}},
hi:{"^":"E;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dg:function(a){return new P.hi(a)}}},
bT:{"^":"E;a",
k:function(a){return"Bad state: "+this.a},
p:{
h4:function(a){return new P.bT(a)}}},
eQ:{"^":"E;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bI(z))+"."},
p:{
M:function(a){return new P.eQ(a)}}},
cV:{"^":"d;",
k:function(a){return"Stack Overflow"},
gZ:function(){return},
$isE:1},
eS:{"^":"E;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
jY:{"^":"d;"},
hG:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
D:{"^":"aJ;"},
"+int":0,
fc:{"^":"d;$ti",
w:function(a,b){var z
for(z=this.gN(this);z.u();)b.$1(z.gE(z))},
gj:function(a){var z,y
z=this.gN(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.eD("index"))
if(b<0)H.W(P.be(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.u();){x=z.gE(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.fd(this,"(",")")}},
h:{"^":"d;$ti"},
"+List":0,
bO:{"^":"d;$ti"},
aS:{"^":"d;",
gv:function(a){return P.d.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aJ:{"^":"d;"},
"+num":0,
d:{"^":";",
C:function(a,b){return this===b},
gv:function(a){return H.aA(this)},
k:function(a){return"Instance of '"+H.aB(this)+"'"},
toString:function(){return this.k(this)}},
aC:{"^":"d;"},
q:{"^":"d;"},
"+String":0,
bV:{"^":"d;a_:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cX:function(a,b,c){var z=J.bB(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gE(z))
while(z.u())}else{a+=H.b(z.gE(z))
for(;z.u();)a=a+c+H.b(z.gE(z))}return a}}}}],["","",,W,{"^":"",
cz:function(a){return"wheel"},
ae:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dn:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dy:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hz(a)
if(!!J.o(z).$isy)return z
return}else return a},
dC:function(a){var z=$.u
if(z===C.f)return a
return z.dc(a)},
P:{"^":"b8;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ju:{"^":"bS;m:x=,n:y=,A:z=","%":"Accelerometer|LinearAccelerationSensor"},
jv:{"^":"f;j:length=","%":"AccessibleNodeList"},
jw:{"^":"P;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jx:{"^":"P;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eH:{"^":"f;","%":"Response;Body"},
eJ:{"^":"P;G:height},H:width}",
aL:function(a,b,c){if(c!=null)return a.getContext(b,P.j4(c,null))
return a.getContext(b)},
cf:function(a,b){return this.aL(a,b,null)},
"%":"HTMLCanvasElement"},
jC:{"^":"f;",
dj:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ai:function(a){return P.O(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
jD:{"^":"A;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
jF:{"^":"b7;j:length=","%":"CSSPerspective"},
jG:{"^":"bH;m:x=,n:y=","%":"CSSPositionValue"},
jH:{"^":"b7;m:x=,n:y=,A:z=","%":"CSSRotation"},
jI:{"^":"b7;m:x=,n:y=,A:z=","%":"CSSScale"},
jJ:{"^":"hx;j:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eR:{"^":"d;"},
bH:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b7:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
jK:{"^":"bH;j:length=","%":"CSSTransformValue"},
jL:{"^":"b7;m:x=,n:y=,A:z=","%":"CSSTranslation"},
jM:{"^":"bH;j:length=","%":"CSSUnparsedValue"},
jN:{"^":"f;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
jO:{"^":"f;m:x=,n:y=,A:z=","%":"DeviceAcceleration"},
jP:{"^":"A;",
gaE:function(a){return new W.aX(a,"mousedown",!1,[W.H])},
gaF:function(a){return new W.aX(a,"mousemove",!1,[W.H])},
gaG:function(a){return new W.aX(a,"mouseup",!1,[W.H])},
gaH:function(a){return new W.aX(a,W.cz(a),!1,[W.aD])},
"%":"Document|HTMLDocument|XMLDocument"},
jQ:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
jR:{"^":"eV;",
gL:function(a){return a.a},
gP:function(a){return a.b},
gR:function(a){return a.c},
"%":"DOMMatrix"},
eV:{"^":"f;",
gL:function(a){return a.a},
gP:function(a){return a.b},
gR:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
jS:{"^":"eW;",
ga7:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gA:function(a){return a.z},
"%":"DOMPoint"},
eW:{"^":"f;",
ga7:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gA:function(a){return a.z},
"%":";DOMPointReadOnly"},
jT:{"^":"hB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a0]},
$isn:1,
$asn:function(){return[P.a0]},
$asj:function(){return[P.a0]},
$ish:1,
$ash:function(){return[P.a0]},
$ask:function(){return[P.a0]},
"%":"ClientRectList|DOMRectList"},
eX:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gH(a))+" x "+H.b(this.gG(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa0)return!1
return a.left===z.gbN(b)&&a.top===z.gc_(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.dn(W.ae(W.ae(W.ae(W.ae(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc0:function(a){return new P.aa(a.left,a.top,[null])},
gG:function(a){return a.height},
gbN:function(a){return a.left},
gc_:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa0:1,
$asa0:I.al,
"%":";DOMRectReadOnly"},
jU:{"^":"hD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.q]},
$isn:1,
$asn:function(){return[P.q]},
$asj:function(){return[P.q]},
$ish:1,
$ash:function(){return[P.q]},
$ask:function(){return[P.q]},
"%":"DOMStringList"},
jV:{"^":"f;j:length=","%":"DOMTokenList"},
b8:{"^":"A;",
k:function(a){return a.localName},
aK:function(a){return a.getBoundingClientRect()},
gaE:function(a){return new W.ab(a,"mousedown",!1,[W.H])},
gaF:function(a){return new W.ab(a,"mousemove",!1,[W.H])},
gaG:function(a){return new W.ab(a,"mouseup",!1,[W.H])},
gaH:function(a){return new W.ab(a,W.cz(a),!1,[W.aD])},
$isb8:1,
"%":";Element"},
jW:{"^":"P;G:height},H:width}","%":"HTMLEmbedElement"},
jX:{"^":"a6;K:error=","%":"ErrorEvent"},
a6:{"^":"f;",
ah:function(a){return a.preventDefault()},
$isa6:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
y:{"^":"f;",
bm:["cl",function(a,b,c,d){if(c!=null)this.cR(a,b,c,!1)}],
cR:function(a,b,c,d){return a.addEventListener(b,H.a2(c,1),!1)},
d_:function(a,b,c,d){return a.removeEventListener(b,H.a2(c,1),!1)},
$isy:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dt|du|dw|dx"},
kg:{"^":"hI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b9]},
$isn:1,
$asn:function(){return[W.b9]},
$asj:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"FileList"},
kh:{"^":"y;K:error=","%":"FileReader"},
ki:{"^":"y;K:error=,j:length=","%":"FileWriter"},
kk:{"^":"y;",
dT:function(a,b,c){return a.forEach(H.a2(b,3),c)},
w:function(a,b){b=H.a2(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
km:{"^":"P;j:length=","%":"HTMLFormElement"},
ko:{"^":"bS;m:x=,n:y=,A:z=","%":"Gyroscope"},
kp:{"^":"f;j:length=","%":"History"},
kq:{"^":"hW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.A]},
$isn:1,
$asn:function(){return[W.A]},
$asj:function(){return[W.A]},
$ish:1,
$ash:function(){return[W.A]},
$ask:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
kr:{"^":"P;G:height},H:width}","%":"HTMLIFrameElement"},
ks:{"^":"P;G:height},H:width}","%":"HTMLImageElement"},
ku:{"^":"P;G:height},H:width}","%":"HTMLInputElement"},
bc:{"^":"df;",
gdO:function(a){return a.which},
$isbc:1,
"%":"KeyboardEvent"},
kA:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
kB:{"^":"bS;m:x=,n:y=,A:z=","%":"Magnetometer"},
ft:{"^":"P;K:error=","%":"HTMLAudioElement;HTMLMediaElement"},
kE:{"^":"f;j:length=","%":"MediaList"},
kF:{"^":"y;",
S:function(a){return a.clone()},
"%":"MediaStream"},
kG:{"^":"y;aA:enabled=",
S:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
kH:{"^":"y;",
bm:function(a,b,c,d){if(J.K(b,"message"))a.start()
this.cl(a,b,c,!1)},
"%":"MessagePort"},
kI:{"^":"i2;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gW:function(a){var z=H.C([],[P.q])
this.w(a,new W.fv(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.q,null]},
"%":"MIDIInputMap"},
fv:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
kJ:{"^":"i3;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gW:function(a){var z=H.C([],[P.q])
this.w(a,new W.fw(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.q,null]},
"%":"MIDIOutputMap"},
fw:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
kK:{"^":"i5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bd]},
$isn:1,
$asn:function(){return[W.bd]},
$asj:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$ask:function(){return[W.bd]},
"%":"MimeTypeArray"},
H:{"^":"df;bv:button=",
gbR:function(a){var z,y,x
if(!!a.offsetX)return new P.aa(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.dy(z)).$isb8)throw H.a(P.p("offsetX is only supported on elements"))
y=W.dy(z)
z=[null]
x=new P.aa(a.clientX,a.clientY,z).D(0,J.ei(J.ek(y)))
return new P.aa(J.ci(x.a),J.ci(x.b),z)}},
$isH:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
A:{"^":"y;",
k:function(a){var z=a.nodeValue
return z==null?this.cm(a):z},
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kS:{"^":"i7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.A]},
$isn:1,
$asn:function(){return[W.A]},
$asj:function(){return[W.A]},
$ish:1,
$ash:function(){return[W.A]},
$ask:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
kU:{"^":"P;G:height},H:width}","%":"HTMLObjectElement"},
aT:{"^":"f;j:length=","%":"Plugin"},
kX:{"^":"ib;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aT]},
$isn:1,
$asn:function(){return[W.aT]},
$asj:function(){return[W.aT]},
$ish:1,
$ash:function(){return[W.aT]},
$ask:function(){return[W.aT]},
"%":"PluginArray"},
l_:{"^":"f;",
aK:function(a){return a.getBoundingClientRect()},
"%":"Range"},
l5:{"^":"ii;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gW:function(a){var z=H.C([],[P.q])
this.w(a,new W.fW(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.q,null]},
"%":"RTCStatsReport"},
fW:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
l6:{"^":"P;j:length=","%":"HTMLSelectElement"},
bS:{"^":"y;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
l7:{"^":"a6;K:error=","%":"SensorErrorEvent"},
l8:{"^":"du;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bh]},
$isn:1,
$asn:function(){return[W.bh]},
$asj:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$ask:function(){return[W.bh]},
"%":"SourceBufferList"},
l9:{"^":"ik;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"SpeechGrammarList"},
la:{"^":"a6;K:error=","%":"SpeechRecognitionError"},
aV:{"^":"f;j:length=","%":"SpeechRecognitionResult"},
lc:{"^":"io;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gW:function(a){var z=H.C([],[P.q])
this.w(a,new W.h6(z))
return z},
gj:function(a){return a.length},
$asR:function(){return[P.q,P.q]},
"%":"Storage"},
h6:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lg:{"^":"it;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bl]},
$isn:1,
$asn:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$ask:function(){return[W.bl]},
"%":"TextTrackCueList"},
lh:{"^":"dx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bk]},
$isn:1,
$asn:function(){return[W.bk]},
$asj:function(){return[W.bk]},
$ish:1,
$ash:function(){return[W.bk]},
$ask:function(){return[W.bk]},
"%":"TextTrackList"},
li:{"^":"f;j:length=","%":"TimeRanges"},
lj:{"^":"iy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"TouchList"},
lk:{"^":"f;j:length=","%":"TrackDefaultList"},
df:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ln:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
lp:{"^":"f;m:x=,A:z=","%":"VRStageBoundsPoint"},
lq:{"^":"ft;G:height},H:width}","%":"HTMLVideoElement"},
lr:{"^":"y;j:length=","%":"VideoTrackList"},
aD:{"^":"H;",
gdl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaD:1,
"%":"WheelEvent"},
hm:{"^":"y;",
gd8:function(a){var z,y
z=P.aJ
y=new P.ad(0,$.u,null,[z])
this.cW(a)
this.d0(a,W.dC(new W.hn(new P.ir(y,[z]))))
return y},
d0:function(a,b){return a.requestAnimationFrame(H.a2(b,1))},
cW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hn:{"^":"i:1;a",
$1:function(a){this.a.dh(0,a)}},
ls:{"^":"y;"},
lw:{"^":"iD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b6]},
$isn:1,
$asn:function(){return[W.b6]},
$asj:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$ask:function(){return[W.b6]},
"%":"CSSRuleList"},
lx:{"^":"eX;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa0)return!1
return a.left===z.gbN(b)&&a.top===z.gc_(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dn(W.ae(W.ae(W.ae(W.ae(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc0:function(a){return new P.aa(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
ly:{"^":"iF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bb]},
$isn:1,
$asn:function(){return[W.bb]},
$asj:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$ask:function(){return[W.bb]},
"%":"GamepadList"},
lz:{"^":"iH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.A]},
$isn:1,
$asn:function(){return[W.A]},
$asj:function(){return[W.A]},
$ish:1,
$ash:function(){return[W.A]},
$ask:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lA:{"^":"eH;",
S:function(a){return a.clone()},
"%":"Request"},
lB:{"^":"iJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aV]},
$isn:1,
$asn:function(){return[W.aV]},
$asj:function(){return[W.aV]},
$ish:1,
$ash:function(){return[W.aV]},
$ask:function(){return[W.aV]},
"%":"SpeechRecognitionResultList"},
lC:{"^":"iL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bj]},
$isn:1,
$asn:function(){return[W.bj]},
$asj:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$ask:function(){return[W.bj]},
"%":"StyleSheetList"},
aX:{"^":"cW;a,b,c,$ti",
bP:function(a,b,c,d){return W.ac(this.a,this.b,a,!1,H.B(this,0))}},
ab:{"^":"aX;a,b,c,$ti"},
hE:{"^":"h7;a,b,c,d,e,$ti",
cN:function(a,b,c,d,e){this.d4()},
de:function(a){if(this.b==null)return
this.d5()
this.b=null
this.d=null
return},
d4:function(){var z=this.d
if(z!=null&&this.a<=0)J.dY(this.b,this.c,z,!1)},
d5:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.dX(x,this.c,z,!1)}},
p:{
ac:function(a,b,c,d,e){var z=c==null?null:W.dC(new W.hF(c))
z=new W.hE(0,a,b,z,!1,[e])
z.cN(a,b,c,!1,e)
return z}}},
hF:{"^":"i:1;a",
$1:function(a){return this.a.$1(a)}},
k:{"^":"d;$ti",
gN:function(a){return new W.f1(a,this.gj(a),-1,null,[H.bt(this,a,"k",0)])}},
f1:{"^":"d;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aL(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gE:function(a){return this.d}},
hy:{"^":"d;a",$isy:1,p:{
hz:function(a){if(a===window)return a
else return new W.hy(a)}}},
hx:{"^":"f+eR;"},
hA:{"^":"f+j;"},
hB:{"^":"hA+k;"},
hC:{"^":"f+j;"},
hD:{"^":"hC+k;"},
hH:{"^":"f+j;"},
hI:{"^":"hH+k;"},
hV:{"^":"f+j;"},
hW:{"^":"hV+k;"},
i2:{"^":"f+R;"},
i3:{"^":"f+R;"},
i4:{"^":"f+j;"},
i5:{"^":"i4+k;"},
i6:{"^":"f+j;"},
i7:{"^":"i6+k;"},
ia:{"^":"f+j;"},
ib:{"^":"ia+k;"},
ii:{"^":"f+R;"},
dt:{"^":"y+j;"},
du:{"^":"dt+k;"},
ij:{"^":"f+j;"},
ik:{"^":"ij+k;"},
io:{"^":"f+R;"},
is:{"^":"f+j;"},
it:{"^":"is+k;"},
dw:{"^":"y+j;"},
dx:{"^":"dw+k;"},
ix:{"^":"f+j;"},
iy:{"^":"ix+k;"},
iC:{"^":"f+j;"},
iD:{"^":"iC+k;"},
iE:{"^":"f+j;"},
iF:{"^":"iE+k;"},
iG:{"^":"f+j;"},
iH:{"^":"iG+k;"},
iI:{"^":"f+j;"},
iJ:{"^":"iI+k;"},
iK:{"^":"f+j;"},
iL:{"^":"iK+k;"}}],["","",,P,{"^":"",
O:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
j4:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cd(a,new P.j5(z))
return z},
j5:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",l4:{"^":"y;K:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},ll:{"^":"y;K:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
jr:function(a){return Math.sqrt(a)},
dm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hX:{"^":"d;",
dD:function(){return Math.random()}},
aa:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.aa))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gv:function(a){var z,y
z=J.a_(this.a)
y=J.a_(this.b)
return P.hY(P.dm(P.dm(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.aa(y,C.a.l(z,x),this.$ti)},
D:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.D()
if(typeof x!=="number")return H.r(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.D()
if(typeof y!=="number")return H.r(y)
return new P.aa(z-x,w-y,this.$ti)}},
ic:{"^":"d;$ti"},
a0:{"^":"ic;$ti"}}],["","",,P,{"^":"",jZ:{"^":"w;m:x=,n:y=","%":"SVGFEBlendElement"},k_:{"^":"w;m:x=,n:y=","%":"SVGFEColorMatrixElement"},k0:{"^":"w;m:x=,n:y=","%":"SVGFEComponentTransferElement"},k1:{"^":"w;m:x=,n:y=","%":"SVGFECompositeElement"},k2:{"^":"w;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},k3:{"^":"w;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},k4:{"^":"w;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},k5:{"^":"w;m:x=,n:y=","%":"SVGFEFloodElement"},k6:{"^":"w;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},k7:{"^":"w;m:x=,n:y=","%":"SVGFEImageElement"},k8:{"^":"w;m:x=,n:y=","%":"SVGFEMergeElement"},k9:{"^":"w;m:x=,n:y=","%":"SVGFEMorphologyElement"},ka:{"^":"w;m:x=,n:y=","%":"SVGFEOffsetElement"},kb:{"^":"w;m:x=,n:y=,A:z=","%":"SVGFEPointLightElement"},kc:{"^":"w;m:x=,n:y=","%":"SVGFESpecularLightingElement"},kd:{"^":"w;m:x=,n:y=,A:z=","%":"SVGFESpotLightElement"},ke:{"^":"w;m:x=,n:y=","%":"SVGFETileElement"},kf:{"^":"w;m:x=,n:y=","%":"SVGFETurbulenceElement"},kj:{"^":"w;m:x=,n:y=","%":"SVGFilterElement"},kl:{"^":"at;m:x=,n:y=","%":"SVGForeignObjectElement"},f7:{"^":"at;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},at:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kt:{"^":"at;m:x=,n:y=","%":"SVGImageElement"},ky:{"^":"i_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cH]},
$ish:1,
$ash:function(){return[P.cH]},
$ask:function(){return[P.cH]},
"%":"SVGLengthList"},kC:{"^":"w;m:x=,n:y=","%":"SVGMaskElement"},kD:{"^":"f;L:a=,P:b=,R:c=","%":"SVGMatrix"},kT:{"^":"i9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cR]},
$ish:1,
$ash:function(){return[P.cR]},
$ask:function(){return[P.cR]},
"%":"SVGNumberList"},kW:{"^":"w;m:x=,n:y=","%":"SVGPatternElement"},kY:{"^":"f;m:x=,n:y=","%":"SVGPoint"},kZ:{"^":"f;j:length=","%":"SVGPointList"},l0:{"^":"f;m:x=,n:y=","%":"SVGRect"},l1:{"^":"f7;m:x=,n:y=","%":"SVGRectElement"},ld:{"^":"iq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.q]},
$ish:1,
$ash:function(){return[P.q]},
$ask:function(){return[P.q]},
"%":"SVGStringList"},w:{"^":"b8;",
gaE:function(a){return new W.ab(a,"mousedown",!1,[W.H])},
gaF:function(a){return new W.ab(a,"mousemove",!1,[W.H])},
gaG:function(a){return new W.ab(a,"mouseup",!1,[W.H])},
gaH:function(a){return new W.ab(a,"mousewheel",!1,[W.aD])},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},le:{"^":"at;m:x=,n:y=","%":"SVGSVGElement"},hf:{"^":"at;","%":"SVGTextPathElement;SVGTextContentElement"},lf:{"^":"hf;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lm:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d2]},
$ish:1,
$ash:function(){return[P.d2]},
$ask:function(){return[P.d2]},
"%":"SVGTransformList"},lo:{"^":"at;m:x=,n:y=","%":"SVGUseElement"},hZ:{"^":"f+j;"},i_:{"^":"hZ+k;"},i8:{"^":"f+j;"},i9:{"^":"i8+k;"},ip:{"^":"f+j;"},iq:{"^":"ip+k;"},iz:{"^":"f+j;"},iA:{"^":"iz+k;"}}],["","",,P,{"^":"",jy:{"^":"f;j:length=","%":"AudioBuffer"},jz:{"^":"hv;",
h:function(a,b){return P.O(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gW:function(a){var z=H.C([],[P.q])
this.w(a,new P.eF(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.q,null]},
"%":"AudioParamMap"},eF:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},jA:{"^":"f;aA:enabled=","%":"AudioTrack"},jB:{"^":"y;j:length=","%":"AudioTrackList"},eG:{"^":"y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kV:{"^":"eG;j:length=","%":"OfflineAudioContext"},hv:{"^":"f+R;"}}],["","",,P,{"^":"",l2:{"^":"f;",
bl:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindFramebuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b){return a.clear(b)},
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
ai:function(a){return P.O(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bO:function(a,b){return a.linkProgram(b)},
bS:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aJ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bV:function(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
bW:function(a,b,c,d){return a.texParameterf(b,c,d)},
bX:function(a,b,c,d){return a.texParameteri(b,c,d)},
c1:function(a,b,c){return a.uniform1f(b,c)},
c2:function(a,b,c){return a.uniform1fv(b,c)},
c3:function(a,b,c){return a.uniform1i(b,c)},
c4:function(a,b,c){return a.uniform1iv(b,c)},
c5:function(a,b,c){return a.uniform2fv(b,c)},
c6:function(a,b,c){return a.uniform3fv(b,c)},
c7:function(a,b,c){return a.uniform4fv(b,c)},
c8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c9:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ca:function(a,b){return a.useProgram(b)},
cb:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cd:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},l3:{"^":"f;",
d9:function(a,b){return a.beginTransformFeedback(b)},
dd:function(a,b){return a.bindVertexArray(b)},
dk:function(a){return a.createVertexArray()},
dm:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dn:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dq:function(a){return a.endTransformFeedback()},
dL:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dM:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bl:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindFramebuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b){return a.clear(b)},
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
ai:function(a){return P.O(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bO:function(a,b){return a.linkProgram(b)},
bS:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aJ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bV:function(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
bW:function(a,b,c,d){return a.texParameterf(b,c,d)},
bX:function(a,b,c,d){return a.texParameteri(b,c,d)},
c1:function(a,b,c){return a.uniform1f(b,c)},
c2:function(a,b,c){return a.uniform1fv(b,c)},
c3:function(a,b,c){return a.uniform1i(b,c)},
c4:function(a,b,c){return a.uniform1iv(b,c)},
c5:function(a,b,c){return a.uniform2fv(b,c)},
c6:function(a,b,c){return a.uniform3fv(b,c)},
c7:function(a,b,c){return a.uniform4fv(b,c)},
c8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c9:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ca:function(a,b){return a.useProgram(b)},
cb:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cd:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",lb:{"^":"im;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.O(a.item(b))},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bO]},
$ish:1,
$ash:function(){return[P.bO]},
$ask:function(){return[P.bO]},
"%":"SQLResultSetRowList"},il:{"^":"f+j;"},im:{"^":"il+k;"}}],["","",,G,{"^":"",
hp:function(a){var z,y,x,w
z=H.C(a.split("\n"),[P.q])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.c(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.c(z,y)
z[y]=w}return C.c.a6(z,"\n")},
dj:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bB(a,b)
z.aU(a,y,c)
z.by(a,y)
x=z.aQ(a,y,35713)
if(x!=null&&J.K(x,!1)){w=z.aP(a,y)
P.ah("E:Compilation failed:")
P.ah("E:"+G.hp(c))
P.ah("E:Failure:")
P.ah(C.l.l("E:",w))
throw H.a(w)}return y},
cB:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bC(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bD(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.c(a,y)
v=J.cf(a[y])
if(z>=w)return H.c(b,z)
b[z]=v}return b},
f3:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bC(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x;++z
if(y>=a.length)return H.c(a,y)
x=J.bD(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
f4:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bC(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bD(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.cf(a[y])
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.ej(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
f2:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aL(a[y],0)
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.aL(a[y],1)
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.aL(a[y],2)
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.aL(a[y],3)
if(z>=w)return H.c(b,z)
b[z]=x}return b},
hT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a7(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.D]],v=[P.aI],u=[T.T],t=[T.l],s=[T.S];y.u();){r=y.d
if(!x.ag(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.dJ>0)H.bx("I: "+q)
continue}p=z.h(0,r)
switch($.$get$U().h(0,r).a){case"vec2":b.a0(r,G.f3(H.b0(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a0(r,G.cB(H.b0(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a0(r,G.f4(H.b0(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a0(r,new Float32Array(H.bo(H.b0(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a0(r,G.f2(H.b0(p,"$ish",w,"$ash"),null),4)
break}}},
az:{"^":"d;aA:c>"},
bX:{"^":"az;d,a,b,c",
b3:function(){return this.d},
k:function(a){var z,y,x,w
z=H.C(["{"+H.b(new H.de(H.jb(this),null))+"}["+this.a+"]"],[P.q])
for(y=this.d,x=new H.a7(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a6(z,"\n")}},
eI:{"^":"cU;"},
eL:{"^":"d;a,b",
bK:function(a,b,c){J.ef(this.a,b)
if(c>0)J.eA(this.a,b,c)},
cc:function(a,b,c,d,e,f,g,h){J.by(this.a,34962,b)
J.eB(this.a,c,d,e,!1,g,h)}},
f5:{"^":"d;a,b,c,d,e"},
as:{"^":"d;L:a>,P:b>,R:c>",p:{
z:function(a,b,c){return new G.as(a,b,c)}}},
f6:{"^":"d;a,b,c,d,e",
b1:function(a){switch($.$get$U().h(0,a).a){case"vec2":this.e.i(0,a,H.C([],[T.S]))
break
case"vec3":this.e.i(0,a,H.C([],[T.l]))
break
case"vec4":this.e.i(0,a,H.C([],[T.T]))
break
case"float":this.e.i(0,a,H.C([],[P.aI]))
break
case"uvec4":this.e.i(0,a,H.C([],[[P.h,P.D]]))
break}},
cr:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.as(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.cb(a[x]))},
cp:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<3;++y)z.push(b[y].S(0))},
cq:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<3;++y)z.push(J.cb(b[y]))},
cw:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=new Array(z.length*3)
y.fixed$length=Array
x=H.C(y,[P.D])
for(y=z.length,w=x.length,v=0,u=0;u<y;++u){t=z[u]
if(v>=w)return H.c(x,v)
x[v]=t.a
s=v+1
if(s>=w)return H.c(x,s)
x[s]=t.b
s=v+2
if(s>=w)return H.c(x,s)
x[s]=t.c
v+=3}for(z=this.c,u=0;!1;++u){if(u>=0)return H.c(z,u)
r=z[u]
y=r.gL(r)
if(v>=w)return H.c(x,v)
x[v]=y
y=v+1
s=r.gP(r)
if(y>=w)return H.c(x,y)
x[y]=s
s=v+2
y=r.gR(r)
if(s>=w)return H.c(x,s)
x[s]=y
y=v+3
s=r.gL(r)
if(y>=w)return H.c(x,y)
x[y]=s
s=v+4
y=r.gR(r)
if(s>=w)return H.c(x,s)
x[s]=y
y=v+5
s=r.gdS(r)
if(y>=w)return H.c(x,y)
x[y]=s
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(y=this.e,x=new H.a7(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$U().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a6(z," ")}},
d1:{"^":"d;a,b,c"},
d_:{"^":"d;a,b,c",p:{
d0:function(a,b,c){return new G.d_(a,b,c)}}},
cM:{"^":"bX;d,a,b,c",
cC:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$cq())
z.i(0,"cStencilFunc",$.$get$bU())},
p:{
bP:function(a){var z=new G.cM(P.Q(),a,!1,!0)
z.cC(a)
return z}}},
fu:{"^":"az;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b0:function(a,b,c){var z,y
C.l.b6(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.by(z.a,34962,y)
J.ca(z.a,34962,b,35048)},
cz:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a0:function(a,b,c){var z,y,x,w,v
z=J.cc(a,0)===105
if(z&&this.z===0)this.z=C.b.co(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bz(x.a))
this.b0(a,b,c)
w=$.$get$U().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b2(x.a,this.e)
x.bK(0,v,z?1:0)
x.cc(0,y.h(0,a),v,w.b2(),5126,!1,0,0)},
b_:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bz(y.a))
this.ch=a
this.b0("aPosition",a,3)
x=$.$get$U().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b2(y.a,this.e)
y.bK(0,w,0)
y.cc(0,z.h(0,"aPosition"),w,x.b2(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a7(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a6(y,"  ")},
p:{
cN:function(a,b,c,d){return new G.fu(b,J.e8(b.a),c,P.Q(),d,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)}}},
fH:{"^":"bX;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cs:function(a,b){var z
if(typeof a!=="number")return a.dP()
if(typeof b!=="number")return H.r(b)
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
b3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.l(new Float32Array(3))
u.Y(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
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
y=J.o(t)
x=!!y.$isT
q=x?y.ga7(t):1
if(!!y.$isl){p=y.gm(t)
s=y.gn(t)
r=y.gA(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gA(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.r(t)
x=z[4]
if(typeof s!=="number")return H.r(s)
w=z[8]
if(typeof r!=="number")return H.r(r)
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
c.bQ(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
fV:{"^":"az;d,e,f,r,x,y,z,Q,ch,a,b,c",
cF:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cg(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cg(w.a,v,t))}},
cJ:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a7(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.ag(0,v))x.push(v)}for(z=this.x,y=new P.bZ(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.M(0,v))x.push(v)}return x},
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a7(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cc(t,0)){case 117:if(w.ag(0,t)){s=b.h(0,t)
if(v.ag(0,t))H.bx("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$U().h(0,t)
if(r==null)H.W("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bE(x.a,q,s)
else if(!!J.o(s).$isfb)J.ey(x.a,q,s)
break
case"float":if(r.c===0)J.ew(x.a,q,s)
else if(!!J.o(s).$isbJ)J.ex(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a4(s,"$isx").a
J.cn(x.a,q,!1,p)}else if(!!J.o(s).$isbJ)J.cn(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a4(s,"$isN").a
J.cm(x.a,q,!1,p)}else if(!!J.o(s).$isbJ)J.cm(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cl(o,q,H.a4(s,"$isT").a)
else J.cl(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.ck(o,q,H.a4(s,"$isl").a)
else J.ck(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cj(o,q,H.a4(s,"$isS").a)
else J.cj(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.r(p)
J.c8(x.a,33984+p)
p=H.a4(s,"$isbW").b
J.aM(x.a,3553,p)
p=this.ch
J.bE(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.r(p)
J.c8(x.a,33984+p)
p=H.a4(s,"$isbW").b
J.aM(x.a,34067,p)
p=this.ch
J.bE(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bx("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.K(s,!0)
o=x.a
if(p)J.b3(o,2929)
else J.bA(o,2929)
break
case"cStencilFunc":H.a4(s,"$isd1")
p=s.a
o=x.a
if(p===1281)J.bA(o,2960)
else{J.b3(o,2960)
o=s.b
n=s.c
J.es(x.a,p,o,n)}break
case"cDepthWrite":J.e9(x.a,s)
break
case"cBlendEquation":H.a4(s,"$isd_")
p=s.a
o=x.a
if(p===1281)J.bA(o,3042)
else{J.b3(o,3042)
o=s.b
n=s.c
J.e1(x.a,o,n)
J.e0(x.a,p)}break}++u
break}}m=P.eY(0,0,0,Date.now()-new P.cx(z,!1).a,0,0)
""+u
m.k(0)},
cv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.ez(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bc()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.cL(w.a,w.b3())}y=this.Q
y.a4(0)
for(v=a.cy,u=new H.a7(v,v.r,null,null,[H.B(v,0)]),u.c=v.e;u.u();)y.I(0,u.d)
t=this.cJ()
if(t.length!==0)P.ah("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b2(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cz()
u=a.Q
r=a.z
if(s)J.dZ(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.ed(q,y,v,u,0,r)
else J.ec(q,y,v,u,0)}else{u=z.a
if(r>1)J.eb(u,y,0,v,r)
else J.ea(u,y,0,v)}if(s)J.eg(z.a)},
p:{
cT:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.a8(null,null,null,P.q)
y=c.b
x=d.b
w=c.f
v=J.e5(b.a)
u=G.dj(b.a,35633,y)
J.c9(b.a,v,u)
t=G.dj(b.a,35632,x)
J.c9(b.a,v,t)
if(w.length>0)J.ev(b.a,v,w,35980)
J.eq(b.a,v)
if(J.ep(b.a,v,35714)!==!0)H.W(J.eo(b.a,v))
z=new G.fV(b,c,d,v,P.fq(c.c,null),P.Q(),P.Q(),z,null,a,!1,!0)
z.cF(a,b,c,d)
return z}}},
t:{"^":"d;a,b,c",
b2:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
h0:{"^":"d;a,b,c,d,e,f,r,x",
aZ:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.i(0,w,this.r);++this.r}C.c.aW(z)},
ab:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)y.push(a[x])
C.c.aW(y)},
cG:function(a,b){this.b=this.cM(!0,a,b)},
ac:function(a){return this.cG(a,null)},
cM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=$.$get$U().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.c(z,u)
q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.ay(w,b)
w.push("}")
return C.c.a6(w,"\n")},
p:{
bg:function(a){return new G.h0(a,null,[],[],[],[],0,P.Q())}}},
cU:{"^":"az;",
a9:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
hg:{"^":"d;a,b,c,d,e,f,r",
cA:function(a,b){var z=this.e
if(z!==1)J.eu(a.a,b,34046,z)
J.ch(a.a,b,10240,this.r)
J.ch(a.a,b,10241,this.f)}},
bW:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
f9:{"^":"bW;f,a,b,c,d,e",
cH:function(a){var z,y
z=this.d
y=this.c
J.aM(z.a,y,this.b)
J.et(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
hl:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dh().dD()
if(v>=w)return H.c(x,v)
x[v]=(u-0.5)*c}y=G.cN(z,a.d,0,a.e.x)
y.b_(x)
return y},
fU:{"^":"fT;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dF:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sH(z,y)
w.sG(z,x)
P.ah("size change "+H.b(y)+" "+H.b(x))
this.dx.cs(y,x)
this.z=y
this.Q=x},"$1","gdE",4,0,14]}}],["","",,A,{"^":"",
dH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eh(b)!==!0)return
z=b.cK(c)
b.k(0)
y=C.c.gdB(e)
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
x.di(new T.N(v))
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
y.i(0,"uTransformationMatrix",b.d)
y.i(0,"uModelMatrix",w)
y.i(0,"uNormalMatrix",x)
e.push(b.ch)
a.cv(b.cx,e,d)
if(0>=e.length)return H.c(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.F)(y),++s)A.dH(a,y[s],z,d,e)},
aR:{"^":"cU;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
cK:function(a){var z=this.dx
z.q(a)
z.bQ(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
bR:{"^":"az;d,e,f,a,b,c"},
fT:{"^":"az;",
cE:function(a,b,c){if(this.d==null)this.d=new G.f5(this.e,null,null,null,null)},
cu:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.e_(v.a,36160,z)
J.eC(v.a,this.x,this.y,x,w)
if(y!==0)J.e2(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.bX(P.Q(),"transforms",!1,!0))
r=new T.x(new Float32Array(16))
r.F()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.F)(x),++q)A.dH(v,x[q],r,a,s)
if(0>=s.length)return H.c(s,-1)
s.pop()}},
ct:function(){return this.cu(null)}}}],["","",,V,{}],["","",,B,{"^":"",
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.c.ay(z,$.$get$cD())
C.c.ay(y,$.$get$cE())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.F)(z),++u){t=z[u]
s=J.e(t)
r=s.gL(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
q=new T.l(new Float32Array(3))
q.q(r)
r=s.gP(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
q.I(0,y[r])
q.J(0,0.5)
q.B(0)
r=s.gP(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
p=new T.l(new Float32Array(3))
p.q(r)
r=s.gR(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
p.I(0,y[r])
p.J(0,0.5)
p.B(0)
r=s.gR(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
o=new T.l(new Float32Array(3))
o.q(r)
r=s.gL(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
o.I(0,y[r])
o.J(0,0.5)
o.B(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.as(s.gL(t),n,l))
w.push(new G.as(s.gP(t),m,n))
w.push(new G.as(s.gR(t),l,m))
w.push(new G.as(n,m,l))}}k=new G.f6(!1,[],[],[],P.Q())
k.b1("aTexUV")
k.b1("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.F)(z),++u){t=z[u]
s=J.e(t)
r=s.gL(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
j=y[r]
r=s.gP(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
i=y[r]
s=s.gR(t)
if(s>>>0!==s||s>=y.length)return H.c(y,s)
h=y[s]
s=J.e(j)
r=s.gA(j)
g=s.gm(j)
g=Math.atan2(H.a1(r),H.a1(g))
s=Math.acos(H.a1(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.e(i)
g=s.gA(i)
f=s.gm(i)
f=Math.atan2(H.a1(g),H.a1(f))
s=Math.acos(H.a1(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.e(h)
f=s.gA(h)
e=s.gm(h)
e=Math.atan2(H.a1(f),H.a1(e))
s=Math.acos(H.a1(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.cq("aNormal",[j,i,h])
k.cr([j.V(b),i.V(b),h.V(b)])
k.cp("aTexUV",[new T.S(r),new T.S(g),new T.S(f)])}return k}}],["","",,D,{"^":"",fk:{"^":"d;a,b,c",
cB:function(a){var z
a=document
z=W.bc
W.ac(a,"keydown",new D.fm(this),!1,z)
W.ac(a,"keyup",new D.fn(this),!1,z)},
p:{
fl:function(a){var z=P.D
z=new D.fk(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z))
z.cB(a)
return z}}},fm:{"^":"i:7;a",
$1:function(a){var z=this.a
z.a.I(0,J.ce(a))
z.b.I(0,a.which)}},fn:{"^":"i:7;a",
$1:function(a){var z=this.a
z.a.bT(0,J.ce(a))
z.c.I(0,a.which)}},fx:{"^":"d;a,b,c,d,e,f,r,x",
cD:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaF(a)
W.ac(y.a,y.b,new D.fz(this),!1,H.B(y,0))
y=z.gaE(a)
W.ac(y.a,y.b,new D.fA(this),!1,H.B(y,0))
y=z.gaG(a)
W.ac(y.a,y.b,new D.fB(this),!1,H.B(y,0))
z=z.gaH(a)
W.ac(z.a,z.b,new D.fC(this),!1,H.B(z,0))},
p:{
fy:function(a){var z=P.D
z=new D.fx(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),0,0,0,0,0)
z.cD(a)
return z}}},fz:{"^":"i:4;a",
$1:function(a){var z,y
z=J.e(a)
z.ah(a)
y=this.a
y.r=z.gbR(a).a
y.x=z.gbR(a).b
y.d=a.movementX
y.e=a.movementY}},fA:{"^":"i:4;a",
$1:function(a){var z=J.e(a)
z.ah(a)
P.ah("BUTTON "+H.b(z.gbv(a)))
z=this.a
z.a.I(0,a.button)
z.b.I(0,a.button)}},fB:{"^":"i:4;a",
$1:function(a){var z,y
z=J.e(a)
z.ah(a)
y=this.a
y.a.bT(0,z.gbv(a))
y.c.I(0,a.button)}},fC:{"^":"i:15;a",
$1:function(a){var z=J.e(a)
z.ah(a)
this.a.f=z.gdl(a)}},fG:{"^":"eI;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b_:function(a){var z,y
z=C.G.dr(a,0,new A.jd())
if(typeof z!=="number")return H.r(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jd:{"^":"i:16;",
$2:function(a,b){var z,y
z=J.ap(a,J.a_(b))
if(typeof z!=="number")return H.r(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",N:{"^":"d;ba:a<",
q:function(a){var z,y
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.c(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.N){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.b_(this.a)},
U:function(a){var z,y,x
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
return new T.l(z)},
S:function(a){var z=new T.N(new Float32Array(9))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.N(z)
y.q(this)
x=b.gba()
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
D:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.N(z)
y.q(this)
x=b.gba()
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
di:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
V:function(a){var z,y
z=new Float32Array(9)
y=new T.N(z)
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
return y}},x:{"^":"d;bb:a<",
q:function(a){var z,y
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n[3] "+this.U(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.c(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.b_(this.a)},
U:function(a){var z,y,x
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
return new T.T(z)},
S:function(a){var z=new T.x(new Float32Array(16))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.x(z)
y.q(this)
x=b.gbb()
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
D:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.x(z)
y.q(this)
x=b.gbb()
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
aT:function(a,b,c,d){var z,y,x,w,v,u
z=J.o(b)
y=!!z.$isT
x=y?z.ga7(b):1
if(!!z.$isl){w=z.gm(b)
v=z.gn(b)
u=z.gA(b)}else if(y){w=z.gm(b)
v=z.gn(b)
u=z.gA(b)}else if(typeof b==="number"){u=b
v=u
w=v}else{w=null
v=null
u=null}z=this.a
y=z[0]
if(typeof w!=="number")return H.r(w)
z[0]=y*w
z[1]=z[1]*w
z[2]=z[2]*w
z[3]=z[3]*w
y=z[4]
if(typeof v!=="number")return H.r(v)
z[4]=y*v
z[5]=z[5]*v
z[6]=z[6]*v
z[7]=z[7]*v
y=z[8]
if(typeof u!=="number")return H.r(u)
z[8]=y*u
z[9]=z[9]*u
z[10]=z[10]*u
z[11]=z[11]*u
z[12]=z[12]*x
z[13]=z[13]*x
z[14]=z[14]*x
z[15]=z[15]*x},
J:function(a,b){return this.aT(a,b,null,null)},
cg:function(a,b,c){var z=new T.x(new Float32Array(16))
z.q(this)
z.aT(0,a,b,c)
return z},
V:function(a){return this.cg(a,null,null)},
F:function(){var z=this.a
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
bQ:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},S:{"^":"d;bj:a<",
q:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.b_(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.S(z)
y.q(this)
x=b.gbj()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.S(z)
y.q(this)
x=b.gbj()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.c(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
J:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
V:function(a){var z=new T.S(new Float32Array(2))
z.q(this)
z.J(0,a)
return z},
S:function(a){var z=new T.S(new Float32Array(2))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},l:{"^":"d;ax:a<",
Y:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.gax()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.l){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.b_(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.l(z)
y.q(this)
x=b.gax()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z=new T.l(new Float32Array(3))
z.q(this)
z.I(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.c(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gaD())},
gaD:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
B:function(a){var z,y,x
z=Math.sqrt(this.gaD())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
az:function(a){var z,y
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
z=new T.l(new Float32Array(3))
z.Y(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
I:function(a,b){var z,y
z=b.gax()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
J:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
V:function(a){var z=new T.l(new Float32Array(3))
z.q(this)
z.J(0,a)
return z},
S:function(a){var z=new T.l(new Float32Array(3))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
p:{
I:function(a,b,c){var z=new T.l(new Float32Array(3))
z.Y(a,b,c)
return z}}},T:{"^":"d;bk:a<",
q:function(a){var z,y
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
if(b instanceof T.T){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.b_(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.T(z)
y.q(this)
x=b.gbk()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.T(z)
y.q(this)
x=b.gbk()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.c(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
J:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
V:function(a){var z=new T.T(new Float32Array(4))
z.q(this)
z.J(0,a)
return z},
S:function(a){var z=new T.T(new Float32Array(4))
z.q(this)
return z},
gP:function(a){return this.a[2]},
gL:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
ga7:function(a){return this.a[3]}}}],["","",,V,{"^":"",
dO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z={}
y=document
x=y.querySelector("#webgl-canvas")
w=new G.eL(null,x)
v=J.el(x,"webgl2",P.cI(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
w.a=v
if(v==null)H.W(P.cA('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.em(v))
if($.dJ>0)P.ah("I: "+u)
J.e3(v,0,0,0,1)
J.b3(v,2929)
v=new Float32Array(3)
u=D.fl(null)
t=D.fy(x)
s=new T.x(new Float32Array(16))
s.F()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.fG(15,0,0,0,new T.l(v),-0.02,u,t,s,new T.l(r),new T.l(q),new T.l(p),new T.l(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.x(new Float32Array(16))
v.F()
u=new T.x(new Float32Array(16))
u.F()
n=new G.fH(o,50,1,0.1,1000,v,u,new T.x(new Float32Array(16)),P.Q(),"perspective",!1,!0)
n.b4()
v=G.cT("solid",w,$.$get$dU(),$.$get$dT())
u=[]
m=B.f8(4,1,!0)
l=G.cN("icosahedron-4",v.d,4,v.e.x)
l.b_(G.cB(m.d,null))
t=m.cw()
s=l.d
l.y=J.bz(s.a)
r=l.ch.length
if(r<768){l.cx=new Uint8Array(H.bo(t))
l.Q=5121}else if(r<196608){l.cx=new Uint16Array(H.bo(t))
l.Q=5123}else{l.cx=new Uint32Array(H.bo(t))
l.Q=5125}J.b2(s.a,l.e)
t=l.y
r=l.cx
J.by(s.a,34963,t)
J.ca(s.a,34963,r,35048)
G.hT(m,l)
k=G.bP("head")
t=new T.l(new Float32Array(3))
t.Y(0.94,0.72,0.63)
k.d.i(0,"uColor",t)
t=[]
s=new Float32Array(9)
r=new T.x(new Float32Array(16))
r.F()
q=new T.x(new Float32Array(16))
q.F()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=G.bP("eye")
g.d.i(0,"uColor",$.$get$cv())
f=new Float32Array(9)
e=new T.x(new Float32Array(16))
e.F()
d=new T.x(new Float32Array(16))
d.F()
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a0=new A.aR(g,l,[],new T.N(f),e,d,new T.l(c),new T.l(b),new T.l(a),new T.l(new Float32Array(3)),"leftEye",!1,!0)
a0.a9(-0.2,0.4,-0.8)
d.J(0,0.2)
t.push(a0)
f=new Float32Array(9)
e=new T.x(new Float32Array(16))
e.F()
d=new T.x(new Float32Array(16))
d.F()
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a1=new A.aR(g,l,[],new T.N(f),e,d,new T.l(c),new T.l(b),new T.l(a),new T.l(new Float32Array(3)),"rightEye",!1,!0)
d.J(0,0.2)
a1.a9(0.2,0.4,-0.8)
t.push(a1)
a2=G.bP("nose")
f=new T.l(new Float32Array(3))
f.Y(0.9,0.7,0.6)
a2.d.i(0,"uColor",f)
f=new Float32Array(9)
e=new T.x(new Float32Array(16))
e.F()
d=new T.x(new Float32Array(16))
d.F()
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a3=new A.aR(a2,l,[],new T.N(f),e,d,new T.l(c),new T.l(b),new T.l(a),new T.l(new Float32Array(3)),"nose",!1,!0)
d.J(0,0.3)
a3.a9(0,0,-0.9)
t.push(a3)
u.push(new A.aR(k,l,t,new T.N(s),r,q,new T.l(p),new T.l(j),new T.l(i),new T.l(h),"head",!1,!0))
t=H.C([],[A.bR])
a4=new R.fU(x,n,null,w,t,17664,0,0,0,0,"main",!1,!0)
a4.cE("main",w,null)
a4.dF(null)
W.ac(window,"resize",a4.gdE(),!1,W.a6)
t.push(new A.bR(v,[n],u,"objects",!1,!0))
u=G.cT("stars",w,$.$get$dR(),$.$get$dQ())
v=[]
s=u.d
r=$.$get$cp()
q=P.Q()
q.i(0,"cDepthTest",!0)
q.i(0,"cDepthWrite",!1)
q.i(0,"cBlendEquation",r)
q.i(0,"cStencilFunc",$.$get$bU())
a5=y.createElement("canvas")
a5.width=64
a5.height=64
a6=C.x.cf(a5,"2d")
a7=J.e6(a6,32,32,1,32,32,22)
a7.addColorStop(0,"gray")
a7.addColorStop(1,"black")
a6.fillStyle=a7
a6.fillRect(0,0,64,64)
a7=a6.createRadialGradient(32,32,1,32,32,6)
a7.addColorStop(0,"white")
a7.addColorStop(1,"gray")
a6.globalAlpha=0.9
a6.fillStyle=a7
a6.arc(32,32,4,0,6.283185307179586,!1)
a6.fill("nonzero")
y=new G.hg(!1,!1,!1,!0,1,9729,9729)
r=J.e7(s.a)
p=new G.f9(a5,"Utils::Particles",r,3553,s,y)
J.aM(s.a,3553,r)
J.er(s.a,37440,1)
p.cH(a5)
y.cA(s,3553)
J.en(s.a)
J.aM(s.a,3553,null)
q.i(0,"uTexture",p)
q.i(0,"uPointSize",1000)
l=R.hl(u,2000,100)
y=new Float32Array(9)
s=new T.x(new Float32Array(16))
s.F()
r=new T.x(new Float32Array(16))
r.F()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
v.push(new A.aR(new G.cM(q,"stars",!1,!0),l,[],new T.N(y),s,r,new T.l(p),new T.l(j),new T.l(i),new T.l(new Float32Array(3)),l.a,!1,!0))
t.push(new A.bR(u,[n],v,"stars",!1,!0))
z.a=0
new V.jn(z,o,a4).$1(0)},
jn:{"^":"i:17;a,b,c",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.a
y=J.aY(b1)
y.D(b1,z.a)
z.a=y.l(b1,0)
y=this.b
y.go+=0.001
z=y.r1
x=z.a
if(x.M(0,0)||x.M(0,1)){x=y.go
w=z.d
if(typeof w!=="number")return w.aS()
y.go=x+w*0.01
w=y.id
x=z.e
if(typeof x!=="number")return x.aS()
y.id=w+x*0.01}x=y.k4
w=x.a
if(w.M(0,37))y.go+=0.03
else if(w.M(0,39))y.go-=0.03
if(w.M(0,38))y.id+=0.03
else if(w.M(0,40))y.id-=0.03
if(w.M(0,33))y.fy*=0.99
else if(w.M(0,34))y.fy*=1.01
if(w.M(0,32)){y.go=0
y.id=0}w=z.f
if(typeof w!=="number")return w.aS()
w=y.fy-w*y.k3
if(w>0)y.fy=w
w=C.a.df(y.id,-1.4707963267948965,1.4707963267948965)
y.id=w
v=y.fy
u=y.go
t=v*Math.cos(w)
y.a9(t*Math.cos(u),v*Math.sin(w),t*Math.sin(u))
u=y.k2
w=y.d.a
v=u.a
w[12]=w[12]+v[0]
w[13]=w[13]+v[1]
w[14]=w[14]+v[2]
s=w[12]
r=w[13]
q=w[14]
p=new T.l(new Float32Array(3))
p.Y(0,1,0)
v=y.e
o=v.a
o[0]=w[12]
o[1]=w[13]
o[2]=w[14]
n=v.D(0,u)
n.B(0)
m=p.bD(n)
m.B(0)
l=n.bD(m)
l.B(0)
u=m.az(v)
o=l.az(v)
v=n.az(v)
k=m.a
j=k[0]
i=l.a
h=i[0]
g=n.a
f=g[0]
e=k[1]
d=i[1]
c=g[1]
k=k[2]
i=i[2]
g=g[2]
w[15]=1
w[14]=-v
w[13]=-o
w[12]=-u
w[11]=0
w[10]=g
w[9]=i
w[8]=k
w[7]=0
w[6]=c
w[5]=d
w[4]=e
w[3]=0
w[2]=f
w[1]=h
w[0]=j
w[12]=s
w[13]=r
w[14]=q
j=y.f
h=j.a
h[0]=w[2]
h[1]=w[6]
h[2]=w[10]
y=-y.k1
b=Math.sqrt(j.gaD())
s=h[0]/b
r=h[1]/b
q=h[2]/b
a=Math.cos(y)
a0=Math.sin(y)
a1=1-a
a2=s*s*a1+a
y=q*a0
a3=s*r*a1-y
h=r*a0
a4=s*q*a1+h
a5=r*s*a1+y
a6=r*r*a1+a
y=s*a0
a7=r*q*a1-y
a8=q*s*a1-h
a9=q*r*a1+y
b0=q*q*a1+a
y=w[0]
h=w[4]
j=w[8]
f=w[1]
e=w[5]
d=w[9]
c=w[2]
k=w[6]
i=w[10]
g=w[3]
u=w[7]
o=w[11]
w[0]=y*a2+h*a5+j*a8
w[1]=f*a2+e*a5+d*a8
w[2]=c*a2+k*a5+i*a8
w[3]=g*a2+u*a5+o*a8
w[4]=y*a3+h*a6+j*a9
w[5]=f*a3+e*a6+d*a9
w[6]=c*a3+k*a6+i*a9
w[7]=g*a3+u*a6+o*a9
w[8]=y*a4+h*a7+j*b0
w[9]=f*a4+e*a7+d*b0
w[10]=c*a4+k*a7+i*b0
w[11]=g*a4+u*a7+o*b0
x.c.a4(0)
x.b.a4(0)
z.e=0
z.d=0
z.f=0
z.c.a4(0)
z.b.a4(0)
this.c.ct()
C.X.gd8(window).bY(this)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.fh.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.fi.prototype
if(typeof a=="boolean")return J.fg.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.aZ(a)}
J.j8=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.aZ(a)}
J.af=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.aZ(a)}
J.bs=function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.aZ(a)}
J.aY=function(a){if(typeof a=="number")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aW.prototype
return a}
J.j9=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aW.prototype
return a}
J.ja=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aW.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.aZ(a)}
J.ap=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.j8(a).l(a,b)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).C(a,b)}
J.L=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aY(a).a8(a,b)}
J.b1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aY(a).X(a,b)}
J.aL=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jl(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.af(a).h(a,b)}
J.dX=function(a,b,c,d){return J.e(a).d_(a,b,c,d)}
J.c8=function(a,b){return J.e(a).bl(a,b)}
J.dY=function(a,b,c,d){return J.e(a).bm(a,b,c,d)}
J.c9=function(a,b,c){return J.e(a).bn(a,b,c)}
J.dZ=function(a,b){return J.e(a).d9(a,b)}
J.by=function(a,b,c){return J.e(a).bo(a,b,c)}
J.e_=function(a,b,c){return J.e(a).bq(a,b,c)}
J.aM=function(a,b,c){return J.e(a).br(a,b,c)}
J.b2=function(a,b){return J.e(a).dd(a,b)}
J.e0=function(a,b){return J.e(a).bs(a,b)}
J.e1=function(a,b,c){return J.e(a).bt(a,b,c)}
J.ca=function(a,b,c,d){return J.e(a).bu(a,b,c,d)}
J.e2=function(a,b){return J.bs(a).bw(a,b)}
J.e3=function(a,b,c,d,e){return J.e(a).bx(a,b,c,d,e)}
J.cb=function(a){return J.e(a).S(a)}
J.cc=function(a,b){return J.ja(a).dg(a,b)}
J.e4=function(a,b){return J.j9(a).T(a,b)}
J.bz=function(a){return J.e(a).bz(a)}
J.e5=function(a){return J.e(a).bA(a)}
J.e6=function(a,b,c,d,e,f,g){return J.e(a).dj(a,b,c,d,e,f,g)}
J.e7=function(a){return J.e(a).bC(a)}
J.e8=function(a){return J.e(a).dk(a)}
J.e9=function(a,b){return J.e(a).bE(a,b)}
J.bA=function(a,b){return J.e(a).bF(a,b)}
J.ea=function(a,b,c,d){return J.e(a).bG(a,b,c,d)}
J.eb=function(a,b,c,d,e){return J.e(a).dm(a,b,c,d,e)}
J.ec=function(a,b,c,d,e){return J.e(a).bH(a,b,c,d,e)}
J.ed=function(a,b,c,d,e,f){return J.e(a).dn(a,b,c,d,e,f)}
J.ee=function(a,b){return J.bs(a).t(a,b)}
J.b3=function(a,b){return J.e(a).bI(a,b)}
J.ef=function(a,b){return J.e(a).bJ(a,b)}
J.eg=function(a){return J.e(a).dq(a)}
J.cd=function(a,b){return J.bs(a).w(a,b)}
J.eh=function(a){return J.e(a).gaA(a)}
J.aq=function(a){return J.e(a).gK(a)}
J.a_=function(a){return J.o(a).gv(a)}
J.bB=function(a){return J.bs(a).gN(a)}
J.a5=function(a){return J.af(a).gj(a)}
J.ei=function(a){return J.e(a).gc0(a)}
J.ej=function(a){return J.e(a).ga7(a)}
J.ce=function(a){return J.e(a).gdO(a)}
J.bC=function(a){return J.e(a).gm(a)}
J.bD=function(a){return J.e(a).gn(a)}
J.cf=function(a){return J.e(a).gA(a)}
J.ek=function(a){return J.e(a).aK(a)}
J.el=function(a,b,c){return J.e(a).aL(a,b,c)}
J.em=function(a){return J.e(a).ai(a)}
J.en=function(a){return J.e(a).aM(a)}
J.eo=function(a,b){return J.e(a).aN(a,b)}
J.ep=function(a,b,c){return J.e(a).aO(a,b,c)}
J.cg=function(a,b,c){return J.e(a).aR(a,b,c)}
J.eq=function(a,b){return J.e(a).bO(a,b)}
J.er=function(a,b,c){return J.e(a).bS(a,b,c)}
J.es=function(a,b,c,d){return J.e(a).aX(a,b,c,d)}
J.et=function(a,b,c,d,e,f,g){return J.e(a).bV(a,b,c,d,e,f,g)}
J.eu=function(a,b,c,d){return J.e(a).bW(a,b,c,d)}
J.ch=function(a,b,c,d){return J.e(a).bX(a,b,c,d)}
J.ci=function(a){return J.aY(a).dJ(a)}
J.aN=function(a){return J.o(a).k(a)}
J.ev=function(a,b,c,d){return J.e(a).dL(a,b,c,d)}
J.ew=function(a,b,c){return J.e(a).c1(a,b,c)}
J.ex=function(a,b,c){return J.e(a).c2(a,b,c)}
J.bE=function(a,b,c){return J.e(a).c3(a,b,c)}
J.ey=function(a,b,c){return J.e(a).c4(a,b,c)}
J.cj=function(a,b,c){return J.e(a).c5(a,b,c)}
J.ck=function(a,b,c){return J.e(a).c6(a,b,c)}
J.cl=function(a,b,c){return J.e(a).c7(a,b,c)}
J.cm=function(a,b,c,d){return J.e(a).c8(a,b,c,d)}
J.cn=function(a,b,c,d){return J.e(a).c9(a,b,c,d)}
J.ez=function(a,b){return J.e(a).ca(a,b)}
J.eA=function(a,b,c){return J.e(a).dM(a,b,c)}
J.eB=function(a,b,c,d,e,f,g){return J.e(a).cb(a,b,c,d,e,f,g)}
J.eC=function(a,b,c,d,e){return J.e(a).cd(a,b,c,d,e)}
var $=I.p
C.x=W.eJ.prototype
C.y=J.f.prototype
C.c=J.au.prototype
C.b=J.cF.prototype
C.a=J.aw.prototype
C.l=J.ax.prototype
C.F=J.ay.prototype
C.G=H.fD.prototype
C.q=J.fI.prototype
C.n=J.aW.prototype
C.X=W.hm.prototype
C.w=new P.hX()
C.f=new P.id()
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
C.H=new G.t("vec3","vertex btangents",0)
C.d=new G.t("vec3","",0)
C.I=new G.t("vec4","delta from light",0)
C.m=new G.t("","",0)
C.r=new G.t("vec3","vertex coordinates",0)
C.J=new G.t("vec3","vertex binormals",0)
C.t=new G.t("vec4","for wireframe",0)
C.K=new G.t("vec4","per vertex color",0)
C.L=new G.t("float","for normal maps",0)
C.i=new G.t("mat4","",0)
C.N=new G.t("mat4","",4)
C.M=new G.t("mat4","",128)
C.e=new G.t("float","",0)
C.O=new G.t("float","",4)
C.P=new G.t("float","depth for shadowmaps",0)
C.h=new G.t("sampler2D","",0)
C.Q=new G.t("float","for bump maps",0)
C.R=new G.t("vec2","texture uvs",0)
C.S=new G.t("float","time since program start in sec",0)
C.j=new G.t("vec2","",0)
C.T=new G.t("samplerCube","",0)
C.k=new G.t("vec4","",0)
C.U=new G.t("vec3","vertex normals",0)
C.V=new G.t("sampler2DShadow","",0)
C.u=new G.t("vec3","per vertex color",0)
C.v=new G.t("mat3","",0)
C.W=new G.t("vec3","vertex tangents",0)
$.X=0
$.ar=null
$.cr=null
$.dM=null
$.dD=null
$.dS=null
$.br=null
$.bu=null
$.c5=null
$.aj=null
$.aF=null
$.aG=null
$.c0=!1
$.u=C.f
$.dJ=0
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
I.$lazy(y,x,w)}})(["cw","$get$cw",function(){return H.dK("_$dart_dartClosure")},"bL","$get$bL",function(){return H.dK("_$dart_js")},"d3","$get$d3",function(){return H.Y(H.bn({
toString:function(){return"$receiver$"}}))},"d4","$get$d4",function(){return H.Y(H.bn({$method$:null,
toString:function(){return"$receiver$"}}))},"d5","$get$d5",function(){return H.Y(H.bn(null))},"d6","$get$d6",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"da","$get$da",function(){return H.Y(H.bn(void 0))},"db","$get$db",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"d8","$get$d8",function(){return H.Y(H.d9(null))},"d7","$get$d7",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"dd","$get$dd",function(){return H.Y(H.d9(void 0))},"dc","$get$dc",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bY","$get$bY",function(){return P.hq()},"cC","$get$cC",function(){var z,y
z=P.aS
y=new P.ad(0,P.ho(),null,[z])
y.cO(null,z)
return y},"aH","$get$aH",function(){return[]},"bU","$get$bU",function(){return new G.d1(1281,0,4294967295)},"cq","$get$cq",function(){return G.d0(1281,1281,1281)},"cp","$get$cp",function(){return G.d0(32774,770,769)},"U","$get$U",function(){return P.cI(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.u,"aColorAlpha",C.K,"aPosition",C.r,"aTexUV",C.R,"aNormal",C.U,"aBinormal",C.J,"aCenter",C.t,"aPointSize",C.e,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.W,"aBitangent",C.H,"iaRotation",C.k,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.u,"vTexUV",C.j,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.r,"vPositionFromLight",C.I,"vCenter",C.t,"vDepth",C.P,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.v,"uConvolutionMatrix",C.v,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.V,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.T,"uAnimationTable",C.h,"uTime",C.S,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.d,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.M,"uLightDescs",C.N,"uLightCount",C.e,"uLightTypes",C.O,"uBumpScale",C.Q,"uNormalScale",C.L])},"dh","$get$dh",function(){return C.w},"cv","$get$cv",function(){return T.I(0,0,1)},"dU","$get$dU",function(){var z=G.bg("SolidColor")
z.aZ(["aPosition"])
z.ab(["uPerspectiveViewMatrix","uModelMatrix"])
z.ac(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"dT","$get$dT",function(){var z=G.bg("SolidColorF")
z.ab(["uColor"])
z.ac(["oFragColor = vec4( uColor, 1.0 );"])
return z},"dR","$get$dR",function(){var z=G.bg("PointSpritesV")
z.aZ(["aPosition"])
z.ab(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ac(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"dQ","$get$dQ",function(){var z=G.bg("PointSpritesF")
z.ab(["uTexture"])
z.ac(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"cD","$get$cD",function(){return[G.z(0,11,5),G.z(0,5,1),G.z(0,1,7),G.z(0,7,10),G.z(0,10,11),G.z(1,5,9),G.z(5,11,4),G.z(11,10,2),G.z(10,7,6),G.z(7,1,8),G.z(3,9,4),G.z(3,4,2),G.z(3,2,6),G.z(3,6,8),G.z(3,8,9),G.z(4,9,5),G.z(2,4,11),G.z(6,2,10),G.z(8,6,7),G.z(9,8,1)]},"dV","$get$dV",function(){return(1+P.jr(5))/2},"cE","$get$cE",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$dV()
y=T.I(-1,z,0)
y.B(0)
x=T.I(1,z,0)
x.B(0)
if(typeof z!=="number")return z.dQ()
w=T.I(-1,-z,0)
w.B(0)
v=T.I(1,-z,0)
v.B(0)
u=T.I(0,-1,z)
u.B(0)
t=T.I(0,1,z)
t.B(0)
s=T.I(0,-1,-z)
s.B(0)
r=T.I(0,1,-z)
r.B(0)
q=T.I(z,0,-1)
q.B(0)
p=T.I(z,0,1)
p.B(0)
o=T.I(-z,0,-1)
o.B(0)
z=T.I(-z,0,1)
z.B(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1},{func:1,args:[,]},{func:1,args:[,,]},{func:1,v:true},{func:1,args:[W.H]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.q,args:[P.D]},{func:1,args:[W.bc]},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aC]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aC]},{func:1,v:true,args:[W.a6]},{func:1,args:[W.aD]},{func:1,args:[P.D,P.d]},{func:1,v:true,args:[P.aJ]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.js(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(V.dO,[])
else V.dO([])})})()
//# sourceMappingURL=orbit_camera.dart.js.map
