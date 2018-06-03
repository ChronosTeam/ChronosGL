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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isi)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.au=function(){}
var dart=[["","",,H,{"^":"",mE:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
cw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bb:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cu==null){H.lf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ci("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c6()]
if(v!=null)return v
v=H.li(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c6(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
i:{"^":"c;",
C:function(a,b){return a===b},
gw:function(a){return H.aP(a)},
k:["cS",function(a){return"Instance of '"+H.aQ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hG:{"^":"i;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$iscq:1},
hH:{"^":"i;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isb2:1},
c7:{"^":"i;",
gw:function(a){return 0},
k:["cU",function(a){return String(a)}]},
ie:{"^":"c7;"},
b7:{"^":"c7;"},
aN:{"^":"c7;",
k:function(a){var z=a[$.$get$db()]
return z==null?this.cU(a):J.aF(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aJ:{"^":"i;$ti",
P:function(a,b){var z,y
if(!!a.fixed$length)H.J(P.q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.O(a))}},
ae:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b6:function(a,b){return H.dR(a,b,null,H.D(a,0))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cL:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.J(P.q("setRange"))
P.iq(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.b6(d,e).ey(0,!1)
x=0}y=J.a5(w)
if(x+z>y.gj(w))throw H.a(H.hD())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ah:function(a,b,c,d){return this.cL(a,b,c,d,0)},
bH:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.O(a))}return!1},
cM:function(a,b){if(!!a.immutable$list)H.J(P.q("sort"))
H.iC(a,J.kI())},
au:function(a){return this.cM(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.E(a[z],b))return!0
return!1},
k:function(a){return P.c5(a,"[","]")},
gN:function(a){return new J.fV(a,a.length,0,null,[H.D(a,0)])},
gw:function(a){return H.aP(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.J(P.q("set length"))
if(b<0)throw H.a(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a4(a,b))
if(b>=a.length||b<0)throw H.a(H.a4(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.J(P.q("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a4(a,b))
if(b>=a.length||b<0)throw H.a(H.a4(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gj(b))
y=H.B([],[H.D(a,0)])
this.sj(y,z)
this.ah(y,0,a.length,a)
this.ah(y,a.length,z,b)
return y},
$isn:1,
$asn:I.au,
$ish:1,
p:{
aK:function(a){a.fixed$length=Array
return a},
mC:[function(a,b){return J.fh(a,b)},"$2","kI",8,0,21]}},
mD:{"^":"aJ;$ti"},
fV:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.G(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aL:{"^":"i;",
W:function(a,b){var z
if(typeof b!=="number")throw H.a(H.L(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gap(b)
if(this.gap(a)===z)return 0
if(this.gap(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gap:function(a){return a===0?1/a<0:a<0},
ex:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.q(""+a+".toInt()"))},
dX:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.q(""+a+".ceil()"))},
dY:function(a,b,c){if(this.W(b,c)>0)throw H.a(H.L(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
eA:function(a,b){var z
if(b>20)throw H.a(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gap(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a+b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a-b},
a0:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a/b},
cW:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bA(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.q("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
by:function(a,b){var z
if(a>0)z=this.dI(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dI:function(a,b){return b>31?0:a>>>b},
Y:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a<b},
af:function(a,b){if(typeof b!=="number")throw H.a(H.L(b))
return a>b},
$isaV:1,
$isaW:1},
du:{"^":"aL;",$isI:1},
dt:{"^":"aL;"},
aM:{"^":"i;",
aN:function(a,b){if(b<0)throw H.a(H.a4(a,b))
if(b>=a.length)H.J(H.a4(a,b))
return a.charCodeAt(b)},
aj:function(a,b){if(b>=a.length)throw H.a(H.a4(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.fU(b,null,null))
return a+b},
eq:function(a,b,c){return H.lp(a,b,c)},
cN:function(a,b){var z=H.B(a.split(b),[P.m])
return z},
cP:function(a,b,c){var z
if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cO:function(a,b){return this.cP(a,b,0)},
av:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.J(H.L(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.J(H.L(c))
if(b<0)throw H.a(P.by(b,null,null))
if(typeof c!=="number")return H.P(c)
if(b>c)throw H.a(P.by(b,null,null))
if(c>a.length)throw H.a(P.by(c,null,null))
return a.substring(b,c)},
cQ:function(a,b){return this.av(a,b,null)},
ez:function(a){return a.toLowerCase()},
eC:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aj(z,0)===133){x=J.hI(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aN(z,w)===133?J.hJ(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
e0:function(a,b,c){if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
return H.lo(a,b,c)},
W:function(a,b){var z
if(typeof b!=="string")throw H.a(H.L(b))
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a4(a,b))
return a[b]},
$isn:1,
$asn:I.au,
$ism:1,
p:{
dv:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hI:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.aj(a,b)
if(y!==32&&y!==13&&!J.dv(y))break;++b}return b},
hJ:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.aN(a,z)
if(y!==32&&y!==13&&!J.dv(y))break}return b}}}}],["","",,H,{"^":"",
hC:function(){return new P.bB("No element")},
hE:function(){return new P.bB("Too many elements")},
hD:function(){return new P.bB("Too few elements")},
iC:function(a,b){H.b4(a,0,J.a8(a)-1,b)},
b4:function(a,b,c,d){if(c-b<=32)H.iB(a,b,c,d)
else H.iA(a,b,c,d)},
iB:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a5(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.S(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a5(c-b+1,6)
y=b+z
x=c-z
w=C.b.a5(b+c,2)
v=w-z
u=w+z
t=J.a5(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.S(d.$2(s,r),0)){n=r
r=s
s=n}if(J.S(d.$2(p,o),0)){n=o
o=p
p=n}if(J.S(d.$2(s,q),0)){n=q
q=s
s=n}if(J.S(d.$2(r,q),0)){n=q
q=r
r=n}if(J.S(d.$2(s,p),0)){n=p
p=s
s=n}if(J.S(d.$2(q,p),0)){n=p
p=q
q=n}if(J.S(d.$2(r,o),0)){n=o
o=r
r=n}if(J.S(d.$2(r,q),0)){n=q
q=r
r=n}if(J.S(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.E(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.C(i,0))continue
if(h.Y(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aw(i)
if(h.af(i,0)){--l
continue}else{g=l-1
if(h.Y(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aC(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.S(d.$2(j,p),0))for(;!0;)if(J.S(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aC(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.b4(a,b,m-2,d)
H.b4(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.E(d.$2(t.h(a,m),r),0);)++m
for(;J.E(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.E(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.E(d.$2(j,p),0))for(;!0;)if(J.E(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aC(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.b4(a,m,l,d)}else H.b4(a,m,l,d)},
c0:{"^":"bs;$ti"},
bu:{"^":"c0;$ti",
gN:function(a){return new H.dB(this,this.gj(this),0,null,[H.ct(this,"bu",0)])},
v:function(a,b){var z,y
z=this.gj(this)
for(y=0;y<z;++y){b.$1(this.t(0,y))
if(z!==this.gj(this))throw H.a(P.O(this))}},
aW:function(a,b){return this.cT(0,b)}},
iP:{"^":"bu;a,b,c,$ti",
d9:function(a,b,c,d){},
gdt:function(){var z=J.a8(this.a)
return z},
gdJ:function(){var z,y
z=J.a8(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a8(this.a)
y=this.b
if(y>=z)return 0
return z-y},
t:function(a,b){var z,y
z=this.gdJ()+b
if(b>=0){y=this.gdt()
if(typeof y!=="number")return H.P(y)
y=z>=y}else y=!0
if(y)throw H.a(P.z(b,this,"index",null,null))
return J.cC(this.a,z)},
ey:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a5(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.B(u,this.$ti)
for(s=0;s<v;++s){u=x.t(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gj(y)<w)throw H.a(P.O(this))}return t},
p:{
dR:function(a,b,c,d){var z=new H.iP(a,b,c,[d])
z.d9(a,b,c,d)
return z}}},
dB:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.a5(z)
x=y.gj(z)
if(this.b!==x)throw H.a(P.O(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.t(z,w);++this.c
return!0}},
hV:{"^":"bu;a,b,$ti",
gj:function(a){return J.a8(this.a)},
t:function(a,b){return this.b.$1(J.cC(this.a,b))},
$asc0:function(a,b){return[b]},
$asbu:function(a,b){return[b]},
$asbs:function(a,b){return[b]}},
eb:{"^":"bs;a,b,$ti",
gN:function(a){return new H.iY(J.aY(this.a),this.b,this.$ti)}},
iY:{"^":"hF;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gB(z))===!0)return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
bq:{"^":"c;$ti"}}],["","",,H,{"^":"",
l7:function(a){return init.types[a]},
eV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aF(a)
if(typeof z!=="string")throw H.a(H.L(a))
return z},
aP:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ip:function(a,b){var z,y
if(typeof a!=="string")H.J(H.L(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
io:function(a){var z,y
if(typeof a!=="string")H.J(H.L(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fM(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.o(a).$isb7){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aj(w,0)===36)w=C.i.cQ(w,1)
r=H.bN(H.ax(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
M:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
im:function(a){return a.b?H.M(a).getUTCFullYear()+0:H.M(a).getFullYear()+0},
ik:function(a){return a.b?H.M(a).getUTCMonth()+1:H.M(a).getMonth()+1},
ig:function(a){return a.b?H.M(a).getUTCDate()+0:H.M(a).getDate()+0},
ih:function(a){return a.b?H.M(a).getUTCHours()+0:H.M(a).getHours()+0},
ij:function(a){return a.b?H.M(a).getUTCMinutes()+0:H.M(a).getMinutes()+0},
il:function(a){return a.b?H.M(a).getUTCSeconds()+0:H.M(a).getSeconds()+0},
ii:function(a){return a.b?H.M(a).getUTCMilliseconds()+0:H.M(a).getMilliseconds()+0},
P:function(a){throw H.a(H.L(a))},
d:function(a,b){if(a==null)J.a8(a)
throw H.a(H.a4(a,b))},
a4:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,"index",null)
z=J.a8(a)
if(!(b<0)){if(typeof z!=="number")return H.P(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.by(b,"index",null)},
L:function(a){return new P.af(!0,a,null,null)},
kW:function(a){if(typeof a!=="number")throw H.a(H.L(a))
return a},
a:function(a){var z
if(a==null)a=new P.bx()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f3})
z.name=""}else z.toString=H.f3
return z},
f3:function(){return J.aF(this.dartException)},
J:function(a){throw H.a(a)},
G:function(a){throw H.a(P.O(a))},
R:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lu(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.by(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c8(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dG(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dY()
u=$.$get$dZ()
t=$.$get$e_()
s=$.$get$e0()
r=$.$get$e4()
q=$.$get$e5()
p=$.$get$e2()
$.$get$e1()
o=$.$get$e7()
n=$.$get$e6()
m=v.T(y)
if(m!=null)return z.$1(H.c8(y,m))
else{m=u.T(y)
if(m!=null){m.method="call"
return z.$1(H.c8(y,m))}else{m=t.T(y)
if(m==null){m=s.T(y)
if(m==null){m=r.T(y)
if(m==null){m=q.T(y)
if(m==null){m=p.T(y)
if(m==null){m=s.T(y)
if(m==null){m=o.T(y)
if(m==null){m=n.T(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dG(y,m))}}return z.$1(new H.iW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dN()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.af(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dN()
return a},
ae:function(a){var z
if(a==null)return new H.et(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.et(a,null)},
l3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
lh:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.dl("Unsupported number of arguments for wrapped closure"))},
Y:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lh)
a.$identity=z
return z},
h3:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.is(z).r}else x=c
w=d?Object.create(new H.iE().constructor.prototype):Object.create(new H.bY(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Z
$.Z=J.aB(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cX(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.l7,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cV:H.bZ
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cX(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
h0:function(a,b,c,d){var z=H.bZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h2(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h0(y,!w,z,b)
if(y===0){w=$.Z
$.Z=J.aB(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aG
if(v==null){v=H.bl("self")
$.aG=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Z
$.Z=J.aB(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aG
if(v==null){v=H.bl("self")
$.aG=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
h1:function(a,b,c,d){var z,y
z=H.bZ
y=H.cV
switch(b?-1:a){case 0:throw H.a(H.ix("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h2:function(a,b){var z,y,x,w,v,u,t,s
z=$.aG
if(z==null){z=H.bl("self")
$.aG=z}y=$.cU
if(y==null){y=H.bl("receiver")
$.cU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h1(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Z
$.Z=J.aB(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Z
$.Z=J.aB(y,1)
return new Function(z+H.b(y)+"}")()},
cr:function(a,b,c,d,e,f){var z,y
z=J.aK(b)
y=!!J.o(c).$ish?J.aK(c):c
return H.h3(a,z,y,!!d,e,f)},
lm:function(a,b){var z=J.a5(b)
throw H.a(H.cW(a,z.av(b,3,z.gj(b))))},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.lm(a,b)},
cs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eP:function(a,b){var z,y
if(a==null)return!1
z=H.cs(J.o(a))
if(z==null)y=!1
else y=H.eU(z,b)
return y},
kR:function(a){var z
if(a instanceof H.f){z=H.cs(J.o(a))
if(z!=null)return H.cx(z,null)
return"Closure"}return H.aQ(a)},
lt:function(a){throw H.a(new P.h7(a))},
eR:function(a){return init.getIsolateTag(a)},
B:function(a,b){a.$ti=b
return a},
ax:function(a){if(a==null)return
return a.$ti},
nZ:function(a,b,c){return H.aX(a["$as"+H.b(c)],H.ax(b))},
bc:function(a,b,c,d){var z=H.aX(a["$as"+H.b(c)],H.ax(b))
return z==null?null:z[d]},
ct:function(a,b,c){var z=H.aX(a["$as"+H.b(b)],H.ax(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.ax(a)
return z==null?null:z[b]},
cx:function(a,b){var z=H.aA(a,b)
return z},
aA:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bN(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aA(z,b)
return H.kH(a,b)}return"unknown-reified-type"},
kH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aA(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aA(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.l2(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aA(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bN:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cg("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aA(u,c)}return w?"":"<"+z.k(0)+">"},
l6:function(a){var z,y,x
if(a instanceof H.f){z=H.cs(J.o(a))
if(z!=null)return H.cx(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bN(a.$ti,0,null)
return y+x},
aX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b9:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ax(a)
y=J.o(a)
if(y[b]==null)return!1
return H.eF(H.aX(y[d],z),c)},
be:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b9(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bN(c,0,null)
throw H.a(H.cW(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eF:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.Q(a[y],b[y]))return!1
return!0},
nX:function(a,b,c){return a.apply(b,H.aX(J.o(b)["$as"+H.b(c)],H.ax(b)))},
Q:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b2")return!0
if('func' in b)return H.eU(a,b)
if('func' in a)return b.builtin$cls==="mu"||b.builtin$cls==="c"
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
return H.eF(H.aX(u,z),x)},
eE:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.Q(z,v)||H.Q(v,z)))return!1}return!0},
kS:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aK(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.Q(v,u)||H.Q(u,v)))return!1}return!0},
eU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.Q(z,y)||H.Q(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eE(x,w,!1))return!1
if(!H.eE(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}}return H.kS(a.named,b.named)},
nY:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
li:function(a){var z,y,x,w,v,u
z=$.eS.$1(a)
y=$.bK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bM[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eD.$2(a,z)
if(z!=null){y=$.bK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bM[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bO(x)
$.bK[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bM[z]=x
return x}if(v==="-"){u=H.bO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f_(a,x)
if(v==="*")throw H.a(P.ci(z))
if(init.leafTags[z]===true){u=H.bO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f_(a,x)},
f_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cw(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bO:function(a){return J.cw(a,!1,null,!!a.$isp)},
ll:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bO(z)
else return J.cw(z,c,null,null)},
lf:function(){if(!0===$.cu)return
$.cu=!0
H.lg()},
lg:function(){var z,y,x,w,v,u,t,s
$.bK=Object.create(null)
$.bM=Object.create(null)
H.lb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f0.$1(v)
if(u!=null){t=H.ll(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lb:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.at(C.G,H.at(C.L,H.at(C.u,H.at(C.u,H.at(C.K,H.at(C.H,H.at(C.I(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eS=new H.lc(v)
$.eD=new H.ld(u)
$.f0=new H.le(t)},
at:function(a,b){return a(b)||b},
lo:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
lq:function(a,b,c,d){var z,y,x
z=b.dv(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.ls(a,x,x+y[0].length,c)},
lp:function(a,b,c){var z,y
z=b.gbv()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
lr:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.lq(a,b,c,d)},
ls:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ir:{"^":"c;a,b,c,d,e,f,r,x",p:{
is:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aK(z)
y=z[0]
x=z[1]
return new H.ir(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iT:{"^":"c;a,b,c,d,e,f",
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
a1:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e3:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ib:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dG:function(a,b){return new H.ib(a,b==null?null:b.method)}}},
hL:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
c8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hL(a,y,z?null:b.receiver)}}},
iW:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lu:{"^":"f:0;a",
$1:function(a){if(!!J.o(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
et:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaR:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aQ(this).trim()+"'"},
gcG:function(){return this},
gcG:function(){return this}},
dS:{"^":"f;"},
iE:{"^":"dS;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bY:{"^":"dS;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bY))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aP(this.a)
else y=typeof z!=="object"?J.a7(z):H.aP(z)
return(y^H.aP(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aQ(z)+"'")},
p:{
bZ:function(a){return a.a},
cV:function(a){return a.c},
bl:function(a){var z,y,x,w,v
z=new H.bY("self","target","receiver","name")
y=J.aK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fZ:{"^":"K;a",
k:function(a){return this.a},
p:{
cW:function(a,b){return new H.fZ("CastError: "+H.b(P.c2(a))+": type '"+H.kR(a)+"' is not a subtype of type '"+b+"'")}}},
iw:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
ix:function(a){return new H.iw(a)}}},
e8:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.a7(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.e8&&J.E(this.a,b.a)}},
dx:{"^":"cb;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gO:function(a){return new H.hR(this,[H.D(this,0)])},
an:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.br(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.br(y,b)}else return this.eg(b)},
eg:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.aF(z,J.a7(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.al(z,b)
x=y==null?null:y.gad()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.al(w,b)
x=y==null?null:y.gad()
return x}else return this.eh(b)},
eh:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aF(z,J.a7(a)&0x3ffffff)
x=this.aP(y,a)
if(x<0)return
return y[x].gad()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aI()
this.b=z}this.bj(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aI()
this.c=y}this.bj(y,b,c)}else{x=this.d
if(x==null){x=this.aI()
this.d=x}w=J.a7(b)&0x3ffffff
v=this.aF(x,w)
if(v==null)this.aM(x,w,[this.az(b,c)])
else{u=this.aP(v,b)
if(u>=0)v[u].sad(c)
else v.push(this.az(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.O(this))
z=z.c}},
bj:function(a,b,c){var z=this.al(a,b)
if(z==null)this.aM(a,b,this.az(b,c))
else z.sad(c)},
bk:function(){this.r=this.r+1&67108863},
az:function(a,b){var z,y
z=new H.hQ(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bk()
return z},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].gee(),b))return y
return-1},
k:function(a){return P.dC(this)},
al:function(a,b){return a[b]},
aF:function(a,b){return a[b]},
aM:function(a,b,c){a[b]=c},
dr:function(a,b){delete a[b]},
br:function(a,b){return this.al(a,b)!=null},
aI:function(){var z=Object.create(null)
this.aM(z,"<non-identifier-key>",z)
this.dr(z,"<non-identifier-key>")
return z}},
hQ:{"^":"c;ee:a<,ad:b@,c,d"},
hR:{"^":"c0;a,$ti",
gj:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.aa(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.O(z))
y=y.c}}},
aa:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.O(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lc:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
ld:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
le:{"^":"f:11;a",
$1:function(a){return this.a(a)}},
hK:{"^":"c;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbv:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dw(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
dv:function(a,b){var z,y
z=this.gbv()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jM(this,y)},
p:{
dw:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.c4("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jM:{"^":"c;a,b",
h:function(a,b){var z=this.b
if(b>=z.length)return H.d(z,b)
return z[b]}}}],["","",,H,{"^":"",
l2:function(a){return J.aK(H.B(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
az:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bI:function(a){var z,y,x
if(!!J.o(a).$isn)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a3:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a4(b,a))},
i7:{"^":"i;","%":"DataView;ArrayBufferView;cc|en|eo|dD|ep|eq|ah"},
cc:{"^":"i7;",
gj:function(a){return a.length},
$isn:1,
$asn:I.au,
$isp:1,
$asp:I.au},
dD:{"^":"eo;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a3(b,a,a.length)
a[b]=c},
$asbq:function(){return[P.aV]},
$asj:function(){return[P.aV]},
$ish:1,
$ash:function(){return[P.aV]},
"%":"Float64Array"},
ah:{"^":"eq;",
i:function(a,b,c){H.a3(b,a,a.length)
a[b]=c},
$asbq:function(){return[P.I]},
$asj:function(){return[P.I]},
$ish:1,
$ash:function(){return[P.I]}},
i6:{"^":"dD;",$isc3:1,"%":"Float32Array"},
mS:{"^":"ah;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mT:{"^":"ah;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
$ishA:1,
"%":"Int32Array"},
mU:{"^":"ah;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mV:{"^":"ah;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mW:{"^":"ah;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mX:{"^":"ah;",
gj:function(a){return a.length},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mY:{"^":"ah;",
gj:function(a){return a.length},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
en:{"^":"cc+j;"},
eo:{"^":"en+bq;"},
ep:{"^":"cc+j;"},
eq:{"^":"ep+bq;"}}],["","",,P,{"^":"",
j4:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kT()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.Y(new P.j6(z),1)).observe(y,{childList:true})
return new P.j5(z,y,x)}else if(self.setImmediate!=null)return P.kU()
return P.kV()},
nK:[function(a){self.scheduleImmediate(H.Y(new P.j7(a),0))},"$1","kT",4,0,6],
nL:[function(a){self.setImmediate(H.Y(new P.j8(a),0))},"$1","kU",4,0,6],
nM:[function(a){P.kk(0,a)},"$1","kV",4,0,6],
kL:function(a,b){if(H.eP(a,{func:1,args:[P.b2,P.b2]})){b.toString
return a}else{b.toString
return a}},
hr:function(a,b,c){var z
if(a==null)a=new P.bx()
z=$.r
if(z!==C.d)z.toString
z=new P.N(0,z,null,[c])
z.bn(a,b)
return z},
hs:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.N(0,$.r,null,[P.h])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hu(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aU(new P.ht(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.N(0,$.r,null,[null])
r.bm(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.R(p)
t=H.ae(p)
if(z.b===0||!1)return P.hr(u,t,null)
else{z.c=u
z.d=t}}return y},
kK:function(){var z,y
for(;z=$.ar,z!=null;){$.aT=null
y=z.b
$.ar=y
if(y==null)$.aS=null
z.a.$0()}},
nW:[function(){$.co=!0
try{P.kK()}finally{$.aT=null
$.co=!1
if($.ar!=null)$.$get$cj().$1(P.eG())}},"$0","eG",0,0,3],
eB:function(a){var z=new P.ec(a,null)
if($.ar==null){$.aS=z
$.ar=z
if(!$.co)$.$get$cj().$1(P.eG())}else{$.aS.b=z
$.aS=z}},
kP:function(a){var z,y,x
z=$.ar
if(z==null){P.eB(a)
$.aT=$.aS
return}y=new P.ec(a,null)
x=$.aT
if(x==null){y.b=z
$.aT=y
$.ar=y}else{y.b=x.b
x.b=y
$.aT=y
if(y.b==null)$.aS=y}},
ln:function(a){var z=$.r
if(C.d===z){P.as(null,null,C.d,a)
return}z.toString
P.as(null,null,z,z.bK(a))},
kO:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.R(u)
y=H.ae(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aE(x)
w=t
v=x.ga3()
c.$2(w,v)}}},
kC:function(a,b,c,d){var z=a.dW(0)
if(!!J.o(z).$isag&&z!==$.$get$dq())z.eE(new P.kF(b,c,d))
else b.M(c,d)},
kD:function(a,b){return new P.kE(a,b)},
bJ:function(a,b,c,d,e){var z={}
z.a=d
P.kP(new P.kM(z,e))},
ez:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
eA:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
kN:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
as:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bK(d):c.dT(d)
P.eB(d)},
j6:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j5:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j7:{"^":"f:1;a",
$0:function(){this.a.$0()}},
j8:{"^":"f:1;a",
$0:function(){this.a.$0()}},
kj:{"^":"c;a,b,c",
dk:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.Y(new P.kl(this,b),0),a)
else throw H.a(P.q("`setTimeout()` not found."))},
p:{
kk:function(a,b){var z=new P.kj(!0,null,0)
z.dk(a,b)
return z}}},
kl:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ag:{"^":"c;$ti"},
hu:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.M(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.M(z.c,z.d)}},
ht:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.bq(x)}else if(z.b===0&&!this.e)this.c.M(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lH:{"^":"c;$ti"},
ef:{"^":"c;$ti",
e_:function(a,b){if(a==null)a=new P.bx()
if(this.a.a!==0)throw H.a(P.b6("Future already completed"))
$.r.toString
this.M(a,b)},
dZ:function(a){return this.e_(a,null)}},
ed:{"^":"ef;a,$ti",
am:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b6("Future already completed"))
z.bm(b)},
M:function(a,b){this.a.bn(a,b)}},
ke:{"^":"ef;a,$ti",
am:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b6("Future already completed"))
z.ak(b)},
M:function(a,b){this.a.M(a,b)}},
eg:{"^":"c;aK:a<,b,c,d,e,$ti",
gdO:function(){return this.b.b},
gca:function(){return(this.c&1)!==0},
ged:function(){return(this.c&2)!==0},
gc9:function(){return this.c===8},
eb:function(a){return this.b.b.aS(this.d,a)},
ei:function(a){if(this.c!==6)return!0
return this.b.b.aS(this.d,J.aE(a))},
ea:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eP(z,{func:1,args:[P.c,P.aR]}))return x.er(z,y.gR(a),a.ga3())
else return x.aS(z,y.gR(a))},
ec:function(){return this.b.b.cl(this.d)}},
N:{"^":"c;bz:a<,b,dE:c<,$ti",
gdz:function(){return this.a===2},
gaG:function(){return this.a>=4},
aU:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.kL(b,z)}y=new P.N(0,z,null,[null])
x=b==null?1:3
this.aA(new P.eg(null,y,x,a,b,[H.D(this,0),null]))
return y},
aT:function(a){return this.aU(a,null)},
eE:function(a){var z,y
z=$.r
y=new P.N(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.D(this,0)
this.aA(new P.eg(null,y,8,a,null,[z,z]))
return y},
aA:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaG()){y.aA(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.as(null,null,z,new P.jr(this,a))}},
bw:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaK()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaG()){v.bw(a)
return}this.a=v.a
this.c=v.c}z.a=this.aL(a)
y=this.b
y.toString
P.as(null,null,y,new P.jy(z,this))}},
a9:function(){var z=this.c
this.c=null
return this.aL(z)},
aL:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaK()
z.a=y}return y},
ak:function(a){var z,y,x
z=this.$ti
y=H.b9(a,"$isag",z,"$asag")
if(y){z=H.b9(a,"$isN",z,null)
if(z)P.bH(a,this)
else P.eh(a,this)}else{x=this.a9()
this.a=4
this.c=a
P.aq(this,x)}},
bq:function(a){var z=this.a9()
this.a=4
this.c=a
P.aq(this,z)},
M:[function(a,b){var z=this.a9()
this.a=8
this.c=new P.bk(a,b)
P.aq(this,z)},function(a){return this.M(a,null)},"eG","$2","$1","gbp",4,2,13],
bm:function(a){var z=H.b9(a,"$isag",this.$ti,"$asag")
if(z){this.dn(a)
return}this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.jt(this,a))},
dn:function(a){var z=H.b9(a,"$isN",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.jx(this,a))}else P.bH(a,this)
return}P.eh(a,this)},
bn:function(a,b){var z
this.a=1
z=this.b
z.toString
P.as(null,null,z,new P.js(this,a,b))},
$isag:1,
p:{
jq:function(a,b){var z=new P.N(0,$.r,null,[b])
z.a=4
z.c=a
return z},
eh:function(a,b){var z,y,x
b.a=1
try{a.aU(new P.ju(b),new P.jv(b))}catch(x){z=H.R(x)
y=H.ae(x)
P.ln(new P.jw(b,z,y))}},
bH:function(a,b){var z
for(;a.gdz();)a=a.c
if(a.gaG()){z=b.a9()
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
u=J.aE(v)
t=v.ga3()
y.toString
P.bJ(null,null,y,u,t)}return}for(;b.gaK()!=null;b=s){s=b.a
b.a=null
P.aq(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gca()||b.gc9()){q=b.gdO()
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
t=v.ga3()
y.toString
P.bJ(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gc9())new P.jB(z,x,b,w).$0()
else if(y){if(b.gca())new P.jA(x,b,r).$0()}else if(b.ged())new P.jz(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.o(y).$isag){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aL(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bH(y,o)
return}}o=b.b
b=o.a9()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
jr:{"^":"f:1;a,b",
$0:function(){P.aq(this.a,this.b)}},
jy:{"^":"f:1;a,b",
$0:function(){P.aq(this.b,this.a.a)}},
ju:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.ak(a)}},
jv:{"^":"f:14;a",
$2:function(a,b){this.a.M(a,b)},
$1:function(a){return this.$2(a,null)}},
jw:{"^":"f:1;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
jt:{"^":"f:1;a,b",
$0:function(){this.a.bq(this.b)}},
jx:{"^":"f:1;a,b",
$0:function(){P.bH(this.b,this.a)}},
js:{"^":"f:1;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
jB:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ec()}catch(w){y=H.R(w)
x=H.ae(w)
if(this.d){v=J.aE(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bk(y,x)
u.a=!0
return}if(!!J.o(z).$isag){if(z instanceof P.N&&z.gbz()>=4){if(z.gbz()===8){v=this.b
v.b=z.gdE()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aT(new P.jC(t))
v.a=!1}}},
jC:{"^":"f:0;a",
$1:function(a){return this.a}},
jA:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eb(this.c)}catch(x){z=H.R(x)
y=H.ae(x)
w=this.a
w.b=new P.bk(z,y)
w.a=!0}}},
jz:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ei(z)===!0&&w.e!=null){v=this.b
v.b=w.ea(z)
v.a=!1}}catch(u){y=H.R(u)
x=H.ae(u)
w=this.a
v=J.aE(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bk(y,x)
s.a=!0}}},
ec:{"^":"c;a,b"},
dP:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.N(0,$.r,null,[null])
z.a=null
z.a=this.cd(new P.iL(z,this,b,y),!0,new P.iM(y),y.gbp())
return y},
gj:function(a){var z,y
z={}
y=new P.N(0,$.r,null,[P.I])
z.a=0
this.cd(new P.iN(z),!0,new P.iO(z,y),y.gbp())
return y}},
iL:{"^":"f;a,b,c,d",
$1:function(a){P.kO(new P.iJ(this.c,a),new P.iK(),P.kD(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ct(this.b,"dP",0)]}}},
iJ:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iK:{"^":"f:0;",
$1:function(a){}},
iM:{"^":"f:1;a",
$0:function(){this.a.ak(null)}},
iN:{"^":"f:0;a",
$1:function(a){++this.a.a}},
iO:{"^":"f:1;a,b",
$0:function(){this.b.ak(this.a.a)}},
iI:{"^":"c;$ti"},
kF:{"^":"f:1;a,b,c",
$0:function(){return this.a.M(this.b,this.c)}},
kE:{"^":"f:15;a,b",
$2:function(a,b){P.kC(this.a,this.b,a,b)}},
bk:{"^":"c;R:a>,a3:b<",
k:function(a){return H.b(this.a)},
$isK:1},
kr:{"^":"c;"},
kM:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bx()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aF(y)
throw x}},
jY:{"^":"kr;",
es:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.ez(null,null,this,a)}catch(x){z=H.R(x)
y=H.ae(x)
P.bJ(null,null,this,z,y)}},
eu:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.eA(null,null,this,a,b)}catch(x){z=H.R(x)
y=H.ae(x)
P.bJ(null,null,this,z,y)}},
dT:function(a){return new P.k_(this,a)},
bK:function(a){return new P.jZ(this,a)},
dU:function(a){return new P.k0(this,a)},
h:function(a,b){return},
cl:function(a){if($.r===C.d)return a.$0()
return P.ez(null,null,this,a)},
aS:function(a,b){if($.r===C.d)return a.$1(b)
return P.eA(null,null,this,a,b)},
er:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.kN(null,null,this,a,b,c)}},
k_:{"^":"f:1;a,b",
$0:function(){return this.a.cl(this.b)}},
jZ:{"^":"f:1;a,b",
$0:function(){return this.a.es(this.b)}},
k0:{"^":"f:0;a,b",
$1:function(a){return this.a.eu(this.b,a)}}}],["","",,P,{"^":"",
l:function(){return new H.dx(0,null,null,null,null,null,0,[null,null])},
dz:function(a){return H.l3(a,new H.dx(0,null,null,null,null,null,0,[null,null]))},
V:function(a,b,c,d){return new P.jK(0,null,null,null,null,null,0,[d])},
hB:function(a,b,c){var z,y
if(P.cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aU()
y.push(a)
try{P.kJ(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dQ(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c5:function(a,b,c){var z,y,x
if(P.cp(a))return b+"..."+c
z=new P.cg(b)
y=$.$get$aU()
y.push(a)
try{x=z
x.a=P.dQ(x.ga4(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga4()+c
y=z.ga4()
return y.charCodeAt(0)==0?y:y},
cp:function(a){var z,y
for(z=0;y=$.$get$aU(),z<y.length;++z)if(a===y[z])return!0
return!1},
kJ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.b(z.gB(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.q()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.q();t=s,s=r){r=z.gB(z);++x
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
z=P.V(null,null,null,b)
for(y=J.aY(a);y.q();)z.V(0,y.gB(y))
return z},
dC:function(a){var z,y,x
z={}
if(P.cp(a))return"{...}"
y=new P.cg("")
try{$.$get$aU().push(a)
x=y
x.a=x.ga4()+"{"
z.a=!0
J.cD(a,new P.hU(z,y))
z=y
z.a=z.ga4()+"}"}finally{z=$.$get$aU()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga4()
return z.charCodeAt(0)==0?z:z},
jK:{"^":"jE;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.cm(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dq(b)},
dq:function(a){var z=this.d
if(z==null)return!1
return this.aE(z[this.aB(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.O(this))
z=z.b}},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cn()
this.b=z}return this.bl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cn()
this.c=y}return this.bl(y,b)}else return this.dl(0,b)},
dl:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cn()
this.d=z}y=this.aB(b)
x=z[y]
if(x==null)z[y]=[this.aJ(b)]
else{if(this.aE(x,b)>=0)return!1
x.push(this.aJ(b))}return!0},
ck:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.dB(0,b)},
dB:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aB(b)]
x=this.aE(y,b)
if(x<0)return!1
this.bB(y.splice(x,1)[0])
return!0},
ab:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aH()}},
bl:function(a,b){if(a[b]!=null)return!1
a[b]=this.aJ(b)
return!0},
bx:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bB(z)
delete a[b]
return!0},
aH:function(){this.r=this.r+1&67108863},
aJ:function(a){var z,y
z=new P.jL(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aH()
return z},
bB:function(a){var z,y
z=a.gdA()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aH()},
aB:function(a){return J.a7(a)&0x3ffffff},
aE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].gds(),b))return y
return-1},
p:{
cn:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jL:{"^":"c;ds:a<,b,dA:c<"},
cm:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.O(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jE:{"^":"iy;$ti"},
mH:{"^":"c;$ti"},
dA:{"^":"em;$ti",$ish:1},
j:{"^":"c;$ti",
gN:function(a){return new H.dB(a,this.gj(a),0,null,[H.bc(this,a,"j",0)])},
t:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gj(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.O(a))}},
e8:function(a,b,c){var z,y,x
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.O(a))}return y},
b6:function(a,b){return H.dR(a,b,null,H.bc(this,a,"j",0))},
l:function(a,b){var z=H.B([],[H.bc(this,a,"j",0)])
C.c.sj(z,C.b.l(this.gj(a),C.b.gj(b)))
C.c.ah(z,0,this.gj(a),a)
C.c.ah(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.c5(a,"[","]")}},
cb:{"^":"T;$ti"},
hU:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
T:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aY(this.gO(a));z.q();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a8(this.gO(a))},
k:function(a){return P.dC(a)}},
iz:{"^":"c;$ti",
P:function(a,b){var z
for(z=J.aY(b);z.q();)this.V(0,z.gB(z))},
k:function(a){return P.c5(this,"{","}")},
v:function(a,b){var z
for(z=new P.cm(this,this.r,null,null,[null]),z.c=this.e;z.q();)b.$1(z.d)}},
iy:{"^":"iz;$ti"},
em:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
cv:function(a,b,c){var z=H.ip(a,c)
if(z!=null)return z
throw H.a(P.c4(a,null,null))},
al:function(a,b){var z=H.io(a)
if(z!=null)return z
throw H.a(P.c4("Invalid double",a,null))},
hk:function(a){var z=J.o(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aQ(a)+"'"},
dJ:function(a,b,c){return new H.hK(a,H.dw(a,!1,!0,!1),null,null)},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hk(a)},
dl:function(a){return new P.jn(a)},
am:function(a){H.az(H.b(a))},
cq:{"^":"c;"},
"+bool":0,
bn:{"^":"c;dN:a<,b",
gej:function(){return this.a},
cZ:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.cS("DateTime is outside valid range: "+this.gej()))},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.b.W(this.a,b.gdN())},
gw:function(a){var z=this.a
return(z^C.b.by(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.h8(H.im(this))
y=P.aZ(H.ik(this))
x=P.aZ(H.ig(this))
w=P.aZ(H.ih(this))
v=P.aZ(H.ij(this))
u=P.aZ(H.il(this))
t=P.h9(H.ii(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
h8:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aZ:function(a){if(a>=10)return""+a
return"0"+a}}},
aV:{"^":"aW;"},
"+double":0,
b_:{"^":"c;a8:a<",
l:function(a,b){return new P.b_(C.b.l(this.a,b.ga8()))},
K:function(a,b){return new P.b_(this.a-b.ga8())},
Y:function(a,b){return C.b.Y(this.a,b.ga8())},
af:function(a,b){return C.b.af(this.a,b.ga8())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.b.W(this.a,b.ga8())},
k:function(a){var z,y,x,w,v
z=new P.hf()
y=this.a
if(y<0)return"-"+new P.b_(0-y).k(0)
x=z.$1(C.b.a5(y,6e7)%60)
w=z.$1(C.b.a5(y,1e6)%60)
v=new P.he().$1(y%1e6)
return""+C.b.a5(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
di:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
he:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hf:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"c;",
ga3:function(){return H.ae(this.$thrownJsError)}},
bx:{"^":"K;",
k:function(a){return"Throw of null."}},
af:{"^":"K;a,b,c,d",
gaD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaC:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaD()+y+x
if(!this.a)return w
v=this.gaC()
u=P.c2(this.b)
return w+v+": "+H.b(u)},
p:{
cS:function(a){return new P.af(!1,null,null,a)},
fU:function(a,b,c){return new P.af(!0,a,b,c)}}},
dI:{"^":"af;e,f,a,b,c,d",
gaD:function(){return"RangeError"},
gaC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
by:function(a,b,c){return new P.dI(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.dI(b,c,!0,a,d,"Invalid value")},
iq:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.ao(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.ao(b,a,c,"end",f))
return b}}},
hz:{"^":"af;e,j:f>,a,b,c,d",
gaD:function(){return"RangeError"},
gaC:function(){if(J.aC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
z:function(a,b,c,d,e){var z=e!=null?e:J.a8(b)
return new P.hz(b,z,!0,a,c,"Index out of range")}}},
iX:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
q:function(a){return new P.iX(a)}}},
iV:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
ci:function(a){return new P.iV(a)}}},
bB:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
p:{
b6:function(a){return new P.bB(a)}}},
h4:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.c2(z))+"."},
p:{
O:function(a){return new P.h4(a)}}},
dN:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga3:function(){return},
$isK:1},
h7:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
m2:{"^":"c;"},
jn:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
hq:{"^":"c;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.b(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.av(x,0,75)+"..."
return y+"\n"+x},
p:{
c4:function(a,b,c){return new P.hq(a,b,c)}}},
I:{"^":"aW;"},
"+int":0,
bs:{"^":"c;$ti",
aW:["cT",function(a,b){return new H.eb(this,b,[H.ct(this,"bs",0)])}],
v:function(a,b){var z
for(z=this.gN(this);z.q();)b.$1(z.gB(z))},
gj:function(a){var z,y
z=this.gN(this)
for(y=0;z.q();)++y
return y},
ga2:function(a){var z,y
z=this.gN(this)
if(!z.q())throw H.a(H.hC())
y=z.gB(z)
if(z.q())throw H.a(H.hE())
return y},
t:function(a,b){var z,y,x
if(b<0)H.J(P.ao(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.q();){x=z.gB(z)
if(b===y)return x;++y}throw H.a(P.z(b,this,"index",null,y))},
k:function(a){return P.hB(this,"(",")")}},
hF:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
ca:{"^":"c;$ti"},
b2:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aW:{"^":"c;"},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gw:function(a){return H.aP(this)},
k:function(a){return"Instance of '"+H.aQ(this)+"'"},
toString:function(){return this.k(this)}},
nd:{"^":"c;"},
aR:{"^":"c;"},
m:{"^":"c;"},
"+String":0,
cg:{"^":"c;a4:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dQ:function(a,b,c){var z=J.aY(b)
if(!z.q())return a
if(c.length===0){do a+=H.b(z.gB(z))
while(z.q())}else{a+=H.b(z.gB(z))
for(;z.q();)a=a+c+H.b(z.gB(z))}return a}}}}],["","",,W,{"^":"",
l1:function(){return document},
hh:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).S(z,a,b,c)
y.toString
z=new H.eb(new W.W(y),new W.hi(),[W.t])
return z.ga2(z)},
hj:function(a){return"wheel"},
aH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fv(a)
if(typeof y==="string")z=a.tagName}catch(x){H.R(x)}return z},
jj:function(a,b){return document.createElement(a)},
ak:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
el:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ey:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jd(a)
if(!!J.o(z).$isF)return z
return}else return a},
kG:function(a){var z
if(!!J.o(a).$isdh)return a
z=new P.j1([],[],!1)
z.c=!0
return z.aV(a)},
eC:function(a){var z=$.r
if(z===C.d)return a
return z.dU(a)},
x:{"^":"an;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lv:{"^":"cf;m:x=,n:y=,H:z=","%":"Accelerometer|LinearAccelerationSensor"},
lw:{"^":"i;j:length=","%":"AccessibleNodeList"},
lx:{"^":"x;ao:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ly:{"^":"x;ao:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lC:{"^":"x;ao:href}","%":"HTMLBaseElement"},
bX:{"^":"x;",$isbX:1,"%":"HTMLBodyElement"},
lD:{"^":"x;I:name=","%":"HTMLButtonElement"},
lE:{"^":"x;F:height},G:width}",
cH:function(a,b,c){var z=a.getContext(b,P.kX(c,null))
return z},
"%":"HTMLCanvasElement"},
lF:{"^":"i;",
at:function(a){return P.U(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lG:{"^":"t;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lI:{"^":"a_;Z:style=","%":"CSSFontFaceRule"},
lJ:{"^":"a_;Z:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lK:{"^":"a_;Z:style=","%":"CSSPageRule"},
lL:{"^":"bm;j:length=","%":"CSSPerspective"},
lM:{"^":"c_;m:x=,n:y=","%":"CSSPositionValue"},
lN:{"^":"bm;m:x=,n:y=,H:z=","%":"CSSRotation"},
a_:{"^":"i;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lO:{"^":"bm;m:x=,n:y=,H:z=","%":"CSSScale"},
h5:{"^":"jb;j:length=",
bo:function(a,b){var z,y
z=$.$get$da()
y=z[b]
if(typeof y==="string")return y
y=this.dK(a,b)
z[b]=y
return y},
dK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ha()+b
if(z in a)return z
return b},
dH:function(a,b,c,d){a.setProperty(b,c,d)},
sF:function(a,b){a.height=b},
sG:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h6:{"^":"c;",
se7:function(a,b){this.dH(a,this.bo(a,"float"),b,"")}},
lP:{"^":"a_;Z:style=","%":"CSSStyleRule"},
c_:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bm:{"^":"i;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lQ:{"^":"c_;j:length=","%":"CSSTransformValue"},
lR:{"^":"bm;m:x=,n:y=,H:z=","%":"CSSTranslation"},
lS:{"^":"c_;j:length=","%":"CSSUnparsedValue"},
lT:{"^":"a_;Z:style=","%":"CSSViewportRule"},
lU:{"^":"i;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lV:{"^":"i;m:x=,n:y=,H:z=","%":"DeviceAcceleration"},
hb:{"^":"x;","%":"HTMLDivElement"},
dh:{"^":"t;",$isdh:1,"%":"Document|HTMLDocument|XMLDocument"},
lW:{"^":"i;",
k:function(a){return String(a)},
"%":"DOMException"},
lX:{"^":"hc;",
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z},
"%":"DOMPoint"},
hc:{"^":"i;",
gas:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z},
"%":";DOMPointReadOnly"},
lY:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.ad]},
$isp:1,
$asp:function(){return[P.ad]},
$asj:function(){return[P.ad]},
$ish:1,
$ash:function(){return[P.ad]},
$ask:function(){return[P.ad]},
"%":"ClientRectList|DOMRectList"},
hd:{"^":"i;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gG(a))+" x "+H.b(this.gF(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isad)return!1
return a.left===z.gcb(b)&&a.top===z.gco(b)&&this.gG(a)===z.gG(b)&&this.gF(a)===z.gF(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gG(a)
w=this.gF(a)
return W.el(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcp:function(a){return new P.ac(a.left,a.top,[null])},
gF:function(a){return a.height},
gcb:function(a){return a.left},
gco:function(a){return a.top},
gG:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isad:1,
$asad:I.au,
"%":";DOMRectReadOnly"},
lZ:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$asj:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$ask:function(){return[P.m]},
"%":"DOMStringList"},
m_:{"^":"i;j:length=","%":"DOMTokenList"},
an:{"^":"t;Z:style=,bu:namespaceURI=,ev:tagName=",
gdR:function(a){return new W.ji(a)},
k:function(a){return a.localName},
ef:function(a,b,c,d,e){var z,y
z=this.S(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(z,a)
break
case"afterbegin":y=a.childNodes
a.insertBefore(z,y.length>0?y[0]:null)
break
case"beforeend":a.appendChild(z)
break
case"afterend":a.parentNode.insertBefore(z,a.nextSibling)
break
default:H.J(P.cS("Invalid position "+b))}},
S:["aw",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dk
if(z==null){z=H.B([],[W.dE])
y=new W.dF(z)
z.push(W.ei(null))
z.push(W.eu())
$.dk=y
d=y}else d=z
z=$.dj
if(z==null){z=new W.ex(d)
$.dj=z
c=z}else{z.a=d
c=z}}if($.a9==null){z=document
y=z.implementation.createHTMLDocument("")
$.a9=y
$.c1=y.createRange()
y=$.a9
y.toString
x=y.createElement("base")
J.fG(x,z.baseURI)
$.a9.head.appendChild(x)}z=$.a9
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a9
if(!!this.$isbX)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a9.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.O,a.tagName)){$.c1.selectNodeContents(w)
v=$.c1.createContextualFragment(b)}else{w.innerHTML=b
v=$.a9.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a9.body
if(w==null?z!=null:w!==z)J.cK(w)
c.b4(v)
document.adoptNode(v)
return v},function(a,b,c){return this.S(a,b,c,null)},"e1",null,null,"geH",5,5,null],
cK:function(a,b,c,d){a.textContent=null
a.appendChild(this.S(a,b,c,d))},
cJ:function(a,b){return this.cK(a,b,null,null)},
aX:function(a){return a.getBoundingClientRect()},
gcf:function(a){return new W.ai(a,"mousedown",!1,[W.a0])},
gcg:function(a){return new W.ai(a,"mousemove",!1,[W.a0])},
gci:function(a){return new W.ai(a,"mouseup",!1,[W.a0])},
gcj:function(a){return new W.ai(a,W.hj(a),!1,[W.b8])},
$isan:1,
"%":";Element"},
hi:{"^":"f:0;",
$1:function(a){return!!J.o(a).$isan}},
m0:{"^":"x;F:height},I:name=,G:width}","%":"HTMLEmbedElement"},
m1:{"^":"bo;R:error=","%":"ErrorEvent"},
bo:{"^":"i;",
ar:function(a){return a.preventDefault()},
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
F:{"^":"i;",
bG:["cR",function(a,b,c,d){if(c!=null)this.dm(a,b,c,!1)}],
dm:function(a,b,c,d){return a.addEventListener(b,H.Y(c,1),!1)},
dC:function(a,b,c,d){return a.removeEventListener(b,H.Y(c,1),!1)},
$isF:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;er|es|ev|ew"},
ml:{"^":"x;I:name=","%":"HTMLFieldSetElement"},
mm:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bp]},
$isp:1,
$asp:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"FileList"},
mn:{"^":"F;R:error=","%":"FileReader"},
mo:{"^":"F;R:error=,j:length=","%":"FileWriter"},
mq:{"^":"i;Z:style=","%":"FontFace"},
mr:{"^":"F;",
eI:function(a,b,c){return a.forEach(H.Y(b,3),c)},
v:function(a,b){b=H.Y(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mt:{"^":"x;j:length=,I:name=","%":"HTMLFormElement"},
mv:{"^":"cf;m:x=,n:y=,H:z=","%":"Gyroscope"},
mw:{"^":"i;j:length=","%":"History"},
mx:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hw:{"^":"hx;",
eJ:function(a,b,c,d,e,f){return a.open(b,c)},
en:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
hx:{"^":"F;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
my:{"^":"x;F:height},I:name=,G:width}","%":"HTMLIFrameElement"},
mz:{"^":"x;F:height},G:width}","%":"HTMLImageElement"},
mB:{"^":"x;F:height},I:name=,G:width}","%":"HTMLInputElement"},
bt:{"^":"ea;",
geF:function(a){return a.which},
$isbt:1,
"%":"KeyboardEvent"},
mG:{"^":"x;ao:href}","%":"HTMLLinkElement"},
mI:{"^":"i;",
k:function(a){return String(a)},
"%":"Location"},
mJ:{"^":"cf;m:x=,n:y=,H:z=","%":"Magnetometer"},
mK:{"^":"x;I:name=","%":"HTMLMapElement"},
hX:{"^":"x;R:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mM:{"^":"i;j:length=","%":"MediaList"},
mN:{"^":"F;",
bG:function(a,b,c,d){if(J.E(b,"message"))a.start()
this.cR(a,b,c,!1)},
"%":"MessagePort"},
mO:{"^":"x;I:name=","%":"HTMLMetaElement"},
mP:{"^":"jN;",
h:function(a,b){return P.U(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gO:function(a){var z=H.B([],[P.m])
this.v(a,new W.hZ(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hZ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mQ:{"^":"jO;",
h:function(a,b){return P.U(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gO:function(a){var z=H.B([],[P.m])
this.v(a,new W.i_(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
i_:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mR:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$ask:function(){return[W.bv]},
"%":"MimeTypeArray"},
a0:{"^":"ea;bQ:button=",
gek:function(a){return new P.ac(a.movementX,a.movementY,[null])},
gce:function(a){var z,y,x
if(!!a.offsetX)return new P.ac(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.ey(z)).$isan)throw H.a(P.q("offsetX is only supported on elements"))
y=W.ey(z)
z=[null]
x=new P.ac(a.clientX,a.clientY,z).K(0,J.fw(J.fy(y)))
return new P.ac(J.cM(x.a),J.cM(x.b),z)}},
$isa0:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
W:{"^":"dA;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b6("No elements"))
if(y>1)throw H.a(P.b6("More than one element"))
return z.firstChild},
P:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gN:function(a){var z=this.a.childNodes
return new W.dm(z,z.length,-1,null,[H.bc(C.Q,z,"k",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdA:function(){return[W.t]},
$asj:function(){return[W.t]},
$ash:function(){return[W.t]},
$asem:function(){return[W.t]}},
t:{"^":"F;aq:parentNode=,aR:previousSibling=",
gem:function(a){return new W.W(a)},
ep:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cS(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mZ:{"^":"i;",
eo:[function(a){return a.previousNode()},"$0","gaR",1,0,4],
"%":"NodeIterator"},
i8:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
n1:{"^":"x;F:height},I:name=,G:width}","%":"HTMLObjectElement"},
n3:{"^":"x;I:name=","%":"HTMLOutputElement"},
n4:{"^":"x;I:name=","%":"HTMLParamElement"},
b3:{"^":"i;j:length=","%":"Plugin"},
n6:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b3]},
$isp:1,
$asp:function(){return[W.b3]},
$asj:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$ask:function(){return[W.b3]},
"%":"PluginArray"},
na:{"^":"i;",
aX:function(a){return a.getBoundingClientRect()},
"%":"Range"},
nh:{"^":"k1;",
h:function(a,b){return P.U(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gO:function(a){var z=H.B([],[P.m])
this.v(a,new W.iv(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.m,null]},
"%":"RTCStatsReport"},
iv:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
ce:{"^":"x;j:length=,I:name=",$isce:1,"%":"HTMLSelectElement"},
cf:{"^":"F;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ni:{"^":"bo;R:error=","%":"SensorErrorEvent"},
nj:{"^":"x;I:name=","%":"HTMLSlotElement"},
nk:{"^":"es;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bz]},
$isp:1,
$asp:function(){return[W.bz]},
$asj:function(){return[W.bz]},
$ish:1,
$ash:function(){return[W.bz]},
$ask:function(){return[W.bz]},
"%":"SourceBufferList"},
nl:{"^":"k7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bA]},
$isp:1,
$asp:function(){return[W.bA]},
$asj:function(){return[W.bA]},
$ish:1,
$ash:function(){return[W.bA]},
$ask:function(){return[W.bA]},
"%":"SpeechGrammarList"},
nm:{"^":"bo;R:error=","%":"SpeechRecognitionError"},
b5:{"^":"i;j:length=","%":"SpeechRecognitionResult"},
no:{"^":"ka;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gO:function(a){var z=H.B([],[P.m])
this.v(a,new W.iH(z))
return z},
gj:function(a){return a.length},
$asT:function(){return[P.m,P.m]},
"%":"Storage"},
iH:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
iQ:{"^":"x;",
S:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aw(a,b,c,d)
z=W.hh("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.W(y).P(0,J.ft(z))
return y},
"%":"HTMLTableElement"},
nr:{"^":"x;",
S:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aw(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.S(z.createElement("table"),b,c,d)
z.toString
z=new W.W(z)
x=z.ga2(z)
x.toString
z=new W.W(x)
w=z.ga2(z)
y.toString
w.toString
new W.W(y).P(0,new W.W(w))
return y},
"%":"HTMLTableRowElement"},
ns:{"^":"x;",
S:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aw(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.S(z.createElement("table"),b,c,d)
z.toString
z=new W.W(z)
x=z.ga2(z)
y.toString
x.toString
new W.W(y).P(0,new W.W(x))
return y},
"%":"HTMLTableSectionElement"},
dT:{"^":"x;",$isdT:1,"%":"HTMLTemplateElement"},
nt:{"^":"x;I:name=","%":"HTMLTextAreaElement"},
nv:{"^":"ki;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bE]},
$isp:1,
$asp:function(){return[W.bE]},
$asj:function(){return[W.bE]},
$ish:1,
$ash:function(){return[W.bE]},
$ask:function(){return[W.bE]},
"%":"TextTrackCueList"},
nw:{"^":"ew;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bD]},
$isp:1,
$asp:function(){return[W.bD]},
$asj:function(){return[W.bD]},
$ish:1,
$ash:function(){return[W.bD]},
$ask:function(){return[W.bD]},
"%":"TextTrackList"},
nx:{"^":"i;j:length=","%":"TimeRanges"},
ny:{"^":"kn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bF]},
$isp:1,
$asp:function(){return[W.bF]},
$asj:function(){return[W.bF]},
$ish:1,
$ash:function(){return[W.bF]},
$ask:function(){return[W.bF]},
"%":"TouchList"},
nz:{"^":"i;j:length=","%":"TrackDefaultList"},
nC:{"^":"i;",
eK:[function(a){return a.parentNode()},"$0","gaq",1,0,4],
eo:[function(a){return a.previousNode()},"$0","gaR",1,0,4],
"%":"TreeWalker"},
ea:{"^":"bo;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nE:{"^":"i;",
k:function(a){return String(a)},
"%":"URL"},
nG:{"^":"i;m:x=,H:z=","%":"VRStageBoundsPoint"},
nH:{"^":"hX;F:height},G:width}","%":"HTMLVideoElement"},
nI:{"^":"F;j:length=","%":"VideoTrackList"},
b8:{"^":"a0;",
ge3:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.q("deltaY is not supported"))},
$isb8:1,
"%":"WheelEvent"},
iZ:{"^":"F;",
gdQ:function(a){var z,y
z=P.aW
y=new P.N(0,$.r,null,[z])
this.du(a)
this.dD(a,W.eC(new W.j_(new P.ke(y,[z]))))
return y},
dD:function(a,b){return a.requestAnimationFrame(H.Y(b,1))},
du:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
j_:{"^":"f:0;a",
$1:function(a){this.a.am(0,a)}},
nJ:{"^":"F;"},
nN:{"^":"t;I:name=,bu:namespaceURI=","%":"Attr"},
nO:{"^":"kt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$asj:function(){return[W.a_]},
$ish:1,
$ash:function(){return[W.a_]},
$ask:function(){return[W.a_]},
"%":"CSSRuleList"},
nP:{"^":"hd;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isad)return!1
return a.left===z.gcb(b)&&a.top===z.gco(b)&&a.width===z.gG(b)&&a.height===z.gF(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.el(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcp:function(a){return new P.ac(a.left,a.top,[null])},
gF:function(a){return a.height},
gG:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nQ:{"^":"kv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.br]},
$isp:1,
$asp:function(){return[W.br]},
$asj:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$ask:function(){return[W.br]},
"%":"GamepadList"},
nT:{"^":"kx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$ish:1,
$ash:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nU:{"^":"kz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b5]},
$isp:1,
$asp:function(){return[W.b5]},
$asj:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$ask:function(){return[W.b5]},
"%":"SpeechRecognitionResultList"},
nV:{"^":"kB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bC]},
$isp:1,
$asp:function(){return[W.bC]},
$asj:function(){return[W.bC]},
$ish:1,
$ash:function(){return[W.bC]},
$ask:function(){return[W.bC]},
"%":"StyleSheetList"},
j9:{"^":"cb;dw:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gO(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.G)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gO:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.B([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbu(v)==null)y.push(u.gI(v))}return y},
$ascb:function(){return[P.m,P.m]},
$asT:function(){return[P.m,P.m]}},
ji:{"^":"j9;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gO(this).length}},
jk:{"^":"dP;a,b,c,$ti",
cd:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.D(this,0))}},
ai:{"^":"jk;a,b,c,$ti"},
jl:{"^":"iI;a,b,c,d,e,$ti",
dg:function(a,b,c,d,e){this.dL()},
dW:function(a){if(this.b==null)return
this.dM()
this.b=null
this.d=null
return},
dL:function(){var z=this.d
if(z!=null&&this.a<=0)J.fa(this.b,this.c,z,!1)},
dM:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.f9(x,this.c,z,!1)}},
p:{
aj:function(a,b,c,d,e){var z=W.eC(new W.jm(c))
z=new W.jl(0,a,b,z,!1,[e])
z.dg(a,b,c,!1,e)
return z}}},
jm:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
ck:{"^":"c;cB:a<",
dh:function(a){var z,y
z=$.$get$cl()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.N[y],W.l9())
for(y=0;y<12;++y)z.i(0,C.p[y],W.la())}},
a6:function(a){return $.$get$ej().u(0,W.aH(a))},
a_:function(a,b,c){var z,y,x
z=W.aH(a)
y=$.$get$cl()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
ei:function(a){var z,y
z=document.createElement("a")
y=new W.k2(z,window.location)
y=new W.ck(y)
y.dh(a)
return y},
nR:[function(a,b,c,d){return!0},"$4","l9",16,0,9],
nS:[function(a,b,c,d){var z,y,x,w,v
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
return z},"$4","la",16,0,9]}},
k:{"^":"c;$ti",
gN:function(a){return new W.dm(a,this.gj(a),-1,null,[H.bc(this,a,"k",0)])}},
dF:{"^":"c;a",
a6:function(a){return C.c.bH(this.a,new W.ia(a))},
a_:function(a,b,c){return C.c.bH(this.a,new W.i9(a,b,c))}},
ia:{"^":"f:0;a",
$1:function(a){return a.a6(this.a)}},
i9:{"^":"f:0;a,b,c",
$1:function(a){return a.a_(this.a,this.b,this.c)}},
k3:{"^":"c;cB:d<",
dj:function(a,b,c,d){var z,y,x
this.a.P(0,c)
z=b.aW(0,new W.k4())
y=b.aW(0,new W.k5())
this.b.P(0,z)
x=this.c
x.P(0,C.w)
x.P(0,y)},
a6:function(a){return this.a.u(0,W.aH(a))},
a_:["cV",function(a,b,c){var z,y
z=W.aH(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.dP(c)
else if(y.u(0,"*::"+b))return this.d.dP(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
k4:{"^":"f:0;",
$1:function(a){return!C.c.u(C.p,a)}},
k5:{"^":"f:0;",
$1:function(a){return C.c.u(C.p,a)}},
kf:{"^":"k3;e,a,b,c,d",
a_:function(a,b,c){if(this.cV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cF(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
eu:function(){var z=P.m
z=new W.kf(P.c9(C.o,z),P.V(null,null,null,z),P.V(null,null,null,z),P.V(null,null,null,z),null)
z.dj(null,new H.hV(C.o,new W.kg(),[H.D(C.o,0),null]),["TEMPLATE"],null)
return z}}},
kg:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
kd:{"^":"c;",
a6:function(a){var z=J.o(a)
if(!!z.$isdL)return!1
z=!!z.$isA
if(z&&W.aH(a)==="foreignObject")return!1
if(z)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.i.cO(b,"on"))return!1
return this.a6(a)}},
dm:{"^":"c;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aD(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gB:function(a){return this.d}},
jc:{"^":"c;a",$isF:1,p:{
jd:function(a){if(a===window)return a
else return new W.jc(a)}}},
dE:{"^":"c;"},
n_:{"^":"c;"},
nD:{"^":"c;"},
k2:{"^":"c;a,b"},
ex:{"^":"c;a",
b4:function(a){new W.kq(this).$2(a,null)},
aa:function(a,b){if(b==null)J.cK(a)
else b.removeChild(a)},
dG:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cF(a)
x=y.gdw().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.R(t)}v="element unprintable"
try{v=J.aF(a)}catch(t){H.R(t)}try{u=W.aH(a)
this.dF(a,b,z,v,u,y,x)}catch(t){if(H.R(t) instanceof P.af)throw t
else{this.aa(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dF:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aa(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a6(a)){this.aa(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.aa(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gO(f)
y=H.B(z.slice(0),[H.D(z,0)])
for(x=f.gO(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.a_(a,J.fK(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdT)this.b4(a.content)}},
kq:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dG(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aa(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fu(z)}catch(w){H.R(w)
v=z
if(x){u=J.e(v)
if(u.gaq(v)!=null){u.gaq(v)
u.gaq(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
jb:{"^":"i+h6;"},
je:{"^":"i+j;"},
jf:{"^":"je+k;"},
jg:{"^":"i+j;"},
jh:{"^":"jg+k;"},
jo:{"^":"i+j;"},
jp:{"^":"jo+k;"},
jF:{"^":"i+j;"},
jG:{"^":"jF+k;"},
jN:{"^":"i+T;"},
jO:{"^":"i+T;"},
jP:{"^":"i+j;"},
jQ:{"^":"jP+k;"},
jR:{"^":"i+j;"},
jS:{"^":"jR+k;"},
jV:{"^":"i+j;"},
jW:{"^":"jV+k;"},
k1:{"^":"i+T;"},
er:{"^":"F+j;"},
es:{"^":"er+k;"},
k6:{"^":"i+j;"},
k7:{"^":"k6+k;"},
ka:{"^":"i+T;"},
kh:{"^":"i+j;"},
ki:{"^":"kh+k;"},
ev:{"^":"F+j;"},
ew:{"^":"ev+k;"},
km:{"^":"i+j;"},
kn:{"^":"km+k;"},
ks:{"^":"i+j;"},
kt:{"^":"ks+k;"},
ku:{"^":"i+j;"},
kv:{"^":"ku+k;"},
kw:{"^":"i+j;"},
kx:{"^":"kw+k;"},
ky:{"^":"i+j;"},
kz:{"^":"ky+k;"},
kA:{"^":"i+j;"},
kB:{"^":"kA+k;"}}],["","",,P,{"^":"",
U:function(a){var z,y,x,w,v
if(a==null)return
z=P.l()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
kX:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cD(a,new P.kY(z))
return z},
kZ:function(a){var z,y
z=new P.N(0,$.r,null,[null])
y=new P.ed(z,[null])
a.then(H.Y(new P.l_(y),1))["catch"](H.Y(new P.l0(y),1))
return z},
dg:function(){var z=$.df
if(z==null){z=J.bR(window.navigator.userAgent,"Opera",0)
$.df=z}return z},
ha:function(){var z,y
z=$.dc
if(z!=null)return z
y=$.dd
if(y==null){y=J.bR(window.navigator.userAgent,"Firefox",0)
$.dd=y}if(y)z="-moz-"
else{y=$.de
if(y==null){y=P.dg()!==!0&&J.bR(window.navigator.userAgent,"Trident/",0)
$.de=y}if(y)z="-ms-"
else z=P.dg()===!0?"-o-":"-webkit-"}$.dc=z
return z},
j0:{"^":"c;",
c7:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aV:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.bn(y,!0)
x.cZ(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.ci("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kZ(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.c7(a)
x=this.b
u=x.length
if(v>=u)return H.d(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.l()
z.a=t
if(v>=u)return H.d(x,v)
x[v]=t
this.e9(a,new P.j2(z,this))
return z.a}if(a instanceof Array){s=a
v=this.c7(s)
x=this.b
if(v>=x.length)return H.d(x,v)
t=x[v]
if(t!=null)return t
u=J.a5(s)
r=u.gj(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.d(x,v)
x[v]=t
for(x=J.av(t),q=0;q<r;++q)x.i(t,q,this.aV(u.h(s,q)))
return t}return a}},
j2:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aV(b)
J.f8(z,a,y)
return y}},
kY:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
j1:{"^":"j0;a,b,c",
e9:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
b.$2(w,a[w])}}},
l_:{"^":"f:0;a",
$1:function(a){return this.a.am(0,a)}},
l0:{"^":"f:0;a",
$1:function(a){return this.a.dZ(a)}}}],["","",,P,{"^":"",ng:{"^":"F;R:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nA:{"^":"F;R:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ek:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
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
z=J.a7(this.a)
y=J.a7(this.b)
return P.jH(P.ek(P.ek(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ac(y,C.a.l(z,x),this.$ti)},
K:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.K()
if(typeof x!=="number")return H.P(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.K()
if(typeof y!=="number")return H.P(y)
return new P.ac(z-x,w-y,this.$ti)}},
jX:{"^":"c;$ti"},
ad:{"^":"jX;$ti"}}],["","",,P,{"^":"",m3:{"^":"A;m:x=,n:y=","%":"SVGFEBlendElement"},m4:{"^":"A;m:x=,n:y=","%":"SVGFEColorMatrixElement"},m5:{"^":"A;m:x=,n:y=","%":"SVGFEComponentTransferElement"},m6:{"^":"A;m:x=,n:y=","%":"SVGFECompositeElement"},m7:{"^":"A;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},m8:{"^":"A;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},m9:{"^":"A;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},ma:{"^":"A;m:x=,n:y=","%":"SVGFEFloodElement"},mb:{"^":"A;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},mc:{"^":"A;m:x=,n:y=","%":"SVGFEImageElement"},md:{"^":"A;m:x=,n:y=","%":"SVGFEMergeElement"},me:{"^":"A;m:x=,n:y=","%":"SVGFEMorphologyElement"},mf:{"^":"A;m:x=,n:y=","%":"SVGFEOffsetElement"},mg:{"^":"A;m:x=,n:y=,H:z=","%":"SVGFEPointLightElement"},mh:{"^":"A;m:x=,n:y=","%":"SVGFESpecularLightingElement"},mi:{"^":"A;m:x=,n:y=,H:z=","%":"SVGFESpotLightElement"},mj:{"^":"A;m:x=,n:y=","%":"SVGFETileElement"},mk:{"^":"A;m:x=,n:y=","%":"SVGFETurbulenceElement"},mp:{"^":"A;m:x=,n:y=","%":"SVGFilterElement"},ms:{"^":"aI;m:x=,n:y=","%":"SVGForeignObjectElement"},hv:{"^":"aI;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aI:{"^":"A;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mA:{"^":"aI;m:x=,n:y=","%":"SVGImageElement"},mF:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dy]},
$ish:1,
$ash:function(){return[P.dy]},
$ask:function(){return[P.dy]},
"%":"SVGLengthList"},mL:{"^":"A;m:x=,n:y=","%":"SVGMaskElement"},n0:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dH]},
$ish:1,
$ash:function(){return[P.dH]},
$ask:function(){return[P.dH]},
"%":"SVGNumberList"},n5:{"^":"A;m:x=,n:y=","%":"SVGPatternElement"},n7:{"^":"i;m:x=,n:y=","%":"SVGPoint"},n8:{"^":"i;j:length=","%":"SVGPointList"},nb:{"^":"i;m:x=,n:y=","%":"SVGRect"},nc:{"^":"hv;m:x=,n:y=","%":"SVGRectElement"},dL:{"^":"A;",$isdL:1,"%":"SVGScriptElement"},np:{"^":"kc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$ask:function(){return[P.m]},
"%":"SVGStringList"},A:{"^":"an;",
S:function(a,b,c,d){var z,y,x,w,v,u
z=H.B([],[W.dE])
z.push(W.ei(null))
z.push(W.eu())
z.push(new W.kd())
c=new W.ex(new W.dF(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).e1(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.W(w)
u=z.ga2(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gcf:function(a){return new W.ai(a,"mousedown",!1,[W.a0])},
gcg:function(a){return new W.ai(a,"mousemove",!1,[W.a0])},
gci:function(a){return new W.ai(a,"mouseup",!1,[W.a0])},
gcj:function(a){return new W.ai(a,"mousewheel",!1,[W.b8])},
$isA:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nq:{"^":"aI;m:x=,n:y=","%":"SVGSVGElement"},iR:{"^":"aI;","%":"SVGTextPathElement;SVGTextContentElement"},nu:{"^":"iR;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nB:{"^":"kp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dX]},
$ish:1,
$ash:function(){return[P.dX]},
$ask:function(){return[P.dX]},
"%":"SVGTransformList"},nF:{"^":"aI;m:x=,n:y=","%":"SVGUseElement"},jI:{"^":"i+j;"},jJ:{"^":"jI+k;"},jT:{"^":"i+j;"},jU:{"^":"jT+k;"},kb:{"^":"i+j;"},kc:{"^":"kb+k;"},ko:{"^":"i+j;"},kp:{"^":"ko+k;"}}],["","",,P,{"^":"",lz:{"^":"i;j:length=","%":"AudioBuffer"},lA:{"^":"ja;",
h:function(a,b){return P.U(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.U(y.value[1]))}},
gO:function(a){var z=H.B([],[P.m])
this.v(a,new P.fW(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.m,null]},
"%":"AudioParamMap"},fW:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},lB:{"^":"F;j:length=","%":"AudioTrackList"},fX:{"^":"F;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n2:{"^":"fX;j:length=","%":"OfflineAudioContext"},ja:{"^":"i+T;"}}],["","",,P,{"^":"",ne:{"^":"i;",
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
c8:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
at:function(a){return P.U(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
cc:function(a,b){return a.linkProgram(b)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b7:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c,d){return a.texParameterf(b,c,d)},
cn:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},nf:{"^":"i;",
dS:function(a,b){return a.beginTransformFeedback(b)},
dV:function(a,b){return a.bindVertexArray(b)},
e2:function(a){return a.createVertexArray()},
e4:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e5:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e6:function(a){return a.endTransformFeedback()},
ew:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eB:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eD:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
c8:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
at:function(a){return P.U(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b0:function(a,b){return a.getShaderInfoLog(b)},
b1:function(a,b,c){return a.getShaderParameter(b,c)},
b2:function(a,b,c){return a.getUniformLocation(b,c)},
cc:function(a,b){return a.linkProgram(b)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b7:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cm:function(a,b,c,d){return a.texParameterf(b,c,d)},
cn:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nn:{"^":"k9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return P.U(a.item(b))},
i:function(a,b,c){throw H.a(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.ca]},
$ish:1,
$ash:function(){return[P.ca]},
$ask:function(){return[P.ca]},
"%":"SQLResultSetRowList"},k8:{"^":"i+j;"},k9:{"^":"k8+k;"}}],["","",,G,{"^":"",
j3:function(a){var z,y,x,w
z=H.B(a.split("\n"),[P.m])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.ae(z,"\n")},
ee:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bY(a,b)
z.b5(a,y,c)
z.bU(a,y)
x=z.b1(a,y,35713)
if(x!=null&&J.E(x,!1)){w=z.b0(a,y)
P.am("E:Compilation failed:")
P.am("E:"+G.j3(c))
P.am("E:Failure:")
P.am(C.i.l("E:",w))
throw H.a(w)}return y},
dn:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bU(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bV(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cI(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
ho:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bU(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bV(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
hp:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bU(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bV(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cI(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.fx(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
hn:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aD(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aD(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aD(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aD(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
jD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.aa(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.I]],v=[P.aV],u=[T.a2],t=[T.w],s=[T.C];y.q();){r=y.d
if(!x.an(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eQ>0)H.az("I: "+q)
continue}p=z.h(0,r)
switch($.$get$X().h(0,r).a){case"vec2":b.a7(r,G.ho(H.be(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a7(r,G.dn(H.be(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a7(r,G.hp(H.be(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a7(r,new Float32Array(H.bI(H.be(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a7(r,G.hn(H.be(p,"$ish",w,"$ash"),null),4)
break}}},
ds:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.l()
w=J.fl(z.a)
v=new G.hY(z,w,4,x,y,null,0,-1,null,null,P.l(),"meshdata:"+a,!1,!0)
u=G.dn(c.d,null)
x.i(0,"aPosition",J.bS(z.a))
v.ch=u
v.bd("aPosition",u,3)
t=$.$get$X().h(0,"aPosition")
if(t==null)H.J("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bh(z.a,w)
z.c6(0,s,0)
z.cE(0,x.h(0,"aPosition"),s,t.bf(),5126,!1,0,0)
y=c.d2()
v.y=J.bS(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bI(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bI(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bI(y))
v.Q=5125}J.bh(z.a,w)
y=v.y
x=v.cx
J.bP(z.a,34963,y)
J.cA(z.a,34963,x,35048)
G.jD(c,v)
return v},
bw:{"^":"c;"},
u:{"^":"bw;d,a,b,c",
bg:function(){return this.d},
k:function(a){var z,y,x,w
z=H.B(["{"+H.b(new H.e8(H.l6(this),null))+"}["+this.a+"]"],[P.m])
for(y=this.d,x=new H.aa(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.ae(z,"\n")}},
fY:{"^":"iD;"},
h_:{"^":"c;a,b",
c6:function(a,b,c){J.fr(this.a,b)
if(c>0)J.fR(this.a,b,c)},
cE:function(a,b,c,d,e,f,g,h){J.bP(this.a,34962,b)
J.fS(this.a,c,d,e,!1,g,h)}},
dp:{"^":"c;a,b,c,d,e",
d1:function(a,b,c,d,e){var z,y,x
z=this.a
y=J.fi(z.a)
this.b=y
J.bQ(z.a,36160,y)
y=this.c
if(y!=null){y=y.b
J.cE(z.a,36160,36064,3553,y,0)}y=this.d
if(y!=null){y=y.b
J.cE(z.a,36160,36096,3553,y,0)}x=J.fe(z.a,36160)
if(x!==36053)throw H.a("Error Incomplete Framebuffer: "+H.b(x))
J.bQ(z.a,36160,null)},
b8:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.bQ(z.a,36160,y)
J.fT(z.a,b,c,d,e)
if(a!==0)J.ff(z.a,a)}},
hl:{"^":"c;a,b,c"},
hm:{"^":"c;a,b,c,d"},
dr:{"^":"c;a,b,c,d,e",
ai:function(a){switch($.$get$X().h(0,a).a){case"vec2":this.e.i(0,a,H.B([],[T.C]))
break
case"vec3":this.e.i(0,a,H.B([],[T.w]))
break
case"vec4":this.e.i(0,a,H.B([],[T.a2]))
break
case"float":this.e.i(0,a,H.B([],[P.aV]))
break
case"uvec4":this.e.i(0,a,H.B([],[[P.h,P.I]]))
break}},
cX:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.hl(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.G)(a),++w)z.push(a[w].ac(0))},
ba:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x)z.push(b[x].ac(0))},
bb:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x)z.push(b[x].ac(0))},
bc:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.hm(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.G)(a),++w)z.push(a[w].ac(0))},
d2:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.B(x,[P.I])
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
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.aa(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$X().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.ae(z," ")}},
dW:{"^":"c;a,b,c"},
dV:{"^":"c;a,b,c"},
hW:{"^":"u;d,a,b,c"},
hY:{"^":"bw;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bd:function(a,b,c){var z,y
C.i.aj(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bP(z.a,34962,y)
J.cA(z.a,34962,b,35048)},
d3:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a7:function(a,b,c){var z,y,x,w,v
z=J.cB(a,0)===105
if(z&&this.z===0)this.z=C.b.cW(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bS(x.a))
this.bd(a,b,c)
w=$.$get$X().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bh(x.a,this.e)
x.c6(0,v,z?1:0)
x.cE(0,y.h(0,a),v,w.bf(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.aa(z,z.r,null,null,[H.D(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.ae(y,"  ")}},
id:{"^":"u;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cY:function(a,b){var z
if(typeof a!=="number")return a.a0()
if(typeof b!=="number")return H.P(b)
z=a/b
if(this.z===z)return
this.z=z
this.bi()},
bi:function(){var z,y,x,w,v,u
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
bg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.w(new Float32Array(3))
u.U(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.A(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.o(t)
x=!!y.$isa2
q=x?y.gas(t):1
if(!!y.$isw){p=y.gm(t)
s=y.gn(t)
r=y.gH(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gH(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.P(t)
x=z[4]
if(typeof s!=="number")return H.P(s)
w=z[8]
if(typeof r!=="number")return H.P(r)
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
c.A(this.db)
c.el(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
iu:{"^":"bw;d,e,f,r,x,y,z,Q,ch,a,b,c",
d6:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.cJ(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.cJ(w.a,v,t))}},
dc:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.aa(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.an(0,v))x.push(v)}for(z=this.x,y=new P.cm(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
df:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.aa(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.cB(t,0)){case 117:if(w.an(0,t)){s=b.h(0,t)
if(v.an(0,t))H.az("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$X().h(0,t)
if(r==null)H.J("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bW(x.a,q,s)
else if(!!J.o(s).$ishA)J.fP(x.a,q,s)
break
case"float":if(r.c===0)J.fN(x.a,q,s)
else if(!!J.o(s).$isc3)J.fO(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a6(s,"$isab").a
J.cR(x.a,q,!1,p)}else if(!!J.o(s).$isc3)J.cR(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a6(s,"$isb1").a
J.cQ(x.a,q,!1,p)}else if(!!J.o(s).$isc3)J.cQ(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cP(o,q,H.a6(s,"$isa2").a)
else J.cP(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cO(o,q,H.a6(s,"$isw").a)
else J.cO(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cN(o,q,H.a6(s,"$isC").a)
else J.cN(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.P(p)
J.cy(x.a,33984+p)
p=H.a6(s,"$isch").b
J.bg(x.a,3553,p)
p=this.ch
J.bW(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.P(p)
J.cy(x.a,33984+p)
p=H.a6(s,"$isch").b
J.bg(x.a,34067,p)
p=this.ch
J.bW(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.az("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.E(s,!0)
o=x.a
if(p)J.bi(o,2929)
else J.bT(o,2929)
break
case"cStencilFunc":H.a6(s,"$isdW")
p=s.a
o=x.a
if(p===1281)J.bT(o,2960)
else{J.bi(o,2960)
o=s.b
n=s.c
J.fH(x.a,p,o,n)}break
case"cDepthWrite":J.fm(x.a,s)
break
case"cBlendEquation":H.a6(s,"$isdV")
p=s.a
o=x.a
if(p===1281)J.bT(o,3042)
else{J.bi(o,3042)
o=s.b
n=s.c
J.fd(x.a,o,n)
J.fc(x.a,p)}break}++u
break}}m=P.di(0,0,0,Date.now()-new P.bn(z,!1).a,0,0)
""+u
m.k(0)},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fQ(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bk()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x){w=b[x]
this.df(w.a,w.bg())}y=this.Q
y.ab(0)
for(v=a.cy,u=new H.aa(v,v.r,null,null,[H.D(v,0)]),u.c=v.e;u.q();)y.V(0,u.d)
t=this.dc()
if(t.length!==0)P.am("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
y=a.d
v=a.e
J.bh(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.d3()
u=a.Q
r=a.z
if(s)J.fb(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.fq(q,v,y,u,0,r)
else J.fp(q,v,y,u,0)}else{u=z.a
if(r>1)J.fo(u,v,0,y,r)
else J.fn(u,v,0,y)}if(s)J.fs(z.a)},
be:function(a,b){return this.d_(a,b,null)},
p:{
dK:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.V(null,null,null,P.m)
y=c.b
x=d.b
w=c.f
v=J.fj(b.a)
u=G.ee(b.a,35633,y)
J.cz(b.a,v,u)
t=G.ee(b.a,35632,x)
J.cz(b.a,v,t)
if(w.length>0)J.fL(b.a,v,w,35980)
J.fE(b.a,v)
if(J.fD(b.a,v,35714)!==!0)H.J(J.fC(b.a,v))
z=new G.iu(b,c,d,v,P.c9(c.c,null),P.l(),P.l(),z,null,a,!1,!0)
z.d6(a,b,c,d)
return z}}},
y:{"^":"c;a,b,c",
bf:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
dM:{"^":"c;a,b,c,d,e,f,r,x",
b9:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.G)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.c.au(y)},
E:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)y.push(a[x])
C.c.au(y)},
D:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.au(z)},
bh:function(a,b){this.b=this.ay(!0,a,b)},
ax:function(a){return this.bh(a,null)},
d7:function(a,b){this.b=this.ay(!1,a,b)},
L:function(a){return this.d7(a,null)},
ay:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
s=$.$get$X().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(c!=null)C.c.P(w,c)
if(a)w.push("void main(void) {")
C.c.P(w,b)
if(a)w.push("}")
return C.c.ae(w,"\n")},
p:{
H:function(a){return new G.dM(a,null,[],[],[],[],0,P.l())}}},
iD:{"^":"bw;"},
iS:{"^":"c;a,b,c,d,e,f,r"},
ch:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iU:{"^":"ch;f,r,x,a,b,c,d,e",
da:function(a,b,c,d,e,f){var z,y,x,w
z=this.d
y=this.c
J.bg(z.a,y,this.b)
J.fJ(z.a,3553,1,this.x,this.f,this.r)
x=this.e
w=x.e
if(w!==1)J.fI(z.a,y,34046,w)
w=x.r
J.bj(z.a,y,10240,w)
w=x.f
J.bj(z.a,y,10241,w)
if(x.b){J.bj(z.a,y,10242,33071)
J.bj(z.a,y,10243,33071)}x.c
J.fB(z.a)
J.bg(z.a,y,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.b(this.f)+" X "+H.b(this.r)+"]"},
p:{
e9:function(a,b,c,d,e,f){var z=new G.iU(c,d,e,b,J.fk(a.a),3553,a,f)
z.da(a,b,c,d,e,f)
return z}}}}],["","",,Y,{"^":"",
hy:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.dr(!1,[],[],[],P.l())
z.ai("aTexUV")
z.ai("aNormal")
y=P.l()
x=J.cL(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.dJ("\\s+",!0,!1)
r=P.dJ("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.G)(x),++p){o=J.fF(x[p],s," ")
n=H.lr(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.d(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.d(m,0)
l=m[0]
if(J.E(l,"g")){if(1>=o)return H.d(m,1)
y.i(0,m[1],w.length)}else if(J.E(l,"v")){if(1>=o)return H.d(m,1)
l=P.al(m[1],null)
if(2>=o)return H.d(m,2)
k=P.al(m[2],null)
if(3>=o)return H.d(m,3)
o=P.al(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.w(j))}else if(J.E(l,"vt")){if(1>=o)return H.d(m,1)
l=P.al(m[1],null)
if(2>=o)return H.d(m,2)
o=P.al(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.C(k))}else if(J.E(l,"vn")){if(1>=o)return H.d(m,1)
l=P.al(m[1],null)
if(2>=o)return H.d(m,2)
k=P.al(m[2],null)
if(3>=o)return H.d(m,3)
o=P.al(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.w(j))}else if(J.E(l,"f")){if(o!==4&&o!==5){H.az("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.cL(m[f],"/")
for(;e.length<3;)e.push("")
d=J.bf(P.cv(e[0],null,null),1)
if(1>=e.length)return H.d(e,1)
if(J.E(e[1],""))c=-1
else{if(1>=e.length)return H.d(e,1)
c=J.bf(P.cv(e[1],null,null),1)}if(2>=e.length)return H.d(e,2)
if(J.E(e[2],""))b=-1
else{if(2>=e.length)return H.d(e,2)
b=J.bf(P.cv(e[2],null,null),1)}o=w.length
if(J.aC(d,o)){if(d>>>0!==d||d>=o)return H.d(w,d)
i.push(w[d])}else i.push(new T.w(new Float32Array(3)))
o=J.o(c)
if(!o.C(c,-1)&&o.Y(c,u.length)){if(c>>>0!==c||c>=u.length)return H.d(u,c)
g.push(u[c])}else{H.az("problem uv "+f+" "+H.b(c))
g.push(new T.C(new Float32Array(2)))}o=J.o(b)
if(!o.C(b,-1)&&o.Y(b,v.length)){if(b>>>0!==b||b>=v.length)return H.d(v,b)
h.push(v[b])}else{H.az("problem normals "+f+" "+H.b(b))
h.push(new T.w(new Float32Array(3)))}}if(o===4)z.cX(i)
else z.bc(i)
z.bb("aNormal",h)
z.ba("aTexUV",g)}}P.am("loaded ("+P.di(0,0,0,Date.now()-new P.bn(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",iF:{"^":"c;",
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
for(w=0;w<c;++w){v=W.jj("span",null)
y=J.cG(v)
J.e(y).sG(y,"1px")
C.n.sF(y,""+d+"px")
C.n.se7(y,"left")
x=C.n.bo(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},iG:{"^":"iF;e,f,a,b,c,d",
de:function(a,b){var z,y,x,w,v;++this.e
if(J.aC(J.bf(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eA(z,2)+" fps"
y=this.c;(y&&C.D).cJ(y,b)
x=C.b.a5(30*C.t.dX(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cG(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dd:function(a){return this.de(a,"")}}}],["","",,V,{"^":""}],["","",,D,{"^":"",
hS:function(a){var z,y
z=new P.N(0,$.r,null,[null])
y=new XMLHttpRequest()
C.E.en(y,"GET",a)
W.aj(y,"loadend",new D.hT(new P.ed(z,[null]),y),!1,W.n9)
y.send("")
return z},
hT:{"^":"f:0;a,b",
$1:function(a){this.a.am(0,W.kG(this.b.response))}},
hM:{"^":"c;a,b,c",
d4:function(a){var z
a=document
z=W.bt
W.aj(a,"keydown",new D.hO(this),!1,z)
W.aj(a,"keyup",new D.hP(this),!1,z)},
p:{
hN:function(a){var z=P.I
z=new D.hM(P.V(null,null,null,z),P.V(null,null,null,z),P.V(null,null,null,z))
z.d4(a)
return z}}},
hO:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.V(0,J.cH(a))
z.b.V(0,a.which)}},
hP:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.ck(0,J.cH(a))
z.c.V(0,a.which)}},
i0:{"^":"c;a,b,c,d,e,f,r,x",
d5:function(a){var z,y
z=J.e(a)
y=z.gcg(a)
W.aj(y.a,y.b,new D.i2(this),!1,H.D(y,0))
y=z.gcf(a)
W.aj(y.a,y.b,new D.i3(this),!1,H.D(y,0))
y=z.gci(a)
W.aj(y.a,y.b,new D.i4(this),!1,H.D(y,0))
z=z.gcj(a)
W.aj(z.a,z.b,new D.i5(this),!1,H.D(z,0))},
p:{
i1:function(a){var z=P.I
z=new D.i0(P.V(null,null,null,z),P.V(null,null,null,z),P.V(null,null,null,z),0,0,0,0,0)
z.d5(a)
return z}}},
i2:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ar(a)
y=this.a
y.r=z.gce(a).a
y.x=z.gce(a).b
y.d=z.gek(a).a
y.e=a.movementY}},
i3:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.ar(a)
P.am("BUTTON "+H.b(z.gbQ(a)))
z=this.a
z.a.V(0,a.button)
z.b.V(0,a.button)}},
i4:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ar(a)
y=this.a
y.a.ck(0,z.gbQ(a))
y.c.V(0,a.button)}},
i5:{"^":"f:17;a",
$1:function(a){var z=J.e(a)
z.ar(a)
this.a.f=z.ge3(a)}},
ic:{"^":"fY;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bd:function(a){var z,y
z=C.P.e8(a,0,new A.l8())
if(typeof z!=="number")return H.P(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l8:{"^":"f:18;",
$2:function(a,b){var z,y
z=J.aB(a,J.a7(b))
if(typeof z!=="number")return H.P(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",b1:{"^":"c;bs:a<",
A:function(a){var z,y
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
if(b>=9)return H.d(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gw:function(a){return A.bd(this.a)},
X:function(a){var z,y,x
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
return new T.w(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.b1(z)
y.A(this)
x=b.gbs()
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
K:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.b1(z)
y.A(this)
x=b.gbs()
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
a1:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b},
p:{
aO:function(a,b,c,d,e,f,g,h,i){var z=new Float32Array(9)
z[8]=i
z[7]=h
z[6]=g
z[5]=f
z[4]=e
z[3]=d
z[2]=c
z[1]=b
z[0]=a
return new T.b1(z)}}},ab:{"^":"c;bt:a<",
A:function(a){var z,y
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ab){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bd(this.a)},
X:function(a){var z,y,x
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
return new T.a2(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.ab(z)
y.A(this)
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
z[9]=C.a.l(z[9],x.h(0,9))
z[10]=C.a.l(z[10],x.h(0,10))
z[11]=C.a.l(z[11],x.h(0,11))
z[12]=C.a.l(z[12],x.h(0,12))
z[13]=C.a.l(z[13],x.h(0,13))
z[14]=C.a.l(z[14],x.h(0,14))
z[15]=C.a.l(z[15],x.h(0,15))
return y},
K:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.ab(z)
y.A(this)
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
z[9]=z[9]-x[9]
z[10]=z[10]-x[10]
z[11]=z[11]-x[11]
z[12]=z[12]-x[12]
z[13]=z[13]-x[13]
z[14]=z[14]-x[14]
z[15]=z[15]-x[15]
return y},
ag:function(){var z=this.a
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
el:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},C:{"^":"c;bC:a<",
J:function(a,b){var z=this.a
z[0]=a
z[1]=b},
A:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bd(this.a)},
K:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.C(z)
y.A(this)
x=b.gbC()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.C(z)
y.A(this)
x=b.gbC()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
a0:function(a,b){var z=new T.C(new Float32Array(2))
z.A(this)
z.a1(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a1:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
ac:function(a){var z=new T.C(new Float32Array(2))
z.A(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},w:{"^":"c;bD:a<",
U:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.w){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bd(this.a)},
K:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.w(z)
y.A(this)
x=b.gbD()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.w(z)
y.A(this)
x=b.gbD()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
a0:function(a,b){return this.cI(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aQ:function(a){var z,y,x,w,v,u
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
aO:function(a){var z,y
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
z=new T.w(new Float32Array(3))
z.U(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
cI:function(a){var z,y
z=new Float32Array(3)
y=new T.w(z)
y.A(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
ac:function(a){var z=new T.w(new Float32Array(3))
z.A(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
p:{
ap:function(a,b,c){var z=new T.w(new Float32Array(3))
z.U(a,b,c)
return z}}},a2:{"^":"c;bE:a<",
A:function(a){var z,y
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
if(b instanceof T.a2){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bd(this.a)},
K:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a2(z)
y.A(this)
x=b.gbE()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a2(z)
y.A(this)
x=b.gbE()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
a0:function(a,b){var z=new T.a2(new Float32Array(4))
z.A(this)
z.a1(0,1/b)
return z},
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
a1:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gas:function(a){return this.a[3]}}}],["","",,U,{"^":"",
cd:function(a,b,c,d){return(b-a)*(0.5+0.5*Math.cos(H.kW(d)))+a},
it:function(a,b){var z,y,x,w
z=$.$get$eI()
y=P.l()
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"none",!1,!0))
y=$.$get$f4()
z=P.l()
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"toon",!1,!0))
z=$.$get$eT()
y=P.l()
x=new T.C(new Float32Array(2))
x.J(0.5,0.5)
y.i(0,"uCenter2",x)
y.i(0,"uPointSize",10)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"hexalate-10",!1,!0))
y=P.l()
x=new T.C(new Float32Array(2))
x.J(0.5,0.5)
y.i(0,"uCenter2",x)
y.i(0,"uPointSize",20)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"hexalate-20",!1,!0))
y=P.l()
x=new T.C(new Float32Array(2))
x.J(0.5,0.5)
y.i(0,"uCenter2",x)
y.i(0,"uPointSize",10)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"hexalate-varying",!1,!0))
y=$.$get$eL()
z=P.l()
x=new T.C(new Float32Array(2))
x.J(0,0)
z.i(0,"uCenter2",x)
z.i(0,"uScale",0.8)
z.i(0,"uAngle",0.5)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"dot",!1,!0))
z=P.l()
x=new T.C(new Float32Array(2))
x.J(0,0)
z.i(0,"uCenter2",x)
z.i(0,"uScale",0.3)
z.i(0,"uAngle",0.5)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"dot2",!1,!0))
z=$.$get$f5()
y=P.l()
y.i(0,"uScale",0.0009)
y.i(0,"uTime",0)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"tv-distortion",!1,!0))
y=$.$get$eW()
z=P.l()
z.i(0,"uScale",8)
x=new T.C(new Float32Array(2))
x.J(0.5,0.5)
z.i(0,"uCenter2",x)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"kaleidoscope8",!1,!0))
z=P.l()
z.i(0,"uScale",5)
x=new T.C(new Float32Array(2))
x.J(0.5,0.5)
z.i(0,"uCenter2",x)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"kaleidoscope5",!1,!0))
z=$.$get$eX()
y=P.l()
y.i(0,"uPointSize",8)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"lumidots-8",!1,!0))
y=P.l()
y.i(0,"uPointSize",16)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"lumidots-16",!1,!0))
y=P.l()
y.i(0,"uPointSize",16)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"lumidots-varying",!1,!0))
y=$.$get$f2()
z=P.l()
z.i(0,"uPointSize",8)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"square-8",!1,!0))
z=P.l()
z.i(0,"uPointSize",16)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"square-16",!1,!0))
z=P.l()
z.i(0,"uPointSize",16)
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"square-varying",!1,!0))
z=$.$get$f1()
y=P.l()
x=new T.C(new Float32Array(2))
x.J(120,240)
y.i(0,"uRange",x)
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"scanline",!1,!0))
y=$.$get$f6()
z=P.l()
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"water",!1,!0))
z=new G.dM("crosshatchPixelateF",null,[],[],[],[],0,P.l())
z.D(["vTexUV"])
z.E(["uTexture"])
z.b=z.ay(!1,["#define MODE 0","float level1 = 1.0;\nfloat level2 = 0.7;\nfloat level3 = 0.5;\nfloat level4 = 0.3;\n\nfloat dist = 10.0;\nfloat thickness = 0.5;\n\n#if MODE == 0\n// diagonal crosshach\nvec2 slope = vec2(1.0, 1.0);\n#elif MODE == 1\n// regular crosshatch\nvec2 slope = vec2(1.0, 0.0);\n#else\nERROR\n#endif\n\nfloat PixelColor(vec2 pixel, float lum) {\n    if (lum < level1) {\n        // main anti diagonal\n        if (mod(pixel.x * slope.x + pixel.y * slope.y, dist) <= thickness) return 0.0; \n    }  \n  \n    if (lum < level2) { \n        // main diagonal\n        if (mod(pixel.x * slope.y - pixel.y * slope.x, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level3) {\n        // inbetween anti diagonals\n        if (mod(pixel.x * slope.x + pixel.y * slope.y - dist * 0.5, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level4) {\n        // inbetween main diagonals\n        if (mod(pixel.x * slope.y - pixel.y * slope.x - dist * 0.5, dist) <= thickness) return 0.0;\n    } \n    \n    return 1.0;\n}       \n       \nvoid main()  { \n    vec2 pixel = gl_FragCoord.xy;  // this is really pixel + 0.5\n   \n    float lum = dot(vec3(0.2126, 0.7152, 0.0723), \n                    texture(uTexture, vTexUV).rgb);\n    \n    float color = PixelColor(pixel, lum);\n    oFragColor = vec4(vec3(color), 1.0);  \n}      \n\n"],null)
y=P.l()
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"crosshatch",!1,!0))
y=$.$get$eY()
z=P.l()
x=new T.C(new Float32Array(2))
x.J(0.85,0.86)
z.i(0,"uRange",x)
z.i(0,"uColorAlpha",new T.a2(new Float32Array(4)))
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"luminosity-highpass",!1,!0))
z=$.$get$eO()
y=P.l()
y.i(0,"uTexture",b)
U.v(a,z,new G.u(y,"fisheye",!1,!0))
y=$.$get$eN()
z=P.l()
z.i(0,"uTexture",b)
U.v(a,y,new G.u(z,"film",!1,!0))
z=$.$get$eH()
y=P.l()
y.i(0,"uConvolutionMatrix",$.$get$d0())
y.i(0,"uColor",$.$get$d6())
U.v(a,z,new G.u(y,"emboss",!1,!0))
y=P.l()
y.i(0,"uConvolutionMatrix",$.$get$d1())
y.i(0,"uColor",$.$get$d7())
U.v(a,z,new G.u(y,"emboss2",!1,!0))
y=P.l()
y.i(0,"uConvolutionMatrix",$.$get$d2())
y.i(0,"uColor",$.$get$d8())
U.v(a,z,new G.u(y,"engrave",!1,!0))
y=P.l()
y.i(0,"uConvolutionMatrix",$.$get$d3())
y.i(0,"uColor",$.$get$d9())
U.v(a,z,new G.u(y,"sharpen",!1,!0))
y=P.l()
y.i(0,"uConvolutionMatrix",$.$get$d_())
y.i(0,"uColor",$.$get$d5())
U.v(a,z,new G.u(y,"edges",!1,!0))
y=P.l()
y.i(0,"uConvolutionMatrix",$.$get$cZ())
y.i(0,"uColor",$.$get$d4())
U.v(a,z,new G.u(y,"blur",!1,!0))
for(z=$.$get$b0(),y=new H.aa(z,z.r,null,null,[H.D(z,0)]),y.c=z.e;y.q();){w=y.d
z=$.$get$bL();(z&&C.R).ef(z,"beforeend","<option>"+H.b(w)+"</option>",null,null)}},
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z={}
y=document
x=new R.iG(0,0,null,null,null,null)
x.d8(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=w.clientWidth
u=w.clientHeight
y=J.e(w)
y.sG(w,v)
y.sF(w,u)
t=new G.h_(null,w)
y=J.fz(w,"webgl2",P.dz(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
t.a=y
if(y==null)H.J(P.dl('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.b(J.fA(y))
if($.eQ>0)P.am("I: "+s)
J.fg(y,0,0,0,1)
J.bi(y,2929)
y=new Float32Array(3)
s=D.hN(null)
r=D.i1(w)
q=new T.ab(new Float32Array(16))
q.ag()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.ic(15,-45,0.3,0,new T.w(y),-0.02,s,r,q,new T.w(p),new T.w(o),new T.w(n),new T.w(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.ab(new Float32Array(16))
y.ag()
s=new T.ab(new Float32Array(16))
s.ag()
l=new G.id(m,50,1,0.1,2520,y,s,new T.ab(new Float32Array(16)),P.l(),"perspective",!1,!0)
l.bi()
l.cY(v,u)
y=$.$get$dU()
s=G.e9(t,"frame::color",v,u,32856,y)
y=G.e9(t,"frame::depth",v,u,33190,y)
k=new G.dp(t,null,s,y,null)
k.d1(t,s,y,null,!1)
U.it(t,s)
j=G.dK("demo",t,$.$get$eK(),$.$get$eJ())
s=$.$get$b0().h(0,"dot").b
y=new T.w(new Float32Array(3))
y.U(-1,-1,0)
r=new T.w(new Float32Array(3))
r.U(1,-1,0)
q=new T.w(new Float32Array(3))
q.U(1,1,0)
p=new T.w(new Float32Array(3))
p.U(-1,1,0)
o=new T.C(new Float32Array(2))
o.J(0,0)
n=new T.C(new Float32Array(2))
n.J(1,0)
i=new T.C(new Float32Array(2))
i.J(1,1)
h=new T.C(new Float32Array(2))
h.J(0,1)
g=new T.w(new Float32Array(3))
g.U(0,0,1)
f=new G.dr(!1,[],[],[],P.l())
f.ai("aTexUV")
f.bc([y,r,q,p])
f.ba("aTexUV",[o,n,i,h])
f.ai("aNormal")
f.bb("aNormal",[g,g,g,g])
e=G.ds("quad",s,f)
z.a=null
y=P.l()
y.i(0,"cDepthTest",!0)
y.i(0,"cDepthWrite",!0)
y.i(0,"cBlendEquation",$.$get$cT())
y.i(0,"cStencilFunc",$.$get$dO())
y.i(0,"uColor",$.$get$cY())
s=new Float32Array(16)
r=new T.ab(s)
r.ag()
d=Math.cos(1.5707963267948966)
c=Math.sin(1.5707963267948966)
q=s[4]
p=s[8]
o=s[5]
n=s[9]
i=s[6]
h=s[10]
b=s[7]
a=s[11]
a0=-c
s[4]=q*d+p*c
s[5]=o*d+n*c
s[6]=i*d+h*c
s[7]=b*d+a*c
s[8]=q*a0+p*d
s[9]=o*a0+n*d
s[10]=i*a0+h*d
s[11]=b*a0+a*d
y.i(0,"uModelMatrix",r)
z.b=0
P.hs([D.hS("../ct_logo.obj")],null,!1).aT(new U.lk(z,j,new U.lj(z,m,k,v,u,j,l,new G.hW(y,"mat",!1,!0),new G.dp(t,null,null,null,null),e,x)))},
hg:{"^":"c;a,b,c",
d0:function(a,b,c){$.$get$b0().i(0,this.c.a,this)},
p:{
v:function(a,b,c){var z=c.a
z=new U.hg(z,G.dK(z,a,$.$get$eM(),b),c)
z.d0(a,b,c)
return z}}},
lj:{"^":"f:19;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=this.a
y=J.aw(b5)
y.K(b5,z.b)
z.b=y.l(b5,0)
x=this.b
x.go+=0.01
w=x.r1
v=w.a
if(v.u(0,0)||v.u(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.b3()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.b3()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.u(0,37))x.go+=0.03
else if(u.u(0,39))x.go-=0.03
if(u.u(0,38))x.id+=0.03
else if(u.u(0,40))x.id-=0.03
if(u.u(0,33))x.fy*=0.99
else if(u.u(0,34))x.fy*=1.01
if(u.u(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.b3()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.dY(x.id,-1.4707963267948965,1.4707963267948965)
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
l=new T.w(new Float32Array(3))
l.U(0,1,0)
u=x.e
t=u.a
t[0]=p[12]
t[1]=p[13]
t[2]=p[14]
k=u.K(0,s)
k.aQ(0)
j=l.c_(k)
j.aQ(0)
i=k.c_(j)
i.aQ(0)
s=j.aO(u)
t=i.aO(u)
u=k.aO(u)
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
v.c.ab(0)
v.b.ab(0)
w.e=0
w.d=0
w.f=0
w.c.ab(0)
w.b.ab(0)
b3=$.$get$b0().h(0,$.$get$bL().value)
b4=y.a0(b5,1000)
y=$.$get$bL().value
if(y==="tv-distortion")b3.c.d.i(0,"uTime",b4)
else if(y==="hexalate-varying")b3.c.d.i(0,"uPointSize",U.cd(4,30,20,b4))
else if(y==="square-varying")b3.c.d.i(0,"uPointSize",U.cd(4,30,20,b4))
else if(y==="lumidots-varying")b3.c.d.i(0,"uPointSize",U.cd(4,30,20,b4))
else if(y==="water")b3.c.d.i(0,"uTime",J.f7(z.b,1000))
y=this.d
x=this.e
this.c.b8(17664,0,0,y,x)
this.f.be(z.a,[this.r,this.x])
this.y.b8(17664,0,0,y,x)
b3.b.be(this.z,[b3.c])
C.a7.gdQ(window).aT(this)
this.Q.dd(z.b)}},
lk:{"^":"f:20;a,b,c",
$1:function(a){this.a.a=G.ds("",this.b,Y.hy(J.aD(a,0)))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.dt.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.hH.prototype
if(typeof a=="boolean")return J.hG.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.c)return a
return J.bb(a)}
J.l4=function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.c)return a
return J.bb(a)}
J.a5=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.c)return a
return J.bb(a)}
J.av=function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.c)return a
return J.bb(a)}
J.aw=function(a){if(typeof a=="number")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b7.prototype
return a}
J.l5=function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b7.prototype
return a}
J.ba=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b7.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.c)return a
return J.bb(a)}
J.aB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l4(a).l(a,b)}
J.f7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.aw(a).a0(a,b)}
J.E=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).C(a,b)}
J.S=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aw(a).af(a,b)}
J.aC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aw(a).Y(a,b)}
J.bf=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aw(a).K(a,b)}
J.aD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a5(a).h(a,b)}
J.f8=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eV(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.av(a).i(a,b,c)}
J.f9=function(a,b,c,d){return J.e(a).dC(a,b,c,d)}
J.cy=function(a,b){return J.e(a).bF(a,b)}
J.fa=function(a,b,c,d){return J.e(a).bG(a,b,c,d)}
J.cz=function(a,b,c){return J.e(a).bI(a,b,c)}
J.fb=function(a,b){return J.e(a).dS(a,b)}
J.bP=function(a,b,c){return J.e(a).bJ(a,b,c)}
J.bQ=function(a,b,c){return J.e(a).bL(a,b,c)}
J.bg=function(a,b,c){return J.e(a).bM(a,b,c)}
J.bh=function(a,b){return J.e(a).dV(a,b)}
J.fc=function(a,b){return J.e(a).bN(a,b)}
J.fd=function(a,b,c){return J.e(a).bO(a,b,c)}
J.cA=function(a,b,c,d){return J.e(a).bP(a,b,c,d)}
J.fe=function(a,b){return J.e(a).bR(a,b)}
J.ff=function(a,b){return J.av(a).bS(a,b)}
J.fg=function(a,b,c,d,e){return J.e(a).bT(a,b,c,d,e)}
J.cB=function(a,b){return J.ba(a).aN(a,b)}
J.fh=function(a,b){return J.l5(a).W(a,b)}
J.bR=function(a,b,c){return J.a5(a).e0(a,b,c)}
J.bS=function(a){return J.e(a).bV(a)}
J.fi=function(a){return J.e(a).bW(a)}
J.fj=function(a){return J.e(a).bX(a)}
J.fk=function(a){return J.e(a).bZ(a)}
J.fl=function(a){return J.e(a).e2(a)}
J.fm=function(a,b){return J.e(a).c0(a,b)}
J.bT=function(a,b){return J.e(a).c1(a,b)}
J.fn=function(a,b,c,d){return J.e(a).c2(a,b,c,d)}
J.fo=function(a,b,c,d,e){return J.e(a).e4(a,b,c,d,e)}
J.fp=function(a,b,c,d,e){return J.e(a).c3(a,b,c,d,e)}
J.fq=function(a,b,c,d,e,f){return J.e(a).e5(a,b,c,d,e,f)}
J.cC=function(a,b){return J.av(a).t(a,b)}
J.bi=function(a,b){return J.e(a).c4(a,b)}
J.fr=function(a,b){return J.e(a).c5(a,b)}
J.fs=function(a){return J.e(a).e6(a)}
J.cD=function(a,b){return J.av(a).v(a,b)}
J.cE=function(a,b,c,d,e,f){return J.e(a).c8(a,b,c,d,e,f)}
J.cF=function(a){return J.e(a).gdR(a)}
J.aE=function(a){return J.e(a).gR(a)}
J.a7=function(a){return J.o(a).gw(a)}
J.aY=function(a){return J.av(a).gN(a)}
J.a8=function(a){return J.a5(a).gj(a)}
J.ft=function(a){return J.e(a).gem(a)}
J.fu=function(a){return J.e(a).gaR(a)}
J.cG=function(a){return J.e(a).gZ(a)}
J.fv=function(a){return J.e(a).gev(a)}
J.fw=function(a){return J.e(a).gcp(a)}
J.fx=function(a){return J.e(a).gas(a)}
J.cH=function(a){return J.e(a).geF(a)}
J.bU=function(a){return J.e(a).gm(a)}
J.bV=function(a){return J.e(a).gn(a)}
J.cI=function(a){return J.e(a).gH(a)}
J.fy=function(a){return J.e(a).aX(a)}
J.fz=function(a,b,c){return J.e(a).cH(a,b,c)}
J.fA=function(a){return J.e(a).at(a)}
J.fB=function(a){return J.e(a).aY(a)}
J.fC=function(a,b){return J.e(a).aZ(a,b)}
J.fD=function(a,b,c){return J.e(a).b_(a,b,c)}
J.cJ=function(a,b,c){return J.e(a).b2(a,b,c)}
J.fE=function(a,b){return J.e(a).cc(a,b)}
J.cK=function(a){return J.av(a).ep(a)}
J.fF=function(a,b,c){return J.ba(a).eq(a,b,c)}
J.fG=function(a,b){return J.e(a).sao(a,b)}
J.cL=function(a,b){return J.ba(a).cN(a,b)}
J.fH=function(a,b,c,d){return J.e(a).b7(a,b,c,d)}
J.fI=function(a,b,c,d){return J.e(a).cm(a,b,c,d)}
J.bj=function(a,b,c,d){return J.e(a).cn(a,b,c,d)}
J.fJ=function(a,b,c,d,e,f){return J.e(a).ew(a,b,c,d,e,f)}
J.cM=function(a){return J.aw(a).ex(a)}
J.fK=function(a){return J.ba(a).ez(a)}
J.aF=function(a){return J.o(a).k(a)}
J.fL=function(a,b,c,d){return J.e(a).eB(a,b,c,d)}
J.fM=function(a){return J.ba(a).eC(a)}
J.fN=function(a,b,c){return J.e(a).cq(a,b,c)}
J.fO=function(a,b,c){return J.e(a).cr(a,b,c)}
J.bW=function(a,b,c){return J.e(a).cs(a,b,c)}
J.fP=function(a,b,c){return J.e(a).ct(a,b,c)}
J.cN=function(a,b,c){return J.e(a).cu(a,b,c)}
J.cO=function(a,b,c){return J.e(a).cv(a,b,c)}
J.cP=function(a,b,c){return J.e(a).cw(a,b,c)}
J.cQ=function(a,b,c,d){return J.e(a).cz(a,b,c,d)}
J.cR=function(a,b,c,d){return J.e(a).cA(a,b,c,d)}
J.fQ=function(a,b){return J.e(a).cC(a,b)}
J.fR=function(a,b,c){return J.e(a).eD(a,b,c)}
J.fS=function(a,b,c,d,e,f,g){return J.e(a).cD(a,b,c,d,e,f,g)}
J.fT=function(a,b,c,d,e){return J.e(a).cF(a,b,c,d,e)}
I.ay=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bX.prototype
C.n=W.h5.prototype
C.D=W.hb.prototype
C.E=W.hw.prototype
C.F=J.i.prototype
C.c=J.aJ.prototype
C.t=J.dt.prototype
C.b=J.du.prototype
C.a=J.aL.prototype
C.i=J.aM.prototype
C.M=J.aN.prototype
C.P=H.i6.prototype
C.Q=W.i8.prototype
C.x=J.ie.prototype
C.R=W.ce.prototype
C.C=W.iQ.prototype
C.q=J.b7.prototype
C.a7=W.iZ.prototype
C.d=new P.jY()
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
C.N=H.B(I.ay(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.O=I.ay(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.ay([])
C.o=H.B(I.ay(["bind","if","ref","repeat","syntax"]),[P.m])
C.p=H.B(I.ay(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.S=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.T=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
C.y=new G.y("vec3","vertex coordinates",0)
C.U=new G.y("vec3","vertex binormals",0)
C.z=new G.y("vec4","for wireframe",0)
C.V=new G.y("vec4","per vertex color",0)
C.W=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.Y=new G.y("mat4","",4)
C.X=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.Z=new G.y("float","",4)
C.a_=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a0=new G.y("float","for bump maps",0)
C.a1=new G.y("vec2","texture uvs",0)
C.a2=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.a3=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.a4=new G.y("vec3","vertex normals",0)
C.a5=new G.y("sampler2DShadow","",0)
C.A=new G.y("vec3","per vertex color",0)
C.B=new G.y("mat3","",0)
C.a6=new G.y("vec3","vertex tangents",0)
$.Z=0
$.aG=null
$.cU=null
$.eS=null
$.eD=null
$.f0=null
$.bK=null
$.bM=null
$.cu=null
$.ar=null
$.aS=null
$.aT=null
$.co=!1
$.r=C.d
$.a9=null
$.c1=null
$.dk=null
$.dj=null
$.df=null
$.de=null
$.dd=null
$.dc=null
$.eQ=0
$.kQ="\nvec3 config = vec3(1.0 / 80.0, 6.0, 3.0);\n// vec3 config = vec3(0.2, 2.0, 2.0);\n\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(vec2 coords, float dx, float dy) {\n return texture(uTexture, coords + vec2(dx, dy)).rgb;\n}\n\n// returns pixel color using a strange kernel\n\nfloat IsEdge(vec2 coords, vec2 dim) {\n  vec2 d = vec2(1.0, 1.0) / dim;\n\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));\n  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));\n  float pix2 = avg3(get_pixel(coords, -d.x, d.y));\n  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));\n\n  float pix5 = avg3(get_pixel(coords, 0.0, d.y));\n  float pix6 = avg3(get_pixel(coords, d.x, -d.y));\n  float pix7 = avg3(get_pixel(coords, d.x, 0.0));\n  float pix8 = avg3(get_pixel(coords, d.x, d.y));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec4 colorOrg = texture(uTexture, vTexUV);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    // find nearest level\n    vHSV =  ceil(vHSV * config) / config;\n    float edg = IsEdge(vTexUV, texdim);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = (edg >= 0.3) ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"
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
I.$lazy(y,x,w)}})(["db","$get$db",function(){return H.eR("_$dart_dartClosure")},"c6","$get$c6",function(){return H.eR("_$dart_js")},"dY","$get$dY",function(){return H.a1(H.bG({
toString:function(){return"$receiver$"}}))},"dZ","$get$dZ",function(){return H.a1(H.bG({$method$:null,
toString:function(){return"$receiver$"}}))},"e_","$get$e_",function(){return H.a1(H.bG(null))},"e0","$get$e0",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e4","$get$e4",function(){return H.a1(H.bG(void 0))},"e5","$get$e5",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e2","$get$e2",function(){return H.a1(H.e3(null))},"e1","$get$e1",function(){return H.a1(function(){try{null.$method$}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.a1(H.e3(void 0))},"e6","$get$e6",function(){return H.a1(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cj","$get$cj",function(){return P.j4()},"dq","$get$dq",function(){return P.jq(null,P.b2)},"aU","$get$aU",function(){return[]},"da","$get$da",function(){return{}},"ej","$get$ej",function(){return P.c9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cl","$get$cl",function(){return P.l()},"dO","$get$dO",function(){return new G.dW(1281,0,4294967295)},"cT","$get$cT",function(){return new G.dV(1281,1281,1281)},"X","$get$X",function(){return P.dz(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dU","$get$dU",function(){var z=new G.iS(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"cY","$get$cY",function(){return T.ap(0.8,0.8,0.8)},"eM","$get$eM",function(){var z=G.H("uv-passthru")
z.b9(["aPosition","aTexUV"])
z.D(["vTexUV"])
z.ax(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"eI","$get$eI",function(){var z=G.H("copyF")
z.D(["vTexUV"])
z.E(["uTexture"])
z.ax(["oFragColor = texture(uTexture, vTexUV);"])
return z},"f4","$get$f4",function(){var z=G.H("ToonF")
z.D(["vTexUV"])
z.E(["uTexture"])
z.L(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.kQ])
return z},"eT","$get$eT",function(){var z=G.H("HexPixelateF")
z.D(["vTexUV"])
z.E(["uCenter2","uPointSize","uTexture"])
z.L(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v, vec2 texdim) {\n    vec2 p = (v * texdim - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize / texdim + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(vTexUV, texdim);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texture(uTexture, q);\n}\n"])
return z},"eL","$get$eL",function(){var z=G.H("DotF")
z.D(["vTexUV"])
z.E(["uCenter2","uScale","uAngle","uTexture"])
z.L(["float pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texture(uTexture, vTexUV );\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n     vec2 tex = vTexUV* texdim - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"])
return z},"f5","$get$f5",function(){var z=G.H("DotF")
z.D(["vTexUV"])
z.E(["uScale","uTime","uTexture"])
z.L(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec3 d = rgbDistortion(vTexUV, uScale, uTime);\n      float x = vTexUV.x;\n      float y = vTexUV.y;\n\n\t\t\tfloat r = texture(uTexture, vec2(x + d.r, y) ).r;\n\t\t\tfloat g = texture(uTexture, vec2(x + d.g, y) ).g;\n\t\t\tfloat b = texture(uTexture, vec2(x + d.b, y) ).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"])
return z},"eW","$get$eW",function(){var z=G.H("KaleidoscopeF")
z.D(["vTexUV"])
z.E(["uScale","uCenter2","uTexture"])
z.L(["vec2 kaleidoscope( vec2 uv, float n) {\n   float PI = 3.1415926;\n    float angle = PI / n;\n    float r = length(uv);\n\t  float a = atan( uv.y, uv.x ) / angle;\n\t  a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;\n\treturn vec2( cos( a ), sin( a ) ) * r;\n}\n\nvoid main() {\n    vec2 uv = kaleidoscope(vTexUV - uCenter2, uScale);\n    oFragColor = texture(uTexture, uv + uCenter2);\n}\n"])
return z},"eX","$get$eX",function(){var z=G.H("LumidotsF")
z.D(["vTexUV"])
z.E(["uPointSize","uTexture"])
z.L(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texture(uTexture, center / texdim).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"])
return z},"f2","$get$f2",function(){var z=G.H("SquarePixelateF")
z.D(["vTexUV"])
z.E(["uPointSize","uTexture"])
z.L(["void main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = vTexUV * texdim;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    oFragColor = texture(uTexture, center / texdim);\n}\n"])
return z},"eY","$get$eY",function(){var z=G.H("LuminosityHighPassF")
z.D(["vTexUV"])
z.E(["uRange","uColorAlpha","uTexture"])
z.L(["\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n"])
return z},"eO","$get$eO",function(){var z=G.H("FisheyePassF")
z.D(["vTexUV"])
z.E(["uTexture"])
z.L(["\nfloat fisheye_radius = 1.0;\n      \nvoid main() {\n    float y = (vTexUV.y-0.5) * 2.0; // [0,1] => [-1, 1]\n\n    float angle = asin(y/fisheye_radius); // [-pi/2, pi/2]\n    float arc_length = angle * fisheye_radius;\n\n    float max_arc_length = asin(1.0 / fisheye_radius) * fisheye_radius;\n    float normalized_arc_length = (arc_length + max_arc_length) / \n                                  (max_arc_length * 2.0);\n    // set arc_length as y\n    vec2 uv = vec2(vTexUV.x, normalized_arc_length); \n    oFragColor = texture(uTexture, uv); \n}\n"])
return z},"eN","$get$eN",function(){var z=G.H("FilmPassF")
z.D(["vTexUV"])
z.E(["uTexture"])
z.L(["\nvec2 translation = vec2(0.1, 0.0);\nfloat frame = 1.0;\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat vignette(vec2 uv) {\n    return min(1., 6000. * (uv.x * uv.y * (1. - uv.x) * (1. - uv.y) - pow(.2, 4.)));\n}\n\nfloat verticalNoise(vec2 uv) {\n    return rand(vec2(uv.x * 0.3242 + 1.4839, 1.));\n}\n\nfloat randomLines(vec2 uv, float a, float b, float c, float d) {\n    float discrete = floor(frame / 4.);\n    return step(0.0002 + 0.0005 * sin(discrete / a),\n            abs(uv.x - b + 0.05 * sin(discrete / c) * cos(discrete / d)));\n}\n\nvec3 scene(vec2 uv) {\n    vec3 color = texture(uTexture, uv).rgb;\n    color += 0.1;\n    color *= vignette(uv);\n    color *= 0.9 + 0.1 * rand(uv);\n    color *= 0.95 + 0.05 * verticalNoise(vTexUV + floor(frame / 4.));\n    color = 0.5 * color + color * 0.5 * randomLines(uv, 28., 0.7, 33., 58.);\n    color = color * 0.8 + color * 0.2 * randomLines(uv, 47., 0.78, 61., 27.);\n    color = color * 0.7 + color * 0.3 * randomLines(uv, 31., 0.28, 79., 43.);\n    color = pow(max(vec3(0.),color), vec3(1.5));\n    color *= 0.8 + 0.4 * rand(vec2(floor(frame / 4.), 0.2));\n    return color;\n}\n\nvoid main() {\n    vec2 uv = vTexUV;\n    uv += translation;\n    uv = vec2(vTexUV.x, mod(uv.y, 1.));\n    oFragColor = vec4(scene(uv), 1.);\n}\n"])
return z},"d0","$get$d0",function(){return T.aO(-1,0,-1,0,4,0,-1,0,-1)},"d6","$get$d6",function(){return T.ap(0.5,0.5,0.5)},"d1","$get$d1",function(){return T.aO(2,0,0,0,-1,0,0,0,-1)},"d7","$get$d7",function(){return T.ap(0.5,0.5,0.5)},"d2","$get$d2",function(){return T.aO(-2,0,0,0,2,0,0,0,0)},"d8","$get$d8",function(){return T.ap(0.37,0.37,0.37)},"d3","$get$d3",function(){var z=T.aO(0,-2,0,-2,11,-2,0,-2,0)
z.a1(0,0.333)
return z},"d9","$get$d9",function(){return T.ap(0,0,0)},"d_","$get$d_",function(){return T.aO(-1,-1,-1,-1,8,-1,-1,-1,-1)},"d5","$get$d5",function(){return T.ap(0,0,0)},"cZ","$get$cZ",function(){var z=T.aO(1,2,1,2,4,2,1,2,1)
z.a1(0,0.0625)
return z},"d4","$get$d4",function(){return T.ap(0,0,0)},"eH","$get$eH",function(){var z=G.H("Convolution3x3F")
z.D(["vTexUV"])
z.E(["uTexture","uColor","uConvolutionMatrix"])
z.L(["void main() {\n    mat3 m = uConvolutionMatrix;\n    vec2 d = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texture(uTexture, vTexUV + d * vec2(x, y)).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n\n"])
return z},"f1","$get$f1",function(){var z=G.H("ScanlinePixelateF")
z.D(["vTexUV"])
z.E(["uTexture","uRange"])
z.L(["      \n// const vec3 comp = vec3(0.05, 0.15, 0.95);\nconst vec3 comp = vec3(0.1, 0.30, 0.85);\n\nvoid main() {\n    // number scan lines: texture height * \n    vec2 sine_coord = uRange * 2.0 * 3.1415;\n                        \n    sine_coord.x = 0.0;\n    vec3 color =  texture(uTexture, vTexUV).xyz;\n    float m = comp.z + \n              dot(comp.xy * sin(vTexUV * sine_coord), vec2(1.0, 1.0));\n    oFragColor = vec4(color * m, 1.0);\n}\n"])
return z},"f6","$get$f6",function(){var z=G.H("WaterPixelateF")
z.D(["vTexUV"])
z.E(["uTexture","uTime"])
z.L(["float wave(vec2 pos, float srcX, float srcY, float t) {\n   float dist = 300.0 * length(pos - vec2(srcX, srcY));\n   return sin(dist - 0.15 * t);\n}\n\nvoid main() {\n    vec3 color =  texture(uTexture, vTexUV).xyz;\n    float t =  uTime * 50.0;\n    float res = 0.0;\n    res += wave(vTexUV, 0.6, 0.7, t);\n    res += wave(vTexUV, 0.9, 0.9, t);\n    res += wave(vTexUV, -0.6, 0.3, t);\n    res += wave(vTexUV, 0.1, 0.4, t);\n    // res += wave(vTexUV, 0.1, 0.4, t);\n    res += wave(vTexUV, 0.5, 0.5, t);\n    res += wave(vTexUV, -1.0, 1.4, t);\n    oFragColor = vec4(color * (0.9 + 0.012 * res), 1.0);\n}\n"])
return z},"eK","$get$eK",function(){var z=G.H("FixedVertexColorV")
z.b9(["aPosition"])
z.E(["uPerspectiveViewMatrix","uModelMatrix"])
z.D(["vColor"])
z.bh(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"eJ","$get$eJ",function(){var z=G.H("FixedVertexColorF")
z.D(["vColor"])
z.ax(["oFragColor = vec4( vColor, 1.0 );"])
return z},"bL","$get$bL",function(){return H.a6(W.l1().querySelector("#effect"),"$isce")},"b0","$get$b0",function(){return P.l()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.a0]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.m,args:[P.I]},{func:1,args:[W.bt]},{func:1,ret:P.cq,args:[W.an,P.m,P.m,W.ck]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aR]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aR]},{func:1,v:true,args:[W.t,W.t]},{func:1,args:[W.b8]},{func:1,args:[P.I,P.c]},{func:1,v:true,args:[P.aW]},{func:1,args:[P.h]},{func:1,ret:P.I,args:[,,]}]
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
if(x==y)H.lt(d||a)
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
Isolate.ay=a.ay
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
if(typeof dartMainRunner==="function")dartMainRunner(U.eZ,[])
else U.eZ([])})})()
//# sourceMappingURL=effects.dart.js.map
