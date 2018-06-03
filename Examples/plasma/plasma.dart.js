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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cf"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cf"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cf(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",lJ:{"^":"c;a"}}],["","",,J,{"^":"",
p:function(a){return void 0},
cj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ci==null){H.km()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dL("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bV()]
if(v!=null)return v
v=H.kq(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bV(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
f:{"^":"c;",
E:function(a,b){return a===b},
gC:function(a){return H.aG(a)},
k:["cM",function(a){return"Instance of '"+H.aH(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h4:{"^":"f;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iscd:1},
h5:{"^":"f;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isb0:1},
bW:{"^":"f;",
gC:function(a){return 0},
k:["cO",function(a){return String(a)}]},
hy:{"^":"bW;"},
aJ:{"^":"bW;"},
aE:{"^":"bW;",
k:function(a){var z=a[$.$get$cO()]
return z==null?this.cO(a):J.ax(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aB:{"^":"f;$ti",
ag:function(a,b){var z
if(!!a.fixed$length)H.S(P.q("remove"))
for(z=0;z<a.length;++z)if(J.H(a[z],b)){a.splice(z,1)
return!0}return!1},
O:function(a,b){var z,y
if(!!a.fixed$length)H.S(P.q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.J(a))}},
af:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
be:function(a,b){return H.dr(a,b,null,H.B(a,0))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
geh:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d1())},
cG:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.S(P.q("setRange"))
P.hG(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.F()
if(typeof b!=="number")return H.z(b)
z=c-b
if(z===0)return
y=J.p(d)
if(!!y.$ish){x=e
w=d}else{w=y.be(d,e).ew(0,!1)
x=0}y=J.ab(w)
v=y.gi(w)
if(typeof v!=="number")return H.z(v)
if(x+z>v)throw H.a(H.h1())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ak:function(a,b,c,d){return this.cG(a,b,c,d,0)},
bG:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.J(a))}return!1},
cH:function(a,b){if(!!a.immutable$list)H.S(P.q("sort"))
H.hU(a,J.jV())},
ay:function(a){return this.cH(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
k:function(a){return P.bT(a,"[","]")},
gL:function(a){return new J.fn(a,a.length,0,null,[H.B(a,0)])},
gC:function(a){return H.aG(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.S(P.q("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cG(b,"newLength",null))
if(b<0)throw H.a(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.S(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.A([],[H.B(a,0)])
this.si(y,z)
this.ak(y,0,a.length,a)
this.ak(y,a.length,z,b)
return y},
$isn:1,
$asn:I.ar,
$ish:1,
p:{
aC:function(a){a.fixed$length=Array
return a},
lH:[function(a,b){return J.eL(a,b)},"$2","jV",8,0,22]}},
lI:{"^":"aB;$ti"},
fn:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
an:{"^":"f;",
S:function(a,b){var z
if(typeof b!=="number")throw H.a(H.L(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gat(b)
if(this.gat(a)===z)return 0
if(this.gat(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gat:function(a){return a===0?1/a<0:a<0},
ev:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.q(""+a+".toInt()"))},
dW:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.q(""+a+".ceil()"))},
ep:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.q(""+a+".round()"))},
dX:function(a,b,c){if(this.S(b,c)>0)throw H.a(H.L(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
ey:function(a,b){var z
if(b>20)throw H.a(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gat(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
V:function(a){return-a},
l:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a+b},
F:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a-b},
a7:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a*b},
aj:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cQ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bA(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.q("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
by:function(a,b){var z
if(a>0)z=this.dG(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dG:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a>b},
$isaQ:1,
$isaS:1},
bU:{"^":"an;",
V:function(a){return-a},
$isE:1},
d2:{"^":"an;"},
aD:{"^":"f;",
dY:function(a,b){if(b>=a.length)H.S(H.aa(a,b))
return a.charCodeAt(b)},
bq:function(a,b){if(b>=a.length)throw H.a(H.aa(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cG(b,null,null))
return a+b},
cJ:function(a,b,c){var z
if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cI:function(a,b){return this.cJ(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.S(H.L(c))
if(b<0)throw H.a(P.bm(b,null,null))
if(typeof c!=="number")return H.z(c)
if(b>c)throw H.a(P.bm(b,null,null))
if(c>a.length)throw H.a(P.bm(c,null,null))
return a.substring(b,c)},
cK:function(a,b){return this.bg(a,b,null)},
ex:function(a){return a.toLowerCase()},
J:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.C)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
e_:function(a,b,c){if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
return H.kx(a,b,c)},
S:function(a,b){var z
if(typeof b!=="string")throw H.a(H.L(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.aa(a,b))
return a[b]},
$isn:1,
$asn:I.ar,
$ism:1}}],["","",,H,{"^":"",
d1:function(){return new P.bq("No element")},
h2:function(){return new P.bq("Too many elements")},
h1:function(){return new P.bq("Too few elements")},
hU:function(a,b){var z=J.a3(a)
if(typeof z!=="number")return z.F()
H.b3(a,0,z-1,b)},
b3:function(a,b,c,d){if(c-b<=32)H.hT(a,b,c,d)
else H.hS(a,b,c,d)},
hT:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ab(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a5(c-b+1,6)
y=b+z
x=c-z
w=C.b.a5(b+c,2)
v=w-z
u=w+z
t=J.ab(a)
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
if(J.H(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.p(i)
if(h.E(i,0))continue
if(h.a1(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aR(i)
if(h.ai(i,0)){--l
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
if(J.aU(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aU(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b3(a,b,m-2,d)
H.b3(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.H(d.$2(t.h(a,m),r),0);)++m
for(;J.H(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.H(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aU(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b3(a,m,l,d)}else H.b3(a,m,l,d)},
bP:{"^":"bi;$ti"},
bk:{"^":"bP;$ti",
gL:function(a){return new H.d7(this,this.gi(this),0,null,[H.ch(this,"bk",0)])},
B:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.z(z)
y=0
for(;y<z;++y){b.$1(this.u(0,y))
if(z!==this.gi(this))throw H.a(P.J(this))}},
b_:function(a,b){return this.cN(0,b)}},
i5:{"^":"bk;a,b,c,$ti",
d7:function(a,b,c,d){},
gds:function(){var z=J.a3(this.a)
return z},
gdH:function(){var z,y
z=J.a3(this.a)
y=this.b
if(typeof z!=="number")return H.z(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a3(this.a)
y=this.b
if(typeof z!=="number")return H.z(z)
if(y>=z)return 0
return z-y},
u:function(a,b){var z,y
z=this.gdH()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.z(b)
y=z+b
if(!(b<0)){z=this.gds()
if(typeof z!=="number")return H.z(z)
z=y>=z}else z=!0
if(z)throw H.a(P.x(b,this,"index",null,null))
return J.cq(this.a,y)},
ew:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ab(y)
w=x.gi(y)
if(typeof w!=="number")return w.F()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.u(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a1()
if(u<w)throw H.a(P.J(this))}return t},
p:{
dr:function(a,b,c,d){var z=new H.i5(a,b,c,[d])
z.d7(a,b,c,d)
return z}}},
d7:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.ab(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.J(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
he:{"^":"bk;a,b,$ti",
gi:function(a){return J.a3(this.a)},
u:function(a,b){return this.b.$1(J.cq(this.a,b))},
$asbP:function(a,b){return[b]},
$asbk:function(a,b){return[b]},
$asbi:function(a,b){return[b]}},
dN:{"^":"bi;a,b,$ti",
gL:function(a){return new H.ie(J.aY(this.a),this.b,this.$ti)}},
ie:{"^":"h3;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bg:{"^":"c;$ti"}}],["","",,H,{"^":"",
ke:function(a){return init.types[a]},
kp:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.p(a).$iso},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ax(a)
if(typeof z!=="string")throw H.a(H.L(a))
return z},
aG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aH:function(a){var z,y,x,w,v,u,t,s,r
z=J.p(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.p(a).$isaJ){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bq(w,0)===36)w=C.i.cK(w,1)
r=H.bB(H.as(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
I:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hF:function(a){return a.b?H.I(a).getUTCFullYear()+0:H.I(a).getFullYear()+0},
hD:function(a){return a.b?H.I(a).getUTCMonth()+1:H.I(a).getMonth()+1},
hz:function(a){return a.b?H.I(a).getUTCDate()+0:H.I(a).getDate()+0},
hA:function(a){return a.b?H.I(a).getUTCHours()+0:H.I(a).getHours()+0},
hC:function(a){return a.b?H.I(a).getUTCMinutes()+0:H.I(a).getMinutes()+0},
hE:function(a){return a.b?H.I(a).getUTCSeconds()+0:H.I(a).getSeconds()+0},
hB:function(a){return a.b?H.I(a).getUTCMilliseconds()+0:H.I(a).getMilliseconds()+0},
z:function(a){throw H.a(H.L(a))},
d:function(a,b){if(a==null)J.a3(a)
throw H.a(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a3(a)
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.x(b,a,"index",null,z)
return P.bm(b,"index",null)},
L:function(a){return new P.ac(!0,a,null,null)},
eh:function(a){if(typeof a!=="number")throw H.a(H.L(a))
return a},
a:function(a){var z
if(a==null)a=new P.dg()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eB})
z.name=""}else z.toString=H.eB
return z},
eB:function(){return J.ax(this.dartException)},
S:function(a){throw H.a(a)},
F:function(a){throw H.a(P.J(a))},
T:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.by(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bX(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.df(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dy()
u=$.$get$dz()
t=$.$get$dA()
s=$.$get$dB()
r=$.$get$dF()
q=$.$get$dG()
p=$.$get$dD()
$.$get$dC()
o=$.$get$dI()
n=$.$get$dH()
m=v.P(y)
if(m!=null)return z.$1(H.bX(y,m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.bX(y,m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.df(y,m))}}return z.$1(new H.ib(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dm()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dm()
return a},
aj:function(a){var z
if(a==null)return new H.e3(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e3(a,null)},
ka:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
ko:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cY("Unsupported number of arguments for wrapped closure"))},
a9:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ko)
a.$identity=z
return z},
fx:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.p(c).$ish){z.$reflectionInfo=c
x=H.hI(z).r}else x=c
w=d?Object.create(new H.hV().constructor.prototype):Object.create(new H.bM(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.X
$.X=J.av(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cM(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ke,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cK:H.bN
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
fu:function(a,b,c,d){var z=H.bN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cM:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fu(y,!w,z,b)
if(y===0){w=$.X
$.X=J.av(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ay
if(v==null){v=H.bd("self")
$.ay=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.X
$.X=J.av(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ay
if(v==null){v=H.bd("self")
$.ay=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fv:function(a,b,c,d){var z,y
z=H.bN
y=H.cK
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
fw:function(a,b){var z,y,x,w,v,u,t,s
z=$.ay
if(z==null){z=H.bd("self")
$.ay=z}y=$.cJ
if(y==null){y=H.bd("receiver")
$.cJ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fv(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.X
$.X=J.av(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.X
$.X=J.av(y,1)
return new Function(z+H.b(y)+"}")()},
cf:function(a,b,c,d,e,f){var z,y
z=J.aC(b)
y=!!J.p(c).$ish?J.aC(c):c
return H.fx(a,z,y,!!d,e,f)},
kv:function(a,b){var z=J.ab(b)
throw H.a(H.cL(a,z.bg(b,3,z.gi(b))))},
a1:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else z=!0
if(z)return a
H.kv(a,b)},
cg:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ej:function(a,b){var z,y
if(a==null)return!1
z=H.cg(J.p(a))
if(z==null)y=!1
else y=H.ep(z,b)
return y},
k2:function(a){var z
if(a instanceof H.i){z=H.cg(J.p(a))
if(z!=null)return H.ck(z,null)
return"Closure"}return H.aH(a)},
ky:function(a){throw H.a(new P.fC(a))},
en:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
n2:function(a,b,c){return H.aT(a["$as"+H.b(c)],H.as(b))},
b8:function(a,b,c,d){var z=H.aT(a["$as"+H.b(c)],H.as(b))
return z==null?null:z[d]},
ch:function(a,b,c){var z=H.aT(a["$as"+H.b(b)],H.as(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.as(a)
return z==null?null:z[b]},
ck:function(a,b){var z=H.au(a,b)
return z},
au:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bB(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.au(z,b)
return H.jU(a,b)}return"unknown-reified-type"},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.au(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.au(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.au(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.k9(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.au(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bB:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c3("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.au(u,c)}return w?"":"<"+z.k(0)+">"},
kd:function(a){var z,y,x
if(a instanceof H.i){z=H.cg(J.p(a))
if(z!=null)return H.ck(z,null)}y=J.p(a).constructor.builtin$cls
if(a==null)return y
x=H.bB(a.$ti,0,null)
return y+x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ce:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.as(a)
y=J.p(a)
if(y[b]==null)return!1
return H.ef(H.aT(y[d],z),c)},
ba:function(a,b,c,d){var z,y
if(a==null)return a
z=H.ce(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bB(c,0,null)
throw H.a(H.cL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ef:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
n0:function(a,b,c){return a.apply(b,H.aT(J.p(b)["$as"+H.b(c)],H.as(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b0")return!0
if('func' in b)return H.ep(a,b)
if('func' in a)return b.builtin$cls==="lz"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.ck(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ef(H.aT(u,z),x)},
ee:function(a,b,c){var z,y,x,w,v
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
k3:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aC(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
ep:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.ee(x,w,!1))return!1
if(!H.ee(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.k3(a.named,b.named)},
n1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kq:function(a){var z,y,x,w,v,u
z=$.eo.$1(a)
y=$.bz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ed.$2(a,z)
if(z!=null){y=$.bz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bC(x)
$.bz[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bA[z]=x
return x}if(v==="-"){u=H.bC(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.er(a,x)
if(v==="*")throw H.a(P.dL(z))
if(init.leafTags[z]===true){u=H.bC(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.er(a,x)},
er:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bC:function(a){return J.cj(a,!1,null,!!a.$iso)},
ku:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bC(z)
else return J.cj(z,c,null,null)},
km:function(){if(!0===$.ci)return
$.ci=!0
H.kn()},
kn:function(){var z,y,x,w,v,u,t,s
$.bz=Object.create(null)
$.bA=Object.create(null)
H.ki()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eA.$1(v)
if(u!=null){t=H.ku(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ki:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.aq(C.I,H.aq(C.N,H.aq(C.u,H.aq(C.u,H.aq(C.M,H.aq(C.J,H.aq(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eo=new H.kj(v)
$.ed=new H.kk(u)
$.eA=new H.kl(t)},
aq:function(a,b){return a(b)||b},
kx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hH:{"^":"c;a,b,c,d,e,f,r,x",p:{
hI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aC(z)
y=z[0]
x=z[1]
return new H.hH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i9:{"^":"c;a,b,c,d,e,f",
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
a_:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hu:{"^":"D;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
df:function(a,b){return new H.hu(a,b==null?null:b.method)}}},
h6:{"^":"D;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bX:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h6(a,y,z?null:b.receiver)}}},
ib:{"^":"D;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kz:{"^":"i:0;a",
$1:function(a){if(!!J.p(a).$isD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e3:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaI:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aH(this).trim()+"'"},
gcC:function(){return this},
gcC:function(){return this}},
ds:{"^":"i;"},
hV:{"^":"ds;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bM:{"^":"ds;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aG(this.a)
else y=typeof z!=="object"?J.a2(z):H.aG(z)
return(y^H.aG(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aH(z)+"'")},
p:{
bN:function(a){return a.a},
cK:function(a){return a.c},
bd:function(a){var z,y,x,w,v
z=new H.bM("self","target","receiver","name")
y=J.aC(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fs:{"^":"D;a",
k:function(a){return this.a},
p:{
cL:function(a,b){return new H.fs("CastError: "+H.b(P.bR(a))+": type '"+H.k2(a)+"' is not a subtype of type '"+b+"'")}}},
hN:{"^":"D;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hO:function(a){return new H.hN(a)}}},
dJ:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a2(this.a)},
E:function(a,b){if(b==null)return!1
return b instanceof H.dJ&&J.H(this.a,b.a)}},
d3:{"^":"c_;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gM:function(a){return new H.hc(this,[H.B(this,0)])},
ar:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bs(y,b)}else return this.ef(b)},
ef:function(a){var z=this.d
if(z==null)return!1
return this.aR(this.aG(z,J.a2(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ao(z,b)
x=y==null?null:y.gae()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ao(w,b)
x=y==null?null:y.gae()
return x}else return this.eg(b)},
eg:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aG(z,J.a2(a)&0x3ffffff)
x=this.aR(y,a)
if(x<0)return
return y[x].gae()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aJ()
this.b=z}this.bm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aJ()
this.c=y}this.bm(y,b,c)}else{x=this.d
if(x==null){x=this.aJ()
this.d=x}w=J.a2(b)&0x3ffffff
v=this.aG(x,w)
if(v==null)this.aN(x,w,[this.aA(b,c)])
else{u=this.aR(v,b)
if(u>=0)v[u].sae(c)
else v.push(this.aA(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.J(this))
z=z.c}},
bm:function(a,b,c){var z=this.ao(a,b)
if(z==null)this.aN(a,b,this.aA(b,c))
else z.sae(c)},
bn:function(){this.r=this.r+1&67108863},
aA:function(a,b){var z,y
z=new H.hb(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bn()
return z},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gee(),b))return y
return-1},
k:function(a){return P.d8(this)},
ao:function(a,b){return a[b]},
aG:function(a,b){return a[b]},
aN:function(a,b,c){a[b]=c},
dq:function(a,b){delete a[b]},
bs:function(a,b){return this.ao(a,b)!=null},
aJ:function(){var z=Object.create(null)
this.aN(z,"<non-identifier-key>",z)
this.dq(z,"<non-identifier-key>")
return z}},
hb:{"^":"c;ee:a<,ae:b@,c,d"},
hc:{"^":"bP;a,$ti",
gi:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.ad(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.J(z))
y=y.c}}},
ad:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kj:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
kk:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
kl:{"^":"i:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
k9:function(a){return J.aC(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bw:function(a){var z,y,x
if(!!J.p(a).$isn)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aa(b,a))},
hq:{"^":"f;","%":"DataView;ArrayBufferView;c0|dY|dZ|db|e_|e0|ae"},
c0:{"^":"hq;",
gi:function(a){return a.length},
$isn:1,
$asn:I.ar,
$iso:1,
$aso:I.ar},
db:{"^":"dZ;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a0(b,a,a.length)
a[b]=c},
$asbg:function(){return[P.aQ]},
$asj:function(){return[P.aQ]},
$ish:1,
$ash:function(){return[P.aQ]},
"%":"Float64Array"},
ae:{"^":"e0;",
j:function(a,b,c){H.a0(b,a,a.length)
a[b]=c},
$asbg:function(){return[P.E]},
$asj:function(){return[P.E]},
$ish:1,
$ash:function(){return[P.E]}},
hp:{"^":"db;",$isbS:1,"%":"Float32Array"},
lY:{"^":"ae;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lZ:{"^":"ae;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$ish_:1,
"%":"Int32Array"},
m_:{"^":"ae;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m0:{"^":"ae;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m1:{"^":"ae;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m2:{"^":"ae;",
gi:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m3:{"^":"ae;",
gi:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dY:{"^":"c0+j;"},
dZ:{"^":"dY+bg;"},
e_:{"^":"c0+j;"},
e0:{"^":"e_+bg;"}}],["","",,P,{"^":"",
ik:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k4()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a9(new P.im(z),1)).observe(y,{childList:true})
return new P.il(z,y,x)}else if(self.setImmediate!=null)return P.k5()
return P.k6()},
mO:[function(a){self.scheduleImmediate(H.a9(new P.io(a),0))},"$1","k4",4,0,6],
mP:[function(a){self.setImmediate(H.a9(new P.ip(a),0))},"$1","k5",4,0,6],
mQ:[function(a){P.jy(0,a)},"$1","k6",4,0,6],
jY:function(a,b){if(H.ej(a,{func:1,args:[P.b0,P.b0]})){b.toString
return a}else{b.toString
return a}},
jX:function(){var z,y
for(;z=$.ap,z!=null;){$.aO=null
y=z.b
$.ap=y
if(y==null)$.aN=null
z.a.$0()}},
n_:[function(){$.cb=!0
try{P.jX()}finally{$.aO=null
$.cb=!1
if($.ap!=null)$.$get$c6().$1(P.eg())}},"$0","eg",0,0,3],
eb:function(a){var z=new P.dO(a,null)
if($.ap==null){$.aN=z
$.ap=z
if(!$.cb)$.$get$c6().$1(P.eg())}else{$.aN.b=z
$.aN=z}},
k1:function(a){var z,y,x
z=$.ap
if(z==null){P.eb(a)
$.aO=$.aN
return}y=new P.dO(a,null)
x=$.aO
if(x==null){y.b=z
$.aO=y
$.ap=y}else{y.b=x.b
x.b=y
$.aO=y
if(y.b==null)$.aN=y}},
kw:function(a){var z=$.w
if(C.f===z){P.by(null,null,C.f,a)
return}z.toString
P.by(null,null,z,z.bJ(a))},
k0:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.T(u)
y=H.aj(u)
$.w.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aw(x)
w=t
v=x.gZ()
c.$2(w,v)}}},
jQ:function(a,b,c,d){var z=a.dV(0)
if(!!J.p(z).$isb_&&z!==$.$get$d0())z.eB(new P.jT(b,c,d))
else b.aa(c,d)},
jR:function(a,b){return new P.jS(a,b)},
ii:function(){return $.w},
bx:function(a,b,c,d,e){var z={}
z.a=d
P.k1(new P.jZ(z,e))},
e9:function(a,b,c,d){var z,y
y=$.w
if(y===c)return d.$0()
$.w=c
z=y
try{y=d.$0()
return y}finally{$.w=z}},
ea:function(a,b,c,d,e){var z,y
y=$.w
if(y===c)return d.$1(e)
$.w=c
z=y
try{y=d.$1(e)
return y}finally{$.w=z}},
k_:function(a,b,c,d,e,f){var z,y
y=$.w
if(y===c)return d.$2(e,f)
$.w=c
z=y
try{y=d.$2(e,f)
return y}finally{$.w=z}},
by:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bJ(d):c.dS(d)
P.eb(d)},
im:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
il:{"^":"i:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
io:{"^":"i:1;a",
$0:function(){this.a.$0()}},
ip:{"^":"i:1;a",
$0:function(){this.a.$0()}},
jx:{"^":"c;a,b,c",
dk:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a9(new P.jz(this,b),0),a)
else throw H.a(P.q("`setTimeout()` not found."))},
p:{
jy:function(a,b){var z=new P.jx(!0,null,0)
z.dk(a,b)
return z}}},
jz:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kM:{"^":"c;$ti"},
is:{"^":"c;$ti"},
js:{"^":"is;a,$ti",
dZ:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.c2("Future already completed"))
z.an(b)}},
dR:{"^":"c;aL:a<,b,c,d,e,$ti",
gdM:function(){return this.b.b},
gc5:function(){return(this.c&1)!==0},
ged:function(){return(this.c&2)!==0},
gc4:function(){return this.c===8},
eb:function(a){return this.b.b.aY(this.d,a)},
ei:function(a){if(this.c!==6)return!0
return this.b.b.aY(this.d,J.aw(a))},
ea:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.ej(z,{func:1,args:[P.c,P.aI]}))return x.eq(z,y.gN(a),a.gZ())
else return x.aY(z,y.gN(a))},
ec:function(){return this.b.b.cd(this.d)}},
ah:{"^":"c;bz:a<,b,dC:c<,$ti",
dg:function(a,b){this.a=4
this.c=a},
gdv:function(){return this.a===2},
gaH:function(){return this.a>=4},
cj:function(a,b){var z,y,x
z=$.w
if(z!==C.f){z.toString
if(b!=null)b=P.jY(b,z)}y=new P.ah(0,z,null,[null])
x=b==null?1:3
this.aB(new P.dR(null,y,x,a,b,[H.B(this,0),null]))
return y},
ci:function(a){return this.cj(a,null)},
eB:function(a){var z,y
z=$.w
y=new P.ah(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.B(this,0)
this.aB(new P.dR(null,y,8,a,null,[z,z]))
return y},
aB:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaH()){y.aB(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.by(null,null,z,new P.iH(this,a))}},
bw:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaL()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaH()){v.bw(a)
return}this.a=v.a
this.c=v.c}z.a=this.aM(a)
y=this.b
y.toString
P.by(null,null,y,new P.iM(z,this))}},
ap:function(){var z=this.c
this.c=null
return this.aM(z)},
aM:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaL()
z.a=y}return y},
an:function(a){var z,y,x
z=this.$ti
y=H.ce(a,"$isb_",z,"$asb_")
if(y){z=H.ce(a,"$isah",z,null)
if(z)P.dS(a,this)
else P.iI(a,this)}else{x=this.ap()
this.a=4
this.c=a
P.aM(this,x)}},
aa:[function(a,b){var z=this.ap()
this.a=8
this.c=new P.bc(a,b)
P.aM(this,z)},function(a){return this.aa(a,null)},"eD","$2","$1","gbr",4,2,13],
$isb_:1,
p:{
iI:function(a,b){var z,y,x
b.a=1
try{a.cj(new P.iJ(b),new P.iK(b))}catch(x){z=H.T(x)
y=H.aj(x)
P.kw(new P.iL(b,z,y))}},
dS:function(a,b){var z
for(;a.gdv();)a=a.c
if(a.gaH()){z=b.ap()
b.a=a.a
b.c=a.c
P.aM(b,z)}else{z=b.c
b.a=2
b.c=a
a.bw(z)}},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aw(v)
t=v.gZ()
y.toString
P.bx(null,null,y,u,t)}return}for(;b.gaL()!=null;b=s){s=b.a
b.a=null
P.aM(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc5()||b.gc4()){q=b.gdM()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aw(v)
t=v.gZ()
y.toString
P.bx(null,null,y,u,t)
return}p=$.w
if(p==null?q!=null:p!==q)$.w=q
else p=null
if(b.gc4())new P.iP(z,x,b,w).$0()
else if(y){if(b.gc5())new P.iO(x,b,r).$0()}else if(b.ged())new P.iN(z,x,b).$0()
if(p!=null)$.w=p
y=x.b
if(!!J.p(y).$isb_){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aM(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dS(y,o)
return}}o=b.b
b=o.ap()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iH:{"^":"i:1;a,b",
$0:function(){P.aM(this.a,this.b)}},
iM:{"^":"i:1;a,b",
$0:function(){P.aM(this.b,this.a.a)}},
iJ:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.an(a)}},
iK:{"^":"i:14;a",
$2:function(a,b){this.a.aa(a,b)},
$1:function(a){return this.$2(a,null)}},
iL:{"^":"i:1;a,b,c",
$0:function(){this.a.aa(this.b,this.c)}},
iP:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ec()}catch(w){y=H.T(w)
x=H.aj(w)
if(this.d){v=J.aw(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bc(y,x)
u.a=!0
return}if(!!J.p(z).$isb_){if(z instanceof P.ah&&z.gbz()>=4){if(z.gbz()===8){v=this.b
v.b=z.gdC()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ci(new P.iQ(t))
v.a=!1}}},
iQ:{"^":"i:0;a",
$1:function(a){return this.a}},
iO:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eb(this.c)}catch(x){z=H.T(x)
y=H.aj(x)
w=this.a
w.b=new P.bc(z,y)
w.a=!0}}},
iN:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ei(z)===!0&&w.e!=null){v=this.b
v.b=w.ea(z)
v.a=!1}}catch(u){y=H.T(u)
x=H.aj(u)
w=this.a
v=J.aw(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bc(y,x)
s.a=!0}}},
dO:{"^":"c;a,b"},
dp:{"^":"c;$ti",
B:function(a,b){var z,y
z={}
y=new P.ah(0,$.w,null,[null])
z.a=null
z.a=this.c8(new P.i1(z,this,b,y),!0,new P.i2(y),y.gbr())
return y},
gi:function(a){var z,y
z={}
y=new P.ah(0,$.w,null,[P.E])
z.a=0
this.c8(new P.i3(z),!0,new P.i4(z,y),y.gbr())
return y}},
i1:{"^":"i;a,b,c,d",
$1:function(a){P.k0(new P.i_(this.c,a),new P.i0(),P.jR(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ch(this.b,"dp",0)]}}},
i_:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
i0:{"^":"i:0;",
$1:function(a){}},
i2:{"^":"i:1;a",
$0:function(){this.a.an(null)}},
i3:{"^":"i:0;a",
$1:function(a){++this.a.a}},
i4:{"^":"i:1;a,b",
$0:function(){this.b.an(this.a.a)}},
hZ:{"^":"c;$ti"},
jT:{"^":"i:1;a,b,c",
$0:function(){return this.a.aa(this.b,this.c)}},
jS:{"^":"i:15;a,b",
$2:function(a,b){P.jQ(this.a,this.b,a,b)}},
bc:{"^":"c;N:a>,Z:b<",
k:function(a){return H.b(this.a)},
$isD:1},
jF:{"^":"c;"},
jZ:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dg()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ax(y)
throw x}},
jb:{"^":"jF;",
er:function(a){var z,y,x
try{if(C.f===$.w){a.$0()
return}P.e9(null,null,this,a)}catch(x){z=H.T(x)
y=H.aj(x)
P.bx(null,null,this,z,y)}},
es:function(a,b){var z,y,x
try{if(C.f===$.w){a.$1(b)
return}P.ea(null,null,this,a,b)}catch(x){z=H.T(x)
y=H.aj(x)
P.bx(null,null,this,z,y)}},
dS:function(a){return new P.jd(this,a)},
bJ:function(a){return new P.jc(this,a)},
dT:function(a){return new P.je(this,a)},
h:function(a,b){return},
cd:function(a){if($.w===C.f)return a.$0()
return P.e9(null,null,this,a)},
aY:function(a,b){if($.w===C.f)return a.$1(b)
return P.ea(null,null,this,a,b)},
eq:function(a,b,c){if($.w===C.f)return a.$2(b,c)
return P.k_(null,null,this,a,b,c)}},
jd:{"^":"i:1;a,b",
$0:function(){return this.a.cd(this.b)}},
jc:{"^":"i:1;a,b",
$0:function(){return this.a.er(this.b)}},
je:{"^":"i:0;a,b",
$1:function(a){return this.a.es(this.b,a)}}}],["","",,P,{"^":"",
O:function(){return new H.d3(0,null,null,null,null,null,0,[null,null])},
d5:function(a){return H.ka(a,new H.d3(0,null,null,null,null,null,0,[null,null]))},
U:function(a,b,c,d){return new P.iZ(0,null,null,null,null,null,0,[d])},
h0:function(a,b,c){var z,y
if(P.cc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aP()
y.push(a)
try{P.jW(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dq(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bT:function(a,b,c){var z,y,x
if(P.cc(a))return b+"..."+c
z=new P.c3(b)
y=$.$get$aP()
y.push(a)
try{x=z
x.a=P.dq(x.ga4(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga4()+c
y=z.ga4()
return y.charCodeAt(0)==0?y:y},
cc:function(a){var z,y
for(z=0;y=$.$get$aP(),z<y.length;++z)if(a===y[z])return!0
return!1},
jW:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.t();t=s,s=r){r=z.gD(z);++x
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
bY:function(a,b){var z,y
z=P.U(null,null,null,b)
for(y=J.aY(a);y.t();)z.R(0,y.gD(y))
return z},
d8:function(a){var z,y,x
z={}
if(P.cc(a))return"{...}"
y=new P.c3("")
try{$.$get$aP().push(a)
x=y
x.a=x.ga4()+"{"
z.a=!0
J.cr(a,new P.hd(z,y))
z=y
z.a=z.ga4()+"}"}finally{z=$.$get$aP()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga4()
return z.charCodeAt(0)==0?z:z},
iZ:{"^":"iS;a,b,c,d,e,f,r,$ti",
gL:function(a){var z=new P.c9(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dn(b)},
dn:function(a){var z=this.d
if(z==null)return!1
return this.aF(z[this.aC(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.J(this))
z=z.b}},
R:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ca()
this.b=z}return this.bo(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ca()
this.c=y}return this.bo(y,b)}else return this.dl(0,b)},
dl:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ca()
this.d=z}y=this.aC(b)
x=z[y]
if(x==null)z[y]=[this.aK(b)]
else{if(this.aF(x,b)>=0)return!1
x.push(this.aK(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.dz(0,b)},
dz:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aC(b)]
x=this.aF(y,b)
if(x<0)return!1
this.bB(y.splice(x,1)[0])
return!0},
ad:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aI()}},
bo:function(a,b){if(a[b]!=null)return!1
a[b]=this.aK(b)
return!0},
bx:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bB(z)
delete a[b]
return!0},
aI:function(){this.r=this.r+1&67108863},
aK:function(a){var z,y
z=new P.j_(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aI()
return z},
bB:function(a){var z,y
z=a.gdw()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aI()},
aC:function(a){return J.a2(a)&0x3ffffff},
aF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gdr(),b))return y
return-1},
p:{
ca:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
j_:{"^":"c;dr:a<,b,dw:c<"},
c9:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iS:{"^":"hP;$ti"},
lM:{"^":"c;$ti"},
d6:{"^":"dX;$ti",$ish:1},
j:{"^":"c;$ti",
gL:function(a){return new H.d7(a,this.gi(a),0,null,[H.b8(this,a,"j",0)])},
u:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.z(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.J(a))}},
e9:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.z(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.J(a))}return y},
be:function(a,b){return H.dr(a,b,null,H.b8(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.b8(this,a,"j",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.ak(z,0,this.gi(a),a)
C.c.ak(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bT(a,"[","]")}},
c_:{"^":"P;$ti"},
hd:{"^":"i:2;a,b",
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
for(z=J.aY(this.gM(a));z.t();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a3(this.gM(a))},
k:function(a){return P.d8(a)}},
hQ:{"^":"c;$ti",
O:function(a,b){var z
for(z=J.aY(b);z.t();)this.R(0,z.gD(z))},
k:function(a){return P.bT(this,"{","}")},
B:function(a,b){var z
for(z=new P.c9(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hP:{"^":"hQ;$ti"},
dX:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fP:function(a){var z=J.p(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aH(a)+"'"},
bR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fP(a)},
cY:function(a){return new P.iE(a)},
ak:function(a){H.bD(H.b(a))},
cd:{"^":"c;"},
"+bool":0,
cP:{"^":"c;dL:a<,b",
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.cP))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.gdL())},
gC:function(a){var z=this.a
return(z^C.b.by(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fD(H.hF(this))
y=P.aZ(H.hD(this))
x=P.aZ(H.hz(this))
w=P.aZ(H.hA(this))
v=P.aZ(H.hC(this))
u=P.aZ(H.hE(this))
t=P.fE(H.hB(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aZ:function(a){if(a>=10)return""+a
return"0"+a}}},
aQ:{"^":"aS;"},
"+double":0,
al:{"^":"c;ab:a<",
l:function(a,b){return new P.al(C.b.l(this.a,b.gab()))},
F:function(a,b){return new P.al(this.a-b.gab())},
J:function(a,b){return new P.al(C.a.ep(this.a*b))},
a1:function(a,b){return C.b.a1(this.a,b.gab())},
ai:function(a,b){return C.b.ai(this.a,b.gab())},
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.gab())},
k:function(a){var z,y,x,w,v
z=new P.fM()
y=this.a
if(y<0)return"-"+new P.al(0-y).k(0)
x=z.$1(C.b.a5(y,6e7)%60)
w=z.$1(C.b.a5(y,1e6)%60)
v=new P.fL().$1(y%1e6)
return""+C.b.a5(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
V:function(a){return new P.al(0-this.a)},
p:{
fK:function(a,b,c,d,e,f){return new P.al(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fL:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fM:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
D:{"^":"c;",
gZ:function(){return H.aj(this.$thrownJsError)}},
dg:{"^":"D;",
k:function(a){return"Throw of null."}},
ac:{"^":"D;a,b,c,d",
gaE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaD:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaE()+y+x
if(!this.a)return w
v=this.gaD()
u=P.bR(this.b)
return w+v+": "+H.b(u)},
p:{
cG:function(a,b,c){return new P.ac(!0,a,b,c)},
fm:function(a){return new P.ac(!1,null,a,"Must not be null")}}},
di:{"^":"ac;e,f,a,b,c,d",
gaE:function(){return"RangeError"},
gaD:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bm:function(a,b,c){return new P.di(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.di(b,c,!0,a,d,"Invalid value")},
hG:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.z(a)
if(0<=a){if(typeof c!=="number")return H.z(c)
z=a>c}else z=!0
if(z)throw H.a(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.z(c)
z=b>c}else z=!0
if(z)throw H.a(P.ao(b,a,c,"end",f))
return b}return c}}},
fZ:{"^":"ac;e,i:f>,a,b,c,d",
gaE:function(){return"RangeError"},
gaD:function(){if(J.aU(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
x:function(a,b,c,d,e){var z=e!=null?e:J.a3(b)
return new P.fZ(b,z,!0,a,c,"Index out of range")}}},
ic:{"^":"D;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
q:function(a){return new P.ic(a)}}},
ia:{"^":"D;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dL:function(a){return new P.ia(a)}}},
bq:{"^":"D;a",
k:function(a){return"Bad state: "+this.a},
p:{
c2:function(a){return new P.bq(a)}}},
fy:{"^":"D;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bR(z))+"."},
p:{
J:function(a){return new P.fy(a)}}},
hw:{"^":"c;",
k:function(a){return"Out of Memory"},
gZ:function(){return},
$isD:1},
dm:{"^":"c;",
k:function(a){return"Stack Overflow"},
gZ:function(){return},
$isD:1},
fC:{"^":"D;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
l7:{"^":"c;"},
iE:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
E:{"^":"aS;"},
"+int":0,
bi:{"^":"c;$ti",
b_:["cN",function(a,b){return new H.dN(this,b,[H.ch(this,"bi",0)])}],
B:function(a,b){var z
for(z=this.gL(this);z.t();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gL(this)
for(y=0;z.t();)++y
return y},
ga2:function(a){var z,y
z=this.gL(this)
if(!z.t())throw H.a(H.d1())
y=z.gD(z)
if(z.t())throw H.a(H.h2())
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fm("index"))
if(b<0)H.S(P.ao(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.t();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.x(b,this,"index",null,y))},
k:function(a){return P.h0(this,"(",")")}},
h3:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bZ:{"^":"c;$ti"},
b0:{"^":"c;",
gC:function(a){return P.c.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aS:{"^":"c;"},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gC:function(a){return H.aG(this)},
k:function(a){return"Instance of '"+H.aH(this)+"'"},
toString:function(){return this.k(this)}},
aI:{"^":"c;"},
m:{"^":"c;"},
"+String":0,
c3:{"^":"c;a4:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dq:function(a,b,c){var z=J.aY(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.t())}else{a+=H.b(z.gD(z))
for(;z.t();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fN:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).T(z,a,b,c)
y.toString
z=new H.dN(new W.Q(y),new W.fO(),[W.t])
return z.ga2(z)},
cX:function(a){return"wheel"},
az:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eZ(a)
if(typeof y==="string")z=a.tagName}catch(x){H.T(x)}return z},
iB:function(a,b){return document.createElement(a)},
ai:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e8:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iv(a)
if(!!J.p(z).$isC)return z
return}else return a},
ec:function(a){var z=$.w
if(z===C.f)return a
return z.dT(a)},
u:{"^":"am;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kA:{"^":"c1;m:x=,n:y=,I:z=","%":"Accelerometer|LinearAccelerationSensor"},
kB:{"^":"f;i:length=","%":"AccessibleNodeList"},
kC:{"^":"u;as:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kD:{"^":"u;as:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kI:{"^":"u;as:href}","%":"HTMLBaseElement"},
bL:{"^":"u;",$isbL:1,"%":"HTMLBodyElement"},
kJ:{"^":"u;K:name=","%":"HTMLButtonElement"},
fr:{"^":"u;G:height},H:width}",
b2:function(a,b,c){if(c!=null)return a.getContext(b,P.k7(c,null))
return a.getContext(b)},
cD:function(a,b){return this.b2(a,b,null)},
"%":"HTMLCanvasElement"},
kK:{"^":"f;",
e2:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ax:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kL:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kN:{"^":"Y;a_:style=","%":"CSSFontFaceRule"},
kO:{"^":"Y;a_:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kP:{"^":"Y;a_:style=","%":"CSSPageRule"},
kQ:{"^":"be;i:length=","%":"CSSPerspective"},
kR:{"^":"bO;m:x=,n:y=","%":"CSSPositionValue"},
kS:{"^":"be;m:x=,n:y=,I:z=","%":"CSSRotation"},
Y:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kT:{"^":"be;m:x=,n:y=,I:z=","%":"CSSScale"},
fz:{"^":"it;i:length=",
bp:function(a,b){var z,y
z=$.$get$cN()
y=z[b]
if(typeof y==="string")return y
y=this.dI(a,b)
z[b]=y
return y},
dI:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
dF:function(a,b,c,d){a.setProperty(b,c,d)},
sG:function(a,b){a.height=b},
sH:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fA:{"^":"c;",
se8:function(a,b){this.dF(a,this.bp(a,"float"),b,"")}},
kU:{"^":"Y;a_:style=","%":"CSSStyleRule"},
bO:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
be:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kV:{"^":"bO;i:length=","%":"CSSTransformValue"},
kW:{"^":"be;m:x=,n:y=,I:z=","%":"CSSTranslation"},
kX:{"^":"bO;i:length=","%":"CSSUnparsedValue"},
kY:{"^":"Y;a_:style=","%":"CSSViewportRule"},
kZ:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
l_:{"^":"f;m:x=,n:y=,I:z=","%":"DeviceAcceleration"},
fG:{"^":"u;","%":"HTMLDivElement"},
fH:{"^":"t;",
gaT:function(a){return new W.b5(a,"mousedown",!1,[W.K])},
gaU:function(a){return new W.b5(a,"mousemove",!1,[W.K])},
gaV:function(a){return new W.b5(a,"mouseup",!1,[W.K])},
gaW:function(a){return new W.b5(a,W.cX(a),!1,[W.aL])},
"%":"XMLDocument;Document"},
l0:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
l1:{"^":"fI;",
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z},
"%":"DOMPoint"},
fI:{"^":"f;",
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z},
"%":";DOMPointReadOnly"},
l2:{"^":"ix;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.a7]},
$iso:1,
$aso:function(){return[P.a7]},
$asj:function(){return[P.a7]},
$ish:1,
$ash:function(){return[P.a7]},
$asl:function(){return[P.a7]},
"%":"ClientRectList|DOMRectList"},
fJ:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gH(a))+" x "+H.b(this.gG(a))},
E:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa7)return!1
return a.left===z.gc6(b)&&a.top===z.gck(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.dW(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcl:function(a){return new P.a6(a.left,a.top,[null])},
gG:function(a){return a.height},
gc6:function(a){return a.left},
gck:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa7:1,
$asa7:I.ar,
"%":";DOMRectReadOnly"},
l3:{"^":"iz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.m]},
$iso:1,
$aso:function(){return[P.m]},
$asj:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"DOMStringList"},
l4:{"^":"f;i:length=","%":"DOMTokenList"},
am:{"^":"t;a_:style=,bv:namespaceURI=,eu:tagName=",
gdQ:function(a){return new W.iA(a)},
k:function(a){return a.localName},
T:["az",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cW
if(z==null){z=H.A([],[W.dd])
y=new W.de(z)
z.push(W.dT(null))
z.push(W.e4())
$.cW=y
d=y}else d=z
z=$.cV
if(z==null){z=new W.e7(d)
$.cV=z
c=z}else{z.a=d
c=z}}if($.a4==null){z=document
y=z.implementation.createHTMLDocument("")
$.a4=y
$.bQ=y.createRange()
y=$.a4
y.toString
x=y.createElement("base")
J.f9(x,z.baseURI)
$.a4.head.appendChild(x)}z=$.a4
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a4
if(!!this.$isbL)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a4.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.A(C.Q,a.tagName)){$.bQ.selectNodeContents(w)
v=$.bQ.createContextualFragment(b)}else{w.innerHTML=b
v=$.a4.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a4.body
if(w==null?z!=null:w!==z)J.cy(w)
c.ba(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"e1",null,null,"geI",5,5,null],
cF:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
cE:function(a,b){return this.cF(a,b,null,null)},
b1:function(a){return a.getBoundingClientRect()},
gaT:function(a){return new W.ag(a,"mousedown",!1,[W.K])},
gaU:function(a){return new W.ag(a,"mousemove",!1,[W.K])},
gaV:function(a){return new W.ag(a,"mouseup",!1,[W.K])},
gaW:function(a){return new W.ag(a,W.cX(a),!1,[W.aL])},
$isam:1,
"%":";Element"},
fO:{"^":"i:0;",
$1:function(a){return!!J.p(a).$isam}},
l5:{"^":"u;G:height},K:name=,H:width}","%":"HTMLEmbedElement"},
l6:{"^":"Z;N:error=","%":"ErrorEvent"},
Z:{"^":"f;",
av:function(a){return a.preventDefault()},
$isZ:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
C:{"^":"f;",
aO:["cL",function(a,b,c,d){if(c!=null)this.dm(a,b,c,d)},function(a,b,c){return this.aO(a,b,c,null)},"dN",null,null,"geF",9,2,null],
dm:function(a,b,c,d){return a.addEventListener(b,H.a9(c,1),d)},
dA:function(a,b,c,d){return a.removeEventListener(b,H.a9(c,1),!1)},
$isC:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e1|e2|e5|e6"},
lq:{"^":"u;K:name=","%":"HTMLFieldSetElement"},
lr:{"^":"iG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bf]},
$iso:1,
$aso:function(){return[W.bf]},
$asj:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$asl:function(){return[W.bf]},
"%":"FileList"},
ls:{"^":"C;N:error=","%":"FileReader"},
lt:{"^":"C;N:error=,i:length=","%":"FileWriter"},
lv:{"^":"f;a_:style=","%":"FontFace"},
lw:{"^":"C;",
eJ:function(a,b,c){return a.forEach(H.a9(b,3),c)},
B:function(a,b){b=H.a9(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
ly:{"^":"u;i:length=,K:name=","%":"HTMLFormElement"},
lA:{"^":"c1;m:x=,n:y=,I:z=","%":"Gyroscope"},
lB:{"^":"f;i:length=","%":"History"},
lC:{"^":"iU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$asj:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fX:{"^":"fH;","%":"HTMLDocument"},
lD:{"^":"u;G:height},K:name=,H:width}","%":"HTMLIFrameElement"},
lE:{"^":"u;G:height},H:width}","%":"HTMLImageElement"},
lG:{"^":"u;G:height},K:name=,H:width}","%":"HTMLInputElement"},
bj:{"^":"dK;",
geC:function(a){return a.which},
$isbj:1,
"%":"KeyboardEvent"},
lL:{"^":"u;as:href}","%":"HTMLLinkElement"},
lN:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lO:{"^":"c1;m:x=,n:y=,I:z=","%":"Magnetometer"},
lP:{"^":"u;K:name=","%":"HTMLMapElement"},
hf:{"^":"u;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lR:{"^":"f;i:length=","%":"MediaList"},
lS:{"^":"C;aQ:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lT:{"^":"C;",
aO:function(a,b,c,d){if(J.H(b,"message"))a.start()
this.cL(a,b,c,!1)},
"%":"MessagePort"},
lU:{"^":"u;K:name=","%":"HTMLMetaElement"},
lV:{"^":"j0;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.A([],[P.m])
this.B(a,new W.hh(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hh:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lW:{"^":"j1;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.A([],[P.m])
this.B(a,new W.hi(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hi:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lX:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bl]},
$iso:1,
$aso:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$asl:function(){return[W.bl]},
"%":"MimeTypeArray"},
K:{"^":"dK;bP:button=",
gcb:function(a){var z,y,x
if(!!a.offsetX)return new P.a6(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.p(W.e8(z)).$isam)throw H.a(P.q("offsetX is only supported on elements"))
y=W.e8(z)
z=[null]
x=new P.a6(a.clientX,a.clientY,z).F(0,J.f_(J.f1(y)))
return new P.a6(J.cA(x.a),J.cA(x.b),z)}},
$isK:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
Q:{"^":"d6;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c2("No elements"))
if(y>1)throw H.a(P.c2("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.p(b)
if(!!z.$isQ){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gL(b),y=this.a;z.t();)y.appendChild(z.gD(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gL:function(a){var z=this.a.childNodes
return new W.cZ(z,z.length,-1,null,[H.b8(C.T,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asd6:function(){return[W.t]},
$asj:function(){return[W.t]},
$ash:function(){return[W.t]},
$asdX:function(){return[W.t]}},
t:{"^":"C;au:parentNode=,aX:previousSibling=",
gca:function(a){return new W.Q(a)},
em:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cM(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m4:{"^":"f;",
ek:[function(a){return a.previousNode()},"$0","gaX",1,0,4],
"%":"NodeIterator"},
hr:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$asj:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
m7:{"^":"u;G:height},K:name=,H:width}","%":"HTMLObjectElement"},
m9:{"^":"u;K:name=","%":"HTMLOutputElement"},
ma:{"^":"u;K:name=","%":"HTMLParamElement"},
b1:{"^":"f;i:length=","%":"Plugin"},
mc:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b1]},
$iso:1,
$aso:function(){return[W.b1]},
$asj:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$asl:function(){return[W.b1]},
"%":"PluginArray"},
mf:{"^":"f;",
b1:function(a){return a.getBoundingClientRect()},
"%":"Range"},
ml:{"^":"jf;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.A([],[P.m])
this.B(a,new W.hM(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hM:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
dk:{"^":"u;i:length=,K:name=",$isdk:1,"%":"HTMLSelectElement"},
c1:{"^":"C;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mm:{"^":"Z;N:error=","%":"SensorErrorEvent"},
mn:{"^":"u;K:name=","%":"HTMLSlotElement"},
mo:{"^":"e2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bo]},
$iso:1,
$aso:function(){return[W.bo]},
$asj:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$asl:function(){return[W.bo]},
"%":"SourceBufferList"},
mp:{"^":"jl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bp]},
$iso:1,
$aso:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$asl:function(){return[W.bp]},
"%":"SpeechGrammarList"},
mq:{"^":"Z;N:error=","%":"SpeechRecognitionError"},
b4:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
ms:{"^":"jo;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gM:function(a){var z=H.A([],[P.m])
this.B(a,new W.hY(z))
return z},
gi:function(a){return a.length},
$asP:function(){return[P.m,P.m]},
"%":"Storage"},
hY:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
i6:{"^":"u;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=W.fN("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.Q(y).O(0,J.eX(z))
return y},
"%":"HTMLTableElement"},
mv:{"^":"u;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.T(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.ga2(z)
x.toString
z=new W.Q(x)
w=z.ga2(z)
y.toString
w.toString
new W.Q(y).O(0,new W.Q(w))
return y},
"%":"HTMLTableRowElement"},
mw:{"^":"u;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.T(z.createElement("table"),b,c,d)
z.toString
z=new W.Q(z)
x=z.ga2(z)
y.toString
x.toString
new W.Q(y).O(0,new W.Q(x))
return y},
"%":"HTMLTableSectionElement"},
dt:{"^":"u;",$isdt:1,"%":"HTMLTemplateElement"},
mx:{"^":"u;K:name=","%":"HTMLTextAreaElement"},
mz:{"^":"jw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bt]},
$iso:1,
$aso:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$asl:function(){return[W.bt]},
"%":"TextTrackCueList"},
mA:{"^":"e6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bs]},
$iso:1,
$aso:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$asl:function(){return[W.bs]},
"%":"TextTrackList"},
mB:{"^":"f;i:length=","%":"TimeRanges"},
mC:{"^":"jB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bu]},
$iso:1,
$aso:function(){return[W.bu]},
$asj:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$asl:function(){return[W.bu]},
"%":"TouchList"},
mD:{"^":"f;i:length=","%":"TrackDefaultList"},
mG:{"^":"f;",
eK:[function(a){return a.parentNode()},"$0","gau",1,0,4],
ek:[function(a){return a.previousNode()},"$0","gaX",1,0,4],
"%":"TreeWalker"},
dK:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mI:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mK:{"^":"f;m:x=,I:z=","%":"VRStageBoundsPoint"},
mL:{"^":"hf;G:height},H:width}","%":"HTMLVideoElement"},
mM:{"^":"C;i:length=","%":"VideoTrackList"},
aL:{"^":"K;",
ge4:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.q("deltaY is not supported"))},
$isaL:1,
"%":"WheelEvent"},
ig:{"^":"C;",
gdP:function(a){var z,y
z=P.aS
y=new P.ah(0,$.w,null,[z])
this.dt(a)
this.dB(a,W.ec(new W.ih(new P.js(y,[z]))))
return y},
dB:function(a,b){return a.requestAnimationFrame(H.a9(b,1))},
dt:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ih:{"^":"i:0;a",
$1:function(a){this.a.dZ(0,a)}},
mN:{"^":"C;"},
mR:{"^":"t;K:name=,bv:namespaceURI=","%":"Attr"},
mS:{"^":"jH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$asj:function(){return[W.Y]},
$ish:1,
$ash:function(){return[W.Y]},
$asl:function(){return[W.Y]},
"%":"CSSRuleList"},
mT:{"^":"fJ;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
E:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa7)return!1
return a.left===z.gc6(b)&&a.top===z.gck(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dW(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcl:function(a){return new P.a6(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mU:{"^":"jJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bh]},
$iso:1,
$aso:function(){return[W.bh]},
$asj:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$asl:function(){return[W.bh]},
"%":"GamepadList"},
mX:{"^":"jL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$asj:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mY:{"^":"jN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b4]},
$iso:1,
$aso:function(){return[W.b4]},
$asj:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$asl:function(){return[W.b4]},
"%":"SpeechRecognitionResultList"},
mZ:{"^":"jP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.br]},
$iso:1,
$aso:function(){return[W.br]},
$asj:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$asl:function(){return[W.br]},
"%":"StyleSheetList"},
iq:{"^":"c_;du:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gM(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.F)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gM:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbv(v)==null)y.push(u.gK(v))}return y},
$asc_:function(){return[P.m,P.m]},
$asP:function(){return[P.m,P.m]}},
iA:{"^":"iq;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gM(this).length}},
b5:{"^":"dp;a,b,c,$ti",
c8:function(a,b,c,d){return W.a8(this.a,this.b,a,!1,H.B(this,0))}},
ag:{"^":"b5;a,b,c,$ti"},
iC:{"^":"hZ;a,b,c,d,e,$ti",
df:function(a,b,c,d,e){this.dJ()},
dV:function(a){if(this.b==null)return
this.dK()
this.b=null
this.d=null
return},
dJ:function(){var z=this.d
if(z!=null&&this.a<=0)J.eE(this.b,this.c,z,!1)},
dK:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eD(x,this.c,z,!1)}},
p:{
a8:function(a,b,c,d,e){var z=c==null?null:W.ec(new W.iD(c))
z=new W.iC(0,a,b,z,!1,[e])
z.df(a,b,c,!1,e)
return z}}},
iD:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
c7:{"^":"c;cv:a<",
dh:function(a){var z,y
z=$.$get$c8()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.P[y],W.kg())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kh())}},
a6:function(a){return $.$get$dU().A(0,W.az(a))},
a0:function(a,b,c){var z,y,x
z=W.az(a)
y=$.$get$c8()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dT:function(a){var z,y
z=document.createElement("a")
y=new W.jg(z,window.location)
y=new W.c7(y)
y.dh(a)
return y},
mV:[function(a,b,c,d){return!0},"$4","kg",16,0,9],
mW:[function(a,b,c,d){var z,y,x,w,v
z=d.gcv()
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
return z},"$4","kh",16,0,9]}},
l:{"^":"c;$ti",
gL:function(a){return new W.cZ(a,this.gi(a),-1,null,[H.b8(this,a,"l",0)])}},
de:{"^":"c;a",
a6:function(a){return C.c.bG(this.a,new W.ht(a))},
a0:function(a,b,c){return C.c.bG(this.a,new W.hs(a,b,c))}},
ht:{"^":"i:0;a",
$1:function(a){return a.a6(this.a)}},
hs:{"^":"i:0;a,b,c",
$1:function(a){return a.a0(this.a,this.b,this.c)}},
jh:{"^":"c;cv:d<",
dj:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.b_(0,new W.ji())
y=b.b_(0,new W.jj())
this.b.O(0,z)
x=this.c
x.O(0,C.R)
x.O(0,y)},
a6:function(a){return this.a.A(0,W.az(a))},
a0:["cP",function(a,b,c){var z,y
z=W.az(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dO(c)
else if(y.A(0,"*::"+b))return this.d.dO(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
ji:{"^":"i:0;",
$1:function(a){return!C.c.A(C.p,a)}},
jj:{"^":"i:0;",
$1:function(a){return C.c.A(C.p,a)}},
jt:{"^":"jh;e,a,b,c,d",
a0:function(a,b,c){if(this.cP(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cs(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
p:{
e4:function(){var z=P.m
z=new W.jt(P.bY(C.o,z),P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z),null)
z.dj(null,new H.he(C.o,new W.ju(),[H.B(C.o,0),null]),["TEMPLATE"],null)
return z}}},
ju:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jr:{"^":"c;",
a6:function(a){var z=J.p(a)
if(!!z.$isdj)return!1
z=!!z.$isy
if(z&&W.az(a)==="foreignObject")return!1
if(z)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.i.cI(b,"on"))return!1
return this.a6(a)}},
cZ:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aV(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
iu:{"^":"c;a",$isC:1,p:{
iv:function(a){if(a===window)return a
else return new W.iu(a)}}},
dd:{"^":"c;"},
m5:{"^":"c;"},
mH:{"^":"c;"},
jg:{"^":"c;a,b"},
e7:{"^":"c;a",
ba:function(a){new W.jE(this).$2(a,null)},
ac:function(a,b){if(b==null)J.cy(a)
else b.removeChild(a)},
dE:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cs(a)
x=y.gdu().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.T(t)}v="element unprintable"
try{v=J.ax(a)}catch(t){H.T(t)}try{u=W.az(a)
this.dD(a,b,z,v,u,y,x)}catch(t){if(H.T(t) instanceof P.ac)throw t
else{this.ac(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dD:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ac(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a6(a)){this.ac(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.ac(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gM(f)
y=H.A(z.slice(0),[H.B(z,0)])
for(x=f.gM(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.a0(a,J.fd(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.p(a).$isdt)this.ba(a.content)}},
jE:{"^":"i:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dE(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ac(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eY(z)}catch(w){H.T(w)
v=z
if(x){u=J.e(v)
if(u.gau(v)!=null){u.gau(v)
u.gau(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
it:{"^":"f+fA;"},
iw:{"^":"f+j;"},
ix:{"^":"iw+l;"},
iy:{"^":"f+j;"},
iz:{"^":"iy+l;"},
iF:{"^":"f+j;"},
iG:{"^":"iF+l;"},
iT:{"^":"f+j;"},
iU:{"^":"iT+l;"},
j0:{"^":"f+P;"},
j1:{"^":"f+P;"},
j2:{"^":"f+j;"},
j3:{"^":"j2+l;"},
j4:{"^":"f+j;"},
j5:{"^":"j4+l;"},
j8:{"^":"f+j;"},
j9:{"^":"j8+l;"},
jf:{"^":"f+P;"},
e1:{"^":"C+j;"},
e2:{"^":"e1+l;"},
jk:{"^":"f+j;"},
jl:{"^":"jk+l;"},
jo:{"^":"f+P;"},
jv:{"^":"f+j;"},
jw:{"^":"jv+l;"},
e5:{"^":"C+j;"},
e6:{"^":"e5+l;"},
jA:{"^":"f+j;"},
jB:{"^":"jA+l;"},
jG:{"^":"f+j;"},
jH:{"^":"jG+l;"},
jI:{"^":"f+j;"},
jJ:{"^":"jI+l;"},
jK:{"^":"f+j;"},
jL:{"^":"jK+l;"},
jM:{"^":"f+j;"},
jN:{"^":"jM+l;"},
jO:{"^":"f+j;"},
jP:{"^":"jO+l;"}}],["","",,P,{"^":"",
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.O()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
k7:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cr(a,new P.k8(z))
return z},
cU:function(){var z=$.cT
if(z==null){z=J.bF(window.navigator.userAgent,"Opera",0)
$.cT=z}return z},
fF:function(){var z,y
z=$.cQ
if(z!=null)return z
y=$.cR
if(y==null){y=J.bF(window.navigator.userAgent,"Firefox",0)
$.cR=y}if(y)z="-moz-"
else{y=$.cS
if(y==null){y=P.cU()!==!0&&J.bF(window.navigator.userAgent,"Trident/",0)
$.cS=y}if(y)z="-ms-"
else z=P.cU()===!0?"-o-":"-webkit-"}$.cQ=z
return z},
k8:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mk:{"^":"C;N:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mE:{"^":"C;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iV:{"^":"c;",
ej:function(){return Math.random()}},
a6:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
E:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a6))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a2(this.a)
y=J.a2(this.b)
return P.iW(P.dV(P.dV(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.a6(y,C.a.l(z,x),this.$ti)},
F:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.z(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.F()
if(typeof y!=="number")return H.z(y)
return new P.a6(z-x,w-y,this.$ti)},
J:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.J()
y=this.b
if(typeof y!=="number")return y.J()
return new P.a6(z*b,y*b,this.$ti)}},
ja:{"^":"c;$ti"},
a7:{"^":"ja;$ti"}}],["","",,P,{"^":"",l8:{"^":"y;m:x=,n:y=","%":"SVGFEBlendElement"},l9:{"^":"y;m:x=,n:y=","%":"SVGFEColorMatrixElement"},la:{"^":"y;m:x=,n:y=","%":"SVGFEComponentTransferElement"},lb:{"^":"y;m:x=,n:y=","%":"SVGFECompositeElement"},lc:{"^":"y;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},ld:{"^":"y;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},le:{"^":"y;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lf:{"^":"y;m:x=,n:y=","%":"SVGFEFloodElement"},lg:{"^":"y;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lh:{"^":"y;m:x=,n:y=","%":"SVGFEImageElement"},li:{"^":"y;m:x=,n:y=","%":"SVGFEMergeElement"},lj:{"^":"y;m:x=,n:y=","%":"SVGFEMorphologyElement"},lk:{"^":"y;m:x=,n:y=","%":"SVGFEOffsetElement"},ll:{"^":"y;m:x=,n:y=,I:z=","%":"SVGFEPointLightElement"},lm:{"^":"y;m:x=,n:y=","%":"SVGFESpecularLightingElement"},ln:{"^":"y;m:x=,n:y=,I:z=","%":"SVGFESpotLightElement"},lo:{"^":"y;m:x=,n:y=","%":"SVGFETileElement"},lp:{"^":"y;m:x=,n:y=","%":"SVGFETurbulenceElement"},lu:{"^":"y;m:x=,n:y=","%":"SVGFilterElement"},lx:{"^":"aA;m:x=,n:y=","%":"SVGForeignObjectElement"},fW:{"^":"aA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aA:{"^":"y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lF:{"^":"aA;m:x=,n:y=","%":"SVGImageElement"},lK:{"^":"iY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d4]},
$ish:1,
$ash:function(){return[P.d4]},
$asl:function(){return[P.d4]},
"%":"SVGLengthList"},lQ:{"^":"y;m:x=,n:y=","%":"SVGMaskElement"},m6:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dh]},
$ish:1,
$ash:function(){return[P.dh]},
$asl:function(){return[P.dh]},
"%":"SVGNumberList"},mb:{"^":"y;m:x=,n:y=","%":"SVGPatternElement"},md:{"^":"f;m:x=,n:y=","%":"SVGPoint"},me:{"^":"f;i:length=","%":"SVGPointList"},mg:{"^":"f;m:x=,n:y=","%":"SVGRect"},mh:{"^":"fW;m:x=,n:y=","%":"SVGRectElement"},dj:{"^":"y;",$isdj:1,"%":"SVGScriptElement"},mt:{"^":"jq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$asj:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"SVGStringList"},y:{"^":"am;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.dd])
z.push(W.dT(null))
z.push(W.e4())
z.push(new W.jr())
c=new W.e7(new W.de(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).e1(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.Q(w)
u=z.ga2(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaT:function(a){return new W.ag(a,"mousedown",!1,[W.K])},
gaU:function(a){return new W.ag(a,"mousemove",!1,[W.K])},
gaV:function(a){return new W.ag(a,"mouseup",!1,[W.K])},
gaW:function(a){return new W.ag(a,"mousewheel",!1,[W.aL])},
$isy:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mu:{"^":"aA;m:x=,n:y=","%":"SVGSVGElement"},i7:{"^":"aA;","%":"SVGTextPathElement;SVGTextContentElement"},my:{"^":"i7;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mF:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dx]},
$ish:1,
$ash:function(){return[P.dx]},
$asl:function(){return[P.dx]},
"%":"SVGTransformList"},mJ:{"^":"aA;m:x=,n:y=","%":"SVGUseElement"},iX:{"^":"f+j;"},iY:{"^":"iX+l;"},j6:{"^":"f+j;"},j7:{"^":"j6+l;"},jp:{"^":"f+j;"},jq:{"^":"jp+l;"},jC:{"^":"f+j;"},jD:{"^":"jC+l;"}}],["","",,P,{"^":"",kE:{"^":"f;i:length=","%":"AudioBuffer"},kF:{"^":"ir;",
h:function(a,b){return P.R(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gM:function(a){var z=H.A([],[P.m])
this.B(a,new P.fo(z))
return z},
gi:function(a){return a.size},
$asP:function(){return[P.m,null]},
"%":"AudioParamMap"},fo:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},kG:{"^":"f;aQ:enabled=","%":"AudioTrack"},kH:{"^":"C;i:length=","%":"AudioTrackList"},fp:{"^":"C;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m8:{"^":"fp;i:length=","%":"OfflineAudioContext"},ir:{"^":"f+P;"}}],["","",,P,{"^":"",mi:{"^":"f;",
bF:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindFramebuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b){return a.clear(b)},
bR:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bS:function(a,b){return a.compileShader(b)},
bT:function(a){return a.createBuffer()},
bU:function(a){return a.createProgram()},
bV:function(a,b){return a.createShader(b)},
bW:function(a){return a.createTexture()},
bY:function(a,b){return a.depthMask(b)},
bZ:function(a,b){return a.disable(b)},
c_:function(a,b,c,d){return a.drawArrays(b,c,d)},
c0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c1:function(a,b){return a.enable(b)},
c2:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.R(a.getContextAttributes())},
b3:function(a){return a.getError()},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
cc:function(a,b,c){return a.pixelStorei(b,c)},
bd:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aZ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
ce:function(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
cf:function(a,b,c,d){return a.texParameterf(b,c,d)},
cg:function(a,b,c,d){return a.texParameteri(b,c,d)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c){return a.uniform1fv(b,c)},
co:function(a,b,c){return a.uniform1i(b,c)},
cp:function(a,b,c){return a.uniform1iv(b,c)},
cq:function(a,b,c){return a.uniform2fv(b,c)},
cr:function(a,b,c){return a.uniform3fv(b,c)},
cs:function(a,b,c){return a.uniform4fv(b,c)},
ct:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mj:{"^":"f;",
dR:function(a,b){return a.beginTransformFeedback(b)},
dU:function(a,b){return a.bindVertexArray(b)},
e3:function(a){return a.createVertexArray()},
e5:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e6:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e7:function(a){return a.endTransformFeedback()},
ez:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eA:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bF:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindFramebuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b){return a.clear(b)},
bR:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bS:function(a,b){return a.compileShader(b)},
bT:function(a){return a.createBuffer()},
bU:function(a){return a.createProgram()},
bV:function(a,b){return a.createShader(b)},
bW:function(a){return a.createTexture()},
bY:function(a,b){return a.depthMask(b)},
bZ:function(a,b){return a.disable(b)},
c_:function(a,b,c,d){return a.drawArrays(b,c,d)},
c0:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c1:function(a,b){return a.enable(b)},
c2:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.R(a.getContextAttributes())},
b3:function(a){return a.getError()},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c7:function(a,b){return a.linkProgram(b)},
cc:function(a,b,c){return a.pixelStorei(b,c)},
bd:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aZ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
ce:function(a,b,c,d,e,f,g){return this.aZ(a,b,c,d,e,f,g,null,null,null)},
cf:function(a,b,c,d){return a.texParameterf(b,c,d)},
cg:function(a,b,c,d){return a.texParameteri(b,c,d)},
cm:function(a,b,c){return a.uniform1f(b,c)},
cn:function(a,b,c){return a.uniform1fv(b,c)},
co:function(a,b,c){return a.uniform1i(b,c)},
cp:function(a,b,c){return a.uniform1iv(b,c)},
cq:function(a,b,c){return a.uniform2fv(b,c)},
cr:function(a,b,c){return a.uniform3fv(b,c)},
cs:function(a,b,c){return a.uniform4fv(b,c)},
ct:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mr:{"^":"jn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return P.R(a.item(b))},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bZ]},
$ish:1,
$ash:function(){return[P.bZ]},
$asl:function(){return[P.bZ]},
"%":"SQLResultSetRowList"},jm:{"^":"f+j;"},jn:{"^":"jm+l;"}}],["","",,G,{"^":"",
ij:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.m])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.af(z,"\n")},
dP:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bV(a,b)
z.bd(a,y,c)
z.bS(a,y)
x=z.b7(a,y,35713)
if(x!=null&&J.H(x,!1)){w=z.b6(a,y)
P.ak("E:Compilation failed:")
P.ak("E:"+G.ij(c))
P.ak("E:Failure:")
P.ak(C.i.l("E:",w))
throw H.a(w)}return y},
d_:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bI(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bJ(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cw(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fS:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bI(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bJ(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fT:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bI(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bJ(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cw(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.f0(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fR:function(a,b){var z,y,x,w,v
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
iR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ad(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.E]],v=[P.aQ],u=[T.V],t=[T.k],s=[T.r];y.t();){r=y.d
if(!x.ar(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.ek>0)H.bD("I: "+q)
continue}p=z.h(0,r)
switch($.$get$W().h(0,r).a){case"vec2":b.a9(r,G.fS(H.ba(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a9(r,G.d_(H.ba(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a9(r,G.fT(H.ba(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a9(r,new Float32Array(H.bw(H.ba(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a9(r,G.fR(H.ba(p,"$ish",w,"$ash"),null),4)
break}}},
aF:{"^":"c;aQ:c>"},
c5:{"^":"aF;d,a,b,c",
bk:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.dJ(H.kd(this),null))+"}["+this.a+"]"],[P.m])
for(y=this.d,x=new H.ad(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.af(z,"\n")}},
fq:{"^":"dl;"},
ft:{"^":"c;a,b",
c3:function(a,b,c){J.eV(this.a,b)
if(c>0)J.fj(this.a,b,c)},
cA:function(a,b,c,d,e,f,g,h){J.bE(this.a,34962,b)
J.fk(this.a,c,d,e,!1,g,h)}},
fU:{"^":"c;a,b,c,d,e"},
fQ:{"^":"c;a,b,c,d"},
fV:{"^":"c;a,b,c,d,e",
bi:function(a){switch($.$get$W().h(0,a).a){case"vec2":this.e.j(0,a,H.A([],[T.r]))
break
case"vec3":this.e.j(0,a,H.A([],[T.k]))
break
case"vec4":this.e.j(0,a,H.A([],[T.V]))
break
case"float":this.e.j(0,a,H.A([],[P.aQ]))
break
case"uvec4":this.e.j(0,a,H.A([],[[P.h,P.E]]))
break}},
cT:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.fQ(z,z+1,z+2,z+3))},
am:function(a){var z,y
for(z=this.d,y=0;y<24;++y)z.push(a[y].aq(0))},
cR:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<24;++y)z.push(b[y].aq(0))},
cS:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].aq(0))},
cY:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.A(y,[P.E])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.geE(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.geG(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.geH(t)
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
for(y=this.e,x=new H.ad(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$W().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.af(z," ")}},
dw:{"^":"c;a,b,c"},
du:{"^":"c;a,b,c",p:{
dv:function(a,b,c){return new G.du(a,b,c)}}},
d9:{"^":"c5;d,a,b,c"},
hg:{"^":"aF;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bh:function(a,b,c){var z,y
C.i.bq(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bE(z.a,34962,y)
J.co(z.a,34962,b,35048)},
cZ:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a9:function(a,b,c){var z,y,x,w,v
z=J.cp(a,0)===105
if(z&&this.z===0)this.z=C.b.cQ(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bG(x.a))
this.bh(a,b,c)
w=$.$get$W().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bb(x.a,this.e)
x.c3(0,v,z?1:0)
x.cA(0,y.h(0,a),v,w.bj(),5126,!1,0,0)},
am:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bG(y.a))
this.ch=a
this.bh("aPosition",a,3)
x=$.$get$W().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bb(y.a,this.e)
y.c3(0,w,0)
y.cA(0,z.h(0,"aPosition"),w,x.bj(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ad(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.af(y,"  ")},
p:{
da:function(a,b,c,d){return new G.hg(b,J.eP(b.a),c,P.O(),d,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)}}},
hx:{"^":"c5;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cU:function(a,b){var z
if(typeof a!=="number")return a.a7()
if(typeof b!=="number")return H.z(b)
z=a/b
if(this.z===z)return
this.z=z
this.bl()},
bl:function(){var z,y,x,w,v,u
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
u=new T.k(new Float32Array(3))
u.v(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
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
y=J.p(t)
x=!!y.$isV
q=x?y.gaw(t):1
if(!!y.$isk){p=y.gm(t)
s=y.gn(t)
r=y.gI(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gI(t)
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
c.q(this.db)
c.c9(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hL:{"^":"aF;d,e,f,r,x,y,z,Q,ch,a,b,c",
d3:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.j(0,t,J.cx(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.j(0,t,J.cx(w.a,v,t))}},
d8:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ad(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ar(0,v))x.push(v)}for(z=this.x,y=new P.c9(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
dd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ad(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cp(t,0)){case 117:if(w.ar(0,t)){s=b.h(0,t)
if(v.ar(0,t))H.bD("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$W().h(0,t)
if(r==null)H.S("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bK(x.a,q,s)
else if(!!J.p(s).$ish_)J.fh(x.a,q,s)
break
case"float":if(r.c===0)J.ff(x.a,q,s)
else if(!!J.p(s).$isbS)J.fg(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a1(s,"$isG").a
J.cF(x.a,q,!1,p)}else if(!!J.p(s).$isbS)J.cF(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a1(s,"$isa5").a
J.cE(x.a,q,!1,p)}else if(!!J.p(s).$isbS)J.cE(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cD(o,q,H.a1(s,"$isV").a)
else J.cD(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cC(o,q,H.a1(s,"$isk").a)
else J.cC(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cB(o,q,H.a1(s,"$isr").a)
else J.cB(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.z(p)
J.cm(x.a,33984+p)
p=H.a1(s,"$isc4").b
J.aW(x.a,3553,p)
p=this.ch
J.bK(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.z(p)
J.cm(x.a,33984+p)
p=H.a1(s,"$isc4").b
J.aW(x.a,34067,p)
p=this.ch
J.bK(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bD("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.H(s,!0)
o=x.a
if(p)J.aX(o,2929)
else J.bH(o,2929)
break
case"cStencilFunc":H.a1(s,"$isdw")
p=s.a
o=x.a
if(p===1281)J.bH(o,2960)
else{J.aX(o,2960)
o=s.b
n=s.c
J.fa(x.a,p,o,n)}break
case"cDepthWrite":J.eQ(x.a,s)
break
case"cBlendEquation":H.a1(s,"$isdu")
p=s.a
o=x.a
if(p===1281)J.bH(o,3042)
else{J.aX(o,3042)
o=s.b
n=s.c
J.eI(x.a,o,n)
J.eH(x.a,p)}break}++u
break}}m=P.fK(0,0,0,Date.now()-new P.cP(z,!1).a,0,0)
""+u
m.k(0)},
cX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fi(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bn()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.dd(w.a,w.bk())}y=this.Q
y.ad(0)
for(v=a.cy,u=new H.ad(v,v.r,null,null,[H.B(v,0)]),u.c=v.e;u.t();)y.R(0,u.d)
t=this.d8()
if(t.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.bb(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cZ()
u=a.Q
r=a.z
if(s)J.eF(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eU(q,y,v,u,0,r)
else J.eT(q,y,v,u,0)}else{u=z.a
if(r>1)J.eS(u,y,0,v,r)
else J.eR(u,y,0,v)}if(s)J.eW(z.a)},
p:{
bn:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.U(null,null,null,P.m)
y=c.b
x=d.b
w=c.f
v=J.eM(b.a)
u=G.dP(b.a,35633,y)
J.cn(b.a,v,u)
t=G.dP(b.a,35632,x)
J.cn(b.a,v,t)
if(w.length>0)J.fe(b.a,v,w,35980)
J.f7(b.a,v)
if(J.f6(b.a,v,35714)!==!0)H.S(J.f5(b.a,v))
z=new G.hL(b,c,d,v,P.bY(c.c,null),P.O(),P.O(),z,null,a,!1,!0)
z.d3(a,b,c,d)
return z}}},
v:{"^":"c;a,b,c",
bj:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hR:{"^":"c;a,b,c,d,e,f,r,x",
al:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.F)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.ay(y)},
X:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)y.push(a[x])
C.c.ay(y)},
a3:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.ay(z)},
d4:function(a,b){this.b=this.de(!0,a,b)},
Y:function(a){return this.d4(a,null)},
de:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=$.$get$W().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$W().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$W().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$W().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.O(w,b)
w.push("}")
return C.c.af(w,"\n")},
p:{
af:function(a){return new G.hR(a,null,[],[],[],[],0,P.O())}}},
dl:{"^":"aF;",
b0:function(){var z,y,x
z=this.f
y=this.d.a
x=z.a
x[0]=y[2]
x[1]=y[6]
x[2]=y[10]
return z},
b9:function(){var z,y,x
z=this.r
y=this.d.a
x=z.a
x[0]=y[1]
x[1]=y[5]
x[2]=y[9]
return z},
bc:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
i8:{"^":"c;a,b,c,d,e,f,r",
d_:function(a,b){var z=this.e
if(z!==1)J.fc(a.a,b,34046,z)
J.cz(a.a,b,10240,this.r)
J.cz(a.a,b,10241,this.f)}},
c4:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fY:{"^":"c4;f,a,b,c,d,e",
d5:function(a){var z,y
z=this.d
y=this.c
J.aW(z.a,y,this.b)
J.fb(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
id:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dM().ej()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.da(z,a.d,0,a.e.x)
y.am(x)
return y},
hK:{"^":"hJ;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eo:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sH(z,y)
w.sG(z,x)
P.ak("size change "+H.b(y)+" "+H.b(x))
this.dx.cU(y,x)
this.z=y
this.Q=x},"$1","gen",4,0,17]},
hW:{"^":"c;",
d6:function(a,b,c){var z,y,x
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
x=this.di(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
di:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iB("span",null)
y=J.cu(v)
J.e(y).sH(y,"1px")
C.n.sG(y,""+d+"px")
C.n.se8(y,"left")
x=C.n.bp(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hX:{"^":"hW;e,f,a,b,c,d",
da:function(a,b){var z,y,x,w,v;++this.e
if(J.aU(J.eC(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ey(z,2)+" fps"
y=this.c;(y&&C.F).cE(y,b)
x=C.b.a5(30*C.t.dW(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cu(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d9:function(a){return this.da(a,"")}}}],["","",,A,{"^":"",
ei:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.ct(b)!==!0)return
z=b.dc(c)
b.k(0)
y=C.c.geh(e)
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
x.e0(new T.a5(v))
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
y.j(0,"uTransformationMatrix",b.d)
y.j(0,"uModelMatrix",w)
y.j(0,"uNormalMatrix",x)
e.push(b.ch)
a.cX(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.F)(y),++s)A.ei(a,y[s],z,d,e)},
dc:{"^":"dl;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dc:function(a){var z=this.dx
z.q(a)
z.c9(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
b2:{"^":"aF;el:d<,e,ca:f>,a,b,c"},
hJ:{"^":"aF;",
d2:function(a,b,c){if(this.d==null)this.d=new G.fU(this.e,null,null,null,null)},
cW:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eG(v.a,36160,z)
J.fl(v.a,this.x,this.y,x,w)
if(y!==0)J.eJ(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
if(J.ct(t)!==!0)continue
t.gel()
s=t.e
s.push(new G.c5(P.O(),"transforms",!1,!0))
r=new T.G(new Float32Array(16))
r.W()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.F)(x),++q)A.ei(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}},
cV:function(){return this.cW(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fB:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.k(new Float32Array(3))
x.v(z,y,d2)
w=new T.k(new Float32Array(3))
w.v(d0,y,d2)
v=new T.k(new Float32Array(3))
v.v(d0,d1,d2)
u=new T.k(new Float32Array(3))
u.v(z,d1,d2)
t=-d2
s=new T.k(new Float32Array(3))
s.v(z,y,t)
r=new T.k(new Float32Array(3))
r.v(z,d1,t)
q=new T.k(new Float32Array(3))
q.v(d0,d1,t)
p=new T.k(new Float32Array(3))
p.v(d0,y,t)
o=new T.k(new Float32Array(3))
o.v(z,d1,t)
n=new T.k(new Float32Array(3))
n.v(z,d1,d2)
m=new T.k(new Float32Array(3))
m.v(d0,d1,d2)
l=new T.k(new Float32Array(3))
l.v(d0,d1,t)
k=new T.k(new Float32Array(3))
k.v(d0,y,d2)
j=new T.k(new Float32Array(3))
j.v(z,y,d2)
i=new T.k(new Float32Array(3))
i.v(z,y,t)
h=new T.k(new Float32Array(3))
h.v(d0,y,t)
g=new T.k(new Float32Array(3))
g.v(d0,y,t)
f=new T.k(new Float32Array(3))
f.v(d0,d1,t)
e=new T.k(new Float32Array(3))
e.v(d0,d1,d2)
d=new T.k(new Float32Array(3))
d.v(d0,y,d2)
c=new T.k(new Float32Array(3))
c.v(z,y,t)
b=new T.k(new Float32Array(3))
b.v(z,y,d2)
y=new T.k(new Float32Array(3))
y.v(z,d1,d2)
a=new T.k(new Float32Array(3))
a.v(z,d1,t)
z=new T.r(new Float32Array(2))
z.w(c7,c9)
t=new T.r(new Float32Array(2))
t.w(c6,c9)
a0=new T.r(new Float32Array(2))
a0.w(c6,c8)
a1=new T.r(new Float32Array(2))
a1.w(c7,c8)
a2=new T.r(new Float32Array(2))
a2.w(c6,c9)
a3=new T.r(new Float32Array(2))
a3.w(c6,c8)
a4=new T.r(new Float32Array(2))
a4.w(c7,c8)
a5=new T.r(new Float32Array(2))
a5.w(c7,c9)
a6=new T.r(new Float32Array(2))
a6.w(c7,c8)
a7=new T.r(new Float32Array(2))
a7.w(c7,c9)
a8=new T.r(new Float32Array(2))
a8.w(c6,c9)
a9=new T.r(new Float32Array(2))
a9.w(c6,c8)
b0=new T.r(new Float32Array(2))
b0.w(c6,c8)
b1=new T.r(new Float32Array(2))
b1.w(c7,c8)
b2=new T.r(new Float32Array(2))
b2.w(c7,c9)
b3=new T.r(new Float32Array(2))
b3.w(c6,c9)
b4=new T.r(new Float32Array(2))
b4.w(c6,c9)
b5=new T.r(new Float32Array(2))
b5.w(c6,c8)
b6=new T.r(new Float32Array(2))
b6.w(c7,c8)
b7=new T.r(new Float32Array(2))
b7.w(c7,c9)
b8=new T.r(new Float32Array(2))
b8.w(c7,c9)
b9=new T.r(new Float32Array(2))
b9.w(c6,c9)
c0=new T.r(new Float32Array(2))
c0.w(c6,c8)
c1=new T.r(new Float32Array(2))
c1.w(c7,c8)
c2=new G.fV(!1,[],[],[],P.O())
c2.bi("aTexUV")
c2.bi("aNormal")
c2.cT(6)
c2.am([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.cR("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dQ(),c3<6;++c3){c4=z[c3]
c2.cS("aNormal",[c4,c4,c4,c4])}return c2}}],["","",,D,{"^":"",h7:{"^":"c;a,b,c",
d0:function(a){var z
a=document
z=W.bj
W.a8(a,"keydown",new D.h9(this),!1,z)
W.a8(a,"keyup",new D.ha(this),!1,z)},
p:{
h8:function(a){var z=P.E
z=new D.h7(P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z))
z.d0(a)
return z}}},h9:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.R(0,J.cv(a))
z.b.R(0,a.which)}},ha:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.ag(0,J.cv(a))
z.c.R(0,a.which)}},hj:{"^":"c;a,b,c,d,e,f,r,x",
d1:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaU(a)
W.a8(y.a,y.b,new D.hl(this),!1,H.B(y,0))
y=z.gaT(a)
W.a8(y.a,y.b,new D.hm(this),!1,H.B(y,0))
y=z.gaV(a)
W.a8(y.a,y.b,new D.hn(this),!1,H.B(y,0))
z=z.gaW(a)
W.a8(z.a,z.b,new D.ho(this),!1,H.B(z,0))},
p:{
hk:function(a){var z=P.E
z=new D.hj(P.U(null,null,null,z),P.U(null,null,null,z),P.U(null,null,null,z),0,0,0,0,0)
z.d1(a)
return z}}},hl:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.av(a)
y=this.a
y.r=z.gcb(a).a
y.x=z.gcb(a).b
y.d=a.movementX
y.e=a.movementY}},hm:{"^":"i:5;a",
$1:function(a){var z=J.e(a)
z.av(a)
P.ak("BUTTON "+H.b(z.gbP(a)))
z=this.a
z.a.R(0,a.button)
z.b.R(0,a.button)}},hn:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.av(a)
y=this.a
y.a.ag(0,z.gbP(a))
y.c.R(0,a.button)}},ho:{"^":"i:18;a",
$1:function(a){var z=J.e(a)
z.av(a)
this.a.f=z.ge4(a)}},hv:{"^":"fq;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b9:function(a){var z,y
z=C.S.e9(a,0,new A.kf())
if(typeof z!=="number")return H.z(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kf:{"^":"i:19;",
$2:function(a,b){var z,y
z=J.av(a,J.a2(b))
if(typeof z!=="number")return H.z(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a5:{"^":"c;bt:a<",
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.d(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.b9(this.a)},
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
return new T.k(z)},
J:function(a,b){var z,y
z=new Float32Array(9)
y=new T.a5(z)
y.q(this)
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b
return y},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.a5(z)
y.q(this)
x=b.gbt()
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
y=new T.a5(z)
y.q(this)
x=b.gbt()
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
V:function(a){var z,y
z=new Float32Array(9)
y=new T.a5(z)
y.q(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]
return y},
e0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},G:{"^":"c;bu:a<",
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n[3] "+this.U(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.G){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.b9(this.a)},
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
return new T.V(z)},
V:function(a){var z,y
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]
z[9]=-z[9]
z[10]=-z[10]
z[11]=-z[11]
z[12]=-z[12]
z[13]=-z[13]
z[14]=-z[14]
z[15]=-z[15]
return y},
J:function(a,b){var z,y
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b
z[9]=z[9]*b
z[10]=z[10]*b
z[11]=z[11]*b
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
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
y=new T.G(z)
y.q(this)
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
z[9]=z[9]-x[9]
z[10]=z[10]-x[10]
z[11]=z[11]-x[11]
z[12]=z[12]-x[12]
z[13]=z[13]-x[13]
z[14]=z[14]-x[14]
z[15]=z[15]-x[15]
return y},
ah:function(a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=a4.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
u=z[0]/v
t=z[1]/v
s=z[2]/v
r=Math.cos(H.eh(a5))
q=Math.sin(H.eh(a5))
p=1-r
o=u*u*p+r
z=s*q
n=u*t*p-z
w=t*q
m=u*s*p+w
l=t*u*p+z
k=t*t*p+r
z=u*q
j=t*s*p-z
i=s*u*p-w
h=s*t*p+z
g=s*s*p+r
z=this.a
w=z[0]
x=z[4]
y=z[8]
f=z[1]
e=z[5]
d=z[9]
c=z[2]
b=z[6]
a=z[10]
a0=z[3]
a1=z[7]
a2=z[11]
z[0]=w*o+x*l+y*i
z[1]=f*o+e*l+d*i
z[2]=c*o+b*l+a*i
z[3]=a0*o+a1*l+a2*i
z[4]=w*n+x*k+y*h
z[5]=f*n+e*k+d*h
z[6]=c*n+b*k+a*h
z[7]=a0*n+a1*k+a2*h
z[8]=w*m+x*j+y*g
z[9]=f*m+e*j+d*g
z[10]=c*m+b*j+a*g
z[11]=a0*m+a1*j+a2*g},
W:function(){var z=this.a
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
c9:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},r:{"^":"c;bC:a<",
w:function(a,b){var z=this.a
z[0]=a
z[1]=b},
q:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.b9(this.a)},
V:function(a){var z,y
z=new Float32Array(2)
y=new T.r(z)
y.q(this)
z[1]=-z[1]
z[0]=-z[0]
return y},
F:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.r(z)
y.q(this)
x=b.gbC()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.r(z)
y.q(this)
x=b.gbC()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
a7:function(a,b){var z=new T.r(new Float32Array(2))
z.q(this)
z.a8(0,1/b)
return z},
J:function(a,b){var z=new T.r(new Float32Array(2))
z.q(this)
z.a8(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a8:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
aq:function(a){var z=new T.r(new Float32Array(2))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},k:{"^":"c;bD:a<",
v:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.k){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.b9(this.a)},
V:function(a){var z,y
z=new Float32Array(3)
y=new T.k(z)
y.q(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
F:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.k(z)
y.q(this)
x=b.gbD()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.k(z)
y.q(this)
x=b.gbD()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
a7:function(a,b){return this.bb(1/b)},
J:function(a,b){return this.bb(b)},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aS:function(a){var z,y,x,w,v,u
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
aP:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bX:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.k(new Float32Array(3))
z.v(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
bb:function(a){var z,y
z=new Float32Array(3)
y=new T.k(z)
y.q(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
aq:function(a){var z=new T.k(new Float32Array(3))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
p:{
aK:function(a,b,c){var z=new T.k(new Float32Array(3))
z.v(a,b,c)
return z}}},V:{"^":"c;bE:a<",
q:function(a){var z,y
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
if(b instanceof T.V){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.b9(this.a)},
V:function(a){var z,y
z=new Float32Array(4)
y=new T.V(z)
y.q(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
return y},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.V(z)
y.q(this)
x=b.gbE()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.V(z)
y.q(this)
x=b.gbE()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
a7:function(a,b){var z=new T.V(new Float32Array(4))
z.q(this)
z.a8(0,1/b)
return z},
J:function(a,b){var z=new T.V(new Float32Array(4))
z.q(this)
z.a8(0,b)
return z},
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
a8:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
gaw:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
eq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z={}
y=document
x=new R.hX(0,0,null,null,null,null)
x.d6(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.ft(null,w)
u=J.f2(w,"webgl2",P.d5(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.S(P.cY('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.f3(u))
if($.ek>0)P.ak("I: "+t)
J.eK(u,0,0,0,1)
J.aX(u,2929)
J.aX(u,2884)
u=new Float32Array(3)
t=D.h8(null)
s=D.hk(w)
r=new T.G(new Float32Array(16))
r.W()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hv(65,0,0,0,new T.k(u),-0.02,t,s,r,new T.k(q),new T.k(p),new T.k(o),new T.k(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.G(new Float32Array(16))
u.W()
t=new T.G(new Float32Array(16))
t.W()
m=new G.hx(n,50,1,0.1,1000,u,t,new T.G(new Float32Array(16)),P.O(),"perspective",!1,!0)
m.bl()
u=H.A([],[A.b2])
l=new R.hK(w,m,null,v,u,17664,0,0,0,0,"main",!1,!0)
l.d2("main",v,null)
l.eo(null)
t=W.Z
W.a8(window,"resize",l.gen(),!1,t)
s=G.bn("plasma1",v,$.$get$ev(),$.$get$es())
r=G.bn("plasma2",v,$.$get$ew(),$.$get$et())
q=G.bn("plasma3",v,$.$get$ex(),$.$get$eu())
k=[new A.b2(s,[m],[],"plasma1",!1,!0),new A.b2(r,[m],[],"plasma2",!1,!0),new A.b2(q,[m],[],"plasma3",!1,!0)]
for(j=0;j<3;++j)u.push(k[j])
s=P.O()
i=new G.d9(s,"mat",!1,!0)
s.j(0,"cDepthTest",!0)
s.j(0,"cDepthWrite",!0)
s.j(0,"cBlendEquation",$.$get$cI())
r=$.$get$dn()
s.j(0,"cStencilFunc",r)
s=k[0].d
h=B.fB(!0,1,0,1,0,10,10,10)
g=G.da("cube",s.d,4,s.e.x)
g.am(G.d_(h.d,null))
s=h.cY()
q=g.d
g.y=J.bG(q.a)
p=g.ch.length
if(p<768){g.cx=new Uint8Array(H.bw(s))
g.Q=5121}else if(p<196608){g.cx=new Uint16Array(H.bw(s))
g.Q=5123}else{g.cx=new Uint32Array(H.bw(s))
g.Q=5125}J.bb(q.a,g.e)
s=g.y
p=g.cx
J.bE(q.a,34963,s)
J.co(q.a,34963,p,35048)
G.iR(h,g)
s=new Float32Array(9)
q=new T.G(new Float32Array(16))
q.W()
p=new Float32Array(16)
o=new T.G(p)
o.W()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new T.k(c)
a=new A.dc(i,g,[],new T.a5(s),q,o,new T.k(f),new T.k(e),new T.k(d),b,g.a,!1,!0)
a.bc(0,0,0)
c[0]=p[0]
c[1]=p[4]
c[2]=p[8]
o.ah(0,b,-1)
o.ah(0,a.b9(),-0.7)
z.a=0
k[0].f.push(a)
C.G.dN(y,"keypress",new Q.ks(z,k,a))
a0=H.a1(y.querySelector("#myselect"),"$isdk")
a0.toString
W.a8(a0,"change",new Q.kt(z,k,a,a0),!1,t)
t=G.bn("stars",v,$.$get$ez(),$.$get$ey())
o=[]
s=t.d
q=$.$get$cH()
p=P.O()
p.j(0,"cDepthTest",!0)
p.j(0,"cDepthWrite",!1)
p.j(0,"cBlendEquation",q)
p.j(0,"cStencilFunc",r)
a1=y.createElement("canvas")
a1.width=64
a1.height=64
a2=C.E.cD(a1,"2d")
a3=J.eN(a2,32,32,1,32,32,22)
a3.addColorStop(0,"gray")
a3.addColorStop(1,"black")
a2.fillStyle=a3
a2.fillRect(0,0,64,64)
a3=a2.createRadialGradient(32,32,1,32,32,6)
a3.addColorStop(0,"white")
a3.addColorStop(1,"gray")
a2.globalAlpha=0.9
a2.fillStyle=a3
a2.arc(32,32,4,0,6.283185307179586,!1)
a2.fill("nonzero")
y=new G.i8(!1,!1,!1,!0,1,9729,9729)
r=J.eO(s.a)
q=new G.fY(a1,"Utils::Particles",r,3553,s,y)
J.aW(s.a,3553,r)
J.f8(s.a,37440,1)
q.d5(a1)
y.d_(s,3553)
J.f4(s.a)
J.aW(s.a,3553,null)
p.j(0,"uTexture",q)
p.j(0,"uPointSize",1000)
g=R.id(t,2000,100)
y=new Float32Array(9)
s=new T.G(new Float32Array(16))
s.W()
r=new T.G(new Float32Array(16))
r.W()
q=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
o.push(new A.dc(new G.d9(p,"stars",!1,!0),g,[],new T.a5(y),s,r,new T.k(q),new T.k(f),new T.k(e),new T.k(new Float32Array(3)),g.a,!1,!0))
u.push(new A.b2(t,[m],o,"stars",!1,!0))
z.b=0
new Q.kr(z,n,a,i,l,x).$1(0)},
ks:{"^":"i:0;a,b,c",
$1:function(a){var z,y,x,w
z=this.b
y=this.a
x=y.a
if(typeof x!=="number")return x.aj()
w=this.c
C.c.ag(z[C.b.aj(x,3)].f,w)
x=y.a
if(typeof x!=="number")return x.l()
z[C.b.aj(x+1,3)].f.push(w)
w=y.a
if(typeof w!=="number")return w.l()
y.a=C.b.aj(w+1,3)}},
kt:{"^":"i:20;a,b,c,d",
$1:function(a){var z,y,x,w,v
z=this.b
y=this.a
x=y.a
if(x>>>0!==x||x>=3)return H.d(z,x)
w=this.c
C.c.ag(z[x].f,w)
v=this.d.selectedIndex
y.a=v
if(v>>>0!==v||v>=3)return H.d(z,v)
z[v].f.push(w)}},
kr:{"^":"i:21;a,b,c,d,e,f",
$1:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=this.a
y=J.aR(a2)
x=y.F(a2,z.b)
z.b=y.l(a2,0)
w=this.b
w.go+=0.001
v=w.r1
u=v.a
if(u.A(0,0)||u.A(0,1)){u=w.go
t=v.d
if(typeof t!=="number")return t.J()
w.go=u+t*0.01
t=w.id
u=v.e
if(typeof u!=="number")return u.J()
w.id=t+u*0.01}u=w.k4
t=u.a
if(t.A(0,37))w.go+=0.03
else if(t.A(0,39))w.go-=0.03
if(t.A(0,38))w.id+=0.03
else if(t.A(0,40))w.id-=0.03
if(t.A(0,33))w.fy*=0.99
else if(t.A(0,34))w.fy*=1.01
if(t.A(0,32)){w.go=0
w.id=0}t=v.f
if(typeof t!=="number")return t.J()
t=w.fy-t*w.k3
if(t>0)w.fy=t
t=C.a.dX(w.id,-1.4707963267948965,1.4707963267948965)
w.id=t
s=w.fy
r=w.go
q=s*Math.cos(t)
w.bc(q*Math.cos(r),s*Math.sin(t),q*Math.sin(r))
r=w.k2
t=w.d
s=t.a
p=r.a
s[12]=s[12]+p[0]
s[13]=s[13]+p[1]
s[14]=s[14]+p[2]
o=s[12]
n=s[13]
m=s[14]
l=new T.k(new Float32Array(3))
l.v(0,1,0)
p=w.e
k=p.a
k[0]=s[12]
k[1]=s[13]
k[2]=s[14]
j=p.F(0,r)
j.aS(0)
i=l.bX(j)
i.aS(0)
h=j.bX(i)
h.aS(0)
r=i.aP(p)
k=h.aP(p)
p=j.aP(p)
g=i.a
f=g[0]
e=h.a
d=e[0]
c=j.a
b=c[0]
a=g[1]
a0=e[1]
a1=c[1]
g=g[2]
e=e[2]
c=c[2]
s[15]=1
s[14]=-p
s[13]=-k
s[12]=-r
s[11]=0
s[10]=c
s[9]=e
s[8]=g
s[7]=0
s[6]=a1
s[5]=a0
s[4]=a
s[3]=0
s[2]=b
s[1]=d
s[0]=f
s[12]=o
s[13]=n
s[14]=m
t.ah(0,w.b0(),-w.k1)
u.c.ad(0)
u.b.ad(0)
v.e=0
v.d=0
v.f=0
v.c.ad(0)
v.b.ad(0)
v=this.c
u=J.el(x)
w=u.J(x,0.0005)
t=v.d
t.ah(0,v.b0(),J.cl(w))
u=u.J(x,0.0005)
t.ah(0,v.b9(),J.cl(u))
this.d.d.j(0,"uTime",y.a7(a2,1000))
this.e.cV()
C.a9.gdP(window).ci(this)
this.f.d9(z.b)}}},1]]
setupProgram(dart,0,0)
J.p=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bU.prototype
return J.d2.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.h5.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.c)return a
return J.b7(a)}
J.kb=function(a){if(typeof a=="number")return J.an.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.c)return a
return J.b7(a)}
J.ab=function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.c)return a
return J.b7(a)}
J.b6=function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.c)return a
return J.b7(a)}
J.kc=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bU.prototype
return J.an.prototype}if(a==null)return a
if(!(a instanceof P.c))return J.aJ.prototype
return a}
J.aR=function(a){if(typeof a=="number")return J.an.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aJ.prototype
return a}
J.el=function(a){if(typeof a=="number")return J.an.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aJ.prototype
return a}
J.em=function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aJ.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.c)return a
return J.b7(a)}
J.av=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kb(a).l(a,b)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).E(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aR(a).ai(a,b)}
J.aU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aR(a).a1(a,b)}
J.cl=function(a){if(typeof a=="number")return-a
return J.kc(a).V(a)}
J.eC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aR(a).F(a,b)}
J.aV=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kp(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).h(a,b)}
J.eD=function(a,b,c,d){return J.e(a).dA(a,b,c,d)}
J.cm=function(a,b){return J.e(a).bF(a,b)}
J.eE=function(a,b,c,d){return J.e(a).aO(a,b,c,d)}
J.cn=function(a,b,c){return J.e(a).bH(a,b,c)}
J.eF=function(a,b){return J.e(a).dR(a,b)}
J.bE=function(a,b,c){return J.e(a).bI(a,b,c)}
J.eG=function(a,b,c){return J.e(a).bK(a,b,c)}
J.aW=function(a,b,c){return J.e(a).bL(a,b,c)}
J.bb=function(a,b){return J.e(a).dU(a,b)}
J.eH=function(a,b){return J.e(a).bM(a,b)}
J.eI=function(a,b,c){return J.e(a).bN(a,b,c)}
J.co=function(a,b,c,d){return J.e(a).bO(a,b,c,d)}
J.eJ=function(a,b){return J.b6(a).bQ(a,b)}
J.eK=function(a,b,c,d,e){return J.e(a).bR(a,b,c,d,e)}
J.cp=function(a,b){return J.em(a).dY(a,b)}
J.eL=function(a,b){return J.el(a).S(a,b)}
J.bF=function(a,b,c){return J.ab(a).e_(a,b,c)}
J.bG=function(a){return J.e(a).bT(a)}
J.eM=function(a){return J.e(a).bU(a)}
J.eN=function(a,b,c,d,e,f,g){return J.e(a).e2(a,b,c,d,e,f,g)}
J.eO=function(a){return J.e(a).bW(a)}
J.eP=function(a){return J.e(a).e3(a)}
J.eQ=function(a,b){return J.e(a).bY(a,b)}
J.bH=function(a,b){return J.e(a).bZ(a,b)}
J.eR=function(a,b,c,d){return J.e(a).c_(a,b,c,d)}
J.eS=function(a,b,c,d,e){return J.e(a).e5(a,b,c,d,e)}
J.eT=function(a,b,c,d,e){return J.e(a).c0(a,b,c,d,e)}
J.eU=function(a,b,c,d,e,f){return J.e(a).e6(a,b,c,d,e,f)}
J.cq=function(a,b){return J.b6(a).u(a,b)}
J.aX=function(a,b){return J.e(a).c1(a,b)}
J.eV=function(a,b){return J.e(a).c2(a,b)}
J.eW=function(a){return J.e(a).e7(a)}
J.cr=function(a,b){return J.b6(a).B(a,b)}
J.cs=function(a){return J.e(a).gdQ(a)}
J.ct=function(a){return J.e(a).gaQ(a)}
J.aw=function(a){return J.e(a).gN(a)}
J.a2=function(a){return J.p(a).gC(a)}
J.aY=function(a){return J.b6(a).gL(a)}
J.a3=function(a){return J.ab(a).gi(a)}
J.eX=function(a){return J.e(a).gca(a)}
J.eY=function(a){return J.e(a).gaX(a)}
J.cu=function(a){return J.e(a).ga_(a)}
J.eZ=function(a){return J.e(a).geu(a)}
J.f_=function(a){return J.e(a).gcl(a)}
J.f0=function(a){return J.e(a).gaw(a)}
J.cv=function(a){return J.e(a).geC(a)}
J.bI=function(a){return J.e(a).gm(a)}
J.bJ=function(a){return J.e(a).gn(a)}
J.cw=function(a){return J.e(a).gI(a)}
J.f1=function(a){return J.e(a).b1(a)}
J.f2=function(a,b,c){return J.e(a).b2(a,b,c)}
J.f3=function(a){return J.e(a).ax(a)}
J.f4=function(a){return J.e(a).b3(a)}
J.f5=function(a,b){return J.e(a).b4(a,b)}
J.f6=function(a,b,c){return J.e(a).b5(a,b,c)}
J.cx=function(a,b,c){return J.e(a).b8(a,b,c)}
J.f7=function(a,b){return J.e(a).c7(a,b)}
J.f8=function(a,b,c){return J.e(a).cc(a,b,c)}
J.cy=function(a){return J.b6(a).em(a)}
J.f9=function(a,b){return J.e(a).sas(a,b)}
J.fa=function(a,b,c,d){return J.e(a).bf(a,b,c,d)}
J.fb=function(a,b,c,d,e,f,g){return J.e(a).ce(a,b,c,d,e,f,g)}
J.fc=function(a,b,c,d){return J.e(a).cf(a,b,c,d)}
J.cz=function(a,b,c,d){return J.e(a).cg(a,b,c,d)}
J.cA=function(a){return J.aR(a).ev(a)}
J.fd=function(a){return J.em(a).ex(a)}
J.ax=function(a){return J.p(a).k(a)}
J.fe=function(a,b,c,d){return J.e(a).ez(a,b,c,d)}
J.ff=function(a,b,c){return J.e(a).cm(a,b,c)}
J.fg=function(a,b,c){return J.e(a).cn(a,b,c)}
J.bK=function(a,b,c){return J.e(a).co(a,b,c)}
J.fh=function(a,b,c){return J.e(a).cp(a,b,c)}
J.cB=function(a,b,c){return J.e(a).cq(a,b,c)}
J.cC=function(a,b,c){return J.e(a).cr(a,b,c)}
J.cD=function(a,b,c){return J.e(a).cs(a,b,c)}
J.cE=function(a,b,c,d){return J.e(a).ct(a,b,c,d)}
J.cF=function(a,b,c,d){return J.e(a).cu(a,b,c,d)}
J.fi=function(a,b){return J.e(a).cw(a,b)}
J.fj=function(a,b,c){return J.e(a).eA(a,b,c)}
J.fk=function(a,b,c,d,e,f,g){return J.e(a).cz(a,b,c,d,e,f,g)}
J.fl=function(a,b,c,d,e){return J.e(a).cB(a,b,c,d,e)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bL.prototype
C.E=W.fr.prototype
C.n=W.fz.prototype
C.F=W.fG.prototype
C.G=W.fX.prototype
C.H=J.f.prototype
C.c=J.aB.prototype
C.t=J.d2.prototype
C.b=J.bU.prototype
C.a=J.an.prototype
C.i=J.aD.prototype
C.O=J.aE.prototype
C.S=H.hp.prototype
C.T=W.hr.prototype
C.w=J.hy.prototype
C.B=W.i6.prototype
C.q=J.aJ.prototype
C.a9=W.ig.prototype
C.C=new P.hw()
C.D=new P.iV()
C.f=new P.jb()
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.P=H.A(I.at(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.Q=I.at(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.R=I.at([])
C.o=H.A(I.at(["bind","if","ref","repeat","syntax"]),[P.m])
C.p=H.A(I.at(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.U=new G.v("vec3","vertex btangents",0)
C.d=new G.v("vec3","",0)
C.V=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.x=new G.v("vec3","vertex coordinates",0)
C.W=new G.v("vec3","vertex binormals",0)
C.y=new G.v("vec4","for wireframe",0)
C.X=new G.v("vec4","per vertex color",0)
C.Y=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.a_=new G.v("mat4","",4)
C.Z=new G.v("mat4","",128)
C.e=new G.v("float","",0)
C.a0=new G.v("float","",4)
C.a1=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.a2=new G.v("float","for bump maps",0)
C.a3=new G.v("vec2","texture uvs",0)
C.a4=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.a5=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.a6=new G.v("vec3","vertex normals",0)
C.a7=new G.v("sampler2DShadow","",0)
C.z=new G.v("vec3","per vertex color",0)
C.A=new G.v("mat3","",0)
C.a8=new G.v("vec3","vertex tangents",0)
$.X=0
$.ay=null
$.cJ=null
$.eo=null
$.ed=null
$.eA=null
$.bz=null
$.bA=null
$.ci=null
$.ap=null
$.aN=null
$.aO=null
$.cb=!1
$.w=C.f
$.a4=null
$.bQ=null
$.cW=null
$.cV=null
$.cT=null
$.cS=null
$.cR=null
$.cQ=null
$.ek=0
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
I.$lazy(y,x,w)}})(["cO","$get$cO",function(){return H.en("_$dart_dartClosure")},"bV","$get$bV",function(){return H.en("_$dart_js")},"dy","$get$dy",function(){return H.a_(H.bv({
toString:function(){return"$receiver$"}}))},"dz","$get$dz",function(){return H.a_(H.bv({$method$:null,
toString:function(){return"$receiver$"}}))},"dA","$get$dA",function(){return H.a_(H.bv(null))},"dB","$get$dB",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dF","$get$dF",function(){return H.a_(H.bv(void 0))},"dG","$get$dG",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dD","$get$dD",function(){return H.a_(H.dE(null))},"dC","$get$dC",function(){return H.a_(function(){try{null.$method$}catch(z){return z.message}}())},"dI","$get$dI",function(){return H.a_(H.dE(void 0))},"dH","$get$dH",function(){return H.a_(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c6","$get$c6",function(){return P.ik()},"d0","$get$d0",function(){var z,y
z=P.b0
y=new P.ah(0,P.ii(),null,[z])
y.dg(null,z)
return y},"aP","$get$aP",function(){return[]},"cN","$get$cN",function(){return{}},"dU","$get$dU",function(){return P.bY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c8","$get$c8",function(){return P.O()},"dn","$get$dn",function(){return new G.dw(1281,0,4294967295)},"cI","$get$cI",function(){return G.dv(1281,1281,1281)},"cH","$get$cH",function(){return G.dv(32774,770,769)},"W","$get$W",function(){return P.d5(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.X,"aPosition",C.x,"aTexUV",C.a3,"aNormal",C.a6,"aBinormal",C.W,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a8,"aBitangent",C.U,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.V,"vCenter",C.y,"vDepth",C.a1,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a7,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a5,"uAnimationTable",C.h,"uTime",C.a4,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Z,"uLightDescs",C.a_,"uLightCount",C.e,"uLightTypes",C.a0,"uBumpScale",C.a2,"uNormalScale",C.Y])},"dM","$get$dM",function(){return C.D},"ez","$get$ez",function(){var z=G.af("PointSpritesV")
z.al(["aPosition"])
z.X(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.Y(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"ey","$get$ey",function(){var z=G.af("PointSpritesF")
z.X(["uTexture"])
z.Y(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"dQ","$get$dQ",function(){return[T.aK(0,0,1),T.aK(0,0,-1),T.aK(0,1,0),T.aK(0,-1,0),T.aK(1,0,0),T.aK(-1,0,0)]},"ev","$get$ev",function(){var z=G.af("Plasma1V")
z.al(["aPosition","aTexUV"])
z.X(["uPerspectiveViewMatrix","uModelMatrix"])
z.a3(["vTexUV"])
z.Y(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"es","$get$es",function(){var z=G.af("Plasma1F")
z.a3(["vTexUV"])
z.X(["uTime"])
z.Y(["    #define PI 3.1415926535897932384626433832795\n    float u_time = uTime * 5.0;\n    vec2 u_k = vec2(10.0,10.0);\n\n    float v = 0.0;\n    vec2 c = vTexUV * u_k - u_k/2.0;\n    v += sin((c.x+u_time));\n    v += sin((c.y+u_time)/2.0);\n    v += sin((c.x+c.y+u_time)/2.0);\n    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));\n    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);\n    v = v / 2.0;\n    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));\n    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);\n    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);\n    oFragColor = vec4(col*.5 + .5, 1.0);\n"])
return z},"ew","$get$ew",function(){var z=G.af("Plasma2V")
z.al(["aPosition","aTexUV"])
z.X(["uPerspectiveViewMatrix","uModelMatrix"])
z.a3(["vTexUV"])
z.Y(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"et","$get$et",function(){var z=G.af("Plasma2F")
z.a3(["vTexUV"])
z.X(["uTime"])
z.Y(["    float x = vTexUV.x;\n    float y = vTexUV.y;\n    float v = sin(x * cos(uTime/15.0) * 120.0) +\n              cos(y * sin(uTime/10.0) * 120.0) +\n              sin(sqrt(y * y + x * x) * 40.0);\n    oFragColor = vec4(1, v,1,1);\n  "])
return z},"ex","$get$ex",function(){var z=G.af("Plasma3V")
z.al(["aPosition","aTexUV"])
z.X(["uPerspectiveViewMatrix","uModelMatrix"])
z.a3(["vTexUV"])
z.Y(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"eu","$get$eu",function(){var z=G.af("Plasma3F")
z.a3(["vTexUV"])
z.X(["uTime"])
z.Y(["    float x = vTexUV.x*1000.0; // gl_FragCoord.x;\n    float y = vTexUV.y*1000.0; // gl_FragCoord.y;\n    float time = uTime;\n    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;\n    float mov1 = y / 720.0 / 0.2 + time;\n    float mov2 = x / 1280.0 / 0.2;\n    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);\n    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));\n    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));\n    oFragColor = vec4( c1,c2,c3,1.0);\n  "])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.K]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.m,args:[P.E]},{func:1,args:[W.bj]},{func:1,ret:P.cd,args:[W.am,P.m,P.m,W.c7]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aI]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aI]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[W.Z]},{func:1,args:[W.aL]},{func:1,args:[P.E,P.c]},{func:1,args:[W.Z]},{func:1,v:true,args:[P.aS]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.ky(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.eq,[])
else Q.eq([])})})()
//# sourceMappingURL=plasma.dart.js.map
