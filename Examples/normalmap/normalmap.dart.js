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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cA(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ax=function(){}
var dart=[["","",,H,{"^":"",mF:{"^":"d;a"}}],["","",,J,{"^":"",
m:function(a){return void 0},
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
be:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cC==null){H.lj()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cp("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cd()]
if(v!=null)return v
v=H.lm(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$cd(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
h:{"^":"d;",
F:function(a,b){return a===b},
gB:function(a){return H.aR(a)},
k:["cY",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hG:{"^":"h;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iscz:1},
hH:{"^":"h;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isb6:1},
ce:{"^":"h;",
gB:function(a){return 0},
k:["d_",function(a){return String(a)}]},
ie:{"^":"ce;"},
bb:{"^":"ce;"},
aP:{"^":"ce;",
k:function(a){var z=a[$.$get$df()]
return z==null?this.d_(a):J.aG(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aL:{"^":"h;$ti",
N:function(a,b){var z,y
if(!!a.fixed$length)H.a_(P.t("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.M(a))}},
ak:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
bf:function(a,b){return H.dV(a,b,null,H.B(a,0))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
gex:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.cc())},
cS:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.a_(P.t("setRange"))
P.dN(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.G()
if(typeof b!=="number")return H.q(b)
z=c-b
if(z===0)return
y=J.m(d)
if(!!y.$isi){x=e
w=d}else{w=y.bf(d,e).eN(0,!1)
x=0}y=J.F(w)
v=y.gi(w)
if(typeof v!=="number")return H.q(v)
if(x+z>v)throw H.b(H.hD())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
an:function(a,b,c,d){return this.cS(a,b,c,d,0)},
bO:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.M(a))}return!1},
cT:function(a,b){if(!!a.immutable$list)H.a_(P.t("sort"))
H.iB(a,J.kO())},
ax:function(a){return this.cT(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
k:function(a){return P.cb(a,"[","]")},
gI:function(a){return new J.d2(a,a.length,0,null,[H.B(a,0)])},
gB:function(a){return H.aR(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.a_(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.d1(b,"newLength",null))
if(b<0)throw H.b(P.ar(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a8(a,b))
if(b>=a.length||b<0)throw H.b(H.a8(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.a_(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a8(a,b))
if(b>=a.length||b<0)throw H.b(H.a8(a,b))
a[b]=c},
l:function(a,b){var z,y,x
z=a.length
y=J.L(b)
if(typeof y!=="number")return H.q(y)
x=z+y
y=H.v([],[H.B(a,0)])
this.si(y,x)
this.an(y,0,a.length,a)
this.an(y,a.length,x,b)
return y},
$isn:1,
$asn:I.ax,
$isi:1,
p:{
aM:function(a){a.fixed$length=Array
return a},
mD:[function(a,b){return J.fe(a,b)},"$2","kO",8,0,22]}},
mE:{"^":"aL;$ti"},
d2:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aN:{"^":"h;",
W:function(a,b){var z
if(typeof b!=="number")throw H.b(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gas(b)
if(this.gas(a)===z)return 0
if(this.gas(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gas:function(a){return a===0?1/a<0:a<0},
eM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.t(""+a+".toInt()"))},
e5:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.t(""+a+".ceil()"))},
e6:function(a,b,c){if(this.W(b,c)>0)throw H.b(H.X(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
eL:function(a){return a},
eP:function(a,b){var z
if(b>20)throw H.b(P.ar(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gas(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a+b},
G:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a-b},
a_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bI(a,b)},
O:function(a,b){return(a|0)===a?a/b|0:this.bI(a,b)},
bI:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.t("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bG:function(a,b){var z
if(a>0)z=this.dS(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dS:function(a,b){return b>31?0:a>>>b},
a5:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a<b},
am:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a>b},
$isaw:1,
$isaY:1},
dy:{"^":"aN;",$isG:1},
dx:{"^":"aN;"},
aO:{"^":"h;",
e7:function(a,b){if(b>=a.length)H.a_(H.a8(a,b))
return a.charCodeAt(b)},
by:function(a,b){if(b>=a.length)throw H.b(H.a8(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.b(P.d1(b,null,null))
return a+b},
cV:function(a,b,c){var z
if(c>a.length)throw H.b(P.ar(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cU:function(a,b){return this.cV(a,b,0)},
bh:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.a_(H.X(c))
if(b<0)throw H.b(P.bx(b,null,null))
if(typeof c!=="number")return H.q(c)
if(b>c)throw H.b(P.bx(b,null,null))
if(c>a.length)throw H.b(P.bx(c,null,null))
return a.substring(b,c)},
cW:function(a,b){return this.bh(a,b,null)},
eO:function(a){return a.toLowerCase()},
ea:function(a,b,c){if(c>a.length)throw H.b(P.ar(c,0,a.length,null,null))
return H.lt(a,b,c)},
W:function(a,b){var z
if(typeof b!=="string")throw H.b(H.X(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gB:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a8(a,b))
if(b>=a.length||b<0)throw H.b(H.a8(a,b))
return a[b]},
$isn:1,
$asn:I.ax,
$isk:1}}],["","",,H,{"^":"",
cc:function(){return new P.bB("No element")},
hE:function(){return new P.bB("Too many elements")},
hD:function(){return new P.bB("Too few elements")},
iB:function(a,b){var z=J.L(a)
if(typeof z!=="number")return z.G()
H.b8(a,0,z-1,b)},
b8:function(a,b,c,d){if(c-b<=32)H.iA(a,b,c,d)
else H.iz(a,b,c,d)},
iA:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.F(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.U(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
iz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.O(c-b+1,6)
y=b+z
x=c-z
w=C.c.O(b+c,2)
v=w-z
u=w+z
t=J.F(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.U(d.$2(s,r),0)){n=r
r=s
s=n}if(J.U(d.$2(p,o),0)){n=o
o=p
p=n}if(J.U(d.$2(s,q),0)){n=q
q=s
s=n}if(J.U(d.$2(r,q),0)){n=q
q=r
r=n}if(J.U(d.$2(s,p),0)){n=p
p=s
s=n}if(J.U(d.$2(q,p),0)){n=p
p=q
q=n}if(J.U(d.$2(r,o),0)){n=o
o=r
r=n}if(J.U(d.$2(r,q),0)){n=q
q=r
r=n}if(J.U(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.P(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.m(i)
if(h.F(i,0))continue
if(h.a5(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.az(i)
if(h.am(i,0)){--l
continue}else{g=l-1
if(h.a5(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.b_(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.U(d.$2(j,p),0))for(;!0;)if(J.U(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b_(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b8(a,b,m-2,d)
H.b8(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.P(d.$2(t.h(a,m),r),0);)++m
for(;J.P(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.P(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b_(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b8(a,m,l,d)}else H.b8(a,m,l,d)},
bq:{"^":"b4;$ti"},
aQ:{"^":"bq;$ti",
gI:function(a){return new H.dE(this,this.gi(this),0,null,[H.bf(this,"aQ",0)])},
v:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.q(z)
y=0
for(;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.b(P.M(this))}},
b4:function(a,b){return this.cZ(0,b)}},
iQ:{"^":"aQ;a,b,c,$ti",
dj:function(a,b,c,d){},
gdF:function(){var z=J.L(this.a)
return z},
gdT:function(){var z,y
z=J.L(this.a)
y=this.b
if(typeof z!=="number")return H.q(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.L(this.a)
y=this.b
if(typeof z!=="number")return H.q(z)
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdT()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.q(b)
y=z+b
if(!(b<0)){z=this.gdF()
if(typeof z!=="number")return H.q(z)
z=y>=z}else z=!0
if(z)throw H.b(P.z(b,this,"index",null,null))
return J.cN(this.a,y)},
eN:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.F(y)
w=x.gi(y)
if(typeof w!=="number")return w.G()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.v(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a5()
if(u<w)throw H.b(P.M(this))}return t},
p:{
dV:function(a,b,c,d){var z=new H.iQ(a,b,c,[d])
z.dj(a,b,c,d)
return z}}},
dE:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.F(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.M(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hV:{"^":"aQ;a,b,$ti",
gi:function(a){return J.L(this.a)},
q:function(a,b){return this.b.$1(J.cN(this.a,b))},
$asbq:function(a,b){return[b]},
$asaQ:function(a,b){return[b]},
$asb4:function(a,b){return[b]}},
ee:{"^":"b4;a,b,$ti",
gI:function(a){return new H.iY(J.b1(this.a),this.b,this.$ti)}},
iY:{"^":"hF;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gC(z))===!0)return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bs:{"^":"d;$ti"}}],["","",,H,{"^":"",
lb:function(a){return init.types[a]},
eU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.m(a).$isp},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aG(a)
if(typeof z!=="string")throw H.b(H.X(a))
return z},
aR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r
z=J.m(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.m(a).$isbb){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.by(w,0)===36)w=C.i.cW(w,1)
r=H.bP(H.aA(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
im:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
ik:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
ig:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
ih:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
ij:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
il:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
ii:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
q:function(a){throw H.b(H.X(a))},
a:function(a,b){if(a==null)J.L(a)
throw H.b(H.a8(a,b))},
a8:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,"index",null)
z=J.L(a)
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.bx(b,"index",null)},
X:function(a){return new P.ab(!0,a,null,null)},
aj:function(a){if(typeof a!=="number")throw H.b(H.X(a))
return a},
b:function(a){var z
if(a==null)a=new P.bw()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f2})
z.name=""}else z.toString=H.f2
return z},
f2:function(){return J.aG(this.dartException)},
a_:function(a){throw H.b(a)},
y:function(a){throw H.b(P.M(a))},
K:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cf(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dK(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e0()
u=$.$get$e1()
t=$.$get$e2()
s=$.$get$e3()
r=$.$get$e7()
q=$.$get$e8()
p=$.$get$e5()
$.$get$e4()
o=$.$get$ea()
n=$.$get$e9()
m=v.U(y)
if(m!=null)return z.$1(H.cf(y,m))
else{m=u.U(y)
if(m!=null){m.method="call"
return z.$1(H.cf(y,m))}else{m=t.U(y)
if(m==null){m=s.U(y)
if(m==null){m=r.U(y)
if(m==null){m=q.U(y)
if(m==null){m=p.U(y)
if(m==null){m=s.U(y)
if(m==null){m=o.U(y)
if(m==null){m=n.U(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dK(y,m))}}return z.$1(new H.iW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dR()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ab(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dR()
return a},
a9:function(a){var z
if(a==null)return new H.ev(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ev(a,null)},
l7:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
ll:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.dq("Unsupported number of arguments for wrapped closure"))},
a2:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ll)
a.$identity=z
return z},
h_:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.m(c).$isi){z.$reflectionInfo=c
x=H.ip(z).r}else x=c
w=d?Object.create(new H.iD().constructor.prototype):Object.create(new H.c_(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a3
$.a3=J.aD(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.d7(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lb,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.d5:H.c0
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.d7(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fX:function(a,b,c,d){var z=H.c0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d7:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fX(y,!w,z,b)
if(y===0){w=$.a3
$.a3=J.aD(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.aH
if(v==null){v=H.bn("self")
$.aH=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a3
$.a3=J.aD(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.aH
if(v==null){v=H.bn("self")
$.aH=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
fY:function(a,b,c,d){var z,y
z=H.c0
y=H.d5
switch(b?-1:a){case 0:throw H.b(H.iv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aH
if(z==null){z=H.bn("self")
$.aH=z}y=$.d4
if(y==null){y=H.bn("receiver")
$.d4=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a3
$.a3=J.aD(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a3
$.a3=J.aD(y,1)
return new Function(z+H.c(y)+"}")()},
cA:function(a,b,c,d,e,f){var z,y
z=J.aM(b)
y=!!J.m(c).$isi?J.aM(c):c
return H.h_(a,z,y,!!d,e,f)},
lq:function(a,b){var z=J.F(b)
throw H.b(H.d6(a,z.bh(b,3,z.gi(b))))},
ak:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.m(a)[b]
else z=!0
if(z)return a
H.lq(a,b)},
cB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eO:function(a,b){var z,y
if(a==null)return!1
z=H.cB(J.m(a))
if(z==null)y=!1
else y=H.eT(z,b)
return y},
kX:function(a){var z
if(a instanceof H.f){z=H.cB(J.m(a))
if(z!=null)return H.cG(z,null)
return"Closure"}return H.aS(a)},
lu:function(a){throw H.b(new P.h4(a))},
eR:function(a){return init.getIsolateTag(a)},
v:function(a,b){a.$ti=b
return a},
aA:function(a){if(a==null)return
return a.$ti},
o2:function(a,b,c){return H.aZ(a["$as"+H.c(c)],H.aA(b))},
bg:function(a,b,c,d){var z=H.aZ(a["$as"+H.c(c)],H.aA(b))
return z==null?null:z[d]},
bf:function(a,b,c){var z=H.aZ(a["$as"+H.c(b)],H.aA(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.aA(a)
return z==null?null:z[b]},
cG:function(a,b){var z=H.aC(a,b)
return z},
aC:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bP(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aC(z,b)
return H.kN(a,b)}return"unknown-reified-type"},
kN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aC(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aC(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.l6(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aC(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bP:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cn("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return w?"":"<"+z.k(0)+">"},
la:function(a){var z,y,x
if(a instanceof H.f){z=H.cB(J.m(a))
if(z!=null)return H.cG(z,null)}y=J.m(a).constructor.builtin$cls
if(a==null)return y
x=H.bP(a.$ti,0,null)
return y+x},
aZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bd:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aA(a)
y=J.m(a)
if(y[b]==null)return!1
return H.eH(H.aZ(y[d],z),c)},
bj:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bd(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bP(c,0,null)
throw H.b(H.d6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eH:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.T(a[y],b[y]))return!1
return!0},
o0:function(a,b,c){return a.apply(b,H.aZ(J.m(b)["$as"+H.c(c)],H.aA(b)))},
T:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b6")return!0
if('func' in b)return H.eT(a,b)
if('func' in a)return b.builtin$cls==="mw"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cG(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eH(H.aZ(u,z),x)},
eG:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.T(z,v)||H.T(v,z)))return!1}return!0},
kY:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aM(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.T(v,u)||H.T(u,v)))return!1}return!0},
eT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.T(z,y)||H.T(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eG(x,w,!1))return!1
if(!H.eG(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.T(o,n)||H.T(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.T(o,n)||H.T(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.T(o,n)||H.T(n,o)))return!1}}return H.kY(a.named,b.named)},
o1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lm:function(a){var z,y,x,w,v,u
z=$.eS.$1(a)
y=$.bN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eF.$2(a,z)
if(z!=null){y=$.bN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bQ(x)
$.bN[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bO[z]=x
return x}if(v==="-"){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eX(a,x)
if(v==="*")throw H.b(P.cp(z))
if(init.leafTags[z]===true){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eX(a,x)},
eX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bQ:function(a){return J.cD(a,!1,null,!!a.$isp)},
lp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bQ(z)
else return J.cD(z,c,null,null)},
lj:function(){if(!0===$.cC)return
$.cC=!0
H.lk()},
lk:function(){var z,y,x,w,v,u,t,s
$.bN=Object.create(null)
$.bO=Object.create(null)
H.lf()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eY.$1(v)
if(u!=null){t=H.lp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lf:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.av(C.H,H.av(C.M,H.av(C.v,H.av(C.v,H.av(C.L,H.av(C.I,H.av(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eS=new H.lg(v)
$.eF=new H.lh(u)
$.eY=new H.li(t)},
av:function(a,b){return a(b)||b},
lt:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
io:{"^":"d;a,b,c,d,e,f,r,x",p:{
ip:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aM(z)
y=z[0]
x=z[1]
return new H.io(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iU:{"^":"d;a,b,c,d,e,f",
U:function(a){var z,y,x
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
a6:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e6:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ib:{"^":"I;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
dK:function(a,b){return new H.ib(a,b==null?null:b.method)}}},
hI:{"^":"I;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
cf:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hI(a,y,z?null:b.receiver)}}},
iW:{"^":"I;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lv:{"^":"f:0;a",
$1:function(a){if(!!J.m(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ev:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaT:1},
f:{"^":"d;",
k:function(a){return"Closure '"+H.aS(this).trim()+"'"},
gcN:function(){return this},
gcN:function(){return this}},
dW:{"^":"f;"},
iD:{"^":"dW;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c_:{"^":"dW;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c_))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aR(this.a)
else y=typeof z!=="object"?J.aa(z):H.aR(z)
return(y^H.aR(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
p:{
c0:function(a){return a.a},
d5:function(a){return a.c},
bn:function(a){var z,y,x,w,v
z=new H.c_("self","target","receiver","name")
y=J.aM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fV:{"^":"I;a",
k:function(a){return this.a},
p:{
d6:function(a,b){return new H.fV("CastError: "+H.c(P.c5(a))+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")}}},
iu:{"^":"I;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
iv:function(a){return new H.iu(a)}}},
eb:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.aa(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.eb&&J.P(this.a,b.a)}},
dz:{"^":"b5;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gK:function(a){return new H.dB(this,[H.B(this,0)])},
aq:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bA(y,b)}else return this.ev(b)},
ev:function(a){var z=this.d
if(z==null)return!1
return this.aT(this.aI(z,J.aa(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ap(z,b)
x=y==null?null:y.gaj()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ap(w,b)
x=y==null?null:y.gaj()
return x}else return this.ew(b)},
ew:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aI(z,J.aa(a)&0x3ffffff)
x=this.aT(y,a)
if(x<0)return
return y[x].gaj()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aL()
this.b=z}this.bs(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aL()
this.c=y}this.bs(y,b,c)}else{x=this.d
if(x==null){x=this.aL()
this.d=x}w=J.aa(b)&0x3ffffff
v=this.aI(x,w)
if(v==null)this.aP(x,w,[this.aB(b,c)])
else{u=this.aT(v,b)
if(u>=0)v[u].saj(c)
else v.push(this.aB(b,c))}}},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bt()}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.M(this))
z=z.c}},
bs:function(a,b,c){var z=this.ap(a,b)
if(z==null)this.aP(a,b,this.aB(b,c))
else z.saj(c)},
bt:function(){this.r=this.r+1&67108863},
aB:function(a,b){var z,y
z=new H.hQ(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bt()
return z},
aT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].geu(),b))return y
return-1},
k:function(a){return P.dF(this)},
ap:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
aP:function(a,b,c){a[b]=c},
dD:function(a,b){delete a[b]},
bA:function(a,b){return this.ap(a,b)!=null},
aL:function(){var z=Object.create(null)
this.aP(z,"<non-identifier-key>",z)
this.dD(z,"<non-identifier-key>")
return z}},
hQ:{"^":"d;eu:a<,aj:b@,c,d"},
dB:{"^":"bq;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.al(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.b(P.M(z))
y=y.c}}},
al:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lg:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
lh:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
li:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
l6:function(a){return J.aM(H.v(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bL:function(a){var z,y,x
if(!!J.m(a).$isn)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.a8(b,a))},
i7:{"^":"h;","%":"DataView;ArrayBufferView;cj|ep|eq|dH|er|es|am"},
cj:{"^":"i7;",
gi:function(a){return a.length},
$isn:1,
$asn:I.ax,
$isp:1,
$asp:I.ax},
dH:{"^":"eq;",
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a7(b,a,a.length)
a[b]=c},
$asbs:function(){return[P.aw]},
$asj:function(){return[P.aw]},
$isi:1,
$asi:function(){return[P.aw]},
"%":"Float64Array"},
am:{"^":"es;",
j:function(a,b,c){H.a7(b,a,a.length)
a[b]=c},
$asbs:function(){return[P.G]},
$asj:function(){return[P.G]},
$isi:1,
$asi:function(){return[P.G]}},
i6:{"^":"dH;",$isc6:1,"%":"Float32Array"},
mW:{"^":"am;",
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mX:{"^":"am;",
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
$ishB:1,
"%":"Int32Array"},
mY:{"^":"am;",
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mZ:{"^":"am;",
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
n_:{"^":"am;",
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
n0:{"^":"am;",
gi:function(a){return a.length},
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
n1:{"^":"am;",
gi:function(a){return a.length},
h:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ep:{"^":"cj+j;"},
eq:{"^":"ep+bs;"},
er:{"^":"cj+j;"},
es:{"^":"er+bs;"}}],["","",,P,{"^":"",
j4:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kZ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a2(new P.j6(z),1)).observe(y,{childList:true})
return new P.j5(z,y,x)}else if(self.setImmediate!=null)return P.l_()
return P.l0()},
nN:[function(a){self.scheduleImmediate(H.a2(new P.j7(a),0))},"$1","kZ",4,0,6],
nO:[function(a){self.setImmediate(H.a2(new P.j8(a),0))},"$1","l_",4,0,6],
nP:[function(a){P.kn(0,a)},"$1","l0",4,0,6],
kS:function(a,b){if(H.eO(a,{func:1,args:[P.b6,P.b6]})){b.toString
return a}else{b.toString
return a}},
ho:function(a,b,c){var z
if(a==null)a=new P.bw()
z=$.r
if(z!==C.d)z.toString
z=new P.H(0,z,null,[c])
z.bw(a,b)
return z},
hp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.H(0,$.r,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hr(z,b,!1,y)
try{for(s=0,r=0;s<4;++s){w=a[s]
v=r
w.b2(new P.hq(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.H(0,$.r,null,[null])
r.bv(C.x)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.K(p)
t=H.a9(p)
if(z.b===0||!1)return P.ho(u,t,null)
else{z.c=u
z.d=t}}return y},
kL:function(a,b,c){$.r.toString
a.M(b,c)},
kQ:function(){var z,y
for(;z=$.at,z!=null;){$.aW=null
y=z.b
$.at=y
if(y==null)$.aV=null
z.a.$0()}},
o_:[function(){$.cx=!0
try{P.kQ()}finally{$.aW=null
$.cx=!1
if($.at!=null)$.$get$cs().$1(P.eI())}},"$0","eI",0,0,3],
eD:function(a){var z=new P.ef(a,null)
if($.at==null){$.aV=z
$.at=z
if(!$.cx)$.$get$cs().$1(P.eI())}else{$.aV.b=z
$.aV=z}},
kW:function(a){var z,y,x
z=$.at
if(z==null){P.eD(a)
$.aW=$.aV
return}y=new P.ef(a,null)
x=$.aW
if(x==null){y.b=z
$.aW=y
$.at=y}else{y.b=x.b
x.b=y
$.aW=y
if(y.b==null)$.aV=y}},
lr:function(a){var z=$.r
if(C.d===z){P.au(null,null,C.d,a)
return}z.toString
P.au(null,null,z,z.bR(a))},
kV:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.K(u)
y=H.a9(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aF(x)
w=t
v=x.ga7()
c.$2(w,v)}}},
kF:function(a,b,c,d){var z=a.bY(0)
if(!!J.m(z).$isae&&z!==$.$get$c7())z.cM(new P.kI(b,c,d))
else b.M(c,d)},
kG:function(a,b){return new P.kH(a,b)},
kJ:function(a,b,c){var z=a.bY(0)
if(!!J.m(z).$isae&&z!==$.$get$c7())z.cM(new P.kK(b,c))
else b.a9(c)},
bM:function(a,b,c,d,e){var z={}
z.a=d
P.kW(new P.kT(z,e))},
eB:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
eC:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
kU:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
au:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bR(d):c.e2(d)
P.eD(d)},
j6:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j5:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j7:{"^":"f:1;a",
$0:function(){this.a.$0()}},
j8:{"^":"f:1;a",
$0:function(){this.a.$0()}},
km:{"^":"d;a,b,c",
dw:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a2(new P.ko(this,b),0),a)
else throw H.b(P.t("`setTimeout()` not found."))},
p:{
kn:function(a,b){var z=new P.km(!0,null,0)
z.dw(a,b)
return z}}},
ko:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ae:{"^":"d;$ti"},
hr:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.M(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.M(z.c,z.d)}},
hq:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.a(x,z)
x[z]=a
if(y===0)this.c.bz(x)}else if(z.b===0&&!this.e)this.c.M(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lI:{"^":"d;$ti"},
eh:{"^":"d;$ti",
e9:function(a,b){if(a==null)a=new P.bw()
if(this.a.a!==0)throw H.b(P.ba("Future already completed"))
$.r.toString
this.M(a,b)},
e8:function(a){return this.e9(a,null)}},
cr:{"^":"eh;a,$ti",
ai:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.ba("Future already completed"))
z.bv(b)},
M:function(a,b){this.a.bw(a,b)}},
kh:{"^":"eh;a,$ti",
ai:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.ba("Future already completed"))
z.a9(b)},
M:function(a,b){this.a.M(a,b)}},
ei:{"^":"d;aN:a<,b,c,d,e,$ti",
gdY:function(){return this.b.b},
gcg:function(){return(this.c&1)!==0},
ges:function(){return(this.c&2)!==0},
gcf:function(){return this.c===8},
eq:function(a){return this.b.b.b0(this.d,a)},
ez:function(a){if(this.c!==6)return!0
return this.b.b.b0(this.d,J.aF(a))},
ep:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eO(z,{func:1,args:[P.d,P.aT]}))return x.eH(z,y.gR(a),a.ga7())
else return x.b0(z,y.gR(a))},
er:function(){return this.b.b.cq(this.d)}},
H:{"^":"d;bH:a<,b,dO:c<,$ti",
gdI:function(){return this.a===2},
gaJ:function(){return this.a>=4},
b2:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.kS(b,z)}y=new P.H(0,z,null,[null])
x=b==null?1:3
this.aC(new P.ei(null,y,x,a,b,[H.B(this,0),null]))
return y},
av:function(a){return this.b2(a,null)},
cM:function(a){var z,y
z=$.r
y=new P.H(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.B(this,0)
this.aC(new P.ei(null,y,8,a,null,[z,z]))
return y},
aC:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaJ()){y.aC(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.au(null,null,z,new P.js(this,a))}},
bE:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaN()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaJ()){v.bE(a)
return}this.a=v.a
this.c=v.c}z.a=this.aO(a)
y=this.b
y.toString
P.au(null,null,y,new P.jz(z,this))}},
ag:function(){var z=this.c
this.c=null
return this.aO(z)},
aO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaN()
z.a=y}return y},
a9:function(a){var z,y,x
z=this.$ti
y=H.bd(a,"$isae",z,"$asae")
if(y){z=H.bd(a,"$isH",z,null)
if(z)P.bJ(a,this)
else P.ej(a,this)}else{x=this.ag()
this.a=4
this.c=a
P.as(this,x)}},
bz:function(a){var z=this.ag()
this.a=4
this.c=a
P.as(this,z)},
M:[function(a,b){var z=this.ag()
this.a=8
this.c=new P.bm(a,b)
P.as(this,z)},function(a){return this.M(a,null)},"eW","$2","$1","gaD",4,2,13],
bv:function(a){var z=H.bd(a,"$isae",this.$ti,"$asae")
if(z){this.dB(a)
return}this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.ju(this,a))},
dB:function(a){var z=H.bd(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.jy(this,a))}else P.bJ(a,this)
return}P.ej(a,this)},
bw:function(a,b){var z
this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.jt(this,a,b))},
$isae:1,
p:{
jr:function(a,b){var z=new P.H(0,$.r,null,[b])
z.a=4
z.c=a
return z},
ej:function(a,b){var z,y,x
b.a=1
try{a.b2(new P.jv(b),new P.jw(b))}catch(x){z=H.K(x)
y=H.a9(x)
P.lr(new P.jx(b,z,y))}},
bJ:function(a,b){var z
for(;a.gdI();)a=a.c
if(a.gaJ()){z=b.ag()
b.a=a.a
b.c=a.c
P.as(b,z)}else{z=b.c
b.a=2
b.c=a
a.bE(z)}},
as:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aF(v)
t=v.ga7()
y.toString
P.bM(null,null,y,u,t)}return}for(;b.gaN()!=null;b=s){s=b.a
b.a=null
P.as(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcg()||b.gcf()){q=b.gdY()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aF(v)
t=v.ga7()
y.toString
P.bM(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gcf())new P.jC(z,x,b,w).$0()
else if(y){if(b.gcg())new P.jB(x,b,r).$0()}else if(b.ges())new P.jA(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.m(y).$isae){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aO(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bJ(y,o)
return}}o=b.b
b=o.ag()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
js:{"^":"f:1;a,b",
$0:function(){P.as(this.a,this.b)}},
jz:{"^":"f:1;a,b",
$0:function(){P.as(this.b,this.a.a)}},
jv:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.a9(a)}},
jw:{"^":"f:14;a",
$2:function(a,b){this.a.M(a,b)},
$1:function(a){return this.$2(a,null)}},
jx:{"^":"f:1;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
ju:{"^":"f:1;a,b",
$0:function(){this.a.bz(this.b)}},
jy:{"^":"f:1;a,b",
$0:function(){P.bJ(this.b,this.a)}},
jt:{"^":"f:1;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
jC:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.er()}catch(w){y=H.K(w)
x=H.a9(w)
if(this.d){v=J.aF(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bm(y,x)
u.a=!0
return}if(!!J.m(z).$isae){if(z instanceof P.H&&z.gbH()>=4){if(z.gbH()===8){v=this.b
v.b=z.gdO()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.av(new P.jD(t))
v.a=!1}}},
jD:{"^":"f:0;a",
$1:function(a){return this.a}},
jB:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eq(this.c)}catch(x){z=H.K(x)
y=H.a9(x)
w=this.a
w.b=new P.bm(z,y)
w.a=!0}}},
jA:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ez(z)===!0&&w.e!=null){v=this.b
v.b=w.ep(z)
v.a=!1}}catch(u){y=H.K(u)
x=H.a9(u)
w=this.a
v=J.aF(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bm(y,x)
s.a=!0}}},
ef:{"^":"d;a,b"},
bC:{"^":"d;$ti",
v:function(a,b){var z,y
z={}
y=new P.H(0,$.r,null,[null])
z.a=null
z.a=this.aV(new P.iM(z,this,b,y),!0,new P.iN(y),y.gaD())
return y},
gi:function(a){var z,y
z={}
y=new P.H(0,$.r,null,[P.G])
z.a=0
this.aV(new P.iO(z),!0,new P.iP(z,y),y.gaD())
return y},
gel:function(a){var z,y
z={}
y=new P.H(0,$.r,null,[H.bf(this,"bC",0)])
z.a=null
z.a=this.aV(new P.iI(z,this,y),!0,new P.iJ(y),y.gaD())
return y}},
iM:{"^":"f;a,b,c,d",
$1:function(a){P.kV(new P.iK(this.c,a),new P.iL(),P.kG(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.bf(this.b,"bC",0)]}}},
iK:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iL:{"^":"f:0;",
$1:function(a){}},
iN:{"^":"f:1;a",
$0:function(){this.a.a9(null)}},
iO:{"^":"f:0;a",
$1:function(a){++this.a.a}},
iP:{"^":"f:1;a,b",
$0:function(){this.b.a9(this.a.a)}},
iI:{"^":"f;a,b,c",
$1:function(a){P.kJ(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.bf(this.b,"bC",0)]}}},
iJ:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.cc()
throw H.b(x)}catch(w){z=H.K(w)
y=H.a9(w)
P.kL(this.a,z,y)}}},
iH:{"^":"d;$ti"},
dT:{"^":"d;$ti"},
kI:{"^":"f:1;a,b,c",
$0:function(){return this.a.M(this.b,this.c)}},
kH:{"^":"f:15;a,b",
$2:function(a,b){P.kF(this.a,this.b,a,b)}},
kK:{"^":"f:1;a,b",
$0:function(){return this.a.a9(this.b)}},
bm:{"^":"d;R:a>,a7:b<",
k:function(a){return H.c(this.a)},
$isI:1},
ku:{"^":"d;"},
kT:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bw()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.aG(y)
throw x}},
k0:{"^":"ku;",
eI:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.eB(null,null,this,a)}catch(x){z=H.K(x)
y=H.a9(x)
P.bM(null,null,this,z,y)}},
eJ:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.eC(null,null,this,a,b)}catch(x){z=H.K(x)
y=H.a9(x)
P.bM(null,null,this,z,y)}},
e2:function(a){return new P.k2(this,a)},
bR:function(a){return new P.k1(this,a)},
e3:function(a){return new P.k3(this,a)},
h:function(a,b){return},
cq:function(a){if($.r===C.d)return a.$0()
return P.eB(null,null,this,a)},
b0:function(a,b){if($.r===C.d)return a.$1(b)
return P.eC(null,null,this,a,b)},
eH:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.kU(null,null,this,a,b,c)}},
k2:{"^":"f:1;a,b",
$0:function(){return this.a.cq(this.b)}},
k1:{"^":"f:1;a,b",
$0:function(){return this.a.eI(this.b)}},
k3:{"^":"f:0;a,b",
$1:function(a){return this.a.eJ(this.b,a)}}}],["","",,P,{"^":"",
N:function(){return new H.dz(0,null,null,null,null,null,0,[null,null])},
dC:function(a){return H.l7(a,new H.dz(0,null,null,null,null,null,0,[null,null]))},
a0:function(a,b,c,d){return new P.jO(0,null,null,null,null,null,0,[d])},
hC:function(a,b,c){var z,y
if(P.cy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aX()
y.push(a)
try{P.kP(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.dU(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
cb:function(a,b,c){var z,y,x
if(P.cy(a))return b+"..."+c
z=new P.cn(b)
y=$.$get$aX()
y.push(a)
try{x=z
x.a=P.dU(x.gaa(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gaa()+c
y=z.gaa()
return y.charCodeAt(0)==0?y:y},
cy:function(a){var z,y
for(z=0;y=$.$get$aX(),z<y.length;++z)if(a===y[z])return!0
return!1},
kP:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.c(z.gC(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.t()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.t();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
cg:function(a,b){var z,y
z=P.a0(null,null,null,b)
for(y=J.b1(a);y.t();)z.A(0,y.gC(y))
return z},
dF:function(a){var z,y,x
z={}
if(P.cy(a))return"{...}"
y=new P.cn("")
try{$.$get$aX().push(a)
x=y
x.a=x.gaa()+"{"
z.a=!0
J.cO(a,new P.hU(z,y))
z=y
z.a=z.gaa()+"}"}finally{z=$.$get$aX()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gaa()
return z.charCodeAt(0)==0?z:z},
jO:{"^":"jF;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.cv(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dC(b)},
dC:function(a){var z=this.d
if(z==null)return!1
return this.aH(z[this.aE(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.b(P.M(this))
z=z.b}},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cw()
this.b=z}return this.bu(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cw()
this.c=y}return this.bu(y,b)}else return this.dz(0,b)},
dz:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cw()
this.d=z}y=this.aE(b)
x=z[y]
if(x==null)z[y]=[this.aM(b)]
else{if(this.aH(x,b)>=0)return!1
x.push(this.aM(b))}return!0},
cp:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.dL(0,b)},
dL:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aE(b)]
x=this.aH(y,b)
if(x<0)return!1
this.bJ(y.splice(x,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aK()}},
bu:function(a,b){if(a[b]!=null)return!1
a[b]=this.aM(b)
return!0},
bF:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bJ(z)
delete a[b]
return!0},
aK:function(){this.r=this.r+1&67108863},
aM:function(a){var z,y
z=new P.jP(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aK()
return z},
bJ:function(a){var z,y
z=a.gdJ()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aK()},
aE:function(a){return J.aa(a)&0x3ffffff},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].gdE(),b))return y
return-1},
p:{
cw:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jP:{"^":"d;dE:a<,b,dJ:c<"},
cv:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jF:{"^":"iw;$ti"},
mI:{"^":"d;$ti"},
dD:{"^":"eo;$ti",$isi:1},
j:{"^":"d;$ti",
gI:function(a){return new H.dE(a,this.gi(a),0,null,[H.bg(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.q(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.b(P.M(a))}},
en:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.q(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.M(a))}return y},
bf:function(a,b){return H.dV(a,b,null,H.bg(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.v([],[H.bg(this,a,"j",0)])
y=this.gi(a)
x=J.L(b)
if(typeof y!=="number")return y.l()
if(typeof x!=="number")return H.q(x)
C.b.si(z,y+x)
C.b.an(z,0,this.gi(a),a)
C.b.an(z,this.gi(a),z.length,b)
return z},
cd:function(a,b,c,d){var z
P.dN(b,c,this.gi(a),null,null,null)
for(z=b;z<c;++z)this.j(a,z,d)},
k:function(a){return P.cb(a,"[","]")}},
b5:{"^":"Q;$ti"},
hU:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
Q:{"^":"d;$ti",
v:function(a,b){var z,y
for(z=J.b1(this.gK(a));z.t();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.L(this.gK(a))},
k:function(a){return P.dF(a)}},
ix:{"^":"d;$ti",
N:function(a,b){var z
for(z=J.b1(b);z.t();)this.A(0,z.gC(z))},
k:function(a){return P.cb(this,"{","}")},
v:function(a,b){var z
for(z=new P.cv(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
iw:{"^":"ix;$ti"},
eo:{"^":"d+j;$ti"}}],["","",,P,{"^":"",
kR:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.X(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.K(x)
w=String(y)
throw H.b(new P.hm(w,null,null))}w=P.bK(z)
return w},
bK:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jK(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.bK(a[z])
return a},
jK:{"^":"b5;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dK(b):y}},
gi:function(a){return this.b==null?this.c.a:this.ao().length},
gK:function(a){var z
if(this.b==null){z=this.c
return new H.dB(z,[H.B(z,0)])}return new P.jL(this)},
v:function(a,b){var z,y,x,w
if(this.b==null)return this.c.v(0,b)
z=this.ao()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.bK(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(P.M(this))}},
ao:function(){var z=this.c
if(z==null){z=H.v(Object.keys(this.a),[P.k])
this.c=z}return z},
dK:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.bK(this.a[a])
return this.b[a]=z},
$asb5:function(){return[P.k,null]},
$asQ:function(){return[P.k,null]}},
jL:{"^":"aQ;a",
gi:function(a){var z=this.a
return z.gi(z)},
q:function(a,b){var z=this.a
if(z.b==null)z=z.gK(z).q(0,b)
else{z=z.ao()
if(b>>>0!==b||b>=z.length)return H.a(z,b)
z=z[b]}return z},
gI:function(a){var z=this.a
if(z.b==null){z=z.gK(z)
z=z.gI(z)}else{z=z.ao()
z=new J.d2(z,z.length,0,null,[H.B(z,0)])}return z},
$asbq:function(){return[P.k]},
$asaQ:function(){return[P.k]},
$asb4:function(){return[P.k]}},
d8:{"^":"d;$ti"},
dd:{"^":"dT;$ti"},
hJ:{"^":"d8;a,b",
ef:function(a,b,c){var z=P.kR(b,this.geg().a)
return z},
ee:function(a,b){return this.ef(a,b,null)},
geg:function(){return C.P},
$asd8:function(){return[P.d,P.k]}},
hK:{"^":"dd;a",
$asdT:function(){return[P.k,P.d]},
$asdd:function(){return[P.k,P.d]}}}],["","",,P,{"^":"",
hh:function(a){var z=J.m(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aS(a)+"'"},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hh(a)},
dq:function(a){return new P.jm(a)},
Z:function(a){H.bi(H.c(a))},
cz:{"^":"d;"},
"+bool":0,
c3:{"^":"d;dX:a<,b",
geA:function(){return this.a},
d3:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.b(P.bY("DateTime is outside valid range: "+this.geA()))},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.c3))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.c.W(this.a,b.gdX())},
gB:function(a){var z=this.a
return(z^C.c.bG(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.h5(H.im(this))
y=P.b2(H.ik(this))
x=P.b2(H.ig(this))
w=P.b2(H.ih(this))
v=P.b2(H.ij(this))
u=P.b2(H.il(this))
t=P.h6(H.ii(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
h5:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b2:function(a){if(a>=10)return""+a
return"0"+a}}},
aw:{"^":"aY;"},
"+double":0,
b3:{"^":"d;af:a<",
l:function(a,b){return new P.b3(C.c.l(this.a,b.gaf()))},
G:function(a,b){return new P.b3(this.a-b.gaf())},
a5:function(a,b){return C.c.a5(this.a,b.gaf())},
am:function(a,b){return C.c.am(this.a,b.gaf())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.b3))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.c.W(this.a,b.gaf())},
k:function(a){var z,y,x,w,v
z=new P.he()
y=this.a
if(y<0)return"-"+new P.b3(0-y).k(0)
x=z.$1(C.c.O(y,6e7)%60)
w=z.$1(C.c.O(y,1e6)%60)
v=new P.hd().$1(y%1e6)
return""+C.c.O(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
hc:function(a,b,c,d,e,f){return new P.b3(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hd:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
he:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"d;",
ga7:function(){return H.a9(this.$thrownJsError)}},
bw:{"^":"I;",
k:function(a){return"Throw of null."}},
ab:{"^":"I;a,b,c,d",
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gaG()+y+x
if(!this.a)return w
v=this.gaF()
u=P.c5(this.b)
return w+v+": "+H.c(u)},
p:{
bY:function(a){return new P.ab(!1,null,null,a)},
d1:function(a,b,c){return new P.ab(!0,a,b,c)},
fQ:function(a){return new P.ab(!1,null,a,"Must not be null")}}},
dM:{"^":"ab;e,f,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bx:function(a,b,c){return new P.dM(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.dM(b,c,!0,a,d,"Invalid value")},
dN:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.b(P.ar(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.b(P.ar(b,a,c,"end",f))
return b}return c}}},
hA:{"^":"ab;e,i:f>,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){if(J.b_(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
z:function(a,b,c,d,e){var z=e!=null?e:J.L(b)
return new P.hA(b,z,!0,a,c,"Index out of range")}}},
iX:{"^":"I;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
t:function(a){return new P.iX(a)}}},
iV:{"^":"I;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
cp:function(a){return new P.iV(a)}}},
bB:{"^":"I;a",
k:function(a){return"Bad state: "+this.a},
p:{
ba:function(a){return new P.bB(a)}}},
h0:{"^":"I;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.c5(z))+"."},
p:{
M:function(a){return new P.h0(a)}}},
dR:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga7:function(){return},
$isI:1},
h4:{"^":"I;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
m4:{"^":"d;"},
jm:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
hm:{"^":"d;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
G:{"^":"aY;"},
"+int":0,
b4:{"^":"d;$ti",
b4:["cZ",function(a,b){return new H.ee(this,b,[H.bf(this,"b4",0)])}],
v:function(a,b){var z
for(z=this.gI(this);z.t();)b.$1(z.gC(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.t();)++y
return y},
ga6:function(a){var z,y
z=this.gI(this)
if(!z.t())throw H.b(H.cc())
y=z.gC(z)
if(z.t())throw H.b(H.hE())
return y},
q:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.fQ("index"))
if(b<0)H.a_(P.ar(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.t();){x=z.gC(z)
if(b===y)return x;++y}throw H.b(P.z(b,this,"index",null,y))},
k:function(a){return P.hC(this,"(",")")}},
hF:{"^":"d;$ti"},
i:{"^":"d;$ti"},
"+List":0,
ci:{"^":"d;$ti"},
b6:{"^":"d;",
gB:function(a){return P.d.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aY:{"^":"d;"},
"+num":0,
d:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.aR(this)},
k:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.k(this)}},
aT:{"^":"d;"},
k:{"^":"d;"},
"+String":0,
cn:{"^":"d;aa:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dU:function(a,b,c){var z=J.b1(b)
if(!z.t())return a
if(c.length===0){do a+=H.c(z.gC(z))
while(z.t())}else{a+=H.c(z.gC(z))
for(;z.t();)a=a+c+H.c(z.gC(z))}return a}}}}],["","",,W,{"^":"",
hf:function(a,b,c){var z,y
z=document.body
y=(z&&C.t).X(z,a,b,c)
y.toString
z=new H.ee(new W.W(y),new W.hg(),[W.u])
return z.ga6(z)},
dp:function(a){return"wheel"},
aI:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fs(a)
if(typeof y==="string")z=a.tagName}catch(x){H.K(x)}return z},
jj:function(a,b){return document.createElement(a)},
an:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
en:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eA:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jd(a)
if(!!J.m(z).$isC)return z
return}else return a},
kM:function(a){var z
if(!!J.m(a).$isdl)return a
z=new P.j1([],[],!1)
z.c=!0
return z.b3(a)},
eE:function(a){var z=$.r
if(z===C.d)return a
return z.e3(a)},
w:{"^":"ap;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lw:{"^":"cm;m:x=,n:y=,D:z=","%":"Accelerometer|LinearAccelerationSensor"},
lx:{"^":"h;i:length=","%":"AccessibleNodeList"},
ly:{"^":"w;ar:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lz:{"^":"w;ar:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lE:{"^":"w;ar:href}","%":"HTMLBaseElement"},
fT:{"^":"h;","%":"Response;Body"},
bZ:{"^":"w;",$isbZ:1,"%":"HTMLBodyElement"},
lF:{"^":"w;L:name=","%":"HTMLButtonElement"},
c1:{"^":"w;H:height},J:width}",
cO:function(a,b,c){var z=a.getContext(b,P.l1(c,null))
return z},
$isc1:1,
"%":"HTMLCanvasElement"},
lG:{"^":"h;",
aw:function(a){return P.Y(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lH:{"^":"u;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lJ:{"^":"a4;a2:style=","%":"CSSFontFaceRule"},
lK:{"^":"a4;a2:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lL:{"^":"a4;a2:style=","%":"CSSPageRule"},
lM:{"^":"bo;i:length=","%":"CSSPerspective"},
lN:{"^":"c2;m:x=,n:y=","%":"CSSPositionValue"},
lO:{"^":"bo;m:x=,n:y=,D:z=","%":"CSSRotation"},
a4:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lP:{"^":"bo;m:x=,n:y=,D:z=","%":"CSSScale"},
h2:{"^":"jb;i:length=",
bx:function(a,b){var z,y
z=$.$get$de()
y=z[b]
if(typeof y==="string")return y
y=this.dU(a,b)
z[b]=y
return y},
dU:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h7()+b
if(z in a)return z
return b},
dR:function(a,b,c,d){a.setProperty(b,c,d)},
sH:function(a,b){a.height=b},
sJ:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h3:{"^":"d;",
sem:function(a,b){this.dR(a,this.bx(a,"float"),b,"")}},
lQ:{"^":"a4;a2:style=","%":"CSSStyleRule"},
c2:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bo:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lR:{"^":"c2;i:length=","%":"CSSTransformValue"},
lS:{"^":"bo;m:x=,n:y=,D:z=","%":"CSSTranslation"},
lT:{"^":"c2;i:length=","%":"CSSUnparsedValue"},
lU:{"^":"a4;a2:style=","%":"CSSViewportRule"},
lV:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lW:{"^":"h;m:x=,n:y=,D:z=","%":"DeviceAcceleration"},
h8:{"^":"w;","%":"HTMLDivElement"},
dl:{"^":"u;",
gaW:function(a){return new W.bc(a,"mousedown",!1,[W.R])},
gaX:function(a){return new W.bc(a,"mousemove",!1,[W.R])},
gaY:function(a){return new W.bc(a,"mouseup",!1,[W.R])},
gaZ:function(a){return new W.bc(a,W.dp(a),!1,[W.aU])},
$isdl:1,
"%":"Document|HTMLDocument|XMLDocument"},
lX:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
lY:{"^":"h9;",
gV:function(a){return a.a},
gT:function(a){return a.b},
ga0:function(a){return a.c},
"%":"DOMMatrix"},
h9:{"^":"h;",
gV:function(a){return a.a},
gT:function(a){return a.b},
ga0:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
lZ:{"^":"ha;",
gal:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z},
"%":"DOMPoint"},
ha:{"^":"h;",
gal:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z},
"%":";DOMPointReadOnly"},
m_:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.ag]},
$isp:1,
$asp:function(){return[P.ag]},
$asj:function(){return[P.ag]},
$isi:1,
$asi:function(){return[P.ag]},
$asl:function(){return[P.ag]},
"%":"ClientRectList|DOMRectList"},
hb:{"^":"h;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gJ(a))+" x "+H.c(this.gH(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.m(b)
if(!z.$isag)return!1
return a.left===z.gci(b)&&a.top===z.gcu(b)&&this.gJ(a)===z.gJ(b)&&this.gH(a)===z.gH(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gJ(a)
w=this.gH(a)
return W.en(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcv:function(a){return new P.af(a.left,a.top,[null])},
gH:function(a){return a.height},
gci:function(a){return a.left},
gcu:function(a){return a.top},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isag:1,
$asag:I.ax,
"%":";DOMRectReadOnly"},
m0:{"^":"jh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.k]},
$isp:1,
$asp:function(){return[P.k]},
$asj:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"DOMStringList"},
m1:{"^":"h;i:length=","%":"DOMTokenList"},
ap:{"^":"u;a2:style=,bD:namespaceURI=,eK:tagName=",
ge0:function(a){return new W.ji(a)},
k:function(a){return a.localName},
X:["ay",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dn
if(z==null){z=H.v([],[W.dI])
y=new W.dJ(z)
z.push(W.ek(null))
z.push(W.ew())
$.dn=y
d=y}else d=z
z=$.dm
if(z==null){z=new W.ez(d)
$.dm=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation.createHTMLDocument("")
$.ac=y
$.c4=y.createRange()
y=$.ac
y.toString
x=y.createElement("base")
J.fD(x,z.baseURI)
$.ac.head.appendChild(x)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ac
if(!!this.$isbZ)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ac.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.w(C.R,a.tagName)){$.c4.selectNodeContents(w)
v=$.c4.createContextualFragment(b)}else{w.innerHTML=b
v=$.ac.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ac.body
if(w==null?z!=null:w!==z)J.cU(w)
c.bd(v)
document.adoptNode(v)
return v},function(a,b,c){return this.X(a,b,c,null)},"ec",null,null,"geX",5,5,null],
cR:function(a,b,c,d){a.textContent=null
a.appendChild(this.X(a,b,c,d))},
cQ:function(a,b){return this.cR(a,b,null,null)},
b5:function(a){return a.getBoundingClientRect()},
gaW:function(a){return new W.ah(a,"mousedown",!1,[W.R])},
gaX:function(a){return new W.ah(a,"mousemove",!1,[W.R])},
gaY:function(a){return new W.ah(a,"mouseup",!1,[W.R])},
gaZ:function(a){return new W.ah(a,W.dp(a),!1,[W.aU])},
$isap:1,
"%":";Element"},
hg:{"^":"f:0;",
$1:function(a){return!!J.m(a).$isap}},
m2:{"^":"w;H:height},L:name=,J:width}","%":"HTMLEmbedElement"},
m3:{"^":"ad;R:error=","%":"ErrorEvent"},
ad:{"^":"h;",
au:function(a){return a.preventDefault()},
$isad:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
C:{"^":"h;",
bN:["cX",function(a,b,c,d){if(c!=null)this.dA(a,b,c,!1)}],
dA:function(a,b,c,d){return a.addEventListener(b,H.a2(c,1),!1)},
dM:function(a,b,c,d){return a.removeEventListener(b,H.a2(c,1),!1)},
$isC:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;et|eu|ex|ey"},
mn:{"^":"w;L:name=","%":"HTMLFieldSetElement"},
mo:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.br]},
$isp:1,
$asp:function(){return[W.br]},
$asj:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$asl:function(){return[W.br]},
"%":"FileList"},
mp:{"^":"C;R:error=","%":"FileReader"},
mq:{"^":"C;R:error=,i:length=","%":"FileWriter"},
ms:{"^":"h;a2:style=","%":"FontFace"},
mt:{"^":"C;",
eY:function(a,b,c){return a.forEach(H.a2(b,3),c)},
v:function(a,b){b=H.a2(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mv:{"^":"w;i:length=,L:name=","%":"HTMLFormElement"},
mx:{"^":"cm;m:x=,n:y=,D:z=","%":"Gyroscope"},
my:{"^":"h;i:length=","%":"History"},
mz:{"^":"jH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.u]},
$isp:1,
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$asl:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ht:{"^":"hu;",
eZ:function(a,b,c,d,e,f){return a.open(b,c)},
eC:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
hu:{"^":"C;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mA:{"^":"w;H:height},L:name=,J:width}","%":"HTMLIFrameElement"},
c8:{"^":"h;",$isc8:1,"%":"ImageBitmap"},
c9:{"^":"h;",$isc9:1,"%":"ImageData"},
ca:{"^":"w;H:height},J:width}",$isca:1,"%":"HTMLImageElement"},
mC:{"^":"w;H:height},L:name=,J:width}","%":"HTMLInputElement"},
bu:{"^":"ec;",
geS:function(a){return a.which},
$isbu:1,
"%":"KeyboardEvent"},
mH:{"^":"w;ar:href}","%":"HTMLLinkElement"},
mJ:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
mK:{"^":"cm;m:x=,n:y=,D:z=","%":"Magnetometer"},
mL:{"^":"w;L:name=","%":"HTMLMapElement"},
hX:{"^":"w;R:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mO:{"^":"h;i:length=","%":"MediaList"},
mP:{"^":"C;",
P:function(a){return a.clone()},
"%":"MediaStream"},
mQ:{"^":"C;aS:enabled=",
P:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mR:{"^":"C;",
bN:function(a,b,c,d){if(J.P(b,"message"))a.start()
this.cX(a,b,c,!1)},
"%":"MessagePort"},
mS:{"^":"w;L:name=","%":"HTMLMetaElement"},
mT:{"^":"jQ;",
h:function(a,b){return P.Y(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gK:function(a){var z=H.v([],[P.k])
this.v(a,new W.hZ(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.k,null]},
"%":"MIDIInputMap"},
hZ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mU:{"^":"jR;",
h:function(a,b){return P.Y(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gK:function(a){var z=H.v([],[P.k])
this.v(a,new W.i_(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
i_:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mV:{"^":"jT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asl:function(){return[W.bv]},
"%":"MimeTypeArray"},
R:{"^":"ec;bX:button=",
geB:function(a){return new P.af(a.movementX,a.movementY,[null])},
gcn:function(a){var z,y,x
if(!!a.offsetX)return new P.af(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.m(W.eA(z)).$isap)throw H.b(P.t("offsetX is only supported on elements"))
y=W.eA(z)
z=[null]
x=new P.af(a.clientX,a.clientY,z).G(0,J.ft(J.fv(y)))
return new P.af(J.cW(x.a),J.cW(x.b),z)}},
$isR:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
W:{"^":"dD;a",
ga6:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.ba("No elements"))
if(y>1)throw H.b(P.ba("More than one element"))
return z.firstChild},
N:function(a,b){var z,y,x,w
z=J.m(b)
if(!!z.$isW){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gI(b),y=this.a;z.t();)y.appendChild(z.gC(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.dr(z,z.length,-1,null,[H.bg(C.S,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$asdD:function(){return[W.u]},
$asj:function(){return[W.u]},
$asi:function(){return[W.u]},
$aseo:function(){return[W.u]}},
u:{"^":"C;at:parentNode=,b_:previousSibling=",
gcm:function(a){return new W.W(a)},
eE:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cY(a):z},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
n2:{"^":"h;",
eD:[function(a){return a.previousNode()},"$0","gb_",1,0,4],
"%":"NodeIterator"},
i8:{"^":"jV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.u]},
$isp:1,
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$asl:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
n5:{"^":"w;H:height},L:name=,J:width}","%":"HTMLObjectElement"},
n7:{"^":"w;L:name=","%":"HTMLOutputElement"},
n8:{"^":"w;L:name=","%":"HTMLParamElement"},
b7:{"^":"h;i:length=","%":"Plugin"},
na:{"^":"jZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b7]},
$isp:1,
$asp:function(){return[W.b7]},
$asj:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$asl:function(){return[W.b7]},
"%":"PluginArray"},
ne:{"^":"h;",
b5:function(a){return a.getBoundingClientRect()},
"%":"Range"},
nk:{"^":"k4;",
h:function(a,b){return P.Y(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gK:function(a){var z=H.v([],[P.k])
this.v(a,new W.it(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.k,null]},
"%":"RTCStatsReport"},
it:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
nl:{"^":"w;i:length=,L:name=","%":"HTMLSelectElement"},
cm:{"^":"C;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
nm:{"^":"ad;R:error=","%":"SensorErrorEvent"},
nn:{"^":"w;L:name=","%":"HTMLSlotElement"},
no:{"^":"eu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bz]},
$isp:1,
$asp:function(){return[W.bz]},
$asj:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$asl:function(){return[W.bz]},
"%":"SourceBufferList"},
np:{"^":"ka;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bA]},
$isp:1,
$asp:function(){return[W.bA]},
$asj:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$asl:function(){return[W.bA]},
"%":"SpeechGrammarList"},
nq:{"^":"ad;R:error=","%":"SpeechRecognitionError"},
b9:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
ns:{"^":"kd;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gK:function(a){var z=H.v([],[P.k])
this.v(a,new W.iG(z))
return z},
gi:function(a){return a.length},
$asQ:function(){return[P.k,P.k]},
"%":"Storage"},
iG:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
iR:{"^":"w;",
X:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
z=W.hf("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.W(y).N(0,J.fq(z))
return y},
"%":"HTMLTableElement"},
nv:{"^":"w;",
X:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.X(z.createElement("table"),b,c,d)
z.toString
z=new W.W(z)
x=z.ga6(z)
x.toString
z=new W.W(x)
w=z.ga6(z)
y.toString
w.toString
new W.W(y).N(0,new W.W(w))
return y},
"%":"HTMLTableRowElement"},
nw:{"^":"w;",
X:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.X(z.createElement("table"),b,c,d)
z.toString
z=new W.W(z)
x=z.ga6(z)
y.toString
x.toString
new W.W(y).N(0,new W.W(x))
return y},
"%":"HTMLTableSectionElement"},
dX:{"^":"w;",$isdX:1,"%":"HTMLTemplateElement"},
nx:{"^":"w;L:name=","%":"HTMLTextAreaElement"},
nz:{"^":"kl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bF]},
$isp:1,
$asp:function(){return[W.bF]},
$asj:function(){return[W.bF]},
$isi:1,
$asi:function(){return[W.bF]},
$asl:function(){return[W.bF]},
"%":"TextTrackCueList"},
nA:{"^":"ey;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bE]},
$isp:1,
$asp:function(){return[W.bE]},
$asj:function(){return[W.bE]},
$isi:1,
$asi:function(){return[W.bE]},
$asl:function(){return[W.bE]},
"%":"TextTrackList"},
nB:{"^":"h;i:length=","%":"TimeRanges"},
nC:{"^":"kq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bG]},
$isp:1,
$asp:function(){return[W.bG]},
$asj:function(){return[W.bG]},
$isi:1,
$asi:function(){return[W.bG]},
$asl:function(){return[W.bG]},
"%":"TouchList"},
nD:{"^":"h;i:length=","%":"TrackDefaultList"},
nG:{"^":"h;",
f_:[function(a){return a.parentNode()},"$0","gat",1,0,4],
eD:[function(a){return a.previousNode()},"$0","gb_",1,0,4],
"%":"TreeWalker"},
ec:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nI:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
nK:{"^":"h;m:x=,D:z=","%":"VRStageBoundsPoint"},
cq:{"^":"hX;H:height},J:width}",$iscq:1,"%":"HTMLVideoElement"},
nL:{"^":"C;i:length=","%":"VideoTrackList"},
aU:{"^":"R;",
geh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.t("deltaY is not supported"))},
$isaU:1,
"%":"WheelEvent"},
iZ:{"^":"C;",
ge_:function(a){var z,y
z=P.aY
y=new P.H(0,$.r,null,[z])
this.dG(a)
this.dN(a,W.eE(new W.j_(new P.kh(y,[z]))))
return y},
dN:function(a,b){return a.requestAnimationFrame(H.a2(b,1))},
dG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
j_:{"^":"f:0;a",
$1:function(a){this.a.ai(0,a)}},
nM:{"^":"C;"},
nQ:{"^":"u;L:name=,bD:namespaceURI=","%":"Attr"},
nR:{"^":"kw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$asj:function(){return[W.a4]},
$isi:1,
$asi:function(){return[W.a4]},
$asl:function(){return[W.a4]},
"%":"CSSRuleList"},
nS:{"^":"hb;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.m(b)
if(!z.$isag)return!1
return a.left===z.gci(b)&&a.top===z.gcu(b)&&a.width===z.gJ(b)&&a.height===z.gH(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.en(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcv:function(a){return new P.af(a.left,a.top,[null])},
gH:function(a){return a.height},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nT:{"^":"ky;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bt]},
$isp:1,
$asp:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$asl:function(){return[W.bt]},
"%":"GamepadList"},
nW:{"^":"kA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.u]},
$isp:1,
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$asl:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nX:{"^":"fT;",
P:function(a){return a.clone()},
"%":"Request"},
nY:{"^":"kC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b9]},
$isp:1,
$asp:function(){return[W.b9]},
$asj:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$asl:function(){return[W.b9]},
"%":"SpeechRecognitionResultList"},
nZ:{"^":"kE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bD]},
$isp:1,
$asp:function(){return[W.bD]},
$asj:function(){return[W.bD]},
$isi:1,
$asi:function(){return[W.bD]},
$asl:function(){return[W.bD]},
"%":"StyleSheetList"},
j9:{"^":"b5;dH:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gK(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gK:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.v([],[P.k])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.e(v)
if(u.gbD(v)==null)y.push(u.gL(v))}return y},
$asb5:function(){return[P.k,P.k]},
$asQ:function(){return[P.k,P.k]}},
ji:{"^":"j9;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gK(this).length}},
bc:{"^":"bC;a,b,c,$ti",
aV:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.B(this,0))}},
ah:{"^":"bc;a,b,c,$ti"},
jk:{"^":"iH;a,b,c,d,e,$ti",
ds:function(a,b,c,d,e){this.dV()},
bY:function(a){if(this.b==null)return
this.dW()
this.b=null
this.d=null
return},
dV:function(){var z=this.d
if(z!=null&&this.a<=0)J.f7(this.b,this.c,z,!1)},
dW:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.f6(x,this.c,z,!1)}},
p:{
ai:function(a,b,c,d,e){var z=c==null?null:W.eE(new W.jl(c))
z=new W.jk(0,a,b,z,!1,[e])
z.ds(a,b,c,!1,e)
return z}}},
jl:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
ct:{"^":"d;cH:a<",
dt:function(a){var z,y
z=$.$get$cu()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.Q[y],W.ld())
for(y=0;y<12;++y)z.j(0,C.p[y],W.le())}},
ab:function(a){return $.$get$el().w(0,W.aI(a))},
a3:function(a,b,c){var z,y,x
z=W.aI(a)
y=$.$get$cu()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
ek:function(a){var z,y
z=document.createElement("a")
y=new W.k5(z,window.location)
y=new W.ct(y)
y.dt(a)
return y},
nU:[function(a,b,c,d){return!0},"$4","ld",16,0,9],
nV:[function(a,b,c,d){var z,y,x,w,v
z=d.gcH()
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
return z},"$4","le",16,0,9]}},
l:{"^":"d;$ti",
gI:function(a){return new W.dr(a,this.gi(a),-1,null,[H.bg(this,a,"l",0)])}},
dJ:{"^":"d;a",
ab:function(a){return C.b.bO(this.a,new W.ia(a))},
a3:function(a,b,c){return C.b.bO(this.a,new W.i9(a,b,c))}},
ia:{"^":"f:0;a",
$1:function(a){return a.ab(this.a)}},
i9:{"^":"f:0;a,b,c",
$1:function(a){return a.a3(this.a,this.b,this.c)}},
k6:{"^":"d;cH:d<",
dv:function(a,b,c,d){var z,y,x
this.a.N(0,c)
z=b.b4(0,new W.k7())
y=b.b4(0,new W.k8())
this.b.N(0,z)
x=this.c
x.N(0,C.x)
x.N(0,y)},
ab:function(a){return this.a.w(0,W.aI(a))},
a3:["d0",function(a,b,c){var z,y
z=W.aI(a)
y=this.c
if(y.w(0,H.c(z)+"::"+b))return this.d.dZ(c)
else if(y.w(0,"*::"+b))return this.d.dZ(c)
else{y=this.b
if(y.w(0,H.c(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.c(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}]},
k7:{"^":"f:0;",
$1:function(a){return!C.b.w(C.p,a)}},
k8:{"^":"f:0;",
$1:function(a){return C.b.w(C.p,a)}},
ki:{"^":"k6;e,a,b,c,d",
a3:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cP(a).a.getAttribute("template")==="")return this.e.w(0,b)
return!1},
p:{
ew:function(){var z=P.k
z=new W.ki(P.cg(C.o,z),P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
z.dv(null,new H.hV(C.o,new W.kj(),[H.B(C.o,0),null]),["TEMPLATE"],null)
return z}}},
kj:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.c(a)}},
kg:{"^":"d;",
ab:function(a){var z=J.m(a)
if(!!z.$isdP)return!1
z=!!z.$isA
if(z&&W.aI(a)==="foreignObject")return!1
if(z)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.i.cU(b,"on"))return!1
return this.ab(a)}},
dr:{"^":"d;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aE(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
jc:{"^":"d;a",$isC:1,p:{
jd:function(a){if(a===window)return a
else return new W.jc(a)}}},
dI:{"^":"d;"},
n3:{"^":"d;"},
nH:{"^":"d;"},
k5:{"^":"d;a,b"},
ez:{"^":"d;a",
bd:function(a){new W.kt(this).$2(a,null)},
ah:function(a,b){if(b==null)J.cU(a)
else b.removeChild(a)},
dQ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cP(a)
x=y.gdH().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.K(t)}v="element unprintable"
try{v=J.aG(a)}catch(t){H.K(t)}try{u=W.aI(a)
this.dP(a,b,z,v,u,y,x)}catch(t){if(H.K(t) instanceof P.ab)throw t
else{this.ah(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dP:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ah(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ab(a)){this.ah(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.ah(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gK(f)
y=H.v(z.slice(0),[H.B(z,0)])
for(x=f.gK(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a3(a,J.fH(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+w+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.m(a).$isdX)this.bd(a.content)}},
kt:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ah(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fr(z)}catch(w){H.K(w)
v=z
if(x){u=J.e(v)
if(u.gat(v)!=null){u.gat(v)
u.gat(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
jb:{"^":"h+h3;"},
je:{"^":"h+j;"},
jf:{"^":"je+l;"},
jg:{"^":"h+j;"},
jh:{"^":"jg+l;"},
jn:{"^":"h+j;"},
jo:{"^":"jn+l;"},
jG:{"^":"h+j;"},
jH:{"^":"jG+l;"},
jQ:{"^":"h+Q;"},
jR:{"^":"h+Q;"},
jS:{"^":"h+j;"},
jT:{"^":"jS+l;"},
jU:{"^":"h+j;"},
jV:{"^":"jU+l;"},
jY:{"^":"h+j;"},
jZ:{"^":"jY+l;"},
k4:{"^":"h+Q;"},
et:{"^":"C+j;"},
eu:{"^":"et+l;"},
k9:{"^":"h+j;"},
ka:{"^":"k9+l;"},
kd:{"^":"h+Q;"},
kk:{"^":"h+j;"},
kl:{"^":"kk+l;"},
ex:{"^":"C+j;"},
ey:{"^":"ex+l;"},
kp:{"^":"h+j;"},
kq:{"^":"kp+l;"},
kv:{"^":"h+j;"},
kw:{"^":"kv+l;"},
kx:{"^":"h+j;"},
ky:{"^":"kx+l;"},
kz:{"^":"h+j;"},
kA:{"^":"kz+l;"},
kB:{"^":"h+j;"},
kC:{"^":"kB+l;"},
kD:{"^":"h+j;"},
kE:{"^":"kD+l;"}}],["","",,P,{"^":"",
eL:function(a){return a},
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.N()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
l1:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cO(a,new P.l2(z))
return z},
l3:function(a){var z,y
z=new P.H(0,$.r,null,[null])
y=new P.cr(z,[null])
a.then(H.a2(new P.l4(y),1))["catch"](H.a2(new P.l5(y),1))
return z},
dk:function(){var z=$.dj
if(z==null){z=J.bS(window.navigator.userAgent,"Opera",0)
$.dj=z}return z},
h7:function(){var z,y
z=$.dg
if(z!=null)return z
y=$.dh
if(y==null){y=J.bS(window.navigator.userAgent,"Firefox",0)
$.dh=y}if(y)z="-moz-"
else{y=$.di
if(y==null){y=P.dk()!==!0&&J.bS(window.navigator.userAgent,"Trident/",0)
$.di=y}if(y)z="-ms-"
else z=P.dk()===!0?"-o-":"-webkit-"}$.dg=z
return z},
j0:{"^":"d;",
ce:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
b3:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.c3(y,!0)
x.d3(y,!0)
return x}if(a instanceof RegExp)throw H.b(P.cp("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.l3(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.ce(a)
x=this.b
u=x.length
if(v>=u)return H.a(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.N()
z.a=t
if(v>=u)return H.a(x,v)
x[v]=t
this.eo(a,new P.j2(z,this))
return z.a}if(a instanceof Array){s=a
v=this.ce(s)
x=this.b
if(v>=x.length)return H.a(x,v)
t=x[v]
if(t!=null)return t
u=J.F(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.a(x,v)
x[v]=t
if(typeof r!=="number")return H.q(r)
x=J.ay(t)
q=0
for(;q<r;++q)x.j(t,q,this.b3(u.h(s,q)))
return t}return a}},
j2:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.b3(b)
J.f5(z,a,y)
return y}},
l2:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
j1:{"^":"j0;a,b,c",
eo:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
b.$2(w,a[w])}}},
l4:{"^":"f:0;a",
$1:function(a){return this.a.ai(0,a)}},
l5:{"^":"f:0;a",
$1:function(a){return this.a.e8(a)}}}],["","",,P,{"^":"",nj:{"^":"C;R:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nE:{"^":"C;R:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ls:function(a){return Math.sqrt(a)},
em:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
af:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
F:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.af))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gB:function(a){var z,y
z=J.aa(this.a)
y=J.aa(this.b)
return P.jJ(P.em(P.em(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.af(y,C.a.l(z,x),this.$ti)},
G:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.G()
if(typeof x!=="number")return H.q(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.G()
if(typeof y!=="number")return H.q(y)
return new P.af(z-x,w-y,this.$ti)}},
k_:{"^":"d;$ti"},
ag:{"^":"k_;$ti"}}],["","",,P,{"^":"",m5:{"^":"A;m:x=,n:y=","%":"SVGFEBlendElement"},m6:{"^":"A;m:x=,n:y=","%":"SVGFEColorMatrixElement"},m7:{"^":"A;m:x=,n:y=","%":"SVGFEComponentTransferElement"},m8:{"^":"A;m:x=,n:y=","%":"SVGFECompositeElement"},m9:{"^":"A;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},ma:{"^":"A;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},mb:{"^":"A;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},mc:{"^":"A;m:x=,n:y=","%":"SVGFEFloodElement"},md:{"^":"A;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},me:{"^":"A;m:x=,n:y=","%":"SVGFEImageElement"},mf:{"^":"A;m:x=,n:y=","%":"SVGFEMergeElement"},mg:{"^":"A;m:x=,n:y=","%":"SVGFEMorphologyElement"},mh:{"^":"A;m:x=,n:y=","%":"SVGFEOffsetElement"},mi:{"^":"A;m:x=,n:y=,D:z=","%":"SVGFEPointLightElement"},mj:{"^":"A;m:x=,n:y=","%":"SVGFESpecularLightingElement"},mk:{"^":"A;m:x=,n:y=,D:z=","%":"SVGFESpotLightElement"},ml:{"^":"A;m:x=,n:y=","%":"SVGFETileElement"},mm:{"^":"A;m:x=,n:y=","%":"SVGFETurbulenceElement"},mr:{"^":"A;m:x=,n:y=","%":"SVGFilterElement"},mu:{"^":"aK;m:x=,n:y=","%":"SVGForeignObjectElement"},hs:{"^":"aK;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aK:{"^":"A;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mB:{"^":"aK;m:x=,n:y=","%":"SVGImageElement"},mG:{"^":"jN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dA]},
$isi:1,
$asi:function(){return[P.dA]},
$asl:function(){return[P.dA]},
"%":"SVGLengthList"},mM:{"^":"A;m:x=,n:y=","%":"SVGMaskElement"},mN:{"^":"h;V:a=,T:b=,a0:c=","%":"SVGMatrix"},n4:{"^":"jX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dL]},
$isi:1,
$asi:function(){return[P.dL]},
$asl:function(){return[P.dL]},
"%":"SVGNumberList"},n9:{"^":"A;m:x=,n:y=","%":"SVGPatternElement"},nb:{"^":"h;m:x=,n:y=","%":"SVGPoint"},nc:{"^":"h;i:length=","%":"SVGPointList"},nf:{"^":"h;m:x=,n:y=","%":"SVGRect"},ng:{"^":"hs;m:x=,n:y=","%":"SVGRectElement"},dP:{"^":"A;",$isdP:1,"%":"SVGScriptElement"},nt:{"^":"kf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"SVGStringList"},A:{"^":"ap;",
X:function(a,b,c,d){var z,y,x,w,v,u
z=H.v([],[W.dI])
z.push(W.ek(null))
z.push(W.ew())
z.push(new W.kg())
c=new W.ez(new W.dJ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.t).ec(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.W(w)
u=z.ga6(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaW:function(a){return new W.ah(a,"mousedown",!1,[W.R])},
gaX:function(a){return new W.ah(a,"mousemove",!1,[W.R])},
gaY:function(a){return new W.ah(a,"mouseup",!1,[W.R])},
gaZ:function(a){return new W.ah(a,"mousewheel",!1,[W.aU])},
$isA:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nu:{"^":"aK;m:x=,n:y=","%":"SVGSVGElement"},iS:{"^":"aK;","%":"SVGTextPathElement;SVGTextContentElement"},ny:{"^":"iS;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nF:{"^":"ks;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.e_]},
$isi:1,
$asi:function(){return[P.e_]},
$asl:function(){return[P.e_]},
"%":"SVGTransformList"},nJ:{"^":"aK;m:x=,n:y=","%":"SVGUseElement"},jM:{"^":"h+j;"},jN:{"^":"jM+l;"},jW:{"^":"h+j;"},jX:{"^":"jW+l;"},ke:{"^":"h+j;"},kf:{"^":"ke+l;"},kr:{"^":"h+j;"},ks:{"^":"kr+l;"}}],["","",,P,{"^":"",lA:{"^":"h;i:length=","%":"AudioBuffer"},lB:{"^":"ja;",
h:function(a,b){return P.Y(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gK:function(a){var z=H.v([],[P.k])
this.v(a,new P.fR(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.k,null]},
"%":"AudioParamMap"},fR:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},lC:{"^":"h;aS:enabled=","%":"AudioTrack"},lD:{"^":"C;i:length=","%":"AudioTrackList"},fS:{"^":"C;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n6:{"^":"fS;i:length=","%":"OfflineAudioContext"},ja:{"^":"h+Q;"}}],["","",,P,{"^":"",nh:{"^":"h;",
bM:function(a,b){return a.activeTexture(b)},
bP:function(a,b,c){return a.attachShader(b,c)},
bQ:function(a,b,c){return a.bindBuffer(b,c)},
bS:function(a,b,c){return a.bindFramebuffer(b,c)},
bT:function(a,b,c){return a.bindTexture(b,c)},
bU:function(a,b){return a.blendEquation(b)},
bV:function(a,b,c){return a.blendFunc(b,c)},
bW:function(a,b,c,d){return a.bufferData(b,c,d)},
bZ:function(a,b){return a.clear(b)},
c_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c3:function(a,b){return a.createShader(b)},
c4:function(a){return a.createTexture()},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.Y(a.getContextAttributes())},
b6:function(a){return a.getError()},
b7:function(a,b){return a.getProgramInfoLog(b)},
b8:function(a,b,c){return a.getProgramParameter(b,c)},
b9:function(a,b){return a.getShaderInfoLog(b)},
ba:function(a,b,c){return a.getShaderParameter(b,c)},
bb:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
co:function(a,b,c){return a.pixelStorei(b,c)},
be:function(a,b,c){return a.shaderSource(b,c)},
bg:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.m(g)
if(!!z.$isc9)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eL(g))
return}if(!!z.$isca)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscq)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc8)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bY("Incorrect number or type of arguments"))},
cr:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},ni:{"^":"h;",
e1:function(a,b){return a.beginTransformFeedback(b)},
e4:function(a,b){return a.bindVertexArray(b)},
ed:function(a){return a.createVertexArray()},
ei:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ej:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ek:function(a){return a.endTransformFeedback()},
eQ:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eR:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bM:function(a,b){return a.activeTexture(b)},
bP:function(a,b,c){return a.attachShader(b,c)},
bQ:function(a,b,c){return a.bindBuffer(b,c)},
bS:function(a,b,c){return a.bindFramebuffer(b,c)},
bT:function(a,b,c){return a.bindTexture(b,c)},
bU:function(a,b){return a.blendEquation(b)},
bV:function(a,b,c){return a.blendFunc(b,c)},
bW:function(a,b,c,d){return a.bufferData(b,c,d)},
bZ:function(a,b){return a.clear(b)},
c_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c3:function(a,b){return a.createShader(b)},
c4:function(a){return a.createTexture()},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.Y(a.getContextAttributes())},
b6:function(a){return a.getError()},
b7:function(a,b){return a.getProgramInfoLog(b)},
b8:function(a,b,c){return a.getProgramParameter(b,c)},
b9:function(a,b){return a.getShaderInfoLog(b)},
ba:function(a,b,c){return a.getShaderParameter(b,c)},
bb:function(a,b,c){return a.getUniformLocation(b,c)},
cj:function(a,b){return a.linkProgram(b)},
co:function(a,b,c){return a.pixelStorei(b,c)},
be:function(a,b,c){return a.shaderSource(b,c)},
bg:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b1:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.m(g)
if(!!z.$isc9)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eL(g))
return}if(!!z.$isca)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscq)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc8)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bY("Incorrect number or type of arguments"))},
cr:function(a,b,c,d,e,f,g){return this.b1(a,b,c,d,e,f,g,null,null,null)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
cw:function(a,b,c){return a.uniform1f(b,c)},
cz:function(a,b,c){return a.uniform1fv(b,c)},
cA:function(a,b,c){return a.uniform1i(b,c)},
cB:function(a,b,c){return a.uniform1iv(b,c)},
cC:function(a,b,c){return a.uniform2fv(b,c)},
cD:function(a,b,c){return a.uniform3fv(b,c)},
cE:function(a,b,c){return a.uniform4fv(b,c)},
cF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cI:function(a,b){return a.useProgram(b)},
cJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nr:{"^":"kc;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return P.Y(a.item(b))},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.ci]},
$isi:1,
$asi:function(){return[P.ci]},
$asl:function(){return[P.ci]},
"%":"SQLResultSetRowList"},kb:{"^":"h+j;"},kc:{"^":"kb+l;"}}],["","",,G,{"^":"",
j3:function(a){var z,y,x,w
z=H.v(a.split("\n"),[P.k])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.b.ak(z,"\n")},
eg:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.c3(a,b)
z.be(a,y,c)
z.c0(a,y)
x=z.ba(a,y,35713)
if(x!=null&&J.P(x,!1)){w=z.b9(a,y)
P.Z("E:Compilation failed:")
P.Z("E:"+G.j3(c))
P.Z("E:Failure:")
P.Z(C.i.l("E:",w))
throw H.b(w)}return y},
ds:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bV(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bW(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.cS(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
hk:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bV(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.bW(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hl:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bV(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bW(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.cS(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.fu(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hj:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aE(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.aE(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.aE(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.aE(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
jE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.al(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.G]],v=[P.aw],u=[T.V],t=[T.o],s=[T.S];y.t();){r=y.d
if(!x.aq(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.eP>0)H.bi("I: "+q)
continue}p=z.h(0,r)
switch($.$get$a1().h(0,r).a){case"vec2":b.ad(r,G.hk(H.bj(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.ad(r,G.ds(H.bj(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.ad(r,G.hl(H.bj(p,"$isi",u,"$asi"),null),4)
break
case"float":b.ad(r,new Float32Array(H.bL(H.bj(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.ad(r,G.hj(H.bj(p,"$isi",w,"$asi"),null),4)
break}}},
du:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.N()
w=J.fh(z.a)
v=new G.hY(z,w,4,x,y,null,0,-1,null,null,P.N(),C.i.l("meshdata:",a),!1,!0)
u=G.ds(c.d,null)
x.j(0,"aPosition",J.bT(z.a))
v.ch=u
v.bo("aPosition",u,3)
t=$.$get$a1().h(0,"aPosition")
if(t==null)H.a_("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bk(z.a,w)
z.cc(0,s,0)
z.cK(0,x.h(0,"aPosition"),s,t.bp(),5126,!1,0,0)
y=c.d8()
v.y=J.bT(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bL(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bL(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bL(y))
v.Q=5125}J.bk(z.a,w)
y=v.y
x=v.cx
J.bR(z.a,34963,y)
J.cK(z.a,34963,x,35048)
G.jE(c,v)
return v},
aq:{"^":"d;aS:c>"},
bI:{"^":"aq;d,a,b,c",
az:function(){return this.d},
k:function(a){var z,y,x,w
z=H.v(["{"+H.c(new H.eb(H.la(this),null))+"}["+this.a+"]"],[P.k])
for(y=this.d,x=new H.al(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.b.ak(z,"\n")}},
fU:{"^":"dQ;"},
fW:{"^":"d;a,b",
cc:function(a,b,c){J.fn(this.a,b)
if(c>0)J.fN(this.a,b,c)},
cK:function(a,b,c,d,e,f,g,h){J.bR(this.a,34962,b)
J.fO(this.a,c,d,e,!1,g,h)}},
hn:{"^":"d;a,b,c,d,e"},
aJ:{"^":"d;V:a>,T:b>,a0:c>",p:{
D:function(a,b,c){return new G.aJ(a,b,c)}}},
hi:{"^":"d;V:a>,T:b>,a0:c>,d"},
dt:{"^":"d;a,b,c,d,e",
a8:function(a){switch($.$get$a1().h(0,a).a){case"vec2":this.e.j(0,a,H.v([],[T.S]))
break
case"vec3":this.e.j(0,a,H.v([],[T.o]))
break
case"vec4":this.e.j(0,a,H.v([],[T.V]))
break
case"float":this.e.j(0,a,H.v([],[P.aw]))
break
case"uvec4":this.e.j(0,a,H.v([],[[P.i,P.G]]))
break}},
bn:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.aJ(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.y)(a),++w)z.push(J.cL(a[w]))},
bj:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(b[x].P(0))},
bk:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(J.cL(b[x]))},
bl:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x)z.push(b[x].P(0))},
d1:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.hi(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.y)(a),++w)z.push(a[w].P(0))},
d8:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.v(x,[P.G])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.a(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.a(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.a(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.a(w,u)
w[u]=x
r=u+1
if(r>=v)return H.a(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.a(w,r)
w[r]=p
r=u+3
if(r>=v)return H.a(w,r)
w[r]=x
x=u+4
if(x>=v)return H.a(w,x)
w[x]=p
p=u+5
if(p>=v)return H.a(w,p)
w[p]=q.d
u+=6}return w},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.al(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$a1().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.ak(z," ")}},
hP:{"^":"aq;"},
iC:{"^":"hP;x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,a,b,c",
d7:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.a(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+4
w=this.y.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+5
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+6
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+8
z=this.z.a
y=z[0]
if(w>=x)return H.a(a,w)
a[w]=y
y=b+9
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+10
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+12
w=this.Q.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+13
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+14
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+7
if(w>=x)return H.a(a,w)
a[w]=this.ch
w=b+11
z=Math.cos(this.cx)
if(w>=x)return H.a(a,w)
a[w]=z
z=b+15
if(z>=x)return H.a(a,z)
a[z]=this.cy},
k:function(a){return"SL: p:"+H.c(this.x)+"  d:"+H.c(this.y)+"  r:"+this.ch+"  a:"+H.c(this.cx)}},
hw:{"^":"bI;x,y,z,d,a,b,c",
az:function(){var z,y,x
z=this.y
y=this.z
G.hx(z,y,this.x)
x=this.d
x.j(0,"uLightDescs",z)
x.j(0,"uLightTypes",y)
return x},
p:{
hx:function(a,b,c){var z,y,x,w
C.q.cd(a,0,a.length,0)
C.q.cd(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.y)(c),++x){w=c[x]
if(w.c){w.d7(a,y*16)
if(y>=4)return H.a(b,y)
b[y]=w.d;++y}}}}},
dZ:{"^":"d;a,b,c"},
dY:{"^":"d;a,b,c"},
hW:{"^":"bI;d,a,b,c",
dd:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$d3())
z.j(0,"cStencilFunc",$.$get$dS())},
p:{
dG:function(a){var z=new G.hW(P.N(),a,!1,!0)
z.dd(a)
return z}}},
hY:{"^":"aq;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bo:function(a,b,c){var z,y
C.i.by(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bR(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
d9:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ad:function(a,b,c){var z,y,x,w,v
z=J.cM(a,0)===105
if(z&&this.z===0)this.z=C.c.a_(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bT(x.a))
this.bo(a,b,c)
w=$.$get$a1().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bk(x.a,this.e)
x.cc(0,v,z?1:0)
x.cK(0,y.h(0,a),v,w.bp(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.al(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.c(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.ak(y,"  ")}},
id:{"^":"bI;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
d2:function(a,b){var z
if(typeof a!=="number")return a.eU()
if(typeof b!=="number")return H.q(b)
z=a/b
if(this.z===z)return
this.z=z
this.br()},
br:function(){var z,y,x,w,v,u
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
az:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.o(new Float32Array(3))
u.ac(x,w,v)
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
y=J.m(t)
x=!!y.$isV
q=x?y.gal(t):1
if(!!y.$iso){p=y.gm(t)
s=y.gn(t)
r=y.gD(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gD(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.q(t)
x=z[4]
if(typeof s!=="number")return H.q(s)
w=z[8]
if(typeof r!=="number")return H.q(r)
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
c.cl(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
is:{"^":"aq;d,e,f,r,x,y,z,Q,ch,a,b,c",
dg:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.j(0,t,J.cT(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
x.j(0,t,J.cT(w.a,v,t))}},
dk:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.al(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.aq(0,v))x.push(v)}for(z=this.x,y=new P.cv(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.w(0,v))x.push(v)}return x},
dq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.al(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cM(t,0)){case 117:if(w.aq(0,t)){s=b.h(0,t)
if(v.aq(0,t))H.bi("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$a1().h(0,t)
if(r==null)H.a_("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bX(x.a,q,s)
else if(!!J.m(s).$ishB)J.fL(x.a,q,s)
break
case"float":if(r.c===0)J.fJ(x.a,q,s)
else if(!!J.m(s).$isc6)J.fK(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ak(s,"$isE").a
J.d0(x.a,q,!1,p)}else if(!!J.m(s).$isc6)J.d0(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ak(s,"$isa5").a
J.d_(x.a,q,!1,p)}else if(!!J.m(s).$isc6)J.d_(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cZ(o,q,H.ak(s,"$isV").a)
else J.cZ(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cY(o,q,H.ak(s,"$iso").a)
else J.cY(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cX(o,q,H.ak(s,"$isS").a)
else J.cX(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.q(p)
J.cI(x.a,33984+p)
p=H.ak(s,"$isco").b
J.b0(x.a,3553,p)
p=this.ch
J.bX(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.q(p)
J.cI(x.a,33984+p)
p=H.ak(s,"$isco").b
J.b0(x.a,34067,p)
p=this.ch
J.bX(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bi("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.P(s,!0)
o=x.a
if(p)J.bl(o,2929)
else J.bU(o,2929)
break
case"cStencilFunc":H.ak(s,"$isdZ")
p=s.a
o=x.a
if(p===1281)J.bU(o,2960)
else{J.bl(o,2960)
o=s.b
n=s.c
J.fE(x.a,p,o,n)}break
case"cDepthWrite":J.fi(x.a,s)
break
case"cBlendEquation":H.ak(s,"$isdY")
p=s.a
o=x.a
if(p===1281)J.bU(o,3042)
else{J.bl(o,3042)
o=s.b
n=s.c
J.fb(x.a,o,n)
J.fa(x.a,p)}break}++u
break}}m=P.hc(0,0,0,Date.now()-new P.c3(z,!1).a,0,0)
""+u
m.k(0)},
d6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fM(z.a,this.r)
this.ch=0
this.z.a4(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.y)(b),++x){w=b[x]
this.dq(w.a,w.az())}y=this.Q
y.a4(0)
for(v=a.cy,u=new H.al(v,v.r,null,null,[H.B(v,0)]),u.c=v.e;u.t();)y.A(0,u.d)
t=this.dk()
if(t.length!==0)P.Z("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(t)))
y=a.d
v=a.e
J.bk(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.d9()
u=a.Q
r=a.z
if(s)J.f8(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.fm(q,v,y,u,0,r)
else J.fl(q,v,y,u,0)}else{u=z.a
if(r>1)J.fk(u,v,0,y,r)
else J.fj(u,v,0,y)}if(s)J.fo(z.a)},
p:{
dO:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.a0(null,null,null,P.k)
y=c.b
x=d.b
w=c.f
v=J.ff(b.a)
u=G.eg(b.a,35633,y)
J.cJ(b.a,v,u)
t=G.eg(b.a,35632,x)
J.cJ(b.a,v,t)
if(w.length>0)J.fI(b.a,v,w,35980)
J.fB(b.a,v)
if(J.fA(b.a,v,35714)!==!0)H.a_(J.fz(b.a,v))
z=new G.is(b,c,d,v,P.cg(c.c,null),P.N(),P.N(),z,null,a,!1,!0)
z.dg(a,b,c,d)
return z}}},
x:{"^":"d;a,b,c",
bp:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iy:{"^":"d;a,b,c,d,e,f,r,x",
bi:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.y)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.b.ax(y)},
ae:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.y)(a),++x)y.push(a[x])
C.b.ax(y)},
bm:function(a){var z,y
for(z=this.e,y=0;y<3;++y)z.push(a[y])
C.b.ax(z)},
bq:function(a,b){this.b=this.dr(!0,a,b)},
aA:function(a){return this.bq(a,null)},
dr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
s=$.$get$a1().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$a1().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$a1().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){q=z[u]
s=$.$get$a1().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
if(c!=null)C.b.N(w,c)
w.push("void main(void) {")
C.b.N(w,b)
w.push("}")
return C.b.ak(w,"\n")},
p:{
by:function(a){return new G.iy(a,null,[],[],[],[],0,P.N())}}},
dQ:{"^":"aq;",
ey:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.o(new Float32Array(3))
b.ac(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
t=v.G(0,a)
t.E(0)
s=b.c5(t)
s.E(0)
r=t.c5(s)
r.E(0)
u=s.aR(v)
q=r.aR(v)
v=t.aR(v)
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
ck:function(a){return this.ey(a,null)}},
iT:{"^":"d;a,b,c,d,e,f,r",
da:function(a,b){var z=this.e
if(z!==1)J.fG(a.a,b,34046,z)
J.cV(a.a,b,10240,this.r)
J.cV(a.a,b,10241,this.f)}},
co:{"^":"d;",
k:function(a){return"Texture["+H.c(this.a)+", "+this.c+"]"}},
hy:{"^":"co;f,a,b,c,d,e",
dh:function(a){var z,y
z=this.d
y=this.c
J.b0(z.a,y,this.b)
J.fF(z.a,y,0,6408,6408,5121,a)}}}],["","",,Y,{"^":"",
jq:function(a){var z,y,x,w,v
z=J.F(a)
y=z.gi(a)
if(typeof y!=="number")return H.q(y)
y=new Array(y)
y.fixed$length=Array
x=H.v(y,[P.aw])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.q(v)
if(!(w<v))break
v=z.h(a,w)
if(typeof v==="number"&&Math.floor(v)===v){v=J.ao(z.h(a,w))
if(w>=y)return H.a(x,w)
x[w]=v}else{v=z.h(a,w)
if(typeof v==="number"){v=z.h(a,w)
if(w>=y)return H.a(x,w)
x[w]=v}}++w}return x},
jI:function(a){var z,y,x,w,v
z=J.F(a)
y=z.gi(a)
if(typeof y!=="number")return H.q(y)
y=new Array(y)
y.fixed$length=Array
x=H.v(y,[P.G])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.q(v)
if(!(w<v))break
v=z.h(a,w)
if(w>=y)return H.a(x,w)
x[w]=v;++w}return x},
jp:function(a){var z,y,x
z=J.F(a)
y=z.h(a,"skinIndices")
z.h(a,"skinWeights")
if(y==null||J.L(y)===0)return 0
z=J.L(z.h(a,"vertices"))
if(typeof z!=="number")return z.a_()
z=C.a.O(z,3)
x=J.L(y)
if(typeof x!=="number")return x.a_()
z=C.a.a_(x,z)
P.Z("Skin multiplier is "+H.c(z))
return z},
hz:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=[]
y=Y.jp(a8)
x=J.F(a8)
w=Y.jI(x.h(a8,"faces"))
v=w.length
P.Z("faces: "+v)
u=Y.db(x.h(a8,"vertices"))
t=Y.db(x.h(a8,"normals"))
s=y===0
r=s?null:Y.dc(y,x.h(a8,"skinIndices"))
q=s?null:Y.dc(y,Y.jq(x.h(a8,"skinWeights")))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.gm(o)+o.gn(o)+o.gD(o)+o.gal(o)
if(n<0.98||n>1.02)H.bi("bad vector: "+o.k(0))}m=Y.h1(J.aE(x.h(a8,"uvs"),0))
for(x=y>0,s=u.length,l=m.length,k=l>0,j=t.length,i=j>0,h=0;h<v;){g=h+1
if(h<0)return H.a(w,h)
f=w[h]
if(typeof f!=="number")return f.eT()
n=(f&1)===0?3:4
e=[]
for(h=g,d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.a(w,h)
e.push(w[h])}if((f&2)!==0){g=h+1
if(h<0||h>=v)return H.a(w,h)
c=w[h]
h=g}else c=0
b=[]
if((f&8)!==0)for(d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.a(w,h)
a=w[h]
if(a>>>0!==a||a>=l)return H.a(m,a)
b.push(m[a])}a0=[]
if((f&16)!==0){g=h+1
if(h<0||h>=v)return H.a(w,h)
a=w[h]
if(a>>>0!==a||a>=j)return H.a(t,a)
a1=t[a]
for(d=0;d<n;++d)a0.push(a1)
h=g}if((f&32)!==0)for(d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.a(w,h)
a=w[h]
if(a>>>0!==a||a>=j)return H.a(t,a)
a0.push(t[a])}a2=[]
if((f&64)!==0){g=h+1
if(h<0||h>=v)return H.a(w,h)
a3=w[h]
for(d=0;d<n;++d)a2.push(a3)
h=g}if((f&128)!==0)for(d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.a(w,h)
a2.push(w[h])}if(typeof c!=="number")return H.q(c)
for(;a=z.length,a<=c;){a4=new G.dt(!1,[],[],[],P.N())
if(i)a4.a8("aNormal")
if(k)a4.a8("aTexUV")
if(x){a4.a8("aBoneIndex")
a4.a8("aBoneWeight")}z.push(a4)}if(c>>>0!==c||c>=a)return H.a(z,c)
a4=z[c]
a5=[]
for(a=e.length,p=0;p<e.length;e.length===a||(0,H.y)(e),++p){g=e[p]
if(g>>>0!==g||g>=s)return H.a(u,g)
a5.push(u[g])}if(n===3)a4.bn(a5)
else a4.d1(a5)
if(b.length>0)a4.bj("aTexUV",b)
if(a0.length>0)a4.bk("aNormal",a0)
if(x){a6=[]
a7=[]
for(a=e.length,p=0;p<e.length;e.length===a||(0,H.y)(e),++p){g=e[p]
if(g>>>0!==g||g>=r.length)return H.a(r,g)
a6.push(r[g])
if(g>=q.length)return H.a(q,g)
a7.push(q[g])}a4.bl("aBoneIndex",a6)
a4.bl("aBoneWeight",a7)}}x="out: "+z.length+" "
if(0>=z.length)return H.a(z,0)
P.Z(x+z[0].k(0))
return z},
db:function(a){var z,y,x,w,v,u,t,s,r
z=J.F(a)
y=z.gi(a)
if(typeof y!=="number")return y.a_()
y=new Array(C.a.O(y,3))
y.fixed$length=Array
x=H.v(y,[T.o])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.q(v)
if(!(w<v))break
v=C.c.O(w,3)
u=J.ao(z.h(a,w))
t=J.ao(z.h(a,w+1))
s=J.ao(z.h(a,w+2))
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
if(v>=y)return H.a(x,v)
x[v]=new T.o(r)
w+=3}return x},
h1:function(a){var z,y,x,w,v,u,t,s
z=J.F(a)
y=z.gi(a)
if(typeof y!=="number")return y.a_()
y=new Array(C.a.O(y,2))
y.fixed$length=Array
x=H.v(y,[T.S])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.q(v)
if(!(w<v))break
v=C.c.O(w,2)
u=J.ao(z.h(a,w))
t=J.ao(z.h(a,w+1))
s=new Float32Array(2)
s[0]=u
s[1]=t
if(v>=y)return H.a(x,v)
x[v]=new T.S(s)
w+=2}return x},
dc:function(a,b){var z,y,x,w,v,u,t,s
z=J.F(b)
y=z.gi(b)
if(typeof y!=="number")return y.a_()
y=new Array(C.a.a_(y,a))
y.fixed$length=Array
x=H.v(y,[T.V])
y=x.length
w=0
v=0
while(!0){u=z.gi(b)
if(typeof u!=="number")return H.q(u)
if(!(w<u))break
u=new Float32Array(4)
for(t=0;t<a;++t){s=J.ao(z.h(b,w+t))
if(t>=4)return H.a(u,t)
u[t]=s}if(v>=y)return H.a(x,v)
x[v]=new T.V(u)
w+=a;++v}return x}}],["","",,R,{"^":"",ir:{"^":"iq;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eG:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sJ(z,y)
w.sH(z,x)
P.Z("size change "+H.c(y)+" "+H.c(x))
this.dx.d2(y,x)
this.z=y
this.Q=x},"$1","geF",4,0,17]},iE:{"^":"d;",
di:function(a,b,c){var z,y,x
if(a==null)throw H.b("no element provided")
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
x=this.du(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
du:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.jj("span",null)
y=J.cQ(v)
J.e(y).sJ(y,"1px")
C.n.sH(y,""+d+"px")
C.n.sem(y,"left")
x=C.n.bx(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},iF:{"^":"iE;e,f,a,b,c,d",
dm:function(a,b){var z,y,x,w,v;++this.e
if(J.b_(J.f4(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.u.eP(z,2)+" fps"
y=this.c;(y&&C.E).cQ(y,b)
x=C.c.O(30*C.u.e5(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cQ(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dl:function(a){return this.dm(a,"")}}}],["","",,A,{"^":"",
eM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.fp(b)!==!0)return
z=b.dn(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.b.gex(e)
w=b.db
v=b.dx
u=new Float32Array(9)
t=v.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[4]
u[4]=t[5]
u[5]=t[6]
u[6]=t[8]
u[7]=t[9]
u[8]=t[10]
w.eb(new T.a5(u))
u=w.a
s=u[3]
u[3]=u[1]
u[1]=s
s=u[6]
u[6]=u[2]
u[2]=s
s=u[7]
u[7]=u[5]
u[5]=s
u=b.d
x=x.d
x.j(0,"uTransformationMatrix",u)
x.j(0,"uModelMatrix",v)
x.j(0,"uNormalMatrix",w)
e.push(y)
a.d6(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.y)(y),++r)A.eM(a,y[r],z,d,e)},
ck:{"^":"dQ;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dn:function(a){var z=this.dx
z.u(a)
z.cl(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
cl:{"^":"aq;d,e,cm:f>,a,b,c"},
iq:{"^":"aq;",
df:function(a,b,c){if(this.d==null)this.d=new G.hn(this.e,null,null,null,null)},
d5:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f9(v.a,36160,z)
J.fP(v.a,this.x,this.y,x,w)
if(y!==0)J.fc(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.y)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.bI(P.N(),"transforms",!1,!0))
r=new T.E(new Float32Array(16))
r.S()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.y)(x),++q)A.eM(v,x[q],r,a,s)
if(0>=s.length)return H.a(s,-1)
s.pop()}},
d4:function(){return this.d5(null)}}}],["","",,V,{}],["","",,B,{"^":"",
hv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.N(z,$.$get$dv())
C.b.N(y,$.$get$dw())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.y)(z),++u){t=z[u]
s=J.e(t)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
q=new T.o(new Float32Array(3))
q.u(r)
r=s.gT(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
q.A(0,y[r])
q.Z(0,0.5)
q.E(0)
r=s.gT(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
p=new T.o(new Float32Array(3))
p.u(r)
r=s.ga0(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
p.A(0,y[r])
p.Z(0,0.5)
p.E(0)
r=s.ga0(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
o=new T.o(new Float32Array(3))
o.u(r)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
o.A(0,y[r])
o.Z(0,0.5)
o.E(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.aJ(s.gV(t),n,l))
w.push(new G.aJ(s.gT(t),m,n))
w.push(new G.aJ(s.ga0(t),l,m))
w.push(new G.aJ(n,m,l))}}k=new G.dt(!1,[],[],[],P.N())
k.a8("aTexUV")
k.a8("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.y)(z),++u){t=z[u]
s=J.e(t)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
j=y[r]
r=s.gT(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
i=y[r]
s=s.ga0(t)
if(s>>>0!==s||s>=y.length)return H.a(y,s)
h=y[s]
s=J.e(j)
r=s.gD(j)
g=s.gm(j)
g=Math.atan2(H.aj(r),H.aj(g))
s=Math.acos(H.aj(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.e(i)
g=s.gD(i)
f=s.gm(i)
f=Math.atan2(H.aj(g),H.aj(f))
s=Math.acos(H.aj(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.e(h)
f=s.gD(h)
e=s.gm(h)
e=Math.atan2(H.aj(f),H.aj(e))
s=Math.acos(H.aj(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.bk("aNormal",[j,i,h])
k.bn([j.a1(b),i.a1(b),h.a1(b)])
k.bj("aTexUV",[new T.S(r),new T.S(g),new T.S(f)])}return k}}],["","",,D,{"^":"",
hS:function(a){var z,y
z=new P.H(0,$.r,null,[null])
y=new XMLHttpRequest()
C.F.eC(y,"GET",a)
W.ai(y,"loadend",new D.hT(new P.cr(z,[null]),y),!1,W.nd)
y.send("")
return z},
ch:function(a){var z,y,x
z=new P.H(0,$.r,null,[null])
y=document.createElement("img")
x=new W.ah(y,"load",!1,[W.ad])
x.gel(x).av(new D.hR(new P.cr(z,[null]),y))
y.src=a
return z},
hT:{"^":"f:0;a,b",
$1:function(a){this.a.ai(0,C.O.ee(0,W.kM(this.b.response)))}},
hR:{"^":"f:0;a,b",
$1:function(a){return this.a.ai(0,this.b)}},
hL:{"^":"d;a,b,c",
dc:function(a){var z
a=document
z=W.bu
W.ai(a,"keydown",new D.hN(this),!1,z)
W.ai(a,"keyup",new D.hO(this),!1,z)},
p:{
hM:function(a){var z=P.G
z=new D.hL(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.dc(a)
return z}}},
hN:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.A(0,J.cR(a))
z.b.A(0,a.which)}},
hO:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.cp(0,J.cR(a))
z.c.A(0,a.which)}},
i0:{"^":"d;a,b,c,d,e,f,r,x",
de:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaX(a)
W.ai(y.a,y.b,new D.i2(this),!1,H.B(y,0))
y=z.gaW(a)
W.ai(y.a,y.b,new D.i3(this),!1,H.B(y,0))
y=z.gaY(a)
W.ai(y.a,y.b,new D.i4(this),!1,H.B(y,0))
z=z.gaZ(a)
W.ai(z.a,z.b,new D.i5(this),!1,H.B(z,0))},
p:{
i1:function(a){var z=P.G
z=new D.i0(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.de(a)
return z}}},
i2:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.au(a)
y=this.a
y.r=z.gcn(a).a
y.x=z.gcn(a).b
y.d=z.geB(a).a
y.e=a.movementY}},
i3:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.au(a)
P.Z("BUTTON "+H.c(z.gbX(a)))
z=this.a
z.a.A(0,a.button)
z.b.A(0,a.button)}},
i4:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.au(a)
y=this.a
y.a.cp(0,z.gbX(a))
y.c.A(0,a.button)}},
i5:{"^":"f:18;a",
$1:function(a){var z=J.e(a)
z.au(a)
this.a.f=z.geh(a)}},
ic:{"^":"fU;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bh:function(a){var z,y
z=C.q.en(a,0,new A.lc())
if(typeof z!=="number")return H.q(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lc:{"^":"f:19;",
$2:function(a,b){var z,y
z=J.aD(a,J.aa(b))
if(typeof z!=="number")return H.q(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a5:{"^":"d;bB:a<",
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.a(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
Y:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.a(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.a(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.a(y,x)
z[2]=y[x]
return new T.o(z)},
P:function(a){var z=new T.a5(new Float32Array(9))
z.u(this)
return z},
l:function(a,b){var z=new T.a5(new Float32Array(9))
z.u(this)
z.A(0,b)
return z},
G:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.a5(z)
y.u(this)
x=b.gbB()
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
eb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m},
a1:function(a){var z,y
z=new Float32Array(9)
y=new T.a5(z)
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
return y},
A:function(a,b){var z,y
z=b.gbB()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))
y[4]=C.a.l(y[4],z.h(0,4))
y[5]=C.a.l(y[5],z.h(0,5))
y[6]=C.a.l(y[6],z.h(0,6))
y[7]=C.a.l(y[7],z.h(0,7))
y[8]=C.a.l(y[8],z.h(0,8))}},E:{"^":"d;bC:a<",
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n[3] "+this.Y(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.a(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.E){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
Y:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.a(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.a(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.a(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.a(y,x)
z[3]=y[x]
return new T.V(z)},
P:function(a){var z=new T.E(new Float32Array(16))
z.u(this)
return z},
l:function(a,b){var z=new T.E(new Float32Array(16))
z.u(this)
z.A(0,b)
return z},
G:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.E(z)
y.u(this)
x=b.gbC()
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
cP:function(a,b,c){var z,y
z=new Float32Array(16)
y=new T.E(z)
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
z[9]=z[9]*a
z[10]=z[10]*a
z[11]=z[11]*a
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
a1:function(a){return this.cP(a,null,null)},
S:function(){var z=this.a
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
A:function(a,b){var z,y
z=b.gbC()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))
y[4]=C.a.l(y[4],z.h(0,4))
y[5]=C.a.l(y[5],z.h(0,5))
y[6]=C.a.l(y[6],z.h(0,6))
y[7]=C.a.l(y[7],z.h(0,7))
y[8]=C.a.l(y[8],z.h(0,8))
y[9]=C.a.l(y[9],z.h(0,9))
y[10]=C.a.l(y[10],z.h(0,10))
y[11]=C.a.l(y[11],z.h(0,11))
y[12]=C.a.l(y[12],z.h(0,12))
y[13]=C.a.l(y[13],z.h(0,13))
y[14]=C.a.l(y[14],z.h(0,14))
y[15]=C.a.l(y[15],z.h(0,15))},
cl:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},S:{"^":"d;bK:a<",
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbK()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.S(z)},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.S(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.A(0,b)
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=2)return H.a(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
A:function(a,b){var z,y
z=b.gbK()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))},
Z:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a1:function(a){var z,y,x
z=new Float32Array(2)
y=new T.S(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.Z(0,a)
return y},
P:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.S(z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},o:{"^":"d;aQ:a<",
ac:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
u:function(a){var z,y
z=a.gaQ()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.o){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.o(z)
y.u(this)
x=b.gaQ()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z=new T.o(new Float32Array(3))
z.u(this)
z.A(0,b)
return z},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.a(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gaU())},
gaU:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
E:function(a){var z,y,x
z=Math.sqrt(this.gaU())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aR:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
c5:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.o(new Float32Array(3))
z.ac(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
A:function(a,b){var z,y
z=b.gaQ()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
Z:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a1:function(a){var z=new T.o(new Float32Array(3))
z.u(this)
z.Z(0,a)
return z},
P:function(a){var z=new T.o(new Float32Array(3))
z.u(this)
return z},
gT:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]},
p:{
J:function(a,b,c){var z=new T.o(new Float32Array(3))
z.ac(a,b,c)
return z},
ed:function(a){var z=new Float32Array(3)
z[2]=a
z[1]=a
z[0]=a
return new T.o(z)}}},V:{"^":"d;bL:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.V){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.V(z)
y.u(this)
x=b.gbL()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z=new T.V(new Float32Array(4))
z.u(this)
z.A(0,b)
return z},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.a(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
A:function(a,b){var z,y
z=b.gbL()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))},
Z:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
a1:function(a){var z=new T.V(new Float32Array(4))
z.u(this)
z.Z(0,a)
return z},
P:function(a){var z=new T.V(new Float32Array(4))
z.u(this)
return z},
gT:function(a){return this.a[2]},
gV:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]},
gal:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
eV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z={}
y=document
x=new R.iF(0,0,null,null,null,null)
x.di(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fW(null,w)
y=J.fw(w,"webgl2",P.dC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.a_(P.dq('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.c(J.fx(y))
if($.eP>0)P.Z("I: "+u)
J.fd(y,0,0,0,1)
J.bl(y,2929)
y=new Float32Array(3)
u=D.hM(null)
t=D.i1(w)
s=new T.E(new Float32Array(16))
s.S()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.ic(0.5,0,0,0,new T.o(y),-0.02,u,t,s,new T.o(r),new T.o(q),new T.o(p),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.E(new Float32Array(16))
y.S()
u=new T.E(new Float32Array(16))
u.S()
n=new G.id(o,50,1,0.1,100,y,u,new T.E(new Float32Array(16)),P.N(),"perspective",!1,!0)
n.br()
y=[]
u=new Float32Array(64)
m=new G.hw(y,u,new Float32Array(4),P.N(),"illumination",!1,!0)
u=$.$get$cF()
t=$.$get$eJ()
s=$.$get$eK()
r=new Float32Array(16)
y.push(new G.iC(u,u,t,s,50,0.95,2,1,1,50,new T.E(r),new T.E(new Float32Array(16)),2,"spot",!1,!0))
y=H.v([],[A.cl])
l=new R.ir(w,n,null,v,y,17664,0,0,0,0,"main",!1,!0)
l.df("main",v,null)
l.eG(null)
W.ai(window,"resize",l.geF(),!1,W.ad)
u=G.dO("Fixed",v,$.$get$f_(),$.$get$eZ())
t=[]
y.push(new A.cl(u,[n,m],t,"Fixed",!1,!0))
k=G.dG("light")
s=k.d
s.j(0,"uColor",$.$get$da())
s.j(0,"uShininess",25)
u=G.du("icosahedron-4",u,B.hv(4,0.1,!0))
s=new Float32Array(9)
r=new T.E(new Float32Array(16))
r.S()
q=new Float32Array(16)
p=new T.E(q)
p.S()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
f=$.$get$cF().a
q[12]=f[0]
q[13]=f[1]
q[14]=f[2]
t.push(new A.ck(k,u,[],new T.a5(s),r,p,new T.o(j),new T.o(i),new T.o(h),new T.o(g),"pointLight",!1,!0))
g=G.dO("main",v,$.$get$f3(),$.$get$eN())
e=new A.cl(g,[n,m],[],"main",!1,!0)
y.push(e)
z.a=0
d=G.dG("mat")
y=d.d
y.j(0,"uColor",$.$get$d9())
y.j(0,"uShininess",25)
P.hp([D.hS($.$get$cE()),D.ch($.$get$cH()),D.ch($.$get$f0()),D.ch($.$get$eW())],null,!1).av(new Q.lo(v,d,e,new Q.ln(z,o,l,x)))},
ln:{"^":"f:20;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a
y=J.az(a7)
y.G(a7,z.a)
z.a=y.l(a7,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.bc()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.bc()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.w(0,37))y.go+=0.03
else if(v.w(0,39))y.go-=0.03
if(v.w(0,38))y.id+=0.03
else if(v.w(0,40))y.id-=0.03
if(v.w(0,33))y.fy*=0.99
else if(v.w(0,34))y.fy*=1.01
if(v.w(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.bc()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.e6(y.id,-1.4707963267948965,1.4707963267948965)
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
y.ck(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gaU())
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
w.c.a4(0)
w.b.a4(0)
x.e=0
x.d=0
x.f=0
x.c.a4(0)
x.b.a4(0)
this.c.d4()
C.a8.ge_(window).av(this)
this.d.dl(z.a)}},
lo:{"^":"f:21;a,b,c,d",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a
y=$.$get$cH()
x=J.F(a)
w=x.h(a,1)
v=new G.iT(!1,!1,!1,!0,1,9729,9729)
u=J.fg(z.a)
t=new G.hy(w,y,u,3553,z,v)
J.b0(z.a,3553,u)
J.fC(z.a,37440,1)
t.dh(w)
v.da(z,3553)
J.fy(z.a)
J.b0(z.a,3553,null)
z=this.b
y=z.d
y.j(0,"uTexture",t)
y.j(0,"uNormalScale",0.8)
s=Y.hz(x.h(a,0))
if(0>=s.length)return H.a(s,0)
P.Z(s[0])
x=$.$get$cE()
y=this.c
if(0>=s.length)return H.a(s,0)
r=G.du(x,y.d,s[0])
x=new Float32Array(9)
w=new T.E(new Float32Array(16))
w.S()
v=new T.E(new Float32Array(16))
v.S()
u=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=[]
m=new Float32Array(9)
l=new T.E(new Float32Array(16))
l.S()
k=new T.E(new Float32Array(16))
k.S()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.ck(null,null,n,new T.a5(m),l,k,new T.o(j),new T.o(i),new T.o(h),new T.o(new Float32Array(3)),"wrapper",!1,!0)
n.push(new A.ck(z,r,[],new T.a5(x),w,v,new T.o(u),new T.o(q),new T.o(p),new T.o(o),r.a,!1,!0))
z=new T.o(new Float32Array(3))
z.ac(100,0,0)
g.ck(z)
y.f.push(g)
this.d.$1(0)}}},1]]
setupProgram(dart,0,0)
J.m=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.hH.prototype
if(typeof a=="boolean")return J.hG.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.l8=function(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.F=function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.ay=function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.az=function(a){if(typeof a=="number")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bb.prototype
return a}
J.l9=function(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bb.prototype
return a}
J.eQ=function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bb.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.aD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l8(a).l(a,b)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.m(a).F(a,b)}
J.U=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.az(a).am(a,b)}
J.b_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.az(a).a5(a,b)}
J.f4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.az(a).G(a,b)}
J.aE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.F(a).h(a,b)}
J.f5=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eU(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ay(a).j(a,b,c)}
J.f6=function(a,b,c,d){return J.e(a).dM(a,b,c,d)}
J.cI=function(a,b){return J.e(a).bM(a,b)}
J.f7=function(a,b,c,d){return J.e(a).bN(a,b,c,d)}
J.cJ=function(a,b,c){return J.e(a).bP(a,b,c)}
J.f8=function(a,b){return J.e(a).e1(a,b)}
J.bR=function(a,b,c){return J.e(a).bQ(a,b,c)}
J.f9=function(a,b,c){return J.e(a).bS(a,b,c)}
J.b0=function(a,b,c){return J.e(a).bT(a,b,c)}
J.bk=function(a,b){return J.e(a).e4(a,b)}
J.fa=function(a,b){return J.e(a).bU(a,b)}
J.fb=function(a,b,c){return J.e(a).bV(a,b,c)}
J.cK=function(a,b,c,d){return J.e(a).bW(a,b,c,d)}
J.fc=function(a,b){return J.ay(a).bZ(a,b)}
J.fd=function(a,b,c,d,e){return J.e(a).c_(a,b,c,d,e)}
J.cL=function(a){return J.e(a).P(a)}
J.cM=function(a,b){return J.eQ(a).e7(a,b)}
J.fe=function(a,b){return J.l9(a).W(a,b)}
J.bS=function(a,b,c){return J.F(a).ea(a,b,c)}
J.bT=function(a){return J.e(a).c1(a)}
J.ff=function(a){return J.e(a).c2(a)}
J.fg=function(a){return J.e(a).c4(a)}
J.fh=function(a){return J.e(a).ed(a)}
J.fi=function(a,b){return J.e(a).c6(a,b)}
J.bU=function(a,b){return J.e(a).c7(a,b)}
J.fj=function(a,b,c,d){return J.e(a).c8(a,b,c,d)}
J.fk=function(a,b,c,d,e){return J.e(a).ei(a,b,c,d,e)}
J.fl=function(a,b,c,d,e){return J.e(a).c9(a,b,c,d,e)}
J.fm=function(a,b,c,d,e,f){return J.e(a).ej(a,b,c,d,e,f)}
J.cN=function(a,b){return J.ay(a).q(a,b)}
J.bl=function(a,b){return J.e(a).ca(a,b)}
J.fn=function(a,b){return J.e(a).cb(a,b)}
J.fo=function(a){return J.e(a).ek(a)}
J.cO=function(a,b){return J.ay(a).v(a,b)}
J.cP=function(a){return J.e(a).ge0(a)}
J.fp=function(a){return J.e(a).gaS(a)}
J.aF=function(a){return J.e(a).gR(a)}
J.aa=function(a){return J.m(a).gB(a)}
J.b1=function(a){return J.ay(a).gI(a)}
J.L=function(a){return J.F(a).gi(a)}
J.fq=function(a){return J.e(a).gcm(a)}
J.fr=function(a){return J.e(a).gb_(a)}
J.cQ=function(a){return J.e(a).ga2(a)}
J.fs=function(a){return J.e(a).geK(a)}
J.ft=function(a){return J.e(a).gcv(a)}
J.fu=function(a){return J.e(a).gal(a)}
J.cR=function(a){return J.e(a).geS(a)}
J.bV=function(a){return J.e(a).gm(a)}
J.bW=function(a){return J.e(a).gn(a)}
J.cS=function(a){return J.e(a).gD(a)}
J.fv=function(a){return J.e(a).b5(a)}
J.fw=function(a,b,c){return J.e(a).cO(a,b,c)}
J.fx=function(a){return J.e(a).aw(a)}
J.fy=function(a){return J.e(a).b6(a)}
J.fz=function(a,b){return J.e(a).b7(a,b)}
J.fA=function(a,b,c){return J.e(a).b8(a,b,c)}
J.cT=function(a,b,c){return J.e(a).bb(a,b,c)}
J.fB=function(a,b){return J.e(a).cj(a,b)}
J.fC=function(a,b,c){return J.e(a).co(a,b,c)}
J.cU=function(a){return J.ay(a).eE(a)}
J.fD=function(a,b){return J.e(a).sar(a,b)}
J.fE=function(a,b,c,d){return J.e(a).bg(a,b,c,d)}
J.fF=function(a,b,c,d,e,f,g){return J.e(a).cr(a,b,c,d,e,f,g)}
J.fG=function(a,b,c,d){return J.e(a).cs(a,b,c,d)}
J.cV=function(a,b,c,d){return J.e(a).ct(a,b,c,d)}
J.ao=function(a){return J.az(a).eL(a)}
J.cW=function(a){return J.az(a).eM(a)}
J.fH=function(a){return J.eQ(a).eO(a)}
J.aG=function(a){return J.m(a).k(a)}
J.fI=function(a,b,c,d){return J.e(a).eQ(a,b,c,d)}
J.fJ=function(a,b,c){return J.e(a).cw(a,b,c)}
J.fK=function(a,b,c){return J.e(a).cz(a,b,c)}
J.bX=function(a,b,c){return J.e(a).cA(a,b,c)}
J.fL=function(a,b,c){return J.e(a).cB(a,b,c)}
J.cX=function(a,b,c){return J.e(a).cC(a,b,c)}
J.cY=function(a,b,c){return J.e(a).cD(a,b,c)}
J.cZ=function(a,b,c){return J.e(a).cE(a,b,c)}
J.d_=function(a,b,c,d){return J.e(a).cF(a,b,c,d)}
J.d0=function(a,b,c,d){return J.e(a).cG(a,b,c,d)}
J.fM=function(a,b){return J.e(a).cI(a,b)}
J.fN=function(a,b,c){return J.e(a).eR(a,b,c)}
J.fO=function(a,b,c,d,e,f,g){return J.e(a).cJ(a,b,c,d,e,f,g)}
J.fP=function(a,b,c,d,e){return J.e(a).cL(a,b,c,d,e)}
I.aB=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.bZ.prototype
C.n=W.h2.prototype
C.E=W.h8.prototype
C.F=W.ht.prototype
C.G=J.h.prototype
C.b=J.aL.prototype
C.u=J.dx.prototype
C.c=J.dy.prototype
C.a=J.aN.prototype
C.i=J.aO.prototype
C.N=J.aP.prototype
C.q=H.i6.prototype
C.S=W.i8.prototype
C.y=J.ie.prototype
C.D=W.iR.prototype
C.r=J.bb.prototype
C.a8=W.iZ.prototype
C.d=new P.k0()
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
C.v=function(hooks) { return hooks; }

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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=new P.hJ(null,null)
C.P=new P.hK(null)
C.Q=H.v(I.aB(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.R=I.aB(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.x=I.aB([])
C.o=H.v(I.aB(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.v(I.aB(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.T=new G.x("vec3","vertex btangents",0)
C.e=new G.x("vec3","",0)
C.U=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.z=new G.x("vec3","vertex coordinates",0)
C.V=new G.x("vec3","vertex binormals",0)
C.A=new G.x("vec4","for wireframe",0)
C.W=new G.x("vec4","per vertex color",0)
C.X=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.Z=new G.x("mat4","",4)
C.Y=new G.x("mat4","",128)
C.f=new G.x("float","",0)
C.a_=new G.x("float","",4)
C.a0=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a1=new G.x("float","for bump maps",0)
C.a2=new G.x("vec2","texture uvs",0)
C.a3=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.a4=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.a5=new G.x("vec3","vertex normals",0)
C.a6=new G.x("sampler2DShadow","",0)
C.B=new G.x("vec3","per vertex color",0)
C.C=new G.x("mat3","",0)
C.a7=new G.x("vec3","vertex tangents",0)
$.a3=0
$.aH=null
$.d4=null
$.eS=null
$.eF=null
$.eY=null
$.bN=null
$.bO=null
$.cC=null
$.at=null
$.aV=null
$.aW=null
$.cx=!1
$.r=C.d
$.ac=null
$.c4=null
$.dn=null
$.dm=null
$.dj=null
$.di=null
$.dh=null
$.dg=null
$.eP=0
$.bp="../asset/leeperrysmith/"
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
I.$lazy(y,x,w)}})(["df","$get$df",function(){return H.eR("_$dart_dartClosure")},"cd","$get$cd",function(){return H.eR("_$dart_js")},"e0","$get$e0",function(){return H.a6(H.bH({
toString:function(){return"$receiver$"}}))},"e1","$get$e1",function(){return H.a6(H.bH({$method$:null,
toString:function(){return"$receiver$"}}))},"e2","$get$e2",function(){return H.a6(H.bH(null))},"e3","$get$e3",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.a6(H.bH(void 0))},"e8","$get$e8",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e5","$get$e5",function(){return H.a6(H.e6(null))},"e4","$get$e4",function(){return H.a6(function(){try{null.$method$}catch(z){return z.message}}())},"ea","$get$ea",function(){return H.a6(H.e6(void 0))},"e9","$get$e9",function(){return H.a6(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cs","$get$cs",function(){return P.j4()},"c7","$get$c7",function(){return P.jr(null,P.b6)},"aX","$get$aX",function(){return[]},"de","$get$de",function(){return{}},"el","$get$el",function(){return P.cg(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cu","$get$cu",function(){return P.N()},"dS","$get$dS",function(){return new G.dZ(1281,0,4294967295)},"d3","$get$d3",function(){return new G.dY(1281,1281,1281)},"a1","$get$a1",function(){return P.dC(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.B,"aColorAlpha",C.W,"aPosition",C.z,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.A,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.B,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.z,"vPositionFromLight",C.U,"vCenter",C.A,"vDepth",C.a0,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.f,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"d9","$get$d9",function(){return T.J(0.4,0.4,0.4)},"da","$get$da",function(){return T.J(1,1,0)},"f_","$get$f_",function(){var z=G.by("SolidColor")
z.bi(["aPosition"])
z.ae(["uPerspectiveViewMatrix","uModelMatrix"])
z.aA(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eZ","$get$eZ",function(){var z=G.by("SolidColorF")
z.ae(["uColor"])
z.aA(["oFragColor = vec4( uColor, 1.0 );"])
return z},"dv","$get$dv",function(){return[G.D(0,11,5),G.D(0,5,1),G.D(0,1,7),G.D(0,7,10),G.D(0,10,11),G.D(1,5,9),G.D(5,11,4),G.D(11,10,2),G.D(10,7,6),G.D(7,1,8),G.D(3,9,4),G.D(3,4,2),G.D(3,2,6),G.D(3,6,8),G.D(3,8,9),G.D(4,9,5),G.D(2,4,11),G.D(6,2,10),G.D(8,6,7),G.D(9,8,1)]},"f1","$get$f1",function(){return(1+P.ls(5))/2},"dw","$get$dw",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$f1()
y=T.J(-1,z,0)
y.E(0)
x=T.J(1,z,0)
x.E(0)
if(typeof z!=="number")return z.eV()
w=T.J(-1,-z,0)
w.E(0)
v=T.J(1,-z,0)
v.E(0)
u=T.J(0,-1,z)
u.E(0)
t=T.J(0,1,z)
t.E(0)
s=T.J(0,-1,-z)
s.E(0)
r=T.J(0,1,-z)
r.E(0)
q=T.J(z,0,-1)
q.E(0)
p=T.J(z,0,1)
p.E(0)
o=T.J(-z,0,-1)
o.E(0)
z=T.J(-z,0,1)
z.E(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"cE","$get$cE",function(){return $.bp+"LeePerrySmith.js"},"eW","$get$eW",function(){return $.bp+"Infinite-Level_02_Tangent_SmoothUV.jpg"},"cH","$get$cH",function(){return $.bp+"Map-COL.jpg"},"f0","$get$f0",function(){return $.bp+"Map-SPEC.jpg"},"f3","$get$f3",function(){var z=G.by("LightBlinnPhongV")
z.bi(["aPosition","aNormal","aTexUV"])
z.bm(["vPosition","vNormal","vTexUV"])
z.ae(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.aA(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        vTexUV = aTexUV;\n"])
return z},"eN","$get$eN",function(){var z=G.by("LightBlinnPhongF")
z.bm(["vPosition","vNormal","vTexUV"])
z.ae(["uLightDescs","uLightTypes","uShininess"])
z.ae(["uEyePosition","uColor","uTexture"])
z.bq(["ColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\nvec4 diffuseMap = texture(uTexture, vTexUV );\n\noFragColor.rgb = diffuseMap.rgb + acc.diffuse + acc.specular + uColor;\noFragColor.a = 1.0;\n\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"cF","$get$cF",function(){return T.J(0.5,1,0)},"eJ","$get$eJ",function(){return T.ed(0.866)},"eK","$get$eK",function(){return T.ed(0.133)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.u},{func:1,args:[W.R]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.k,args:[P.G]},{func:1,args:[W.bu]},{func:1,ret:P.cz,args:[W.ap,P.k,P.k,W.ct]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aT]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aT]},{func:1,v:true,args:[W.u,W.u]},{func:1,v:true,args:[W.ad]},{func:1,args:[W.aU]},{func:1,args:[P.G,P.d]},{func:1,v:true,args:[P.aY]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.lu(d||a)
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
Isolate.aB=a.aB
Isolate.ax=a.ax
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.eV,[])
else Q.eV([])})})()
//# sourceMappingURL=normalmap.dart.js.map
