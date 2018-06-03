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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bS"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bS"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bS(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ag=function(){}
var dart=[["","",,H,{"^":"",kd:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
bX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aR:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bW==null){H.j1()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.d5("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bE()]
if(v!=null)return v
v=H.j5(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$bE(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
f:{"^":"c;",
B:function(a,b){return a===b},
gv:function(a){return H.au(a)},
k:["cb",function(a){return"Instance of '"+H.av(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
eX:{"^":"f;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isiN:1},
cs:{"^":"f;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isaJ:1},
bF:{"^":"f;",
gv:function(a){return 0},
k:["cc",function(a){return String(a)}]},
fp:{"^":"bF;"},
aN:{"^":"bF;"},
at:{"^":"bF;",
k:function(a){var z=a[$.$get$ck()]
return z==null?this.cc(a):J.aF(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ap:{"^":"f;$ti",
cS:function(a,b){var z,y
if(!!a.fixed$length)H.O(P.o("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.J)(b),++y)a.push(b[y])},
u:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.H(a))}},
a_:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
aJ:function(a,b){return H.cM(a,b,null,H.y(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
c7:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.O(P.o("setRange"))
P.fx(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$ish){x=e
w=d}else{w=y.aJ(d,e).dr(0,!1)
x=0}y=J.ab(w)
if(x+z>y.gi(w))throw H.a(H.eW())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
a2:function(a,b,c,d){return this.c7(a,b,c,d,0)},
c8:function(a,b){if(!!a.immutable$list)H.O(P.o("sort"))
H.fL(a,J.iA())},
ac:function(a){return this.c8(a,null)},
k:function(a){return P.bD(a,"[","]")},
gI:function(a){return new J.en(a,a.length,0,null,[H.y(a,0)])},
gv:function(a){return H.au(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.O(P.o("set length"))
if(b<0)throw H.a(P.b6(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Z(a,b))
if(b>=a.length||b<0)throw H.a(H.Z(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.O(P.o("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Z(a,b))
if(b>=a.length||b<0)throw H.a(H.Z(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.z([],[H.y(a,0)])
this.si(y,z)
this.a2(y,0,a.length,a)
this.a2(y,a.length,z,b)
return y},
$isl:1,
$asl:I.ag,
$ish:1,
p:{
aq:function(a){a.fixed$length=Array
return a},
kb:[function(a,b){return J.dP(a,b)},"$2","iA",8,0,19]}},
kc:{"^":"ap;$ti"},
en:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.J(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ar:{"^":"f;",
K:function(a,b){var z
if(typeof b!=="number")throw H.a(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gav(b)
if(this.gav(a)===z)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
dq:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.o(""+a+".toInt()"))},
cZ:function(a,b,c){if(this.K(b,c)>0)throw H.a(H.U(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a+b},
F:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a-b},
cd:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b6(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.b6(a,b)},
b6:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.o("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
b4:function(a,b){var z
if(a>0)z=this.cM(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cM:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a<b},
a1:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a>b},
$isaa:1,
$isaB:1},
cr:{"^":"ar;",$isA:1},
eY:{"^":"ar;"},
as:{"^":"f;",
d_:function(a,b){if(b>=a.length)H.O(H.Z(a,b))
return a.charCodeAt(b)},
aX:function(a,b){if(b>=a.length)throw H.a(H.Z(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.em(b,null,null))
return a+b},
aM:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.O(H.U(c))
if(b<0)throw H.a(P.b7(b,null,null))
if(typeof c!=="number")return H.D(c)
if(b>c)throw H.a(P.b7(b,null,null))
if(c>a.length)throw H.a(P.b7(c,null,null))
return a.substring(b,c)},
c9:function(a,b){return this.aM(a,b,null)},
K:function(a,b){var z
if(typeof b!=="string")throw H.a(H.U(b))
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
$asl:I.ag,
$isp:1}}],["","",,H,{"^":"",
eW:function(){return new P.cI("Too few elements")},
fL:function(a,b){H.aL(a,0,J.a0(a)-1,b)},
aL:function(a,b,c,d){if(c-b<=32)H.fK(a,b,c,d)
else H.fJ(a,b,c,d)},
fK:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ab(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.G(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
fJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.X(c-b+1,6)
y=b+z
x=c-z
w=C.b.X(b+c,2)
v=w-z
u=w+z
t=J.ab(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.G(d.$2(s,r),0)){n=r
r=s
s=n}if(J.G(d.$2(p,o),0)){n=o
o=p
p=n}if(J.G(d.$2(s,q),0)){n=q
q=s
s=n}if(J.G(d.$2(r,q),0)){n=q
q=r
r=n}if(J.G(d.$2(s,p),0)){n=p
p=s
s=n}if(J.G(d.$2(q,p),0)){n=p
p=q
q=n}if(J.G(d.$2(r,o),0)){n=o
o=r
r=n}if(J.G(d.$2(r,q),0)){n=q
q=r
r=n}if(J.G(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.F(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.B(i,0))continue
if(h.S(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aQ(i)
if(h.a1(i,0)){--l
continue}else{g=l-1
if(h.S(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aT(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.G(d.$2(j,p),0))for(;!0;)if(J.G(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aT(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aL(a,b,m-2,d)
H.aL(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.F(d.$2(t.h(a,m),r),0);)++m
for(;J.F(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.F(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.F(d.$2(j,p),0))for(;!0;)if(J.F(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aT(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aL(a,m,l,d)}else H.aL(a,m,l,d)},
cm:{"^":"eU;$ti"},
cw:{"^":"cm;$ti",
gI:function(a){return new H.cx(this,this.gi(this),0,null,[H.dA(this,"cw",0)])},
u:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.H(this))}}},
fX:{"^":"cw;a,b,c,$ti",
cr:function(a,b,c,d){},
gcE:function(){var z=J.a0(this.a)
return z},
gcN:function(){var z,y
z=J.a0(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a0(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gcN()+b
if(b>=0){y=this.gcE()
if(typeof y!=="number")return H.D(y)
y=z>=y}else y=!0
if(y)throw H.a(P.u(b,this,"index",null,null))
return J.dZ(this.a,z)},
dr:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ab(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.z(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.H(this))}return t},
p:{
cM:function(a,b,c,d){var z=new H.fX(a,b,c,[d])
z.cr(a,b,c,d)
return z}}},
cx:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.ab(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.H(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
b1:{"^":"c;$ti"}}],["","",,H,{"^":"",
iW:function(a){return init.types[a]},
j4:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$ism},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aF(a)
if(typeof z!=="string")throw H.a(H.U(a))
return z},
au:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
av:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.n(a).$isaN){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.l.aX(w,0)===36)w=C.l.c9(w,1)
r=H.bo(H.ah(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
C:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fw:function(a){return a.b?H.C(a).getUTCFullYear()+0:H.C(a).getFullYear()+0},
fu:function(a){return a.b?H.C(a).getUTCMonth()+1:H.C(a).getMonth()+1},
fq:function(a){return a.b?H.C(a).getUTCDate()+0:H.C(a).getDate()+0},
fr:function(a){return a.b?H.C(a).getUTCHours()+0:H.C(a).getHours()+0},
ft:function(a){return a.b?H.C(a).getUTCMinutes()+0:H.C(a).getMinutes()+0},
fv:function(a){return a.b?H.C(a).getUTCSeconds()+0:H.C(a).getSeconds()+0},
fs:function(a){return a.b?H.C(a).getUTCMilliseconds()+0:H.C(a).getMilliseconds()+0},
D:function(a){throw H.a(H.U(a))},
d:function(a,b){if(a==null)J.a0(a)
throw H.a(H.Z(a,b))},
Z:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=J.a0(a)
if(!(b<0)){if(typeof z!=="number")return H.D(z)
y=b>=z}else y=!0
if(y)return P.u(b,a,"index",null,z)
return P.b7(b,"index",null)},
U:function(a){return new P.am(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.cD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dI})
z.name=""}else z.toString=H.dI
return z},
dI:function(){return J.aF(this.dartException)},
O:function(a){throw H.a(a)},
J:function(a){throw H.a(P.H(a))},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.b4(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bG(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cC(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$cS()
u=$.$get$cT()
t=$.$get$cU()
s=$.$get$cV()
r=$.$get$cZ()
q=$.$get$d_()
p=$.$get$cX()
$.$get$cW()
o=$.$get$d1()
n=$.$get$d0()
m=v.J(y)
if(m!=null)return z.$1(H.bG(y,m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.bG(y,m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cC(y,m))}}return z.$1(new H.h2(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cH()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cH()
return a},
ac:function(a){var z
if(a==null)return new H.dj(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dj(a,null)},
iR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
j3:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.co("Unsupported number of arguments for wrapped closure"))},
Y:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j3)
a.$identity=z
return z},
ey:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$ish){z.$reflectionInfo=c
x=H.fz(z).r}else x=c
w=d?Object.create(new H.fO().constructor.prototype):Object.create(new H.by(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.P
$.P=J.ak(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cj(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.iW,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.ch:H.bz
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cj(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
ev:function(a,b,c,d){var z=H.bz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cj:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ex(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ev(y,!w,z,b)
if(y===0){w=$.P
$.P=J.ak(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.an
if(v==null){v=H.aX("self")
$.an=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.P
$.P=J.ak(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.an
if(v==null){v=H.aX("self")
$.an=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
ew:function(a,b,c,d){var z,y
z=H.bz
y=H.ch
switch(b?-1:a){case 0:throw H.a(H.fD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ex:function(a,b){var z,y,x,w,v,u,t,s
z=$.an
if(z==null){z=H.aX("self")
$.an=z}y=$.cg
if(y==null){y=H.aX("receiver")
$.cg=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ew(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.P
$.P=J.ak(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.P
$.P=J.ak(y,1)
return new Function(z+H.b(y)+"}")()},
bS:function(a,b,c,d,e,f){var z,y
z=J.aq(b)
y=!!J.n(c).$ish?J.aq(c):c
return H.ey(a,z,y,!!d,e,f)},
j8:function(a,b){var z=J.ab(b)
throw H.a(H.ci(a,z.aM(b,3,z.gi(b))))},
a_:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.j8(a,b)},
bT:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dy:function(a,b){var z,y
if(a==null)return!1
z=H.bT(J.n(a))
if(z==null)y=!1
else y=H.dC(z,b)
return y},
iI:function(a){var z
if(a instanceof H.i){z=H.bT(J.n(a))
if(z!=null)return H.bY(z,null)
return"Closure"}return H.av(a)},
ja:function(a){throw H.a(new P.eB(a))},
dz:function(a){return init.getIsolateTag(a)},
z:function(a,b){a.$ti=b
return a},
ah:function(a){if(a==null)return
return a.$ti},
lm:function(a,b,c){return H.aC(a["$as"+H.b(c)],H.ah(b))},
bl:function(a,b,c,d){var z=H.aC(a["$as"+H.b(c)],H.ah(b))
return z==null?null:z[d]},
dA:function(a,b,c){var z=H.aC(a["$as"+H.b(b)],H.ah(a))
return z==null?null:z[c]},
y:function(a,b){var z=H.ah(a)
return z==null?null:z[b]},
bY:function(a,b){var z=H.ai(a,b)
return z},
ai:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bo(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ai(z,b)
return H.iz(a,b)}return"unknown-reified-type"},
iz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ai(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ai(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ai(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.iQ(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ai(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bo:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bK("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ai(u,c)}return w?"":"<"+z.k(0)+">"},
iV:function(a){var z,y,x
if(a instanceof H.i){z=H.bT(J.n(a))
if(z!=null)return H.bY(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bo(a.$ti,0,null)
return y+x},
aC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bR:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ah(a)
y=J.n(a)
if(y[b]==null)return!1
return H.du(H.aC(y[d],z),c)},
aS:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bR(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bo(c,0,null)
throw H.a(H.ci(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
du:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.E(a[y],b[y]))return!1
return!0},
lk:function(a,b,c){return a.apply(b,H.aC(J.n(b)["$as"+H.b(c)],H.ah(b)))},
E:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aJ")return!0
if('func' in b)return H.dC(a,b)
if('func' in a)return b.builtin$cls==="k3"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.bY(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.du(H.aC(u,z),x)},
dt:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.E(z,v)||H.E(v,z)))return!1}return!0},
iJ:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aq(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.E(v,u)||H.E(u,v)))return!1}return!0},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.E(z,y)||H.E(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dt(x,w,!1))return!1
if(!H.dt(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.E(o,n)||H.E(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.E(o,n)||H.E(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.E(o,n)||H.E(n,o)))return!1}}return H.iJ(a.named,b.named)},
ll:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j5:function(a){var z,y,x,w,v,u
z=$.dB.$1(a)
y=$.bk[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bn[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ds.$2(a,z)
if(z!=null){y=$.bk[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bn[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bp(x)
$.bk[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bn[z]=x
return x}if(v==="-"){u=H.bp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dE(a,x)
if(v==="*")throw H.a(P.d5(z))
if(init.leafTags[z]===true){u=H.bp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dE(a,x)},
dE:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bp:function(a){return J.bX(a,!1,null,!!a.$ism)},
j7:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bp(z)
else return J.bX(z,c,null,null)},
j1:function(){if(!0===$.bW)return
$.bW=!0
H.j2()},
j2:function(){var z,y,x,w,v,u,t,s
$.bk=Object.create(null)
$.bn=Object.create(null)
H.iY()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dH.$1(v)
if(u!=null){t=H.j7(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iY:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.af(C.A,H.af(C.F,H.af(C.o,H.af(C.o,H.af(C.E,H.af(C.B,H.af(C.C(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dB=new H.iZ(v)
$.ds=new H.j_(u)
$.dH=new H.j0(t)},
af:function(a,b){return a(b)||b},
fy:{"^":"c;a,b,c,d,e,f,r,x",p:{
fz:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aq(z)
y=z[0]
x=z[1]
return new H.fy(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
h0:{"^":"c;a,b,c,d,e,f",
J:function(a){var z,y,x
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
S:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.h0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fk:{"^":"B;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
cC:function(a,b){return new H.fk(a,b==null?null:b.method)}}},
eZ:{"^":"B;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bG:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eZ(a,y,z?null:b.receiver)}}},
h2:{"^":"B;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jb:{"^":"i:1;a",
$1:function(a){if(!!J.n(a).$isB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dj:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.av(this).trim()+"'"},
gc5:function(){return this},
gc5:function(){return this}},
cN:{"^":"i;"},
fO:{"^":"cN;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
by:{"^":"cN;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.by))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.au(this.a)
else y=typeof z!=="object"?J.V(z):H.au(z)
return(y^H.au(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.av(z)+"'")},
p:{
bz:function(a){return a.a},
ch:function(a){return a.c},
aX:function(a){var z,y,x,w,v
z=new H.by("self","target","receiver","name")
y=J.aq(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
et:{"^":"B;a",
k:function(a){return this.a},
p:{
ci:function(a,b){return new H.et("CastError: "+H.b(P.bB(a))+": type '"+H.iI(a)+"' is not a subtype of type '"+b+"'")}}},
fC:{"^":"B;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
fD:function(a){return new H.fC(a)}}},
d2:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.V(this.a)},
B:function(a,b){if(b==null)return!1
return b instanceof H.d2&&J.F(this.a,b.a)}},
ct:{"^":"f6;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gN:function(a){return new H.f4(this,[H.y(this,0)])},
a7:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b_(y,b)}else return this.de(b)},
de:function(a){var z=this.d
if(z==null)return!1
return this.au(this.am(z,J.V(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a4(z,b)
x=y==null?null:y.gZ()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a4(w,b)
x=y==null?null:y.gZ()
return x}else return this.df(b)},
df:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.am(z,J.V(a)&0x3ffffff)
x=this.au(y,a)
if(x<0)return
return y[x].gZ()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ao()
this.b=z}this.aW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ao()
this.c=y}this.aW(y,b,c)}else{x=this.d
if(x==null){x=this.ao()
this.d=x}w=J.V(b)&0x3ffffff
v=this.am(x,w)
if(v==null)this.as(x,w,[this.ap(b,c)])
else{u=this.au(v,b)
if(u>=0)v[u].sZ(c)
else v.push(this.ap(b,c))}}},
u:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.H(this))
z=z.c}},
aW:function(a,b,c){var z=this.a4(a,b)
if(z==null)this.as(a,b,this.ap(b,c))
else z.sZ(c)},
b1:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.f3(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b1()
return z},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].gdd(),b))return y
return-1},
k:function(a){return P.cy(this)},
a4:function(a,b){return a[b]},
am:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
cC:function(a,b){delete a[b]},
b_:function(a,b){return this.a4(a,b)!=null},
ao:function(){var z=Object.create(null)
this.as(z,"<non-identifier-key>",z)
this.cC(z,"<non-identifier-key>")
return z}},
f3:{"^":"c;dd:a<,Z:b@,c,d"},
f4:{"^":"cm;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.a2(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
u:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.H(z))
y=y.c}}},
a2:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.H(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
iZ:{"^":"i:1;a",
$1:function(a){return this.a(a)}},
j_:{"^":"i:8;a",
$2:function(a,b){return this.a(a,b)}},
j0:{"^":"i:9;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
iQ:function(a){return J.aq(H.z(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bh:function(a){var z,y,x
if(!!J.n(a).$isl)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
T:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.Z(b,a))},
fj:{"^":"f;","%":"DataView;ArrayBufferView;bI|dd|de|cB|df|dg|a4"},
bI:{"^":"fj;",
gi:function(a){return a.length},
$isl:1,
$asl:I.ag,
$ism:1,
$asm:I.ag},
cB:{"^":"de;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
j:function(a,b,c){H.T(b,a,a.length)
a[b]=c},
$asb1:function(){return[P.aa]},
$asj:function(){return[P.aa]},
$ish:1,
$ash:function(){return[P.aa]},
"%":"Float64Array"},
a4:{"^":"dg;",
j:function(a,b,c){H.T(b,a,a.length)
a[b]=c},
$asb1:function(){return[P.A]},
$asj:function(){return[P.A]},
$ish:1,
$ash:function(){return[P.A]}},
fi:{"^":"cB;",$isbC:1,"%":"Float32Array"},
kr:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ks:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
$iseT:1,
"%":"Int32Array"},
kt:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ku:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kv:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kw:{"^":"a4;",
gi:function(a){return a.length},
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kx:{"^":"a4;",
gi:function(a){return a.length},
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dd:{"^":"bI+j;"},
de:{"^":"dd+b1;"},
df:{"^":"bI+j;"},
dg:{"^":"df+b1;"}}],["","",,P,{"^":"",
h9:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iK()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.Y(new P.hb(z),1)).observe(y,{childList:true})
return new P.ha(z,y,x)}else if(self.setImmediate!=null)return P.iL()
return P.iM()},
l9:[function(a){self.scheduleImmediate(H.Y(new P.hc(a),0))},"$1","iK",4,0,5],
la:[function(a){self.setImmediate(H.Y(new P.hd(a),0))},"$1","iL",4,0,5],
lb:[function(a){P.ic(0,a)},"$1","iM",4,0,5],
iD:function(a,b){if(H.dy(a,{func:1,args:[P.aJ,P.aJ]})){b.toString
return a}else{b.toString
return a}},
iC:function(){var z,y
for(;z=$.ae,z!=null;){$.az=null
y=z.b
$.ae=y
if(y==null)$.ay=null
z.a.$0()}},
lj:[function(){$.bP=!0
try{P.iC()}finally{$.az=null
$.bP=!1
if($.ae!=null)$.$get$bM().$1(P.dv())}},"$0","dv",0,0,3],
dq:function(a){var z=new P.d7(a,null)
if($.ae==null){$.ay=z
$.ae=z
if(!$.bP)$.$get$bM().$1(P.dv())}else{$.ay.b=z
$.ay=z}},
iH:function(a){var z,y,x
z=$.ae
if(z==null){P.dq(a)
$.az=$.ay
return}y=new P.d7(a,null)
x=$.az
if(x==null){y.b=z
$.az=y
$.ae=y}else{y.b=x.b
x.b=y
$.az=y
if(y.b==null)$.ay=y}},
j9:function(a){var z=$.t
if(C.e===z){P.bj(null,null,C.e,a)
return}z.toString
P.bj(null,null,z,z.bf(a))},
iG:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.aj(u)
y=H.ac(u)
$.t.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.al(x)
w=t
v=x.gO()
c.$2(w,v)}}},
iv:function(a,b,c,d){var z=a.cY(0)
if(!!J.n(z).$isaI&&z!==$.$get$cq())z.du(new P.iy(b,c,d))
else b.V(c,d)},
iw:function(a,b){return new P.ix(a,b)},
h7:function(){return $.t},
bi:function(a,b,c,d,e){var z={}
z.a=d
P.iH(new P.iE(z,e))},
dn:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
dp:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
iF:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
bj:function(a,b,c,d){var z=C.e!==c
if(z)d=!(!z||!1)?c.bf(d):c.cV(d)
P.dq(d)},
hb:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ha:{"^":"i:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hc:{"^":"i:0;a",
$0:function(){this.a.$0()}},
hd:{"^":"i:0;a",
$0:function(){this.a.$0()}},
ib:{"^":"c;a,b,c",
cw:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.Y(new P.id(this,b),0),a)
else throw H.a(P.o("`setTimeout()` not found."))},
p:{
ic:function(a,b){var z=new P.ib(!0,null,0)
z.cw(a,b)
return z}}},
id:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jl:{"^":"c;$ti"},
hf:{"^":"c;$ti"},
i8:{"^":"hf;a,$ti",
d0:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.fN("Future already completed"))
z.a3(b)}},
d9:{"^":"c;aq:a<,b,c,d,e,$ti",
gcR:function(){return this.b.b},
gbA:function(){return(this.c&1)!==0},
gdc:function(){return(this.c&2)!==0},
gbz:function(){return this.c===8},
d9:function(a){return this.b.b.ax(this.d,a)},
dg:function(a){if(this.c!==6)return!0
return this.b.b.ax(this.d,J.al(a))},
d8:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.dy(z,{func:1,args:[P.c,P.aw]}))return x.dl(z,y.gG(a),a.gO())
else return x.ax(z,y.gG(a))},
da:function(){return this.b.b.bL(this.d)}},
a8:{"^":"c;b5:a<,b,cL:c<,$ti",
cv:function(a,b){this.a=4
this.c=a},
gcG:function(){return this.a===2},
gan:function(){return this.a>=4},
bQ:function(a,b){var z,y,x
z=$.t
if(z!==C.e){z.toString
if(b!=null)b=P.iD(b,z)}y=new P.a8(0,z,null,[null])
x=b==null?1:3
this.af(new P.d9(null,y,x,a,b,[H.y(this,0),null]))
return y},
bP:function(a){return this.bQ(a,null)},
du:function(a){var z,y
z=$.t
y=new P.a8(0,z,null,this.$ti)
if(z!==C.e)z.toString
z=H.y(this,0)
this.af(new P.d9(null,y,8,a,null,[z,z]))
return y},
af:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gan()){y.af(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bj(null,null,z,new P.hs(this,a))}},
b2:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaq()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gan()){v.b2(a)
return}this.a=v.a
this.c=v.c}z.a=this.ar(a)
y=this.b
y.toString
P.bj(null,null,y,new P.hx(z,this))}},
a5:function(){var z=this.c
this.c=null
return this.ar(z)},
ar:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaq()
z.a=y}return y},
a3:function(a){var z,y,x
z=this.$ti
y=H.bR(a,"$isaI",z,"$asaI")
if(y){z=H.bR(a,"$isa8",z,null)
if(z)P.da(a,this)
else P.ht(a,this)}else{x=this.a5()
this.a=4
this.c=a
P.ax(this,x)}},
V:[function(a,b){var z=this.a5()
this.a=8
this.c=new P.aW(a,b)
P.ax(this,z)},function(a){return this.V(a,null)},"dA","$2","$1","gaZ",4,2,11],
$isaI:1,
p:{
ht:function(a,b){var z,y,x
b.a=1
try{a.bQ(new P.hu(b),new P.hv(b))}catch(x){z=H.aj(x)
y=H.ac(x)
P.j9(new P.hw(b,z,y))}},
da:function(a,b){var z
for(;a.gcG();)a=a.c
if(a.gan()){z=b.a5()
b.a=a.a
b.c=a.c
P.ax(b,z)}else{z=b.c
b.a=2
b.c=a
a.b2(z)}},
ax:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.al(v)
t=v.gO()
y.toString
P.bi(null,null,y,u,t)}return}for(;b.gaq()!=null;b=s){s=b.a
b.a=null
P.ax(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbA()||b.gbz()){q=b.gcR()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.al(v)
t=v.gO()
y.toString
P.bi(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gbz())new P.hA(z,x,b,w).$0()
else if(y){if(b.gbA())new P.hz(x,b,r).$0()}else if(b.gdc())new P.hy(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.n(y).$isaI){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.ar(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.da(y,o)
return}}o=b.b
b=o.a5()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
hs:{"^":"i:0;a,b",
$0:function(){P.ax(this.a,this.b)}},
hx:{"^":"i:0;a,b",
$0:function(){P.ax(this.b,this.a.a)}},
hu:{"^":"i:1;a",
$1:function(a){var z=this.a
z.a=0
z.a3(a)}},
hv:{"^":"i:12;a",
$2:function(a,b){this.a.V(a,b)},
$1:function(a){return this.$2(a,null)}},
hw:{"^":"i:0;a,b,c",
$0:function(){this.a.V(this.b,this.c)}},
hA:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.da()}catch(w){y=H.aj(w)
x=H.ac(w)
if(this.d){v=J.al(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aW(y,x)
u.a=!0
return}if(!!J.n(z).$isaI){if(z instanceof P.a8&&z.gb5()>=4){if(z.gb5()===8){v=this.b
v.b=z.gcL()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bP(new P.hB(t))
v.a=!1}}},
hB:{"^":"i:1;a",
$1:function(a){return this.a}},
hz:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.d9(this.c)}catch(x){z=H.aj(x)
y=H.ac(x)
w=this.a
w.b=new P.aW(z,y)
w.a=!0}}},
hy:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dg(z)===!0&&w.e!=null){v=this.b
v.b=w.d8(z)
v.a=!1}}catch(u){y=H.aj(u)
x=H.ac(u)
w=this.a
v=J.al(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aW(y,x)
s.a=!0}}},
d7:{"^":"c;a,b"},
cK:{"^":"c;$ti",
u:function(a,b){var z,y
z={}
y=new P.a8(0,$.t,null,[null])
z.a=null
z.a=this.bD(new P.fT(z,this,b,y),!0,new P.fU(y),y.gaZ())
return y},
gi:function(a){var z,y
z={}
y=new P.a8(0,$.t,null,[P.A])
z.a=0
this.bD(new P.fV(z),!0,new P.fW(z,y),y.gaZ())
return y}},
fT:{"^":"i;a,b,c,d",
$1:function(a){P.iG(new P.fR(this.c,a),new P.fS(),P.iw(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.dA(this.b,"cK",0)]}}},
fR:{"^":"i:0;a,b",
$0:function(){return this.a.$1(this.b)}},
fS:{"^":"i:1;",
$1:function(a){}},
fU:{"^":"i:0;a",
$0:function(){this.a.a3(null)}},
fV:{"^":"i:1;a",
$1:function(a){++this.a.a}},
fW:{"^":"i:0;a,b",
$0:function(){this.b.a3(this.a.a)}},
fQ:{"^":"c;$ti"},
iy:{"^":"i:0;a,b,c",
$0:function(){return this.a.V(this.b,this.c)}},
ix:{"^":"i:13;a,b",
$2:function(a,b){P.iv(this.a,this.b,a,b)}},
aW:{"^":"c;G:a>,O:b<",
k:function(a){return H.b(this.a)},
$isB:1},
ij:{"^":"c;"},
iE:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cD()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aF(y)
throw x}},
hX:{"^":"ij;",
dm:function(a){var z,y,x
try{if(C.e===$.t){a.$0()
return}P.dn(null,null,this,a)}catch(x){z=H.aj(x)
y=H.ac(x)
P.bi(null,null,this,z,y)}},
dn:function(a,b){var z,y,x
try{if(C.e===$.t){a.$1(b)
return}P.dp(null,null,this,a,b)}catch(x){z=H.aj(x)
y=H.ac(x)
P.bi(null,null,this,z,y)}},
cV:function(a){return new P.hZ(this,a)},
bf:function(a){return new P.hY(this,a)},
cW:function(a){return new P.i_(this,a)},
h:function(a,b){return},
bL:function(a){if($.t===C.e)return a.$0()
return P.dn(null,null,this,a)},
ax:function(a,b){if($.t===C.e)return a.$1(b)
return P.dp(null,null,this,a,b)},
dl:function(a,b,c){if($.t===C.e)return a.$2(b,c)
return P.iF(null,null,this,a,b,c)}},
hZ:{"^":"i:0;a,b",
$0:function(){return this.a.bL(this.b)}},
hY:{"^":"i:0;a,b",
$0:function(){return this.a.dm(this.b)}},
i_:{"^":"i:1;a,b",
$1:function(a){return this.a.dn(this.b,a)}}}],["","",,P,{"^":"",
Q:function(){return new H.ct(0,null,null,null,null,null,0,[null,null])},
cv:function(a){return H.iR(a,new H.ct(0,null,null,null,null,null,0,[null,null]))},
a3:function(a,b,c,d){return new P.hK(0,null,null,null,null,null,0,[d])},
eV:function(a,b,c){var z,y
if(P.bQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aA()
y.push(a)
try{P.iB(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.cL(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bD:function(a,b,c){var z,y,x
if(P.bQ(a))return b+"..."+c
z=new P.bK(b)
y=$.$get$aA()
y.push(a)
try{x=z
x.a=P.cL(x.gP(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
bQ:function(a){var z,y
for(z=0;y=$.$get$aA(),z<y.length;++z)if(a===y[z])return!0
return!1},
iB:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
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
f5:function(a,b){var z,y
z=P.a3(null,null,null,b)
for(y=J.bu(a);y.t();)z.L(0,y.gC(y))
return z},
cy:function(a){var z,y,x
z={}
if(P.bQ(a))return"{...}"
y=new P.bK("")
try{$.$get$aA().push(a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.c3(a,new P.f7(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.$get$aA()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
hK:{"^":"hD;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.bN(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
H:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cB(b)},
cB:function(a){var z=this.d
if(z==null)return!1
return this.al(z[this.ai(a)],a)>=0},
u:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.H(this))
z=z.b}},
L:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bO()
this.b=z}return this.aY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bO()
this.c=y}return this.aY(y,b)}else return this.cz(0,b)},
cz:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bO()
this.d=z}y=this.ai(b)
x=z[y]
if(x==null)z[y]=[this.ah(b)]
else{if(this.al(x,b)>=0)return!1
x.push(this.ah(b))}return!0},
bK:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b3(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b3(this.c,b)
else return this.cI(0,b)},
cI:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ai(b)]
x=this.al(y,b)
if(x<0)return!1
this.b7(y.splice(x,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ag()}},
aY:function(a,b){if(a[b]!=null)return!1
a[b]=this.ah(b)
return!0},
b3:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.b7(z)
delete a[b]
return!0},
ag:function(){this.r=this.r+1&67108863},
ah:function(a){var z,y
z=new P.hL(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ag()
return z},
b7:function(a){var z,y
z=a.gcH()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ag()},
ai:function(a){return J.V(a)&0x3ffffff},
al:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].gcD(),b))return y
return-1},
p:{
bO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
hL:{"^":"c;cD:a<,b,cH:c<"},
bN:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.H(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
hD:{"^":"fE;$ti"},
kf:{"^":"c;$ti"},
j:{"^":"c;$ti",
gI:function(a){return new H.cx(a,this.gi(a),0,null,[H.bl(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
u:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.H(a))}},
d7:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.H(a))}return y},
aJ:function(a,b){return H.cM(a,b,null,H.bl(this,a,"j",0))},
n:function(a,b){var z=H.z([],[H.bl(this,a,"j",0)])
C.f.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.f.a2(z,0,this.gi(a),a)
C.f.a2(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bD(a,"[","]")}},
f6:{"^":"L;$ti"},
f7:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
L:{"^":"c;$ti",
u:function(a,b){var z,y
for(z=J.bu(this.gN(a));z.t();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a0(this.gN(a))},
k:function(a){return P.cy(a)}},
fF:{"^":"c;$ti",
k:function(a){return P.bD(this,"{","}")},
u:function(a,b){var z
for(z=new P.bN(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
fE:{"^":"fF;$ti"}}],["","",,P,{"^":"",
eJ:function(a){var z=J.n(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.av(a)+"'"},
bB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eJ(a)},
co:function(a){return new P.hp(a)},
ad:function(a){H.bq(H.b(a))},
iN:{"^":"c;"},
"+bool":0,
cl:{"^":"c;cQ:a<,b",
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.cl))return!1
return this.a===b.a&&this.b===b.b},
K:function(a,b){return C.b.K(this.a,b.gcQ())},
gv:function(a){var z=this.a
return(z^C.b.b4(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.eC(H.fw(this))
y=P.aG(H.fu(this))
x=P.aG(H.fq(this))
w=P.aG(H.fr(this))
v=P.aG(H.ft(this))
u=P.aG(H.fv(this))
t=P.eD(H.fs(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
eC:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aG:function(a){if(a>=10)return""+a
return"0"+a}}},
aa:{"^":"aB;"},
"+double":0,
aH:{"^":"c;W:a<",
n:function(a,b){return new P.aH(C.b.n(this.a,b.gW()))},
F:function(a,b){return new P.aH(this.a-b.gW())},
S:function(a,b){return C.b.S(this.a,b.gW())},
a1:function(a,b){return C.b.a1(this.a,b.gW())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aH))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,b.gW())},
k:function(a){var z,y,x,w,v
z=new P.eI()
y=this.a
if(y<0)return"-"+new P.aH(0-y).k(0)
x=z.$1(C.b.X(y,6e7)%60)
w=z.$1(C.b.X(y,1e6)%60)
v=new P.eH().$1(y%1e6)
return""+C.b.X(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
eG:function(a,b,c,d,e,f){return new P.aH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eH:{"^":"i:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eI:{"^":"i:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
B:{"^":"c;",
gO:function(){return H.ac(this.$thrownJsError)}},
cD:{"^":"B;",
k:function(a){return"Throw of null."}},
am:{"^":"B;a,b,c,d",
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
u=P.bB(this.b)
return w+v+": "+H.b(u)},
p:{
em:function(a,b,c){return new P.am(!0,a,b,c)}}},
cF:{"^":"am;e,f,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
b7:function(a,b,c){return new P.cF(null,null,!0,a,b,"Value not in range")},
b6:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
fx:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.b6(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.b6(b,a,c,"end",f))
return b}}},
eS:{"^":"am;e,i:f>,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){if(J.aT(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
u:function(a,b,c,d,e){var z=e!=null?e:J.a0(b)
return new P.eS(b,z,!0,a,c,"Index out of range")}}},
h3:{"^":"B;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
o:function(a){return new P.h3(a)}}},
h1:{"^":"B;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
d5:function(a){return new P.h1(a)}}},
cI:{"^":"B;a",
k:function(a){return"Bad state: "+this.a},
p:{
fN:function(a){return new P.cI(a)}}},
ez:{"^":"B;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bB(z))+"."},
p:{
H:function(a){return new P.ez(a)}}},
cH:{"^":"c;",
k:function(a){return"Stack Overflow"},
gO:function(){return},
$isB:1},
eB:{"^":"B;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
jE:{"^":"c;"},
hp:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
A:{"^":"aB;"},
"+int":0,
eU:{"^":"c;$ti",
u:function(a,b){var z
for(z=this.gI(this);z.t();)b.$1(z.gC(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.O(P.b6(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.t();){x=z.gC(z)
if(b===y)return x;++y}throw H.a(P.u(b,this,"index",null,y))},
k:function(a){return P.eV(this,"(",")")}},
h:{"^":"c;$ti"},
"+List":0,
bH:{"^":"c;$ti"},
aJ:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aB:{"^":"c;"},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.au(this)},
k:function(a){return"Instance of '"+H.av(this)+"'"},
toString:function(){return this.k(this)}},
aw:{"^":"c;"},
p:{"^":"c;"},
"+String":0,
bK:{"^":"c;P:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cL:function(a,b,c){var z=J.bu(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.t())}else{a+=H.b(z.gC(z))
for(;z.t();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
cn:function(a){return"wheel"},
a9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dc:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dm:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hi(a)
if(!!J.n(z).$isw)return z
return}else return a},
dr:function(a){var z=$.t
if(z===C.e)return a
return z.cW(a)},
K:{"^":"b_;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jc:{"^":"bJ;l:x=,m:y=,A:z=","%":"Accelerometer|LinearAccelerationSensor"},
jd:{"^":"f;i:length=","%":"AccessibleNodeList"},
je:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jf:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eq:{"^":"f;","%":"Response;Body"},
es:{"^":"K;D:height},E:width}",
aA:function(a,b,c){if(c!=null)return a.getContext(b,P.iO(c,null))
return a.getContext(b)},
c6:function(a,b){return this.aA(a,b,null)},
"%":"HTMLCanvasElement"},
jj:{"^":"f;",
d1:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
aa:function(a){return P.I(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
jk:{"^":"x;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
jm:{"^":"aZ;i:length=","%":"CSSPerspective"},
jn:{"^":"bA;l:x=,m:y=","%":"CSSPositionValue"},
jo:{"^":"aZ;l:x=,m:y=,A:z=","%":"CSSRotation"},
jp:{"^":"aZ;l:x=,m:y=,A:z=","%":"CSSScale"},
jq:{"^":"hg;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eA:{"^":"c;"},
bA:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aZ:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
jr:{"^":"bA;i:length=","%":"CSSTransformValue"},
js:{"^":"aZ;l:x=,m:y=,A:z=","%":"CSSTranslation"},
jt:{"^":"bA;i:length=","%":"CSSUnparsedValue"},
ju:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
jv:{"^":"f;l:x=,m:y=,A:z=","%":"DeviceAcceleration"},
jw:{"^":"x;",
gbF:function(a){return new W.aP(a,"mousedown",!1,[W.R])},
gbG:function(a){return new W.aP(a,"mousemove",!1,[W.R])},
gbH:function(a){return new W.aP(a,"mouseup",!1,[W.R])},
gbI:function(a){return new W.aP(a,W.cn(a),!1,[W.aO])},
"%":"Document|HTMLDocument|XMLDocument"},
jx:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
jy:{"^":"eE;",
ga9:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gA:function(a){return a.z},
"%":"DOMPoint"},
eE:{"^":"f;",
ga9:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gA:function(a){return a.z},
"%":";DOMPointReadOnly"},
jz:{"^":"hk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.W]},
$ism:1,
$asm:function(){return[P.W]},
$asj:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]},
$ask:function(){return[P.W]},
"%":"ClientRectList|DOMRectList"},
eF:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gE(a))+" x "+H.b(this.gD(a))},
B:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isW)return!1
return a.left===z.gbB(b)&&a.top===z.gbR(b)&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.dc(W.a9(W.a9(W.a9(W.a9(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbS:function(a){return new P.a5(a.left,a.top,[null])},
gD:function(a){return a.height},
gbB:function(a){return a.left},
gbR:function(a){return a.top},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isW:1,
$asW:I.ag,
"%":";DOMRectReadOnly"},
jA:{"^":"hm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.p]},
$ism:1,
$asm:function(){return[P.p]},
$asj:function(){return[P.p]},
$ish:1,
$ash:function(){return[P.p]},
$ask:function(){return[P.p]},
"%":"DOMStringList"},
jB:{"^":"f;i:length=","%":"DOMTokenList"},
b_:{"^":"x;",
k:function(a){return a.localName},
az:function(a){return a.getBoundingClientRect()},
gbF:function(a){return new W.bg(a,"mousedown",!1,[W.R])},
gbG:function(a){return new W.bg(a,"mousemove",!1,[W.R])},
gbH:function(a){return new W.bg(a,"mouseup",!1,[W.R])},
gbI:function(a){return new W.bg(a,W.cn(a),!1,[W.aO])},
$isb_:1,
"%":";Element"},
jC:{"^":"K;D:height},E:width}","%":"HTMLEmbedElement"},
jD:{"^":"a1;G:error=","%":"ErrorEvent"},
a1:{"^":"f;",
a8:function(a){return a.preventDefault()},
$isa1:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
w:{"^":"f;",
bc:["ca",function(a,b,c,d){if(c!=null)this.cA(a,b,c,!1)}],
cA:function(a,b,c,d){return a.addEventListener(b,H.Y(c,1),!1)},
cJ:function(a,b,c,d){return a.removeEventListener(b,H.Y(c,1),!1)},
$isw:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dh|di|dk|dl"},
jX:{"^":"hr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b0]},
$ism:1,
$asm:function(){return[W.b0]},
$asj:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$ask:function(){return[W.b0]},
"%":"FileList"},
jY:{"^":"w;G:error=","%":"FileReader"},
jZ:{"^":"w;G:error=,i:length=","%":"FileWriter"},
k0:{"^":"w;",
dE:function(a,b,c){return a.forEach(H.Y(b,3),c)},
u:function(a,b){b=H.Y(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
k2:{"^":"K;i:length=","%":"HTMLFormElement"},
k4:{"^":"bJ;l:x=,m:y=,A:z=","%":"Gyroscope"},
k5:{"^":"f;i:length=","%":"History"},
k6:{"^":"hF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$ism:1,
$asm:function(){return[W.x]},
$asj:function(){return[W.x]},
$ish:1,
$ash:function(){return[W.x]},
$ask:function(){return[W.x]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
k7:{"^":"K;D:height},E:width}","%":"HTMLIFrameElement"},
k8:{"^":"K;D:height},E:width}","%":"HTMLImageElement"},
ka:{"^":"K;D:height},E:width}","%":"HTMLInputElement"},
b3:{"^":"d3;",
gdv:function(a){return a.which},
$isb3:1,
"%":"KeyboardEvent"},
kg:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
kh:{"^":"bJ;l:x=,m:y=,A:z=","%":"Magnetometer"},
f8:{"^":"K;G:error=","%":"HTMLAudioElement;HTMLMediaElement"},
kk:{"^":"f;i:length=","%":"MediaList"},
kl:{"^":"w;",
M:function(a){return a.clone()},
"%":"MediaStream"},
km:{"^":"w;",
M:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
kn:{"^":"w;",
bc:function(a,b,c,d){if(J.F(b,"message"))a.start()
this.ca(a,b,c,!1)},
"%":"MessagePort"},
ko:{"^":"hM;",
h:function(a,b){return P.I(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gN:function(a){var z=H.z([],[P.p])
this.u(a,new W.fa(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.p,null]},
"%":"MIDIInputMap"},
fa:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
kp:{"^":"hN;",
h:function(a,b){return P.I(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gN:function(a){var z=H.z([],[P.p])
this.u(a,new W.fb(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.p,null]},
"%":"MIDIOutputMap"},
fb:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
kq:{"^":"hP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b4]},
$ism:1,
$asm:function(){return[W.b4]},
$asj:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$ask:function(){return[W.b4]},
"%":"MimeTypeArray"},
R:{"^":"d3;bk:button=",
gbE:function(a){var z,y,x
if(!!a.offsetX)return new P.a5(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.dm(z)).$isb_)throw H.a(P.o("offsetX is only supported on elements"))
y=W.dm(z)
z=[null]
x=new P.a5(a.clientX,a.clientY,z).F(0,J.e1(J.e3(y)))
return new P.a5(J.c8(x.a),J.c8(x.b),z)}},
$isR:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
x:{"^":"w;",
k:function(a){var z=a.nodeValue
return z==null?this.cb(a):z},
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
ky:{"^":"hR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$ism:1,
$asm:function(){return[W.x]},
$asj:function(){return[W.x]},
$ish:1,
$ash:function(){return[W.x]},
$ask:function(){return[W.x]},
"%":"NodeList|RadioNodeList"},
kA:{"^":"K;D:height},E:width}","%":"HTMLObjectElement"},
aK:{"^":"f;i:length=","%":"Plugin"},
kD:{"^":"hV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aK]},
$ism:1,
$asm:function(){return[W.aK]},
$asj:function(){return[W.aK]},
$ish:1,
$ash:function(){return[W.aK]},
$ask:function(){return[W.aK]},
"%":"PluginArray"},
kG:{"^":"f;",
az:function(a){return a.getBoundingClientRect()},
"%":"Range"},
kM:{"^":"i0;",
h:function(a,b){return P.I(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gN:function(a){var z=H.z([],[P.p])
this.u(a,new W.fB(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.p,null]},
"%":"RTCStatsReport"},
fB:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
kN:{"^":"K;i:length=","%":"HTMLSelectElement"},
bJ:{"^":"w;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
kO:{"^":"a1;G:error=","%":"SensorErrorEvent"},
kP:{"^":"di;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b9]},
$ism:1,
$asm:function(){return[W.b9]},
$asj:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"SourceBufferList"},
kQ:{"^":"i2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.ba]},
$ism:1,
$asm:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$ask:function(){return[W.ba]},
"%":"SpeechGrammarList"},
kR:{"^":"a1;G:error=","%":"SpeechRecognitionError"},
aM:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
kT:{"^":"i5;",
h:function(a,b){return a.getItem(b)},
u:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gN:function(a){var z=H.z([],[P.p])
this.u(a,new W.fP(z))
return z},
gi:function(a){return a.length},
$asL:function(){return[P.p,P.p]},
"%":"Storage"},
fP:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
kX:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bd]},
$ism:1,
$asm:function(){return[W.bd]},
$asj:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$ask:function(){return[W.bd]},
"%":"TextTrackCueList"},
kY:{"^":"dl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bc]},
$ism:1,
$asm:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"TextTrackList"},
kZ:{"^":"f;i:length=","%":"TimeRanges"},
l_:{"^":"ig;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.be]},
$ism:1,
$asm:function(){return[W.be]},
$asj:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"TouchList"},
l0:{"^":"f;i:length=","%":"TrackDefaultList"},
d3:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
l3:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
l5:{"^":"f;l:x=,A:z=","%":"VRStageBoundsPoint"},
l6:{"^":"f8;D:height},E:width}","%":"HTMLVideoElement"},
l7:{"^":"w;i:length=","%":"VideoTrackList"},
aO:{"^":"R;",
gd3:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.o("deltaY is not supported"))},
$isaO:1,
"%":"WheelEvent"},
h5:{"^":"w;",
gcT:function(a){var z,y
z=P.aB
y=new P.a8(0,$.t,null,[z])
this.cF(a)
this.cK(a,W.dr(new W.h6(new P.i8(y,[z]))))
return y},
cK:function(a,b){return a.requestAnimationFrame(H.Y(b,1))},
cF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
h6:{"^":"i:1;a",
$1:function(a){this.a.d0(0,a)}},
l8:{"^":"w;"},
lc:{"^":"il;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aY]},
$ism:1,
$asm:function(){return[W.aY]},
$asj:function(){return[W.aY]},
$ish:1,
$ash:function(){return[W.aY]},
$ask:function(){return[W.aY]},
"%":"CSSRuleList"},
ld:{"^":"eF;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isW)return!1
return a.left===z.gbB(b)&&a.top===z.gbR(b)&&a.width===z.gE(b)&&a.height===z.gD(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dc(W.a9(W.a9(W.a9(W.a9(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbS:function(a){return new P.a5(a.left,a.top,[null])},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
le:{"^":"io;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.b2]},
$ism:1,
$asm:function(){return[W.b2]},
$asj:function(){return[W.b2]},
$ish:1,
$ash:function(){return[W.b2]},
$ask:function(){return[W.b2]},
"%":"GamepadList"},
lf:{"^":"iq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$ism:1,
$asm:function(){return[W.x]},
$asj:function(){return[W.x]},
$ish:1,
$ash:function(){return[W.x]},
$ask:function(){return[W.x]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lg:{"^":"eq;",
M:function(a){return a.clone()},
"%":"Request"},
lh:{"^":"is;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aM]},
$ism:1,
$asm:function(){return[W.aM]},
$asj:function(){return[W.aM]},
$ish:1,
$ash:function(){return[W.aM]},
$ask:function(){return[W.aM]},
"%":"SpeechRecognitionResultList"},
li:{"^":"iu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bb]},
$ism:1,
$asm:function(){return[W.bb]},
$asj:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$ask:function(){return[W.bb]},
"%":"StyleSheetList"},
aP:{"^":"cK;a,b,c,$ti",
bD:function(a,b,c,d){return W.a7(this.a,this.b,a,!1,H.y(this,0))}},
bg:{"^":"aP;a,b,c,$ti"},
hn:{"^":"fQ;a,b,c,d,e,$ti",
cu:function(a,b,c,d,e){this.cO()},
cY:function(a){if(this.b==null)return
this.cP()
this.b=null
this.d=null
return},
cO:function(){var z=this.d
if(z!=null&&this.a<=0)J.dK(this.b,this.c,z,!1)},
cP:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.dJ(x,this.c,z,!1)}},
p:{
a7:function(a,b,c,d,e){var z=W.dr(new W.ho(c))
z=new W.hn(0,a,b,z,!1,[e])
z.cu(a,b,c,!1,e)
return z}}},
ho:{"^":"i:1;a",
$1:function(a){return this.a.$1(a)}},
k:{"^":"c;$ti",
gI:function(a){return new W.eL(a,this.gi(a),-1,null,[H.bl(this,a,"k",0)])}},
eL:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aD(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
hh:{"^":"c;a",$isw:1,p:{
hi:function(a){if(a===window)return a
else return new W.hh(a)}}},
hg:{"^":"f+eA;"},
hj:{"^":"f+j;"},
hk:{"^":"hj+k;"},
hl:{"^":"f+j;"},
hm:{"^":"hl+k;"},
hq:{"^":"f+j;"},
hr:{"^":"hq+k;"},
hE:{"^":"f+j;"},
hF:{"^":"hE+k;"},
hM:{"^":"f+L;"},
hN:{"^":"f+L;"},
hO:{"^":"f+j;"},
hP:{"^":"hO+k;"},
hQ:{"^":"f+j;"},
hR:{"^":"hQ+k;"},
hU:{"^":"f+j;"},
hV:{"^":"hU+k;"},
i0:{"^":"f+L;"},
dh:{"^":"w+j;"},
di:{"^":"dh+k;"},
i1:{"^":"f+j;"},
i2:{"^":"i1+k;"},
i5:{"^":"f+L;"},
i9:{"^":"f+j;"},
ia:{"^":"i9+k;"},
dk:{"^":"w+j;"},
dl:{"^":"dk+k;"},
ie:{"^":"f+j;"},
ig:{"^":"ie+k;"},
ik:{"^":"f+j;"},
il:{"^":"ik+k;"},
im:{"^":"f+j;"},
io:{"^":"im+k;"},
ip:{"^":"f+j;"},
iq:{"^":"ip+k;"},
ir:{"^":"f+j;"},
is:{"^":"ir+k;"},
it:{"^":"f+j;"},
iu:{"^":"it+k;"}}],["","",,P,{"^":"",
I:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
iO:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.c3(a,new P.iP(z))
return z},
iP:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",kL:{"^":"w;G:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},l1:{"^":"w;G:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
db:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hG:{"^":"c;",
di:function(){return Math.random()}},
a5:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
B:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a5))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gv:function(a){var z,y
z=J.V(this.a)
y=J.V(this.b)
return P.hH(P.db(P.db(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.a5(y,C.a.n(z,x),this.$ti)},
F:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gl(b)
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.D(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.F()
if(typeof y!=="number")return H.D(y)
return new P.a5(z-x,w-y,this.$ti)}},
hW:{"^":"c;$ti"},
W:{"^":"hW;$ti"}}],["","",,P,{"^":"",jF:{"^":"v;l:x=,m:y=","%":"SVGFEBlendElement"},jG:{"^":"v;l:x=,m:y=","%":"SVGFEColorMatrixElement"},jH:{"^":"v;l:x=,m:y=","%":"SVGFEComponentTransferElement"},jI:{"^":"v;l:x=,m:y=","%":"SVGFECompositeElement"},jJ:{"^":"v;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},jK:{"^":"v;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},jL:{"^":"v;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},jM:{"^":"v;l:x=,m:y=","%":"SVGFEFloodElement"},jN:{"^":"v;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},jO:{"^":"v;l:x=,m:y=","%":"SVGFEImageElement"},jP:{"^":"v;l:x=,m:y=","%":"SVGFEMergeElement"},jQ:{"^":"v;l:x=,m:y=","%":"SVGFEMorphologyElement"},jR:{"^":"v;l:x=,m:y=","%":"SVGFEOffsetElement"},jS:{"^":"v;l:x=,m:y=,A:z=","%":"SVGFEPointLightElement"},jT:{"^":"v;l:x=,m:y=","%":"SVGFESpecularLightingElement"},jU:{"^":"v;l:x=,m:y=,A:z=","%":"SVGFESpotLightElement"},jV:{"^":"v;l:x=,m:y=","%":"SVGFETileElement"},jW:{"^":"v;l:x=,m:y=","%":"SVGFETurbulenceElement"},k_:{"^":"v;l:x=,m:y=","%":"SVGFilterElement"},k1:{"^":"ao;l:x=,m:y=","%":"SVGForeignObjectElement"},eQ:{"^":"ao;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ao:{"^":"v;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},k9:{"^":"ao;l:x=,m:y=","%":"SVGImageElement"},ke:{"^":"hJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cu]},
$ish:1,
$ash:function(){return[P.cu]},
$ask:function(){return[P.cu]},
"%":"SVGLengthList"},ki:{"^":"v;l:x=,m:y=","%":"SVGMaskElement"},kz:{"^":"hT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cE]},
$ish:1,
$ash:function(){return[P.cE]},
$ask:function(){return[P.cE]},
"%":"SVGNumberList"},kC:{"^":"v;l:x=,m:y=","%":"SVGPatternElement"},kE:{"^":"f;l:x=,m:y=","%":"SVGPoint"},kF:{"^":"f;i:length=","%":"SVGPointList"},kH:{"^":"f;l:x=,m:y=","%":"SVGRect"},kI:{"^":"eQ;l:x=,m:y=","%":"SVGRectElement"},kU:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.p]},
$ish:1,
$ash:function(){return[P.p]},
$ask:function(){return[P.p]},
"%":"SVGStringList"},v:{"^":"b_;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kV:{"^":"ao;l:x=,m:y=","%":"SVGSVGElement"},fY:{"^":"ao;","%":"SVGTextPathElement;SVGTextContentElement"},kW:{"^":"fY;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},l2:{"^":"ii;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cR]},
$ish:1,
$ash:function(){return[P.cR]},
$ask:function(){return[P.cR]},
"%":"SVGTransformList"},l4:{"^":"ao;l:x=,m:y=","%":"SVGUseElement"},hI:{"^":"f+j;"},hJ:{"^":"hI+k;"},hS:{"^":"f+j;"},hT:{"^":"hS+k;"},i6:{"^":"f+j;"},i7:{"^":"i6+k;"},ih:{"^":"f+j;"},ii:{"^":"ih+k;"}}],["","",,P,{"^":"",jg:{"^":"f;i:length=","%":"AudioBuffer"},jh:{"^":"he;",
h:function(a,b){return P.I(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gN:function(a){var z=H.z([],[P.p])
this.u(a,new P.eo(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.p,null]},
"%":"AudioParamMap"},eo:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},ji:{"^":"w;i:length=","%":"AudioTrackList"},ep:{"^":"w;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kB:{"^":"ep;i:length=","%":"OfflineAudioContext"},he:{"^":"f+L;"}}],["","",,P,{"^":"",kJ:{"^":"f;",
bb:function(a,b){return a.activeTexture(b)},
bd:function(a,b,c){return a.attachShader(b,c)},
be:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindTexture(b,c)},
bh:function(a,b){return a.blendEquation(b)},
bi:function(a,b,c){return a.blendFunc(b,c)},
bj:function(a,b,c,d){return a.bufferData(b,c,d)},
bl:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bm:function(a,b){return a.compileShader(b)},
bn:function(a){return a.createBuffer()},
bo:function(a){return a.createProgram()},
bp:function(a,b){return a.createShader(b)},
bq:function(a){return a.createTexture()},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
aa:function(a){return P.I(a.getContextAttributes())},
aB:function(a){return a.getError()},
aC:function(a,b){return a.getProgramInfoLog(b)},
aD:function(a,b,c){return a.getProgramParameter(b,c)},
aE:function(a,b){return a.getShaderInfoLog(b)},
aF:function(a,b,c){return a.getShaderParameter(b,c)},
aG:function(a,b,c){return a.getUniformLocation(b,c)},
bC:function(a,b){return a.linkProgram(b)},
bJ:function(a,b,c){return a.pixelStorei(b,c)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aK:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ay:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bM:function(a,b,c,d,e,f,g){return this.ay(a,b,c,d,e,f,g,null,null,null)},
bN:function(a,b,c,d){return a.texParameterf(b,c,d)},
bO:function(a,b,c,d){return a.texParameteri(b,c,d)},
bT:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1fv(b,c)},
bV:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c){return a.uniform1iv(b,c)},
bX:function(a,b,c){return a.uniform2fv(b,c)},
bY:function(a,b,c){return a.uniform3fv(b,c)},
bZ:function(a,b,c){return a.uniform4fv(b,c)},
c_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c1:function(a,b){return a.useProgram(b)},
c2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},kK:{"^":"f;",
cU:function(a,b){return a.beginTransformFeedback(b)},
cX:function(a,b){return a.bindVertexArray(b)},
d2:function(a){return a.createVertexArray()},
d4:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
d5:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
d6:function(a){return a.endTransformFeedback()},
ds:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dt:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bb:function(a,b){return a.activeTexture(b)},
bd:function(a,b,c){return a.attachShader(b,c)},
be:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindTexture(b,c)},
bh:function(a,b){return a.blendEquation(b)},
bi:function(a,b,c){return a.blendFunc(b,c)},
bj:function(a,b,c,d){return a.bufferData(b,c,d)},
bl:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bm:function(a,b){return a.compileShader(b)},
bn:function(a){return a.createBuffer()},
bo:function(a){return a.createProgram()},
bp:function(a,b){return a.createShader(b)},
bq:function(a){return a.createTexture()},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
aa:function(a){return P.I(a.getContextAttributes())},
aB:function(a){return a.getError()},
aC:function(a,b){return a.getProgramInfoLog(b)},
aD:function(a,b,c){return a.getProgramParameter(b,c)},
aE:function(a,b){return a.getShaderInfoLog(b)},
aF:function(a,b,c){return a.getShaderParameter(b,c)},
aG:function(a,b,c){return a.getUniformLocation(b,c)},
bC:function(a,b){return a.linkProgram(b)},
bJ:function(a,b,c){return a.pixelStorei(b,c)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aK:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ay:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bM:function(a,b,c,d,e,f,g){return this.ay(a,b,c,d,e,f,g,null,null,null)},
bN:function(a,b,c,d){return a.texParameterf(b,c,d)},
bO:function(a,b,c,d){return a.texParameteri(b,c,d)},
bT:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1fv(b,c)},
bV:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c){return a.uniform1iv(b,c)},
bX:function(a,b,c){return a.uniform2fv(b,c)},
bY:function(a,b,c){return a.uniform3fv(b,c)},
bZ:function(a,b,c){return a.uniform4fv(b,c)},
c_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c1:function(a,b){return a.useProgram(b)},
c2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",kS:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return P.I(a.item(b))},
j:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bH]},
$ish:1,
$ash:function(){return[P.bH]},
$ask:function(){return[P.bH]},
"%":"SQLResultSetRowList"},i3:{"^":"f+j;"},i4:{"^":"i3+k;"}}],["","",,G,{"^":"",
h8:function(a){var z,y,x,w
z=H.z(a.split("\n"),[P.p])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.f.a_(z,"\n")},
d8:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bp(a,b)
z.aI(a,y,c)
z.bm(a,y)
x=z.aF(a,y,35713)
if(x!=null&&J.F(x,!1)){w=z.aE(a,y)
P.ad("E:Compilation failed:")
P.ad("E:"+G.h8(c))
P.ad("E:Failure:")
P.ad(C.l.n("E:",w))
throw H.a(w)}return y},
cp:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bv(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bw(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.c5(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
eN:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bv(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bw(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
eO:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bv(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bw(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.c5(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.e2(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
eM:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aD(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aD(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aD(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aD(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
hC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a2(z,z.r,null,null,[H.y(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.A]],v=[P.aa],u=[T.X],t=[T.r],s=[T.a6];y.t();){r=y.d
if(!x.a7(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.bU>0)H.bq("I: "+q)
continue}p=z.h(0,r)
switch($.$get$N().h(0,r).a){case"vec2":b.U(r,G.eN(H.aS(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.U(r,G.cp(H.aS(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.U(r,G.eO(H.aS(p,"$ish",u,"$ash"),null),4)
break
case"float":b.U(r,new Float32Array(H.bh(H.aS(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.U(r,G.eM(H.aS(p,"$ish",w,"$ash"),null),4)
break}}},
b5:{"^":"c;"},
d4:{"^":"b5;",
aT:function(){return this.d},
k:function(a){var z,y,x,w
z=H.z(["{"+H.b(new H.d2(H.iV(this),null))+"}["+this.a+"]"],[P.p])
for(y=this.d,x=new H.a2(y,y.r,null,null,[H.y(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.f.a_(z,"\n")}},
er:{"^":"fM;"},
eu:{"^":"c;a,b",
by:function(a,b,c){J.e_(this.a,b)
if(c>0)J.ej(this.a,b,c)},
c3:function(a,b,c,d,e,f,g,h){J.br(this.a,34962,b)
J.ek(this.a,c,d,e,!1,g,h)}},
eK:{"^":"c;a,b,c,d"},
eP:{"^":"c;a,b,c,d,e",
cg:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.z(y,[P.A])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.gdB(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.gdC(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.gdD(t)
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
cj:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.j(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.a6(t))}},
ci:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.eK(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a2(y,y.r,null,null,[H.y(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$N().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.f.a_(z," ")}},
cQ:{"^":"c;a,b,c"},
cO:{"^":"c;a,b,c",p:{
cP:function(a,b,c){return new G.cO(a,b,c)}}},
cz:{"^":"d4;d,a,b,c"},
f9:{"^":"b5;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aQ:function(a,b,c){var z,y
C.l.aX(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.br(z.a,34962,y)
J.c0(z.a,34962,b,35048)},
ck:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
U:function(a,b,c){var z,y,x,w,v
z=J.c2(a,0)===105
if(z&&this.z===0)this.z=C.b.cd(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bs(x.a))
this.aQ(a,b,c)
w=$.$get$N().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.aU(x.a,this.e)
x.by(0,v,z?1:0)
x.c3(0,y.h(0,a),v,w.aS(),5126,!1,0,0)},
aP:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bs(y.a))
this.ch=a
this.aQ("aPosition",a,3)
x=$.$get$N().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.aU(y.a,this.e)
y.by(0,w,0)
y.c3(0,z.h(0,"aPosition"),w,x.aS(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a2(z,z.r,null,null,[H.y(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.f.a_(y,"  ")},
p:{
cA:function(a,b,c,d){return new G.f9(b,J.dT(b.a),c,P.Q(),d,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)}}},
fn:{"^":"d4;",
ce:function(a,b){var z
if(typeof a!=="number")return a.dw()
if(typeof b!=="number")return H.D(b)
z=a/b
if(this.z===z)return
this.z=z
this.aU()},
aU:function(){var z,y,x,w,v,u
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
aT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.r(new Float32Array(3))
u.ab(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.w(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isX
q=x?y.ga9(t):1
if(!!y.$isr){p=y.gl(t)
s=y.gm(t)
r=y.gA(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gA(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.D(t)
x=z[4]
if(typeof s!=="number")return H.D(s)
w=z[8]
if(typeof r!=="number")return H.D(r)
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
c.w(this.db)
c.dh(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
fA:{"^":"b5;d,e,f,r,x,y,z,Q,ch,a,b,c",
co:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.j(0,t,J.c6(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.j(0,t,J.c6(w.a,v,t))}},
cs:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a2(y,y.r,null,null,[H.y(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.a7(0,v))x.push(v)}for(z=this.x,y=new P.bN(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.H(0,v))x.push(v)}return x},
ct:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a2(b,b.r,null,null,[H.y(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.c2(t,0)){case 117:if(w.a7(0,t)){s=b.h(0,t)
if(v.a7(0,t))H.bq("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$N().h(0,t)
if(r==null)H.O("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bx(x.a,q,s)
else if(!!J.n(s).$iseT)J.eh(x.a,q,s)
break
case"float":if(r.c===0)J.ef(x.a,q,s)
else if(!!J.n(s).$isbC)J.eg(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a_(s,"$isM").a
J.cd(x.a,q,!1,p)}else if(!!J.n(s).$isbC)J.cd(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.z.gdz(H.a_(s,"$iskj"))
J.cc(x.a,q,!1,p)}else if(!!J.n(s).$isbC)J.cc(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cb(o,q,H.a_(s,"$isX").a)
else J.cb(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.ca(o,q,H.a_(s,"$isr").a)
else J.ca(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.c9(o,q,H.a_(s,"$isa6").a)
else J.c9(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.D(p)
J.bZ(x.a,33984+p)
p=H.a_(s,"$isbL").b
J.aE(x.a,3553,p)
p=this.ch
J.bx(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.D(p)
J.bZ(x.a,33984+p)
p=H.a_(s,"$isbL").b
J.aE(x.a,34067,p)
p=this.ch
J.bx(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bq("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.F(s,!0)
o=x.a
if(p)J.aV(o,2929)
else J.bt(o,2929)
break
case"cStencilFunc":H.a_(s,"$iscQ")
p=s.a
o=x.a
if(p===1281)J.bt(o,2960)
else{J.aV(o,2960)
o=s.b
n=s.c
J.eb(x.a,p,o,n)}break
case"cDepthWrite":J.dU(x.a,s)
break
case"cBlendEquation":H.a_(s,"$iscO")
p=s.a
o=x.a
if(p===1281)J.bt(o,3042)
else{J.aV(o,3042)
o=s.b
n=s.c
J.dN(x.a,o,n)
J.dM(x.a,p)}break}++u
break}}m=P.eG(0,0,0,Date.now()-new P.cl(z,!1).a,0,0)
""+u
m.k(0)},
cf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.ei(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b1()}for(x=0;x<2;++x){w=b[x]
this.ct(w.a,w.aT())}y=this.Q
y.Y(0)
for(v=a.cy,u=new H.a2(v,v.r,null,null,[H.y(v,0)]),u.c=v.e;u.t();)y.L(0,u.d)
t=this.cs()
if(t.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.aU(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.ck()
u=a.Q
r=a.z
if(s)J.dL(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.dY(q,y,v,u,0,r)
else J.dX(q,y,v,u,0)}else{u=z.a
if(r>1)J.dW(u,y,0,v,r)
else J.dV(u,y,0,v)}if(s)J.e0(z.a)},
aR:function(a,b){return this.cf(a,b,null)},
p:{
cG:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.a3(null,null,null,P.p)
y=c.b
x=d.b
w=c.f
v=J.dQ(b.a)
u=G.d8(b.a,35633,y)
J.c_(b.a,v,u)
t=G.d8(b.a,35632,x)
J.c_(b.a,v,t)
if(w.length>0)J.ee(b.a,v,w,35980)
J.e9(b.a,v)
if(J.e8(b.a,v,35714)!==!0)H.O(J.e7(b.a,v))
z=new G.fA(b,c,d,v,P.f5(c.c,null),P.Q(),P.Q(),z,null,a,!1,!0)
z.co(a,b,c,d)
return z}}},
q:{"^":"c;a,b,c",
aS:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fG:{"^":"c;a,b,c,d,e,f,r,x",
aN:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.f.ac(z)},
ad:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x)y.push(a[x])
C.f.ac(y)},
aO:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.f.ac(z)},
cp:function(a,b){this.b=this.aV(!0,a,b)},
ae:function(a){return this.cp(a,null)},
aV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
s=$.$get$N().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.f.cS(w,b)
if(a)w.push("}")
return C.f.a_(w,"\n")},
p:{
b8:function(a){return new G.fG(a,null,[],[],[],[],0,P.Q())}}},
fM:{"^":"b5;"},
fZ:{"^":"c;a,b,c,d,e,f,r",
cl:function(a,b){var z=this.e
if(z!==1)J.ed(a.a,b,34046,z)
J.c7(a.a,b,10240,this.r)
J.c7(a.a,b,10241,this.f)}},
bL:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
eR:{"^":"bL;f,a,b,c,d,e",
cq:function(a){var z,y
z=this.d
y=this.c
J.aE(z.a,y,this.b)
J.ec(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
h4:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$d6().di()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.cA(z,a.d,0,a.e.x)
y.aP(x)
return y},
fo:{"^":"fn;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dk:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sE(z,y)
w.sD(z,x)
P.ad("size change "+H.b(y)+" "+H.b(x))
this.ce(y,x)
J.el(this.go.a,0,0,y,x)},"$1","gdj",4,0,14]}}],["","",,V,{}],["","",,B,{"^":"",
fH:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o
z=h+1
y=g+1
x=B.h_(B.fm(new B.fI(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.eP(!1,[],[],w,P.Q())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.J)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.c1(s[r]))}v.ci(z,y,!1)
v.cj(z,y)
q=$.$get$N().h(0,"aNormal")
switch(q.a){case"vec2":v.e.j(0,"aNormal",H.z([],[T.a6]))
break
case"vec3":v.e.j(0,"aNormal",H.z([],[T.r]))
break
case"vec4":v.e.j(0,"aNormal",H.z([],[T.X]))
break
case"float":v.e.j(0,"aNormal",H.z([],[P.aa]))
break
case"uvec4":v.e.j(0,"aNormal",H.z([],[[P.h,P.A]]))
break}for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.J)(x),++t){s=x[t]
for(r=0;p=s.length,r<p;r+=2){o=r+1
if(o>=p)return H.d(s,o)
o=s[o]
u.h(0,"aNormal").push(J.c1(o))}}return v},
h_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.r(y)
w=new Float32Array(3)
v=new T.r(w)
u=new Float32Array(3)
t=new T.r(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.d(a,o)
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
u[2]=k*j}v.R(0)
t.R(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.w(p)
x.a6(v,g)
x.a6(t,f)
q=new T.r(new Float32Array(3))
q.w(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.a6(v,g)
x.a6(t,f)
x.R(0)
q=new T.r(new Float32Array(3))
q.w(x)
m.push(q)}}return z},
fm:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.r(new Float32Array(3))
x=new T.r(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aL(0,y)
t=new T.r(new Float32Array(3))
t.w(y)
z.push(t)
t=new T.r(new Float32Array(3))
t.w(x)
z.push(t)}return z},
fI:{"^":"i:15;a,b,c,d",
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
b.sA(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",f_:{"^":"c;a,b,c",
cm:function(a){var z
a=document
z=W.b3
W.a7(a,"keydown",new D.f1(this),!1,z)
W.a7(a,"keyup",new D.f2(this),!1,z)},
p:{
f0:function(a){var z=P.A
z=new D.f_(P.a3(null,null,null,z),P.a3(null,null,null,z),P.a3(null,null,null,z))
z.cm(a)
return z}}},f1:{"^":"i:7;a",
$1:function(a){var z=this.a
z.a.L(0,J.c4(a))
z.b.L(0,a.which)}},f2:{"^":"i:7;a",
$1:function(a){var z=this.a
z.a.bK(0,J.c4(a))
z.c.L(0,a.which)}},fc:{"^":"c;a,b,c,d,e,f,r,x",
cn:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gbG(a)
W.a7(y.a,y.b,new D.fe(this),!1,H.y(y,0))
y=z.gbF(a)
W.a7(y.a,y.b,new D.ff(this),!1,H.y(y,0))
y=z.gbH(a)
W.a7(y.a,y.b,new D.fg(this),!1,H.y(y,0))
z=z.gbI(a)
W.a7(z.a,z.b,new D.fh(this),!1,H.y(z,0))},
p:{
fd:function(a){var z=P.A
z=new D.fc(P.a3(null,null,null,z),P.a3(null,null,null,z),P.a3(null,null,null,z),0,0,0,0,0)
z.cn(a)
return z}}},fe:{"^":"i:4;a",
$1:function(a){var z,y
z=J.e(a)
z.a8(a)
y=this.a
y.r=z.gbE(a).a
y.x=z.gbE(a).b
y.d=a.movementX
y.e=a.movementY}},ff:{"^":"i:4;a",
$1:function(a){var z=J.e(a)
z.a8(a)
P.ad("BUTTON "+H.b(z.gbk(a)))
z=this.a
z.a.L(0,a.button)
z.b.L(0,a.button)}},fg:{"^":"i:4;a",
$1:function(a){var z,y
z=J.e(a)
z.a8(a)
y=this.a
y.a.bK(0,z.gbk(a))
y.c.L(0,a.button)}},fh:{"^":"i:16;a",
$1:function(a){var z=J.e(a)
z.a8(a)
this.a.f=z.gd3(a)}},fl:{"^":"er;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bm:function(a){var z,y
z=C.H.d7(a,0,new A.iX())
if(typeof z!=="number")return H.D(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iX:{"^":"i:17;",
$2:function(a,b){var z,y
z=J.ak(a,J.V(b))
if(typeof z!=="number")return H.D(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",M:{"^":"c;b0:a<",
w:function(a){var z,y
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
k:function(a){return"[0] "+this.a0(0).k(0)+"\n[1] "+this.a0(1).k(0)+"\n[2] "+this.a0(2).k(0)+"\n[3] "+this.a0(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.M){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bm(this.a)},
a0:function(a){var z,y,x
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
return new T.X(z)},
M:function(a){var z=new T.M(new Float32Array(16))
z.w(this)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.M(z)
y.w(this)
x=b.gb0()
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
F:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.M(z)
y.w(this)
x=b.gb0()
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
T:function(){var z=this.a
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
dh:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},a6:{"^":"c;b8:a<",
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a6){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bm(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gb8()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.a6(z)},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gb8()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return new T.a6(z)},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
M:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.a6(z)},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},r:{"^":"c;b9:a<",
ab:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bm(this.a)},
F:function(a,b){var z=new T.r(new Float32Array(3))
z.w(this)
z.aL(0,b)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.r(z)
y.w(this)
x=b.gb9()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gaw())},
gaw:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
R:function(a){var z,y,x
z=Math.sqrt(this.gaw())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
at:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
br:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.ab(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a6:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aL:function(a,b){var z,y
z=b.gb9()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
M:function(a){var z=new T.r(new Float32Array(3))
z.w(this)
return z},
sl:function(a,b){this.a[0]=b
return b},
sm:function(a,b){this.a[1]=b
return b},
sA:function(a,b){this.a[2]=b
return b},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gA:function(a){return this.a[2]}},X:{"^":"c;ba:a<",
w:function(a){var z,y
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
if(b instanceof T.X){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bm(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.X(z)
y.w(this)
x=b.gba()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.X(z)
y.w(this)
x=b.gba()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
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
M:function(a){var z=new T.X(new Float32Array(4))
z.w(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gA:function(a){return this.a[2]},
ga9:function(a){return this.a[3]}}}],["","",,M,{"^":"",
dD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z={}
y=document
x=y.querySelector("#webgl-canvas")
$.bU=1
w=new G.eu(null,x)
v=J.e4(x,"webgl2",P.cv(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
w.a=v
if(v==null)H.O(P.co('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.e5(v))
if($.bU>0)P.ad("I: "+u)
J.dO(v,0,0,0,1)
J.aV(v,2929)
v=y.body
u=new Float32Array(3)
t=D.f0(null)
v=D.fd(v)
s=new T.M(new Float32Array(16))
s.T()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.fl(5,0,0,0,new T.r(u),-0.02,t,v,s,new T.r(r),new T.r(q),new T.r(p),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.M(new Float32Array(16))
v.T()
u=new T.M(new Float32Array(16))
u.T()
n=new R.fo(x,w,o,50,1,0.1,1000,v,u,new T.M(new Float32Array(16)),P.Q(),"perspective",!1,!0)
n.aU()
n.dk(null)
W.a7(window,"resize",n.gdj(),!1,W.a1)
m=G.cG("basic",w,$.$get$dx(),$.$get$dw())
v=P.Q()
v.j(0,"cDepthTest",!0)
v.j(0,"cDepthWrite",!0)
v.j(0,"cBlendEquation",$.$get$cf())
u=$.$get$cJ()
v.j(0,"cStencilFunc",u)
t=new T.M(new Float32Array(16))
t.T()
v.j(0,"uModelMatrix",t)
l=B.fH(!0,!0,1,2,3,1,128,16,0.4,!1)
k=G.cA("torusknot",m.d,4,m.e.x)
k.aP(G.cp(l.d,null))
t=l.cg()
s=k.d
k.y=J.bs(s.a)
r=k.ch.length
if(r<768){k.cx=new Uint8Array(H.bh(t))
k.Q=5121}else if(r<196608){k.cx=new Uint16Array(H.bh(t))
k.Q=5123}else{k.cx=new Uint32Array(H.bh(t))
k.Q=5125}J.aU(s.a,k.e)
t=k.y
r=k.cx
J.br(s.a,34963,t)
J.c0(s.a,34963,r,35048)
G.hC(l,k)
j=G.cG("basic",w,$.$get$dG(),$.$get$dF())
t=$.$get$ce()
s=P.Q()
s.j(0,"cDepthTest",!0)
s.j(0,"cDepthWrite",!1)
s.j(0,"cBlendEquation",t)
s.j(0,"cStencilFunc",u)
i=y.createElement("canvas")
i.width=64
i.height=64
h=C.x.c6(i,"2d")
g=J.dR(h,32,32,1,32,32,22)
g.addColorStop(0,"gray")
g.addColorStop(1,"black")
h.fillStyle=g
h.fillRect(0,0,64,64)
g=h.createRadialGradient(32,32,1,32,32,6)
g.addColorStop(0,"white")
g.addColorStop(1,"gray")
h.globalAlpha=0.9
h.fillStyle=g
h.arc(32,32,4,0,6.283185307179586,!1)
h.fill("nonzero")
y=new G.fZ(!1,!1,!1,!0,1,9729,9729)
u=J.dS(w.a)
t=new G.eR(i,"Utils::Particles",u,3553,w,y)
J.aE(w.a,3553,u)
J.ea(w.a,37440,1)
t.cq(i)
y.cl(w,3553)
J.e6(w.a)
J.aE(w.a,3553,null)
s.j(0,"uTexture",t)
s.j(0,"uPointSize",1000)
y=new T.M(new Float32Array(16))
y.T()
s.j(0,"uModelMatrix",y)
f=R.h4(j,2000,100)
z.a=0
new M.j6(z,o,m,k,n,new G.cz(v,"torus-mat",!1,!0),j,f,new G.cz(s,"stars",!1,!0)).$1(0)},
j6:{"^":"i:18;a,b,c,d,e,f,r,x,y",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.a
y=J.aQ(b1)
y.F(b1,z.a)
z.a=y.n(b1,0)
y=this.b
y.go+=0.003
z=y.r1
x=z.a
if(x.H(0,0)||x.H(0,1)){x=y.go
w=z.d
if(typeof w!=="number")return w.aH()
y.go=x+w*0.01
w=y.id
x=z.e
if(typeof x!=="number")return x.aH()
y.id=w+x*0.01}x=y.k4
w=x.a
if(w.H(0,37))y.go+=0.03
else if(w.H(0,39))y.go-=0.03
if(w.H(0,38))y.id+=0.03
else if(w.H(0,40))y.id-=0.03
if(w.H(0,33))y.fy*=0.99
else if(w.H(0,34))y.fy*=1.01
if(w.H(0,32)){y.go=0
y.id=0}w=z.f
if(typeof w!=="number")return w.aH()
w=y.fy-w*y.k3
if(w>0)y.fy=w
w=C.a.cZ(y.id,-1.4707963267948965,1.4707963267948965)
y.id=w
v=y.fy
u=y.go
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=y.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=y.k2
w=u.a
r[12]=r[12]+w[0]
r[13]=r[13]+w[1]
r[14]=r[14]+w[2]
q=r[12]
p=r[13]
o=r[14]
n=new T.r(new Float32Array(3))
n.ab(0,1,0)
w=y.e
v=w.a
v[0]=r[12]
v[1]=r[13]
v[2]=r[14]
m=w.F(0,u)
m.R(0)
l=n.br(m)
l.R(0)
k=m.br(l)
k.R(0)
u=l.at(w)
v=k.at(w)
w=m.at(w)
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
j=y.f
h=j.a
h[0]=r[2]
h[1]=r[6]
h[2]=r[10]
y=-y.k1
b=Math.sqrt(j.gaw())
q=h[0]/b
p=h[1]/b
o=h[2]/b
a=Math.cos(y)
a0=Math.sin(y)
a1=1-a
a2=q*q*a1+a
y=o*a0
a3=q*p*a1-y
h=p*a0
a4=q*o*a1+h
a5=p*q*a1+y
a6=p*p*a1+a
y=q*a0
a7=p*o*a1-y
a8=o*q*a1-h
a9=o*p*a1+y
b0=o*o*a1+a
y=r[0]
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
r[0]=y*a2+h*a5+j*a8
r[1]=f*a2+e*a5+d*a8
r[2]=c*a2+s*a5+i*a8
r[3]=g*a2+u*a5+v*a8
r[4]=y*a3+h*a6+j*a9
r[5]=f*a3+e*a6+d*a9
r[6]=c*a3+s*a6+i*a9
r[7]=g*a3+u*a6+v*a9
r[8]=y*a4+h*a7+j*b0
r[9]=f*a4+e*a7+d*b0
r[10]=c*a4+s*a7+i*b0
r[11]=g*a4+u*a7+v*b0
x.c.Y(0)
x.b.Y(0)
z.e=0
z.d=0
z.f=0
z.c.Y(0)
z.b.Y(0)
z=this.e
this.c.aR(this.d,[z,this.f])
this.r.aR(this.x,[z,this.y])
C.Y.gcT(window).bP(this)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cr.prototype
return J.eY.prototype}if(typeof a=="string")return J.as.prototype
if(a==null)return J.cs.prototype
if(typeof a=="boolean")return J.eX.prototype
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.iS=function(a){if(typeof a=="number")return J.ar.prototype
if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.ab=function(a){if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.bV=function(a){if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.aQ=function(a){if(typeof a=="number")return J.ar.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aN.prototype
return a}
J.iT=function(a){if(typeof a=="number")return J.ar.prototype
if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aN.prototype
return a}
J.iU=function(a){if(typeof a=="string")return J.as.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aN.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.ak=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.iS(a).n(a,b)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).B(a,b)}
J.G=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aQ(a).a1(a,b)}
J.aT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aQ(a).S(a,b)}
J.aD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.j4(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).h(a,b)}
J.dJ=function(a,b,c,d){return J.e(a).cJ(a,b,c,d)}
J.bZ=function(a,b){return J.e(a).bb(a,b)}
J.dK=function(a,b,c,d){return J.e(a).bc(a,b,c,d)}
J.c_=function(a,b,c){return J.e(a).bd(a,b,c)}
J.dL=function(a,b){return J.e(a).cU(a,b)}
J.br=function(a,b,c){return J.e(a).be(a,b,c)}
J.aE=function(a,b,c){return J.e(a).bg(a,b,c)}
J.aU=function(a,b){return J.e(a).cX(a,b)}
J.dM=function(a,b){return J.e(a).bh(a,b)}
J.dN=function(a,b,c){return J.e(a).bi(a,b,c)}
J.c0=function(a,b,c,d){return J.e(a).bj(a,b,c,d)}
J.dO=function(a,b,c,d,e){return J.e(a).bl(a,b,c,d,e)}
J.c1=function(a){return J.e(a).M(a)}
J.c2=function(a,b){return J.iU(a).d_(a,b)}
J.dP=function(a,b){return J.iT(a).K(a,b)}
J.bs=function(a){return J.e(a).bn(a)}
J.dQ=function(a){return J.e(a).bo(a)}
J.dR=function(a,b,c,d,e,f,g){return J.e(a).d1(a,b,c,d,e,f,g)}
J.dS=function(a){return J.e(a).bq(a)}
J.dT=function(a){return J.e(a).d2(a)}
J.dU=function(a,b){return J.e(a).bs(a,b)}
J.bt=function(a,b){return J.e(a).bt(a,b)}
J.dV=function(a,b,c,d){return J.e(a).bu(a,b,c,d)}
J.dW=function(a,b,c,d,e){return J.e(a).d4(a,b,c,d,e)}
J.dX=function(a,b,c,d,e){return J.e(a).bv(a,b,c,d,e)}
J.dY=function(a,b,c,d,e,f){return J.e(a).d5(a,b,c,d,e,f)}
J.dZ=function(a,b){return J.bV(a).q(a,b)}
J.aV=function(a,b){return J.e(a).bw(a,b)}
J.e_=function(a,b){return J.e(a).bx(a,b)}
J.e0=function(a){return J.e(a).d6(a)}
J.c3=function(a,b){return J.bV(a).u(a,b)}
J.al=function(a){return J.e(a).gG(a)}
J.V=function(a){return J.n(a).gv(a)}
J.bu=function(a){return J.bV(a).gI(a)}
J.a0=function(a){return J.ab(a).gi(a)}
J.e1=function(a){return J.e(a).gbS(a)}
J.e2=function(a){return J.e(a).ga9(a)}
J.c4=function(a){return J.e(a).gdv(a)}
J.bv=function(a){return J.e(a).gl(a)}
J.bw=function(a){return J.e(a).gm(a)}
J.c5=function(a){return J.e(a).gA(a)}
J.e3=function(a){return J.e(a).az(a)}
J.e4=function(a,b,c){return J.e(a).aA(a,b,c)}
J.e5=function(a){return J.e(a).aa(a)}
J.e6=function(a){return J.e(a).aB(a)}
J.e7=function(a,b){return J.e(a).aC(a,b)}
J.e8=function(a,b,c){return J.e(a).aD(a,b,c)}
J.c6=function(a,b,c){return J.e(a).aG(a,b,c)}
J.e9=function(a,b){return J.e(a).bC(a,b)}
J.ea=function(a,b,c){return J.e(a).bJ(a,b,c)}
J.eb=function(a,b,c,d){return J.e(a).aK(a,b,c,d)}
J.ec=function(a,b,c,d,e,f,g){return J.e(a).bM(a,b,c,d,e,f,g)}
J.ed=function(a,b,c,d){return J.e(a).bN(a,b,c,d)}
J.c7=function(a,b,c,d){return J.e(a).bO(a,b,c,d)}
J.c8=function(a){return J.aQ(a).dq(a)}
J.aF=function(a){return J.n(a).k(a)}
J.ee=function(a,b,c,d){return J.e(a).ds(a,b,c,d)}
J.ef=function(a,b,c){return J.e(a).bT(a,b,c)}
J.eg=function(a,b,c){return J.e(a).bU(a,b,c)}
J.bx=function(a,b,c){return J.e(a).bV(a,b,c)}
J.eh=function(a,b,c){return J.e(a).bW(a,b,c)}
J.c9=function(a,b,c){return J.e(a).bX(a,b,c)}
J.ca=function(a,b,c){return J.e(a).bY(a,b,c)}
J.cb=function(a,b,c){return J.e(a).bZ(a,b,c)}
J.cc=function(a,b,c,d){return J.e(a).c_(a,b,c,d)}
J.cd=function(a,b,c,d){return J.e(a).c0(a,b,c,d)}
J.ei=function(a,b){return J.e(a).c1(a,b)}
J.ej=function(a,b,c){return J.e(a).dt(a,b,c)}
J.ek=function(a,b,c,d,e,f,g){return J.e(a).c2(a,b,c,d,e,f,g)}
J.el=function(a,b,c,d,e){return J.e(a).c4(a,b,c,d,e)}
var $=I.p
C.x=W.es.prototype
C.y=J.f.prototype
C.f=J.ap.prototype
C.b=J.cr.prototype
C.z=J.cs.prototype
C.a=J.ar.prototype
C.l=J.as.prototype
C.G=J.at.prototype
C.H=H.fi.prototype
C.q=J.fp.prototype
C.n=J.aN.prototype
C.Y=W.h5.prototype
C.w=new P.hG()
C.e=new P.hX()
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
C.o=function(hooks) { return hooks; }

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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=new G.q("vec3","vertex btangents",0)
C.c=new G.q("vec3","",0)
C.J=new G.q("vec4","delta from light",0)
C.m=new G.q("","",0)
C.r=new G.q("vec3","vertex coordinates",0)
C.K=new G.q("vec3","vertex binormals",0)
C.t=new G.q("vec4","for wireframe",0)
C.L=new G.q("vec4","per vertex color",0)
C.M=new G.q("float","for normal maps",0)
C.i=new G.q("mat4","",0)
C.O=new G.q("mat4","",4)
C.N=new G.q("mat4","",128)
C.d=new G.q("float","",0)
C.P=new G.q("float","",4)
C.Q=new G.q("float","depth for shadowmaps",0)
C.h=new G.q("sampler2D","",0)
C.R=new G.q("float","for bump maps",0)
C.S=new G.q("vec2","texture uvs",0)
C.T=new G.q("float","time since program start in sec",0)
C.j=new G.q("vec2","",0)
C.U=new G.q("samplerCube","",0)
C.k=new G.q("vec4","",0)
C.V=new G.q("vec3","vertex normals",0)
C.W=new G.q("sampler2DShadow","",0)
C.u=new G.q("vec3","per vertex color",0)
C.v=new G.q("mat3","",0)
C.X=new G.q("vec3","vertex tangents",0)
$.P=0
$.an=null
$.cg=null
$.dB=null
$.ds=null
$.dH=null
$.bk=null
$.bn=null
$.bW=null
$.ae=null
$.ay=null
$.az=null
$.bP=!1
$.t=C.e
$.bU=0
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
I.$lazy(y,x,w)}})(["ck","$get$ck",function(){return H.dz("_$dart_dartClosure")},"bE","$get$bE",function(){return H.dz("_$dart_js")},"cS","$get$cS",function(){return H.S(H.bf({
toString:function(){return"$receiver$"}}))},"cT","$get$cT",function(){return H.S(H.bf({$method$:null,
toString:function(){return"$receiver$"}}))},"cU","$get$cU",function(){return H.S(H.bf(null))},"cV","$get$cV",function(){return H.S(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cZ","$get$cZ",function(){return H.S(H.bf(void 0))},"d_","$get$d_",function(){return H.S(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cX","$get$cX",function(){return H.S(H.cY(null))},"cW","$get$cW",function(){return H.S(function(){try{null.$method$}catch(z){return z.message}}())},"d1","$get$d1",function(){return H.S(H.cY(void 0))},"d0","$get$d0",function(){return H.S(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bM","$get$bM",function(){return P.h9()},"cq","$get$cq",function(){var z,y
z=P.aJ
y=new P.a8(0,P.h7(),null,[z])
y.cv(null,z)
return y},"aA","$get$aA",function(){return[]},"cJ","$get$cJ",function(){return new G.cQ(1281,0,4294967295)},"cf","$get$cf",function(){return G.cP(1281,1281,1281)},"ce","$get$ce",function(){return G.cP(32774,770,769)},"N","$get$N",function(){return P.cv(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.u,"aColorAlpha",C.L,"aPosition",C.r,"aTexUV",C.S,"aNormal",C.V,"aBinormal",C.K,"aCenter",C.t,"aPointSize",C.d,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.X,"aBitangent",C.I,"iaRotation",C.k,"iaTranslation",C.c,"iaScale",C.c,"vColor",C.u,"vTexUV",C.j,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.r,"vPositionFromLight",C.J,"vCenter",C.t,"vDepth",C.Q,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.v,"uConvolutionMatrix",C.v,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.W,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.U,"uAnimationTable",C.h,"uTime",C.T,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.c,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.N,"uLightDescs",C.O,"uLightCount",C.d,"uLightTypes",C.P,"uBumpScale",C.R,"uNormalScale",C.M])},"d6","$get$d6",function(){return C.w},"dG","$get$dG",function(){var z=G.b8("PointSpritesV")
z.aN(["aPosition"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ae(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"dF","$get$dF",function(){var z=G.b8("PointSpritesF")
z.ad(["uTexture"])
z.ae(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"dx","$get$dx",function(){var z=G.b8("demoVertexShader")
z.aN(["aPosition"])
z.aO(["vColor"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix"])
z.b=z.aV(!1,["void main(void) {\n    gl_Position = uPerspectiveViewMatrix *\n                  uModelMatrix *\n                  vec4(aPosition, 1.0);\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],null)
return z},"dw","$get$dw",function(){var z=G.b8("demoFragmentShader")
z.aO(["vColor"])
z.ae(["oFragColor.rgb = vColor;"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1},{func:1,args:[,]},{func:1,args:[,,]},{func:1,v:true},{func:1,args:[W.R]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.p,args:[P.A]},{func:1,args:[W.b3]},{func:1,args:[,P.p]},{func:1,args:[P.p]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aw]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aw]},{func:1,v:true,args:[W.a1]},{func:1,v:true,args:[P.aa,T.r]},{func:1,args:[W.aO]},{func:1,args:[P.A,P.c]},{func:1,v:true,args:[P.aB]},{func:1,ret:P.A,args:[,,]}]
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
if(x==y)H.ja(d||a)
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
Isolate.ag=a.ag
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
if(typeof dartMainRunner==="function")dartMainRunner(M.dD,[])
else M.dD([])})})()
//# sourceMappingURL=simple.dart.js.map
