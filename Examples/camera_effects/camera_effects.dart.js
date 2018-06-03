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
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cn(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",ly:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
cs:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cr==null){H.kg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cc("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bZ()]
if(v!=null)return v
v=H.kk(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$bZ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
e:{"^":"c;",
G:function(a,b){return a===b},
gv:function(a){return H.aE(a)},
k:["ci",function(a){return"Instance of '"+H.aF(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h7:{"^":"e;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$iscm:1},
df:{"^":"e;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isaS:1},
c_:{"^":"e;",
gv:function(a){return 0},
k:["ck",function(a){return String(a)}]},
hu:{"^":"c_;"},
aX:{"^":"c_;"},
aC:{"^":"c_;",
k:function(a){var z=a[$.$get$d_()]
return z==null?this.ck(a):J.at(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ay:{"^":"e;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.N(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.U)(b),++y)a.push(b[y])},
a8:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
aS:function(a,b){return H.dx(a,b,null,H.B(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ca:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.N(P.r("setRange"))
P.hC(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$isf){x=e
w=d}else{w=y.aS(d,e).dU(0,!1)
x=0}y=J.Z(w)
if(x+z>y.gj(w))throw H.a(H.h4())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ac:function(a,b,c,d){return this.ca(a,b,c,d,0)},
bl:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.aa(a))}return!1},
cb:function(a,b){if(!!a.immutable$list)H.N(P.r("sort"))
H.hP(a,J.jP())},
ao:function(a){return this.cb(a,null)},
F:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
k:function(a){return P.bY(a,"[","]")},
gK:function(a){return new J.fr(a,a.length,0,null,[H.B(a,0)])},
gv:function(a){return H.aE(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.N(P.r("set length"))
if(b<0)throw H.a(P.ag(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a6(a,b))
if(b>=a.length||b<0)throw H.a(H.a6(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.N(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a6(a,b))
if(b>=a.length||b<0)throw H.a(H.a6(a,b))
a[b]=c},
p:function(a,b){var z,y
z=C.a.p(a.length,C.a.gj(b))
y=H.y([],[H.B(a,0)])
this.sj(y,z)
this.ac(y,0,a.length,a)
this.ac(y,a.length,z,b)
return y},
$ism:1,
$asm:I.al,
$isf:1,
n:{
az:function(a){a.fixed$length=Array
return a},
lw:[function(a,b){return J.eP(a,b)},"$2","jP",8,0,19]}},
lx:{"^":"ay;$ti"},
fr:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.U(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aA:{"^":"e;",
a0:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaj(b)
if(this.gaj(a)===z)return 0
if(this.gaj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaj:function(a){return a===0?1/a<0:a<0},
dk:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dW:function(a,b){var z
if(b>20)throw H.a(P.ag(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaj(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a+b},
ap:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a-b},
al:function(a,b){return a/b},
cm:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bg(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bg(a,b)},
bg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
be:function(a,b){var z
if(a>0)z=this.d4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d4:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a<b},
aa:function(a,b){if(typeof b!=="number")throw H.a(H.a4(b))
return a>b},
$isaK:1,
$isaL:1},
de:{"^":"aA;",$isK:1},
dd:{"^":"aA;"},
aB:{"^":"e;",
dl:function(a,b){if(b>=a.length)H.N(H.a6(a,b))
return a.charCodeAt(b)},
b5:function(a,b){if(b>=a.length)throw H.a(H.a6(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.a(P.fq(b,null,null))
return a+b},
cd:function(a,b,c){var z
if(c>a.length)throw H.a(P.ag(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cc:function(a,b){return this.cd(a,b,0)},
aU:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.N(H.a4(c))
if(b<0)throw H.a(P.bk(b,null,null))
if(typeof c!=="number")return H.an(c)
if(b>c)throw H.a(P.bk(b,null,null))
if(c>a.length)throw H.a(P.bk(c,null,null))
return a.substring(b,c)},
cf:function(a,b){return this.aU(a,b,null)},
dV:function(a){return a.toLowerCase()},
dq:function(a,b,c){if(c>a.length)throw H.a(P.ag(c,0,a.length,null,null))
return H.kq(a,b,c)},
a0:function(a,b){var z
if(typeof b!=="string")throw H.a(H.a4(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a6(a,b))
return a[b]},
$ism:1,
$asm:I.al,
$isk:1}}],["","",,H,{"^":"",
dc:function(){return new P.bo("No element")},
h5:function(){return new P.bo("Too many elements")},
h4:function(){return new P.bo("Too few elements")},
hP:function(a,b){H.aU(a,0,J.a0(a)-1,b)},
aU:function(a,b,c,d){if(c-b<=32)H.hO(a,b,c,d)
else H.hN(a,b,c,d)},
hO:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.Z(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.P(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.Z(c-b+1,6)
y=b+z
x=c-z
w=C.a.Z(b+c,2)
v=w-z
u=w+z
t=J.Z(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.P(d.$2(s,r),0)){n=r
r=s
s=n}if(J.P(d.$2(p,o),0)){n=o
o=p
p=n}if(J.P(d.$2(s,q),0)){n=q
q=s
s=n}if(J.P(d.$2(r,q),0)){n=q
q=r
r=n}if(J.P(d.$2(s,p),0)){n=p
p=s
s=n}if(J.P(d.$2(q,p),0)){n=p
p=q
q=n}if(J.P(d.$2(r,o),0)){n=o
o=r
r=n}if(J.P(d.$2(r,q),0)){n=q
q=r
r=n}if(J.P(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.O(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.G(i,0))continue
if(h.V(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aZ(i)
if(h.aa(i,0)){--l
continue}else{g=l-1
if(h.V(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.b2(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b2(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
if(m<y&&l>x){for(;J.O(d.$2(t.h(a,m),r),0);)++m
for(;J.O(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.O(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.O(d.$2(j,p),0))for(;!0;)if(J.O(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b2(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.aU(a,m,l,d)}else H.aU(a,m,l,d)},
bS:{"^":"be;$ti"},
bf:{"^":"bS;$ti",
gK:function(a){return new H.dj(this,this.gj(this),0,null,[H.bz(this,"bf",0)])},
aJ:function(a,b){return this.cj(0,b)}},
hZ:{"^":"bf;a,b,c,$ti",
cE:function(a,b,c,d){},
gcU:function(){var z=J.a0(this.a)
return z},
gd5:function(){var z,y
z=J.a0(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a0(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gd5()+b
if(b>=0){y=this.gcU()
if(typeof y!=="number")return H.an(y)
y=z>=y}else y=!0
if(y)throw H.a(P.w(b,this,"index",null,null))
return J.cy(this.a,z)},
dU:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.Z(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gj(y)<w)throw H.a(P.aa(this))}return t},
n:{
dx:function(a,b,c,d){var z=new H.hZ(a,b,c,[d])
z.cE(a,b,c,d)
return z}}},
dj:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.Z(z)
x=y.gj(z)
if(this.b!==x)throw H.a(P.aa(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hg:{"^":"bf;a,b,$ti",
gj:function(a){return J.a0(this.a)},
q:function(a,b){return this.b.$1(J.cy(this.a,b))},
$asbS:function(a,b){return[b]},
$asbf:function(a,b){return[b]},
$asbe:function(a,b){return[b]}},
dP:{"^":"be;a,b,$ti",
gK:function(a){return new H.i6(J.aO(this.a),this.b,this.$ti)}},
i6:{"^":"h6;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gu(z))===!0)return!0
return!1},
gu:function(a){var z=this.a
return z.gu(z)}},
bb:{"^":"c;$ti"}}],["","",,H,{"^":"",
k8:function(a){return init.types[a]},
kj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.a(H.a4(a))
return z},
aE:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aF:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.o(a).$isaX){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b5(w,0)===36)w=C.i.cf(w,1)
r=H.bB(H.am(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
I:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hB:function(a){return a.b?H.I(a).getUTCFullYear()+0:H.I(a).getFullYear()+0},
hz:function(a){return a.b?H.I(a).getUTCMonth()+1:H.I(a).getMonth()+1},
hv:function(a){return a.b?H.I(a).getUTCDate()+0:H.I(a).getDate()+0},
hw:function(a){return a.b?H.I(a).getUTCHours()+0:H.I(a).getHours()+0},
hy:function(a){return a.b?H.I(a).getUTCMinutes()+0:H.I(a).getMinutes()+0},
hA:function(a){return a.b?H.I(a).getUTCSeconds()+0:H.I(a).getSeconds()+0},
hx:function(a){return a.b?H.I(a).getUTCMilliseconds()+0:H.I(a).getMilliseconds()+0},
an:function(a){throw H.a(H.a4(a))},
d:function(a,b){if(a==null)J.a0(a)
throw H.a(H.a6(a,b))},
a6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a9(!0,b,"index",null)
z=J.a0(a)
if(!(b<0)){if(typeof z!=="number")return H.an(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bk(b,"index",null)},
a4:function(a){return new P.a9(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bj()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eD})
z.name=""}else z.toString=H.eD
return z},
eD:function(){return J.at(this.dartException)},
N:function(a){throw H.a(a)},
U:function(a){throw H.a(P.aa(a))},
L:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ks(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.be(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c0(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dq(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dD()
u=$.$get$dE()
t=$.$get$dF()
s=$.$get$dG()
r=$.$get$dK()
q=$.$get$dL()
p=$.$get$dI()
$.$get$dH()
o=$.$get$dN()
n=$.$get$dM()
m=v.R(y)
if(m!=null)return z.$1(H.c0(y,m))
else{m=u.R(y)
if(m!=null){m.method="call"
return z.$1(H.c0(y,m))}else{m=t.R(y)
if(m==null){m=s.R(y)
if(m==null){m=r.R(y)
if(m==null){m=q.R(y)
if(m==null){m=p.R(y)
if(m==null){m=s.R(y)
if(m==null){m=o.R(y)
if(m==null){m=n.R(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dq(y,m))}}return z.$1(new H.i4(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a9(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
a7:function(a){var z
if(a==null)return new H.e5(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e5(a,null)},
k4:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ki:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d7("Unsupported number of arguments for wrapped closure"))},
a5:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ki)
a.$identity=z
return z},
fz:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$isf){z.$reflectionInfo=c
x=H.hE(z).r}else x=c
w=d?Object.create(new H.hQ().constructor.prototype):Object.create(new H.bN(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.aq(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cM(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.k8,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cK:H.bO
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cM(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fw:function(a,b,c,d){var z=H.bO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cM:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fy(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fw(y,!w,z,b)
if(y===0){w=$.V
$.V=J.aq(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.au
if(v==null){v=H.b7("self")
$.au=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.V
$.V=J.aq(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.au
if(v==null){v=H.b7("self")
$.au=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fx:function(a,b,c,d){var z,y
z=H.bO
y=H.cK
switch(b?-1:a){case 0:throw H.a(H.hK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fy:function(a,b){var z,y,x,w,v,u,t,s
z=$.au
if(z==null){z=H.b7("self")
$.au=z}y=$.cJ
if(y==null){y=H.b7("receiver")
$.cJ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fx(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.V
$.V=J.aq(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.V
$.V=J.aq(y,1)
return new Function(z+H.b(y)+"}")()},
cn:function(a,b,c,d,e,f){var z,y
z=J.az(b)
y=!!J.o(c).$isf?J.az(c):c
return H.fz(a,z,y,!!d,e,f)},
ko:function(a,b){var z=J.Z(b)
throw H.a(H.cL(a,z.aU(b,3,z.gj(b))))},
a_:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.ko(a,b)},
co:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eo:function(a,b){var z,y
if(a==null)return!1
z=H.co(J.o(a))
if(z==null)y=!1
else y=H.eu(z,b)
return y},
jW:function(a){var z
if(a instanceof H.i){z=H.co(J.o(a))
if(z!=null)return H.ct(z,null)
return"Closure"}return H.aF(a)},
kr:function(a){throw H.a(new P.fD(a))},
er:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
mS:function(a,b,c){return H.aM(a["$as"+H.b(c)],H.am(b))},
b0:function(a,b,c,d){var z=H.aM(a["$as"+H.b(c)],H.am(b))
return z==null?null:z[d]},
bz:function(a,b,c){var z=H.aM(a["$as"+H.b(b)],H.am(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.am(a)
return z==null?null:z[b]},
ct:function(a,b){var z=H.ap(a,b)
return z},
ap:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bB(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ap(z,b)
return H.jO(a,b)}return"unknown-reified-type"},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ap(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ap(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ap(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.k3(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ap(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bB:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.ca("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ap(u,c)}return w?"":"<"+z.k(0)+">"},
k7:function(a){var z,y,x
if(a instanceof H.i){z=H.co(J.o(a))
if(z!=null)return H.ct(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bB(a.$ti,0,null)
return y+x},
aM:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aY:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.am(a)
y=J.o(a)
if(y[b]==null)return!1
return H.eh(H.aM(y[d],z),c)},
b1:function(a,b,c,d){var z,y
if(a==null)return a
z=H.aY(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bB(c,0,null)
throw H.a(H.cL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eh:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
mQ:function(a,b,c){return a.apply(b,H.aM(J.o(b)["$as"+H.b(c)],H.am(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aS")return!0
if('func' in b)return H.eu(a,b)
if('func' in a)return b.builtin$cls==="lp"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.ct(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eh(H.aM(u,z),x)},
eg:function(a,b,c){var z,y,x,w,v
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
jX:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.az(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
eu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.eg(x,w,!1))return!1
if(!H.eg(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.jX(a.named,b.named)},
mR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kk:function(a){var z,y,x,w,v,u
z=$.es.$1(a)
y=$.bx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ef.$2(a,z)
if(z!=null){y=$.bx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bC(x)
$.bx[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bA[z]=x
return x}if(v==="-"){u=H.bC(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ex(a,x)
if(v==="*")throw H.a(P.cc(z))
if(init.leafTags[z]===true){u=H.bC(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ex(a,x)},
ex:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cs(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bC:function(a){return J.cs(a,!1,null,!!a.$isn)},
kn:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bC(z)
else return J.cs(z,c,null,null)},
kg:function(){if(!0===$.cr)return
$.cr=!0
H.kh()},
kh:function(){var z,y,x,w,v,u,t,s
$.bx=Object.create(null)
$.bA=Object.create(null)
H.kc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ey.$1(v)
if(u!=null){t=H.kn(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kc:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.ak(C.G,H.ak(C.L,H.ak(C.v,H.ak(C.v,H.ak(C.K,H.ak(C.H,H.ak(C.I(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.es=new H.kd(v)
$.ef=new H.ke(u)
$.ey=new H.kf(t)},
ak:function(a,b){return a(b)||b},
kq:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hD:{"^":"c;a,b,c,d,e,f,r,x",n:{
hE:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.az(z)
y=z[0]
x=z[1]
return new H.hD(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i2:{"^":"c;a,b,c,d,e,f",
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
n:{
X:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bt:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ht:{"^":"E;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
n:{
dq:function(a,b){return new H.ht(a,b==null?null:b.method)}}},
h8:{"^":"E;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
n:{
c0:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h8(a,y,z?null:b.receiver)}}},
i4:{"^":"E;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ks:{"^":"i:0;a",
$1:function(a){if(!!J.o(a).$isE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e5:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isbn:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aF(this).trim()+"'"},
gc3:function(){return this},
gc3:function(){return this}},
dy:{"^":"i;"},
hQ:{"^":"dy;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bN:{"^":"dy;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aE(this.a)
else y=typeof z!=="object"?J.ae(z):H.aE(z)
return(y^H.aE(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aF(z)+"'")},
n:{
bO:function(a){return a.a},
cK:function(a){return a.c},
b7:function(a){var z,y,x,w,v
z=new H.bN("self","target","receiver","name")
y=J.az(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fu:{"^":"E;a",
k:function(a){return this.a},
n:{
cL:function(a,b){return new H.fu("CastError: "+H.b(P.bU(a))+": type '"+H.jW(a)+"' is not a subtype of type '"+b+"'")}}},
hJ:{"^":"E;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
n:{
hK:function(a){return new H.hJ(a)}}},
dO:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.ae(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.dO&&J.O(this.a,b.a)}},
dg:{"^":"c3;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gL:function(a){return new H.ha(this,[H.B(this,0)])},
ah:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b9(y,b)}else return this.dK(b)},
dK:function(a){var z=this.d
if(z==null)return!1
return this.aD(this.av(z,J.ae(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.af(z,b)
x=y==null?null:y.ga7()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.af(w,b)
x=y==null?null:y.ga7()
return x}else return this.dL(b)},
dL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.av(z,J.ae(a)&0x3ffffff)
x=this.aD(y,a)
if(x<0)return
return y[x].ga7()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ax()
this.b=z}this.b_(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ax()
this.c=y}this.b_(y,b,c)}else{x=this.d
if(x==null){x=this.ax()
this.d=x}w=J.ae(b)&0x3ffffff
v=this.av(x,w)
if(v==null)this.aB(x,w,[this.as(b,c)])
else{u=this.aD(v,b)
if(u>=0)v[u].sa7(c)
else v.push(this.as(b,c))}}},
C:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aa(this))
z=z.c}},
b_:function(a,b,c){var z=this.af(a,b)
if(z==null)this.aB(a,b,this.as(b,c))
else z.sa7(c)},
b0:function(){this.r=this.r+1&67108863},
as:function(a,b){var z,y
z=new H.h9(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b0()
return z},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].gdI(),b))return y
return-1},
k:function(a){return P.dk(this)},
af:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aB:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
b9:function(a,b){return this.af(a,b)!=null},
ax:function(){var z=Object.create(null)
this.aB(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z}},
h9:{"^":"c;dI:a<,a7:b@,c,d"},
ha:{"^":"bS;a,$ti",
gj:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.a2(z,z.r,null,null,this.$ti)
y.c=z.e
return y}},
a2:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aa(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kd:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
ke:{"^":"i:8;a",
$2:function(a,b){return this.a(a,b)}},
kf:{"^":"i:9;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
k3:function(a){return J.az(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bv:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Y:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a6(b,a))},
dl:{"^":"e;",$isdl:1,"%":"ArrayBuffer"},
c6:{"^":"e;",$isc6:1,"%":"DataView;ArrayBufferView;c5|e_|e0|dm|e1|e2|ac"},
c5:{"^":"c6;",
gj:function(a){return a.length},
$ism:1,
$asm:I.al,
$isn:1,
$asn:I.al},
dm:{"^":"e0;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
i:function(a,b,c){H.Y(b,a,a.length)
a[b]=c},
$asbb:function(){return[P.aK]},
$asj:function(){return[P.aK]},
$isf:1,
$asf:function(){return[P.aK]},
"%":"Float64Array"},
ac:{"^":"e2;",
i:function(a,b,c){H.Y(b,a,a.length)
a[b]=c},
$asbb:function(){return[P.K]},
$asj:function(){return[P.K]},
$isf:1,
$asf:function(){return[P.K]}},
hl:{"^":"dm;",$isbV:1,"%":"Float32Array"},
lN:{"^":"ac;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lO:{"^":"ac;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
$ish2:1,
"%":"Int32Array"},
lP:{"^":"ac;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lQ:{"^":"ac;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lR:{"^":"ac;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lS:{"^":"ac;",
gj:function(a){return a.length},
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lT:{"^":"ac;",
gj:function(a){return a.length},
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e_:{"^":"c5+j;"},
e0:{"^":"e_+bb;"},
e1:{"^":"c5+j;"},
e2:{"^":"e1+bb;"}}],["","",,P,{"^":"",
ia:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jY()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a5(new P.ic(z),1)).observe(y,{childList:true})
return new P.ib(z,y,x)}else if(self.setImmediate!=null)return P.jZ()
return P.k_()},
mD:[function(a){self.scheduleImmediate(H.a5(new P.id(a),0))},"$1","jY",4,0,5],
mE:[function(a){self.setImmediate(H.a5(new P.ie(a),0))},"$1","jZ",4,0,5],
mF:[function(a){P.jt(0,a)},"$1","k_",4,0,5],
ea:function(a,b){if(H.eo(a,{func:1,args:[P.aS,P.aS]})){b.toString
return a}else{b.toString
return a}},
fV:function(a,b,c){var z
if(a==null)a=new P.bj()
z=$.p
if(z!==C.c)z.toString
z=new P.H(0,z,null,[c])
z.b3(a,b)
return z},
fW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.H(0,$.p,null,[P.f])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fY(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aH(new P.fX(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.H(0,$.p,null,[null])
r.b2(C.x)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.L(p)
t=H.a7(p)
if(z.b===0||!1)return P.fV(u,t,null)
else{z.c=u
z.d=t}}return y},
jN:function(a,b,c){$.p.toString
a.J(b,c)},
jR:function(){var z,y
for(;z=$.ai,z!=null;){$.aI=null
y=z.b
$.ai=y
if(y==null)$.aH=null
z.a.$0()}},
mP:[function(){$.ck=!0
try{P.jR()}finally{$.aI=null
$.ck=!1
if($.ai!=null)$.$get$cf().$1(P.ei())}},"$0","ei",0,0,3],
ed:function(a){var z=new P.dQ(a,null)
if($.ai==null){$.aH=z
$.ai=z
if(!$.ck)$.$get$cf().$1(P.ei())}else{$.aH.b=z
$.aH=z}},
jU:function(a){var z,y,x
z=$.ai
if(z==null){P.ed(a)
$.aI=$.aH
return}y=new P.dQ(a,null)
x=$.aI
if(x==null){y.b=z
$.aI=y
$.ai=y}else{y.b=x.b
x.b=y
$.aI=y
if(y.b==null)$.aH=y}},
kp:function(a){var z=$.p
if(C.c===z){P.aj(null,null,C.c,a)
return}z.toString
P.aj(null,null,z,z.bo(a))},
jL:function(a,b,c){var z=a.dj(0)
if(!!J.o(z).$isab&&z!==$.$get$db())z.e0(new P.jM(b,c))
else b.a3(c)},
bw:function(a,b,c,d,e){var z={}
z.a=d
P.jU(new P.jS(z,e))},
eb:function(a,b,c,d){var z,y
y=$.p
if(y===c)return d.$0()
$.p=c
z=y
try{y=d.$0()
return y}finally{$.p=z}},
ec:function(a,b,c,d,e){var z,y
y=$.p
if(y===c)return d.$1(e)
$.p=c
z=y
try{y=d.$1(e)
return y}finally{$.p=z}},
jT:function(a,b,c,d,e,f){var z,y
y=$.p
if(y===c)return d.$2(e,f)
$.p=c
z=y
try{y=d.$2(e,f)
return y}finally{$.p=z}},
aj:function(a,b,c,d){var z=C.c!==c
if(z)d=!(!z||!1)?c.bo(d):c.dg(d)
P.ed(d)},
ic:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ib:{"^":"i:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
id:{"^":"i:1;a",
$0:function(){this.a.$0()}},
ie:{"^":"i:1;a",
$0:function(){this.a.$0()}},
js:{"^":"c;a,b,c",
cN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a5(new P.ju(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
n:{
jt:function(a,b){var z=new P.js(!0,null,0)
z.cN(a,b)
return z}}},
ju:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ab:{"^":"c;$ti"},
fY:{"^":"i:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.J(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.J(z.c,z.d)}},
fX:{"^":"i;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.b7(x)}else if(z.b===0&&!this.e)this.c.J(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kE:{"^":"c;$ti"},
dT:{"^":"c;$ti",
dn:function(a,b){if(a==null)a=new P.bj()
if(this.a.a!==0)throw H.a(P.aW("Future already completed"))
$.p.toString
this.J(a,b)},
dm:function(a){return this.dn(a,null)}},
dR:{"^":"dT;a,$ti",
a6:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.aW("Future already completed"))
z.b2(b)},
J:function(a,b){this.a.b3(a,b)}},
jn:{"^":"dT;a,$ti",
a6:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.aW("Future already completed"))
z.a3(b)},
J:function(a,b){this.a.J(a,b)}},
cg:{"^":"c;az:a<,b,c,d,e,$ti",
gda:function(){return this.b.b},
gbI:function(){return(this.c&1)!==0},
gdH:function(){return(this.c&2)!==0},
gbH:function(){return this.c===8},
dF:function(a){return this.b.b.aF(this.d,a)},
dM:function(a){if(this.c!==6)return!0
return this.b.b.aF(this.d,J.aN(a))},
dE:function(a){var z,y,x
z=this.e
y=J.h(a)
x=this.b.b
if(H.eo(z,{func:1,args:[P.c,P.bn]}))return x.dQ(z,y.gN(a),a.ga1())
else return x.aF(z,y.gN(a))},
dG:function(){return this.b.b.bM(this.d)}},
H:{"^":"c;bf:a<,b,d0:c<,$ti",
gcY:function(){return this.a===2},
gaw:function(){return this.a>=4},
aH:function(a,b){var z,y,x
z=$.p
if(z!==C.c){z.toString
if(b!=null)b=P.ea(b,z)}y=new P.H(0,z,null,[null])
x=b==null?1:3
this.ad(new P.cg(null,y,x,a,b,[H.B(this,0),null]))
return y},
a9:function(a){return this.aH(a,null)},
e0:function(a){var z,y
z=$.p
y=new P.H(0,z,null,this.$ti)
if(z!==C.c)z.toString
z=H.B(this,0)
this.ad(new P.cg(null,y,8,a,null,[z,z]))
return y},
ad:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaw()){y.ad(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aj(null,null,z,new P.iz(this,a))}},
bd:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaz()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaw()){v.bd(a)
return}this.a=v.a
this.c=v.c}z.a=this.aA(a)
y=this.b
y.toString
P.aj(null,null,y,new P.iG(z,this))}},
a4:function(){var z=this.c
this.c=null
return this.aA(z)},
aA:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaz()
z.a=y}return y},
a3:function(a){var z,y,x
z=this.$ti
y=H.aY(a,"$isab",z,"$asab")
if(y){z=H.aY(a,"$isH",z,null)
if(z)P.bu(a,this)
else P.dU(a,this)}else{x=this.a4()
this.a=4
this.c=a
P.ah(this,x)}},
b7:function(a){var z=this.a4()
this.a=4
this.c=a
P.ah(this,z)},
J:[function(a,b){var z=this.a4()
this.a=8
this.c=new P.b6(a,b)
P.ah(this,z)},function(a){return this.J(a,null)},"e2","$2","$1","gb6",4,2,11],
b2:function(a){var z=H.aY(a,"$isab",this.$ti,"$asab")
if(z){this.cQ(a)
return}this.a=1
z=this.b
z.toString
P.aj(null,null,z,new P.iB(this,a))},
cQ:function(a){var z=H.aY(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aj(null,null,z,new P.iF(this,a))}else P.bu(a,this)
return}P.dU(a,this)},
b3:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aj(null,null,z,new P.iA(this,a,b))},
$isab:1,
n:{
iy:function(a,b){var z=new P.H(0,$.p,null,[b])
z.a=4
z.c=a
return z},
dU:function(a,b){var z,y,x
b.a=1
try{a.aH(new P.iC(b),new P.iD(b))}catch(x){z=H.L(x)
y=H.a7(x)
P.kp(new P.iE(b,z,y))}},
bu:function(a,b){var z
for(;a.gcY();)a=a.c
if(a.gaw()){z=b.a4()
b.a=a.a
b.c=a.c
P.ah(b,z)}else{z=b.c
b.a=2
b.c=a
a.bd(z)}},
ah:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aN(v)
t=v.ga1()
y.toString
P.bw(null,null,y,u,t)}return}for(;b.gaz()!=null;b=s){s=b.a
b.a=null
P.ah(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbI()||b.gbH()){q=b.gda()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aN(v)
t=v.ga1()
y.toString
P.bw(null,null,y,u,t)
return}p=$.p
if(p==null?q!=null:p!==q)$.p=q
else p=null
if(b.gbH())new P.iJ(z,x,b,w).$0()
else if(y){if(b.gbI())new P.iI(x,b,r).$0()}else if(b.gdH())new P.iH(z,x,b).$0()
if(p!=null)$.p=p
y=x.b
if(!!J.o(y).$isab){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aA(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bu(y,o)
return}}o=b.b
b=o.a4()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iz:{"^":"i:1;a,b",
$0:function(){P.ah(this.a,this.b)}},
iG:{"^":"i:1;a,b",
$0:function(){P.ah(this.b,this.a.a)}},
iC:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.a3(a)}},
iD:{"^":"i:12;a",
$2:function(a,b){this.a.J(a,b)},
$1:function(a){return this.$2(a,null)}},
iE:{"^":"i:1;a,b,c",
$0:function(){this.a.J(this.b,this.c)}},
iB:{"^":"i:1;a,b",
$0:function(){this.a.b7(this.b)}},
iF:{"^":"i:1;a,b",
$0:function(){P.bu(this.b,this.a)}},
iA:{"^":"i:1;a,b,c",
$0:function(){this.a.J(this.b,this.c)}},
iJ:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dG()}catch(w){y=H.L(w)
x=H.a7(w)
if(this.d){v=J.aN(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b6(y,x)
u.a=!0
return}if(!!J.o(z).$isab){if(z instanceof P.H&&z.gbf()>=4){if(z.gbf()===8){v=this.b
v.b=z.gd0()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.a9(new P.iK(t))
v.a=!1}}},
iK:{"^":"i:0;a",
$1:function(a){return this.a}},
iI:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dF(this.c)}catch(x){z=H.L(x)
y=H.a7(x)
w=this.a
w.b=new P.b6(z,y)
w.a=!0}}},
iH:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dM(z)===!0&&w.e!=null){v=this.b
v.b=w.dE(z)
v.a=!1}}catch(u){y=H.L(u)
x=H.a7(u)
w=this.a
v=J.aN(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b6(y,x)
s.a=!0}}},
dQ:{"^":"c;a,b"},
c9:{"^":"c;$ti",
gj:function(a){var z,y
z={}
y=new P.H(0,$.p,null,[P.K])
z.a=0
this.bK(new P.hX(z),!0,new P.hY(z,y),y.gb6())
return y},
gdA:function(a){var z,y
z={}
y=new P.H(0,$.p,null,[H.bz(this,"c9",0)])
z.a=null
z.a=this.bK(new P.hV(z,this,y),!0,new P.hW(y),y.gb6())
return y}},
hX:{"^":"i:0;a",
$1:function(a){++this.a.a}},
hY:{"^":"i:1;a,b",
$0:function(){this.b.a3(this.a.a)}},
hV:{"^":"i;a,b,c",
$1:function(a){P.jL(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.bz(this.b,"c9",0)]}}},
hW:{"^":"i:1;a",
$0:function(){var z,y,x,w
try{x=H.dc()
throw H.a(x)}catch(w){z=H.L(w)
y=H.a7(w)
P.jN(this.a,z,y)}}},
hU:{"^":"c;$ti"},
jM:{"^":"i:1;a,b",
$0:function(){return this.a.a3(this.b)}},
b6:{"^":"c;N:a>,a1:b<",
k:function(a){return H.b(this.a)},
$isE:1},
jA:{"^":"c;"},
jS:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bj()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.at(y)
throw x}},
j3:{"^":"jA;",
dR:function(a){var z,y,x
try{if(C.c===$.p){a.$0()
return}P.eb(null,null,this,a)}catch(x){z=H.L(x)
y=H.a7(x)
P.bw(null,null,this,z,y)}},
dS:function(a,b){var z,y,x
try{if(C.c===$.p){a.$1(b)
return}P.ec(null,null,this,a,b)}catch(x){z=H.L(x)
y=H.a7(x)
P.bw(null,null,this,z,y)}},
dg:function(a){return new P.j5(this,a)},
bo:function(a){return new P.j4(this,a)},
dh:function(a){return new P.j6(this,a)},
h:function(a,b){return},
bM:function(a){if($.p===C.c)return a.$0()
return P.eb(null,null,this,a)},
aF:function(a,b){if($.p===C.c)return a.$1(b)
return P.ec(null,null,this,a,b)},
dQ:function(a,b,c){if($.p===C.c)return a.$2(b,c)
return P.jT(null,null,this,a,b,c)}},
j5:{"^":"i:1;a,b",
$0:function(){return this.a.bM(this.b)}},
j4:{"^":"i:1;a,b",
$0:function(){return this.a.dR(this.b)}},
j6:{"^":"i:0;a,b",
$1:function(a){return this.a.dS(this.b,a)}}}],["","",,P,{"^":"",
t:function(){return new H.dg(0,null,null,null,null,null,0,[null,null])},
c1:function(a){return H.k4(a,new H.dg(0,null,null,null,null,null,0,[null,null]))},
aR:function(a,b,c,d){return new P.iR(0,null,null,null,null,null,0,[d])},
h3:function(a,b,c){var z,y
if(P.cl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aJ()
y.push(a)
try{P.jQ(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dw(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bY:function(a,b,c){var z,y,x
if(P.cl(a))return b+"..."+c
z=new P.ca(b)
y=$.$get$aJ()
y.push(a)
try{x=z
x.a=P.dw(x.gY(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gY()+c
y=z.gY()
return y.charCodeAt(0)==0?y:y},
cl:function(a){var z,y
for(z=0;y=$.$get$aJ(),z<y.length;++z)if(a===y[z])return!0
return!1},
jQ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gu(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gu(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gu(z);++x
for(;z.t();t=s,s=r){r=z.gu(z);++x
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
c2:function(a,b){var z,y
z=P.aR(null,null,null,b)
for(y=J.aO(a);y.t();)z.aC(0,y.gu(y))
return z},
dk:function(a){var z,y,x
z={}
if(P.cl(a))return"{...}"
y=new P.ca("")
try{$.$get$aJ().push(a)
x=y
x.a=x.gY()+"{"
z.a=!0
J.f0(a,new P.hf(z,y))
z=y
z.a=z.gY()+"}"}finally{z=$.$get$aJ()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gY()
return z.charCodeAt(0)==0?z:z},
iR:{"^":"iM;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.dY(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
F:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cR(b)},
cR:function(a){var z=this.d
if(z==null)return!1
return this.ba(z[this.b8(a)],a)>=0},
aC:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cj()
this.b=z}return this.b1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cj()
this.c=y}return this.b1(y,b)}else return this.cO(0,b)},
cO:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cj()
this.d=z}y=this.b8(b)
x=z[y]
if(x==null)z[y]=[this.ay(b)]
else{if(this.ba(x,b)>=0)return!1
x.push(this.ay(b))}return!0},
b1:function(a,b){if(a[b]!=null)return!1
a[b]=this.ay(b)
return!0},
bb:function(){this.r=this.r+1&67108863},
ay:function(a){var z,y
z=new P.iS(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bb()
return z},
b8:function(a){return J.ae(a)&0x3ffffff},
ba:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].gcT(),b))return y
return-1},
n:{
cj:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iS:{"^":"c;cT:a<,b,c"},
dY:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aa(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iM:{"^":"hL;$ti"},
lB:{"^":"c;$ti"},
di:{"^":"dZ;$ti",$isf:1},
j:{"^":"c;$ti",
gK:function(a){return new H.dj(a,this.gj(a),0,null,[H.b0(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
dC:function(a,b,c){var z,y,x
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.aa(a))}return y},
aS:function(a,b){return H.dx(a,b,null,H.b0(this,a,"j",0))},
p:function(a,b){var z=H.y([],[H.b0(this,a,"j",0)])
C.b.sj(z,C.a.p(this.gj(a),C.a.gj(b)))
C.b.ac(z,0,this.gj(a),a)
C.b.ac(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bY(a,"[","]")}},
c3:{"^":"Q;$ti"},
hf:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
Q:{"^":"c;$ti",
C:function(a,b){var z,y
for(z=J.aO(this.gL(a));z.t();){y=z.gu(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a0(this.gL(a))},
k:function(a){return P.dk(a)},
$isC:1},
hM:{"^":"c;$ti",
O:function(a,b){var z
for(z=J.aO(b);z.t();)this.aC(0,z.gu(z))},
k:function(a){return P.bY(this,"{","}")}},
hL:{"^":"hM;$ti"},
dZ:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fQ:function(a){var z=J.o(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aF(a)+"'"},
bU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fQ(a)},
d7:function(a){return new P.iv(a)},
a8:function(a){H.bD(H.b(a))},
cm:{"^":"c;"},
"+bool":0,
bR:{"^":"c;d9:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.bR))return!1
return this.a===b.a&&this.b===b.b},
a0:function(a,b){return C.a.a0(this.a,b.gd9())},
gv:function(a){var z=this.a
return(z^C.a.be(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fE(H.hB(this))
y=P.aP(H.hz(this))
x=P.aP(H.hv(this))
w=P.aP(H.hw(this))
v=P.aP(H.hy(this))
u=P.aP(H.hA(this))
t=P.fF(H.hx(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fE:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aP:function(a){if(a>=10)return""+a
return"0"+a}}},
aK:{"^":"aL;"},
"+double":0,
b9:{"^":"c;ae:a<",
p:function(a,b){return new P.b9(C.a.p(this.a,b.gae()))},
V:function(a,b){return C.a.V(this.a,b.gae())},
aa:function(a,b){return C.a.aa(this.a,b.gae())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.b9))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
a0:function(a,b){return C.a.a0(this.a,b.gae())},
k:function(a){var z,y,x,w,v
z=new P.fM()
y=this.a
if(y<0)return"-"+new P.b9(0-y).k(0)
x=z.$1(C.a.Z(y,6e7)%60)
w=z.$1(C.a.Z(y,1e6)%60)
v=new P.fL().$1(y%1e6)
return""+C.a.Z(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
n:{
fK:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fL:{"^":"i:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fM:{"^":"i:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
E:{"^":"c;",
ga1:function(){return H.a7(this.$thrownJsError)}},
bj:{"^":"E;",
k:function(a){return"Throw of null."}},
a9:{"^":"E;a,b,c,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bU(this.b)
return w+v+": "+H.b(u)},
n:{
bK:function(a){return new P.a9(!1,null,null,a)},
fq:function(a,b,c){return new P.a9(!0,a,b,c)}}},
ds:{"^":"a9;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
n:{
bk:function(a,b,c){return new P.ds(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.ds(b,c,!0,a,d,"Invalid value")},
hC:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.ag(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.ag(b,a,c,"end",f))
return b}}},
h1:{"^":"a9;e,j:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){if(J.b2(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
n:{
w:function(a,b,c,d,e){var z=e!=null?e:J.a0(b)
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
i5:{"^":"E;a",
k:function(a){return"Unsupported operation: "+this.a},
n:{
r:function(a){return new P.i5(a)}}},
i3:{"^":"E;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
n:{
cc:function(a){return new P.i3(a)}}},
bo:{"^":"E;a",
k:function(a){return"Bad state: "+this.a},
n:{
aW:function(a){return new P.bo(a)}}},
fA:{"^":"E;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bU(z))+"."},
n:{
aa:function(a){return new P.fA(a)}}},
dv:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga1:function(){return},
$isE:1},
fD:{"^":"E;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
l_:{"^":"c;"},
iv:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
K:{"^":"aL;"},
"+int":0,
be:{"^":"c;$ti",
aJ:["cj",function(a,b){return new H.dP(this,b,[H.bz(this,"be",0)])}],
gj:function(a){var z,y
z=this.gK(this)
for(y=0;z.t();)++y
return y},
gX:function(a){var z,y
z=this.gK(this)
if(!z.t())throw H.a(H.dc())
y=z.gu(z)
if(z.t())throw H.a(H.h5())
return y},
q:function(a,b){var z,y,x
if(b<0)H.N(P.ag(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.t();){x=z.gu(z)
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
k:function(a){return P.h3(this,"(",")")}},
h6:{"^":"c;$ti"},
f:{"^":"c;$ti"},
"+List":0,
C:{"^":"c;$ti"},
aS:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aL:{"^":"c;"},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gv:function(a){return H.aE(this)},
k:function(a){return"Instance of '"+H.aF(this)+"'"},
toString:function(){return this.k(this)}},
bn:{"^":"c;"},
k:{"^":"c;"},
"+String":0,
ca:{"^":"c;Y:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
dw:function(a,b,c){var z=J.aO(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gu(z))
while(z.t())}else{a+=H.b(z.gu(z))
for(;z.t();)a=a+c+H.b(z.gu(z))}return a}}}}],["","",,W,{"^":"",
k2:function(){return document},
fO:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).P(z,a,b,c)
y.toString
z=new H.dP(new W.S(y),new W.fP(),[W.q])
return z.gX(z)},
aw:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f3(a)
if(typeof y==="string")z=a.tagName}catch(x){H.L(x)}return z},
iq:function(a,b){return document.createElement(a)},
ad:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ee:function(a){var z=$.p
if(z===C.c)return a
return z.dh(a)},
u:{"^":"av;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kt:{"^":"c8;l:x=,m:y=,H:z=","%":"Accelerometer|LinearAccelerationSensor"},
ku:{"^":"e;j:length=","%":"AccessibleNodeList"},
kv:{"^":"u;ai:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kw:{"^":"u;ai:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kA:{"^":"u;ai:href}","%":"HTMLBaseElement"},
bL:{"^":"e;",$isbL:1,"%":";Blob"},
bM:{"^":"u;",$isbM:1,"%":"HTMLBodyElement"},
kB:{"^":"u;D:name=","%":"HTMLButtonElement"},
bP:{"^":"u;w:height},A:width}",
c4:function(a,b,c){var z=a.getContext(b,P.k0(c,null))
return z},
$isbP:1,
"%":"HTMLCanvasElement"},
kC:{"^":"e;",
am:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kD:{"^":"q;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kF:{"^":"W;T:style=","%":"CSSFontFaceRule"},
kG:{"^":"W;T:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kH:{"^":"W;T:style=","%":"CSSPageRule"},
kI:{"^":"b8;j:length=","%":"CSSPerspective"},
kJ:{"^":"bQ;l:x=,m:y=","%":"CSSPositionValue"},
kK:{"^":"b8;l:x=,m:y=,H:z=","%":"CSSRotation"},
W:{"^":"e;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kL:{"^":"b8;l:x=,m:y=,H:z=","%":"CSSScale"},
fB:{"^":"ii;j:length=",
b4:function(a,b){var z,y
z=$.$get$cZ()
y=z[b]
if(typeof y==="string")return y
y=this.d6(a,b)
z[b]=y
return y},
d6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fG()+b
if(z in a)return z
return b},
d3:function(a,b,c,d){a.setProperty(b,c,d)},
sw:function(a,b){a.height=b},
sA:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fC:{"^":"c;",
sdB:function(a,b){this.d3(a,this.b4(a,"float"),b,"")}},
kM:{"^":"W;T:style=","%":"CSSStyleRule"},
bQ:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b8:{"^":"e;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kN:{"^":"bQ;j:length=","%":"CSSTransformValue"},
kO:{"^":"b8;l:x=,m:y=,H:z=","%":"CSSTranslation"},
kP:{"^":"bQ;j:length=","%":"CSSUnparsedValue"},
kQ:{"^":"W;T:style=","%":"CSSViewportRule"},
kR:{"^":"e;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kS:{"^":"e;l:x=,m:y=,H:z=","%":"DeviceAcceleration"},
fH:{"^":"u;","%":"HTMLDivElement"},
kT:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
kU:{"^":"fI;",
gc2:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gH:function(a){return a.z},
"%":"DOMPoint"},
fI:{"^":"e;",
gc2:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gH:function(a){return a.z},
"%":";DOMPointReadOnly"},
kV:{"^":"ik;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a3]},
$isn:1,
$asn:function(){return[P.a3]},
$asj:function(){return[P.a3]},
$isf:1,
$asf:function(){return[P.a3]},
$asl:function(){return[P.a3]},
"%":"ClientRectList|DOMRectList"},
fJ:{"^":"e;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gA(a))+" x "+H.b(this.gw(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa3)return!1
return a.left===b.left&&a.top===b.top&&this.gA(a)===z.gA(b)&&this.gw(a)===z.gw(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gA(a)
w=this.gw(a)
return W.dX(W.ad(W.ad(W.ad(W.ad(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gw:function(a){return a.height},
gA:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa3:1,
$asa3:I.al,
"%":";DOMRectReadOnly"},
kW:{"^":"im;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.k]},
$isn:1,
$asn:function(){return[P.k]},
$asj:function(){return[P.k]},
$isf:1,
$asf:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"DOMStringList"},
kX:{"^":"e;j:length=","%":"DOMTokenList"},
av:{"^":"q;T:style=,bc:namespaceURI=,dT:tagName=",
gde:function(a){return new W.io(a)},
k:function(a){return a.localName},
dJ:function(a,b,c,d,e){var z,y
z=this.P(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(z,a)
break
case"afterbegin":y=a.childNodes
a.insertBefore(z,y.length>0?y[0]:null)
break
case"beforeend":a.appendChild(z)
break
case"afterend":a.parentNode.insertBefore(z,a.nextSibling)
break
default:H.N(P.bK("Invalid position "+b))}},
P:["aq",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d6
if(z==null){z=H.y([],[W.dn])
y=new W.dp(z)
z.push(W.dV(null))
z.push(W.e6())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e9(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.a1==null){z=document
y=z.implementation.createHTMLDocument("")
$.a1=y
$.bT=y.createRange()
y=$.a1
y.toString
x=y.createElement("base")
J.fe(x,z.baseURI)
$.a1.head.appendChild(x)}z=$.a1
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a1
if(!!this.$isbM)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a1.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.O,a.tagName)){$.bT.selectNodeContents(w)
v=$.bT.createContextualFragment(b)}else{w.innerHTML=b
v=$.a1.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a1.body
if(w==null?z!=null:w!==z)J.cD(w)
c.aQ(v)
document.adoptNode(v)
return v},function(a,b,c){return this.P(a,b,c,null)},"ds",null,null,"ge7",5,5,null],
c9:function(a,b,c,d){a.textContent=null
a.appendChild(this.P(a,b,c,d))},
c8:function(a,b){return this.c9(a,b,null,null)},
$isav:1,
"%":";Element"},
fP:{"^":"i:0;",
$1:function(a){return!!J.o(a).$isav}},
kY:{"^":"u;w:height},D:name=,A:width}","%":"HTMLEmbedElement"},
kZ:{"^":"ba;N:error=","%":"ErrorEvent"},
ba:{"^":"e;","%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CompositionEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|DragEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FocusEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|KeyboardEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MouseEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PointerEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TextEvent|TouchEvent|TrackEvent|TransitionEvent|UIEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent|WheelEvent;Event|InputEvent"},
F:{"^":"e;",
bk:["cg",function(a,b,c,d){if(c!=null)this.cP(a,b,c,!1)}],
cP:function(a,b,c,d){return a.addEventListener(b,H.a5(c,1),!1)},
cZ:function(a,b,c,d){return a.removeEventListener(b,H.a5(c,1),!1)},
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e3|e4|e7|e8"},
li:{"^":"u;D:name=","%":"HTMLFieldSetElement"},
af:{"^":"bL;",$isaf:1,"%":"File"},
d8:{"^":"ix;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$asj:function(){return[W.af]},
$isf:1,
$asf:function(){return[W.af]},
$isd8:1,
$asl:function(){return[W.af]},
"%":"FileList"},
lj:{"^":"F;N:error=","%":"FileReader"},
lk:{"^":"F;N:error=,j:length=","%":"FileWriter"},
lm:{"^":"e;T:style=","%":"FontFace"},
lo:{"^":"u;j:length=,D:name=","%":"HTMLFormElement"},
lq:{"^":"c8;l:x=,m:y=,H:z=","%":"Gyroscope"},
lr:{"^":"e;j:length=","%":"History"},
ls:{"^":"iO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$isf:1,
$asf:function(){return[W.q]},
$asl:function(){return[W.q]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lt:{"^":"u;w:height},D:name=,A:width}","%":"HTMLIFrameElement"},
bW:{"^":"e;",$isbW:1,"%":"ImageBitmap"},
bd:{"^":"e;",$isbd:1,"%":"ImageData"},
bX:{"^":"u;w:height},A:width}",$isbX:1,"%":"HTMLImageElement"},
lv:{"^":"u;w:height},D:name=,A:width}","%":"HTMLInputElement"},
lA:{"^":"u;ai:href}","%":"HTMLLinkElement"},
lC:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
lD:{"^":"c8;l:x=,m:y=,H:z=","%":"Magnetometer"},
lE:{"^":"u;D:name=","%":"HTMLMapElement"},
hh:{"^":"u;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lH:{"^":"e;j:length=","%":"MediaList"},
bh:{"^":"F;",$isbh:1,"%":"MediaStream"},
lI:{"^":"F;",
bk:function(a,b,c,d){if(b==="message")a.start()
this.cg(a,b,c,!1)},
"%":"MessagePort"},
lJ:{"^":"u;D:name=","%":"HTMLMetaElement"},
lK:{"^":"iT;",
h:function(a,b){return P.R(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.y([],[P.k])
this.C(a,new W.hj(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"MIDIInputMap"},
hj:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lL:{"^":"iU;",
h:function(a,b){return P.R(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.y([],[P.k])
this.C(a,new W.hk(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
hk:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lM:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$isf:1,
$asf:function(){return[W.bi]},
$asl:function(){return[W.bi]},
"%":"MimeTypeArray"},
hm:{"^":"hn;",
c6:function(a,b,c){var z,y,x,w
z=W.bh
y=new P.H(0,$.p,null,[z])
x=new P.dR(y,[z])
w=P.c1(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.cW(a,new P.jk([],[]).aI(w),new W.ho(x),new W.hp(x))
return y},
c5:function(a,b){return this.c6(a,!1,b)},
cW:function(a,b,c,d){return a.getUserMedia(b,H.a5(c,1),H.a5(d,1))},
"%":"Navigator"},
ho:{"^":"i:0;a",
$1:function(a){this.a.a6(0,a)}},
hp:{"^":"i:0;a",
$1:function(a){this.a.dm(a)}},
hn:{"^":"e;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
S:{"^":"di;a",
gX:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.aW("No elements"))
if(y>1)throw H.a(P.aW("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gK:function(a){var z=this.a.childNodes
return new W.d9(z,z.length,-1,null,[H.b0(C.R,z,"l",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdi:function(){return[W.q]},
$asj:function(){return[W.q]},
$asf:function(){return[W.q]},
$asdZ:function(){return[W.q]}},
q:{"^":"F;ak:parentNode=,aE:previousSibling=",
gdN:function(a){return new W.S(a)},
dP:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.ci(a):z},
$isq:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lU:{"^":"e;",
dO:[function(a){return a.previousNode()},"$0","gaE",1,0,4],
"%":"NodeIterator"},
hq:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$isf:1,
$asf:function(){return[W.q]},
$asl:function(){return[W.q]},
"%":"NodeList|RadioNodeList"},
lX:{"^":"u;w:height},D:name=,A:width}","%":"HTMLObjectElement"},
lZ:{"^":"u;D:name=","%":"HTMLOutputElement"},
m_:{"^":"u;D:name=","%":"HTMLParamElement"},
aT:{"^":"e;j:length=","%":"Plugin"},
m1:{"^":"j1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aT]},
$isn:1,
$asn:function(){return[W.aT]},
$asj:function(){return[W.aT]},
$isf:1,
$asf:function(){return[W.aT]},
$asl:function(){return[W.aT]},
"%":"PluginArray"},
m9:{"^":"j7;",
h:function(a,b){return P.R(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.y([],[P.k])
this.C(a,new W.hI(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"RTCStatsReport"},
hI:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
c7:{"^":"u;j:length=,D:name=",$isc7:1,"%":"HTMLSelectElement"},
c8:{"^":"F;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ma:{"^":"ba;N:error=","%":"SensorErrorEvent"},
mb:{"^":"u;D:name=","%":"HTMLSlotElement"},
mc:{"^":"e4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bl]},
$isn:1,
$asn:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$asl:function(){return[W.bl]},
"%":"SourceBufferList"},
md:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$asl:function(){return[W.bm]},
"%":"SpeechGrammarList"},
me:{"^":"ba;N:error=","%":"SpeechRecognitionError"},
aV:{"^":"e;j:length=","%":"SpeechRecognitionResult"},
mg:{"^":"jg;",
h:function(a,b){return a.getItem(b)},
C:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gL:function(a){var z=H.y([],[P.k])
this.C(a,new W.hT(z))
return z},
gj:function(a){return a.length},
$asQ:function(){return[P.k,P.k]},
$isC:1,
$asC:function(){return[P.k,P.k]},
"%":"Storage"},
hT:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
i_:{"^":"u;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=W.fO("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.S(y).O(0,J.f1(z))
return y},
"%":"HTMLTableElement"},
mj:{"^":"u;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.P(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gX(z)
x.toString
z=new W.S(x)
w=z.gX(z)
y.toString
w.toString
new W.S(y).O(0,new W.S(w))
return y},
"%":"HTMLTableRowElement"},
mk:{"^":"u;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.P(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gX(z)
y.toString
x.toString
new W.S(y).O(0,new W.S(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"u;",$isdz:1,"%":"HTMLTemplateElement"},
ml:{"^":"u;D:name=","%":"HTMLTextAreaElement"},
mn:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.br]},
$isn:1,
$asn:function(){return[W.br]},
$asj:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asl:function(){return[W.br]},
"%":"TextTrackCueList"},
mo:{"^":"e8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bq]},
$isn:1,
$asn:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$asl:function(){return[W.bq]},
"%":"TextTrackList"},
mr:{"^":"e;j:length=","%":"TimeRanges"},
ms:{"^":"jw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bs]},
$isn:1,
$asn:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$asl:function(){return[W.bs]},
"%":"TouchList"},
mt:{"^":"e;j:length=","%":"TrackDefaultList"},
mw:{"^":"e;",
ea:[function(a){return a.parentNode()},"$0","gak",1,0,4],
dO:[function(a){return a.previousNode()},"$0","gaE",1,0,4],
"%":"TreeWalker"},
my:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
mA:{"^":"e;l:x=,H:z=","%":"VRStageBoundsPoint"},
ce:{"^":"hh;w:height},dZ:videoHeight=,e_:videoWidth=,A:width}",$isce:1,"%":"HTMLVideoElement"},
mB:{"^":"F;j:length=","%":"VideoTrackList"},
i7:{"^":"F;",
gdd:function(a){var z,y
z=P.aL
y=new P.H(0,$.p,null,[z])
this.cV(a)
this.d_(a,W.ee(new W.i8(new P.jn(y,[z]))))
return y},
d_:function(a,b){return a.requestAnimationFrame(H.a5(b,1))},
cV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
i8:{"^":"i:0;a",
$1:function(a){this.a.a6(0,a)}},
mC:{"^":"F;"},
mG:{"^":"q;D:name=,bc:namespaceURI=","%":"Attr"},
mH:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.W]},
$isn:1,
$asn:function(){return[W.W]},
$asj:function(){return[W.W]},
$isf:1,
$asf:function(){return[W.W]},
$asl:function(){return[W.W]},
"%":"CSSRuleList"},
mI:{"^":"fJ;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa3)return!1
return a.left===b.left&&a.top===b.top&&a.width===z.gA(b)&&a.height===z.gw(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dX(W.ad(W.ad(W.ad(W.ad(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gw:function(a){return a.height},
gA:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mJ:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$isn:1,
$asn:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$asl:function(){return[W.bc]},
"%":"GamepadList"},
mM:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$isf:1,
$asf:function(){return[W.q]},
$asl:function(){return[W.q]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mN:{"^":"jI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aV]},
$isn:1,
$asn:function(){return[W.aV]},
$asj:function(){return[W.aV]},
$isf:1,
$asf:function(){return[W.aV]},
$asl:function(){return[W.aV]},
"%":"SpeechRecognitionResultList"},
mO:{"^":"jK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bp]},
$isn:1,
$asn:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$asl:function(){return[W.bp]},
"%":"StyleSheetList"},
ig:{"^":"c3;cX:a<",
C:function(a,b){var z,y,x,w,v
for(z=this.gL(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.U)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gL:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.k])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.h(v)
if(u.gbc(v)==null)y.push(u.gD(v))}return y},
$asc3:function(){return[P.k,P.k]},
$asQ:function(){return[P.k,P.k]},
$asC:function(){return[P.k,P.k]}},
io:{"^":"ig;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gL(this).length}},
ir:{"^":"c9;$ti",
bK:function(a,b,c,d){return W.it(this.a,this.b,a,!1,H.B(this,0))}},
ip:{"^":"ir;a,b,c,$ti"},
is:{"^":"hU;a,b,c,d,e,$ti",
cJ:function(a,b,c,d,e){this.d7()},
dj:function(a){if(this.b==null)return
this.d8()
this.b=null
this.d=null
return},
d7:function(){var z=this.d
if(z!=null&&this.a<=0)J.eK(this.b,this.c,z,!1)},
d8:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eJ(x,this.c,z,!1)}},
n:{
it:function(a,b,c,d,e){var z=W.ee(new W.iu(c))
z=new W.is(0,a,b,z,!1,[e])
z.cJ(a,b,c,!1,e)
return z}}},
iu:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
ch:{"^":"c;bZ:a<",
cK:function(a){var z,y
z=$.$get$ci()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.N[y],W.ka())
for(y=0;y<12;++y)z.i(0,C.p[y],W.kb())}},
a_:function(a){return $.$get$dW().F(0,W.aw(a))},
U:function(a,b,c){var z,y,x
z=W.aw(a)
y=$.$get$ci()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
n:{
dV:function(a){var z,y
z=document.createElement("a")
y=new W.j8(z,window.location)
y=new W.ch(y)
y.cK(a)
return y},
mK:[function(a,b,c,d){return!0},"$4","ka",16,0,7],
mL:[function(a,b,c,d){var z,y,x,w,v
z=d.gbZ()
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
return z},"$4","kb",16,0,7]}},
l:{"^":"c;$ti",
gK:function(a){return new W.d9(a,this.gj(a),-1,null,[H.b0(this,a,"l",0)])}},
dp:{"^":"c;a",
a_:function(a){return C.b.bl(this.a,new W.hs(a))},
U:function(a,b,c){return C.b.bl(this.a,new W.hr(a,b,c))}},
hs:{"^":"i:0;a",
$1:function(a){return a.a_(this.a)}},
hr:{"^":"i:0;a,b,c",
$1:function(a){return a.U(this.a,this.b,this.c)}},
j9:{"^":"c;bZ:d<",
cM:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.aJ(0,new W.ja())
y=b.aJ(0,new W.jb())
this.b.O(0,z)
x=this.c
x.O(0,C.x)
x.O(0,y)},
a_:function(a){return this.a.F(0,W.aw(a))},
U:["cl",function(a,b,c){var z,y
z=W.aw(a)
y=this.c
if(y.F(0,H.b(z)+"::"+b))return this.d.dc(c)
else if(y.F(0,"*::"+b))return this.d.dc(c)
else{y=this.b
if(y.F(0,H.b(z)+"::"+b))return!0
else if(y.F(0,"*::"+b))return!0
else if(y.F(0,H.b(z)+"::*"))return!0
else if(y.F(0,"*::*"))return!0}return!1}]},
ja:{"^":"i:0;",
$1:function(a){return!C.b.F(C.p,a)}},
jb:{"^":"i:0;",
$1:function(a){return C.b.F(C.p,a)}},
jo:{"^":"j9;e,a,b,c,d",
U:function(a,b,c){if(this.cl(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cz(a).a.getAttribute("template")==="")return this.e.F(0,b)
return!1},
n:{
e6:function(){var z=P.k
z=new W.jo(P.c2(C.o,z),P.aR(null,null,null,z),P.aR(null,null,null,z),P.aR(null,null,null,z),null)
z.cM(null,new H.hg(C.o,new W.jp(),[H.B(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jp:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jm:{"^":"c;",
a_:function(a){var z=J.o(a)
if(!!z.$isdt)return!1
z=!!z.$isx
if(z&&W.aw(a)==="foreignObject")return!1
if(z)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.cc(b,"on"))return!1
return this.a_(a)}},
d9:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ar(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gu:function(a){return this.d}},
dn:{"^":"c;"},
lV:{"^":"c;"},
mx:{"^":"c;"},
j8:{"^":"c;a,b"},
e9:{"^":"c;a",
aQ:function(a){new W.jz(this).$2(a,null)},
a5:function(a,b){if(b==null)J.cD(a)
else b.removeChild(a)},
d2:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cz(a)
x=y.gcX().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.L(t)}v="element unprintable"
try{v=J.at(a)}catch(t){H.L(t)}try{u=W.aw(a)
this.d1(a,b,z,v,u,y,x)}catch(t){if(H.L(t) instanceof P.a9)throw t
else{this.a5(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d1:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a_(a)){this.a5(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.a5(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gL(f)
y=H.y(z.slice(0),[H.B(z,0)])
for(x=f.gL(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.U(a,J.fi(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdz)this.aQ(a.content)}},
jz:{"^":"i:13;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d2(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f2(z)}catch(w){H.L(w)
v=z
if(x){u=J.h(v)
if(u.gak(v)!=null){u.gak(v)
u.gak(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ii:{"^":"e+fC;"},
ij:{"^":"e+j;"},
ik:{"^":"ij+l;"},
il:{"^":"e+j;"},
im:{"^":"il+l;"},
iw:{"^":"e+j;"},
ix:{"^":"iw+l;"},
iN:{"^":"e+j;"},
iO:{"^":"iN+l;"},
iT:{"^":"e+Q;"},
iU:{"^":"e+Q;"},
iV:{"^":"e+j;"},
iW:{"^":"iV+l;"},
iX:{"^":"e+j;"},
iY:{"^":"iX+l;"},
j0:{"^":"e+j;"},
j1:{"^":"j0+l;"},
j7:{"^":"e+Q;"},
e3:{"^":"F+j;"},
e4:{"^":"e3+l;"},
jc:{"^":"e+j;"},
jd:{"^":"jc+l;"},
jg:{"^":"e+Q;"},
jq:{"^":"e+j;"},
jr:{"^":"jq+l;"},
e7:{"^":"F+j;"},
e8:{"^":"e7+l;"},
jv:{"^":"e+j;"},
jw:{"^":"jv+l;"},
jB:{"^":"e+j;"},
jC:{"^":"jB+l;"},
jD:{"^":"e+j;"},
jE:{"^":"jD+l;"},
jF:{"^":"e+j;"},
jG:{"^":"jF+l;"},
jH:{"^":"e+j;"},
jI:{"^":"jH+l;"},
jJ:{"^":"e+j;"},
jK:{"^":"jJ+l;"}}],["","",,P,{"^":"",
ej:function(a){return a},
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.t()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.U)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
k0:function(a,b){var z={}
a.C(0,new P.k1(z))
return z},
d4:function(){var z=$.d3
if(z==null){z=J.bF(window.navigator.userAgent,"Opera",0)
$.d3=z}return z},
fG:function(){var z,y
z=$.d0
if(z!=null)return z
y=$.d1
if(y==null){y=J.bF(window.navigator.userAgent,"Firefox",0)
$.d1=y}if(y)z="-moz-"
else{y=$.d2
if(y==null){y=P.d4()!==!0&&J.bF(window.navigator.userAgent,"Trident/",0)
$.d2=y}if(y)z="-ms-"
else z=P.d4()===!0?"-o-":"-webkit-"}$.d0=z
return z},
jj:{"^":"c;",
bG:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
aI:function(a){var z,y,x,w,v,u
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.o(a)
if(!!y.$isbR)return new Date(a.a)
if(!!y.$isaf)return a
if(!!y.$isbL)return a
if(!!y.$isd8)return a
if(!!y.$isbd)return a
if(!!y.$isdl||!!y.$isc6)return a
if(!!y.$isC){x=this.bG(a)
w=this.b
v=w.length
if(x>=v)return H.d(w,x)
u=w[x]
z.a=u
if(u!=null)return u
u={}
z.a=u
if(x>=v)return H.d(w,x)
w[x]=u
y.C(a,new P.jl(z,this))
return z.a}if(!!y.$isf){x=this.bG(a)
z=this.b
if(x>=z.length)return H.d(z,x)
u=z[x]
if(u!=null)return u
return this.dr(a,x)}throw H.a(P.cc("structured clone of other type"))},
dr:function(a,b){var z,y,x,w,v
z=J.Z(a)
y=z.gj(a)
x=new Array(y)
w=this.b
if(b>=w.length)return H.d(w,b)
w[b]=x
for(v=0;v<y;++v){w=this.aI(z.h(a,v))
if(v>=x.length)return H.d(x,v)
x[v]=w}return x}},
jl:{"^":"i:2;a,b",
$2:function(a,b){this.a.a[a]=this.b.aI(b)}},
k1:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}},
jk:{"^":"jj;a,b"}}],["","",,P,{"^":"",m8:{"^":"F;N:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mu:{"^":"F;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",j2:{"^":"c;$ti"},a3:{"^":"j2;$ti"}}],["","",,P,{"^":"",l0:{"^":"x;l:x=,m:y=","%":"SVGFEBlendElement"},l1:{"^":"x;l:x=,m:y=","%":"SVGFEColorMatrixElement"},l2:{"^":"x;l:x=,m:y=","%":"SVGFEComponentTransferElement"},l3:{"^":"x;l:x=,m:y=","%":"SVGFECompositeElement"},l4:{"^":"x;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},l5:{"^":"x;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},l6:{"^":"x;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},l7:{"^":"x;l:x=,m:y=","%":"SVGFEFloodElement"},l8:{"^":"x;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},l9:{"^":"x;l:x=,m:y=","%":"SVGFEImageElement"},la:{"^":"x;l:x=,m:y=","%":"SVGFEMergeElement"},lb:{"^":"x;l:x=,m:y=","%":"SVGFEMorphologyElement"},lc:{"^":"x;l:x=,m:y=","%":"SVGFEOffsetElement"},ld:{"^":"x;l:x=,m:y=,H:z=","%":"SVGFEPointLightElement"},le:{"^":"x;l:x=,m:y=","%":"SVGFESpecularLightingElement"},lf:{"^":"x;l:x=,m:y=,H:z=","%":"SVGFESpotLightElement"},lg:{"^":"x;l:x=,m:y=","%":"SVGFETileElement"},lh:{"^":"x;l:x=,m:y=","%":"SVGFETurbulenceElement"},ll:{"^":"x;l:x=,m:y=","%":"SVGFilterElement"},ln:{"^":"ax;l:x=,m:y=","%":"SVGForeignObjectElement"},h_:{"^":"ax;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ax:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lu:{"^":"ax;l:x=,m:y=","%":"SVGImageElement"},lz:{"^":"iQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dh]},
$isf:1,
$asf:function(){return[P.dh]},
$asl:function(){return[P.dh]},
"%":"SVGLengthList"},lF:{"^":"x;l:x=,m:y=","%":"SVGMaskElement"},lW:{"^":"j_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dr]},
$isf:1,
$asf:function(){return[P.dr]},
$asl:function(){return[P.dr]},
"%":"SVGNumberList"},m0:{"^":"x;l:x=,m:y=","%":"SVGPatternElement"},m2:{"^":"e;l:x=,m:y=","%":"SVGPoint"},m3:{"^":"e;j:length=","%":"SVGPointList"},m4:{"^":"e;l:x=,m:y=","%":"SVGRect"},m5:{"^":"h_;l:x=,m:y=","%":"SVGRectElement"},dt:{"^":"x;",$isdt:1,"%":"SVGScriptElement"},mh:{"^":"ji;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.k]},
$isf:1,
$asf:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"SVGStringList"},x:{"^":"av;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.dn])
z.push(W.dV(null))
z.push(W.e6())
z.push(new W.jm())
c=new W.e9(new W.dp(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).ds(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.S(w)
u=z.gX(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mi:{"^":"ax;l:x=,m:y=","%":"SVGSVGElement"},i0:{"^":"ax;","%":"SVGTextPathElement;SVGTextContentElement"},mm:{"^":"i0;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mv:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dC]},
$isf:1,
$asf:function(){return[P.dC]},
$asl:function(){return[P.dC]},
"%":"SVGTransformList"},mz:{"^":"ax;l:x=,m:y=","%":"SVGUseElement"},iP:{"^":"e+j;"},iQ:{"^":"iP+l;"},iZ:{"^":"e+j;"},j_:{"^":"iZ+l;"},jh:{"^":"e+j;"},ji:{"^":"jh+l;"},jx:{"^":"e+j;"},jy:{"^":"jx+l;"}}],["","",,P,{"^":"",kx:{"^":"e;j:length=","%":"AudioBuffer"},ky:{"^":"ih;",
h:function(a,b){return P.R(a.get(b))},
C:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gL:function(a){var z=H.y([],[P.k])
this.C(a,new P.fs(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"AudioParamMap"},fs:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},kz:{"^":"F;j:length=","%":"AudioTrackList"},ft:{"^":"F;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lY:{"^":"ft;j:length=","%":"OfflineAudioContext"},ih:{"^":"e+Q;"}}],["","",,P,{"^":"",m6:{"^":"e;",
bj:function(a,b){return a.activeTexture(b)},
bm:function(a,b,c){return a.attachShader(b,c)},
bn:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindTexture(b,c)},
bq:function(a,b){return a.blendEquation(b)},
br:function(a,b,c){return a.blendFunc(b,c)},
bs:function(a,b,c,d){return a.bufferData(b,c,d)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createProgram()},
bx:function(a,b){return a.createShader(b)},
by:function(a){return a.createTexture()},
bz:function(a,b){return a.depthMask(b)},
bA:function(a,b){return a.disable(b)},
bB:function(a,b,c,d){return a.drawArrays(b,c,d)},
bC:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bD:function(a,b){return a.enable(b)},
bE:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.R(a.getContextAttributes())},
aK:function(a){return a.getError()},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bJ:function(a,b){return a.linkProgram(b)},
bL:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aT:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isbd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ej(g))
return}if(!!z.$isbX)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbP)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isce)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbW)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bK("Incorrect number or type of arguments"))},
bN:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
bO:function(a,b,c,d){return a.texParameterf(b,c,d)},
bP:function(a,b,c,d){return a.texParameteri(b,c,d)},
bQ:function(a,b,c){return a.uniform1f(b,c)},
bR:function(a,b,c){return a.uniform1fv(b,c)},
bS:function(a,b,c){return a.uniform1i(b,c)},
bT:function(a,b,c){return a.uniform1iv(b,c)},
bU:function(a,b,c){return a.uniform2fv(b,c)},
bV:function(a,b,c){return a.uniform3fv(b,c)},
bW:function(a,b,c){return a.uniform4fv(b,c)},
bX:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bY:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c_:function(a,b){return a.useProgram(b)},
c0:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},m7:{"^":"e;",
df:function(a,b){return a.beginTransformFeedback(b)},
di:function(a,b){return a.bindVertexArray(b)},
dt:function(a){return a.createVertexArray()},
du:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dv:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dw:function(a){return a.endTransformFeedback()},
dX:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dY:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bj:function(a,b){return a.activeTexture(b)},
bm:function(a,b,c){return a.attachShader(b,c)},
bn:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindTexture(b,c)},
bq:function(a,b){return a.blendEquation(b)},
br:function(a,b,c){return a.blendFunc(b,c)},
bs:function(a,b,c,d){return a.bufferData(b,c,d)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createProgram()},
bx:function(a,b){return a.createShader(b)},
by:function(a){return a.createTexture()},
bz:function(a,b){return a.depthMask(b)},
bA:function(a,b){return a.disable(b)},
bB:function(a,b,c,d){return a.drawArrays(b,c,d)},
bC:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bD:function(a,b){return a.enable(b)},
bE:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.R(a.getContextAttributes())},
aK:function(a){return a.getError()},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bJ:function(a,b){return a.linkProgram(b)},
bL:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aT:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isbd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ej(g))
return}if(!!z.$isbX)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbP)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isce)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbW)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bK("Incorrect number or type of arguments"))},
bN:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
bO:function(a,b,c,d){return a.texParameterf(b,c,d)},
bP:function(a,b,c,d){return a.texParameteri(b,c,d)},
bQ:function(a,b,c){return a.uniform1f(b,c)},
bR:function(a,b,c){return a.uniform1fv(b,c)},
bS:function(a,b,c){return a.uniform1i(b,c)},
bT:function(a,b,c){return a.uniform1iv(b,c)},
bU:function(a,b,c){return a.uniform2fv(b,c)},
bV:function(a,b,c){return a.uniform3fv(b,c)},
bW:function(a,b,c){return a.uniform4fv(b,c)},
bX:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bY:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c_:function(a,b){return a.useProgram(b)},
c0:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mf:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.R(a.item(b))},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]},
$asl:function(){return[P.C]},
"%":"SQLResultSetRowList"},je:{"^":"e+j;"},jf:{"^":"je+l;"}}],["","",,G,{"^":"",
i9:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.k])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.b.a8(z,"\n")},
dS:function(a,b,c){var z,y,x,w
z=J.h(a)
y=z.bx(a,b)
z.aR(a,y,c)
z.bu(a,y)
x=z.aO(a,y,35713)
if(x!=null&&J.O(x,!1)){w=z.aN(a,y)
P.a8("E:Compilation failed:")
P.a8("E:"+G.i9(c))
P.a8("E:Failure:")
P.a8(C.i.p("E:",w))
throw H.a(w)}return y},
da:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bH(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bI(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cB(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fT:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bH(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bI(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fU:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bH(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bI(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cB(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.f6(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fS:function(a,b){var z,y,x,w,v
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
iL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a2(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.f,P.K]],v=[P.aK],u=[T.cd],t=[T.G],s=[T.D];y.t();){r=y.d
if(!x.ah(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.ep>0)H.bD("I: "+q)
continue}p=z.h(0,r)
switch($.$get$T().h(0,r).a){case"vec2":b.a2(r,G.fT(H.b1(p,"$isf",s,"$asf"),null),2)
break
case"vec3":b.a2(r,G.da(H.b1(p,"$isf",t,"$asf"),null),3)
break
case"vec4":b.a2(r,G.fU(H.b1(p,"$isf",u,"$asf"),null),4)
break
case"float":b.a2(r,new Float32Array(H.bv(H.b1(p,"$isf",v,"$asf"))),1)
break
case"uvec4":b.a2(r,G.fS(H.b1(p,"$isf",w,"$asf"),null),4)
break}}},
c4:{"^":"c;"},
A:{"^":"c4;d,a,b,c",
cw:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.b(new H.dO(H.k7(this),null))+"}["+this.a+"]"],[P.k])
for(y=this.d,x=new H.a2(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.b.a8(z,"\n")}},
fv:{"^":"c;a,b",
bF:function(a,b,c){J.eZ(this.a,b)
if(c>0)J.fo(this.a,b,c)},
c1:function(a,b,c,d,e,f,g,h){J.bE(this.a,34962,b)
J.fp(this.a,c,d,e,!1,g,h)}},
fR:{"^":"c;a,b,c,d"},
fZ:{"^":"c;a,b,c,d,e",
aW:function(a){switch($.$get$T().h(0,a).a){case"vec2":this.e.i(0,a,H.y([],[T.D]))
break
case"vec3":this.e.i(0,a,H.y([],[T.G]))
break
case"vec4":this.e.i(0,a,H.y([],[T.cd]))
break
case"float":this.e.i(0,a,H.y([],[P.aK]))
break
case"uvec4":this.e.i(0,a,H.y([],[[P.f,P.K]]))
break}},
co:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ag(0))},
cp:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ag(0))},
cq:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.fR(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].ag(0))},
cu:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.y(y,[P.K])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.ge4(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.ge5(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.ge6(t)
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
for(y=this.e,x=new H.a2(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$T().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.a8(z," ")}},
hi:{"^":"c4;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aV:function(a,b,c){var z,y
C.i.b5(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bE(z.a,34962,y)
J.cw(z.a,34962,b,35048)},
cv:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a2:function(a,b,c){var z,y,x,w,v
z=J.cx(a,0)===105
if(z&&this.z===0)this.z=C.a.cm(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bG(x.a))
this.aV(a,b,c)
w=$.$get$T().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b3(x.a,this.e)
x.bF(0,v,z?1:0)
x.c1(0,y.h(0,a),v,w.aX(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a2(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.a8(y,"  ")}},
hG:{"^":"c4;d,e,f,r,x,y,z,Q,ch,a,b,c",
cA:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.U)(z),++u){t=z[u]
x.i(0,t,J.cC(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.U)(z),++u){t=z[u]
x.i(0,t,J.cC(w.a,v,t))}},
cF:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a2(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ah(0,v))x.push(v)}for(z=this.x,y=new P.dY(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.F(0,v))x.push(v)}return x},
cI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a2(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cx(t,0)){case 117:if(w.ah(0,t)){s=b.h(0,t)
if(v.ah(0,t))H.bD("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$T().h(0,t)
if(r==null)H.N("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bJ(x.a,q,s)
else if(!!J.o(s).$ish2)J.fm(x.a,q,s)
break
case"float":if(r.c===0)J.fk(x.a,q,s)
else if(!!J.o(s).$isbV)J.fl(x.a,q,s)
break
case"mat4":if(r.c===0){p=C.u.gce(H.a_(s,"$islG"))
J.cI(x.a,q,!1,p)}else if(!!J.o(s).$isbV)J.cI(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a_(s,"$isbg").a
J.cH(x.a,q,!1,p)}else if(!!J.o(s).$isbV)J.cH(x.a,q,!1,s)
break
case"vec4":if(r.c===0){p=C.u.gce(H.a_(s,"$iscd"))
J.cG(x.a,q,p)}else J.cG(x.a,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cF(o,q,H.a_(s,"$isG").a)
else J.cF(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cE(o,q,H.a_(s,"$isD").a)
else J.cE(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.an(p)
J.cu(x.a,33984+p)
p=H.a_(s,"$iscb").b
J.as(x.a,3553,p)
p=this.ch
J.bJ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.p()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.an(p)
J.cu(x.a,33984+p)
p=H.a_(s,"$iscb").b
J.as(x.a,34067,p)
p=this.ch
J.bJ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.p()
this.ch=p+1
break
default:H.bD("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.O(s,!0)
o=x.a
if(p)J.b4(o,2929)
else J.eU(o,2929)
break
case"cStencilFunc":H.a_(s,"$ismq")
s.gdD()
J.b4(x.a,2960)
p=s.gdD()
o=s.geb(s)
n=s.ge9(s)
J.ff(x.a,p,o,n)
break
case"cDepthWrite":J.eT(x.a,s)
break
case"cBlendEquation":H.a_(s,"$ismp")
s.gdz()
J.b4(x.a,3042)
p=s.ge1()
o=s.ge8()
J.eN(x.a,p,o)
o=s.gdz()
J.eM(x.a,o)
break}++u
break}}m=P.fK(0,0,0,Date.now()-new P.bR(z,!1).a,0,0)
""+u
m.k(0)},
cs:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fn(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b0()}for(x=0;x<1;++x){w=b[x]
this.cI(w.a,w.cw())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bb()}for(v=a.cy,u=new H.a2(v,v.r,null,null,[H.B(v,0)]),u.c=v.e;u.t();)y.aC(0,u.d)
t=this.cF()
if(t.length!==0)P.a8("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b3(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cv()
u=a.Q
r=a.z
if(s)J.eL(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eY(q,y,v,u,0,r)
else J.eX(q,y,v,u,0)}else{u=z.a
if(r>1)J.eW(u,y,0,v,r)
else J.eV(u,y,0,v)}if(s)J.f_(z.a)},
cr:function(a,b){return this.cs(a,b,null)},
n:{
hH:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.aR(null,null,null,P.k)
y=c.b
x=d.b
w=c.f
v=J.eQ(b.a)
u=G.dS(b.a,35633,y)
J.cv(b.a,v,u)
t=G.dS(b.a,35632,x)
J.cv(b.a,v,t)
if(w.length>0)J.fj(b.a,v,w,35980)
J.fc(b.a,v)
if(J.fb(b.a,v,35714)!==!0)H.N(J.fa(b.a,v))
z=new G.hG(b,c,d,v,P.c2(c.c,null),P.t(),P.t(),z,null,a,!1,!0)
z.cA(a,b,c,d)
return z}}},
v:{"^":"c;a,b,c",
aX:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
du:{"^":"c;a,b,c,d,e,f,r,x",
cn:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
z.push(w)
y.i(0,w,this.r);++this.r}C.b.ao(z)},
E:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.U)(a),++x)y.push(a[x])
C.b.ao(y)},
B:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.b.ao(z)},
cC:function(a,b){this.b=this.ar(!0,a,b)},
aY:function(a){return this.cC(a,null)},
cB:function(a,b){this.b=this.ar(!1,a,b)},
I:function(a){return this.cB(a,null)},
ar:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.U)(z),++u){t=z[u]
s=$.$get$T().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.U)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.U)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.U)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.b.O(w,b)
if(a)w.push("}")
return C.b.a8(w,"\n")},
n:{
J:function(a){return new G.du(a,null,[],[],[],[],0,P.t())}}},
dA:{"^":"c;a,b,c,d,e,f,r",
cz:function(a,b){var z=this.e
if(z!==1)J.fh(a.a,b,34046,z)
J.b5(a.a,b,10240,this.r)
J.b5(a.a,b,10241,this.f)
if(this.b){J.b5(a.a,b,10242,33071)
J.b5(a.a,b,10243,33071)}},
n:{
i1:function(){return new G.dA(!1,!1,!1,!0,1,9729,9729)}}},
cb:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h0:{"^":"cb;f,a,b,c,d,e",
aZ:function(a){var z,y
z=this.d
y=this.c
J.as(z.a,y,this.b)
J.fg(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",hR:{"^":"c;",
cD:function(a,b,c){var z,y,x
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
x=this.cL(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cL:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iq("span",null)
y=J.cA(v)
J.h(y).sA(y,"1px")
C.n.sw(y,""+d+"px")
C.n.sdB(y,"left")
x=C.n.b4(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hS:{"^":"hR;e,f,a,b,c,d",
cH:function(a,b){var z,y,x,w,v;++this.e
z=J.eI(a,this.f)
if(typeof z!=="number")return z.V()
if(z<1000)return
y=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.dW(y,2)+" fps"
z=this.c;(z&&C.E).c8(z,b)
x=C.a.Z(30*C.t.dk(y),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
z=J.cA(w)
v=""+x+"px"
z.height=v
this.d.appendChild(w)},
cG:function(a){return this.cH(a,"")}}}],["","",,V,{"^":""}],["","",,D,{"^":"",
hb:function(){var z,y,x,w,v,u
z=new P.H(0,$.p,null,[null])
y=new P.dR(z,[null])
x=window.navigator
x=(x&&C.Q).c5(x,!0).a9(new D.hd(y))
w=new D.he(y)
v=H.B(x,0)
u=$.p
if(u!==C.c)w=P.ea(w,u)
x.ad(new P.cg(null,new P.H(0,u,null,[v]),2,null,w,[v,v]))
return z},
hd:{"^":"i:14;a",
$1:function(a){var z,y
z=document.createElement("video")
z.autoplay=!0
y=new W.ip(z,"playing",!1,[W.ba])
y.gdA(y).a9(new D.hc(this.a,z))
z.srcObject=a}},
hc:{"^":"i:0;a,b",
$1:function(a){return this.a.a6(0,this.b)}},
he:{"^":"i:15;a",
$1:function(a){P.a8("E:"+("Camera open error "+H.b(a)))
this.a.a6(0,null)}}}],["","",,A,{"^":"",
cq:function(a){var z,y
z=C.P.dC(a,0,new A.k9())
if(typeof z!=="number")return H.an(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k9:{"^":"i:16;",
$2:function(a,b){var z,y
z=J.aq(a,J.ae(b))
if(typeof z!=="number")return H.an(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bg:{"^":"c;a",
M:function(a){var z,y
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
k:function(a){return"[0] "+this.an(0).k(0)+"\n[1] "+this.an(1).k(0)+"\n[2] "+this.an(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.d(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bg){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.cq(this.a)},
an:function(a){var z,y,x
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
return new T.G(z)},
p:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.bg(z)
y.M(this)
x=b.ge3()
z[0]=C.d.p(z[0],x.h(0,0))
z[1]=C.d.p(z[1],x.h(0,1))
z[2]=C.d.p(z[2],x.h(0,2))
z[3]=C.d.p(z[3],x.h(0,3))
z[4]=C.d.p(z[4],x.h(0,4))
z[5]=C.d.p(z[5],x.h(0,5))
z[6]=C.d.p(z[6],x.h(0,6))
z[7]=C.d.p(z[7],x.h(0,7))
z[8]=C.d.p(z[8],x.h(0,8))
return y},
ab:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b},
n:{
aD:function(a,b,c,d,e,f,g,h,i){var z=new Float32Array(9)
z[8]=i
z[7]=h
z[6]=g
z[5]=f
z[4]=e
z[3]=d
z[2]=c
z[1]=b
z[0]=a
return new T.bg(z)}}},D:{"^":"c;bh:a<",
S:function(a,b){var z=this.a
z[0]=a
z[1]=b},
M:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.D){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.cq(this.a)},
ap:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.D(z)
y.M(this)
x=b.gbh()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
p:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.D(z)
y.M(this)
x=b.gbh()
z[0]=C.d.p(z[0],x.h(0,0))
z[1]=C.d.p(z[1],x.h(0,1))
return y},
al:function(a,b){var z=new T.D(new Float32Array(2))
z.M(this)
z.ab(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ab:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
ag:function(a){var z=new T.D(new Float32Array(2))
z.M(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},G:{"^":"c;bi:a<",
W:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
M:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.G){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.cq(this.a)},
ap:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.G(z)
y.M(this)
x=b.gbi()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
p:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.G(z)
y.M(this)
x=b.gbi()
z[0]=C.d.p(z[0],x.h(0,0))
z[1]=C.d.p(z[1],x.h(0,1))
z[2]=C.d.p(z[2],x.h(0,2))
return y},
al:function(a,b){return this.c7(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
c7:function(a){var z,y
z=new Float32Array(3)
y=new T.G(z)
y.M(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
ag:function(a){var z=new T.G(new Float32Array(3))
z.M(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
n:{
aG:function(a,b,c){var z=new T.G(new Float32Array(3))
z.W(a,b,c)
return z}}},cd:{"^":"c;"}}],["","",,T,{"^":"",
hF:function(a){var z,y,x,w
T.z(a,$.$get$el(),new G.A(P.t(),"none",!1,!0))
T.z(a,$.$get$eE(),new G.A(P.t(),"toon",!1,!0))
z=$.$get$et()
y=P.t()
x=new T.D(new Float32Array(2))
x.S(0.5,0.5)
y.i(0,"uCenter2",x)
y.i(0,"uPointSize",6)
T.z(a,z,new G.A(y,"hexalate-6",!1,!0))
y=$.$get$em()
z=P.t()
x=new T.D(new Float32Array(2))
x.S(0,0)
z.i(0,"uCenter2",x)
z.i(0,"uScale",0.8)
z.i(0,"uAngle",0.5)
T.z(a,y,new G.A(z,"dot",!1,!0))
z=$.$get$eF()
y=P.t()
y.i(0,"uScale",0.0009)
y.i(0,"uTime",0)
T.z(a,z,new G.A(y,"tv-distortion",!1,!0))
y=$.$get$ev()
z=P.t()
z.i(0,"uPointSize",4)
T.z(a,y,new G.A(z,"lumidots-4",!1,!0))
z=$.$get$eB()
y=P.t()
y.i(0,"uPointSize",4)
T.z(a,z,new G.A(y,"square-4",!1,!0))
y=$.$get$ez()
z=P.t()
x=new T.D(new Float32Array(2))
x.S(120,240)
z.i(0,"uRange",x)
T.z(a,y,new G.A(z,"scanline",!1,!0))
T.z(a,$.$get$eH(),new G.A(P.t(),"water",!1,!0))
z=new G.du("crosshatchPixelateF",null,[],[],[],[],0,P.t())
z.B(["vTexUV"])
z.E(["uTexture"])
z.b=z.ar(!1,["#define MODE 0","float level1 = 1.0;\nfloat level2 = 0.7;\nfloat level3 = 0.5;\nfloat level4 = 0.3;\n\nfloat dist = 10.0;\nfloat thickness = 0.5;\n\n#if MODE == 0\n// diagonal crosshach\nvec2 slope = vec2(1.0, 1.0);\n#elif MODE == 1\n// regular crosshatch\nvec2 slope = vec2(1.0, 0.0);\n#else\nERROR\n#endif\n\nfloat PixelColor(vec2 pixel, float lum) {\n    if (lum < level1) {\n        // main anti diagonal\n        if (mod(pixel.x * slope.x + pixel.y * slope.y, dist) <= thickness) return 0.0; \n    }  \n  \n    if (lum < level2) { \n        // main diagonal\n        if (mod(pixel.x * slope.y - pixel.y * slope.x, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level3) {\n        // inbetween anti diagonals\n        if (mod(pixel.x * slope.x + pixel.y * slope.y - dist * 0.5, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level4) {\n        // inbetween main diagonals\n        if (mod(pixel.x * slope.y - pixel.y * slope.x - dist * 0.5, dist) <= thickness) return 0.0;\n    } \n    \n    return 1.0;\n}       \n       \nvoid main()  { \n    vec2 pixel = gl_FragCoord.xy;  // this is really pixel + 0.5\n   \n    float lum = dot(vec3(0.2126, 0.7152, 0.0723), \n                    texture(uTexture, vTexUV).rgb);\n    \n    float color = PixelColor(pixel, lum);\n    oFragColor = vec4(vec3(color), 1.0);  \n}      \n\n"],null)
T.z(a,z,new G.A(P.t(),"crosshatch",!1,!0))
z=$.$get$eA()
y=P.t()
y.i(0,"uScale",0.5)
T.z(a,z,new G.A(y,"sepia",!1,!0))
T.z(a,$.$get$eC(),new G.A(P.t(),"technicolor",!1,!0))
y=$.$get$eG()
z=P.t()
x=new T.D(new Float32Array(2))
x.S(0.4,0.7)
z.i(0,"uRange",x)
T.z(a,y,new G.A(z,"vigenetting",!1,!0))
z=$.$get$ek()
y=P.t()
y.i(0,"uConvolutionMatrix",$.$get$cP())
y.i(0,"uColor",$.$get$cV())
T.z(a,z,new G.A(y,"emboss",!1,!0))
y=P.t()
y.i(0,"uConvolutionMatrix",$.$get$cQ())
y.i(0,"uColor",$.$get$cW())
T.z(a,z,new G.A(y,"emboss2",!1,!0))
y=P.t()
y.i(0,"uConvolutionMatrix",$.$get$cR())
y.i(0,"uColor",$.$get$cX())
T.z(a,z,new G.A(y,"engrave",!1,!0))
y=P.t()
y.i(0,"uConvolutionMatrix",$.$get$cS())
y.i(0,"uColor",$.$get$cY())
T.z(a,z,new G.A(y,"sharpen",!1,!0))
y=P.t()
y.i(0,"uConvolutionMatrix",$.$get$cO())
y.i(0,"uColor",$.$get$cU())
T.z(a,z,new G.A(y,"edges",!1,!0))
y=P.t()
y.i(0,"uConvolutionMatrix",$.$get$cN())
y.i(0,"uColor",$.$get$cT())
T.z(a,z,new G.A(y,"blur",!1,!0))
for(z=$.$get$aQ(),y=new H.a2(z,z.r,null,null,[H.B(z,0)]),y.c=z.e;y.t();){w=y.d
z=$.$get$cp();(z&&C.S).dJ(z,"beforeend","<option>"+H.b(w)+"</option>",null,null)}},
ew:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=document
x=new R.hS(0,0,null,null,null,null)
x.cD(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
y=J.h(w)
y.sA(w,w.clientWidth)
y.sw(w,w.clientHeight)
v=new G.fv(null,w)
y=J.f7(w,"webgl2",P.c1(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.N(P.d7('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.f8(y))
if($.ep>0)P.a8("I: "+u)
J.eO(y,0,0,0,1)
J.b4(y,2929)
T.hF(v)
z.a=null
z.b=null
y=$.$get$aQ().h(0,"dot").b
u=new T.G(new Float32Array(3))
u.W(-1,-1,0)
t=new T.G(new Float32Array(3))
t.W(1,-1,0)
s=new T.G(new Float32Array(3))
s.W(1,1,0)
r=new T.G(new Float32Array(3))
r.W(-1,1,0)
q=new T.D(new Float32Array(2))
q.S(0,0)
p=new T.D(new Float32Array(2))
p.S(1,0)
o=new T.D(new Float32Array(2))
o.S(1,1)
n=new T.D(new Float32Array(2))
n.S(0,1)
m=new T.G(new Float32Array(3))
m.W(0,0,1)
l=[]
k=new G.fZ(!1,[],[],l,P.t())
k.aW("aTexUV")
k.cq([u,t,s,r])
k.co("aTexUV",[q,p,o,n])
k.aW("aNormal")
k.cp("aNormal",[m,m,m,m])
u=y.d
y=y.e.x
t=P.t()
s=J.eS(u.a)
j=new G.hi(u,s,4,t,y,null,0,-1,null,null,P.t(),"meshdata:quad",!1,!0)
l=G.da(l,null)
t.i(0,"aPosition",J.bG(u.a))
j.ch=l
j.aV("aPosition",l,3)
i=$.$get$T().h(0,"aPosition")
if(i==null)H.N("Unknown canonical aPosition")
h=y.h(0,"aPosition")
J.b3(u.a,s)
u.bF(0,h,0)
u.c1(0,t.h(0,"aPosition"),h,i.aX(),5126,!1,0,0)
y=k.cu()
j.y=J.bG(u.a)
t=j.ch.length
if(t<768){j.cx=new Uint8Array(H.bv(y))
j.Q=5121}else if(t<196608){j.cx=new Uint16Array(H.bv(y))
j.Q=5123}else{j.cx=new Uint32Array(H.bv(y))
j.Q=5125}J.b3(u.a,s)
y=j.y
t=j.cx
J.bE(u.a,34963,y)
J.cw(u.a,34963,t,35048)
G.iL(k,j)
P.fW([D.hb()],null,!1).a9(new T.km(z,v,new T.kl(z,j,x)))},
fN:{"^":"c;a,b,c",
ct:function(a,b,c){$.$get$aQ().i(0,this.c.a,this)},
n:{
z:function(a,b,c){var z=c.a
z=new T.fN(z,G.hH(z,a,$.$get$en(),b),c)
z.ct(a,b,c)
return z}}},
kl:{"^":"i:17;a,b,c",
$1:function(a){var z,y,x,w,v,u
try{y=this.a.b
y.aZ(y.f)
x=y.d
y=y.c
J.as(x.a,y,null)}catch(w){z=H.L(w)
P.a8(z)}v=$.$get$aQ().h(0,$.$get$cp().value)
y=v.c
x=J.aZ(a)
u=y.d
u.i(0,"uTime",x.al(a,1000))
u.i(0,"uTexture",this.a.b)
v.b.cr(this.b,[y])
C.a8.gdd(window).a9(this)
this.c.cG(x.p(a,0))}},
km:{"^":"i:18;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r
z=J.ar(a,0)
y=this.a
y.a=z
if(z==null)window.alert("Could not access camera - do you have a camera installed?")
x=J.f5(y.a)
w=J.f4(y.a)
P.a8("camera resolution: "+H.b(x)+"x"+H.b(w))
v=this.b
u=y.a
t=$.$get$dB()
if(t==null)t=new G.dA(!1,!1,!1,!0,1,9729,9729)
s=J.eR(v.a)
r=new G.h0(u,"video",s,3553,v,t)
J.as(v.a,3553,s)
J.fd(v.a,37440,1)
r.aZ(u)
t.cz(v,3553)
J.f9(v.a)
J.as(v.a,3553,null)
y.b=r
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.df.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b_(a)}
J.k5=function(a){if(typeof a=="number")return J.aA.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b_(a)}
J.Z=function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b_(a)}
J.by=function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b_(a)}
J.aZ=function(a){if(typeof a=="number")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aX.prototype
return a}
J.k6=function(a){if(typeof a=="number")return J.aA.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aX.prototype
return a}
J.eq=function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aX.prototype
return a}
J.h=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b_(a)}
J.aq=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k5(a).p(a,b)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).G(a,b)}
J.P=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aZ(a).aa(a,b)}
J.b2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aZ(a).V(a,b)}
J.eI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aZ(a).ap(a,b)}
J.ar=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).h(a,b)}
J.eJ=function(a,b,c,d){return J.h(a).cZ(a,b,c,d)}
J.cu=function(a,b){return J.h(a).bj(a,b)}
J.eK=function(a,b,c,d){return J.h(a).bk(a,b,c,d)}
J.cv=function(a,b,c){return J.h(a).bm(a,b,c)}
J.eL=function(a,b){return J.h(a).df(a,b)}
J.bE=function(a,b,c){return J.h(a).bn(a,b,c)}
J.as=function(a,b,c){return J.h(a).bp(a,b,c)}
J.b3=function(a,b){return J.h(a).di(a,b)}
J.eM=function(a,b){return J.h(a).bq(a,b)}
J.eN=function(a,b,c){return J.h(a).br(a,b,c)}
J.cw=function(a,b,c,d){return J.h(a).bs(a,b,c,d)}
J.eO=function(a,b,c,d,e){return J.h(a).bt(a,b,c,d,e)}
J.cx=function(a,b){return J.eq(a).dl(a,b)}
J.eP=function(a,b){return J.k6(a).a0(a,b)}
J.bF=function(a,b,c){return J.Z(a).dq(a,b,c)}
J.bG=function(a){return J.h(a).bv(a)}
J.eQ=function(a){return J.h(a).bw(a)}
J.eR=function(a){return J.h(a).by(a)}
J.eS=function(a){return J.h(a).dt(a)}
J.eT=function(a,b){return J.h(a).bz(a,b)}
J.eU=function(a,b){return J.h(a).bA(a,b)}
J.eV=function(a,b,c,d){return J.h(a).bB(a,b,c,d)}
J.eW=function(a,b,c,d,e){return J.h(a).du(a,b,c,d,e)}
J.eX=function(a,b,c,d,e){return J.h(a).bC(a,b,c,d,e)}
J.eY=function(a,b,c,d,e,f){return J.h(a).dv(a,b,c,d,e,f)}
J.cy=function(a,b){return J.by(a).q(a,b)}
J.b4=function(a,b){return J.h(a).bD(a,b)}
J.eZ=function(a,b){return J.h(a).bE(a,b)}
J.f_=function(a){return J.h(a).dw(a)}
J.f0=function(a,b){return J.by(a).C(a,b)}
J.cz=function(a){return J.h(a).gde(a)}
J.aN=function(a){return J.h(a).gN(a)}
J.ae=function(a){return J.o(a).gv(a)}
J.aO=function(a){return J.by(a).gK(a)}
J.a0=function(a){return J.Z(a).gj(a)}
J.f1=function(a){return J.h(a).gdN(a)}
J.f2=function(a){return J.h(a).gaE(a)}
J.cA=function(a){return J.h(a).gT(a)}
J.f3=function(a){return J.h(a).gdT(a)}
J.f4=function(a){return J.h(a).gdZ(a)}
J.f5=function(a){return J.h(a).ge_(a)}
J.f6=function(a){return J.h(a).gc2(a)}
J.bH=function(a){return J.h(a).gl(a)}
J.bI=function(a){return J.h(a).gm(a)}
J.cB=function(a){return J.h(a).gH(a)}
J.f7=function(a,b,c){return J.h(a).c4(a,b,c)}
J.f8=function(a){return J.h(a).am(a)}
J.f9=function(a){return J.h(a).aK(a)}
J.fa=function(a,b){return J.h(a).aL(a,b)}
J.fb=function(a,b,c){return J.h(a).aM(a,b,c)}
J.cC=function(a,b,c){return J.h(a).aP(a,b,c)}
J.fc=function(a,b){return J.h(a).bJ(a,b)}
J.fd=function(a,b,c){return J.h(a).bL(a,b,c)}
J.cD=function(a){return J.by(a).dP(a)}
J.fe=function(a,b){return J.h(a).sai(a,b)}
J.ff=function(a,b,c,d){return J.h(a).aT(a,b,c,d)}
J.fg=function(a,b,c,d,e,f,g){return J.h(a).bN(a,b,c,d,e,f,g)}
J.fh=function(a,b,c,d){return J.h(a).bO(a,b,c,d)}
J.b5=function(a,b,c,d){return J.h(a).bP(a,b,c,d)}
J.fi=function(a){return J.eq(a).dV(a)}
J.at=function(a){return J.o(a).k(a)}
J.fj=function(a,b,c,d){return J.h(a).dX(a,b,c,d)}
J.fk=function(a,b,c){return J.h(a).bQ(a,b,c)}
J.fl=function(a,b,c){return J.h(a).bR(a,b,c)}
J.bJ=function(a,b,c){return J.h(a).bS(a,b,c)}
J.fm=function(a,b,c){return J.h(a).bT(a,b,c)}
J.cE=function(a,b,c){return J.h(a).bU(a,b,c)}
J.cF=function(a,b,c){return J.h(a).bV(a,b,c)}
J.cG=function(a,b,c){return J.h(a).bW(a,b,c)}
J.cH=function(a,b,c,d){return J.h(a).bX(a,b,c,d)}
J.cI=function(a,b,c,d){return J.h(a).bY(a,b,c,d)}
J.fn=function(a,b){return J.h(a).c_(a,b)}
J.fo=function(a,b,c){return J.h(a).dY(a,b,c)}
J.fp=function(a,b,c,d,e,f,g){return J.h(a).c0(a,b,c,d,e,f,g)}
I.ao=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bM.prototype
C.n=W.fB.prototype
C.E=W.fH.prototype
C.F=J.e.prototype
C.b=J.ay.prototype
C.t=J.dd.prototype
C.a=J.de.prototype
C.u=J.df.prototype
C.d=J.aA.prototype
C.i=J.aB.prototype
C.M=J.aC.prototype
C.P=H.hl.prototype
C.Q=W.hm.prototype
C.R=W.hq.prototype
C.y=J.hu.prototype
C.S=W.c7.prototype
C.D=W.i_.prototype
C.q=J.aX.prototype
C.a8=W.i7.prototype
C.c=new P.j3()
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.y(I.ao(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.O=I.ao(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.x=I.ao([])
C.o=H.y(I.ao(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.y(I.ao(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.T=new G.v("vec3","vertex btangents",0)
C.e=new G.v("vec3","",0)
C.U=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.z=new G.v("vec3","vertex coordinates",0)
C.V=new G.v("vec3","vertex binormals",0)
C.A=new G.v("vec4","for wireframe",0)
C.W=new G.v("vec4","per vertex color",0)
C.X=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.Z=new G.v("mat4","",4)
C.Y=new G.v("mat4","",128)
C.f=new G.v("float","",0)
C.a_=new G.v("float","",4)
C.a0=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.a1=new G.v("float","for bump maps",0)
C.a2=new G.v("vec2","texture uvs",0)
C.a3=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.a4=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.a5=new G.v("vec3","vertex normals",0)
C.a6=new G.v("sampler2DShadow","",0)
C.B=new G.v("vec3","per vertex color",0)
C.C=new G.v("mat3","",0)
C.a7=new G.v("vec3","vertex tangents",0)
$.V=0
$.au=null
$.cJ=null
$.es=null
$.ef=null
$.ey=null
$.bx=null
$.bA=null
$.cr=null
$.ai=null
$.aH=null
$.aI=null
$.ck=!1
$.p=C.c
$.a1=null
$.bT=null
$.d6=null
$.d5=null
$.d3=null
$.d2=null
$.d1=null
$.d0=null
$.ep=0
$.jV="\nvec3 config = vec3(1.0 / 80.0, 6.0, 3.0);\n// vec3 config = vec3(0.2, 2.0, 2.0);\n\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(vec2 coords, float dx, float dy) {\n return texture(uTexture, coords + vec2(dx, dy)).rgb;\n}\n\n// returns pixel color using a strange kernel\n\nfloat IsEdge(vec2 coords, vec2 dim) {\n  vec2 d = vec2(1.0, 1.0) / dim;\n\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));\n  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));\n  float pix2 = avg3(get_pixel(coords, -d.x, d.y));\n  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));\n\n  float pix5 = avg3(get_pixel(coords, 0.0, d.y));\n  float pix6 = avg3(get_pixel(coords, d.x, -d.y));\n  float pix7 = avg3(get_pixel(coords, d.x, 0.0));\n  float pix8 = avg3(get_pixel(coords, d.x, d.y));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec4 colorOrg = texture(uTexture, vTexUV);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    // find nearest level\n    vHSV =  ceil(vHSV * config) / config;\n    float edg = IsEdge(vTexUV, texdim);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = (edg >= 0.3) ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"
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
I.$lazy(y,x,w)}})(["d_","$get$d_",function(){return H.er("_$dart_dartClosure")},"bZ","$get$bZ",function(){return H.er("_$dart_js")},"dD","$get$dD",function(){return H.X(H.bt({
toString:function(){return"$receiver$"}}))},"dE","$get$dE",function(){return H.X(H.bt({$method$:null,
toString:function(){return"$receiver$"}}))},"dF","$get$dF",function(){return H.X(H.bt(null))},"dG","$get$dG",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.X(H.bt(void 0))},"dL","$get$dL",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dI","$get$dI",function(){return H.X(H.dJ(null))},"dH","$get$dH",function(){return H.X(function(){try{null.$method$}catch(z){return z.message}}())},"dN","$get$dN",function(){return H.X(H.dJ(void 0))},"dM","$get$dM",function(){return H.X(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cf","$get$cf",function(){return P.ia()},"db","$get$db",function(){return P.iy(null,P.aS)},"aJ","$get$aJ",function(){return[]},"cZ","$get$cZ",function(){return{}},"dW","$get$dW",function(){return P.c2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"ci","$get$ci",function(){return P.t()},"T","$get$T",function(){return P.c1(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.B,"aColorAlpha",C.W,"aPosition",C.z,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.A,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.B,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.z,"vPositionFromLight",C.U,"vCenter",C.A,"vDepth",C.a0,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.f,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"dB","$get$dB",function(){var z=G.i1()
z.b=!0
return z},"en","$get$en",function(){var z=G.J("uv-passthru")
z.cn(["aPosition","aTexUV"])
z.B(["vTexUV"])
z.aY(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"el","$get$el",function(){var z=G.J("copyF")
z.B(["vTexUV"])
z.E(["uTexture"])
z.aY(["oFragColor = texture(uTexture, vTexUV);"])
return z},"eE","$get$eE",function(){var z=G.J("ToonF")
z.B(["vTexUV"])
z.E(["uTexture"])
z.I(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.jV])
return z},"et","$get$et",function(){var z=G.J("HexPixelateF")
z.B(["vTexUV"])
z.E(["uCenter2","uPointSize","uTexture"])
z.I(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v, vec2 texdim) {\n    vec2 p = (v * texdim - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize / texdim + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(vTexUV, texdim);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texture(uTexture, q);\n}\n"])
return z},"em","$get$em",function(){var z=G.J("DotF")
z.B(["vTexUV"])
z.E(["uCenter2","uScale","uAngle","uTexture"])
z.I(["float pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texture(uTexture, vTexUV );\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n     vec2 tex = vTexUV* texdim - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"])
return z},"eF","$get$eF",function(){var z=G.J("DotF")
z.B(["vTexUV"])
z.E(["uScale","uTime","uTexture"])
z.I(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec3 d = rgbDistortion(vTexUV, uScale, uTime);\n      float x = vTexUV.x;\n      float y = vTexUV.y;\n\n\t\t\tfloat r = texture(uTexture, vec2(x + d.r, y) ).r;\n\t\t\tfloat g = texture(uTexture, vec2(x + d.g, y) ).g;\n\t\t\tfloat b = texture(uTexture, vec2(x + d.b, y) ).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"])
return z},"ev","$get$ev",function(){var z=G.J("LumidotsF")
z.B(["vTexUV"])
z.E(["uPointSize","uTexture"])
z.I(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texture(uTexture, center / texdim).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"])
return z},"eB","$get$eB",function(){var z=G.J("SquarePixelateF")
z.B(["vTexUV"])
z.E(["uPointSize","uTexture"])
z.I(["void main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    oFragColor = texture(uTexture, center / texdim);\n}\n"])
return z},"cP","$get$cP",function(){return T.aD(-1,0,-1,0,4,0,-1,0,-1)},"cV","$get$cV",function(){return T.aG(0.5,0.5,0.5)},"cQ","$get$cQ",function(){return T.aD(2,0,0,0,-1,0,0,0,-1)},"cW","$get$cW",function(){return T.aG(0.5,0.5,0.5)},"cR","$get$cR",function(){return T.aD(-2,0,0,0,2,0,0,0,0)},"cX","$get$cX",function(){return T.aG(0.37,0.37,0.37)},"cS","$get$cS",function(){var z=T.aD(0,-2,0,-2,11,-2,0,-2,0)
z.ab(0,0.333)
return z},"cY","$get$cY",function(){return T.aG(0,0,0)},"cO","$get$cO",function(){return T.aD(-1,-1,-1,-1,8,-1,-1,-1,-1)},"cU","$get$cU",function(){return T.aG(0,0,0)},"cN","$get$cN",function(){var z=T.aD(1,2,1,2,4,2,1,2,1)
z.ab(0,0.0625)
return z},"cT","$get$cT",function(){return T.aG(0,0,0)},"ek","$get$ek",function(){var z=G.J("Convolution3x3F")
z.B(["vTexUV"])
z.E(["uTexture","uColor","uConvolutionMatrix"])
z.I(["void main() {\n    mat3 m = uConvolutionMatrix;\n    vec2 d = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texture(uTexture, vTexUV + d * vec2(x, y)).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n\n"])
return z},"ez","$get$ez",function(){var z=G.J("ScanlinePixelateF")
z.B(["vTexUV"])
z.E(["uTexture","uRange"])
z.I(["      \n// const vec3 comp = vec3(0.05, 0.15, 0.95);\nconst vec3 comp = vec3(0.1, 0.30, 0.85);\n\nvoid main() {\n    // number scan lines: texture height * \n    vec2 sine_coord = uRange * 2.0 * 3.1415;\n                        \n    sine_coord.x = 0.0;\n    vec3 color =  texture(uTexture, vTexUV).xyz;\n    float m = comp.z + \n              dot(comp.xy * sin(vTexUV * sine_coord), vec2(1.0, 1.0));\n    oFragColor = vec4(color * m, 1.0);\n}\n"])
return z},"eH","$get$eH",function(){var z=G.J("WaterPixelateF")
z.B(["vTexUV"])
z.E(["uTexture","uTime"])
z.I(["float wave(vec2 pos, float srcX, float srcY, float t) {\n   float dist = 300.0 * length(pos - vec2(srcX, srcY));\n   return sin(dist - 0.15 * t);\n}\n\nvoid main() {\n    vec3 color =  texture(uTexture, vTexUV).xyz;\n    float t =  uTime * 50.0;\n    float res = 0.0;\n    res += wave(vTexUV, 0.6, 0.7, t);\n    res += wave(vTexUV, 0.9, 0.9, t);\n    res += wave(vTexUV, -0.6, 0.3, t);\n    res += wave(vTexUV, 0.1, 0.4, t);\n    // res += wave(vTexUV, 0.1, 0.4, t);\n    res += wave(vTexUV, 0.5, 0.5, t);\n    res += wave(vTexUV, -1.0, 1.4, t);\n    oFragColor = vec4(color * (0.9 + 0.012 * res), 1.0);\n}\n"])
return z},"eA","$get$eA",function(){var z=G.J("sepiaPixelateF")
z.B(["vTexUV"])
z.E(["uTexture","uScale"])
z.I(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n\n","void main() { \n    vec3 color = texture(uTexture, vTexUV).rgb;\n    float gray = dot(color, vec3(0.3333));\n    // float gray = dot(color, vec3(0.2126, 0.7152, 0.0723));\n    oFragColor = vec4(SepiaColor(gray, uScale), 1.0);\n}\n"])
return z},"eC","$get$eC",function(){var z=G.J("technicolorPixelateF")
z.B(["vTexUV"])
z.E(["uTexture","uScale"])
z.I(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n\n","void main() { \n    vec3 color = texture(uTexture, vTexUV).rgb;\n    oFragColor = vec4(Technicolor3(color, 0.5), 1.0);\n}\n"])
return z},"eG","$get$eG",function(){var z=G.J("vignettingPixelateF")
z.B(["vTexUV"])
z.E(["uTexture","uRange"])
z.I(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n\n","void main() { \n    vec3 color = texture(uTexture, vTexUV).rgb;\n    float v = VignettingFactor(vTexUV, uRange.x, uRange.y);\n    oFragColor = vec4(color * v, 1.0);\n}\n"])
return z},"cp","$get$cp",function(){return H.a_(W.k2().querySelector("#effect"),"$isc7")},"aQ","$get$aQ",function(){return P.t()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.q},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.k,args:[P.K]},{func:1,ret:P.cm,args:[W.av,P.k,P.k,W.ch]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.bn]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[W.q,W.q]},{func:1,args:[W.bh]},{func:1,args:[P.c]},{func:1,args:[P.K,P.c]},{func:1,v:true,args:[P.aL]},{func:1,args:[P.f]},{func:1,ret:P.K,args:[,,]}]
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
if(x==y)H.kr(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(T.ew,[])
else T.ew([])})})()
//# sourceMappingURL=camera_effects.dart.js.map
