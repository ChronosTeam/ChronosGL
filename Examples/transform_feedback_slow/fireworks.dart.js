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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bY"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bY"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bY(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aj=function(){}
var dart=[["","",,H,{"^":"",l9:{"^":"c;a"}}],["","",,J,{"^":"",
p:function(a){return void 0},
c3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aX:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c1==null){H.jQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dm("Return interceptor for "+H.a(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bE()]
if(v!=null)return v
v=H.jU(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$bE(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
e:{"^":"c;",
F:function(a,b){return a===b},
gB:function(a){return H.az(a)},
k:["cw",function(a){return"Instance of '"+H.aA(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fv:{"^":"e;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isbX:1},
cI:{"^":"e;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isaR:1},
bF:{"^":"e;",
gB:function(a){return 0},
k:["cA",function(a){return String(a)}]},
fY:{"^":"bF;"},
aV:{"^":"bF;"},
ay:{"^":"bF;",
k:function(a){var z=a[$.$get$ct()]
return z==null?this.cA(a):J.aq(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
au:{"^":"e;$ti",
L:function(a,b){var z,y
if(!!a.fixed$length)H.M(P.q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.J)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.F(a))}},
a5:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.a(a[x])
if(x>=z)return H.h(y,x)
y[x]=w}return y.join(b)},
aT:function(a,b){return H.d2(a,b,null,H.y(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
cp:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.M(P.q("setRange"))
P.h7(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.p(d)
if(!!y.$isi){x=e
w=d}else{w=y.aT(d,e).e7(0,!1)
x=0}y=J.a3(w)
if(x+z>y.gi(w))throw H.b(H.fs())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
aa:function(a,b,c,d){return this.cp(a,b,c,d,0)},
bn:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.F(a))}return!1},
cq:function(a,b){if(!!a.immutable$list)H.M(P.q("sort"))
H.hk(a,J.jo())},
aU:function(a){return this.cq(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.D(a[z],b))return!0
return!1},
k:function(a){return P.bD(a,"[","]")},
gH:function(a){return new J.eP(a,a.length,0,null,[H.y(a,0)])},
gB:function(a){return H.az(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.M(P.q("set length"))
if(b<0)throw H.b(P.af(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ab(a,b))
if(b>=a.length||b<0)throw H.b(H.ab(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.M(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ab(a,b))
if(b>=a.length||b<0)throw H.b(H.ab(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.a.n(a.length,C.a.gi(b))
y=H.A([],[H.y(a,0)])
this.si(y,z)
this.aa(y,0,a.length,a)
this.aa(y,a.length,z,b)
return y},
$ism:1,
$asm:I.aj,
$isi:1,
p:{
av:function(a){a.fixed$length=Array
return a},
l7:[function(a,b){return J.ee(a,b)},"$2","jo",8,0,20]}},
l8:{"^":"au;$ti"},
eP:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.J(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aw:{"^":"e;",
O:function(a,b){var z
if(typeof b!=="number")throw H.b(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gah(b)
if(this.gah(a)===z)return 0
if(this.gah(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gah:function(a){return a===0?1/a<0:a<0},
e6:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.q(""+a+".toInt()"))},
dD:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.q(""+a+".ceil()"))},
dE:function(a,b,c){if(this.O(b,c)>0)throw H.b(H.X(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
e9:function(a,b){var z
if(b>20)throw H.b(P.af(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gah(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a-b},
cC:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bh(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bh(a,b)},
bh:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.q("Result of truncating division is "+H.a(z)+": "+H.a(a)+" ~/ "+b))},
bf:function(a,b){var z
if(a>0)z=this.dk(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dk:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a<b},
a7:function(a,b){if(typeof b!=="number")throw H.b(H.X(b))
return a>b},
$isbn:1,
$isaI:1},
cH:{"^":"aw;",$isH:1},
cG:{"^":"aw;"},
ax:{"^":"e;",
dF:function(a,b){if(b>=a.length)H.M(H.ab(a,b))
return a.charCodeAt(b)},
b8:function(a,b){if(b>=a.length)throw H.b(H.ab(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.b(P.eO(b,null,null))
return a+b},
cs:function(a,b,c){var z
if(c>a.length)throw H.b(P.af(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cr:function(a,b){return this.cs(a,b,0)},
aW:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.M(H.X(c))
if(b<0)throw H.b(P.bb(b,null,null))
if(typeof c!=="number")return H.G(c)
if(b>c)throw H.b(P.bb(b,null,null))
if(c>a.length)throw H.b(P.bb(c,null,null))
return a.substring(b,c)},
cu:function(a,b){return this.aW(a,b,null)},
e8:function(a){return a.toLowerCase()},
dH:function(a,b,c){if(c>a.length)throw H.b(P.af(c,0,a.length,null,null))
return H.jZ(a,b,c)},
O:function(a,b){var z
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
$ism:1,
$asm:I.aj,
$isl:1}}],["","",,H,{"^":"",
fr:function(){return new P.be("No element")},
ft:function(){return new P.be("Too many elements")},
fs:function(){return new P.be("Too few elements")},
hk:function(a,b){H.aT(a,0,J.Z(a)-1,b)},
aT:function(a,b,c,d){if(c-b<=32)H.hj(a,b,c,d)
else H.hi(a,b,c,d)},
hj:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a3(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.E(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hi:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.G(c-b+1,6)
y=b+z
x=c-z
w=C.a.G(b+c,2)
v=w-z
u=w+z
t=J.a3(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.E(d.$2(s,r),0)){n=r
r=s
s=n}if(J.E(d.$2(p,o),0)){n=o
o=p
p=n}if(J.E(d.$2(s,q),0)){n=q
q=s
s=n}if(J.E(d.$2(r,q),0)){n=q
q=r
r=n}if(J.E(d.$2(s,p),0)){n=p
p=s
s=n}if(J.E(d.$2(q,p),0)){n=p
p=q
q=n}if(J.E(d.$2(r,o),0)){n=o
o=r
r=n}if(J.E(d.$2(r,q),0)){n=q
q=r
r=n}if(J.E(d.$2(p,o),0)){n=o
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
h=J.p(i)
if(h.F(i,0))continue
if(h.R(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aH(i)
if(h.a7(i,0)){--l
continue}else{g=l-1
if(h.R(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aL(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.E(d.$2(j,p),0))for(;!0;)if(J.E(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aL(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aT(a,b,m-2,d)
H.aT(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.D(d.$2(t.h(a,m),r),0);)++m
for(;J.D(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.D(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.D(d.$2(j,p),0))for(;!0;)if(J.D(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aL(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aT(a,m,l,d)}else H.aT(a,m,l,d)},
bz:{"^":"b6;$ti"},
b8:{"^":"bz;$ti",
gH:function(a){return new H.cN(this,this.gi(this),0,null,[H.c_(this,"b8",0)])},
w:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.b(P.F(this))}},
aH:function(a,b){return this.cz(0,b)}},
hx:{"^":"b8;a,b,c,$ti",
cP:function(a,b,c,d){},
gd7:function(){var z=J.Z(this.a)
return z},
gdl:function(){var z,y
z=J.Z(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.Z(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdl()+b
if(b>=0){y=this.gd7()
if(typeof y!=="number")return H.G(y)
y=z>=y}else y=!0
if(y)throw H.b(P.w(b,this,"index",null,null))
return J.ca(this.a,z)},
e7:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a3(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.h(t,s)
t[s]=u
if(x.gi(y)<w)throw H.b(P.F(this))}return t},
p:{
d2:function(a,b,c,d){var z=new H.hx(a,b,c,[d])
z.cP(a,b,c,d)
return z}}},
cN:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a3(z)
x=y.gi(z)
if(this.b!==x)throw H.b(P.F(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
fE:{"^":"b8;a,b,$ti",
gi:function(a){return J.Z(this.a)},
q:function(a,b){return this.b.$1(J.ca(this.a,b))},
$asbz:function(a,b){return[b]},
$asb8:function(a,b){return[b]},
$asb6:function(a,b){return[b]}},
dp:{"^":"b6;a,b,$ti",
gH:function(a){return new H.hF(J.aN(this.a),this.b,this.$ti)}},
hF:{"^":"fu;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
b4:{"^":"c;$ti"}}],["","",,H,{"^":"",
jI:function(a){return init.types[a]},
jT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.p(a).$isn},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aq(a)
if(typeof z!=="string")throw H.b(H.X(a))
return z},
az:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aA:function(a){var z,y,x,w,v,u,t,s,r
z=J.p(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.p(a).$isaV){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.b8(w,0)===36)w=C.j.cu(w,1)
r=H.c2(H.ak(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
C:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h5:function(a){return a.b?H.C(a).getUTCFullYear()+0:H.C(a).getFullYear()+0},
h3:function(a){return a.b?H.C(a).getUTCMonth()+1:H.C(a).getMonth()+1},
h_:function(a){return a.b?H.C(a).getUTCDate()+0:H.C(a).getDate()+0},
h0:function(a){return a.b?H.C(a).getUTCHours()+0:H.C(a).getHours()+0},
h2:function(a){return a.b?H.C(a).getUTCMinutes()+0:H.C(a).getMinutes()+0},
h4:function(a){return a.b?H.C(a).getUTCSeconds()+0:H.C(a).getSeconds()+0},
h1:function(a){return a.b?H.C(a).getUTCMilliseconds()+0:H.C(a).getMilliseconds()+0},
G:function(a){throw H.b(H.X(a))},
h:function(a,b){if(a==null)J.Z(a)
throw H.b(H.ab(a,b))},
ab:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,"index",null)
z=J.Z(a)
if(!(b<0)){if(typeof z!=="number")return H.G(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bb(b,"index",null)},
X:function(a){return new P.ad(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.cU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e4})
z.name=""}else z.toString=H.e4
return z},
e4:function(){return J.aq(this.dartException)},
M:function(a){throw H.b(a)},
J:function(a){throw H.b(P.F(a))},
N:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.bf(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bG(H.a(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cT(H.a(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$d8()
u=$.$get$d9()
t=$.$get$da()
s=$.$get$db()
r=$.$get$df()
q=$.$get$dg()
p=$.$get$dd()
$.$get$dc()
o=$.$get$di()
n=$.$get$dh()
m=v.M(y)
if(m!=null)return z.$1(H.bG(y,m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.bG(y,m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cT(y,m))}}return z.$1(new H.hD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cZ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ad(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cZ()
return a},
ac:function(a){var z
if(a==null)return new H.dF(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dF(a,null)},
jE:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
jS:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cC("Unsupported number of arguments for wrapped closure"))},
a2:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jS)
a.$identity=z
return z},
f_:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.p(c).$isi){z.$reflectionInfo=c
x=H.h9(z).r}else x=c
w=d?Object.create(new H.hm().constructor.prototype):Object.create(new H.bw(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Q
$.Q=J.ao(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cr(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jI,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cq:H.bx
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cr(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
eX:function(a,b,c,d){var z=H.bx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cr:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eX(y,!w,z,b)
if(y===0){w=$.Q
$.Q=J.ao(w,1)
u="self"+H.a(w)
w="return function(){var "+u+" = this."
v=$.ar
if(v==null){v=H.b0("self")
$.ar=v}return new Function(w+H.a(v)+";return "+u+"."+H.a(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Q
$.Q=J.ao(w,1)
t+=H.a(w)
w="return function("+t+"){return this."
v=$.ar
if(v==null){v=H.b0("self")
$.ar=v}return new Function(w+H.a(v)+"."+H.a(z)+"("+t+");}")()},
eY:function(a,b,c,d){var z,y
z=H.bx
y=H.cq
switch(b?-1:a){case 0:throw H.b(H.he("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.ar
if(z==null){z=H.b0("self")
$.ar=z}y=$.cp
if(y==null){y=H.b0("receiver")
$.cp=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
y=$.Q
$.Q=J.ao(y,1)
return new Function(z+H.a(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
y=$.Q
$.Q=J.ao(y,1)
return new Function(z+H.a(y)+"}")()},
bY:function(a,b,c,d,e,f){var z,y
z=J.av(b)
y=!!J.p(c).$isi?J.av(c):c
return H.f_(a,z,y,!!d,e,f)},
jX:function(a,b){var z=J.a3(b)
throw H.b(H.eV(a,z.aW(b,3,z.gi(b))))},
a4:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else z=!0
if(z)return a
H.jX(a,b)},
bZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dU:function(a,b){var z,y
if(a==null)return!1
z=H.bZ(J.p(a))
if(z==null)y=!1
else y=H.dZ(z,b)
return y},
jw:function(a){var z
if(a instanceof H.f){z=H.bZ(J.p(a))
if(z!=null)return H.c4(z,null)
return"Closure"}return H.aA(a)},
k_:function(a){throw H.b(new P.f3(a))},
dX:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
ak:function(a){if(a==null)return
return a.$ti},
mw:function(a,b,c){return H.aK(a["$as"+H.a(c)],H.ak(b))},
aY:function(a,b,c,d){var z=H.aK(a["$as"+H.a(c)],H.ak(b))
return z==null?null:z[d]},
c_:function(a,b,c){var z=H.aK(a["$as"+H.a(b)],H.ak(a))
return z==null?null:z[c]},
y:function(a,b){var z=H.ak(a)
return z==null?null:z[b]},
c4:function(a,b){var z=H.an(a,b)
return z},
an:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.c2(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.a(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.an(z,b)
return H.jn(a,b)}return"unknown-reified-type"},
jn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.an(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.an(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.an(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jD(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.an(r[p],b)+(" "+H.a(p))}w+="}"}return"("+w+") => "+z},
c2:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bO("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.an(u,c)}return w?"":"<"+z.k(0)+">"},
jH:function(a){var z,y,x
if(a instanceof H.f){z=H.bZ(J.p(a))
if(z!=null)return H.c4(z,null)}y=J.p(a).constructor.builtin$cls
if(a==null)return y
x=H.c2(a.$ti,0,null)
return y+x},
aK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dT:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ak(a)
y=J.p(a)
if(y[b]==null)return!1
return H.dR(H.aK(y[d],z),c)},
dR:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.I(a[y],b[y]))return!1
return!0},
mu:function(a,b,c){return a.apply(b,H.aK(J.p(b)["$as"+H.a(c)],H.ak(b)))},
I:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aR")return!0
if('func' in b)return H.dZ(a,b)
if('func' in a)return b.builtin$cls==="l_"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.c4(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dR(H.aK(u,z),x)},
dQ:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.I(z,v)||H.I(v,z)))return!1}return!0},
jx:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.av(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.I(v,u)||H.I(u,v)))return!1}return!0},
dZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.I(z,y)||H.I(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dQ(x,w,!1))return!1
if(!H.dQ(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.I(o,n)||H.I(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.I(o,n)||H.I(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.I(o,n)||H.I(n,o)))return!1}}return H.jx(a.named,b.named)},
mv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jU:function(a){var z,y,x,w,v,u
z=$.dY.$1(a)
y=$.bm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dP.$2(a,z)
if(z!=null){y=$.bm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bq(x)
$.bm[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bp[z]=x
return x}if(v==="-"){u=H.bq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e0(a,x)
if(v==="*")throw H.b(P.dm(z))
if(init.leafTags[z]===true){u=H.bq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e0(a,x)},
e0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c3(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bq:function(a){return J.c3(a,!1,null,!!a.$isn)},
jW:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bq(z)
else return J.c3(z,c,null,null)},
jQ:function(){if(!0===$.c1)return
$.c1=!0
H.jR()},
jR:function(){var z,y,x,w,v,u,t,s
$.bm=Object.create(null)
$.bp=Object.create(null)
H.jM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e3.$1(v)
if(u!=null){t=H.jW(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jM:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.ai(C.G,H.ai(C.L,H.ai(C.v,H.ai(C.v,H.ai(C.K,H.ai(C.H,H.ai(C.I(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dY=new H.jN(v)
$.dP=new H.jO(u)
$.e3=new H.jP(t)},
ai:function(a,b){return a(b)||b},
jZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h8:{"^":"c;a,b,c,d,e,f,r,x",p:{
h9:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.av(z)
y=z[0]
x=z[1]
return new H.h8(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hB:{"^":"c;a,b,c,d,e,f",
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
U:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
de:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fV:{"^":"B;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.a(this.a)
return"NullError: method not found: '"+H.a(z)+"' on null"},
p:{
cT:function(a,b){return new H.fV(a,b==null?null:b.method)}}},
fw:{"^":"B;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.a(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.a(this.a)+")"},
p:{
bG:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fw(a,y,z?null:b.receiver)}}},
hD:{"^":"B;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k0:{"^":"f:0;a",
$1:function(a){if(!!J.p(a).$isB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dF:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaB:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aA(this).trim()+"'"},
gck:function(){return this},
gck:function(){return this}},
d3:{"^":"f;"},
hm:{"^":"d3;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bw:{"^":"d3;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bw))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.az(this.a)
else y=typeof z!=="object"?J.Y(z):H.az(z)
return(y^H.az(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.aA(z)+"'")},
p:{
bx:function(a){return a.a},
cq:function(a){return a.c},
b0:function(a){var z,y,x,w,v
z=new H.bw("self","target","receiver","name")
y=J.av(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eU:{"^":"B;a",
k:function(a){return this.a},
p:{
eV:function(a,b){return new H.eU("CastError: "+H.a(P.bB(a))+": type '"+H.jw(a)+"' is not a subtype of type '"+b+"'")}}},
hd:{"^":"B;a",
k:function(a){return"RuntimeError: "+H.a(this.a)},
p:{
he:function(a){return new H.hd(a)}}},
dj:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.Y(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.dj&&J.D(this.a,b.a)}},
cJ:{"^":"bJ;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gI:function(a){return new H.fC(this,[H.y(this,0)])},
af:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.ba(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.ba(y,b)}else return this.dW(b)},
dW:function(a){var z=this.d
if(z==null)return!1
return this.aC(this.at(z,J.Y(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ad(z,b)
x=y==null?null:y.ga4()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ad(w,b)
x=y==null?null:y.ga4()
return x}else return this.dX(b)},
dX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.at(z,J.Y(a)&0x3ffffff)
x=this.aC(y,a)
if(x<0)return
return y[x].ga4()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aw()
this.b=z}this.b4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aw()
this.c=y}this.b4(y,b,c)}else{x=this.d
if(x==null){x=this.aw()
this.d=x}w=J.Y(b)&0x3ffffff
v=this.at(x,w)
if(v==null)this.aA(x,w,[this.an(b,c)])
else{u=this.aC(v,b)
if(u>=0)v[u].sa4(c)
else v.push(this.an(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.F(this))
z=z.c}},
b4:function(a,b,c){var z=this.ad(a,b)
if(z==null)this.aA(a,b,this.an(b,c))
else z.sa4(c)},
b5:function(){this.r=this.r+1&67108863},
an:function(a,b){var z,y
z=new H.fB(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b5()
return z},
aC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].gdV(),b))return y
return-1},
k:function(a){return P.cP(this)},
ad:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aA:function(a,b,c){a[b]=c},
d5:function(a,b){delete a[b]},
ba:function(a,b){return this.ad(a,b)!=null},
aw:function(){var z=Object.create(null)
this.aA(z,"<non-identifier-key>",z)
this.d5(z,"<non-identifier-key>")
return z}},
fB:{"^":"c;dV:a<,a4:b@,c,d"},
fC:{"^":"bz;a,$ti",
gi:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.a5(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.b(P.F(z))
y=y.c}}},
a5:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.F(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jN:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
jO:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
jP:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jD:function(a){return J.av(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
aJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
jm:function(a){var z,y,x
if(!!J.p(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
W:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ab(b,a))},
fR:{"^":"e;","%":"DataView;ArrayBufferView;bK|dz|dA|cQ|dB|dC|a6"},
bK:{"^":"fR;",
gi:function(a){return a.length},
$ism:1,
$asm:I.aj,
$isn:1,
$asn:I.aj},
cQ:{"^":"dA;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
j:function(a,b,c){H.W(b,a,a.length)
a[b]=c},
$asb4:function(){return[P.bn]},
$asj:function(){return[P.bn]},
$isi:1,
$asi:function(){return[P.bn]},
"%":"Float64Array"},
a6:{"^":"dC;",
j:function(a,b,c){H.W(b,a,a.length)
a[b]=c},
$asb4:function(){return[P.H]},
$asj:function(){return[P.H]},
$isi:1,
$asi:function(){return[P.H]}},
fQ:{"^":"cQ;",$isbC:1,"%":"Float32Array"},
lo:{"^":"a6;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lp:{"^":"a6;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
$isfo:1,
"%":"Int32Array"},
lq:{"^":"a6;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lr:{"^":"a6;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ls:{"^":"a6;",
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lt:{"^":"a6;",
gi:function(a){return a.length},
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lu:{"^":"a6;",
gi:function(a){return a.length},
h:function(a,b){H.W(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dz:{"^":"bK+j;"},
dA:{"^":"dz+b4;"},
dB:{"^":"bK+j;"},
dC:{"^":"dB+b4;"}}],["","",,P,{"^":"",
hK:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jy()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a2(new P.hM(z),1)).observe(y,{childList:true})
return new P.hL(z,y,x)}else if(self.setImmediate!=null)return P.jz()
return P.jA()},
mh:[function(a){self.scheduleImmediate(H.a2(new P.hN(a),0))},"$1","jy",4,0,6],
mi:[function(a){self.setImmediate(H.a2(new P.hO(a),0))},"$1","jz",4,0,6],
mj:[function(a){P.j0(0,a)},"$1","jA",4,0,6],
jr:function(a,b){if(H.dU(a,{func:1,args:[P.aR,P.aR]})){b.toString
return a}else{b.toString
return a}},
jq:function(){var z,y
for(;z=$.ah,z!=null;){$.aF=null
y=z.b
$.ah=y
if(y==null)$.aE=null
z.a.$0()}},
mt:[function(){$.bV=!0
try{P.jq()}finally{$.aF=null
$.bV=!1
if($.ah!=null)$.$get$bQ().$1(P.dS())}},"$0","dS",0,0,3],
dN:function(a){var z=new P.dq(a,null)
if($.ah==null){$.aE=z
$.ah=z
if(!$.bV)$.$get$bQ().$1(P.dS())}else{$.aE.b=z
$.aE=z}},
jv:function(a){var z,y,x
z=$.ah
if(z==null){P.dN(a)
$.aF=$.aE
return}y=new P.dq(a,null)
x=$.aF
if(x==null){y.b=z
$.aF=y
$.ah=y}else{y.b=x.b
x.b=y
$.aF=y
if(y.b==null)$.aE=y}},
jY:function(a){var z=$.v
if(C.h===z){P.bl(null,null,C.h,a)
return}z.toString
P.bl(null,null,z,z.bq(a))},
ju:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.N(u)
y=H.ac(u)
$.v.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ap(x)
w=t
v=x.gW()
c.$2(w,v)}}},
ji:function(a,b,c,d){var z=a.dC(0)
if(!!J.p(z).$isaQ&&z!==$.$get$cF())z.ed(new P.jl(b,c,d))
else b.a0(c,d)},
jj:function(a,b){return new P.jk(a,b)},
hI:function(){return $.v},
bk:function(a,b,c,d,e){var z={}
z.a=d
P.jv(new P.js(z,e))},
dL:function(a,b,c,d){var z,y
y=$.v
if(y===c)return d.$0()
$.v=c
z=y
try{y=d.$0()
return y}finally{$.v=z}},
dM:function(a,b,c,d,e){var z,y
y=$.v
if(y===c)return d.$1(e)
$.v=c
z=y
try{y=d.$1(e)
return y}finally{$.v=z}},
jt:function(a,b,c,d,e,f){var z,y
y=$.v
if(y===c)return d.$2(e,f)
$.v=c
z=y
try{y=d.$2(e,f)
return y}finally{$.v=z}},
bl:function(a,b,c,d){var z=C.h!==c
if(z)d=!(!z||!1)?c.bq(d):c.dz(d)
P.dN(d)},
hM:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hL:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hN:{"^":"f:1;a",
$0:function(){this.a.$0()}},
hO:{"^":"f:1;a",
$0:function(){this.a.$0()}},
j_:{"^":"c;a,b,c",
d1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a2(new P.j1(this,b),0),a)
else throw H.b(P.q("`setTimeout()` not found."))},
p:{
j0:function(a,b){var z=new P.j_(!0,null,0)
z.d1(a,b)
return z}}},
j1:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kc:{"^":"c;$ti"},
hR:{"^":"c;$ti"},
iV:{"^":"hR;a,$ti",
dG:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.bN("Future already completed"))
z.ac(b)}},
ds:{"^":"c;ay:a<,b,c,d,e,$ti",
gds:function(){return this.b.b},
gbL:function(){return(this.c&1)!==0},
gdU:function(){return(this.c&2)!==0},
gbK:function(){return this.c===8},
dS:function(a){return this.b.b.aF(this.d,a)},
dY:function(a){if(this.c!==6)return!0
return this.b.b.aF(this.d,J.ap(a))},
dR:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.dU(z,{func:1,args:[P.c,P.aB]}))return x.e2(z,y.gK(a),a.gW())
else return x.aF(z,y.gK(a))},
dT:function(){return this.b.b.bX(this.d)}},
a9:{"^":"c;bg:a<,b,dg:c<,$ti",
cX:function(a,b){this.a=4
this.c=a},
gda:function(){return this.a===2},
gau:function(){return this.a>=4},
c1:function(a,b){var z,y,x
z=$.v
if(z!==C.h){z.toString
if(b!=null)b=P.jr(b,z)}y=new P.a9(0,z,null,[null])
x=b==null?1:3
this.ao(new P.ds(null,y,x,a,b,[H.y(this,0),null]))
return y},
c0:function(a){return this.c1(a,null)},
ed:function(a){var z,y
z=$.v
y=new P.a9(0,z,null,this.$ti)
if(z!==C.h)z.toString
z=H.y(this,0)
this.ao(new P.ds(null,y,8,a,null,[z,z]))
return y},
ao:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gau()){y.ao(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bl(null,null,z,new P.i6(this,a))}},
bd:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gay()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gau()){v.bd(a)
return}this.a=v.a
this.c=v.c}z.a=this.az(a)
y=this.b
y.toString
P.bl(null,null,y,new P.ib(z,this))}},
ae:function(){var z=this.c
this.c=null
return this.az(z)},
az:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gay()
z.a=y}return y},
ac:function(a){var z,y,x
z=this.$ti
y=H.dT(a,"$isaQ",z,"$asaQ")
if(y){z=H.dT(a,"$isa9",z,null)
if(z)P.dt(a,this)
else P.i7(a,this)}else{x=this.ae()
this.a=4
this.c=a
P.aD(this,x)}},
a0:[function(a,b){var z=this.ae()
this.a=8
this.c=new P.b_(a,b)
P.aD(this,z)},function(a){return this.a0(a,null)},"ef","$2","$1","gb9",4,2,13],
$isaQ:1,
p:{
i7:function(a,b){var z,y,x
b.a=1
try{a.c1(new P.i8(b),new P.i9(b))}catch(x){z=H.N(x)
y=H.ac(x)
P.jY(new P.ia(b,z,y))}},
dt:function(a,b){var z
for(;a.gda();)a=a.c
if(a.gau()){z=b.ae()
b.a=a.a
b.c=a.c
P.aD(b,z)}else{z=b.c
b.a=2
b.c=a
a.bd(z)}},
aD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ap(v)
t=v.gW()
y.toString
P.bk(null,null,y,u,t)}return}for(;b.gay()!=null;b=s){s=b.a
b.a=null
P.aD(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbL()||b.gbK()){q=b.gds()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.ap(v)
t=v.gW()
y.toString
P.bk(null,null,y,u,t)
return}p=$.v
if(p==null?q!=null:p!==q)$.v=q
else p=null
if(b.gbK())new P.ie(z,x,b,w).$0()
else if(y){if(b.gbL())new P.id(x,b,r).$0()}else if(b.gdU())new P.ic(z,x,b).$0()
if(p!=null)$.v=p
y=x.b
if(!!J.p(y).$isaQ){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.az(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dt(y,o)
return}}o=b.b
b=o.ae()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
i6:{"^":"f:1;a,b",
$0:function(){P.aD(this.a,this.b)}},
ib:{"^":"f:1;a,b",
$0:function(){P.aD(this.b,this.a.a)}},
i8:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.ac(a)}},
i9:{"^":"f:14;a",
$2:function(a,b){this.a.a0(a,b)},
$1:function(a){return this.$2(a,null)}},
ia:{"^":"f:1;a,b,c",
$0:function(){this.a.a0(this.b,this.c)}},
ie:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dT()}catch(w){y=H.N(w)
x=H.ac(w)
if(this.d){v=J.ap(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b_(y,x)
u.a=!0
return}if(!!J.p(z).$isaQ){if(z instanceof P.a9&&z.gbg()>=4){if(z.gbg()===8){v=this.b
v.b=z.gdg()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.c0(new P.ig(t))
v.a=!1}}},
ig:{"^":"f:0;a",
$1:function(a){return this.a}},
id:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dS(this.c)}catch(x){z=H.N(x)
y=H.ac(x)
w=this.a
w.b=new P.b_(z,y)
w.a=!0}}},
ic:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dY(z)===!0&&w.e!=null){v=this.b
v.b=w.dR(z)
v.a=!1}}catch(u){y=H.N(u)
x=H.ac(u)
w=this.a
v=J.ap(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b_(y,x)
s.a=!0}}},
dq:{"^":"c;a,b"},
d0:{"^":"c;$ti",
w:function(a,b){var z,y
z={}
y=new P.a9(0,$.v,null,[null])
z.a=null
z.a=this.bO(new P.ht(z,this,b,y),!0,new P.hu(y),y.gb9())
return y},
gi:function(a){var z,y
z={}
y=new P.a9(0,$.v,null,[P.H])
z.a=0
this.bO(new P.hv(z),!0,new P.hw(z,y),y.gb9())
return y}},
ht:{"^":"f;a,b,c,d",
$1:function(a){P.ju(new P.hr(this.c,a),new P.hs(),P.jj(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.c_(this.b,"d0",0)]}}},
hr:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hs:{"^":"f:0;",
$1:function(a){}},
hu:{"^":"f:1;a",
$0:function(){this.a.ac(null)}},
hv:{"^":"f:0;a",
$1:function(a){++this.a.a}},
hw:{"^":"f:1;a,b",
$0:function(){this.b.ac(this.a.a)}},
hq:{"^":"c;$ti"},
jl:{"^":"f:1;a,b,c",
$0:function(){return this.a.a0(this.b,this.c)}},
jk:{"^":"f:15;a,b",
$2:function(a,b){P.ji(this.a,this.b,a,b)}},
b_:{"^":"c;K:a>,W:b<",
k:function(a){return H.a(this.a)},
$isB:1},
j7:{"^":"c;"},
js:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.aq(y)
throw x}},
iE:{"^":"j7;",
e3:function(a){var z,y,x
try{if(C.h===$.v){a.$0()
return}P.dL(null,null,this,a)}catch(x){z=H.N(x)
y=H.ac(x)
P.bk(null,null,this,z,y)}},
e4:function(a,b){var z,y,x
try{if(C.h===$.v){a.$1(b)
return}P.dM(null,null,this,a,b)}catch(x){z=H.N(x)
y=H.ac(x)
P.bk(null,null,this,z,y)}},
dz:function(a){return new P.iG(this,a)},
bq:function(a){return new P.iF(this,a)},
dA:function(a){return new P.iH(this,a)},
bX:function(a){if($.v===C.h)return a.$0()
return P.dL(null,null,this,a)},
aF:function(a,b){if($.v===C.h)return a.$1(b)
return P.dM(null,null,this,a,b)},
e2:function(a,b,c){if($.v===C.h)return a.$2(b,c)
return P.jt(null,null,this,a,b,c)}},
iG:{"^":"f:1;a,b",
$0:function(){return this.a.bX(this.b)}},
iF:{"^":"f:1;a,b",
$0:function(){return this.a.e3(this.b)}},
iH:{"^":"f:0;a,b",
$1:function(a){return this.a.e4(this.b,a)}}}],["","",,P,{"^":"",
S:function(){return new H.cJ(0,null,null,null,null,null,0,[null,null])},
cL:function(a){return H.jE(a,new H.cJ(0,null,null,null,null,null,0,[null,null]))},
O:function(a,b,c,d){return new P.ip(0,null,null,null,null,null,0,[d])},
fq:function(a,b,c){var z,y
if(P.bW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aG()
y.push(a)
try{P.jp(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.d1(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bD:function(a,b,c){var z,y,x
if(P.bW(a))return b+"..."+c
z=new P.bO(b)
y=$.$get$aG()
y.push(a)
try{x=z
x.a=P.d1(x.gX(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
bW:function(a){var z,y
for(z=0;y=$.$get$aG(),z<y.length;++z)if(a===y[z])return!0
return!1},
jp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.a(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){b.push(H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bH:function(a,b){var z,y
z=P.O(null,null,null,b)
for(y=J.aN(a);y.t();)z.N(0,y.gA(y))
return z},
cP:function(a){var z,y,x
z={}
if(P.bW(a))return"{...}"
y=new P.bO("")
try{$.$get$aG().push(a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.cb(a,new P.fD(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.$get$aG()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
ip:{"^":"ii;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.bT(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.d4(b)},
d4:function(a){var z=this.d
if(z==null)return!1
return this.as(z[this.ap(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.b(P.F(this))
z=z.b}},
N:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bU()
this.b=z}return this.b6(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bU()
this.c=y}return this.b6(y,b)}else return this.d2(0,b)},
d2:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bU()
this.d=z}y=this.ap(b)
x=z[y]
if(x==null)z[y]=[this.ax(b)]
else{if(this.as(x,b)>=0)return!1
x.push(this.ax(b))}return!0},
bW:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.be(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.be(this.c,b)
else return this.dd(0,b)},
dd:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ap(b)]
x=this.as(y,b)
if(x<0)return!1
this.bi(y.splice(x,1)[0])
return!0},
a3:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.av()}},
b6:function(a,b){if(a[b]!=null)return!1
a[b]=this.ax(b)
return!0},
be:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bi(z)
delete a[b]
return!0},
av:function(){this.r=this.r+1&67108863},
ax:function(a){var z,y
z=new P.iq(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.av()
return z},
bi:function(a){var z,y
z=a.gdc()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.av()},
ap:function(a){return J.Y(a)&0x3ffffff},
as:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].gd6(),b))return y
return-1},
p:{
bU:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iq:{"^":"c;d6:a<,b,dc:c<"},
bT:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.F(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
ii:{"^":"hf;$ti"},
lc:{"^":"c;$ti"},
cM:{"^":"dy;$ti",$isi:1},
j:{"^":"c;$ti",
gH:function(a){return new H.cN(a,this.gi(a),0,null,[H.aY(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.b(P.F(a))}},
dQ:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.F(a))}return y},
aT:function(a,b){return H.d2(a,b,null,H.aY(this,a,"j",0))},
n:function(a,b){var z=H.A([],[H.aY(this,a,"j",0)])
C.d.si(z,C.a.n(this.gi(a),C.a.gi(b)))
C.d.aa(z,0,this.gi(a),a)
C.d.aa(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bD(a,"[","]")}},
bJ:{"^":"K;$ti"},
fD:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.a(a)
z.a=y+": "
z.a+=H.a(b)}},
K:{"^":"c;$ti",
w:function(a,b){var z,y
for(z=J.aN(this.gI(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.Z(this.gI(a))},
k:function(a){return P.cP(a)}},
hg:{"^":"c;$ti",
L:function(a,b){var z
for(z=J.aN(b);z.t();)this.N(0,z.gA(z))},
k:function(a){return P.bD(this,"{","}")},
w:function(a,b){var z
for(z=new P.bT(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hf:{"^":"hg;$ti"},
dy:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fg:function(a){var z=J.p(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aA(a)+"'"},
bB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fg(a)},
cC:function(a){return new P.i3(a)},
am:function(a){H.aJ(H.a(a))},
bX:{"^":"c;"},
"+bool":0,
cu:{"^":"c;dr:a<,b",
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.cu))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.a.O(this.a,b.gdr())},
gB:function(a){var z=this.a
return(z^C.a.bf(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.f4(H.h5(this))
y=P.aO(H.h3(this))
x=P.aO(H.h_(this))
w=P.aO(H.h0(this))
v=P.aO(H.h2(this))
u=P.aO(H.h4(this))
t=P.f5(H.h1(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
f4:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aO:function(a){if(a>=10)return""+a
return"0"+a}}},
bn:{"^":"aI;"},
"+double":0,
aP:{"^":"c;a1:a<",
n:function(a,b){return new P.aP(C.a.n(this.a,b.ga1()))},
J:function(a,b){return new P.aP(this.a-b.ga1())},
R:function(a,b){return C.a.R(this.a,b.ga1())},
a7:function(a,b){return C.a.a7(this.a,b.ga1())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.a.O(this.a,b.ga1())},
k:function(a){var z,y,x,w,v
z=new P.fc()
y=this.a
if(y<0)return"-"+new P.aP(0-y).k(0)
x=z.$1(C.a.G(y,6e7)%60)
w=z.$1(C.a.G(y,1e6)%60)
v=new P.fb().$1(y%1e6)
return""+C.a.G(y,36e8)+":"+H.a(x)+":"+H.a(w)+"."+H.a(v)},
p:{
fa:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fb:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fc:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
B:{"^":"c;",
gW:function(){return H.ac(this.$thrownJsError)}},
cU:{"^":"B;",
k:function(a){return"Throw of null."}},
ad:{"^":"B;a,b,c,d",
gar:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaq:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gar()+y+x
if(!this.a)return w
v=this.gaq()
u=P.bB(this.b)
return w+v+": "+H.a(u)},
p:{
eO:function(a,b,c){return new P.ad(!0,a,b,c)}}},
bL:{"^":"ad;e,f,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else if(x>z)y=": Not in range "+H.a(z)+".."+H.a(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.a(z)}return y},
p:{
h6:function(a){return new P.bL(null,null,!1,null,null,a)},
bb:function(a,b,c){return new P.bL(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.bL(b,c,!0,a,d,"Invalid value")},
h7:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.af(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.af(b,a,c,"end",f))
return b}}},
fn:{"^":"ad;e,i:f>,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){if(J.aL(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
p:{
w:function(a,b,c,d,e){var z=e!=null?e:J.Z(b)
return new P.fn(b,z,!0,a,c,"Index out of range")}}},
hE:{"^":"B;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
q:function(a){return new P.hE(a)}}},
hC:{"^":"B;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.a(z):"UnimplementedError"},
p:{
dm:function(a){return new P.hC(a)}}},
be:{"^":"B;a",
k:function(a){return"Bad state: "+this.a},
p:{
bN:function(a){return new P.be(a)}}},
f0:{"^":"B;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.bB(z))+"."},
p:{
F:function(a){return new P.f0(a)}}},
cZ:{"^":"c;",
k:function(a){return"Stack Overflow"},
gW:function(){return},
$isB:1},
f3:{"^":"B;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.a(z)+"' during its initialization"}},
ky:{"^":"c;"},
i3:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
H:{"^":"aI;"},
"+int":0,
b6:{"^":"c;$ti",
aH:["cz",function(a,b){return new H.dp(this,b,[H.c_(this,"b6",0)])}],
w:function(a,b){var z
for(z=this.gH(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gH(this)
for(y=0;z.t();)++y
return y},
gV:function(a){var z,y
z=this.gH(this)
if(!z.t())throw H.b(H.fr())
y=z.gA(z)
if(z.t())throw H.b(H.ft())
return y},
q:function(a,b){var z,y,x
if(b<0)H.M(P.af(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.w(b,this,"index",null,y))},
k:function(a){return P.fq(this,"(",")")}},
fu:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
bI:{"^":"c;$ti"},
aR:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aI:{"^":"c;"},
"+num":0,
c:{"^":";",
F:function(a,b){return this===b},
gB:function(a){return H.az(this)},
k:function(a){return"Instance of '"+H.aA(this)+"'"},
toString:function(){return this.k(this)}},
aB:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
bO:{"^":"c;X:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d1:function(a,b,c){var z=J.aN(b)
if(!z.t())return a
if(c.length===0){do a+=H.a(z.gA(z))
while(z.t())}else{a+=H.a(z.gA(z))
for(;z.t();)a=a+c+H.a(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fd:function(a,b,c){var z,y
z=document.body
y=(z&&C.t).P(z,a,b,c)
y.toString
z=new H.dp(new W.P(y),new W.fe(),[W.r])
return z.gV(z)},
ff:function(a){return"wheel"},
as:function(a){var z,y,x
z="element tag unavailable"
try{y=J.es(a)
if(typeof y==="string")z=a.tagName}catch(x){H.N(x)}return z},
i_:function(a,b){return document.createElement(a)},
aa:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dK:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hU(a)
if(!!J.p(z).$isz)return z
return}else return a},
dO:function(a){var z=$.v
if(z===C.h)return a
return z.dA(a)},
t:{"^":"ae;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
k1:{"^":"bM;l:x=,m:y=","%":"Accelerometer|LinearAccelerationSensor"},
k2:{"^":"e;i:length=","%":"AccessibleNodeList"},
k3:{"^":"t;ag:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
k4:{"^":"t;ag:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
k8:{"^":"t;ag:href}","%":"HTMLBaseElement"},
bv:{"^":"t;",$isbv:1,"%":"HTMLBodyElement"},
k9:{"^":"t;E:name=","%":"HTMLButtonElement"},
eT:{"^":"t;C:height},D:width}",
aJ:function(a,b,c){if(c!=null)return a.getContext(b,P.jB(c,null))
return a.getContext(b)},
cm:function(a,b){return this.aJ(a,b,null)},
"%":"HTMLCanvasElement"},
ka:{"^":"e;",
dJ:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
al:function(a){return P.L(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kb:{"^":"r;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kd:{"^":"R;T:style=","%":"CSSFontFaceRule"},
ke:{"^":"R;T:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kf:{"^":"R;T:style=","%":"CSSPageRule"},
kg:{"^":"b1;i:length=","%":"CSSPerspective"},
kh:{"^":"by;l:x=,m:y=","%":"CSSPositionValue"},
ki:{"^":"b1;l:x=,m:y=","%":"CSSRotation"},
R:{"^":"e;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kj:{"^":"b1;l:x=,m:y=","%":"CSSScale"},
f1:{"^":"hS;i:length=",
b7:function(a,b){var z,y
z=$.$get$cs()
y=z[b]
if(typeof y==="string")return y
y=this.dm(a,b)
z[b]=y
return y},
dm:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f6()+b
if(z in a)return z
return b},
dj:function(a,b,c,d){a.setProperty(b,c,d)},
sC:function(a,b){a.height=b},
sD:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f2:{"^":"c;",
sdP:function(a,b){this.dj(a,this.b7(a,"float"),b,"")}},
kk:{"^":"R;T:style=","%":"CSSStyleRule"},
by:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b1:{"^":"e;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kl:{"^":"by;i:length=","%":"CSSTransformValue"},
km:{"^":"b1;l:x=,m:y=","%":"CSSTranslation"},
kn:{"^":"by;i:length=","%":"CSSUnparsedValue"},
ko:{"^":"R;T:style=","%":"CSSViewportRule"},
kp:{"^":"e;i:length=","%":"DataTransferItemList"},
kq:{"^":"e;l:x=,m:y=","%":"DeviceAcceleration"},
f7:{"^":"t;","%":"HTMLDivElement"},
kr:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
ks:{"^":"f8;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"DOMPoint"},
f8:{"^":"e;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":";DOMPointReadOnly"},
kt:{"^":"hW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a1]},
$isn:1,
$asn:function(){return[P.a1]},
$asj:function(){return[P.a1]},
$isi:1,
$asi:function(){return[P.a1]},
$ask:function(){return[P.a1]},
"%":"ClientRectList|DOMRectList"},
f9:{"^":"e;",
k:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(this.gD(a))+" x "+H.a(this.gC(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa1)return!1
return a.left===z.gbM(b)&&a.top===z.gc2(b)&&this.gD(a)===z.gD(b)&&this.gC(a)===z.gC(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gD(a)
w=this.gC(a)
return W.dx(W.aa(W.aa(W.aa(W.aa(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc3:function(a){return new P.a7(a.left,a.top,[null])},
gC:function(a){return a.height},
gbM:function(a){return a.left},
gc2:function(a){return a.top},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa1:1,
$asa1:I.aj,
"%":";DOMRectReadOnly"},
ku:{"^":"hY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kv:{"^":"e;i:length=","%":"DOMTokenList"},
ae:{"^":"r;T:style=,bc:namespaceURI=,e5:tagName=",
gdv:function(a){return new W.hZ(a)},
k:function(a){return a.localName},
P:["am",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cB
if(z==null){z=H.A([],[W.cR])
y=new W.cS(z)
z.push(W.du(null))
z.push(W.dG())
$.cB=y
d=y}else d=z
z=$.cA
if(z==null){z=new W.dJ(d)
$.cA=z
c=z}else{z.a=d
c=z}}if($.a_==null){z=document
y=z.implementation.createHTMLDocument("")
$.a_=y
$.bA=y.createRange()
y=$.a_
y.toString
x=y.createElement("base")
J.eC(x,z.baseURI)
$.a_.head.appendChild(x)}z=$.a_
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a_
if(!!this.$isbv)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a_.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.d.v(C.O,a.tagName)){$.bA.selectNodeContents(w)
v=$.bA.createContextualFragment(b)}else{w.innerHTML=b
v=$.a_.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a_.body
if(w==null?z!=null:w!==z)J.cg(w)
c.aQ(v)
document.adoptNode(v)
return v},function(a,b,c){return this.P(a,b,c,null)},"dI",null,null,"geg",5,5,null],
co:function(a,b,c,d){a.textContent=null
a.appendChild(this.P(a,b,c,d))},
cn:function(a,b){return this.co(a,b,null,null)},
aI:function(a){return a.getBoundingClientRect()},
gbR:function(a){return new W.a8(a,"mousedown",!1,[W.T])},
gbS:function(a){return new W.a8(a,"mousemove",!1,[W.T])},
gbT:function(a){return new W.a8(a,"mouseup",!1,[W.T])},
gbU:function(a){return new W.a8(a,W.ff(a),!1,[W.aW])},
$isae:1,
"%":";Element"},
fe:{"^":"f:0;",
$1:function(a){return!!J.p(a).$isae}},
kw:{"^":"t;C:height},E:name=,D:width}","%":"HTMLEmbedElement"},
kx:{"^":"b2;K:error=","%":"ErrorEvent"},
b2:{"^":"e;",
ak:function(a){return a.preventDefault()},
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
z:{"^":"e;",
bm:["cv",function(a,b,c,d){if(c!=null)this.d3(a,b,c,!1)}],
d3:function(a,b,c,d){return a.addEventListener(b,H.a2(c,1),!1)},
de:function(a,b,c,d){return a.removeEventListener(b,H.a2(c,1),!1)},
$isz:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dD|dE|dH|dI"},
kR:{"^":"t;E:name=","%":"HTMLFieldSetElement"},
kS:{"^":"i5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b3]},
$isn:1,
$asn:function(){return[W.b3]},
$asj:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$ask:function(){return[W.b3]},
"%":"FileList"},
kT:{"^":"z;K:error=","%":"FileReader"},
kU:{"^":"z;K:error=,i:length=","%":"FileWriter"},
kW:{"^":"e;T:style=","%":"FontFace"},
kX:{"^":"z;",
eh:function(a,b,c){return a.forEach(H.a2(b,3),c)},
w:function(a,b){b=H.a2(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
kZ:{"^":"t;i:length=,E:name=","%":"HTMLFormElement"},
l0:{"^":"bM;l:x=,m:y=","%":"Gyroscope"},
l1:{"^":"e;i:length=","%":"History"},
l2:{"^":"ik;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
l3:{"^":"t;C:height},E:name=,D:width}","%":"HTMLIFrameElement"},
l4:{"^":"t;C:height},D:width}","%":"HTMLImageElement"},
l6:{"^":"t;C:height},E:name=,D:width}","%":"HTMLInputElement"},
b7:{"^":"dk;",
gee:function(a){return a.which},
$isb7:1,
"%":"KeyboardEvent"},
lb:{"^":"t;ag:href}","%":"HTMLLinkElement"},
ld:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
le:{"^":"bM;l:x=,m:y=","%":"Magnetometer"},
lf:{"^":"t;E:name=","%":"HTMLMapElement"},
fG:{"^":"t;K:error=","%":"HTMLAudioElement;HTMLMediaElement"},
li:{"^":"e;i:length=","%":"MediaList"},
lj:{"^":"z;",
bm:function(a,b,c,d){if(J.D(b,"message"))a.start()
this.cv(a,b,c,!1)},
"%":"MessagePort"},
lk:{"^":"t;E:name=","%":"HTMLMetaElement"},
ll:{"^":"ir;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.A([],[P.l])
this.w(a,new W.fI(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"MIDIInputMap"},
fI:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
lm:{"^":"is;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.A([],[P.l])
this.w(a,new W.fJ(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
fJ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
ln:{"^":"iu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b9]},
$isn:1,
$asn:function(){return[W.b9]},
$asj:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"MimeTypeArray"},
T:{"^":"dk;bv:button=",
gbQ:function(a){var z,y,x
if(!!a.offsetX)return new P.a7(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.p(W.dK(z)).$isae)throw H.b(P.q("offsetX is only supported on elements"))
y=W.dK(z)
z=[null]
x=new P.a7(a.clientX,a.clientY,z).J(0,J.et(J.eu(y)))
return new P.a7(J.ci(x.a),J.ci(x.b),z)}},
$isT:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
P:{"^":"cM;a",
gV:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bN("No elements"))
if(y>1)throw H.b(P.bN("More than one element"))
return z.firstChild},
L:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
gH:function(a){var z=this.a.childNodes
return new W.cD(z,z.length,-1,null,[H.aY(C.R,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ascM:function(){return[W.r]},
$asj:function(){return[W.r]},
$asi:function(){return[W.r]},
$asdy:function(){return[W.r]}},
r:{"^":"z;aj:parentNode=,aE:previousSibling=",
ge_:function(a){return new W.P(a)},
e1:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cw(a):z},
$isr:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lv:{"^":"e;",
e0:[function(a){return a.previousNode()},"$0","gaE",1,0,4],
"%":"NodeIterator"},
fS:{"^":"iw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
ly:{"^":"t;C:height},E:name=,D:width}","%":"HTMLObjectElement"},
lA:{"^":"t;E:name=","%":"HTMLOutputElement"},
lB:{"^":"t;E:name=","%":"HTMLParamElement"},
aS:{"^":"e;i:length=","%":"Plugin"},
lD:{"^":"iA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aS]},
$isn:1,
$asn:function(){return[W.aS]},
$asj:function(){return[W.aS]},
$isi:1,
$asi:function(){return[W.aS]},
$ask:function(){return[W.aS]},
"%":"PluginArray"},
lH:{"^":"e;",
aI:function(a){return a.getBoundingClientRect()},
"%":"Range"},
lN:{"^":"iI;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.A([],[P.l])
this.w(a,new W.hc(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hc:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
lO:{"^":"t;i:length=,E:name=","%":"HTMLSelectElement"},
bM:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
lP:{"^":"b2;K:error=","%":"SensorErrorEvent"},
lQ:{"^":"t;E:name=","%":"HTMLSlotElement"},
lR:{"^":"dE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$isn:1,
$asn:function(){return[W.bc]},
$asj:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"SourceBufferList"},
lS:{"^":"iO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bd]},
$isn:1,
$asn:function(){return[W.bd]},
$asj:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$ask:function(){return[W.bd]},
"%":"SpeechGrammarList"},
lT:{"^":"b2;K:error=","%":"SpeechRecognitionError"},
aU:{"^":"e;i:length=","%":"SpeechRecognitionResult"},
lV:{"^":"iR;",
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gI:function(a){var z=H.A([],[P.l])
this.w(a,new W.hp(z))
return z},
gi:function(a){return a.length},
$asK:function(){return[P.l,P.l]},
"%":"Storage"},
hp:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
hy:{"^":"t;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=W.fd("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.P(y).L(0,J.eq(z))
return y},
"%":"HTMLTableElement"},
lY:{"^":"t;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.P(z.createElement("table"),b,c,d)
z.toString
z=new W.P(z)
x=z.gV(z)
x.toString
z=new W.P(x)
w=z.gV(z)
y.toString
w.toString
new W.P(y).L(0,new W.P(w))
return y},
"%":"HTMLTableRowElement"},
lZ:{"^":"t;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.P(z.createElement("table"),b,c,d)
z.toString
z=new W.P(z)
x=z.gV(z)
y.toString
x.toString
new W.P(y).L(0,new W.P(x))
return y},
"%":"HTMLTableSectionElement"},
d4:{"^":"t;",$isd4:1,"%":"HTMLTemplateElement"},
m_:{"^":"t;E:name=","%":"HTMLTextAreaElement"},
m1:{"^":"iZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bh]},
$isn:1,
$asn:function(){return[W.bh]},
$asj:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$ask:function(){return[W.bh]},
"%":"TextTrackCueList"},
m2:{"^":"dI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bg]},
$isn:1,
$asn:function(){return[W.bg]},
$asj:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$ask:function(){return[W.bg]},
"%":"TextTrackList"},
m3:{"^":"e;i:length=","%":"TimeRanges"},
m4:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"TouchList"},
m5:{"^":"e;i:length=","%":"TrackDefaultList"},
m8:{"^":"e;",
ei:[function(a){return a.parentNode()},"$0","gaj",1,0,4],
e0:[function(a){return a.previousNode()},"$0","gaE",1,0,4],
"%":"TreeWalker"},
dk:{"^":"b2;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ma:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
mc:{"^":"e;l:x=","%":"VRStageBoundsPoint"},
me:{"^":"fG;C:height},D:width}","%":"HTMLVideoElement"},
mf:{"^":"z;i:length=","%":"VideoTrackList"},
aW:{"^":"T;",
gdL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.q("deltaY is not supported"))},
$isaW:1,
"%":"WheelEvent"},
hG:{"^":"z;",
gdu:function(a){var z,y
z=P.aI
y=new P.a9(0,$.v,null,[z])
this.d8(a)
this.df(a,W.dO(new W.hH(new P.iV(y,[z]))))
return y},
df:function(a,b){return a.requestAnimationFrame(H.a2(b,1))},
d8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hH:{"^":"f:0;a",
$1:function(a){this.a.dG(0,a)}},
mg:{"^":"z;"},
mk:{"^":"r;E:name=,bc:namespaceURI=","%":"Attr"},
ml:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.R]},
$isn:1,
$asn:function(){return[W.R]},
$asj:function(){return[W.R]},
$isi:1,
$asi:function(){return[W.R]},
$ask:function(){return[W.R]},
"%":"CSSRuleList"},
mm:{"^":"f9;",
k:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa1)return!1
return a.left===z.gbM(b)&&a.top===z.gc2(b)&&a.width===z.gD(b)&&a.height===z.gC(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dx(W.aa(W.aa(W.aa(W.aa(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gc3:function(a){return new P.a7(a.left,a.top,[null])},
gC:function(a){return a.height},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mn:{"^":"jb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b5]},
$isn:1,
$asn:function(){return[W.b5]},
$asj:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$ask:function(){return[W.b5]},
"%":"GamepadList"},
mq:{"^":"jd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isn:1,
$asn:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mr:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aU]},
$isn:1,
$asn:function(){return[W.aU]},
$asj:function(){return[W.aU]},
$isi:1,
$asi:function(){return[W.aU]},
$ask:function(){return[W.aU]},
"%":"SpeechRecognitionResultList"},
ms:{"^":"jh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bf]},
$isn:1,
$asn:function(){return[W.bf]},
$asj:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$ask:function(){return[W.bf]},
"%":"StyleSheetList"},
hP:{"^":"bJ;d9:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gI(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.J)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gI:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=z[w]
u=J.d(v)
if(u.gbc(v)==null)y.push(u.gE(v))}return y},
$asbJ:function(){return[P.l,P.l]},
$asK:function(){return[P.l,P.l]}},
hZ:{"^":"hP;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gI(this).length}},
i0:{"^":"d0;a,b,c,$ti",
bO:function(a,b,c,d){return W.ag(this.a,this.b,a,!1,H.y(this,0))}},
a8:{"^":"i0;a,b,c,$ti"},
i1:{"^":"hq;a,b,c,d,e,$ti",
cW:function(a,b,c,d,e){this.dn()},
dC:function(a){if(this.b==null)return
this.dq()
this.b=null
this.d=null
return},
dn:function(){var z=this.d
if(z!=null&&this.a<=0)J.e8(this.b,this.c,z,!1)},
dq:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.e7(x,this.c,z,!1)}},
p:{
ag:function(a,b,c,d,e){var z=W.dO(new W.i2(c))
z=new W.i1(0,a,b,z,!1,[e])
z.cW(a,b,c,!1,e)
return z}}},
i2:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
bR:{"^":"c;cd:a<",
cY:function(a){var z,y
z=$.$get$bS()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.N[y],W.jK())
for(y=0;y<12;++y)z.j(0,C.q[y],W.jL())}},
Y:function(a){return $.$get$dv().v(0,W.as(a))},
U:function(a,b,c){var z,y,x
z=W.as(a)
y=$.$get$bS()
x=y.h(0,H.a(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
du:function(a){var z,y
z=document.createElement("a")
y=new W.iJ(z,window.location)
y=new W.bR(y)
y.cY(a)
return y},
mo:[function(a,b,c,d){return!0},"$4","jK",16,0,9],
mp:[function(a,b,c,d){var z,y,x,w,v
z=d.gcd()
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
return z},"$4","jL",16,0,9]}},
k:{"^":"c;$ti",
gH:function(a){return new W.cD(a,this.gi(a),-1,null,[H.aY(this,a,"k",0)])}},
cS:{"^":"c;a",
Y:function(a){return C.d.bn(this.a,new W.fU(a))},
U:function(a,b,c){return C.d.bn(this.a,new W.fT(a,b,c))}},
fU:{"^":"f:0;a",
$1:function(a){return a.Y(this.a)}},
fT:{"^":"f:0;a,b,c",
$1:function(a){return a.U(this.a,this.b,this.c)}},
iK:{"^":"c;cd:d<",
d0:function(a,b,c,d){var z,y,x
this.a.L(0,c)
z=b.aH(0,new W.iL())
y=b.aH(0,new W.iM())
this.b.L(0,z)
x=this.c
x.L(0,C.P)
x.L(0,y)},
Y:function(a){return this.a.v(0,W.as(a))},
U:["cB",function(a,b,c){var z,y
z=W.as(a)
y=this.c
if(y.v(0,H.a(z)+"::"+b))return this.d.dt(c)
else if(y.v(0,"*::"+b))return this.d.dt(c)
else{y=this.b
if(y.v(0,H.a(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.a(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
iL:{"^":"f:0;",
$1:function(a){return!C.d.v(C.q,a)}},
iM:{"^":"f:0;",
$1:function(a){return C.d.v(C.q,a)}},
iW:{"^":"iK;e,a,b,c,d",
U:function(a,b,c){if(this.cB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cc(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
dG:function(){var z=P.l
z=new W.iW(P.bH(C.p,z),P.O(null,null,null,z),P.O(null,null,null,z),P.O(null,null,null,z),null)
z.d0(null,new H.fE(C.p,new W.iX(),[H.y(C.p,0),null]),["TEMPLATE"],null)
return z}}},
iX:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.a(a)}},
iU:{"^":"c;",
Y:function(a){var z=J.p(a)
if(!!z.$iscX)return!1
z=!!z.$isx
if(z&&W.as(a)==="foreignObject")return!1
if(z)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.j.cr(b,"on"))return!1
return this.Y(a)}},
cD:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
hT:{"^":"c;a",$isz:1,p:{
hU:function(a){if(a===window)return a
else return new W.hT(a)}}},
cR:{"^":"c;"},
lw:{"^":"c;"},
m9:{"^":"c;"},
iJ:{"^":"c;a,b"},
dJ:{"^":"c;a",
aQ:function(a){new W.j6(this).$2(a,null)},
a2:function(a,b){if(b==null)J.cg(a)
else b.removeChild(a)},
di:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cc(a)
x=y.gd9().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.N(t)}v="element unprintable"
try{v=J.aq(a)}catch(t){H.N(t)}try{u=W.as(a)
this.dh(a,b,z,v,u,y,x)}catch(t){if(H.N(t) instanceof P.ad)throw t
else{this.a2(a,b)
window
s="Removing corrupted element "+H.a(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dh:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a2(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Y(a)){this.a2(a,b)
window
z="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.a2(a,b)
window
z="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gI(f)
y=H.A(z.slice(0),[H.y(z,0)])
for(x=f.gI(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.U(a,J.eG(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.a(e)+" "+w+'="'+H.a(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.p(a).$isd4)this.aQ(a.content)}},
j6:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.di(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a2(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.er(z)}catch(w){H.N(w)
v=z
if(x){u=J.d(v)
if(u.gaj(v)!=null){u.gaj(v)
u.gaj(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
hS:{"^":"e+f2;"},
hV:{"^":"e+j;"},
hW:{"^":"hV+k;"},
hX:{"^":"e+j;"},
hY:{"^":"hX+k;"},
i4:{"^":"e+j;"},
i5:{"^":"i4+k;"},
ij:{"^":"e+j;"},
ik:{"^":"ij+k;"},
ir:{"^":"e+K;"},
is:{"^":"e+K;"},
it:{"^":"e+j;"},
iu:{"^":"it+k;"},
iv:{"^":"e+j;"},
iw:{"^":"iv+k;"},
iz:{"^":"e+j;"},
iA:{"^":"iz+k;"},
iI:{"^":"e+K;"},
dD:{"^":"z+j;"},
dE:{"^":"dD+k;"},
iN:{"^":"e+j;"},
iO:{"^":"iN+k;"},
iR:{"^":"e+K;"},
iY:{"^":"e+j;"},
iZ:{"^":"iY+k;"},
dH:{"^":"z+j;"},
dI:{"^":"dH+k;"},
j2:{"^":"e+j;"},
j3:{"^":"j2+k;"},
j8:{"^":"e+j;"},
j9:{"^":"j8+k;"},
ja:{"^":"e+j;"},
jb:{"^":"ja+k;"},
jc:{"^":"e+j;"},
jd:{"^":"jc+k;"},
je:{"^":"e+j;"},
jf:{"^":"je+k;"},
jg:{"^":"e+j;"},
jh:{"^":"jg+k;"}}],["","",,P,{"^":"",
L:function(a){var z,y,x,w,v
if(a==null)return
z=P.S()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jB:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cb(a,new P.jC(z))
return z},
cz:function(){var z=$.cy
if(z==null){z=J.bs(window.navigator.userAgent,"Opera",0)
$.cy=z}return z},
f6:function(){var z,y
z=$.cv
if(z!=null)return z
y=$.cw
if(y==null){y=J.bs(window.navigator.userAgent,"Firefox",0)
$.cw=y}if(y)z="-moz-"
else{y=$.cx
if(y==null){y=P.cz()!==!0&&J.bs(window.navigator.userAgent,"Trident/",0)
$.cx=y}if(y)z="-ms-"
else z=P.cz()===!0?"-o-":"-webkit-"}$.cv=z
return z},
jC:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",lM:{"^":"z;K:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},m6:{"^":"z;K:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
il:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iB:{"^":"c;a,b",
d_:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.a.G(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.a.G(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.a.G(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.a.G(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.a.G(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.a.G(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.a.G(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.S()
this.S()
this.S()
this.S()},
S:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.a.G(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
bP:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.b(P.h6("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)>>>0===0){this.S()
return(this.a&z)>>>0}do{this.S()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
aD:function(){this.S()
var z=this.a
this.S()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
p:{
iC:function(a){var z=new P.iB(0,0)
z.d_(a)
return z}}},
a7:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
F:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a7))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gB:function(a){var z,y
z=J.Y(this.a)
y=J.Y(this.b)
return P.il(P.dw(P.dw(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.a.gl(b)
if(typeof z!=="number")return z.n()
y=C.b.n(z,y)
z=this.b
x=C.a.gm(b)
if(typeof z!=="number")return z.n()
return new P.a7(y,C.b.n(z,x),this.$ti)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.d(b)
x=y.gl(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.G(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.G(y)
return new P.a7(z-x,w-y,this.$ti)}},
lG:{"^":"c;"},
iD:{"^":"c;$ti"},
a1:{"^":"iD;$ti"}}],["","",,P,{"^":"",kz:{"^":"x;l:x=,m:y=","%":"SVGFEBlendElement"},kA:{"^":"x;l:x=,m:y=","%":"SVGFEColorMatrixElement"},kB:{"^":"x;l:x=,m:y=","%":"SVGFEComponentTransferElement"},kC:{"^":"x;l:x=,m:y=","%":"SVGFECompositeElement"},kD:{"^":"x;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},kE:{"^":"x;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},kF:{"^":"x;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},kG:{"^":"x;l:x=,m:y=","%":"SVGFEFloodElement"},kH:{"^":"x;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},kI:{"^":"x;l:x=,m:y=","%":"SVGFEImageElement"},kJ:{"^":"x;l:x=,m:y=","%":"SVGFEMergeElement"},kK:{"^":"x;l:x=,m:y=","%":"SVGFEMorphologyElement"},kL:{"^":"x;l:x=,m:y=","%":"SVGFEOffsetElement"},kM:{"^":"x;l:x=,m:y=","%":"SVGFEPointLightElement"},kN:{"^":"x;l:x=,m:y=","%":"SVGFESpecularLightingElement"},kO:{"^":"x;l:x=,m:y=","%":"SVGFESpotLightElement"},kP:{"^":"x;l:x=,m:y=","%":"SVGFETileElement"},kQ:{"^":"x;l:x=,m:y=","%":"SVGFETurbulenceElement"},kV:{"^":"x;l:x=,m:y=","%":"SVGFilterElement"},kY:{"^":"at;l:x=,m:y=","%":"SVGForeignObjectElement"},fl:{"^":"at;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},at:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},l5:{"^":"at;l:x=,m:y=","%":"SVGImageElement"},la:{"^":"io;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cK]},
$isi:1,
$asi:function(){return[P.cK]},
$ask:function(){return[P.cK]},
"%":"SVGLengthList"},lg:{"^":"x;l:x=,m:y=","%":"SVGMaskElement"},lx:{"^":"iy;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cV]},
$isi:1,
$asi:function(){return[P.cV]},
$ask:function(){return[P.cV]},
"%":"SVGNumberList"},lC:{"^":"x;l:x=,m:y=","%":"SVGPatternElement"},lE:{"^":"e;l:x=,m:y=","%":"SVGPoint"},lF:{"^":"e;i:length=","%":"SVGPointList"},lI:{"^":"e;l:x=,m:y=","%":"SVGRect"},lJ:{"^":"fl;l:x=,m:y=","%":"SVGRectElement"},cX:{"^":"x;",$iscX:1,"%":"SVGScriptElement"},lW:{"^":"iT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},x:{"^":"ae;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.cR])
z.push(W.du(null))
z.push(W.dG())
z.push(new W.iU())
c=new W.dJ(new W.cS(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.t).dI(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.P(w)
u=z.gV(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gbR:function(a){return new W.a8(a,"mousedown",!1,[W.T])},
gbS:function(a){return new W.a8(a,"mousemove",!1,[W.T])},
gbT:function(a){return new W.a8(a,"mouseup",!1,[W.T])},
gbU:function(a){return new W.a8(a,"mousewheel",!1,[W.aW])},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lX:{"^":"at;l:x=,m:y=","%":"SVGSVGElement"},hz:{"^":"at;","%":"SVGTextPathElement;SVGTextContentElement"},m0:{"^":"hz;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},m7:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.d7]},
$isi:1,
$asi:function(){return[P.d7]},
$ask:function(){return[P.d7]},
"%":"SVGTransformList"},mb:{"^":"at;l:x=,m:y=","%":"SVGUseElement"},im:{"^":"e+j;"},io:{"^":"im+k;"},ix:{"^":"e+j;"},iy:{"^":"ix+k;"},iS:{"^":"e+j;"},iT:{"^":"iS+k;"},j4:{"^":"e+j;"},j5:{"^":"j4+k;"}}],["","",,P,{"^":"",k5:{"^":"e;i:length=","%":"AudioBuffer"},k6:{"^":"hQ;",
h:function(a,b){return P.L(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.L(y.value[1]))}},
gI:function(a){var z=H.A([],[P.l])
this.w(a,new P.eQ(z))
return z},
gi:function(a){return a.size},
$asK:function(){return[P.l,null]},
"%":"AudioParamMap"},eQ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},k7:{"^":"z;i:length=","%":"AudioTrackList"},eR:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lz:{"^":"eR;i:length=","%":"OfflineAudioContext"},hQ:{"^":"e+K;"}}],["","",,P,{"^":"",lK:{"^":"e;",
bl:function(a,b){return a.activeTexture(b)},
bo:function(a,b,c){return a.attachShader(b,c)},
bp:function(a,b,c){return a.bindBuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bA:function(a,b){return a.createShader(b)},
bB:function(a){return a.createTexture()},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.L(a.getContextAttributes())},
aK:function(a){return a.getError()},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bV:function(a,b,c){return a.pixelStorei(b,c)},
aS:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bY:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
bZ:function(a,b,c,d){return a.texParameterf(b,c,d)},
c_:function(a,b,c,d){return a.texParameteri(b,c,d)},
c4:function(a,b,c){return a.uniform1f(b,c)},
c5:function(a,b,c){return a.uniform1fv(b,c)},
c6:function(a,b,c){return a.uniform1i(b,c)},
c7:function(a,b,c){return a.uniform1iv(b,c)},
c8:function(a,b,c){return a.uniform2fv(b,c)},
c9:function(a,b,c){return a.uniform3fv(b,c)},
ca:function(a,b,c){return a.uniform4fv(b,c)},
cb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ce:function(a,b){return a.useProgram(b)},
cf:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},lL:{"^":"e;",
dw:function(a,b){return a.beginTransformFeedback(b)},
dB:function(a,b){return a.bindVertexArray(b)},
dK:function(a){return a.createVertexArray()},
dM:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dN:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dO:function(a){return a.endTransformFeedback()},
ea:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eb:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bl:function(a,b){return a.activeTexture(b)},
bo:function(a,b,c){return a.attachShader(b,c)},
bp:function(a,b,c){return a.bindBuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bA:function(a,b){return a.createShader(b)},
bB:function(a){return a.createTexture()},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
al:function(a){return P.L(a.getContextAttributes())},
aK:function(a){return a.getError()},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bV:function(a,b,c){return a.pixelStorei(b,c)},
aS:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bY:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
bZ:function(a,b,c,d){return a.texParameterf(b,c,d)},
c_:function(a,b,c,d){return a.texParameteri(b,c,d)},
c4:function(a,b,c){return a.uniform1f(b,c)},
c5:function(a,b,c){return a.uniform1fv(b,c)},
c6:function(a,b,c){return a.uniform1i(b,c)},
c7:function(a,b,c){return a.uniform1iv(b,c)},
c8:function(a,b,c){return a.uniform2fv(b,c)},
c9:function(a,b,c){return a.uniform3fv(b,c)},
ca:function(a,b,c){return a.uniform4fv(b,c)},
cb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ce:function(a,b){return a.useProgram(b)},
cf:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",lU:{"^":"iQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return P.L(a.item(b))},
j:function(a,b,c){throw H.b(P.q("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$ask:function(){return[P.bI]},
"%":"SQLResultSetRowList"},iP:{"^":"e+j;"},iQ:{"^":"iP+k;"}}],["","",,G,{"^":"",
hJ:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.h(z,y)
w+=H.a(z[y])
if(y>=z.length)return H.h(z,y)
z[y]=w}return C.d.a5(z,"\n")},
dr:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bA(a,b)
z.aS(a,y,c)
z.bx(a,y)
x=z.aO(a,y,35713)
if(x!=null&&J.D(x,!1)){w=z.aN(a,y)
P.am("E:Compilation failed:")
P.am("E:"+G.hJ(c))
P.am("E:Failure:")
P.am(C.j.n("E:",w))
throw H.b(w)}return y},
cE:function(a,b){var z,y,x,w,v,u
z=a.length
b=new Float32Array(z*3)
for(z=a.length,y=0;y<z;++y){x=y*3
w=a[y].a[0]
v=b.length
if(x>=v)return H.h(b,x)
b[x]=w
w=x+1
u=a[y].a[1]
if(w>=v)return H.h(b,w)
b[w]=u
x+=2
u=a[y].a[2]
if(x>=v)return H.h(b,x)
b[x]=u}return b},
fi:function(a,b){var z,y,x,w
z=C.c.gi(a).Z(0,2)
b=new Float32Array(z)
for(y=0;C.a.R(y,C.c.gi(a));++y){z=y*2
x=C.c.h(a,y)
x=x.gl(x)
w=b.length
if(z>=w)return H.h(b,z)
b[z]=x;++z
x=C.c.h(a,y)
x=x.gm(x)
if(z>=w)return H.h(b,z)
b[z]=x}return b},
fj:function(a,b){var z,y,x,w,v
z=C.c.gi(a).Z(0,4)
b=new Float32Array(z)
for(y=0;C.a.R(y,C.c.gi(a));++y){z=y*4
x=C.c.h(a,y)
x=x.gl(x)
w=b.length
if(z>=w)return H.h(b,z)
b[z]=x
x=z+1
v=C.c.h(a,y)
v=v.gm(v)
if(x>=w)return H.h(b,x)
b[x]=v
v=z+2
x=C.c.h(a,y)
x=x.gcj(x)
if(v>=w)return H.h(b,v)
b[v]=x
z+=3
x=C.c.h(a,y)
x=x.gec(x)
if(z>=w)return H.h(b,z)
b[z]=x}return b},
fh:function(a,b){var z,y,x,w,v
z=C.c.gi(a).Z(0,4)
b=new Uint32Array(z)
for(y=0;C.a.R(y,C.c.gi(a));++y){z=y*4
x=C.c.h(a,y).h(0,0)
w=b.length
if(z>=w)return H.h(b,z)
b[z]=x
x=z+1
v=C.c.h(a,y).h(0,1)
if(x>=w)return H.h(b,x)
b[x]=v
v=z+2
x=C.c.h(a,y).h(0,2)
if(v>=w)return H.h(b,v)
b[v]=x
z+=3
x=C.c.h(a,y).h(0,3)
if(z>=w)return H.h(b,z)
b[z]=x}return b},
ih:function(a,b){var z,y,x,w,v,u
for(z=a.e,y=new H.a5(z,z.r,null,null,[H.y(z,0)]),y.c=z.e,x=b.x;y.t();){w=y.d
if(!x.af(0,w)){v="Dropping unnecessary attribute: "+H.a(w)
if($.dV>0)H.aJ("I: "+v)
continue}u=z.h(0,w)
switch($.$get$V().h(0,w).a){case"vec2":b.a_(w,G.fi(u,null),2)
break
case"vec3":b.a_(w,G.cE(u,null),3)
break
case"vec4":b.a_(w,G.fj(u,null),4)
break
case"float":b.a_(w,new Float32Array(H.jm(u)),1)
break
case"uvec4":b.a_(w,G.fh(u,null),4)
break}}},
ba:{"^":"c;"},
dl:{"^":"ba;",
b0:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.a(new H.dj(H.jH(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.a5(y,y.r,null,null,[H.y(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.a(w)+": "+H.a(y.h(0,w)))}return C.d.a5(z,"\n")}},
eS:{"^":"hl;"},
eW:{"^":"c;a,b",
bJ:function(a,b,c){J.eo(this.a,b)
if(c>0)J.eM(this.a,b,c)},
cg:function(a,b,c,d,e,f,g,h){J.c7(this.a,34962,b)
J.eN(this.a,c,d,e,!1,g,h)}},
fk:{"^":"c;a,b,c,d,e",
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4[0]"]
for(y=this.e,x=new H.a5(y,y.r,null,null,[H.y(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$V().h(0,w).a
z.push(H.a(w)+"["+v+","+H.a(C.c.gi(y.h(0,w)))+"]")}return C.d.a5(z," ")}},
d6:{"^":"c;a,b,c"},
d5:{"^":"c;a,b,c"},
fF:{"^":"dl;d,a,b,c"},
fH:{"^":"ba;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aY:function(a,b,c){var z,y
C.j.b8(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c7(z.a,34962,y)
J.ec(z.a,34962,b,35048)},
aZ:function(a){this.ch=a
this.aY("aPosition",a,3)},
cH:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.c8(a,0)===105
if(z&&this.z===0)this.z=C.a.cC(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.c9(x.a))
this.aY(a,b,c)
w=$.$get$V().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.br(x.a,this.e)
x.bJ(0,v,z?1:0)
x.cg(0,y.h(0,a),v,w.b_(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a5(z,z.r,null,null,[H.y(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.a(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.d.a5(y,"  ")}},
fX:{"^":"dl;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cE:function(a,b){var z
if(typeof a!=="number")return a.cl()
if(typeof b!=="number")return H.G(b)
z=a/b
if(this.z===z)return
this.z=z
this.b3()},
b3:function(){var z,y,x,w,v,u
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
b0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.o(new Float32Array(3))
u.ab(x,w,v)
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
y=J.p(t)
x=!!y.$isaC
q=x?y.gec(t):1
if(!!y.$iso){p=y.gl(t)
s=y.gm(t)
r=y.gcj(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gcj(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.G(t)
x=z[4]
if(typeof s!=="number")return H.G(s)
w=z[8]
if(typeof r!=="number")return H.G(r)
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
c.dZ(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
ha:{"^":"ba;d,e,f,r,x,y,z,Q,ch,a,b,c",
cL:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.j(0,t,J.cf(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.j(0,t,J.cf(w.a,v,t))}},
cQ:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a5(y,y.r,null,null,[H.y(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.af(0,v))x.push(v)}for(z=this.x,y=new P.bT(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
cU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a5(b,b.r,null,null,[H.y(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.c8(t,0)){case 117:if(w.af(0,t)){s=b.h(0,t)
if(v.af(0,t))H.aJ("E:"+(t+" : group ["+H.a(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$V().h(0,t)
if(r==null)H.M("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bu(x.a,q,s)
else if(!!J.p(s).$isfo)J.eK(x.a,q,s)
break
case"float":if(r.c===0)J.eI(x.a,q,s)
else if(!!J.p(s).$isbC)J.eJ(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a4(s,"$isa0").a
J.cn(x.a,q,!1,p)}else if(!!J.p(s).$isbC)J.cn(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.c.gct(H.a4(s,"$islh"))
J.cm(x.a,q,!1,p)}else if(!!J.p(s).$isbC)J.cm(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cl(o,q,H.a4(s,"$isaC").a)
else J.cl(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.ck(o,q,H.a4(s,"$iso").a)
else J.ck(o,q,s)
break
case"vec2":if(r.c===0){p=C.c.gct(H.a4(s,"$ismd"))
J.cj(x.a,q,p)}else J.cj(x.a,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.G(p)
J.c5(x.a,33984+p)
p=H.a4(s,"$isbP").b
J.aM(x.a,3553,p)
p=this.ch
J.bu(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.G(p)
J.c5(x.a,33984+p)
p=H.a4(s,"$isbP").b
J.aM(x.a,34067,p)
p=this.ch
J.bu(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.aJ("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.D(s,!0)
o=x.a
if(p)J.aZ(o,2929)
else J.bt(o,2929)
break
case"cStencilFunc":H.a4(s,"$isd6")
p=s.a
o=x.a
if(p===1281)J.bt(o,2960)
else{J.aZ(o,2960)
o=s.b
n=s.c
J.eD(x.a,p,o,n)}break
case"cDepthWrite":J.ej(x.a,s)
break
case"cBlendEquation":H.a4(s,"$isd5")
p=s.a
o=x.a
if(p===1281)J.bt(o,3042)
else{J.aZ(o,3042)
o=s.b
n=s.c
J.eb(x.a,o,n)
J.ea(x.a,p)}break}++u
break}}m=P.fa(0,0,0,Date.now()-new P.cu(z,!1).a,0,0)
""+u
m.k(0)},
cG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.eL(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b5()}for(x=0;x<2;++x){w=b[x]
this.cU(w.a,w.b0())}y=this.Q
y.a3(0)
for(v=a.cy,u=new H.a5(v,v.r,null,null,[H.y(v,0)]),u.c=v.e;u.t();)y.N(0,u.d)
t=this.cQ()
if(t.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.a(t)))
J.br(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cH()
u=a.Q
r=a.z
if(s)J.e9(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.en(q,y,v,u,0,r)
else J.em(q,y,v,u,0)}else{u=z.a
if(r>1)J.el(u,y,0,v,r)
else J.ek(u,y,0,v)}if(s)J.ep(z.a)},
cF:function(a,b){return this.cG(a,b,null)},
p:{
hb:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.O(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.ef(b.a)
u=G.dr(b.a,35633,y)
J.c6(b.a,v,u)
t=G.dr(b.a,35632,x)
J.c6(b.a,v,t)
if(w.length>0)J.eH(b.a,v,w,35980)
J.eA(b.a,v)
if(J.ez(b.a,v,35714)!==!0)H.M(J.ey(b.a,v))
z=new G.ha(b,c,d,v,P.bH(c.c,null),P.S(),P.S(),z,null,a,!1,!0)
z.cL(a,b,c,d)
return z}}},
u:{"^":"c;a,b,c",
b_:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hh:{"^":"c;a,b,c,d,e,f,r,x",
cD:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.d.aU(z)},
aX:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x)y.push(a[x])
C.d.aU(y)},
cM:function(a,b){this.b=this.cV(!0,a,b)},
b2:function(a){return this.cM(a,null)},
cV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
s=$.$get$V().h(0,t)
w.push("layout (location="+H.a(v.h(0,t))+") in "+s.a+" "+H.a(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.h(z,u)
q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.a(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
w.push(r+" "+s.a+" "+H.a(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.$get$V().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.a(q)+p+";")}w.push("")
w.push("void main(void) {")
C.d.L(w,b)
w.push("}")
return C.d.a5(w,"\n")},
p:{
cY:function(a){return new G.hh(a,null,[],[],[],[],0,P.S())}}},
hl:{"^":"ba;"},
hA:{"^":"c;a,b,c,d,e,f,r",
cI:function(a,b){var z=this.e
if(z!==1)J.eF(a.a,b,34046,z)
J.ch(a.a,b,10240,this.r)
J.ch(a.a,b,10241,this.f)}},
bP:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fm:{"^":"bP;f,a,b,c,d,e",
cN:function(a){var z,y
z=this.d
y=this.c
J.aM(z.a,y,this.b)
J.eE(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",hn:{"^":"c;",
cO:function(a,b,c){var z,y,x
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
x=this.cZ(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cZ:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.i_("span",null)
y=J.cd(v)
J.d(y).sD(y,"1px")
C.o.sC(y,""+d+"px")
C.o.sdP(y,"left")
x=C.o.b7(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},ho:{"^":"hn;e,f,a,b,c,d",
cT:function(a,b){var z,y,x,w,v;++this.e
if(J.aL(J.e5(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.u.e9(z,2)+" fps"
y=this.c;(y&&C.E).cn(y,b)
x=C.a.G(30*C.u.dD(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cd(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
cS:function(a){return this.cT(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",fx:{"^":"c;a,b,c",
cJ:function(a){var z
a=document
z=W.b7
W.ag(a,"keydown",new D.fz(this),!1,z)
W.ag(a,"keyup",new D.fA(this),!1,z)},
p:{
fy:function(a){var z=P.H
z=new D.fx(P.O(null,null,null,z),P.O(null,null,null,z),P.O(null,null,null,z))
z.cJ(a)
return z}}},fz:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.N(0,J.ce(a))
z.b.N(0,a.which)}},fA:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.bW(0,J.ce(a))
z.c.N(0,a.which)}},fK:{"^":"c;a,b,c,d,e,f,r,x",
cK:function(a){var z,y
z=J.d(a)
y=z.gbS(a)
W.ag(y.a,y.b,new D.fM(this),!1,H.y(y,0))
y=z.gbR(a)
W.ag(y.a,y.b,new D.fN(this),!1,H.y(y,0))
y=z.gbT(a)
W.ag(y.a,y.b,new D.fO(this),!1,H.y(y,0))
z=z.gbU(a)
W.ag(z.a,z.b,new D.fP(this),!1,H.y(z,0))},
p:{
fL:function(a){var z=P.H
z=new D.fK(P.O(null,null,null,z),P.O(null,null,null,z),P.O(null,null,null,z),0,0,0,0,0)
z.cK(a)
return z}}},fM:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.ak(a)
y=this.a
y.r=z.gbQ(a).a
y.x=z.gbQ(a).b
y.d=a.movementX
y.e=a.movementY}},fN:{"^":"f:5;a",
$1:function(a){var z=J.d(a)
z.ak(a)
P.am("BUTTON "+H.a(z.gbv(a)))
z=this.a
z.a.N(0,a.button)
z.b.N(0,a.button)}},fO:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.ak(a)
y=this.a
y.a.bW(0,z.gbv(a))
y.c.N(0,a.button)}},fP:{"^":"f:17;a",
$1:function(a){var z=J.d(a)
z.ak(a)
this.a.f=z.gdL(a)}},fW:{"^":"eS;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c0:function(a){var z,y
z=C.Q.dQ(a,0,new A.jJ())
if(typeof z!=="number")return H.G(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jJ:{"^":"f:18;",
$2:function(a,b){var z,y
z=J.ao(a,J.Y(b))
if(typeof z!=="number")return H.G(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a0:{"^":"c;bb:a<",
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
k:function(a){return"[0] "+this.a6(0).k(0)+"\n[1] "+this.a6(1).k(0)+"\n[2] "+this.a6(2).k(0)+"\n[3] "+this.a6(3).k(0)+"\n"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a0){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.c0(this.a)},
a6:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.h(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.h(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.h(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.h(y,x)
z[3]=y[x]
return new T.aC(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a0(z)
y.u(this)
x=b.gbb()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
z[3]=C.b.n(z[3],x.h(0,3))
z[4]=C.b.n(z[4],x.h(0,4))
z[5]=C.b.n(z[5],x.h(0,5))
z[6]=C.b.n(z[6],x.h(0,6))
z[7]=C.b.n(z[7],x.h(0,7))
z[8]=C.b.n(z[8],x.h(0,8))
z[9]=C.b.n(z[9],x.h(0,9))
z[10]=C.b.n(z[10],x.h(0,10))
z[11]=C.b.n(z[11],x.h(0,11))
z[12]=C.b.n(z[12],x.h(0,12))
z[13]=C.b.n(z[13],x.h(0,13))
z[14]=C.b.n(z[14],x.h(0,14))
z[15]=C.b.n(z[15],x.h(0,15))
return y},
J:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a0(z)
y.u(this)
x=b.gbb()
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
a9:function(){var z=this.a
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
dZ:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},o:{"^":"c;bj:a<",
ab:function(a,b,c){var z=this.a
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
return"["+H.a(z[0])+","+H.a(z[1])+","+H.a(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.o){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.c0(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.o(z)
y.u(this)
x=b.gbj()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.o(z)
y.u(this)
x=b.gbj()
z[0]=z[0]+x[0]
z[1]=z[1]+x[1]
z[2]=z[2]+x[2]
return y},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
ai:function(a){var z,y,x,w,v,u
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
aB:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bC:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.o(new Float32Array(3))
z.ab(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a8:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
aR:function(a){var z=new T.o(new Float32Array(3))
z.u(this)
z.a8(0,a)
return z},
sci:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
p:{
dn:function(a,b,c,d){var z,y,x,w
z=a.a
y=z[0]
x=b.a
w=d.a
w[0]=y+c*(x[0]-y)
y=z[1]
w[1]=y+c*(x[1]-y)
z=z[2]
w[2]=z+c*(x[2]-z)}}},aC:{"^":"c;bk:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.a(z[0])+","+H.a(z[1])+","+H.a(z[2])+","+H.a(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aC){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.c0(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.aC(z)
y.u(this)
x=b.gbk()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.aC(z)
y.u(this)
x=b.gbk()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
z[3]=C.b.n(z[3],x.h(0,3))
return y},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}}}],["","",,R,{"^":"",
cW:function(a,b){var z,y,x,w
z=a.aD()
y=a.aD()
x=a.aD()
w=new T.o(new Float32Array(3))
w.ab((z-0.5)*b,(y-0.5)*b,(x-0.5)*b)
return w},
cO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o
z=[]
for(y=0;y<5;++y){x=a[y]
w=new Float32Array(3)
w[0]=x
w[1]=b
w[2]=c
v=new Float32Array(3)
u=new T.o(v)
u.u(new T.o(w))
u.a8(0,d)
w=new Float32Array(3)
u=new T.o(w)
t=new T.o(new Float32Array(3))
s=new T.o(new Float32Array(3))
r=new R.fZ(u,t,s,0)
q=v[0]
p=v[1]
v=v[2]
o=new Float32Array(3)
o[0]=q
o[1]=p
o[2]=v
s.sci(new T.o(o))
o=w[0]
v=w[1]
w=w[2]
q=new Float32Array(3)
q[0]=o
q[1]=v
q[2]=w
t.sci(new T.o(q))
T.dn(t,s,0,u)
r.d=1
T.dn(t,s,1,u)
z.push(r)}return z},
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z={}
y=document
x=new R.ho(0,0,null,null,null,null)
x.cO(y.getElementById("stats"),"blue","gray")
w=P.iC(0)
v=y.querySelector("#webgl-canvas")
u=v.clientWidth
t=v.clientHeight
s=J.d(v)
s.sD(v,u)
s.sC(v,t)
r=new G.eW(null,v)
s=J.ev(v,"webgl2",P.cL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=s
if(s==null)H.M(P.cC('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.a(J.ew(s))
if($.dV>0)P.am("I: "+q)
J.ed(s,0,0,0,1)
J.aZ(s,2929)
s=new Float32Array(3)
q=D.fy(null)
p=D.fL(v)
o=new T.a0(new Float32Array(16))
o.a9()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.fW(15,0.5,0.5,0,new T.o(s),-0.02,q,p,o,new T.o(n),new T.o(m),new T.o(l),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
s=new T.a0(new Float32Array(16))
s.a9()
q=new T.a0(new Float32Array(16))
q.a9()
j=new G.fX(k,50,1,0.1,1000,s,q,new T.a0(new Float32Array(16)),P.S(),"perspective",!1,!0)
j.b3()
j.cE(u,t)
i=G.hb("CPU",r,$.$get$e2(),$.$get$e1())
h=R.cO([2,1,0,-1,-2],0,2,3)
g=R.cO([2,1,0,-1,-2],0,-2,3)
s=new Float32Array(3)
f=new T.o(s)
s[2]=10010
s[1]=10010
s[0]=10010
e=[]
for(d=0;d<1e4;++d){c=new R.fp(null,2)
s=new T.o(new Float32Array(3))
s.u(f)
c.a=s
e.push(c)}b=new Float32Array(3e4)
s=$.$get$co()
q=P.S()
q.j(0,"cDepthTest",!0)
q.j(0,"cDepthWrite",!1)
q.j(0,"cBlendEquation",s)
q.j(0,"cStencilFunc",$.$get$d_())
a=y.createElement("canvas")
a.width=64
a.height=64
a0=C.D.cm(a,"2d")
a1=J.eg(a0,32,32,1,32,32,22)
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
y=new G.hA(!1,!1,!1,!0,1,9729,9729)
s=J.eh(r.a)
p=new G.fm(a,"Utils::Particles",s,3553,r,y)
J.aM(r.a,3553,s)
J.eB(r.a,37440,1)
p.cN(a)
y.cI(r,3553)
J.ex(r.a)
J.aM(r.a,3553,null)
q.j(0,"uTexture",p)
q.j(0,"uPointSize",200)
y=new T.a0(new Float32Array(16))
y.a9()
q.j(0,"uModelMatrix",y)
y=[]
for(d=0;d<1e4;++d){s=new Float32Array(3)
p=new T.o(new Float32Array(3))
p.u(new T.o(s))
y.push(p)}s=i.d
p=i.e.x
o=P.S()
n=J.ei(s.a)
a2=new G.fH(s,n,0,o,p,null,0,-1,null,null,P.S(),"meshdata:",!1,!0)
m=G.cE(y,null)
o.j(0,"aPosition",J.c9(s.a))
a2.aZ(m)
a3=$.$get$V().h(0,"aPosition")
if(a3==null)H.M("Unknown canonical aPosition")
a4=p.h(0,"aPosition")
J.br(s.a,n)
s.bJ(0,a4,0)
s.cg(0,o.h(0,"aPosition"),a4,a3.b_(),5126,!1,0,0)
G.ih(new G.fk(!0,[],[],y,P.S()),a2)
z.a=0
new R.jV(z,k,e,h,g,w,b,a2,i,j,new G.fF(q,"stars",!1,!0),x).$1(0)},
fZ:{"^":"c;a,b,c,d",
b1:function(){return this.a},
k:function(a){var z,y,x
z=this.a.a
y=this.b.a
x=this.c.a
return"POLE: "+(H.a(z[0])+" "+H.a(z[1])+" "+H.a(z[2]))+" time "+this.d+" ["+(H.a(y[0])+" "+H.a(y[1])+" "+H.a(y[2]))+"] => ["+(H.a(x[0])+" "+H.a(x[1])+" "+H.a(x[2]))+"]"}},
fp:{"^":"c;a,b",
k:function(a){var z=this.a.a
return"ION: "+(H.a(z[0])+" "+H.a(z[1])+" "+H.a(z[2]))+" speed: "+this.b},
cR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p
z=new T.o(new Float32Array(3))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x){w=a[x]
v=this.a
u=w.b1()
t=new Float32Array(3)
s=new T.o(t)
s.u(v)
r=u.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
u=t[0]
v=t[1]
t=t[2]
q=Math.sqrt(u*u+v*v+t*t)
if(q<=0.2)continue
if(q>100.1){y=c.bP(a.length)
if(y<0||y>=a.length)return H.h(a,y)
y=a[y].a
v=R.cW(c,20*d)
u=new Float32Array(3)
t=new T.o(u)
t.u(y)
r=v.a
u[0]=u[0]+r[0]
u[1]=u[1]+r[1]
u[2]=u[2]+r[2]
this.a=t
H.aJ("too far "+H.a(q))
return}v=new Float32Array(3)
u=new T.o(v)
u.u(s)
u.a8(0,1/(q*q))
u=new Float32Array(3)
p=new T.o(u)
p.u(z)
u[0]=u[0]+v[0]
u[1]=u[1]+v[1]
u[2]=u[2]+v[2]
z=p}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.J)(b),++x,z=p){v=b[x].b1()
u=this.a
t=new Float32Array(3)
s=new T.o(t)
s.u(v)
r=u.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
u=t[0]
v=t[1]
t=t[2]
q=Math.sqrt(u*u+v*v+t*t)
if(q<=0.2){y=c.bP(a.length)
if(y<0||y>=a.length)return H.h(a,y)
y=a[y].a
v=R.cW(c,20*d)
u=new Float32Array(3)
t=new T.o(u)
t.u(y)
r=v.a
u[0]=u[0]+r[0]
u[1]=u[1]+r[1]
u[2]=u[2]+r[2]
this.a=t
H.aJ("too close: "+H.a(q))
return}v=new Float32Array(3)
u=new T.o(v)
u.u(s)
u.a8(0,1/(q*q))
u=new Float32Array(3)
p=new T.o(u)
p.u(z)
u[0]=u[0]+v[0]
u[1]=u[1]+v[1]
u[2]=u[2]+v[2]}y=this.a
v=new T.o(new Float32Array(3))
v.u(z)
v.ai(0)
this.a=y.n(0,v.aR(d).aR(this.b))}},
jV:{"^":"f:19;a,b,c,d,e,f,r,x,y,z,Q,ch",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=this.a
y=J.aH(b5)
x=y.J(b5,z.a)
z.a=y.n(b5,0)
y=this.b
y.go+=0.001
if(J.E(x,0)){for(z=this.c,w=z.length,v=this.d,u=this.e,t=this.f,s=this.r,r=s.length,q=0,p=0;p<z.length;z.length===w||(0,H.J)(z),++p){o=z[p]
if(typeof x!=="number")return x.cl()
o.cR(v,u,t,x/1000)
n=o.a.a
m=n[0]
if(q>=r)return H.h(s,q)
s[q]=m
m=q+1
l=n[1]
if(m>=r)return H.h(s,m)
s[m]=l
l=q+2
n=n[2]
if(l>=r)return H.h(s,l)
s[l]=n
q+=3}this.x.aZ(s)}z=y.r1
w=z.a
if(w.v(0,0)||w.v(0,1)){w=y.go
v=z.d
if(typeof v!=="number")return v.Z()
y.go=w+v*0.01
v=y.id
w=z.e
if(typeof w!=="number")return w.Z()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.v(0,37))y.go+=0.03
else if(v.v(0,39))y.go-=0.03
if(v.v(0,38))y.id+=0.03
else if(v.v(0,40))y.id-=0.03
if(v.v(0,33))y.fy*=0.99
else if(v.v(0,34))y.fy*=1.01
if(v.v(0,32)){y.go=0
y.id=0}v=z.f
if(typeof v!=="number")return v.Z()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.b.dE(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
k=u*Math.cos(v)
s=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
r=y.d.a
r[12]=k*s
r[13]=u*v
r[14]=k*t
t=y.k2
v=t.a
r[12]=r[12]+v[0]
r[13]=r[13]+v[1]
r[14]=r[14]+v[2]
j=r[12]
i=r[13]
h=r[14]
g=new T.o(new Float32Array(3))
g.ab(0,1,0)
v=y.e
u=v.a
u[0]=r[12]
u[1]=r[13]
u[2]=r[14]
f=v.J(0,t)
f.ai(0)
e=g.bC(f)
e.ai(0)
d=f.bC(e)
d.ai(0)
t=e.aB(v)
u=d.aB(v)
v=f.aB(v)
s=e.a
n=s[0]
m=d.a
l=m[0]
c=f.a
b=c[0]
a=s[1]
a0=m[1]
a1=c[1]
s=s[2]
m=m[2]
c=c[2]
r[15]=1
r[14]=-v
r[13]=-u
r[12]=-t
r[11]=0
r[10]=c
r[9]=m
r[8]=s
r[7]=0
r[6]=a1
r[5]=a0
r[4]=a
r[3]=0
r[2]=b
r[1]=l
r[0]=n
r[12]=j
r[13]=i
r[14]=h
n=y.f.a
n[0]=r[2]
n[1]=r[6]
n[2]=r[10]
y=-y.k1
l=n[0]
b=n[1]
a=n[2]
a2=Math.sqrt(l*l+b*b+a*a)
j=n[0]/a2
i=n[1]/a2
h=n[2]/a2
a3=Math.cos(y)
a4=Math.sin(y)
a5=1-a3
a6=j*j*a5+a3
y=h*a4
a7=j*i*a5-y
n=i*a4
a8=j*h*a5+n
a9=i*j*a5+y
b0=i*i*a5+a3
y=j*a4
b1=i*h*a5-y
b2=h*j*a5-n
b3=h*i*a5+y
b4=h*h*a5+a3
y=r[0]
n=r[4]
a=r[8]
b=r[1]
l=r[5]
a0=r[9]
a1=r[2]
s=r[6]
m=r[10]
c=r[3]
t=r[7]
u=r[11]
r[0]=y*a6+n*a9+a*b2
r[1]=b*a6+l*a9+a0*b2
r[2]=a1*a6+s*a9+m*b2
r[3]=c*a6+t*a9+u*b2
r[4]=y*a7+n*b0+a*b3
r[5]=b*a7+l*b0+a0*b3
r[6]=a1*a7+s*b0+m*b3
r[7]=c*a7+t*b0+u*b3
r[8]=y*a8+n*b1+a*b4
r[9]=b*a8+l*b1+a0*b4
r[10]=a1*a8+s*b1+m*b4
r[11]=c*a8+t*b1+u*b4
w.c.a3(0)
w.b.a3(0)
z.e=0
z.d=0
z.f=0
z.c.a3(0)
z.b.a3(0)
this.y.cF(this.x,[this.z,this.Q])
C.a7.gdu(window).c0(this)
this.ch.cS(b5)}}},1]]
setupProgram(dart,0,0)
J.p=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cH.prototype
return J.cG.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.cI.prototype
if(typeof a=="boolean")return J.fv.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.aX(a)}
J.jF=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.aX(a)}
J.a3=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.aX(a)}
J.bo=function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.aX(a)}
J.aH=function(a){if(typeof a=="number")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aV.prototype
return a}
J.jG=function(a){if(typeof a=="number")return J.aw.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aV.prototype
return a}
J.dW=function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aV.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.c)return a
return J.aX(a)}
J.ao=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jF(a).n(a,b)}
J.D=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).F(a,b)}
J.E=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aH(a).a7(a,b)}
J.aL=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aH(a).R(a,b)}
J.e5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aH(a).J(a,b)}
J.e6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a3(a).h(a,b)}
J.e7=function(a,b,c,d){return J.d(a).de(a,b,c,d)}
J.c5=function(a,b){return J.d(a).bl(a,b)}
J.e8=function(a,b,c,d){return J.d(a).bm(a,b,c,d)}
J.c6=function(a,b,c){return J.d(a).bo(a,b,c)}
J.e9=function(a,b){return J.d(a).dw(a,b)}
J.c7=function(a,b,c){return J.d(a).bp(a,b,c)}
J.aM=function(a,b,c){return J.d(a).br(a,b,c)}
J.br=function(a,b){return J.d(a).dB(a,b)}
J.ea=function(a,b){return J.d(a).bs(a,b)}
J.eb=function(a,b,c){return J.d(a).bt(a,b,c)}
J.ec=function(a,b,c,d){return J.d(a).bu(a,b,c,d)}
J.ed=function(a,b,c,d,e){return J.d(a).bw(a,b,c,d,e)}
J.c8=function(a,b){return J.dW(a).dF(a,b)}
J.ee=function(a,b){return J.jG(a).O(a,b)}
J.bs=function(a,b,c){return J.a3(a).dH(a,b,c)}
J.c9=function(a){return J.d(a).by(a)}
J.ef=function(a){return J.d(a).bz(a)}
J.eg=function(a,b,c,d,e,f,g){return J.d(a).dJ(a,b,c,d,e,f,g)}
J.eh=function(a){return J.d(a).bB(a)}
J.ei=function(a){return J.d(a).dK(a)}
J.ej=function(a,b){return J.d(a).bD(a,b)}
J.bt=function(a,b){return J.d(a).bE(a,b)}
J.ek=function(a,b,c,d){return J.d(a).bF(a,b,c,d)}
J.el=function(a,b,c,d,e){return J.d(a).dM(a,b,c,d,e)}
J.em=function(a,b,c,d,e){return J.d(a).bG(a,b,c,d,e)}
J.en=function(a,b,c,d,e,f){return J.d(a).dN(a,b,c,d,e,f)}
J.ca=function(a,b){return J.bo(a).q(a,b)}
J.aZ=function(a,b){return J.d(a).bH(a,b)}
J.eo=function(a,b){return J.d(a).bI(a,b)}
J.ep=function(a){return J.d(a).dO(a)}
J.cb=function(a,b){return J.bo(a).w(a,b)}
J.cc=function(a){return J.d(a).gdv(a)}
J.ap=function(a){return J.d(a).gK(a)}
J.Y=function(a){return J.p(a).gB(a)}
J.aN=function(a){return J.bo(a).gH(a)}
J.Z=function(a){return J.a3(a).gi(a)}
J.eq=function(a){return J.d(a).ge_(a)}
J.er=function(a){return J.d(a).gaE(a)}
J.cd=function(a){return J.d(a).gT(a)}
J.es=function(a){return J.d(a).ge5(a)}
J.et=function(a){return J.d(a).gc3(a)}
J.ce=function(a){return J.d(a).gee(a)}
J.eu=function(a){return J.d(a).aI(a)}
J.ev=function(a,b,c){return J.d(a).aJ(a,b,c)}
J.ew=function(a){return J.d(a).al(a)}
J.ex=function(a){return J.d(a).aK(a)}
J.ey=function(a,b){return J.d(a).aL(a,b)}
J.ez=function(a,b,c){return J.d(a).aM(a,b,c)}
J.cf=function(a,b,c){return J.d(a).aP(a,b,c)}
J.eA=function(a,b){return J.d(a).bN(a,b)}
J.eB=function(a,b,c){return J.d(a).bV(a,b,c)}
J.cg=function(a){return J.bo(a).e1(a)}
J.eC=function(a,b){return J.d(a).sag(a,b)}
J.eD=function(a,b,c,d){return J.d(a).aV(a,b,c,d)}
J.eE=function(a,b,c,d,e,f,g){return J.d(a).bY(a,b,c,d,e,f,g)}
J.eF=function(a,b,c,d){return J.d(a).bZ(a,b,c,d)}
J.ch=function(a,b,c,d){return J.d(a).c_(a,b,c,d)}
J.ci=function(a){return J.aH(a).e6(a)}
J.eG=function(a){return J.dW(a).e8(a)}
J.aq=function(a){return J.p(a).k(a)}
J.eH=function(a,b,c,d){return J.d(a).ea(a,b,c,d)}
J.eI=function(a,b,c){return J.d(a).c4(a,b,c)}
J.eJ=function(a,b,c){return J.d(a).c5(a,b,c)}
J.bu=function(a,b,c){return J.d(a).c6(a,b,c)}
J.eK=function(a,b,c){return J.d(a).c7(a,b,c)}
J.cj=function(a,b,c){return J.d(a).c8(a,b,c)}
J.ck=function(a,b,c){return J.d(a).c9(a,b,c)}
J.cl=function(a,b,c){return J.d(a).ca(a,b,c)}
J.cm=function(a,b,c,d){return J.d(a).cb(a,b,c,d)}
J.cn=function(a,b,c,d){return J.d(a).cc(a,b,c,d)}
J.eL=function(a,b){return J.d(a).ce(a,b)}
J.eM=function(a,b,c){return J.d(a).eb(a,b,c)}
J.eN=function(a,b,c,d,e,f,g){return J.d(a).cf(a,b,c,d,e,f,g)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.bv.prototype
C.D=W.eT.prototype
C.o=W.f1.prototype
C.E=W.f7.prototype
C.F=J.e.prototype
C.d=J.au.prototype
C.u=J.cG.prototype
C.a=J.cH.prototype
C.c=J.cI.prototype
C.b=J.aw.prototype
C.j=J.ax.prototype
C.M=J.ay.prototype
C.Q=H.fQ.prototype
C.R=W.fS.prototype
C.x=J.fY.prototype
C.C=W.hy.prototype
C.r=J.aV.prototype
C.a7=W.hG.prototype
C.h=new P.iE()
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
C.N=H.A(I.al(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.O=I.al(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.P=I.al([])
C.p=H.A(I.al(["bind","if","ref","repeat","syntax"]),[P.l])
C.q=H.A(I.al(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.S=new G.u("vec3","vertex btangents",0)
C.e=new G.u("vec3","",0)
C.T=new G.u("vec4","delta from light",0)
C.n=new G.u("","",0)
C.y=new G.u("vec3","vertex coordinates",0)
C.U=new G.u("vec3","vertex binormals",0)
C.z=new G.u("vec4","for wireframe",0)
C.V=new G.u("vec4","per vertex color",0)
C.W=new G.u("float","for normal maps",0)
C.k=new G.u("mat4","",0)
C.Y=new G.u("mat4","",4)
C.X=new G.u("mat4","",128)
C.f=new G.u("float","",0)
C.Z=new G.u("float","",4)
C.a_=new G.u("float","depth for shadowmaps",0)
C.i=new G.u("sampler2D","",0)
C.a0=new G.u("float","for bump maps",0)
C.a1=new G.u("vec2","texture uvs",0)
C.a2=new G.u("float","time since program start in sec",0)
C.l=new G.u("vec2","",0)
C.a3=new G.u("samplerCube","",0)
C.m=new G.u("vec4","",0)
C.a4=new G.u("vec3","vertex normals",0)
C.a5=new G.u("sampler2DShadow","",0)
C.A=new G.u("vec3","per vertex color",0)
C.B=new G.u("mat3","",0)
C.a6=new G.u("vec3","vertex tangents",0)
$.Q=0
$.ar=null
$.cp=null
$.dY=null
$.dP=null
$.e3=null
$.bm=null
$.bp=null
$.c1=null
$.ah=null
$.aE=null
$.aF=null
$.bV=!1
$.v=C.h
$.a_=null
$.bA=null
$.cB=null
$.cA=null
$.cy=null
$.cx=null
$.cw=null
$.cv=null
$.dV=0
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
I.$lazy(y,x,w)}})(["ct","$get$ct",function(){return H.dX("_$dart_dartClosure")},"bE","$get$bE",function(){return H.dX("_$dart_js")},"d8","$get$d8",function(){return H.U(H.bj({
toString:function(){return"$receiver$"}}))},"d9","$get$d9",function(){return H.U(H.bj({$method$:null,
toString:function(){return"$receiver$"}}))},"da","$get$da",function(){return H.U(H.bj(null))},"db","$get$db",function(){return H.U(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"df","$get$df",function(){return H.U(H.bj(void 0))},"dg","$get$dg",function(){return H.U(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dd","$get$dd",function(){return H.U(H.de(null))},"dc","$get$dc",function(){return H.U(function(){try{null.$method$}catch(z){return z.message}}())},"di","$get$di",function(){return H.U(H.de(void 0))},"dh","$get$dh",function(){return H.U(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bQ","$get$bQ",function(){return P.hK()},"cF","$get$cF",function(){var z,y
z=P.aR
y=new P.a9(0,P.hI(),null,[z])
y.cX(null,z)
return y},"aG","$get$aG",function(){return[]},"cs","$get$cs",function(){return{}},"dv","$get$dv",function(){return P.bH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bS","$get$bS",function(){return P.S()},"d_","$get$d_",function(){return new G.d6(1281,0,4294967295)},"co","$get$co",function(){return new G.d5(32774,770,769)},"V","$get$V",function(){return P.cL(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a5,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a3,"uAnimationTable",C.i,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"e2","$get$e2",function(){var z=G.cY("PointSpritesV")
z.cD(["aPosition"])
z.aX(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.b2(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"e1","$get$e1",function(){var z=G.cY("PointSpritesF")
z.aX(["uTexture"])
z.b2(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.T]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.H]},{func:1,args:[W.b7]},{func:1,ret:P.bX,args:[W.ae,P.l,P.l,W.bR]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aB]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aB]},{func:1,v:true,args:[W.r,W.r]},{func:1,args:[W.aW]},{func:1,args:[P.H,P.c]},{func:1,v:true,args:[P.aI]},{func:1,ret:P.H,args:[,,]}]
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
if(x==y)H.k_(d||a)
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
Isolate.al=a.al
Isolate.aj=a.aj
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
if(typeof dartMainRunner==="function")dartMainRunner(R.e_,[])
else R.e_([])})})()
//# sourceMappingURL=fireworks.dart.js.map
