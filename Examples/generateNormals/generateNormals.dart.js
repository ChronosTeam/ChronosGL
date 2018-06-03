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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.c5"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.c5"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.c5(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",kU:{"^":"d;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
ca:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c7==null){H.jA()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.bZ("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bP()]
if(v!=null)return v
v=H.jD(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$bP(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
f:{"^":"d;",
C:function(a,b){return a===b},
gA:function(a){return H.aC(a)},
k:["cf",function(a){return"Instance of '"+H.aD(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fj:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isjj:1},
fl:{"^":"f;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isaT:1},
bQ:{"^":"f;",
gA:function(a){return 0},
k:["cg",function(a){return String(a)}]},
fS:{"^":"bQ;"},
aX:{"^":"bQ;"},
ay:{"^":"bQ;",
k:function(a){var z=a[$.$get$cB()]
return z==null?this.cg(a):J.aQ(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
au:{"^":"f;$ti",
J:function(a,b){if(!!a.fixed$length)H.F(P.o("add"))
a.push(b)},
d6:function(a,b){var z,y
if(!!a.fixed$length)H.F(P.o("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.P(a))}},
a3:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.b(y,x)
y[x]=w}return y.join(b)},
aT:function(a,b){return H.d4(a,b,null,H.D(a,0))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
gdB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.fh())},
ca:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.F(P.o("setRange"))
P.h1(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.E()
if(typeof b!=="number")return H.v(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$ise){x=e
w=d}else{w=y.aT(d,e).dN(0,!1)
x=0}y=J.a4(w)
v=y.gj(w)
if(typeof v!=="number")return H.v(v)
if(x+z>v)throw H.a(H.fi())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
a5:function(a,b,c,d){return this.ca(a,b,c,d,0)},
cb:function(a,b){if(!!a.immutable$list)H.F(P.o("sort"))
H.hg(a,J.j6())},
ae:function(a){return this.cb(a,null)},
k:function(a){return P.bO(a,"[","]")},
gN:function(a){return new J.eE(a,a.length,0,null,[H.D(a,0)])},
gA:function(a){return H.aC(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.F(P.o("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cv(b,"newLength",null))
if(b<0)throw H.a(P.bh(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.W(a,b))
if(b>=a.length||b<0)throw H.a(H.W(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.F(P.o("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.W(a,b))
if(b>=a.length||b<0)throw H.a(H.W(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gj(b))
y=H.A([],[H.D(a,0)])
this.sj(y,z)
this.a5(y,0,a.length,a)
this.a5(y,a.length,z,b)
return y},
$ism:1,
$asm:I.al,
$ise:1,
p:{
av:function(a){a.fixed$length=Array
return a},
kS:[function(a,b){return J.e8(a,b)},"$2","j6",8,0,21]}},
kT:{"^":"au;$ti"},
eE:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aw:{"^":"f;",
P:function(a,b){var z
if(typeof b!=="number")throw H.a(H.L(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaB(b)
if(this.gaB(a)===z)return 0
if(this.gaB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaB:function(a){return a===0?1/a<0:a<0},
dM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.o(""+a+".toInt()"))},
de:function(a,b,c){if(this.P(b,c)>0)throw H.a(H.L(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a+b},
E:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a-b},
ci:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bg(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.bg(a,b)},
bg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.o("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
be:function(a,b){var z
if(a>0)z=this.d0(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d0:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a<b},
a4:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a>b},
$isaJ:1,
$isaM:1},
cJ:{"^":"aw;",$isE:1},
fk:{"^":"aw;"},
ax:{"^":"f;",
ax:function(a,b){if(b<0)throw H.a(H.W(a,b))
if(b>=a.length)H.F(H.W(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.a(H.W(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cv(b,null,null))
return a+b},
dG:function(a,b,c){return H.jL(a,b,c)},
cc:function(a,b){var z=H.A(a.split(b),[P.t])
return z},
ag:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.F(H.L(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.F(H.L(c))
if(b<0)throw H.a(P.bi(b,null,null))
if(typeof c!=="number")return H.v(c)
if(b>c)throw H.a(P.bi(b,null,null))
if(c>a.length)throw H.a(P.bi(c,null,null))
return a.substring(b,c)},
cd:function(a,b){return this.ag(a,b,null)},
dP:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a7(z,0)===133){x=J.fm(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.ax(z,w)===133?J.fn(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
P:function(a,b){var z
if(typeof b!=="string")throw H.a(H.L(b))
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
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.W(a,b))
if(b>=a.length||b<0)throw H.a(H.W(a,b))
return a[b]},
$ism:1,
$asm:I.al,
$ist:1,
p:{
cK:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fm:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.a7(a,b)
if(y!==32&&y!==13&&!J.cK(y))break;++b}return b},
fn:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.ax(a,z)
if(y!==32&&y!==13&&!J.cK(y))break}return b}}}}],["","",,H,{"^":"",
fh:function(){return new P.bV("No element")},
fi:function(){return new P.bV("Too few elements")},
hg:function(a,b){var z=J.a0(a)
if(typeof z!=="number")return z.E()
H.aV(a,0,z-1,b)},
aV:function(a,b,c,d){if(c-b<=32)H.hf(a,b,c,d)
else H.he(a,b,c,d)},
hf:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a4(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.O(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
he:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a_(c-b+1,6)
y=b+z
x=c-z
w=C.b.a_(b+c,2)
v=w-z
u=w+z
t=J.a4(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.O(d.$2(s,r),0)){n=r
r=s
s=n}if(J.O(d.$2(p,o),0)){n=o
o=p
p=n}if(J.O(d.$2(s,q),0)){n=q
q=s
s=n}if(J.O(d.$2(r,q),0)){n=q
q=r
r=n}if(J.O(d.$2(s,p),0)){n=p
p=s
s=n}if(J.O(d.$2(q,p),0)){n=p
p=q
q=n}if(J.O(d.$2(r,o),0)){n=o
o=r
r=n}if(J.O(d.$2(r,q),0)){n=q
q=r
r=n}if(J.O(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.B(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.C(i,0))continue
if(h.S(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aL(i)
if(h.a4(i,0)){--l
continue}else{g=l-1
if(h.S(i,0)){t.i(a,k,t.h(a,m))
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
t.i(a,m,j)}++m}else if(J.O(d.$2(j,p),0))for(;!0;)if(J.O(d.$2(t.h(a,l),p),0)){--l
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
H.aV(a,b,m-2,d)
H.aV(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.B(d.$2(t.h(a,m),r),0);)++m
for(;J.B(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.B(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.B(d.$2(j,p),0))for(;!0;)if(J.B(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aO(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.aV(a,m,l,d)}else H.aV(a,m,l,d)},
cE:{"^":"ff;$ti"},
cP:{"^":"cE;$ti",
gN:function(a){return new H.cQ(this,this.gj(this),0,null,[H.dQ(this,"cP",0)])},
B:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.u(0,y))
if(z!==this.gj(this))throw H.a(P.P(this))}}},
hq:{"^":"cP;a,b,c,$ti",
cF:function(a,b,c,d){},
gcS:function(){var z=J.a0(this.a)
return z},
gd1:function(){var z,y
z=J.a0(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a0(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>=z)return 0
return z-y},
u:function(a,b){var z,y
z=this.gd1()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.v(b)
y=z+b
if(!(b<0)){z=this.gcS()
if(typeof z!=="number")return H.v(z)
z=y>=z}else z=!0
if(z)throw H.a(P.w(b,this,"index",null,null))
return J.eg(this.a,y)},
dN:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a4(y)
w=x.gj(y)
if(typeof w!=="number")return w.E()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.u(y,z+s)
if(s>=t.length)return H.b(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.S()
if(u<w)throw H.a(P.P(this))}return t},
p:{
d4:function(a,b,c,d){var z=new H.hq(a,b,c,[d])
z.cF(a,b,c,d)
return z}}},
cQ:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.a4(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.P(z))
w=this.c
if(typeof x!=="number")return H.v(x)
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
bc:{"^":"d;$ti"}}],["","",,H,{"^":"",
ju:function(a){return init.types[a]},
dT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isn},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aQ(a)
if(typeof z!=="string")throw H.a(H.L(a))
return z},
aC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
h0:function(a,b){var z,y
if(typeof a!=="string")H.F(H.L(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.b(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
h_:function(a){var z,y
if(typeof a!=="string")H.F(H.L(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.ev(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.q(a).$isaX){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.a7(w,0)===36)w=C.i.cd(w,1)
r=H.bx(H.am(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fZ:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
fX:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
fT:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
fU:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
fW:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
fY:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
fV:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
v:function(a){throw H.a(H.L(a))},
b:function(a,b){if(a==null)J.a0(a)
throw H.a(H.W(a,b))},
W:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
z=J.a0(a)
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bi(b,"index",null)},
L:function(a){return new P.a8(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bg()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e_})
z.name=""}else z.toString=H.e_
return z},
e_:function(){return J.aQ(this.dartException)},
F:function(a){throw H.a(a)},
y:function(a){throw H.a(P.P(a))},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.be(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bR(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cU(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$d9()
u=$.$get$da()
t=$.$get$db()
s=$.$get$dc()
r=$.$get$dg()
q=$.$get$dh()
p=$.$get$de()
$.$get$dd()
o=$.$get$dj()
n=$.$get$di()
m=v.O(y)
if(m!=null)return z.$1(H.bR(y,m))
else{m=u.O(y)
if(m!=null){m.method="call"
return z.$1(H.bR(y,m))}else{m=t.O(y)
if(m==null){m=s.O(y)
if(m==null){m=r.O(y)
if(m==null){m=q.O(y)
if(m==null){m=p.O(y)
if(m==null){m=s.O(y)
if(m==null){m=o.O(y)
if(m==null){m=n.O(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cU(y,m))}}return z.$1(new H.hv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a8(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d0()
return a},
a5:function(a){var z
if(a==null)return new H.dA(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dA(a,null)},
jq:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jC:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cG("Unsupported number of arguments for wrapped closure"))},
M:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jC)
a.$identity=z
return z},
eN:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$ise){z.$reflectionInfo=c
x=H.h3(z).r}else x=c
w=d?Object.create(new H.hh().constructor.prototype):Object.create(new H.bF(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.X
$.X=J.ap(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cA(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ju,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cy:H.bG
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
eK:function(a,b,c,d){var z=H.bG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eM(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eK(y,!w,z,b)
if(y===0){w=$.X
$.X=J.ap(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.as
if(v==null){v=H.b6("self")
$.as=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
$.X=J.ap(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.as
if(v==null){v=H.b6("self")
$.as=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
eL:function(a,b,c,d){var z,y
z=H.bG
y=H.cy
switch(b?-1:a){case 0:throw H.a(H.ha("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eM:function(a,b){var z,y,x,w,v,u,t,s
z=$.as
if(z==null){z=H.b6("self")
$.as=z}y=$.cx
if(y==null){y=H.b6("receiver")
$.cx=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eL(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.X
$.X=J.ap(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.X
$.X=J.ap(y,1)
return new Function(z+H.c(y)+"}")()},
c5:function(a,b,c,d,e,f){var z,y
z=J.av(b)
y=!!J.q(c).$ise?J.av(c):c
return H.eN(a,z,y,!!d,e,f)},
jJ:function(a,b){var z=J.a4(b)
throw H.a(H.cz(a,z.ag(b,3,z.gj(b))))},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.jJ(a,b)},
c6:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dN:function(a,b){var z,y
if(a==null)return!1
z=H.c6(J.q(a))
if(z==null)y=!1
else y=H.dS(z,b)
return y},
je:function(a){var z
if(a instanceof H.i){z=H.c6(J.q(a))
if(z!=null)return H.cb(z,null)
return"Closure"}return H.aD(a)},
jP:function(a){throw H.a(new P.eR(a))},
dP:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
m2:function(a,b,c){return H.aN(a["$as"+H.c(c)],H.am(b))},
bv:function(a,b,c,d){var z=H.aN(a["$as"+H.c(c)],H.am(b))
return z==null?null:z[d]},
dQ:function(a,b,c){var z=H.aN(a["$as"+H.c(b)],H.am(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.am(a)
return z==null?null:z[b]},
cb:function(a,b){var z=H.ao(a,b)
return z},
ao:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bx(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ao(z,b)
return H.j5(a,b)}return"unknown-reified-type"},
j5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ao(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ao(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ao(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jp(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ao(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bx:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bX("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ao(u,c)}return w?"":"<"+z.k(0)+">"},
jt:function(a){var z,y,x
if(a instanceof H.i){z=H.c6(J.q(a))
if(z!=null)return H.cb(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bx(a.$ti,0,null)
return y+x},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aZ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.am(a)
y=J.q(a)
if(y[b]==null)return!1
return H.dK(H.aN(y[d],z),c)},
b1:function(a,b,c,d){var z,y
if(a==null)return a
z=H.aZ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bx(c,0,null)
throw H.a(H.cz(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
dK:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.N(a[y],b[y]))return!1
return!0},
m0:function(a,b,c){return a.apply(b,H.aN(J.q(b)["$as"+H.c(c)],H.am(b)))},
N:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aT")return!0
if('func' in b)return H.dS(a,b)
if('func' in a)return b.builtin$cls==="kK"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cb(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dK(H.aN(u,z),x)},
dJ:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.N(z,v)||H.N(v,z)))return!1}return!0},
jf:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.av(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.N(v,u)||H.N(u,v)))return!1}return!0},
dS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.N(z,y)||H.N(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dJ(x,w,!1))return!1
if(!H.dJ(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.N(o,n)||H.N(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.N(o,n)||H.N(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.N(o,n)||H.N(n,o)))return!1}}return H.jf(a.named,b.named)},
m1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jD:function(a){var z,y,x,w,v,u
z=$.dR.$1(a)
y=$.bt[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dI.$2(a,z)
if(z!=null){y=$.bt[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.by(x)
$.bt[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bw[z]=x
return x}if(v==="-"){u=H.by(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dX(a,x)
if(v==="*")throw H.a(P.bZ(z))
if(init.leafTags[z]===true){u=H.by(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dX(a,x)},
dX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ca(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
by:function(a){return J.ca(a,!1,null,!!a.$isn)},
jG:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.by(z)
else return J.ca(z,c,null,null)},
jA:function(){if(!0===$.c7)return
$.c7=!0
H.jB()},
jB:function(){var z,y,x,w,v,u,t,s
$.bt=Object.create(null)
$.bw=Object.create(null)
H.jw()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dZ.$1(v)
if(u!=null){t=H.jG(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jw:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.ak(C.y,H.ak(C.D,H.ak(C.o,H.ak(C.o,H.ak(C.C,H.ak(C.z,H.ak(C.A(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dR=new H.jx(v)
$.dI=new H.jy(u)
$.dZ=new H.jz(t)},
ak:function(a,b){return a(b)||b},
jM:function(a,b,c,d){var z,y,x
z=b.cU(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.jO(a,x,x+y[0].length,c)},
jL:function(a,b,c){var z,y
z=b.gbb()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
jN:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.jM(a,b,c,d)},
jO:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
h2:{"^":"d;a,b,c,d,e,f,r,x",p:{
h3:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.av(z)
y=z[0]
x=z[1]
return new H.h2(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
ht:{"^":"d;a,b,c,d,e,f",
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
return new H.ht(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
df:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fP:{"^":"G;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
cU:function(a,b){return new H.fP(a,b==null?null:b.method)}}},
fp:{"^":"G;a,b,c",
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
return new H.fp(a,y,z?null:b.receiver)}}},
hv:{"^":"G;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jQ:{"^":"i:0;a",
$1:function(a){if(!!J.q(a).$isG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dA:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaE:1},
i:{"^":"d;",
k:function(a){return"Closure '"+H.aD(this).trim()+"'"},
gc6:function(){return this},
gc6:function(){return this}},
d5:{"^":"i;"},
hh:{"^":"d5;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bF:{"^":"d5;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.aC(this.a)
else y=typeof z!=="object"?J.a_(z):H.aC(z)
return(y^H.aC(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aD(z)+"'")},
p:{
bG:function(a){return a.a},
cy:function(a){return a.c},
b6:function(a){var z,y,x,w,v
z=new H.bF("self","target","receiver","name")
y=J.av(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eI:{"^":"G;a",
k:function(a){return this.a},
p:{
cz:function(a,b){return new H.eI("CastError: "+H.c(P.bI(a))+": type '"+H.je(a)+"' is not a subtype of type '"+b+"'")}}},
h9:{"^":"G;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
ha:function(a){return new H.h9(a)}}},
dk:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gA:function(a){return J.a_(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.dk&&J.B(this.a,b.a)}},
cM:{"^":"fz;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gL:function(a){return new H.fv(this,[H.D(this,0)])},
aa:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b7(y,b)}else return this.dw(b)},
dw:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.ap(z,J.a_(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a9(z,b)
x=y==null?null:y.ga2()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a9(w,b)
x=y==null?null:y.ga2()
return x}else return this.dz(b)},
dz:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ap(z,J.a_(a)&0x3ffffff)
x=this.aA(y,a)
if(x<0)return
return y[x].ga2()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ar()
this.b=z}this.b1(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ar()
this.c=y}this.b1(y,b,c)}else{x=this.d
if(x==null){x=this.ar()
this.d=x}w=J.a_(b)&0x3ffffff
v=this.ap(x,w)
if(v==null)this.av(x,w,[this.as(b,c)])
else{u=this.aA(v,b)
if(u>=0)v[u].sa2(c)
else v.push(this.as(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.P(this))
z=z.c}},
b1:function(a,b,c){var z=this.a9(a,b)
if(z==null)this.av(a,b,this.as(b,c))
else z.sa2(c)},
ba:function(){this.r=this.r+1&67108863},
as:function(a,b){var z,y
z=new H.fu(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ba()
return z},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].gdv(),b))return y
return-1},
k:function(a){return P.cR(this)},
a9:function(a,b){return a[b]},
ap:function(a,b){return a[b]},
av:function(a,b,c){a[b]=c},
cQ:function(a,b){delete a[b]},
b7:function(a,b){return this.a9(a,b)!=null},
ar:function(){var z=Object.create(null)
this.av(z,"<non-identifier-key>",z)
this.cQ(z,"<non-identifier-key>")
return z}},
fu:{"^":"d;dv:a<,a2:b@,c,d"},
fv:{"^":"cE;a,$ti",
gj:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.az(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.P(z))
y=y.c}}},
az:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.P(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jx:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
jy:{"^":"i:8;a",
$2:function(a,b){return this.a(a,b)}},
jz:{"^":"i:9;a",
$1:function(a){return this.a(a)}},
fo:{"^":"d;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbb:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.cL(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cU:function(a,b){var z,y
z=this.gbb()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.ih(this,y)},
p:{
cL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.bM("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
ih:{"^":"d;a,b",
h:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]}}}],["","",,H,{"^":"",
jp:function(a){return J.av(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
an:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
br:function(a){var z,y,x
if(!!J.q(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Z:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.W(b,a))},
fN:{"^":"f;","%":"DataView;ArrayBufferView;bT|du|dv|cS|dw|dx|ab"},
bT:{"^":"fN;",
gj:function(a){return a.length},
$ism:1,
$asm:I.al,
$isn:1,
$asn:I.al},
cS:{"^":"dv;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
i:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbc:function(){return[P.aJ]},
$ask:function(){return[P.aJ]},
$ise:1,
$ase:function(){return[P.aJ]},
"%":"Float64Array"},
ab:{"^":"dx;",
i:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbc:function(){return[P.E]},
$ask:function(){return[P.E]},
$ise:1,
$ase:function(){return[P.E]}},
fM:{"^":"cS;",$isbL:1,"%":"Float32Array"},
l5:{"^":"ab;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l6:{"^":"ab;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
$isfe:1,
"%":"Int32Array"},
l7:{"^":"ab;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int8Array"},
l8:{"^":"ab;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
l9:{"^":"ab;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
la:{"^":"ab;",
gj:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lb:{"^":"ab;",
gj:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
du:{"^":"bT+k;"},
dv:{"^":"du+bc;"},
dw:{"^":"bT+k;"},
dx:{"^":"dw+bc;"}}],["","",,P,{"^":"",
hD:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jg()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.M(new P.hF(z),1)).observe(y,{childList:true})
return new P.hE(z,y,x)}else if(self.setImmediate!=null)return P.jh()
return P.ji()},
lR:[function(a){self.scheduleImmediate(H.M(new P.hG(a),0))},"$1","jg",4,0,5],
lS:[function(a){self.setImmediate(H.M(new P.hH(a),0))},"$1","jh",4,0,5],
lT:[function(a){P.iK(0,a)},"$1","ji",4,0,5],
j9:function(a,b){if(H.dN(a,{func:1,args:[P.aT,P.aT]})){b.toString
return a}else{b.toString
return a}},
f5:function(a,b,c){var z
if(a==null)a=new P.bg()
z=$.r
if(z!==C.d)z.toString
z=new P.H(0,z,null,[c])
z.b3(a,b)
return z},
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.H(0,$.r,null,[P.e])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.f8(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aJ(new P.f7(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.H(0,$.r,null,[null])
r.b2(C.F)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.ag(p)
t=H.a5(p)
if(z.b===0||!1)return P.f5(u,t,null)
else{z.c=u
z.d=t}}return y},
j8:function(){var z,y
for(;z=$.ai,z!=null;){$.aH=null
y=z.b
$.ai=y
if(y==null)$.aG=null
z.a.$0()}},
m_:[function(){$.c3=!0
try{P.j8()}finally{$.aH=null
$.c3=!1
if($.ai!=null)$.$get$c0().$1(P.dL())}},"$0","dL",0,0,3],
dG:function(a){var z=new P.dm(a,null)
if($.ai==null){$.aG=z
$.ai=z
if(!$.c3)$.$get$c0().$1(P.dL())}else{$.aG.b=z
$.aG=z}},
jd:function(a){var z,y,x
z=$.ai
if(z==null){P.dG(a)
$.aH=$.aG
return}y=new P.dm(a,null)
x=$.aH
if(x==null){y.b=z
$.aH=y
$.ai=y}else{y.b=x.b
x.b=y
$.aH=y
if(y.b==null)$.aG=y}},
jK:function(a){var z=$.r
if(C.d===z){P.aj(null,null,C.d,a)
return}z.toString
P.aj(null,null,z,z.bo(a))},
jc:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.ag(u)
y=H.a5(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ar(x)
w=t
v=x.gU()
c.$2(w,v)}}},
j0:function(a,b,c,d){var z=a.dd(0)
if(!!J.q(z).$isQ&&z!==$.$get$cI())z.dS(new P.j3(b,c,d))
else b.I(c,d)},
j1:function(a,b){return new P.j2(a,b)},
bs:function(a,b,c,d,e){var z={}
z.a=d
P.jd(new P.ja(z,e))},
dE:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
dF:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
jb:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
aj:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bo(d):c.d9(d)
P.dG(d)},
hF:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hE:{"^":"i:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hG:{"^":"i:1;a",
$0:function(){this.a.$0()}},
hH:{"^":"i:1;a",
$0:function(){this.a.$0()}},
iJ:{"^":"d;a,b,c",
cL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.M(new P.iL(this,b),0),a)
else throw H.a(P.o("`setTimeout()` not found."))},
p:{
iK:function(a,b){var z=new P.iJ(!0,null,0)
z.cL(a,b)
return z}}},
iL:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Q:{"^":"d;$ti"},
f8:{"^":"i:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.I(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.I(z.c,z.d)}},
f7:{"^":"i;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.b(x,z)
x[z]=a
if(y===0)this.c.b6(x)}else if(z.b===0&&!this.e)this.c.I(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
k2:{"^":"d;$ti"},
dp:{"^":"d;$ti",
df:function(a,b){if(a==null)a=new P.bg()
if(this.a.a!==0)throw H.a(P.bW("Future already completed"))
$.r.toString
this.I(a,b)},
by:function(a){return this.df(a,null)}},
c_:{"^":"dp;a,$ti",
a1:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bW("Future already completed"))
z.b2(b)},
I:function(a,b){this.a.b3(a,b)}},
iG:{"^":"dp;a,$ti",
a1:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bW("Future already completed"))
z.a8(b)},
I:function(a,b){this.a.I(a,b)}},
dq:{"^":"d;at:a<,b,c,d,e,$ti",
gd5:function(){return this.b.b},
gbL:function(){return(this.c&1)!==0},
gdu:function(){return(this.c&2)!==0},
gbK:function(){return this.c===8},
ds:function(a){return this.b.b.aH(this.d,a)},
dC:function(a){if(this.c!==6)return!0
return this.b.b.aH(this.d,J.ar(a))},
dr:function(a){var z,y,x
z=this.e
y=J.h(a)
x=this.b.b
if(H.dN(z,{func:1,args:[P.d,P.aE]}))return x.dJ(z,y.gK(a),a.gU())
else return x.aH(z,y.gK(a))},
dt:function(){return this.b.b.bS(this.d)}},
H:{"^":"d;bf:a<,b,d_:c<,$ti",
gcV:function(){return this.a===2},
gaq:function(){return this.a>=4},
aJ:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.j9(b,z)}y=new P.H(0,z,null,[null])
x=b==null?1:3
this.ai(new P.dq(null,y,x,a,b,[H.D(this,0),null]))
return y},
aI:function(a){return this.aJ(a,null)},
dS:function(a){var z,y
z=$.r
y=new P.H(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.D(this,0)
this.ai(new P.dq(null,y,8,a,null,[z,z]))
return y},
ai:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaq()){y.ai(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aj(null,null,z,new P.hW(this,a))}},
bc:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gat()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaq()){v.bc(a)
return}this.a=v.a
this.c=v.c}z.a=this.au(a)
y=this.b
y.toString
P.aj(null,null,y,new P.i2(z,this))}},
Z:function(){var z=this.c
this.c=null
return this.au(z)},
au:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gat()
z.a=y}return y},
a8:function(a){var z,y,x
z=this.$ti
y=H.aZ(a,"$isQ",z,"$asQ")
if(y){z=H.aZ(a,"$isH",z,null)
if(z)P.bq(a,this)
else P.dr(a,this)}else{x=this.Z()
this.a=4
this.c=a
P.ah(this,x)}},
b6:function(a){var z=this.Z()
this.a=4
this.c=a
P.ah(this,z)},
I:[function(a,b){var z=this.Z()
this.a=8
this.c=new P.b5(a,b)
P.ah(this,z)},function(a){return this.I(a,null)},"dV","$2","$1","gb5",4,2,11],
b2:function(a){var z=H.aZ(a,"$isQ",this.$ti,"$asQ")
if(z){this.cO(a)
return}this.a=1
z=this.b
z.toString
P.aj(null,null,z,new P.hY(this,a))},
cO:function(a){var z=H.aZ(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aj(null,null,z,new P.i1(this,a))}else P.bq(a,this)
return}P.dr(a,this)},
b3:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aj(null,null,z,new P.hX(this,a,b))},
$isQ:1,
p:{
hV:function(a,b){var z=new P.H(0,$.r,null,[b])
z.a=4
z.c=a
return z},
dr:function(a,b){var z,y,x
b.a=1
try{a.aJ(new P.hZ(b),new P.i_(b))}catch(x){z=H.ag(x)
y=H.a5(x)
P.jK(new P.i0(b,z,y))}},
bq:function(a,b){var z
for(;a.gcV();)a=a.c
if(a.gaq()){z=b.Z()
b.a=a.a
b.c=a.c
P.ah(b,z)}else{z=b.c
b.a=2
b.c=a
a.bc(z)}},
ah:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ar(v)
t=v.gU()
y.toString
P.bs(null,null,y,u,t)}return}for(;b.gat()!=null;b=s){s=b.a
b.a=null
P.ah(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbL()||b.gbK()){q=b.gd5()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.ar(v)
t=v.gU()
y.toString
P.bs(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gbK())new P.i5(z,x,b,w).$0()
else if(y){if(b.gbL())new P.i4(x,b,r).$0()}else if(b.gdu())new P.i3(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.q(y).$isQ){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.au(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bq(y,o)
return}}o=b.b
b=o.Z()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
hW:{"^":"i:1;a,b",
$0:function(){P.ah(this.a,this.b)}},
i2:{"^":"i:1;a,b",
$0:function(){P.ah(this.b,this.a.a)}},
hZ:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.a8(a)}},
i_:{"^":"i:12;a",
$2:function(a,b){this.a.I(a,b)},
$1:function(a){return this.$2(a,null)}},
i0:{"^":"i:1;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
hY:{"^":"i:1;a,b",
$0:function(){this.a.b6(this.b)}},
i1:{"^":"i:1;a,b",
$0:function(){P.bq(this.b,this.a)}},
hX:{"^":"i:1;a,b,c",
$0:function(){this.a.I(this.b,this.c)}},
i5:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dt()}catch(w){y=H.ag(w)
x=H.a5(w)
if(this.d){v=J.ar(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b5(y,x)
u.a=!0
return}if(!!J.q(z).$isQ){if(z instanceof P.H&&z.gbf()>=4){if(z.gbf()===8){v=this.b
v.b=z.gd_()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aI(new P.i6(t))
v.a=!1}}},
i6:{"^":"i:0;a",
$1:function(a){return this.a}},
i4:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ds(this.c)}catch(x){z=H.ag(x)
y=H.a5(x)
w=this.a
w.b=new P.b5(z,y)
w.a=!0}}},
i3:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dC(z)===!0&&w.e!=null){v=this.b
v.b=w.dr(z)
v.a=!1}}catch(u){y=H.ag(u)
x=H.a5(u)
w=this.a
v=J.ar(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b5(y,x)
s.a=!0}}},
dm:{"^":"d;a,b"},
d2:{"^":"d;$ti",
B:function(a,b){var z,y
z={}
y=new P.H(0,$.r,null,[null])
z.a=null
z.a=this.bO(new P.hm(z,this,b,y),!0,new P.hn(y),y.gb5())
return y},
gj:function(a){var z,y
z={}
y=new P.H(0,$.r,null,[P.E])
z.a=0
this.bO(new P.ho(z),!0,new P.hp(z,y),y.gb5())
return y}},
hm:{"^":"i;a,b,c,d",
$1:function(a){P.jc(new P.hk(this.c,a),new P.hl(),P.j1(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.dQ(this.b,"d2",0)]}}},
hk:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hl:{"^":"i:0;",
$1:function(a){}},
hn:{"^":"i:1;a",
$0:function(){this.a.a8(null)}},
ho:{"^":"i:0;a",
$1:function(a){++this.a.a}},
hp:{"^":"i:1;a,b",
$0:function(){this.b.a8(this.a.a)}},
hj:{"^":"d;$ti"},
j3:{"^":"i:1;a,b,c",
$0:function(){return this.a.I(this.b,this.c)}},
j2:{"^":"i:13;a,b",
$2:function(a,b){P.j0(this.a,this.b,a,b)}},
b5:{"^":"d;K:a>,U:b<",
k:function(a){return H.c(this.a)},
$isG:1},
iQ:{"^":"d;"},
ja:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bg()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aQ(y)
throw x}},
iu:{"^":"iQ;",
dK:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.dE(null,null,this,a)}catch(x){z=H.ag(x)
y=H.a5(x)
P.bs(null,null,this,z,y)}},
dL:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.dF(null,null,this,a,b)}catch(x){z=H.ag(x)
y=H.a5(x)
P.bs(null,null,this,z,y)}},
d9:function(a){return new P.iw(this,a)},
bo:function(a){return new P.iv(this,a)},
da:function(a){return new P.ix(this,a)},
h:function(a,b){return},
bS:function(a){if($.r===C.d)return a.$0()
return P.dE(null,null,this,a)},
aH:function(a,b){if($.r===C.d)return a.$1(b)
return P.dF(null,null,this,a,b)},
dJ:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.jb(null,null,this,a,b,c)}},
iw:{"^":"i:1;a,b",
$0:function(){return this.a.bS(this.b)}},
iv:{"^":"i:1;a,b",
$0:function(){return this.a.dK(this.b)}},
ix:{"^":"i:0;a,b",
$1:function(a){return this.a.dL(this.b,a)}}}],["","",,P,{"^":"",
I:function(){return new H.cM(0,null,null,null,null,null,0,[null,null])},
cO:function(a){return H.jq(a,new H.cM(0,null,null,null,null,null,0,[null,null]))},
aa:function(a,b,c,d){return new P.ie(0,null,null,null,null,null,0,[d])},
fg:function(a,b,c){var z,y
if(P.c4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aI()
y.push(a)
try{P.j7(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.d3(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bO:function(a,b,c){var z,y,x
if(P.c4(a))return b+"..."+c
z=new P.bX(b)
y=$.$get$aI()
y.push(a)
try{x=z
x.a=P.d3(x.gV(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
c4:function(a){var z,y
for(z=0;y=$.$get$aI(),z<y.length;++z)if(a===y[z])return!0
return!1},
j7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.c(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.w()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.w();t=s,s=r){r=z.gD(z);++x
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
fw:function(a,b){var z,y
z=P.aa(null,null,null,b)
for(y=J.aP(a);y.w();)z.J(0,y.gD(y))
return z},
cR:function(a){var z,y,x
z={}
if(P.c4(a))return"{...}"
y=new P.bX("")
try{$.$get$aI().push(a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.cj(a,new P.fA(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.$get$aI()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
ie:{"^":"i8;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.c1(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cP(b)},
cP:function(a){var z=this.d
if(z==null)return!1
return this.ao(z[this.al(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.P(this))
z=z.b}},
J:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c2()
this.b=z}return this.b4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c2()
this.c=y}return this.b4(y,b)}else return this.cM(0,b)},
cM:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c2()
this.d=z}y=this.al(b)
x=z[y]
if(x==null)z[y]=[this.ak(b)]
else{if(this.ao(x,b)>=0)return!1
x.push(this.ak(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bd(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bd(this.c,b)
else return this.cX(0,b)},
cX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.al(b)]
x=this.ao(y,b)
if(x<0)return!1
this.bh(y.splice(x,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aj()}},
b4:function(a,b){if(a[b]!=null)return!1
a[b]=this.ak(b)
return!0},
bd:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bh(z)
delete a[b]
return!0},
aj:function(){this.r=this.r+1&67108863},
ak:function(a){var z,y
z=new P.ig(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aj()
return z},
bh:function(a){var z,y
z=a.gcW()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aj()},
al:function(a){return J.a_(a)&0x3ffffff},
ao:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].gcR(),b))return y
return-1},
p:{
c2:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ig:{"^":"d;cR:a<,b,cW:c<"},
c1:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.P(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
i8:{"^":"hb;$ti"},
kW:{"^":"d;$ti"},
k:{"^":"d;$ti",
gN:function(a){return new H.cQ(a,this.gj(a),0,null,[H.bv(this,a,"k",0)])},
u:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.P(a))}},
dn:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.v(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.P(a))}return y},
aT:function(a,b){return H.d4(a,b,null,H.bv(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.bv(this,a,"k",0)])
y=this.gj(a)
x=C.b.gj(b)
if(typeof y!=="number")return y.l()
C.c.sj(z,C.b.l(y,x))
C.c.a5(z,0,this.gj(a),a)
C.c.a5(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bO(a,"[","]")}},
fz:{"^":"T;$ti"},
fA:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
T:{"^":"d;$ti",
B:function(a,b){var z,y
for(z=J.aP(this.gL(a));z.w();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a0(this.gL(a))},
k:function(a){return P.cR(a)}},
hc:{"^":"d;$ti",
k:function(a){return P.bO(this,"{","}")},
B:function(a,b){var z
for(z=new P.c1(this,this.r,null,null,[null]),z.c=this.e;z.w();)b.$1(z.d)}},
hb:{"^":"hc;$ti"}}],["","",,P,{"^":"",
c8:function(a,b,c){var z=H.h0(a,c)
if(z!=null)return z
throw H.a(P.bM(a,null,null))},
af:function(a,b){var z=H.h_(a)
if(z!=null)return z
throw H.a(P.bM("Invalid double",a,null))},
eZ:function(a){var z=J.q(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aD(a)+"'"},
cX:function(a,b,c){return new H.fo(a,H.cL(a,!1,!0,!1),null,null)},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aQ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eZ(a)},
cG:function(a){return new P.hS(a)},
a7:function(a){H.an(H.c(a))},
jj:{"^":"d;"},
"+bool":0,
b9:{"^":"d;d4:a<,b",
gdD:function(){return this.a},
cq:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.eC("DateTime is outside valid range: "+this.gdD()))},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.b9))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.gd4())},
gA:function(a){var z=this.a
return(z^C.b.be(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.eT(H.fZ(this))
y=P.aR(H.fX(this))
x=P.aR(H.fT(this))
w=P.aR(H.fU(this))
v=P.aR(H.fW(this))
u=P.aR(H.fY(this))
t=P.eU(H.fV(this))
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
aR:function(a){if(a>=10)return""+a
return"0"+a}}},
aJ:{"^":"aM;"},
"+double":0,
aS:{"^":"d;Y:a<",
l:function(a,b){return new P.aS(C.b.l(this.a,b.gY()))},
E:function(a,b){return new P.aS(this.a-b.gY())},
S:function(a,b){return C.b.S(this.a,b.gY())},
a4:function(a,b){return C.b.a4(this.a,b.gY())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.gY())},
k:function(a){var z,y,x,w,v
z=new P.eY()
y=this.a
if(y<0)return"-"+new P.aS(0-y).k(0)
x=z.$1(C.b.a_(y,6e7)%60)
w=z.$1(C.b.a_(y,1e6)%60)
v=new P.eX().$1(y%1e6)
return""+C.b.a_(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
cD:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eX:{"^":"i:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eY:{"^":"i:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
G:{"^":"d;",
gU:function(){return H.a5(this.$thrownJsError)}},
bg:{"^":"G;",
k:function(a){return"Throw of null."}},
a8:{"^":"G;a,b,c,d",
gan:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gam:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gan()+y+x
if(!this.a)return w
v=this.gam()
u=P.bI(this.b)
return w+v+": "+H.c(u)},
p:{
eC:function(a){return new P.a8(!1,null,null,a)},
cv:function(a,b,c){return new P.a8(!0,a,b,c)},
eD:function(a){return new P.a8(!1,null,a,"Must not be null")}}},
cW:{"^":"a8;e,f,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bi:function(a,b,c){return new P.cW(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.cW(b,c,!0,a,d,"Invalid value")},
h1:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
z=a>c}else z=!0
if(z)throw H.a(P.bh(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
z=b>c}else z=!0
if(z)throw H.a(P.bh(b,a,c,"end",f))
return b}return c}}},
fd:{"^":"a8;e,j:f>,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){if(J.aO(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
w:function(a,b,c,d,e){var z=e!=null?e:J.a0(b)
return new P.fd(b,z,!0,a,c,"Index out of range")}}},
hw:{"^":"G;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
o:function(a){return new P.hw(a)}}},
hu:{"^":"G;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
bZ:function(a){return new P.hu(a)}}},
bV:{"^":"G;a",
k:function(a){return"Bad state: "+this.a},
p:{
bW:function(a){return new P.bV(a)}}},
eO:{"^":"G;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.bI(z))+"."},
p:{
P:function(a){return new P.eO(a)}}},
d0:{"^":"d;",
k:function(a){return"Stack Overflow"},
gU:function(){return},
$isG:1},
eR:{"^":"G;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
kk:{"^":"d;"},
hS:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
f3:{"^":"d;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.c(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.ag(x,0,75)+"..."
return y+"\n"+x},
p:{
bM:function(a,b,c){return new P.f3(a,b,c)}}},
E:{"^":"aM;"},
"+int":0,
ff:{"^":"d;$ti",
B:function(a,b){var z
for(z=this.gN(this);z.w();)b.$1(z.gD(z))},
gj:function(a){var z,y
z=this.gN(this)
for(y=0;z.w();)++y
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.eD("index"))
if(b<0)H.F(P.bh(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.w();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
k:function(a){return P.fg(this,"(",")")}},
e:{"^":"d;$ti"},
"+List":0,
bS:{"^":"d;$ti"},
aT:{"^":"d;",
gA:function(a){return P.d.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aM:{"^":"d;"},
"+num":0,
d:{"^":";",
C:function(a,b){return this===b},
gA:function(a){return H.aC(this)},
k:function(a){return"Instance of '"+H.aD(this)+"'"},
toString:function(){return this.k(this)}},
lp:{"^":"d;"},
aE:{"^":"d;"},
t:{"^":"d;"},
"+String":0,
bX:{"^":"d;V:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d3:function(a,b,c){var z=J.aP(b)
if(!z.w())return a
if(c.length===0){do a+=H.c(z.gD(z))
while(z.w())}else{a+=H.c(z.gD(z))
for(;z.w();)a=a+c+H.c(z.gD(z))}return a}}}}],["","",,W,{"^":"",
dY:function(a){var z,y
z=new P.H(0,$.r,null,[null])
y=new P.c_(z,[null])
a.then(H.M(new W.jH(y),1),H.M(new W.jI(y),1))
return z},
cF:function(a){return"wheel"},
ae:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dD:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hL(a)
if(!!J.q(z).$isz)return z
return}else return a},
j4:function(a){var z
if(!!J.q(a).$iscC)return a
z=new P.hA([],[],!1)
z.c=!0
return z.aK(a)},
dH:function(a){var z=$.r
if(z===C.d)return a
return z.da(a)},
jH:{"^":"i:0;a",
$1:function(a){return this.a.a1(0,a)}},
jI:{"^":"i:0;a",
$1:function(a){return this.a.by(a)}},
S:{"^":"ba;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jR:{"^":"bU;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
jS:{"^":"f;j:length=","%":"AccessibleNodeList"},
jT:{"^":"S;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jU:{"^":"S;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
jZ:{"^":"f;",
dA:[function(a){return W.dY(a.keys())},"$0","gL",1,0,14],
"%":"CacheStorage"},
k_:{"^":"S;G:height},H:width}",
c7:function(a,b,c){var z=a.getContext(b,P.jk(c,null))
return z},
"%":"HTMLCanvasElement"},
k0:{"^":"f;",
ad:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
k1:{"^":"C;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
k3:{"^":"b8;j:length=","%":"CSSPerspective"},
k4:{"^":"bH;m:x=,n:y=","%":"CSSPositionValue"},
k5:{"^":"b8;m:x=,n:y=,F:z=","%":"CSSRotation"},
k6:{"^":"b8;m:x=,n:y=,F:z=","%":"CSSScale"},
k7:{"^":"hJ;j:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eP:{"^":"d;"},
bH:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b8:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
k8:{"^":"bH;j:length=","%":"CSSTransformValue"},
k9:{"^":"b8;m:x=,n:y=,F:z=","%":"CSSTranslation"},
ka:{"^":"bH;j:length=","%":"CSSUnparsedValue"},
kb:{"^":"f;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kc:{"^":"f;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
cC:{"^":"C;",
gaD:function(a){return new W.aY(a,"mousedown",!1,[W.K])},
gaE:function(a){return new W.aY(a,"mousemove",!1,[W.K])},
gaF:function(a){return new W.aY(a,"mouseup",!1,[W.K])},
gaG:function(a){return new W.aY(a,W.cF(a),!1,[W.aF])},
$iscC:1,
"%":"Document|HTMLDocument|XMLDocument"},
kd:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
ke:{"^":"eV;",
gac:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
eV:{"^":"f;",
gac:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
kf:{"^":"hN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a2]},
$isn:1,
$asn:function(){return[P.a2]},
$ask:function(){return[P.a2]},
$ise:1,
$ase:function(){return[P.a2]},
$asl:function(){return[P.a2]},
"%":"ClientRectList|DOMRectList"},
eW:{"^":"f;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gH(a))+" x "+H.c(this.gG(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa2)return!1
return a.left===z.gbM(b)&&a.top===z.gbT(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.dt(W.ae(W.ae(W.ae(W.ae(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbU:function(a){return new P.a1(a.left,a.top,[null])},
gG:function(a){return a.height},
gbM:function(a){return a.left},
gbT:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa2:1,
$asa2:I.al,
"%":";DOMRectReadOnly"},
kg:{"^":"hP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.t]},
$isn:1,
$asn:function(){return[P.t]},
$ask:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
$asl:function(){return[P.t]},
"%":"DOMStringList"},
kh:{"^":"f;j:length=","%":"DOMTokenList"},
ba:{"^":"C;",
k:function(a){return a.localName},
aL:function(a){return a.getBoundingClientRect()},
gaD:function(a){return new W.ad(a,"mousedown",!1,[W.K])},
gaE:function(a){return new W.ad(a,"mousemove",!1,[W.K])},
gaF:function(a){return new W.ad(a,"mouseup",!1,[W.K])},
gaG:function(a){return new W.ad(a,W.cF(a),!1,[W.aF])},
$isba:1,
"%":";Element"},
ki:{"^":"S;G:height},H:width}","%":"HTMLEmbedElement"},
kj:{"^":"a9;K:error=","%":"ErrorEvent"},
a9:{"^":"f;",
ab:function(a){return a.preventDefault()},
$isa9:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
z:{"^":"f;",
bl:["ce",function(a,b,c,d){if(c!=null)this.cN(a,b,c,!1)}],
cN:function(a,b,c,d){return a.addEventListener(b,H.M(c,1),!1)},
cY:function(a,b,c,d){return a.removeEventListener(b,H.M(c,1),!1)},
$isz:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dy|dz|dB|dC"},
kD:{"^":"hU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bb]},
$isn:1,
$asn:function(){return[W.bb]},
$ask:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$asl:function(){return[W.bb]},
"%":"FileList"},
kE:{"^":"z;K:error=","%":"FileReader"},
kF:{"^":"z;K:error=,j:length=","%":"FileWriter"},
kH:{"^":"z;",
dW:function(a,b,c){return a.forEach(H.M(b,3),c)},
B:function(a,b){b=H.M(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
kJ:{"^":"S;j:length=","%":"HTMLFormElement"},
kL:{"^":"bU;m:x=,n:y=,F:z=","%":"Gyroscope"},
kM:{"^":"f;j:length=","%":"History"},
kN:{"^":"ia;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.C]},
$isn:1,
$asn:function(){return[W.C]},
$ask:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$asl:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fa:{"^":"fb;",
dX:function(a,b,c,d,e,f){return a.open(b,c)},
dF:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
fb:{"^":"z;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
kO:{"^":"S;G:height},H:width}","%":"HTMLIFrameElement"},
kP:{"^":"S;G:height},H:width}","%":"HTMLImageElement"},
kR:{"^":"S;G:height},H:width}","%":"HTMLInputElement"},
be:{"^":"dl;",
gdT:function(a){return a.which},
$isbe:1,
"%":"KeyboardEvent"},
kX:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
kY:{"^":"bU;m:x=,n:y=,F:z=","%":"Magnetometer"},
fC:{"^":"S;K:error=","%":"HTMLAudioElement;HTMLMediaElement"},
l_:{"^":"f;j:length=","%":"MediaList"},
l0:{"^":"z;az:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
l1:{"^":"z;",
bl:function(a,b,c,d){if(J.B(b,"message"))a.start()
this.ce(a,b,c,!1)},
"%":"MessagePort"},
l2:{"^":"ii;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.A([],[P.t])
this.B(a,new W.fE(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.o("Not supported"))},
$asT:function(){return[P.t,null]},
"%":"MIDIInputMap"},
fE:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
l3:{"^":"ij;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.A([],[P.t])
this.B(a,new W.fF(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.o("Not supported"))},
$asT:function(){return[P.t,null]},
"%":"MIDIOutputMap"},
fF:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
l4:{"^":"il;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bf]},
$isn:1,
$asn:function(){return[W.bf]},
$ask:function(){return[W.bf]},
$ise:1,
$ase:function(){return[W.bf]},
$asl:function(){return[W.bf]},
"%":"MimeTypeArray"},
K:{"^":"dl;bu:button=",
gdE:function(a){return new P.a1(a.movementX,a.movementY,[null])},
gbQ:function(a){var z,y,x
if(!!a.offsetX)return new P.a1(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.dD(z)).$isba)throw H.a(P.o("offsetX is only supported on elements"))
y=W.dD(z)
z=[null]
x=new P.a1(a.clientX,a.clientY,z).E(0,J.ek(J.em(y)))
return new P.a1(J.co(x.a),J.co(x.b),z)}},
$isK:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
C:{"^":"z;",
k:function(a){var z=a.nodeValue
return z==null?this.cf(a):z},
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
lc:{"^":"io;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.C]},
$isn:1,
$asn:function(){return[W.C]},
$ask:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$asl:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
le:{"^":"S;G:height},H:width}","%":"HTMLObjectElement"},
lh:{"^":"f;",
dA:[function(a){return W.dY(a.keys())},"$0","gL",1,0,15],
"%":"PaymentInstruments"},
aU:{"^":"f;j:length=","%":"Plugin"},
li:{"^":"is;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aU]},
$isn:1,
$asn:function(){return[W.aU]},
$ask:function(){return[W.aU]},
$ise:1,
$ase:function(){return[W.aU]},
$asl:function(){return[W.aU]},
"%":"PluginArray"},
lm:{"^":"f;",
aL:function(a){return a.getBoundingClientRect()},
"%":"Range"},
lt:{"^":"iy;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.A([],[P.t])
this.B(a,new W.h8(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.o("Not supported"))},
$asT:function(){return[P.t,null]},
"%":"RTCStatsReport"},
h8:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lu:{"^":"S;j:length=","%":"HTMLSelectElement"},
bU:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
lv:{"^":"a9;K:error=","%":"SensorErrorEvent"},
lw:{"^":"dz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bj]},
$isn:1,
$asn:function(){return[W.bj]},
$ask:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asl:function(){return[W.bj]},
"%":"SourceBufferList"},
lx:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bk]},
$isn:1,
$asn:function(){return[W.bk]},
$ask:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asl:function(){return[W.bk]},
"%":"SpeechGrammarList"},
ly:{"^":"a9;K:error=","%":"SpeechRecognitionError"},
aW:{"^":"f;j:length=","%":"SpeechRecognitionResult"},
lA:{"^":"iD;",
h:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gL:function(a){var z=H.A([],[P.t])
this.B(a,new W.hi(z))
return z},
gj:function(a){return a.length},
$asT:function(){return[P.t,P.t]},
"%":"Storage"},
hi:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lE:{"^":"iI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bn]},
$isn:1,
$asn:function(){return[W.bn]},
$ask:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asl:function(){return[W.bn]},
"%":"TextTrackCueList"},
lF:{"^":"dC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$ask:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asl:function(){return[W.bm]},
"%":"TextTrackList"},
lG:{"^":"f;j:length=","%":"TimeRanges"},
lH:{"^":"iN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bo]},
$isn:1,
$asn:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asl:function(){return[W.bo]},
"%":"TouchList"},
lI:{"^":"f;j:length=","%":"TrackDefaultList"},
dl:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lL:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
lN:{"^":"f;m:x=,F:z=","%":"VRStageBoundsPoint"},
lO:{"^":"fC;G:height},H:width}","%":"HTMLVideoElement"},
lP:{"^":"z;j:length=","%":"VideoTrackList"},
aF:{"^":"K;",
gdi:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.o("deltaY is not supported"))},
$isaF:1,
"%":"WheelEvent"},
hx:{"^":"z;",
gd7:function(a){var z,y
z=P.aM
y=new P.H(0,$.r,null,[z])
this.cT(a)
this.cZ(a,W.dH(new W.hy(new P.iG(y,[z]))))
return y},
cZ:function(a,b){return a.requestAnimationFrame(H.M(b,1))},
cT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hy:{"^":"i:0;a",
$1:function(a){this.a.a1(0,a)}},
lQ:{"^":"z;"},
lU:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b7]},
$isn:1,
$asn:function(){return[W.b7]},
$ask:function(){return[W.b7]},
$ise:1,
$ase:function(){return[W.b7]},
$asl:function(){return[W.b7]},
"%":"CSSRuleList"},
lV:{"^":"eW;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa2)return!1
return a.left===z.gbM(b)&&a.top===z.gbT(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dt(W.ae(W.ae(W.ae(W.ae(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbU:function(a){return new P.a1(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lW:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bd]},
$isn:1,
$asn:function(){return[W.bd]},
$ask:function(){return[W.bd]},
$ise:1,
$ase:function(){return[W.bd]},
$asl:function(){return[W.bd]},
"%":"GamepadList"},
lX:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.C]},
$isn:1,
$asn:function(){return[W.C]},
$ask:function(){return[W.C]},
$ise:1,
$ase:function(){return[W.C]},
$asl:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lY:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aW]},
$isn:1,
$asn:function(){return[W.aW]},
$ask:function(){return[W.aW]},
$ise:1,
$ase:function(){return[W.aW]},
$asl:function(){return[W.aW]},
"%":"SpeechRecognitionResultList"},
lZ:{"^":"j_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bl]},
$isn:1,
$asn:function(){return[W.bl]},
$ask:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asl:function(){return[W.bl]},
"%":"StyleSheetList"},
aY:{"^":"d2;a,b,c,$ti",
bO:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.D(this,0))}},
ad:{"^":"aY;a,b,c,$ti"},
hQ:{"^":"hj;a,b,c,d,e,$ti",
cK:function(a,b,c,d,e){this.d2()},
dd:function(a){if(this.b==null)return
this.d3()
this.b=null
this.d=null
return},
d2:function(){var z=this.d
if(z!=null&&this.a<=0)J.e1(this.b,this.c,z,!1)},
d3:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.e0(x,this.c,z,!1)}},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.dH(new W.hR(c))
z=new W.hQ(0,a,b,z,!1,[e])
z.cK(a,b,c,!1,e)
return z}}},
hR:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
l:{"^":"d;$ti",
gN:function(a){return new W.f_(a,this.gj(a),-1,null,[H.bv(this,a,"l",0)])}},
f_:{"^":"d;a,b,c,d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aq(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
hK:{"^":"d;a",$isz:1,p:{
hL:function(a){if(a===window)return a
else return new W.hK(a)}}},
hJ:{"^":"f+eP;"},
hM:{"^":"f+k;"},
hN:{"^":"hM+l;"},
hO:{"^":"f+k;"},
hP:{"^":"hO+l;"},
hT:{"^":"f+k;"},
hU:{"^":"hT+l;"},
i9:{"^":"f+k;"},
ia:{"^":"i9+l;"},
ii:{"^":"f+T;"},
ij:{"^":"f+T;"},
ik:{"^":"f+k;"},
il:{"^":"ik+l;"},
im:{"^":"f+k;"},
io:{"^":"im+l;"},
ir:{"^":"f+k;"},
is:{"^":"ir+l;"},
iy:{"^":"f+T;"},
dy:{"^":"z+k;"},
dz:{"^":"dy+l;"},
iz:{"^":"f+k;"},
iA:{"^":"iz+l;"},
iD:{"^":"f+T;"},
iH:{"^":"f+k;"},
iI:{"^":"iH+l;"},
dB:{"^":"z+k;"},
dC:{"^":"dB+l;"},
iM:{"^":"f+k;"},
iN:{"^":"iM+l;"},
iR:{"^":"f+k;"},
iS:{"^":"iR+l;"},
iT:{"^":"f+k;"},
iU:{"^":"iT+l;"},
iV:{"^":"f+k;"},
iW:{"^":"iV+l;"},
iX:{"^":"f+k;"},
iY:{"^":"iX+l;"},
iZ:{"^":"f+k;"},
j_:{"^":"iZ+l;"}}],["","",,P,{"^":"",
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.I()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
jk:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cj(a,new P.jl(z))
return z},
jm:function(a){var z,y
z=new P.H(0,$.r,null,[null])
y=new P.c_(z,[null])
a.then(H.M(new P.jn(y),1))["catch"](H.M(new P.jo(y),1))
return z},
hz:{"^":"d;",
bJ:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aK:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.b9(y,!0)
x.cq(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.bZ("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.jm(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bJ(a)
x=this.b
u=x.length
if(v>=u)return H.b(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.I()
z.a=t
if(v>=u)return H.b(x,v)
x[v]=t
this.dq(a,new P.hB(z,this))
return z.a}if(a instanceof Array){s=a
v=this.bJ(s)
x=this.b
if(v>=x.length)return H.b(x,v)
t=x[v]
if(t!=null)return t
u=J.a4(s)
r=u.gj(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.b(x,v)
x[v]=t
if(typeof r!=="number")return H.v(r)
x=J.aK(t)
q=0
for(;q<r;++q)x.i(t,q,this.aK(u.h(s,q)))
return t}return a}},
hB:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aK(b)
J.cc(z,a,y)
return y}},
jl:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}},
hA:{"^":"hz;a,b,c",
dq:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
b.$2(w,a[w])}}},
jn:{"^":"i:0;a",
$1:function(a){return this.a.a1(0,a)}},
jo:{"^":"i:0;a",
$1:function(a){return this.a.by(a)}}}],["","",,P,{"^":"",ls:{"^":"z;K:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},lJ:{"^":"z;K:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ds:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ib:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a1:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a1))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gA:function(a){var z,y
z=J.a_(this.a)
y=J.a_(this.b)
return P.ib(P.ds(P.ds(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.a1(y,C.a.l(z,x),this.$ti)},
E:function(a,b){var z,y,x,w
z=this.a
y=J.h(b)
x=y.gm(b)
if(typeof z!=="number")return z.E()
if(typeof x!=="number")return H.v(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.E()
if(typeof y!=="number")return H.v(y)
return new P.a1(z-x,w-y,this.$ti)}},
it:{"^":"d;$ti"},
a2:{"^":"it;$ti"}}],["","",,P,{"^":"",kl:{"^":"x;m:x=,n:y=","%":"SVGFEBlendElement"},km:{"^":"x;m:x=,n:y=","%":"SVGFEColorMatrixElement"},kn:{"^":"x;m:x=,n:y=","%":"SVGFEComponentTransferElement"},ko:{"^":"x;m:x=,n:y=","%":"SVGFECompositeElement"},kp:{"^":"x;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},kq:{"^":"x;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},kr:{"^":"x;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},ks:{"^":"x;m:x=,n:y=","%":"SVGFEFloodElement"},kt:{"^":"x;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},ku:{"^":"x;m:x=,n:y=","%":"SVGFEImageElement"},kv:{"^":"x;m:x=,n:y=","%":"SVGFEMergeElement"},kw:{"^":"x;m:x=,n:y=","%":"SVGFEMorphologyElement"},kx:{"^":"x;m:x=,n:y=","%":"SVGFEOffsetElement"},ky:{"^":"x;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},kz:{"^":"x;m:x=,n:y=","%":"SVGFESpecularLightingElement"},kA:{"^":"x;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},kB:{"^":"x;m:x=,n:y=","%":"SVGFETileElement"},kC:{"^":"x;m:x=,n:y=","%":"SVGFETurbulenceElement"},kG:{"^":"x;m:x=,n:y=","%":"SVGFilterElement"},kI:{"^":"at;m:x=,n:y=","%":"SVGForeignObjectElement"},f9:{"^":"at;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},at:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kQ:{"^":"at;m:x=,n:y=","%":"SVGImageElement"},kV:{"^":"id;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.cN]},
$ise:1,
$ase:function(){return[P.cN]},
$asl:function(){return[P.cN]},
"%":"SVGLengthList"},kZ:{"^":"x;m:x=,n:y=","%":"SVGMaskElement"},ld:{"^":"iq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.cV]},
$ise:1,
$ase:function(){return[P.cV]},
$asl:function(){return[P.cV]},
"%":"SVGNumberList"},lg:{"^":"x;m:x=,n:y=","%":"SVGPatternElement"},lj:{"^":"f;m:x=,n:y=","%":"SVGPoint"},lk:{"^":"f;j:length=","%":"SVGPointList"},ln:{"^":"f;m:x=,n:y=","%":"SVGRect"},lo:{"^":"f9;m:x=,n:y=","%":"SVGRectElement"},lB:{"^":"iF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
$asl:function(){return[P.t]},
"%":"SVGStringList"},x:{"^":"ba;",
gaD:function(a){return new W.ad(a,"mousedown",!1,[W.K])},
gaE:function(a){return new W.ad(a,"mousemove",!1,[W.K])},
gaF:function(a){return new W.ad(a,"mouseup",!1,[W.K])},
gaG:function(a){return new W.ad(a,"mousewheel",!1,[W.aF])},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lC:{"^":"at;m:x=,n:y=","%":"SVGSVGElement"},hr:{"^":"at;","%":"SVGTextPathElement;SVGTextContentElement"},lD:{"^":"hr;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lK:{"^":"iP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.d8]},
$ise:1,
$ase:function(){return[P.d8]},
$asl:function(){return[P.d8]},
"%":"SVGTransformList"},lM:{"^":"at;m:x=,n:y=","%":"SVGUseElement"},ic:{"^":"f+k;"},id:{"^":"ic+l;"},ip:{"^":"f+k;"},iq:{"^":"ip+l;"},iE:{"^":"f+k;"},iF:{"^":"iE+l;"},iO:{"^":"f+k;"},iP:{"^":"iO+l;"}}],["","",,P,{"^":"",jV:{"^":"f;j:length=","%":"AudioBuffer"},jW:{"^":"hI;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.A([],[P.t])
this.B(a,new P.eF(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.o("Not supported"))},
$asT:function(){return[P.t,null]},
"%":"AudioParamMap"},eF:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},jX:{"^":"f;az:enabled=","%":"AudioTrack"},jY:{"^":"z;j:length=","%":"AudioTrackList"},eG:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lf:{"^":"eG;j:length=","%":"OfflineAudioContext"},hI:{"^":"f+T;"}}],["","",,P,{"^":"",lq:{"^":"f;",
bk:function(a,b){return a.activeTexture(b)},
bm:function(a,b,c){return a.attachShader(b,c)},
bn:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindFramebuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bv:function(a,b){return a.clear(b)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.R(a.getContextAttributes())},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aO:function(a,b){return a.getShaderInfoLog(b)},
aP:function(a,b,c){return a.getShaderParameter(b,c)},
aQ:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
aS:function(a,b,c){return a.shaderSource(b,c)},
aU:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bV:function(a,b,c){return a.uniform1f(b,c)},
bW:function(a,b,c){return a.uniform1fv(b,c)},
bX:function(a,b,c){return a.uniform1i(b,c)},
bY:function(a,b,c){return a.uniform1iv(b,c)},
bZ:function(a,b,c){return a.uniform2fv(b,c)},
c_:function(a,b,c){return a.uniform3fv(b,c)},
c0:function(a,b,c){return a.uniform4fv(b,c)},
c1:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c2:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c3:function(a,b){return a.useProgram(b)},
c4:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lr:{"^":"f;",
d8:function(a,b){return a.beginTransformFeedback(b)},
dc:function(a,b){return a.bindVertexArray(b)},
dh:function(a){return a.createVertexArray()},
dj:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dk:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dm:function(a){return a.endTransformFeedback()},
dO:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dQ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bk:function(a,b){return a.activeTexture(b)},
bm:function(a,b,c){return a.attachShader(b,c)},
bn:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindFramebuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bv:function(a,b){return a.clear(b)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.R(a.getContextAttributes())},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aO:function(a,b){return a.getShaderInfoLog(b)},
aP:function(a,b,c){return a.getShaderParameter(b,c)},
aQ:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
aS:function(a,b,c){return a.shaderSource(b,c)},
aU:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bV:function(a,b,c){return a.uniform1f(b,c)},
bW:function(a,b,c){return a.uniform1fv(b,c)},
bX:function(a,b,c){return a.uniform1i(b,c)},
bY:function(a,b,c){return a.uniform1iv(b,c)},
bZ:function(a,b,c){return a.uniform2fv(b,c)},
c_:function(a,b,c){return a.uniform3fv(b,c)},
c0:function(a,b,c){return a.uniform4fv(b,c)},
c1:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c2:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c3:function(a,b){return a.useProgram(b)},
c4:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",lz:{"^":"iC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.R(a.item(b))},
i:function(a,b,c){throw H.a(P.o("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.bS]},
$ise:1,
$ase:function(){return[P.bS]},
$asl:function(){return[P.bS]},
"%":"SQLResultSetRowList"},iB:{"^":"f+k;"},iC:{"^":"iB+l;"}}],["","",,G,{"^":"",
hC:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.t])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.b(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.b(z,y)
z[y]=w}return C.c.a3(z,"\n")},
dn:function(a,b,c){var z,y,x,w
z=J.h(a)
y=z.bB(a,b)
z.aS(a,y,c)
z.bx(a,y)
x=z.aP(a,y,35713)
if(x!=null&&J.B(x,!1)){w=z.aO(a,y)
P.a7("E:Compilation failed:")
P.a7("E:"+G.hC(c))
P.a7("E:Failure:")
P.a7(C.i.l("E:",w))
throw H.a(w)}return y},
cT:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p
d.q(b)
d.af(0,a)
e.q(c)
e.af(0,a)
z=e.a
y=z[0]
x=z[1]
w=z[2]
v=d.a
u=v[0]
t=v[1]
s=v[2]
z[0]=x*s-w*t
z[1]=w*u-y*s
z[2]=y*t-x*u
r=z[0]
q=z[1]
z=z[2]
p=Math.sqrt(r*r+q*q+z*z)
if(p===0)return!1
e.c8(0,-1/p)
return!0},
cH:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bC(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bD(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.b(a,y)
v=J.cl(a[y])
if(z>=w)return H.b(b,z)
b[z]=v}return b},
f1:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bC(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x;++z
if(y>=a.length)return H.b(a,y)
x=J.bD(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
f2:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bC(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bD(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.cl(a[y])
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.el(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
f0:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aq(a[y],0)
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.aq(a[y],1)
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.aq(a[y],2)
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.aq(a[y],3)
if(z>=w)return H.b(b,z)
b[z]=x}return b},
i7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.az(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.e,P.E]],v=[P.aJ],u=[T.ac],t=[T.j],s=[T.p];y.w();){r=y.d
if(!x.aa(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.dO>0)H.an("I: "+q)
continue}p=z.h(0,r)
switch($.$get$V().h(0,r).a){case"vec2":b.X(r,G.f1(H.b1(p,"$ise",s,"$ase"),null),2)
break
case"vec3":b.X(r,G.cH(H.b1(p,"$ise",t,"$ase"),null),3)
break
case"vec4":b.X(r,G.f2(H.b1(p,"$ise",u,"$ase"),null),4)
break
case"float":b.X(r,new Float32Array(H.br(H.b1(p,"$ise",v,"$ase"))),1)
break
case"uvec4":b.X(r,G.f0(H.b1(p,"$ise",w,"$ase"),null),4)
break}}},
aB:{"^":"d;az:c>"},
bY:{"^":"aB;d,a,b,c",
aZ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.c(new H.dk(H.jt(this),null))+"}["+this.a+"]"],[P.t])
for(y=this.d,x=new H.az(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.w();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.c.a3(z,"\n")}},
eH:{"^":"d_;"},
eJ:{"^":"d;a,b",
dl:function(a,b,c){J.ci(this.a,b)
if(c>0)J.eA(this.a,b,c)},
dR:function(a,b,c,d,e,f,g,h){J.b2(this.a,34962,b)
J.cu(this.a,c,d,e,!1,g,h)}},
f4:{"^":"d;a,b,c,d,e"},
bJ:{"^":"d;a,b,c"},
bK:{"^":"d;a,b,c,d"},
bN:{"^":"d;a,b,c,d,e",
a6:function(a){switch($.$get$V().h(0,a).a){case"vec2":this.e.i(0,a,H.A([],[T.p]))
break
case"vec3":this.e.i(0,a,H.A([],[T.j]))
break
case"vec4":this.e.i(0,a,H.A([],[T.ac]))
break
case"float":this.e.i(0,a,H.A([],[P.aJ]))
break
case"uvec4":this.e.i(0,a,H.A([],[[P.e,P.E]]))
break}},
cl:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.bK(z,z+1,z+2,z+3))},
aW:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.y)(a),++x)y.push(a[x].W(0))},
cn:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.bJ(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.y)(a),++w)z.push(a[w].W(0))},
ah:function(a,b){var z,y,x,w
z=this.e.h(0,a)
for(y=b.length,x=z&&C.c,w=0;w<b.length;b.length===y||(0,H.y)(b),++w)x.J(z,b[w].W(0))},
ck:function(a,b){var z,y,x,w
z=this.e.h(0,a)
for(y=b.length,x=z&&C.c,w=0;w<b.length;b.length===y||(0,H.y)(b),++w)x.J(z,b[w].W(0))},
co:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.bK(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.y)(a),++w)z.push(a[w].W(0))},
cu:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.E])
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
cv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.A(y,[T.j])
w=new T.j(new Float32Array(3))
v=new T.j(new Float32Array(3))
for(y=this.b,u=y.length,t=x.length,s=0;s<y.length;y.length===u||(0,H.y)(y),++s){r=y[s]
q=r.a
p=z.length
if(q>=p)return H.b(z,q)
o=z[q]
n=r.b
if(n>=p)return H.b(z,n)
m=z[n]
l=r.c
if(l>=p)return H.b(z,l)
G.cT(o,m,z[l],w,v)
p=new T.j(new Float32Array(3))
p.q(v)
if(q>=t)return H.b(x,q)
x[q]=p
q=new T.j(new Float32Array(3))
q.q(v)
if(n>=t)return H.b(x,n)
x[n]=q
q=new T.j(new Float32Array(3))
q.q(v)
if(l>=t)return H.b(x,l)
x[l]=q}for(y=this.c,u=y.length,s=0;s<y.length;y.length===u||(0,H.y)(y),++s){k=y[s]
q=k.a
p=z.length
if(q>=p)return H.b(z,q)
o=z[q]
n=k.b
if(n>=p)return H.b(z,n)
m=z[n]
l=k.c
if(l>=p)return H.b(z,l)
G.cT(o,m,z[l],w,v)
p=new T.j(new Float32Array(3))
p.q(v)
if(q>=t)return H.b(x,q)
x[q]=p
q=new T.j(new Float32Array(3))
q.q(v)
if(n>=t)return H.b(x,n)
x[n]=q
q=new T.j(new Float32Array(3))
q.q(v)
if(l>=t)return H.b(x,l)
x[l]=q
q=k.d
p=new T.j(new Float32Array(3))
p.q(v)
if(q>=t)return H.b(x,q)
x[q]=p}this.e.i(0,"aNormal",x)},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.az(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.w();){w=x.d
v=$.$get$V().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a3(z," ")}},
d7:{"^":"d;a,b,c"},
d6:{"^":"d;a,b,c"},
fB:{"^":"bY;d,a,b,c"},
fD:{"^":"aB;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aX:function(a,b,c){var z,y
C.i.a7(a,0)
J.cc(this.cy,a,b)
z=this.d
y=this.r.h(0,a)
J.b2(z.a,34962,y)
J.cg(z.a,34962,b,35048)},
cw:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
X:function(a,b,c){var z,y,x,w,v
z=J.ch(a,0)===105
if(z&&this.z===0)this.z=C.b.ci(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bA(x.a))
this.aX(a,b,c)
w=$.$get$V().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b3(x.a,this.e)
x.dl(0,v,z?1:0)
x.dR(0,y.h(0,a),v,w.aY(),5126,!1,0,0)},
k:function(a){var z,y,x,w,v
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=J.h(z),w=J.aP(x.gL(z));w.w();){v=w.gD(w)
y.push(H.c(v)+":"+H.c(J.a0(x.h(z,v))))}return"MESH["+this.a+"] "+C.c.a3(y,"  ")}},
fR:{"^":"bY;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cp:function(a,b){var z
if(typeof a!=="number")return a.dU()
if(typeof b!=="number")return H.v(b)
z=a/b
if(this.z===z)return
this.z=z
this.b0()},
b0:function(){var z,y,x,w,v,u
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
aZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.j(new Float32Array(3))
u.t(x,w,v)
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
y=J.q(t)
x=!!y.$isac
q=x?y.gac(t):1
if(!!y.$isj){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
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
c.q(this.db)
c.bP(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
h6:{"^":"aB;d,e,f,r,x,y,z,Q,ch,a,b,c",
cD:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.i(0,t,J.cm(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.i(0,t,J.cm(w.a,v,t))}},
cG:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.az(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.w();){v=w.d
if(!z.aa(0,v))x.push(v)}for(z=this.x,y=new P.c1(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.w();){v=y.d
if(!z.M(0,v))x.push(v)}return x},
cI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.az(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.w();){t=y.d
switch(J.ch(t,0)){case 117:if(w.aa(0,t)){s=b.h(0,t)
if(v.aa(0,t))H.an("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$V().h(0,t)
if(r==null)H.F("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bE(x.a,q,s)
else if(!!J.q(s).$isfe)J.ey(x.a,q,s)
break
case"float":if(r.c===0)J.ew(x.a,q,s)
else if(!!J.q(s).$isbL)J.ex(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a6(s,"$isU").a
J.ct(x.a,q,!1,p)}else if(!!J.q(s).$isbL)J.ct(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a6(s,"$isaA").a
J.cs(x.a,q,!1,p)}else if(!!J.q(s).$isbL)J.cs(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cr(o,q,H.a6(s,"$isac").a)
else J.cr(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cq(o,q,H.a6(s,"$isj").a)
else J.cq(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cp(o,q,H.a6(s,"$isp").a)
else J.cp(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.v(p)
J.cd(x.a,33984+p)
p=H.a6(s,"$ishs").cz()
J.cf(x.a,3553,p)
p=this.ch
J.bE(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.v(p)
J.cd(x.a,33984+p)
p=H.a6(s,"$ishs").cz()
J.cf(x.a,34067,p)
p=this.ch
J.bE(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.an("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.B(s,!0)
o=x.a
if(p)J.b4(o,2929)
else J.bB(o,2929)
break
case"cStencilFunc":H.a6(s,"$isd7")
p=s.a
o=x.a
if(p===1281)J.bB(o,2960)
else{J.b4(o,2960)
o=s.b
n=s.c
J.et(x.a,p,o,n)}break
case"cDepthWrite":J.eb(x.a,s)
break
case"cBlendEquation":H.a6(s,"$isd6")
p=s.a
o=x.a
if(p===1281)J.bB(o,3042)
else{J.b4(o,3042)
o=s.b
n=s.c
J.e5(x.a,o,n)
J.e4(x.a,p)}break}++u
break}}m=P.cD(0,0,0,Date.now()-new P.b9(z,!1).a,0,0)
""+u
m.k(0)},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
y.ba()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x){w=b[x]
this.cI(w.a,w.aZ())}y=this.Q
y.a0(0)
for(v=J.aP(J.ej(a.cy));v.w();)y.J(0,v.gD(v))
u=this.cG()
if(u.length!==0)P.a7("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(u)))
J.b3(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cw()
s=a.Q
r=a.z
if(t)J.e2(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.ef(q,y,v,s,0,r)
else J.ee(q,y,v,s,0)}else{s=z.a
if(r>1)J.ed(s,y,0,v,r)
else J.ec(s,y,0,v)}if(t)J.eh(z.a)},
p:{
h7:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.aa(null,null,null,P.t)
y=c.b
x=d.b
w=c.f
v=J.e9(b.a)
u=G.dn(b.a,35633,y)
J.ce(b.a,v,u)
t=G.dn(b.a,35632,x)
J.ce(b.a,v,t)
if(w.length>0)J.eu(b.a,v,w,35980)
J.er(b.a,v)
if(J.eq(b.a,v,35714)!==!0)H.F(J.ep(b.a,v))
z=new G.h6(b,c,d,v,P.fw(c.c,null),P.I(),P.I(),z,null,a,!1,!0)
z.cD(a,b,c,d)
return z}}},
u:{"^":"d;a,b,c",
aY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hd:{"^":"d;a,b,c,d,e,f,r,x",
cj:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
z.push(w)
y.i(0,w,this.r);++this.r}C.c.ae(z)},
cm:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.c.ae(z)},
aV:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.ae(z)},
cE:function(a,b){this.b=this.cJ(!0,a,b)},
b_:function(a){return this.cE(a,null)},
cJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
s=$.$get$V().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.d6(w,b)
w.push("}")
return C.c.a3(w,"\n")},
p:{
cZ:function(a){return new G.hd(a,null,[],[],[],[],0,P.I())}}},
d_:{"^":"aB;",
c9:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,Y,{"^":"",
fc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.bN(!1,[],[],[],P.I())
z.a6("aTexUV")
z.a6("aNormal")
y=P.I()
x=J.cn(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.cX("\\s+",!0,!1)
r=P.cX("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.y)(x),++p){o=J.es(x[p],s," ")
n=H.jN(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.b(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.b(m,0)
l=m[0]
if(J.B(l,"g")){if(1>=o)return H.b(m,1)
y.i(0,m[1],w.length)}else if(J.B(l,"v")){if(1>=o)return H.b(m,1)
l=P.af(m[1],null)
if(2>=o)return H.b(m,2)
k=P.af(m[2],null)
if(3>=o)return H.b(m,3)
o=P.af(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.j(j))}else if(J.B(l,"vt")){if(1>=o)return H.b(m,1)
l=P.af(m[1],null)
if(2>=o)return H.b(m,2)
o=P.af(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.p(k))}else if(J.B(l,"vn")){if(1>=o)return H.b(m,1)
l=P.af(m[1],null)
if(2>=o)return H.b(m,2)
k=P.af(m[2],null)
if(3>=o)return H.b(m,3)
o=P.af(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.j(j))}else if(J.B(l,"f")){if(o!==4&&o!==5){H.an("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.cn(m[f],"/")
for(;e.length<3;)e.push("")
d=J.bz(P.c8(e[0],null,null),1)
if(1>=e.length)return H.b(e,1)
if(J.B(e[1],""))c=-1
else{if(1>=e.length)return H.b(e,1)
c=J.bz(P.c8(e[1],null,null),1)}if(2>=e.length)return H.b(e,2)
if(J.B(e[2],""))b=-1
else{if(2>=e.length)return H.b(e,2)
b=J.bz(P.c8(e[2],null,null),1)}o=w.length
if(J.aO(d,o)){if(d>>>0!==d||d>=o)return H.b(w,d)
i.push(w[d])}else i.push(new T.j(new Float32Array(3)))
o=J.q(c)
if(!o.C(c,-1)&&o.S(c,u.length)){if(c>>>0!==c||c>=u.length)return H.b(u,c)
g.push(u[c])}else{H.an("problem uv "+f+" "+H.c(c))
g.push(new T.p(new Float32Array(2)))}o=J.q(b)
if(!o.C(b,-1)&&o.S(b,v.length)){if(b>>>0!==b||b>=v.length)return H.b(v,b)
h.push(v[b])}else{H.an("problem normals "+f+" "+H.c(b))
h.push(new T.j(new Float32Array(3)))}}if(o===4)z.cn(i)
else z.co(i)
z.ck("aNormal",h)
z.ah("aTexUV",g)}}P.a7("loaded ("+P.cD(0,0,0,Date.now()-new P.b9(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",h5:{"^":"h4;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dI:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.h(z)
w.sH(z,y)
w.sG(z,x)
P.a7("size change "+H.c(y)+" "+H.c(x))
this.dx.cp(y,x)
this.z=y
this.Q=x},"$1","gdH",4,0,16]}}],["","",,A,{"^":"",
dM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.ei(b)!==!0)return
z=b.cH(c)
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
x.dg(new T.aA(v))
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
a.ct(b.cx,e,d)
if(0>=e.length)return H.b(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.y)(y),++s)A.dM(a,y[s],z,d,e)},
fO:{"^":"d_;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
cH:function(a){var z=this.dx
z.q(a)
z.bP(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
cY:{"^":"aB;d,e,f,a,b,c"},
h4:{"^":"aB;",
cC:function(a,b,c){if(this.d==null)this.d=new G.f4(this.e,null,null,null,null)},
cs:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.e3(v.a,36160,z)
J.eB(v.a,this.x,this.y,x,w)
if(y!==0)J.e6(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.bY(P.I(),"transforms",!1,!0))
r=new T.U(new Float32Array(16))
r.T()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.y)(x),++q)A.dM(v,x[q],r,a,s)
if(0>=s.length)return H.b(s,-1)
s.pop()}},
cr:function(){return this.cs(null)}}}],["","",,B,{"^":"",
eQ:function(c3,c4,c5,c6,c7,c8,c9,d0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
z=-c8
y=-c9
x=new T.j(new Float32Array(3))
x.t(z,y,d0)
w=new T.j(new Float32Array(3))
w.t(c8,y,d0)
v=new T.j(new Float32Array(3))
v.t(c8,c9,d0)
u=new T.j(new Float32Array(3))
u.t(z,c9,d0)
t=-d0
s=new T.j(new Float32Array(3))
s.t(z,y,t)
r=new T.j(new Float32Array(3))
r.t(z,c9,t)
q=new T.j(new Float32Array(3))
q.t(c8,c9,t)
p=new T.j(new Float32Array(3))
p.t(c8,y,t)
o=new T.j(new Float32Array(3))
o.t(z,c9,t)
n=new T.j(new Float32Array(3))
n.t(z,c9,d0)
m=new T.j(new Float32Array(3))
m.t(c8,c9,d0)
l=new T.j(new Float32Array(3))
l.t(c8,c9,t)
k=new T.j(new Float32Array(3))
k.t(c8,y,d0)
j=new T.j(new Float32Array(3))
j.t(z,y,d0)
i=new T.j(new Float32Array(3))
i.t(z,y,t)
h=new T.j(new Float32Array(3))
h.t(c8,y,t)
g=new T.j(new Float32Array(3))
g.t(c8,y,t)
f=new T.j(new Float32Array(3))
f.t(c8,c9,t)
e=new T.j(new Float32Array(3))
e.t(c8,c9,d0)
d=new T.j(new Float32Array(3))
d.t(c8,y,d0)
c=new T.j(new Float32Array(3))
c.t(z,y,t)
b=new T.j(new Float32Array(3))
b.t(z,y,d0)
y=new T.j(new Float32Array(3))
y.t(z,c9,d0)
a=new T.j(new Float32Array(3))
a.t(z,c9,t)
z=new T.p(new Float32Array(2))
z.v(c5,c7)
t=new T.p(new Float32Array(2))
t.v(c4,c7)
a0=new T.p(new Float32Array(2))
a0.v(c4,c6)
a1=new T.p(new Float32Array(2))
a1.v(c5,c6)
a2=new T.p(new Float32Array(2))
a2.v(c4,c7)
a3=new T.p(new Float32Array(2))
a3.v(c4,c6)
a4=new T.p(new Float32Array(2))
a4.v(c5,c6)
a5=new T.p(new Float32Array(2))
a5.v(c5,c7)
a6=new T.p(new Float32Array(2))
a6.v(c5,c6)
a7=new T.p(new Float32Array(2))
a7.v(c5,c7)
a8=new T.p(new Float32Array(2))
a8.v(c4,c7)
a9=new T.p(new Float32Array(2))
a9.v(c4,c6)
b0=new T.p(new Float32Array(2))
b0.v(c4,c6)
b1=new T.p(new Float32Array(2))
b1.v(c5,c6)
b2=new T.p(new Float32Array(2))
b2.v(c5,c7)
b3=new T.p(new Float32Array(2))
b3.v(c4,c7)
b4=new T.p(new Float32Array(2))
b4.v(c4,c7)
b5=new T.p(new Float32Array(2))
b5.v(c4,c6)
b6=new T.p(new Float32Array(2))
b6.v(c5,c6)
b7=new T.p(new Float32Array(2))
b7.v(c5,c7)
b8=new T.p(new Float32Array(2))
b8.v(c5,c7)
b9=new T.p(new Float32Array(2))
b9.v(c4,c7)
c0=new T.p(new Float32Array(2))
c0.v(c4,c6)
c1=new T.p(new Float32Array(2))
c1.v(c5,c6)
c2=new G.bN(!1,[],[],[],P.I())
c2.a6("aTexUV")
c2.cl(6)
c2.aW([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.ah("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
return c2},
eS:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=c/2
y=[]
x=[]
w=new T.j(new Float32Array(3))
w.t(0,z,0)
y.push(w)
w=new T.p(new Float32Array(2))
w.v(0,0)
x.push(w)
w=-z
v=new T.j(new Float32Array(3))
v.t(0,w,0)
y.push(v)
v=new T.p(new Float32Array(2))
v.v(1,1)
x.push(v)
for(u=0;u<d;++u){t=u/d
v=t*3.141592653589793*2
s=Math.sin(v)
r=Math.cos(v)
v=new Float32Array(3)
v[0]=s*a
v[1]=z
v[2]=r*a
y.push(new T.j(v))
v=new Float32Array(2)
v[0]=t
v[1]=1
x.push(new T.p(v))
v=new Float32Array(3)
v[0]=s*b
v[1]=w
v[2]=r*b
y.push(new T.j(v))
v=new Float32Array(2)
v[0]=t
v[1]=0
x.push(new T.p(v))}w=[]
v=[]
q=new G.bN(!1,w,v,[],P.I())
q.a6("aTexUV")
q.aW(y)
q.ah("aTexUV",x)
for(u=0;u<d;u=n){p=u*2+2
o=p+1
n=u+1
m=(n===d?0:n)*2+2
l=m+1
w.push(new G.bJ(0,p,m))
w.push(new G.bJ(1,l,o))
v.push(new G.bK(m,p,o,l))}return q}}],["","",,D,{"^":"",
fx:function(a){var z,y
z=new P.H(0,$.r,null,[null])
y=new XMLHttpRequest()
C.w.dF(y,"GET",a)
W.a3(y,"loadend",new D.fy(new P.c_(z,[null]),y),!1,W.ll)
y.send("")
return z},
fy:{"^":"i:0;a,b",
$1:function(a){this.a.a1(0,W.j4(this.b.response))}},
fq:{"^":"d;a,b,c",
cA:function(a){var z
a=document
z=W.be
W.a3(a,"keydown",new D.fs(this),!1,z)
W.a3(a,"keyup",new D.ft(this),!1,z)},
p:{
fr:function(a){var z=P.E
z=new D.fq(P.aa(null,null,null,z),P.aa(null,null,null,z),P.aa(null,null,null,z))
z.cA(a)
return z}}},
fs:{"^":"i:7;a",
$1:function(a){var z=this.a
z.a.J(0,J.ck(a))
z.b.J(0,a.which)}},
ft:{"^":"i:7;a",
$1:function(a){var z=this.a
z.a.bR(0,J.ck(a))
z.c.J(0,a.which)}},
fG:{"^":"d;a,b,c,d,e,f,r,x",
cB:function(a){var z,y
if(a==null)a=document
z=J.h(a)
y=z.gaE(a)
W.a3(y.a,y.b,new D.fI(this),!1,H.D(y,0))
y=z.gaD(a)
W.a3(y.a,y.b,new D.fJ(this),!1,H.D(y,0))
y=z.gaF(a)
W.a3(y.a,y.b,new D.fK(this),!1,H.D(y,0))
z=z.gaG(a)
W.a3(z.a,z.b,new D.fL(this),!1,H.D(z,0))},
p:{
fH:function(a){var z=P.E
z=new D.fG(P.aa(null,null,null,z),P.aa(null,null,null,z),P.aa(null,null,null,z),0,0,0,0,0)
z.cB(a)
return z}}},
fI:{"^":"i:4;a",
$1:function(a){var z,y
z=J.h(a)
z.ab(a)
y=this.a
y.r=z.gbQ(a).a
y.x=z.gbQ(a).b
y.d=z.gdE(a).a
y.e=a.movementY}},
fJ:{"^":"i:4;a",
$1:function(a){var z=J.h(a)
z.ab(a)
P.a7("BUTTON "+H.c(z.gbu(a)))
z=this.a
z.a.J(0,a.button)
z.b.J(0,a.button)}},
fK:{"^":"i:4;a",
$1:function(a){var z,y
z=J.h(a)
z.ab(a)
y=this.a
y.a.bR(0,z.gbu(a))
y.c.J(0,a.button)}},
fL:{"^":"i:17;a",
$1:function(a){var z=J.h(a)
z.ab(a)
this.a.f=z.gdi(a)}},
fQ:{"^":"eH;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b0:function(a){var z,y
z=C.G.dn(a,0,new A.jv())
if(typeof z!=="number")return H.v(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jv:{"^":"i:18;",
$2:function(a,b){var z,y
z=J.ap(a,J.a_(b))
if(typeof z!=="number")return H.v(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aA:{"^":"d;b8:a<",
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
k:function(a){return"[0] "+this.R(0).k(0)+"\n[1] "+this.R(1).k(0)+"\n[2] "+this.R(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=9)return H.b(z,b)
z[b]=c},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aA){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.b0(this.a)},
R:function(a){var z,y,x
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
return new T.j(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.aA(z)
y.q(this)
x=b.gb8()
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
E:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.aA(z)
y.q(this)
x=b.gb8()
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
dg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},U:{"^":"d;b9:a<",
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
k:function(a){return"[0] "+this.R(0).k(0)+"\n[1] "+this.R(1).k(0)+"\n[2] "+this.R(2).k(0)+"\n[3] "+this.R(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=16)return H.b(z,b)
z[b]=c},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.U){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.b0(this.a)},
R:function(a){var z,y,x
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
return new T.ac(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.U(z)
y.q(this)
x=b.gb9()
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
E:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.U(z)
y.q(this)
x=b.gb9()
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
bP:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},p:{"^":"d;bi:a<",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
q:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.b0(this.a)},
E:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.p(z)
y.q(this)
x=b.gbi()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.p(z)
y.q(this)
x=b.gbi()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=2)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=2)return H.b(z,b)
z[b]=c},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
W:function(a){var z=new T.p(new Float32Array(2))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},j:{"^":"d;aw:a<",
t:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.gaw()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.j){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.b0(this.a)},
E:function(a,b){var z=new T.j(new Float32Array(3))
z.q(this)
z.af(0,b)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.j(z)
y.q(this)
x=b.gaw()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=3)return H.b(z,b)
z[b]=c},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aC:function(a){var z,y,x,w,v,u
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
ay:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bC:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.j(new Float32Array(3))
z.t(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
af:function(a,b){var z,y
z=b.gaw()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
c8:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
W:function(a){var z=new T.j(new Float32Array(3))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}},ac:{"^":"d;bj:a<",
q:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ac){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.b0(this.a)},
E:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ac(z)
y.q(this)
x=b.gbj()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ac(z)
y.q(this)
x=b.gbj()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=4)return H.b(z,b)
z[b]=c},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gac:function(a){return this.a[3]}}}],["","",,N,{"^":"",
dU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
y=document.querySelector("#webgl-canvas")
x=new G.eJ(null,y)
w=J.en(y,"webgl2",P.cO(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
x.a=w
if(w==null)H.F(P.cG('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
v="ChronosGL Config: "+H.c(J.eo(w))
if($.dO>0)P.a7("I: "+v)
J.e7(w,0,0,0,1)
J.b4(w,2929)
w=new Float32Array(3)
v=D.fr(null)
u=D.fH(y)
t=new T.U(new Float32Array(16))
t.T()
s=new Float32Array(3)
r=new Float32Array(3)
q=new Float32Array(3)
p=new D.fQ(25,-45,0.3,0,new T.j(w),-0.02,v,u,t,new T.j(s),new T.j(r),new T.j(q),new T.j(new Float32Array(3)),"camera:orbit",!1,!0)
w=new T.U(new Float32Array(16))
w.T()
v=new T.U(new Float32Array(16))
v.T()
o=new G.fR(p,50,1,0.1,2520,w,v,new T.U(new Float32Array(16)),P.I(),"perspective",!1,!0)
o.b0()
w=H.A([],[A.cY])
n=new R.h5(y,o,null,x,w,17664,0,0,0,0,"main",!1,!0)
n.cC("main",x,null)
n.dI(null)
W.a3(window,"resize",n.gdH(),!1,W.a9)
v=G.h7("test",x,$.$get$dW(),$.$get$dV())
m=new A.cY(v,[o],[],"objects",!1,!0)
w.push(m)
z.a=0
w=P.I()
w.i(0,"cDepthTest",!0)
w.i(0,"cDepthWrite",!0)
w.i(0,"cBlendEquation",$.$get$cw())
w.i(0,"cStencilFunc",$.$get$d1())
P.f6([D.fx("../ct_logo.obj")],null,!1).aI(new N.jF(m,new G.fB(w,"mat",!1,!0),new N.jE(z,p,n)))},
jE:{"^":"i:19;a,b,c",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.a
y=J.aL(b1)
y.E(b1,z.a)
z.a=y.l(b1,0)
y=this.b
y.go+=0.001
z=y.r1
x=z.a
if(x.M(0,0)||x.M(0,1)){x=y.go
w=z.d
if(typeof w!=="number")return w.aR()
y.go=x+w*0.01
w=y.id
x=z.e
if(typeof x!=="number")return x.aR()
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
if(typeof w!=="number")return w.aR()
w=y.fy-w*y.k3
if(w>0)y.fy=w
w=C.a.de(y.id,-1.4707963267948965,1.4707963267948965)
y.id=w
v=y.fy
u=y.go
t=v*Math.cos(w)
y.c9(t*Math.cos(u),v*Math.sin(w),t*Math.sin(u))
u=y.k2
w=y.d.a
v=u.a
w[12]=w[12]+v[0]
w[13]=w[13]+v[1]
w[14]=w[14]+v[2]
s=w[12]
r=w[13]
q=w[14]
p=new T.j(new Float32Array(3))
p.t(0,1,0)
v=y.e
o=v.a
o[0]=w[12]
o[1]=w[13]
o[2]=w[14]
n=v.E(0,u)
n.aC(0)
m=p.bC(n)
m.aC(0)
l=n.bC(m)
l.aC(0)
u=m.ay(v)
o=l.ay(v)
v=n.ay(v)
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
j=y.f.a
j[0]=w[2]
j[1]=w[6]
j[2]=w[10]
y=-y.k1
h=j[0]
f=j[1]
e=j[2]
b=Math.sqrt(h*h+f*f+e*e)
s=j[0]/b
r=j[1]/b
q=j[2]/b
a=Math.cos(y)
a0=Math.sin(y)
a1=1-a
a2=s*s*a1+a
y=q*a0
a3=s*r*a1-y
j=r*a0
a4=s*q*a1+j
a5=r*s*a1+y
a6=r*r*a1+a
y=s*a0
a7=r*q*a1-y
a8=q*s*a1-j
a9=q*r*a1+y
b0=q*q*a1+a
y=w[0]
j=w[4]
e=w[8]
f=w[1]
h=w[5]
d=w[9]
c=w[2]
k=w[6]
i=w[10]
g=w[3]
u=w[7]
o=w[11]
w[0]=y*a2+j*a5+e*a8
w[1]=f*a2+h*a5+d*a8
w[2]=c*a2+k*a5+i*a8
w[3]=g*a2+u*a5+o*a8
w[4]=y*a3+j*a6+e*a9
w[5]=f*a3+h*a6+d*a9
w[6]=c*a3+k*a6+i*a9
w[7]=g*a3+u*a6+o*a9
w[8]=y*a4+j*a7+e*b0
w[9]=f*a4+h*a7+d*b0
w[10]=c*a4+k*a7+i*b0
w[11]=g*a4+u*a7+o*b0
x.c.a0(0)
x.b.a0(0)
z.e=0
z.d=0
z.f=0
z.c.a0(0)
z.b.a0(0)
this.c.cr()
C.X.gd7(window).aI(this)}},
jF:{"^":"i:20;a,b,c",
$1:function(a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=Y.fc(J.aq(a3,0))
y=[z,B.eS(1,1,2,16,!1),B.eQ(!1,1,0,1,0,1,1,1)]
for(x=this.a,w=x.f,v=this.b,x=x.d,u=x.d,x=x.e,t=0;t<3;++t){s=y[t]
s.cv()
r=x.x
q=P.I()
p=J.ea(u.a)
o=new G.fD(u,p,4,q,r,null,0,-1,null,null,P.I(),"meshdata:",!1,!0)
n=G.cH(s.d,null)
q.i(0,"aPosition",J.bA(u.a))
o.ch=n
o.aX("aPosition",n,3)
m=$.$get$V().h(0,"aPosition")
if(m==null)H.F("Unknown canonical aPosition")
l=r.h(0,"aPosition")
J.b3(u.a,p)
J.ci(u.a,l)
r=q.h(0,"aPosition")
q=m.aY()
J.b2(u.a,34962,r)
J.cu(u.a,l,q,5126,!1,0,0)
r=s.cu()
o.y=J.bA(u.a)
q=o.ch.length
if(q<768){o.cx=new Uint8Array(H.br(r))
o.Q=5121}else if(q<196608){o.cx=new Uint16Array(H.br(r))
o.Q=5123}else{o.cx=new Uint32Array(H.br(r))
o.Q=5125}J.b3(u.a,p)
r=o.y
q=o.cx
J.b2(u.a,34963,r)
J.cg(u.a,34963,q,35048)
G.i7(s,o)
r=new Float32Array(9)
q=new T.U(new Float32Array(16))
q.T()
p=new Float32Array(16)
n=new T.U(p)
n.T()
k=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
p[12]=-5+t*7
p[13]=4
p[14]=0
if(s===z){g=Math.cos(1.57)
f=Math.sin(1.57)
s=p[4]
e=p[8]
d=p[5]
c=p[9]
b=p[6]
a=p[10]
a0=p[7]
a1=p[11]
a2=-f
p[4]=s*g+e*f
p[5]=d*g+c*f
p[6]=b*g+a*f
p[7]=a0*g+a1*f
p[8]=s*a2+e*g
p[9]=d*a2+c*g
p[10]=b*a2+a*g
p[11]=a0*a2+a1*g
g=Math.cos(3.14)
f=Math.sin(3.14)
a1=p[0]
a2=p[4]
a0=p[1]
a=p[5]
b=p[2]
c=p[6]
d=p[3]
e=p[7]
s=-f
p[0]=a1*g+a2*f
p[1]=a0*g+a*f
p[2]=b*g+c*f
p[3]=d*g+e*f
p[4]=a1*s+a2*g
p[5]=a0*s+a*g
p[6]=b*s+c*g
p[7]=d*s+e*g}w.push(new A.fO(v,o,[],new T.aA(r),q,n,new T.j(k),new T.j(j),new T.j(i),new T.j(h),"meshdata:",!1,!0))}this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cJ.prototype
return J.fk.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.fl.prototype
if(typeof a=="boolean")return J.fj.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.jr=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.a4=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.aK=function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.aL=function(a){if(typeof a=="number")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aX.prototype
return a}
J.js=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aX.prototype
return a}
J.bu=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aX.prototype
return a}
J.h=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.d)return a
return J.b_(a)}
J.ap=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jr(a).l(a,b)}
J.B=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).C(a,b)}
J.O=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aL(a).a4(a,b)}
J.aO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aL(a).S(a,b)}
J.bz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aL(a).E(a,b)}
J.aq=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.dT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a4(a).h(a,b)}
J.cc=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.dT(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aK(a).i(a,b,c)}
J.e0=function(a,b,c,d){return J.h(a).cY(a,b,c,d)}
J.cd=function(a,b){return J.h(a).bk(a,b)}
J.e1=function(a,b,c,d){return J.h(a).bl(a,b,c,d)}
J.ce=function(a,b,c){return J.h(a).bm(a,b,c)}
J.e2=function(a,b){return J.h(a).d8(a,b)}
J.b2=function(a,b,c){return J.h(a).bn(a,b,c)}
J.e3=function(a,b,c){return J.h(a).bp(a,b,c)}
J.cf=function(a,b,c){return J.h(a).bq(a,b,c)}
J.b3=function(a,b){return J.h(a).dc(a,b)}
J.e4=function(a,b){return J.h(a).br(a,b)}
J.e5=function(a,b,c){return J.h(a).bs(a,b,c)}
J.cg=function(a,b,c,d){return J.h(a).bt(a,b,c,d)}
J.e6=function(a,b){return J.aK(a).bv(a,b)}
J.e7=function(a,b,c,d,e){return J.h(a).bw(a,b,c,d,e)}
J.ch=function(a,b){return J.bu(a).ax(a,b)}
J.e8=function(a,b){return J.js(a).P(a,b)}
J.bA=function(a){return J.h(a).bz(a)}
J.e9=function(a){return J.h(a).bA(a)}
J.ea=function(a){return J.h(a).dh(a)}
J.eb=function(a,b){return J.h(a).bD(a,b)}
J.bB=function(a,b){return J.h(a).bE(a,b)}
J.ec=function(a,b,c,d){return J.h(a).bF(a,b,c,d)}
J.ed=function(a,b,c,d,e){return J.h(a).dj(a,b,c,d,e)}
J.ee=function(a,b,c,d,e){return J.h(a).bG(a,b,c,d,e)}
J.ef=function(a,b,c,d,e,f){return J.h(a).dk(a,b,c,d,e,f)}
J.eg=function(a,b){return J.aK(a).u(a,b)}
J.b4=function(a,b){return J.h(a).bH(a,b)}
J.ci=function(a,b){return J.h(a).bI(a,b)}
J.eh=function(a){return J.h(a).dm(a)}
J.cj=function(a,b){return J.aK(a).B(a,b)}
J.ei=function(a){return J.h(a).gaz(a)}
J.ar=function(a){return J.h(a).gK(a)}
J.a_=function(a){return J.q(a).gA(a)}
J.aP=function(a){return J.aK(a).gN(a)}
J.ej=function(a){return J.h(a).gL(a)}
J.a0=function(a){return J.a4(a).gj(a)}
J.ek=function(a){return J.h(a).gbU(a)}
J.el=function(a){return J.h(a).gac(a)}
J.ck=function(a){return J.h(a).gdT(a)}
J.bC=function(a){return J.h(a).gm(a)}
J.bD=function(a){return J.h(a).gn(a)}
J.cl=function(a){return J.h(a).gF(a)}
J.em=function(a){return J.h(a).aL(a)}
J.en=function(a,b,c){return J.h(a).c7(a,b,c)}
J.eo=function(a){return J.h(a).ad(a)}
J.ep=function(a,b){return J.h(a).aM(a,b)}
J.eq=function(a,b,c){return J.h(a).aN(a,b,c)}
J.cm=function(a,b,c){return J.h(a).aQ(a,b,c)}
J.er=function(a,b){return J.h(a).bN(a,b)}
J.es=function(a,b,c){return J.bu(a).dG(a,b,c)}
J.cn=function(a,b){return J.bu(a).cc(a,b)}
J.et=function(a,b,c,d){return J.h(a).aU(a,b,c,d)}
J.co=function(a){return J.aL(a).dM(a)}
J.aQ=function(a){return J.q(a).k(a)}
J.eu=function(a,b,c,d){return J.h(a).dO(a,b,c,d)}
J.ev=function(a){return J.bu(a).dP(a)}
J.ew=function(a,b,c){return J.h(a).bV(a,b,c)}
J.ex=function(a,b,c){return J.h(a).bW(a,b,c)}
J.bE=function(a,b,c){return J.h(a).bX(a,b,c)}
J.ey=function(a,b,c){return J.h(a).bY(a,b,c)}
J.cp=function(a,b,c){return J.h(a).bZ(a,b,c)}
J.cq=function(a,b,c){return J.h(a).c_(a,b,c)}
J.cr=function(a,b,c){return J.h(a).c0(a,b,c)}
J.cs=function(a,b,c,d){return J.h(a).c1(a,b,c,d)}
J.ct=function(a,b,c,d){return J.h(a).c2(a,b,c,d)}
J.ez=function(a,b){return J.h(a).c3(a,b)}
J.eA=function(a,b,c){return J.h(a).dQ(a,b,c)}
J.cu=function(a,b,c,d,e,f,g){return J.h(a).c4(a,b,c,d,e,f,g)}
J.eB=function(a,b,c,d,e){return J.h(a).c5(a,b,c,d,e)}
I.c9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.w=W.fa.prototype
C.x=J.f.prototype
C.c=J.au.prototype
C.b=J.cJ.prototype
C.a=J.aw.prototype
C.i=J.ax.prototype
C.E=J.ay.prototype
C.G=H.fM.prototype
C.q=J.fS.prototype
C.n=J.aX.prototype
C.X=W.hx.prototype
C.d=new P.iu()
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
C.o=function(hooks) { return hooks; }

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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=I.c9([])
C.H=new G.u("vec3","vertex btangents",0)
C.e=new G.u("vec3","",0)
C.I=new G.u("vec4","delta from light",0)
C.m=new G.u("","",0)
C.r=new G.u("vec3","vertex coordinates",0)
C.J=new G.u("vec3","vertex binormals",0)
C.t=new G.u("vec4","for wireframe",0)
C.K=new G.u("vec4","per vertex color",0)
C.L=new G.u("float","for normal maps",0)
C.j=new G.u("mat4","",0)
C.N=new G.u("mat4","",4)
C.M=new G.u("mat4","",128)
C.f=new G.u("float","",0)
C.O=new G.u("float","",4)
C.P=new G.u("float","depth for shadowmaps",0)
C.h=new G.u("sampler2D","",0)
C.Q=new G.u("float","for bump maps",0)
C.R=new G.u("vec2","texture uvs",0)
C.S=new G.u("float","time since program start in sec",0)
C.k=new G.u("vec2","",0)
C.T=new G.u("samplerCube","",0)
C.l=new G.u("vec4","",0)
C.U=new G.u("vec3","vertex normals",0)
C.V=new G.u("sampler2DShadow","",0)
C.u=new G.u("vec3","per vertex color",0)
C.v=new G.u("mat3","",0)
C.W=new G.u("vec3","vertex tangents",0)
$.X=0
$.as=null
$.cx=null
$.dR=null
$.dI=null
$.dZ=null
$.bt=null
$.bw=null
$.c7=null
$.ai=null
$.aG=null
$.aH=null
$.c3=!1
$.r=C.d
$.dO=0
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
I.$lazy(y,x,w)}})(["cB","$get$cB",function(){return H.dP("_$dart_dartClosure")},"bP","$get$bP",function(){return H.dP("_$dart_js")},"d9","$get$d9",function(){return H.Y(H.bp({
toString:function(){return"$receiver$"}}))},"da","$get$da",function(){return H.Y(H.bp({$method$:null,
toString:function(){return"$receiver$"}}))},"db","$get$db",function(){return H.Y(H.bp(null))},"dc","$get$dc",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dg","$get$dg",function(){return H.Y(H.bp(void 0))},"dh","$get$dh",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"de","$get$de",function(){return H.Y(H.df(null))},"dd","$get$dd",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"dj","$get$dj",function(){return H.Y(H.df(void 0))},"di","$get$di",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c0","$get$c0",function(){return P.hD()},"cI","$get$cI",function(){return P.hV(null,P.aT)},"aI","$get$aI",function(){return[]},"d1","$get$d1",function(){return new G.d7(1281,0,4294967295)},"cw","$get$cw",function(){return new G.d6(1281,1281,1281)},"V","$get$V",function(){return P.cO(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.u,"aColorAlpha",C.K,"aPosition",C.r,"aTexUV",C.R,"aNormal",C.U,"aBinormal",C.J,"aCenter",C.t,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.W,"aBitangent",C.H,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.u,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.r,"vPositionFromLight",C.I,"vCenter",C.t,"vDepth",C.P,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.v,"uConvolutionMatrix",C.v,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.V,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.T,"uAnimationTable",C.h,"uTime",C.S,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.M,"uLightDescs",C.N,"uLightCount",C.f,"uLightTypes",C.O,"uBumpScale",C.Q,"uNormalScale",C.L])},"dW","$get$dW",function(){var z=G.cZ("Normal2Color")
z.cj(["aPosition","aNormal"])
z.aV(["vColor"])
z.cm(["uPerspectiveViewMatrix","uModelMatrix"])
z.b_(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = normalize(aNormal / 2.0 + vec3(0.5) );"])
return z},"dV","$get$dV",function(){var z=G.cZ("Normal2ColorF")
z.aV(["vColor"])
z.b_(["oFragColor = vec4( vColor, 1.0 );"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,args:[W.K]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.t,args:[P.E]},{func:1,args:[W.be]},{func:1,args:[,P.t]},{func:1,args:[P.t]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aE]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aE]},{func:1,ret:P.Q},{func:1,ret:[P.Q,[P.e,P.t]]},{func:1,v:true,args:[W.a9]},{func:1,args:[W.aF]},{func:1,args:[P.E,P.d]},{func:1,v:true,args:[P.aM]},{func:1,args:[P.e]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.jP(d||a)
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
Isolate.c9=a.c9
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
if(typeof dartMainRunner==="function")dartMainRunner(N.dU,[])
else N.dU([])})})()
//# sourceMappingURL=generateNormals.dart.js.map
