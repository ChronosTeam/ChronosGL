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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cl"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cl"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cl(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.as=function(){}
var dart=[["","",,H,{"^":"",lL:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
co:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b3:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cn==null){H.kq()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dR("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c2()]
if(v!=null)return v
v=H.ku(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c2(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
G:function(a,b){return a===b},
gB:function(a){return H.aG(a)},
k:["cE",function(a){return"Instance of '"+H.aH(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h2:{"^":"h;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isck:1},
d9:{"^":"h;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isaX:1},
c3:{"^":"h;",
gB:function(a){return 0},
k:["cG",function(a){return String(a)}]},
hx:{"^":"c3;"},
b0:{"^":"c3;"},
aF:{"^":"c3;",
k:function(a){var z=a[$.$get$cU()]
return z==null?this.cG(a):J.ax(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aB:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.U(P.q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.T)(b),++y)a.push(b[y])},
A:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.I(a))}},
a9:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.e(y,x)
y[x]=w}return y.join(b)},
b6:function(a,b){return H.dv(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cw:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.U(P.q("setRange"))
P.hF(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$isi){x=e
w=d}else{w=y.b6(d,e).eg(0,!1)
x=0}y=J.a1(w)
if(x+z>y.gi(w))throw H.a(H.h_())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ac:function(a,b,c,d){return this.cw(a,b,c,d,0)},
bC:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.I(a))}return!1},
cz:function(a,b){if(!!a.immutable$list)H.U(P.q("sort"))
H.hR(a,J.jZ())},
aq:function(a){return this.cz(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
k:function(a){return P.c1(a,"[","]")},
gJ:function(a){return new J.fj(a,a.length,0,null,[H.A(a,0)])},
gB:function(a){return H.aG(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.U(P.q("set length"))
if(b<0)throw H.a(P.an(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.U(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.z([],[H.A(a,0)])
this.si(y,z)
this.ac(y,0,a.length,a)
this.ac(y,a.length,z,b)
return y},
$isn:1,
$asn:I.as,
$isi:1,
p:{
aC:function(a){a.fixed$length=Array
return a},
lJ:[function(a,b){return J.eL(a,b)},"$2","jZ",8,0,22]}},
lK:{"^":"aB;$ti"},
fj:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.T(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aD:{"^":"h;",
S:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a0(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gak(b)
if(this.gak(a)===z)return 0
if(this.gak(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gak:function(a){return a===0?1/a<0:a<0},
ef:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.q(""+a+".toInt()"))},
dJ:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.q(""+a+".ceil()"))},
dK:function(a,b,c){if(this.S(b,c)>0)throw H.a(H.a0(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
ei:function(a,b){var z
if(b>20)throw H.a(P.an(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gak(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.a0(b))
return a+b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.a0(b))
return a-b},
cI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bv(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.bv(a,b)},
bv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.q("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bt:function(a,b){var z
if(a>0)z=this.dt(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dt:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.a(H.a0(b))
return a<b},
ab:function(a,b){if(typeof b!=="number")throw H.a(H.a0(b))
return a>b},
$isaO:1,
$isaQ:1},
d8:{"^":"aD;",$isC:1},
d7:{"^":"aD;"},
aE:{"^":"h;",
dL:function(a,b){if(b>=a.length)H.U(H.aa(a,b))
return a.charCodeAt(b)},
bm:function(a,b){if(b>=a.length)throw H.a(H.aa(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.fi(b,null,null))
return a+b},
cB:function(a,b,c){var z
if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cA:function(a,b){return this.cB(a,b,0)},
b8:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.U(H.a0(c))
if(b<0)throw H.a(P.bn(b,null,null))
if(typeof c!=="number")return H.K(c)
if(b>c)throw H.a(P.bn(b,null,null))
if(c>a.length)throw H.a(P.bn(c,null,null))
return a.substring(b,c)},
cC:function(a,b){return this.b8(a,b,null)},
eh:function(a){return a.toLowerCase()},
dM:function(a,b,c){if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
return H.kA(a,b,c)},
S:function(a,b){var z
if(typeof b!=="string")throw H.a(H.a0(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.aa(a,b))
return a[b]},
$isn:1,
$asn:I.as,
$isl:1}}],["","",,H,{"^":"",
d6:function(){return new P.br("No element")},
h0:function(){return new P.br("Too many elements")},
h_:function(){return new P.br("Too few elements")},
hR:function(a,b){H.aZ(a,0,J.a4(a)-1,b)},
aZ:function(a,b,c,d){if(c-b<=32)H.hQ(a,b,c,d)
else H.hP(a,b,c,d)},
hQ:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a1(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.M(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a_(c-b+1,6)
y=b+z
x=c-z
w=C.b.a_(b+c,2)
v=w-z
u=w+z
t=J.a1(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.M(d.$2(s,r),0)){n=r
r=s
s=n}if(J.M(d.$2(p,o),0)){n=o
o=p
p=n}if(J.M(d.$2(s,q),0)){n=q
q=s
s=n}if(J.M(d.$2(r,q),0)){n=q
q=r
r=n}if(J.M(d.$2(s,p),0)){n=p
p=s
s=n}if(J.M(d.$2(q,p),0)){n=p
p=q
q=n}if(J.M(d.$2(r,o),0)){n=o
o=r
r=n}if(J.M(d.$2(r,q),0)){n=q
q=r
r=n}if(J.M(d.$2(p,o),0)){n=o
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
h=J.o(i)
if(h.G(i,0))continue
if(h.a1(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aP(i)
if(h.ab(i,0)){--l
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
if(J.aS(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.M(d.$2(j,p),0))for(;!0;)if(J.M(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aS(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
if(m<y&&l>x){for(;J.H(d.$2(t.h(a,m),r),0);)++m
for(;J.H(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.H(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aS(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aZ(a,m,l,d)}else H.aZ(a,m,l,d)},
bV:{"^":"bi;$ti"},
bk:{"^":"bV;$ti",
gJ:function(a){return new H.de(this,this.gi(this),0,null,[H.b4(this,"bk",0)])},
A:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.I(this))}},
aV:function(a,b){return this.cF(0,b)}},
i5:{"^":"bk;a,b,c,$ti",
cX:function(a,b,c,d){},
gdf:function(){var z=J.a4(this.a)
return z},
gdu:function(){var z,y
z=J.a4(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a4(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdu()+b
if(b>=0){y=this.gdf()
if(typeof y!=="number")return H.K(y)
y=z>=y}else y=!0
if(y)throw H.a(P.x(b,this,"index",null,null))
return J.cv(this.a,z)},
eg:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a1(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.z(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.e(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.I(this))}return t},
p:{
dv:function(a,b,c,d){var z=new H.i5(a,b,c,[d])
z.cX(a,b,c,d)
return z}}},
de:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a1(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.I(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hd:{"^":"bk;a,b,$ti",
gi:function(a){return J.a4(this.a)},
q:function(a,b){return this.b.$1(J.cv(this.a,b))},
$asbV:function(a,b){return[b]},
$asbk:function(a,b){return[b]},
$asbi:function(a,b){return[b]}},
dT:{"^":"bi;a,b,$ti",
gJ:function(a){return new H.id(J.aU(this.a),this.b,this.$ti)}},
id:{"^":"h1;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gC(z))===!0)return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bf:{"^":"c;$ti"}}],["","",,H,{"^":"",
ki:function(a){return init.types[a]},
kt:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ax(a)
if(typeof z!=="string")throw H.a(H.a0(a))
return z},
aG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aH:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.o(a).$isb0){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bm(w,0)===36)w=C.i.cC(w,1)
r=H.bH(H.at(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
E:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hE:function(a){return a.b?H.E(a).getUTCFullYear()+0:H.E(a).getFullYear()+0},
hC:function(a){return a.b?H.E(a).getUTCMonth()+1:H.E(a).getMonth()+1},
hy:function(a){return a.b?H.E(a).getUTCDate()+0:H.E(a).getDate()+0},
hz:function(a){return a.b?H.E(a).getUTCHours()+0:H.E(a).getHours()+0},
hB:function(a){return a.b?H.E(a).getUTCMinutes()+0:H.E(a).getMinutes()+0},
hD:function(a){return a.b?H.E(a).getUTCSeconds()+0:H.E(a).getSeconds()+0},
hA:function(a){return a.b?H.E(a).getUTCMilliseconds()+0:H.E(a).getMilliseconds()+0},
K:function(a){throw H.a(H.a0(a))},
e:function(a,b){if(a==null)J.a4(a)
throw H.a(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a4(a)
if(!(b<0)){if(typeof z!=="number")return H.K(z)
y=b>=z}else y=!0
if(y)return P.x(b,a,"index",null,z)
return P.bn(b,"index",null)},
a0:function(a){return new P.ac(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.c9()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eD})
z.name=""}else z.toString=H.eD
return z},
eD:function(){return J.ax(this.dartException)},
U:function(a){throw H.a(a)},
T:function(a){throw H.a(P.I(a))},
G:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bt(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c4(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dl(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dD()
u=$.$get$dE()
t=$.$get$dF()
s=$.$get$dG()
r=$.$get$dK()
q=$.$get$dL()
p=$.$get$dI()
$.$get$dH()
o=$.$get$dN()
n=$.$get$dM()
m=v.P(y)
if(m!=null)return z.$1(H.c4(y,m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.c4(y,m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dl(y,m))}}return z.$1(new H.ia(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ds()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ds()
return a},
a2:function(a){var z
if(a==null)return new H.ea(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ea(a,null)},
ke:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
ks:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d3("Unsupported number of arguments for wrapped closure"))},
a9:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ks)
a.$identity=z
return z},
fs:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$isi){z.$reflectionInfo=c
x=H.hH(z).r}else x=c
w=d?Object.create(new H.hT().constructor.prototype):Object.create(new H.bS(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.av(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cS(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ki,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cQ:H.bT
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cS(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fp:function(a,b,c,d){var z=H.bT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cS:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fp(y,!w,z,b)
if(y===0){w=$.V
$.V=J.av(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ay
if(v==null){v=H.bb("self")
$.ay=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.V
$.V=J.av(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ay
if(v==null){v=H.bb("self")
$.ay=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fq:function(a,b,c,d){var z,y
z=H.bT
y=H.cQ
switch(b?-1:a){case 0:throw H.a(H.hL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fr:function(a,b){var z,y,x,w,v,u,t,s
z=$.ay
if(z==null){z=H.bb("self")
$.ay=z}y=$.cP
if(y==null){y=H.bb("receiver")
$.cP=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.V
$.V=J.av(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.V
$.V=J.av(y,1)
return new Function(z+H.b(y)+"}")()},
cl:function(a,b,c,d,e,f){var z,y
z=J.aC(b)
y=!!J.o(c).$isi?J.aC(c):c
return H.fs(a,z,y,!!d,e,f)},
ky:function(a,b){var z=J.a1(b)
throw H.a(H.cR(a,z.b8(b,3,z.gi(b))))},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.ky(a,b)},
cm:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
es:function(a,b){var z,y
if(a==null)return!1
z=H.cm(J.o(a))
if(z==null)y=!1
else y=H.ex(z,b)
return y},
k6:function(a){var z
if(a instanceof H.f){z=H.cm(J.o(a))
if(z!=null)return H.cp(z,null)
return"Closure"}return H.aH(a)},
kB:function(a){throw H.a(new P.fz(a))},
ev:function(a){return init.getIsolateTag(a)},
z:function(a,b){a.$ti=b
return a},
at:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.aR(a["$as"+H.b(c)],H.at(b))},
b5:function(a,b,c,d){var z=H.aR(a["$as"+H.b(c)],H.at(b))
return z==null?null:z[d]},
b4:function(a,b,c){var z=H.aR(a["$as"+H.b(b)],H.at(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.at(a)
return z==null?null:z[b]},
cp:function(a,b){var z=H.au(a,b)
return z},
au:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bH(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.au(z,b)
return H.jY(a,b)}return"unknown-reified-type"},
jY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.au(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.au(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.au(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kd(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.au(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bH:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cb("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.au(u,c)}return w?"":"<"+z.k(0)+">"},
kh:function(a){var z,y,x
if(a instanceof H.f){z=H.cm(J.o(a))
if(z!=null)return H.cp(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bH(a.$ti,0,null)
return y+x},
aR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b2:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.at(a)
y=J.o(a)
if(y[b]==null)return!1
return H.en(H.aR(y[d],z),c)},
b6:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bH(c,0,null)
throw H.a(H.cR(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
en:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.L(a[y],b[y]))return!1
return!0},
n2:function(a,b,c){return a.apply(b,H.aR(J.o(b)["$as"+H.b(c)],H.at(b)))},
L:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aX")return!0
if('func' in b)return H.ex(a,b)
if('func' in a)return b.builtin$cls==="lC"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cp(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.en(H.aR(u,z),x)},
em:function(a,b,c){var z,y,x,w,v
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
k7:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aC(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.L(v,u)||H.L(u,v)))return!1}return!0},
ex:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.em(x,w,!1))return!1
if(!H.em(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.L(o,n)||H.L(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.L(o,n)||H.L(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.L(o,n)||H.L(n,o)))return!1}}return H.k7(a.named,b.named)},
n3:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ku:function(a){var z,y,x,w,v,u
z=$.ew.$1(a)
y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.el.$2(a,z)
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
return u.i}if(v==="+")return H.ez(a,x)
if(v==="*")throw H.a(P.dR(z))
if(init.leafTags[z]===true){u=H.bI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ez(a,x)},
ez:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.co(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bI:function(a){return J.co(a,!1,null,!!a.$isp)},
kx:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bI(z)
else return J.co(z,c,null,null)},
kq:function(){if(!0===$.cn)return
$.cn=!0
H.kr()},
kr:function(){var z,y,x,w,v,u,t,s
$.bD=Object.create(null)
$.bG=Object.create(null)
H.km()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eC.$1(v)
if(u!=null){t=H.kx(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
km:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.ar(C.I,H.ar(C.N,H.ar(C.u,H.ar(C.u,H.ar(C.M,H.ar(C.J,H.ar(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ew=new H.kn(v)
$.el=new H.ko(u)
$.eC=new H.kp(t)},
ar:function(a,b){return a(b)||b},
kA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hG:{"^":"c;a,b,c,d,e,f,r,x",p:{
hH:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aC(z)
y=z[0]
x=z[1]
return new H.hG(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i8:{"^":"c;a,b,c,d,e,f",
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
Z:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ht:{"^":"D;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dl:function(a,b){return new H.ht(a,b==null?null:b.method)}}},
h3:{"^":"D;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
c4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h3(a,y,z?null:b.receiver)}}},
ia:{"^":"D;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kC:{"^":"f:0;a",
$1:function(a){if(!!J.o(a).$isD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ea:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaI:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aH(this).trim()+"'"},
gcs:function(){return this},
gcs:function(){return this}},
dw:{"^":"f;"},
hT:{"^":"dw;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bS:{"^":"dw;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bS))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aG(this.a)
else y=typeof z!=="object"?J.a3(z):H.aG(z)
return(y^H.aG(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aH(z)+"'")},
p:{
bT:function(a){return a.a},
cQ:function(a){return a.c},
bb:function(a){var z,y,x,w,v
z=new H.bS("self","target","receiver","name")
y=J.aC(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fn:{"^":"D;a",
k:function(a){return this.a},
p:{
cR:function(a,b){return new H.fn("CastError: "+H.b(P.bX(a))+": type '"+H.k6(a)+"' is not a subtype of type '"+b+"'")}}},
hK:{"^":"D;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hL:function(a){return new H.hK(a)}}},
dO:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.a3(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.dO&&J.H(this.a,b.a)}},
da:{"^":"c7;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gL:function(a){return new H.h9(this,[H.A(this,0)])},
ai:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bo(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bo(y,b)}else return this.e1(b)},
e1:function(a){var z=this.d
if(z==null)return!1
return this.aK(this.aA(z,J.a3(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ag(z,b)
x=y==null?null:y.ga8()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ag(w,b)
x=y==null?null:y.ga8()
return x}else return this.e2(b)},
e2:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aA(z,J.a3(a)&0x3ffffff)
x=this.aK(y,a)
if(x<0)return
return y[x].ga8()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.bh(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.bh(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.a3(b)&0x3ffffff
v=this.aA(x,w)
if(v==null)this.aH(x,w,[this.at(b,c)])
else{u=this.aK(v,b)
if(u>=0)v[u].sa8(c)
else v.push(this.at(b,c))}}},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.I(this))
z=z.c}},
bh:function(a,b,c){var z=this.ag(a,b)
if(z==null)this.aH(a,b,this.at(b,c))
else z.sa8(c)},
bi:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.h8(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bi()
return z},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].ge0(),b))return y
return-1},
k:function(a){return P.df(this)},
ag:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aH:function(a,b,c){a[b]=c},
dd:function(a,b){delete a[b]},
bo:function(a,b){return this.ag(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aH(z,"<non-identifier-key>",z)
this.dd(z,"<non-identifier-key>")
return z}},
h8:{"^":"c;e0:a<,a8:b@,c,d"},
h9:{"^":"bV;a,$ti",
gi:function(a){return this.a.a},
gJ:function(a){var z,y
z=this.a
y=new H.ad(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
A:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.I(z))
y=y.c}}},
ad:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kn:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
ko:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
kp:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kd:function(a){return J.aC(H.z(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
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
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aa(b,a))},
hp:{"^":"h;","%":"DataView;ArrayBufferView;c8|e4|e5|di|e6|e7|ae"},
c8:{"^":"hp;",
gi:function(a){return a.length},
$isn:1,
$asn:I.as,
$isp:1,
$asp:I.as},
di:{"^":"e5;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbf:function(){return[P.aO]},
$asj:function(){return[P.aO]},
$isi:1,
$asi:function(){return[P.aO]},
"%":"Float64Array"},
ae:{"^":"e7;",
j:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbf:function(){return[P.C]},
$asj:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]}},
ho:{"^":"di;",$isbY:1,"%":"Float32Array"},
m_:{"^":"ae;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m0:{"^":"ae;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isfY:1,
"%":"Int32Array"},
m1:{"^":"ae;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m2:{"^":"ae;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m3:{"^":"ae;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m4:{"^":"ae;",
gi:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m5:{"^":"ae;",
gi:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e4:{"^":"c8+j;"},
e5:{"^":"e4+bf;"},
e6:{"^":"c8+j;"},
e7:{"^":"e6+bf;"}}],["","",,P,{"^":"",
ij:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k8()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a9(new P.il(z),1)).observe(y,{childList:true})
return new P.ik(z,y,x)}else if(self.setImmediate!=null)return P.k9()
return P.ka()},
mQ:[function(a){self.scheduleImmediate(H.a9(new P.im(a),0))},"$1","k8",4,0,6],
mR:[function(a){self.setImmediate(H.a9(new P.io(a),0))},"$1","k9",4,0,6],
mS:[function(a){P.jz(0,a)},"$1","ka",4,0,6],
k1:function(a,b){if(H.es(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
fQ:function(a,b,c){var z
if(a==null)a=new P.c9()
z=$.r
if(z!==C.d)z.toString
z=new P.F(0,z,null,[c])
z.d9(a,b)
return z},
fR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.F(0,$.r,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fT(z,b,!1,y)
try{for(s=0,r=0;s<6;++s){w=a[s]
v=r
w.aU(new P.fS(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.F(0,$.r,null,[null])
r.bk(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.G(p)
t=H.a2(p)
if(z.b===0||!1)return P.fQ(u,t,null)
else{z.c=u
z.d=t}}return y},
jX:function(a,b,c){$.r.toString
a.N(b,c)},
k0:function(){var z,y
for(;z=$.ap,z!=null;){$.aM=null
y=z.b
$.ap=y
if(y==null)$.aL=null
z.a.$0()}},
n1:[function(){$.ci=!0
try{P.k0()}finally{$.aM=null
$.ci=!1
if($.ap!=null)$.$get$cd().$1(P.eo())}},"$0","eo",0,0,3],
ej:function(a){var z=new P.dU(a,null)
if($.ap==null){$.aL=z
$.ap=z
if(!$.ci)$.$get$cd().$1(P.eo())}else{$.aL.b=z
$.aL=z}},
k5:function(a){var z,y,x
z=$.ap
if(z==null){P.ej(a)
$.aM=$.aL
return}y=new P.dU(a,null)
x=$.aM
if(x==null){y.b=z
$.aM=y
$.ap=y}else{y.b=x.b
x.b=y
$.aM=y
if(y.b==null)$.aL=y}},
kz:function(a){var z=$.r
if(C.d===z){P.aq(null,null,C.d,a)
return}z.toString
P.aq(null,null,z,z.bF(a))},
k4:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.G(u)
y=H.a2(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aw(x)
w=t
v=x.gX()
c.$2(w,v)}}},
jR:function(a,b,c,d){var z=a.bL(0)
if(!!J.o(z).$isX&&z!==$.$get$bZ())z.cr(new P.jU(b,c,d))
else b.N(c,d)},
jS:function(a,b){return new P.jT(a,b)},
jV:function(a,b,c){var z=a.bL(0)
if(!!J.o(z).$isX&&z!==$.$get$bZ())z.cr(new P.jW(b,c))
else b.Y(c)},
bC:function(a,b,c,d,e){var z={}
z.a=d
P.k5(new P.k2(z,e))},
eh:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
ei:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
k3:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
aq:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bF(d):c.dG(d)
P.ej(d)},
il:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ik:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
im:{"^":"f:1;a",
$0:function(){this.a.$0()}},
io:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jy:{"^":"c;a,b,c",
d6:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a9(new P.jA(this,b),0),a)
else throw H.a(P.q("`setTimeout()` not found."))},
p:{
jz:function(a,b){var z=new P.jy(!0,null,0)
z.d6(a,b)
return z}}},
jA:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
X:{"^":"c;$ti"},
fT:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.N(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.N(z.c,z.d)}},
fS:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.e(x,z)
x[z]=a
if(y===0)this.c.bn(x)}else if(z.b===0&&!this.e)this.c.N(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kO:{"^":"c;$ti"},
dW:{"^":"c;$ti"},
ii:{"^":"dW;a,$ti",
aI:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bs("Future already completed"))
z.bk(b)}},
jt:{"^":"dW;a,$ti",
aI:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bs("Future already completed"))
z.Y(b)}},
dY:{"^":"c;aF:a<,b,c,d,e,$ti",
gdB:function(){return this.b.b},
gc0:function(){return(this.c&1)!==0},
ge_:function(){return(this.c&2)!==0},
gc_:function(){return this.c===8},
dY:function(a){return this.b.b.aS(this.d,a)},
e3:function(a){if(this.c!==6)return!0
return this.b.b.aS(this.d,J.aw(a))},
dX:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.es(z,{func:1,args:[P.c,P.aI]}))return x.eb(z,y.gM(a),a.gX())
else return x.aS(z,y.gM(a))},
dZ:function(){return this.b.b.c6(this.d)}},
F:{"^":"c;bu:a<,b,dn:c<,$ti",
gdi:function(){return this.a===2},
gaB:function(){return this.a>=4},
aU:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.k1(b,z)}y=new P.F(0,z,null,[null])
x=b==null?1:3
this.au(new P.dY(null,y,x,a,b,[H.A(this,0),null]))
return y},
an:function(a){return this.aU(a,null)},
cr:function(a){var z,y
z=$.r
y=new P.F(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.A(this,0)
this.au(new P.dY(null,y,8,a,null,[z,z]))
return y},
au:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaB()){y.au(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aq(null,null,z,new P.iG(this,a))}},
br:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaF()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaB()){v.br(a)
return}this.a=v.a
this.c=v.c}z.a=this.aG(a)
y=this.b
y.toString
P.aq(null,null,y,new P.iN(z,this))}},
a5:function(){var z=this.c
this.c=null
return this.aG(z)},
aG:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaF()
z.a=y}return y},
Y:function(a){var z,y,x
z=this.$ti
y=H.b2(a,"$isX",z,"$asX")
if(y){z=H.b2(a,"$isF",z,null)
if(z)P.bA(a,this)
else P.dZ(a,this)}else{x=this.a5()
this.a=4
this.c=a
P.ao(this,x)}},
bn:function(a){var z=this.a5()
this.a=4
this.c=a
P.ao(this,z)},
N:[function(a,b){var z=this.a5()
this.a=8
this.c=new P.ba(a,b)
P.ao(this,z)},function(a){return this.N(a,null)},"eo","$2","$1","gav",4,2,13],
bk:function(a){var z=H.b2(a,"$isX",this.$ti,"$asX")
if(z){this.da(a)
return}this.a=1
z=this.b
z.toString
P.aq(null,null,z,new P.iI(this,a))},
da:function(a){var z=H.b2(a,"$isF",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aq(null,null,z,new P.iM(this,a))}else P.bA(a,this)
return}P.dZ(a,this)},
d9:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aq(null,null,z,new P.iH(this,a,b))},
$isX:1,
p:{
iF:function(a,b){var z=new P.F(0,$.r,null,[b])
z.a=4
z.c=a
return z},
dZ:function(a,b){var z,y,x
b.a=1
try{a.aU(new P.iJ(b),new P.iK(b))}catch(x){z=H.G(x)
y=H.a2(x)
P.kz(new P.iL(b,z,y))}},
bA:function(a,b){var z
for(;a.gdi();)a=a.c
if(a.gaB()){z=b.a5()
b.a=a.a
b.c=a.c
P.ao(b,z)}else{z=b.c
b.a=2
b.c=a
a.br(z)}},
ao:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aw(v)
t=v.gX()
y.toString
P.bC(null,null,y,u,t)}return}for(;b.gaF()!=null;b=s){s=b.a
b.a=null
P.ao(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc0()||b.gc_()){q=b.gdB()
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
t=v.gX()
y.toString
P.bC(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gc_())new P.iQ(z,x,b,w).$0()
else if(y){if(b.gc0())new P.iP(x,b,r).$0()}else if(b.ge_())new P.iO(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.o(y).$isX){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aG(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bA(y,o)
return}}o=b.b
b=o.a5()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iG:{"^":"f:1;a,b",
$0:function(){P.ao(this.a,this.b)}},
iN:{"^":"f:1;a,b",
$0:function(){P.ao(this.b,this.a.a)}},
iJ:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.Y(a)}},
iK:{"^":"f:14;a",
$2:function(a,b){this.a.N(a,b)},
$1:function(a){return this.$2(a,null)}},
iL:{"^":"f:1;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
iI:{"^":"f:1;a,b",
$0:function(){this.a.bn(this.b)}},
iM:{"^":"f:1;a,b",
$0:function(){P.bA(this.b,this.a)}},
iH:{"^":"f:1;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
iQ:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dZ()}catch(w){y=H.G(w)
x=H.a2(w)
if(this.d){v=J.aw(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.ba(y,x)
u.a=!0
return}if(!!J.o(z).$isX){if(z instanceof P.F&&z.gbu()>=4){if(z.gbu()===8){v=this.b
v.b=z.gdn()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.an(new P.iR(t))
v.a=!1}}},
iR:{"^":"f:0;a",
$1:function(a){return this.a}},
iP:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dY(this.c)}catch(x){z=H.G(x)
y=H.a2(x)
w=this.a
w.b=new P.ba(z,y)
w.a=!0}}},
iO:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e3(z)===!0&&w.e!=null){v=this.b
v.b=w.dX(z)
v.a=!1}}catch(u){y=H.G(u)
x=H.a2(u)
w=this.a
v=J.aw(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.ba(y,x)
s.a=!0}}},
dU:{"^":"c;a,b"},
bt:{"^":"c;$ti",
A:function(a,b){var z,y
z={}
y=new P.F(0,$.r,null,[null])
z.a=null
z.a=this.aL(new P.i1(z,this,b,y),!0,new P.i2(y),y.gav())
return y},
gi:function(a){var z,y
z={}
y=new P.F(0,$.r,null,[P.C])
z.a=0
this.aL(new P.i3(z),!0,new P.i4(z,y),y.gav())
return y},
gdU:function(a){var z,y
z={}
y=new P.F(0,$.r,null,[H.b4(this,"bt",0)])
z.a=null
z.a=this.aL(new P.hY(z,this,y),!0,new P.hZ(y),y.gav())
return y}},
i1:{"^":"f;a,b,c,d",
$1:function(a){P.k4(new P.i_(this.c,a),new P.i0(),P.jS(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.b4(this.b,"bt",0)]}}},
i_:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
i0:{"^":"f:0;",
$1:function(a){}},
i2:{"^":"f:1;a",
$0:function(){this.a.Y(null)}},
i3:{"^":"f:0;a",
$1:function(a){++this.a.a}},
i4:{"^":"f:1;a,b",
$0:function(){this.b.Y(this.a.a)}},
hY:{"^":"f;a,b,c",
$1:function(a){P.jV(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.b4(this.b,"bt",0)]}}},
hZ:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.d6()
throw H.a(x)}catch(w){z=H.G(w)
y=H.a2(w)
P.jX(this.a,z,y)}}},
hX:{"^":"c;$ti"},
jU:{"^":"f:1;a,b,c",
$0:function(){return this.a.N(this.b,this.c)}},
jT:{"^":"f:15;a,b",
$2:function(a,b){P.jR(this.a,this.b,a,b)}},
jW:{"^":"f:1;a,b",
$0:function(){return this.a.Y(this.b)}},
ba:{"^":"c;M:a>,X:b<",
k:function(a){return H.b(this.a)},
$isD:1},
jG:{"^":"c;"},
k2:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c9()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ax(y)
throw x}},
jc:{"^":"jG;",
ec:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.eh(null,null,this,a)}catch(x){z=H.G(x)
y=H.a2(x)
P.bC(null,null,this,z,y)}},
ed:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.ei(null,null,this,a,b)}catch(x){z=H.G(x)
y=H.a2(x)
P.bC(null,null,this,z,y)}},
dG:function(a){return new P.je(this,a)},
bF:function(a){return new P.jd(this,a)},
dH:function(a){return new P.jf(this,a)},
h:function(a,b){return},
c6:function(a){if($.r===C.d)return a.$0()
return P.eh(null,null,this,a)},
aS:function(a,b){if($.r===C.d)return a.$1(b)
return P.ei(null,null,this,a,b)},
eb:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.k3(null,null,this,a,b,c)}},
je:{"^":"f:1;a,b",
$0:function(){return this.a.c6(this.b)}},
jd:{"^":"f:1;a,b",
$0:function(){return this.a.ec(this.b)}},
jf:{"^":"f:0;a,b",
$1:function(a){return this.a.ed(this.b,a)}}}],["","",,P,{"^":"",
P:function(){return new H.da(0,null,null,null,null,null,0,[null,null])},
dc:function(a){return H.ke(a,new H.da(0,null,null,null,null,null,0,[null,null]))},
Q:function(a,b,c,d){return new P.j_(0,null,null,null,null,null,0,[d])},
fZ:function(a,b,c){var z,y
if(P.cj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aN()
y.push(a)
try{P.k_(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.du(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c1:function(a,b,c){var z,y,x
if(P.cj(a))return b+"..."+c
z=new P.cb(b)
y=$.$get$aN()
y.push(a)
try{x=z
x.a=P.du(x.gZ(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gZ()+c
y=z.gZ()
return y.charCodeAt(0)==0?y:y},
cj:function(a){var z,y
for(z=0;y=$.$get$aN(),z<y.length;++z)if(a===y[z])return!0
return!1},
k_:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gJ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gC(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.t();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
c5:function(a,b){var z,y
z=P.Q(null,null,null,b)
for(y=J.aU(a);y.t();)z.R(0,y.gC(y))
return z},
df:function(a){var z,y,x
z={}
if(P.cj(a))return"{...}"
y=new P.cb("")
try{$.$get$aN().push(a)
x=y
x.a=x.gZ()+"{"
z.a=!0
J.cw(a,new P.hc(z,y))
z=y
z.a=z.gZ()+"}"}finally{z=$.$get$aN()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gZ()
return z.charCodeAt(0)==0?z:z},
j_:{"^":"iT;a,b,c,d,e,f,r,$ti",
gJ:function(a){var z=new P.cg(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dc(b)},
dc:function(a){var z=this.d
if(z==null)return!1
return this.az(z[this.aw(a)],a)>=0},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.I(this))
z=z.b}},
R:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ch()
this.b=z}return this.bj(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ch()
this.c=y}return this.bj(y,b)}else return this.d7(0,b)},
d7:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ch()
this.d=z}y=this.aw(b)
x=z[y]
if(x==null)z[y]=[this.aE(b)]
else{if(this.az(x,b)>=0)return!1
x.push(this.aE(b))}return!0},
c5:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dk(0,b)},
dk:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aw(b)]
x=this.az(y,b)
if(x<0)return!1
this.bw(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
bj:function(a,b){if(a[b]!=null)return!1
a[b]=this.aE(b)
return!0},
bs:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bw(z)
delete a[b]
return!0},
aC:function(){this.r=this.r+1&67108863},
aE:function(a){var z,y
z=new P.j0(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aC()
return z},
bw:function(a){var z,y
z=a.gdj()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aC()},
aw:function(a){return J.a3(a)&0x3ffffff},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gde(),b))return y
return-1},
p:{
ch:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
j0:{"^":"c;de:a<,b,dj:c<"},
cg:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iT:{"^":"hM;$ti"},
lO:{"^":"c;$ti"},
dd:{"^":"e3;$ti",$isi:1},
j:{"^":"c;$ti",
gJ:function(a){return new H.de(a,this.gi(a),0,null,[H.b5(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
A:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.I(a))}},
dW:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.I(a))}return y},
b6:function(a,b){return H.dv(a,b,null,H.b5(this,a,"j",0))},
n:function(a,b){var z=H.z([],[H.b5(this,a,"j",0)])
C.c.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.c.ac(z,0,this.gi(a),a)
C.c.ac(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.c1(a,"[","]")}},
c7:{"^":"N;$ti"},
hc:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
N:{"^":"c;$ti",
A:function(a,b){var z,y
for(z=J.aU(this.gL(a));z.t();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a4(this.gL(a))},
k:function(a){return P.df(a)}},
hN:{"^":"c;$ti",
O:function(a,b){var z
for(z=J.aU(b);z.t();)this.R(0,z.gC(z))},
k:function(a){return P.c1(this,"{","}")},
A:function(a,b){var z
for(z=new P.cg(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hM:{"^":"hN;$ti"},
e3:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fL:function(a){var z=J.o(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aH(a)+"'"},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fL(a)},
d3:function(a){return new P.iC(a)},
ak:function(a){H.bJ(H.b(a))},
ck:{"^":"c;"},
"+bool":0,
cV:{"^":"c;dA:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.cV))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.gdA())},
gB:function(a){var z=this.a
return(z^C.b.bt(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fA(H.hE(this))
y=P.aV(H.hC(this))
x=P.aV(H.hy(this))
w=P.aV(H.hz(this))
v=P.aV(H.hB(this))
u=P.aV(H.hD(this))
t=P.fB(H.hA(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fA:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aV:function(a){if(a>=10)return""+a
return"0"+a}}},
aO:{"^":"aQ;"},
"+double":0,
aW:{"^":"c;a4:a<",
n:function(a,b){return new P.aW(C.b.n(this.a,b.ga4()))},
K:function(a,b){return new P.aW(this.a-b.ga4())},
a1:function(a,b){return C.b.a1(this.a,b.ga4())},
ab:function(a,b){return C.b.ab(this.a,b.ga4())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.ga4())},
k:function(a){var z,y,x,w,v
z=new P.fI()
y=this.a
if(y<0)return"-"+new P.aW(0-y).k(0)
x=z.$1(C.b.a_(y,6e7)%60)
w=z.$1(C.b.a_(y,1e6)%60)
v=new P.fH().$1(y%1e6)
return""+C.b.a_(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fG:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fH:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fI:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
D:{"^":"c;",
gX:function(){return H.a2(this.$thrownJsError)}},
c9:{"^":"D;",
k:function(a){return"Throw of null."}},
ac:{"^":"D;a,b,c,d",
gay:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gax:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gay()+y+x
if(!this.a)return w
v=this.gax()
u=P.bX(this.b)
return w+v+": "+H.b(u)},
p:{
cM:function(a){return new P.ac(!1,null,null,a)},
fi:function(a,b,c){return new P.ac(!0,a,b,c)}}},
dn:{"^":"ac;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bn:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
hF:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.an(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.an(b,a,c,"end",f))
return b}}},
fX:{"^":"ac;e,i:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){if(J.aS(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
x:function(a,b,c,d,e){var z=e!=null?e:J.a4(b)
return new P.fX(b,z,!0,a,c,"Index out of range")}}},
ib:{"^":"D;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
q:function(a){return new P.ib(a)}}},
i9:{"^":"D;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dR:function(a){return new P.i9(a)}}},
br:{"^":"D;a",
k:function(a){return"Bad state: "+this.a},
p:{
bs:function(a){return new P.br(a)}}},
ft:{"^":"D;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bX(z))+"."},
p:{
I:function(a){return new P.ft(a)}}},
ds:{"^":"c;",
k:function(a){return"Stack Overflow"},
gX:function(){return},
$isD:1},
fz:{"^":"D;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
la:{"^":"c;"},
iC:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
C:{"^":"aQ;"},
"+int":0,
bi:{"^":"c;$ti",
aV:["cF",function(a,b){return new H.dT(this,b,[H.b4(this,"bi",0)])}],
A:function(a,b){var z
for(z=this.gJ(this);z.t();)b.$1(z.gC(z))},
gi:function(a){var z,y
z=this.gJ(this)
for(y=0;z.t();)++y
return y},
gW:function(a){var z,y
z=this.gJ(this)
if(!z.t())throw H.a(H.d6())
y=z.gC(z)
if(z.t())throw H.a(H.h0())
return y},
q:function(a,b){var z,y,x
if(b<0)H.U(P.an(b,0,null,"index",null))
for(z=this.gJ(this),y=0;z.t();){x=z.gC(z)
if(b===y)return x;++y}throw H.a(P.x(b,this,"index",null,y))},
k:function(a){return P.fZ(this,"(",")")}},
h1:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
c6:{"^":"c;$ti"},
aX:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aQ:{"^":"c;"},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.aG(this)},
k:function(a){return"Instance of '"+H.aH(this)+"'"},
toString:function(){return this.k(this)}},
aI:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
cb:{"^":"c;Z:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
du:function(a,b,c){var z=J.aU(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.t())}else{a+=H.b(z.gC(z))
for(;z.t();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
fJ:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).T(z,a,b,c)
y.toString
z=new H.dT(new W.R(y),new W.fK(),[W.t])
return z.gW(z)},
d2:function(a){return"wheel"},
az:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eY(a)
if(typeof y==="string")z=a.tagName}catch(x){H.G(x)}return z},
iz:function(a,b){return document.createElement(a)},
ai:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ef:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.it(a)
if(!!J.o(z).$isB)return z
return}else return a},
ek:function(a){var z=$.r
if(z===C.d)return a
return z.dH(a)},
v:{"^":"am;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kD:{"^":"ca;l:x=,m:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
kE:{"^":"h;i:length=","%":"AccessibleNodeList"},
kF:{"^":"v;aj:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kG:{"^":"v;aj:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kK:{"^":"v;aj:href}","%":"HTMLBaseElement"},
bR:{"^":"v;",$isbR:1,"%":"HTMLBodyElement"},
kL:{"^":"v;I:name=","%":"HTMLButtonElement"},
bc:{"^":"v;D:height},E:width}",
aX:function(a,b,c){if(c!=null)return a.getContext(b,P.kb(c,null))
return a.getContext(b)},
ct:function(a,b){return this.aX(a,b,null)},
$isbc:1,
"%":"HTMLCanvasElement"},
kM:{"^":"h;",
dO:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ap:function(a){return P.O(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kN:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kP:{"^":"W;U:style=","%":"CSSFontFaceRule"},
kQ:{"^":"W;U:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kR:{"^":"W;U:style=","%":"CSSPageRule"},
kS:{"^":"bd;i:length=","%":"CSSPerspective"},
kT:{"^":"bU;l:x=,m:y=","%":"CSSPositionValue"},
kU:{"^":"bd;l:x=,m:y=,F:z=","%":"CSSRotation"},
W:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kV:{"^":"bd;l:x=,m:y=,F:z=","%":"CSSScale"},
fu:{"^":"ir;i:length=",
bl:function(a,b){var z,y
z=$.$get$cT()
y=z[b]
if(typeof y==="string")return y
y=this.dv(a,b)
z[b]=y
return y},
dv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fC()+b
if(z in a)return z
return b},
ds:function(a,b,c,d){a.setProperty(b,c,d)},
sD:function(a,b){a.height=b},
sE:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fv:{"^":"c;",
sdV:function(a,b){this.ds(a,this.bl(a,"float"),b,"")}},
kW:{"^":"W;U:style=","%":"CSSStyleRule"},
bU:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bd:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kX:{"^":"bU;i:length=","%":"CSSTransformValue"},
kY:{"^":"bd;l:x=,m:y=,F:z=","%":"CSSTranslation"},
kZ:{"^":"bU;i:length=","%":"CSSUnparsedValue"},
l_:{"^":"W;U:style=","%":"CSSViewportRule"},
l0:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
l1:{"^":"h;l:x=,m:y=,F:z=","%":"DeviceAcceleration"},
fD:{"^":"v;","%":"HTMLDivElement"},
l2:{"^":"t;",
gaN:function(a){return new W.b1(a,"mousedown",!1,[W.J])},
gaO:function(a){return new W.b1(a,"mousemove",!1,[W.J])},
gaP:function(a){return new W.b1(a,"mouseup",!1,[W.J])},
gaQ:function(a){return new W.b1(a,W.d2(a),!1,[W.aK])},
"%":"Document|HTMLDocument|XMLDocument"},
l3:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
l4:{"^":"fE;",
gao:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
fE:{"^":"h;",
gao:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
l5:{"^":"iv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.a7]},
$isp:1,
$asp:function(){return[P.a7]},
$asj:function(){return[P.a7]},
$isi:1,
$asi:function(){return[P.a7]},
$ask:function(){return[P.a7]},
"%":"ClientRectList|DOMRectList"},
fF:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gE(a))+" x "+H.b(this.gD(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa7)return!1
return a.left===z.gc1(b)&&a.top===z.gca(b)&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.e2(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcb:function(a){return new P.af(a.left,a.top,[null])},
gD:function(a){return a.height},
gc1:function(a){return a.left},
gca:function(a){return a.top},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa7:1,
$asa7:I.as,
"%":";DOMRectReadOnly"},
l6:{"^":"ix;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.l]},
$isp:1,
$asp:function(){return[P.l]},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
l7:{"^":"h;i:length=","%":"DOMTokenList"},
am:{"^":"t;U:style=,bq:namespaceURI=,ee:tagName=",
gdE:function(a){return new W.iy(a)},
k:function(a){return a.localName},
T:["ar",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d1
if(z==null){z=H.z([],[W.dj])
y=new W.dk(z)
z.push(W.e_(null))
z.push(W.eb())
$.d1=y
d=y}else d=z
z=$.d0
if(z==null){z=new W.ee(d)
$.d0=z
c=z}else{z.a=d
c=z}}if($.a5==null){z=document
y=z.implementation.createHTMLDocument("")
$.a5=y
$.bW=y.createRange()
y=$.a5
y.toString
x=y.createElement("base")
J.f6(x,z.baseURI)
$.a5.head.appendChild(x)}z=$.a5
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a5
if(!!this.$isbR)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a5.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.w(C.R,a.tagName)){$.bW.selectNodeContents(w)
v=$.bW.createContextualFragment(b)}else{w.innerHTML=b
v=$.a5.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a5.body
if(w==null?z!=null:w!==z)J.cE(w)
c.b4(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"dN",null,null,"ges",5,5,null],
cv:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
cu:function(a,b){return this.cv(a,b,null,null)},
aW:function(a){return a.getBoundingClientRect()},
gaN:function(a){return new W.a8(a,"mousedown",!1,[W.J])},
gaO:function(a){return new W.a8(a,"mousemove",!1,[W.J])},
gaP:function(a){return new W.a8(a,"mouseup",!1,[W.J])},
gaQ:function(a){return new W.a8(a,W.d2(a),!1,[W.aK])},
$isam:1,
"%":";Element"},
fK:{"^":"f:0;",
$1:function(a){return!!J.o(a).$isam}},
l8:{"^":"v;D:height},I:name=,E:width}","%":"HTMLEmbedElement"},
l9:{"^":"a6;M:error=","%":"ErrorEvent"},
a6:{"^":"h;",
am:function(a){return a.preventDefault()},
$isa6:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"h;",
bB:["cD",function(a,b,c,d){if(c!=null)this.d8(a,b,c,!1)}],
d8:function(a,b,c,d){return a.addEventListener(b,H.a9(c,1),!1)},
dl:function(a,b,c,d){return a.removeEventListener(b,H.a9(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e8|e9|ec|ed"},
lt:{"^":"v;I:name=","%":"HTMLFieldSetElement"},
lu:{"^":"iE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.be]},
$isp:1,
$asp:function(){return[W.be]},
$asj:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"FileList"},
lv:{"^":"B;M:error=","%":"FileReader"},
lw:{"^":"B;M:error=,i:length=","%":"FileWriter"},
ly:{"^":"h;U:style=","%":"FontFace"},
lz:{"^":"B;",
eu:function(a,b,c){return a.forEach(H.a9(b,3),c)},
A:function(a,b){b=H.a9(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lB:{"^":"v;i:length=,I:name=","%":"HTMLFormElement"},
lD:{"^":"ca;l:x=,m:y=,F:z=","%":"Gyroscope"},
lE:{"^":"h;i:length=","%":"History"},
lF:{"^":"iV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lG:{"^":"v;D:height},I:name=,E:width}","%":"HTMLIFrameElement"},
c_:{"^":"h;",$isc_:1,"%":"ImageBitmap"},
c0:{"^":"h;",$isc0:1,"%":"ImageData"},
bh:{"^":"v;D:height},E:width}",$isbh:1,"%":"HTMLImageElement"},
lI:{"^":"v;D:height},I:name=,E:width}","%":"HTMLInputElement"},
bj:{"^":"dP;",
gel:function(a){return a.which},
$isbj:1,
"%":"KeyboardEvent"},
lN:{"^":"v;aj:href}","%":"HTMLLinkElement"},
lP:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lQ:{"^":"ca;l:x=,m:y=,F:z=","%":"Magnetometer"},
lR:{"^":"v;I:name=","%":"HTMLMapElement"},
he:{"^":"v;M:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lU:{"^":"h;i:length=","%":"MediaList"},
lV:{"^":"B;",
bB:function(a,b,c,d){if(J.H(b,"message"))a.start()
this.cD(a,b,c,!1)},
"%":"MessagePort"},
lW:{"^":"v;I:name=","%":"HTMLMetaElement"},
lX:{"^":"j1;",
h:function(a,b){return P.O(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gL:function(a){var z=H.z([],[P.l])
this.A(a,new W.hg(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"MIDIInputMap"},
hg:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
lY:{"^":"j2;",
h:function(a,b){return P.O(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gL:function(a){var z=H.z([],[P.l])
this.A(a,new W.hh(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
hh:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
lZ:{"^":"j4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bl]},
$isp:1,
$asp:function(){return[W.bl]},
$asj:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$ask:function(){return[W.bl]},
"%":"MimeTypeArray"},
J:{"^":"dP;bK:button=",
gc3:function(a){var z,y,x
if(!!a.offsetX)return new P.af(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.ef(z)).$isam)throw H.a(P.q("offsetX is only supported on elements"))
y=W.ef(z)
z=[null]
x=new P.af(a.clientX,a.clientY,z).K(0,J.eZ(J.f0(y)))
return new P.af(J.cG(x.a),J.cG(x.b),z)}},
$isJ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
R:{"^":"dd;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bs("No elements"))
if(y>1)throw H.a(P.bs("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gJ:function(a){var z=this.a.childNodes
return new W.d4(z,z.length,-1,null,[H.b5(C.T,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asdd:function(){return[W.t]},
$asj:function(){return[W.t]},
$asi:function(){return[W.t]},
$ase3:function(){return[W.t]}},
t:{"^":"B;al:parentNode=,aR:previousSibling=",
ge6:function(a){return new W.R(a)},
e8:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cE(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m6:{"^":"h;",
e7:[function(a){return a.previousNode()},"$0","gaR",1,0,4],
"%":"NodeIterator"},
hq:{"^":"j6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
m9:{"^":"v;D:height},I:name=,E:width}","%":"HTMLObjectElement"},
mb:{"^":"v;I:name=","%":"HTMLOutputElement"},
mc:{"^":"v;I:name=","%":"HTMLParamElement"},
aY:{"^":"h;i:length=","%":"Plugin"},
me:{"^":"ja;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.aY]},
$isp:1,
$asp:function(){return[W.aY]},
$asj:function(){return[W.aY]},
$isi:1,
$asi:function(){return[W.aY]},
$ask:function(){return[W.aY]},
"%":"PluginArray"},
mh:{"^":"h;",
aW:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mn:{"^":"jg;",
h:function(a,b){return P.O(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gL:function(a){var z=H.z([],[P.l])
this.A(a,new W.hJ(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hJ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mo:{"^":"v;i:length=,I:name=","%":"HTMLSelectElement"},
ca:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mp:{"^":"a6;M:error=","%":"SensorErrorEvent"},
mq:{"^":"v;I:name=","%":"HTMLSlotElement"},
mr:{"^":"e9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bp]},
$isp:1,
$asp:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"SourceBufferList"},
ms:{"^":"jm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bq]},
$isp:1,
$asp:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ask:function(){return[W.bq]},
"%":"SpeechGrammarList"},
mt:{"^":"a6;M:error=","%":"SpeechRecognitionError"},
b_:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
mv:{"^":"jp;",
h:function(a,b){return a.getItem(b)},
A:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gL:function(a){var z=H.z([],[P.l])
this.A(a,new W.hW(z))
return z},
gi:function(a){return a.length},
$asN:function(){return[P.l,P.l]},
"%":"Storage"},
hW:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
i6:{"^":"v;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=W.fJ("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.R(y).O(0,J.eW(z))
return y},
"%":"HTMLTableElement"},
my:{"^":"v;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.T(z.createElement("table"),b,c,d)
z.toString
z=new W.R(z)
x=z.gW(z)
x.toString
z=new W.R(x)
w=z.gW(z)
y.toString
w.toString
new W.R(y).O(0,new W.R(w))
return y},
"%":"HTMLTableRowElement"},
mz:{"^":"v;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.T(z.createElement("table"),b,c,d)
z.toString
z=new W.R(z)
x=z.gW(z)
y.toString
x.toString
new W.R(y).O(0,new W.R(x))
return y},
"%":"HTMLTableSectionElement"},
dx:{"^":"v;",$isdx:1,"%":"HTMLTemplateElement"},
mA:{"^":"v;I:name=","%":"HTMLTextAreaElement"},
mC:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$asj:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$ask:function(){return[W.bw]},
"%":"TextTrackCueList"},
mD:{"^":"ed;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$ask:function(){return[W.bv]},
"%":"TextTrackList"},
mE:{"^":"h;i:length=","%":"TimeRanges"},
mF:{"^":"jC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.by]},
$isp:1,
$asp:function(){return[W.by]},
$asj:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$ask:function(){return[W.by]},
"%":"TouchList"},
mG:{"^":"h;i:length=","%":"TrackDefaultList"},
mJ:{"^":"h;",
ev:[function(a){return a.parentNode()},"$0","gal",1,0,4],
e7:[function(a){return a.previousNode()},"$0","gaR",1,0,4],
"%":"TreeWalker"},
dP:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mL:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mN:{"^":"h;l:x=,F:z=","%":"VRStageBoundsPoint"},
cc:{"^":"he;D:height},E:width}",$iscc:1,"%":"HTMLVideoElement"},
mO:{"^":"B;i:length=","%":"VideoTrackList"},
aK:{"^":"J;",
gdQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.q("deltaY is not supported"))},
$isaK:1,
"%":"WheelEvent"},
ie:{"^":"B;",
gdD:function(a){var z,y
z=P.aQ
y=new P.F(0,$.r,null,[z])
this.dg(a)
this.dm(a,W.ek(new W.ig(new P.jt(y,[z]))))
return y},
dm:function(a,b){return a.requestAnimationFrame(H.a9(b,1))},
dg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ig:{"^":"f:0;a",
$1:function(a){this.a.aI(0,a)}},
mP:{"^":"B;"},
mT:{"^":"t;I:name=,bq:namespaceURI=","%":"Attr"},
mU:{"^":"jI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.W]},
$isp:1,
$asp:function(){return[W.W]},
$asj:function(){return[W.W]},
$isi:1,
$asi:function(){return[W.W]},
$ask:function(){return[W.W]},
"%":"CSSRuleList"},
mV:{"^":"fF;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa7)return!1
return a.left===z.gc1(b)&&a.top===z.gca(b)&&a.width===z.gE(b)&&a.height===z.gD(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e2(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcb:function(a){return new P.af(a.left,a.top,[null])},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mW:{"^":"jK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bg]},
$isp:1,
$asp:function(){return[W.bg]},
$asj:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$ask:function(){return[W.bg]},
"%":"GamepadList"},
mZ:{"^":"jM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n_:{"^":"jO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b_]},
$isp:1,
$asp:function(){return[W.b_]},
$asj:function(){return[W.b_]},
$isi:1,
$asi:function(){return[W.b_]},
$ask:function(){return[W.b_]},
"%":"SpeechRecognitionResultList"},
n0:{"^":"jQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bu]},
$isp:1,
$asp:function(){return[W.bu]},
$asj:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$ask:function(){return[W.bu]},
"%":"StyleSheetList"},
ip:{"^":"c7;dh:a<",
A:function(a,b){var z,y,x,w,v
for(z=this.gL(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.T)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gL:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.z([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.e(z,w)
v=z[w]
u=J.d(v)
if(u.gbq(v)==null)y.push(u.gI(v))}return y},
$asc7:function(){return[P.l,P.l]},
$asN:function(){return[P.l,P.l]}},
iy:{"^":"ip;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gL(this).length}},
b1:{"^":"bt;a,b,c,$ti",
aL:function(a,b,c,d){return W.ah(this.a,this.b,a,!1,H.A(this,0))}},
a8:{"^":"b1;a,b,c,$ti"},
iA:{"^":"hX;a,b,c,d,e,$ti",
d2:function(a,b,c,d,e){this.dw()},
bL:function(a){if(this.b==null)return
this.dz()
this.b=null
this.d=null
return},
dw:function(){var z=this.d
if(z!=null&&this.a<=0)J.eG(this.b,this.c,z,!1)},
dz:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eF(x,this.c,z,!1)}},
p:{
ah:function(a,b,c,d,e){var z=W.ek(new W.iB(c))
z=new W.iA(0,a,b,z,!1,[e])
z.d2(a,b,c,!1,e)
return z}}},
iB:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
ce:{"^":"c;cm:a<",
d3:function(a){var z,y
z=$.$get$cf()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.P[y],W.kk())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kl())}},
a0:function(a){return $.$get$e0().w(0,W.az(a))},
V:function(a,b,c){var z,y,x
z=W.az(a)
y=$.$get$cf()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
e_:function(a){var z,y
z=document.createElement("a")
y=new W.jh(z,window.location)
y=new W.ce(y)
y.d3(a)
return y},
mX:[function(a,b,c,d){return!0},"$4","kk",16,0,9],
mY:[function(a,b,c,d){var z,y,x,w,v
z=d.gcm()
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
return z},"$4","kl",16,0,9]}},
k:{"^":"c;$ti",
gJ:function(a){return new W.d4(a,this.gi(a),-1,null,[H.b5(this,a,"k",0)])}},
dk:{"^":"c;a",
a0:function(a){return C.c.bC(this.a,new W.hs(a))},
V:function(a,b,c){return C.c.bC(this.a,new W.hr(a,b,c))}},
hs:{"^":"f:0;a",
$1:function(a){return a.a0(this.a)}},
hr:{"^":"f:0;a,b,c",
$1:function(a){return a.V(this.a,this.b,this.c)}},
ji:{"^":"c;cm:d<",
d5:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.aV(0,new W.jj())
y=b.aV(0,new W.jk())
this.b.O(0,z)
x=this.c
x.O(0,C.w)
x.O(0,y)},
a0:function(a){return this.a.w(0,W.az(a))},
V:["cH",function(a,b,c){var z,y
z=W.az(a)
y=this.c
if(y.w(0,H.b(z)+"::"+b))return this.d.dC(c)
else if(y.w(0,"*::"+b))return this.d.dC(c)
else{y=this.b
if(y.w(0,H.b(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.b(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}]},
jj:{"^":"f:0;",
$1:function(a){return!C.c.w(C.p,a)}},
jk:{"^":"f:0;",
$1:function(a){return C.c.w(C.p,a)}},
ju:{"^":"ji;e,a,b,c,d",
V:function(a,b,c){if(this.cH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cx(a).a.getAttribute("template")==="")return this.e.w(0,b)
return!1},
p:{
eb:function(){var z=P.l
z=new W.ju(P.c5(C.o,z),P.Q(null,null,null,z),P.Q(null,null,null,z),P.Q(null,null,null,z),null)
z.d5(null,new H.hd(C.o,new W.jv(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jv:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
js:{"^":"c;",
a0:function(a){var z=J.o(a)
if(!!z.$isdq)return!1
z=!!z.$isy
if(z&&W.az(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.cA(b,"on"))return!1
return this.a0(a)}},
d4:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aT(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
is:{"^":"c;a",$isB:1,p:{
it:function(a){if(a===window)return a
else return new W.is(a)}}},
dj:{"^":"c;"},
m7:{"^":"c;"},
mK:{"^":"c;"},
jh:{"^":"c;a,b"},
ee:{"^":"c;a",
b4:function(a){new W.jF(this).$2(a,null)},
a6:function(a,b){if(b==null)J.cE(a)
else b.removeChild(a)},
dr:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cx(a)
x=y.gdh().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.G(t)}v="element unprintable"
try{v=J.ax(a)}catch(t){H.G(t)}try{u=W.az(a)
this.dq(a,b,z,v,u,y,x)}catch(t){if(H.G(t) instanceof P.ac)throw t
else{this.a6(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dq:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a0(a)){this.a6(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a6(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gL(f)
y=H.z(z.slice(0),[H.A(z,0)])
for(x=f.gL(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.e(y,x)
w=y[x]
if(!this.a.V(a,J.f9(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdx)this.b4(a.content)}},
jF:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dr(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eX(z)}catch(w){H.G(w)
v=z
if(x){u=J.d(v)
if(u.gal(v)!=null){u.gal(v)
u.gal(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ir:{"^":"h+fv;"},
iu:{"^":"h+j;"},
iv:{"^":"iu+k;"},
iw:{"^":"h+j;"},
ix:{"^":"iw+k;"},
iD:{"^":"h+j;"},
iE:{"^":"iD+k;"},
iU:{"^":"h+j;"},
iV:{"^":"iU+k;"},
j1:{"^":"h+N;"},
j2:{"^":"h+N;"},
j3:{"^":"h+j;"},
j4:{"^":"j3+k;"},
j5:{"^":"h+j;"},
j6:{"^":"j5+k;"},
j9:{"^":"h+j;"},
ja:{"^":"j9+k;"},
jg:{"^":"h+N;"},
e8:{"^":"B+j;"},
e9:{"^":"e8+k;"},
jl:{"^":"h+j;"},
jm:{"^":"jl+k;"},
jp:{"^":"h+N;"},
jw:{"^":"h+j;"},
jx:{"^":"jw+k;"},
ec:{"^":"B+j;"},
ed:{"^":"ec+k;"},
jB:{"^":"h+j;"},
jC:{"^":"jB+k;"},
jH:{"^":"h+j;"},
jI:{"^":"jH+k;"},
jJ:{"^":"h+j;"},
jK:{"^":"jJ+k;"},
jL:{"^":"h+j;"},
jM:{"^":"jL+k;"},
jN:{"^":"h+j;"},
jO:{"^":"jN+k;"},
jP:{"^":"h+j;"},
jQ:{"^":"jP+k;"}}],["","",,P,{"^":"",
ep:function(a){return a},
O:function(a){var z,y,x,w,v
if(a==null)return
z=P.P()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.T)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
kb:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cw(a,new P.kc(z))
return z},
d_:function(){var z=$.cZ
if(z==null){z=J.bL(window.navigator.userAgent,"Opera",0)
$.cZ=z}return z},
fC:function(){var z,y
z=$.cW
if(z!=null)return z
y=$.cX
if(y==null){y=J.bL(window.navigator.userAgent,"Firefox",0)
$.cX=y}if(y)z="-moz-"
else{y=$.cY
if(y==null){y=P.d_()!==!0&&J.bL(window.navigator.userAgent,"Trident/",0)
$.cY=y}if(y)z="-ms-"
else z=P.d_()===!0?"-o-":"-webkit-"}$.cW=z
return z},
kc:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mm:{"^":"B;M:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mH:{"^":"B;M:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
e1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iW:{"^":"c;",
e5:function(){return Math.random()}},
af:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
G:function(a,b){var z,y
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
z=J.a3(this.a)
y=J.a3(this.b)
return P.iX(P.e1(P.e1(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.af(y,C.a.n(z,x),this.$ti)},
K:function(a,b){var z,y,x,w
z=this.a
y=J.d(b)
x=y.gl(b)
if(typeof z!=="number")return z.K()
if(typeof x!=="number")return H.K(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.K()
if(typeof y!=="number")return H.K(y)
return new P.af(z-x,w-y,this.$ti)}},
jb:{"^":"c;$ti"},
a7:{"^":"jb;$ti"}}],["","",,P,{"^":"",lb:{"^":"y;l:x=,m:y=","%":"SVGFEBlendElement"},lc:{"^":"y;l:x=,m:y=","%":"SVGFEColorMatrixElement"},ld:{"^":"y;l:x=,m:y=","%":"SVGFEComponentTransferElement"},le:{"^":"y;l:x=,m:y=","%":"SVGFECompositeElement"},lf:{"^":"y;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},lg:{"^":"y;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},lh:{"^":"y;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},li:{"^":"y;l:x=,m:y=","%":"SVGFEFloodElement"},lj:{"^":"y;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},lk:{"^":"y;l:x=,m:y=","%":"SVGFEImageElement"},ll:{"^":"y;l:x=,m:y=","%":"SVGFEMergeElement"},lm:{"^":"y;l:x=,m:y=","%":"SVGFEMorphologyElement"},ln:{"^":"y;l:x=,m:y=","%":"SVGFEOffsetElement"},lo:{"^":"y;l:x=,m:y=,F:z=","%":"SVGFEPointLightElement"},lp:{"^":"y;l:x=,m:y=","%":"SVGFESpecularLightingElement"},lq:{"^":"y;l:x=,m:y=,F:z=","%":"SVGFESpotLightElement"},lr:{"^":"y;l:x=,m:y=","%":"SVGFETileElement"},ls:{"^":"y;l:x=,m:y=","%":"SVGFETurbulenceElement"},lx:{"^":"y;l:x=,m:y=","%":"SVGFilterElement"},lA:{"^":"aA;l:x=,m:y=","%":"SVGForeignObjectElement"},fV:{"^":"aA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aA:{"^":"y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lH:{"^":"aA;l:x=,m:y=","%":"SVGImageElement"},lM:{"^":"iZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.db]},
$isi:1,
$asi:function(){return[P.db]},
$ask:function(){return[P.db]},
"%":"SVGLengthList"},lS:{"^":"y;l:x=,m:y=","%":"SVGMaskElement"},m8:{"^":"j8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dm]},
$isi:1,
$asi:function(){return[P.dm]},
$ask:function(){return[P.dm]},
"%":"SVGNumberList"},md:{"^":"y;l:x=,m:y=","%":"SVGPatternElement"},mf:{"^":"h;l:x=,m:y=","%":"SVGPoint"},mg:{"^":"h;i:length=","%":"SVGPointList"},mi:{"^":"h;l:x=,m:y=","%":"SVGRect"},mj:{"^":"fV;l:x=,m:y=","%":"SVGRectElement"},dq:{"^":"y;",$isdq:1,"%":"SVGScriptElement"},mw:{"^":"jr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},y:{"^":"am;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.z([],[W.dj])
z.push(W.e_(null))
z.push(W.eb())
z.push(new W.js())
c=new W.ee(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dN(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.R(w)
u=z.gW(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaN:function(a){return new W.a8(a,"mousedown",!1,[W.J])},
gaO:function(a){return new W.a8(a,"mousemove",!1,[W.J])},
gaP:function(a){return new W.a8(a,"mouseup",!1,[W.J])},
gaQ:function(a){return new W.a8(a,"mousewheel",!1,[W.aK])},
$isy:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mx:{"^":"aA;l:x=,m:y=","%":"SVGSVGElement"},i7:{"^":"aA;","%":"SVGTextPathElement;SVGTextContentElement"},mB:{"^":"i7;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mI:{"^":"jE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dC]},
$isi:1,
$asi:function(){return[P.dC]},
$ask:function(){return[P.dC]},
"%":"SVGTransformList"},mM:{"^":"aA;l:x=,m:y=","%":"SVGUseElement"},iY:{"^":"h+j;"},iZ:{"^":"iY+k;"},j7:{"^":"h+j;"},j8:{"^":"j7+k;"},jq:{"^":"h+j;"},jr:{"^":"jq+k;"},jD:{"^":"h+j;"},jE:{"^":"jD+k;"}}],["","",,P,{"^":"",kH:{"^":"h;i:length=","%":"AudioBuffer"},kI:{"^":"iq;",
h:function(a,b){return P.O(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.O(y.value[1]))}},
gL:function(a){var z=H.z([],[P.l])
this.A(a,new P.fk(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.l,null]},
"%":"AudioParamMap"},fk:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},kJ:{"^":"B;i:length=","%":"AudioTrackList"},fl:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ma:{"^":"fl;i:length=","%":"OfflineAudioContext"},iq:{"^":"h+N;"}}],["","",,P,{"^":"",mk:{"^":"h;",
bA:function(a,b){return a.activeTexture(b)},
bD:function(a,b,c){return a.attachShader(b,c)},
bE:function(a,b,c){return a.bindBuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bO:function(a){return a.createBuffer()},
bP:function(a){return a.createProgram()},
bQ:function(a,b){return a.createShader(b)},
bR:function(a){return a.createTexture()},
bT:function(a,b){return a.depthMask(b)},
bU:function(a,b){return a.disable(b)},
bV:function(a,b,c,d){return a.drawArrays(b,c,d)},
bW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.O(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
c2:function(a,b){return a.linkProgram(b)},
c4:function(a,b,c){return a.pixelStorei(b,c)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b7:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ep(g))
return}if(!!z.$isbh)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc_)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cM("Incorrect number or type of arguments"))},
c7:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
c8:function(a,b,c,d){return a.texParameterf(b,c,d)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
cc:function(a,b,c){return a.uniform1f(b,c)},
cd:function(a,b,c){return a.uniform1fv(b,c)},
ce:function(a,b,c){return a.uniform1i(b,c)},
cf:function(a,b,c){return a.uniform1iv(b,c)},
cg:function(a,b,c){return a.uniform2fv(b,c)},
ci:function(a,b,c){return a.uniform3fv(b,c)},
cj:function(a,b,c){return a.uniform4fv(b,c)},
ck:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cl:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
co:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},ml:{"^":"h;",
dF:function(a,b){return a.beginTransformFeedback(b)},
dI:function(a,b){return a.bindVertexArray(b)},
dP:function(a){return a.createVertexArray()},
dR:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dS:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dT:function(a){return a.endTransformFeedback()},
ej:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ek:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bA:function(a,b){return a.activeTexture(b)},
bD:function(a,b,c){return a.attachShader(b,c)},
bE:function(a,b,c){return a.bindBuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bO:function(a){return a.createBuffer()},
bP:function(a){return a.createProgram()},
bQ:function(a,b){return a.createShader(b)},
bR:function(a){return a.createTexture()},
bT:function(a,b){return a.depthMask(b)},
bU:function(a,b){return a.disable(b)},
bV:function(a,b,c,d){return a.drawArrays(b,c,d)},
bW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.O(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
c2:function(a,b){return a.linkProgram(b)},
c4:function(a,b,c){return a.pixelStorei(b,c)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b7:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.o(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ep(g))
return}if(!!z.$isbh)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc_)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cM("Incorrect number or type of arguments"))},
c7:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
c8:function(a,b,c,d){return a.texParameterf(b,c,d)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
cc:function(a,b,c){return a.uniform1f(b,c)},
cd:function(a,b,c){return a.uniform1fv(b,c)},
ce:function(a,b,c){return a.uniform1i(b,c)},
cf:function(a,b,c){return a.uniform1iv(b,c)},
cg:function(a,b,c){return a.uniform2fv(b,c)},
ci:function(a,b,c){return a.uniform3fv(b,c)},
cj:function(a,b,c){return a.uniform4fv(b,c)},
ck:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cl:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
co:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mu:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.x(b,a,null,null,null))
return P.O(a.item(b))},
j:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c6]},
$isi:1,
$asi:function(){return[P.c6]},
$ask:function(){return[P.c6]},
"%":"SQLResultSetRowList"},jn:{"^":"h+j;"},jo:{"^":"jn+k;"}}],["","",,G,{"^":"",
ih:function(a){var z,y,x,w
z=H.z(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.e(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.e(z,y)
z[y]=w}return C.c.a9(z,"\n")},
dV:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bQ(a,b)
z.b5(a,y,c)
z.bN(a,y)
x=z.b1(a,y,35713)
if(x!=null&&J.H(x,!1)){w=z.b0(a,y)
P.ak("E:Compilation failed:")
P.ak("E:"+G.ih(c))
P.ak("E:Failure:")
P.ak(C.i.n("E:",w))
throw H.a(w)}return y},
d5:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bO(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.bP(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.e(a,y)
v=J.cA(a[y])
if(z>=w)return H.e(b,z)
b[z]=v}return b},
fO:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bO(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x;++z
if(y>=a.length)return H.e(a,y)
x=J.bP(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
fP:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bO(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.bP(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.cA(a[y])
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.f_(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
fN:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aT(a[y],0)
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.aT(a[y],1)
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.aT(a[y],2)
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.aT(a[y],3)
if(z>=w)return H.e(b,z)
b[z]=x}return b},
iS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ad(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.C]],v=[P.aO],u=[T.ag],t=[T.m],s=[T.u];y.t();){r=y.d
if(!x.ai(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.et>0)H.bJ("I: "+q)
continue}p=z.h(0,r)
switch($.$get$S().h(0,r).a){case"vec2":b.a3(r,G.fO(H.b6(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a3(r,G.d5(H.b6(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a3(r,G.fP(H.b6(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a3(r,new Float32Array(H.bB(H.b6(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a3(r,G.fN(H.b6(p,"$isi",w,"$asi"),null),4)
break}}},
bm:{"^":"c;"},
dQ:{"^":"bm;",
be:function(){return this.d},
k:function(a){var z,y,x,w
z=H.z(["{"+H.b(new H.dO(H.kh(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.ad(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a9(z,"\n")}},
fm:{"^":"hS;"},
fo:{"^":"c;a,b",
bZ:function(a,b,c){J.eU(this.a,b)
if(c>0)J.ff(this.a,b,c)},
cp:function(a,b,c,d,e,f,g,h){J.bK(this.a,34962,b)
J.fg(this.a,c,d,e,!1,g,h)}},
fM:{"^":"c;a,b,c,d"},
fU:{"^":"c;a,b,c,d,e",
bc:function(a){switch($.$get$S().h(0,a).a){case"vec2":this.e.j(0,a,H.z([],[T.u]))
break
case"vec3":this.e.j(0,a,H.z([],[T.m]))
break
case"vec4":this.e.j(0,a,H.z([],[T.ag]))
break
case"float":this.e.j(0,a,H.z([],[P.aO]))
break
case"uvec4":this.e.j(0,a,H.z([],[[P.i,P.C]]))
break}},
cL:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.fM(z,z+1,z+2,z+3))},
ae:function(a){var z,y
for(z=this.d,y=0;y<24;++y)z.push(a[y].ah(0))},
cJ:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<24;++y)z.push(b[y].ah(0))},
cK:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ah(0))},
cP:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.z(y,[P.C])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.e(y,u)
t=y[u]
s=t.gep(t)
if(v>=w)return H.e(x,v)
x[v]=s
s=v+1
r=t.geq(t)
if(s>=w)return H.e(x,s)
x[s]=r
r=v+2
s=t.ger(t)
if(r>=w)return H.e(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.e(x,v)
x[v]=s
r=v+1
if(r>=w)return H.e(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.e(x,r)
x[r]=p
r=v+3
if(r>=w)return H.e(x,r)
x[r]=s
s=v+4
if(s>=w)return H.e(x,s)
x[s]=p
p=v+5
if(p>=w)return H.e(x,p)
x[p]=q.d
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ad(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$S().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a9(z," ")}},
dB:{"^":"c;a,b,c"},
dz:{"^":"c;a,b,c",p:{
dA:function(a,b,c){return new G.dz(a,b,c)}}},
dg:{"^":"dQ;d,a,b,c"},
hf:{"^":"bm;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bb:function(a,b,c){var z,y
C.i.bm(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bK(z.a,34962,y)
J.cs(z.a,34962,b,35048)},
cQ:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a3:function(a,b,c){var z,y,x,w,v
z=J.ct(a,0)===105
if(z&&this.z===0)this.z=C.b.cI(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bM(x.a))
this.bb(a,b,c)
w=$.$get$S().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b7(x.a,this.e)
x.bZ(0,v,z?1:0)
x.cp(0,y.h(0,a),v,w.bd(),5126,!1,0,0)},
ae:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bM(y.a))
this.ch=a
this.bb("aPosition",a,3)
x=$.$get$S().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b7(y.a,this.e)
y.bZ(0,w,0)
y.cp(0,z.h(0,"aPosition"),w,x.bd(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ad(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a9(y,"  ")},
p:{
dh:function(a,b,c,d){return new G.hf(b,J.eO(b.a),c,P.P(),d,null,0,-1,null,null,P.P(),"meshdata:"+a,!1,!0)}}},
hv:{"^":"dQ;",
cM:function(a,b){var z
if(typeof a!=="number")return a.em()
if(typeof b!=="number")return H.K(b)
z=a/b
if(this.z===z)return
this.z=z
this.bg()},
bg:function(){var z,y,x,w,v,u
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
be:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
x=!!y.$isag
q=x?y.gao(t):1
if(!!y.$ism){p=y.gl(t)
s=y.gm(t)
r=y.gF(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gF(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.K(t)
x=z[4]
if(typeof s!=="number")return H.K(s)
w=z[8]
if(typeof r!=="number")return H.K(r)
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
c.e4(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hI:{"^":"bm;d,e,f,r,x,y,z,Q,ch,a,b,c",
cT:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){t=z[u]
x.j(0,t,J.cC(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){t=z[u]
x.j(0,t,J.cC(w.a,v,t))}},
cY:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ad(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ai(0,v))x.push(v)}for(z=this.x,y=new P.cg(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.w(0,v))x.push(v)}return x},
d0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ad(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.ct(t,0)){case 117:if(w.ai(0,t)){s=b.h(0,t)
if(v.ai(0,t))H.bJ("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$S().h(0,t)
if(r==null)H.U("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bQ(x.a,q,s)
else if(!!J.o(s).$isfY)J.fd(x.a,q,s)
break
case"float":if(r.c===0)J.fb(x.a,q,s)
else if(!!J.o(s).$isbY)J.fc(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ab(s,"$isY").a
J.cL(x.a,q,!1,p)}else if(!!J.o(s).$isbY)J.cL(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.H.gen(H.ab(s,"$islT"))
J.cK(x.a,q,!1,p)}else if(!!J.o(s).$isbY)J.cK(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cJ(o,q,H.ab(s,"$isag").a)
else J.cJ(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cI(o,q,H.ab(s,"$ism").a)
else J.cI(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cH(o,q,H.ab(s,"$isu").a)
else J.cH(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.K(p)
J.cq(x.a,33984+p)
p=H.ab(s,"$isbx").b
J.al(x.a,3553,p)
p=this.ch
J.bQ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.K(p)
J.cq(x.a,33984+p)
p=H.ab(s,"$isbx").b
J.al(x.a,34067,p)
p=this.ch
J.bQ(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bJ("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.H(s,!0)
o=x.a
if(p)J.b8(o,2929)
else J.bN(o,2929)
break
case"cStencilFunc":H.ab(s,"$isdB")
p=s.a
o=x.a
if(p===1281)J.bN(o,2960)
else{J.b8(o,2960)
o=s.b
n=s.c
J.f7(x.a,p,o,n)}break
case"cDepthWrite":J.eP(x.a,s)
break
case"cBlendEquation":H.ab(s,"$isdz")
p=s.a
o=x.a
if(p===1281)J.bN(o,3042)
else{J.b8(o,3042)
o=s.b
n=s.c
J.eJ(x.a,o,n)
J.eI(x.a,p)}break}++u
break}}m=P.fG(0,0,0,Date.now()-new P.cV(z,!1).a,0,0)
""+u
m.k(0)},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fe(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bi()}for(x=0;x<2;++x){w=b[x]
this.d0(w.a,w.be())}y=this.Q
y.a7(0)
for(v=a.cy,u=new H.ad(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.R(0,u.d)
t=this.cY()
if(t.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b7(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cQ()
u=a.Q
r=a.z
if(s)J.eH(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eT(q,y,v,u,0,r)
else J.eS(q,y,v,u,0)}else{u=z.a
if(r>1)J.eR(u,y,0,v,r)
else J.eQ(u,y,0,v)}if(s)J.eV(z.a)},
as:function(a,b){return this.cO(a,b,null)},
p:{
dp:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.Q(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eM(b.a)
u=G.dV(b.a,35633,y)
J.cr(b.a,v,u)
t=G.dV(b.a,35632,x)
J.cr(b.a,v,t)
if(w.length>0)J.fa(b.a,v,w,35980)
J.f5(b.a,v)
if(J.f4(b.a,v,35714)!==!0)H.U(J.f3(b.a,v))
z=new G.hI(b,c,d,v,P.c5(c.c,null),P.P(),P.P(),z,null,a,!1,!0)
z.cT(a,b,c,d)
return z}}},
w:{"^":"c;a,b,c",
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hO:{"^":"c;a,b,c,d,e,f,r,x",
b9:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.aq(z)},
ad:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.T)(a),++x)y.push(a[x])
C.c.aq(y)},
ba:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.aq(z)},
cU:function(a,b){this.b=this.d1(!0,a,b)},
af:function(a){return this.cU(a,null)},
d1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){t=z[u]
s=$.$get$S().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.T)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.O(w,b)
w.push("}")
return C.c.a9(w,"\n")},
p:{
bo:function(a){return new G.hO(a,null,[],[],[],[],0,P.P())}}},
hS:{"^":"bm;"},
dy:{"^":"c;a,b,c,d,e,f,r",
bf:function(a,b){var z=this.e
if(z!==1)J.f8(a.a,b,34046,z)
J.b9(a.a,b,10240,this.r)
J.b9(a.a,b,10241,this.f)
if(this.b){J.b9(a.a,b,10242,33071)
J.b9(a.a,b,10243,33071)}}},
bx:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fW:{"^":"bx;f,a,b,c,d,e",
cV:function(a){var z,y
z=this.d
y=this.c
J.al(z.a,y,this.b)
J.cF(z.a,y,0,6408,6408,5121,a)}},
fx:{"^":"bx;a,b,c,d,e",
cN:function(a,b,c){var z,y,x,w,v,u
z=this.d
J.cD(z.a,37440,1)
y=this.c
J.al(z.a,y,this.b)
for(x=J.a1(c),w=0;w<6;++w){v=C.Q[w]
u=x.h(c,w)
J.cF(z.a,v,0,6408,6408,5121,u)}x=this.e
x.bf(z,y)
J.cB(z.a)
J.al(z.a,y,null)
x.b=!0},
p:{
fy:function(a,b,c){var z=new G.dy(!1,!1,!1,!0,1,9729,9729)
z.b=!0
z=new G.fx(b,J.cu(a.a),34067,a,z)
z.cN(a,b,c)
return z}}}}],["","",,R,{"^":"",
ic:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dS().e5()
if(v>=w)return H.e(x,v)
x[v]=(u-0.5)*c}y=G.dh(z,a.d,0,a.e.x)
y.ae(x)
return y},
dr:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=B.fw(!0,b,c,d,e,f,g,h)
y=G.dh("cube",a.d,4,a.e.x)
y.ae(G.d5(z.d,null))
x=z.cP()
w=y.d
y.y=J.bM(w.a)
v=y.ch.length
if(v<768){y.cx=new Uint8Array(H.bB(x))
y.Q=5121}else if(v<196608){y.cx=new Uint16Array(H.bB(x))
y.Q=5123}else{y.cx=new Uint32Array(H.bB(x))
y.Q=5125}J.b7(w.a,y.e)
x=y.y
v=y.cx
J.bK(w.a,34963,x)
J.cs(w.a,34963,v,35048)
G.iS(z,y)
return y},
hw:{"^":"hv;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ea:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.d(z)
w.sE(z,y)
w.sD(z,x)
P.ak("size change "+H.b(y)+" "+H.b(x))
this.cM(y,x)
J.fh(this.go.a,0,0,y,x)},"$1","ge9",4,0,17]},
hU:{"^":"c;",
cW:function(a,b,c){var z,y,x
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
x=this.d4(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d4:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iz("span",null)
y=J.cy(v)
J.d(y).sE(y,"1px")
C.n.sD(y,""+d+"px")
C.n.sdV(y,"left")
x=C.n.bl(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hV:{"^":"hU;e,f,a,b,c,d",
d_:function(a,b){var z,y,x,w,v;++this.e
if(J.aS(J.eE(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ei(z,2)+" fps"
y=this.c;(y&&C.F).cu(y,b)
x=C.b.a_(30*C.t.dJ(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cy(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
cZ:function(a){return this.d_(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
fw:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
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
c2=new G.fU(!1,[],[],[],P.P())
c2.bc("aTexUV")
c2.bc("aNormal")
c2.cL(6)
c2.ae([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.cJ("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dX(),c3<6;++c3){c4=z[c3]
c2.cK("aNormal",[c4,c4,c4,c4])}return c2}}],["","",,D,{"^":"",
ha:function(a,b){var z,y,x,w,v,u,t,s,r
z=new Array(6)
z.fixed$length=Array
y=H.z(z,[[P.X,W.bh]])
for(z=[W.a6],x=[null],w=[null],v=0;u=$.$get$eg(),v<6;++v){t=new P.F(0,$.r,null,x)
s=document.createElement("img")
r=new W.a8(s,"load",!1,z)
r.gdU(r).an(new D.hb(new P.ii(t,w),s))
s.src=a+u[v]+b
y[v]=t}return y},
hb:{"^":"f:0;a,b",
$1:function(a){return this.a.aI(0,this.b)}},
h4:{"^":"c;a,b,c",
cR:function(a){var z
a=document
z=W.bj
W.ah(a,"keydown",new D.h6(this),!1,z)
W.ah(a,"keyup",new D.h7(this),!1,z)},
p:{
h5:function(a){var z=P.C
z=new D.h4(P.Q(null,null,null,z),P.Q(null,null,null,z),P.Q(null,null,null,z))
z.cR(a)
return z}}},
h6:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.R(0,J.cz(a))
z.b.R(0,a.which)}},
h7:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.c5(0,J.cz(a))
z.c.R(0,a.which)}},
hi:{"^":"c;a,b,c,d,e,f,r,x",
cS:function(a){var z,y
if(a==null)a=document
z=J.d(a)
y=z.gaO(a)
W.ah(y.a,y.b,new D.hk(this),!1,H.A(y,0))
y=z.gaN(a)
W.ah(y.a,y.b,new D.hl(this),!1,H.A(y,0))
y=z.gaP(a)
W.ah(y.a,y.b,new D.hm(this),!1,H.A(y,0))
z=z.gaQ(a)
W.ah(z.a,z.b,new D.hn(this),!1,H.A(z,0))},
p:{
hj:function(a){var z=P.C
z=new D.hi(P.Q(null,null,null,z),P.Q(null,null,null,z),P.Q(null,null,null,z),0,0,0,0,0)
z.cS(a)
return z}}},
hk:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.am(a)
y=this.a
y.r=z.gc3(a).a
y.x=z.gc3(a).b
y.d=a.movementX
y.e=a.movementY}},
hl:{"^":"f:5;a",
$1:function(a){var z=J.d(a)
z.am(a)
P.ak("BUTTON "+H.b(z.gbK(a)))
z=this.a
z.a.R(0,a.button)
z.b.R(0,a.button)}},
hm:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.am(a)
y=this.a
y.a.c5(0,z.gbK(a))
y.c.R(0,a.button)}},
hn:{"^":"f:18;a",
$1:function(a){var z=J.d(a)
z.am(a)
this.a.f=z.gdQ(a)}},
hu:{"^":"fm;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bF:function(a){var z,y
z=C.S.dW(a,0,new A.kj())
if(typeof z!=="number")return H.K(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kj:{"^":"f:19;",
$2:function(a,b){var z,y
z=J.av(a,J.a3(b))
if(typeof z!=="number")return H.K(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",Y:{"^":"c;bp:a<",
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
k:function(a){return"[0] "+this.aa(0).k(0)+"\n[1] "+this.aa(1).k(0)+"\n[2] "+this.aa(2).k(0)+"\n[3] "+this.aa(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.e(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.Y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
aa:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.e(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.e(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.e(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.e(y,x)
z[3]=y[x]
return new T.ag(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.Y(z)
y.H(this)
x=b.gbp()
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
K:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.Y(z)
y.H(this)
x=b.gbp()
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
a2:function(){var z=this.a
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
e4:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},u:{"^":"c;bx:a<",
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
K:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.u(z)
y.H(this)
x=b.gbx()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.u(z)
y.H(this)
x=b.gbx()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.e(z,b)
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
gm:function(a){return this.a[1]}},m:{"^":"c;by:a<",
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
K:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.H(this)
x=b.gby()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.H(this)
x=b.gby()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.e(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aM:function(a){var z,y,x,w,v,u
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
aJ:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bS:function(a){var z,y,x,w,v,u,t,s
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
aJ:function(a,b,c){var z=new T.m(new Float32Array(3))
z.u(a,b,c)
return z}}},ag:{"^":"c;bz:a<",
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
if(b instanceof T.ag){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bF(this.a)},
K:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ag(z)
y.H(this)
x=b.gbz()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ag(z)
y.H(this)
x=b.gbz()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.e(z,b)
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
gao:function(a){return this.a[3]}}}],["","",,M,{"^":"",
ey:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z={}
y=document
x=new R.hV(0,0,null,null,null,null)
x.cW(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fo(null,w)
u=J.f1(w,"webgl2",P.dc(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.U(P.d3('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.f2(u))
if($.et>0)P.ak("I: "+t)
J.eK(u,0,0,0,1)
J.b8(u,2929)
u=new Float32Array(3)
t=D.h5(null)
s=D.hj(w)
r=new T.Y(new Float32Array(16))
r.a2()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hu(15,0,0,0,new T.m(u),-0.02,t,s,r,new T.m(q),new T.m(p),new T.m(o),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.Y(new Float32Array(16))
u.a2()
t=new T.Y(new Float32Array(16))
t.a2()
m=new R.hw(w,v,n,50,1,0.1,1000,u,t,new T.Y(new Float32Array(16)),P.P(),"perspective",!1,!0)
m.bg()
m.ea(null)
W.ah(window,"resize",m.ge9(),!1,W.a6)
l=G.dp("solid",v,$.$get$er(),$.$get$eq())
u=P.P()
k=new G.dg(u,"cubemap",!1,!0)
u.j(0,"cDepthTest",!0)
u.j(0,"cDepthWrite",!0)
u.j(0,"cBlendEquation",$.$get$cO())
t=$.$get$dt()
u.j(0,"cStencilFunc",t)
s=new T.Y(new Float32Array(16))
s.a2()
u.j(0,"uModelMatrix",s)
j=R.dr(l,1,0,1,0,2,2,2)
i=R.dr(l,1,0,1,0,512,512,512)
h=G.dp("stars",v,$.$get$eB(),$.$get$eA())
s=$.$get$cN()
u=P.P()
u.j(0,"cDepthTest",!0)
u.j(0,"cDepthWrite",!1)
u.j(0,"cBlendEquation",s)
u.j(0,"cStencilFunc",t)
g=y.createElement("canvas")
g.width=64
g.height=64
f=C.E.ct(g,"2d")
e=J.eN(f,32,32,1,32,32,22)
e.addColorStop(0,"gray")
e.addColorStop(1,"black")
f.fillStyle=e
f.fillRect(0,0,64,64)
e=f.createRadialGradient(32,32,1,32,32,6)
e.addColorStop(0,"white")
e.addColorStop(1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill("nonzero")
y=new G.dy(!1,!1,!1,!0,1,9729,9729)
t=J.cu(v.a)
s=new G.fW(g,"Utils::Particles",t,3553,v,y)
J.al(v.a,3553,t)
J.cD(v.a,37440,1)
s.cV(g)
y.bf(v,3553)
J.cB(v.a)
J.al(v.a,3553,null)
u.j(0,"uTexture",s)
u.j(0,"uPointSize",1000)
y=new T.Y(new Float32Array(16))
y.a2()
u.j(0,"uModelMatrix",y)
d=R.ic(h,2000,100)
z.a=0
P.fR(D.ha("skybox_",".png"),null,!1).an(new M.kw(v,k,new M.kv(z,n,l,j,k,m,i,h,d,new G.dg(u,"stars",!1,!0),x)))},
kv:{"^":"f:20;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aP(b2)
y.K(b2,z.a)
z.a=y.n(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b3()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b3()
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
if(typeof v!=="number")return v.b3()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dK(y.id,-1.4707963267948965,1.4707963267948965)
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
m=new T.m(new Float32Array(3))
m.u(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.K(0,t)
l.aM(0)
k=m.bS(l)
k.aM(0)
j=l.bS(k)
j.aM(0)
t=k.aJ(v)
u=j.aJ(v)
v=l.aJ(v)
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
i=y.f.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.k1
g=i[0]
e=i[1]
d=i[2]
a=Math.sqrt(g*g+e*e+d*d)
p=i[0]/a
o=i[1]/a
n=i[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
i=o*a1
a5=p*n*a2+i
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-i
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
i=q[4]
d=q[8]
e=q[1]
g=q[5]
c=q[9]
b=q[2]
r=q[6]
h=q[10]
f=q[3]
t=q[7]
u=q[11]
q[0]=y*a3+i*a6+d*a9
q[1]=e*a3+g*a6+c*a9
q[2]=b*a3+r*a6+h*a9
q[3]=f*a3+t*a6+u*a9
q[4]=y*a4+i*a7+d*b0
q[5]=e*a4+g*a7+c*b0
q[6]=b*a4+r*a7+h*b0
q[7]=f*a4+t*a7+u*b0
q[8]=y*a5+i*a8+d*b1
q[9]=e*a5+g*a8+c*b1
q[10]=b*a5+r*a8+h*b1
q[11]=f*a5+t*a8+u*b1
w.c.a7(0)
w.b.a7(0)
x.e=0
x.d=0
x.f=0
x.c.a7(0)
x.b.a7(0)
x=this.c
w=this.e
u=this.f
x.as(this.d,[w,u])
x.as(this.r,[w,u])
this.x.as(this.y,[this.z,u])
C.a9.gdD(window).an(this)
this.Q.cZ(z.a)}},
kw:{"^":"f:21;a,b,c",
$1:function(a){this.b.d.j(0,"uCubeTexture",G.fy(this.a,"stars",a))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.h2.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.kf=function(a){if(typeof a=="number")return J.aD.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.a1=function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.bE=function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.aP=function(a){if(typeof a=="number")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.kg=function(a){if(typeof a=="number")return J.aD.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.eu=function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.c)return a
return J.b3(a)}
J.av=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kf(a).n(a,b)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).G(a,b)}
J.M=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aP(a).ab(a,b)}
J.aS=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aP(a).a1(a,b)}
J.eE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aP(a).K(a,b)}
J.aT=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kt(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)}
J.eF=function(a,b,c,d){return J.d(a).dl(a,b,c,d)}
J.cq=function(a,b){return J.d(a).bA(a,b)}
J.eG=function(a,b,c,d){return J.d(a).bB(a,b,c,d)}
J.cr=function(a,b,c){return J.d(a).bD(a,b,c)}
J.eH=function(a,b){return J.d(a).dF(a,b)}
J.bK=function(a,b,c){return J.d(a).bE(a,b,c)}
J.al=function(a,b,c){return J.d(a).bG(a,b,c)}
J.b7=function(a,b){return J.d(a).dI(a,b)}
J.eI=function(a,b){return J.d(a).bH(a,b)}
J.eJ=function(a,b,c){return J.d(a).bI(a,b,c)}
J.cs=function(a,b,c,d){return J.d(a).bJ(a,b,c,d)}
J.eK=function(a,b,c,d,e){return J.d(a).bM(a,b,c,d,e)}
J.ct=function(a,b){return J.eu(a).dL(a,b)}
J.eL=function(a,b){return J.kg(a).S(a,b)}
J.bL=function(a,b,c){return J.a1(a).dM(a,b,c)}
J.bM=function(a){return J.d(a).bO(a)}
J.eM=function(a){return J.d(a).bP(a)}
J.eN=function(a,b,c,d,e,f,g){return J.d(a).dO(a,b,c,d,e,f,g)}
J.cu=function(a){return J.d(a).bR(a)}
J.eO=function(a){return J.d(a).dP(a)}
J.eP=function(a,b){return J.d(a).bT(a,b)}
J.bN=function(a,b){return J.d(a).bU(a,b)}
J.eQ=function(a,b,c,d){return J.d(a).bV(a,b,c,d)}
J.eR=function(a,b,c,d,e){return J.d(a).dR(a,b,c,d,e)}
J.eS=function(a,b,c,d,e){return J.d(a).bW(a,b,c,d,e)}
J.eT=function(a,b,c,d,e,f){return J.d(a).dS(a,b,c,d,e,f)}
J.cv=function(a,b){return J.bE(a).q(a,b)}
J.b8=function(a,b){return J.d(a).bX(a,b)}
J.eU=function(a,b){return J.d(a).bY(a,b)}
J.eV=function(a){return J.d(a).dT(a)}
J.cw=function(a,b){return J.bE(a).A(a,b)}
J.cx=function(a){return J.d(a).gdE(a)}
J.aw=function(a){return J.d(a).gM(a)}
J.a3=function(a){return J.o(a).gB(a)}
J.aU=function(a){return J.bE(a).gJ(a)}
J.a4=function(a){return J.a1(a).gi(a)}
J.eW=function(a){return J.d(a).ge6(a)}
J.eX=function(a){return J.d(a).gaR(a)}
J.cy=function(a){return J.d(a).gU(a)}
J.eY=function(a){return J.d(a).gee(a)}
J.eZ=function(a){return J.d(a).gcb(a)}
J.f_=function(a){return J.d(a).gao(a)}
J.cz=function(a){return J.d(a).gel(a)}
J.bO=function(a){return J.d(a).gl(a)}
J.bP=function(a){return J.d(a).gm(a)}
J.cA=function(a){return J.d(a).gF(a)}
J.f0=function(a){return J.d(a).aW(a)}
J.f1=function(a,b,c){return J.d(a).aX(a,b,c)}
J.f2=function(a){return J.d(a).ap(a)}
J.cB=function(a){return J.d(a).aY(a)}
J.f3=function(a,b){return J.d(a).aZ(a,b)}
J.f4=function(a,b,c){return J.d(a).b_(a,b,c)}
J.cC=function(a,b,c){return J.d(a).b2(a,b,c)}
J.f5=function(a,b){return J.d(a).c2(a,b)}
J.cD=function(a,b,c){return J.d(a).c4(a,b,c)}
J.cE=function(a){return J.bE(a).e8(a)}
J.f6=function(a,b){return J.d(a).saj(a,b)}
J.f7=function(a,b,c,d){return J.d(a).b7(a,b,c,d)}
J.cF=function(a,b,c,d,e,f,g){return J.d(a).c7(a,b,c,d,e,f,g)}
J.f8=function(a,b,c,d){return J.d(a).c8(a,b,c,d)}
J.b9=function(a,b,c,d){return J.d(a).c9(a,b,c,d)}
J.cG=function(a){return J.aP(a).ef(a)}
J.f9=function(a){return J.eu(a).eh(a)}
J.ax=function(a){return J.o(a).k(a)}
J.fa=function(a,b,c,d){return J.d(a).ej(a,b,c,d)}
J.fb=function(a,b,c){return J.d(a).cc(a,b,c)}
J.fc=function(a,b,c){return J.d(a).cd(a,b,c)}
J.bQ=function(a,b,c){return J.d(a).ce(a,b,c)}
J.fd=function(a,b,c){return J.d(a).cf(a,b,c)}
J.cH=function(a,b,c){return J.d(a).cg(a,b,c)}
J.cI=function(a,b,c){return J.d(a).ci(a,b,c)}
J.cJ=function(a,b,c){return J.d(a).cj(a,b,c)}
J.cK=function(a,b,c,d){return J.d(a).ck(a,b,c,d)}
J.cL=function(a,b,c,d){return J.d(a).cl(a,b,c,d)}
J.fe=function(a,b){return J.d(a).cn(a,b)}
J.ff=function(a,b,c){return J.d(a).ek(a,b,c)}
J.fg=function(a,b,c,d,e,f,g){return J.d(a).co(a,b,c,d,e,f,g)}
J.fh=function(a,b,c,d,e){return J.d(a).cq(a,b,c,d,e)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bR.prototype
C.E=W.bc.prototype
C.n=W.fu.prototype
C.F=W.fD.prototype
C.G=J.h.prototype
C.c=J.aB.prototype
C.t=J.d7.prototype
C.b=J.d8.prototype
C.H=J.d9.prototype
C.a=J.aD.prototype
C.i=J.aE.prototype
C.O=J.aF.prototype
C.S=H.ho.prototype
C.T=W.hq.prototype
C.x=J.hx.prototype
C.C=W.i6.prototype
C.q=J.b0.prototype
C.a9=W.ie.prototype
C.D=new P.iW()
C.d=new P.jc()
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
C.P=H.z(I.aj(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.Q=I.aj([34070,34069,34072,34071,34074,34073])
C.R=I.aj(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.aj([])
C.o=H.z(I.aj(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.z(I.aj(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.U=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.V=new G.w("vec4","delta from light",0)
C.m=new G.w("","",0)
C.y=new G.w("vec3","vertex coordinates",0)
C.W=new G.w("vec3","vertex binormals",0)
C.z=new G.w("vec4","for wireframe",0)
C.X=new G.w("vec4","per vertex color",0)
C.Y=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a_=new G.w("mat4","",4)
C.Z=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a0=new G.w("float","",4)
C.a1=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a2=new G.w("float","for bump maps",0)
C.a3=new G.w("vec2","texture uvs",0)
C.a4=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.a5=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.a6=new G.w("vec3","vertex normals",0)
C.a7=new G.w("sampler2DShadow","",0)
C.A=new G.w("vec3","per vertex color",0)
C.B=new G.w("mat3","",0)
C.a8=new G.w("vec3","vertex tangents",0)
$.V=0
$.ay=null
$.cP=null
$.ew=null
$.el=null
$.eC=null
$.bD=null
$.bG=null
$.cn=null
$.ap=null
$.aL=null
$.aM=null
$.ci=!1
$.r=C.d
$.a5=null
$.bW=null
$.d1=null
$.d0=null
$.cZ=null
$.cY=null
$.cX=null
$.cW=null
$.et=0
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
I.$lazy(y,x,w)}})(["cU","$get$cU",function(){return H.ev("_$dart_dartClosure")},"c2","$get$c2",function(){return H.ev("_$dart_js")},"dD","$get$dD",function(){return H.Z(H.bz({
toString:function(){return"$receiver$"}}))},"dE","$get$dE",function(){return H.Z(H.bz({$method$:null,
toString:function(){return"$receiver$"}}))},"dF","$get$dF",function(){return H.Z(H.bz(null))},"dG","$get$dG",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.Z(H.bz(void 0))},"dL","$get$dL",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dI","$get$dI",function(){return H.Z(H.dJ(null))},"dH","$get$dH",function(){return H.Z(function(){try{null.$method$}catch(z){return z.message}}())},"dN","$get$dN",function(){return H.Z(H.dJ(void 0))},"dM","$get$dM",function(){return H.Z(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cd","$get$cd",function(){return P.ij()},"bZ","$get$bZ",function(){return P.iF(null,P.aX)},"aN","$get$aN",function(){return[]},"cT","$get$cT",function(){return{}},"e0","$get$e0",function(){return P.c5(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cf","$get$cf",function(){return P.P()},"dt","$get$dt",function(){return new G.dB(1281,0,4294967295)},"cO","$get$cO",function(){return G.dA(1281,1281,1281)},"cN","$get$cN",function(){return G.dA(32774,770,769)},"S","$get$S",function(){return P.dc(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.X,"aPosition",C.y,"aTexUV",C.a3,"aNormal",C.a6,"aBinormal",C.W,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a8,"aBitangent",C.U,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.V,"vCenter",C.z,"vDepth",C.a1,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a7,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a5,"uAnimationTable",C.h,"uTime",C.a4,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Z,"uLightDescs",C.a_,"uLightCount",C.f,"uLightTypes",C.a0,"uBumpScale",C.a2,"uNormalScale",C.Y])},"dS","$get$dS",function(){return C.D},"er","$get$er",function(){var z=G.bo("CubeMap")
z.b9(["aPosition"])
z.ba(["vPosition"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix"])
z.af(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = normalize(aPosition);"])
return z},"eq","$get$eq",function(){var z=G.bo("CubeMapF")
z.ba(["vPosition"])
z.ad(["uCubeTexture"])
z.af(["oFragColor = texture( uCubeTexture, vPosition );"])
return z},"eB","$get$eB",function(){var z=G.bo("PointSpritesV")
z.b9(["aPosition"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.af(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"eA","$get$eA",function(){var z=G.bo("PointSpritesF")
z.ad(["uTexture"])
z.af(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"dX","$get$dX",function(){return[T.aJ(0,0,1),T.aJ(0,0,-1),T.aJ(0,1,0),T.aJ(0,-1,0),T.aJ(1,0,0),T.aJ(-1,0,0)]},"eg","$get$eg",function(){return["nx","px","ny","py","nz","pz"]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.J]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.C]},{func:1,args:[W.bj]},{func:1,ret:P.ck,args:[W.am,P.l,P.l,W.ce]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aI]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aI]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[W.a6]},{func:1,args:[W.aK]},{func:1,args:[P.C,P.c]},{func:1,v:true,args:[P.aQ]},{func:1,args:[P.i]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.kB(d||a)
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
Isolate.aj=a.aj
Isolate.as=a.as
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
if(typeof dartMainRunner==="function")dartMainRunner(M.ey,[])
else M.ey([])})})()
//# sourceMappingURL=cubemap.dart.js.map
