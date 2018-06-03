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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cd(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",lw:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
ch:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b3:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cg==null){H.ka()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dI("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bS()]
if(v!=null)return v
v=H.ke(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bS(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
f:{"^":"c;",
C:function(a,b){return a===b},
gw:function(a){return H.aE(a)},
k:["cE",function(a){return"Instance of '"+H.aF(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fT:{"^":"f;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$iscb:1},
fU:{"^":"f;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaX:1},
bT:{"^":"f;",
gw:function(a){return 0},
k:["cG",function(a){return String(a)}]},
hm:{"^":"bT;"},
b0:{"^":"bT;"},
aC:{"^":"bT;",
k:function(a){var z=a[$.$get$cK()]
return z==null?this.cG(a):J.au(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ay:{"^":"f;$ti",
L:function(a,b){var z,y
if(!!a.fixed$length)H.U(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.H(a))}},
a1:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b0:function(a,b){return H.dn(a,b,null,H.A(a,0))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
ge6:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cY())},
cw:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.U(P.p("setRange"))
P.hu(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.D()
if(typeof b!=="number")return H.y(b)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.b0(d,e).ei(0,!1)
x=0}y=J.a6(w)
v=y.gi(w)
if(typeof v!=="number")return H.y(v)
if(x+z>v)throw H.a(H.fQ())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
a9:function(a,b,c,d){return this.cw(a,b,c,d,0)},
bx:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.H(a))}return!1},
cz:function(a,b){if(!!a.immutable$list)H.U(P.p("sort"))
H.hI(a,J.jJ())},
b1:function(a){return this.cz(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.G(a[z],b))return!0
return!1},
k:function(a){return P.bR(a,"[","]")},
gI:function(a){return new J.fe(a,a.length,0,null,[H.A(a,0)])},
gw:function(a){return H.aE(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.U(P.p("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cC(b,"newLength",null))
if(b<0)throw H.a(P.al(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.U(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.z([],[H.A(a,0)])
this.si(y,z)
this.a9(y,0,a.length,a)
this.a9(y,a.length,z,b)
return y},
$ism:1,
$asm:I.ao,
$ish:1,
p:{
az:function(a){a.fixed$length=Array
return a},
lu:[function(a,b){return J.eB(a,b)},"$2","jJ",8,0,21]}},
lv:{"^":"ay;$ti"},
fe:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aA:{"^":"f;",
O:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Z(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
eh:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dL:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dM:function(a,b,c){if(this.O(b,c)>0)throw H.a(H.Z(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
ek:function(a,b){var z
if(b>20)throw H.a(P.al(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.Z(b))
return a+b},
D:function(a,b){if(typeof b!=="number")throw H.a(H.Z(b))
return a-b},
cI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bq(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.bq(a,b)},
bq:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bo:function(a,b){var z
if(a>0)z=this.du(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
du:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!=="number")throw H.a(H.Z(b))
return a<b},
a8:function(a,b){if(typeof b!=="number")throw H.a(H.Z(b))
return a>b},
$isaM:1,
$isaO:1},
d_:{"^":"aA;",$isC:1},
cZ:{"^":"aA;"},
aB:{"^":"f;",
dN:function(a,b){if(b>=a.length)H.U(H.a5(a,b))
return a.charCodeAt(b)},
bg:function(a,b){if(b>=a.length)throw H.a(H.a5(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cC(b,null,null))
return a+b},
cB:function(a,b,c){var z
if(c>a.length)throw H.a(P.al(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cA:function(a,b){return this.cB(a,b,0)},
b3:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.U(H.Z(c))
if(b<0)throw H.a(P.bj(b,null,null))
if(typeof c!=="number")return H.y(c)
if(b>c)throw H.a(P.bj(b,null,null))
if(c>a.length)throw H.a(P.bj(c,null,null))
return a.substring(b,c)},
cC:function(a,b){return this.b3(a,b,null)},
ej:function(a){return a.toLowerCase()},
dP:function(a,b,c){if(c>a.length)throw H.a(P.al(c,0,a.length,null,null))
return H.kj(a,b,c)},
O:function(a,b){var z
if(typeof b!=="string")throw H.a(H.Z(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gw:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a5(a,b))
return a[b]},
$ism:1,
$asm:I.ao,
$isl:1}}],["","",,H,{"^":"",
cY:function(){return new P.bn("No element")},
fR:function(){return new P.bn("Too many elements")},
fQ:function(){return new P.bn("Too few elements")},
hI:function(a,b){var z=J.a0(a)
if(typeof z!=="number")return z.D()
H.aZ(a,0,z-1,b)},
aZ:function(a,b,c,d){if(c-b<=32)H.hH(a,b,c,d)
else H.hG(a,b,c,d)},
hH:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a6(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.L(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a_(c-b+1,6)
y=b+z
x=c-z
w=C.b.a_(b+c,2)
v=w-z
u=w+z
t=J.a6(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.L(d.$2(s,r),0)){n=r
r=s
s=n}if(J.L(d.$2(p,o),0)){n=o
o=p
p=n}if(J.L(d.$2(s,q),0)){n=q
q=s
s=n}if(J.L(d.$2(r,q),0)){n=q
q=r
r=n}if(J.L(d.$2(s,p),0)){n=p
p=s
s=n}if(J.L(d.$2(q,p),0)){n=p
p=q
q=n}if(J.L(d.$2(r,o),0)){n=o
o=r
r=n}if(J.L(d.$2(r,q),0)){n=q
q=r
r=n}if(J.L(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.G(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.C(i,0))continue
if(h.W(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aN(i)
if(h.a8(i,0)){--l
continue}else{g=l-1
if(h.W(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aQ(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.L(d.$2(j,p),0))for(;!0;)if(J.L(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aQ(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aZ(a,b,m-2,d)
H.aZ(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.G(d.$2(t.h(a,m),r),0);)++m
for(;J.G(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.G(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.G(d.$2(j,p),0))for(;!0;)if(J.G(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aQ(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aZ(a,m,l,d)}else H.aZ(a,m,l,d)},
bN:{"^":"bf;$ti"},
bh:{"^":"bN;$ti",
gI:function(a){return new H.d4(this,this.gi(this),0,null,[H.cf(this,"bh",0)])},
v:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.y(z)
y=0
for(;y<z;++y){b.$1(this.t(0,y))
if(z!==this.gi(this))throw H.a(P.H(this))}},
aP:function(a,b){return this.cF(0,b)}},
hU:{"^":"bh;a,b,c,$ti",
cZ:function(a,b,c,d){},
gdg:function(){var z=J.a0(this.a)
return z},
gdv:function(){var z,y
z=J.a0(this.a)
y=this.b
if(typeof z!=="number")return H.y(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a0(this.a)
y=this.b
if(typeof z!=="number")return H.y(z)
if(y>=z)return 0
return z-y},
t:function(a,b){var z,y
z=this.gdv()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.y(b)
y=z+b
if(!(b<0)){z=this.gdg()
if(typeof z!=="number")return H.y(z)
z=y>=z}else z=!0
if(z)throw H.a(P.w(b,this,"index",null,null))
return J.cn(this.a,y)},
ei:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a6(y)
w=x.gi(y)
if(typeof w!=="number")return w.D()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.z(u,this.$ti)
for(s=0;s<v;++s){u=x.t(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.W()
if(u<w)throw H.a(P.H(this))}return t},
p:{
dn:function(a,b,c,d){var z=new H.hU(a,b,c,[d])
z.cZ(a,b,c,d)
return z}}},
d4:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.a6(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.H(z))
w=this.c
if(typeof x!=="number")return H.y(x)
if(w>=x){this.d=null
return!1}this.d=y.t(z,w);++this.c
return!0}},
h2:{"^":"bh;a,b,$ti",
gi:function(a){return J.a0(this.a)},
t:function(a,b){return this.b.$1(J.cn(this.a,b))},
$asbN:function(a,b){return[b]},
$asbh:function(a,b){return[b]},
$asbf:function(a,b){return[b]}},
dK:{"^":"bf;a,b,$ti",
gI:function(a){return new H.i2(J.aT(this.a),this.b,this.$ti)}},
i2:{"^":"fS;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bd:{"^":"c;$ti"}}],["","",,H,{"^":"",
k2:function(a){return init.types[a]},
kd:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.au(a)
if(typeof z!=="string")throw H.a(H.Z(a))
return z},
aE:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aF:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.o(a).$isb0){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bg(w,0)===36)w=C.i.cC(w,1)
r=H.by(H.ap(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
F:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ht:function(a){return a.b?H.F(a).getUTCFullYear()+0:H.F(a).getFullYear()+0},
hr:function(a){return a.b?H.F(a).getUTCMonth()+1:H.F(a).getMonth()+1},
hn:function(a){return a.b?H.F(a).getUTCDate()+0:H.F(a).getDate()+0},
ho:function(a){return a.b?H.F(a).getUTCHours()+0:H.F(a).getHours()+0},
hq:function(a){return a.b?H.F(a).getUTCMinutes()+0:H.F(a).getMinutes()+0},
hs:function(a){return a.b?H.F(a).getUTCSeconds()+0:H.F(a).getSeconds()+0},
hp:function(a){return a.b?H.F(a).getUTCMilliseconds()+0:H.F(a).getMilliseconds()+0},
y:function(a){throw H.a(H.Z(a))},
d:function(a,b){if(a==null)J.a0(a)
throw H.a(H.a5(a,b))},
a5:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
z=J.a0(a)
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bj(b,"index",null)},
Z:function(a){return new P.a8(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.dd()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.er})
z.name=""}else z.toString=H.er
return z},
er:function(){return J.au(this.dartException)},
U:function(a){throw H.a(a)},
E:function(a){throw H.a(P.H(a))},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bo(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bU(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dc(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dv()
u=$.$get$dw()
t=$.$get$dx()
s=$.$get$dy()
r=$.$get$dC()
q=$.$get$dD()
p=$.$get$dA()
$.$get$dz()
o=$.$get$dF()
n=$.$get$dE()
m=v.M(y)
if(m!=null)return z.$1(H.bU(y,m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.bU(y,m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dc(y,m))}}return z.$1(new H.i_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dj()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a8(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dj()
return a},
ah:function(a){var z
if(a==null)return new H.e_(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e_(a,null)},
jZ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kc:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cU("Unsupported number of arguments for wrapped closure"))},
a4:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kc)
a.$identity=z
return z},
fo:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.hw(z).r}else x=c
w=d?Object.create(new H.hJ().constructor.prototype):Object.create(new H.bJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.as(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cI(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.k2,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cG:H.bK
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cI(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fl:function(a,b,c,d){var z=H.bK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cI:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fl(y,!w,z,b)
if(y===0){w=$.V
$.V=J.as(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.av
if(v==null){v=H.ba("self")
$.av=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.V
$.V=J.as(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.av
if(v==null){v=H.ba("self")
$.av=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fm:function(a,b,c,d){var z,y
z=H.bK
y=H.cG
switch(b?-1:a){case 0:throw H.a(H.hC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fn:function(a,b){var z,y,x,w,v,u,t,s
z=$.av
if(z==null){z=H.ba("self")
$.av=z}y=$.cF
if(y==null){y=H.ba("receiver")
$.cF=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.V
$.V=J.as(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.V
$.V=J.as(y,1)
return new Function(z+H.b(y)+"}")()},
cd:function(a,b,c,d,e,f){var z,y
z=J.az(b)
y=!!J.o(c).$ish?J.az(c):c
return H.fo(a,z,y,!!d,e,f)},
kh:function(a,b){var z=J.a6(b)
throw H.a(H.cH(a,z.b3(b,3,z.gi(b))))},
a7:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.kh(a,b)},
ce:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eg:function(a,b){var z,y
if(a==null)return!1
z=H.ce(J.o(a))
if(z==null)y=!1
else y=H.el(z,b)
return y},
jR:function(a){var z
if(a instanceof H.i){z=H.ce(J.o(a))
if(z!=null)return H.ci(z,null)
return"Closure"}return H.aF(a)},
kk:function(a){throw H.a(new P.fs(a))},
ej:function(a){return init.getIsolateTag(a)},
z:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
mR:function(a,b,c){return H.aP(a["$as"+H.b(c)],H.ap(b))},
b4:function(a,b,c,d){var z=H.aP(a["$as"+H.b(c)],H.ap(b))
return z==null?null:z[d]},
cf:function(a,b,c){var z=H.aP(a["$as"+H.b(b)],H.ap(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.ap(a)
return z==null?null:z[b]},
ci:function(a,b){var z=H.ar(a,b)
return z},
ar:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.by(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ar(z,b)
return H.jI(a,b)}return"unknown-reified-type"},
jI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ar(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ar(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ar(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jY(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ar(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
by:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c1("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ar(u,c)}return w?"":"<"+z.k(0)+">"},
k1:function(a){var z,y,x
if(a instanceof H.i){z=H.ce(J.o(a))
if(z!=null)return H.ci(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.by(a.$ti,0,null)
return y+x},
aP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cc:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ap(a)
y=J.o(a)
if(y[b]==null)return!1
return H.eb(H.aP(y[d],z),c)},
b6:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cc(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.by(c,0,null)
throw H.a(H.cH(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eb:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.K(a[y],b[y]))return!1
return!0},
mP:function(a,b,c){return a.apply(b,H.aP(J.o(b)["$as"+H.b(c)],H.ap(b)))},
K:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aX")return!0
if('func' in b)return H.el(a,b)
if('func' in a)return b.builtin$cls==="lm"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.ci(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eb(H.aP(u,z),x)},
ea:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.K(z,v)||H.K(v,z)))return!1}return!0},
jS:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.az(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.K(v,u)||H.K(u,v)))return!1}return!0},
el:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.K(z,y)||H.K(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ea(x,w,!1))return!1
if(!H.ea(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.K(o,n)||H.K(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.K(o,n)||H.K(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.K(o,n)||H.K(n,o)))return!1}}return H.jS(a.named,b.named)},
mQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ke:function(a){var z,y,x,w,v,u
z=$.ek.$1(a)
y=$.bw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.e9.$2(a,z)
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
return u.i}if(v==="+")return H.en(a,x)
if(v==="*")throw H.a(P.dI(z))
if(init.leafTags[z]===true){u=H.bz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.en(a,x)},
en:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ch(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bz:function(a){return J.ch(a,!1,null,!!a.$isn)},
kg:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bz(z)
else return J.ch(z,c,null,null)},
ka:function(){if(!0===$.cg)return
$.cg=!0
H.kb()},
kb:function(){var z,y,x,w,v,u,t,s
$.bw=Object.create(null)
$.bx=Object.create(null)
H.k6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eq.$1(v)
if(u!=null){t=H.kg(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k6:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.an(C.G,H.an(C.L,H.an(C.u,H.an(C.u,H.an(C.K,H.an(C.H,H.an(C.I(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ek=new H.k7(v)
$.e9=new H.k8(u)
$.eq=new H.k9(t)},
an:function(a,b){return a(b)||b},
kj:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hv:{"^":"c;a,b,c,d,e,f,r,x",p:{
hw:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.az(z)
y=z[0]
x=z[1]
return new H.hv(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hY:{"^":"c;a,b,c,d,e,f",
M:function(a){var z,y,x
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
return new H.hY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hj:{"^":"D;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dc:function(a,b){return new H.hj(a,b==null?null:b.method)}}},
fV:{"^":"D;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bU:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fV(a,y,z?null:b.receiver)}}},
i_:{"^":"D;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kl:{"^":"i:0;a",
$1:function(a){if(!!J.o(a).$isD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e_:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaG:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aF(this).trim()+"'"},
gcs:function(){return this},
gcs:function(){return this}},
dp:{"^":"i;"},
hJ:{"^":"dp;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bJ:{"^":"dp;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aE(this.a)
else y=typeof z!=="object"?J.a_(z):H.aE(z)
return(y^H.aE(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aF(z)+"'")},
p:{
bK:function(a){return a.a},
cG:function(a){return a.c},
ba:function(a){var z,y,x,w,v
z=new H.bJ("self","target","receiver","name")
y=J.az(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fj:{"^":"D;a",
k:function(a){return this.a},
p:{
cH:function(a,b){return new H.fj("CastError: "+H.b(P.bP(a))+": type '"+H.jR(a)+"' is not a subtype of type '"+b+"'")}}},
hB:{"^":"D;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hC:function(a){return new H.hB(a)}}},
dG:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.a_(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.dG&&J.G(this.a,b.a)}},
d0:{"^":"bX;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gJ:function(a){return new H.h0(this,[H.A(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bi(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bi(y,b)}else return this.e4(b)},
e4:function(a){var z=this.d
if(z==null)return!1
return this.aF(this.av(z,J.a_(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ad(z,b)
x=y==null?null:y.ga7()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ad(w,b)
x=y==null?null:y.ga7()
return x}else return this.e5(b)},
e5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.av(z,J.a_(a)&0x3ffffff)
x=this.aF(y,a)
if(x<0)return
return y[x].ga7()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ay()
this.b=z}this.bc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ay()
this.c=y}this.bc(y,b,c)}else{x=this.d
if(x==null){x=this.ay()
this.d=x}w=J.a_(b)&0x3ffffff
v=this.av(x,w)
if(v==null)this.aC(x,w,[this.ap(b,c)])
else{u=this.aF(v,b)
if(u>=0)v[u].sa7(c)
else v.push(this.ap(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.H(this))
z=z.c}},
bc:function(a,b,c){var z=this.ad(a,b)
if(z==null)this.aC(a,b,this.ap(b,c))
else z.sa7(c)},
bd:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.h_(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bd()
return z},
aF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].ge3(),b))return y
return-1},
k:function(a){return P.d5(this)},
ad:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
de:function(a,b){delete a[b]},
bi:function(a,b){return this.ad(a,b)!=null},
ay:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.de(z,"<non-identifier-key>")
return z}},
h_:{"^":"c;e3:a<,a7:b@,c,d"},
h0:{"^":"bN;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.aa(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.H(z))
y=y.c}}},
aa:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.H(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k7:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
k8:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
k9:{"^":"i:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jY:function(a){return J.az(H.z(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bt:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
Y:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a5(b,a))},
hf:{"^":"f;","%":"DataView;ArrayBufferView;bY|dU|dV|d8|dW|dX|ab"},
bY:{"^":"hf;",
gi:function(a){return a.length},
$ism:1,
$asm:I.ao,
$isn:1,
$asn:I.ao},
d8:{"^":"dV;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
j:function(a,b,c){H.Y(b,a,a.length)
a[b]=c},
$asbd:function(){return[P.aM]},
$asj:function(){return[P.aM]},
$ish:1,
$ash:function(){return[P.aM]},
"%":"Float64Array"},
ab:{"^":"dX;",
j:function(a,b,c){H.Y(b,a,a.length)
a[b]=c},
$asbd:function(){return[P.C]},
$asj:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]}},
he:{"^":"d8;",$isbQ:1,"%":"Float32Array"},
lL:{"^":"ab;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lM:{"^":"ab;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
$isfO:1,
"%":"Int32Array"},
lN:{"^":"ab;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lO:{"^":"ab;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lP:{"^":"ab;",
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lQ:{"^":"ab;",
gi:function(a){return a.length},
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lR:{"^":"ab;",
gi:function(a){return a.length},
h:function(a,b){H.Y(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dU:{"^":"bY+j;"},
dV:{"^":"dU+bd;"},
dW:{"^":"bY+j;"},
dX:{"^":"dW+bd;"}}],["","",,P,{"^":"",
i7:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jT()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a4(new P.i9(z),1)).observe(y,{childList:true})
return new P.i8(z,y,x)}else if(self.setImmediate!=null)return P.jU()
return P.jV()},
mC:[function(a){self.scheduleImmediate(H.a4(new P.ia(a),0))},"$1","jT",4,0,6],
mD:[function(a){self.setImmediate(H.a4(new P.ib(a),0))},"$1","jU",4,0,6],
mE:[function(a){P.jm(0,a)},"$1","jV",4,0,6],
jM:function(a,b){if(H.eg(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
jL:function(){var z,y
for(;z=$.am,z!=null;){$.aK=null
y=z.b
$.am=y
if(y==null)$.aJ=null
z.a.$0()}},
mO:[function(){$.c9=!0
try{P.jL()}finally{$.aK=null
$.c9=!1
if($.am!=null)$.$get$c4().$1(P.ec())}},"$0","ec",0,0,3],
e7:function(a){var z=new P.dL(a,null)
if($.am==null){$.aJ=z
$.am=z
if(!$.c9)$.$get$c4().$1(P.ec())}else{$.aJ.b=z
$.aJ=z}},
jQ:function(a){var z,y,x
z=$.am
if(z==null){P.e7(a)
$.aK=$.aJ
return}y=new P.dL(a,null)
x=$.aK
if(x==null){y.b=z
$.aK=y
$.am=y}else{y.b=x.b
x.b=y
$.aK=y
if(y.b==null)$.aJ=y}},
ki:function(a){var z=$.v
if(C.f===z){P.bv(null,null,C.f,a)
return}z.toString
P.bv(null,null,z,z.bA(a))},
jP:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.P(u)
y=H.ah(u)
$.v.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.at(x)
w=t
v=x.gY()
c.$2(w,v)}}},
jE:function(a,b,c,d){var z=a.dK(0)
if(!!J.o(z).$isaW&&z!==$.$get$cX())z.en(new P.jH(b,c,d))
else b.a3(c,d)},
jF:function(a,b){return new P.jG(a,b)},
i5:function(){return $.v},
bu:function(a,b,c,d,e){var z={}
z.a=d
P.jQ(new P.jN(z,e))},
e5:function(a,b,c,d){var z,y
y=$.v
if(y===c)return d.$0()
$.v=c
z=y
try{y=d.$0()
return y}finally{$.v=z}},
e6:function(a,b,c,d,e){var z,y
y=$.v
if(y===c)return d.$1(e)
$.v=c
z=y
try{y=d.$1(e)
return y}finally{$.v=z}},
jO:function(a,b,c,d,e,f){var z,y
y=$.v
if(y===c)return d.$2(e,f)
$.v=c
z=y
try{y=d.$2(e,f)
return y}finally{$.v=z}},
bv:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bA(d):c.dH(d)
P.e7(d)},
i9:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i8:{"^":"i:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ia:{"^":"i:1;a",
$0:function(){this.a.$0()}},
ib:{"^":"i:1;a",
$0:function(){this.a.$0()}},
jl:{"^":"c;a,b,c",
d9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a4(new P.jn(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jm:function(a,b){var z=new P.jl(!0,null,0)
z.d9(a,b)
return z}}},
jn:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ky:{"^":"c;$ti"},
ie:{"^":"c;$ti"},
jg:{"^":"ie;a,$ti",
dO:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.c0("Future already completed"))
z.ac(b)}},
dN:{"^":"c;aA:a<,b,c,d,e,$ti",
gdC:function(){return this.b.b},
gbX:function(){return(this.c&1)!==0},
ge2:function(){return(this.c&2)!==0},
gbW:function(){return this.c===8},
e0:function(a){return this.b.b.aN(this.d,a)},
e7:function(a){if(this.c!==6)return!0
return this.b.b.aN(this.d,J.at(a))},
e_:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eg(z,{func:1,args:[P.c,P.aG]}))return x.ed(z,y.gK(a),a.gY())
else return x.aN(z,y.gK(a))},
e1:function(){return this.b.b.c5(this.d)}},
af:{"^":"c;bp:a<,b,dq:c<,$ti",
d5:function(a,b){this.a=4
this.c=a},
gdj:function(){return this.a===2},
gaw:function(){return this.a>=4},
ca:function(a,b){var z,y,x
z=$.v
if(z!==C.f){z.toString
if(b!=null)b=P.jM(b,z)}y=new P.af(0,z,null,[null])
x=b==null?1:3
this.aq(new P.dN(null,y,x,a,b,[H.A(this,0),null]))
return y},
c9:function(a){return this.ca(a,null)},
en:function(a){var z,y
z=$.v
y=new P.af(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.A(this,0)
this.aq(new P.dN(null,y,8,a,null,[z,z]))
return y},
aq:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaw()){y.aq(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bv(null,null,z,new P.iv(this,a))}},
bm:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaA()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaw()){v.bm(a)
return}this.a=v.a
this.c=v.c}z.a=this.aB(a)
y=this.b
y.toString
P.bv(null,null,y,new P.iA(z,this))}},
ae:function(){var z=this.c
this.c=null
return this.aB(z)},
aB:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaA()
z.a=y}return y},
ac:function(a){var z,y,x
z=this.$ti
y=H.cc(a,"$isaW",z,"$asaW")
if(y){z=H.cc(a,"$isaf",z,null)
if(z)P.dO(a,this)
else P.iw(a,this)}else{x=this.ae()
this.a=4
this.c=a
P.aI(this,x)}},
a3:[function(a,b){var z=this.ae()
this.a=8
this.c=new P.b9(a,b)
P.aI(this,z)},function(a){return this.a3(a,null)},"eq","$2","$1","gbh",4,2,13],
$isaW:1,
p:{
iw:function(a,b){var z,y,x
b.a=1
try{a.ca(new P.ix(b),new P.iy(b))}catch(x){z=H.P(x)
y=H.ah(x)
P.ki(new P.iz(b,z,y))}},
dO:function(a,b){var z
for(;a.gdj();)a=a.c
if(a.gaw()){z=b.ae()
b.a=a.a
b.c=a.c
P.aI(b,z)}else{z=b.c
b.a=2
b.c=a
a.bm(z)}},
aI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.at(v)
t=v.gY()
y.toString
P.bu(null,null,y,u,t)}return}for(;b.gaA()!=null;b=s){s=b.a
b.a=null
P.aI(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbX()||b.gbW()){q=b.gdC()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.at(v)
t=v.gY()
y.toString
P.bu(null,null,y,u,t)
return}p=$.v
if(p==null?q!=null:p!==q)$.v=q
else p=null
if(b.gbW())new P.iD(z,x,b,w).$0()
else if(y){if(b.gbX())new P.iC(x,b,r).$0()}else if(b.ge2())new P.iB(z,x,b).$0()
if(p!=null)$.v=p
y=x.b
if(!!J.o(y).$isaW){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aB(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dO(y,o)
return}}o=b.b
b=o.ae()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iv:{"^":"i:1;a,b",
$0:function(){P.aI(this.a,this.b)}},
iA:{"^":"i:1;a,b",
$0:function(){P.aI(this.b,this.a.a)}},
ix:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.ac(a)}},
iy:{"^":"i:14;a",
$2:function(a,b){this.a.a3(a,b)},
$1:function(a){return this.$2(a,null)}},
iz:{"^":"i:1;a,b,c",
$0:function(){this.a.a3(this.b,this.c)}},
iD:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e1()}catch(w){y=H.P(w)
x=H.ah(w)
if(this.d){v=J.at(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b9(y,x)
u.a=!0
return}if(!!J.o(z).$isaW){if(z instanceof P.af&&z.gbp()>=4){if(z.gbp()===8){v=this.b
v.b=z.gdq()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.c9(new P.iE(t))
v.a=!1}}},
iE:{"^":"i:0;a",
$1:function(a){return this.a}},
iC:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e0(this.c)}catch(x){z=H.P(x)
y=H.ah(x)
w=this.a
w.b=new P.b9(z,y)
w.a=!0}}},
iB:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e7(z)===!0&&w.e!=null){v=this.b
v.b=w.e_(z)
v.a=!1}}catch(u){y=H.P(u)
x=H.ah(u)
w=this.a
v=J.at(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b9(y,x)
s.a=!0}}},
dL:{"^":"c;a,b"},
dl:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.af(0,$.v,null,[null])
z.a=null
z.a=this.c_(new P.hQ(z,this,b,y),!0,new P.hR(y),y.gbh())
return y},
gi:function(a){var z,y
z={}
y=new P.af(0,$.v,null,[P.C])
z.a=0
this.c_(new P.hS(z),!0,new P.hT(z,y),y.gbh())
return y}},
hQ:{"^":"i;a,b,c,d",
$1:function(a){P.jP(new P.hO(this.c,a),new P.hP(),P.jF(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cf(this.b,"dl",0)]}}},
hO:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hP:{"^":"i:0;",
$1:function(a){}},
hR:{"^":"i:1;a",
$0:function(){this.a.ac(null)}},
hS:{"^":"i:0;a",
$1:function(a){++this.a.a}},
hT:{"^":"i:1;a,b",
$0:function(){this.b.ac(this.a.a)}},
hN:{"^":"c;$ti"},
jH:{"^":"i:1;a,b,c",
$0:function(){return this.a.a3(this.b,this.c)}},
jG:{"^":"i:15;a,b",
$2:function(a,b){P.jE(this.a,this.b,a,b)}},
b9:{"^":"c;K:a>,Y:b<",
k:function(a){return H.b(this.a)},
$isD:1},
jt:{"^":"c;"},
jN:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dd()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.au(y)
throw x}},
j_:{"^":"jt;",
ee:function(a){var z,y,x
try{if(C.f===$.v){a.$0()
return}P.e5(null,null,this,a)}catch(x){z=H.P(x)
y=H.ah(x)
P.bu(null,null,this,z,y)}},
ef:function(a,b){var z,y,x
try{if(C.f===$.v){a.$1(b)
return}P.e6(null,null,this,a,b)}catch(x){z=H.P(x)
y=H.ah(x)
P.bu(null,null,this,z,y)}},
dH:function(a){return new P.j1(this,a)},
bA:function(a){return new P.j0(this,a)},
dI:function(a){return new P.j2(this,a)},
h:function(a,b){return},
c5:function(a){if($.v===C.f)return a.$0()
return P.e5(null,null,this,a)},
aN:function(a,b){if($.v===C.f)return a.$1(b)
return P.e6(null,null,this,a,b)},
ed:function(a,b,c){if($.v===C.f)return a.$2(b,c)
return P.jO(null,null,this,a,b,c)}},
j1:{"^":"i:1;a,b",
$0:function(){return this.a.c5(this.b)}},
j0:{"^":"i:1;a,b",
$0:function(){return this.a.ee(this.b)}},
j2:{"^":"i:0;a,b",
$1:function(a){return this.a.ef(this.b,a)}}}],["","",,P,{"^":"",
Q:function(){return new H.d0(0,null,null,null,null,null,0,[null,null])},
d2:function(a){return H.jZ(a,new H.d0(0,null,null,null,null,null,0,[null,null]))},
R:function(a,b,c,d){return new P.iN(0,null,null,null,null,null,0,[d])},
fP:function(a,b,c){var z,y
if(P.ca(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aL()
y.push(a)
try{P.jK(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dm(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bR:function(a,b,c){var z,y,x
if(P.ca(a))return b+"..."+c
z=new P.c1(b)
y=$.$get$aL()
y.push(a)
try{x=z
x.a=P.dm(x.gZ(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gZ()+c
y=z.gZ()
return y.charCodeAt(0)==0?y:y},
ca:function(a){var z,y
for(z=0;y=$.$get$aL(),z<y.length;++z)if(a===y[z])return!0
return!1},
jK:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.b(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.q()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.q();t=s,s=r){r=z.gA(z);++x
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
bV:function(a,b){var z,y
z=P.R(null,null,null,b)
for(y=J.aT(a);y.q();)z.N(0,y.gA(y))
return z},
d5:function(a){var z,y,x
z={}
if(P.ca(a))return"{...}"
y=new P.c1("")
try{$.$get$aL().push(a)
x=y
x.a=x.gZ()+"{"
z.a=!0
J.co(a,new P.h1(z,y))
z=y
z.a=z.gZ()+"}"}finally{z=$.$get$aL()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gZ()
return z.charCodeAt(0)==0?z:z},
iN:{"^":"iG;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.c7(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dd(b)},
dd:function(a){var z=this.d
if(z==null)return!1
return this.au(z[this.ar(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.H(this))
z=z.b}},
N:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c8()
this.b=z}return this.be(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c8()
this.c=y}return this.be(y,b)}else return this.da(0,b)},
da:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c8()
this.d=z}y=this.ar(b)
x=z[y]
if(x==null)z[y]=[this.az(b)]
else{if(this.au(x,b)>=0)return!1
x.push(this.az(b))}return!0},
c4:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bn(this.c,b)
else return this.dl(0,b)},
dl:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ar(b)]
x=this.au(y,b)
if(x<0)return!1
this.br(y.splice(x,1)[0])
return!0},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ax()}},
be:function(a,b){if(a[b]!=null)return!1
a[b]=this.az(b)
return!0},
bn:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.br(z)
delete a[b]
return!0},
ax:function(){this.r=this.r+1&67108863},
az:function(a){var z,y
z=new P.iO(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ax()
return z},
br:function(a){var z,y
z=a.gdk()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ax()},
ar:function(a){return J.a_(a)&0x3ffffff},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.G(a[y].gdf(),b))return y
return-1},
p:{
c8:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iO:{"^":"c;df:a<,b,dk:c<"},
c7:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.H(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iG:{"^":"hD;$ti"},
lz:{"^":"c;$ti"},
d3:{"^":"dT;$ti",$ish:1},
j:{"^":"c;$ti",
gI:function(a){return new H.d4(a,this.gi(a),0,null,[H.b4(this,a,"j",0)])},
t:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.y(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.H(a))}},
dZ:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.y(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.H(a))}return y},
b0:function(a,b){return H.dn(a,b,null,H.b4(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.z([],[H.b4(this,a,"j",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.a9(z,0,this.gi(a),a)
C.c.a9(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bR(a,"[","]")}},
bX:{"^":"M;$ti"},
h1:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
M:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aT(this.gJ(a));z.q();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a0(this.gJ(a))},
k:function(a){return P.d5(a)}},
hE:{"^":"c;$ti",
L:function(a,b){var z
for(z=J.aT(b);z.q();)this.N(0,z.gA(z))},
k:function(a){return P.bR(this,"{","}")},
v:function(a,b){var z
for(z=new P.c7(this,this.r,null,null,[null]),z.c=this.e;z.q();)b.$1(z.d)}},
hD:{"^":"hE;$ti"},
dT:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fE:function(a){var z=J.o(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aF(a)+"'"},
bP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fE(a)},
cU:function(a){return new P.is(a)},
ai:function(a){H.bA(H.b(a))},
cb:{"^":"c;"},
"+bool":0,
bM:{"^":"c;dB:a<,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bM))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.gdB())},
gw:function(a){var z=this.a
return(z^C.b.bo(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.ft(H.ht(this))
y=P.aU(H.hr(this))
x=P.aU(H.hn(this))
w=P.aU(H.ho(this))
v=P.aU(H.hq(this))
u=P.aU(H.hs(this))
t=P.fu(H.hp(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
ft:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aU:function(a){if(a>=10)return""+a
return"0"+a}}},
aM:{"^":"aO;"},
"+double":0,
aV:{"^":"c;a4:a<",
l:function(a,b){return new P.aV(C.b.l(this.a,b.ga4()))},
D:function(a,b){return new P.aV(this.a-b.ga4())},
W:function(a,b){return C.b.W(this.a,b.ga4())},
a8:function(a,b){return C.b.a8(this.a,b.ga4())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.ga4())},
k:function(a){var z,y,x,w,v
z=new P.fB()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.b.a_(y,6e7)%60)
w=z.$1(C.b.a_(y,1e6)%60)
v=new P.fA().$1(y%1e6)
return""+C.b.a_(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
cQ:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fA:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fB:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
D:{"^":"c;",
gY:function(){return H.ah(this.$thrownJsError)}},
dd:{"^":"D;",
k:function(a){return"Throw of null."}},
a8:{"^":"D;a,b,c,d",
gat:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gas:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gat()+y+x
if(!this.a)return w
v=this.gas()
u=P.bP(this.b)
return w+v+": "+H.b(u)},
p:{
cC:function(a,b,c){return new P.a8(!0,a,b,c)},
fd:function(a){return new P.a8(!1,null,a,"Must not be null")}}},
df:{"^":"a8;e,f,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bj:function(a,b,c){return new P.df(null,null,!0,a,b,"Value not in range")},
al:function(a,b,c,d,e){return new P.df(b,c,!0,a,d,"Invalid value")},
hu:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.y(a)
if(0<=a){if(typeof c!=="number")return H.y(c)
z=a>c}else z=!0
if(z)throw H.a(P.al(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
z=b>c}else z=!0
if(z)throw H.a(P.al(b,a,c,"end",f))
return b}return c}}},
fN:{"^":"a8;e,i:f>,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){if(J.aQ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
w:function(a,b,c,d,e){var z=e!=null?e:J.a0(b)
return new P.fN(b,z,!0,a,c,"Index out of range")}}},
i0:{"^":"D;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.i0(a)}}},
hZ:{"^":"D;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dI:function(a){return new P.hZ(a)}}},
bn:{"^":"D;a",
k:function(a){return"Bad state: "+this.a},
p:{
c0:function(a){return new P.bn(a)}}},
fp:{"^":"D;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bP(z))+"."},
p:{
H:function(a){return new P.fp(a)}}},
dj:{"^":"c;",
k:function(a){return"Stack Overflow"},
gY:function(){return},
$isD:1},
fs:{"^":"D;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kV:{"^":"c;"},
is:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
C:{"^":"aO;"},
"+int":0,
bf:{"^":"c;$ti",
aP:["cF",function(a,b){return new H.dK(this,b,[H.cf(this,"bf",0)])}],
v:function(a,b){var z
for(z=this.gI(this);z.q();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.q();)++y
return y},
gX:function(a){var z,y
z=this.gI(this)
if(!z.q())throw H.a(H.cY())
y=z.gA(z)
if(z.q())throw H.a(H.fR())
return y},
t:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fd("index"))
if(b<0)H.U(P.al(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.q();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
k:function(a){return P.fP(this,"(",")")}},
fS:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bW:{"^":"c;$ti"},
aX:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aO:{"^":"c;"},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gw:function(a){return H.aE(this)},
k:function(a){return"Instance of '"+H.aF(this)+"'"},
toString:function(){return this.k(this)}},
aG:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
c1:{"^":"c;Z:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dm:function(a,b,c){var z=J.aT(b)
if(!z.q())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.q())}else{a+=H.b(z.gA(z))
for(;z.q();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fC:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).P(z,a,b,c)
y.toString
z=new H.dK(new W.N(y),new W.fD(),[W.q])
return z.gX(z)},
cT:function(a){return"wheel"},
aw:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eQ(a)
if(typeof y==="string")z=a.tagName}catch(x){H.P(x)}return z},
ip:function(a,b){return document.createElement(a)},
ag:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e4:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ii(a)
if(!!J.o(z).$isB)return z
return}else return a},
e8:function(a){var z=$.v
if(z===C.f)return a
return z.dI(a)},
t:{"^":"aj;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
km:{"^":"c_;m:x=,n:y=,G:z=","%":"Accelerometer|LinearAccelerationSensor"},
kn:{"^":"f;i:length=","%":"AccessibleNodeList"},
ko:{"^":"t;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kp:{"^":"t;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
ku:{"^":"t;ah:href}","%":"HTMLBaseElement"},
bI:{"^":"t;",$isbI:1,"%":"HTMLBodyElement"},
kv:{"^":"t;H:name=","%":"HTMLButtonElement"},
fi:{"^":"t;E:height},F:width}",
aR:function(a,b,c){if(c!=null)return a.getContext(b,P.jW(c,null))
return a.getContext(b)},
ct:function(a,b){return this.aR(a,b,null)},
"%":"HTMLCanvasElement"},
kw:{"^":"f;",
dS:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
am:function(a){return P.O(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kx:{"^":"q;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kz:{"^":"W;U:style=","%":"CSSFontFaceRule"},
kA:{"^":"W;U:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kB:{"^":"W;U:style=","%":"CSSPageRule"},
kC:{"^":"bb;i:length=","%":"CSSPerspective"},
kD:{"^":"bL;m:x=,n:y=","%":"CSSPositionValue"},
kE:{"^":"bb;m:x=,n:y=,G:z=","%":"CSSRotation"},
W:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kF:{"^":"bb;m:x=,n:y=,G:z=","%":"CSSScale"},
fq:{"^":"ig;i:length=",
bf:function(a,b){var z,y
z=$.$get$cJ()
y=z[b]
if(typeof y==="string")return y
y=this.dw(a,b)
z[b]=y
return y},
dw:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fv()+b
if(z in a)return z
return b},
dt:function(a,b,c,d){a.setProperty(b,c,d)},
sE:function(a,b){a.height=b},
sF:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fr:{"^":"c;",
sdY:function(a,b){this.dt(a,this.bf(a,"float"),b,"")}},
kG:{"^":"W;U:style=","%":"CSSStyleRule"},
bL:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bb:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kH:{"^":"bL;i:length=","%":"CSSTransformValue"},
kI:{"^":"bb;m:x=,n:y=,G:z=","%":"CSSTranslation"},
kJ:{"^":"bL;i:length=","%":"CSSUnparsedValue"},
kK:{"^":"W;U:style=","%":"CSSViewportRule"},
kL:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kM:{"^":"f;m:x=,n:y=,G:z=","%":"DeviceAcceleration"},
fw:{"^":"t;","%":"HTMLDivElement"},
kN:{"^":"q;",
gaI:function(a){return new W.b1(a,"mousedown",!1,[W.J])},
gaJ:function(a){return new W.b1(a,"mousemove",!1,[W.J])},
gaK:function(a){return new W.b1(a,"mouseup",!1,[W.J])},
gaL:function(a){return new W.b1(a,W.cT(a),!1,[W.aH])},
"%":"Document|HTMLDocument|XMLDocument"},
kO:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
kP:{"^":"fx;",
gal:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z},
"%":"DOMPoint"},
fx:{"^":"f;",
gal:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z},
"%":";DOMPointReadOnly"},
kQ:{"^":"ik;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a2]},
$isn:1,
$asn:function(){return[P.a2]},
$asj:function(){return[P.a2]},
$ish:1,
$ash:function(){return[P.a2]},
$ask:function(){return[P.a2]},
"%":"ClientRectList|DOMRectList"},
fy:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gF(a))+" x "+H.b(this.gE(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa2)return!1
return a.left===z.gbY(b)&&a.top===z.gcb(b)&&this.gF(a)===z.gF(b)&&this.gE(a)===z.gE(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gF(a)
w=this.gE(a)
return W.dS(W.ag(W.ag(W.ag(W.ag(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcc:function(a){return new P.ac(a.left,a.top,[null])},
gE:function(a){return a.height},
gbY:function(a){return a.left},
gcb:function(a){return a.top},
gF:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa2:1,
$asa2:I.ao,
"%":";DOMRectReadOnly"},
kR:{"^":"im;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kS:{"^":"f;i:length=","%":"DOMTokenList"},
aj:{"^":"q;U:style=,bl:namespaceURI=,eg:tagName=",
gdF:function(a){return new W.io(a)},
k:function(a){return a.localName},
P:["an",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cS
if(z==null){z=H.z([],[W.da])
y=new W.db(z)
z.push(W.dP(null))
z.push(W.e0())
$.cS=y
d=y}else d=z
z=$.cR
if(z==null){z=new W.e3(d)
$.cR=z
c=z}else{z.a=d
c=z}}if($.a1==null){z=document
y=z.implementation.createHTMLDocument("")
$.a1=y
$.bO=y.createRange()
y=$.a1
y.toString
x=y.createElement("base")
J.f0(x,z.baseURI)
$.a1.head.appendChild(x)}z=$.a1
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a1
if(!!this.$isbI)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a1.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.O,a.tagName)){$.bO.selectNodeContents(w)
v=$.bO.createContextualFragment(b)}else{w.innerHTML=b
v=$.a1.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a1.body
if(w==null?z!=null:w!==z)J.cu(w)
c.aZ(v)
document.adoptNode(v)
return v},function(a,b,c){return this.P(a,b,c,null)},"dR",null,null,"gev",5,5,null],
cv:function(a,b,c,d){a.textContent=null
a.appendChild(this.P(a,b,c,d))},
cu:function(a,b){return this.cv(a,b,null,null)},
aQ:function(a){return a.getBoundingClientRect()},
gaI:function(a){return new W.ad(a,"mousedown",!1,[W.J])},
gaJ:function(a){return new W.ad(a,"mousemove",!1,[W.J])},
gaK:function(a){return new W.ad(a,"mouseup",!1,[W.J])},
gaL:function(a){return new W.ad(a,W.cT(a),!1,[W.aH])},
$isaj:1,
"%":";Element"},
fD:{"^":"i:0;",
$1:function(a){return!!J.o(a).$isaj}},
kT:{"^":"t;E:height},H:name=,F:width}","%":"HTMLEmbedElement"},
kU:{"^":"a9;K:error=","%":"ErrorEvent"},
a9:{"^":"f;",
ak:function(a){return a.preventDefault()},
$isa9:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"f;",
bw:["cD",function(a,b,c,d){if(c!=null)this.dc(a,b,c,!1)}],
dc:function(a,b,c,d){return a.addEventListener(b,H.a4(c,1),!1)},
dm:function(a,b,c,d){return a.removeEventListener(b,H.a4(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dY|dZ|e1|e2"},
ld:{"^":"t;H:name=","%":"HTMLFieldSetElement"},
le:{"^":"iu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$isn:1,
$asn:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"FileList"},
lf:{"^":"B;K:error=","%":"FileReader"},
lg:{"^":"B;K:error=,i:length=","%":"FileWriter"},
li:{"^":"f;U:style=","%":"FontFace"},
lj:{"^":"B;",
ew:function(a,b,c){return a.forEach(H.a4(b,3),c)},
v:function(a,b){b=H.a4(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
ll:{"^":"t;i:length=,H:name=","%":"HTMLFormElement"},
ln:{"^":"c_;m:x=,n:y=,G:z=","%":"Gyroscope"},
lo:{"^":"f;i:length=","%":"History"},
lp:{"^":"iI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lq:{"^":"t;E:height},H:name=,F:width}","%":"HTMLIFrameElement"},
lr:{"^":"t;E:height},F:width}","%":"HTMLImageElement"},
lt:{"^":"t;E:height},H:name=,F:width}","%":"HTMLInputElement"},
bg:{"^":"dH;",
geo:function(a){return a.which},
$isbg:1,
"%":"KeyboardEvent"},
ly:{"^":"t;ah:href}","%":"HTMLLinkElement"},
lA:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lB:{"^":"c_;m:x=,n:y=,G:z=","%":"Magnetometer"},
lC:{"^":"t;H:name=","%":"HTMLMapElement"},
h4:{"^":"t;K:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lE:{"^":"f;i:length=","%":"MediaList"},
lF:{"^":"B;aE:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lG:{"^":"B;",
bw:function(a,b,c,d){if(J.G(b,"message"))a.start()
this.cD(a,b,c,!1)},
"%":"MessagePort"},
lH:{"^":"t;H:name=","%":"HTMLMetaElement"},
lI:{"^":"iP;",
h:function(a,b){return P.O(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gJ:function(a){var z=H.z([],[P.l])
this.v(a,new W.h6(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h6:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lJ:{"^":"iQ;",
h:function(a,b){return P.O(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gJ:function(a){var z=H.z([],[P.l])
this.v(a,new W.h7(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
h7:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lK:{"^":"iS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"MimeTypeArray"},
J:{"^":"dH;bG:button=",
gc2:function(a){var z,y,x
if(!!a.offsetX)return new P.ac(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.e4(z)).$isaj)throw H.a(P.p("offsetX is only supported on elements"))
y=W.e4(z)
z=[null]
x=new P.ac(a.clientX,a.clientY,z).D(0,J.eR(J.eT(y)))
return new P.ac(J.cw(x.a),J.cw(x.b),z)}},
$isJ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
N:{"^":"d3;a",
gX:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c0("No elements"))
if(y>1)throw H.a(P.c0("More than one element"))
return z.firstChild},
L:function(a,b){var z,y,x,w
z=J.o(b)
if(!!z.$isN){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gI(b),y=this.a;z.q();)y.appendChild(z.gA(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.cV(z,z.length,-1,null,[H.b4(C.R,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asd3:function(){return[W.q]},
$asj:function(){return[W.q]},
$ash:function(){return[W.q]},
$asdT:function(){return[W.q]}},
q:{"^":"B;aj:parentNode=,aM:previousSibling=",
gc1:function(a){return new W.N(a)},
ea:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cE(a):z},
$isq:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
lS:{"^":"f;",
e9:[function(a){return a.previousNode()},"$0","gaM",1,0,4],
"%":"NodeIterator"},
hg:{"^":"iU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"NodeList|RadioNodeList"},
lV:{"^":"t;E:height},H:name=,F:width}","%":"HTMLObjectElement"},
lX:{"^":"t;H:name=","%":"HTMLOutputElement"},
lY:{"^":"t;H:name=","%":"HTMLParamElement"},
aY:{"^":"f;i:length=","%":"Plugin"},
m_:{"^":"iY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aY]},
$isn:1,
$asn:function(){return[W.aY]},
$asj:function(){return[W.aY]},
$ish:1,
$ash:function(){return[W.aY]},
$ask:function(){return[W.aY]},
"%":"PluginArray"},
m2:{"^":"f;",
aQ:function(a){return a.getBoundingClientRect()},
"%":"Range"},
m8:{"^":"j3;",
h:function(a,b){return P.O(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gJ:function(a){var z=H.z([],[P.l])
this.v(a,new W.hA(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hA:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
m9:{"^":"t;i:length=,H:name=","%":"HTMLSelectElement"},
c_:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ma:{"^":"a9;K:error=","%":"SensorErrorEvent"},
mb:{"^":"t;H:name=","%":"HTMLSlotElement"},
mc:{"^":"dZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bl]},
$isn:1,
$asn:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$ask:function(){return[W.bl]},
"%":"SourceBufferList"},
md:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"SpeechGrammarList"},
me:{"^":"a9;K:error=","%":"SpeechRecognitionError"},
b_:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mg:{"^":"jc;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gJ:function(a){var z=H.z([],[P.l])
this.v(a,new W.hM(z))
return z},
gi:function(a){return a.length},
$asM:function(){return[P.l,P.l]},
"%":"Storage"},
hM:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
hV:{"^":"t;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.an(a,b,c,d)
z=W.fC("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.N(y).L(0,J.eO(z))
return y},
"%":"HTMLTableElement"},
mj:{"^":"t;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.an(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.P(z.createElement("table"),b,c,d)
z.toString
z=new W.N(z)
x=z.gX(z)
x.toString
z=new W.N(x)
w=z.gX(z)
y.toString
w.toString
new W.N(y).L(0,new W.N(w))
return y},
"%":"HTMLTableRowElement"},
mk:{"^":"t;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.an(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.P(z.createElement("table"),b,c,d)
z.toString
z=new W.N(z)
x=z.gX(z)
y.toString
x.toString
new W.N(y).L(0,new W.N(x))
return y},
"%":"HTMLTableSectionElement"},
dq:{"^":"t;",$isdq:1,"%":"HTMLTemplateElement"},
ml:{"^":"t;H:name=","%":"HTMLTextAreaElement"},
mn:{"^":"jk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bq]},
$isn:1,
$asn:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$ask:function(){return[W.bq]},
"%":"TextTrackCueList"},
mo:{"^":"e2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bp]},
$isn:1,
$asn:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"TextTrackList"},
mp:{"^":"f;i:length=","%":"TimeRanges"},
mq:{"^":"jp;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.br]},
$isn:1,
$asn:function(){return[W.br]},
$asj:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$ask:function(){return[W.br]},
"%":"TouchList"},
mr:{"^":"f;i:length=","%":"TrackDefaultList"},
mu:{"^":"f;",
ex:[function(a){return a.parentNode()},"$0","gaj",1,0,4],
e9:[function(a){return a.previousNode()},"$0","gaM",1,0,4],
"%":"TreeWalker"},
dH:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mw:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
my:{"^":"f;m:x=,G:z=","%":"VRStageBoundsPoint"},
mz:{"^":"h4;E:height},F:width}","%":"HTMLVideoElement"},
mA:{"^":"B;i:length=","%":"VideoTrackList"},
aH:{"^":"J;",
gdU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
i3:{"^":"B;",
gdE:function(a){var z,y
z=P.aO
y=new P.af(0,$.v,null,[z])
this.dh(a)
this.dn(a,W.e8(new W.i4(new P.jg(y,[z]))))
return y},
dn:function(a,b){return a.requestAnimationFrame(H.a4(b,1))},
dh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
i4:{"^":"i:0;a",
$1:function(a){this.a.dO(0,a)}},
mB:{"^":"B;"},
mF:{"^":"q;H:name=,bl:namespaceURI=","%":"Attr"},
mG:{"^":"jv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.W]},
$isn:1,
$asn:function(){return[W.W]},
$asj:function(){return[W.W]},
$ish:1,
$ash:function(){return[W.W]},
$ask:function(){return[W.W]},
"%":"CSSRuleList"},
mH:{"^":"fy;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa2)return!1
return a.left===z.gbY(b)&&a.top===z.gcb(b)&&a.width===z.gF(b)&&a.height===z.gE(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dS(W.ag(W.ag(W.ag(W.ag(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcc:function(a){return new P.ac(a.left,a.top,[null])},
gE:function(a){return a.height},
gF:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mI:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.be]},
$isn:1,
$asn:function(){return[W.be]},
$asj:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"GamepadList"},
mL:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mM:{"^":"jB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b_]},
$isn:1,
$asn:function(){return[W.b_]},
$asj:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$ask:function(){return[W.b_]},
"%":"SpeechRecognitionResultList"},
mN:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bo]},
$isn:1,
$asn:function(){return[W.bo]},
$asj:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$ask:function(){return[W.bo]},
"%":"StyleSheetList"},
ic:{"^":"bX;di:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gJ(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gJ:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.z([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbl(v)==null)y.push(u.gH(v))}return y},
$asbX:function(){return[P.l,P.l]},
$asM:function(){return[P.l,P.l]}},
io:{"^":"ic;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gJ(this).length}},
b1:{"^":"dl;a,b,c,$ti",
c_:function(a,b,c,d){return W.ae(this.a,this.b,a,!1,H.A(this,0))}},
ad:{"^":"b1;a,b,c,$ti"},
iq:{"^":"hN;a,b,c,d,e,$ti",
d4:function(a,b,c,d,e){this.dz()},
dK:function(a){if(this.b==null)return
this.dA()
this.b=null
this.d=null
return},
dz:function(){var z=this.d
if(z!=null&&this.a<=0)J.eu(this.b,this.c,z,!1)},
dA:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.et(x,this.c,z,!1)}},
p:{
ae:function(a,b,c,d,e){var z=c==null?null:W.e8(new W.ir(c))
z=new W.iq(0,a,b,z,!1,[e])
z.d4(a,b,c,!1,e)
return z}}},
ir:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
c5:{"^":"c;cn:a<",
d6:function(a){var z,y
z=$.$get$c6()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.N[y],W.k4())
for(y=0;y<12;++y)z.j(0,C.p[y],W.k5())}},
a0:function(a){return $.$get$dQ().u(0,W.aw(a))},
V:function(a,b,c){var z,y,x
z=W.aw(a)
y=$.$get$c6()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.j4(z,window.location)
y=new W.c5(y)
y.d6(a)
return y},
mJ:[function(a,b,c,d){return!0},"$4","k4",16,0,9],
mK:[function(a,b,c,d){var z,y,x,w,v
z=d.gcn()
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
return z},"$4","k5",16,0,9]}},
k:{"^":"c;$ti",
gI:function(a){return new W.cV(a,this.gi(a),-1,null,[H.b4(this,a,"k",0)])}},
db:{"^":"c;a",
a0:function(a){return C.c.bx(this.a,new W.hi(a))},
V:function(a,b,c){return C.c.bx(this.a,new W.hh(a,b,c))}},
hi:{"^":"i:0;a",
$1:function(a){return a.a0(this.a)}},
hh:{"^":"i:0;a,b,c",
$1:function(a){return a.V(this.a,this.b,this.c)}},
j5:{"^":"c;cn:d<",
d8:function(a,b,c,d){var z,y,x
this.a.L(0,c)
z=b.aP(0,new W.j6())
y=b.aP(0,new W.j7())
this.b.L(0,z)
x=this.c
x.L(0,C.P)
x.L(0,y)},
a0:function(a){return this.a.u(0,W.aw(a))},
V:["cH",function(a,b,c){var z,y
z=W.aw(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.dD(c)
else if(y.u(0,"*::"+b))return this.d.dD(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
j6:{"^":"i:0;",
$1:function(a){return!C.c.u(C.p,a)}},
j7:{"^":"i:0;",
$1:function(a){return C.c.u(C.p,a)}},
jh:{"^":"j5;e,a,b,c,d",
V:function(a,b,c){if(this.cH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cp(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
e0:function(){var z=P.l
z=new W.jh(P.bV(C.o,z),P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),null)
z.d8(null,new H.h2(C.o,new W.ji(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
ji:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jf:{"^":"c;",
a0:function(a){var z=J.o(a)
if(!!z.$isdh)return!1
z=!!z.$isx
if(z&&W.aw(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.cA(b,"on"))return!1
return this.a0(a)}},
cV:{"^":"c;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aR(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
ih:{"^":"c;a",$isB:1,p:{
ii:function(a){if(a===window)return a
else return new W.ih(a)}}},
da:{"^":"c;"},
lT:{"^":"c;"},
mv:{"^":"c;"},
j4:{"^":"c;a,b"},
e3:{"^":"c;a",
aZ:function(a){new W.js(this).$2(a,null)},
a5:function(a,b){if(b==null)J.cu(a)
else b.removeChild(a)},
ds:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cp(a)
x=y.gdi().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.P(t)}v="element unprintable"
try{v=J.au(a)}catch(t){H.P(t)}try{u=W.aw(a)
this.dr(a,b,z,v,u,y,x)}catch(t){if(H.P(t) instanceof P.a8)throw t
else{this.a5(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dr:function(a,b,c,d,e,f,g){var z,y,x,w,v
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
return}z=f.gJ(f)
y=H.z(z.slice(0),[H.A(z,0)])
for(x=f.gJ(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.V(a,J.f4(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdq)this.aZ(a.content)}},
js:{"^":"i:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ds(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eP(z)}catch(w){H.P(w)
v=z
if(x){u=J.e(v)
if(u.gaj(v)!=null){u.gaj(v)
u.gaj(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ig:{"^":"f+fr;"},
ij:{"^":"f+j;"},
ik:{"^":"ij+k;"},
il:{"^":"f+j;"},
im:{"^":"il+k;"},
it:{"^":"f+j;"},
iu:{"^":"it+k;"},
iH:{"^":"f+j;"},
iI:{"^":"iH+k;"},
iP:{"^":"f+M;"},
iQ:{"^":"f+M;"},
iR:{"^":"f+j;"},
iS:{"^":"iR+k;"},
iT:{"^":"f+j;"},
iU:{"^":"iT+k;"},
iX:{"^":"f+j;"},
iY:{"^":"iX+k;"},
j3:{"^":"f+M;"},
dY:{"^":"B+j;"},
dZ:{"^":"dY+k;"},
j8:{"^":"f+j;"},
j9:{"^":"j8+k;"},
jc:{"^":"f+M;"},
jj:{"^":"f+j;"},
jk:{"^":"jj+k;"},
e1:{"^":"B+j;"},
e2:{"^":"e1+k;"},
jo:{"^":"f+j;"},
jp:{"^":"jo+k;"},
ju:{"^":"f+j;"},
jv:{"^":"ju+k;"},
jw:{"^":"f+j;"},
jx:{"^":"jw+k;"},
jy:{"^":"f+j;"},
jz:{"^":"jy+k;"},
jA:{"^":"f+j;"},
jB:{"^":"jA+k;"},
jC:{"^":"f+j;"},
jD:{"^":"jC+k;"}}],["","",,P,{"^":"",
O:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jW:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.co(a,new P.jX(z))
return z},
cP:function(){var z=$.cO
if(z==null){z=J.bC(window.navigator.userAgent,"Opera",0)
$.cO=z}return z},
fv:function(){var z,y
z=$.cL
if(z!=null)return z
y=$.cM
if(y==null){y=J.bC(window.navigator.userAgent,"Firefox",0)
$.cM=y}if(y)z="-moz-"
else{y=$.cN
if(y==null){y=P.cP()!==!0&&J.bC(window.navigator.userAgent,"Trident/",0)
$.cN=y}if(y)z="-ms-"
else z=P.cP()===!0?"-o-":"-webkit-"}$.cL=z
return z},
jX:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",m7:{"^":"B;K:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},ms:{"^":"B;K:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iJ:{"^":"c;",
e8:function(){return Math.random()}},
ac:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ac))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gw:function(a){var z,y
z=J.a_(this.a)
y=J.a_(this.b)
return P.iK(P.dR(P.dR(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ac(y,C.a.l(z,x),this.$ti)},
D:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.D()
if(typeof x!=="number")return H.y(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.D()
if(typeof y!=="number")return H.y(y)
return new P.ac(z-x,w-y,this.$ti)}},
iZ:{"^":"c;$ti"},
a2:{"^":"iZ;$ti"}}],["","",,P,{"^":"",kW:{"^":"x;m:x=,n:y=","%":"SVGFEBlendElement"},kX:{"^":"x;m:x=,n:y=","%":"SVGFEColorMatrixElement"},kY:{"^":"x;m:x=,n:y=","%":"SVGFEComponentTransferElement"},kZ:{"^":"x;m:x=,n:y=","%":"SVGFECompositeElement"},l_:{"^":"x;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},l0:{"^":"x;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},l1:{"^":"x;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},l2:{"^":"x;m:x=,n:y=","%":"SVGFEFloodElement"},l3:{"^":"x;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},l4:{"^":"x;m:x=,n:y=","%":"SVGFEImageElement"},l5:{"^":"x;m:x=,n:y=","%":"SVGFEMergeElement"},l6:{"^":"x;m:x=,n:y=","%":"SVGFEMorphologyElement"},l7:{"^":"x;m:x=,n:y=","%":"SVGFEOffsetElement"},l8:{"^":"x;m:x=,n:y=,G:z=","%":"SVGFEPointLightElement"},l9:{"^":"x;m:x=,n:y=","%":"SVGFESpecularLightingElement"},la:{"^":"x;m:x=,n:y=,G:z=","%":"SVGFESpotLightElement"},lb:{"^":"x;m:x=,n:y=","%":"SVGFETileElement"},lc:{"^":"x;m:x=,n:y=","%":"SVGFETurbulenceElement"},lh:{"^":"x;m:x=,n:y=","%":"SVGFilterElement"},lk:{"^":"ax;m:x=,n:y=","%":"SVGForeignObjectElement"},fL:{"^":"ax;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ax:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ls:{"^":"ax;m:x=,n:y=","%":"SVGImageElement"},lx:{"^":"iM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d1]},
$ish:1,
$ash:function(){return[P.d1]},
$ask:function(){return[P.d1]},
"%":"SVGLengthList"},lD:{"^":"x;m:x=,n:y=","%":"SVGMaskElement"},lU:{"^":"iW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.de]},
$ish:1,
$ash:function(){return[P.de]},
$ask:function(){return[P.de]},
"%":"SVGNumberList"},lZ:{"^":"x;m:x=,n:y=","%":"SVGPatternElement"},m0:{"^":"f;m:x=,n:y=","%":"SVGPoint"},m1:{"^":"f;i:length=","%":"SVGPointList"},m3:{"^":"f;m:x=,n:y=","%":"SVGRect"},m4:{"^":"fL;m:x=,n:y=","%":"SVGRectElement"},dh:{"^":"x;",$isdh:1,"%":"SVGScriptElement"},mh:{"^":"je;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},x:{"^":"aj;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.z([],[W.da])
z.push(W.dP(null))
z.push(W.e0())
z.push(new W.jf())
c=new W.e3(new W.db(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dR(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.N(w)
u=z.gX(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaI:function(a){return new W.ad(a,"mousedown",!1,[W.J])},
gaJ:function(a){return new W.ad(a,"mousemove",!1,[W.J])},
gaK:function(a){return new W.ad(a,"mouseup",!1,[W.J])},
gaL:function(a){return new W.ad(a,"mousewheel",!1,[W.aH])},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mi:{"^":"ax;m:x=,n:y=","%":"SVGSVGElement"},hW:{"^":"ax;","%":"SVGTextPathElement;SVGTextContentElement"},mm:{"^":"hW;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mt:{"^":"jr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.du]},
$ish:1,
$ash:function(){return[P.du]},
$ask:function(){return[P.du]},
"%":"SVGTransformList"},mx:{"^":"ax;m:x=,n:y=","%":"SVGUseElement"},iL:{"^":"f+j;"},iM:{"^":"iL+k;"},iV:{"^":"f+j;"},iW:{"^":"iV+k;"},jd:{"^":"f+j;"},je:{"^":"jd+k;"},jq:{"^":"f+j;"},jr:{"^":"jq+k;"}}],["","",,P,{"^":"",kq:{"^":"f;i:length=","%":"AudioBuffer"},kr:{"^":"id;",
h:function(a,b){return P.O(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gJ:function(a){var z=H.z([],[P.l])
this.v(a,new P.ff(z))
return z},
gi:function(a){return a.size},
$asM:function(){return[P.l,null]},
"%":"AudioParamMap"},ff:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},ks:{"^":"f;aE:enabled=","%":"AudioTrack"},kt:{"^":"B;i:length=","%":"AudioTrackList"},fg:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lW:{"^":"fg;i:length=","%":"OfflineAudioContext"},id:{"^":"f+M;"}}],["","",,P,{"^":"",m5:{"^":"f;",
bv:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b){return a.clear(b)},
bI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bJ:function(a,b){return a.compileShader(b)},
bK:function(a){return a.createBuffer()},
bL:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.O(a.getContextAttributes())},
aS:function(a){return a.getError()},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b_:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aO:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
c6:function(a,b,c,d,e,f,g){return this.aO(a,b,c,d,e,f,g,null,null,null)},
c7:function(a,b,c,d){return a.texParameterf(b,c,d)},
c8:function(a,b,c,d){return a.texParameteri(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cr:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m6:{"^":"f;",
dG:function(a,b){return a.beginTransformFeedback(b)},
dJ:function(a,b){return a.bindVertexArray(b)},
dT:function(a){return a.createVertexArray()},
dV:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dW:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dX:function(a){return a.endTransformFeedback()},
el:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
em:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bv:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b){return a.clear(b)},
bI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bJ:function(a,b){return a.compileShader(b)},
bK:function(a){return a.createBuffer()},
bL:function(a){return a.createProgram()},
bM:function(a,b){return a.createShader(b)},
bN:function(a){return a.createTexture()},
bP:function(a,b){return a.depthMask(b)},
bQ:function(a,b){return a.disable(b)},
bR:function(a,b,c,d){return a.drawArrays(b,c,d)},
bS:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bT:function(a,b){return a.enable(b)},
bU:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.O(a.getContextAttributes())},
aS:function(a){return a.getError()},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aV:function(a,b){return a.getShaderInfoLog(b)},
aW:function(a,b,c){return a.getShaderParameter(b,c)},
aX:function(a,b,c){return a.getUniformLocation(b,c)},
bZ:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b_:function(a,b,c){return a.shaderSource(b,c)},
b2:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aO:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
c6:function(a,b,c,d,e,f,g){return this.aO(a,b,c,d,e,f,g,null,null,null)},
c7:function(a,b,c,d){return a.texParameterf(b,c,d)},
c8:function(a,b,c,d){return a.texParameteri(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cr:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mf:{"^":"jb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.O(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bW]},
$ish:1,
$ash:function(){return[P.bW]},
$ask:function(){return[P.bW]},
"%":"SQLResultSetRowList"},ja:{"^":"f+j;"},jb:{"^":"ja+k;"}}],["","",,G,{"^":"",
i6:function(a){var z,y,x,w
z=H.z(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a1(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bM(a,b)
z.b_(a,y,c)
z.bJ(a,y)
x=z.aW(a,y,35713)
if(x!=null&&J.G(x,!1)){w=z.aV(a,y)
P.ai("E:Compilation failed:")
P.ai("E:"+G.i6(c))
P.ai("E:Failure:")
P.ai(C.i.l("E:",w))
throw H.a(w)}return y},
cW:function(a,b){var z,y,x,w,v
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
fH:function(a,b){var z,y,x,w
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
fI:function(a,b){var z,y,x,w,v
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
x=J.eS(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fG:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aR(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aR(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aR(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aR(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.aa(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.C]],v=[P.aM],u=[T.a3],t=[T.r],s=[T.S];y.q();){r=y.d
if(!x.ag(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eh>0)H.bA("I: "+q)
continue}p=z.h(0,r)
switch($.$get$T().h(0,r).a){case"vec2":b.a2(r,G.fH(H.b6(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a2(r,G.cW(H.b6(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a2(r,G.fI(H.b6(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a2(r,new Float32Array(H.bt(H.b6(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a2(r,G.fG(H.b6(p,"$ish",w,"$ash"),null),4)
break}}},
aD:{"^":"c;aE:c>"},
c3:{"^":"aD;d,a,b,c",
ba:function(){return this.d},
k:function(a){var z,y,x,w
z=H.z(["{"+H.b(new H.dG(H.k1(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.aa(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a1(z,"\n")}},
fh:{"^":"di;"},
fk:{"^":"c;a,b",
bV:function(a,b,c){J.eL(this.a,b)
if(c>0)J.fa(this.a,b,c)},
cq:function(a,b,c,d,e,f,g,h){J.bB(this.a,34962,b)
J.fb(this.a,c,d,e,!1,g,h)}},
fJ:{"^":"c;a,b,c,d,e"},
fF:{"^":"c;a,b,c,d"},
fK:{"^":"c;a,b,c,d,e",
b7:function(a){switch($.$get$T().h(0,a).a){case"vec2":this.e.j(0,a,H.z([],[T.S]))
break
case"vec3":this.e.j(0,a,H.z([],[T.r]))
break
case"vec4":this.e.j(0,a,H.z([],[T.a3]))
break
case"float":this.e.j(0,a,H.z([],[P.aM]))
break
case"uvec4":this.e.j(0,a,H.z([],[[P.h,P.C]]))
break}},
cJ:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].af(0))},
cK:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].af(0))},
cL:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.fF(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].af(0))},
cP:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.z(y,[P.C])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.ger(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.ges(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.geu(t)
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
for(y=this.e,x=new H.aa(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$T().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a1(z," ")}},
dt:{"^":"c;a,b,c"},
dr:{"^":"c;a,b,c",p:{
ds:function(a,b,c){return new G.dr(a,b,c)}}},
h3:{"^":"c3;d,a,b,c",
cS:function(a,b){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!1)
z.j(0,"cBlendEquation",b)
z.j(0,"cStencilFunc",$.$get$dk())},
p:{
d6:function(a,b){var z=new G.h3(P.Q(),a,!1,!0)
z.cS(a,b)
return z}}},
h5:{"^":"aD;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b6:function(a,b,c){var z,y
C.i.bg(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bB(z.a,34962,y)
J.cl(z.a,34962,b,35048)},
b8:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a2:function(a,b,c){var z,y,x,w,v
z=J.cm(a,0)===105
if(z&&this.z===0)this.z=C.b.cI(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bD(x.a))
this.b6(a,b,c)
w=$.$get$T().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b7(x.a,this.e)
x.bV(0,v,z?1:0)
x.cq(0,y.h(0,a),v,w.b9(),5126,!1,0,0)},
b5:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bD(y.a))
this.ch=a
this.b6("aPosition",a,3)
x=$.$get$T().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b7(y.a,this.e)
y.bV(0,w,0)
y.cq(0,z.h(0,"aPosition"),w,x.b9(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.aa(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a1(y,"  ")},
p:{
d7:function(a,b,c,d){return new G.h5(b,J.eF(b.a),c,P.Q(),d,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)}}},
hl:{"^":"c3;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cM:function(a,b){var z
if(typeof a!=="number")return a.ep()
if(typeof b!=="number")return H.y(b)
z=a/b
if(this.z===z)return
this.z=z
this.bb()},
bb:function(){var z,y,x,w,v,u
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
u=new T.r(new Float32Array(3))
u.T(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.B(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.o(t)
x=!!y.$isa3
q=x?y.gal(t):1
if(!!y.$isr){p=y.gm(t)
s=y.gn(t)
r=y.gG(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gG(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.y(t)
x=z[4]
if(typeof s!=="number")return H.y(s)
w=z[8]
if(typeof r!=="number")return H.y(r)
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
c.B(this.db)
c.c0(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
fz:{"^":"c;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
hz:{"^":"aD;d,e,f,r,x,y,z,Q,ch,a,b,c",
cV:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.ct(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.ct(w.a,v,t))}},
d_:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.aa(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.ag(0,v))x.push(v)}for(z=this.x,y=new P.c7(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
d2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.aa(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.cm(t,0)){case 117:if(w.ag(0,t)){s=b.h(0,t)
if(v.ag(0,t))H.bA("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$T().h(0,t)
if(r==null)H.U("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bH(x.a,q,s)
else if(!!J.o(s).$isfO)J.f8(x.a,q,s)
break
case"float":if(r.c===0)J.f6(x.a,q,s)
else if(!!J.o(s).$isbQ)J.f7(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a7(s,"$isI").a
J.cB(x.a,q,!1,p)}else if(!!J.o(s).$isbQ)J.cB(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a7(s,"$isak").a
J.cA(x.a,q,!1,p)}else if(!!J.o(s).$isbQ)J.cA(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cz(o,q,H.a7(s,"$isa3").a)
else J.cz(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cy(o,q,H.a7(s,"$isr").a)
else J.cy(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cx(o,q,H.a7(s,"$isS").a)
else J.cx(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.y(p)
J.cj(x.a,33984+p)
p=H.a7(s,"$isc2").b
J.aS(x.a,3553,p)
p=this.ch
J.bH(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.y(p)
J.cj(x.a,33984+p)
p=H.a7(s,"$isc2").b
J.aS(x.a,34067,p)
p=this.ch
J.bH(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bA("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.G(s,!0)
o=x.a
if(p)J.b8(o,2929)
else J.bE(o,2929)
break
case"cStencilFunc":H.a7(s,"$isdt")
p=s.a
o=x.a
if(p===1281)J.bE(o,2960)
else{J.b8(o,2960)
o=s.b
n=s.c
J.f1(x.a,p,o,n)}break
case"cDepthWrite":J.eG(x.a,s)
break
case"cBlendEquation":H.a7(s,"$isdr")
p=s.a
o=x.a
if(p===1281)J.bE(o,3042)
else{J.b8(o,3042)
o=s.b
n=s.c
J.ey(x.a,o,n)
J.ex(x.a,p)}break}++u
break}}m=P.cQ(0,0,0,Date.now()-new P.bM(z,!1).a,0,0)
""+u
m.k(0)},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.d
J.f9(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bd()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.E)(b),++w){v=b[w]
this.d2(v.a,v.ba())}x=this.Q
x.a6(0)
for(u=a.cy,t=new H.aa(u,u.r,null,null,[H.A(u,0)]),t.c=u.e;t.q();)x.N(0,t.d)
s=this.d_()
if(s.length!==0)P.ai("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(s)))
J.b7(a.d.a,a.e)
r=this.e.f.length>0
x=a.f
u=a.b8()
t=a.Q
q=a.z
if(r)J.ev(y.a,x)
if(t!==-1){p=y.a
if(q>1)J.eK(p,x,u,t,0,q)
else J.eJ(p,x,u,t,0)}else{t=y.a
if(q>1)J.eI(t,x,0,u,q)
else J.eH(t,x,0,u)}if(r)J.eM(y.a)
c.push(new G.fz(this.a,a.z,a.b8(),x,P.cQ(0,0,0,Date.now()-new P.bM(z,!1).a,0,0)))},
p:{
dg:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.R(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eC(b.a)
u=G.dM(b.a,35633,y)
J.ck(b.a,v,u)
t=G.dM(b.a,35632,x)
J.ck(b.a,v,t)
if(w.length>0)J.f5(b.a,v,w,35980)
J.eZ(b.a,v)
if(J.eY(b.a,v,35714)!==!0)H.U(J.eX(b.a,v))
z=new G.hz(b,c,d,v,P.bV(c.c,null),P.Q(),P.Q(),z,null,a,!1,!0)
z.cV(a,b,c,d)
return z}}},
u:{"^":"c;a,b,c",
b9:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hF:{"^":"c;a,b,c,d,e,f,r,x",
b4:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.b1(z)},
ao:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x])
C.c.b1(y)},
cW:function(a,b){this.b=this.d3(!0,a,b)},
ab:function(a){return this.cW(a,null)},
d3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
s=$.$get$T().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.d(z,u)
q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.L(w,b)
w.push("}")
return C.c.a1(w,"\n")},
p:{
bk:function(a){return new G.hF(a,null,[],[],[],[],0,P.Q())}}},
di:{"^":"aD;"},
hX:{"^":"c;a,b,c,d,e,f,r",
cQ:function(a,b){var z=this.e
if(z!==1)J.f3(a.a,b,34046,z)
J.cv(a.a,b,10240,this.r)
J.cv(a.a,b,10241,this.f)}},
c2:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fM:{"^":"c2;f,a,b,c,d,e",
cX:function(a){var z,y
z=this.d
y=this.c
J.aS(z.a,y,this.b)
J.f2(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
i1:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dJ().e8()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.d7(z,a.d,0,a.e.x)
y.b5(x)
return y},
hy:{"^":"hx;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
ec:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sF(z,y)
w.sE(z,x)
P.ai("size change "+H.b(y)+" "+H.b(x))
this.dx.cM(y,x)
this.z=y
this.Q=x},"$1","geb",4,0,17]},
hK:{"^":"c;",
cY:function(a,b,c){var z,y,x
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
for(w=0;w<c;++w){v=W.ip("span",null)
y=J.cq(v)
J.e(y).sF(y,"1px")
C.n.sE(y,""+d+"px")
C.n.sdY(y,"left")
x=C.n.bf(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hL:{"^":"hK;e,f,a,b,c,d",
d0:function(a,b){var z,y,x,w,v;++this.e
if(J.aQ(J.es(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ek(z,2)+" fps"
y=this.c;(y&&C.E).cu(y,b)
x=C.b.a_(30*C.t.dL(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cq(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)}}}],["","",,A,{"^":"",
ef:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eN(b)!==!0)return
z=b.d1(c)
b.k(0)
y=C.c.ge6(e)
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
x.dQ(new T.ak(v))
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
a.cO(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.E)(y),++s)A.ef(a,y[s],z,d,e)},
d9:{"^":"di;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
d1:function(a){var z=this.dx
z.B(a)
z.c0(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
bZ:{"^":"aD;d,e,c1:f>,a,b,c"},
hx:{"^":"aD;",
cU:function(a,b,c){if(this.d==null)this.d=new G.fJ(this.e,null,null,null,null)},
cN:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ew(v.a,36160,z)
J.fc(v.a,this.x,this.y,x,w)
if(y!==0)J.ez(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.c3(P.Q(),"transforms",!1,!0))
r=new T.I(new Float32Array(16))
r.S()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.E)(x),++q)A.ef(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,D,{"^":"",fW:{"^":"c;a,b,c",
cR:function(a){var z
a=document
z=W.bg
W.ae(a,"keydown",new D.fY(this),!1,z)
W.ae(a,"keyup",new D.fZ(this),!1,z)},
p:{
fX:function(a){var z=P.C
z=new D.fW(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z))
z.cR(a)
return z}}},fY:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.N(0,J.cr(a))
z.b.N(0,a.which)}},fZ:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.c4(0,J.cr(a))
z.c.N(0,a.which)}},h8:{"^":"c;a,b,c,d,e,f,r,x",
cT:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaJ(a)
W.ae(y.a,y.b,new D.ha(this),!1,H.A(y,0))
y=z.gaI(a)
W.ae(y.a,y.b,new D.hb(this),!1,H.A(y,0))
y=z.gaK(a)
W.ae(y.a,y.b,new D.hc(this),!1,H.A(y,0))
z=z.gaL(a)
W.ae(z.a,z.b,new D.hd(this),!1,H.A(z,0))},
p:{
h9:function(a){var z=P.C
z=new D.h8(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),0,0,0,0,0)
z.cT(a)
return z}}},ha:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.r=z.gc2(a).a
y.x=z.gc2(a).b
y.d=a.movementX
y.e=a.movementY}},hb:{"^":"i:5;a",
$1:function(a){var z=J.e(a)
z.ak(a)
P.ai("BUTTON "+H.b(z.gbG(a)))
z=this.a
z.a.N(0,a.button)
z.b.N(0,a.button)}},hc:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.a.c4(0,z.gbG(a))
y.c.N(0,a.button)}},hd:{"^":"i:18;a",
$1:function(a){var z=J.e(a)
z.ak(a)
this.a.f=z.gdU(a)}},hk:{"^":"fh;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
b5:function(a){var z,y
z=C.Q.dZ(a,0,new A.k3())
if(typeof z!=="number")return H.y(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k3:{"^":"i:19;",
$2:function(a,b){var z,y
z=J.as(a,J.a_(b))
if(typeof z!=="number")return H.y(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ak:{"^":"c;bj:a<",
B:function(a){var z,y
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
if(b>=9)return H.d(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ak){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gw:function(a){return A.b5(this.a)},
R:function(a){var z,y,x
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
return new T.r(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ak(z)
y.B(this)
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
return y},
D:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ak(z)
y.B(this)
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
return y},
dQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.B(a)
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
return m}},I:{"^":"c;bk:a<",
B:function(a){var z,y
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
if(b>=16)return H.d(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.b5(this.a)},
R:function(a){var z,y,x
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
return new T.a3(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.I(z)
y.B(this)
x=b.gbk()
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
y.B(this)
x=b.gbk()
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
z[15]=m*e+l*a+k*a3+j*a7}},S:{"^":"c;bs:a<",
aa:function(a,b){var z=this.a
z[0]=a
z[1]=b},
B:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.b5(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.S(z)
y.B(this)
x=b.gbs()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.S(z)
y.B(this)
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
af:function(a){var z=new T.S(new Float32Array(2))
z.B(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},r:{"^":"c;bt:a<",
T:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
B:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.b5(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.r(z)
y.B(this)
x=b.gbt()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.r(z)
y.B(this)
x=b.gbt()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gaG())},
gaG:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aH:function(a){var z,y,x
z=Math.sqrt(this.gaG())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aD:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bO:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.T(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
af:function(a){var z=new T.r(new Float32Array(3))
z.B(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}},a3:{"^":"c;bu:a<",
B:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a3){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.b5(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a3(z)
y.B(this)
x=b.gbu()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a3(z)
y.B(this)
x=b.gbu()
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
gG:function(a){return this.a[2]},
gal:function(a){return this.a[3]}}}],["","",,Y,{"^":"",
em:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z={}
y=document
x=new R.hL(0,0,null,null,null,null)
x.cY(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fk(null,w)
u=J.eU(w,"webgl2",P.d2(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!0,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.U(P.cU('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.eV(u))
if($.eh>0)P.ai("I: "+t)
J.eA(u,0,0,0,1)
J.b8(u,2929)
u=new Float32Array(3)
t=D.fX(null)
s=D.h9(w)
r=new T.I(new Float32Array(16))
r.S()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hk(25,10,0,0,new T.r(u),-0.02,t,s,r,new T.r(q),new T.r(p),new T.r(o),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.I(new Float32Array(16))
u.S()
t=new T.I(new Float32Array(16))
t.S()
m=new G.hl(n,50,1,0.1,1000,u,t,new T.I(new Float32Array(16)),P.Q(),"perspective",!1,!0)
m.bb()
u=H.z([],[A.bZ])
l=new R.hy(w,m,null,v,u,17664,0,0,0,0,"main",!1,!0)
l.cU("main",v,null)
l.ec(null)
W.ae(window,"resize",l.geb(),!1,W.a9)
t=l.r|=256
l.r=t&4294950911
t=G.dg("blur",v,$.$get$ed(),$.$get$ee())
s=[]
u.push(new A.bZ(t,[m],s,"blur",!1,!0))
k=G.d6("blur",$.$get$cE())
r=new Float32Array(4)
r[3]=0.04
r[2]=0
r[1]=0
r[0]=0
k.d.j(0,"uColorAlpha",new T.a3(r))
r=new T.r(new Float32Array(3))
r.T(-1,-1,0)
q=new T.r(new Float32Array(3))
q.T(1,-1,0)
p=new T.r(new Float32Array(3))
p.T(1,1,0)
o=new T.r(new Float32Array(3))
o.T(-1,1,0)
j=new T.S(new Float32Array(2))
j.aa(0,0)
i=new T.S(new Float32Array(2))
i.aa(1,0)
h=new T.S(new Float32Array(2))
h.aa(1,1)
g=new T.S(new Float32Array(2))
g.aa(0,1)
f=new T.r(new Float32Array(3))
f.T(0,0,1)
e=[]
d=new G.fK(!1,[],[],e,P.Q())
d.b7("aTexUV")
d.cL([r,q,p,o])
d.cJ("aTexUV",[j,i,h,g])
d.b7("aNormal")
d.cK("aNormal",[f,f,f,f])
c=G.d7("quad",t.d,4,t.e.x)
c.b5(G.cW(e,null))
t=d.cP()
r=c.d
c.y=J.bD(r.a)
q=c.ch.length
if(q<768){c.cx=new Uint8Array(H.bt(t))
c.Q=5121}else if(q<196608){c.cx=new Uint16Array(H.bt(t))
c.Q=5123}else{c.cx=new Uint32Array(H.bt(t))
c.Q=5125}J.b7(r.a,c.e)
t=c.y
q=c.cx
J.bB(r.a,34963,t)
J.cl(r.a,34963,q,35048)
G.iF(d,c)
t=new Float32Array(9)
r=new T.I(new Float32Array(16))
r.S()
q=new T.I(new Float32Array(16))
q.S()
p=new Float32Array(3)
o=new Float32Array(3)
j=new Float32Array(3)
s.push(new A.d9(k,c,[],new T.ak(t),r,q,new T.r(p),new T.r(o),new T.r(j),new T.r(new Float32Array(3)),"",!1,!0))
t=G.dg("stars",v,$.$get$ep(),$.$get$eo())
s=[]
r=t.d
b=G.d6("stars",$.$get$cD())
a=y.createElement("canvas")
a.width=64
a.height=64
a0=C.D.ct(a,"2d")
a1=J.eD(a0,32,32,1,32,32,22)
a1.addColorStop(0,"gray")
a1.addColorStop(1,"black")
a0.fillStyle=a1
a0.fillRect(0,0,64,64)
a1=a0.createRadialGradient(32,32,1,32,32,6)
a1.addColorStop(0,"white")
a1.addColorStop(1,"gray")
a0.globalAlpha=0.9
a0.fillStyle=a1
a0.arc(32,32,4,0,6.283185307179586,!1)
a0.fill("nonzero")
y=new G.hX(!1,!1,!1,!0,1,9729,9729)
q=J.eE(r.a)
p=new G.fM(a,"Utils::Particles",q,3553,r,y)
J.aS(r.a,3553,q)
J.f_(r.a,37440,1)
p.cX(a)
y.cQ(r,3553)
J.eW(r.a)
J.aS(r.a,3553,null)
y=b.d
y.j(0,"uTexture",p)
y.j(0,"uPointSize",1000)
c=R.i1(t,2000,100)
y=new Float32Array(9)
r=new T.I(new Float32Array(16))
r.S()
q=new T.I(new Float32Array(16))
q.S()
p=new Float32Array(3)
o=new Float32Array(3)
j=new Float32Array(3)
s.push(new A.d9(b,c,[],new T.ak(y),r,q,new T.r(p),new T.r(o),new T.r(j),new T.r(new Float32Array(3)),c.a,!1,!0))
u.push(new A.bZ(t,[m],s,"stars",!1,!0))
z.a=0
new Y.kf(z,n,l,x).$1(0)},
kf:{"^":"i:20;a,b,c,d",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=this.a
y=J.aN(b5)
y.D(b5,z.a)
z.a=y.l(b5,0)
y=this.b
y.go+=0.005
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aY()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aY()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.u(0,37))y.go+=0.03
else if(v.u(0,39))y.go-=0.03
if(v.u(0,38))y.id+=0.03
else if(v.u(0,40))y.id-=0.03
if(v.u(0,33))y.fy*=0.99
else if(v.u(0,34))y.fy*=1.01
if(v.u(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aY()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dM(y.id,-1.4707963267948965,1.4707963267948965)
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
p=q[12]
o=q[13]
n=q[14]
m=new T.r(new Float32Array(3))
m.T(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.D(0,t)
l.aH(0)
k=m.bO(l)
k.aH(0)
j=l.bO(k)
j.aH(0)
t=k.aD(v)
u=j.aD(v)
v=l.aD(v)
r=k.a
i=r[0]
h=j.a
g=h[0]
f=l.a
e=f[0]
d=r[1]
c=h[1]
b=f[1]
r=r[2]
h=h[2]
f=f[2]
q[15]=1
q[14]=-v
q[13]=-u
q[12]=-t
q[11]=0
q[10]=f
q[9]=h
q[8]=r
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=g
q[0]=i
q[12]=p
q[13]=o
q[14]=n
i=y.f
g=i.a
g[0]=q[2]
g[1]=q[6]
g[2]=q[10]
y=-y.k1
a=Math.sqrt(i.gaG())
p=g[0]/a
o=g[1]/a
n=g[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
g=o*a1
a5=p*n*a2+g
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-g
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
g=q[4]
i=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
r=q[6]
h=q[10]
f=q[3]
t=q[7]
u=q[11]
q[0]=y*a3+g*a6+i*a9
q[1]=e*a3+d*a6+c*a9
q[2]=b*a3+r*a6+h*a9
q[3]=f*a3+t*a6+u*a9
q[4]=y*a4+g*a7+i*b0
q[5]=e*a4+d*a7+c*b0
q[6]=b*a4+r*a7+h*b0
q[7]=f*a4+t*a7+u*b0
q[8]=y*a5+g*a8+i*b1
q[9]=e*a5+d*a8+c*b1
q[10]=b*a5+r*a8+h*b1
q[11]=f*a5+t*a8+u*b1
w.c.a6(0)
w.b.a6(0)
x.e=0
x.d=0
x.f=0
x.c.a6(0)
x.b.a6(0)
b2=[]
this.c.cN(b2)
b3=[]
for(y=b2.length,b4=0;b4<b2.length;b2.length===y||(0,H.E)(b2),++b4)b3.push(b2[b4].k(0))
C.a7.gdE(window).c9(this)
this.d.d0(z.a,C.c.a1(b3,"<br>"))}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d_.prototype
return J.cZ.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.fU.prototype
if(typeof a=="boolean")return J.fT.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.k_=function(a){if(typeof a=="number")return J.aA.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.a6=function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.b2=function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.aN=function(a){if(typeof a=="number")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.k0=function(a){if(typeof a=="number")return J.aA.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.ei=function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.as=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k_(a).l(a,b)}
J.G=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).C(a,b)}
J.L=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aN(a).a8(a,b)}
J.aQ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aN(a).W(a,b)}
J.es=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aN(a).D(a,b)}
J.aR=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kd(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a6(a).h(a,b)}
J.et=function(a,b,c,d){return J.e(a).dm(a,b,c,d)}
J.cj=function(a,b){return J.e(a).bv(a,b)}
J.eu=function(a,b,c,d){return J.e(a).bw(a,b,c,d)}
J.ck=function(a,b,c){return J.e(a).by(a,b,c)}
J.ev=function(a,b){return J.e(a).dG(a,b)}
J.bB=function(a,b,c){return J.e(a).bz(a,b,c)}
J.ew=function(a,b,c){return J.e(a).bB(a,b,c)}
J.aS=function(a,b,c){return J.e(a).bC(a,b,c)}
J.b7=function(a,b){return J.e(a).dJ(a,b)}
J.ex=function(a,b){return J.e(a).bD(a,b)}
J.ey=function(a,b,c){return J.e(a).bE(a,b,c)}
J.cl=function(a,b,c,d){return J.e(a).bF(a,b,c,d)}
J.ez=function(a,b){return J.b2(a).bH(a,b)}
J.eA=function(a,b,c,d,e){return J.e(a).bI(a,b,c,d,e)}
J.cm=function(a,b){return J.ei(a).dN(a,b)}
J.eB=function(a,b){return J.k0(a).O(a,b)}
J.bC=function(a,b,c){return J.a6(a).dP(a,b,c)}
J.bD=function(a){return J.e(a).bK(a)}
J.eC=function(a){return J.e(a).bL(a)}
J.eD=function(a,b,c,d,e,f,g){return J.e(a).dS(a,b,c,d,e,f,g)}
J.eE=function(a){return J.e(a).bN(a)}
J.eF=function(a){return J.e(a).dT(a)}
J.eG=function(a,b){return J.e(a).bP(a,b)}
J.bE=function(a,b){return J.e(a).bQ(a,b)}
J.eH=function(a,b,c,d){return J.e(a).bR(a,b,c,d)}
J.eI=function(a,b,c,d,e){return J.e(a).dV(a,b,c,d,e)}
J.eJ=function(a,b,c,d,e){return J.e(a).bS(a,b,c,d,e)}
J.eK=function(a,b,c,d,e,f){return J.e(a).dW(a,b,c,d,e,f)}
J.cn=function(a,b){return J.b2(a).t(a,b)}
J.b8=function(a,b){return J.e(a).bT(a,b)}
J.eL=function(a,b){return J.e(a).bU(a,b)}
J.eM=function(a){return J.e(a).dX(a)}
J.co=function(a,b){return J.b2(a).v(a,b)}
J.cp=function(a){return J.e(a).gdF(a)}
J.eN=function(a){return J.e(a).gaE(a)}
J.at=function(a){return J.e(a).gK(a)}
J.a_=function(a){return J.o(a).gw(a)}
J.aT=function(a){return J.b2(a).gI(a)}
J.a0=function(a){return J.a6(a).gi(a)}
J.eO=function(a){return J.e(a).gc1(a)}
J.eP=function(a){return J.e(a).gaM(a)}
J.cq=function(a){return J.e(a).gU(a)}
J.eQ=function(a){return J.e(a).geg(a)}
J.eR=function(a){return J.e(a).gcc(a)}
J.eS=function(a){return J.e(a).gal(a)}
J.cr=function(a){return J.e(a).geo(a)}
J.bF=function(a){return J.e(a).gm(a)}
J.bG=function(a){return J.e(a).gn(a)}
J.cs=function(a){return J.e(a).gG(a)}
J.eT=function(a){return J.e(a).aQ(a)}
J.eU=function(a,b,c){return J.e(a).aR(a,b,c)}
J.eV=function(a){return J.e(a).am(a)}
J.eW=function(a){return J.e(a).aS(a)}
J.eX=function(a,b){return J.e(a).aT(a,b)}
J.eY=function(a,b,c){return J.e(a).aU(a,b,c)}
J.ct=function(a,b,c){return J.e(a).aX(a,b,c)}
J.eZ=function(a,b){return J.e(a).bZ(a,b)}
J.f_=function(a,b,c){return J.e(a).c3(a,b,c)}
J.cu=function(a){return J.b2(a).ea(a)}
J.f0=function(a,b){return J.e(a).sah(a,b)}
J.f1=function(a,b,c,d){return J.e(a).b2(a,b,c,d)}
J.f2=function(a,b,c,d,e,f,g){return J.e(a).c6(a,b,c,d,e,f,g)}
J.f3=function(a,b,c,d){return J.e(a).c7(a,b,c,d)}
J.cv=function(a,b,c,d){return J.e(a).c8(a,b,c,d)}
J.cw=function(a){return J.aN(a).eh(a)}
J.f4=function(a){return J.ei(a).ej(a)}
J.au=function(a){return J.o(a).k(a)}
J.f5=function(a,b,c,d){return J.e(a).el(a,b,c,d)}
J.f6=function(a,b,c){return J.e(a).cd(a,b,c)}
J.f7=function(a,b,c){return J.e(a).ce(a,b,c)}
J.bH=function(a,b,c){return J.e(a).cf(a,b,c)}
J.f8=function(a,b,c){return J.e(a).cg(a,b,c)}
J.cx=function(a,b,c){return J.e(a).ci(a,b,c)}
J.cy=function(a,b,c){return J.e(a).cj(a,b,c)}
J.cz=function(a,b,c){return J.e(a).ck(a,b,c)}
J.cA=function(a,b,c,d){return J.e(a).cl(a,b,c,d)}
J.cB=function(a,b,c,d){return J.e(a).cm(a,b,c,d)}
J.f9=function(a,b){return J.e(a).co(a,b)}
J.fa=function(a,b,c){return J.e(a).em(a,b,c)}
J.fb=function(a,b,c,d,e,f,g){return J.e(a).cp(a,b,c,d,e,f,g)}
J.fc=function(a,b,c,d,e){return J.e(a).cr(a,b,c,d,e)}
I.aq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bI.prototype
C.D=W.fi.prototype
C.n=W.fq.prototype
C.E=W.fw.prototype
C.F=J.f.prototype
C.c=J.ay.prototype
C.t=J.cZ.prototype
C.b=J.d_.prototype
C.a=J.aA.prototype
C.i=J.aB.prototype
C.M=J.aC.prototype
C.Q=H.he.prototype
C.R=W.hg.prototype
C.w=J.hm.prototype
C.B=W.hV.prototype
C.q=J.b0.prototype
C.a7=W.i3.prototype
C.C=new P.iJ()
C.f=new P.j_()
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
C.N=H.z(I.aq(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.O=I.aq(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.P=I.aq([])
C.o=H.z(I.aq(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.z(I.aq(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.S=new G.u("vec3","vertex btangents",0)
C.d=new G.u("vec3","",0)
C.T=new G.u("vec4","delta from light",0)
C.m=new G.u("","",0)
C.x=new G.u("vec3","vertex coordinates",0)
C.U=new G.u("vec3","vertex binormals",0)
C.y=new G.u("vec4","for wireframe",0)
C.V=new G.u("vec4","per vertex color",0)
C.W=new G.u("float","for normal maps",0)
C.j=new G.u("mat4","",0)
C.Y=new G.u("mat4","",4)
C.X=new G.u("mat4","",128)
C.e=new G.u("float","",0)
C.Z=new G.u("float","",4)
C.a_=new G.u("float","depth for shadowmaps",0)
C.h=new G.u("sampler2D","",0)
C.a0=new G.u("float","for bump maps",0)
C.a1=new G.u("vec2","texture uvs",0)
C.a2=new G.u("float","time since program start in sec",0)
C.k=new G.u("vec2","",0)
C.a3=new G.u("samplerCube","",0)
C.l=new G.u("vec4","",0)
C.a4=new G.u("vec3","vertex normals",0)
C.a5=new G.u("sampler2DShadow","",0)
C.z=new G.u("vec3","per vertex color",0)
C.A=new G.u("mat3","",0)
C.a6=new G.u("vec3","vertex tangents",0)
$.V=0
$.av=null
$.cF=null
$.ek=null
$.e9=null
$.eq=null
$.bw=null
$.bx=null
$.cg=null
$.am=null
$.aJ=null
$.aK=null
$.c9=!1
$.v=C.f
$.a1=null
$.bO=null
$.cS=null
$.cR=null
$.cO=null
$.cN=null
$.cM=null
$.cL=null
$.eh=0
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
I.$lazy(y,x,w)}})(["cK","$get$cK",function(){return H.ej("_$dart_dartClosure")},"bS","$get$bS",function(){return H.ej("_$dart_js")},"dv","$get$dv",function(){return H.X(H.bs({
toString:function(){return"$receiver$"}}))},"dw","$get$dw",function(){return H.X(H.bs({$method$:null,
toString:function(){return"$receiver$"}}))},"dx","$get$dx",function(){return H.X(H.bs(null))},"dy","$get$dy",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dC","$get$dC",function(){return H.X(H.bs(void 0))},"dD","$get$dD",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dA","$get$dA",function(){return H.X(H.dB(null))},"dz","$get$dz",function(){return H.X(function(){try{null.$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return H.X(H.dB(void 0))},"dE","$get$dE",function(){return H.X(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c4","$get$c4",function(){return P.i7()},"cX","$get$cX",function(){var z,y
z=P.aX
y=new P.af(0,P.i5(),null,[z])
y.d5(null,z)
return y},"aL","$get$aL",function(){return[]},"cJ","$get$cJ",function(){return{}},"dQ","$get$dQ",function(){return P.bV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c6","$get$c6",function(){return P.Q()},"dk","$get$dk",function(){return new G.dt(1281,0,4294967295)},"cE","$get$cE",function(){return G.ds(32774,770,771)},"cD","$get$cD",function(){return G.ds(32774,770,769)},"T","$get$T",function(){return P.d2(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.V,"aPosition",C.x,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.T,"vCenter",C.y,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.e,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dJ","$get$dJ",function(){return C.C},"ep","$get$ep",function(){var z=G.bk("PointSpritesV")
z.b4(["aPosition"])
z.ao(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ab(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"eo","$get$eo",function(){var z=G.bk("PointSpritesF")
z.ao(["uTexture"])
z.ab(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"ed","$get$ed",function(){var z=G.bk("bluredV")
z.b4(["aPosition"])
z.ab(["gl_Position = vec4(aPosition, 1.0);"])
return z},"ee","$get$ee",function(){var z=G.bk("bluredF")
z.ao(["uColorAlpha"])
z.ab(["oFragColor = uColorAlpha;"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.q},{func:1,args:[W.J]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.C]},{func:1,args:[W.bg]},{func:1,ret:P.cb,args:[W.aj,P.l,P.l,W.c5]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aG]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aG]},{func:1,v:true,args:[W.q,W.q]},{func:1,v:true,args:[W.a9]},{func:1,args:[W.aH]},{func:1,args:[P.C,P.c]},{func:1,v:true,args:[P.aO]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.kk(d||a)
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
Isolate.aq=a.aq
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.em,[])
else Y.em([])})})()
//# sourceMappingURL=tracers.dart.js.map
