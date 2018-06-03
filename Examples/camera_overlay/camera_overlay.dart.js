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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cw"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cw"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cw(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.au=function(){}
var dart=[["","",,H,{"^":"",m3:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b9:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.kJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cl("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c8()]
if(v!=null)return v
v=H.kN(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c8(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
E:function(a,b){return a===b},
gB:function(a){return H.aM(a)},
k:["cQ",function(a){return"Instance of '"+H.aN(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
he:{"^":"h;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iscv:1},
hf:{"^":"h;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isb0:1},
c9:{"^":"h;",
gB:function(a){return 0},
k:["cS",function(a){return String(a)}]},
hP:{"^":"c9;"},
b5:{"^":"c9;"},
aK:{"^":"c9;",
k:function(a){var z=a[$.$get$d1()]
return z==null?this.cS(a):J.aC(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aG:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.U(P.t("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
A:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.L(a))}},
a4:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b7:function(a,b){return H.dF(a,b,null,H.B(a,0))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
gej:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.c7())},
cK:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.U(P.t("setRange"))
P.hX(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.F()
if(typeof b!=="number")return H.x(b)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isi){x=e
w=d}else{w=y.b7(d,e).ev(0,!1)
x=0}y=J.a2(w)
v=y.gi(w)
if(typeof v!=="number")return H.x(v)
if(x+z>v)throw H.a(H.hb())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
af:function(a,b,c,d){return this.cK(a,b,c,d,0)},
bH:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.L(a))}return!1},
cL:function(a,b){if(!!a.immutable$list)H.U(P.t("sort"))
H.ia(a,J.ki())},
ar:function(a){return this.cL(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.K(a[z],b))return!0
return!1},
k:function(a){return P.c6(a,"[","]")},
gL:function(a){return new J.fy(a,a.length,0,null,[H.B(a,0)])},
gB:function(a){return H.aM(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.U(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cU(b,"newLength",null))
if(b<0)throw H.a(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ad(a,b))
if(b>=a.length||b<0)throw H.a(H.ad(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.U(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ad(a,b))
if(b>=a.length||b<0)throw H.a(H.ad(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.A([],[H.B(a,0)])
this.si(y,z)
this.af(y,0,a.length,a)
this.af(y,a.length,z,b)
return y},
$iso:1,
$aso:I.au,
$isi:1,
p:{
aH:function(a){a.fixed$length=Array
return a},
m1:[function(a,b){return J.eW(a,b)},"$2","ki",8,0,24]}},
m2:{"^":"aG;$ti"},
fy:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aI:{"^":"h;",
S:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a1(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gam(b)
if(this.gam(a)===z)return 0
if(this.gam(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gam:function(a){return a===0?1/a<0:a<0},
eu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.t(""+a+".toInt()"))},
dW:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.t(""+a+".ceil()"))},
dX:function(a,b,c){if(this.S(b,c)>0)throw H.a(H.a1(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
ex:function(a,b){var z
if(b>20)throw H.a(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gam(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.a1(b))
return a+b},
F:function(a,b){if(typeof b!=="number")throw H.a(H.a1(b))
return a-b},
cU:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bA(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.t("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
by:function(a,b){var z
if(a>0)z=this.dI(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dI:function(a,b){return b>31?0:a>>>b},
Y:function(a,b){if(typeof b!=="number")throw H.a(H.a1(b))
return a<b},
ae:function(a,b){if(typeof b!=="number")throw H.a(H.a1(b))
return a>b},
$isaT:1,
$isaV:1},
dj:{"^":"aI;",$isG:1},
di:{"^":"aI;"},
aJ:{"^":"h;",
dY:function(a,b){if(b>=a.length)H.U(H.ad(a,b))
return a.charCodeAt(b)},
bq:function(a,b){if(b>=a.length)throw H.a(H.ad(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cU(b,null,null))
return a+b},
cN:function(a,b,c){var z
if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cM:function(a,b){return this.cN(a,b,0)},
b9:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.U(H.a1(c))
if(b<0)throw H.a(P.bu(b,null,null))
if(typeof c!=="number")return H.x(c)
if(b>c)throw H.a(P.bu(b,null,null))
if(c>a.length)throw H.a(P.bu(c,null,null))
return a.substring(b,c)},
cO:function(a,b){return this.b9(a,b,null)},
ew:function(a){return a.toLowerCase()},
e0:function(a,b,c){if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
return H.kT(a,b,c)},
S:function(a,b){var z
if(typeof b!=="string")throw H.a(H.a1(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.ad(a,b))
return a[b]},
$iso:1,
$aso:I.au,
$isl:1}}],["","",,H,{"^":"",
c7:function(){return new P.by("No element")},
hc:function(){return new P.by("Too many elements")},
hb:function(){return new P.by("Too few elements")},
ia:function(a,b){var z=J.a6(a)
if(typeof z!=="number")return z.F()
H.b2(a,0,z-1,b)},
b2:function(a,b,c,d){if(c-b<=32)H.i9(a,b,c,d)
else H.i8(a,b,c,d)},
i9:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a2(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.P(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
i8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a2(c-b+1,6)
y=b+z
x=c-z
w=C.b.a2(b+c,2)
v=w-z
u=w+z
t=J.a2(a)
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
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.K(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.E(i,0))continue
if(h.Y(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aU(i)
if(h.ae(i,0)){--l
continue}else{g=l-1
if(h.Y(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aX(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b2(a,b,m-2,d)
H.b2(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.K(d.$2(t.h(a,m),r),0);)++m
for(;J.K(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.K(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b2(a,m,l,d)}else H.b2(a,m,l,d)},
c_:{"^":"bo;$ti"},
bq:{"^":"c_;$ti",
gL:function(a){return new H.dn(this,this.gi(this),0,null,[H.ba(this,"bq",0)])},
A:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.x(z)
y=0
for(;y<z;++y){b.$1(this.u(0,y))
if(z!==this.gi(this))throw H.a(P.L(this))}},
aW:function(a,b){return this.cR(0,b)}},
iq:{"^":"bq;a,b,c,$ti",
d9:function(a,b,c,d){},
gdt:function(){var z=J.a6(this.a)
return z},
gdJ:function(){var z,y
z=J.a6(this.a)
y=this.b
if(typeof z!=="number")return H.x(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a6(this.a)
y=this.b
if(typeof z!=="number")return H.x(z)
if(y>=z)return 0
return z-y},
u:function(a,b){var z,y
z=this.gdJ()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.x(b)
y=z+b
if(!(b<0)){z=this.gdt()
if(typeof z!=="number")return H.x(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cF(this.a,y)},
ev:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a2(y)
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
if(typeof u!=="number")return u.Y()
if(u<w)throw H.a(P.L(this))}return t},
p:{
dF:function(a,b,c,d){var z=new H.iq(a,b,c,[d])
z.d9(a,b,c,d)
return z}}},
dn:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a2(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.L(z))
w=this.c
if(typeof x!=="number")return H.x(x)
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
hs:{"^":"bq;a,b,$ti",
gi:function(a){return J.a6(this.a)},
u:function(a,b){return this.b.$1(J.cF(this.a,b))},
$asc_:function(a,b){return[b]},
$asbq:function(a,b){return[b]},
$asbo:function(a,b){return[b]}},
e_:{"^":"bo;a,b,$ti",
gL:function(a){return new H.iy(J.aY(this.a),this.b,this.$ti)}},
iy:{"^":"hd;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gC(z))===!0)return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bl:{"^":"c;$ti"}}],["","",,H,{"^":"",
kB:function(a){return init.types[a]},
kM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aC(a)
if(typeof z!=="string")throw H.a(H.a1(a))
return z},
aM:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.n(a).$isb5){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bq(w,0)===36)w=C.i.cO(w,1)
r=H.bK(H.av(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hW:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
hU:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
hQ:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
hR:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
hT:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
hV:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
hS:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
x:function(a){throw H.a(H.a1(a))},
d:function(a,b){if(a==null)J.a6(a)
throw H.a(H.ad(a,b))},
ad:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
z=J.a6(a)
if(!(b<0)){if(typeof z!=="number")return H.x(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bu(b,"index",null)},
a1:function(a){return new P.a7(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bt()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eM})
z.name=""}else z.toString=H.eM
return z},
eM:function(){return J.aC(this.dartException)},
U:function(a){throw H.a(a)},
D:function(a){throw H.a(P.L(a))},
I:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.by(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ca(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dw(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dN()
u=$.$get$dO()
t=$.$get$dP()
s=$.$get$dQ()
r=$.$get$dU()
q=$.$get$dV()
p=$.$get$dS()
$.$get$dR()
o=$.$get$dX()
n=$.$get$dW()
m=v.P(y)
if(m!=null)return z.$1(H.ca(y,m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.ca(y,m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dw(y,m))}}return z.$1(new H.iw(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a7(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dC()
return a},
a3:function(a){var z
if(a==null)return new H.eh(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eh(a,null)},
kx:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kL:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.db("Unsupported number of arguments for wrapped closure"))},
X:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kL)
a.$identity=z
return z},
fH:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isi){z.$reflectionInfo=c
x=H.hZ(z).r}else x=c
w=d?Object.create(new H.ib().constructor.prototype):Object.create(new H.bW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Y
$.Y=J.ay(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cZ(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kB,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cX:H.bX
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cZ(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fE:function(a,b,c,d){var z=H.bX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fG(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fE(y,!w,z,b)
if(y===0){w=$.Y
$.Y=J.ay(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aD
if(v==null){v=H.bi("self")
$.aD=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Y
$.Y=J.ay(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aD
if(v==null){v=H.bi("self")
$.aD=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fF:function(a,b,c,d){var z,y
z=H.bX
y=H.cX
switch(b?-1:a){case 0:throw H.a(H.i4("Intercepted function with no arguments."))
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
z=$.aD
if(z==null){z=H.bi("self")
$.aD=z}y=$.cW
if(y==null){y=H.bi("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fF(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Y
$.Y=J.ay(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Y
$.Y=J.ay(y,1)
return new Function(z+H.b(y)+"}")()},
cw:function(a,b,c,d,e,f){var z,y
z=J.aH(b)
y=!!J.n(c).$isi?J.aH(c):c
return H.fH(a,z,y,!!d,e,f)},
kR:function(a,b){var z=J.a2(b)
throw H.a(H.cY(a,z.b9(b,3,z.gi(b))))},
ae:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.kR(a,b)},
cx:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eB:function(a,b){var z,y
if(a==null)return!1
z=H.cx(J.n(a))
if(z==null)y=!1
else y=H.eG(z,b)
return y},
kp:function(a){var z
if(a instanceof H.f){z=H.cx(J.n(a))
if(z!=null)return H.cA(z,null)
return"Closure"}return H.aN(a)},
kU:function(a){throw H.a(new P.fM(a))},
eE:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
av:function(a){if(a==null)return
return a.$ti},
nn:function(a,b,c){return H.aW(a["$as"+H.b(c)],H.av(b))},
bb:function(a,b,c,d){var z=H.aW(a["$as"+H.b(c)],H.av(b))
return z==null?null:z[d]},
ba:function(a,b,c){var z=H.aW(a["$as"+H.b(b)],H.av(a))
return z==null?null:z[c]},
B:function(a,b){var z=H.av(a)
return z==null?null:z[b]},
cA:function(a,b){var z=H.ax(a,b)
return z},
ax:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bK(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ax(z,b)
return H.kh(a,b)}return"unknown-reified-type"},
kh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ax(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ax(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kw(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ax(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bK:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.ci("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return w?"":"<"+z.k(0)+">"},
kA:function(a){var z,y,x
if(a instanceof H.f){z=H.cx(J.n(a))
if(z!=null)return H.cA(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bK(a.$ti,0,null)
return y+x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b7:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.av(a)
y=J.n(a)
if(y[b]==null)return!1
return H.eu(H.aW(y[d],z),c)},
bd:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b7(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bK(c,0,null)
throw H.a(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eu:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.O(a[y],b[y]))return!1
return!0},
nl:function(a,b,c){return a.apply(b,H.aW(J.n(b)["$as"+H.b(c)],H.av(b)))},
O:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b0")return!0
if('func' in b)return H.eG(a,b)
if('func' in a)return b.builtin$cls==="lV"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cA(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eu(H.aW(u,z),x)},
et:function(a,b,c){var z,y,x,w,v
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
kq:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aH(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.O(v,u)||H.O(u,v)))return!1}return!0},
eG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(t===s){if(!H.et(x,w,!1))return!1
if(!H.et(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}}return H.kq(a.named,b.named)},
nm:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kN:function(a){var z,y,x,w,v,u
z=$.eF.$1(a)
y=$.bI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.es.$2(a,z)
if(z!=null){y=$.bI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bL(x)
$.bI[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bJ[z]=x
return x}if(v==="-"){u=H.bL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eI(a,x)
if(v==="*")throw H.a(P.cl(z))
if(init.leafTags[z]===true){u=H.bL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eI(a,x)},
eI:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bL:function(a){return J.cz(a,!1,null,!!a.$isp)},
kQ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bL(z)
else return J.cz(z,c,null,null)},
kJ:function(){if(!0===$.cy)return
$.cy=!0
H.kK()},
kK:function(){var z,y,x,w,v,u,t,s
$.bI=Object.create(null)
$.bJ=Object.create(null)
H.kF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eJ.$1(v)
if(u!=null){t=H.kQ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kF:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.at(C.F,H.at(C.K,H.at(C.u,H.at(C.u,H.at(C.J,H.at(C.G,H.at(C.H(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eF=new H.kG(v)
$.es=new H.kH(u)
$.eJ=new H.kI(t)},
at:function(a,b){return a(b)||b},
kT:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hY:{"^":"c;a,b,c,d,e,f,r,x",p:{
hZ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aH(z)
y=z[0]
x=z[1]
return new H.hY(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iu:{"^":"c;a,b,c,d,e,f",
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
return new H.iu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hM:{"^":"H;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dw:function(a,b){return new H.hM(a,b==null?null:b.method)}}},
hg:{"^":"H;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
ca:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hg(a,y,z?null:b.receiver)}}},
iw:{"^":"H;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kV:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isaO:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aN(this).trim()+"'"},
gcE:function(){return this},
gcE:function(){return this}},
dG:{"^":"f;"},
ib:{"^":"dG;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bW:{"^":"dG;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aM(this.a)
else y=typeof z!=="object"?J.a5(z):H.aM(z)
return(y^H.aM(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aN(z)+"'")},
p:{
bX:function(a){return a.a},
cX:function(a){return a.c},
bi:function(a){var z,y,x,w,v
z=new H.bW("self","target","receiver","name")
y=J.aH(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fC:{"^":"H;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fC("CastError: "+H.b(P.c1(a))+": type '"+H.kp(a)+"' is not a subtype of type '"+b+"'")}}},
i3:{"^":"H;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
i4:function(a){return new H.i3(a)}}},
dY:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.a5(this.a)},
E:function(a,b){if(b==null)return!1
return b instanceof H.dY&&J.K(this.a,b.a)}},
dk:{"^":"cd;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gM:function(a){return new H.hm(this,[H.B(this,0)])},
ak:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bs(y,b)}else return this.eh(b)},
eh:function(a){var z=this.d
if(z==null)return!1
return this.aK(this.aA(z,J.a5(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aj(z,b)
x=y==null?null:y.gac()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aj(w,b)
x=y==null?null:y.gac()
return x}else return this.ei(b)},
ei:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aA(z,J.a5(a)&0x3ffffff)
x=this.aK(y,a)
if(x<0)return
return y[x].gac()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.bk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.bk(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.a5(b)&0x3ffffff
v=this.aA(x,w)
if(v==null)this.aH(x,w,[this.au(b,c)])
else{u=this.aK(v,b)
if(u>=0)v[u].sac(c)
else v.push(this.au(b,c))}}},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.L(this))
z=z.c}},
bk:function(a,b,c){var z=this.aj(a,b)
if(z==null)this.aH(a,b,this.au(b,c))
else z.sac(c)},
bl:function(){this.r=this.r+1&67108863},
au:function(a,b){var z,y
z=new H.hl(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bl()
return z},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].geg(),b))return y
return-1},
k:function(a){return P.dp(this)},
aj:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aH:function(a,b,c){a[b]=c},
dr:function(a,b){delete a[b]},
bs:function(a,b){return this.aj(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aH(z,"<non-identifier-key>",z)
this.dr(z,"<non-identifier-key>")
return z}},
hl:{"^":"c;eg:a<,ac:b@,c,d"},
hm:{"^":"c_;a,$ti",
gi:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.af(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
A:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.L(z))
y=y.c}}},
af:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.L(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kG:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
kH:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
kI:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kw:function(a){return J.aH(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){var z,y,x
if(!!J.n(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.ad(b,a))},
dr:{"^":"h;",$isdr:1,"%":"ArrayBuffer"},
cf:{"^":"h;",$iscf:1,"%":"DataView;ArrayBufferView;ce|eb|ec|ds|ed|ee|ag"},
ce:{"^":"cf;",
gi:function(a){return a.length},
$iso:1,
$aso:I.au,
$isp:1,
$asp:I.au},
ds:{"^":"ec;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a0(b,a,a.length)
a[b]=c},
$asbl:function(){return[P.aT]},
$ask:function(){return[P.aT]},
$isi:1,
$asi:function(){return[P.aT]},
"%":"Float64Array"},
ag:{"^":"ee;",
j:function(a,b,c){H.a0(b,a,a.length)
a[b]=c},
$asbl:function(){return[P.G]},
$ask:function(){return[P.G]},
$isi:1,
$asi:function(){return[P.G]}},
hE:{"^":"ds;",$isc2:1,"%":"Float32Array"},
mi:{"^":"ag;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mj:{"^":"ag;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$ish9:1,
"%":"Int32Array"},
mk:{"^":"ag;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ml:{"^":"ag;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mm:{"^":"ag;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mn:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mo:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eb:{"^":"ce+k;"},
ec:{"^":"eb+bl;"},
ed:{"^":"ce+k;"},
ee:{"^":"ed+bl;"}}],["","",,P,{"^":"",
iC:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kr()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.X(new P.iE(z),1)).observe(y,{childList:true})
return new P.iD(z,y,x)}else if(self.setImmediate!=null)return P.ks()
return P.kt()},
n8:[function(a){self.scheduleImmediate(H.X(new P.iF(a),0))},"$1","kr",4,0,6],
n9:[function(a){self.setImmediate(H.X(new P.iG(a),0))},"$1","ks",4,0,6],
na:[function(a){P.jT(0,a)},"$1","kt",4,0,6],
en:function(a,b){if(H.eB(a,{func:1,args:[P.b0,P.b0]})){b.toString
return a}else{b.toString
return a}},
h2:function(a,b,c){var z
if(a==null)a=new P.bt()
z=$.r
if(z!==C.d)z.toString
z=new P.F(0,z,null,[c])
z.bo(a,b)
return z},
h3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.F(0,$.r,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.h5(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aU(new P.h4(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.F(0,$.r,null,[null])
r.bn(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.I(p)
t=H.a3(p)
if(z.b===0||!1)return P.h2(u,t,null)
else{z.c=u
z.d=t}}return y},
kg:function(a,b,c){$.r.toString
a.K(b,c)},
kk:function(){var z,y
for(;z=$.ar,z!=null;){$.aR=null
y=z.b
$.ar=y
if(y==null)$.aQ=null
z.a.$0()}},
nk:[function(){$.ct=!0
try{P.kk()}finally{$.aR=null
$.ct=!1
if($.ar!=null)$.$get$cn().$1(P.ev())}},"$0","ev",0,0,3],
eq:function(a){var z=new P.e0(a,null)
if($.ar==null){$.aQ=z
$.ar=z
if(!$.ct)$.$get$cn().$1(P.ev())}else{$.aQ.b=z
$.aQ=z}},
ko:function(a){var z,y,x
z=$.ar
if(z==null){P.eq(a)
$.aR=$.aQ
return}y=new P.e0(a,null)
x=$.aR
if(x==null){y.b=z
$.aR=y
$.ar=y}else{y.b=x.b
x.b=y
$.aR=y
if(y.b==null)$.aQ=y}},
kS:function(a){var z=$.r
if(C.d===z){P.as(null,null,C.d,a)
return}z.toString
P.as(null,null,z,z.bK(a))},
kn:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.I(u)
y=H.a3(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aB(x)
w=t
v=x.ga_()
c.$2(w,v)}}},
ka:function(a,b,c,d){var z=a.bR(0)
if(!!J.n(z).$isaa&&z!==$.$get$c3())z.cD(new P.kd(b,c,d))
else b.K(c,d)},
kb:function(a,b){return new P.kc(a,b)},
ke:function(a,b,c){var z=a.bR(0)
if(!!J.n(z).$isaa&&z!==$.$get$c3())z.cD(new P.kf(b,c))
else b.a0(c)},
bH:function(a,b,c,d,e){var z={}
z.a=d
P.ko(new P.kl(z,e))},
eo:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
ep:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
km:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
as:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bK(d):c.dT(d)
P.eq(d)},
iE:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iD:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iF:{"^":"f:1;a",
$0:function(){this.a.$0()}},
iG:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jS:{"^":"c;a,b,c",
dk:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.X(new P.jU(this,b),0),a)
else throw H.a(P.t("`setTimeout()` not found."))},
p:{
jT:function(a,b){var z=new P.jS(!0,null,0)
z.dk(a,b)
return z}}},
jU:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
aa:{"^":"c;$ti"},
h5:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.K(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.K(z.c,z.d)}},
h4:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.br(x)}else if(z.b===0&&!this.e)this.c.K(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
l7:{"^":"c;$ti"},
e3:{"^":"c;$ti",
e_:function(a,b){if(a==null)a=new P.bt()
if(this.a.a!==0)throw H.a(P.b4("Future already completed"))
$.r.toString
this.K(a,b)},
dZ:function(a){return this.e_(a,null)}},
e1:{"^":"e3;a,$ti",
ab:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b4("Future already completed"))
z.bn(b)},
K:function(a,b){this.a.bo(a,b)}},
jN:{"^":"e3;a,$ti",
ab:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b4("Future already completed"))
z.a0(b)},
K:function(a,b){this.a.K(a,b)}},
co:{"^":"c;aF:a<,b,c,d,e,$ti",
gdO:function(){return this.b.b},
gc8:function(){return(this.c&1)!==0},
gef:function(){return(this.c&2)!==0},
gc7:function(){return this.c===8},
ed:function(a){return this.b.b.aS(this.d,a)},
ek:function(a){if(this.c!==6)return!0
return this.b.b.aS(this.d,J.aB(a))},
ec:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eB(z,{func:1,args:[P.c,P.aO]}))return x.ep(z,y.gN(a),a.ga_())
else return x.aS(z,y.gN(a))},
ee:function(){return this.b.b.cg(this.d)}},
F:{"^":"c;bz:a<,b,dE:c<,$ti",
gdz:function(){return this.a===2},
gaB:function(){return this.a>=4},
aU:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.en(b,z)}y=new P.F(0,z,null,[null])
x=b==null?1:3
this.ai(new P.co(null,y,x,a,b,[H.B(this,0),null]))
return y},
ad:function(a){return this.aU(a,null)},
cD:function(a){var z,y
z=$.r
y=new P.F(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.B(this,0)
this.ai(new P.co(null,y,8,a,null,[z,z]))
return y},
ai:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaB()){y.ai(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.as(null,null,z,new P.iY(this,a))}},
bw:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaF()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaB()){v.bw(a)
return}this.a=v.a
this.c=v.c}z.a=this.aG(a)
y=this.b
y.toString
P.as(null,null,y,new P.j4(z,this))}},
a7:function(){var z=this.c
this.c=null
return this.aG(z)},
aG:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaF()
z.a=y}return y},
a0:function(a){var z,y,x
z=this.$ti
y=H.b7(a,"$isaa",z,"$asaa")
if(y){z=H.b7(a,"$isF",z,null)
if(z)P.bF(a,this)
else P.e5(a,this)}else{x=this.a7()
this.a=4
this.c=a
P.aq(this,x)}},
br:function(a){var z=this.a7()
this.a=4
this.c=a
P.aq(this,z)},
K:[function(a,b){var z=this.a7()
this.a=8
this.c=new P.bh(a,b)
P.aq(this,z)},function(a){return this.K(a,null)},"eC","$2","$1","gav",4,2,13],
bn:function(a){var z=H.b7(a,"$isaa",this.$ti,"$asaa")
if(z){this.dn(a)
return}this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.j_(this,a))},
dn:function(a){var z=H.b7(a,"$isF",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.j3(this,a))}else P.bF(a,this)
return}P.e5(a,this)},
bo:function(a,b){var z
this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.iZ(this,a,b))},
$isaa:1,
p:{
iX:function(a,b){var z=new P.F(0,$.r,null,[b])
z.a=4
z.c=a
return z},
e5:function(a,b){var z,y,x
b.a=1
try{a.aU(new P.j0(b),new P.j1(b))}catch(x){z=H.I(x)
y=H.a3(x)
P.kS(new P.j2(b,z,y))}},
bF:function(a,b){var z
for(;a.gdz();)a=a.c
if(a.gaB()){z=b.a7()
b.a=a.a
b.c=a.c
P.aq(b,z)}else{z=b.c
b.a=2
b.c=a
a.bw(z)}},
aq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aB(v)
t=v.ga_()
y.toString
P.bH(null,null,y,u,t)}return}for(;b.gaF()!=null;b=s){s=b.a
b.a=null
P.aq(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc8()||b.gc7()){q=b.gdO()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aB(v)
t=v.ga_()
y.toString
P.bH(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gc7())new P.j7(z,x,b,w).$0()
else if(y){if(b.gc8())new P.j6(x,b,r).$0()}else if(b.gef())new P.j5(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.n(y).$isaa){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aG(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bF(y,o)
return}}o=b.b
b=o.a7()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iY:{"^":"f:1;a,b",
$0:function(){P.aq(this.a,this.b)}},
j4:{"^":"f:1;a,b",
$0:function(){P.aq(this.b,this.a.a)}},
j0:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.a0(a)}},
j1:{"^":"f:14;a",
$2:function(a,b){this.a.K(a,b)},
$1:function(a){return this.$2(a,null)}},
j2:{"^":"f:1;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
j_:{"^":"f:1;a,b",
$0:function(){this.a.br(this.b)}},
j3:{"^":"f:1;a,b",
$0:function(){P.bF(this.b,this.a)}},
iZ:{"^":"f:1;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
j7:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ee()}catch(w){y=H.I(w)
x=H.a3(w)
if(this.d){v=J.aB(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bh(y,x)
u.a=!0
return}if(!!J.n(z).$isaa){if(z instanceof P.F&&z.gbz()>=4){if(z.gbz()===8){v=this.b
v.b=z.gdE()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ad(new P.j8(t))
v.a=!1}}},
j8:{"^":"f:0;a",
$1:function(a){return this.a}},
j6:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ed(this.c)}catch(x){z=H.I(x)
y=H.a3(x)
w=this.a
w.b=new P.bh(z,y)
w.a=!0}}},
j5:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ek(z)===!0&&w.e!=null){v=this.b
v.b=w.ec(z)
v.a=!1}}catch(u){y=H.I(u)
x=H.a3(u)
w=this.a
v=J.aB(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bh(y,x)
s.a=!0}}},
e0:{"^":"c;a,b"},
bz:{"^":"c;$ti",
A:function(a,b){var z,y
z={}
y=new P.F(0,$.r,null,[null])
z.a=null
z.a=this.aL(new P.il(z,this,b,y),!0,new P.im(y),y.gav())
return y},
gi:function(a){var z,y
z={}
y=new P.F(0,$.r,null,[P.G])
z.a=0
this.aL(new P.io(z),!0,new P.ip(z,y),y.gav())
return y},
ge9:function(a){var z,y
z={}
y=new P.F(0,$.r,null,[H.ba(this,"bz",0)])
z.a=null
z.a=this.aL(new P.ih(z,this,y),!0,new P.ii(y),y.gav())
return y}},
il:{"^":"f;a,b,c,d",
$1:function(a){P.kn(new P.ij(this.c,a),new P.ik(),P.kb(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ba(this.b,"bz",0)]}}},
ij:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
ik:{"^":"f:0;",
$1:function(a){}},
im:{"^":"f:1;a",
$0:function(){this.a.a0(null)}},
io:{"^":"f:0;a",
$1:function(a){++this.a.a}},
ip:{"^":"f:1;a,b",
$0:function(){this.b.a0(this.a.a)}},
ih:{"^":"f;a,b,c",
$1:function(a){P.ke(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.ba(this.b,"bz",0)]}}},
ii:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.c7()
throw H.a(x)}catch(w){z=H.I(w)
y=H.a3(w)
P.kg(this.a,z,y)}}},
ig:{"^":"c;$ti"},
kd:{"^":"f:1;a,b,c",
$0:function(){return this.a.K(this.b,this.c)}},
kc:{"^":"f:15;a,b",
$2:function(a,b){P.ka(this.a,this.b,a,b)}},
kf:{"^":"f:1;a,b",
$0:function(){return this.a.a0(this.b)}},
bh:{"^":"c;N:a>,a_:b<",
k:function(a){return H.b(this.a)},
$isH:1},
k_:{"^":"c;"},
kl:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bt()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aC(y)
throw x}},
jt:{"^":"k_;",
eq:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.eo(null,null,this,a)}catch(x){z=H.I(x)
y=H.a3(x)
P.bH(null,null,this,z,y)}},
er:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.ep(null,null,this,a,b)}catch(x){z=H.I(x)
y=H.a3(x)
P.bH(null,null,this,z,y)}},
dT:function(a){return new P.jv(this,a)},
bK:function(a){return new P.ju(this,a)},
dU:function(a){return new P.jw(this,a)},
h:function(a,b){return},
cg:function(a){if($.r===C.d)return a.$0()
return P.eo(null,null,this,a)},
aS:function(a,b){if($.r===C.d)return a.$1(b)
return P.ep(null,null,this,a,b)},
ep:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.km(null,null,this,a,b,c)}},
jv:{"^":"f:1;a,b",
$0:function(){return this.a.cg(this.b)}},
ju:{"^":"f:1;a,b",
$0:function(){return this.a.eq(this.b)}},
jw:{"^":"f:0;a,b",
$1:function(a){return this.a.er(this.b,a)}}}],["","",,P,{"^":"",
Q:function(){return new H.dk(0,null,null,null,null,null,0,[null,null])},
cb:function(a){return H.kx(a,new H.dk(0,null,null,null,null,null,0,[null,null]))},
V:function(a,b,c,d){return new P.jg(0,null,null,null,null,null,0,[d])},
ha:function(a,b,c){var z,y
if(P.cu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aS()
y.push(a)
try{P.kj(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dE(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c6:function(a,b,c){var z,y,x
if(P.cu(a))return b+"..."+c
z=new P.ci(b)
y=$.$get$aS()
y.push(a)
try{x=z
x.a=P.dE(x.ga1(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga1()+c
y=z.ga1()
return y.charCodeAt(0)==0?y:y},
cu:function(a){var z,y
for(z=0;y=$.$get$aS(),z<y.length;++z)if(a===y[z])return!0
return!1},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
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
cc:function(a,b){var z,y
z=P.V(null,null,null,b)
for(y=J.aY(a);y.t();)z.R(0,y.gC(y))
return z},
dp:function(a){var z,y,x
z={}
if(P.cu(a))return"{...}"
y=new P.ci("")
try{$.$get$aS().push(a)
x=y
x.a=x.ga1()+"{"
z.a=!0
J.cG(a,new P.hr(z,y))
z=y
z.a=z.ga1()+"}"}finally{z=$.$get$aS()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga1()
return z.charCodeAt(0)==0?z:z},
jg:{"^":"ja;a,b,c,d,e,f,r,$ti",
gL:function(a){var z=new P.cr(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dq(b)},
dq:function(a){var z=this.d
if(z==null)return!1
return this.az(z[this.aw(a)],a)>=0},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.L(this))
z=z.b}},
R:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.bm(y,b)}else return this.dl(0,b)},
dl:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.aw(b)
x=z[y]
if(x==null)z[y]=[this.aE(b)]
else{if(this.az(x,b)>=0)return!1
x.push(this.aE(b))}return!0},
cf:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.dB(0,b)},
dB:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aw(b)]
x=this.az(y,b)
if(x<0)return!1
this.bB(y.splice(x,1)[0])
return!0},
a9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
bm:function(a,b){if(a[b]!=null)return!1
a[b]=this.aE(b)
return!0},
bx:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bB(z)
delete a[b]
return!0},
aC:function(){this.r=this.r+1&67108863},
aE:function(a){var z,y
z=new P.jh(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aC()
return z},
bB:function(a){var z,y
z=a.gdA()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aC()},
aw:function(a){return J.a5(a)&0x3ffffff},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gds(),b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jh:{"^":"c;ds:a<,b,dA:c<"},
cr:{"^":"c;a,b,c,d,$ti",
gC:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.L(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
ja:{"^":"i5;$ti"},
m6:{"^":"c;$ti"},
dm:{"^":"ea;$ti",$isi:1},
k:{"^":"c;$ti",
gL:function(a){return new H.dn(a,this.gi(a),0,null,[H.bb(this,a,"k",0)])},
u:function(a,b){return this.h(a,b)},
A:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.x(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.L(a))}},
eb:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.x(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.L(a))}return y},
b7:function(a,b){return H.dF(a,b,null,H.bb(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.bb(this,a,"k",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.af(z,0,this.gi(a),a)
C.c.af(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.c6(a,"[","]")}},
cd:{"^":"R;$ti"},
hr:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
R:{"^":"c;$ti",
A:function(a,b){var z,y
for(z=J.aY(this.gM(a));z.t();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a6(this.gM(a))},
k:function(a){return P.dp(a)},
$isE:1},
i6:{"^":"c;$ti",
O:function(a,b){var z
for(z=J.aY(b);z.t();)this.R(0,z.gC(z))},
k:function(a){return P.c6(this,"{","}")},
A:function(a,b){var z
for(z=new P.cr(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
i5:{"^":"i6;$ti"},
ea:{"^":"c+k;$ti"}}],["","",,P,{"^":"",
fY:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aN(a)+"'"},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fY(a)},
db:function(a){return new P.iU(a)},
a4:function(a){H.bM(H.b(a))},
cv:{"^":"c;"},
"+bool":0,
bk:{"^":"c;dN:a<,b",
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.bk))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.gdN())},
gB:function(a){var z=this.a
return(z^C.b.by(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fN(H.hW(this))
y=P.aZ(H.hU(this))
x=P.aZ(H.hQ(this))
w=P.aZ(H.hR(this))
v=P.aZ(H.hT(this))
u=P.aZ(H.hV(this))
t=P.fO(H.hS(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fN:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aZ:function(a){if(a>=10)return""+a
return"0"+a}}},
aT:{"^":"aV;"},
"+double":0,
b_:{"^":"c;a6:a<",
l:function(a,b){return new P.b_(C.b.l(this.a,b.ga6()))},
F:function(a,b){return new P.b_(this.a-b.ga6())},
Y:function(a,b){return C.b.Y(this.a,b.ga6())},
ae:function(a,b){return C.b.ae(this.a,b.ga6())},
E:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.ga6())},
k:function(a){var z,y,x,w,v
z=new P.fV()
y=this.a
if(y<0)return"-"+new P.b_(0-y).k(0)
x=z.$1(C.b.a2(y,6e7)%60)
w=z.$1(C.b.a2(y,1e6)%60)
v=new P.fU().$1(y%1e6)
return""+C.b.a2(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
d7:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fU:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fV:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
H:{"^":"c;",
ga_:function(){return H.a3(this.$thrownJsError)}},
bt:{"^":"H;",
k:function(a){return"Throw of null."}},
a7:{"^":"H;a,b,c,d",
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
u=P.c1(this.b)
return w+v+": "+H.b(u)},
p:{
cT:function(a){return new P.a7(!1,null,null,a)},
cU:function(a,b,c){return new P.a7(!0,a,b,c)},
fx:function(a){return new P.a7(!1,null,a,"Must not be null")}}},
dy:{"^":"a7;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bu:function(a,b,c){return new P.dy(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.dy(b,c,!0,a,d,"Invalid value")},
hX:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.x(a)
if(0<=a){if(typeof c!=="number")return H.x(c)
z=a>c}else z=!0
if(z)throw H.a(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.x(c)
z=b>c}else z=!0
if(z)throw H.a(P.ao(b,a,c,"end",f))
return b}return c}}},
h8:{"^":"a7;e,i:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){if(J.aX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a6(b)
return new P.h8(b,z,!0,a,c,"Index out of range")}}},
ix:{"^":"H;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
t:function(a){return new P.ix(a)}}},
iv:{"^":"H;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
cl:function(a){return new P.iv(a)}}},
by:{"^":"H;a",
k:function(a){return"Bad state: "+this.a},
p:{
b4:function(a){return new P.by(a)}}},
fI:{"^":"H;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.c1(z))+"."},
p:{
L:function(a){return new P.fI(a)}}},
dC:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga_:function(){return},
$isH:1},
fM:{"^":"H;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
lu:{"^":"c;"},
iU:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
G:{"^":"aV;"},
"+int":0,
bo:{"^":"c;$ti",
aW:["cR",function(a,b){return new H.e_(this,b,[H.ba(this,"bo",0)])}],
A:function(a,b){var z
for(z=this.gL(this);z.t();)b.$1(z.gC(z))},
gi:function(a){var z,y
z=this.gL(this)
for(y=0;z.t();)++y
return y},
gZ:function(a){var z,y
z=this.gL(this)
if(!z.t())throw H.a(H.c7())
y=z.gC(z)
if(z.t())throw H.a(H.hc())
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fx("index"))
if(b<0)H.U(P.ao(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.t();){x=z.gC(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.ha(this,"(",")")}},
hd:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
E:{"^":"c;$ti"},
b0:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aV:{"^":"c;"},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gB:function(a){return H.aM(this)},
k:function(a){return"Instance of '"+H.aN(this)+"'"},
toString:function(){return this.k(this)}},
aO:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
ci:{"^":"c;a1:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dE:function(a,b,c){var z=J.aY(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.t())}else{a+=H.b(z.gC(z))
for(;z.t();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
fW:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).T(z,a,b,c)
y.toString
z=new H.e_(new W.S(y),new W.fX(),[W.u])
return z.gZ(z)},
da:function(a){return"wheel"},
aE:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f9(a)
if(typeof y==="string")z=a.tagName}catch(x){H.I(x)}return z},
iR:function(a,b){return document.createElement(a)},
ak:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
em:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iL(a)
if(!!J.n(z).$isC)return z
return}else return a},
er:function(a){var z=$.r
if(z===C.d)return a
return z.dU(a)},
v:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kW:{"^":"ch;m:x=,n:y=,I:z=","%":"Accelerometer|LinearAccelerationSensor"},
kX:{"^":"h;i:length=","%":"AccessibleNodeList"},
kY:{"^":"v;al:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kZ:{"^":"v;al:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
l3:{"^":"v;al:href}","%":"HTMLBaseElement"},
bU:{"^":"h;",$isbU:1,"%":";Blob"},
bV:{"^":"v;",$isbV:1,"%":"HTMLBodyElement"},
l4:{"^":"v;J:name=","%":"HTMLButtonElement"},
bY:{"^":"v;G:height},H:width}",
cF:function(a,b,c){var z=a.getContext(b,P.ku(c,null))
return z},
$isbY:1,
"%":"HTMLCanvasElement"},
l5:{"^":"h;",
aq:function(a){return P.T(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
l6:{"^":"u;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l8:{"^":"Z;W:style=","%":"CSSFontFaceRule"},
l9:{"^":"Z;W:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
la:{"^":"Z;W:style=","%":"CSSPageRule"},
lb:{"^":"bj;i:length=","%":"CSSPerspective"},
lc:{"^":"bZ;m:x=,n:y=","%":"CSSPositionValue"},
ld:{"^":"bj;m:x=,n:y=,I:z=","%":"CSSRotation"},
Z:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
le:{"^":"bj;m:x=,n:y=,I:z=","%":"CSSScale"},
fJ:{"^":"iJ;i:length=",
bp:function(a,b){var z,y
z=$.$get$d0()
y=z[b]
if(typeof y==="string")return y
y=this.dK(a,b)
z[b]=y
return y},
dK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fP()+b
if(z in a)return z
return b},
dH:function(a,b,c,d){a.setProperty(b,c,d)},
sG:function(a,b){a.height=b},
sH:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fK:{"^":"c;",
sea:function(a,b){this.dH(a,this.bp(a,"float"),b,"")}},
lf:{"^":"Z;W:style=","%":"CSSStyleRule"},
bZ:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bj:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lg:{"^":"bZ;i:length=","%":"CSSTransformValue"},
lh:{"^":"bj;m:x=,n:y=,I:z=","%":"CSSTranslation"},
li:{"^":"bZ;i:length=","%":"CSSUnparsedValue"},
lj:{"^":"Z;W:style=","%":"CSSViewportRule"},
lk:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
ll:{"^":"h;m:x=,n:y=,I:z=","%":"DeviceAcceleration"},
fQ:{"^":"v;","%":"HTMLDivElement"},
lm:{"^":"u;",
gaN:function(a){return new W.b6(a,"mousedown",!1,[W.N])},
gaO:function(a){return new W.b6(a,"mousemove",!1,[W.N])},
gaP:function(a){return new W.b6(a,"mouseup",!1,[W.N])},
gaQ:function(a){return new W.b6(a,W.da(a),!1,[W.aP])},
"%":"Document|HTMLDocument|XMLDocument"},
ln:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
lo:{"^":"fR;",
gap:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z},
"%":"DOMPoint"},
fR:{"^":"h;",
gap:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z},
"%":";DOMPointReadOnly"},
lp:{"^":"iN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.ab]},
$isp:1,
$asp:function(){return[P.ab]},
$ask:function(){return[P.ab]},
$isi:1,
$asi:function(){return[P.ab]},
$asm:function(){return[P.ab]},
"%":"ClientRectList|DOMRectList"},
fS:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gH(a))+" x "+H.b(this.gG(a))},
E:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isab)return!1
return a.left===z.gc9(b)&&a.top===z.gcl(b)&&this.gH(a)===z.gH(b)&&this.gG(a)===z.gG(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gH(a)
w=this.gG(a)
return W.e9(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcm:function(a){return new P.ah(a.left,a.top,[null])},
gG:function(a){return a.height},
gc9:function(a){return a.left},
gcl:function(a){return a.top},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isab:1,
$asab:I.au,
"%":";DOMRectReadOnly"},
lq:{"^":"iP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.l]},
$isp:1,
$asp:function(){return[P.l]},
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$asm:function(){return[P.l]},
"%":"DOMStringList"},
lr:{"^":"h;i:length=","%":"DOMTokenList"},
al:{"^":"u;W:style=,bv:namespaceURI=,es:tagName=",
gdR:function(a){return new W.iQ(a)},
k:function(a){return a.localName},
T:["as",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d9
if(z==null){z=H.A([],[W.du])
y=new W.dv(z)
z.push(W.e6(null))
z.push(W.ei())
$.d9=y
d=y}else d=z
z=$.d8
if(z==null){z=new W.el(d)
$.d8=z
c=z}else{z.a=d
c=z}}if($.a8==null){z=document
y=z.implementation.createHTMLDocument("")
$.a8=y
$.c0=y.createRange()
y=$.a8
y.toString
x=y.createElement("base")
J.fk(x,z.baseURI)
$.a8.head.appendChild(x)}z=$.a8
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a8
if(!!this.$isbV)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a8.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.w(C.N,a.tagName)){$.c0.selectNodeContents(w)
v=$.c0.createContextualFragment(b)}else{w.innerHTML=b
v=$.a8.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a8.body
if(w==null?z!=null:w!==z)J.cM(w)
c.b4(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"e3",null,null,"geG",5,5,null],
cJ:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
cI:function(a,b){return this.cJ(a,b,null,null)},
aX:function(a){return a.getBoundingClientRect()},
gaN:function(a){return new W.ac(a,"mousedown",!1,[W.N])},
gaO:function(a){return new W.ac(a,"mousemove",!1,[W.N])},
gaP:function(a){return new W.ac(a,"mouseup",!1,[W.N])},
gaQ:function(a){return new W.ac(a,W.da(a),!1,[W.aP])},
$isal:1,
"%":";Element"},
fX:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isal}},
ls:{"^":"v;G:height},J:name=,H:width}","%":"HTMLEmbedElement"},
lt:{"^":"a9;N:error=","%":"ErrorEvent"},
a9:{"^":"h;",
ao:function(a){return a.preventDefault()},
$isa9:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
C:{"^":"h;",
bG:["cP",function(a,b,c,d){if(c!=null)this.dm(a,b,c,!1)}],
dm:function(a,b,c,d){return a.addEventListener(b,H.X(c,1),!1)},
dC:function(a,b,c,d){return a.removeEventListener(b,H.X(c,1),!1)},
$isC:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ef|eg|ej|ek"},
lN:{"^":"v;J:name=","%":"HTMLFieldSetElement"},
am:{"^":"bU;",$isam:1,"%":"File"},
dd:{"^":"iW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.am]},
$isp:1,
$asp:function(){return[W.am]},
$ask:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isdd:1,
$asm:function(){return[W.am]},
"%":"FileList"},
lO:{"^":"C;N:error=","%":"FileReader"},
lP:{"^":"C;N:error=,i:length=","%":"FileWriter"},
lR:{"^":"h;W:style=","%":"FontFace"},
lS:{"^":"C;",
eH:function(a,b,c){return a.forEach(H.X(b,3),c)},
A:function(a,b){b=H.X(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lU:{"^":"v;i:length=,J:name=","%":"HTMLFormElement"},
lW:{"^":"ch;m:x=,n:y=,I:z=","%":"Gyroscope"},
lX:{"^":"h;i:length=","%":"History"},
lY:{"^":"jc;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.u]},
$isp:1,
$asp:function(){return[W.u]},
$ask:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$asm:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lZ:{"^":"v;G:height},J:name=,H:width}","%":"HTMLIFrameElement"},
c4:{"^":"h;",$isc4:1,"%":"ImageBitmap"},
bn:{"^":"h;",$isbn:1,"%":"ImageData"},
c5:{"^":"v;G:height},H:width}",$isc5:1,"%":"HTMLImageElement"},
m0:{"^":"v;G:height},J:name=,H:width}","%":"HTMLInputElement"},
bp:{"^":"dZ;",
geA:function(a){return a.which},
$isbp:1,
"%":"KeyboardEvent"},
m5:{"^":"v;al:href}","%":"HTMLLinkElement"},
m7:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
m8:{"^":"ch;m:x=,n:y=,I:z=","%":"Magnetometer"},
m9:{"^":"v;J:name=","%":"HTMLMapElement"},
hu:{"^":"v;N:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mb:{"^":"h;i:length=","%":"MediaList"},
br:{"^":"C;",$isbr:1,"%":"MediaStream"},
mc:{"^":"C;aJ:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
md:{"^":"C;",
bG:function(a,b,c,d){if(J.K(b,"message"))a.start()
this.cP(a,b,c,!1)},
"%":"MessagePort"},
me:{"^":"v;J:name=","%":"HTMLMetaElement"},
mf:{"^":"ji;",
h:function(a,b){return P.T(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gM:function(a){var z=H.A([],[P.l])
this.A(a,new W.hw(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.l,null]},
$isE:1,
$asE:function(){return[P.l,null]},
"%":"MIDIInputMap"},
hw:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mg:{"^":"jj;",
h:function(a,b){return P.T(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gM:function(a){var z=H.A([],[P.l])
this.A(a,new W.hx(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.l,null]},
$isE:1,
$asE:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
hx:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mh:{"^":"jl;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bs]},
$isp:1,
$asp:function(){return[W.bs]},
$ask:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$asm:function(){return[W.bs]},
"%":"MimeTypeArray"},
N:{"^":"dZ;bQ:button=",
gcd:function(a){var z,y,x
if(!!a.offsetX)return new P.ah(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.em(z)).$isal)throw H.a(P.t("offsetX is only supported on elements"))
y=W.em(z)
z=[null]
x=new P.ah(a.clientX,a.clientY,z).F(0,J.fa(J.fc(y)))
return new P.ah(J.cN(x.a),J.cN(x.b),z)}},
$isN:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
hF:{"^":"hG;",
cH:function(a,b,c){var z,y,x,w
z=W.br
y=new P.F(0,$.r,null,[z])
x=new P.e1(y,[z])
w=P.cb(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dv(a,new P.jK([],[]).aV(w),new W.hH(x),new W.hI(x))
return y},
cG:function(a,b){return this.cH(a,!1,b)},
dv:function(a,b,c,d){return a.getUserMedia(b,H.X(c,1),H.X(d,1))},
"%":"Navigator"},
hH:{"^":"f:0;a",
$1:function(a){this.a.ab(0,a)}},
hI:{"^":"f:0;a",
$1:function(a){this.a.dZ(a)}},
hG:{"^":"h;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
S:{"^":"dm;a",
gZ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b4("No elements"))
if(y>1)throw H.a(P.b4("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.n(b)
if(!!z.$isS){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gL(b),y=this.a;z.t();)y.appendChild(z.gC(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gL:function(a){var z=this.a.childNodes
return new W.de(z,z.length,-1,null,[H.bb(C.Q,z,"m",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdm:function(){return[W.u]},
$ask:function(){return[W.u]},
$asi:function(){return[W.u]},
$asea:function(){return[W.u]}},
u:{"^":"C;an:parentNode=,aR:previousSibling=",
gcc:function(a){return new W.S(a)},
em:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cQ(a):z},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mp:{"^":"h;",
el:[function(a){return a.previousNode()},"$0","gaR",1,0,4],
"%":"NodeIterator"},
hJ:{"^":"jn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.u]},
$isp:1,
$asp:function(){return[W.u]},
$ask:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$asm:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
ms:{"^":"v;G:height},J:name=,H:width}","%":"HTMLObjectElement"},
mu:{"^":"v;J:name=","%":"HTMLOutputElement"},
mv:{"^":"v;J:name=","%":"HTMLParamElement"},
b1:{"^":"h;i:length=","%":"Plugin"},
mx:{"^":"jr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b1]},
$isp:1,
$asp:function(){return[W.b1]},
$ask:function(){return[W.b1]},
$isi:1,
$asi:function(){return[W.b1]},
$asm:function(){return[W.b1]},
"%":"PluginArray"},
mA:{"^":"h;",
aX:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mG:{"^":"jx;",
h:function(a,b){return P.T(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gM:function(a){var z=H.A([],[P.l])
this.A(a,new W.i2(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.l,null]},
$isE:1,
$asE:function(){return[P.l,null]},
"%":"RTCStatsReport"},
i2:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mH:{"^":"v;i:length=,J:name=","%":"HTMLSelectElement"},
ch:{"^":"C;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mI:{"^":"a9;N:error=","%":"SensorErrorEvent"},
mJ:{"^":"v;J:name=","%":"HTMLSlotElement"},
mK:{"^":"eg;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$ask:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asm:function(){return[W.bw]},
"%":"SourceBufferList"},
mL:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bx]},
$isp:1,
$asp:function(){return[W.bx]},
$ask:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$asm:function(){return[W.bx]},
"%":"SpeechGrammarList"},
mM:{"^":"a9;N:error=","%":"SpeechRecognitionError"},
b3:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
mO:{"^":"jG;",
h:function(a,b){return a.getItem(b)},
A:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gM:function(a){var z=H.A([],[P.l])
this.A(a,new W.ie(z))
return z},
gi:function(a){return a.length},
$asR:function(){return[P.l,P.l]},
$isE:1,
$asE:function(){return[P.l,P.l]},
"%":"Storage"},
ie:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
ir:{"^":"v;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=W.fW("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.S(y).O(0,J.f7(z))
return y},
"%":"HTMLTableElement"},
mR:{"^":"v;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.T(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gZ(z)
x.toString
z=new W.S(x)
w=z.gZ(z)
y.toString
w.toString
new W.S(y).O(0,new W.S(w))
return y},
"%":"HTMLTableRowElement"},
mS:{"^":"v;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.T(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gZ(z)
y.toString
x.toString
new W.S(y).O(0,new W.S(x))
return y},
"%":"HTMLTableSectionElement"},
dH:{"^":"v;",$isdH:1,"%":"HTMLTemplateElement"},
mT:{"^":"v;J:name=","%":"HTMLTextAreaElement"},
mV:{"^":"jR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bC]},
$isp:1,
$asp:function(){return[W.bC]},
$ask:function(){return[W.bC]},
$isi:1,
$asi:function(){return[W.bC]},
$asm:function(){return[W.bC]},
"%":"TextTrackCueList"},
mW:{"^":"ek;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bB]},
$isp:1,
$asp:function(){return[W.bB]},
$ask:function(){return[W.bB]},
$isi:1,
$asi:function(){return[W.bB]},
$asm:function(){return[W.bB]},
"%":"TextTrackList"},
mX:{"^":"h;i:length=","%":"TimeRanges"},
mY:{"^":"jW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bD]},
$isp:1,
$asp:function(){return[W.bD]},
$ask:function(){return[W.bD]},
$isi:1,
$asi:function(){return[W.bD]},
$asm:function(){return[W.bD]},
"%":"TouchList"},
mZ:{"^":"h;i:length=","%":"TrackDefaultList"},
n1:{"^":"h;",
eI:[function(a){return a.parentNode()},"$0","gan",1,0,4],
el:[function(a){return a.previousNode()},"$0","gaR",1,0,4],
"%":"TreeWalker"},
dZ:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
n3:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
n5:{"^":"h;m:x=,I:z=","%":"VRStageBoundsPoint"},
cm:{"^":"hu;G:height},H:width}",$iscm:1,"%":"HTMLVideoElement"},
n6:{"^":"C;i:length=","%":"VideoTrackList"},
aP:{"^":"N;",
ge5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.t("deltaY is not supported"))},
$isaP:1,
"%":"WheelEvent"},
iz:{"^":"C;",
gdQ:function(a){var z,y
z=P.aV
y=new P.F(0,$.r,null,[z])
this.du(a)
this.dD(a,W.er(new W.iA(new P.jN(y,[z]))))
return y},
dD:function(a,b){return a.requestAnimationFrame(H.X(b,1))},
du:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iA:{"^":"f:0;a",
$1:function(a){this.a.ab(0,a)}},
n7:{"^":"C;"},
nb:{"^":"u;J:name=,bv:namespaceURI=","%":"Attr"},
nc:{"^":"k1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$ask:function(){return[W.Z]},
$isi:1,
$asi:function(){return[W.Z]},
$asm:function(){return[W.Z]},
"%":"CSSRuleList"},
nd:{"^":"fS;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
E:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isab)return!1
return a.left===z.gc9(b)&&a.top===z.gcl(b)&&a.width===z.gH(b)&&a.height===z.gG(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e9(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcm:function(a){return new P.ah(a.left,a.top,[null])},
gG:function(a){return a.height},
gH:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
ne:{"^":"k3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bm]},
$isp:1,
$asp:function(){return[W.bm]},
$ask:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$asm:function(){return[W.bm]},
"%":"GamepadList"},
nh:{"^":"k5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.u]},
$isp:1,
$asp:function(){return[W.u]},
$ask:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$asm:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ni:{"^":"k7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b3]},
$isp:1,
$asp:function(){return[W.b3]},
$ask:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$asm:function(){return[W.b3]},
"%":"SpeechRecognitionResultList"},
nj:{"^":"k9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bA]},
$isp:1,
$asp:function(){return[W.bA]},
$ask:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$asm:function(){return[W.bA]},
"%":"StyleSheetList"},
iH:{"^":"cd;dw:a<",
A:function(a,b){var z,y,x,w,v
for(z=this.gM(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gM:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbv(v)==null)y.push(u.gJ(v))}return y},
$ascd:function(){return[P.l,P.l]},
$asR:function(){return[P.l,P.l]},
$asE:function(){return[P.l,P.l]}},
iQ:{"^":"iH;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gM(this).length}},
b6:{"^":"bz;a,b,c,$ti",
aL:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.B(this,0))}},
ac:{"^":"b6;a,b,c,$ti"},
iS:{"^":"ig;a,b,c,d,e,$ti",
dg:function(a,b,c,d,e){this.dL()},
bR:function(a){if(this.b==null)return
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
p:{
aj:function(a,b,c,d,e){var z=c==null?null:W.er(new W.iT(c))
z=new W.iS(0,a,b,z,!1,[e])
z.dg(a,b,c,!1,e)
return z}}},
iT:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
cp:{"^":"c;cw:a<",
dh:function(a){var z,y
z=$.$get$cq()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.M[y],W.kD())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kE())}},
a3:function(a){return $.$get$e7().w(0,W.aE(a))},
X:function(a,b,c){var z,y,x
z=W.aE(a)
y=$.$get$cq()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
e6:function(a){var z,y
z=document.createElement("a")
y=new W.jy(z,window.location)
y=new W.cp(y)
y.dh(a)
return y},
nf:[function(a,b,c,d){return!0},"$4","kD",16,0,9],
ng:[function(a,b,c,d){var z,y,x,w,v
z=d.gcw()
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
return z},"$4","kE",16,0,9]}},
m:{"^":"c;$ti",
gL:function(a){return new W.de(a,this.gi(a),-1,null,[H.bb(this,a,"m",0)])}},
dv:{"^":"c;a",
a3:function(a){return C.c.bH(this.a,new W.hL(a))},
X:function(a,b,c){return C.c.bH(this.a,new W.hK(a,b,c))}},
hL:{"^":"f:0;a",
$1:function(a){return a.a3(this.a)}},
hK:{"^":"f:0;a,b,c",
$1:function(a){return a.X(this.a,this.b,this.c)}},
jz:{"^":"c;cw:d<",
dj:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.aW(0,new W.jA())
y=b.aW(0,new W.jB())
this.b.O(0,z)
x=this.c
x.O(0,C.w)
x.O(0,y)},
a3:function(a){return this.a.w(0,W.aE(a))},
X:["cT",function(a,b,c){var z,y
z=W.aE(a)
y=this.c
if(y.w(0,H.b(z)+"::"+b))return this.d.dP(c)
else if(y.w(0,"*::"+b))return this.d.dP(c)
else{y=this.b
if(y.w(0,H.b(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.b(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}]},
jA:{"^":"f:0;",
$1:function(a){return!C.c.w(C.p,a)}},
jB:{"^":"f:0;",
$1:function(a){return C.c.w(C.p,a)}},
jO:{"^":"jz;e,a,b,c,d",
X:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cH(a).a.getAttribute("template")==="")return this.e.w(0,b)
return!1},
p:{
ei:function(){var z=P.l
z=new W.jO(P.cc(C.o,z),P.V(null,null,null,z),P.V(null,null,null,z),P.V(null,null,null,z),null)
z.dj(null,new H.hs(C.o,new W.jP(),[H.B(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jP:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jM:{"^":"c;",
a3:function(a){var z=J.n(a)
if(!!z.$isdA)return!1
z=!!z.$isz
if(z&&W.aE(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.cM(b,"on"))return!1
return this.a3(a)}},
de:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.az(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
iK:{"^":"c;a",$isC:1,p:{
iL:function(a){if(a===window)return a
else return new W.iK(a)}}},
du:{"^":"c;"},
mq:{"^":"c;"},
n2:{"^":"c;"},
jy:{"^":"c;a,b"},
el:{"^":"c;a",
b4:function(a){new W.jZ(this).$2(a,null)},
a8:function(a,b){if(b==null)J.cM(a)
else b.removeChild(a)},
dG:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cH(a)
x=y.gdw().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.I(t)}v="element unprintable"
try{v=J.aC(a)}catch(t){H.I(t)}try{u=W.aE(a)
this.dF(a,b,z,v,u,y,x)}catch(t){if(H.I(t) instanceof P.a7)throw t
else{this.a8(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dF:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a3(a)){this.a8(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.a8(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gM(f)
y=H.A(z.slice(0),[H.B(z,0)])
for(x=f.gM(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.X(a,J.fo(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdH)this.b4(a.content)}},
jZ:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dG(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f8(z)}catch(w){H.I(w)
v=z
if(x){u=J.e(v)
if(u.gan(v)!=null){u.gan(v)
u.gan(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iJ:{"^":"h+fK;"},
iM:{"^":"h+k;"},
iN:{"^":"iM+m;"},
iO:{"^":"h+k;"},
iP:{"^":"iO+m;"},
iV:{"^":"h+k;"},
iW:{"^":"iV+m;"},
jb:{"^":"h+k;"},
jc:{"^":"jb+m;"},
ji:{"^":"h+R;"},
jj:{"^":"h+R;"},
jk:{"^":"h+k;"},
jl:{"^":"jk+m;"},
jm:{"^":"h+k;"},
jn:{"^":"jm+m;"},
jq:{"^":"h+k;"},
jr:{"^":"jq+m;"},
jx:{"^":"h+R;"},
ef:{"^":"C+k;"},
eg:{"^":"ef+m;"},
jC:{"^":"h+k;"},
jD:{"^":"jC+m;"},
jG:{"^":"h+R;"},
jQ:{"^":"h+k;"},
jR:{"^":"jQ+m;"},
ej:{"^":"C+k;"},
ek:{"^":"ej+m;"},
jV:{"^":"h+k;"},
jW:{"^":"jV+m;"},
k0:{"^":"h+k;"},
k1:{"^":"k0+m;"},
k2:{"^":"h+k;"},
k3:{"^":"k2+m;"},
k4:{"^":"h+k;"},
k5:{"^":"k4+m;"},
k6:{"^":"h+k;"},
k7:{"^":"k6+m;"},
k8:{"^":"h+k;"},
k9:{"^":"k8+m;"}}],["","",,P,{"^":"",
ew:function(a){return a},
T:function(a){var z,y,x,w,v
if(a==null)return
z=P.Q()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
ku:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cG(a,new P.kv(z))
return z},
d6:function(){var z=$.d5
if(z==null){z=J.bO(window.navigator.userAgent,"Opera",0)
$.d5=z}return z},
fP:function(){var z,y
z=$.d2
if(z!=null)return z
y=$.d3
if(y==null){y=J.bO(window.navigator.userAgent,"Firefox",0)
$.d3=y}if(y)z="-moz-"
else{y=$.d4
if(y==null){y=P.d6()!==!0&&J.bO(window.navigator.userAgent,"Trident/",0)
$.d4=y}if(y)z="-ms-"
else z=P.d6()===!0?"-o-":"-webkit-"}$.d2=z
return z},
jJ:{"^":"c;",
c6:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
aV:function(a){var z,y,x,w,v,u
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.n(a)
if(!!y.$isbk)return new Date(a.a)
if(!!y.$isam)return a
if(!!y.$isbU)return a
if(!!y.$isdd)return a
if(!!y.$isbn)return a
if(!!y.$isdr||!!y.$iscf)return a
if(!!y.$isE){x=this.c6(a)
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
y.A(a,new P.jL(z,this))
return z.a}if(!!y.$isi){x=this.c6(a)
z=this.b
if(x>=z.length)return H.d(z,x)
u=z[x]
if(u!=null)return u
return this.e2(a,x)}throw H.a(P.cl("structured clone of other type"))},
e2:function(a,b){var z,y,x,w,v
z=J.a2(a)
y=z.gi(a)
x=new Array(y)
w=this.b
if(b>=w.length)return H.d(w,b)
w[b]=x
if(typeof y!=="number")return H.x(y)
v=0
for(;v<y;++v){w=this.aV(z.h(a,v))
if(v>=x.length)return H.d(x,v)
x[v]=w}return x}},
jL:{"^":"f:2;a,b",
$2:function(a,b){this.a.a[a]=this.b.aV(b)}},
kv:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
jK:{"^":"jJ;a,b"}}],["","",,P,{"^":"",mF:{"^":"C;N:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},n_:{"^":"C;N:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
e8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jd:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ah:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
E:function(a,b){var z,y
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
z=J.a5(this.a)
y=J.a5(this.b)
return P.jd(P.e8(P.e8(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ah(y,C.a.l(z,x),this.$ti)},
F:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.x(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.F()
if(typeof y!=="number")return H.x(y)
return new P.ah(z-x,w-y,this.$ti)}},
js:{"^":"c;$ti"},
ab:{"^":"js;$ti"}}],["","",,P,{"^":"",lv:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},lw:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},lx:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},ly:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},lz:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},lA:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},lB:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lC:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},lD:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lE:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},lF:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},lG:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},lH:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},lI:{"^":"z;m:x=,n:y=,I:z=","%":"SVGFEPointLightElement"},lJ:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},lK:{"^":"z;m:x=,n:y=,I:z=","%":"SVGFESpotLightElement"},lL:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},lM:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},lQ:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},lT:{"^":"aF;m:x=,n:y=","%":"SVGForeignObjectElement"},h6:{"^":"aF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aF:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m_:{"^":"aF;m:x=,n:y=","%":"SVGImageElement"},m4:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dl]},
$isi:1,
$asi:function(){return[P.dl]},
$asm:function(){return[P.dl]},
"%":"SVGLengthList"},ma:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},mr:{"^":"jp;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dx]},
$isi:1,
$asi:function(){return[P.dx]},
$asm:function(){return[P.dx]},
"%":"SVGNumberList"},mw:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},my:{"^":"h;m:x=,n:y=","%":"SVGPoint"},mz:{"^":"h;i:length=","%":"SVGPointList"},mB:{"^":"h;m:x=,n:y=","%":"SVGRect"},mC:{"^":"h6;m:x=,n:y=","%":"SVGRectElement"},dA:{"^":"z;",$isdA:1,"%":"SVGScriptElement"},mP:{"^":"jI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$asm:function(){return[P.l]},
"%":"SVGStringList"},z:{"^":"al;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.du])
z.push(W.e6(null))
z.push(W.ei())
z.push(new W.jM())
c=new W.el(new W.dv(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).e3(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.S(w)
u=z.gZ(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaN:function(a){return new W.ac(a,"mousedown",!1,[W.N])},
gaO:function(a){return new W.ac(a,"mousemove",!1,[W.N])},
gaP:function(a){return new W.ac(a,"mouseup",!1,[W.N])},
gaQ:function(a){return new W.ac(a,"mousewheel",!1,[W.aP])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mQ:{"^":"aF;m:x=,n:y=","%":"SVGSVGElement"},is:{"^":"aF;","%":"SVGTextPathElement;SVGTextContentElement"},mU:{"^":"is;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},n0:{"^":"jY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dM]},
$isi:1,
$asi:function(){return[P.dM]},
$asm:function(){return[P.dM]},
"%":"SVGTransformList"},n4:{"^":"aF;m:x=,n:y=","%":"SVGUseElement"},je:{"^":"h+k;"},jf:{"^":"je+m;"},jo:{"^":"h+k;"},jp:{"^":"jo+m;"},jH:{"^":"h+k;"},jI:{"^":"jH+m;"},jX:{"^":"h+k;"},jY:{"^":"jX+m;"}}],["","",,P,{"^":"",l_:{"^":"h;i:length=","%":"AudioBuffer"},l0:{"^":"iI;",
h:function(a,b){return P.T(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gM:function(a){var z=H.A([],[P.l])
this.A(a,new P.fz(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.l,null]},
$isE:1,
$asE:function(){return[P.l,null]},
"%":"AudioParamMap"},fz:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},l1:{"^":"h;aJ:enabled=","%":"AudioTrack"},l2:{"^":"C;i:length=","%":"AudioTrackList"},fA:{"^":"C;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mt:{"^":"fA;i:length=","%":"OfflineAudioContext"},iI:{"^":"h+R;"}}],["","",,P,{"^":"",mD:{"^":"h;",
bF:function(a,b){return a.activeTexture(b)},
bI:function(a,b,c){return a.attachShader(b,c)},
bJ:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindFramebuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bY:function(a){return a.createTexture()},
c_:function(a,b){return a.depthMask(b)},
c0:function(a,b){return a.disable(b)},
c1:function(a,b,c,d){return a.drawArrays(b,c,d)},
c2:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
aq:function(a){return P.T(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isbn)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ew(g))
return}if(!!z.$isc5)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscm)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc4)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cT("Incorrect number or type of arguments"))},
ci:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
cj:function(a,b,c,d){return a.texParameterf(b,c,d)},
ck:function(a,b,c,d){return a.texParameteri(b,c,d)},
cn:function(a,b,c){return a.uniform1f(b,c)},
co:function(a,b,c){return a.uniform1fv(b,c)},
cp:function(a,b,c){return a.uniform1i(b,c)},
cq:function(a,b,c){return a.uniform1iv(b,c)},
cr:function(a,b,c){return a.uniform2fv(b,c)},
cs:function(a,b,c){return a.uniform3fv(b,c)},
ct:function(a,b,c){return a.uniform4fv(b,c)},
cu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cz:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cC:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mE:{"^":"h;",
dS:function(a,b){return a.beginTransformFeedback(b)},
dV:function(a,b){return a.bindVertexArray(b)},
e4:function(a){return a.createVertexArray()},
e6:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e7:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e8:function(a){return a.endTransformFeedback()},
ey:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ez:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bF:function(a,b){return a.activeTexture(b)},
bI:function(a,b,c){return a.attachShader(b,c)},
bJ:function(a,b,c){return a.bindBuffer(b,c)},
bL:function(a,b,c){return a.bindFramebuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bY:function(a){return a.createTexture()},
c_:function(a,b){return a.depthMask(b)},
c0:function(a,b){return a.disable(b)},
c1:function(a,b,c,d){return a.drawArrays(b,c,d)},
c2:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
aq:function(a){return P.T(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
b6:function(a,b,c){return a.shaderSource(b,c)},
b8:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isbn)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ew(g))
return}if(!!z.$isc5)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscm)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc4)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cT("Incorrect number or type of arguments"))},
ci:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
cj:function(a,b,c,d){return a.texParameterf(b,c,d)},
ck:function(a,b,c,d){return a.texParameteri(b,c,d)},
cn:function(a,b,c){return a.uniform1f(b,c)},
co:function(a,b,c){return a.uniform1fv(b,c)},
cp:function(a,b,c){return a.uniform1i(b,c)},
cq:function(a,b,c){return a.uniform1iv(b,c)},
cr:function(a,b,c){return a.uniform2fv(b,c)},
cs:function(a,b,c){return a.uniform3fv(b,c)},
ct:function(a,b,c){return a.uniform4fv(b,c)},
cu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cz:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cC:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mN:{"^":"jF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.T(a.item(b))},
j:function(a,b,c){throw H.a(P.t("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ask:function(){return[P.E]},
$isi:1,
$asi:function(){return[P.E]},
$asm:function(){return[P.E]},
"%":"SQLResultSetRowList"},jE:{"^":"h+k;"},jF:{"^":"jE+m;"}}],["","",,G,{"^":"",
iB:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a4(z,"\n")},
e2:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bX(a,b)
z.b6(a,y,c)
z.bU(a,y)
x=z.b1(a,y,35713)
if(x!=null&&J.K(x,!1)){w=z.b0(a,y)
P.a4("E:Compilation failed:")
P.a4("E:"+G.iB(c))
P.a4("E:Failure:")
P.a4(C.i.l("E:",w))
throw H.a(w)}return y},
df:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bR(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bS(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cK(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
h_:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bR(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bS(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
h0:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bR(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bS(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cK(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.fb(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fZ:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.az(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.az(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.az(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.az(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
j9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.af(z,z.r,null,null,[H.B(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.G]],v=[P.aT],u=[T.ai],t=[T.j],s=[T.q];y.t();){r=y.d
if(!x.ak(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eC>0)H.bM("I: "+q)
continue}p=z.h(0,r)
switch($.$get$W().h(0,r).a){case"vec2":b.a5(r,G.h_(H.bd(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a5(r,G.df(H.bd(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a5(r,G.h0(H.bd(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a5(r,new Float32Array(H.bG(H.bd(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a5(r,G.fZ(H.bd(p,"$isi",w,"$asi"),null),4)
break}}},
dh:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.Q()
w=J.eZ(z.a)
v=new G.hv(z,w,4,x,y,null,0,-1,null,null,P.Q(),"meshdata:"+a,!1,!0)
u=G.df(c.d,null)
x.j(0,"aPosition",J.bP(z.a))
v.ch=u
v.be("aPosition",u,3)
t=$.$get$W().h(0,"aPosition")
if(t==null)H.U("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.be(z.a,w)
z.c5(0,s,0)
z.cB(0,x.h(0,"aPosition"),s,t.bg(),5126,!1,0,0)
y=c.d0()
v.y=J.bP(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bG(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bG(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bG(y))
v.Q=5125}J.be(z.a,w)
y=v.y
x=v.cx
J.bN(z.a,34963,y)
J.cD(z.a,34963,x,35048)
G.j9(c,v)
return v},
aL:{"^":"c;aJ:c>"},
ck:{"^":"aL;d,a,b,c",
bh:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.dY(H.kA(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.af(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a4(z,"\n")}},
fB:{"^":"dB;"},
fD:{"^":"c;a,b",
c5:function(a,b,c){J.f4(this.a,b)
if(c>0)J.fu(this.a,b,c)},
cB:function(a,b,c,d,e,f,g,h){J.bN(this.a,34962,b)
J.fv(this.a,c,d,e,!1,g,h)}},
h1:{"^":"c;a,b,c,d,e"},
dc:{"^":"c;a,b,c,d"},
dg:{"^":"c;a,b,c,d,e",
ag:function(a){switch($.$get$W().h(0,a).a){case"vec2":this.e.j(0,a,H.A([],[T.q]))
break
case"vec3":this.e.j(0,a,H.A([],[T.j]))
break
case"vec4":this.e.j(0,a,H.A([],[T.ai]))
break
case"float":this.e.j(0,a,H.A([],[P.aT]))
break
case"uvec4":this.e.j(0,a,H.A([],[[P.i,P.G]]))
break}},
cV:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.dc(z,z+1,z+2,z+3))},
cW:function(a){var z,y
for(z=this.d,y=0;y<24;++y)z.push(a[y].aa(0))},
bb:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(b[x].aa(0))},
bc:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].aa(0))},
cX:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.dc(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].aa(0))},
d0:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.A(y,[P.G])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.geD(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.geE(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.geF(t)
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
for(y=this.e,x=new H.af(y,y.r,null,null,[H.B(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$W().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a4(z," ")}},
dL:{"^":"c;a,b,c"},
dK:{"^":"c;a,b,c"},
ht:{"^":"ck;d,a,b,c",
d3:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$cV())
z.j(0,"cStencilFunc",$.$get$dD())},
p:{
dq:function(a){var z=new G.ht(P.Q(),a,!1,!0)
z.d3(a)
return z}}},
hv:{"^":"aL;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
be:function(a,b,c){var z,y
C.i.bq(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bN(z.a,34962,y)
J.cD(z.a,34962,b,35048)},
bf:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a5:function(a,b,c){var z,y,x,w,v
z=J.cE(a,0)===105
if(z&&this.z===0)this.z=C.b.cU(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bP(x.a))
this.be(a,b,c)
w=$.$get$W().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.be(x.a,this.e)
x.c5(0,v,z?1:0)
x.cB(0,y.h(0,a),v,w.bg(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.af(z,z.r,null,null,[H.B(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a4(y,"  ")}},
hO:{"^":"ck;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cY:function(a,b){var z
if(typeof a!=="number")return a.eB()
if(typeof b!=="number")return H.x(b)
z=a/b
if(this.z===z)return
this.z=z
this.bj()},
bj:function(){var z,y,x,w,v,u
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
bh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.j(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.D(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isai
q=x?y.gap(t):1
if(!!y.$isj){p=y.gm(t)
s=y.gn(t)
r=y.gI(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gI(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.x(t)
x=z[4]
if(typeof s!=="number")return H.x(s)
w=z[8]
if(typeof r!=="number")return H.x(r)
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
c.D(this.db)
c.cb(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
fT:{"^":"c;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
i1:{"^":"aL;d,e,f,r,x,y,z,Q,ch,a,b,c",
d6:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cL(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cL(w.a,v,t))}},
da:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.af(y,y.r,null,null,[H.B(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ak(0,v))x.push(v)}for(z=this.x,y=new P.cr(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.w(0,v))x.push(v)}return x},
de:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.af(b,b.r,null,null,[H.B(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cE(t,0)){case 117:if(w.ak(0,t)){s=b.h(0,t)
if(v.ak(0,t))H.bM("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$W().h(0,t)
if(r==null)H.U("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bT(x.a,q,s)
else if(!!J.n(s).$ish9)J.fs(x.a,q,s)
break
case"float":if(r.c===0)J.fq(x.a,q,s)
else if(!!J.n(s).$isc2)J.fr(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ae(s,"$isM").a
J.cS(x.a,q,!1,p)}else if(!!J.n(s).$isc2)J.cS(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ae(s,"$isan").a
J.cR(x.a,q,!1,p)}else if(!!J.n(s).$isc2)J.cR(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cQ(o,q,H.ae(s,"$isai").a)
else J.cQ(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cP(o,q,H.ae(s,"$isj").a)
else J.cP(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cO(o,q,H.ae(s,"$isq").a)
else J.cO(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.x(p)
J.cB(x.a,33984+p)
p=H.ae(s,"$iscj").b
J.aA(x.a,3553,p)
p=this.ch
J.bT(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.x(p)
J.cB(x.a,33984+p)
p=H.ae(s,"$iscj").b
J.aA(x.a,34067,p)
p=this.ch
J.bT(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bM("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.K(s,!0)
o=x.a
if(p)J.bf(o,2929)
else J.bQ(o,2929)
break
case"cStencilFunc":H.ae(s,"$isdL")
p=s.a
o=x.a
if(p===1281)J.bQ(o,2960)
else{J.bf(o,2960)
o=s.b
n=s.c
J.fl(x.a,p,o,n)}break
case"cDepthWrite":J.f_(x.a,s)
break
case"cBlendEquation":H.ae(s,"$isdK")
p=s.a
o=x.a
if(p===1281)J.bQ(o,3042)
else{J.bf(o,3042)
o=s.b
n=s.c
J.eT(x.a,o,n)
J.eS(x.a,p)}break}++u
break}}m=P.d7(0,0,0,Date.now()-new P.bk(z,!1).a,0,0)
""+u
m.k(0)},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.d
J.ft(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bl()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.D)(b),++w){v=b[w]
this.de(v.a,v.bh())}x=this.Q
x.a9(0)
for(u=a.cy,t=new H.af(u,u.r,null,null,[H.B(u,0)]),t.c=u.e;t.t();)x.R(0,t.d)
s=this.da()
if(s.length!==0)P.a4("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(s)))
J.be(a.d.a,a.e)
r=this.e.f.length>0
x=a.f
u=a.bf()
t=a.Q
q=a.z
if(r)J.eQ(y.a,x)
if(t!==-1){p=y.a
if(q>1)J.f3(p,x,u,t,0,q)
else J.f2(p,x,u,t,0)}else{t=y.a
if(q>1)J.f1(t,x,0,u,q)
else J.f0(t,x,0,u)}if(r)J.f5(y.a)
c.push(new G.fT(this.a,a.z,a.bf(),x,P.d7(0,0,0,Date.now()-new P.bk(z,!1).a,0,0)))},
p:{
dz:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.V(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eX(b.a)
u=G.e2(b.a,35633,y)
J.cC(b.a,v,u)
t=G.e2(b.a,35632,x)
J.cC(b.a,v,t)
if(w.length>0)J.fp(b.a,v,w,35980)
J.fi(b.a,v)
if(J.fh(b.a,v,35714)!==!0)H.U(J.fg(b.a,v))
z=new G.i1(b,c,d,v,P.cc(c.c,null),P.Q(),P.Q(),z,null,a,!1,!0)
z.d6(a,b,c,d)
return z}}},
w:{"^":"c;a,b,c",
bg:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i7:{"^":"c;a,b,c,d,e,f,r,x",
ba:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.D)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.ar(y)},
at:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)y.push(a[x])
C.c.ar(y)},
bd:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.ar(z)},
d7:function(a,b){this.b=this.df(!0,a,b)},
ah:function(a){return this.d7(a,null)},
df:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
s=$.$get$W().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$W().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$W().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$W().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.O(w,b)
w.push("}")
return C.c.a4(w,"\n")},
p:{
bv:function(a){return new G.i7(a,null,[],[],[],[],0,P.Q())}}},
dB:{"^":"aL;",
b5:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
dI:{"^":"c;a,b,c,d,e,f,r",
d1:function(a,b){var z=this.e
if(z!==1)J.fn(a.a,b,34046,z)
J.bg(a.a,b,10240,this.r)
J.bg(a.a,b,10241,this.f)
if(this.b){J.bg(a.a,b,10242,33071)
J.bg(a.a,b,10243,33071)}},
p:{
it:function(){return new G.dI(!1,!1,!1,!0,1,9729,9729)}}},
cj:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h7:{"^":"cj;f,a,b,c,d,e",
bi:function(a){var z,y
z=this.d
y=this.c
J.aA(z.a,y,this.b)
J.fm(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",i0:{"^":"i_;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eo:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sH(z,y)
w.sG(z,x)
P.a4("size change "+H.b(y)+" "+H.b(x))
this.dx.cY(y,x)
this.z=y
this.Q=x},"$1","gen",4,0,17]},ic:{"^":"c;",
d8:function(a,b,c){var z,y,x
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
for(w=0;w<c;++w){v=W.iR("span",null)
y=J.cI(v)
J.e(y).sH(y,"1px")
C.n.sG(y,""+d+"px")
C.n.sea(y,"left")
x=C.n.bp(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},id:{"^":"ic;e,f,a,b,c,d",
dc:function(a,b){var z,y,x,w,v;++this.e
if(J.aX(J.eN(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ex(z,2)+" fps"
y=this.c;(y&&C.D).cI(y,b)
x=C.b.a2(30*C.t.dW(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cI(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)}}}],["","",,A,{"^":"",
ez:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.f6(b)!==!0)return
z=b.dd(c)
b.k(0)
y=C.c.gej(e)
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
x.e1(new T.an(v))
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
a.d_(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.D)(y),++s)A.ez(a,y[s],z,d,e)},
dt:{"^":"dB;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dd:function(a){var z=this.dx
z.D(a)
z.cb(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
cg:{"^":"aL;d,e,cc:f>,a,b,c"},
i_:{"^":"aL;",
d5:function(a,b,c){if(this.d==null)this.d=new G.h1(this.e,null,null,null,null)},
cZ:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eR(v.a,36160,z)
J.fw(v.a,this.x,this.y,x,w)
if(y!==0)J.eU(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.ck(P.Q(),"transforms",!1,!0))
r=new T.M(new Float32Array(16))
r.V()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.D)(x),++q)A.ez(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,B,{"^":"",
fL:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.j(new Float32Array(3))
x.q(z,y,d2)
w=new T.j(new Float32Array(3))
w.q(d0,y,d2)
v=new T.j(new Float32Array(3))
v.q(d0,d1,d2)
u=new T.j(new Float32Array(3))
u.q(z,d1,d2)
t=-d2
s=new T.j(new Float32Array(3))
s.q(z,y,t)
r=new T.j(new Float32Array(3))
r.q(z,d1,t)
q=new T.j(new Float32Array(3))
q.q(d0,d1,t)
p=new T.j(new Float32Array(3))
p.q(d0,y,t)
o=new T.j(new Float32Array(3))
o.q(z,d1,t)
n=new T.j(new Float32Array(3))
n.q(z,d1,d2)
m=new T.j(new Float32Array(3))
m.q(d0,d1,d2)
l=new T.j(new Float32Array(3))
l.q(d0,d1,t)
k=new T.j(new Float32Array(3))
k.q(d0,y,d2)
j=new T.j(new Float32Array(3))
j.q(z,y,d2)
i=new T.j(new Float32Array(3))
i.q(z,y,t)
h=new T.j(new Float32Array(3))
h.q(d0,y,t)
g=new T.j(new Float32Array(3))
g.q(d0,y,t)
f=new T.j(new Float32Array(3))
f.q(d0,d1,t)
e=new T.j(new Float32Array(3))
e.q(d0,d1,d2)
d=new T.j(new Float32Array(3))
d.q(d0,y,d2)
c=new T.j(new Float32Array(3))
c.q(z,y,t)
b=new T.j(new Float32Array(3))
b.q(z,y,d2)
y=new T.j(new Float32Array(3))
y.q(z,d1,d2)
a=new T.j(new Float32Array(3))
a.q(z,d1,t)
z=new T.q(new Float32Array(2))
z.v(c7,c9)
t=new T.q(new Float32Array(2))
t.v(c6,c9)
a0=new T.q(new Float32Array(2))
a0.v(c6,c8)
a1=new T.q(new Float32Array(2))
a1.v(c7,c8)
a2=new T.q(new Float32Array(2))
a2.v(c6,c9)
a3=new T.q(new Float32Array(2))
a3.v(c6,c8)
a4=new T.q(new Float32Array(2))
a4.v(c7,c8)
a5=new T.q(new Float32Array(2))
a5.v(c7,c9)
a6=new T.q(new Float32Array(2))
a6.v(c7,c8)
a7=new T.q(new Float32Array(2))
a7.v(c7,c9)
a8=new T.q(new Float32Array(2))
a8.v(c6,c9)
a9=new T.q(new Float32Array(2))
a9.v(c6,c8)
b0=new T.q(new Float32Array(2))
b0.v(c6,c8)
b1=new T.q(new Float32Array(2))
b1.v(c7,c8)
b2=new T.q(new Float32Array(2))
b2.v(c7,c9)
b3=new T.q(new Float32Array(2))
b3.v(c6,c9)
b4=new T.q(new Float32Array(2))
b4.v(c6,c9)
b5=new T.q(new Float32Array(2))
b5.v(c6,c8)
b6=new T.q(new Float32Array(2))
b6.v(c7,c8)
b7=new T.q(new Float32Array(2))
b7.v(c7,c9)
b8=new T.q(new Float32Array(2))
b8.v(c7,c9)
b9=new T.q(new Float32Array(2))
b9.v(c6,c9)
c0=new T.q(new Float32Array(2))
c0.v(c6,c8)
c1=new T.q(new Float32Array(2))
c1.v(c7,c8)
c2=new G.dg(!1,[],[],[],P.Q())
c2.ag("aTexUV")
c2.ag("aNormal")
c2.cV(6)
c2.cW([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.bb("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$e4(),c3<6;++c3){c4=z[c3]
c2.bc("aNormal",[c4,c4,c4,c4])}return c2}}],["","",,D,{"^":"",
hn:function(){var z,y,x,w,v,u
z=new P.F(0,$.r,null,[null])
y=new P.e1(z,[null])
x=window.navigator
x=(x&&C.P).cG(x,!0).ad(new D.hp(y))
w=new D.hq(y)
v=H.B(x,0)
u=$.r
if(u!==C.d)w=P.en(w,u)
x.ai(new P.co(null,new P.F(0,u,null,[v]),2,null,w,[v,v]))
return z},
hh:{"^":"c;a,b,c",
d2:function(a){var z
a=document
z=W.bp
W.aj(a,"keydown",new D.hj(this),!1,z)
W.aj(a,"keyup",new D.hk(this),!1,z)},
p:{
hi:function(a){var z=P.G
z=new D.hh(P.V(null,null,null,z),P.V(null,null,null,z),P.V(null,null,null,z))
z.d2(a)
return z}}},
hj:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.R(0,J.cJ(a))
z.b.R(0,a.which)}},
hk:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.cf(0,J.cJ(a))
z.c.R(0,a.which)}},
hy:{"^":"c;a,b,c,d,e,f,r,x",
d4:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaO(a)
W.aj(y.a,y.b,new D.hA(this),!1,H.B(y,0))
y=z.gaN(a)
W.aj(y.a,y.b,new D.hB(this),!1,H.B(y,0))
y=z.gaP(a)
W.aj(y.a,y.b,new D.hC(this),!1,H.B(y,0))
z=z.gaQ(a)
W.aj(z.a,z.b,new D.hD(this),!1,H.B(z,0))},
p:{
hz:function(a){var z=P.G
z=new D.hy(P.V(null,null,null,z),P.V(null,null,null,z),P.V(null,null,null,z),0,0,0,0,0)
z.d4(a)
return z}}},
hA:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ao(a)
y=this.a
y.r=z.gcd(a).a
y.x=z.gcd(a).b
y.d=a.movementX
y.e=a.movementY}},
hB:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.ao(a)
P.a4("BUTTON "+H.b(z.gbQ(a)))
z=this.a
z.a.R(0,a.button)
z.b.R(0,a.button)}},
hC:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ao(a)
y=this.a
y.a.cf(0,z.gbQ(a))
y.c.R(0,a.button)}},
hD:{"^":"f:18;a",
$1:function(a){var z=J.e(a)
z.ao(a)
this.a.f=z.ge5(a)}},
hN:{"^":"fB;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"},
hp:{"^":"f:19;a",
$1:function(a){var z,y
z=document.createElement("video")
z.autoplay=!0
y=new W.ac(z,"playing",!1,[W.a9])
y.ge9(y).ad(new D.ho(this.a,z))
z.srcObject=a}},
ho:{"^":"f:0;a,b",
$1:function(a){return this.a.ab(0,this.b)}},
hq:{"^":"f:20;a",
$1:function(a){P.a4("E:"+("Camera open error "+H.b(a)))
this.a.ab(0,null)}}}],["","",,A,{"^":"",
bc:function(a){var z,y
z=C.O.eb(a,0,new A.kC())
if(typeof z!=="number")return H.x(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kC:{"^":"f:21;",
$2:function(a,b){var z,y
z=J.ay(a,J.a5(b))
if(typeof z!=="number")return H.x(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",an:{"^":"c;bt:a<",
D:function(a){var z,y
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
if(b instanceof T.an){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bc(this.a)},
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
return new T.j(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.an(z)
y.D(this)
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
y=new T.an(z)
y.D(this)
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
if(m===0){this.D(a)
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
return m}},M:{"^":"c;bu:a<",
D:function(a){var z,y
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
if(b instanceof T.M){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bc(this.a)},
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
return new T.ai(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.M(z)
y.D(this)
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
y=new T.M(z)
y.D(this)
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
V:function(){var z=this.a
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
cb:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},q:{"^":"c;bC:a<",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
D:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bc(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.q(z)
y.D(this)
x=b.gbC()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.q(z)
y.D(this)
x=b.gbC()
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
aa:function(a){var z=new T.q(new Float32Array(2))
z.D(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},j:{"^":"c;bD:a<",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.j){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bc(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.j(z)
y.D(this)
x=b.gbD()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.j(z)
y.D(this)
x=b.gbD()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
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
aI:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bZ:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.j(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
aa:function(a){var z=new T.j(new Float32Array(3))
z.D(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
p:{
ap:function(a,b,c){var z=new T.j(new Float32Array(3))
z.q(a,b,c)
return z}}},ai:{"^":"c;bE:a<",
D:function(a){var z,y
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
if(b instanceof T.ai){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bc(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ai(z)
y.D(this)
x=b.gbE()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ai(z)
y.D(this)
x=b.gbE()
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
gap:function(a){return this.a[3]}}}],["","",,U,{"^":"",
eH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z={}
y=document
x=new R.id(0,0,null,null,null,null)
x.d8(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fD(null,w)
y=J.fd(w,"webgl2",P.cb(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.U(P.db('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.fe(y))
if($.eC>0)P.a4("I: "+u)
J.eV(y,0,0,0,1)
J.bf(y,2929)
y=new Float32Array(3)
u=D.hi(null)
t=D.hz(w)
s=new T.M(new Float32Array(16))
s.V()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hN(15,10,0,0,new T.j(y),-0.02,u,t,s,new T.j(r),new T.j(q),new T.j(p),new T.j(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.M(new Float32Array(16))
y.V()
u=new T.M(new Float32Array(16))
u.V()
n=new G.hO(o,50,1,0.1,1000,y,u,new T.M(new Float32Array(16)),P.Q(),"perspective",!1,!0)
n.bj()
y=H.A([],[A.cg])
m=new R.i0(w,n,null,v,y,17664,0,0,0,0,"main",!1,!0)
m.d5("main",v,null)
m.eo(null)
W.aj(window,"resize",m.gen(),!1,W.a9)
u=G.dz("bg",v,$.$get$ey(),$.$get$ex())
t=[]
y.push(new A.cg(u,[],t,"bg",!1,!0))
l=G.dq("bg")
l.d.j(0,"cDepthWrite",!1)
s=new T.j(new Float32Array(3))
s.q(-1,-1,0)
r=new T.j(new Float32Array(3))
r.q(1,-1,0)
q=new T.j(new Float32Array(3))
q.q(1,1,0)
p=new T.j(new Float32Array(3))
p.q(-1,1,0)
k=new T.q(new Float32Array(2))
k.v(0,0)
j=new T.q(new Float32Array(2))
j.v(1,0)
i=new T.q(new Float32Array(2))
i.v(1,1)
h=new T.q(new Float32Array(2))
h.v(0,1)
g=new T.j(new Float32Array(3))
g.q(0,0,1)
f=new G.dg(!1,[],[],[],P.Q())
f.ag("aTexUV")
f.cX([s,r,q,p])
f.bb("aTexUV",[k,j,i,h])
f.ag("aNormal")
f.bc("aNormal",[g,g,g,g])
u=G.dh("quad",u,f)
s=new Float32Array(9)
r=new T.M(new Float32Array(16))
r.V()
q=new T.M(new Float32Array(16))
q.V()
p=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
t.push(new A.dt(l,u,[],new T.an(s),r,q,new T.j(p),new T.j(k),new T.j(j),new T.j(new Float32Array(3)),"bg",!1,!0))
u=G.dz("solid",v,$.$get$eL(),$.$get$eK())
t=[]
y.push(new A.cg(u,[n],t,"objects",!1,!0))
e=G.dq("cube")
e.d.j(0,"uColor",$.$get$d_())
y=G.dh("cube",u,B.fL(!0,1,0,1,0,0.2,0.2,0.2))
u=new Float32Array(9)
s=new T.M(new Float32Array(16))
s.V()
r=new T.M(new Float32Array(16))
r.V()
q=new Float32Array(3)
p=new Float32Array(3)
k=new Float32Array(3)
d=new A.dt(e,y,[],new T.an(u),s,r,new T.j(q),new T.j(p),new T.j(k),new T.j(new Float32Array(3)),"cube",!1,!0)
d.b5(-5,0,-5)
t.push(d)
z.a=null
z.b=null
z.c=0
P.h3([D.hn()],null,!1).ad(new U.kP(z,v,l,new U.kO(z,o,d,m,x)))},
kO:{"^":"f:22;a,b,c,d,e",
$1:function(b9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
y=this.a
x=J.aU(b9)
x.F(b9,y.c)
y.c=x.l(b9,0)
x=this.b
w=x.r1
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.b3()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.b3()
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
if(typeof u!=="number")return u.b3()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.dX(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
x.b5(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=x.k2
u=x.d.a
t=s.a
u[12]=u[12]+t[0]
u[13]=u[13]+t[1]
u[14]=u[14]+t[2]
q=u[12]
p=u[13]
o=u[14]
n=new T.j(new Float32Array(3))
n.q(0,1,0)
t=x.e
m=t.a
m[0]=u[12]
m[1]=u[13]
m[2]=u[14]
l=t.F(0,s)
l.aM(0)
k=n.bZ(l)
k.aM(0)
j=l.bZ(k)
j.aM(0)
s=k.aI(t)
m=j.aI(t)
t=l.aI(t)
i=k.a
h=i[0]
g=j.a
f=g[0]
e=l.a
d=e[0]
c=i[1]
b=g[1]
a=e[1]
i=i[2]
g=g[2]
e=e[2]
u[15]=1
u[14]=-t
u[13]=-m
u[12]=-s
u[11]=0
u[10]=e
u[9]=g
u[8]=i
u[7]=0
u[6]=a
u[5]=b
u[4]=c
u[3]=0
u[2]=d
u[1]=f
u[0]=h
u[12]=q
u[13]=p
u[14]=o
h=x.f.a
h[0]=u[2]
h[1]=u[6]
h[2]=u[10]
x=-x.k1
f=h[0]
d=h[1]
c=h[2]
a0=Math.sqrt(f*f+d*d+c*c)
q=h[0]/a0
p=h[1]/a0
o=h[2]/a0
a1=Math.cos(x)
a2=Math.sin(x)
a3=1-a1
a4=q*q*a3+a1
x=o*a2
a5=q*p*a3-x
h=p*a2
a6=q*o*a3+h
a7=p*q*a3+x
a8=p*p*a3+a1
x=q*a2
a9=p*o*a3-x
b0=o*q*a3-h
b1=o*p*a3+x
b2=o*o*a3+a1
x=u[0]
h=u[4]
c=u[8]
d=u[1]
f=u[5]
b=u[9]
a=u[2]
i=u[6]
g=u[10]
e=u[3]
s=u[7]
m=u[11]
u[0]=x*a4+h*a7+c*b0
u[1]=d*a4+f*a7+b*b0
u[2]=a*a4+i*a7+g*b0
u[3]=e*a4+s*a7+m*b0
u[4]=x*a5+h*a8+c*b1
u[5]=d*a5+f*a8+b*b1
u[6]=a*a5+i*a8+g*b1
u[7]=e*a5+s*a8+m*b1
u[8]=x*a6+h*a9+c*b2
u[9]=d*a6+f*a9+b*b2
u[10]=a*a6+i*a9+g*b2
u[11]=e*a6+s*a9+m*b2
v.c.a9(0)
v.b.a9(0)
w.e=0
w.d=0
w.f=0
w.c.a9(0)
w.b.a9(0)
b3=Math.cos(0.01)
b4=Math.sin(0.01)
w=this.c.d.a
v=w[4]
m=w[8]
s=w[5]
e=w[9]
u=w[6]
g=w[10]
i=w[7]
a=w[11]
b=-b4
w[4]=v*b3+m*b4
w[5]=s*b3+e*b4
w[6]=u*b3+g*b4
w[7]=i*b3+a*b4
w[8]=v*b+m*b3
w[9]=s*b+e*b3
w[10]=u*b+g*b3
w[11]=i*b+a*b3
b3=Math.cos(0.01)
b4=Math.sin(0.01)
a=w[0]
b=w[8]
i=-b4
g=w[1]
u=w[9]
e=w[2]
s=w[10]
m=w[3]
v=w[11]
w[0]=a*b3+b*i
w[1]=g*b3+u*i
w[2]=e*b3+s*i
w[3]=m*b3+v*i
w[8]=a*b4+b*b3
w[9]=g*b4+u*b3
w[10]=e*b4+s*b3
w[11]=m*b4+v*b3
try{x=y.b
x.bi(x.f)
w=x.d
x=x.c
J.aA(w.a,x,null)}catch(b5){z=H.I(b5)
P.a4(z)}b6=[]
this.d.cZ(b6)
b7=[]
for(x=b6.length,b8=0;b8<b6.length;b6.length===x||(0,H.D)(b6),++b8)b7.push(b6[b8].k(0))
this.e.dc(y.c,C.c.a4(b7,"<br>"))
C.a6.gdQ(window).ad(this)}},
kP:{"^":"f:23;a,b,c,d",
$1:function(a){var z,y,x,w,v,u,t
z=J.az(a,0)
y=this.a
y.a=z
if(z==null)window.alert("Could not access camera - do you have a camera installed?")
x=this.b
w=y.a
v=$.$get$dJ()
if(v==null)v=new G.dI(!1,!1,!1,!0,1,9729,9729)
u=J.eY(x.a)
t=new G.h7(w,"video",u,3553,x,v)
J.aA(x.a,3553,u)
J.fj(x.a,37440,1)
t.bi(w)
v.d1(x,3553)
J.ff(x.a)
J.aA(x.a,3553,null)
y.b=t
this.c.d.j(0,"uTexture",t)
this.d.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.di.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.hf.prototype
if(typeof a=="boolean")return J.he.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.ky=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.a2=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.b8=function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.aU=function(a){if(typeof a=="number")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.kz=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.eD=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.b9(a)}
J.ay=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ky(a).l(a,b)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).E(a,b)}
J.P=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aU(a).ae(a,b)}
J.aX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aU(a).Y(a,b)}
J.eN=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aU(a).F(a,b)}
J.az=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a2(a).h(a,b)}
J.eO=function(a,b,c,d){return J.e(a).dC(a,b,c,d)}
J.cB=function(a,b){return J.e(a).bF(a,b)}
J.eP=function(a,b,c,d){return J.e(a).bG(a,b,c,d)}
J.cC=function(a,b,c){return J.e(a).bI(a,b,c)}
J.eQ=function(a,b){return J.e(a).dS(a,b)}
J.bN=function(a,b,c){return J.e(a).bJ(a,b,c)}
J.eR=function(a,b,c){return J.e(a).bL(a,b,c)}
J.aA=function(a,b,c){return J.e(a).bM(a,b,c)}
J.be=function(a,b){return J.e(a).dV(a,b)}
J.eS=function(a,b){return J.e(a).bN(a,b)}
J.eT=function(a,b,c){return J.e(a).bO(a,b,c)}
J.cD=function(a,b,c,d){return J.e(a).bP(a,b,c,d)}
J.eU=function(a,b){return J.b8(a).bS(a,b)}
J.eV=function(a,b,c,d,e){return J.e(a).bT(a,b,c,d,e)}
J.cE=function(a,b){return J.eD(a).dY(a,b)}
J.eW=function(a,b){return J.kz(a).S(a,b)}
J.bO=function(a,b,c){return J.a2(a).e0(a,b,c)}
J.bP=function(a){return J.e(a).bV(a)}
J.eX=function(a){return J.e(a).bW(a)}
J.eY=function(a){return J.e(a).bY(a)}
J.eZ=function(a){return J.e(a).e4(a)}
J.f_=function(a,b){return J.e(a).c_(a,b)}
J.bQ=function(a,b){return J.e(a).c0(a,b)}
J.f0=function(a,b,c,d){return J.e(a).c1(a,b,c,d)}
J.f1=function(a,b,c,d,e){return J.e(a).e6(a,b,c,d,e)}
J.f2=function(a,b,c,d,e){return J.e(a).c2(a,b,c,d,e)}
J.f3=function(a,b,c,d,e,f){return J.e(a).e7(a,b,c,d,e,f)}
J.cF=function(a,b){return J.b8(a).u(a,b)}
J.bf=function(a,b){return J.e(a).c3(a,b)}
J.f4=function(a,b){return J.e(a).c4(a,b)}
J.f5=function(a){return J.e(a).e8(a)}
J.cG=function(a,b){return J.b8(a).A(a,b)}
J.cH=function(a){return J.e(a).gdR(a)}
J.f6=function(a){return J.e(a).gaJ(a)}
J.aB=function(a){return J.e(a).gN(a)}
J.a5=function(a){return J.n(a).gB(a)}
J.aY=function(a){return J.b8(a).gL(a)}
J.a6=function(a){return J.a2(a).gi(a)}
J.f7=function(a){return J.e(a).gcc(a)}
J.f8=function(a){return J.e(a).gaR(a)}
J.cI=function(a){return J.e(a).gW(a)}
J.f9=function(a){return J.e(a).ges(a)}
J.fa=function(a){return J.e(a).gcm(a)}
J.fb=function(a){return J.e(a).gap(a)}
J.cJ=function(a){return J.e(a).geA(a)}
J.bR=function(a){return J.e(a).gm(a)}
J.bS=function(a){return J.e(a).gn(a)}
J.cK=function(a){return J.e(a).gI(a)}
J.fc=function(a){return J.e(a).aX(a)}
J.fd=function(a,b,c){return J.e(a).cF(a,b,c)}
J.fe=function(a){return J.e(a).aq(a)}
J.ff=function(a){return J.e(a).aY(a)}
J.fg=function(a,b){return J.e(a).aZ(a,b)}
J.fh=function(a,b,c){return J.e(a).b_(a,b,c)}
J.cL=function(a,b,c){return J.e(a).b2(a,b,c)}
J.fi=function(a,b){return J.e(a).ca(a,b)}
J.fj=function(a,b,c){return J.e(a).ce(a,b,c)}
J.cM=function(a){return J.b8(a).em(a)}
J.fk=function(a,b){return J.e(a).sal(a,b)}
J.fl=function(a,b,c,d){return J.e(a).b8(a,b,c,d)}
J.fm=function(a,b,c,d,e,f,g){return J.e(a).ci(a,b,c,d,e,f,g)}
J.fn=function(a,b,c,d){return J.e(a).cj(a,b,c,d)}
J.bg=function(a,b,c,d){return J.e(a).ck(a,b,c,d)}
J.cN=function(a){return J.aU(a).eu(a)}
J.fo=function(a){return J.eD(a).ew(a)}
J.aC=function(a){return J.n(a).k(a)}
J.fp=function(a,b,c,d){return J.e(a).ey(a,b,c,d)}
J.fq=function(a,b,c){return J.e(a).cn(a,b,c)}
J.fr=function(a,b,c){return J.e(a).co(a,b,c)}
J.bT=function(a,b,c){return J.e(a).cp(a,b,c)}
J.fs=function(a,b,c){return J.e(a).cq(a,b,c)}
J.cO=function(a,b,c){return J.e(a).cr(a,b,c)}
J.cP=function(a,b,c){return J.e(a).cs(a,b,c)}
J.cQ=function(a,b,c){return J.e(a).ct(a,b,c)}
J.cR=function(a,b,c,d){return J.e(a).cu(a,b,c,d)}
J.cS=function(a,b,c,d){return J.e(a).cv(a,b,c,d)}
J.ft=function(a,b){return J.e(a).cz(a,b)}
J.fu=function(a,b,c){return J.e(a).ez(a,b,c)}
J.fv=function(a,b,c,d,e,f,g){return J.e(a).cA(a,b,c,d,e,f,g)}
J.fw=function(a,b,c,d,e){return J.e(a).cC(a,b,c,d,e)}
I.aw=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bV.prototype
C.n=W.fJ.prototype
C.D=W.fQ.prototype
C.E=J.h.prototype
C.c=J.aG.prototype
C.t=J.di.prototype
C.b=J.dj.prototype
C.a=J.aI.prototype
C.i=J.aJ.prototype
C.L=J.aK.prototype
C.O=H.hE.prototype
C.P=W.hF.prototype
C.Q=W.hJ.prototype
C.x=J.hP.prototype
C.C=W.ir.prototype
C.q=J.b5.prototype
C.a6=W.iz.prototype
C.d=new P.jt()
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.M=H.A(I.aw(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.N=I.aw(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.aw([])
C.o=H.A(I.aw(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.A(I.aw(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.R=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.S=new G.w("vec4","delta from light",0)
C.m=new G.w("","",0)
C.y=new G.w("vec3","vertex coordinates",0)
C.T=new G.w("vec3","vertex binormals",0)
C.z=new G.w("vec4","for wireframe",0)
C.U=new G.w("vec4","per vertex color",0)
C.V=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.X=new G.w("mat4","",4)
C.W=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.Y=new G.w("float","",4)
C.Z=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a_=new G.w("float","for bump maps",0)
C.a0=new G.w("vec2","texture uvs",0)
C.a1=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.a2=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.a3=new G.w("vec3","vertex normals",0)
C.a4=new G.w("sampler2DShadow","",0)
C.A=new G.w("vec3","per vertex color",0)
C.B=new G.w("mat3","",0)
C.a5=new G.w("vec3","vertex tangents",0)
$.Y=0
$.aD=null
$.cW=null
$.eF=null
$.es=null
$.eJ=null
$.bI=null
$.bJ=null
$.cy=null
$.ar=null
$.aQ=null
$.aR=null
$.ct=!1
$.r=C.d
$.a8=null
$.c0=null
$.d9=null
$.d8=null
$.d5=null
$.d4=null
$.d3=null
$.d2=null
$.eC=0
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
I.$lazy(y,x,w)}})(["d1","$get$d1",function(){return H.eE("_$dart_dartClosure")},"c8","$get$c8",function(){return H.eE("_$dart_js")},"dN","$get$dN",function(){return H.a_(H.bE({
toString:function(){return"$receiver$"}}))},"dO","$get$dO",function(){return H.a_(H.bE({$method$:null,
toString:function(){return"$receiver$"}}))},"dP","$get$dP",function(){return H.a_(H.bE(null))},"dQ","$get$dQ",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.a_(H.bE(void 0))},"dV","$get$dV",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dS","$get$dS",function(){return H.a_(H.dT(null))},"dR","$get$dR",function(){return H.a_(function(){try{null.$method$}catch(z){return z.message}}())},"dX","$get$dX",function(){return H.a_(H.dT(void 0))},"dW","$get$dW",function(){return H.a_(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cn","$get$cn",function(){return P.iC()},"c3","$get$c3",function(){return P.iX(null,P.b0)},"aS","$get$aS",function(){return[]},"d0","$get$d0",function(){return{}},"e7","$get$e7",function(){return P.cc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cq","$get$cq",function(){return P.Q()},"dD","$get$dD",function(){return new G.dL(1281,0,4294967295)},"cV","$get$cV",function(){return new G.dK(1281,1281,1281)},"W","$get$W",function(){return P.cb(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.U,"aPosition",C.y,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.S,"vCenter",C.z,"vDepth",C.Z,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a4,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a2,"uAnimationTable",C.h,"uTime",C.a1,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.f,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"dJ","$get$dJ",function(){var z=G.it()
z.b=!0
return z},"d_","$get$d_",function(){return T.ap(1,0,0)},"eA","$get$eA",function(){var z=G.bv("uv-passthru")
z.ba(["aPosition","aTexUV"])
z.bd(["vTexUV"])
z.ah(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"ey","$get$ey",function(){return $.$get$eA()},"ex","$get$ex",function(){var z=G.bv("copyF")
z.bd(["vTexUV"])
z.at(["uTexture"])
z.ah(["oFragColor = texture(uTexture, vTexUV);"])
return z},"eL","$get$eL",function(){var z=G.bv("SolidColor")
z.ba(["aPosition"])
z.at(["uPerspectiveViewMatrix","uModelMatrix"])
z.ah(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eK","$get$eK",function(){var z=G.bv("SolidColorF")
z.at(["uColor"])
z.ah(["oFragColor = vec4( uColor, 1.0 );"])
return z},"e4","$get$e4",function(){return[T.ap(0,0,1),T.ap(0,0,-1),T.ap(0,1,0),T.ap(0,-1,0),T.ap(1,0,0),T.ap(-1,0,0)]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.u},{func:1,args:[W.N]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.G]},{func:1,args:[W.bp]},{func:1,ret:P.cv,args:[W.al,P.l,P.l,W.cp]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aO]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aO]},{func:1,v:true,args:[W.u,W.u]},{func:1,v:true,args:[W.a9]},{func:1,args:[W.aP]},{func:1,args:[W.br]},{func:1,args:[P.c]},{func:1,args:[P.G,P.c]},{func:1,v:true,args:[P.aV]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.kU(d||a)
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
Isolate.aw=a.aw
Isolate.au=a.au
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
if(typeof dartMainRunner==="function")dartMainRunner(U.eH,[])
else U.eH([])})})()
//# sourceMappingURL=camera_overlay.dart.js.map
