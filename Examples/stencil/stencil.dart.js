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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cs"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cs"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cs(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ar=function(){}
var dart=[["","",,H,{"^":"",lW:{"^":"c;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
cw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ba:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cv==null){H.kz()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.e_("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c5()]
if(v!=null)return v
v=H.kD(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$c5(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
G:function(a,b){return a===b},
gC:function(a){return H.aJ(a)},
k:["cR",function(a){return"Instance of '"+H.aK(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hb:{"^":"h;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iscq:1},
hc:{"^":"h;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isb3:1},
c6:{"^":"h;",
gC:function(a){return 0},
k:["cT",function(a){return String(a)}]},
hH:{"^":"c6;"},
b7:{"^":"c6;"},
aH:{"^":"c6;",
k:function(a){var z=a[$.$get$d1()]
return z==null?this.cT(a):J.az(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aD:{"^":"h;$ti",
M:function(a,b){var z,y
if(!!a.fixed$length)H.P(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.M(a))}},
aa:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
ba:function(a,b){return H.dI(a,b,null,H.G(a,0))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
geh:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.dk())},
cL:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.P(P.r("setRange"))
P.hP(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.H()
if(typeof b!=="number")return H.u(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$isi){x=e
w=d}else{w=y.ba(d,e).er(0,!1)
x=0}y=J.ab(w)
v=y.gj(w)
if(typeof v!=="number")return H.u(v)
if(x+z>v)throw H.a(H.h8())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
aj:function(a,b,c,d){return this.cL(a,b,c,d,0)},
bH:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.M(a))}return!1},
cM:function(a,b){if(!!a.immutable$list)H.P(P.r("sort"))
H.i3(a,J.k6())},
aA:function(a){return this.cM(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.L(a[z],b))return!0
return!1},
k:function(a){return P.c4(a,"[","]")},
gL:function(a){return new J.fx(a,a.length,0,null,[H.G(a,0)])},
gC:function(a){return H.aJ(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.P(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cT(b,"newLength",null))
if(b<0)throw H.a(P.an(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.P(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.c.l(a.length,C.c.gj(b))
y=H.A([],[H.G(a,0)])
this.sj(y,z)
this.aj(y,0,a.length,a)
this.aj(y,a.length,z,b)
return y},
$iso:1,
$aso:I.ar,
$isi:1,
t:{
aE:function(a){a.fixed$length=Array
return a},
lU:[function(a,b){return J.eW(a,b)},"$2","k6",8,0,21]}},
lV:{"^":"aD;$ti"},
fx:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aF:{"^":"h;",
W:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Y(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gau(b)
if(this.gau(a)===z)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
eq:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
dX:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dY:function(a,b,c){if(this.W(b,c)>0)throw H.a(H.Y(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
eu:function(a,b){var z
if(b>20)throw H.a(P.an(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a+b},
H:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a-b},
cV:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bB(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.bB(a,b)},
bB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bz:function(a,b){var z
if(a>0)z=this.dI(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dI:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a>b},
$isak:1,
$isaS:1},
dm:{"^":"aF;",$isI:1},
dl:{"^":"aF;"},
aG:{"^":"h;",
dZ:function(a,b){if(b>=a.length)H.P(H.aa(a,b))
return a.charCodeAt(b)},
br:function(a,b){if(b>=a.length)throw H.a(H.aa(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cT(b,null,null))
return a+b},
cO:function(a,b,c){var z
if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cN:function(a,b){return this.cO(a,b,0)},
bc:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.P(H.Y(c))
if(b<0)throw H.a(P.bt(b,null,null))
if(typeof c!=="number")return H.u(c)
if(b>c)throw H.a(P.bt(b,null,null))
if(c>a.length)throw H.a(P.bt(c,null,null))
return a.substring(b,c)},
cP:function(a,b){return this.bc(a,b,null)},
es:function(a){return a.toLowerCase()},
e0:function(a,b,c){if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
return H.kJ(a,b,c)},
W:function(a,b){var z
if(typeof b!=="string")throw H.a(H.Y(b))
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.aa(a,b))
return a[b]},
$iso:1,
$aso:I.ar,
$isn:1}}],["","",,H,{"^":"",
dk:function(){return new P.bx("No element")},
h9:function(){return new P.bx("Too many elements")},
h8:function(){return new P.bx("Too few elements")},
i3:function(a,b){var z=J.a5(a)
if(typeof z!=="number")return z.H()
H.b5(a,0,z-1,b)},
b5:function(a,b,c,d){if(c-b<=32)H.i2(a,b,c,d)
else H.i1(a,b,c,d)},
i2:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ab(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.Q(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.a8(c-b+1,6)
y=b+z
x=c-z
w=C.c.a8(b+c,2)
v=w-z
u=w+z
t=J.ab(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.Q(d.$2(s,r),0)){n=r
r=s
s=n}if(J.Q(d.$2(p,o),0)){n=o
o=p
p=n}if(J.Q(d.$2(s,q),0)){n=q
q=s
s=n}if(J.Q(d.$2(r,q),0)){n=q
q=r
r=n}if(J.Q(d.$2(s,p),0)){n=p
p=s
s=n}if(J.Q(d.$2(q,p),0)){n=p
p=q
q=n}if(J.Q(d.$2(r,o),0)){n=o
o=r
r=n}if(J.Q(d.$2(r,q),0)){n=q
q=r
r=n}if(J.Q(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.L(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.G(i,0))continue
if(h.a4(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aR(i)
if(h.ai(i,0)){--l
continue}else{g=l-1
if(h.a4(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aU(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.Q(d.$2(j,p),0))for(;!0;)if(J.Q(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aU(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.b5(a,b,m-2,d)
H.b5(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.L(d.$2(t.h(a,m),r),0);)++m
for(;J.L(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.L(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.L(d.$2(j,p),0))for(;!0;)if(J.L(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aU(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.b5(a,m,l,d)}else H.b5(a,m,l,d)},
c0:{"^":"bp;$ti"},
br:{"^":"c0;$ti",
gL:function(a){return new H.ds(this,this.gj(this),0,null,[H.cu(this,"br",0)])},
B:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.w(0,y))
if(z!==this.gj(this))throw H.a(P.M(this))}},
b0:function(a,b){return this.cS(0,b)}},
ig:{"^":"br;a,b,c,$ti",
da:function(a,b,c,d){},
gdu:function(){var z=J.a5(this.a)
return z},
gdJ:function(){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>=z)return 0
return z-y},
w:function(a,b){var z,y
z=this.gdJ()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.u(b)
y=z+b
if(!(b<0)){z=this.gdu()
if(typeof z!=="number")return H.u(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cD(this.a,y)},
er:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ab(y)
w=x.gj(y)
if(typeof w!=="number")return w.H()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.w(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.a4()
if(u<w)throw H.a(P.M(this))}return t},
t:{
dI:function(a,b,c,d){var z=new H.ig(a,b,c,[d])
z.da(a,b,c,d)
return z}}},
ds:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.ab(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.M(z))
w=this.c
if(typeof x!=="number")return H.u(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
hm:{"^":"br;a,b,$ti",
gj:function(a){return J.a5(this.a)},
w:function(a,b){return this.b.$1(J.cD(this.a,b))},
$asc0:function(a,b){return[b]},
$asbr:function(a,b){return[b]},
$asbp:function(a,b){return[b]}},
e0:{"^":"bp;a,b,$ti",
gL:function(a){return new H.it(J.aX(this.a),this.b,this.$ti)}},
it:{"^":"ha;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bn:{"^":"c;$ti"}}],["","",,H,{"^":"",
kr:function(a){return init.types[a]},
kC:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.az(a)
if(typeof z!=="string")throw H.a(H.Y(a))
return z},
aJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.q(a).$isb7){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.br(w,0)===36)w=C.i.cP(w,1)
r=H.bL(H.as(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
K:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hO:function(a){return a.b?H.K(a).getUTCFullYear()+0:H.K(a).getFullYear()+0},
hM:function(a){return a.b?H.K(a).getUTCMonth()+1:H.K(a).getMonth()+1},
hI:function(a){return a.b?H.K(a).getUTCDate()+0:H.K(a).getDate()+0},
hJ:function(a){return a.b?H.K(a).getUTCHours()+0:H.K(a).getHours()+0},
hL:function(a){return a.b?H.K(a).getUTCMinutes()+0:H.K(a).getMinutes()+0},
hN:function(a){return a.b?H.K(a).getUTCSeconds()+0:H.K(a).getSeconds()+0},
hK:function(a){return a.b?H.K(a).getUTCMilliseconds()+0:H.K(a).getMilliseconds()+0},
u:function(a){throw H.a(H.Y(a))},
d:function(a,b){if(a==null)J.a5(a)
throw H.a(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a5(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bt(b,"index",null)},
Y:function(a){return new P.ac(!0,a,null,null)},
a8:function(a){if(typeof a!=="number")throw H.a(H.Y(a))
return a},
a:function(a){var z
if(a==null)a=new P.dy()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eM})
z.name=""}else z.toString=H.eM
return z},
eM:function(){return J.az(this.dartException)},
P:function(a){throw H.a(a)},
B:function(a){throw H.a(P.M(a))},
V:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bz(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c7(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dx(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dN()
u=$.$get$dO()
t=$.$get$dP()
s=$.$get$dQ()
r=$.$get$dU()
q=$.$get$dV()
p=$.$get$dS()
$.$get$dR()
o=$.$get$dX()
n=$.$get$dW()
m=v.S(y)
if(m!=null)return z.$1(H.c7(y,m))
else{m=u.S(y)
if(m!=null){m.method="call"
return z.$1(H.c7(y,m))}else{m=t.S(y)
if(m==null){m=s.S(y)
if(m==null){m=r.S(y)
if(m==null){m=q.S(y)
if(m==null){m=p.S(y)
if(m==null){m=s.S(y)
if(m==null){m=o.S(y)
if(m==null){m=n.S(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dx(y,m))}}return z.$1(new H.ir(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dF()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dF()
return a},
al:function(a){var z
if(a==null)return new H.eh(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eh(a,null)},
kn:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kB:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.dc("Unsupported number of arguments for wrapped closure"))},
a9:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kB)
a.$identity=z
return z},
fH:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$isi){z.$reflectionInfo=c
x=H.hR(z).r}else x=c
w=d?Object.create(new H.i4().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Z
$.Z=J.aw(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cY(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kr,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cW:H.bY
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cY(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fE:function(a,b,c,d){var z=H.bY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cY:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fG(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fE(y,!w,z,b)
if(y===0){w=$.Z
$.Z=J.aw(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aA
if(v==null){v=H.bi("self")
$.aA=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Z
$.Z=J.aw(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aA
if(v==null){v=H.bi("self")
$.aA=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fF:function(a,b,c,d){var z,y
z=H.bY
y=H.cW
switch(b?-1:a){case 0:throw H.a(H.hW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fG:function(a,b){var z,y,x,w,v,u,t,s
z=$.aA
if(z==null){z=H.bi("self")
$.aA=z}y=$.cV
if(y==null){y=H.bi("receiver")
$.cV=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fF(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Z
$.Z=J.aw(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Z
$.Z=J.aw(y,1)
return new Function(z+H.b(y)+"}")()},
cs:function(a,b,c,d,e,f){var z,y
z=J.aE(b)
y=!!J.q(c).$isi?J.aE(c):c
return H.fH(a,z,y,!!d,e,f)},
kG:function(a,b){var z=J.ab(b)
throw H.a(H.cX(a,z.bc(b,3,z.gj(b))))},
a3:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.kG(a,b)},
ct:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ez:function(a,b){var z,y
if(a==null)return!1
z=H.ct(J.q(a))
if(z==null)y=!1
else y=H.eF(z,b)
return y},
ke:function(a){var z
if(a instanceof H.j){z=H.ct(J.q(a))
if(z!=null)return H.cx(z,null)
return"Closure"}return H.aK(a)},
kK:function(a){throw H.a(new P.fM(a))},
eD:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
nj:function(a,b,c){return H.aT(a["$as"+H.b(c)],H.as(b))},
bb:function(a,b,c,d){var z=H.aT(a["$as"+H.b(c)],H.as(b))
return z==null?null:z[d]},
cu:function(a,b,c){var z=H.aT(a["$as"+H.b(b)],H.as(a))
return z==null?null:z[c]},
G:function(a,b){var z=H.as(a)
return z==null?null:z[b]},
cx:function(a,b){var z=H.av(a,b)
return z},
av:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bL(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.av(z,b)
return H.k5(a,b)}return"unknown-reified-type"},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.av(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.av(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.av(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.km(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.av(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bL:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cg("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.av(u,c)}return w?"":"<"+z.k(0)+">"},
kq:function(a){var z,y,x
if(a instanceof H.j){z=H.ct(J.q(a))
if(z!=null)return H.cx(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bL(a.$ti,0,null)
return y+x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cr:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.as(a)
y=J.q(a)
if(y[b]==null)return!1
return H.et(H.aT(y[d],z),c)},
bd:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cr(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bL(c,0,null)
throw H.a(H.cX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
et:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.O(a[y],b[y]))return!1
return!0},
nh:function(a,b,c){return a.apply(b,H.aT(J.q(b)["$as"+H.b(c)],H.as(b)))},
O:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b3")return!0
if('func' in b)return H.eF(a,b)
if('func' in a)return b.builtin$cls==="lO"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cx(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.et(H.aT(u,z),x)},
es:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.O(z,v)||H.O(v,z)))return!1}return!0},
kf:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aE(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.O(v,u)||H.O(u,v)))return!1}return!0},
eF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.O(z,y)||H.O(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.es(x,w,!1))return!1
if(!H.es(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}}return H.kf(a.named,b.named)},
ni:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kD:function(a){var z,y,x,w,v,u
z=$.eE.$1(a)
y=$.bJ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.er.$2(a,z)
if(z!=null){y=$.bJ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bM(x)
$.bJ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bK[z]=x
return x}if(v==="-"){u=H.bM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eH(a,x)
if(v==="*")throw H.a(P.e_(z))
if(init.leafTags[z]===true){u=H.bM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eH(a,x)},
eH:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cw(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bM:function(a){return J.cw(a,!1,null,!!a.$isp)},
kF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bM(z)
else return J.cw(z,c,null,null)},
kz:function(){if(!0===$.cv)return
$.cv=!0
H.kA()},
kA:function(){var z,y,x,w,v,u,t,s
$.bJ=Object.create(null)
$.bK=Object.create(null)
H.kv()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eI.$1(v)
if(u!=null){t=H.kF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kv:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.aq(C.E,H.aq(C.J,H.aq(C.u,H.aq(C.u,H.aq(C.I,H.aq(C.F,H.aq(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eE=new H.kw(v)
$.er=new H.kx(u)
$.eI=new H.ky(t)},
aq:function(a,b){return a(b)||b},
kJ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hQ:{"^":"c;a,b,c,d,e,f,r,x",t:{
hR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aE(z)
y=z[0]
x=z[1]
return new H.hQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
im:{"^":"c;a,b,c,d,e,f",
S:function(a){var z,y,x
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
a0:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hD:{"^":"J;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
t:{
dx:function(a,b){return new H.hD(a,b==null?null:b.method)}}},
hd:{"^":"J;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
t:{
c7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hd(a,y,z?null:b.receiver)}}},
ir:{"^":"J;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kL:{"^":"j:0;a",
$1:function(a){if(!!J.q(a).$isJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eh:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
j:{"^":"c;",
k:function(a){return"Closure '"+H.aK(this).trim()+"'"},
gcG:function(){return this},
gcG:function(){return this}},
dJ:{"^":"j;"},
i4:{"^":"dJ;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bX:{"^":"dJ;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aJ(this.a)
else y=typeof z!=="object"?J.a4(z):H.aJ(z)
return(y^H.aJ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aK(z)+"'")},
t:{
bY:function(a){return a.a},
cW:function(a){return a.c},
bi:function(a){var z,y,x,w,v
z=new H.bX("self","target","receiver","name")
y=J.aE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fC:{"^":"J;a",
k:function(a){return this.a},
t:{
cX:function(a,b){return new H.fC("CastError: "+H.b(P.c2(a))+": type '"+H.ke(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"J;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
t:{
hW:function(a){return new H.hV(a)}}},
dY:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a4(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.dY&&J.L(this.a,b.a)}},
dn:{"^":"ca;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gN:function(a){return new H.hj(this,[H.G(this,0)])},
as:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bt(y,b)}else return this.ef(b)},
ef:function(a){var z=this.d
if(z==null)return!1
return this.aU(this.aJ(z,J.a4(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ap(z,b)
x=y==null?null:y.gah()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ap(w,b)
x=y==null?null:y.gah()
return x}else return this.eg(b)},
eg:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aJ(z,J.a4(a)&0x3ffffff)
x=this.aU(y,a)
if(x<0)return
return y[x].gah()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aM()
this.b=z}this.bn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aM()
this.c=y}this.bn(y,b,c)}else{x=this.d
if(x==null){x=this.aM()
this.d=x}w=J.a4(b)&0x3ffffff
v=this.aJ(x,w)
if(v==null)this.aQ(x,w,[this.aD(b,c)])
else{u=this.aU(v,b)
if(u>=0)v[u].sah(c)
else v.push(this.aD(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.M(this))
z=z.c}},
bn:function(a,b,c){var z=this.ap(a,b)
if(z==null)this.aQ(a,b,this.aD(b,c))
else z.sah(c)},
bo:function(){this.r=this.r+1&67108863},
aD:function(a,b){var z,y
z=new H.hi(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bo()
return z},
aU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].gee(),b))return y
return-1},
k:function(a){return P.dt(this)},
ap:function(a,b){return a[b]},
aJ:function(a,b){return a[b]},
aQ:function(a,b,c){a[b]=c},
ds:function(a,b){delete a[b]},
bt:function(a,b){return this.ap(a,b)!=null},
aM:function(){var z=Object.create(null)
this.aQ(z,"<non-identifier-key>",z)
this.ds(z,"<non-identifier-key>")
return z}},
hi:{"^":"c;ee:a<,ah:b@,c,d"},
hj:{"^":"c0;a,$ti",
gj:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.ae(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.M(z))
y=y.c}}},
ae:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kw:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
kx:{"^":"j:10;a",
$2:function(a,b){return this.a(a,b)}},
ky:{"^":"j:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
km:function(a){return J.aE(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){var z,y,x
if(!!J.q(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aa(b,a))},
hy:{"^":"h;","%":"DataView;ArrayBufferView;cc|eb|ec|du|ed|ee|af"},
cc:{"^":"hy;",
gj:function(a){return a.length},
$iso:1,
$aso:I.ar,
$isp:1,
$asp:I.ar},
du:{"^":"ec;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbn:function(){return[P.ak]},
$ask:function(){return[P.ak]},
$isi:1,
$asi:function(){return[P.ak]},
"%":"Float64Array"},
af:{"^":"ee;",
i:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbn:function(){return[P.I]},
$ask:function(){return[P.I]},
$isi:1,
$asi:function(){return[P.I]}},
hx:{"^":"du;",$isc3:1,"%":"Float32Array"},
md:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
me:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
$ish6:1,
"%":"Int32Array"},
mf:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mg:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mh:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mi:{"^":"af;",
gj:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mj:{"^":"af;",
gj:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eb:{"^":"cc+k;"},
ec:{"^":"eb+bn;"},
ed:{"^":"cc+k;"},
ee:{"^":"ed+bn;"}}],["","",,P,{"^":"",
iy:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kg()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a9(new P.iA(z),1)).observe(y,{childList:true})
return new P.iz(z,y,x)}else if(self.setImmediate!=null)return P.kh()
return P.ki()},
n3:[function(a){self.scheduleImmediate(H.a9(new P.iB(a),0))},"$1","kg",4,0,6],
n4:[function(a){self.setImmediate(H.a9(new P.iC(a),0))},"$1","kh",4,0,6],
n5:[function(a){P.jK(0,a)},"$1","ki",4,0,6],
k9:function(a,b){if(H.ez(a,{func:1,args:[P.b3,P.b3]})){b.toString
return a}else{b.toString
return a}},
k8:function(){var z,y
for(;z=$.ap,z!=null;){$.aP=null
y=z.b
$.ap=y
if(y==null)$.aO=null
z.a.$0()}},
ng:[function(){$.co=!0
try{P.k8()}finally{$.aP=null
$.co=!1
if($.ap!=null)$.$get$cj().$1(P.eu())}},"$0","eu",0,0,3],
ep:function(a){var z=new P.e1(a,null)
if($.ap==null){$.aO=z
$.ap=z
if(!$.co)$.$get$cj().$1(P.eu())}else{$.aO.b=z
$.aO=z}},
kd:function(a){var z,y,x
z=$.ap
if(z==null){P.ep(a)
$.aP=$.aO
return}y=new P.e1(a,null)
x=$.aP
if(x==null){y.b=z
$.aP=y
$.ap=y}else{y.b=x.b
x.b=y
$.aP=y
if(y.b==null)$.aO=y}},
kH:function(a){var z=$.x
if(C.f===z){P.bI(null,null,C.f,a)
return}z.toString
P.bI(null,null,z,z.bK(a))},
kc:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.V(u)
y=H.al(u)
$.x.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ay(x)
w=t
v=x.ga6()
c.$2(w,v)}}},
k1:function(a,b,c,d){var z=a.dW(0)
if(!!J.q(z).$isb_&&z!==$.$get$dg())z.ex(new P.k4(b,c,d))
else b.ad(c,d)},
k2:function(a,b){return new P.k3(a,b)},
iw:function(){return $.x},
bH:function(a,b,c,d,e){var z={}
z.a=d
P.kd(new P.ka(z,e))},
en:function(a,b,c,d){var z,y
y=$.x
if(y===c)return d.$0()
$.x=c
z=y
try{y=d.$0()
return y}finally{$.x=z}},
eo:function(a,b,c,d,e){var z,y
y=$.x
if(y===c)return d.$1(e)
$.x=c
z=y
try{y=d.$1(e)
return y}finally{$.x=z}},
kb:function(a,b,c,d,e,f){var z,y
y=$.x
if(y===c)return d.$2(e,f)
$.x=c
z=y
try{y=d.$2(e,f)
return y}finally{$.x=z}},
bI:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bK(d):c.dT(d)
P.ep(d)},
iA:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iz:{"^":"j:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iB:{"^":"j:1;a",
$0:function(){this.a.$0()}},
iC:{"^":"j:1;a",
$0:function(){this.a.$0()}},
jJ:{"^":"c;a,b,c",
dm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a9(new P.jL(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
t:{
jK:function(a,b){var z=new P.jJ(!0,null,0)
z.dm(a,b)
return z}}},
jL:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kZ:{"^":"c;$ti"},
iF:{"^":"c;$ti"},
jE:{"^":"iF;a,$ti",
e_:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.cf("Future already completed"))
z.ao(b)}},
e4:{"^":"c;aO:a<,b,c,d,e,$ti",
gdO:function(){return this.b.b},
gc9:function(){return(this.c&1)!==0},
ged:function(){return(this.c&2)!==0},
gc8:function(){return this.c===8},
eb:function(a){return this.b.b.b_(this.d,a)},
ei:function(a){if(this.c!==6)return!0
return this.b.b.b_(this.d,J.ay(a))},
ea:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.ez(z,{func:1,args:[P.c,P.aL]}))return x.el(z,y.gP(a),a.ga6())
else return x.b_(z,y.gP(a))},
ec:function(){return this.b.b.ci(this.d)}},
ai:{"^":"c;bA:a<,b,dE:c<,$ti",
di:function(a,b){this.a=4
this.c=a},
gdz:function(){return this.a===2},
gaK:function(){return this.a>=4},
cn:function(a,b){var z,y,x
z=$.x
if(z!==C.f){z.toString
if(b!=null)b=P.k9(b,z)}y=new P.ai(0,z,null,[null])
x=b==null?1:3
this.aE(new P.e4(null,y,x,a,b,[H.G(this,0),null]))
return y},
cm:function(a){return this.cn(a,null)},
ex:function(a){var z,y
z=$.x
y=new P.ai(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.G(this,0)
this.aE(new P.e4(null,y,8,a,null,[z,z]))
return y},
aE:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaK()){y.aE(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bI(null,null,z,new P.iU(this,a))}},
bx:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaO()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaK()){v.bx(a)
return}this.a=v.a
this.c=v.c}z.a=this.aP(a)
y=this.b
y.toString
P.bI(null,null,y,new P.iZ(z,this))}},
aq:function(){var z=this.c
this.c=null
return this.aP(z)},
aP:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaO()
z.a=y}return y},
ao:function(a){var z,y,x
z=this.$ti
y=H.cr(a,"$isb_",z,"$asb_")
if(y){z=H.cr(a,"$isai",z,null)
if(z)P.e5(a,this)
else P.iV(a,this)}else{x=this.aq()
this.a=4
this.c=a
P.aN(this,x)}},
ad:[function(a,b){var z=this.aq()
this.a=8
this.c=new P.bh(a,b)
P.aN(this,z)},function(a){return this.ad(a,null)},"eB","$2","$1","gbs",4,2,13],
$isb_:1,
t:{
iV:function(a,b){var z,y,x
b.a=1
try{a.cn(new P.iW(b),new P.iX(b))}catch(x){z=H.V(x)
y=H.al(x)
P.kH(new P.iY(b,z,y))}},
e5:function(a,b){var z
for(;a.gdz();)a=a.c
if(a.gaK()){z=b.aq()
b.a=a.a
b.c=a.c
P.aN(b,z)}else{z=b.c
b.a=2
b.c=a
a.bx(z)}},
aN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ay(v)
t=v.ga6()
y.toString
P.bH(null,null,y,u,t)}return}for(;b.gaO()!=null;b=s){s=b.a
b.a=null
P.aN(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc9()||b.gc8()){q=b.gdO()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.ay(v)
t=v.ga6()
y.toString
P.bH(null,null,y,u,t)
return}p=$.x
if(p==null?q!=null:p!==q)$.x=q
else p=null
if(b.gc8())new P.j1(z,x,b,w).$0()
else if(y){if(b.gc9())new P.j0(x,b,r).$0()}else if(b.ged())new P.j_(z,x,b).$0()
if(p!=null)$.x=p
y=x.b
if(!!J.q(y).$isb_){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aP(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.e5(y,o)
return}}o=b.b
b=o.aq()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iU:{"^":"j:1;a,b",
$0:function(){P.aN(this.a,this.b)}},
iZ:{"^":"j:1;a,b",
$0:function(){P.aN(this.b,this.a.a)}},
iW:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.ao(a)}},
iX:{"^":"j:14;a",
$2:function(a,b){this.a.ad(a,b)},
$1:function(a){return this.$2(a,null)}},
iY:{"^":"j:1;a,b,c",
$0:function(){this.a.ad(this.b,this.c)}},
j1:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ec()}catch(w){y=H.V(w)
x=H.al(w)
if(this.d){v=J.ay(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bh(y,x)
u.a=!0
return}if(!!J.q(z).$isb_){if(z instanceof P.ai&&z.gbA()>=4){if(z.gbA()===8){v=this.b
v.b=z.gdE()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cm(new P.j2(t))
v.a=!1}}},
j2:{"^":"j:0;a",
$1:function(a){return this.a}},
j0:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eb(this.c)}catch(x){z=H.V(x)
y=H.al(x)
w=this.a
w.b=new P.bh(z,y)
w.a=!0}}},
j_:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ei(z)===!0&&w.e!=null){v=this.b
v.b=w.ea(z)
v.a=!1}}catch(u){y=H.V(u)
x=H.al(u)
w=this.a
v=J.ay(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bh(y,x)
s.a=!0}}},
e1:{"^":"c;a,b"},
dG:{"^":"c;$ti",
B:function(a,b){var z,y
z={}
y=new P.ai(0,$.x,null,[null])
z.a=null
z.a=this.cc(new P.ib(z,this,b,y),!0,new P.ic(y),y.gbs())
return y},
gj:function(a){var z,y
z={}
y=new P.ai(0,$.x,null,[P.I])
z.a=0
this.cc(new P.id(z),!0,new P.ie(z,y),y.gbs())
return y}},
ib:{"^":"j;a,b,c,d",
$1:function(a){P.kc(new P.i9(this.c,a),new P.ia(),P.k2(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cu(this.b,"dG",0)]}}},
i9:{"^":"j:1;a,b",
$0:function(){return this.a.$1(this.b)}},
ia:{"^":"j:0;",
$1:function(a){}},
ic:{"^":"j:1;a",
$0:function(){this.a.ao(null)}},
id:{"^":"j:0;a",
$1:function(a){++this.a.a}},
ie:{"^":"j:1;a,b",
$0:function(){this.b.ao(this.a.a)}},
i8:{"^":"c;$ti"},
k4:{"^":"j:1;a,b,c",
$0:function(){return this.a.ad(this.b,this.c)}},
k3:{"^":"j:15;a,b",
$2:function(a,b){P.k1(this.a,this.b,a,b)}},
bh:{"^":"c;P:a>,a6:b<",
k:function(a){return H.b(this.a)},
$isJ:1},
jR:{"^":"c;"},
ka:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dy()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.az(y)
throw x}},
jn:{"^":"jR;",
em:function(a){var z,y,x
try{if(C.f===$.x){a.$0()
return}P.en(null,null,this,a)}catch(x){z=H.V(x)
y=H.al(x)
P.bH(null,null,this,z,y)}},
en:function(a,b){var z,y,x
try{if(C.f===$.x){a.$1(b)
return}P.eo(null,null,this,a,b)}catch(x){z=H.V(x)
y=H.al(x)
P.bH(null,null,this,z,y)}},
dT:function(a){return new P.jp(this,a)},
bK:function(a){return new P.jo(this,a)},
dU:function(a){return new P.jq(this,a)},
h:function(a,b){return},
ci:function(a){if($.x===C.f)return a.$0()
return P.en(null,null,this,a)},
b_:function(a,b){if($.x===C.f)return a.$1(b)
return P.eo(null,null,this,a,b)},
el:function(a,b,c){if($.x===C.f)return a.$2(b,c)
return P.kb(null,null,this,a,b,c)}},
jp:{"^":"j:1;a,b",
$0:function(){return this.a.ci(this.b)}},
jo:{"^":"j:1;a,b",
$0:function(){return this.a.em(this.b)}},
jq:{"^":"j:0;a,b",
$1:function(a){return this.a.en(this.b,a)}}}],["","",,P,{"^":"",
H:function(){return new H.dn(0,null,null,null,null,null,0,[null,null])},
dq:function(a){return H.kn(a,new H.dn(0,null,null,null,null,null,0,[null,null]))},
W:function(a,b,c,d){return new P.ja(0,null,null,null,null,null,0,[d])},
h7:function(a,b,c){var z,y
if(P.cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aQ()
y.push(a)
try{P.k7(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dH(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c4:function(a,b,c){var z,y,x
if(P.cp(a))return b+"..."+c
z=new P.cg(b)
y=$.$get$aQ()
y.push(a)
try{x=z
x.a=P.dH(x.ga7(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga7()+c
y=z.ga7()
return y.charCodeAt(0)==0?y:y},
cp:function(a){var z,y
for(z=0;y=$.$get$aQ(),z<y.length;++z)if(a===y[z])return!0
return!1},
k7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.v()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.v();t=s,s=r){r=z.gD(z);++x
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
c8:function(a,b){var z,y
z=P.W(null,null,null,b)
for(y=J.aX(a);y.v();)z.K(0,y.gD(y))
return z},
dt:function(a){var z,y,x
z={}
if(P.cp(a))return"{...}"
y=new P.cg("")
try{$.$get$aQ().push(a)
x=y
x.a=x.ga7()+"{"
z.a=!0
J.cE(a,new P.hl(z,y))
z=y
z.a=z.ga7()+"}"}finally{z=$.$get$aQ()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga7()
return z.charCodeAt(0)==0?z:z},
ja:{"^":"j4;a,b,c,d,e,f,r,$ti",
gL:function(a){var z=new P.cm(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dr(b)},
dr:function(a){var z=this.d
if(z==null)return!1
return this.aI(z[this.aF(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.M(this))
z=z.b}},
K:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cn()
this.b=z}return this.bp(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cn()
this.c=y}return this.bp(y,b)}else return this.dn(0,b)},
dn:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cn()
this.d=z}y=this.aF(b)
x=z[y]
if(x==null)z[y]=[this.aN(b)]
else{if(this.aI(x,b)>=0)return!1
x.push(this.aN(b))}return!0},
cg:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.by(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.by(this.c,b)
else return this.dB(0,b)},
dB:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aF(b)]
x=this.aI(y,b)
if(x<0)return!1
this.bC(y.splice(x,1)[0])
return!0},
ag:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aL()}},
bp:function(a,b){if(a[b]!=null)return!1
a[b]=this.aN(b)
return!0},
by:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bC(z)
delete a[b]
return!0},
aL:function(){this.r=this.r+1&67108863},
aN:function(a){var z,y
z=new P.jb(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aL()
return z},
bC:function(a){var z,y
z=a.gdA()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aL()},
aF:function(a){return J.a4(a)&0x3ffffff},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].gdt(),b))return y
return-1},
t:{
cn:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jb:{"^":"c;dt:a<,b,dA:c<"},
cm:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
j4:{"^":"hX;$ti"},
lZ:{"^":"c;$ti"},
dr:{"^":"ea;$ti",$isi:1},
k:{"^":"c;$ti",
gL:function(a){return new H.ds(a,this.gj(a),0,null,[H.bb(this,a,"k",0)])},
w:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.M(a))}},
e9:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.u(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.M(a))}return y},
ba:function(a,b){return H.dI(a,b,null,H.bb(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.bb(this,a,"k",0)])
y=this.gj(a)
x=C.c.gj(b)
if(typeof y!=="number")return y.l()
C.b.sj(z,C.c.l(y,x))
C.b.aj(z,0,this.gj(a),a)
C.b.aj(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.c4(a,"[","]")}},
ca:{"^":"R;$ti"},
hl:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
R:{"^":"c;$ti",
B:function(a,b){var z,y
for(z=J.aX(this.gN(a));z.v();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a5(this.gN(a))},
k:function(a){return P.dt(a)}},
hY:{"^":"c;$ti",
M:function(a,b){var z
for(z=J.aX(b);z.v();)this.K(0,z.gD(z))},
k:function(a){return P.c4(this,"{","}")},
B:function(a,b){var z
for(z=new P.cm(this,this.r,null,null,[null]),z.c=this.e;z.v();)b.$1(z.d)}},
hX:{"^":"hY;$ti"},
ea:{"^":"c+k;$ti"}}],["","",,P,{"^":"",
h_:function(a){var z=J.q(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.aK(a)+"'"},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h_(a)},
dc:function(a){return new P.iR(a)},
au:function(a){H.bN(H.b(a))},
cq:{"^":"c;"},
"+bool":0,
c_:{"^":"c;dN:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.c_))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.c.W(this.a,b.gdN())},
gC:function(a){var z=this.a
return(z^C.c.bz(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fO(H.hO(this))
y=P.aY(H.hM(this))
x=P.aY(H.hI(this))
w=P.aY(H.hJ(this))
v=P.aY(H.hL(this))
u=P.aY(H.hN(this))
t=P.fP(H.hK(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fO:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aY:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"aS;"},
"+double":0,
aZ:{"^":"c;ae:a<",
l:function(a,b){return new P.aZ(C.c.l(this.a,b.gae()))},
H:function(a,b){return new P.aZ(this.a-b.gae())},
a4:function(a,b){return C.c.a4(this.a,b.gae())},
ai:function(a,b){return C.c.ai(this.a,b.gae())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.aZ))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.c.W(this.a,b.gae())},
k:function(a){var z,y,x,w,v
z=new P.fX()
y=this.a
if(y<0)return"-"+new P.aZ(0-y).k(0)
x=z.$1(C.c.a8(y,6e7)%60)
w=z.$1(C.c.a8(y,1e6)%60)
v=new P.fW().$1(y%1e6)
return""+C.c.a8(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
t:{
d7:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fW:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fX:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
J:{"^":"c;",
ga6:function(){return H.al(this.$thrownJsError)}},
dy:{"^":"J;",
k:function(a){return"Throw of null."}},
ac:{"^":"J;a,b,c,d",
gaH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaG:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaH()+y+x
if(!this.a)return w
v=this.gaG()
u=P.c2(this.b)
return w+v+": "+H.b(u)},
t:{
cT:function(a,b,c){return new P.ac(!0,a,b,c)},
fw:function(a){return new P.ac(!1,null,a,"Must not be null")}}},
dA:{"^":"ac;e,f,a,b,c,d",
gaH:function(){return"RangeError"},
gaG:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
t:{
bt:function(a,b,c){return new P.dA(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.dA(b,c,!0,a,d,"Invalid value")},
hP:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
z=a>c}else z=!0
if(z)throw H.a(P.an(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
z=b>c}else z=!0
if(z)throw H.a(P.an(b,a,c,"end",f))
return b}return c}}},
h5:{"^":"ac;e,j:f>,a,b,c,d",
gaH:function(){return"RangeError"},
gaG:function(){if(J.aU(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
t:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a5(b)
return new P.h5(b,z,!0,a,c,"Index out of range")}}},
is:{"^":"J;a",
k:function(a){return"Unsupported operation: "+this.a},
t:{
r:function(a){return new P.is(a)}}},
iq:{"^":"J;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
t:{
e_:function(a){return new P.iq(a)}}},
bx:{"^":"J;a",
k:function(a){return"Bad state: "+this.a},
t:{
cf:function(a){return new P.bx(a)}}},
fI:{"^":"J;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.c2(z))+"."},
t:{
M:function(a){return new P.fI(a)}}},
dF:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga6:function(){return},
$isJ:1},
fM:{"^":"J;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
lm:{"^":"c;"},
iR:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
I:{"^":"aS;"},
"+int":0,
bp:{"^":"c;$ti",
b0:["cS",function(a,b){return new H.e0(this,b,[H.cu(this,"bp",0)])}],
B:function(a,b){var z
for(z=this.gL(this);z.v();)b.$1(z.gD(z))},
gj:function(a){var z,y
z=this.gL(this)
for(y=0;z.v();)++y
return y},
ga5:function(a){var z,y
z=this.gL(this)
if(!z.v())throw H.a(H.dk())
y=z.gD(z)
if(z.v())throw H.a(H.h9())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fw("index"))
if(b<0)H.P(P.an(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.v();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.h7(this,"(",")")}},
ha:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
c9:{"^":"c;$ti"},
b3:{"^":"c;",
gC:function(a){return P.c.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aS:{"^":"c;"},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gC:function(a){return H.aJ(this)},
k:function(a){return"Instance of '"+H.aK(this)+"'"},
toString:function(){return this.k(this)}},
aL:{"^":"c;"},
n:{"^":"c;"},
"+String":0,
cg:{"^":"c;a7:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dH:function(a,b,c){var z=J.aX(b)
if(!z.v())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.v())}else{a+=H.b(z.gD(z))
for(;z.v();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
kl:function(){return document},
fY:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).X(z,a,b,c)
y.toString
z=new H.e0(new W.T(y),new W.fZ(),[W.t])
return z.ga5(z)},
da:function(a){return"wheel"},
aB:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f9(a)
if(typeof y==="string")z=a.tagName}catch(x){H.V(x)}return z},
iO:function(a,b){return document.createElement(a)},
aj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
em:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iI(a)
if(!!J.q(z).$isD)return z
return}else return a},
eq:function(a){var z=$.x
if(z===C.f)return a
return z.dU(a)},
w:{"^":"am;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kM:{"^":"ce;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
kN:{"^":"h;j:length=","%":"AccessibleNodeList"},
kO:{"^":"w;at:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kP:{"^":"w;at:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kU:{"^":"w;at:href}","%":"HTMLBaseElement"},
fA:{"^":"h;","%":"Response;Body"},
bW:{"^":"w;",$isbW:1,"%":"HTMLBodyElement"},
kV:{"^":"w;I:name=","%":"HTMLButtonElement"},
kW:{"^":"w;",
cH:function(a,b,c){var z=a.getContext(b,P.kj(c,null))
return z},
"%":"HTMLCanvasElement"},
kX:{"^":"h;",
ay:function(a){return P.U(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kY:{"^":"t;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l_:{"^":"a_;a2:style=","%":"CSSFontFaceRule"},
l0:{"^":"a_;a2:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
l1:{"^":"a_;a2:style=","%":"CSSPageRule"},
l2:{"^":"bj;j:length=","%":"CSSPerspective"},
l3:{"^":"bZ;m:x=,n:y=","%":"CSSPositionValue"},
l4:{"^":"bj;m:x=,n:y=,F:z=","%":"CSSRotation"},
a_:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
l5:{"^":"bj;m:x=,n:y=,F:z=","%":"CSSScale"},
fJ:{"^":"iG;j:length=",
bq:function(a,b){var z,y
z=$.$get$d0()
y=z[b]
if(typeof y==="string")return y
y=this.dK(a,b)
z[b]=y
return y},
dK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fQ()+b
if(z in a)return z
return b},
dH:function(a,b,c,d){a.setProperty(b,c,d)},
sa_:function(a,b){a.height=b},
sa0:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fK:{"^":"c;",
se8:function(a,b){this.dH(a,this.bq(a,"float"),b,"")}},
l6:{"^":"a_;a2:style=","%":"CSSStyleRule"},
bZ:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bj:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l7:{"^":"bZ;j:length=","%":"CSSTransformValue"},
l8:{"^":"bj;m:x=,n:y=,F:z=","%":"CSSTranslation"},
l9:{"^":"bZ;j:length=","%":"CSSUnparsedValue"},
la:{"^":"a_;a2:style=","%":"CSSViewportRule"},
lb:{"^":"h;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lc:{"^":"h;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
fR:{"^":"w;","%":"HTMLDivElement"},
ld:{"^":"t;",
gaV:function(a){return new W.b8(a,"mousedown",!1,[W.N])},
gaW:function(a){return new W.b8(a,"mousemove",!1,[W.N])},
gaX:function(a){return new W.b8(a,"mouseup",!1,[W.N])},
gaY:function(a){return new W.b8(a,W.da(a),!1,[W.aM])},
"%":"Document|HTMLDocument|XMLDocument"},
le:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
lf:{"^":"fS;",
gV:function(a){return a.a},
gR:function(a){return a.b},
gZ:function(a){return a.c},
"%":"DOMMatrix"},
fS:{"^":"h;",
gV:function(a){return a.a},
gR:function(a){return a.b},
gZ:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
lg:{"^":"fT;",
gax:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
fT:{"^":"h;",
gax:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
lh:{"^":"iK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.a7]},
$isp:1,
$asp:function(){return[P.a7]},
$ask:function(){return[P.a7]},
$isi:1,
$asi:function(){return[P.a7]},
$asl:function(){return[P.a7]},
"%":"ClientRectList|DOMRectList"},
fU:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.ga0(a))+" x "+H.b(this.ga_(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa7)return!1
return a.left===z.gca(b)&&a.top===z.gco(b)&&this.ga0(a)===z.ga0(b)&&this.ga_(a)===z.ga_(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.ga0(a)
w=this.ga_(a)
return W.e9(W.aj(W.aj(W.aj(W.aj(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcp:function(a){return new P.ag(a.left,a.top,[null])},
ga_:function(a){return a.height},
gca:function(a){return a.left},
gco:function(a){return a.top},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa7:1,
$asa7:I.ar,
"%":";DOMRectReadOnly"},
li:{"^":"iM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isp:1,
$asp:function(){return[P.n]},
$ask:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asl:function(){return[P.n]},
"%":"DOMStringList"},
lj:{"^":"h;j:length=","%":"DOMTokenList"},
am:{"^":"t;a2:style=,bw:namespaceURI=,eo:tagName=",
gdR:function(a){return new W.iN(a)},
k:function(a){return a.localName},
X:["aB",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d9
if(z==null){z=H.A([],[W.dv])
y=new W.dw(z)
z.push(W.e6(null))
z.push(W.ei())
$.d9=y
d=y}else d=z
z=$.d8
if(z==null){z=new W.el(d)
$.d8=z
c=z}else{z.a=d
c=z}}if($.a6==null){z=document
y=z.implementation.createHTMLDocument("")
$.a6=y
$.c1=y.createRange()
y=$.a6
y.toString
x=y.createElement("base")
J.fi(x,z.baseURI)
$.a6.head.appendChild(x)}z=$.a6
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a6
if(!!this.$isbW)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a6.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.A(C.M,a.tagName)){$.c1.selectNodeContents(w)
v=$.c1.createContextualFragment(b)}else{w.innerHTML=b
v=$.a6.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a6.body
if(w==null?z!=null:w!==z)J.cM(w)
c.b8(v)
document.adoptNode(v)
return v},function(a,b,c){return this.X(a,b,c,null)},"e2",null,null,"geC",5,5,null],
cK:function(a,b,c,d){a.textContent=null
a.appendChild(this.X(a,b,c,d))},
cJ:function(a,b){return this.cK(a,b,null,null)},
b1:function(a){return a.getBoundingClientRect()},
gaV:function(a){return new W.ah(a,"mousedown",!1,[W.N])},
gaW:function(a){return new W.ah(a,"mousemove",!1,[W.N])},
gaX:function(a){return new W.ah(a,"mouseup",!1,[W.N])},
gaY:function(a){return new W.ah(a,W.da(a),!1,[W.aM])},
$isam:1,
"%":";Element"},
fZ:{"^":"j:0;",
$1:function(a){return!!J.q(a).$isam}},
lk:{"^":"w;I:name=","%":"HTMLEmbedElement"},
ll:{"^":"bk;P:error=","%":"ErrorEvent"},
bk:{"^":"h;",
aw:function(a){return a.preventDefault()},
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
D:{"^":"h;",
bG:["cQ",function(a,b,c,d){if(c!=null)this.dq(a,b,c,!1)}],
dq:function(a,b,c,d){return a.addEventListener(b,H.a9(c,1),!1)},
dC:function(a,b,c,d){return a.removeEventListener(b,H.a9(c,1),!1)},
$isD:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ef|eg|ej|ek"},
lF:{"^":"w;I:name=","%":"HTMLFieldSetElement"},
lG:{"^":"iT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bm]},
$isp:1,
$asp:function(){return[W.bm]},
$ask:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$asl:function(){return[W.bm]},
"%":"FileList"},
lH:{"^":"D;P:error=","%":"FileReader"},
lI:{"^":"D;P:error=,j:length=","%":"FileWriter"},
lK:{"^":"h;a2:style=","%":"FontFace"},
lL:{"^":"D;",
eD:function(a,b,c){return a.forEach(H.a9(b,3),c)},
B:function(a,b){b=H.a9(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lN:{"^":"w;j:length=,I:name=","%":"HTMLFormElement"},
lP:{"^":"ce;m:x=,n:y=,F:z=","%":"Gyroscope"},
lQ:{"^":"h;j:length=","%":"History"},
lR:{"^":"j6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lS:{"^":"w;I:name=","%":"HTMLIFrameElement"},
dj:{"^":"w;I:name=",$isdj:1,"%":"HTMLInputElement"},
bq:{"^":"dZ;",
gey:function(a){return a.which},
$isbq:1,
"%":"KeyboardEvent"},
lY:{"^":"w;at:href}","%":"HTMLLinkElement"},
m_:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
m0:{"^":"ce;m:x=,n:y=,F:z=","%":"Magnetometer"},
m1:{"^":"w;I:name=","%":"HTMLMapElement"},
m4:{"^":"w;P:error=","%":"HTMLAudioElement|HTMLMediaElement|HTMLVideoElement"},
m5:{"^":"h;j:length=","%":"MediaList"},
m6:{"^":"D;",
O:function(a){return a.clone()},
"%":"MediaStream"},
m7:{"^":"D;aT:enabled=",
O:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
m8:{"^":"D;",
bG:function(a,b,c,d){if(J.L(b,"message"))a.start()
this.cQ(a,b,c,!1)},
"%":"MessagePort"},
m9:{"^":"w;I:name=","%":"HTMLMetaElement"},
ma:{"^":"jc;",
h:function(a,b){return P.U(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gN:function(a){var z=H.A([],[P.n])
this.B(a,new W.hp(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hp:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mb:{"^":"jd;",
h:function(a,b){return P.U(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gN:function(a){var z=H.A([],[P.n])
this.B(a,new W.hq(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hq:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mc:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bs]},
$isp:1,
$asp:function(){return[W.bs]},
$ask:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$asl:function(){return[W.bs]},
"%":"MimeTypeArray"},
N:{"^":"dZ;bQ:button=",
gcf:function(a){var z,y,x
if(!!a.offsetX)return new P.ag(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.em(z)).$isam)throw H.a(P.r("offsetX is only supported on elements"))
y=W.em(z)
z=[null]
x=new P.ag(a.clientX,a.clientY,z).H(0,J.fa(J.fc(y)))
return new P.ag(J.cN(x.a),J.cN(x.b),z)}},
$isN:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
T:{"^":"dr;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.cf("No elements"))
if(y>1)throw H.a(P.cf("More than one element"))
return z.firstChild},
M:function(a,b){var z,y,x,w
z=J.q(b)
if(!!z.$isT){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gL(b),y=this.a;z.v();)y.appendChild(z.gD(z))},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gL:function(a){var z=this.a.childNodes
return new W.dd(z,z.length,-1,null,[H.bb(C.P,z,"l",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdr:function(){return[W.t]},
$ask:function(){return[W.t]},
$asi:function(){return[W.t]},
$asea:function(){return[W.t]}},
t:{"^":"D;av:parentNode=,aZ:previousSibling=",
gce:function(a){return new W.T(a)},
ek:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cR(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mk:{"^":"h;",
ej:[function(a){return a.previousNode()},"$0","gaZ",1,0,4],
"%":"NodeIterator"},
hz:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
mn:{"^":"w;I:name=","%":"HTMLObjectElement"},
mp:{"^":"w;I:name=","%":"HTMLOutputElement"},
mq:{"^":"w;I:name=","%":"HTMLParamElement"},
b4:{"^":"h;j:length=","%":"Plugin"},
ms:{"^":"jl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b4]},
$isp:1,
$asp:function(){return[W.b4]},
$ask:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$asl:function(){return[W.b4]},
"%":"PluginArray"},
mv:{"^":"h;",
b1:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mB:{"^":"jr;",
h:function(a,b){return P.U(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gN:function(a){var z=H.A([],[P.n])
this.B(a,new W.hU(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hU:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mC:{"^":"w;j:length=,I:name=","%":"HTMLSelectElement"},
ce:{"^":"D;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mD:{"^":"bk;P:error=","%":"SensorErrorEvent"},
mE:{"^":"w;I:name=","%":"HTMLSlotElement"},
mF:{"^":"eg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$ask:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asl:function(){return[W.bv]},
"%":"SourceBufferList"},
mG:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$ask:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asl:function(){return[W.bw]},
"%":"SpeechGrammarList"},
mH:{"^":"bk;P:error=","%":"SpeechRecognitionError"},
b6:{"^":"h;j:length=","%":"SpeechRecognitionResult"},
mJ:{"^":"jA;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gN:function(a){var z=H.A([],[P.n])
this.B(a,new W.i7(z))
return z},
gj:function(a){return a.length},
$asR:function(){return[P.n,P.n]},
"%":"Storage"},
i7:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
ih:{"^":"w;",
X:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=W.fY("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.T(y).M(0,J.f7(z))
return y},
"%":"HTMLTableElement"},
mM:{"^":"w;",
X:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.X(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.ga5(z)
x.toString
z=new W.T(x)
w=z.ga5(z)
y.toString
w.toString
new W.T(y).M(0,new W.T(w))
return y},
"%":"HTMLTableRowElement"},
mN:{"^":"w;",
X:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.X(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.ga5(z)
y.toString
x.toString
new W.T(y).M(0,new W.T(x))
return y},
"%":"HTMLTableSectionElement"},
dK:{"^":"w;",$isdK:1,"%":"HTMLTemplateElement"},
mO:{"^":"w;I:name=","%":"HTMLTextAreaElement"},
mQ:{"^":"jI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bB]},
$isp:1,
$asp:function(){return[W.bB]},
$ask:function(){return[W.bB]},
$isi:1,
$asi:function(){return[W.bB]},
$asl:function(){return[W.bB]},
"%":"TextTrackCueList"},
mR:{"^":"ek;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bA]},
$isp:1,
$asp:function(){return[W.bA]},
$ask:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$asl:function(){return[W.bA]},
"%":"TextTrackList"},
mS:{"^":"h;j:length=","%":"TimeRanges"},
mT:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bD]},
$isp:1,
$asp:function(){return[W.bD]},
$ask:function(){return[W.bD]},
$isi:1,
$asi:function(){return[W.bD]},
$asl:function(){return[W.bD]},
"%":"TouchList"},
mU:{"^":"h;j:length=","%":"TrackDefaultList"},
mX:{"^":"h;",
eE:[function(a){return a.parentNode()},"$0","gav",1,0,4],
ej:[function(a){return a.previousNode()},"$0","gaZ",1,0,4],
"%":"TreeWalker"},
dZ:{"^":"bk;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mZ:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
n0:{"^":"h;m:x=,F:z=","%":"VRStageBoundsPoint"},
n1:{"^":"D;j:length=","%":"VideoTrackList"},
aM:{"^":"N;",
ge4:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
iu:{"^":"D;",
gdQ:function(a){var z,y
z=P.aS
y=new P.ai(0,$.x,null,[z])
this.dv(a)
this.dD(a,W.eq(new W.iv(new P.jE(y,[z]))))
return y},
dD:function(a,b){return a.requestAnimationFrame(H.a9(b,1))},
dv:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iv:{"^":"j:0;a",
$1:function(a){this.a.e_(0,a)}},
n2:{"^":"D;"},
n6:{"^":"t;I:name=,bw:namespaceURI=","%":"Attr"},
n7:{"^":"jT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$ask:function(){return[W.a_]},
$isi:1,
$asi:function(){return[W.a_]},
$asl:function(){return[W.a_]},
"%":"CSSRuleList"},
n8:{"^":"fU;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa7)return!1
return a.left===z.gca(b)&&a.top===z.gco(b)&&a.width===z.ga0(b)&&a.height===z.ga_(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e9(W.aj(W.aj(W.aj(W.aj(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcp:function(a){return new P.ag(a.left,a.top,[null])},
ga_:function(a){return a.height},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
n9:{"^":"jV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bo]},
$isp:1,
$asp:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$asl:function(){return[W.bo]},
"%":"GamepadList"},
nc:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nd:{"^":"fA;",
O:function(a){return a.clone()},
"%":"Request"},
ne:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b6]},
$isp:1,
$asp:function(){return[W.b6]},
$ask:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$asl:function(){return[W.b6]},
"%":"SpeechRecognitionResultList"},
nf:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bz]},
$isp:1,
$asp:function(){return[W.bz]},
$ask:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$asl:function(){return[W.bz]},
"%":"StyleSheetList"},
iD:{"^":"ca;dw:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gN(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gN:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.f(v)
if(u.gbw(v)==null)y.push(u.gI(v))}return y},
$asca:function(){return[P.n,P.n]},
$asR:function(){return[P.n,P.n]}},
iN:{"^":"iD;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gN(this).length}},
b8:{"^":"dG;a,b,c,$ti",
cc:function(a,b,c,d){return W.ao(this.a,this.b,a,!1,H.G(this,0))}},
ah:{"^":"b8;a,b,c,$ti"},
iP:{"^":"i8;a,b,c,d,e,$ti",
dh:function(a,b,c,d,e){this.dL()},
dW:function(a){if(this.b==null)return
this.dM()
this.b=null
this.d=null
return},
dL:function(){var z=this.d
if(z!=null&&this.a<=0)J.eP(this.b,this.c,z,!1)},
dM:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eO(x,this.c,z,!1)}},
t:{
ao:function(a,b,c,d,e){var z=c==null?null:W.eq(new W.iQ(c))
z=new W.iP(0,a,b,z,!1,[e])
z.dh(a,b,c,!1,e)
return z}}},
iQ:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
ck:{"^":"c;cB:a<",
dj:function(a){var z,y
z=$.$get$cl()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.L[y],W.kt())
for(y=0;y<12;++y)z.i(0,C.p[y],W.ku())}},
a9:function(a){return $.$get$e7().A(0,W.aB(a))},
a3:function(a,b,c){var z,y,x
z=W.aB(a)
y=$.$get$cl()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
t:{
e6:function(a){var z,y
z=document.createElement("a")
y=new W.js(z,window.location)
y=new W.ck(y)
y.dj(a)
return y},
na:[function(a,b,c,d){return!0},"$4","kt",16,0,9],
nb:[function(a,b,c,d){var z,y,x,w,v
z=d.gcB()
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
return z},"$4","ku",16,0,9]}},
l:{"^":"c;$ti",
gL:function(a){return new W.dd(a,this.gj(a),-1,null,[H.bb(this,a,"l",0)])}},
dw:{"^":"c;a",
a9:function(a){return C.b.bH(this.a,new W.hB(a))},
a3:function(a,b,c){return C.b.bH(this.a,new W.hA(a,b,c))}},
hB:{"^":"j:0;a",
$1:function(a){return a.a9(this.a)}},
hA:{"^":"j:0;a,b,c",
$1:function(a){return a.a3(this.a,this.b,this.c)}},
jt:{"^":"c;cB:d<",
dl:function(a,b,c,d){var z,y,x
this.a.M(0,c)
z=b.b0(0,new W.ju())
y=b.b0(0,new W.jv())
this.b.M(0,z)
x=this.c
x.M(0,C.N)
x.M(0,y)},
a9:function(a){return this.a.A(0,W.aB(a))},
a3:["cU",function(a,b,c){var z,y
z=W.aB(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dP(c)
else if(y.A(0,"*::"+b))return this.d.dP(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
ju:{"^":"j:0;",
$1:function(a){return!C.b.A(C.p,a)}},
jv:{"^":"j:0;",
$1:function(a){return C.b.A(C.p,a)}},
jF:{"^":"jt;e,a,b,c,d",
a3:function(a,b,c){if(this.cU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cG(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
t:{
ei:function(){var z=P.n
z=new W.jF(P.c8(C.o,z),P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),null)
z.dl(null,new H.hm(C.o,new W.jG(),[H.G(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jG:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jD:{"^":"c;",
a9:function(a){var z=J.q(a)
if(!!z.$isdD)return!1
z=!!z.$isz
if(z&&W.aB(a)==="foreignObject")return!1
if(z)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.i.cN(b,"on"))return!1
return this.a9(a)}},
dd:{"^":"c;a,b,c,d,$ti",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aV(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
iH:{"^":"c;a",$isD:1,t:{
iI:function(a){if(a===window)return a
else return new W.iH(a)}}},
dv:{"^":"c;"},
ml:{"^":"c;"},
mY:{"^":"c;"},
js:{"^":"c;a,b"},
el:{"^":"c;a",
b8:function(a){new W.jQ(this).$2(a,null)},
af:function(a,b){if(b==null)J.cM(a)
else b.removeChild(a)},
dG:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cG(a)
x=y.gdw().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.V(t)}v="element unprintable"
try{v=J.az(a)}catch(t){H.V(t)}try{u=W.aB(a)
this.dF(a,b,z,v,u,y,x)}catch(t){if(H.V(t) instanceof P.ac)throw t
else{this.af(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dF:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.af(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a9(a)){this.af(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.af(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gN(f)
y=H.A(z.slice(0),[H.G(z,0)])
for(x=f.gN(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.a3(a,J.fn(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$isdK)this.b8(a.content)}},
jQ:{"^":"j:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dG(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.af(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f8(z)}catch(w){H.V(w)
v=z
if(x){u=J.f(v)
if(u.gav(v)!=null){u.gav(v)
u.gav(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iG:{"^":"h+fK;"},
iJ:{"^":"h+k;"},
iK:{"^":"iJ+l;"},
iL:{"^":"h+k;"},
iM:{"^":"iL+l;"},
iS:{"^":"h+k;"},
iT:{"^":"iS+l;"},
j5:{"^":"h+k;"},
j6:{"^":"j5+l;"},
jc:{"^":"h+R;"},
jd:{"^":"h+R;"},
je:{"^":"h+k;"},
jf:{"^":"je+l;"},
jg:{"^":"h+k;"},
jh:{"^":"jg+l;"},
jk:{"^":"h+k;"},
jl:{"^":"jk+l;"},
jr:{"^":"h+R;"},
ef:{"^":"D+k;"},
eg:{"^":"ef+l;"},
jw:{"^":"h+k;"},
jx:{"^":"jw+l;"},
jA:{"^":"h+R;"},
jH:{"^":"h+k;"},
jI:{"^":"jH+l;"},
ej:{"^":"D+k;"},
ek:{"^":"ej+l;"},
jM:{"^":"h+k;"},
jN:{"^":"jM+l;"},
jS:{"^":"h+k;"},
jT:{"^":"jS+l;"},
jU:{"^":"h+k;"},
jV:{"^":"jU+l;"},
jW:{"^":"h+k;"},
jX:{"^":"jW+l;"},
jY:{"^":"h+k;"},
jZ:{"^":"jY+l;"},
k_:{"^":"h+k;"},
k0:{"^":"k_+l;"}}],["","",,P,{"^":"",
U:function(a){var z,y,x,w,v
if(a==null)return
z=P.H()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
kj:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cE(a,new P.kk(z))
return z},
d6:function(){var z=$.d5
if(z==null){z=J.bQ(window.navigator.userAgent,"Opera",0)
$.d5=z}return z},
fQ:function(){var z,y
z=$.d2
if(z!=null)return z
y=$.d3
if(y==null){y=J.bQ(window.navigator.userAgent,"Firefox",0)
$.d3=y}if(y)z="-moz-"
else{y=$.d4
if(y==null){y=P.d6()!==!0&&J.bQ(window.navigator.userAgent,"Trident/",0)
$.d4=y}if(y)z="-ms-"
else z=P.d6()===!0?"-o-":"-webkit-"}$.d2=z
return z},
kk:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mA:{"^":"D;P:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mV:{"^":"D;P:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
kI:function(a){return Math.sqrt(a)},
e8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j7:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ag:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
G:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ag))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a4(this.a)
y=J.a4(this.b)
return P.j7(P.e8(P.e8(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.ag(y,C.a.l(z,x),this.$ti)},
H:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.H()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.H()
if(typeof y!=="number")return H.u(y)
return new P.ag(z-x,w-y,this.$ti)}},
jm:{"^":"c;$ti"},
a7:{"^":"jm;$ti"}}],["","",,P,{"^":"",ln:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},lo:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},lp:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},lq:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},lr:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},ls:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},lt:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lu:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},lv:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lw:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},lx:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},ly:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},lz:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},lA:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},lB:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},lC:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},lD:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},lE:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},lJ:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},lM:{"^":"aC;m:x=,n:y=","%":"SVGForeignObjectElement"},h3:{"^":"aC;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aC:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lT:{"^":"aC;m:x=,n:y=","%":"SVGImageElement"},lX:{"^":"j9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dp]},
$isi:1,
$asi:function(){return[P.dp]},
$asl:function(){return[P.dp]},
"%":"SVGLengthList"},m2:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},m3:{"^":"h;V:a=,R:b=,Z:c=","%":"SVGMatrix"},mm:{"^":"jj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dz]},
$isi:1,
$asi:function(){return[P.dz]},
$asl:function(){return[P.dz]},
"%":"SVGNumberList"},mr:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},mt:{"^":"h;m:x=,n:y=","%":"SVGPoint"},mu:{"^":"h;j:length=","%":"SVGPointList"},mw:{"^":"h;m:x=,n:y=","%":"SVGRect"},mx:{"^":"h3;m:x=,n:y=","%":"SVGRectElement"},dD:{"^":"z;",$isdD:1,"%":"SVGScriptElement"},mK:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asl:function(){return[P.n]},
"%":"SVGStringList"},z:{"^":"am;",
X:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.dv])
z.push(W.e6(null))
z.push(W.ei())
z.push(new W.jD())
c=new W.el(new W.dw(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).e2(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.T(w)
u=z.ga5(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaV:function(a){return new W.ah(a,"mousedown",!1,[W.N])},
gaW:function(a){return new W.ah(a,"mousemove",!1,[W.N])},
gaX:function(a){return new W.ah(a,"mouseup",!1,[W.N])},
gaY:function(a){return new W.ah(a,"mousewheel",!1,[W.aM])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mL:{"^":"aC;m:x=,n:y=","%":"SVGSVGElement"},ii:{"^":"aC;","%":"SVGTextPathElement;SVGTextContentElement"},mP:{"^":"ii;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mW:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dM]},
$isi:1,
$asi:function(){return[P.dM]},
$asl:function(){return[P.dM]},
"%":"SVGTransformList"},n_:{"^":"aC;m:x=,n:y=","%":"SVGUseElement"},j8:{"^":"h+k;"},j9:{"^":"j8+l;"},ji:{"^":"h+k;"},jj:{"^":"ji+l;"},jB:{"^":"h+k;"},jC:{"^":"jB+l;"},jO:{"^":"h+k;"},jP:{"^":"jO+l;"}}],["","",,P,{"^":"",kQ:{"^":"h;j:length=","%":"AudioBuffer"},kR:{"^":"iE;",
h:function(a,b){return P.U(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gN:function(a){var z=H.A([],[P.n])
this.B(a,new P.fy(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.n,null]},
"%":"AudioParamMap"},fy:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},kS:{"^":"h;aT:enabled=","%":"AudioTrack"},kT:{"^":"D;j:length=","%":"AudioTrackList"},fz:{"^":"D;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mo:{"^":"fz;j:length=","%":"OfflineAudioContext"},iE:{"^":"h+R;"}}],["","",,P,{"^":"",my:{"^":"h;",
bF:function(a,b){return a.activeTexture(b)},
bI:function(a,b,c){return a.attachShader(b,c)},
bJ:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindFramebuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bR:function(a,b){return a.checkFramebufferStatus(b)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createFramebuffer()},
bX:function(a){return a.createProgram()},
bY:function(a,b){return a.createShader(b)},
bZ:function(a){return a.createTexture()},
c0:function(a,b){return a.depthMask(b)},
c1:function(a,b){return a.disable(b)},
c2:function(a,b,c,d){return a.drawArrays(b,c,d)},
c3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c4:function(a,b){return a.enable(b)},
c5:function(a,b){return a.enableVertexAttribArray(b)},
c7:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay:function(a){return P.U(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
cb:function(a,b){return a.linkProgram(b)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
ck:function(a,b,c,d){return a.texParameterf(b,c,d)},
cl:function(a,b,c,d){return a.texParameteri(b,c,d)},
cq:function(a,b,c){return a.uniform1f(b,c)},
cr:function(a,b,c){return a.uniform1fv(b,c)},
cs:function(a,b,c){return a.uniform1i(b,c)},
ct:function(a,b,c){return a.uniform1iv(b,c)},
cu:function(a,b,c){return a.uniform2fv(b,c)},
cv:function(a,b,c){return a.uniform3fv(b,c)},
cw:function(a,b,c){return a.uniform4fv(b,c)},
cz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cC:function(a,b){return a.useProgram(b)},
cD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cF:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mz:{"^":"h;",
dS:function(a,b){return a.beginTransformFeedback(b)},
dV:function(a,b){return a.bindVertexArray(b)},
e3:function(a){return a.createVertexArray()},
e5:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e6:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e7:function(a){return a.endTransformFeedback()},
ep:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
ev:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ew:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bF:function(a,b){return a.activeTexture(b)},
bI:function(a,b,c){return a.attachShader(b,c)},
bJ:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindFramebuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bR:function(a,b){return a.checkFramebufferStatus(b)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createFramebuffer()},
bX:function(a){return a.createProgram()},
bY:function(a,b){return a.createShader(b)},
bZ:function(a){return a.createTexture()},
c0:function(a,b){return a.depthMask(b)},
c1:function(a,b){return a.disable(b)},
c2:function(a,b,c,d){return a.drawArrays(b,c,d)},
c3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c4:function(a,b){return a.enable(b)},
c5:function(a,b){return a.enableVertexAttribArray(b)},
c7:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay:function(a){return P.U(a.getContextAttributes())},
b2:function(a){return a.getError()},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
cb:function(a,b){return a.linkProgram(b)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
ck:function(a,b,c,d){return a.texParameterf(b,c,d)},
cl:function(a,b,c,d){return a.texParameteri(b,c,d)},
cq:function(a,b,c){return a.uniform1f(b,c)},
cr:function(a,b,c){return a.uniform1fv(b,c)},
cs:function(a,b,c){return a.uniform1i(b,c)},
ct:function(a,b,c){return a.uniform1iv(b,c)},
cu:function(a,b,c){return a.uniform2fv(b,c)},
cv:function(a,b,c){return a.uniform3fv(b,c)},
cw:function(a,b,c){return a.uniform4fv(b,c)},
cz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cC:function(a,b){return a.useProgram(b)},
cD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cF:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mI:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.U(a.item(b))},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.c9]},
$isi:1,
$asi:function(){return[P.c9]},
$asl:function(){return[P.c9]},
"%":"SQLResultSetRowList"},jy:{"^":"h+k;"},jz:{"^":"jy+l;"}}],["","",,G,{"^":"",
ix:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.b.aa(z,"\n")},
e2:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.bY(a,b)
z.b9(a,y,c)
z.bU(a,y)
x=z.b6(a,y,35713)
if(x!=null&&J.L(x,!1)){w=z.b5(a,y)
P.au("E:Compilation failed:")
P.au("E:"+G.ix(c))
P.au("E:Failure:")
P.au(C.i.l("E:",w))
throw H.a(w)}return y},
hC:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p
d.p(b)
d.ak(0,a)
e.p(c)
e.ak(0,a)
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
e.T(0,-1/p)
return!0},
de:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bT(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bU(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cJ(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
h1:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bT(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bU(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
h2:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bT(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bU(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cJ(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.fb(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
h0:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aV(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aV(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aV(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aV(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
j3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ae(z,z.r,null,null,[H.G(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.I]],v=[P.ak],u=[T.a1],t=[T.e],s=[T.m];y.v();){r=y.d
if(!x.as(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eA>0)H.bN("I: "+q)
continue}p=z.h(0,r)
switch($.$get$X().h(0,r).a){case"vec2":b.ac(r,G.h1(H.bd(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.ac(r,G.de(H.bd(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.ac(r,G.h2(H.bd(p,"$isi",u,"$asi"),null),4)
break
case"float":b.ac(r,new Float32Array(H.bG(H.bd(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.ac(r,G.h0(H.bd(p,"$isi",w,"$asi"),null),4)
break}}},
b1:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.H()
w=J.eZ(z.a)
v=new G.ho(z,w,4,x,y,null,0,-1,null,null,P.H(),"meshdata:"+a,!1,!0)
u=G.de(c.d,null)
x.i(0,"aPosition",J.bR(z.a))
v.ch=u
v.bg("aPosition",u,3)
t=$.$get$X().h(0,"aPosition")
if(t==null)H.P("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.be(z.a,w)
z.c6(0,s,0)
z.cE(0,x.h(0,"aPosition"),s,t.bj(),5126,!1,0,0)
y=c.d0()
v.y=J.bR(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bG(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bG(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bG(y))
v.Q=5125}J.be(z.a,w)
y=v.y
x=v.cx
J.bO(z.a,34963,y)
J.cA(z.a,34963,x,35048)
G.j3(c,v)
return v},
aI:{"^":"c;aT:c>"},
bF:{"^":"aI;d,a,b,c",
bk:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.dY(H.kq(this),null))+"}["+this.a+"]"],[P.n])
for(y=this.d,x=new H.ae(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.v();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.b.aa(z,"\n")}},
fB:{"^":"dE;"},
fD:{"^":"c;a,b",
c6:function(a,b,c){J.f4(this.a,b)
if(c>0)J.ft(this.a,b,c)},
cE:function(a,b,c,d,e,f,g,h){J.bO(this.a,34962,b)
J.fu(this.a,c,d,e,!1,g,h)}},
df:{"^":"c;a,b,c,d,e"},
ad:{"^":"c;V:a>,R:b>,Z:c>",t:{
E:function(a,b,c){return new G.ad(a,b,c)}}},
bl:{"^":"c;V:a>,R:b>,Z:c>,d"},
b0:{"^":"c;a,b,c,d,e",
U:function(a){switch($.$get$X().h(0,a).a){case"vec2":this.e.i(0,a,H.A([],[T.m]))
break
case"vec3":this.e.i(0,a,H.A([],[T.e]))
break
case"vec4":this.e.i(0,a,H.A([],[T.a1]))
break
case"float":this.e.i(0,a,H.A([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.A([],[[P.i,P.I]]))
break}},
cW:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.bl(z,z+1,z+2,z+3))},
bf:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.B)(a),++x)y.push(a[x].O(0))},
cX:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.ad(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.bf(a[x]))},
al:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.B)(b),++x)z.push(b[x].O(0))},
am:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.B)(b),++x)z.push(J.bf(b[x]))},
cY:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.bl(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].O(0))},
d0:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.I])
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
d2:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.m(t))}},
d1:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.bl(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ae(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.v();){w=x.d
v=$.$get$X().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.aa(z," ")}},
ci:{"^":"c;a,b,c",t:{
ik:function(a,b,c){return new G.ci(a,b,c)}}},
dL:{"^":"c;a,b,c"},
hn:{"^":"bF;d,a,b,c",
d4:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$cU())
z.i(0,"cStencilFunc",$.$get$by())},
t:{
cb:function(a){var z=new G.hn(P.H(),a,!1,!0)
z.d4(a)
return z}}},
ho:{"^":"aI;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bg:function(a,b,c){var z,y
C.i.br(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bO(z.a,34962,y)
J.cA(z.a,34962,b,35048)},
bi:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ac:function(a,b,c){var z,y,x,w,v
z=J.cB(a,0)===105
if(z&&this.z===0)this.z=C.c.cV(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bR(x.a))
this.bg(a,b,c)
w=$.$get$X().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.be(x.a,this.e)
x.c6(0,v,z?1:0)
x.cE(0,y.h(0,a),v,w.bj(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ae(z,z.r,null,null,[H.G(z,0)]),x.c=z.e;x.v();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.aa(y,"  ")}},
hG:{"^":"bF;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cZ:function(a,b){var z
if(typeof a!=="number")return a.ez()
if(typeof b!=="number")return H.u(b)
z=a/b
if(this.z===z)return
this.z=z
this.bm()},
bm:function(){var z,y,x,w,v,u
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
bk:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.e(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.p(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.q(t)
x=!!y.$isa1
q=x?y.gax(t):1
if(!!y.$ise){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
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
c.p(this.db)
c.cd(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
fV:{"^":"c;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
hT:{"^":"aI;d,e,f,r,x,y,z,Q,ch,a,b,c",
d7:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
x.i(0,t,J.cL(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
x.i(0,t,J.cL(w.a,v,t))}},
dc:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ae(y,y.r,null,null,[H.G(y,0)]),w.c=y.e;w.v();){v=w.d
if(!z.as(0,v))x.push(v)}for(z=this.x,y=new P.cm(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.v();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
df:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ae(b,b.r,null,null,[H.G(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.v();){t=y.d
switch(J.cB(t,0)){case 117:if(w.as(0,t)){s=b.h(0,t)
if(v.as(0,t))H.bN("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$X().h(0,t)
if(r==null)H.P("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bV(x.a,q,s)
else if(!!J.q(s).$ish6)J.fr(x.a,q,s)
break
case"float":if(r.c===0)J.fp(x.a,q,s)
else if(!!J.q(s).$isc3)J.fq(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a3(s,"$isC").a
J.cS(x.a,q,!1,p)}else if(!!J.q(s).$isc3)J.cS(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a3(s,"$isS").a
J.cR(x.a,q,!1,p)}else if(!!J.q(s).$isc3)J.cR(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cQ(o,q,H.a3(s,"$isa1").a)
else J.cQ(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cP(o,q,H.a3(s,"$ise").a)
else J.cP(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cO(o,q,H.a3(s,"$ism").a)
else J.cO(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cy(x.a,33984+p)
p=H.a3(s,"$isbC").b
J.ax(x.a,3553,p)
p=this.ch
J.bV(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cy(x.a,33984+p)
p=H.a3(s,"$isbC").b
J.ax(x.a,34067,p)
p=this.ch
J.bV(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bN("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.L(s,!0)
o=x.a
if(p)J.aW(o,2929)
else J.bS(o,2929)
break
case"cStencilFunc":H.a3(s,"$isci")
p=s.a
o=x.a
if(p===1281)J.bS(o,2960)
else{J.aW(o,2960)
o=s.b
n=s.c
J.fj(x.a,p,o,n)}break
case"cDepthWrite":J.f_(x.a,s)
break
case"cBlendEquation":H.a3(s,"$isdL")
p=s.a
o=x.a
if(p===1281)J.bS(o,3042)
else{J.aW(o,3042)
o=s.b
n=s.c
J.eS(x.a,o,n)
J.eR(x.a,p)}break}++u
break}}m=P.d7(0,0,0,Date.now()-new P.c_(z,!1).a,0,0)
""+u
m.k(0)},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.d
J.fs(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bo()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.B)(b),++w){v=b[w]
this.df(v.a,v.bk())}x=this.Q
x.ag(0)
for(u=a.cy,t=new H.ae(u,u.r,null,null,[H.G(u,0)]),t.c=u.e;t.v();)x.K(0,t.d)
s=this.dc()
if(s.length!==0)P.au("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(s)))
J.be(a.d.a,a.e)
r=this.e.f.length>0
x=a.f
u=a.bi()
t=a.Q
q=a.z
if(r)J.eQ(y.a,x)
if(t!==-1){p=y.a
if(q>1)J.f3(p,x,u,t,0,q)
else J.f2(p,x,u,t,0)}else{t=y.a
if(q>1)J.f1(t,x,0,u,q)
else J.f0(t,x,0,u)}if(r)J.f5(y.a)
c.push(new G.fV(this.a,a.z,a.bi(),x,P.d7(0,0,0,Date.now()-new P.c_(z,!1).a,0,0)))},
t:{
dC:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.W(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.eY(b.a)
u=G.e2(b.a,35633,y)
J.cz(b.a,v,u)
t=G.e2(b.a,35632,x)
J.cz(b.a,v,t)
if(w.length>0)J.fo(b.a,v,w,35980)
J.fh(b.a,v)
if(J.fg(b.a,v,35714)!==!0)H.P(J.ff(b.a,v))
z=new G.hT(b,c,d,v,P.c8(c.c,null),P.H(),P.H(),z,null,a,!1,!0)
z.d7(a,b,c,d)
return z}}},
v:{"^":"c;a,b,c",
bj:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hZ:{"^":"c;a,b,c,d,e,f,r,x",
bd:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.B)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.b.aA(y)},
aC:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.B)(a),++x)y.push(a[x])
C.b.aA(y)},
be:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.b.aA(z)},
d8:function(a,b){this.b=this.dg(!0,a,b)},
an:function(a){return this.d8(a,null)},
dg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
s=$.$get$X().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.b.M(w,b)
w.push("}")
return C.b.aa(w,"\n")},
t:{
bu:function(a){return new G.hZ(a,null,[],[],[],[],0,P.H())}}},
dE:{"^":"aI;",
ab:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
ij:{"^":"c;a,b,c,d,e,f,r",
bl:function(a,b){var z=this.e
if(z!==1)J.fl(a.a,b,34046,z)
z=this.r
J.bg(a.a,b,10240,z)
z=this.f
J.bg(a.a,b,10241,z)
if(this.b){J.bg(a.a,b,10242,33071)
J.bg(a.a,b,10243,33071)}}},
bC:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
io:{"^":"bC;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.b(this.f)+" X "+H.b(this.r)+"]"}},
ip:{"^":"bC;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+H.b(this.r)+"]"}}}],["","",,R,{"^":"",i5:{"^":"c;",
d9:function(a,b,c){var z,y,x
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
x=this.dk(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dk:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iO("span",null)
y=J.cH(v)
J.f(y).sa0(y,"1px")
C.n.sa_(y,""+d+"px")
C.n.se8(y,"left")
x=C.n.bq(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},i6:{"^":"i5;e,f,a,b,c,d",
dd:function(a,b){var z,y,x,w,v;++this.e
if(J.aU(J.eN(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eu(z,2)+" fps"
y=this.c;(y&&C.C).cJ(y,b)
x=C.c.a8(30*C.t.dX(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cH(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)}}}],["","",,A,{"^":"",
ex:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.f6(b)!==!0)return
z=b.de(c)
y=b.ch
if(y!=null&&!0){b.k(0)
x=C.b.geh(e)
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
w.e1(new T.S(u))
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
x.i(0,"uTransformationMatrix",u)
x.i(0,"uModelMatrix",v)
x.i(0,"uNormalMatrix",w)
e.push(y)
a.d_(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.B)(y),++r)A.ex(a,y[r],z,d,e)},
b2:{"^":"dE;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
de:function(a){var z=this.dx
z.p(a)
z.cd(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
cd:{"^":"aI;d,e,ce:f>,a,b,c"},
hS:{"^":"aI;d,e,f,r,x,y,z,Q,a,b,c",
d6:function(a,b,c){if(this.d==null)this.d=new G.df(this.e,null,null,null,null)},
bh:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.bP(v.a,36160,z)
J.fv(v.a,this.x,this.y,x,w)
if(y!==0)J.eU(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.bF(P.H(),"transforms",!1,!0))
r=new T.C(new Float32Array(16))
r.J()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.B)(x),++q)A.ex(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}},
t:{
dB:function(a,b,c){var z=new A.hS(c,b,H.A([],[A.cd]),17664,0,0,0,0,a,!1,!0)
z.d6(a,b,c)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
fL:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.e(new Float32Array(3))
x.q(z,y,d2)
w=new T.e(new Float32Array(3))
w.q(d0,y,d2)
v=new T.e(new Float32Array(3))
v.q(d0,d1,d2)
u=new T.e(new Float32Array(3))
u.q(z,d1,d2)
t=-d2
s=new T.e(new Float32Array(3))
s.q(z,y,t)
r=new T.e(new Float32Array(3))
r.q(z,d1,t)
q=new T.e(new Float32Array(3))
q.q(d0,d1,t)
p=new T.e(new Float32Array(3))
p.q(d0,y,t)
o=new T.e(new Float32Array(3))
o.q(z,d1,t)
n=new T.e(new Float32Array(3))
n.q(z,d1,d2)
m=new T.e(new Float32Array(3))
m.q(d0,d1,d2)
l=new T.e(new Float32Array(3))
l.q(d0,d1,t)
k=new T.e(new Float32Array(3))
k.q(d0,y,d2)
j=new T.e(new Float32Array(3))
j.q(z,y,d2)
i=new T.e(new Float32Array(3))
i.q(z,y,t)
h=new T.e(new Float32Array(3))
h.q(d0,y,t)
g=new T.e(new Float32Array(3))
g.q(d0,y,t)
f=new T.e(new Float32Array(3))
f.q(d0,d1,t)
e=new T.e(new Float32Array(3))
e.q(d0,d1,d2)
d=new T.e(new Float32Array(3))
d.q(d0,y,d2)
c=new T.e(new Float32Array(3))
c.q(z,y,t)
b=new T.e(new Float32Array(3))
b.q(z,y,d2)
y=new T.e(new Float32Array(3))
y.q(z,d1,d2)
a=new T.e(new Float32Array(3))
a.q(z,d1,t)
z=new T.m(new Float32Array(2))
z.u(c7,c9)
t=new T.m(new Float32Array(2))
t.u(c6,c9)
a0=new T.m(new Float32Array(2))
a0.u(c6,c8)
a1=new T.m(new Float32Array(2))
a1.u(c7,c8)
a2=new T.m(new Float32Array(2))
a2.u(c6,c9)
a3=new T.m(new Float32Array(2))
a3.u(c6,c8)
a4=new T.m(new Float32Array(2))
a4.u(c7,c8)
a5=new T.m(new Float32Array(2))
a5.u(c7,c9)
a6=new T.m(new Float32Array(2))
a6.u(c7,c8)
a7=new T.m(new Float32Array(2))
a7.u(c7,c9)
a8=new T.m(new Float32Array(2))
a8.u(c6,c9)
a9=new T.m(new Float32Array(2))
a9.u(c6,c8)
b0=new T.m(new Float32Array(2))
b0.u(c6,c8)
b1=new T.m(new Float32Array(2))
b1.u(c7,c8)
b2=new T.m(new Float32Array(2))
b2.u(c7,c9)
b3=new T.m(new Float32Array(2))
b3.u(c6,c9)
b4=new T.m(new Float32Array(2))
b4.u(c6,c9)
b5=new T.m(new Float32Array(2))
b5.u(c6,c8)
b6=new T.m(new Float32Array(2))
b6.u(c7,c8)
b7=new T.m(new Float32Array(2))
b7.u(c7,c9)
b8=new T.m(new Float32Array(2))
b8.u(c7,c9)
b9=new T.m(new Float32Array(2))
b9.u(c6,c9)
c0=new T.m(new Float32Array(2))
c0.u(c6,c8)
c1=new T.m(new Float32Array(2))
c1.u(c7,c8)
c2=new G.b0(!1,[],[],[],P.H())
c2.U("aTexUV")
c2.U("aNormal")
c2.cW(6)
c2.bf([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.al("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$e3(),c3<6;++c3){c4=z[c3]
c2.am("aNormal",[c4,c4,c4,c4])}return c2},
fN:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c/2
y=[]
x=[]
w=[]
v=new T.e(new Float32Array(3))
v.q(0,z,0)
y.push(v)
v=new T.m(new Float32Array(2))
v.u(0,0)
x.push(v)
v=new T.e(new Float32Array(3))
v.q(0,1,0)
w.push(v)
v=-z
u=new T.e(new Float32Array(3))
u.q(0,v,0)
y.push(u)
u=new T.m(new Float32Array(2))
u.u(1,1)
x.push(u)
u=new T.e(new Float32Array(3))
u.q(0,-1,0)
w.push(u)
for(t=0;t<d;++t){s=t/d
u=s*3.141592653589793*2
r=Math.sin(u)
q=Math.cos(u)
u=new Float32Array(3)
u[0]=r*a
u[1]=z
u[2]=q*a
y.push(new T.e(u))
u=new Float32Array(2)
u[0]=s
u[1]=1
x.push(new T.m(u))
u=new Float32Array(3)
u[0]=0
u[1]=1
u[2]=0
w.push(new T.e(u))
u=new Float32Array(3)
u[0]=r*b
u[1]=v
u[2]=q*b
y.push(new T.e(u))
u=new Float32Array(2)
u[0]=s
u[1]=0
x.push(new T.m(u))
u=new Float32Array(3)
u[0]=0
u[1]=-1
u[2]=0
w.push(new T.e(u))}for(v=2*d,t=0;t<v;t=p){p=t+2
if(p>=y.length)return H.d(y,p)
y.push(y[p])
u=t+3
if(u>=y.length)return H.d(y,u)
y.push(y[u])
if(p>=x.length)return H.d(x,p)
x.push(x[p])
if(u>=x.length)return H.d(x,u)
x.push(x[u])
o=y.length
if(p>=o)return H.d(y,p)
n=y[p]
if(u>=o)return H.d(y,u)
m=y[u]
u=t+4
if(u>=o)return H.d(y,u)
l=y[u]
u=new Float32Array(3)
k=new T.e(new Float32Array(3))
G.hC(n,m,l,new T.e(u),k)
w.push(k)
w.push(k)}v=[]
u=[]
j=new G.b0(!1,v,u,[],P.H())
j.U("aTexUV")
j.bf(y)
j.al("aTexUV",x)
j.U("aNormal")
j.am("aNormal",w)
for(i=d*2,t=0;t<d;t=g){h=t*2+2
m=h+1
g=t+1
f=(g===d?0:g)*2+2
e=f+1
v.push(new G.ad(0,h,f))
v.push(new G.ad(1,e,m))
u.push(new G.bl(i+f,i+h,i+m,i+e))}return j},
h4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.M(z,$.$get$dh())
C.b.M(y,$.$get$di())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.B)(z),++u){t=z[u]
s=J.f(t)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
q=new T.e(new Float32Array(3))
q.p(r)
r=s.gR(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
q.K(0,y[r])
q.T(0,0.5)
q.E(0)
r=s.gR(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
p=new T.e(new Float32Array(3))
p.p(r)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
p.K(0,y[r])
p.T(0,0.5)
p.E(0)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
o=new T.e(new Float32Array(3))
o.p(r)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
o.K(0,y[r])
o.T(0,0.5)
o.E(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.ad(s.gV(t),n,l))
w.push(new G.ad(s.gR(t),m,n))
w.push(new G.ad(s.gZ(t),l,m))
w.push(new G.ad(n,m,l))}}k=new G.b0(!1,[],[],[],P.H())
k.U("aTexUV")
k.U("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.B)(z),++u){t=z[u]
s=J.f(t)
r=s.gV(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
j=y[r]
r=s.gR(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
i=y[r]
s=s.gZ(t)
if(s>>>0!==s||s>=y.length)return H.d(y,s)
h=y[s]
s=J.f(j)
r=s.gF(j)
g=s.gm(j)
g=Math.atan2(H.a8(r),H.a8(g))
s=Math.acos(H.a8(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.f(i)
g=s.gF(i)
f=s.gm(i)
f=Math.atan2(H.a8(g),H.a8(f))
s=Math.acos(H.a8(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.f(h)
f=s.gF(h)
e=s.gm(h)
e=Math.atan2(H.a8(f),H.a8(e))
s=Math.acos(H.a8(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.am("aNormal",[j,i,h])
k.cX([j.a1(b),i.a1(b),h.a1(b)])
k.al("aTexUV",[new T.m(r),new T.m(g),new T.m(f)])}return k},
i_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p
z=h+1
y=g+1
x=B.il(B.hF(new B.i0(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.b0(!1,[],[],w,P.H())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.B)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.bf(s[r]))}v.d1(z,y,!1)
v.d2(z,y)
v.U("aNormal")
for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.B)(x),++t){s=x[t]
for(r=0;q=s.length,r<q;r+=2){p=r+1
if(p>=q)return H.d(s,p)
p=s[p]
u.h(0,"aNormal").push(J.bf(p))}}return v},
il:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.e(y)
w=new Float32Array(3)
v=new T.e(w)
u=new Float32Array(3)
t=new T.e(u)
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
u[2]=k*j}v.E(0)
t.E(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.p(p)
x.ar(v,g)
x.ar(t,f)
q=new T.e(new Float32Array(3))
q.p(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.ar(v,g)
x.ar(t,f)
x.E(0)
q=new T.e(new Float32Array(3))
q.p(x)
m.push(q)}}return z},
hF:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.e(new Float32Array(3))
x=new T.e(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ak(0,y)
t=new T.e(new Float32Array(3))
t.p(y)
z.push(t)
t=new T.e(new Float32Array(3))
t.p(x)
z.push(t)}return z},
i0:{"^":"j:17;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sm(0,y*v)
b.sn(0,y*u)
b.sF(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",he:{"^":"c;a,b,c",
d3:function(a){var z
a=document
z=W.bq
W.ao(a,"keydown",new D.hg(this),!1,z)
W.ao(a,"keyup",new D.hh(this),!1,z)},
t:{
hf:function(a){var z=P.I
z=new D.he(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z))
z.d3(a)
return z}}},hg:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.K(0,J.cI(a))
z.b.K(0,a.which)}},hh:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.cg(0,J.cI(a))
z.c.K(0,a.which)}},hr:{"^":"c;a,b,c,d,e,f,r,x",
d5:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gaW(a)
W.ao(y.a,y.b,new D.ht(this),!1,H.G(y,0))
y=z.gaV(a)
W.ao(y.a,y.b,new D.hu(this),!1,H.G(y,0))
y=z.gaX(a)
W.ao(y.a,y.b,new D.hv(this),!1,H.G(y,0))
z=z.gaY(a)
W.ao(z.a,z.b,new D.hw(this),!1,H.G(z,0))},
t:{
hs:function(a){var z=P.I
z=new D.hr(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),0,0,0,0,0)
z.d5(a)
return z}}},ht:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.aw(a)
y=this.a
y.r=z.gcf(a).a
y.x=z.gcf(a).b
y.d=a.movementX
y.e=a.movementY}},hu:{"^":"j:5;a",
$1:function(a){var z=J.f(a)
z.aw(a)
P.au("BUTTON "+H.b(z.gbQ(a)))
z=this.a
z.a.K(0,a.button)
z.b.K(0,a.button)}},hv:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.aw(a)
y=this.a
y.a.cg(0,z.gbQ(a))
y.c.K(0,a.button)}},hw:{"^":"j:18;a",
$1:function(a){var z=J.f(a)
z.aw(a)
this.a.f=z.ge4(a)}},hE:{"^":"fB;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bc:function(a){var z,y
z=C.O.e9(a,0,new A.ks())
if(typeof z!=="number")return H.u(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ks:{"^":"j:19;",
$2:function(a,b){var z,y
z=J.aw(a,J.a4(b))
if(typeof z!=="number")return H.u(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",S:{"^":"c;bu:a<",
p:function(a){var z,y
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
if(b>=9)return H.d(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
Y:function(a){var z,y,x
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
O:function(a){var z=new T.S(new Float32Array(9))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.S(z)
y.p(this)
x=b.gbu()
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
H:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.S(z)
y.p(this)
x=b.gbu()
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
e1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.p(a)
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
y=new T.S(z)
y.p(this)
z[0]=z[0]*a
z[1]=z[1]*a
z[2]=z[2]*a
z[3]=z[3]*a
z[4]=z[4]*a
z[5]=z[5]*a
z[6]=z[6]*a
z[7]=z[7]*a
z[8]=z[8]*a
return y}},C:{"^":"c;bv:a<",
p:function(a){var z,y
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
if(b>=16)return H.d(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
Y:function(a){var z,y,x
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
return new T.a1(z)},
O:function(a){var z=new T.C(new Float32Array(16))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
x=b.gbv()
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
H:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
x=b.gbv()
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
cI:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
if(typeof a==="number"){x=a
w=x
v=w}else{v=null
w=null
x=null}u=z[0]
if(typeof v!=="number")return H.u(v)
z[0]=u*v
z[1]=z[1]*v
z[2]=z[2]*v
z[3]=z[3]*v
u=z[4]
if(typeof w!=="number")return H.u(w)
z[4]=u*w
z[5]=z[5]*w
z[6]=z[6]*w
z[7]=z[7]*w
u=z[8]
if(typeof x!=="number")return H.u(x)
z[8]=u*x
z[9]=z[9]*x
z[10]=z[10]*x
z[11]=z[11]*x
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
a1:function(a){return this.cI(a,null,null)},
J:function(){var z=this.a
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
cd:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},m:{"^":"c;bD:a<",
u:function(a,b){var z=this.a
z[0]=a
z[1]=b},
p:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.m(z)
y.p(this)
x=b.gbD()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.m(z)
y.p(this)
x=b.gbD()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
T:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a1:function(a){var z=new T.m(new Float32Array(2))
z.p(this)
z.T(0,a)
return z},
O:function(a){var z=new T.m(new Float32Array(2))
z.p(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},e:{"^":"c;aR:a<",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
p:function(a){var z,y
z=a.gaR()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.e){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
H:function(a,b){var z=new T.e(new Float32Array(3))
z.p(this)
z.ak(0,b)
return z},
l:function(a,b){var z=new T.e(new Float32Array(3))
z.p(this)
z.K(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
E:function(a){var z,y,x,w,v,u
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
aS:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
c_:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.e(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
K:function(a,b){var z,y
z=b.gaR()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ar:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ak:function(a,b){var z,y
z=b.gaR()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
T:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a1:function(a){var z=new T.e(new Float32Array(3))
z.p(this)
z.T(0,a)
return z},
O:function(a){var z=new T.e(new Float32Array(3))
z.p(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sF:function(a,b){this.a[2]=b
return b},
gR:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
t:{
F:function(a,b,c){var z=new T.e(new Float32Array(3))
z.q(a,b,c)
return z}}},a1:{"^":"c;bE:a<",
p:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.p(this)
x=b.gbE()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.p(this)
x=b.gbE()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.d(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
T:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
a1:function(a){var z=new T.a1(new Float32Array(4))
z.p(this)
z.T(0,a)
return z},
O:function(a){var z=new T.a1(new Float32Array(4))
z.p(this)
return z},
gR:function(a){return this.a[2]},
gV:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gax:function(a){return this.a[3]}}}],["","",,V,{"^":"",
hk:function(a,b,c,d){var z,y,x,w,v,u,t,s
if(typeof b!=="number")return b.az()
if(typeof c!=="number")return H.u(c)
z=new Uint32Array(b*c)
for(y=z.length,x=2*d,w=0;w<b;++w)for(v=w%x<d,u=0;u<c;++u){t=u*b+w
s=v?0:1
if(t<0||t>=y)return H.d(z,t)
z[t]=s}y=$.$get$ch()
x=J.cC(a.a)
J.ax(a.a,3553,x)
J.fk(a.a,3553,0,35056,b,c,0,34041,34042,z)
y.bl(a,3553)
J.cK(a.a)
J.ax(a.a,3553,null)
return new G.ip(b,c,35056,"frame::depth.stencil",x,3553,a,y)},
eG:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z={}
y=document
x=new R.i6(0,0,null,null,null,null)
x.d9(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fD(null,w)
y=J.fd(w,"webgl2",P.dq(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.P(P.dc('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.fe(y))
if($.eA>0)P.au("I: "+u)
J.eV(y,0,0,0,1)
J.aW(y,2929)
J.aW(y,2884)
u=new Float32Array(3)
t=D.hf(null)
s=D.hs(w)
r=new T.C(new Float32Array(16))
r.J()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hE(25,10,0,0,new T.e(u),-0.02,t,s,r,new T.e(q),new T.e(p),new T.e(o),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.C(new Float32Array(16))
u.J()
t=new T.C(new Float32Array(16))
t.J()
m=new G.hG(n,50,1,0.1,1000,u,t,new T.C(new Float32Array(16)),P.H(),"perspective",!1,!0)
m.bm()
l=w.clientWidth
k=w.clientHeight
w.width=l
w.height=k
m.cZ(l,k)
u=$.$get$ch()
t=J.cC(y)
j=new G.io(l,k,32856,"frame::color",t,3553,v,u)
J.ax(y,3553,t)
J.fm(v.a,3553,1,32856,l,k)
u.bl(v,3553)
J.cK(v.a)
J.ax(v.a,3553,null)
i=V.hk(v,l,k,8)
h=new G.df(v,null,j,i,null)
u=J.eX(v.a)
h.b=u
J.bP(v.a,36160,u)
J.cF(v.a,36160,36064,3553,t,0)
J.cF(v.a,36160,33306,3553,i.b,0)
g=J.eT(v.a,36160)
if(g!==36053)H.P("Error Incomplete Framebuffer: "+H.b(g))
J.bP(v.a,36160,null)
f=A.dB("main",v,h)
f.z=l
f.Q=k
f.r&=4294966271
y=G.dC("solid",v,$.$get$eK(),$.$get$eJ())
u=[]
f.f.push(new A.cd(y,[m],u,"solid",!1,!0))
e=G.cb("red")
t=e.d
t.i(0,"uColor",$.$get$d_())
t.i(0,"cStencilFunc",$.$get$by())
d=new G.ci(514,1,255)
c=G.cb("blue")
t=c.d
t.i(0,"uColor",$.$get$cZ())
t.i(0,"cStencilFunc",d)
t=G.b1("icosahedron-3",y,B.h4(3,1,!0))
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.J()
q=new T.C(new Float32Array(16))
q.J()
p=new Float32Array(3)
o=new Float32Array(3)
b=new Float32Array(3)
t=new A.b2(e,t,[],new T.S(s),r,q,new T.e(p),new T.e(o),new T.e(b),new T.e(new Float32Array(3)),"sphere",!1,!0)
t.ab(0,0,0)
u.push(t)
t=G.b1("cube",y,B.fL(!0,1,0,1,0,1,1,1))
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.J()
q=new T.C(new Float32Array(16))
q.J()
p=new Float32Array(3)
o=new Float32Array(3)
b=new Float32Array(3)
t=new A.b2(c,t,[],new T.S(s),r,q,new T.e(p),new T.e(o),new T.e(b),new T.e(new Float32Array(3)),"cube",!1,!0)
t.ab(-5,0,-5)
u.push(t)
t=G.b1("cylinder-32",y,B.fN(1,3,2,32,!0))
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.J()
q=new T.C(new Float32Array(16))
q.J()
p=new Float32Array(3)
o=new Float32Array(3)
b=new Float32Array(3)
t=new A.b2(e,t,[],new T.S(s),r,q,new T.e(p),new T.e(o),new T.e(b),new T.e(new Float32Array(3)),"cylinder",!1,!0)
t.ab(5,0,-5)
u.push(t)
y=G.b1("torusknot",y,B.i_(!0,!0,1,2,3,1,128,16,0.4,!1))
t=new Float32Array(9)
s=new T.C(new Float32Array(16))
s.J()
r=new T.C(new Float32Array(16))
r.J()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
y=new A.b2(c,y,[],new T.S(t),s,r,new T.e(q),new T.e(p),new T.e(o),new T.e(new Float32Array(3)),"torus",!1,!0)
y.ab(5,0,5)
u.push(y)
a=A.dB("copy",v,null)
a.z=l
a.Q=k
y=P.H()
if(typeof l!=="number")return H.u(l)
if(typeof k!=="number")return H.u(k)
u=new T.m(new Float32Array(2))
u.u(l,k)
y.i(0,"uCanvasSize",u)
y.i(0,"uTexture",j)
u=G.dC("postproc",v,$.$get$ew(),$.$get$ev())
t=[]
a.f.push(new A.cd(u,[new G.bF(y,"plain",!1,!0)],t,"postproc",!1,!0))
y=new T.e(new Float32Array(3))
y.q(-1,-1,0)
s=new T.e(new Float32Array(3))
s.q(1,-1,0)
r=new T.e(new Float32Array(3))
r.q(1,1,0)
q=new T.e(new Float32Array(3))
q.q(-1,1,0)
p=new T.m(new Float32Array(2))
p.u(0,0)
o=new T.m(new Float32Array(2))
o.u(1,0)
b=new T.m(new Float32Array(2))
b.u(1,1)
a0=new T.m(new Float32Array(2))
a0.u(0,1)
a1=new T.e(new Float32Array(3))
a1.q(0,0,1)
a2=new G.b0(!1,[],[],[],P.H())
a2.U("aTexUV")
a2.cY([y,s,r,q])
a2.al("aTexUV",[p,o,b,a0])
a2.U("aNormal")
a2.am("aNormal",[a1,a1,a1,a1])
a3=G.b1("quad",u,a2)
y=$.$get$db()
u=new Float32Array(9)
s=new T.C(new Float32Array(16))
s.J()
r=new T.C(new Float32Array(16))
r.J()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
t.push(new A.b2(y,a3,[],new T.S(u),s,r,new T.e(q),new T.e(p),new T.e(o),new T.e(new Float32Array(3)),"unit-mesh",!1,!0))
z.a=0
new V.kE(z,n,c,d,f,a,x).$1(0)},
kE:{"^":"j:20;a,b,c,d,e,f,r",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=this.a
y=J.aR(b5)
y.H(b5,z.a)
z.a=y.l(b5,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.az()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.az()
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
if(typeof v!=="number")return v.az()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dY(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.ab(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
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
o.q(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
m=u.H(0,t)
m.E(0)
l=o.c_(m)
l.E(0)
k=m.c_(l)
k.E(0)
t=l.aS(u)
n=k.aS(u)
u=m.aS(u)
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
i=y.f.a
i[0]=v[2]
i[1]=v[6]
i[2]=v[10]
y=-y.k1
g=i[0]
e=i[1]
d=i[2]
a=Math.sqrt(g*g+e*e+d*d)
r=i[0]/a
q=i[1]/a
p=i[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
i=q*a1
a5=r*p*a2+i
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-i
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
i=v[4]
d=v[8]
e=v[1]
g=v[5]
c=v[9]
b=v[2]
j=v[6]
h=v[10]
f=v[3]
t=v[7]
n=v[11]
v[0]=y*a3+i*a6+d*a9
v[1]=e*a3+g*a6+c*a9
v[2]=b*a3+j*a6+h*a9
v[3]=f*a3+t*a6+n*a9
v[4]=y*a4+i*a7+d*b0
v[5]=e*a4+g*a7+c*b0
v[6]=b*a4+j*a7+h*b0
v[7]=f*a4+t*a7+n*b0
v[8]=y*a5+i*a8+d*b1
v[9]=e*a5+g*a8+c*b1
v[10]=b*a5+j*a8+h*b1
v[11]=f*a5+t*a8+n*b1
w.c.ag(0)
w.b.ag(0)
x.e=0
x.d=0
x.f=0
x.c.ag(0)
x.b.ag(0)
y=$.$get$eB().checked===!0?this.d:$.$get$by()
this.c.d.i(0,"cStencilFunc",y)
b2=[]
this.e.bh(b2)
this.f.bh(b2)
b3=[]
for(y=b2.length,b4=0;b4<b2.length;b2.length===y||(0,H.B)(b2),++b4)b3.push(b2[b4].k(0))
C.a5.gdQ(window).cm(this)
this.r.dd(z.a,C.b.aa(b3,"<br>"))}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.aG.prototype
if(a==null)return J.hc.prototype
if(typeof a=="boolean")return J.hb.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.c)return a
return J.ba(a)}
J.ko=function(a){if(typeof a=="number")return J.aF.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.c)return a
return J.ba(a)}
J.ab=function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.c)return a
return J.ba(a)}
J.b9=function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.c)return a
return J.ba(a)}
J.aR=function(a){if(typeof a=="number")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b7.prototype
return a}
J.kp=function(a){if(typeof a=="number")return J.aF.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b7.prototype
return a}
J.eC=function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b7.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.c)return a
return J.ba(a)}
J.aw=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ko(a).l(a,b)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).G(a,b)}
J.Q=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aR(a).ai(a,b)}
J.aU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aR(a).a4(a,b)}
J.eN=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aR(a).H(a,b)}
J.aV=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kC(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).h(a,b)}
J.eO=function(a,b,c,d){return J.f(a).dC(a,b,c,d)}
J.cy=function(a,b){return J.f(a).bF(a,b)}
J.eP=function(a,b,c,d){return J.f(a).bG(a,b,c,d)}
J.cz=function(a,b,c){return J.f(a).bI(a,b,c)}
J.eQ=function(a,b){return J.f(a).dS(a,b)}
J.bO=function(a,b,c){return J.f(a).bJ(a,b,c)}
J.bP=function(a,b,c){return J.f(a).bL(a,b,c)}
J.ax=function(a,b,c){return J.f(a).bM(a,b,c)}
J.be=function(a,b){return J.f(a).dV(a,b)}
J.eR=function(a,b){return J.f(a).bN(a,b)}
J.eS=function(a,b,c){return J.f(a).bO(a,b,c)}
J.cA=function(a,b,c,d){return J.f(a).bP(a,b,c,d)}
J.eT=function(a,b){return J.f(a).bR(a,b)}
J.eU=function(a,b){return J.b9(a).bS(a,b)}
J.eV=function(a,b,c,d,e){return J.f(a).bT(a,b,c,d,e)}
J.bf=function(a){return J.f(a).O(a)}
J.cB=function(a,b){return J.eC(a).dZ(a,b)}
J.eW=function(a,b){return J.kp(a).W(a,b)}
J.bQ=function(a,b,c){return J.ab(a).e0(a,b,c)}
J.bR=function(a){return J.f(a).bV(a)}
J.eX=function(a){return J.f(a).bW(a)}
J.eY=function(a){return J.f(a).bX(a)}
J.cC=function(a){return J.f(a).bZ(a)}
J.eZ=function(a){return J.f(a).e3(a)}
J.f_=function(a,b){return J.f(a).c0(a,b)}
J.bS=function(a,b){return J.f(a).c1(a,b)}
J.f0=function(a,b,c,d){return J.f(a).c2(a,b,c,d)}
J.f1=function(a,b,c,d,e){return J.f(a).e5(a,b,c,d,e)}
J.f2=function(a,b,c,d,e){return J.f(a).c3(a,b,c,d,e)}
J.f3=function(a,b,c,d,e,f){return J.f(a).e6(a,b,c,d,e,f)}
J.cD=function(a,b){return J.b9(a).w(a,b)}
J.aW=function(a,b){return J.f(a).c4(a,b)}
J.f4=function(a,b){return J.f(a).c5(a,b)}
J.f5=function(a){return J.f(a).e7(a)}
J.cE=function(a,b){return J.b9(a).B(a,b)}
J.cF=function(a,b,c,d,e,f){return J.f(a).c7(a,b,c,d,e,f)}
J.cG=function(a){return J.f(a).gdR(a)}
J.f6=function(a){return J.f(a).gaT(a)}
J.ay=function(a){return J.f(a).gP(a)}
J.a4=function(a){return J.q(a).gC(a)}
J.aX=function(a){return J.b9(a).gL(a)}
J.a5=function(a){return J.ab(a).gj(a)}
J.f7=function(a){return J.f(a).gce(a)}
J.f8=function(a){return J.f(a).gaZ(a)}
J.cH=function(a){return J.f(a).ga2(a)}
J.f9=function(a){return J.f(a).geo(a)}
J.fa=function(a){return J.f(a).gcp(a)}
J.fb=function(a){return J.f(a).gax(a)}
J.cI=function(a){return J.f(a).gey(a)}
J.bT=function(a){return J.f(a).gm(a)}
J.bU=function(a){return J.f(a).gn(a)}
J.cJ=function(a){return J.f(a).gF(a)}
J.fc=function(a){return J.f(a).b1(a)}
J.fd=function(a,b,c){return J.f(a).cH(a,b,c)}
J.fe=function(a){return J.f(a).ay(a)}
J.cK=function(a){return J.f(a).b2(a)}
J.ff=function(a,b){return J.f(a).b3(a,b)}
J.fg=function(a,b,c){return J.f(a).b4(a,b,c)}
J.cL=function(a,b,c){return J.f(a).b7(a,b,c)}
J.fh=function(a,b){return J.f(a).cb(a,b)}
J.cM=function(a){return J.b9(a).ek(a)}
J.fi=function(a,b){return J.f(a).sat(a,b)}
J.fj=function(a,b,c,d){return J.f(a).bb(a,b,c,d)}
J.fk=function(a,b,c,d,e,f,g,h,i,j){return J.f(a).cj(a,b,c,d,e,f,g,h,i,j)}
J.fl=function(a,b,c,d){return J.f(a).ck(a,b,c,d)}
J.bg=function(a,b,c,d){return J.f(a).cl(a,b,c,d)}
J.fm=function(a,b,c,d,e,f){return J.f(a).ep(a,b,c,d,e,f)}
J.cN=function(a){return J.aR(a).eq(a)}
J.fn=function(a){return J.eC(a).es(a)}
J.az=function(a){return J.q(a).k(a)}
J.fo=function(a,b,c,d){return J.f(a).ev(a,b,c,d)}
J.fp=function(a,b,c){return J.f(a).cq(a,b,c)}
J.fq=function(a,b,c){return J.f(a).cr(a,b,c)}
J.bV=function(a,b,c){return J.f(a).cs(a,b,c)}
J.fr=function(a,b,c){return J.f(a).ct(a,b,c)}
J.cO=function(a,b,c){return J.f(a).cu(a,b,c)}
J.cP=function(a,b,c){return J.f(a).cv(a,b,c)}
J.cQ=function(a,b,c){return J.f(a).cw(a,b,c)}
J.cR=function(a,b,c,d){return J.f(a).cz(a,b,c,d)}
J.cS=function(a,b,c,d){return J.f(a).cA(a,b,c,d)}
J.fs=function(a,b){return J.f(a).cC(a,b)}
J.ft=function(a,b,c){return J.f(a).ew(a,b,c)}
J.fu=function(a,b,c,d,e,f,g){return J.f(a).cD(a,b,c,d,e,f,g)}
J.fv=function(a,b,c,d,e){return J.f(a).cF(a,b,c,d,e)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bW.prototype
C.n=W.fJ.prototype
C.C=W.fR.prototype
C.D=J.h.prototype
C.b=J.aD.prototype
C.t=J.dl.prototype
C.c=J.dm.prototype
C.a=J.aF.prototype
C.i=J.aG.prototype
C.K=J.aH.prototype
C.O=H.hx.prototype
C.P=W.hz.prototype
C.w=J.hH.prototype
C.B=W.ih.prototype
C.q=J.b7.prototype
C.a5=W.iu.prototype
C.f=new P.jn()
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
C.L=H.A(I.at(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.M=I.at(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=I.at([])
C.o=H.A(I.at(["bind","if","ref","repeat","syntax"]),[P.n])
C.p=H.A(I.at(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
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
$.Z=0
$.aA=null
$.cV=null
$.eE=null
$.er=null
$.eI=null
$.bJ=null
$.bK=null
$.cv=null
$.ap=null
$.aO=null
$.aP=null
$.co=!1
$.x=C.f
$.a6=null
$.c1=null
$.d9=null
$.d8=null
$.d5=null
$.d4=null
$.d3=null
$.d2=null
$.eA=0
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
I.$lazy(y,x,w)}})(["d1","$get$d1",function(){return H.eD("_$dart_dartClosure")},"c5","$get$c5",function(){return H.eD("_$dart_js")},"dN","$get$dN",function(){return H.a0(H.bE({
toString:function(){return"$receiver$"}}))},"dO","$get$dO",function(){return H.a0(H.bE({$method$:null,
toString:function(){return"$receiver$"}}))},"dP","$get$dP",function(){return H.a0(H.bE(null))},"dQ","$get$dQ",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.a0(H.bE(void 0))},"dV","$get$dV",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dS","$get$dS",function(){return H.a0(H.dT(null))},"dR","$get$dR",function(){return H.a0(function(){try{null.$method$}catch(z){return z.message}}())},"dX","$get$dX",function(){return H.a0(H.dT(void 0))},"dW","$get$dW",function(){return H.a0(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cj","$get$cj",function(){return P.iy()},"dg","$get$dg",function(){var z,y
z=P.b3
y=new P.ai(0,P.iw(),null,[z])
y.di(null,z)
return y},"aQ","$get$aQ",function(){return[]},"d0","$get$d0",function(){return{}},"e7","$get$e7",function(){return P.c8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cl","$get$cl",function(){return P.H()},"by","$get$by",function(){return G.ik(1281,0,4294967295)},"cU","$get$cU",function(){return new G.dL(1281,1281,1281)},"X","$get$X",function(){return P.dq(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.T,"aPosition",C.x,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.R,"vCenter",C.y,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a1,"uAnimationTable",C.h,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"ch","$get$ch",function(){var z=new G.ij(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"db","$get$db",function(){return G.cb("empty-mat")},"cZ","$get$cZ",function(){return T.F(0,0,1)},"d_","$get$d_",function(){return T.F(1,0,0)},"ey","$get$ey",function(){var z=G.bu("uv-passthru")
z.bd(["aPosition","aTexUV"])
z.be(["vTexUV"])
z.an(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"ew","$get$ew",function(){return $.$get$ey()},"ev","$get$ev",function(){var z=G.bu("copyF")
z.be(["vTexUV"])
z.aC(["uTexture"])
z.an(["oFragColor = texture(uTexture, vTexUV);"])
return z},"eK","$get$eK",function(){var z=G.bu("SolidColor")
z.bd(["aPosition"])
z.aC(["uPerspectiveViewMatrix","uModelMatrix"])
z.an(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eJ","$get$eJ",function(){var z=G.bu("SolidColorF")
z.aC(["uColor"])
z.an(["oFragColor = vec4( uColor, 1.0 );"])
return z},"e3","$get$e3",function(){return[T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)]},"dh","$get$dh",function(){return[G.E(0,11,5),G.E(0,5,1),G.E(0,1,7),G.E(0,7,10),G.E(0,10,11),G.E(1,5,9),G.E(5,11,4),G.E(11,10,2),G.E(10,7,6),G.E(7,1,8),G.E(3,9,4),G.E(3,4,2),G.E(3,2,6),G.E(3,6,8),G.E(3,8,9),G.E(4,9,5),G.E(2,4,11),G.E(6,2,10),G.E(8,6,7),G.E(9,8,1)]},"eL","$get$eL",function(){return(1+P.kI(5))/2},"di","$get$di",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$eL()
y=T.F(-1,z,0)
y.E(0)
x=T.F(1,z,0)
x.E(0)
if(typeof z!=="number")return z.eA()
w=T.F(-1,-z,0)
w.E(0)
v=T.F(1,-z,0)
v.E(0)
u=T.F(0,-1,z)
u.E(0)
t=T.F(0,1,z)
t.E(0)
s=T.F(0,-1,-z)
s.E(0)
r=T.F(0,1,-z)
r.E(0)
q=T.F(z,0,-1)
q.E(0)
p=T.F(z,0,1)
p.E(0)
o=T.F(-z,0,-1)
o.E(0)
z=T.F(-z,0,1)
z.E(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"eB","$get$eB",function(){return H.a3(W.kl().querySelector("#stencil"),"$isdj")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.N]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.I]},{func:1,args:[W.bq]},{func:1,ret:P.cq,args:[W.am,P.n,P.n,W.ck]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aL]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aL]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[P.ak,T.e]},{func:1,args:[W.aM]},{func:1,args:[P.I,P.c]},{func:1,v:true,args:[P.aS]},{func:1,ret:P.I,args:[,,]}]
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
if(x==y)H.kK(d||a)
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
Isolate.at=a.at
Isolate.ar=a.ar
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
if(typeof dartMainRunner==="function")dartMainRunner(V.eG,[])
else V.eG([])})})()
//# sourceMappingURL=stencil.dart.js.map
