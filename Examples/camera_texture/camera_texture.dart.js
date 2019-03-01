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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cA(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lE:{"^":"b;a"}}],["","",,J,{"^":"",
cE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cD==null){H.kC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cu("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cH()]
if(v!=null)return v
v=H.kH(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cH(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
E:function(a,b){return a===b},
gA:function(a){return H.b3(a)},
k:["ck",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h8:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isR:1},
dj:{"^":"h;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isz:1},
ck:{"^":"h;",
gA:function(a){return 0},
k:["cm",function(a){return String(a)}]},
hN:{"^":"ck;"},
b6:{"^":"ck;"},
bp:{"^":"ck;",
k:function(a){var z=a[$.et()]
if(z==null)return this.cm(a)
return"JavaScript function for "+H.e(J.bh(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bm:{"^":"h;$ti",
l:function(a,b){H.y(b,H.m(a,0))
if(!!a.fixed$length)H.X(P.A("add"))
a.push(b)},
I:function(a,b){var z
H.x(b,"$isk",[H.m(a,0)],"$ask")
if(!!a.fixed$length)H.X(P.A("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
bh:function(a,b){var z,y
H.i(b,{func:1,ret:P.R,args:[H.m(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aG(a))}return!1},
ce:function(a,b){if(!!a.immutable$list)H.X(P.A("sort"))
H.ia(a,J.kd(),H.m(a,0))},
ae:function(a){return this.ce(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aE(a[z],b))return!0
return!1},
k:function(a){return P.ci(a,"[","]")},
gB:function(a){return new J.fr(a,a.length,0,[H.m(a,0)])},
gA:function(a){return H.b3(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bb(a,b))
return a[b]},
i:function(a,b,c){H.y(c,H.m(a,0))
if(!!a.immutable$list)H.X(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
a[b]=c},
$isv:1,
$asv:I.bc,
$isk:1,
$isa:1,
p:{
h7:function(a,b){return J.cj(H.p(a,[b]))},
cj:function(a){H.bA(a)
a.fixed$length=Array
return a},
lC:[function(a,b){return J.eR(H.em(a,"$isW"),H.em(b,"$isW"))},"$2","kd",8,0,30]}},
lD:{"^":"bm;$ti"},
fr:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.a4(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isaZ:1},
bn:{"^":"h;",
K:function(a,b){var z
H.cF(b)
if(typeof b!=="number")throw H.c(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gab(b)
if(this.gab(a)===z)return 0
if(this.gab(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gab:function(a){return a===0?1/a<0:a<0},
bS:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
dr:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.A(""+a+".ceil()"))},
ds:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.ba(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dX:function(a,b){var z
if(b>20)throw H.c(P.bP(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gab(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
co:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bd(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.bd(a,b)},
bd:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.da(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
da:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.c(H.ba(b))
return a>b},
$isW:1,
$asW:function(){return[P.G]},
$isak:1,
$isG:1},
di:{"^":"bn;",$isF:1},
dh:{"^":"bn;"},
bo:{"^":"h;",
ai:function(a,b){if(b>=a.length)throw H.c(H.bb(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cW(b,null,null))
return a+b},
cg:function(a,b,c){var z
if(c>a.length)throw H.c(P.bP(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cf:function(a,b){return this.cg(a,b,0)},
cj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bQ(b,null,null))
if(b>c)throw H.c(P.bQ(b,null,null))
if(c>a.length)throw H.c(P.bQ(c,null,null))
return a.substring(b,c)},
ci:function(a,b){return this.cj(a,b,null)},
dW:function(a){return a.toLowerCase()},
dv:function(a,b,c){if(c>a.length)throw H.c(P.bP(c,0,a.length,null,null))
return H.kO(a,b,c)},
K:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.ba(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gA:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bb(a,b))
return a[b]},
$isv:1,
$asv:I.bc,
$isW:1,
$asW:function(){return[P.d]},
$ishK:1,
$isd:1}}],["","",,H,{"^":"",
dg:function(){return new P.cr("No element")},
h6:function(){return new P.cr("Too many elements")},
ia:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.F,args:[c,c]})
H.br(a,0,J.aV(a)-1,b,c)},
br:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.i9(a,b,c,d,e)
else H.i8(a,b,c,d,e)},
i9:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.F,args:[e,e]})
for(z=b+1,y=J.aQ(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i8:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.F,args:[a2,a2]})
z=C.e.T(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.T(b+a0,2)
v=w-z
u=w+z
t=J.aQ(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a6(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a6(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a6(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a6(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aE(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a2()
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
if(typeof e!=="number")return e.a2()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a2()
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
H.br(a,b,m-2,a1,a2)
H.br(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aE(a1.$2(t.h(a,m),r),0);)++m
for(;J.aE(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a2()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.br(a,m,l,a1,a2)}else H.br(a,m,l,a1,a2)},
d6:{"^":"k;"},
bN:{"^":"d6;$ti",
gB:function(a){return new H.dm(this,this.gj(this),0,[H.cC(this,"bN",0)])},
aC:function(a,b){return this.cl(0,H.i(b,{func:1,ret:P.R,args:[H.cC(this,"bN",0)]}))}},
dm:{"^":"b;a,b,c,0d,$ti",
saZ:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aQ(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aG(z))
w=this.c
if(w>=x){this.saZ(null)
return!1}this.saZ(y.t(z,w));++this.c
return!0},
$isaZ:1},
hn:{"^":"bN;a,b,$ti",
gj:function(a){return J.aV(this.a)},
t:function(a,b){return this.b.$1(J.f_(this.a,b))},
$asbN:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dH:{"^":"k;a,b,$ti",
gB:function(a){return new H.iz(J.bG(this.a),this.b,this.$ti)}},
iz:{"^":"aZ;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bM:{"^":"b;$ti"}}],["","",,H,{"^":"",
aD:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ku:function(a){return init.types[H.M(a)]},
kF:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isw},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bh(a)
if(typeof z!=="string")throw H.c(H.ba(a))
return z},
b3:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b4:function(a){return H.hO(a)+H.bW(H.al(a),0,null)},
hO:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isb6){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aD(w.length>1&&C.h.ai(w,0)===36?C.h.ci(w,1):w)},
aJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hV:function(a){var z=H.aJ(a).getFullYear()+0
return z},
hT:function(a){var z=H.aJ(a).getMonth()+1
return z},
hP:function(a){var z=H.aJ(a).getDate()+0
return z},
hQ:function(a){var z=H.aJ(a).getHours()+0
return z},
hS:function(a){var z=H.aJ(a).getMinutes()+0
return z},
hU:function(a){var z=H.aJ(a).getSeconds()+0
return z},
hR:function(a){var z=H.aJ(a).getMilliseconds()+0
return z},
bz:function(a){throw H.c(H.ba(a))},
n:function(a,b){if(a==null)J.aV(a)
throw H.c(H.bb(a,b))},
bb:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.M(J.aV(a))
if(!(b<0)){if(typeof z!=="number")return H.bz(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bQ(b,"index",null)},
ba:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ep})
z.name=""}else z.toString=H.ep
return z},
ep:function(){return J.bh(this.dartException)},
X:function(a){throw H.c(a)},
a4:function(a){throw H.c(P.aG(a))},
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dt(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ew()
u=$.ex()
t=$.ey()
s=$.ez()
r=$.eC()
q=$.eD()
p=$.eB()
$.eA()
o=$.eF()
n=$.eE()
m=v.J(y)
if(m!=null)return z.$1(H.cl(H.u(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.cl(H.u(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dt(H.u(y),m))}}return z.$1(new H.iw(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
aR:function(a){var z
if(a==null)return new H.dZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dZ(a)},
kq:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kE:function(a,b,c,d,e,f){H.f(a,"$isbk")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.da("Unsupported number of arguments for wrapped closure"))},
aj:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kE)
a.$identity=z
return z},
fA:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.hZ(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.H()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d0(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ku,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cZ:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d0(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fx:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d0:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fz(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fx(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.H()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aW
if(v==null){v=H.bK("self")
$.aW=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.H()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aW
if(v==null){v=H.bK("self")
$.aW=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fy:function(a,b,c,d){var z,y
z=H.ce
y=H.cZ
switch(b?-1:a){case 0:throw H.c(H.i3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fz:function(a,b){var z,y,x,w,v,u,t,s
z=$.aW
if(z==null){z=H.bK("self")
$.aW=z}y=$.cY
if(y==null){y=H.bK("receiver")
$.cY=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fy(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a7
if(typeof y!=="number")return y.H()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.H()
$.a7=y+1
return new Function(z+y+"}")()},
cA:function(a,b,c,d,e,f,g){return H.fA(a,b,H.M(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a2(a,"String"))},
ee:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"double"))},
cF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"num"))},
bY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a2(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a2(a,"int"))},
cG:function(a,b){throw H.c(H.a2(a,H.aD(H.u(b).substring(3))))},
kM:function(a,b){throw H.c(H.d_(a,H.aD(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cG(a,b)},
am:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.kM(a,b)},
em:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cG(a,b)},
bA:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.c(H.a2(a,"List<dynamic>"))},
kG:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cG(a,b)},
cB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
by:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cB(J.C(a))
if(z==null)return!1
return H.e4(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cw)return a
$.cw=!0
try{if(H.by(a,b))return a
z=H.bB(b)
y=H.a2(a,z)
throw H.c(y)}finally{$.cw=!1}},
bd:function(a,b){if(a!=null&&!H.cz(a,b))H.X(H.a2(a,H.bB(b)))
return a},
e9:function(a){var z,y
z=J.C(a)
if(!!z.$isl){y=H.cB(z)
if(y!=null)return H.bB(y)
return"Closure"}return H.b4(a)},
kP:function(a){throw H.c(new P.fH(H.u(a)))},
ei:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
n2:function(a,b,c){return H.aT(a["$as"+H.e(c)],H.al(b))},
be:function(a,b,c,d){var z
H.u(c)
H.M(d)
z=H.aT(a["$as"+H.e(c)],H.al(b))
return z==null?null:z[d]},
cC:function(a,b,c){var z
H.u(b)
H.M(c)
z=H.aT(a["$as"+H.e(b)],H.al(a))
return z==null?null:z[c]},
m:function(a,b){var z
H.M(b)
z=H.al(a)
return z==null?null:z[b]},
bB:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.x(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aD(a[0].builtin$cls)+H.bW(a,1,b)
if(typeof a=="function")return H.aD(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.e(b[y])}if('func' in a)return H.kc(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.p([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
t=C.h.H(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aC(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aC(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aC(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kp(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bW:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cs("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.k(0)+">"},
kt:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isl){y=H.cB(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.u(b)
H.bA(c)
H.u(d)
if(a==null)return!1
z=H.al(a)
y=J.C(a)
if(y[b]==null)return!1
return H.ec(H.aT(y[d],z),null,c,null)},
bC:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.d_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
ec:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
n0:function(a,b,c){return a.apply(b,H.aT(J.C(b)["$as"+H.e(c)],H.al(b)))},
ek:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.ek(z)}return!1},
cz:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.ek(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.by(a,b)}z=J.C(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cz(a,b))throw H.c(H.a2(a,H.bB(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.e4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"a8" in y.prototype))return!1
w=y.prototype["$as"+"a8"]
v=H.aT(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ec(H.aT(r,z),b,u,d)},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.Z(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.Z(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.Z(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.Z(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kL(m,b,l,d)},
kL:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
n1:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kH:function(a){var z,y,x,w,v,u
z=H.u($.ej.$1(a))
y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eb.$2(a,z))
if(z!=null){y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.en(a,x)
if(v==="*")throw H.c(P.cu(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.en(a,x)},
en:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cE(a,!1,null,!!a.$isw)},
kK:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cE(z,c,null,null)},
kC:function(){if(!0===$.cD)return
$.cD=!0
H.kD()},
kD:function(){var z,y,x,w,v,u,t,s
$.bZ=Object.create(null)
$.c2=Object.create(null)
H.ky()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eo.$1(v)
if(u!=null){t=H.kK(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ky:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aP(C.N,H.aP(C.S,H.aP(C.z,H.aP(C.z,H.aP(C.R,H.aP(C.O,H.aP(C.P(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ej=new H.kz(v)
$.eb=new H.kA(u)
$.eo=new H.kB(t)},
aP:function(a,b){return a(b)||b},
kO:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hY:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hZ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cj(z)
y=z[0]
x=z[1]
return new H.hY(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ir:{"^":"b;a,b,c,d,e,f",
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
ab:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.p([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hI:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dt:function(a,b){return new H.hI(a,b==null?null:b.method)}}},
h9:{"^":"N;a,b,c",
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
return new H.h9(a,y,z?null:b.receiver)}}},
iw:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kQ:{"^":"l:9;a",
$1:function(a){if(!!J.C(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dZ:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
l:{"^":"b;",
k:function(a){return"Closure '"+H.b4(this).trim()+"'"},
gc6:function(){return this},
$isbk:1,
gc6:function(){return this}},
dz:{"^":"l;"},
ic:{"^":"dz;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aD(z)+"'"}},
cd:{"^":"dz;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b3(this.a)
else y=typeof z!=="object"?J.an(z):H.b3(z)
return(y^H.b3(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
p:{
ce:function(a){return a.a},
cZ:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
is:{"^":"N;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.is("TypeError: "+P.bL(a)+": type '"+H.e9(a)+"' is not a subtype of type '"+b+"'")}}},
fv:{"^":"N;a",
k:function(a){return this.a},
p:{
d_:function(a,b){return new H.fv("CastError: "+P.bL(a)+": type '"+H.e9(a)+"' is not a subtype of type '"+b+"'")}}},
i2:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i3:function(a){return new H.i2(a)}}},
dF:{"^":"b;a,0b,0c,0d",
ga9:function(){var z=this.b
if(z==null){z=H.bB(this.a)
this.b=z}return z},
k:function(a){return this.ga9()},
gA:function(a){var z=this.d
if(z==null){z=C.h.gA(this.ga9())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.dF&&this.ga9()===b.ga9()}},
dk:{"^":"dn;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.aq(this,[H.m(this,0)])},
aa:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cS(z,b)}else{y=this.dK(b)
return y}},
dK:function(a){var z=this.d
if(z==null)return!1
return this.aw(this.ap(z,J.an(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a6(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a6(w,b)
x=y==null?null:y.b
return x}else return this.dL(b)},
dL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ap(z,J.an(a)&0x3ffffff)
x=this.aw(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.m(this,0))
H.y(c,H.m(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aq()
this.b=z}this.b0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aq()
this.c=y}this.b0(y,b,c)}else{x=this.d
if(x==null){x=this.aq()
this.d=x}w=J.an(b)&0x3ffffff
v=this.ap(x,w)
if(v==null)this.as(x,w,[this.ar(b,c)])
else{u=this.aw(v,b)
if(u>=0)v[u].b=c
else v.push(this.ar(b,c))}}},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.m(this,0),H.m(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aG(this))
z=z.c}},
b0:function(a,b,c){var z
H.y(b,H.m(this,0))
H.y(c,H.m(this,1))
z=this.a6(a,b)
if(z==null)this.as(a,b,this.ar(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
ar:function(a,b){var z,y
z=new H.he(H.y(a,H.m(this,0)),H.y(b,H.m(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aE(a[y].a,b))return y
return-1},
k:function(a){return P.dp(this)},
a6:function(a,b){return a[b]},
ap:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
cT:function(a,b){delete a[b]},
cS:function(a,b){return this.a6(a,b)!=null},
aq:function(){var z=Object.create(null)
this.as(z,"<non-identifier-key>",z)
this.cT(z,"<non-identifier-key>")
return z},
$isdl:1},
he:{"^":"b;a,b,0c,0d"},
aq:{"^":"d6;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.hf(z,z.r,this.$ti)
y.c=z.e
return y}},
hf:{"^":"b;a,b,0c,0d,$ti",
sb_:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sb_(null)
return!1}else{this.sb_(z.a)
this.c=this.c.c
return!0}}},
$isaZ:1},
kz:{"^":"l:9;a",
$1:function(a){return this.a(a)}},
kA:{"^":"l:22;a",
$2:function(a,b){return this.a(a,b)}},
kB:{"^":"l:19;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kp:function(a){return J.h7(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bV:function(a){var z,y
if(!!J.C(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bb(b,a))},
dq:{"^":"h;",$isdq:1,"%":"ArrayBuffer"},
cp:{"^":"h;",$iscp:1,$isit:1,"%":"DataView;ArrayBufferView;co|dT|dU|dr|dV|dW|as"},
co:{"^":"cp;",
gj:function(a){return a.length},
$isv:1,
$asv:I.bc,
$isw:1,
$asw:I.bc},
dr:{"^":"dU;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ee(c)
H.ac(b,a,a.length)
a[b]=c},
$asbM:function(){return[P.ak]},
$aso:function(){return[P.ak]},
$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
as:{"^":"dW;",
i:function(a,b,c){H.M(c)
H.ac(b,a,a.length)
a[b]=c},
$asbM:function(){return[P.F]},
$aso:function(){return[P.F]},
$isk:1,
$ask:function(){return[P.F]},
$isa:1,
$asa:function(){return[P.F]}},
hz:{"^":"dr;",$isag:1,"%":"Float32Array"},
lN:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lO:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ish4:1,
"%":"Int32Array"},
lP:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lQ:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hA:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ismB:1,
"%":"Uint32Array"},
lR:{"^":"as;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lS:{"^":"as;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dT:{"^":"co+o;"},
dU:{"^":"dT+bM;"},
dV:{"^":"co+o;"},
dW:{"^":"dV+bM;"}}],["","",,P,{"^":"",
iD:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aj(new P.iF(z),1)).observe(y,{childList:true})
return new P.iE(z,y,x)}else if(self.setImmediate!=null)return P.kk()
return P.kl()},
mK:[function(a){self.scheduleImmediate(H.aj(new P.iG(H.i(a,{func:1,ret:-1})),0))},"$1","kj",4,0,5],
mL:[function(a){self.setImmediate(H.aj(new P.iH(H.i(a,{func:1,ret:-1})),0))},"$1","kk",4,0,5],
mM:[function(a){H.i(a,{func:1,ret:-1})
P.jU(0,a)},"$1","kl",4,0,5],
e5:function(a,b){if(H.by(a,{func:1,args:[P.b,P.a1]})){b.toString
return H.i(a,{func:1,ret:null,args:[P.b,P.a1]})}if(H.by(a,{func:1,args:[P.b]})){b.toString
return H.i(a,{func:1,ret:null,args:[P.b]})}throw H.c(P.cW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kf:function(){var z,y
for(;z=$.aN,z!=null;){$.b9=null
y=z.b
$.aN=y
if(y==null)$.b8=null
z.a.$0()}},
mZ:[function(){$.cx=!0
try{P.kf()}finally{$.b9=null
$.cx=!1
if($.aN!=null)$.cI().$1(P.ed())}},"$0","ed",0,0,1],
e8:function(a){var z=new P.dJ(H.i(a,{func:1,ret:-1}))
if($.aN==null){$.b8=z
$.aN=z
if(!$.cx)$.cI().$1(P.ed())}else{$.b8.b=z
$.b8=z}},
ki:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.e8(a)
$.b9=$.b8
return}y=new P.dJ(a)
x=$.b9
if(x==null){y.b=z
$.b9=y
$.aN=y}else{y.b=x.b
x.b=y
$.b9=y
if(y.b==null)$.b8=y}},
kN:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.D
if(C.d===y){P.aO(null,null,C.d,a)
return}y.toString
P.aO(null,null,y,H.i(y.bk(a),z))},
kb:function(a,b,c){a.dn(0)
b.a5(c)},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.ki(new P.kg(z,e))},
e6:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
e7:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kh:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aO:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bk(d):c.dk(d,-1)
P.e8(d)},
iF:{"^":"l:7;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iE:{"^":"l:18;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iG:{"^":"l:0;a",
$0:function(){this.a.$0()}},
iH:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jT:{"^":"b;a,0b,c",
cL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aj(new P.jV(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
jU:function(a,b){var z=new P.jT(!0,0)
z.cL(a,b)
return z}}},
jV:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
dN:{"^":"b;$ti",
du:function(a,b){if(a==null)a=new P.cq()
if(this.a.a!==0)throw H.c(P.bs("Future already completed"))
$.D.toString
this.M(a,b)},
dt:function(a){return this.du(a,null)}},
dK:{"^":"dN;a,$ti",
au:function(a,b){var z
H.bd(b,{futureOr:1,type:H.m(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bs("Future already completed"))
z.cO(b)},
M:function(a,b){this.a.cP(a,b)}},
jO:{"^":"dN;a,$ti",
M:function(a,b){this.a.M(a,b)}},
aB:{"^":"b;0a,b,c,d,e,$ti",
dM:function(a){if(this.c!==6)return!0
return this.b.b.az(H.i(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dJ:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.m(this,1)}
w=this.b.b
if(H.by(z,{func:1,args:[P.b,P.a1]}))return H.bd(w.dS(z,a.a,a.b,null,y,P.a1),x)
else return H.bd(w.az(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
Q:{"^":"b;bc:a<,b,0d7:c<,$ti",
bR:function(a,b,c){var z,y,x,w
z=H.m(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.e5(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Q(0,$.D,[c])
w=b==null?1:3
this.ag(new P.aB(x,w,a,b,[z,c]))
return x},
a_:function(a,b){return this.bR(a,null,b)},
dq:function(a,b){var z,y
z=$.D
y=new P.Q(0,z,this.$ti)
if(z!==C.d)a=P.e5(a,z)
z=H.m(this,0)
this.ag(new P.aB(y,2,b,a,[z,z]))
return y},
bp:function(a){return this.dq(a,null)},
ag:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaB")
this.c=a}else{if(z===2){y=H.f(this.c,"$isQ")
z=y.a
if(z<4){y.ag(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aO(null,null,z,H.i(new P.iY(this,a),{func:1,ret:-1}))}},
b9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaB")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isQ")
y=u.a
if(y<4){u.b9(a)
return}this.a=y
this.c=u.c}z.a=this.a8(a)
y=this.b
y.toString
P.aO(null,null,y,H.i(new P.j4(z,this),{func:1,ret:-1}))}},
a7:function(){var z=H.f(this.c,"$isaB")
this.c=null
return this.a8(z)},
a8:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a5:function(a){var z,y,x
z=H.m(this,0)
H.bd(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isa8",y,"$asa8"))if(H.ai(a,"$isQ",y,null))P.bT(a,this)
else P.dO(a,this)
else{x=this.a7()
H.y(a,z)
this.a=4
this.c=a
P.aM(this,x)}},
M:function(a,b){var z
H.f(b,"$isa1")
z=this.a7()
this.a=8
this.c=new P.P(a,b)
P.aM(this,z)},
cO:function(a){var z
H.bd(a,{futureOr:1,type:H.m(this,0)})
if(H.ai(a,"$isa8",this.$ti,"$asa8")){this.cQ(a)
return}this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j_(this,a),{func:1,ret:-1}))},
cQ:function(a){var z=this.$ti
H.x(a,"$isa8",z,"$asa8")
if(H.ai(a,"$isQ",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j3(this,a),{func:1,ret:-1}))}else P.bT(a,this)
return}P.dO(a,this)},
cP:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.iZ(this,a,b),{func:1,ret:-1}))},
$isa8:1,
p:{
dO:function(a,b){var z,y,x
b.a=1
try{a.bR(new P.j0(b),new P.j1(b),null)}catch(x){z=H.Y(x)
y=H.aR(x)
P.kN(new P.j2(b,z,y))}},
bT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isQ")
if(z>=4){y=b.a7()
b.a=a.a
b.c=a.c
P.aM(b,y)}else{y=H.f(b.c,"$isaB")
b.a=2
b.c=a
a.b9(y)}},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isP")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aM(z.a,b)}y=z.a
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
if(p){H.f(r,"$isP")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.j7(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j6(x,b,r).$0()}else if((y&2)!==0)new P.j5(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.C(y).$isa8){if(y.a>=4){n=H.f(t.c,"$isaB")
t.c=null
b=t.a8(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bT(y,t)
return}}m=b.b
n=H.f(m.c,"$isaB")
m.c=null
b=m.a8(n)
y=x.a
u=x.b
if(!y){H.y(u,H.m(m,0))
m.a=4
m.c=u}else{H.f(u,"$isP")
m.a=8
m.c=u}z.a=m
y=m}}}},
iY:{"^":"l:0;a,b",
$0:function(){P.aM(this.a,this.b)}},
j4:{"^":"l:0;a,b",
$0:function(){P.aM(this.b,this.a.a)}},
j0:{"^":"l:7;a",
$1:function(a){var z=this.a
z.a=0
z.a5(a)}},
j1:{"^":"l:23;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.M(a,b)},
$1:function(a){return this.$2(a,null)}},
j2:{"^":"l:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
j_:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.y(this.b,H.m(z,0))
x=z.a7()
z.a=4
z.c=y
P.aM(z,x)}},
j3:{"^":"l:0;a,b",
$0:function(){P.bT(this.b,this.a)}},
iZ:{"^":"l:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
j7:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bN(H.i(w.d,{func:1}),null)}catch(v){y=H.Y(v)
x=H.aR(v)
if(this.d){w=H.f(this.a.a.c,"$isP").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isP")
else u.b=new P.P(y,x)
u.a=!0
return}if(!!J.C(z).$isa8){if(z instanceof P.Q&&z.gbc()>=4){if(z.gbc()===8){w=this.b
w.b=H.f(z.gd7(),"$isP")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a_(new P.j8(t),null)
w.a=!1}}},
j8:{"^":"l:24;a",
$1:function(a){return this.a}},
j6:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.m(x,0)
v=H.y(this.c,w)
u=H.m(x,1)
this.a.b=x.b.b.az(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Y(t)
y=H.aR(t)
x=this.a
x.b=new P.P(z,y)
x.a=!0}}},
j5:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isP")
w=this.c
if(w.dM(z)&&w.e!=null){v=this.b
v.b=w.dJ(z)
v.a=!1}}catch(u){y=H.Y(u)
x=H.aR(u)
w=H.f(this.a.a.c,"$isP")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.P(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ih:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.D,[P.F])
z.a=0
x=H.m(this,0)
w=H.i(new P.il(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.im(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y},
gdH:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.D,this.$ti)
z.a=null
x=H.m(this,0)
w=H.i(new P.ij(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.ik(y),{func:1,ret:-1})
z.a=W.ah(this.a,this.b,w,!1,x)
return y}},
il:{"^":"l;a,b",
$1:function(a){H.y(a,H.m(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.m(this.b,0)]}}},
im:{"^":"l:0;a,b",
$0:function(){this.b.a5(this.a.a)}},
ij:{"^":"l;a,b,c",
$1:function(a){H.y(a,H.m(this.b,0))
P.kb(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.z,args:[H.m(this.b,0)]}}},
ik:{"^":"l:0;a",
$0:function(){var z,y,x,w
try{x=H.dg()
throw H.c(x)}catch(w){z=H.Y(w)
y=H.aR(w)
$.D.toString
this.a.M(z,y)}}},
ii:{"^":"b;"},
P:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isN:1},
k0:{"^":"b;",$ismI:1},
kg:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
ju:{"^":"k0;",
dT:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.D){a.$0()
return}P.e6(null,null,this,a,-1)}catch(x){z=H.Y(x)
y=H.aR(x)
P.bX(null,null,this,z,H.f(y,"$isa1"))}},
dU:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.d===$.D){a.$1(b)
return}P.e7(null,null,this,a,b,-1,c)}catch(x){z=H.Y(x)
y=H.aR(x)
P.bX(null,null,this,z,H.f(y,"$isa1"))}},
dk:function(a,b){return new P.jw(this,H.i(a,{func:1,ret:b}),b)},
bk:function(a){return new P.jv(this,H.i(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.jx(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bN:function(a,b){H.i(a,{func:1,ret:b})
if($.D===C.d)return a.$0()
return P.e6(null,null,this,a,b)},
az:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.D===C.d)return a.$1(b)
return P.e7(null,null,this,a,b,c,d)},
dS:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.D===C.d)return a.$2(b,c)
return P.kh(null,null,this,a,b,c,d,e,f)}},
jw:{"^":"l;a,b,c",
$0:function(){return this.a.bN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jv:{"^":"l:1;a,b",
$0:function(){return this.a.dT(this.b)}},
jx:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dU(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cm:function(a,b,c){H.bA(a)
return H.x(H.kq(a,new H.dk(0,0,[b,c])),"$isdl",[b,c],"$asdl")},
a9:function(a,b){return new H.dk(0,0,[a,b])},
a0:function(a,b,c,d){return new P.jf(0,0,[d])},
h5:function(a,b,c){var z,y
if(P.cy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.p([],[P.d])
y=$.bf()
C.a.l(y,a)
try{P.ke(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dy(b,H.kG(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cy(a))return b+"..."+c
z=new P.cs(b)
y=$.bf()
C.a.l(y,a)
try{x=z
x.a=P.dy(x.gS(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gS()+c
y=z.gS()
return y.charCodeAt(0)==0?y:y},
cy:function(a){var z,y
for(z=0;y=$.bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
ke:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.d],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cn:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.a4)(a),++x)z.l(0,H.y(a[x],b))
return z},
dp:function(a){var z,y,x
z={}
if(P.cy(a))return"{...}"
y=new P.cs("")
try{C.a.l($.bf(),a)
x=y
x.a=x.gS()+"{"
z.a=!0
J.f2(a,new P.hm(z,y))
z=y
z.a=z.gS()+"}"}finally{z=$.bf()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gS()
return z.charCodeAt(0)==0?z:z},
jf:{"^":"ja;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dS(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbx")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbx")!=null}else return this.cR(b)},
cR:function(a){var z=this.d
if(z==null)return!1
return this.ao(this.b5(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.m(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cv()
this.b=z}return this.b1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cv()
this.c=y}return this.b1(y,b)}else return this.cM(0,b)},
cM:function(a,b){var z,y,x
H.y(b,H.m(this,0))
z=this.d
if(z==null){z=P.cv()
this.d=z}y=this.b3(b)
x=z[y]
if(x==null)z[y]=[this.ak(b)]
else{if(this.ao(x,b)>=0)return!1
x.push(this.ak(b))}return!0},
bM:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ba(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ba(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b5(z,b)
x=this.ao(y,b)
if(x<0)return!1
this.be(y.splice(x,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aj()}},
b1:function(a,b){H.y(b,H.m(this,0))
if(H.f(a[b],"$isbx")!=null)return!1
a[b]=this.ak(b)
return!0},
ba:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbx")
if(z==null)return!1
this.be(z)
delete a[b]
return!0},
aj:function(){this.r=this.r+1&67108863},
ak:function(a){var z,y
z=new P.bx(H.y(a,H.m(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aj()
return z},
be:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aj()},
b3:function(a){return J.an(a)&0x3ffffff},
b5:function(a,b){return a[this.b3(b)]},
ao:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aE(a[y].a,b))return y
return-1},
p:{
cv:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bx:{"^":"b;a,0b,0c"},
dS:{"^":"b;a,b,0c,0d,$ti",
sb2:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sb2(null)
return!1}else{this.sb2(H.y(z.a,H.m(this,0)))
this.c=this.c.b
return!0}}},
$isaZ:1,
p:{
jg:function(a,b,c){var z=new P.dS(a,b,[c])
z.c=a.e
return z}}},
ja:{"^":"i4;"},
hg:{"^":"jh;",$isk:1,$isa:1},
o:{"^":"b;$ti",
gB:function(a){return new H.dm(a,this.gj(a),0,[H.be(this,a,"o",0)])},
t:function(a,b){return this.h(a,b)},
dI:function(a,b,c,d){var z,y,x
H.y(b,d)
H.i(c,{func:1,ret:d,args:[d,H.be(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aG(a))}return y},
k:function(a){return P.ci(a,"[","]")}},
dn:{"^":"T;"},
hm:{"^":"l:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
T:{"^":"b;$ti",
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.be(this,a,"T",0),H.be(this,a,"T",1)]})
for(z=J.bG(this.gF(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aV(this.gF(a))},
k:function(a){return P.dp(a)},
$isJ:1},
i5:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bG(H.x(b,"$isk",this.$ti,"$ask"));z.u();)this.l(0,z.gC(z))},
k:function(a){return P.ci(this,"{","}")},
$isk:1,
$ism9:1},
i4:{"^":"i5;"},
jh:{"^":"b+o;"}}],["","",,P,{"^":"",
fU:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.b4(a)+"'"},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fU(a)},
da:function(a){return new P.iV(a)},
ad:function(a){H.c4(H.e(a))},
R:{"^":"b;"},
"+bool":0,
bi:{"^":"b;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bi&&this.a===b.a&&!0},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isbi").a)},
gA:function(a){var z=this.a
return(z^C.e.bb(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fI(H.hV(this))
y=P.bj(H.hT(this))
x=P.bj(H.hP(this))
w=P.bj(H.hQ(this))
v=P.bj(H.hS(this))
u=P.bj(H.hU(this))
t=P.fJ(H.hR(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isW:1,
$asW:function(){return[P.bi]},
p:{
fI:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bj:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"G;"},
"+double":0,
aX:{"^":"b;a",
P:function(a,b){return C.e.P(this.a,H.f(b,"$isaX").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isaX").a)},
k:function(a){var z,y,x,w,v
z=new P.fR()
y=this.a
if(y<0)return"-"+new P.aX(0-y).k(0)
x=z.$1(C.e.T(y,6e7)%60)
w=z.$1(C.e.T(y,1e6)%60)
v=new P.fQ().$1(y%1e6)
return""+C.e.T(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isW:1,
$asW:function(){return[P.aX]},
p:{
fP:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fQ:{"^":"l:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fR:{"^":"l:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"b;"},
cq:{"^":"N;",
k:function(a){return"Throw of null."}},
aF:{"^":"N;a,b,c,d",
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
u=P.bL(this.b)
return w+v+": "+u},
p:{
cW:function(a,b,c){return new P.aF(!0,a,b,c)}}},
du:{"^":"aF;e,f,a,b,c,d",
gam:function(){return"RangeError"},
gal:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bQ:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bP:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
h3:{"^":"aF;e,j:f>,a,b,c,d",
gam:function(){return"RangeError"},
gal:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a2()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.M(e==null?J.aV(b):e)
return new P.h3(b,z,!0,a,c,"Index out of range")}}},
ix:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.ix(a)}}},
iv:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cu:function(a){return new P.iv(a)}}},
cr:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bs:function(a){return new P.cr(a)}}},
fB:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bL(z)+"."},
p:{
aG:function(a){return new P.fB(a)}}},
dx:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isN:1},
fH:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iV:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bk:{"^":"b;"},
F:{"^":"G;"},
"+int":0,
k:{"^":"b;$ti",
aC:["cl",function(a,b){var z=H.cC(this,"k",0)
return new H.dH(this,H.i(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.X(P.bP(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.h5(this,"(",")")}},
aZ:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
z:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isW:1,
$asW:function(){return[P.G]}},
"+num":0,
b:{"^":";",
E:function(a,b){return this===b},
gA:function(a){return H.b3(this)},
k:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"b;"},
d:{"^":"b;",$isW:1,
$asW:function(){return[P.d]},
$ishK:1},
"+String":0,
cs:{"^":"b;S:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dy:function(a,b,c){var z=J.bG(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gC(z))
while(z.u())}else{a+=H.e(z.gC(z))
for(;z.u();)a=a+c+H.e(z.gC(z))}return a}}}}],["","",,W,{"^":"",
fS:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).L(z,a,b,c)
y.toString
z=W.t
z=new H.dH(new W.a3(y),H.i(new W.fT(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.X(H.dg())
w=x.gC(x)
if(x.u())H.X(H.h6())
return H.f(w,"$isS")},
d9:function(a){H.f(a,"$isK")
return"wheel"},
aY:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Y(x)}return z},
iS:function(a,b){return document.createElement(a)},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dR:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e3:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iM(a)
if(!!J.C(z).$isK)return z
return}else return H.f(a,"$isK")},
ea:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.d)return a
return z.dl(a,b)},
L:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kR:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fp:{"^":"L;",
k:function(a){return String(a)},
$isfp:1,
"%":"HTMLAnchorElement"},
kS:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cX:{"^":"L;",$iscX:1,"%":"HTMLBaseElement"},
cc:{"^":"h;",$iscc:1,"%":";Blob"},
bJ:{"^":"L;",$isbJ:1,"%":"HTMLBodyElement"},
cf:{"^":"L;0n:height=,0m:width=",
c7:function(a,b,c){var z=this.cW(a,b,P.kn(c,null))
return z},
cW:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
kX:{"^":"h;",
ad:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kY:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fC:{"^":"cg;",$isfC:1,"%":"CSSNumericValue|CSSUnitValue"},
l_:{"^":"fF;0j:length=","%":"CSSPerspective"},
ao:{"^":"h;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fD:{"^":"iK;0j:length=",
aH:function(a,b){var z=this.cX(a,this.ah(a,b))
return z==null?"":z},
ah:function(a,b){var z,y
z=$.es()
y=z[b]
if(typeof y==="string")return y
y=this.dc(a,b)
z[b]=y
return y},
dc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fK()+b
if(z in a)return z
return b},
cX:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fE:{"^":"b;",
gn:function(a){return this.aH(a,"height")},
gm:function(a){return this.aH(a,"width")}},
cg:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fF:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l1:{"^":"cg;0j:length=","%":"CSSTransformValue"},
l2:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
l4:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fL:{"^":"L;","%":"HTMLDivElement"},
fM:{"^":"t;",
df:function(a,b){return a.adoptNode(b)},
c8:function(a,b){return a.getElementById(b)},
dO:function(a,b){return a.querySelector(b)},
gbH:function(a){return new W.bv(a,"mousedown",!1,[W.U])},
gbI:function(a){return new W.bv(a,"mousemove",!1,[W.U])},
gbJ:function(a){return new W.bv(a,"mouseup",!1,[W.U])},
gbK:function(a){return new W.bv(a,H.u(W.d9(a)),!1,[W.aL])},
"%":"XMLDocument;Document"},
l5:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fN:{"^":"h;",
dB:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l6:{"^":"iO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isV",[P.G],"$asV")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.V,P.G]]},
$isw:1,
$asw:function(){return[[P.V,P.G]]},
$aso:function(){return[[P.V,P.G]]},
$isk:1,
$ask:function(){return[[P.V,P.G]]},
$isa:1,
$asa:function(){return[[P.V,P.G]]},
$asq:function(){return[[P.V,P.G]]},
"%":"ClientRectList|DOMRectList"},
fO:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isV",[P.G],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isV:1,
$asV:function(){return[P.G]},
"%":";DOMRectReadOnly"},
l7:{"^":"iQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isw:1,
$asw:function(){return[P.d]},
$aso:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
l8:{"^":"h;0j:length=","%":"DOMTokenList"},
S:{"^":"t;0dV:tagName=",
gdi:function(a){return new W.iR(a)},
k:function(a){return a.localName},
L:["af",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d8
if(z==null){z=H.p([],[W.aa])
y=new W.ds(z)
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
$.d8=y
d=y}else d=z
z=$.d7
if(z==null){z=new W.e2(d)
$.d7=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.J).dB(y,"")
$.ae=y
$.ch=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.f(y,"$iscX")
y.href=z.baseURI
z=$.ae.head;(z&&C.K).G(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbJ")}z=$.ae
if(!!this.$isbJ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.o).G(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.V,a.tagName)){z=$.ch;(z&&C.C).cb(z,x)
z=$.ch
w=(z&&C.C).dz(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.G(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cQ(x)
c.aM(w)
C.q.df(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dA",null,null,"ge5",5,5,null],
cd:function(a,b,c,d){a.textContent=null
this.G(a,this.L(a,b,c,d))},
cc:function(a,b){return this.cd(a,b,null,null)},
V:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
gbH:function(a){return new W.bu(a,"mousedown",!1,[W.U])},
gbI:function(a){return new W.bu(a,"mousemove",!1,[W.U])},
gbJ:function(a){return new W.bu(a,"mouseup",!1,[W.U])},
gbK:function(a){return new W.bu(a,H.u(W.d9(a)),!1,[W.aL])},
$isS:1,
"%":";Element"},
fT:{"^":"l:15;",
$1:function(a){return!!J.C(H.f(a,"$ist")).$isS}},
la:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
O:{"^":"h;",$isO:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
de:function(a,b,c,d){H.i(c,{func:1,args:[W.O]})
if(c!=null)this.cN(a,b,c,!1)},
cN:function(a,b,c,d){return a.addEventListener(b,H.aj(H.i(c,{func:1,args:[W.O]}),1),!1)},
d4:function(a,b,c,d){return a.removeEventListener(b,H.aj(H.i(c,{func:1,args:[W.O]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dX|dY|e0|e1"},
af:{"^":"cc;",$isaf:1,"%":"File"},
dc:{"^":"iX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaf")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.af]},
$isw:1,
$asw:function(){return[W.af]},
$aso:function(){return[W.af]},
$isk:1,
$ask:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$isdc:1,
$asq:function(){return[W.af]},
"%":"FileList"},
lr:{"^":"K;0j:length=","%":"FileWriter"},
lu:{"^":"L;0j:length=","%":"HTMLFormElement"},
ap:{"^":"h;",$isap:1,"%":"Gamepad"},
h0:{"^":"L;","%":"HTMLHeadElement"},
lv:{"^":"h;0j:length=","%":"History"},
lw:{"^":"jc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h1:{"^":"fM;","%":"HTMLDocument"},
lx:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
ly:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
df:{"^":"h;0n:height=,0m:width=",$isdf:1,"%":"ImageData"},
lz:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lB:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
b_:{"^":"dG;",$isb_:1,"%":"KeyboardEvent"},
hh:{"^":"h;",
k:function(a){return String(a)},
$ishh:1,
"%":"Location"},
hp:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lJ:{"^":"h;0j:length=","%":"MediaList"},
aI:{"^":"K;",$isaI:1,"%":"MediaStream"},
lK:{"^":"jj;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.d])
this.D(a,new W.hr(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hr:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lL:{"^":"jk;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.d])
this.D(a,new W.hs(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hs:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ar:{"^":"h;",$isar:1,"%":"MimeType"},
lM:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isw:1,
$asw:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isk:1,
$ask:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"MimeTypeArray"},
U:{"^":"dG;",
gbG:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b2(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.C(W.e3(z)).$isS)throw H.c(P.A("offsetX is only supported on elements"))
y=H.f(W.e3(z),"$isS")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b2(u,v,w),"$isb2",w,"$asb2")
if(typeof z!=="number")return z.aP()
if(typeof x!=="number")return x.aP()
return new P.b2(C.r.bS(z-u),C.r.bS(x-v),w)}},
$isU:1,
"%":";DragEvent|MouseEvent"},
hB:{"^":"hC;",
ca:function(a,b,c){var z,y,x,w
z=W.aI
y=new P.Q(0,$.D,[z])
x=new P.dK(y,[z])
w=P.cm(["audio",!1,"video",!0],P.d,null)
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.cY(a,new P.jL([],[]).aB(w),new W.hD(x),new W.hE(x))
return y},
c9:function(a,b){return this.ca(a,!1,b)},
cY:function(a,b,c,d){H.i(c,{func:1,ret:-1,args:[W.aI]})
H.i(d,{func:1,ret:-1,args:[W.bq]})
return a.getUserMedia(b,H.aj(c,1),H.aj(d,1))},
"%":"Navigator"},
hD:{"^":"l:10;a",
$1:function(a){this.a.au(0,H.f(a,"$isaI"))}},
hE:{"^":"l:31;a",
$1:function(a){this.a.dt(H.f(a,"$isbq"))}},
hC:{"^":"h;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
bq:{"^":"h;",$isbq:1,"%":"NavigatorUserMediaError"},
a3:{"^":"hg;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bs("No elements"))
if(y>1)throw H.c(P.bs("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isk",[W.t],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.G(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.eL(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.dd(z,z.length,-1,[H.be(C.Y,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.n(z,b)
return z[b]},
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"K;0dN:previousSibling=",
dP:function(a){var z=a.parentNode
if(z!=null)J.bD(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.ck(a):z},
G:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d5:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hF:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lV:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
lX:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lY:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
at:{"^":"h;0j:length=",$isat:1,"%":"Plugin"},
m_:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isw:1,
$asw:function(){return[W.at]},
$aso:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"PluginArray"},
m1:{"^":"U;0n:height=,0m:width=","%":"PointerEvent"},
hX:{"^":"h;",
dz:function(a,b){return a.createContextualFragment(b)},
cb:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m6:{"^":"jy;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.d])
this.D(a,new W.i1(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i1:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m7:{"^":"h;0n:height=,0m:width=","%":"Screen"},
m8:{"^":"L;0j:length=","%":"HTMLSelectElement"},
au:{"^":"K;",$isau:1,"%":"SourceBuffer"},
ma:{"^":"dY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$aso:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"SourceBufferList"},
av:{"^":"h;",$isav:1,"%":"SpeechGrammar"},
mb:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$aso:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SpeechGrammarList"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"SpeechRecognitionResult"},
me:{"^":"jH;",
h:function(a,b){return this.b6(a,H.u(b))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d_(a,z)
if(y==null)return
b.$2(y,this.b6(a,y))}},
gF:function(a){var z=H.p([],[P.d])
this.D(a,new W.ig(z))
return z},
gj:function(a){return a.length},
b6:function(a,b){return a.getItem(b)},
d_:function(a,b){return a.key(b)},
$asT:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
ig:{"^":"l:32;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ax:{"^":"h;",$isax:1,"%":"CSSStyleSheet|StyleSheet"},
io:{"^":"L;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=W.fS("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).I(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
mh:{"^":"L;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga4(z)
x.toString
z=new W.a3(x)
w=z.ga4(z)
y.toString
w.toString
new W.a3(y).I(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
mi:{"^":"L;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga4(z)
y.toString
x.toString
new W.a3(y).I(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"L;",$isdA:1,"%":"HTMLTemplateElement"},
mj:{"^":"h;0m:width=","%":"TextMetrics"},
ay:{"^":"K;",$isay:1,"%":"TextTrack"},
az:{"^":"K;",$isaz:1,"%":"TextTrackCue|VTTCue"},
mk:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isw:1,
$asw:function(){return[W.az]},
$aso:function(){return[W.az]},
$isk:1,
$ask:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TextTrackCueList"},
ml:{"^":"e1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isw:1,
$asw:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isk:1,
$ask:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"TextTrackList"},
mn:{"^":"h;0j:length=","%":"TimeRanges"},
aA:{"^":"h;",$isaA:1,"%":"Touch"},
mo:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isw:1,
$asw:function(){return[W.aA]},
$aso:function(){return[W.aA]},
$isk:1,
$ask:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"TouchList"},
mp:{"^":"h;0j:length=","%":"TrackDefaultList"},
dG:{"^":"O;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mD:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
bt:{"^":"hp;0n:height=,0m:width=",$isbt:1,"%":"HTMLVideoElement"},
mF:{"^":"K;0j:length=","%":"VideoTrackList"},
mG:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mH:{"^":"h;0m:width=","%":"VTTRegion"},
aL:{"^":"U;",
gdD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isaL:1,
"%":"WheelEvent"},
iA:{"^":"K;",
gdh:function(a){var z,y,x
z=P.G
y=new P.Q(0,$.D,[z])
x=H.i(new W.iB(new P.jO(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cV(a)
this.d6(a,W.ea(x,z))
return y},
d6:function(a,b){return a.requestAnimationFrame(H.aj(H.i(b,{func:1,ret:-1,args:[P.G]}),1))},
cV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
bg:function(a,b){return a.alert(b)},
$isdI:1,
"%":"DOMWindow|Window"},
iB:{"^":"l:16;a",
$1:function(a){var z=this.a
a=H.bd(H.cF(a),{futureOr:1,type:H.m(z,0)})
z=z.a
if(z.a!==0)H.X(P.bs("Future already completed"))
z.a5(a)}},
dL:{"^":"t;",$isdL:1,"%":"Attr"},
mN:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ao]},
$isw:1,
$asw:function(){return[W.ao]},
$aso:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"CSSRuleList"},
mP:{"^":"fO;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isV",[P.G],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mQ:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isw:1,
$asw:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"GamepadList"},
mV:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mW:{"^":"k8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"SpeechRecognitionResultList"},
mX:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"StyleSheetList"},
iI:{"^":"dn;cU:a<",
D:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.a4)(z),++v){u=z[v]
b.$2(u,w.V(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.p([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.f(z[w],"$isdL")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asT:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iR:{"^":"iI;a",
h:function(a,b){return J.ca(this.a,H.u(b))},
gj:function(a){return this.gF(this).length}},
bv:{"^":"ih;a,b,c,$ti"},
bu:{"^":"bv;a,b,c,$ti"},
iT:{"^":"ii;a,b,c,d,e,$ti",
sd0:function(a){this.d=H.i(a,{func:1,args:[W.O]})},
dn:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.O]})
if(x)J.eK(z,this.c,y,!1)}this.b=null
this.sd0(null)
return},
p:{
ah:function(a,b,c,d,e){var z=W.ea(new W.iU(c),W.O)
if(z!=null&&!0)J.eM(a,b,z,!1)
return new W.iT(0,a,b,z,!1,[e])}}},
iU:{"^":"l:17;a",
$1:function(a){return this.a.$1(H.f(a,"$isO"))}},
bw:{"^":"b;a",
cJ:function(a){var z,y
z=$.cJ()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.U[y],W.kw())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kx())}},
U:function(a){return $.eH().w(0,W.aY(a))},
O:function(a,b,c){var z,y,x
z=W.aY(a)
y=$.cJ()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bY(x.$4(a,b,c,this))},
$isaa:1,
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.jz(z,window.location)
y=new W.bw(y)
y.cJ(a)
return y},
mT:[function(a,b,c,d){H.f(a,"$isS")
H.u(b)
H.u(c)
H.f(d,"$isbw")
return!0},"$4","kw",16,0,6],
mU:[function(a,b,c,d){var z,y,x
H.f(a,"$isS")
H.u(b)
H.u(c)
z=H.f(d,"$isbw").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kx",16,0,6]}},
q:{"^":"b;$ti",
gB:function(a){return new W.dd(a,this.gj(a),-1,[H.be(this,a,"q",0)])}},
ds:{"^":"b;a",
U:function(a){return C.a.bh(this.a,new W.hH(a))},
O:function(a,b,c){return C.a.bh(this.a,new W.hG(a,b,c))},
$isaa:1},
hH:{"^":"l:11;a",
$1:function(a){return H.f(a,"$isaa").U(this.a)}},
hG:{"^":"l:11;a,b,c",
$1:function(a){return H.f(a,"$isaa").O(this.a,this.b,this.c)}},
jA:{"^":"b;",
cK:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aC(0,new W.jB())
y=b.aC(0,new W.jC())
this.b.I(0,z)
x=this.c
x.I(0,C.W)
x.I(0,y)},
U:function(a){return this.a.w(0,W.aY(a))},
O:["cn",function(a,b,c){var z,y
z=W.aY(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.dg(c)
else if(y.w(0,"*::"+b))return this.d.dg(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isaa:1},
jB:{"^":"l:12;",
$1:function(a){return!C.a.w(C.u,H.u(a))}},
jC:{"^":"l:12;",
$1:function(a){return C.a.w(C.u,H.u(a))}},
jP:{"^":"jA;e,a,b,c,d",
O:function(a,b,c){if(this.cn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ca(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
e_:function(){var z,y,x,w,v
z=P.d
y=P.cn(C.t,z)
x=H.m(C.t,0)
w=H.i(new W.jQ(),{func:1,ret:z,args:[x]})
v=H.p(["TEMPLATE"],[z])
y=new W.jP(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cK(null,new H.hn(C.t,w,[x,z]),v,null)
return y}}},
jQ:{"^":"l:20;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jN:{"^":"b;",
U:function(a){var z=J.C(a)
if(!!z.$isdv)return!1
z=!!z.$isI
if(z&&W.aY(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.h.cf(b,"on"))return!1
return this.U(a)},
$isaa:1},
dd:{"^":"b;a,b,c,0d,$ti",
sb7:function(a){this.d=H.y(a,H.m(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb7(J.bg(this.a,z))
this.c=z
return!0}this.sb7(null)
this.c=y
return!1},
gC:function(a){return this.d},
$isaZ:1},
iL:{"^":"b;a",$isK:1,$isdI:1,p:{
iM:function(a){if(a===window)return H.f(a,"$isdI")
else return new W.iL(a)}}},
aa:{"^":"b;"},
jz:{"^":"b;a,b",$ismC:1},
e2:{"^":"b;a",
aM:function(a){new W.k_(this).$2(a,null)},
X:function(a,b){if(b==null)J.cQ(a)
else J.bD(b,a)},
d9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f3(a)
x=J.ca(y.gcU(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Y(t)}v="element unprintable"
try{v=J.bh(a)}catch(t){H.Y(t)}try{u=W.aY(a)
this.d8(H.f(a,"$isS"),b,z,v,u,H.f(y,"$isJ"),H.u(x))}catch(t){if(H.Y(t) instanceof P.aF)throw t
else{this.X(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d8:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.X(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.U(a)){this.X(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.X(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.p(z.slice(0),[H.m(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.O(a,J.fg(v),w.V(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.V(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.V(z,v)
w.d2(z,v)}}if(!!J.C(a).$isdA)this.aM(a.content)},
$islT:1},
k_:{"^":"l:33;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.X(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f4(z)}catch(w){H.Y(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bD(u,v)}else J.bD(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iK:{"^":"h+fE;"},
iN:{"^":"h+o;"},
iO:{"^":"iN+q;"},
iP:{"^":"h+o;"},
iQ:{"^":"iP+q;"},
iW:{"^":"h+o;"},
iX:{"^":"iW+q;"},
jb:{"^":"h+o;"},
jc:{"^":"jb+q;"},
jj:{"^":"h+T;"},
jk:{"^":"h+T;"},
jl:{"^":"h+o;"},
jm:{"^":"jl+q;"},
jn:{"^":"h+o;"},
jo:{"^":"jn+q;"},
jr:{"^":"h+o;"},
js:{"^":"jr+q;"},
jy:{"^":"h+T;"},
dX:{"^":"K+o;"},
dY:{"^":"dX+q;"},
jD:{"^":"h+o;"},
jE:{"^":"jD+q;"},
jH:{"^":"h+T;"},
jR:{"^":"h+o;"},
jS:{"^":"jR+q;"},
e0:{"^":"K+o;"},
e1:{"^":"e0+q;"},
jW:{"^":"h+o;"},
jX:{"^":"jW+q;"},
k1:{"^":"h+o;"},
k2:{"^":"k1+q;"},
k3:{"^":"h+o;"},
k4:{"^":"k3+q;"},
k5:{"^":"h+o;"},
k6:{"^":"k5+q;"},
k7:{"^":"h+o;"},
k8:{"^":"k7+q;"},
k9:{"^":"h+o;"},
ka:{"^":"k9+q;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.a9(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a4)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
kn:function(a,b){var z={}
a.D(0,new P.ko(z))
return z},
d5:function(){var z=$.d4
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d4=z}return z},
fK:function(){var z,y
z=$.d1
if(z!=null)return z
y=$.d2
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d2=y}if(y)z="-moz-"
else{y=$.d3
if(y==null){y=!P.d5()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d3=y}if(y)z="-ms-"
else z=P.d5()?"-o-":"-webkit-"}$.d1=z
return z},
jK:{"^":"b;",
bE:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.l(z,a)
C.a.l(this.b,null)
return y},
aB:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.C(a)
if(!!y.$isbi)return new Date(a.a)
if(!!y.$isaf)return a
if(!!y.$iscc)return a
if(!!y.$isdc)return a
if(!!y.$isdf)return a
if(!!y.$isdq||!!y.$iscp)return a
if(!!y.$isJ){x=this.bE(a)
w=this.b
if(x>=w.length)return H.n(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.i(w,x,v)
y.D(a,new P.jM(z,this))
return z.a}if(!!y.$isa){x=this.bE(a)
z=this.b
if(x>=z.length)return H.n(z,x)
v=z[x]
if(v!=null)return v
return this.dw(a,x)}throw H.c(P.cu("structured clone of other type"))},
dw:function(a,b){var z,y,x,w
z=J.aQ(a)
y=z.gj(a)
x=new Array(y)
C.a.i(this.b,b,x)
for(w=0;w<y;++w)C.a.i(x,w,this.aB(z.h(a,w)))
return x}},
jM:{"^":"l:3;a,b",
$2:function(a,b){this.a.a[a]=this.b.aB(b)}},
ko:{"^":"l:3;a",
$2:function(a,b){this.a[a]=b}},
jL:{"^":"jK;a,b"}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b2:{"^":"b;ac:a>,a0:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
E:function(a,b){if(b==null)return!1
return H.ai(b,"$isb2",[P.G],null)&&this.a==J.bH(b)&&this.b==b.ga0(b)},
gA:function(a){var z,y,x
z=J.an(this.a)
y=J.an(this.b)
y=P.dQ(P.dQ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jt:{"^":"b;"},
V:{"^":"jt;$ti"}}],["","",,P,{"^":"",fq:{"^":"h;",$isfq:1,"%":"SVGAnimatedLength"},lb:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lc:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},ld:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},le:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lf:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lg:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lh:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lp:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},ls:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lt:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h_:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lA:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},b0:{"^":"h;",$isb0:1,"%":"SVGLength"},lG:{"^":"je;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb0")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b0]},
$isk:1,
$ask:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGLengthList"},lH:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b1:{"^":"h;",$isb1:1,"%":"SVGNumber"},lU:{"^":"jq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb1")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b1]},
$isk:1,
$ask:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asq:function(){return[P.b1]},
"%":"SVGNumberList"},lZ:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},m0:{"^":"h;0j:length=","%":"SVGPointList"},m2:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},m3:{"^":"h_;0n:height=,0m:width=","%":"SVGRectElement"},dv:{"^":"I;",$isdv:1,"%":"SVGScriptElement"},mf:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.u(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"S;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.p([],[W.aa])
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
C.a.l(z,new W.jN())
c=new W.e2(new W.ds(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dA(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga4(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.G(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mg:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b5:{"^":"h;",$isb5:1,"%":"SVGTransform"},mq:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb5")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b5]},
$isk:1,
$ask:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asq:function(){return[P.b5]},
"%":"SVGTransformList"},mE:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},jd:{"^":"h+o;"},je:{"^":"jd+q;"},jp:{"^":"h+o;"},jq:{"^":"jp+q;"},jI:{"^":"h+o;"},jJ:{"^":"jI+q;"},jY:{"^":"h+o;"},jZ:{"^":"jY+q;"}}],["","",,P,{"^":"",ag:{"^":"b;",$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isit:1}}],["","",,P,{"^":"",kT:{"^":"h;0j:length=","%":"AudioBuffer"},kU:{"^":"iJ;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.d])
this.D(a,new P.fs(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fs:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kV:{"^":"K;0j:length=","%":"AudioTrackList"},ft:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lW:{"^":"ft;0j:length=","%":"OfflineAudioContext"},iJ:{"^":"h+T;"}}],["","",,P,{"^":"",fu:{"^":"h;",$isfu:1,"%":"WebGLBuffer"},hW:{"^":"h;",$ishW:1,"%":"WebGLProgram"},m4:{"^":"h;",
bf:function(a,b){return a.activeTexture(b)},
bi:function(a,b,c){return a.attachShader(b,c)},
bj:function(a,b,c){return a.bindBuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
br:function(a,b){return a.compileShader(b)},
bs:function(a){return a.createBuffer()},
bt:function(a){return a.createProgram()},
bu:function(a,b){return a.createShader(b)},
bv:function(a){return a.createTexture()},
bx:function(a,b){return a.depthMask(b)},
by:function(a,b){return a.disable(b)},
bz:function(a,b,c,d){return a.drawArrays(b,c,d)},
bA:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bB:function(a,b){return a.enable(b)},
bC:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.a_(a.getContextAttributes())},
aD:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bF:function(a,b){return a.linkProgram(b)},
bL:function(a,b,c){return a.pixelStorei(b,c)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aA:function(a,b,c,d,e,f,g,h,i,j){this.at(a,b,c,d,e,f,g)
return},
bO:function(a,b,c,d,e,f,g){return this.aA(a,b,c,d,e,f,g,null,null,null)},
at:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bP:function(a,b,c,d){return a.texParameterf(b,c,d)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bT:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1fv(b,c)},
bV:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c){return a.uniform1iv(b,c)},
bX:function(a,b,c){return a.uniform2fv(b,c)},
bY:function(a,b,c){return a.uniform3fv(b,c)},
bZ:function(a,b,c){return a.uniform4fv(b,c)},
c_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c1:function(a,b){return a.useProgram(b)},
c2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m5:{"^":"h;",
dj:function(a,b){return a.beginTransformFeedback(b)},
dm:function(a,b){return a.bindVertexArray(b)},
dC:function(a){return a.createVertexArray()},
dE:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dF:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dG:function(a){return a.endTransformFeedback()},
dY:function(a,b,c,d){this.dd(a,b,H.x(c,"$isa",[P.d],"$asa"),d)
return},
dd:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dZ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bf:function(a,b){return a.activeTexture(b)},
bi:function(a,b,c){return a.attachShader(b,c)},
bj:function(a,b,c){return a.bindBuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
br:function(a,b){return a.compileShader(b)},
bs:function(a){return a.createBuffer()},
bt:function(a){return a.createProgram()},
bu:function(a,b){return a.createShader(b)},
bv:function(a){return a.createTexture()},
bx:function(a,b){return a.depthMask(b)},
by:function(a,b){return a.disable(b)},
bz:function(a,b,c,d){return a.drawArrays(b,c,d)},
bA:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bB:function(a,b){return a.enable(b)},
bC:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.a_(a.getContextAttributes())},
aD:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bF:function(a,b){return a.linkProgram(b)},
bL:function(a,b,c){return a.pixelStorei(b,c)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aA:function(a,b,c,d,e,f,g,h,i,j){this.at(a,b,c,d,e,f,g)
return},
bO:function(a,b,c,d,e,f,g){return this.aA(a,b,c,d,e,f,g,null,null,null)},
at:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bP:function(a,b,c,d){return a.texParameterf(b,c,d)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bT:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1fv(b,c)},
bV:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c){return a.uniform1iv(b,c)},
bX:function(a,b,c){return a.uniform2fv(b,c)},
bY:function(a,b,c){return a.uniform3fv(b,c)},
bZ:function(a,b,c){return a.uniform4fv(b,c)},
c_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c1:function(a,b){return a.useProgram(b)},
c2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i6:{"^":"h;",$isi6:1,"%":"WebGLShader"},ip:{"^":"h;",$isip:1,"%":"WebGLTexture"},iu:{"^":"h;",$isiu:1,"%":"WebGLUniformLocation"},iy:{"^":"h;",$isiy:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mc:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a_(this.cZ(a,b))},
i:function(a,b,c){H.f(c,"$isJ")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
cZ:function(a,b){return a.item(b)},
$aso:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jF:{"^":"h+o;"},jG:{"^":"jF+q;"}}],["","",,G,{"^":"",
iC:function(a){var z,y,x,w
z=H.p(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.Z(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bu(a,b)
z.aN(a,y,c)
z.br(a,y)
x=H.bY(z.aJ(a,y,35713))
if(x!=null&&!x){w=z.aI(a,y)
P.ad("E:Compilation failed:")
P.ad("E:"+G.iC(c))
P.ad("E:Failure:")
P.ad(C.h.H("E:",w))
throw H.c(w)}return y},
de:function(a,b){var z,y,x
H.x(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.bH(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.c9(a[y]))
z+=2
if(y>=a.length)return H.n(a,y)
x=J.cO(a[y])
if(z>=b.length)return H.n(b,z)
b[z]=x}return b},
fX:function(a,b){var z,y
H.x(a,"$isa",[T.B],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bH(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.c9(a[y]))}return b},
fY:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.b7],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.bH(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.c9(a[y]))
x=z+2
if(y>=a.length)return H.n(a,y)
w=J.cO(a[y])
v=b.length
if(x>=v)return H.n(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.n(a,y)
w=J.f6(a[y])
if(z>=v)return H.n(b,z)
b[z]=w}return b},
fW:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.F]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bg(a[y],0))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+1,J.bg(a[y],1))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+2,J.bg(a[y],2))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+3,J.bg(a[y],3))}return b},
j9:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aq(z,[H.m(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.F]],v=[P.ak],u=[T.b7],t=[T.r],s=[T.B];y.u();){r=y.d
if(!x.aa(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ef>0)H.c4("I: "+r)
continue}q=z.h(0,r)
switch($.a5().h(0,r).a){case"vec2":b.W(r,G.fX(H.bC(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.W(r,G.de(H.bC(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.W(r,G.fY(H.bC(q,"$isa",u,"$asa"),null),4)
break
case"float":b.W(r,new Float32Array(H.bV(H.bC(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.W(r,G.fW(H.bC(q,"$isa",w,"$asa"),null),4)
break}}},
bO:{"^":"b;"},
bS:{"^":"bO;",
aV:function(){return this.d},
k:function(a){var z,y,x,w
z=H.p(["{"+new H.dF(H.kt(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.aq(y,[H.m(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.Z(z,"\n")}},
fw:{"^":"b;0a,b",
bD:function(a,b,c){J.f0(this.a,b)
if(c>0)J.fm(this.a,b,c)},
c3:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fn(this.a,c,d,e,!1,g,h)}},
fV:{"^":"b;"},
db:{"^":"b;a,b,c,d"},
fZ:{"^":"b;a,b,c,d,e",
aT:function(a){switch($.a5().h(0,a).a){case"vec2":this.e.i(0,a,H.p([],[T.B]))
break
case"vec3":this.e.i(0,a,H.p([],[T.r]))
break
case"vec4":this.e.i(0,a,H.p([],[T.b7]))
break
case"float":this.e.i(0,a,H.p([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.p([],[[P.a,P.F]]))
break}},
cs:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.db(z,z+1,z+2,z+3))},
ct:function(a){var z,y,x,w
H.x(a,"$isa",[T.r],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.r(new Float32Array(3))
w.R(x)
C.a.l(z,w)}},
cq:function(a,b){var z,y,x,w,v,u
z=[T.B]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.B(v))}},
cr:function(a,b){var z,y,x,w,v
z=[T.r]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.r(new Float32Array(3))
v.R(w)
z.l(y,v)}},
cz:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.p(y,[P.F])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.i(x,w,u.ge2(u))
C.a.i(x,w+1,u.ge3(u))
C.a.i(x,w+2,u.ge4(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.a4)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.p(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.aq(y,[H.m(y,0)]),x=x.gB(x);x.u();){w=x.d
v=$.a5().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.Z(z," ")}},
dD:{"^":"b;a,b,c"},
dC:{"^":"b;a,b,c"},
ho:{"^":"bS;d,a,b,c"},
hq:{"^":"bO;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
san:function(a){this.cx=H.x(a,"$isa",[P.F],"$asa")},
aS:function(a,b,c){var z,y
C.h.ai(a,0)
H.f(b,"$isag")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c5(z.a,34962,y)
J.cN(z.a,34962,b,35048)},
cA:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
W:function(a,b,c){var z,y,x,w,v
z=J.cK(a,0)===105
if(z&&this.z===0)this.z=C.e.co(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c7(x.a))
this.aS(a,b,c)
w=$.a5().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bE(x.a,this.e)
x.bD(0,v,z?1:0)
x.c3(0,y.h(0,a),v,w.aU(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.p(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.aq(z,[H.m(z,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.Z(y,"  ")}},
hL:{"^":"bS;",
cu:function(a,b){var z
if(typeof a!=="number")return a.e0()
if(typeof b!=="number")return H.bz(b)
z=a/b
if(this.z===z)return
this.z=z
this.aX()},
aX:function(){var z,y,x,w,v,u
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
aV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aE())
x=this.cy
x.R(z.d)
z=this.cx
z.R(this.db)
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
l9:{"^":"b;"},
i_:{"^":"bO;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cD:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){t=z[u]
x.i(0,t,J.cP(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){t=z[u]
x.i(0,t,J.cP(w.a,v,t))}},
cF:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.p([],[P.d])
x=H.p([],[P.d])
for(y=new H.aq(y,[H.m(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.aa(0,w))C.a.l(x,w)}for(z=this.x,z=P.jg(z,z.r,H.m(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.aq(b,[H.m(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cK(s,0)){case 117:if(w.aa(0,s)){r=b.h(0,s)
if(v.aa(0,s))H.c4("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a5().h(0,s)
if(q==null)H.X("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.cb(x.a,p,r)}else if(!!J.C(r).$ish4)J.fk(x.a,p,r)
break
case"float":if(q.c===0){H.ee(r)
J.fi(x.a,p,r)}else if(!!J.C(r).$isag)J.fj(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.am(r,"$isaH").a
J.cV(x.a,p,!1,s)}else if(!!J.C(r).$isag)J.cV(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.M.ge1(H.am(r,"$islI"))
J.cU(x.a,p,!1,s)}else if(!!J.C(r).$isag)J.cU(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cT(o,p,H.am(r,"$isb7").a)
else J.cT(o,p,H.f(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cS(o,p,H.am(r,"$isr").a)
else J.cS(o,p,H.f(r,"$isag"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.am(r,"$isB").a)
else J.cR(o,p,H.f(r,"$isag"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bz(s)
J.cL(x.a,33984+s)
s=H.am(r,"$isct").b
J.aU(x.a,3553,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bz(s)
J.cL(x.a,33984+s)
s=H.am(r,"$isct").b
J.aU(x.a,34067,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
default:H.c4("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aE(r,!0)
o=x.a
if(s)J.bF(o,2929)
else J.c8(o,2929)
break
case"cStencilFunc":H.am(r,"$isdD")
s=r.a
o=x.a
if(s===1281)J.c8(o,2960)
else{J.bF(o,2960)
o=r.b
n=r.c
J.fd(x.a,s,o,n)}break
case"cDepthWrite":H.bY(r)
J.eV(x.a,r)
break
case"cBlendEquation":H.am(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c8(o,3042)
else{J.bF(o,3042)
o=r.b
n=r.c
J.eP(x.a,o,n)
J.eO(x.a,s)}break}++t
break}}m=P.fP(0,0,0,Date.now()-new P.bi(z,!1).a,0,0)
""+t
m.k(0)},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.bS],"$asa")
Date.now()
z=this.d
J.fl(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(x=0;x<2;++x){w=b[x]
this.cI(w.a,w.aV())}y=this.Q
y.Y(0)
for(v=a.cy,v=new H.aq(v,[H.m(v,0)]),v=v.gB(v);v.u();)y.l(0,v.d)
u=this.cF()
if(u.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bE(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cA()
s=a.Q
r=a.z
if(t)J.eN(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eZ(q,y,v,s,0,r)
else J.eY(q,y,v,s,0)}else{s=z.a
if(r>1)J.eX(s,y,0,v,r)
else J.eW(s,y,0,v)}if(t)J.f1(z.a)},
cv:function(a,b){return this.cw(a,b,null)},
p:{
i0:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eS(b.a)
t=G.dM(b.a,35633,x)
J.cM(b.a,u,t)
s=G.dM(b.a,35632,w)
J.cM(b.a,u,s)
if(v.length>0)J.fh(b.a,u,v,35980)
J.fb(b.a,u)
if(!H.bY(J.fa(b.a,u,35714)))H.X(J.f9(b.a,u))
z=new G.i_(b,c,d,u,P.cn(c.c,z),P.a9(z,P.b),P.a9(z,z),y,a,!1,!0)
z.cD(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
aU:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i7:{"^":"b;a,0b,c,d,e,f,r,x",
cp:function(a){var z,y,x,w
H.x(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.ae(z)},
aQ:function(a){var z,y
H.x(a,"$isa",[P.d],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.l(z,a[y])
C.a.ae(z)},
aR:function(a){var z,y
H.x(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ae(z)},
aY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.p(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.a4)(y),++u){t=y[u]
s=$.a5().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.a5().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.Z(w,"\n")},
p:{
dw:function(a){var z,y
z=P.d
y=[z]
return new G.i7(a,H.p([],y),H.p([],y),H.p([],y),H.p([],y),0,P.a9(z,P.F))}}},
ib:{"^":"bO;",
aE:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
dB:{"^":"b;a,b,c,d,e,f,r",p:{
iq:function(){return new G.dB(!1,!1,!1,!0,1,9729,9729)}}},
ct:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h2:{"^":"ct;f,a,b,c,d,e",
aW:function(a){var z,y
z=this.d
y=this.c
J.aU(z.a,y,this.b)
J.fe(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
ji:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iS("span",null),"$isS")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ah(y,"float")
y.setProperty(x,"left","")
x=C.x.ah(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.G(z,v)}return z},
hM:{"^":"hL;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dR:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ad("size change "+H.e(y)+" "+H.e(x))
this.cu(y,x)
J.fo(this.go.a,0,0,y,x)},"$1","gdQ",4,0,13]},
id:{"^":"b;",
cE:function(a,b,c){var z,y
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
y=J.j(z)
y.G(z,this.b)
y.G(z,this.d)
y.G(z,this.c)}},
ie:{"^":"id;e,f,a,b,c,d",
cH:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.dX(y,2)+" fps"
C.p.cc(this.c,b)
x=C.e.T(30*C.y.dr(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isS")
v=w.style
u=""+x+"px"
v.height=u
C.p.G(z,w)},
cG:function(a){return this.cH(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
fG:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.r(new Float32Array(3))
x.q(z,y,b2)
w=new T.r(new Float32Array(3))
w.q(b0,y,b2)
v=new T.r(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.r(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.r(new Float32Array(3))
s.q(z,y,t)
r=new T.r(new Float32Array(3))
r.q(z,b1,t)
q=new T.r(new Float32Array(3))
q.q(b0,b1,t)
p=new T.r(new Float32Array(3))
p.q(b0,y,t)
o=new T.r(new Float32Array(3))
o.q(z,b1,t)
n=new T.r(new Float32Array(3))
n.q(z,b1,b2)
m=new T.r(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.r(new Float32Array(3))
l.q(b0,b1,t)
k=new T.r(new Float32Array(3))
k.q(b0,y,b2)
j=new T.r(new Float32Array(3))
j.q(z,y,b2)
i=new T.r(new Float32Array(3))
i.q(z,y,t)
h=new T.r(new Float32Array(3))
h.q(b0,y,t)
g=new T.r(new Float32Array(3))
g.q(b0,y,t)
f=new T.r(new Float32Array(3))
f.q(b0,b1,t)
e=new T.r(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.r(new Float32Array(3))
d.q(b0,y,b2)
c=new T.r(new Float32Array(3))
c.q(z,y,t)
b=new T.r(new Float32Array(3))
b.q(z,y,b2)
y=new T.r(new Float32Array(3))
y.q(z,b1,b2)
a=new T.r(new Float32Array(3))
a.q(z,b1,t)
t=[T.r]
a0=H.p([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.B(new Float32Array(2))
z.v(a7,a9)
y=new T.B(new Float32Array(2))
y.v(a6,a9)
x=new T.B(new Float32Array(2))
x.v(a6,a8)
w=new T.B(new Float32Array(2))
w.v(a7,a8)
v=new T.B(new Float32Array(2))
v.v(a6,a9)
u=new T.B(new Float32Array(2))
u.v(a6,a8)
s=new T.B(new Float32Array(2))
s.v(a7,a8)
r=new T.B(new Float32Array(2))
r.v(a7,a9)
q=new T.B(new Float32Array(2))
q.v(a7,a8)
p=new T.B(new Float32Array(2))
p.v(a7,a9)
o=new T.B(new Float32Array(2))
o.v(a6,a9)
n=new T.B(new Float32Array(2))
n.v(a6,a8)
m=new T.B(new Float32Array(2))
m.v(a6,a8)
l=new T.B(new Float32Array(2))
l.v(a7,a8)
k=new T.B(new Float32Array(2))
k.v(a7,a9)
j=new T.B(new Float32Array(2))
j.v(a6,a9)
i=new T.B(new Float32Array(2))
i.v(a6,a9)
h=new T.B(new Float32Array(2))
h.v(a6,a8)
g=new T.B(new Float32Array(2))
g.v(a7,a8)
f=new T.B(new Float32Array(2))
f.v(a7,a9)
e=new T.B(new Float32Array(2))
e.v(a7,a9)
d=new T.B(new Float32Array(2))
d.v(a6,a9)
c=new T.B(new Float32Array(2))
c.v(a6,a8)
b=new T.B(new Float32Array(2))
b.v(a7,a8)
a1=H.p([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.B])
a2=new G.fZ(!1,H.p([],[G.fV]),H.p([],[G.db]),H.p([],t),P.a9(P.d,[P.a,,]))
a2.aT("aTexUV")
a2.aT("aNormal")
a2.cs(6)
a2.ct(a0)
a2.cq("aTexUV",a1)
for(a3=0;z=$.eG(),a3<6;++a3){a4=z[a3]
a2.cr("aNormal",H.p([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",
hi:function(){var z,y,x
z=W.bt
y=new P.Q(0,$.D,[z])
x=new P.dK(y,[z])
z=window.navigator;(z&&C.X).c9(z,!0).a_(new D.hk(x),null).bp(new D.hl(x))
return y},
ha:{"^":"b;a,b,c",
cB:function(a){var z,y
a=document
z=W.b_
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.i(new D.hc(this),y),!1,z)
W.ah(a,"keyup",H.i(new D.hd(this),y),!1,z)},
p:{
hb:function(a){var z=P.F
z=new D.ha(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cB(a)
return z}}},
hc:{"^":"l:14;a",
$1:function(a){var z
H.f(a,"$isb_")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hd:{"^":"l:14;a",
$1:function(a){var z
H.f(a,"$isb_")
z=this.a
z.a.bM(0,a.which)
z.c.l(0,a.which)}},
ht:{"^":"b;a,b,c,d,e,f,r,x",
cC:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbI(a)
x=H.m(y,0)
W.ah(y.a,y.b,H.i(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbH(a)
y=H.m(x,0)
W.ah(x.a,x.b,H.i(new D.hw(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbJ(a)
x=H.m(y,0)
W.ah(y.a,y.b,H.i(new D.hx(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbK(a)
x=H.m(z,0)
W.ah(z.a,z.b,H.i(new D.hy(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hu:function(a){var z=P.F
z=new D.ht(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cC(a)
return z}}},
hv:{"^":"l:4;a",
$1:function(a){var z,y
H.f(a,"$isU")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbG(a).a)
z.x=H.M(y.gbG(a).b)
z.d=a.movementX
z.e=a.movementY}},
hw:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
P.ad("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hx:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
z=this.a
z.a.bM(0,a.button)
z.c.l(0,a.button)}},
hy:{"^":"l:25;a",
$1:function(a){H.f(a,"$isaL")
a.preventDefault()
this.a.f=H.M(C.ae.gdD(a))}},
hJ:{"^":"ib;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"},
hk:{"^":"l:10;a",
$1:function(a){var z,y
H.f(a,"$isaI")
z=document.createElement("video")
z.autoplay=!0
y=new W.bu(z,"playing",!1,[W.O])
y.gdH(y).a_(new D.hj(this.a,z),-1)
z.srcObject=a}},
hj:{"^":"l:13;a,b",
$1:function(a){H.f(a,"$isO")
return this.a.au(0,this.b)}},
hl:{"^":"l:26;a",
$1:function(a){P.ad("E:"+("Camera open error "+H.e(a)))
this.a.au(0,null)}}}],["","",,A,{"^":"",
c1:function(a){var z,y
z=C.i.dI(H.x(a,"$isk",[P.b],"$ask"),0,new A.kv(),P.F)
if(typeof z!=="number")return H.bz(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kv:{"^":"l:27;",
$2:function(a,b){var z,y
H.M(a)
z=J.an(b)
if(typeof a!=="number")return a.H()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aH:{"^":"b;a",
R:function(a){var z,y
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
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n[3] "+this.a1(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.n(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aH){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.n(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.n(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.n(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.n(y,x)
z[3]=y[x]
return new T.b7(z)},
a3:function(){var z=this.a
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
z[15]=1}},B:{"^":"b;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.n(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gac:function(a){return this.a[0]},
ga0:function(a){return this.a[1]}},r:{"^":"b;a",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
R:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.n(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gax())},
gax:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ay:function(a){var z,y,x
z=Math.sqrt(this.gax())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
av:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bw:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gac:function(a){return this.a[0]},
ga0:function(a){return this.a[1]},
gc5:function(a){return this.a[2]},
p:{
aK:function(a,b,c){var z=new T.r(new Float32Array(3))
z.q(a,b,c)
return z}}},b7:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.n(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gac:function(a){return this.a[0]},
ga0:function(a){return this.a[1]},
gc5:function(a){return this.a[2]},
ge_:function(a){return this.a[3]}}}],["","",,U,{"^":"",
n3:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
H.f(a,"$isbt")
if(a==null){C.w.bg(window,"Could not access camera - do you have a camera installed?")
return}y=document
x=C.q.c8(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ie(0,0,x,w,y.createElement("div"),R.ji("blue","gray",90,30))
u.cE(x,"blue","gray")
t=H.f(C.q.dO(y,"#webgl-canvas"),"$iscf")
s=new G.fw(t)
y=P.d
x=P.b
v=(t&&C.I).c7(t,"webgl2",P.cm(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.X(P.da('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.f7(v))
if($.ef>0)P.ad("I: "+r)
J.eQ(v,0,0,0,1)
J.bF(v,2929)
v=new Float32Array(3)
r=D.hb(null)
q=D.hu(t)
p=new T.aH(new Float32Array(16))
p.a3()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hJ(15,10,0,0,new T.r(v),-0.02,r,q,p,new T.r(o),new T.r(n),new T.r(m),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aH(new Float32Array(16))
v.a3()
r=new T.aH(new Float32Array(16))
r.a3()
k=new R.hM(t,s,l,50,1,0.1,1000,v,r,new T.aH(new Float32Array(16)),P.a9(y,x),"perspective",!1,!0)
k.aX()
k.dR(null)
v=W.O
W.ah(window,"resize",H.i(k.gdQ(),{func:1,ret:-1,args:[v]}),!1,v)
j=G.i0("solid",s,$.eJ(),$.eI())
i=B.fG(!0,1,0,1,0,1,1,1)
v=j.d
r=j.e.x
q=P.a9(y,x)
p=J.eU(v.a)
h=new G.hq(v,p,4,q,r,0,-1,P.a9(y,P.ag),"meshdata:cube",!1,!0)
o=G.de(i.d,null)
q.i(0,"aPosition",J.c7(v.a))
h.ch=o
h.aS("aPosition",o,3)
g=$.a5().h(0,"aPosition")
if(g==null)H.X("Unknown canonical aPosition")
f=r.h(0,"aPosition")
J.bE(v.a,p)
v.bD(0,f,0)
v.c3(0,q.h(0,"aPosition"),f,g.aU(),5126,!1,0,0)
r=H.x(i.cz(),"$isa",[P.F],"$asa")
h.y=J.c7(v.a)
q=h.ch.length
if(q<768){h.san(new Uint8Array(H.bV(r)))
h.Q=5121}else if(q<196608){h.san(new Uint16Array(H.bV(r)))
h.Q=5123}else{h.san(new Uint32Array(H.bV(r)))
h.Q=5125}J.bE(v.a,p)
r=h.y
q=h.cx
J.c5(v.a,34963,r)
J.cN(v.a,34963,q,35048)
G.j9(i,h)
v=$.ev()
if(v==null)v=new G.dB(!1,!1,!1,!0,1,9729,9729)
r=J.eT(s.a)
e=new G.h2(a,"video",r,3553,s,v)
J.aU(s.a,3553,r)
J.fc(s.a,37440,1)
e.aW(a)
r=v.e
if(r!==1)J.ff(s.a,3553,34046,r)
J.bI(s.a,3553,10240,v.r)
J.bI(s.a,3553,10241,v.f)
if(v.b){J.bI(s.a,3553,10242,33071)
J.bI(s.a,3553,10243,33071)}J.f8(s.a)
J.aU(s.a,3553,null)
y=P.a9(y,x)
y.i(0,"cDepthTest",!0)
y.i(0,"cDepthWrite",!0)
y.i(0,"cBlendEquation",$.eq())
y.i(0,"cStencilFunc",$.eu())
y.i(0,"uColor",$.er())
x=new T.aH(new Float32Array(16))
x.a3()
y.i(0,"uModelMatrix",x)
y.i(0,"uTexture",e)
z.a=0
new U.kI(z,l,e,j,h,k,new G.ho(y,"cube",!1,!0),u).$1(0)},"$1","km",4,0,21],
el:function(){D.hi().a_(U.km(),-1).bp(new U.kJ())},
kI:{"^":"l:28;a,b,c,d,e,f,r,x",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.cF(b1)
if(typeof b1!=="number")return b1.aP()
y=this.a
y.a=b1+0
x=this.b
x.cx+=0.001
w=x.fx
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.cx
u=w.d
if(typeof u!=="number")return u.aL()
x.cx=v+u*0.01
u=x.cy
v=w.e
if(typeof v!=="number")return v.aL()
x.cy=u+v*0.01}v=x.fr
u=v.a
if(u.w(0,37))x.cx+=0.03
else if(u.w(0,39))x.cx-=0.03
if(u.w(0,38))x.cy+=0.03
else if(u.w(0,40))x.cy-=0.03
if(u.w(0,33))x.ch*=0.99
else if(u.w(0,34))x.ch*=1.01
if(u.w(0,32)){x.cx=0
x.cy=0}u=w.f
if(typeof u!=="number")return u.aL()
u=x.ch-u*x.dy
if(u>0)x.ch=u
u=C.r.ds(x.cy,-1.4707963267948965,1.4707963267948965)
x.cy=u
t=x.ch
s=x.cx
r=t*Math.cos(u)
q=Math.cos(s)
u=Math.sin(u)
s=Math.sin(s)
p=x.d.a
p[12]=r*q
p[13]=t*u
p[14]=r*s
s=x.dx.a
p[12]=p[12]+s[0]
p[13]=p[13]+s[1]
p[14]=p[14]+s[2]
o=new T.r(new Float32Array(3))
o.q(0,1,0)
u=x.aE()
t=new Float32Array(3)
n=new T.r(t)
n.R(u)
t[0]=t[0]-s[0]
t[1]=t[1]-s[1]
t[2]=t[2]-s[2]
n.ay(0)
m=o.bw(n)
m.ay(0)
l=n.bw(m)
l.ay(0)
s=m.av(u)
q=l.av(u)
u=n.av(u)
k=m.a
j=k[0]
i=l.a
h=i[0]
g=t[0]
f=k[1]
e=i[1]
d=t[1]
k=k[2]
i=i[2]
t=t[2]
p[15]=1
p[14]=-u
p[13]=-q
p[12]=-s
p[11]=0
p[10]=t
p[9]=i
p[8]=k
p[7]=0
p[6]=d
p[5]=e
p[4]=f
p[3]=0
p[2]=g
p[1]=h
p[0]=j
j=x.f
h=j.a
h[0]=p[2]
h[1]=p[6]
h[2]=p[10]
x=-x.db
c=Math.sqrt(j.gax())
m=h[0]/c
l=h[1]/c
n=h[2]/c
b=Math.cos(x)
a=Math.sin(x)
a0=1-b
a1=m*m*a0+b
x=n*a
a2=m*l*a0-x
h=l*a
a3=m*n*a0+h
a4=l*m*a0+x
a5=l*l*a0+b
x=m*a
a6=l*n*a0-x
a7=n*m*a0-h
a8=n*l*a0+x
a9=n*n*a0+b
x=p[0]
h=p[4]
j=p[8]
g=p[1]
f=p[5]
e=p[9]
d=p[2]
k=p[6]
i=p[10]
t=p[3]
s=p[7]
q=p[11]
p[0]=x*a1+h*a4+j*a7
p[1]=g*a1+f*a4+e*a7
p[2]=d*a1+k*a4+i*a7
p[3]=t*a1+s*a4+q*a7
p[4]=x*a2+h*a5+j*a8
p[5]=g*a2+f*a5+e*a8
p[6]=d*a2+k*a5+i*a8
p[7]=t*a2+s*a5+q*a8
p[8]=x*a3+h*a6+j*a9
p[9]=g*a3+f*a6+e*a9
p[10]=d*a3+k*a6+i*a9
p[11]=t*a3+s*a6+q*a9
v.c.Y(0)
v.b.Y(0)
w.e=0
w.d=0
w.f=0
w.c.Y(0)
w.b.Y(0)
try{x=this.c
x.aW(x.f)
J.aU(x.d.a,x.c,null)}catch(b0){z=H.Y(b0)
P.ad(z)}this.d.cv(this.e,H.p([this.f,this.r],[G.bS]))
this.x.cG(y.a)
C.w.gdh(window).a_(this,-1)}},
kJ:{"^":"l:29;",
$1:function(a){H.f(a,"$isP")
C.w.bg(window,"Camera error "+H.e(a)+": - do you have a camera installed?")}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.dh.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.h8.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.aQ=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.eg=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.kr=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.ks=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.eh=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b6.prototype
return a}
J.aE=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).E(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kr(a).P(a,b)}
J.bg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kF(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).h(a,b)}
J.cK=function(a,b){return J.eh(a).ai(a,b)}
J.bD=function(a,b){return J.j(a).d3(a,b)}
J.eK=function(a,b,c,d){return J.j(a).d4(a,b,c,d)}
J.eL=function(a,b,c){return J.j(a).d5(a,b,c)}
J.cL=function(a,b){return J.j(a).bf(a,b)}
J.eM=function(a,b,c,d){return J.j(a).de(a,b,c,d)}
J.cM=function(a,b,c){return J.j(a).bi(a,b,c)}
J.eN=function(a,b){return J.j(a).dj(a,b)}
J.c5=function(a,b,c){return J.j(a).bj(a,b,c)}
J.aU=function(a,b,c){return J.j(a).bl(a,b,c)}
J.bE=function(a,b){return J.j(a).dm(a,b)}
J.eO=function(a,b){return J.j(a).bm(a,b)}
J.eP=function(a,b,c){return J.j(a).bn(a,b,c)}
J.cN=function(a,b,c,d){return J.j(a).bo(a,b,c,d)}
J.eQ=function(a,b,c,d,e){return J.j(a).bq(a,b,c,d,e)}
J.eR=function(a,b){return J.ks(a).K(a,b)}
J.c6=function(a,b,c){return J.aQ(a).dv(a,b,c)}
J.c7=function(a){return J.j(a).bs(a)}
J.eS=function(a){return J.j(a).bt(a)}
J.eT=function(a){return J.j(a).bv(a)}
J.eU=function(a){return J.j(a).dC(a)}
J.eV=function(a,b){return J.j(a).bx(a,b)}
J.c8=function(a,b){return J.j(a).by(a,b)}
J.eW=function(a,b,c,d){return J.j(a).bz(a,b,c,d)}
J.eX=function(a,b,c,d,e){return J.j(a).dE(a,b,c,d,e)}
J.eY=function(a,b,c,d,e){return J.j(a).bA(a,b,c,d,e)}
J.eZ=function(a,b,c,d,e,f){return J.j(a).dF(a,b,c,d,e,f)}
J.f_=function(a,b){return J.eg(a).t(a,b)}
J.bF=function(a,b){return J.j(a).bB(a,b)}
J.f0=function(a,b){return J.j(a).bC(a,b)}
J.f1=function(a){return J.j(a).dG(a)}
J.f2=function(a,b){return J.j(a).D(a,b)}
J.f3=function(a){return J.j(a).gdi(a)}
J.an=function(a){return J.C(a).gA(a)}
J.bG=function(a){return J.eg(a).gB(a)}
J.aV=function(a){return J.aQ(a).gj(a)}
J.f4=function(a){return J.j(a).gdN(a)}
J.f5=function(a){return J.j(a).gdV(a)}
J.f6=function(a){return J.c_(a).ge_(a)}
J.bH=function(a){return J.c_(a).gac(a)}
J.c9=function(a){return J.c_(a).ga0(a)}
J.cO=function(a){return J.c_(a).gc5(a)}
J.ca=function(a,b){return J.j(a).V(a,b)}
J.f7=function(a){return J.j(a).ad(a)}
J.f8=function(a){return J.j(a).aD(a)}
J.f9=function(a,b){return J.j(a).aF(a,b)}
J.fa=function(a,b,c){return J.j(a).aG(a,b,c)}
J.cP=function(a,b,c){return J.j(a).aK(a,b,c)}
J.fb=function(a,b){return J.j(a).bF(a,b)}
J.fc=function(a,b,c){return J.j(a).bL(a,b,c)}
J.cQ=function(a){return J.j(a).dP(a)}
J.fd=function(a,b,c,d){return J.j(a).aO(a,b,c,d)}
J.fe=function(a,b,c,d,e,f,g){return J.j(a).bO(a,b,c,d,e,f,g)}
J.ff=function(a,b,c,d){return J.j(a).bP(a,b,c,d)}
J.bI=function(a,b,c,d){return J.j(a).bQ(a,b,c,d)}
J.fg=function(a){return J.eh(a).dW(a)}
J.bh=function(a){return J.C(a).k(a)}
J.fh=function(a,b,c,d){return J.j(a).dY(a,b,c,d)}
J.fi=function(a,b,c){return J.j(a).bT(a,b,c)}
J.fj=function(a,b,c){return J.j(a).bU(a,b,c)}
J.cb=function(a,b,c){return J.j(a).bV(a,b,c)}
J.fk=function(a,b,c){return J.j(a).bW(a,b,c)}
J.cR=function(a,b,c){return J.j(a).bX(a,b,c)}
J.cS=function(a,b,c){return J.j(a).bY(a,b,c)}
J.cT=function(a,b,c){return J.j(a).bZ(a,b,c)}
J.cU=function(a,b,c,d){return J.j(a).c_(a,b,c,d)}
J.cV=function(a,b,c,d){return J.j(a).c0(a,b,c,d)}
J.fl=function(a,b){return J.j(a).c1(a,b)}
J.fm=function(a,b,c){return J.j(a).dZ(a,b,c)}
J.fn=function(a,b,c,d,e,f,g){return J.j(a).c2(a,b,c,d,e,f,g)}
J.fo=function(a,b,c,d,e){return J.j(a).c4(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bJ.prototype
C.I=W.cf.prototype
C.x=W.fD.prototype
C.p=W.fL.prototype
C.J=W.fN.prototype
C.K=W.h0.prototype
C.q=W.h1.prototype
C.L=J.h.prototype
C.a=J.bm.prototype
C.y=J.dh.prototype
C.e=J.di.prototype
C.M=J.dj.prototype
C.r=J.bn.prototype
C.h=J.bo.prototype
C.T=J.bp.prototype
C.i=H.hz.prototype
C.m=H.hA.prototype
C.X=W.hB.prototype
C.Y=W.hF.prototype
C.B=J.hN.prototype
C.C=W.hX.prototype
C.H=W.io.prototype
C.v=J.b6.prototype
C.ae=W.aL.prototype
C.w=W.iA.prototype
C.d=new P.ju()
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.p(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.V=H.p(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.W=H.p(I.aS([]),[P.d])
C.t=H.p(I.aS(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.p(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.E("vec3","vertex btangents",0)
C.c=new G.E("vec3","",0)
C.a_=new G.E("vec4","delta from light",0)
C.n=new G.E("","",0)
C.D=new G.E("vec3","vertex coordinates",0)
C.a0=new G.E("vec3","vertex binormals",0)
C.E=new G.E("vec4","for wireframe",0)
C.a1=new G.E("vec4","per vertex color",0)
C.a2=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a4=new G.E("mat4","",4)
C.a3=new G.E("mat4","",128)
C.b=new G.E("float","",0)
C.a5=new G.E("float","",4)
C.a6=new G.E("float","depth for shadowmaps",0)
C.f=new G.E("sampler2D","",0)
C.a7=new G.E("float","for bump maps",0)
C.a8=new G.E("vec2","texture uvs",0)
C.a9=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.aa=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.ab=new G.E("vec3","vertex normals",0)
C.ac=new G.E("sampler2DShadow","",0)
C.F=new G.E("vec3","per vertex color",0)
C.G=new G.E("mat3","",0)
C.ad=new G.E("vec3","vertex tangents",0)
$.a7=0
$.aW=null
$.cY=null
$.cw=!1
$.ej=null
$.eb=null
$.eo=null
$.bZ=null
$.c2=null
$.cD=null
$.aN=null
$.b8=null
$.b9=null
$.cx=!1
$.D=C.d
$.ae=null
$.ch=null
$.d8=null
$.d7=null
$.d4=null
$.d3=null
$.d2=null
$.d1=null
$.ef=0
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
I.$lazy(y,x,w)}})(["l3","et",function(){return H.ei("_$dart_dartClosure")},"lF","cH",function(){return H.ei("_$dart_js")},"mr","ew",function(){return H.ab(H.bR({
toString:function(){return"$receiver$"}}))},"ms","ex",function(){return H.ab(H.bR({$method$:null,
toString:function(){return"$receiver$"}}))},"mt","ey",function(){return H.ab(H.bR(null))},"mu","ez",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mx","eC",function(){return H.ab(H.bR(void 0))},"my","eD",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mw","eB",function(){return H.ab(H.dE(null))},"mv","eA",function(){return H.ab(function(){try{null.$method$}catch(z){return z.message}}())},"mA","eF",function(){return H.ab(H.dE(void 0))},"mz","eE",function(){return H.ab(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mJ","cI",function(){return P.iD()},"n_","bf",function(){return[]},"l0","es",function(){return{}},"mR","eH",function(){return P.cn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mS","cJ",function(){return P.a9(P.d,P.bk)},"md","eu",function(){return new G.dD(1281,0,4294967295)},"kW","eq",function(){return new G.dC(1281,1281,1281)},"mY","a5",function(){return P.cm(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.b,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.E)},"mm","ev",function(){var z=G.iq()
z.b=!0
return z},"kZ","er",function(){return T.aK(0,0,0)},"n5","eJ",function(){var z,y
z=G.dw("Textured")
y=[P.d]
z.cp(H.p(["aPosition","aTexUV"],y))
z.aQ(H.p(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aR(H.p(["vTexUV"],y))
z.b=z.aY(!1,H.x(H.p(["void main() {\n  gl_Position = uPerspectiveViewMatrix * \n                uModelMatrix * \n                vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y),"$isa",y,"$asa"),null)
return z},"n4","eI",function(){var z,y
z=G.dw("TexturedF")
y=[P.d]
z.aR(H.p(["vTexUV"],y))
z.aQ(H.p(["uColor","uTexture"],y))
z.b=z.aY(!0,H.x(H.p(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"],y),"$isa",y,"$asa"),null)
return z},"mO","eG",function(){return H.p([T.aK(0,0,1),T.aK(0,0,-1),T.aK(0,1,0),T.aK(0,-1,0),T.aK(1,0,0),T.aK(-1,0,0)],[T.r])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.z,args:[W.U]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.R,args:[W.S,P.d,P.d,W.bw]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.d,args:[P.F]},{func:1,args:[,]},{func:1,ret:P.z,args:[W.aI]},{func:1,ret:P.R,args:[W.aa]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:-1,args:[W.O]},{func:1,ret:P.z,args:[W.b_]},{func:1,ret:P.R,args:[W.t]},{func:1,ret:P.z,args:[P.G]},{func:1,args:[W.O]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,args:[P.d]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.bt]},{func:1,args:[,P.d]},{func:1,ret:P.z,args:[,],opt:[P.a1]},{func:1,ret:[P.Q,,],args:[,]},{func:1,ret:P.z,args:[W.aL]},{func:1,ret:P.z,args:[P.b]},{func:1,ret:P.F,args:[P.F,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.z,args:[P.P]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.z,args:[W.bq]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:-1,args:[W.t,W.t]}]
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
if(x==y)H.kP(d||a)
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
Isolate.aS=a.aS
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
if(typeof dartMainRunner==="function")dartMainRunner(U.el,[])
else U.el([])})})()
//# sourceMappingURL=camera_texture.dart.js.map
