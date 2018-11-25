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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bd=function(){}
var dart=[["","",,H,{"^":"",lL:{"^":"b;a"}}],["","",,J,{"^":"",
cC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cB==null){H.kG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dG("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cF()]
if(v!=null)return v
v=H.kL(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cF(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"b;",
C:function(a,b){return a===b},
gv:function(a){return H.b5(a)},
k:["cl",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hg:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isS:1},
hh:{"^":"h;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isz:1},
ck:{"^":"h;",
gv:function(a){return 0},
k:["cn",function(a){return String(a)}]},
hR:{"^":"ck;"},
b8:{"^":"ck;"},
bu:{"^":"ck;",
k:function(a){var z=a[$.er()]
if(z==null)return this.cn(a)
return"JavaScript function for "+H.e(J.bm(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbp:1},
br:{"^":"h;$ti",
l:function(a,b){H.x(b,H.o(a,0))
if(!!a.fixed$length)H.a3(P.A("add"))
a.push(b)},
F:function(a,b){var z,y
H.w(b,"$isj",[H.o(a,0)],"$asj")
if(!!a.fixed$length)H.a3(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
bm:function(a,b){var z,y
H.i(b,{func:1,ret:P.S,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aL(a))}return!1},
cf:function(a,b){if(!!a.immutable$list)H.a3(P.A("sort"))
H.id(a,J.kh(),H.o(a,0))},
aj:function(a){return this.cf(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aK(a[z],b))return!0
return!1},
k:function(a){return P.ci(a,"[","]")},
gw:function(a){return new J.ft(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b5(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bc(a,b))
return a[b]},
i:function(a,b,c){H.x(c,H.o(a,0))
if(!!a.immutable$list)H.a3(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bc(a,b))
a[b]=c},
$isu:1,
$asu:I.bd,
$isj:1,
$isa:1,
p:{
hf:function(a,b){return J.cj(H.m(a,[b]))},
cj:function(a){H.bh(a)
a.fixed$length=Array
return a},
lJ:[function(a,b){return J.eU(H.ek(a,"$isX"),H.ek(b,"$isX"))},"$2","kh",8,0,31]}},
lK:{"^":"br;$ti"},
ft:{"^":"b;a,b,c,0d,$ti",
sb1:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.sb1(null)
return!1}this.sb1(z[x]);++this.c
return!0},
$isb0:1},
bs:{"^":"h;",
K:function(a,b){var z
H.cD(b)
if(typeof b!=="number")throw H.c(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gag(b)
if(this.gag(a)===z)return 0
if(this.gag(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gag:function(a){return a===0?1/a<0:a<0},
bV:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
dq:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.A(""+a+".ceil()"))},
dr:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.bb(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dW:function(a,b){var z
if(b>20)throw H.c(P.bQ(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gag(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cp:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bj(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.bj(a,b)},
bj:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bh:function(a,b){var z
if(a>0)z=this.d9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d9:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.c(H.bb(b))
return a>b},
$isX:1,
$asX:function(){return[P.F]},
$isaj:1,
$isF:1},
dh:{"^":"bs;",$isE:1},
dg:{"^":"bs;"},
bt:{"^":"h;",
ao:function(a,b){if(b>=a.length)throw H.c(H.bc(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.cX(b,null,null))
return a+b},
ci:function(a,b,c){var z
if(c>a.length)throw H.c(P.bQ(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cg:function(a,b){return this.ci(a,b,0)},
ck:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bR(b,null,null))
if(b>c)throw H.c(P.bR(b,null,null))
if(c>a.length)throw H.c(P.bR(c,null,null))
return a.substring(b,c)},
cj:function(a,b){return this.ck(a,b,null)},
dV:function(a){return a.toLowerCase()},
dt:function(a,b,c){if(c>a.length)throw H.c(P.bQ(c,0,a.length,null,null))
return H.kU(a,b,c)},
K:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.bb(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bc(a,b))
return a[b]},
$isu:1,
$asu:I.bd,
$isX:1,
$asX:function(){return[P.d]},
$ishO:1,
$isd:1}}],["","",,H,{"^":"",
df:function(){return new P.cq("No element")},
he:function(){return new P.cq("Too many elements")},
id:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.E,args:[c,c]})
H.bv(a,0,J.aX(a)-1,b,c)},
bv:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.ic(a,b,c,d,e)
else H.ib(a,b,c,d,e)},
ic:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.bf(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ib:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.e.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.W(b+a0,2)
v=w-z
u=w+z
t=J.bf(a)
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
if(J.aK(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.S()
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
if(typeof e!=="number")return e.a4()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.S()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.S()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a4()
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
H.bv(a,b,m-2,a1,a2)
H.bv(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aK(a1.$2(t.h(a,m),r),0);)++m
for(;J.aK(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a4()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bv(a,m,l,a1,a2)}else H.bv(a,m,l,a1,a2)},
d7:{"^":"j;"},
bO:{"^":"d7;$ti",
gw:function(a){return new H.dl(this,this.gj(this),0,[H.cA(this,"bO",0)])},
aG:function(a,b){return this.cm(0,H.i(b,{func:1,ret:P.S,args:[H.cA(this,"bO",0)]}))}},
dl:{"^":"b;a,b,c,0d,$ti",
sb2:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.bf(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aL(z))
w=this.c
if(w>=x){this.sb2(null)
return!1}this.sb2(y.q(z,w));++this.c
return!0},
$isb0:1},
hu:{"^":"bO;a,b,$ti",
gj:function(a){return J.aX(this.a)},
q:function(a,b){return this.b.$1(J.f2(this.a,b))},
$asbO:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dH:{"^":"j;a,b,$ti",
gw:function(a){return new H.iD(J.bH(this.a),this.b,this.$ti)}},
iD:{"^":"b0;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bN:{"^":"b;$ti"}}],["","",,H,{"^":"",
aJ:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ky:function(a){return init.types[H.M(a)]},
kJ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.y(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bm(a)
if(typeof z!=="string")throw H.c(H.bb(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.hS(a)+H.bZ(H.ak(a),0,null)},
hS:function(a){var z,y,x,w,v,u,t,s,r
z=J.y(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb8){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aJ(w.length>1&&C.i.ao(w,0)===36?C.i.cj(w,1):w)},
aN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hZ:function(a){var z=H.aN(a).getFullYear()+0
return z},
hX:function(a){var z=H.aN(a).getMonth()+1
return z},
hT:function(a){var z=H.aN(a).getDate()+0
return z},
hU:function(a){var z=H.aN(a).getHours()+0
return z},
hW:function(a){var z=H.aN(a).getMinutes()+0
return z},
hY:function(a){var z=H.aN(a).getSeconds()+0
return z},
hV:function(a){var z=H.aN(a).getMilliseconds()+0
return z},
aG:function(a){throw H.c(H.bb(a))},
l:function(a,b){if(a==null)J.aX(a)
throw H.c(H.bc(a,b))},
bc:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.M(J.aX(a))
if(!(b<0)){if(typeof z!=="number")return H.aG(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bR(b,"index",null)},
bb:function(a){return new P.an(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eo})
z.name=""}else z.toString=H.eo
return z},
eo:function(){return J.bm(this.dartException)},
a3:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aL(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bh(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.e(y)+" (Error "+w+")",null))
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
if(l)return z.$1(H.dt(H.t(y),m))}}return z.$1(new H.iz(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
aF:function(a){var z
if(a==null)return new H.dY(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dY(a)},
ku:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kI:function(a,b,c,d,e,f){H.f(a,"$isbp")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.db("Unsupported number of arguments for wrapped closure"))},
aV:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kI)
a.$identity=z
return z},
fF:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.y(d).$isa){z.$reflectionInfo=d
x=H.i2(z).r}else x=d
w=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ky,x)
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
fC:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fE(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fC(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aY
if(v==null){v=H.bK("self")
$.aY=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.I()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aY
if(v==null){v=H.bK("self")
$.aY=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fD:function(a,b,c,d){var z,y
z=H.ce
y=H.d_
switch(b?-1:a){case 0:throw H.c(H.i6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fE:function(a,b){var z,y,x,w,v,u,t,s
z=$.aY
if(z==null){z=H.bK("self")
$.aY=z}y=$.cZ
if(y==null){y=H.bK("receiver")
$.cZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fD(w,!u,x,b)
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
cy:function(a,b,c,d,e,f,g){return H.fF(a,b,H.M(c),d,!!e,!!f,g)},
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
cE:function(a,b){throw H.c(H.a5(a,H.aJ(H.t(b).substring(3))))},
kR:function(a,b){throw H.c(H.d0(a,H.aJ(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.y(a)[b])return a
H.cE(a,b)},
al:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.y(a)[b]
else z=!0
if(z)return a
H.kR(a,b)},
ek:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.y(a)[b])return a
H.cE(a,b)},
bh:function(a){if(a==null)return a
if(!!J.y(a).$isa)return a
throw H.c(H.a5(a,"List<dynamic>"))},
kK:function(a,b){var z
if(a==null)return a
z=J.y(a)
if(!!z.$isa)return a
if(z[b])return a
H.cE(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bA:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.y(a))
if(z==null)return!1
return H.e3(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.bA(a,b))return a
z=H.bD(b)
y=H.a5(a,z)
throw H.c(y)}finally{$.cu=!1}},
be:function(a,b){if(a!=null&&!H.cx(a,b))H.a3(H.a5(a,H.bD(b)))
return a},
e7:function(a){var z,y
z=J.y(a)
if(!!z.$isn){y=H.cz(z)
if(y!=null)return H.bD(y)
return"Closure"}return H.b6(a)},
kV:function(a){throw H.c(new P.fL(H.t(a)))},
eg:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ak:function(a){if(a==null)return
return a.$ti},
n9:function(a,b,c){return H.aW(a["$as"+H.e(c)],H.ak(b))},
bg:function(a,b,c,d){var z
H.t(c)
H.M(d)
z=H.aW(a["$as"+H.e(c)],H.ak(b))
return z==null?null:z[d]},
cA:function(a,b,c){var z
H.t(b)
H.M(c)
z=H.aW(a["$as"+H.e(b)],H.ak(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.M(b)
z=H.ak(a)
return z==null?null:z[b]},
bD:function(a){return H.aE(a,null)},
aE:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aJ(a[0].builtin$cls)+H.bZ(a,1,b)
if(typeof a=="function")return H.aJ(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.kg(a,b)
if('futureOr' in a)return"FutureOr<"+H.aE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
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
for(z=H.kt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aE(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bZ:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aE(u,c)}return"<"+z.k(0)+">"},
kx:function(a){var z,y,x,w
z=J.y(a)
if(!!z.$isn){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ak(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.t(b)
H.bh(c)
H.t(d)
if(a==null)return!1
z=H.ak(a)
y=J.y(a)
if(y[b]==null)return!1
return H.ea(H.aW(y[d],z),null,c,null)},
bE:function(a,b,c,d){H.t(b)
H.bh(c)
H.t(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.d0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aJ(b.substring(3))+H.bZ(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.t(b)
H.bh(c)
H.t(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aJ(b.substring(3))+H.bZ(c,0,null),init.mangledGlobalNames)))},
ea:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n6:function(a,b,c){return a.apply(b,H.aW(J.y(b)["$as"+H.e(c)],H.ak(b)))},
ei:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.ei(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.ei(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bA(a,b)}z=J.y(a).constructor
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
if(a.builtin$cls==="z")return!0
if('func' in c)return H.e3(a,b,c,d)
if('func' in a)return c.builtin$cls==="bp"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"Y" in y.prototype))return!1
w=y.prototype["$as"+"Y"]
v=H.aW(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ea(H.aW(r,z),b,u,d)},
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
return H.kQ(m,b,l,d)},
kQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n7:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
kL:function(a){var z,y,x,w,v,u
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
c4:function(a){return J.cC(a,!1,null,!!a.$isv)},
kP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cC(z,c,null,null)},
kG:function(){if(!0===$.cB)return
$.cB=!0
H.kH()},
kH:function(){var z,y,x,w,v,u,t,s
$.c1=Object.create(null)
$.c3=Object.create(null)
H.kC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.em.$1(v)
if(u!=null){t=H.kP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kC:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aU(C.O,H.aU(C.T,H.aU(C.B,H.aU(C.B,H.aU(C.S,H.aU(C.P,H.aU(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eh=new H.kD(v)
$.e9=new H.kE(u)
$.em=new H.kF(t)},
aU:function(a,b){return a(b)||b},
kU:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i1:{"^":"b;a,b,c,d,e,f,r,0x",p:{
i2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cj(z)
y=z[0]
x=z[1]
return new H.i1(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iu:{"^":"b;a,b,c,d,e,f",
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
return new H.iu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hM:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dt:function(a,b){return new H.hM(a,b==null?null:b.method)}}},
hi:{"^":"O;a,b,c",
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
return new H.hi(a,y,z?null:b.receiver)}}},
iz:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kW:{"^":"n:5;a",
$1:function(a){if(!!J.y(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
k:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gc9:function(){return this},
$isbp:1,
gc9:function(){return this}},
dz:{"^":"n;"},
ig:{"^":"dz;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aJ(z)+"'"}},
cd:{"^":"dz;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.am(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
p:{
ce:function(a){return a.a},
d_:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iv:{"^":"O;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.iv("TypeError: "+H.e(P.bM(a))+": type '"+H.e7(a)+"' is not a subtype of type '"+b+"'")}}},
fA:{"^":"O;a",
k:function(a){return this.a},
p:{
d0:function(a,b){return new H.fA("CastError: "+H.e(P.bM(a))+": type '"+H.e7(a)+"' is not a subtype of type '"+b+"'")}}},
i5:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i6:function(a){return new H.i5(a)}}},
dE:{"^":"b;a,0b,0c,0d",
gad:function(){var z=this.b
if(z==null){z=H.bD(this.a)
this.b=z}return z},
k:function(a){return this.gad()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gad())
this.d=z}return z},
C:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gad()===b.gad()}},
di:{"^":"dm;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gG:function(a){return new H.as(this,[H.o(this,0)])},
af:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cR(z,b)}else{y=this.dI(b)
return y}},
dI:function(a){var z=this.d
if(z==null)return!1
return this.aC(this.at(z,J.am(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aa(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aa(w,b)
x=y==null?null:y.b
return x}else return this.dJ(b)},
dJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.at(z,J.am(a)&0x3ffffff)
x=this.aC(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.av()
this.b=z}this.b3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.av()
this.c=y}this.b3(y,b,c)}else{x=this.d
if(x==null){x=this.av()
this.d=x}w=J.am(b)&0x3ffffff
v=this.at(x,w)
if(v==null)this.ax(x,w,[this.am(b,c)])
else{u=this.aC(v,b)
if(u>=0)v[u].b=c
else v.push(this.am(b,c))}}},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aL(this))
z=z.c}},
b3:function(a,b,c){var z
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
z=this.aa(a,b)
if(z==null)this.ax(a,b,this.am(b,c))
else z.b=c},
b5:function(){this.r=this.r+1&67108863},
am:function(a,b){var z,y
z=new H.hn(H.x(a,H.o(this,0)),H.x(b,H.o(this,1)))
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
for(y=0;y<z;++y)if(J.aK(a[y].a,b))return y
return-1},
k:function(a){return P.dn(this)},
aa:function(a,b){return a[b]},
at:function(a,b){return a[b]},
ax:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cR:function(a,b){return this.aa(a,b)!=null},
av:function(){var z=Object.create(null)
this.ax(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z},
$isdj:1},
hn:{"^":"b;a,b,0c,0d"},
as:{"^":"d7;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.ho(z,z.r,this.$ti)
y.c=z.e
return y}},
ho:{"^":"b;a,b,0c,0d,$ti",
sb4:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aL(z))
else{z=this.c
if(z==null){this.sb4(null)
return!1}else{this.sb4(z.a)
this.c=this.c.c
return!0}}},
$isb0:1},
kD:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
kE:{"^":"n:14;a",
$2:function(a,b){return this.a(a,b)}},
kF:{"^":"n:15;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
kt:function(a){return J.hf(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bY:function(a){var z,y
if(!!J.y(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bc(b,a))},
hH:{"^":"h;",$isiw:1,"%":"DataView;ArrayBufferView;co|dS|dT|dr|dU|dV|av"},
co:{"^":"hH;",
gj:function(a){return a.length},
$isu:1,
$asu:I.bd,
$isv:1,
$asv:I.bd},
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
hG:{"^":"dr;",$isag:1,"%":"Float32Array"},
lT:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lU:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ishc:1,
"%":"Int32Array"},
lV:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lW:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hI:{"^":"av;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ismG:1,
"%":"Uint32Array"},
lX:{"^":"av;",
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lY:{"^":"av;",
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dS:{"^":"co+p;"},
dT:{"^":"dS+bN;"},
dU:{"^":"co+p;"},
dV:{"^":"dU+bN;"}}],["","",,P,{"^":"",
iI:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ko()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aV(new P.iK(z),1)).observe(y,{childList:true})
return new P.iJ(z,y,x)}else if(self.setImmediate!=null)return P.kp()
return P.kq()},
mR:[function(a){self.scheduleImmediate(H.aV(new P.iL(H.i(a,{func:1,ret:-1})),0))},"$1","ko",4,0,4],
mS:[function(a){self.setImmediate(H.aV(new P.iM(H.i(a,{func:1,ret:-1})),0))},"$1","kp",4,0,4],
mT:[function(a){H.i(a,{func:1,ret:-1})
P.jY(0,a)},"$1","kq",4,0,4],
h2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isj",[[P.Y,d]],"$asj")
s=[[P.a,d]]
y=new P.Q(0,$.C,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.h4(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.N)(r),++p){w=r[p]
v=o
w.aF(new P.h3(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.Q(0,$.C,s)
r.b8(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.m(r,[d])}catch(n){u=H.Z(n)
t=H.aF(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.cp()
r=$.C
if(r!==C.d)r.toString
s=new P.Q(0,r,s)
s.cO(m,t)
return s}else{z.c=u
z.d=t}}return y},
kk:function(a,b){if(H.bA(a,{func:1,args:[P.b,P.R]}))return H.i(a,{func:1,ret:null,args:[P.b,P.R]})
if(H.bA(a,{func:1,args:[P.b]}))return H.i(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kj:function(){var z,y
for(;z=$.aS,z!=null;){$.ba=null
y=z.b
$.aS=y
if(y==null)$.b9=null
z.a.$0()}},
n4:[function(){$.cv=!0
try{P.kj()}finally{$.ba=null
$.cv=!1
if($.aS!=null)$.cG().$1(P.eb())}},"$0","eb",0,0,1],
e6:function(a){var z=new P.dJ(H.i(a,{func:1,ret:-1}))
if($.aS==null){$.b9=z
$.aS=z
if(!$.cv)$.cG().$1(P.eb())}else{$.b9.b=z
$.b9=z}},
kn:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aS
if(z==null){P.e6(a)
$.ba=$.b9
return}y=new P.dJ(a)
x=$.ba
if(x==null){y.b=z
$.ba=y
$.aS=y}else{y.b=x.b
x.b=y
$.ba=y
if(y.b==null)$.b9=y}},
kS:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.C
if(C.d===y){P.aT(null,null,C.d,a)
return}y.toString
P.aT(null,null,y,H.i(y.bp(a),z))},
kf:function(a,b,c){a.dn(0)
b.a9(c)},
c_:function(a,b,c,d,e){var z={}
z.a=d
P.kn(new P.kl(z,e))},
e4:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
e5:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
km:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
aT:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bp(d):c.dj(d,-1)
P.e6(d)},
iK:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iJ:{"^":"n:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iL:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iM:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jX:{"^":"b;a,0b,c",
cL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aV(new P.jZ(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
jY:function(a,b){var z=new P.jX(!0,0)
z.cL(a,b)
return z}}},
jZ:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Y:{"^":"b;$ti"},
h4:{"^":"n:17;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isR")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.O(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.O(z.c,z.d)}},
h3:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.x(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.ba(z.a)}else if(z.b===0&&!this.e)this.c.O(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dM:{"^":"b;$ti"},
iH:{"^":"dM;a,$ti",
ds:function(a,b){var z
H.be(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bT("Future already completed"))
z.b8(b)}},
jS:{"^":"dM;a,$ti"},
aQ:{"^":"b;0a,b,c,d,e,$ti",
dK:function(a){if(this.c!==6)return!0
return this.b.b.aD(H.i(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
dH:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bA(z,{func:1,args:[P.b,P.R]}))return H.be(w.dR(z,a.a,a.b,null,y,P.R),x)
else return H.be(w.aD(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
Q:{"^":"b;bi:a<,b,0d6:c<,$ti",
aF:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kk(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Q(0,$.C,[c])
w=b==null?1:3
this.b7(new P.aQ(x,w,a,b,[z,c]))
return x},
a3:function(a,b){return this.aF(a,null,b)},
b7:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaQ")
this.c=a}else{if(z===2){y=H.f(this.c,"$isQ")
z=y.a
if(z<4){y.b7(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aT(null,null,z,H.i(new P.j2(this,a),{func:1,ret:-1}))}},
bf:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaQ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isQ")
y=u.a
if(y<4){u.bf(a)
return}this.a=y
this.c=u.c}z.a=this.ac(a)
y=this.b
y.toString
P.aT(null,null,y,H.i(new P.j9(z,this),{func:1,ret:-1}))}},
ab:function(){var z=H.f(this.c,"$isaQ")
this.c=null
return this.ac(z)},
ac:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a9:function(a){var z,y,x
z=H.o(this,0)
H.be(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isY",y,"$asY"))if(H.ai(a,"$isQ",y,null))P.bW(a,this)
else P.dN(a,this)
else{x=this.ab()
H.x(a,z)
this.a=4
this.c=a
P.aR(this,x)}},
ba:function(a){var z
H.x(a,H.o(this,0))
z=this.ab()
this.a=4
this.c=a
P.aR(this,z)},
O:function(a,b){var z
H.f(b,"$isR")
z=this.ab()
this.a=8
this.c=new P.a_(a,b)
P.aR(this,z)},
b8:function(a){var z
H.be(a,{futureOr:1,type:H.o(this,0)})
if(H.ai(a,"$isY",this.$ti,"$asY")){this.cP(a)
return}this.a=1
z=this.b
z.toString
P.aT(null,null,z,H.i(new P.j4(this,a),{func:1,ret:-1}))},
cP:function(a){var z=this.$ti
H.w(a,"$isY",z,"$asY")
if(H.ai(a,"$isQ",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aT(null,null,z,H.i(new P.j8(this,a),{func:1,ret:-1}))}else P.bW(a,this)
return}P.dN(a,this)},
cO:function(a,b){var z
H.f(b,"$isR")
this.a=1
z=this.b
z.toString
P.aT(null,null,z,H.i(new P.j3(this,a,b),{func:1,ret:-1}))},
$isY:1,
p:{
dN:function(a,b){var z,y,x
b.a=1
try{a.aF(new P.j5(b),new P.j6(b),null)}catch(x){z=H.Z(x)
y=H.aF(x)
P.kS(new P.j7(b,z,y))}},
bW:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isQ")
if(z>=4){y=b.ab()
b.a=a.a
b.c=a.c
P.aR(b,y)}else{y=H.f(b.c,"$isaQ")
b.a=2
b.c=a
a.bf(y)}},
aR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.aR(z.a,b)}y=z.a
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
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.jc(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jb(x,b,r).$0()}else if((y&2)!==0)new P.ja(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.y(y).$isY){if(y.a>=4){n=H.f(t.c,"$isaQ")
t.c=null
b=t.ac(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bW(y,t)
return}}m=b.b
n=H.f(m.c,"$isaQ")
m.c=null
b=m.ac(n)
y=x.a
u=x.b
if(!y){H.x(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
j2:{"^":"n:0;a,b",
$0:function(){P.aR(this.a,this.b)}},
j9:{"^":"n:0;a,b",
$0:function(){P.aR(this.b,this.a.a)}},
j5:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.a9(a)}},
j6:{"^":"n:18;a",
$2:function(a,b){H.f(b,"$isR")
this.a.O(a,b)},
$1:function(a){return this.$2(a,null)}},
j7:{"^":"n:0;a,b,c",
$0:function(){this.a.O(this.b,this.c)}},
j4:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.ba(H.x(this.b,H.o(z,0)))}},
j8:{"^":"n:0;a,b",
$0:function(){P.bW(this.b,this.a)}},
j3:{"^":"n:0;a,b,c",
$0:function(){this.a.O(this.b,this.c)}},
jc:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.i(w.d,{func:1}),null)}catch(v){y=H.Z(v)
x=H.aF(v)
if(this.d){w=H.f(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.y(z).$isY){if(z instanceof P.Q&&z.gbi()>=4){if(z.gbi()===8){w=this.b
w.b=H.f(z.gd6(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a3(new P.jd(t),null)
w.a=!1}}},
jd:{"^":"n:19;a",
$1:function(a){return this.a}},
jb:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.x(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aD(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Z(t)
y=H.aF(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
ja:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa_")
w=this.c
if(w.dK(z)&&w.e!=null){v=this.b
v.b=w.dH(z)
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
ik:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.C,[P.E])
z.a=0
x=H.o(this,0)
w=H.i(new P.ip(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.iq(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y},
gdF:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.C,this.$ti)
z.a=null
x=H.o(this,0)
w=H.i(new P.im(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.io(y),{func:1,ret:-1})
z.a=W.ah(this.a,this.b,w,!1,x)
return y}},
ip:{"^":"n;a,b",
$1:function(a){H.x(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
iq:{"^":"n:0;a,b",
$0:function(){this.b.a9(this.a.a)}},
im:{"^":"n;a,b,c",
$1:function(a){H.x(a,H.o(this.b,0))
P.kf(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
io:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.df()
throw H.c(x)}catch(w){z=H.Z(w)
y=H.aF(w)
$.C.toString
this.a.O(z,y)}}},
il:{"^":"b;"},
a_:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
k4:{"^":"b;",$ismP:1},
kl:{"^":"n:0;a,b",
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
jA:{"^":"k4;",
dS:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.C){a.$0()
return}P.e4(null,null,this,a,-1)}catch(x){z=H.Z(x)
y=H.aF(x)
P.c_(null,null,this,z,H.f(y,"$isR"))}},
dT:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.C){a.$1(b)
return}P.e5(null,null,this,a,b,-1,c)}catch(x){z=H.Z(x)
y=H.aF(x)
P.c_(null,null,this,z,H.f(y,"$isR"))}},
dj:function(a,b){return new P.jC(this,H.i(a,{func:1,ret:b}),b)},
bp:function(a){return new P.jB(this,H.i(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.jD(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bS:function(a,b){H.i(a,{func:1,ret:b})
if($.C===C.d)return a.$0()
return P.e4(null,null,this,a,b)},
aD:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.C===C.d)return a.$1(b)
return P.e5(null,null,this,a,b,c,d)},
dR:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.C===C.d)return a.$2(b,c)
return P.km(null,null,this,a,b,c,d,e,f)}},
jC:{"^":"n;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jB:{"^":"n:1;a,b",
$0:function(){return this.a.dS(this.b)}},
jD:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dT(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dk:function(a,b,c){H.bh(a)
return H.w(H.ku(a,new H.di(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
ab:function(a,b){return new H.di(0,0,[a,b])},
a4:function(a,b,c,d){return new P.jl(0,0,[d])},
hd:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bi()
C.a.l(y,a)
try{P.ki(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.dy(b,H.kK(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cr(b)
y=$.bi()
C.a.l(y,a)
try{x=z
x.a=P.dy(x.gV(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.bi(),z<y.length;++z)if(a===y[z])return!0
return!1},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
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
try{C.a.l($.bi(),a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.f5(a,new P.ht(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.bi()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
jl:{"^":"jf;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dR(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbz")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbz")!=null}else return this.cQ(b)},
cQ:function(a){var z=this.d
if(z==null)return!1
return this.as(this.bd(z,a),a)>=0},
l:function(a,b){var z,y
H.x(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.b6(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.b6(y,b)}else return this.cM(0,b)},
cM:function(a,b){var z,y,x
H.x(b,H.o(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.bb(b)
x=z[y]
if(x==null)z[y]=[this.aw(b)]
else{if(this.as(x,b)>=0)return!1
x.push(this.aw(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bg(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bg(this.c,b)
else return this.d0(0,b)},
d0:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bd(z,b)
x=this.as(y,b)
if(x<0)return!1
this.bk(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.au()}},
b6:function(a,b){H.x(b,H.o(this,0))
if(H.f(a[b],"$isbz")!=null)return!1
a[b]=this.aw(b)
return!0},
bg:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbz")
if(z==null)return!1
this.bk(z)
delete a[b]
return!0},
au:function(){this.r=this.r+1&67108863},
aw:function(a){var z,y
z=new P.bz(H.x(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.au()
return z},
bk:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.au()},
bb:function(a){return J.am(a)&0x3ffffff},
bd:function(a,b){return a[this.bb(b)]},
as:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aK(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bz:{"^":"b;a,0b,0c"},
dR:{"^":"b;a,b,0c,0d,$ti",
sb9:function(a){this.d=H.x(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aL(z))
else{z=this.c
if(z==null){this.sb9(null)
return!1}else{this.sb9(H.x(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb0:1,
p:{
jm:function(a,b,c){var z=new P.dR(a,b,[c])
z.c=a.e
return z}}},
jf:{"^":"i7;"},
hp:{"^":"jn;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dl(a,this.gj(a),0,[H.bg(this,a,"p",0)])},
q:function(a,b){return this.h(a,b)},
dG:function(a,b,c,d){var z,y,x
H.x(b,d)
H.i(c,{func:1,ret:d,args:[d,H.bg(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aL(a))}return y},
k:function(a){return P.ci(a,"[","]")}},
dm:{"^":"U;"},
ht:{"^":"n:7;a,b",
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
H.i(b,{func:1,ret:-1,args:[H.bg(this,a,"U",0),H.bg(this,a,"U",1)]})
for(z=J.bH(this.gG(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aX(this.gG(a))},
k:function(a){return P.dn(a)},
$isJ:1},
i8:{"^":"b;$ti",
F:function(a,b){var z
for(z=J.bH(H.w(b,"$isj",this.$ti,"$asj"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ci(this,"{","}")},
$isj:1,
$ismf:1},
i7:{"^":"i8;"},
jn:{"^":"b+p;"}}],["","",,P,{"^":"",
fY:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b6(a)+"'"},
bM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bm(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fY(a)},
db:function(a){return new P.j_(a)},
aI:function(a){H.c5(H.e(a))},
S:{"^":"b;"},
"+bool":0,
bL:{"^":"b;a,b",
C:function(a,b){if(b==null)return!1
return b instanceof P.bL&&this.a===b.a&&!0},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isbL").a)},
gv:function(a){var z=this.a
return(z^C.e.bh(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fM(H.hZ(this))
y=P.bo(H.hX(this))
x=P.bo(H.hT(this))
w=P.bo(H.hU(this))
v=P.bo(H.hW(this))
u=P.bo(H.hY(this))
t=P.fN(H.hV(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isX:1,
$asX:function(){return[P.bL]},
p:{
fM:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a}}},
aj:{"^":"F;"},
"+double":0,
aZ:{"^":"b;a",
S:function(a,b){return C.e.S(this.a,H.f(b,"$isaZ").a)},
C:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isaZ").a)},
k:function(a){var z,y,x,w,v
z=new P.fV()
y=this.a
if(y<0)return"-"+new P.aZ(0-y).k(0)
x=z.$1(C.e.W(y,6e7)%60)
w=z.$1(C.e.W(y,1e6)%60)
v=new P.fU().$1(y%1e6)
return""+C.e.W(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isX:1,
$asX:function(){return[P.aZ]},
p:{
fT:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fU:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fV:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
cp:{"^":"O;",
k:function(a){return"Throw of null."}},
an:{"^":"O;a,b,c,d",
gaq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gap:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaq()+y+x
if(!this.a)return w
v=this.gap()
u=P.bM(this.b)
return w+v+": "+H.e(u)},
p:{
cW:function(a){return new P.an(!1,null,null,a)},
cX:function(a,b,c){return new P.an(!0,a,b,c)}}},
du:{"^":"an;e,f,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bR:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bQ:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
hb:{"^":"an;e,j:f>,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
G:function(a,b,c,d,e){var z=H.M(e==null?J.aX(b):e)
return new P.hb(b,z,!0,a,c,"Index out of range")}}},
iA:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.iA(a)}}},
iy:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dG:function(a){return new P.iy(a)}}},
cq:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bT:function(a){return new P.cq(a)}}},
fG:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bM(z))+"."},
p:{
aL:function(a){return new P.fG(a)}}},
dx:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fL:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
j_:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bp:{"^":"b;"},
E:{"^":"F;"},
"+int":0,
j:{"^":"b;$ti",
aG:["cm",function(a,b){var z=H.cA(this,"j",0)
return new H.dH(this,H.i(b,{func:1,ret:P.S,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a3(P.bQ(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.G(b,this,"index",null,y))},
k:function(a){return P.hd(this,"(",")")}},
b0:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
z:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"b;",$isX:1,
$asX:function(){return[P.F]}},
"+num":0,
b:{"^":";",
C:function(a,b){return this===b},
gv:function(a){return H.b5(this)},
k:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.k(this)}},
R:{"^":"b;"},
d:{"^":"b;",$isX:1,
$asX:function(){return[P.d]},
$ishO:1},
"+String":0,
cr:{"^":"b;V:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dy:function(a,b,c){var z=J.bH(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fW:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.r
z=new H.dH(new W.a7(y),H.i(new W.fX(),{func:1,ret:P.S,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a3(H.df())
w=x.gA(x)
if(x.t())H.a3(H.he())
return H.f(w,"$isT")},
da:function(a){H.f(a,"$isL")
return"wheel"},
b_:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f8(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
iX:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.iR(a)
if(!!J.y(z).$isL)return z
return}else return H.f(a,"$isL")},
e8:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.d)return a
return z.dk(a,b)},
K:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kX:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fr:{"^":"K;",
k:function(a){return String(a)},
$isfr:1,
"%":"HTMLAnchorElement"},
kY:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cY:{"^":"K;",$iscY:1,"%":"HTMLBaseElement"},
fw:{"^":"h;","%":";Blob"},
bJ:{"^":"K;",$isbJ:1,"%":"HTMLBodyElement"},
bn:{"^":"K;0n:height=,0m:width=",
aH:function(a,b,c){if(c!=null)return this.cV(a,b,P.kr(c,null))
return this.cW(a,b)},
ca:function(a,b){return this.aH(a,b,null)},
cV:function(a,b,c){return a.getContext(b,c)},
cW:function(a,b){return a.getContext(b)},
$isbn:1,
"%":"HTMLCanvasElement"},
fz:{"^":"h;",
ae:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cf:{"^":"h;",
by:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dE:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ai:function(a){return P.a2(a.getContextAttributes())},
$iscf:1,
"%":"CanvasRenderingContext2D"},
l2:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fH:{"^":"cg;",$isfH:1,"%":"CSSNumericValue|CSSUnitValue"},
l3:{"^":"fK;0j:length=","%":"CSSPerspective"},
ao:{"^":"h;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fI:{"^":"iP;0j:length=",
aL:function(a,b){var z=this.cX(a,this.an(a,b))
return z==null?"":z},
an:function(a,b){var z,y
z=$.eq()
y=z[b]
if(typeof y==="string")return y
y=this.da(a,b)
z[b]=y
return y},
da:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fO()+b
if(z in a)return z
return b},
cX:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fJ:{"^":"b;",
gn:function(a){return this.aL(a,"height")},
gm:function(a){return this.aL(a,"width")}},
cg:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fK:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l5:{"^":"cg;0j:length=","%":"CSSTransformValue"},
l6:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
l8:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fP:{"^":"K;","%":"HTMLDivElement"},
fQ:{"^":"r;",
de:function(a,b){return a.adoptNode(b)},
cb:function(a,b){return a.getElementById(b)},
dN:function(a,b){return a.querySelector(b)},
gbM:function(a){return new W.bx(a,"mousedown",!1,[W.V])},
gbN:function(a){return new W.bx(a,"mousemove",!1,[W.V])},
gbO:function(a){return new W.bx(a,"mouseup",!1,[W.V])},
gbP:function(a){return new W.bx(a,H.t(W.da(a)),!1,[W.aP])},
"%":"XMLDocument;Document"},
l9:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fR:{"^":"h;",
dw:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
la:{"^":"iT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$isW",[P.F],"$asW")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.W,P.F]]},
$isv:1,
$asv:function(){return[[P.W,P.F]]},
$asp:function(){return[[P.W,P.F]]},
$isj:1,
$asj:function(){return[[P.W,P.F]]},
$isa:1,
$asa:function(){return[[P.W,P.F]]},
$asq:function(){return[[P.W,P.F]]},
"%":"ClientRectList|DOMRectList"},
fS:{"^":"h;",
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
lb:{"^":"iV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lc:{"^":"h;0j:length=","%":"DOMTokenList"},
T:{"^":"r;0dU:tagName=",
gdh:function(a){return new W.iW(a)},
k:function(a){return a.localName},
L:["ak",function(a,b,c,d){var z,y,x,w
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
y=(y&&C.L).dw(y,"")
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
z=$.af.body;(z&&C.p).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.ch;(z&&C.E).cc(z,x)
z=$.ch
w=(z&&C.E).du(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cP(x)
c.aQ(w)
C.t.de(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dv",null,null,"ge1",5,5,null],
ce:function(a,b,c,d){a.textContent=null
this.H(a,this.L(a,b,c,d))},
cd:function(a,b){return this.ce(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
d1:function(a,b){return a.removeAttribute(b)},
gbM:function(a){return new W.bw(a,"mousedown",!1,[W.V])},
gbN:function(a){return new W.bw(a,"mousemove",!1,[W.V])},
gbO:function(a){return new W.bw(a,"mouseup",!1,[W.V])},
gbP:function(a){return new W.bw(a,H.t(W.da(a)),!1,[W.aP])},
$isT:1,
"%":";Element"},
fX:{"^":"n:20;",
$1:function(a){return!!J.y(H.f(a,"$isr")).$isT}},
le:{"^":"K;0n:height=,0m:width=","%":"HTMLEmbedElement"},
P:{"^":"h;",$isP:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
dd:function(a,b,c,d){H.i(c,{func:1,args:[W.P]})
if(c!=null)this.cN(a,b,c,!1)},
cN:function(a,b,c,d){return a.addEventListener(b,H.aV(H.i(c,{func:1,args:[W.P]}),1),!1)},
d3:function(a,b,c,d){return a.removeEventListener(b,H.aV(H.i(c,{func:1,args:[W.P]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dW|dX|e_|e0"},
aq:{"^":"fw;",$isaq:1,"%":"File"},
lv:{"^":"j1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"FileList"},
lw:{"^":"L;0j:length=","%":"FileWriter"},
lz:{"^":"K;0j:length=","%":"HTMLFormElement"},
ar:{"^":"h;",$isar:1,"%":"Gamepad"},
h7:{"^":"K;","%":"HTMLHeadElement"},
lA:{"^":"h;0j:length=","%":"History"},
lB:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h8:{"^":"fQ;","%":"HTMLDocument"},
lC:{"^":"K;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lF:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lG:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
aM:{"^":"K;0n:height=,0m:width=",$isaM:1,"%":"HTMLImageElement"},
lI:{"^":"K;0n:height=,0m:width=","%":"HTMLInputElement"},
b1:{"^":"dF;",$isb1:1,"%":"KeyboardEvent"},
hs:{"^":"h;",
k:function(a){return String(a)},
$ishs:1,
"%":"Location"},
hw:{"^":"K;","%":"HTMLAudioElement;HTMLMediaElement"},
lP:{"^":"h;0j:length=","%":"MediaList"},
lQ:{"^":"jp;",
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
"%":"MIDIInputMap"},
hy:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lR:{"^":"jq;",
h:function(a,b){return P.a2(a.get(H.t(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.hz(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hz:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
au:{"^":"h;",$isau:1,"%":"MimeType"},
lS:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isv:1,
$asv:function(){return[W.au]},
$asp:function(){return[W.au]},
$isj:1,
$asj:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"MimeTypeArray"},
V:{"^":"dF;",
gbL:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.y(W.e2(z)).$isT)throw H.c(P.A("offsetX is only supported on elements"))
y=H.f(W.e2(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.aT()
if(typeof x!=="number")return x.aT()
return new P.b4(C.u.bV(z-u),C.u.bV(x-v),w)}},
$isV:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"hp;a",
ga6:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bT("No elements"))
if(y>1)throw H.c(P.bT("More than one element"))
return z.firstChild},
F:function(a,b){var z,y,x,w,v
H.w(b,"$isj",[W.r],"$asj")
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
return new W.dc(z,z.length,-1,[H.bg(C.Z,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asp:function(){return[W.r]},
$asj:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"L;0dM:previousSibling=",
dO:function(a){var z=a.parentNode
if(z!=null)J.bF(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cl(a):z},
H:function(a,b){return a.appendChild(b)},
d2:function(a,b){return a.removeChild(b)},
d4:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hJ:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
m0:{"^":"K;0n:height=,0m:width=","%":"HTMLObjectElement"},
m2:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
m3:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"Plugin"},
m5:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isv:1,
$asv:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isj:1,
$asj:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"PluginArray"},
m7:{"^":"V;0n:height=,0m:width=","%":"PointerEvent"},
i0:{"^":"h;",
du:function(a,b){return a.createContextualFragment(b)},
cc:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mc:{"^":"jE;",
h:function(a,b){return P.a2(a.get(H.t(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.i4(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i4:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
md:{"^":"h;0n:height=,0m:width=","%":"Screen"},
me:{"^":"K;0j:length=","%":"HTMLSelectElement"},
ax:{"^":"L;",$isax:1,"%":"SourceBuffer"},
mg:{"^":"dX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isv:1,
$asv:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isj:1,
$asj:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SourceBufferList"},
ay:{"^":"h;",$isay:1,"%":"SpeechGrammar"},
mh:{"^":"jK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$isv:1,
$asv:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isj:1,
$asj:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"SpeechGrammarList"},
az:{"^":"h;0j:length=",$isaz:1,"%":"SpeechRecognitionResult"},
mk:{"^":"jO;",
h:function(a,b){return this.be(a,H.t(b))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cZ(a,z)
if(y==null)return
b.$2(y,this.be(a,y))}},
gG:function(a){var z=H.m([],[P.d])
this.D(a,new W.ij(z))
return z},
gj:function(a){return a.length},
be:function(a,b){return a.getItem(b)},
cZ:function(a,b){return a.key(b)},
$asU:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
ij:{"^":"n:21;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aA:{"^":"h;",$isaA:1,"%":"CSSStyleSheet|StyleSheet"},
ir:{"^":"K;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.fW("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).F(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
mn:{"^":"K;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga6(z)
x.toString
z=new W.a7(x)
w=z.ga6(z)
y.toString
w.toString
new W.a7(y).F(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mo:{"^":"K;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga6(z)
y.toString
x.toString
new W.a7(y).F(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"K;",$isdA:1,"%":"HTMLTemplateElement"},
mp:{"^":"h;0m:width=","%":"TextMetrics"},
aB:{"^":"L;",$isaB:1,"%":"TextTrack"},
aC:{"^":"L;",$isaC:1,"%":"TextTrackCue|VTTCue"},
mq:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaC")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aC]},
$isv:1,
$asv:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isj:1,
$asj:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"TextTrackCueList"},
mr:{"^":"e0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaB")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aB]},
$isv:1,
$asv:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isj:1,
$asj:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TextTrackList"},
ms:{"^":"h;0j:length=","%":"TimeRanges"},
aD:{"^":"h;",$isaD:1,"%":"Touch"},
mt:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaD")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aD]},
$isv:1,
$asv:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isj:1,
$asj:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"TouchList"},
mu:{"^":"h;0j:length=","%":"TrackDefaultList"},
dF:{"^":"P;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mI:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mL:{"^":"hw;0n:height=,0m:width=","%":"HTMLVideoElement"},
mM:{"^":"L;0j:length=","%":"VideoTrackList"},
mN:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
mO:{"^":"h;0m:width=","%":"VTTRegion"},
aP:{"^":"V;",
gdA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isaP:1,
"%":"WheelEvent"},
iE:{"^":"L;",
gdg:function(a){var z,y,x
z=P.F
y=new P.Q(0,$.C,[z])
x=H.i(new W.iF(new P.jS(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cU(a)
this.d5(a,W.e8(x,z))
return y},
d5:function(a,b){return a.requestAnimationFrame(H.aV(H.i(b,{func:1,ret:-1,args:[P.F]}),1))},
cU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iF:{"^":"n:22;a",
$1:function(a){var z=this.a
a=H.be(H.cD(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a3(P.bT("Future already completed"))
z.a9(a)}},
dK:{"^":"r;",$isdK:1,"%":"Attr"},
mU:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isv:1,
$asv:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isj:1,
$asj:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"CSSRuleList"},
mV:{"^":"fS;",
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
mW:{"^":"k8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isv:1,
$asv:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"GamepadList"},
n0:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asp:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n1:{"^":"kc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$isv:1,
$asv:function(){return[W.az]},
$asp:function(){return[W.az]},
$isj:1,
$asj:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"SpeechRecognitionResultList"},
n2:{"^":"ke;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aA]},
$isv:1,
$asv:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isj:1,
$asj:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"StyleSheetList"},
iN:{"^":"dm;cT:a<",
D:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gG(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gG:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.f(z[w],"$isdK")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asU:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iW:{"^":"iN;a",
h:function(a,b){return J.cb(this.a,H.t(b))},
gj:function(a){return this.gG(this).length}},
bx:{"^":"ik;a,b,c,$ti"},
bw:{"^":"bx;a,b,c,$ti"},
iY:{"^":"il;a,b,c,d,e,$ti",
sd_:function(a){this.d=H.i(a,{func:1,args:[W.P]})},
dn:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.P]})
if(x)J.eN(z,this.c,y,!1)}this.b=null
this.sd_(null)
return},
p:{
ah:function(a,b,c,d,e){var z=W.e8(new W.iZ(c),W.P)
if(z!=null&&!0)J.eP(a,b,z,!1)
return new W.iY(0,a,b,z,!1,[e])}}},
iZ:{"^":"n:23;a",
$1:function(a){return this.a.$1(H.f(a,"$isP"))}},
by:{"^":"b;a",
cJ:function(a){var z,y
z=$.cH()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.kA())
for(y=0;y<12;++y)z.i(0,C.w[y],W.kB())}},
X:function(a){return $.eG().u(0,W.b_(a))},
P:function(a,b,c){var z,y,x
z=W.b_(a)
y=$.cH()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c0(x.$4(a,b,c,this))},
$isac:1,
p:{
dO:function(a){var z,y
z=document.createElement("a")
y=new W.jF(z,window.location)
y=new W.by(y)
y.cJ(a)
return y},
mZ:[function(a,b,c,d){H.f(a,"$isT")
H.t(b)
H.t(c)
H.f(d,"$isby")
return!0},"$4","kA",16,0,13],
n_:[function(a,b,c,d){var z,y,x
H.f(a,"$isT")
H.t(b)
H.t(c)
z=H.f(d,"$isby").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kB",16,0,13]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dc(a,this.gj(a),-1,[H.bg(this,a,"q",0)])}},
ds:{"^":"b;a",
X:function(a){return C.a.bm(this.a,new W.hL(a))},
P:function(a,b,c){return C.a.bm(this.a,new W.hK(a,b,c))},
$isac:1},
hL:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isac").X(this.a)}},
hK:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isac").P(this.a,this.b,this.c)}},
jG:{"^":"b;",
cK:function(a,b,c,d){var z,y,x
this.a.F(0,c)
z=b.aG(0,new W.jH())
y=b.aG(0,new W.jI())
this.b.F(0,z)
x=this.c
x.F(0,C.X)
x.F(0,y)},
X:function(a){return this.a.u(0,W.b_(a))},
P:["co",function(a,b,c){var z,y
z=W.b_(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.df(c)
else if(y.u(0,"*::"+b))return this.d.df(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isac:1},
jH:{"^":"n:10;",
$1:function(a){return!C.a.u(C.w,H.t(a))}},
jI:{"^":"n:10;",
$1:function(a){return C.a.u(C.w,H.t(a))}},
jT:{"^":"jG;e,a,b,c,d",
P:function(a,b,c){if(this.co(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dZ:function(){var z,y,x,w,v
z=P.d
y=P.cm(C.v,z)
x=H.o(C.v,0)
w=H.i(new W.jU(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jT(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cK(null,new H.hu(C.v,w,[x,z]),v,null)
return y}}},
jU:{"^":"n:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jR:{"^":"b;",
X:function(a){var z=J.y(a)
if(!!z.$isdw)return!1
z=!!z.$isH
if(z&&W.b_(a)==="foreignObject")return!1
if(z)return!0
return!1},
P:function(a,b,c){if(b==="is"||C.i.cg(b,"on"))return!1
return this.X(a)},
$isac:1},
dc:{"^":"b;a,b,c,0d,$ti",
sbc:function(a){this.d=H.x(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbc(J.bj(this.a,z))
this.c=z
return!0}this.sbc(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb0:1},
iQ:{"^":"b;a",$isL:1,$isdI:1,p:{
iR:function(a){if(a===window)return H.f(a,"$isdI")
else return new W.iQ(a)}}},
ac:{"^":"b;"},
jF:{"^":"b;a,b",$ismH:1},
e1:{"^":"b;a",
aQ:function(a){new W.k3(this).$2(a,null)},
a0:function(a,b){if(b==null)J.cP(a)
else J.bF(b,a)},
d8:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f6(a)
x=J.cb(y.gcT(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.bm(a)}catch(t){H.Z(t)}try{u=W.b_(a)
this.d7(H.f(a,"$isT"),b,z,v,u,H.f(y,"$isJ"),H.t(x))}catch(t){if(H.Z(t) instanceof P.an)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.X(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.P(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.m(z.slice(0),[H.o(z,0)])
for(x=f.gG(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.P(a,J.fi(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.d1(z,v)}}if(!!J.y(a).$isdA)this.aQ(a.content)},
$islZ:1},
k3:{"^":"n:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d8(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f7(z)}catch(w){H.Z(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bF(u,v)}else J.bF(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
iP:{"^":"h+fJ;"},
iS:{"^":"h+p;"},
iT:{"^":"iS+q;"},
iU:{"^":"h+p;"},
iV:{"^":"iU+q;"},
j0:{"^":"h+p;"},
j1:{"^":"j0+q;"},
jg:{"^":"h+p;"},
jh:{"^":"jg+q;"},
jp:{"^":"h+U;"},
jq:{"^":"h+U;"},
jr:{"^":"h+p;"},
js:{"^":"jr+q;"},
jt:{"^":"h+p;"},
ju:{"^":"jt+q;"},
jx:{"^":"h+p;"},
jy:{"^":"jx+q;"},
jE:{"^":"h+U;"},
dW:{"^":"L+p;"},
dX:{"^":"dW+q;"},
jJ:{"^":"h+p;"},
jK:{"^":"jJ+q;"},
jO:{"^":"h+U;"},
jV:{"^":"h+p;"},
jW:{"^":"jV+q;"},
e_:{"^":"L+p;"},
e0:{"^":"e_+q;"},
k_:{"^":"h+p;"},
k0:{"^":"k_+q;"},
k5:{"^":"h+p;"},
k6:{"^":"k5+q;"},
k7:{"^":"h+p;"},
k8:{"^":"k7+q;"},
k9:{"^":"h+p;"},
ka:{"^":"k9+q;"},
kb:{"^":"h+p;"},
kc:{"^":"kb+q;"},
kd:{"^":"h+p;"},
ke:{"^":"kd+q;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.ab(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
kr:function(a,b){var z={}
a.D(0,new P.ks(z))
return z},
d6:function(){var z=$.d5
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d5=z}return z},
fO:function(){var z,y
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
ks:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kT:function(a){return Math.sqrt(a)},
dP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ji:{"^":"b;",
dL:function(){return Math.random()}},
b4:{"^":"b;Y:a>,R:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.ai(b,"$isb4",[P.F],null)&&this.a==J.bI(b)&&this.b==b.gR(b)},
gv:function(a){var z,y,x
z=J.am(this.a)
y=J.am(this.b)
y=P.dP(P.dP(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jz:{"^":"b;"},
W:{"^":"jz;$ti"}}],["","",,P,{"^":"",fs:{"^":"h;",$isfs:1,"%":"SVGAnimatedLength"},lf:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},lg:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lh:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},li:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},lj:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lk:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},ll:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lm:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},ln:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lr:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},ls:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lt:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lu:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lx:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},ly:{"^":"bq;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h6:{"^":"bq;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bq:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lH:{"^":"bq;0n:height=,0m:width=","%":"SVGImageElement"},b2:{"^":"h;",$isb2:1,"%":"SVGLength"},lN:{"^":"jk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb2")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b2]},
$isj:1,
$asj:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$asq:function(){return[P.b2]},
"%":"SVGLengthList"},lO:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"h;",$isb3:1,"%":"SVGNumber"},m_:{"^":"jw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb3")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isj:1,
$asj:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asq:function(){return[P.b3]},
"%":"SVGNumberList"},m4:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},m6:{"^":"h;0j:length=","%":"SVGPointList"},m8:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},m9:{"^":"h6;0n:height=,0m:width=","%":"SVGRectElement"},dw:{"^":"H;",$isdw:1,"%":"SVGScriptElement"},ml:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.t(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
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
C.a.l(z,new W.jR())
c=new W.e1(new W.ds(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dv(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga6(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mm:{"^":"bq;0n:height=,0m:width=","%":"SVGSVGElement"},b7:{"^":"h;",$isb7:1,"%":"SVGTransform"},mv:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb7")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b7]},
$isj:1,
$asj:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$asq:function(){return[P.b7]},
"%":"SVGTransformList"},mJ:{"^":"bq;0n:height=,0m:width=","%":"SVGUseElement"},jj:{"^":"h+p;"},jk:{"^":"jj+q;"},jv:{"^":"h+p;"},jw:{"^":"jv+q;"},jP:{"^":"h+p;"},jQ:{"^":"jP+q;"},k1:{"^":"h+p;"},k2:{"^":"k1+q;"}}],["","",,P,{"^":"",ag:{"^":"b;",$isj:1,
$asj:function(){return[P.aj]},
$isa:1,
$asa:function(){return[P.aj]},
$isiw:1}}],["","",,P,{"^":"",kZ:{"^":"h;0j:length=","%":"AudioBuffer"},l_:{"^":"iO;",
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
$2:function(a,b){return C.a.l(this.a,a)}},l0:{"^":"L;0j:length=","%":"AudioTrackList"},fv:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m1:{"^":"fv;0j:length=","%":"OfflineAudioContext"},iO:{"^":"h+U;"}}],["","",,P,{"^":"",fx:{"^":"h;",$isfx:1,"%":"WebGLBuffer"},i_:{"^":"h;",$isi_:1,"%":"WebGLProgram"},ma:{"^":"h;",
bl:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bv:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bA:function(a){return a.createTexture()},
bC:function(a,b){return a.depthMask(b)},
bD:function(a,b){return a.disable(b)},
bE:function(a,b,c,d){return a.drawArrays(b,c,d)},
bF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bG:function(a,b){return a.enable(b)},
bH:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.a2(a.getContextAttributes())},
aI:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
bQ:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aE:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.y(g)
if(!!z.$isaM)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,g)
return}if(!!z.$isbn)z=!0
else z=!1
if(z){this.az(a,b,c,d,e,f,g)
return}throw H.c(P.cW("Incorrect number or type of arguments"))},
bT:function(a,b,c,d,e,f,g){return this.aE(a,b,c,d,e,f,g,null,null,null)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
bW:function(a,b,c){return a.uniform1f(b,c)},
bX:function(a,b,c){return a.uniform1fv(b,c)},
bY:function(a,b,c){return a.uniform1i(b,c)},
bZ:function(a,b,c){return a.uniform1iv(b,c)},
c_:function(a,b,c){return a.uniform2fv(b,c)},
c0:function(a,b,c){return a.uniform3fv(b,c)},
c1:function(a,b,c){return a.uniform4fv(b,c)},
c2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c4:function(a,b){return a.useProgram(b)},
c5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c7:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mb:{"^":"h;",
di:function(a,b){return a.beginTransformFeedback(b)},
dl:function(a,b){return a.bindVertexArray(b)},
dz:function(a){return a.createVertexArray()},
dB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dD:function(a){return a.endTransformFeedback()},
dX:function(a,b,c,d){this.dc(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
dc:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dY:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bl:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bv:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bA:function(a){return a.createTexture()},
bC:function(a,b){return a.depthMask(b)},
bD:function(a,b){return a.disable(b)},
bE:function(a,b,c,d){return a.drawArrays(b,c,d)},
bF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bG:function(a,b){return a.enable(b)},
bH:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.a2(a.getContextAttributes())},
aI:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
bQ:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aE:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.y(g)
if(!!z.$isaM)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,g)
return}if(!!z.$isbn)z=!0
else z=!1
if(z){this.az(a,b,c,d,e,f,g)
return}throw H.c(P.cW("Incorrect number or type of arguments"))},
bT:function(a,b,c,d,e,f,g){return this.aE(a,b,c,d,e,f,g,null,null,null)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
bW:function(a,b,c){return a.uniform1f(b,c)},
bX:function(a,b,c){return a.uniform1fv(b,c)},
bY:function(a,b,c){return a.uniform1i(b,c)},
bZ:function(a,b,c){return a.uniform1iv(b,c)},
c_:function(a,b,c){return a.uniform2fv(b,c)},
c0:function(a,b,c){return a.uniform3fv(b,c)},
c1:function(a,b,c){return a.uniform4fv(b,c)},
c2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c4:function(a,b){return a.useProgram(b)},
c5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c7:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i9:{"^":"h;",$isi9:1,"%":"WebGLShader"},is:{"^":"h;",$isis:1,"%":"WebGLTexture"},ix:{"^":"h;",$isix:1,"%":"WebGLUniformLocation"},iC:{"^":"h;",$isiC:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mi:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.a2(this.cY(a,b))},
i:function(a,b,c){H.f(c,"$isJ")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cY:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jM:{"^":"h+p;"},jN:{"^":"jM+q;"}}],["","",,G,{"^":"",
iG:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a2(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bz(a,b)
z.aR(a,y,c)
z.bv(a,y)
x=H.c0(z.aN(a,y,35713))
if(x!=null&&!x){w=z.aM(a,y)
P.aI("E:Compilation failed:")
P.aI("E:"+G.iG(c))
P.aI("E:Failure:")
P.aI(C.i.I("E:",w))
throw H.c(w)}return y},
dd:function(a,b){var z,y,x
H.w(a,"$isa",[T.B],"$asa")
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
h0:function(a,b){var z,y
H.w(a,"$isa",[T.a6],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bI(a[y]))
if(y>=a.length)return H.l(a,y)
C.f.i(b,z+1,J.ca(a[y]))}return b},
h1:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.aO],"$asa")
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
h_:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.bj(a[y],0))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+1,J.bj(a[y],1))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+2,J.bj(a[y],2))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+3,J.bj(a[y],3))}return b},
je:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.as(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.aj],u=[T.aO],t=[T.B],s=[T.a6];y.t();){r=y.d
if(!x.af(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ed>0)H.c5("I: "+r)
continue}q=z.h(0,r)
switch($.a8().h(0,r).a){case"vec2":b.a_(r,G.h0(H.bE(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.dd(H.bE(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.h1(H.bE(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.bY(H.bE(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.h_(H.bE(q,"$isa",w,"$asa"),null),4)
break}}},
bP:{"^":"b;"},
bV:{"^":"bP;",
b_:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dE(H.kx(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.as(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a2(z,"\n")}},
fy:{"^":"ie;"},
fB:{"^":"b;0a,b",
bI:function(a,b,c){J.f3(this.a,b)
if(c>0)J.fo(this.a,b,c)},
c6:function(a,b,c,d,e,f,g,h){J.c6(this.a,34962,b)
J.fp(this.a,c,d,e,!1,g,h)}},
ap:{"^":"b;aA:a>,b,c",p:{
I:function(a,b,c){return new G.ap(a,b,c)}}},
fZ:{"^":"b;"},
h5:{"^":"b;a,b,c,d,e",
aY:function(a){switch($.a8().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.a6]))
break
case"vec3":this.e.i(0,a,H.m([],[T.B]))
break
case"vec4":this.e.i(0,a,H.m([],[T.aO]))
break
case"float":this.e.i(0,a,H.m([],[P.aj]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.E]]))
break}},
cs:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.B],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.ap(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.B(new Float32Array(3))
v.E(w)
C.a.l(z,v)}},
cq:function(a,b){var z,y,x,w,v,u
z=[T.a6]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<3;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.a6(v))}},
cr:function(a,b){var z,y,x,w,v
z=[T.B]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<3;++x){w=b[x]
v=new T.B(new Float32Array(3))
v.E(w)
z.l(y,v)}},
cv:function(){var z,y,x,w,v,u,t
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
C.a.i(x,w,t.gaA(t))
C.a.i(x,w+1,t.ge0(t))
C.a.i(x,w+2,t.gdm(t))
C.a.i(x,w+3,t.gaA(t))
C.a.i(x,w+4,t.gdm(t))
C.a.i(x,w+5,t.ge2(t))
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"],[P.d])
for(y=this.e,x=new H.as(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a8().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a2(z," ")}},
dC:{"^":"b;a,b,c"},
dB:{"^":"b;a,b,c"},
hv:{"^":"bV;d,a,b,c",p:{
dp:function(a,b){var z=P.ab(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!1)
z.i(0,"cBlendEquation",b)
z.i(0,"cStencilFunc",$.eu())
return new G.hv(z,a,!1,!0)}}},
hx:{"^":"bP;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sar:function(a){this.cx=H.w(a,"$isa",[P.E],"$asa")},
aX:function(a,b,c){var z,y
C.i.ao(a,0)
H.f(b,"$isag")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c6(z.a,34962,y)
J.cL(z.a,34962,b,35048)},
cw:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cI(a,0)===105
if(z&&this.z===0)this.z=C.e.cp(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.aX(a,b,c)
w=$.a8().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bG(x.a,this.e)
x.bI(0,v,z?1:0)
x.c6(0,y.h(0,a),v,w.aZ(),5126,!1,0,0)},
aW:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c8(y.a))
this.ch=a
this.aX("aPosition",a,3)
x=$.a8().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bG(y.a,this.e)
y.bI(0,w,0)
y.c6(0,z.h(0,"aPosition"),w,x.aZ(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.as(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a2(y,"  ")},
p:{
dq:function(a,b,c,d){var z=P.d
return new G.hx(b,J.eX(b.a),c,P.ab(z,P.b),d,0,-1,P.ab(z,P.ag),"meshdata:"+a,!1,!0)}}},
hP:{"^":"bV;",
ct:function(a,b){var z
if(typeof a!=="number")return a.dZ()
if(typeof b!=="number")return H.aG(b)
z=a/b
if(this.z===z)return
this.z=z
this.b0()},
b0:function(){var z,y,x,w,v,u
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
b_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.B(new Float32Array(3))
u.a5(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.E(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.y(t)
y=!!z.$isaO
q=y?t.gc8(t):1
if(!!z.$isB){p=t.gY(t)
s=t.gR(t)
r=t.gah(t)
t=p}else if(y){p=t.gY(t)
s=t.gR(t)
r=t.gah(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aG(t)
y=u[4]
if(typeof s!=="number")return H.aG(s)
x=u[8]
if(typeof r!=="number")return H.aG(r)
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
d.E(this.db)
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
ld:{"^":"b;"},
i3:{"^":"bP;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cB:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cO(w.a,v,t))}},
cE:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.as(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.af(0,w))C.a.l(x,w)}for(z=this.x,z=P.jm(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.as(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cI(t,0)){case 117:if(w.af(0,t)){s=b.h(0,t)
if(v.af(0,t))H.c5("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.a8().h(0,t)
if(r==null)H.a3("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.M(s)
J.cc(x.a,q,s)}else if(!!J.y(s).$ishc)J.fm(x.a,q,s)
break
case"float":if(r.c===0){H.ec(s)
J.fk(x.a,q,s)}else if(!!J.y(s).$isag)J.fl(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.al(s,"$isat").a
J.cV(x.a,q,!1,t)}else if(!!J.y(s).$isag)J.cV(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.al(s,"$iscn").a
J.cU(x.a,q,!1,t)}else if(!!J.y(s).$isag)J.cU(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cT(p,q,H.al(s,"$isaO").a)
else J.cT(p,q,H.f(s,"$isag"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cS(p,q,H.al(s,"$isB").a)
else J.cS(p,q,H.f(s,"$isag"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cR(p,q,H.al(s,"$isa6").a)
else J.cR(p,q,H.f(s,"$isag"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aG(t)
J.cJ(x.a,33984+t)
t=H.al(s,"$iscs").b
J.bk(x.a,3553,t)
t=this.ch
J.cc(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.I()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aG(t)
J.cJ(x.a,33984+t)
t=H.al(s,"$iscs").b
J.bk(x.a,34067,t)
t=this.ch
J.cc(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.I()
this.ch=t+1
break
default:H.c5("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aK(s,!0)
p=x.a
if(t)J.bl(p,2929)
else J.c9(p,2929)
break
case"cStencilFunc":H.al(s,"$isdC")
t=s.a
p=x.a
if(t===1281)J.c9(p,2960)
else{J.bl(p,2960)
p=s.b
o=s.c
J.fg(x.a,t,p,o)}break
case"cDepthWrite":H.c0(s)
J.eY(x.a,s)
break
case"cBlendEquation":H.al(s,"$isdB")
t=s.a
p=x.a
if(t===1281)J.c9(p,3042)
else{J.bl(p,3042)
p=s.b
o=s.c
J.eS(x.a,p,o)
J.eR(x.a,t)}break}++u
break}}n=P.fT(0,0,0,Date.now()-new P.bL(z,!1).a,0,0)
""+u
n.k(0)},
cu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bV],"$asa")
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
y.b5()}for(x=0;x<2;++x){w=b[x]
this.cH(w.a,w.b_())}y=this.Q
y.a1(0)
for(v=a.cy,v=new H.as(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cE()
if(u.length!==0)P.aI("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bG(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cw()
s=a.Q
r=a.z
if(t)J.eQ(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f1(q,y,v,s,0,r)
else J.f0(q,y,v,s,0)}else{s=z.a
if(r>1)J.f_(s,y,0,v,r)
else J.eZ(s,y,0,v)}if(t)J.f4(z.a)},
al:function(a,b){return this.cu(a,b,null)},
p:{
dv:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eV(b.a)
t=G.dL(b.a,35633,x)
J.cK(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cK(b.a,u,s)
if(v.length>0)J.fj(b.a,u,v,35980)
J.fe(b.a,u)
if(!H.c0(J.fd(b.a,u,35714)))H.a3(J.fc(b.a,u))
z=new G.i3(b,c,d,u,P.cm(c.c,z),P.ab(z,P.b),P.ab(z,z),y,a,!1,!0)
z.cB(a,b,c,d)
return z}}},
D:{"^":"b;a,b,c",
aZ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ia:{"^":"b;a,0b,c,d,e,f,r,x",
aU:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.aj(y)},
a7:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.aj(y)},
aV:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.aj(z)},
cC:function(a,b){this.b=this.cI(!0,H.w(a,"$isa",[P.d],"$asa"),b)},
a8:function(a){return this.cC(a,null)},
cI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
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
C.a.l(w,"void main(void) {")
C.a.F(w,b)
C.a.l(w,"}")
return C.a.a2(w,"\n")},
p:{
bS:function(a){var z,y
z=P.d
y=[z]
return new G.ia(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.ab(z,P.E))}}},
ie:{"^":"bP;"},
it:{"^":"b;a,b,c,d,e,f,r"},
cs:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ha:{"^":"cs;f,a,b,c,d,e",p:{
de:function(a,b,c,d,e){var z=J.eW(a.a)
J.bk(a.a,e,z)
J.ff(a.a,37440,1)
J.bk(a.a,e,z)
J.fh(a.a,e,0,6408,6408,5121,c)
J.cQ(a.a,e,10240,9729)
J.cQ(a.a,e,10241,9729)
J.fb(a.a)
J.bk(a.a,e,null)
return new G.ha(c,b,z,e,a,new G.it(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
iB:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eF().dL()
if(v>=w)return H.l(x,v)
x[v]=(u-0.5)*c}y=G.dq(z,a.d,0,a.e.x)
y.aW(x)
return y},
jo:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iX("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).an(y,"float")
y.setProperty(x,"left","")
x=C.z.an(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.H(z,v)}return z},
hQ:{"^":"hP;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dQ:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aI("size change "+H.e(y)+" "+H.e(x))
this.ct(y,x)
J.fq(this.go.a,0,0,y,x)},"$1","gdP",4,0,11]},
ih:{"^":"b;",
cD:function(a,b,c){var z,y
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
ii:{"^":"ih;e,f,a,b,c,d",
cG:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dW(y,2)+" fps"
C.r.cd(this.c,b)
x=C.e.W(30*C.A.dq(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.r.H(z,w)},
cF:function(a){return this.cG(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
h9:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.ap]
y=H.m([],z)
x=[T.B]
w=H.m([],x)
C.a.F(y,$.es())
C.a.F(w,$.et())
for(v=0;v<a;++v,y=u){u=H.m([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.N)(y),++s){r=y[s]
q=J.cM(r)
if(q>=w.length)return H.l(w,q)
q=w[q]
p=new T.B(new Float32Array(3))
p.E(q)
q=r.b
if(q>=w.length)return H.l(w,q)
p.l(0,w[q])
p.T(0,0.5)
p.B(0)
if(q>=w.length)return H.l(w,q)
o=w[q]
n=new T.B(new Float32Array(3))
n.E(o)
o=r.c
if(o>=w.length)return H.l(w,o)
n.l(0,w[o])
n.T(0,0.5)
n.B(0)
if(o>=w.length)return H.l(w,o)
m=w[o]
l=new T.B(new Float32Array(3))
l.E(m)
m=r.a
if(m>=w.length)return H.l(w,m)
l.l(0,w[m])
l.T(0,0.5)
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
C.a.l(u,new G.ap(k,j,i))}}h=new G.h5(!1,H.m([],z),H.m([],[G.fZ]),H.m([],x),P.ab(P.d,[P.a,,]))
h.aY("aTexUV")
h.aY("aNormal")
for(z=y.length,t=[T.a6],s=0;s<y.length;y.length===z||(0,H.N)(y),++s){r=y[s]
q=J.cM(r)
o=w.length
if(q>=o)return H.l(w,q)
g=w[q]
q=r.b
if(q>=o)return H.l(w,q)
f=w[q]
q=r.c
if(q>=o)return H.l(w,q)
e=w[q]
q=g.a
o=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
m=new Float32Array(2)
m[0]=0.5*(1+o*0.3183098861837907)
m[1]=q*0.3183098861837907
q=f.a
o=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
d=new Float32Array(2)
d[0]=0.5*(1+o*0.3183098861837907)
d[1]=q*0.3183098861837907
q=e.a
o=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
c=new Float32Array(2)
c[0]=0.5*(1+o*0.3183098861837907)
c[1]=q*0.3183098861837907
h.cr("aNormal",H.m([g,f,e],x))
q=new T.B(new Float32Array(3))
q.E(g)
q.T(0,a0)
o=new T.B(new Float32Array(3))
o.E(f)
o.T(0,a0)
b=new T.B(new Float32Array(3))
b.E(e)
b.T(0,a0)
h.cs(H.m([q,o,b],x))
h.cq("aTexUV",H.m([new T.a6(m),new T.a6(d),new T.a6(c)],t))}return h}}],["","",,D,{"^":"",
hq:function(a){var z,y,x,w
z=W.aM
y=new P.Q(0,$.C,[z])
x=document.createElement("img")
w=new W.bw(x,"load",!1,[W.P])
w.gdF(w).a3(new D.hr(new P.iH(y,[z]),x),-1)
x.src=a
return y},
hr:{"^":"n:11;a,b",
$1:function(a){H.f(a,"$isP")
return this.a.ds(0,this.b)}},
hj:{"^":"b;a,b,c",
cz:function(a){var z,y
a=document
z=W.b1
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.i(new D.hl(this),y),!1,z)
W.ah(a,"keyup",H.i(new D.hm(this),y),!1,z)},
p:{
hk:function(a){var z=P.E
z=new D.hj(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cz(a)
return z}}},
hl:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isb1")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hm:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isb1")
z=this.a
z.a.bR(0,a.which)
z.c.l(0,a.which)}},
hA:{"^":"b;a,b,c,d,e,f,r,x",
cA:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbN(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.i(new D.hC(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbM(a)
y=H.o(x,0)
W.ah(x.a,x.b,H.i(new D.hD(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbO(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.i(new D.hE(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbP(a)
x=H.o(z,0)
W.ah(z.a,z.b,H.i(new D.hF(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hB:function(a){var z=P.E
z=new D.hA(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cA(a)
return z}}},
hC:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isV")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.M(y.gbL(a).a)
z.x=H.M(y.gbL(a).b)
z.d=a.movementX
z.e=a.movementY}},
hD:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
P.aI("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hE:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.l(0,a.button)}},
hF:{"^":"n:26;a",
$1:function(a){H.f(a,"$isaP")
a.preventDefault()
this.a.f=H.M(C.af.gdA(a))}},
hN:{"^":"fy;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bC:function(a){var z,y
z=C.f.dG(H.w(a,"$isj",[P.b],"$asj"),0,new A.kz(),P.E)
if(typeof z!=="number")return H.aG(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kz:{"^":"n:27;",
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
gv:function(a){return A.bC(this.a)},
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
return new T.B(z)}},at:{"^":"b;a",
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
gv:function(a){return A.bC(this.a)},
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
return new T.aO(z)},
U:function(){var z=this.a
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
gv:function(a){return A.bC(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gY:function(a){return this.a[0]},
gR:function(a){return this.a[1]}},B:{"^":"b;a",
a5:function(a,b,c){var z=this.a
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
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bC(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbJ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
B:function(a){var z,y,x
z=Math.sqrt(this.gbJ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aB:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bB:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.B(new Float32Array(3))
z.a5(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
l:function(a,b){var z,y
z=H.f(b,"$isB").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
T:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
gY:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
p:{
a0:function(a,b,c){var z=new T.B(new Float32Array(3))
z.a5(a,b,c)
return z}}},aO:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aO){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bC(this.a)},
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
gY:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
gc8:function(a){return this.a[3]}}}],["","",,A,{"^":"",
ej:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z={}
y=document
x=C.t.cb(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ii(0,0,x,w,y.createElement("div"),R.jo("blue","gray",90,30))
u.cD(x,"blue","gray")
t=H.f(C.t.dN(y,"#webgl-canvas"),"$isbn")
s=new G.fB(t)
x=P.d
v=P.b
r=(t&&C.y).aH(t,"webgl2",P.dk(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a3(P.db('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.fa(r))
if($.ed>0)P.aI("I: "+q)
J.eT(r,0,0,0,1)
J.bl(r,2929)
J.bl(r,2884)
r=new Float32Array(3)
q=D.hk(null)
p=D.hB(t)
o=new T.at(new Float32Array(16))
o.U()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hN(5,10,0,0,new T.B(r),-0.02,q,p,o,new T.B(n),new T.B(m),new T.B(l),new T.B(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.at(new Float32Array(16))
r.U()
q=new T.at(new Float32Array(16))
q.U()
j=new R.hQ(t,s,k,50,1,0.1,1000,r,q,new T.at(new Float32Array(16)),P.ab(x,v),"perspective",!1,!0)
j.b0()
j.dQ(null)
x=W.P
W.ah(window,"resize",H.i(j.gdP(),{func:1,ret:-1,args:[x]}),!1,x)
i=G.dv("spheres",s,$.eL(),$.eK())
h=B.h9(3,1,!0)
g=G.dq("icosahedron-3",i.d,4,i.e.x)
g.aW(G.dd(h.d,null))
x=H.w(h.cv(),"$isa",[P.E],"$asa")
r=g.d
g.y=J.c8(r.a)
q=g.ch.length
if(q<768){g.sar(new Uint8Array(H.bY(x)))
g.Q=5121}else if(q<196608){g.sar(new Uint16Array(H.bY(x)))
g.Q=5123}else{g.sar(new Uint32Array(H.bY(x)))
g.Q=5125}J.bG(r.a,g.e)
x=g.y
q=g.cx
J.c6(r.a,34963,x)
J.cL(r.a,34963,q,35048)
G.je(h,g)
f=new T.at(new Float32Array(16))
f.U()
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
d=D.hq($.en)
d.a3(new A.kN(s,e),null)
q=$.eH()
C.a.l(q,d)
c=G.dv("stars",s,$.eJ(),$.eI())
b=G.dp("stars",r)
a=y.createElement("canvas")
a.width=64
a.height=64
a0=H.f(C.y.ca(a,"2d"),"$iscf")
a1=(a0&&C.q).by(a0,32,32,1,32,32,22);(a1&&C.m).ae(a1,0,"gray")
C.m.ae(a1,1,"black")
a0.fillStyle=a1
C.q.dE(a0,0,0,64,64)
a1=C.q.by(a0,32,32,1,32,32,6);(a1&&C.m).ae(a1,0,"white")
C.m.ae(a1,1,"gray")
a0.globalAlpha=0.9
a0.fillStyle=a1
a0.arc(32,32,4,0,6.283185307179586,!1)
a0.fill()
y=b.d
y.i(0,"uTexture",G.de(s,"Utils::Particles",a,null,3553))
y.i(0,"uPointSize",1000)
x=new T.at(new Float32Array(16))
x.U()
y.i(0,"uModelMatrix",x)
a2=R.iB(c,2000,100)
z.a=0
P.h2(q,null,!1,v).a3(new A.kO(new A.kM(z,k,f,i,g,e,j,c,a2,b,u)),null)},
kN:{"^":"n:28;a,b",
$1:function(a){H.f(a,"$isaM")
this.b.d.i(0,"uTexture",G.de(this.a,$.en,a,null,3553))}},
kM:{"^":"n:29;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cD(b2)
if(typeof b2!=="number")return b2.aT()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aP()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aP()
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
if(typeof v!=="number")return v.aP()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.u.dr(y.id,-1.4707963267948965,1.4707963267948965)
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
t=y.k2.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.B(new Float32Array(3))
m.a5(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.B(u)
l.E(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
l.B(0)
k=m.bB(l)
k.B(0)
j=l.bB(k)
j.B(0)
t=k.aB(v)
r=j.aB(v)
v=l.aB(v)
i=k.a
h=i[0]
g=j.a
f=g[0]
e=u[0]
d=i[1]
c=g[1]
b=u[1]
i=i[2]
g=g[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=g
q[8]=i
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=f
q[0]=h
q[12]=p
q[13]=o
q[14]=n
h=y.f
f=h.a
f[0]=q[2]
f[1]=q[6]
f[2]=q[10]
y=-y.k1
a=Math.sqrt(h.gbJ())
p=f[0]/a
o=f[1]/a
n=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
f=o*a1
a5=p*n*a2+f
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-f
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
f=q[4]
h=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
i=q[6]
g=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a3+f*a6+h*a9
q[1]=e*a3+d*a6+c*a9
q[2]=b*a3+i*a6+g*a9
q[3]=u*a3+t*a6+r*a9
q[4]=y*a4+f*a7+h*b0
q[5]=e*a4+d*a7+c*b0
q[6]=b*a4+i*a7+g*b0
q[7]=u*a4+t*a7+r*b0
q[8]=y*a5+f*a8+h*b1
q[9]=e*a5+d*a8+c*b1
q[10]=b*a5+i*a8+g*b1
q[11]=u*a5+t*a8+r*b1
w.c.a1(0)
w.b.a1(0)
x.e=0
x.d=0
x.f=0
x.c.a1(0)
x.b.a1(0)
x=this.c
x.U()
w=this.d
r=this.e
t=this.f
u=this.r
q=[G.bV]
w.al(r,H.m([t,u],q))
x=x.a
x[14]=0
x[13]=0
x[12]=1.5
w.al(r,H.m([t,u],q))
this.x.al(this.y,H.m([this.z,u],q))
C.ag.gdg(window).a3(this,-1)
this.Q.cF(z.a)}},
kO:{"^":"n:30;a",
$1:function(a){H.bh(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.y=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.dg.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.hh.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bf=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.ee=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.kv=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.kw=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.ef=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.bB=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.aK=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.y(a).C(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kv(a).S(a,b)}
J.bj=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kJ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).h(a,b)}
J.cI=function(a,b){return J.ef(a).ao(a,b)}
J.bF=function(a,b){return J.k(a).d2(a,b)}
J.eN=function(a,b,c,d){return J.k(a).d3(a,b,c,d)}
J.eO=function(a,b,c){return J.k(a).d4(a,b,c)}
J.cJ=function(a,b){return J.k(a).bl(a,b)}
J.eP=function(a,b,c,d){return J.k(a).dd(a,b,c,d)}
J.cK=function(a,b,c){return J.k(a).bn(a,b,c)}
J.eQ=function(a,b){return J.k(a).di(a,b)}
J.c6=function(a,b,c){return J.k(a).bo(a,b,c)}
J.bk=function(a,b,c){return J.k(a).bq(a,b,c)}
J.bG=function(a,b){return J.k(a).dl(a,b)}
J.eR=function(a,b){return J.k(a).br(a,b)}
J.eS=function(a,b,c){return J.k(a).bs(a,b,c)}
J.cL=function(a,b,c,d){return J.k(a).bt(a,b,c,d)}
J.eT=function(a,b,c,d,e){return J.k(a).bu(a,b,c,d,e)}
J.eU=function(a,b){return J.kw(a).K(a,b)}
J.c7=function(a,b,c){return J.bf(a).dt(a,b,c)}
J.c8=function(a){return J.k(a).bw(a)}
J.eV=function(a){return J.k(a).bx(a)}
J.eW=function(a){return J.k(a).bA(a)}
J.eX=function(a){return J.k(a).dz(a)}
J.eY=function(a,b){return J.k(a).bC(a,b)}
J.c9=function(a,b){return J.k(a).bD(a,b)}
J.eZ=function(a,b,c,d){return J.k(a).bE(a,b,c,d)}
J.f_=function(a,b,c,d,e){return J.k(a).dB(a,b,c,d,e)}
J.f0=function(a,b,c,d,e){return J.k(a).bF(a,b,c,d,e)}
J.f1=function(a,b,c,d,e,f){return J.k(a).dC(a,b,c,d,e,f)}
J.f2=function(a,b){return J.ee(a).q(a,b)}
J.bl=function(a,b){return J.k(a).bG(a,b)}
J.f3=function(a,b){return J.k(a).bH(a,b)}
J.f4=function(a){return J.k(a).dD(a)}
J.f5=function(a,b){return J.k(a).D(a,b)}
J.cM=function(a){return J.bB(a).gaA(a)}
J.f6=function(a){return J.k(a).gdh(a)}
J.am=function(a){return J.y(a).gv(a)}
J.bH=function(a){return J.ee(a).gw(a)}
J.aX=function(a){return J.bf(a).gj(a)}
J.f7=function(a){return J.k(a).gdM(a)}
J.f8=function(a){return J.k(a).gdU(a)}
J.f9=function(a){return J.bB(a).gc8(a)}
J.bI=function(a){return J.bB(a).gY(a)}
J.ca=function(a){return J.bB(a).gR(a)}
J.cN=function(a){return J.bB(a).gah(a)}
J.cb=function(a,b){return J.k(a).Z(a,b)}
J.fa=function(a){return J.k(a).ai(a)}
J.fb=function(a){return J.k(a).aI(a)}
J.fc=function(a,b){return J.k(a).aJ(a,b)}
J.fd=function(a,b,c){return J.k(a).aK(a,b,c)}
J.cO=function(a,b,c){return J.k(a).aO(a,b,c)}
J.fe=function(a,b){return J.k(a).bK(a,b)}
J.ff=function(a,b,c){return J.k(a).bQ(a,b,c)}
J.cP=function(a){return J.k(a).dO(a)}
J.fg=function(a,b,c,d){return J.k(a).aS(a,b,c,d)}
J.fh=function(a,b,c,d,e,f,g){return J.k(a).bT(a,b,c,d,e,f,g)}
J.cQ=function(a,b,c,d){return J.k(a).bU(a,b,c,d)}
J.fi=function(a){return J.ef(a).dV(a)}
J.bm=function(a){return J.y(a).k(a)}
J.fj=function(a,b,c,d){return J.k(a).dX(a,b,c,d)}
J.fk=function(a,b,c){return J.k(a).bW(a,b,c)}
J.fl=function(a,b,c){return J.k(a).bX(a,b,c)}
J.cc=function(a,b,c){return J.k(a).bY(a,b,c)}
J.fm=function(a,b,c){return J.k(a).bZ(a,b,c)}
J.cR=function(a,b,c){return J.k(a).c_(a,b,c)}
J.cS=function(a,b,c){return J.k(a).c0(a,b,c)}
J.cT=function(a,b,c){return J.k(a).c1(a,b,c)}
J.cU=function(a,b,c,d){return J.k(a).c2(a,b,c,d)}
J.cV=function(a,b,c,d){return J.k(a).c3(a,b,c,d)}
J.fn=function(a,b){return J.k(a).c4(a,b)}
J.fo=function(a,b,c){return J.k(a).dY(a,b,c)}
J.fp=function(a,b,c,d,e,f,g){return J.k(a).c5(a,b,c,d,e,f,g)}
J.fq=function(a,b,c,d,e){return J.k(a).c7(a,b,c,d,e)}
I.aH=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bJ.prototype
C.y=W.bn.prototype
C.m=W.fz.prototype
C.q=W.cf.prototype
C.z=W.fI.prototype
C.r=W.fP.prototype
C.L=W.fR.prototype
C.M=W.h7.prototype
C.t=W.h8.prototype
C.N=J.h.prototype
C.a=J.br.prototype
C.A=J.dg.prototype
C.e=J.dh.prototype
C.u=J.bs.prototype
C.i=J.bt.prototype
C.U=J.bu.prototype
C.f=H.hG.prototype
C.n=H.hI.prototype
C.Z=W.hJ.prototype
C.D=J.hR.prototype
C.E=W.i0.prototype
C.J=W.ir.prototype
C.x=J.b8.prototype
C.af=W.aP.prototype
C.ag=W.iE.prototype
C.K=new P.ji()
C.d=new P.jA()
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
C.V=H.m(I.aH(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.m(I.aH(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.m(I.aH([]),[P.z])
C.X=H.m(I.aH([]),[P.d])
C.v=H.m(I.aH(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.m(I.aH(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a_=new G.D("vec3","vertex btangents",0)
C.c=new G.D("vec3","",0)
C.a0=new G.D("vec4","delta from light",0)
C.o=new G.D("","",0)
C.F=new G.D("vec3","vertex coordinates",0)
C.a1=new G.D("vec3","vertex binormals",0)
C.G=new G.D("vec4","for wireframe",0)
C.a2=new G.D("vec4","per vertex color",0)
C.a3=new G.D("float","for normal maps",0)
C.j=new G.D("mat4","",0)
C.a5=new G.D("mat4","",4)
C.a4=new G.D("mat4","",128)
C.b=new G.D("float","",0)
C.a6=new G.D("float","",4)
C.a7=new G.D("float","depth for shadowmaps",0)
C.h=new G.D("sampler2D","",0)
C.a8=new G.D("float","for bump maps",0)
C.a9=new G.D("vec2","texture uvs",0)
C.aa=new G.D("float","time since program start in sec",0)
C.k=new G.D("vec2","",0)
C.ab=new G.D("samplerCube","",0)
C.l=new G.D("vec4","",0)
C.ac=new G.D("vec3","vertex normals",0)
C.ad=new G.D("sampler2DShadow","",0)
C.H=new G.D("vec3","per vertex color",0)
C.I=new G.D("mat3","",0)
C.ae=new G.D("vec3","vertex tangents",0)
$.aa=0
$.aY=null
$.cZ=null
$.cu=!1
$.eh=null
$.e9=null
$.em=null
$.c1=null
$.c3=null
$.cB=null
$.aS=null
$.b9=null
$.ba=null
$.cv=!1
$.C=C.d
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
$.jL="  vec3 u = normalize(vec3(uModelMatrix * vec4(aPosition, 1.0)));\n  vec3 n = normalize(uNormalMatrix * aNormal );\n  vec3 r = reflect( u, n );\n  r.z += 1.0;\n  float m = 2.0 * length(r);\n  vTexUV = vec2(r.x/m + 0.5, r.y/m + 0.5);\n"
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
I.$lazy(y,x,w)}})(["l7","er",function(){return H.eg("_$dart_dartClosure")},"lM","cF",function(){return H.eg("_$dart_js")},"mw","ev",function(){return H.ad(H.bU({
toString:function(){return"$receiver$"}}))},"mx","ew",function(){return H.ad(H.bU({$method$:null,
toString:function(){return"$receiver$"}}))},"my","ex",function(){return H.ad(H.bU(null))},"mz","ey",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mC","eB",function(){return H.ad(H.bU(void 0))},"mD","eC",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mB","eA",function(){return H.ad(H.dD(null))},"mA","ez",function(){return H.ad(function(){try{null.$method$}catch(z){return z.message}}())},"mF","eE",function(){return H.ad(H.dD(void 0))},"mE","eD",function(){return H.ad(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mQ","cG",function(){return P.iI()},"n5","bi",function(){return[]},"l4","eq",function(){return{}},"mX","eG",function(){return P.cm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mY","cH",function(){return P.ab(P.d,P.bp)},"mj","eu",function(){return new G.dC(1281,0,4294967295)},"l1","ep",function(){return new G.dB(32774,770,769)},"n3","a8",function(){return P.dk(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a2,"aPosition",C.F,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a0,"vCenter",C.G,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.b,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.d,G.D)},"mK","eF",function(){return C.K},"nb","eJ",function(){var z,y
z=G.bS("PointSpritesV")
y=[P.d]
z.aU(H.m(["aPosition"],y))
z.a7(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.a8(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"na","eI",function(){var z,y
z=G.bS("PointSpritesF")
y=[P.d]
z.a7(H.m(["uTexture"],y))
z.a8(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"lD","es",function(){return H.m([G.I(0,11,5),G.I(0,5,1),G.I(0,1,7),G.I(0,7,10),G.I(0,10,11),G.I(1,5,9),G.I(5,11,4),G.I(11,10,2),G.I(10,7,6),G.I(7,1,8),G.I(3,9,4),G.I(3,4,2),G.I(3,2,6),G.I(3,6,8),G.I(3,8,9),G.I(4,9,5),G.I(2,4,11),G.I(6,2,10),G.I(8,6,7),G.I(9,8,1)],[G.ap])},"ne","eM",function(){return(1+P.kT(5))/2},"lE","et",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eM()
y=T.a0(-1,z,0)
y.B(0)
x=T.a0(1,z,0)
x.B(0)
if(typeof z!=="number")return z.e_()
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
return H.m([y,x,w,v,u,t,s,r,q,p,o,z],[T.B])},"nd","eL",function(){var z,y
z=G.bS("sphereV")
y=[P.d]
z.aU(H.m(["aPosition","aNormal"],y))
z.a7(H.m(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.aV(H.m(["vTexUV"],y))
z.a8(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);",$.jL],y))
return z},"nc","eK",function(){var z,y
z=G.bS("sphereF")
y=[P.d]
z.aV(H.m(["vTexUV"],y))
z.a7(H.m(["uTexture"],y))
z.a8(H.m(["oFragColor = texture(uTexture, vTexUV);"],y))
return z},"n8","eH",function(){return H.m([],[[P.Y,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.z,args:[W.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.S,args:[W.ac]},{func:1,ret:P.S,args:[P.d]},{func:1,ret:-1,args:[W.P]},{func:1,ret:P.z,args:[W.b1]},{func:1,ret:P.S,args:[W.T,P.d,P.d,W.by]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[,P.R]},{func:1,ret:P.z,args:[,],opt:[P.R]},{func:1,ret:[P.Q,,],args:[,]},{func:1,ret:P.S,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.z,args:[P.F]},{func:1,args:[W.P]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.z,args:[W.aP]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:P.z,args:[W.aM]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kV(d||a)
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
Isolate.aH=a.aH
Isolate.bd=a.bd
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
