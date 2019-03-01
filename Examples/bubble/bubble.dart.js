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
b6.$isb=b5
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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cy(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bc=function(){}
var dart=[["","",,H,{"^":"",lJ:{"^":"b;a"}}],["","",,J,{"^":"",
cC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cB==null){H.kE()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dG("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cF()]
if(v!=null)return v
v=H.kJ(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cF(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"b;",
C:function(a,b){return a===b},
gv:function(a){return H.b3(a)},
k:["cn",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hf:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isS:1},
hg:{"^":"h;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isy:1},
ck:{"^":"h;",
gv:function(a){return 0},
k:["cp",function(a){return String(a)}]},
hQ:{"^":"ck;"},
b6:{"^":"ck;"},
bt:{"^":"ck;",
k:function(a){var z=a[$.er()]
if(z==null)return this.cp(a)
return"JavaScript function for "+H.e(J.bl(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbo:1},
bq:{"^":"h;$ti",
l:function(a,b){H.x(b,H.o(a,0))
if(!!a.fixed$length)H.a3(P.z("add"))
a.push(b)},
F:function(a,b){var z,y
H.v(b,"$isj",[H.o(a,0)],"$asj")
if(!!a.fixed$length)H.a3(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a0:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
bo:function(a,b){var z,y
H.i(b,{func:1,ret:P.S,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aK(a))}return!1},
ci:function(a,b){if(!!a.immutable$list)H.a3(P.z("sort"))
H.ic(a,J.kf(),H.o(a,0))},
ai:function(a){return this.ci(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aJ(a[z],b))return!0
return!1},
k:function(a){return P.ci(a,"[","]")},
gw:function(a){return new J.ft(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b3(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bb(a,b))
return a[b]},
i:function(a,b,c){H.x(c,H.o(a,0))
if(!!a.immutable$list)H.a3(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
a[b]=c},
$isu:1,
$asu:I.bc,
$isj:1,
$isa:1,
p:{
he:function(a,b){return J.cj(H.m(a,[b]))},
cj:function(a){H.bg(a)
a.fixed$length=Array
return a},
lH:[function(a,b){return J.eU(H.ek(a,"$isX"),H.ek(b,"$isX"))},"$2","kf",8,0,31]}},
lI:{"^":"bq;$ti"},
ft:{"^":"b;a,b,c,0d,$ti",
sb3:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.sb3(null)
return!1}this.sb3(z[x]);++this.c
return!0},
$isaZ:1},
br:{"^":"h;",
K:function(a,b){var z
H.cD(b)
if(typeof b!=="number")throw H.c(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gae(b)
if(this.gae(a)===z)return 0
if(this.gae(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gae:function(a){return a===0?1/a<0:a<0},
bX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.z(""+a+".toInt()"))},
dr:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.z(""+a+".ceil()"))},
ds:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.ba(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dX:function(a,b){var z
if(b>20)throw H.c(P.bQ(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gae(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cr:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bl(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.z("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.da(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
da:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.c(H.ba(b))
return a>b},
$isX:1,
$asX:function(){return[P.F]},
$isaj:1,
$isF:1},
dh:{"^":"br;",$isE:1},
dg:{"^":"br;"},
bs:{"^":"h;",
an:function(a,b){if(b>=a.length)throw H.c(H.bb(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.cX(b,null,null))
return a+b},
ck:function(a,b,c){var z
if(c>a.length)throw H.c(P.bQ(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cj:function(a,b){return this.ck(a,b,0)},
cm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bR(b,null,null))
if(b>c)throw H.c(P.bR(b,null,null))
if(c>a.length)throw H.c(P.bR(c,null,null))
return a.substring(b,c)},
cl:function(a,b){return this.cm(a,b,null)},
dW:function(a){return a.toLowerCase()},
du:function(a,b,c){if(c>a.length)throw H.c(P.bQ(c,0,a.length,null,null))
return H.kS(a,b,c)},
K:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.ba(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bb(a,b))
return a[b]},
$isu:1,
$asu:I.bc,
$isX:1,
$asX:function(){return[P.d]},
$ishN:1,
$isd:1}}],["","",,H,{"^":"",
df:function(){return new P.cq("No element")},
hd:function(){return new P.cq("Too many elements")},
ic:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.E,args:[c,c]})
H.bu(a,0,J.aV(a)-1,b,c)},
bu:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.ib(a,b,c,d,e)
else H.ia(a,b,c,d,e)},
ib:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.be(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ia:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.e.V(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.V(b+a0,2)
v=w-z
u=w+z
t=J.be(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a9(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a9(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a9(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a9(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aJ(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a3()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.R()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.R()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.R()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
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
H.bu(a,b,m-2,a1,a2)
H.bu(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aJ(a1.$2(t.h(a,m),r),0);)++m
for(;J.aJ(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bu(a,m,l,a1,a2)}else H.bu(a,m,l,a1,a2)},
d7:{"^":"j;"},
bO:{"^":"d7;$ti",
gw:function(a){return new H.dl(this,this.gj(this),0,[H.cA(this,"bO",0)])},
aF:function(a,b){return this.co(0,H.i(b,{func:1,ret:P.S,args:[H.cA(this,"bO",0)]}))}},
dl:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.be(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aK(z))
w=this.c
if(w>=x){this.sb4(null)
return!1}this.sb4(y.q(z,w));++this.c
return!0},
$isaZ:1},
ht:{"^":"bO;a,b,$ti",
gj:function(a){return J.aV(this.a)},
q:function(a,b){return this.b.$1(J.f2(this.a,b))},
$asbO:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dH:{"^":"j;a,b,$ti",
gw:function(a){return new H.iC(J.bH(this.a),this.b,this.$ti)}},
iC:{"^":"aZ;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bN:{"^":"b;$ti"}}],["","",,H,{"^":"",
aI:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kw:function(a){return init.types[H.M(a)]},
kH:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isw},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bl(a)
if(typeof z!=="string")throw H.c(H.ba(a))
return z},
b3:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b4:function(a){return H.hR(a)+H.bZ(H.ak(a),0,null)},
hR:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb6){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aI(w.length>1&&C.i.an(w,0)===36?C.i.cl(w,1):w)},
aM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hY:function(a){var z=H.aM(a).getFullYear()+0
return z},
hW:function(a){var z=H.aM(a).getMonth()+1
return z},
hS:function(a){var z=H.aM(a).getDate()+0
return z},
hT:function(a){var z=H.aM(a).getHours()+0
return z},
hV:function(a){var z=H.aM(a).getMinutes()+0
return z},
hX:function(a){var z=H.aM(a).getSeconds()+0
return z},
hU:function(a){var z=H.aM(a).getMilliseconds()+0
return z},
bC:function(a){throw H.c(H.ba(a))},
l:function(a,b){if(a==null)J.aV(a)
throw H.c(H.bb(a,b))},
bb:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.M(J.aV(a))
if(!(b<0)){if(typeof z!=="number")return H.bC(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bR(b,"index",null)},
ba:function(a){return new P.an(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eo})
z.name=""}else z.toString=H.eo
return z},
eo:function(){return J.bl(this.dartException)},
a3:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aK(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dt(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ev()
u=$.ew()
t=$.ex()
s=$.ey()
r=$.eB()
q=$.eC()
p=$.eA()
$.ez()
o=$.eE()
n=$.eD()
m=v.J(y)
if(m!=null)return z.$1(H.cl(H.t(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.cl(H.t(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dt(H.t(y),m))}}return z.$1(new H.iy(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
aF:function(a){var z
if(a==null)return new H.dY(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dY(a)},
ks:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kG:function(a,b,c,d,e,f){H.f(a,"$isbo")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.db("Unsupported number of arguments for wrapped closure"))},
aT:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kG)
a.$identity=z
return z},
fE:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.i1(z).r}else x=d
w=e?Object.create(new H.ie().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.I()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d1(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kw,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d_:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d1(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fB:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fD(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fB(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aW
if(v==null){v=H.bK("self")
$.aW=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aW
if(v==null){v=H.bK("self")
$.aW=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fC:function(a,b,c,d){var z,y
z=H.ce
y=H.d_
switch(b?-1:a){case 0:throw H.c(H.i5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fD:function(a,b){var z,y,x,w,v,u,t,s
z=$.aW
if(z==null){z=H.bK("self")
$.aW=z}y=$.cZ
if(y==null){y=H.bK("receiver")
$.cZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fC(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.I()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.I()
$.aa=y+1
return new Function(z+y+"}")()},
cy:function(a,b,c,d,e,f,g){return H.fE(a,b,H.M(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a5(a,"String"))},
ec:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"double"))},
cD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"num"))},
c0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a5(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a5(a,"int"))},
cE:function(a,b){throw H.c(H.a5(a,H.aI(H.t(b).substring(3))))},
kP:function(a,b){throw H.c(H.d0(a,H.aI(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cE(a,b)},
al:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kP(a,b)},
ek:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cE(a,b)},
bg:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a5(a,"List<dynamic>"))},
kI:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cE(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bz:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.A(a))
if(z==null)return!1
return H.e3(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.bz(a,b))return a
z=H.bD(b)
y=H.a5(a,z)
throw H.c(y)}finally{$.cu=!1}},
bd:function(a,b){if(a!=null&&!H.cx(a,b))H.a3(H.a5(a,H.bD(b)))
return a},
e7:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cz(z)
if(y!=null)return H.bD(y)
return"Closure"}return H.b4(a)},
kT:function(a){throw H.c(new P.fK(H.t(a)))},
eg:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ak:function(a){if(a==null)return
return a.$ti},
n7:function(a,b,c){return H.aU(a["$as"+H.e(c)],H.ak(b))},
bf:function(a,b,c,d){var z
H.t(c)
H.M(d)
z=H.aU(a["$as"+H.e(c)],H.ak(b))
return z==null?null:z[d]},
cA:function(a,b,c){var z
H.t(b)
H.M(c)
z=H.aU(a["$as"+H.e(b)],H.ak(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.M(b)
z=H.ak(a)
return z==null?null:z[b]},
bD:function(a){return H.aE(a,null)},
aE:function(a,b){var z,y
H.v(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aI(a[0].builtin$cls)+H.bZ(a,1,b)
if(typeof a=="function")return H.aI(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.ke(a,b)
if('futureOr' in a)return"FutureOr<"+H.aE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ke:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.i.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aE(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aE(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aE(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aE(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aE(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bZ:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aE(u,c)}return"<"+z.k(0)+">"},
kv:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ak(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.t(b)
H.bg(c)
H.t(d)
if(a==null)return!1
z=H.ak(a)
y=J.A(a)
if(y[b]==null)return!1
return H.ea(H.aU(y[d],z),null,c,null)},
bE:function(a,b,c,d){H.t(b)
H.bg(c)
H.t(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.d0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aI(b.substring(3))+H.bZ(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.t(b)
H.bg(c)
H.t(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aI(b.substring(3))+H.bZ(c,0,null),init.mangledGlobalNames)))},
ea:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n4:function(a,b,c){return a.apply(b,H.aU(J.A(b)["$as"+H.e(c)],H.ak(b)))},
ei:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="y"||a===-1||a===-2||H.ei(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="y"||b===-1||b===-2||H.ei(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bz(a,b)}z=J.A(a).constructor
y=H.ak(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.cx(a,b))throw H.c(H.a5(a,H.bD(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="y")return!0
if('func' in c)return H.e3(a,b,c,d)
if('func' in a)return c.builtin$cls==="bo"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"Y" in y.prototype))return!1
w=y.prototype["$as"+"Y"]
v=H.aU(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ea(H.aU(r,z),b,u,d)},
e3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a1(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a1(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a1(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kO(m,b,l,d)},
kO:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n5:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
kJ:function(a){var z,y,x,w,v,u
z=H.t($.eh.$1(a))
y=$.c1[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.e9.$2(a,z))
if(z!=null){y=$.c1[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c4(x)
$.c1[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c3[z]=x
return x}if(v==="-"){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.el(a,x)
if(v==="*")throw H.c(P.dG(z))
if(init.leafTags[z]===true){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.el(a,x)},
el:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cC(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cC(a,!1,null,!!a.$isw)},
kN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cC(z,c,null,null)},
kE:function(){if(!0===$.cB)return
$.cB=!0
H.kF()},
kF:function(){var z,y,x,w,v,u,t,s
$.c1=Object.create(null)
$.c3=Object.create(null)
H.kA()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.em.$1(v)
if(u!=null){t=H.kN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kA:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aS(C.O,H.aS(C.T,H.aS(C.B,H.aS(C.B,H.aS(C.S,H.aS(C.P,H.aS(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eh=new H.kB(v)
$.e9=new H.kC(u)
$.em=new H.kD(t)},
aS:function(a,b){return a(b)||b},
kS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i0:{"^":"b;a,b,c,d,e,f,r,0x",p:{
i1:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cj(z)
y=z[0]
x=z[1]
return new H.i0(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
it:{"^":"b;a,b,c,d,e,f",
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
ad:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.m([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hL:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dt:function(a,b){return new H.hL(a,b==null?null:b.method)}}},
hh:{"^":"O;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hh(a,y,z?null:b.receiver)}}},
iy:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kU:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dY:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isR:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.b4(this).trim()+"'"},
gcb:function(){return this},
$isbo:1,
gcb:function(){return this}},
dz:{"^":"n;"},
ie:{"^":"dz;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aI(z)+"'"}},
cd:{"^":"dz;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b3(this.a)
else y=typeof z!=="object"?J.am(z):H.b3(z)
return(y^H.b3(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
p:{
ce:function(a){return a.a},
d_:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iu:{"^":"O;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.iu("TypeError: "+P.bM(a)+": type '"+H.e7(a)+"' is not a subtype of type '"+b+"'")}}},
fz:{"^":"O;a",
k:function(a){return this.a},
p:{
d0:function(a,b){return new H.fz("CastError: "+P.bM(a)+": type '"+H.e7(a)+"' is not a subtype of type '"+b+"'")}}},
i4:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i5:function(a){return new H.i4(a)}}},
dE:{"^":"b;a,0b,0c,0d",
gab:function(){var z=this.b
if(z==null){z=H.bD(this.a)
this.b=z}return z},
k:function(a){return this.gab()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gab())
this.d=z}return z},
C:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gab()===b.gab()}},
di:{"^":"dm;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gG:function(a){return new H.as(this,[H.o(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cS(z,b)}else{y=this.dJ(b)
return y}},
dJ:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.as(z,J.am(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a8(w,b)
x=y==null?null:y.b
return x}else return this.dK(b)},
dK:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.as(z,J.am(a)&0x3ffffff)
x=this.aB(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.au()
this.b=z}this.b5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.au()
this.c=y}this.b5(y,b,c)}else{x=this.d
if(x==null){x=this.au()
this.d=x}w=J.am(b)&0x3ffffff
v=this.as(x,w)
if(v==null)this.aw(x,w,[this.al(b,c)])
else{u=this.aB(v,b)
if(u>=0)v[u].b=c
else v.push(this.al(b,c))}}},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aK(this))
z=z.c}},
b5:function(a,b,c){var z
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
z=this.a8(a,b)
if(z==null)this.aw(a,b,this.al(b,c))
else z.b=c},
b7:function(){this.r=this.r+1&67108863},
al:function(a,b){var z,y
z=new H.hm(H.x(a,H.o(this,0)),H.x(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b7()
return z},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aJ(a[y].a,b))return y
return-1},
k:function(a){return P.dn(this)},
a8:function(a,b){return a[b]},
as:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cT:function(a,b){delete a[b]},
cS:function(a,b){return this.a8(a,b)!=null},
au:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cT(z,"<non-identifier-key>")
return z},
$isdj:1},
hm:{"^":"b;a,b,0c,0d"},
as:{"^":"d7;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hn(z,z.r,this.$ti)
y.c=z.e
return y}},
hn:{"^":"b;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(z.a)
this.c=this.c.c
return!0}}},
$isaZ:1},
kB:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
kC:{"^":"n:14;a",
$2:function(a,b){return this.a(a,b)}},
kD:{"^":"n:15;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
kr:function(a){return J.he(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bY:function(a){var z,y
if(!!J.A(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bb(b,a))},
hG:{"^":"h;",$isiv:1,"%":"DataView;ArrayBufferView;co|dS|dT|dr|dU|dV|av"},
co:{"^":"hG;",
gj:function(a){return a.length},
$isu:1,
$asu:I.bc,
$isw:1,
$asw:I.bc},
dr:{"^":"dT;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ec(c)
H.ae(b,a,a.length)
a[b]=c},
$asbN:function(){return[P.aj]},
$asp:function(){return[P.aj]},
$isj:1,
$asj:function(){return[P.aj]},
$isa:1,
$asa:function(){return[P.aj]},
"%":"Float64Array"},
av:{"^":"dV;",
i:function(a,b,c){H.M(c)
H.ae(b,a,a.length)
a[b]=c},
$asbN:function(){return[P.E]},
$asp:function(){return[P.E]},
$isj:1,
$asj:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
hF:{"^":"dr;",$isag:1,"%":"Float32Array"},
lR:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lS:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ishb:1,
"%":"Int32Array"},
lT:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lU:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hH:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ismE:1,
"%":"Uint32Array"},
lV:{"^":"av;",
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lW:{"^":"av;",
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dS:{"^":"co+p;"},
dT:{"^":"dS+bN;"},
dU:{"^":"co+p;"},
dV:{"^":"dU+bN;"}}],["","",,P,{"^":"",
iH:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.km()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aT(new P.iJ(z),1)).observe(y,{childList:true})
return new P.iI(z,y,x)}else if(self.setImmediate!=null)return P.kn()
return P.ko()},
mP:[function(a){self.scheduleImmediate(H.aT(new P.iK(H.i(a,{func:1,ret:-1})),0))},"$1","km",4,0,4],
mQ:[function(a){self.setImmediate(H.aT(new P.iL(H.i(a,{func:1,ret:-1})),0))},"$1","kn",4,0,4],
mR:[function(a){H.i(a,{func:1,ret:-1})
P.jW(0,a)},"$1","ko",4,0,4],
h1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.v(a,"$isj",[[P.Y,d]],"$asj")
s=[[P.a,d]]
y=new P.Q(0,$.B,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.h3(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.N)(r),++p){w=r[p]
v=o
w.aE(new P.h2(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.Q(0,$.B,s)
r.ba(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.m(r,[d])}catch(n){u=H.Z(n)
t=H.aF(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.cp()
r=$.B
if(r!==C.d)r.toString
s=new P.Q(0,r,s)
s.cP(m,t)
return s}else{z.c=u
z.d=t}}return y},
ki:function(a,b){if(H.bz(a,{func:1,args:[P.b,P.R]}))return H.i(a,{func:1,ret:null,args:[P.b,P.R]})
if(H.bz(a,{func:1,args:[P.b]}))return H.i(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kh:function(){var z,y
for(;z=$.aQ,z!=null;){$.b9=null
y=z.b
$.aQ=y
if(y==null)$.b8=null
z.a.$0()}},
n2:[function(){$.cv=!0
try{P.kh()}finally{$.b9=null
$.cv=!1
if($.aQ!=null)$.cG().$1(P.eb())}},"$0","eb",0,0,1],
e6:function(a){var z=new P.dJ(H.i(a,{func:1,ret:-1}))
if($.aQ==null){$.b8=z
$.aQ=z
if(!$.cv)$.cG().$1(P.eb())}else{$.b8.b=z
$.b8=z}},
kl:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aQ
if(z==null){P.e6(a)
$.b9=$.b8
return}y=new P.dJ(a)
x=$.b9
if(x==null){y.b=z
$.b9=y
$.aQ=y}else{y.b=x.b
x.b=y
$.b9=y
if(y.b==null)$.b8=y}},
kQ:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.B
if(C.d===y){P.aR(null,null,C.d,a)
return}y.toString
P.aR(null,null,y,H.i(y.br(a),z))},
kd:function(a,b,c){a.dq(0)
b.a7(c)},
c_:function(a,b,c,d,e){var z={}
z.a=d
P.kl(new P.kj(z,e))},
e4:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.B
if(y===c)return d.$0()
$.B=c
z=y
try{y=d.$0()
return y}finally{$.B=z}},
e5:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.B
if(y===c)return d.$1(e)
$.B=c
z=y
try{y=d.$1(e)
return y}finally{$.B=z}},
kk:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.B
if(y===c)return d.$2(e,f)
$.B=c
z=y
try{y=d.$2(e,f)
return y}finally{$.B=z}},
aR:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.br(d):c.dk(d,-1)
P.e6(d)},
iJ:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iI:{"^":"n:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iK:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iL:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jV:{"^":"b;a,0b,c",
cM:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aT(new P.jX(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
p:{
jW:function(a,b){var z=new P.jV(!0,0)
z.cM(a,b)
return z}}},
jX:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Y:{"^":"b;$ti"},
h3:{"^":"n:17;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isR")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.O(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.O(z.c,z.d)}},
h2:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.x(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bc(z.a)}else if(z.b===0&&!this.e)this.c.O(z.c,z.d)},
$S:function(){return{func:1,ret:P.y,args:[this.f]}}},
dM:{"^":"b;$ti"},
iG:{"^":"dM;a,$ti",
dt:function(a,b){var z
H.bd(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bT("Future already completed"))
z.ba(b)}},
jQ:{"^":"dM;a,$ti"},
aO:{"^":"b;0a,b,c,d,e,$ti",
dL:function(a){if(this.c!==6)return!0
return this.b.b.aC(H.i(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
dI:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bz(z,{func:1,args:[P.b,P.R]}))return H.bd(w.dS(z,a.a,a.b,null,y,P.R),x)
else return H.bd(w.aC(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
Q:{"^":"b;bk:a<,b,0d7:c<,$ti",
aE:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.B
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ki(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Q(0,$.B,[c])
w=b==null?1:3
this.b9(new P.aO(x,w,a,b,[z,c]))
return x},
a1:function(a,b){return this.aE(a,null,b)},
b9:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.f(this.c,"$isQ")
z=y.a
if(z<4){y.b9(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aR(null,null,z,H.i(new P.j1(this,a),{func:1,ret:-1}))}},
bh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isQ")
y=u.a
if(y<4){u.bh(a)
return}this.a=y
this.c=u.c}z.a=this.aa(a)
y=this.b
y.toString
P.aR(null,null,y,H.i(new P.j8(z,this),{func:1,ret:-1}))}},
a9:function(){var z=H.f(this.c,"$isaO")
this.c=null
return this.aa(z)},
aa:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a7:function(a){var z,y,x
z=H.o(this,0)
H.bd(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isY",y,"$asY"))if(H.ai(a,"$isQ",y,null))P.bW(a,this)
else P.dN(a,this)
else{x=this.a9()
H.x(a,z)
this.a=4
this.c=a
P.aP(this,x)}},
bc:function(a){var z
H.x(a,H.o(this,0))
z=this.a9()
this.a=4
this.c=a
P.aP(this,z)},
O:function(a,b){var z
H.f(b,"$isR")
z=this.a9()
this.a=8
this.c=new P.a_(a,b)
P.aP(this,z)},
ba:function(a){var z
H.bd(a,{futureOr:1,type:H.o(this,0)})
if(H.ai(a,"$isY",this.$ti,"$asY")){this.cQ(a)
return}this.a=1
z=this.b
z.toString
P.aR(null,null,z,H.i(new P.j3(this,a),{func:1,ret:-1}))},
cQ:function(a){var z=this.$ti
H.v(a,"$isY",z,"$asY")
if(H.ai(a,"$isQ",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aR(null,null,z,H.i(new P.j7(this,a),{func:1,ret:-1}))}else P.bW(a,this)
return}P.dN(a,this)},
cP:function(a,b){var z
H.f(b,"$isR")
this.a=1
z=this.b
z.toString
P.aR(null,null,z,H.i(new P.j2(this,a,b),{func:1,ret:-1}))},
$isY:1,
p:{
dN:function(a,b){var z,y,x
b.a=1
try{a.aE(new P.j4(b),new P.j5(b),null)}catch(x){z=H.Z(x)
y=H.aF(x)
P.kQ(new P.j6(b,z,y))}},
bW:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isQ")
if(z>=4){y=b.a9()
b.a=a.a
b.c=a.c
P.aP(b,y)}else{y=H.f(b.c,"$isaO")
b.a=2
b.c=a
a.bh(y)}},
aP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.c_(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aP(z.a,b)}y=z.a
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
if(p){H.f(r,"$isa_")
y=y.b
u=r.a
t=r.b
y.toString
P.c_(null,null,y,u,t)
return}o=$.B
if(o!=q)$.B=q
else o=null
y=b.c
if(y===8)new P.jb(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ja(x,b,r).$0()}else if((y&2)!==0)new P.j9(z,x,b).$0()
if(o!=null)$.B=o
y=x.b
if(!!J.A(y).$isY){if(y.a>=4){n=H.f(t.c,"$isaO")
t.c=null
b=t.aa(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bW(y,t)
return}}m=b.b
n=H.f(m.c,"$isaO")
m.c=null
b=m.aa(n)
y=x.a
u=x.b
if(!y){H.x(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
j1:{"^":"n:0;a,b",
$0:function(){P.aP(this.a,this.b)}},
j8:{"^":"n:0;a,b",
$0:function(){P.aP(this.b,this.a.a)}},
j4:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.a7(a)}},
j5:{"^":"n:18;a",
$2:function(a,b){H.f(b,"$isR")
this.a.O(a,b)},
$1:function(a){return this.$2(a,null)}},
j6:{"^":"n:0;a,b,c",
$0:function(){this.a.O(this.b,this.c)}},
j3:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bc(H.x(this.b,H.o(z,0)))}},
j7:{"^":"n:0;a,b",
$0:function(){P.bW(this.b,this.a)}},
j2:{"^":"n:0;a,b,c",
$0:function(){this.a.O(this.b,this.c)}},
jb:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bU(H.i(w.d,{func:1}),null)}catch(v){y=H.Z(v)
x=H.aF(v)
if(this.d){w=H.f(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.A(z).$isY){if(z instanceof P.Q&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.f(z.gd7(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a1(new P.jc(t),null)
w.a=!1}}},
jc:{"^":"n:19;a",
$1:function(a){return this.a}},
ja:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.x(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aC(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Z(t)
y=H.aF(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
j9:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa_")
w=this.c
if(w.dL(z)&&w.e!=null){v=this.b
v.b=w.dI(z)
v.a=!1}}catch(u){y=H.Z(u)
x=H.aF(u)
w=H.f(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ij:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.B,[P.E])
z.a=0
x=H.o(this,0)
w=H.i(new P.io(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.ip(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y},
gdG:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.B,this.$ti)
z.a=null
x=H.o(this,0)
w=H.i(new P.il(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.im(y),{func:1,ret:-1})
z.a=W.ah(this.a,this.b,w,!1,x)
return y}},
io:{"^":"n;a,b",
$1:function(a){H.x(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.o(this.b,0)]}}},
ip:{"^":"n:0;a,b",
$0:function(){this.b.a7(this.a.a)}},
il:{"^":"n;a,b,c",
$1:function(a){H.x(a,H.o(this.b,0))
P.kd(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.y,args:[H.o(this.b,0)]}}},
im:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.df()
throw H.c(x)}catch(w){z=H.Z(w)
y=H.aF(w)
$.B.toString
this.a.O(z,y)}}},
ik:{"^":"b;"},
a_:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
k2:{"^":"b;",$ismN:1},
kj:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cp()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jz:{"^":"k2;",
dT:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.B){a.$0()
return}P.e4(null,null,this,a,-1)}catch(x){z=H.Z(x)
y=H.aF(x)
P.c_(null,null,this,z,H.f(y,"$isR"))}},
dU:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.B){a.$1(b)
return}P.e5(null,null,this,a,b,-1,c)}catch(x){z=H.Z(x)
y=H.aF(x)
P.c_(null,null,this,z,H.f(y,"$isR"))}},
dk:function(a,b){return new P.jB(this,H.i(a,{func:1,ret:b}),b)},
br:function(a){return new P.jA(this,H.i(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.jC(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bU:function(a,b){H.i(a,{func:1,ret:b})
if($.B===C.d)return a.$0()
return P.e4(null,null,this,a,b)},
aC:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.B===C.d)return a.$1(b)
return P.e5(null,null,this,a,b,c,d)},
dS:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.B===C.d)return a.$2(b,c)
return P.kk(null,null,this,a,b,c,d,e,f)}},
jB:{"^":"n;a,b,c",
$0:function(){return this.a.bU(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jA:{"^":"n:1;a,b",
$0:function(){return this.a.dT(this.b)}},
jC:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dU(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dk:function(a,b,c){H.bg(a)
return H.v(H.ks(a,new H.di(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
ab:function(a,b){return new H.di(0,0,[a,b])},
a4:function(a,b,c,d){return new P.jk(0,0,[d])},
hc:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bh()
C.a.l(y,a)
try{P.kg(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.dy(b,H.kI(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cr(b)
y=$.bh()
C.a.l(y,a)
try{x=z
x.a=P.dy(x.gU(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.bh(),z<y.length;++z)if(a===y[z])return!0
return!1},
kg:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cm:function(a,b){var z,y,x
z=P.a4(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.x(a[x],b))
return z},
dn:function(a){var z,y,x
z={}
if(P.cw(a))return"{...}"
y=new P.cr("")
try{C.a.l($.bh(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.f5(a,new P.hs(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bh()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
jk:{"^":"je;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dR(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isby")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isby")!=null}else return this.cR(b)},
cR:function(a){var z=this.d
if(z==null)return!1
return this.ar(this.bf(z,a),a)>=0},
l:function(a,b){var z,y
H.x(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.b8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.b8(y,b)}else return this.cN(0,b)},
cN:function(a,b){var z,y,x
H.x(b,H.o(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.bd(b)
x=z[y]
if(x==null)z[y]=[this.av(b)]
else{if(this.ar(x,b)>=0)return!1
x.push(this.av(b))}return!0},
bT:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bf(z,b)
x=this.ar(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.at()}},
b8:function(a,b){H.x(b,H.o(this,0))
if(H.f(a[b],"$isby")!=null)return!1
a[b]=this.av(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isby")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
at:function(){this.r=this.r+1&67108863},
av:function(a){var z,y
z=new P.by(H.x(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.at()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.at()},
bd:function(a){return J.am(a)&0x3ffffff},
bf:function(a,b){return a[this.bd(b)]},
ar:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aJ(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
by:{"^":"b;a,0b,0c"},
dR:{"^":"b;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.x(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isaZ:1,
p:{
jl:function(a,b,c){var z=new P.dR(a,b,[c])
z.c=a.e
return z}}},
je:{"^":"i6;"},
ho:{"^":"jm;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dl(a,this.gj(a),0,[H.bf(this,a,"p",0)])},
q:function(a,b){return this.h(a,b)},
dH:function(a,b,c,d){var z,y,x
H.x(b,d)
H.i(c,{func:1,ret:d,args:[d,H.bf(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aK(a))}return y},
k:function(a){return P.ci(a,"[","]")}},
dm:{"^":"U;"},
hs:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
U:{"^":"b;$ti",
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.bf(this,a,"U",0),H.bf(this,a,"U",1)]})
for(z=J.bH(this.gG(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aV(this.gG(a))},
k:function(a){return P.dn(a)},
$isJ:1},
i7:{"^":"b;$ti",
F:function(a,b){var z
for(z=J.bH(H.v(b,"$isj",this.$ti,"$asj"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ci(this,"{","}")},
$isj:1,
$ismd:1},
i6:{"^":"i7;"},
jm:{"^":"b+p;"}}],["","",,P,{"^":"",
fX:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b4(a)+"'"},
bM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bl(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fX(a)},
db:function(a){return new P.iZ(a)},
aH:function(a){H.c5(H.e(a))},
S:{"^":"b;"},
"+bool":0,
bL:{"^":"b;a,b",
C:function(a,b){if(b==null)return!1
return b instanceof P.bL&&this.a===b.a&&!0},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isbL").a)},
gv:function(a){var z=this.a
return(z^C.e.bj(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fL(H.hY(this))
y=P.bn(H.hW(this))
x=P.bn(H.hS(this))
w=P.bn(H.hT(this))
v=P.bn(H.hV(this))
u=P.bn(H.hX(this))
t=P.fM(H.hU(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isX:1,
$asX:function(){return[P.bL]},
p:{
fL:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bn:function(a){if(a>=10)return""+a
return"0"+a}}},
aj:{"^":"F;"},
"+double":0,
aX:{"^":"b;a",
R:function(a,b){return C.e.R(this.a,H.f(b,"$isaX").a)},
C:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isaX").a)},
k:function(a){var z,y,x,w,v
z=new P.fU()
y=this.a
if(y<0)return"-"+new P.aX(0-y).k(0)
x=z.$1(C.e.V(y,6e7)%60)
w=z.$1(C.e.V(y,1e6)%60)
v=new P.fT().$1(y%1e6)
return""+C.e.V(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isX:1,
$asX:function(){return[P.aX]},
p:{
fS:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fT:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fU:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
cp:{"^":"O;",
k:function(a){return"Throw of null."}},
an:{"^":"O;a,b,c,d",
gap:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gao:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gap()+y+x
if(!this.a)return w
v=this.gao()
u=P.bM(this.b)
return w+v+": "+u},
p:{
cW:function(a){return new P.an(!1,null,null,a)},
cX:function(a,b,c){return new P.an(!0,a,b,c)}}},
du:{"^":"an;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bR:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bQ:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
ha:{"^":"an;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
G:function(a,b,c,d,e){var z=H.M(e==null?J.aV(b):e)
return new P.ha(b,z,!0,a,c,"Index out of range")}}},
iz:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.iz(a)}}},
ix:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dG:function(a){return new P.ix(a)}}},
cq:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bT:function(a){return new P.cq(a)}}},
fF:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bM(z)+"."},
p:{
aK:function(a){return new P.fF(a)}}},
dx:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fK:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iZ:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bo:{"^":"b;"},
E:{"^":"F;"},
"+int":0,
j:{"^":"b;$ti",
aF:["co",function(a,b){var z=H.cA(this,"j",0)
return new H.dH(this,H.i(b,{func:1,ret:P.S,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a3(P.bQ(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.G(b,this,"index",null,y))},
k:function(a){return P.hc(this,"(",")")}},
aZ:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
y:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"b;",$isX:1,
$asX:function(){return[P.F]}},
"+num":0,
b:{"^":";",
C:function(a,b){return this===b},
gv:function(a){return H.b3(this)},
k:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.k(this)}},
R:{"^":"b;"},
d:{"^":"b;",$isX:1,
$asX:function(){return[P.d]},
$ishN:1},
"+String":0,
cr:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dy:function(a,b,c){var z=J.bH(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fV:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.r
z=new H.dH(new W.a7(y),H.i(new W.fW(),{func:1,ret:P.S,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a3(H.df())
w=x.gA(x)
if(x.t())H.a3(H.hd())
return H.f(w,"$isT")},
da:function(a){H.f(a,"$isL")
return"wheel"},
aY:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f8(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
iW:function(a,b){return document.createElement(a)},
bX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dQ:function(a,b,c,d){var z,y
z=W.bX(W.bX(W.bX(W.bX(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e2:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iQ(a)
if(!!J.A(z).$isL)return z
return}else return H.f(a,"$isL")},
e8:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.B
if(z===C.d)return a
return z.dl(a,b)},
K:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kV:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fr:{"^":"K;",
k:function(a){return String(a)},
$isfr:1,
"%":"HTMLAnchorElement"},
kW:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cY:{"^":"K;",$iscY:1,"%":"HTMLBaseElement"},
fw:{"^":"h;","%":";Blob"},
bJ:{"^":"K;",$isbJ:1,"%":"HTMLBodyElement"},
bm:{"^":"K;0n:height=,0m:width=",
aG:function(a,b,c){if(c!=null)return this.cW(a,b,P.kp(c,null))
return this.cX(a,b)},
cc:function(a,b){return this.aG(a,b,null)},
cW:function(a,b,c){return a.getContext(b,c)},
cX:function(a,b){return a.getContext(b)},
$isbm:1,
"%":"HTMLCanvasElement"},
fy:{"^":"h;",
ac:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cf:{"^":"h;",
bA:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dF:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ag:function(a){return P.a2(a.getContextAttributes())},
$iscf:1,
"%":"CanvasRenderingContext2D"},
l0:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fG:{"^":"cg;",$isfG:1,"%":"CSSNumericValue|CSSUnitValue"},
l1:{"^":"fJ;0j:length=","%":"CSSPerspective"},
ao:{"^":"h;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fH:{"^":"iO;0j:length=",
aL:function(a,b){var z=this.cY(a,this.am(a,b))
return z==null?"":z},
am:function(a,b){var z,y
z=$.eq()
y=z[b]
if(typeof y==="string")return y
y=this.dc(a,b)
z[b]=y
return y},
dc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fN()+b
if(z in a)return z
return b},
cY:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fI:{"^":"b;",
gn:function(a){return this.aL(a,"height")},
gm:function(a){return this.aL(a,"width")}},
cg:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fJ:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l3:{"^":"cg;0j:length=","%":"CSSTransformValue"},
l4:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
l6:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fO:{"^":"K;","%":"HTMLDivElement"},
fP:{"^":"r;",
df:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
dO:function(a,b){return a.querySelector(b)},
gbO:function(a){return new W.bw(a,"mousedown",!1,[W.V])},
gbP:function(a){return new W.bw(a,"mousemove",!1,[W.V])},
gbQ:function(a){return new W.bw(a,"mouseup",!1,[W.V])},
gbR:function(a){return new W.bw(a,H.t(W.da(a)),!1,[W.aN])},
"%":"XMLDocument;Document"},
l7:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fQ:{"^":"h;",
dz:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l8:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c,"$isW",[P.F],"$asW")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.W,P.F]]},
$isw:1,
$asw:function(){return[[P.W,P.F]]},
$asp:function(){return[[P.W,P.F]]},
$isj:1,
$asj:function(){return[[P.W,P.F]]},
$isa:1,
$asa:function(){return[[P.W,P.F]]},
$asq:function(){return[[P.W,P.F]]},
"%":"ClientRectList|DOMRectList"},
fR:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
C:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isW",[P.F],"$asW"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isW:1,
$asW:function(){return[P.F]},
"%":";DOMRectReadOnly"},
l9:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isw:1,
$asw:function(){return[P.d]},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
la:{"^":"h;0j:length=","%":"DOMTokenList"},
T:{"^":"r;0dV:tagName=",
gdi:function(a){return new W.iV(a)},
k:function(a){return a.localName},
L:["aj",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d9
if(z==null){z=H.m([],[W.ac])
y=new W.ds(z)
C.a.l(z,W.dO(null))
C.a.l(z,W.dZ())
$.d9=y
d=y}else d=z
z=$.d8
if(z==null){z=new W.e1(d)
$.d8=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.L).dz(y,"")
$.af=y
$.ch=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.f(y,"$iscY")
y.href=z.baseURI
z=$.af.head;(z&&C.M).H(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbJ")}z=$.af
if(!!this.$isbJ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.p).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.ch;(z&&C.E).ce(z,x)
z=$.ch
w=(z&&C.E).dv(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cP(x)
c.aQ(w)
C.t.df(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dw",null,null,"ge3",5,5,null],
cg:function(a,b,c,d){a.textContent=null
this.H(a,this.L(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
X:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
gbO:function(a){return new W.bv(a,"mousedown",!1,[W.V])},
gbP:function(a){return new W.bv(a,"mousemove",!1,[W.V])},
gbQ:function(a){return new W.bv(a,"mouseup",!1,[W.V])},
gbR:function(a){return new W.bv(a,H.t(W.da(a)),!1,[W.aN])},
$isT:1,
"%":";Element"},
fW:{"^":"n:20;",
$1:function(a){return!!J.A(H.f(a,"$isr")).$isT}},
lc:{"^":"K;0n:height=,0m:width=","%":"HTMLEmbedElement"},
P:{"^":"h;",$isP:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
de:function(a,b,c,d){H.i(c,{func:1,args:[W.P]})
if(c!=null)this.cO(a,b,c,!1)},
cO:function(a,b,c,d){return a.addEventListener(b,H.aT(H.i(c,{func:1,args:[W.P]}),1),!1)},
d4:function(a,b,c,d){return a.removeEventListener(b,H.aT(H.i(c,{func:1,args:[W.P]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dW|dX|e_|e0"},
aq:{"^":"fw;",$isaq:1,"%":"File"},
lt:{"^":"j0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isw:1,
$asw:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"FileList"},
lu:{"^":"L;0j:length=","%":"FileWriter"},
lx:{"^":"K;0j:length=","%":"HTMLFormElement"},
ar:{"^":"h;",$isar:1,"%":"Gamepad"},
h6:{"^":"K;","%":"HTMLHeadElement"},
ly:{"^":"h;0j:length=","%":"History"},
lz:{"^":"jg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h7:{"^":"fP;","%":"HTMLDocument"},
lA:{"^":"K;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lD:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lE:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
aL:{"^":"K;0n:height=,0m:width=",$isaL:1,"%":"HTMLImageElement"},
lG:{"^":"K;0n:height=,0m:width=","%":"HTMLInputElement"},
b_:{"^":"dF;",$isb_:1,"%":"KeyboardEvent"},
hr:{"^":"h;",
k:function(a){return String(a)},
$ishr:1,
"%":"Location"},
hv:{"^":"K;","%":"HTMLAudioElement;HTMLMediaElement"},
lN:{"^":"h;0j:length=","%":"MediaList"},
lO:{"^":"jo;",
h:function(a,b){return P.a2(a.get(H.t(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.hx(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hx:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lP:{"^":"jp;",
h:function(a,b){return P.a2(a.get(H.t(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.hy(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hy:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
au:{"^":"h;",$isau:1,"%":"MimeType"},
lQ:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$asp:function(){return[W.au]},
$isj:1,
$asj:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"MimeTypeArray"},
V:{"^":"dF;",
gbN:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b2(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.A(W.e2(z)).$isT)throw H.c(P.z("offsetX is only supported on elements"))
y=H.f(W.e2(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.b2(u,v,w),"$isb2",w,"$asb2")
if(typeof z!=="number")return z.aT()
if(typeof x!=="number")return x.aT()
return new P.b2(C.u.bX(z-u),C.u.bX(x-v),w)}},
$isV:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"ho;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bT("No elements"))
if(y>1)throw H.c(P.bT("More than one element"))
return z.firstChild},
F:function(a,b){var z,y,x,w,v
H.v(b,"$isj",[W.r],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.H(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.l(y,b)
J.eO(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.dc(z,z.length,-1,[H.bf(C.Z,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asp:function(){return[W.r]},
$asj:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"L;0dN:previousSibling=",
dP:function(a){var z=a.parentNode
if(z!=null)J.bF(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cn(a):z},
H:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d5:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hI:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lZ:{"^":"K;0n:height=,0m:width=","%":"HTMLObjectElement"},
m0:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
m1:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"Plugin"},
m3:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isj:1,
$asj:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"PluginArray"},
m5:{"^":"V;0n:height=,0m:width=","%":"PointerEvent"},
i_:{"^":"h;",
dv:function(a,b){return a.createContextualFragment(b)},
ce:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ma:{"^":"jD;",
h:function(a,b){return P.a2(a.get(H.t(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.i3(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i3:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mb:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mc:{"^":"K;0j:length=","%":"HTMLSelectElement"},
ax:{"^":"L;",$isax:1,"%":"SourceBuffer"},
me:{"^":"dX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isj:1,
$asj:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SourceBufferList"},
ay:{"^":"h;",$isay:1,"%":"SpeechGrammar"},
mf:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$isw:1,
$asw:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isj:1,
$asj:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"SpeechGrammarList"},
az:{"^":"h;0j:length=",$isaz:1,"%":"SpeechRecognitionResult"},
mi:{"^":"jM;",
h:function(a,b){return this.bg(a,H.t(b))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d_(a,z)
if(y==null)return
b.$2(y,this.bg(a,y))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.ii(z))
return z},
gj:function(a){return a.length},
bg:function(a,b){return a.getItem(b)},
d_:function(a,b){return a.key(b)},
$asU:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
ii:{"^":"n:21;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aA:{"^":"h;",$isaA:1,"%":"CSSStyleSheet|StyleSheet"},
iq:{"^":"K;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=W.fV("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).F(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
ml:{"^":"K;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga4(z)
x.toString
z=new W.a7(x)
w=z.ga4(z)
y.toString
w.toString
new W.a7(y).F(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mm:{"^":"K;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga4(z)
y.toString
x.toString
new W.a7(y).F(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"K;",$isdA:1,"%":"HTMLTemplateElement"},
mn:{"^":"h;0m:width=","%":"TextMetrics"},
aB:{"^":"L;",$isaB:1,"%":"TextTrack"},
aC:{"^":"L;",$isaC:1,"%":"TextTrackCue|VTTCue"},
mo:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaC")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aC]},
$isw:1,
$asw:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isj:1,
$asj:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"TextTrackCueList"},
mp:{"^":"e0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaB")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aB]},
$isw:1,
$asw:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isj:1,
$asj:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TextTrackList"},
mq:{"^":"h;0j:length=","%":"TimeRanges"},
aD:{"^":"h;",$isaD:1,"%":"Touch"},
mr:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaD")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aD]},
$isw:1,
$asw:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isj:1,
$asj:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"TouchList"},
ms:{"^":"h;0j:length=","%":"TrackDefaultList"},
dF:{"^":"P;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mG:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mJ:{"^":"hv;0n:height=,0m:width=","%":"HTMLVideoElement"},
mK:{"^":"L;0j:length=","%":"VideoTrackList"},
mL:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
mM:{"^":"h;0m:width=","%":"VTTRegion"},
aN:{"^":"V;",
gdB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
iD:{"^":"L;",
gdh:function(a){var z,y,x
z=P.F
y=new P.Q(0,$.B,[z])
x=H.i(new W.iE(new P.jQ(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cV(a)
this.d6(a,W.e8(x,z))
return y},
d6:function(a,b){return a.requestAnimationFrame(H.aT(H.i(b,{func:1,ret:-1,args:[P.F]}),1))},
cV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iE:{"^":"n:22;a",
$1:function(a){var z=this.a
a=H.bd(H.cD(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a3(P.bT("Future already completed"))
z.a7(a)}},
dK:{"^":"r;",$isdK:1,"%":"Attr"},
mS:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isw:1,
$asw:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isj:1,
$asj:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"CSSRuleList"},
mT:{"^":"fR;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
C:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isW",[P.F],"$asW"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mU:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isw:1,
$asw:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"GamepadList"},
mZ:{"^":"k8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n_:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$isw:1,
$asw:function(){return[W.az]},
$asp:function(){return[W.az]},
$isj:1,
$asj:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"SpeechRecognitionResultList"},
n0:{"^":"kc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aA]},
$isw:1,
$asw:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isj:1,
$asj:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"StyleSheetList"},
iM:{"^":"dm;cU:a<",
D:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gG(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.X(x,u))}},
gG:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.f(z[w],"$isdK")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asU:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iV:{"^":"iM;a",
h:function(a,b){return J.cb(this.a,H.t(b))},
gj:function(a){return this.gG(this).length}},
bw:{"^":"ij;a,b,c,$ti"},
bv:{"^":"bw;a,b,c,$ti"},
iX:{"^":"ik;a,b,c,d,e,$ti",
sd0:function(a){this.d=H.i(a,{func:1,args:[W.P]})},
dq:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.P]})
if(x)J.eN(z,this.c,y,!1)}this.b=null
this.sd0(null)
return},
p:{
ah:function(a,b,c,d,e){var z=W.e8(new W.iY(c),W.P)
if(z!=null&&!0)J.eP(a,b,z,!1)
return new W.iX(0,a,b,z,!1,[e])}}},
iY:{"^":"n:23;a",
$1:function(a){return this.a.$1(H.f(a,"$isP"))}},
bx:{"^":"b;a",
cK:function(a){var z,y
z=$.cH()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.ky())
for(y=0;y<12;++y)z.i(0,C.w[y],W.kz())}},
W:function(a){return $.eG().u(0,W.aY(a))},
P:function(a,b,c){var z,y,x
z=W.aY(a)
y=$.cH()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c0(x.$4(a,b,c,this))},
$isac:1,
p:{
dO:function(a){var z,y
z=document.createElement("a")
y=new W.jE(z,window.location)
y=new W.bx(y)
y.cK(a)
return y},
mX:[function(a,b,c,d){H.f(a,"$isT")
H.t(b)
H.t(c)
H.f(d,"$isbx")
return!0},"$4","ky",16,0,13],
mY:[function(a,b,c,d){var z,y,x
H.f(a,"$isT")
H.t(b)
H.t(c)
z=H.f(d,"$isbx").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kz",16,0,13]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dc(a,this.gj(a),-1,[H.bf(this,a,"q",0)])}},
ds:{"^":"b;a",
W:function(a){return C.a.bo(this.a,new W.hK(a))},
P:function(a,b,c){return C.a.bo(this.a,new W.hJ(a,b,c))},
$isac:1},
hK:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isac").W(this.a)}},
hJ:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isac").P(this.a,this.b,this.c)}},
jF:{"^":"b;",
cL:function(a,b,c,d){var z,y,x
this.a.F(0,c)
z=b.aF(0,new W.jG())
y=b.aF(0,new W.jH())
this.b.F(0,z)
x=this.c
x.F(0,C.X)
x.F(0,y)},
W:function(a){return this.a.u(0,W.aY(a))},
P:["cq",function(a,b,c){var z,y
z=W.aY(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dg(c)
else if(y.u(0,"*::"+b))return this.d.dg(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isac:1},
jG:{"^":"n:10;",
$1:function(a){return!C.a.u(C.w,H.t(a))}},
jH:{"^":"n:10;",
$1:function(a){return C.a.u(C.w,H.t(a))}},
jR:{"^":"jF;e,a,b,c,d",
P:function(a,b,c){if(this.cq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dZ:function(){var z,y,x,w,v
z=P.d
y=P.cm(C.v,z)
x=H.o(C.v,0)
w=H.i(new W.jS(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jR(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cL(null,new H.ht(C.v,w,[x,z]),v,null)
return y}}},
jS:{"^":"n:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jP:{"^":"b;",
W:function(a){var z=J.A(a)
if(!!z.$isdw)return!1
z=!!z.$isH
if(z&&W.aY(a)==="foreignObject")return!1
if(z)return!0
return!1},
P:function(a,b,c){if(b==="is"||C.i.cj(b,"on"))return!1
return this.W(a)},
$isac:1},
dc:{"^":"b;a,b,c,0d,$ti",
sbe:function(a){this.d=H.x(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbe(J.bi(this.a,z))
this.c=z
return!0}this.sbe(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaZ:1},
iP:{"^":"b;a",$isL:1,$isdI:1,p:{
iQ:function(a){if(a===window)return H.f(a,"$isdI")
else return new W.iP(a)}}},
ac:{"^":"b;"},
jE:{"^":"b;a,b",$ismF:1},
e1:{"^":"b;a",
aQ:function(a){new W.k1(this).$2(a,null)},
Z:function(a,b){if(b==null)J.cP(a)
else J.bF(b,a)},
d9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f6(a)
x=J.cb(y.gcU(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.bl(a)}catch(t){H.Z(t)}try{u=W.aY(a)
this.d8(H.f(a,"$isT"),b,z,v,u,H.f(y,"$isJ"),H.t(x))}catch(t){if(H.Z(t) instanceof P.an)throw t
else{this.Z(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d8:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Z(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.Z(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.P(a,"is",g)){this.Z(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.m(z.slice(0),[H.o(z,0)])
for(x=f.gG(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.P(a,J.fi(v),w.X(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.X(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.X(z,v)
w.d2(z,v)}}if(!!J.A(a).$isdA)this.aQ(a.content)},
$islX:1},
k1:{"^":"n:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Z(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f7(z)}catch(w){H.Z(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bF(u,v)}else J.bF(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
iO:{"^":"h+fI;"},
iR:{"^":"h+p;"},
iS:{"^":"iR+q;"},
iT:{"^":"h+p;"},
iU:{"^":"iT+q;"},
j_:{"^":"h+p;"},
j0:{"^":"j_+q;"},
jf:{"^":"h+p;"},
jg:{"^":"jf+q;"},
jo:{"^":"h+U;"},
jp:{"^":"h+U;"},
jq:{"^":"h+p;"},
jr:{"^":"jq+q;"},
js:{"^":"h+p;"},
jt:{"^":"js+q;"},
jw:{"^":"h+p;"},
jx:{"^":"jw+q;"},
jD:{"^":"h+U;"},
dW:{"^":"L+p;"},
dX:{"^":"dW+q;"},
jI:{"^":"h+p;"},
jJ:{"^":"jI+q;"},
jM:{"^":"h+U;"},
jT:{"^":"h+p;"},
jU:{"^":"jT+q;"},
e_:{"^":"L+p;"},
e0:{"^":"e_+q;"},
jY:{"^":"h+p;"},
jZ:{"^":"jY+q;"},
k3:{"^":"h+p;"},
k4:{"^":"k3+q;"},
k5:{"^":"h+p;"},
k6:{"^":"k5+q;"},
k7:{"^":"h+p;"},
k8:{"^":"k7+q;"},
k9:{"^":"h+p;"},
ka:{"^":"k9+q;"},
kb:{"^":"h+p;"},
kc:{"^":"kb+q;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.ab(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
kp:function(a,b){var z={}
a.D(0,new P.kq(z))
return z},
d6:function(){var z=$.d5
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d5=z}return z},
fN:function(){var z,y
z=$.d2
if(z!=null)return z
y=$.d3
if(y==null){y=J.c7(window.navigator.userAgent,"Firefox",0)
$.d3=y}if(y)z="-moz-"
else{y=$.d4
if(y==null){y=!P.d6()&&J.c7(window.navigator.userAgent,"Trident/",0)
$.d4=y}if(y)z="-ms-"
else z=P.d6()?"-o-":"-webkit-"}$.d2=z
return z},
kq:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kR:function(a){return Math.sqrt(a)},
dP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jh:{"^":"b;",
dM:function(){return Math.random()}},
b2:{"^":"b;af:a>,a2:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.ai(b,"$isb2",[P.F],null)&&this.a==J.bI(b)&&this.b==b.ga2(b)},
gv:function(a){var z,y,x
z=J.am(this.a)
y=J.am(this.b)
y=P.dP(P.dP(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jy:{"^":"b;"},
W:{"^":"jy;$ti"}}],["","",,P,{"^":"",fs:{"^":"h;",$isfs:1,"%":"SVGAnimatedLength"},ld:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},le:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lf:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lg:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},lh:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},li:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lj:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lk:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},ll:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lm:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},ln:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lr:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},ls:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lv:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lw:{"^":"bp;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h5:{"^":"bp;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bp:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lF:{"^":"bp;0n:height=,0m:width=","%":"SVGImageElement"},b0:{"^":"h;",$isb0:1,"%":"SVGLength"},lL:{"^":"jj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb0")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b0]},
$isj:1,
$asj:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGLengthList"},lM:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b1:{"^":"h;",$isb1:1,"%":"SVGNumber"},lY:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb1")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b1]},
$isj:1,
$asj:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asq:function(){return[P.b1]},
"%":"SVGNumberList"},m2:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},m4:{"^":"h;0j:length=","%":"SVGPointList"},m6:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},m7:{"^":"h5;0n:height=,0m:width=","%":"SVGRectElement"},dw:{"^":"H;",$isdw:1,"%":"SVGScriptElement"},mj:{"^":"jO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.t(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},H:{"^":"T;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.ac])
C.a.l(z,W.dO(null))
C.a.l(z,W.dZ())
C.a.l(z,new W.jP())
c=new W.e1(new W.ds(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dw(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga4(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mk:{"^":"bp;0n:height=,0m:width=","%":"SVGSVGElement"},b5:{"^":"h;",$isb5:1,"%":"SVGTransform"},mt:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb5")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b5]},
$isj:1,
$asj:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asq:function(){return[P.b5]},
"%":"SVGTransformList"},mH:{"^":"bp;0n:height=,0m:width=","%":"SVGUseElement"},ji:{"^":"h+p;"},jj:{"^":"ji+q;"},ju:{"^":"h+p;"},jv:{"^":"ju+q;"},jN:{"^":"h+p;"},jO:{"^":"jN+q;"},k_:{"^":"h+p;"},k0:{"^":"k_+q;"}}],["","",,P,{"^":"",ag:{"^":"b;",$isj:1,
$asj:function(){return[P.aj]},
$isa:1,
$asa:function(){return[P.aj]},
$isiv:1}}],["","",,P,{"^":"",kX:{"^":"h;0j:length=","%":"AudioBuffer"},kY:{"^":"iN;",
h:function(a,b){return P.a2(a.get(H.t(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new P.fu(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fu:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kZ:{"^":"L;0j:length=","%":"AudioTrackList"},fv:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m_:{"^":"fv;0j:length=","%":"OfflineAudioContext"},iN:{"^":"h+U;"}}],["","",,P,{"^":"",fx:{"^":"h;",$isfx:1,"%":"WebGLBuffer"},hZ:{"^":"h;",$ishZ:1,"%":"WebGLProgram"},m8:{"^":"h;",
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindTexture(b,c)},
bt:function(a,b){return a.blendEquation(b)},
bu:function(a,b,c){return a.blendFunc(b,c)},
bv:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
ag:function(a){return P.a2(a.getContextAttributes())},
aH:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bM:function(a,b){return a.linkProgram(b)},
bS:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aD:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isaL)y=!0
else y=!1
if(y){this.ax(a,b,c,d,e,f,g)
return}if(!!z.$isbm)z=!0
else z=!1
if(z){this.ay(a,b,c,d,e,f,g)
return}throw H.c(P.cW("Incorrect number or type of arguments"))},
bV:function(a,b,c,d,e,f,g){return this.aD(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bW:function(a,b,c,d){return a.texParameteri(b,c,d)},
bY:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1fv(b,c)},
c_:function(a,b,c){return a.uniform1i(b,c)},
c0:function(a,b,c){return a.uniform1iv(b,c)},
c1:function(a,b,c){return a.uniform2fv(b,c)},
c2:function(a,b,c){return a.uniform3fv(b,c)},
c3:function(a,b,c){return a.uniform4fv(b,c)},
c4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c6:function(a,b){return a.useProgram(b)},
c7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c9:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m9:{"^":"h;",
dj:function(a,b){return a.beginTransformFeedback(b)},
dm:function(a,b){return a.bindVertexArray(b)},
dA:function(a){return a.createVertexArray()},
dC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dE:function(a){return a.endTransformFeedback()},
dY:function(a,b,c,d){this.dd(a,b,H.v(c,"$isa",[P.d],"$asa"),d)
return},
dd:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dZ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindTexture(b,c)},
bt:function(a,b){return a.blendEquation(b)},
bu:function(a,b,c){return a.blendFunc(b,c)},
bv:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
ag:function(a){return P.a2(a.getContextAttributes())},
aH:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bM:function(a,b){return a.linkProgram(b)},
bS:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aD:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isaL)y=!0
else y=!1
if(y){this.ax(a,b,c,d,e,f,g)
return}if(!!z.$isbm)z=!0
else z=!1
if(z){this.ay(a,b,c,d,e,f,g)
return}throw H.c(P.cW("Incorrect number or type of arguments"))},
bV:function(a,b,c,d,e,f,g){return this.aD(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bW:function(a,b,c,d){return a.texParameteri(b,c,d)},
bY:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1fv(b,c)},
c_:function(a,b,c){return a.uniform1i(b,c)},
c0:function(a,b,c){return a.uniform1iv(b,c)},
c1:function(a,b,c){return a.uniform2fv(b,c)},
c2:function(a,b,c){return a.uniform3fv(b,c)},
c3:function(a,b,c){return a.uniform4fv(b,c)},
c4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c6:function(a,b){return a.useProgram(b)},
c7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c9:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i8:{"^":"h;",$isi8:1,"%":"WebGLShader"},ir:{"^":"h;",$isir:1,"%":"WebGLTexture"},iw:{"^":"h;",$isiw:1,"%":"WebGLUniformLocation"},iB:{"^":"h;",$isiB:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mg:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.a2(this.cZ(a,b))},
i:function(a,b,c){H.f(c,"$isJ")
throw H.c(P.z("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cZ:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jK:{"^":"h+p;"},jL:{"^":"jK+q;"}}],["","",,G,{"^":"",
iF:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a0(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bB(a,b)
z.aR(a,y,c)
z.bx(a,y)
x=H.c0(z.aN(a,y,35713))
if(x!=null&&!x){w=z.aM(a,y)
P.aH("E:Compilation failed:")
P.aH("E:"+G.iF(c))
P.aH("E:Failure:")
P.aH(C.i.I("E:",w))
throw H.c(w)}return y},
dd:function(a,b){var z,y,x
H.v(a,"$isa",[T.D],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.l(a,y)
C.f.i(b,z+1,J.ca(a[y]))
z+=2
if(y>=a.length)return H.l(a,y)
x=J.cN(a[y])
if(z>=b.length)return H.l(b,z)
b[z]=x}return b},
h_:function(a,b){var z,y
H.v(a,"$isa",[T.a6],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.l(a,y)
C.f.i(b,z+1,J.ca(a[y]))}return b},
h0:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.b7],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.l(a,y)
C.f.i(b,z+1,J.ca(a[y]))
x=z+2
if(y>=a.length)return H.l(a,y)
w=J.cN(a[y])
v=b.length
if(x>=v)return H.l(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.l(a,y)
w=J.f9(a[y])
if(z>=v)return H.l(b,z)
b[z]=w}return b},
fZ:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.bi(a[y],0))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+1,J.bi(a[y],1))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+2,J.bi(a[y],2))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+3,J.bi(a[y],3))}return b},
jd:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.as(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.aj],u=[T.b7],t=[T.D],s=[T.a6];y.t();){r=y.d
if(!x.ad(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ed>0)H.c5("I: "+r)
continue}q=z.h(0,r)
switch($.a8().h(0,r).a){case"vec2":b.Y(r,G.h_(H.bE(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Y(r,G.dd(H.bE(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Y(r,G.h0(H.bE(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Y(r,new Float32Array(H.bY(H.bE(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Y(r,G.fZ(H.bE(q,"$isa",w,"$asa"),null),4)
break}}},
bP:{"^":"b;"},
bV:{"^":"bP;",
aZ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dE(H.kv(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.as(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a0(z,"\n")}},
fA:{"^":"b;0a,b",
bK:function(a,b,c){J.f3(this.a,b)
if(c>0)J.fo(this.a,b,c)},
c8:function(a,b,c,d,e,f,g,h){J.c6(this.a,34962,b)
J.fp(this.a,c,d,e,!1,g,h)}},
ap:{"^":"b;az:a>,b,c",p:{
I:function(a,b,c){return new G.ap(a,b,c)}}},
fY:{"^":"b;"},
h4:{"^":"b;a,b,c,d,e",
aX:function(a){switch($.a8().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.a6]))
break
case"vec3":this.e.i(0,a,H.m([],[T.D]))
break
case"vec4":this.e.i(0,a,H.m([],[T.b7]))
break
case"float":this.e.i(0,a,H.m([],[P.aj]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.E]]))
break}},
a6:function(a){var z,y,x,w
H.v(a,"$isa",[T.D],"$asa")
for(z=this.d,y=0;y<3;++y){x=a[y]
w=new T.D(new Float32Array(3))
w.E(x)
C.a.l(z,w)}},
cs:function(a,b){var z,y,x,w,v,u
z=[T.a6]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<3;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.a6(v))}},
ct:function(a,b){var z,y,x,w,v
z=[T.D]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<3;++x){w=b[x]
v=new T.D(new Float32Array(3))
v.E(w)
z.l(y,v)}},
cw:function(){var z,y,x,w,v,u,t
z=this.b
y=new Array(z.length*3)
y.fixed$length=Array
x=H.m(y,[P.E])
for(y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
C.a.i(x,w,u.a)
C.a.i(x,w+1,u.b)
C.a.i(x,w+2,u.c)
w+=3}for(z=this.c,v=0;!1;++v){if(v>=0)return H.l(z,v)
t=z[v]
C.a.i(x,w,t.gaz(t))
C.a.i(x,w+1,t.ge2(t))
C.a.i(x,w+2,t.gdn(t))
C.a.i(x,w+3,t.gaz(t))
C.a.i(x,w+4,t.gdn(t))
C.a.i(x,w+5,t.ge4(t))
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"],[P.d])
for(y=this.e,x=new H.as(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a8().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a0(z," ")}},
dC:{"^":"b;a,b,c"},
dB:{"^":"b;a,b,c"},
hu:{"^":"bV;d,a,b,c",p:{
dp:function(a,b){var z=P.ab(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!1)
z.i(0,"cBlendEquation",b)
z.i(0,"cStencilFunc",$.eu())
return new G.hu(z,a,!1,!0)}}},
hw:{"^":"bP;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saq:function(a){this.cx=H.v(a,"$isa",[P.E],"$asa")},
aW:function(a,b,c){var z,y
C.i.an(a,0)
H.f(b,"$isag")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c6(z.a,34962,y)
J.cL(z.a,34962,b,35048)},
cz:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Y:function(a,b,c){var z,y,x,w,v
z=J.cI(a,0)===105
if(z&&this.z===0)this.z=C.e.cr(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.aW(a,b,c)
w=$.a8().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bG(x.a,this.e)
x.bK(0,v,z?1:0)
x.c8(0,y.h(0,a),v,w.aY(),5126,!1,0,0)},
a6:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c8(y.a))
this.ch=a
this.aW("aPosition",a,3)
x=$.a8().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bG(y.a,this.e)
y.bK(0,w,0)
y.c8(0,z.h(0,"aPosition"),w,x.aY(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.as(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a0(y,"  ")},
p:{
dq:function(a,b,c,d){var z=P.d
return new G.hw(b,J.eX(b.a),c,P.ab(z,P.b),d,0,-1,P.ab(z,P.ag),"meshdata:"+a,!1,!0)}}},
hO:{"^":"bV;",
cu:function(a,b){var z
if(typeof a!=="number")return a.e0()
if(typeof b!=="number")return H.bC(b)
z=a/b
if(this.z===z)return
this.z=z
this.b1()},
b1:function(){var z,y,x,w,v,u
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
aZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aI())
x=this.cy
x.E(z.d)
z=this.cx
z.E(this.db)
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
lb:{"^":"b;"},
i2:{"^":"bP;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cC:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}},
cG:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.as(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ad(0,w))C.a.l(x,w)}for(z=this.x,z=P.jl(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.as(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cI(s,0)){case 117:if(w.ad(0,s)){r=b.h(0,s)
if(v.ad(0,s))H.c5("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a8().h(0,s)
if(q==null)H.a3("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.cc(x.a,p,r)}else if(!!J.A(r).$ishb)J.fm(x.a,p,r)
break
case"float":if(q.c===0){H.ec(r)
J.fk(x.a,p,r)}else if(!!J.A(r).$isag)J.fl(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.al(r,"$isat").a
J.cV(x.a,p,!1,s)}else if(!!J.A(r).$isag)J.cV(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.al(r,"$iscn").a
J.cU(x.a,p,!1,s)}else if(!!J.A(r).$isag)J.cU(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cT(o,p,H.al(r,"$isb7").a)
else J.cT(o,p,H.f(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cS(o,p,H.al(r,"$isD").a)
else J.cS(o,p,H.f(r,"$isag"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.al(r,"$isa6").a)
else J.cR(o,p,H.f(r,"$isag"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bC(s)
J.cJ(x.a,33984+s)
s=H.al(r,"$iscs").b
J.bj(x.a,3553,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bC(s)
J.cJ(x.a,33984+s)
s=H.al(r,"$iscs").b
J.bj(x.a,34067,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
default:H.c5("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aJ(r,!0)
o=x.a
if(s)J.bk(o,2929)
else J.c9(o,2929)
break
case"cStencilFunc":H.al(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c9(o,2960)
else{J.bk(o,2960)
o=r.b
n=r.c
J.fg(x.a,s,o,n)}break
case"cDepthWrite":H.c0(r)
J.eY(x.a,r)
break
case"cBlendEquation":H.al(r,"$isdB")
s=r.a
o=x.a
if(s===1281)J.c9(o,3042)
else{J.bk(o,3042)
o=r.b
n=r.c
J.eS(x.a,o,n)
J.eR(x.a,s)}break}++t
break}}m=P.fS(0,0,0,Date.now()-new P.bL(z,!1).a,0,0)
""+t
m.k(0)},
cv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.bV],"$asa")
Date.now()
z=this.d
J.fn(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b7()}for(x=0;x<2;++x){w=b[x]
this.cJ(w.a,w.aZ())}y=this.Q
y.a_(0)
for(v=a.cy,v=new H.as(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cG()
if(u.length!==0)P.aH("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bG(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cz()
s=a.Q
r=a.z
if(t)J.eQ(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f1(q,y,v,s,0,r)
else J.f0(q,y,v,s,0)}else{s=z.a
if(r>1)J.f_(s,y,0,v,r)
else J.eZ(s,y,0,v)}if(t)J.f4(z.a)},
ak:function(a,b){return this.cv(a,b,null)},
p:{
dv:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.eV(b.a)
t=G.dL(b.a,35633,x)
J.cK(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cK(b.a,u,s)
if(v.length>0)J.fj(b.a,u,v,35980)
J.fe(b.a,u)
if(!H.c0(J.fd(b.a,u,35714)))H.a3(J.fc(b.a,u))
z=new G.i2(b,c,d,u,P.cm(c.c,z),P.ab(z,P.b),P.ab(z,z),y,a,!1,!0)
z.cC(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i9:{"^":"b;a,0b,c,d,e,f,r,x",
aU:function(a){var z,y,x,w,v
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.ai(y)},
a5:function(a){var z,y,x
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.ai(y)},
aV:function(a){var z,y
H.v(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ai(z)},
cE:function(a,b){this.b=this.b2(!0,H.v(a,"$isa",[P.d],"$asa"),b)},
b0:function(a){return this.cE(a,null)},
cD:function(a,b){this.b=this.b2(!1,H.v(a,"$isa",[P.d],"$asa"),b)},
b_:function(a){return this.cD(a,null)},
b2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.v(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a8().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a8().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a8().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a8().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.F(w,b)
if(a)C.a.l(w,"}")
return C.a.a0(w,"\n")},
p:{
bS:function(a){var z,y
z=P.d
y=[z]
return new G.i9(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.ab(z,P.E))}}},
id:{"^":"bP;",
aI:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
is:{"^":"b;a,b,c,d,e,f,r"},
cs:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h9:{"^":"cs;f,a,b,c,d,e",p:{
de:function(a,b,c,d,e){var z=J.eW(a.a)
J.bj(a.a,e,z)
J.ff(a.a,37440,1)
J.bj(a.a,e,z)
J.fh(a.a,e,0,6408,6408,5121,c)
J.cQ(a.a,e,10240,9729)
J.cQ(a.a,e,10241,9729)
J.fb(a.a)
J.bj(a.a,e,null)
return new G.h9(c,b,z,e,a,new G.is(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
iA:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eF().dM()
if(v>=w)return H.l(x,v)
x[v]=(u-0.5)*c}y=G.dq(z,a.d,0,a.e.x)
y.a6(x)
return y},
jn:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iW("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).am(y,"float")
y.setProperty(x,"left","")
x=C.z.am(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.H(z,v)}return z},
hP:{"^":"hO;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dR:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aH("size change "+H.e(y)+" "+H.e(x))
this.cu(y,x)
J.fq(this.go.a,0,0,y,x)},"$1","gdQ",4,0,11]},
ig:{"^":"b;",
cF:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.c("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.k(z)
y.H(z,this.b)
y.H(z,this.d)
y.H(z,this.c)}},
ih:{"^":"ig;e,f,a,b,c,d",
cI:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dX(y,2)+" fps"
C.r.cf(this.c,b)
x=C.e.V(30*C.A.dr(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.r.H(z,w)},
cH:function(a){return this.cI(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
h8:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.ap]
y=H.m([],z)
x=[T.D]
w=H.m([],x)
C.a.F(y,$.es())
C.a.F(w,$.et())
for(v=0;v<a3;++v,y=u){u=H.m([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.N)(y),++s){r=y[s]
q=J.cM(r)
if(q>=w.length)return H.l(w,q)
q=w[q]
p=new T.D(new Float32Array(3))
p.E(q)
q=r.b
if(q>=w.length)return H.l(w,q)
p.l(0,w[q])
p.S(0,0.5)
p.B(0)
if(q>=w.length)return H.l(w,q)
o=w[q]
n=new T.D(new Float32Array(3))
n.E(o)
o=r.c
if(o>=w.length)return H.l(w,o)
n.l(0,w[o])
n.S(0,0.5)
n.B(0)
if(o>=w.length)return H.l(w,o)
m=w[o]
l=new T.D(new Float32Array(3))
l.E(m)
m=r.a
if(m>=w.length)return H.l(w,m)
l.l(0,w[m])
l.S(0,0.5)
l.B(0)
k=w.length
C.a.l(w,p)
j=w.length
C.a.l(w,n)
i=w.length
C.a.l(w,l)
C.a.l(u,new G.ap(m,k,i))
C.a.l(u,new G.ap(q,j,k))
C.a.l(u,new G.ap(o,i,j))
C.a.l(u,new G.ap(k,j,i))}}z=H.m([],z)
t=H.m([],[G.fY])
q=H.m([],x)
h=new G.h4(!1,z,t,q,P.ab(P.d,[P.a,,]))
h.aX("aTexUV")
h.aX("aNormal")
for(t=y.length,o=[T.a6],s=0;s<y.length;y.length===t||(0,H.N)(y),++s){r=y[s]
m=J.cM(r)
g=w.length
if(m>=g)return H.l(w,m)
f=w[m]
m=r.b
if(m>=g)return H.l(w,m)
e=w[m]
m=r.c
if(m>=g)return H.l(w,m)
d=w[m]
m=f.a
g=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
c=new Float32Array(2)
c[0]=0.5*(1+g*0.3183098861837907)
c[1]=m*0.3183098861837907
m=e.a
g=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
b=new Float32Array(2)
b[0]=0.5*(1+g*0.3183098861837907)
b[1]=m*0.3183098861837907
m=d.a
g=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a=new Float32Array(2)
a[0]=0.5*(1+g*0.3183098861837907)
a[1]=m*0.3183098861837907
h.ct("aNormal",H.m([f,e,d],x))
m=new T.D(new Float32Array(3))
m.E(f)
m.S(0,a2)
g=new T.D(new Float32Array(3))
g.E(e)
g.S(0,a2)
a0=new T.D(new Float32Array(3))
a0.E(d)
a0.S(0,a2)
a0=H.v(H.m([m,g,a0],x),"$isa",x,"$asa")
v=q.length
C.a.l(z,new G.ap(v,v+1,v+2))
h.a6(a0)
h.cs("aTexUV",H.m([new T.a6(c),new T.a6(b),new T.a6(a)],o))}return h}}],["","",,D,{"^":"",
hp:function(a){var z,y,x,w
z=W.aL
y=new P.Q(0,$.B,[z])
x=document.createElement("img")
w=new W.bv(x,"load",!1,[W.P])
w.gdG(w).a1(new D.hq(new P.iG(y,[z]),x),-1)
x.src=a
return y},
hq:{"^":"n:11;a,b",
$1:function(a){H.f(a,"$isP")
return this.a.dt(0,this.b)}},
hi:{"^":"b;a,b,c",
cA:function(a){var z,y
a=document
z=W.b_
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.i(new D.hk(this),y),!1,z)
W.ah(a,"keyup",H.i(new D.hl(this),y),!1,z)},
p:{
hj:function(a){var z=P.E
z=new D.hi(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cA(a)
return z}}},
hk:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isb_")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hl:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isb_")
z=this.a
z.a.bT(0,a.which)
z.c.l(0,a.which)}},
hz:{"^":"b;a,b,c,d,e,f,r,x",
cB:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbP(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.i(new D.hB(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbO(a)
y=H.o(x,0)
W.ah(x.a,x.b,H.i(new D.hC(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbQ(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.i(new D.hD(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbR(a)
x=H.o(z,0)
W.ah(z.a,z.b,H.i(new D.hE(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hA:function(a){var z=P.E
z=new D.hz(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cB(a)
return z}}},
hB:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isV")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.M(y.gbN(a).a)
z.x=H.M(y.gbN(a).b)
z.d=a.movementX
z.e=a.movementY}},
hC:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
P.aH("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hD:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
z=this.a
z.a.bT(0,a.button)
z.c.l(0,a.button)}},
hE:{"^":"n:26;a",
$1:function(a){H.f(a,"$isaN")
a.preventDefault()
this.a.f=H.M(C.af.gdB(a))}},
hM:{"^":"id;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bB:function(a){var z,y
z=C.f.dH(H.v(a,"$isj",[P.b],"$asj"),0,new A.kx(),P.E)
if(typeof z!=="number")return H.bC(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kx:{"^":"n:27;",
$2:function(a,b){var z,y
H.M(a)
z=J.am(b)
if(typeof a!=="number")return a.I()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",cn:{"^":"b;a",
k:function(a){return"[0] "+this.M(0).k(0)+"\n[1] "+this.M(1).k(0)+"\n[2] "+this.M(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.l(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.cn){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
M:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.l(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.l(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.l(y,x)
z[2]=y[x]
return new T.D(z)}},at:{"^":"b;a",
E:function(a){var z,y
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
k:function(a){return"[0] "+this.M(0).k(0)+"\n[1] "+this.M(1).k(0)+"\n[2] "+this.M(2).k(0)+"\n[3] "+this.M(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.l(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.at){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
M:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.l(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.l(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.l(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.l(y,x)
z[3]=y[x]
return new T.b7(z)},
T:function(){var z=this.a
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
z[15]=1}},a6:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a6){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gaf:function(a){return this.a[0]},
ga2:function(a){return this.a[1]}},D:{"^":"b;a",
ah:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.D){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbL:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
B:function(a){var z,y,x
z=Math.sqrt(this.gbL())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aA:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.D(new Float32Array(3))
z.ah(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
l:function(a,b){var z,y
z=H.f(b,"$isD").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
S:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
gaf:function(a){return this.a[0]},
ga2:function(a){return this.a[1]},
gca:function(a){return this.a[2]},
p:{
a0:function(a,b,c){var z=new T.D(new Float32Array(3))
z.ah(a,b,c)
return z}}},b7:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gaf:function(a){return this.a[0]},
ga2:function(a){return this.a[1]},
gca:function(a){return this.a[2]},
ge_:function(a){return this.a[3]}}}],["","",,A,{"^":"",
ej:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z={}
y=document
x=C.t.cd(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ih(0,0,x,w,y.createElement("div"),R.jn("blue","gray",90,30))
u.cF(x,"blue","gray")
t=H.f(C.t.dO(y,"#webgl-canvas"),"$isbm")
s=new G.fA(t)
x=P.d
v=P.b
r=(t&&C.y).aG(t,"webgl2",P.dk(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a3(P.db('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.fa(r))
if($.ed>0)P.aH("I: "+q)
J.eT(r,0,0,0,1)
J.bk(r,2929)
J.bk(r,2884)
r=new Float32Array(3)
q=D.hj(null)
p=D.hA(t)
o=new T.at(new Float32Array(16))
o.T()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hM(5,10,0,0,new T.D(r),-0.02,q,p,o,new T.D(n),new T.D(m),new T.D(l),new T.D(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.at(new Float32Array(16))
r.T()
q=new T.at(new Float32Array(16))
q.T()
j=new R.hP(t,s,k,50,1,0.1,1000,r,q,new T.at(new Float32Array(16)),P.ab(x,v),"perspective",!1,!0)
j.b1()
j.dR(null)
x=W.P
W.ah(window,"resize",H.i(j.gdQ(),{func:1,ret:-1,args:[x]}),!1,x)
i=G.dv("spheres",s,$.eL(),$.eK())
h=B.h8(!0,1,3)
g=G.dq("icosahedron-3",i.d,4,i.e.x)
g.a6(G.dd(h.d,null))
x=H.v(h.cw(),"$isa",[P.E],"$asa")
r=g.d
g.y=J.c8(r.a)
q=g.ch.length
if(q<768){g.saq(new Uint8Array(H.bY(x)))
g.Q=5121}else if(q<196608){g.saq(new Uint16Array(H.bY(x)))
g.Q=5123}else{g.saq(new Uint32Array(H.bY(x)))
g.Q=5125}J.bG(r.a,g.e)
x=g.y
q=g.cx
J.c6(r.a,34963,x)
J.cL(r.a,34963,q,35048)
G.jd(h,g)
f=new T.at(new Float32Array(16))
f.T()
x=new Float32Array(9)
x[0]=1
x[1]=0
x[2]=0
x[3]=0
x[4]=1
x[5]=0
x[6]=0
x[7]=0
x[8]=1
r=$.ep()
e=G.dp("sphere",r)
q=e.d
q.i(0,"uNormalMatrix",new T.cn(x))
q.i(0,"uModelMatrix",f)
d=D.hp($.en)
d.a1(new A.kL(s,e),null)
q=$.eH()
C.a.l(q,d)
c=G.dv("stars",s,$.eJ(),$.eI())
b=G.dp("stars",r)
a=y.createElement("canvas")
a.width=64
a.height=64
a0=H.f(C.y.cc(a,"2d"),"$iscf")
a1=(a0&&C.q).bA(a0,32,32,1,32,32,22);(a1&&C.m).ac(a1,0,"gray")
C.m.ac(a1,1,"black")
a0.fillStyle=a1
C.q.dF(a0,0,0,64,64)
a1=C.q.bA(a0,32,32,1,32,32,6);(a1&&C.m).ac(a1,0,"white")
C.m.ac(a1,1,"gray")
a0.globalAlpha=0.9
a0.fillStyle=a1
a0.arc(32,32,4,0,6.283185307179586,!1)
a0.fill()
y=b.d
y.i(0,"uTexture",G.de(s,"Utils::Particles",a,null,3553))
y.i(0,"uPointSize",1000)
x=new T.at(new Float32Array(16))
x.T()
y.i(0,"uModelMatrix",x)
a2=R.iA(c,2000,100)
z.a=0
P.h1(q,null,!1,v).a1(new A.kM(new A.kK(z,k,f,i,g,e,j,c,a2,b,u)),null)},
kL:{"^":"n:28;a,b",
$1:function(a){H.f(a,"$isaL")
this.b.d.i(0,"uTexture",G.de(this.a,$.en,a,null,3553))}},
kK:{"^":"n:29;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cD(a9)
if(typeof a9!=="number")return a9.aT()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aP()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aP()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.u(0,37))y.cx+=0.03
else if(v.u(0,39))y.cx-=0.03
if(v.u(0,38))y.cy+=0.03
else if(v.u(0,40))y.cy-=0.03
if(v.u(0,33))y.ch*=0.99
else if(v.u(0,34))y.ch*=1.01
if(v.u(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aP()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.u.ds(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.dx.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=new T.D(new Float32Array(3))
p.ah(0,1,0)
v=y.aI()
u=new Float32Array(3)
o=new T.D(u)
o.E(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
o.B(0)
n=p.bD(o)
n.B(0)
m=o.bD(n)
m.B(0)
t=n.aA(v)
r=m.aA(v)
v=o.aA(v)
l=n.a
k=l[0]
j=m.a
i=j[0]
h=u[0]
g=l[1]
f=j[1]
e=u[1]
l=l[2]
j=j[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=j
q[8]=l
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=i
q[0]=k
k=y.f
i=k.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.db
d=Math.sqrt(k.gbL())
n=i[0]/d
m=i[1]/d
o=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
i=m*b
a2=n*o*a+i
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-i
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
i=q[4]
k=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
l=q[6]
j=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a0+i*a3+k*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+l*a3+j*a6
q[3]=u*a0+t*a3+r*a6
q[4]=y*a1+i*a4+k*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+l*a4+j*a7
q[7]=u*a1+t*a4+r*a7
q[8]=y*a2+i*a5+k*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+l*a5+j*a8
q[11]=u*a2+t*a5+r*a8
w.c.a_(0)
w.b.a_(0)
x.e=0
x.d=0
x.f=0
x.c.a_(0)
x.b.a_(0)
x=this.c
x.T()
w=this.d
r=this.e
t=this.f
u=this.r
q=[G.bV]
w.ak(r,H.m([t,u],q))
x=x.a
x[14]=0
x[13]=0
x[12]=1.5
w.ak(r,H.m([t,u],q))
this.x.ak(this.y,H.m([this.z,u],q))
C.ag.gdh(window).a1(this,-1)
this.Q.cH(z.a)}},
kM:{"^":"n:30;a",
$1:function(a){H.bg(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.dg.prototype}if(typeof a=="string")return J.bs.prototype
if(a==null)return J.hg.prototype
if(typeof a=="boolean")return J.hf.prototype
if(a.constructor==Array)return J.bq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.be=function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(a.constructor==Array)return J.bq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.ee=function(a){if(a==null)return a
if(a.constructor==Array)return J.bq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.kt=function(a){if(typeof a=="number")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.ku=function(a){if(typeof a=="number")return J.br.prototype
if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.ef=function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bA=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.aJ=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).C(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kt(a).R(a,b)}
J.bi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kH(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).h(a,b)}
J.cI=function(a,b){return J.ef(a).an(a,b)}
J.bF=function(a,b){return J.k(a).d3(a,b)}
J.eN=function(a,b,c,d){return J.k(a).d4(a,b,c,d)}
J.eO=function(a,b,c){return J.k(a).d5(a,b,c)}
J.cJ=function(a,b){return J.k(a).bn(a,b)}
J.eP=function(a,b,c,d){return J.k(a).de(a,b,c,d)}
J.cK=function(a,b,c){return J.k(a).bp(a,b,c)}
J.eQ=function(a,b){return J.k(a).dj(a,b)}
J.c6=function(a,b,c){return J.k(a).bq(a,b,c)}
J.bj=function(a,b,c){return J.k(a).bs(a,b,c)}
J.bG=function(a,b){return J.k(a).dm(a,b)}
J.eR=function(a,b){return J.k(a).bt(a,b)}
J.eS=function(a,b,c){return J.k(a).bu(a,b,c)}
J.cL=function(a,b,c,d){return J.k(a).bv(a,b,c,d)}
J.eT=function(a,b,c,d,e){return J.k(a).bw(a,b,c,d,e)}
J.eU=function(a,b){return J.ku(a).K(a,b)}
J.c7=function(a,b,c){return J.be(a).du(a,b,c)}
J.c8=function(a){return J.k(a).by(a)}
J.eV=function(a){return J.k(a).bz(a)}
J.eW=function(a){return J.k(a).bC(a)}
J.eX=function(a){return J.k(a).dA(a)}
J.eY=function(a,b){return J.k(a).bE(a,b)}
J.c9=function(a,b){return J.k(a).bF(a,b)}
J.eZ=function(a,b,c,d){return J.k(a).bG(a,b,c,d)}
J.f_=function(a,b,c,d,e){return J.k(a).dC(a,b,c,d,e)}
J.f0=function(a,b,c,d,e){return J.k(a).bH(a,b,c,d,e)}
J.f1=function(a,b,c,d,e,f){return J.k(a).dD(a,b,c,d,e,f)}
J.f2=function(a,b){return J.ee(a).q(a,b)}
J.bk=function(a,b){return J.k(a).bI(a,b)}
J.f3=function(a,b){return J.k(a).bJ(a,b)}
J.f4=function(a){return J.k(a).dE(a)}
J.f5=function(a,b){return J.k(a).D(a,b)}
J.cM=function(a){return J.bA(a).gaz(a)}
J.f6=function(a){return J.k(a).gdi(a)}
J.am=function(a){return J.A(a).gv(a)}
J.bH=function(a){return J.ee(a).gw(a)}
J.aV=function(a){return J.be(a).gj(a)}
J.f7=function(a){return J.k(a).gdN(a)}
J.f8=function(a){return J.k(a).gdV(a)}
J.f9=function(a){return J.bA(a).ge_(a)}
J.bI=function(a){return J.bA(a).gaf(a)}
J.ca=function(a){return J.bA(a).ga2(a)}
J.cN=function(a){return J.bA(a).gca(a)}
J.cb=function(a,b){return J.k(a).X(a,b)}
J.fa=function(a){return J.k(a).ag(a)}
J.fb=function(a){return J.k(a).aH(a)}
J.fc=function(a,b){return J.k(a).aJ(a,b)}
J.fd=function(a,b,c){return J.k(a).aK(a,b,c)}
J.cO=function(a,b,c){return J.k(a).aO(a,b,c)}
J.fe=function(a,b){return J.k(a).bM(a,b)}
J.ff=function(a,b,c){return J.k(a).bS(a,b,c)}
J.cP=function(a){return J.k(a).dP(a)}
J.fg=function(a,b,c,d){return J.k(a).aS(a,b,c,d)}
J.fh=function(a,b,c,d,e,f,g){return J.k(a).bV(a,b,c,d,e,f,g)}
J.cQ=function(a,b,c,d){return J.k(a).bW(a,b,c,d)}
J.fi=function(a){return J.ef(a).dW(a)}
J.bl=function(a){return J.A(a).k(a)}
J.fj=function(a,b,c,d){return J.k(a).dY(a,b,c,d)}
J.fk=function(a,b,c){return J.k(a).bY(a,b,c)}
J.fl=function(a,b,c){return J.k(a).bZ(a,b,c)}
J.cc=function(a,b,c){return J.k(a).c_(a,b,c)}
J.fm=function(a,b,c){return J.k(a).c0(a,b,c)}
J.cR=function(a,b,c){return J.k(a).c1(a,b,c)}
J.cS=function(a,b,c){return J.k(a).c2(a,b,c)}
J.cT=function(a,b,c){return J.k(a).c3(a,b,c)}
J.cU=function(a,b,c,d){return J.k(a).c4(a,b,c,d)}
J.cV=function(a,b,c,d){return J.k(a).c5(a,b,c,d)}
J.fn=function(a,b){return J.k(a).c6(a,b)}
J.fo=function(a,b,c){return J.k(a).dZ(a,b,c)}
J.fp=function(a,b,c,d,e,f,g){return J.k(a).c7(a,b,c,d,e,f,g)}
J.fq=function(a,b,c,d,e){return J.k(a).c9(a,b,c,d,e)}
I.aG=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bJ.prototype
C.y=W.bm.prototype
C.m=W.fy.prototype
C.q=W.cf.prototype
C.z=W.fH.prototype
C.r=W.fO.prototype
C.L=W.fQ.prototype
C.M=W.h6.prototype
C.t=W.h7.prototype
C.N=J.h.prototype
C.a=J.bq.prototype
C.A=J.dg.prototype
C.e=J.dh.prototype
C.u=J.br.prototype
C.i=J.bs.prototype
C.U=J.bt.prototype
C.f=H.hF.prototype
C.n=H.hH.prototype
C.Z=W.hI.prototype
C.D=J.hQ.prototype
C.E=W.i_.prototype
C.J=W.iq.prototype
C.x=J.b6.prototype
C.af=W.aN.prototype
C.ag=W.iD.prototype
C.K=new P.jh()
C.d=new P.jz()
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
C.B=function(hooks) { return hooks; }

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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.m(I.aG(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.m(I.aG(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.m(I.aG([]),[P.y])
C.X=H.m(I.aG([]),[P.d])
C.v=H.m(I.aG(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.m(I.aG(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a_=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.a0=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.F=new G.C("vec3","vertex coordinates",0)
C.a1=new G.C("vec3","vertex binormals",0)
C.G=new G.C("vec4","for wireframe",0)
C.a2=new G.C("vec4","per vertex color",0)
C.a3=new G.C("float","for normal maps",0)
C.j=new G.C("mat4","",0)
C.a5=new G.C("mat4","",4)
C.a4=new G.C("mat4","",128)
C.b=new G.C("float","",0)
C.a6=new G.C("float","",4)
C.a7=new G.C("float","depth for shadowmaps",0)
C.h=new G.C("sampler2D","",0)
C.a8=new G.C("float","for bump maps",0)
C.a9=new G.C("vec2","texture uvs",0)
C.aa=new G.C("float","time since program start in sec",0)
C.k=new G.C("vec2","",0)
C.ab=new G.C("samplerCube","",0)
C.l=new G.C("vec4","",0)
C.ac=new G.C("vec3","vertex normals",0)
C.ad=new G.C("sampler2DShadow","",0)
C.H=new G.C("vec3","per vertex color",0)
C.I=new G.C("mat3","",0)
C.ae=new G.C("vec3","vertex tangents",0)
$.aa=0
$.aW=null
$.cZ=null
$.cu=!1
$.eh=null
$.e9=null
$.em=null
$.c1=null
$.c3=null
$.cB=null
$.aQ=null
$.b8=null
$.b9=null
$.cv=!1
$.B=C.d
$.af=null
$.ch=null
$.d9=null
$.d8=null
$.d5=null
$.d4=null
$.d3=null
$.d2=null
$.ed=0
$.en="sphere.png"
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
I.$lazy(y,x,w)}})(["l5","er",function(){return H.eg("_$dart_dartClosure")},"lK","cF",function(){return H.eg("_$dart_js")},"mu","ev",function(){return H.ad(H.bU({
toString:function(){return"$receiver$"}}))},"mv","ew",function(){return H.ad(H.bU({$method$:null,
toString:function(){return"$receiver$"}}))},"mw","ex",function(){return H.ad(H.bU(null))},"mx","ey",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mA","eB",function(){return H.ad(H.bU(void 0))},"mB","eC",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mz","eA",function(){return H.ad(H.dD(null))},"my","ez",function(){return H.ad(function(){try{null.$method$}catch(z){return z.message}}())},"mD","eE",function(){return H.ad(H.dD(void 0))},"mC","eD",function(){return H.ad(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mO","cG",function(){return P.iH()},"n3","bh",function(){return[]},"l2","eq",function(){return{}},"mV","eG",function(){return P.cm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mW","cH",function(){return P.ab(P.d,P.bo)},"mh","eu",function(){return new G.dC(1281,0,4294967295)},"l_","ep",function(){return new G.dB(32774,770,769)},"n1","a8",function(){return P.dk(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a2,"aPosition",C.F,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a0,"vCenter",C.G,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.b,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.d,G.C)},"mI","eF",function(){return C.K},"n9","eJ",function(){var z,y
z=G.bS("PointSpritesV")
y=[P.d]
z.aU(H.m(["aPosition"],y))
z.a5(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.b0(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"n8","eI",function(){var z,y
z=G.bS("PointSpritesF")
y=[P.d]
z.a5(H.m(["uTexture"],y))
z.b0(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"lB","es",function(){return H.m([G.I(0,11,5),G.I(0,5,1),G.I(0,1,7),G.I(0,7,10),G.I(0,10,11),G.I(1,5,9),G.I(5,11,4),G.I(11,10,2),G.I(10,7,6),G.I(7,1,8),G.I(3,9,4),G.I(3,4,2),G.I(3,2,6),G.I(3,6,8),G.I(3,8,9),G.I(4,9,5),G.I(2,4,11),G.I(6,2,10),G.I(8,6,7),G.I(9,8,1)],[G.ap])},"nc","eM",function(){return(1+P.kR(5))/2},"lC","et",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eM()
y=T.a0(-1,z,0)
y.B(0)
x=T.a0(1,z,0)
x.B(0)
if(typeof z!=="number")return z.e1()
w=T.a0(-1,-z,0)
w.B(0)
v=T.a0(1,-z,0)
v.B(0)
u=T.a0(0,-1,z)
u.B(0)
t=T.a0(0,1,z)
t.B(0)
s=T.a0(0,-1,-z)
s.B(0)
r=T.a0(0,1,-z)
r.B(0)
q=T.a0(z,0,-1)
q.B(0)
p=T.a0(z,0,1)
p.B(0)
o=T.a0(-z,0,-1)
o.B(0)
z=T.a0(-z,0,1)
z.B(0)
return H.m([y,x,w,v,u,t,s,r,q,p,o,z],[T.D])},"nb","eL",function(){var z,y
z=G.bS("sphereV")
y=[P.d]
z.aU(H.m(["aPosition","aNormal"],y))
z.a5(H.m(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.aV(H.m(["vTexUV"],y))
z.b_(H.m(["void main() {\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n    vec3 u = normalize(vec3(uModelMatrix * vec4(aPosition, 1.0)));\n    vec3 n = normalize(uNormalMatrix * aNormal );\n    vec3 r = reflect( u, n );\n    r.z += 1.0;\n    float m = 2.0 * length(r);\n    vTexUV = vec2(r.x/m + 0.5, r.y/m + 0.5);\n}\n  "],y))
return z},"na","eK",function(){var z,y
z=G.bS("sphereF")
y=[P.d]
z.aV(H.m(["vTexUV"],y))
z.a5(H.m(["uTexture"],y))
z.b_(H.m(["void main() {\n    oFragColor = texture(uTexture, vTexUV);\n}\n      "],y))
return z},"n6","eH",function(){return H.m([],[[P.Y,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.y},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.y,args:[W.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.y,args:[,]},{func:1,ret:P.y,args:[,,]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.S,args:[W.ac]},{func:1,ret:P.S,args:[P.d]},{func:1,ret:-1,args:[W.P]},{func:1,ret:P.y,args:[W.b_]},{func:1,ret:P.S,args:[W.T,P.d,P.d,W.bx]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[,P.R]},{func:1,ret:P.y,args:[,],opt:[P.R]},{func:1,ret:[P.Q,,],args:[,]},{func:1,ret:P.S,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.y,args:[P.F]},{func:1,args:[W.P]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.y,args:[W.aN]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:P.y,args:[W.aL]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.y,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kT(d||a)
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
Isolate.bc=a.bc
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
if(typeof dartMainRunner==="function")dartMainRunner(A.ej,[])
else A.ej([])})})()
//# sourceMappingURL=bubble.dart.js.map
