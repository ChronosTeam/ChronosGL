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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bA"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bA"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bA(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.a3=function(){}
var dart=[["","",,H,{"^":"",iP:{"^":"c;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
bE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aA:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bD==null){H.hC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cw("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bl()]
if(v!=null)return v
v=H.hG(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$bl(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
f:{"^":"c;",
D:function(a,b){return a===b},
gu:function(a){return H.ag(a)},
k:["br",function(a){return"Instance of '"+H.ah(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
e5:{"^":"f;",
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$ishn:1},
c0:{"^":"f;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
$isaQ:1},
bm:{"^":"f;",
gu:function(a){return 0},
k:["bs",function(a){return String(a)}]},
el:{"^":"bm;"},
ay:{"^":"bm;"},
af:{"^":"bm;",
k:function(a){var z=a[$.$get$bU()]
return z==null?this.bs(a):J.at(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ab:{"^":"f;$ti",
bX:function(a,b){var z
if(!!a.fixed$length)H.L(P.o("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
T:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
al:function(a,b){return H.ch(a,b,null,H.G(a,0))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
bo:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.L(P.o("setRange"))
P.et(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$ise){x=e
w=d}else{w=y.al(d,e).co(0,!1)
x=0}y=J.Z(w)
if(x+z>y.gi(w))throw H.a(H.e4())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
V:function(a,b,c,d){return this.bo(a,b,c,d,0)},
bp:function(a,b){if(!!a.immutable$list)H.L(P.o("sort"))
H.eG(a,J.ha())},
am:function(a){return this.bp(a,null)},
k:function(a){return P.bk(a,"[","]")},
gG:function(a){return new J.dB(a,a.length,0,null,[H.G(a,0)])},
gu:function(a){return H.ag(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.L(P.o("set length"))
if(b<0)throw H.a(P.br(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Q(a,b))
if(b>=a.length||b<0)throw H.a(H.Q(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.L(P.o("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Q(a,b))
if(b>=a.length||b<0)throw H.a(H.Q(a,b))
a[b]=c},
t:function(a,b){var z,y
z=C.a.t(a.length,C.a.gi(b))
y=H.w([],[H.G(a,0)])
this.si(y,z)
this.V(y,0,a.length,a)
this.V(y,a.length,z,b)
return y},
$isk:1,
$ask:I.a3,
$ise:1,
p:{
ac:function(a){a.fixed$length=Array
return a},
iN:[function(a,b){return J.d8(a,b)},"$2","ha",8,0,12]}},
iO:{"^":"ab;$ti"},
dB:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.a6(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ad:{"^":"f;",
K:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Y(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gad(b)
if(this.gad(a)===z)return 0
if(this.gad(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gad:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a+b},
a0:function(a,b){return a/b},
bt:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aI(a,b)},
R:function(a,b){return(a|0)===a?a/b|0:this.aI(a,b)},
aI:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.o("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
aG:function(a,b){var z
if(a>0)z=this.bT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
bT:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a<b},
U:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a>b},
$isam:1,
$isao:1},
c_:{"^":"ad;",$isA:1},
e6:{"^":"ad;"},
ae:{"^":"f;",
c2:function(a,b){if(b>=a.length)H.L(H.Q(a,b))
return a.charCodeAt(b)},
aw:function(a,b){if(b>=a.length)throw H.a(H.Q(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.a(P.dA(b,null,null))
return a+b},
ap:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.L(H.Y(c))
if(b<0)throw H.a(P.aR(b,null,null))
if(typeof c!=="number")return H.R(c)
if(b>c)throw H.a(P.aR(b,null,null))
if(c>a.length)throw H.a(P.aR(c,null,null))
return a.substring(b,c)},
bq:function(a,b){return this.ap(a,b,null)},
K:function(a,b){var z
if(typeof b!=="string")throw H.a(H.Y(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.Q(a,b))
return a[b]},
$isk:1,
$ask:I.a3,
$isn:1}}],["","",,H,{"^":"",
e4:function(){return new P.cf("Too few elements")},
eG:function(a,b){H.aw(a,0,J.T(a)-1,b)},
aw:function(a,b,c,d){if(c-b<=32)H.eF(a,b,c,d)
else H.eE(a,b,c,d)},
eF:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.Z(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.C(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
eE:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.R(c-b+1,6)
y=b+z
x=c-z
w=C.a.R(b+c,2)
v=w-z
u=w+z
t=J.Z(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.C(d.$2(s,r),0)){n=r
r=s
s=n}if(J.C(d.$2(p,o),0)){n=o
o=p
p=n}if(J.C(d.$2(s,q),0)){n=q
q=s
s=n}if(J.C(d.$2(r,q),0)){n=q
q=r
r=n}if(J.C(d.$2(s,p),0)){n=p
p=s
s=n}if(J.C(d.$2(q,p),0)){n=p
p=q
q=n}if(J.C(d.$2(r,o),0)){n=o
o=r
r=n}if(J.C(d.$2(r,q),0)){n=q
q=r
r=n}if(J.C(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.H(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.D(i,0))continue
if(h.L(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.b3(i)
if(h.U(i,0)){--l
continue}else{g=l-1
if(h.L(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aD(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.C(d.$2(j,p),0))for(;!0;)if(J.C(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aD(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aw(a,b,m-2,d)
H.aw(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.H(d.$2(t.h(a,m),r),0);)++m
for(;J.H(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.H(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aD(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aw(a,m,l,d)}else H.aw(a,m,l,d)},
bW:{"^":"e2;$ti"},
eb:{"^":"bW;$ti",
gG:function(a){return new H.c5(this,this.gi(this),0,null,this.$ti)}},
eK:{"^":"eb;a,b,c,$ti",
bG:function(a,b,c,d){},
gbO:function(){var z=J.T(this.a)
return z},
gbU:function(){var z,y
z=J.T(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.T(this.a)
y=this.b
if(y>=z)return 0
return z-y},
n:function(a,b){var z,y
z=this.gbU()+b
if(b>=0){y=this.gbO()
if(typeof y!=="number")return H.R(y)
y=z>=y}else y=!0
if(y)throw H.a(P.r(b,this,"index",null,null))
return J.dh(this.a,z)},
co:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.Z(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.w(u,this.$ti)
for(s=0;s<v;++s){u=x.n(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.a0(this))}return t},
p:{
ch:function(a,b,c,d){var z=new H.eK(a,b,c,[d])
z.bG(a,b,c,d)
return z}}},
c5:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.Z(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.a0(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.n(z,w);++this.c
return!0}},
aM:{"^":"c;$ti"}}],["","",,H,{"^":"",
hw:function(a){return init.types[a]},
hF:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$ism},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.a(H.Y(a))
return z},
ag:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ah:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.q(a).$isay){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.l.aw(w,0)===36)w=C.l.bq(w,1)
r=H.b6(H.an(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
y:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
es:function(a){return a.b?H.y(a).getUTCFullYear()+0:H.y(a).getFullYear()+0},
eq:function(a){return a.b?H.y(a).getUTCMonth()+1:H.y(a).getMonth()+1},
em:function(a){return a.b?H.y(a).getUTCDate()+0:H.y(a).getDate()+0},
en:function(a){return a.b?H.y(a).getUTCHours()+0:H.y(a).getHours()+0},
ep:function(a){return a.b?H.y(a).getUTCMinutes()+0:H.y(a).getMinutes()+0},
er:function(a){return a.b?H.y(a).getUTCSeconds()+0:H.y(a).getSeconds()+0},
eo:function(a){return a.b?H.y(a).getUTCMilliseconds()+0:H.y(a).getMilliseconds()+0},
R:function(a){throw H.a(H.Y(a))},
d:function(a,b){if(a==null)J.T(a)
throw H.a(H.Q(a,b))},
Q:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
z=J.T(a)
if(!(b<0)){if(typeof z!=="number")return H.R(z)
y=b>=z}else y=!0
if(y)return P.r(b,a,"index",null,z)
return P.aR(b,"index",null)},
Y:function(a){return new P.a8(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.c9()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.d2})
z.name=""}else z.toString=H.d2
return z},
d2:function(){return J.at(this.dartException)},
L:function(a){throw H.a(a)},
a6:function(a){throw H.a(P.a0(a))},
aq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.hM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.aG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bn(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.c8(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ck()
u=$.$get$cl()
t=$.$get$cm()
s=$.$get$cn()
r=$.$get$cr()
q=$.$get$cs()
p=$.$get$cp()
$.$get$co()
o=$.$get$cu()
n=$.$get$ct()
m=v.F(y)
if(m!=null)return z.$1(H.bn(y,m))
else{m=u.F(y)
if(m!=null){m.method="call"
return z.$1(H.bn(y,m))}else{m=t.F(y)
if(m==null){m=s.F(y)
if(m==null){m=r.F(y)
if(m==null){m=q.F(y)
if(m==null){m=p.F(y)
if(m==null){m=s.F(y)
if(m==null){m=o.F(y)
if(m==null){m=n.F(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.c8(y,m))}}return z.$1(new H.eQ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cd()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a8(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cd()
return a},
a4:function(a){var z
if(a==null)return new H.cI(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.cI(a,null)},
hr:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
hE:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.bY("Unsupported number of arguments for wrapped closure"))},
az:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hE)
a.$identity=z
return z},
dJ:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$ise){z.$reflectionInfo=c
x=H.ev(z).r}else x=c
w=d?Object.create(new H.eI().constructor.prototype):Object.create(new H.bf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.M
$.M=J.a7(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.bT(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.hw,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.bR:H.bg
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.bT(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
dG:function(a,b,c,d){var z=H.bg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
bT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.dI(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.dG(y,!w,z,b)
if(y===0){w=$.M
$.M=J.a7(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.a9
if(v==null){v=H.aH("self")
$.a9=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.M
$.M=J.a7(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.a9
if(v==null){v=H.aH("self")
$.a9=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
dH:function(a,b,c,d){var z,y
z=H.bg
y=H.bR
switch(b?-1:a){case 0:throw H.a(H.eA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
dI:function(a,b){var z,y,x,w,v,u,t,s
z=$.a9
if(z==null){z=H.aH("self")
$.a9=z}y=$.bQ
if(y==null){y=H.aH("receiver")
$.bQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.dH(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.M
$.M=J.a7(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.M
$.M=J.a7(y,1)
return new Function(z+H.b(y)+"}")()},
bA:function(a,b,c,d,e,f){var z,y
z=J.ac(b)
y=!!J.q(c).$ise?J.ac(c):c
return H.dJ(a,z,y,!!d,e,f)},
hJ:function(a,b){var z=J.Z(b)
throw H.a(H.bS(a,z.ap(b,3,z.gi(b))))},
S:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.hJ(a,b)},
bB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
cS:function(a,b){var z,y
if(a==null)return!1
z=H.bB(J.q(a))
if(z==null)y=!1
else y=H.cZ(z,b)
return y},
hh:function(a){var z
if(a instanceof H.l){z=H.bB(J.q(a))
if(z!=null)return H.bF(z,null)
return"Closure"}return H.ah(a)},
hL:function(a){throw H.a(new P.dM(a))},
cU:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
an:function(a){if(a==null)return
return a.$ti},
jV:function(a,b,c){return H.aB(a["$as"+H.b(c)],H.an(b))},
b4:function(a,b,c,d){var z=H.aB(a["$as"+H.b(c)],H.an(b))
return z==null?null:z[d]},
G:function(a,b){var z=H.an(a)
return z==null?null:z[b]},
bF:function(a,b){var z=H.a5(a,b)
return z},
a5:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.b6(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.a5(z,b)
return H.h9(a,b)}return"unknown-reified-type"},
h9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.a5(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.a5(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.a5(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.hq(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.a5(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
b6:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bt("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.a5(u,c)}return w?"":"<"+z.k(0)+">"},
hv:function(a){var z,y,x
if(a instanceof H.l){z=H.bB(J.q(a))
if(z!=null)return H.bF(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.b6(a.$ti,0,null)
return y+x},
aB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bz:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.an(a)
y=J.q(a)
if(y[b]==null)return!1
return H.cQ(H.aB(y[d],z),c)},
aC:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bz(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.b6(c,0,null)
throw H.a(H.bS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
cQ:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.B(a[y],b[y]))return!1
return!0},
jU:function(a,b,c){return a.apply(b,H.aB(J.q(b)["$as"+H.b(c)],H.an(b)))},
B:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aQ")return!0
if('func' in b)return H.cZ(a,b)
if('func' in a)return b.builtin$cls==="iF"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.bF(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.cQ(H.aB(u,z),x)},
cP:function(a,b,c){var z,y,x,w,v
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
hj:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.ac(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.B(v,u)||H.B(u,v)))return!1}return!0},
cZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.cP(x,w,!1))return!1
if(!H.cP(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.B(o,n)||H.B(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.B(o,n)||H.B(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.B(o,n)||H.B(n,o)))return!1}}return H.hj(a.named,b.named)},
hG:function(a){var z,y,x,w,v,u
z=$.cV.$1(a)
y=$.b2[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.cO.$2(a,z)
if(z!=null){y=$.b2[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.b7(x)
$.b2[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.b5[z]=x
return x}if(v==="-"){u=H.b7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.d0(a,x)
if(v==="*")throw H.a(P.cw(z))
if(init.leafTags[z]===true){u=H.b7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.d0(a,x)},
d0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
b7:function(a){return J.bE(a,!1,null,!!a.$ism)},
hI:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.b7(z)
else return J.bE(z,c,null,null)},
hC:function(){if(!0===$.bD)return
$.bD=!0
H.hD()},
hD:function(){var z,y,x,w,v,u,t,s
$.b2=Object.create(null)
$.b5=Object.create(null)
H.hy()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.d1.$1(v)
if(u!=null){t=H.hI(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
hy:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.a2(C.y,H.a2(C.D,H.a2(C.p,H.a2(C.p,H.a2(C.C,H.a2(C.z,H.a2(C.A(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.cV=new H.hz(v)
$.cO=new H.hA(u)
$.d1=new H.hB(t)},
a2:function(a,b){return a(b)||b},
eu:{"^":"c;a,b,c,d,e,f,r,x",p:{
ev:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ac(z)
y=z[0]
x=z[1]
return new H.eu(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
eN:{"^":"c;a,b,c,d,e,f",
F:function(a){var z,y,x
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
N:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.eN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
aY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ek:{"^":"x;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
c8:function(a,b){return new H.ek(a,b==null?null:b.method)}}},
e7:{"^":"x;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.e7(a,y,z?null:b.receiver)}}},
eQ:{"^":"x;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
hM:{"^":"l:1;a",
$1:function(a){if(!!J.q(a).$isx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
cI:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isce:1},
l:{"^":"c;",
k:function(a){return"Closure '"+H.ah(this).trim()+"'"},
gbk:function(){return this},
gbk:function(){return this}},
ci:{"^":"l;"},
eI:{"^":"ci;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bf:{"^":"ci;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var z,y
z=this.c
if(z==null)y=H.ag(this.a)
else y=typeof z!=="object"?J.a_(z):H.ag(z)
return(y^H.ag(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.ah(z)+"'")},
p:{
bg:function(a){return a.a},
bR:function(a){return a.c},
aH:function(a){var z,y,x,w,v
z=new H.bf("self","target","receiver","name")
y=J.ac(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
dE:{"^":"x;a",
k:function(a){return this.a},
p:{
bS:function(a,b){return new H.dE("CastError: "+H.b(P.bi(a))+": type '"+H.hh(a)+"' is not a subtype of type '"+b+"'")}}},
ez:{"^":"x;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
eA:function(a){return new H.ez(a)}}},
cv:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gu:function(a){return J.a_(this.a)},
D:function(a,b){if(b==null)return!1
return b instanceof H.cv&&J.H(this.a,b.a)}},
c1:{"^":"ec;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gI:function(a){return new H.e9(this,[H.G(this,0)])},
a_:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.aC(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.aC(y,b)}else return this.ci(b)},
ci:function(a){var z=this.d
if(z==null)return!1
return this.ac(this.a5(z,J.a_(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.X(z,b)
x=y==null?null:y.gS()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.X(w,b)
x=y==null?null:y.gS()
return x}else return this.cj(b)},
cj:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.a5(z,J.a_(a)&0x3ffffff)
x=this.ac(y,a)
if(x<0)return
return y[x].gS()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.a7()
this.b=z}this.au(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.a7()
this.c=y}this.au(y,b,c)}else{x=this.d
if(x==null){x=this.a7()
this.d=x}w=J.a_(b)&0x3ffffff
v=this.a5(x,w)
if(v==null)this.ab(x,w,[this.a8(b,c)])
else{u=this.ac(v,b)
if(u>=0)v[u].sS(c)
else v.push(this.a8(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.a0(this))
z=z.c}},
au:function(a,b,c){var z=this.X(a,b)
if(z==null)this.ab(a,b,this.a8(b,c))
else z.sS(c)},
aE:function(){this.r=this.r+1&67108863},
a8:function(a,b){var z,y
z=new H.e8(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aE()
return z},
ac:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gcg(),b))return y
return-1},
k:function(a){return P.c6(this)},
X:function(a,b){return a[b]},
a5:function(a,b){return a[b]},
ab:function(a,b,c){a[b]=c},
bM:function(a,b){delete a[b]},
aC:function(a,b){return this.X(a,b)!=null},
a7:function(){var z=Object.create(null)
this.ab(z,"<non-identifier-key>",z)
this.bM(z,"<non-identifier-key>")
return z}},
e8:{"^":"c;cg:a<,S:b@,c,d"},
e9:{"^":"bW;a,$ti",
gi:function(a){return this.a.a},
gG:function(a){var z,y
z=this.a
y=new H.U(z,z.r,null,null,this.$ti)
y.c=z.e
return y}},
U:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.a0(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
hz:{"^":"l:1;a",
$1:function(a){return this.a(a)}},
hA:{"^":"l:6;a",
$2:function(a,b){return this.a(a,b)}},
hB:{"^":"l:7;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
hq:function(a){return J.ac(H.w(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
b8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b_:function(a){var z,y,x
if(!!J.q(a).$isk)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
O:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.Q(b,a))},
ej:{"^":"f;","%":"DataView;ArrayBufferView;bq|cC|cD|c7|cE|cF|W"},
bq:{"^":"ej;",
gi:function(a){return a.length},
$isk:1,
$ask:I.a3,
$ism:1,
$asm:I.a3},
c7:{"^":"cD;",
h:function(a,b){H.O(b,a,a.length)
return a[b]},
j:function(a,b,c){H.O(b,a,a.length)
a[b]=c},
$asaM:function(){return[P.am]},
$ash:function(){return[P.am]},
$ise:1,
$ase:function(){return[P.am]},
"%":"Float64Array"},
W:{"^":"cF;",
j:function(a,b,c){H.O(b,a,a.length)
a[b]=c},
$asaM:function(){return[P.A]},
$ash:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]}},
ei:{"^":"c7;","%":"Float32Array"},
j0:{"^":"W;",
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":"Int16Array"},
j1:{"^":"W;",
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":"Int32Array"},
j2:{"^":"W;",
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":"Int8Array"},
j3:{"^":"W;",
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
j4:{"^":"W;",
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
j5:{"^":"W;",
gi:function(a){return a.length},
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
j6:{"^":"W;",
gi:function(a){return a.length},
h:function(a,b){H.O(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
cC:{"^":"bq+h;"},
cD:{"^":"cC+aM;"},
cE:{"^":"bq+h;"},
cF:{"^":"cE+aM;"}}],["","",,P,{"^":"",
eV:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.hk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.az(new P.eX(z),1)).observe(y,{childList:true})
return new P.eW(z,y,x)}else if(self.setImmediate!=null)return P.hl()
return P.hm()},
jK:[function(a){self.scheduleImmediate(H.az(new P.eY(a),0))},"$1","hk",4,0,4],
jL:[function(a){self.setImmediate(H.az(new P.eZ(a),0))},"$1","hl",4,0,4],
jM:[function(a){P.fT(0,a)},"$1","hm",4,0,4],
hd:function(a,b){if(H.cS(a,{func:1,args:[P.aQ,P.aQ]})){b.toString
return a}else{b.toString
return a}},
hc:function(){var z,y
for(;z=$.a1,z!=null;){$.ak=null
y=z.b
$.a1=y
if(y==null)$.aj=null
z.a.$0()}},
jT:[function(){$.bx=!0
try{P.hc()}finally{$.ak=null
$.bx=!1
if($.a1!=null)$.$get$bv().$1(P.cR())}},"$0","cR",0,0,3],
cN:function(a){var z=new P.cx(a,null)
if($.a1==null){$.aj=z
$.a1=z
if(!$.bx)$.$get$bv().$1(P.cR())}else{$.aj.b=z
$.aj=z}},
hg:function(a){var z,y,x
z=$.a1
if(z==null){P.cN(a)
$.ak=$.aj
return}y=new P.cx(a,null)
x=$.ak
if(x==null){y.b=z
$.ak=y
$.a1=y}else{y.b=x.b
x.b=y
$.ak=y
if(y.b==null)$.aj=y}},
hK:function(a){var z=$.u
if(C.d===z){P.b1(null,null,C.d,a)
return}z.toString
P.b1(null,null,z,z.aN(a))},
b0:function(a,b,c,d,e){var z={}
z.a=d
P.hg(new P.he(z,e))},
cL:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
cM:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
hf:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
b1:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.aN(d):c.c_(d)
P.cN(d)},
eX:{"^":"l:1;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
eW:{"^":"l:8;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
eY:{"^":"l:0;a",
$0:function(){this.a.$0()}},
eZ:{"^":"l:0;a",
$0:function(){this.a.$0()}},
fS:{"^":"c;a,b,c",
bJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.az(new P.fU(this,b),0),a)
else throw H.a(P.o("`setTimeout()` not found."))},
p:{
fT:function(a,b){var z=new P.fS(!0,null,0)
z.bJ(a,b)
return z}}},
fU:{"^":"l:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hX:{"^":"c;$ti"},
f0:{"^":"c;$ti"},
fP:{"^":"f0;a,$ti",
c3:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.eH("Future already completed"))
z.az(b)}},
f9:{"^":"c;a9:a<,b,c,d,e,$ti",
gbW:function(){return this.b.b},
gb4:function(){return(this.c&1)!==0},
gcf:function(){return(this.c&2)!==0},
gb3:function(){return this.c===8},
cd:function(a){return this.b.b.ae(this.d,a)},
ck:function(a){if(this.c!==6)return!0
return this.b.b.ae(this.d,J.as(a))},
cc:function(a){var z,y,x
z=this.e
y=J.i(a)
x=this.b.b
if(H.cS(z,{func:1,args:[P.c,P.ce]}))return x.cl(z,y.gE(a),a.gO())
else return x.ae(z,y.gE(a))},
ce:function(){return this.b.b.b6(this.d)}},
aZ:{"^":"c;aH:a<,b,bS:c<,$ti",
gbQ:function(){return this.a===2},
ga6:function(){return this.a>=4},
b8:function(a,b){var z,y,x
z=$.u
if(z!==C.d){z.toString
if(b!=null)b=P.hd(b,z)}y=new P.aZ(0,z,null,[null])
x=b==null?1:3
this.av(new P.f9(null,y,x,a,b,[H.G(this,0),null]))
return y},
b7:function(a){return this.b8(a,null)},
av:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.ga6()){y.av(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.b1(null,null,z,new P.fa(this,a))}},
aF:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.ga9()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.ga6()){v.aF(a)
return}this.a=v.a
this.c=v.c}z.a=this.aa(a)
y=this.b
y.toString
P.b1(null,null,y,new P.ff(z,this))}},
Y:function(){var z=this.c
this.c=null
return this.aa(z)},
aa:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.ga9()
z.a=y}return y},
az:function(a){var z,y,x
z=this.$ti
y=H.bz(a,"$isaN",z,"$asaN")
if(y){z=H.bz(a,"$isaZ",z,null)
if(z)P.cz(a,this)
else P.fb(a,this)}else{x=this.Y()
this.a=4
this.c=a
P.ai(this,x)}},
aA:function(a,b){var z=this.Y()
this.a=8
this.c=new P.aG(a,b)
P.ai(this,z)},
$isaN:1,
p:{
fb:function(a,b){var z,y,x
b.a=1
try{a.b8(new P.fc(b),new P.fd(b))}catch(x){z=H.aq(x)
y=H.a4(x)
P.hK(new P.fe(b,z,y))}},
cz:function(a,b){var z
for(;a.gbQ();)a=a.c
if(a.ga6()){z=b.Y()
b.a=a.a
b.c=a.c
P.ai(b,z)}else{z=b.c
b.a=2
b.c=a
a.aF(z)}},
ai:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.as(v)
t=v.gO()
y.toString
P.b0(null,null,y,u,t)}return}for(;b.ga9()!=null;b=s){s=b.a
b.a=null
P.ai(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gb4()||b.gb3()){q=b.gbW()
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
t=v.gO()
y.toString
P.b0(null,null,y,u,t)
return}p=$.u
if(p==null?q!=null:p!==q)$.u=q
else p=null
if(b.gb3())new P.fi(z,x,b,w).$0()
else if(y){if(b.gb4())new P.fh(x,b,r).$0()}else if(b.gcf())new P.fg(z,x,b).$0()
if(p!=null)$.u=p
y=x.b
if(!!J.q(y).$isaN){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aa(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.cz(y,o)
return}}o=b.b
b=o.Y()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
fa:{"^":"l:0;a,b",
$0:function(){P.ai(this.a,this.b)}},
ff:{"^":"l:0;a,b",
$0:function(){P.ai(this.b,this.a.a)}},
fc:{"^":"l:1;a",
$1:function(a){var z=this.a
z.a=0
z.az(a)}},
fd:{"^":"l:9;a",
$2:function(a,b){this.a.aA(a,b)},
$1:function(a){return this.$2(a,null)}},
fe:{"^":"l:0;a,b,c",
$0:function(){this.a.aA(this.b,this.c)}},
fi:{"^":"l:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ce()}catch(w){y=H.aq(w)
x=H.a4(w)
if(this.d){v=J.as(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aG(y,x)
u.a=!0
return}if(!!J.q(z).$isaN){if(z instanceof P.aZ&&z.gaH()>=4){if(z.gaH()===8){v=this.b
v.b=z.gbS()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.b7(new P.fj(t))
v.a=!1}}},
fj:{"^":"l:1;a",
$1:function(a){return this.a}},
fh:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.cd(this.c)}catch(x){z=H.aq(x)
y=H.a4(x)
w=this.a
w.b=new P.aG(z,y)
w.a=!0}}},
fg:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ck(z)===!0&&w.e!=null){v=this.b
v.b=w.cc(z)
v.a=!1}}catch(u){y=H.aq(u)
x=H.a4(u)
w=this.a
v=J.as(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aG(y,x)
s.a=!0}}},
cx:{"^":"c;a,b"},
aG:{"^":"c;E:a>,O:b<",
k:function(a){return H.b(this.a)},
$isx:1},
fZ:{"^":"c;"},
he:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c9()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.at(y)
throw x}},
fD:{"^":"fZ;",
cm:function(a){var z,y,x
try{if(C.d===$.u){a.$0()
return}P.cL(null,null,this,a)}catch(x){z=H.aq(x)
y=H.a4(x)
P.b0(null,null,this,z,y)}},
cn:function(a,b){var z,y,x
try{if(C.d===$.u){a.$1(b)
return}P.cM(null,null,this,a,b)}catch(x){z=H.aq(x)
y=H.a4(x)
P.b0(null,null,this,z,y)}},
c_:function(a){return new P.fF(this,a)},
aN:function(a){return new P.fE(this,a)},
c0:function(a){return new P.fG(this,a)},
h:function(a,b){return},
b6:function(a){if($.u===C.d)return a.$0()
return P.cL(null,null,this,a)},
ae:function(a,b){if($.u===C.d)return a.$1(b)
return P.cM(null,null,this,a,b)},
cl:function(a,b,c){if($.u===C.d)return a.$2(b,c)
return P.hf(null,null,this,a,b,c)}},
fF:{"^":"l:0;a,b",
$0:function(){return this.a.b6(this.b)}},
fE:{"^":"l:0;a,b",
$0:function(){return this.a.cm(this.b)}},
fG:{"^":"l:1;a,b",
$1:function(a){return this.a.cn(this.b,a)}}}],["","",,P,{"^":"",
V:function(){return new H.c1(0,null,null,null,null,null,0,[null,null])},
c3:function(a){return H.hr(a,new H.c1(0,null,null,null,null,null,0,[null,null]))},
c4:function(a,b,c,d){return new P.fq(0,null,null,null,null,null,0,[d])},
e3:function(a,b,c){var z,y
if(P.by(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$al()
y.push(a)
try{P.hb(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.cg(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bk:function(a,b,c){var z,y,x
if(P.by(a))return b+"..."+c
z=new P.bt(b)
y=$.$get$al()
y.push(a)
try{x=z
x.a=P.cg(x.gJ(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gJ()+c
y=z.gJ()
return y.charCodeAt(0)==0?y:y},
by:function(a){var z,y
for(z=0;y=$.$get$al(),z<y.length;++z)if(a===y[z])return!0
return!1},
hb:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gG(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.b(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.q()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.q();t=s,s=r){r=z.gA(z);++x
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
ea:function(a,b){var z,y
z=P.c4(null,null,null,b)
for(y=J.bb(a);y.q();)z.aK(0,y.gA(y))
return z},
c6:function(a){var z,y,x
z={}
if(P.by(a))return"{...}"
y=new P.bt("")
try{$.$get$al().push(a)
x=y
x.a=x.gJ()+"{"
z.a=!0
J.dk(a,new P.ed(z,y))
z=y
z.a=z.gJ()+"}"}finally{z=$.$get$al()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gJ()
return z.charCodeAt(0)==0?z:z},
fq:{"^":"fl;a,b,c,d,e,f,r,$ti",
gG:function(a){var z=new P.cB(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
c4:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.bL(b)},
bL:function(a){var z=this.d
if(z==null)return!1
return this.aD(z[this.aB(a)],a)>=0},
aK:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bw()
this.b=z}return this.ax(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bw()
this.c=y}return this.ax(y,b)}else return this.bK(0,b)},
bK:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bw()
this.d=z}y=this.aB(b)
x=z[y]
if(x==null)z[y]=[this.a2(b)]
else{if(this.aD(x,b)>=0)return!1
x.push(this.a2(b))}return!0},
ax:function(a,b){if(a[b]!=null)return!1
a[b]=this.a2(b)
return!0},
ay:function(){this.r=this.r+1&67108863},
a2:function(a){var z,y
z=new P.fr(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ay()
return z},
aB:function(a){return J.a_(a)&0x3ffffff},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gbN(),b))return y
return-1},
p:{
bw:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
fr:{"^":"c;bN:a<,b,c"},
cB:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.a0(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
fl:{"^":"eB;$ti"},
iR:{"^":"c;$ti"},
h:{"^":"c;$ti",
gG:function(a){return new H.c5(a,this.gi(a),0,null,[H.b4(this,a,"h",0)])},
n:function(a,b){return this.h(a,b)},
ca:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.a0(a))}return y},
al:function(a,b){return H.ch(a,b,null,H.b4(this,a,"h",0))},
t:function(a,b){var z=H.w([],[H.b4(this,a,"h",0)])
C.e.si(z,C.a.t(this.gi(a),C.a.gi(b)))
C.e.V(z,0,this.gi(a),a)
C.e.V(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bk(a,"[","]")}},
ec:{"^":"J;$ti"},
ed:{"^":"l:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
J:{"^":"c;$ti",
B:function(a,b){var z,y
for(z=J.bb(this.gI(a));z.q();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.T(this.gI(a))},
k:function(a){return P.c6(a)}},
eC:{"^":"c;$ti",
k:function(a){return P.bk(this,"{","}")}},
eB:{"^":"eC;$ti"}}],["","",,P,{"^":"",
dU:function(a){var z=J.q(a)
if(!!z.$isl)return z.k(a)
return"Instance of '"+H.ah(a)+"'"},
bi:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.dU(a)},
bY:function(a){return new P.f6(a)},
ap:function(a){H.b8(H.b(a))},
hn:{"^":"c;"},
"+bool":0,
bV:{"^":"c;bV:a<,b",
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.bV))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.a.K(this.a,b.gbV())},
gu:function(a){var z=this.a
return(z^C.a.aG(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.dN(H.es(this))
y=P.au(H.eq(this))
x=P.au(H.em(this))
w=P.au(H.en(this))
v=P.au(H.ep(this))
u=P.au(H.er(this))
t=P.dO(H.eo(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
dN:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
dO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
au:function(a){if(a>=10)return""+a
return"0"+a}}},
am:{"^":"ao;"},
"+double":0,
aK:{"^":"c;W:a<",
t:function(a,b){return new P.aK(C.a.t(this.a,b.gW()))},
L:function(a,b){return C.a.L(this.a,b.gW())},
U:function(a,b){return C.a.U(this.a,b.gW())},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.aK))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.a.K(this.a,b.gW())},
k:function(a){var z,y,x,w,v
z=new P.dT()
y=this.a
if(y<0)return"-"+new P.aK(0-y).k(0)
x=z.$1(C.a.R(y,6e7)%60)
w=z.$1(C.a.R(y,1e6)%60)
v=new P.dS().$1(y%1e6)
return""+C.a.R(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
dR:function(a,b,c,d,e,f){return new P.aK(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
dS:{"^":"l:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
dT:{"^":"l:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
x:{"^":"c;",
gO:function(){return H.a4(this.$thrownJsError)}},
c9:{"^":"x;",
k:function(a){return"Throw of null."}},
a8:{"^":"x;a,b,c,d",
ga4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga3:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.ga4()+y+x
if(!this.a)return w
v=this.ga3()
u=P.bi(this.b)
return w+v+": "+H.b(u)},
p:{
dA:function(a,b,c){return new P.a8(!0,a,b,c)}}},
cb:{"^":"a8;e,f,a,b,c,d",
ga4:function(){return"RangeError"},
ga3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
aR:function(a,b,c){return new P.cb(null,null,!0,a,b,"Value not in range")},
br:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
et:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.br(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.br(b,a,c,"end",f))
return b}}},
e1:{"^":"a8;e,i:f>,a,b,c,d",
ga4:function(){return"RangeError"},
ga3:function(){if(J.aD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
r:function(a,b,c,d,e){var z=e!=null?e:J.T(b)
return new P.e1(b,z,!0,a,c,"Index out of range")}}},
eR:{"^":"x;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
o:function(a){return new P.eR(a)}}},
eP:{"^":"x;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
cw:function(a){return new P.eP(a)}}},
cf:{"^":"x;a",
k:function(a){return"Bad state: "+this.a},
p:{
eH:function(a){return new P.cf(a)}}},
dK:{"^":"x;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bi(z))+"."},
p:{
a0:function(a){return new P.dK(a)}}},
cd:{"^":"c;",
k:function(a){return"Stack Overflow"},
gO:function(){return},
$isx:1},
dM:{"^":"x;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
ie:{"^":"c;"},
f6:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
A:{"^":"ao;"},
"+int":0,
e2:{"^":"c;$ti",
gi:function(a){var z,y
z=this.gG(this)
for(y=0;z.q();)++y
return y},
k:function(a){return P.e3(this,"(",")")}},
e:{"^":"c;$ti"},
"+List":0,
bo:{"^":"c;$ti"},
aQ:{"^":"c;",
gu:function(a){return P.c.prototype.gu.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
ao:{"^":"c;"},
"+num":0,
c:{"^":";",
D:function(a,b){return this===b},
gu:function(a){return H.ag(this)},
k:function(a){return"Instance of '"+H.ah(this)+"'"},
toString:function(){return this.k(this)}},
ce:{"^":"c;"},
n:{"^":"c;"},
"+String":0,
bt:{"^":"c;J:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cg:function(a,b,c){var z=J.bb(b)
if(!z.q())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.q())}else{a+=H.b(z.gA(z))
for(;z.q();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
X:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hi:function(a){var z=$.u
if(z===C.d)return a
return z.c0(a)},
I:{"^":"bX;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hN:{"^":"bs;l:x=,m:y=,C:z=","%":"Accelerometer|LinearAccelerationSensor"},
hO:{"^":"f;i:length=","%":"AccessibleNodeList"},
hP:{"^":"I;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
hQ:{"^":"I;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
hU:{"^":"I;v:height},w:width}",
bl:function(a,b,c){var z=a.getContext(b,P.ho(c,null))
return z},
"%":"HTMLCanvasElement"},
hV:{"^":"f;",
a1:function(a){return P.F(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
hW:{"^":"v;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hY:{"^":"aJ;i:length=","%":"CSSPerspective"},
hZ:{"^":"bh;l:x=,m:y=","%":"CSSPositionValue"},
i_:{"^":"aJ;l:x=,m:y=,C:z=","%":"CSSRotation"},
i0:{"^":"aJ;l:x=,m:y=,C:z=","%":"CSSScale"},
i1:{"^":"f1;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
dL:{"^":"c;"},
bh:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aJ:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
i2:{"^":"bh;i:length=","%":"CSSTransformValue"},
i3:{"^":"aJ;l:x=,m:y=,C:z=","%":"CSSTranslation"},
i4:{"^":"bh;i:length=","%":"CSSUnparsedValue"},
i5:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
i6:{"^":"f;l:x=,m:y=,C:z=","%":"DeviceAcceleration"},
i7:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
i8:{"^":"dP;",
gbj:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":"DOMPoint"},
dP:{"^":"f;",
gbj:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":";DOMPointReadOnly"},
i9:{"^":"f3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[P.P]},
$ism:1,
$asm:function(){return[P.P]},
$ash:function(){return[P.P]},
$ise:1,
$ase:function(){return[P.P]},
$asj:function(){return[P.P]},
"%":"ClientRectList|DOMRectList"},
dQ:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gw(a))+" x "+H.b(this.gv(a))},
D:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isP)return!1
return a.left===b.left&&a.top===b.top&&this.gw(a)===z.gw(b)&&this.gv(a)===z.gv(b)},
gu:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gw(a)
w=this.gv(a)
return W.cA(W.X(W.X(W.X(W.X(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gv:function(a){return a.height},
gw:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isP:1,
$asP:I.a3,
"%":";DOMRectReadOnly"},
ia:{"^":"f5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[P.n]},
$ism:1,
$asm:function(){return[P.n]},
$ash:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$asj:function(){return[P.n]},
"%":"DOMStringList"},
ib:{"^":"f;i:length=","%":"DOMTokenList"},
bX:{"^":"v;",
k:function(a){return a.localName},
"%":";Element"},
ic:{"^":"I;v:height},w:width}","%":"HTMLEmbedElement"},
id:{"^":"bj;E:error=","%":"ErrorEvent"},
bj:{"^":"f;","%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CompositionEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|DragEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FocusEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|KeyboardEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MouseEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PointerEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TextEvent|TouchEvent|TrackEvent|TransitionEvent|UIEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent|WheelEvent;Event|InputEvent"},
z:{"^":"f;","%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;cG|cH|cJ|cK"},
iz:{"^":"f8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aL]},
$ism:1,
$asm:function(){return[W.aL]},
$ash:function(){return[W.aL]},
$ise:1,
$ase:function(){return[W.aL]},
$asj:function(){return[W.aL]},
"%":"FileList"},
iA:{"^":"z;E:error=","%":"FileReader"},
iB:{"^":"z;E:error=,i:length=","%":"FileWriter"},
iE:{"^":"I;i:length=","%":"HTMLFormElement"},
iG:{"^":"bs;l:x=,m:y=,C:z=","%":"Gyroscope"},
iH:{"^":"f;i:length=","%":"History"},
iI:{"^":"fn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$ash:function(){return[W.v]},
$ise:1,
$ase:function(){return[W.v]},
$asj:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iJ:{"^":"I;v:height},w:width}","%":"HTMLIFrameElement"},
iK:{"^":"I;v:height},w:width}","%":"HTMLImageElement"},
iM:{"^":"I;v:height},w:width}","%":"HTMLInputElement"},
iS:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
iT:{"^":"bs;l:x=,m:y=,C:z=","%":"Magnetometer"},
ee:{"^":"I;E:error=","%":"HTMLAudioElement;HTMLMediaElement"},
iX:{"^":"f;i:length=","%":"MediaList"},
iY:{"^":"fs;",
h:function(a,b){return P.F(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.F(y.value[1]))}},
gI:function(a){var z=H.w([],[P.n])
this.B(a,new W.eg(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.n,null]},
"%":"MIDIInputMap"},
eg:{"^":"l:2;a",
$2:function(a,b){return this.a.push(a)}},
iZ:{"^":"ft;",
h:function(a,b){return P.F(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.F(y.value[1]))}},
gI:function(a){var z=H.w([],[P.n])
this.B(a,new W.eh(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
eh:{"^":"l:2;a",
$2:function(a,b){return this.a.push(a)}},
j_:{"^":"fv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aP]},
$ism:1,
$asm:function(){return[W.aP]},
$ash:function(){return[W.aP]},
$ise:1,
$ase:function(){return[W.aP]},
$asj:function(){return[W.aP]},
"%":"MimeTypeArray"},
v:{"^":"z;",
k:function(a){var z=a.nodeValue
return z==null?this.br(a):z},
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
j7:{"^":"fx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$ash:function(){return[W.v]},
$ise:1,
$ase:function(){return[W.v]},
$asj:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
j9:{"^":"I;v:height},w:width}","%":"HTMLObjectElement"},
av:{"^":"f;i:length=","%":"Plugin"},
jc:{"^":"fB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.av]},
$ism:1,
$asm:function(){return[W.av]},
$ash:function(){return[W.av]},
$ise:1,
$ase:function(){return[W.av]},
$asj:function(){return[W.av]},
"%":"PluginArray"},
jk:{"^":"fH;",
h:function(a,b){return P.F(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.F(y.value[1]))}},
gI:function(a){var z=H.w([],[P.n])
this.B(a,new W.ey(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.n,null]},
"%":"RTCStatsReport"},
ey:{"^":"l:2;a",
$2:function(a,b){return this.a.push(a)}},
jl:{"^":"I;i:length=","%":"HTMLSelectElement"},
bs:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
jm:{"^":"bj;E:error=","%":"SensorErrorEvent"},
jn:{"^":"cH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aS]},
$ism:1,
$asm:function(){return[W.aS]},
$ash:function(){return[W.aS]},
$ise:1,
$ase:function(){return[W.aS]},
$asj:function(){return[W.aS]},
"%":"SourceBufferList"},
jo:{"^":"fJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aT]},
$ism:1,
$asm:function(){return[W.aT]},
$ash:function(){return[W.aT]},
$ise:1,
$ase:function(){return[W.aT]},
$asj:function(){return[W.aT]},
"%":"SpeechGrammarList"},
jp:{"^":"bj;E:error=","%":"SpeechRecognitionError"},
ax:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
jr:{"^":"fM;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gI:function(a){var z=H.w([],[P.n])
this.B(a,new W.eJ(z))
return z},
gi:function(a){return a.length},
$asJ:function(){return[P.n,P.n]},
"%":"Storage"},
eJ:{"^":"l:2;a",
$2:function(a,b){return this.a.push(a)}},
jv:{"^":"fR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aW]},
$ism:1,
$asm:function(){return[W.aW]},
$ash:function(){return[W.aW]},
$ise:1,
$ase:function(){return[W.aW]},
$asj:function(){return[W.aW]},
"%":"TextTrackCueList"},
jw:{"^":"cK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aV]},
$ism:1,
$asm:function(){return[W.aV]},
$ash:function(){return[W.aV]},
$ise:1,
$ase:function(){return[W.aV]},
$asj:function(){return[W.aV]},
"%":"TextTrackList"},
jz:{"^":"f;i:length=","%":"TimeRanges"},
jA:{"^":"fW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aX]},
$ism:1,
$asm:function(){return[W.aX]},
$ash:function(){return[W.aX]},
$ise:1,
$ase:function(){return[W.aX]},
$asj:function(){return[W.aX]},
"%":"TouchList"},
jB:{"^":"f;i:length=","%":"TrackDefaultList"},
jE:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
jG:{"^":"f;l:x=,C:z=","%":"VRStageBoundsPoint"},
jH:{"^":"ee;v:height},w:width}","%":"HTMLVideoElement"},
jI:{"^":"z;i:length=","%":"VideoTrackList"},
eS:{"^":"z;",
gbY:function(a){var z,y
z=P.ao
y=new P.aZ(0,$.u,null,[z])
this.bP(a)
this.bR(a,W.hi(new W.eT(new P.fP(y,[z]))))
return y},
bR:function(a,b){return a.requestAnimationFrame(H.az(b,1))},
bP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eT:{"^":"l:1;a",
$1:function(a){this.a.c3(0,a)}},
jJ:{"^":"z;"},
jN:{"^":"h0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aI]},
$ism:1,
$asm:function(){return[W.aI]},
$ash:function(){return[W.aI]},
$ise:1,
$ase:function(){return[W.aI]},
$asj:function(){return[W.aI]},
"%":"CSSRuleList"},
jO:{"^":"dQ;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
D:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isP)return!1
return a.left===b.left&&a.top===b.top&&a.width===z.gw(b)&&a.height===z.gv(b)},
gu:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.cA(W.X(W.X(W.X(W.X(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gv:function(a){return a.height},
gw:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
jP:{"^":"h2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aO]},
$ism:1,
$asm:function(){return[W.aO]},
$ash:function(){return[W.aO]},
$ise:1,
$ase:function(){return[W.aO]},
$asj:function(){return[W.aO]},
"%":"GamepadList"},
jQ:{"^":"h4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$ash:function(){return[W.v]},
$ise:1,
$ase:function(){return[W.v]},
$asj:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jR:{"^":"h6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.ax]},
$ism:1,
$asm:function(){return[W.ax]},
$ash:function(){return[W.ax]},
$ise:1,
$ase:function(){return[W.ax]},
$asj:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
jS:{"^":"h8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aU]},
$ism:1,
$asm:function(){return[W.aU]},
$ash:function(){return[W.aU]},
$ise:1,
$ase:function(){return[W.aU]},
$asj:function(){return[W.aU]},
"%":"StyleSheetList"},
j:{"^":"c;$ti",
gG:function(a){return new W.dW(a,this.gi(a),-1,null,[H.b4(this,a,"j",0)])}},
dW:{"^":"c;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ar(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
f1:{"^":"f+dL;"},
f2:{"^":"f+h;"},
f3:{"^":"f2+j;"},
f4:{"^":"f+h;"},
f5:{"^":"f4+j;"},
f7:{"^":"f+h;"},
f8:{"^":"f7+j;"},
fm:{"^":"f+h;"},
fn:{"^":"fm+j;"},
fs:{"^":"f+J;"},
ft:{"^":"f+J;"},
fu:{"^":"f+h;"},
fv:{"^":"fu+j;"},
fw:{"^":"f+h;"},
fx:{"^":"fw+j;"},
fA:{"^":"f+h;"},
fB:{"^":"fA+j;"},
fH:{"^":"f+J;"},
cG:{"^":"z+h;"},
cH:{"^":"cG+j;"},
fI:{"^":"f+h;"},
fJ:{"^":"fI+j;"},
fM:{"^":"f+J;"},
fQ:{"^":"f+h;"},
fR:{"^":"fQ+j;"},
cJ:{"^":"z+h;"},
cK:{"^":"cJ+j;"},
fV:{"^":"f+h;"},
fW:{"^":"fV+j;"},
h_:{"^":"f+h;"},
h0:{"^":"h_+j;"},
h1:{"^":"f+h;"},
h2:{"^":"h1+j;"},
h3:{"^":"f+h;"},
h4:{"^":"h3+j;"},
h5:{"^":"f+h;"},
h6:{"^":"h5+j;"},
h7:{"^":"f+h;"},
h8:{"^":"h7+j;"}}],["","",,P,{"^":"",
F:function(a){var z,y,x,w,v
if(a==null)return
z=P.V()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a6)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
ho:function(a,b){var z={}
a.B(0,new P.hp(z))
return z},
hp:{"^":"l:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",jj:{"^":"z;E:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},jC:{"^":"z;E:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",fC:{"^":"c;$ti"},P:{"^":"fC;$ti"}}],["","",,P,{"^":"",ig:{"^":"t;l:x=,m:y=","%":"SVGFEBlendElement"},ih:{"^":"t;l:x=,m:y=","%":"SVGFEColorMatrixElement"},ii:{"^":"t;l:x=,m:y=","%":"SVGFEComponentTransferElement"},ij:{"^":"t;l:x=,m:y=","%":"SVGFECompositeElement"},ik:{"^":"t;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},il:{"^":"t;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},im:{"^":"t;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},io:{"^":"t;l:x=,m:y=","%":"SVGFEFloodElement"},ip:{"^":"t;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},iq:{"^":"t;l:x=,m:y=","%":"SVGFEImageElement"},ir:{"^":"t;l:x=,m:y=","%":"SVGFEMergeElement"},is:{"^":"t;l:x=,m:y=","%":"SVGFEMorphologyElement"},it:{"^":"t;l:x=,m:y=","%":"SVGFEOffsetElement"},iu:{"^":"t;l:x=,m:y=,C:z=","%":"SVGFEPointLightElement"},iv:{"^":"t;l:x=,m:y=","%":"SVGFESpecularLightingElement"},iw:{"^":"t;l:x=,m:y=,C:z=","%":"SVGFESpotLightElement"},ix:{"^":"t;l:x=,m:y=","%":"SVGFETileElement"},iy:{"^":"t;l:x=,m:y=","%":"SVGFETurbulenceElement"},iC:{"^":"t;l:x=,m:y=","%":"SVGFilterElement"},iD:{"^":"aa;l:x=,m:y=","%":"SVGForeignObjectElement"},e0:{"^":"aa;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aa:{"^":"t;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},iL:{"^":"aa;l:x=,m:y=","%":"SVGImageElement"},iQ:{"^":"fp;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
$ash:function(){return[P.c2]},
$ise:1,
$ase:function(){return[P.c2]},
$asj:function(){return[P.c2]},
"%":"SVGLengthList"},iU:{"^":"t;l:x=,m:y=","%":"SVGMaskElement"},j8:{"^":"fz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
$ash:function(){return[P.ca]},
$ise:1,
$ase:function(){return[P.ca]},
$asj:function(){return[P.ca]},
"%":"SVGNumberList"},jb:{"^":"t;l:x=,m:y=","%":"SVGPatternElement"},jd:{"^":"f;l:x=,m:y=","%":"SVGPoint"},je:{"^":"f;i:length=","%":"SVGPointList"},jf:{"^":"f;l:x=,m:y=","%":"SVGRect"},jg:{"^":"e0;l:x=,m:y=","%":"SVGRectElement"},js:{"^":"fO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
$ash:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$asj:function(){return[P.n]},
"%":"SVGStringList"},t:{"^":"bX;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},jt:{"^":"aa;l:x=,m:y=","%":"SVGSVGElement"},eL:{"^":"aa;","%":"SVGTextPathElement;SVGTextContentElement"},ju:{"^":"eL;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},jD:{"^":"fY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
$ash:function(){return[P.cj]},
$ise:1,
$ase:function(){return[P.cj]},
$asj:function(){return[P.cj]},
"%":"SVGTransformList"},jF:{"^":"aa;l:x=,m:y=","%":"SVGUseElement"},fo:{"^":"f+h;"},fp:{"^":"fo+j;"},fy:{"^":"f+h;"},fz:{"^":"fy+j;"},fN:{"^":"f+h;"},fO:{"^":"fN+j;"},fX:{"^":"f+h;"},fY:{"^":"fX+j;"}}],["","",,P,{"^":"",hR:{"^":"f;i:length=","%":"AudioBuffer"},hS:{"^":"f_;",
h:function(a,b){return P.F(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.F(y.value[1]))}},
gI:function(a){var z=H.w([],[P.n])
this.B(a,new P.dC(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.n,null]},
"%":"AudioParamMap"},dC:{"^":"l:2;a",
$2:function(a,b){return this.a.push(a)}},hT:{"^":"z;i:length=","%":"AudioTrackList"},dD:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ja:{"^":"dD;i:length=","%":"OfflineAudioContext"},f_:{"^":"f+J;"}}],["","",,P,{"^":"",jh:{"^":"f;",
aJ:function(a,b){return a.activeTexture(b)},
aL:function(a,b,c){return a.attachShader(b,c)},
aM:function(a,b,c){return a.bindBuffer(b,c)},
aO:function(a,b,c){return a.bindTexture(b,c)},
aP:function(a,b){return a.blendEquation(b)},
aQ:function(a,b,c){return a.blendFunc(b,c)},
aR:function(a,b,c,d){return a.bufferData(b,c,d)},
aS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
aT:function(a,b){return a.compileShader(b)},
aU:function(a){return a.createBuffer()},
aV:function(a){return a.createProgram()},
aW:function(a,b){return a.createShader(b)},
aX:function(a,b){return a.depthMask(b)},
aY:function(a,b){return a.disable(b)},
aZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
b_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b0:function(a,b){return a.enable(b)},
b1:function(a,b){return a.enableVertexAttribArray(b)},
a1:function(a){return P.F(a.getContextAttributes())},
af:function(a,b){return a.getProgramInfoLog(b)},
ag:function(a,b,c){return a.getProgramParameter(b,c)},
ah:function(a,b){return a.getShaderInfoLog(b)},
ai:function(a,b,c){return a.getShaderParameter(b,c)},
aj:function(a,b,c){return a.getUniformLocation(b,c)},
b5:function(a,b){return a.linkProgram(b)},
ak:function(a,b,c){return a.shaderSource(b,c)},
an:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b9:function(a,b,c){return a.uniform1f(b,c)},
ba:function(a,b,c){return a.uniform1i(b,c)},
bb:function(a,b,c){return a.uniform2fv(b,c)},
bc:function(a,b,c){return a.uniform3fv(b,c)},
bd:function(a,b,c){return a.uniform4fv(b,c)},
be:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bg:function(a,b){return a.useProgram(b)},
bh:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},ji:{"^":"f;",
bZ:function(a,b){return a.beginTransformFeedback(b)},
c1:function(a,b){return a.bindVertexArray(b)},
c5:function(a){return a.createVertexArray()},
c6:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
c7:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
c8:function(a){return a.endTransformFeedback()},
cp:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
cq:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aJ:function(a,b){return a.activeTexture(b)},
aL:function(a,b,c){return a.attachShader(b,c)},
aM:function(a,b,c){return a.bindBuffer(b,c)},
aO:function(a,b,c){return a.bindTexture(b,c)},
aP:function(a,b){return a.blendEquation(b)},
aQ:function(a,b,c){return a.blendFunc(b,c)},
aR:function(a,b,c,d){return a.bufferData(b,c,d)},
aS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
aT:function(a,b){return a.compileShader(b)},
aU:function(a){return a.createBuffer()},
aV:function(a){return a.createProgram()},
aW:function(a,b){return a.createShader(b)},
aX:function(a,b){return a.depthMask(b)},
aY:function(a,b){return a.disable(b)},
aZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
b_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b0:function(a,b){return a.enable(b)},
b1:function(a,b){return a.enableVertexAttribArray(b)},
a1:function(a){return P.F(a.getContextAttributes())},
af:function(a,b){return a.getProgramInfoLog(b)},
ag:function(a,b,c){return a.getProgramParameter(b,c)},
ah:function(a,b){return a.getShaderInfoLog(b)},
ai:function(a,b,c){return a.getShaderParameter(b,c)},
aj:function(a,b,c){return a.getUniformLocation(b,c)},
b5:function(a,b){return a.linkProgram(b)},
ak:function(a,b,c){return a.shaderSource(b,c)},
an:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b9:function(a,b,c){return a.uniform1f(b,c)},
ba:function(a,b,c){return a.uniform1i(b,c)},
bb:function(a,b,c){return a.uniform2fv(b,c)},
bc:function(a,b,c){return a.uniform3fv(b,c)},
bd:function(a,b,c){return a.uniform4fv(b,c)},
be:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bg:function(a,b){return a.useProgram(b)},
bh:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",jq:{"^":"fL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return P.F(a.item(b))},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
n:function(a,b){return this.h(a,b)},
$ash:function(){return[P.bo]},
$ise:1,
$ase:function(){return[P.bo]},
$asj:function(){return[P.bo]},
"%":"SQLResultSetRowList"},fK:{"^":"f+h;"},fL:{"^":"fK+j;"}}],["","",,G,{"^":"",
eU:function(a){var z,y,x,w
z=H.w(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.e.T(z,"\n")},
cy:function(a,b,c){var z,y,x,w
z=J.i(a)
y=z.aW(a,b)
z.ak(a,y,c)
z.aT(a,y)
x=z.ai(a,y,35713)
if(x!=null&&J.H(x,!1)){w=z.ah(a,y)
P.ap("E:Compilation failed:")
P.ap("E:"+G.eU(c))
P.ap("E:Failure:")
P.ap(C.l.t("E:",w))
throw H.a(w)}return y},
bZ:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bc(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bd(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.bL(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
dY:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bc(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bd(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
dZ:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bc(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bd(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.bL(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.dl(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
dX:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.ar(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.ar(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.ar(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.ar(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.U(z,z.r,null,null,[H.G(z,0)]),y.c=z.e,x=b.x,w=[[P.e,P.A]],v=[P.am],u=[T.bu],t=[T.E],s=[T.D];y.q();){r=y.d
if(!x.a_(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.cT>0)H.b8("I: "+q)
continue}p=z.h(0,r)
switch($.$get$K().h(0,r).a){case"vec2":b.P(r,G.dY(H.aC(p,"$ise",s,"$ase"),null),2)
break
case"vec3":b.P(r,G.bZ(H.aC(p,"$ise",t,"$ase"),null),3)
break
case"vec4":b.P(r,G.dZ(H.aC(p,"$ise",u,"$ase"),null),4)
break
case"float":b.P(r,new Float32Array(H.b_(H.aC(p,"$ise",v,"$ase"))),1)
break
case"uvec4":b.P(r,G.dX(H.aC(p,"$ise",w,"$ase"),null),4)
break}}},
bp:{"^":"c;"},
eO:{"^":"bp;d,a,b,c",
bE:function(){return this.d},
k:function(a){var z,y,x,w
z=H.w(["{"+H.b(new H.cv(H.hv(this),null))+"}["+this.a+"]"],[P.n])
for(y=this.d,x=new H.U(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.e.T(z,"\n")}},
dF:{"^":"c;a,b",
b2:function(a,b,c){J.di(this.a,b)
if(c>0)J.dy(this.a,b,c)},
bi:function(a,b,c,d,e,f,g,h){J.b9(this.a,34962,b)
J.dz(this.a,c,d,e,!1,g,h)}},
dV:{"^":"c;a,b,c,d"},
e_:{"^":"c;a,b,c,d,e",
ar:function(a){switch($.$get$K().h(0,a).a){case"vec2":this.e.j(0,a,H.w([],[T.D]))
break
case"vec3":this.e.j(0,a,H.w([],[T.E]))
break
case"vec4":this.e.j(0,a,H.w([],[T.bu]))
break
case"float":this.e.j(0,a,H.w([],[P.am]))
break
case"uvec4":this.e.j(0,a,H.w([],[[P.e,P.A]]))
break}},
bv:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].Z(0))},
bw:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].Z(0))},
by:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.dV(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].Z(0))},
bB:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.w(y,[P.A])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.gcu(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.gcv(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.gcw(t)
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
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.U(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$K().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.e.T(z," ")}},
ef:{"^":"bp;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aq:function(a,b,c){var z,y
C.l.aw(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.b9(z.a,34962,y)
J.bJ(z.a,34962,b,35048)},
bC:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
P:function(a,b,c){var z,y,x,w,v
z=J.bK(a,0)===105
if(z&&this.z===0)this.z=C.a.bt(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.ba(x.a))
this.aq(a,b,c)
w=$.$get$K().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.aE(x.a,this.e)
x.b2(0,v,z?1:0)
x.bi(0,y.h(0,a),v,w.as(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.U(z,z.r,null,null,[H.G(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.e.T(y,"  ")}},
ew:{"^":"bp;d,e,f,r,x,y,z,Q,ch,a,b,c",
bF:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a6)(z),++u){t=z[u]
x.j(0,t,J.bM(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a6)(z),++u){t=z[u]
x.j(0,t,J.bM(w.a,v,t))}},
bH:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.U(y,y.r,null,null,[H.G(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.a_(0,v))x.push(v)}for(z=this.x,y=new P.cB(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.c4(0,v))x.push(v)}return x},
bI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.U(b,b.r,null,null,[H.G(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.bK(t,0)){case 117:if(w.a_(0,t)){s=b.h(0,t)
if(v.a_(0,t))H.b8("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$K().h(0,t)
if(r==null)H.L("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.be(x.a,q,s)
break
case"float":if(r.c===0)J.du(x.a,q,s)
break
case"mat4":if(r.c===0){p=C.n.gao(H.S(s,"$isiW"))
J.dw(x.a,q,!1,p)}break
case"mat3":if(r.c===0){p=C.n.gao(H.S(s,"$isiV"))
J.dv(x.a,q,!1,p)}break
case"vec4":if(r.c===0){p=C.n.gao(H.S(s,"$isbu"))
J.bP(x.a,q,p)}else J.bP(x.a,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.bO(o,q,H.S(s,"$isE").a)
else J.bO(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.bN(o,q,H.S(s,"$isD").a)
else J.bN(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.R(p)
J.bG(x.a,33984+p)
p=H.S(s,"$iseM").bD()
J.bI(x.a,3553,p)
p=this.ch
J.be(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.t()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.R(p)
J.bG(x.a,33984+p)
p=H.S(s,"$iseM").bD()
J.bI(x.a,34067,p)
p=this.ch
J.be(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.t()
this.ch=p+1
break
default:H.b8("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.H(s,!0)
o=x.a
if(p)J.aF(o,2929)
else J.dc(o,2929)
break
case"cStencilFunc":H.S(s,"$isjy")
s.gcb()
J.aF(x.a,2960)
p=s.gcb()
o=s.gcB(s)
n=s.gcA(s)
J.ds(x.a,p,o,n)
break
case"cDepthWrite":J.db(x.a,s)
break
case"cBlendEquation":H.S(s,"$isjx")
s.gc9()
J.aF(x.a,3042)
p=s.gcr()
o=s.gcz()
J.d6(x.a,p,o)
o=s.gc9()
J.d5(x.a,o)
break}++u
break}}m=P.dR(0,0,0,Date.now()-new P.bV(z,!1).a,0,0)
""+u
m.k(0)},
bA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.dx(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aE()}for(x=0;x<1;++x){w=b[x]
this.bI(w.a,w.bE())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.ay()}for(v=a.cy,u=new H.U(v,v.r,null,null,[H.G(v,0)]),u.c=v.e;u.q();)y.aK(0,u.d)
t=this.bH()
if(t.length!==0)P.ap("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.aE(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.bC()
u=a.Q
r=a.z
if(s)J.d4(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.dg(q,y,v,u,0,r)
else J.df(q,y,v,u,0)}else{u=z.a
if(r>1)J.de(u,y,0,v,r)
else J.dd(u,y,0,v)}if(s)J.dj(z.a)},
bz:function(a,b){return this.bA(a,b,null)},
p:{
ex:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.c4(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.d9(b.a)
u=G.cy(b.a,35633,y)
J.bH(b.a,v,u)
t=G.cy(b.a,35632,x)
J.bH(b.a,v,t)
if(w.length>0)J.dt(b.a,v,w,35980)
J.dr(b.a,v)
if(J.dq(b.a,v,35714)!==!0)H.L(J.dp(b.a,v))
z=new G.ew(b,c,d,v,P.ea(c.c,null),P.V(),P.V(),z,null,a,!1,!0)
z.bF(a,b,c,d)
return z}}},
p:{"^":"c;a,b,c",
as:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
eD:{"^":"c;a,b,c,d,e,f,r,x",
bu:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.e.am(z)},
bx:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.e.am(z)},
at:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.a6)(z),++u){t=z[u]
s=$.$get$K().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.d(z,u)
q=z[u]
s=$.$get$K().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a6)(z),++u){q=z[u]
s=$.$get$K().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a6)(z),++u){q=z[u]
s=$.$get$K().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.e.bX(w,b)
if(a)w.push("}")
return C.e.T(w,"\n")},
p:{
cc:function(a){return new G.eD(a,null,[],[],[],[],0,P.V())}}}}],["","",,A,{"^":"",
cY:function(a){var z,y
z=C.F.ca(a,0,new A.hx())
if(typeof z!=="number")return H.R(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hx:{"^":"l:10;",
$2:function(a,b){var z,y
z=J.a7(a,J.a_(b))
if(typeof z!=="number")return H.R(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",D:{"^":"c;a",
M:function(a,b){var z=this.a
z[0]=a
z[1]=b},
H:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.D){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gu:function(a){return A.cY(this.a)},
t:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.D(z)
y.H(this)
x=b.gcs()
z[0]=C.h.t(z[0],x.h(0,0))
z[1]=C.h.t(z[1],x.h(0,1))
return y},
a0:function(a,b){var z=new T.D(new Float32Array(2))
z.H(this)
z.bm(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
bm:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
Z:function(a){var z=new T.D(new Float32Array(2))
z.H(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},E:{"^":"c;a",
N:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
H:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.E){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gu:function(a){return A.cY(this.a)},
t:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.E(z)
y.H(this)
x=b.gct()
z[0]=C.h.t(z[0],x.h(0,0))
z[1]=C.h.t(z[1],x.h(0,1))
z[2]=C.h.t(z[2],x.h(0,2))
return y},
a0:function(a,b){return this.bn(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
bn:function(a){var z,y
z=new Float32Array(3)
y=new T.E(z)
y.H(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
Z:function(a){var z=new T.E(new Float32Array(3))
z.H(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]}},bu:{"^":"c;"}}],["","",,L,{"^":"",
d_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=document.querySelector("#webgl-canvas")
y=z.clientWidth
x=z.clientHeight
w=J.i(z)
w.sw(z,y)
w.sv(z,x)
v=new G.dF(null,z)
w=J.dm(z,"webgl2",P.c3(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=w
if(w==null)H.L(P.bY('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.dn(w))
if($.cT>0)P.ap("I: "+u)
J.d7(w,0,0,0,1)
J.aF(w,2929)
t=G.ex("gyroid",v,$.$get$cX(),$.$get$cW())
w=new T.E(new Float32Array(3))
w.N(-1,-1,0)
u=new T.E(new Float32Array(3))
u.N(1,-1,0)
s=new T.E(new Float32Array(3))
s.N(1,1,0)
r=new T.E(new Float32Array(3))
r.N(-1,1,0)
q=new T.D(new Float32Array(2))
q.M(0,0)
p=new T.D(new Float32Array(2))
p.M(1,0)
o=new T.D(new Float32Array(2))
o.M(1,1)
n=new T.D(new Float32Array(2))
n.M(0,1)
m=new T.E(new Float32Array(3))
m.N(0,0,1)
l=[]
k=new G.e_(!1,[],[],l,P.V())
k.ar("aTexUV")
k.by([w,u,s,r])
k.bv("aTexUV",[q,p,o,n])
k.ar("aNormal")
k.bw("aNormal",[m,m,m,m])
w=t.d
u=t.e.x
s=P.V()
r=J.da(w.a)
j=new G.ef(w,r,4,s,u,null,0,-1,null,null,P.V(),"meshdata:quad",!1,!0)
l=G.bZ(l,null)
s.j(0,"aPosition",J.ba(w.a))
j.ch=l
j.aq("aPosition",l,3)
i=$.$get$K().h(0,"aPosition")
if(i==null)H.L("Unknown canonical aPosition")
h=u.h(0,"aPosition")
J.aE(w.a,r)
w.b2(0,h,0)
w.bi(0,s.h(0,"aPosition"),h,i.as(),5126,!1,0,0)
u=k.bB()
j.y=J.ba(w.a)
s=j.ch.length
if(s<768){j.cx=new Uint8Array(H.b_(u))
j.Q=5121}else if(s<196608){j.cx=new Uint16Array(H.b_(u))
j.Q=5123}else{j.cx=new Uint32Array(H.b_(u))
j.Q=5125}J.aE(w.a,r)
u=j.y
s=j.cx
J.b9(w.a,34963,u)
J.bJ(w.a,34963,s,35048)
G.fk(k,j)
new L.hH(new G.eO(P.V(),"plain",!1,!0),y,x,t,j).$1(0)},
hH:{"^":"l:11;a,b,c,d,e",
$1:function(a){var z,y,x,w,v
z=this.a
y=z.d
y.j(0,"uTime",J.d3(a,1000))
x=this.b
if(typeof x!=="number")return H.R(x)
w=this.c
if(typeof w!=="number")return H.R(w)
v=new T.D(new Float32Array(2))
v.M(x,w)
y.j(0,"uCanvasSize",v)
this.d.bz(this.e,[z])
C.W.gbY(window).b7(this)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c_.prototype
return J.e6.prototype}if(typeof a=="string")return J.ae.prototype
if(a==null)return J.c0.prototype
if(typeof a=="boolean")return J.e5.prototype
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.c)return a
return J.aA(a)}
J.hs=function(a){if(typeof a=="number")return J.ad.prototype
if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.c)return a
return J.aA(a)}
J.Z=function(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.c)return a
return J.aA(a)}
J.bC=function(a){if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.c)return a
return J.aA(a)}
J.b3=function(a){if(typeof a=="number")return J.ad.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ay.prototype
return a}
J.ht=function(a){if(typeof a=="number")return J.ad.prototype
if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ay.prototype
return a}
J.hu=function(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ay.prototype
return a}
J.i=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.c)return a
return J.aA(a)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hs(a).t(a,b)}
J.d3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.b3(a).a0(a,b)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).D(a,b)}
J.C=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.b3(a).U(a,b)}
J.aD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.b3(a).L(a,b)}
J.ar=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hF(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).h(a,b)}
J.bG=function(a,b){return J.i(a).aJ(a,b)}
J.bH=function(a,b,c){return J.i(a).aL(a,b,c)}
J.d4=function(a,b){return J.i(a).bZ(a,b)}
J.b9=function(a,b,c){return J.i(a).aM(a,b,c)}
J.bI=function(a,b,c){return J.i(a).aO(a,b,c)}
J.aE=function(a,b){return J.i(a).c1(a,b)}
J.d5=function(a,b){return J.i(a).aP(a,b)}
J.d6=function(a,b,c){return J.i(a).aQ(a,b,c)}
J.bJ=function(a,b,c,d){return J.i(a).aR(a,b,c,d)}
J.d7=function(a,b,c,d,e){return J.i(a).aS(a,b,c,d,e)}
J.bK=function(a,b){return J.hu(a).c2(a,b)}
J.d8=function(a,b){return J.ht(a).K(a,b)}
J.ba=function(a){return J.i(a).aU(a)}
J.d9=function(a){return J.i(a).aV(a)}
J.da=function(a){return J.i(a).c5(a)}
J.db=function(a,b){return J.i(a).aX(a,b)}
J.dc=function(a,b){return J.i(a).aY(a,b)}
J.dd=function(a,b,c,d){return J.i(a).aZ(a,b,c,d)}
J.de=function(a,b,c,d,e){return J.i(a).c6(a,b,c,d,e)}
J.df=function(a,b,c,d,e){return J.i(a).b_(a,b,c,d,e)}
J.dg=function(a,b,c,d,e,f){return J.i(a).c7(a,b,c,d,e,f)}
J.dh=function(a,b){return J.bC(a).n(a,b)}
J.aF=function(a,b){return J.i(a).b0(a,b)}
J.di=function(a,b){return J.i(a).b1(a,b)}
J.dj=function(a){return J.i(a).c8(a)}
J.dk=function(a,b){return J.bC(a).B(a,b)}
J.as=function(a){return J.i(a).gE(a)}
J.a_=function(a){return J.q(a).gu(a)}
J.bb=function(a){return J.bC(a).gG(a)}
J.T=function(a){return J.Z(a).gi(a)}
J.dl=function(a){return J.i(a).gbj(a)}
J.bc=function(a){return J.i(a).gl(a)}
J.bd=function(a){return J.i(a).gm(a)}
J.bL=function(a){return J.i(a).gC(a)}
J.dm=function(a,b,c){return J.i(a).bl(a,b,c)}
J.dn=function(a){return J.i(a).a1(a)}
J.dp=function(a,b){return J.i(a).af(a,b)}
J.dq=function(a,b,c){return J.i(a).ag(a,b,c)}
J.bM=function(a,b,c){return J.i(a).aj(a,b,c)}
J.dr=function(a,b){return J.i(a).b5(a,b)}
J.ds=function(a,b,c,d){return J.i(a).an(a,b,c,d)}
J.at=function(a){return J.q(a).k(a)}
J.dt=function(a,b,c,d){return J.i(a).cp(a,b,c,d)}
J.du=function(a,b,c){return J.i(a).b9(a,b,c)}
J.be=function(a,b,c){return J.i(a).ba(a,b,c)}
J.bN=function(a,b,c){return J.i(a).bb(a,b,c)}
J.bO=function(a,b,c){return J.i(a).bc(a,b,c)}
J.bP=function(a,b,c){return J.i(a).bd(a,b,c)}
J.dv=function(a,b,c,d){return J.i(a).be(a,b,c,d)}
J.dw=function(a,b,c,d){return J.i(a).bf(a,b,c,d)}
J.dx=function(a,b){return J.i(a).bg(a,b)}
J.dy=function(a,b,c){return J.i(a).cq(a,b,c)}
J.dz=function(a,b,c,d,e,f,g){return J.i(a).bh(a,b,c,d,e,f,g)}
var $=I.p
C.x=J.f.prototype
C.e=J.ab.prototype
C.a=J.c_.prototype
C.n=J.c0.prototype
C.h=J.ad.prototype
C.l=J.ae.prototype
C.E=J.af.prototype
C.F=H.ei.prototype
C.r=J.el.prototype
C.o=J.ay.prototype
C.W=W.eS.prototype
C.d=new P.fD()
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.A=function(getTagFallback) {
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
C.B=function() {
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
C.C=function(hooks) {
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
C.D=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=new G.p("vec3","vertex btangents",0)
C.b=new G.p("vec3","",0)
C.H=new G.p("vec4","delta from light",0)
C.m=new G.p("","",0)
C.t=new G.p("vec3","vertex coordinates",0)
C.I=new G.p("vec3","vertex binormals",0)
C.u=new G.p("vec4","for wireframe",0)
C.J=new G.p("vec4","per vertex color",0)
C.K=new G.p("float","for normal maps",0)
C.i=new G.p("mat4","",0)
C.M=new G.p("mat4","",4)
C.L=new G.p("mat4","",128)
C.c=new G.p("float","",0)
C.N=new G.p("float","",4)
C.O=new G.p("float","depth for shadowmaps",0)
C.f=new G.p("sampler2D","",0)
C.P=new G.p("float","for bump maps",0)
C.Q=new G.p("vec2","texture uvs",0)
C.R=new G.p("float","time since program start in sec",0)
C.j=new G.p("vec2","",0)
C.S=new G.p("samplerCube","",0)
C.k=new G.p("vec4","",0)
C.T=new G.p("vec3","vertex normals",0)
C.U=new G.p("sampler2DShadow","",0)
C.v=new G.p("vec3","per vertex color",0)
C.w=new G.p("mat3","",0)
C.V=new G.p("vec3","vertex tangents",0)
$.M=0
$.a9=null
$.bQ=null
$.cV=null
$.cO=null
$.d1=null
$.b2=null
$.b5=null
$.bD=null
$.a1=null
$.aj=null
$.ak=null
$.bx=!1
$.u=C.d
$.cT=0
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
I.$lazy(y,x,w)}})(["bU","$get$bU",function(){return H.cU("_$dart_dartClosure")},"bl","$get$bl",function(){return H.cU("_$dart_js")},"ck","$get$ck",function(){return H.N(H.aY({
toString:function(){return"$receiver$"}}))},"cl","$get$cl",function(){return H.N(H.aY({$method$:null,
toString:function(){return"$receiver$"}}))},"cm","$get$cm",function(){return H.N(H.aY(null))},"cn","$get$cn",function(){return H.N(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cr","$get$cr",function(){return H.N(H.aY(void 0))},"cs","$get$cs",function(){return H.N(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cp","$get$cp",function(){return H.N(H.cq(null))},"co","$get$co",function(){return H.N(function(){try{null.$method$}catch(z){return z.message}}())},"cu","$get$cu",function(){return H.N(H.cq(void 0))},"ct","$get$ct",function(){return H.N(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bv","$get$bv",function(){return P.eV()},"al","$get$al",function(){return[]},"K","$get$K",function(){return P.c3(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.b,"tSpeed",C.b,"tForce",C.b,"aColor",C.v,"aColorAlpha",C.J,"aPosition",C.t,"aTexUV",C.Q,"aNormal",C.T,"aBinormal",C.I,"aCenter",C.u,"aPointSize",C.c,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.V,"aBitangent",C.G,"iaRotation",C.k,"iaTranslation",C.b,"iaScale",C.b,"vColor",C.v,"vTexUV",C.j,"vLightWeighting",C.b,"vNormal",C.b,"vPosition",C.t,"vPositionFromLight",C.H,"vCenter",C.u,"vDepth",C.O,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.w,"uConvolutionMatrix",C.w,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.U,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.S,"uAnimationTable",C.f,"uTime",C.R,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.b,"uAmbientDiffuse",C.b,"uColorEmissive",C.b,"uColorSpecular",C.b,"uColorDiffuse",C.b,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.b,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.L,"uLightDescs",C.M,"uLightCount",C.c,"uLightTypes",C.N,"uBumpScale",C.P,"uNormalScale",C.K])},"cX","$get$cX",function(){var z=G.cc("SphericalGyroid")
z.bu(["aPosition"])
z.b=z.at(!0,["gl_Position = vec4(aPosition, 1.0);"],null)
return z},"cW","$get$cW",function(){var z=G.cc("SphericalGyroidF")
z.bx(["uCanvasSize","uTime"])
z.b=z.at(!1,["#define MaxSteps 60\n#define MinimumDistance 0.01\n#define normalDistance     0.0002\n#define PI 3.141592\n#define FieldOfView 1.0\n#define FudgeFactor 0.8\n\n#define Ambient 0.35\n#define Diffuse 0.4\n#define Specular 0.08\n#define LightDir vec3(1.0,1.0,-0.65048)\n#define LightColor vec3(1.0,0.666667,0.6)\n#define LightDir2 vec3(1.0,-0.62886,1.0)\n#define LightColor2 vec3(0.9,0.8,1.0)\n\n#define time  (uTime + 38.0)\n\nvec2 rotate(vec2 v, float a) {\n  return vec2(cos(a)*v.x + sin(a)*v.y, -sin(a)*v.x + cos(a)*v.y);\n}\n\n// Two light source + env light\nvec3 getLight(in vec3 color, in vec3 normal, in vec3 dir, int mat) {\n  vec3 lightDir = normalize(LightDir);\n  float specular = pow(max(0.0,dot(lightDir,-reflect(lightDir, normal))),20.0); // Phong\n  float diffuse = max(0.0,dot(-normal, lightDir)); // Lambertian\n  \n  vec3 lightDir2 = normalize(LightDir2);\n  float specular2 = pow(max(0.0,dot(lightDir2,-reflect(lightDir2, normal))),20.0); // Phong\n  float diffuse2 = max(0.0,dot(-normal, lightDir2)); // Lambertian\n  \n  float a = pow(abs(dot(normal,dir)),2.0);\n  vec3 l = vec3(0.0);\n    \n  //if (mat < 2) { \n    //l+=(Specular*specular)*LightColor+(diffuse*Diffuse)*(LightColor*color) +\n    //(Specular*specular2)*LightColor2+(diffuse2*Diffuse)*(LightColor2*color);\n    //l+=textureCube(iChannel0, reflect(dir, normal)).xyz*Specular;\n  //} else {\n    l+= \n      //(diffuse*0.8)*(LightColor*color) \n      +(diffuse2*0.7)*(LightColor2*color);\n    \n  //}\n  return l*a*1.7;\n}\n\n\n\n// vec3 offset = vec3(1.0+0.2*(cos(time/5.7)),0.3+0.1*(cos(time/1.7)),1.).xzy;\n\n\nfloat DE2(vec3 z, out int mat, float scale) {\n float sphere = abs(length(z))-15.0;\n z*= scale;\n float base = (cos(z.x) * sin(z.y) + cos(z.y) * sin(z.z) + cos(z.z) * sin(z.x));\n float inverse = -base + (1.0+cos(time/4.0))*4.0;\n if (base>inverse) {\n    mat = (sphere>-0.1) ? 0 : 2;\n } else {\n   mat = (sphere>-0.1) ? 1 : 3;\n }\n return max(min(base,inverse),sphere);\n}\n\nfloat  DE(vec3 z, float scale) {\n  int i = 0;\n  return DE2(z, i, scale);\n}\n\n\n\n// Finite difference normal\nvec3 getNormal(in vec3 pos, float scale) {\n  vec3 e = vec3(0.0,normalDistance,0.0);\n\n  return normalize(vec3(\n      DE(pos+e.yxx, scale)-DE(pos-e.yxx, scale),\n      DE(pos+e.xyx, scale)-DE(pos-e.xyx, scale),\n      DE(pos+e.xxy, scale)-DE(pos-e.xxy, scale)));\n}\n\n// Solid color with a little bit of normal :-)\nvec3 getColor(vec3 normal, vec3 pos, int material) {\n  if (material == 0) {\n    return vec3(0.0,0.1,0.0); \n  } else if (material == 1) {\n    return vec3(1.0,0.0,0.0); \n  } else if (material == 2) {\n    return vec3(1.0)*length(pos)/10.0;\n  } \n  return vec3(1.0)*length(pos)/10.0;\n  \n}\n\n// Filmic tone mapping:\n// http://filmicgames.com/archives/75\nvec3 toneMap(in vec3 c) {\n  c = c*c; // <- So much for proper gamma correction :-)\n  vec3 x = max(vec3(0.),c-vec3(0.004));\n  c = (x*(6.2*x+.5))/(x*(6.2*x+1.7)+0.06);\n  return c;\n}\n\n// Pseudo-random number\n// From: lumina.sourceforge.net/Tutorials/Noise.html\nfloat rand(vec2 co){\n  return fract(cos(dot(co,vec2(4.898,7.23))) * 23421.631);\n}\n\nvec4 rayMarch(in vec3 from, in vec3 dir, float scale) {\n  // Add some noise to prevent banding\n  float totalDistance = rand(gl_FragCoord.xy+vec2(time));\n  \n  float distance;\n  int steps = 0;\n  vec3 pos;\n  for (int i=0; i < MaxSteps; i++) {\n    pos = from + totalDistance * dir;\n    distance = DE(pos, scale)*(0.7*scale);\n    totalDistance += distance;\n    if (distance < MinimumDistance) break;\n    steps = i;\n  }\n  if (steps == MaxSteps-1) {\n    return vec4(0.0);\n  }\n  \n  // 'AO' is based on number of steps.\n  // Try to smooth the count, to combat banding.\n  float smoothStep = float(steps) + distance/MinimumDistance;\n  float ao = 1.0-smoothStep/float(MaxSteps);\n\n  // Since our distance field is not signed,\n    // backstep when calc'ing normal\n  vec3 normal = getNormal(pos-dir*normalDistance*3.0, scale);\n\n  int material = 0;\n  DE2(pos, material, scale);\n  \n  vec3 color = getColor(normal, pos, material); \n  vec3 light = getLight(color, normal, dir, material);\n  return vec4(toneMap((color*Ambient+light)*ao),1.0);\n}\n\nfloat curve(float x) {\n  return cos(x);\n}\n\nvoid main(void)\n{ \n  float angle = time/5.0; \n  float scale = 0.8+(0.1*cos(time/3.0));\n\n  // Camera position (eye), and camera target\n  vec3 camPos =  19.0*vec3(1.0,0.5*curve(time*0.2),0.5*curve(7.0+0.3*time));\n  vec3 target = vec3(0.0);\n  vec3 camUp  = vec3(0.0,0.0,1.0);\n\n  // Calculate orthonormal camera reference system\n  vec3 camDir   = normalize(target-camPos); // direction for center ray\n  camUp = normalize(camUp-dot(camDir,camUp)*camDir); // orthogonalize\n  vec3 camRight = normalize(cross(camDir,camUp));\n  \n  vec2 coord =-1.0+2.0*gl_FragCoord.xy/uCanvasSize.xy;\n  coord.x *= uCanvasSize.x/uCanvasSize.y;\n   \n  // Get direction for this pixel\n  vec3 rayDir = normalize(camDir + (coord.x*camRight + coord.y*camUp)*FieldOfView);\n  \n  oFragColor = rayMarch(camPos, rayDir, scale);\n}\n\n"],null)
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1},{func:1,args:[,]},{func:1,args:[,,]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.A]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,],opt:[,]},{func:1,args:[P.A,P.c]},{func:1,v:true,args:[P.ao]},{func:1,ret:P.A,args:[,,]}]
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
if(x==y)H.hL(d||a)
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
Isolate.a3=a.a3
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
if(typeof dartMainRunner==="function")dartMainRunner(L.d_,[])
else L.d_([])})})()
//# sourceMappingURL=gyroid.dart.js.map
