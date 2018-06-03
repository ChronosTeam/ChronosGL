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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cK"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cK"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cK(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.az=function(){}
var dart=[["","",,H,{"^":"",mX:{"^":"d;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
cO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bo:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cM==null){H.lw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cz("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ch()]
if(v!=null)return v
v=H.lz(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$ch(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
h:{"^":"d;",
C:function(a,b){return a===b},
gB:function(a){return H.aR(a)},
k:["d3",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hS:{"^":"h;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iscJ:1},
hT:{"^":"h;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isbd:1},
ci:{"^":"h;",
gB:function(a){return 0},
k:["d5",function(a){return String(a)}]},
iv:{"^":"ci;"},
bl:{"^":"ci;"},
aP:{"^":"ci;",
k:function(a){var z=a[$.$get$dn()]
return z==null?this.d5(a):J.aH(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aL:{"^":"h;$ti",
P:function(a,b){var z
if(!!a.fixed$length)H.O(P.u("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
A:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.Q(a))}},
af:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
bj:function(a,b){return H.e6(a,b,null,H.v(a,0))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
geG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.cf())},
cX:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.O(P.u("setRange"))
P.dX(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.D()
if(typeof b!=="number")return H.z(b)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$isi){x=e
w=d}else{w=y.bj(d,e).eU(0,!1)
x=0}y=J.a1(w)
v=y.gi(w)
if(typeof v!=="number")return H.z(v)
if(x+z>v)throw H.b(H.hQ())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ak:function(a,b,c,d){return this.cX(a,b,c,d,0)},
bS:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.Q(a))}return!1},
cY:function(a,b){if(!!a.immutable$list)H.O(P.u("sort"))
H.iR(a,J.l1())},
ax:function(a){return this.cY(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.D(a[z],b))return!0
return!1},
k:function(a){return P.ce(a,"[","]")},
gI:function(a){return new J.h2(a,a.length,0,null,[H.v(a,0)])},
gB:function(a){return H.aR(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.O(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.db(b,"newLength",null))
if(b<0)throw H.b(P.at(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aa(a,b))
if(b>=a.length||b<0)throw H.b(H.aa(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.O(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aa(a,b))
if(b>=a.length||b<0)throw H.b(H.aa(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.y([],[H.v(a,0)])
this.si(y,z)
this.ak(y,0,a.length,a)
this.ak(y,a.length,z,b)
return y},
$isp:1,
$asp:I.az,
$isj:1,
$isi:1,
p:{
aM:function(a){a.fixed$length=Array
return a},
mV:[function(a,b){return J.fn(a,b)},"$2","l1",8,0,23]}},
mW:{"^":"aL;$ti"},
h2:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aN:{"^":"h;",
U:function(a,b){var z
if(typeof b!=="number")throw H.b(H.N(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gar(b)
if(this.gar(a)===z)return 0
if(this.gar(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gar:function(a){return a===0?1/a<0:a<0},
eT:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.u(""+a+".toInt()"))},
eg:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.u(""+a+".ceil()"))},
ev:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.u(""+a+".floor()"))},
eh:function(a,b,c){if(this.U(b,c)>0)throw H.b(H.N(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
eW:function(a,b){var z
if(b>20)throw H.b(P.at(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gar(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a+b},
D:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a-b},
d7:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bL(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.bL(a,b)},
bL:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.u("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bJ:function(a,b){var z
if(a>0)z=this.e2(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e2:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a<b},
ah:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a>b},
$isay:1,
$isb2:1},
dF:{"^":"aN;",$isG:1},
dE:{"^":"aN;"},
aO:{"^":"h;",
aT:function(a,b){if(b<0)throw H.b(H.aa(a,b))
if(b>=a.length)H.O(H.aa(a,b))
return a.charCodeAt(b)},
an:function(a,b){if(b>=a.length)throw H.b(H.aa(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.b(P.db(b,null,null))
return a+b},
eO:function(a,b,c){return H.lJ(a,b,c)},
cZ:function(a,b){var z=H.y(a.split(b),[P.n])
return z},
d0:function(a,b,c){var z
if(c>a.length)throw H.b(P.at(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
d_:function(a,b){return this.d0(a,b,0)},
ay:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.O(H.N(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.O(H.N(c))
if(b<0)throw H.b(P.bG(b,null,null))
if(typeof c!=="number")return H.z(c)
if(b>c)throw H.b(P.bG(b,null,null))
if(c>a.length)throw H.b(P.bG(c,null,null))
return a.substring(b,c)},
d1:function(a,b){return this.ay(a,b,null)},
eV:function(a){return a.toLowerCase()},
eY:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.an(z,0)===133){x=J.hU(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aT(z,w)===133?J.hV(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
ek:function(a,b,c){if(c>a.length)throw H.b(P.at(c,0,a.length,null,null))
return H.lI(a,b,c)},
U:function(a,b){var z
if(typeof b!=="string")throw H.b(H.N(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.b(H.aa(a,b))
return a[b]},
$isp:1,
$asp:I.az,
$isn:1,
p:{
dG:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hU:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.an(a,b)
if(y!==32&&y!==13&&!J.dG(y))break;++b}return b},
hV:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.aT(a,z)
if(y!==32&&y!==13&&!J.dG(y))break}return b}}}}],["","",,H,{"^":"",
cf:function(){return new P.bI("No element")},
hR:function(){return new P.bI("Too many elements")},
hQ:function(){return new P.bI("Too few elements")},
iR:function(a,b){var z=J.a4(a)
if(typeof z!=="number")return z.D()
H.be(a,0,z-1,b)},
be:function(a,b,c,d){if(c-b<=32)H.iQ(a,b,c,d)
else H.iP(a,b,c,d)},
iQ:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a1(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.T(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
iP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a4(c-b+1,6)
y=b+z
x=c-z
w=C.b.a4(b+c,2)
v=w-z
u=w+z
t=J.a1(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.T(d.$2(s,r),0)){n=r
r=s
s=n}if(J.T(d.$2(p,o),0)){n=o
o=p
p=n}if(J.T(d.$2(s,q),0)){n=q
q=s
s=n}if(J.T(d.$2(r,q),0)){n=q
q=r
r=n}if(J.T(d.$2(s,p),0)){n=p
p=s
s=n}if(J.T(d.$2(q,p),0)){n=p
p=q
q=n}if(J.T(d.$2(r,o),0)){n=o
o=r
r=n}if(J.T(d.$2(r,q),0)){n=q
q=r
r=n}if(J.T(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.D(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.C(i,0))continue
if(h.X(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.b1(i)
if(h.ah(i,0)){--l
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
if(J.aF(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.T(d.$2(j,p),0))for(;!0;)if(J.T(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aF(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.be(a,b,m-2,d)
H.be(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.D(d.$2(t.h(a,m),r),0);)++m
for(;J.D(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.D(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.D(d.$2(j,p),0))for(;!0;)if(J.D(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aF(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.be(a,m,l,d)}else H.be(a,m,l,d)},
j:{"^":"aK;$ti"},
bC:{"^":"j;$ti",
gI:function(a){return new H.dL(this,this.gi(this),0,null,[H.bp(this,"bC",0)])},
A:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.z(z)
y=0
for(;y<z;++y){b.$1(this.t(0,y))
if(z!==this.gi(this))throw H.b(P.Q(this))}},
b7:function(a,b){return this.d4(0,b)}},
j4:{"^":"bC;a,b,c,$ti",
dz:function(a,b,c,d){},
gdQ:function(){var z=J.a4(this.a)
return z},
ge3:function(){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.z(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.z(z)
if(y>=z)return 0
return z-y},
t:function(a,b){var z,y
z=this.ge3()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.z(b)
y=z+b
if(!(b<0)){z=this.gdQ()
if(typeof z!=="number")return H.z(z)
z=y>=z}else z=!0
if(z)throw H.b(P.A(b,this,"index",null,null))
return J.cV(this.a,y)},
eU:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a1(y)
w=x.gi(y)
if(typeof w!=="number")return w.D()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.t(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.X()
if(u<w)throw H.b(P.Q(this))}return t},
p:{
e6:function(a,b,c,d){var z=new H.j4(a,b,c,[d])
z.dz(a,b,c,d)
return z}}},
dL:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.a1(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.Q(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.t(z,w);++this.c
return!0}},
dN:{"^":"aK;a,b,$ti",
gI:function(a){return new H.cp(null,J.aj(this.a),this.b,this.$ti)},
gi:function(a){return J.a4(this.a)},
$asaK:function(a,b){return[b]},
p:{
i8:function(a,b,c,d){if(!!a.$isj)return new H.hp(a,b,[c,d])
return new H.dN(a,b,[c,d])}}},
hp:{"^":"dN;a,b,$ti",$isj:1,
$asj:function(a,b){return[b]}},
cp:{"^":"cg;a,b,c,$ti",
q:function(){var z=this.b
if(z.q()){this.a=this.c.$1(z.gw(z))
return!0}this.a=null
return!1},
gw:function(a){return this.a},
$ascg:function(a,b){return[b]}},
i9:{"^":"bC;a,b,$ti",
gi:function(a){return J.a4(this.a)},
t:function(a,b){return this.b.$1(J.cV(this.a,b))},
$asj:function(a,b){return[b]},
$asbC:function(a,b){return[b]},
$asaK:function(a,b){return[b]}},
eo:{"^":"aK;a,b,$ti",
gI:function(a){return new H.jf(J.aj(this.a),this.b,this.$ti)}},
jf:{"^":"cg;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gw(z))===!0)return!0
return!1},
gw:function(a){var z=this.a
return z.gw(z)}},
bA:{"^":"d;$ti"}}],["","",,H,{"^":"",
lo:function(a){return init.types[a]},
f0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isq},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aH(a)
if(typeof z!=="string")throw H.b(H.N(a))
return z},
aR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iE:function(a,b){var z,y
if(typeof a!=="string")H.O(H.N(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.a(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
iD:function(a){var z,y
if(typeof a!=="string")H.O(H.N(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fU(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.o(a).$isbl){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.an(w,0)===36)w=C.i.d1(w,1)
r=H.bT(H.aB(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
M:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iC:function(a){return a.b?H.M(a).getUTCFullYear()+0:H.M(a).getFullYear()+0},
iA:function(a){return a.b?H.M(a).getUTCMonth()+1:H.M(a).getMonth()+1},
iw:function(a){return a.b?H.M(a).getUTCDate()+0:H.M(a).getDate()+0},
ix:function(a){return a.b?H.M(a).getUTCHours()+0:H.M(a).getHours()+0},
iz:function(a){return a.b?H.M(a).getUTCMinutes()+0:H.M(a).getMinutes()+0},
iB:function(a){return a.b?H.M(a).getUTCSeconds()+0:H.M(a).getSeconds()+0},
iy:function(a){return a.b?H.M(a).getUTCMilliseconds()+0:H.M(a).getMilliseconds()+0},
z:function(a){throw H.b(H.N(a))},
a:function(a,b){if(a==null)J.a4(a)
throw H.b(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,"index",null)
z=J.a4(a)
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.A(b,a,"index",null,z)
return P.bG(b,"index",null)},
N:function(a){return new P.ad(!0,a,null,null)},
eS:function(a){if(typeof a!=="number")throw H.b(H.N(a))
return a},
b:function(a){var z
if(a==null)a=new P.bF()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fd})
z.name=""}else z.toString=H.fd
return z},
fd:function(){return J.aH(this.dartException)},
O:function(a){throw H.b(a)},
C:function(a){throw H.b(P.Q(a))},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bJ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cj(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dU(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eb()
u=$.$get$ec()
t=$.$get$ed()
s=$.$get$ee()
r=$.$get$ei()
q=$.$get$ej()
p=$.$get$eg()
$.$get$ef()
o=$.$get$el()
n=$.$get$ek()
m=v.T(y)
if(m!=null)return z.$1(H.cj(y,m))
else{m=u.T(y)
if(m!=null){m.method="call"
return z.$1(H.cj(y,m))}else{m=t.T(y)
if(m==null){m=s.T(y)
if(m==null){m=r.T(y)
if(m==null){m=q.T(y)
if(m==null){m=p.T(y)
if(m==null){m=s.T(y)
if(m==null){m=o.T(y)
if(m==null){m=n.T(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dU(y,m))}}return z.$1(new H.ja(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ad(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e3()
return a},
ab:function(a){var z
if(a==null)return new H.eF(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eF(a,null)},
lk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
ly:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.dA("Unsupported number of arguments for wrapped closure"))},
a0:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ly)
a.$identity=z
return z},
hc:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$isi){z.$reflectionInfo=c
x=H.iG(z).r}else x=c
w=d?Object.create(new H.iS().constructor.prototype):Object.create(new H.c2(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a5
$.a5=J.aE(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dg(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lo,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.de:H.c3
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dg(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
h9:function(a,b,c,d){var z=H.c3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dg:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hb(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h9(y,!w,z,b)
if(y===0){w=$.a5
$.a5=J.aE(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.aI
if(v==null){v=H.bx("self")
$.aI=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a5
$.a5=J.aE(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.aI
if(v==null){v=H.bx("self")
$.aI=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
ha:function(a,b,c,d){var z,y
z=H.c3
y=H.de
switch(b?-1:a){case 0:throw H.b(H.iL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hb:function(a,b){var z,y,x,w,v,u,t,s
z=$.aI
if(z==null){z=H.bx("self")
$.aI=z}y=$.dd
if(y==null){y=H.bx("receiver")
$.dd=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ha(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a5
$.a5=J.aE(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a5
$.a5=J.aE(y,1)
return new Function(z+H.c(y)+"}")()},
cK:function(a,b,c,d,e,f){var z,y
z=J.aM(b)
y=!!J.o(c).$isi?J.aM(c):c
return H.hc(a,z,y,!!d,e,f)},
lF:function(a,b){var z=J.a1(b)
throw H.b(H.df(a,z.ay(b,3,z.gi(b))))},
a2:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.lF(a,b)},
cL:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eW:function(a,b){var z,y
if(a==null)return!1
z=H.cL(J.o(a))
if(z==null)y=!1
else y=H.f_(z,b)
return y},
l9:function(a){var z
if(a instanceof H.f){z=H.cL(J.o(a))
if(z!=null)return H.cP(z,null)
return"Closure"}return H.aS(a)},
lN:function(a){throw H.b(new P.hg(a))},
eY:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
aB:function(a){if(a==null)return
return a.$ti},
ol:function(a,b,c){return H.b3(a["$as"+H.c(c)],H.aB(b))},
bq:function(a,b,c,d){var z=H.b3(a["$as"+H.c(c)],H.aB(b))
return z==null?null:z[d]},
bp:function(a,b,c){var z=H.b3(a["$as"+H.c(b)],H.aB(a))
return z==null?null:z[c]},
v:function(a,b){var z=H.aB(a)
return z==null?null:z[b]},
cP:function(a,b){var z=H.aD(a,b)
return z},
aD:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bT(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aD(z,b)
return H.l0(a,b)}return"unknown-reified-type"},
l0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aD(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aD(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aD(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.lj(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aD(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bT:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cw("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return w?"":"<"+z.k(0)+">"},
ln:function(a){var z,y,x
if(a instanceof H.f){z=H.cL(J.o(a))
if(z!=null)return H.cP(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bT(a.$ti,0,null)
return y+x},
b3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bm:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aB(a)
y=J.o(a)
if(y[b]==null)return!1
return H.eQ(H.b3(y[d],z),c)},
bs:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bm(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bT(c,0,null)
throw H.b(H.df(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eQ:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.S(a[y],b[y]))return!1
return!0},
oj:function(a,b,c){return a.apply(b,H.b3(J.o(b)["$as"+H.c(c)],H.aB(b)))},
S:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="bd")return!0
if('func' in b)return H.f_(a,b)
if('func' in a)return b.builtin$cls==="mO"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cP(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eQ(H.b3(u,z),x)},
eP:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.S(z,v)||H.S(v,z)))return!1}return!0},
la:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aM(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.S(v,u)||H.S(u,v)))return!1}return!0},
f_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.S(z,y)||H.S(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eP(x,w,!1))return!1
if(!H.eP(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.S(o,n)||H.S(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.S(o,n)||H.S(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.S(o,n)||H.S(n,o)))return!1}}return H.la(a.named,b.named)},
ok:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lz:function(a){var z,y,x,w,v,u
z=$.eZ.$1(a)
y=$.bQ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eO.$2(a,z)
if(z!=null){y=$.bQ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bU(x)
$.bQ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bS[z]=x
return x}if(v==="-"){u=H.bU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f6(a,x)
if(v==="*")throw H.b(P.cz(z))
if(init.leafTags[z]===true){u=H.bU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f6(a,x)},
f6:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cO(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bU:function(a){return J.cO(a,!1,null,!!a.$isq)},
lE:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bU(z)
else return J.cO(z,c,null,null)},
lw:function(){if(!0===$.cM)return
$.cM=!0
H.lx()},
lx:function(){var z,y,x,w,v,u,t,s
$.bQ=Object.create(null)
$.bS=Object.create(null)
H.ls()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f8.$1(v)
if(u!=null){t=H.lE(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ls:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.ax(C.H,H.ax(C.M,H.ax(C.v,H.ax(C.v,H.ax(C.L,H.ax(C.I,H.ax(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eZ=new H.lt(v)
$.eO=new H.lu(u)
$.f8=new H.lv(t)},
ax:function(a,b){return a(b)||b},
lI:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
lK:function(a,b,c,d){var z,y,x
z=b.dS(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.lM(a,x,x+y[0].length,c)},
lJ:function(a,b,c){var z,y
z=b.gbF()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
lL:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.lK(a,b,c,d)},
lM:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
iF:{"^":"d;a,b,c,d,e,f,r,x",p:{
iG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aM(z)
y=z[0]
x=z[1]
return new H.iF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
j8:{"^":"d;a,b,c,d,e,f",
T:function(a){var z,y,x
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
a7:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eh:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
is:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
dU:function(a,b){return new H.is(a,b==null?null:b.method)}}},
hY:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
cj:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hY(a,y,z?null:b.receiver)}}},
ja:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lO:{"^":"f:0;a",
$1:function(a){if(!!J.o(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eF:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaV:1},
f:{"^":"d;",
k:function(a){return"Closure '"+H.aS(this).trim()+"'"},
gcS:function(){return this},
gcS:function(){return this}},
e7:{"^":"f;"},
iS:{"^":"e7;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c2:{"^":"e7;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aR(this.a)
else y=typeof z!=="object"?J.ac(z):H.aR(z)
return(y^H.aR(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
p:{
c3:function(a){return a.a},
de:function(a){return a.c},
bx:function(a){var z,y,x,w,v
z=new H.c2("self","target","receiver","name")
y=J.aM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
h6:{"^":"K;a",
k:function(a){return this.a},
p:{
df:function(a,b){return new H.h6("CastError: "+H.c(P.c7(a))+": type '"+H.l9(a)+"' is not a subtype of type '"+b+"'")}}},
iK:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
iL:function(a){return new H.iK(a)}}},
em:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.ac(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.em&&J.D(this.a,b.a)}},
dI:{"^":"co;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gM:function(a){return new H.dJ(this,[H.v(this,0)])},
gcN:function(a){var z=H.v(this,0)
return H.i8(new H.dJ(this,[z]),new H.hX(this),z,H.v(this,1))},
ap:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bB(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bB(y,b)}else return this.eE(b)},
eE:function(a){var z=this.d
if(z==null)return!1
return this.aW(this.aL(z,J.ac(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ao(z,b)
x=y==null?null:y.gae()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ao(w,b)
x=y==null?null:y.gae()
return x}else return this.eF(b)},
eF:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aL(z,J.ac(a)&0x3ffffff)
x=this.aW(y,a)
if(x<0)return
return y[x].gae()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aO()
this.b=z}this.bu(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aO()
this.c=y}this.bu(y,b,c)}else{x=this.d
if(x==null){x=this.aO()
this.d=x}w=J.ac(b)&0x3ffffff
v=this.aL(x,w)
if(v==null)this.aS(x,w,[this.aE(b,c)])
else{u=this.aW(v,b)
if(u>=0)v[u].sae(c)
else v.push(this.aE(b,c))}}},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.Q(this))
z=z.c}},
bu:function(a,b,c){var z=this.ao(a,b)
if(z==null)this.aS(a,b,this.aE(b,c))
else z.sae(c)},
bv:function(){this.r=this.r+1&67108863},
aE:function(a,b){var z,y
z=new H.i2(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bv()
return z},
aW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].geC(),b))return y
return-1},
k:function(a){return P.dM(this)},
ao:function(a,b){return a[b]},
aL:function(a,b){return a[b]},
aS:function(a,b,c){a[b]=c},
dO:function(a,b){delete a[b]},
bB:function(a,b){return this.ao(a,b)!=null},
aO:function(){var z=Object.create(null)
this.aS(z,"<non-identifier-key>",z)
this.dO(z,"<non-identifier-key>")
return z}},
hX:{"^":"f:0;a",
$1:function(a){return this.a.h(0,a)}},
i2:{"^":"d;eC:a<,ae:b@,c,d"},
dJ:{"^":"j;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.ag(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
A:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.b(P.Q(z))
y=y.c}}},
ag:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.Q(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lt:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
lu:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
lv:{"^":"f:11;a",
$1:function(a){return this.a(a)}},
hW:{"^":"d;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbF:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dH(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
dS:function(a,b){var z,y
z=this.gbF()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.k2(this,y)},
p:{
dH:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(P.c9("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
k2:{"^":"d;a,b",
h:function(a,b){var z=this.b
if(b>=z.length)return H.a(z,b)
return z[b]}}}],["","",,H,{"^":"",
lj:function(a){return J.aM(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
ap:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bO:function(a){var z,y,x
if(!!J.o(a).$isp)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aa(b,a))},
io:{"^":"h;","%":"DataView;ArrayBufferView;cq|ez|eA|dQ|eB|eC|al"},
cq:{"^":"io;",
gi:function(a){return a.length},
$isp:1,
$asp:I.az,
$isq:1,
$asq:I.az},
dQ:{"^":"eA;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a9(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.ay]},
$asbA:function(){return[P.ay]},
$ask:function(){return[P.ay]},
$isi:1,
$asi:function(){return[P.ay]},
"%":"Float64Array"},
al:{"^":"eC;",
j:function(a,b,c){H.a9(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.G]},
$asbA:function(){return[P.G]},
$ask:function(){return[P.G]},
$isi:1,
$asi:function(){return[P.G]}},
im:{"^":"dQ;",$isc8:1,"%":"Float32Array"},
nc:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nd:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
$ishO:1,
"%":"Int32Array"},
ne:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nf:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ng:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nh:{"^":"al;",
gi:function(a){return a.length},
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ni:{"^":"al;",
gi:function(a){return a.length},
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ez:{"^":"cq+k;"},
eA:{"^":"ez+bA;"},
eB:{"^":"cq+k;"},
eC:{"^":"eB+bA;"}}],["","",,P,{"^":"",
jm:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a0(new P.jo(z),1)).observe(y,{childList:true})
return new P.jn(z,y,x)}else if(self.setImmediate!=null)return P.lc()
return P.ld()},
o6:[function(a){self.scheduleImmediate(H.a0(new P.jp(a),0))},"$1","lb",4,0,6],
o7:[function(a){self.setImmediate(H.a0(new P.jq(a),0))},"$1","lc",4,0,6],
o8:[function(a){P.kB(0,a)},"$1","ld",4,0,6],
l4:function(a,b){if(H.eW(a,{func:1,args:[P.bd,P.bd]})){b.toString
return a}else{b.toString
return a}},
hA:function(a,b,c){var z
if(a==null)a=new P.bF()
z=$.t
if(z!==C.d)z.toString
z=new P.J(0,z,null,[c])
z.by(a,b)
return z},
hB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.J(0,$.t,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hD(z,b,!1,y)
try{for(s=0,r=0;s<2;++s){w=a[s]
v=r
w.b5(new P.hC(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.J(0,$.t,null,[null])
r.bx(C.x)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.P(p)
t=H.ab(p)
if(z.b===0||!1)return P.hA(u,t,null)
else{z.c=u
z.d=t}}return y},
kZ:function(a,b,c){$.t.toString
a.K(b,c)},
l3:function(){var z,y
for(;z=$.av,z!=null;){$.b_=null
y=z.b
$.av=y
if(y==null)$.aZ=null
z.a.$0()}},
oi:[function(){$.cH=!0
try{P.l3()}finally{$.b_=null
$.cH=!1
if($.av!=null)$.$get$cC().$1(P.eR())}},"$0","eR",0,0,3],
eM:function(a){var z=new P.ep(a,null)
if($.av==null){$.aZ=z
$.av=z
if(!$.cH)$.$get$cC().$1(P.eR())}else{$.aZ.b=z
$.aZ=z}},
l8:function(a){var z,y,x
z=$.av
if(z==null){P.eM(a)
$.b_=$.aZ
return}y=new P.ep(a,null)
x=$.b_
if(x==null){y.b=z
$.b_=y
$.av=y}else{y.b=x.b
x.b=y
$.b_=y
if(y.b==null)$.aZ=y}},
lG:function(a){var z=$.t
if(C.d===z){P.aw(null,null,C.d,a)
return}z.toString
P.aw(null,null,z,z.bV(a))},
l7:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.P(u)
y=H.ab(u)
$.t.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aG(x)
w=t
v=x.ga1()
c.$2(w,v)}}},
kT:function(a,b,c,d){var z=a.c1(0)
if(!!J.o(z).$isaf&&z!==$.$get$ca())z.cR(new P.kW(b,c,d))
else b.K(c,d)},
kU:function(a,b){return new P.kV(a,b)},
kX:function(a,b,c){var z=a.c1(0)
if(!!J.o(z).$isaf&&z!==$.$get$ca())z.cR(new P.kY(b,c))
else b.a2(c)},
bP:function(a,b,c,d,e){var z={}
z.a=d
P.l8(new P.l5(z,e))},
eK:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
eL:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
l6:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
aw:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bV(d):c.ed(d)
P.eM(d)},
jo:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jn:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jp:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jq:{"^":"f:1;a",
$0:function(){this.a.$0()}},
kA:{"^":"d;a,b,c",
dJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a0(new P.kC(this,b),0),a)
else throw H.b(P.u("`setTimeout()` not found."))},
p:{
kB:function(a,b){var z=new P.kA(!0,null,0)
z.dJ(a,b)
return z}}},
kC:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
af:{"^":"d;$ti"},
hD:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.K(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.K(z.c,z.d)}},
hC:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.a(x,z)
x[z]=a
if(y===0)this.c.bA(x)}else if(z.b===0&&!this.e)this.c.K(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
m0:{"^":"d;$ti"},
er:{"^":"d;$ti",
ej:function(a,b){if(a==null)a=new P.bF()
if(this.a.a!==0)throw H.b(P.bh("Future already completed"))
$.t.toString
this.K(a,b)},
ei:function(a){return this.ej(a,null)}},
cB:{"^":"er;a,$ti",
ad:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.bh("Future already completed"))
z.bx(b)},
K:function(a,b){this.a.by(a,b)}},
kv:{"^":"er;a,$ti",
ad:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.bh("Future already completed"))
z.a2(b)},
K:function(a,b){this.a.K(a,b)}},
es:{"^":"d;aQ:a<,b,c,d,e,$ti",
ge8:function(){return this.b.b},
gcl:function(){return(this.c&1)!==0},
geB:function(){return(this.c&2)!==0},
gck:function(){return this.c===8},
ez:function(a){return this.b.b.b3(this.d,a)},
eI:function(a){if(this.c!==6)return!0
return this.b.b.b3(this.d,J.aG(a))},
ey:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eW(z,{func:1,args:[P.d,P.aV]}))return x.eP(z,y.gR(a),a.ga1())
else return x.b3(z,y.gR(a))},
eA:function(){return this.b.b.cu(this.d)}},
J:{"^":"d;bK:a<,b,dZ:c<,$ti",
gdU:function(){return this.a===2},
gaM:function(){return this.a>=4},
b5:function(a,b){var z,y,x
z=$.t
if(z!==C.d){z.toString
if(b!=null)b=P.l4(b,z)}y=new P.J(0,z,null,[null])
x=b==null?1:3
this.aF(new P.es(null,y,x,a,b,[H.v(this,0),null]))
return y},
av:function(a){return this.b5(a,null)},
cR:function(a){var z,y
z=$.t
y=new P.J(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.v(this,0)
this.aF(new P.es(null,y,8,a,null,[z,z]))
return y},
aF:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaM()){y.aF(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aw(null,null,z,new P.jI(this,a))}},
bG:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaQ()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaM()){v.bG(a)
return}this.a=v.a
this.c=v.c}z.a=this.aR(a)
y=this.b
y.toString
P.aw(null,null,y,new P.jP(z,this))}},
a9:function(){var z=this.c
this.c=null
return this.aR(z)},
aR:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaQ()
z.a=y}return y},
a2:function(a){var z,y,x
z=this.$ti
y=H.bm(a,"$isaf",z,"$asaf")
if(y){z=H.bm(a,"$isJ",z,null)
if(z)P.bM(a,this)
else P.et(a,this)}else{x=this.a9()
this.a=4
this.c=a
P.au(this,x)}},
bA:function(a){var z=this.a9()
this.a=4
this.c=a
P.au(this,z)},
K:[function(a,b){var z=this.a9()
this.a=8
this.c=new P.bw(a,b)
P.au(this,z)},function(a){return this.K(a,null)},"f2","$2","$1","gaG",4,2,13],
bx:function(a){var z=H.bm(a,"$isaf",this.$ti,"$asaf")
if(z){this.dM(a)
return}this.a=1
z=this.b
z.toString
P.aw(null,null,z,new P.jK(this,a))},
dM:function(a){var z=H.bm(a,"$isJ",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aw(null,null,z,new P.jO(this,a))}else P.bM(a,this)
return}P.et(a,this)},
by:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aw(null,null,z,new P.jJ(this,a,b))},
$isaf:1,
p:{
jH:function(a,b){var z=new P.J(0,$.t,null,[b])
z.a=4
z.c=a
return z},
et:function(a,b){var z,y,x
b.a=1
try{a.b5(new P.jL(b),new P.jM(b))}catch(x){z=H.P(x)
y=H.ab(x)
P.lG(new P.jN(b,z,y))}},
bM:function(a,b){var z
for(;a.gdU();)a=a.c
if(a.gaM()){z=b.a9()
b.a=a.a
b.c=a.c
P.au(b,z)}else{z=b.c
b.a=2
b.c=a
a.bG(z)}},
au:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aG(v)
t=v.ga1()
y.toString
P.bP(null,null,y,u,t)}return}for(;b.gaQ()!=null;b=s){s=b.a
b.a=null
P.au(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcl()||b.gck()){q=b.ge8()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aG(v)
t=v.ga1()
y.toString
P.bP(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gck())new P.jS(z,x,b,w).$0()
else if(y){if(b.gcl())new P.jR(x,b,r).$0()}else if(b.geB())new P.jQ(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.o(y).$isaf){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aR(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bM(y,o)
return}}o=b.b
b=o.a9()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
jI:{"^":"f:1;a,b",
$0:function(){P.au(this.a,this.b)}},
jP:{"^":"f:1;a,b",
$0:function(){P.au(this.b,this.a.a)}},
jL:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.a2(a)}},
jM:{"^":"f:14;a",
$2:function(a,b){this.a.K(a,b)},
$1:function(a){return this.$2(a,null)}},
jN:{"^":"f:1;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
jK:{"^":"f:1;a,b",
$0:function(){this.a.bA(this.b)}},
jO:{"^":"f:1;a,b",
$0:function(){P.bM(this.b,this.a)}},
jJ:{"^":"f:1;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
jS:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.eA()}catch(w){y=H.P(w)
x=H.ab(w)
if(this.d){v=J.aG(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bw(y,x)
u.a=!0
return}if(!!J.o(z).$isaf){if(z instanceof P.J&&z.gbK()>=4){if(z.gbK()===8){v=this.b
v.b=z.gdZ()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.av(new P.jT(t))
v.a=!1}}},
jT:{"^":"f:0;a",
$1:function(a){return this.a}},
jR:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ez(this.c)}catch(x){z=H.P(x)
y=H.ab(x)
w=this.a
w.b=new P.bw(z,y)
w.a=!0}}},
jQ:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.eI(z)===!0&&w.e!=null){v=this.b
v.b=w.ey(z)
v.a=!1}}catch(u){y=H.P(u)
x=H.ab(u)
w=this.a
v=J.aG(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bw(y,x)
s.a=!0}}},
ep:{"^":"d;a,b"},
bJ:{"^":"d;$ti",
A:function(a,b){var z,y
z={}
y=new P.J(0,$.t,null,[null])
z.a=null
z.a=this.aX(new P.j0(z,this,b,y),!0,new P.j1(y),y.gaG())
return y},
gi:function(a){var z,y
z={}
y=new P.J(0,$.t,null,[P.G])
z.a=0
this.aX(new P.j2(z),!0,new P.j3(z,y),y.gaG())
return y},
ges:function(a){var z,y
z={}
y=new P.J(0,$.t,null,[H.bp(this,"bJ",0)])
z.a=null
z.a=this.aX(new P.iX(z,this,y),!0,new P.iY(y),y.gaG())
return y}},
j0:{"^":"f;a,b,c,d",
$1:function(a){P.l7(new P.iZ(this.c,a),new P.j_(),P.kU(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.bp(this.b,"bJ",0)]}}},
iZ:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
j_:{"^":"f:0;",
$1:function(a){}},
j1:{"^":"f:1;a",
$0:function(){this.a.a2(null)}},
j2:{"^":"f:0;a",
$1:function(a){++this.a.a}},
j3:{"^":"f:1;a,b",
$0:function(){this.b.a2(this.a.a)}},
iX:{"^":"f;a,b,c",
$1:function(a){P.kX(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.bp(this.b,"bJ",0)]}}},
iY:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.cf()
throw H.b(x)}catch(w){z=H.P(w)
y=H.ab(w)
P.kZ(this.a,z,y)}}},
iW:{"^":"d;$ti"},
kW:{"^":"f:1;a,b,c",
$0:function(){return this.a.K(this.b,this.c)}},
kV:{"^":"f:15;a,b",
$2:function(a,b){P.kT(this.a,this.b,a,b)}},
kY:{"^":"f:1;a,b",
$0:function(){return this.a.a2(this.b)}},
bw:{"^":"d;R:a>,a1:b<",
k:function(a){return H.c(this.a)},
$isK:1},
kI:{"^":"d;"},
l5:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bF()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.aH(y)
throw x}},
ke:{"^":"kI;",
eQ:function(a){var z,y,x
try{if(C.d===$.t){a.$0()
return}P.eK(null,null,this,a)}catch(x){z=H.P(x)
y=H.ab(x)
P.bP(null,null,this,z,y)}},
eR:function(a,b){var z,y,x
try{if(C.d===$.t){a.$1(b)
return}P.eL(null,null,this,a,b)}catch(x){z=H.P(x)
y=H.ab(x)
P.bP(null,null,this,z,y)}},
ed:function(a){return new P.kg(this,a)},
bV:function(a){return new P.kf(this,a)},
ee:function(a){return new P.kh(this,a)},
h:function(a,b){return},
cu:function(a){if($.t===C.d)return a.$0()
return P.eK(null,null,this,a)},
b3:function(a,b){if($.t===C.d)return a.$1(b)
return P.eL(null,null,this,a,b)},
eP:function(a,b,c){if($.t===C.d)return a.$2(b,c)
return P.l6(null,null,this,a,b,c)}},
kg:{"^":"f:1;a,b",
$0:function(){return this.a.cu(this.b)}},
kf:{"^":"f:1;a,b",
$0:function(){return this.a.eQ(this.b)}},
kh:{"^":"f:0;a,b",
$1:function(a){return this.a.eR(this.b,a)}}}],["","",,P,{"^":"",
H:function(){return new H.dI(0,null,null,null,null,null,0,[null,null])},
cm:function(a){return H.lk(a,new H.dI(0,null,null,null,null,null,0,[null,null]))},
Y:function(a,b,c,d){return new P.k0(0,null,null,null,null,null,0,[d])},
hP:function(a,b,c){var z,y
if(P.cI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b0()
y.push(a)
try{P.l2(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.e5(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cI(a))return b+"..."+c
z=new P.cw(b)
y=$.$get$b0()
y.push(a)
try{x=z
x.a=P.e5(x.ga3(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.ga3()+c
y=z.ga3()
return y.charCodeAt(0)==0?y:y},
cI:function(a){var z,y
for(z=0;y=$.$get$b0(),z<y.length;++z)if(a===y[z])return!0
return!1},
l2:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.c(z.gw(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gw(z);++x
if(!z.q()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw(z);++x
for(;z.q();t=s,s=r){r=z.gw(z);++x
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
cn:function(a,b){var z,y
z=P.Y(null,null,null,b)
for(y=J.aj(a);y.q();)z.L(0,y.gw(y))
return z},
dM:function(a){var z,y,x
z={}
if(P.cI(a))return"{...}"
y=new P.cw("")
try{$.$get$b0().push(a)
x=y
x.a=x.ga3()+"{"
z.a=!0
J.cW(a,new P.i7(z,y))
z=y
z.a=z.ga3()+"}"}finally{z=$.$get$b0()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.ga3()
return z.charCodeAt(0)==0?z:z},
k0:{"^":"jV;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.cF(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dN(b)},
dN:function(a){var z=this.d
if(z==null)return!1
return this.aK(z[this.aH(a)],a)>=0},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.b(P.Q(this))
z=z.b}},
L:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cG()
this.b=z}return this.bw(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cG()
this.c=y}return this.bw(y,b)}else return this.dK(0,b)},
dK:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cG()
this.d=z}y=this.aH(b)
x=z[y]
if(x==null)z[y]=[this.aP(b)]
else{if(this.aK(x,b)>=0)return!1
x.push(this.aP(b))}return!0},
ct:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bI(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aH(b)]
x=this.aK(y,b)
if(x<0)return!1
this.bM(y.splice(x,1)[0])
return!0},
ab:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aN()}},
bw:function(a,b){if(a[b]!=null)return!1
a[b]=this.aP(b)
return!0},
bI:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bM(z)
delete a[b]
return!0},
aN:function(){this.r=this.r+1&67108863},
aP:function(a){var z,y
z=new P.k1(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aN()
return z},
bM:function(a){var z,y
z=a.gdV()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aN()},
aH:function(a){return J.ac(a)&0x3ffffff},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].gdP(),b))return y
return-1},
p:{
cG:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
k1:{"^":"d;dP:a<,b,dV:c<"},
cF:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.Q(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jV:{"^":"iM;$ti"},
n_:{"^":"d;$ti",$isj:1},
dK:{"^":"ey;$ti",$isj:1,$isi:1},
k:{"^":"d;$ti",
gI:function(a){return new H.dL(a,this.gi(a),0,null,[H.bq(this,a,"k",0)])},
t:function(a,b){return this.h(a,b)},
A:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.z(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.b(P.Q(a))}},
ew:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.z(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.Q(a))}return y},
bj:function(a,b){return H.e6(a,b,null,H.bq(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.y([],[H.bq(this,a,"k",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.ak(z,0,this.gi(a),a)
C.c.ak(z,this.gi(a),z.length,b)
return z},
ci:function(a,b,c,d){var z
P.dX(b,c,this.gi(a),null,null,null)
for(z=b;z<c;++z)this.j(a,z,d)},
k:function(a){return P.ce(a,"[","]")}},
co:{"^":"U;$ti"},
i7:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
U:{"^":"d;$ti",
A:function(a,b){var z,y
for(z=J.aj(this.gM(a));z.q();){y=z.gw(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a4(this.gM(a))},
k:function(a){return P.dM(a)}},
iN:{"^":"d;$ti",
P:function(a,b){var z
for(z=J.aj(b);z.q();)this.L(0,z.gw(z))},
k:function(a){return P.ce(this,"{","}")},
A:function(a,b){var z
for(z=new P.cF(this,this.r,null,null,[null]),z.c=this.e;z.q();)b.$1(z.d)},
$isj:1},
iM:{"^":"iN;$ti"},
ey:{"^":"d+k;$ti"}}],["","",,P,{"^":"",
cN:function(a,b,c){var z=H.iE(a,c)
if(z!=null)return z
throw H.b(P.c9(a,null,null))},
ao:function(a,b){var z=H.iD(a)
if(z!=null)return z
throw H.b(P.c9("Invalid double",a,null))},
hs:function(a){var z=J.o(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aS(a)+"'"},
dY:function(a,b,c){return new H.hW(a,H.dH(a,!1,!0,!1),null,null)},
c7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hs(a)},
dA:function(a){return new P.jE(a)},
a3:function(a){H.ap(H.c(a))},
cJ:{"^":"d;"},
"+bool":0,
bz:{"^":"d;e7:a<,b",
geJ:function(){return this.a},
df:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.b(P.c0("DateTime is outside valid range: "+this.geJ()))},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bz))return!1
return this.a===b.a&&this.b===b.b},
U:function(a,b){return C.b.U(this.a,b.ge7())},
gB:function(a){var z=this.a
return(z^C.b.bJ(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hh(H.iC(this))
y=P.b7(H.iA(this))
x=P.b7(H.iw(this))
w=P.b7(H.ix(this))
v=P.b7(H.iz(this))
u=P.b7(H.iB(this))
t=P.hi(H.iy(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hh:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b7:function(a){if(a>=10)return""+a
return"0"+a}}},
ay:{"^":"b2;"},
"+double":0,
b8:{"^":"d;a8:a<",
l:function(a,b){return new P.b8(C.b.l(this.a,b.ga8()))},
D:function(a,b){return new P.b8(this.a-b.ga8())},
X:function(a,b){return C.b.X(this.a,b.ga8())},
ah:function(a,b){return C.b.ah(this.a,b.ga8())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
U:function(a,b){return C.b.U(this.a,b.ga8())},
k:function(a){var z,y,x,w,v
z=new P.ho()
y=this.a
if(y<0)return"-"+new P.b8(0-y).k(0)
x=z.$1(C.b.a4(y,6e7)%60)
w=z.$1(C.b.a4(y,1e6)%60)
v=new P.hn().$1(y%1e6)
return""+C.b.a4(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
dw:function(a,b,c,d,e,f){return new P.b8(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hn:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ho:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"d;",
ga1:function(){return H.ab(this.$thrownJsError)}},
bF:{"^":"K;",
k:function(a){return"Throw of null."}},
ad:{"^":"K;a,b,c,d",
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gaJ()+y+x
if(!this.a)return w
v=this.gaI()
u=P.c7(this.b)
return w+v+": "+H.c(u)},
p:{
c0:function(a){return new P.ad(!1,null,null,a)},
db:function(a,b,c){return new P.ad(!0,a,b,c)},
h1:function(a){return new P.ad(!1,null,a,"Must not be null")}}},
dW:{"^":"ad;e,f,a,b,c,d",
gaJ:function(){return"RangeError"},
gaI:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bG:function(a,b,c){return new P.dW(null,null,!0,a,b,"Value not in range")},
at:function(a,b,c,d,e){return new P.dW(b,c,!0,a,d,"Invalid value")},
dX:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.z(a)
if(0<=a){if(typeof c!=="number")return H.z(c)
z=a>c}else z=!0
if(z)throw H.b(P.at(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.z(c)
z=b>c}else z=!0
if(z)throw H.b(P.at(b,a,c,"end",f))
return b}return c}}},
hN:{"^":"ad;e,i:f>,a,b,c,d",
gaJ:function(){return"RangeError"},
gaI:function(){if(J.aF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
A:function(a,b,c,d,e){var z=e!=null?e:J.a4(b)
return new P.hN(b,z,!0,a,c,"Index out of range")}}},
jb:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
u:function(a){return new P.jb(a)}}},
j9:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
cz:function(a){return new P.j9(a)}}},
bI:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
p:{
bh:function(a){return new P.bI(a)}}},
hd:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.c7(z))+"."},
p:{
Q:function(a){return new P.hd(a)}}},
e3:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga1:function(){return},
$isK:1},
hg:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
mm:{"^":"d;"},
jE:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
hy:{"^":"d;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.c(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.ay(x,0,75)+"..."
return y+"\n"+x},
p:{
c9:function(a,b,c){return new P.hy(a,b,c)}}},
G:{"^":"b2;"},
"+int":0,
aK:{"^":"d;$ti",
b7:["d4",function(a,b){return new H.eo(this,b,[H.bp(this,"aK",0)])}],
A:function(a,b){var z
for(z=this.gI(this);z.q();)b.$1(z.gw(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.q();)++y
return y},
ga0:function(a){var z,y
z=this.gI(this)
if(!z.q())throw H.b(H.cf())
y=z.gw(z)
if(z.q())throw H.b(H.hR())
return y},
t:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.h1("index"))
if(b<0)H.O(P.at(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.q();){x=z.gw(z)
if(b===y)return x;++y}throw H.b(P.A(b,this,"index",null,y))},
k:function(a){return P.hP(this,"(",")")}},
cg:{"^":"d;$ti"},
i:{"^":"d;$ti",$isj:1},
"+List":0,
bD:{"^":"d;$ti"},
bd:{"^":"d;",
gB:function(a){return P.d.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
b2:{"^":"d;"},
"+num":0,
d:{"^":";",
C:function(a,b){return this===b},
gB:function(a){return H.aR(this)},
k:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.k(this)}},
nz:{"^":"d;"},
aV:{"^":"d;"},
n:{"^":"d;"},
"+String":0,
cw:{"^":"d;a3:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e5:function(a,b,c){var z=J.aj(b)
if(!z.q())return a
if(c.length===0){do a+=H.c(z.gw(z))
while(z.q())}else{a+=H.c(z.gw(z))
for(;z.q();)a=a+c+H.c(z.gw(z))}return a}}}}],["","",,W,{"^":"",
hq:function(a,b,c){var z,y
z=document.body
y=(z&&C.u).V(z,a,b,c)
y.toString
z=new H.eo(new W.V(y),new W.hr(),[W.r])
return z.ga0(z)},
dz:function(a){return"wheel"},
aJ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fB(a)
if(typeof y==="string")z=a.tagName}catch(x){H.P(x)}return z},
jB:function(a,b){return document.createElement(a)},
an:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ex:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bN:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jv(a)
if(!!J.o(z).$isE)return z
return}else return a},
l_:function(a){var z
if(!!J.o(a).$isdv)return a
z=new P.jj([],[],!1)
z.c=!0
return z.b6(a)},
eN:function(a){var z=$.t
if(z===C.d)return a
return z.ee(a)},
w:{"^":"aq;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lQ:{"^":"cv;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
lR:{"^":"h;i:length=","%":"AccessibleNodeList"},
lS:{"^":"w;N:target=,aq:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lT:{"^":"w;N:target=,aq:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lY:{"^":"w;aq:href},N:target=","%":"HTMLBaseElement"},
c1:{"^":"w;",$isc1:1,"%":"HTMLBodyElement"},
lZ:{"^":"w;J:name=","%":"HTMLButtonElement"},
c4:{"^":"w;G:height},H:width}",
cT:function(a,b,c){var z=a.getContext(b,P.le(c,null))
return z},
$isc4:1,
"%":"HTMLCanvasElement"},
m_:{"^":"h;",
aw:function(a){return P.W(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
h7:{"^":"r;i:length=","%":"CDATASection|Comment|Text;CharacterData"},
m1:{"^":"X;Z:style=","%":"CSSFontFaceRule"},
m2:{"^":"X;Z:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
m3:{"^":"X;Z:style=","%":"CSSPageRule"},
m4:{"^":"by;i:length=","%":"CSSPerspective"},
m5:{"^":"c5;m:x=,n:y=","%":"CSSPositionValue"},
m6:{"^":"by;m:x=,n:y=,F:z=","%":"CSSRotation"},
X:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
m7:{"^":"by;m:x=,n:y=,F:z=","%":"CSSScale"},
he:{"^":"jt;i:length=",
bz:function(a,b){var z,y
z=$.$get$dm()
y=z[b]
if(typeof y==="string")return y
y=this.e4(a,b)
z[b]=y
return y},
e4:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hj()+b
if(z in a)return z
return b},
e1:function(a,b,c,d){a.setProperty(b,c,d)},
sG:function(a,b){a.height=b},
sH:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hf:{"^":"d;",
seu:function(a,b){this.e1(a,this.bz(a,"float"),b,"")}},
m8:{"^":"X;Z:style=","%":"CSSStyleRule"},
c5:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
by:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
m9:{"^":"c5;i:length=","%":"CSSTransformValue"},
ma:{"^":"by;m:x=,n:y=,F:z=","%":"CSSTranslation"},
mb:{"^":"c5;i:length=","%":"CSSUnparsedValue"},
mc:{"^":"X;Z:style=","%":"CSSViewportRule"},
md:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
me:{"^":"h;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
hk:{"^":"w;","%":"HTMLDivElement"},
dv:{"^":"r;",
gaY:function(a){return new W.aY(a,"change",!1,[W.L])},
gaZ:function(a){return new W.aY(a,"mousedown",!1,[W.R])},
gb_:function(a){return new W.aY(a,"mousemove",!1,[W.R])},
gb0:function(a){return new W.aY(a,"mouseup",!1,[W.R])},
gb1:function(a){return new W.aY(a,W.dz(a),!1,[W.aX])},
$isdv:1,
"%":"Document|HTMLDocument|XMLDocument"},
mf:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
mg:{"^":"hl;",
gag:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
hl:{"^":"h;",
gag:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
mh:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.a6]},
$isj:1,
$asj:function(){return[P.a6]},
$isq:1,
$asq:function(){return[P.a6]},
$ask:function(){return[P.a6]},
$isi:1,
$asi:function(){return[P.a6]},
$asm:function(){return[P.a6]},
"%":"ClientRectList|DOMRectList"},
hm:{"^":"h;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gH(a))+" x "+H.c(this.gG(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa6)return!1
return a.left===z.gcm(b)&&a.top===z.gcA(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.ex(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcB:function(a){return new P.ah(a.left,a.top,[null])},
gG:function(a){return a.height},
gcm:function(a){return a.left},
gcA:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa6:1,
$asa6:I.az,
"%":";DOMRectReadOnly"},
mi:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$isq:1,
$asq:function(){return[P.n]},
$ask:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"DOMStringList"},
mj:{"^":"h;i:length=","%":"DOMTokenList"},
aq:{"^":"r;Z:style=,eD:id=,bE:namespaceURI=,eS:tagName=",
geb:function(a){return new W.jA(a)},
k:function(a){return a.localName},
V:["az",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dy
if(z==null){z=H.y([],[W.dS])
y=new W.dT(z)
z.push(W.eu(null))
z.push(W.eG())
$.dy=y
d=y}else d=z
z=$.dx
if(z==null){z=new W.eJ(d)
$.dx=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation.createHTMLDocument("")
$.ae=y
$.c6=y.createRange()
y=$.ae
y.toString
x=y.createElement("base")
J.fO(x,z.baseURI)
$.ae.head.appendChild(x)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ae
if(!!this.$isc1)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ae.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.v(C.P,a.tagName)){$.c6.selectNodeContents(w)
v=$.c6.createContextualFragment(b)}else{w.innerHTML=b
v=$.ae.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ae.body
if(w==null?z!=null:w!==z)J.d2(w)
c.bf(v)
document.adoptNode(v)
return v},function(a,b,c){return this.V(a,b,c,null)},"em",null,null,"gf3",5,5,null],
cW:function(a,b,c,d){a.textContent=null
a.appendChild(this.V(a,b,c,d))},
cV:function(a,b){return this.cW(a,b,null,null)},
b8:function(a){return a.getBoundingClientRect()},
gaY:function(a){return new W.Z(a,"change",!1,[W.L])},
gaZ:function(a){return new W.Z(a,"mousedown",!1,[W.R])},
gb_:function(a){return new W.Z(a,"mousemove",!1,[W.R])},
gb0:function(a){return new W.Z(a,"mouseup",!1,[W.R])},
gb1:function(a){return new W.Z(a,W.dz(a),!1,[W.aX])},
$isaq:1,
"%":";Element"},
hr:{"^":"f:0;",
$1:function(a){return!!J.o(a).$isaq}},
mk:{"^":"w;G:height},J:name=,H:width}","%":"HTMLEmbedElement"},
ml:{"^":"L;R:error=","%":"ErrorEvent"},
L:{"^":"h;",
gN:function(a){return W.bN(a.target)},
au:function(a){return a.preventDefault()},
$isL:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
E:{"^":"h;",
bR:["d2",function(a,b,c,d){if(c!=null)this.dL(a,b,c,!1)}],
dL:function(a,b,c,d){return a.addEventListener(b,H.a0(c,1),!1)},
dX:function(a,b,c,d){return a.removeEventListener(b,H.a0(c,1),!1)},
$isE:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eD|eE|eH|eI"},
mF:{"^":"w;J:name=","%":"HTMLFieldSetElement"},
mG:{"^":"jG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.b9]},
$isj:1,
$asj:function(){return[W.b9]},
$isq:1,
$asq:function(){return[W.b9]},
$ask:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$asm:function(){return[W.b9]},
"%":"FileList"},
mH:{"^":"E;R:error=","%":"FileReader"},
mI:{"^":"E;R:error=,i:length=","%":"FileWriter"},
mK:{"^":"h;Z:style=","%":"FontFace"},
mL:{"^":"E;",
f4:function(a,b,c){return a.forEach(H.a0(b,3),c)},
A:function(a,b){b=H.a0(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mN:{"^":"w;i:length=,J:name=,N:target=","%":"HTMLFormElement"},
mP:{"^":"cv;m:x=,n:y=,F:z=","%":"Gyroscope"},
mQ:{"^":"h;i:length=","%":"History"},
mR:{"^":"jX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$ask:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asm:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hH:{"^":"hI;",
f5:function(a,b,c,d,e,f){return a.open(b,c)},
eL:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
hI:{"^":"E;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mS:{"^":"w;G:height},J:name=,H:width}","%":"HTMLIFrameElement"},
cb:{"^":"h;",$iscb:1,"%":"ImageBitmap"},
cc:{"^":"h;",$iscc:1,"%":"ImageData"},
cd:{"^":"w;G:height},H:width}",$iscd:1,"%":"HTMLImageElement"},
dD:{"^":"w;G:height},J:name=,H:width}",$isdD:1,"%":"HTMLInputElement"},
mU:{"^":"h;N:target=","%":"IntersectionObserverEntry"},
bB:{"^":"en;",
gf_:function(a){return a.which},
$isbB:1,
"%":"KeyboardEvent"},
mZ:{"^":"w;aq:href}","%":"HTMLLinkElement"},
n0:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
n1:{"^":"cv;m:x=,n:y=,F:z=","%":"Magnetometer"},
n2:{"^":"w;J:name=","%":"HTMLMapElement"},
ib:{"^":"w;R:error=","%":"HTMLAudioElement;HTMLMediaElement"},
n4:{"^":"h;i:length=","%":"MediaList"},
n5:{"^":"E;aV:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
n6:{"^":"E;",
bR:function(a,b,c,d){if(J.D(b,"message"))a.start()
this.d2(a,b,c,!1)},
"%":"MessagePort"},
n7:{"^":"w;J:name=","%":"HTMLMetaElement"},
n8:{"^":"k3;",
h:function(a,b){return P.W(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.y([],[P.n])
this.A(a,new W.id(z))
return z},
gi:function(a){return a.size},
$asU:function(){return[P.n,null]},
"%":"MIDIInputMap"},
id:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
n9:{"^":"k4;",
h:function(a,b){return P.W(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.y([],[P.n])
this.A(a,new W.ie(z))
return z},
gi:function(a){return a.size},
$asU:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
ie:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
na:{"^":"k6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isq:1,
$asq:function(){return[W.bc]},
$ask:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$asm:function(){return[W.bc]},
"%":"MimeTypeArray"},
R:{"^":"en;c0:button=",
geK:function(a){return new P.ah(a.movementX,a.movementY,[null])},
gcr:function(a){var z,y,x
if(!!a.offsetX)return new P.ah(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.bN(z)).$isaq)throw H.b(P.u("offsetX is only supported on elements"))
y=W.bN(z)
z=[null]
x=new P.ah(a.clientX,a.clientY,z).D(0,J.fD(J.fF(y)))
return new P.ah(J.d5(x.a),J.d5(x.b),z)}},
$isR:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
nb:{"^":"h;N:target=","%":"MutationRecord"},
V:{"^":"dK;a",
ga0:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bh("No elements"))
if(y>1)throw H.b(P.bh("More than one element"))
return z.firstChild},
P:function(a,b){var z,y,x,w
z=J.o(b)
if(!!z.$isV){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gI(b),y=this.a;z.q();)y.appendChild(z.gw(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.dB(z,z.length,-1,null,[H.bq(C.Q,z,"m",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$asj:function(){return[W.r]},
$asdK:function(){return[W.r]},
$ask:function(){return[W.r]},
$asi:function(){return[W.r]},
$asey:function(){return[W.r]}},
r:{"^":"E;at:parentNode=,b2:previousSibling=",
gcq:function(a){return new W.V(a)},
eN:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.d3(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
nj:{"^":"h;",
eM:[function(a){return a.previousNode()},"$0","gb2",1,0,4],
"%":"NodeIterator"},
ip:{"^":"k8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$ask:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asm:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
nm:{"^":"w;G:height},J:name=,H:width}","%":"HTMLObjectElement"},
no:{"^":"w;J:name=","%":"HTMLOutputElement"},
np:{"^":"w;J:name=","%":"HTMLParamElement"},
aQ:{"^":"h;i:length=","%":"Plugin"},
nr:{"^":"kc;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aQ]},
$isj:1,
$asj:function(){return[W.aQ]},
$isq:1,
$asq:function(){return[W.aQ]},
$ask:function(){return[W.aQ]},
$isi:1,
$asi:function(){return[W.aQ]},
$asm:function(){return[W.aQ]},
"%":"PluginArray"},
nu:{"^":"h7;N:target=","%":"ProcessingInstruction"},
nw:{"^":"h;",
b8:function(a){return a.getBoundingClientRect()},
"%":"Range"},
nD:{"^":"h;N:target=","%":"ResizeObserverEntry"},
nE:{"^":"ki;",
h:function(a,b){return P.W(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.y([],[P.n])
this.A(a,new W.iJ(z))
return z},
gi:function(a){return a.size},
$asU:function(){return[P.n,null]},
"%":"RTCStatsReport"},
iJ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
e0:{"^":"w;i:length=,J:name=",$ise0:1,"%":"HTMLSelectElement"},
cv:{"^":"E;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
nF:{"^":"L;R:error=","%":"SensorErrorEvent"},
nG:{"^":"w;J:name=","%":"HTMLSlotElement"},
nH:{"^":"eE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isq:1,
$asq:function(){return[W.bf]},
$ask:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$asm:function(){return[W.bf]},
"%":"SourceBufferList"},
nI:{"^":"ko;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isq:1,
$asq:function(){return[W.bg]},
$ask:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$asm:function(){return[W.bg]},
"%":"SpeechGrammarList"},
nJ:{"^":"L;R:error=","%":"SpeechRecognitionError"},
aU:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
nL:{"^":"kr;",
h:function(a,b){return a.getItem(b)},
A:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gM:function(a){var z=H.y([],[P.n])
this.A(a,new W.iV(z))
return z},
gi:function(a){return a.length},
$asU:function(){return[P.n,P.n]},
"%":"Storage"},
iV:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
j5:{"^":"w;",
V:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=W.hq("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.V(y).P(0,J.fy(z))
return y},
"%":"HTMLTableElement"},
nO:{"^":"w;",
V:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.V(z.createElement("table"),b,c,d)
z.toString
z=new W.V(z)
x=z.ga0(z)
x.toString
z=new W.V(x)
w=z.ga0(z)
y.toString
w.toString
new W.V(y).P(0,new W.V(w))
return y},
"%":"HTMLTableRowElement"},
nP:{"^":"w;",
V:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.V(z.createElement("table"),b,c,d)
z.toString
z=new W.V(z)
x=z.ga0(z)
y.toString
x.toString
new W.V(y).P(0,new W.V(x))
return y},
"%":"HTMLTableSectionElement"},
e8:{"^":"w;",$ise8:1,"%":"HTMLTemplateElement"},
nQ:{"^":"w;J:name=","%":"HTMLTextAreaElement"},
nS:{"^":"kz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bk]},
$isj:1,
$asj:function(){return[W.bk]},
$isq:1,
$asq:function(){return[W.bk]},
$ask:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$asm:function(){return[W.bk]},
"%":"TextTrackCueList"},
nT:{"^":"eI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isq:1,
$asq:function(){return[W.bj]},
$ask:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$asm:function(){return[W.bj]},
"%":"TextTrackList"},
nU:{"^":"h;i:length=","%":"TimeRanges"},
aW:{"^":"h;",
gN:function(a){return W.bN(a.target)},
"%":"Touch"},
nV:{"^":"kE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aW]},
$isj:1,
$asj:function(){return[W.aW]},
$isq:1,
$asq:function(){return[W.aW]},
$ask:function(){return[W.aW]},
$isi:1,
$asi:function(){return[W.aW]},
$asm:function(){return[W.aW]},
"%":"TouchList"},
nW:{"^":"h;i:length=","%":"TrackDefaultList"},
nZ:{"^":"h;",
f6:[function(a){return a.parentNode()},"$0","gat",1,0,4],
eM:[function(a){return a.previousNode()},"$0","gb2",1,0,4],
"%":"TreeWalker"},
en:{"^":"L;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
o0:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
o2:{"^":"h;m:x=,F:z=","%":"VRStageBoundsPoint"},
cA:{"^":"ib;G:height},H:width}",$iscA:1,"%":"HTMLVideoElement"},
o4:{"^":"E;i:length=","%":"VideoTrackList"},
aX:{"^":"R;",
geo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.u("deltaY is not supported"))},
$isaX:1,
"%":"WheelEvent"},
jg:{"^":"E;",
gea:function(a){var z,y
z=P.b2
y=new P.J(0,$.t,null,[z])
this.dR(a)
this.dY(a,W.eN(new W.jh(new P.kv(y,[z]))))
return y},
dY:function(a,b){return a.requestAnimationFrame(H.a0(b,1))},
dR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
jh:{"^":"f:0;a",
$1:function(a){this.a.ad(0,a)}},
o5:{"^":"E;"},
o9:{"^":"r;J:name=,bE:namespaceURI=","%":"Attr"},
oa:{"^":"kK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.X]},
$isj:1,
$asj:function(){return[W.X]},
$isq:1,
$asq:function(){return[W.X]},
$ask:function(){return[W.X]},
$isi:1,
$asi:function(){return[W.X]},
$asm:function(){return[W.X]},
"%":"CSSRuleList"},
ob:{"^":"hm;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa6)return!1
return a.left===z.gcm(b)&&a.top===z.gcA(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.ex(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcB:function(a){return new P.ah(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oc:{"^":"kM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isq:1,
$asq:function(){return[W.bb]},
$ask:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$asm:function(){return[W.bb]},
"%":"GamepadList"},
of:{"^":"kO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$ask:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asm:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
og:{"^":"kQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isq:1,
$asq:function(){return[W.aU]},
$ask:function(){return[W.aU]},
$isi:1,
$asi:function(){return[W.aU]},
$asm:function(){return[W.aU]},
"%":"SpeechRecognitionResultList"},
oh:{"^":"kS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$isq:1,
$asq:function(){return[W.bi]},
$ask:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$asm:function(){return[W.bi]},
"%":"StyleSheetList"},
jr:{"^":"co;dT:a<",
A:function(a,b){var z,y,x,w,v
for(z=this.gM(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gM:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.e(v)
if(u.gbE(v)==null)y.push(u.gJ(v))}return y},
$asco:function(){return[P.n,P.n]},
$asU:function(){return[P.n,P.n]}},
jA:{"^":"jr;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gM(this).length}},
aY:{"^":"bJ;a,b,c,$ti",
aX:function(a,b,c,d){return W.a8(this.a,this.b,a,!1,H.v(this,0))}},
Z:{"^":"aY;a,b,c,$ti"},
jC:{"^":"iW;a,b,c,d,e,$ti",
dF:function(a,b,c,d,e){this.e5()},
c1:function(a){if(this.b==null)return
this.e6()
this.b=null
this.d=null
return},
e5:function(){var z=this.d
if(z!=null&&this.a<=0)J.fg(this.b,this.c,z,!1)},
e6:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ff(x,this.c,z,!1)}},
p:{
a8:function(a,b,c,d,e){var z=c==null?null:W.eN(new W.jD(c))
z=new W.jC(0,a,b,z,!1,[e])
z.dF(a,b,c,!1,e)
return z}}},
jD:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
cD:{"^":"d;cL:a<",
dG:function(a){var z,y
z=$.$get$cE()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.O[y],W.lq())
for(y=0;y<12;++y)z.j(0,C.q[y],W.lr())}},
a5:function(a){return $.$get$ev().v(0,W.aJ(a))},
a_:function(a,b,c){var z,y,x
z=W.aJ(a)
y=$.$get$cE()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
eu:function(a){var z,y
z=document.createElement("a")
y=new W.kj(z,window.location)
y=new W.cD(y)
y.dG(a)
return y},
od:[function(a,b,c,d){return!0},"$4","lq",16,0,9],
oe:[function(a,b,c,d){var z,y,x,w,v
z=d.gcL()
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
return z},"$4","lr",16,0,9]}},
m:{"^":"d;$ti",
gI:function(a){return new W.dB(a,this.gi(a),-1,null,[H.bq(this,a,"m",0)])}},
dT:{"^":"d;a",
a5:function(a){return C.c.bS(this.a,new W.ir(a))},
a_:function(a,b,c){return C.c.bS(this.a,new W.iq(a,b,c))}},
ir:{"^":"f:0;a",
$1:function(a){return a.a5(this.a)}},
iq:{"^":"f:0;a,b,c",
$1:function(a){return a.a_(this.a,this.b,this.c)}},
kk:{"^":"d;cL:d<",
dI:function(a,b,c,d){var z,y,x
this.a.P(0,c)
z=b.b7(0,new W.kl())
y=b.b7(0,new W.km())
this.b.P(0,z)
x=this.c
x.P(0,C.x)
x.P(0,y)},
a5:function(a){return this.a.v(0,W.aJ(a))},
a_:["d6",function(a,b,c){var z,y
z=W.aJ(a)
y=this.c
if(y.v(0,H.c(z)+"::"+b))return this.d.e9(c)
else if(y.v(0,"*::"+b))return this.d.e9(c)
else{y=this.b
if(y.v(0,H.c(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.c(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
kl:{"^":"f:0;",
$1:function(a){return!C.c.v(C.q,a)}},
km:{"^":"f:0;",
$1:function(a){return C.c.v(C.q,a)}},
kw:{"^":"kk;e,a,b,c,d",
a_:function(a,b,c){if(this.d6(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cX(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
eG:function(){var z=P.n
z=new W.kw(P.cn(C.p,z),P.Y(null,null,null,z),P.Y(null,null,null,z),P.Y(null,null,null,z),null)
z.dI(null,new H.i9(C.p,new W.kx(),[H.v(C.p,0),null]),["TEMPLATE"],null)
return z}}},
kx:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.c(a)}},
ku:{"^":"d;",
a5:function(a){var z=J.o(a)
if(!!z.$ise_)return!1
z=!!z.$isB
if(z&&W.aJ(a)==="foreignObject")return!1
if(z)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.i.d_(b,"on"))return!1
return this.a5(a)}},
dB:{"^":"d;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.b4(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(a){return this.d}},
ju:{"^":"d;a",$isE:1,p:{
jv:function(a){if(a===window)return a
else return new W.ju(a)}}},
dS:{"^":"d;"},
nk:{"^":"d;"},
o_:{"^":"d;"},
kj:{"^":"d;a,b"},
eJ:{"^":"d;a",
bf:function(a){new W.kH(this).$2(a,null)},
aa:function(a,b){if(b==null)J.d2(a)
else b.removeChild(a)},
e0:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cX(a)
x=y.gdT().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.P(t)}v="element unprintable"
try{v=J.aH(a)}catch(t){H.P(t)}try{u=W.aJ(a)
this.e_(a,b,z,v,u,y,x)}catch(t){if(H.P(t) instanceof P.ad)throw t
else{this.aa(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
e_:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aa(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a5(a)){this.aa(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.aa(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gM(f)
y=H.y(z.slice(0),[H.v(z,0)])
for(x=f.gM(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a_(a,J.fS(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+w+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$ise8)this.bf(a.content)}},
kH:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.e0(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aa(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fA(z)}catch(w){H.P(w)
v=z
if(x){u=J.e(v)
if(u.gat(v)!=null){u.gat(v)
u.gat(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
jt:{"^":"h+hf;"},
jw:{"^":"h+k;"},
jx:{"^":"jw+m;"},
jy:{"^":"h+k;"},
jz:{"^":"jy+m;"},
jF:{"^":"h+k;"},
jG:{"^":"jF+m;"},
jW:{"^":"h+k;"},
jX:{"^":"jW+m;"},
k3:{"^":"h+U;"},
k4:{"^":"h+U;"},
k5:{"^":"h+k;"},
k6:{"^":"k5+m;"},
k7:{"^":"h+k;"},
k8:{"^":"k7+m;"},
kb:{"^":"h+k;"},
kc:{"^":"kb+m;"},
ki:{"^":"h+U;"},
eD:{"^":"E+k;"},
eE:{"^":"eD+m;"},
kn:{"^":"h+k;"},
ko:{"^":"kn+m;"},
kr:{"^":"h+U;"},
ky:{"^":"h+k;"},
kz:{"^":"ky+m;"},
eH:{"^":"E+k;"},
eI:{"^":"eH+m;"},
kD:{"^":"h+k;"},
kE:{"^":"kD+m;"},
kJ:{"^":"h+k;"},
kK:{"^":"kJ+m;"},
kL:{"^":"h+k;"},
kM:{"^":"kL+m;"},
kN:{"^":"h+k;"},
kO:{"^":"kN+m;"},
kP:{"^":"h+k;"},
kQ:{"^":"kP+m;"},
kR:{"^":"h+k;"},
kS:{"^":"kR+m;"}}],["","",,P,{"^":"",
eT:function(a){return a},
W:function(a){var z,y,x,w,v
if(a==null)return
z=P.H()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
le:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cW(a,new P.lf(z))
return z},
lg:function(a){var z,y
z=new P.J(0,$.t,null,[null])
y=new P.cB(z,[null])
a.then(H.a0(new P.lh(y),1))["catch"](H.a0(new P.li(y),1))
return z},
dt:function(){var z=$.ds
if(z==null){z=J.bW(window.navigator.userAgent,"Opera",0)
$.ds=z}return z},
hj:function(){var z,y
z=$.dp
if(z!=null)return z
y=$.dq
if(y==null){y=J.bW(window.navigator.userAgent,"Firefox",0)
$.dq=y}if(y)z="-moz-"
else{y=$.dr
if(y==null){y=P.dt()!==!0&&J.bW(window.navigator.userAgent,"Trident/",0)
$.dr=y}if(y)z="-ms-"
else z=P.dt()===!0?"-o-":"-webkit-"}$.dp=z
return z},
ji:{"^":"d;",
cj:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
b6:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.bz(y,!0)
x.df(y,!0)
return x}if(a instanceof RegExp)throw H.b(P.cz("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lg(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cj(a)
x=this.b
u=x.length
if(v>=u)return H.a(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.H()
z.a=t
if(v>=u)return H.a(x,v)
x[v]=t
this.ex(a,new P.jk(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cj(s)
x=this.b
if(v>=x.length)return H.a(x,v)
t=x[v]
if(t!=null)return t
u=J.a1(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.a(x,v)
x[v]=t
if(typeof r!=="number")return H.z(r)
x=J.aA(t)
q=0
for(;q<r;++q)x.j(t,q,this.b6(u.h(s,q)))
return t}return a}},
jk:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.b6(b)
J.fe(z,a,y)
return y}},
lf:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
jj:{"^":"ji;a,b,c",
ex:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lh:{"^":"f:0;a",
$1:function(a){return this.a.ad(0,a)}},
li:{"^":"f:0;a",
$1:function(a){return this.a.ei(a)}}}],["","",,P,{"^":"",nC:{"^":"E;R:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nX:{"^":"E;R:error=","%":"IDBTransaction"},o3:{"^":"L;N:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lH:function(a){return Math.sqrt(a)},
ew:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ah:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
C:function(a,b){var z,y
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
z=J.ac(this.a)
y=J.ac(this.b)
return P.jY(P.ew(P.ew(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ah(y,C.a.l(z,x),this.$ti)},
D:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.D()
if(typeof x!=="number")return H.z(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.D()
if(typeof y!=="number")return H.z(y)
return new P.ah(z-x,w-y,this.$ti)}},
kd:{"^":"d;$ti"},
a6:{"^":"kd;$ti"}}],["","",,P,{"^":"",lP:{"^":"ar;N:target=","%":"SVGAElement"},mn:{"^":"B;m:x=,n:y=","%":"SVGFEBlendElement"},mo:{"^":"B;m:x=,n:y=","%":"SVGFEColorMatrixElement"},mp:{"^":"B;m:x=,n:y=","%":"SVGFEComponentTransferElement"},mq:{"^":"B;m:x=,n:y=","%":"SVGFECompositeElement"},mr:{"^":"B;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},ms:{"^":"B;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},mt:{"^":"B;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},mu:{"^":"B;m:x=,n:y=","%":"SVGFEFloodElement"},mv:{"^":"B;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},mw:{"^":"B;m:x=,n:y=","%":"SVGFEImageElement"},mx:{"^":"B;m:x=,n:y=","%":"SVGFEMergeElement"},my:{"^":"B;m:x=,n:y=","%":"SVGFEMorphologyElement"},mz:{"^":"B;m:x=,n:y=","%":"SVGFEOffsetElement"},mA:{"^":"B;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},mB:{"^":"B;m:x=,n:y=","%":"SVGFESpecularLightingElement"},mC:{"^":"B;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},mD:{"^":"B;m:x=,n:y=","%":"SVGFETileElement"},mE:{"^":"B;m:x=,n:y=","%":"SVGFETurbulenceElement"},mJ:{"^":"B;m:x=,n:y=","%":"SVGFilterElement"},mM:{"^":"ar;m:x=,n:y=","%":"SVGForeignObjectElement"},hF:{"^":"ar;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ar:{"^":"B;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mT:{"^":"ar;m:x=,n:y=","%":"SVGImageElement"},mY:{"^":"k_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isj:1,
$asj:function(){return[P.ck]},
$ask:function(){return[P.ck]},
$isi:1,
$asi:function(){return[P.ck]},
$asm:function(){return[P.ck]},
"%":"SVGLengthList"},n3:{"^":"B;m:x=,n:y=","%":"SVGMaskElement"},nl:{"^":"ka;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isj:1,
$asj:function(){return[P.cs]},
$ask:function(){return[P.cs]},
$isi:1,
$asi:function(){return[P.cs]},
$asm:function(){return[P.cs]},
"%":"SVGNumberList"},nq:{"^":"B;m:x=,n:y=","%":"SVGPatternElement"},ns:{"^":"h;m:x=,n:y=","%":"SVGPoint"},nt:{"^":"h;i:length=","%":"SVGPointList"},nx:{"^":"h;m:x=,n:y=","%":"SVGRect"},ny:{"^":"hF;m:x=,n:y=","%":"SVGRectElement"},e_:{"^":"B;",$ise_:1,"%":"SVGScriptElement"},nM:{"^":"kt;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isj:1,
$asj:function(){return[P.n]},
$ask:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"SVGStringList"},B:{"^":"aq;",
V:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.dS])
z.push(W.eu(null))
z.push(W.eG())
z.push(new W.ku())
c=new W.eJ(new W.dT(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.u).em(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.V(w)
u=z.ga0(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaY:function(a){return new W.Z(a,"change",!1,[W.L])},
gaZ:function(a){return new W.Z(a,"mousedown",!1,[W.R])},
gb_:function(a){return new W.Z(a,"mousemove",!1,[W.R])},
gb0:function(a){return new W.Z(a,"mouseup",!1,[W.R])},
gb1:function(a){return new W.Z(a,"mousewheel",!1,[W.aX])},
$isB:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nN:{"^":"ar;m:x=,n:y=","%":"SVGSVGElement"},j6:{"^":"ar;","%":"SVGTextPathElement;SVGTextContentElement"},nR:{"^":"j6;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nY:{"^":"kG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isj:1,
$asj:function(){return[P.cy]},
$ask:function(){return[P.cy]},
$isi:1,
$asi:function(){return[P.cy]},
$asm:function(){return[P.cy]},
"%":"SVGTransformList"},o1:{"^":"ar;m:x=,n:y=","%":"SVGUseElement"},jZ:{"^":"h+k;"},k_:{"^":"jZ+m;"},k9:{"^":"h+k;"},ka:{"^":"k9+m;"},ks:{"^":"h+k;"},kt:{"^":"ks+m;"},kF:{"^":"h+k;"},kG:{"^":"kF+m;"}}],["","",,P,{"^":"",lU:{"^":"h;i:length=","%":"AudioBuffer"},lV:{"^":"js;",
h:function(a,b){return P.W(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.y([],[P.n])
this.A(a,new P.h3(z))
return z},
gi:function(a){return a.size},
$asU:function(){return[P.n,null]},
"%":"AudioParamMap"},h3:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},lW:{"^":"h;aV:enabled=","%":"AudioTrack"},lX:{"^":"E;i:length=","%":"AudioTrackList"},h4:{"^":"E;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nn:{"^":"h4;i:length=","%":"OfflineAudioContext"},js:{"^":"h+U;"}}],["","",,P,{"^":"",nA:{"^":"h;",
bQ:function(a,b){return a.activeTexture(b)},
bT:function(a,b,c){return a.attachShader(b,c)},
bU:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c4:function(a,b){return a.compileShader(b)},
c5:function(a){return a.createBuffer()},
c6:function(a){return a.createProgram()},
c7:function(a,b){return a.createShader(b)},
c8:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.W(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cs:function(a,b,c){return a.pixelStorei(b,c)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eT(g))
return}if(!!z.$iscd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscA)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscb)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.c0("Incorrect number or type of arguments"))},
cv:function(a,b,c,d,e,f,g){return this.b4(a,b,c,d,e,f,g,null,null,null)},
cw:function(a,b,c,d){return a.texParameterf(b,c,d)},
cz:function(a,b,c,d){return a.texParameteri(b,c,d)},
cC:function(a,b,c){return a.uniform1f(b,c)},
cD:function(a,b,c){return a.uniform1fv(b,c)},
cE:function(a,b,c){return a.uniform1i(b,c)},
cF:function(a,b,c){return a.uniform1iv(b,c)},
cG:function(a,b,c){return a.uniform2fv(b,c)},
cH:function(a,b,c){return a.uniform3fv(b,c)},
cI:function(a,b,c){return a.uniform4fv(b,c)},
cJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cM:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},nB:{"^":"h;",
ec:function(a,b){return a.beginTransformFeedback(b)},
ef:function(a,b){return a.bindVertexArray(b)},
en:function(a){return a.createVertexArray()},
ep:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eq:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
er:function(a){return a.endTransformFeedback()},
eX:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eZ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bQ:function(a,b){return a.activeTexture(b)},
bT:function(a,b,c){return a.attachShader(b,c)},
bU:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c4:function(a,b){return a.compileShader(b)},
c5:function(a){return a.createBuffer()},
c6:function(a){return a.createProgram()},
c7:function(a,b){return a.createShader(b)},
c8:function(a){return a.createTexture()},
ca:function(a,b){return a.depthMask(b)},
cb:function(a,b){return a.disable(b)},
cc:function(a,b,c,d){return a.drawArrays(b,c,d)},
cd:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ce:function(a,b){return a.enable(b)},
cf:function(a,b){return a.enableVertexAttribArray(b)},
aw:function(a){return P.W(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cs:function(a,b,c){return a.pixelStorei(b,c)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eT(g))
return}if(!!z.$iscd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscA)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscb)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.c0("Incorrect number or type of arguments"))},
cv:function(a,b,c,d,e,f,g){return this.b4(a,b,c,d,e,f,g,null,null,null)},
cw:function(a,b,c,d){return a.texParameterf(b,c,d)},
cz:function(a,b,c,d){return a.texParameteri(b,c,d)},
cC:function(a,b,c){return a.uniform1f(b,c)},
cD:function(a,b,c){return a.uniform1fv(b,c)},
cE:function(a,b,c){return a.uniform1i(b,c)},
cF:function(a,b,c){return a.uniform1iv(b,c)},
cG:function(a,b,c){return a.uniform2fv(b,c)},
cH:function(a,b,c){return a.uniform3fv(b,c)},
cI:function(a,b,c){return a.uniform4fv(b,c)},
cJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cM:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nK:{"^":"kq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.A(b,a,null,null,null))
return P.W(a.item(b))},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isj:1,
$asj:function(){return[P.bD]},
$ask:function(){return[P.bD]},
$isi:1,
$asi:function(){return[P.bD]},
$asm:function(){return[P.bD]},
"%":"SQLResultSetRowList"},kp:{"^":"h+k;"},kq:{"^":"kp+m;"}}],["","",,G,{"^":"",
jl:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.c.af(z,"\n")},
eq:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.c7(a,b)
z.bi(a,y,c)
z.c4(a,y)
x=z.bd(a,y,35713)
if(x!=null&&J.D(x,!1)){w=z.bc(a,y)
P.a3("E:Compilation failed:")
P.a3("E:"+G.jl(c))
P.a3("E:Failure:")
P.a3(C.i.l("E:",w))
throw H.b(w)}return y},
ba:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bY(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bZ(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.d0(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
hw:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bY(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.bZ(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hx:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bY(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bZ(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.d0(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.fE(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hv:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.b4(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.b4(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.b4(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.b4(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ag(z,z.r,null,null,[H.v(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.G]],v=[P.ay],u=[T.am],t=[T.l],s=[T.ai];y.q();){r=y.d
if(!x.ap(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.eX>0)H.ap("I: "+q)
continue}p=z.h(0,r)
switch($.$get$a_().h(0,r).a){case"vec2":b.a6(r,G.hw(H.bs(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a6(r,G.ba(H.bs(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a6(r,G.hx(H.bs(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a6(r,new Float32Array(H.bO(H.bs(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a6(r,G.hv(H.bs(p,"$isi",w,"$asi"),null),4)
break}}},
as:{"^":"d;aV:c>"},
bL:{"^":"as;d,a,b,c",
aC:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.c(new H.em(H.ln(this),null))+"}["+H.c(this.a)+"]"],[P.n])
for(y=this.d,x=new H.ag(y,y.r,null,null,[H.v(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.c.af(z,"\n")}},
h5:{"^":"e1;"},
h8:{"^":"d;a,b",
cg:function(a,b,c){J.fv(this.a,b)
if(c>0)J.fZ(this.a,b,c)},
cP:function(a,b,c,d,e,f,g,h){J.bV(this.a,34962,b)
J.h_(this.a,c,d,e,!1,g,h)}},
hz:{"^":"d;a,b,c,d,e"},
ht:{"^":"d;a,b,c"},
hu:{"^":"d;a,b,c,d"},
hE:{"^":"d;a,b,c,d,e",
bo:function(a){switch($.$get$a_().h(0,a).a){case"vec2":this.e.j(0,a,H.y([],[T.ai]))
break
case"vec3":this.e.j(0,a,H.y([],[T.l]))
break
case"vec4":this.e.j(0,a,H.y([],[T.am]))
break
case"float":this.e.j(0,a,H.y([],[P.ay]))
break
case"uvec4":this.e.j(0,a,H.y([],[[P.i,P.G]]))
break}},
dc:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.ht(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.C)(a),++w)z.push(a[w].ac(0))},
d8:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x)z.push(b[x].ac(0))},
d9:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x)z.push(b[x].ac(0))},
dd:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.hu(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.C)(a),++w)z.push(a[w].ac(0))},
dj:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.y(x,[P.G])
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
for(y=this.e,x=new H.ag(y,y.r,null,null,[H.v(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$a_().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.af(z," ")}},
cl:{"^":"as;"},
dV:{"^":"cl;x,y,z,Q,d,a,b,c",
aB:function(a,b){var z,y,x,w
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
z=b+8
w=this.y.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+9
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+10
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+12
z=this.z.a
y=z[0]
if(w>=x)return H.a(a,w)
a[w]=y
y=b+13
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+14
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+7
if(z>=x)return H.a(a,z)
a[z]=this.Q},
k:function(a){return"PL: p:"+H.c(this.x)+"  r:"+this.Q}},
du:{"^":"cl;x,y,z,Q,ch,cx,d,a,b,c",
aB:function(a,b){var z,y,x,w
z=b+4
y=this.x.a
x=y[0]
w=a.length
if(z>=w)return H.a(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.a(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.a(a,z)
a[z]=y
y=b+8
z=this.y.a
x=z[0]
if(y>=w)return H.a(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.a(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.a(a,y)
a[y]=z
z=b+12
y=this.z.a
x=y[0]
if(z>=w)return H.a(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.a(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.a(a,z)
a[z]=y},
k:function(a){return"DL: p:"+H.c(this.x)}},
e2:{"^":"cl;x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,a,b,c",
aB:function(a,b){var z,y,x,w
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
z=Math.cos(H.eS(this.cx))
if(w>=x)return H.a(a,w)
a[w]=z
z=b+15
if(z>=x)return H.a(a,z)
a[z]=this.cy},
k:function(a){return"SL: p:"+H.c(this.x)+"  d:"+H.c(this.y)+"  r:"+this.ch+"  a:"+H.c(this.cx)}},
hJ:{"^":"bL;x,y,z,d,a,b,c",
aC:function(){var z,y,x
z=this.y
y=this.z
G.hK(z,y,this.x)
x=this.d
x.j(0,"uLightDescs",z)
x.j(0,"uLightTypes",y)
return x},
p:{
hK:function(a,b,c){var z,y,x,w,v
C.r.ci(a,0,a.length,0)
C.r.ci(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.C)(c),++x){w=c[x]
if(J.cY(w)===!0){w.aB(a,y*16)
v=w.d
if(y>=4)return H.a(b,y)
b[y]=v;++y}}}}},
ea:{"^":"d;a,b,c"},
e9:{"^":"d;a,b,c"},
ia:{"^":"bL;d,a,b,c",
dn:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$dc())
z.j(0,"cStencilFunc",$.$get$e4())},
p:{
dO:function(a){var z=new G.ia(P.H(),a,!1,!0)
z.dn(a)
return z}}},
dP:{"^":"as;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bn:function(a,b,c){var z,y
C.i.an(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bV(z.a,34962,y)
J.cS(z.a,34962,b,35048)},
am:function(a){this.ch=a
this.bn("aPosition",a,3)},
dk:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a6:function(a,b,c){var z,y,x,w,v
z=J.cT(a,0)===105
if(z&&this.z===0)this.z=C.b.d7(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bv(x.a))
this.bn(a,b,c)
w=$.$get$a_().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bu(x.a,this.e)
x.cg(0,v,z?1:0)
x.cP(0,y.h(0,a),v,w.bp(),5126,!1,0,0)},
bm:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bv(y.a))
this.am(a)
x=$.$get$a_().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bu(y.a,this.e)
y.cg(0,w,0)
y.cP(0,z.h(0,"aPosition"),w,x.bp(),5126,!1,0,0)},
a7:function(a){var z,y,x
z=this.ch.length
if(z<768){this.cx=new Uint8Array(H.bO(a))
this.Q=5121}else if(z<196608){this.cx=new Uint16Array(H.bO(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bO(a))
this.Q=5125}z=this.d
J.bu(z.a,this.e)
y=this.y
x=this.cx
J.bV(z.a,34963,y)
J.cS(z.a,34963,x,35048)},
da:function(a){this.y=J.bv(this.d.a)
this.a7(a)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ag(z,z.r,null,null,[H.v(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.c(w)+":"+z.h(0,w).length)}return"MESH["+H.c(this.a)+"] "+C.c.af(y,"  ")},
p:{
ic:function(a,b,c,d){return new G.dP(b,J.cU(b.a),c,P.H(),d,null,0,-1,null,null,P.H(),"meshdata:"+a,!1,!0)}}},
iu:{"^":"bL;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
de:function(a,b){var z
if(typeof a!=="number")return a.f0()
if(typeof b!=="number")return H.z(b)
z=a/b
if(this.z===z)return
this.z=z
this.bs()},
bs:function(){var z,y,x,w,v,u
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
aC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.l(new Float32Array(3))
u.O(x,w,v)
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
y=J.o(t)
x=!!y.$isam
q=x?y.gag(t):1
if(!!y.$isl){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.z(t)
x=z[4]
if(typeof s!=="number")return H.z(s)
w=z[8]
if(typeof r!=="number")return H.z(r)
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
c.cp(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
iI:{"^":"as;d,e,f,r,x,y,z,Q,ch,a,b,c",
dt:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
x.j(0,t,J.d1(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
x.j(0,t,J.d1(w.a,v,t))}},
dA:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ag(y,y.r,null,null,[H.v(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.ap(0,v))x.push(v)}for(z=this.x,y=new P.cF(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
dE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ag(b,b.r,null,null,[H.v(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.cT(t,0)){case 117:if(w.ap(0,t)){s=b.h(0,t)
if(v.ap(0,t))H.ap("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$a_().h(0,t)
if(r==null)H.O("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.c_(x.a,q,s)
else if(!!J.o(s).$ishO)J.fX(x.a,q,s)
break
case"float":if(r.c===0)J.fV(x.a,q,s)
else if(!!J.o(s).$isc8)J.fW(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a2(s,"$isI").a
J.da(x.a,q,!1,p)}else if(!!J.o(s).$isc8)J.da(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a2(s,"$isak").a
J.d9(x.a,q,!1,p)}else if(!!J.o(s).$isc8)J.d9(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.d8(o,q,H.a2(s,"$isam").a)
else J.d8(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.d7(o,q,H.a2(s,"$isl").a)
else J.d7(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.d6(o,q,H.a2(s,"$isai").a)
else J.d6(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.z(p)
J.cQ(x.a,33984+p)
p=H.a2(s,"$iscx").b
J.b5(x.a,3553,p)
p=this.ch
J.c_(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.z(p)
J.cQ(x.a,33984+p)
p=H.a2(s,"$iscx").b
J.b5(x.a,34067,p)
p=this.ch
J.c_(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.ap("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.D(s,!0)
o=x.a
if(p)J.b6(o,2929)
else J.bX(o,2929)
break
case"cStencilFunc":H.a2(s,"$isea")
p=s.a
o=x.a
if(p===1281)J.bX(o,2960)
else{J.b6(o,2960)
o=s.b
n=s.c
J.fP(x.a,p,o,n)}break
case"cDepthWrite":J.fq(x.a,s)
break
case"cBlendEquation":H.a2(s,"$ise9")
p=s.a
o=x.a
if(p===1281)J.bX(o,3042)
else{J.b6(o,3042)
o=s.b
n=s.c
J.fk(x.a,o,n)
J.fj(x.a,p)}break}++u
break}}m=P.dw(0,0,0,Date.now()-new P.bz(z,!1).a,0,0)
""+u
m.k(0)},
di:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fY(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bv()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x){w=b[x]
this.dE(w.a,w.aC())}y=this.Q
y.ab(0)
for(v=a.cy,u=new H.ag(v,v.r,null,null,[H.v(v,0)]),u.c=v.e;u.q();)y.L(0,u.d)
t=this.dA()
if(t.length!==0)P.a3("E:"+(H.c(this.a)+" "+a.f+": uninitialized inputs: "+H.c(t)))
y=a.d
v=a.e
J.bu(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.dk()
u=a.Q
r=a.z
if(s)J.fh(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.fu(q,v,y,u,0,r)
else J.ft(q,v,y,u,0)}else{u=z.a
if(r>1)J.fs(u,v,0,y,r)
else J.fr(u,v,0,y)}if(s)J.fw(z.a)},
p:{
cu:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.Y(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.fo(b.a)
u=G.eq(b.a,35633,y)
J.cR(b.a,v,u)
t=G.eq(b.a,35632,x)
J.cR(b.a,v,t)
if(w.length>0)J.fT(b.a,v,w,35980)
J.fL(b.a,v)
if(J.fK(b.a,v,35714)!==!0)H.O(J.fJ(b.a,v))
z=new G.iI(b,c,d,v,P.cn(c.c,null),P.H(),P.H(),z,null,a,!1,!0)
z.dt(a,b,c,d)
return z}}},
x:{"^":"d;a,b,c",
bp:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iO:{"^":"d;a,b,c,d,e,f,r,x",
aA:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.C)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.ax(y)},
Y:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.C)(a),++x)y.push(a[x])
C.c.ax(y)},
al:function(a){var z,y,x
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.C)(a),++x)y.push(a[x])
C.c.ax(y)},
br:function(a,b){this.b=this.bt(!0,a,b)},
aD:function(a){return this.br(a,null)},
bq:function(a,b){this.b=this.bt(!1,a,b)},
du:function(a){return this.bq(a,null)},
bt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
s=$.$get$a_().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$a_().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$a_().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$a_().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
if(c!=null)C.c.P(w,c)
if(a)w.push("void main(void) {")
C.c.P(w,b)
if(a)w.push("}")
return C.c.af(w,"\n")},
p:{
aT:function(a){return new G.iO(a,null,[],[],[],[],0,P.H())}}},
e1:{"^":"as;",
bh:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c},
eH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.l(new Float32Array(3))
b.O(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
t=v.D(0,a)
t.E(0)
s=b.c9(t)
s.E(0)
r=t.c9(s)
r.E(0)
u=s.aU(v)
q=r.aU(v)
v=t.aU(v)
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
co:function(a){return this.eH(a,null)}},
j7:{"^":"d;a,b,c,d,e,f,r",
dl:function(a,b){var z=this.e
if(z!==1)J.fR(a.a,b,34046,z)
J.d4(a.a,b,10240,this.r)
J.d4(a.a,b,10241,this.f)}},
cx:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hL:{"^":"cx;f,a,b,c,d,e",
dv:function(a){var z,y
z=this.d
y=this.c
J.b5(z.a,y,this.b)
J.fQ(z.a,y,0,6408,6408,5121,a)}}}],["","",,Y,{"^":"",
hM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.hE(!1,[],[],[],P.H())
z.bo("aTexUV")
z.bo("aNormal")
y=P.H()
x=J.d3(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.dY("\\s+",!0,!1)
r=P.dY("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.C)(x),++p){o=J.fN(x[p],s," ")
n=H.lL(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.a(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.a(m,0)
l=m[0]
if(J.D(l,"g")){if(1>=o)return H.a(m,1)
y.j(0,m[1],w.length)}else if(J.D(l,"v")){if(1>=o)return H.a(m,1)
l=P.ao(m[1],null)
if(2>=o)return H.a(m,2)
k=P.ao(m[2],null)
if(3>=o)return H.a(m,3)
o=P.ao(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.l(j))}else if(J.D(l,"vt")){if(1>=o)return H.a(m,1)
l=P.ao(m[1],null)
if(2>=o)return H.a(m,2)
o=P.ao(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.ai(k))}else if(J.D(l,"vn")){if(1>=o)return H.a(m,1)
l=P.ao(m[1],null)
if(2>=o)return H.a(m,2)
k=P.ao(m[2],null)
if(3>=o)return H.a(m,3)
o=P.ao(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.l(j))}else if(J.D(l,"f")){if(o!==4&&o!==5){H.ap("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.d3(m[f],"/")
for(;e.length<3;)e.push("")
d=J.bt(P.cN(e[0],null,null),1)
if(1>=e.length)return H.a(e,1)
if(J.D(e[1],""))c=-1
else{if(1>=e.length)return H.a(e,1)
c=J.bt(P.cN(e[1],null,null),1)}if(2>=e.length)return H.a(e,2)
if(J.D(e[2],""))b=-1
else{if(2>=e.length)return H.a(e,2)
b=J.bt(P.cN(e[2],null,null),1)}o=w.length
if(J.aF(d,o)){if(d>>>0!==d||d>=o)return H.a(w,d)
i.push(w[d])}else i.push(new T.l(new Float32Array(3)))
o=J.o(c)
if(!o.C(c,-1)&&o.X(c,u.length)){if(c>>>0!==c||c>=u.length)return H.a(u,c)
g.push(u[c])}else{H.ap("problem uv "+f+" "+H.c(c))
g.push(new T.ai(new Float32Array(2)))}o=J.o(b)
if(!o.C(b,-1)&&o.X(b,v.length)){if(b>>>0!==b||b>=v.length)return H.a(v,b)
h.push(v[b])}else{H.ap("problem normals "+f+" "+H.c(b))
h.push(new T.l(new Float32Array(3)))}}if(o===4)z.dc(i)
else z.dd(i)
z.d9("aNormal",h)
z.d8("aTexUV",g)}}P.a3("loaded ("+P.dw(0,0,0,Date.now()-new P.bz(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",
jc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.o.ev(y/c)
w=-x
v=d.aj(y).aj(1/z[1])
u=[]
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.l(z)
z[0]=t
z[1]=0
z[2]=s
r.L(0,v)
u.push(r)
z=new Float32Array(3)
r=new T.l(z)
z[0]=t
z[1]=0
z[2]=s
r.bl(0,v)
u.push(r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
u.push(new T.l(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
u.push(new T.l(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
u.push(new T.l(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
u.push(new T.l(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
u.push(new T.l(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
u.push(new T.l(o))}}a.am(G.ba(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.y(z,[P.G])
for(z=u.length,r=n.length,q=0;q<z;++q){if(q>=r)return H.a(n,q)
n[q]=q}a.a7(n)},
hG:function(a){var z,y,x
z=a.a
y=z[0]
if(y!==0){x=z[1]
if(x!==0){z=new T.l(new Float32Array(3))
z.O(-x,y,0)
return z}z=z[2]
if(z!==0){x=new T.l(new Float32Array(3))
x.O(-z,0,y)
return x}z=new T.l(new Float32Array(3))
z.O(0,1,1)
return z}else{y=z[1]
if(y===0){z=new T.l(new Float32Array(3))
z.O(1,1,0)
return z}z=z[2]
if(z===0){z=new T.l(new Float32Array(3))
z.O(1,0,1)
return z}x=new T.l(new Float32Array(3))
x.O(0,-z,y)
return x}},
je:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.l(new Float32Array(3))
z.u(c)
z.E(0)
y=b.l(0,z.aj(d))
x=[b,y]
w=R.hG(c)
w.E(0)
w.bg(0,Math.tan(H.eS(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.l(z)
u.u(w)
t=new Float32Array(4)
new T.ct(t).cU(c,v*2*3.141592653589793/8)
s=z[0]
r=z[1]
q=z[2]
p=t[0]
o=t[1]
n=t[2]
m=t[3]
l=m*s+o*q-n*r
k=m*r+n*s-p*q
j=m*q+p*r-o*s
t=-p
i=t*s-o*r-n*q
h=-n
g=-o
z[0]=l*m+i*t+k*h-j*g
z[1]=k*m+i*g+j*t-l*h
z[2]=j*m+i*h+l*g-k*t
u.L(0,y)
x.push(u)}f=[]
for(v=1;v<x.length;++v){f.push(0)
f.push(v)}for(v=3;z=x.length,v<z;++v){f.push(v-1)
f.push(v)}f.push(z-1)
f.push(2)
for(v=2;v<x.length;++v)if(v%2===0){f.push(1)
f.push(v)}a.am(G.ba(x,null))
a.a7(f)},
jd:function(a,b,c){var z,y,x,w,v,u,t
z=[]
y=[]
for(x=$.$get$dC(),w=0;w<12;++w){v=x[w]
y.push(z.length)
y.push(12)
u=v.ai(0,c)
b.toString
t=new T.l(new Float32Array(3))
t.u(b)
t.L(0,u)
z.push(t)}z.push(b)
a.am(G.ba(z,null))
a.a7(y)},
iT:{"^":"d;",
dw:function(a,b,c){var z,y,x
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
x=this.dH(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dH:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.jB("span",null)
y=J.cZ(v)
J.e(y).sH(y,"1px")
C.n.sG(y,""+d+"px")
C.n.seu(y,"left")
x=C.n.bz(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
iU:{"^":"iT;e,f,a,b,c,d",
dC:function(a,b){var z,y,x,w,v;++this.e
if(J.aF(J.bt(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eW(z,2)+" fps"
y=this.c;(y&&C.E).cV(y,b)
x=C.b.a4(30*C.o.eg(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cZ(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dB:function(a){return this.dC(a,"")}}}],["","",,A,{"^":"",
eV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.cY(b)!==!0)return
z=b.dD(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.c.geG(e)
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
w.el(new T.ak(u))
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
a.di(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.C)(y),++r)A.eV(a,y[r],z,d,e)},
cr:{"^":"e1;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dr:function(a,b){if(b!=null)this.cy.push(b)},
dD:function(a){var z=this.dx
z.u(a)
z.cp(0,this.d)
return z},
k:function(a){return"NODE["+H.c(this.a)+"]"},
p:{
dR:function(a,b){var z,y,x,w,v,u
z=new Float32Array(9)
y=new T.I(new Float32Array(16))
y.S()
x=new T.I(new Float32Array(16))
x.S()
w=new Float32Array(3)
v=new Float32Array(3)
u=new Float32Array(3)
z=new A.cr(null,null,[],new T.ak(z),y,x,new T.l(w),new T.l(v),new T.l(u),new T.l(new Float32Array(3)),a,!1,!0)
z.dr(a,b)
return z}}},
bH:{"^":"as;d,e,cq:f>,a,b,c"},
iH:{"^":"as;d,e,f,r,x,y,z,Q,a,b,c",
ds:function(a,b,c){if(this.d==null)this.d=new G.hz(this.e,null,null,null,null)},
dh:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.fi(v.a,36160,z)
J.h0(v.a,this.x,this.y,x,w)
if(y!==0)J.fl(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
if(t.c!==!0)continue
x=t.d
if(x.c!==!0)continue
s=t.e
s.push(new G.bL(P.H(),"transforms",!1,!0))
r=new T.I(new Float32Array(16))
r.S()
for(w=t.f,v=w.length,q=0;q<w.length;w.length===v||(0,H.C)(w),++q)A.eV(x,w[q],r,a,s)
if(0>=s.length)return H.a(s,-1)
s.pop()}},
dg:function(){return this.dh(null)},
p:{
dZ:function(a,b,c){var z=new A.iH(c,b,H.y([],[A.bH]),17664,0,0,0,0,a,!1,!0)
z.ds(a,b,c)
return z}}}}],["","",,V,{}],["","",,B,{}],["","",,D,{"^":"",
i5:function(a){var z,y
z=new P.J(0,$.t,null,[null])
y=new XMLHttpRequest()
C.F.eL(y,"GET",a)
W.a8(y,"loadend",new D.i6(new P.cB(z,[null]),y),!1,W.nv)
y.send("")
return z},
i3:function(a){var z,y,x
z=new P.J(0,$.t,null,[null])
y=document.createElement("img")
x=new W.Z(y,"load",!1,[W.L])
x.ges(x).av(new D.i4(new P.cB(z,[null]),y))
y.src=a
return z},
i6:{"^":"f:0;a,b",
$1:function(a){this.a.ad(0,W.l_(this.b.response))}},
i4:{"^":"f:0;a,b",
$1:function(a){return this.a.ad(0,this.b)}},
hZ:{"^":"d;a,b,c",
dm:function(a){var z
a=document
z=W.bB
W.a8(a,"keydown",new D.i0(this),!1,z)
W.a8(a,"keyup",new D.i1(this),!1,z)},
p:{
i_:function(a){var z=P.G
z=new D.hZ(P.Y(null,null,null,z),P.Y(null,null,null,z),P.Y(null,null,null,z))
z.dm(a)
return z}}},
i0:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.L(0,J.d_(a))
z.b.L(0,a.which)}},
i1:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.ct(0,J.d_(a))
z.c.L(0,a.which)}},
ig:{"^":"d;a,b,c,d,e,f,r,x",
dq:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gb_(a)
W.a8(y.a,y.b,new D.ii(this),!1,H.v(y,0))
y=z.gaZ(a)
W.a8(y.a,y.b,new D.ij(this),!1,H.v(y,0))
y=z.gb0(a)
W.a8(y.a,y.b,new D.ik(this),!1,H.v(y,0))
z=z.gb1(a)
W.a8(z.a,z.b,new D.il(this),!1,H.v(z,0))},
p:{
ih:function(a){var z=P.G
z=new D.ig(P.Y(null,null,null,z),P.Y(null,null,null,z),P.Y(null,null,null,z),0,0,0,0,0)
z.dq(a)
return z}}},
ii:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.au(a)
y=this.a
y.r=z.gcr(a).a
y.x=z.gcr(a).b
y.d=z.geK(a).a
y.e=a.movementY}},
ij:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.au(a)
P.a3("BUTTON "+H.c(z.gc0(a)))
z=this.a
z.a.L(0,a.button)
z.b.L(0,a.button)}},
ik:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.au(a)
y=this.a
y.a.ct(0,z.gc0(a))
y.c.L(0,a.button)}},
il:{"^":"f:17;a",
$1:function(a){var z=J.e(a)
z.au(a)
this.a.f=z.geo(a)}},
it:{"^":"h5;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
br:function(a){var z,y
z=C.r.ew(a,0,new A.lp())
if(typeof z!=="number")return H.z(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lp:{"^":"f:18;",
$2:function(a,b){var z,y
z=J.aE(a,J.ac(b))
if(typeof z!=="number")return H.z(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ak:{"^":"d;bC:a<",
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.a(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ak){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.br(this.a)},
W:function(a){var z,y,x
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
return new T.l(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ak(z)
y.u(this)
x=b.gbC()
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
D:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ak(z)
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
return y},
el:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},I:{"^":"d;bD:a<",
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
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n[3] "+this.W(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.a(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.br(this.a)},
W:function(a){var z,y,x
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
return new T.am(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.I(z)
y.u(this)
x=b.gbD()
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
D:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.I(z)
y.u(this)
x=b.gbD()
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
cp:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7},
p:{
bE:function(){return new T.I(new Float32Array(16))}}},ct:{"^":"d;bH:a<",
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gag:function(a){return this.a[3]},
u:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
cU:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gas())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gi:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ct(z)
y.u(this)
x=b.gbH()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
D:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ct(z)
y.u(this)
x=b.gbH()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
return z[b]},
k:function(a){var z=this.a
return H.c(z[0])+", "+H.c(z[1])+", "+H.c(z[2])+" @ "+H.c(z[3])}},ai:{"^":"d;bN:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ai){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.br(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.ai(z)
y.u(this)
x=b.gbN()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.ai(z)
y.u(this)
x=b.gbN()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.a(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ac:function(a){var z=new T.ai(new Float32Array(2))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},l:{"^":"d;bO:a<",
O:function(a,b,c){var z=this.a
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
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.l){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.br(this.a)},
D:function(a,b){var z=new T.l(new Float32Array(3))
z.u(this)
z.bl(0,b)
return z},
l:function(a,b){var z=new T.l(new Float32Array(3))
z.u(this)
z.L(0,b)
return z},
ai:function(a,b){return this.aj(b)},
h:function(a,b){var z=this.a
if(b>=3)return H.a(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gas())},
gas:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
E:function(a){var z,y,x
z=Math.sqrt(this.gas())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aU:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
c9:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.l(new Float32Array(3))
z.O(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
L:function(a,b){var z,y
z=b.gbO()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
bl:function(a,b){var z,y
z=b.gbO()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
bg:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
aj:function(a){var z=new T.l(new Float32Array(3))
z.u(this)
z.bg(0,a)
return z},
ac:function(a){var z=new T.l(new Float32Array(3))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
p:{
F:function(a,b,c){var z=new T.l(new Float32Array(3))
z.O(a,b,c)
return z}}},am:{"^":"d;bP:a<",
u:function(a){var z,y
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
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.br(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.am(z)
y.u(this)
x=b.gbP()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.am(z)
y.u(this)
x=b.gbP()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
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
gF:function(a){return this.a[2]},
gag:function(a){return this.a[3]}}}],["","",,T,{"^":"",
f5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=new R.iU(0,0,null,null,null,null)
x.dw(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.h8(null,w)
u=J.fG(w,"webgl2",P.cm(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.O(P.dA('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.c(J.fH(u))
if($.eX>0)P.a3("I: "+t)
J.fm(u,0,0,0,1)
J.b6(u,2929)
J.b6(u,2884)
u=new Float32Array(3)
t=D.i_(null)
s=D.ih(w)
r=new T.I(new Float32Array(16))
r.S()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.it(50,10,0,0,new T.l(u),-0.02,t,s,r,new T.l(q),new T.l(p),new T.l(o),new T.l(new Float32Array(3)),"camera:orbit",!1,!0)
n.bh(0,0,56)
u=new T.I(new Float32Array(16))
u.S()
t=new T.I(new Float32Array(16))
t.S()
m=new G.iu(n,50,1,0.1,1e4,u,t,new T.I(new Float32Array(16)),P.H(),"perspective",!1,!0)
m.bs()
u=[]
t=new Float32Array(64)
l=new G.hJ(u,t,new Float32Array(4),P.H(),"illumination",!1,!0)
for(t=$.$get$bR(),t=t.gcN(t),t=new H.cp(null,J.aj(t.a),t.b,[H.v(t,0),H.v(t,1)]);t.q();)u.push(t.a)
u=G.cu("BlinnPhong",v,$.$get$f3(),$.$get$f1())
k=new A.bH(u,[m,l],[],"BlinnPhong",!1,!0)
u=G.cu("Gourad",v,$.$get$f4(),$.$get$f2())
j=new A.bH(u,[m,l],[],"Gourad",!1,!0)
u=G.cu("Fixed",v,$.$get$fa(),$.$get$f9())
i=new A.bH(u,[m],[],"Fixed",!1,!0)
h=A.dZ("BlinnPhong",v,null)
t=h.f
t.push(k)
t.push(i)
g=A.dZ("Gourad",v,null)
t=g.f
t.push(j)
t.push(i)
f=G.dO("light")
f.d.j(0,"uColor",$.$get$dl())
e=P.H()
for(t=$.$get$bR(),s=new H.ag(t,t.r,null,null,[H.v(t,0)]),s.c=t.e,r=u.d,u=u.e;s.q();){d=s.d
c=t.h(0,d)
q=u.x
b=new G.dP(r,J.cU(r.a),1,P.H(),q,null,0,-1,null,null,P.H(),"meshdata:dirLightViz",!1,!0)
b.bm(new Float32Array(3))
b.y=J.bv(r.a)
b.a7([0,0])
q=J.o(c)
if(!!q.$isdu){q=c.Q
R.jc(b,q,q/4,c.x)}else if(!!q.$ise2)R.je(b,c.x,c.y,c.ch,c.cx)
else if(!!q.$isdV)R.jd(b,c.x,c.Q)
q=new Float32Array(9)
p=new T.I(new Float32Array(16))
p.S()
o=new T.I(new Float32Array(16))
o.S()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
e.j(0,d,new A.cr(f,b,[],new T.ak(q),p,o,new T.l(a),new T.l(a0),new T.l(a1),new T.l(new Float32Array(3)),d,!1,!0))}for(u=e.gcN(e),u=new H.cp(null,J.aj(u.a),u.b,[H.v(u,0),H.v(u,1)]),t=i.f;u.q();)t.push(u.a)
a2=A.dR("dragon",null)
j.f.push(a2)
k.f.push(a2)
a3=H.a2(y.querySelector("#phase"),"$ise0")
a3.selectedIndex=0
for(u=y.getElementsByTagName("input"),t=u.length,a4=0;a4<u.length;u.length===t||(0,H.C)(u),++a4){s=J.fz(u[a4])
W.a8(s.a,s.b,new T.lB(e),!1,H.v(s,0))}for(u=y.getElementsByTagName("input"),t=u.length,a4=0;a4<u.length;u.length===t||(0,H.C)(u),++a4){a5=u[a4]
H.ap("initialize inputs "+H.c(J.fx(a5)))
a6=y.createEvent("Event")
a6.initEvent("change",!0,!0)
a5.dispatchEvent(a6)}y=new T.lD(w,m,g,h)
y.$1(null)
W.a8(window,"resize",y,!1,W.L)
z.a=0
P.hB([D.i5("../asset/dragon/dragon.obj"),D.i3("../asset/dragon/dragon.png")],null,!1).av(new T.lC(v,k,a2,new T.lA(z,n,a3,h,g,x)))},
lB:{"^":"f:19;a",
$1:function(a){var z=H.a2(J.fC(a),"$isdD")
P.a3(H.c(z.id)+" toggle "+H.c(z.checked))
$.$get$bR().h(0,z.id).c=z.checked
this.a.h(0,z.id).c=z.checked}},
lD:{"^":"f:20;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sH(z,y)
w.sG(z,x)
P.a3("size change "+H.c(y)+" "+H.c(x))
this.b.de(y,x)
z=this.c
z.z=y
z.Q=x
z=this.d
z.z=y
z.Q=x}},
lA:{"^":"f:21;a,b,c,d,e,f",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a
y=J.b1(a7)
y.D(a7,z.a)
z.a=y.l(a7,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.v(0,0)||w.v(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.ai()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.ai()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.v(0,37))y.go+=0.03
else if(v.v(0,39))y.go-=0.03
if(v.v(0,38))y.id+=0.03
else if(v.v(0,40))y.id-=0.03
if(v.v(0,33))y.fy*=0.99
else if(v.v(0,34))y.fy*=1.01
if(v.v(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.ai()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.eh(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.bh(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
y.co(t)
t=y.f
u=t.a
u[0]=v[2]
u[1]=v[6]
u[2]=v[10]
y=-y.k1
r=Math.sqrt(t.gas())
q=u[0]/r
p=u[1]/r
o=u[2]/r
n=Math.cos(y)
m=Math.sin(y)
l=1-n
k=q*q*l+n
y=o*m
j=q*p*l-y
u=p*m
i=q*o*l+u
h=p*q*l+y
g=p*p*l+n
y=q*m
f=p*o*l-y
e=o*q*l-u
d=o*p*l+y
c=o*o*l+n
y=v[0]
u=v[4]
t=v[8]
b=v[1]
a=v[5]
a0=v[9]
a1=v[2]
a2=v[6]
a3=v[10]
a4=v[3]
a5=v[7]
a6=v[11]
v[0]=y*k+u*h+t*e
v[1]=b*k+a*h+a0*e
v[2]=a1*k+a2*h+a3*e
v[3]=a4*k+a5*h+a6*e
v[4]=y*j+u*g+t*d
v[5]=b*j+a*g+a0*d
v[6]=a1*j+a2*g+a3*d
v[7]=a4*j+a5*g+a6*d
v[8]=y*i+u*f+t*c
v[9]=b*i+a*f+a0*c
v[10]=a1*i+a2*f+a3*c
v[11]=a4*i+a5*f+a6*c
w.c.ab(0)
w.b.ab(0)
x.e=0
x.d=0
x.f=0
x.c.ab(0)
x.b.ab(0);(this.c.selectedIndex===0?this.d:this.e).dg()
C.a6.gea(window).av(this)
this.f.dB(z.a)}},
lC:{"^":"f:22;a,b,c,d",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=this.a
y=J.a1(a)
x=y.h(a,1)
w=new G.j7(!1,!1,!1,!0,1,9729,9729)
v=J.fp(z.a)
u=new G.hL(x,"../asset/dragon/dragon.png",v,3553,z,w)
J.b5(z.a,3553,v)
J.fM(z.a,37440,1)
u.dv(x)
w.dl(z,3553)
J.fI(z.a)
J.b5(z.a,3553,null)
t=G.dO("matDragon")
z=t.d
z.j(0,"uTexture",u)
z.j(0,"uShininess",10)
s=Y.hM(y.h(a,0))
P.a3(s)
y=this.b.d
r=G.ic("../asset/dragon/dragon.obj",y.d,4,y.e.x)
r.bm(G.ba(s.d,null))
r.da(s.dj())
G.jU(s,r)
z=new Float32Array(9)
y=new T.I(new Float32Array(16))
y.S()
x=new T.I(new Float32Array(16))
x.S()
w=new Float32Array(3)
v=new Float32Array(3)
q=new Float32Array(3)
p=A.dR("wrapper",new A.cr(t,r,[],new T.ak(z),y,x,new T.l(w),new T.l(v),new T.l(q),new T.l(new Float32Array(3)),r.a,!1,!0))
z=new T.l(new Float32Array(3))
z.O(100,0,0)
p.co(z)
this.c.cy.push(p)
this.d.$1(0)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.dE.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.hT.prototype
if(typeof a=="boolean")return J.hS.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.bo(a)}
J.ll=function(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.bo(a)}
J.a1=function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.bo(a)}
J.aA=function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.bo(a)}
J.b1=function(a){if(typeof a=="number")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bl.prototype
return a}
J.lm=function(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bl.prototype
return a}
J.bn=function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bl.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.d)return a
return J.bo(a)}
J.aE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ll(a).l(a,b)}
J.D=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).C(a,b)}
J.T=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.b1(a).ah(a,b)}
J.aF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.b1(a).X(a,b)}
J.bt=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.b1(a).D(a,b)}
J.b4=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.f0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)}
J.fe=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.f0(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)}
J.ff=function(a,b,c,d){return J.e(a).dX(a,b,c,d)}
J.cQ=function(a,b){return J.e(a).bQ(a,b)}
J.fg=function(a,b,c,d){return J.e(a).bR(a,b,c,d)}
J.cR=function(a,b,c){return J.e(a).bT(a,b,c)}
J.fh=function(a,b){return J.e(a).ec(a,b)}
J.bV=function(a,b,c){return J.e(a).bU(a,b,c)}
J.fi=function(a,b,c){return J.e(a).bW(a,b,c)}
J.b5=function(a,b,c){return J.e(a).bX(a,b,c)}
J.bu=function(a,b){return J.e(a).ef(a,b)}
J.fj=function(a,b){return J.e(a).bY(a,b)}
J.fk=function(a,b,c){return J.e(a).bZ(a,b,c)}
J.cS=function(a,b,c,d){return J.e(a).c_(a,b,c,d)}
J.fl=function(a,b){return J.aA(a).c2(a,b)}
J.fm=function(a,b,c,d,e){return J.e(a).c3(a,b,c,d,e)}
J.cT=function(a,b){return J.bn(a).aT(a,b)}
J.fn=function(a,b){return J.lm(a).U(a,b)}
J.bW=function(a,b,c){return J.a1(a).ek(a,b,c)}
J.bv=function(a){return J.e(a).c5(a)}
J.fo=function(a){return J.e(a).c6(a)}
J.fp=function(a){return J.e(a).c8(a)}
J.cU=function(a){return J.e(a).en(a)}
J.fq=function(a,b){return J.e(a).ca(a,b)}
J.bX=function(a,b){return J.e(a).cb(a,b)}
J.fr=function(a,b,c,d){return J.e(a).cc(a,b,c,d)}
J.fs=function(a,b,c,d,e){return J.e(a).ep(a,b,c,d,e)}
J.ft=function(a,b,c,d,e){return J.e(a).cd(a,b,c,d,e)}
J.fu=function(a,b,c,d,e,f){return J.e(a).eq(a,b,c,d,e,f)}
J.cV=function(a,b){return J.aA(a).t(a,b)}
J.b6=function(a,b){return J.e(a).ce(a,b)}
J.fv=function(a,b){return J.e(a).cf(a,b)}
J.fw=function(a){return J.e(a).er(a)}
J.cW=function(a,b){return J.aA(a).A(a,b)}
J.cX=function(a){return J.e(a).geb(a)}
J.cY=function(a){return J.e(a).gaV(a)}
J.aG=function(a){return J.e(a).gR(a)}
J.ac=function(a){return J.o(a).gB(a)}
J.fx=function(a){return J.e(a).geD(a)}
J.aj=function(a){return J.aA(a).gI(a)}
J.a4=function(a){return J.a1(a).gi(a)}
J.fy=function(a){return J.e(a).gcq(a)}
J.fz=function(a){return J.e(a).gaY(a)}
J.fA=function(a){return J.e(a).gb2(a)}
J.cZ=function(a){return J.e(a).gZ(a)}
J.fB=function(a){return J.e(a).geS(a)}
J.fC=function(a){return J.e(a).gN(a)}
J.fD=function(a){return J.e(a).gcB(a)}
J.fE=function(a){return J.e(a).gag(a)}
J.d_=function(a){return J.e(a).gf_(a)}
J.bY=function(a){return J.e(a).gm(a)}
J.bZ=function(a){return J.e(a).gn(a)}
J.d0=function(a){return J.e(a).gF(a)}
J.fF=function(a){return J.e(a).b8(a)}
J.fG=function(a,b,c){return J.e(a).cT(a,b,c)}
J.fH=function(a){return J.e(a).aw(a)}
J.fI=function(a){return J.e(a).b9(a)}
J.fJ=function(a,b){return J.e(a).ba(a,b)}
J.fK=function(a,b,c){return J.e(a).bb(a,b,c)}
J.d1=function(a,b,c){return J.e(a).be(a,b,c)}
J.fL=function(a,b){return J.e(a).cn(a,b)}
J.fM=function(a,b,c){return J.e(a).cs(a,b,c)}
J.d2=function(a){return J.aA(a).eN(a)}
J.fN=function(a,b,c){return J.bn(a).eO(a,b,c)}
J.fO=function(a,b){return J.e(a).saq(a,b)}
J.d3=function(a,b){return J.bn(a).cZ(a,b)}
J.fP=function(a,b,c,d){return J.e(a).bk(a,b,c,d)}
J.fQ=function(a,b,c,d,e,f,g){return J.e(a).cv(a,b,c,d,e,f,g)}
J.fR=function(a,b,c,d){return J.e(a).cw(a,b,c,d)}
J.d4=function(a,b,c,d){return J.e(a).cz(a,b,c,d)}
J.d5=function(a){return J.b1(a).eT(a)}
J.fS=function(a){return J.bn(a).eV(a)}
J.aH=function(a){return J.o(a).k(a)}
J.fT=function(a,b,c,d){return J.e(a).eX(a,b,c,d)}
J.fU=function(a){return J.bn(a).eY(a)}
J.fV=function(a,b,c){return J.e(a).cC(a,b,c)}
J.fW=function(a,b,c){return J.e(a).cD(a,b,c)}
J.c_=function(a,b,c){return J.e(a).cE(a,b,c)}
J.fX=function(a,b,c){return J.e(a).cF(a,b,c)}
J.d6=function(a,b,c){return J.e(a).cG(a,b,c)}
J.d7=function(a,b,c){return J.e(a).cH(a,b,c)}
J.d8=function(a,b,c){return J.e(a).cI(a,b,c)}
J.d9=function(a,b,c,d){return J.e(a).cJ(a,b,c,d)}
J.da=function(a,b,c,d){return J.e(a).cK(a,b,c,d)}
J.fY=function(a,b){return J.e(a).cM(a,b)}
J.fZ=function(a,b,c){return J.e(a).eZ(a,b,c)}
J.h_=function(a,b,c,d,e,f,g){return J.e(a).cO(a,b,c,d,e,f,g)}
J.h0=function(a,b,c,d,e){return J.e(a).cQ(a,b,c,d,e)}
I.aC=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.u=W.c1.prototype
C.n=W.he.prototype
C.E=W.hk.prototype
C.F=W.hH.prototype
C.G=J.h.prototype
C.c=J.aL.prototype
C.o=J.dE.prototype
C.b=J.dF.prototype
C.a=J.aN.prototype
C.i=J.aO.prototype
C.N=J.aP.prototype
C.r=H.im.prototype
C.Q=W.ip.prototype
C.y=J.iv.prototype
C.D=W.j5.prototype
C.t=J.bl.prototype
C.a6=W.jg.prototype
C.d=new P.ke()
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
C.O=H.y(I.aC(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.P=I.aC(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.x=I.aC([])
C.p=H.y(I.aC(["bind","if","ref","repeat","syntax"]),[P.n])
C.q=H.y(I.aC(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.R=new G.x("vec3","vertex btangents",0)
C.e=new G.x("vec3","",0)
C.S=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.z=new G.x("vec3","vertex coordinates",0)
C.T=new G.x("vec3","vertex binormals",0)
C.A=new G.x("vec4","for wireframe",0)
C.U=new G.x("vec4","per vertex color",0)
C.V=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.X=new G.x("mat4","",4)
C.W=new G.x("mat4","",128)
C.f=new G.x("float","",0)
C.Y=new G.x("float","",4)
C.Z=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a_=new G.x("float","for bump maps",0)
C.a0=new G.x("vec2","texture uvs",0)
C.a1=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.a2=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.a3=new G.x("vec3","vertex normals",0)
C.a4=new G.x("sampler2DShadow","",0)
C.B=new G.x("vec3","per vertex color",0)
C.C=new G.x("mat3","",0)
C.a5=new G.x("vec3","vertex tangents",0)
$.a5=0
$.aI=null
$.dd=null
$.eZ=null
$.eO=null
$.f8=null
$.bQ=null
$.bS=null
$.cM=null
$.av=null
$.aZ=null
$.b_=null
$.cH=!1
$.t=C.d
$.ae=null
$.c6=null
$.dy=null
$.dx=null
$.ds=null
$.dr=null
$.dq=null
$.dp=null
$.eX=0
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
I.$lazy(y,x,w)}})(["dn","$get$dn",function(){return H.eY("_$dart_dartClosure")},"ch","$get$ch",function(){return H.eY("_$dart_js")},"eb","$get$eb",function(){return H.a7(H.bK({
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.a7(H.bK({$method$:null,
toString:function(){return"$receiver$"}}))},"ed","$get$ed",function(){return H.a7(H.bK(null))},"ee","$get$ee",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ei","$get$ei",function(){return H.a7(H.bK(void 0))},"ej","$get$ej",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eg","$get$eg",function(){return H.a7(H.eh(null))},"ef","$get$ef",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"el","$get$el",function(){return H.a7(H.eh(void 0))},"ek","$get$ek",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cC","$get$cC",function(){return P.jm()},"ca","$get$ca",function(){return P.jH(null,P.bd)},"b0","$get$b0",function(){return[]},"dm","$get$dm",function(){return{}},"ev","$get$ev",function(){return P.cn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cE","$get$cE",function(){return P.H()},"e4","$get$e4",function(){return new G.ea(1281,0,4294967295)},"dc","$get$dc",function(){return new G.e9(1281,1281,1281)},"a_","$get$a_",function(){return P.cm(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.B,"aColorAlpha",C.U,"aPosition",C.z,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.A,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.B,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.z,"vPositionFromLight",C.S,"vCenter",C.A,"vDepth",C.Z,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a4,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a2,"uAnimationTable",C.h,"uTime",C.a1,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.f,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"dk","$get$dk",function(){return T.F(1,1,1)},"dh","$get$dh",function(){return T.F(0,0,0)},"di","$get$di",function(){return T.F(0,0,0.5)},"dj","$get$dj",function(){return T.F(0,0.5,0)},"dl","$get$dl",function(){return T.F(1,1,0)},"f4","$get$f4",function(){var z=G.aT("LightGouradV")
z.aA(["aPosition","aNormal","aTexUV"])
z.al(["vColor"])
z.Y(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.Y(["uLightDescs","uLightTypes","uShininess"])
z.Y(["uEyePosition","uTexture"])
z.bq(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"f2","$get$f2",function(){var z=G.aT("LightGrouradV")
z.al(["vColor"])
z.aD(["oFragColor = vec4(vColor, 1.0 );"])
return z},"f3","$get$f3",function(){var z=G.aT("LightBlinnPhongV")
z.aA(["aPosition","aNormal","aTexUV"])
z.al(["vPosition","vNormal","vTexUV"])
z.Y(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.du(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"])
return z},"f1","$get$f1",function(){var z=G.aT("LightBlinnPhongF")
z.al(["vPosition","vNormal","vTexUV"])
z.Y(["uLightDescs","uLightTypes","uShininess"])
z.Y(["uEyePosition","uTexture"])
z.br(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"fa","$get$fa",function(){var z=G.aT("SolidColor")
z.aA(["aPosition"])
z.Y(["uPerspectiveViewMatrix","uModelMatrix"])
z.aD(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"f9","$get$f9",function(){var z=G.aT("SolidColorF")
z.Y(["uColor"])
z.aD(["oFragColor = vec4( uColor, 1.0 );"])
return z},"fc","$get$fc",function(){return(1+P.lH(5))/2},"dC","$get$dC",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$fc()
y=T.F(-1,z,0)
y.E(0)
x=T.F(1,z,0)
x.E(0)
if(typeof z!=="number")return z.f1()
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
return[y,x,w,v,u,t,s,r,q,p,o,z]},"f7","$get$f7",function(){return T.F(11,20,0)},"eU","$get$eU",function(){return T.F(0,-50,0)},"fb","$get$fb",function(){return T.F(-11,-30,0)},"bR","$get$bR",function(){var z,y,x,w,v,u
z=$.$get$eU()
y=$.$get$dh()
x=$.$get$dk()
w=T.bE()
v=T.bE()
u=$.$get$f7()
return P.cm(["idDirectional",new G.du(z,y,x,40,w,v,1,"dir",!1,!0),"idPoint",new G.dV(u,$.$get$di(),x,50,3,"point",!1,!0),"idSpot",new G.e2(u,$.$get$fb(),$.$get$dj(),x,50,0.4487989505128276,2,1,1,40,T.bE(),T.bE(),2,"spot",!1,!0)])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.R]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.G]},{func:1,args:[W.bB]},{func:1,ret:P.cJ,args:[W.aq,P.n,P.n,W.cD]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aV]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aV]},{func:1,v:true,args:[W.r,W.r]},{func:1,args:[W.aX]},{func:1,args:[P.G,P.d]},{func:1,args:[W.L]},{func:1,v:true,args:[W.L]},{func:1,v:true,args:[P.b2]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.lN(d||a)
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
Isolate.aC=a.aC
Isolate.az=a.az
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
if(typeof dartMainRunner==="function")dartMainRunner(T.f5,[])
else T.f5([])})})()
//# sourceMappingURL=light2.dart.js.map
