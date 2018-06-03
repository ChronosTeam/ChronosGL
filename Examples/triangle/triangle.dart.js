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
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cc"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cc"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cc(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ap=function(){}
var dart=[["","",,H,{"^":"",lo:{"^":"c;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
cg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b4:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cf==null){H.k0()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dJ("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bR()]
if(v!=null)return v
v=H.k4(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bR(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
E:function(a,b){return a===b},
gC:function(a){return H.aF(a)},
k:["cz",function(a){return"Instance of '"+H.aG(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fL:{"^":"h;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isca:1},
fM:{"^":"h;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isaY:1},
bS:{"^":"h;",
gC:function(a){return 0},
k:["cB",function(a){return String(a)}]},
he:{"^":"bS;"},
b1:{"^":"bS;"},
aD:{"^":"bS;",
k:function(a){var z=a[$.$get$cL()]
return z==null?this.cB(a):J.av(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
az:{"^":"h;$ti",
M:function(a,b){if(!!a.fixed$length)H.M(P.r("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.M(P.r("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.J(a))}},
a9:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b1:function(a,b){return H.dq(a,b,null,H.B(a,0))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
ge1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d0())},
cr:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.M(P.r("setRange"))
P.hm(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.F()
if(typeof b!=="number")return H.A(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$isi){x=e
w=d}else{w=y.b1(d,e).ea(0,!1)
x=0}y=J.a7(w)
v=y.gi(w)
if(typeof v!=="number")return H.A(v)
if(x+z>v)throw H.a(H.fI())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ab:function(a,b,c,d){return this.cr(a,b,c,d,0)},
bw:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.J(a))}return!1},
cs:function(a,b){if(!!a.immutable$list)H.M(P.r("sort"))
H.hA(a,J.jz())},
b2:function(a){return this.cs(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
k:function(a){return P.bQ(a,"[","]")},
gK:function(a){return new J.f7(a,a.length,0,null,[H.B(a,0)])},
gC:function(a){return H.aF(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.M(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cB(b,"newLength",null))
if(b<0)throw H.a(P.am(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a6(a,b))
if(b>=a.length||b<0)throw H.a(H.a6(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.M(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a6(a,b))
if(b>=a.length||b<0)throw H.a(H.a6(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.x([],[H.B(a,0)])
this.si(y,z)
this.ab(y,0,a.length,a)
this.ab(y,a.length,z,b)
return y},
$iso:1,
$aso:I.ap,
$isi:1,
t:{
aA:function(a){a.fixed$length=Array
return a},
lm:[function(a,b){return J.eA(a,b)},"$2","jz",8,0,21]}},
ln:{"^":"az;$ti"},
f7:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aB:{"^":"h;",
S:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaj(b)
if(this.gaj(a)===z)return 0
if(this.gaj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaj:function(a){return a===0?1/a<0:a<0},
e9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
dH:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dI:function(a,b,c){if(this.S(b,c)>0)throw H.a(H.a_(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
ec:function(a,b){var z
if(b>20)throw H.a(P.am(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaj(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a+b},
F:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a-b},
cD:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bq(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.bq(a,b)},
bq:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bo:function(a,b){var z
if(a>0)z=this.dq(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dq:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a<b},
aa:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a>b},
$isaN:1,
$isaP:1},
d2:{"^":"aB;",$isF:1},
d1:{"^":"aB;"},
aC:{"^":"h;",
dJ:function(a,b){if(b>=a.length)H.M(H.a6(a,b))
return a.charCodeAt(b)},
bf:function(a,b){if(b>=a.length)throw H.a(H.a6(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cB(b,null,null))
return a+b},
cu:function(a,b,c){var z
if(c>a.length)throw H.a(P.am(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ct:function(a,b){return this.cu(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.M(H.a_(c))
if(b<0)throw H.a(P.bk(b,null,null))
if(typeof c!=="number")return H.A(c)
if(b>c)throw H.a(P.bk(b,null,null))
if(c>a.length)throw H.a(P.bk(c,null,null))
return a.substring(b,c)},
cv:function(a,b){return this.b4(a,b,null)},
eb:function(a){return a.toLowerCase()},
dL:function(a,b,c){if(c>a.length)throw H.a(P.am(c,0,a.length,null,null))
return H.ka(a,b,c)},
S:function(a,b){var z
if(typeof b!=="string")throw H.a(H.a_(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a6(a,b))
return a[b]},
$iso:1,
$aso:I.ap,
$isn:1}}],["","",,H,{"^":"",
d0:function(){return new P.bn("No element")},
fJ:function(){return new P.bn("Too many elements")},
fI:function(){return new P.bn("Too few elements")},
hA:function(a,b){var z=J.a1(a)
if(typeof z!=="number")return z.F()
H.b_(a,0,z-1,b)},
b_:function(a,b,c,d){if(c-b<=32)H.hz(a,b,c,d)
else H.hy(a,b,c,d)},
hz:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a7(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a0(c-b+1,6)
y=b+z
x=c-z
w=C.b.a0(b+c,2)
v=w-z
u=w+z
t=J.a7(a)
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
if(J.I(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.E(i,0))continue
if(h.X(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aO(i)
if(h.aa(i,0)){--l
continue}else{g=l-1
if(h.X(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aR(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aR(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b_(a,b,m-2,d)
H.b_(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.I(d.$2(t.h(a,m),r),0);)++m
for(;J.I(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.I(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.I(d.$2(j,p),0))for(;!0;)if(J.I(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aR(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b_(a,m,l,d)}else H.b_(a,m,l,d)},
bM:{"^":"bg;$ti"},
bi:{"^":"bM;$ti",
gK:function(a){return new H.d7(this,this.gi(this),0,null,[H.ce(this,"bi",0)])},
B:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.A(z)
y=0
for(;y<z;++y){b.$1(this.v(0,y))
if(z!==this.gi(this))throw H.a(P.J(this))}},
aS:function(a,b){return this.cA(0,b)}},
hM:{"^":"bi;a,b,c,$ti",
cV:function(a,b,c,d){},
gdc:function(){var z=J.a1(this.a)
return z},
gdr:function(){var z,y
z=J.a1(this.a)
y=this.b
if(typeof z!=="number")return H.A(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a1(this.a)
y=this.b
if(typeof z!=="number")return H.A(z)
if(y>=z)return 0
return z-y},
v:function(a,b){var z,y
z=this.gdr()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.A(b)
y=z+b
if(!(b<0)){z=this.gdc()
if(typeof z!=="number")return H.A(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cn(this.a,y)},
ea:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a7(y)
w=x.gi(y)
if(typeof w!=="number")return w.F()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.x(u,this.$ti)
for(s=0;s<v;++s){u=x.v(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.X()
if(u<w)throw H.a(P.J(this))}return t},
t:{
dq:function(a,b,c,d){var z=new H.hM(a,b,c,[d])
z.cV(a,b,c,d)
return z}}},
d7:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.a7(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.J(z))
w=this.c
if(typeof x!=="number")return H.A(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
fV:{"^":"bi;a,b,$ti",
gi:function(a){return J.a1(this.a)},
v:function(a,b){return this.b.$1(J.cn(this.a,b))},
$asbM:function(a,b){return[b]},
$asbi:function(a,b){return[b]},
$asbg:function(a,b){return[b]}},
dK:{"^":"bg;a,b,$ti",
gK:function(a){return new H.hU(J.aT(this.a),this.b,this.$ti)}},
hU:{"^":"fK;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
be:{"^":"c;$ti"}}],["","",,H,{"^":"",
jT:function(a){return init.types[a]},
k3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.av(a)
if(typeof z!=="string")throw H.a(H.a_(a))
return z},
aF:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aG:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.q(a).$isb1){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bf(w,0)===36)w=C.i.cv(w,1)
r=H.by(H.aq(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
H:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hl:function(a){return a.b?H.H(a).getUTCFullYear()+0:H.H(a).getFullYear()+0},
hj:function(a){return a.b?H.H(a).getUTCMonth()+1:H.H(a).getMonth()+1},
hf:function(a){return a.b?H.H(a).getUTCDate()+0:H.H(a).getDate()+0},
hg:function(a){return a.b?H.H(a).getUTCHours()+0:H.H(a).getHours()+0},
hi:function(a){return a.b?H.H(a).getUTCMinutes()+0:H.H(a).getMinutes()+0},
hk:function(a){return a.b?H.H(a).getUTCSeconds()+0:H.H(a).getSeconds()+0},
hh:function(a){return a.b?H.H(a).getUTCMilliseconds()+0:H.H(a).getMilliseconds()+0},
A:function(a){throw H.a(H.a_(a))},
d:function(a,b){if(a==null)J.a1(a)
throw H.a(H.a6(a,b))},
a6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a9(!0,b,"index",null)
z=J.a1(a)
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bk(b,"index",null)},
a_:function(a){return new P.a9(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.de()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eq})
z.name=""}else z.toString=H.eq
return z},
eq:function(){return J.av(this.dartException)},
M:function(a){throw H.a(a)},
E:function(a){throw H.a(P.J(a))},
S:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bo(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bT(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dd(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dw()
u=$.$get$dx()
t=$.$get$dy()
s=$.$get$dz()
r=$.$get$dD()
q=$.$get$dE()
p=$.$get$dB()
$.$get$dA()
o=$.$get$dG()
n=$.$get$dF()
m=v.R(y)
if(m!=null)return z.$1(H.bT(y,m))
else{m=u.R(y)
if(m!=null){m.method="call"
return z.$1(H.bT(y,m))}else{m=t.R(y)
if(m==null){m=s.R(y)
if(m==null){m=r.R(y)
if(m==null){m=q.R(y)
if(m==null){m=p.R(y)
if(m==null){m=s.R(y)
if(m==null){m=o.R(y)
if(m==null){m=n.R(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dd(y,m))}}return z.$1(new H.hS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dl()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a9(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dl()
return a},
aj:function(a){var z
if(a==null)return new H.e0(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e0(a,null)},
jP:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
k2:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cV("Unsupported number of arguments for wrapped closure"))},
a5:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k2)
a.$identity=z
return z},
fg:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$isi){z.$reflectionInfo=c
x=H.ho(z).r}else x=c
w=d?Object.create(new H.hB().constructor.prototype):Object.create(new H.bJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.at(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cG(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jT,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cE:H.bK
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cG(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fd:function(a,b,c,d){var z=H.bK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cG:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ff(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fd(y,!w,z,b)
if(y===0){w=$.V
$.V=J.at(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aw
if(v==null){v=H.bb("self")
$.aw=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.V
$.V=J.at(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aw
if(v==null){v=H.bb("self")
$.aw=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fe:function(a,b,c,d){var z,y
z=H.bK
y=H.cE
switch(b?-1:a){case 0:throw H.a(H.hu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ff:function(a,b){var z,y,x,w,v,u,t,s
z=$.aw
if(z==null){z=H.bb("self")
$.aw=z}y=$.cD
if(y==null){y=H.bb("receiver")
$.cD=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fe(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.V
$.V=J.at(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.V
$.V=J.at(y,1)
return new Function(z+H.b(y)+"}")()},
cc:function(a,b,c,d,e,f){var z,y
z=J.aA(b)
y=!!J.q(c).$isi?J.aA(c):c
return H.fg(a,z,y,!!d,e,f)},
k8:function(a,b){var z=J.a7(b)
throw H.a(H.cF(a,z.b4(b,3,z.gi(b))))},
a8:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.k8(a,b)},
cd:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ef:function(a,b){var z,y
if(a==null)return!1
z=H.cd(J.q(a))
if(z==null)y=!1
else y=H.ek(z,b)
return y},
jH:function(a){var z
if(a instanceof H.j){z=H.cd(J.q(a))
if(z!=null)return H.ch(z,null)
return"Closure"}return H.aG(a)},
kb:function(a){throw H.a(new P.fl(a))},
ei:function(a){return init.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
aq:function(a){if(a==null)return
return a.$ti},
mJ:function(a,b,c){return H.aQ(a["$as"+H.b(c)],H.aq(b))},
b5:function(a,b,c,d){var z=H.aQ(a["$as"+H.b(c)],H.aq(b))
return z==null?null:z[d]},
ce:function(a,b,c){var z=H.aQ(a["$as"+H.b(b)],H.aq(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.aq(a)
return z==null?null:z[b]},
ch:function(a,b){var z=H.as(a,b)
return z},
as:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.by(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.as(z,b)
return H.jy(a,b)}return"unknown-reified-type"},
jy:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.as(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.as(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.as(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jO(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.as(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
by:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c1("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}return w?"":"<"+z.k(0)+">"},
jS:function(a){var z,y,x
if(a instanceof H.j){z=H.cd(J.q(a))
if(z!=null)return H.ch(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.by(a.$ti,0,null)
return y+x},
aQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cb:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aq(a)
y=J.q(a)
if(y[b]==null)return!1
return H.ec(H.aQ(y[d],z),c)},
b7:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cb(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.by(c,0,null)
throw H.a(H.cF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ec:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.L(a[y],b[y]))return!1
return!0},
mH:function(a,b,c){return a.apply(b,H.aQ(J.q(b)["$as"+H.b(c)],H.aq(b)))},
L:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aY")return!0
if('func' in b)return H.ek(a,b)
if('func' in a)return b.builtin$cls==="le"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.ch(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ec(H.aQ(u,z),x)},
eb:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.L(z,v)||H.L(v,z)))return!1}return!0},
jI:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aA(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.L(v,u)||H.L(u,v)))return!1}return!0},
ek:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.L(z,y)||H.L(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eb(x,w,!1))return!1
if(!H.eb(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.L(o,n)||H.L(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.L(o,n)||H.L(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.L(o,n)||H.L(n,o)))return!1}}return H.jI(a.named,b.named)},
mI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k4:function(a){var z,y,x,w,v,u
z=$.ej.$1(a)
y=$.bw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ea.$2(a,z)
if(z!=null){y=$.bw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bz(x)
$.bw[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bx[z]=x
return x}if(v==="-"){u=H.bz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.em(a,x)
if(v==="*")throw H.a(P.dJ(z))
if(init.leafTags[z]===true){u=H.bz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.em(a,x)},
em:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cg(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bz:function(a){return J.cg(a,!1,null,!!a.$isp)},
k7:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bz(z)
else return J.cg(z,c,null,null)},
k0:function(){if(!0===$.cf)return
$.cf=!0
H.k1()},
k1:function(){var z,y,x,w,v,u,t,s
$.bw=Object.create(null)
$.bx=Object.create(null)
H.jX()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.en.$1(v)
if(u!=null){t=H.k7(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jX:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.ao(C.E,H.ao(C.J,H.ao(C.u,H.ao(C.u,H.ao(C.I,H.ao(C.F,H.ao(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ej=new H.jY(v)
$.ea=new H.jZ(u)
$.en=new H.k_(t)},
ao:function(a,b){return a(b)||b},
ka:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hn:{"^":"c;a,b,c,d,e,f,r,x",t:{
ho:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aA(z)
y=z[0]
x=z[1]
return new H.hn(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hQ:{"^":"c;a,b,c,d,e,f",
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
t:{
Y:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hb:{"^":"G;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
t:{
dd:function(a,b){return new H.hb(a,b==null?null:b.method)}}},
fN:{"^":"G;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
t:{
bT:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fN(a,y,z?null:b.receiver)}}},
hS:{"^":"G;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kc:{"^":"j:0;a",
$1:function(a){if(!!J.q(a).$isG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e0:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaH:1},
j:{"^":"c;",
k:function(a){return"Closure '"+H.aG(this).trim()+"'"},
gcm:function(){return this},
gcm:function(){return this}},
dr:{"^":"j;"},
hB:{"^":"dr;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bJ:{"^":"dr;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aF(this.a)
else y=typeof z!=="object"?J.a0(z):H.aF(z)
return(y^H.aF(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aG(z)+"'")},
t:{
bK:function(a){return a.a},
cE:function(a){return a.c},
bb:function(a){var z,y,x,w,v
z=new H.bJ("self","target","receiver","name")
y=J.aA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fb:{"^":"G;a",
k:function(a){return this.a},
t:{
cF:function(a,b){return new H.fb("CastError: "+H.b(P.bO(a))+": type '"+H.jH(a)+"' is not a subtype of type '"+b+"'")}}},
ht:{"^":"G;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
t:{
hu:function(a){return new H.ht(a)}}},
dH:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a0(this.a)},
E:function(a,b){if(b==null)return!1
return b instanceof H.dH&&J.I(this.a,b.a)}},
d3:{"^":"bW;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gN:function(a){return new H.fT(this,[H.B(this,0)])},
ah:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bh(y,b)}else return this.e_(b)},
e_:function(a){var z=this.d
if(z==null)return!1
return this.aK(this.aA(z,J.a0(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.ga8()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.ga8()
return x}else return this.e0(b)},
e0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aA(z,J.a0(a)&0x3ffffff)
x=this.aK(y,a)
if(x<0)return
return y[x].ga8()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aC()
this.b=z}this.bc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aC()
this.c=y}this.bc(y,b,c)}else{x=this.d
if(x==null){x=this.aC()
this.d=x}w=J.a0(b)&0x3ffffff
v=this.aA(x,w)
if(v==null)this.aG(x,w,[this.at(b,c)])
else{u=this.aK(v,b)
if(u>=0)v[u].sa8(c)
else v.push(this.at(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.J(this))
z=z.c}},
bc:function(a,b,c){var z=this.ae(a,b)
if(z==null)this.aG(a,b,this.at(b,c))
else z.sa8(c)},
bk:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.fS(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bk()
return z},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].gdZ(),b))return y
return-1},
k:function(a){return P.d8(this)},
ae:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aG:function(a,b,c){a[b]=c},
d9:function(a,b){delete a[b]},
bh:function(a,b){return this.ae(a,b)!=null},
aC:function(){var z=Object.create(null)
this.aG(z,"<non-identifier-key>",z)
this.d9(z,"<non-identifier-key>")
return z}},
fS:{"^":"c;dZ:a<,a8:b@,c,d"},
fT:{"^":"bM;a,$ti",
gi:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.ab(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.J(z))
y=y.c}}},
ab:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jY:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
jZ:{"^":"j:10;a",
$2:function(a,b){return this.a(a,b)}},
k_:{"^":"j:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jO:function(a){return J.aA(H.x(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bt:function(a){var z,y,x
if(!!J.q(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Z:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a6(b,a))},
h7:{"^":"h;","%":"DataView;ArrayBufferView;bY|dV|dW|d9|dX|dY|ac"},
bY:{"^":"h7;",
gi:function(a){return a.length},
$iso:1,
$aso:I.ap,
$isp:1,
$asp:I.ap},
d9:{"^":"dW;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
j:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbe:function(){return[P.aN]},
$ask:function(){return[P.aN]},
$isi:1,
$asi:function(){return[P.aN]},
"%":"Float64Array"},
ac:{"^":"dY;",
j:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbe:function(){return[P.F]},
$ask:function(){return[P.F]},
$isi:1,
$asi:function(){return[P.F]}},
h6:{"^":"d9;",$isbP:1,"%":"Float32Array"},
lD:{"^":"ac;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lE:{"^":"ac;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
$isfG:1,
"%":"Int32Array"},
lF:{"^":"ac;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lG:{"^":"ac;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lH:{"^":"ac;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lI:{"^":"ac;",
gi:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lJ:{"^":"ac;",
gi:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dV:{"^":"bY+k;"},
dW:{"^":"dV+be;"},
dX:{"^":"bY+k;"},
dY:{"^":"dX+be;"}}],["","",,P,{"^":"",
hZ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jJ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a5(new P.i0(z),1)).observe(y,{childList:true})
return new P.i_(z,y,x)}else if(self.setImmediate!=null)return P.jK()
return P.jL()},
mu:[function(a){self.scheduleImmediate(H.a5(new P.i1(a),0))},"$1","jJ",4,0,6],
mv:[function(a){self.setImmediate(H.a5(new P.i2(a),0))},"$1","jK",4,0,6],
mw:[function(a){P.jc(0,a)},"$1","jL",4,0,6],
jC:function(a,b){if(H.ef(a,{func:1,args:[P.aY,P.aY]})){b.toString
return a}else{b.toString
return a}},
jB:function(){var z,y
for(;z=$.an,z!=null;){$.aL=null
y=z.b
$.an=y
if(y==null)$.aK=null
z.a.$0()}},
mG:[function(){$.c8=!0
try{P.jB()}finally{$.aL=null
$.c8=!1
if($.an!=null)$.$get$c3().$1(P.ed())}},"$0","ed",0,0,3],
e8:function(a){var z=new P.dL(a,null)
if($.an==null){$.aK=z
$.an=z
if(!$.c8)$.$get$c3().$1(P.ed())}else{$.aK.b=z
$.aK=z}},
jG:function(a){var z,y,x
z=$.an
if(z==null){P.e8(a)
$.aL=$.aK
return}y=new P.dL(a,null)
x=$.aL
if(x==null){y.b=z
$.aL=y
$.an=y}else{y.b=x.b
x.b=y
$.aL=y
if(y.b==null)$.aK=y}},
k9:function(a){var z=$.w
if(C.f===z){P.bv(null,null,C.f,a)
return}z.toString
P.bv(null,null,z,z.bz(a))},
jF:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.S(u)
y=H.aj(u)
$.w.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.au(x)
w=t
v=x.gZ()
c.$2(w,v)}}},
ju:function(a,b,c,d){var z=a.dG(0)
if(!!J.q(z).$isaW&&z!==$.$get$cY())z.ef(new P.jx(b,c,d))
else b.a4(c,d)},
jv:function(a,b){return new P.jw(a,b)},
hX:function(){return $.w},
bu:function(a,b,c,d,e){var z={}
z.a=d
P.jG(new P.jD(z,e))},
e6:function(a,b,c,d){var z,y
y=$.w
if(y===c)return d.$0()
$.w=c
z=y
try{y=d.$0()
return y}finally{$.w=z}},
e7:function(a,b,c,d,e){var z,y
y=$.w
if(y===c)return d.$1(e)
$.w=c
z=y
try{y=d.$1(e)
return y}finally{$.w=z}},
jE:function(a,b,c,d,e,f){var z,y
y=$.w
if(y===c)return d.$2(e,f)
$.w=c
z=y
try{y=d.$2(e,f)
return y}finally{$.w=z}},
bv:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bz(d):c.dD(d)
P.e8(d)},
i0:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i_:{"^":"j:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i1:{"^":"j:1;a",
$0:function(){this.a.$0()}},
i2:{"^":"j:1;a",
$0:function(){this.a.$0()}},
jb:{"^":"c;a,b,c",
d5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a5(new P.jd(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
t:{
jc:function(a,b){var z=new P.jb(!0,null,0)
z.d5(a,b)
return z}}},
jd:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kq:{"^":"c;$ti"},
i5:{"^":"c;$ti"},
j6:{"^":"i5;a,$ti",
dK:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.c0("Future already completed"))
z.ad(b)}},
dO:{"^":"c;aE:a<,b,c,d,e,$ti",
gdw:function(){return this.b.b},
gbV:function(){return(this.c&1)!==0},
gdY:function(){return(this.c&2)!==0},
gbU:function(){return this.c===8},
dW:function(a){return this.b.b.aR(this.d,a)},
e2:function(a){if(this.c!==6)return!0
return this.b.b.aR(this.d,J.au(a))},
dV:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.ef(z,{func:1,args:[P.c,P.aH]}))return x.e5(z,y.gO(a),a.gZ())
else return x.aR(z,y.gO(a))},
dX:function(){return this.b.b.c2(this.d)}},
ah:{"^":"c;bp:a<,b,dk:c<,$ti",
d1:function(a,b){this.a=4
this.c=a},
gdf:function(){return this.a===2},
gaB:function(){return this.a>=4},
c4:function(a,b){var z,y,x
z=$.w
if(z!==C.f){z.toString
if(b!=null)b=P.jC(b,z)}y=new P.ah(0,z,null,[null])
x=b==null?1:3
this.au(new P.dO(null,y,x,a,b,[H.B(this,0),null]))
return y},
c3:function(a){return this.c4(a,null)},
ef:function(a){var z,y
z=$.w
y=new P.ah(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.B(this,0)
this.au(new P.dO(null,y,8,a,null,[z,z]))
return y},
au:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaB()){y.au(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bv(null,null,z,new P.il(this,a))}},
bm:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaE()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaB()){v.bm(a)
return}this.a=v.a
this.c=v.c}z.a=this.aF(a)
y=this.b
y.toString
P.bv(null,null,y,new P.ir(z,this))}},
af:function(){var z=this.c
this.c=null
return this.aF(z)},
aF:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaE()
z.a=y}return y},
ad:function(a){var z,y,x
z=this.$ti
y=H.cb(a,"$isaW",z,"$asaW")
if(y){z=H.cb(a,"$isah",z,null)
if(z)P.dP(a,this)
else P.im(a,this)}else{x=this.af()
this.a=4
this.c=a
P.aJ(this,x)}},
a4:[function(a,b){var z=this.af()
this.a=8
this.c=new P.ba(a,b)
P.aJ(this,z)},function(a){return this.a4(a,null)},"ei","$2","$1","gbg",4,2,13],
$isaW:1,
t:{
im:function(a,b){var z,y,x
b.a=1
try{a.c4(new P.io(b),new P.ip(b))}catch(x){z=H.S(x)
y=H.aj(x)
P.k9(new P.iq(b,z,y))}},
dP:function(a,b){var z
for(;a.gdf();)a=a.c
if(a.gaB()){z=b.af()
b.a=a.a
b.c=a.c
P.aJ(b,z)}else{z=b.c
b.a=2
b.c=a
a.bm(z)}},
aJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.au(v)
t=v.gZ()
y.toString
P.bu(null,null,y,u,t)}return}for(;b.gaE()!=null;b=s){s=b.a
b.a=null
P.aJ(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbV()||b.gbU()){q=b.gdw()
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
t=v.gZ()
y.toString
P.bu(null,null,y,u,t)
return}p=$.w
if(p==null?q!=null:p!==q)$.w=q
else p=null
if(b.gbU())new P.iu(z,x,b,w).$0()
else if(y){if(b.gbV())new P.it(x,b,r).$0()}else if(b.gdY())new P.is(z,x,b).$0()
if(p!=null)$.w=p
y=x.b
if(!!J.q(y).$isaW){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aF(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dP(y,o)
return}}o=b.b
b=o.af()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
il:{"^":"j:1;a,b",
$0:function(){P.aJ(this.a,this.b)}},
ir:{"^":"j:1;a,b",
$0:function(){P.aJ(this.b,this.a.a)}},
io:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
ip:{"^":"j:14;a",
$2:function(a,b){this.a.a4(a,b)},
$1:function(a){return this.$2(a,null)}},
iq:{"^":"j:1;a,b,c",
$0:function(){this.a.a4(this.b,this.c)}},
iu:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dX()}catch(w){y=H.S(w)
x=H.aj(w)
if(this.d){v=J.au(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.ba(y,x)
u.a=!0
return}if(!!J.q(z).$isaW){if(z instanceof P.ah&&z.gbp()>=4){if(z.gbp()===8){v=this.b
v.b=z.gdk()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.c3(new P.iv(t))
v.a=!1}}},
iv:{"^":"j:0;a",
$1:function(a){return this.a}},
it:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dW(this.c)}catch(x){z=H.S(x)
y=H.aj(x)
w=this.a
w.b=new P.ba(z,y)
w.a=!0}}},
is:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e2(z)===!0&&w.e!=null){v=this.b
v.b=w.dV(z)
v.a=!1}}catch(u){y=H.S(u)
x=H.aj(u)
w=this.a
v=J.au(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.ba(y,x)
s.a=!0}}},
dL:{"^":"c;a,b"},
dn:{"^":"c;$ti",
B:function(a,b){var z,y
z={}
y=new P.ah(0,$.w,null,[null])
z.a=null
z.a=this.bY(new P.hI(z,this,b,y),!0,new P.hJ(y),y.gbg())
return y},
gi:function(a){var z,y
z={}
y=new P.ah(0,$.w,null,[P.F])
z.a=0
this.bY(new P.hK(z),!0,new P.hL(z,y),y.gbg())
return y}},
hI:{"^":"j;a,b,c,d",
$1:function(a){P.jF(new P.hG(this.c,a),new P.hH(),P.jv(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ce(this.b,"dn",0)]}}},
hG:{"^":"j:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hH:{"^":"j:0;",
$1:function(a){}},
hJ:{"^":"j:1;a",
$0:function(){this.a.ad(null)}},
hK:{"^":"j:0;a",
$1:function(a){++this.a.a}},
hL:{"^":"j:1;a,b",
$0:function(){this.b.ad(this.a.a)}},
hF:{"^":"c;$ti"},
jx:{"^":"j:1;a,b,c",
$0:function(){return this.a.a4(this.b,this.c)}},
jw:{"^":"j:15;a,b",
$2:function(a,b){P.ju(this.a,this.b,a,b)}},
ba:{"^":"c;O:a>,Z:b<",
k:function(a){return H.b(this.a)},
$isG:1},
jj:{"^":"c;"},
jD:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.de()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.av(y)
throw x}},
iQ:{"^":"jj;",
e6:function(a){var z,y,x
try{if(C.f===$.w){a.$0()
return}P.e6(null,null,this,a)}catch(x){z=H.S(x)
y=H.aj(x)
P.bu(null,null,this,z,y)}},
e7:function(a,b){var z,y,x
try{if(C.f===$.w){a.$1(b)
return}P.e7(null,null,this,a,b)}catch(x){z=H.S(x)
y=H.aj(x)
P.bu(null,null,this,z,y)}},
dD:function(a){return new P.iS(this,a)},
bz:function(a){return new P.iR(this,a)},
dE:function(a){return new P.iT(this,a)},
h:function(a,b){return},
c2:function(a){if($.w===C.f)return a.$0()
return P.e6(null,null,this,a)},
aR:function(a,b){if($.w===C.f)return a.$1(b)
return P.e7(null,null,this,a,b)},
e5:function(a,b,c){if($.w===C.f)return a.$2(b,c)
return P.jE(null,null,this,a,b,c)}},
iS:{"^":"j:1;a,b",
$0:function(){return this.a.c2(this.b)}},
iR:{"^":"j:1;a,b",
$0:function(){return this.a.e6(this.b)}},
iT:{"^":"j:0;a,b",
$1:function(a){return this.a.e7(this.b,a)}}}],["","",,P,{"^":"",
O:function(){return new H.d3(0,null,null,null,null,null,0,[null,null])},
d5:function(a){return H.jP(a,new H.d3(0,null,null,null,null,null,0,[null,null]))},
T:function(a,b,c,d){return new P.iD(0,null,null,null,null,null,0,[d])},
fH:function(a,b,c){var z,y
if(P.c9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aM()
y.push(a)
try{P.jA(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dp(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bQ:function(a,b,c){var z,y,x
if(P.c9(a))return b+"..."+c
z=new P.c1(b)
y=$.$get$aM()
y.push(a)
try{x=z
x.a=P.dp(x.ga_(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
c9:function(a){var z,y
for(z=0;y=$.$get$aM(),z<y.length;++z)if(a===y[z])return!0
return!1},
jA:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.u();t=s,s=r){r=z.gD(z);++x
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
bU:function(a,b){var z,y
z=P.T(null,null,null,b)
for(y=J.aT(a);y.u();)z.M(0,y.gD(y))
return z},
d8:function(a){var z,y,x
z={}
if(P.c9(a))return"{...}"
y=new P.c1("")
try{$.$get$aM().push(a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.co(a,new P.fU(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.$get$aM()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
iD:{"^":"ix;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.c6(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.d8(b)},
d8:function(a){var z=this.d
if(z==null)return!1
return this.az(z[this.aw(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.J(this))
z=z.b}},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c7()
this.b=z}return this.bd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c7()
this.c=y}return this.bd(y,b)}else return this.d6(0,b)},
d6:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c7()
this.d=z}y=this.aw(b)
x=z[y]
if(x==null)z[y]=[this.aD(b)]
else{if(this.az(x,b)>=0)return!1
x.push(this.aD(b))}return!0},
c1:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bn(this.c,b)
else return this.dh(0,b)},
dh:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aw(b)]
x=this.az(y,b)
if(x<0)return!1
this.br(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.av()}},
bd:function(a,b){if(a[b]!=null)return!1
a[b]=this.aD(b)
return!0},
bn:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.br(z)
delete a[b]
return!0},
av:function(){this.r=this.r+1&67108863},
aD:function(a){var z,y
z=new P.iE(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.av()
return z},
br:function(a){var z,y
z=a.gdg()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.av()},
aw:function(a){return J.a0(a)&0x3ffffff},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].gda(),b))return y
return-1},
t:{
c7:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iE:{"^":"c;da:a<,b,dg:c<"},
c6:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
ix:{"^":"hv;$ti"},
lr:{"^":"c;$ti"},
d6:{"^":"dU;$ti",$isi:1},
k:{"^":"c;$ti",
gK:function(a){return new H.d7(a,this.gi(a),0,null,[H.b5(this,a,"k",0)])},
v:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.A(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.J(a))}},
dU:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.A(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.J(a))}return y},
b1:function(a,b){return H.dq(a,b,null,H.b5(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.x([],[H.b5(this,a,"k",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.ab(z,0,this.gi(a),a)
C.c.ab(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bQ(a,"[","]")}},
bW:{"^":"P;$ti"},
fU:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
P:{"^":"c;$ti",
B:function(a,b){var z,y
for(z=J.aT(this.gN(a));z.u();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a1(this.gN(a))},
k:function(a){return P.d8(a)}},
hw:{"^":"c;$ti",
P:function(a,b){var z
for(z=J.aT(b);z.u();)this.M(0,z.gD(z))},
k:function(a){return P.bQ(this,"{","}")},
B:function(a,b){var z
for(z=new P.c6(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)}},
hv:{"^":"hw;$ti"},
dU:{"^":"c+k;$ti"}}],["","",,P,{"^":"",
fx:function(a){var z=J.q(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.aG(a)+"'"},
bO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fx(a)},
cV:function(a){return new P.ii(a)},
ak:function(a){H.bA(H.b(a))},
ca:{"^":"c;"},
"+bool":0,
cM:{"^":"c;dv:a<,b",
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.cM))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.gdv())},
gC:function(a){var z=this.a
return(z^C.b.bo(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fm(H.hl(this))
y=P.aU(H.hj(this))
x=P.aU(H.hf(this))
w=P.aU(H.hg(this))
v=P.aU(H.hi(this))
u=P.aU(H.hk(this))
t=P.fn(H.hh(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fm:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fn:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aU:function(a){if(a>=10)return""+a
return"0"+a}}},
aN:{"^":"aP;"},
"+double":0,
aV:{"^":"c;a5:a<",
l:function(a,b){return new P.aV(C.b.l(this.a,b.ga5()))},
F:function(a,b){return new P.aV(this.a-b.ga5())},
X:function(a,b){return C.b.X(this.a,b.ga5())},
aa:function(a,b){return C.b.aa(this.a,b.ga5())},
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.ga5())},
k:function(a){var z,y,x,w,v
z=new P.fu()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.b.a0(y,6e7)%60)
w=z.$1(C.b.a0(y,1e6)%60)
v=new P.ft().$1(y%1e6)
return""+C.b.a0(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
t:{
fs:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ft:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fu:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
G:{"^":"c;",
gZ:function(){return H.aj(this.$thrownJsError)}},
de:{"^":"G;",
k:function(a){return"Throw of null."}},
a9:{"^":"G;a,b,c,d",
gay:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gax:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gay()+y+x
if(!this.a)return w
v=this.gax()
u=P.bO(this.b)
return w+v+": "+H.b(u)},
t:{
cB:function(a,b,c){return new P.a9(!0,a,b,c)},
f6:function(a){return new P.a9(!1,null,a,"Must not be null")}}},
dg:{"^":"a9;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
t:{
bk:function(a,b,c){return new P.dg(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.dg(b,c,!0,a,d,"Invalid value")},
hm:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.A(a)
if(0<=a){if(typeof c!=="number")return H.A(c)
z=a>c}else z=!0
if(z)throw H.a(P.am(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.A(c)
z=b>c}else z=!0
if(z)throw H.a(P.am(b,a,c,"end",f))
return b}return c}}},
fF:{"^":"a9;e,i:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){if(J.aR(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
t:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a1(b)
return new P.fF(b,z,!0,a,c,"Index out of range")}}},
hT:{"^":"G;a",
k:function(a){return"Unsupported operation: "+this.a},
t:{
r:function(a){return new P.hT(a)}}},
hR:{"^":"G;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
t:{
dJ:function(a){return new P.hR(a)}}},
bn:{"^":"G;a",
k:function(a){return"Bad state: "+this.a},
t:{
c0:function(a){return new P.bn(a)}}},
fh:{"^":"G;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bO(z))+"."},
t:{
J:function(a){return new P.fh(a)}}},
dl:{"^":"c;",
k:function(a){return"Stack Overflow"},
gZ:function(){return},
$isG:1},
fl:{"^":"G;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kN:{"^":"c;"},
ii:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
F:{"^":"aP;"},
"+int":0,
bg:{"^":"c;$ti",
aS:["cA",function(a,b){return new H.dK(this,b,[H.ce(this,"bg",0)])}],
B:function(a,b){var z
for(z=this.gK(this);z.u();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gK(this)
for(y=0;z.u();)++y
return y},
gY:function(a){var z,y
z=this.gK(this)
if(!z.u())throw H.a(H.d0())
y=z.gD(z)
if(z.u())throw H.a(H.fJ())
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.f6("index"))
if(b<0)H.M(P.am(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.u();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.fH(this,"(",")")}},
fK:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
bV:{"^":"c;$ti"},
aY:{"^":"c;",
gC:function(a){return P.c.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aP:{"^":"c;"},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gC:function(a){return H.aF(this)},
k:function(a){return"Instance of '"+H.aG(this)+"'"},
toString:function(){return this.k(this)}},
aH:{"^":"c;"},
n:{"^":"c;"},
"+String":0,
c1:{"^":"c;a_:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dp:function(a,b,c){var z=J.aT(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.u())}else{a+=H.b(z.gD(z))
for(;z.u();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fv:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).T(z,a,b,c)
y.toString
z=new H.dK(new W.Q(y),new W.fw(),[W.t])
return z.gY(z)},
cU:function(a){return"wheel"},
ax:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.S(x)}return z},
ie:function(a,b){return document.createElement(a)},
ai:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e5:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.i8(a)
if(!!J.q(z).$isC)return z
return}else return a},
e9:function(a){var z=$.w
if(z===C.f)return a
return z.dE(a)},
u:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kd:{"^":"bZ;m:x=,n:y=,I:z=","%":"Accelerometer|LinearAccelerationSensor"},
ke:{"^":"h;i:length=","%":"AccessibleNodeList"},
kf:{"^":"u;ai:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kg:{"^":"u;ai:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kl:{"^":"u;ai:href}","%":"HTMLBaseElement"},
bI:{"^":"u;",$isbI:1,"%":"HTMLBodyElement"},
km:{"^":"u;J:name=","%":"HTMLButtonElement"},
kn:{"^":"u;G:height},H:width}",
cn:function(a,b,c){var z=a.getContext(b,P.jM(c,null))
return z},
"%":"HTMLCanvasElement"},
ko:{"^":"h;",
ao:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kp:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kr:{"^":"W;V:style=","%":"CSSFontFaceRule"},
ks:{"^":"W;V:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kt:{"^":"W;V:style=","%":"CSSPageRule"},
ku:{"^":"bc;i:length=","%":"CSSPerspective"},
kv:{"^":"bL;m:x=,n:y=","%":"CSSPositionValue"},
kw:{"^":"bc;m:x=,n:y=,I:z=","%":"CSSRotation"},
W:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kx:{"^":"bc;m:x=,n:y=,I:z=","%":"CSSScale"},
fi:{"^":"i6;i:length=",
be:function(a,b){var z,y
z=$.$get$cK()
y=z[b]
if(typeof y==="string")return y
y=this.ds(a,b)
z[b]=y
return y},
ds:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fo()+b
if(z in a)return z
return b},
dn:function(a,b,c,d){a.setProperty(b,c,d)},
sG:function(a,b){a.height=b},
sH:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"c;",
sdT:function(a,b){this.dn(a,this.be(a,"float"),b,"")}},
ky:{"^":"W;V:style=","%":"CSSStyleRule"},
bL:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bc:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kz:{"^":"bL;i:length=","%":"CSSTransformValue"},
kA:{"^":"bc;m:x=,n:y=,I:z=","%":"CSSTranslation"},
kB:{"^":"bL;i:length=","%":"CSSUnparsedValue"},
kC:{"^":"W;V:style=","%":"CSSViewportRule"},
kD:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kE:{"^":"h;m:x=,n:y=,I:z=","%":"DeviceAcceleration"},
fp:{"^":"u;","%":"HTMLDivElement"},
kF:{"^":"t;",
gaM:function(a){return new W.b2(a,"mousedown",!1,[W.K])},
gaN:function(a){return new W.b2(a,"mousemove",!1,[W.K])},
gaO:function(a){return new W.b2(a,"mouseup",!1,[W.K])},
gaP:function(a){return new W.b2(a,W.cU(a),!1,[W.aI])},
"%":"Document|HTMLDocument|XMLDocument"},
kG:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
kH:{"^":"fq;",
gan:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z},
"%":"DOMPoint"},
fq:{"^":"h;",
gan:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z},
"%":";DOMPointReadOnly"},
kI:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.a3]},
$isp:1,
$asp:function(){return[P.a3]},
$ask:function(){return[P.a3]},
$isi:1,
$asi:function(){return[P.a3]},
$asm:function(){return[P.a3]},
"%":"ClientRectList|DOMRectList"},
fr:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gH(a))+" x "+H.b(this.gG(a))},
E:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa3)return!1
return a.left===z.gbW(b)&&a.top===z.gc5(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.dT(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc6:function(a){return new P.ad(a.left,a.top,[null])},
gG:function(a){return a.height},
gbW:function(a){return a.left},
gc5:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa3:1,
$asa3:I.ap,
"%":";DOMRectReadOnly"},
kJ:{"^":"ic;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isp:1,
$asp:function(){return[P.n]},
$ask:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"DOMStringList"},
kK:{"^":"h;i:length=","%":"DOMTokenList"},
al:{"^":"t;V:style=,bl:namespaceURI=,e8:tagName=",
gdB:function(a){return new W.id(a)},
k:function(a){return a.localName},
T:["aq",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cT
if(z==null){z=H.x([],[W.da])
y=new W.db(z)
z.push(W.dQ(null))
z.push(W.e1())
$.cT=y
d=y}else d=z
z=$.cS
if(z==null){z=new W.e4(d)
$.cS=z
c=z}else{z.a=d
c=z}}if($.a2==null){z=document
y=z.implementation.createHTMLDocument("")
$.a2=y
$.bN=y.createRange()
y=$.a2
y.toString
x=y.createElement("base")
J.eW(x,z.baseURI)
$.a2.head.appendChild(x)}z=$.a2
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a2
if(!!this.$isbI)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a2.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.A(C.M,a.tagName)){$.bN.selectNodeContents(w)
v=$.bN.createContextualFragment(b)}else{w.innerHTML=b
v=$.a2.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a2.body
if(w==null?z!=null:w!==z)J.cu(w)
c.b_(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"dN",null,null,"gej",5,5,null],
cq:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
cp:function(a,b){return this.cq(a,b,null,null)},
aT:function(a){return a.getBoundingClientRect()},
gaM:function(a){return new W.af(a,"mousedown",!1,[W.K])},
gaN:function(a){return new W.af(a,"mousemove",!1,[W.K])},
gaO:function(a){return new W.af(a,"mouseup",!1,[W.K])},
gaP:function(a){return new W.af(a,W.cU(a),!1,[W.aI])},
$isal:1,
"%":";Element"},
fw:{"^":"j:0;",
$1:function(a){return!!J.q(a).$isal}},
kL:{"^":"u;G:height},J:name=,H:width}","%":"HTMLEmbedElement"},
kM:{"^":"aa;O:error=","%":"ErrorEvent"},
aa:{"^":"h;",
am:function(a){return a.preventDefault()},
$isaa:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
C:{"^":"h;",
bv:["cw",function(a,b,c,d){if(c!=null)this.d7(a,b,c,!1)}],
d7:function(a,b,c,d){return a.addEventListener(b,H.a5(c,1),!1)},
di:function(a,b,c,d){return a.removeEventListener(b,H.a5(c,1),!1)},
$isC:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dZ|e_|e2|e3"},
l5:{"^":"u;J:name=","%":"HTMLFieldSetElement"},
l6:{"^":"ik;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bd]},
$isp:1,
$asp:function(){return[W.bd]},
$ask:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$asm:function(){return[W.bd]},
"%":"FileList"},
l7:{"^":"C;O:error=","%":"FileReader"},
l8:{"^":"C;O:error=,i:length=","%":"FileWriter"},
la:{"^":"h;V:style=","%":"FontFace"},
lb:{"^":"C;",
ek:function(a,b,c){return a.forEach(H.a5(b,3),c)},
B:function(a,b){b=H.a5(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
ld:{"^":"u;i:length=,J:name=","%":"HTMLFormElement"},
lf:{"^":"bZ;m:x=,n:y=,I:z=","%":"Gyroscope"},
lg:{"^":"h;i:length=","%":"History"},
lh:{"^":"iz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
li:{"^":"u;G:height},J:name=,H:width}","%":"HTMLIFrameElement"},
lj:{"^":"u;G:height},H:width}","%":"HTMLImageElement"},
ll:{"^":"u;G:height},J:name=,H:width}","%":"HTMLInputElement"},
bh:{"^":"dI;",
geg:function(a){return a.which},
$isbh:1,
"%":"KeyboardEvent"},
lq:{"^":"u;ai:href}","%":"HTMLLinkElement"},
ls:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lt:{"^":"bZ;m:x=,n:y=,I:z=","%":"Magnetometer"},
lu:{"^":"u;J:name=","%":"HTMLMapElement"},
fX:{"^":"u;O:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lw:{"^":"h;i:length=","%":"MediaList"},
lx:{"^":"C;aJ:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
ly:{"^":"C;",
bv:function(a,b,c,d){if(J.I(b,"message"))a.start()
this.cw(a,b,c,!1)},
"%":"MessagePort"},
lz:{"^":"u;J:name=","%":"HTMLMetaElement"},
lA:{"^":"iF;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gN:function(a){var z=H.x([],[P.n])
this.B(a,new W.fZ(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.n,null]},
"%":"MIDIInputMap"},
fZ:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lB:{"^":"iG;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gN:function(a){var z=H.x([],[P.n])
this.B(a,new W.h_(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
h_:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lC:{"^":"iI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bj]},
$isp:1,
$asp:function(){return[W.bj]},
$ask:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$asm:function(){return[W.bj]},
"%":"MimeTypeArray"},
K:{"^":"dI;bF:button=",
gc0:function(a){var z,y,x
if(!!a.offsetX)return new P.ad(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.e5(z)).$isal)throw H.a(P.r("offsetX is only supported on elements"))
y=W.e5(z)
z=[null]
x=new P.ad(a.clientX,a.clientY,z).F(0,J.eO(J.eQ(y)))
return new P.ad(J.cv(x.a),J.cv(x.b),z)}},
$isK:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
Q:{"^":"d6;a",
gY:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c0("No elements"))
if(y>1)throw H.a(P.c0("More than one element"))
return z.firstChild},
P:function(a,b){var z,y,x,w
z=J.q(b)
if(!!z.$isQ){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gK(b),y=this.a;z.u();)y.appendChild(z.gD(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gK:function(a){var z=this.a.childNodes
return new W.cW(z,z.length,-1,null,[H.b5(C.P,z,"m",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asd6:function(){return[W.t]},
$ask:function(){return[W.t]},
$asi:function(){return[W.t]},
$asdU:function(){return[W.t]}},
t:{"^":"C;al:parentNode=,aQ:previousSibling=",
gc_:function(a){return new W.Q(a)},
e4:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cz(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
lK:{"^":"h;",
e3:[function(a){return a.previousNode()},"$0","gaQ",1,0,4],
"%":"NodeIterator"},
h8:{"^":"iK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lN:{"^":"u;G:height},J:name=,H:width}","%":"HTMLObjectElement"},
lP:{"^":"u;J:name=","%":"HTMLOutputElement"},
lQ:{"^":"u;J:name=","%":"HTMLParamElement"},
aZ:{"^":"h;i:length=","%":"Plugin"},
lS:{"^":"iO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.aZ]},
$isp:1,
$asp:function(){return[W.aZ]},
$ask:function(){return[W.aZ]},
$isi:1,
$asi:function(){return[W.aZ]},
$asm:function(){return[W.aZ]},
"%":"PluginArray"},
lV:{"^":"h;",
aT:function(a){return a.getBoundingClientRect()},
"%":"Range"},
m0:{"^":"iU;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gN:function(a){var z=H.x([],[P.n])
this.B(a,new W.hs(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hs:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
m1:{"^":"u;i:length=,J:name=","%":"HTMLSelectElement"},
bZ:{"^":"C;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
m2:{"^":"aa;O:error=","%":"SensorErrorEvent"},
m3:{"^":"u;J:name=","%":"HTMLSlotElement"},
m4:{"^":"e_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bl]},
$isp:1,
$asp:function(){return[W.bl]},
$ask:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$asm:function(){return[W.bl]},
"%":"SourceBufferList"},
m5:{"^":"j_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bm]},
$isp:1,
$asp:function(){return[W.bm]},
$ask:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$asm:function(){return[W.bm]},
"%":"SpeechGrammarList"},
m6:{"^":"aa;O:error=","%":"SpeechRecognitionError"},
b0:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
m8:{"^":"j2;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gN:function(a){var z=H.x([],[P.n])
this.B(a,new W.hE(z))
return z},
gi:function(a){return a.length},
$asP:function(){return[P.n,P.n]},
"%":"Storage"},
hE:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
hN:{"^":"u;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=W.fv("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.Q(y).P(0,J.eL(z))
return y},
"%":"HTMLTableElement"},
mb:{"^":"u;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.T(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.gY(z)
x.toString
z=new W.Q(x)
w=z.gY(z)
y.toString
w.toString
new W.Q(y).P(0,new W.Q(w))
return y},
"%":"HTMLTableRowElement"},
mc:{"^":"u;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.T(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.gY(z)
y.toString
x.toString
new W.Q(y).P(0,new W.Q(x))
return y},
"%":"HTMLTableSectionElement"},
ds:{"^":"u;",$isds:1,"%":"HTMLTemplateElement"},
md:{"^":"u;J:name=","%":"HTMLTextAreaElement"},
mf:{"^":"ja;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bq]},
$isp:1,
$asp:function(){return[W.bq]},
$ask:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asm:function(){return[W.bq]},
"%":"TextTrackCueList"},
mg:{"^":"e3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bp]},
$isp:1,
$asp:function(){return[W.bp]},
$ask:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$asm:function(){return[W.bp]},
"%":"TextTrackList"},
mh:{"^":"h;i:length=","%":"TimeRanges"},
mi:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.br]},
$isp:1,
$asp:function(){return[W.br]},
$ask:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$asm:function(){return[W.br]},
"%":"TouchList"},
mj:{"^":"h;i:length=","%":"TrackDefaultList"},
mm:{"^":"h;",
el:[function(a){return a.parentNode()},"$0","gal",1,0,4],
e3:[function(a){return a.previousNode()},"$0","gaQ",1,0,4],
"%":"TreeWalker"},
dI:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mo:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mq:{"^":"h;m:x=,I:z=","%":"VRStageBoundsPoint"},
mr:{"^":"fX;G:height},H:width}","%":"HTMLVideoElement"},
ms:{"^":"C;i:length=","%":"VideoTrackList"},
aI:{"^":"K;",
gdP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isaI:1,
"%":"WheelEvent"},
hV:{"^":"C;",
gdA:function(a){var z,y
z=P.aP
y=new P.ah(0,$.w,null,[z])
this.dd(a)
this.dj(a,W.e9(new W.hW(new P.j6(y,[z]))))
return y},
dj:function(a,b){return a.requestAnimationFrame(H.a5(b,1))},
dd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hW:{"^":"j:0;a",
$1:function(a){this.a.dK(0,a)}},
mt:{"^":"C;"},
mx:{"^":"t;J:name=,bl:namespaceURI=","%":"Attr"},
my:{"^":"jl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.W]},
$isp:1,
$asp:function(){return[W.W]},
$ask:function(){return[W.W]},
$isi:1,
$asi:function(){return[W.W]},
$asm:function(){return[W.W]},
"%":"CSSRuleList"},
mz:{"^":"fr;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
E:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa3)return!1
return a.left===z.gbW(b)&&a.top===z.gc5(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dT(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc6:function(a){return new P.ad(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mA:{"^":"jn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bf]},
$isp:1,
$asp:function(){return[W.bf]},
$ask:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$asm:function(){return[W.bf]},
"%":"GamepadList"},
mD:{"^":"jp;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mE:{"^":"jr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b0]},
$isp:1,
$asp:function(){return[W.b0]},
$ask:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$asm:function(){return[W.b0]},
"%":"SpeechRecognitionResultList"},
mF:{"^":"jt;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bo]},
$isp:1,
$asp:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$asm:function(){return[W.bo]},
"%":"StyleSheetList"},
i3:{"^":"bW;de:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gN(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gN:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.x([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.f(v)
if(u.gbl(v)==null)y.push(u.gJ(v))}return y},
$asbW:function(){return[P.n,P.n]},
$asP:function(){return[P.n,P.n]}},
id:{"^":"i3;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gN(this).length}},
b2:{"^":"dn;a,b,c,$ti",
bY:function(a,b,c,d){return W.ag(this.a,this.b,a,!1,H.B(this,0))}},
af:{"^":"b2;a,b,c,$ti"},
ig:{"^":"hF;a,b,c,d,e,$ti",
d0:function(a,b,c,d,e){this.dt()},
dG:function(a){if(this.b==null)return
this.du()
this.b=null
this.d=null
return},
dt:function(){var z=this.d
if(z!=null&&this.a<=0)J.et(this.b,this.c,z,!1)},
du:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.es(x,this.c,z,!1)}},
t:{
ag:function(a,b,c,d,e){var z=c==null?null:W.e9(new W.ih(c))
z=new W.ig(0,a,b,z,!1,[e])
z.d0(a,b,c,!1,e)
return z}}},
ih:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
c4:{"^":"c;cg:a<",
d2:function(a){var z,y
z=$.$get$c5()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.L[y],W.jV())
for(y=0;y<12;++y)z.j(0,C.p[y],W.jW())}},
a1:function(a){return $.$get$dR().A(0,W.ax(a))},
W:function(a,b,c){var z,y,x
z=W.ax(a)
y=$.$get$c5()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
t:{
dQ:function(a){var z,y
z=document.createElement("a")
y=new W.iV(z,window.location)
y=new W.c4(y)
y.d2(a)
return y},
mB:[function(a,b,c,d){return!0},"$4","jV",16,0,9],
mC:[function(a,b,c,d){var z,y,x,w,v
z=d.gcg()
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
return z},"$4","jW",16,0,9]}},
m:{"^":"c;$ti",
gK:function(a){return new W.cW(a,this.gi(a),-1,null,[H.b5(this,a,"m",0)])}},
db:{"^":"c;a",
a1:function(a){return C.c.bw(this.a,new W.ha(a))},
W:function(a,b,c){return C.c.bw(this.a,new W.h9(a,b,c))}},
ha:{"^":"j:0;a",
$1:function(a){return a.a1(this.a)}},
h9:{"^":"j:0;a,b,c",
$1:function(a){return a.W(this.a,this.b,this.c)}},
iW:{"^":"c;cg:d<",
d4:function(a,b,c,d){var z,y,x
this.a.P(0,c)
z=b.aS(0,new W.iX())
y=b.aS(0,new W.iY())
this.b.P(0,z)
x=this.c
x.P(0,C.N)
x.P(0,y)},
a1:function(a){return this.a.A(0,W.ax(a))},
W:["cC",function(a,b,c){var z,y
z=W.ax(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dz(c)
else if(y.A(0,"*::"+b))return this.d.dz(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
iX:{"^":"j:0;",
$1:function(a){return!C.c.A(C.p,a)}},
iY:{"^":"j:0;",
$1:function(a){return C.c.A(C.p,a)}},
j7:{"^":"iW;e,a,b,c,d",
W:function(a,b,c){if(this.cC(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cp(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
t:{
e1:function(){var z=P.n
z=new W.j7(P.bU(C.o,z),P.T(null,null,null,z),P.T(null,null,null,z),P.T(null,null,null,z),null)
z.d4(null,new H.fV(C.o,new W.j8(),[H.B(C.o,0),null]),["TEMPLATE"],null)
return z}}},
j8:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
j5:{"^":"c;",
a1:function(a){var z=J.q(a)
if(!!z.$isdi)return!1
z=!!z.$isz
if(z&&W.ax(a)==="foreignObject")return!1
if(z)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.i.ct(b,"on"))return!1
return this.a1(a)}},
cW:{"^":"c;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aS(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
i7:{"^":"c;a",$isC:1,t:{
i8:function(a){if(a===window)return a
else return new W.i7(a)}}},
da:{"^":"c;"},
lL:{"^":"c;"},
mn:{"^":"c;"},
iV:{"^":"c;a,b"},
e4:{"^":"c;a",
b_:function(a){new W.ji(this).$2(a,null)},
a6:function(a,b){if(b==null)J.cu(a)
else b.removeChild(a)},
dm:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cp(a)
x=y.gde().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.S(t)}v="element unprintable"
try{v=J.av(a)}catch(t){H.S(t)}try{u=W.ax(a)
this.dl(a,b,z,v,u,y,x)}catch(t){if(H.S(t) instanceof P.a9)throw t
else{this.a6(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dl:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a1(a)){this.a6(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.a6(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gN(f)
y=H.x(z.slice(0),[H.B(z,0)])
for(x=f.gN(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.W(a,J.eY(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$isds)this.b_(a.content)}},
ji:{"^":"j:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dm(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eM(z)}catch(w){H.S(w)
v=z
if(x){u=J.f(v)
if(u.gal(v)!=null){u.gal(v)
u.gal(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
i6:{"^":"h+fj;"},
i9:{"^":"h+k;"},
ia:{"^":"i9+m;"},
ib:{"^":"h+k;"},
ic:{"^":"ib+m;"},
ij:{"^":"h+k;"},
ik:{"^":"ij+m;"},
iy:{"^":"h+k;"},
iz:{"^":"iy+m;"},
iF:{"^":"h+P;"},
iG:{"^":"h+P;"},
iH:{"^":"h+k;"},
iI:{"^":"iH+m;"},
iJ:{"^":"h+k;"},
iK:{"^":"iJ+m;"},
iN:{"^":"h+k;"},
iO:{"^":"iN+m;"},
iU:{"^":"h+P;"},
dZ:{"^":"C+k;"},
e_:{"^":"dZ+m;"},
iZ:{"^":"h+k;"},
j_:{"^":"iZ+m;"},
j2:{"^":"h+P;"},
j9:{"^":"h+k;"},
ja:{"^":"j9+m;"},
e2:{"^":"C+k;"},
e3:{"^":"e2+m;"},
je:{"^":"h+k;"},
jf:{"^":"je+m;"},
jk:{"^":"h+k;"},
jl:{"^":"jk+m;"},
jm:{"^":"h+k;"},
jn:{"^":"jm+m;"},
jo:{"^":"h+k;"},
jp:{"^":"jo+m;"},
jq:{"^":"h+k;"},
jr:{"^":"jq+m;"},
js:{"^":"h+k;"},
jt:{"^":"js+m;"}}],["","",,P,{"^":"",
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.O()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jM:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.co(a,new P.jN(z))
return z},
cR:function(){var z=$.cQ
if(z==null){z=J.bC(window.navigator.userAgent,"Opera",0)
$.cQ=z}return z},
fo:function(){var z,y
z=$.cN
if(z!=null)return z
y=$.cO
if(y==null){y=J.bC(window.navigator.userAgent,"Firefox",0)
$.cO=y}if(y)z="-moz-"
else{y=$.cP
if(y==null){y=P.cR()!==!0&&J.bC(window.navigator.userAgent,"Trident/",0)
$.cP=y}if(y)z="-ms-"
else z=P.cR()===!0?"-o-":"-webkit-"}$.cN=z
return z},
jN:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",m_:{"^":"C;O:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mk:{"^":"C;O:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ad:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
E:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ad))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a0(this.a)
y=J.a0(this.b)
return P.iA(P.dS(P.dS(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ad(y,C.a.l(z,x),this.$ti)},
F:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.A(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.F()
if(typeof y!=="number")return H.A(y)
return new P.ad(z-x,w-y,this.$ti)}},
iP:{"^":"c;$ti"},
a3:{"^":"iP;$ti"}}],["","",,P,{"^":"",kO:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},kP:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},kQ:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},kR:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},kS:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},kT:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},kU:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},kV:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},kW:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},kX:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},kY:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},kZ:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},l_:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},l0:{"^":"z;m:x=,n:y=,I:z=","%":"SVGFEPointLightElement"},l1:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},l2:{"^":"z;m:x=,n:y=,I:z=","%":"SVGFESpotLightElement"},l3:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},l4:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},l9:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},lc:{"^":"ay;m:x=,n:y=","%":"SVGForeignObjectElement"},fE:{"^":"ay;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ay:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lk:{"^":"ay;m:x=,n:y=","%":"SVGImageElement"},lp:{"^":"iC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.d4]},
$isi:1,
$asi:function(){return[P.d4]},
$asm:function(){return[P.d4]},
"%":"SVGLengthList"},lv:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},lM:{"^":"iM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.df]},
$isi:1,
$asi:function(){return[P.df]},
$asm:function(){return[P.df]},
"%":"SVGNumberList"},lR:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},lT:{"^":"h;m:x=,n:y=","%":"SVGPoint"},lU:{"^":"h;i:length=","%":"SVGPointList"},lW:{"^":"h;m:x=,n:y=","%":"SVGRect"},lX:{"^":"fE;m:x=,n:y=","%":"SVGRectElement"},di:{"^":"z;",$isdi:1,"%":"SVGScriptElement"},m9:{"^":"j4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"SVGStringList"},z:{"^":"al;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.x([],[W.da])
z.push(W.dQ(null))
z.push(W.e1())
z.push(new W.j5())
c=new W.e4(new W.db(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dN(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.Q(w)
u=z.gY(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaM:function(a){return new W.af(a,"mousedown",!1,[W.K])},
gaN:function(a){return new W.af(a,"mousemove",!1,[W.K])},
gaO:function(a){return new W.af(a,"mouseup",!1,[W.K])},
gaP:function(a){return new W.af(a,"mousewheel",!1,[W.aI])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ma:{"^":"ay;m:x=,n:y=","%":"SVGSVGElement"},hO:{"^":"ay;","%":"SVGTextPathElement;SVGTextContentElement"},me:{"^":"hO;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},ml:{"^":"jh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dv]},
$isi:1,
$asi:function(){return[P.dv]},
$asm:function(){return[P.dv]},
"%":"SVGTransformList"},mp:{"^":"ay;m:x=,n:y=","%":"SVGUseElement"},iB:{"^":"h+k;"},iC:{"^":"iB+m;"},iL:{"^":"h+k;"},iM:{"^":"iL+m;"},j3:{"^":"h+k;"},j4:{"^":"j3+m;"},jg:{"^":"h+k;"},jh:{"^":"jg+m;"}}],["","",,P,{"^":"",kh:{"^":"h;i:length=","%":"AudioBuffer"},ki:{"^":"i4;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gN:function(a){var z=H.x([],[P.n])
this.B(a,new P.f8(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.n,null]},
"%":"AudioParamMap"},f8:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},kj:{"^":"h;aJ:enabled=","%":"AudioTrack"},kk:{"^":"C;i:length=","%":"AudioTrackList"},f9:{"^":"C;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lO:{"^":"f9;i:length=","%":"OfflineAudioContext"},i4:{"^":"h+P;"}}],["","",,P,{"^":"",lY:{"^":"h;",
bu:function(a,b){return a.activeTexture(b)},
bx:function(a,b,c){return a.attachShader(b,c)},
by:function(a,b,c){return a.bindBuffer(b,c)},
bA:function(a,b,c){return a.bindFramebuffer(b,c)},
bB:function(a,b,c){return a.bindTexture(b,c)},
bC:function(a,b){return a.blendEquation(b)},
bD:function(a,b,c){return a.blendFunc(b,c)},
bE:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bL:function(a,b){return a.createShader(b)},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
ao:function(a){return P.R(a.getContextAttributes())},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
bX:function(a,b){return a.linkProgram(b)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c7:function(a,b,c){return a.uniform1f(b,c)},
c8:function(a,b,c){return a.uniform1fv(b,c)},
c9:function(a,b,c){return a.uniform1i(b,c)},
ca:function(a,b,c){return a.uniform1iv(b,c)},
cb:function(a,b,c){return a.uniform2fv(b,c)},
cc:function(a,b,c){return a.uniform3fv(b,c)},
cd:function(a,b,c){return a.uniform4fv(b,c)},
ce:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
cj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lZ:{"^":"h;",
dC:function(a,b){return a.beginTransformFeedback(b)},
dF:function(a,b){return a.bindVertexArray(b)},
dO:function(a){return a.createVertexArray()},
dQ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dR:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dS:function(a){return a.endTransformFeedback()},
ed:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ee:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bu:function(a,b){return a.activeTexture(b)},
bx:function(a,b,c){return a.attachShader(b,c)},
by:function(a,b,c){return a.bindBuffer(b,c)},
bA:function(a,b,c){return a.bindFramebuffer(b,c)},
bB:function(a,b,c){return a.bindTexture(b,c)},
bC:function(a,b){return a.blendEquation(b)},
bD:function(a,b,c){return a.blendFunc(b,c)},
bE:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bL:function(a,b){return a.createShader(b)},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
ao:function(a){return P.R(a.getContextAttributes())},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
bX:function(a,b){return a.linkProgram(b)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c7:function(a,b,c){return a.uniform1f(b,c)},
c8:function(a,b,c){return a.uniform1fv(b,c)},
c9:function(a,b,c){return a.uniform1i(b,c)},
ca:function(a,b,c){return a.uniform1iv(b,c)},
cb:function(a,b,c){return a.uniform2fv(b,c)},
cc:function(a,b,c){return a.uniform3fv(b,c)},
cd:function(a,b,c){return a.uniform4fv(b,c)},
ce:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cf:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ci:function(a,b){return a.useProgram(b)},
cj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cl:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",m7:{"^":"j1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.R(a.item(b))},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.bV]},
$isi:1,
$asi:function(){return[P.bV]},
$asm:function(){return[P.bV]},
"%":"SQLResultSetRowList"},j0:{"^":"h+k;"},j1:{"^":"j0+m;"}}],["","",,G,{"^":"",
hY:function(a){var z,y,x,w
z=H.x(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a9(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.bL(a,b)
z.b0(a,y,c)
z.bI(a,y)
x=z.aX(a,y,35713)
if(x!=null&&J.I(x,!1)){w=z.aW(a,y)
P.ak("E:Compilation failed:")
P.ak("E:"+G.hY(c))
P.ak("E:Failure:")
P.ak(C.i.l("E:",w))
throw H.a(w)}return y},
dc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.w(b)
d.ap(0,a)
e.w(c)
e.ap(0,a)
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
r=Math.sqrt(e.gak())
if(r===0)return!1
e.co(0,-1/r)
return!0},
cX:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bF(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bG(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cs(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fB:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bF(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bG(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fC:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bF(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bG(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cs(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.eP(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fA:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aS(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aS(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aS(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aS(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ab(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.F]],v=[P.aN],u=[T.ae],t=[T.e],s=[T.l];y.u();){r=y.d
if(!x.ah(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eg>0)H.bA("I: "+q)
continue}p=z.h(0,r)
switch($.$get$U().h(0,r).a){case"vec2":b.a3(r,G.fB(H.b7(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a3(r,G.cX(H.b7(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a3(r,G.fC(H.b7(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a3(r,new Float32Array(H.bt(H.b7(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a3(r,G.fA(H.b7(p,"$isi",w,"$asi"),null),4)
break}}},
d_:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.O()
w=J.eC(z.a)
v=new G.fY(z,w,4,x,y,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)
u=G.cX(c.d,null)
x.j(0,"aPosition",J.bD(z.a))
v.ch=u
v.b7("aPosition",u,3)
t=$.$get$U().h(0,"aPosition")
if(t==null)H.M("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.b8(z.a,w)
z.bT(0,s,0)
z.ck(0,x.h(0,"aPosition"),s,t.b8(),5126,!1,0,0)
y=c.cL()
v.y=J.bD(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bt(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bt(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bt(y))
v.Q=5125}J.b8(z.a,w)
y=v.y
x=v.cx
J.bB(z.a,34963,y)
J.cl(z.a,34963,x,35048)
G.iw(c,v)
return v},
aE:{"^":"c;aJ:c>"},
c2:{"^":"aE;d,a,b,c",
b9:function(){return this.d},
k:function(a){var z,y,x,w
z=H.x(["{"+H.b(new H.dH(H.jS(this),null))+"}["+this.a+"]"],[P.n])
for(y=this.d,x=new H.ab(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a9(z,"\n")}},
fa:{"^":"dk;"},
fc:{"^":"c;a,b",
bT:function(a,b,c){J.eI(this.a,b)
if(c>0)J.f3(this.a,b,c)},
ck:function(a,b,c,d,e,f,g,h){J.bB(this.a,34962,b)
J.f4(this.a,c,d,e,!1,g,h)}},
fD:{"^":"c;a,b,c,d,e"},
fy:{"^":"c;a,b,c"},
fz:{"^":"c;a,b,c,d"},
cZ:{"^":"c;a,b,c,d,e",
ac:function(a){switch($.$get$U().h(0,a).a){case"vec2":this.e.j(0,a,H.x([],[T.l]))
break
case"vec3":this.e.j(0,a,H.x([],[T.e]))
break
case"vec4":this.e.j(0,a,H.x([],[T.ae]))
break
case"float":this.e.j(0,a,H.x([],[P.aN]))
break
case"uvec4":this.e.j(0,a,H.x([],[[P.i,P.F]]))
break}},
cG:function(a){var z,y,x
z=this.d.length
for(y=this.b,x=0;x<a;++x,z+=3)y.push(new G.fy(z,z+1,z+2))},
b5:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.fz(z,z+1,z+2,z+3))},
as:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x].ag(0))},
ar:function(a,b){var z,y,x,w
z=this.e.h(0,a)
for(y=b.length,x=z&&C.c,w=0;w<b.length;b.length===y||(0,H.E)(b),++w)x.M(z,b[w].ag(0))},
cF:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=z&&C.c,x=0;x<4;++x)y.M(z,b[x].ag(0))},
cL:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.x(x,[P.F])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.d(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.d(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.d(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.d(w,u)
w[u]=x
r=u+1
if(r>=v)return H.d(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.d(w,r)
w[r]=p
r=u+3
if(r>=v)return H.d(w,r)
w[r]=x
x=u+4
if(x>=v)return H.d(w,x)
w[x]=p
p=u+5
if(p>=v)return H.d(w,p)
w[p]=q.d
u+=6}return w},
cM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.x(y,[T.e])
w=new T.e(new Float32Array(3))
v=new T.e(new Float32Array(3))
for(y=this.b,u=y.length,t=x.length,s=0;s<y.length;y.length===u||(0,H.E)(y),++s){r=y[s]
q=r.a
p=z.length
if(q>=p)return H.d(z,q)
o=z[q]
n=r.b
if(n>=p)return H.d(z,n)
m=z[n]
l=r.c
if(l>=p)return H.d(z,l)
G.dc(o,m,z[l],w,v)
p=new T.e(new Float32Array(3))
p.w(v)
if(q>=t)return H.d(x,q)
x[q]=p
q=new T.e(new Float32Array(3))
q.w(v)
if(n>=t)return H.d(x,n)
x[n]=q
q=new T.e(new Float32Array(3))
q.w(v)
if(l>=t)return H.d(x,l)
x[l]=q}for(y=this.c,u=y.length,s=0;s<y.length;y.length===u||(0,H.E)(y),++s){k=y[s]
q=k.a
p=z.length
if(q>=p)return H.d(z,q)
o=z[q]
n=k.b
if(n>=p)return H.d(z,n)
m=z[n]
l=k.c
if(l>=p)return H.d(z,l)
G.dc(o,m,z[l],w,v)
p=new T.e(new Float32Array(3))
p.w(v)
if(q>=t)return H.d(x,q)
x[q]=p
q=new T.e(new Float32Array(3))
q.w(v)
if(n>=t)return H.d(x,n)
x[n]=q
q=new T.e(new Float32Array(3))
q.w(v)
if(l>=t)return H.d(x,l)
x[l]=q
q=k.d
p=new T.e(new Float32Array(3))
p.w(v)
if(q>=t)return H.d(x,q)
x[q]=p}this.e.j(0,"aNormal",x)},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ab(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$U().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a9(z," ")}},
du:{"^":"c;a,b,c"},
dt:{"^":"c;a,b,c"},
fW:{"^":"c2;d,a,b,c",
cQ:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$cC())
z.j(0,"cStencilFunc",$.$get$dm())},
t:{
bX:function(a){var z=new G.fW(P.O(),a,!1,!0)
z.cQ(a)
return z}}},
fY:{"^":"aE;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b7:function(a,b,c){var z,y
C.i.bf(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bB(z.a,34962,y)
J.cl(z.a,34962,b,35048)},
cN:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.cm(a,0)===105
if(z&&this.z===0)this.z=C.b.cD(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bD(x.a))
this.b7(a,b,c)
w=$.$get$U().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b8(x.a,this.e)
x.bT(0,v,z?1:0)
x.ck(0,y.h(0,a),v,w.b8(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ab(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a9(y,"  ")}},
hd:{"^":"c2;x,y,z,Q,ch,cx,cy,db,dx,dy,d,a,b,c",
b9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.z
y=this.x.d
z.w(y)
x=z.a
x[12]=0
x[13]=0
x[14]=0
x[15]=1
y=y.a
w=-y[12]
v=-y[13]
u=-y[14]
y=J.q(w)
t=!!y.$isae
s=t?y.gan(w):1
if(!!y.$ise){r=y.gm(w)
v=y.gn(w)
u=y.gI(w)
w=r}else if(t){r=y.gm(w)
v=y.gn(w)
u=y.gI(w)
w=r}else if(!(typeof w==="number")){w=null
v=null
u=null}y=x[0]
if(typeof w!=="number")return H.A(w)
t=x[4]
if(typeof v!=="number")return H.A(v)
q=x[8]
if(typeof u!=="number")return H.A(u)
p=x[12]
o=x[1]
n=x[5]
m=x[9]
l=x[13]
k=x[2]
j=x[6]
i=x[10]
h=x[14]
g=x[3]
f=x[7]
e=x[11]
d=x[15]
x[12]=y*w+t*v+q*u+p*s
x[13]=o*w+n*v+m*u+l*s
x[14]=k*w+j*v+i*u+h*s
x[15]=g*w+f*v+e*u+d*s
d=this.Q
d.w(this.y)
d.bZ(0,z)
z=this.d
z.j(0,"uPerspectiveViewMatrix",d)
return z},
bb:function(){var z,y,x,w,v,u,t,s,r,q
z=this.cy
y=this.cx
x=z-y
w=this.db
v=w+x/this.ch
u=this.dx
t=this.dy
s=v-w
r=t-u
q=this.y.a
q[0]=0
q[1]=0
q[2]=0
q[3]=0
q[4]=0
q[5]=0
q[6]=0
q[7]=0
q[8]=0
q[9]=0
q[10]=0
q[11]=0
q[12]=0
q[13]=0
q[14]=0
q[15]=0
q[0]=2/x
q[5]=2/s
q[10]=-2/r
q[12]=-(z+y)/x
q[13]=-(v+w)/s
q[14]=-(t+u)/r
q[15]=1},
cH:function(a,b){var z
if(typeof a!=="number")return a.eh()
if(typeof b!=="number")return H.A(b)
z=a/b
if(this.ch===z)return
this.ch=z
this.bb()}},
hq:{"^":"aE;d,e,f,r,x,y,z,Q,ch,a,b,c",
cS:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.ct(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.ct(w.a,v,t))}},
cW:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ab(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.ah(0,v))x.push(v)}for(z=this.x,y=new P.c6(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
cZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ab(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cm(t,0)){case 117:if(w.ah(0,t)){s=b.h(0,t)
if(v.ah(0,t))H.bA("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$U().h(0,t)
if(r==null)H.M("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bH(x.a,q,s)
else if(!!J.q(s).$isfG)J.f1(x.a,q,s)
break
case"float":if(r.c===0)J.f_(x.a,q,s)
else if(!!J.q(s).$isbP)J.f0(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a8(s,"$isD").a
J.cA(x.a,q,!1,p)}else if(!!J.q(s).$isbP)J.cA(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a8(s,"$isX").a
J.cz(x.a,q,!1,p)}else if(!!J.q(s).$isbP)J.cz(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cy(o,q,H.a8(s,"$isae").a)
else J.cy(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cx(o,q,H.a8(s,"$ise").a)
else J.cx(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cw(o,q,H.a8(s,"$isl").a)
else J.cw(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.A(p)
J.ci(x.a,33984+p)
p=H.a8(s,"$ishP").cO()
J.ck(x.a,3553,p)
p=this.ch
J.bH(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.A(p)
J.ci(x.a,33984+p)
p=H.a8(s,"$ishP").cO()
J.ck(x.a,34067,p)
p=this.ch
J.bH(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bA("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.I(s,!0)
o=x.a
if(p)J.b9(o,2929)
else J.bE(o,2929)
break
case"cStencilFunc":H.a8(s,"$isdu")
p=s.a
o=x.a
if(p===1281)J.bE(o,2960)
else{J.b9(o,2960)
o=s.b
n=s.c
J.eX(x.a,p,o,n)}break
case"cDepthWrite":J.eD(x.a,s)
break
case"cBlendEquation":H.a8(s,"$isdt")
p=s.a
o=x.a
if(p===1281)J.bE(o,3042)
else{J.b9(o,3042)
o=s.b
n=s.c
J.ex(x.a,o,n)
J.ew(x.a,p)}break}++u
break}}m=P.fs(0,0,0,Date.now()-new P.cM(z,!1).a,0,0)
""+u
m.k(0)},
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.f2(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bk()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.E)(b),++x){w=b[x]
this.cZ(w.a,w.b9())}y=this.Q
y.a7(0)
for(v=a.cy,u=new H.ab(v,v.r,null,null,[H.B(v,0)]),u.c=v.e;u.u();)y.M(0,u.d)
t=this.cW()
if(t.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
y=a.d
v=a.e
J.b8(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.cN()
u=a.Q
r=a.z
if(s)J.eu(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.eH(q,v,y,u,0,r)
else J.eG(q,v,y,u,0)}else{u=z.a
if(r>1)J.eF(u,v,0,y,r)
else J.eE(u,v,0,y)}if(s)J.eJ(z.a)},
t:{
hr:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.T(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.eB(b.a)
u=G.dM(b.a,35633,y)
J.cj(b.a,v,u)
t=G.dM(b.a,35632,x)
J.cj(b.a,v,t)
if(w.length>0)J.eZ(b.a,v,w,35980)
J.eV(b.a,v)
if(J.eU(b.a,v,35714)!==!0)H.M(J.eT(b.a,v))
z=new G.hq(b,c,d,v,P.bU(c.c,null),P.O(),P.O(),z,null,a,!1,!0)
z.cS(a,b,c,d)
return z}}},
v:{"^":"c;a,b,c",
b8:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hx:{"^":"c;a,b,c,d,e,f,r,x",
cE:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.b2(z)},
b6:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x])
C.c.b2(y)},
cT:function(a,b){this.b=this.d_(!0,a,b)},
ba:function(a){return this.cT(a,null)},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
s=$.$get$U().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.d(z,u)
q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.P(w,b)
w.push("}")
return C.c.a9(w,"\n")},
t:{
dj:function(a){return new G.hx(a,null,[],[],[],[],0,P.O())}}},
dk:{"^":"aE;",
a2:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
c_:function(a,b,c,d,e,f,g,h){return G.d_("cube",a,B.fk(!0,b,c,d,e,f,g,h))},
hC:{"^":"c;",
cU:function(a,b,c){var z,y,x
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
x=this.d3(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d3:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.ie("span",null)
y=J.cq(v)
J.f(y).sH(y,"1px")
C.n.sG(y,""+d+"px")
C.n.sdT(y,"left")
x=C.n.be(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hD:{"^":"hC;e,f,a,b,c,d",
cX:function(a,b){var z,y,x,w,v;++this.e
if(J.aR(J.er(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ec(z,2)+" fps"
y=this.c;(y&&C.C).cp(y,b)
x=C.b.a0(30*C.t.dH(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cq(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)}}}],["","",,A,{"^":"",
ee:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.eK(b)!==!0)return
z=b.cY(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.c.ge1(e)
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
w.dM(new T.X(u))
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
a.cK(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.E)(y),++r)A.ee(a,y[r],z,d,e)},
aX:{"^":"dk;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
cY:function(a){var z=this.dx
z.w(a)
z.bZ(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
dh:{"^":"aE;d,e,c_:f>,a,b,c"},
hp:{"^":"aE;d,e,f,r,x,y,z,Q,a,b,c",
cJ:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ev(v.a,36160,z)
J.f5(v.a,this.x,this.y,x,w)
if(y!==0)J.ey(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.c2(P.O(),"transforms",!1,!0))
r=new T.D(new Float32Array(16))
r.L()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.E)(x),++q)A.ee(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}},
cI:function(){return this.cJ(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fk:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.e(new Float32Array(3))
x.p(z,y,d2)
w=new T.e(new Float32Array(3))
w.p(d0,y,d2)
v=new T.e(new Float32Array(3))
v.p(d0,d1,d2)
u=new T.e(new Float32Array(3))
u.p(z,d1,d2)
t=-d2
s=new T.e(new Float32Array(3))
s.p(z,y,t)
r=new T.e(new Float32Array(3))
r.p(z,d1,t)
q=new T.e(new Float32Array(3))
q.p(d0,d1,t)
p=new T.e(new Float32Array(3))
p.p(d0,y,t)
o=new T.e(new Float32Array(3))
o.p(z,d1,t)
n=new T.e(new Float32Array(3))
n.p(z,d1,d2)
m=new T.e(new Float32Array(3))
m.p(d0,d1,d2)
l=new T.e(new Float32Array(3))
l.p(d0,d1,t)
k=new T.e(new Float32Array(3))
k.p(d0,y,d2)
j=new T.e(new Float32Array(3))
j.p(z,y,d2)
i=new T.e(new Float32Array(3))
i.p(z,y,t)
h=new T.e(new Float32Array(3))
h.p(d0,y,t)
g=new T.e(new Float32Array(3))
g.p(d0,y,t)
f=new T.e(new Float32Array(3))
f.p(d0,d1,t)
e=new T.e(new Float32Array(3))
e.p(d0,d1,d2)
d=new T.e(new Float32Array(3))
d.p(d0,y,d2)
c=new T.e(new Float32Array(3))
c.p(z,y,t)
b=new T.e(new Float32Array(3))
b.p(z,y,d2)
y=new T.e(new Float32Array(3))
y.p(z,d1,d2)
a=new T.e(new Float32Array(3))
a.p(z,d1,t)
z=new T.l(new Float32Array(2))
z.q(c7,c9)
t=new T.l(new Float32Array(2))
t.q(c6,c9)
a0=new T.l(new Float32Array(2))
a0.q(c6,c8)
a1=new T.l(new Float32Array(2))
a1.q(c7,c8)
a2=new T.l(new Float32Array(2))
a2.q(c6,c9)
a3=new T.l(new Float32Array(2))
a3.q(c6,c8)
a4=new T.l(new Float32Array(2))
a4.q(c7,c8)
a5=new T.l(new Float32Array(2))
a5.q(c7,c9)
a6=new T.l(new Float32Array(2))
a6.q(c7,c8)
a7=new T.l(new Float32Array(2))
a7.q(c7,c9)
a8=new T.l(new Float32Array(2))
a8.q(c6,c9)
a9=new T.l(new Float32Array(2))
a9.q(c6,c8)
b0=new T.l(new Float32Array(2))
b0.q(c6,c8)
b1=new T.l(new Float32Array(2))
b1.q(c7,c8)
b2=new T.l(new Float32Array(2))
b2.q(c7,c9)
b3=new T.l(new Float32Array(2))
b3.q(c6,c9)
b4=new T.l(new Float32Array(2))
b4.q(c6,c9)
b5=new T.l(new Float32Array(2))
b5.q(c6,c8)
b6=new T.l(new Float32Array(2))
b6.q(c7,c8)
b7=new T.l(new Float32Array(2))
b7.q(c7,c9)
b8=new T.l(new Float32Array(2))
b8.q(c7,c9)
b9=new T.l(new Float32Array(2))
b9.q(c6,c9)
c0=new T.l(new Float32Array(2))
c0.q(c6,c8)
c1=new T.l(new Float32Array(2))
c1.q(c7,c8)
c2=new G.cZ(!1,[],[],[],P.O())
c2.ac("aTexUV")
c2.ac("aNormal")
c2.b5(6)
c2.as([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.ar("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dN(),c3<6;++c3){c4=z[c3]
c2.cF("aNormal",[c4,c4,c4,c4])}return c2}}],["","",,D,{"^":"",fO:{"^":"c;a,b,c",
cP:function(a){var z
a=document
z=W.bh
W.ag(a,"keydown",new D.fQ(this),!1,z)
W.ag(a,"keyup",new D.fR(this),!1,z)},
t:{
fP:function(a){var z=P.F
z=new D.fO(P.T(null,null,null,z),P.T(null,null,null,z),P.T(null,null,null,z))
z.cP(a)
return z}}},fQ:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.M(0,J.cr(a))
z.b.M(0,a.which)}},fR:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.c1(0,J.cr(a))
z.c.M(0,a.which)}},h0:{"^":"c;a,b,c,d,e,f,r,x",
cR:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gaN(a)
W.ag(y.a,y.b,new D.h2(this),!1,H.B(y,0))
y=z.gaM(a)
W.ag(y.a,y.b,new D.h3(this),!1,H.B(y,0))
y=z.gaO(a)
W.ag(y.a,y.b,new D.h4(this),!1,H.B(y,0))
z=z.gaP(a)
W.ag(z.a,z.b,new D.h5(this),!1,H.B(z,0))},
t:{
h1:function(a){var z=P.F
z=new D.h0(P.T(null,null,null,z),P.T(null,null,null,z),P.T(null,null,null,z),0,0,0,0,0)
z.cR(a)
return z}}},h2:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.am(a)
y=this.a
y.r=z.gc0(a).a
y.x=z.gc0(a).b
y.d=a.movementX
y.e=a.movementY}},h3:{"^":"j:5;a",
$1:function(a){var z=J.f(a)
z.am(a)
P.ak("BUTTON "+H.b(z.gbF(a)))
z=this.a
z.a.M(0,a.button)
z.b.M(0,a.button)}},h4:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.am(a)
y=this.a
y.a.c1(0,z.gbF(a))
y.c.M(0,a.button)}},h5:{"^":"j:17;a",
$1:function(a){var z=J.f(a)
z.am(a)
this.a.f=z.gdP(a)}},hc:{"^":"fa;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b6:function(a){var z,y
z=C.O.dU(a,0,new A.jU())
if(typeof z!=="number")return H.A(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jU:{"^":"j:18;",
$2:function(a,b){var z,y
z=J.at(a,J.a0(b))
if(typeof z!=="number")return H.A(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",X:{"^":"c;bi:a<",
w:function(a){var z,y
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
if(b>=9)return H.d(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.X){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.b6(this.a)},
U:function(a){var z,y,x
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
return new T.e(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.X(z)
y.w(this)
x=b.gbi()
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
F:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.X(z)
y.w(this)
x=b.gbi()
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
dM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.w(a)
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
return m}},D:{"^":"c;bj:a<",
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n[3] "+this.U(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.D){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.b6(this.a)},
U:function(a){var z,y,x
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
return new T.ae(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.D(z)
y.w(this)
x=b.gbj()
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
F:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.D(z)
y.w(this)
x=b.gbj()
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
L:function(){var z=this.a
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
bZ:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},l:{"^":"c;bs:a<",
q:function(a,b){var z=this.a
z[0]=a
z[1]=b},
w:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.l){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.b6(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.l(z)
y.w(this)
x=b.gbs()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.l(z)
y.w(this)
x=b.gbs()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ag:function(a){var z=new T.l(new Float32Array(2))
z.w(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},e:{"^":"c;aH:a<",
p:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
w:function(a){var z,y
z=a.gaH()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.e){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.b6(this.a)},
F:function(a,b){var z=new T.e(new Float32Array(3))
z.w(this)
z.ap(0,b)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.e(z)
y.w(this)
x=b.gaH()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gak())},
gak:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aL:function(a){var z,y,x
z=Math.sqrt(this.gak())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aI:function(a){var z,y
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
z=new T.e(new Float32Array(3))
z.p(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ap:function(a,b){var z,y
z=b.gaH()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
co:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
ag:function(a){var z=new T.e(new Float32Array(3))
z.w(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
t:{
a4:function(a,b,c){var z=new T.e(new Float32Array(3))
z.p(a,b,c)
return z}}},ae:{"^":"c;bt:a<",
w:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.b6(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ae(z)
y.w(this)
x=b.gbt()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ae(z)
y.w(this)
x=b.gbt()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
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
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
gan:function(a){return this.a[3]}}}],["","",,F,{"^":"",
el:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z={}
y=document
x=new R.hD(0,0,null,null,null,null)
x.cU(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fc(null,w)
y=J.eR(w,"webgl2",P.d5(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.M(P.cV('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.eS(y))
if($.eg>0)P.ak("I: "+u)
J.ez(y,0,0,0,1)
J.b9(y,2929)
y=new Float32Array(3)
u=D.fP(null)
t=D.h1(w)
s=new T.D(new Float32Array(16))
s.L()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hc(20,0,0,0,new T.e(y),-0.02,u,t,s,new T.e(r),new T.e(q),new T.e(p),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
y=new Float32Array(16)
u=new Float32Array(16)
t=new T.D(new Float32Array(16))
t.L()
n=new G.hd(o,new T.D(y),new T.D(u),t,1,-40,40,-40,-40,100,P.O(),"othrogrpahic",!1,!0)
n.bb()
t=H.x([],[A.dh])
m=new A.hp(null,v,t,17664,0,0,0,0,"shadow",!1,!0)
m.d=new G.fD(v,null,null,null,null)
y=G.hr("textured",v,$.$get$ep(),$.$get$eo())
u=[]
t.push(new A.dh(y,[n],u,"objects",!1,!0))
l=G.bX("mat1")
l.d.j(0,"uColor",$.$get$cH())
k=G.bX("mat2")
k.d.j(0,"uColor",$.$get$cJ())
j=G.bX("mat3")
j.d.j(0,"uColor",$.$get$cI())
t=R.c_(y,1,0,1,0,15,3,3)
s=new Float32Array(9)
r=new T.D(new Float32Array(16))
r.L()
q=new T.D(new Float32Array(16))
q.L()
p=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.aX(l,t,[],new T.X(s),r,q,new T.e(p),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"side1",!1,!0)
g.a2(-3,0,0)
t=R.c_(y,1,0,1,0,3,3,15)
s=new Float32Array(9)
r=new T.D(new Float32Array(16))
r.L()
q=new T.D(new Float32Array(16))
q.L()
p=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
f=new A.aX(k,t,[],new T.X(s),r,q,new T.e(p),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"side2",!1,!0)
f.a2(-15,0,18)
t=R.c_(y,1,0,1,0,3,12,3)
s=new Float32Array(9)
r=new T.D(new Float32Array(16))
r.L()
q=new T.D(new Float32Array(16))
q.L()
p=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
e=new A.aX(j,t,[],new T.X(s),r,q,new T.e(p),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"side3a",!1,!0)
e.a2(15,9,0)
t=new T.e(new Float32Array(3))
t.p(-3,-3,3)
s=new T.e(new Float32Array(3))
s.p(3,-3,3)
r=new T.e(new Float32Array(3))
r.p(-3,3,3)
q=new T.e(new Float32Array(3))
q.p(-3,-3,-3)
p=new T.e(new Float32Array(3))
p.p(-3,3,-3)
i=new T.e(new Float32Array(3))
i.p(3,-3,-3)
h=new T.e(new Float32Array(3))
h.p(-3,3,-3)
d=new T.e(new Float32Array(3))
d.p(-3,3,3)
c=new T.e(new Float32Array(3))
c.p(3,-3,3)
b=new T.e(new Float32Array(3))
b.p(3,-3,-3)
a=new T.e(new Float32Array(3))
a.p(3,-3,3)
a0=new T.e(new Float32Array(3))
a0.p(-3,-3,3)
a1=new T.e(new Float32Array(3))
a1.p(-3,-3,-3)
a2=new T.e(new Float32Array(3))
a2.p(3,-3,-3)
a3=new T.e(new Float32Array(3))
a3.p(-3,-3,-3)
a4=new T.e(new Float32Array(3))
a4.p(-3,-3,3)
a5=new T.e(new Float32Array(3))
a5.p(-3,3,3)
a6=new T.e(new Float32Array(3))
a6.p(-3,3,-3)
a7=new T.l(new Float32Array(2))
a7.q(0,0)
a8=new T.l(new Float32Array(2))
a8.q(1,0)
a9=new T.l(new Float32Array(2))
a9.q(1,1)
b0=new T.l(new Float32Array(2))
b0.q(1,0)
b1=new T.l(new Float32Array(2))
b1.q(1,1)
b2=new T.l(new Float32Array(2))
b2.q(0,1)
b3=new T.l(new Float32Array(2))
b3.q(0,1)
b4=new T.l(new Float32Array(2))
b4.q(0,0)
b5=new T.l(new Float32Array(2))
b5.q(1,0)
b6=new T.l(new Float32Array(2))
b6.q(1,1)
b7=new T.l(new Float32Array(2))
b7.q(1,1)
b8=new T.l(new Float32Array(2))
b8.q(0,1)
b9=new T.l(new Float32Array(2))
b9.q(0,0)
c0=new T.l(new Float32Array(2))
c0.q(1,0)
c1=new T.l(new Float32Array(2))
c1.q(0,0)
c2=new T.l(new Float32Array(2))
c2.q(1,0)
c3=new T.l(new Float32Array(2))
c3.q(1,1)
c4=new T.l(new Float32Array(2))
c4.q(0,1)
c5=new G.cZ(!1,[],[],[],P.O())
c5.ac("aTexUV")
c5.ac("aNormal")
c5.cG(2)
c5.as([t,s,r,q,p,i])
c5.ar("aTexUV",[a7,a8,a9,b0,b1,b2])
c5.b5(3)
c5.as([h,d,c,b,a,a0,a1,a2,a3,a4,a5,a6])
c5.ar("aTexUV",[b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4])
c5.cM()
y=G.d_("wedge",y,c5)
t=new Float32Array(9)
s=new T.D(new Float32Array(16))
s.L()
r=new Float32Array(16)
q=new T.D(r)
q.L()
p=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
c6=new A.aX(j,y,[],new T.X(t),s,q,new T.e(p),new T.e(i),new T.e(h),new T.e(new Float32Array(3)),"side3b",!1,!0)
c7=Math.cos(3.141592653589793)
c8=Math.sin(3.141592653589793)
y=r[0]
t=r[8]
s=-c8
q=r[1]
p=r[9]
i=r[2]
h=r[10]
d=r[3]
c=r[11]
r[0]=y*c7+t*s
r[1]=q*c7+p*s
r[2]=i*c7+h*s
r[3]=d*c7+c*s
r[8]=y*c8+t*c7
r[9]=q*c8+p*c7
r[10]=i*c8+h*c7
r[11]=d*c8+c*c7
c6.a2(15,24,0)
c=[]
y=new Float32Array(9)
t=new T.D(new Float32Array(16))
t.L()
s=new Float32Array(16)
r=new T.D(s)
r.L()
q=new Float32Array(3)
p=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
c.push(g)
c.push(f)
c.push(e)
c.push(c6)
s[12]=s[12]+s[1]*-20
s[13]=s[13]+s[5]*-20
s[14]=s[14]+s[9]*-20
u.push(new A.aX(null,null,c,new T.X(y),t,r,new T.e(q),new T.e(p),new T.e(i),new T.e(h),"triangle",!1,!0))
y=new F.k6(w,n,m)
y.$1(null)
W.ag(window,"resize",y,!1,W.aa)
o.id=0.6108652381980153
o.go=-0.7853981633974483
z.a=0
new F.k5(z,o,m,x).$1(0)},
k6:{"^":"j:19;a,b,c",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
w=J.f(z)
w.sH(z,y)
w.sG(z,x)
P.ak("size change "+H.b(y)+" "+H.b(x))
this.b.cH(y,x)
z=this.c
z.z=y
z.Q=x}},
k5:{"^":"j:20;a,b,c,d",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aO(b2)
y.F(b2,z.a)
z.a=y.l(b2,0)
y=this.b
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aZ()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aZ()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.A(0,37))y.go+=0.03
else if(v.A(0,39))y.go-=0.03
if(v.A(0,38))y.id+=0.03
else if(v.A(0,40))y.id-=0.03
if(v.A(0,33))y.fy*=0.99
else if(v.A(0,34))y.fy*=1.01
if(v.A(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aZ()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dI(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a2(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.e(new Float32Array(3))
o.p(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
m=u.F(0,t)
m.aL(0)
l=o.bM(m)
l.aL(0)
k=m.bM(l)
k.aL(0)
t=l.aI(u)
n=k.aI(u)
u=m.aI(u)
j=l.a
i=j[0]
h=k.a
g=h[0]
f=m.a
e=f[0]
d=j[1]
c=h[1]
b=f[1]
j=j[2]
h=h[2]
f=f[2]
v[15]=1
v[14]=-u
v[13]=-n
v[12]=-t
v[11]=0
v[10]=f
v[9]=h
v[8]=j
v[7]=0
v[6]=b
v[5]=c
v[4]=d
v[3]=0
v[2]=e
v[1]=g
v[0]=i
v[12]=r
v[13]=q
v[14]=p
i=y.k1
g=y.f
e=g.a
e[0]=v[2]
e[1]=v[6]
e[2]=v[10]
i=-i
a=Math.sqrt(g.gak())
r=e[0]/a
q=e[1]/a
p=e[2]/a
a0=Math.cos(i)
a1=Math.sin(i)
a2=1-a0
a3=r*r*a2+a0
i=p*a1
a4=r*q*a2-i
e=q*a1
a5=r*p*a2+e
a6=q*r*a2+i
a7=q*q*a2+a0
i=r*a1
a8=q*p*a2-i
a9=p*r*a2-e
b0=p*q*a2+i
b1=p*p*a2+a0
i=v[0]
e=v[4]
g=v[8]
d=v[1]
c=v[5]
b=v[9]
j=v[2]
h=v[6]
f=v[10]
t=v[3]
n=v[7]
u=v[11]
v[0]=i*a3+e*a6+g*a9
v[1]=d*a3+c*a6+b*a9
v[2]=j*a3+h*a6+f*a9
v[3]=t*a3+n*a6+u*a9
v[4]=i*a4+e*a7+g*b0
v[5]=d*a4+c*a7+b*b0
v[6]=j*a4+h*a7+f*b0
v[7]=t*a4+n*a7+u*b0
v[8]=i*a5+e*a8+g*b1
v[9]=d*a5+c*a8+b*b1
v[10]=j*a5+h*a8+f*b1
v[11]=t*a5+n*a8+u*b1
w.c.a7(0)
w.b.a7(0)
x.e=0
x.d=0
x.f=0
x.c.a7(0)
x.b.a7(0)
y.k1+=0.01
x=y.id
y=y.go
this.c.cI()
C.a5.gdA(window).c3(this)
this.d.cX(z.a,H.b(x*180/3.141592653589793)+"<br>"+H.b(y*180/3.141592653589793))}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.d1.prototype}if(typeof a=="string")return J.aC.prototype
if(a==null)return J.fM.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.jQ=function(a){if(typeof a=="number")return J.aB.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.a7=function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.b3=function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.aO=function(a){if(typeof a=="number")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.jR=function(a){if(typeof a=="number")return J.aB.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.eh=function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.at=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jQ(a).l(a,b)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).E(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aO(a).aa(a,b)}
J.aR=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aO(a).X(a,b)}
J.er=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aO(a).F(a,b)}
J.aS=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a7(a).h(a,b)}
J.es=function(a,b,c,d){return J.f(a).di(a,b,c,d)}
J.ci=function(a,b){return J.f(a).bu(a,b)}
J.et=function(a,b,c,d){return J.f(a).bv(a,b,c,d)}
J.cj=function(a,b,c){return J.f(a).bx(a,b,c)}
J.eu=function(a,b){return J.f(a).dC(a,b)}
J.bB=function(a,b,c){return J.f(a).by(a,b,c)}
J.ev=function(a,b,c){return J.f(a).bA(a,b,c)}
J.ck=function(a,b,c){return J.f(a).bB(a,b,c)}
J.b8=function(a,b){return J.f(a).dF(a,b)}
J.ew=function(a,b){return J.f(a).bC(a,b)}
J.ex=function(a,b,c){return J.f(a).bD(a,b,c)}
J.cl=function(a,b,c,d){return J.f(a).bE(a,b,c,d)}
J.ey=function(a,b){return J.b3(a).bG(a,b)}
J.ez=function(a,b,c,d,e){return J.f(a).bH(a,b,c,d,e)}
J.cm=function(a,b){return J.eh(a).dJ(a,b)}
J.eA=function(a,b){return J.jR(a).S(a,b)}
J.bC=function(a,b,c){return J.a7(a).dL(a,b,c)}
J.bD=function(a){return J.f(a).bJ(a)}
J.eB=function(a){return J.f(a).bK(a)}
J.eC=function(a){return J.f(a).dO(a)}
J.eD=function(a,b){return J.f(a).bN(a,b)}
J.bE=function(a,b){return J.f(a).bO(a,b)}
J.eE=function(a,b,c,d){return J.f(a).bP(a,b,c,d)}
J.eF=function(a,b,c,d,e){return J.f(a).dQ(a,b,c,d,e)}
J.eG=function(a,b,c,d,e){return J.f(a).bQ(a,b,c,d,e)}
J.eH=function(a,b,c,d,e,f){return J.f(a).dR(a,b,c,d,e,f)}
J.cn=function(a,b){return J.b3(a).v(a,b)}
J.b9=function(a,b){return J.f(a).bR(a,b)}
J.eI=function(a,b){return J.f(a).bS(a,b)}
J.eJ=function(a){return J.f(a).dS(a)}
J.co=function(a,b){return J.b3(a).B(a,b)}
J.cp=function(a){return J.f(a).gdB(a)}
J.eK=function(a){return J.f(a).gaJ(a)}
J.au=function(a){return J.f(a).gO(a)}
J.a0=function(a){return J.q(a).gC(a)}
J.aT=function(a){return J.b3(a).gK(a)}
J.a1=function(a){return J.a7(a).gi(a)}
J.eL=function(a){return J.f(a).gc_(a)}
J.eM=function(a){return J.f(a).gaQ(a)}
J.cq=function(a){return J.f(a).gV(a)}
J.eN=function(a){return J.f(a).ge8(a)}
J.eO=function(a){return J.f(a).gc6(a)}
J.eP=function(a){return J.f(a).gan(a)}
J.cr=function(a){return J.f(a).geg(a)}
J.bF=function(a){return J.f(a).gm(a)}
J.bG=function(a){return J.f(a).gn(a)}
J.cs=function(a){return J.f(a).gI(a)}
J.eQ=function(a){return J.f(a).aT(a)}
J.eR=function(a,b,c){return J.f(a).cn(a,b,c)}
J.eS=function(a){return J.f(a).ao(a)}
J.eT=function(a,b){return J.f(a).aU(a,b)}
J.eU=function(a,b,c){return J.f(a).aV(a,b,c)}
J.ct=function(a,b,c){return J.f(a).aY(a,b,c)}
J.eV=function(a,b){return J.f(a).bX(a,b)}
J.cu=function(a){return J.b3(a).e4(a)}
J.eW=function(a,b){return J.f(a).sai(a,b)}
J.eX=function(a,b,c,d){return J.f(a).b3(a,b,c,d)}
J.cv=function(a){return J.aO(a).e9(a)}
J.eY=function(a){return J.eh(a).eb(a)}
J.av=function(a){return J.q(a).k(a)}
J.eZ=function(a,b,c,d){return J.f(a).ed(a,b,c,d)}
J.f_=function(a,b,c){return J.f(a).c7(a,b,c)}
J.f0=function(a,b,c){return J.f(a).c8(a,b,c)}
J.bH=function(a,b,c){return J.f(a).c9(a,b,c)}
J.f1=function(a,b,c){return J.f(a).ca(a,b,c)}
J.cw=function(a,b,c){return J.f(a).cb(a,b,c)}
J.cx=function(a,b,c){return J.f(a).cc(a,b,c)}
J.cy=function(a,b,c){return J.f(a).cd(a,b,c)}
J.cz=function(a,b,c,d){return J.f(a).ce(a,b,c,d)}
J.cA=function(a,b,c,d){return J.f(a).cf(a,b,c,d)}
J.f2=function(a,b){return J.f(a).ci(a,b)}
J.f3=function(a,b,c){return J.f(a).ee(a,b,c)}
J.f4=function(a,b,c,d,e,f,g){return J.f(a).cj(a,b,c,d,e,f,g)}
J.f5=function(a,b,c,d,e){return J.f(a).cl(a,b,c,d,e)}
I.ar=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bI.prototype
C.n=W.fi.prototype
C.C=W.fp.prototype
C.D=J.h.prototype
C.c=J.az.prototype
C.t=J.d1.prototype
C.b=J.d2.prototype
C.a=J.aB.prototype
C.i=J.aC.prototype
C.K=J.aD.prototype
C.O=H.h6.prototype
C.P=W.h8.prototype
C.w=J.he.prototype
C.B=W.hN.prototype
C.q=J.b1.prototype
C.a5=W.hV.prototype
C.f=new P.iQ()
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.L=H.x(I.ar(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.M=I.ar(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=I.ar([])
C.o=H.x(I.ar(["bind","if","ref","repeat","syntax"]),[P.n])
C.p=H.x(I.ar(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Q=new G.v("vec3","vertex btangents",0)
C.d=new G.v("vec3","",0)
C.R=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.x=new G.v("vec3","vertex coordinates",0)
C.S=new G.v("vec3","vertex binormals",0)
C.y=new G.v("vec4","for wireframe",0)
C.T=new G.v("vec4","per vertex color",0)
C.U=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.W=new G.v("mat4","",4)
C.V=new G.v("mat4","",128)
C.e=new G.v("float","",0)
C.X=new G.v("float","",4)
C.Y=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.Z=new G.v("float","for bump maps",0)
C.a_=new G.v("vec2","texture uvs",0)
C.a0=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.a1=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.a2=new G.v("vec3","vertex normals",0)
C.a3=new G.v("sampler2DShadow","",0)
C.z=new G.v("vec3","per vertex color",0)
C.A=new G.v("mat3","",0)
C.a4=new G.v("vec3","vertex tangents",0)
$.V=0
$.aw=null
$.cD=null
$.ej=null
$.ea=null
$.en=null
$.bw=null
$.bx=null
$.cf=null
$.an=null
$.aK=null
$.aL=null
$.c8=!1
$.w=C.f
$.a2=null
$.bN=null
$.cT=null
$.cS=null
$.cQ=null
$.cP=null
$.cO=null
$.cN=null
$.eg=0
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
I.$lazy(y,x,w)}})(["cL","$get$cL",function(){return H.ei("_$dart_dartClosure")},"bR","$get$bR",function(){return H.ei("_$dart_js")},"dw","$get$dw",function(){return H.Y(H.bs({
toString:function(){return"$receiver$"}}))},"dx","$get$dx",function(){return H.Y(H.bs({$method$:null,
toString:function(){return"$receiver$"}}))},"dy","$get$dy",function(){return H.Y(H.bs(null))},"dz","$get$dz",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dD","$get$dD",function(){return H.Y(H.bs(void 0))},"dE","$get$dE",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dB","$get$dB",function(){return H.Y(H.dC(null))},"dA","$get$dA",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"dG","$get$dG",function(){return H.Y(H.dC(void 0))},"dF","$get$dF",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c3","$get$c3",function(){return P.hZ()},"cY","$get$cY",function(){var z,y
z=P.aY
y=new P.ah(0,P.hX(),null,[z])
y.d1(null,z)
return y},"aM","$get$aM",function(){return[]},"cK","$get$cK",function(){return{}},"dR","$get$dR",function(){return P.bU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c5","$get$c5",function(){return P.O()},"dm","$get$dm",function(){return new G.du(1281,0,4294967295)},"cC","$get$cC",function(){return new G.dt(1281,1281,1281)},"U","$get$U",function(){return P.d5(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.T,"aPosition",C.x,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.R,"vCenter",C.y,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a1,"uAnimationTable",C.h,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"cH","$get$cH",function(){return T.a4(0,0,1)},"cJ","$get$cJ",function(){return T.a4(1,0,0)},"cI","$get$cI",function(){return T.a4(0,1,0)},"ep","$get$ep",function(){var z=G.dj("SolidColor")
z.cE(["aPosition"])
z.b6(["uPerspectiveViewMatrix","uModelMatrix"])
z.ba(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eo","$get$eo",function(){var z=G.dj("SolidColorF")
z.b6(["uColor"])
z.ba(["oFragColor = vec4( uColor, 1.0 );"])
return z},"dN","$get$dN",function(){return[T.a4(0,0,1),T.a4(0,0,-1),T.a4(0,1,0),T.a4(0,-1,0),T.a4(1,0,0),T.a4(-1,0,0)]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.K]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.F]},{func:1,args:[W.bh]},{func:1,ret:P.ca,args:[W.al,P.n,P.n,W.c4]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aH]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aH]},{func:1,v:true,args:[W.t,W.t]},{func:1,args:[W.aI]},{func:1,args:[P.F,P.c]},{func:1,v:true,args:[W.aa]},{func:1,v:true,args:[P.aP]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.kb(d||a)
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
Isolate.ar=a.ar
Isolate.ap=a.ap
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
if(typeof dartMainRunner==="function")dartMainRunner(F.el,[])
else F.el([])})})()
//# sourceMappingURL=triangle.dart.js.map
