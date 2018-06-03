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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ax=function(){}
var dart=[["","",,H,{"^":"",mz:{"^":"d;a"}}],["","",,J,{"^":"",
p:function(a){return void 0},
cv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bd:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cu==null){H.lc()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.ch("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c4()]
if(v!=null)return v
v=H.lf(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c4(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
f:{"^":"d;",
G:function(a,b){return a===b},
gB:function(a){return H.aQ(a)},
k:["d2",function(a){return"Instance of '"+H.aR(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hC:{"^":"f;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iscq:1},
hD:{"^":"f;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isb4:1},
c5:{"^":"f;",
gB:function(a){return 0},
k:["d4",function(a){return String(a)}]},
i9:{"^":"c5;"},
bb:{"^":"c5;"},
aN:{"^":"c5;",
k:function(a){var z=a[$.$get$d4()]
return z==null?this.d4(a):J.aG(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aJ:{"^":"f;$ti",
S:function(a,b){var z,y
if(!!a.fixed$length)H.a1(P.t("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.M(a))}},
ab:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
bj:function(a,b){return H.dN(a,b,null,H.D(a,0))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
geD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.dj())},
cW:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.a1(P.t("setRange"))
P.ii(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.F()
if(typeof b!=="number")return H.n(b)
z=c-b
if(z===0)return
y=J.p(d)
if(!!y.$isi){x=e
w=d}else{w=y.bj(d,e).eT(0,!1)
x=0}y=J.y(w)
v=y.gi(w)
if(typeof v!=="number")return H.n(v)
if(x+z>v)throw H.b(H.hz())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ak:function(a,b,c,d){return this.cW(a,b,c,d,0)},
bW:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.M(a))}return!1},
cY:function(a,b){if(!!a.immutable$list)H.a1(P.t("sort"))
H.iz(a,J.kH())},
ay:function(a){return this.cY(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.K(a[z],b))return!0
return!1},
k:function(a){return P.c3(a,"[","]")},
gI:function(a){return new J.cR(a,a.length,0,null,[H.D(a,0)])},
gB:function(a){return H.aQ(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.a1(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cQ(b,"newLength",null))
if(b<0)throw H.b(P.ar(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a9(a,b))
if(b>=a.length||b<0)throw H.b(H.a9(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.a1(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a9(a,b))
if(b>=a.length||b<0)throw H.b(H.a9(a,b))
a[b]=c},
l:function(a,b){var z,y,x
z=a.length
y=J.L(b)
if(typeof y!=="number")return H.n(y)
x=z+y
y=H.r([],[H.D(a,0)])
this.si(y,x)
this.ak(y,0,a.length,a)
this.ak(y,a.length,x,b)
return y},
$iso:1,
$aso:I.ax,
$isi:1,
p:{
aK:function(a){a.fixed$length=Array
return a},
mx:[function(a,b){return J.f3(a,b)},"$2","kH",8,0,23]}},
my:{"^":"aJ;$ti"},
cR:{"^":"d;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aL:{"^":"f;",
V:function(a,b){var z
if(typeof b!=="number")throw H.b(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gau(b)
if(this.gau(a)===z)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
eS:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.t(""+a+".toInt()"))},
ec:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.t(""+a+".ceil()"))},
as:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.t(""+a+".floor()"))},
ed:function(a,b,c){if(this.V(b,c)>0)throw H.b(H.U(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
eR:function(a){return a},
eV:function(a,b){var z
if(b>20)throw H.b(P.ar(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.b(H.U(b))
return a+b},
F:function(a,b){if(typeof b!=="number")throw H.b(H.U(b))
return a-b},
a_:function(a,b){if(typeof b!=="number")throw H.b(H.U(b))
return a/b},
aj:function(a,b){var z
if(typeof b!=="number")throw H.b(H.U(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
Z:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bP(a,b)},
R:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.t("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bN:function(a,b){var z
if(a>0)z=this.dY(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dY:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.b(H.U(b))
return a<b},
ai:function(a,b){if(typeof b!=="number")throw H.b(H.U(b))
return a>b},
$isaw:1,
$isaZ:1},
dl:{"^":"aL;",$isF:1},
dk:{"^":"aL;"},
aM:{"^":"f;",
ee:function(a,b){if(b>=a.length)H.a1(H.a9(a,b))
return a.charCodeAt(b)},
bE:function(a,b){if(b>=a.length)throw H.b(H.a9(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.b(P.cQ(b,null,null))
return a+b},
d_:function(a,b,c){var z
if(c>a.length)throw H.b(P.ar(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cZ:function(a,b){return this.d_(a,b,0)},
bl:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.a1(H.U(c))
if(b<0)throw H.b(P.bx(b,null,null))
if(typeof c!=="number")return H.n(c)
if(b>c)throw H.b(P.bx(b,null,null))
if(c>a.length)throw H.b(P.bx(c,null,null))
return a.substring(b,c)},
d0:function(a,b){return this.bl(a,b,null)},
eU:function(a){return a.toLowerCase()},
eh:function(a,b,c){if(c>a.length)throw H.b(P.ar(c,0,a.length,null,null))
return H.lm(a,b,c)},
V:function(a,b){var z
if(typeof b!=="string")throw H.b(H.U(b))
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
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.a9(a,b))
if(b>=a.length||b<0)throw H.b(H.a9(a,b))
return a[b]},
$iso:1,
$aso:I.ax,
$isk:1}}],["","",,H,{"^":"",
dj:function(){return new P.bB("No element")},
hA:function(){return new P.bB("Too many elements")},
hz:function(){return new P.bB("Too few elements")},
iz:function(a,b){var z=J.L(a)
if(typeof z!=="number")return z.F()
H.b7(a,0,z-1,b)},
b7:function(a,b,c,d){if(c-b<=32)H.iy(a,b,c,d)
else H.ix(a,b,c,d)},
iy:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.y(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.W(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
ix:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.R(c-b+1,6)
y=b+z
x=c-z
w=C.c.R(b+c,2)
v=w-z
u=w+z
t=J.y(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.W(d.$2(s,r),0)){n=r
r=s
s=n}if(J.W(d.$2(p,o),0)){n=o
o=p
p=n}if(J.W(d.$2(s,q),0)){n=q
q=s
s=n}if(J.W(d.$2(r,q),0)){n=q
q=r
r=n}if(J.W(d.$2(s,p),0)){n=p
p=s
s=n}if(J.W(d.$2(q,p),0)){n=p
p=q
q=n}if(J.W(d.$2(r,o),0)){n=o
o=r
r=n}if(J.W(d.$2(r,q),0)){n=q
q=r
r=n}if(J.W(d.$2(p,o),0)){n=o
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
h=J.p(i)
if(h.G(i,0))continue
if(h.a0(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aa(i)
if(h.ai(i,0)){--l
continue}else{g=l-1
if(h.a0(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aj(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.W(d.$2(j,p),0))for(;!0;)if(J.W(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aj(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b7(a,b,m-2,d)
H.b7(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.K(d.$2(t.h(a,m),r),0);)++m
for(;J.K(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.K(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aj(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b7(a,m,l,d)}else H.b7(a,m,l,d)},
bp:{"^":"b2;$ti"},
aO:{"^":"bp;$ti",
gI:function(a){return new H.dr(this,this.gi(this),0,null,[H.ct(this,"aO",0)])},
w:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.b(P.M(this))}},
b7:function(a,b){return this.d3(0,b)}},
iL:{"^":"aO;a,b,c,$ti",
ds:function(a,b,c,d){},
gdL:function(){var z=J.L(this.a)
return z},
gdZ:function(){var z,y
z=J.L(this.a)
y=this.b
if(typeof z!=="number")return H.n(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.L(this.a)
y=this.b
if(typeof z!=="number")return H.n(z)
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdZ()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.n(b)
y=z+b
if(!(b<0)){z=this.gdL()
if(typeof z!=="number")return H.n(z)
z=y>=z}else z=!0
if(z)throw H.b(P.B(b,this,"index",null,null))
return J.cB(this.a,y)},
eT:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.y(y)
w=x.gi(y)
if(typeof w!=="number")return w.F()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.r(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a0()
if(u<w)throw H.b(P.M(this))}return t},
p:{
dN:function(a,b,c,d){var z=new H.iL(a,b,c,[d])
z.ds(a,b,c,d)
return z}}},
dr:{"^":"d;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.y(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.M(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hQ:{"^":"aO;a,b,$ti",
gi:function(a){return J.L(this.a)},
q:function(a,b){return this.b.$1(J.cB(this.a,b))},
$asbp:function(a,b){return[b]},
$asaO:function(a,b){return[b]},
$asb2:function(a,b){return[b]}},
e6:{"^":"b2;a,b,$ti",
gI:function(a){return new H.iU(J.aF(this.a),this.b,this.$ti)}},
iU:{"^":"hB;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
br:{"^":"d;$ti"}}],["","",,H,{"^":"",
l4:function(a){return init.types[a]},
eM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.p(a).$isq},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aG(a)
if(typeof z!=="string")throw H.b(H.U(a))
return z},
aQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r
z=J.p(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.p(a).$isbb){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bE(w,0)===36)w=C.i.d0(w,1)
r=H.bN(H.az(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ih:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
ie:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
ia:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
ib:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
id:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
ig:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
ic:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
n:function(a){throw H.b(H.U(a))},
a:function(a,b){if(a==null)J.L(a)
throw H.b(H.a9(a,b))},
a9:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ae(!0,b,"index",null)
z=J.L(a)
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.B(b,a,"index",null,z)
return P.bx(b,"index",null)},
U:function(a){return new P.ae(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.bw()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eS})
z.name=""}else z.toString=H.eS
return z},
eS:function(){return J.aG(this.dartException)},
a1:function(a){throw H.b(a)},
z:function(a){throw H.b(P.M(a))},
Q:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lo(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bN(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c6(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dD(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dU()
u=$.$get$dV()
t=$.$get$dW()
s=$.$get$dX()
r=$.$get$e0()
q=$.$get$e1()
p=$.$get$dZ()
$.$get$dY()
o=$.$get$e3()
n=$.$get$e2()
m=v.U(y)
if(m!=null)return z.$1(H.c6(y,m))
else{m=u.U(y)
if(m!=null){m.method="call"
return z.$1(H.c6(y,m))}else{m=t.U(y)
if(m==null){m=s.U(y)
if(m==null){m=r.U(y)
if(m==null){m=q.U(y)
if(m==null){m=p.U(y)
if(m==null){m=s.U(y)
if(m==null){m=o.U(y)
if(m==null){m=n.U(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dD(y,m))}}return z.$1(new H.iS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dI()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ae(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dI()
return a},
ai:function(a){var z
if(a==null)return new H.eo(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eo(a,null)},
l0:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
le:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.df("Unsupported number of arguments for wrapped closure"))},
a0:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.le)
a.$identity=z
return z},
fW:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.p(c).$isi){z.$reflectionInfo=c
x=H.il(z).r}else x=c
w=d?Object.create(new H.iA().constructor.prototype):Object.create(new H.bY(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a2
$.a2=J.aD(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cZ(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.l4,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cX:H.bZ
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cZ(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fT:function(a,b,c,d){var z=H.bZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fV(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fT(y,!w,z,b)
if(y===0){w=$.a2
$.a2=J.aD(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.aH
if(v==null){v=H.bm("self")
$.aH=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a2
$.a2=J.aD(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.aH
if(v==null){v=H.bm("self")
$.aH=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
fU:function(a,b,c,d){var z,y
z=H.bZ
y=H.cX
switch(b?-1:a){case 0:throw H.b(H.is("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fV:function(a,b){var z,y,x,w,v,u,t,s
z=$.aH
if(z==null){z=H.bm("self")
$.aH=z}y=$.cW
if(y==null){y=H.bm("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fU(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a2
$.a2=J.aD(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a2
$.a2=J.aD(y,1)
return new Function(z+H.c(y)+"}")()},
cr:function(a,b,c,d,e,f){var z,y
z=J.aK(b)
y=!!J.p(c).$isi?J.aK(c):c
return H.fW(a,z,y,!!d,e,f)},
lk:function(a,b){var z=J.y(b)
throw H.b(H.cY(a,z.bl(b,3,z.gi(b))))},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else z=!0
if(z)return a
H.lk(a,b)},
cs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eG:function(a,b){var z,y
if(a==null)return!1
z=H.cs(J.p(a))
if(z==null)y=!1
else y=H.eL(z,b)
return y},
kQ:function(a){var z
if(a instanceof H.h){z=H.cs(J.p(a))
if(z!=null)return H.cw(z,null)
return"Closure"}return H.aR(a)},
ln:function(a){throw H.b(new P.h1(a))},
eJ:function(a){return init.getIsolateTag(a)},
r:function(a,b){a.$ti=b
return a},
az:function(a){if(a==null)return
return a.$ti},
nZ:function(a,b,c){return H.b_(a["$as"+H.c(c)],H.az(b))},
be:function(a,b,c,d){var z=H.b_(a["$as"+H.c(c)],H.az(b))
return z==null?null:z[d]},
ct:function(a,b,c){var z=H.b_(a["$as"+H.c(b)],H.az(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.az(a)
return z==null?null:z[b]},
cw:function(a,b){var z=H.aC(a,b)
return z},
aC:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bN(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aC(z,b)
return H.kG(a,b)}return"unknown-reified-type"},
kG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aC(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aC(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.l_(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aC(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bN:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.ce("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return w?"":"<"+z.k(0)+">"},
l3:function(a){var z,y,x
if(a instanceof H.h){z=H.cs(J.p(a))
if(z!=null)return H.cw(z,null)}y=J.p(a).constructor.builtin$cls
if(a==null)return y
x=H.bN(a.$ti,0,null)
return y+x},
b_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bc:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.az(a)
y=J.p(a)
if(y[b]==null)return!1
return H.eB(H.b_(y[d],z),c)},
bg:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bc(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bN(c,0,null)
throw H.b(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eB:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.V(a[y],b[y]))return!1
return!0},
nX:function(a,b,c){return a.apply(b,H.b_(J.p(b)["$as"+H.c(c)],H.az(b)))},
V:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b4")return!0
if('func' in b)return H.eL(a,b)
if('func' in a)return b.builtin$cls==="mp"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cw(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eB(H.b_(u,z),x)},
eA:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.V(z,v)||H.V(v,z)))return!1}return!0},
kR:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aK(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.V(v,u)||H.V(u,v)))return!1}return!0},
eL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.V(z,y)||H.V(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eA(x,w,!1))return!1
if(!H.eA(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.V(o,n)||H.V(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.V(o,n)||H.V(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.V(o,n)||H.V(n,o)))return!1}}return H.kR(a.named,b.named)},
nY:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lf:function(a){var z,y,x,w,v,u
z=$.eK.$1(a)
y=$.bL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bM[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ex.$2(a,z)
if(z!=null){y=$.bL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bM[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bO(x)
$.bL[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bM[z]=x
return x}if(v==="-"){u=H.bO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eO(a,x)
if(v==="*")throw H.b(P.ch(z))
if(init.leafTags[z]===true){u=H.bO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eO(a,x)},
eO:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cv(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bO:function(a){return J.cv(a,!1,null,!!a.$isq)},
lj:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bO(z)
else return J.cv(z,c,null,null)},
lc:function(){if(!0===$.cu)return
$.cu=!0
H.ld()},
ld:function(){var z,y,x,w,v,u,t,s
$.bL=Object.create(null)
$.bM=Object.create(null)
H.l8()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eP.$1(v)
if(u!=null){t=H.lj(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l8:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.av(C.G,H.av(C.L,H.av(C.u,H.av(C.u,H.av(C.K,H.av(C.H,H.av(C.I(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eK=new H.l9(v)
$.ex=new H.la(u)
$.eP=new H.lb(t)},
av:function(a,b){return a(b)||b},
lm:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ik:{"^":"d;a,b,c,d,e,f,r,x",p:{
il:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aK(z)
y=z[0]
x=z[1]
return new H.ik(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iP:{"^":"d;a,b,c,d,e,f",
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
a4:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e_:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i6:{"^":"I;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
dD:function(a,b){return new H.i6(a,b==null?null:b.method)}}},
hE:{"^":"I;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
c6:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hE(a,y,z?null:b.receiver)}}},
iS:{"^":"I;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lo:{"^":"h:0;a",
$1:function(a){if(!!J.p(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eo:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaT:1},
h:{"^":"d;",
k:function(a){return"Closure '"+H.aR(this).trim()+"'"},
gcR:function(){return this},
gcR:function(){return this}},
dO:{"^":"h;"},
iA:{"^":"dO;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bY:{"^":"dO;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aQ(this.a)
else y=typeof z!=="object"?J.ad(z):H.aQ(z)
return(y^H.aQ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aR(z)+"'")},
p:{
bZ:function(a){return a.a},
cX:function(a){return a.c},
bm:function(a){var z,y,x,w,v
z=new H.bY("self","target","receiver","name")
y=J.aK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fQ:{"^":"I;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fQ("CastError: "+H.c(P.c1(a))+": type '"+H.kQ(a)+"' is not a subtype of type '"+b+"'")}}},
ir:{"^":"I;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
is:function(a){return new H.ir(a)}}},
e4:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.ad(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.e4&&J.K(this.a,b.a)}},
dm:{"^":"b3;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gJ:function(a){return new H.dp(this,[H.D(this,0)])},
D:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bH(y,b)}else return this.eB(b)},
eB:function(a){var z=this.d
if(z==null)return!1
return this.aU(this.aI(z,J.ad(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aq(z,b)
x=y==null?null:y.gah()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aq(w,b)
x=y==null?null:y.gah()
return x}else return this.eC(b)},
eC:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aI(z,J.ad(a)&0x3ffffff)
x=this.aU(y,a)
if(x<0)return
return y[x].gah()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aM()
this.b=z}this.by(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aM()
this.c=y}this.by(y,b,c)}else{x=this.d
if(x==null){x=this.aM()
this.d=x}w=J.ad(b)&0x3ffffff
v=this.aI(x,w)
if(v==null)this.aQ(x,w,[this.aC(b,c)])
else{u=this.aU(v,b)
if(u>=0)v[u].sah(c)
else v.push(this.aC(b,c))}}},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bz()}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.M(this))
z=z.c}},
by:function(a,b,c){var z=this.aq(a,b)
if(z==null)this.aQ(a,b,this.aC(b,c))
else z.sah(c)},
bz:function(){this.r=this.r+1&67108863},
aC:function(a,b){var z,y
z=new H.hM(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bz()
return z},
aU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gez(),b))return y
return-1},
k:function(a){return P.dw(this)},
aq:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
aQ:function(a,b,c){a[b]=c},
dJ:function(a,b){delete a[b]},
bH:function(a,b){return this.aq(a,b)!=null},
aM:function(){var z=Object.create(null)
this.aQ(z,"<non-identifier-key>",z)
this.dJ(z,"<non-identifier-key>")
return z}},
hM:{"^":"d;ez:a<,ah:b@,c,d"},
dp:{"^":"bp;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.al(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){return this.a.D(0,b)},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.b(P.M(z))
y=y.c}}},
al:{"^":"d;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
l9:{"^":"h:0;a",
$1:function(a){return this.a(a)}},
la:{"^":"h:10;a",
$2:function(a,b){return this.a(a,b)}},
lb:{"^":"h:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
l_:function(a){return J.aK(H.r(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
aB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bJ:function(a){var z,y,x
if(!!J.p(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.a9(b,a))},
i2:{"^":"f;","%":"DataView;ArrayBufferView;ca|ei|ej|dz|ek|el|an"},
ca:{"^":"i2;",
gi:function(a){return a.length},
$iso:1,
$aso:I.ax,
$isq:1,
$asq:I.ax},
dz:{"^":"ej;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a8(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.aw]},
$asj:function(){return[P.aw]},
$isi:1,
$asi:function(){return[P.aw]},
"%":"Float64Array"},
an:{"^":"el;",
j:function(a,b,c){H.a8(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.F]},
$asj:function(){return[P.F]},
$isi:1,
$asi:function(){return[P.F]}},
i1:{"^":"dz;",$isc2:1,"%":"Float32Array"},
mP:{"^":"an;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mQ:{"^":"an;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$ishx:1,
"%":"Int32Array"},
mR:{"^":"an;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mS:{"^":"an;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mT:{"^":"an;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mU:{"^":"an;",
gi:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mV:{"^":"an;",
gi:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ei:{"^":"ca+j;"},
ej:{"^":"ei+br;"},
ek:{"^":"ca+j;"},
el:{"^":"ek+br;"}}],["","",,P,{"^":"",
j0:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kS()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a0(new P.j2(z),1)).observe(y,{childList:true})
return new P.j1(z,y,x)}else if(self.setImmediate!=null)return P.kT()
return P.kU()},
nK:[function(a){self.scheduleImmediate(H.a0(new P.j3(a),0))},"$1","kS",4,0,6],
nL:[function(a){self.setImmediate(H.a0(new P.j4(a),0))},"$1","kT",4,0,6],
nM:[function(a){P.kj(0,a)},"$1","kU",4,0,6],
kL:function(a,b){if(H.eG(a,{func:1,args:[P.b4,P.b4]})){b.toString
return a}else{b.toString
return a}},
hl:function(a,b,c){var z
if(a==null)a=new P.bw()
z=$.u
if(z!==C.d)z.toString
z=new P.P(0,z,null,[c])
z.bC(a,b)
return z},
hm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.P(0,$.u,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.ho(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.b5(new P.hn(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.P(0,$.u,null,[null])
r.bB(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.Q(p)
t=H.ai(p)
if(z.b===0||!1)return P.hl(u,t,null)
else{z.c=u
z.d=t}}return y},
kJ:function(){var z,y
for(;z=$.at,z!=null;){$.aX=null
y=z.b
$.at=y
if(y==null)$.aW=null
z.a.$0()}},
nW:[function(){$.co=!0
try{P.kJ()}finally{$.aX=null
$.co=!1
if($.at!=null)$.$get$cj().$1(P.eC())}},"$0","eC",0,0,3],
ev:function(a){var z=new P.e7(a,null)
if($.at==null){$.aW=z
$.at=z
if(!$.co)$.$get$cj().$1(P.eC())}else{$.aW.b=z
$.aW=z}},
kP:function(a){var z,y,x
z=$.at
if(z==null){P.ev(a)
$.aX=$.aW
return}y=new P.e7(a,null)
x=$.aX
if(x==null){y.b=z
$.aX=y
$.at=y}else{y.b=x.b
x.b=y
$.aX=y
if(y.b==null)$.aW=y}},
ll:function(a){var z=$.u
if(C.d===z){P.au(null,null,C.d,a)
return}z.toString
P.au(null,null,z,z.bZ(a))},
kO:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.Q(u)
y=H.ai(u)
$.u.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aE(x)
w=t
v=x.ga8()
c.$2(w,v)}}},
kB:function(a,b,c,d){var z=a.eb(0)
if(!!J.p(z).$isak&&z!==$.$get$dh())z.eY(new P.kE(b,c,d))
else b.N(c,d)},
kC:function(a,b){return new P.kD(a,b)},
bK:function(a,b,c,d,e){var z={}
z.a=d
P.kP(new P.kM(z,e))},
et:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
eu:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
kN:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
au:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bZ(d):c.e8(d)
P.ev(d)},
j2:{"^":"h:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j1:{"^":"h:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j3:{"^":"h:1;a",
$0:function(){this.a.$0()}},
j4:{"^":"h:1;a",
$0:function(){this.a.$0()}},
ki:{"^":"d;a,b,c",
dE:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a0(new P.kk(this,b),0),a)
else throw H.b(P.t("`setTimeout()` not found."))},
p:{
kj:function(a,b){var z=new P.ki(!0,null,0)
z.dE(a,b)
return z}}},
kk:{"^":"h:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ak:{"^":"d;$ti"},
ho:{"^":"h:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.N(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.N(z.c,z.d)}},
hn:{"^":"h;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.a(x,z)
x[z]=a
if(y===0)this.c.bG(x)}else if(z.b===0&&!this.e)this.c.N(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lC:{"^":"d;$ti"},
ea:{"^":"d;$ti",
eg:function(a,b){if(a==null)a=new P.bw()
if(this.a.a!==0)throw H.b(P.b9("Future already completed"))
$.u.toString
this.N(a,b)},
ef:function(a){return this.eg(a,null)}},
e8:{"^":"ea;a,$ti",
ar:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.b9("Future already completed"))
z.bB(b)},
N:function(a,b){this.a.bC(a,b)}},
kd:{"^":"ea;a,$ti",
ar:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.b9("Future already completed"))
z.ao(b)},
N:function(a,b){this.a.N(a,b)}},
eb:{"^":"d;aO:a<,b,c,d,e,$ti",
ge3:function(){return this.b.b},
gcn:function(){return(this.c&1)!==0},
gey:function(){return(this.c&2)!==0},
gcm:function(){return this.c===8},
ew:function(a){return this.b.b.b3(this.d,a)},
eF:function(a){if(this.c!==6)return!0
return this.b.b.b3(this.d,J.aE(a))},
ev:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eG(z,{func:1,args:[P.d,P.aT]}))return x.eN(z,y.gT(a),a.ga8())
else return x.b3(z,y.gT(a))},
ex:function(){return this.b.b.cv(this.d)}},
P:{"^":"d;bO:a<,b,dU:c<,$ti",
gdO:function(){return this.a===2},
gaJ:function(){return this.a>=4},
b5:function(a,b){var z,y,x
z=$.u
if(z!==C.d){z.toString
if(b!=null)b=P.kL(b,z)}y=new P.P(0,z,null,[null])
x=b==null?1:3
this.aD(new P.eb(null,y,x,a,b,[H.D(this,0),null]))
return y},
b4:function(a){return this.b5(a,null)},
eY:function(a){var z,y
z=$.u
y=new P.P(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.D(this,0)
this.aD(new P.eb(null,y,8,a,null,[z,z]))
return y},
aD:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaJ()){y.aD(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.au(null,null,z,new P.jo(this,a))}},
bK:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaO()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaJ()){v.bK(a)
return}this.a=v.a
this.c=v.c}z.a=this.aP(a)
y=this.b
y.toString
P.au(null,null,y,new P.jv(z,this))}},
af:function(){var z=this.c
this.c=null
return this.aP(z)},
aP:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaO()
z.a=y}return y},
ao:function(a){var z,y,x
z=this.$ti
y=H.bc(a,"$isak",z,"$asak")
if(y){z=H.bc(a,"$isP",z,null)
if(z)P.bG(a,this)
else P.ec(a,this)}else{x=this.af()
this.a=4
this.c=a
P.as(this,x)}},
bG:function(a){var z=this.af()
this.a=4
this.c=a
P.as(this,z)},
N:[function(a,b){var z=this.af()
this.a=8
this.c=new P.bl(a,b)
P.as(this,z)},function(a){return this.N(a,null)},"f0","$2","$1","gbF",4,2,13],
bB:function(a){var z=H.bc(a,"$isak",this.$ti,"$asak")
if(z){this.dH(a)
return}this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.jq(this,a))},
dH:function(a){var z=H.bc(a,"$isP",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.ju(this,a))}else P.bG(a,this)
return}P.ec(a,this)},
bC:function(a,b){var z
this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.jp(this,a,b))},
$isak:1,
p:{
jn:function(a,b){var z=new P.P(0,$.u,null,[b])
z.a=4
z.c=a
return z},
ec:function(a,b){var z,y,x
b.a=1
try{a.b5(new P.jr(b),new P.js(b))}catch(x){z=H.Q(x)
y=H.ai(x)
P.ll(new P.jt(b,z,y))}},
bG:function(a,b){var z
for(;a.gdO();)a=a.c
if(a.gaJ()){z=b.af()
b.a=a.a
b.c=a.c
P.as(b,z)}else{z=b.c
b.a=2
b.c=a
a.bK(z)}},
as:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aE(v)
t=v.ga8()
y.toString
P.bK(null,null,y,u,t)}return}for(;b.gaO()!=null;b=s){s=b.a
b.a=null
P.as(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcn()||b.gcm()){q=b.ge3()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aE(v)
t=v.ga8()
y.toString
P.bK(null,null,y,u,t)
return}p=$.u
if(p==null?q!=null:p!==q)$.u=q
else p=null
if(b.gcm())new P.jy(z,x,b,w).$0()
else if(y){if(b.gcn())new P.jx(x,b,r).$0()}else if(b.gey())new P.jw(z,x,b).$0()
if(p!=null)$.u=p
y=x.b
if(!!J.p(y).$isak){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aP(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bG(y,o)
return}}o=b.b
b=o.af()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
jo:{"^":"h:1;a,b",
$0:function(){P.as(this.a,this.b)}},
jv:{"^":"h:1;a,b",
$0:function(){P.as(this.b,this.a.a)}},
jr:{"^":"h:0;a",
$1:function(a){var z=this.a
z.a=0
z.ao(a)}},
js:{"^":"h:14;a",
$2:function(a,b){this.a.N(a,b)},
$1:function(a){return this.$2(a,null)}},
jt:{"^":"h:1;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
jq:{"^":"h:1;a,b",
$0:function(){this.a.bG(this.b)}},
ju:{"^":"h:1;a,b",
$0:function(){P.bG(this.b,this.a)}},
jp:{"^":"h:1;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
jy:{"^":"h:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ex()}catch(w){y=H.Q(w)
x=H.ai(w)
if(this.d){v=J.aE(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bl(y,x)
u.a=!0
return}if(!!J.p(z).$isak){if(z instanceof P.P&&z.gbO()>=4){if(z.gbO()===8){v=this.b
v.b=z.gdU()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.b4(new P.jz(t))
v.a=!1}}},
jz:{"^":"h:0;a",
$1:function(a){return this.a}},
jx:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ew(this.c)}catch(x){z=H.Q(x)
y=H.ai(x)
w=this.a
w.b=new P.bl(z,y)
w.a=!0}}},
jw:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.eF(z)===!0&&w.e!=null){v=this.b
v.b=w.ev(z)
v.a=!1}}catch(u){y=H.Q(u)
x=H.ai(u)
w=this.a
v=J.aE(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bl(y,x)
s.a=!0}}},
e7:{"^":"d;a,b"},
dK:{"^":"d;$ti",
w:function(a,b){var z,y
z={}
y=new P.P(0,$.u,null,[null])
z.a=null
z.a=this.cq(new P.iH(z,this,b,y),!0,new P.iI(y),y.gbF())
return y},
gi:function(a){var z,y
z={}
y=new P.P(0,$.u,null,[P.F])
z.a=0
this.cq(new P.iJ(z),!0,new P.iK(z,y),y.gbF())
return y}},
iH:{"^":"h;a,b,c,d",
$1:function(a){P.kO(new P.iF(this.c,a),new P.iG(),P.kC(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ct(this.b,"dK",0)]}}},
iF:{"^":"h:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iG:{"^":"h:0;",
$1:function(a){}},
iI:{"^":"h:1;a",
$0:function(){this.a.ao(null)}},
iJ:{"^":"h:0;a",
$1:function(a){++this.a.a}},
iK:{"^":"h:1;a,b",
$0:function(){this.b.ao(this.a.a)}},
iE:{"^":"d;$ti"},
dL:{"^":"d;$ti"},
kE:{"^":"h:1;a,b,c",
$0:function(){return this.a.N(this.b,this.c)}},
kD:{"^":"h:15;a,b",
$2:function(a,b){P.kB(this.a,this.b,a,b)}},
bl:{"^":"d;T:a>,a8:b<",
k:function(a){return H.c(this.a)},
$isI:1},
kq:{"^":"d;"},
kM:{"^":"h:1;a,b",
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
jX:{"^":"kq;",
eO:function(a){var z,y,x
try{if(C.d===$.u){a.$0()
return}P.et(null,null,this,a)}catch(x){z=H.Q(x)
y=H.ai(x)
P.bK(null,null,this,z,y)}},
eP:function(a,b){var z,y,x
try{if(C.d===$.u){a.$1(b)
return}P.eu(null,null,this,a,b)}catch(x){z=H.Q(x)
y=H.ai(x)
P.bK(null,null,this,z,y)}},
e8:function(a){return new P.jZ(this,a)},
bZ:function(a){return new P.jY(this,a)},
e9:function(a){return new P.k_(this,a)},
h:function(a,b){return},
cv:function(a){if($.u===C.d)return a.$0()
return P.et(null,null,this,a)},
b3:function(a,b){if($.u===C.d)return a.$1(b)
return P.eu(null,null,this,a,b)},
eN:function(a,b,c){if($.u===C.d)return a.$2(b,c)
return P.kN(null,null,this,a,b,c)}},
jZ:{"^":"h:1;a,b",
$0:function(){return this.a.cv(this.b)}},
jY:{"^":"h:1;a,b",
$0:function(){return this.a.eO(this.b)}},
k_:{"^":"h:0;a,b",
$1:function(a){return this.a.eP(this.b,a)}}}],["","",,P,{"^":"",
X:function(){return new H.dm(0,null,null,null,null,null,0,[null,null])},
c7:function(a){return H.l0(a,new H.dm(0,null,null,null,null,null,0,[null,null]))},
Z:function(a,b,c,d){return new P.jK(0,null,null,null,null,null,0,[d])},
hy:function(a,b,c){var z,y
if(P.cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aY()
y.push(a)
try{P.kI(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.dM(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c3:function(a,b,c){var z,y,x
if(P.cp(a))return b+"..."+c
z=new P.ce(b)
y=$.$get$aY()
y.push(a)
try{x=z
x.a=P.dM(x.ga9(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.ga9()+c
y=z.ga9()
return y.charCodeAt(0)==0?y:y},
cp:function(a){var z,y
for(z=0;y=$.$get$aY(),z<y.length;++z)if(a===y[z])return!0
return!1},
kI:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.c(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
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
c8:function(a,b){var z,y
z=P.Z(null,null,null,b)
for(y=J.aF(a);y.t();)z.C(0,y.gA(y))
return z},
dw:function(a){var z,y,x
z={}
if(P.cp(a))return"{...}"
y=new P.ce("")
try{$.$get$aY().push(a)
x=y
x.a=x.ga9()+"{"
z.a=!0
J.cC(a,new P.hP(z,y))
z=y
z.a=z.ga9()+"}"}finally{z=$.$get$aY()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.ga9()
return z.charCodeAt(0)==0?z:z},
jK:{"^":"jB;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.cm(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dI(b)},
dI:function(a){var z=this.d
if(z==null)return!1
return this.aH(z[this.aE(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.b(P.M(this))
z=z.b}},
C:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cn()
this.b=z}return this.bA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cn()
this.c=y}return this.bA(y,b)}else return this.dF(0,b)},
dF:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cn()
this.d=z}y=this.aE(b)
x=z[y]
if(x==null)z[y]=[this.aN(b)]
else{if(this.aH(x,b)>=0)return!1
x.push(this.aN(b))}return!0},
ct:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bM(this.c,b)
else return this.dR(0,b)},
dR:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aE(b)]
x=this.aH(y,b)
if(x<0)return!1
this.bQ(y.splice(x,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aL()}},
bA:function(a,b){if(a[b]!=null)return!1
a[b]=this.aN(b)
return!0},
bM:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bQ(z)
delete a[b]
return!0},
aL:function(){this.r=this.r+1&67108863},
aN:function(a){var z,y
z=new P.jL(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aL()
return z},
bQ:function(a){var z,y
z=a.gdP()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aL()},
aE:function(a){return J.ad(a)&0x3ffffff},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].gdK(),b))return y
return-1},
p:{
cn:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jL:{"^":"d;dK:a<,b,dP:c<"},
cm:{"^":"d;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jB:{"^":"it;$ti"},
mC:{"^":"d;$ti"},
dq:{"^":"eh;$ti",$isi:1},
j:{"^":"d;$ti",
gI:function(a){return new H.dr(a,this.gi(a),0,null,[H.be(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.b(P.M(a))}},
es:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.n(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.M(a))}return y},
bj:function(a,b){return H.dN(a,b,null,H.be(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.r([],[H.be(this,a,"j",0)])
y=this.gi(a)
x=J.L(b)
if(typeof y!=="number")return y.l()
if(typeof x!=="number")return H.n(x)
C.b.si(z,y+x)
C.b.ak(z,0,this.gi(a),a)
C.b.ak(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.c3(a,"[","]")}},
b3:{"^":"R;$ti"},
hP:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
R:{"^":"d;$ti",
w:function(a,b){var z,y
for(z=J.aF(this.gJ(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
D:function(a,b){return J.f4(this.gJ(a),b)},
gi:function(a){return J.L(this.gJ(a))},
k:function(a){return P.dw(a)}},
iu:{"^":"d;$ti",
S:function(a,b){var z
for(z=J.aF(b);z.t();)this.C(0,z.gA(z))},
k:function(a){return P.c3(this,"{","}")},
w:function(a,b){var z
for(z=new P.cm(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
it:{"^":"iu;$ti"},
eh:{"^":"d+j;$ti"}}],["","",,P,{"^":"",
kK:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.U(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.Q(x)
w=String(y)
throw H.b(new P.hj(w,null,null))}w=P.bH(z)
return w},
bH:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jG(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.bH(a[z])
return a},
jG:{"^":"b3;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dQ(b):y}},
gi:function(a){return this.b==null?this.c.a:this.ap().length},
gJ:function(a){var z
if(this.b==null){z=this.c
return new H.dp(z,[H.D(z,0)])}return new P.jH(this)},
D:function(a,b){if(this.b==null)return this.c.D(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
w:function(a,b){var z,y,x,w
if(this.b==null)return this.c.w(0,b)
z=this.ap()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.bH(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(P.M(this))}},
ap:function(){var z=this.c
if(z==null){z=H.r(Object.keys(this.a),[P.k])
this.c=z}return z},
dQ:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.bH(this.a[a])
return this.b[a]=z},
$asb3:function(){return[P.k,null]},
$asR:function(){return[P.k,null]}},
jH:{"^":"aO;a",
gi:function(a){var z=this.a
return z.gi(z)},
q:function(a,b){var z=this.a
if(z.b==null)z=z.gJ(z).q(0,b)
else{z=z.ap()
if(b>>>0!==b||b>=z.length)return H.a(z,b)
z=z[b]}return z},
gI:function(a){var z=this.a
if(z.b==null){z=z.gJ(z)
z=z.gI(z)}else{z=z.ap()
z=new J.cR(z,z.length,0,null,[H.D(z,0)])}return z},
v:function(a,b){return this.a.D(0,b)},
$asbp:function(){return[P.k]},
$asaO:function(){return[P.k]},
$asb2:function(){return[P.k]}},
d_:{"^":"d;$ti"},
d2:{"^":"dL;$ti"},
hF:{"^":"d_;a,b",
el:function(a,b,c){var z=P.kK(b,this.gem().a)
return z},
ek:function(a,b){return this.el(a,b,null)},
gem:function(){return C.O},
$asd_:function(){return[P.d,P.k]}},
hG:{"^":"d2;a",
$asdL:function(){return[P.k,P.d]},
$asd2:function(){return[P.k,P.d]}}}],["","",,P,{"^":"",
hd:function(a){var z=J.p(a)
if(!!z.$ish)return z.k(a)
return"Instance of '"+H.aR(a)+"'"},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hd(a)},
df:function(a){return new P.ji(a)},
J:function(a){H.aB(H.c(a))},
cq:{"^":"d;"},
"+bool":0,
bo:{"^":"d;e2:a<,b",
geG:function(){return this.a},
dd:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.b(P.fK("DateTime is outside valid range: "+this.geG()))},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.bo))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.c.V(this.a,b.ge2())},
gB:function(a){var z=this.a
return(z^C.c.bN(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.h2(H.ih(this))
y=P.b0(H.ie(this))
x=P.b0(H.ia(this))
w=P.b0(H.ib(this))
v=P.b0(H.id(this))
u=P.b0(H.ig(this))
t=P.h3(H.ic(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
h2:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b0:function(a){if(a>=10)return""+a
return"0"+a}}},
aw:{"^":"aZ;"},
"+double":0,
b1:{"^":"d;ae:a<",
l:function(a,b){return new P.b1(C.c.l(this.a,b.gae()))},
F:function(a,b){return new P.b1(this.a-b.gae())},
a0:function(a,b){return C.c.a0(this.a,b.gae())},
ai:function(a,b){return C.c.ai(this.a,b.gae())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.c.V(this.a,b.gae())},
k:function(a){var z,y,x,w,v
z=new P.ha()
y=this.a
if(y<0)return"-"+new P.b1(0-y).k(0)
x=z.$1(C.c.R(y,6e7)%60)
w=z.$1(C.c.R(y,1e6)%60)
v=new P.h9().$1(y%1e6)
return""+C.c.R(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
db:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h9:{"^":"h:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ha:{"^":"h:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"d;",
ga8:function(){return H.ai(this.$thrownJsError)}},
bw:{"^":"I;",
k:function(a){return"Throw of null."}},
ae:{"^":"I;a,b,c,d",
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
u=P.c1(this.b)
return w+v+": "+H.c(u)},
p:{
fK:function(a){return new P.ae(!1,null,null,a)},
cQ:function(a,b,c){return new P.ae(!0,a,b,c)},
fL:function(a){return new P.ae(!1,null,a,"Must not be null")}}},
dF:{"^":"ae;e,f,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bx:function(a,b,c){return new P.dF(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.dF(b,c,!0,a,d,"Invalid value")},
ii:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.b(P.ar(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.b(P.ar(b,a,c,"end",f))
return b}return c}}},
hw:{"^":"ae;e,i:f>,a,b,c,d",
gaG:function(){return"RangeError"},
gaF:function(){if(J.aj(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
B:function(a,b,c,d,e){var z=e!=null?e:J.L(b)
return new P.hw(b,z,!0,a,c,"Index out of range")}}},
iT:{"^":"I;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
t:function(a){return new P.iT(a)}}},
iR:{"^":"I;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
ch:function(a){return new P.iR(a)}}},
bB:{"^":"I;a",
k:function(a){return"Bad state: "+this.a},
p:{
b9:function(a){return new P.bB(a)}}},
fX:{"^":"I;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.c1(z))+"."},
p:{
M:function(a){return new P.fX(a)}}},
dI:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga8:function(){return},
$isI:1},
h1:{"^":"I;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
lY:{"^":"d;"},
ji:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
hj:{"^":"d;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
F:{"^":"aZ;"},
"+int":0,
b2:{"^":"d;$ti",
b7:["d3",function(a,b){return new H.e6(this,b,[H.ct(this,"b2",0)])}],
w:function(a,b){var z
for(z=this.gI(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.t();)++y
return y},
ga7:function(a){var z,y
z=this.gI(this)
if(!z.t())throw H.b(H.dj())
y=z.gA(z)
if(z.t())throw H.b(H.hA())
return y},
q:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.fL("index"))
if(b<0)H.a1(P.ar(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.B(b,this,"index",null,y))},
k:function(a){return P.hy(this,"(",")")}},
hB:{"^":"d;$ti"},
i:{"^":"d;$ti"},
"+List":0,
c9:{"^":"d;$ti"},
b4:{"^":"d;",
gB:function(a){return P.d.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aZ:{"^":"d;"},
"+num":0,
d:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.aQ(this)},
k:function(a){return"Instance of '"+H.aR(this)+"'"},
toString:function(){return this.k(this)}},
aT:{"^":"d;"},
k:{"^":"d;"},
"+String":0,
ce:{"^":"d;a9:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dM:function(a,b,c){var z=J.aF(b)
if(!z.t())return a
if(c.length===0){do a+=H.c(z.gA(z))
while(z.t())}else{a+=H.c(z.gA(z))
for(;z.t();)a=a+c+H.c(z.gA(z))}return a}}}}],["","",,W,{"^":"",
hb:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).W(z,a,b,c)
y.toString
z=new H.e6(new W.Y(y),new W.hc(),[W.v])
return z.ga7(z)},
de:function(a){return"wheel"},
aI:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fl(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Q(x)}return z},
jf:function(a,b){return document.createElement(a)},
ao:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eg:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bI:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j9(a)
if(!!J.p(z).$isE)return z
return}else return a},
kF:function(a){var z
if(!!J.p(a).$isda)return a
z=new P.iY([],[],!1)
z.c=!0
return z.b6(a)},
ew:function(a){var z=$.u
if(z===C.d)return a
return z.e9(a)},
w:{"^":"ap;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lq:{"^":"cd;m:x=,n:y=,E:z=","%":"Accelerometer|LinearAccelerationSensor"},
lr:{"^":"f;i:length=","%":"AccessibleNodeList"},
ls:{"^":"w;O:target=,at:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lt:{"^":"w;O:target=,at:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
ly:{"^":"w;at:href},O:target=","%":"HTMLBaseElement"},
bW:{"^":"w;",$isbW:1,"%":"HTMLBodyElement"},
lz:{"^":"w;M:name=","%":"HTMLButtonElement"},
lA:{"^":"w;H:height},K:width}",
cS:function(a,b,c){var z=a.getContext(b,P.kV(c,null))
return z},
"%":"HTMLCanvasElement"},
lB:{"^":"f;",
ax:function(a){return P.G(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
fR:{"^":"v;i:length=","%":"CDATASection|Comment|Text;CharacterData"},
lD:{"^":"a3;a2:style=","%":"CSSFontFaceRule"},
lE:{"^":"a3;a2:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lF:{"^":"a3;a2:style=","%":"CSSPageRule"},
lG:{"^":"bn;i:length=","%":"CSSPerspective"},
lH:{"^":"c_;m:x=,n:y=","%":"CSSPositionValue"},
lI:{"^":"bn;m:x=,n:y=,E:z=","%":"CSSRotation"},
a3:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lJ:{"^":"bn;m:x=,n:y=,E:z=","%":"CSSScale"},
h_:{"^":"j7;i:length=",
bD:function(a,b){var z,y
z=$.$get$d3()
y=z[b]
if(typeof y==="string")return y
y=this.e_(a,b)
z[b]=y
return y},
e_:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h4()+b
if(z in a)return z
return b},
dX:function(a,b,c,d){a.setProperty(b,c,d)},
sH:function(a,b){a.height=b},
sK:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h0:{"^":"d;",
ser:function(a,b){this.dX(a,this.bD(a,"float"),b,"")}},
lK:{"^":"a3;a2:style=","%":"CSSStyleRule"},
c_:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bn:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lL:{"^":"c_;i:length=","%":"CSSTransformValue"},
lM:{"^":"bn;m:x=,n:y=,E:z=","%":"CSSTranslation"},
lN:{"^":"c_;i:length=","%":"CSSUnparsedValue"},
lO:{"^":"a3;a2:style=","%":"CSSViewportRule"},
lP:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lQ:{"^":"f;m:x=,n:y=,E:z=","%":"DeviceAcceleration"},
h5:{"^":"w;","%":"HTMLDivElement"},
da:{"^":"v;",
gaY:function(a){return new W.aV(a,"change",!1,[W.N])},
gaZ:function(a){return new W.aV(a,"mousedown",!1,[W.S])},
gb_:function(a){return new W.aV(a,"mousemove",!1,[W.S])},
gb0:function(a){return new W.aV(a,"mouseup",!1,[W.S])},
gb1:function(a){return new W.aV(a,W.de(a),!1,[W.aU])},
$isda:1,
"%":"Document|HTMLDocument|XMLDocument"},
lR:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
lS:{"^":"h6;",
gac:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z},
"%":"DOMPoint"},
h6:{"^":"f;",
gac:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z},
"%":";DOMPointReadOnly"},
lT:{"^":"jb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.ah]},
$isq:1,
$asq:function(){return[P.ah]},
$asj:function(){return[P.ah]},
$isi:1,
$asi:function(){return[P.ah]},
$asl:function(){return[P.ah]},
"%":"ClientRectList|DOMRectList"},
h7:{"^":"f;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gK(a))+" x "+H.c(this.gH(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isah)return!1
return a.left===z.gco(b)&&a.top===z.gcB(b)&&this.gK(a)===z.gK(b)&&this.gH(a)===z.gH(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gK(a)
w=this.gH(a)
return W.eg(W.ao(W.ao(W.ao(W.ao(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcC:function(a){return new P.ag(a.left,a.top,[null])},
gH:function(a){return a.height},
gco:function(a){return a.left},
gcB:function(a){return a.top},
gK:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isah:1,
$asah:I.ax,
"%":";DOMRectReadOnly"},
lU:{"^":"jd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.k]},
$isq:1,
$asq:function(){return[P.k]},
$asj:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"DOMStringList"},
lV:{"^":"f;i:length=","%":"DOMTokenList"},
ap:{"^":"v;a2:style=,eA:id=,bJ:namespaceURI=,eQ:tagName=",
ge6:function(a){return new W.je(a)},
k:function(a){return a.localName},
W:["az",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dd
if(z==null){z=H.r([],[W.dB])
y=new W.dC(z)
z.push(W.ed(null))
z.push(W.ep())
$.dd=y
d=y}else d=z
z=$.dc
if(z==null){z=new W.es(d)
$.dc=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation.createHTMLDocument("")
$.af=y
$.c0=y.createRange()
y=$.af
y.toString
x=y.createElement("base")
J.fw(x,z.baseURI)
$.af.head.appendChild(x)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.af
if(!!this.$isbW)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.af.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.v(C.Q,a.tagName)){$.c0.selectNodeContents(w)
v=$.c0.createContextualFragment(b)}else{w.innerHTML=b
v=$.af.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.af.body
if(w==null?z!=null:w!==z)J.cI(w)
c.bf(v)
document.adoptNode(v)
return v},function(a,b,c){return this.W(a,b,c,null)},"ei",null,null,"gf1",5,5,null],
cV:function(a,b,c,d){a.textContent=null
a.appendChild(this.W(a,b,c,d))},
cU:function(a,b){return this.cV(a,b,null,null)},
b8:function(a){return a.getBoundingClientRect()},
gaY:function(a){return new W.a6(a,"change",!1,[W.N])},
gaZ:function(a){return new W.a6(a,"mousedown",!1,[W.S])},
gb_:function(a){return new W.a6(a,"mousemove",!1,[W.S])},
gb0:function(a){return new W.a6(a,"mouseup",!1,[W.S])},
gb1:function(a){return new W.a6(a,W.de(a),!1,[W.aU])},
$isap:1,
"%":";Element"},
hc:{"^":"h:0;",
$1:function(a){return!!J.p(a).$isap}},
lW:{"^":"w;H:height},M:name=,K:width}","%":"HTMLEmbedElement"},
lX:{"^":"N;T:error=","%":"ErrorEvent"},
N:{"^":"f;",
gO:function(a){return W.bI(a.target)},
aw:function(a){return a.preventDefault()},
$isN:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
E:{"^":"f;",
bV:["d1",function(a,b,c,d){if(c!=null)this.dG(a,b,c,!1)}],
dG:function(a,b,c,d){return a.addEventListener(b,H.a0(c,1),!1)},
dS:function(a,b,c,d){return a.removeEventListener(b,H.a0(c,1),!1)},
$isE:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;em|en|eq|er"},
mg:{"^":"w;M:name=","%":"HTMLFieldSetElement"},
mh:{"^":"jk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bq]},
$isq:1,
$asq:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asl:function(){return[W.bq]},
"%":"FileList"},
mi:{"^":"E;T:error=","%":"FileReader"},
mj:{"^":"E;T:error=,i:length=","%":"FileWriter"},
ml:{"^":"f;a2:style=","%":"FontFace"},
mm:{"^":"E;",
f2:function(a,b,c){return a.forEach(H.a0(b,3),c)},
w:function(a,b){b=H.a0(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mo:{"^":"w;i:length=,M:name=,O:target=","%":"HTMLFormElement"},
mq:{"^":"cd;m:x=,n:y=,E:z=","%":"Gyroscope"},
mr:{"^":"f;i:length=","%":"History"},
ms:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$asj:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$asl:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hr:{"^":"hs;",
f3:function(a,b,c,d,e,f){return a.open(b,c)},
eI:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
hs:{"^":"E;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mt:{"^":"w;H:height},M:name=,K:width}","%":"HTMLIFrameElement"},
mu:{"^":"w;H:height},K:width}","%":"HTMLImageElement"},
di:{"^":"w;H:height},M:name=,K:width}",$isdi:1,"%":"HTMLInputElement"},
mw:{"^":"f;O:target=","%":"IntersectionObserverEntry"},
bu:{"^":"e5;",
geZ:function(a){return a.which},
$isbu:1,
"%":"KeyboardEvent"},
mB:{"^":"w;at:href}","%":"HTMLLinkElement"},
mD:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
mE:{"^":"cd;m:x=,n:y=,E:z=","%":"Magnetometer"},
mF:{"^":"w;M:name=","%":"HTMLMapElement"},
hS:{"^":"w;T:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mH:{"^":"f;i:length=","%":"MediaList"},
mI:{"^":"E;aT:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mJ:{"^":"E;",
bV:function(a,b,c,d){if(J.K(b,"message"))a.start()
this.d1(a,b,c,!1)},
"%":"MessagePort"},
mK:{"^":"w;M:name=","%":"HTMLMetaElement"},
mL:{"^":"jM;",
D:function(a,b){return P.G(a.get(b))!=null},
h:function(a,b){return P.G(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gJ:function(a){var z=H.r([],[P.k])
this.w(a,new W.hU(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.k,null]},
"%":"MIDIInputMap"},
hU:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
mM:{"^":"jN;",
D:function(a,b){return P.G(a.get(b))!=null},
h:function(a,b){return P.G(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gJ:function(a){var z=H.r([],[P.k])
this.w(a,new W.hV(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
hV:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
mN:{"^":"jP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bv]},
$isq:1,
$asq:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asl:function(){return[W.bv]},
"%":"MimeTypeArray"},
S:{"^":"e5;c4:button=",
geH:function(a){return new P.ag(a.movementX,a.movementY,[null])},
gcs:function(a){var z,y,x
if(!!a.offsetX)return new P.ag(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.p(W.bI(z)).$isap)throw H.b(P.t("offsetX is only supported on elements"))
y=W.bI(z)
z=[null]
x=new P.ag(a.clientX,a.clientY,z).F(0,J.fn(J.fp(y)))
return new P.ag(J.cJ(x.a),J.cJ(x.b),z)}},
$isS:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
mO:{"^":"f;O:target=","%":"MutationRecord"},
Y:{"^":"dq;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.b9("No elements"))
if(y>1)throw H.b(P.b9("More than one element"))
return z.firstChild},
S:function(a,b){var z,y,x,w
z=J.p(b)
if(!!z.$isY){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gI(b),y=this.a;z.t();)y.appendChild(z.gA(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,null,[H.be(C.S,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$asdq:function(){return[W.v]},
$asj:function(){return[W.v]},
$asi:function(){return[W.v]},
$aseh:function(){return[W.v]}},
v:{"^":"E;av:parentNode=,b2:previousSibling=",
gcr:function(a){return new W.Y(a)},
eK:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.d2(a):z},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mW:{"^":"f;",
eJ:[function(a){return a.previousNode()},"$0","gb2",1,0,4],
"%":"NodeIterator"},
i3:{"^":"jR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$asj:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$asl:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
mZ:{"^":"w;H:height},M:name=,K:width}","%":"HTMLObjectElement"},
n0:{"^":"w;M:name=","%":"HTMLOutputElement"},
n1:{"^":"w;M:name=","%":"HTMLParamElement"},
b5:{"^":"f;i:length=","%":"Plugin"},
n3:{"^":"jV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b5]},
$isq:1,
$asq:function(){return[W.b5]},
$asj:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$asl:function(){return[W.b5]},
"%":"PluginArray"},
n6:{"^":"fR;O:target=","%":"ProcessingInstruction"},
n8:{"^":"f;",
b8:function(a){return a.getBoundingClientRect()},
"%":"Range"},
ne:{"^":"f;O:target=","%":"ResizeObserverEntry"},
nf:{"^":"k0;",
D:function(a,b){return P.G(a.get(b))!=null},
h:function(a,b){return P.G(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gJ:function(a){var z=H.r([],[P.k])
this.w(a,new W.iq(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.k,null]},
"%":"RTCStatsReport"},
iq:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
ng:{"^":"w;i:length=,M:name=","%":"HTMLSelectElement"},
cd:{"^":"E;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
nh:{"^":"N;T:error=","%":"SensorErrorEvent"},
ni:{"^":"w;M:name=","%":"HTMLSlotElement"},
nj:{"^":"en;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bz]},
$isq:1,
$asq:function(){return[W.bz]},
$asj:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$asl:function(){return[W.bz]},
"%":"SourceBufferList"},
nk:{"^":"k6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bA]},
$isq:1,
$asq:function(){return[W.bA]},
$asj:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$asl:function(){return[W.bA]},
"%":"SpeechGrammarList"},
nl:{"^":"N;T:error=","%":"SpeechRecognitionError"},
b8:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
nn:{"^":"k9;",
D:function(a,b){return a.getItem(b)!=null},
h:function(a,b){return a.getItem(b)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gJ:function(a){var z=H.r([],[P.k])
this.w(a,new W.iD(z))
return z},
gi:function(a){return a.length},
$asR:function(){return[P.k,P.k]},
"%":"Storage"},
iD:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
iM:{"^":"w;",
W:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=W.hb("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.Y(y).S(0,J.fi(z))
return y},
"%":"HTMLTableElement"},
nq:{"^":"w;",
W:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.W(z.createElement("table"),b,c,d)
z.toString
z=new W.Y(z)
x=z.ga7(z)
x.toString
z=new W.Y(x)
w=z.ga7(z)
y.toString
w.toString
new W.Y(y).S(0,new W.Y(w))
return y},
"%":"HTMLTableRowElement"},
nr:{"^":"w;",
W:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.az(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.W(z.createElement("table"),b,c,d)
z.toString
z=new W.Y(z)
x=z.ga7(z)
y.toString
x.toString
new W.Y(y).S(0,new W.Y(x))
return y},
"%":"HTMLTableSectionElement"},
dP:{"^":"w;",$isdP:1,"%":"HTMLTemplateElement"},
ns:{"^":"w;M:name=","%":"HTMLTextAreaElement"},
nu:{"^":"kh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bE]},
$isq:1,
$asq:function(){return[W.bE]},
$asj:function(){return[W.bE]},
$isi:1,
$asi:function(){return[W.bE]},
$asl:function(){return[W.bE]},
"%":"TextTrackCueList"},
nv:{"^":"er;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bD]},
$isq:1,
$asq:function(){return[W.bD]},
$asj:function(){return[W.bD]},
$isi:1,
$asi:function(){return[W.bD]},
$asl:function(){return[W.bD]},
"%":"TextTrackList"},
nw:{"^":"f;i:length=","%":"TimeRanges"},
ba:{"^":"f;",
gO:function(a){return W.bI(a.target)},
"%":"Touch"},
nx:{"^":"km;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ba]},
$isq:1,
$asq:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$asl:function(){return[W.ba]},
"%":"TouchList"},
ny:{"^":"f;i:length=","%":"TrackDefaultList"},
nB:{"^":"f;",
f4:[function(a){return a.parentNode()},"$0","gav",1,0,4],
eJ:[function(a){return a.previousNode()},"$0","gb2",1,0,4],
"%":"TreeWalker"},
e5:{"^":"N;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nD:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
nF:{"^":"f;m:x=,E:z=","%":"VRStageBoundsPoint"},
nH:{"^":"hS;H:height},K:width}","%":"HTMLVideoElement"},
nI:{"^":"E;i:length=","%":"VideoTrackList"},
aU:{"^":"S;",
gen:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.t("deltaY is not supported"))},
$isaU:1,
"%":"WheelEvent"},
iV:{"^":"E;",
ge5:function(a){var z,y
z=P.aZ
y=new P.P(0,$.u,null,[z])
this.dM(a)
this.dT(a,W.ew(new W.iW(new P.kd(y,[z]))))
return y},
dT:function(a,b){return a.requestAnimationFrame(H.a0(b,1))},
dM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iW:{"^":"h:0;a",
$1:function(a){this.a.ar(0,a)}},
nJ:{"^":"E;"},
nN:{"^":"v;M:name=,bJ:namespaceURI=","%":"Attr"},
nO:{"^":"ks;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a3]},
$isq:1,
$asq:function(){return[W.a3]},
$asj:function(){return[W.a3]},
$isi:1,
$asi:function(){return[W.a3]},
$asl:function(){return[W.a3]},
"%":"CSSRuleList"},
nP:{"^":"h7;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isah)return!1
return a.left===z.gco(b)&&a.top===z.gcB(b)&&a.width===z.gK(b)&&a.height===z.gH(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.eg(W.ao(W.ao(W.ao(W.ao(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcC:function(a){return new P.ag(a.left,a.top,[null])},
gH:function(a){return a.height},
gK:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nQ:{"^":"ku;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bt]},
$isq:1,
$asq:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$asl:function(){return[W.bt]},
"%":"GamepadList"},
nT:{"^":"kw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$asj:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$asl:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nU:{"^":"ky;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b8]},
$isq:1,
$asq:function(){return[W.b8]},
$asj:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$asl:function(){return[W.b8]},
"%":"SpeechRecognitionResultList"},
nV:{"^":"kA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bC]},
$isq:1,
$asq:function(){return[W.bC]},
$asj:function(){return[W.bC]},
$isi:1,
$asi:function(){return[W.bC]},
$asl:function(){return[W.bC]},
"%":"StyleSheetList"},
j5:{"^":"b3;dN:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gJ(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gJ:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.r([],[P.k])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.e(v)
if(u.gbJ(v)==null)y.push(u.gM(v))}return y},
$asb3:function(){return[P.k,P.k]},
$asR:function(){return[P.k,P.k]}},
je:{"^":"j5;a",
D:function(a,b){return this.a.hasAttribute(b)},
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gJ(this).length}},
aV:{"^":"dK;a,b,c,$ti",
cq:function(a,b,c,d){return W.a7(this.a,this.b,a,!1,H.D(this,0))}},
a6:{"^":"aV;a,b,c,$ti"},
jg:{"^":"iE;a,b,c,d,e,$ti",
dA:function(a,b,c,d,e){this.e0()},
eb:function(a){if(this.b==null)return
this.e1()
this.b=null
this.d=null
return},
e0:function(){var z=this.d
if(z!=null&&this.a<=0)J.eX(this.b,this.c,z,!1)},
e1:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eW(x,this.c,z,!1)}},
p:{
a7:function(a,b,c,d,e){var z=c==null?null:W.ew(new W.jh(c))
z=new W.jg(0,a,b,z,!1,[e])
z.dA(a,b,c,!1,e)
return z}}},
jh:{"^":"h:0;a",
$1:function(a){return this.a.$1(a)}},
ck:{"^":"d;cM:a<",
dB:function(a){var z,y
z=$.$get$cl()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.P[y],W.l6())
for(y=0;y<12;++y)z.j(0,C.p[y],W.l7())}},
aa:function(a){return $.$get$ee().v(0,W.aI(a))},
a3:function(a,b,c){var z,y,x
z=W.aI(a)
y=$.$get$cl()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
ed:function(a){var z,y
z=document.createElement("a")
y=new W.k1(z,window.location)
y=new W.ck(y)
y.dB(a)
return y},
nR:[function(a,b,c,d){return!0},"$4","l6",16,0,9],
nS:[function(a,b,c,d){var z,y,x,w,v
z=d.gcM()
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
return z},"$4","l7",16,0,9]}},
l:{"^":"d;$ti",
gI:function(a){return new W.dg(a,this.gi(a),-1,null,[H.be(this,a,"l",0)])}},
dC:{"^":"d;a",
aa:function(a){return C.b.bW(this.a,new W.i5(a))},
a3:function(a,b,c){return C.b.bW(this.a,new W.i4(a,b,c))}},
i5:{"^":"h:0;a",
$1:function(a){return a.aa(this.a)}},
i4:{"^":"h:0;a,b,c",
$1:function(a){return a.a3(this.a,this.b,this.c)}},
k2:{"^":"d;cM:d<",
dD:function(a,b,c,d){var z,y,x
this.a.S(0,c)
z=b.b7(0,new W.k3())
y=b.b7(0,new W.k4())
this.b.S(0,z)
x=this.c
x.S(0,C.w)
x.S(0,y)},
aa:function(a){return this.a.v(0,W.aI(a))},
a3:["d5",function(a,b,c){var z,y
z=W.aI(a)
y=this.c
if(y.v(0,H.c(z)+"::"+b))return this.d.e4(c)
else if(y.v(0,"*::"+b))return this.d.e4(c)
else{y=this.b
if(y.v(0,H.c(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.c(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
k3:{"^":"h:0;",
$1:function(a){return!C.b.v(C.p,a)}},
k4:{"^":"h:0;",
$1:function(a){return C.b.v(C.p,a)}},
ke:{"^":"k2;e,a,b,c,d",
a3:function(a,b,c){if(this.d5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cD(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
ep:function(){var z=P.k
z=new W.ke(P.c8(C.o,z),P.Z(null,null,null,z),P.Z(null,null,null,z),P.Z(null,null,null,z),null)
z.dD(null,new H.hQ(C.o,new W.kf(),[H.D(C.o,0),null]),["TEMPLATE"],null)
return z}}},
kf:{"^":"h:0;",
$1:function(a){return"TEMPLATE::"+H.c(a)}},
kc:{"^":"d;",
aa:function(a){var z=J.p(a)
if(!!z.$isdG)return!1
z=!!z.$isC
if(z&&W.aI(a)==="foreignObject")return!1
if(z)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.i.cZ(b,"on"))return!1
return this.aa(a)}},
dg:{"^":"d;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ac(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
j8:{"^":"d;a",$isE:1,p:{
j9:function(a){if(a===window)return a
else return new W.j8(a)}}},
dB:{"^":"d;"},
mX:{"^":"d;"},
nC:{"^":"d;"},
k1:{"^":"d;a,b"},
es:{"^":"d;a",
bf:function(a){new W.kp(this).$2(a,null)},
ag:function(a,b){if(b==null)J.cI(a)
else b.removeChild(a)},
dW:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cD(a)
x=y.gdN().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Q(t)}v="element unprintable"
try{v=J.aG(a)}catch(t){H.Q(t)}try{u=W.aI(a)
this.dV(a,b,z,v,u,y,x)}catch(t){if(H.Q(t) instanceof P.ae)throw t
else{this.ag(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dV:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ag(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aa(a)){this.ag(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.ag(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.r(z.slice(0),[H.D(z,0)])
for(x=f.gJ(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a3(a,J.fA(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+w+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.p(a).$isdP)this.bf(a.content)}},
kp:{"^":"h:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ag(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fk(z)}catch(w){H.Q(w)
v=z
if(x){u=J.e(v)
if(u.gav(v)!=null){u.gav(v)
u.gav(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
j7:{"^":"f+h0;"},
ja:{"^":"f+j;"},
jb:{"^":"ja+l;"},
jc:{"^":"f+j;"},
jd:{"^":"jc+l;"},
jj:{"^":"f+j;"},
jk:{"^":"jj+l;"},
jC:{"^":"f+j;"},
jD:{"^":"jC+l;"},
jM:{"^":"f+R;"},
jN:{"^":"f+R;"},
jO:{"^":"f+j;"},
jP:{"^":"jO+l;"},
jQ:{"^":"f+j;"},
jR:{"^":"jQ+l;"},
jU:{"^":"f+j;"},
jV:{"^":"jU+l;"},
k0:{"^":"f+R;"},
em:{"^":"E+j;"},
en:{"^":"em+l;"},
k5:{"^":"f+j;"},
k6:{"^":"k5+l;"},
k9:{"^":"f+R;"},
kg:{"^":"f+j;"},
kh:{"^":"kg+l;"},
eq:{"^":"E+j;"},
er:{"^":"eq+l;"},
kl:{"^":"f+j;"},
km:{"^":"kl+l;"},
kr:{"^":"f+j;"},
ks:{"^":"kr+l;"},
kt:{"^":"f+j;"},
ku:{"^":"kt+l;"},
kv:{"^":"f+j;"},
kw:{"^":"kv+l;"},
kx:{"^":"f+j;"},
ky:{"^":"kx+l;"},
kz:{"^":"f+j;"},
kA:{"^":"kz+l;"}}],["","",,P,{"^":"",
G:function(a){var z,y,x,w,v
if(a==null)return
z=P.X()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
kV:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cC(a,new P.kW(z))
return z},
kX:function(a){var z,y
z=new P.P(0,$.u,null,[null])
y=new P.e8(z,[null])
a.then(H.a0(new P.kY(y),1))["catch"](H.a0(new P.kZ(y),1))
return z},
d9:function(){var z=$.d8
if(z==null){z=J.bQ(window.navigator.userAgent,"Opera",0)
$.d8=z}return z},
h4:function(){var z,y
z=$.d5
if(z!=null)return z
y=$.d6
if(y==null){y=J.bQ(window.navigator.userAgent,"Firefox",0)
$.d6=y}if(y)z="-moz-"
else{y=$.d7
if(y==null){y=P.d9()!==!0&&J.bQ(window.navigator.userAgent,"Trident/",0)
$.d7=y}if(y)z="-ms-"
else z=P.d9()===!0?"-o-":"-webkit-"}$.d5=z
return z},
iX:{"^":"d;",
cl:function(a){var z,y,x,w
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
x=new P.bo(y,!0)
x.dd(y,!0)
return x}if(a instanceof RegExp)throw H.b(P.ch("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kX(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cl(a)
x=this.b
u=x.length
if(v>=u)return H.a(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.X()
z.a=t
if(v>=u)return H.a(x,v)
x[v]=t
this.eu(a,new P.iZ(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cl(s)
x=this.b
if(v>=x.length)return H.a(x,v)
t=x[v]
if(t!=null)return t
u=J.y(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.a(x,v)
x[v]=t
if(typeof r!=="number")return H.n(r)
x=J.ay(t)
q=0
for(;q<r;++q)x.j(t,q,this.b6(u.h(s,q)))
return t}return a}},
iZ:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.b6(b)
J.eV(z,a,y)
return y}},
kW:{"^":"h:2;a",
$2:function(a,b){this.a[a]=b}},
iY:{"^":"iX;a,b,c",
eu:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kY:{"^":"h:0;a",
$1:function(a){return this.a.ar(0,a)}},
kZ:{"^":"h:0;a",
$1:function(a){return this.a.ef(a)}}}],["","",,P,{"^":"",nd:{"^":"E;T:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nz:{"^":"E;T:error=","%":"IDBTransaction"},nG:{"^":"N;O:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
ef:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ag:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
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
gB:function(a){var z,y
z=J.ad(this.a)
y=J.ad(this.b)
return P.jF(P.ef(P.ef(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.ag(y,C.a.l(z,x),this.$ti)},
F:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.n(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.F()
if(typeof y!=="number")return H.n(y)
return new P.ag(z-x,w-y,this.$ti)}},
jW:{"^":"d;$ti"},
ah:{"^":"jW;$ti"}}],["","",,P,{"^":"",lp:{"^":"aq;O:target=","%":"SVGAElement"},lZ:{"^":"C;m:x=,n:y=","%":"SVGFEBlendElement"},m_:{"^":"C;m:x=,n:y=","%":"SVGFEColorMatrixElement"},m0:{"^":"C;m:x=,n:y=","%":"SVGFEComponentTransferElement"},m1:{"^":"C;m:x=,n:y=","%":"SVGFECompositeElement"},m2:{"^":"C;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},m3:{"^":"C;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},m4:{"^":"C;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},m5:{"^":"C;m:x=,n:y=","%":"SVGFEFloodElement"},m6:{"^":"C;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},m7:{"^":"C;m:x=,n:y=","%":"SVGFEImageElement"},m8:{"^":"C;m:x=,n:y=","%":"SVGFEMergeElement"},m9:{"^":"C;m:x=,n:y=","%":"SVGFEMorphologyElement"},ma:{"^":"C;m:x=,n:y=","%":"SVGFEOffsetElement"},mb:{"^":"C;m:x=,n:y=,E:z=","%":"SVGFEPointLightElement"},mc:{"^":"C;m:x=,n:y=","%":"SVGFESpecularLightingElement"},md:{"^":"C;m:x=,n:y=,E:z=","%":"SVGFESpotLightElement"},me:{"^":"C;m:x=,n:y=","%":"SVGFETileElement"},mf:{"^":"C;m:x=,n:y=","%":"SVGFETurbulenceElement"},mk:{"^":"C;m:x=,n:y=","%":"SVGFilterElement"},mn:{"^":"aq;m:x=,n:y=","%":"SVGForeignObjectElement"},hq:{"^":"aq;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aq:{"^":"C;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mv:{"^":"aq;m:x=,n:y=","%":"SVGImageElement"},mA:{"^":"jJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dn]},
$isi:1,
$asi:function(){return[P.dn]},
$asl:function(){return[P.dn]},
"%":"SVGLengthList"},mG:{"^":"C;m:x=,n:y=","%":"SVGMaskElement"},mY:{"^":"jT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dE]},
$isi:1,
$asi:function(){return[P.dE]},
$asl:function(){return[P.dE]},
"%":"SVGNumberList"},n2:{"^":"C;m:x=,n:y=","%":"SVGPatternElement"},n4:{"^":"f;m:x=,n:y=","%":"SVGPoint"},n5:{"^":"f;i:length=","%":"SVGPointList"},n9:{"^":"f;m:x=,n:y=","%":"SVGRect"},na:{"^":"hq;m:x=,n:y=","%":"SVGRectElement"},dG:{"^":"C;",$isdG:1,"%":"SVGScriptElement"},no:{"^":"kb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$asl:function(){return[P.k]},
"%":"SVGStringList"},C:{"^":"ap;",
W:function(a,b,c,d){var z,y,x,w,v,u
z=H.r([],[W.dB])
z.push(W.ed(null))
z.push(W.ep())
z.push(new W.kc())
c=new W.es(new W.dC(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).ei(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.Y(w)
u=z.ga7(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaY:function(a){return new W.a6(a,"change",!1,[W.N])},
gaZ:function(a){return new W.a6(a,"mousedown",!1,[W.S])},
gb_:function(a){return new W.a6(a,"mousemove",!1,[W.S])},
gb0:function(a){return new W.a6(a,"mouseup",!1,[W.S])},
gb1:function(a){return new W.a6(a,"mousewheel",!1,[W.aU])},
$isC:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},np:{"^":"aq;m:x=,n:y=","%":"SVGSVGElement"},iN:{"^":"aq;","%":"SVGTextPathElement;SVGTextContentElement"},nt:{"^":"iN;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nA:{"^":"ko;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dT]},
$isi:1,
$asi:function(){return[P.dT]},
$asl:function(){return[P.dT]},
"%":"SVGTransformList"},nE:{"^":"aq;m:x=,n:y=","%":"SVGUseElement"},jI:{"^":"f+j;"},jJ:{"^":"jI+l;"},jS:{"^":"f+j;"},jT:{"^":"jS+l;"},ka:{"^":"f+j;"},kb:{"^":"ka+l;"},kn:{"^":"f+j;"},ko:{"^":"kn+l;"}}],["","",,P,{"^":"",lu:{"^":"f;i:length=","%":"AudioBuffer"},lv:{"^":"j6;",
D:function(a,b){return P.G(a.get(b))!=null},
h:function(a,b){return P.G(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gJ:function(a){var z=H.r([],[P.k])
this.w(a,new P.fM(z))
return z},
gi:function(a){return a.size},
$asR:function(){return[P.k,null]},
"%":"AudioParamMap"},fM:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},lw:{"^":"f;aT:enabled=","%":"AudioTrack"},lx:{"^":"E;i:length=","%":"AudioTrackList"},fN:{"^":"E;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n_:{"^":"fN;i:length=","%":"OfflineAudioContext"},j6:{"^":"f+R;"}}],["","",,P,{"^":"",nb:{"^":"f;",
bU:function(a,b){return a.activeTexture(b)},
bX:function(a,b,c){return a.attachShader(b,c)},
bY:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c5:function(a,b){return a.clear(b)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createProgram()},
ca:function(a,b){return a.createShader(b)},
cb:function(a){return a.createTexture()},
cd:function(a,b){return a.depthMask(b)},
ce:function(a,b){return a.disable(b)},
cf:function(a,b,c,d){return a.drawArrays(b,c,d)},
cg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ci:function(a,b){return a.enable(b)},
cj:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.G(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cp:function(a,b){return a.linkProgram(b)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cw:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
cz:function(a,b,c,d){return a.texParameterf(b,c,d)},
cA:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},nc:{"^":"f;",
e7:function(a,b){return a.beginTransformFeedback(b)},
ea:function(a,b){return a.bindVertexArray(b)},
ej:function(a){return a.createVertexArray()},
eo:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ep:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eq:function(a){return a.endTransformFeedback()},
eW:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eX:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bU:function(a,b){return a.activeTexture(b)},
bX:function(a,b,c){return a.attachShader(b,c)},
bY:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c5:function(a,b){return a.clear(b)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createProgram()},
ca:function(a,b){return a.createShader(b)},
cb:function(a){return a.createTexture()},
cd:function(a,b){return a.depthMask(b)},
ce:function(a,b){return a.disable(b)},
cf:function(a,b,c,d){return a.drawArrays(b,c,d)},
cg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ci:function(a,b){return a.enable(b)},
cj:function(a,b){return a.enableVertexAttribArray(b)},
ax:function(a){return P.G(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cp:function(a,b){return a.linkProgram(b)},
bi:function(a,b,c){return a.shaderSource(b,c)},
bk:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cw:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
cz:function(a,b,c,d){return a.texParameterf(b,c,d)},
cA:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nm:{"^":"k8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return P.G(a.item(b))},
j:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c9]},
$isi:1,
$asi:function(){return[P.c9]},
$asl:function(){return[P.c9]},
"%":"SQLResultSetRowList"},k7:{"^":"f+j;"},k8:{"^":"k7+l;"}}],["","",,L,{"^":"",
ij:function(a){var z,y,x,w,v,u,t
P.J("recomputing local transform")
z=a.length
y=new Array(z)
y.fixed$length=Array
x=H.r(y,[T.A])
for(y=x.length,w=0;w<z;++w){v=a[w]
u=v.e
if(J.aj(u,0)){u=new T.A(new Float32Array(16))
u.L()
u=u.a1(0,v.b)
if(w>=y)return H.a(x,w)
x[w]=u}else{if(u>>>0!==u||u>=y)return H.a(x,u)
u=x[u].a1(0,v.b)
if(w>=y)return H.a(x,w)
x[w]=u}t=v.c
if(w>=y)return H.a(x,w)
t.aR(u)}},
ci:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new T.A(new Float32Array(16))
for(y=a.length,x=c.b,w=x.length,v=d.a,u=v.length,t=0;t<y;++t){s=a[t]
if(t>=u)return H.a(v,t)
r=v[t]
q=s.e
if(J.aj(q,0))r.L()
else{if(q>>>0!==q||q>=u)return H.a(v,q)
r.u(v[q])}if(t>=w)return H.a(x,t)
p=x[t]
if(p!=null){o=L.bX(p.f,e)
n=L.bX(p.b,e)
m=L.bX(p.d,e)
q=p.r
if(o>=q.length)return H.a(q,o)
l=q[o]
q=p.c
if(n>=q.length)return H.a(q,n)
q=q[n]
k=p.e
if(m>=k.length)return H.a(k,m)
z.bh(q,k[m])
z.P(0,l)
r.a6(0,z)}else r.a6(0,s.b)}for(x=d.b,w=x.length,t=0;t<y;++t){if(t>=w)return H.a(x,t)
r=x[t]
r.u(b)
if(t>=u)return H.a(v,t)
r.a6(0,v[t])
r.a6(0,a[t].c)}},
fZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=a.length
y=L.cP(z)
x=d.length
w=new Float32Array(z*16*x)
for(z=d.length,x=y.b,v=x.length,u=w.length,t=0,s=0;s<d.length;d.length===z||(0,H.z)(d),++s){L.ci(a,b,c,y,d[s])
for(r=0;r<v;++r){q=x[r]
for(p=0;p<16;++p){o=t+p
n=q.h(0,p)
if(o<0||o>=u)return H.a(w,o)
w[o]=n}t+=16}}return w},
cT:{"^":"d;a,b,c,d,e",
k:function(a){return"BONE["+this.d+"] ("+H.c(this.e)+") "+H.c(this.a)+"\ntrans:\n"+this.b.k(0)+"offset:\n"+this.c.k(0)}},
fJ:{"^":"d;a,b",
dc:function(a){var z,y,x,w
for(z=this.b,y=this.a,x=0;x<a;++x){w=new Float32Array(16)
if(x>=y.length)return H.a(y,x)
y[x]=new T.A(w)
w=new Float32Array(16)
if(x>=z.length)return H.a(z,x)
z[x]=new T.A(w)}},
p:{
cP:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=[T.A]
z=H.r(z,y)
x=new Array(a)
x.fixed$length=Array
y=new L.fJ(z,H.r(x,y))
y.dc(a)
return y}}},
cU:{"^":"d;a,b,c,d,e,f,r",
k:function(a){var z=[]
z.push(H.c(this.a.a))
z.push(""+this.b.length+": "+H.c(this.c))
z.push(""+this.d.length+": "+H.c(this.e))
z.push(""+this.f.length+": "+H.c(this.r))
return C.b.ab(z,"\n")},
p:{
bX:function(a,b){var z,y,x
for(z=J.aa(b),y=0;y<a.length-1;y=x){x=y+1
if(z.a0(b,a[x]))return y}return 0}}},
iw:{"^":"d;a,b,c",
k:function(a){return"SkeletalAnimation["+H.c(this.a)+", duration: "+H.c(this.c)+", frames: "+this.b.length+"]"}}}],["","",,G,{"^":"",
j_:function(a){var z,y,x,w
z=H.r(a.split("\n"),[P.k])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.b.ab(z,"\n")},
e9:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.ca(a,b)
z.bi(a,y,c)
z.c7(a,y)
x=z.bd(a,y,35713)
if(x!=null&&J.K(x,!1)){w=z.bc(a,y)
P.J("E:Compilation failed:")
P.J("E:"+G.j_(c))
P.J("E:Failure:")
P.J(C.i.l("E:",w))
throw H.b(w)}return y},
bs:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bT(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bU(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.cG(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
hh:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bT(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.bU(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hi:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bT(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bU(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.cG(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.fo(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hg:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.ac(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.ac(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.ac(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.ac(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
jA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.al(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.F]],v=[P.aw],u=[T.T],t=[T.m],s=[T.a5];y.t();){r=y.d
if(!x.D(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.eH>0)H.aB("I: "+q)
continue}p=z.h(0,r)
switch($.$get$a_().h(0,r).a){case"vec2":b.ad(r,G.hh(H.bg(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.ad(r,G.bs(H.bg(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.ad(r,G.hi(H.bg(p,"$isi",u,"$asi"),null),4)
break
case"float":b.ad(r,new Float32Array(H.bJ(H.bg(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.ad(r,G.hg(H.bg(p,"$isi",w,"$asi"),null),4)
break}}},
hL:function(a,b,c){var z,y,x,w,v
z=G.dy(a,b.d,1,b.e.x)
z.bo(G.bs(c,null))
y=new Array(c.length)
y.fixed$length=Array
x=H.r(y,[P.F])
for(y=c.length,w=x.length,v=0;v<y;++v){if(v>=w)return H.a(x,v)
x[v]=v}z.bn(x)
return z},
aP:{"^":"d;aT:c>"},
cg:{"^":"aP;d,a,b,c",
bt:function(){return this.d},
k:function(a){var z,y,x,w
z=H.r(["{"+H.c(new H.e4(H.l3(this),null))+"}["+this.a+"]"],[P.k])
for(y=this.d,x=new H.al(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.b.ab(z,"\n")}},
fP:{"^":"dH;"},
fS:{"^":"d;a,b",
ck:function(a,b,c){J.fd(this.a,b)
if(c>0)J.fG(this.a,b,c)},
cP:function(a,b,c,d,e,f,g,h){J.bP(this.a,34962,b)
J.fH(this.a,c,d,e,!1,g,h)}},
hk:{"^":"d;a,b,c,d,e"},
he:{"^":"d;a,b,c"},
hf:{"^":"d;a,b,c,d"},
hp:{"^":"d;a,b,c,d,e",
an:function(a){switch($.$get$a_().h(0,a).a){case"vec2":this.e.j(0,a,H.r([],[T.a5]))
break
case"vec3":this.e.j(0,a,H.r([],[T.m]))
break
case"vec4":this.e.j(0,a,H.r([],[T.T]))
break
case"float":this.e.j(0,a,H.r([],[P.aw]))
break
case"uvec4":this.e.j(0,a,H.r([],[[P.i,P.F]]))
break}},
d8:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.he(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.z)(a),++w)z.push(a[w].a5(0))},
d6:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.z)(b),++x)z.push(b[x].a5(0))},
d7:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.z)(b),++x)z.push(b[x].a5(0))},
bm:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.z)(b),++x)z.push(b[x].a5(0))},
d9:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.hf(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.z)(a),++w)z.push(a[w].a5(0))},
dg:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.r(x,[P.F])
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
for(y=this.e,x=new H.al(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$a_().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.ab(z," ")}},
dS:{"^":"d;a,b,c"},
dR:{"^":"d;a,b,c"},
hR:{"^":"cg;d,a,b,c",
dj:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$cS())
z.j(0,"cStencilFunc",$.$get$dJ())},
p:{
dx:function(a){var z=new G.hR(P.X(),a,!1,!0)
z.dj(a)
return z}}},
hT:{"^":"aP;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bp:function(a,b,c){var z,y
C.i.bE(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bP(z.a,34962,y)
J.cz(z.a,34962,b,35048)},
bq:function(a){this.ch=a
this.bp("aPosition",a,3)},
br:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ad:function(a,b,c){var z,y,x,w,v
z=J.cA(a,0)===105
if(z&&this.z===0)this.z=C.c.Z(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bR(x.a))
this.bp(a,b,c)
w=$.$get$a_().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bi(x.a,this.e)
x.ck(0,v,z?1:0)
x.cP(0,y.h(0,a),v,w.bs(),5126,!1,0,0)},
bo:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bR(y.a))
this.bq(a)
x=$.$get$a_().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bi(y.a,this.e)
y.ck(0,w,0)
y.cP(0,z.h(0,"aPosition"),w,x.bs(),5126,!1,0,0)},
bn:function(a){var z,y,x
z=this.d
this.y=J.bR(z.a)
y=this.ch.length
if(y<768){this.cx=new Uint8Array(H.bJ(a))
this.Q=5121}else if(y<196608){this.cx=new Uint16Array(H.bJ(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bJ(a))
this.Q=5125}J.bi(z.a,this.e)
y=this.y
x=this.cx
J.bP(z.a,34963,y)
J.cz(z.a,34963,x,35048)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.al(z,z.r,null,null,[H.D(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.c(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.ab(y,"  ")},
p:{
dy:function(a,b,c,d){return new G.hT(b,J.f7(b.a),c,P.X(),d,null,0,-1,null,null,P.X(),"meshdata:"+a,!1,!0)}}},
i8:{"^":"cg;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
da:function(a,b){var z
if(typeof a!=="number")return a.a_()
if(typeof b!=="number")return H.n(b)
z=a/b
if(this.z===z)return
this.z=z
this.bw()},
bw:function(){var z,y,x,w,v,u
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
bt:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.m(new Float32Array(3))
u.Y(x,w,v)
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
x=!!y.$isT
q=x?y.gac(t):1
if(!!y.$ism){p=y.gm(t)
s=y.gn(t)
r=y.gE(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gE(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.n(t)
x=z[4]
if(typeof s!=="number")return H.n(s)
w=z[8]
if(typeof r!=="number")return H.n(r)
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
c.a6(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
h8:{"^":"d;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
ip:{"^":"aP;d,e,f,r,x,y,z,Q,ch,a,b,c",
dn:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){t=z[u]
x.j(0,t,J.cH(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){t=z[u]
x.j(0,t,J.cH(w.a,v,t))}},
dt:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.al(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.D(0,v))x.push(v)}for(z=this.x,y=new P.cm(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
dz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.al(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cA(t,0)){case 117:if(w.D(0,t)){s=b.h(0,t)
if(v.D(0,t))H.aB("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$a_().h(0,t)
if(r==null)H.a1("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bV(x.a,q,s)
else if(!!J.p(s).$ishx)J.fE(x.a,q,s)
break
case"float":if(r.c===0)J.fC(x.a,q,s)
else if(!!J.p(s).$isc2)J.fD(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ab(s,"$isA").a
J.cO(x.a,q,!1,p)}else if(!!J.p(s).$isc2)J.cO(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ab(s,"$isam").a
J.cN(x.a,q,!1,p)}else if(!!J.p(s).$isc2)J.cN(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cM(o,q,H.ab(s,"$isT").a)
else J.cM(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cL(o,q,H.ab(s,"$ism").a)
else J.cL(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cK(o,q,H.ab(s,"$isa5").a)
else J.cK(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.n(p)
J.cx(x.a,33984+p)
p=H.ab(s,"$iscf").b
J.bh(x.a,3553,p)
p=this.ch
J.bV(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.n(p)
J.cx(x.a,33984+p)
p=H.ab(s,"$iscf").b
J.bh(x.a,34067,p)
p=this.ch
J.bV(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.aB("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.K(s,!0)
o=x.a
if(p)J.bj(o,2929)
else J.bS(o,2929)
break
case"cStencilFunc":H.ab(s,"$isdS")
p=s.a
o=x.a
if(p===1281)J.bS(o,2960)
else{J.bj(o,2960)
o=s.b
n=s.c
J.fx(x.a,p,o,n)}break
case"cDepthWrite":J.f8(x.a,s)
break
case"cBlendEquation":H.ab(s,"$isdR")
p=s.a
o=x.a
if(p===1281)J.bS(o,3042)
else{J.bj(o,3042)
o=s.b
n=s.c
J.f0(x.a,o,n)
J.f_(x.a,p)}break}++u
break}}m=P.db(0,0,0,Date.now()-new P.bo(z,!1).a,0,0)
""+u
m.k(0)},
df:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.d
J.fF(y.a,this.r)
this.ch=0
this.z.a4(0)
for(x=b.length,w=0;w<b.length;b.length===x||(0,H.z)(b),++w){v=b[w]
this.dz(v.a,v.bt())}x=this.Q
x.a4(0)
for(u=a.cy,t=new H.al(u,u.r,null,null,[H.D(u,0)]),t.c=u.e;t.t();)x.C(0,t.d)
s=this.dt()
if(s.length!==0)P.J("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(s)))
x=a.d
u=a.e
J.bi(x.a,u)
r=this.e.f.length>0
u=a.f
x=a.br()
t=a.Q
q=a.z
if(r)J.eY(y.a,u)
if(t!==-1){p=y.a
if(q>1)J.fc(p,u,x,t,0,q)
else J.fb(p,u,x,t,0)}else{t=y.a
if(q>1)J.fa(t,u,0,x,q)
else J.f9(t,u,0,x)}if(r)J.fe(y.a)
c.push(new G.h8(this.a,a.z,a.br(),u,P.db(0,0,0,Date.now()-new P.bo(z,!1).a,0,0)))},
p:{
cc:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.Z(null,null,null,P.k)
y=c.b
x=d.b
w=c.f
v=J.f5(b.a)
u=G.e9(b.a,35633,y)
J.cy(b.a,v,u)
t=G.e9(b.a,35632,x)
J.cy(b.a,v,t)
if(w.length>0)J.fB(b.a,v,w,35980)
J.fv(b.a,v)
if(J.fu(b.a,v,35714)!==!0)H.a1(J.ft(b.a,v))
z=new G.ip(b,c,d,v,P.c8(c.c,null),P.X(),P.X(),z,null,a,!1,!0)
z.dn(a,b,c,d)
return z}}},
x:{"^":"d;a,b,c",
bs:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iv:{"^":"d;a,b,c,d,e,f,r,x",
aA:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.z)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.b.ay(y)},
al:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.z)(a),++x)y.push(a[x])
C.b.ay(y)},
am:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.b.ay(z)},
bv:function(a,b){this.b=this.bx(!0,a,b)},
aB:function(a){return this.bv(a,null)},
dq:function(a,b){this.b=this.bx(!1,a,b)},
bu:function(a){return this.dq(a,null)},
bx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){t=z[u]
s=$.$get$a_().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){q=z[u]
s=$.$get$a_().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){q=z[u]
s=$.$get$a_().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){q=z[u]
s=$.$get$a_().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
if(c!=null)C.b.S(w,c)
if(a)w.push("void main(void) {")
C.b.S(w,b)
if(a)w.push("}")
return C.b.ab(w,"\n")},
p:{
aS:function(a){return new G.iv(a,null,[],[],[],[],0,P.X())}}},
dH:{"^":"aP;",
eE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.m(new Float32Array(3))
b.Y(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
t=v.F(0,a)
t.aX(0)
s=b.cc(t)
s.aX(0)
r=t.cc(s)
r.aX(0)
u=s.aS(v)
q=r.aS(v)
v=t.aS(v)
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
aW:function(a){return this.eE(a,null)}},
iO:{"^":"d;a,b,c,d,e,f,r",
dh:function(a,b){var z=this.e
if(z!==1)J.fz(a.a,b,34046,z)
z=this.r
J.bk(a.a,b,10240,z)
z=this.f
J.bk(a.a,b,10241,z)
if(this.b){J.bk(a.a,b,10242,33071)
J.bk(a.a,b,10243,33071)}}},
cf:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iQ:{"^":"cf;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}}],["","",,Y,{"^":"",
jm:function(a){var z,y,x,w,v
z=J.y(a)
y=z.gi(a)
if(typeof y!=="number")return H.n(y)
y=new Array(y)
y.fixed$length=Array
x=H.r(y,[P.aw])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.n(v)
if(!(w<v))break
v=z.h(a,w)
if(typeof v==="number"&&Math.floor(v)===v){v=J.H(z.h(a,w))
if(w>=y)return H.a(x,w)
x[w]=v}else{v=z.h(a,w)
if(typeof v==="number"){v=z.h(a,w)
if(w>=y)return H.a(x,w)
x[w]=v}}++w}return x},
jE:function(a){var z,y,x,w,v
z=J.y(a)
y=z.gi(a)
if(typeof y!=="number")return H.n(y)
y=new Array(y)
y.fixed$length=Array
x=H.r(y,[P.F])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.n(v)
if(!(w<v))break
v=z.h(a,w)
if(w>=y)return H.a(x,w)
x[w]=v;++w}return x},
jl:function(a){var z,y,x
z=J.y(a)
y=z.h(a,"skinIndices")
z.h(a,"skinWeights")
if(y==null||J.L(y)===0)return 0
z=J.L(z.h(a,"vertices"))
if(typeof z!=="number")return z.Z()
z=C.a.R(z,3)
x=J.L(y)
if(typeof x!=="number")return x.Z()
z=C.a.Z(x,z)
P.J("Skin multiplier is "+H.c(z))
return z},
hu:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=[]
y=Y.jl(a8)
x=J.y(a8)
w=Y.jE(x.h(a8,"faces"))
v=w.length
P.J("faces: "+v)
u=Y.d0(x.h(a8,"vertices"))
t=Y.d0(x.h(a8,"normals"))
s=y===0
r=s?null:Y.d1(y,x.h(a8,"skinIndices"))
q=s?null:Y.d1(y,Y.jm(x.h(a8,"skinWeights")))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.gm(o)+o.gn(o)+o.gE(o)+o.gac(o)
if(n<0.98||n>1.02)H.aB("bad vector: "+o.k(0))}m=Y.fY(J.ac(x.h(a8,"uvs"),0))
for(x=y>0,s=u.length,l=m.length,k=l>0,j=t.length,i=j>0,h=0;h<v;){g=h+1
if(h<0)return H.a(w,h)
f=w[h]
if(typeof f!=="number")return f.f_()
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
a2.push(w[h])}if(typeof c!=="number")return H.n(c)
for(;a=z.length,a<=c;){a4=new G.hp(!1,[],[],[],P.X())
if(i)a4.an("aNormal")
if(k)a4.an("aTexUV")
if(x){a4.an("aBoneIndex")
a4.an("aBoneWeight")}z.push(a4)}if(c>>>0!==c||c>=a)return H.a(z,c)
a4=z[c]
a5=[]
for(a=e.length,p=0;p<e.length;e.length===a||(0,H.z)(e),++p){g=e[p]
if(g>>>0!==g||g>=s)return H.a(u,g)
a5.push(u[g])}if(n===3)a4.d8(a5)
else a4.d9(a5)
if(b.length>0)a4.d6("aTexUV",b)
if(a0.length>0)a4.d7("aNormal",a0)
if(x){a6=[]
a7=[]
for(a=e.length,p=0;p<e.length;e.length===a||(0,H.z)(e),++p){g=e[p]
if(g>>>0!==g||g>=r.length)return H.a(r,g)
a6.push(r[g])
if(g>=q.length)return H.a(q,g)
a7.push(q[g])}a4.bm("aBoneIndex",a6)
a4.bm("aBoneWeight",a7)}}x="out: "+z.length+" "
if(0>=z.length)return H.a(z,0)
P.J(x+z[0].k(0))
return z},
ht:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=J.ac(a,"animation")
y=J.y(z)
x=y.h(z,"hierarchy")
w=y.h(z,"name")
y=y.h(z,"length")
v=J.y(x)
u=v.gi(x)
if(typeof u!=="number")return H.n(u)
u=new Array(u)
u.fixed$length=Array
u=H.r(u,[L.cU])
t=u.length
s=b.length
r=0
while(!0){q=v.gi(x)
if(typeof q!=="number")return H.n(q)
if(!(r<q))break
p=[]
o=[]
n=[]
m=[]
l=[]
k=[]
for(q=J.aF(J.ac(v.h(x,r),"keys"));q.t();){j=q.gA(q)
i=J.y(j)
h=J.H(i.h(j,"time"))
if(i.D(j,"pos")===!0){p.push(h)
o.push(Y.du(i.h(j,"pos")))}if(i.D(j,"scale")===!0){l.push(h)
k.push(Y.dt(i.h(j,"scl")))}if(i.D(j,"rot")===!0){n.push(h)
m.push(Y.ds(i.h(j,"rot")))}}if(r>=s)return H.a(b,r)
q=b[r]
g=new L.cU(q,p,o,n,m,l,k)
i=p.length
if(i===0){g.b=[0]
i=new Float32Array(3)
i[0]=0
i[1]=0
i[2]=0
g.c=[new T.m(i)]}i=n.length
if(i===0){g.d=[0]
i=new Float32Array(4)
i[0]=0
i[1]=0
i[2]=0
i[3]=1
g.e=[new T.b6(i)]}i=l.length
if(i===0){g.f=[0]
i=new Float32Array(3)
i[0]=1
i[1]=1
i[2]=1
g.r=[new T.m(i)]}q=q.d
if(q>=t)return H.a(u,q)
u[q]=g;++r}P.J("anim-bones: "+t)
return new L.iw(w,u,y)},
hv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=J.y(a)
y=z.h(a,"metadata")
x=z.h(a,"bones")
z=J.ac(y,"bones")
if(typeof z!=="number")return H.n(z)
z=new Array(z)
z.fixed$length=Array
w=H.r(z,[L.cT])
z=J.y(x)
v=w.length
u=0
while(!0){t=z.gi(x)
if(typeof t!=="number")return H.n(t)
if(!(u<t))break
s=z.h(x,u)
t=J.y(s)
r=t.h(s,"name")
q=t.h(s,"parent")
p=Y.dt(t.h(s,"scl"))
o=Y.du(t.h(s,"pos"))
n=Y.ds(t.h(s,"rotq"))
m=new T.A(new Float32Array(16))
m.bh(o,n)
m.P(0,p)
if(u!==0&&J.aj(q,0))H.aB("found unusal root node "+u+" "+H.c(q))
t=new T.A(new Float32Array(16))
t.L()
if(u>=v)return H.a(w,u)
w[u]=new L.cT(r,m,t,u,q);++u}P.J("bones: "+v)
L.ij(w)
return w},
d0:function(a){var z,y,x,w,v,u,t,s,r
z=J.y(a)
y=z.gi(a)
if(typeof y!=="number")return y.Z()
y=new Array(C.a.R(y,3))
y.fixed$length=Array
x=H.r(y,[T.m])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.n(v)
if(!(w<v))break
v=C.c.R(w,3)
u=J.H(z.h(a,w))
t=J.H(z.h(a,w+1))
s=J.H(z.h(a,w+2))
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
if(v>=y)return H.a(x,v)
x[v]=new T.m(r)
w+=3}return x},
fY:function(a){var z,y,x,w,v,u,t,s
z=J.y(a)
y=z.gi(a)
if(typeof y!=="number")return y.Z()
y=new Array(C.a.R(y,2))
y.fixed$length=Array
x=H.r(y,[T.a5])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.n(v)
if(!(w<v))break
v=C.c.R(w,2)
u=J.H(z.h(a,w))
t=J.H(z.h(a,w+1))
s=new Float32Array(2)
s[0]=u
s[1]=t
if(v>=y)return H.a(x,v)
x[v]=new T.a5(s)
w+=2}return x},
d1:function(a,b){var z,y,x,w,v,u,t,s
z=J.y(b)
y=z.gi(b)
if(typeof y!=="number")return y.Z()
y=new Array(C.a.Z(y,a))
y.fixed$length=Array
x=H.r(y,[T.T])
y=x.length
w=0
v=0
while(!0){u=z.gi(b)
if(typeof u!=="number")return H.n(u)
if(!(w<u))break
u=new Float32Array(4)
for(t=0;t<a;++t){s=J.H(z.h(b,w+t))
if(t>=4)return H.a(u,t)
u[t]=s}if(v>=y)return H.a(x,v)
x[v]=new T.T(u)
w+=a;++v}return x},
dv:function(a){var z,y,x,w
z=J.y(a)
y=J.H(z.h(a,0))
x=J.H(z.h(a,1))
z=J.H(z.h(a,2))
w=new T.m(new Float32Array(3))
w.Y(y,x,z)
return w},
du:function(a){if(a==null)return new T.m(new Float32Array(3))
return Y.dv(a)},
dt:function(a){var z
if(a==null){z=new T.m(new Float32Array(3))
z.Y(1,1,1)
return z}return Y.dv(a)},
ds:function(a){var z,y,x,w,v
if(a==null){z=new Float32Array(4)
z[3]=1
return new T.b6(z)}z=J.y(a)
y=J.H(z.h(a,0))
x=J.H(z.h(a,1))
w=J.H(z.h(a,2))
z=J.H(z.h(a,3))
v=new T.b6(new Float32Array(4))
v.cX(y,x,w,z)
return v}}],["","",,R,{"^":"",
cV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[]
for(y=a.length,x=b.a,w=x.length,v=0;v<y;++v){u=a[v].e
if(J.K(u,-1))continue
if(v>=w)return H.a(x,v)
t=x[v].a
s=t[14]
r=t[13]
q=t[12]
t=new Float32Array(3)
t[0]=q
t[1]=r
t[2]=s
p=new T.m(new Float32Array(3))
p.u(new T.m(t))
p.P(0,c)
z.push(p)
if(u>>>0!==u||u>=w)return H.a(x,u)
p=x[u].a
s=p[14]
r=p[13]
q=p[12]
t=new Float32Array(3)
t[0]=q
t[1]=r
t[2]=s
p=new T.m(new Float32Array(3))
p.u(new T.m(t))
p.P(0,c)
z.push(p)}return z},
fO:{"^":"d;a,b,c,d,e,f"},
io:{"^":"im;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eM:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sK(z,y)
w.sH(z,x)
P.J("size change "+H.c(y)+" "+H.c(x))
this.dx.da(y,x)
this.z=y
this.Q=x},"$1","geL",4,0,17]},
iB:{"^":"d;",
dr:function(a,b,c){var z,y,x
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
x=this.dC(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dC:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.jf("span",null)
y=J.cE(v)
J.e(y).sK(y,"1px")
C.n.sH(y,""+d+"px")
C.n.ser(y,"left")
x=C.n.bD(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
iC:{"^":"iB;e,f,a,b,c,d",
dv:function(a,b){var z,y,x,w,v;++this.e
if(J.aj(J.eU(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eV(z,2)+" fps"
y=this.c;(y&&C.D).cU(y,b)
x=C.c.R(30*C.t.ec(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cE(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
du:function(a){return this.dv(a,"")}}}],["","",,A,{"^":"",
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.fg(b)!==!0)return
z=b.dw(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.b.geD(e)
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
w.aR(new T.am(u))
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
a.df(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.z)(y),++r)A.eF(a,y[r],z,d,e)},
cb:{"^":"dH;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dl:function(a,b){this.cy.push(b)},
dw:function(a){var z=this.dx
z.u(a)
z.a6(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"},
p:{
dA:function(a,b){var z,y,x,w,v,u
z=new Float32Array(9)
y=new T.A(new Float32Array(16))
y.L()
x=new T.A(new Float32Array(16))
x.L()
w=new Float32Array(3)
v=new Float32Array(3)
u=new Float32Array(3)
z=new A.cb(null,null,[],new T.am(z),y,x,new T.m(w),new T.m(v),new T.m(u),new T.m(new Float32Array(3)),a,!1,!0)
z.dl(a,b)
return z}}},
by:{"^":"aP;d,e,cr:f>,a,b,c"},
im:{"^":"aP;",
dm:function(a,b,c){if(this.d==null)this.d=new G.hk(this.e,null,null,null,null)},
de:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eZ(v.a,36160,z)
J.fI(v.a,this.x,this.y,x,w)
if(y!==0)J.f1(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.z)(z),++u){t=z[u]
if(t.c!==!0)continue
x=t.d
if(x.c!==!0)continue
s=t.e
s.push(new G.cg(P.X(),"transforms",!1,!0))
r=new T.A(new Float32Array(16))
r.L()
for(w=t.f,v=w.length,q=0;q<w.length;w.length===v||(0,H.z)(w),++q)A.eF(x,w[q],r,a,s)
if(0>=s.length)return H.a(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,D,{"^":"",
hN:function(a){var z,y
z=new P.P(0,$.u,null,[null])
y=new XMLHttpRequest()
C.E.eI(y,"GET",a)
W.a7(y,"loadend",new D.hO(new P.e8(z,[null]),y),!1,W.n7)
y.send("")
return z},
hO:{"^":"h:0;a,b",
$1:function(a){this.a.ar(0,C.N.ek(0,W.kF(this.b.response)))}},
hH:{"^":"d;a,b,c",
di:function(a){var z
a=document
z=W.bu
W.a7(a,"keydown",new D.hJ(this),!1,z)
W.a7(a,"keyup",new D.hK(this),!1,z)},
p:{
hI:function(a){var z=P.F
z=new D.hH(P.Z(null,null,null,z),P.Z(null,null,null,z),P.Z(null,null,null,z))
z.di(a)
return z}}},
hJ:{"^":"h:8;a",
$1:function(a){var z=this.a
z.a.C(0,J.cF(a))
z.b.C(0,a.which)}},
hK:{"^":"h:8;a",
$1:function(a){var z=this.a
z.a.ct(0,J.cF(a))
z.c.C(0,a.which)}},
hW:{"^":"d;a,b,c,d,e,f,r,x",
dk:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gb_(a)
W.a7(y.a,y.b,new D.hY(this),!1,H.D(y,0))
y=z.gaZ(a)
W.a7(y.a,y.b,new D.hZ(this),!1,H.D(y,0))
y=z.gb0(a)
W.a7(y.a,y.b,new D.i_(this),!1,H.D(y,0))
z=z.gb1(a)
W.a7(z.a,z.b,new D.i0(this),!1,H.D(z,0))},
p:{
hX:function(a){var z=P.F
z=new D.hW(P.Z(null,null,null,z),P.Z(null,null,null,z),P.Z(null,null,null,z),0,0,0,0,0)
z.dk(a)
return z}}},
hY:{"^":"h:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aw(a)
y=this.a
y.r=z.gcs(a).a
y.x=z.gcs(a).b
y.d=z.geH(a).a
y.e=a.movementY}},
hZ:{"^":"h:5;a",
$1:function(a){var z=J.e(a)
z.aw(a)
P.J("BUTTON "+H.c(z.gc4(a)))
z=this.a
z.a.C(0,a.button)
z.b.C(0,a.button)}},
i_:{"^":"h:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aw(a)
y=this.a
y.a.ct(0,z.gc4(a))
y.c.C(0,a.button)}},
i0:{"^":"h:18;a",
$1:function(a){var z=J.e(a)
z.aw(a)
this.a.f=z.gen(a)}},
i7:{"^":"fP;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bf:function(a){var z,y
z=C.R.es(a,0,new A.l5())
if(typeof z!=="number")return H.n(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l5:{"^":"h:19;",
$2:function(a,b){var z,y
z=J.aD(a,J.ad(b))
if(typeof z!=="number")return H.n(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"d;bI:a<",
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.a(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bf(this.a)},
X:function(a){var z,y,x
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
return new T.m(z)},
l:function(a,b){var z=new T.am(new Float32Array(9))
z.u(this)
z.C(0,b)
return z},
F:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.am(z)
y.u(this)
x=b.gbI()
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
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
C:function(a,b){var z,y
z=b.gbI()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))
y[4]=C.a.l(y[4],z.h(0,4))
y[5]=C.a.l(y[5],z.h(0,5))
y[6]=C.a.l(y[6],z.h(0,6))
y[7]=C.a.l(y[7],z.h(0,7))
y[8]=C.a.l(y[8],z.h(0,8))}},A:{"^":"d;aK:a<",
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
bh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=b.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
u=y+y
t=x+x
s=w+w
r=y*u
q=y*t
p=y*s
o=x*t
n=x*s
m=w*s
l=v*u
k=v*t
j=v*s
i=a.a
h=this.a
h[0]=1-(o+m)
h[1]=q+j
h[2]=p-k
h[3]=0
h[4]=q-j
h[5]=1-(r+m)
h[6]=n+l
h[7]=0
h[8]=p+k
h[9]=n-l
h[10]=1-(r+o)
h[11]=0
h[12]=i[0]
h[13]=i[1]
h[14]=i[2]
h[15]=1},
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.a(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bf(this.a)},
X:function(a){var z,y,x
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
return new T.T(z)},
a1:function(a,b){var z=new T.A(new Float32Array(16))
z.u(this)
z.a6(0,b)
return z},
l:function(a,b){var z=new T.A(new Float32Array(16))
z.u(this)
z.C(0,b)
return z},
F:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.A(z)
y.u(this)
x=b.gaK()
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
cu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x[4]
v=x[8]
u=x[5]
t=x[9]
s=x[6]
r=x[10]
q=x[7]
p=x[11]
o=-y
x[4]=w*z+v*y
x[5]=u*z+t*y
x[6]=s*z+r*y
x[7]=q*z+p*y
x[8]=w*o+v*z
x[9]=u*o+t*z
x[10]=s*o+r*z
x[11]=q*o+p*z},
cT:function(a,b,c,d){var z,y,x,w
z=b.a
y=z[0]
x=z[1]
w=z[2]
z=this.a
z[0]=z[0]*y
z[1]=z[1]*y
z[2]=z[2]*y
z[3]=z[3]*y
z[4]=z[4]*x
z[5]=z[5]*x
z[6]=z[6]*x
z[7]=z[7]*x
z[8]=z[8]*w
z[9]=z[9]*w
z[10]=z[10]*w
z[11]=z[11]*w
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]},
P:function(a,b){return this.cT(a,b,null,null)},
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
aR:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=a8.gaK()
y=z[0]
x=z[1]
w=z[2]
v=z[3]
u=z[4]
t=z[5]
s=z[6]
r=z[7]
q=z[8]
p=z[9]
o=z[10]
n=z[11]
m=z[12]
l=z[13]
k=z[14]
j=z[15]
i=y*t-x*u
h=y*s-w*u
g=y*r-v*u
f=x*s-w*t
e=x*r-v*t
d=w*r-v*s
c=q*l-p*m
b=q*k-o*m
a=q*j-n*m
a0=p*k-o*l
a1=p*j-n*l
a2=o*j-n*k
a3=i*a2-h*a1+g*a0+f*a-e*b+d*c
if(a3===0){this.u(a8)
return 0}a4=1/a3
a5=this.a
a5[0]=(t*a2-s*a1+r*a0)*a4
a5[1]=(-x*a2+w*a1-v*a0)*a4
a5[2]=(l*d-k*e+j*f)*a4
a5[3]=(-p*d+o*e-n*f)*a4
a6=-u
a5[4]=(a6*a2+s*a-r*b)*a4
a5[5]=(y*a2-w*a+v*b)*a4
a7=-m
a5[6]=(a7*d+k*g-j*h)*a4
a5[7]=(q*d-o*g+n*h)*a4
a5[8]=(u*a1-t*a+r*c)*a4
a5[9]=(-y*a1+x*a-v*c)*a4
a5[10]=(m*e-l*g+j*i)*a4
a5[11]=(-q*e+p*g-n*i)*a4
a5[12]=(a6*a0+t*b-s*c)*a4
a5[13]=(y*a0-x*b+w*c)*a4
a5[14]=(a7*f+l*h-k*i)*a4
a5[15]=(q*f-p*h+o*i)*a4
return a3},
C:function(a,b){var z,y
z=b.gaK()
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
a6:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},b6:{"^":"d;bL:a<",
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gac:function(a){return this.a[3]},
u:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
cX:function(a,b,c,d){var z=this.a
z[0]=a
z[1]=b
z[2]=c
z[3]=d},
gi:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
C:function(a,b){var z,y
z=b.gbL()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))},
l:function(a,b){var z=new T.b6(new Float32Array(4))
z.u(this)
z.C(0,b)
return z},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.b6(z)
y.u(this)
x=b.gbL()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.a(z,b)
return z[b]},
k:function(a){var z=this.a
return H.c(z[0])+", "+H.c(z[1])+", "+H.c(z[2])+" @ "+H.c(z[3])}},a5:{"^":"d;bR:a<",
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bf(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbR()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.a5(z)},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a5(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.C(0,b)
return y},
a_:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a5(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.P(0,1/b)
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=2)return H.a(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
C:function(a,b){var z,y
z=b.gbR()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))},
P:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
as:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])},
a5:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.a5(z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},m:{"^":"d;bS:a<",
Y:function(a,b,c){var z=this.a
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
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bf(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.u(this)
x=b.gbS()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z=new T.m(new Float32Array(3))
z.u(this)
z.C(0,b)
return z},
a_:function(a,b){return this.bg(1/b)},
a1:function(a,b){return this.bg(b)},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.a(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gaV())},
gaV:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aX:function(a){var z,y,x
z=Math.sqrt(this.gaV())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aS:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
cc:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.m(new Float32Array(3))
z.Y(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
C:function(a,b){var z,y
z=b.gbS()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))},
P:function(a,b){var z,y
z=this.a
y=z[2]
if(typeof b!=="number")return H.n(b)
z[2]=y*b
z[1]=z[1]*b
z[0]=z[0]*b},
bg:function(a){var z=new T.m(new Float32Array(3))
z.u(this)
z.P(0,a)
return z},
as:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])},
a5:function(a){var z=new T.m(new Float32Array(3))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]}},T:{"^":"d;bT:a<",
u:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.T){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bf(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.T(z)
y.u(this)
x=b.gbT()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z=new T.T(new Float32Array(4))
z.u(this)
z.C(0,b)
return z},
a_:function(a,b){var z=new T.T(new Float32Array(4))
z.u(this)
z.P(0,1/b)
return z},
a1:function(a,b){var z=new T.T(new Float32Array(4))
z.u(this)
z.P(0,b)
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
C:function(a,b){var z,y
z=b.gbT()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))},
P:function(a,b){var z,y
z=this.a
y=z[0]
if(typeof b!=="number")return H.n(b)
z[0]=y*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
as:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])
z[3]=Math.floor(z[3])},
a5:function(a){var z=new T.T(new Float32Array(4))
z.u(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gac:function(a){return this.a[3]}}}],["","",,B,{"^":"",
eN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z={}
y=document
x=new R.iC(0,0,null,null,null,null)
x.dr(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fS(null,w)
u=J.fq(w,"webgl2",P.c7(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.a1(P.df('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.c(J.fr(u))
if($.eH>0)P.J("I: "+t)
J.f2(u,0,0,0,1)
J.bj(u,2929)
u=new Float32Array(3)
t=D.hI(null)
s=D.hX(w)
r=new T.A(new Float32Array(16))
r.L()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.i7(20,0,0,0,new T.m(u),-0.02,t,s,r,new T.m(q),new T.m(p),new T.m(o),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.A(new Float32Array(16))
u.L()
t=new T.A(new Float32Array(16))
t.L()
m=new G.i8(n,50,1,0.1,1000,u,t,new T.A(new Float32Array(16)),P.X(),"perspective",!1,!0)
m.bw()
u=G.cc("animation",v,$.$get$ez(),$.$get$ey())
l=new A.by(u,[m],[],"animation",!1,!0)
t=G.cc("solid",v,$.$get$eR(),$.$get$eQ())
k=new A.by(t,[m],[],"solid",!1,!0)
s=G.cc("demo",v,$.$get$eE(),$.$get$eD())
j=new A.by(s,[m],[],"demo",!1,!0)
r=H.r([],[A.by])
i=new R.io(w,m,null,v,r,17664,0,0,0,0,"main",!1,!0)
i.dm("main",v,null)
i.eM(null)
W.a7(window,"resize",i.geL(),!1,W.N)
r.push(k)
r.push(l)
r.push(j)
h=G.dx("wire")
r=new T.m(new Float32Array(3))
r.Y(1,1,0)
h.d.j(0,"uColor",r)
z.a=null
z.b=null
z.c=null
g=G.dx("mat")
f=P.c7(["idSkeleton",t,"idStatic",s,"idAnimation",u])
for(u=y.getElementsByTagName("input"),t=u.length,e=0;e<u.length;u.length===t||(0,H.z)(u),++e){s=J.fj(u[e])
W.a7(s.a,s.b,new B.lh(f),!1,H.D(s,0))}for(u=y.getElementsByTagName("input"),t=u.length,e=0;e<u.length;u.length===t||(0,H.z)(u),++e){d=u[e]
H.aB("initialize inputs "+H.c(J.fh(d)))
c=y.createEvent("Event")
c.initEvent("change",!0,!0)
d.dispatchEvent(c)}z.d=0
g.d.j(0,"uTime",0)
P.hm([D.hN("../asset/knight/knight.js")],null,!1).b4(new B.li(z,l,g,j,v,k,h,new B.lg(z,n,i,x,g)))},
lh:{"^":"h:20;a",
$1:function(a){var z=H.ab(J.fm(a),"$isdi")
P.J(H.c(z.id)+" toggle "+H.c(z.checked))
this.a.h(0,z.id).c=z.checked}},
lg:{"^":"h:21;a,b,c,d,e",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
z=this.a
y=J.aa(a9)
y.F(a9,z.d)
z.d=y.l(a9,0)
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.v(0,0)||v.v(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.a1()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.a1()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.v(0,37))x.go+=0.03
else if(u.v(0,39))x.go-=0.03
if(u.v(0,38))x.id+=0.03
else if(u.v(0,40))x.id-=0.03
if(u.v(0,33))x.fy*=0.99
else if(u.v(0,34))x.fy*=1.01
if(u.v(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.a1()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.ed(x.id,-1.4707963267948965,1.4707963267948965)
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
x.aW(s)
s=x.f
u=s.a
u[0]=p[2]
u[1]=p[6]
u[2]=p[10]
x=-x.k1
o=Math.sqrt(s.gaV())
n=u[0]/o
m=u[1]/o
l=u[2]/o
k=Math.cos(x)
j=Math.sin(x)
i=1-k
h=n*n*i+k
x=l*j
g=n*m*i-x
u=m*j
f=n*l*i+u
e=m*n*i+x
d=m*m*i+k
x=n*j
c=m*l*i-x
b=l*n*i-u
a=l*m*i+x
a0=l*l*i+k
x=p[0]
u=p[4]
s=p[8]
t=p[1]
q=p[5]
a1=p[9]
a2=p[2]
a3=p[6]
a4=p[10]
a5=p[3]
a6=p[7]
a7=p[11]
p[0]=x*h+u*e+s*b
p[1]=t*h+q*e+a1*b
p[2]=a2*h+a3*e+a4*b
p[3]=a5*h+a6*e+a7*b
p[4]=x*g+u*d+s*a
p[5]=t*g+q*d+a1*a
p[6]=a2*g+a3*d+a4*a
p[7]=a5*g+a6*d+a7*a
p[8]=x*f+u*c+s*a0
p[9]=t*f+q*c+a1*a0
p[10]=a2*f+a3*c+a4*a0
p[11]=a5*f+a6*c+a7*a0
v.c.a4(0)
v.b.a4(0)
w.e=0
w.d=0
w.f=0
w.c.a4(0)
w.b.a4(0)
this.c.de([])
C.a8.ge5(window).b4(this)
this.d.du(z.d)
w=J.ff(J.eT(y.a_(a9,1000),0.0333))
v=z.c.length
if(typeof w!=="number")return w.aj()
this.e.d.j(0,"uTime",C.c.aj(w,v))
z=z.a
y=y.a_(a9,1000)
v=z.c
w=z.a
a7=z.d
a6=z.e
a5=a7.c
if(typeof y!=="number")return y.aj()
if(typeof a5!=="number")return H.n(a5)
L.ci(v,w,a7,a6,C.a.aj(y,a5))
a8=R.cV(v,z.e,1)
z.b.bq(G.bs(a8,null))}},
li:{"^":"h:22;a,b,c,d,e,f,r,x",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=new T.A(new Float32Array(16))
z.L()
y=J.y(a)
x=Y.hu(y.h(a,0))
w=Y.hv(y.h(a,0))
v=Y.ht(y.h(a,0),w)
y=this.b
u=y.d
if(0>=x.length)return H.a(x,0)
t=x[0]
s=G.dy("../asset/knight/knight.js",u.d,4,u.e.x)
s.bo(G.bs(t.d,null))
s.bn(t.dg())
G.jA(t,s)
u=this.c
t=new Float32Array(9)
r=new T.A(new Float32Array(16))
r.L()
q=new T.A(new Float32Array(16))
q.L()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
q.cu(-0.785)
l=A.dA("wrapper",new A.cb(u,s,[],new T.am(t),r,q,new T.m(p),new T.m(o),new T.m(n),new T.m(m),s.a,!1,!0))
t=new T.m(new Float32Array(3))
t.Y(100,0,0)
l.aW(t)
this.d.f.push(l)
y.f.push(l)
y=this.a
y.c=[]
t=v.c
if(typeof t!=="number")return H.n(t)
k=0
for(;k<t;k+=0.0333)y.c.push(k)
j=L.fZ(w,z,v,y.c)
t=this.e
r=w.length
q=r*4
p=y.c.length
o=$.$get$dQ()
n=J.f6(t.a)
i=new G.iQ(q,p,34836,"anim",n,3553,t,o)
J.bh(t.a,3553,n)
J.fy(t.a,3553,0,34836,q,p,0,6408,5126,j)
o.dh(t,3553)
J.fs(t.a)
J.bh(t.a,3553,null)
y.b=i
u.d.j(0,"uAnimationTable",i)
u=this.f
t=new T.A(new Float32Array(16))
t.L()
h=new R.fO(t,null,w,v,null,null)
r=L.cP(r)
h.e=r
L.ci(w,t,v,r,0)
r=G.hL("wire",u.d,R.cV(w,r,1))
h.b=r
t=new Float32Array(9)
q=new T.A(new Float32Array(16))
q.L()
p=new T.A(new Float32Array(16))
p.L()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
t=new A.cb(this.r,r,[],new T.am(t),q,p,new T.m(o),new T.m(n),new T.m(m),new T.m(new Float32Array(3)),r.a,!1,!0)
h.f=t
y.a=h
p.cu(0.785)
l=A.dA("wrapper",t)
y=new T.m(new Float32Array(3))
y.Y(100,0,0)
l.aW(y)
u.f.push(l)
this.x.$1(0)}}},1]]
setupProgram(dart,0,0)
J.p=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.hD.prototype
if(typeof a=="boolean")return J.hC.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.l1=function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.y=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.ay=function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.aa=function(a){if(typeof a=="number")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bb.prototype
return a}
J.l2=function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bb.prototype
return a}
J.eI=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bb.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bd(a)}
J.aD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l1(a).l(a,b)}
J.eT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.aa(a).a_(a,b)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).G(a,b)}
J.W=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aa(a).ai(a,b)}
J.aj=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aa(a).a0(a,b)}
J.eU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aa(a).F(a,b)}
J.ac=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.y(a).h(a,b)}
J.eV=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eM(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ay(a).j(a,b,c)}
J.eW=function(a,b,c,d){return J.e(a).dS(a,b,c,d)}
J.cx=function(a,b){return J.e(a).bU(a,b)}
J.eX=function(a,b,c,d){return J.e(a).bV(a,b,c,d)}
J.cy=function(a,b,c){return J.e(a).bX(a,b,c)}
J.eY=function(a,b){return J.e(a).e7(a,b)}
J.bP=function(a,b,c){return J.e(a).bY(a,b,c)}
J.eZ=function(a,b,c){return J.e(a).c_(a,b,c)}
J.bh=function(a,b,c){return J.e(a).c0(a,b,c)}
J.bi=function(a,b){return J.e(a).ea(a,b)}
J.f_=function(a,b){return J.e(a).c1(a,b)}
J.f0=function(a,b,c){return J.e(a).c2(a,b,c)}
J.cz=function(a,b,c,d){return J.e(a).c3(a,b,c,d)}
J.f1=function(a,b){return J.ay(a).c5(a,b)}
J.f2=function(a,b,c,d,e){return J.e(a).c6(a,b,c,d,e)}
J.cA=function(a,b){return J.eI(a).ee(a,b)}
J.f3=function(a,b){return J.l2(a).V(a,b)}
J.f4=function(a,b){return J.y(a).v(a,b)}
J.bQ=function(a,b,c){return J.y(a).eh(a,b,c)}
J.bR=function(a){return J.e(a).c8(a)}
J.f5=function(a){return J.e(a).c9(a)}
J.f6=function(a){return J.e(a).cb(a)}
J.f7=function(a){return J.e(a).ej(a)}
J.f8=function(a,b){return J.e(a).cd(a,b)}
J.bS=function(a,b){return J.e(a).ce(a,b)}
J.f9=function(a,b,c,d){return J.e(a).cf(a,b,c,d)}
J.fa=function(a,b,c,d,e){return J.e(a).eo(a,b,c,d,e)}
J.fb=function(a,b,c,d,e){return J.e(a).cg(a,b,c,d,e)}
J.fc=function(a,b,c,d,e,f){return J.e(a).ep(a,b,c,d,e,f)}
J.cB=function(a,b){return J.ay(a).q(a,b)}
J.bj=function(a,b){return J.e(a).ci(a,b)}
J.fd=function(a,b){return J.e(a).cj(a,b)}
J.fe=function(a){return J.e(a).eq(a)}
J.ff=function(a){return J.aa(a).as(a)}
J.cC=function(a,b){return J.ay(a).w(a,b)}
J.cD=function(a){return J.e(a).ge6(a)}
J.fg=function(a){return J.e(a).gaT(a)}
J.aE=function(a){return J.e(a).gT(a)}
J.ad=function(a){return J.p(a).gB(a)}
J.fh=function(a){return J.e(a).geA(a)}
J.aF=function(a){return J.ay(a).gI(a)}
J.L=function(a){return J.y(a).gi(a)}
J.fi=function(a){return J.e(a).gcr(a)}
J.fj=function(a){return J.e(a).gaY(a)}
J.fk=function(a){return J.e(a).gb2(a)}
J.cE=function(a){return J.e(a).ga2(a)}
J.fl=function(a){return J.e(a).geQ(a)}
J.fm=function(a){return J.e(a).gO(a)}
J.fn=function(a){return J.e(a).gcC(a)}
J.fo=function(a){return J.e(a).gac(a)}
J.cF=function(a){return J.e(a).geZ(a)}
J.bT=function(a){return J.e(a).gm(a)}
J.bU=function(a){return J.e(a).gn(a)}
J.cG=function(a){return J.e(a).gE(a)}
J.fp=function(a){return J.e(a).b8(a)}
J.fq=function(a,b,c){return J.e(a).cS(a,b,c)}
J.fr=function(a){return J.e(a).ax(a)}
J.fs=function(a){return J.e(a).b9(a)}
J.ft=function(a,b){return J.e(a).ba(a,b)}
J.fu=function(a,b,c){return J.e(a).bb(a,b,c)}
J.cH=function(a,b,c){return J.e(a).be(a,b,c)}
J.fv=function(a,b){return J.e(a).cp(a,b)}
J.cI=function(a){return J.ay(a).eK(a)}
J.fw=function(a,b){return J.e(a).sat(a,b)}
J.fx=function(a,b,c,d){return J.e(a).bk(a,b,c,d)}
J.fy=function(a,b,c,d,e,f,g,h,i,j){return J.e(a).cw(a,b,c,d,e,f,g,h,i,j)}
J.fz=function(a,b,c,d){return J.e(a).cz(a,b,c,d)}
J.bk=function(a,b,c,d){return J.e(a).cA(a,b,c,d)}
J.H=function(a){return J.aa(a).eR(a)}
J.cJ=function(a){return J.aa(a).eS(a)}
J.fA=function(a){return J.eI(a).eU(a)}
J.aG=function(a){return J.p(a).k(a)}
J.fB=function(a,b,c,d){return J.e(a).eW(a,b,c,d)}
J.fC=function(a,b,c){return J.e(a).cD(a,b,c)}
J.fD=function(a,b,c){return J.e(a).cE(a,b,c)}
J.bV=function(a,b,c){return J.e(a).cF(a,b,c)}
J.fE=function(a,b,c){return J.e(a).cG(a,b,c)}
J.cK=function(a,b,c){return J.e(a).cH(a,b,c)}
J.cL=function(a,b,c){return J.e(a).cI(a,b,c)}
J.cM=function(a,b,c){return J.e(a).cJ(a,b,c)}
J.cN=function(a,b,c,d){return J.e(a).cK(a,b,c,d)}
J.cO=function(a,b,c,d){return J.e(a).cL(a,b,c,d)}
J.fF=function(a,b){return J.e(a).cN(a,b)}
J.fG=function(a,b,c){return J.e(a).eX(a,b,c)}
J.fH=function(a,b,c,d,e,f,g){return J.e(a).cO(a,b,c,d,e,f,g)}
J.fI=function(a,b,c,d,e){return J.e(a).cQ(a,b,c,d,e)}
I.aA=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bW.prototype
C.n=W.h_.prototype
C.D=W.h5.prototype
C.E=W.hr.prototype
C.F=J.f.prototype
C.b=J.aJ.prototype
C.t=J.dk.prototype
C.c=J.dl.prototype
C.a=J.aL.prototype
C.i=J.aM.prototype
C.M=J.aN.prototype
C.R=H.i1.prototype
C.S=W.i3.prototype
C.x=J.i9.prototype
C.C=W.iM.prototype
C.q=J.bb.prototype
C.a8=W.iV.prototype
C.d=new P.jX()
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
C.N=new P.hF(null,null)
C.O=new P.hG(null)
C.P=H.r(I.aA(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.Q=I.aA(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.aA([])
C.o=H.r(I.aA(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.r(I.aA(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.T=new G.x("vec3","vertex btangents",0)
C.e=new G.x("vec3","",0)
C.U=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.y=new G.x("vec3","vertex coordinates",0)
C.V=new G.x("vec3","vertex binormals",0)
C.z=new G.x("vec4","for wireframe",0)
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
C.A=new G.x("vec3","per vertex color",0)
C.B=new G.x("mat3","",0)
C.a7=new G.x("vec3","vertex tangents",0)
$.a2=0
$.aH=null
$.cW=null
$.eK=null
$.ex=null
$.eP=null
$.bL=null
$.bM=null
$.cu=null
$.at=null
$.aW=null
$.aX=null
$.co=!1
$.u=C.d
$.af=null
$.c0=null
$.dd=null
$.dc=null
$.d8=null
$.d7=null
$.d6=null
$.d5=null
$.eH=0
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
I.$lazy(y,x,w)}})(["d4","$get$d4",function(){return H.eJ("_$dart_dartClosure")},"c4","$get$c4",function(){return H.eJ("_$dart_js")},"dU","$get$dU",function(){return H.a4(H.bF({
toString:function(){return"$receiver$"}}))},"dV","$get$dV",function(){return H.a4(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))},"dW","$get$dW",function(){return H.a4(H.bF(null))},"dX","$get$dX",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e0","$get$e0",function(){return H.a4(H.bF(void 0))},"e1","$get$e1",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dZ","$get$dZ",function(){return H.a4(H.e_(null))},"dY","$get$dY",function(){return H.a4(function(){try{null.$method$}catch(z){return z.message}}())},"e3","$get$e3",function(){return H.a4(H.e_(void 0))},"e2","$get$e2",function(){return H.a4(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cj","$get$cj",function(){return P.j0()},"dh","$get$dh",function(){return P.jn(null,P.b4)},"aY","$get$aY",function(){return[]},"d3","$get$d3",function(){return{}},"ee","$get$ee",function(){return P.c8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cl","$get$cl",function(){return P.X()},"dJ","$get$dJ",function(){return new G.dS(1281,0,4294967295)},"cS","$get$cS",function(){return new G.dR(1281,1281,1281)},"a_","$get$a_",function(){return P.c7(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.W,"aPosition",C.y,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.U,"vCenter",C.z,"vDepth",C.a0,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.f,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"dQ","$get$dQ",function(){var z=new G.iO(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"eR","$get$eR",function(){var z=G.aS("SolidColor")
z.aA(["aPosition"])
z.al(["uPerspectiveViewMatrix","uModelMatrix"])
z.aB(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eQ","$get$eQ",function(){var z=G.aS("SolidColorF")
z.al(["uColor"])
z.aB(["oFragColor = vec4( uColor, 1.0 );"])
return z},"eE","$get$eE",function(){var z=G.aS("FixedVertexColorV")
z.aA(["aPosition"])
z.al(["uPerspectiveViewMatrix","uModelMatrix"])
z.am(["vColor"])
z.bv(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"eD","$get$eD",function(){var z=G.aS("FixedVertexColorF")
z.am(["vColor"])
z.aB(["oFragColor = vec4( vColor, 1.0 );"])
return z},"ez","$get$ez",function(){var z=G.aS("AnimationV")
z.aA(["aPosition","aBoneIndex","aBoneWeight"])
z.am(["vColor"])
z.al(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
z.bu(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n\n   vColor = vec3( sin(aPosition.x)/2.0+0.5,\n                      cos(aPosition.y)/2.0+0.5,\n                      sin(aPosition.z)/2.0+0.5);\n   //vTexUV = aTexUV;\n}\n\n"])
return z},"ey","$get$ey",function(){var z=G.aS("AnimationV")
z.am(["vColor"])
z.bu(["void main() {\n  oFragColor.rgb = vColor;\n}\n"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.v},{func:1,args:[W.S]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.k,args:[P.F]},{func:1,args:[W.bu]},{func:1,ret:P.cq,args:[W.ap,P.k,P.k,W.ck]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aT]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aT]},{func:1,v:true,args:[W.v,W.v]},{func:1,v:true,args:[W.N]},{func:1,args:[W.aU]},{func:1,args:[P.F,P.d]},{func:1,args:[W.N]},{func:1,v:true,args:[P.aZ]},{func:1,args:[P.i]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.ln(d||a)
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
Isolate.aA=a.aA
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
if(typeof dartMainRunner==="function")dartMainRunner(B.eN,[])
else B.eN([])})})()
//# sourceMappingURL=animation2.dart.js.map
