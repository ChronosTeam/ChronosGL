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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bF"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bF"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bF(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.a7=function(){}
var dart=[["","",,H,{"^":"",jc:{"^":"e;a"}}],["","",,J,{"^":"",
w:function(a){return void 0},
bK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bI==null){H.i_()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cO("Return interceptor for "+H.a(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bo()]
if(v!=null)return v
v=H.i4(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.$get$bo(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
h:{"^":"e;",
J:function(a,b){return a===b},
gv:function(a){return H.am(a)},
k:["bQ",function(a){return"Instance of '"+H.an(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AbortPaymentEvent|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationEvent|AnimationPlaybackEvent|AnimationTimeline|AnimationWorkletGlobalScope|ApplicationCacheErrorEvent|ArrayBuffer|AudioListener|AudioParam|AudioProcessingEvent|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BackgroundFetchedEvent|BarProp|BarcodeDetector|BeforeInstallPromptEvent|BeforeUnloadEvent|Blob|BlobEvent|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanMakePaymentEvent|CanvasGradient|CanvasPattern|Client|Clients|ClipboardEvent|CloseEvent|CompositionEvent|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|CustomEvent|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceMotionEvent|DeviceOrientationEvent|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|DragEvent|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|ErrorEvent|Event|ExtendableEvent|ExtendableMessageEvent|External|FaceDetector|FederatedCredential|FetchEvent|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FocusEvent|FontFace|FontFaceSetLoadEvent|FontFaceSource|ForeignFetchEvent|FormData|Gamepad|GamepadButton|GamepadEvent|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|HashChangeEvent|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IDBVersionChangeEvent|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|InputEvent|InstallEvent|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyboardEvent|KeyframeEffect|KeyframeEffectReadOnly|MIDIConnectionEvent|MIDIMessageEvent|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaEncryptedEvent|MediaError|MediaKeyMessageEvent|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaQueryListEvent|MediaSession|MediaSettingsRange|MediaStreamEvent|MediaStreamTrackEvent|MemoryInfo|MessageChannel|MessageEvent|Metadata|MimeType|Mojo|MojoHandle|MojoInterfaceRequestEvent|MojoWatcher|MouseEvent|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationEvent|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|NotificationEvent|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OfflineAudioCompletionEvent|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PageTransitionEvent|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentRequestEvent|PaymentRequestUpdateEvent|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|PointerEvent|PopStateEvent|Position|PositionError|Presentation|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PresentationReceiver|ProgressEvent|PromiseRejectionEvent|PublicKeyCredential|PushEvent|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidate|RTCLegacyStatsReport|RTCPeerConnectionIceEvent|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RTCTrackEvent|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|ResourceProgressEvent|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|SecurityPolicyViolationEvent|Selection|SensorErrorEvent|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|SpeechSynthesisVoice|StaticRange|StorageEvent|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncEvent|SyncManager|TaskAttributionTiming|TextDetector|TextEvent|TextMetrics|Touch|TouchEvent|TrackDefault|TrackEvent|TransitionEvent|TrustedHTML|TrustedScriptURL|TrustedURL|UIEvent|URLSearchParams|USBAlternateInterface|USBConfiguration|USBConnectionEvent|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDeviceEvent|VRDisplayCapabilities|VRDisplayEvent|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRSessionEvent|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLContextEvent|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WebKitTransitionEvent|WheelEvent|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
eI:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isbE:1},
eK:{"^":"h;",
J:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0}},
bp:{"^":"h;",
gv:function(a){return 0},
k:["bS",function(a){return String(a)}]},
f3:{"^":"bp;"},
aC:{"^":"bp;"},
aj:{"^":"bp;",
k:function(a){var z=a[$.$get$c6()]
return z==null?this.bS(a):J.aw(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ag:{"^":"h;$ti",
I:function(a,b){var z
if(!!a.fixed$length)H.H(P.p("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a8:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.a(a[x])
if(x>=z)return H.c(y,x)
y[x]=w}return y.join(b)},
aD:function(a,b){return H.cy(a,b,null,H.C(a,0))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
bM:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.H(P.p("setRange"))
P.fb(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.aF()
if(typeof b!=="number")return H.x(b)
z=c-b
if(z===0)return
y=J.w(d)
if(!!y.$isf){x=e
w=d}else{w=y.aD(d,e).ar(0,!1)
x=0}y=J.a3(w)
v=y.gi(w)
if(typeof v!=="number")return H.x(v)
if(x+z>v)throw H.b(H.eG())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
a_:function(a,b,c,d){return this.bM(a,b,c,d,0)},
b0:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.Z(a))}return!1},
B:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
k:function(a){return P.bm(a,"[","]")},
gw:function(a){return new J.be(a,a.length,0,null,[H.C(a,0)])},
gv:function(a){return H.am(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.H(P.p("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.c1(b,"newLength",null))
if(b<0)throw H.b(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.V(a,b))
if(b>=a.length||b<0)throw H.b(H.V(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.H(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.V(a,b))
if(b>=a.length||b<0)throw H.b(H.V(a,b))
a[b]=c},
u:function(a,b){var z,y
z=C.a.u(a.length,C.a.gi(b))
y=H.v([],[H.C(a,0)])
this.si(y,z)
this.a_(y,0,a.length,a)
this.a_(y,a.length,z,b)
return y},
$isk:1,
$ask:I.a7,
$isf:1,
q:{
a5:function(a){a.fixed$length=Array
return a},
ja:[function(a,b){return J.ds(a,b)},"$2","hG",8,0,2]}},
jb:{"^":"ag;$ti"},
be:{"^":"e;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.aG(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ah:{"^":"h;",
S:function(a,b){var z
if(typeof b!=="number")throw H.b(H.a2(b))
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
gv:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.b(H.a2(b))
return a+b},
ae:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aZ(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.aZ(a,b)},
aZ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.p("Result of truncating division is "+H.a(z)+": "+H.a(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.ck(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ck:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.b(H.a2(b))
return a<b},
Z:function(a,b){if(typeof b!=="number")throw H.b(H.a2(b))
return a>b},
$isaq:1,
$isbL:1},
cf:{"^":"ah;",$isW:1},
eJ:{"^":"ah;"},
ai:{"^":"h;",
bb:function(a,b){if(b>=a.length)H.H(H.V(a,b))
return a.charCodeAt(b)},
aQ:function(a,b){if(b>=a.length)throw H.b(H.V(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.b(P.c1(b,null,null))
return a+b},
bO:function(a,b,c){var z
if(c>a.length)throw H.b(P.ao(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bN:function(a,b){return this.bO(a,b,0)},
aG:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.H(H.a2(c))
if(b<0)throw H.b(P.aU(b,null,null))
if(typeof c!=="number")return H.x(c)
if(b>c)throw H.b(P.aU(b,null,null))
if(c>a.length)throw H.b(P.aU(c,null,null))
return a.substring(b,c)},
bP:function(a,b){return this.aG(a,b,null)},
cL:function(a){return a.toLowerCase()},
S:function(a,b){var z
if(typeof b!=="string")throw H.b(H.a2(b))
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
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.b(H.V(a,b))
return a[b]},
$isk:1,
$ask:I.a7,
$ism:1}}],["","",,H,{"^":"",
eF:function(){return new P.aX("No element")},
eH:function(){return new P.aX("Too many elements")},
eG:function(){return new P.aX("Too few elements")},
fo:function(a,b){var z=J.K(a)
if(typeof z!=="number")return z.aF()
H.aA(a,0,z-1,b)},
aA:function(a,b,c,d){if(c-b<=32)H.fn(a,b,c,d)
else H.fm(a,b,c,d)},
fn:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a3(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.E(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
fm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.X(c-b+1,6)
y=b+z
x=c-z
w=C.a.X(b+c,2)
v=w-z
u=w+z
t=J.a3(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.E(d.$2(s,r),0)){n=r
r=s
s=n}if(J.E(d.$2(p,o),0)){n=o
o=p
p=n}if(J.E(d.$2(s,q),0)){n=q
q=s
s=n}if(J.E(d.$2(r,q),0)){n=q
q=r
r=n}if(J.E(d.$2(s,p),0)){n=p
p=s
s=n}if(J.E(d.$2(q,p),0)){n=p
p=q
q=n}if(J.E(d.$2(r,o),0)){n=o
o=r
r=n}if(J.E(d.$2(r,q),0)){n=q
q=r
r=n}if(J.E(d.$2(p,o),0)){n=o
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
h=J.w(i)
if(h.J(i,0))continue
if(h.N(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.bG(i)
if(h.Z(i,0)){--l
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
if(J.aH(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.E(d.$2(j,p),0))for(;!0;)if(J.E(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aH(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aA(a,b,m-2,d)
H.aA(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.J(d.$2(t.h(a,m),r),0);)++m
for(;J.J(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.J(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.J(d.$2(j,p),0))for(;!0;)if(J.J(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aH(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aA(a,m,l,d)}else H.aA(a,m,l,d)},
bj:{"^":"af;$ti"},
aS:{"^":"bj;$ti",
gw:function(a){return new H.cj(this,this.gi(this),0,null,[H.bH(this,"aS",0)])},
as:function(a,b){return this.bR(0,b)}},
fr:{"^":"aS;a,b,c,$ti",
c4:function(a,b,c,d){},
gcf:function(){var z=J.K(this.a)
return z},
gcl:function(){var z,y
z=J.K(this.a)
y=this.b
if(typeof z!=="number")return H.x(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.K(this.a)
y=this.b
if(typeof z!=="number")return H.x(z)
if(y>=z)return 0
return z-y},
p:function(a,b){var z,y
z=this.gcl()
if(typeof z!=="number")return z.u()
if(typeof b!=="number")return H.x(b)
y=z+b
if(!(b<0)){z=this.gcf()
if(typeof z!=="number")return H.x(z)
z=y>=z}else z=!0
if(z)throw H.b(P.t(b,this,"index",null,null))
return J.av(this.a,y)},
ar:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a3(y)
w=x.gi(y)
if(typeof w!=="number")return w.aF()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.v(u,this.$ti)
for(s=0;s<v;++s){u=x.p(y,z+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.N()
if(u<w)throw H.b(P.Z(this))}return t},
q:{
cy:function(a,b,c,d){var z=new H.fr(a,b,c,[d])
z.c4(a,b,c,d)
return z}}},
cj:{"^":"e;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z,y,x,w
z=this.a
y=J.a3(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.Z(z))
w=this.c
if(typeof x!=="number")return H.x(x)
if(w>=x){this.d=null
return!1}this.d=y.p(z,w);++this.c
return!0}},
eP:{"^":"af;a,b,$ti",
gw:function(a){return new H.eQ(null,J.X(this.a),this.b,this.$ti)},
gi:function(a){return J.K(this.a)},
p:function(a,b){return this.b.$1(J.av(this.a,b))},
$asaf:function(a,b){return[b]}},
eQ:{"^":"bn;a,b,c,$ti",
n:function(){var z=this.b
if(z.n()){this.a=this.c.$1(z.gt(z))
return!0}this.a=null
return!1},
gt:function(a){return this.a},
$asbn:function(a,b){return[b]}},
eR:{"^":"aS;a,b,$ti",
gi:function(a){return J.K(this.a)},
p:function(a,b){return this.b.$1(J.av(this.a,b))},
$asbj:function(a,b){return[b]},
$asaS:function(a,b){return[b]},
$asaf:function(a,b){return[b]}},
by:{"^":"af;a,b,$ti",
gw:function(a){return new H.fC(J.X(this.a),this.b,this.$ti)}},
fC:{"^":"bn;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=this.b;z.n();)if(y.$1(z.gt(z))===!0)return!0
return!1},
gt:function(a){var z=this.a
return z.gt(z)}},
aQ:{"^":"e;$ti"}}],["","",,H,{"^":"",
hS:function(a){return init.types[a]},
i3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.w(a).$isl},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aw(a)
if(typeof z!=="string")throw H.b(H.a2(a))
return z},
am:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
an:function(a){var z,y,x,w,v,u,t,s,r
z=J.w(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.z||!!J.w(a).$isaC){v=C.r(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aQ(w,0)===36)w=C.h.bP(w,1)
r=H.bJ(H.a8(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
A:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fa:function(a){return a.b?H.A(a).getUTCFullYear()+0:H.A(a).getFullYear()+0},
f8:function(a){return a.b?H.A(a).getUTCMonth()+1:H.A(a).getMonth()+1},
f4:function(a){return a.b?H.A(a).getUTCDate()+0:H.A(a).getDate()+0},
f5:function(a){return a.b?H.A(a).getUTCHours()+0:H.A(a).getHours()+0},
f7:function(a){return a.b?H.A(a).getUTCMinutes()+0:H.A(a).getMinutes()+0},
f9:function(a){return a.b?H.A(a).getUTCSeconds()+0:H.A(a).getSeconds()+0},
f6:function(a){return a.b?H.A(a).getUTCMilliseconds()+0:H.A(a).getMilliseconds()+0},
x:function(a){throw H.b(H.a2(a))},
c:function(a,b){if(a==null)J.K(a)
throw H.b(H.V(a,b))},
V:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.Y(!0,b,"index",null)
z=J.K(a)
if(!(b<0)){if(typeof z!=="number")return H.x(z)
y=b>=z}else y=!0
if(y)return P.t(b,a,"index",null,z)
return P.aU(b,"index",null)},
a2:function(a){return new P.Y(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.f2()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.di})
z.name=""}else z.toString=H.di
return z},
di:function(){return J.aw(this.dartException)},
H:function(a){throw H.b(a)},
aG:function(a){throw H.b(P.Z(a))},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.i8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bq(H.a(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cq(H.a(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$cD()
u=$.$get$cE()
t=$.$get$cF()
s=$.$get$cG()
r=$.$get$cK()
q=$.$get$cL()
p=$.$get$cI()
$.$get$cH()
o=$.$get$cN()
n=$.$get$cM()
m=v.L(y)
if(m!=null)return z.$1(H.bq(y,m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.bq(y,m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cq(y,m))}}return z.$1(new H.fA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.Y(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cv()
return a},
hP:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
ec:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.w(c).$isf){z.$reflectionInfo=c
x=H.fd(z).r}else x=c
w=d?Object.create(new H.fp().constructor.prototype):Object.create(new H.bg(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.N
$.N=J.I(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.c5(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.hS,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.c3:H.bh
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.c5(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
e9:function(a,b,c,d){var z=H.bh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
c5:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eb(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.e9(y,!w,z,b)
if(y===0){w=$.N
$.N=J.I(w,1)
u="self"+H.a(w)
w="return function(){var "+u+" = this."
v=$.ac
if(v==null){v=H.aL("self")
$.ac=v}return new Function(w+H.a(v)+";return "+u+"."+H.a(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.N
$.N=J.I(w,1)
t+=H.a(w)
w="return function("+t+"){return this."
v=$.ac
if(v==null){v=H.aL("self")
$.ac=v}return new Function(w+H.a(v)+"."+H.a(z)+"("+t+");}")()},
ea:function(a,b,c,d){var z,y
z=H.bh
y=H.c3
switch(b?-1:a){case 0:throw H.b(H.fi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eb:function(a,b){var z,y,x,w,v,u,t,s
z=$.ac
if(z==null){z=H.aL("self")
$.ac=z}y=$.c2
if(y==null){y=H.aL("receiver")
$.c2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ea(w,!u,x,b)
if(w===1){z="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
y=$.N
$.N=J.I(y,1)
return new Function(z+H.a(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
y=$.N
$.N=J.I(y,1)
return new Function(z+H.a(y)+"}")()},
bF:function(a,b,c,d,e,f){var z,y
z=J.a5(b)
y=!!J.w(c).$isf?J.a5(c):c
return H.ec(a,z,y,!!d,e,f)},
i6:function(a,b){var z=J.a3(b)
throw H.b(H.c4(a,z.aG(b,3,z.gi(b))))},
i1:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else z=!0
if(z)return a
H.i6(a,b)},
hN:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
hI:function(a){var z
if(a instanceof H.q){z=H.hN(J.w(a))
if(z!=null)return H.dh(z,null)
return"Closure"}return H.an(a)},
i7:function(a){throw H.b(new P.ef(a))},
db:function(a){return init.getIsolateTag(a)},
v:function(a,b){a.$ti=b
return a},
a8:function(a){if(a==null)return
return a.$ti},
km:function(a,b,c){return H.as(a["$as"+H.a(c)],H.a8(b))},
ar:function(a,b,c,d){var z=H.as(a["$as"+H.a(c)],H.a8(b))
return z==null?null:z[d]},
bH:function(a,b,c){var z=H.as(a["$as"+H.a(b)],H.a8(a))
return z==null?null:z[c]},
C:function(a,b){var z=H.a8(a)
return z==null?null:z[b]},
dh:function(a,b){var z=H.aa(a,b)
return z},
aa:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bJ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.a(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aa(z,b)
return H.hF(a,b)}return"unknown-reified-type"},
hF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aa(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aa(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aa(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.hO(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aa(r[p],b)+(" "+H.a(p))}w+="}"}return"("+w+") => "+z},
bJ:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bw("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aa(u,c)}return w?"":"<"+z.k(0)+">"},
as:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
hK:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.a8(a)
y=J.w(a)
if(y[b]==null)return!1
return H.d6(H.as(y[d],z),c)},
aF:function(a,b,c,d){var z,y
if(a==null)return a
z=H.hK(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bJ(c,0,null)
throw H.b(H.c4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
d6:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.D(a[y],b[y]))return!1
return!0},
kk:function(a,b,c){return a.apply(b,H.as(J.w(b)["$as"+H.a(c)],H.a8(b)))},
D:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="f0")return!0
if('func' in b)return H.i2(a,b)
if('func' in a)return b.builtin$cls==="j2"||b.builtin$cls==="e"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.dh(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.d6(H.as(u,z),x)},
d5:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.D(z,v)||H.D(v,z)))return!1}return!0},
hJ:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.a5(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.D(v,u)||H.D(u,v)))return!1}return!0},
i2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.D(z,y)||H.D(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.d5(x,w,!1))return!1
if(!H.d5(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.D(o,n)||H.D(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.D(o,n)||H.D(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.D(o,n)||H.D(n,o)))return!1}}return H.hJ(a.named,b.named)},
kl:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
i4:function(a){var z,y,x,w,v,u
z=$.dc.$1(a)
y=$.b4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.d4.$2(a,z)
if(z!=null){y=$.b4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.b6(x)
$.b4[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.b5[z]=x
return x}if(v==="-"){u=H.b6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.df(a,x)
if(v==="*")throw H.b(P.cO(z))
if(init.leafTags[z]===true){u=H.b6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.df(a,x)},
df:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
b6:function(a){return J.bK(a,!1,null,!!a.$isl)},
i5:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.b6(z)
else return J.bK(z,c,null,null)},
i_:function(){if(!0===$.bI)return
$.bI=!0
H.i0()},
i0:function(){var z,y,x,w,v,u,t,s
$.b4=Object.create(null)
$.b5=Object.create(null)
H.hW()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dg.$1(v)
if(u!=null){t=H.i5(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
hW:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.a6(C.A,H.a6(C.F,H.a6(C.q,H.a6(C.q,H.a6(C.E,H.a6(C.B,H.a6(C.C(C.r),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dc=new H.hX(v)
$.d4=new H.hY(u)
$.dg=new H.hZ(t)},
a6:function(a,b){return a(b)||b},
fc:{"^":"e;a,b,c,d,e,f,r,x",q:{
fd:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.a5(z)
y=z[0]
x=z[1]
return new H.fc(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
fx:{"^":"e;a,b,c,d,e,f",
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
q:{
O:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.fx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
b1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
f1:{"^":"z;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.a(this.a)
return"NullError: method not found: '"+H.a(z)+"' on null"},
q:{
cq:function(a,b){return new H.f1(a,b==null?null:b.method)}}},
eL:{"^":"z;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.a(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.a(this.a)+")"},
q:{
bq:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eL(a,y,z?null:b.receiver)}}},
fA:{"^":"z;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
i8:{"^":"q;a",
$1:function(a){if(!!J.w(a).$isz)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
q:{"^":"e;",
k:function(a){return"Closure '"+H.an(this).trim()+"'"},
gbJ:function(){return this},
gbJ:function(){return this}},
cz:{"^":"q;"},
fp:{"^":"cz;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bg:{"^":"cz;a,b,c,d",
J:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bg))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.am(this.a)
else y=typeof z!=="object"?J.ab(z):H.am(z)
return(y^H.am(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.an(z)+"'")},
q:{
bh:function(a){return a.a},
c3:function(a){return a.c},
aL:function(a){var z,y,x,w,v
z=new H.bg("self","target","receiver","name")
y=J.a5(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
e7:{"^":"z;a",
k:function(a){return this.a},
q:{
c4:function(a,b){return new H.e7("CastError: "+H.a(P.bl(a))+": type '"+H.hI(a)+"' is not a subtype of type '"+b+"'")}}},
fh:{"^":"z;a",
k:function(a){return"RuntimeError: "+H.a(this.a)},
q:{
fi:function(a){return new H.fh(a)}}},
cg:{"^":"bt;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gG:function(a){return new H.eN(this,[H.C(this,0)])},
a6:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.aT(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.aT(y,b)}else return this.cC(b)},
cC:function(a){var z=this.d
if(z==null)return!1
return this.ao(this.ai(z,J.ab(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a3(z,b)
x=y==null?null:y.gY()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a3(w,b)
x=y==null?null:y.gY()
return x}else return this.cD(b)},
cD:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ai(z,J.ab(a)&0x3ffffff)
x=this.ao(y,a)
if(x<0)return
return y[x].gY()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aj()
this.b=z}this.aO(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aj()
this.c=y}this.aO(y,b,c)}else{x=this.d
if(x==null){x=this.aj()
this.d=x}w=J.ab(b)&0x3ffffff
v=this.ai(x,w)
if(v==null)this.al(x,w,[this.af(b,c)])
else{u=this.ao(v,b)
if(u>=0)v[u].sY(c)
else v.push(this.af(b,c))}}},
C:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.Z(this))
z=z.c}},
aO:function(a,b,c){var z=this.a3(a,b)
if(z==null)this.al(a,b,this.af(b,c))
else z.sY(c)},
aW:function(){this.r=this.r+1&67108863},
af:function(a,b){var z,y
z=new H.eM(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aW()
return z},
ao:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].gcB(),b))return y
return-1},
k:function(a){return P.cl(this)},
a3:function(a,b){return a[b]},
ai:function(a,b){return a[b]},
al:function(a,b,c){a[b]=c},
cd:function(a,b){delete a[b]},
aT:function(a,b){return this.a3(a,b)!=null},
aj:function(){var z=Object.create(null)
this.al(z,"<non-identifier-key>",z)
this.cd(z,"<non-identifier-key>")
return z}},
eM:{"^":"e;cB:a<,Y:b@,c,d"},
eN:{"^":"bj;a,$ti",
gi:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.ak(z,z.r,null,null,this.$ti)
y.c=z.e
return y}},
ak:{"^":"e;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.Z(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
hX:{"^":"q;a",
$1:function(a){return this.a(a)}},
hY:{"^":"q;a",
$2:function(a,b){return this.a(a,b)}},
hZ:{"^":"q;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
hO:function(a){return J.a5(H.v(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
b7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b3:function(a){var z,y,x
if(!!J.w(a).$isk)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Q:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.V(b,a))},
eX:{"^":"h;","%":"DataView;ArrayBufferView;bu|cV|cW|cn|cX|cY|a0"},
bu:{"^":"eX;",
gi:function(a){return a.length},
$isk:1,
$ask:I.a7,
$isl:1,
$asl:I.a7},
cn:{"^":"cW;",
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
j:function(a,b,c){H.Q(b,a,a.length)
a[b]=c},
$asaQ:function(){return[P.aq]},
$asi:function(){return[P.aq]},
$isf:1,
$asf:function(){return[P.aq]},
"%":"Float64Array"},
a0:{"^":"cY;",
j:function(a,b,c){H.Q(b,a,a.length)
a[b]=c},
$asaQ:function(){return[P.W]},
$asi:function(){return[P.W]},
$isf:1,
$asf:function(){return[P.W]}},
eW:{"^":"cn;","%":"Float32Array"},
jp:{"^":"a0;",
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":"Int16Array"},
jq:{"^":"a0;",
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":"Int32Array"},
jr:{"^":"a0;",
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":"Int8Array"},
js:{"^":"a0;",
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
jt:{"^":"a0;",
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ju:{"^":"a0;",
gi:function(a){return a.length},
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
jv:{"^":"a0;",
gi:function(a){return a.length},
h:function(a,b){H.Q(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
cV:{"^":"bu+i;"},
cW:{"^":"cV+aQ;"},
cX:{"^":"bu+i;"},
cY:{"^":"cX+aQ;"}}],["","",,P,{"^":"",
a_:function(){return new H.cg(0,null,null,null,null,null,0,[null,null])},
ci:function(a){return H.hP(a,new H.cg(0,null,null,null,null,null,0,[null,null]))},
ay:function(a,b,c,d){return new P.fW(0,null,null,null,null,null,0,[d])},
eE:function(a,b,c){var z,y
if(P.bD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$ap()
y.push(a)
try{P.hH(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.cx(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bm:function(a,b,c){var z,y,x
if(P.bD(a))return b+"..."+c
z=new P.bw(b)
y=$.$get$ap()
y.push(a)
try{x=z
x.a=P.cx(x.gP(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
bD:function(a){var z,y
for(z=0;y=$.$get$ap(),z<y.length;++z)if(a===y[z])return!0
return!1},
hH:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.n())return
w=H.a(z.gt(z))
b.push(w)
y+=w.length+2;++x}if(!z.n()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gt(z);++x
if(!z.n()){if(x<=4){b.push(H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gt(z);++x
for(;z.n();t=s,s=r){r=z.gt(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
br:function(a,b){var z,y
z=P.ay(null,null,null,b)
for(y=J.X(a);y.n();)z.am(0,y.gt(y))
return z},
cl:function(a){var z,y,x
z={}
if(P.bD(a))return"{...}"
y=new P.bw("")
try{$.$get$ap().push(a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.dF(a,new P.eO(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.$get$ap()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
fW:{"^":"fR;a,b,c,d,e,f,r,$ti",
gw:function(a){var z=new P.bB(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cc(b)},
cc:function(a){var z=this.d
if(z==null)return!1
return this.aU(z[this.aS(a)],a)>=0},
am:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bC()
this.b=z}return this.aP(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bC()
this.c=y}return this.aP(y,b)}else return this.cb(0,b)},
cb:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bC()
this.d=z}y=this.aS(b)
x=z[y]
if(x==null)z[y]=[this.ak(b)]
else{if(this.aU(x,b)>=0)return!1
x.push(this.ak(b))}return!0},
aP:function(a,b){if(a[b]!=null)return!1
a[b]=this.ak(b)
return!0},
aR:function(){this.r=this.r+1&67108863},
ak:function(a){var z,y
z=new P.fX(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aR()
return z},
aS:function(a){return J.ab(a)&0x3ffffff},
aU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].gce(),b))return y
return-1},
q:{
bC:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
fX:{"^":"e;ce:a<,b,c"},
bB:{"^":"e;a,b,c,d,$ti",
gt:function(a){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.Z(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
fR:{"^":"fj;$ti"},
jf:{"^":"e;$ti"},
al:{"^":"b2;$ti",$isf:1},
i:{"^":"e;$ti",
gw:function(a){return new H.cj(a,this.gi(a),0,null,[H.ar(this,a,"i",0)])},
p:function(a,b){return this.h(a,b)},
cz:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.x(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.Z(a))}return y},
aD:function(a,b){return H.cy(a,b,null,H.ar(this,a,"i",0))},
ar:function(a,b){var z,y,x
z=H.v([],[H.ar(this,a,"i",0)])
C.b.si(z,this.gi(a))
y=0
while(!0){x=this.gi(a)
if(typeof x!=="number")return H.x(x)
if(!(y<x))break
x=this.h(a,y)
if(y>=z.length)return H.c(z,y)
z[y]=x;++y}return z},
cK:function(a){return this.ar(a,!0)},
u:function(a,b){var z,y,x
z=H.v([],[H.ar(this,a,"i",0)])
y=this.gi(a)
x=C.a.gi(b)
if(typeof y!=="number")return y.u()
C.b.si(z,C.a.u(y,x))
C.b.a_(z,0,this.gi(a),a)
C.b.a_(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bm(a,"[","]")}},
bt:{"^":"F;$ti"},
eO:{"^":"q;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.a(a)
z.a=y+": "
z.a+=H.a(b)}},
F:{"^":"e;$ti",
C:function(a,b){var z,y
for(z=J.X(this.gG(a));z.n();){y=z.gt(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.K(this.gG(a))},
k:function(a){return P.cl(a)}},
fk:{"^":"e;$ti",
I:function(a,b){var z
for(z=J.X(b);z.n();)this.am(0,z.gt(z))},
k:function(a){return P.bm(this,"{","}")},
p:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.c0("index"))
if(b<0)H.H(P.ao(b,0,null,"index",null))
for(z=new P.bB(this,this.r,null,null,[null]),z.c=this.e,y=0;z.n();){x=z.d
if(b===y)return x;++y}throw H.b(P.t(b,this,"index",null,y))}},
fj:{"^":"fk;$ti"},
b2:{"^":"e+i;$ti"}}],["","",,P,{"^":"",
ep:function(a){var z=J.w(a)
if(!!z.$isq)return z.k(a)
return"Instance of '"+H.an(a)+"'"},
ck:function(a,b,c){var z,y
z=H.v([],[c])
for(y=J.X(a);y.n();)z.push(y.gt(y))
if(b)return z
return J.a5(z)},
bl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ep(a)},
eq:function(a){return new P.fM(a)},
M:function(a){H.b7(H.a(a))},
bE:{"^":"e;"},
"+bool":0,
c7:{"^":"e;cm:a<,b",
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.c7))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.a.S(this.a,b.gcm())},
gv:function(a){var z=this.a
return(z^C.a.aY(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.eg(H.fa(this))
y=P.ax(H.f8(this))
x=P.ax(H.f4(this))
w=P.ax(H.f5(this))
v=P.ax(H.f7(this))
u=P.ax(H.f9(this))
t=P.eh(H.f6(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
eg:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ax:function(a){if(a>=10)return""+a
return"0"+a}}},
aq:{"^":"bL;"},
"+double":0,
aO:{"^":"e;a2:a<",
u:function(a,b){return new P.aO(C.a.u(this.a,b.ga2()))},
N:function(a,b){return C.a.N(this.a,b.ga2())},
Z:function(a,b){return C.a.Z(this.a,b.ga2())},
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.aO))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.a.S(this.a,b.ga2())},
k:function(a){var z,y,x,w,v
z=new P.em()
y=this.a
if(y<0)return"-"+new P.aO(0-y).k(0)
x=z.$1(C.a.X(y,6e7)%60)
w=z.$1(C.a.X(y,1e6)%60)
v=new P.el().$1(y%1e6)
return""+C.a.X(y,36e8)+":"+H.a(x)+":"+H.a(w)+"."+H.a(v)},
q:{
ek:function(a,b,c,d,e,f){return new P.aO(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
el:{"^":"q;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
em:{"^":"q;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
z:{"^":"e;"},
f2:{"^":"z;",
k:function(a){return"Throw of null."}},
Y:{"^":"z;a,b,c,d",
gah:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gag:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.a(z)
w=this.gah()+y+x
if(!this.a)return w
v=this.gag()
u=P.bl(this.b)
return w+v+": "+H.a(u)},
q:{
c1:function(a,b,c){return new P.Y(!0,a,b,c)},
c0:function(a){return new P.Y(!1,null,a,"Must not be null")}}},
cs:{"^":"Y;e,f,a,b,c,d",
gah:function(){return"RangeError"},
gag:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else if(x>z)y=": Not in range "+H.a(z)+".."+H.a(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.a(z)}return y},
q:{
aU:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
fb:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.x(a)
if(0<=a){if(typeof c!=="number")return H.x(c)
z=a>c}else z=!0
if(z)throw H.b(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.x(c)
z=b>c}else z=!0
if(z)throw H.b(P.ao(b,a,c,"end",f))
return b}return c}}},
eD:{"^":"Y;e,i:f>,a,b,c,d",
gah:function(){return"RangeError"},
gag:function(){if(J.aH(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
q:{
t:function(a,b,c,d,e){var z=e!=null?e:J.K(b)
return new P.eD(b,z,!0,a,c,"Index out of range")}}},
fB:{"^":"z;a",
k:function(a){return"Unsupported operation: "+this.a},
q:{
p:function(a){return new P.fB(a)}}},
fz:{"^":"z;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.a(z):"UnimplementedError"},
q:{
cO:function(a){return new P.fz(a)}}},
aX:{"^":"z;a",
k:function(a){return"Bad state: "+this.a},
q:{
cw:function(a){return new P.aX(a)}}},
ed:{"^":"z;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.bl(z))+"."},
q:{
Z:function(a){return new P.ed(a)}}},
cv:{"^":"e;",
k:function(a){return"Stack Overflow"},
$isz:1},
ef:{"^":"z;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.a(z)+"' during its initialization"}},
iE:{"^":"e;"},
fM:{"^":"e;a",
k:function(a){return"Exception: "+this.a}},
W:{"^":"bL;"},
"+int":0,
af:{"^":"e;$ti",
as:["bR",function(a,b){return new H.by(this,b,[H.bH(this,"af",0)])}],
gi:function(a){var z,y
z=this.gw(this)
for(y=0;z.n();)++y
return y},
gO:function(a){var z,y
z=this.gw(this)
if(!z.n())throw H.b(H.eF())
y=z.gt(z)
if(z.n())throw H.b(H.eH())
return y},
p:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.c0("index"))
if(b<0)H.H(P.ao(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.n();){x=z.gt(z)
if(b===y)return x;++y}throw H.b(P.t(b,this,"index",null,y))},
k:function(a){return P.eE(this,"(",")")}},
bn:{"^":"e;$ti"},
f:{"^":"e;$ti"},
"+List":0,
bs:{"^":"e;$ti"},
f0:{"^":"e;",
gv:function(a){return P.e.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
bL:{"^":"e;"},
"+num":0,
e:{"^":";",
J:function(a,b){return this===b},
gv:function(a){return H.am(this)},
k:function(a){return"Instance of '"+H.an(this)+"'"},
toString:function(){return this.k(this)}},
m:{"^":"e;"},
"+String":0,
bw:{"^":"e;P:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
cx:function(a,b,c){var z=J.X(b)
if(!z.n())return a
if(c.length===0){do a+=H.a(z.gt(z))
while(z.n())}else{a+=H.a(z.gt(z))
for(;z.n();)a=a+c+H.a(z.gt(z))}return a}}}}],["","",,W,{"^":"",
en:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).K(z,a,b,c)
y.toString
z=new H.by(new W.B(y),new W.eo(),[W.n])
return z.gO(z)},
ad:function(a){var z,y,x
z="element tag unavailable"
try{y=J.dJ(a)
if(typeof y==="string")z=a.tagName}catch(x){H.at(x)}return z},
a1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
r:{"^":"y;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
i9:{"^":"bv;l:x=,m:y=,H:z=","%":"Accelerometer|LinearAccelerationSensor"},
ia:{"^":"h;i:length=","%":"AccessibleNodeList"},
ib:{"^":"r;a7:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ic:{"^":"r;a7:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
ih:{"^":"r;a7:href}","%":"HTMLBaseElement"},
bf:{"^":"r;",$isbf:1,"%":"HTMLBodyElement"},
ii:{"^":"r;A:name=","%":"HTMLButtonElement"},
ij:{"^":"r;D:height},E:width}",
bK:function(a,b,c){var z=a.getContext(b,P.hL(c,null))
return z},
"%":"HTMLCanvasElement"},
ik:{"^":"h;",
aa:function(a){return P.G(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
il:{"^":"n;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
im:{"^":"aN;i:length=","%":"CSSPerspective"},
io:{"^":"bi;l:x=,m:y=","%":"CSSPositionValue"},
ip:{"^":"aN;l:x=,m:y=,H:z=","%":"CSSRotation"},
iq:{"^":"aN;l:x=,m:y=,H:z=","%":"CSSScale"},
ir:{"^":"fG;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ee:{"^":"e;"},
bi:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aN:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
is:{"^":"bi;i:length=","%":"CSSTransformValue"},
it:{"^":"aN;l:x=,m:y=,H:z=","%":"CSSTranslation"},
iu:{"^":"bi;i:length=","%":"CSSUnparsedValue"},
iv:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
iw:{"^":"h;l:x=,m:y=,H:z=","%":"DeviceAcceleration"},
ix:{"^":"n;",
gan:function(a){if(a._docChildren==null)a._docChildren=new P.ca(a,new W.B(a))
return a._docChildren},
"%":"DocumentFragment|ShadowRoot"},
iy:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
iz:{"^":"ei;",
gbI:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gH:function(a){return a.z},
"%":"DOMPoint"},
ei:{"^":"h;",
gbI:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gH:function(a){return a.z},
"%":";DOMPointReadOnly"},
iA:{"^":"fI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[P.T]},
$isl:1,
$asl:function(){return[P.T]},
$asi:function(){return[P.T]},
$isf:1,
$asf:function(){return[P.T]},
$asj:function(){return[P.T]},
"%":"ClientRectList|DOMRectList"},
ej:{"^":"h;",
k:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(this.gE(a))+" x "+H.a(this.gD(a))},
J:function(a,b){var z
if(b==null)return!1
z=J.w(b)
if(!z.$isT)return!1
return a.left===b.left&&a.top===b.top&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.cU(W.a1(W.a1(W.a1(W.a1(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isT:1,
$asT:I.a7,
"%":";DOMRectReadOnly"},
iB:{"^":"fK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[P.m]},
$isl:1,
$asl:function(){return[P.m]},
$asi:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$asj:function(){return[P.m]},
"%":"DOMStringList"},
iC:{"^":"h;i:length=","%":"DOMTokenList"},
cQ:{"^":"al;aV:a<,b",
gi:function(a){return this.b.length},
h:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
j:function(a,b,c){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
this.a.replaceChild(c,z[b])},
gw:function(a){var z=this.cK(this)
return new J.be(z,z.length,0,null,[H.C(z,0)])},
I:function(a,b){var z,y
for(z=J.X(b instanceof W.B?P.ck(b,!0,null):b),y=this.a;z.n();)y.appendChild(z.gt(z))},
$asal:function(){return[W.y]},
$asi:function(){return[W.y]},
$asf:function(){return[W.y]},
$asb2:function(){return[W.y]}},
y:{"^":"n;aX:namespaceURI=,cI:tagName=",
gco:function(a){return new W.fL(a)},
gan:function(a){return new W.cQ(a,a.children)},
k:function(a){return a.localName},
K:["ad",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.c9
if(z==null){z=H.v([],[W.co])
y=new W.cp(z)
z.push(W.cS(null))
z.push(W.d0())
$.c9=y
d=y}else d=z
z=$.c8
if(z==null){z=new W.d3(d)
$.c8=z
c=z}else{z.a=d
c=z}}if($.R==null){z=document
y=z.implementation.createHTMLDocument("")
$.R=y
$.bk=y.createRange()
y=$.R
y.toString
x=y.createElement("base")
J.dT(x,z.baseURI)
$.R.head.appendChild(x)}z=$.R
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.R
if(!!this.$isbf)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.R.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.B(C.I,a.tagName)){$.bk.selectNodeContents(w)
v=$.bk.createContextualFragment(b)}else{w.innerHTML=b
v=$.R.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.R.body
if(w==null?z!=null:w!==z)J.bV(w)
c.aB(v)
document.adoptNode(v)
return v},function(a,b,c){return this.K(a,b,c,null)},"cr",null,null,"gcV",5,5,null],
sF:function(a,b){this.ab(a,b)},
ac:function(a,b,c,d){a.textContent=null
a.appendChild(this.K(a,b,c,d))},
ab:function(a,b){return this.ac(a,b,null,null)},
gF:function(a){return a.innerHTML},
$isy:1,
"%":";Element"},
eo:{"^":"q;",
$1:function(a){return!!J.w(a).$isy}},
iD:{"^":"r;D:height},A:name=,E:width}","%":"HTMLEmbedElement"},
S:{"^":"h;","%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DOMWindow|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Window|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;cZ|d_|d1|d2"},
iX:{"^":"r;A:name=","%":"HTMLFieldSetElement"},
iY:{"^":"fO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aP]},
$isl:1,
$asl:function(){return[W.aP]},
$asi:function(){return[W.aP]},
$isf:1,
$asf:function(){return[W.aP]},
$asj:function(){return[W.aP]},
"%":"FileList"},
iZ:{"^":"S;i:length=","%":"FileWriter"},
j1:{"^":"r;i:length=,A:name=","%":"HTMLFormElement"},
j3:{"^":"bv;l:x=,m:y=,H:z=","%":"Gyroscope"},
j4:{"^":"h;i:length=","%":"History"},
j5:{"^":"fT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.n]},
$isl:1,
$asl:function(){return[W.n]},
$asi:function(){return[W.n]},
$isf:1,
$asf:function(){return[W.n]},
$asj:function(){return[W.n]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
j6:{"^":"r;D:height},A:name=,E:width}","%":"HTMLIFrameElement"},
j7:{"^":"r;D:height},E:width}","%":"HTMLImageElement"},
j9:{"^":"r;D:height},A:name=,E:width}","%":"HTMLInputElement"},
je:{"^":"r;a7:href}","%":"HTMLLinkElement"},
jg:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
jh:{"^":"bv;l:x=,m:y=,H:z=","%":"Magnetometer"},
ji:{"^":"r;A:name=","%":"HTMLMapElement"},
eS:{"^":"r;","%":"HTMLAudioElement;HTMLMediaElement"},
jk:{"^":"h;i:length=","%":"MediaList"},
jl:{"^":"r;A:name=","%":"HTMLMetaElement"},
jm:{"^":"fY;",
h:function(a,b){return P.G(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gG:function(a){var z=H.v([],[P.m])
this.C(a,new W.eU(z))
return z},
gi:function(a){return a.size},
$asF:function(){return[P.m,null]},
"%":"MIDIInputMap"},
eU:{"^":"q;a",
$2:function(a,b){return this.a.push(a)}},
jn:{"^":"fZ;",
h:function(a,b){return P.G(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gG:function(a){var z=H.v([],[P.m])
this.C(a,new W.eV(z))
return z},
gi:function(a){return a.size},
$asF:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
eV:{"^":"q;a",
$2:function(a,b){return this.a.push(a)}},
jo:{"^":"h0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aT]},
$isl:1,
$asl:function(){return[W.aT]},
$asi:function(){return[W.aT]},
$isf:1,
$asf:function(){return[W.aT]},
$asj:function(){return[W.aT]},
"%":"MimeTypeArray"},
B:{"^":"al;a",
gO:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.cw("No elements"))
if(y>1)throw H.b(P.cw("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.cb(z,z.length,-1,null,[H.ar(C.L,z,"j",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asal:function(){return[W.n]},
$asi:function(){return[W.n]},
$asf:function(){return[W.n]},
$asb2:function(){return[W.n]}},
n:{"^":"S;a9:parentNode=,aq:previousSibling=",
gcE:function(a){return new W.B(a)},
cG:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
cH:function(a,b){var z,y
try{z=a.parentNode
J.dj(z,b,a)}catch(y){H.at(y)}return a},
k:function(a){var z=a.nodeValue
return z==null?this.bQ(a):z},
cg:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
"%":"Document|DocumentType|HTMLDocument|XMLDocument;Node"},
jw:{"^":"h;",
cF:[function(a){return a.previousNode()},"$0","gaq",1,0,0],
"%":"NodeIterator"},
eY:{"^":"h2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.n]},
$isl:1,
$asl:function(){return[W.n]},
$asi:function(){return[W.n]},
$isf:1,
$asf:function(){return[W.n]},
$asj:function(){return[W.n]},
"%":"NodeList|RadioNodeList"},
jz:{"^":"r;D:height},A:name=,E:width}","%":"HTMLObjectElement"},
jB:{"^":"r;A:name=","%":"HTMLOutputElement"},
jC:{"^":"r;A:name=","%":"HTMLParamElement"},
az:{"^":"h;i:length=","%":"Plugin"},
jE:{"^":"h6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$asi:function(){return[W.az]},
$isf:1,
$asf:function(){return[W.az]},
$asj:function(){return[W.az]},
"%":"PluginArray"},
jL:{"^":"h8;",
h:function(a,b){return P.G(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gG:function(a){var z=H.v([],[P.m])
this.C(a,new W.fg(z))
return z},
gi:function(a){return a.size},
$asF:function(){return[P.m,null]},
"%":"RTCStatsReport"},
fg:{"^":"q;a",
$2:function(a,b){return this.a.push(a)}},
jM:{"^":"r;i:length=,A:name=","%":"HTMLSelectElement"},
bv:{"^":"S;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
jN:{"^":"r;A:name=","%":"HTMLSlotElement"},
jO:{"^":"d_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aV]},
$isl:1,
$asl:function(){return[W.aV]},
$asi:function(){return[W.aV]},
$isf:1,
$asf:function(){return[W.aV]},
$asj:function(){return[W.aV]},
"%":"SourceBufferList"},
jP:{"^":"he;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aW]},
$isl:1,
$asl:function(){return[W.aW]},
$asi:function(){return[W.aW]},
$isf:1,
$asf:function(){return[W.aW]},
$asj:function(){return[W.aW]},
"%":"SpeechGrammarList"},
aB:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
jR:{"^":"hh;",
h:function(a,b){return a.getItem(b)},
C:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gG:function(a){var z=H.v([],[P.m])
this.C(a,new W.fq(z))
return z},
gi:function(a){return a.length},
$asF:function(){return[P.m,P.m]},
"%":"Storage"},
fq:{"^":"q;a",
$2:function(a,b){return this.a.push(a)}},
fs:{"^":"r;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=W.en("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.B(y).I(0,J.dH(z))
return y},
"%":"HTMLTableElement"},
jU:{"^":"r;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.y.K(z.createElement("table"),b,c,d)
z.toString
z=new W.B(z)
x=z.gO(z)
x.toString
z=new W.B(x)
w=z.gO(z)
y.toString
w.toString
new W.B(y).I(0,new W.B(w))
return y},
"%":"HTMLTableRowElement"},
jV:{"^":"r;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.y.K(z.createElement("table"),b,c,d)
z.toString
z=new W.B(z)
x=z.gO(z)
y.toString
x.toString
new W.B(y).I(0,new W.B(x))
return y},
"%":"HTMLTableSectionElement"},
cA:{"^":"r;",
ac:function(a,b,c,d){var z
a.textContent=null
z=this.K(a,b,c,d)
a.content.appendChild(z)},
ab:function(a,b){return this.ac(a,b,null,null)},
$iscA:1,
"%":"HTMLTemplateElement"},
jW:{"^":"r;A:name=","%":"HTMLTextAreaElement"},
jY:{"^":"ho;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.b_]},
$isl:1,
$asl:function(){return[W.b_]},
$asi:function(){return[W.b_]},
$isf:1,
$asf:function(){return[W.b_]},
$asj:function(){return[W.b_]},
"%":"TextTrackCueList"},
jZ:{"^":"d2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aZ]},
$isl:1,
$asl:function(){return[W.aZ]},
$asi:function(){return[W.aZ]},
$isf:1,
$asf:function(){return[W.aZ]},
$asj:function(){return[W.aZ]},
"%":"TextTrackList"},
k_:{"^":"h;i:length=","%":"TimeRanges"},
k0:{"^":"hq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.b0]},
$isl:1,
$asl:function(){return[W.b0]},
$asi:function(){return[W.b0]},
$isf:1,
$asf:function(){return[W.b0]},
$asj:function(){return[W.b0]},
"%":"TouchList"},
k1:{"^":"h;i:length=","%":"TrackDefaultList"},
k3:{"^":"h;",
cY:[function(a){return a.parentNode()},"$0","ga9",1,0,0],
cF:[function(a){return a.previousNode()},"$0","gaq",1,0,0],
"%":"TreeWalker"},
k5:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
k7:{"^":"h;l:x=,H:z=","%":"VRStageBoundsPoint"},
k8:{"^":"eS;D:height},E:width}","%":"HTMLVideoElement"},
k9:{"^":"S;i:length=","%":"VideoTrackList"},
ka:{"^":"S;"},
kb:{"^":"n;A:name=,aX:namespaceURI=","%":"Attr"},
kc:{"^":"hw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aM]},
$isl:1,
$asl:function(){return[W.aM]},
$asi:function(){return[W.aM]},
$isf:1,
$asf:function(){return[W.aM]},
$asj:function(){return[W.aM]},
"%":"CSSRuleList"},
kd:{"^":"ej;",
k:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
J:function(a,b){var z
if(b==null)return!1
z=J.w(b)
if(!z.$isT)return!1
return a.left===b.left&&a.top===b.top&&a.width===z.gE(b)&&a.height===z.gD(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.cU(W.a1(W.a1(W.a1(W.a1(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
ke:{"^":"hy;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aR]},
$isl:1,
$asl:function(){return[W.aR]},
$asi:function(){return[W.aR]},
$isf:1,
$asf:function(){return[W.aR]},
$asj:function(){return[W.aR]},
"%":"GamepadList"},
kh:{"^":"hA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.n]},
$isl:1,
$asl:function(){return[W.n]},
$asi:function(){return[W.n]},
$isf:1,
$asf:function(){return[W.n]},
$asj:function(){return[W.n]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ki:{"^":"hC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$asi:function(){return[W.aB]},
$isf:1,
$asf:function(){return[W.aB]},
$asj:function(){return[W.aB]},
"%":"SpeechRecognitionResultList"},
kj:{"^":"hE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.aY]},
$isl:1,
$asl:function(){return[W.aY]},
$asi:function(){return[W.aY]},
$isf:1,
$asf:function(){return[W.aY]},
$asj:function(){return[W.aY]},
"%":"StyleSheetList"},
fE:{"^":"bt;aV:a<",
C:function(a,b){var z,y,x,w,v
for(z=this.gG(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.aG)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gG:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.v([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
v=z[w]
u=J.d(v)
if(u.gaX(v)==null)y.push(u.gA(v))}return y},
$asbt:function(){return[P.m,P.m]},
$asF:function(){return[P.m,P.m]}},
fL:{"^":"fE;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gG(this).length}},
bz:{"^":"e;bD:a<",
c9:function(a){var z,y
z=$.$get$bA()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.H[y],W.hU())
for(y=0;y<12;++y)z.j(0,C.n[y],W.hV())}},
R:function(a){return $.$get$cT().B(0,W.ad(a))},
M:function(a,b,c){var z,y,x
z=W.ad(a)
y=$.$get$bA()
x=y.h(0,H.a(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
q:{
cS:function(a){var z,y
z=document.createElement("a")
y=new W.h9(z,window.location)
y=new W.bz(y)
y.c9(a)
return y},
kf:[function(a,b,c,d){return!0},"$4","hU",16,0,1],
kg:[function(a,b,c,d){var z,y,x,w,v
z=d.gbD()
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
return z},"$4","hV",16,0,1]}},
j:{"^":"e;$ti",
gw:function(a){return new W.cb(a,this.gi(a),-1,null,[H.ar(this,a,"j",0)])}},
cp:{"^":"e;a",
R:function(a){return C.b.b0(this.a,new W.f_(a))},
M:function(a,b,c){return C.b.b0(this.a,new W.eZ(a,b,c))}},
f_:{"^":"q;a",
$1:function(a){return a.R(this.a)}},
eZ:{"^":"q;a,b,c",
$1:function(a){return a.M(this.a,this.b,this.c)}},
ha:{"^":"e;bD:d<",
ca:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.as(0,new W.hb())
y=b.as(0,new W.hc())
this.b.I(0,z)
x=this.c
x.I(0,C.J)
x.I(0,y)},
R:function(a){return this.a.B(0,W.ad(a))},
M:["bT",function(a,b,c){var z,y
z=W.ad(a)
y=this.c
if(y.B(0,H.a(z)+"::"+b))return this.d.cn(c)
else if(y.B(0,"*::"+b))return this.d.cn(c)
else{y=this.b
if(y.B(0,H.a(z)+"::"+b))return!0
else if(y.B(0,"*::"+b))return!0
else if(y.B(0,H.a(z)+"::*"))return!0
else if(y.B(0,"*::*"))return!0}return!1}]},
hb:{"^":"q;",
$1:function(a){return!C.b.B(C.n,a)}},
hc:{"^":"q;",
$1:function(a){return C.b.B(C.n,a)}},
hl:{"^":"ha;e,a,b,c,d",
M:function(a,b,c){if(this.bT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bQ(a).a.getAttribute("template")==="")return this.e.B(0,b)
return!1},
q:{
d0:function(){var z=P.m
z=new W.hl(P.br(C.m,z),P.ay(null,null,null,z),P.ay(null,null,null,z),P.ay(null,null,null,z),null)
z.ca(null,new H.eR(C.m,new W.hm(),[H.C(C.m,0),null]),["TEMPLATE"],null)
return z}}},
hm:{"^":"q;",
$1:function(a){return"TEMPLATE::"+H.a(a)}},
hk:{"^":"e;",
R:function(a){var z=J.w(a)
if(!!z.$isct)return!1
z=!!z.$isu
if(z&&W.ad(a)==="foreignObject")return!1
if(z)return!0
return!1},
M:function(a,b,c){if(b==="is"||C.h.bN(b,"on"))return!1
return this.R(a)}},
cb:{"^":"e;a,b,c,d,$ti",
n:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.au(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gt:function(a){return this.d}},
co:{"^":"e;"},
jx:{"^":"e;"},
k4:{"^":"e;"},
h9:{"^":"e;a,b"},
d3:{"^":"e;a",
aB:function(a){new W.hu(this).$2(a,null)},
W:function(a,b){if(b==null)J.bV(a)
else b.removeChild(a)},
cj:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.bQ(a)
x=y.gaV().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.at(t)}v="element unprintable"
try{v=J.aw(a)}catch(t){H.at(t)}try{u=W.ad(a)
this.ci(a,b,z,v,u,y,x)}catch(t){if(H.at(t) instanceof P.Y)throw t
else{this.W(a,b)
window
s="Removing corrupted element "+H.a(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ci:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.W(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.R(a)){this.W(a,b)
window
z="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.M(a,"is",g)){this.W(a,b)
window
z="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.v(z.slice(0),[H.C(z,0)])
for(x=f.gG(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.c(y,x)
w=y[x]
if(!this.a.M(a,J.dX(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.a(e)+" "+w+'="'+H.a(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.w(a).$iscA)this.aB(a.content)}},
hu:{"^":"q;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cj(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.W(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.dI(z)}catch(w){H.at(w)
v=z
if(x){u=J.d(v)
if(u.ga9(v)!=null){u.ga9(v)
u.ga9(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
fG:{"^":"h+ee;"},
fH:{"^":"h+i;"},
fI:{"^":"fH+j;"},
fJ:{"^":"h+i;"},
fK:{"^":"fJ+j;"},
fN:{"^":"h+i;"},
fO:{"^":"fN+j;"},
fS:{"^":"h+i;"},
fT:{"^":"fS+j;"},
fY:{"^":"h+F;"},
fZ:{"^":"h+F;"},
h_:{"^":"h+i;"},
h0:{"^":"h_+j;"},
h1:{"^":"h+i;"},
h2:{"^":"h1+j;"},
h5:{"^":"h+i;"},
h6:{"^":"h5+j;"},
h8:{"^":"h+F;"},
cZ:{"^":"S+i;"},
d_:{"^":"cZ+j;"},
hd:{"^":"h+i;"},
he:{"^":"hd+j;"},
hh:{"^":"h+F;"},
hn:{"^":"h+i;"},
ho:{"^":"hn+j;"},
d1:{"^":"S+i;"},
d2:{"^":"d1+j;"},
hp:{"^":"h+i;"},
hq:{"^":"hp+j;"},
hv:{"^":"h+i;"},
hw:{"^":"hv+j;"},
hx:{"^":"h+i;"},
hy:{"^":"hx+j;"},
hz:{"^":"h+i;"},
hA:{"^":"hz+j;"},
hB:{"^":"h+i;"},
hC:{"^":"hB+j;"},
hD:{"^":"h+i;"},
hE:{"^":"hD+j;"}}],["","",,P,{"^":"",
G:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.aG)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
hL:function(a,b){var z={}
a.C(0,new P.hM(z))
return z},
hM:{"^":"q;a",
$2:function(a,b){this.a[a]=b}},
ca:{"^":"al;a,b",
ga4:function(){var z,y
z=this.b
y=H.bH(z,"i",0)
return new H.eP(new H.by(z,new P.eu(),[y]),new P.ev(),[y,null])},
j:function(a,b,c){var z=this.ga4()
J.dS(z.b.$1(J.av(z.a,b)),c)},
gi:function(a){return J.K(this.ga4().a)},
h:function(a,b){var z=this.ga4()
return z.b.$1(J.av(z.a,b))},
gw:function(a){var z=P.ck(this.ga4(),!1,W.y)
return new J.be(z,z.length,0,null,[H.C(z,0)])},
$asal:function(){return[W.y]},
$asi:function(){return[W.y]},
$asf:function(){return[W.y]},
$asb2:function(){return[W.y]}},
eu:{"^":"q;",
$1:function(a){return!!J.w(a).$isy}},
ev:{"^":"q;",
$1:function(a){return H.i1(a,"$isy")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",h7:{"^":"e;$ti"},T:{"^":"h7;$ti"}}],["","",,P,{"^":"",iF:{"^":"u;l:x=,m:y=","%":"SVGFEBlendElement"},iG:{"^":"u;l:x=,m:y=","%":"SVGFEColorMatrixElement"},iH:{"^":"u;l:x=,m:y=","%":"SVGFEComponentTransferElement"},iI:{"^":"u;l:x=,m:y=","%":"SVGFECompositeElement"},iJ:{"^":"u;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},iK:{"^":"u;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},iL:{"^":"u;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},iM:{"^":"u;l:x=,m:y=","%":"SVGFEFloodElement"},iN:{"^":"u;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},iO:{"^":"u;l:x=,m:y=","%":"SVGFEImageElement"},iP:{"^":"u;l:x=,m:y=","%":"SVGFEMergeElement"},iQ:{"^":"u;l:x=,m:y=","%":"SVGFEMorphologyElement"},iR:{"^":"u;l:x=,m:y=","%":"SVGFEOffsetElement"},iS:{"^":"u;l:x=,m:y=,H:z=","%":"SVGFEPointLightElement"},iT:{"^":"u;l:x=,m:y=","%":"SVGFESpecularLightingElement"},iU:{"^":"u;l:x=,m:y=,H:z=","%":"SVGFESpotLightElement"},iV:{"^":"u;l:x=,m:y=","%":"SVGFETileElement"},iW:{"^":"u;l:x=,m:y=","%":"SVGFETurbulenceElement"},j_:{"^":"u;l:x=,m:y=","%":"SVGFilterElement"},j0:{"^":"ae;l:x=,m:y=","%":"SVGForeignObjectElement"},eC:{"^":"ae;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ae:{"^":"u;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},j8:{"^":"ae;l:x=,m:y=","%":"SVGImageElement"},jd:{"^":"fV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.ch]},
$isf:1,
$asf:function(){return[P.ch]},
$asj:function(){return[P.ch]},
"%":"SVGLengthList"},jj:{"^":"u;l:x=,m:y=","%":"SVGMaskElement"},jy:{"^":"h4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cr]},
$isf:1,
$asf:function(){return[P.cr]},
$asj:function(){return[P.cr]},
"%":"SVGNumberList"},jD:{"^":"u;l:x=,m:y=","%":"SVGPatternElement"},jF:{"^":"h;l:x=,m:y=","%":"SVGPoint"},jG:{"^":"h;i:length=","%":"SVGPointList"},jH:{"^":"h;l:x=,m:y=","%":"SVGRect"},jI:{"^":"eC;l:x=,m:y=","%":"SVGRectElement"},ct:{"^":"u;",$isct:1,"%":"SVGScriptElement"},jS:{"^":"hj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$asj:function(){return[P.m]},
"%":"SVGStringList"},u:{"^":"y;",
gan:function(a){return new P.ca(a,new W.B(a))},
gF:function(a){var z,y
z=document.createElement("div")
y=a.cloneNode(!0)
new W.cQ(z,z.children).I(0,J.dG(y))
return z.innerHTML},
sF:function(a,b){this.ab(a,b)},
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.v([],[W.co])
z.push(W.cS(null))
z.push(W.d0())
z.push(new W.hk())
c=new W.d3(new W.cp(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).cr(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.B(w)
u=z.gO(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isu:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},jT:{"^":"ae;l:x=,m:y=","%":"SVGSVGElement"},ft:{"^":"ae;","%":"SVGTextPathElement;SVGTextContentElement"},jX:{"^":"ft;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},k2:{"^":"hs;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cC]},
$isf:1,
$asf:function(){return[P.cC]},
$asj:function(){return[P.cC]},
"%":"SVGTransformList"},k6:{"^":"ae;l:x=,m:y=","%":"SVGUseElement"},fU:{"^":"h+i;"},fV:{"^":"fU+j;"},h3:{"^":"h+i;"},h4:{"^":"h3+j;"},hi:{"^":"h+i;"},hj:{"^":"hi+j;"},hr:{"^":"h+i;"},hs:{"^":"hr+j;"}}],["","",,P,{"^":"",id:{"^":"h;i:length=","%":"AudioBuffer"},ie:{"^":"fF;",
h:function(a,b){return P.G(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gG:function(a){var z=H.v([],[P.m])
this.C(a,new P.e5(z))
return z},
gi:function(a){return a.size},
$asF:function(){return[P.m,null]},
"%":"AudioParamMap"},e5:{"^":"q;a",
$2:function(a,b){return this.a.push(a)}},ig:{"^":"S;i:length=","%":"AudioTrackList"},e6:{"^":"S;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},jA:{"^":"e6;i:length=","%":"OfflineAudioContext"},fF:{"^":"h+F;"}}],["","",,P,{"^":"",jJ:{"^":"h;",
b_:function(a,b){return a.activeTexture(b)},
b1:function(a,b,c){return a.attachShader(b,c)},
b2:function(a,b,c){return a.bindBuffer(b,c)},
b3:function(a,b,c){return a.bindFramebuffer(b,c)},
b4:function(a,b,c){return a.bindTexture(b,c)},
b5:function(a,b){return a.blendEquation(b)},
b6:function(a,b,c){return a.blendFunc(b,c)},
b7:function(a,b,c,d){return a.bufferData(b,c,d)},
b8:function(a,b){return a.checkFramebufferStatus(b)},
b9:function(a,b){return a.clear(b)},
ba:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bc:function(a,b){return a.compileShader(b)},
bd:function(a){return a.createBuffer()},
be:function(a){return a.createFramebuffer()},
bf:function(a){return a.createProgram()},
bg:function(a,b){return a.createShader(b)},
bh:function(a){return a.createTexture()},
bi:function(a,b){return a.depthMask(b)},
bj:function(a,b){return a.disable(b)},
bk:function(a,b,c,d){return a.drawArrays(b,c,d)},
bl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bm:function(a,b){return a.enable(b)},
bn:function(a,b){return a.enableVertexAttribArray(b)},
bp:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aa:function(a){return P.G(a.getContextAttributes())},
at:function(a){return a.getError()},
au:function(a,b){return a.getExtension(b)},
av:function(a,b){return a.getParameter(b)},
aw:function(a,b){return a.getProgramInfoLog(b)},
ax:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bq:function(a,b){return a.linkProgram(b)},
aC:function(a,b,c){return a.shaderSource(b,c)},
aE:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bs:function(a,b,c,d){return a.texParameterf(b,c,d)},
bt:function(a,b,c,d){return a.texParameteri(b,c,d)},
bu:function(a,b,c){return a.uniform1f(b,c)},
bv:function(a,b,c){return a.uniform1fv(b,c)},
bw:function(a,b,c){return a.uniform1i(b,c)},
bx:function(a,b,c){return a.uniform1iv(b,c)},
by:function(a,b,c){return a.uniform2fv(b,c)},
bz:function(a,b,c){return a.uniform3fv(b,c)},
bA:function(a,b,c){return a.uniform4fv(b,c)},
bB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bE:function(a,b){return a.useProgram(b)},
bF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
br:function(a,b,c,d,e,f,g,h){a.readPixels(b,c,d,e,f,g,h)},
"%":"WebGLRenderingContext"},jK:{"^":"h;",
cp:function(a,b){return a.beginTransformFeedback(b)},
cq:function(a,b){return a.bindVertexArray(b)},
cs:function(a){return a.createVertexArray()},
ct:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cu:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cv:function(a){return a.endTransformFeedback()},
cJ:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
cM:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
cN:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b_:function(a,b){return a.activeTexture(b)},
b1:function(a,b,c){return a.attachShader(b,c)},
b2:function(a,b,c){return a.bindBuffer(b,c)},
b3:function(a,b,c){return a.bindFramebuffer(b,c)},
b4:function(a,b,c){return a.bindTexture(b,c)},
b5:function(a,b){return a.blendEquation(b)},
b6:function(a,b,c){return a.blendFunc(b,c)},
b7:function(a,b,c,d){return a.bufferData(b,c,d)},
b8:function(a,b){return a.checkFramebufferStatus(b)},
b9:function(a,b){return a.clear(b)},
ba:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bc:function(a,b){return a.compileShader(b)},
bd:function(a){return a.createBuffer()},
be:function(a){return a.createFramebuffer()},
bf:function(a){return a.createProgram()},
bg:function(a,b){return a.createShader(b)},
bh:function(a){return a.createTexture()},
bi:function(a,b){return a.depthMask(b)},
bj:function(a,b){return a.disable(b)},
bk:function(a,b,c,d){return a.drawArrays(b,c,d)},
bl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bm:function(a,b){return a.enable(b)},
bn:function(a,b){return a.enableVertexAttribArray(b)},
bp:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aa:function(a){return P.G(a.getContextAttributes())},
at:function(a){return a.getError()},
au:function(a,b){return a.getExtension(b)},
av:function(a,b){return a.getParameter(b)},
aw:function(a,b){return a.getProgramInfoLog(b)},
ax:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bq:function(a,b){return a.linkProgram(b)},
aC:function(a,b,c){return a.shaderSource(b,c)},
aE:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bs:function(a,b,c,d){return a.texParameterf(b,c,d)},
bt:function(a,b,c,d){return a.texParameteri(b,c,d)},
bu:function(a,b,c){return a.uniform1f(b,c)},
bv:function(a,b,c){return a.uniform1fv(b,c)},
bw:function(a,b,c){return a.uniform1i(b,c)},
bx:function(a,b,c){return a.uniform1iv(b,c)},
by:function(a,b,c){return a.uniform2fv(b,c)},
bz:function(a,b,c){return a.uniform3fv(b,c)},
bA:function(a,b,c){return a.uniform4fv(b,c)},
bB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bE:function(a,b){return a.useProgram(b)},
bF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
br:function(a,b,c,d,e,f,g,h){a.readPixels(b,c,d,e,f,g,h)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",jQ:{"^":"hg;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.t(b,a,null,null,null))
return P.G(a.item(b))},
j:function(a,b,c){throw H.b(P.p("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bs]},
$isf:1,
$asf:function(){return[P.bs]},
$asj:function(){return[P.bs]},
"%":"SQLResultSetRowList"},hf:{"^":"h+i;"},hg:{"^":"hf+j;"}}],["","",,G,{"^":"",
fD:function(a){var z,y,x,w
z=H.v(a.split("\n"),[P.m])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.c(z,y)
w+=H.a(z[y])
if(y>=z.length)return H.c(z,y)
z[y]=w}return C.b.a8(z,"\n")},
cR:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bg(a,b)
z.aC(a,y,c)
z.bc(a,y)
x=z.az(a,y,35713)
if(x!=null&&J.J(x,!1)){w=z.ay(a,y)
P.M("E:Compilation failed:")
P.M("E:"+G.fD(c))
P.M("E:Failure:")
P.M(C.h.u("E:",w))
throw H.b(w)}return y},
fv:function(a){switch(a){case 6409:return 1
case 6410:return 2
case 6407:return 3
case 6408:return 4
default:return-1}},
fP:function(a){switch(a){case 6409:return"GL_LUMINANCE"
case 6410:return"GL_LUMINANCE_ALPHA"
case 6407:return"GL_RGB"
case 6408:return"GL_RGBA"
default:return H.a(a)}},
ht:function(a){switch(a){case 5121:return"GL_UNSIGNED_BYTE"
default:return H.a(a)}},
cc:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bb(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bc(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.c(a,y)
v=J.bR(a[y])
if(z>=w)return H.c(b,z)
b[z]=v}return b},
ex:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bb(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x;++z
if(y>=a.length)return H.c(a,y)
x=J.bc(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
ey:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bb(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bc(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.bR(a[y])
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.dK(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
ew:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.au(a[y],0)
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.au(a[y],1)
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.au(a[y],2)
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.au(a[y],3)
if(z>=w)return H.c(b,z)
b[z]=x}return b},
fQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ak(z,z.r,null,null,[H.C(z,0)]),y.c=z.e,x=b.x,w=[[P.f,P.W]],v=[P.aq],u=[T.cP],t=[T.P],s=[T.U];y.n();){r=y.d
if(!x.a6(0,r)){q="Dropping unnecessary attribute: "+H.a(r)
if($.d9>0)H.b7("I: "+q)
continue}p=z.h(0,r)
switch($.$get$L().h(0,r).a){case"vec2":b.V(r,G.ex(H.aF(p,"$isf",s,"$asf"),null),2)
break
case"vec3":b.V(r,G.cc(H.aF(p,"$isf",t,"$asf"),null),3)
break
case"vec4":b.V(r,G.ey(H.aF(p,"$isf",u,"$asf"),null),4)
break
case"float":b.V(r,new Float32Array(H.b3(H.aF(p,"$isf",v,"$asf"))),1)
break
case"uvec4":b.V(r,G.ew(H.aF(p,"$isf",w,"$asf"),null),4)
break}}},
cm:{"^":"e;"},
e8:{"^":"e;a,b",
bo:function(a,b,c){J.dD(this.a,b)
if(c>0)J.e2(this.a,b,c)},
bG:function(a,b,c,d,e,f,g,h){J.b8(this.a,34962,b)
J.e3(this.a,c,d,e,!1,g,h)}},
eA:{"^":"e;a,b,c",
bZ:function(a){this.b=G.fv(this.a)},
k:function(a){return"FB-FMT: "+G.fP(this.a)+" ["+H.a(this.b)+"] "+G.ht(this.c)},
q:{
ce:function(a){var z=new G.eA(J.bS(a.a,35739),null,J.bS(a.a,35738))
z.bZ(a)
return z}}},
cd:{"^":"e;a,b,c,d,e",
aL:function(a,b,c,d,e){var z,y,x
z=this.a
y=J.dt(z.a)
this.b=y
J.a4(z.a,36160,y)
y=this.c
if(y!=null){y=y.b
J.bP(z.a,36160,36064,3553,y,0)}y=this.d
if(y!=null){y=y.b
J.bP(z.a,36160,36096,3553,y,0)}x=J.dn(z.a,36160)
if(x!==36053)throw H.b("Error Incomplete Framebuffer: "+H.a(x))
J.a4(z.a,36160,null)},
aH:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.a4(z.a,36160,y)
J.e4(z.a,b,c,d,e)
if(a!==0)J.dp(z.a,a)},
q:{
ez:function(a,b,c,d,e){var z=new G.cd(a,null,b,c,d)
z.aL(a,b,c,d,!1)
return z}}},
et:{"^":"e;a,b,c,d"},
eB:{"^":"e;a,b,c,d,e",
aK:function(a){switch($.$get$L().h(0,a).a){case"vec2":this.e.j(0,a,H.v([],[T.U]))
break
case"vec3":this.e.j(0,a,H.v([],[T.P]))
break
case"vec4":this.e.j(0,a,H.v([],[T.cP]))
break
case"float":this.e.j(0,a,H.v([],[P.aq]))
break
case"uvec4":this.e.j(0,a,H.v([],[[P.f,P.W]]))
break}},
bV:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].a5(0))},
bW:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].a5(0))},
bX:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.et(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].a5(0))},
c_:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.v(y,[P.W])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.c(y,u)
t=y[u]
s=t.gcS(t)
if(v>=w)return H.c(x,v)
x[v]=s
s=v+1
r=t.gcT(t)
if(s>=w)return H.c(x,s)
x[s]=r
r=v+2
s=t.gcU(t)
if(r>=w)return H.c(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.c(x,v)
x[v]=s
r=v+1
if(r>=w)return H.c(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.c(x,r)
x[r]=p
r=v+3
if(r>=w)return H.c(x,r)
x[r]=s
s=v+4
if(s>=w)return H.c(x,s)
x[s]=p
p=v+5
if(p>=w)return H.c(x,p)
x[p]=q.d
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ak(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.n();){w=x.d
v=$.$get$L().h(0,w).a
z.push(H.a(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.a8(z," ")}},
eT:{"^":"cm;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aI:function(a,b,c){var z,y
C.h.aQ(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.b8(z.a,34962,y)
J.bO(z.a,34962,b,35048)},
c0:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
V:function(a,b,c){var z,y,x,w,v
z=J.dr(a,0)===105
if(z&&this.z===0)this.z=C.a.ae(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.b9(x.a))
this.aI(a,b,c)
w=$.$get$L().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.aJ(x.a,this.e)
x.bo(0,v,z?1:0)
x.bG(0,y.h(0,a),v,w.aM(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ak(z,z.r,null,null,[H.C(z,0)]),x.c=z.e;x.n();){w=x.d
y.push(H.a(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.a8(y,"  ")}},
fe:{"^":"cm;d,e,f,r,x,y,z,Q,ch,a,b,c",
c2:function(a,b,c,d){var z,y,x,w,v,u
for(z=this.e.d,y=this.y,x=this.d,w=this.r,v=0;!1;++v){if(v>=0)return H.c(z,v)
u=z[v]
y.j(0,u,J.bT(x.a,w,u))}for(z=this.f.d,v=0;!1;++v){if(v>=0)return H.c(z,v)
u=z[v]
y.j(0,u,J.bT(x.a,w,u))}},
c6:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ak(y,y.r,null,null,[H.C(y,0)]),w.c=y.e;w.n();){v=w.d
if(!z.a6(0,v))x.push(v)}for(z=this.x,y=new P.bB(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.n();){v=y.d
if(!z.B(0,v))x.push(v)}return x},
c7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=Date.now()
for(y=b.gG(b),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=0;y.n();){t=y.gt(y)
switch(t.bb(0,0)){case 117:if(w.a6(0,t)){s=b.h(0,t)
if(v.a6(0,t))H.b7("E:"+(H.a(t)+" : group ["+H.a(a)+"] overwrites ["+H.a(t)+"]"))
v.j(0,t,a)
r=$.$get$L().h(0,t)
if(r==null)H.H("unknown "+H.a(t))
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bd(x.a,q,s)
else J.e0(x.a,q,s)
break
case"float":if(r.c===0)J.dZ(x.a,q,s)
else J.e_(x.a,q,s)
break
case"mat4":if(r.c===0){p=s.ga1(s)
J.c_(x.a,q,!1,p)}else J.c_(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=s.ga1(s)
J.bZ(x.a,q,!1,p)}else J.bZ(x.a,q,!1,s)
break
case"vec4":if(r.c===0){p=s.ga1(s)
J.bY(x.a,q,p)}else J.bY(x.a,q,s)
break
case"vec3":if(r.c===0){p=s.ga1(s)
J.bX(x.a,q,p)}else J.bX(x.a,q,s)
break
case"vec2":if(r.c===0){p=s.ga1(s)
J.bW(x.a,q,p)}else J.bW(x.a,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.x(p)
J.bM(x.a,33984+p)
p=s.c1()
J.aI(x.a,3553,p)
p=this.ch
J.bd(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.u()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.x(p)
J.bM(x.a,33984+p)
p=s.c1()
J.aI(x.a,34067,p)
p=this.ch
J.bd(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.u()
this.ch=p+1
break
default:H.b7("Error: unknow uniform type: "+p)}++u}break
case 99:o=b.h(0,t)
switch(t){case"cDepthTest":J.dy(x.a,2929)
break
case"cStencilFunc":o.gcA()
J.ba(x.a,2960)
p=o.gcA()
n=o.gcZ(o)
m=o.gcX(o)
J.dU(x.a,p,n,m)
break
case"cDepthWrite":J.dx(x.a,o)
break
case"cBlendEquation":o.gcw()
J.ba(x.a,3042)
p=o.gcO()
n=o.gcW()
J.dm(x.a,p,n)
n=o.gcw()
J.dl(x.a,n)
break}++u
break}}l=P.ek(0,0,0,Date.now()-new P.c7(z,!1).a,0,0)
""+u
l.k(0)},
bY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.e1(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aW()}for(x=0;!1;++x){if(x>=0)return H.c(b,x)
w=b[x]
this.c7(w.gA(w),w.cP())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aR()}for(v=a.cy,u=new H.ak(v,v.r,null,null,[H.C(v,0)]),u.c=v.e;u.n();)y.am(0,u.d)
t=this.c6()
if(t.length!==0)P.M("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.a(t)))
J.aJ(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.c0()
u=a.Q
r=a.z
if(s)J.dk(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.dC(q,y,v,u,0,r)
else J.dB(q,y,v,u,0)}else{u=z.a
if(r>1)J.dA(u,y,0,v,r)
else J.dz(u,y,0,v)}if(s)J.dE(z.a)},
aJ:function(a,b){return this.bY(a,b,null)},
q:{
ff:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.ay(null,null,null,P.m)
y=c.b
x=d.b
w=c.f
v=J.du(b.a)
u=G.cR(b.a,35633,y)
J.bN(b.a,v,u)
t=G.cR(b.a,35632,x)
J.bN(b.a,v,t)
if(w.length>0)J.dY(b.a,v,w,35980)
J.dR(b.a,v)
if(J.dQ(b.a,v,35714)!==!0)H.H(J.dP(b.a,v))
z=new G.fe(b,c,d,v,P.br(c.c,null),P.a_(),P.a_(),z,null,a,!1,!0)
z.c2(a,b,c,d)
return z}}},
o:{"^":"e;a,b,c",
aM:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fl:{"^":"e;a,b,c,d,e,f,r,x",
bU:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}H.fo(z,J.hG())},
c3:function(a,b){this.b=this.c8(!0,a,b)},
aN:function(a){return this.c3(a,null)},
c8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.aG)(z),++u){t=z[u]
s=$.$get$L().h(0,t)
w.push("layout (location="+H.a(v.h(0,t))+") in "+s.a+" "+H.a(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.c(z,u)
q=z[u]
s=$.$get$L().h(0,q)
w.push(r+" "+s.a+" "+H.a(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.aG)(z),++u){q=z[u]
s=$.$get$L().h(0,q)
w.push(r+" "+s.a+" "+H.a(q)+";")}w.push("")
for(z=this.d,u=0;!1;++u){if(u>=0)return H.c(z,u)
q=z[u]
s=$.$get$L().h(0,q)
y=s.c
p=y===0?"":"["+y+"]"
w.push("uniform "+s.a+" "+H.a(q)+p+";")}w.push("")
w.push("void main(void) {")
C.b.I(w,b)
w.push("}")
return C.b.a8(w,"\n")},
q:{
cu:function(a){return new G.fl(a,null,[],[],[],[],0,P.a_())}}},
fw:{"^":"e;a,b,c,d,e,f,r"},
fu:{"^":"e;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fy:{"^":"fu;f,r,x,a,b,c,d,e",
c5:function(a,b,c,d,e,f){var z,y,x,w
z=this.d
y=this.c
J.aI(z.a,y,this.b)
J.dW(z.a,3553,1,this.x,this.f,this.r)
x=this.e
w=x.e
if(w!==1)J.dV(z.a,y,34046,w)
w=x.r
J.aK(z.a,y,10240,w)
w=x.f
J.aK(z.a,y,10241,w)
if(x.b){J.aK(z.a,y,10242,33071)
J.aK(z.a,y,10243,33071)}x.c
J.dN(z.a)
J.aI(z.a,y,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"},
q:{
bx:function(a,b,c,d,e,f){var z=new G.fy(c,d,e,b,J.dv(a.a),3553,a,f)
z.c5(a,b,c,d,e,f)
return z}}}}],["","",,A,{"^":"",
dd:function(a){var z,y
z=C.K.cz(a,0,new A.hT())
if(typeof z!=="number")return H.x(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hT:{"^":"q;",
$2:function(a,b){var z,y
z=J.I(a,J.ab(b))
if(typeof z!=="number")return H.x(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",U:{"^":"e;a",
a0:function(a,b){var z=this.a
z[0]=a
z[1]=b},
T:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.a(z[0])+","+H.a(z[1])+"]"},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.U){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.dd(this.a)},
u:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.U(z)
y.T(this)
x=b.gcQ()
z[0]=C.f.u(z[0],x.h(0,0))
z[1]=C.f.u(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.c(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a5:function(a){var z=new T.U(new Float32Array(2))
z.T(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},P:{"^":"e;a",
U:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
T:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.a(z[0])+","+H.a(z[1])+","+H.a(z[2])+"]"},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.dd(this.a)},
u:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.P(z)
y.T(this)
x=b.gcR()
z[0]=C.f.u(z[0],x.h(0,0))
z[1]=C.f.u(z[1],x.h(0,1))
z[2]=C.f.u(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.c(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
a5:function(a){var z=new T.P(new Float32Array(3))
z.T(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gH:function(a){return this.a[2]}},cP:{"^":"e;"}}],["","",,B,{"^":"",
er:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=a.a
y=a.b
J.a4(z.a,36160,y)
x=G.ce(z)
P.M("READ FORMAT "+x.k(0))
y=x.b
if(typeof y!=="number")return y.bL()
w=new Uint8Array(y*b*c)
J.bU(z.a,0,0,b,c,x.a,x.c,w)
J.a4(z.a,36160,null)
z=w.length
y=b*c
v=C.a.ae(z,y)
P.M("Buffer length: "+z+" channels: "+v)
for(u=0,t=0,s=0,r=0;r<z;r+=v){u+=w[r]
q=r+1
if(q>=z)return H.c(w,q)
t+=w[q]
q=r+2
if(q>=z)return H.c(w,q)
s+=w[q]}return H.a(u/y)+" "+H.a(t/y)+" "+H.a(s/y)},
es:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
y=a.b
J.a4(z.a,36160,y)
x=G.ce(z)
P.M("READ FORMAT "+x.k(0))
if(!J.J(x.c,5126))P.M("unexpcted non float type: "+x.k(0))
y=x.b
if(typeof y!=="number")return y.bL()
w=new Float32Array(y*b*c)
J.bU(z.a,0,0,b,c,x.a,5126,w)
J.a4(z.a,36160,null)
z=w.length
y=b*c
v=C.a.ae(z,y)
P.M("Buffer length: "+z+" channels: "+v)
for(u=0,t=0,s=0,r=0,q=0;q<z;q+=v){u+=w[q]
p=q+1
if(p>=z)return H.c(w,p)
t+=w[p]
p=q+2
if(p>=z)return H.c(w,p)
s+=w[p]
p=q+3
if(p>=z)return H.c(w,p)
r+=w[p]}return H.a(u/y)+" "+H.a(t/y)+" "+H.a(s/y)+" "+H.a(r/y)},
de:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=document
y=z.querySelector("#results")
x=z.querySelector("#webgl-canvas")
z=J.d(x)
z.sE(x,500)
z.sD(x,500)
w=new G.e8(null,x)
z=J.dL(x,"webgl2",P.ci(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
w.a=z
if(z==null)H.H(P.eq('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
v="ChronosGL Config: "+H.a(J.dM(z))
if($.d9>0)P.M("I: "+v)
J.dq(z,0,0,0,1)
J.ba(z,2929)
u=G.ff("program",w,$.$get$d8(),$.$get$d7())
z=new T.P(new Float32Array(3))
z.U(-1,-1,0)
v=new T.P(new Float32Array(3))
v.U(1,-1,0)
t=new T.P(new Float32Array(3))
t.U(1,1,0)
s=new T.P(new Float32Array(3))
s.U(-1,1,0)
r=new T.U(new Float32Array(2))
r.a0(0,0)
q=new T.U(new Float32Array(2))
q.a0(1,0)
p=new T.U(new Float32Array(2))
p.a0(1,1)
o=new T.U(new Float32Array(2))
o.a0(0,1)
n=new T.P(new Float32Array(3))
n.U(0,0,1)
m=[]
l=new G.eB(!1,[],[],m,P.a_())
l.aK("aTexUV")
l.bX([z,v,t,s])
l.bV("aTexUV",[r,q,p,o])
l.aK("aNormal")
l.bW("aNormal",[n,n,n,n])
z=u.d
v=u.e.x
t=P.a_()
s=J.dw(z.a)
k=new G.eT(z,s,4,t,v,null,0,-1,null,null,P.a_(),"meshdata:quad",!1,!0)
m=G.cc(m,null)
t.j(0,"aPosition",J.b9(z.a))
k.ch=m
k.aI("aPosition",m,3)
j=$.$get$L().h(0,"aPosition")
if(j==null)H.H("Unknown canonical aPosition")
i=v.h(0,"aPosition")
J.aJ(z.a,s)
z.bo(0,i,0)
z.bG(0,t.h(0,"aPosition"),i,j.aM(),5126,!1,0,0)
v=l.c_()
k.y=J.b9(z.a)
t=k.ch.length
if(t<768){k.cx=new Uint8Array(H.b3(v))
k.Q=5121}else if(t<196608){k.cx=new Uint16Array(H.b3(v))
k.Q=5123}else{k.cx=new Uint32Array(H.b3(v))
k.Q=5125}J.aJ(z.a,s)
v=k.y
t=k.cx
J.b8(z.a,34963,v)
J.bO(z.a,34963,t,35048)
G.fQ(l,k)
z=$.$get$cB()
v=G.bx(w,"frame::color",500,500,32856,z)
t=G.bx(w,"frame::depth",500,500,33190,z)
h=new G.cd(w,null,v,t,null)
h.aL(w,v,t,null,!1)
t=J.d(y)
t.sF(y,J.I(t.gF(y),"<h3>Drawing into default format FB</h3>"))
h.aH(17664,0,0,500,500)
u.aJ(k,[])
t.sF(y,J.I(t.gF(y),B.er(h,500,500)+"\n"))
t.sF(y,J.I(t.gF(y),"<h3>Drawing into float format FB</h3>"))
if(J.dO(w.a,"EXT_color_buffer_float")==null)t.sF(y,J.I(t.gF(y),"extension not available: EXT_color_buffer_float"))
h=G.ez(w,G.bx(w,"float",500,500,34836,z),null,null,!1)
h.aH(17664,0,0,500,500)
u.aJ(k,[])
t.sF(y,J.I(t.gF(y),B.es(h,500,500)+"\n"))}},1]]
setupProgram(dart,0,0)
J.w=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cf.prototype
return J.eJ.prototype}if(typeof a=="string")return J.ai.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.eI.prototype
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.e)return a
return J.aE(a)}
J.hQ=function(a){if(typeof a=="number")return J.ah.prototype
if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.e)return a
return J.aE(a)}
J.a3=function(a){if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.e)return a
return J.aE(a)}
J.aD=function(a){if(a==null)return a
if(a.constructor==Array)return J.ag.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.e)return a
return J.aE(a)}
J.bG=function(a){if(typeof a=="number")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.aC.prototype
return a}
J.hR=function(a){if(typeof a=="number")return J.ah.prototype
if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.aC.prototype
return a}
J.da=function(a){if(typeof a=="string")return J.ai.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.aC.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aj.prototype
return a}if(a instanceof P.e)return a
return J.aE(a)}
J.I=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hQ(a).u(a,b)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).J(a,b)}
J.E=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.bG(a).Z(a,b)}
J.aH=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.bG(a).N(a,b)}
J.au=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.i3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a3(a).h(a,b)}
J.dj=function(a,b,c){return J.d(a).cg(a,b,c)}
J.bM=function(a,b){return J.d(a).b_(a,b)}
J.bN=function(a,b,c){return J.d(a).b1(a,b,c)}
J.dk=function(a,b){return J.d(a).cp(a,b)}
J.b8=function(a,b,c){return J.d(a).b2(a,b,c)}
J.a4=function(a,b,c){return J.d(a).b3(a,b,c)}
J.aI=function(a,b,c){return J.d(a).b4(a,b,c)}
J.aJ=function(a,b){return J.d(a).cq(a,b)}
J.dl=function(a,b){return J.d(a).b5(a,b)}
J.dm=function(a,b,c){return J.d(a).b6(a,b,c)}
J.bO=function(a,b,c,d){return J.d(a).b7(a,b,c,d)}
J.dn=function(a,b){return J.d(a).b8(a,b)}
J.dp=function(a,b){return J.aD(a).b9(a,b)}
J.dq=function(a,b,c,d,e){return J.d(a).ba(a,b,c,d,e)}
J.dr=function(a,b){return J.da(a).bb(a,b)}
J.ds=function(a,b){return J.hR(a).S(a,b)}
J.b9=function(a){return J.d(a).bd(a)}
J.dt=function(a){return J.d(a).be(a)}
J.du=function(a){return J.d(a).bf(a)}
J.dv=function(a){return J.d(a).bh(a)}
J.dw=function(a){return J.d(a).cs(a)}
J.dx=function(a,b){return J.d(a).bi(a,b)}
J.dy=function(a,b){return J.d(a).bj(a,b)}
J.dz=function(a,b,c,d){return J.d(a).bk(a,b,c,d)}
J.dA=function(a,b,c,d,e){return J.d(a).ct(a,b,c,d,e)}
J.dB=function(a,b,c,d,e){return J.d(a).bl(a,b,c,d,e)}
J.dC=function(a,b,c,d,e,f){return J.d(a).cu(a,b,c,d,e,f)}
J.av=function(a,b){return J.aD(a).p(a,b)}
J.ba=function(a,b){return J.d(a).bm(a,b)}
J.dD=function(a,b){return J.d(a).bn(a,b)}
J.dE=function(a){return J.d(a).cv(a)}
J.dF=function(a,b){return J.aD(a).C(a,b)}
J.bP=function(a,b,c,d,e,f){return J.d(a).bp(a,b,c,d,e,f)}
J.bQ=function(a){return J.d(a).gco(a)}
J.dG=function(a){return J.d(a).gan(a)}
J.ab=function(a){return J.w(a).gv(a)}
J.X=function(a){return J.aD(a).gw(a)}
J.K=function(a){return J.a3(a).gi(a)}
J.dH=function(a){return J.d(a).gcE(a)}
J.dI=function(a){return J.d(a).gaq(a)}
J.dJ=function(a){return J.d(a).gcI(a)}
J.dK=function(a){return J.d(a).gbI(a)}
J.bb=function(a){return J.d(a).gl(a)}
J.bc=function(a){return J.d(a).gm(a)}
J.bR=function(a){return J.d(a).gH(a)}
J.dL=function(a,b,c){return J.d(a).bK(a,b,c)}
J.dM=function(a){return J.d(a).aa(a)}
J.dN=function(a){return J.d(a).at(a)}
J.dO=function(a,b){return J.d(a).au(a,b)}
J.bS=function(a,b){return J.d(a).av(a,b)}
J.dP=function(a,b){return J.d(a).aw(a,b)}
J.dQ=function(a,b,c){return J.d(a).ax(a,b,c)}
J.bT=function(a,b,c){return J.d(a).aA(a,b,c)}
J.dR=function(a,b){return J.d(a).bq(a,b)}
J.bU=function(a,b,c,d,e,f,g,h){return J.d(a).br(a,b,c,d,e,f,g,h)}
J.bV=function(a){return J.aD(a).cG(a)}
J.dS=function(a,b){return J.d(a).cH(a,b)}
J.dT=function(a,b){return J.d(a).sa7(a,b)}
J.dU=function(a,b,c,d){return J.d(a).aE(a,b,c,d)}
J.dV=function(a,b,c,d){return J.d(a).bs(a,b,c,d)}
J.aK=function(a,b,c,d){return J.d(a).bt(a,b,c,d)}
J.dW=function(a,b,c,d,e,f){return J.d(a).cJ(a,b,c,d,e,f)}
J.dX=function(a){return J.da(a).cL(a)}
J.aw=function(a){return J.w(a).k(a)}
J.dY=function(a,b,c,d){return J.d(a).cM(a,b,c,d)}
J.dZ=function(a,b,c){return J.d(a).bu(a,b,c)}
J.e_=function(a,b,c){return J.d(a).bv(a,b,c)}
J.bd=function(a,b,c){return J.d(a).bw(a,b,c)}
J.e0=function(a,b,c){return J.d(a).bx(a,b,c)}
J.bW=function(a,b,c){return J.d(a).by(a,b,c)}
J.bX=function(a,b,c){return J.d(a).bz(a,b,c)}
J.bY=function(a,b,c){return J.d(a).bA(a,b,c)}
J.bZ=function(a,b,c,d){return J.d(a).bB(a,b,c,d)}
J.c_=function(a,b,c,d){return J.d(a).bC(a,b,c,d)}
J.e1=function(a,b){return J.d(a).bE(a,b)}
J.e2=function(a,b,c){return J.d(a).cN(a,b,c)}
J.e3=function(a,b,c,d,e,f,g){return J.d(a).bF(a,b,c,d,e,f,g)}
J.e4=function(a,b,c,d,e){return J.d(a).bH(a,b,c,d,e)}
I.a9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bf.prototype
C.z=J.h.prototype
C.b=J.ag.prototype
C.a=J.cf.prototype
C.f=J.ah.prototype
C.h=J.ai.prototype
C.G=J.aj.prototype
C.K=H.eW.prototype
C.L=W.eY.prototype
C.t=J.f3.prototype
C.y=W.fs.prototype
C.o=J.aC.prototype
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.v(I.a9(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.I=I.a9(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.J=I.a9([])
C.m=H.v(I.a9(["bind","if","ref","repeat","syntax"]),[P.m])
C.n=H.v(I.a9(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.M=new G.o("vec3","vertex btangents",0)
C.c=new G.o("vec3","",0)
C.N=new G.o("vec4","delta from light",0)
C.l=new G.o("","",0)
C.u=new G.o("vec3","vertex coordinates",0)
C.O=new G.o("vec3","vertex binormals",0)
C.v=new G.o("vec4","for wireframe",0)
C.P=new G.o("vec4","per vertex color",0)
C.Q=new G.o("float","for normal maps",0)
C.i=new G.o("mat4","",0)
C.S=new G.o("mat4","",4)
C.R=new G.o("mat4","",128)
C.d=new G.o("float","",0)
C.T=new G.o("float","",4)
C.U=new G.o("float","depth for shadowmaps",0)
C.e=new G.o("sampler2D","",0)
C.V=new G.o("float","for bump maps",0)
C.W=new G.o("vec2","texture uvs",0)
C.X=new G.o("float","time since program start in sec",0)
C.j=new G.o("vec2","",0)
C.Y=new G.o("samplerCube","",0)
C.k=new G.o("vec4","",0)
C.Z=new G.o("vec3","vertex normals",0)
C.a_=new G.o("sampler2DShadow","",0)
C.w=new G.o("vec3","per vertex color",0)
C.x=new G.o("mat3","",0)
C.a0=new G.o("vec3","vertex tangents",0)
$.N=0
$.ac=null
$.c2=null
$.dc=null
$.d4=null
$.dg=null
$.b4=null
$.b5=null
$.bI=null
$.R=null
$.bk=null
$.c9=null
$.c8=null
$.d9=0
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
I.$lazy(y,x,w)}})(["c6","$get$c6",function(){return H.db("_$dart_dartClosure")},"bo","$get$bo",function(){return H.db("_$dart_js")},"cD","$get$cD",function(){return H.O(H.b1({
toString:function(){return"$receiver$"}}))},"cE","$get$cE",function(){return H.O(H.b1({$method$:null,
toString:function(){return"$receiver$"}}))},"cF","$get$cF",function(){return H.O(H.b1(null))},"cG","$get$cG",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cK","$get$cK",function(){return H.O(H.b1(void 0))},"cL","$get$cL",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cI","$get$cI",function(){return H.O(H.cJ(null))},"cH","$get$cH",function(){return H.O(function(){try{null.$method$}catch(z){return z.message}}())},"cN","$get$cN",function(){return H.O(H.cJ(void 0))},"cM","$get$cM",function(){return H.O(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ap","$get$ap",function(){return[]},"cT","$get$cT",function(){return P.br(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bA","$get$bA",function(){return P.a_()},"L","$get$L",function(){return P.ci(["cBlendEquation",C.l,"cDepthWrite",C.l,"cDepthTest",C.l,"cStencilFunc",C.l,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.w,"aColorAlpha",C.P,"aPosition",C.u,"aTexUV",C.W,"aNormal",C.Z,"aBinormal",C.O,"aCenter",C.v,"aPointSize",C.d,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.a0,"aBitangent",C.M,"iaRotation",C.k,"iaTranslation",C.c,"iaScale",C.c,"vColor",C.w,"vTexUV",C.j,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.u,"vPositionFromLight",C.N,"vCenter",C.v,"vDepth",C.U,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.x,"uConvolutionMatrix",C.x,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.a_,"uTexture",C.e,"uTexture2",C.e,"uTexture3",C.e,"uTexture4",C.e,"uSpecularMap",C.e,"uNormalMap",C.e,"uBumpMap",C.e,"uDepthMap",C.e,"uCubeTexture",C.Y,"uAnimationTable",C.e,"uTime",C.X,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.c,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.R,"uLightDescs",C.S,"uLightCount",C.d,"uLightTypes",C.T,"uBumpScale",C.V,"uNormalScale",C.Q])},"cB","$get$cB",function(){var z=new G.fw(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"d8","$get$d8",function(){var z=G.cu("computeVertexShader")
z.bU(["aPosition"])
z.aN(["gl_Position = vec4(aPosition, 1.0);"])
return z},"d7","$get$d7",function(){var z=G.cu("computeFragmentShader")
z.aN(["oFragColor.b = gl_FragCoord.x / 500.0;\noFragColor.g = gl_FragCoord.y / 500.0;\noFragColor.r = 0.0;\n    "])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:W.n},{func:1,ret:P.bE,args:[W.y,P.m,P.m,W.bz]},{func:1,ret:P.W,args:[,,]}]
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
if(x==y)H.i7(d||a)
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
Isolate.a9=a.a9
Isolate.a7=a.a7
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
if(typeof dartMainRunner==="function")dartMainRunner(B.de,[])
else B.de([])})})()
//# sourceMappingURL=compute.dart.js.map
