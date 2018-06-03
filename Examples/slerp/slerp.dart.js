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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.c7"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.c7"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.c7(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ao=function(){}
var dart=[["","",,H,{"^":"",l6:{"^":"d;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
cc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c9==null){H.jQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c1("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bP()]
if(v!=null)return v
v=H.jT(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$bP(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
i:{"^":"d;",
A:function(a,b){return a===b},
gv:function(a){return H.aD(a)},
k:["cw",function(a){return"Instance of '"+H.aE(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fz:{"^":"i;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isjz:1},
fB:{"^":"i;",
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isaT:1},
bQ:{"^":"i;",
gv:function(a){return 0},
k:["cz",function(a){return String(a)}]},
h5:{"^":"bQ;"},
aX:{"^":"bQ;"},
aB:{"^":"bQ;",
k:function(a){var z=a[$.$get$cB()]
return z==null?this.cz(a):J.aQ(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ax:{"^":"i;$ti",
bu:function(a,b){var z,y
if(!!a.fixed$length)H.I(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.O(a))}},
a2:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.b(y,x)
y[x]=w}return y.join(b)},
aY:function(a,b){return H.d5(a,b,null,H.C(a,0))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
gdN:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.fx())},
cq:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.I(P.p("setRange"))
P.hg(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.B()
if(typeof b!=="number")return H.u(b)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isf){x=e
w=d}else{w=y.aY(d,e).e0(0,!1)
x=0}y=J.a4(w)
v=y.gi(w)
if(typeof v!=="number")return H.u(v)
if(x+z>v)throw H.a(H.fy())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
a6:function(a,b,c,d){return this.cq(a,b,c,d,0)},
cs:function(a,b){if(!!a.immutable$list)H.I(P.p("sort"))
H.hu(a,J.jm())},
af:function(a){return this.cs(a,null)},
k:function(a){return P.bO(a,"[","]")},
gK:function(a){return new J.eR(a,a.length,0,null,[H.C(a,0)])},
gv:function(a){return H.aD(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.I(P.p("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cu(b,"newLength",null))
if(b<0)throw H.a(P.bh(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Z(a,b))
if(b>=a.length||b<0)throw H.a(H.Z(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.I(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Z(a,b))
if(b>=a.length||b<0)throw H.a(H.Z(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.A([],[H.C(a,0)])
this.si(y,z)
this.a6(y,0,a.length,a)
this.a6(y,a.length,z,b)
return y},
$isl:1,
$asl:I.ao,
$isf:1,
p:{
ay:function(a){a.fixed$length=Array
return a},
l4:[function(a,b){return J.ee(a,b)},"$2","jm",8,0,20]}},
l5:{"^":"ax;$ti"},
eR:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
az:{"^":"i;",
M:function(a,b){var z
if(typeof b!=="number")throw H.a(H.L(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaC(b)
if(this.gaC(a)===z)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
e_:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
ds:function(a,b,c){if(this.M(b,c)>0)throw H.a(H.L(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a+b},
B:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a-b},
cA:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bo(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bo(a,b)},
bo:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bm:function(a,b){var z
if(a>0)z=this.de(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
de:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a<b},
a5:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a>b},
$isah:1,
$isaM:1},
cJ:{"^":"az;",$isD:1},
fA:{"^":"az;"},
aA:{"^":"i;",
ax:function(a,b){if(b<0)throw H.a(H.Z(a,b))
if(b>=a.length)H.I(H.Z(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.a(H.Z(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cu(b,null,null))
return a+b},
dU:function(a,b,c){return H.k_(a,b,c)},
ct:function(a,b){var z=H.A(a.split(b),[P.r])
return z},
ag:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.I(H.L(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.I(H.L(c))
if(b<0)throw H.a(P.bi(b,null,null))
if(typeof c!=="number")return H.u(c)
if(b>c)throw H.a(P.bi(b,null,null))
if(c>a.length)throw H.a(P.bi(c,null,null))
return a.substring(b,c)},
cu:function(a,b){return this.ag(a,b,null)},
e2:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a7(z,0)===133){x=J.fC(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.ax(z,w)===133?J.fD(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
M:function(a,b){var z
if(typeof b!=="string")throw H.a(H.L(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.Z(a,b))
return a[b]},
$isl:1,
$asl:I.ao,
$isr:1,
p:{
cK:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fC:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.a7(a,b)
if(y!==32&&y!==13&&!J.cK(y))break;++b}return b},
fD:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.ax(a,z)
if(y!==32&&y!==13&&!J.cK(y))break}return b}}}}],["","",,H,{"^":"",
fx:function(){return new P.bX("No element")},
fy:function(){return new P.bX("Too few elements")},
hu:function(a,b){var z=J.a7(a)
if(typeof z!=="number")return z.B()
H.aV(a,0,z-1,b)},
aV:function(a,b,c,d){if(c-b<=32)H.ht(a,b,c,d)
else H.hs(a,b,c,d)},
ht:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a4(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.Z(c-b+1,6)
y=b+z
x=c-z
w=C.b.Z(b+c,2)
v=w-z
u=w+z
t=J.a4(a)
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
if(J.z(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.A(i,0))continue
if(h.O(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aL(i)
if(h.a5(i,0)){--l
continue}else{g=l-1
if(h.O(i,0)){t.j(a,k,t.h(a,m))
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
t.j(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
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
H.aV(a,b,m-2,d)
H.aV(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.z(d.$2(t.h(a,m),r),0);)++m
for(;J.z(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.z(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.z(d.$2(j,p),0))for(;!0;)if(J.z(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aO(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aV(a,m,l,d)}else H.aV(a,m,l,d)},
cE:{"^":"fv;$ti"},
cP:{"^":"cE;$ti",
gK:function(a){return new H.cQ(this,this.gi(this),0,null,[H.dW(this,"cP",0)])},
w:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.O(this))}}},
hE:{"^":"cP;a,b,c,$ti",
cS:function(a,b,c,d){},
gd4:function(){var z=J.a7(this.a)
return z},
gdf:function(){var z,y
z=J.a7(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a7(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdf()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.u(b)
y=z+b
if(!(b<0)){z=this.gd4()
if(typeof z!=="number")return H.u(z)
z=y>=z}else z=!0
if(z)throw H.a(P.v(b,this,"index",null,null))
return J.eo(this.a,y)},
e0:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a4(y)
w=x.gi(y)
if(typeof w!=="number")return w.B()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.b(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.O()
if(u<w)throw H.a(P.O(this))}return t},
p:{
d5:function(a,b,c,d){var z=new H.hE(a,b,c,[d])
z.cS(a,b,c,d)
return z}}},
cQ:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a4(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.O(z))
w=this.c
if(typeof x!=="number")return H.u(x)
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
bb:{"^":"d;$ti"}}],["","",,H,{"^":"",
jK:function(a){return init.types[a]},
dZ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$ism},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aQ(a)
if(typeof z!=="string")throw H.a(H.L(a))
return z},
aD:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
he:function(a,b){var z,y
if(typeof a!=="string")H.I(H.L(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.b(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hd:function(a){var z,y
if(typeof a!=="string")H.I(H.L(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eH(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.z||!!J.n(a).$isaX){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.a7(w,0)===36)w=C.i.cu(w,1)
r=H.by(H.ap(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
G:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hc:function(a){return a.b?H.G(a).getUTCFullYear()+0:H.G(a).getFullYear()+0},
ha:function(a){return a.b?H.G(a).getUTCMonth()+1:H.G(a).getMonth()+1},
h6:function(a){return a.b?H.G(a).getUTCDate()+0:H.G(a).getDate()+0},
h7:function(a){return a.b?H.G(a).getUTCHours()+0:H.G(a).getHours()+0},
h9:function(a){return a.b?H.G(a).getUTCMinutes()+0:H.G(a).getMinutes()+0},
hb:function(a){return a.b?H.G(a).getUTCSeconds()+0:H.G(a).getSeconds()+0},
h8:function(a){return a.b?H.G(a).getUTCMilliseconds()+0:H.G(a).getMilliseconds()+0},
u:function(a){throw H.a(H.L(a))},
b:function(a,b){if(a==null)J.a7(a)
throw H.a(H.Z(a,b))},
Z:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
z=J.a7(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.bi(b,"index",null)},
L:function(a){return new P.a8(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bf()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e4})
z.name=""}else z.toString=H.e4
return z},
e4:function(){return J.aQ(this.dartException)},
I:function(a){throw H.a(a)},
y:function(a){throw H.a(P.O(a))},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bm(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bR(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cV(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$db()
u=$.$get$dc()
t=$.$get$dd()
s=$.$get$de()
r=$.$get$di()
q=$.$get$dj()
p=$.$get$dg()
$.$get$df()
o=$.$get$dl()
n=$.$get$dk()
m=v.L(y)
if(m!=null)return z.$1(H.bR(y,m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.bR(y,m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cV(y,m))}}return z.$1(new H.hJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d1()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a8(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d1()
return a},
a5:function(a){var z
if(a==null)return new H.dE(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dE(a,null)},
jG:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
jS:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cG("Unsupported number of arguments for wrapped closure"))},
T:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jS)
a.$identity=z
return z},
f0:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isf){z.$reflectionInfo=c
x=H.hi(z).r}else x=c
w=d?Object.create(new H.hv().constructor.prototype):Object.create(new H.bI(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.as(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cA(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jK,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cy:H.bJ
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cA(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
eY:function(a,b,c,d){var z=H.bJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f_(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eY(y,!w,z,b)
if(y===0){w=$.V
$.V=J.as(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.av
if(v==null){v=H.b5("self")
$.av=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.V
$.V=J.as(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.av
if(v==null){v=H.b5("self")
$.av=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
eZ:function(a,b,c,d){var z,y
z=H.bJ
y=H.cy
switch(b?-1:a){case 0:throw H.a(H.ho("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f_:function(a,b){var z,y,x,w,v,u,t,s
z=$.av
if(z==null){z=H.b5("self")
$.av=z}y=$.cx
if(y==null){y=H.b5("receiver")
$.cx=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eZ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.V
$.V=J.as(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.V
$.V=J.as(y,1)
return new Function(z+H.c(y)+"}")()},
c7:function(a,b,c,d,e,f){var z,y
z=J.ay(b)
y=!!J.n(c).$isf?J.ay(c):c
return H.f0(a,z,y,!!d,e,f)},
jY:function(a,b){var z=J.a4(b)
throw H.a(H.cz(a,z.ag(b,3,z.gi(b))))},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.jY(a,b)},
c8:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dT:function(a,b){var z,y
if(a==null)return!1
z=H.c8(J.n(a))
if(z==null)y=!1
else y=H.dY(z,b)
return y},
ju:function(a){var z
if(a instanceof H.h){z=H.c8(J.n(a))
if(z!=null)return H.cd(z,null)
return"Closure"}return H.aE(a)},
k3:function(a){throw H.a(new P.f3(a))},
dV:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
mf:function(a,b,c){return H.aN(a["$as"+H.c(c)],H.ap(b))},
bw:function(a,b,c,d){var z=H.aN(a["$as"+H.c(c)],H.ap(b))
return z==null?null:z[d]},
dW:function(a,b,c){var z=H.aN(a["$as"+H.c(b)],H.ap(a))
return z==null?null:z[c]},
C:function(a,b){var z=H.ap(a)
return z==null?null:z[b]},
cd:function(a,b){var z=H.ar(a,b)
return z},
ar:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.by(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ar(z,b)
return H.jl(a,b)}return"unknown-reified-type"},
jl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ar(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ar(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ar(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jF(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ar(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
by:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bZ("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ar(u,c)}return w?"":"<"+z.k(0)+">"},
jJ:function(a){var z,y,x
if(a instanceof H.h){z=H.c8(J.n(a))
if(z!=null)return H.cd(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.by(a.$ti,0,null)
return y+x},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aZ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ap(a)
y=J.n(a)
if(y[b]==null)return!1
return H.dO(H.aN(y[d],z),c)},
b1:function(a,b,c,d){var z,y
if(a==null)return a
z=H.aZ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.by(c,0,null)
throw H.a(H.cz(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
dO:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
md:function(a,b,c){return a.apply(b,H.aN(J.n(b)["$as"+H.c(c)],H.ap(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aT")return!0
if('func' in b)return H.dY(a,b)
if('func' in a)return b.builtin$cls==="kX"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cd(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dO(H.aN(u,z),x)},
dN:function(a,b,c){var z,y,x,w,v
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
jv:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.ay(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
dY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.dN(x,w,!1))return!1
if(!H.dN(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.jv(a.named,b.named)},
me:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jT:function(a){var z,y,x,w,v,u
z=$.dX.$1(a)
y=$.bu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dM.$2(a,z)
if(z!=null){y=$.bu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bz(x)
$.bu[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bx[z]=x
return x}if(v==="-"){u=H.bz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e0(a,x)
if(v==="*")throw H.a(P.c1(z))
if(init.leafTags[z]===true){u=H.bz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e0(a,x)},
e0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cc(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bz:function(a){return J.cc(a,!1,null,!!a.$ism)},
jX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bz(z)
else return J.cc(z,c,null,null)},
jQ:function(){if(!0===$.c9)return
$.c9=!0
H.jR()},
jR:function(){var z,y,x,w,v,u,t,s
$.bu=Object.create(null)
$.bx=Object.create(null)
H.jM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e3.$1(v)
if(u!=null){t=H.jX(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jM:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.an(C.A,H.an(C.F,H.an(C.p,H.an(C.p,H.an(C.E,H.an(C.B,H.an(C.C(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dX=new H.jN(v)
$.dM=new H.jO(u)
$.e3=new H.jP(t)},
an:function(a,b){return a(b)||b},
k0:function(a,b,c,d){var z,y,x
z=b.d6(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.k2(a,x,x+y[0].length,c)},
k_:function(a,b,c){var z,y
z=b.gbi()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
k1:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.k0(a,b,c,d)},
k2:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hh:{"^":"d;a,b,c,d,e,f,r,x",p:{
hi:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ay(z)
y=z[0]
x=z[1]
return new H.hh(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hH:{"^":"d;a,b,c,d,e,f",
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
X:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dh:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h2:{"^":"E;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
cV:function(a,b){return new H.h2(a,b==null?null:b.method)}}},
fF:{"^":"E;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
bR:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fF(a,y,z?null:b.receiver)}}},
hJ:{"^":"E;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k4:{"^":"h:1;a",
$1:function(a){if(!!J.n(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dE:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaF:1},
h:{"^":"d;",
k:function(a){return"Closure '"+H.aE(this).trim()+"'"},
gco:function(){return this},
gco:function(){return this}},
d6:{"^":"h;"},
hv:{"^":"d6;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bI:{"^":"d6;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bI))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aD(this.a)
else y=typeof z!=="object"?J.a_(z):H.aD(z)
return(y^H.aD(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aE(z)+"'")},
p:{
bJ:function(a){return a.a},
cy:function(a){return a.c},
b5:function(a){var z,y,x,w,v
z=new H.bI("self","target","receiver","name")
y=J.ay(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eW:{"^":"E;a",
k:function(a){return this.a},
p:{
cz:function(a,b){return new H.eW("CastError: "+H.c(P.bL(a))+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")}}},
hn:{"^":"E;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
ho:function(a){return new H.hn(a)}}},
dm:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.a_(this.a)},
A:function(a,b){if(b==null)return!1
return b instanceof H.dm&&J.z(this.a,b.a)}},
cM:{"^":"fP;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gS:function(a){return new H.fL(this,[H.C(this,0)])},
ab:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.be(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.be(y,b)}else return this.dL(b)},
dL:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.aq(z,J.a_(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a9(z,b)
x=y==null?null:y.ga1()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a9(w,b)
x=y==null?null:y.ga1()
return x}else return this.dM(b)},
dM:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.a_(a)&0x3ffffff)
x=this.aB(y,a)
if(x<0)return
return y[x].ga1()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.as()
this.b=z}this.b8(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.as()
this.c=y}this.b8(y,b,c)}else{x=this.d
if(x==null){x=this.as()
this.d=x}w=J.a_(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.aw(x,w,[this.at(b,c)])
else{u=this.aB(v,b)
if(u>=0)v[u].sa1(c)
else v.push(this.at(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.O(this))
z=z.c}},
b8:function(a,b,c){var z=this.a9(a,b)
if(z==null)this.aw(a,b,this.at(b,c))
else z.sa1(c)},
bh:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.fK(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bh()
return z},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.z(a[y].gdK(),b))return y
return-1},
k:function(a){return P.cR(this)},
a9:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
d2:function(a,b){delete a[b]},
be:function(a,b){return this.a9(a,b)!=null},
as:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.d2(z,"<non-identifier-key>")
return z}},
fK:{"^":"d;dK:a<,a1:b@,c,d"},
fL:{"^":"cE;a,$ti",
gi:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.ab(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.O(z))
y=y.c}}},
ab:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.O(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jN:{"^":"h:1;a",
$1:function(a){return this.a(a)}},
jO:{"^":"h:8;a",
$2:function(a,b){return this.a(a,b)}},
jP:{"^":"h:9;a",
$1:function(a){return this.a(a)}},
fE:{"^":"d;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbi:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.cL(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
d6:function(a,b){var z,y
z=this.gbi()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.iy(this,y)},
p:{
cL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.bN("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
iy:{"^":"d;a,b",
h:function(a,b){var z=this.b
if(b>=z.length)return H.b(z,b)
return z[b]}}}],["","",,H,{"^":"",
jF:function(a){return J.ay(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
aq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bs:function(a){var z,y,x
if(!!J.n(a).$isl)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Y:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.Z(b,a))},
h1:{"^":"i;","%":"DataView;ArrayBufferView;bT|dy|dz|cU|dA|dB|ad"},
bT:{"^":"h1;",
gi:function(a){return a.length},
$isl:1,
$asl:I.ao,
$ism:1,
$asm:I.ao},
cU:{"^":"dz;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
j:function(a,b,c){H.Y(b,a,a.length)
a[b]=c},
$asbb:function(){return[P.ah]},
$asj:function(){return[P.ah]},
$isf:1,
$asf:function(){return[P.ah]},
"%":"Float64Array"},
ad:{"^":"dB;",
j:function(a,b,c){H.Y(b,a,a.length)
a[b]=c},
$asbb:function(){return[P.D]},
$asj:function(){return[P.D]},
$isf:1,
$asf:function(){return[P.D]}},
h0:{"^":"cU;",$isbM:1,"%":"Float32Array"},
li:{"^":"ad;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lj:{"^":"ad;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
$isfu:1,
"%":"Int32Array"},
lk:{"^":"ad;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ll:{"^":"ad;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lm:{"^":"ad;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ln:{"^":"ad;",
gi:function(a){return a.length},
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lo:{"^":"ad;",
gi:function(a){return a.length},
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dy:{"^":"bT+j;"},
dz:{"^":"dy+bb;"},
dA:{"^":"bT+j;"},
dB:{"^":"dA+bb;"}}],["","",,P,{"^":"",
hS:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.T(new P.hU(z),1)).observe(y,{childList:true})
return new P.hT(z,y,x)}else if(self.setImmediate!=null)return P.jx()
return P.jy()},
m3:[function(a){self.scheduleImmediate(H.T(new P.hV(a),0))},"$1","jw",4,0,5],
m4:[function(a){self.setImmediate(H.T(new P.hW(a),0))},"$1","jx",4,0,5],
m5:[function(a){P.j_(0,a)},"$1","jy",4,0,5],
jp:function(a,b){if(H.dT(a,{func:1,args:[P.aT,P.aT]})){b.toString
return a}else{b.toString
return a}},
fj:function(a,b,c){var z
if(a==null)a=new P.bf()
z=$.q
if(z!==C.d)z.toString
z=new P.H(0,z,null,[c])
z.ba(a,b)
return z},
fk:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.H(0,$.q,null,[P.f])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fm(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aK(new P.fl(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.H(0,$.q,null,[null])
r.b9(C.H)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.aj(p)
t=H.a5(p)
if(z.b===0||!1)return P.fj(u,t,null)
else{z.c=u
z.d=t}}return y},
jo:function(){var z,y
for(;z=$.al,z!=null;){$.aI=null
y=z.b
$.al=y
if(y==null)$.aH=null
z.a.$0()}},
mc:[function(){$.c5=!0
try{P.jo()}finally{$.aI=null
$.c5=!1
if($.al!=null)$.$get$c2().$1(P.dP())}},"$0","dP",0,0,3],
dK:function(a){var z=new P.dq(a,null)
if($.al==null){$.aH=z
$.al=z
if(!$.c5)$.$get$c2().$1(P.dP())}else{$.aH.b=z
$.aH=z}},
jt:function(a){var z,y,x
z=$.al
if(z==null){P.dK(a)
$.aI=$.aH
return}y=new P.dq(a,null)
x=$.aI
if(x==null){y.b=z
$.aI=y
$.al=y}else{y.b=x.b
x.b=y
$.aI=y
if(y.b==null)$.aH=y}},
jZ:function(a){var z=$.q
if(C.d===z){P.am(null,null,C.d,a)
return}z.toString
P.am(null,null,z,z.by(a))},
js:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.aj(u)
y=H.a5(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.au(x)
w=t
v=x.gU()
c.$2(w,v)}}},
jg:function(a,b,c,d){var z=a.dr(0)
if(!!J.n(z).$isaa&&z!==$.$get$cI())z.e4(new P.jj(b,c,d))
else b.G(c,d)},
jh:function(a,b){return new P.ji(a,b)},
bt:function(a,b,c,d,e){var z={}
z.a=d
P.jt(new P.jq(z,e))},
dI:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
dJ:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
jr:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
am:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.by(d):c.dm(d)
P.dK(d)},
hU:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hT:{"^":"h:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hV:{"^":"h:0;a",
$0:function(){this.a.$0()}},
hW:{"^":"h:0;a",
$0:function(){this.a.$0()}},
iZ:{"^":"d;a,b,c",
cY:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.T(new P.j0(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
j_:function(a,b){var z=new P.iZ(!0,null,0)
z.cY(a,b)
return z}}},
j0:{"^":"h:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
aa:{"^":"d;$ti"},
fm:{"^":"h:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.G(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.G(z.c,z.d)}},
fl:{"^":"h;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.b(x,z)
x[z]=a
if(y===0)this.c.bd(x)}else if(z.b===0&&!this.e)this.c.G(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kf:{"^":"d;$ti"},
dt:{"^":"d;$ti",
du:function(a,b){if(a==null)a=new P.bf()
if(this.a.a!==0)throw H.a(P.bY("Future already completed"))
$.q.toString
this.G(a,b)},
dt:function(a){return this.du(a,null)}},
dr:{"^":"dt;a,$ti",
aa:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bY("Future already completed"))
z.b9(b)},
G:function(a,b){this.a.ba(a,b)}},
iW:{"^":"dt;a,$ti",
aa:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bY("Future already completed"))
z.a8(b)},
G:function(a,b){this.a.G(a,b)}},
du:{"^":"d;au:a<,b,c,d,e,$ti",
gdj:function(){return this.b.b},
gbW:function(){return(this.c&1)!==0},
gdJ:function(){return(this.c&2)!==0},
gbV:function(){return this.c===8},
dH:function(a){return this.b.b.aH(this.d,a)},
dP:function(a){if(this.c!==6)return!0
return this.b.b.aH(this.d,J.au(a))},
dG:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.dT(z,{func:1,args:[P.d,P.aF]}))return x.dX(z,y.gH(a),a.gU())
else return x.aH(z,y.gH(a))},
dI:function(){return this.b.b.c4(this.d)}},
H:{"^":"d;bn:a<,b,dd:c<,$ti",
gd7:function(){return this.a===2},
gar:function(){return this.a>=4},
aK:function(a,b){var z,y,x
z=$.q
if(z!==C.d){z.toString
if(b!=null)b=P.jp(b,z)}y=new P.H(0,z,null,[null])
x=b==null?1:3
this.aj(new P.du(null,y,x,a,b,[H.C(this,0),null]))
return y},
aJ:function(a){return this.aK(a,null)},
e4:function(a){var z,y
z=$.q
y=new P.H(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.C(this,0)
this.aj(new P.du(null,y,8,a,null,[z,z]))
return y},
aj:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gar()){y.aj(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.am(null,null,z,new P.ia(this,a))}},
bj:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gau()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gar()){v.bj(a)
return}this.a=v.a
this.c=v.c}z.a=this.av(a)
y=this.b
y.toString
P.am(null,null,y,new P.ii(z,this))}},
Y:function(){var z=this.c
this.c=null
return this.av(z)},
av:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gau()
z.a=y}return y},
a8:function(a){var z,y,x
z=this.$ti
y=H.aZ(a,"$isaa",z,"$asaa")
if(y){z=H.aZ(a,"$isH",z,null)
if(z)P.br(a,this)
else P.dv(a,this)}else{x=this.Y()
this.a=4
this.c=a
P.ak(this,x)}},
bd:function(a){var z=this.Y()
this.a=4
this.c=a
P.ak(this,z)},
G:[function(a,b){var z=this.Y()
this.a=8
this.c=new P.b4(a,b)
P.ak(this,z)},function(a){return this.G(a,null)},"e7","$2","$1","gbc",4,2,11],
b9:function(a){var z=H.aZ(a,"$isaa",this.$ti,"$asaa")
if(z){this.d0(a)
return}this.a=1
z=this.b
z.toString
P.am(null,null,z,new P.ic(this,a))},
d0:function(a){var z=H.aZ(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.am(null,null,z,new P.ih(this,a))}else P.br(a,this)
return}P.dv(a,this)},
ba:function(a,b){var z
this.a=1
z=this.b
z.toString
P.am(null,null,z,new P.ib(this,a,b))},
$isaa:1,
p:{
i9:function(a,b){var z=new P.H(0,$.q,null,[b])
z.a=4
z.c=a
return z},
dv:function(a,b){var z,y,x
b.a=1
try{a.aK(new P.id(b),new P.ie(b))}catch(x){z=H.aj(x)
y=H.a5(x)
P.jZ(new P.ig(b,z,y))}},
br:function(a,b){var z
for(;a.gd7();)a=a.c
if(a.gar()){z=b.Y()
b.a=a.a
b.c=a.c
P.ak(b,z)}else{z=b.c
b.a=2
b.c=a
a.bj(z)}},
ak:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.au(v)
t=v.gU()
y.toString
P.bt(null,null,y,u,t)}return}for(;b.gau()!=null;b=s){s=b.a
b.a=null
P.ak(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbW()||b.gbV()){q=b.gdj()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.au(v)
t=v.gU()
y.toString
P.bt(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gbV())new P.il(z,x,b,w).$0()
else if(y){if(b.gbW())new P.ik(x,b,r).$0()}else if(b.gdJ())new P.ij(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.n(y).$isaa){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.av(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.br(y,o)
return}}o=b.b
b=o.Y()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
ia:{"^":"h:0;a,b",
$0:function(){P.ak(this.a,this.b)}},
ii:{"^":"h:0;a,b",
$0:function(){P.ak(this.b,this.a.a)}},
id:{"^":"h:1;a",
$1:function(a){var z=this.a
z.a=0
z.a8(a)}},
ie:{"^":"h:12;a",
$2:function(a,b){this.a.G(a,b)},
$1:function(a){return this.$2(a,null)}},
ig:{"^":"h:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
ic:{"^":"h:0;a,b",
$0:function(){this.a.bd(this.b)}},
ih:{"^":"h:0;a,b",
$0:function(){P.br(this.b,this.a)}},
ib:{"^":"h:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
il:{"^":"h:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dI()}catch(w){y=H.aj(w)
x=H.a5(w)
if(this.d){v=J.au(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b4(y,x)
u.a=!0
return}if(!!J.n(z).$isaa){if(z instanceof P.H&&z.gbn()>=4){if(z.gbn()===8){v=this.b
v.b=z.gdd()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aJ(new P.im(t))
v.a=!1}}},
im:{"^":"h:1;a",
$1:function(a){return this.a}},
ik:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dH(this.c)}catch(x){z=H.aj(x)
y=H.a5(x)
w=this.a
w.b=new P.b4(z,y)
w.a=!0}}},
ij:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dP(z)===!0&&w.e!=null){v=this.b
v.b=w.dG(z)
v.a=!1}}catch(u){y=H.aj(u)
x=H.a5(u)
w=this.a
v=J.au(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b4(y,x)
s.a=!0}}},
dq:{"^":"d;a,b"},
d3:{"^":"d;$ti",
w:function(a,b){var z,y
z={}
y=new P.H(0,$.q,null,[null])
z.a=null
z.a=this.bZ(new P.hA(z,this,b,y),!0,new P.hB(y),y.gbc())
return y},
gi:function(a){var z,y
z={}
y=new P.H(0,$.q,null,[P.D])
z.a=0
this.bZ(new P.hC(z),!0,new P.hD(z,y),y.gbc())
return y}},
hA:{"^":"h;a,b,c,d",
$1:function(a){P.js(new P.hy(this.c,a),new P.hz(),P.jh(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.dW(this.b,"d3",0)]}}},
hy:{"^":"h:0;a,b",
$0:function(){return this.a.$1(this.b)}},
hz:{"^":"h:1;",
$1:function(a){}},
hB:{"^":"h:0;a",
$0:function(){this.a.a8(null)}},
hC:{"^":"h:1;a",
$1:function(a){++this.a.a}},
hD:{"^":"h:0;a,b",
$0:function(){this.b.a8(this.a.a)}},
hx:{"^":"d;$ti"},
jj:{"^":"h:0;a,b,c",
$0:function(){return this.a.G(this.b,this.c)}},
ji:{"^":"h:13;a,b",
$2:function(a,b){P.jg(this.a,this.b,a,b)}},
b4:{"^":"d;H:a>,U:b<",
k:function(a){return H.c(this.a)},
$isE:1},
j5:{"^":"d;"},
jq:{"^":"h:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bf()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aQ(y)
throw x}},
iK:{"^":"j5;",
dY:function(a){var z,y,x
try{if(C.d===$.q){a.$0()
return}P.dI(null,null,this,a)}catch(x){z=H.aj(x)
y=H.a5(x)
P.bt(null,null,this,z,y)}},
dZ:function(a,b){var z,y,x
try{if(C.d===$.q){a.$1(b)
return}P.dJ(null,null,this,a,b)}catch(x){z=H.aj(x)
y=H.a5(x)
P.bt(null,null,this,z,y)}},
dm:function(a){return new P.iM(this,a)},
by:function(a){return new P.iL(this,a)},
dn:function(a){return new P.iN(this,a)},
h:function(a,b){return},
c4:function(a){if($.q===C.d)return a.$0()
return P.dI(null,null,this,a)},
aH:function(a,b){if($.q===C.d)return a.$1(b)
return P.dJ(null,null,this,a,b)},
dX:function(a,b,c){if($.q===C.d)return a.$2(b,c)
return P.jr(null,null,this,a,b,c)}},
iM:{"^":"h:0;a,b",
$0:function(){return this.a.c4(this.b)}},
iL:{"^":"h:0;a,b",
$0:function(){return this.a.dY(this.b)}},
iN:{"^":"h:1;a,b",
$1:function(a){return this.a.dZ(this.b,a)}}}],["","",,P,{"^":"",
J:function(){return new H.cM(0,null,null,null,null,null,0,[null,null])},
cO:function(a){return H.jG(a,new H.cM(0,null,null,null,null,null,0,[null,null]))},
ac:function(a,b,c,d){return new P.iw(0,null,null,null,null,null,0,[d])},
fw:function(a,b,c){var z,y
if(P.c6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aJ()
y.push(a)
try{P.jn(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.d4(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bO:function(a,b,c){var z,y,x
if(P.c6(a))return b+"..."+c
z=new P.bZ(b)
y=$.$get$aJ()
y.push(a)
try{x=z
x.a=P.d4(x.gV(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
c6:function(a){var z,y
for(z=0;y=$.$get$aJ(),z<y.length;++z)if(a===y[z])return!0
return!1},
jn:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.c(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.t()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.t();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
fM:function(a,b){var z,y
z=P.ac(null,null,null,b)
for(y=J.bE(a);y.t();)z.P(0,y.gD(y))
return z},
cR:function(a){var z,y,x
z={}
if(P.c6(a))return"{...}"
y=new P.bZ("")
try{$.$get$aJ().push(a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.ci(a,new P.fQ(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.$get$aJ()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
iw:{"^":"ip;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.c3(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
J:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.d1(b)},
d1:function(a){var z=this.d
if(z==null)return!1
return this.ap(z[this.am(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.O(this))
z=z.b}},
P:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c4()
this.b=z}return this.bb(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c4()
this.c=y}return this.bb(y,b)}else return this.cZ(0,b)},
cZ:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c4()
this.d=z}y=this.am(b)
x=z[y]
if(x==null)z[y]=[this.al(b)]
else{if(this.ap(x,b)>=0)return!1
x.push(this.al(b))}return!0},
c3:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.d9(0,b)},
d9:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.am(b)]
x=this.ap(y,b)
if(x<0)return!1
this.bp(y.splice(x,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ak()}},
bb:function(a,b){if(a[b]!=null)return!1
a[b]=this.al(b)
return!0},
bl:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bp(z)
delete a[b]
return!0},
ak:function(){this.r=this.r+1&67108863},
al:function(a){var z,y
z=new P.ix(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ak()
return z},
bp:function(a){var z,y
z=a.gd8()
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
for(y=0;y<z;++y)if(J.z(a[y].gd3(),b))return y
return-1},
p:{
c4:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ix:{"^":"d;d3:a<,b,d8:c<"},
c3:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.O(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
ip:{"^":"hp;$ti"},
l8:{"^":"d;$ti"},
j:{"^":"d;$ti",
gK:function(a){return new H.cQ(a,this.gi(a),0,null,[H.bw(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.O(a))}},
dE:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.O(a))}return y},
aY:function(a,b){return H.d5(a,b,null,H.bw(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.bw(this,a,"j",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.a6(z,0,this.gi(a),a)
C.c.a6(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bO(a,"[","]")}},
fP:{"^":"R;$ti"},
fQ:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
R:{"^":"d;$ti",
w:function(a,b){var z,y
for(z=J.bE(this.gS(a));z.t();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a7(this.gS(a))},
k:function(a){return P.cR(a)}},
hq:{"^":"d;$ti",
k:function(a){return P.bO(this,"{","}")},
w:function(a,b){var z
for(z=new P.c3(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hp:{"^":"hq;$ti"}}],["","",,P,{"^":"",
ca:function(a,b,c){var z=H.he(a,c)
if(z!=null)return z
throw H.a(P.bN(a,null,null))},
ai:function(a,b){var z=H.hd(a)
if(z!=null)return z
throw H.a(P.bN("Invalid double",a,null))},
fa:function(a){var z=J.n(a)
if(!!z.$ish)return z.k(a)
return"Instance of '"+H.aE(a)+"'"},
cZ:function(a,b,c){return new H.fE(a,H.cL(a,!1,!0,!1),null,null)},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aQ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fa(a)},
cG:function(a){return new P.i6(a)},
U:function(a){H.aq(H.c(a))},
jz:{"^":"d;"},
"+bool":0,
b8:{"^":"d;di:a<,b",
gdQ:function(){return this.a},
cG:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.eP("DateTime is outside valid range: "+this.gdQ()))},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a&&this.b===b.b},
M:function(a,b){return C.b.M(this.a,b.gdi())},
gv:function(a){var z=this.a
return(z^C.b.bm(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.f4(H.hc(this))
y=P.aR(H.ha(this))
x=P.aR(H.h6(this))
w=P.aR(H.h7(this))
v=P.aR(H.h9(this))
u=P.aR(H.hb(this))
t=P.f5(H.h8(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
f4:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aR:function(a){if(a>=10)return""+a
return"0"+a}}},
ah:{"^":"aM;"},
"+double":0,
aS:{"^":"d;X:a<",
l:function(a,b){return new P.aS(C.b.l(this.a,b.gX()))},
B:function(a,b){return new P.aS(this.a-b.gX())},
O:function(a,b){return C.b.O(this.a,b.gX())},
a5:function(a,b){return C.b.a5(this.a,b.gX())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.b.M(this.a,b.gX())},
k:function(a){var z,y,x,w,v
z=new P.f9()
y=this.a
if(y<0)return"-"+new P.aS(0-y).k(0)
x=z.$1(C.b.Z(y,6e7)%60)
w=z.$1(C.b.Z(y,1e6)%60)
v=new P.f8().$1(y%1e6)
return""+C.b.Z(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
cD:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f8:{"^":"h:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f9:{"^":"h:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"d;",
gU:function(){return H.a5(this.$thrownJsError)}},
bf:{"^":"E;",
k:function(a){return"Throw of null."}},
a8:{"^":"E;a,b,c,d",
gao:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gan:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gao()+y+x
if(!this.a)return w
v=this.gan()
u=P.bL(this.b)
return w+v+": "+H.c(u)},
p:{
eP:function(a){return new P.a8(!1,null,null,a)},
cu:function(a,b,c){return new P.a8(!0,a,b,c)},
eQ:function(a){return new P.a8(!1,null,a,"Must not be null")}}},
cY:{"^":"a8;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bi:function(a,b,c){return new P.cY(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.cY(b,c,!0,a,d,"Invalid value")},
hg:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
z=a>c}else z=!0
if(z)throw H.a(P.bh(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
z=b>c}else z=!0
if(z)throw H.a(P.bh(b,a,c,"end",f))
return b}return c}}},
ft:{"^":"a8;e,i:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){if(J.aO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.a7(b)
return new P.ft(b,z,!0,a,c,"Index out of range")}}},
hK:{"^":"E;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.hK(a)}}},
hI:{"^":"E;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
c1:function(a){return new P.hI(a)}}},
bX:{"^":"E;a",
k:function(a){return"Bad state: "+this.a},
p:{
bY:function(a){return new P.bX(a)}}},
f1:{"^":"E;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.bL(z))+"."},
p:{
O:function(a){return new P.f1(a)}}},
d1:{"^":"d;",
k:function(a){return"Stack Overflow"},
gU:function(){return},
$isE:1},
f3:{"^":"E;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
kx:{"^":"d;"},
i6:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
fh:{"^":"d;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.c(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.ag(x,0,75)+"..."
return y+"\n"+x},
p:{
bN:function(a,b,c){return new P.fh(a,b,c)}}},
D:{"^":"aM;"},
"+int":0,
fv:{"^":"d;$ti",
w:function(a,b){var z
for(z=this.gK(this);z.t();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gK(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.eQ("index"))
if(b<0)H.I(P.bh(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.t();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.fw(this,"(",")")}},
f:{"^":"d;$ti"},
"+List":0,
bS:{"^":"d;$ti"},
aT:{"^":"d;",
gv:function(a){return P.d.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aM:{"^":"d;"},
"+num":0,
d:{"^":";",
A:function(a,b){return this===b},
gv:function(a){return H.aD(this)},
k:function(a){return"Instance of '"+H.aE(this)+"'"},
toString:function(){return this.k(this)}},
lC:{"^":"d;"},
aF:{"^":"d;"},
r:{"^":"d;"},
"+String":0,
bZ:{"^":"d;V:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d4:function(a,b,c){var z=J.bE(b)
if(!z.t())return a
if(c.length===0){do a+=H.c(z.gD(z))
while(z.t())}else{a+=H.c(z.gD(z))
for(;z.t();)a=a+c+H.c(z.gD(z))}return a}}}}],["","",,W,{"^":"",
cF:function(a){return"wheel"},
ag:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dH:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.i_(a)
if(!!J.n(z).$isx)return z
return}else return a},
jk:function(a){var z
if(!!J.n(a).$iscC)return a
z=new P.hP([],[],!1)
z.c=!0
return z.aL(a)},
dL:function(a){var z=$.q
if(z===C.d)return a
return z.dn(a)},
Q:{"^":"b9;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
k5:{"^":"bW;m:x=,n:y=,C:z=","%":"Accelerometer|LinearAccelerationSensor"},
k6:{"^":"i;i:length=","%":"AccessibleNodeList"},
k7:{"^":"Q;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
k8:{"^":"Q;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eV:{"^":"Q;E:height},F:width}",
aN:function(a,b,c){if(c!=null)return a.getContext(b,P.jA(c,null))
return a.getContext(b)},
cp:function(a,b){return this.aN(a,b,null)},
"%":"HTMLCanvasElement"},
kd:{"^":"i;",
dw:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ae:function(a){return P.P(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
ke:{"^":"B;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kg:{"^":"b7;i:length=","%":"CSSPerspective"},
kh:{"^":"bK;m:x=,n:y=","%":"CSSPositionValue"},
ki:{"^":"b7;m:x=,n:y=,C:z=","%":"CSSRotation"},
kj:{"^":"b7;m:x=,n:y=,C:z=","%":"CSSScale"},
kk:{"^":"hY;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f2:{"^":"d;"},
bK:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b7:{"^":"i;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kl:{"^":"bK;i:length=","%":"CSSTransformValue"},
km:{"^":"b7;m:x=,n:y=,C:z=","%":"CSSTranslation"},
kn:{"^":"bK;i:length=","%":"CSSUnparsedValue"},
ko:{"^":"i;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kp:{"^":"i;m:x=,n:y=,C:z=","%":"DeviceAcceleration"},
cC:{"^":"B;",
gaD:function(a){return new W.aY(a,"mousedown",!1,[W.K])},
gaE:function(a){return new W.aY(a,"mousemove",!1,[W.K])},
gaF:function(a){return new W.aY(a,"mouseup",!1,[W.K])},
gaG:function(a){return new W.aY(a,W.cF(a),!1,[W.aG])},
$iscC:1,
"%":"Document|HTMLDocument|XMLDocument"},
kq:{"^":"i;",
k:function(a){return String(a)},
"%":"DOMException"},
kr:{"^":"f6;",
ga4:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z},
"%":"DOMPoint"},
f6:{"^":"i;",
ga4:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z},
"%":";DOMPointReadOnly"},
ks:{"^":"i1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.a1]},
$ism:1,
$asm:function(){return[P.a1]},
$asj:function(){return[P.a1]},
$isf:1,
$asf:function(){return[P.a1]},
$ask:function(){return[P.a1]},
"%":"ClientRectList|DOMRectList"},
f7:{"^":"i;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gF(a))+" x "+H.c(this.gE(a))},
A:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa1)return!1
return a.left===z.gbX(b)&&a.top===z.gc8(b)&&this.gF(a)===z.gF(b)&&this.gE(a)===z.gE(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gF(a)
w=this.gE(a)
return W.dx(W.ag(W.ag(W.ag(W.ag(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc9:function(a){return new P.a0(a.left,a.top,[null])},
gE:function(a){return a.height},
gbX:function(a){return a.left},
gc8:function(a){return a.top},
gF:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa1:1,
$asa1:I.ao,
"%":";DOMRectReadOnly"},
kt:{"^":"i3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.r]},
$ism:1,
$asm:function(){return[P.r]},
$asj:function(){return[P.r]},
$isf:1,
$asf:function(){return[P.r]},
$ask:function(){return[P.r]},
"%":"DOMStringList"},
ku:{"^":"i;i:length=","%":"DOMTokenList"},
b9:{"^":"B;",
k:function(a){return a.localName},
aM:function(a){return a.getBoundingClientRect()},
gaD:function(a){return new W.af(a,"mousedown",!1,[W.K])},
gaE:function(a){return new W.af(a,"mousemove",!1,[W.K])},
gaF:function(a){return new W.af(a,"mouseup",!1,[W.K])},
gaG:function(a){return new W.af(a,W.cF(a),!1,[W.aG])},
$isb9:1,
"%":";Element"},
kv:{"^":"Q;E:height},F:width}","%":"HTMLEmbedElement"},
kw:{"^":"a9;H:error=","%":"ErrorEvent"},
a9:{"^":"i;",
ad:function(a){return a.preventDefault()},
$isa9:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
x:{"^":"i;",
bv:["cv",function(a,b,c,d){if(c!=null)this.d_(a,b,c,!1)}],
d_:function(a,b,c,d){return a.addEventListener(b,H.T(c,1),!1)},
da:function(a,b,c,d){return a.removeEventListener(b,H.T(c,1),!1)},
$isx:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dC|dD|dF|dG"},
kQ:{"^":"i8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.ba]},
$ism:1,
$asm:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$ask:function(){return[W.ba]},
"%":"FileList"},
kR:{"^":"x;H:error=","%":"FileReader"},
kS:{"^":"x;H:error=,i:length=","%":"FileWriter"},
kU:{"^":"x;",
e8:function(a,b,c){return a.forEach(H.T(b,3),c)},
w:function(a,b){b=H.T(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
kW:{"^":"Q;i:length=","%":"HTMLFormElement"},
kY:{"^":"bW;m:x=,n:y=,C:z=","%":"Gyroscope"},
kZ:{"^":"i;i:length=","%":"History"},
l_:{"^":"ir;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.B]},
$ism:1,
$asm:function(){return[W.B]},
$asj:function(){return[W.B]},
$isf:1,
$asf:function(){return[W.B]},
$ask:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fp:{"^":"fq;",
e9:function(a,b,c,d,e,f){return a.open(b,c)},
dT:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
fq:{"^":"x;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
l0:{"^":"Q;E:height},F:width}","%":"HTMLIFrameElement"},
l1:{"^":"Q;E:height},F:width}","%":"HTMLImageElement"},
l3:{"^":"Q;E:height},F:width}","%":"HTMLInputElement"},
bd:{"^":"dn;",
ge5:function(a){return a.which},
$isbd:1,
"%":"KeyboardEvent"},
l9:{"^":"i;",
k:function(a){return String(a)},
"%":"Location"},
la:{"^":"bW;m:x=,n:y=,C:z=","%":"Magnetometer"},
fR:{"^":"Q;H:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lc:{"^":"i;i:length=","%":"MediaList"},
ld:{"^":"x;aA:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
le:{"^":"x;",
bv:function(a,b,c,d){if(J.z(b,"message"))a.start()
this.cv(a,b,c,!1)},
"%":"MessagePort"},
lf:{"^":"iz;",
h:function(a,b){return P.P(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gS:function(a){var z=H.A([],[P.r])
this.w(a,new W.fT(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.r,null]},
"%":"MIDIInputMap"},
fT:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
lg:{"^":"iA;",
h:function(a,b){return P.P(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gS:function(a){var z=H.A([],[P.r])
this.w(a,new W.fU(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.r,null]},
"%":"MIDIOutputMap"},
fU:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
lh:{"^":"iC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.be]},
$ism:1,
$asm:function(){return[W.be]},
$asj:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"MimeTypeArray"},
K:{"^":"dn;bE:button=",
gdR:function(a){return new P.a0(a.movementX,a.movementY,[null])},
gc1:function(a){var z,y,x
if(!!a.offsetX)return new P.a0(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.dH(z)).$isb9)throw H.a(P.p("offsetX is only supported on elements"))
y=W.dH(z)
z=[null]
x=new P.a0(a.clientX,a.clientY,z).B(0,J.es(J.eu(y)))
return new P.a0(J.co(x.a),J.co(x.b),z)}},
$isK:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
B:{"^":"x;",
k:function(a){var z=a.nodeValue
return z==null?this.cw(a):z},
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
lp:{"^":"iE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.B]},
$ism:1,
$asm:function(){return[W.B]},
$asj:function(){return[W.B]},
$isf:1,
$asf:function(){return[W.B]},
$ask:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
lr:{"^":"Q;E:height},F:width}","%":"HTMLObjectElement"},
aU:{"^":"i;i:length=","%":"Plugin"},
lu:{"^":"iI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aU]},
$ism:1,
$asm:function(){return[W.aU]},
$asj:function(){return[W.aU]},
$isf:1,
$asf:function(){return[W.aU]},
$ask:function(){return[W.aU]},
"%":"PluginArray"},
lz:{"^":"i;",
aM:function(a){return a.getBoundingClientRect()},
"%":"Range"},
lG:{"^":"iO;",
h:function(a,b){return P.P(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gS:function(a){var z=H.A([],[P.r])
this.w(a,new W.hm(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.r,null]},
"%":"RTCStatsReport"},
hm:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
lH:{"^":"Q;i:length=","%":"HTMLSelectElement"},
bW:{"^":"x;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
lI:{"^":"a9;H:error=","%":"SensorErrorEvent"},
lJ:{"^":"dD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bk]},
$ism:1,
$asm:function(){return[W.bk]},
$asj:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$ask:function(){return[W.bk]},
"%":"SourceBufferList"},
lK:{"^":"iQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bl]},
$ism:1,
$asm:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$ask:function(){return[W.bl]},
"%":"SpeechGrammarList"},
lL:{"^":"a9;H:error=","%":"SpeechRecognitionError"},
aW:{"^":"i;i:length=","%":"SpeechRecognitionResult"},
lN:{"^":"iT;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gS:function(a){var z=H.A([],[P.r])
this.w(a,new W.hw(z))
return z},
gi:function(a){return a.length},
$asR:function(){return[P.r,P.r]},
"%":"Storage"},
hw:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
lR:{"^":"iY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bo]},
$ism:1,
$asm:function(){return[W.bo]},
$asj:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$ask:function(){return[W.bo]},
"%":"TextTrackCueList"},
lS:{"^":"dG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bn]},
$ism:1,
$asm:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$isf:1,
$asf:function(){return[W.bn]},
$ask:function(){return[W.bn]},
"%":"TextTrackList"},
lT:{"^":"i;i:length=","%":"TimeRanges"},
lU:{"^":"j2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bp]},
$ism:1,
$asm:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"TouchList"},
lV:{"^":"i;i:length=","%":"TrackDefaultList"},
dn:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lY:{"^":"i;",
k:function(a){return String(a)},
"%":"URL"},
m_:{"^":"i;m:x=,C:z=","%":"VRStageBoundsPoint"},
m0:{"^":"fR;E:height},F:width}","%":"HTMLVideoElement"},
m1:{"^":"x;i:length=","%":"VideoTrackList"},
aG:{"^":"K;",
gdA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaG:1,
"%":"WheelEvent"},
hM:{"^":"x;",
gdk:function(a){var z,y
z=P.aM
y=new P.H(0,$.q,null,[z])
this.d5(a)
this.dc(a,W.dL(new W.hN(new P.iW(y,[z]))))
return y},
dc:function(a,b){return a.requestAnimationFrame(H.T(b,1))},
d5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hN:{"^":"h:1;a",
$1:function(a){this.a.aa(0,a)}},
m2:{"^":"x;"},
m6:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b6]},
$ism:1,
$asm:function(){return[W.b6]},
$asj:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$ask:function(){return[W.b6]},
"%":"CSSRuleList"},
m7:{"^":"f7;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa1)return!1
return a.left===z.gbX(b)&&a.top===z.gc8(b)&&a.width===z.gF(b)&&a.height===z.gE(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dx(W.ag(W.ag(W.ag(W.ag(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc9:function(a){return new P.a0(a.left,a.top,[null])},
gE:function(a){return a.height},
gF:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
m8:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bc]},
$ism:1,
$asm:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"GamepadList"},
m9:{"^":"jb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.B]},
$ism:1,
$asm:function(){return[W.B]},
$asj:function(){return[W.B]},
$isf:1,
$asf:function(){return[W.B]},
$ask:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ma:{"^":"jd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aW]},
$ism:1,
$asm:function(){return[W.aW]},
$asj:function(){return[W.aW]},
$isf:1,
$asf:function(){return[W.aW]},
$ask:function(){return[W.aW]},
"%":"SpeechRecognitionResultList"},
mb:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bm]},
$ism:1,
$asm:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"StyleSheetList"},
aY:{"^":"d3;a,b,c,$ti",
bZ:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.C(this,0))}},
af:{"^":"aY;a,b,c,$ti"},
i4:{"^":"hx;a,b,c,d,e,$ti",
cX:function(a,b,c,d,e){this.dg()},
dr:function(a){if(this.b==null)return
this.dh()
this.b=null
this.d=null
return},
dg:function(){var z=this.d
if(z!=null&&this.a<=0)J.e7(this.b,this.c,z,!1)},
dh:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.e6(x,this.c,z,!1)}},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.dL(new W.i5(c))
z=new W.i4(0,a,b,z,!1,[e])
z.cX(a,b,c,!1,e)
return z}}},
i5:{"^":"h:1;a",
$1:function(a){return this.a.$1(a)}},
k:{"^":"d;$ti",
gK:function(a){return new W.fd(a,this.gi(a),-1,null,[H.bw(this,a,"k",0)])}},
fd:{"^":"d;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.at(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
hZ:{"^":"d;a",$isx:1,p:{
i_:function(a){if(a===window)return a
else return new W.hZ(a)}}},
hY:{"^":"i+f2;"},
i0:{"^":"i+j;"},
i1:{"^":"i0+k;"},
i2:{"^":"i+j;"},
i3:{"^":"i2+k;"},
i7:{"^":"i+j;"},
i8:{"^":"i7+k;"},
iq:{"^":"i+j;"},
ir:{"^":"iq+k;"},
iz:{"^":"i+R;"},
iA:{"^":"i+R;"},
iB:{"^":"i+j;"},
iC:{"^":"iB+k;"},
iD:{"^":"i+j;"},
iE:{"^":"iD+k;"},
iH:{"^":"i+j;"},
iI:{"^":"iH+k;"},
iO:{"^":"i+R;"},
dC:{"^":"x+j;"},
dD:{"^":"dC+k;"},
iP:{"^":"i+j;"},
iQ:{"^":"iP+k;"},
iT:{"^":"i+R;"},
iX:{"^":"i+j;"},
iY:{"^":"iX+k;"},
dF:{"^":"x+j;"},
dG:{"^":"dF+k;"},
j1:{"^":"i+j;"},
j2:{"^":"j1+k;"},
j6:{"^":"i+j;"},
j7:{"^":"j6+k;"},
j8:{"^":"i+j;"},
j9:{"^":"j8+k;"},
ja:{"^":"i+j;"},
jb:{"^":"ja+k;"},
jc:{"^":"i+j;"},
jd:{"^":"jc+k;"},
je:{"^":"i+j;"},
jf:{"^":"je+k;"}}],["","",,P,{"^":"",
P:function(a){var z,y,x,w,v
if(a==null)return
z=P.J()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jA:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.ci(a,new P.jB(z))
return z},
jC:function(a){var z,y
z=new P.H(0,$.q,null,[null])
y=new P.dr(z,[null])
a.then(H.T(new P.jD(y),1))["catch"](H.T(new P.jE(y),1))
return z},
hO:{"^":"d;",
bU:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aL:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.b8(y,!0)
x.cG(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.c1("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.jC(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bU(a)
x=this.b
u=x.length
if(v>=u)return H.b(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.J()
z.a=t
if(v>=u)return H.b(x,v)
x[v]=t
this.dF(a,new P.hQ(z,this))
return z.a}if(a instanceof Array){s=a
v=this.bU(s)
x=this.b
if(v>=x.length)return H.b(x,v)
t=x[v]
if(t!=null)return t
u=J.a4(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.b(x,v)
x[v]=t
if(typeof r!=="number")return H.u(r)
x=J.aK(t)
q=0
for(;q<r;++q)x.j(t,q,this.aL(u.h(s,q)))
return t}return a}},
hQ:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aL(b)
J.e5(z,a,y)
return y}},
jB:{"^":"h:2;a",
$2:function(a,b){this.a[a]=b}},
hP:{"^":"hO;a,b,c",
dF:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
b.$2(w,a[w])}}},
jD:{"^":"h:1;a",
$1:function(a){return this.a.aa(0,a)}},
jE:{"^":"h:1;a",
$1:function(a){return this.a.dt(a)}}}],["","",,P,{"^":"",lF:{"^":"x;H:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},lW:{"^":"x;H:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
hf:function(a){return C.o},
dw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
it:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
is:{"^":"d;",
a3:function(){return Math.random()},
dS:function(){return Math.random()<0.5}},
a0:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
A:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a0))return!1
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
return P.it(P.dw(P.dw(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.a0(y,C.a.l(z,x),this.$ti)},
B:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.B()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.B()
if(typeof y!=="number")return H.u(y)
return new P.a0(z-x,w-y,this.$ti)}},
ly:{"^":"d;"},
iJ:{"^":"d;$ti"},
a1:{"^":"iJ;$ti"}}],["","",,P,{"^":"",ky:{"^":"w;m:x=,n:y=","%":"SVGFEBlendElement"},kz:{"^":"w;m:x=,n:y=","%":"SVGFEColorMatrixElement"},kA:{"^":"w;m:x=,n:y=","%":"SVGFEComponentTransferElement"},kB:{"^":"w;m:x=,n:y=","%":"SVGFECompositeElement"},kC:{"^":"w;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},kD:{"^":"w;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},kE:{"^":"w;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},kF:{"^":"w;m:x=,n:y=","%":"SVGFEFloodElement"},kG:{"^":"w;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},kH:{"^":"w;m:x=,n:y=","%":"SVGFEImageElement"},kI:{"^":"w;m:x=,n:y=","%":"SVGFEMergeElement"},kJ:{"^":"w;m:x=,n:y=","%":"SVGFEMorphologyElement"},kK:{"^":"w;m:x=,n:y=","%":"SVGFEOffsetElement"},kL:{"^":"w;m:x=,n:y=,C:z=","%":"SVGFEPointLightElement"},kM:{"^":"w;m:x=,n:y=","%":"SVGFESpecularLightingElement"},kN:{"^":"w;m:x=,n:y=,C:z=","%":"SVGFESpotLightElement"},kO:{"^":"w;m:x=,n:y=","%":"SVGFETileElement"},kP:{"^":"w;m:x=,n:y=","%":"SVGFETurbulenceElement"},kT:{"^":"w;m:x=,n:y=","%":"SVGFilterElement"},kV:{"^":"aw;m:x=,n:y=","%":"SVGForeignObjectElement"},fo:{"^":"aw;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aw:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},l2:{"^":"aw;m:x=,n:y=","%":"SVGImageElement"},l7:{"^":"iv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cN]},
$isf:1,
$asf:function(){return[P.cN]},
$ask:function(){return[P.cN]},
"%":"SVGLengthList"},lb:{"^":"w;m:x=,n:y=","%":"SVGMaskElement"},lq:{"^":"iG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cW]},
$isf:1,
$asf:function(){return[P.cW]},
$ask:function(){return[P.cW]},
"%":"SVGNumberList"},lt:{"^":"w;m:x=,n:y=","%":"SVGPatternElement"},lv:{"^":"i;m:x=,n:y=","%":"SVGPoint"},lw:{"^":"i;i:length=","%":"SVGPointList"},lA:{"^":"i;m:x=,n:y=","%":"SVGRect"},lB:{"^":"fo;m:x=,n:y=","%":"SVGRectElement"},lO:{"^":"iV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.r]},
$isf:1,
$asf:function(){return[P.r]},
$ask:function(){return[P.r]},
"%":"SVGStringList"},w:{"^":"b9;",
gaD:function(a){return new W.af(a,"mousedown",!1,[W.K])},
gaE:function(a){return new W.af(a,"mousemove",!1,[W.K])},
gaF:function(a){return new W.af(a,"mouseup",!1,[W.K])},
gaG:function(a){return new W.af(a,"mousewheel",!1,[W.aG])},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lP:{"^":"aw;m:x=,n:y=","%":"SVGSVGElement"},hF:{"^":"aw;","%":"SVGTextPathElement;SVGTextContentElement"},lQ:{"^":"hF;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lX:{"^":"j4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.da]},
$isf:1,
$asf:function(){return[P.da]},
$ask:function(){return[P.da]},
"%":"SVGTransformList"},lZ:{"^":"aw;m:x=,n:y=","%":"SVGUseElement"},iu:{"^":"i+j;"},iv:{"^":"iu+k;"},iF:{"^":"i+j;"},iG:{"^":"iF+k;"},iU:{"^":"i+j;"},iV:{"^":"iU+k;"},j3:{"^":"i+j;"},j4:{"^":"j3+k;"}}],["","",,P,{"^":"",k9:{"^":"i;i:length=","%":"AudioBuffer"},ka:{"^":"hX;",
h:function(a,b){return P.P(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gS:function(a){var z=H.A([],[P.r])
this.w(a,new P.eS(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.r,null]},
"%":"AudioParamMap"},eS:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},kb:{"^":"i;aA:enabled=","%":"AudioTrack"},kc:{"^":"x;i:length=","%":"AudioTrackList"},eT:{"^":"x;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ls:{"^":"eT;i:length=","%":"OfflineAudioContext"},hX:{"^":"i+R;"}}],["","",,P,{"^":"",lD:{"^":"i;",
bt:function(a,b){return a.activeTexture(b)},
bw:function(a,b,c){return a.attachShader(b,c)},
bx:function(a,b,c){return a.bindBuffer(b,c)},
bz:function(a,b,c){return a.bindFramebuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bF:function(a,b){return a.clear(b)},
bG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bH:function(a,b){return a.compileShader(b)},
bI:function(a){return a.createBuffer()},
bJ:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.P(a.getContextAttributes())},
aO:function(a){return a.getError()},
aP:function(a,b){return a.getProgramInfoLog(b)},
aQ:function(a,b,c){return a.getProgramParameter(b,c)},
aR:function(a,b){return a.getShaderInfoLog(b)},
aS:function(a,b,c){return a.getShaderParameter(b,c)},
aT:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
c2:function(a,b,c){return a.pixelStorei(b,c)},
aX:function(a,b,c){return a.shaderSource(b,c)},
aZ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aI:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
c5:function(a,b,c,d,e,f,g){return this.aI(a,b,c,d,e,f,g,null,null,null)},
c6:function(a,b,c,d){return a.texParameterf(b,c,d)},
c7:function(a,b,c,d){return a.texParameteri(b,c,d)},
ca:function(a,b,c){return a.uniform1f(b,c)},
cb:function(a,b,c){return a.uniform1fv(b,c)},
cc:function(a,b,c){return a.uniform1i(b,c)},
cd:function(a,b,c){return a.uniform1iv(b,c)},
ce:function(a,b,c){return a.uniform2fv(b,c)},
cf:function(a,b,c){return a.uniform3fv(b,c)},
cg:function(a,b,c){return a.uniform4fv(b,c)},
ci:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ck:function(a,b){return a.useProgram(b)},
cl:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lE:{"^":"i;",
dl:function(a,b){return a.beginTransformFeedback(b)},
dq:function(a,b){return a.bindVertexArray(b)},
dz:function(a){return a.createVertexArray()},
dB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dD:function(a){return a.endTransformFeedback()},
e1:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
e3:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bt:function(a,b){return a.activeTexture(b)},
bw:function(a,b,c){return a.attachShader(b,c)},
bx:function(a,b,c){return a.bindBuffer(b,c)},
bz:function(a,b,c){return a.bindFramebuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bF:function(a,b){return a.clear(b)},
bG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bH:function(a,b){return a.compileShader(b)},
bI:function(a){return a.createBuffer()},
bJ:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.P(a.getContextAttributes())},
aO:function(a){return a.getError()},
aP:function(a,b){return a.getProgramInfoLog(b)},
aQ:function(a,b,c){return a.getProgramParameter(b,c)},
aR:function(a,b){return a.getShaderInfoLog(b)},
aS:function(a,b,c){return a.getShaderParameter(b,c)},
aT:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
c2:function(a,b,c){return a.pixelStorei(b,c)},
aX:function(a,b,c){return a.shaderSource(b,c)},
aZ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aI:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
c5:function(a,b,c,d,e,f,g){return this.aI(a,b,c,d,e,f,g,null,null,null)},
c6:function(a,b,c,d){return a.texParameterf(b,c,d)},
c7:function(a,b,c,d){return a.texParameteri(b,c,d)},
ca:function(a,b,c){return a.uniform1f(b,c)},
cb:function(a,b,c){return a.uniform1fv(b,c)},
cc:function(a,b,c){return a.uniform1i(b,c)},
cd:function(a,b,c){return a.uniform1iv(b,c)},
ce:function(a,b,c){return a.uniform2fv(b,c)},
cf:function(a,b,c){return a.uniform3fv(b,c)},
cg:function(a,b,c){return a.uniform4fv(b,c)},
ci:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ck:function(a,b){return a.useProgram(b)},
cl:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",lM:{"^":"iS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.P(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bS]},
$isf:1,
$asf:function(){return[P.bS]},
$ask:function(){return[P.bS]},
"%":"SQLResultSetRowList"},iR:{"^":"i+j;"},iS:{"^":"iR+k;"}}],["","",,G,{"^":"",
hR:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.r])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.b(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.b(z,y)
z[y]=w}return C.c.a2(z,"\n")},
ds:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bK(a,b)
z.aX(a,y,c)
z.bH(a,y)
x=z.aS(a,y,35713)
if(x!=null&&J.z(x,!1)){w=z.aR(a,y)
P.U("E:Compilation failed:")
P.U("E:"+G.hR(c))
P.U("E:Failure:")
P.U(C.i.l("E:",w))
throw H.a(w)}return y},
cH:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bF(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bG(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.b(a,y)
v=J.ck(a[y])
if(z>=w)return H.b(b,z)
b[z]=v}return b},
ff:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bF(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x;++z
if(y>=a.length)return H.b(a,y)
x=J.bG(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
fg:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bF(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bG(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.ck(a[y])
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.et(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
fe:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.at(a[y],0)
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.at(a[y],1)
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.at(a[y],2)
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.at(a[y],3)
if(z>=w)return H.b(b,z)
b[z]=x}return b},
io:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ab(z,z.r,null,null,[H.C(z,0)]),y.c=z.e,x=b.x,w=[[P.f,P.D]],v=[P.ah],u=[T.ae],t=[T.o],s=[T.a2];y.t();){r=y.d
if(!x.ab(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.dU>0)H.aq("I: "+q)
continue}p=z.h(0,r)
switch($.$get$S().h(0,r).a){case"vec2":b.W(r,G.ff(H.b1(p,"$isf",s,"$asf"),null),2)
break
case"vec3":b.W(r,G.cH(H.b1(p,"$isf",t,"$asf"),null),3)
break
case"vec4":b.W(r,G.fg(H.b1(p,"$isf",u,"$asf"),null),4)
break
case"float":b.W(r,new Float32Array(H.bs(H.b1(p,"$isf",v,"$asf"))),1)
break
case"uvec4":b.W(r,G.fe(H.b1(p,"$isf",w,"$asf"),null),4)
break}}},
aC:{"^":"d;aA:c>"},
c0:{"^":"aC;d,a,b,c",
b5:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.c(new H.dm(H.jJ(this),null))+"}["+this.a+"]"],[P.r])
for(y=this.d,x=new H.ab(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.c.a2(z,"\n")}},
eU:{"^":"d0;"},
eX:{"^":"d;a,b",
bT:function(a,b,c){J.ep(this.a,b)
if(c>0)J.eM(this.a,b,c)},
cm:function(a,b,c,d,e,f,g,h){J.bB(this.a,34962,b)
J.eN(this.a,c,d,e,!1,g,h)}},
fi:{"^":"d;a,b,c,d,e"},
fb:{"^":"d;a,b,c"},
fc:{"^":"d;a,b,c,d"},
fn:{"^":"d;a,b,c,d,e",
b3:function(a){switch($.$get$S().h(0,a).a){case"vec2":this.e.j(0,a,H.A([],[T.a2]))
break
case"vec3":this.e.j(0,a,H.A([],[T.o]))
break
case"vec4":this.e.j(0,a,H.A([],[T.ae]))
break
case"float":this.e.j(0,a,H.A([],[P.ah]))
break
case"uvec4":this.e.j(0,a,H.A([],[[P.f,P.D]]))
break}},
cD:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.fb(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.y)(a),++w)z.push(a[w].a0(0))},
cB:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(b[x].a0(0))},
cC:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(b[x].a0(0))},
cE:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.fc(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.y)(a),++w)z.push(a[w].a0(0))},
cK:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.D])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.b(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.b(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.b(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.b(w,u)
w[u]=x
r=u+1
if(r>=v)return H.b(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.b(w,r)
w[r]=p
r=u+3
if(r>=v)return H.b(w,r)
w[r]=x
x=u+4
if(x>=v)return H.b(w,x)
w[x]=p
p=u+5
if(p>=v)return H.b(w,p)
w[p]=q.d
u+=6}return w},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ab(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$S().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a2(z," ")}},
d9:{"^":"d;a,b,c"},
d7:{"^":"d;a,b,c",p:{
d8:function(a,b,c){return new G.d7(a,b,c)}}},
cS:{"^":"c0;d,a,b,c"},
fS:{"^":"aC;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b2:function(a,b,c){var z,y
C.i.a7(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bB(z.a,34962,y)
J.cg(z.a,34962,b,35048)},
cL:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
W:function(a,b,c){var z,y,x,w,v
z=J.ch(a,0)===105
if(z&&this.z===0)this.z=C.b.cA(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bC(x.a))
this.b2(a,b,c)
w=$.$get$S().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b2(x.a,this.e)
x.bT(0,v,z?1:0)
x.cm(0,y.h(0,a),v,w.b4(),5126,!1,0,0)},
b1:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bC(y.a))
this.ch=a
this.b2("aPosition",a,3)
x=$.$get$S().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b2(y.a,this.e)
y.bT(0,w,0)
y.cm(0,z.h(0,"aPosition"),w,x.b4(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ab(z,z.r,null,null,[H.C(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.c(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a2(y,"  ")},
p:{
cT:function(a,b,c,d){return new G.fS(b,J.ei(b.a),c,P.J(),d,null,0,-1,null,null,P.J(),"meshdata:"+a,!1,!0)}}},
h4:{"^":"c0;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cF:function(a,b){var z
if(typeof a!=="number")return a.e6()
if(typeof b!=="number")return H.u(b)
z=a/b
if(this.z===z)return
this.z=z
this.b7()},
b7:function(){var z,y,x,w,v,u
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
b5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.o(new Float32Array(3))
u.R(x,w,v)
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
x=!!y.$isae
q=x?y.ga4(t):1
if(!!y.$iso){p=y.gm(t)
s=y.gn(t)
r=y.gC(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gC(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.u(t)
x=z[4]
if(typeof s!=="number")return H.u(s)
w=z[8]
if(typeof r!=="number")return H.u(r)
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
c.c0(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hl:{"^":"aC;d,e,f,r,x,y,z,Q,ch,a,b,c",
cQ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.j(0,t,J.cl(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.j(0,t,J.cl(w.a,v,t))}},
cT:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ab(y,y.r,null,null,[H.C(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ab(0,v))x.push(v)}for(z=this.x,y=new P.c3(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.J(0,v))x.push(v)}return x},
cV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ab(b,b.r,null,null,[H.C(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.ch(t,0)){case 117:if(w.ab(0,t)){s=b.h(0,t)
if(v.ab(0,t))H.aq("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$S().h(0,t)
if(r==null)H.I("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bH(x.a,q,s)
else if(!!J.n(s).$isfu)J.eK(x.a,q,s)
break
case"float":if(r.c===0)J.eI(x.a,q,s)
else if(!!J.n(s).$isbM)J.eJ(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a6(s,"$isF").a
J.ct(x.a,q,!1,p)}else if(!!J.n(s).$isbM)J.ct(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a6(s,"$isW").a
J.cs(x.a,q,!1,p)}else if(!!J.n(s).$isbM)J.cs(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cr(o,q,H.a6(s,"$isae").a)
else J.cr(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cq(o,q,H.a6(s,"$iso").a)
else J.cq(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cp(o,q,H.a6(s,"$isa2").a)
else J.cp(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.u(p)
J.ce(x.a,33984+p)
p=H.a6(s,"$isc_").b
J.aP(x.a,3553,p)
p=this.ch
J.bH(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.u(p)
J.ce(x.a,33984+p)
p=H.a6(s,"$isc_").b
J.aP(x.a,34067,p)
p=this.ch
J.bH(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.aq("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.z(s,!0)
o=x.a
if(p)J.b3(o,2929)
else J.bD(o,2929)
break
case"cStencilFunc":H.a6(s,"$isd9")
p=s.a
o=x.a
if(p===1281)J.bD(o,2960)
else{J.b3(o,2960)
o=s.b
n=s.c
J.eD(x.a,p,o,n)}break
case"cDepthWrite":J.ej(x.a,s)
break
case"cBlendEquation":H.a6(s,"$isd7")
p=s.a
o=x.a
if(p===1281)J.bD(o,3042)
else{J.b3(o,3042)
o=s.b
n=s.c
J.eb(x.a,o,n)
J.ea(x.a,p)}break}++u
break}}m=P.cD(0,0,0,Date.now()-new P.b8(z,!1).a,0,0)
""+u
m.k(0)},
cJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.eL(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bh()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x){w=b[x]
this.cV(w.a,w.b5())}y=this.Q
y.a_(0)
for(v=a.cy,u=new H.ab(v,v.r,null,null,[H.C(v,0)]),u.c=v.e;u.t();)y.P(0,u.d)
t=this.cT()
if(t.length!==0)P.U("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(t)))
y=a.d
v=a.e
J.b2(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.cL()
u=a.Q
r=a.z
if(s)J.e8(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.en(q,v,y,u,0,r)
else J.em(q,v,y,u,0)}else{u=z.a
if(r>1)J.el(u,v,0,y,r)
else J.ek(u,v,0,y)}if(s)J.eq(z.a)},
p:{
d_:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.ac(null,null,null,P.r)
y=c.b
x=d.b
w=c.f
v=J.ef(b.a)
u=G.ds(b.a,35633,y)
J.cf(b.a,v,u)
t=G.ds(b.a,35632,x)
J.cf(b.a,v,t)
if(w.length>0)J.eG(b.a,v,w,35980)
J.eA(b.a,v)
if(J.ez(b.a,v,35714)!==!0)H.I(J.ey(b.a,v))
z=new G.hl(b,c,d,v,P.fM(c.c,null),P.J(),P.J(),z,null,a,!1,!0)
z.cQ(a,b,c,d)
return z}}},
t:{"^":"d;a,b,c",
b4:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hr:{"^":"d;a,b,c,d,e,f,r,x",
b_:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.af(z)},
ah:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.y)(a),++x)y.push(a[x])
C.c.af(y)},
b0:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.af(z)},
b6:function(a,b){this.b=this.cW(!0,a,b)},
ai:function(a){return this.b6(a,null)},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
s=$.$get$S().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
if(c!=null)C.c.bu(w,c)
w.push("void main(void) {")
C.c.bu(w,b)
w.push("}")
return C.c.a2(w,"\n")},
p:{
bj:function(a){return new G.hr(a,null,[],[],[],[],0,P.J())}}},
d0:{"^":"aC;",
dO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.o(new Float32Array(3))
b.R(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
t=v.B(0,a)
t.ac(0)
s=b.bM(t)
s.ac(0)
r=t.bM(s)
r.ac(0)
u=s.az(v)
q=r.az(v)
v=t.az(v)
p=s.a
o=p[0]
n=r.a
m=n[0]
l=t.a
k=l[0]
j=p[1]
i=n[1]
h=l[1]
p=p[2]
n=n[2]
l=l[2]
z[15]=1
z[14]=-v
z[13]=-q
z[12]=-u
z[11]=0
z[10]=l
z[9]=n
z[8]=p
z[7]=0
z[6]=h
z[5]=i
z[4]=j
z[3]=0
z[2]=k
z[1]=m
z[0]=o
z[12]=y
z[13]=x
z[14]=w},
c_:function(a){return this.dO(a,null)}},
hG:{"^":"d;a,b,c,d,e,f,r",
cM:function(a,b){var z=this.e
if(z!==1)J.eF(a.a,b,34046,z)
J.cn(a.a,b,10240,this.r)
J.cn(a.a,b,10241,this.f)}},
c_:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fr:{"^":"c_;f,a,b,c,d,e",
cR:function(a){var z,y
z=this.d
y=this.c
J.aP(z.a,y,this.b)
J.eE(z.a,y,0,6408,6408,5121,a)}}}],["","",,Y,{"^":"",
fs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.fn(!1,[],[],[],P.J())
z.b3("aTexUV")
z.b3("aNormal")
y=P.J()
x=J.cm(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.cZ("\\s+",!0,!1)
r=P.cZ("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.y)(x),++p){o=J.eC(x[p],s," ")
n=H.k1(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.b(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.b(m,0)
l=m[0]
if(J.z(l,"g")){if(1>=o)return H.b(m,1)
y.j(0,m[1],w.length)}else if(J.z(l,"v")){if(1>=o)return H.b(m,1)
l=P.ai(m[1],null)
if(2>=o)return H.b(m,2)
k=P.ai(m[2],null)
if(3>=o)return H.b(m,3)
o=P.ai(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.o(j))}else if(J.z(l,"vt")){if(1>=o)return H.b(m,1)
l=P.ai(m[1],null)
if(2>=o)return H.b(m,2)
o=P.ai(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.a2(k))}else if(J.z(l,"vn")){if(1>=o)return H.b(m,1)
l=P.ai(m[1],null)
if(2>=o)return H.b(m,2)
k=P.ai(m[2],null)
if(3>=o)return H.b(m,3)
o=P.ai(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.o(j))}else if(J.z(l,"f")){if(o!==4&&o!==5){H.aq("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.cm(m[f],"/")
for(;e.length<3;)e.push("")
d=J.bA(P.ca(e[0],null,null),1)
if(1>=e.length)return H.b(e,1)
if(J.z(e[1],""))c=-1
else{if(1>=e.length)return H.b(e,1)
c=J.bA(P.ca(e[1],null,null),1)}if(2>=e.length)return H.b(e,2)
if(J.z(e[2],""))b=-1
else{if(2>=e.length)return H.b(e,2)
b=J.bA(P.ca(e[2],null,null),1)}o=w.length
if(J.aO(d,o)){if(d>>>0!==d||d>=o)return H.b(w,d)
i.push(w[d])}else i.push(new T.o(new Float32Array(3)))
o=J.n(c)
if(!o.A(c,-1)&&o.O(c,u.length)){if(c>>>0!==c||c>=u.length)return H.b(u,c)
g.push(u[c])}else{H.aq("problem uv "+f+" "+H.c(c))
g.push(new T.a2(new Float32Array(2)))}o=J.n(b)
if(!o.A(b,-1)&&o.O(b,v.length)){if(b>>>0!==b||b>=v.length)return H.b(v,b)
h.push(v[b])}else{H.aq("problem normals "+f+" "+H.c(b))
h.push(new T.o(new Float32Array(3)))}}if(o===4)z.cD(i)
else z.cE(i)
z.cC("aNormal",h)
z.cB("aTexUV",g)}}P.U("loaded ("+P.cD(0,0,0,Date.now()-new P.b8(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",
hL:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dp().a3()
if(v>=w)return H.b(x,v)
x[v]=(u-0.5)*c}y=G.cT(z,a.d,0,a.e.x)
y.b1(x)
return y},
hk:{"^":"hj;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dW:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sF(z,y)
w.sE(z,x)
P.U("size change "+H.c(y)+" "+H.c(x))
this.dx.cF(y,x)
this.z=y
this.Q=x},"$1","gdV",4,0,14]}}],["","",,A,{"^":"",
dS:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.er(b)!==!0)return
z=b.cU(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.c.gdN(e)
w=b.db
v=b.dx
u=new T.W(new Float32Array(9))
v.ay(u)
w.dv(u)
t=w.a
s=t[3]
t[3]=t[1]
t[1]=s
s=t[6]
t[6]=t[2]
t[2]=s
s=t[7]
t[7]=t[5]
t[5]=s
t=b.d
x=x.d
x.j(0,"uTransformationMatrix",t)
x.j(0,"uModelMatrix",v)
x.j(0,"uNormalMatrix",w)
e.push(y)
a.cJ(b.cx,e,d)
if(0>=e.length)return H.b(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.y)(y),++r)A.dS(a,y[r],z,d,e)},
bU:{"^":"d0;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
cU:function(a){var z=this.dx
z.u(a)
z.c0(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
bV:{"^":"aC;d,e,f,a,b,c"},
hj:{"^":"aC;",
cP:function(a,b,c){if(this.d==null)this.d=new G.fi(this.e,null,null,null,null)},
cI:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.e9(v.a,36160,z)
J.eO(v.a,this.x,this.y,x,w)
if(y!==0)J.ec(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.c0(P.J(),"transforms",!1,!0))
r=new T.F(new Float32Array(16))
r.I()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.y)(x),++q)A.dS(v,x[q],r,a,s)
if(0>=s.length)return H.b(s,-1)
s.pop()}},
cH:function(){return this.cI(null)}}}],["","",,V,{}],["","",,D,{"^":"",
fN:function(a){var z,y
z=new P.H(0,$.q,null,[null])
y=new XMLHttpRequest()
C.y.dT(y,"GET",a)
W.a3(y,"loadend",new D.fO(new P.dr(z,[null]),y),!1,W.lx)
y.send("")
return z},
fO:{"^":"h:1;a,b",
$1:function(a){this.a.aa(0,W.jk(this.b.response))}},
fG:{"^":"d;a,b,c",
cN:function(a){var z
a=document
z=W.bd
W.a3(a,"keydown",new D.fI(this),!1,z)
W.a3(a,"keyup",new D.fJ(this),!1,z)},
p:{
fH:function(a){var z=P.D
z=new D.fG(P.ac(null,null,null,z),P.ac(null,null,null,z),P.ac(null,null,null,z))
z.cN(a)
return z}}},
fI:{"^":"h:7;a",
$1:function(a){var z=this.a
z.a.P(0,J.cj(a))
z.b.P(0,a.which)}},
fJ:{"^":"h:7;a",
$1:function(a){var z=this.a
z.a.c3(0,J.cj(a))
z.c.P(0,a.which)}},
fV:{"^":"d;a,b,c,d,e,f,r,x",
cO:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaE(a)
W.a3(y.a,y.b,new D.fX(this),!1,H.C(y,0))
y=z.gaD(a)
W.a3(y.a,y.b,new D.fY(this),!1,H.C(y,0))
y=z.gaF(a)
W.a3(y.a,y.b,new D.fZ(this),!1,H.C(y,0))
z=z.gaG(a)
W.a3(z.a,z.b,new D.h_(this),!1,H.C(z,0))},
p:{
fW:function(a){var z=P.D
z=new D.fV(P.ac(null,null,null,z),P.ac(null,null,null,z),P.ac(null,null,null,z),0,0,0,0,0)
z.cO(a)
return z}}},
fX:{"^":"h:4;a",
$1:function(a){var z,y
z=J.e(a)
z.ad(a)
y=this.a
y.r=z.gc1(a).a
y.x=z.gc1(a).b
y.d=z.gdR(a).a
y.e=a.movementY}},
fY:{"^":"h:4;a",
$1:function(a){var z=J.e(a)
z.ad(a)
P.U("BUTTON "+H.c(z.gbE(a)))
z=this.a
z.a.P(0,a.button)
z.b.P(0,a.button)}},
fZ:{"^":"h:4;a",
$1:function(a){var z,y
z=J.e(a)
z.ad(a)
y=this.a
y.a.c3(0,z.gbE(a))
y.c.P(0,a.button)}},
h_:{"^":"h:15;a",
$1:function(a){var z=J.e(a)
z.ad(a)
this.a.f=z.gdA(a)}},
h3:{"^":"eU;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b0:function(a){var z,y
z=C.I.dE(a,0,new A.jL())
if(typeof z!=="number")return H.u(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jL:{"^":"h:16;",
$2:function(a,b){var z,y
z=J.as(a,J.a_(b))
if(typeof z!=="number")return H.u(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",W:{"^":"d;bf:a<",
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.b(z,b)
return z[b]},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.W){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.b0(this.a)},
N:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.b(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.b(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.b(y,x)
z[2]=y[x]
return new T.o(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.W(z)
y.u(this)
x=b.gbf()
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
B:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.W(z)
y.u(this)
x=b.gbf()
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
dv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},F:{"^":"d;bg:a<",
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n[3] "+this.N(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.b(z,b)
return z[b]},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.F){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.b0(this.a)},
N:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.b(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.b(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.b(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.b(y,x)
z[3]=y[x]
return new T.ae(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.F(z)
y.u(this)
x=b.gbg()
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
B:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.F(z)
y.u(this)
x=b.gbg()
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
I:function(){var z=this.a
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
ay:function(a){var z,y
z=a.a
y=this.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[3]=y[4]
z[4]=y[5]
z[5]=y[6]
z[6]=y[8]
z[7]=y[9]
z[8]=y[10]},
c0:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},bg:{"^":"d;bk:a<",
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
ga4:function(a){return this.a[3]},
u:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
cr:function(a,b,c,d){var z=this.a
z[0]=a
z[1]=b
z[2]=c
z[3]=d},
aV:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gT())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=a.a
y=z[0]
x=z[4]
w=z[8]
v=0+y+x+w
if(v>0){u=Math.sqrt(v+1)
y=this.a
y[3]=u*0.5
u=0.5/u
y[0]=(z[5]-z[7])*u
y[1]=(z[6]-z[2])*u
y[2]=(z[1]-z[3])*u}else{if(y<x)t=x<w?2:1
else t=y<w?2:0
s=(t+1)%3
r=(t+2)%3
y=t*3
x=y+t
if(x>=9)return H.b(z,x)
x=z[x]
w=s*3
q=w+s
if(q>=9)return H.b(z,q)
q=z[q]
p=r*3
o=p+r
if(o>=9)return H.b(z,o)
u=Math.sqrt(x-q-z[o]+1)
o=this.a
o[t]=u*0.5
u=0.5/u
q=w+r
if(q>=9)return H.b(z,q)
q=z[q]
x=p+s
if(x>=9)return H.b(z,x)
o[3]=(q-z[x])*u
x=y+s
if(x>=9)return H.b(z,x)
x=z[x]
w+=t
if(w>=9)return H.b(z,w)
o[s]=(x+z[w])*u
y+=r
if(y>=9)return H.b(z,y)
y=z[y]
p+=t
if(p>=9)return H.b(z,p)
o[r]=(y+z[p])*u}},
gT:function(){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return y*y+x*x+w*w+v*v},
gi:function(a){return Math.sqrt(this.gT())},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.bg(z)
y.u(this)
x=b.gbk()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
B:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.bg(z)
y.u(this)
x=b.gbk()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.b(z,b)
return z[b]},
k:function(a){var z=this.a
return H.c(z[0])+", "+H.c(z[1])+", "+H.c(z[2])+" @ "+H.c(z[3])},
p:{
cX:function(){var z=new Float32Array(4)
z[3]=1
return new T.bg(z)}}},a2:{"^":"d;bq:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a2){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.b0(this.a)},
B:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a2(z)
y.u(this)
x=b.gbq()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a2(z)
y.u(this)
x=b.gbq()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.b(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a0:function(a){var z=new T.a2(new Float32Array(2))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},o:{"^":"d;br:a<",
R:function(a,b,c){var z=this.a
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
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.o){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.b0(this.a)},
B:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.o(z)
y.u(this)
x=b.gbr()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.o(z)
y.u(this)
x=b.gbr()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.b(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gT())},
gT:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ac:function(a){var z,y,x
z=Math.sqrt(this.gT())
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
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.o(new Float32Array(3))
z.R(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a0:function(a){var z=new T.o(new Float32Array(3))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]}},ae:{"^":"d;bs:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.b0(this.a)},
B:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ae(z)
y.u(this)
x=b.gbs()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ae(z)
y.u(this)
x=b.gbs()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.b(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
ga4:function(a){return this.a[3]}}}],["","",,F,{"^":"",
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=document
y=z.querySelector("#webgl-canvas")
x=new G.eX(null,y)
w=J.ev(y,"webgl2",P.cO(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
x.a=w
if(w==null)H.I(P.cG('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
v="ChronosGL Config: "+H.c(J.ew(w))
if($.dU>0)P.U("I: "+v)
J.ed(w,0,0,0,1)
J.b3(w,2929)
w=new Float32Array(3)
v=D.fH(null)
u=D.fW(y)
t=new T.F(new Float32Array(16))
t.I()
s=new Float32Array(3)
r=new Float32Array(3)
q=new Float32Array(3)
p=new D.h3(15,-45,0.3,0,new T.o(w),-0.02,v,u,t,new T.o(s),new T.o(r),new T.o(q),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
w=new T.F(new Float32Array(16))
w.I()
v=new T.F(new Float32Array(16))
v.I()
o=new G.h4(p,50,1,1,1000,w,v,new T.F(new Float32Array(16)),P.J(),"perspective",!1,!0)
o.b7()
w=H.A([],[A.bV])
n=new R.hk(y,o,null,x,w,17664,0,0,0,0,"main",!1,!0)
n.cP("main",x,null)
n.dW(null)
W.a3(window,"resize",n.gdV(),!1,W.a9)
v=G.d_("demo",x,$.$get$dR(),$.$get$dQ())
m=new A.bV(v,[o],[],"demo",!1,!0)
w.push(m)
v=G.d_("stars",x,$.$get$e2(),$.$get$e1())
u=[]
t=v.d
s=$.$get$cv()
r=P.J()
r.j(0,"cDepthTest",!0)
r.j(0,"cDepthWrite",!1)
r.j(0,"cBlendEquation",s)
s=$.$get$d2()
r.j(0,"cStencilFunc",s)
l=z.createElement("canvas")
l.width=64
l.height=64
k=C.x.cp(l,"2d")
j=J.eg(k,32,32,1,32,32,22)
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
z=new G.hG(!1,!1,!1,!0,1,9729,9729)
q=J.eh(t.a)
i=new G.fr(l,"Utils::Particles",q,3553,t,z)
J.aP(t.a,3553,q)
J.eB(t.a,37440,1)
i.cR(l)
z.cM(t,3553)
J.ex(t.a)
J.aP(t.a,3553,null)
r.j(0,"uTexture",i)
r.j(0,"uPointSize",1000)
h=R.hL(v,2000,100)
z=new Float32Array(9)
t=new T.F(new Float32Array(16))
t.I()
q=new T.F(new Float32Array(16))
q.I()
i=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
u.push(new A.bU(new G.cS(r,"stars",!1,!0),h,[],new T.W(z),t,q,new T.o(i),new T.o(g),new T.o(f),new T.o(new Float32Array(3)),h.a,!1,!0))
w.push(new A.bV(v,[o],u,"stars",!1,!0))
z=P.J()
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$cw())
z.j(0,"cStencilFunc",s)
P.fk([D.fN("../ct_logo.obj")],null,!1).aJ(new F.jU(m,new G.cS(z,"mat",!1,!0),C.o,p,n))},
jU:{"^":"h:17;a,b,c,d,e",
$1:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z={}
y=Y.fs(J.at(a2,0))
x=this.a
w=x.d
v=G.cT("",w.d,4,w.e.x)
v.b1(G.cH(y.d,null))
w=y.cK()
u=v.d
v.y=J.bC(u.a)
t=v.ch.length
if(t<768){v.cx=new Uint8Array(H.bs(w))
v.Q=5121}else if(t<196608){v.cx=new Uint16Array(H.bs(w))
v.Q=5123}else{v.cx=new Uint32Array(H.bs(w))
v.Q=5125}J.b2(u.a,v.e)
w=v.y
t=v.cx
J.bB(u.a,34963,w)
J.cg(u.a,34963,t,35048)
G.io(y,v)
w=new Float32Array(9)
u=new T.F(new Float32Array(16))
u.I()
t=new Float32Array(16)
s=new T.F(t)
s.I()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=Math.cos(1.57)
m=Math.sin(1.57)
l=t[4]
k=t[8]
j=t[5]
i=t[9]
h=t[6]
g=t[10]
f=t[7]
e=t[11]
d=-m
t[4]=l*n+k*m
t[5]=j*n+i*m
t[6]=h*n+g*m
t[7]=f*n+e*m
t[8]=l*d+k*n
t[9]=j*d+i*n
t[10]=h*d+g*n
t[11]=f*d+e*n
n=Math.cos(3.14)
m=Math.sin(3.14)
e=t[0]
d=t[4]
f=t[1]
g=t[5]
h=t[2]
i=t[6]
j=t[3]
k=t[7]
l=-m
t[0]=e*n+d*m
t[1]=f*n+g*m
t[2]=h*n+i*m
t[3]=j*n+k*m
t[4]=e*l+d*n
t[5]=f*l+g*n
t[6]=h*l+i*n
t[7]=j*l+k*n
k=[]
t=new Float32Array(9)
l=new T.F(new Float32Array(16))
l.I()
j=new T.F(new Float32Array(16))
j.I()
i=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
c=new A.bU(null,null,k,new T.W(t),l,j,new T.o(i),new T.o(h),new T.o(g),new T.o(new Float32Array(3)),"wrapper",!1,!0)
k.push(new A.bU(this.b,v,[],new T.W(w),u,s,new T.o(r),new T.o(q),new T.o(p),new T.o(o),v.a,!1,!0))
w=new T.o(new Float32Array(3))
w.R(100,0,-100)
c.c_(w)
b=new T.o(new Float32Array(3))
b.R(0,0,1)
a=T.cX()
a0=new T.W(new Float32Array(9))
j.ay(a0)
a.aW(a0)
a1=T.cX()
a1.aV(b,3.14)
z.a=0
x.f.push(c)
z.b=0
new F.jV(z,this.d,new F.jW(z,a,a1,c,this.c,b),this.e).$1(0)}},
jW:{"^":"h:18;a,b,c,d,e,f",
$1:function(b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
z=this.a
y=z.a
if(y<1){if(typeof b0!=="number")return H.u(b0)
x=y+0.2*b0/1000
z.a=x
z=this.b.a
w=z[0]
v=z[1]
u=z[2]
t=z[3]
z=this.c.a
s=z[0]
r=z[1]
q=z[2]
p=z[3]
o=w*s+v*r+u*q+t*p
if(o<0){o=-o
s=-s
r=-r
q=-q
p=-p}n=1-x
if(1-o>0.000001){m=Math.acos(o)
l=Math.sin(m)
n=Math.sin(n*m)/l
k=Math.sin(x*m)/l}else k=x
z=new Float32Array(4)
j=new T.bg(z)
j.cr(n*w+k*s,n*v+k*r,n*u+k*q,n*t+k*p)
y=new Float32Array(9)
i=2/j.gT()
h=z[0]
g=z[1]
f=z[2]
e=z[3]
d=h*i
c=g*i
b=f*i
a=e*d
a0=e*c
a1=e*b
a2=h*d
a3=h*c
a4=h*b
a5=g*c
a6=g*b
a7=f*b
y[0]=1-(a5+a7)
y[1]=a3+a1
y[2]=a4-a0
y[3]=a3-a1
y[4]=1-(a2+a7)
y[5]=a6+a
y[6]=a4+a0
y[7]=a6-a
y[8]=1-(a2+a5)
z=this.d.d.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[4]=y[3]
z[5]=y[4]
z[6]=y[5]
z[8]=y[6]
z[9]=y[7]
z[10]=y[8]
return}else{P.U("new rotation")
z.a=0
z=this.e
y=this.f
if(z.dS()){y.R(z.a3(),z.a3(),z.a3())
y.ac(0)
a8=6.283185307179586*z.a3()}else{y.R(1,0,0)
a8=0}P.U("new rotation axis: "+y.k(0))
a9=new T.W(new Float32Array(9))
this.d.d.ay(a9)
this.b.aW(a9)
this.c.aV(y,a8)}}},
jV:{"^":"h:19;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a
y=J.aL(a7)
x=y.B(a7,z.b)
z.b=y.l(a7,0)
y=this.b
y.go+=0.001
z=y.r1
w=z.a
if(w.J(0,0)||w.J(0,1)){w=y.go
v=z.d
if(typeof v!=="number")return v.aU()
y.go=w+v*0.01
v=y.id
w=z.e
if(typeof w!=="number")return w.aU()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.J(0,37))y.go+=0.03
else if(v.J(0,39))y.go-=0.03
if(v.J(0,38))y.id+=0.03
else if(v.J(0,40))y.id-=0.03
if(v.J(0,33))y.fy*=0.99
else if(v.J(0,34))y.fy*=1.01
if(v.J(0,32)){y.go=0
y.id=0}v=z.f
if(typeof v!=="number")return v.aU()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.ds(y.id,-1.4707963267948965,1.4707963267948965)
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
y.c_(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gT())
o=v[0]/p
n=v[1]/p
m=v[2]/p
l=Math.cos(y)
k=Math.sin(y)
j=1-l
i=o*o*j+l
y=m*k
h=o*n*j-y
v=n*k
g=o*m*j+v
f=n*o*j+y
e=n*n*j+l
y=o*k
d=n*m*j-y
c=m*o*j-v
b=m*n*j+y
a=m*m*j+l
y=q[0]
v=q[4]
t=q[8]
u=q[1]
r=q[5]
a0=q[9]
a1=q[2]
a2=q[6]
a3=q[10]
a4=q[3]
a5=q[7]
a6=q[11]
q[0]=y*i+v*f+t*c
q[1]=u*i+r*f+a0*c
q[2]=a1*i+a2*f+a3*c
q[3]=a4*i+a5*f+a6*c
q[4]=y*h+v*e+t*b
q[5]=u*h+r*e+a0*b
q[6]=a1*h+a2*e+a3*b
q[7]=a4*h+a5*e+a6*b
q[8]=y*g+v*d+t*a
q[9]=u*g+r*d+a0*a
q[10]=a1*g+a2*d+a3*a
q[11]=a4*g+a5*d+a6*a
w.c.a_(0)
w.b.a_(0)
z.e=0
z.d=0
z.f=0
z.c.a_(0)
z.b.a_(0)
this.c.$1(x)
this.d.cH()
C.Z.gdk(window).aJ(this)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cJ.prototype
return J.fA.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.fB.prototype
if(typeof a=="boolean")return J.fz.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.jH=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.a4=function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.aK=function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.aL=function(a){if(typeof a=="number")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aX.prototype
return a}
J.jI=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aX.prototype
return a}
J.bv=function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aX.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.as=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jH(a).l(a,b)}
J.z=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).A(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aL(a).a5(a,b)}
J.aO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aL(a).O(a,b)}
J.bA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aL(a).B(a,b)}
J.at=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.dZ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a4(a).h(a,b)}
J.e5=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.dZ(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aK(a).j(a,b,c)}
J.e6=function(a,b,c,d){return J.e(a).da(a,b,c,d)}
J.ce=function(a,b){return J.e(a).bt(a,b)}
J.e7=function(a,b,c,d){return J.e(a).bv(a,b,c,d)}
J.cf=function(a,b,c){return J.e(a).bw(a,b,c)}
J.e8=function(a,b){return J.e(a).dl(a,b)}
J.bB=function(a,b,c){return J.e(a).bx(a,b,c)}
J.e9=function(a,b,c){return J.e(a).bz(a,b,c)}
J.aP=function(a,b,c){return J.e(a).bA(a,b,c)}
J.b2=function(a,b){return J.e(a).dq(a,b)}
J.ea=function(a,b){return J.e(a).bB(a,b)}
J.eb=function(a,b,c){return J.e(a).bC(a,b,c)}
J.cg=function(a,b,c,d){return J.e(a).bD(a,b,c,d)}
J.ec=function(a,b){return J.aK(a).bF(a,b)}
J.ed=function(a,b,c,d,e){return J.e(a).bG(a,b,c,d,e)}
J.ch=function(a,b){return J.bv(a).ax(a,b)}
J.ee=function(a,b){return J.jI(a).M(a,b)}
J.bC=function(a){return J.e(a).bI(a)}
J.ef=function(a){return J.e(a).bJ(a)}
J.eg=function(a,b,c,d,e,f,g){return J.e(a).dw(a,b,c,d,e,f,g)}
J.eh=function(a){return J.e(a).bL(a)}
J.ei=function(a){return J.e(a).dz(a)}
J.ej=function(a,b){return J.e(a).bN(a,b)}
J.bD=function(a,b){return J.e(a).bO(a,b)}
J.ek=function(a,b,c,d){return J.e(a).bP(a,b,c,d)}
J.el=function(a,b,c,d,e){return J.e(a).dB(a,b,c,d,e)}
J.em=function(a,b,c,d,e){return J.e(a).bQ(a,b,c,d,e)}
J.en=function(a,b,c,d,e,f){return J.e(a).dC(a,b,c,d,e,f)}
J.eo=function(a,b){return J.aK(a).q(a,b)}
J.b3=function(a,b){return J.e(a).bR(a,b)}
J.ep=function(a,b){return J.e(a).bS(a,b)}
J.eq=function(a){return J.e(a).dD(a)}
J.ci=function(a,b){return J.aK(a).w(a,b)}
J.er=function(a){return J.e(a).gaA(a)}
J.au=function(a){return J.e(a).gH(a)}
J.a_=function(a){return J.n(a).gv(a)}
J.bE=function(a){return J.aK(a).gK(a)}
J.a7=function(a){return J.a4(a).gi(a)}
J.es=function(a){return J.e(a).gc9(a)}
J.et=function(a){return J.e(a).ga4(a)}
J.cj=function(a){return J.e(a).ge5(a)}
J.bF=function(a){return J.e(a).gm(a)}
J.bG=function(a){return J.e(a).gn(a)}
J.ck=function(a){return J.e(a).gC(a)}
J.eu=function(a){return J.e(a).aM(a)}
J.ev=function(a,b,c){return J.e(a).aN(a,b,c)}
J.ew=function(a){return J.e(a).ae(a)}
J.ex=function(a){return J.e(a).aO(a)}
J.ey=function(a,b){return J.e(a).aP(a,b)}
J.ez=function(a,b,c){return J.e(a).aQ(a,b,c)}
J.cl=function(a,b,c){return J.e(a).aT(a,b,c)}
J.eA=function(a,b){return J.e(a).bY(a,b)}
J.eB=function(a,b,c){return J.e(a).c2(a,b,c)}
J.eC=function(a,b,c){return J.bv(a).dU(a,b,c)}
J.cm=function(a,b){return J.bv(a).ct(a,b)}
J.eD=function(a,b,c,d){return J.e(a).aZ(a,b,c,d)}
J.eE=function(a,b,c,d,e,f,g){return J.e(a).c5(a,b,c,d,e,f,g)}
J.eF=function(a,b,c,d){return J.e(a).c6(a,b,c,d)}
J.cn=function(a,b,c,d){return J.e(a).c7(a,b,c,d)}
J.co=function(a){return J.aL(a).e_(a)}
J.aQ=function(a){return J.n(a).k(a)}
J.eG=function(a,b,c,d){return J.e(a).e1(a,b,c,d)}
J.eH=function(a){return J.bv(a).e2(a)}
J.eI=function(a,b,c){return J.e(a).ca(a,b,c)}
J.eJ=function(a,b,c){return J.e(a).cb(a,b,c)}
J.bH=function(a,b,c){return J.e(a).cc(a,b,c)}
J.eK=function(a,b,c){return J.e(a).cd(a,b,c)}
J.cp=function(a,b,c){return J.e(a).ce(a,b,c)}
J.cq=function(a,b,c){return J.e(a).cf(a,b,c)}
J.cr=function(a,b,c){return J.e(a).cg(a,b,c)}
J.cs=function(a,b,c,d){return J.e(a).ci(a,b,c,d)}
J.ct=function(a,b,c,d){return J.e(a).cj(a,b,c,d)}
J.eL=function(a,b){return J.e(a).ck(a,b)}
J.eM=function(a,b,c){return J.e(a).e3(a,b,c)}
J.eN=function(a,b,c,d,e,f,g){return J.e(a).cl(a,b,c,d,e,f,g)}
J.eO=function(a,b,c,d,e){return J.e(a).cn(a,b,c,d,e)}
I.cb=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.x=W.eV.prototype
C.y=W.fp.prototype
C.z=J.i.prototype
C.c=J.ax.prototype
C.b=J.cJ.prototype
C.a=J.az.prototype
C.i=J.aA.prototype
C.G=J.aB.prototype
C.I=H.h0.prototype
C.r=J.h5.prototype
C.n=J.aX.prototype
C.Z=W.hM.prototype
C.o=new P.is()
C.d=new P.iK()
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
C.p=function(hooks) { return hooks; }

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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=I.cb([])
C.J=new G.t("vec3","vertex btangents",0)
C.e=new G.t("vec3","",0)
C.K=new G.t("vec4","delta from light",0)
C.m=new G.t("","",0)
C.t=new G.t("vec3","vertex coordinates",0)
C.L=new G.t("vec3","vertex binormals",0)
C.u=new G.t("vec4","for wireframe",0)
C.M=new G.t("vec4","per vertex color",0)
C.N=new G.t("float","for normal maps",0)
C.j=new G.t("mat4","",0)
C.P=new G.t("mat4","",4)
C.O=new G.t("mat4","",128)
C.f=new G.t("float","",0)
C.Q=new G.t("float","",4)
C.R=new G.t("float","depth for shadowmaps",0)
C.h=new G.t("sampler2D","",0)
C.S=new G.t("float","for bump maps",0)
C.T=new G.t("vec2","texture uvs",0)
C.U=new G.t("float","time since program start in sec",0)
C.k=new G.t("vec2","",0)
C.V=new G.t("samplerCube","",0)
C.l=new G.t("vec4","",0)
C.W=new G.t("vec3","vertex normals",0)
C.X=new G.t("sampler2DShadow","",0)
C.v=new G.t("vec3","per vertex color",0)
C.w=new G.t("mat3","",0)
C.Y=new G.t("vec3","vertex tangents",0)
$.V=0
$.av=null
$.cx=null
$.dX=null
$.dM=null
$.e3=null
$.bu=null
$.bx=null
$.c9=null
$.al=null
$.aH=null
$.aI=null
$.c5=!1
$.q=C.d
$.dU=0
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
I.$lazy(y,x,w)}})(["cB","$get$cB",function(){return H.dV("_$dart_dartClosure")},"bP","$get$bP",function(){return H.dV("_$dart_js")},"db","$get$db",function(){return H.X(H.bq({
toString:function(){return"$receiver$"}}))},"dc","$get$dc",function(){return H.X(H.bq({$method$:null,
toString:function(){return"$receiver$"}}))},"dd","$get$dd",function(){return H.X(H.bq(null))},"de","$get$de",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"di","$get$di",function(){return H.X(H.bq(void 0))},"dj","$get$dj",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dg","$get$dg",function(){return H.X(H.dh(null))},"df","$get$df",function(){return H.X(function(){try{null.$method$}catch(z){return z.message}}())},"dl","$get$dl",function(){return H.X(H.dh(void 0))},"dk","$get$dk",function(){return H.X(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c2","$get$c2",function(){return P.hS()},"cI","$get$cI",function(){return P.i9(null,P.aT)},"aJ","$get$aJ",function(){return[]},"d2","$get$d2",function(){return new G.d9(1281,0,4294967295)},"cw","$get$cw",function(){return G.d8(1281,1281,1281)},"cv","$get$cv",function(){return G.d8(32774,770,769)},"S","$get$S",function(){return P.cO(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.v,"aColorAlpha",C.M,"aPosition",C.t,"aTexUV",C.T,"aNormal",C.W,"aBinormal",C.L,"aCenter",C.u,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.Y,"aBitangent",C.J,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.v,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.t,"vPositionFromLight",C.K,"vCenter",C.u,"vDepth",C.R,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.w,"uConvolutionMatrix",C.w,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.X,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.V,"uAnimationTable",C.h,"uTime",C.U,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.O,"uLightDescs",C.P,"uLightCount",C.f,"uLightTypes",C.Q,"uBumpScale",C.S,"uNormalScale",C.N])},"dp","$get$dp",function(){return P.hf(null)},"e2","$get$e2",function(){var z=G.bj("PointSpritesV")
z.b_(["aPosition"])
z.ah(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ai(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"e1","$get$e1",function(){var z=G.bj("PointSpritesF")
z.ah(["uTexture"])
z.ai(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"dR","$get$dR",function(){var z=G.bj("FixedVertexColorV")
z.b_(["aPosition"])
z.ah(["uPerspectiveViewMatrix","uModelMatrix"])
z.b0(["vColor"])
z.b6(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"dQ","$get$dQ",function(){var z=G.bj("FixedVertexColorF")
z.b0(["vColor"])
z.ai(["oFragColor = vec4( vColor, 1.0 );"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1},{func:1,args:[,]},{func:1,args:[,,]},{func:1,v:true},{func:1,args:[W.K]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.r,args:[P.D]},{func:1,args:[W.bd]},{func:1,args:[,P.r]},{func:1,args:[P.r]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aF]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aF]},{func:1,v:true,args:[W.a9]},{func:1,args:[W.aG]},{func:1,args:[P.D,P.d]},{func:1,args:[P.f]},{func:1,v:true,args:[P.ah]},{func:1,v:true,args:[P.aM]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.k3(d||a)
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
Isolate.cb=a.cb
Isolate.ao=a.ao
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
if(typeof dartMainRunner==="function")dartMainRunner(F.e_,[])
else F.e_([])})})()
//# sourceMappingURL=slerp.dart.js.map
