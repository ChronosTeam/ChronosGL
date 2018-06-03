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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cr"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cr"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cr(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.at=function(){}
var dart=[["","",,H,{"^":"",lN:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
cu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b6:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ct==null){H.kt()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cg("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c5()]
if(v!=null)return v
v=H.kx(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c5(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
G:function(a,b){return a===b},
gB:function(a){return H.aK(a)},
k:["cF",function(a){return"Instance of '"+H.aL(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fZ:{"^":"h;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iscq:1},
db:{"^":"h;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isaZ:1},
c6:{"^":"h;",
gB:function(a){return 0},
k:["cH",function(a){return String(a)}]},
hz:{"^":"c6;"},
b3:{"^":"c6;"},
aJ:{"^":"c6;",
k:function(a){var z=a[$.$get$cW()]
return z==null?this.cH(a):J.aB(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aF:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.Q(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.a3)(b),++y)a.push(b[y])},
A:function(a,b){var z,y
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
b2:function(a,b){return H.du(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cz:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.Q(P.r("setRange"))
P.hH(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$isi){x=e
w=d}else{w=y.b2(d,e).ek(0,!1)
x=0}y=J.a0(w)
if(x+z>y.gi(w))throw H.a(H.fW())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ae:function(a,b,c,d){return this.cz(a,b,c,d,0)},
bA:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.J(a))}return!1},
cA:function(a,b){if(!!a.immutable$list)H.Q(P.r("sort"))
H.hU(a,J.k2())},
ap:function(a){return this.cA(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
k:function(a){return P.c4(a,"[","]")},
gK:function(a){return new J.fh(a,a.length,0,null,[H.A(a,0)])},
gB:function(a){return H.aK(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.Q(P.r("set length"))
if(b<0)throw H.a(P.an(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ac(a,b))
if(b>=a.length||b<0)throw H.a(H.ac(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.Q(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ac(a,b))
if(b>=a.length||b<0)throw H.a(H.ac(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.z([],[H.A(a,0)])
this.si(y,z)
this.ae(y,0,a.length,a)
this.ae(y,a.length,z,b)
return y},
$isn:1,
$asn:I.at,
$isi:1,
p:{
aG:function(a){a.fixed$length=Array
return a},
lL:[function(a,b){return J.eG(a,b)},"$2","k2",8,0,24]}},
lM:{"^":"aF;$ti"},
fh:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.a3(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aH:{"^":"h;",
S:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gak(b)
if(this.gak(a)===z)return 0
if(this.gak(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gak:function(a){return a===0?1/a<0:a<0},
ej:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
dM:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dN:function(a,b,c){if(this.S(b,c)>0)throw H.a(H.a_(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
em:function(a,b){var z
if(b>20)throw H.a(P.an(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gak(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a+b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a-b},
cJ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bt(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.bt(a,b)},
bt:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
br:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dw:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a<b},
ac:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a>b},
$isaR:1,
$isaT:1},
da:{"^":"aH;",$isE:1},
d9:{"^":"aH;"},
aI:{"^":"h;",
dO:function(a,b){if(b>=a.length)H.Q(H.ac(a,b))
return a.charCodeAt(b)},
bk:function(a,b){if(b>=a.length)throw H.a(H.ac(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.fg(b,null,null))
return a+b},
cC:function(a,b,c){var z
if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cB:function(a,b){return this.cC(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.Q(H.a_(c))
if(b<0)throw H.a(P.bq(b,null,null))
if(typeof c!=="number")return H.L(c)
if(b>c)throw H.a(P.bq(b,null,null))
if(c>a.length)throw H.a(P.bq(c,null,null))
return a.substring(b,c)},
cD:function(a,b){return this.b4(a,b,null)},
el:function(a){return a.toLowerCase()},
dR:function(a,b,c){if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
return H.kD(a,b,c)},
S:function(a,b){var z
if(typeof b!=="string")throw H.a(H.a_(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.ac(a,b))
return a[b]},
$isn:1,
$asn:I.at,
$isk:1}}],["","",,H,{"^":"",
d8:function(){return new P.bt("No element")},
fX:function(){return new P.bt("Too many elements")},
fW:function(){return new P.bt("Too few elements")},
hU:function(a,b){H.b0(a,0,J.a5(a)-1,b)},
b0:function(a,b,c,d){if(c-b<=32)H.hT(a,b,c,d)
else H.hS(a,b,c,d)},
hT:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a0(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a_(c-b+1,6)
y=b+z
x=c-z
w=C.b.a_(b+c,2)
v=w-z
u=w+z
t=J.a0(a)
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
h=J.o(i)
if(h.G(i,0))continue
if(h.a1(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aS(i)
if(h.ac(i,0)){--l
continue}else{g=l-1
if(h.a1(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aV(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aV(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b0(a,b,m-2,d)
H.b0(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.I(d.$2(t.h(a,m),r),0);)++m
for(;J.I(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.I(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.I(d.$2(j,p),0))for(;!0;)if(J.I(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aV(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b0(a,m,l,d)}else H.b0(a,m,l,d)},
bY:{"^":"bj;$ti"},
bl:{"^":"bY;$ti",
gK:function(a){return new H.df(this,this.gi(this),0,null,[H.b7(this,"bl",0)])},
A:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.J(this))}},
aS:function(a,b){return this.cG(0,b)}},
i8:{"^":"bl;a,b,c,$ti",
d_:function(a,b,c,d){},
gdh:function(){var z=J.a5(this.a)
return z},
gdz:function(){var z,y
z=J.a5(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a5(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdz()+b
if(b>=0){y=this.gdh()
if(typeof y!=="number")return H.L(y)
y=z>=y}else y=!0
if(y)throw H.a(P.x(b,this,"index",null,null))
return J.cA(this.a,z)},
ek:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a0(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.z(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.J(this))}return t},
p:{
du:function(a,b,c,d){var z=new H.i8(a,b,c,[d])
z.d_(a,b,c,d)
return z}}},
df:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a0(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.J(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hb:{"^":"bl;a,b,$ti",
gi:function(a){return J.a5(this.a)},
q:function(a,b){return this.b.$1(J.cA(this.a,b))},
$asbY:function(a,b){return[b]},
$asbl:function(a,b){return[b]},
$asbj:function(a,b){return[b]}},
dQ:{"^":"bj;a,b,$ti",
gK:function(a){return new H.ih(J.aW(this.a),this.b,this.$ti)}},
ih:{"^":"fY;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gC(z))===!0)return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bg:{"^":"c;$ti"}}],["","",,H,{"^":"",
kl:function(a){return init.types[a]},
kw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aB(a)
if(typeof z!=="string")throw H.a(H.a_(a))
return z},
aK:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.o(a).$isb3){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bk(w,0)===36)w=C.i.cD(w,1)
r=H.bH(H.au(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
H:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hG:function(a){return a.b?H.H(a).getUTCFullYear()+0:H.H(a).getFullYear()+0},
hE:function(a){return a.b?H.H(a).getUTCMonth()+1:H.H(a).getMonth()+1},
hA:function(a){return a.b?H.H(a).getUTCDate()+0:H.H(a).getDate()+0},
hB:function(a){return a.b?H.H(a).getUTCHours()+0:H.H(a).getHours()+0},
hD:function(a){return a.b?H.H(a).getUTCMinutes()+0:H.H(a).getMinutes()+0},
hF:function(a){return a.b?H.H(a).getUTCSeconds()+0:H.H(a).getSeconds()+0},
hC:function(a){return a.b?H.H(a).getUTCMilliseconds()+0:H.H(a).getMilliseconds()+0},
L:function(a){throw H.a(H.a_(a))},
d:function(a,b){if(a==null)J.a5(a)
throw H.a(H.ac(a,b))},
ac:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,"index",null)
z=J.a5(a)
if(!(b<0)){if(typeof z!=="number")return H.L(z)
y=b>=z}else y=!0
if(y)return P.x(b,a,"index",null,z)
return P.bq(b,"index",null)},
a_:function(a){return new P.ae(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ey})
z.name=""}else z.toString=H.ey
return z},
ey:function(){return J.aB(this.dartException)},
Q:function(a){throw H.a(a)},
a3:function(a){throw H.a(P.J(a))},
G:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.br(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c7(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dl(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dC()
u=$.$get$dD()
t=$.$get$dE()
s=$.$get$dF()
r=$.$get$dJ()
q=$.$get$dK()
p=$.$get$dH()
$.$get$dG()
o=$.$get$dM()
n=$.$get$dL()
m=v.P(y)
if(m!=null)return z.$1(H.c7(y,m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.c7(y,m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dl(y,m))}}return z.$1(new H.ie(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dr()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ae(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dr()
return a},
a1:function(a){var z
if(a==null)return new H.e7(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e7(a,null)},
kh:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kv:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d4("Unsupported number of arguments for wrapped closure"))},
U:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=z
return z},
fq:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$isi){z.$reflectionInfo=c
x=H.hJ(z).r}else x=c
w=d?Object.create(new H.hW().constructor.prototype):Object.create(new H.bT(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.ax(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cT(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kl,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cR:H.bU
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cT(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fn:function(a,b,c,d){var z=H.bU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fn(y,!w,z,b)
if(y===0){w=$.V
$.V=J.ax(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aC
if(v==null){v=H.be("self")
$.aC=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.V
$.V=J.ax(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aC
if(v==null){v=H.be("self")
$.aC=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fo:function(a,b,c,d){var z,y
z=H.bU
y=H.cR
switch(b?-1:a){case 0:throw H.a(H.hO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fp:function(a,b){var z,y,x,w,v,u,t,s
z=$.aC
if(z==null){z=H.be("self")
$.aC=z}y=$.cQ
if(y==null){y=H.be("receiver")
$.cQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fo(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.V
$.V=J.ax(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.V
$.V=J.ax(y,1)
return new Function(z+H.b(y)+"}")()},
cr:function(a,b,c,d,e,f){var z,y
z=J.aG(b)
y=!!J.o(c).$isi?J.aG(c):c
return H.fq(a,z,y,!!d,e,f)},
kB:function(a,b){var z=J.a0(b)
throw H.a(H.cS(a,z.b4(b,3,z.gi(b))))},
ad:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.kB(a,b)},
cs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
en:function(a,b){var z,y
if(a==null)return!1
z=H.cs(J.o(a))
if(z==null)y=!1
else y=H.es(z,b)
return y},
k9:function(a){var z
if(a instanceof H.f){z=H.cs(J.o(a))
if(z!=null)return H.cv(z,null)
return"Closure"}return H.aL(a)},
kE:function(a){throw H.a(new P.fv(a))},
eq:function(a){return init.getIsolateTag(a)},
z:function(a,b){a.$ti=b
return a},
au:function(a){if(a==null)return
return a.$ti},
n6:function(a,b,c){return H.aU(a["$as"+H.b(c)],H.au(b))},
b8:function(a,b,c,d){var z=H.aU(a["$as"+H.b(c)],H.au(b))
return z==null?null:z[d]},
b7:function(a,b,c){var z=H.aU(a["$as"+H.b(b)],H.au(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.au(a)
return z==null?null:z[b]},
cv:function(a,b){var z=H.aw(a,b)
return z},
aw:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bH(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aw(z,b)
return H.k1(a,b)}return"unknown-reified-type"},
k1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aw(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aw(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aw(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kg(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aw(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bH:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.ce("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aw(u,c)}return w?"":"<"+z.k(0)+">"},
kk:function(a){var z,y,x
if(a instanceof H.f){z=H.cs(J.o(a))
if(z!=null)return H.cv(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bH(a.$ti,0,null)
return y+x},
aU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b5:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.au(a)
y=J.o(a)
if(y[b]==null)return!1
return H.ek(H.aU(y[d],z),c)},
b9:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b5(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bH(c,0,null)
throw H.a(H.cS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ek:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
n4:function(a,b,c){return a.apply(b,H.aU(J.o(b)["$as"+H.b(c)],H.au(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aZ")return!0
if('func' in b)return H.es(a,b)
if('func' in a)return b.builtin$cls==="lE"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cv(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ek(H.aU(u,z),x)},
ej:function(a,b,c){var z,y,x,w,v
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
ka:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aG(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
es:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.ej(x,w,!1))return!1
if(!H.ej(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.ka(a.named,b.named)},
n5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kx:function(a){var z,y,x,w,v,u
z=$.er.$1(a)
y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ei.$2(a,z)
if(z!=null){y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bI(x)
$.bD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bG[z]=x
return x}if(v==="-"){u=H.bI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eu(a,x)
if(v==="*")throw H.a(P.cg(z))
if(init.leafTags[z]===true){u=H.bI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eu(a,x)},
eu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cu(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bI:function(a){return J.cu(a,!1,null,!!a.$isp)},
kA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bI(z)
else return J.cu(z,c,null,null)},
kt:function(){if(!0===$.ct)return
$.ct=!0
H.ku()},
ku:function(){var z,y,x,w,v,u,t,s
$.bD=Object.create(null)
$.bG=Object.create(null)
H.kp()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ev.$1(v)
if(u!=null){t=H.kA(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kp:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.as(C.G,H.as(C.L,H.as(C.u,H.as(C.u,H.as(C.K,H.as(C.H,H.as(C.I(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.er=new H.kq(v)
$.ei=new H.kr(u)
$.ev=new H.ks(t)},
as:function(a,b){return a(b)||b},
kD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hI:{"^":"c;a,b,c,d,e,f,r,x",p:{
hJ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aG(z)
y=z[0]
x=z[1]
return new H.hI(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
ic:{"^":"c;a,b,c,d,e,f",
P:function(a){var z,y,x
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
return new H.ic(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dI:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hv:{"^":"F;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dl:function(a,b){return new H.hv(a,b==null?null:b.method)}}},
h_:{"^":"F;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
c7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h_(a,y,z?null:b.receiver)}}},
ie:{"^":"F;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kF:{"^":"f:0;a",
$1:function(a){if(!!J.o(a).$isF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e7:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaM:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aL(this).trim()+"'"},
gcr:function(){return this},
gcr:function(){return this}},
dv:{"^":"f;"},
hW:{"^":"dv;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bT:{"^":"dv;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aK(this.a)
else y=typeof z!=="object"?J.a4(z):H.aK(z)
return(y^H.aK(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aL(z)+"'")},
p:{
bU:function(a){return a.a},
cR:function(a){return a.c},
be:function(a){var z,y,x,w,v
z=new H.bT("self","target","receiver","name")
y=J.aG(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fl:{"^":"F;a",
k:function(a){return this.a},
p:{
cS:function(a,b){return new H.fl("CastError: "+H.b(P.c_(a))+": type '"+H.k9(a)+"' is not a subtype of type '"+b+"'")}}},
hN:{"^":"F;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hO:function(a){return new H.hN(a)}}},
dN:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.a4(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.dN&&J.I(this.a,b.a)}},
dc:{"^":"ca;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gM:function(a){return new H.h5(this,[H.A(this,0)])},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bm(y,b)}else return this.e6(b)},
e6:function(a){var z=this.d
if(z==null)return!1
return this.aG(this.ax(z,J.a4(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ag(z,b)
x=y==null?null:y.ga8()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ag(w,b)
x=y==null?null:y.ga8()
return x}else return this.e7(b)},
e7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ax(z,J.a4(a)&0x3ffffff)
x=this.aG(y,a)
if(x<0)return
return y[x].ga8()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aA()
this.b=z}this.be(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aA()
this.c=y}this.be(y,b,c)}else{x=this.d
if(x==null){x=this.aA()
this.d=x}w=J.a4(b)&0x3ffffff
v=this.ax(x,w)
if(v==null)this.aE(x,w,[this.ar(b,c)])
else{u=this.aG(v,b)
if(u>=0)v[u].sa8(c)
else v.push(this.ar(b,c))}}},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.J(this))
z=z.c}},
be:function(a,b,c){var z=this.ag(a,b)
if(z==null)this.aE(a,b,this.ar(b,c))
else z.sa8(c)},
bf:function(){this.r=this.r+1&67108863},
ar:function(a,b){var z,y
z=new H.h4(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bf()
return z},
aG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].ge5(),b))return y
return-1},
k:function(a){return P.dg(this)},
ag:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aE:function(a,b,c){a[b]=c},
df:function(a,b){delete a[b]},
bm:function(a,b){return this.ag(a,b)!=null},
aA:function(){var z=Object.create(null)
this.aE(z,"<non-identifier-key>",z)
this.df(z,"<non-identifier-key>")
return z}},
h4:{"^":"c;e5:a<,a8:b@,c,d"},
h5:{"^":"bY;a,$ti",
gi:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.af(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
A:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.J(z))
y=y.c}}},
af:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kq:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
kr:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
ks:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kg:function(a){return J.aG(H.z(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){var z,y,x
if(!!J.o(a).$isn)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Z:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.ac(b,a))},
dh:{"^":"h;",$isdh:1,"%":"ArrayBuffer"},
cc:{"^":"h;",$iscc:1,"%":"DataView;ArrayBufferView;cb|e1|e2|di|e3|e4|ag"},
cb:{"^":"cc;",
gi:function(a){return a.length},
$isn:1,
$asn:I.at,
$isp:1,
$asp:I.at},
di:{"^":"e2;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
j:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbg:function(){return[P.aR]},
$asj:function(){return[P.aR]},
$isi:1,
$asi:function(){return[P.aR]},
"%":"Float64Array"},
ag:{"^":"e4;",
j:function(a,b,c){H.Z(b,a,a.length)
a[b]=c},
$asbg:function(){return[P.E]},
$asj:function(){return[P.E]},
$isi:1,
$asi:function(){return[P.E]}},
hn:{"^":"di;",$isc0:1,"%":"Float32Array"},
m1:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m2:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
$isfU:1,
"%":"Int32Array"},
m3:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m4:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m5:{"^":"ag;",
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m6:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m7:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.Z(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e1:{"^":"cb+j;"},
e2:{"^":"e1+bg;"},
e3:{"^":"cb+j;"},
e4:{"^":"e3+bg;"}}],["","",,P,{"^":"",
il:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.U(new P.io(z),1)).observe(y,{childList:true})
return new P.im(z,y,x)}else if(self.setImmediate!=null)return P.kc()
return P.kd()},
mS:[function(a){self.scheduleImmediate(H.U(new P.ip(a),0))},"$1","kb",4,0,6],
mT:[function(a){self.setImmediate(H.U(new P.iq(a),0))},"$1","kc",4,0,6],
mU:[function(a){P.jD(0,a)},"$1","kd",4,0,6],
ed:function(a,b){if(H.en(a,{func:1,args:[P.aZ,P.aZ]})){b.toString
return a}else{b.toString
return a}},
fM:function(a,b,c){var z
if(a==null)a=new P.bp()
z=$.q
if(z!==C.d)z.toString
z=new P.D(0,z,null,[c])
z.bi(a,b)
return z},
fN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.D(0,$.q,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fP(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aQ(new P.fO(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.D(0,$.q,null,[null])
r.bh(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.G(p)
t=H.a1(p)
if(z.b===0||!1)return P.fM(u,t,null)
else{z.c=u
z.d=t}}return y},
k0:function(a,b,c){$.q.toString
a.J(b,c)},
k4:function(){var z,y
for(;z=$.aq,z!=null;){$.aP=null
y=z.b
$.aq=y
if(y==null)$.aO=null
z.a.$0()}},
n3:[function(){$.co=!0
try{P.k4()}finally{$.aP=null
$.co=!1
if($.aq!=null)$.$get$ci().$1(P.el())}},"$0","el",0,0,3],
eg:function(a){var z=new P.dR(a,null)
if($.aq==null){$.aO=z
$.aq=z
if(!$.co)$.$get$ci().$1(P.el())}else{$.aO.b=z
$.aO=z}},
k8:function(a){var z,y,x
z=$.aq
if(z==null){P.eg(a)
$.aP=$.aO
return}y=new P.dR(a,null)
x=$.aP
if(x==null){y.b=z
$.aP=y
$.aq=y}else{y.b=x.b
x.b=y
$.aP=y
if(y.b==null)$.aO=y}},
kC:function(a){var z=$.q
if(C.d===z){P.ar(null,null,C.d,a)
return}z.toString
P.ar(null,null,z,z.bD(a))},
k7:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.G(u)
y=H.a1(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aA(x)
w=t
v=x.gX()
c.$2(w,v)}}},
jV:function(a,b,c,d){var z=a.bJ(0)
if(!!J.o(z).$isa8&&z!==$.$get$c1())z.cq(new P.jY(b,c,d))
else b.J(c,d)},
jW:function(a,b){return new P.jX(a,b)},
jZ:function(a,b,c){var z=a.bJ(0)
if(!!J.o(z).$isa8&&z!==$.$get$c1())z.cq(new P.k_(b,c))
else b.Y(c)},
bC:function(a,b,c,d,e){var z={}
z.a=d
P.k8(new P.k5(z,e))},
ee:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
ef:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
k6:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
ar:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bD(d):c.dJ(d)
P.eg(d)},
io:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
im:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ip:{"^":"f:1;a",
$0:function(){this.a.$0()}},
iq:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jC:{"^":"c;a,b,c",
d9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.U(new P.jE(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
p:{
jD:function(a,b){var z=new P.jC(!0,null,0)
z.d9(a,b)
return z}}},
jE:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a8:{"^":"c;$ti"},
fP:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.J(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.J(z.c,z.d)}},
fO:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.bl(x)}else if(z.b===0&&!this.e)this.c.J(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kR:{"^":"c;$ti"},
dU:{"^":"c;$ti",
dQ:function(a,b){if(a==null)a=new P.bp()
if(this.a.a!==0)throw H.a(P.b2("Future already completed"))
$.q.toString
this.J(a,b)},
dP:function(a){return this.dQ(a,null)}},
dS:{"^":"dU;a,$ti",
a7:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b2("Future already completed"))
z.bh(b)},
J:function(a,b){this.a.bi(a,b)}},
jx:{"^":"dU;a,$ti",
a7:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b2("Future already completed"))
z.Y(b)},
J:function(a,b){this.a.J(a,b)}},
cj:{"^":"c;aC:a<,b,c,d,e,$ti",
gdE:function(){return this.b.b},
gc_:function(){return(this.c&1)!==0},
ge4:function(){return(this.c&2)!==0},
gbZ:function(){return this.c===8},
e2:function(a){return this.b.b.aO(this.d,a)},
e8:function(a){if(this.c!==6)return!0
return this.b.b.aO(this.d,J.aA(a))},
e1:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.en(z,{func:1,args:[P.c,P.aM]}))return x.ef(z,y.gN(a),a.gX())
else return x.aO(z,y.gN(a))},
e3:function(){return this.b.b.c5(this.d)}},
D:{"^":"c;bs:a<,b,ds:c<,$ti",
gdl:function(){return this.a===2},
gay:function(){return this.a>=4},
aQ:function(a,b){var z,y,x
z=$.q
if(z!==C.d){z.toString
if(b!=null)b=P.ed(b,z)}y=new P.D(0,z,null,[null])
x=b==null?1:3
this.af(new P.cj(null,y,x,a,b,[H.A(this,0),null]))
return y},
aa:function(a){return this.aQ(a,null)},
cq:function(a){var z,y
z=$.q
y=new P.D(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.A(this,0)
this.af(new P.cj(null,y,8,a,null,[z,z]))
return y},
af:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gay()){y.af(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.ar(null,null,z,new P.iI(this,a))}},
bp:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaC()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gay()){v.bp(a)
return}this.a=v.a
this.c=v.c}z.a=this.aD(a)
y=this.b
y.toString
P.ar(null,null,y,new P.iP(z,this))}},
a4:function(){var z=this.c
this.c=null
return this.aD(z)},
aD:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaC()
z.a=y}return y},
Y:function(a){var z,y,x
z=this.$ti
y=H.b5(a,"$isa8",z,"$asa8")
if(y){z=H.b5(a,"$isD",z,null)
if(z)P.bA(a,this)
else P.dW(a,this)}else{x=this.a4()
this.a=4
this.c=a
P.ap(this,x)}},
bl:function(a){var z=this.a4()
this.a=4
this.c=a
P.ap(this,z)},
J:[function(a,b){var z=this.a4()
this.a=8
this.c=new P.bd(a,b)
P.ap(this,z)},function(a){return this.J(a,null)},"es","$2","$1","gas",4,2,13],
bh:function(a){var z=H.b5(a,"$isa8",this.$ti,"$asa8")
if(z){this.dd(a)
return}this.a=1
z=this.b
z.toString
P.ar(null,null,z,new P.iK(this,a))},
dd:function(a){var z=H.b5(a,"$isD",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ar(null,null,z,new P.iO(this,a))}else P.bA(a,this)
return}P.dW(a,this)},
bi:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ar(null,null,z,new P.iJ(this,a,b))},
$isa8:1,
p:{
iH:function(a,b){var z=new P.D(0,$.q,null,[b])
z.a=4
z.c=a
return z},
dW:function(a,b){var z,y,x
b.a=1
try{a.aQ(new P.iL(b),new P.iM(b))}catch(x){z=H.G(x)
y=H.a1(x)
P.kC(new P.iN(b,z,y))}},
bA:function(a,b){var z
for(;a.gdl();)a=a.c
if(a.gay()){z=b.a4()
b.a=a.a
b.c=a.c
P.ap(b,z)}else{z=b.c
b.a=2
b.c=a
a.bp(z)}},
ap:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aA(v)
t=v.gX()
y.toString
P.bC(null,null,y,u,t)}return}for(;b.gaC()!=null;b=s){s=b.a
b.a=null
P.ap(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc_()||b.gbZ()){q=b.gdE()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aA(v)
t=v.gX()
y.toString
P.bC(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gbZ())new P.iS(z,x,b,w).$0()
else if(y){if(b.gc_())new P.iR(x,b,r).$0()}else if(b.ge4())new P.iQ(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.o(y).$isa8){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aD(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bA(y,o)
return}}o=b.b
b=o.a4()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iI:{"^":"f:1;a,b",
$0:function(){P.ap(this.a,this.b)}},
iP:{"^":"f:1;a,b",
$0:function(){P.ap(this.b,this.a.a)}},
iL:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.Y(a)}},
iM:{"^":"f:14;a",
$2:function(a,b){this.a.J(a,b)},
$1:function(a){return this.$2(a,null)}},
iN:{"^":"f:1;a,b,c",
$0:function(){this.a.J(this.b,this.c)}},
iK:{"^":"f:1;a,b",
$0:function(){this.a.bl(this.b)}},
iO:{"^":"f:1;a,b",
$0:function(){P.bA(this.b,this.a)}},
iJ:{"^":"f:1;a,b,c",
$0:function(){this.a.J(this.b,this.c)}},
iS:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e3()}catch(w){y=H.G(w)
x=H.a1(w)
if(this.d){v=J.aA(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bd(y,x)
u.a=!0
return}if(!!J.o(z).$isa8){if(z instanceof P.D&&z.gbs()>=4){if(z.gbs()===8){v=this.b
v.b=z.gds()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aa(new P.iT(t))
v.a=!1}}},
iT:{"^":"f:0;a",
$1:function(a){return this.a}},
iR:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e2(this.c)}catch(x){z=H.G(x)
y=H.a1(x)
w=this.a
w.b=new P.bd(z,y)
w.a=!0}}},
iQ:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e8(z)===!0&&w.e!=null){v=this.b
v.b=w.e1(z)
v.a=!1}}catch(u){y=H.G(u)
x=H.a1(u)
w=this.a
v=J.aA(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bd(y,x)
s.a=!0}}},
dR:{"^":"c;a,b"},
bu:{"^":"c;$ti",
A:function(a,b){var z,y
z={}
y=new P.D(0,$.q,null,[null])
z.a=null
z.a=this.aH(new P.i4(z,this,b,y),!0,new P.i5(y),y.gas())
return y},
gi:function(a){var z,y
z={}
y=new P.D(0,$.q,null,[P.E])
z.a=0
this.aH(new P.i6(z),!0,new P.i7(z,y),y.gas())
return y},
gdZ:function(a){var z,y
z={}
y=new P.D(0,$.q,null,[H.b7(this,"bu",0)])
z.a=null
z.a=this.aH(new P.i0(z,this,y),!0,new P.i1(y),y.gas())
return y}},
i4:{"^":"f;a,b,c,d",
$1:function(a){P.k7(new P.i2(this.c,a),new P.i3(),P.jW(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.b7(this.b,"bu",0)]}}},
i2:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
i3:{"^":"f:0;",
$1:function(a){}},
i5:{"^":"f:1;a",
$0:function(){this.a.Y(null)}},
i6:{"^":"f:0;a",
$1:function(a){++this.a.a}},
i7:{"^":"f:1;a,b",
$0:function(){this.b.Y(this.a.a)}},
i0:{"^":"f;a,b,c",
$1:function(a){P.jZ(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.b7(this.b,"bu",0)]}}},
i1:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.d8()
throw H.a(x)}catch(w){z=H.G(w)
y=H.a1(w)
P.k0(this.a,z,y)}}},
i_:{"^":"c;$ti"},
jY:{"^":"f:1;a,b,c",
$0:function(){return this.a.J(this.b,this.c)}},
jX:{"^":"f:15;a,b",
$2:function(a,b){P.jV(this.a,this.b,a,b)}},
k_:{"^":"f:1;a,b",
$0:function(){return this.a.Y(this.b)}},
bd:{"^":"c;N:a>,X:b<",
k:function(a){return H.b(this.a)},
$isF:1},
jK:{"^":"c;"},
k5:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bp()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aB(y)
throw x}},
jd:{"^":"jK;",
eg:function(a){var z,y,x
try{if(C.d===$.q){a.$0()
return}P.ee(null,null,this,a)}catch(x){z=H.G(x)
y=H.a1(x)
P.bC(null,null,this,z,y)}},
eh:function(a,b){var z,y,x
try{if(C.d===$.q){a.$1(b)
return}P.ef(null,null,this,a,b)}catch(x){z=H.G(x)
y=H.a1(x)
P.bC(null,null,this,z,y)}},
dJ:function(a){return new P.jf(this,a)},
bD:function(a){return new P.je(this,a)},
dK:function(a){return new P.jg(this,a)},
h:function(a,b){return},
c5:function(a){if($.q===C.d)return a.$0()
return P.ee(null,null,this,a)},
aO:function(a,b){if($.q===C.d)return a.$1(b)
return P.ef(null,null,this,a,b)},
ef:function(a,b,c){if($.q===C.d)return a.$2(b,c)
return P.k6(null,null,this,a,b,c)}},
jf:{"^":"f:1;a,b",
$0:function(){return this.a.c5(this.b)}},
je:{"^":"f:1;a,b",
$0:function(){return this.a.eg(this.b)}},
jg:{"^":"f:0;a,b",
$1:function(a){return this.a.eh(this.b,a)}}}],["","",,P,{"^":"",
X:function(){return new H.dc(0,null,null,null,null,null,0,[null,null])},
c8:function(a){return H.kh(a,new H.dc(0,null,null,null,null,null,0,[null,null]))},
R:function(a,b,c,d){return new P.j0(0,null,null,null,null,null,0,[d])},
fV:function(a,b,c){var z,y
if(P.cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aQ()
y.push(a)
try{P.k3(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dt(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c4:function(a,b,c){var z,y,x
if(P.cp(a))return b+"..."+c
z=new P.ce(b)
y=$.$get$aQ()
y.push(a)
try{x=z
x.a=P.dt(x.gZ(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gZ()+c
y=z.gZ()
return y.charCodeAt(0)==0?y:y},
cp:function(a){var z,y
for(z=0;y=$.$get$aQ(),z<y.length;++z)if(a===y[z])return!0
return!1},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
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
c9:function(a,b){var z,y
z=P.R(null,null,null,b)
for(y=J.aW(a);y.t();)z.R(0,y.gC(y))
return z},
dg:function(a){var z,y,x
z={}
if(P.cp(a))return"{...}"
y=new P.ce("")
try{$.$get$aQ().push(a)
x=y
x.a=x.gZ()+"{"
z.a=!0
J.cB(a,new P.ha(z,y))
z=y
z.a=z.gZ()+"}"}finally{z=$.$get$aQ()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gZ()
return z.charCodeAt(0)==0?z:z},
j0:{"^":"iV;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.cm(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.de(b)},
de:function(a){var z=this.d
if(z==null)return!1
return this.aw(z[this.at(a)],a)>=0},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.J(this))
z=z.b}},
R:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cn()
this.b=z}return this.bg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cn()
this.c=y}return this.bg(y,b)}else return this.da(0,b)},
da:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cn()
this.d=z}y=this.at(b)
x=z[y]
if(x==null)z[y]=[this.aB(b)]
else{if(this.aw(x,b)>=0)return!1
x.push(this.aB(b))}return!0},
c4:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bq(this.c,b)
else return this.dn(0,b)},
dn:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.at(b)]
x=this.aw(y,b)
if(x<0)return!1
this.bu(y.splice(x,1)[0])
return!0},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.az()}},
bg:function(a,b){if(a[b]!=null)return!1
a[b]=this.aB(b)
return!0},
bq:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bu(z)
delete a[b]
return!0},
az:function(){this.r=this.r+1&67108863},
aB:function(a){var z,y
z=new P.j1(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.az()
return z},
bu:function(a){var z,y
z=a.gdm()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.az()},
at:function(a){return J.a4(a)&0x3ffffff},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].gdg(),b))return y
return-1},
p:{
cn:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
j1:{"^":"c;dg:a<,b,dm:c<"},
cm:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iV:{"^":"hP;$ti"},
lQ:{"^":"c;$ti"},
de:{"^":"e0;$ti",$isi:1},
j:{"^":"c;$ti",
gK:function(a){return new H.df(a,this.gi(a),0,null,[H.b8(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
A:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.J(a))}},
e0:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.J(a))}return y},
b2:function(a,b){return H.du(a,b,null,H.b8(this,a,"j",0))},
n:function(a,b){var z=H.z([],[H.b8(this,a,"j",0)])
C.c.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.c.ae(z,0,this.gi(a),a)
C.c.ae(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.c4(a,"[","]")}},
ca:{"^":"O;$ti"},
ha:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
O:{"^":"c;$ti",
A:function(a,b){var z,y
for(z=J.aW(this.gM(a));z.t();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a5(this.gM(a))},
k:function(a){return P.dg(a)},
$isC:1},
hQ:{"^":"c;$ti",
O:function(a,b){var z
for(z=J.aW(b);z.t();)this.R(0,z.gC(z))},
k:function(a){return P.c4(this,"{","}")},
A:function(a,b){var z
for(z=new P.cm(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hP:{"^":"hQ;$ti"},
e0:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fH:function(a){var z=J.o(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aL(a)+"'"},
c_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fH(a)},
d4:function(a){return new P.iE(a)},
a2:function(a){H.bJ(H.b(a))},
cq:{"^":"c;"},
"+bool":0,
bX:{"^":"c;dD:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.bX))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.gdD())},
gB:function(a){var z=this.a
return(z^C.b.br(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fw(H.hG(this))
y=P.aX(H.hE(this))
x=P.aX(H.hA(this))
w=P.aX(H.hB(this))
v=P.aX(H.hD(this))
u=P.aX(H.hF(this))
t=P.fx(H.hC(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fw:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aX:function(a){if(a>=10)return""+a
return"0"+a}}},
aR:{"^":"aT;"},
"+double":0,
aY:{"^":"c;a3:a<",
n:function(a,b){return new P.aY(C.b.n(this.a,b.ga3()))},
L:function(a,b){return new P.aY(this.a-b.ga3())},
a1:function(a,b){return C.b.a1(this.a,b.ga3())},
ac:function(a,b){return C.b.ac(this.a,b.ga3())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.aY))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.ga3())},
k:function(a){var z,y,x,w,v
z=new P.fE()
y=this.a
if(y<0)return"-"+new P.aY(0-y).k(0)
x=z.$1(C.b.a_(y,6e7)%60)
w=z.$1(C.b.a_(y,1e6)%60)
v=new P.fD().$1(y%1e6)
return""+C.b.a_(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fC:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fD:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fE:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
F:{"^":"c;",
gX:function(){return H.a1(this.$thrownJsError)}},
bp:{"^":"F;",
k:function(a){return"Throw of null."}},
ae:{"^":"F;a,b,c,d",
gav:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gau:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gav()+y+x
if(!this.a)return w
v=this.gau()
u=P.c_(this.b)
return w+v+": "+H.b(u)},
p:{
cO:function(a){return new P.ae(!1,null,null,a)},
fg:function(a,b,c){return new P.ae(!0,a,b,c)}}},
dn:{"^":"ae;e,f,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bq:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
hH:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.an(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.an(b,a,c,"end",f))
return b}}},
fT:{"^":"ae;e,i:f>,a,b,c,d",
gav:function(){return"RangeError"},
gau:function(){if(J.aV(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
x:function(a,b,c,d,e){var z=e!=null?e:J.a5(b)
return new P.fT(b,z,!0,a,c,"Index out of range")}}},
ig:{"^":"F;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
r:function(a){return new P.ig(a)}}},
id:{"^":"F;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
cg:function(a){return new P.id(a)}}},
bt:{"^":"F;a",
k:function(a){return"Bad state: "+this.a},
p:{
b2:function(a){return new P.bt(a)}}},
fr:{"^":"F;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.c_(z))+"."},
p:{
J:function(a){return new P.fr(a)}}},
dr:{"^":"c;",
k:function(a){return"Stack Overflow"},
gX:function(){return},
$isF:1},
fv:{"^":"F;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
ld:{"^":"c;"},
iE:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
E:{"^":"aT;"},
"+int":0,
bj:{"^":"c;$ti",
aS:["cG",function(a,b){return new H.dQ(this,b,[H.b7(this,"bj",0)])}],
A:function(a,b){var z
for(z=this.gK(this);z.t();)b.$1(z.gC(z))},
gi:function(a){var z,y
z=this.gK(this)
for(y=0;z.t();)++y
return y},
gW:function(a){var z,y
z=this.gK(this)
if(!z.t())throw H.a(H.d8())
y=z.gC(z)
if(z.t())throw H.a(H.fX())
return y},
q:function(a,b){var z,y,x
if(b<0)H.Q(P.an(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.t();){x=z.gC(z)
if(b===y)return x;++y}throw H.a(P.x(b,this,"index",null,y))},
k:function(a){return P.fV(this,"(",")")}},
fY:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
C:{"^":"c;$ti"},
aZ:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aT:{"^":"c;"},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.aK(this)},
k:function(a){return"Instance of '"+H.aL(this)+"'"},
toString:function(){return this.k(this)}},
aM:{"^":"c;"},
k:{"^":"c;"},
"+String":0,
ce:{"^":"c;Z:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dt:function(a,b,c){var z=J.aW(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.t())}else{a+=H.b(z.gC(z))
for(;z.t();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
fF:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).T(z,a,b,c)
y.toString
z=new H.dQ(new W.S(y),new W.fG(),[W.t])
return z.gW(z)},
d3:function(a){return"wheel"},
aD:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eT(a)
if(typeof y==="string")z=a.tagName}catch(x){H.G(x)}return z},
iB:function(a,b){return document.createElement(a)},
ak:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ec:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iv(a)
if(!!J.o(z).$isB)return z
return}else return a},
eh:function(a){var z=$.q
if(z===C.d)return a
return z.dK(a)},
v:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kG:{"^":"cd;l:x=,m:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
kH:{"^":"h;i:length=","%":"AccessibleNodeList"},
kI:{"^":"v;aj:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kJ:{"^":"v;aj:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kN:{"^":"v;aj:href}","%":"HTMLBaseElement"},
bR:{"^":"h;",$isbR:1,"%":";Blob"},
bS:{"^":"v;",$isbS:1,"%":"HTMLBodyElement"},
kO:{"^":"v;I:name=","%":"HTMLButtonElement"},
bV:{"^":"v;D:height},E:width}",
cs:function(a,b,c){var z=a.getContext(b,P.ke(c,null))
return z},
$isbV:1,
"%":"HTMLCanvasElement"},
kP:{"^":"h;",
ao:function(a){return P.P(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kQ:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kS:{"^":"W;U:style=","%":"CSSFontFaceRule"},
kT:{"^":"W;U:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kU:{"^":"W;U:style=","%":"CSSPageRule"},
kV:{"^":"bf;i:length=","%":"CSSPerspective"},
kW:{"^":"bW;l:x=,m:y=","%":"CSSPositionValue"},
kX:{"^":"bf;l:x=,m:y=,F:z=","%":"CSSRotation"},
W:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kY:{"^":"bf;l:x=,m:y=,F:z=","%":"CSSScale"},
fs:{"^":"it;i:length=",
bj:function(a,b){var z,y
z=$.$get$cV()
y=z[b]
if(typeof y==="string")return y
y=this.dA(a,b)
z[b]=y
return y},
dA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fy()+b
if(z in a)return z
return b},
dv:function(a,b,c,d){a.setProperty(b,c,d)},
sD:function(a,b){a.height=b},
sE:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ft:{"^":"c;",
se_:function(a,b){this.dv(a,this.bj(a,"float"),b,"")}},
kZ:{"^":"W;U:style=","%":"CSSStyleRule"},
bW:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bf:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l_:{"^":"bW;i:length=","%":"CSSTransformValue"},
l0:{"^":"bf;l:x=,m:y=,F:z=","%":"CSSTranslation"},
l1:{"^":"bW;i:length=","%":"CSSUnparsedValue"},
l2:{"^":"W;U:style=","%":"CSSViewportRule"},
l3:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
l4:{"^":"h;l:x=,m:y=,F:z=","%":"DeviceAcceleration"},
fz:{"^":"v;","%":"HTMLDivElement"},
l5:{"^":"t;",
gaJ:function(a){return new W.b4(a,"mousedown",!1,[W.K])},
gaK:function(a){return new W.b4(a,"mousemove",!1,[W.K])},
gaL:function(a){return new W.b4(a,"mouseup",!1,[W.K])},
gaM:function(a){return new W.b4(a,W.d3(a),!1,[W.aN])},
"%":"Document|HTMLDocument|XMLDocument"},
l6:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
l7:{"^":"fA;",
gan:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
fA:{"^":"h;",
gan:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
l8:{"^":"ix;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.aa]},
$isp:1,
$asp:function(){return[P.aa]},
$asj:function(){return[P.aa]},
$isi:1,
$asi:function(){return[P.aa]},
$asl:function(){return[P.aa]},
"%":"ClientRectList|DOMRectList"},
fB:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gE(a))+" x "+H.b(this.gD(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isaa)return!1
return a.left===z.gc0(b)&&a.top===z.gc9(b)&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.e_(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gca:function(a){return new P.ah(a.left,a.top,[null])},
gD:function(a){return a.height},
gc0:function(a){return a.left},
gc9:function(a){return a.top},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isaa:1,
$asaa:I.at,
"%":";DOMRectReadOnly"},
l9:{"^":"iz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
la:{"^":"h;i:length=","%":"DOMTokenList"},
al:{"^":"t;U:style=,bo:namespaceURI=,ei:tagName=",
gdH:function(a){return new W.iA(a)},
k:function(a){return a.localName},
T:["aq",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d2
if(z==null){z=H.z([],[W.dj])
y=new W.dk(z)
z.push(W.dX(null))
z.push(W.e8())
$.d2=y
d=y}else d=z
z=$.d1
if(z==null){z=new W.eb(d)
$.d1=z
c=z}else{z.a=d
c=z}}if($.a6==null){z=document
y=z.implementation.createHTMLDocument("")
$.a6=y
$.bZ=y.createRange()
y=$.a6
y.toString
x=y.createElement("base")
J.f3(x,z.baseURI)
$.a6.head.appendChild(x)}z=$.a6
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a6
if(!!this.$isbS)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a6.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.w(C.O,a.tagName)){$.bZ.selectNodeContents(w)
v=$.bZ.createContextualFragment(b)}else{w.innerHTML=b
v=$.a6.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a6.body
if(w==null?z!=null:w!==z)J.cH(w)
c.b0(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"dT",null,null,"gex",5,5,null],
cw:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
cv:function(a,b){return this.cw(a,b,null,null)},
aT:function(a){return a.getBoundingClientRect()},
gaJ:function(a){return new W.ab(a,"mousedown",!1,[W.K])},
gaK:function(a){return new W.ab(a,"mousemove",!1,[W.K])},
gaL:function(a){return new W.ab(a,"mouseup",!1,[W.K])},
gaM:function(a){return new W.ab(a,W.d3(a),!1,[W.aN])},
$isal:1,
"%":";Element"},
fG:{"^":"f:0;",
$1:function(a){return!!J.o(a).$isal}},
lb:{"^":"v;D:height},I:name=,E:width}","%":"HTMLEmbedElement"},
lc:{"^":"a7;N:error=","%":"ErrorEvent"},
a7:{"^":"h;",
am:function(a){return a.preventDefault()},
$isa7:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"h;",
bz:["cE",function(a,b,c,d){if(c!=null)this.dc(a,b,c,!1)}],
dc:function(a,b,c,d){return a.addEventListener(b,H.U(c,1),!1)},
dq:function(a,b,c,d){return a.removeEventListener(b,H.U(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e5|e6|e9|ea"},
lw:{"^":"v;I:name=","%":"HTMLFieldSetElement"},
am:{"^":"bR;",$isam:1,"%":"File"},
d5:{"^":"iG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.am]},
$isp:1,
$asp:function(){return[W.am]},
$asj:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isd5:1,
$asl:function(){return[W.am]},
"%":"FileList"},
lx:{"^":"B;N:error=","%":"FileReader"},
ly:{"^":"B;N:error=,i:length=","%":"FileWriter"},
lA:{"^":"h;U:style=","%":"FontFace"},
lB:{"^":"B;",
ey:function(a,b,c){return a.forEach(H.U(b,3),c)},
A:function(a,b){b=H.U(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lD:{"^":"v;i:length=,I:name=","%":"HTMLFormElement"},
lF:{"^":"cd;l:x=,m:y=,F:z=","%":"Gyroscope"},
lG:{"^":"h;i:length=","%":"History"},
lH:{"^":"iX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lI:{"^":"v;D:height},I:name=,E:width}","%":"HTMLIFrameElement"},
c2:{"^":"h;",$isc2:1,"%":"ImageBitmap"},
bi:{"^":"h;",$isbi:1,"%":"ImageData"},
c3:{"^":"v;D:height},E:width}",$isc3:1,"%":"HTMLImageElement"},
lK:{"^":"v;D:height},I:name=,E:width}","%":"HTMLInputElement"},
bk:{"^":"dO;",
gep:function(a){return a.which},
$isbk:1,
"%":"KeyboardEvent"},
lP:{"^":"v;aj:href}","%":"HTMLLinkElement"},
lR:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lS:{"^":"cd;l:x=,m:y=,F:z=","%":"Magnetometer"},
lT:{"^":"v;I:name=","%":"HTMLMapElement"},
hd:{"^":"v;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lW:{"^":"h;i:length=","%":"MediaList"},
bm:{"^":"B;",$isbm:1,"%":"MediaStream"},
lX:{"^":"B;",
bz:function(a,b,c,d){if(J.I(b,"message"))a.start()
this.cE(a,b,c,!1)},
"%":"MessagePort"},
lY:{"^":"v;I:name=","%":"HTMLMetaElement"},
lZ:{"^":"j2;",
h:function(a,b){return P.P(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gM:function(a){var z=H.z([],[P.k])
this.A(a,new W.hf(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"MIDIInputMap"},
hf:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m_:{"^":"j3;",
h:function(a,b){return P.P(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gM:function(a){var z=H.z([],[P.k])
this.A(a,new W.hg(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
hg:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m0:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bn]},
$isp:1,
$asp:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$asl:function(){return[W.bn]},
"%":"MimeTypeArray"},
K:{"^":"dO;bI:button=",
gc2:function(a){var z,y,x
if(!!a.offsetX)return new P.ah(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.ec(z)).$isal)throw H.a(P.r("offsetX is only supported on elements"))
y=W.ec(z)
z=[null]
x=new P.ah(a.clientX,a.clientY,z).L(0,J.eU(J.eW(y)))
return new P.ah(J.cI(x.a),J.cI(x.b),z)}},
$isK:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
ho:{"^":"hp;",
cu:function(a,b,c){var z,y,x,w
z=W.bm
y=new P.D(0,$.q,null,[z])
x=new P.dS(y,[z])
w=P.c8(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dj(a,new P.ju([],[]).aR(w),new W.hq(x),new W.hr(x))
return y},
ct:function(a,b){return this.cu(a,!1,b)},
dj:function(a,b,c,d){return a.getUserMedia(b,H.U(c,1),H.U(d,1))},
"%":"Navigator"},
hq:{"^":"f:0;a",
$1:function(a){this.a.a7(0,a)}},
hr:{"^":"f:0;a",
$1:function(a){this.a.dP(a)}},
hp:{"^":"h;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
S:{"^":"de;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b2("No elements"))
if(y>1)throw H.a(P.b2("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gK:function(a){var z=this.a.childNodes
return new W.d6(z,z.length,-1,null,[H.b8(C.R,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asde:function(){return[W.t]},
$asj:function(){return[W.t]},
$asi:function(){return[W.t]},
$ase0:function(){return[W.t]}},
t:{"^":"B;al:parentNode=,aN:previousSibling=",
gea:function(a){return new W.S(a)},
ec:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cF(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m8:{"^":"h;",
eb:[function(a){return a.previousNode()},"$0","gaN",1,0,4],
"%":"NodeIterator"},
hs:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
mb:{"^":"v;D:height},I:name=,E:width}","%":"HTMLObjectElement"},
md:{"^":"v;I:name=","%":"HTMLOutputElement"},
me:{"^":"v;I:name=","%":"HTMLParamElement"},
b_:{"^":"h;i:length=","%":"Plugin"},
mg:{"^":"jb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b_]},
$isp:1,
$asp:function(){return[W.b_]},
$asj:function(){return[W.b_]},
$isi:1,
$asi:function(){return[W.b_]},
$asl:function(){return[W.b_]},
"%":"PluginArray"},
mj:{"^":"h;",
aT:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mp:{"^":"jh;",
h:function(a,b){return P.P(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gM:function(a){var z=H.z([],[P.k])
this.A(a,new W.hM(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"RTCStatsReport"},
hM:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mq:{"^":"v;i:length=,I:name=","%":"HTMLSelectElement"},
cd:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mr:{"^":"a7;N:error=","%":"SensorErrorEvent"},
ms:{"^":"v;I:name=","%":"HTMLSlotElement"},
mt:{"^":"e6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.br]},
$isp:1,
$asp:function(){return[W.br]},
$asj:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$asl:function(){return[W.br]},
"%":"SourceBufferList"},
mu:{"^":"jn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bs]},
$isp:1,
$asp:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$asl:function(){return[W.bs]},
"%":"SpeechGrammarList"},
mv:{"^":"a7;N:error=","%":"SpeechRecognitionError"},
b1:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
mx:{"^":"jq;",
h:function(a,b){return a.getItem(b)},
A:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gM:function(a){var z=H.z([],[P.k])
this.A(a,new W.hZ(z))
return z},
gi:function(a){return a.length},
$asO:function(){return[P.k,P.k]},
$isC:1,
$asC:function(){return[P.k,P.k]},
"%":"Storage"},
hZ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
i9:{"^":"v;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=W.fF("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.S(y).O(0,J.eR(z))
return y},
"%":"HTMLTableElement"},
mA:{"^":"v;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.T(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gW(z)
x.toString
z=new W.S(x)
w=z.gW(z)
y.toString
w.toString
new W.S(y).O(0,new W.S(w))
return y},
"%":"HTMLTableRowElement"},
mB:{"^":"v;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.T(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gW(z)
y.toString
x.toString
new W.S(y).O(0,new W.S(x))
return y},
"%":"HTMLTableSectionElement"},
dw:{"^":"v;",$isdw:1,"%":"HTMLTemplateElement"},
mC:{"^":"v;I:name=","%":"HTMLTextAreaElement"},
mE:{"^":"jB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bx]},
$isp:1,
$asp:function(){return[W.bx]},
$asj:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$asl:function(){return[W.bx]},
"%":"TextTrackCueList"},
mF:{"^":"ea;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$asj:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asl:function(){return[W.bw]},
"%":"TextTrackList"},
mG:{"^":"h;i:length=","%":"TimeRanges"},
mH:{"^":"jG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.by]},
$isp:1,
$asp:function(){return[W.by]},
$asj:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$asl:function(){return[W.by]},
"%":"TouchList"},
mI:{"^":"h;i:length=","%":"TrackDefaultList"},
mL:{"^":"h;",
ez:[function(a){return a.parentNode()},"$0","gal",1,0,4],
eb:[function(a){return a.previousNode()},"$0","gaN",1,0,4],
"%":"TreeWalker"},
dO:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mN:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mP:{"^":"h;l:x=,F:z=","%":"VRStageBoundsPoint"},
ch:{"^":"hd;D:height},E:width}",$isch:1,"%":"HTMLVideoElement"},
mQ:{"^":"B;i:length=","%":"VideoTrackList"},
aN:{"^":"K;",
gdV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
ii:{"^":"B;",
gdG:function(a){var z,y
z=P.aT
y=new P.D(0,$.q,null,[z])
this.di(a)
this.dr(a,W.eh(new W.ij(new P.jx(y,[z]))))
return y},
dr:function(a,b){return a.requestAnimationFrame(H.U(b,1))},
di:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ij:{"^":"f:0;a",
$1:function(a){this.a.a7(0,a)}},
mR:{"^":"B;"},
mV:{"^":"t;I:name=,bo:namespaceURI=","%":"Attr"},
mW:{"^":"jM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.W]},
$isp:1,
$asp:function(){return[W.W]},
$asj:function(){return[W.W]},
$isi:1,
$asi:function(){return[W.W]},
$asl:function(){return[W.W]},
"%":"CSSRuleList"},
mX:{"^":"fB;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isaa)return!1
return a.left===z.gc0(b)&&a.top===z.gc9(b)&&a.width===z.gE(b)&&a.height===z.gD(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e_(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gca:function(a){return new P.ah(a.left,a.top,[null])},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mY:{"^":"jO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bh]},
$isp:1,
$asp:function(){return[W.bh]},
$asj:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$asl:function(){return[W.bh]},
"%":"GamepadList"},
n0:{"^":"jQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n1:{"^":"jS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b1]},
$isp:1,
$asp:function(){return[W.b1]},
$asj:function(){return[W.b1]},
$isi:1,
$asi:function(){return[W.b1]},
$asl:function(){return[W.b1]},
"%":"SpeechRecognitionResultList"},
n2:{"^":"jU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asl:function(){return[W.bv]},
"%":"StyleSheetList"},
ir:{"^":"ca;dk:a<",
A:function(a,b){var z,y,x,w,v
for(z=this.gM(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.a3)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gM:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.z([],[P.k])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbo(v)==null)y.push(u.gI(v))}return y},
$asca:function(){return[P.k,P.k]},
$asO:function(){return[P.k,P.k]},
$asC:function(){return[P.k,P.k]}},
iA:{"^":"ir;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gM(this).length}},
b4:{"^":"bu;a,b,c,$ti",
aH:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.A(this,0))}},
ab:{"^":"b4;a,b,c,$ti"},
iC:{"^":"i_;a,b,c,d,e,$ti",
d5:function(a,b,c,d,e){this.dB()},
bJ:function(a){if(this.b==null)return
this.dC()
this.b=null
this.d=null
return},
dB:function(){var z=this.d
if(z!=null&&this.a<=0)J.eB(this.b,this.c,z,!1)},
dC:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eA(x,this.c,z,!1)}},
p:{
aj:function(a,b,c,d,e){var z=W.eh(new W.iD(c))
z=new W.iC(0,a,b,z,!1,[e])
z.d5(a,b,c,!1,e)
return z}}},
iD:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
ck:{"^":"c;cl:a<",
d6:function(a){var z,y
z=$.$get$cl()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.N[y],W.kn())
for(y=0;y<12;++y)z.j(0,C.p[y],W.ko())}},
a0:function(a){return $.$get$dY().w(0,W.aD(a))},
V:function(a,b,c){var z,y,x
z=W.aD(a)
y=$.$get$cl()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dX:function(a){var z,y
z=document.createElement("a")
y=new W.ji(z,window.location)
y=new W.ck(y)
y.d6(a)
return y},
mZ:[function(a,b,c,d){return!0},"$4","kn",16,0,9],
n_:[function(a,b,c,d){var z,y,x,w,v
z=d.gcl()
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
return z},"$4","ko",16,0,9]}},
l:{"^":"c;$ti",
gK:function(a){return new W.d6(a,this.gi(a),-1,null,[H.b8(this,a,"l",0)])}},
dk:{"^":"c;a",
a0:function(a){return C.c.bA(this.a,new W.hu(a))},
V:function(a,b,c){return C.c.bA(this.a,new W.ht(a,b,c))}},
hu:{"^":"f:0;a",
$1:function(a){return a.a0(this.a)}},
ht:{"^":"f:0;a,b,c",
$1:function(a){return a.V(this.a,this.b,this.c)}},
jj:{"^":"c;cl:d<",
d8:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.aS(0,new W.jk())
y=b.aS(0,new W.jl())
this.b.O(0,z)
x=this.c
x.O(0,C.w)
x.O(0,y)},
a0:function(a){return this.a.w(0,W.aD(a))},
V:["cI",function(a,b,c){var z,y
z=W.aD(a)
y=this.c
if(y.w(0,H.b(z)+"::"+b))return this.d.dF(c)
else if(y.w(0,"*::"+b))return this.d.dF(c)
else{y=this.b
if(y.w(0,H.b(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.b(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}]},
jk:{"^":"f:0;",
$1:function(a){return!C.c.w(C.p,a)}},
jl:{"^":"f:0;",
$1:function(a){return C.c.w(C.p,a)}},
jy:{"^":"jj;e,a,b,c,d",
V:function(a,b,c){if(this.cI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cC(a).a.getAttribute("template")==="")return this.e.w(0,b)
return!1},
p:{
e8:function(){var z=P.k
z=new W.jy(P.c9(C.o,z),P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),null)
z.d8(null,new H.hb(C.o,new W.jz(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jz:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jw:{"^":"c;",
a0:function(a){var z=J.o(a)
if(!!z.$isdp)return!1
z=!!z.$isy
if(z&&W.aD(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.cB(b,"on"))return!1
return this.a0(a)}},
d6:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ay(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
iu:{"^":"c;a",$isB:1,p:{
iv:function(a){if(a===window)return a
else return new W.iu(a)}}},
dj:{"^":"c;"},
m9:{"^":"c;"},
mM:{"^":"c;"},
ji:{"^":"c;a,b"},
eb:{"^":"c;a",
b0:function(a){new W.jJ(this).$2(a,null)},
a5:function(a,b){if(b==null)J.cH(a)
else b.removeChild(a)},
du:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cC(a)
x=y.gdk().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.G(t)}v="element unprintable"
try{v=J.aB(a)}catch(t){H.G(t)}try{u=W.aD(a)
this.dt(a,b,z,v,u,y,x)}catch(t){if(H.G(t) instanceof P.ae)throw t
else{this.a5(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dt:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a0(a)){this.a5(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a5(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gM(f)
y=H.z(z.slice(0),[H.A(z,0)])
for(x=f.gM(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.V(a,J.f7(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdw)this.b0(a.content)}},
jJ:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.du(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eS(z)}catch(w){H.G(w)
v=z
if(x){u=J.e(v)
if(u.gal(v)!=null){u.gal(v)
u.gal(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
it:{"^":"h+ft;"},
iw:{"^":"h+j;"},
ix:{"^":"iw+l;"},
iy:{"^":"h+j;"},
iz:{"^":"iy+l;"},
iF:{"^":"h+j;"},
iG:{"^":"iF+l;"},
iW:{"^":"h+j;"},
iX:{"^":"iW+l;"},
j2:{"^":"h+O;"},
j3:{"^":"h+O;"},
j4:{"^":"h+j;"},
j5:{"^":"j4+l;"},
j6:{"^":"h+j;"},
j7:{"^":"j6+l;"},
ja:{"^":"h+j;"},
jb:{"^":"ja+l;"},
jh:{"^":"h+O;"},
e5:{"^":"B+j;"},
e6:{"^":"e5+l;"},
jm:{"^":"h+j;"},
jn:{"^":"jm+l;"},
jq:{"^":"h+O;"},
jA:{"^":"h+j;"},
jB:{"^":"jA+l;"},
e9:{"^":"B+j;"},
ea:{"^":"e9+l;"},
jF:{"^":"h+j;"},
jG:{"^":"jF+l;"},
jL:{"^":"h+j;"},
jM:{"^":"jL+l;"},
jN:{"^":"h+j;"},
jO:{"^":"jN+l;"},
jP:{"^":"h+j;"},
jQ:{"^":"jP+l;"},
jR:{"^":"h+j;"},
jS:{"^":"jR+l;"},
jT:{"^":"h+j;"},
jU:{"^":"jT+l;"}}],["","",,P,{"^":"",
em:function(a){return a},
P:function(a){var z,y,x,w,v
if(a==null)return
z=P.X()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a3)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
ke:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cB(a,new P.kf(z))
return z},
d0:function(){var z=$.d_
if(z==null){z=J.bL(window.navigator.userAgent,"Opera",0)
$.d_=z}return z},
fy:function(){var z,y
z=$.cX
if(z!=null)return z
y=$.cY
if(y==null){y=J.bL(window.navigator.userAgent,"Firefox",0)
$.cY=y}if(y)z="-moz-"
else{y=$.cZ
if(y==null){y=P.d0()!==!0&&J.bL(window.navigator.userAgent,"Trident/",0)
$.cZ=y}if(y)z="-ms-"
else z=P.d0()===!0?"-o-":"-webkit-"}$.cX=z
return z},
jt:{"^":"c;",
bY:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
aR:function(a){var z,y,x,w,v,u
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.o(a)
if(!!y.$isbX)return new Date(a.a)
if(!!y.$isam)return a
if(!!y.$isbR)return a
if(!!y.$isd5)return a
if(!!y.$isbi)return a
if(!!y.$isdh||!!y.$iscc)return a
if(!!y.$isC){x=this.bY(a)
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
y.A(a,new P.jv(z,this))
return z.a}if(!!y.$isi){x=this.bY(a)
z=this.b
if(x>=z.length)return H.d(z,x)
u=z[x]
if(u!=null)return u
return this.dS(a,x)}throw H.a(P.cg("structured clone of other type"))},
dS:function(a,b){var z,y,x,w,v
z=J.a0(a)
y=z.gi(a)
x=new Array(y)
w=this.b
if(b>=w.length)return H.d(w,b)
w[b]=x
for(v=0;v<y;++v){w=this.aR(z.h(a,v))
if(v>=x.length)return H.d(x,v)
x[v]=w}return x}},
jv:{"^":"f:2;a,b",
$2:function(a,b){this.a.a[a]=this.b.aR(b)}},
kf:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
ju:{"^":"jt;a,b"}}],["","",,P,{"^":"",mo:{"^":"B;N:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mJ:{"^":"B;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ah:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
G:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ah))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gB:function(a){var z,y
z=J.a4(this.a)
y=J.a4(this.b)
return P.iY(P.dZ(P.dZ(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.ah(y,C.a.n(z,x),this.$ti)},
L:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gl(b)
if(typeof z!=="number")return z.L()
if(typeof x!=="number")return H.L(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.L()
if(typeof y!=="number")return H.L(y)
return new P.ah(z-x,w-y,this.$ti)}},
jc:{"^":"c;$ti"},
aa:{"^":"jc;$ti"}}],["","",,P,{"^":"",le:{"^":"y;l:x=,m:y=","%":"SVGFEBlendElement"},lf:{"^":"y;l:x=,m:y=","%":"SVGFEColorMatrixElement"},lg:{"^":"y;l:x=,m:y=","%":"SVGFEComponentTransferElement"},lh:{"^":"y;l:x=,m:y=","%":"SVGFECompositeElement"},li:{"^":"y;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},lj:{"^":"y;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},lk:{"^":"y;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},ll:{"^":"y;l:x=,m:y=","%":"SVGFEFloodElement"},lm:{"^":"y;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},ln:{"^":"y;l:x=,m:y=","%":"SVGFEImageElement"},lo:{"^":"y;l:x=,m:y=","%":"SVGFEMergeElement"},lp:{"^":"y;l:x=,m:y=","%":"SVGFEMorphologyElement"},lq:{"^":"y;l:x=,m:y=","%":"SVGFEOffsetElement"},lr:{"^":"y;l:x=,m:y=,F:z=","%":"SVGFEPointLightElement"},ls:{"^":"y;l:x=,m:y=","%":"SVGFESpecularLightingElement"},lt:{"^":"y;l:x=,m:y=,F:z=","%":"SVGFESpotLightElement"},lu:{"^":"y;l:x=,m:y=","%":"SVGFETileElement"},lv:{"^":"y;l:x=,m:y=","%":"SVGFETurbulenceElement"},lz:{"^":"y;l:x=,m:y=","%":"SVGFilterElement"},lC:{"^":"aE;l:x=,m:y=","%":"SVGForeignObjectElement"},fR:{"^":"aE;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aE:{"^":"y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lJ:{"^":"aE;l:x=,m:y=","%":"SVGImageElement"},lO:{"^":"j_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dd]},
$isi:1,
$asi:function(){return[P.dd]},
$asl:function(){return[P.dd]},
"%":"SVGLengthList"},lU:{"^":"y;l:x=,m:y=","%":"SVGMaskElement"},ma:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dm]},
$isi:1,
$asi:function(){return[P.dm]},
$asl:function(){return[P.dm]},
"%":"SVGNumberList"},mf:{"^":"y;l:x=,m:y=","%":"SVGPatternElement"},mh:{"^":"h;l:x=,m:y=","%":"SVGPoint"},mi:{"^":"h;i:length=","%":"SVGPointList"},mk:{"^":"h;l:x=,m:y=","%":"SVGRect"},ml:{"^":"fR;l:x=,m:y=","%":"SVGRectElement"},dp:{"^":"y;",$isdp:1,"%":"SVGScriptElement"},my:{"^":"js;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"SVGStringList"},y:{"^":"al;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.z([],[W.dj])
z.push(W.dX(null))
z.push(W.e8())
z.push(new W.jw())
c=new W.eb(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dT(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.S(w)
u=z.gW(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaJ:function(a){return new W.ab(a,"mousedown",!1,[W.K])},
gaK:function(a){return new W.ab(a,"mousemove",!1,[W.K])},
gaL:function(a){return new W.ab(a,"mouseup",!1,[W.K])},
gaM:function(a){return new W.ab(a,"mousewheel",!1,[W.aN])},
$isy:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mz:{"^":"aE;l:x=,m:y=","%":"SVGSVGElement"},ia:{"^":"aE;","%":"SVGTextPathElement;SVGTextContentElement"},mD:{"^":"ia;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mK:{"^":"jI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dB]},
$isi:1,
$asi:function(){return[P.dB]},
$asl:function(){return[P.dB]},
"%":"SVGTransformList"},mO:{"^":"aE;l:x=,m:y=","%":"SVGUseElement"},iZ:{"^":"h+j;"},j_:{"^":"iZ+l;"},j8:{"^":"h+j;"},j9:{"^":"j8+l;"},jr:{"^":"h+j;"},js:{"^":"jr+l;"},jH:{"^":"h+j;"},jI:{"^":"jH+l;"}}],["","",,P,{"^":"",kK:{"^":"h;i:length=","%":"AudioBuffer"},kL:{"^":"is;",
h:function(a,b){return P.P(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gM:function(a){var z=H.z([],[P.k])
this.A(a,new P.fi(z))
return z},
gi:function(a){return a.size},
$asO:function(){return[P.k,null]},
$isC:1,
$asC:function(){return[P.k,null]},
"%":"AudioParamMap"},fi:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},kM:{"^":"B;i:length=","%":"AudioTrackList"},fj:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mc:{"^":"fj;i:length=","%":"OfflineAudioContext"},is:{"^":"h+O;"}}],["","",,P,{"^":"",mm:{"^":"h;",
by:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bE:function(a,b,c){return a.bindTexture(b,c)},
bF:function(a,b){return a.blendEquation(b)},
bG:function(a,b,c){return a.blendFunc(b,c)},
bH:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bL:function(a,b){return a.compileShader(b)},
bM:function(a){return a.createBuffer()},
bN:function(a){return a.createProgram()},
bO:function(a,b){return a.createShader(b)},
bP:function(a){return a.createTexture()},
bR:function(a,b){return a.depthMask(b)},
bS:function(a,b){return a.disable(b)},
bT:function(a,b,c,d){return a.drawArrays(b,c,d)},
bU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bV:function(a,b){return a.enable(b)},
bW:function(a,b){return a.enableVertexAttribArray(b)},
ao:function(a){return P.P(a.getContextAttributes())},
aU:function(a){return a.getError()},
aV:function(a,b){return a.getProgramInfoLog(b)},
aW:function(a,b,c){return a.getProgramParameter(b,c)},
aX:function(a,b){return a.getShaderInfoLog(b)},
aY:function(a,b,c){return a.getShaderParameter(b,c)},
aZ:function(a,b,c){return a.getUniformLocation(b,c)},
c1:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aP:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isbi)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.em(g))
return}if(!!z.$isc3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbV)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isch)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc2)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cO("Incorrect number or type of arguments"))},
c6:function(a,b,c,d,e,f,g){return this.aP(a,b,c,d,e,f,g,null,null,null)},
c7:function(a,b,c,d){return a.texParameterf(b,c,d)},
c8:function(a,b,c,d){return a.texParameteri(b,c,d)},
cb:function(a,b,c){return a.uniform1f(b,c)},
cc:function(a,b,c){return a.uniform1fv(b,c)},
cd:function(a,b,c){return a.uniform1i(b,c)},
ce:function(a,b,c){return a.uniform1iv(b,c)},
cf:function(a,b,c){return a.uniform2fv(b,c)},
cg:function(a,b,c){return a.uniform3fv(b,c)},
ci:function(a,b,c){return a.uniform4fv(b,c)},
cj:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ck:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cm:function(a,b){return a.useProgram(b)},
cn:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cp:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mn:{"^":"h;",
dI:function(a,b){return a.beginTransformFeedback(b)},
dL:function(a,b){return a.bindVertexArray(b)},
dU:function(a){return a.createVertexArray()},
dW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dY:function(a){return a.endTransformFeedback()},
en:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eo:function(a,b,c){return a.vertexAttribDivisor(b,c)},
by:function(a,b){return a.activeTexture(b)},
bB:function(a,b,c){return a.attachShader(b,c)},
bC:function(a,b,c){return a.bindBuffer(b,c)},
bE:function(a,b,c){return a.bindTexture(b,c)},
bF:function(a,b){return a.blendEquation(b)},
bG:function(a,b,c){return a.blendFunc(b,c)},
bH:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bL:function(a,b){return a.compileShader(b)},
bM:function(a){return a.createBuffer()},
bN:function(a){return a.createProgram()},
bO:function(a,b){return a.createShader(b)},
bP:function(a){return a.createTexture()},
bR:function(a,b){return a.depthMask(b)},
bS:function(a,b){return a.disable(b)},
bT:function(a,b,c,d){return a.drawArrays(b,c,d)},
bU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bV:function(a,b){return a.enable(b)},
bW:function(a,b){return a.enableVertexAttribArray(b)},
ao:function(a){return P.P(a.getContextAttributes())},
aU:function(a){return a.getError()},
aV:function(a,b){return a.getProgramInfoLog(b)},
aW:function(a,b,c){return a.getProgramParameter(b,c)},
aX:function(a,b){return a.getShaderInfoLog(b)},
aY:function(a,b,c){return a.getShaderParameter(b,c)},
aZ:function(a,b,c){return a.getUniformLocation(b,c)},
c1:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aP:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isbi)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.em(g))
return}if(!!z.$isc3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbV)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isch)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc2)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cO("Incorrect number or type of arguments"))},
c6:function(a,b,c,d,e,f,g){return this.aP(a,b,c,d,e,f,g,null,null,null)},
c7:function(a,b,c,d){return a.texParameterf(b,c,d)},
c8:function(a,b,c,d){return a.texParameteri(b,c,d)},
cb:function(a,b,c){return a.uniform1f(b,c)},
cc:function(a,b,c){return a.uniform1fv(b,c)},
cd:function(a,b,c){return a.uniform1i(b,c)},
ce:function(a,b,c){return a.uniform1iv(b,c)},
cf:function(a,b,c){return a.uniform2fv(b,c)},
cg:function(a,b,c){return a.uniform3fv(b,c)},
ci:function(a,b,c){return a.uniform4fv(b,c)},
cj:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ck:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cm:function(a,b){return a.useProgram(b)},
cn:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cp:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mw:{"^":"jp;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return P.P(a.item(b))},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$asl:function(){return[P.C]},
"%":"SQLResultSetRowList"},jo:{"^":"h+j;"},jp:{"^":"jo+l;"}}],["","",,G,{"^":"",
ik:function(a){var z,y,x,w
z=H.z(a.split("\n"),[P.k])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a9(z,"\n")},
dT:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bO(a,b)
z.b1(a,y,c)
z.bL(a,y)
x=z.aY(a,y,35713)
if(x!=null&&J.I(x,!1)){w=z.aX(a,y)
P.a2("E:Compilation failed:")
P.a2("E:"+G.ik(c))
P.a2("E:Failure:")
P.a2(C.i.n("E:",w))
throw H.a(w)}return y},
d7:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bO(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bP(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cF(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fK:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bO(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bP(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fL:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bO(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bP(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cF(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.eV(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fJ:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.ay(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.ay(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.ay(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.ay(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.af(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.E]],v=[P.aR],u=[T.ai],t=[T.m],s=[T.u];y.t();){r=y.d
if(!x.ai(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eo>0)H.bJ("I: "+q)
continue}p=z.h(0,r)
switch($.$get$T().h(0,r).a){case"vec2":b.a2(r,G.fK(H.b9(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a2(r,G.d7(H.b9(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a2(r,G.fL(H.b9(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a2(r,new Float32Array(H.bB(H.b9(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a2(r,G.fJ(H.b9(p,"$isi",w,"$asi"),null),4)
break}}},
bo:{"^":"c;"},
dP:{"^":"bo;",
ba:function(){return this.d},
k:function(a){var z,y,x,w
z=H.z(["{"+H.b(new H.dN(H.kk(this),null))+"}["+this.a+"]"],[P.k])
for(y=this.d,x=new H.af(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a9(z,"\n")}},
fk:{"^":"hV;"},
fm:{"^":"c;a,b",
bX:function(a,b,c){J.eP(this.a,b)
if(c>0)J.fd(this.a,b,c)},
co:function(a,b,c,d,e,f,g,h){J.bK(this.a,34962,b)
J.fe(this.a,c,d,e,!1,g,h)}},
fI:{"^":"c;a,b,c,d"},
fQ:{"^":"c;a,b,c,d,e",
b8:function(a){switch($.$get$T().h(0,a).a){case"vec2":this.e.j(0,a,H.z([],[T.u]))
break
case"vec3":this.e.j(0,a,H.z([],[T.m]))
break
case"vec4":this.e.j(0,a,H.z([],[T.ai]))
break
case"float":this.e.j(0,a,H.z([],[P.aR]))
break
case"uvec4":this.e.j(0,a,H.z([],[[P.i,P.E]]))
break}},
cN:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.fI(z,z+1,z+2,z+3))},
cO:function(a){var z,y
for(z=this.d,y=0;y<24;++y)z.push(a[y].ah(0))},
cL:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<24;++y)z.push(b[y].ah(0))},
cM:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ah(0))},
cS:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.z(y,[P.E])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.geu(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.gev(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.gew(t)
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
for(y=this.e,x=new H.af(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$T().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a9(z," ")}},
dA:{"^":"c;a,b,c"},
dz:{"^":"c;a,b,c"},
hc:{"^":"dP;d,a,b,c"},
he:{"^":"bo;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b7:function(a,b,c){var z,y
C.i.bk(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bK(z.a,34962,y)
J.cy(z.a,34962,b,35048)},
cT:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a2:function(a,b,c){var z,y,x,w,v
z=J.cz(a,0)===105
if(z&&this.z===0)this.z=C.b.cJ(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bM(x.a))
this.b7(a,b,c)
w=$.$get$T().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.ba(x.a,this.e)
x.bX(0,v,z?1:0)
x.co(0,y.h(0,a),v,w.b9(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.af(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a9(y,"  ")}},
hx:{"^":"dP;",
cP:function(a,b){var z
if(typeof a!=="number")return a.eq()
if(typeof b!=="number")return H.L(b)
z=a/b
if(this.z===z)return
this.z=z
this.bd()},
bd:function(){var z,y,x,w,v,u
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
ba:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.m(new Float32Array(3))
u.u(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.H(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.o(t)
x=!!y.$isai
q=x?y.gan(t):1
if(!!y.$ism){p=y.gl(t)
s=y.gm(t)
r=y.gF(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gF(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.L(t)
x=z[4]
if(typeof s!=="number")return H.L(s)
w=z[8]
if(typeof r!=="number")return H.L(r)
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
c.H(this.db)
c.e9(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hK:{"^":"bo;d,e,f,r,x,y,z,Q,ch,a,b,c",
cX:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){t=z[u]
x.j(0,t,J.cG(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){t=z[u]
x.j(0,t,J.cG(w.a,v,t))}},
d0:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.af(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ai(0,v))x.push(v)}for(z=this.x,y=new P.cm(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.w(0,v))x.push(v)}return x},
d3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.af(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cz(t,0)){case 117:if(w.ai(0,t)){s=b.h(0,t)
if(v.ai(0,t))H.bJ("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$T().h(0,t)
if(r==null)H.Q("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bQ(x.a,q,s)
else if(!!J.o(s).$isfU)J.fb(x.a,q,s)
break
case"float":if(r.c===0)J.f9(x.a,q,s)
else if(!!J.o(s).$isc0)J.fa(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ad(s,"$isa9").a
J.cN(x.a,q,!1,p)}else if(!!J.o(s).$isc0)J.cN(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.F.ger(H.ad(s,"$islV"))
J.cM(x.a,q,!1,p)}else if(!!J.o(s).$isc0)J.cM(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cL(o,q,H.ad(s,"$isai").a)
else J.cL(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cK(o,q,H.ad(s,"$ism").a)
else J.cK(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cJ(o,q,H.ad(s,"$isu").a)
else J.cJ(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.L(p)
J.cw(x.a,33984+p)
p=H.ad(s,"$iscf").b
J.az(x.a,3553,p)
p=this.ch
J.bQ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.L(p)
J.cw(x.a,33984+p)
p=H.ad(s,"$iscf").b
J.az(x.a,34067,p)
p=this.ch
J.bQ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bJ("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.I(s,!0)
o=x.a
if(p)J.bb(o,2929)
else J.bN(o,2929)
break
case"cStencilFunc":H.ad(s,"$isdA")
p=s.a
o=x.a
if(p===1281)J.bN(o,2960)
else{J.bb(o,2960)
o=s.b
n=s.c
J.f4(x.a,p,o,n)}break
case"cDepthWrite":J.eK(x.a,s)
break
case"cBlendEquation":H.ad(s,"$isdz")
p=s.a
o=x.a
if(p===1281)J.bN(o,3042)
else{J.bb(o,3042)
o=s.b
n=s.c
J.eE(x.a,o,n)
J.eD(x.a,p)}break}++u
break}}m=P.fC(0,0,0,Date.now()-new P.bX(z,!1).a,0,0)
""+u
m.k(0)},
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fc(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bf()}for(x=0;x<2;++x){w=b[x]
this.d3(w.a,w.ba())}y=this.Q
y.a6(0)
for(v=a.cy,u=new H.af(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.R(0,u.d)
t=this.d0()
if(t.length!==0)P.a2("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.ba(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cT()
u=a.Q
r=a.z
if(s)J.eC(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eO(q,y,v,u,0,r)
else J.eN(q,y,v,u,0)}else{u=z.a
if(r>1)J.eM(u,y,0,v,r)
else J.eL(u,y,0,v)}if(s)J.eQ(z.a)},
cQ:function(a,b){return this.cR(a,b,null)},
p:{
hL:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.R(null,null,null,P.k)
y=c.b
x=d.b
w=c.f
v=J.eH(b.a)
u=G.dT(b.a,35633,y)
J.cx(b.a,v,u)
t=G.dT(b.a,35632,x)
J.cx(b.a,v,t)
if(w.length>0)J.f8(b.a,v,w,35980)
J.f1(b.a,v)
if(J.f0(b.a,v,35714)!==!0)H.Q(J.f_(b.a,v))
z=new G.hK(b,c,d,v,P.c9(c.c,null),P.X(),P.X(),z,null,a,!1,!0)
z.cX(a,b,c,d)
return z}}},
w:{"^":"c;a,b,c",
b9:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hR:{"^":"c;a,b,c,d,e,f,r,x",
cK:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.ap(z)},
b5:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.c.ap(z)},
b6:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.ap(z)},
cY:function(a,b){this.b=this.d4(!0,a,b)},
bb:function(a){return this.cY(a,null)},
d4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){t=z[u]
s=$.$get$T().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.O(w,b)
w.push("}")
return C.c.a9(w,"\n")},
p:{
dq:function(a){return new G.hR(a,null,[],[],[],[],0,P.X())}}},
hV:{"^":"bo;"},
dx:{"^":"c;a,b,c,d,e,f,r",
cU:function(a,b){var z=this.e
if(z!==1)J.f6(a.a,b,34046,z)
J.bc(a.a,b,10240,this.r)
J.bc(a.a,b,10241,this.f)
if(this.b){J.bc(a.a,b,10242,33071)
J.bc(a.a,b,10243,33071)}},
p:{
ib:function(){return new G.dx(!1,!1,!1,!0,1,9729,9729)}}},
cf:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fS:{"^":"cf;f,a,b,c,d,e",
bc:function(a){var z,y
z=this.d
y=this.c
J.az(z.a,y,this.b)
J.f5(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",hy:{"^":"hx;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ee:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sE(z,y)
w.sD(z,x)
P.a2("size change "+H.b(y)+" "+H.b(x))
this.cP(y,x)
J.ff(this.go.a,0,0,y,x)},"$1","ged",4,0,17]},hX:{"^":"c;",
cZ:function(a,b,c){var z,y,x
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
x=this.d7(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d7:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iB("span",null)
y=J.cD(v)
J.e(y).sE(y,"1px")
C.n.sD(y,""+d+"px")
C.n.se_(y,"left")
x=C.n.bj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hY:{"^":"hX;e,f,a,b,c,d",
d2:function(a,b){var z,y,x,w,v;++this.e
if(J.aV(J.ez(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.em(z,2)+" fps"
y=this.c;(y&&C.D).cv(y,b)
x=C.b.a_(30*C.t.dM(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cD(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d1:function(a){return this.d2(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
fu:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.m(new Float32Array(3))
x.u(z,y,d2)
w=new T.m(new Float32Array(3))
w.u(d0,y,d2)
v=new T.m(new Float32Array(3))
v.u(d0,d1,d2)
u=new T.m(new Float32Array(3))
u.u(z,d1,d2)
t=-d2
s=new T.m(new Float32Array(3))
s.u(z,y,t)
r=new T.m(new Float32Array(3))
r.u(z,d1,t)
q=new T.m(new Float32Array(3))
q.u(d0,d1,t)
p=new T.m(new Float32Array(3))
p.u(d0,y,t)
o=new T.m(new Float32Array(3))
o.u(z,d1,t)
n=new T.m(new Float32Array(3))
n.u(z,d1,d2)
m=new T.m(new Float32Array(3))
m.u(d0,d1,d2)
l=new T.m(new Float32Array(3))
l.u(d0,d1,t)
k=new T.m(new Float32Array(3))
k.u(d0,y,d2)
j=new T.m(new Float32Array(3))
j.u(z,y,d2)
i=new T.m(new Float32Array(3))
i.u(z,y,t)
h=new T.m(new Float32Array(3))
h.u(d0,y,t)
g=new T.m(new Float32Array(3))
g.u(d0,y,t)
f=new T.m(new Float32Array(3))
f.u(d0,d1,t)
e=new T.m(new Float32Array(3))
e.u(d0,d1,d2)
d=new T.m(new Float32Array(3))
d.u(d0,y,d2)
c=new T.m(new Float32Array(3))
c.u(z,y,t)
b=new T.m(new Float32Array(3))
b.u(z,y,d2)
y=new T.m(new Float32Array(3))
y.u(z,d1,d2)
a=new T.m(new Float32Array(3))
a.u(z,d1,t)
z=new T.u(new Float32Array(2))
z.v(c7,c9)
t=new T.u(new Float32Array(2))
t.v(c6,c9)
a0=new T.u(new Float32Array(2))
a0.v(c6,c8)
a1=new T.u(new Float32Array(2))
a1.v(c7,c8)
a2=new T.u(new Float32Array(2))
a2.v(c6,c9)
a3=new T.u(new Float32Array(2))
a3.v(c6,c8)
a4=new T.u(new Float32Array(2))
a4.v(c7,c8)
a5=new T.u(new Float32Array(2))
a5.v(c7,c9)
a6=new T.u(new Float32Array(2))
a6.v(c7,c8)
a7=new T.u(new Float32Array(2))
a7.v(c7,c9)
a8=new T.u(new Float32Array(2))
a8.v(c6,c9)
a9=new T.u(new Float32Array(2))
a9.v(c6,c8)
b0=new T.u(new Float32Array(2))
b0.v(c6,c8)
b1=new T.u(new Float32Array(2))
b1.v(c7,c8)
b2=new T.u(new Float32Array(2))
b2.v(c7,c9)
b3=new T.u(new Float32Array(2))
b3.v(c6,c9)
b4=new T.u(new Float32Array(2))
b4.v(c6,c9)
b5=new T.u(new Float32Array(2))
b5.v(c6,c8)
b6=new T.u(new Float32Array(2))
b6.v(c7,c8)
b7=new T.u(new Float32Array(2))
b7.v(c7,c9)
b8=new T.u(new Float32Array(2))
b8.v(c7,c9)
b9=new T.u(new Float32Array(2))
b9.v(c6,c9)
c0=new T.u(new Float32Array(2))
c0.v(c6,c8)
c1=new T.u(new Float32Array(2))
c1.v(c7,c8)
c2=new G.fQ(!1,[],[],[],P.X())
c2.b8("aTexUV")
c2.b8("aNormal")
c2.cN(6)
c2.cO([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.cL("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dV(),c3<6;++c3){c4=z[c3]
c2.cM("aNormal",[c4,c4,c4,c4])}return c2}}],["","",,D,{"^":"",
h6:function(){var z,y,x,w,v,u
z=new P.D(0,$.q,null,[null])
y=new P.dS(z,[null])
x=window.navigator
x=(x&&C.Q).ct(x,!0).aa(new D.h8(y))
w=new D.h9(y)
v=H.A(x,0)
u=$.q
if(u!==C.d)w=P.ed(w,u)
x.af(new P.cj(null,new P.D(0,u,null,[v]),2,null,w,[v,v]))
return z},
h0:{"^":"c;a,b,c",
cV:function(a){var z
a=document
z=W.bk
W.aj(a,"keydown",new D.h2(this),!1,z)
W.aj(a,"keyup",new D.h3(this),!1,z)},
p:{
h1:function(a){var z=P.E
z=new D.h0(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z))
z.cV(a)
return z}}},
h2:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.R(0,J.cE(a))
z.b.R(0,a.which)}},
h3:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.c4(0,J.cE(a))
z.c.R(0,a.which)}},
hh:{"^":"c;a,b,c,d,e,f,r,x",
cW:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaK(a)
W.aj(y.a,y.b,new D.hj(this),!1,H.A(y,0))
y=z.gaJ(a)
W.aj(y.a,y.b,new D.hk(this),!1,H.A(y,0))
y=z.gaL(a)
W.aj(y.a,y.b,new D.hl(this),!1,H.A(y,0))
z=z.gaM(a)
W.aj(z.a,z.b,new D.hm(this),!1,H.A(z,0))},
p:{
hi:function(a){var z=P.E
z=new D.hh(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),0,0,0,0,0)
z.cW(a)
return z}}},
hj:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.am(a)
y=this.a
y.r=z.gc2(a).a
y.x=z.gc2(a).b
y.d=a.movementX
y.e=a.movementY}},
hk:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.am(a)
P.a2("BUTTON "+H.b(z.gbI(a)))
z=this.a
z.a.R(0,a.button)
z.b.R(0,a.button)}},
hl:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.am(a)
y=this.a
y.a.c4(0,z.gbI(a))
y.c.R(0,a.button)}},
hm:{"^":"f:18;a",
$1:function(a){var z=J.e(a)
z.am(a)
this.a.f=z.gdV(a)}},
hw:{"^":"fk;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"},
h8:{"^":"f:19;a",
$1:function(a){var z,y
z=document.createElement("video")
z.autoplay=!0
y=new W.ab(z,"playing",!1,[W.a7])
y.gdZ(y).aa(new D.h7(this.a,z))
z.srcObject=a}},
h7:{"^":"f:0;a,b",
$1:function(a){return this.a.a7(0,this.b)}},
h9:{"^":"f:20;a",
$1:function(a){P.a2("E:"+("Camera open error "+H.b(a)))
this.a.a7(0,null)}}}],["","",,A,{"^":"",
bF:function(a){var z,y
z=C.P.e0(a,0,new A.km())
if(typeof z!=="number")return H.L(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
km:{"^":"f:21;",
$2:function(a,b){var z,y
z=J.ax(a,J.a4(b))
if(typeof z!=="number")return H.L(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a9:{"^":"c;bn:a<",
H:function(a){var z,y
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
k:function(a){return"[0] "+this.ab(0).k(0)+"\n[1] "+this.ab(1).k(0)+"\n[2] "+this.ab(2).k(0)+"\n[3] "+this.ab(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a9){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
ab:function(a){var z,y,x
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
return new T.ai(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a9(z)
y.H(this)
x=b.gbn()
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
L:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a9(z)
y.H(this)
x=b.gbn()
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
ad:function(){var z=this.a
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
e9:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},u:{"^":"c;bv:a<",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
H:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.u){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
L:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.u(z)
y.H(this)
x=b.gbv()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.u(z)
y.H(this)
x=b.gbv()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ah:function(a){var z=new T.u(new Float32Array(2))
z.H(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},m:{"^":"c;bw:a<",
u:function(a,b,c){var z=this.a
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
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
L:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.H(this)
x=b.gbw()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.H(this)
x=b.gbw()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aI:function(a){var z,y,x,w,v,u
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
aF:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bQ:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.m(new Float32Array(3))
z.u(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ah:function(a){var z=new T.m(new Float32Array(3))
z.H(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
p:{
ao:function(a,b,c){var z=new T.m(new Float32Array(3))
z.u(a,b,c)
return z}}},ai:{"^":"c;bx:a<",
H:function(a){var z,y
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
if(b instanceof T.ai){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
L:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ai(z)
y.H(this)
x=b.gbx()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ai(z)
y.H(this)
x=b.gbx()
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
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gan:function(a){return this.a[3]}}}],["","",,U,{"^":"",
et:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=document
x=new R.hY(0,0,null,null,null,null)
x.cZ(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fm(null,w)
y=J.eX(w,"webgl2",P.c8(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.Q(P.d4('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.eY(y))
if($.eo>0)P.a2("I: "+u)
J.eF(y,0,0,0,1)
J.bb(y,2929)
y=new Float32Array(3)
u=D.h1(null)
t=D.hi(w)
s=new T.a9(new Float32Array(16))
s.ad()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hw(15,10,0,0,new T.m(y),-0.02,u,t,s,new T.m(r),new T.m(q),new T.m(p),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.a9(new Float32Array(16))
y.ad()
u=new T.a9(new Float32Array(16))
u.ad()
n=new R.hy(w,v,o,50,1,0.1,1000,y,u,new T.a9(new Float32Array(16)),P.X(),"perspective",!1,!0)
n.bd()
n.ee(null)
W.aj(window,"resize",n.ged(),!1,W.a7)
m=G.hL("solid",v,$.$get$ex(),$.$get$ew())
y=P.X()
l=new G.hc(y,"cube",!1,!0)
y.j(0,"cDepthTest",!0)
y.j(0,"cDepthWrite",!0)
y.j(0,"cBlendEquation",$.$get$cP())
y.j(0,"cStencilFunc",$.$get$ds())
y.j(0,"uColor",$.$get$cU())
u=new T.a9(new Float32Array(16))
u.ad()
y.j(0,"uModelMatrix",u)
k=B.fu(!0,1,0,1,0,1,1,1)
y=m.d
u=m.e.x
t=P.X()
s=J.eJ(y.a)
j=new G.he(y,s,4,t,u,null,0,-1,null,null,P.X(),"meshdata:cube",!1,!0)
r=G.d7(k.d,null)
t.j(0,"aPosition",J.bM(y.a))
j.ch=r
j.b7("aPosition",r,3)
i=$.$get$T().h(0,"aPosition")
if(i==null)H.Q("Unknown canonical aPosition")
h=u.h(0,"aPosition")
J.ba(y.a,s)
y.bX(0,h,0)
y.co(0,t.h(0,"aPosition"),h,i.b9(),5126,!1,0,0)
u=k.cS()
j.y=J.bM(y.a)
t=j.ch.length
if(t<768){j.cx=new Uint8Array(H.bB(u))
j.Q=5121}else if(t<196608){j.cx=new Uint16Array(H.bB(u))
j.Q=5123}else{j.cx=new Uint32Array(H.bB(u))
j.Q=5125}J.ba(y.a,s)
u=j.y
t=j.cx
J.bK(y.a,34963,u)
J.cy(y.a,34963,t,35048)
G.iU(k,j)
z.a=null
z.b=null
z.c=0
P.fN([D.h6()],null,!1).aa(new U.kz(z,v,l,new U.ky(z,o,m,j,n,l,x)))},
ky:{"^":"f:22;a,b,c,d,e,f,r",
$1:function(b4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
y=this.a
x=J.aS(b4)
x.L(b4,y.c)
y.c=x.n(b4,0)
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.b_()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.b_()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.w(0,37))x.go+=0.03
else if(u.w(0,39))x.go-=0.03
if(u.w(0,38))x.id+=0.03
else if(u.w(0,40))x.id-=0.03
if(u.w(0,33))x.fy*=0.99
else if(u.w(0,34))x.fy*=1.01
if(u.w(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.b_()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.dN(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
q=Math.cos(s)
u=Math.sin(u)
s=Math.sin(s)
p=x.d.a
p[12]=r*q
p[13]=t*u
p[14]=r*s
s=x.k2
u=s.a
p[12]=p[12]+u[0]
p[13]=p[13]+u[1]
p[14]=p[14]+u[2]
o=p[12]
n=p[13]
m=p[14]
l=new T.m(new Float32Array(3))
l.u(0,1,0)
u=x.e
t=u.a
t[0]=p[12]
t[1]=p[13]
t[2]=p[14]
k=u.L(0,s)
k.aI(0)
j=l.bQ(k)
j.aI(0)
i=k.bQ(j)
i.aI(0)
s=j.aF(u)
t=i.aF(u)
u=k.aF(u)
q=j.a
h=q[0]
g=i.a
f=g[0]
e=k.a
d=e[0]
c=q[1]
b=g[1]
a=e[1]
q=q[2]
g=g[2]
e=e[2]
p[15]=1
p[14]=-u
p[13]=-t
p[12]=-s
p[11]=0
p[10]=e
p[9]=g
p[8]=q
p[7]=0
p[6]=a
p[5]=b
p[4]=c
p[3]=0
p[2]=d
p[1]=f
p[0]=h
p[12]=o
p[13]=n
p[14]=m
h=x.f.a
h[0]=p[2]
h[1]=p[6]
h[2]=p[10]
x=-x.k1
f=h[0]
d=h[1]
c=h[2]
a0=Math.sqrt(f*f+d*d+c*c)
o=h[0]/a0
n=h[1]/a0
m=h[2]/a0
a1=Math.cos(x)
a2=Math.sin(x)
a3=1-a1
a4=o*o*a3+a1
x=m*a2
a5=o*n*a3-x
h=n*a2
a6=o*m*a3+h
a7=n*o*a3+x
a8=n*n*a3+a1
x=o*a2
a9=n*m*a3-x
b0=m*o*a3-h
b1=m*n*a3+x
b2=m*m*a3+a1
x=p[0]
h=p[4]
c=p[8]
d=p[1]
f=p[5]
b=p[9]
a=p[2]
q=p[6]
g=p[10]
e=p[3]
s=p[7]
t=p[11]
p[0]=x*a4+h*a7+c*b0
p[1]=d*a4+f*a7+b*b0
p[2]=a*a4+q*a7+g*b0
p[3]=e*a4+s*a7+t*b0
p[4]=x*a5+h*a8+c*b1
p[5]=d*a5+f*a8+b*b1
p[6]=a*a5+q*a8+g*b1
p[7]=e*a5+s*a8+t*b1
p[8]=x*a6+h*a9+c*b2
p[9]=d*a6+f*a9+b*b2
p[10]=a*a6+q*a9+g*b2
p[11]=e*a6+s*a9+t*b2
v.c.a6(0)
v.b.a6(0)
w.e=0
w.d=0
w.f=0
w.c.a6(0)
w.b.a6(0)
try{x=y.b
x.bc(x.f)
w=x.d
x=x.c
J.az(w.a,x,null)}catch(b3){z=H.G(b3)
P.a2(z)}this.c.cQ(this.d,[this.e,this.f])
this.r.d1(y.c)
C.a7.gdG(window).aa(this)}},
kz:{"^":"f:23;a,b,c,d",
$1:function(a){var z,y,x,w,v,u,t
z=J.ay(a,0)
y=this.a
y.a=z
if(z==null)window.alert("Could not access camera - do you have a camera installed?")
x=this.b
w=y.a
v=$.$get$dy()
if(v==null)v=new G.dx(!1,!1,!1,!0,1,9729,9729)
u=J.eI(x.a)
t=new G.fS(w,"video",u,3553,x,v)
J.az(x.a,3553,u)
J.f2(x.a,37440,1)
t.bc(w)
v.cU(x,3553)
J.eZ(x.a)
J.az(x.a,3553,null)
y.b=t
this.c.d.j(0,"uTexture",t)
this.d.$1(0)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fZ.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.ki=function(a){if(typeof a=="number")return J.aH.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.a0=function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.bE=function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.aS=function(a){if(typeof a=="number")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.kj=function(a){if(typeof a=="number")return J.aH.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.ep=function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.c)return a
return J.b6(a)}
J.ax=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ki(a).n(a,b)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).G(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aS(a).ac(a,b)}
J.aV=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aS(a).a1(a,b)}
J.ez=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aS(a).L(a,b)}
J.ay=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)}
J.eA=function(a,b,c,d){return J.e(a).dq(a,b,c,d)}
J.cw=function(a,b){return J.e(a).by(a,b)}
J.eB=function(a,b,c,d){return J.e(a).bz(a,b,c,d)}
J.cx=function(a,b,c){return J.e(a).bB(a,b,c)}
J.eC=function(a,b){return J.e(a).dI(a,b)}
J.bK=function(a,b,c){return J.e(a).bC(a,b,c)}
J.az=function(a,b,c){return J.e(a).bE(a,b,c)}
J.ba=function(a,b){return J.e(a).dL(a,b)}
J.eD=function(a,b){return J.e(a).bF(a,b)}
J.eE=function(a,b,c){return J.e(a).bG(a,b,c)}
J.cy=function(a,b,c,d){return J.e(a).bH(a,b,c,d)}
J.eF=function(a,b,c,d,e){return J.e(a).bK(a,b,c,d,e)}
J.cz=function(a,b){return J.ep(a).dO(a,b)}
J.eG=function(a,b){return J.kj(a).S(a,b)}
J.bL=function(a,b,c){return J.a0(a).dR(a,b,c)}
J.bM=function(a){return J.e(a).bM(a)}
J.eH=function(a){return J.e(a).bN(a)}
J.eI=function(a){return J.e(a).bP(a)}
J.eJ=function(a){return J.e(a).dU(a)}
J.eK=function(a,b){return J.e(a).bR(a,b)}
J.bN=function(a,b){return J.e(a).bS(a,b)}
J.eL=function(a,b,c,d){return J.e(a).bT(a,b,c,d)}
J.eM=function(a,b,c,d,e){return J.e(a).dW(a,b,c,d,e)}
J.eN=function(a,b,c,d,e){return J.e(a).bU(a,b,c,d,e)}
J.eO=function(a,b,c,d,e,f){return J.e(a).dX(a,b,c,d,e,f)}
J.cA=function(a,b){return J.bE(a).q(a,b)}
J.bb=function(a,b){return J.e(a).bV(a,b)}
J.eP=function(a,b){return J.e(a).bW(a,b)}
J.eQ=function(a){return J.e(a).dY(a)}
J.cB=function(a,b){return J.bE(a).A(a,b)}
J.cC=function(a){return J.e(a).gdH(a)}
J.aA=function(a){return J.e(a).gN(a)}
J.a4=function(a){return J.o(a).gB(a)}
J.aW=function(a){return J.bE(a).gK(a)}
J.a5=function(a){return J.a0(a).gi(a)}
J.eR=function(a){return J.e(a).gea(a)}
J.eS=function(a){return J.e(a).gaN(a)}
J.cD=function(a){return J.e(a).gU(a)}
J.eT=function(a){return J.e(a).gei(a)}
J.eU=function(a){return J.e(a).gca(a)}
J.eV=function(a){return J.e(a).gan(a)}
J.cE=function(a){return J.e(a).gep(a)}
J.bO=function(a){return J.e(a).gl(a)}
J.bP=function(a){return J.e(a).gm(a)}
J.cF=function(a){return J.e(a).gF(a)}
J.eW=function(a){return J.e(a).aT(a)}
J.eX=function(a,b,c){return J.e(a).cs(a,b,c)}
J.eY=function(a){return J.e(a).ao(a)}
J.eZ=function(a){return J.e(a).aU(a)}
J.f_=function(a,b){return J.e(a).aV(a,b)}
J.f0=function(a,b,c){return J.e(a).aW(a,b,c)}
J.cG=function(a,b,c){return J.e(a).aZ(a,b,c)}
J.f1=function(a,b){return J.e(a).c1(a,b)}
J.f2=function(a,b,c){return J.e(a).c3(a,b,c)}
J.cH=function(a){return J.bE(a).ec(a)}
J.f3=function(a,b){return J.e(a).saj(a,b)}
J.f4=function(a,b,c,d){return J.e(a).b3(a,b,c,d)}
J.f5=function(a,b,c,d,e,f,g){return J.e(a).c6(a,b,c,d,e,f,g)}
J.f6=function(a,b,c,d){return J.e(a).c7(a,b,c,d)}
J.bc=function(a,b,c,d){return J.e(a).c8(a,b,c,d)}
J.cI=function(a){return J.aS(a).ej(a)}
J.f7=function(a){return J.ep(a).el(a)}
J.aB=function(a){return J.o(a).k(a)}
J.f8=function(a,b,c,d){return J.e(a).en(a,b,c,d)}
J.f9=function(a,b,c){return J.e(a).cb(a,b,c)}
J.fa=function(a,b,c){return J.e(a).cc(a,b,c)}
J.bQ=function(a,b,c){return J.e(a).cd(a,b,c)}
J.fb=function(a,b,c){return J.e(a).ce(a,b,c)}
J.cJ=function(a,b,c){return J.e(a).cf(a,b,c)}
J.cK=function(a,b,c){return J.e(a).cg(a,b,c)}
J.cL=function(a,b,c){return J.e(a).ci(a,b,c)}
J.cM=function(a,b,c,d){return J.e(a).cj(a,b,c,d)}
J.cN=function(a,b,c,d){return J.e(a).ck(a,b,c,d)}
J.fc=function(a,b){return J.e(a).cm(a,b)}
J.fd=function(a,b,c){return J.e(a).eo(a,b,c)}
J.fe=function(a,b,c,d,e,f,g){return J.e(a).cn(a,b,c,d,e,f,g)}
J.ff=function(a,b,c,d,e){return J.e(a).cp(a,b,c,d,e)}
I.av=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bS.prototype
C.n=W.fs.prototype
C.D=W.fz.prototype
C.E=J.h.prototype
C.c=J.aF.prototype
C.t=J.d9.prototype
C.b=J.da.prototype
C.F=J.db.prototype
C.a=J.aH.prototype
C.i=J.aI.prototype
C.M=J.aJ.prototype
C.P=H.hn.prototype
C.Q=W.ho.prototype
C.R=W.hs.prototype
C.x=J.hz.prototype
C.C=W.i9.prototype
C.q=J.b3.prototype
C.a7=W.ii.prototype
C.d=new P.jd()
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
C.u=function(hooks) { return hooks; }

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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.z(I.av(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.O=I.av(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.av([])
C.o=H.z(I.av(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.z(I.av(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.S=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.T=new G.w("vec4","delta from light",0)
C.m=new G.w("","",0)
C.y=new G.w("vec3","vertex coordinates",0)
C.U=new G.w("vec3","vertex binormals",0)
C.z=new G.w("vec4","for wireframe",0)
C.V=new G.w("vec4","per vertex color",0)
C.W=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.Y=new G.w("mat4","",4)
C.X=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.Z=new G.w("float","",4)
C.a_=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a0=new G.w("float","for bump maps",0)
C.a1=new G.w("vec2","texture uvs",0)
C.a2=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.a3=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.a4=new G.w("vec3","vertex normals",0)
C.a5=new G.w("sampler2DShadow","",0)
C.A=new G.w("vec3","per vertex color",0)
C.B=new G.w("mat3","",0)
C.a6=new G.w("vec3","vertex tangents",0)
$.V=0
$.aC=null
$.cQ=null
$.er=null
$.ei=null
$.ev=null
$.bD=null
$.bG=null
$.ct=null
$.aq=null
$.aO=null
$.aP=null
$.co=!1
$.q=C.d
$.a6=null
$.bZ=null
$.d2=null
$.d1=null
$.d_=null
$.cZ=null
$.cY=null
$.cX=null
$.eo=0
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
I.$lazy(y,x,w)}})(["cW","$get$cW",function(){return H.eq("_$dart_dartClosure")},"c5","$get$c5",function(){return H.eq("_$dart_js")},"dC","$get$dC",function(){return H.Y(H.bz({
toString:function(){return"$receiver$"}}))},"dD","$get$dD",function(){return H.Y(H.bz({$method$:null,
toString:function(){return"$receiver$"}}))},"dE","$get$dE",function(){return H.Y(H.bz(null))},"dF","$get$dF",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dJ","$get$dJ",function(){return H.Y(H.bz(void 0))},"dK","$get$dK",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dH","$get$dH",function(){return H.Y(H.dI(null))},"dG","$get$dG",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"dM","$get$dM",function(){return H.Y(H.dI(void 0))},"dL","$get$dL",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ci","$get$ci",function(){return P.il()},"c1","$get$c1",function(){return P.iH(null,P.aZ)},"aQ","$get$aQ",function(){return[]},"cV","$get$cV",function(){return{}},"dY","$get$dY",function(){return P.c9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cl","$get$cl",function(){return P.X()},"ds","$get$ds",function(){return new G.dA(1281,0,4294967295)},"cP","$get$cP",function(){return new G.dz(1281,1281,1281)},"T","$get$T",function(){return P.c8(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dy","$get$dy",function(){var z=G.ib()
z.b=!0
return z},"cU","$get$cU",function(){return T.ao(0,0,0)},"ex","$get$ex",function(){var z=G.dq("Textured")
z.cK(["aPosition","aTexUV"])
z.b5(["uPerspectiveViewMatrix","uModelMatrix"])
z.b6(["vTexUV"])
z.bb(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"ew","$get$ew",function(){var z=G.dq("TexturedF")
z.b6(["vTexUV"])
z.b5(["uColor","uTexture"])
z.bb(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return z},"dV","$get$dV",function(){return[T.ao(0,0,1),T.ao(0,0,-1),T.ao(0,1,0),T.ao(0,-1,0),T.ao(1,0,0),T.ao(-1,0,0)]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.K]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.k,args:[P.E]},{func:1,args:[W.bk]},{func:1,ret:P.cq,args:[W.al,P.k,P.k,W.ck]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aM]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aM]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[W.a7]},{func:1,args:[W.aN]},{func:1,args:[W.bm]},{func:1,args:[P.c]},{func:1,args:[P.E,P.c]},{func:1,v:true,args:[P.aT]},{func:1,args:[P.i]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kE(d||a)
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
Isolate.av=a.av
Isolate.at=a.at
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
if(typeof dartMainRunner==="function")dartMainRunner(U.et,[])
else U.et([])})})()
//# sourceMappingURL=camera_texture.dart.js.map
