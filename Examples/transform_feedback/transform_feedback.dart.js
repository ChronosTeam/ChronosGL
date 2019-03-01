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
var dart=[["","",,H,{"^":"",li:{"^":"a;a"}}],["","",,J,{"^":"",
cp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bN:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.co==null){H.kf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.ds("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.ct()]
if(v!=null)return v
v=H.kl(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.ct(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
f:{"^":"a;",
F:function(a,b){return a===b},
gv:function(a){return H.aT(a)},
k:["cb",function(a){return"Instance of '"+H.aU(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fW:{"^":"f;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isM:1},
d2:{"^":"f;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isD:1},
c2:{"^":"f;",
gv:function(a){return 0},
k:["cd",function(a){return String(a)}]},
hr:{"^":"c2;"},
aW:{"^":"c2;"},
bg:{"^":"c2;",
k:function(a){var z=a[$.ec()]
if(z==null)return this.cd(a)
return"JavaScript function for "+H.e(J.b9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbb:1},
bd:{"^":"f;$ti",
l:function(a,b){H.w(b,H.n(a,0))
if(!!a.fixed$length)H.Q(P.v("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isi",[H.n(a,0)],"$asi")
if(!!a.fixed$length)H.Q(P.v("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.P)(b),++y)a.push(b[y])},
a7:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
bf:function(a,b){var z,y
H.k(b,{func:1,ret:P.M,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.an(a))}return!1},
c5:function(a,b){if(!!a.immutable$list)H.Q(P.v("sort"))
H.hQ(a,J.jP(),H.n(a,0))},
ac:function(a){return this.c5(a,null)},
du:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.ae(a[z],b))return z
return-1},
dt:function(a,b){return this.du(a,b,0)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ae(a[z],b))return!0
return!1},
k:function(a){return P.c0(a,"[","]")},
gB:function(a){return new J.fe(a,a.length,0,[H.n(a,0)])},
gv:function(a){return H.aT(a)},
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
fV:function(a,b){return J.c1(H.q(a,[b]))},
c1:function(a){H.bn(a)
a.fixed$length=Array
return a},
lg:[function(a,b){return J.eE(H.e6(a,"$isR"),H.e6(b,"$isR"))},"$2","jP",8,0,29]}},
lh:{"^":"bd;$ti"},
fe:{"^":"a;a,b,c,0d,$ti",
sb5:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.P(z))
x=this.c
if(x>=y){this.sb5(null)
return!1}this.sb5(z[x]);++this.c
return!0},
$isaN:1},
be:{"^":"f;",
K:function(a,b){var z
H.cq(b)
if(typeof b!=="number")throw H.b(H.aE(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga6(b)
if(this.ga6(a)===z)return 0
if(this.ga6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga6:function(a){return a===0?1/a<0:a<0},
bL:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.v(""+a+".toInt()"))},
da:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.v(""+a+".ceil()"))},
dc:function(a,b,c){if(this.K(b,c)>0)throw H.b(H.aE(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dL:function(a,b){var z
if(b>20)throw H.b(P.bh(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga6(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
C:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.v("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.cW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cW:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.b(H.aE(b))
return a>b},
$isR:1,
$asR:function(){return[P.C]},
$isa1:1,
$isC:1},
d1:{"^":"be;",$isG:1},
d0:{"^":"be;"},
bf:{"^":"f;",
b1:function(a,b){if(b>=a.length)throw H.b(H.bl(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.r(b)
if(typeof b!=="string")throw H.b(P.cJ(b,null,null))
return a+b},
c7:function(a,b,c){var z
if(c>a.length)throw H.b(P.bh(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c6:function(a,b){return this.c7(a,b,0)},
ca:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bC(b,null,null))
if(b>c)throw H.b(P.bC(b,null,null))
if(c>a.length)throw H.b(P.bC(c,null,null))
return a.substring(b,c)},
c9:function(a,b){return this.ca(a,b,null)},
dK:function(a){return a.toLowerCase()},
dd:function(a,b,c){if(c>a.length)throw H.b(P.bh(c,0,a.length,null,null))
return H.kt(a,b,c)},
K:function(a,b){var z
H.r(b)
if(typeof b!=="string")throw H.b(H.aE(b))
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
$ishp:1,
$isc:1}}],["","",,H,{"^":"",
fT:function(){return new P.c8("No element")},
fU:function(){return new P.c8("Too many elements")},
hQ:function(a,b,c){H.x(a,"$isd",[c],"$asd")
H.k(b,{func:1,ret:P.G,args:[c,c]})
H.bi(a,0,J.aI(a)-1,b,c)},
bi:function(a,b,c,d,e){H.x(a,"$isd",[e],"$asd")
H.k(d,{func:1,ret:P.G,args:[e,e]})
if(c-b<=32)H.hP(a,b,c,d,e)
else H.hO(a,b,c,d,e)},
hP:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isd",[e],"$asd")
H.k(d,{func:1,ret:P.G,args:[e,e]})
for(z=b+1,y=J.b2(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a3(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hO:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isd",[a2],"$asd")
H.k(a1,{func:1,ret:P.G,args:[a2,a2]})
z=C.b.C(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.C(b+a0,2)
v=w-z
u=w+z
t=J.b2(a)
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
if(J.ae(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.Z()
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
if(typeof e!=="number")return e.Z()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Z()
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
if(m<y&&l>x){for(;J.ae(a1.$2(t.h(a,m),r),0);)++m
for(;J.ae(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Z()
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
aA:function(a,b){return this.cc(0,H.k(b,{func:1,ret:P.M,args:[H.cm(this,"by",0)]}))}},
d6:{"^":"a;a,b,c,0d,$ti",
saW:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b2(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.an(z))
w=this.c
if(w>=x){this.saW(null)
return!1}this.saW(y.q(z,w));++this.c
return!0},
$isaN:1},
h6:{"^":"by;a,b,$ti",
gj:function(a){return J.aI(this.a)},
q:function(a,b){return this.b.$1(J.eQ(this.a,b))},
$asby:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
du:{"^":"i;a,b,$ti",
gB:function(a){return new H.ib(J.br(this.a),this.b,this.$ti)}},
ib:{"^":"aN;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bw:{"^":"a;$ti"}}],["","",,H,{"^":"",
aH:function(a){var z,y
z=H.r(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k7:function(a){return init.types[H.K(a)]},
kj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.z(a).$isu},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b9(a)
if(typeof z!=="string")throw H.b(H.aE(a))
return z},
aT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hA:function(a,b){var z,y
if(typeof a!=="string")H.Q(H.aE(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.o(z,3)
y=H.r(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
aU:function(a){return H.hs(a)+H.ch(H.ab(a),0,null)},
hs:function(a){var z,y,x,w,v,u,t,s,r
z=J.z(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isaW){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aH(w.length>1&&C.i.b1(w,0)===36?C.i.c9(w,1):w)},
at:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hz:function(a){var z=H.at(a).getFullYear()+0
return z},
hx:function(a){var z=H.at(a).getMonth()+1
return z},
ht:function(a){var z=H.at(a).getDate()+0
return z},
hu:function(a){var z=H.at(a).getHours()+0
return z},
hw:function(a){var z=H.at(a).getMinutes()+0
return z},
hy:function(a){var z=H.at(a).getSeconds()+0
return z},
hv:function(a){var z=H.at(a).getMilliseconds()+0
return z},
b5:function(a){throw H.b(H.aE(a))},
o:function(a,b){if(a==null)J.aI(a)
throw H.b(H.bl(a,b))},
bl:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=H.K(J.aI(a))
if(!(b<0)){if(typeof z!=="number")return H.b5(z)
y=b>=z}else y=!0
if(y)return P.B(b,a,"index",null,z)
return P.bC(b,"index",null)},
aE:function(a){return new P.am(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.de()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e9})
z.name=""}else z.toString=H.e9
return z},
e9:function(){return J.b9(this.dartException)},
Q:function(a){throw H.b(a)},
P:function(a){throw H.b(P.an(a))},
a2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c3(H.e(y)+" (Error "+w+")",null))
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
if(m!=null)return z.$1(H.c3(H.r(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.c3(H.r(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dd(H.r(y),m))}}return z.$1(new H.i8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.di()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.di()
return a},
b4:function(a){var z
if(a==null)return new H.dK(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dK(a)},
k1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ki:function(a,b,c,d,e,f){H.h(a,"$isbb")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cW("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.K(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ki)
a.$identity=z
return z},
fq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.z(d).$isd){z.$reflectionInfo=d
x=H.hF(z).r}else x=d
w=e?Object.create(new H.hS().constructor.prototype):Object.create(new H.bU(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k7,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cM:H.bV
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
fn:function(a,b,c,d){var z=H.bV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cN:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fn(y,!w,z,b)
if(y===0){w=$.a4
if(typeof w!=="number")return w.E()
$.a4=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aJ
if(v==null){v=H.bt("self")
$.aJ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a4
if(typeof w!=="number")return w.E()
$.a4=w+1
t+=w
w="return function("+t+"){return this."
v=$.aJ
if(v==null){v=H.bt("self")
$.aJ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fo:function(a,b,c,d){var z,y
z=H.bV
y=H.cM
switch(b?-1:a){case 0:throw H.b(H.hJ("Intercepted function with no arguments."))
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
z=$.aJ
if(z==null){z=H.bt("self")
$.aJ=z}y=$.cL
if(y==null){y=H.bt("receiver")
$.cL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fo(w,!u,x,b)
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
cj:function(a,b,c,d,e,f,g){return H.fq(a,b,H.K(c),d,!!e,!!f,g)},
r:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a_(a,"String"))},
e_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a_(a,"double"))},
cq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a_(a,"num"))},
bK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a_(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a_(a,"int"))},
cs:function(a,b){throw H.b(H.a_(a,H.aH(H.r(b).substring(3))))},
kr:function(a,b){throw H.b(H.fl(a,H.aH(H.r(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.z(a)[b])return a
H.cs(a,b)},
ac:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.z(a)[b]
else z=!0
if(z)return a
H.kr(a,b)},
e6:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.z(a)[b])return a
H.cs(a,b)},
bn:function(a){if(a==null)return a
if(!!J.z(a).$isd)return a
throw H.b(H.a_(a,"List<dynamic>"))},
kk:function(a,b){var z
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
bM:function(a,b){if(a!=null&&!H.ci(a,b))H.Q(H.a_(a,H.bo(b)))
return a},
dU:function(a){var z,y
z=J.z(a)
if(!!z.$isl){y=H.ck(z)
if(y!=null)return H.bo(y)
return"Closure"}return H.aU(a)},
ku:function(a){throw H.b(new P.fw(H.r(a)))},
e2:function(a){return init.getIsolateTag(a)},
q:function(a,b){a.$ti=b
return a},
ab:function(a){if(a==null)return
return a.$ti},
mJ:function(a,b,c){return H.aG(a["$as"+H.e(c)],H.ab(b))},
b3:function(a,b,c,d){var z
H.r(c)
H.K(d)
z=H.aG(a["$as"+H.e(c)],H.ab(b))
return z==null?null:z[d]},
cm:function(a,b,c){var z
H.r(b)
H.K(c)
z=H.aG(a["$as"+H.e(b)],H.ab(a))
return z==null?null:z[c]},
n:function(a,b){var z
H.K(b)
z=H.ab(a)
return z==null?null:z[b]},
bo:function(a){return H.ak(a,null)},
ak:function(a,b){var z,y
H.x(b,"$isd",[P.c],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aH(a[0].builtin$cls)+H.ch(a,1,b)
if(typeof a=="function")return H.aH(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.o(b,y)
return H.e(b[y])}if('func' in a)return H.jO(a,b)
if('futureOr' in a)return"FutureOr<"+H.ak("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.c]
H.x(b,"$isd",z,"$asd")
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
if(q!=null&&q!==P.a)t+=" extends "+H.ak(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ak(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ak(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ak(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k0(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.r(z[l])
n=n+m+H.ak(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ch:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isd",[P.c],"$asd")
if(a==null)return""
z=new P.ca("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ak(u,c)}return"<"+z.k(0)+">"},
k6:function(a){var z,y,x,w
z=J.z(a)
if(!!z.$isl){y=H.ck(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ab(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b0:function(a,b,c,d){var z,y
H.r(b)
H.bn(c)
H.r(d)
if(a==null)return!1
z=H.ab(a)
y=J.z(a)
if(y[b]==null)return!1
return H.dX(H.aG(y[d],z),null,c,null)},
x:function(a,b,c,d){H.r(b)
H.bn(c)
H.r(d)
if(a==null)return a
if(H.b0(a,b,c,d))return a
throw H.b(H.a_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aH(b.substring(3))+H.ch(c,0,null),init.mangledGlobalNames)))},
dX:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.U(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.U(a[y],b,c[y],d))return!1
return!0},
mF:function(a,b,c){return a.apply(b,H.aG(J.z(b)["$as"+H.e(c)],H.ab(b)))},
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
else{if(!('$is'+"aM" in y.prototype))return!1
w=y.prototype["$as"+"aM"]
v=H.aG(w,z?a.slice(1):null)
return H.U(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dX(H.aG(r,z),b,u,d)},
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
return H.kq(m,b,l,d)},
kq:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.U(c[w],d,a[w],b))return!1}return!0},
mG:function(a,b,c){Object.defineProperty(a,H.r(b),{value:c,enumerable:false,writable:true,configurable:true})},
kl:function(a){var z,y,x,w,v,u
z=H.r($.e3.$1(a))
y=$.bL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.r($.dW.$2(a,z))
if(z!=null){y=$.bL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bP(x)
$.bL[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bO[z]=x
return x}if(v==="-"){u=H.bP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e7(a,x)
if(v==="*")throw H.b(P.ds(z))
if(init.leafTags[z]===true){u=H.bP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e7(a,x)},
e7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cp(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bP:function(a){return J.cp(a,!1,null,!!a.$isu)},
kp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bP(z)
else return J.cp(z,c,null,null)},
kf:function(){if(!0===$.co)return
$.co=!0
H.kg()},
kg:function(){var z,y,x,w,v,u,t,s
$.bL=Object.create(null)
$.bO=Object.create(null)
H.kb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e8.$1(v)
if(u!=null){t=H.kp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kb:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aD(C.O,H.aD(C.T,H.aD(C.A,H.aD(C.A,H.aD(C.S,H.aD(C.P,H.aD(C.Q(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e3=new H.kc(v)
$.dW=new H.kd(u)
$.e8=new H.ke(t)},
aD:function(a,b){return a(b)||b},
kt:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hE:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hF:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c1(z)
y=z[0]
x=z[1]
return new H.hE(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i3:{"^":"a;a,b,c,d,e,f",
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
return new H.i3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dp:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hn:{"^":"L;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dd:function(a,b){return new H.hn(a,b==null?null:b.method)}}},
fX:{"^":"L;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
c3:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fX(a,y,z?null:b.receiver)}}},
i8:{"^":"L;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kv:{"^":"l:5;a",
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
k:function(a){return"Closure '"+H.aU(this).trim()+"'"},
gbZ:function(){return this},
$isbb:1,
gbZ:function(){return this}},
dk:{"^":"l;"},
hS:{"^":"dk;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aH(z)+"'"}},
bU:{"^":"dk;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aT(this.a)
else y=typeof z!=="object"?J.af(z):H.aT(z)
return(y^H.aT(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aU(z)+"'")},
p:{
bV:function(a){return a.a},
cM:function(a){return a.c},
bt:function(a){var z,y,x,w,v
z=new H.bU("self","target","receiver","name")
y=J.c1(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i4:{"^":"L;a",
k:function(a){return this.a},
p:{
a_:function(a,b){return new H.i4("TypeError: "+P.bv(a)+": type '"+H.dU(a)+"' is not a subtype of type '"+b+"'")}}},
fk:{"^":"L;a",
k:function(a){return this.a},
p:{
fl:function(a,b){return new H.fk("CastError: "+P.bv(a)+": type '"+H.dU(a)+"' is not a subtype of type '"+b+"'")}}},
hI:{"^":"L;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hJ:function(a){return new H.hI(a)}}},
dq:{"^":"a;a,0b,0c,0d",
ga4:function(){var z=this.b
if(z==null){z=H.bo(this.a)
this.b=z}return z},
k:function(a){return this.ga4()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.ga4())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dq&&this.ga4()===b.ga4()}},
d3:{"^":"d8;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gG:function(a){return new H.aQ(this,[H.n(this,0)])},
at:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cF(z,b)}else{y=this.dv(b)
return y}},
dv:function(a){var z=this.d
if(z==null)return!1
return this.av(this.am(z,J.af(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a2(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a2(w,b)
x=y==null?null:y.b
return x}else return this.dw(b)},
dw:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.am(z,J.af(a)&0x3ffffff)
x=this.av(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.n(this,0))
H.w(c,H.n(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ao()
this.b=z}this.aX(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ao()
this.c=y}this.aX(y,b,c)}else{x=this.d
if(x==null){x=this.ao()
this.d=x}w=J.af(b)&0x3ffffff
v=this.am(x,w)
if(v==null)this.ar(x,w,[this.ag(b,c)])
else{u=this.av(v,b)
if(u>=0)v[u].b=c
else v.push(this.ag(b,c))}}},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.n(this,0),H.n(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.an(this))
z=z.c}},
aX:function(a,b,c){var z
H.w(b,H.n(this,0))
H.w(c,H.n(this,1))
z=this.a2(a,b)
if(z==null)this.ar(a,b,this.ag(b,c))
else z.b=c},
aZ:function(){this.r=this.r+1&67108863},
ag:function(a,b){var z,y
z=new H.h1(H.w(a,H.n(this,0)),H.w(b,H.n(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aZ()
return z},
av:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ae(a[y].a,b))return y
return-1},
k:function(a){return P.d9(this)},
a2:function(a,b){return a[b]},
am:function(a,b){return a[b]},
ar:function(a,b,c){a[b]=c},
cG:function(a,b){delete a[b]},
cF:function(a,b){return this.a2(a,b)!=null},
ao:function(){var z=Object.create(null)
this.ar(z,"<non-identifier-key>",z)
this.cG(z,"<non-identifier-key>")
return z},
$isd4:1},
h1:{"^":"a;a,b,0c,0d"},
aQ:{"^":"cT;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.h2(z,z.r,this.$ti)
y.c=z.e
return y}},
h2:{"^":"a;a,b,0c,0d,$ti",
saY:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.an(z))
else{z=this.c
if(z==null){this.saY(null)
return!1}else{this.saY(z.a)
this.c=this.c.c
return!0}}},
$isaN:1},
kc:{"^":"l:5;a",
$1:function(a){return this.a(a)}},
kd:{"^":"l:13;a",
$2:function(a,b){return this.a(a,b)}},
ke:{"^":"l:14;a",
$1:function(a){return this.a(H.r(a))}}}],["","",,H,{"^":"",
k0:function(a){return J.fV(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
cr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
a8:function(a,b,c){H.bn(b)
if(a>>>0!==a||a>=c)throw H.b(H.bl(b,a))},
hj:{"^":"f;",$isi5:1,"%":"DataView;ArrayBufferView;c6|dE|dF|db|dG|dH|ai"},
c6:{"^":"hj;",
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
ai:{"^":"dH;",
i:function(a,b,c){H.K(c)
H.a8(b,a,a.length)
a[b]=c},
$asbw:function(){return[P.G]},
$asm:function(){return[P.G]},
$isi:1,
$asi:function(){return[P.G]},
$isd:1,
$asd:function(){return[P.G]}},
hi:{"^":"db;",$isag:1,"%":"Float32Array"},
lr:{"^":"ai;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ls:{"^":"ai;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isfR:1,
"%":"Int32Array"},
lt:{"^":"ai;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lu:{"^":"ai;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lv:{"^":"ai;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lw:{"^":"ai;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lx:{"^":"ai;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dE:{"^":"c6+m;"},
dF:{"^":"dE+bw;"},
dG:{"^":"c6+m;"},
dH:{"^":"dG+bw;"}}],["","",,P,{"^":"",
ig:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.ii(z),1)).observe(y,{childList:true})
return new P.ih(z,y,x)}else if(self.setImmediate!=null)return P.jX()
return P.jY()},
mp:[function(a){self.scheduleImmediate(H.b1(new P.ij(H.k(a,{func:1,ret:-1})),0))},"$1","jW",4,0,4],
mq:[function(a){self.setImmediate(H.b1(new P.ik(H.k(a,{func:1,ret:-1})),0))},"$1","jX",4,0,4],
mr:[function(a){H.k(a,{func:1,ret:-1})
P.jw(0,a)},"$1","jY",4,0,4],
jS:function(a,b){if(H.bm(a,{func:1,args:[P.a,P.Z]}))return H.k(a,{func:1,ret:null,args:[P.a,P.Z]})
if(H.bm(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.cJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jR:function(){var z,y
for(;z=$.aC,z!=null;){$.b_=null
y=z.b
$.aC=y
if(y==null)$.aZ=null
z.a.$0()}},
mD:[function(){$.cf=!0
try{P.jR()}finally{$.b_=null
$.cf=!1
if($.aC!=null)$.cu().$1(P.dY())}},"$0","dY",0,0,1],
dT:function(a){var z=new P.dw(H.k(a,{func:1,ret:-1}))
if($.aC==null){$.aZ=z
$.aC=z
if(!$.cf)$.cu().$1(P.dY())}else{$.aZ.b=z
$.aZ=z}},
jV:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aC
if(z==null){P.dT(a)
$.b_=$.aZ
return}y=new P.dw(a)
x=$.b_
if(x==null){y.b=z
$.b_=y
$.aC=y}else{y.b=x.b
x.b=y
$.b_=y
if(y.b==null)$.aZ=y}},
ks:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.F
if(C.e===y){P.bJ(null,null,C.e,a)
return}y.toString
P.bJ(null,null,y,H.k(y.bi(a),z))},
bI:function(a,b,c,d,e){var z={}
z.a=d
P.jV(new P.jT(z,e))},
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
jU:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bJ:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bi(d):c.d6(d,-1)
P.dT(d)},
ii:{"^":"l:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ih:{"^":"l:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ij:{"^":"l:0;a",
$0:function(){this.a.$0()}},
ik:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jv:{"^":"a;a,0b,c",
cB:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.jx(this,b),0),a)
else throw H.b(P.v("`setTimeout()` not found."))},
p:{
jw:function(a,b){var z=new P.jv(!0,0)
z.cB(a,b)
return z}}},
jx:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
io:{"^":"a;$ti"},
jq:{"^":"io;a,$ti"},
aB:{"^":"a;0a,b,c,d,e,$ti",
dz:function(a){if(this.c!==6)return!0
return this.b.b.ay(H.k(this.d,{func:1,ret:P.M,args:[P.a]}),a.a,P.M,P.a)},
ds:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.n(this,1)}
w=this.b.b
if(H.bm(z,{func:1,args:[P.a,P.Z]}))return H.bM(w.dG(z,a.a,a.b,null,y,P.Z),x)
else return H.bM(w.ay(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
a7:{"^":"a;bc:a<,b,0cT:c<,$ti",
bK:function(a,b,c){var z,y,x,w
z=H.n(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jS(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a7(0,$.F,[c])
w=b==null?1:3
this.b0(new P.aB(x,w,a,b,[z,c]))
return x},
bJ:function(a,b){return this.bK(a,null,b)},
b0:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaB")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa7")
z=y.a
if(z<4){y.b0(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bJ(null,null,z,H.k(new P.iE(this,a),{func:1,ret:-1}))}},
b9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaB")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa7")
y=u.a
if(y<4){u.b9(a)
return}this.a=y
this.c=u.c}z.a=this.a3(a)
y=this.b
y.toString
P.bJ(null,null,y,H.k(new P.iJ(z,this),{func:1,ret:-1}))}},
aq:function(){var z=H.h(this.c,"$isaB")
this.c=null
return this.a3(z)},
a3:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ai:function(a){var z,y,x
z=H.n(this,0)
H.bM(a,{futureOr:1,type:z})
y=this.$ti
if(H.b0(a,"$isaM",y,"$asaM"))if(H.b0(a,"$isa7",y,null))P.dz(a,this)
else P.iF(a,this)
else{x=this.aq()
H.w(a,z)
this.a=4
this.c=a
P.aY(this,x)}},
b3:function(a,b){var z
H.h(b,"$isZ")
z=this.aq()
this.a=8
this.c=new P.T(a,b)
P.aY(this,z)},
$isaM:1,
p:{
iF:function(a,b){var z,y,x
b.a=1
try{a.bK(new P.iG(b),new P.iH(b),null)}catch(x){z=H.a2(x)
y=H.b4(x)
P.ks(new P.iI(b,z,y))}},
dz:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa7")
if(z>=4){y=b.aq()
b.a=a.a
b.c=a.c
P.aY(b,y)}else{y=H.h(b.c,"$isaB")
b.a=2
b.c=a
a.b9(y)}},
aY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isT")
y=y.b
u=v.a
t=v.b
y.toString
P.bI(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aY(z.a,b)}y=z.a
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
P.bI(null,null,y,u,t)
return}o=$.F
if(o!=q)$.F=q
else o=null
y=b.c
if(y===8)new P.iM(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iL(x,b,r).$0()}else if((y&2)!==0)new P.iK(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.z(y).$isaM){if(y.a>=4){n=H.h(t.c,"$isaB")
t.c=null
b=t.a3(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dz(y,t)
return}}m=b.b
n=H.h(m.c,"$isaB")
m.c=null
b=m.a3(n)
y=x.a
u=x.b
if(!y){H.w(u,H.n(m,0))
m.a=4
m.c=u}else{H.h(u,"$isT")
m.a=8
m.c=u}z.a=m
y=m}}}},
iE:{"^":"l:0;a,b",
$0:function(){P.aY(this.a,this.b)}},
iJ:{"^":"l:0;a,b",
$0:function(){P.aY(this.b,this.a.a)}},
iG:{"^":"l:6;a",
$1:function(a){var z=this.a
z.a=0
z.ai(a)}},
iH:{"^":"l:16;a",
$2:function(a,b){H.h(b,"$isZ")
this.a.b3(a,b)},
$1:function(a){return this.$2(a,null)}},
iI:{"^":"l:0;a,b,c",
$0:function(){this.a.b3(this.b,this.c)}},
iM:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bG(H.k(w.d,{func:1}),null)}catch(v){y=H.a2(v)
x=H.b4(v)
if(this.d){w=H.h(this.a.a.c,"$isT").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isT")
else u.b=new P.T(y,x)
u.a=!0
return}if(!!J.z(z).$isaM){if(z instanceof P.a7&&z.gbc()>=4){if(z.gbc()===8){w=this.b
w.b=H.h(z.gcT(),"$isT")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bJ(new P.iN(t),null)
w.a=!1}}},
iN:{"^":"l:17;a",
$1:function(a){return this.a}},
iL:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.n(x,0)
v=H.w(this.c,w)
u=H.n(x,1)
this.a.b=x.b.b.ay(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a2(t)
y=H.b4(t)
x=this.a
x.b=new P.T(z,y)
x.a=!0}}},
iK:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isT")
w=this.c
if(w.dz(z)&&w.e!=null){v=this.b
v.b=w.ds(z)
v.a=!1}}catch(u){y=H.a2(u)
x=H.b4(u)
w=H.h(this.a.a.c,"$isT")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.T(y,x)
s.a=!0}}},
dw:{"^":"a;a,0b"},
hW:{"^":"a;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.a7(0,$.F,[P.G])
z.a=0
x=H.n(this,0)
w=H.k(new P.hY(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hZ(z,y),{func:1,ret:-1})
W.aj(this.a,this.b,w,!1,x)
return y}},
hY:{"^":"l;a,b",
$1:function(a){H.w(a,H.n(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.n(this.b,0)]}}},
hZ:{"^":"l:0;a,b",
$0:function(){this.b.ai(this.a.a)}},
hX:{"^":"a;"},
T:{"^":"a;a,b",
k:function(a){return H.e(this.a)},
$isL:1},
jD:{"^":"a;",$ismn:1},
jT:{"^":"l:0;a,b",
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
j9:{"^":"jD;",
dH:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.F){a.$0()
return}P.dR(null,null,this,a,-1)}catch(x){z=H.a2(x)
y=H.b4(x)
P.bI(null,null,this,z,H.h(y,"$isZ"))}},
dI:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.e===$.F){a.$1(b)
return}P.dS(null,null,this,a,b,-1,c)}catch(x){z=H.a2(x)
y=H.b4(x)
P.bI(null,null,this,z,H.h(y,"$isZ"))}},
d6:function(a,b){return new P.jb(this,H.k(a,{func:1,ret:b}),b)},
bi:function(a){return new P.ja(this,H.k(a,{func:1,ret:-1}))},
d8:function(a,b){return new P.jc(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
bG:function(a,b){H.k(a,{func:1,ret:b})
if($.F===C.e)return a.$0()
return P.dR(null,null,this,a,b)},
ay:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.F===C.e)return a.$1(b)
return P.dS(null,null,this,a,b,c,d)},
dG:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.F===C.e)return a.$2(b,c)
return P.jU(null,null,this,a,b,c,d,e,f)}},
jb:{"^":"l;a,b,c",
$0:function(){return this.a.bG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ja:{"^":"l:1;a,b",
$0:function(){return this.a.dH(this.b)}},
jc:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dI(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d5:function(a,b,c){H.bn(a)
return H.x(H.k1(a,new H.d3(0,0,[b,c])),"$isd4",[b,c],"$asd4")},
aa:function(a,b){return new H.d3(0,0,[a,b])},
X:function(a,b,c,d){return new P.iT(0,0,[d])},
fS:function(a,b,c){var z,y
if(P.cg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.q([],[P.c])
y=$.b6()
C.a.l(y,a)
try{P.jQ(a,z)}finally{if(0>=y.length)return H.o(y,-1)
y.pop()}y=P.dj(b,H.kk(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
c0:function(a,b,c){var z,y,x
if(P.cg(a))return b+"..."+c
z=new P.ca(b)
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
jQ:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isd",[P.c],"$asd")
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
c4:function(a,b){var z,y,x
z=P.X(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.P)(a),++x)z.l(0,H.w(a[x],b))
return z},
d9:function(a){var z,y,x
z={}
if(P.cg(a))return"{...}"
y=new P.ca("")
try{C.a.l($.b6(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.eT(a,new P.h5(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.b6()
if(0>=z.length)return H.o(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
iT:{"^":"iO;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dD(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbk")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbk")!=null}else return this.cE(b)},
cE:function(a){var z=this.d
if(z==null)return!1
return this.al(this.b6(z,a),a)>=0},
l:function(a,b){var z,y
H.w(b,H.n(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cd()
this.b=z}return this.b_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cd()
this.c=y}return this.b_(y,b)}else return this.cC(0,b)},
cC:function(a,b){var z,y,x
H.w(b,H.n(this,0))
z=this.d
if(z==null){z=P.cd()
this.d=z}y=this.b4(b)
x=z[y]
if(x==null)z[y]=[this.ap(b)]
else{if(this.al(x,b)>=0)return!1
x.push(this.ap(b))}return!0},
bF:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ba(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ba(this.c,b)
else return this.cO(0,b)},
cO:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b6(z,b)
x=this.al(y,b)
if(x<0)return!1
this.bd(y.splice(x,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.an()}},
b_:function(a,b){H.w(b,H.n(this,0))
if(H.h(a[b],"$isbk")!=null)return!1
a[b]=this.ap(b)
return!0},
ba:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbk")
if(z==null)return!1
this.bd(z)
delete a[b]
return!0},
an:function(){this.r=this.r+1&67108863},
ap:function(a){var z,y
z=new P.bk(H.w(a,H.n(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.an()
return z},
bd:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.an()},
b4:function(a){return J.af(a)&0x3ffffff},
b6:function(a,b){return a[this.b4(b)]},
al:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ae(a[y].a,b))return y
return-1},
p:{
cd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bk:{"^":"a;a,0b,0c"},
dD:{"^":"a;a,b,0c,0d,$ti",
sb2:function(a){this.d=H.w(a,H.n(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.an(z))
else{z=this.c
if(z==null){this.sb2(null)
return!1}else{this.sb2(H.w(z.a,H.n(this,0)))
this.c=this.c.b
return!0}}},
$isaN:1,
p:{
iU:function(a,b,c){var z=new P.dD(a,b,[c])
z.c=a.e
return z}}},
iO:{"^":"hK;"},
h3:{"^":"iV;",$isi:1,$isd:1},
m:{"^":"a;$ti",
gB:function(a){return new H.d6(a,this.gj(a),0,[H.b3(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
dr:function(a,b,c,d){var z,y,x
H.w(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b3(this,a,"m",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.an(a))}return y},
k:function(a){return P.c0(a,"[","]")}},
d8:{"^":"O;"},
h5:{"^":"l:7;a,b",
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
H.k(b,{func:1,ret:-1,args:[H.b3(this,a,"O",0),H.b3(this,a,"O",1)]})
for(z=J.br(this.gG(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aI(this.gG(a))},
k:function(a){return P.d9(a)},
$isH:1},
hL:{"^":"a;$ti",
I:function(a,b){var z
for(z=J.br(H.x(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.c0(this,"{","}")},
$isi:1,
$islP:1},
hK:{"^":"hL;"},
iV:{"^":"a+m;"}}],["","",,P,{"^":"",
kh:function(a,b,c){var z=H.hA(a,c)
if(z!=null)return z
throw H.b(new P.fL(a,null,null))},
fK:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.aU(a)+"'"},
bv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
cW:function(a){return new P.iB(a)},
ad:function(a){H.cr(H.e(a))},
M:{"^":"a;"},
"+bool":0,
bu:{"^":"a;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a&&!0},
K:function(a,b){return C.b.K(this.a,H.h(b,"$isbu").a)},
gv:function(a){var z=this.a
return(z^C.b.bb(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fx(H.hz(this))
y=P.ba(H.hx(this))
x=P.ba(H.ht(this))
w=P.ba(H.hu(this))
v=P.ba(H.hw(this))
u=P.ba(H.hy(this))
t=P.fy(H.hv(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isR:1,
$asR:function(){return[P.bu]},
p:{
fx:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fy:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ba:function(a){if(a>=10)return""+a
return"0"+a}}},
a1:{"^":"C;"},
"+double":0,
aK:{"^":"a;a",
P:function(a,b){return C.b.P(this.a,H.h(b,"$isaK").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,H.h(b,"$isaK").a)},
k:function(a){var z,y,x,w,v
z=new P.fG()
y=this.a
if(y<0)return"-"+new P.aK(0-y).k(0)
x=z.$1(C.b.C(y,6e7)%60)
w=z.$1(C.b.C(y,1e6)%60)
v=new P.fF().$1(y%1e6)
return""+C.b.C(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isR:1,
$asR:function(){return[P.aK]},
p:{
fE:function(a,b,c,d,e,f){return new P.aK(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fF:{"^":"l:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fG:{"^":"l:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"a;"},
de:{"^":"L;",
k:function(a){return"Throw of null."}},
am:{"^":"L;a,b,c,d",
gak:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaj:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gak()+y+x
if(!this.a)return w
v=this.gaj()
u=P.bv(this.b)
return w+v+": "+u},
p:{
cJ:function(a,b,c){return new P.am(!0,a,b,c)}}},
c7:{"^":"am;e,f,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
hD:function(a){return new P.c7(null,null,!1,null,null,a)},
bC:function(a,b,c){return new P.c7(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")}}},
fQ:{"^":"am;e,j:f>,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y
z=H.K(this.b)
if(typeof z!=="number")return z.Z()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
B:function(a,b,c,d,e){var z=H.K(e==null?J.aI(b):e)
return new P.fQ(b,z,!0,a,c,"Index out of range")}}},
i9:{"^":"L;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
v:function(a){return new P.i9(a)}}},
i7:{"^":"L;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ds:function(a){return new P.i7(a)}}},
c8:{"^":"L;a",
k:function(a){return"Bad state: "+this.a},
p:{
c9:function(a){return new P.c8(a)}}},
fr:{"^":"L;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bv(z)+"."},
p:{
an:function(a){return new P.fr(a)}}},
di:{"^":"a;",
k:function(a){return"Stack Overflow"},
$isL:1},
fw:{"^":"L;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iB:{"^":"a;a",
k:function(a){return"Exception: "+this.a}},
fL:{"^":"a;a,b,c",
k:function(a){var z,y
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
return y}},
bb:{"^":"a;"},
G:{"^":"C;"},
"+int":0,
i:{"^":"a;$ti",
aA:["cc",function(a,b){var z=H.cm(this,"i",0)
return new H.du(this,H.k(b,{func:1,ret:P.M,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Q(P.bh(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.B(b,this,"index",null,y))},
k:function(a){return P.fS(this,"(",")")}},
aN:{"^":"a;$ti"},
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
gv:function(a){return H.aT(this)},
k:function(a){return"Instance of '"+H.aU(this)+"'"},
toString:function(){return this.k(this)}},
Z:{"^":"a;"},
c:{"^":"a;",$isR:1,
$asR:function(){return[P.c]},
$ishp:1},
"+String":0,
ca:{"^":"a;R:a<",
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
fH:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.t
z=new H.du(new W.a0(y),H.k(new W.fI(),{func:1,ret:P.M,args:[z]}),[z])
x=z.gB(z)
if(!x.t())H.Q(H.fT())
w=x.gA(x)
if(x.t())H.Q(H.fU())
return H.h(w,"$isN")},
fJ:function(a){H.h(a,"$isJ")
return"wheel"},
aL:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eW(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a2(x)}return z},
ix:function(a,b){return document.createElement(a)},
bH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dC:function(a,b,c,d){var z,y
z=W.bH(W.bH(W.bH(W.bH(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dP:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ir(a)
if(!!J.z(z).$isJ)return z
return}else return H.h(a,"$isJ")},
dV:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.e)return a
return z.d8(a,b)},
I:{"^":"N;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kw:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fc:{"^":"I;",
k:function(a){return String(a)},
$isfc:1,
"%":"HTMLAnchorElement"},
kx:{"^":"I;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cK:{"^":"I;",$iscK:1,"%":"HTMLBaseElement"},
fh:{"^":"f;","%":";Blob"},
bs:{"^":"I;",$isbs:1,"%":"HTMLBodyElement"},
bW:{"^":"I;0n:height=,0m:width=",
aB:function(a,b,c){if(c!=null)return this.cJ(a,b,P.jZ(c,null))
return this.cK(a,b)},
c_:function(a,b){return this.aB(a,b,null)},
cJ:function(a,b,c){return a.getContext(b,c)},
cK:function(a,b){return a.getContext(b)},
$isbW:1,
"%":"HTMLCanvasElement"},
fj:{"^":"f;",
a5:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bX:{"^":"f;",
br:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dq:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aa:function(a){return P.V(a.getContextAttributes())},
$isbX:1,
"%":"CanvasRenderingContext2D"},
kC:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fs:{"^":"bY;",$isfs:1,"%":"CSSNumericValue|CSSUnitValue"},
kD:{"^":"fv;0j:length=","%":"CSSPerspective"},
ao:{"^":"f;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ft:{"^":"ip;0j:length=",
aG:function(a,b){var z=this.cL(a,this.ah(a,b))
return z==null?"":z},
ah:function(a,b){var z,y
z=$.eb()
y=z[b]
if(typeof y==="string")return y
y=this.cX(a,b)
z[b]=y
return y},
cX:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fz()+b
if(z in a)return z
return b},
cL:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fu:{"^":"a;",
gn:function(a){return this.aG(a,"height")},
gm:function(a){return this.aG(a,"width")}},
bY:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fv:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kF:{"^":"bY;0j:length=","%":"CSSTransformValue"},
kG:{"^":"bY;0j:length=","%":"CSSUnparsedValue"},
kI:{"^":"f;0j:length=","%":"DataTransferItemList"},
fA:{"^":"I;","%":"HTMLDivElement"},
fB:{"^":"t;",
d0:function(a,b){return a.adoptNode(b)},
c0:function(a,b){return a.getElementById(b)},
ax:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
kJ:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
fC:{"^":"f;",
dh:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kK:{"^":"it;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isS",[P.C],"$asS")
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
fD:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.b0(b,"$isS",[P.C],"$asS"))return!1
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
kL:{"^":"iv;",
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
kM:{"^":"f;0j:length=","%":"DOMTokenList"},
N:{"^":"t;0dJ:tagName=",
gd3:function(a){return new W.iw(a)},
k:function(a){return a.localName},
L:["ae",function(a,b,c,d){var z,y,x,w
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
y=(y&&C.L).dh(y,"")
$.a9=y
$.bZ=y.createRange()
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
z=$.a9.body;(z&&C.p).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.bZ;(z&&C.E).c2(z,x)
z=$.bZ
w=(z&&C.E).df(z,b)}else{x.innerHTML=b
w=$.a9.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.a9.body
if(x==null?z!=null:x!==z)J.cC(x)
c.aL(w)
C.j.d0(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dg",null,null,"gdO",5,5,null],
c4:function(a,b,c,d){a.textContent=null
this.H(a,this.L(a,b,c,d))},
c3:function(a,b){return this.c4(a,b,null,null)},
T:function(a,b){return a.getAttribute(b)},
cP:function(a,b){return a.removeAttribute(b)},
gdA:function(a){return new W.bG(a,"mousedown",!1,[W.Y])},
gdB:function(a){return new W.bG(a,"mousemove",!1,[W.Y])},
gdC:function(a){return new W.bG(a,"mouseup",!1,[W.Y])},
gdD:function(a){return new W.bG(a,H.r(W.fJ(a)),!1,[W.aX])},
$isN:1,
"%":";Element"},
fI:{"^":"l:18;",
$1:function(a){return!!J.z(H.h(a,"$ist")).$isN}},
kO:{"^":"I;0n:height=,0m:width=","%":"HTMLEmbedElement"},
W:{"^":"f;",$isW:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
J:{"^":"f;",
d_:function(a,b,c,d){H.k(c,{func:1,args:[W.W]})
if(c!=null)this.cD(a,b,c,!1)},
cD:function(a,b,c,d){return a.addEventListener(b,H.b1(H.k(c,{func:1,args:[W.W]}),1),!1)},
$isJ:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dI|dJ|dM|dN"},
ap:{"^":"fh;",$isap:1,"%":"File"},
l4:{"^":"iD;",
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
"%":"FileList"},
l5:{"^":"J;0j:length=","%":"FileWriter"},
l8:{"^":"I;0j:length=","%":"HTMLFormElement"},
aq:{"^":"f;",$isaq:1,"%":"Gamepad"},
fN:{"^":"I;","%":"HTMLHeadElement"},
l9:{"^":"f;0j:length=","%":"History"},
la:{"^":"iQ;",
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
fO:{"^":"fB;","%":"HTMLDocument"},
lb:{"^":"I;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lc:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
ld:{"^":"f;0n:height=,0m:width=","%":"ImageData"},
le:{"^":"I;0n:height=,0m:width=","%":"HTMLImageElement"},
d_:{"^":"I;0n:height=,0m:width=",$isd_:1,"%":"HTMLInputElement"},
aO:{"^":"dr;",$isaO:1,"%":"KeyboardEvent"},
h4:{"^":"f;",
k:function(a){return String(a)},
$ish4:1,
"%":"Location"},
h8:{"^":"I;","%":"HTMLAudioElement;HTMLMediaElement"},
ln:{"^":"f;0j:length=","%":"MediaList"},
lo:{"^":"iX;",
h:function(a,b){return P.V(a.get(H.r(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.ha(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.c,null]},
$isH:1,
$asH:function(){return[P.c,null]},
"%":"MIDIInputMap"},
ha:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
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
"%":"MIDIOutputMap"},
hb:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ar:{"^":"f;",$isar:1,"%":"MimeType"},
lq:{"^":"j_;",
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
"%":"MimeTypeArray"},
Y:{"^":"dr;",
gbD:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aS(a.offsetX,a.offsetY,[P.C])
else{z=a.target
if(!J.z(W.dP(z)).$isN)throw H.b(P.v("offsetX is only supported on elements"))
y=H.h(W.dP(z),"$isN")
z=a.clientX
x=a.clientY
w=[P.C]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.aS(u,v,w),"$isaS",w,"$asaS")
if(typeof z!=="number")return z.ad()
if(typeof x!=="number")return x.ad()
return new P.aS(C.t.bL(z-u),C.t.bL(x-v),w)}},
$isY:1,
"%":";DragEvent|MouseEvent"},
a0:{"^":"h3;a",
ga_:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.c9("No elements"))
if(y>1)throw H.b(P.c9("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isi",[W.t],"$asi")
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
return new W.cY(z,z.length,-1,[H.b3(C.Y,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.o(z,b)
return z[b]},
$asm:function(){return[W.t]},
$asi:function(){return[W.t]},
$asd:function(){return[W.t]}},
t:{"^":"J;0dE:previousSibling=",
dF:function(a){var z=a.parentNode
if(z!=null)J.bp(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cb(a):z},
H:function(a,b){return a.appendChild(b)},
cQ:function(a,b){return a.removeChild(b)},
cR:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hk:{"^":"j1;",
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
lA:{"^":"I;0n:height=,0m:width=","%":"HTMLObjectElement"},
lC:{"^":"J;0n:height=,0m:width=","%":"OffscreenCanvas"},
lD:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
as:{"^":"f;0j:length=",$isas:1,"%":"Plugin"},
lF:{"^":"j5;",
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
"%":"PluginArray"},
lH:{"^":"Y;0n:height=,0m:width=","%":"PointerEvent"},
hC:{"^":"f;",
df:function(a,b){return a.createContextualFragment(b)},
c2:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lN:{"^":"jd;",
h:function(a,b){return P.V(a.get(H.r(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.hH(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.c,null]},
$isH:1,
$asH:function(){return[P.c,null]},
"%":"RTCStatsReport"},
hH:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lO:{"^":"f;0n:height=,0m:width=","%":"Screen"},
dh:{"^":"I;0j:length=",$isdh:1,"%":"HTMLSelectElement"},
au:{"^":"J;",$isau:1,"%":"SourceBuffer"},
lQ:{"^":"dJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isau")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$asm:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isd:1,
$asd:function(){return[W.au]},
$asp:function(){return[W.au]},
"%":"SourceBufferList"},
av:{"^":"f;",$isav:1,"%":"SpeechGrammar"},
lR:{"^":"jj;",
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
"%":"SpeechGrammarList"},
aw:{"^":"f;0j:length=",$isaw:1,"%":"SpeechRecognitionResult"},
lU:{"^":"jm;",
h:function(a,b){return this.b7(a,H.r(b))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=0;!0;++z){y=this.cN(a,z)
if(y==null)return
b.$2(y,this.b7(a,y))}},
gG:function(a){var z=H.q([],[P.c])
this.D(a,new W.hV(z))
return z},
gj:function(a){return a.length},
b7:function(a,b){return a.getItem(b)},
cN:function(a,b){return a.key(b)},
$asO:function(){return[P.c,P.c]},
$isH:1,
$asH:function(){return[P.c,P.c]},
"%":"Storage"},
hV:{"^":"l:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ax:{"^":"f;",$isax:1,"%":"CSSStyleSheet|StyleSheet"},
i_:{"^":"I;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=W.fH("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).I(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
lX:{"^":"I;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga_(z)
x.toString
z=new W.a0(x)
w=z.ga_(z)
y.toString
w.toString
new W.a0(y).I(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
lY:{"^":"I;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga_(z)
y.toString
x.toString
new W.a0(y).I(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
dl:{"^":"I;",$isdl:1,"%":"HTMLTemplateElement"},
lZ:{"^":"f;0m:width=","%":"TextMetrics"},
ay:{"^":"J;",$isay:1,"%":"TextTrack"},
az:{"^":"J;",$isaz:1,"%":"TextTrackCue|VTTCue"},
m_:{"^":"ju;",
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
"%":"TextTrackCueList"},
m0:{"^":"dN;",
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
"%":"TextTrackList"},
m1:{"^":"f;0j:length=","%":"TimeRanges"},
aA:{"^":"f;",$isaA:1,"%":"Touch"},
m2:{"^":"jz;",
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
"%":"TouchList"},
m3:{"^":"f;0j:length=","%":"TrackDefaultList"},
dr:{"^":"W;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mg:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mj:{"^":"h8;0n:height=,0m:width=","%":"HTMLVideoElement"},
mk:{"^":"J;0j:length=","%":"VideoTrackList"},
ml:{"^":"J;0n:height=,0m:width=","%":"VisualViewport"},
mm:{"^":"f;0m:width=","%":"VTTRegion"},
aX:{"^":"Y;",
gdk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.v("deltaY is not supported"))},
$isaX:1,
"%":"WheelEvent"},
ic:{"^":"J;",
gd2:function(a){var z,y,x
z=P.C
y=new P.a7(0,$.F,[z])
x=H.k(new W.id(new P.jq(y,[z])),{func:1,ret:-1,args:[P.C]})
this.cI(a)
this.cS(a,W.dV(x,z))
return y},
cS:function(a,b){return a.requestAnimationFrame(H.b1(H.k(b,{func:1,ret:-1,args:[P.C]}),1))},
cI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdv:1,
"%":"DOMWindow|Window"},
id:{"^":"l:20;a",
$1:function(a){var z=this.a
a=H.bM(H.cq(a),{futureOr:1,type:H.n(z,0)})
z=z.a
if(z.a!==0)H.Q(P.c9("Future already completed"))
z.ai(a)}},
dx:{"^":"t;",$isdx:1,"%":"Attr"},
ms:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$asm:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isd:1,
$asd:function(){return[W.ao]},
$asp:function(){return[W.ao]},
"%":"CSSRuleList"},
mt:{"^":"fD;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.b0(b,"$isS",[P.C],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mu:{"^":"jH;",
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
"%":"GamepadList"},
mz:{"^":"jJ;",
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
mA:{"^":"jL;",
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
"%":"SpeechRecognitionResultList"},
mB:{"^":"jN;",
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
"%":"StyleSheetList"},
il:{"^":"d8;cH:a<",
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
iw:{"^":"il;a",
h:function(a,b){return J.bS(this.a,H.r(b))},
gj:function(a){return this.gG(this).length}},
iy:{"^":"hW;a,b,c,$ti"},
bG:{"^":"iy;a,b,c,$ti"},
iz:{"^":"hX;a,b,c,d,e,$ti",p:{
aj:function(a,b,c,d,e){var z=W.dV(new W.iA(c),W.W)
if(z!=null&&!0)J.ex(a,b,z,!1)
return new W.iz(0,a,b,z,!1,[e])}}},
iA:{"^":"l:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isW"))}},
bj:{"^":"a;a",
cw:function(a){var z,y
z=$.cv()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.k9())
for(y=0;y<12;++y)z.i(0,C.v[y],W.ka())}},
S:function(a){return $.eo().u(0,W.aL(a))},
O:function(a,b,c){var z,y,x
z=W.aL(a)
y=$.cv()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bK(x.$4(a,b,c,this))},
$isa5:1,
p:{
dA:function(a){var z,y
z=document.createElement("a")
y=new W.je(z,window.location)
y=new W.bj(y)
y.cw(a)
return y},
mx:[function(a,b,c,d){H.h(a,"$isN")
H.r(b)
H.r(c)
H.h(d,"$isbj")
return!0},"$4","k9",16,0,12],
my:[function(a,b,c,d){var z,y,x
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
return z},"$4","ka",16,0,12]}},
p:{"^":"a;$ti",
gB:function(a){return new W.cY(a,this.gj(a),-1,[H.b3(this,a,"p",0)])}},
dc:{"^":"a;a",
S:function(a){return C.a.bf(this.a,new W.hm(a))},
O:function(a,b,c){return C.a.bf(this.a,new W.hl(a,b,c))},
$isa5:1},
hm:{"^":"l:9;a",
$1:function(a){return H.h(a,"$isa5").S(this.a)}},
hl:{"^":"l:9;a,b,c",
$1:function(a){return H.h(a,"$isa5").O(this.a,this.b,this.c)}},
jf:{"^":"a;",
cA:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aA(0,new W.jg())
y=b.aA(0,new W.jh())
this.b.I(0,z)
x=this.c
x.I(0,C.X)
x.I(0,y)},
S:function(a){return this.a.u(0,W.aL(a))},
O:["ce",function(a,b,c){var z,y
z=W.aL(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.d1(c)
else if(y.u(0,"*::"+b))return this.d.d1(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa5:1},
jg:{"^":"l:10;",
$1:function(a){return!C.a.u(C.v,H.r(a))}},
jh:{"^":"l:10;",
$1:function(a){return C.a.u(C.v,H.r(a))}},
jr:{"^":"jf;e,a,b,c,d",
O:function(a,b,c){if(this.ce(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bS(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dL:function(){var z,y,x,w,v
z=P.c
y=P.c4(C.u,z)
x=H.n(C.u,0)
w=H.k(new W.js(),{func:1,ret:z,args:[x]})
v=H.q(["TEMPLATE"],[z])
y=new W.jr(y,P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),null)
y.cA(null,new H.h6(C.u,w,[x,z]),v,null)
return y}}},
js:{"^":"l:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.r(a))}},
jp:{"^":"a;",
S:function(a){var z=J.z(a)
if(!!z.$isdg)return!1
z=!!z.$isE
if(z&&W.aL(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.i.c6(b,"on"))return!1
return this.S(a)},
$isa5:1},
cY:{"^":"a;a,b,c,0d,$ti",
sb8:function(a){this.d=H.w(a,H.n(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb8(J.eu(this.a,z))
this.c=z
return!0}this.sb8(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaN:1},
iq:{"^":"a;a",$isJ:1,$isdv:1,p:{
ir:function(a){if(a===window)return H.h(a,"$isdv")
else return new W.iq(a)}}},
a5:{"^":"a;"},
je:{"^":"a;a,b",$ismf:1},
dO:{"^":"a;a",
aL:function(a){new W.jC(this).$2(a,null)},
W:function(a,b){if(b==null)J.cC(a)
else J.bp(b,a)},
cV:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eU(a)
x=J.bS(y.gcH(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a2(t)}v="element unprintable"
try{v=J.b9(a)}catch(t){H.a2(t)}try{u=W.aL(a)
this.cU(H.h(a,"$isN"),b,z,v,u,H.h(y,"$isH"),H.r(x))}catch(t){if(H.a2(t) instanceof P.am)throw t
else{this.W(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cU:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
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
w.cP(z,v)}}if(!!J.z(a).$isdl)this.aL(a.content)},
$isly:1},
jC:{"^":"l:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cV(a,b)
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
ip:{"^":"f+fu;"},
is:{"^":"f+m;"},
it:{"^":"is+p;"},
iu:{"^":"f+m;"},
iv:{"^":"iu+p;"},
iC:{"^":"f+m;"},
iD:{"^":"iC+p;"},
iP:{"^":"f+m;"},
iQ:{"^":"iP+p;"},
iX:{"^":"f+O;"},
iY:{"^":"f+O;"},
iZ:{"^":"f+m;"},
j_:{"^":"iZ+p;"},
j0:{"^":"f+m;"},
j1:{"^":"j0+p;"},
j4:{"^":"f+m;"},
j5:{"^":"j4+p;"},
jd:{"^":"f+O;"},
dI:{"^":"J+m;"},
dJ:{"^":"dI+p;"},
ji:{"^":"f+m;"},
jj:{"^":"ji+p;"},
jm:{"^":"f+O;"},
jt:{"^":"f+m;"},
ju:{"^":"jt+p;"},
dM:{"^":"J+m;"},
dN:{"^":"dM+p;"},
jy:{"^":"f+m;"},
jz:{"^":"jy+p;"},
jE:{"^":"f+m;"},
jF:{"^":"jE+p;"},
jG:{"^":"f+m;"},
jH:{"^":"jG+p;"},
jI:{"^":"f+m;"},
jJ:{"^":"jI+p;"},
jK:{"^":"f+m;"},
jL:{"^":"jK+p;"},
jM:{"^":"f+m;"},
jN:{"^":"jM+p;"}}],["","",,P,{"^":"",
V:function(a){var z,y,x,w,v
if(a==null)return
z=P.aa(P.c,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.P)(y),++w){v=H.r(y[w])
z.i(0,v,a[v])}return z},
jZ:function(a,b){var z={}
a.D(0,new P.k_(z))
return z},
cS:function(){var z=$.cR
if(z==null){z=J.bQ(window.navigator.userAgent,"Opera",0)
$.cR=z}return z},
fz:function(){var z,y
z=$.cO
if(z!=null)return z
y=$.cP
if(y==null){y=J.bQ(window.navigator.userAgent,"Firefox",0)
$.cP=y}if(y)z="-moz-"
else{y=$.cQ
if(y==null){y=!P.cS()&&J.bQ(window.navigator.userAgent,"Trident/",0)
$.cQ=y}if(y)z="-ms-"
else z=P.cS()?"-o-":"-webkit-"}$.cO=z
return z},
k_:{"^":"l:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j6:{"^":"a;a,b",
cz:function(a){var z,y,x,w,v,u,t
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
bC:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.b(P.hD("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)>>>0===0){this.M()
return(this.a&z)>>>0}do{this.M()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
aw:function(){this.M()
var z=this.a
this.M()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
$islI:1,
p:{
j7:function(a){var z=new P.j6(0,0)
z.cz(a)
return z}}},
aS:{"^":"a;bX:a>,bY:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.b0(b,"$isaS",[P.C],null)&&this.a==J.eX(b)&&this.b==b.gbY(b)},
gv:function(a){var z,y,x
z=J.af(this.a)
y=J.af(this.b)
y=P.dB(P.dB(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
j8:{"^":"a;"},
S:{"^":"j8;$ti"}}],["","",,P,{"^":"",fd:{"^":"f;",$isfd:1,"%":"SVGAnimatedLength"},kP:{"^":"E;0n:height=,0m:width=","%":"SVGFEBlendElement"},kQ:{"^":"E;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kR:{"^":"E;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kS:{"^":"E;0n:height=,0m:width=","%":"SVGFECompositeElement"},kT:{"^":"E;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kU:{"^":"E;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kV:{"^":"E;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kW:{"^":"E;0n:height=,0m:width=","%":"SVGFEFloodElement"},kX:{"^":"E;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},kY:{"^":"E;0n:height=,0m:width=","%":"SVGFEImageElement"},kZ:{"^":"E;0n:height=,0m:width=","%":"SVGFEMergeElement"},l_:{"^":"E;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l0:{"^":"E;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l1:{"^":"E;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},l2:{"^":"E;0n:height=,0m:width=","%":"SVGFETileElement"},l3:{"^":"E;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},l6:{"^":"E;0n:height=,0m:width=","%":"SVGFilterElement"},l7:{"^":"bc;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fM:{"^":"bc;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bc:{"^":"E;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lf:{"^":"bc;0n:height=,0m:width=","%":"SVGImageElement"},aP:{"^":"f;",$isaP:1,"%":"SVGLength"},lk:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.h(c,"$isaP")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aP]},
$isi:1,
$asi:function(){return[P.aP]},
$isd:1,
$asd:function(){return[P.aP]},
$asp:function(){return[P.aP]},
"%":"SVGLengthList"},ll:{"^":"E;0n:height=,0m:width=","%":"SVGMaskElement"},aR:{"^":"f;",$isaR:1,"%":"SVGNumber"},lz:{"^":"j3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.h(c,"$isaR")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aR]},
$isi:1,
$asi:function(){return[P.aR]},
$isd:1,
$asd:function(){return[P.aR]},
$asp:function(){return[P.aR]},
"%":"SVGNumberList"},lE:{"^":"E;0n:height=,0m:width=","%":"SVGPatternElement"},lG:{"^":"f;0j:length=","%":"SVGPointList"},lJ:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},lK:{"^":"fM;0n:height=,0m:width=","%":"SVGRectElement"},dg:{"^":"E;",$isdg:1,"%":"SVGScriptElement"},lV:{"^":"jo;",
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
C.a.l(z,new W.jp())
c=new W.dO(new W.dc(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dg(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.ga_(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isE:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lW:{"^":"bc;0n:height=,0m:width=","%":"SVGSVGElement"},aV:{"^":"f;",$isaV:1,"%":"SVGTransform"},m4:{"^":"jB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.h(c,"$isaV")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aV]},
$isi:1,
$asi:function(){return[P.aV]},
$isd:1,
$asd:function(){return[P.aV]},
$asp:function(){return[P.aV]},
"%":"SVGTransformList"},mh:{"^":"bc;0n:height=,0m:width=","%":"SVGUseElement"},iR:{"^":"f+m;"},iS:{"^":"iR+p;"},j2:{"^":"f+m;"},j3:{"^":"j2+p;"},jn:{"^":"f+m;"},jo:{"^":"jn+p;"},jA:{"^":"f+m;"},jB:{"^":"jA+p;"}}],["","",,P,{"^":"",ag:{"^":"a;",$isi:1,
$asi:function(){return[P.a1]},
$isd:1,
$asd:function(){return[P.a1]},
$isi5:1}}],["","",,P,{"^":"",ky:{"^":"f;0j:length=","%":"AudioBuffer"},kz:{"^":"im;",
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
$2:function(a,b){return C.a.l(this.a,a)}},kA:{"^":"J;0j:length=","%":"AudioTrackList"},fg:{"^":"J;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lB:{"^":"fg;0j:length=","%":"OfflineAudioContext"},im:{"^":"f+O;"}}],["","",,P,{"^":"",fi:{"^":"f;",$isfi:1,"%":"WebGLBuffer"},hB:{"^":"f;",$ishB:1,"%":"WebGLProgram"},lL:{"^":"f;",
be:function(a,b){return a.activeTexture(b)},
bg:function(a,b,c){return a.attachShader(b,c)},
bh:function(a,b,c){return a.bindBuffer(b,c)},
bj:function(a,b,c){return a.bindTexture(b,c)},
bk:function(a,b){return a.blendEquation(b)},
bl:function(a,b,c){return a.blendFunc(b,c)},
bm:function(a,b,c,d){return a.bufferData(b,c,d)},
bn:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bo:function(a,b){return a.compileShader(b)},
bp:function(a){return a.createBuffer()},
bq:function(a){return a.createProgram()},
bs:function(a,b){return a.createShader(b)},
bt:function(a){return a.createTexture()},
bv:function(a,b){return a.depthMask(b)},
bw:function(a,b){return a.disable(b)},
bx:function(a,b,c,d){return a.drawArrays(b,c,d)},
by:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bz:function(a,b){return a.enable(b)},
bA:function(a,b){return a.enableVertexAttribArray(b)},
aa:function(a){return P.V(a.getContextAttributes())},
aC:function(a){return a.getError()},
aE:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
aH:function(a,b){return a.getShaderInfoLog(b)},
aI:function(a,b,c){return a.getShaderParameter(b,c)},
aJ:function(a,b,c){return a.getUniformLocation(b,c)},
bB:function(a,b){return a.linkProgram(b)},
bE:function(a,b,c){return a.pixelStorei(b,c)},
aM:function(a,b,c){return a.shaderSource(b,c)},
aN:function(a,b,c,d){return a.stencilFunc(b,c,d)},
az:function(a,b,c,d,e,f,g,h,i,j){this.as(a,b,c,d,e,f,g)
return},
bH:function(a,b,c,d,e,f,g){return this.az(a,b,c,d,e,f,g,null,null,null)},
as:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bI:function(a,b,c,d){return a.texParameteri(b,c,d)},
bM:function(a,b,c){return a.uniform1f(b,c)},
bN:function(a,b,c){return a.uniform1fv(b,c)},
bO:function(a,b,c){return a.uniform1i(b,c)},
bP:function(a,b,c){return a.uniform1iv(b,c)},
bQ:function(a,b,c){return a.uniform2fv(b,c)},
bR:function(a,b,c){return a.uniform3fv(b,c)},
bS:function(a,b,c){return a.uniform4fv(b,c)},
bT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bV:function(a,b){return a.useProgram(b)},
bW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},lM:{"^":"f;",
d4:function(a,b){return a.beginTransformFeedback(b)},
d5:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
d7:function(a,b,c){return a.bindTransformFeedback(b,c)},
d9:function(a,b){return a.bindVertexArray(b)},
de:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
di:function(a){return a.createTransformFeedback()},
dj:function(a){return a.createVertexArray()},
dl:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dm:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dn:function(a){return a.endTransformFeedback()},
dM:function(a,b,c,d){this.cZ(a,b,H.x(c,"$isd",[P.c],"$asd"),d)
return},
cZ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
be:function(a,b){return a.activeTexture(b)},
bg:function(a,b,c){return a.attachShader(b,c)},
bh:function(a,b,c){return a.bindBuffer(b,c)},
bj:function(a,b,c){return a.bindTexture(b,c)},
bk:function(a,b){return a.blendEquation(b)},
bl:function(a,b,c){return a.blendFunc(b,c)},
bm:function(a,b,c,d){return a.bufferData(b,c,d)},
bn:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bo:function(a,b){return a.compileShader(b)},
bp:function(a){return a.createBuffer()},
bq:function(a){return a.createProgram()},
bs:function(a,b){return a.createShader(b)},
bt:function(a){return a.createTexture()},
bv:function(a,b){return a.depthMask(b)},
bw:function(a,b){return a.disable(b)},
bx:function(a,b,c,d){return a.drawArrays(b,c,d)},
by:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bz:function(a,b){return a.enable(b)},
bA:function(a,b){return a.enableVertexAttribArray(b)},
aa:function(a){return P.V(a.getContextAttributes())},
aC:function(a){return a.getError()},
aE:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
aH:function(a,b){return a.getShaderInfoLog(b)},
aI:function(a,b,c){return a.getShaderParameter(b,c)},
aJ:function(a,b,c){return a.getUniformLocation(b,c)},
bB:function(a,b){return a.linkProgram(b)},
bE:function(a,b,c){return a.pixelStorei(b,c)},
aM:function(a,b,c){return a.shaderSource(b,c)},
aN:function(a,b,c,d){return a.stencilFunc(b,c,d)},
az:function(a,b,c,d,e,f,g,h,i,j){this.as(a,b,c,d,e,f,g)
return},
bH:function(a,b,c,d,e,f,g){return this.az(a,b,c,d,e,f,g,null,null,null)},
as:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bI:function(a,b,c,d){return a.texParameteri(b,c,d)},
bM:function(a,b,c){return a.uniform1f(b,c)},
bN:function(a,b,c){return a.uniform1fv(b,c)},
bO:function(a,b,c){return a.uniform1i(b,c)},
bP:function(a,b,c){return a.uniform1iv(b,c)},
bQ:function(a,b,c){return a.uniform2fv(b,c)},
bR:function(a,b,c){return a.uniform3fv(b,c)},
bS:function(a,b,c){return a.uniform4fv(b,c)},
bT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bV:function(a,b){return a.useProgram(b)},
bW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},hM:{"^":"f;",$ishM:1,"%":"WebGLShader"},i0:{"^":"f;",$isi0:1,"%":"WebGLTexture"},i2:{"^":"f;",$isi2:1,"%":"WebGLTransformFeedback"},i6:{"^":"f;",$isi6:1,"%":"WebGLUniformLocation"},ia:{"^":"f;",$isia:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lS:{"^":"jl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return P.V(this.cM(a,b))},
i:function(a,b,c){H.h(c,"$isH")
throw H.b(P.v("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cM:function(a,b){return a.item(b)},
$asm:function(){return[[P.H,,,]]},
$isi:1,
$asi:function(){return[[P.H,,,]]},
$isd:1,
$asd:function(){return[[P.H,,,]]},
$asp:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},jk:{"^":"f+m;"},jl:{"^":"jk+p;"}}],["","",,G,{"^":"",
ie:function(a){var z,y,x,w
z=H.q(a.split("\n"),[P.c])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.o(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a7(z,"\n")},
dy:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bs(a,b)
z.aM(a,y,c)
z.bo(a,y)
x=H.bK(z.aI(a,y,35713))
if(x!=null&&!x){w=z.aH(a,y)
P.ad("E:Compilation failed:")
P.ad("E:"+G.ie(c))
P.ad("E:Failure:")
P.ad(C.i.E("E:",w))
throw H.b(w)}return y},
bz:{"^":"a;"},
bF:{"^":"bz;",
aR:function(){return this.d},
k:function(a){var z,y,x,w
z=H.q(["{"+new H.dq(H.k6(this)).k(0)+"}["+this.a+"]"],[P.c])
for(y=this.d,x=new H.aQ(y,[H.n(y,0)]),x=x.gB(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a7(z,"\n")}},
fm:{"^":"a;0a,b"},
dn:{"^":"a;a,b,c"},
dm:{"^":"a;a,b,c"},
h7:{"^":"bF;d,a,b,c",p:{
da:function(a,b){var z=P.aa(P.c,P.a)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!1)
z.i(0,"cBlendEquation",b)
z.i(0,"cStencilFunc",$.ed())
return new G.h7(z,a,!1,!0)}}},
h9:{"^":"bz;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
a1:function(a){var z,y
this.ch=a
this.cy.i(0,"aPosition",a)
z=this.d
y=this.r.h(0,"aPosition")
J.b7(z.a,34962,y)
J.eC(z.a,34962,a,35048)},
cj:function(){return this.ch.length/3|0},
af:function(a){var z,y,x,w,v
z=this.r
y=this.d
z.i(0,"aPosition",J.eG(y.a))
this.a1(a)
x=$.al().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.cA(y.a,this.e)
J.eR(y.a,w)
z=z.h(0,"aPosition")
v=x.ck()
J.b7(y.a,34962,z)
J.fb(y.a,w,v,5126,!1,0,0)},
k:function(a){var z,y,x,w
z=H.q(["Faces:0"],[P.c])
for(y=this.cy,x=new H.aQ(y,[H.n(y,0)]),x=x.gB(x);x.t();){w=x.d
C.a.l(z,H.e(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a7(z,"  ")},
p:{
c5:function(a,b,c,d){var z=P.c
return new G.h9(b,J.eK(b.a),c,P.aa(z,P.a),d,0,-1,P.aa(z,P.ag),"meshdata:"+a,!1,!0)}}},
hq:{"^":"bF;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cg:function(a,b){var z
if(typeof a!=="number")return a.dN()
if(typeof b!=="number")return H.b5(b)
z=a/b
if(this.z===z)return
this.z=z
this.aU()},
aU:function(){var z,y,x,w,v,u
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
aR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aD())
x=this.cy
x.w(z.d)
z=this.cx
z.w(this.db)
w=z.a
v=w[0]
u=w[4]
t=w[8]
s=w[12]
r=w[1]
q=w[5]
p=w[9]
o=w[13]
n=w[2]
m=w[6]
l=w[10]
k=w[14]
j=w[3]
i=w[7]
h=w[11]
g=w[15]
f=x.a
e=f[0]
d=f[4]
c=f[8]
b=f[12]
a=f[1]
a0=f[5]
a1=f[9]
a2=f[13]
a3=f[2]
a4=f[6]
a5=f[10]
a6=f[14]
a7=f[3]
a8=f[7]
a9=f[11]
b0=f[15]
w[0]=v*e+u*a+t*a3+s*a7
w[4]=v*d+u*a0+t*a4+s*a8
w[8]=v*c+u*a1+t*a5+s*a9
w[12]=v*b+u*a2+t*a6+s*b0
w[1]=r*e+q*a+p*a3+o*a7
w[5]=r*d+q*a0+p*a4+o*a8
w[9]=r*c+q*a1+p*a5+o*a9
w[13]=r*b+q*a2+p*a6+o*b0
w[2]=n*e+m*a+l*a3+k*a7
w[6]=n*d+m*a0+l*a4+k*a8
w[10]=n*c+m*a1+l*a5+k*a9
w[14]=n*b+m*a2+l*a6+k*b0
w[3]=j*e+i*a+h*a3+g*a7
w[7]=j*d+i*a0+h*a4+g*a8
w[11]=j*c+i*a1+h*a5+g*a9
w[15]=j*b+i*a2+h*a6+g*b0
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
kN:{"^":"a;"},
hG:{"^":"bz;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cn:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cB(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cB(w.a,v,t))}},
cr:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.q([],[P.c])
x=H.q([],[P.c])
for(y=new H.aQ(y,[H.n(y,0)]),y=y.gB(y);y.t();){w=y.d
if(!z.at(0,w))C.a.l(x,w)}for(z=this.x,z=P.iU(z,z.r,H.n(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isH",[P.c,P.a],"$asH")
z=Date.now()
for(y=new H.aQ(b,[H.n(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.ev(s,0)){case 117:if(w.at(0,s)){r=b.h(0,s)
if(v.at(0,s))H.cr("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.al().h(0,s)
if(q==null)H.Q("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.K(r)
J.bT(x.a,p,r)}else if(!!J.z(r).$isfR)J.f9(x.a,p,r)
break
case"float":if(q.c===0){H.e_(r)
J.f7(x.a,p,r)}else if(!!J.z(r).$isag)J.f8(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ac(r,"$isah").a
J.cI(x.a,p,!1,s)}else if(!!J.z(r).$isag)J.cI(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.z.gc8(H.ac(r,"$islm"))
J.cH(x.a,p,!1,s)}else if(!!J.z(r).$isag)J.cH(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cG(o,p,H.ac(r,"$iscc").a)
else J.cG(o,p,H.h(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cF(o,p,H.ac(r,"$isA").a)
else J.cF(o,p,H.h(r,"$isag"))
break
case"vec2":if(q.c===0){s=C.z.gc8(H.ac(r,"$ismi"))
J.cE(x.a,p,s)}else{H.h(r,"$isag")
J.cE(x.a,p,r)}break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.b5(s)
J.cx(x.a,33984+s)
s=H.ac(r,"$iscb").b
J.b8(x.a,3553,s)
s=this.ch
J.bT(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.E()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.b5(s)
J.cx(x.a,33984+s)
s=H.ac(r,"$iscb").b
J.b8(x.a,34067,s)
s=this.ch
J.bT(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.E()
this.ch=s+1
break
default:H.cr("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ae(r,!0)
o=x.a
if(s)J.bq(o,2929)
else J.bR(o,2929)
break
case"cStencilFunc":H.ac(r,"$isdn")
s=r.a
o=x.a
if(s===1281)J.bR(o,2960)
else{J.bq(o,2960)
o=r.b
n=r.c
J.f3(x.a,s,o,n)}break
case"cDepthWrite":H.bK(r)
J.eL(x.a,r)
break
case"cBlendEquation":H.ac(r,"$isdm")
s=r.a
o=x.a
if(s===1281)J.bR(o,3042)
else{J.bq(o,3042)
o=r.b
n=r.c
J.eB(x.a,o,n)
J.eA(x.a,s)}break}++t
break}}m=P.fE(0,0,0,Date.now()-new P.bu(z,!1).a,0,0)
""+t
m.k(0)},
ci:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isd",[G.bF],"$asd")
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
y.aZ()}for(x=0;x<2;++x){w=b[x]
this.cv(w.a,w.aR())}y=this.Q
y.X(0)
for(v=a.cy,v=new H.aQ(v,[H.n(v,0)]),v=v.gB(v);v.t();)y.l(0,v.d)
u=this.cr()
if(u.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.cA(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cj()
s=a.Q
r=a.z
if(t)J.ey(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eP(q,y,v,s,0,r)
else J.eO(q,y,v,s,0)}else{s=z.a
if(r>1)J.eN(s,y,0,v,r)
else J.eM(s,y,0,v)}if(t)J.eS(z.a)},
aQ:function(a,b){return this.ci(a,b,null)},
p:{
df:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.c
y=P.X(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isd",[z],"$asd")
u=J.eH(b.a)
t=G.dy(b.a,35633,x)
J.cy(b.a,u,t)
s=G.dy(b.a,35632,w)
J.cy(b.a,u,s)
if(v.length>0)J.f6(b.a,u,v,35980)
J.f1(b.a,u)
if(!H.bK(J.f0(b.a,u,35714)))H.Q(J.f_(b.a,u))
z=new G.hG(b,c,d,u,P.c4(c.c,z),P.aa(z,P.a),P.aa(z,z),y,a,!1,!0)
z.cn(a,b,c,d)
return z}}},
y:{"^":"a;a,b,c",
ck:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hN:{"^":"a;a,0b,c,d,e,f,r,x",
aP:function(a){var z,y,x,w
H.x(a,"$isd",[P.c],"$asd")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.ac(z)},
a0:function(a){var z,y,x
H.x(a,"$isd",[P.c],"$asd")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.P)(a),++x)C.a.l(y,a[x])
C.a.ac(y)},
cf:function(a){var z,y
H.x(a,"$isd",[P.c],"$asd")
for(z=this.f,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ac(z)},
cp:function(a,b){this.b=this.aV(!0,H.x(a,"$isd",[P.c],"$asd"),b)},
aT:function(a){return this.cp(a,null)},
co:function(a,b){this.b=this.aV(!1,H.x(a,"$isd",[P.c],"$asd"),b)},
aS:function(a){return this.co(a,null)},
aV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.c]
H.x(b,"$isd",z,"$asd")
y=this.c
x=y.length===0
w=H.q(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.P)(y),++u){t=y[u]
s=$.al().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.o(z,u)
q=z[u]
s=$.al().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.al().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.al().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.a7(w,"\n")},
p:{
bD:function(a){var z,y
z=P.c
y=[z]
return new G.hN(a,H.q([],y),H.q([],y),H.q([],y),H.q([],y),0,P.aa(z,P.G))}}},
hR:{"^":"bz;",
aD:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
i1:{"^":"a;a,b,c,d,e,f,r"},
cb:{"^":"a;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fP:{"^":"cb;f,a,b,c,d,e",p:{
cZ:function(a,b,c,d,e){var z=J.eI(a.a)
J.b8(a.a,e,z)
J.f2(a.a,37440,1)
J.b8(a.a,e,z)
J.f4(a.a,e,0,6408,6408,5121,c)
J.cD(a.a,e,10240,9729)
J.cD(a.a,e,10241,9729)
J.eZ(a.a)
J.b8(a.a,e,null)
return new G.fP(c,b,z,e,a,new G.i1(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
dt:function(){var z,y,x
z=document.createElement("canvas")
z.width=64
z.height=64
y=H.h(C.h.c_(z,"2d"),"$isbX")
x=(y&&C.q).br(y,32,32,1,32,32,22);(x&&C.n).a5(x,0,"gray")
C.n.a5(x,1,"black")
y.fillStyle=x
C.q.dq(y,0,0,64,64)
x=C.q.br(y,32,32,1,32,32,6);(x&&C.n).a5(x,0,"white")
C.n.a5(x,1,"gray")
y.globalAlpha=0.9
y.fillStyle=x
y.arc(32,32,4,0,6.283185307179586,!1)
y.fill()
return z},
iW:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.ix("span",null),"$isN")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ah(y,"float")
y.setProperty(x,"left","")
x=C.x.ah(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.H(z,v)}return z},
hT:{"^":"a;",
cq:function(a,b,c){var z,y
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
hU:{"^":"hT;e,f,a,b,c,d",
cu:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.dL(y,2)+" fps"
C.r.c3(this.c,b)
x=C.b.C(30*C.y.da(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isN")
v=w.style
u=""+x+"px"
v.height=u
C.r.H(z,w)},
ct:function(a){return this.cu(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",fY:{"^":"a;a,b,c",
cl:function(a){var z,y
a=document
z=W.aO
y={func:1,ret:-1,args:[z]}
W.aj(a,"keydown",H.k(new D.h_(this),y),!1,z)
W.aj(a,"keyup",H.k(new D.h0(this),y),!1,z)},
p:{
fZ:function(a){var z=P.G
z=new D.fY(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z))
z.cl(a)
return z}}},h_:{"^":"l:11;a",
$1:function(a){var z
H.h(a,"$isaO")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h0:{"^":"l:11;a",
$1:function(a){var z
H.h(a,"$isaO")
z=this.a
z.a.bF(0,a.which)
z.c.l(0,a.which)}},hc:{"^":"a;a,b,c,d,e,f,r,x",
cm:function(a){var z,y
z=C.h.gdB(a)
y=H.n(z,0)
W.aj(z.a,z.b,H.k(new D.he(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gdA(a)
z=H.n(y,0)
W.aj(y.a,y.b,H.k(new D.hf(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.h.gdC(a)
y=H.n(z,0)
W.aj(z.a,z.b,H.k(new D.hg(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.h.gdD(a)
z=H.n(y,0)
W.aj(y.a,y.b,H.k(new D.hh(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
hd:function(a){var z=P.G
z=new D.hc(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),0,0,0,0,0)
z.cm(a)
return z}}},he:{"^":"l:3;a",
$1:function(a){var z,y
H.h(a,"$isY")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.K(y.gbD(a).a)
z.x=H.K(y.gbD(a).b)
z.d=a.movementX
z.e=a.movementY}},hf:{"^":"l:3;a",
$1:function(a){var z
H.h(a,"$isY")
a.preventDefault()
P.ad("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hg:{"^":"l:3;a",
$1:function(a){var z
H.h(a,"$isY")
a.preventDefault()
z=this.a
z.a.bF(0,a.button)
z.c.l(0,a.button)}},hh:{"^":"l:24;a",
$1:function(a){H.h(a,"$isaX")
a.preventDefault()
this.a.f=H.K(C.ae.gdk(a))}},ho:{"^":"hR;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
cn:function(a){var z,y
z=C.C.dr(H.x(a,"$isi",[P.a],"$asi"),0,new A.k8(),P.G)
if(typeof z!=="number")return H.b5(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k8:{"^":"l:25;",
$2:function(a,b){var z,y
H.K(a)
z=J.af(b)
if(typeof a!=="number")return a.E()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ah:{"^":"a;a",
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n[3] "+this.Y(3).k(0)+"\n"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ah){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.cn(this.a)},
Y:function(a){var z,y,x
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
return new T.cc(z)},
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
z[15]=1}},A:{"^":"a;a",
ab:function(a,b,c){var z=this.a
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
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.cn(this.a)},
ad:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.A(z)
y.w(this)
x=b.a
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
E:function(a,b){var z=new T.A(new Float32Array(3))
z.w(this)
z.l(0,b)
return z},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
ga8:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
a9:function(a){var z,y,x
z=Math.sqrt(this.ga8())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
au:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bu:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.A(new Float32Array(3))
z.ab(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
l:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
aO:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
U:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
c1:function(a){var z=new T.A(new Float32Array(3))
z.w(this)
z.U(0,a)
return z},
gbX:function(a){return this.a[0]},
gbY:function(a){return this.a[1]}},cc:{"^":"a;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.cc){z=this.a
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
return Math.sqrt(y*y+x*x+w*w+z*z)}}}],["","",,Z,{"^":"",
bB:function(a,b){var z,y,x,w
z=a.aw()
y=a.aw()
x=a.aw()
w=new T.A(new Float32Array(3))
w.ab(z-0.5,y-0.5,x-0.5)
w.U(0,b)
return w},
d7:function(a,b,c,d){var z,y,x,w,v
H.x(a,"$isd",[P.a1],"$asd")
z=H.q([],[Z.bA])
for(y=0;y<5;++y){x=a[y]
w=new Float32Array(3)
w[0]=x
w[1]=b
w[2]=c
v=new T.A(new Float32Array(3))
v.w(new T.A(w))
v.U(0,d)
w=new T.A(new Float32Array(3))
w.w(v)
C.a.l(z,new Z.bA(w))}return z},
cX:function(a){var z,y,x,w,v,u,t,s
H.x(a,"$isd",[Z.bA],"$asd")
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
c_:function(a,b){var z,y,x,w,v,u,t
H.x(a,"$isd",[Z.bx],"$asd")
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
y=$.al()
y.i(0,"uSources",C.F)
y.i(0,"uSinks",C.F)
y=document
x=C.j.c0(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.hU(0,0,x,w,y.createElement("div"),R.iW("blue","gray",90,30))
u.cq(x,"blue","gray")
t=P.j7(0)
s=H.h(C.j.ax(y,"#webgl-canvas"),"$isbW")
r=s.clientWidth
q=s.clientHeight
s.width=r
s.height=q
p=new G.fm(s)
y=P.c
x=P.a
v=(s&&C.h).aB(s,"webgl2",P.d5(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
p.a=v
if(v==null)H.Q(P.cW('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.eY(v))
if($.k2>0)P.ad("I: "+o)
J.eD(v,0,0,0,1)
J.bq(v,2929)
v=new Float32Array(3)
o=D.fZ(null)
n=D.hd(s)
m=new T.ah(new Float32Array(16))
m.V()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new D.ho(15,0.5,0.5,0,new T.A(v),-0.02,o,n,m,new T.A(l),new T.A(k),new T.A(j),new T.A(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.ah(new Float32Array(16))
v.V()
o=new T.ah(new Float32Array(16))
o.V()
h=new G.hq(i,50,1,0.1,1000,v,o,new T.ah(new Float32Array(16)),P.aa(y,x),"perspective",!1,!0)
h.aU()
h.cg(r,q)
g=G.df("CPU",p,$.et(),$.es())
f=G.df("GPU",p,$.er(),$.eq())
y=f.e
e=C.a.dt(y.f,"tPosition")
P.ad("@@@@ "+e)
x=[P.a1]
d=Z.d7(H.q([2,1,0,-1,-2],x),0,2,3)
c=Z.d7(H.q([2,1,0,-1,-2],x),0,-2,3)
x=Z.bB(t,10010)
v=new T.A(new Float32Array(3))
v.w(x)
b=H.q([new Z.bx(v)],[Z.bx])
v=b.length
a=new Float32Array(3*v)
z.a=a
Z.c_(b,a)
x=$.ea()
a0=G.da("stars",x)
v=a0.d
v.i(0,"uTexture",G.cZ(p,"Utils::Particles",R.dt(),null,3553))
o=new T.ah(new Float32Array(16))
o.V()
v.i(0,"uModelMatrix",o)
v.i(0,"uPointSize",200)
a1=G.c5("mdJS",g.d,0,g.e.x)
a1.af(a)
a2=G.da("stars",x)
x=a2.d
x.i(0,"uTexture",G.cZ(p,"Utils::Particles",R.dt(),null,3553))
v=new T.ah(new Float32Array(16))
v.V()
x.i(0,"uModelMatrix",v)
x.i(0,"uPointSize",200)
x.i(0,"uSources",Z.cX(d))
x.i(0,"uSinks",Z.cX(c))
x=f.d
y=y.x
a3=G.c5("ionsOut",x,0,y)
a3.af(a)
a4=G.c5("ionsIn",x,0,y)
a4.af(a)
y=new Z.km(z,b,t,p,e,a3,a4)
a5=J.eJ(p.a)
J.ez(p.a,36386,a5)
y.$1(null)
x=$.cw()
x.toString
v=W.W
W.aj(x,"change",H.k(y,{func:1,ret:-1,args:[v]}),!1,v)
new Z.ko(i,new Z.kn(z,b,d,c,t,a1),g,a1,h,a0,f,a4,a2,p,a3,b,u).$1(0)},
bA:{"^":"a;a",
k:function(a){var z=this.a.a
return"POLE: "+(H.e(z[0])+" "+H.e(z[1])+" "+H.e(z[2]))}},
bx:{"^":"a;a",
cs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=[Z.bA]
H.x(a,"$isd",z,"$asd")
H.x(b,"$isd",z,"$asd")
y=new T.A(new Float32Array(3))
for(z=a.length,x=0;x<a.length;a.length===z||(0,H.P)(a),++x){w=a[x]
v=this.a
u=new T.A(new Float32Array(3))
u.w(v)
u.aO(0,w.a)
t=Math.sqrt(u.ga8())
if(t<=0.2)continue
if(t>100.1){z=c.bC(a.length)
if(z<0||z>=a.length)return H.o(a,z)
s=a[z]
z=Z.bB(c,0.35)
v=new T.A(new Float32Array(3))
v.w(s.a)
v.l(0,z)
this.a=v
return}v=new T.A(new Float32Array(3))
v.w(u)
v.U(0,1/(t*t))
r=new T.A(new Float32Array(3))
r.w(y)
r.l(0,v)
y=r}for(z=b.length,x=0;x<b.length;b.length===z||(0,H.P)(b),++x,y=r){w=b[x]
v=this.a
u=new T.A(new Float32Array(3))
u.w(w.a)
u.aO(0,v)
t=Math.sqrt(u.ga8())
if(t<=0.2){z=c.bC(a.length)
if(z<0||z>=a.length)return H.o(a,z)
s=a[z]
z=Z.bB(c,0.35)
v=new T.A(new Float32Array(3))
v.w(s.a)
v.l(0,z)
this.a=v
return}v=new T.A(new Float32Array(3))
v.w(u)
v.U(0,1/(t*t))
r=new T.A(new Float32Array(3))
r.w(y)
r.l(0,v)}z=this.a
v=new T.A(new Float32Array(3))
v.w(y)
v.a9(0)
this.a=z.E(0,v.c1(d))},
k:function(a){var z=this.a.a
return"ION: "+(H.e(z[0])+" "+H.e(z[1])+" "+H.e(z[2]))}},
km:{"^":"l:26;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w,v,u,t
z=P.kh($.cw().value,null,null)
P.ad("resize to "+H.e(z)+" ions")
y=this.b
C.a.sj(y,0)
if(typeof z!=="number")return H.b5(z)
x=this.c
w=0
for(;w<z;++w){v=Z.bB(x,10010)
u=new T.A(new Float32Array(3))
u.w(v)
C.a.l(y,new Z.bx(u))}t=new Float32Array(3*z)
x=this.a
x.a=t
Z.c_(y,t)
y=this.d
J.b7(y.a,34962,null)
v=this.e
J.cz(y.a,35982,v,null)
u=this.f
u.a1(x.a)
this.r.a1(x.a)
u=u.r.h(0,"aPosition")
J.cz(y.a,35982,v,u)}},
kn:{"^":"l:27;a,b,c,d,e,f",
$1:function(a){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=this.c,w=this.d,v=this.e,u=0;u<z.length;z.length===y||(0,H.P)(z),++u)z[u].cs(x,w,v,a)
y=this.a
Z.c_(z,y.a)
this.f.a1(y.a)}},
ko:{"^":"l:28;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
H.cq(a8)
z=this.a
z.cx+=0.002
y=z.fx
x=y.a
if(x.u(0,0)||x.u(0,1)){x=z.cx
w=y.d
if(typeof w!=="number")return w.aK()
z.cx=x+w*0.01
w=z.cy
x=y.e
if(typeof x!=="number")return x.aK()
z.cy=w+x*0.01}x=z.fr
w=x.a
if(w.u(0,37))z.cx+=0.03
else if(w.u(0,39))z.cx-=0.03
if(w.u(0,38))z.cy+=0.03
else if(w.u(0,40))z.cy-=0.03
if(w.u(0,33))z.ch*=0.99
else if(w.u(0,34))z.ch*=1.01
if(w.u(0,32)){z.cx=0
z.cy=0}w=y.f
if(typeof w!=="number")return w.aK()
w=z.ch-w*z.dy
if(w>0)z.ch=w
w=C.t.dc(z.cy,-1.4707963267948965,1.4707963267948965)
z.cy=w
v=z.ch
u=z.cx
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=z.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=z.dx
w=u.a
r[12]=r[12]+w[0]
r[13]=r[13]+w[1]
r[14]=r[14]+w[2]
q=new T.A(new Float32Array(3))
q.ab(0,1,0)
w=z.aD()
p=w.ad(0,u)
p.a9(0)
o=q.bu(p)
o.a9(0)
n=p.bu(o)
n.a9(0)
u=o.au(w)
v=n.au(w)
w=p.au(w)
s=o.a
m=s[0]
l=n.a
k=l[0]
j=p.a
i=j[0]
h=s[1]
g=l[1]
f=j[1]
s=s[2]
l=l[2]
j=j[2]
r[15]=1
r[14]=-w
r[13]=-v
r[12]=-u
r[11]=0
r[10]=j
r[9]=l
r[8]=s
r[7]=0
r[6]=f
r[5]=g
r[4]=h
r[3]=0
r[2]=i
r[1]=k
r[0]=m
m=z.f
k=m.a
k[0]=r[2]
k[1]=r[6]
k[2]=r[10]
z=-z.db
e=Math.sqrt(m.ga8())
o=k[0]/e
n=k[1]/e
p=k[2]/e
d=Math.cos(z)
c=Math.sin(z)
b=1-d
a=o*o*b+d
z=p*c
a0=o*n*b-z
k=n*c
a1=o*p*b+k
a2=n*o*b+z
a3=n*n*b+d
z=o*c
a4=n*p*b-z
a5=p*o*b-k
a6=p*n*b+z
a7=p*p*b+d
z=r[0]
k=r[4]
m=r[8]
i=r[1]
h=r[5]
g=r[9]
f=r[2]
s=r[6]
l=r[10]
j=r[3]
u=r[7]
v=r[11]
r[0]=z*a+k*a2+m*a5
r[1]=i*a+h*a2+g*a5
r[2]=f*a+s*a2+l*a5
r[3]=j*a+u*a2+v*a5
r[4]=z*a0+k*a3+m*a6
r[5]=i*a0+h*a3+g*a6
r[6]=f*a0+s*a3+l*a6
r[7]=j*a0+u*a3+v*a6
r[8]=z*a1+k*a4+m*a7
r[9]=i*a1+h*a4+g*a7
r[10]=f*a1+s*a4+l*a7
r[11]=j*a1+u*a4+v*a7
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
this.c.aQ(this.d,H.q([z,this.f],y))}else{x=this.x
this.r.aQ(x,H.q([z,this.y],y))
y=this.z
x=x.r.h(0,"aPosition")
J.b7(y.a,34962,x)
x=this.Q.r.h(0,"aPosition")
J.b7(y.a,35982,x)
x=this.ch.length
J.eF(y.a,35982,34962,0,0,x*3*4)}C.af.gd2(window).bJ(this,-1)
if(typeof a8!=="number")return a8.E()
this.cx.ct(a8+0)}}},1]]
setupProgram(dart,0,0)
J.z=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.d2.prototype
if(typeof a=="boolean")return J.fW.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bN(a)}
J.b2=function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bN(a)}
J.e0=function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bN(a)}
J.k3=function(a){if(typeof a=="number")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aW.prototype
return a}
J.k4=function(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aW.prototype
return a}
J.e1=function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.aW.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.a)return a
return J.bN(a)}
J.k5=function(a){if(a==null)return a
if(!(a instanceof P.a))return J.aW.prototype
return a}
J.ae=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.z(a).F(a,b)}
J.a3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k3(a).P(a,b)}
J.eu=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b2(a).h(a,b)}
J.ev=function(a,b){return J.e1(a).b1(a,b)}
J.bp=function(a,b){return J.j(a).cQ(a,b)}
J.ew=function(a,b,c){return J.j(a).cR(a,b,c)}
J.cx=function(a,b){return J.j(a).be(a,b)}
J.ex=function(a,b,c,d){return J.j(a).d_(a,b,c,d)}
J.cy=function(a,b,c){return J.j(a).bg(a,b,c)}
J.ey=function(a,b){return J.j(a).d4(a,b)}
J.b7=function(a,b,c){return J.j(a).bh(a,b,c)}
J.cz=function(a,b,c,d){return J.j(a).d5(a,b,c,d)}
J.b8=function(a,b,c){return J.j(a).bj(a,b,c)}
J.ez=function(a,b,c){return J.j(a).d7(a,b,c)}
J.cA=function(a,b){return J.j(a).d9(a,b)}
J.eA=function(a,b){return J.j(a).bk(a,b)}
J.eB=function(a,b,c){return J.j(a).bl(a,b,c)}
J.eC=function(a,b,c,d){return J.j(a).bm(a,b,c,d)}
J.eD=function(a,b,c,d,e){return J.j(a).bn(a,b,c,d,e)}
J.eE=function(a,b){return J.k4(a).K(a,b)}
J.bQ=function(a,b,c){return J.b2(a).dd(a,b,c)}
J.eF=function(a,b,c,d,e,f){return J.j(a).de(a,b,c,d,e,f)}
J.eG=function(a){return J.j(a).bp(a)}
J.eH=function(a){return J.j(a).bq(a)}
J.eI=function(a){return J.j(a).bt(a)}
J.eJ=function(a){return J.j(a).di(a)}
J.eK=function(a){return J.j(a).dj(a)}
J.eL=function(a,b){return J.j(a).bv(a,b)}
J.bR=function(a,b){return J.j(a).bw(a,b)}
J.eM=function(a,b,c,d){return J.j(a).bx(a,b,c,d)}
J.eN=function(a,b,c,d,e){return J.j(a).dl(a,b,c,d,e)}
J.eO=function(a,b,c,d,e){return J.j(a).by(a,b,c,d,e)}
J.eP=function(a,b,c,d,e,f){return J.j(a).dm(a,b,c,d,e,f)}
J.eQ=function(a,b){return J.e0(a).q(a,b)}
J.bq=function(a,b){return J.j(a).bz(a,b)}
J.eR=function(a,b){return J.j(a).bA(a,b)}
J.eS=function(a){return J.j(a).dn(a)}
J.eT=function(a,b){return J.j(a).D(a,b)}
J.eU=function(a){return J.j(a).gd3(a)}
J.af=function(a){return J.z(a).gv(a)}
J.br=function(a){return J.e0(a).gB(a)}
J.aI=function(a){return J.b2(a).gj(a)}
J.eV=function(a){return J.j(a).gdE(a)}
J.eW=function(a){return J.j(a).gdJ(a)}
J.eX=function(a){return J.k5(a).gbX(a)}
J.bS=function(a,b){return J.j(a).T(a,b)}
J.eY=function(a){return J.j(a).aa(a)}
J.eZ=function(a){return J.j(a).aC(a)}
J.f_=function(a,b){return J.j(a).aE(a,b)}
J.f0=function(a,b,c){return J.j(a).aF(a,b,c)}
J.cB=function(a,b,c){return J.j(a).aJ(a,b,c)}
J.f1=function(a,b){return J.j(a).bB(a,b)}
J.f2=function(a,b,c){return J.j(a).bE(a,b,c)}
J.cC=function(a){return J.j(a).dF(a)}
J.f3=function(a,b,c,d){return J.j(a).aN(a,b,c,d)}
J.f4=function(a,b,c,d,e,f,g){return J.j(a).bH(a,b,c,d,e,f,g)}
J.cD=function(a,b,c,d){return J.j(a).bI(a,b,c,d)}
J.f5=function(a){return J.e1(a).dK(a)}
J.b9=function(a){return J.z(a).k(a)}
J.f6=function(a,b,c,d){return J.j(a).dM(a,b,c,d)}
J.f7=function(a,b,c){return J.j(a).bM(a,b,c)}
J.f8=function(a,b,c){return J.j(a).bN(a,b,c)}
J.bT=function(a,b,c){return J.j(a).bO(a,b,c)}
J.f9=function(a,b,c){return J.j(a).bP(a,b,c)}
J.cE=function(a,b,c){return J.j(a).bQ(a,b,c)}
J.cF=function(a,b,c){return J.j(a).bR(a,b,c)}
J.cG=function(a,b,c){return J.j(a).bS(a,b,c)}
J.cH=function(a,b,c,d){return J.j(a).bT(a,b,c,d)}
J.cI=function(a,b,c,d){return J.j(a).bU(a,b,c,d)}
J.fa=function(a,b){return J.j(a).bV(a,b)}
J.fb=function(a,b,c,d,e,f,g){return J.j(a).bW(a,b,c,d,e,f,g)}
I.aF=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bs.prototype
C.h=W.bW.prototype
C.n=W.fj.prototype
C.q=W.bX.prototype
C.x=W.ft.prototype
C.r=W.fA.prototype
C.L=W.fC.prototype
C.M=W.fN.prototype
C.j=W.fO.prototype
C.N=J.f.prototype
C.a=J.bd.prototype
C.y=J.d0.prototype
C.b=J.d1.prototype
C.z=J.d2.prototype
C.t=J.be.prototype
C.i=J.bf.prototype
C.U=J.bg.prototype
C.C=H.hi.prototype
C.Y=W.hk.prototype
C.D=J.hr.prototype
C.E=W.hC.prototype
C.K=W.i_.prototype
C.w=J.aW.prototype
C.ae=W.aX.prototype
C.af=W.ic.prototype
C.e=new P.j9()
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
C.V=H.q(I.aF(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.W=H.q(I.aF(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.X=H.q(I.aF([]),[P.c])
C.u=H.q(I.aF(["bind","if","ref","repeat","syntax"]),[P.c])
C.v=H.q(I.aF(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.Z=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.F=new G.y("vec3","",5)
C.a_=new G.y("vec4","delta from light",0)
C.o=new G.y("","",0)
C.G=new G.y("vec3","vertex coordinates",0)
C.a0=new G.y("vec3","vertex binormals",0)
C.H=new G.y("vec4","for wireframe",0)
C.a1=new G.y("vec4","per vertex color",0)
C.a2=new G.y("float","for normal maps",0)
C.k=new G.y("mat4","",0)
C.a4=new G.y("mat4","",4)
C.a3=new G.y("mat4","",128)
C.c=new G.y("float","",0)
C.a5=new G.y("float","",4)
C.a6=new G.y("float","depth for shadowmaps",0)
C.f=new G.y("sampler2D","",0)
C.a7=new G.y("float","for bump maps",0)
C.a8=new G.y("vec2","texture uvs",0)
C.a9=new G.y("float","time since program start in sec",0)
C.l=new G.y("vec2","",0)
C.aa=new G.y("samplerCube","",0)
C.m=new G.y("vec4","",0)
C.ab=new G.y("vec3","vertex normals",0)
C.ac=new G.y("sampler2DShadow","",0)
C.I=new G.y("vec3","per vertex color",0)
C.J=new G.y("mat3","",0)
C.ad=new G.y("vec3","vertex tangents",0)
$.a4=0
$.aJ=null
$.cL=null
$.ce=!1
$.e3=null
$.dW=null
$.e8=null
$.bL=null
$.bO=null
$.co=null
$.aC=null
$.aZ=null
$.b_=null
$.cf=!1
$.F=C.e
$.a9=null
$.bZ=null
$.cV=null
$.cU=null
$.cR=null
$.cQ=null
$.cP=null
$.cO=null
$.k2=0
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
I.$lazy(y,x,w)}})(["kH","ec",function(){return H.e2("_$dart_dartClosure")},"lj","ct",function(){return H.e2("_$dart_js")},"m5","ee",function(){return H.a6(H.bE({
toString:function(){return"$receiver$"}}))},"m6","ef",function(){return H.a6(H.bE({$method$:null,
toString:function(){return"$receiver$"}}))},"m7","eg",function(){return H.a6(H.bE(null))},"m8","eh",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mb","ek",function(){return H.a6(H.bE(void 0))},"mc","el",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ma","ej",function(){return H.a6(H.dp(null))},"m9","ei",function(){return H.a6(function(){try{null.$method$}catch(z){return z.message}}())},"me","en",function(){return H.a6(H.dp(void 0))},"md","em",function(){return H.a6(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mo","cu",function(){return P.ig()},"mE","b6",function(){return[]},"kE","eb",function(){return{}},"mv","eo",function(){return P.c4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)},"mw","cv",function(){return P.aa(P.c,P.bb)},"lT","ed",function(){return new G.dn(1281,0,4294967295)},"kB","ea",function(){return new G.dm(32774,770,769)},"mC","al",function(){return P.d5(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.c,G.y)},"mN","et",function(){var z,y
z=G.bD("PointSpritesV")
y=[P.c]
z.aP(H.q(["aPosition"],y))
z.a0(H.q(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.aT(H.q(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"mM","es",function(){var z,y
z=G.bD("PointSpritesF")
y=[P.c]
z.a0(H.q(["uTexture"],y))
z.aT(H.q(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mI","cw",function(){return H.h(C.j.ax(W.dZ(),"#particles"),"$isdh")},"mH","ep",function(){return H.h(C.j.ax(W.dZ(),"#cpucompute"),"$isd_")},"mL","er",function(){var z,y
z=G.bD("ParticleV")
y=[P.c]
z.aP(H.q(["aPosition"],y))
z.a0(H.q(["uPerspectiveViewMatrix","uModelMatrix","uPointSize","uSources","uSinks"],y))
z.cf(H.q(["tPosition"],y))
z.aS(H.q(["const float kMaxDistance = 100.1;\nconst float kMinDistance = 0.2;\nconst float dt = 0.06;  \n    \nfloat rand(vec2 seed){\n    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453);\n}      \n\nint irand(int n, vec2 seed) {\n    return int(floor(rand(seed) * float(n)));\n}\n\nvec3 vec3rand(vec3 seed) {\n    return vec3(rand(seed.yz) - 0.5, rand(seed.xz) - 0.5, rand(seed.xy) - 0.5);\n}\n\nvec3 RandomSource(vec3 seed) {\n    return uSources[irand(uSources.length(), seed.xy * seed.z)];\n}\n\nvec3 Update(vec3 pos, vec3 seed) {\n    vec3 force = vec3(0.0, 0.0, 0.0);\n    for (int i = 0; i < uSources.length(); ++i) {\n       vec3 d = pos - uSources[i];\n       float l = length(d);\n       if (l <= kMinDistance) continue;\n       if (l >= kMaxDistance) {\n           return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    \n    for (int i = 0; i < uSinks.length(); ++i) {\n       vec3 d = uSinks[i] - pos;\n       float l = length(d);\n       if (l <= kMinDistance) {\n          return RandomSource(seed) + vec3rand(seed) * 0.35;\n       }\n       force += d / (l * l); \n    } \n    return pos + normalize(force) * dt;\n}\n      \nvoid main() {        \n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * \n                  vec4(aPosition, 1.0);\n    gl_PointSize = uPointSize/gl_Position.z;\n    \n    // new position for next round\n    tPosition = Update(aPosition, gl_Position.xyz);\n}\n"],y))
return z},"mK","eq",function(){var z,y
z=G.bD("ParticleF")
y=[P.c]
z.a0(H.q(["uTexture"],y))
z.aS(H.q(["void main() {\n      oFragColor = texture( uTexture,  gl_PointCoord);\n}\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[P.c,,]},{func:1,ret:P.D,args:[W.Y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.c,args:[P.G]},{func:1,ret:P.M,args:[W.a5]},{func:1,ret:P.M,args:[P.c]},{func:1,ret:P.D,args:[W.aO]},{func:1,ret:P.M,args:[W.N,P.c,P.c,W.bj]},{func:1,args:[,P.c]},{func:1,args:[P.c]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[,],opt:[P.Z]},{func:1,ret:[P.a7,,],args:[,]},{func:1,ret:P.M,args:[W.t]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.D,args:[P.C]},{func:1,args:[W.W]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.D,args:[W.aX]},{func:1,ret:P.G,args:[P.G,P.a]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.a1]},{func:1,ret:-1,args:[P.C]},{func:1,ret:P.G,args:[,,]}]
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
if(x==y)H.ku(d||a)
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
Isolate.aF=a.aF
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
