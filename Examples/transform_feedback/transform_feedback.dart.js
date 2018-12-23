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
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
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
b6.$isa=b5
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
var d=supportsDirectProtoAccess&&b2!="a"
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
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cj(this,d,e,f,true,false,a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cl=function(){}
var dart=[["","",,H,{"^":"",lj:{"^":"a;a"}}],["","",,J,{"^":"",
cp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.co==null){H.kg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.ds("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.ct()]
if(v!=null)return v
v=H.km(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.ct(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
f:{"^":"a;",
F:function(a,b){return a===b},
gv:function(a){return H.aU(a)},
k:["ca",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fX:{"^":"f;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isM:1},
d2:{"^":"f;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isD:1},
c3:{"^":"f;",
gv:function(a){return 0},
k:["cc",function(a){return String(a)}]},
hs:{"^":"c3;"},
aX:{"^":"c3;"},
bg:{"^":"c3;",
k:function(a){var z=a[$.ec()]
if(z==null)return this.cc(a)
return"JavaScript function for "+H.e(J.b9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbb:1},
bd:{"^":"f;$ti",
l:function(a,b){H.w(b,H.n(a,0))
if(!!a.fixed$length)H.Q(P.v("add"))
a.push(b)},
I:function(a,b){var z,y
H.y(b,"$isi",[H.n(a,0)],"$asi")
if(!!a.fixed$length)H.Q(P.v("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.P)(b),++y)a.push(b[y])},
aa:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
bg:function(a,b){var z,y
H.k(b,{func:1,ret:P.M,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.ao(a))}return!1},
c4:function(a,b){if(!!a.immutable$list)H.Q(P.v("sort"))
H.hR(a,J.jQ(),H.n(a,0))},
ae:function(a){return this.c4(a,null)},
dt:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.af(a[z],b))return z
return-1},
ds:function(a,b){return this.dt(a,b,0)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.af(a[z],b))return!0
return!1},
k:function(a){return P.c1(a,"[","]")},
gB:function(a){return new J.fe(a,a.length,0,[H.n(a,0)])},
gv:function(a){return H.aU(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Q(P.v("set length"))
if(b<0)throw H.b(P.bh(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bl(a,b))
return a[b]},
i:function(a,b,c){H.w(c,H.n(a,0))
if(!!a.immutable$list)H.Q(P.v("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bl(a,b))
a[b]=c},
$isi:1,
$isd:1,
p:{
fW:function(a,b){return J.c2(H.q(a,[b]))},
c2:function(a){H.bn(a)
a.fixed$length=Array
return a},
lh:[function(a,b){return J.eE(H.e6(a,"$isR"),H.e6(b,"$isR"))},"$2","jQ",8,0,29]}},
li:{"^":"bd;$ti"},
fe:{"^":"a;a,b,c,0d,$ti",
sb6:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.P(z))
x=this.c
if(x>=y){this.sb6(null)
return!1}this.sb6(z[x]);++this.c
return!0},
$isaO:1},
be:{"^":"f;",
K:function(a,b){var z
H.cq(b)
if(typeof b!=="number")throw H.b(H.aF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga9(b)
if(this.ga9(a)===z)return 0
if(this.ga9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga9:function(a){return a===0?1/a<0:a<0},
bM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.v(""+a+".toInt()"))},
d9:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.v(""+a+".ceil()"))},
da:function(a,b,c){if(this.K(b,c)>0)throw H.b(H.aF(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dK:function(a,b){var z
if(b>20)throw H.b(P.bh(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga9(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
C:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.v("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bc:function(a,b){var z
if(a>0)z=this.cV(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cV:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.b(H.aF(b))
return a>b},
$isR:1,
$asR:function(){return[P.C]},
$isa1:1,
$isC:1},
d1:{"^":"be;",$isG:1},
d0:{"^":"be;"},
bf:{"^":"f;",
b2:function(a,b){if(b>=a.length)throw H.b(H.bl(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.r(b)
if(typeof b!=="string")throw H.b(P.cJ(b,null,null))
return a+b},
c6:function(a,b,c){var z
if(c>a.length)throw H.b(P.bh(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c5:function(a,b){return this.c6(a,b,0)},
c9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bC(b,null,null))
if(b>c)throw H.b(P.bC(b,null,null))
if(c>a.length)throw H.b(P.bC(c,null,null))
return a.substring(b,c)},
c8:function(a,b){return this.c9(a,b,null)},
dJ:function(a){return a.toLowerCase()},
dc:function(a,b,c){if(c>a.length)throw H.b(P.bh(c,0,a.length,null,null))
return H.ku(a,b,c)},
K:function(a,b){var z
H.r(b)
if(typeof b!=="string")throw H.b(H.aF(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isR:1,
$asR:function(){return[P.c]},
$ishq:1,
$isc:1}}],["","",,H,{"^":"",
fU:function(){return new P.c9("No element")},
fV:function(){return new P.c9("Too many elements")},
hR:function(a,b,c){H.y(a,"$isd",[c],"$asd")
H.k(b,{func:1,ret:P.G,args:[c,c]})
H.bi(a,0,J.aJ(a)-1,b,c)},
bi:function(a,b,c,d,e){H.y(a,"$isd",[e],"$asd")
H.k(d,{func:1,ret:P.G,args:[e,e]})
if(c-b<=32)H.hQ(a,b,c,d,e)
else H.hP(a,b,c,d,e)},
hQ:function(a,b,c,d,e){var z,y,x,w,v
H.y(a,"$isd",[e],"$asd")
H.k(d,{func:1,ret:P.G,args:[e,e]})
for(z=b+1,y=J.b3(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a3(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hP:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.y(a,"$isd",[a2],"$asd")
H.k(a1,{func:1,ret:P.G,args:[a2,a2]})
z=C.b.C(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.C(b+a0,2)
v=w-z
u=w+z
t=J.b3(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a3(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a3(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a3(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a3(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a3(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a3(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a3(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a3(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a3(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.af(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a0()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.P()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=h
m=g
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.a0()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a0()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.i(a,b,t.h(a,c))
t.i(a,c,r)
c=l+1
t.i(a,a0,t.h(a,c))
t.i(a,c,p)
H.bi(a,b,m-2,a1,a2)
H.bi(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.af(a1.$2(t.h(a,m),r),0);)++m
for(;J.af(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a0()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bi(a,m,l,a1,a2)}else H.bi(a,m,l,a1,a2)},
cT:{"^":"i;"},
by:{"^":"cT;$ti",
gB:function(a){return new H.d6(this,this.gj(this),0,[H.cm(this,"by",0)])},
aC:function(a,b){return this.cb(0,H.k(b,{func:1,ret:P.M,args:[H.cm(this,"by",0)]}))}},
d6:{"^":"a;a,b,c,0d,$ti",
saX:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b3(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.ao(z))
w=this.c
if(w>=x){this.saX(null)
return!1}this.saX(y.q(z,w));++this.c
return!0},
$isaO:1},
h7:{"^":"by;a,b,$ti",
gj:function(a){return J.aJ(this.a)},
q:function(a,b){return this.b.$1(J.eQ(this.a,b))},
$asby:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
du:{"^":"i;a,b,$ti",
gB:function(a){return new H.ic(J.br(this.a),this.b,this.$ti)}},
ic:{"^":"aO;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bw:{"^":"a;$ti"}}],["","",,H,{"^":"",
aI:function(a){var z,y
z=H.r(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k8:function(a){return init.types[H.K(a)]},
kk:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.z(a).$isu},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b9(a)
if(typeof z!=="string")throw H.b(H.aF(a))
return z},
aU:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hB:function(a,b){var z,y
if(typeof a!=="string")H.Q(H.aF(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.o(z,3)
y=H.r(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
aV:function(a){return H.ht(a)+H.ch(H.ab(a),0,null)},
ht:function(a){var z,y,x,w,v,u,t,s,r
z=J.z(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isaX){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aI(w.length>1&&C.i.b2(w,0)===36?C.i.c8(w,1):w)},
au:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hA:function(a){var z=H.au(a).getFullYear()+0
return z},
hy:function(a){var z=H.au(a).getMonth()+1
return z},
hu:function(a){var z=H.au(a).getDate()+0
return z},
hv:function(a){var z=H.au(a).getHours()+0
return z},
hx:function(a){var z=H.au(a).getMinutes()+0
return z},
hz:function(a){var z=H.au(a).getSeconds()+0
return z},
hw:function(a){var z=H.au(a).getMilliseconds()+0
return z},
ac:function(a){throw H.b(H.aF(a))},
o:function(a,b){if(a==null)J.aJ(a)
throw H.b(H.bl(a,b))},
bl:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.K(J.aJ(a))
if(!(b<0)){if(typeof z!=="number")return H.ac(z)
y=b>=z}else y=!0
if(y)return P.B(b,a,"index",null,z)
return P.bC(b,"index",null)},
aF:function(a){return new P.an(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.de()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e9})
z.name=""}else z.toString=H.e9
return z},
e9:function(){return J.b9(this.dartException)},
Q:function(a){throw H.b(a)},
P:function(a){throw H.b(P.ao(a))},
a2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bc(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c4(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dd(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ee()
u=$.ef()
t=$.eg()
s=$.eh()
r=$.ek()
q=$.el()
p=$.ej()
$.ei()
o=$.en()
n=$.em()
m=v.J(y)
if(m!=null)return z.$1(H.c4(H.r(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.c4(H.r(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dd(H.r(y),m))}}return z.$1(new H.i9(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.di()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.di()
return a},
b5:function(a){var z
if(a==null)return new H.dK(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dK(a)},
k2:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kj:function(a,b,c,d,e,f){H.h(a,"$isbb")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cW("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.K(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kj)
a.$identity=z
return z},
fr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.z(d).$isd){z.$reflectionInfo=d
x=H.hG(z).r}else x=d
w=e?Object.create(new H.hT().constructor.prototype):Object.create(new H.bV(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a4
if(typeof u!=="number")return u.E()
$.a4=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cN(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k8,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cM:H.bW
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cN(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fo:function(a,b,c,d){var z=H.bW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cN:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fq(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fo(y,!w,z,b)
if(y===0){w=$.a4
if(typeof w!=="number")return w.E()
$.a4=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aK
if(v==null){v=H.bt("self")
$.aK=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a4
if(typeof w!=="number")return w.E()
$.a4=w+1
t+=w
w="return function("+t+"){return this."
v=$.aK
if(v==null){v=H.bt("self")
$.aK=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fp:function(a,b,c,d){var z,y
z=H.bW
y=H.cM
switch(b?-1:a){case 0:throw H.b(H.hK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fq:function(a,b){var z,y,x,w,v,u,t,s
z=$.aK
if(z==null){z=H.bt("self")
$.aK=z}y=$.cL
if(y==null){y=H.bt("receiver")
$.cL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fp(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a4
if(typeof y!=="number")return y.E()
$.a4=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a4
if(typeof y!=="number")return y.E()
$.a4=y+1
return new Function(z+y+"}")()},
cj:function(a,b,c,d,e,f,g){return H.fr(a,b,H.K(c),d,!!e,!!f,g)},
r:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a_(a,"String"))},
e_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a_(a,"double"))},
cq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a_(a,"num"))},
bL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a_(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a_(a,"int"))},
cs:function(a,b){throw H.b(H.a_(a,H.aI(H.r(b).substring(3))))},
ks:function(a,b){throw H.b(H.fm(a,H.aI(H.r(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.z(a)[b])return a
H.cs(a,b)},
ad:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.z(a)[b]
else z=!0
if(z)return a
H.ks(a,b)},
e6:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.z(a)[b])return a
H.cs(a,b)},
bn:function(a){if(a==null)return a
if(!!J.z(a).$isd)return a
throw H.b(H.a_(a,"List<dynamic>"))},
kl:function(a,b){var z
if(a==null)return a
z=J.z(a)
if(!!z.$isd)return a
if(z[b])return a
H.cs(a,b)},
ck:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.K(z)]
else return a.$S()}return},
bm:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ck(J.z(a))
if(z==null)return!1
return H.dQ(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.ce)return a
$.ce=!0
try{if(H.bm(a,b))return a
z=H.bo(b)
y=H.a_(a,z)
throw H.b(y)}finally{$.ce=!1}},
bN:function(a,b){if(a!=null&&!H.ci(a,b))H.Q(H.a_(a,H.bo(b)))
return a},
dU:function(a){var z,y
z=J.z(a)
if(!!z.$isl){y=H.ck(z)
if(y!=null)return H.bo(y)
return"Closure"}return H.aV(a)},
kv:function(a){throw H.b(new P.fx(H.r(a)))},
e2:function(a){return init.getIsolateTag(a)},
q:function(a,b){a.$ti=b
return a},
ab:function(a){if(a==null)return
return a.$ti},
mK:function(a,b,c){return H.aH(a["$as"+H.e(c)],H.ab(b))},
b4:function(a,b,c,d){var z
H.r(c)
H.K(d)
z=H.aH(a["$as"+H.e(c)],H.ab(b))
return z==null?null:z[d]},
cm:function(a,b,c){var z
H.r(b)
H.K(c)
z=H.aH(a["$as"+H.e(b)],H.ab(a))
return z==null?null:z[c]},
n:function(a,b){var z
H.K(b)
z=H.ab(a)
return z==null?null:z[b]},
bo:function(a){return H.al(a,null)},
al:function(a,b){var z,y
H.y(b,"$isd",[P.c],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aI(a[0].builtin$cls)+H.ch(a,1,b)
if(typeof a=="function")return H.aI(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.o(b,y)
return H.e(b[y])}if('func' in a)return H.jP(a,b)
if('futureOr' in a)return"FutureOr<"+H.al("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.c]
H.y(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.q([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.o(b,r)
t=C.i.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.al(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.al(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.al(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.al(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k1(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.r(z[l])
n=n+m+H.al(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ch:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.c],"$asd")
if(a==null)return""
z=new P.cb("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.al(u,c)}return"<"+z.k(0)+">"},
k7:function(a){var z,y,x,w
z=J.z(a)
if(!!z.$isl){y=H.ck(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ab(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
H.r(b)
H.bn(c)
H.r(d)
if(a==null)return!1
z=H.ab(a)
y=J.z(a)
if(y[b]==null)return!1
return H.dX(H.aH(y[d],z),null,c,null)},
y:function(a,b,c,d){H.r(b)
H.bn(c)
H.r(d)
if(a==null)return a
if(H.b1(a,b,c,d))return a
throw H.b(H.a_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aI(b.substring(3))+H.ch(c,0,null),init.mangledGlobalNames)))},
dX:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.U(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.U(a[y],b,c[y],d))return!1
return!0},
mG:function(a,b,c){return a.apply(b,H.aH(J.z(b)["$as"+H.e(c)],H.ab(b)))},
e4:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="D"||a===-1||a===-2||H.e4(z)}return!1},
ci:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="D"||b===-1||b===-2||H.e4(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ci(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bm(a,b)}z=J.z(a).constructor
y=H.ab(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.U(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.ci(a,b))throw H.b(H.a_(a,H.bo(b)))
return a},
U:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.U(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.dQ(a,b,c,d)
if('func' in a)return c.builtin$cls==="bb"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.U("type" in a?a.type:null,b,x,d)
else if(H.U(a,b,x,d))return!0
else{if(!('$is'+"aN" in y.prototype))return!1
w=y.prototype["$as"+"aN"]
v=H.aH(w,z?a.slice(1):null)
return H.U(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dX(H.aH(r,z),b,u,d)},
dQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.U(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.U(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.U(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.U(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kr(m,b,l,d)},
kr:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.U(c[w],d,a[w],b))return!1}return!0},
mH:function(a,b,c){Object.defineProperty(a,H.r(b),{value:c,enumerable:false,writable:true,configurable:true})},
km:function(a){var z,y,x,w,v,u
z=H.r($.e3.$1(a))
y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.r($.dW.$2(a,z))
if(z!=null){y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bQ(x)
$.bM[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bP[z]=x
return x}if(v==="-"){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e7(a,x)
if(v==="*")throw H.b(P.ds(z))
if(init.leafTags[z]===true){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e7(a,x)},
e7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cp(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bQ:function(a){return J.cp(a,!1,null,!!a.$isu)},
kq:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bQ(z)
else return J.cp(z,c,null,null)},
kg:function(){if(!0===$.co)return
$.co=!0
H.kh()},
kh:function(){var z,y,x,w,v,u,t,s
$.bM=Object.create(null)
$.bP=Object.create(null)
H.kc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e8.$1(v)
if(u!=null){t=H.kq(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kc:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aE(C.O,H.aE(C.T,H.aE(C.A,H.aE(C.A,H.aE(C.S,H.aE(C.P,H.aE(C.Q(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e3=new H.kd(v)
$.dW=new H.ke(u)
$.e8=new H.kf(t)},
aE:function(a,b){return a(b)||b},
ku:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hF:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c2(z)
y=z[0]
x=z[1]
return new H.hF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i4:{"^":"a;a,b,c,d,e,f",
J:function(a){var z,y,x
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
a6:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.q([],[P.c])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dp:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ho:{"^":"L;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dd:function(a,b){return new H.ho(a,b==null?null:b.method)}}},
fY:{"^":"L;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
c4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fY(a,y,z?null:b.receiver)}}},
i9:{"^":"L;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kw:{"^":"l:5;a",
$1:function(a){if(!!J.z(a).$isL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dK:{"^":"a;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isZ:1},
l:{"^":"a;",
k:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gbY:function(){return this},
$isbb:1,
gbY:function(){return this}},
dk:{"^":"l;"},
hT:{"^":"dk;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aI(z)+"'"}},
bV:{"^":"dk;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aU(this.a)
else y=typeof z!=="object"?J.ag(z):H.aU(z)
return(y^H.aU(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
p:{
bW:function(a){return a.a},
cM:function(a){return a.c},
bt:function(a){var z,y,x,w,v
z=new H.bV("self","target","receiver","name")
y=J.c2(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i5:{"^":"L;a",
k:function(a){return this.a},
p:{
a_:function(a,b){return new H.i5("TypeError: "+P.bv(a)+": type '"+H.dU(a)+"' is not a subtype of type '"+b+"'")}}},
fl:{"^":"L;a",
k:function(a){return this.a},
p:{
fm:function(a,b){return new H.fl("CastError: "+P.bv(a)+": type '"+H.dU(a)+"' is not a subtype of type '"+b+"'")}}},
hJ:{"^":"L;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hK:function(a){return new H.hJ(a)}}},
dq:{"^":"a;a,0b,0c,0d",
ga7:function(){var z=this.b
if(z==null){z=H.bo(this.a)
this.b=z}return z},
k:function(a){return this.ga7()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.ga7())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dq&&this.ga7()===b.ga7()}},
d3:{"^":"d8;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gG:function(a){return new H.aR(this,[H.n(this,0)])},
av:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cE(z,b)}else{y=this.du(b)
return y}},
du:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.ao(z,J.ag(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a5(w,b)
x=y==null?null:y.b
return x}else return this.dv(b)},
dv:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ao(z,J.ag(a)&0x3ffffff)
x=this.ax(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.n(this,0))
H.w(c,H.n(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aq()
this.b=z}this.aY(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aq()
this.c=y}this.aY(y,b,c)}else{x=this.d
if(x==null){x=this.aq()
this.d=x}w=J.ag(b)&0x3ffffff
v=this.ao(x,w)
if(v==null)this.at(x,w,[this.ai(b,c)])
else{u=this.ax(v,b)
if(u>=0)v[u].b=c
else v.push(this.ai(b,c))}}},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.n(this,0),H.n(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.ao(this))
z=z.c}},
aY:function(a,b,c){var z
H.w(b,H.n(this,0))
H.w(c,H.n(this,1))
z=this.a5(a,b)
if(z==null)this.at(a,b,this.ai(b,c))
else z.b=c},
b_:function(){this.r=this.r+1&67108863},
ai:function(a,b){var z,y
z=new H.h2(H.w(a,H.n(this,0)),H.w(b,H.n(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b_()
return z},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.af(a[y].a,b))return y
return-1},
k:function(a){return P.d9(this)},
a5:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
at:function(a,b,c){a[b]=c},
cF:function(a,b){delete a[b]},
cE:function(a,b){return this.a5(a,b)!=null},
aq:function(){var z=Object.create(null)
this.at(z,"<non-identifier-key>",z)
this.cF(z,"<non-identifier-key>")
return z},
$isd4:1},
h2:{"^":"a;a,b,0c,0d"},
aR:{"^":"cT;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.h3(z,z.r,this.$ti)
y.c=z.e
return y}},
h3:{"^":"a;a,b,0c,0d,$ti",
saZ:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.ao(z))
else{z=this.c
if(z==null){this.saZ(null)
return!1}else{this.saZ(z.a)
this.c=this.c.c
return!0}}},
$isaO:1},
kd:{"^":"l:5;a",
$1:function(a){return this.a(a)}},
ke:{"^":"l:13;a",
$2:function(a,b){return this.a(a,b)}},
kf:{"^":"l:14;a",
$1:function(a){return this.a(H.r(a))}}}],["","",,H,{"^":"",
k1:function(a){return J.fW(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
cr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
a8:function(a,b,c){H.bn(b)
if(a>>>0!==a||a>=c)throw H.b(H.bl(b,a))},
hk:{"^":"f;",$isi6:1,"%":"DataView;ArrayBufferView;c7|dE|dF|db|dG|dH|aj"},
c7:{"^":"hk;",
gj:function(a){return a.length},
$isu:1,
$asu:I.cl},
db:{"^":"dF;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e_(c)
H.a8(b,a,a.length)
a[b]=c},
$asbw:function(){return[P.a1]},
$asm:function(){return[P.a1]},
$isi:1,
$asi:function(){return[P.a1]},
$isd:1,
$asd:function(){return[P.a1]},
"%":"Float64Array"},
aj:{"^":"dH;",
i:function(a,b,c){H.K(c)
H.a8(b,a,a.length)
a[b]=c},
$asbw:function(){return[P.G]},
$asm:function(){return[P.G]},
$isi:1,
$asi:function(){return[P.G]},
$isd:1,
$asd:function(){return[P.G]}},
hj:{"^":"db;",$isah:1,"%":"Float32Array"},
ls:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lt:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isfS:1,
"%":"Int32Array"},
lu:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lv:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lw:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lx:{"^":"aj;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ly:{"^":"aj;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dE:{"^":"c7+m;"},
dF:{"^":"dE+bw;"},
dG:{"^":"c7+m;"},
dH:{"^":"dG+bw;"}}],["","",,P,{"^":"",
ih:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.ij(z),1)).observe(y,{childList:true})
return new P.ii(z,y,x)}else if(self.setImmediate!=null)return P.jY()
return P.jZ()},
mq:[function(a){self.scheduleImmediate(H.b2(new P.ik(H.k(a,{func:1,ret:-1})),0))},"$1","jX",4,0,4],
mr:[function(a){self.setImmediate(H.b2(new P.il(H.k(a,{func:1,ret:-1})),0))},"$1","jY",4,0,4],
ms:[function(a){H.k(a,{func:1,ret:-1})
P.jx(0,a)},"$1","jZ",4,0,4],
jT:function(a,b){if(H.bm(a,{func:1,args:[P.a,P.Z]}))return H.k(a,{func:1,ret:null,args:[P.a,P.Z]})
if(H.bm(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.cJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jS:function(){var z,y
for(;z=$.aD,z!=null;){$.b0=null
y=z.b
$.aD=y
if(y==null)$.b_=null
z.a.$0()}},
mE:[function(){$.cf=!0
try{P.jS()}finally{$.b0=null
$.cf=!1
if($.aD!=null)$.cu().$1(P.dY())}},"$0","dY",0,0,1],
dT:function(a){var z=new P.dw(H.k(a,{func:1,ret:-1}))
if($.aD==null){$.b_=z
$.aD=z
if(!$.cf)$.cu().$1(P.dY())}else{$.b_.b=z
$.b_=z}},
jW:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aD
if(z==null){P.dT(a)
$.b0=$.b_
return}y=new P.dw(a)
x=$.b0
if(x==null){y.b=z
$.b0=y
$.aD=y}else{y.b=x.b
x.b=y
$.b0=y
if(y.b==null)$.b_=y}},
kt:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.F
if(C.e===y){P.bK(null,null,C.e,a)
return}y.toString
P.bK(null,null,y,H.k(y.bj(a),z))},
bJ:function(a,b,c,d,e){var z={}
z.a=d
P.jW(new P.jU(z,e))},
dR:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
dS:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jV:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bK:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bj(d):c.d5(d,-1)
P.dT(d)},
ij:{"^":"l:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ii:{"^":"l:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ik:{"^":"l:0;a",
$0:function(){this.a.$0()}},
il:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jw:{"^":"a;a,0b,c",
cA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.jy(this,b),0),a)
else throw H.b(P.v("`setTimeout()` not found."))},
p:{
jx:function(a,b){var z=new P.jw(!0,0)
z.cA(a,b)
return z}}},
jy:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ip:{"^":"a;$ti"},
jr:{"^":"ip;a,$ti"},
aC:{"^":"a;0a,b,c,d,e,$ti",
dw:function(a){if(this.c!==6)return!0
return this.b.b.aA(H.k(this.d,{func:1,ret:P.M,args:[P.a]}),a.a,P.M,P.a)},
dr:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.n(this,1)}
w=this.b.b
if(H.bm(z,{func:1,args:[P.a,P.Z]}))return H.bN(w.dF(z,a.a,a.b,null,y,P.Z),x)
else return H.bN(w.aA(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
a7:{"^":"a;bd:a<,b,0cS:c<,$ti",
bL:function(a,b,c){var z,y,x,w
z=H.n(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jT(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a7(0,$.F,[c])
w=b==null?1:3
this.b1(new P.aC(x,w,a,b,[z,c]))
return x},
bK:function(a,b){return this.bL(a,null,b)},
b1:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaC")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa7")
z=y.a
if(z<4){y.b1(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bK(null,null,z,H.k(new P.iF(this,a),{func:1,ret:-1}))}},
ba:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaC")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa7")
y=u.a
if(y<4){u.ba(a)
return}this.a=y
this.c=u.c}z.a=this.a6(a)
y=this.b
y.toString
P.bK(null,null,y,H.k(new P.iK(z,this),{func:1,ret:-1}))}},
as:function(){var z=H.h(this.c,"$isaC")
this.c=null
return this.a6(z)},
a6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ak:function(a){var z,y,x
z=H.n(this,0)
H.bN(a,{futureOr:1,type:z})
y=this.$ti
if(H.b1(a,"$isaN",y,"$asaN"))if(H.b1(a,"$isa7",y,null))P.dz(a,this)
else P.iG(a,this)
else{x=this.as()
H.w(a,z)
this.a=4
this.c=a
P.aZ(this,x)}},
b4:function(a,b){var z
H.h(b,"$isZ")
z=this.as()
this.a=8
this.c=new P.T(a,b)
P.aZ(this,z)},
$isaN:1,
p:{
iG:function(a,b){var z,y,x
b.a=1
try{a.bL(new P.iH(b),new P.iI(b),null)}catch(x){z=H.a2(x)
y=H.b5(x)
P.kt(new P.iJ(b,z,y))}},
dz:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa7")
if(z>=4){y=b.as()
b.a=a.a
b.c=a.c
P.aZ(b,y)}else{y=H.h(b.c,"$isaC")
b.a=2
b.c=a
a.ba(y)}},
aZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isT")
y=y.b
u=v.a
t=v.b
y.toString
P.bJ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aZ(z.a,b)}y=z.a
r=y.c
x.a=w
x.b=r
u=!w
if(u){t=b.c
t=(t&1)!==0||t===8}else t=!0
if(t){t=b.b
q=t.b
if(w){p=y.b
p.toString
p=p==q
if(!p)q.toString
else p=!0
p=!p}else p=!1
if(p){H.h(r,"$isT")
y=y.b
u=r.a
t=r.b
y.toString
P.bJ(null,null,y,u,t)
return}o=$.F
if(o!=q)$.F=q
else o=null
y=b.c
if(y===8)new P.iN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iM(x,b,r).$0()}else if((y&2)!==0)new P.iL(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.z(y).$isaN){if(y.a>=4){n=H.h(t.c,"$isaC")
t.c=null
b=t.a6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dz(y,t)
return}}m=b.b
n=H.h(m.c,"$isaC")
m.c=null
b=m.a6(n)
y=x.a
u=x.b
if(!y){H.w(u,H.n(m,0))
m.a=4
m.c=u}else{H.h(u,"$isT")
m.a=8
m.c=u}z.a=m
y=m}}}},
iF:{"^":"l:0;a,b",
$0:function(){P.aZ(this.a,this.b)}},
iK:{"^":"l:0;a,b",
$0:function(){P.aZ(this.b,this.a.a)}},
iH:{"^":"l:6;a",
$1:function(a){var z=this.a
z.a=0
z.ak(a)}},
iI:{"^":"l:16;a",
$2:function(a,b){H.h(b,"$isZ")
this.a.b4(a,b)},
$1:function(a){return this.$2(a,null)}},
iJ:{"^":"l:0;a,b,c",
$0:function(){this.a.b4(this.b,this.c)}},
iN:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bH(H.k(w.d,{func:1}),null)}catch(v){y=H.a2(v)
x=H.b5(v)
if(this.d){w=H.h(this.a.a.c,"$isT").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isT")
else u.b=new P.T(y,x)
u.a=!0
return}if(!!J.z(z).$isaN){if(z instanceof P.a7&&z.gbd()>=4){if(z.gbd()===8){w=this.b
w.b=H.h(z.gcS(),"$isT")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bK(new P.iO(t),null)
w.a=!1}}},
iO:{"^":"l:17;a",
$1:function(a){return this.a}},
iM:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.n(x,0)
v=H.w(this.c,w)
u=H.n(x,1)
this.a.b=x.b.b.aA(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a2(t)
y=H.b5(t)
x=this.a
x.b=new P.T(z,y)
x.a=!0}}},
iL:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isT")
w=this.c
if(w.dw(z)&&w.e!=null){v=this.b
v.b=w.dr(z)
v.a=!1}}catch(u){y=H.a2(u)
x=H.b5(u)
w=H.h(this.a.a.c,"$isT")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.T(y,x)
s.a=!0}}},
dw:{"^":"a;a,0b"},
hX:{"^":"a;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.a7(0,$.F,[P.G])
z.a=0
x=H.n(this,0)
w=H.k(new P.hZ(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.i_(z,y),{func:1,ret:-1})
W.ak(this.a,this.b,w,!1,x)
return y}},
hZ:{"^":"l;a,b",
$1:function(a){H.w(a,H.n(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.n(this.b,0)]}}},
i_:{"^":"l:0;a,b",
$0:function(){this.b.ak(this.a.a)}},
hY:{"^":"a;"},
T:{"^":"a;a,b",
k:function(a){return H.e(this.a)},
$isL:1},
jE:{"^":"a;",$ismo:1},
jU:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.de()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
ja:{"^":"jE;",
dG:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.F){a.$0()
return}P.dR(null,null,this,a,-1)}catch(x){z=H.a2(x)
y=H.b5(x)
P.bJ(null,null,this,z,H.h(y,"$isZ"))}},
dH:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.e===$.F){a.$1(b)
return}P.dS(null,null,this,a,b,-1,c)}catch(x){z=H.a2(x)
y=H.b5(x)
P.bJ(null,null,this,z,H.h(y,"$isZ"))}},
d5:function(a,b){return new P.jc(this,H.k(a,{func:1,ret:b}),b)},
bj:function(a){return new P.jb(this,H.k(a,{func:1,ret:-1}))},
d7:function(a,b){return new P.jd(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
bH:function(a,b){H.k(a,{func:1,ret:b})
if($.F===C.e)return a.$0()
return P.dR(null,null,this,a,b)},
aA:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.F===C.e)return a.$1(b)
return P.dS(null,null,this,a,b,c,d)},
dF:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.F===C.e)return a.$2(b,c)
return P.jV(null,null,this,a,b,c,d,e,f)}},
jc:{"^":"l;a,b,c",
$0:function(){return this.a.bH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jb:{"^":"l:1;a,b",
$0:function(){return this.a.dG(this.b)}},
jd:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dH(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d5:function(a,b,c){H.bn(a)
return H.y(H.k2(a,new H.d3(0,0,[b,c])),"$isd4",[b,c],"$asd4")},
aa:function(a,b){return new H.d3(0,0,[a,b])},
X:function(a,b,c,d){return new P.iU(0,0,[d])},
fT:function(a,b,c){var z,y
if(P.cg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.q([],[P.c])
y=$.b6()
C.a.l(y,a)
try{P.jR(a,z)}finally{if(0>=y.length)return H.o(y,-1)
y.pop()}y=P.dj(b,H.kl(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
c1:function(a,b,c){var z,y,x
if(P.cg(a))return b+"..."+c
z=new P.cb(b)
y=$.b6()
C.a.l(y,a)
try{x=z
x.a=P.dj(x.gR(),a,", ")}finally{if(0>=y.length)return H.o(y,-1)
y.pop()}y=z
y.a=y.gR()+c
y=z.gR()
return y.charCodeAt(0)==0?y:y},
cg:function(a){var z,y
for(z=0;y=$.b6(),z<y.length;++z)if(a===y[z])return!0
return!1},
jR:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.y(b,"$isd",[P.c],"$asd")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.o(b,-1)
v=b.pop()
if(0>=b.length)return H.o(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.o(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.o(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
c5:function(a,b){var z,y,x
z=P.X(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.P)(a),++x)z.l(0,H.w(a[x],b))
return z},
d9:function(a){var z,y,x
z={}
if(P.cg(a))return"{...}"
y=new P.cb("")
try{C.a.l($.b6(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.eT(a,new P.h6(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.b6()
if(0>=z.length)return H.o(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
iU:{"^":"iP;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dD(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbk")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbk")!=null}else return this.cD(b)},
cD:function(a){var z=this.d
if(z==null)return!1
return this.an(this.b7(z,a),a)>=0},
l:function(a,b){var z,y
H.w(b,H.n(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cd()
this.b=z}return this.b0(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cd()
this.c=y}return this.b0(y,b)}else return this.cB(0,b)},
cB:function(a,b){var z,y,x
H.w(b,H.n(this,0))
z=this.d
if(z==null){z=P.cd()
this.d=z}y=this.b5(b)
x=z[y]
if(x==null)z[y]=[this.ar(b)]
else{if(this.an(x,b)>=0)return!1
x.push(this.ar(b))}return!0},
bG:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bb(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bb(this.c,b)
else return this.cN(0,b)},
cN:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b7(z,b)
x=this.an(y,b)
if(x<0)return!1
this.be(y.splice(x,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ap()}},
b0:function(a,b){H.w(b,H.n(this,0))
if(H.h(a[b],"$isbk")!=null)return!1
a[b]=this.ar(b)
return!0},
bb:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbk")
if(z==null)return!1
this.be(z)
delete a[b]
return!0},
ap:function(){this.r=this.r+1&67108863},
ar:function(a){var z,y
z=new P.bk(H.w(a,H.n(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ap()
return z},
be:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ap()},
b5:function(a){return J.ag(a)&0x3ffffff},
b7:function(a,b){return a[this.b5(b)]},
an:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.af(a[y].a,b))return y
return-1},
p:{
cd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bk:{"^":"a;a,0b,0c"},
dD:{"^":"a;a,b,0c,0d,$ti",
sb3:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.ao(z))
else{z=this.c
if(z==null){this.sb3(null)
return!1}else{this.sb3(H.w(z.a,H.n(this,0)))
this.c=this.c.b
return!0}}},
$isaO:1,
p:{
iV:function(a,b,c){var z=new P.dD(a,b,[c])
z.c=a.e
return z}}},
iP:{"^":"hL;"},
h4:{"^":"iW;",$isi:1,$isd:1},
m:{"^":"a;$ti",
gB:function(a){return new H.d6(a,this.gj(a),0,[H.b4(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
dq:function(a,b,c,d){var z,y,x
H.w(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b4(this,a,"m",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.ao(a))}return y},
k:function(a){return P.c1(a,"[","]")}},
d8:{"^":"O;"},
h6:{"^":"l:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
O:{"^":"a;$ti",
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.b4(this,a,"O",0),H.b4(this,a,"O",1)]})
for(z=J.br(this.gG(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aJ(this.gG(a))},
k:function(a){return P.d9(a)},
$isH:1},
hM:{"^":"a;$ti",
I:function(a,b){var z
for(z=J.br(H.y(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.c1(this,"{","}")},
$isi:1,
$islQ:1},
hL:{"^":"hM;"},
iW:{"^":"a+m;"}}],["","",,P,{"^":"",
ki:function(a,b,c){var z=H.hB(a,c)
if(z!=null)return z
throw H.b(new P.fM(a,null,null))},
fL:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.aV(a)+"'"},
bv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fL(a)},
cW:function(a){return new P.iC(a)},
ae:function(a){H.cr(H.e(a))},
M:{"^":"a;"},
"+bool":0,
bu:{"^":"a;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a&&!0},
K:function(a,b){return C.b.K(this.a,H.h(b,"$isbu").a)},
gv:function(a){var z=this.a
return(z^C.b.bc(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fy(H.hA(this))
y=P.ba(H.hy(this))
x=P.ba(H.hu(this))
w=P.ba(H.hv(this))
v=P.ba(H.hx(this))
u=P.ba(H.hz(this))
t=P.fz(H.hw(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isR:1,
$asR:function(){return[P.bu]},
p:{
fy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ba:function(a){if(a>=10)return""+a
return"0"+a}}},
a1:{"^":"C;"},
"+double":0,
aL:{"^":"a;a",
P:function(a,b){return C.b.P(this.a,H.h(b,"$isaL").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,H.h(b,"$isaL").a)},
k:function(a){var z,y,x,w,v
z=new P.fH()
y=this.a
if(y<0)return"-"+new P.aL(0-y).k(0)
x=z.$1(C.b.C(y,6e7)%60)
w=z.$1(C.b.C(y,1e6)%60)
v=new P.fG().$1(y%1e6)
return""+C.b.C(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isR:1,
$asR:function(){return[P.aL]},
p:{
fF:function(a,b,c,d,e,f){return new P.aL(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fG:{"^":"l:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fH:{"^":"l:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"a;"},
de:{"^":"L;",
k:function(a){return"Throw of null."}},
an:{"^":"L;a,b,c,d",
gam:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gal:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gam()+y+x
if(!this.a)return w
v=this.gal()
u=P.bv(this.b)
return w+v+": "+u},
p:{
cJ:function(a,b,c){return new P.an(!0,a,b,c)}}},
c8:{"^":"an;e,f,a,b,c,d",
gam:function(){return"RangeError"},
gal:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
hE:function(a){return new P.c8(null,null,!1,null,null,a)},
bC:function(a,b,c){return new P.c8(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")}}},
fR:{"^":"an;e,j:f>,a,b,c,d",
gam:function(){return"RangeError"},
gal:function(){var z,y
z=H.K(this.b)
if(typeof z!=="number")return z.a0()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
B:function(a,b,c,d,e){var z=H.K(e==null?J.aJ(b):e)
return new P.fR(b,z,!0,a,c,"Index out of range")}}},
ia:{"^":"L;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
v:function(a){return new P.ia(a)}}},
i8:{"^":"L;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ds:function(a){return new P.i8(a)}}},
c9:{"^":"L;a",
k:function(a){return"Bad state: "+this.a},
p:{
ca:function(a){return new P.c9(a)}}},
fs:{"^":"L;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bv(z)+"."},
p:{
ao:function(a){return new P.fs(a)}}},
di:{"^":"a;",
k:function(a){return"Stack Overflow"},
$isL:1},
fx:{"^":"L;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iC:{"^":"a;a",
k:function(a){return"Exception: "+this.a}},
fM:{"^":"a;a,b,c",
k:function(a){var z,y
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
return y}},
bb:{"^":"a;"},
G:{"^":"C;"},
"+int":0,
i:{"^":"a;$ti",
aC:["cb",function(a,b){var z=H.cm(this,"i",0)
return new H.du(this,H.k(b,{func:1,ret:P.M,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Q(P.bh(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.B(b,this,"index",null,y))},
k:function(a){return P.fT(this,"(",")")}},
aO:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
H:{"^":"a;$ti"},
D:{"^":"a;",
gv:function(a){return P.a.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
C:{"^":"a;",$isR:1,
$asR:function(){return[P.C]}},
"+num":0,
a:{"^":";",
F:function(a,b){return this===b},
gv:function(a){return H.aU(this)},
k:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.k(this)}},
Z:{"^":"a;"},
c:{"^":"a;",$isR:1,
$asR:function(){return[P.c]},
$ishq:1},
"+String":0,
cb:{"^":"a;R:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dj:function(a,b,c){var z=J.br(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
dZ:function(){return document},
fI:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.t
z=new H.du(new W.a0(y),H.k(new W.fJ(),{func:1,ret:P.M,args:[z]}),[z])
x=z.gB(z)
if(!x.t())H.Q(H.fU())
w=x.gA(x)
if(x.t())H.Q(H.fV())
return H.h(w,"$isN")},
fK:function(a){H.h(a,"$isJ")
return"wheel"},
aM:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eW(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a2(x)}return z},
iy:function(a,b){return document.createElement(a)},
bI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dC:function(a,b,c,d){var z,y
z=W.bI(W.bI(W.bI(W.bI(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dP:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.is(a)
if(!!J.z(z).$isJ)return z
return}else return H.h(a,"$isJ")},
dV:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.e)return a
return z.d7(a,b)},
I:{"^":"N;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kx:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fc:{"^":"I;",
k:function(a){return String(a)},
$isfc:1,
"%":"HTMLAnchorElement"},
ky:{"^":"I;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cK:{"^":"I;",$iscK:1,"%":"HTMLBaseElement"},
fh:{"^":"f;","%":";Blob"},
bs:{"^":"I;",$isbs:1,"%":"HTMLBodyElement"},
bX:{"^":"I;0n:height=,0m:width=",
aD:function(a,b,c){if(c!=null)return this.cI(a,b,P.k_(c,null))
return this.cJ(a,b)},
bZ:function(a,b){return this.aD(a,b,null)},
cI:function(a,b,c){return a.getContext(b,c)},
cJ:function(a,b){return a.getContext(b)},
$isbX:1,
"%":"HTMLCanvasElement"},
fk:{"^":"f;",
a8:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bY:{"^":"f;",
bs:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dn:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ad:function(a){return P.V(a.getContextAttributes())},
$isbY:1,
"%":"CanvasRenderingContext2D"},
kD:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ft:{"^":"bZ;",$isft:1,"%":"CSSNumericValue|CSSUnitValue"},
kE:{"^":"fw;0j:length=","%":"CSSPerspective"},
ap:{"^":"f;",$isap:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fu:{"^":"iq;0j:length=",
aH:function(a,b){var z=this.cK(a,this.aj(a,b))
return z==null?"":z},
aj:function(a,b){var z,y
z=$.eb()
y=z[b]
if(typeof y==="string")return y
y=this.cW(a,b)
z[b]=y
return y},
cW:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fA()+b
if(z in a)return z
return b},
cK:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fv:{"^":"a;",
gn:function(a){return this.aH(a,"height")},
gm:function(a){return this.aH(a,"width")}},
bZ:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fw:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kG:{"^":"bZ;0j:length=","%":"CSSTransformValue"},
kH:{"^":"bZ;0j:length=","%":"CSSUnparsedValue"},
kJ:{"^":"f;0j:length=","%":"DataTransferItemList"},
fB:{"^":"I;","%":"HTMLDivElement"},
fC:{"^":"t;",
d_:function(a,b){return a.adoptNode(b)},
c_:function(a,b){return a.getElementById(b)},
az:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
kK:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
fD:{"^":"f;",
dg:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kL:{"^":"iu;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.y(c,"$isS",[P.C],"$asS")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.S,P.C]]},
$asm:function(){return[[P.S,P.C]]},
$isi:1,
$asi:function(){return[[P.S,P.C]]},
$isd:1,
$asd:function(){return[[P.S,P.C]]},
$asp:function(){return[[P.S,P.C]]},
"%":"ClientRectList|DOMRectList"},
fE:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.b1(b,"$isS",[P.C],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isS:1,
$asS:function(){return[P.C]},
"%":";DOMRectReadOnly"},
kM:{"^":"iw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(c)
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.c]},
$asm:function(){return[P.c]},
$isi:1,
$asi:function(){return[P.c]},
$isd:1,
$asd:function(){return[P.c]},
$asp:function(){return[P.c]},
"%":"DOMStringList"},
kN:{"^":"f;0j:length=","%":"DOMTokenList"},
N:{"^":"t;0dI:tagName=",
gd2:function(a){return new W.ix(a)},
k:function(a){return a.localName},
L:["ag",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cV
if(z==null){z=H.q([],[W.a5])
y=new W.dc(z)
C.a.l(z,W.dA(null))
C.a.l(z,W.dL())
$.cV=y
d=y}else d=z
z=$.cU
if(z==null){z=new W.dO(d)
$.cU=z
c=z}else{z.a=d
c=z}}if($.a9==null){z=document
y=z.implementation
y=(y&&C.L).dg(y,"")
$.a9=y
$.c_=y.createRange()
y=$.a9
y.toString
y=y.createElement("base")
H.h(y,"$iscK")
y.href=z.baseURI
z=$.a9.head;(z&&C.M).H(z,y)}z=$.a9
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbs")}z=$.a9
if(!!this.$isbs)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.a9.body;(z&&C.p).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.c_;(z&&C.E).c1(z,x)
z=$.c_
w=(z&&C.E).de(z,b)}else{x.innerHTML=b
w=$.a9.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.a9.body
if(x==null?z!=null:x!==z)J.cC(x)
c.aM(w)
C.j.d_(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"df",null,null,"gdO",5,5,null],
c3:function(a,b,c,d){a.textContent=null
this.H(a,this.L(a,b,c,d))},
c2:function(a,b){return this.c3(a,b,null,null)},
T:function(a,b){return a.getAttribute(b)},
cO:function(a,b){return a.removeAttribute(b)},
gdz:function(a){return new W.bH(a,"mousedown",!1,[W.Y])},
gdA:function(a){return new W.bH(a,"mousemove",!1,[W.Y])},
gdB:function(a){return new W.bH(a,"mouseup",!1,[W.Y])},
gdC:function(a){return new W.bH(a,H.r(W.fK(a)),!1,[W.aY])},
$isN:1,
"%":";Element"},
fJ:{"^":"l:18;",
$1:function(a){return!!J.z(H.h(a,"$ist")).$isN}},
kP:{"^":"I;0n:height=,0m:width=","%":"HTMLEmbedElement"},
W:{"^":"f;",$isW:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
J:{"^":"f;",
cZ:function(a,b,c,d){H.k(c,{func:1,args:[W.W]})
if(c!=null)this.cC(a,b,c,!1)},
cC:function(a,b,c,d){return a.addEventListener(b,H.b2(H.k(c,{func:1,args:[W.W]}),1),!1)},
$isJ:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dI|dJ|dM|dN"},
aq:{"^":"fh;",$isaq:1,"%":"File"},
l5:{"^":"iE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaq")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$asm:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isd:1,
$asd:function(){return[W.aq]},
$asp:function(){return[W.aq]},
"%":"FileList"},
l6:{"^":"J;0j:length=","%":"FileWriter"},
l9:{"^":"I;0j:length=","%":"HTMLFormElement"},
ar:{"^":"f;",$isar:1,"%":"Gamepad"},
fO:{"^":"I;","%":"HTMLHeadElement"},
la:{"^":"f;0j:length=","%":"History"},
lb:{"^":"iR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$ist")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.t]},
$asm:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$asp:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fP:{"^":"fC;","%":"HTMLDocument"},
lc:{"^":"I;0n:height=,0m:width=","%":"HTMLIFrameElement"},
ld:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
le:{"^":"f;0n:height=,0m:width=","%":"ImageData"},
lf:{"^":"I;0n:height=,0m:width=","%":"HTMLImageElement"},
d_:{"^":"I;0n:height=,0m:width=",$isd_:1,"%":"HTMLInputElement"},
aP:{"^":"dr;",$isaP:1,"%":"KeyboardEvent"},
h5:{"^":"f;",
k:function(a){return String(a)},
$ish5:1,
"%":"Location"},
h9:{"^":"I;","%":"HTMLAudioElement;HTMLMediaElement"},
lo:{"^":"f;0j:length=","%":"MediaList"},
lp:{"^":"iY;",
h:function(a,b){return P.V(a.get(H.r(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.hb(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.c,null]},
$isH:1,
$asH:function(){return[P.c,null]},
"%":"MIDIInputMap"},
hb:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lq:{"^":"iZ;",
h:function(a,b){return P.V(a.get(H.r(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.hc(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.c,null]},
$isH:1,
$asH:function(){return[P.c,null]},
"%":"MIDIOutputMap"},
hc:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"f;",$isas:1,"%":"MimeType"},
lr:{"^":"j0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isas")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$asm:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isd:1,
$asd:function(){return[W.as]},
$asp:function(){return[W.as]},
"%":"MimeTypeArray"},
Y:{"^":"dr;",
gbE:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aT(a.offsetX,a.offsetY,[P.C])
else{z=a.target
if(!J.z(W.dP(z)).$isN)throw H.b(P.v("offsetX is only supported on elements"))
y=H.h(W.dP(z),"$isN")
z=a.clientX
x=a.clientY
w=[P.C]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.y(new P.aT(u,v,w),"$isaT",w,"$asaT")
if(typeof z!=="number")return z.af()
if(typeof x!=="number")return x.af()
return new P.aT(C.t.bM(z-u),C.t.bM(x-v),w)}},
$isY:1,
"%":";DragEvent|MouseEvent"},
a0:{"^":"h4;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.ca("No elements"))
if(y>1)throw H.b(P.ca("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.y(b,"$isi",[W.t],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.H(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.o(y,b)
J.ew(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.cY(z,z.length,-1,[H.b4(C.Y,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.o(z,b)
return z[b]},
$asm:function(){return[W.t]},
$asi:function(){return[W.t]},
$asd:function(){return[W.t]}},
t:{"^":"J;0dD:previousSibling=",
dE:function(a){var z=a.parentNode
if(z!=null)J.bp(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.ca(a):z},
H:function(a,b){return a.appendChild(b)},
cP:function(a,b){return a.removeChild(b)},
cQ:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hl:{"^":"j2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$ist")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.t]},
$asm:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$asp:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lB:{"^":"I;0n:height=,0m:width=","%":"HTMLObjectElement"},
lD:{"^":"J;0n:height=,0m:width=","%":"OffscreenCanvas"},
lE:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
at:{"^":"f;0j:length=",$isat:1,"%":"Plugin"},
lG:{"^":"j6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isat")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$asm:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isd:1,
$asd:function(){return[W.at]},
$asp:function(){return[W.at]},
"%":"PluginArray"},
lI:{"^":"Y;0n:height=,0m:width=","%":"PointerEvent"},
hD:{"^":"f;",
de:function(a,b){return a.createContextualFragment(b)},
c1:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lO:{"^":"je;",
h:function(a,b){return P.V(a.get(H.r(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.hI(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.c,null]},
$isH:1,
$asH:function(){return[P.c,null]},
"%":"RTCStatsReport"},
hI:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lP:{"^":"f;0n:height=,0m:width=","%":"Screen"},
dh:{"^":"I;0j:length=",$isdh:1,"%":"HTMLSelectElement"},
av:{"^":"J;",$isav:1,"%":"SourceBuffer"},
lR:{"^":"dJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isav")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$asm:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isd:1,
$asd:function(){return[W.av]},
$asp:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"f;",$isaw:1,"%":"SpeechGrammar"},
lS:{"^":"jk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaw")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$asm:function(){return[W.aw]},
$isi:1,
$asi:function(){return[W.aw]},
$isd:1,
$asd:function(){return[W.aw]},
$asp:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"f;0j:length=",$isax:1,"%":"SpeechRecognitionResult"},
lV:{"^":"jn;",
h:function(a,b){return this.b8(a,H.r(b))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=0;!0;++z){y=this.cM(a,z)
if(y==null)return
b.$2(y,this.b8(a,y))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.hW(z))
return z},
gj:function(a){return a.length},
b8:function(a,b){return a.getItem(b)},
cM:function(a,b){return a.key(b)},
$asO:function(){return[P.c,P.c]},
$isH:1,
$asH:function(){return[P.c,P.c]},
"%":"Storage"},
hW:{"^":"l:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ay:{"^":"f;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
i0:{"^":"I;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=W.fI("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).I(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
lY:{"^":"I;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga2(z)
x.toString
z=new W.a0(x)
w=z.ga2(z)
y.toString
w.toString
new W.a0(y).I(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
lZ:{"^":"I;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga2(z)
y.toString
x.toString
new W.a0(y).I(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
dl:{"^":"I;",$isdl:1,"%":"HTMLTemplateElement"},
m_:{"^":"f;0m:width=","%":"TextMetrics"},
az:{"^":"J;",$isaz:1,"%":"TextTrack"},
aA:{"^":"J;",$isaA:1,"%":"TextTrackCue|VTTCue"},
m0:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaA")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aA]},
$asm:function(){return[W.aA]},
$isi:1,
$asi:function(){return[W.aA]},
$isd:1,
$asd:function(){return[W.aA]},
$asp:function(){return[W.aA]},
"%":"TextTrackCueList"},
m1:{"^":"dN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaz")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$asm:function(){return[W.az]},
$isi:1,
$asi:function(){return[W.az]},
$isd:1,
$asd:function(){return[W.az]},
$asp:function(){return[W.az]},
"%":"TextTrackList"},
m2:{"^":"f;0j:length=","%":"TimeRanges"},
aB:{"^":"f;",$isaB:1,"%":"Touch"},
m3:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaB")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aB]},
$asm:function(){return[W.aB]},
$isi:1,
$asi:function(){return[W.aB]},
$isd:1,
$asd:function(){return[W.aB]},
$asp:function(){return[W.aB]},
"%":"TouchList"},
m4:{"^":"f;0j:length=","%":"TrackDefaultList"},
dr:{"^":"W;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mh:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mk:{"^":"h9;0n:height=,0m:width=","%":"HTMLVideoElement"},
ml:{"^":"J;0j:length=","%":"VideoTrackList"},
mm:{"^":"J;0n:height=,0m:width=","%":"VisualViewport"},
mn:{"^":"f;0m:width=","%":"VTTRegion"},
aY:{"^":"Y;",
gdj:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.v("deltaY is not supported"))},
$isaY:1,
"%":"WheelEvent"},
id:{"^":"J;",
gd1:function(a){var z,y,x
z=P.C
y=new P.a7(0,$.F,[z])
x=H.k(new W.ie(new P.jr(y,[z])),{func:1,ret:-1,args:[P.C]})
this.cH(a)
this.cR(a,W.dV(x,z))
return y},
cR:function(a,b){return a.requestAnimationFrame(H.b2(H.k(b,{func:1,ret:-1,args:[P.C]}),1))},
cH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdv:1,
"%":"DOMWindow|Window"},
ie:{"^":"l:20;a",
$1:function(a){var z=this.a
a=H.bN(H.cq(a),{futureOr:1,type:H.n(z,0)})
z=z.a
if(z.a!==0)H.Q(P.ca("Future already completed"))
z.ak(a)}},
dx:{"^":"t;",$isdx:1,"%":"Attr"},
mt:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ap]},
$asm:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isd:1,
$asd:function(){return[W.ap]},
$asp:function(){return[W.ap]},
"%":"CSSRuleList"},
mu:{"^":"fE;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.b1(b,"$isS",[P.C],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mv:{"^":"jI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$asm:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isd:1,
$asd:function(){return[W.ar]},
$asp:function(){return[W.ar]},
"%":"GamepadList"},
mA:{"^":"jK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$ist")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.t]},
$asm:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$asp:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mB:{"^":"jM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isax")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$asm:function(){return[W.ax]},
$isi:1,
$asi:function(){return[W.ax]},
$isd:1,
$asd:function(){return[W.ax]},
$asp:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
mC:{"^":"jO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isay")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$asm:function(){return[W.ay]},
$isi:1,
$asi:function(){return[W.ay]},
$isd:1,
$asd:function(){return[W.ay]},
$asp:function(){return[W.ay]},
"%":"StyleSheetList"},
im:{"^":"d8;cG:a<",
D:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=this.gG(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.P)(z),++v){u=z[v]
b.$2(u,w.T(x,u))}},
gG:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.q([],[P.c])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.o(z,w)
v=H.h(z[w],"$isdx")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asO:function(){return[P.c,P.c]},
$asH:function(){return[P.c,P.c]}},
ix:{"^":"im;a",
h:function(a,b){return J.bT(this.a,H.r(b))},
gj:function(a){return this.gG(this).length}},
iz:{"^":"hX;a,b,c,$ti"},
bH:{"^":"iz;a,b,c,$ti"},
iA:{"^":"hY;a,b,c,d,e,$ti",p:{
ak:function(a,b,c,d,e){var z=W.dV(new W.iB(c),W.W)
if(z!=null&&!0)J.ex(a,b,z,!1)
return new W.iA(0,a,b,z,!1,[e])}}},
iB:{"^":"l:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isW"))}},
bj:{"^":"a;a",
cv:function(a){var z,y
z=$.cv()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.ka())
for(y=0;y<12;++y)z.i(0,C.v[y],W.kb())}},
S:function(a){return $.eo().u(0,W.aM(a))},
O:function(a,b,c){var z,y,x
z=W.aM(a)
y=$.cv()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bL(x.$4(a,b,c,this))},
$isa5:1,
p:{
dA:function(a){var z,y
z=document.createElement("a")
y=new W.jf(z,window.location)
y=new W.bj(y)
y.cv(a)
return y},
my:[function(a,b,c,d){H.h(a,"$isN")
H.r(b)
H.r(c)
H.h(d,"$isbj")
return!0},"$4","ka",16,0,12],
mz:[function(a,b,c,d){var z,y,x
H.h(a,"$isN")
H.r(b)
H.r(c)
z=H.h(d,"$isbj").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kb",16,0,12]}},
p:{"^":"a;$ti",
gB:function(a){return new W.cY(a,this.gj(a),-1,[H.b4(this,a,"p",0)])}},
dc:{"^":"a;a",
S:function(a){return C.a.bg(this.a,new W.hn(a))},
O:function(a,b,c){return C.a.bg(this.a,new W.hm(a,b,c))},
$isa5:1},
hn:{"^":"l:9;a",
$1:function(a){return H.h(a,"$isa5").S(this.a)}},
hm:{"^":"l:9;a,b,c",
$1:function(a){return H.h(a,"$isa5").O(this.a,this.b,this.c)}},
jg:{"^":"a;",
cz:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aC(0,new W.jh())
y=b.aC(0,new W.ji())
this.b.I(0,z)
x=this.c
x.I(0,C.X)
x.I(0,y)},
S:function(a){return this.a.u(0,W.aM(a))},
O:["cd",function(a,b,c){var z,y
z=W.aM(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.d0(c)
else if(y.u(0,"*::"+b))return this.d.d0(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa5:1},
jh:{"^":"l:10;",
$1:function(a){return!C.a.u(C.v,H.r(a))}},
ji:{"^":"l:10;",
$1:function(a){return C.a.u(C.v,H.r(a))}},
js:{"^":"jg;e,a,b,c,d",
O:function(a,b,c){if(this.cd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bT(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dL:function(){var z,y,x,w,v
z=P.c
y=P.c5(C.u,z)
x=H.n(C.u,0)
w=H.k(new W.jt(),{func:1,ret:z,args:[x]})
v=H.q(["TEMPLATE"],[z])
y=new W.js(y,P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),null)
y.cz(null,new H.h7(C.u,w,[x,z]),v,null)
return y}}},
jt:{"^":"l:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.r(a))}},
jq:{"^":"a;",
S:function(a){var z=J.z(a)
if(!!z.$isdg)return!1
z=!!z.$isE
if(z&&W.aM(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.i.c5(b,"on"))return!1
return this.S(a)},
$isa5:1},
cY:{"^":"a;a,b,c,0d,$ti",
sb9:function(a){this.d=H.w(a,H.n(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb9(J.eu(this.a,z))
this.c=z
return!0}this.sb9(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaO:1},
ir:{"^":"a;a",$isJ:1,$isdv:1,p:{
is:function(a){if(a===window)return H.h(a,"$isdv")
else return new W.ir(a)}}},
a5:{"^":"a;"},
jf:{"^":"a;a,b",$ismg:1},
dO:{"^":"a;a",
aM:function(a){new W.jD(this).$2(a,null)},
W:function(a,b){if(b==null)J.cC(a)
else J.bp(b,a)},
cU:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eU(a)
x=J.bT(y.gcG(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a2(t)}v="element unprintable"
try{v=J.b9(a)}catch(t){H.a2(t)}try{u=W.aM(a)
this.cT(H.h(a,"$isN"),b,z,v,u,H.h(y,"$isH"),H.r(x))}catch(t){if(H.a2(t) instanceof P.an)throw t
else{this.W(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cT:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.W(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.S(a)){this.W(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.W(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.q(z.slice(0),[H.n(z,0)])
for(x=f.gG(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.o(y,x)
v=y[x]
if(!this.a.O(a,J.f5(v),w.T(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.T(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.T(z,v)
w.cO(z,v)}}if(!!J.z(a).$isdl)this.aM(a.content)},
$islz:1},
jD:{"^":"l:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cU(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.W(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eV(z)}catch(w){H.a2(w)
v=H.h(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bp(u,v)}else J.bp(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$ist")}}},
iq:{"^":"f+fv;"},
it:{"^":"f+m;"},
iu:{"^":"it+p;"},
iv:{"^":"f+m;"},
iw:{"^":"iv+p;"},
iD:{"^":"f+m;"},
iE:{"^":"iD+p;"},
iQ:{"^":"f+m;"},
iR:{"^":"iQ+p;"},
iY:{"^":"f+O;"},
iZ:{"^":"f+O;"},
j_:{"^":"f+m;"},
j0:{"^":"j_+p;"},
j1:{"^":"f+m;"},
j2:{"^":"j1+p;"},
j5:{"^":"f+m;"},
j6:{"^":"j5+p;"},
je:{"^":"f+O;"},
dI:{"^":"J+m;"},
dJ:{"^":"dI+p;"},
jj:{"^":"f+m;"},
jk:{"^":"jj+p;"},
jn:{"^":"f+O;"},
ju:{"^":"f+m;"},
jv:{"^":"ju+p;"},
dM:{"^":"J+m;"},
dN:{"^":"dM+p;"},
jz:{"^":"f+m;"},
jA:{"^":"jz+p;"},
jF:{"^":"f+m;"},
jG:{"^":"jF+p;"},
jH:{"^":"f+m;"},
jI:{"^":"jH+p;"},
jJ:{"^":"f+m;"},
jK:{"^":"jJ+p;"},
jL:{"^":"f+m;"},
jM:{"^":"jL+p;"},
jN:{"^":"f+m;"},
jO:{"^":"jN+p;"}}],["","",,P,{"^":"",
V:function(a){var z,y,x,w,v
if(a==null)return
z=P.aa(P.c,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.P)(y),++w){v=H.r(y[w])
z.i(0,v,a[v])}return z},
k_:function(a,b){var z={}
a.D(0,new P.k0(z))
return z},
cS:function(){var z=$.cR
if(z==null){z=J.bR(window.navigator.userAgent,"Opera",0)
$.cR=z}return z},
fA:function(){var z,y
z=$.cO
if(z!=null)return z
y=$.cP
if(y==null){y=J.bR(window.navigator.userAgent,"Firefox",0)
$.cP=y}if(y)z="-moz-"
else{y=$.cQ
if(y==null){y=!P.cS()&&J.bR(window.navigator.userAgent,"Trident/",0)
$.cQ=y}if(y)z="-ms-"
else z=P.cS()?"-o-":"-webkit-"}$.cO=z
return z},
k0:{"^":"l:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j7:{"^":"a;a,b",
cw:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.C(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.C(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.C(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.C(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.C(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.C(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.C(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.M()
this.M()
this.M()
this.M()},
M:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.C(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
bD:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.b(P.hE("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)>>>0===0){this.M()
return(this.a&z)>>>0}do{this.M()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
ay:function(){this.M()
var z=this.a
this.M()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
$islJ:1,
p:{
j8:function(a){var z=new P.j7(0,0)
z.cw(a)
return z}}},
aT:{"^":"a;Y:a>,Z:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.b1(b,"$isaT",[P.C],null)&&this.a==J.eX(b)&&this.b==b.gZ(b)},
gv:function(a){var z,y,x
z=J.ag(this.a)
y=J.ag(this.b)
y=P.dB(P.dB(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
j9:{"^":"a;"},
S:{"^":"j9;$ti"}}],["","",,P,{"^":"",fd:{"^":"f;",$isfd:1,"%":"SVGAnimatedLength"},kQ:{"^":"E;0n:height=,0m:width=","%":"SVGFEBlendElement"},kR:{"^":"E;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kS:{"^":"E;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kT:{"^":"E;0n:height=,0m:width=","%":"SVGFECompositeElement"},kU:{"^":"E;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kV:{"^":"E;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kW:{"^":"E;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kX:{"^":"E;0n:height=,0m:width=","%":"SVGFEFloodElement"},kY:{"^":"E;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},kZ:{"^":"E;0n:height=,0m:width=","%":"SVGFEImageElement"},l_:{"^":"E;0n:height=,0m:width=","%":"SVGFEMergeElement"},l0:{"^":"E;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l1:{"^":"E;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l2:{"^":"E;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},l3:{"^":"E;0n:height=,0m:width=","%":"SVGFETileElement"},l4:{"^":"E;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},l7:{"^":"E;0n:height=,0m:width=","%":"SVGFilterElement"},l8:{"^":"bc;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fN:{"^":"bc;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bc:{"^":"E;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lg:{"^":"bc;0n:height=,0m:width=","%":"SVGImageElement"},aQ:{"^":"f;",$isaQ:1,"%":"SVGLength"},ll:{"^":"iT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.h(c,"$isaQ")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aQ]},
$isi:1,
$asi:function(){return[P.aQ]},
$isd:1,
$asd:function(){return[P.aQ]},
$asp:function(){return[P.aQ]},
"%":"SVGLengthList"},lm:{"^":"E;0n:height=,0m:width=","%":"SVGMaskElement"},aS:{"^":"f;",$isaS:1,"%":"SVGNumber"},lA:{"^":"j4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.h(c,"$isaS")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aS]},
$isi:1,
$asi:function(){return[P.aS]},
$isd:1,
$asd:function(){return[P.aS]},
$asp:function(){return[P.aS]},
"%":"SVGNumberList"},lF:{"^":"E;0n:height=,0m:width=","%":"SVGPatternElement"},lH:{"^":"f;0j:length=","%":"SVGPointList"},lK:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},lL:{"^":"fN;0n:height=,0m:width=","%":"SVGRectElement"},dg:{"^":"E;",$isdg:1,"%":"SVGScriptElement"},lW:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.r(c)
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.c]},
$isi:1,
$asi:function(){return[P.c]},
$isd:1,
$asd:function(){return[P.c]},
$asp:function(){return[P.c]},
"%":"SVGStringList"},E:{"^":"N;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.q([],[W.a5])
C.a.l(z,W.dA(null))
C.a.l(z,W.dL())
C.a.l(z,new W.jq())
c=new W.dO(new W.dc(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).df(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.ga2(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isE:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lX:{"^":"bc;0n:height=,0m:width=","%":"SVGSVGElement"},aW:{"^":"f;",$isaW:1,"%":"SVGTransform"},m5:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.h(c,"$isaW")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aW]},
$isi:1,
$asi:function(){return[P.aW]},
$isd:1,
$asd:function(){return[P.aW]},
$asp:function(){return[P.aW]},
"%":"SVGTransformList"},mi:{"^":"bc;0n:height=,0m:width=","%":"SVGUseElement"},iS:{"^":"f+m;"},iT:{"^":"iS+p;"},j3:{"^":"f+m;"},j4:{"^":"j3+p;"},jo:{"^":"f+m;"},jp:{"^":"jo+p;"},jB:{"^":"f+m;"},jC:{"^":"jB+p;"}}],["","",,P,{"^":"",ah:{"^":"a;",$isi:1,
$asi:function(){return[P.a1]},
$isd:1,
$asd:function(){return[P.a1]},
$isi6:1}}],["","",,P,{"^":"",kz:{"^":"f;0j:length=","%":"AudioBuffer"},kA:{"^":"io;",
h:function(a,b){return P.V(a.get(H.r(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new P.ff(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.c,null]},
$isH:1,
$asH:function(){return[P.c,null]},
"%":"AudioParamMap"},ff:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kB:{"^":"J;0j:length=","%":"AudioTrackList"},fg:{"^":"J;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lC:{"^":"fg;0j:length=","%":"OfflineAudioContext"},io:{"^":"f+O;"}}],["","",,P,{"^":"",fi:{"^":"f;",$isfi:1,"%":"WebGLBuffer"},hC:{"^":"f;",$ishC:1,"%":"WebGLProgram"},lM:{"^":"f;",
bf:function(a,b){return a.activeTexture(b)},
bh:function(a,b,c){return a.attachShader(b,c)},
bi:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindTexture(b,c)},
bl:function(a,b){return a.blendEquation(b)},
bm:function(a,b,c){return a.blendFunc(b,c)},
bn:function(a,b,c,d){return a.bufferData(b,c,d)},
bo:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bp:function(a,b){return a.compileShader(b)},
bq:function(a){return a.createBuffer()},
br:function(a){return a.createProgram()},
bt:function(a,b){return a.createShader(b)},
bu:function(a){return a.createTexture()},
bw:function(a,b){return a.depthMask(b)},
bx:function(a,b){return a.disable(b)},
by:function(a,b,c,d){return a.drawArrays(b,c,d)},
bz:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bA:function(a,b){return a.enable(b)},
bB:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.V(a.getContextAttributes())},
aE:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bC:function(a,b){return a.linkProgram(b)},
bF:function(a,b,c){return a.pixelStorei(b,c)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aB:function(a,b,c,d,e,f,g,h,i,j){this.au(a,b,c,d,e,f,g)
return},
bI:function(a,b,c,d,e,f,g){return this.aB(a,b,c,d,e,f,g,null,null,null)},
au:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bN:function(a,b,c){return a.uniform1f(b,c)},
bO:function(a,b,c){return a.uniform1fv(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
bQ:function(a,b,c){return a.uniform1iv(b,c)},
bR:function(a,b,c){return a.uniform2fv(b,c)},
bS:function(a,b,c){return a.uniform3fv(b,c)},
bT:function(a,b,c){return a.uniform4fv(b,c)},
bU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bW:function(a,b){return a.useProgram(b)},
bX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},lN:{"^":"f;",
d3:function(a,b){return a.beginTransformFeedback(b)},
d4:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
d6:function(a,b,c){return a.bindTransformFeedback(b,c)},
d8:function(a,b){return a.bindVertexArray(b)},
dd:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
dh:function(a){return a.createTransformFeedback()},
di:function(a){return a.createVertexArray()},
dk:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dl:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dm:function(a){return a.endTransformFeedback()},
dL:function(a,b,c,d){this.cY(a,b,H.y(c,"$isd",[P.c],"$asd"),d)
return},
cY:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
bf:function(a,b){return a.activeTexture(b)},
bh:function(a,b,c){return a.attachShader(b,c)},
bi:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindTexture(b,c)},
bl:function(a,b){return a.blendEquation(b)},
bm:function(a,b,c){return a.blendFunc(b,c)},
bn:function(a,b,c,d){return a.bufferData(b,c,d)},
bo:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bp:function(a,b){return a.compileShader(b)},
bq:function(a){return a.createBuffer()},
br:function(a){return a.createProgram()},
bt:function(a,b){return a.createShader(b)},
bu:function(a){return a.createTexture()},
bw:function(a,b){return a.depthMask(b)},
bx:function(a,b){return a.disable(b)},
by:function(a,b,c,d){return a.drawArrays(b,c,d)},
bz:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bA:function(a,b){return a.enable(b)},
bB:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.V(a.getContextAttributes())},
aE:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bC:function(a,b){return a.linkProgram(b)},
bF:function(a,b,c){return a.pixelStorei(b,c)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aB:function(a,b,c,d,e,f,g,h,i,j){this.au(a,b,c,d,e,f,g)
return},
bI:function(a,b,c,d,e,f,g){return this.aB(a,b,c,d,e,f,g,null,null,null)},
au:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bN:function(a,b,c){return a.uniform1f(b,c)},
bO:function(a,b,c){return a.uniform1fv(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
bQ:function(a,b,c){return a.uniform1iv(b,c)},
bR:function(a,b,c){return a.uniform2fv(b,c)},
bS:function(a,b,c){return a.uniform3fv(b,c)},
bT:function(a,b,c){return a.uniform4fv(b,c)},
bU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bW:function(a,b){return a.useProgram(b)},
bX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},hN:{"^":"f;",$ishN:1,"%":"WebGLShader"},i1:{"^":"f;",$isi1:1,"%":"WebGLTexture"},i3:{"^":"f;",$isi3:1,"%":"WebGLTransformFeedback"},i7:{"^":"f;",$isi7:1,"%":"WebGLUniformLocation"},ib:{"^":"f;",$isib:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lT:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return P.V(this.cL(a,b))},
i:function(a,b,c){H.h(c,"$isH")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cL:function(a,b){return a.item(b)},
$asm:function(){return[[P.H,,,]]},
$isi:1,
$asi:function(){return[[P.H,,,]]},
$isd:1,
$asd:function(){return[[P.H,,,]]},
$asp:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},jl:{"^":"f+m;"},jm:{"^":"jl+p;"}}],["","",,G,{"^":"",
ig:function(a){var z,y,x,w
z=H.q(a.split("\n"),[P.c])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.o(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.aa(z,"\n")},
dy:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bt(a,b)
z.aN(a,y,c)
z.bp(a,y)
x=H.bL(z.aJ(a,y,35713))
if(x!=null&&!x){w=z.aI(a,y)
P.ae("E:Compilation failed:")
P.ae("E:"+G.ig(c))
P.ae("E:Failure:")
P.ae(C.i.E("E:",w))
throw H.b(w)}return y},
bz:{"^":"a;"},
bF:{"^":"bz;",
aS:function(){return this.d},
k:function(a){var z,y,x,w
z=H.q(["{"+new H.dq(H.k7(this)).k(0)+"}["+this.a+"]"],[P.c])
for(y=this.d,x=new H.aR(y,[H.n(y,0)]),x=x.gB(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.aa(z,"\n")}},
fj:{"^":"hS;"},
fn:{"^":"a;0a,b"},
dn:{"^":"a;a,b,c"},
dm:{"^":"a;a,b,c"},
h8:{"^":"bF;d,a,b,c",p:{
da:function(a,b){var z=P.aa(P.c,P.a)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!1)
z.i(0,"cBlendEquation",b)
z.i(0,"cStencilFunc",$.ed())
return new G.h8(z,a,!1,!0)}}},
ha:{"^":"bz;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
a4:function(a){var z,y
this.ch=a
this.cy.i(0,"aPosition",a)
z=this.d
y=this.r.h(0,"aPosition")
J.b7(z.a,34962,y)
J.eC(z.a,34962,a,35048)},
ci:function(){return this.ch.length/3|0},
ah:function(a){var z,y,x,w,v
z=this.r
y=this.d
z.i(0,"aPosition",J.eG(y.a))
this.a4(a)
x=$.am().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.cA(y.a,this.e)
J.eR(y.a,w)
z=z.h(0,"aPosition")
v=x.cj()
J.b7(y.a,34962,z)
J.fb(y.a,w,v,5126,!1,0,0)},
k:function(a){var z,y,x,w
z=H.q(["Faces:0"],[P.c])
for(y=this.cy,x=new H.aR(y,[H.n(y,0)]),x=x.gB(x);x.t();){w=x.d
C.a.l(z,H.e(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.a.aa(z,"  ")},
p:{
c6:function(a,b,c,d){var z=P.c
return new G.ha(b,J.eK(b.a),c,P.aa(z,P.a),d,0,-1,P.aa(z,P.ah),"meshdata:"+a,!1,!0)}}},
hr:{"^":"bF;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cf:function(a,b){var z
if(typeof a!=="number")return a.dN()
if(typeof b!=="number")return H.ac(b)
z=a/b
if(this.z===z)return
this.z=z
this.aV()},
aV:function(){var z,y,x,w,v,u
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
aS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.x(new Float32Array(3))
u.a1(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.w(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.z(t)
y=!!z.$isbG
q=y?t.gdP(t):1
if(!!z.$isx){p=t.gY(t)
s=t.gZ(t)
r=t.gdM(t)
t=p}else if(y){p=t.gY(t)
s=t.gZ(t)
r=t.gdM(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.ac(t)
y=u[4]
if(typeof s!=="number")return H.ac(s)
x=u[8]
if(typeof r!=="number")return H.ac(r)
w=u[12]
o=u[1]
n=u[5]
m=u[9]
l=u[13]
k=u[2]
j=u[6]
i=u[10]
h=u[14]
g=u[3]
f=u[7]
e=u[11]
d=u[15]
u[12]=z*t+y*s+x*r+w*q
u[13]=o*t+n*s+m*r+l*q
u[14]=k*t+j*s+i*r+h*q
u[15]=g*t+f*s+e*r+d*q
d=this.cx
d.w(this.db)
e=d.a
c=e[0]
b=e[4]
a=e[8]
a0=e[12]
a1=e[1]
a2=e[5]
a3=e[9]
a4=e[13]
a5=e[2]
a6=e[6]
a7=e[10]
a8=e[14]
a9=e[3]
b0=e[7]
b1=e[11]
b2=e[15]
b3=u[0]
b4=u[4]
b5=u[8]
b6=u[12]
b7=u[1]
b8=u[5]
b9=u[9]
c0=u[13]
c1=u[2]
c2=u[6]
c3=u[10]
c4=u[14]
c5=u[3]
c6=u[7]
c7=u[11]
c8=u[15]
e[0]=c*b3+b*b7+a*c1+a0*c5
e[4]=c*b4+b*b8+a*c2+a0*c6
e[8]=c*b5+b*b9+a*c3+a0*c7
e[12]=c*b6+b*c0+a*c4+a0*c8
e[1]=a1*b3+a2*b7+a3*c1+a4*c5
e[5]=a1*b4+a2*b8+a3*c2+a4*c6
e[9]=a1*b5+a2*b9+a3*c3+a4*c7
e[13]=a1*b6+a2*c0+a3*c4+a4*c8
e[2]=a5*b3+a6*b7+a7*c1+a8*c5
e[6]=a5*b4+a6*b8+a7*c2+a8*c6
e[10]=a5*b5+a6*b9+a7*c3+a8*c7
e[14]=a5*b6+a6*c0+a7*c4+a8*c8
e[3]=a9*b3+b0*b7+b1*c1+b2*c5
e[7]=a9*b4+b0*b8+b1*c2+b2*c6
e[11]=a9*b5+b0*b9+b1*c3+b2*c7
e[15]=a9*b6+b0*c0+b1*c4+b2*c8
v.i(0,"uPerspectiveViewMatrix",d)
return v}},
kO:{"^":"a;"},
hH:{"^":"bz;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cm:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cB(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cB(w.a,v,t))}},
cq:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.q([],[P.c])
x=H.q([],[P.c])
for(y=new H.aR(y,[H.n(y,0)]),y=y.gB(y);y.t();){w=y.d
if(!z.av(0,w))C.a.l(x,w)}for(z=this.x,z=P.iV(z,z.r,H.n(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.y(b,"$isH",[P.c,P.a],"$asH")
z=Date.now()
for(y=new H.aR(b,[H.n(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.ev(s,0)){case 117:if(w.av(0,s)){r=b.h(0,s)
if(v.av(0,s))H.cr("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.am().h(0,s)
if(q==null)H.Q("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.K(r)
J.bU(x.a,p,r)}else if(!!J.z(r).$isfS)J.f9(x.a,p,r)
break
case"float":if(q.c===0){H.e_(r)
J.f7(x.a,p,r)}else if(!!J.z(r).$isah)J.f8(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ad(r,"$isai").a
J.cI(x.a,p,!1,s)}else if(!!J.z(r).$isah)J.cI(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.z.gc7(H.ad(r,"$isln"))
J.cH(x.a,p,!1,s)}else if(!!J.z(r).$isah)J.cH(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cG(o,p,H.ad(r,"$isbG").a)
else J.cG(o,p,H.h(r,"$isah"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cF(o,p,H.ad(r,"$isx").a)
else J.cF(o,p,H.h(r,"$isah"))
break
case"vec2":if(q.c===0){s=C.z.gc7(H.ad(r,"$ismj"))
J.cE(x.a,p,s)}else{H.h(r,"$isah")
J.cE(x.a,p,r)}break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.ac(s)
J.cx(x.a,33984+s)
s=H.ad(r,"$iscc").b
J.b8(x.a,3553,s)
s=this.ch
J.bU(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.E()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.ac(s)
J.cx(x.a,33984+s)
s=H.ad(r,"$iscc").b
J.b8(x.a,34067,s)
s=this.ch
J.bU(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.E()
this.ch=s+1
break
default:H.cr("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.af(r,!0)
o=x.a
if(s)J.bq(o,2929)
else J.bS(o,2929)
break
case"cStencilFunc":H.ad(r,"$isdn")
s=r.a
o=x.a
if(s===1281)J.bS(o,2960)
else{J.bq(o,2960)
o=r.b
n=r.c
J.f3(x.a,s,o,n)}break
case"cDepthWrite":H.bL(r)
J.eL(x.a,r)
break
case"cBlendEquation":H.ad(r,"$isdm")
s=r.a
o=x.a
if(s===1281)J.bS(o,3042)
else{J.bq(o,3042)
o=r.b
n=r.c
J.eB(x.a,o,n)
J.eA(x.a,s)}break}++t
break}}m=P.fF(0,0,0,Date.now()-new P.bu(z,!1).a,0,0)
""+t
m.k(0)},
cg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.y(b,"$isd",[G.bF],"$asd")
Date.now()
z=this.d
J.fa(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b_()}for(x=0;x<2;++x){w=b[x]
this.cu(w.a,w.aS())}y=this.Q
y.X(0)
for(v=a.cy,v=new H.aR(v,[H.n(v,0)]),v=v.gB(v);v.t();)y.l(0,v.d)
u=this.cq()
if(u.length!==0)P.ae("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.cA(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.ci()
s=a.Q
r=a.z
if(t)J.ey(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eP(q,y,v,s,0,r)
else J.eO(q,y,v,s,0)}else{s=z.a
if(r>1)J.eN(s,y,0,v,r)
else J.eM(s,y,0,v)}if(t)J.eS(z.a)},
aR:function(a,b){return this.cg(a,b,null)},
p:{
df:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.c
y=P.X(null,null,null,z)
x=c.b
w=d.b
v=H.y(c.f,"$isd",[z],"$asd")
u=J.eH(b.a)
t=G.dy(b.a,35633,x)
J.cy(b.a,u,t)
s=G.dy(b.a,35632,w)
J.cy(b.a,u,s)
if(v.length>0)J.f6(b.a,u,v,35980)
J.f1(b.a,u)
if(!H.bL(J.f0(b.a,u,35714)))H.Q(J.f_(b.a,u))
z=new G.hH(b,c,d,u,P.c5(c.c,z),P.aa(z,P.a),P.aa(z,z),y,a,!1,!0)
z.cm(a,b,c,d)
return z}}},
A:{"^":"a;a,b,c",
cj:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hO:{"^":"a;a,0b,c,d,e,f,r,x",
aQ:function(a){var z,y,x,w
H.y(a,"$isd",[P.c],"$asd")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.ae(z)},
a3:function(a){var z,y,x
H.y(a,"$isd",[P.c],"$asd")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.P)(a),++x)C.a.l(y,a[x])
C.a.ae(y)},
ce:function(a){var z,y
H.y(a,"$isd",[P.c],"$asd")
for(z=this.f,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ae(z)},
co:function(a,b){this.b=this.aW(!0,H.y(a,"$isd",[P.c],"$asd"),b)},
aU:function(a){return this.co(a,null)},
cn:function(a,b){this.b=this.aW(!1,H.y(a,"$isd",[P.c],"$asd"),b)},
aT:function(a){return this.cn(a,null)},
aW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.c]
H.y(b,"$isd",z,"$asd")
y=this.c
x=y.length===0
w=H.q(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.P)(y),++u){t=y[u]
s=$.am().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.o(z,u)
q=z[u]
s=$.am().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.am().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.am().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.aa(w,"\n")},
p:{
bD:function(a){var z,y
z=P.c
y=[z]
return new G.hO(a,H.q([],y),H.q([],y),H.q([],y),H.q([],y),0,P.aa(z,P.G))}}},
hS:{"^":"bz;"},
i2:{"^":"a;a,b,c,d,e,f,r"},
cc:{"^":"a;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fQ:{"^":"cc;f,a,b,c,d,e",p:{
cZ:function(a,b,c,d,e){var z=J.eI(a.a)
J.b8(a.a,e,z)
J.f2(a.a,37440,1)
J.b8(a.a,e,z)
J.f4(a.a,e,0,6408,6408,5121,c)
J.cD(a.a,e,10240,9729)
J.cD(a.a,e,10241,9729)
J.eZ(a.a)
J.b8(a.a,e,null)
return new G.fQ(c,b,z,e,a,new G.i2(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
dt:function(){var z,y,x
z=document.createElement("canvas")
z.width=64
z.height=64
y=H.h(C.h.bZ(z,"2d"),"$isbY")
x=(y&&C.q).bs(y,32,32,1,32,32,22);(x&&C.n).a8(x,0,"gray")
C.n.a8(x,1,"black")
y.fillStyle=x
C.q.dn(y,0,0,64,64)
x=C.q.bs(y,32,32,1,32,32,6);(x&&C.n).a8(x,0,"white")
C.n.a8(x,1,"gray")
y.globalAlpha=0.9
y.fillStyle=x
y.arc(32,32,4,0,6.283185307179586,!1)
y.fill()
return z},
iX:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.iy("span",null),"$isN")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).aj(y,"float")
y.setProperty(x,"left","")
x=C.x.aj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.H(z,v)}return z},
hU:{"^":"a;",
cp:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.b("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.j(z)
y.H(z,this.b)
y.H(z,this.d)
y.H(z,this.c)}},
hV:{"^":"hU;e,f,a,b,c,d",
ct:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.dK(y,2)+" fps"
C.r.c2(this.c,b)
x=C.b.C(30*C.y.d9(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isN")
v=w.style
u=""+x+"px"
v.height=u
C.r.H(z,w)},
cs:function(a){return this.ct(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",fZ:{"^":"a;a,b,c",
ck:function(a){var z,y
a=document
z=W.aP
y={func:1,ret:-1,args:[z]}
W.ak(a,"keydown",H.k(new D.h0(this),y),!1,z)
W.ak(a,"keyup",H.k(new D.h1(this),y),!1,z)},
p:{
h_:function(a){var z=P.G
z=new D.fZ(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z))
z.ck(a)
return z}}},h0:{"^":"l:11;a",
$1:function(a){var z
H.h(a,"$isaP")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h1:{"^":"l:11;a",
$1:function(a){var z
H.h(a,"$isaP")
z=this.a
z.a.bG(0,a.which)
z.c.l(0,a.which)}},hd:{"^":"a;a,b,c,d,e,f,r,x",
cl:function(a){var z,y
z=C.h.gdA(a)
y=H.n(z,0)
W.ak(z.a,z.b,H.k(new D.hf(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gdz(a)
z=H.n(y,0)
W.ak(y.a,y.b,H.k(new D.hg(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.h.gdB(a)
y=H.n(z,0)
W.ak(z.a,z.b,H.k(new D.hh(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gdC(a)
z=H.n(y,0)
W.ak(y.a,y.b,H.k(new D.hi(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
he:function(a){var z=P.G
z=new D.hd(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),0,0,0,0,0)
z.cl(a)
return z}}},hf:{"^":"l:3;a",
$1:function(a){var z,y
H.h(a,"$isY")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.K(y.gbE(a).a)
z.x=H.K(y.gbE(a).b)
z.d=a.movementX
z.e=a.movementY}},hg:{"^":"l:3;a",
$1:function(a){var z
H.h(a,"$isY")
a.preventDefault()
P.ae("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hh:{"^":"l:3;a",
$1:function(a){var z
H.h(a,"$isY")
a.preventDefault()
z=this.a
z.a.bG(0,a.button)
z.c.l(0,a.button)}},hi:{"^":"l:24;a",
$1:function(a){H.h(a,"$isaY")
a.preventDefault()
this.a.f=H.K(C.ae.gdj(a))}},hp:{"^":"fj;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
cn:function(a){var z,y
z=C.C.dq(H.y(a,"$isi",[P.a],"$asi"),0,new A.k9(),P.G)
if(typeof z!=="number")return H.ac(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k9:{"^":"l:25;",
$2:function(a,b){var z,y
H.K(a)
z=J.ag(b)
if(typeof a!=="number")return a.E()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ai:{"^":"a;a",
w:function(a){var z,y
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
k:function(a){return"[0] "+this.a_(0).k(0)+"\n[1] "+this.a_(1).k(0)+"\n[2] "+this.a_(2).k(0)+"\n[3] "+this.a_(3).k(0)+"\n"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ai){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.cn(this.a)},
a_:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.o(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.o(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.o(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.o(y,x)
z[3]=y[x]
return new T.bG(z)},
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
z[15]=1}},x:{"^":"a;a",
a1:function(a,b,c){var z=this.a
C.C.i(z,0,a)
z[1]=b
z[2]=c},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.cn(this.a)},
af:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.x(z)
y.w(this)
x=b.a
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
E:function(a,b){var z=new T.x(new Float32Array(3))
z.w(this)
z.l(0,b)
return z},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gab:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ac:function(a){var z,y,x
z=Math.sqrt(this.gab())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aw:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bv:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.x(new Float32Array(3))
z.a1(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
l:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
aP:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
U:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
c0:function(a){var z=new T.x(new Float32Array(3))
z.w(this)
z.U(0,a)
return z},
gY:function(a){return this.a[0]},
gZ:function(a){return this.a[1]}},bG:{"^":"a;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bG){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.cn(this.a)},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gY:function(a){return this.a[0]},
gZ:function(a){return this.a[1]}}}],["","",,Z,{"^":"",
bB:function(a,b){var z,y,x,w
z=a.ay()
y=a.ay()
x=a.ay()
w=new T.x(new Float32Array(3))
w.a1(z-0.5,y-0.5,x-0.5)
w.U(0,b)
return w},
d7:function(a,b,c,d){var z,y,x,w,v
H.y(a,"$isd",[P.a1],"$asd")
z=H.q([],[Z.bA])
for(y=0;y<5;++y){x=a[y]
w=new Float32Array(3)
w[0]=x
w[1]=b
w[2]=c
v=new T.x(new Float32Array(3))
v.w(new T.x(w))
v.U(0,d)
w=new T.x(new Float32Array(3))
w.w(v)
C.a.l(z,new Z.bA(w))}return z},
cX:function(a){var z,y,x,w,v,u,t,s
H.y(a,"$isd",[Z.bA],"$asd")
z=a.length
y=new Float32Array(3*z)
for(z=a.length,x=y.length,w=0,v=0;v<z;++v){u=a[v].a.a
t=u[0]
if(w>=x)return H.o(y,w)
y[w]=t
t=w+1
s=u[1]
if(t>=x)return H.o(y,t)
y[t]=s
s=w+2
u=u[2]
if(s>=x)return H.o(y,s)
y[s]=u
w+=3}return y},
c0:function(a,b){var z,y,x,w,v,u,t
H.y(a,"$isd",[Z.bx],"$asd")
for(z=a.length,y=b.length,x=0,w=0;w<z;++w){v=a[w].a.a
u=v[0]
if(x>=y)return H.o(b,x)
b[x]=u
u=x+1
t=v[1]
if(u>=y)return H.o(b,u)
b[u]=t
t=x+2
v=v[2]
if(t>=y)return H.o(b,t)
b[t]=v
x+=3}},
e5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z={}
y=$.am()
y.i(0,"uSources",C.F)
y.i(0,"uSinks",C.F)
y=document
x=C.j.c_(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.hV(0,0,x,w,y.createElement("div"),R.iX("blue","gray",90,30))
u.cp(x,"blue","gray")
t=P.j8(0)
s=H.h(C.j.az(y,"#webgl-canvas"),"$isbX")
r=s.clientWidth
q=s.clientHeight
s.width=r
s.height=q
p=new G.fn(s)
y=P.c
x=P.a
v=(s&&C.h).aD(s,"webgl2",P.d5(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
p.a=v
if(v==null)H.Q(P.cW('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.eY(v))
if($.k3>0)P.ae("I: "+o)
J.eD(v,0,0,0,1)
J.bq(v,2929)
v=new Float32Array(3)
o=D.h_(null)
n=D.he(s)
m=new T.ai(new Float32Array(16))
m.V()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new D.hp(15,0.5,0.5,0,new T.x(v),-0.02,o,n,m,new T.x(l),new T.x(k),new T.x(j),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.ai(new Float32Array(16))
v.V()
o=new T.ai(new Float32Array(16))
o.V()
h=new G.hr(i,50,1,0.1,1000,v,o,new T.ai(new Float32Array(16)),P.aa(y,x),"perspective",!1,!0)
h.aV()
h.cf(r,q)
g=G.df("CPU",p,$.et(),$.es())
f=G.df("GPU",p,$.er(),$.eq())
y=f.e
e=C.a.ds(y.f,"tPosition")
P.ae("@@@@ "+e)
x=[P.a1]
d=Z.d7(H.q([2,1,0,-1,-2],x),0,2,3)
c=Z.d7(H.q([2,1,0,-1,-2],x),0,-2,3)
x=Z.bB(t,10010)
v=new T.x(new Float32Array(3))
v.w(x)
b=H.q([new Z.bx(v)],[Z.bx])
v=b.length
a=new Float32Array(3*v)
z.a=a
Z.c0(b,a)
x=$.ea()
a0=G.da("stars",x)
v=a0.d
v.i(0,"uTexture",G.cZ(p,"Utils::Particles",R.dt(),null,3553))
o=new T.ai(new Float32Array(16))
o.V()
v.i(0,"uModelMatrix",o)
v.i(0,"uPointSize",200)
a1=G.c6("mdJS",g.d,0,g.e.x)
a1.ah(a)
a2=G.da("stars",x)
x=a2.d
x.i(0,"uTexture",G.cZ(p,"Utils::Particles",R.dt(),null,3553))
v=new T.ai(new Float32Array(16))
v.V()
x.i(0,"uModelMatrix",v)
x.i(0,"uPointSize",200)
x.i(0,"uSources",Z.cX(d))
x.i(0,"uSinks",Z.cX(c))
x=f.d
y=y.x
a3=G.c6("ionsOut",x,0,y)
a3.ah(a)
a4=G.c6("ionsIn",x,0,y)
a4.ah(a)
y=new Z.kn(z,b,t,p,e,a3,a4)
a5=J.eJ(p.a)
J.ez(p.a,36386,a5)
y.$1(null)
x=$.cw()
x.toString
v=W.W
W.ak(x,"change",H.k(y,{func:1,ret:-1,args:[v]}),!1,v)
new Z.kp(i,new Z.ko(z,b,d,c,t,a1),g,a1,h,a0,f,a4,a2,p,a3,b,u).$1(0)},
bA:{"^":"a;a",
k:function(a){var z=this.a.a
return"POLE: "+(H.e(z[0])+" "+H.e(z[1])+" "+H.e(z[2]))}},
bx:{"^":"a;a",
cr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=[Z.bA]
H.y(a,"$isd",z,"$asd")
H.y(b,"$isd",z,"$asd")
y=new T.x(new Float32Array(3))
for(z=a.length,x=0;x<a.length;a.length===z||(0,H.P)(a),++x){w=a[x]
v=this.a
u=new T.x(new Float32Array(3))
u.w(v)
u.aP(0,w.a)
t=Math.sqrt(u.gab())
if(t<=0.2)continue
if(t>100.1){z=c.bD(a.length)
if(z<0||z>=a.length)return H.o(a,z)
s=a[z]
z=Z.bB(c,0.35)
v=new T.x(new Float32Array(3))
v.w(s.a)
v.l(0,z)
this.a=v
return}v=new T.x(new Float32Array(3))
v.w(u)
v.U(0,1/(t*t))
r=new T.x(new Float32Array(3))
r.w(y)
r.l(0,v)
y=r}for(z=b.length,x=0;x<b.length;b.length===z||(0,H.P)(b),++x,y=r){w=b[x]
v=this.a
u=new T.x(new Float32Array(3))
u.w(w.a)
u.aP(0,v)
t=Math.sqrt(u.gab())
if(t<=0.2){z=c.bD(a.length)
if(z<0||z>=a.length)return H.o(a,z)
s=a[z]
z=Z.bB(c,0.35)
v=new T.x(new Float32Array(3))
v.w(s.a)
v.l(0,z)
this.a=v
return}v=new T.x(new Float32Array(3))
v.w(u)
v.U(0,1/(t*t))
r=new T.x(new Float32Array(3))
r.w(y)
r.l(0,v)}z=this.a
v=new T.x(new Float32Array(3))
v.w(y)
v.ac(0)
this.a=z.E(0,v.c0(d))},
k:function(a){var z=this.a.a
return"ION: "+(H.e(z[0])+" "+H.e(z[1])+" "+H.e(z[2]))}},
kn:{"^":"l:26;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w,v,u,t
z=P.ki($.cw().value,null,null)
P.ae("resize to "+H.e(z)+" ions")
y=this.b
C.a.sj(y,0)
if(typeof z!=="number")return H.ac(z)
x=this.c
w=0
for(;w<z;++w){v=Z.bB(x,10010)
u=new T.x(new Float32Array(3))
u.w(v)
C.a.l(y,new Z.bx(u))}t=new Float32Array(3*z)
x=this.a
x.a=t
Z.c0(y,t)
y=this.d
J.b7(y.a,34962,null)
v=this.e
J.cz(y.a,35982,v,null)
u=this.f
u.a4(x.a)
this.r.a4(x.a)
u=u.r.h(0,"aPosition")
J.cz(y.a,35982,v,u)}},
ko:{"^":"l:27;a,b,c,d,e,f",
$1:function(a){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=this.c,w=this.d,v=this.e,u=0;u<z.length;z.length===y||(0,H.P)(z),++u)z[u].cr(x,w,v,a)
y=this.a
Z.c0(z,y.a)
this.f.a4(y.a)}},
kp:{"^":"l:28;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.cq(b1)
z=this.a
z.go+=0.002
y=z.r1
x=y.a
if(x.u(0,0)||x.u(0,1)){x=z.go
w=y.d
if(typeof w!=="number")return w.aL()
z.go=x+w*0.01
w=z.id
x=y.e
if(typeof x!=="number")return x.aL()
z.id=w+x*0.01}x=z.k4
w=x.a
if(w.u(0,37))z.go+=0.03
else if(w.u(0,39))z.go-=0.03
if(w.u(0,38))z.id+=0.03
else if(w.u(0,40))z.id-=0.03
if(w.u(0,33))z.fy*=0.99
else if(w.u(0,34))z.fy*=1.01
if(w.u(0,32)){z.go=0
z.id=0}w=y.f
if(typeof w!=="number")return w.aL()
w=z.fy-w*z.k3
if(w>0)z.fy=w
w=C.t.da(z.id,-1.4707963267948965,1.4707963267948965)
z.id=w
v=z.fy
u=z.go
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=z.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=z.k2
w=u.a
r[12]=r[12]+w[0]
r[13]=r[13]+w[1]
r[14]=r[14]+w[2]
q=r[12]
p=r[13]
o=r[14]
n=new T.x(new Float32Array(3))
n.a1(0,1,0)
w=z.e
v=w.a
v[0]=r[12]
v[1]=r[13]
v[2]=r[14]
m=w.af(0,u)
m.ac(0)
l=n.bv(m)
l.ac(0)
k=m.bv(l)
k.ac(0)
u=l.aw(w)
v=k.aw(w)
w=m.aw(w)
s=l.a
j=s[0]
i=k.a
h=i[0]
g=m.a
f=g[0]
e=s[1]
d=i[1]
c=g[1]
s=s[2]
i=i[2]
g=g[2]
r[15]=1
r[14]=-w
r[13]=-v
r[12]=-u
r[11]=0
r[10]=g
r[9]=i
r[8]=s
r[7]=0
r[6]=c
r[5]=d
r[4]=e
r[3]=0
r[2]=f
r[1]=h
r[0]=j
r[12]=q
r[13]=p
r[14]=o
j=z.f
h=j.a
h[0]=r[2]
h[1]=r[6]
h[2]=r[10]
z=-z.k1
b=Math.sqrt(j.gab())
q=h[0]/b
p=h[1]/b
o=h[2]/b
a=Math.cos(z)
a0=Math.sin(z)
a1=1-a
a2=q*q*a1+a
z=o*a0
a3=q*p*a1-z
h=p*a0
a4=q*o*a1+h
a5=p*q*a1+z
a6=p*p*a1+a
z=q*a0
a7=p*o*a1-z
a8=o*q*a1-h
a9=o*p*a1+z
b0=o*o*a1+a
z=r[0]
h=r[4]
j=r[8]
f=r[1]
e=r[5]
d=r[9]
c=r[2]
s=r[6]
i=r[10]
g=r[3]
u=r[7]
v=r[11]
r[0]=z*a2+h*a5+j*a8
r[1]=f*a2+e*a5+d*a8
r[2]=c*a2+s*a5+i*a8
r[3]=g*a2+u*a5+v*a8
r[4]=z*a3+h*a6+j*a9
r[5]=f*a3+e*a6+d*a9
r[6]=c*a3+s*a6+i*a9
r[7]=g*a3+u*a6+v*a9
r[8]=z*a4+h*a7+j*b0
r[9]=f*a4+e*a7+d*b0
r[10]=c*a4+s*a7+i*b0
r[11]=g*a4+u*a7+v*b0
x.c.X(0)
x.b.X(0)
y.e=0
y.d=0
y.f=0
y.c.X(0)
y.b.X(0)
z=this.e
y=[G.bF]
if($.ep().checked){this.b.$1(0.06)
this.c.aR(this.d,H.q([z,this.f],y))}else{x=this.x
this.r.aR(x,H.q([z,this.y],y))
y=this.z
x=x.r.h(0,"aPosition")
J.b7(y.a,34962,x)
x=this.Q.r.h(0,"aPosition")
J.b7(y.a,35982,x)
x=this.ch.length
J.eF(y.a,35982,34962,0,0,x*3*4)}C.af.gd1(window).bK(this,-1)
if(typeof b1!=="number")return b1.E()
this.cx.cs(b1+0)}}},1]]
setupProgram(dart,0,0)
J.z=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.d2.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bO(a)}
J.b3=function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bO(a)}
J.e0=function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bO(a)}
J.k4=function(a){if(typeof a=="number")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aX.prototype
return a}
J.k5=function(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aX.prototype
return a}
J.e1=function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aX.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bO(a)}
J.k6=function(a){if(a==null)return a
if(!(a instanceof P.a))return J.aX.prototype
return a}
J.af=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.z(a).F(a,b)}
J.a3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k4(a).P(a,b)}
J.eu=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kk(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).h(a,b)}
J.ev=function(a,b){return J.e1(a).b2(a,b)}
J.bp=function(a,b){return J.j(a).cP(a,b)}
J.ew=function(a,b,c){return J.j(a).cQ(a,b,c)}
J.cx=function(a,b){return J.j(a).bf(a,b)}
J.ex=function(a,b,c,d){return J.j(a).cZ(a,b,c,d)}
J.cy=function(a,b,c){return J.j(a).bh(a,b,c)}
J.ey=function(a,b){return J.j(a).d3(a,b)}
J.b7=function(a,b,c){return J.j(a).bi(a,b,c)}
J.cz=function(a,b,c,d){return J.j(a).d4(a,b,c,d)}
J.b8=function(a,b,c){return J.j(a).bk(a,b,c)}
J.ez=function(a,b,c){return J.j(a).d6(a,b,c)}
J.cA=function(a,b){return J.j(a).d8(a,b)}
J.eA=function(a,b){return J.j(a).bl(a,b)}
J.eB=function(a,b,c){return J.j(a).bm(a,b,c)}
J.eC=function(a,b,c,d){return J.j(a).bn(a,b,c,d)}
J.eD=function(a,b,c,d,e){return J.j(a).bo(a,b,c,d,e)}
J.eE=function(a,b){return J.k5(a).K(a,b)}
J.bR=function(a,b,c){return J.b3(a).dc(a,b,c)}
J.eF=function(a,b,c,d,e,f){return J.j(a).dd(a,b,c,d,e,f)}
J.eG=function(a){return J.j(a).bq(a)}
J.eH=function(a){return J.j(a).br(a)}
J.eI=function(a){return J.j(a).bu(a)}
J.eJ=function(a){return J.j(a).dh(a)}
J.eK=function(a){return J.j(a).di(a)}
J.eL=function(a,b){return J.j(a).bw(a,b)}
J.bS=function(a,b){return J.j(a).bx(a,b)}
J.eM=function(a,b,c,d){return J.j(a).by(a,b,c,d)}
J.eN=function(a,b,c,d,e){return J.j(a).dk(a,b,c,d,e)}
J.eO=function(a,b,c,d,e){return J.j(a).bz(a,b,c,d,e)}
J.eP=function(a,b,c,d,e,f){return J.j(a).dl(a,b,c,d,e,f)}
J.eQ=function(a,b){return J.e0(a).q(a,b)}
J.bq=function(a,b){return J.j(a).bA(a,b)}
J.eR=function(a,b){return J.j(a).bB(a,b)}
J.eS=function(a){return J.j(a).dm(a)}
J.eT=function(a,b){return J.j(a).D(a,b)}
J.eU=function(a){return J.j(a).gd2(a)}
J.ag=function(a){return J.z(a).gv(a)}
J.br=function(a){return J.e0(a).gB(a)}
J.aJ=function(a){return J.b3(a).gj(a)}
J.eV=function(a){return J.j(a).gdD(a)}
J.eW=function(a){return J.j(a).gdI(a)}
J.eX=function(a){return J.k6(a).gY(a)}
J.bT=function(a,b){return J.j(a).T(a,b)}
J.eY=function(a){return J.j(a).ad(a)}
J.eZ=function(a){return J.j(a).aE(a)}
J.f_=function(a,b){return J.j(a).aF(a,b)}
J.f0=function(a,b,c){return J.j(a).aG(a,b,c)}
J.cB=function(a,b,c){return J.j(a).aK(a,b,c)}
J.f1=function(a,b){return J.j(a).bC(a,b)}
J.f2=function(a,b,c){return J.j(a).bF(a,b,c)}
J.cC=function(a){return J.j(a).dE(a)}
J.f3=function(a,b,c,d){return J.j(a).aO(a,b,c,d)}
J.f4=function(a,b,c,d,e,f,g){return J.j(a).bI(a,b,c,d,e,f,g)}
J.cD=function(a,b,c,d){return J.j(a).bJ(a,b,c,d)}
J.f5=function(a){return J.e1(a).dJ(a)}
J.b9=function(a){return J.z(a).k(a)}
J.f6=function(a,b,c,d){return J.j(a).dL(a,b,c,d)}
J.f7=function(a,b,c){return J.j(a).bN(a,b,c)}
J.f8=function(a,b,c){return J.j(a).bO(a,b,c)}
J.bU=function(a,b,c){return J.j(a).bP(a,b,c)}
J.f9=function(a,b,c){return J.j(a).bQ(a,b,c)}
J.cE=function(a,b,c){return J.j(a).bR(a,b,c)}
J.cF=function(a,b,c){return J.j(a).bS(a,b,c)}
J.cG=function(a,b,c){return J.j(a).bT(a,b,c)}
J.cH=function(a,b,c,d){return J.j(a).bU(a,b,c,d)}
J.cI=function(a,b,c,d){return J.j(a).bV(a,b,c,d)}
J.fa=function(a,b){return J.j(a).bW(a,b)}
J.fb=function(a,b,c,d,e,f,g){return J.j(a).bX(a,b,c,d,e,f,g)}
I.aG=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bs.prototype
C.h=W.bX.prototype
C.n=W.fk.prototype
C.q=W.bY.prototype
C.x=W.fu.prototype
C.r=W.fB.prototype
C.L=W.fD.prototype
C.M=W.fO.prototype
C.j=W.fP.prototype
C.N=J.f.prototype
C.a=J.bd.prototype
C.y=J.d0.prototype
C.b=J.d1.prototype
C.z=J.d2.prototype
C.t=J.be.prototype
C.i=J.bf.prototype
C.U=J.bg.prototype
C.C=H.hj.prototype
C.Y=W.hl.prototype
C.D=J.hs.prototype
C.E=W.hD.prototype
C.K=W.i0.prototype
C.w=J.aX.prototype
C.ae=W.aY.prototype
C.af=W.id.prototype
C.e=new P.ja()
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.q(I.aG(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.W=H.q(I.aG(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.X=H.q(I.aG([]),[P.c])
C.u=H.q(I.aG(["bind","if","ref","repeat","syntax"]),[P.c])
C.v=H.q(I.aG(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.Z=new G.A("vec3","vertex btangents",0)
C.d=new G.A("vec3","",0)
C.F=new G.A("vec3","",5)
C.a_=new G.A("vec4","delta from light",0)
C.o=new G.A("","",0)
C.G=new G.A("vec3","vertex coordinates",0)
C.a0=new G.A("vec3","vertex binormals",0)
C.H=new G.A("vec4","for wireframe",0)
C.a1=new G.A("vec4","per vertex color",0)
C.a2=new G.A("float","for normal maps",0)
C.k=new G.A("mat4","",0)
C.a4=new G.A("mat4","",4)
C.a3=new G.A("mat4","",128)
C.c=new G.A("float","",0)
C.a5=new G.A("float","",4)
C.a6=new G.A("float","depth for shadowmaps",0)
C.f=new G.A("sampler2D","",0)
C.a7=new G.A("float","for bump maps",0)
C.a8=new G.A("vec2","texture uvs",0)
C.a9=new G.A("float","time since program start in sec",0)
C.l=new G.A("vec2","",0)
C.aa=new G.A("samplerCube","",0)
C.m=new G.A("vec4","",0)
C.ab=new G.A("vec3","vertex normals",0)
C.ac=new G.A("sampler2DShadow","",0)
C.I=new G.A("vec3","per vertex color",0)
C.J=new G.A("mat3","",0)
C.ad=new G.A("vec3","vertex tangents",0)
$.a4=0
$.aK=null
$.cL=null
$.ce=!1
$.e3=null
$.dW=null
$.e8=null
$.bM=null
$.bP=null
$.co=null
$.aD=null
$.b_=null
$.b0=null
$.cf=!1
$.F=C.e
$.a9=null
$.c_=null
$.cV=null
$.cU=null
$.cR=null
$.cQ=null
$.cP=null
$.cO=null
$.k3=0
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
I.$lazy(y,x,w)}})(["kI","ec",function(){return H.e2("_$dart_dartClosure")},"lk","ct",function(){return H.e2("_$dart_js")},"m6","ee",function(){return H.a6(H.bE({
toString:function(){return"$receiver$"}}))},"m7","ef",function(){return H.a6(H.bE({$method$:null,
toString:function(){return"$receiver$"}}))},"m8","eg",function(){return H.a6(H.bE(null))},"m9","eh",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mc","ek",function(){return H.a6(H.bE(void 0))},"md","el",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mb","ej",function(){return H.a6(H.dp(null))},"ma","ei",function(){return H.a6(function(){try{null.$method$}catch(z){return z.message}}())},"mf","en",function(){return H.a6(H.dp(void 0))},"me","em",function(){return H.a6(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mp","cu",function(){return P.ih()},"mF","b6",function(){return[]},"kF","eb",function(){return{}},"mw","eo",function(){return P.c5(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)},"mx","cv",function(){return P.aa(P.c,P.bb)},"lU","ed",function(){return new G.dn(1281,0,4294967295)},"kC","ea",function(){return new G.dm(32774,770,769)},"mD","am",function(){return P.d5(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.c,G.A)},"mO","et",function(){var z,y
z=G.bD("PointSpritesV")
y=[P.c]
z.aQ(H.q(["aPosition"],y))
z.a3(H.q(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.aU(H.q(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"mN","es",function(){var z,y
z=G.bD("PointSpritesF")
y=[P.c]
z.a3(H.q(["uTexture"],y))
z.aU(H.q(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mJ","cw",function(){return H.h(C.j.az(W.dZ(),"#particles"),"$isdh")},"mI","ep",function(){return H.h(C.j.az(W.dZ(),"#cpucompute"),"$isd_")},"mM","er",function(){var z,y
z=G.bD("ParticleV")
y=[P.c]
z.aQ(H.q(["aPosition"],y))
z.a3(H.q(["uPerspectiveViewMatrix","uModelMatrix","uPointSize","uSources","uSinks"],y))
z.ce(H.q(["tPosition"],y))
z.aT(H.q(["const float kMaxDistance = 100.1;\nconst float kMinDistance = 0.2;\nconst float dt = 0.06;  \n    \nfloat rand(vec2 seed){\n    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453);\n}      \n\nint irand(int n, vec2 seed) {\n    return int(floor(rand(seed) * float(n)));\n}\n\nvec3 vec3rand(vec3 seed) {\n    return vec3(rand(seed.yz) - 0.5, rand(seed.xz) - 0.5, rand(seed.xy) - 0.5);\n}\n\nvec3 RandomSource(vec3 seed) {\n    return uSources[irand(uSources.length(), seed.xy * seed.z)];\n}\n\nvec3 Update(vec3 pos, vec3 seed) {\n    vec3 force = vec3(0.0, 0.0, 0.0);\n    for (int i = 0; i < uSources.length(); ++i) {\n       vec3 d = pos - uSources[i];\n       float l = length(d);\n       if (l <= kMinDistance) continue;\n       if (l >= kMaxDistance) {\n           return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    \n    for (int i = 0; i < uSinks.length(); ++i) {\n       vec3 d = uSinks[i] - pos;\n       float l = length(d);\n       if (l <= kMinDistance) {\n          return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    return pos + normalize(force) * dt;\n}\n      \nvoid main() {        \n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * \n                  vec4(aPosition, 1.0);\n    gl_PointSize = uPointSize/gl_Position.z;\n    \n    // new position for next round\n    tPosition = Update(aPosition, gl_Position.xyz);\n}\n"],y))
return z},"mL","eq",function(){var z,y
z=G.bD("ParticleF")
y=[P.c]
z.a3(H.q(["uTexture"],y))
z.aT(H.q(["void main() {\n      oFragColor = texture( uTexture,  gl_PointCoord);\n}\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[P.c,,]},{func:1,ret:P.D,args:[W.Y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.c,args:[P.G]},{func:1,ret:P.M,args:[W.a5]},{func:1,ret:P.M,args:[P.c]},{func:1,ret:P.D,args:[W.aP]},{func:1,ret:P.M,args:[W.N,P.c,P.c,W.bj]},{func:1,args:[,P.c]},{func:1,args:[P.c]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[,],opt:[P.Z]},{func:1,ret:[P.a7,,],args:[,]},{func:1,ret:P.M,args:[W.t]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.D,args:[P.C]},{func:1,args:[W.W]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.D,args:[W.aY]},{func:1,ret:P.G,args:[P.G,P.a]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.a1]},{func:1,ret:-1,args:[P.C]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.kv(d||a)
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
Isolate.aG=a.aG
Isolate.cl=a.cl
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.e5,[])
else Z.e5([])})})()
//# sourceMappingURL=transform_feedback.dart.js.map
