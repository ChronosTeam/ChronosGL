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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isj)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cJ(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bj=function(){}
var dart=[["","",,H,{"^":"",md:{"^":"c;a"}}],["","",,J,{"^":"",
cN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c9:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cM==null){H.l5()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dT("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cQ()]
if(v!=null)return v
v=H.la(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cQ(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
j:{"^":"c;",
G:function(a,b){return a===b},
gB:function(a){return H.bb(a)},
k:["cw",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hA:{"^":"j;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isW:1},
hB:{"^":"j;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isB:1},
cs:{"^":"j;",
gB:function(a){return 0},
k:["cA",function(a){return String(a)}]},
id:{"^":"cs;"},
be:{"^":"cs;"},
bD:{"^":"cs;",
k:function(a){var z=a[$.eJ()]
if(z==null)return this.cA(a)
return"JavaScript function for "+H.h(J.br(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbw:1},
bA:{"^":"j;$ti",
j:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.a8(P.C("add"))
a.push(b)},
I:function(a,b){var z,y
H.u(b,"$ism",[H.p(a,0)],"$asm")
if(!!a.fixed$length)H.a8(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.h(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gdX:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cq())},
bv:function(a,b){var z,y
H.l(b,{func:1,ret:P.W,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aP(a))}return!1},
cr:function(a,b){if(!!a.immutable$list)H.a8(P.C("sort"))
H.iG(a,J.kH(),H.p(a,0))},
au:function(a){return this.cr(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aO(a[z],b))return!0
return!1},
k:function(a){return P.cp(a,"[","]")},
gD:function(a){return new J.fM(a,a.length,0,[H.p(a,0)])},
gB:function(a){return H.bb(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bi(a,b))
return a[b]},
h:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.a8(P.C("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bi(a,b))
a[b]=c},
$isx:1,
$asx:I.bj,
$ism:1,
$isa:1,
p:{
hz:function(a,b){return J.cr(H.f(a,[b]))},
cr:function(a){H.b_(a)
a.fixed$length=Array
return a},
mb:[function(a,b){return J.fc(H.ey(a,"$isa1"),H.ey(b,"$isa1"))},"$2","kH",8,0,32]}},
mc:{"^":"bA;$ti"},
fM:{"^":"c;a,b,c,0d,$ti",
sba:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.G(z))
x=this.c
if(x>=y){this.sba(null)
return!1}this.sba(z[x]);++this.c
return!0},
$isb5:1},
bB:{"^":"j;",
O:function(a,b){var z
H.cO(b)
if(typeof b!=="number")throw H.d(H.bh(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gas(b)
if(this.gas(a)===z)return 0
if(this.gas(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gas:function(a){return a===0?1/a<0:a<0},
c5:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.C(""+a+".toInt()"))},
dE:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.C(""+a+".ceil()"))},
dF:function(a,b,c){if(this.O(b,c)>0)throw H.d(H.bh(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
e9:function(a,b){var z
if(b>20)throw H.d(P.bY(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gas(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
cC:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bs(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.bs(a,b)},
bs:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.C("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bq:function(a,b){var z
if(a>0)z=this.dn(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dn:function(a,b){return b>31?0:a>>>b},
Z:function(a,b){if(typeof b!=="number")throw H.d(H.bh(b))
return a>b},
$isa1:1,
$asa1:function(){return[P.H]},
$isa7:1,
$isH:1},
du:{"^":"bB;",$isF:1},
dt:{"^":"bB;"},
bC:{"^":"j;",
ay:function(a,b){if(b>=a.length)throw H.d(H.bi(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.w(b)
if(typeof b!=="string")throw H.d(P.d9(b,null,null))
return a+b},
ct:function(a,b,c){var z
if(c>a.length)throw H.d(P.bY(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cs:function(a,b){return this.ct(a,b,0)},
cv:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bZ(b,null,null))
if(b>c)throw H.d(P.bZ(b,null,null))
if(c>a.length)throw H.d(P.bZ(c,null,null))
return a.substring(b,c)},
cu:function(a,b){return this.cv(a,b,null)},
e8:function(a){return a.toLowerCase()},
dH:function(a,b,c){if(c>a.length)throw H.d(P.bY(c,0,a.length,null,null))
return H.li(a,b,c)},
O:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.d(H.bh(b))
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
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.d(H.bi(a,b))
return a[b]},
$isx:1,
$asx:I.bj,
$isa1:1,
$asa1:function(){return[P.e]},
$isib:1,
$ise:1}}],["","",,H,{"^":"",
cq:function(){return new P.cA("No element")},
hy:function(){return new P.cA("Too many elements")},
iG:function(a,b,c){H.u(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.F,args:[c,c]})
H.bE(a,0,J.b1(a)-1,b,c)},
bE:function(a,b,c,d,e){H.u(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.iF(a,b,c,d,e)
else H.iE(a,b,c,d,e)},
iF:function(a,b,c,d,e){var z,y,x,w,v
H.u(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.F,args:[e,e]})
for(z=b+1,y=J.bl(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iE:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.u(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.F,args:[a2,a2]})
z=C.e.a1(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.a1(b+a0,2)
v=w-z
u=w+z
t=J.bl(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ad(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ad(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ad(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ad(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ad(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ad(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ad(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ad(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ad(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aO(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.ac()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.Z()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
l=h
m=g
break}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.ac()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.Z()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.Z()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ac()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.h(a,b,t.i(a,c))
t.h(a,c,r)
c=l+1
t.h(a,a0,t.i(a,c))
t.h(a,c,p)
H.bE(a,b,m-2,a1,a2)
H.bE(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aO(a1.$2(t.i(a,m),r),0);)++m
for(;J.aO(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ac()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bE(a,m,l,a1,a2)}else H.bE(a,m,l,a1,a2)},
dl:{"^":"m;"},
bX:{"^":"dl;$ti",
gD:function(a){return new H.dy(this,this.gl(this),0,[H.cL(this,"bX",0)])},
aQ:function(a,b){return this.cz(0,H.l(b,{func:1,ret:P.W,args:[H.cL(this,"bX",0)]}))}},
dy:{"^":"c;a,b,c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bl(z)
x=y.gl(z)
if(this.b!==x)throw H.d(P.aP(z))
w=this.c
if(w>=x){this.sbb(null)
return!1}this.sbb(y.u(z,w));++this.c
return!0},
$isb5:1},
hR:{"^":"bX;a,b,$ti",
gl:function(a){return J.b1(this.a)},
u:function(a,b){return this.b.$1(J.fl(this.a,b))},
$asbX:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
dU:{"^":"m;a,b,$ti",
gD:function(a){return new H.j3(J.bQ(this.a),this.b,this.$ti)}},
j3:{"^":"b5;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bV:{"^":"c;$ti"}}],["","",,H,{"^":"",
aN:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kY:function(a){return init.types[H.Q(a)]},
l8:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isy},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.br(a)
if(typeof z!=="string")throw H.d(H.bh(a))
return z},
bb:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bc:function(a){return H.ie(a)+H.c5(H.ap(a),0,null)},
ie:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isbe){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aN(w.length>1&&C.i.ay(w,0)===36?C.i.cu(w,1):w)},
aQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
im:function(a){var z=H.aQ(a).getFullYear()+0
return z},
ik:function(a){var z=H.aQ(a).getMonth()+1
return z},
ig:function(a){var z=H.aQ(a).getDate()+0
return z},
ih:function(a){var z=H.aQ(a).getHours()+0
return z},
ij:function(a){var z=H.aQ(a).getMinutes()+0
return z},
il:function(a){var z=H.aQ(a).getSeconds()+0
return z},
ii:function(a){var z=H.aQ(a).getMilliseconds()+0
return z},
aK:function(a){throw H.d(H.bh(a))},
k:function(a,b){if(a==null)J.b1(a)
throw H.d(H.bi(a,b))},
bi:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
z=H.Q(J.b1(a))
if(!(b<0)){if(typeof z!=="number")return H.aK(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bZ(b,"index",null)},
bh:function(a){return new P.as(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.cy()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eB})
z.name=""}else z.toString=H.eB
return z},
eB:function(){return J.br(this.dartException)},
a8:function(a){throw H.d(a)},
G:function(a){throw H.d(P.aP(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bq(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ct(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eM()
u=$.eN()
t=$.eO()
s=$.eP()
r=$.eS()
q=$.eT()
p=$.eR()
$.eQ()
o=$.eV()
n=$.eU()
m=v.M(y)
if(m!=null)return z.$1(H.ct(H.w(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.ct(H.w(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(H.w(y),m))}}return z.$1(new H.j_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dK()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.as(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dK()
return a},
aJ:function(a){var z
if(a==null)return new H.ea(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ea(a)},
kU:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
l7:function(a,b,c,d,e,f){H.i(a,"$isbw")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.dq("Unsupported number of arguments for wrapped closure"))},
aZ:function(a,b){var z
H.Q(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l7)
a.$identity=z
return z},
fY:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.ir(z).r}else x=d
w=e?Object.create(new H.iH().constructor.prototype):Object.create(new H.ck(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.L()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.de(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kY,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dc:H.cl
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.de(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fV:function(a,b,c,d){var z=H.cl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
de:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fX(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fV(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.L()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b2
if(v==null){v=H.bT("self")
$.b2=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.L()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b2
if(v==null){v=H.bT("self")
$.b2=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fW:function(a,b,c,d){var z,y
z=H.cl
y=H.dc
switch(b?-1:a){case 0:throw H.d(H.ix("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fX:function(a,b){var z,y,x,w,v,u,t,s
z=$.b2
if(z==null){z=H.bT("self")
$.b2=z}y=$.db
if(y==null){y=H.bT("receiver")
$.db=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fW(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ae
if(typeof y!=="number")return y.L()
$.ae=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ae
if(typeof y!=="number")return y.L()
$.ae=y+1
return new Function(z+y+"}")()},
cJ:function(a,b,c,d,e,f,g){return H.fY(a,b,H.Q(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aa(a,"String"))},
ep:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aa(a,"double"))},
cO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aa(a,"num"))},
c7:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aa(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aa(a,"int"))},
cP:function(a,b){throw H.d(H.aa(a,H.aN(H.w(b).substring(3))))},
lf:function(a,b){throw H.d(H.dd(a,H.aN(H.w(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cP(a,b)},
aq:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.lf(a,b)},
ey:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cP(a,b)},
b_:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.d(H.aa(a,"List<dynamic>"))},
l9:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cP(a,b)},
cK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Q(z)]
else return a.$S()}return},
bJ:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cK(J.A(a))
if(z==null)return!1
return H.eg(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.cF)return a
$.cF=!0
try{if(H.bJ(a,b))return a
z=H.bM(b)
y=H.aa(a,z)
throw H.d(y)}finally{$.cF=!1}},
bk:function(a,b){if(a!=null&&!H.cI(a,b))H.a8(H.aa(a,H.bM(b)))
return a},
ek:function(a){var z,y
z=J.A(a)
if(!!z.$iso){y=H.cK(z)
if(y!=null)return H.bM(y)
return"Closure"}return H.bc(a)},
lj:function(a){throw H.d(new P.h4(H.w(a)))},
eu:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
nD:function(a,b,c){return H.b0(a["$as"+H.h(c)],H.ap(b))},
bm:function(a,b,c,d){var z
H.w(c)
H.Q(d)
z=H.b0(a["$as"+H.h(c)],H.ap(b))
return z==null?null:z[d]},
cL:function(a,b,c){var z
H.w(b)
H.Q(c)
z=H.b0(a["$as"+H.h(b)],H.ap(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.Q(b)
z=H.ap(a)
return z==null?null:z[b]},
bM:function(a){return H.aI(a,null)},
aI:function(a,b){var z,y
H.u(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aN(a[0].builtin$cls)+H.c5(a,1,b)
if(typeof a=="function")return H.aN(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.h(b[y])}if('func' in a)return H.kG(a,b)
if('futureOr' in a)return"FutureOr<"+H.aI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.u(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aI(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aI(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aI(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aI(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kT(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aI(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c5:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cB("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aI(u,c)}return"<"+z.k(0)+">"},
kX:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$iso){y=H.cK(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ap(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ao:function(a,b,c,d){var z,y
H.w(b)
H.b_(c)
H.w(d)
if(a==null)return!1
z=H.ap(a)
y=J.A(a)
if(y[b]==null)return!1
return H.en(H.b0(y[d],z),null,c,null)},
bN:function(a,b,c,d){H.w(b)
H.b_(c)
H.w(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.d(H.dd(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aN(b.substring(3))+H.c5(c,0,null),init.mangledGlobalNames)))},
u:function(a,b,c,d){H.w(b)
H.b_(c)
H.w(d)
if(a==null)return a
if(H.ao(a,b,c,d))return a
throw H.d(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aN(b.substring(3))+H.c5(c,0,null),init.mangledGlobalNames)))},
en:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
nA:function(a,b,c){return a.apply(b,H.b0(J.A(b)["$as"+H.h(c)],H.ap(b)))},
ew:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="B"||a===-1||a===-2||H.ew(z)}return!1},
cI:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="B"||b===-1||b===-2||H.ew(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bJ(a,b)}z=J.A(a).constructor
y=H.ap(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a5(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cI(a,b))throw H.d(H.aa(a,H.bM(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.eg(a,b,c,d)
if('func' in a)return c.builtin$cls==="bw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"a2" in y.prototype))return!1
w=y.prototype["$as"+"a2"]
v=H.b0(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.en(H.b0(r,z),b,u,d)},
eg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a5(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a5(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a5(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a5(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.le(m,b,l,d)},
le:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
nB:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
la:function(a){var z,y,x,w,v,u
z=H.w($.ev.$1(a))
y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ca[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.em.$2(a,z))
if(z!=null){y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ca[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cb(x)
$.c8[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ca[z]=x
return x}if(v==="-"){u=H.cb(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ez(a,x)
if(v==="*")throw H.d(P.dT(z))
if(init.leafTags[z]===true){u=H.cb(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ez(a,x)},
ez:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cN(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cb:function(a){return J.cN(a,!1,null,!!a.$isy)},
ld:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cb(z)
else return J.cN(z,c,null,null)},
l5:function(){if(!0===$.cM)return
$.cM=!0
H.l6()},
l6:function(){var z,y,x,w,v,u,t,s
$.c8=Object.create(null)
$.ca=Object.create(null)
H.l1()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eA.$1(v)
if(u!=null){t=H.ld(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l1:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aY(C.O,H.aY(C.T,H.aY(C.B,H.aY(C.B,H.aY(C.S,H.aY(C.P,H.aY(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ev=new H.l2(v)
$.em=new H.l3(u)
$.eA=new H.l4(t)},
aY:function(a,b){return a(b)||b},
li:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iq:{"^":"c;a,b,c,d,e,f,r,0x",p:{
ir:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
y=z[0]
x=z[1]
return new H.iq(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iV:{"^":"c;a,b,c,d,e,f",
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
ag:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i8:{"^":"R;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dF:function(a,b){return new H.i8(a,b==null?null:b.method)}}},
hC:{"^":"R;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
p:{
ct:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hC(a,y,z?null:b.receiver)}}},
j_:{"^":"R;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lk:{"^":"o:6;a",
$1:function(a){if(!!J.A(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ea:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isV:1},
o:{"^":"c;",
k:function(a){return"Closure '"+H.bc(this).trim()+"'"},
gcl:function(){return this},
$isbw:1,
gcl:function(){return this}},
dM:{"^":"o;"},
iH:{"^":"dM;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aN(z)+"'"}},
ck:{"^":"dM;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ck))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.bb(this.a)
else y=typeof z!=="object"?J.ar(z):H.bb(z)
return(y^H.bb(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
p:{
cl:function(a){return a.a},
dc:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.ck("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iW:{"^":"R;a",
k:function(a){return this.a},
p:{
aa:function(a,b){return new H.iW("TypeError: "+P.bU(a)+": type '"+H.ek(a)+"' is not a subtype of type '"+b+"'")}}},
fT:{"^":"R;a",
k:function(a){return this.a},
p:{
dd:function(a,b){return new H.fT("CastError: "+P.bU(a)+": type '"+H.ek(a)+"' is not a subtype of type '"+b+"'")}}},
iw:{"^":"R;a",
k:function(a){return"RuntimeError: "+H.h(this.a)},
p:{
ix:function(a){return new H.iw(a)}}},
dR:{"^":"c;a,0b,0c,0d",
gan:function(){var z=this.b
if(z==null){z=H.bM(this.a)
this.b=z}return z},
k:function(a){return this.gan()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gan())
this.d=z}return z},
G:function(a,b){if(b==null)return!1
return b instanceof H.dR&&this.gan()===b.gan()}},
dv:{"^":"dz;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gJ:function(a){return new H.aw(this,[H.p(this,0)])},
ar:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d3(z,b)}else{y=this.dV(b)
return y}},
dV:function(a){var z=this.d
if(z==null)return!1
return this.aL(this.aD(z,J.ar(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ak(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ak(w,b)
x=y==null?null:y.b
return x}else return this.dW(b)},
dW:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aD(z,J.ar(a)&0x3ffffff)
x=this.aL(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aF()
this.b=z}this.bc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aF()
this.c=y}this.bc(y,b,c)}else{x=this.d
if(x==null){x=this.aF()
this.d=x}w=J.ar(b)&0x3ffffff
v=this.aD(x,w)
if(v==null)this.aH(x,w,[this.aw(b,c)])
else{u=this.aL(v,b)
if(u>=0)v[u].b=c
else v.push(this.aw(b,c))}}},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aP(this))
z=z.c}},
bc:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.ak(a,b)
if(z==null)this.aH(a,b,this.aw(b,c))
else z.b=c},
be:function(){this.r=this.r+1&67108863},
aw:function(a,b){var z,y
z=new H.hH(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.be()
return z},
aL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aO(a[y].a,b))return y
return-1},
k:function(a){return P.dA(this)},
ak:function(a,b){return a[b]},
aD:function(a,b){return a[b]},
aH:function(a,b,c){a[b]=c},
d4:function(a,b){delete a[b]},
d3:function(a,b){return this.ak(a,b)!=null},
aF:function(){var z=Object.create(null)
this.aH(z,"<non-identifier-key>",z)
this.d4(z,"<non-identifier-key>")
return z},
$isdw:1},
hH:{"^":"c;a,b,0c,0d"},
aw:{"^":"dl;a,$ti",
gl:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hI(z,z.r,this.$ti)
y.c=z.e
return y}},
hI:{"^":"c;a,b,0c,0d,$ti",
sbd:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aP(z))
else{z=this.c
if(z==null){this.sbd(null)
return!1}else{this.sbd(z.a)
this.c=this.c.c
return!0}}},
$isb5:1},
l2:{"^":"o:6;a",
$1:function(a){return this.a(a)}},
l3:{"^":"o:15;a",
$2:function(a,b){return this.a(a,b)}},
l4:{"^":"o:16;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
kT:function(a){return J.hz(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
cc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c4:function(a){var z,y
if(!!J.A(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ah:function(a,b,c){H.b_(b)
if(a>>>0!==a||a>=c)throw H.d(H.bi(b,a))},
i2:{"^":"j;",$isiX:1,"%":"DataView;ArrayBufferView;cx|e4|e5|dD|e6|e7|ay"},
cx:{"^":"i2;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bj,
$isy:1,
$asy:I.bj},
dD:{"^":"e5;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
h:function(a,b,c){H.ep(c)
H.ah(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.a7]},
$asq:function(){return[P.a7]},
$ism:1,
$asm:function(){return[P.a7]},
$isa:1,
$asa:function(){return[P.a7]},
"%":"Float64Array"},
ay:{"^":"e7;",
h:function(a,b,c){H.Q(c)
H.ah(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.F]},
$asq:function(){return[P.F]},
$ism:1,
$asm:function(){return[P.F]},
$isa:1,
$asa:function(){return[P.F]}},
i1:{"^":"dD;",$isak:1,"%":"Float32Array"},
ml:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mm:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ishw:1,
"%":"Int32Array"},
mn:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mo:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
i3:{"^":"ay;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isn8:1,
"%":"Uint32Array"},
mp:{"^":"ay;",
gl:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mq:{"^":"ay;",
gl:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e4:{"^":"cx+q;"},
e5:{"^":"e4+bV;"},
e6:{"^":"cx+q;"},
e7:{"^":"e6+bV;"}}],["","",,P,{"^":"",
j8:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aZ(new P.ja(z),1)).observe(y,{childList:true})
return new P.j9(z,y,x)}else if(self.setImmediate!=null)return P.kP()
return P.kQ()},
nj:[function(a){self.scheduleImmediate(H.aZ(new P.jb(H.l(a,{func:1,ret:-1})),0))},"$1","kO",4,0,5],
nk:[function(a){self.setImmediate(H.aZ(new P.jc(H.l(a,{func:1,ret:-1})),0))},"$1","kP",4,0,5],
nl:[function(a){H.l(a,{func:1,ret:-1})
P.kn(0,a)},"$1","kQ",4,0,5],
hn:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.u(a,"$ism",[[P.a2,d]],"$asm")
s=[[P.a,d]]
y=new P.U(0,$.D,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hp(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.G)(r),++p){w=r[p]
v=o
w.aP(new P.ho(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.U(0,$.D,s)
r.bh(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.f(r,[d])}catch(n){u=H.a3(n)
t=H.aJ(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.cy()
r=$.D
if(r!==C.d)r.toString
s=new P.U(0,r,s)
s.d0(m,t)
return s}else{z.c=u
z.d=t}}return y},
kK:function(a,b){if(H.bJ(a,{func:1,args:[P.c,P.V]}))return H.l(a,{func:1,ret:null,args:[P.c,P.V]})
if(H.bJ(a,{func:1,args:[P.c]}))return H.l(a,{func:1,ret:null,args:[P.c]})
throw H.d(P.d9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kJ:function(){var z,y
for(;z=$.aW,z!=null;){$.bg=null
y=z.b
$.aW=y
if(y==null)$.bf=null
z.a.$0()}},
ny:[function(){$.cG=!0
try{P.kJ()}finally{$.bg=null
$.cG=!1
if($.aW!=null)$.cS().$1(P.eo())}},"$0","eo",0,0,1],
ej:function(a){var z=new P.dW(H.l(a,{func:1,ret:-1}))
if($.aW==null){$.bf=z
$.aW=z
if(!$.cG)$.cS().$1(P.eo())}else{$.bf.b=z
$.bf=z}},
kN:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aW
if(z==null){P.ej(a)
$.bg=$.bf
return}y=new P.dW(a)
x=$.bg
if(x==null){y.b=z
$.bg=y
$.aW=y}else{y.b=x.b
x.b=y
$.bg=y
if(y.b==null)$.bf=y}},
lg:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.D
if(C.d===y){P.aX(null,null,C.d,a)
return}y.toString
P.aX(null,null,y,H.l(y.by(a),z))},
kF:function(a,b,c){a.dD(0)
b.aj(c)},
c6:function(a,b,c,d,e){var z={}
z.a=d
P.kN(new P.kL(z,e))},
eh:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
ei:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kM:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aX:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.by(d):c.dA(d,-1)
P.ej(d)},
ja:{"^":"o:7;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j9:{"^":"o:17;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jb:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jc:{"^":"o:0;a",
$0:function(){this.a.$0()}},
km:{"^":"c;a,0b,c",
cY:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aZ(new P.ko(this,b),0),a)
else throw H.d(P.C("`setTimeout()` not found."))},
p:{
kn:function(a,b){var z=new P.km(!0,0)
z.cY(a,b)
return z}}},
ko:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a2:{"^":"c;$ti"},
hp:{"^":"o:18;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isV")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.W(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.W(z.c,z.d)}},
ho:{"^":"o;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bj(z.a)}else if(z.b===0&&!this.e)this.c.W(z.c,z.d)},
$S:function(){return{func:1,ret:P.B,args:[this.f]}}},
dZ:{"^":"c;$ti"},
j7:{"^":"dZ;a,$ti",
dG:function(a,b){var z
H.bk(b,{futureOr:1,type:H.p(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.c0("Future already completed"))
z.bh(b)}},
kh:{"^":"dZ;a,$ti"},
aU:{"^":"c;0a,b,c,d,e,$ti",
dY:function(a){if(this.c!==6)return!0
return this.b.b.aN(H.l(this.d,{func:1,ret:P.W,args:[P.c]}),a.a,P.W,P.c)},
dU:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bJ(z,{func:1,args:[P.c,P.V]}))return H.bk(w.e4(z,a.a,a.b,null,y,P.V),x)
else return H.bk(w.aN(H.l(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
U:{"^":"c;br:a<,b,0dk:c<,$ti",
aP:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.d){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kK(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.U(0,$.D,[c])
w=b==null?1:3
this.bg(new P.aU(x,w,a,b,[z,c]))
return x},
Y:function(a,b){return this.aP(a,null,b)},
bg:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaU")
this.c=a}else{if(z===2){y=H.i(this.c,"$isU")
z=y.a
if(z<4){y.bg(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aX(null,null,z,H.l(new P.jt(this,a),{func:1,ret:-1}))}},
bo:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaU")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isU")
y=u.a
if(y<4){u.bo(a)
return}this.a=y
this.c=u.c}z.a=this.am(a)
y=this.b
y.toString
P.aX(null,null,y,H.l(new P.jA(z,this),{func:1,ret:-1}))}},
al:function(){var z=H.i(this.c,"$isaU")
this.c=null
return this.am(z)},
am:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aj:function(a){var z,y,x
z=H.p(this,0)
H.bk(a,{futureOr:1,type:z})
y=this.$ti
if(H.ao(a,"$isa2",y,"$asa2"))if(H.ao(a,"$isU",y,null))P.c2(a,this)
else P.e_(a,this)
else{x=this.al()
H.z(a,z)
this.a=4
this.c=a
P.aV(this,x)}},
bj:function(a){var z
H.z(a,H.p(this,0))
z=this.al()
this.a=4
this.c=a
P.aV(this,z)},
W:function(a,b){var z
H.i(b,"$isV")
z=this.al()
this.a=8
this.c=new P.a4(a,b)
P.aV(this,z)},
bh:function(a){var z
H.bk(a,{futureOr:1,type:H.p(this,0)})
if(H.ao(a,"$isa2",this.$ti,"$asa2")){this.d1(a)
return}this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.l(new P.jv(this,a),{func:1,ret:-1}))},
d1:function(a){var z=this.$ti
H.u(a,"$isa2",z,"$asa2")
if(H.ao(a,"$isU",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.l(new P.jz(this,a),{func:1,ret:-1}))}else P.c2(a,this)
return}P.e_(a,this)},
d0:function(a,b){var z
H.i(b,"$isV")
this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.l(new P.ju(this,a,b),{func:1,ret:-1}))},
$isa2:1,
p:{
e_:function(a,b){var z,y,x
b.a=1
try{a.aP(new P.jw(b),new P.jx(b),null)}catch(x){z=H.a3(x)
y=H.aJ(x)
P.lg(new P.jy(b,z,y))}},
c2:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isU")
if(z>=4){y=b.al()
b.a=a.a
b.c=a.c
P.aV(b,y)}else{y=H.i(b.c,"$isaU")
b.a=2
b.c=a
a.bo(y)}},
aV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa4")
y=y.b
u=v.a
t=v.b
y.toString
P.c6(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aV(z.a,b)}y=z.a
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
if(p){H.i(r,"$isa4")
y=y.b
u=r.a
t=r.b
y.toString
P.c6(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jD(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jC(x,b,r).$0()}else if((y&2)!==0)new P.jB(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.A(y).$isa2){if(y.a>=4){n=H.i(t.c,"$isaU")
t.c=null
b=t.am(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c2(y,t)
return}}m=b.b
n=H.i(m.c,"$isaU")
m.c=null
b=m.am(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa4")
m.a=8
m.c=u}z.a=m
y=m}}}},
jt:{"^":"o:0;a,b",
$0:function(){P.aV(this.a,this.b)}},
jA:{"^":"o:0;a,b",
$0:function(){P.aV(this.b,this.a.a)}},
jw:{"^":"o:7;a",
$1:function(a){var z=this.a
z.a=0
z.aj(a)}},
jx:{"^":"o:19;a",
$2:function(a,b){H.i(b,"$isV")
this.a.W(a,b)},
$1:function(a){return this.$2(a,null)}},
jy:{"^":"o:0;a,b,c",
$0:function(){this.a.W(this.b,this.c)}},
jv:{"^":"o:0;a,b",
$0:function(){var z=this.a
z.bj(H.z(this.b,H.p(z,0)))}},
jz:{"^":"o:0;a,b",
$0:function(){P.c2(this.b,this.a)}},
ju:{"^":"o:0;a,b,c",
$0:function(){this.a.W(this.b,this.c)}},
jD:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c2(H.l(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aJ(v)
if(this.d){w=H.i(this.a.a.c,"$isa4").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa4")
else u.b=new P.a4(y,x)
u.a=!0
return}if(!!J.A(z).$isa2){if(z instanceof P.U&&z.gbr()>=4){if(z.gbr()===8){w=this.b
w.b=H.i(z.gdk(),"$isa4")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.Y(new P.jE(t),null)
w.a=!1}}},
jE:{"^":"o:20;a",
$1:function(a){return this.a}},
jC:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aN(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aJ(t)
x=this.a
x.b=new P.a4(z,y)
x.a=!0}}},
jB:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa4")
w=this.c
if(w.dY(z)&&w.e!=null){v=this.b
v.b=w.dU(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aJ(u)
w=H.i(this.a.a.c,"$isa4")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a4(y,x)
s.a=!0}}},
dW:{"^":"c;a,0b"},
iL:{"^":"c;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.U(0,$.D,[P.F])
z.a=0
x=H.p(this,0)
w=H.l(new P.iP(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.iQ(z,y),{func:1,ret:-1})
W.an(this.a,this.b,w,!1,x)
return y},
gdS:function(a){var z,y,x,w
z={}
y=new P.U(0,$.D,this.$ti)
z.a=null
x=H.p(this,0)
w=H.l(new P.iN(z,this,y),{func:1,ret:-1,args:[x]})
H.l(new P.iO(y),{func:1,ret:-1})
z.a=W.an(this.a,this.b,w,!1,x)
return y}},
iP:{"^":"o;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.p(this.b,0)]}}},
iQ:{"^":"o:0;a,b",
$0:function(){this.b.aj(this.a.a)}},
iN:{"^":"o;a,b,c",
$1:function(a){H.z(a,H.p(this.b,0))
P.kF(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.B,args:[H.p(this.b,0)]}}},
iO:{"^":"o:0;a",
$0:function(){var z,y,x,w
try{x=H.cq()
throw H.d(x)}catch(w){z=H.a3(w)
y=H.aJ(w)
$.D.toString
this.a.W(z,y)}}},
iM:{"^":"c;"},
a4:{"^":"c;a,b",
k:function(a){return H.h(this.a)},
$isR:1},
ku:{"^":"c;",$isnh:1},
kL:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cy()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.k(0)
throw x}},
k0:{"^":"ku;",
e5:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.d===$.D){a.$0()
return}P.eh(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aJ(x)
P.c6(null,null,this,z,H.i(y,"$isV"))}},
e6:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.d===$.D){a.$1(b)
return}P.ei(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aJ(x)
P.c6(null,null,this,z,H.i(y,"$isV"))}},
dA:function(a,b){return new P.k2(this,H.l(a,{func:1,ret:b}),b)},
by:function(a){return new P.k1(this,H.l(a,{func:1,ret:-1}))},
dB:function(a,b){return new P.k3(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
c2:function(a,b){H.l(a,{func:1,ret:b})
if($.D===C.d)return a.$0()
return P.eh(null,null,this,a,b)},
aN:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.D===C.d)return a.$1(b)
return P.ei(null,null,this,a,b,c,d)},
e4:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.D===C.d)return a.$2(b,c)
return P.kM(null,null,this,a,b,c,d,e,f)}},
k2:{"^":"o;a,b,c",
$0:function(){return this.a.c2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k1:{"^":"o:1;a,b",
$0:function(){return this.a.e5(this.b)}},
k3:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.e6(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dx:function(a,b,c){H.b_(a)
return H.u(H.kU(a,new H.dv(0,0,[b,c])),"$isdw",[b,c],"$asdw")},
T:function(a,b){return new H.dv(0,0,[a,b])},
a9:function(a,b,c,d){return new P.jM(0,0,[d])},
hx:function(a,b,c){var z,y
if(P.cH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.f([],[P.e])
y=$.bn()
C.a.j(y,a)
try{P.kI(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dL(b,H.l9(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cp:function(a,b,c){var z,y,x
if(P.cH(a))return b+"..."+c
z=new P.cB(b)
y=$.bn()
C.a.j(y,a)
try{x=z
x.a=P.dL(x.ga0(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.ga0()+c
y=z.ga0()
return y.charCodeAt(0)==0?y:y},
cH:function(a){var z,y
for(z=0;y=$.bn(),z<y.length;++z)if(a===y[z])return!0
return!1},
kI:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[P.e],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.h(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.v()){if(x<=4){C.a.j(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.v();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cu:function(a,b){var z,y,x
z=P.a9(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x)z.j(0,H.z(a[x],b))
return z},
dA:function(a){var z,y,x
z={}
if(P.cH(a))return"{...}"
y=new P.cB("")
try{C.a.j($.bn(),a)
x=y
x.a=x.ga0()+"{"
z.a=!0
J.fo(a,new P.hQ(z,y))
z=y
z.a=z.ga0()+"}"}finally{z=$.bn()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.ga0()
return z.charCodeAt(0)==0?z:z},
jM:{"^":"jG;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.e3(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbI")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbI")!=null}else return this.d2(b)},
d2:function(a){var z=this.d
if(z==null)return!1
return this.aC(this.bm(z,a),a)>=0},
j:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cE()
this.b=z}return this.bf(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cE()
this.c=y}return this.bf(y,b)}else return this.cZ(0,b)},
cZ:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cE()
this.d=z}y=this.bk(b)
x=z[y]
if(x==null)z[y]=[this.aG(b)]
else{if(this.aC(x,b)>=0)return!1
x.push(this.aG(b))}return!0},
c1:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bp(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bp(this.c,b)
else return this.de(0,b)},
de:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bm(z,b)
x=this.aC(y,b)
if(x<0)return!1
this.bt(y.splice(x,1)[0])
return!0},
ab:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aE()}},
bf:function(a,b){H.z(b,H.p(this,0))
if(H.i(a[b],"$isbI")!=null)return!1
a[b]=this.aG(b)
return!0},
bp:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbI")
if(z==null)return!1
this.bt(z)
delete a[b]
return!0},
aE:function(){this.r=this.r+1&67108863},
aG:function(a){var z,y
z=new P.bI(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aE()
return z},
bt:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aE()},
bk:function(a){return J.ar(a)&0x3ffffff},
bm:function(a,b){return a[this.bk(b)]},
aC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aO(a[y].a,b))return y
return-1},
p:{
cE:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bI:{"^":"c;a,0b,0c"},
e3:{"^":"c;a,b,0c,0d,$ti",
sbi:function(a){this.d=H.z(a,H.p(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aP(z))
else{z=this.c
if(z==null){this.sbi(null)
return!1}else{this.sbi(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isb5:1,
p:{
jN:function(a,b,c){var z=new P.e3(a,b,[c])
z.c=a.e
return z}}},
jG:{"^":"iy;"},
hJ:{"^":"jO;",$ism:1,$isa:1},
q:{"^":"c;$ti",
gD:function(a){return new H.dy(a,this.gl(a),0,[H.bm(this,a,"q",0)])},
u:function(a,b){return this.i(a,b)},
dT:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.bm(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.d(P.aP(a))}return y},
k:function(a){return P.cp(a,"[","]")}},
dz:{"^":"Z;"},
hQ:{"^":"o:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
Z:{"^":"c;$ti",
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bm(this,a,"Z",0),H.bm(this,a,"Z",1)]})
for(z=J.bQ(this.gJ(a));z.v();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.b1(this.gJ(a))},
k:function(a){return P.dA(a)},
$isM:1},
iz:{"^":"c;$ti",
I:function(a,b){var z
for(z=J.bQ(H.u(b,"$ism",this.$ti,"$asm"));z.v();)this.j(0,z.gE(z))},
k:function(a){return P.cp(this,"{","}")},
$ism:1,
$ismI:1},
iy:{"^":"iz;"},
jO:{"^":"c+q;"}}],["","",,P,{"^":"",
hh:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.bc(a)+"'"},
bU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.br(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hh(a)},
dq:function(a){return new P.jq(a)},
aM:function(a){H.cc(H.h(a))},
W:{"^":"c;"},
"+bool":0,
bt:{"^":"c;a,b",
G:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a&&!0},
O:function(a,b){return C.e.O(this.a,H.i(b,"$isbt").a)},
gB:function(a){var z=this.a
return(z^C.e.bq(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.h6(H.im(this))
y=P.bu(H.ik(this))
x=P.bu(H.ig(this))
w=P.bu(H.ih(this))
v=P.bu(H.ij(this))
u=P.bu(H.il(this))
t=P.h7(H.ii(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isa1:1,
$asa1:function(){return[P.bt]},
p:{
h6:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bu:function(a){if(a>=10)return""+a
return"0"+a}}},
a7:{"^":"H;"},
"+double":0,
b3:{"^":"c;a",
Z:function(a,b){return C.e.Z(this.a,H.i(b,"$isb3").a)},
G:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.e.O(this.a,H.i(b,"$isb3").a)},
k:function(a){var z,y,x,w,v
z=new P.he()
y=this.a
if(y<0)return"-"+new P.b3(0-y).k(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hd().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
$isa1:1,
$asa1:function(){return[P.b3]},
p:{
dk:function(a,b,c,d,e,f){return new P.b3(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hd:{"^":"o:9;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
he:{"^":"o:9;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"c;"},
cy:{"^":"R;",
k:function(a){return"Throw of null."}},
as:{"^":"R;a,b,c,d",
gaA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaA()+y+x
if(!this.a)return w
v=this.gaz()
u=P.bU(this.b)
return w+v+": "+u},
p:{
d8:function(a){return new P.as(!1,null,null,a)},
d9:function(a,b,c){return new P.as(!0,a,b,c)}}},
dG:{"^":"as;e,f,a,b,c,d",
gaA:function(){return"RangeError"},
gaz:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
p:{
bZ:function(a,b,c){return new P.dG(null,null,!0,a,b,"Value not in range")},
bY:function(a,b,c,d,e){return new P.dG(b,c,!0,a,d,"Invalid value")}}},
hv:{"^":"as;e,l:f>,a,b,c,d",
gaA:function(){return"RangeError"},
gaz:function(){var z,y
z=H.Q(this.b)
if(typeof z!=="number")return z.ac()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.h(y)},
p:{
I:function(a,b,c,d,e){var z=H.Q(e==null?J.b1(b):e)
return new P.hv(b,z,!0,a,c,"Index out of range")}}},
j0:{"^":"R;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.j0(a)}}},
iZ:{"^":"R;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dT:function(a){return new P.iZ(a)}}},
cA:{"^":"R;a",
k:function(a){return"Bad state: "+this.a},
p:{
c0:function(a){return new P.cA(a)}}},
fZ:{"^":"R;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bU(z)+"."},
p:{
aP:function(a){return new P.fZ(a)}}},
dK:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isR:1},
h4:{"^":"R;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jq:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
bw:{"^":"c;"},
F:{"^":"H;"},
"+int":0,
m:{"^":"c;$ti",
aQ:["cz",function(a,b){var z=H.cL(this,"m",0)
return new H.dU(this,H.l(b,{func:1,ret:P.W,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gD(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(b<0)H.a8(P.bY(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.v();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.I(b,this,"index",null,y))},
k:function(a){return P.hx(this,"(",")")}},
b5:{"^":"c;$ti"},
a:{"^":"c;$ti",$ism:1},
"+List":0,
M:{"^":"c;$ti"},
B:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"c;",$isa1:1,
$asa1:function(){return[P.H]}},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.bb(this)},
k:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.k(this)}},
V:{"^":"c;"},
e:{"^":"c;",$isa1:1,
$asa1:function(){return[P.e]},
$isib:1},
"+String":0,
cB:{"^":"c;a0:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dL:function(a,b,c){var z=J.bQ(b)
if(!z.v())return a
if(c.length===0){do a+=H.h(z.gE(z))
while(z.v())}else{a+=H.h(z.gE(z))
for(;z.v();)a=a+c+H.h(z.gE(z))}return a}}}}],["","",,W,{"^":"",
hf:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).P(z,a,b,c)
y.toString
z=W.v
z=new H.dU(new W.ab(y),H.l(new W.hg(),{func:1,ret:P.W,args:[z]}),[z])
x=z.gD(z)
if(!x.v())H.a8(H.cq())
w=x.gE(x)
if(x.v())H.a8(H.hy())
return H.i(w,"$isX")},
dp:function(a){H.i(a,"$isP")
return"wheel"},
b4:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fr(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
jn:function(a,b){return document.createElement(a)},
c3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e2:function(a,b,c,d){var z,y
z=W.c3(W.c3(W.c3(W.c3(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ef:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jh(a)
if(!!J.A(z).$isP)return z
return}else return H.i(a,"$isP")},
el:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.d)return a
return z.dB(a,b)},
N:{"^":"X;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ll:{"^":"j;0l:length=","%":"AccessibleNodeList"},
fK:{"^":"N;",
k:function(a){return String(a)},
$isfK:1,
"%":"HTMLAnchorElement"},
lm:{"^":"N;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
da:{"^":"N;",$isda:1,"%":"HTMLBaseElement"},
fP:{"^":"j;","%":";Blob"},
bS:{"^":"N;",$isbS:1,"%":"HTMLBodyElement"},
bs:{"^":"N;0n:height=,0m:width=",
aR:function(a,b,c){if(c!=null)return this.d7(a,b,P.kR(c,null))
return this.d8(a,b)},
cm:function(a,b){return this.aR(a,b,null)},
d7:function(a,b,c){return a.getContext(b,c)},
d8:function(a,b){return a.getContext(b)},
$isbs:1,
"%":"HTMLCanvasElement"},
fS:{"^":"j;",
ap:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cm:{"^":"j;",
bJ:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dR:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
at:function(a){return P.a6(a.getContextAttributes())},
$iscm:1,
"%":"CanvasRenderingContext2D"},
lt:{"^":"v;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
h_:{"^":"cn;",$ish_:1,"%":"CSSNumericValue|CSSUnitValue"},
lx:{"^":"h2;0l:length=","%":"CSSPerspective"},
at:{"^":"j;",$isat:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
h0:{"^":"jf;0l:length=",
aV:function(a,b){var z=this.d9(a,this.ax(a,b))
return z==null?"":z},
ax:function(a,b){var z,y
z=$.eI()
y=z[b]
if(typeof y==="string")return y
y=this.dq(a,b)
z[b]=y
return y},
dq:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h8()+b
if(z in a)return z
return b},
d9:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h1:{"^":"c;",
gn:function(a){return this.aV(a,"height")},
gm:function(a){return this.aV(a,"width")}},
cn:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
h2:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lz:{"^":"cn;0l:length=","%":"CSSTransformValue"},
lA:{"^":"cn;0l:length=","%":"CSSUnparsedValue"},
lC:{"^":"j;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h9:{"^":"N;","%":"HTMLDivElement"},
ha:{"^":"v;",
dt:function(a,b){return a.adoptNode(b)},
cn:function(a,b){return a.getElementById(b)},
e0:function(a,b){return a.querySelector(b)},
gbX:function(a){return new W.bG(a,"mousedown",!1,[W.a_])},
gbY:function(a){return new W.bG(a,"mousemove",!1,[W.a_])},
gbZ:function(a){return new W.bG(a,"mouseup",!1,[W.a_])},
gc_:function(a){return new W.bG(a,H.w(W.dp(a)),!1,[W.aT])},
"%":"XMLDocument;Document"},
lD:{"^":"j;",
k:function(a){return String(a)},
"%":"DOMException"},
hb:{"^":"j;",
dL:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lE:{"^":"jj;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.u(c,"$isa0",[P.H],"$asa0")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a0,P.H]]},
$isy:1,
$asy:function(){return[[P.a0,P.H]]},
$asq:function(){return[[P.a0,P.H]]},
$ism:1,
$asm:function(){return[[P.a0,P.H]]},
$isa:1,
$asa:function(){return[[P.a0,P.H]]},
$ast:function(){return[[P.a0,P.H]]},
"%":"ClientRectList|DOMRectList"},
hc:{"^":"j;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gm(a))+" x "+H.h(this.gn(a))},
G:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa0",[P.H],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.e2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.H]},
"%":";DOMRectReadOnly"},
lF:{"^":"jl;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.w(c)
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.e]},
$isy:1,
$asy:function(){return[P.e]},
$asq:function(){return[P.e]},
$ism:1,
$asm:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"DOMStringList"},
lG:{"^":"j;0l:length=","%":"DOMTokenList"},
X:{"^":"v;0e7:tagName=",
gdw:function(a){return new W.jm(a)},
k:function(a){return a.localName},
P:["av",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dn
if(z==null){z=H.f([],[W.af])
y=new W.dE(z)
C.a.j(z,W.e0(null))
C.a.j(z,W.eb())
$.dn=y
d=y}else d=z
z=$.dm
if(z==null){z=new W.ee(d)
$.dm=z
c=z}else{z.a=d
c=z}}if($.ai==null){z=document
y=z.implementation
y=(y&&C.L).dL(y,"")
$.ai=y
$.co=y.createRange()
y=$.ai
y.toString
y=y.createElement("base")
H.i(y,"$isda")
y.href=z.baseURI
z=$.ai.head;(z&&C.M).K(z,y)}z=$.ai
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbS")}z=$.ai
if(!!this.$isbS)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ai.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.W,a.tagName)){z=$.co;(z&&C.E).co(z,x)
z=$.co
w=(z&&C.E).dJ(z,b)}else{x.innerHTML=b
w=$.ai.createDocumentFragment()
for(z=J.n(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.ai.body
if(x==null?z!=null:x!==z)J.d1(x)
c.b_(w)
C.t.dt(document,w)
return w},function(a,b,c){return this.P(a,b,c,null)},"dK",null,null,"gee",5,5,null],
cq:function(a,b,c,d){a.textContent=null
this.K(a,this.P(a,b,c,d))},
cp:function(a,b){return this.cq(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
df:function(a,b){return a.removeAttribute(b)},
gbX:function(a){return new W.bF(a,"mousedown",!1,[W.a_])},
gbY:function(a){return new W.bF(a,"mousemove",!1,[W.a_])},
gbZ:function(a){return new W.bF(a,"mouseup",!1,[W.a_])},
gc_:function(a){return new W.bF(a,H.w(W.dp(a)),!1,[W.aT])},
$isX:1,
"%":";Element"},
hg:{"^":"o:21;",
$1:function(a){return!!J.A(H.i(a,"$isv")).$isX}},
lH:{"^":"N;0n:height=,0m:width=","%":"HTMLEmbedElement"},
S:{"^":"j;",$isS:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"j;",
ds:function(a,b,c,d){H.l(c,{func:1,args:[W.S]})
if(c!=null)this.d_(a,b,c,!1)},
d_:function(a,b,c,d){return a.addEventListener(b,H.aZ(H.l(c,{func:1,args:[W.S]}),1),!1)},
dh:function(a,b,c,d){return a.removeEventListener(b,H.aZ(H.l(c,{func:1,args:[W.S]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e8|e9|ec|ed"},
au:{"^":"fP;",$isau:1,"%":"File"},
lY:{"^":"js;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isau")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asq:function(){return[W.au]},
$ism:1,
$asm:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$ast:function(){return[W.au]},
"%":"FileList"},
lZ:{"^":"P;0l:length=","%":"FileWriter"},
m1:{"^":"N;0l:length=","%":"HTMLFormElement"},
av:{"^":"j;",$isav:1,"%":"Gamepad"},
hr:{"^":"N;","%":"HTMLHeadElement"},
m2:{"^":"j;0l:length=","%":"History"},
m3:{"^":"jI;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isv")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hs:{"^":"ha;","%":"HTMLDocument"},
m4:{"^":"N;0n:height=,0m:width=","%":"HTMLIFrameElement"},
m7:{"^":"j;0n:height=,0m:width=","%":"ImageBitmap"},
m8:{"^":"j;0n:height=,0m:width=","%":"ImageData"},
al:{"^":"N;0n:height=,0m:width=",$isal:1,"%":"HTMLImageElement"},
ma:{"^":"N;0n:height=,0m:width=","%":"HTMLInputElement"},
b6:{"^":"dS;",$isb6:1,"%":"KeyboardEvent"},
hL:{"^":"j;",
k:function(a){return String(a)},
$ishL:1,
"%":"Location"},
hS:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
mh:{"^":"j;0l:length=","%":"MediaList"},
mi:{"^":"jQ;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hU(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hU:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
mj:{"^":"jR;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hV(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hV:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ax:{"^":"j;",$isax:1,"%":"MimeType"},
mk:{"^":"jT;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isax")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$ism:1,
$asm:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"MimeTypeArray"},
a_:{"^":"dS;",
gbW:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.ba(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.A(W.ef(z)).$isX)throw H.d(P.C("offsetX is only supported on elements"))
y=H.i(W.ef(z),"$isX")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.u(new P.ba(u,v,w),"$isba",w,"$asba")
if(typeof z!=="number")return z.b2()
if(typeof x!=="number")return x.b2()
return new P.ba(C.u.c5(z-u),C.u.c5(x-v),w)}},
$isa_:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"hJ;a",
gad:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.c0("No elements"))
if(y>1)throw H.d(P.c0("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.u(b,"$ism",[W.v],"$asm")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.n(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.i(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.f4(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.dr(z,z.length,-1,[H.bm(C.Z,z,"t",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asq:function(){return[W.v]},
$asm:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"P;0e_:previousSibling=",
e1:function(a){var z=a.parentNode
if(z!=null)J.bO(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cw(a):z},
K:function(a,b){return a.appendChild(b)},
dg:function(a,b){return a.removeChild(b)},
di:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i4:{"^":"jV;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isv")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
mt:{"^":"N;0n:height=,0m:width=","%":"HTMLObjectElement"},
mv:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
mw:{"^":"j;0n:height=,0m:width=","%":"PaintSize"},
aA:{"^":"j;0l:length=",$isaA:1,"%":"Plugin"},
my:{"^":"jZ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaA")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asq:function(){return[W.aA]},
$ism:1,
$asm:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$ast:function(){return[W.aA]},
"%":"PluginArray"},
mA:{"^":"a_;0n:height=,0m:width=","%":"PointerEvent"},
ip:{"^":"j;",
dJ:function(a,b){return a.createContextualFragment(b)},
co:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mF:{"^":"k4;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.iv(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
iv:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
mG:{"^":"j;0n:height=,0m:width=","%":"Screen"},
mH:{"^":"N;0l:length=","%":"HTMLSelectElement"},
aB:{"^":"P;",$isaB:1,"%":"SourceBuffer"},
mJ:{"^":"e9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaB")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asq:function(){return[W.aB]},
$ism:1,
$asm:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$ast:function(){return[W.aB]},
"%":"SourceBufferList"},
aC:{"^":"j;",$isaC:1,"%":"SpeechGrammar"},
mK:{"^":"ka;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaC")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asq:function(){return[W.aC]},
$ism:1,
$asm:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$ast:function(){return[W.aC]},
"%":"SpeechGrammarList"},
aD:{"^":"j;0l:length=",$isaD:1,"%":"SpeechRecognitionResult"},
mN:{"^":"kd;",
i:function(a,b){return this.bn(a,H.w(b))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.dc(a,z)
if(y==null)return
b.$2(y,this.bn(a,y))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.iK(z))
return z},
gl:function(a){return a.length},
bn:function(a,b){return a.getItem(b)},
dc:function(a,b){return a.key(b)},
$asZ:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
iK:{"^":"o:22;a",
$2:function(a,b){return C.a.j(this.a,a)}},
aE:{"^":"j;",$isaE:1,"%":"CSSStyleSheet|StyleSheet"},
iR:{"^":"N;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=W.hf("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).I(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
mQ:{"^":"N;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.P(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.gad(z)
x.toString
z=new W.ab(x)
w=z.gad(z)
y.toString
w.toString
new W.ab(y).I(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
mR:{"^":"N;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.P(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.gad(z)
y.toString
x.toString
new W.ab(y).I(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
dN:{"^":"N;",$isdN:1,"%":"HTMLTemplateElement"},
mS:{"^":"j;0m:width=","%":"TextMetrics"},
aF:{"^":"P;",$isaF:1,"%":"TextTrack"},
aG:{"^":"P;",$isaG:1,"%":"TextTrackCue|VTTCue"},
mT:{"^":"kl;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaG")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aG]},
$isy:1,
$asy:function(){return[W.aG]},
$asq:function(){return[W.aG]},
$ism:1,
$asm:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$ast:function(){return[W.aG]},
"%":"TextTrackCueList"},
mU:{"^":"ed;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaF")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aF]},
$isy:1,
$asy:function(){return[W.aF]},
$asq:function(){return[W.aF]},
$ism:1,
$asm:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$ast:function(){return[W.aF]},
"%":"TextTrackList"},
mV:{"^":"j;0l:length=","%":"TimeRanges"},
aH:{"^":"j;",$isaH:1,"%":"Touch"},
mW:{"^":"kq;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaH")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aH]},
$isy:1,
$asy:function(){return[W.aH]},
$asq:function(){return[W.aH]},
$ism:1,
$asm:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$ast:function(){return[W.aH]},
"%":"TouchList"},
mX:{"^":"j;0l:length=","%":"TrackDefaultList"},
dS:{"^":"S;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
na:{"^":"j;",
k:function(a){return String(a)},
"%":"URL"},
nd:{"^":"hS;0n:height=,0m:width=","%":"HTMLVideoElement"},
ne:{"^":"P;0l:length=","%":"VideoTrackList"},
nf:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
ng:{"^":"j;0m:width=","%":"VTTRegion"},
aT:{"^":"a_;",
gdN:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.C("deltaY is not supported"))},
$isaT:1,
"%":"WheelEvent"},
j4:{"^":"P;",
gdv:function(a){var z,y,x
z=P.H
y=new P.U(0,$.D,[z])
x=H.l(new W.j5(new P.kh(y,[z])),{func:1,ret:-1,args:[P.H]})
this.d6(a)
this.dj(a,W.el(x,z))
return y},
dj:function(a,b){return a.requestAnimationFrame(H.aZ(H.l(b,{func:1,ret:-1,args:[P.H]}),1))},
d6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdV:1,
"%":"DOMWindow|Window"},
j5:{"^":"o:23;a",
$1:function(a){var z=this.a
a=H.bk(H.cO(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.a8(P.c0("Future already completed"))
z.aj(a)}},
dX:{"^":"v;",$isdX:1,"%":"Attr"},
nm:{"^":"kw;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isat")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.at]},
$isy:1,
$asy:function(){return[W.at]},
$asq:function(){return[W.at]},
$ism:1,
$asm:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$ast:function(){return[W.at]},
"%":"CSSRuleList"},
no:{"^":"hc;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
G:function(a,b){var z
if(b==null)return!1
if(!H.ao(b,"$isa0",[P.H],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.e2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
np:{"^":"ky;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isav")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asq:function(){return[W.av]},
$ism:1,
$asm:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"GamepadList"},
nu:{"^":"kA;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isv")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ism:1,
$asm:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nv:{"^":"kC;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaD")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aD]},
$isy:1,
$asy:function(){return[W.aD]},
$asq:function(){return[W.aD]},
$ism:1,
$asm:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$ast:function(){return[W.aD]},
"%":"SpeechRecognitionResultList"},
nw:{"^":"kE;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaE")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asq:function(){return[W.aE]},
$ism:1,
$asm:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$ast:function(){return[W.aE]},
"%":"StyleSheetList"},
jd:{"^":"dz;d5:a<",
H:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.n(x),v=0;v<z.length;z.length===y||(0,H.G)(z),++v){u=z[v]
b.$2(u,w.a5(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.i(z[w],"$isdX")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asZ:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
jm:{"^":"jd;a",
i:function(a,b){return J.ci(this.a,H.w(b))},
gl:function(a){return this.gJ(this).length}},
bG:{"^":"iL;a,b,c,$ti"},
bF:{"^":"bG;a,b,c,$ti"},
jo:{"^":"iM;a,b,c,d,e,$ti",
sdd:function(a){this.d=H.l(a,{func:1,args:[W.S]})},
dD:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.l(y,{func:1,args:[W.S]})
if(x)J.f3(z,this.c,y,!1)}this.b=null
this.sdd(null)
return},
p:{
an:function(a,b,c,d,e){var z=W.el(new W.jp(c),W.S)
if(z!=null&&!0)J.f5(a,b,z,!1)
return new W.jo(0,a,b,z,!1,[e])}}},
jp:{"^":"o:24;a",
$1:function(a){return this.a.$1(H.i(a,"$isS"))}},
bH:{"^":"c;a",
cW:function(a){var z,y
z=$.cT()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.V[y],W.l_())
for(y=0;y<12;++y)z.h(0,C.w[y],W.l0())}},
a2:function(a){return $.eY().A(0,W.b4(a))},
X:function(a,b,c){var z,y,x
z=W.b4(a)
y=$.cT()
x=y.i(0,H.h(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c7(x.$4(a,b,c,this))},
$isaf:1,
p:{
e0:function(a){var z,y
z=document.createElement("a")
y=new W.k5(z,window.location)
y=new W.bH(y)
y.cW(a)
return y},
ns:[function(a,b,c,d){H.i(a,"$isX")
H.w(b)
H.w(c)
H.i(d,"$isbH")
return!0},"$4","l_",16,0,14],
nt:[function(a,b,c,d){var z,y,x
H.i(a,"$isX")
H.w(b)
H.w(c)
z=H.i(d,"$isbH").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","l0",16,0,14]}},
t:{"^":"c;$ti",
gD:function(a){return new W.dr(a,this.gl(a),-1,[H.bm(this,a,"t",0)])}},
dE:{"^":"c;a",
a2:function(a){return C.a.bv(this.a,new W.i6(a))},
X:function(a,b,c){return C.a.bv(this.a,new W.i5(a,b,c))},
$isaf:1},
i6:{"^":"o:10;a",
$1:function(a){return H.i(a,"$isaf").a2(this.a)}},
i5:{"^":"o:10;a,b,c",
$1:function(a){return H.i(a,"$isaf").X(this.a,this.b,this.c)}},
k6:{"^":"c;",
cX:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aQ(0,new W.k7())
y=b.aQ(0,new W.k8())
this.b.I(0,z)
x=this.c
x.I(0,C.X)
x.I(0,y)},
a2:function(a){return this.a.A(0,W.b4(a))},
X:["cB",function(a,b,c){var z,y
z=W.b4(a)
y=this.c
if(y.A(0,H.h(z)+"::"+b))return this.d.du(c)
else if(y.A(0,"*::"+b))return this.d.du(c)
else{y=this.b
if(y.A(0,H.h(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.h(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isaf:1},
k7:{"^":"o:11;",
$1:function(a){return!C.a.A(C.w,H.w(a))}},
k8:{"^":"o:11;",
$1:function(a){return C.a.A(C.w,H.w(a))}},
ki:{"^":"k6;e,a,b,c,d",
X:function(a,b,c){if(this.cB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ci(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
eb:function(){var z,y,x,w,v
z=P.e
y=P.cu(C.v,z)
x=H.p(C.v,0)
w=H.l(new W.kj(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.ki(y,P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),null)
y.cX(null,new H.hR(C.v,w,[x,z]),v,null)
return y}}},
kj:{"^":"o:25;",
$1:function(a){return"TEMPLATE::"+H.h(H.w(a))}},
kg:{"^":"c;",
a2:function(a){var z=J.A(a)
if(!!z.$isdI)return!1
z=!!z.$isJ
if(z&&W.b4(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.cs(b,"on"))return!1
return this.a2(a)},
$isaf:1},
dr:{"^":"c;a,b,c,0d,$ti",
sbl:function(a){this.d=H.z(a,H.p(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbl(J.bo(this.a,z))
this.c=z
return!0}this.sbl(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isb5:1},
jg:{"^":"c;a",$isP:1,$isdV:1,p:{
jh:function(a){if(a===window)return H.i(a,"$isdV")
else return new W.jg(a)}}},
af:{"^":"c;"},
k5:{"^":"c;a,b",$isn9:1},
ee:{"^":"c;a",
b_:function(a){new W.kt(this).$2(a,null)},
a8:function(a,b){if(b==null)J.d1(a)
else J.bO(b,a)},
dm:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fp(a)
x=J.ci(y.gd5(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.br(a)}catch(t){H.a3(t)}try{u=W.b4(a)
this.dl(H.i(a,"$isX"),b,z,v,u,H.i(y,"$isM"),H.w(x))}catch(t){if(H.a3(t) instanceof P.as)throw t
else{this.a8(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a2(a)){this.a8(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.a8(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.f(z.slice(0),[H.p(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.n(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.X(a,J.fB(v),w.a5(z,v))){window
u="Removing disallowed attribute <"+H.h(e)+" "+v+'="'+H.h(w.a5(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a5(z,v)
w.df(z,v)}}if(!!J.A(a).$isdN)this.b_(a.content)},
$ismr:1},
kt:{"^":"o:26;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dm(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fq(z)}catch(w){H.a3(w)
v=H.i(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bO(u,v)}else J.bO(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isv")}}},
jf:{"^":"j+h1;"},
ji:{"^":"j+q;"},
jj:{"^":"ji+t;"},
jk:{"^":"j+q;"},
jl:{"^":"jk+t;"},
jr:{"^":"j+q;"},
js:{"^":"jr+t;"},
jH:{"^":"j+q;"},
jI:{"^":"jH+t;"},
jQ:{"^":"j+Z;"},
jR:{"^":"j+Z;"},
jS:{"^":"j+q;"},
jT:{"^":"jS+t;"},
jU:{"^":"j+q;"},
jV:{"^":"jU+t;"},
jY:{"^":"j+q;"},
jZ:{"^":"jY+t;"},
k4:{"^":"j+Z;"},
e8:{"^":"P+q;"},
e9:{"^":"e8+t;"},
k9:{"^":"j+q;"},
ka:{"^":"k9+t;"},
kd:{"^":"j+Z;"},
kk:{"^":"j+q;"},
kl:{"^":"kk+t;"},
ec:{"^":"P+q;"},
ed:{"^":"ec+t;"},
kp:{"^":"j+q;"},
kq:{"^":"kp+t;"},
kv:{"^":"j+q;"},
kw:{"^":"kv+t;"},
kx:{"^":"j+q;"},
ky:{"^":"kx+t;"},
kz:{"^":"j+q;"},
kA:{"^":"kz+t;"},
kB:{"^":"j+q;"},
kC:{"^":"kB+t;"},
kD:{"^":"j+q;"},
kE:{"^":"kD+t;"}}],["","",,P,{"^":"",
a6:function(a){var z,y,x,w,v
if(a==null)return
z=P.T(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.w(y[w])
z.h(0,v,a[v])}return z},
kR:function(a,b){var z={}
a.H(0,new P.kS(z))
return z},
dj:function(){var z=$.di
if(z==null){z=J.ce(window.navigator.userAgent,"Opera",0)
$.di=z}return z},
h8:function(){var z,y
z=$.df
if(z!=null)return z
y=$.dg
if(y==null){y=J.ce(window.navigator.userAgent,"Firefox",0)
$.dg=y}if(y)z="-moz-"
else{y=$.dh
if(y==null){y=!P.dj()&&J.ce(window.navigator.userAgent,"Trident/",0)
$.dh=y}if(y)z="-ms-"
else z=P.dj()?"-o-":"-webkit-"}$.df=z
return z},
kS:{"^":"o:8;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
lh:function(a){return Math.sqrt(a)},
e1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jJ:{"^":"c;",
dZ:function(){return Math.random()}},
ba:{"^":"c;T:a>,R:b>,$ti",
k:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
G:function(a,b){if(b==null)return!1
return H.ao(b,"$isba",[P.H],null)&&this.a==J.bR(b)&&this.b==b.gR(b)},
gB:function(a){var z,y,x
z=J.ar(this.a)
y=J.ar(this.b)
y=P.e1(P.e1(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
k_:{"^":"c;"},
a0:{"^":"k_;$ti"}}],["","",,P,{"^":"",fL:{"^":"j;",$isfL:1,"%":"SVGAnimatedLength"},lI:{"^":"J;0n:height=,0m:width=","%":"SVGFEBlendElement"},lJ:{"^":"J;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lK:{"^":"J;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lL:{"^":"J;0n:height=,0m:width=","%":"SVGFECompositeElement"},lM:{"^":"J;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lN:{"^":"J;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lO:{"^":"J;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lP:{"^":"J;0n:height=,0m:width=","%":"SVGFEFloodElement"},lQ:{"^":"J;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lR:{"^":"J;0n:height=,0m:width=","%":"SVGFEImageElement"},lS:{"^":"J;0n:height=,0m:width=","%":"SVGFEMergeElement"},lT:{"^":"J;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lU:{"^":"J;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lV:{"^":"J;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lW:{"^":"J;0n:height=,0m:width=","%":"SVGFETileElement"},lX:{"^":"J;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},m_:{"^":"J;0n:height=,0m:width=","%":"SVGFilterElement"},m0:{"^":"bz;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hq:{"^":"bz;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bz:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},m9:{"^":"bz;0n:height=,0m:width=","%":"SVGImageElement"},b7:{"^":"j;",$isb7:1,"%":"SVGLength"},mf:{"^":"jL;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.U(a,b)},
h:function(a,b,c){H.i(c,"$isb7")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
U:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b7]},
$ism:1,
$asm:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$ast:function(){return[P.b7]},
"%":"SVGLengthList"},mg:{"^":"J;0n:height=,0m:width=","%":"SVGMaskElement"},b9:{"^":"j;",$isb9:1,"%":"SVGNumber"},ms:{"^":"jX;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.U(a,b)},
h:function(a,b,c){H.i(c,"$isb9")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
U:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b9]},
$ism:1,
$asm:function(){return[P.b9]},
$isa:1,
$asa:function(){return[P.b9]},
$ast:function(){return[P.b9]},
"%":"SVGNumberList"},mx:{"^":"J;0n:height=,0m:width=","%":"SVGPatternElement"},mz:{"^":"j;0l:length=","%":"SVGPointList"},mB:{"^":"j;0n:height=,0m:width=","%":"SVGRect"},mC:{"^":"hq;0n:height=,0m:width=","%":"SVGRectElement"},dI:{"^":"J;",$isdI:1,"%":"SVGScriptElement"},mO:{"^":"kf;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.U(a,b)},
h:function(a,b,c){H.w(c)
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
U:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$ism:1,
$asm:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"SVGStringList"},J:{"^":"X;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.af])
C.a.j(z,W.e0(null))
C.a.j(z,W.eb())
C.a.j(z,new W.kg())
c=new W.ee(new W.dE(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dK(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.gad(z)
for(z=J.n(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mP:{"^":"bz;0n:height=,0m:width=","%":"SVGSVGElement"},bd:{"^":"j;",$isbd:1,"%":"SVGTransform"},mY:{"^":"ks;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return this.U(a,b)},
h:function(a,b,c){H.i(c,"$isbd")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
U:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bd]},
$ism:1,
$asm:function(){return[P.bd]},
$isa:1,
$asa:function(){return[P.bd]},
$ast:function(){return[P.bd]},
"%":"SVGTransformList"},nb:{"^":"bz;0n:height=,0m:width=","%":"SVGUseElement"},jK:{"^":"j+q;"},jL:{"^":"jK+t;"},jW:{"^":"j+q;"},jX:{"^":"jW+t;"},ke:{"^":"j+q;"},kf:{"^":"ke+t;"},kr:{"^":"j+q;"},ks:{"^":"kr+t;"}}],["","",,P,{"^":"",ak:{"^":"c;",$ism:1,
$asm:function(){return[P.a7]},
$isa:1,
$asa:function(){return[P.a7]},
$isiX:1}}],["","",,P,{"^":"",ln:{"^":"j;0l:length=","%":"AudioBuffer"},lo:{"^":"je;",
i:function(a,b){return P.a6(a.get(H.w(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new P.fN(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},fN:{"^":"o:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},lp:{"^":"P;0l:length=","%":"AudioTrackList"},fO:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mu:{"^":"fO;0l:length=","%":"OfflineAudioContext"},je:{"^":"j+Z;"}}],["","",,P,{"^":"",fQ:{"^":"j;",$isfQ:1,"%":"WebGLBuffer"},hm:{"^":"j;",$ishm:1,"%":"WebGLFramebuffer"},io:{"^":"j;",$isio:1,"%":"WebGLProgram"},mD:{"^":"j;",
bu:function(a,b){return a.activeTexture(b)},
bw:function(a,b,c){return a.attachShader(b,c)},
bx:function(a,b,c){return a.bindBuffer(b,c)},
bz:function(a,b,c){return a.bindFramebuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bE:function(a,b){return a.clear(b)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.a6(a.getContextAttributes())},
aS:function(a){return a.getError()},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
bU:function(a,b){return a.linkProgram(b)},
c0:function(a,b,c){return a.pixelStorei(b,c)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aO:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isal)y=!0
else y=!1
if(y){this.aI(a,b,c,d,e,f,g)
return}if(!!z.$isbs)z=!0
else z=!1
if(z){this.aJ(a,b,c,d,e,f,g)
return}throw H.d(P.d8("Incorrect number or type of arguments"))},
c3:function(a,b,c,d,e,f,g){return this.aO(a,b,c,d,e,f,g,null,null,null)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c4:function(a,b,c,d){return a.texParameteri(b,c,d)},
c6:function(a,b,c){return a.uniform1f(b,c)},
c7:function(a,b,c){return a.uniform1fv(b,c)},
c8:function(a,b,c){return a.uniform1i(b,c)},
c9:function(a,b,c){return a.uniform1iv(b,c)},
ca:function(a,b,c){return a.uniform2fv(b,c)},
cb:function(a,b,c){return a.uniform3fv(b,c)},
cc:function(a,b,c){return a.uniform4fv(b,c)},
cd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ce:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cj:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mE:{"^":"j;",
dz:function(a,b){return a.beginTransformFeedback(b)},
dC:function(a,b){return a.bindVertexArray(b)},
dM:function(a){return a.createVertexArray()},
dO:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dP:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dQ:function(a){return a.endTransformFeedback()},
ea:function(a,b,c,d){this.dr(a,b,H.u(c,"$isa",[P.e],"$asa"),d)
return},
dr:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eb:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bu:function(a,b){return a.activeTexture(b)},
bw:function(a,b,c){return a.attachShader(b,c)},
bx:function(a,b,c){return a.bindBuffer(b,c)},
bz:function(a,b,c){return a.bindFramebuffer(b,c)},
bA:function(a,b,c){return a.bindTexture(b,c)},
bB:function(a,b){return a.blendEquation(b)},
bC:function(a,b,c){return a.blendFunc(b,c)},
bD:function(a,b,c,d){return a.bufferData(b,c,d)},
bE:function(a,b){return a.clear(b)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
at:function(a){return P.a6(a.getContextAttributes())},
aS:function(a){return a.getError()},
aT:function(a,b){return a.getProgramInfoLog(b)},
aU:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
bU:function(a,b){return a.linkProgram(b)},
c0:function(a,b,c){return a.pixelStorei(b,c)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b1:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aO:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isal)y=!0
else y=!1
if(y){this.aI(a,b,c,d,e,f,g)
return}if(!!z.$isbs)z=!0
else z=!1
if(z){this.aJ(a,b,c,d,e,f,g)
return}throw H.d(P.d8("Incorrect number or type of arguments"))},
c3:function(a,b,c,d,e,f,g){return this.aO(a,b,c,d,e,f,g,null,null,null)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c4:function(a,b,c,d){return a.texParameteri(b,c,d)},
c6:function(a,b,c){return a.uniform1f(b,c)},
c7:function(a,b,c){return a.uniform1fv(b,c)},
c8:function(a,b,c){return a.uniform1i(b,c)},
c9:function(a,b,c){return a.uniform1iv(b,c)},
ca:function(a,b,c){return a.uniform2fv(b,c)},
cb:function(a,b,c){return a.uniform3fv(b,c)},
cc:function(a,b,c){return a.uniform4fv(b,c)},
cd:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ce:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cf:function(a,b){return a.useProgram(b)},
cg:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cj:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iA:{"^":"j;",$isiA:1,"%":"WebGLShader"},iS:{"^":"j;",$isiS:1,"%":"WebGLTexture"},iY:{"^":"j;",$isiY:1,"%":"WebGLUniformLocation"},j2:{"^":"j;",$isj2:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mL:{"^":"kc;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return P.a6(this.da(a,b))},
h:function(a,b,c){H.i(c,"$isM")
throw H.d(P.C("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
da:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$ism:1,
$asm:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$ast:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},kb:{"^":"j+q;"},kc:{"^":"kb+t;"}}],["","",,G,{"^":"",
j6:function(a){var z,y,x,w
z=H.f(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.h(z,y,w+H.h(z[y]))}return C.a.a3(z,"\n")},
dY:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bK(a,b)
z.b0(a,y,c)
z.bG(a,y)
x=H.c7(z.aX(a,y,35713))
if(x!=null&&!x){w=z.aW(a,y)
P.aM("E:Compilation failed:")
P.aM("E:"+G.j6(c))
P.aM("E:Failure:")
P.aM(C.i.L("E:",w))
throw H.d(w)}return y},
i7:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.w(b)
d.ae(0,a)
e.w(c)
e.ae(0,a)
z=e.a
y=z[0]
x=z[1]
w=z[2]
v=d.a
u=v[0]
t=v[1]
s=v[2]
z[0]=x*s-w*t
z[1]=w*u-y*s
z[2]=y*t-x*u
r=Math.sqrt(e.gaM())
if(r===0)return!1
e.V(0,-1/r)
return!0},
ds:function(a,b){var z,y,x
H.u(a,"$isa",[T.b],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.h(b,z,J.bR(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.h(b,z+1,J.ch(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.d_(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
hj:function(a,b){var z,y
H.u(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.h(b,z,J.bR(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.h(b,z+1,J.ch(a[y]))}return b},
hk:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.aS],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.h(b,z,J.bR(a[y]))
if(y>=a.length)return H.k(a,y)
C.f.h(b,z+1,J.ch(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.d_(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.fs(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
hi:function(a,b){var z,y
H.u(a,"$isa",[[P.a,P.F]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bo(a[y],0))
if(y>=a.length)return H.k(a,y)
C.n.h(b,z+1,J.bo(a[y],1))
if(y>=a.length)return H.k(a,y)
C.n.h(b,z+2,J.bo(a[y],2))
if(y>=a.length)return H.k(a,y)
C.n.h(b,z+3,J.bo(a[y],3))}return b},
jF:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aw(z,[H.p(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.F]],v=[P.a7],u=[T.aS],t=[T.b],s=[T.r];y.v();){r=y.d
if(!x.ar(0,r)){r="Dropping unnecessary attribute: "+H.h(r)
if($.er>0)H.cc("I: "+r)
continue}q=z.i(0,r)
switch($.ac().i(0,r).a){case"vec2":b.a6(r,G.hj(H.bN(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a6(r,G.ds(H.bN(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a6(r,G.hk(H.bN(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a6(r,new Float32Array(H.c4(H.bN(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a6(r,G.hi(H.bN(q,"$isa",w,"$asa"),null),4)
break}}},
by:function(a,b,c){var z,y,x,w
z=G.dC(a,b.d,4,b.e.x)
z.a7(G.ds(c.d,null))
y=H.u(c.cJ(),"$isa",[P.F],"$asa")
x=z.d
z.y=J.cf(x.a)
w=z.ch.length
if(w<768){z.saB(new Uint8Array(H.c4(y)))
z.Q=5121}else if(w<196608){z.saB(new Uint16Array(H.c4(y)))
z.Q=5123}else{z.saB(new Uint32Array(H.c4(y)))
z.Q=5125}J.bP(x.a,z.e)
y=z.y
w=z.cx
J.cd(x.a,34963,y)
J.cY(x.a,34963,w,35048)
G.jF(c,z)
return z},
b8:{"^":"c;"},
aR:{"^":"b8;d,a,b,c",
b8:function(){return this.d},
k:function(a){var z,y,x,w
z=H.f(["{"+new H.dR(H.kX(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.aw(y,[H.p(y,0)]),x=x.gD(x);x.v();){w=x.d
C.a.j(z,H.h(w)+": "+H.h(y.i(0,w)))}return C.a.a3(z,"\n")}},
fR:{"^":"dJ;"},
fU:{"^":"c;0a,b",
bT:function(a,b,c){J.fm(this.a,b)
if(c>0)J.fH(this.a,b,c)},
ci:function(a,b,c,d,e,f,g,h){J.cd(this.a,34962,b)
J.fI(this.a,c,d,e,!1,g,h)}},
hl:{"^":"c;a,b,c,d,e"},
Y:{"^":"c;ao:a>,a9:b>,aa:c>",p:{
L:function(a,b,c){return new G.Y(a,b,c)}}},
aj:{"^":"c;ao:a>,a9:b>,aa:c>,d"},
bx:{"^":"c;a,b,c,d,e",
N:function(a){switch($.ac().i(0,a).a){case"vec2":this.e.h(0,a,H.f([],[T.r]))
break
case"vec3":this.e.h(0,a,H.f([],[T.b]))
break
case"vec4":this.e.h(0,a,H.f([],[T.aS]))
break
case"float":this.e.h(0,a,H.f([],[P.a7]))
break
case"uvec4":this.e.h(0,a,H.f([],[[P.a,P.F]]))
break}},
cD:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aj(z,z+1,z+2,z+3))},
a7:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x){w=a[x]
v=new T.b(new Float32Array(3))
v.w(w)
C.a.j(y,v)}},
cE:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.Y(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.w(w)
C.a.j(z,v)}},
af:function(a,b){var z,y,x,w,v,u,t
z=[T.r]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.r(u))}},
ag:function(a,b){var z,y,x,w,v,u
z=[T.b]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
u=new T.b(new Float32Array(3))
u.w(v)
x.j(y,u)}},
cF:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.j(this.c,new G.aj(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.w(w)
C.a.j(z,v)}},
cJ:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.f(x,[P.F])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.G)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
cL:function(a,b){var z,y,x,w,v,u,t
z=H.f([],[T.r])
this.e.h(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.j(z,new T.r(t))}},
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=this.c
y=a-1
x=b-1
w=0
while(!0){if(!(w<x))break
v=w*a
u=w+1
t=0
while(!0){if(!(t<y))break
s=t+1
r=u*a
C.a.j(z,new G.aj(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.f(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.aw(y,[H.p(y,0)]),x=x.gD(x);x.v();){w=x.d
v=$.ac().i(0,w).a
C.a.j(z,H.h(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a3(z," ")}},
dP:{"^":"c;a,b,c"},
dO:{"^":"c;a,b,c",p:{
cD:function(a,b,c){return new G.dO(a,b,c)}}},
dB:{"^":"aR;d,a,b,c",p:{
cw:function(a){var z=P.T(P.e,P.c)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.eD())
z.h(0,"cStencilFunc",$.cR())
return new G.dB(z,a,!1,!0)}}},
hT:{"^":"b8;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saB:function(a){this.cx=H.u(a,"$isa",[P.F],"$asa")},
b5:function(a,b,c){var z,y
C.i.ay(a,0)
H.i(b,"$isak")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cd(z.a,34962,y)
J.cY(z.a,34962,b,35048)},
b6:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a6:function(a,b,c){var z,y,x,w,v
z=J.cV(a,0)===105
if(z&&this.z===0)this.z=C.e.cC(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.cf(x.a))
this.b5(a,b,c)
w=$.ac().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bP(x.a,this.e)
x.bT(0,v,z?1:0)
x.ci(0,y.i(0,a),v,w.b7(),5126,!1,0,0)},
a7:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.cf(y.a))
this.ch=a
this.b5("aPosition",a,3)
x=$.ac().i(0,"aPosition")
if(x==null)throw H.d("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bP(y.a,this.e)
y.bT(0,w,0)
y.ci(0,z.i(0,"aPosition"),w,x.b7(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.f(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.aw(z,[H.p(z,0)]),x=x.gD(x);x.v();){w=x.d
C.a.j(y,H.h(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")},
p:{
dC:function(a,b,c,d){var z=P.e
return new G.hT(b,J.ff(b.a),c,P.T(z,P.c),d,0,-1,P.T(z,P.ak),"meshdata:"+a,!1,!0)}}},
ic:{"^":"aR;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cG:function(a,b){var z
if(typeof a!=="number")return a.ec()
if(typeof b!=="number")return H.aK(b)
z=a/b
if(this.z===z)return
this.z=z
this.b9()},
b9:function(){var z,y,x,w,v,u
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
b8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.b(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.w(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.A(t)
x=!!y.$isaS
q=x?t.gck(t):1
if(!!y.$isb){p=t.gT(t)
s=t.gR(t)
r=t.ga4(t)
t=p}else if(x){p=t.gT(t)
s=t.gR(t)
r=t.ga4(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aK(t)
x=z[4]
if(typeof s!=="number")return H.aK(s)
w=z[8]
if(typeof r!=="number")return H.aK(r)
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
c.w(this.db)
c.bV(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
bv:{"^":"c;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
iu:{"^":"b8;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cP:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.h(0,t,J.d0(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.h(0,t,J.d0(w.a,v,t))}},
cS:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.f([],[P.e])
x=H.f([],[P.e])
for(y=new H.aw(y,[H.p(y,0)]),y=y.gD(y);y.v();){w=y.d
if(!z.ar(0,w))C.a.j(x,w)}for(z=this.x,z=P.jN(z,z.r,H.p(z,0)),y=this.Q;z.v();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.aw(b,[H.p(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.v();){s=y.d
switch(J.cV(s,0)){case 117:if(w.ar(0,s)){r=b.i(0,s)
if(v.ar(0,s))H.cc("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ac().i(0,s)
if(q==null)H.a8("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.Q(r)
J.cj(x.a,p,r)}else if(!!J.A(r).$ishw)J.fF(x.a,p,r)
break
case"float":if(q.c===0){H.ep(r)
J.fD(x.a,p,r)}else if(!!J.A(r).$isak)J.fE(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.aq(r,"$isO").a
J.d7(x.a,p,!1,s)}else if(!!J.A(r).$isak)J.d7(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.aq(r,"$isam").a
J.d6(x.a,p,!1,s)}else if(!!J.A(r).$isak)J.d6(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d5(o,p,H.aq(r,"$isaS").a)
else J.d5(o,p,H.i(r,"$isak"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d4(o,p,H.aq(r,"$isb").a)
else J.d4(o,p,H.i(r,"$isak"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d3(o,p,H.aq(r,"$isr").a)
else J.d3(o,p,H.i(r,"$isak"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aK(s)
J.cW(x.a,33984+s)
s=H.aq(r,"$iscC").b
J.bp(x.a,3553,s)
s=this.ch
J.cj(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aK(s)
J.cW(x.a,33984+s)
s=H.aq(r,"$iscC").b
J.bp(x.a,34067,s)
s=this.ch
J.cj(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.cc("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aO(r,!0)
o=x.a
if(s)J.bq(o,2929)
else J.cg(o,2929)
break
case"cStencilFunc":H.aq(r,"$isdP")
s=r.a
o=x.a
if(s===1281)J.cg(o,2960)
else{J.bq(o,2960)
o=r.b
n=r.c
J.fz(x.a,s,o,n)}break
case"cDepthWrite":H.c7(r)
J.fg(x.a,r)
break
case"cBlendEquation":H.aq(r,"$isdO")
s=r.a
o=x.a
if(s===1281)J.cg(o,3042)
else{J.bq(o,3042)
o=r.b
n=r.c
J.f9(x.a,o,n)
J.f8(x.a,s)}break}++t
break}}m=P.dk(0,0,0,Date.now()-new P.bt(z,!1).a,0,0)
""+t
m.k(0)},
cI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.u(b,"$isa",[G.aR],"$asa")
H.u(c,"$isa",[G.bv],"$asa")
z=Date.now()
y=this.d
J.fG(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.be()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.G)(b),++w){v=b[w]
this.cU(v.a,v.b8())}x=this.Q
x.ab(0)
for(u=a.cy,u=new H.aw(u,[H.p(u,0)]),u=u.gD(u);u.v();)x.j(0,u.d)
t=this.cS()
if(t.length!==0)P.aM("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(t)))
J.bP(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.b6()
r=a.Q
q=a.z
if(s)J.f6(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.fk(p,x,u,r,0,q)
else J.fj(p,x,u,r,0)}else{r=y.a
if(q>1)J.fi(r,x,0,u,q)
else J.fh(r,x,0,u)}if(s)J.fn(y.a)
C.a.j(c,new G.bv(this.a,a.z,a.b6(),x,P.dk(0,0,0,Date.now()-new P.bt(z,!1).a,0,0)))},
p:{
dH:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a9(null,null,null,z)
x=c.b
w=d.b
v=H.u(c.f,"$isa",[z],"$asa")
u=J.fd(b.a)
t=G.dY(b.a,35633,x)
J.cX(b.a,u,t)
s=G.dY(b.a,35632,w)
J.cX(b.a,u,s)
if(v.length>0)J.fC(b.a,u,v,35980)
J.fx(b.a,u)
if(!H.c7(J.fw(b.a,u,35714)))H.a8(J.fv(b.a,u))
z=new G.iu(b,c,d,u,P.cu(c.c,z),P.T(z,P.c),P.T(z,z),y,a,!1,!0)
z.cP(a,b,c,d)
return z}}},
E:{"^":"c;a,b,c",
b7:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iB:{"^":"c;a,0b,c,d,e,f,r,x",
b3:function(a){var z,y,x,w,v
H.u(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.G)(a),++w){v=a[w]
C.a.j(y,v)
x.h(0,v,this.r);++this.r}C.a.au(y)},
ah:function(a){var z,y,x
H.u(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)C.a.j(y,a[x])
C.a.au(y)},
b4:function(a){var z,y
H.u(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.j(z,a[y])
C.a.au(z)},
cQ:function(a,b){this.b=this.cV(!0,H.u(a,"$isa",[P.e],"$asa"),b)},
ai:function(a){return this.cQ(a,null)},
cV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.u(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.f(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){t=y[u]
s=$.ac().i(0,t)
C.a.j(w,"layout (location="+H.h(v.i(0,t))+") in "+s.a+" "+H.h(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.h(q)+p+";")}C.a.j(w,"")
C.a.j(w,"void main(void) {")
C.a.I(w,b)
C.a.j(w,"}")
return C.a.a3(w,"\n")},
p:{
c_:function(a){var z,y
z=P.e
y=[z]
return new G.iB(a,H.f([],y),H.f([],y),H.f([],y),H.f([],y),0,P.T(z,P.F))}}},
dJ:{"^":"b8;",
a_:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
iT:{"^":"c;a,b,c,d,e,f,r"},
cC:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hu:{"^":"cC;f,a,b,c,d,e",p:{
bW:function(a,b,c,d,e){var z=J.fe(a.a)
J.bp(a.a,e,z)
J.fy(a.a,37440,1)
J.bp(a.a,e,z)
J.fA(a.a,e,0,6408,6408,5121,c)
J.d2(a.a,e,10240,9729)
J.d2(a.a,e,10241,9729)
J.fu(a.a)
J.bp(a.a,e,null)
return new G.hu(c,b,z,e,a,new G.iT(!1,!1,!1,!0,1,9729,9729))}}}}],["","",,R,{"^":"",
j1:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eW().dZ()
if(v>=w)return H.k(x,v)
x[v]=(u-0.5)*c}y=G.dC(z,a.d,0,a.e.x)
y.a7(x)
return y},
jP:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.jn("span",null),"$isX")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).ax(y,"float")
y.setProperty(x,"left","")
x=C.z.ax(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.K(z,v)}return z},
it:{"^":"is;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
e3:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aM("size change "+H.h(y)+" "+H.h(x))
this.dx.cG(y,x)
this.z=y
this.Q=x},"$1","ge2",4,0,12]},
iI:{"^":"c;",
cR:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.d("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.n(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
iJ:{"^":"iI;e,f,a,b,c,d",
cT:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.e9(y,2)+" fps"
C.r.cp(this.c,b)
x=C.e.a1(30*C.A.dE(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isX")
v=w.style
u=""+x+"px"
v.height=u
C.r.K(z,w)}}}],["","",,A,{"^":"",
eq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isa",[G.bv],"$asa")
H.u(e,"$isa",[G.aR],"$asa")
z=b.dx
z.w(c)
y=b.d
z.bV(0,y)
x=b.cx
H.h(b)
w=C.a.gdX(e)
v=b.db
u=new Float32Array(9)
t=z.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[4]
u[4]=t[5]
u[5]=t[6]
u[6]=t[8]
u[7]=t[9]
u[8]=t[10]
v.dI(new T.am(u))
u=v.a
s=u[3]
u[3]=u[1]
u[1]=s
s=u[6]
u[6]=u[2]
u[2]=s
s=u[7]
u[7]=u[5]
u[5]=s
w=w.d
w.h(0,"uTransformationMatrix",y)
w.h(0,"uModelMatrix",z)
w.h(0,"uNormalMatrix",v)
C.a.j(e,b.ch)
a.cI(x,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.k(y,r)
A.eq(a,y[r],z,d,e)}},
az:{"^":"dJ;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
cz:{"^":"b8;d,e,f,a,b,c"},
is:{"^":"b8;",
cO:function(a,b,c){if(this.d==null)this.d=new G.hl(this.e,null,null,null,null)},
cH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.u(a,"$isa",[G.bv],"$asa")
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f7(v.a,36160,z)
J.fJ(v.a,this.x,this.y,x,w)
if(y!==0)J.fa(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.aR(P.T(x,w),"transforms",!1,!0))
r=new T.O(new Float32Array(16))
r.F()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.G)(v),++o)A.eq(p,v[o],r,a,s)
if(0>=s.length)return H.k(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,B,{"^":"",
h3:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.b(new Float32Array(3))
x.q(z,y,b2)
w=new T.b(new Float32Array(3))
w.q(b0,y,b2)
v=new T.b(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.b(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.b(new Float32Array(3))
s.q(z,y,t)
r=new T.b(new Float32Array(3))
r.q(z,b1,t)
q=new T.b(new Float32Array(3))
q.q(b0,b1,t)
p=new T.b(new Float32Array(3))
p.q(b0,y,t)
o=new T.b(new Float32Array(3))
o.q(z,b1,t)
n=new T.b(new Float32Array(3))
n.q(z,b1,b2)
m=new T.b(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.b(new Float32Array(3))
l.q(b0,b1,t)
k=new T.b(new Float32Array(3))
k.q(b0,y,b2)
j=new T.b(new Float32Array(3))
j.q(z,y,b2)
i=new T.b(new Float32Array(3))
i.q(z,y,t)
h=new T.b(new Float32Array(3))
h.q(b0,y,t)
g=new T.b(new Float32Array(3))
g.q(b0,y,t)
f=new T.b(new Float32Array(3))
f.q(b0,b1,t)
e=new T.b(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.b(new Float32Array(3))
d.q(b0,y,b2)
c=new T.b(new Float32Array(3))
c.q(z,y,t)
b=new T.b(new Float32Array(3))
b.q(z,y,b2)
y=new T.b(new Float32Array(3))
y.q(z,b1,b2)
a=new T.b(new Float32Array(3))
a.q(z,b1,t)
t=[T.b]
a0=H.f([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.r(new Float32Array(2))
z.t(a7,a9)
y=new T.r(new Float32Array(2))
y.t(a6,a9)
x=new T.r(new Float32Array(2))
x.t(a6,a8)
w=new T.r(new Float32Array(2))
w.t(a7,a8)
v=new T.r(new Float32Array(2))
v.t(a6,a9)
u=new T.r(new Float32Array(2))
u.t(a6,a8)
s=new T.r(new Float32Array(2))
s.t(a7,a8)
r=new T.r(new Float32Array(2))
r.t(a7,a9)
q=new T.r(new Float32Array(2))
q.t(a7,a8)
p=new T.r(new Float32Array(2))
p.t(a7,a9)
o=new T.r(new Float32Array(2))
o.t(a6,a9)
n=new T.r(new Float32Array(2))
n.t(a6,a8)
m=new T.r(new Float32Array(2))
m.t(a6,a8)
l=new T.r(new Float32Array(2))
l.t(a7,a8)
k=new T.r(new Float32Array(2))
k.t(a7,a9)
j=new T.r(new Float32Array(2))
j.t(a6,a9)
i=new T.r(new Float32Array(2))
i.t(a6,a9)
h=new T.r(new Float32Array(2))
h.t(a6,a8)
g=new T.r(new Float32Array(2))
g.t(a7,a8)
f=new T.r(new Float32Array(2))
f.t(a7,a9)
e=new T.r(new Float32Array(2))
e.t(a7,a9)
d=new T.r(new Float32Array(2))
d.t(a6,a9)
c=new T.r(new Float32Array(2))
c.t(a6,a8)
b=new T.r(new Float32Array(2))
b.t(a7,a8)
a1=H.f([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.r])
a2=new G.bx(!1,H.f([],[G.Y]),H.f([],[G.aj]),H.f([],t),P.T(P.e,[P.a,,]))
a2.N("aTexUV")
a2.N("aNormal")
a2.cD(6)
a2.a7(a0)
a2.af("aTexUV",a1)
for(a3=0;z=$.eX(),a3<6;++a3){a4=z[a3]
a2.ag("aNormal",H.f([a4,a4,a4,a4],t))}return a2},
h5:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.b]
x=H.f([],y)
w=H.f([],[T.r])
v=H.f([],y)
u=new T.b(new Float32Array(3))
u.q(0,z,0)
C.a.j(x,u)
u=new T.r(new Float32Array(2))
u.t(0,0)
C.a.j(w,u)
u=new T.b(new Float32Array(3))
u.q(0,1,0)
C.a.j(v,u)
u=-z
t=new T.b(new Float32Array(3))
t.q(0,u,0)
C.a.j(x,t)
t=new T.r(new Float32Array(2))
t.t(1,1)
C.a.j(w,t)
t=new T.b(new Float32Array(3))
t.q(0,-1,0)
C.a.j(v,t)
for(s=0;s<a0;++s){r=s/a0
t=r*3.141592653589793*2
q=Math.sin(t)
p=Math.cos(t)
t=new Float32Array(3)
t[0]=q*a
t[1]=z
t[2]=p*a
C.a.j(x,new T.b(t))
t=new Float32Array(2)
t[0]=r
t[1]=1
C.a.j(w,new T.r(t))
t=new Float32Array(3)
t[0]=0
t[1]=1
t[2]=0
C.a.j(v,new T.b(t))
t=new Float32Array(3)
t[0]=q*b
t[1]=u
t[2]=p*b
C.a.j(x,new T.b(t))
t=new Float32Array(2)
t[0]=r
t[1]=0
C.a.j(w,new T.r(t))
t=new Float32Array(3)
t[0]=0
t[1]=-1
t[2]=0
C.a.j(v,new T.b(t))}for(u=2*a0,s=0;s<u;s=o){o=s+2
if(o>=x.length)return H.k(x,o)
C.a.j(x,x[o])
t=s+3
if(t>=x.length)return H.k(x,t)
C.a.j(x,x[t])
if(o>=w.length)return H.k(w,o)
C.a.j(w,w[o])
if(t>=w.length)return H.k(w,t)
C.a.j(w,w[t])
n=x.length
if(o>=n)return H.k(x,o)
m=x[o]
if(t>=n)return H.k(x,t)
l=x[t]
t=s+4
if(t>=n)return H.k(x,t)
k=x[t]
t=new Float32Array(3)
j=new T.b(new Float32Array(3))
G.i7(m,l,k,new T.b(t),j)
C.a.j(v,j)
C.a.j(v,j)}u=H.f([],[G.Y])
t=H.f([],[G.aj])
i=new G.bx(!1,u,t,H.f([],y),P.T(P.e,[P.a,,]))
i.N("aTexUV")
i.a7(x)
i.af("aTexUV",w)
i.N("aNormal")
i.ag("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.j(u,new G.Y(0,g,e))
C.a.j(u,new G.Y(1,d,l))
C.a.j(t,new G.aj(h+e,h+g,h+l,h+d))}return i},
ht:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.Y]
y=H.f([],z)
x=[T.b]
w=H.f([],x)
C.a.I(y,$.eK())
C.a.I(w,$.eL())
for(v=0;v<a;++v,y=u){u=H.f([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.G)(y),++s){r=y[s]
q=J.cZ(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
p=new T.b(new Float32Array(3))
p.w(q)
q=r.ga9(r)
if(q>=w.length)return H.k(w,q)
p.j(0,w[q])
p.V(0,0.5)
p.C(0)
q=r.ga9(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
o=new T.b(new Float32Array(3))
o.w(q)
q=r.gaa(r)
if(q>=w.length)return H.k(w,q)
o.j(0,w[q])
o.V(0,0.5)
o.C(0)
q=r.gaa(r)
if(q>=w.length)return H.k(w,q)
q=w[q]
n=new T.b(new Float32Array(3))
n.w(q)
q=r.gao(r)
if(q>=w.length)return H.k(w,q)
n.j(0,w[q])
n.V(0,0.5)
n.C(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.Y(r.gao(r),m,k))
C.a.j(u,new G.Y(r.ga9(r),l,m))
C.a.j(u,new G.Y(r.gaa(r),k,l))
C.a.j(u,new G.Y(m,l,k))}}j=new G.bx(!1,H.f([],z),H.f([],[G.aj]),H.f([],x),P.T(P.e,[P.a,,]))
j.N("aTexUV")
j.N("aNormal")
for(z=y.length,t=[T.r],s=0;s<y.length;y.length===z||(0,H.G)(y),++s){r=y[s]
q=J.cZ(r)
if(q>=w.length)return H.k(w,q)
i=w[q]
q=r.ga9(r)
if(q>=w.length)return H.k(w,q)
h=w[q]
q=r.gaa(r)
if(q>=w.length)return H.k(w,q)
g=w[q]
q=i.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
e=new Float32Array(2)
e[0]=0.5*(1+f*0.3183098861837907)
e[1]=q*0.3183098861837907
q=h.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
d=new Float32Array(2)
d[0]=0.5*(1+f*0.3183098861837907)
d[1]=q*0.3183098861837907
q=g.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
c=new Float32Array(2)
c[0]=0.5*(1+f*0.3183098861837907)
c[1]=q*0.3183098861837907
j.ag("aNormal",H.f([i,h,g],x))
q=new T.b(new Float32Array(3))
q.w(i)
q.V(0,a0)
f=new T.b(new Float32Array(3))
f.w(h)
f.V(0,a0)
b=new T.b(new Float32Array(3))
b.w(g)
b.V(0,a0)
j.cE(H.f([q,f,b],x))
j.af("aTexUV",H.f([new T.r(e),new T.r(d),new T.r(c)],t))}return j},
iC:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.iU(B.ia(new B.iD(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.f([],[G.Y])
v=H.f([],[G.aj])
u=[T.b]
t=H.f([],u)
s=new G.bx(!1,w,v,t,P.T(P.e,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.G)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.i(q[p],"$isb")
v.toString
o=new T.b(new Float32Array(3))
o.w(v)
C.a.j(t,o)}}s.cK(z,y,!1)
s.cL(z,y)
s.N("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.G)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.k(q,o)
o=H.i(q[o],"$isb")
n=H.u(v.i(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.b(new Float32Array(3))
t.w(o);(n&&C.a).j(n,t)}}return s},
iU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.b]
H.u(a,"$isa",z,"$asa")
y=H.f([],[[P.a,T.b]])
x=new Float32Array(3)
w=new T.b(x)
v=new Float32Array(3)
u=new T.b(v)
t=new Float32Array(3)
s=new T.b(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.k(a,n)
m=a[n]
l=H.f([],z)
C.a.j(y,l)
p=m.a
n=p[2]
if(Math.abs(n)>0.7071067811865476){k=p[1]
j=k*k+n*n
i=1/Math.sqrt(j)
v[0]=0
v[1]=-p[2]*i
v[2]=p[1]*i
t[0]=j*i
t[1]=-p[0]*(p[1]*i)
t[2]=p[0]*(-p[2]*i)}else{n=p[0]
k=p[1]
j=n*n+k*k
i=1/Math.sqrt(j)
v[0]=-p[1]*i
v[1]=p[0]*i
v[2]=0
t[0]=-p[2]*(p[0]*i)
t[1]=p[2]*(-p[1]*i)
t[2]=j*i}u.C(0)
s.C(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.w(o)
w.aq(u,f)
w.aq(s,e)
p=new T.b(new Float32Array(3))
p.w(w)
C.a.j(l,p)
x[2]=0
x[1]=0
x[0]=0
w.aq(u,f)
w.aq(s,e)
w.C(0)
p=new T.b(new Float32Array(3))
p.w(w)
C.a.j(l,p)}}return y},
ia:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.a7,T.b]})
z=H.f([],[T.b])
y=new T.b(new Float32Array(3))
x=new T.b(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ae(0,y)
t=new T.b(new Float32Array(3))
t.w(y)
C.a.j(z,t)
t=new T.b(new Float32Array(3))
t.w(x)
C.a.j(z,t)}return z},
iD:{"^":"o:27;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sT(0,y*v)
b.sR(0,y*u)
b.sa4(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",
cv:function(a){var z,y,x,w
z=W.al
y=new P.U(0,$.D,[z])
x=document.createElement("img")
w=new W.bF(x,"load",!1,[W.S])
w.gdS(w).Y(new D.hK(new P.j7(y,[z]),x),-1)
x.src=a
return y},
hK:{"^":"o:12;a,b",
$1:function(a){H.i(a,"$isS")
return this.a.dG(0,this.b)}},
hD:{"^":"c;a,b,c",
cM:function(a){var z,y
a=document
z=W.b6
y={func:1,ret:-1,args:[z]}
W.an(a,"keydown",H.l(new D.hF(this),y),!1,z)
W.an(a,"keyup",H.l(new D.hG(this),y),!1,z)},
p:{
hE:function(a){var z=P.F
z=new D.hD(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z))
z.cM(a)
return z}}},
hF:{"^":"o:13;a",
$1:function(a){var z
H.i(a,"$isb6")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
hG:{"^":"o:13;a",
$1:function(a){var z
H.i(a,"$isb6")
z=this.a
z.a.c1(0,a.which)
z.c.j(0,a.which)}},
hW:{"^":"c;a,b,c,d,e,f,r,x",
cN:function(a){var z,y,x
if(a==null)a=document
z=J.n(a)
y=z.gbY(a)
x=H.p(y,0)
W.an(y.a,y.b,H.l(new D.hY(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbX(a)
y=H.p(x,0)
W.an(x.a,x.b,H.l(new D.hZ(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbZ(a)
x=H.p(y,0)
W.an(y.a,y.b,H.l(new D.i_(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc_(a)
x=H.p(z,0)
W.an(z.a,z.b,H.l(new D.i0(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hX:function(a){var z=P.F
z=new D.hW(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),0,0,0,0,0)
z.cN(a)
return z}}},
hY:{"^":"o:3;a",
$1:function(a){var z,y
H.i(a,"$isa_")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.Q(y.gbW(a).a)
z.x=H.Q(y.gbW(a).b)
z.d=a.movementX
z.e=a.movementY}},
hZ:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isa_")
a.preventDefault()
P.aM("BUTTON "+H.h(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
i_:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isa_")
a.preventDefault()
z=this.a
z.a.c1(0,a.button)
z.c.j(0,a.button)}},
i0:{"^":"o:28;a",
$1:function(a){H.i(a,"$isaT")
a.preventDefault()
this.a.f=H.Q(C.af.gdN(a))}},
i9:{"^":"fR;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bL:function(a){var z,y
z=C.f.dT(H.u(a,"$ism",[P.c],"$asm"),0,new A.kZ(),P.F)
if(typeof z!=="number")return H.aK(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kZ:{"^":"o:29;",
$2:function(a,b){var z,y
H.Q(a)
z=J.ar(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"c;a",
w:function(a){var z,y
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.k(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bL(this.a)},
S:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.k(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.k(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.k(y,x)
z[2]=y[x]
return new T.b(z)},
dI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.w(a)
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
return m}},O:{"^":"c;a",
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n[3] "+this.S(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bL(this.a)},
S:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.k(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.k(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.k(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.k(y,x)
z[3]=y[x]
return new T.aS(z)},
F:function(){var z=this.a
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
bV:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},r:{"^":"c;a",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bL(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gT:function(a){return this.a[0]},
gR:function(a){return this.a[1]}},b:{"^":"c;a",
q:function(a,b,c){var z=this.a
C.f.h(z,0,a)
C.f.h(z,1,b)
C.f.h(z,2,c)},
w:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bL(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gl:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaM:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gaM())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aK:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.b(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.i(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
aq:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ae:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
V:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sT:function(a,b){this.a[0]=b
return b},
sR:function(a,b){this.a[1]=b
return b},
sa4:function(a,b){this.a[2]=b
return b},
gT:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
ga4:function(a){return this.a[2]},
p:{
K:function(a,b,c){var z=new T.b(new Float32Array(3))
z.q(a,b,c)
return z}}},aS:{"^":"c;a",
k:function(a){var z=this.a
return H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+","+H.h(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aS){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bL(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
gl:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gT:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
ga4:function(a){return this.a[2]},
gck:function(a){return this.a[3]}}}],["","",,V,{"^":"",
hM:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.u(a2,"$isa",[G.aR],"$asa")
z=G.dH("textured",a1,$.f2(),$.f1())
y=[A.az]
x=H.f([],y)
w=G.cw("wood")
w.d.h(0,"uColor",$.eF())
v=D.cv("../wood.jpg")
v.Y(new V.hN(a1,w),null)
u=$.cU()
C.a.j(u,v)
t=G.cw("gradient")
t.d.h(0,"uColor",$.eH())
s=D.cv("../gradient.jpg")
s.Y(new V.hO(a1,t),null)
C.a.j(u,s)
r=G.cw("trans")
q=r.d
q.h(0,"uColor",$.eG())
q.h(0,"cBlendEquation",$.eE())
p=D.cv("../transparent.png")
p.Y(new V.hP(a1,r),null)
C.a.j(u,p)
u=G.by("icosahedron-3",z,B.ht(3,1,!0))
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new A.az(w,u,q,new T.am(o),n,m,new T.b(l),new T.b(k),new T.b(j),new T.b(new Float32Array(3)),"sphere",!1,!0)
i.a_(0,0,0)
C.a.j(x,i)
u=G.by("cube",z,B.h3(!0,1,0,1,0,1,1,1))
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
h=new A.az(t,u,q,new T.am(o),n,m,new T.b(l),new T.b(k),new T.b(j),new T.b(new Float32Array(3)),"cube",!1,!0)
h.a_(-5,0,-5)
C.a.j(x,h)
u=G.by("cylinder-32",z,B.h5(3,6,2,32,!0))
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
g=new A.az(r,u,q,new T.am(o),n,m,new T.b(l),new T.b(k),new T.b(j),new T.b(new Float32Array(3)),"cylinder",!1,!0)
g.a_(5,0,-5)
C.a.j(x,g)
u=new T.b(new Float32Array(3))
u.q(-2,-2,0)
q=new T.b(new Float32Array(3))
q.q(2,-2,0)
o=new T.b(new Float32Array(3))
o.q(2,2,0)
n=new T.b(new Float32Array(3))
n.q(-2,2,0)
m=[T.b]
f=H.f([u,q,o,n],m)
u=new T.r(new Float32Array(2))
u.t(0,0)
q=new T.r(new Float32Array(2))
q.t(1,0)
o=new T.r(new Float32Array(2))
o.t(1,1)
n=new T.r(new Float32Array(2))
n.t(0,1)
e=H.f([u,q,o,n],[T.r])
d=new T.b(new Float32Array(3))
d.q(0,0,1)
c=H.f([d,d,d,d],m)
b=new G.bx(!1,H.f([],[G.Y]),H.f([],[G.aj]),H.f([],m),P.T(P.e,[P.a,,]))
b.N("aTexUV")
b.cF(f)
b.af("aTexUV",e)
b.N("aNormal")
b.ag("aNormal",c)
u=G.by("quad",z,b)
q=H.f([],y)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
a=new A.az(r,u,q,new T.am(o),n,m,new T.b(l),new T.b(k),new T.b(j),new T.b(new Float32Array(3)),"quad",!1,!0)
a.a_(-5,0,5)
C.a.j(x,a)
u=G.by("torusknot",z,B.iC(!0,!0,1,2,3,1,128,16,0.4,!1))
y=H.f([],y)
q=new Float32Array(9)
o=new T.O(new Float32Array(16))
o.F()
n=new T.O(new Float32Array(16))
n.F()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
a0=new A.az(t,u,y,new T.am(q),o,n,new T.b(m),new T.b(l),new T.b(k),new T.b(new Float32Array(3)),"torus",!1,!0)
a0.a_(5,0,5)
C.a.j(x,a0)
return new A.cz(z,a2,x,"objects",!1,!0)},
ex:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.t.cn(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iJ(0,0,x,w,y.createElement("div"),R.jP("blue","gray",90,30))
u.cR(x,"blue","gray")
t=H.i(C.t.e0(y,"#webgl-canvas"),"$isbs")
s=new G.fU(t)
x=P.e
v=P.c
r=(t&&C.y).aR(t,"webgl2",P.dx(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a8(P.dq('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.h(J.ft(r))
if($.er>0)P.aM("I: "+q)
J.fb(r,0,0,0,1)
J.bq(r,2929)
J.bq(r,2884)
r=new Float32Array(3)
q=D.hE(null)
p=D.hX(t)
o=new T.O(new Float32Array(16))
o.F()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.i9(25,10,0,0,new T.b(r),-0.02,q,p,o,new T.b(n),new T.b(m),new T.b(l),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.O(new Float32Array(16))
r.F()
q=new T.O(new Float32Array(16))
q.F()
j=new G.ic(k,50,1,0.1,1000,r,q,new T.O(new Float32Array(16)),P.T(x,v),"perspective",!1,!0)
j.b9()
r=H.f([],[A.cz])
i=new R.it(t,j,null,s,r,17664,0,0,0,0,"main",!1,!0)
i.cO("main",s,null)
i.e3(null)
q=W.S
W.an(window,"resize",H.l(i.ge2(),{func:1,ret:-1,args:[q]}),!1,q)
q=[G.aR]
C.a.j(r,V.hM(s,H.f([j],q)))
p=G.dH("stars",s,$.f_(),$.eZ())
q=H.f([j],q)
o=[A.az]
n=H.f([],o)
m=$.eC()
x=P.T(x,v)
x.h(0,"cDepthTest",!0)
x.h(0,"cDepthWrite",!1)
x.h(0,"cBlendEquation",m)
x.h(0,"cStencilFunc",$.cR())
h=y.createElement("canvas")
h.width=64
h.height=64
g=H.i(C.y.cm(h,"2d"),"$iscm")
f=(g&&C.q).bJ(g,32,32,1,32,32,22);(f&&C.m).ap(f,0,"gray")
C.m.ap(f,1,"black")
g.fillStyle=f
C.q.dR(g,0,0,64,64)
f=C.q.bJ(g,32,32,1,32,32,6);(f&&C.m).ap(f,0,"white")
C.m.ap(f,1,"gray")
g.globalAlpha=0.9
g.fillStyle=f
g.arc(32,32,4,0,6.283185307179586,!1)
g.fill()
x.h(0,"uTexture",G.bW(p.d,"Utils::Particles",h,null,3553))
x.h(0,"uPointSize",1000)
e=R.j1(p,2000,100)
y=H.f([],o)
o=new Float32Array(9)
m=new T.O(new Float32Array(16))
m.F()
l=new T.O(new Float32Array(16))
l.F()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
C.a.j(n,new A.az(new G.dB(x,"stars",!1,!0),e,y,new T.am(o),m,l,new T.b(d),new T.b(c),new T.b(b),new T.b(new Float32Array(3)),e.a,!1,!0))
C.a.j(r,new A.cz(p,q,n,"stars",!1,!0))
z.a=0
P.hn($.cU(),null,!1,v).Y(new V.lc(new V.lb(z,k,i,u)),null)},
hN:{"^":"o:4;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.bW(this.a,"../wood.jpg",H.i(a,"$isal"),null,3553))}},
hO:{"^":"o:4;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.bW(this.a,"../gradient.jpg",H.i(a,"$isal"),null,3553))}},
hP:{"^":"o:4;a,b",
$1:function(a){this.b.d.h(0,"uTexture",G.bW(this.a,"../transparent.png",H.i(a,"$isal"),null,3553))}},
lb:{"^":"o:30;a,b,c,d",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
H.cO(b5)
if(typeof b5!=="number")return b5.b2()
z=this.a
z.a=b5+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aZ()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aZ()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.A(0,37))y.go+=0.03
else if(v.A(0,39))y.go-=0.03
if(v.A(0,38))y.id+=0.03
else if(v.A(0,40))y.id-=0.03
if(v.A(0,33))y.fy*=0.99
else if(v.A(0,34))y.fy*=1.01
if(v.A(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aZ()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.u.dF(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a_(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.b(new Float32Array(3))
o.q(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
n=new Float32Array(3)
m=new T.b(n)
m.w(u)
m.ae(0,t)
m.C(0)
l=o.bM(m)
l.C(0)
k=m.bM(l)
k.C(0)
t=l.aK(u)
j=k.aK(u)
u=m.aK(u)
i=l.a
h=i[0]
g=k.a
f=g[0]
e=n[0]
d=i[1]
c=g[1]
b=n[1]
i=i[2]
g=g[2]
n=n[2]
v[15]=1
v[14]=-u
v[13]=-j
v[12]=-t
v[11]=0
v[10]=n
v[9]=g
v[8]=i
v[7]=0
v[6]=b
v[5]=c
v[4]=d
v[3]=0
v[2]=e
v[1]=f
v[0]=h
v[12]=r
v[13]=q
v[14]=p
h=y.f
f=h.a
f[0]=v[2]
f[1]=v[6]
f[2]=v[10]
y=-y.k1
a=Math.sqrt(h.gaM())
r=f[0]/a
q=f[1]/a
p=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
f=q*a1
a5=r*p*a2+f
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-f
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
f=v[4]
h=v[8]
e=v[1]
d=v[5]
c=v[9]
b=v[2]
i=v[6]
g=v[10]
n=v[3]
t=v[7]
j=v[11]
v[0]=y*a3+f*a6+h*a9
v[1]=e*a3+d*a6+c*a9
v[2]=b*a3+i*a6+g*a9
v[3]=n*a3+t*a6+j*a9
v[4]=y*a4+f*a7+h*b0
v[5]=e*a4+d*a7+c*b0
v[6]=b*a4+i*a7+g*b0
v[7]=n*a4+t*a7+j*b0
v[8]=y*a5+f*a8+h*b1
v[9]=e*a5+d*a8+c*b1
v[10]=b*a5+i*a8+g*b1
v[11]=n*a5+t*a8+j*b1
w.c.ab(0)
w.b.ab(0)
x.e=0
x.d=0
x.f=0
x.c.ab(0)
x.b.ab(0)
b2=H.f([],[G.bv])
this.c.cH(b2)
b3=H.f([],[P.e])
for(y=b2.length,b4=0;b4<b2.length;b2.length===y||(0,H.G)(b2),++b4)C.a.j(b3,b2[b4].k(0))
C.ag.gdv(window).Y(this,-1)
this.d.cT(z.a,C.a.a3(b3,"<br>"))}},
lc:{"^":"o:31;a",
$1:function(a){H.b_(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.dt.prototype}if(typeof a=="string")return J.bC.prototype
if(a==null)return J.hB.prototype
if(typeof a=="boolean")return J.hA.prototype
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.c9(a)}
J.bl=function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.c9(a)}
J.es=function(a){if(a==null)return a
if(a.constructor==Array)return J.bA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.c9(a)}
J.kV=function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.be.prototype
return a}
J.kW=function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.be.prototype
return a}
J.et=function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.be.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.c)return a
return J.c9(a)}
J.bK=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.be.prototype
return a}
J.aO=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).G(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kV(a).Z(a,b)}
J.bo=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l8(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bl(a).i(a,b)}
J.cV=function(a,b){return J.et(a).ay(a,b)}
J.bO=function(a,b){return J.n(a).dg(a,b)}
J.f3=function(a,b,c,d){return J.n(a).dh(a,b,c,d)}
J.f4=function(a,b,c){return J.n(a).di(a,b,c)}
J.cW=function(a,b){return J.n(a).bu(a,b)}
J.f5=function(a,b,c,d){return J.n(a).ds(a,b,c,d)}
J.cX=function(a,b,c){return J.n(a).bw(a,b,c)}
J.f6=function(a,b){return J.n(a).dz(a,b)}
J.cd=function(a,b,c){return J.n(a).bx(a,b,c)}
J.f7=function(a,b,c){return J.n(a).bz(a,b,c)}
J.bp=function(a,b,c){return J.n(a).bA(a,b,c)}
J.bP=function(a,b){return J.n(a).dC(a,b)}
J.f8=function(a,b){return J.n(a).bB(a,b)}
J.f9=function(a,b,c){return J.n(a).bC(a,b,c)}
J.cY=function(a,b,c,d){return J.n(a).bD(a,b,c,d)}
J.fa=function(a,b){return J.n(a).bE(a,b)}
J.fb=function(a,b,c,d,e){return J.n(a).bF(a,b,c,d,e)}
J.fc=function(a,b){return J.kW(a).O(a,b)}
J.ce=function(a,b,c){return J.bl(a).dH(a,b,c)}
J.cf=function(a){return J.n(a).bH(a)}
J.fd=function(a){return J.n(a).bI(a)}
J.fe=function(a){return J.n(a).bL(a)}
J.ff=function(a){return J.n(a).dM(a)}
J.fg=function(a,b){return J.n(a).bN(a,b)}
J.cg=function(a,b){return J.n(a).bO(a,b)}
J.fh=function(a,b,c,d){return J.n(a).bP(a,b,c,d)}
J.fi=function(a,b,c,d,e){return J.n(a).dO(a,b,c,d,e)}
J.fj=function(a,b,c,d,e){return J.n(a).bQ(a,b,c,d,e)}
J.fk=function(a,b,c,d,e,f){return J.n(a).dP(a,b,c,d,e,f)}
J.fl=function(a,b){return J.es(a).u(a,b)}
J.bq=function(a,b){return J.n(a).bR(a,b)}
J.fm=function(a,b){return J.n(a).bS(a,b)}
J.fn=function(a){return J.n(a).dQ(a)}
J.fo=function(a,b){return J.n(a).H(a,b)}
J.cZ=function(a){return J.bK(a).gao(a)}
J.fp=function(a){return J.n(a).gdw(a)}
J.ar=function(a){return J.A(a).gB(a)}
J.bQ=function(a){return J.es(a).gD(a)}
J.b1=function(a){return J.bl(a).gl(a)}
J.fq=function(a){return J.n(a).ge_(a)}
J.fr=function(a){return J.n(a).ge7(a)}
J.fs=function(a){return J.bK(a).gck(a)}
J.bR=function(a){return J.bK(a).gT(a)}
J.ch=function(a){return J.bK(a).gR(a)}
J.d_=function(a){return J.bK(a).ga4(a)}
J.ci=function(a,b){return J.n(a).a5(a,b)}
J.ft=function(a){return J.n(a).at(a)}
J.fu=function(a){return J.n(a).aS(a)}
J.fv=function(a,b){return J.n(a).aT(a,b)}
J.fw=function(a,b,c){return J.n(a).aU(a,b,c)}
J.d0=function(a,b,c){return J.n(a).aY(a,b,c)}
J.fx=function(a,b){return J.n(a).bU(a,b)}
J.fy=function(a,b,c){return J.n(a).c0(a,b,c)}
J.d1=function(a){return J.n(a).e1(a)}
J.fz=function(a,b,c,d){return J.n(a).b1(a,b,c,d)}
J.fA=function(a,b,c,d,e,f,g){return J.n(a).c3(a,b,c,d,e,f,g)}
J.d2=function(a,b,c,d){return J.n(a).c4(a,b,c,d)}
J.fB=function(a){return J.et(a).e8(a)}
J.br=function(a){return J.A(a).k(a)}
J.fC=function(a,b,c,d){return J.n(a).ea(a,b,c,d)}
J.fD=function(a,b,c){return J.n(a).c6(a,b,c)}
J.fE=function(a,b,c){return J.n(a).c7(a,b,c)}
J.cj=function(a,b,c){return J.n(a).c8(a,b,c)}
J.fF=function(a,b,c){return J.n(a).c9(a,b,c)}
J.d3=function(a,b,c){return J.n(a).ca(a,b,c)}
J.d4=function(a,b,c){return J.n(a).cb(a,b,c)}
J.d5=function(a,b,c){return J.n(a).cc(a,b,c)}
J.d6=function(a,b,c,d){return J.n(a).cd(a,b,c,d)}
J.d7=function(a,b,c,d){return J.n(a).ce(a,b,c,d)}
J.fG=function(a,b){return J.n(a).cf(a,b)}
J.fH=function(a,b,c){return J.n(a).eb(a,b,c)}
J.fI=function(a,b,c,d,e,f,g){return J.n(a).cg(a,b,c,d,e,f,g)}
J.fJ=function(a,b,c,d,e){return J.n(a).cj(a,b,c,d,e)}
I.aL=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bS.prototype
C.y=W.bs.prototype
C.m=W.fS.prototype
C.q=W.cm.prototype
C.z=W.h0.prototype
C.r=W.h9.prototype
C.L=W.hb.prototype
C.M=W.hr.prototype
C.t=W.hs.prototype
C.N=J.j.prototype
C.a=J.bA.prototype
C.A=J.dt.prototype
C.e=J.du.prototype
C.u=J.bB.prototype
C.i=J.bC.prototype
C.U=J.bD.prototype
C.f=H.i1.prototype
C.n=H.i3.prototype
C.Z=W.i4.prototype
C.D=J.id.prototype
C.E=W.ip.prototype
C.J=W.iR.prototype
C.x=J.be.prototype
C.af=W.aT.prototype
C.ag=W.j4.prototype
C.K=new P.jJ()
C.d=new P.k0()
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
C.V=H.f(I.aL(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.W=H.f(I.aL(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.Y=H.f(I.aL([]),[P.B])
C.X=H.f(I.aL([]),[P.e])
C.v=H.f(I.aL(["bind","if","ref","repeat","syntax"]),[P.e])
C.w=H.f(I.aL(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a_=new G.E("vec3","vertex btangents",0)
C.c=new G.E("vec3","",0)
C.a0=new G.E("vec4","delta from light",0)
C.o=new G.E("","",0)
C.F=new G.E("vec3","vertex coordinates",0)
C.a1=new G.E("vec3","vertex binormals",0)
C.G=new G.E("vec4","for wireframe",0)
C.a2=new G.E("vec4","per vertex color",0)
C.a3=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a5=new G.E("mat4","",4)
C.a4=new G.E("mat4","",128)
C.b=new G.E("float","",0)
C.a6=new G.E("float","",4)
C.a7=new G.E("float","depth for shadowmaps",0)
C.h=new G.E("sampler2D","",0)
C.a8=new G.E("float","for bump maps",0)
C.a9=new G.E("vec2","texture uvs",0)
C.aa=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.ab=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.ac=new G.E("vec3","vertex normals",0)
C.ad=new G.E("sampler2DShadow","",0)
C.H=new G.E("vec3","per vertex color",0)
C.I=new G.E("mat3","",0)
C.ae=new G.E("vec3","vertex tangents",0)
$.ae=0
$.b2=null
$.db=null
$.cF=!1
$.ev=null
$.em=null
$.eA=null
$.c8=null
$.ca=null
$.cM=null
$.aW=null
$.bf=null
$.bg=null
$.cG=!1
$.D=C.d
$.ai=null
$.co=null
$.dn=null
$.dm=null
$.di=null
$.dh=null
$.dg=null
$.df=null
$.er=0
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
I.$lazy(y,x,w)}})(["lB","eJ",function(){return H.eu("_$dart_dartClosure")},"me","cQ",function(){return H.eu("_$dart_js")},"mZ","eM",function(){return H.ag(H.c1({
toString:function(){return"$receiver$"}}))},"n_","eN",function(){return H.ag(H.c1({$method$:null,
toString:function(){return"$receiver$"}}))},"n0","eO",function(){return H.ag(H.c1(null))},"n1","eP",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"n4","eS",function(){return H.ag(H.c1(void 0))},"n5","eT",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"n3","eR",function(){return H.ag(H.dQ(null))},"n2","eQ",function(){return H.ag(function(){try{null.$method$}catch(z){return z.message}}())},"n7","eV",function(){return H.ag(H.dQ(void 0))},"n6","eU",function(){return H.ag(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ni","cS",function(){return P.j8()},"nz","bn",function(){return[]},"ly","eI",function(){return{}},"nq","eY",function(){return P.cu(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"nr","cT",function(){return P.T(P.e,P.bw)},"mM","cR",function(){return new G.dP(1281,0,4294967295)},"lr","eD",function(){return G.cD(1281,1281,1281)},"ls","eE",function(){return G.cD(32774,770,771)},"lq","eC",function(){return G.cD(32774,770,769)},"nx","ac",function(){return P.dx(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a2,"aPosition",C.F,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a0,"vCenter",C.G,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.b,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.e,G.E)},"nc","eW",function(){return C.K},"lv","eG",function(){return T.K(0.4,0.4,0.4)},"lu","eF",function(){return T.K(0,0,0)},"lw","eH",function(){return T.K(1,0,0)},"nI","f2",function(){var z,y
z=G.c_("Textured")
y=[P.e]
z.b3(H.f(["aPosition","aTexUV"],y))
z.ah(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b4(H.f(["vTexUV"],y))
z.ai(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"nH","f1",function(){var z,y
z=G.c_("TexturedF")
y=[P.e]
z.b4(H.f(["vTexUV"],y))
z.ah(H.f(["uColor","uTexture"],y))
z.ai(H.f(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"],y))
return z},"nF","f_",function(){var z,y
z=G.c_("PointSpritesV")
y=[P.e]
z.b3(H.f(["aPosition"],y))
z.ah(H.f(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.ai(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"nE","eZ",function(){var z,y
z=G.c_("PointSpritesF")
y=[P.e]
z.ah(H.f(["uTexture"],y))
z.ai(H.f(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"nn","eX",function(){return H.f([T.K(0,0,1),T.K(0,0,-1),T.K(0,1,0),T.K(0,-1,0),T.K(1,0,0),T.K(-1,0,0)],[T.b])},"m5","eK",function(){return H.f([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.Y])},"nG","f0",function(){return(1+P.lh(5))/2},"m6","eL",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.f0()
y=T.K(-1,z,0)
y.C(0)
x=T.K(1,z,0)
x.C(0)
if(typeof z!=="number")return z.ed()
w=T.K(-1,-z,0)
w.C(0)
v=T.K(1,-z,0)
v.C(0)
u=T.K(0,-1,z)
u.C(0)
t=T.K(0,1,z)
t.C(0)
s=T.K(0,-1,-z)
s.C(0)
r=T.K(0,1,-z)
r.C(0)
q=T.K(z,0,-1)
q.C(0)
p=T.K(z,0,1)
p.C(0)
o=T.K(-z,0,-1)
o.C(0)
z=T.K(-z,0,1)
z.C(0)
return H.f([y,x,w,v,u,t,s,r,q,p,o,z],[T.b])},"nC","cU",function(){return H.f([],[[P.a2,P.c]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.B,args:[W.a_]},{func:1,ret:P.B,args:[W.al]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.e,args:[P.F]},{func:1,ret:P.W,args:[W.af]},{func:1,ret:P.W,args:[P.e]},{func:1,ret:-1,args:[W.S]},{func:1,ret:P.B,args:[W.b6]},{func:1,ret:P.W,args:[W.X,P.e,P.e,W.bH]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[,P.V]},{func:1,ret:P.B,args:[,],opt:[P.V]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:P.W,args:[W.v]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.B,args:[P.H]},{func:1,args:[W.S]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[P.a7,T.b]},{func:1,ret:P.B,args:[W.aT]},{func:1,ret:P.F,args:[P.F,P.c]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.B,args:[[P.a,,]]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.lj(d||a)
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
Isolate.aL=a.aL
Isolate.bj=a.bj
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
if(typeof dartMainRunner==="function")dartMainRunner(V.ex,[])
else V.ex([])})})()
//# sourceMappingURL=basics.dart.js.map
