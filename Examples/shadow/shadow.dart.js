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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isk)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cS(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bp=function(){}
var dart=[["","",,H,{"^":"",mS:{"^":"d;a"}}],["","",,J,{"^":"",
cW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cj:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cV==null){H.lC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.e8("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.d0()]
if(v!=null)return v
v=H.lJ(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.d0(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
k:{"^":"d;",
G:function(a,b){return a===b},
gB:function(a){return H.bf(a)},
k:["cO",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i2:{"^":"k;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isX:1},
i3:{"^":"k;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isG:1},
cC:{"^":"k;",
gB:function(a){return 0},
k:["cQ",function(a){return String(a)}]},
iK:{"^":"cC;"},
bj:{"^":"cC;"},
bH:{"^":"cC;",
k:function(a){var z=a[$.eZ()]
if(z==null)return this.cQ(a)
return"JavaScript function for "+H.h(J.bu(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbA:1},
bE:{"^":"k;$ti",
h:function(a,b){H.z(b,H.o(a,0))
if(!!a.fixed$length)H.a1(P.A("add"))
a.push(b)},
J:function(a,b){var z,y
H.t(b,"$ism",[H.o(a,0)],"$asm")
if(!!a.fixed$length)H.a1(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
ag:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.j(z,y,H.h(a[y]))
return z.join(b)},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
ge2:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.dF())},
bG:function(a,b){var z,y
H.n(b,{func:1,ret:P.X,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aU(a))}return!1},
cL:function(a,b){if(!!a.immutable$list)H.a1(P.A("sort"))
H.je(a,J.lc(),H.o(a,0))},
aA:function(a){return this.cL(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aS(a[z],b))return!0
return!1},
k:function(a){return P.cA(a,"[","]")},
gC:function(a){return new J.he(a,a.length,0,[H.o(a,0)])},
gB:function(a){return H.bf(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.e(H.aQ(a,b))
return a[b]},
j:function(a,b,c){H.z(c,H.o(a,0))
if(!!a.immutable$list)H.a1(P.A("indexed set"))
if(b>=a.length||b<0)throw H.e(H.aQ(a,b))
a[b]=c},
$isx:1,
$asx:I.bp,
$ism:1,
$isa:1,
p:{
i1:function(a,b){return J.cB(H.c(a,[b]))},
cB:function(a){H.bR(a)
a.fixed$length=Array
return a},
mQ:[function(a,b){return J.fC(H.eM(a,"$isa0"),H.eM(b,"$isa0"))},"$2","lc",8,0,30]}},
mR:{"^":"bE;$ti"},
he:{"^":"d;a,b,c,0d,$ti",
sbm:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.D(z))
x=this.c
if(x>=y){this.sbm(null)
return!1}this.sbm(z[x]);++this.c
return!0},
$isaA:1},
bF:{"^":"k;",
T:function(a,b){var z
H.cX(b)
if(typeof b!=="number")throw H.e(H.aP(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gav(b)
if(this.gav(a)===z)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
co:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.A(""+a+".toInt()"))},
dM:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.e(P.A(""+a+".ceil()"))},
dY:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.A(""+a+".floor()"))},
dN:function(a,b,c){if(this.T(b,c)>0)throw H.e(H.aP(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
ed:function(a,b){var z
if(b>20)throw H.e(P.bh(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
bd:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bD(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bD(a,b)},
bD:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.A("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bB:function(a,b){var z
if(a>0)z=this.dA(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dA:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.aP(b))
return a>b},
$isa0:1,
$asa0:function(){return[P.H]},
$isa5:1,
$isH:1},
dH:{"^":"bF;",$isB:1},
dG:{"^":"bF;"},
bG:{"^":"k;",
bS:function(a,b){if(b<0)throw H.e(H.aQ(a,b))
if(b>=a.length)H.a1(H.aQ(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.e(H.aQ(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.w(b)
if(typeof b!=="string")throw H.e(P.dl(b,null,null))
return a+b},
cM:function(a,b,c){var z
if(c>a.length)throw H.e(P.bh(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aB:function(a,b){return this.cM(a,b,0)},
bc:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.c6(b,null,null))
if(b>c)throw H.e(P.c6(b,null,null))
if(c>a.length)throw H.e(P.c6(c,null,null))
return a.substring(b,c)},
cN:function(a,b){return this.bc(a,b,null)},
ec:function(a){return a.toLowerCase()},
ef:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.ab(z,0)===133){x=J.i4(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bS(z,w)===133?J.i5(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dO:function(a,b,c){if(c>a.length)throw H.e(P.bh(c,0,a.length,null,null))
return H.lU(a,b,c)},
T:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.e(H.aP(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.e(H.aQ(a,b))
return a[b]},
$isx:1,
$asx:I.bp,
$isa0:1,
$asa0:function(){return[P.i]},
$isiI:1,
$isi:1,
p:{
dI:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
i4:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.ab(a,b)
if(y!==32&&y!==13&&!J.dI(y))break;++b}return b},
i5:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bS(a,z)
if(y!==32&&y!==13&&!J.dI(y))break}return b}}}}],["","",,H,{"^":"",
dF:function(){return new P.cI("No element")},
i0:function(){return new P.cI("Too many elements")},
je:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.B,args:[c,c]})
H.bK(a,0,J.b5(a)-1,b,c)},
bK:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.jd(a,b,c,d,e)
else H.jc(a,b,c,d,e)},
jd:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.bq(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.af(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.i(a,v))
w=v}y.j(a,w,x)}},
jc:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.d.Z(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.Z(b+a0,2)
v=w-z
u=w+z
t=J.bq(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.af(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.af(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.af(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.af(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.af(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.af(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.af(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.af(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.af(a1.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.i(a,b))
t.j(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aS(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.ai()
if(i<0){if(k!==m){t.j(a,k,t.i(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a0()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.j(a,k,t.i(a,m))
g=m+1
t.j(a,m,t.i(a,l))
t.j(a,l,j)
l=h
m=g
break}else{t.j(a,k,t.i(a,l))
t.j(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.ai()
if(e<0){if(k!==m){t.j(a,k,t.i(a,m))
t.j(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.a0()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.a0()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ai()
h=l-1
if(i<0){t.j(a,k,t.i(a,m))
g=m+1
t.j(a,m,t.i(a,l))
t.j(a,l,j)
m=g}else{t.j(a,k,t.i(a,l))
t.j(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.j(a,b,t.i(a,c))
t.j(a,c,r)
c=l+1
t.j(a,a0,t.i(a,c))
t.j(a,c,p)
H.bK(a,b,m-2,a1,a2)
H.bK(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aS(a1.$2(t.i(a,m),r),0);)++m
for(;J.aS(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.j(a,k,t.i(a,m))
t.j(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ai()
h=l-1
if(i<0){t.j(a,k,t.i(a,m))
g=m+1
t.j(a,m,t.i(a,l))
t.j(a,l,j)
m=g}else{t.j(a,k,t.i(a,l))
t.j(a,l,j)}l=h
break}}H.bK(a,m,l,a1,a2)}else H.bK(a,m,l,a1,a2)},
dy:{"^":"m;"},
c3:{"^":"dy;$ti",
gC:function(a){return new H.dL(this,this.gl(this),0,[H.cU(this,"c3",0)])},
aX:function(a,b){return this.cP(0,H.n(b,{func:1,ret:P.X,args:[H.cU(this,"c3",0)]}))}},
dL:{"^":"d;a,b,c,0d,$ti",
saa:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bq(z)
x=y.gl(z)
if(this.b!==x)throw H.e(P.aU(z))
w=this.c
if(w>=x){this.saa(null)
return!1}this.saa(y.w(z,w));++this.c
return!0},
$isaA:1},
ii:{"^":"m;a,b,$ti",
gC:function(a){var z=this.a
return new H.dO(z.gC(z),this.b,this.$ti)},
gl:function(a){return this.a.a.a},
$asm:function(a,b){return[b]},
p:{
ij:function(a,b,c,d){H.t(a,"$ism",[c],"$asm")
H.n(b,{func:1,ret:d,args:[c]})
return new H.hH(a,b,[c,d])}}},
hH:{"^":"ii;a,b,$ti"},
dO:{"^":"aA;0a,b,c,$ti",
saa:function(a){this.a=H.z(a,H.o(this,1))},
v:function(){var z=this.b
if(z.v()){this.saa(this.c.$1(z.d))
return!0}this.saa(null)
return!1},
gE:function(a){return this.a},
$asaA:function(a,b){return[b]}},
ik:{"^":"c3;a,b,$ti",
gl:function(a){return J.b5(this.a)},
w:function(a,b){return this.b.$1(J.fM(this.a,b))},
$asc3:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
e9:{"^":"m;a,b,$ti",
gC:function(a){return new H.jD(J.bY(this.a),this.b,this.$ti)}},
jD:{"^":"aA;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
c2:{"^":"d;$ti"}}],["","",,H,{"^":"",
aR:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lu:function(a){return init.types[H.T(a)]},
lF:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isy},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bu(a)
if(typeof z!=="string")throw H.e(H.aP(a))
return z},
bf:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iT:function(a){var z,y
if(typeof a!=="string")H.a1(H.aP(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.h4(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bg:function(a){return H.iL(a)+H.cb(H.at(a),0,null)},
iL:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isbj){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aR(w.length>1&&C.h.ab(w,0)===36?C.h.cN(w,1):w)},
aW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iS:function(a){var z=H.aW(a).getFullYear()+0
return z},
iQ:function(a){var z=H.aW(a).getMonth()+1
return z},
iM:function(a){var z=H.aW(a).getDate()+0
return z},
iN:function(a){var z=H.aW(a).getHours()+0
return z},
iP:function(a){var z=H.aW(a).getMinutes()+0
return z},
iR:function(a){var z=H.aW(a).getSeconds()+0
return z},
iO:function(a){var z=H.aW(a).getMilliseconds()+0
return z},
au:function(a){throw H.e(H.aP(a))},
f:function(a,b){if(a==null)J.b5(a)
throw H.e(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,"index",null)
z=H.T(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.au(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c6(b,"index",null)},
aP:function(a){return new P.aT(!0,a,null,null)},
eD:function(a){if(typeof a!=="number")throw H.e(H.aP(a))
return a},
e:function(a){var z
if(a==null)a=new P.dT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eQ})
z.name=""}else z.toString=H.eQ
return z},
eQ:function(){return J.bu(this.dartException)},
a1:function(a){throw H.e(a)},
D:function(a){throw H.e(P.aU(a))},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bB(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cD(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dS(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.f4()
u=$.f5()
t=$.f6()
s=$.f7()
r=$.fa()
q=$.fb()
p=$.f9()
$.f8()
o=$.fd()
n=$.fc()
m=v.P(y)
if(m!=null)return z.$1(H.cD(H.w(y),m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.cD(H.w(y),m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dS(H.w(y),m))}}return z.$1(new H.jx(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dY()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aT(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dY()
return a},
br:function(a){var z
if(a==null)return new H.ep(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ep(a)},
lq:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
lE:function(a,b,c,d,e,f){H.j(a,"$isbA")
switch(H.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.dC("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var z
H.T(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lE)
a.$identity=z
return z},
hp:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iZ(z).r}else x=d
w=e?Object.create(new H.jf().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ag
if(typeof u!=="number")return u.I()
$.ag=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dr(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lu,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dp:H.cv
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dr(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
hm:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dr:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ho(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hm(y,!w,z,b)
if(y===0){w=$.ag
if(typeof w!=="number")return w.I()
$.ag=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.c0("self")
$.b6=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ag
if(typeof w!=="number")return w.I()
$.ag=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.c0("self")
$.b6=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
hn:function(a,b,c,d){var z,y
z=H.cv
y=H.dp
switch(b?-1:a){case 0:throw H.e(H.j4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ho:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.c0("self")
$.b6=z}y=$.dn
if(y==null){y=H.c0("receiver")
$.dn=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hn(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ag
if(typeof y!=="number")return y.I()
$.ag=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ag
if(typeof y!=="number")return y.I()
$.ag=y+1
return new Function(z+y+"}")()},
cS:function(a,b,c,d,e,f,g){return H.hp(a,b,H.T(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aa(a,"String"))},
eE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aa(a,"double"))},
cX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aa(a,"num"))},
ce:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aa(a,"bool"))},
T:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aa(a,"int"))},
cY:function(a,b){throw H.e(H.aa(a,H.aR(H.w(b).substring(3))))},
lQ:function(a,b){throw H.e(H.dq(a,H.aR(H.w(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cY(a,b)},
M:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.lQ(a,b)},
eM:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cY(a,b)},
bR:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.e(H.aa(a,"List<dynamic>"))},
lI:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cY(a,b)},
cT:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.T(z)]
else return a.$S()}return},
bO:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cT(J.C(a))
if(z==null)return!1
return H.eu(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cO)return a
$.cO=!0
try{if(H.bO(a,b))return a
z=H.bT(b)
y=H.aa(a,z)
throw H.e(y)}finally{$.cO=!1}},
cg:function(a,b){if(a!=null&&!H.cR(a,b))H.a1(H.aa(a,H.bT(b)))
return a},
ey:function(a){var z,y
z=J.C(a)
if(!!z.$isp){y=H.cT(z)
if(y!=null)return H.bT(y)
return"Closure"}return H.bg(a)},
lV:function(a){throw H.e(new P.hw(H.w(a)))},
eI:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
at:function(a){if(a==null)return
return a.$ti},
om:function(a,b,c){return H.b4(a["$as"+H.h(c)],H.at(b))},
b2:function(a,b,c,d){var z
H.w(c)
H.T(d)
z=H.b4(a["$as"+H.h(c)],H.at(b))
return z==null?null:z[d]},
cU:function(a,b,c){var z
H.w(b)
H.T(c)
z=H.b4(a["$as"+H.h(b)],H.at(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.T(b)
z=H.at(a)
return z==null?null:z[b]},
bT:function(a){return H.aO(a,null)},
aO:function(a,b){var z,y
H.t(b,"$isa",[P.i],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aR(a[0].builtin$cls)+H.cb(a,1,b)
if(typeof a=="function")return H.aR(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.T(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.h(b[y])}if('func' in a)return H.lb(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.h.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.d)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lp(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cb:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.i],"$asa")
if(a==null)return""
z=new P.cK("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}return"<"+z.k(0)+">"},
lt:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isp){y=H.cT(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.at(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
H.w(b)
H.bR(c)
H.w(d)
if(a==null)return!1
z=H.at(a)
y=J.C(a)
if(y[b]==null)return!1
return H.eB(H.b4(y[d],z),null,c,null)},
bU:function(a,b,c,d){H.w(b)
H.bR(c)
H.w(d)
if(a==null)return a
if(H.b1(a,b,c,d))return a
throw H.e(H.dq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.cb(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.w(b)
H.bR(c)
H.w(d)
if(a==null)return a
if(H.b1(a,b,c,d))return a
throw H.e(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.cb(c,0,null),init.mangledGlobalNames)))},
eB:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a3(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a3(a[y],b,c[y],d))return!1
return!0},
oj:function(a,b,c){return a.apply(b,H.b4(J.C(b)["$as"+H.h(c)],H.at(b)))},
eK:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="d"||a.builtin$cls==="G"||a===-1||a===-2||H.eK(z)}return!1},
cR:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="d"||b.builtin$cls==="G"||b===-1||b===-2||H.eK(b)
if(b==null||b===-1||b.builtin$cls==="d"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bO(a,b)}z=J.C(a).constructor
y=H.at(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a3(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cR(a,b))throw H.e(H.aa(a,H.bT(b)))
return a},
a3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="d"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="d"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a3(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.eu(a,b,c,d)
if('func' in a)return c.builtin$cls==="bA"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a3("type" in a?a.type:null,b,x,d)
else if(H.a3(a,b,x,d))return!0
else{if(!('$is'+"b9" in y.prototype))return!1
w=y.prototype["$as"+"b9"]
v=H.b4(w,z?a.slice(1):null)
return H.a3(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eB(H.b4(r,z),b,u,d)},
eu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a3(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a3(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a3(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a3(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lP(m,b,l,d)},
lP:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a3(c[w],d,a[w],b))return!1}return!0},
ok:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
lJ:function(a){var z,y,x,w,v,u
z=H.w($.eJ.$1(a))
y=$.cf[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.eA.$2(a,z))
if(z!=null){y=$.cf[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cl(x)
$.cf[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ck[z]=x
return x}if(v==="-"){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eN(a,x)
if(v==="*")throw H.e(P.e8(z))
if(init.leafTags[z]===true){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eN(a,x)},
eN:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cl:function(a){return J.cW(a,!1,null,!!a.$isy)},
lO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cl(z)
else return J.cW(z,c,null,null)},
lC:function(){if(!0===$.cV)return
$.cV=!0
H.lD()},
lD:function(){var z,y,x,w,v,u,t,s
$.cf=Object.create(null)
$.ck=Object.create(null)
H.ly()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eO.$1(v)
if(u!=null){t=H.lO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ly:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.b0(C.L,H.b0(C.Q,H.b0(C.y,H.b0(C.y,H.b0(C.P,H.b0(C.M,H.b0(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eJ=new H.lz(v)
$.eA=new H.lA(u)
$.eO=new H.lB(t)},
b0:function(a,b){return a(b)||b},
lU:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iY:{"^":"d;a,b,c,d,e,f,r,0x",p:{
iZ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cB(z)
y=z[0]
x=z[1]
return new H.iY(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jr:{"^":"d;a,b,c,d,e,f",
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
ak:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e4:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iE:{"^":"V;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dS:function(a,b){return new H.iE(a,b==null?null:b.method)}}},
i7:{"^":"V;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
p:{
cD:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i7(a,y,z?null:b.receiver)}}},
jx:{"^":"V;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lW:{"^":"p:5;a",
$1:function(a){if(!!J.C(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ep:{"^":"d;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa9:1},
p:{"^":"d;",
k:function(a){return"Closure '"+H.bg(this).trim()+"'"},
gcF:function(){return this},
$isbA:1,
gcF:function(){return this}},
e_:{"^":"p;"},
jf:{"^":"e_;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aR(z)+"'"}},
cu:{"^":"e_;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.bf(this.a)
else y=typeof z!=="object"?J.aw(z):H.bf(z)
return(y^H.bf(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
p:{
cv:function(a){return a.a},
dp:function(a){return a.c},
c0:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.cB(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
js:{"^":"V;a",
k:function(a){return this.a},
p:{
aa:function(a,b){return new H.js("TypeError: "+P.c1(a)+": type '"+H.ey(a)+"' is not a subtype of type '"+b+"'")}}},
hk:{"^":"V;a",
k:function(a){return this.a},
p:{
dq:function(a,b){return new H.hk("CastError: "+P.c1(a)+": type '"+H.ey(a)+"' is not a subtype of type '"+b+"'")}}},
j3:{"^":"V;a",
k:function(a){return"RuntimeError: "+H.h(this.a)},
p:{
j4:function(a){return new H.j3(a)}}},
e5:{"^":"d;a,0b,0c,0d",
gar:function(){var z=this.b
if(z==null){z=H.bT(this.a)
this.b=z}return z},
k:function(a){return this.gar()},
gB:function(a){var z=this.d
if(z==null){z=C.h.gB(this.gar())
this.d=z}return z},
G:function(a,b){if(b==null)return!1
return b instanceof H.e5&&this.gar()===b.gar()}},
dJ:{"^":"dM;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gL:function(a){return new H.ah(this,[H.o(this,0)])},
geg:function(a){var z=H.o(this,0)
return H.ij(new H.ah(this,[z]),new H.i6(this),z,H.o(this,1))},
au:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.df(z,b)}else{y=this.e0(b)
return y}},
e0:function(a){var z=this.d
if(z==null)return!1
return this.aV(this.aO(z,J.aw(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ap(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ap(w,b)
x=y==null?null:y.b
return x}else return this.e1(b)},
e1:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aO(z,J.aw(a)&0x3ffffff)
x=this.aV(y,a)
if(x<0)return
return y[x].b},
j:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aQ()
this.b=z}this.bn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aQ()
this.c=y}this.bn(y,b,c)}else{x=this.d
if(x==null){x=this.aQ()
this.d=x}w=J.aw(b)&0x3ffffff
v=this.aO(x,w)
if(v==null)this.aT(x,w,[this.aH(b,c)])
else{u=this.aV(v,b)
if(u>=0)v[u].b=c
else v.push(this.aH(b,c))}}},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aU(this))
z=z.c}},
bn:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.ap(a,b)
if(z==null)this.aT(a,b,this.aH(b,c))
else z.b=c},
bp:function(){this.r=this.r+1&67108863},
aH:function(a,b){var z,y
z=new H.ic(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bp()
return z},
aV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aS(a[y].a,b))return y
return-1},
k:function(a){return P.dN(this)},
ap:function(a,b){return a[b]},
aO:function(a,b){return a[b]},
aT:function(a,b,c){a[b]=c},
dg:function(a,b){delete a[b]},
df:function(a,b){return this.ap(a,b)!=null},
aQ:function(){var z=Object.create(null)
this.aT(z,"<non-identifier-key>",z)
this.dg(z,"<non-identifier-key>")
return z},
$isdK:1},
i6:{"^":"p;a",
$1:function(a){var z=this.a
return z.i(0,H.z(a,H.o(z,0)))},
$S:function(){var z=this.a
return{func:1,ret:H.o(z,1),args:[H.o(z,0)]}}},
ic:{"^":"d;a,b,0c,0d"},
ah:{"^":"dy;a,$ti",
gl:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.id(z,z.r,this.$ti)
y.c=z.e
return y}},
id:{"^":"d;a,b,0c,0d,$ti",
sbo:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aU(z))
else{z=this.c
if(z==null){this.sbo(null)
return!1}else{this.sbo(z.a)
this.c=this.c.c
return!0}}},
$isaA:1},
lz:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
lA:{"^":"p:15;a",
$2:function(a,b){return this.a(a,b)}},
lB:{"^":"p:16;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
lp:function(a){return J.i1(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ca:function(a){var z,y
if(!!J.C(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.j(z,y,a[y])
return z},
am:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.aQ(b,a))},
iy:{"^":"k;",$isjt:1,"%":"DataView;ArrayBufferView;cG|ej|ek|dQ|el|em|aC"},
cG:{"^":"iy;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bp,
$isy:1,
$asy:I.bp},
dQ:{"^":"ek;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
j:function(a,b,c){H.eE(c)
H.am(b,a,a.length)
a[b]=c},
$asc2:function(){return[P.a5]},
$asq:function(){return[P.a5]},
$ism:1,
$asm:function(){return[P.a5]},
$isa:1,
$asa:function(){return[P.a5]},
"%":"Float64Array"},
aC:{"^":"em;",
j:function(a,b,c){H.T(c)
H.am(b,a,a.length)
a[b]=c},
$asc2:function(){return[P.B]},
$asq:function(){return[P.B]},
$ism:1,
$asm:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
ix:{"^":"dQ;",$isaq:1,"%":"Float32Array"},
n_:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Int16Array"},
n0:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
$ishZ:1,
"%":"Int32Array"},
n1:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Int8Array"},
n2:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
iz:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
$isnQ:1,
"%":"Uint32Array"},
n3:{"^":"aC;",
gl:function(a){return a.length},
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
n4:{"^":"aC;",
gl:function(a){return a.length},
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ej:{"^":"cG+q;"},
ek:{"^":"ej+c2;"},
el:{"^":"cG+q;"},
em:{"^":"el+c2;"}}],["","",,P,{"^":"",
jH:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bo(new P.jJ(z),1)).observe(y,{childList:true})
return new P.jI(z,y,x)}else if(self.setImmediate!=null)return P.lk()
return P.ll()},
o0:[function(a){self.scheduleImmediate(H.bo(new P.jK(H.n(a,{func:1,ret:-1})),0))},"$1","lj",4,0,4],
o1:[function(a){self.setImmediate(H.bo(new P.jL(H.n(a,{func:1,ret:-1})),0))},"$1","lk",4,0,4],
o2:[function(a){H.n(a,{func:1,ret:-1})
P.kU(0,a)},"$1","ll",4,0,4],
lf:function(a,b){if(H.bO(a,{func:1,args:[P.d,P.a9]}))return H.n(a,{func:1,ret:null,args:[P.d,P.a9]})
if(H.bO(a,{func:1,args:[P.d]}))return H.n(a,{func:1,ret:null,args:[P.d]})
throw H.e(P.dl(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
le:function(){var z,y
for(;z=$.b_,z!=null;){$.bn=null
y=z.b
$.b_=y
if(y==null)$.bm=null
z.a.$0()}},
of:[function(){$.cP=!0
try{P.le()}finally{$.bn=null
$.cP=!1
if($.b_!=null)$.d1().$1(P.eC())}},"$0","eC",0,0,1],
ex:function(a){var z=new P.eb(H.n(a,{func:1,ret:-1}))
if($.b_==null){$.bm=z
$.b_=z
if(!$.cP)$.d1().$1(P.eC())}else{$.bm.b=z
$.bm=z}},
li:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.ex(a)
$.bn=$.bm
return}y=new P.eb(a)
x=$.bn
if(x==null){y.b=z
$.bn=y
$.b_=y}else{y.b=x.b
x.b=y
$.bn=y
if(y.b==null)$.bm=y}},
lR:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.L
if(C.f===y){P.cd(null,null,C.f,a)
return}y.toString
P.cd(null,null,y,H.n(y.bJ(a),z))},
cc:function(a,b,c,d,e){var z={}
z.a=d
P.li(new P.lg(z,e))},
ev:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
ew:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
lh:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
cd:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bJ(d):c.dJ(d,-1)
P.ex(d)},
jJ:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jI:{"^":"p:17;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jK:{"^":"p:0;a",
$0:function(){this.a.$0()}},
jL:{"^":"p:0;a",
$0:function(){this.a.$0()}},
kT:{"^":"d;a,0b,c",
da:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bo(new P.kV(this,b),0),a)
else throw H.e(P.A("`setTimeout()` not found."))},
p:{
kU:function(a,b){var z=new P.kT(!0,0)
z.da(a,b)
return z}}},
kV:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jO:{"^":"d;$ti"},
kO:{"^":"jO;a,$ti"},
aZ:{"^":"d;0a,b,c,d,e,$ti",
e3:function(a){if(this.c!==6)return!0
return this.b.b.aW(H.n(this.d,{func:1,ret:P.X,args:[P.d]}),a.a,P.X,P.d)},
e_:function(a){var z,y,x,w
z=this.e
y=P.d
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bO(z,{func:1,args:[P.d,P.a9]}))return H.cg(w.e7(z,a.a,a.b,null,y,P.a9),x)
else return H.cg(w.aW(H.n(z,{func:1,args:[P.d]}),a.a,null,y),x)}},
al:{"^":"d;bC:a<,b,0dv:c<,$ti",
cn:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.f){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lf(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.al(0,$.L,[c])
w=b==null?1:3
this.br(new P.aZ(x,w,a,b,[z,c]))
return x},
cm:function(a,b){return this.cn(a,null,b)},
br:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.j(this.c,"$isal")
z=y.a
if(z<4){y.br(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cd(null,null,z,H.n(new P.k2(this,a),{func:1,ret:-1}))}},
bz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isal")
y=u.a
if(y<4){u.bz(a)
return}this.a=y
this.c=u.c}z.a=this.aq(a)
y=this.b
y.toString
P.cd(null,null,y,H.n(new P.k7(z,this),{func:1,ret:-1}))}},
aS:function(){var z=H.j(this.c,"$isaZ")
this.c=null
return this.aq(z)},
aq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aJ:function(a){var z,y,x
z=H.o(this,0)
H.cg(a,{futureOr:1,type:z})
y=this.$ti
if(H.b1(a,"$isb9",y,"$asb9"))if(H.b1(a,"$isal",y,null))P.ee(a,this)
else P.k3(a,this)
else{x=this.aS()
H.z(a,z)
this.a=4
this.c=a
P.bl(this,x)}},
bt:function(a,b){var z
H.j(b,"$isa9")
z=this.aS()
this.a=8
this.c=new P.a2(a,b)
P.bl(this,z)},
$isb9:1,
p:{
k3:function(a,b){var z,y,x
b.a=1
try{a.cn(new P.k4(b),new P.k5(b),null)}catch(x){z=H.ad(x)
y=H.br(x)
P.lR(new P.k6(b,z,y))}},
ee:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isal")
if(z>=4){y=b.aS()
b.a=a.a
b.c=a.c
P.bl(b,y)}else{y=H.j(b.c,"$isaZ")
b.a=2
b.c=a
a.bz(y)}},
bl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isa2")
y=y.b
u=v.a
t=v.b
y.toString
P.cc(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bl(z.a,b)}y=z.a
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
if(p){H.j(r,"$isa2")
y=y.b
u=r.a
t=r.b
y.toString
P.cc(null,null,y,u,t)
return}o=$.L
if(o!=q)$.L=q
else o=null
y=b.c
if(y===8)new P.ka(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k9(x,b,r).$0()}else if((y&2)!==0)new P.k8(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.C(y).$isb9){if(y.a>=4){n=H.j(t.c,"$isaZ")
t.c=null
b=t.aq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ee(y,t)
return}}m=b.b
n=H.j(m.c,"$isaZ")
m.c=null
b=m.aq(n)
y=x.a
u=x.b
if(!y){H.z(u,H.o(m,0))
m.a=4
m.c=u}else{H.j(u,"$isa2")
m.a=8
m.c=u}z.a=m
y=m}}}},
k2:{"^":"p:0;a,b",
$0:function(){P.bl(this.a,this.b)}},
k7:{"^":"p:0;a,b",
$0:function(){P.bl(this.b,this.a.a)}},
k4:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aJ(a)}},
k5:{"^":"p:18;a",
$2:function(a,b){H.j(b,"$isa9")
this.a.bt(a,b)},
$1:function(a){return this.$2(a,null)}},
k6:{"^":"p:0;a,b,c",
$0:function(){this.a.bt(this.b,this.c)}},
ka:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ci(H.n(w.d,{func:1}),null)}catch(v){y=H.ad(v)
x=H.br(v)
if(this.d){w=H.j(this.a.a.c,"$isa2").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isa2")
else u.b=new P.a2(y,x)
u.a=!0
return}if(!!J.C(z).$isb9){if(z instanceof P.al&&z.gbC()>=4){if(z.gbC()===8){w=this.b
w.b=H.j(z.gdv(),"$isa2")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.cm(new P.kb(t),null)
w.a=!1}}},
kb:{"^":"p:19;a",
$1:function(a){return this.a}},
k9:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aW(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ad(t)
y=H.br(t)
x=this.a
x.b=new P.a2(z,y)
x.a=!0}}},
k8:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isa2")
w=this.c
if(w.e3(z)&&w.e!=null){v=this.b
v.b=w.e_(z)
v.a=!1}}catch(u){y=H.ad(u)
x=H.br(u)
w=H.j(this.a.a.c,"$isa2")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a2(y,x)
s.a=!0}}},
eb:{"^":"d;a,0b"},
jj:{"^":"d;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.al(0,$.L,[P.B])
z.a=0
x=H.o(this,0)
w=H.n(new P.jl(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.jm(z,y),{func:1,ret:-1})
W.ac(this.a,this.b,w,!1,x)
return y}},
jl:{"^":"p;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.o(this.b,0)]}}},
jm:{"^":"p:0;a,b",
$0:function(){this.b.aJ(this.a.a)}},
jk:{"^":"d;"},
a2:{"^":"d;a,b",
k:function(a){return H.h(this.a)},
$isV:1},
l0:{"^":"d;",$isnZ:1},
lg:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.k(0)
throw x}},
kx:{"^":"l0;",
e8:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.f===$.L){a.$0()
return}P.ev(null,null,this,a,-1)}catch(x){z=H.ad(x)
y=H.br(x)
P.cc(null,null,this,z,H.j(y,"$isa9"))}},
e9:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.f===$.L){a.$1(b)
return}P.ew(null,null,this,a,b,-1,c)}catch(x){z=H.ad(x)
y=H.br(x)
P.cc(null,null,this,z,H.j(y,"$isa9"))}},
dJ:function(a,b){return new P.kz(this,H.n(a,{func:1,ret:b}),b)},
bJ:function(a){return new P.ky(this,H.n(a,{func:1,ret:-1}))},
dK:function(a,b){return new P.kA(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
ci:function(a,b){H.n(a,{func:1,ret:b})
if($.L===C.f)return a.$0()
return P.ev(null,null,this,a,b)},
aW:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.L===C.f)return a.$1(b)
return P.ew(null,null,this,a,b,c,d)},
e7:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.L===C.f)return a.$2(b,c)
return P.lh(null,null,this,a,b,c,d,e,f)}},
kz:{"^":"p;a,b,c",
$0:function(){return this.a.ci(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ky:{"^":"p:1;a,b",
$0:function(){return this.a.e8(this.b)}},
kA:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.e9(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cE:function(a,b,c){H.bR(a)
return H.t(H.lq(a,new H.dJ(0,0,[b,c])),"$isdK",[b,c],"$asdK")},
S:function(a,b){return new H.dJ(0,0,[a,b])},
a8:function(a,b,c,d){return new P.ki(0,0,[d])},
i_:function(a,b,c){var z,y
if(P.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.c([],[P.i])
y=$.bs()
C.a.h(y,a)
try{P.ld(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.dZ(b,H.lI(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.cQ(a))return b+"..."+c
z=new P.cK(b)
y=$.bs()
C.a.h(y,a)
try{x=z
x.a=P.dZ(x.ga3(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.ga3()+c
y=z.ga3()
return y.charCodeAt(0)==0?y:y},
cQ:function(a){var z,y
for(z=0;y=$.bs(),z<y.length;++z)if(a===y[z])return!0
return!1},
ld:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.i],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.h(z.gE(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.v()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.v();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
cF:function(a,b){var z,y,x
z=P.a8(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)z.h(0,H.z(a[x],b))
return z},
dN:function(a){var z,y,x
z={}
if(P.cQ(a))return"{...}"
y=new P.cK("")
try{C.a.h($.bs(),a)
x=y
x.a=x.ga3()+"{"
z.a=!0
J.fP(a,new P.ih(z,y))
z=y
z.a=z.ga3()+"}"}finally{z=$.bs()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.ga3()
return z.charCodeAt(0)==0?z:z},
ki:{"^":"kd;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){var z=new P.ei(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbN")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.j(y[b],"$isbN")!=null}else return this.de(b)},
de:function(a){var z=this.d
if(z==null)return!1
return this.aN(this.bx(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cM()
this.b=z}return this.bq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cM()
this.c=y}return this.bq(y,b)}else return this.dc(0,b)},
dc:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cM()
this.d=z}y=this.bu(b)
x=z[y]
if(x==null)z[y]=[this.aR(b)]
else{if(this.aN(x,b)>=0)return!1
x.push(this.aR(b))}return!0},
cg:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bA(this.c,b)
else return this.dq(0,b)},
dq:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bx(z,b)
x=this.aN(y,b)
if(x<0)return!1
this.bE(y.splice(x,1)[0])
return!0},
af:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aP()}},
bq:function(a,b){H.z(b,H.o(this,0))
if(H.j(a[b],"$isbN")!=null)return!1
a[b]=this.aR(b)
return!0},
bA:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isbN")
if(z==null)return!1
this.bE(z)
delete a[b]
return!0},
aP:function(){this.r=this.r+1&67108863},
aR:function(a){var z,y
z=new P.bN(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aP()
return z},
bE:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aP()},
bu:function(a){return J.aw(a)&0x3ffffff},
bx:function(a,b){return a[this.bu(b)]},
aN:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aS(a[y].a,b))return y
return-1},
p:{
cM:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bN:{"^":"d;a,0b,0c"},
ei:{"^":"d;a,b,0c,0d,$ti",
sbs:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aU(z))
else{z=this.c
if(z==null){this.sbs(null)
return!1}else{this.sbs(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isaA:1,
p:{
kj:function(a,b,c){var z=new P.ei(a,b,[c])
z.c=a.e
return z}}},
kd:{"^":"j5;"},
ie:{"^":"kk;",$ism:1,$isa:1},
q:{"^":"d;$ti",
gC:function(a){return new H.dL(a,this.gl(a),0,[H.b2(this,a,"q",0)])},
w:function(a,b){return this.i(a,b)},
dZ:function(a,b,c,d){var z,y,x
H.z(b,d)
H.n(c,{func:1,ret:d,args:[d,H.b2(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.e(P.aU(a))}return y},
c7:function(a,b,c,d){var z
H.z(d,H.b2(this,a,"q",0))
P.iX(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.j(a,z,d)},
k:function(a){return P.cA(a,"[","]")}},
dM:{"^":"Z;"},
ih:{"^":"p:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
Z:{"^":"d;$ti",
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.b2(this,a,"Z",0),H.b2(this,a,"Z",1)]})
for(z=J.bY(this.gL(a));z.v();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.b5(this.gL(a))},
k:function(a){return P.dN(a)},
$isO:1},
j6:{"^":"d;$ti",
J:function(a,b){var z
for(z=J.bY(H.t(b,"$ism",this.$ti,"$asm"));z.v();)this.h(0,z.gE(z))},
k:function(a){return P.cA(this,"{","}")},
$ism:1,
$isnm:1},
j5:{"^":"j6;"},
kk:{"^":"d+q;"}}],["","",,P,{"^":"",
lo:function(a,b){var z=H.iT(a)
if(z!=null)return z
throw H.e(new P.hP("Invalid double",a,null))},
hK:function(a){if(a instanceof H.p)return a.k(0)
return"Instance of '"+H.bg(a)+"'"},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bu(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hK(a)},
dC:function(a){return new P.k_(a)},
a6:function(a){H.bS(H.h(a))},
X:{"^":"d;"},
"+bool":0,
bv:{"^":"d;a,b",
G:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a&&!0},
T:function(a,b){return C.d.T(this.a,H.j(b,"$isbv").a)},
gB:function(a){var z=this.a
return(z^C.d.bB(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.hy(H.iS(this))
y=P.bw(H.iQ(this))
x=P.bw(H.iM(this))
w=P.bw(H.iN(this))
v=P.bw(H.iP(this))
u=P.bw(H.iR(this))
t=P.hz(H.iO(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isa0:1,
$asa0:function(){return[P.bv]},
p:{
hy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bw:function(a){if(a>=10)return""+a
return"0"+a}}},
a5:{"^":"H;"},
"+double":0,
b7:{"^":"d;a",
a0:function(a,b){return C.d.a0(this.a,H.j(b,"$isb7").a)},
G:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.d.T(this.a,H.j(b,"$isb7").a)},
k:function(a){var z,y,x,w,v
z=new P.hG()
y=this.a
if(y<0)return"-"+new P.b7(0-y).k(0)
x=z.$1(C.d.Z(y,6e7)%60)
w=z.$1(C.d.Z(y,1e6)%60)
v=new P.hF().$1(y%1e6)
return""+C.d.Z(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
$isa0:1,
$asa0:function(){return[P.b7]},
p:{
dx:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hF:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hG:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"d;"},
dT:{"^":"V;",
k:function(a){return"Throw of null."}},
aT:{"^":"V;a,b,c,d",
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaL()+y+x
if(!this.a)return w
v=this.gaK()
u=P.c1(this.b)
return w+v+": "+u},
p:{
dl:function(a,b,c){return new P.aT(!0,a,b,c)}}},
dU:{"^":"aT;e,f,a,b,c,d",
gaL:function(){return"RangeError"},
gaK:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
p:{
c6:function(a,b,c){return new P.dU(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.dU(b,c,!0,a,d,"Invalid value")},
iX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.bh(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.bh(b,a,c,"end",f))
return b}}},
hY:{"^":"aT;e,l:f>,a,b,c,d",
gaL:function(){return"RangeError"},
gaK:function(){var z,y
z=H.T(this.b)
if(typeof z!=="number")return z.ai()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.h(y)},
p:{
I:function(a,b,c,d,e){var z=H.T(e==null?J.b5(b):e)
return new P.hY(b,z,!0,a,c,"Index out of range")}}},
jy:{"^":"V;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jy(a)}}},
jw:{"^":"V;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
e8:function(a){return new P.jw(a)}}},
cI:{"^":"V;a",
k:function(a){return"Bad state: "+this.a},
p:{
cJ:function(a){return new P.cI(a)}}},
hq:{"^":"V;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.c1(z)+"."},
p:{
aU:function(a){return new P.hq(a)}}},
dY:{"^":"d;",
k:function(a){return"Stack Overflow"},
$isV:1},
hw:{"^":"V;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
k_:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
hP:{"^":"d;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.bc(x,0,75)+"...":x
return y+"\n"+w}else return y}},
bA:{"^":"d;"},
B:{"^":"H;"},
"+int":0,
m:{"^":"d;$ti",
aX:["cP",function(a,b){var z=H.cU(this,"m",0)
return new H.e9(this,H.n(b,{func:1,ret:P.X,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gC(this)
for(y=0;z.v();)++y
return y},
ga2:function(a){var z,y
z=this.gC(this)
if(!z.v())throw H.e(H.dF())
y=z.gE(z)
if(z.v())throw H.e(H.i0())
return y},
w:function(a,b){var z,y,x
if(b<0)H.a1(P.bh(b,0,null,"index",null))
for(z=this.gC(this),y=0;z.v();){x=z.gE(z)
if(b===y)return x;++y}throw H.e(P.I(b,this,"index",null,y))},
k:function(a){return P.i_(this,"(",")")}},
aA:{"^":"d;$ti"},
a:{"^":"d;$ti",$ism:1},
"+List":0,
O:{"^":"d;$ti"},
G:{"^":"d;",
gB:function(a){return P.d.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"d;",$isa0:1,
$asa0:function(){return[P.H]}},
"+num":0,
d:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.bf(this)},
k:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.k(this)}},
a9:{"^":"d;"},
i:{"^":"d;",$isa0:1,
$asa0:function(){return[P.i]},
$isiI:1},
"+String":0,
cK:{"^":"d;a3:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dZ:function(a,b,c){var z=J.bY(b)
if(!z.v())return a
if(c.length===0){do a+=H.h(z.gE(z))
while(z.v())}else{a+=H.h(z.gE(z))
for(;z.v();)a=a+c+H.h(z.gE(z))}return a}}}}],["","",,W,{"^":"",
hI:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).U(z,a,b,c)
y.toString
z=W.v
z=new H.e9(new W.ab(y),H.n(new W.hJ(),{func:1,ret:P.X,args:[z]}),[z])
return H.j(z.ga2(z),"$isU")},
dB:function(a){H.j(a,"$isP")
return"wheel"},
b8:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fS(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ad(x)}return z},
jX:function(a,b){return document.createElement(a)},
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eh:function(a,b,c,d){var z,y
z=W.c9(W.c9(W.c9(W.c9(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
cN:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jR(a)
if(!!J.C(z).$isP)return z
return}else return H.j(a,"$isP")},
ez:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.f)return a
return z.dK(a,b)},
Q:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lX:{"^":"k;0l:length=","%":"AccessibleNodeList"},
hc:{"^":"Q;",
k:function(a){return String(a)},
$ishc:1,
"%":"HTMLAnchorElement"},
lY:{"^":"Q;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
dm:{"^":"Q;",$isdm:1,"%":"HTMLBaseElement"},
hh:{"^":"k;","%":";Blob"},
c_:{"^":"Q;",$isc_:1,"%":"HTMLBodyElement"},
cw:{"^":"Q;0n:height=,0m:width=",
cG:function(a,b,c){var z=this.dj(a,b,P.lm(c,null))
return z},
dj:function(a,b,c){return a.getContext(b,c)},
$iscw:1,
"%":"HTMLCanvasElement"},
m2:{"^":"k;",
ay:function(a){return P.a4(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
m3:{"^":"v;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hr:{"^":"cx;",$ishr:1,"%":"CSSNumericValue|CSSUnitValue"},
ma:{"^":"hu;0l:length=","%":"CSSPerspective"},
ax:{"^":"k;",$isax:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hs:{"^":"jP;0l:length=",
b1:function(a,b){var z=this.dk(a,this.aI(a,b))
return z==null?"":z},
aI:function(a,b){var z,y
z=$.eY()
y=z[b]
if(typeof y==="string")return y
y=this.dB(a,b)
z[b]=y
return y},
dB:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hA()+b
if(z in a)return z
return b},
dk:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ht:{"^":"d;",
gn:function(a){return this.b1(a,"height")},
gm:function(a){return this.b1(a,"width")}},
cx:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
hu:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mc:{"^":"cx;0l:length=","%":"CSSTransformValue"},
md:{"^":"cx;0l:length=","%":"CSSUnparsedValue"},
mf:{"^":"k;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hB:{"^":"Q;","%":"HTMLDivElement"},
hC:{"^":"v;",
dE:function(a,b){return a.adoptNode(b)},
bv:function(a,b){return a.createEvent(b)},
aY:function(a,b){return a.getElementsByTagName(b)},
cH:function(a,b){return a.getElementById(b)},
e5:function(a,b){return a.querySelector(b)},
gcd:function(a){return new W.bL(a,"mousedown",!1,[W.W])},
gax:function(a){return new W.bL(a,"mousemove",!1,[W.W])},
gce:function(a){return new W.bL(a,"mouseup",!1,[W.W])},
gcf:function(a){return new W.bL(a,H.w(W.dB(a)),!1,[W.aY])},
"%":"XMLDocument;Document"},
mg:{"^":"k;",
k:function(a){return String(a)},
"%":"DOMException"},
hD:{"^":"k;",
dS:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
mh:{"^":"jT;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.t(c,"$isa_",[P.H],"$asa_")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a_,P.H]]},
$isy:1,
$asy:function(){return[[P.a_,P.H]]},
$asq:function(){return[[P.a_,P.H]]},
$ism:1,
$asm:function(){return[[P.a_,P.H]]},
$isa:1,
$asa:function(){return[[P.a_,P.H]]},
$asu:function(){return[[P.a_,P.H]]},
"%":"ClientRectList|DOMRectList"},
hE:{"^":"k;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gm(a))+" x "+H.h(this.gn(a))},
G:function(a,b){var z
if(b==null)return!1
if(!H.b1(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.eh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa_:1,
$asa_:function(){return[P.H]},
"%":";DOMRectReadOnly"},
mi:{"^":"jV;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.w(c)
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.i]},
$isy:1,
$asy:function(){return[P.i]},
$asq:function(){return[P.i]},
$ism:1,
$asm:function(){return[P.i]},
$isa:1,
$asa:function(){return[P.i]},
$asu:function(){return[P.i]},
"%":"DOMStringList"},
mj:{"^":"k;0l:length=","%":"DOMTokenList"},
U:{"^":"v;0ea:tagName=",
gdH:function(a){return new W.jW(a)},
k:function(a){return a.localName},
U:["aC",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dA
if(z==null){z=H.c([],[W.aj])
y=new W.dR(z)
C.a.h(z,W.ef(null))
C.a.h(z,W.eq())
$.dA=y
d=y}else d=z
z=$.dz
if(z==null){z=new W.et(d)
$.dz=z
c=z}else{z.a=d
c=z}}if($.ao==null){z=document
y=z.implementation
y=(y&&C.I).dS(y,"")
$.ao=y
$.cy=y.createRange()
y=$.ao
y.toString
y=y.createElement("base")
H.j(y,"$isdm")
y.href=z.baseURI
z=$.ao.head;(z&&C.J).N(z,y)}z=$.ao
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.j(y,"$isc_")}z=$.ao
if(!!this.$isc_)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ao.body;(z&&C.q).N(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.cy;(z&&C.B).cI(z,x)
z=$.cy
w=(z&&C.B).dQ(z,b)}else{x.innerHTML=b
w=$.ao.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.N(w,y)}z=$.ao.body
if(x==null?z!=null:x!==z)J.df(x)
c.b6(w)
C.j.dE(document,w)
return w},function(a,b,c){return this.U(a,b,c,null)},"dR",null,null,"gej",5,5,null],
cK:function(a,b,c,d){a.textContent=null
this.N(a,this.U(a,b,c,d))},
b7:function(a,b){return this.cK(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dr:function(a,b){return a.removeAttribute(b)},
gcb:function(a){return new W.as(a,"change",!1,[W.R])},
gcc:function(a){return new W.as(a,"input",!1,[W.R])},
gcd:function(a){return new W.as(a,"mousedown",!1,[W.W])},
gax:function(a){return new W.as(a,"mousemove",!1,[W.W])},
gce:function(a){return new W.as(a,"mouseup",!1,[W.W])},
gcf:function(a){return new W.as(a,H.w(W.dB(a)),!1,[W.aY])},
$isU:1,
"%":";Element"},
hJ:{"^":"p:20;",
$1:function(a){return!!J.C(H.j(a,"$isv")).$isU}},
mk:{"^":"Q;0n:height=,0m:width=","%":"HTMLEmbedElement"},
R:{"^":"k;",
gcj:function(a){return W.cN(a.target)},
dl:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isR:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"k;",
dD:function(a,b,c,d){H.n(c,{func:1,args:[W.R]})
if(c!=null)this.dd(a,b,c,!1)},
dd:function(a,b,c,d){return a.addEventListener(b,H.bo(H.n(c,{func:1,args:[W.R]}),1),!1)},
c1:function(a,b){return a.dispatchEvent(b)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;en|eo|er|es"},
ay:{"^":"hh;",$isay:1,"%":"File"},
mC:{"^":"k1;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isay")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asq:function(){return[W.ay]},
$ism:1,
$asm:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asu:function(){return[W.ay]},
"%":"FileList"},
mD:{"^":"P;0l:length=","%":"FileWriter"},
mG:{"^":"Q;0l:length=","%":"HTMLFormElement"},
az:{"^":"k;",$isaz:1,"%":"Gamepad"},
hT:{"^":"Q;","%":"HTMLHeadElement"},
mH:{"^":"k;0l:length=","%":"History"},
mI:{"^":"kf;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isv")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hU:{"^":"hC;","%":"HTMLDocument"},
mJ:{"^":"Q;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mM:{"^":"k;0n:height=,0m:width=","%":"ImageBitmap"},
mN:{"^":"k;0n:height=,0m:width=","%":"ImageData"},
mO:{"^":"Q;0n:height=,0m:width=","%":"HTMLImageElement"},
cz:{"^":"Q;0n:height=,0m:width=",$iscz:1,"%":"HTMLInputElement"},
ba:{"^":"e7;",$isba:1,"%":"KeyboardEvent"},
ig:{"^":"k;",
k:function(a){return String(a)},
$isig:1,
"%":"Location"},
im:{"^":"Q;","%":"HTMLAudioElement;HTMLMediaElement"},
mW:{"^":"k;0l:length=","%":"MediaList"},
mX:{"^":"km;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.ip(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ip:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mY:{"^":"kn;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.iq(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iq:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aB:{"^":"k;",$isaB:1,"%":"MimeType"},
mZ:{"^":"kp;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaB")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.aB]},
"%":"MimeTypeArray"},
W:{"^":"e7;",
gca:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.be(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.C(W.cN(z)).$isU)throw H.e(P.A("offsetX is only supported on elements"))
y=H.j(W.cN(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.be(u,v,w),"$isbe",w,"$asbe")
if(typeof z!=="number")return z.bb()
if(typeof x!=="number")return x.bb()
return new P.be(C.t.co(z-u),C.t.co(x-v),w)}},
$isW:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"ie;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.cJ("No elements"))
if(y>1)throw H.e(P.cJ("More than one element"))
return z.firstChild},
J:function(a,b){var z,y,x,w,v
H.t(b,"$ism",[W.v],"$asm")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.l(y),v=0;v<x;++v)w.N(y,z.firstChild)
return},
j:function(a,b,c){var z,y
H.j(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.fu(z,c,y[b])},
gC:function(a){var z=this.a.childNodes
return new W.dD(z,z.length,-1,[H.b2(C.V,z,"u",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asq:function(){return[W.v]},
$asm:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"P;0e4:previousSibling=",
e6:function(a){var z=a.parentNode
if(z!=null)J.bV(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cO(a):z},
N:function(a,b){return a.appendChild(b)},
ds:function(a,b){return a.removeChild(b)},
dt:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iA:{"^":"kr;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isv")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
n7:{"^":"Q;0n:height=,0m:width=","%":"HTMLObjectElement"},
n9:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
na:{"^":"k;0n:height=,0m:width=","%":"PaintSize"},
aE:{"^":"k;0l:length=",$isaE:1,"%":"Plugin"},
nc:{"^":"kv;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaE")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.aE]},
"%":"PluginArray"},
ne:{"^":"W;0n:height=,0m:width=","%":"PointerEvent"},
iW:{"^":"k;",
dQ:function(a,b){return a.createContextualFragment(b)},
cI:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nj:{"^":"kB;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.j2(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j2:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nk:{"^":"k;0n:height=,0m:width=","%":"Screen"},
nl:{"^":"Q;0l:length=","%":"HTMLSelectElement"},
aG:{"^":"P;",$isaG:1,"%":"SourceBuffer"},
nn:{"^":"eo;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaG")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.aG]},
"%":"SourceBufferList"},
aH:{"^":"k;",$isaH:1,"%":"SpeechGrammar"},
no:{"^":"kH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaH")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.aH]},
"%":"SpeechGrammarList"},
aI:{"^":"k;0l:length=",$isaI:1,"%":"SpeechRecognitionResult"},
nr:{"^":"kK;",
i:function(a,b){return this.by(a,H.w(b))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=this.dn(a,z)
if(y==null)return
b.$2(y,this.by(a,y))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.ji(z))
return z},
gl:function(a){return a.length},
by:function(a,b){return a.getItem(b)},
dn:function(a,b){return a.key(b)},
$asZ:function(){return[P.i,P.i]},
$isO:1,
$asO:function(){return[P.i,P.i]},
"%":"Storage"},
ji:{"^":"p:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aK:{"^":"k;",$isaK:1,"%":"CSSStyleSheet|StyleSheet"},
jn:{"^":"Q;",
U:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
z=W.hI("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).J(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
nv:{"^":"Q;",
U:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.U(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga2(z)
x.toString
z=new W.ab(x)
w=z.ga2(z)
y.toString
w.toString
new W.ab(y).J(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
nw:{"^":"Q;",
U:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.U(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga2(z)
y.toString
x.toString
new W.ab(y).J(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
e0:{"^":"Q;",$ise0:1,"%":"HTMLTemplateElement"},
nx:{"^":"k;0m:width=","%":"TextMetrics"},
aL:{"^":"P;",$isaL:1,"%":"TextTrack"},
aM:{"^":"P;",$isaM:1,"%":"TextTrackCue|VTTCue"},
ny:{"^":"kS;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaM")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aM]},
$isy:1,
$asy:function(){return[W.aM]},
$asq:function(){return[W.aM]},
$ism:1,
$asm:function(){return[W.aM]},
$isa:1,
$asa:function(){return[W.aM]},
$asu:function(){return[W.aM]},
"%":"TextTrackCueList"},
nz:{"^":"es;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaL")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aL]},
$isy:1,
$asy:function(){return[W.aL]},
$asq:function(){return[W.aL]},
$ism:1,
$asm:function(){return[W.aL]},
$isa:1,
$asa:function(){return[W.aL]},
$asu:function(){return[W.aL]},
"%":"TextTrackList"},
nC:{"^":"k;0l:length=","%":"TimeRanges"},
aN:{"^":"k;",$isaN:1,"%":"Touch"},
nD:{"^":"kX;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaN")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aN]},
$isy:1,
$asy:function(){return[W.aN]},
$asq:function(){return[W.aN]},
$ism:1,
$asm:function(){return[W.aN]},
$isa:1,
$asa:function(){return[W.aN]},
$asu:function(){return[W.aN]},
"%":"TouchList"},
nE:{"^":"k;0l:length=","%":"TrackDefaultList"},
e7:{"^":"R;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nS:{"^":"k;",
k:function(a){return String(a)},
"%":"URL"},
nV:{"^":"im;0n:height=,0m:width=","%":"HTMLVideoElement"},
nW:{"^":"P;0l:length=","%":"VideoTrackList"},
nX:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
nY:{"^":"k;0m:width=","%":"VTTRegion"},
aY:{"^":"W;",
gdU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.A("deltaY is not supported"))},
$isaY:1,
"%":"WheelEvent"},
jE:{"^":"P;",
gdG:function(a){var z,y,x
z=P.H
y=new P.al(0,$.L,[z])
x=H.n(new W.jF(new P.kO(y,[z])),{func:1,ret:-1,args:[P.H]})
this.di(a)
this.du(a,W.ez(x,z))
return y},
du:function(a,b){return a.requestAnimationFrame(H.bo(H.n(b,{func:1,ret:-1,args:[P.H]}),1))},
di:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isea:1,
"%":"DOMWindow|Window"},
jF:{"^":"p:22;a",
$1:function(a){var z=this.a
a=H.cg(H.cX(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a1(P.cJ("Future already completed"))
z.aJ(a)}},
ec:{"^":"v;",$isec:1,"%":"Attr"},
o3:{"^":"l2;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isax")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.ax]},
"%":"CSSRuleList"},
o5:{"^":"hE;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
G:function(a,b){var z
if(b==null)return!1
if(!H.b1(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.eh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o6:{"^":"l4;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaz")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asq:function(){return[W.az]},
$ism:1,
$asm:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asu:function(){return[W.az]},
"%":"GamepadList"},
ob:{"^":"l6;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isv")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
$asu:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oc:{"^":"l8;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaI")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aI]},
$isy:1,
$asy:function(){return[W.aI]},
$asq:function(){return[W.aI]},
$ism:1,
$asm:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$asu:function(){return[W.aI]},
"%":"SpeechRecognitionResultList"},
od:{"^":"la;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaK")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aK]},
$isy:1,
$asy:function(){return[W.aK]},
$asq:function(){return[W.aK]},
$ism:1,
$asm:function(){return[W.aK]},
$isa:1,
$asa:function(){return[W.aK]},
$asu:function(){return[W.aK]},
"%":"StyleSheetList"},
jM:{"^":"dM;dh:a<",
H:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.gL(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.D)(z),++v){u=z[v]
b.$2(u,w.a5(x,u))}},
gL:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.j(z[w],"$isec")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asZ:function(){return[P.i,P.i]},
$asO:function(){return[P.i,P.i]}},
jW:{"^":"jM;a",
i:function(a,b){return J.cs(this.a,H.w(b))},
gl:function(a){return this.gL(this).length}},
bL:{"^":"jj;a,b,c,$ti"},
as:{"^":"bL;a,b,c,$ti"},
jY:{"^":"jk;a,b,c,d,e,$ti",p:{
ac:function(a,b,c,d,e){var z=W.ez(new W.jZ(c),W.R)
if(z!=null&&!0)J.fv(a,b,z,!1)
return new W.jY(0,a,b,z,!1,[e])}}},
jZ:{"^":"p:23;a",
$1:function(a){return this.a.$1(H.j(a,"$isR"))}},
bM:{"^":"d;a",
d8:function(a){var z,y
z=$.d2()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.S[y],W.lw())
for(y=0;y<12;++y)z.j(0,C.v[y],W.lx())}},
a4:function(a){return $.ff().A(0,W.b8(a))},
a_:function(a,b,c){var z,y,x
z=W.b8(a)
y=$.d2()
x=y.i(0,H.h(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.ce(x.$4(a,b,c,this))},
$isaj:1,
p:{
ef:function(a){var z,y
z=document.createElement("a")
y=new W.kC(z,window.location)
y=new W.bM(y)
y.d8(a)
return y},
o9:[function(a,b,c,d){H.j(a,"$isU")
H.w(b)
H.w(c)
H.j(d,"$isbM")
return!0},"$4","lw",16,0,14],
oa:[function(a,b,c,d){var z,y,x
H.j(a,"$isU")
H.w(b)
H.w(c)
z=H.j(d,"$isbM").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lx",16,0,14]}},
u:{"^":"d;$ti",
gC:function(a){return new W.dD(a,this.gl(a),-1,[H.b2(this,a,"u",0)])}},
dR:{"^":"d;a",
a4:function(a){return C.a.bG(this.a,new W.iC(a))},
a_:function(a,b,c){return C.a.bG(this.a,new W.iB(a,b,c))},
$isaj:1},
iC:{"^":"p:9;a",
$1:function(a){return H.j(a,"$isaj").a4(this.a)}},
iB:{"^":"p:9;a,b,c",
$1:function(a){return H.j(a,"$isaj").a_(this.a,this.b,this.c)}},
kD:{"^":"d;",
d9:function(a,b,c,d){var z,y,x
this.a.J(0,c)
z=b.aX(0,new W.kE())
y=b.aX(0,new W.kF())
this.b.J(0,z)
x=this.c
x.J(0,C.U)
x.J(0,y)},
a4:function(a){return this.a.A(0,W.b8(a))},
a_:["cR",function(a,b,c){var z,y
z=W.b8(a)
y=this.c
if(y.A(0,H.h(z)+"::"+b))return this.d.dF(c)
else if(y.A(0,"*::"+b))return this.d.dF(c)
else{y=this.b
if(y.A(0,H.h(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.h(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isaj:1},
kE:{"^":"p:10;",
$1:function(a){return!C.a.A(C.v,H.w(a))}},
kF:{"^":"p:10;",
$1:function(a){return C.a.A(C.v,H.w(a))}},
kP:{"^":"kD;e,a,b,c,d",
a_:function(a,b,c){if(this.cR(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cs(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
eq:function(){var z,y,x,w,v
z=P.i
y=P.cF(C.u,z)
x=H.o(C.u,0)
w=H.n(new W.kQ(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kP(y,P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),null)
y.d9(null,new H.ik(C.u,w,[x,z]),v,null)
return y}}},
kQ:{"^":"p:24;",
$1:function(a){return"TEMPLATE::"+H.h(H.w(a))}},
kN:{"^":"d;",
a4:function(a){var z=J.C(a)
if(!!z.$isdV)return!1
z=!!z.$isK
if(z&&W.b8(a)==="foreignObject")return!1
if(z)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.h.aB(b,"on"))return!1
return this.a4(a)},
$isaj:1},
dD:{"^":"d;a,b,c,0d,$ti",
sbw:function(a){this.d=H.z(a,H.o(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbw(J.bt(this.a,z))
this.c=z
return!0}this.sbw(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isaA:1},
jQ:{"^":"d;a",$isP:1,$isea:1,p:{
jR:function(a){if(a===window)return H.j(a,"$isea")
else return new W.jQ(a)}}},
aj:{"^":"d;"},
kC:{"^":"d;a,b",$isnR:1},
et:{"^":"d;a",
b6:function(a){new W.l_(this).$2(a,null)},
ac:function(a,b){if(b==null)J.df(a)
else J.bV(b,a)},
dz:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fQ(a)
x=J.cs(y.gdh(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ad(t)}v="element unprintable"
try{v=J.bu(a)}catch(t){H.ad(t)}try{u=W.b8(a)
this.dw(H.j(a,"$isU"),b,z,v,u,H.j(y,"$isO"),H.w(x))}catch(t){if(H.ad(t) instanceof P.aT)throw t
else{this.ac(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dw:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.ac(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a4(a)){this.ac(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.ac(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gL(f)
y=H.c(z.slice(0),[H.o(z,0)])
for(x=f.gL(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.a_(a,J.h2(v),w.a5(z,v))){window
u="Removing disallowed attribute <"+H.h(e)+" "+v+'="'+H.h(w.a5(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a5(z,v)
w.dr(z,v)}}if(!!J.C(a).$ise0)this.b6(a.content)},
$isn5:1},
l_:{"^":"p:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dz(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ac(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fR(z)}catch(w){H.ad(w)
v=H.j(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bV(u,v)}else J.bV(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.j(y,"$isv")}}},
jP:{"^":"k+ht;"},
jS:{"^":"k+q;"},
jT:{"^":"jS+u;"},
jU:{"^":"k+q;"},
jV:{"^":"jU+u;"},
k0:{"^":"k+q;"},
k1:{"^":"k0+u;"},
ke:{"^":"k+q;"},
kf:{"^":"ke+u;"},
km:{"^":"k+Z;"},
kn:{"^":"k+Z;"},
ko:{"^":"k+q;"},
kp:{"^":"ko+u;"},
kq:{"^":"k+q;"},
kr:{"^":"kq+u;"},
ku:{"^":"k+q;"},
kv:{"^":"ku+u;"},
kB:{"^":"k+Z;"},
en:{"^":"P+q;"},
eo:{"^":"en+u;"},
kG:{"^":"k+q;"},
kH:{"^":"kG+u;"},
kK:{"^":"k+Z;"},
kR:{"^":"k+q;"},
kS:{"^":"kR+u;"},
er:{"^":"P+q;"},
es:{"^":"er+u;"},
kW:{"^":"k+q;"},
kX:{"^":"kW+u;"},
l1:{"^":"k+q;"},
l2:{"^":"l1+u;"},
l3:{"^":"k+q;"},
l4:{"^":"l3+u;"},
l5:{"^":"k+q;"},
l6:{"^":"l5+u;"},
l7:{"^":"k+q;"},
l8:{"^":"l7+u;"},
l9:{"^":"k+q;"},
la:{"^":"l9+u;"}}],["","",,P,{"^":"",
a4:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.w(y[w])
z.j(0,v,a[v])}return z},
lm:function(a,b){var z={}
a.H(0,new P.ln(z))
return z},
dw:function(){var z=$.dv
if(z==null){z=J.co(window.navigator.userAgent,"Opera",0)
$.dv=z}return z},
hA:function(){var z,y
z=$.ds
if(z!=null)return z
y=$.dt
if(y==null){y=J.co(window.navigator.userAgent,"Firefox",0)
$.dt=y}if(y)z="-moz-"
else{y=$.du
if(y==null){y=!P.dw()&&J.co(window.navigator.userAgent,"Trident/",0)
$.du=y}if(y)z="-ms-"
else z=P.dw()?"-o-":"-webkit-"}$.ds=z
return z},
ln:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",iF:{"^":"j1;",$isiF:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},j1:{"^":"P;","%":";IDBRequest"},nU:{"^":"R;0cj:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lT:function(a){return Math.sqrt(a)},
eg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
be:{"^":"d;M:a>,K:b>,$ti",
k:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
G:function(a,b){if(b==null)return!1
return H.b1(b,"$isbe",[P.H],null)&&this.a==J.bZ(b)&&this.b==b.gK(b)},
gB:function(a){var z,y,x
z=J.aw(this.a)
y=J.aw(this.b)
y=P.eg(P.eg(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kw:{"^":"d;"},
a_:{"^":"kw;$ti"}}],["","",,P,{"^":"",hd:{"^":"k;",$ishd:1,"%":"SVGAnimatedLength"},mm:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},mn:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},mo:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},mp:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},mq:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},mr:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},ms:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},mt:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},mu:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},mv:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},mw:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},mx:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},my:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},mz:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},mA:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},mB:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mE:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},mF:{"^":"bD;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hR:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mP:{"^":"bD;0n:height=,0m:width=","%":"SVGImageElement"},bb:{"^":"k;",$isbb:1,"%":"SVGLength"},mU:{"^":"kh;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.j(c,"$isbb")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bb]},
$ism:1,
$asm:function(){return[P.bb]},
$isa:1,
$asa:function(){return[P.bb]},
$asu:function(){return[P.bb]},
"%":"SVGLengthList"},mV:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},bd:{"^":"k;",$isbd:1,"%":"SVGNumber"},n6:{"^":"kt;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.j(c,"$isbd")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bd]},
$ism:1,
$asm:function(){return[P.bd]},
$isa:1,
$asa:function(){return[P.bd]},
$asu:function(){return[P.bd]},
"%":"SVGNumberList"},nb:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},nd:{"^":"k;0l:length=","%":"SVGPointList"},nf:{"^":"k;0n:height=,0m:width=","%":"SVGRect"},ng:{"^":"hR;0n:height=,0m:width=","%":"SVGRectElement"},dV:{"^":"K;",$isdV:1,"%":"SVGScriptElement"},ns:{"^":"kM;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.w(c)
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.i]},
$ism:1,
$asm:function(){return[P.i]},
$isa:1,
$asa:function(){return[P.i]},
$asu:function(){return[P.i]},
"%":"SVGStringList"},K:{"^":"U;",
U:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aj])
C.a.h(z,W.ef(null))
C.a.h(z,W.eq())
C.a.h(z,new W.kN())
c=new W.et(new W.dR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dR(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.ga2(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.N(v,x)
return v},
gcb:function(a){return new W.as(a,"change",!1,[W.R])},
gcc:function(a){return new W.as(a,"input",!1,[W.R])},
gax:function(a){return new W.as(a,"mousemove",!1,[W.W])},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nt:{"^":"bD;0n:height=,0m:width=","%":"SVGSVGElement"},bi:{"^":"k;",$isbi:1,"%":"SVGTransform"},nF:{"^":"kZ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.j(c,"$isbi")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bi]},
$ism:1,
$asm:function(){return[P.bi]},
$isa:1,
$asa:function(){return[P.bi]},
$asu:function(){return[P.bi]},
"%":"SVGTransformList"},nT:{"^":"bD;0n:height=,0m:width=","%":"SVGUseElement"},kg:{"^":"k+q;"},kh:{"^":"kg+u;"},ks:{"^":"k+q;"},kt:{"^":"ks+u;"},kL:{"^":"k+q;"},kM:{"^":"kL+u;"},kY:{"^":"k+q;"},kZ:{"^":"kY+u;"}}],["","",,P,{"^":"",aq:{"^":"d;",$ism:1,
$asm:function(){return[P.a5]},
$isa:1,
$asa:function(){return[P.a5]},
$isjt:1}}],["","",,P,{"^":"",lZ:{"^":"k;0l:length=","%":"AudioBuffer"},m_:{"^":"jN;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new P.hf(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"AudioParamMap"},hf:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},m0:{"^":"P;0l:length=","%":"AudioTrackList"},hg:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n8:{"^":"hg;0l:length=","%":"OfflineAudioContext"},jN:{"^":"k+Z;"}}],["","",,P,{"^":"",hi:{"^":"k;",$ishi:1,"%":"WebGLBuffer"},hQ:{"^":"k;",$ishQ:1,"%":"WebGLFramebuffer"},iU:{"^":"k;",$isiU:1,"%":"WebGLProgram"},nh:{"^":"k;",
bF:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindFramebuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b){return a.checkFramebufferStatus(b)},
bQ:function(a,b){return a.clear(b)},
bR:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bT:function(a,b){return a.compileShader(b)},
bU:function(a){return a.createBuffer()},
bV:function(a){return a.createFramebuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bY:function(a){return a.createTexture()},
c_:function(a,b){return a.depthMask(b)},
c0:function(a,b){return a.disable(b)},
c2:function(a,b,c,d){return a.drawArrays(b,c,d)},
c3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c4:function(a,b){return a.enable(b)},
c5:function(a,b){return a.enableVertexAttribArray(b)},
c8:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay:function(a){return P.a4(a.getContextAttributes())},
aZ:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c9:function(a,b){return a.linkProgram(b)},
b9:function(a,b,c){return a.shaderSource(b,c)},
ba:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ck:function(a,b,c,d){return a.texParameterf(b,c,d)},
cl:function(a,b,c,d){return a.texParameteri(b,c,d)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c){return a.uniform1fv(b,c)},
cr:function(a,b,c){return a.uniform1i(b,c)},
cs:function(a,b,c){return a.uniform1iv(b,c)},
ct:function(a,b,c){return a.uniform2fv(b,c)},
cu:function(a,b,c){return a.uniform3fv(b,c)},
cv:function(a,b,c){return a.uniform4fv(b,c)},
cw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cA:function(a,b){return a.useProgram(b)},
cB:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cD:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},ni:{"^":"k;",
dI:function(a,b){return a.beginTransformFeedback(b)},
dL:function(a,b){return a.bindVertexArray(b)},
dT:function(a){return a.createVertexArray()},
dV:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dW:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dX:function(a){return a.endTransformFeedback()},
eb:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
ee:function(a,b,c,d){this.dC(a,b,H.t(c,"$isa",[P.i],"$asa"),d)
return},
dC:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eh:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bF:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindFramebuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b){return a.checkFramebufferStatus(b)},
bQ:function(a,b){return a.clear(b)},
bR:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bT:function(a,b){return a.compileShader(b)},
bU:function(a){return a.createBuffer()},
bV:function(a){return a.createFramebuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bY:function(a){return a.createTexture()},
c_:function(a,b){return a.depthMask(b)},
c0:function(a,b){return a.disable(b)},
c2:function(a,b,c,d){return a.drawArrays(b,c,d)},
c3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c4:function(a,b){return a.enable(b)},
c5:function(a,b){return a.enableVertexAttribArray(b)},
c8:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay:function(a){return P.a4(a.getContextAttributes())},
aZ:function(a){return a.getError()},
b_:function(a,b){return a.getProgramInfoLog(b)},
b0:function(a,b,c){return a.getProgramParameter(b,c)},
b2:function(a,b){return a.getShaderInfoLog(b)},
b3:function(a,b,c){return a.getShaderParameter(b,c)},
b4:function(a,b,c){return a.getUniformLocation(b,c)},
c9:function(a,b){return a.linkProgram(b)},
b9:function(a,b,c){return a.shaderSource(b,c)},
ba:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ck:function(a,b,c,d){return a.texParameterf(b,c,d)},
cl:function(a,b,c,d){return a.texParameteri(b,c,d)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c){return a.uniform1fv(b,c)},
cr:function(a,b,c){return a.uniform1i(b,c)},
cs:function(a,b,c){return a.uniform1iv(b,c)},
ct:function(a,b,c){return a.uniform2fv(b,c)},
cu:function(a,b,c){return a.uniform3fv(b,c)},
cv:function(a,b,c){return a.uniform4fv(b,c)},
cw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cA:function(a,b){return a.useProgram(b)},
cB:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cD:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},j7:{"^":"k;",$isj7:1,"%":"WebGLShader"},jo:{"^":"k;",$isjo:1,"%":"WebGLTexture"},jv:{"^":"k;",$isjv:1,"%":"WebGLUniformLocation"},jC:{"^":"k;",$isjC:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",np:{"^":"kJ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return P.a4(this.dm(a,b))},
j:function(a,b,c){H.j(c,"$isO")
throw H.e(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
dm:function(a,b){return a.item(b)},
$asq:function(){return[[P.O,,,]]},
$ism:1,
$asm:function(){return[[P.O,,,]]},
$isa:1,
$asa:function(){return[[P.O,,,]]},
$asu:function(){return[[P.O,,,]]},
"%":"SQLResultSetRowList"},kI:{"^":"k+q;"},kJ:{"^":"kI+u;"}}],["","",,G,{"^":"",
jG:function(a){var z,y,x,w
z=H.c(a.split("\n"),[P.i])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.j(z,y,w+H.h(z[y]))}return C.a.ag(z,"\n")},
ed:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bX(a,b)
z.b9(a,y,c)
z.bT(a,y)
x=H.ce(z.b3(a,y,35713))
if(x!=null&&!x){w=z.b2(a,y)
P.a6("E:Compilation failed:")
P.a6("E:"+G.jG(c))
P.a6("E:Failure:")
P.a6(C.h.I("E:",w))
throw H.e(w)}return y},
iD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.t(b)
d.a6(0,a)
e.t(c)
e.a6(0,a)
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
r=Math.sqrt(e.gah())
if(r===0)return!1
e.O(0,-1/r)
return!0},
bz:function(a,b){var z,y,x
H.t(a,"$isa",[T.b],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.j(b,z,J.bZ(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.j(b,z+1,J.cr(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.dd(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
hN:function(a,b){var z,y
H.t(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.j(b,z,J.bZ(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.j(b,z+1,J.cr(a[y]))}return b},
hO:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.aX],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.j(b,z,J.bZ(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.j(b,z+1,J.cr(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.dd(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.fT(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
hM:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.j(b,z,J.bt(a[y],0))
if(y>=a.length)return H.f(a,y)
C.o.j(b,z+1,J.bt(a[y],1))
if(y>=a.length)return H.f(a,y)
C.o.j(b,z+2,J.bt(a[y],2))
if(y>=a.length)return H.f(a,y)
C.o.j(b,z+3,J.bt(a[y],3))}return b},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ah(z,[H.o(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.B]],v=[P.a5],u=[T.aX],t=[T.b],s=[T.r];y.v();){r=y.d
if(!x.au(0,r)){r="Dropping unnecessary attribute: "+H.h(r)
if($.eG>0)H.bS("I: "+r)
continue}q=z.i(0,r)
switch($.ae().i(0,r).a){case"vec2":b.a7(r,G.hN(H.bU(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a7(r,G.bz(H.bU(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a7(r,G.hO(H.bU(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a7(r,new Float32Array(H.ca(H.bU(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a7(r,G.hM(H.bU(q,"$isa",w,"$asa"),null),4)
break}}},
bC:function(a,b,c){var z=G.dP(a,b.d,4,b.e.x)
z.a8(G.bz(c.d,null))
z.be(c.cX())
G.kc(c,z)
return z},
aV:{"^":"d;"},
ar:{"^":"aV;d,a,b,c",
a9:function(a,b){this.d.j(0,a,b)},
aF:function(){return this.d},
k:function(a){var z,y,x,w
z=H.c(["{"+new H.e5(H.lt(this)).k(0)+"}["+this.a+"]"],[P.i])
for(y=this.d,x=new H.ah(y,[H.o(y,0)]),x=x.gC(x);x.v();){w=x.d
C.a.h(z,H.h(w)+": "+H.h(y.i(0,w)))}return C.a.ag(z,"\n")}},
hj:{"^":"dX;"},
hl:{"^":"d;0a,b",
c6:function(a,b,c){J.fN(this.a,b)
if(c>0)J.h9(this.a,b,c)},
cC:function(a,b,c,d,e,f,g,h){J.cm(this.a,34962,b)
J.ha(this.a,c,d,e,!1,g,h)}},
dE:{"^":"d;a,b,c,d,e"},
Y:{"^":"d;as:a>,ad:b>,ae:c>",p:{
N:function(a,b,c){return new G.Y(a,b,c)}}},
ap:{"^":"d;as:a>,ad:b>,ae:c>,d"},
bB:{"^":"d;a,b,c,d,e",
S:function(a){switch($.ae().i(0,a).a){case"vec2":this.e.j(0,a,H.c([],[T.r]))
break
case"vec3":this.e.j(0,a,H.c([],[T.b]))
break
case"vec4":this.e.j(0,a,H.c([],[T.aX]))
break
case"float":this.e.j(0,a,H.c([],[P.a5]))
break
case"uvec4":this.e.j(0,a,H.c([],[[P.a,P.B]]))
break}},
cS:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.h(y,new G.ap(z,z+1,z+2,z+3))},
a8:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.h(y,v)}},
cT:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.h(this.b,new G.Y(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.h(z,v)}},
ak:function(a,b){var z,y,x,w,v,u,t
z=[T.r]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.D)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.h(y,new T.r(u))}},
al:function(a,b){var z,y,x,w,v,u
z=[T.b]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.D)(b),++w){v=b[w]
u=new T.b(new Float32Array(3))
u.t(v)
x.h(y,u)}},
cU:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.h(this.c,new G.ap(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.h(z,v)}},
cX:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.c(x,[P.B])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.D)(z),++u){t=z[u]
C.a.j(w,v,t.a)
C.a.j(w,v+1,t.b)
C.a.j(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.D)(y),++u){s=y[u]
x=s.a
C.a.j(w,v,x)
C.a.j(w,v+1,s.b)
r=s.c
C.a.j(w,v+2,r)
C.a.j(w,v+3,x)
C.a.j(w,v+4,r)
C.a.j(w,v+5,s.d)
v+=6}return w},
cZ:function(a,b){var z,y,x,w,v,u,t
z=H.c([],[T.r])
this.e.j(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.h(z,new T.r(t))}},
cY:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.h(z,new G.ap(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.c(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.i])
for(y=this.e,x=new H.ah(y,[H.o(y,0)]),x=x.gC(x);x.v();){w=x.d
v=$.ae().i(0,w).a
C.a.h(z,H.h(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.ag(z," ")}},
bc:{"^":"aV;",
aG:function(a,b,c,d){this.e.t(c)
this.f.t(d)}},
bI:{"^":"bc;z,Q,d,e,f,a,b,c",
aD:function(a,b){var z,y,x,w
z=this.z.a
y=z[0]
x=a.length
if(b>=x)return H.f(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+8
w=this.e.a
y=w[0]
if(z>=x)return H.f(a,z)
a[z]=y
y=b+9
z=w[1]
if(y>=x)return H.f(a,y)
a[y]=z
z=b+10
w=w[2]
if(z>=x)return H.f(a,z)
a[z]=w
w=b+12
z=this.f.a
y=z[0]
if(w>=x)return H.f(a,w)
a[w]=y
y=b+13
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+14
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+7
if(z>=x)return H.f(a,z)
a[z]=this.Q},
aE:function(){return new T.J(new Float32Array(16))},
k:function(a){return"PL: p:"+H.h(this.z)+"  r:"+this.Q}},
bx:{"^":"bc;z,Q,ch,cx,d,e,f,a,b,c",
aD:function(a,b){var z,y,x,w
z=b+4
y=this.z.a
x=y[0]
w=a.length
if(z>=w)return H.f(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.f(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.f(a,z)
a[z]=y
y=b+8
z=this.e.a
x=z[0]
if(y>=w)return H.f(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.f(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.f(a,y)
a[y]=z
z=b+12
y=this.f.a
x=y[0]
if(z>=w)return H.f(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.f(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.f(a,z)
a[z]=y},
aE:function(){var z,y,x,w,v,u,t
z=this.ch
y=this.Q
x=-y
w=y-x
z.b8()
v=2/w
u=z.a
u[0]=v
u[5]=v
u[10]=-2/w
x=-(y+x)/w
u[12]=x
u[13]=x
u[14]=x
u[15]=1
y=this.z
x=y.a
t=x[0]===0&&x[2]===0?$.d4():$.d3()
x=this.cx
T.cZ(x,new T.b(new Float32Array(3)),y,t)
z.aw(0,x)
return z},
k:function(a){return"DL: p:"+H.h(this.z)}},
aJ:{"^":"bc;z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,e,f,a,b,c",
aD:function(a,b){var z,y,x,w
z=this.z.a
y=z[0]
x=a.length
if(b>=x)return H.f(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+4
w=this.Q.a
y=w[0]
if(z>=x)return H.f(a,z)
a[z]=y
y=b+5
z=w[1]
if(y>=x)return H.f(a,y)
a[y]=z
z=b+6
w=w[2]
if(z>=x)return H.f(a,z)
a[z]=w
w=b+8
z=this.e.a
y=z[0]
if(w>=x)return H.f(a,w)
a[w]=y
y=b+9
w=z[1]
if(y>=x)return H.f(a,y)
a[y]=w
w=b+10
z=z[2]
if(w>=x)return H.f(a,w)
a[w]=z
z=b+12
w=this.f.a
y=w[0]
if(z>=x)return H.f(a,z)
a[z]=y
y=b+13
z=w[1]
if(y>=x)return H.f(a,y)
a[y]=z
z=b+14
w=w[2]
if(z>=x)return H.f(a,z)
a[z]=w
w=b+7
if(w>=x)return H.f(a,w)
a[w]=this.ch
w=b+11
z=Math.cos(H.eD(this.cx))
if(w>=x)return H.f(a,w)
a[w]=z
z=b+15
if(z>=x)return H.f(a,z)
a[z]=this.cy},
aE:function(){var z,y,x,w
z=this.Q
y=z.a
x=y[0]===0&&y[2]===0?$.d4():$.d3()
y=this.fr
w=this.z
T.cZ(y,w,z.I(0,w),x)
w=this.fx
z=this.cx
if(typeof z!=="number")return H.au(z)
T.eP(w,2.1*z,this.db,this.dx,this.dy)
w.aw(0,y)
return w},
k:function(a){return"SL: p:"+H.h(this.z)+"  d:"+H.h(this.Q)+"  r:"+this.ch+"  a:"+H.h(this.cx)}},
hW:{"^":"ar;x,y,z,d,a,b,c",
aF:function(){var z,y,x
z=this.y
y=this.z
G.hX(z,y,this.x)
x=this.d
x.j(0,"uLightDescs",z)
x.j(0,"uLightTypes",y)
return x},
p:{
hX:function(a,b,c){var z,y,x,w,v
H.t(c,"$isa",[G.bc],"$asa")
C.b.c7(a,0,a.length,0)
C.b.c7(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.D)(c),++x){w=c[x]
if(w.c){w.aD(a,y*16)
v=w.d
if(y>=4)return H.f(b,y)
b[y]=v;++y}}}}},
e3:{"^":"d;a,b,c"},
e2:{"^":"d;a,b,c"},
il:{"^":"ar;d,a,b,c",p:{
c4:function(a){var z=P.S(P.i,P.d)
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.eR())
z.j(0,"cStencilFunc",$.f1())
return new G.il(z,a,!1,!0)}}},
io:{"^":"aV;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saM:function(a){this.cx=H.t(a,"$isa",[P.B],"$asa")},
bf:function(a,b,c){var z,y
C.h.ab(a,0)
H.j(b,"$isaq")
this.cy.j(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cm(z.a,34962,y)
J.d9(z.a,34962,b,35048)},
ao:function(a){this.ch=a
this.bf("aPosition",a,3)},
bi:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a7:function(a,b,c){var z,y,x,w,v
z=J.d5(a,0)===105
if(z&&this.z===0)this.z=C.d.bd(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.cp(x.a))
this.bf(a,b,c)
w=$.ae().i(0,a)
if(w==null)throw H.e("Unknown canonical "+a)
v=this.x.i(0,a)
J.bW(x.a,this.e)
x.c6(0,v,z?1:0)
x.cC(0,y.i(0,a),v,w.bj(),5126,!1,0,0)},
a8:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.cp(y.a))
this.ao(a)
x=$.ae().i(0,"aPosition")
if(x==null)throw H.e("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bW(y.a,this.e)
y.c6(0,w,0)
y.cC(0,z.i(0,"aPosition"),w,x.bj(),5126,!1,0,0)},
an:function(a){var z,y,x
H.t(a,"$isa",[P.B],"$asa")
z=this.ch.length
if(z<768){this.saM(new Uint8Array(H.ca(a)))
this.Q=5121}else if(z<196608){this.saM(new Uint16Array(H.ca(a)))
this.Q=5123}else{this.saM(new Uint32Array(H.ca(a)))
this.Q=5125}z=this.d
J.bW(z.a,this.e)
y=this.y
x=this.cx
J.cm(z.a,34963,y)
J.d9(z.a,34963,x,35048)},
be:function(a){H.t(a,"$isa",[P.B],"$asa")
this.y=J.cp(this.d.a)
this.an(a)},
k:function(a){var z,y,x,w
z=this.cx
y=H.c(["Faces:"+(z==null?0:z.length)],[P.i])
for(z=this.cy,x=new H.ah(z,[H.o(z,0)]),x=x.gC(x);x.v();){w=x.d
C.a.h(y,H.h(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.ag(y,"  ")},
p:{
dP:function(a,b,c,d){var z=P.i
return new G.io(b,J.fG(b.a),c,P.S(z,P.d),d,0,-1,P.S(z,P.aq),"meshdata:"+a,!1,!0)}}},
iJ:{"^":"ar;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cV:function(a,b){var z
if(typeof b!=="number")return H.au(b)
z=a/b
if(this.z===z)return
this.z=z
this.bl()},
bl:function(){T.eP(this.db,this.y*3.141592653589793/180,this.z,this.Q,this.ch)},
aF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.b(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.t(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.C(t)
x=!!y.$isaX
q=x?t.gcE(t):1
if(!!y.$isb){p=t.gM(t)
s=t.gK(t)
r=t.gR(t)
t=p}else if(x){p=t.gM(t)
s=t.gK(t)
r=t.gR(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.au(t)
x=z[4]
if(typeof s!=="number")return H.au(s)
w=z[8]
if(typeof r!=="number")return H.au(r)
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
c.t(this.db)
c.aw(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
by:{"^":"d;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
j0:{"^":"aV;d,e,f,r,x,y,z,Q,0ch,a,b,c",
d1:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.de(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.de(w.a,v,t))}},
d3:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.c([],[P.i])
x=H.c([],[P.i])
for(y=new H.ah(y,[H.o(y,0)]),y=y.gC(y);y.v();){w=y.d
if(!z.au(0,w))C.a.h(x,w)}for(z=this.x,z=P.kj(z,z.r,H.o(z,0)),y=this.Q;z.v();){w=z.d
if(!y.A(0,w))C.a.h(x,w)}return x},
d6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isO",[P.i,P.d],"$asO")
z=Date.now()
for(y=new H.ah(b,[H.o(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.v();){s=y.d
switch(J.d5(s,0)){case 117:if(w.au(0,s)){r=b.i(0,s)
if(v.au(0,s))H.bS("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.j(0,s,a)
q=$.ae().i(0,s)
if(q==null)H.a1("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.T(r)
J.ct(x.a,p,r)}else if(!!J.C(r).$ishZ)J.h7(x.a,p,r)
break
case"float":if(q.c===0){H.eE(r)
J.h5(x.a,p,r)}else if(!!J.C(r).$isaq)J.h6(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.M(r,"$isJ").a
J.dk(x.a,p,!1,s)}else if(!!J.C(r).$isaq)J.dk(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.M(r,"$isai").a
J.dj(x.a,p,!1,s)}else if(!!J.C(r).$isaq)J.dj(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.di(o,p,H.M(r,"$isaX").a)
else J.di(o,p,H.j(r,"$isaq"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.dh(o,p,H.M(r,"$isb").a)
else J.dh(o,p,H.j(r,"$isaq"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.dg(o,p,H.M(r,"$isr").a)
else J.dg(o,p,H.j(r,"$isaq"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.au(s)
J.d7(x.a,33984+s)
s=H.M(r,"$iscL").b
J.av(x.a,3553,s)
s=this.ch
J.ct(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.au(s)
J.d7(x.a,33984+s)
s=H.M(r,"$iscL").b
J.av(x.a,34067,s)
s=this.ch
J.ct(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.I()
this.ch=s+1
break
default:H.bS("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aS(r,!0)
o=x.a
if(s)J.bX(o,2929)
else J.cq(o,2929)
break
case"cStencilFunc":H.M(r,"$ise3")
s=r.a
o=x.a
if(s===1281)J.cq(o,2960)
else{J.bX(o,2960)
o=r.b
n=r.c
J.h_(x.a,s,o,n)}break
case"cDepthWrite":H.ce(r)
J.fH(x.a,r)
break
case"cBlendEquation":H.M(r,"$ise2")
s=r.a
o=x.a
if(s===1281)J.cq(o,3042)
else{J.bX(o,3042)
o=r.b
n=r.c
J.fy(x.a,o,n)
J.fx(x.a,s)}break}++t
break}}m=P.dx(0,0,0,Date.now()-new P.bv(z,!1).a,0,0)
""+t
m.k(0)},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.t(b,"$isa",[G.ar],"$asa")
H.t(c,"$isa",[G.by],"$asa")
z=Date.now()
y=this.d
J.h8(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bp()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.D)(b),++w){v=b[w]
this.d6(v.a,v.aF())}x=this.Q
x.af(0)
for(u=a.cy,u=new H.ah(u,[H.o(u,0)]),u=u.gC(u);u.v();)x.h(0,u.d)
t=this.d3()
if(t.length!==0)P.a6("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(t)))
J.bW(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.bi()
r=a.Q
q=a.z
if(s)J.fw(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.fL(p,x,u,r,0,q)
else J.fK(p,x,u,r,0)}else{r=y.a
if(q>1)J.fJ(r,x,0,u,q)
else J.fI(r,x,0,u)}if(s)J.fO(y.a)
if(c!=null)C.a.h(c,new G.by(this.a,a.z,a.bi(),x,P.dx(0,0,0,Date.now()-new P.bv(z,!1).a,0,0)))},
p:{
c7:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.i
y=P.a8(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.fE(b.a)
t=G.ed(b.a,35633,x)
J.d8(b.a,u,t)
s=G.ed(b.a,35632,w)
J.d8(b.a,u,s)
if(v.length>0)J.h3(b.a,u,v,35980)
J.fY(b.a,u)
if(!H.ce(J.fX(b.a,u,35714)))H.a1(J.fW(b.a,u))
z=new G.j0(b,c,d,u,P.cF(c.c,z),P.S(z,P.d),P.S(z,z),y,a,!1,!0)
z.d1(a,b,c,d)
return z}}},
E:{"^":"d;a,b,c",
bj:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
j8:{"^":"d;a,0b,c,d,e,f,r,x",
aj:function(a){var z,y,x,w,v
H.t(a,"$isa",[P.i],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.D)(a),++w){v=a[w]
C.a.h(y,v)
x.j(0,v,this.r);++this.r}C.a.aA(y)},
X:function(a){var z,y,x
H.t(a,"$isa",[P.i],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)C.a.h(y,a[x])
C.a.aA(y)},
am:function(a){var z,y,x
H.t(a,"$isa",[P.i],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)C.a.h(y,a[x])
C.a.aA(y)},
bk:function(a,b){var z=[P.i]
this.b=this.d7(!0,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
Y:function(a){return this.bk(a,null)},
d7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.i]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.c(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.D)(y),++u){t=y[u]
s=$.ae().i(0,t)
C.a.h(w,"layout (location="+H.h(v.i(0,t))+") in "+s.a+" "+H.h(t)+";")}C.a.h(w,"")
r=x?"in":"out"
if(x)C.a.h(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.ae().i(0,q)
C.a.h(w,r+" "+s.a+" "+H.h(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.ae().i(0,q)
C.a.h(w,r+" "+s.a+" "+H.h(q)+";")}C.a.h(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.ae().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.h(w,"uniform "+s.a+" "+H.h(q)+p+";")}C.a.h(w,"")
if(c!=null)C.a.J(w,c)
C.a.h(w,"void main(void) {")
C.a.J(w,b)
C.a.h(w,"}")
return C.a.ag(w,"\n")},
p:{
aF:function(a){var z,y
z=P.i
y=[z]
return new G.j8(a,H.c([],y),H.c([],y),H.c([],y),H.c([],y),0,P.S(z,P.B))}}},
dX:{"^":"aV;",
a1:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
jp:{"^":"d;a,b,c,d,e,f,r",p:{
e1:function(){return new G.jp(!1,!1,!1,!0,1,9729,9729)}}},
cL:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ju:{"^":"cL;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"},
p:{
e6:function(a,b,c,d,e,f){var z,y
z=J.fF(a.a)
J.av(a.a,3553,z)
J.h1(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.h0(a.a,3553,34046,y)
y=f.r
J.a7(a.a,3553,10240,y)
y=f.f
J.a7(a.a,3553,10241,y)
if(f.b){J.a7(a.a,3553,10242,33071)
J.a7(a.a,3553,10243,33071)}if(f.c)J.a7(a.a,3553,34892,34894)
J.fV(a.a)
J.av(a.a,3553,null)
return new G.ju(c,d,e,b,z,3553,a,f)}}}}],["","",,R,{"^":"",
dW:function(a,b,c,d,e,f,g,h,i){return G.bC("cube",a,B.hv(!0,c,d,e,f,g,h,i))},
kl:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.j(W.jX("span",null),"$isU")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).aI(y,"float")
y.setProperty(x,"left","")
x=C.x.aI(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.n.N(z,v)}return z},
jz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.r.dY(y/c)
w=-x
v=d.az(y).az(1/z[1])
u=H.c([],[T.b])
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.b(z)
z[0]=t
z[1]=0
z[2]=s
r.h(0,v)
C.a.h(u,r)
z=new Float32Array(3)
r=new T.b(z)
z[0]=t
z[1]=0
z[2]=s
r.a6(0,v)
C.a.h(u,r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
C.a.h(u,new T.b(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
C.a.h(u,new T.b(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
C.a.h(u,new T.b(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
C.a.h(u,new T.b(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
C.a.h(u,new T.b(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
C.a.h(u,new T.b(o))}}a.ao(G.bz(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.c(z,[P.B])
for(q=0;q<u.length;++q)C.a.j(n,q,q)
a.an(n)},
hS:function(a){var z,y,x
z=a.a
y=z[0]
if(y!==0){x=z[1]
if(x!==0){z=new T.b(new Float32Array(3))
z.q(-x,y,0)
return z}z=z[2]
if(z!==0){x=new T.b(new Float32Array(3))
x.q(-z,0,y)
return x}z=new T.b(new Float32Array(3))
z.q(0,1,1)
return z}else{y=z[1]
if(y===0){z=new T.b(new Float32Array(3))
z.q(1,1,0)
return z}z=z[2]
if(z===0){z=new T.b(new Float32Array(3))
z.q(1,0,1)
return z}x=new T.b(new Float32Array(3))
x.q(0,-z,y)
return x}},
jB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.b(new Float32Array(3))
z.t(c)
z.D(0)
y=b.I(0,z.az(d))
x=H.c([b,y],[T.b])
w=R.hS(c)
w.D(0)
w.O(0,Math.tan(H.eD(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.b(z)
u.t(w)
t=new Float32Array(4)
new T.iV(t).cJ(c,v*2*3.141592653589793/8)
s=z[0]
r=z[1]
q=z[2]
p=t[0]
o=t[1]
n=t[2]
m=t[3]
l=m*s+o*q-n*r
k=m*r+n*s-p*q
j=m*q+p*r-o*s
t=-p
i=t*s-o*r-n*q
h=-n
g=-o
z[0]=l*m+i*t+k*h-j*g
z[1]=k*m+i*g+j*t-l*h
z[2]=j*m+i*h+l*g-k*t
u.h(0,y)
C.a.h(x,u)}f=H.c([],[P.B])
for(v=1;v<x.length;++v){C.a.h(f,0)
C.a.h(f,v)}for(v=3;z=x.length,v<z;++v){C.a.h(f,v-1)
C.a.h(f,v)}C.a.h(f,z-1)
C.a.h(f,2)
for(v=2;v<x.length;++v)if(v%2===0){C.a.h(f,1)
C.a.h(f,v)}a.ao(G.bz(x,null))
a.an(f)},
jA:function(a,b,c){var z,y,x,w,v,u,t
z=H.c([],[T.b])
y=H.c([],[P.B])
for(x=$.d_(),w=0;w<12;++w){v=x[w]
C.a.h(y,z.length)
C.a.h(y,12)
u=new T.b(new Float32Array(3))
u.t(v)
u.O(0,c)
b.toString
t=new T.b(new Float32Array(3))
t.t(b)
t.h(0,u)
C.a.h(z,t)}C.a.h(z,b)
a.ao(G.bz(z,null))
a.an(y)},
jg:{"^":"d;",
d2:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.e("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.l(z)
y.N(z,this.b)
y.N(z,this.d)
y.N(z,this.c)}},
jh:{"^":"jg;e,f,a,b,c,d",
d5:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.ed(y,2)+" fps"
C.n.b7(this.c,b)
x=C.d.Z(30*C.r.dM(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.j(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.n.N(z,w)},
d4:function(a){return this.d5(a,"")}},
j9:{"^":"d;a,0b,0c,0d,0e,0f,r,0x,0y"}}],["","",,A,{"^":"",
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(d,"$isa",[G.by],"$asa")
H.t(e,"$isa",[G.ar],"$asa")
if(!b.c)return
z=b.dx
z.t(c)
y=b.d
z.aw(0,y)
x=b.ch
if(x!=null){b.cx
w=!0}else w=!1
if(w){H.h(b)
w=C.a.ge2(e)
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
v.dP(new T.ai(u))
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
w.j(0,"uTransformationMatrix",y)
w.j(0,"uModelMatrix",z)
w.j(0,"uNormalMatrix",v)
C.a.h(e,x)
a.cW(b.cx,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()}for(y=b.cy,r=0;!1;++r){if(r>=0)return H.f(y,r)
A.eF(a,y[r],z,d,e)}},
aD:{"^":"dX;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
bJ:{"^":"aV;d,e,f,a,b,c"},
j_:{"^":"aV;d,e,f,r,x,y,z,Q,a,b,c",
bh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.t(a,"$isa",[G.by],"$asa")
z=this.d
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=z.a
z=z.b
J.cn(t.a,36160,z)
J.hb(t.a,x,w,v,u)
if(y!==0)J.fA(t.a,y)
for(z=this.f,y=z.length,x=P.i,w=P.d,s=0;s<z.length;z.length===y||(0,H.D)(z),++s){r=z[s]
if(!r.c)continue
v=r.d
if(!v.c)continue
q=r.e
C.a.h(q,new G.ar(P.S(x,w),"transforms",!1,!0))
p=new T.J(new Float32Array(16))
p.F()
for(u=r.f,t=u.length,o=0;o<u.length;u.length===t||(0,H.D)(u),++o)A.eF(v,u[o],p,a,q)
if(0>=q.length)return H.f(q,-1)
q.pop()}},
bg:function(){return this.bh(null)},
p:{
cH:function(a,b,c){var z=new A.j_(c,b,H.c([],[A.bJ]),17664,0,0,0,0,a,!1,!0)
if(c==null)z.d=new G.dE(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
hv:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
a0=H.c([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.r(new Float32Array(2))
z.u(a7,a9)
y=new T.r(new Float32Array(2))
y.u(a6,a9)
x=new T.r(new Float32Array(2))
x.u(a6,a8)
w=new T.r(new Float32Array(2))
w.u(a7,a8)
v=new T.r(new Float32Array(2))
v.u(a6,a9)
u=new T.r(new Float32Array(2))
u.u(a6,a8)
s=new T.r(new Float32Array(2))
s.u(a7,a8)
r=new T.r(new Float32Array(2))
r.u(a7,a9)
q=new T.r(new Float32Array(2))
q.u(a7,a8)
p=new T.r(new Float32Array(2))
p.u(a7,a9)
o=new T.r(new Float32Array(2))
o.u(a6,a9)
n=new T.r(new Float32Array(2))
n.u(a6,a8)
m=new T.r(new Float32Array(2))
m.u(a6,a8)
l=new T.r(new Float32Array(2))
l.u(a7,a8)
k=new T.r(new Float32Array(2))
k.u(a7,a9)
j=new T.r(new Float32Array(2))
j.u(a6,a9)
i=new T.r(new Float32Array(2))
i.u(a6,a9)
h=new T.r(new Float32Array(2))
h.u(a6,a8)
g=new T.r(new Float32Array(2))
g.u(a7,a8)
f=new T.r(new Float32Array(2))
f.u(a7,a9)
e=new T.r(new Float32Array(2))
e.u(a7,a9)
d=new T.r(new Float32Array(2))
d.u(a6,a9)
c=new T.r(new Float32Array(2))
c.u(a6,a8)
b=new T.r(new Float32Array(2))
b.u(a7,a8)
a1=H.c([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.r])
a2=new G.bB(!1,H.c([],[G.Y]),H.c([],[G.ap]),H.c([],t),P.S(P.i,[P.a,,]))
a2.S("aTexUV")
a2.S("aNormal")
a2.cS(6)
a2.a8(a0)
a2.ak("aTexUV",a1)
for(a3=0;z=$.fe(),a3<6;++a3){a4=z[a3]
a2.al("aNormal",H.c([a4,a4,a4,a4],t))}return a2},
hx:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=c/2
y=[T.b]
x=H.c([],y)
w=H.c([],[T.r])
v=H.c([],y)
u=new T.b(new Float32Array(3))
u.q(0,z,0)
C.a.h(x,u)
u=new T.r(new Float32Array(2))
u.u(0,0)
C.a.h(w,u)
u=new T.b(new Float32Array(3))
u.q(0,1,0)
C.a.h(v,u)
u=-z
t=new T.b(new Float32Array(3))
t.q(0,u,0)
C.a.h(x,t)
t=new T.r(new Float32Array(2))
t.u(1,1)
C.a.h(w,t)
t=new T.b(new Float32Array(3))
t.q(0,-1,0)
C.a.h(v,t)
for(s=0;s<a0;++s){r=s/a0
t=r*3.141592653589793*2
q=Math.sin(t)
p=Math.cos(t)
t=new Float32Array(3)
t[0]=q*a
t[1]=z
t[2]=p*a
C.a.h(x,new T.b(t))
t=new Float32Array(2)
t[0]=r
t[1]=1
C.a.h(w,new T.r(t))
t=new Float32Array(3)
t[0]=0
t[1]=1
t[2]=0
C.a.h(v,new T.b(t))
t=new Float32Array(3)
t[0]=q*b
t[1]=u
t[2]=p*b
C.a.h(x,new T.b(t))
t=new Float32Array(2)
t[0]=r
t[1]=0
C.a.h(w,new T.r(t))
t=new Float32Array(3)
t[0]=0
t[1]=-1
t[2]=0
C.a.h(v,new T.b(t))}for(u=2*a0,s=0;s<u;s=o){o=s+2
if(o>=x.length)return H.f(x,o)
C.a.h(x,x[o])
t=s+3
if(t>=x.length)return H.f(x,t)
C.a.h(x,x[t])
if(o>=w.length)return H.f(w,o)
C.a.h(w,w[o])
if(t>=w.length)return H.f(w,t)
C.a.h(w,w[t])
n=x.length
if(o>=n)return H.f(x,o)
m=x[o]
if(t>=n)return H.f(x,t)
l=x[t]
t=s+4
if(t>=n)return H.f(x,t)
k=x[t]
t=new Float32Array(3)
j=new T.b(new Float32Array(3))
G.iD(m,l,k,new T.b(t),j)
C.a.h(v,j)
C.a.h(v,j)}u=H.c([],[G.Y])
t=H.c([],[G.ap])
i=new G.bB(!1,u,t,H.c([],y),P.S(P.i,[P.a,,]))
i.S("aTexUV")
i.a8(x)
i.ak("aTexUV",w)
i.S("aNormal")
i.al("aNormal",v)
for(h=a0*2,s=0;s<a0;s=f){g=s*2+2
l=g+1
f=s+1
e=(f===a0?0:f)*2+2
d=e+1
C.a.h(u,new G.Y(0,g,e))
C.a.h(u,new G.Y(1,d,l))
C.a.h(t,new G.ap(h+e,h+g,h+l,h+d))}return i},
hV:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.Y]
y=H.c([],z)
x=[T.b]
w=H.c([],x)
C.a.J(y,$.f0())
C.a.J(w,$.d_())
for(v=0;v<a;++v,y=u){u=H.c([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.D)(y),++s){r=y[s]
q=J.db(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
p=new T.b(new Float32Array(3))
p.t(q)
q=r.gad(r)
if(q>=w.length)return H.f(w,q)
p.h(0,w[q])
p.O(0,0.5)
p.D(0)
q=r.gad(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
o=new T.b(new Float32Array(3))
o.t(q)
q=r.gae(r)
if(q>=w.length)return H.f(w,q)
o.h(0,w[q])
o.O(0,0.5)
o.D(0)
q=r.gae(r)
if(q>=w.length)return H.f(w,q)
q=w[q]
n=new T.b(new Float32Array(3))
n.t(q)
q=r.gas(r)
if(q>=w.length)return H.f(w,q)
n.h(0,w[q])
n.O(0,0.5)
n.D(0)
m=w.length
C.a.h(w,p)
l=w.length
C.a.h(w,o)
k=w.length
C.a.h(w,n)
C.a.h(u,new G.Y(r.gas(r),m,k))
C.a.h(u,new G.Y(r.gad(r),l,m))
C.a.h(u,new G.Y(r.gae(r),k,l))
C.a.h(u,new G.Y(m,l,k))}}j=new G.bB(!1,H.c([],z),H.c([],[G.ap]),H.c([],x),P.S(P.i,[P.a,,]))
j.S("aTexUV")
j.S("aNormal")
for(z=y.length,t=[T.r],s=0;s<y.length;y.length===z||(0,H.D)(y),++s){r=y[s]
q=J.db(r)
if(q>=w.length)return H.f(w,q)
i=w[q]
q=r.gad(r)
if(q>=w.length)return H.f(w,q)
h=w[q]
q=r.gae(r)
if(q>=w.length)return H.f(w,q)
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
j.al("aNormal",H.c([i,h,g],x))
q=new T.b(new Float32Array(3))
q.t(i)
q.O(0,a0)
f=new T.b(new Float32Array(3))
f.t(h)
f.O(0,a0)
b=new T.b(new Float32Array(3))
b.t(g)
b.O(0,a0)
j.cT(H.c([q,f,b],x))
j.ak("aTexUV",H.c([new T.r(e),new T.r(d),new T.r(c)],t))}return j},
ja:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.jq(B.iH(new B.jb(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.c([],[G.Y])
v=H.c([],[G.ap])
u=[T.b]
t=H.c([],u)
s=new G.bB(!1,w,v,t,P.S(P.i,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.D)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.j(q[p],"$isb")
v.toString
o=new T.b(new Float32Array(3))
o.t(v)
C.a.h(t,o)}}s.cY(z,y,!1)
s.cZ(z,y)
s.S("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.D)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.f(q,o)
o=H.j(q[o],"$isb")
n=H.t(v.i(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.b(new Float32Array(3))
t.t(o);(n&&C.a).h(n,t)}}return s},
jq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.b]
H.t(a,"$isa",z,"$asa")
y=H.c([],[[P.a,T.b]])
x=new Float32Array(3)
w=new T.b(x)
v=new Float32Array(3)
u=new T.b(v)
t=new Float32Array(3)
s=new T.b(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.f(a,n)
m=a[n]
l=H.c([],z)
C.a.h(y,l)
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
t[2]=j*i}u.D(0)
s.D(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.t(o)
w.at(u,f)
w.at(s,e)
p=new T.b(new Float32Array(3))
p.t(w)
C.a.h(l,p)
x[2]=0
x[1]=0
x[0]=0
w.at(u,f)
w.at(s,e)
w.D(0)
p=new T.b(new Float32Array(3))
p.t(w)
C.a.h(l,p)}}return y},
iH:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.n(a,{func:1,ret:-1,args:[P.a5,T.b]})
z=H.c([],[T.b])
y=new T.b(new Float32Array(3))
x=new T.b(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.a6(0,y)
t=new T.b(new Float32Array(3))
t.t(y)
C.a.h(z,t)
t=new T.b(new Float32Array(3))
t.t(x)
C.a.h(z,t)}return z},
jb:{"^":"p:26;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sM(0,y*v)
b.sK(0,y*u)
b.sR(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",i8:{"^":"d;a,b,c",
d_:function(a){var z,y
a=document
z=W.ba
y={func:1,ret:-1,args:[z]}
W.ac(a,"keydown",H.n(new D.ia(this),y),!1,z)
W.ac(a,"keyup",H.n(new D.ib(this),y),!1,z)},
p:{
i9:function(a){var z=P.B
z=new D.i8(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z))
z.d_(a)
return z}}},ia:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isba")
z=this.a
z.a.h(0,a.which)
z.b.h(0,a.which)}},ib:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isba")
z=this.a
z.a.cg(0,a.which)
z.c.h(0,a.which)}},ir:{"^":"d;a,b,c,d,e,f,r,x",
d0:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gax(a)
x=H.o(y,0)
W.ac(y.a,y.b,H.n(new D.it(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gcd(a)
y=H.o(x,0)
W.ac(x.a,x.b,H.n(new D.iu(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gce(a)
x=H.o(y,0)
W.ac(y.a,y.b,H.n(new D.iv(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gcf(a)
x=H.o(z,0)
W.ac(z.a,z.b,H.n(new D.iw(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
is:function(a){var z=P.B
z=new D.ir(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),0,0,0,0,0)
z.d0(a)
return z}}},it:{"^":"p:3;a",
$1:function(a){var z,y
H.j(a,"$isW")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.T(y.gca(a).a)
z.x=H.T(y.gca(a).b)
z.d=a.movementX
z.e=a.movementY}},iu:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isW")
a.preventDefault()
P.a6("BUTTON "+H.h(a.button))
z=this.a
z.a.h(0,a.button)
z.b.h(0,a.button)}},iv:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isW")
a.preventDefault()
z=this.a
z.a.cg(0,a.button)
z.c.h(0,a.button)}},iw:{"^":"p:27;a",
$1:function(a){H.j(a,"$isaY")
a.preventDefault()
this.a.f=H.T(C.ab.gdU(a))}},iG:{"^":"hj;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bQ:function(a){var z,y
z=C.b.dZ(H.t(a,"$ism",[P.d],"$asm"),0,new A.lv(),P.B)
if(typeof z!=="number")return H.au(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lv:{"^":"p:28;",
$2:function(a,b){var z,y
H.T(a)
z=J.aw(b)
if(typeof a!=="number")return a.I()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",
cZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
b.toString
z=new Float32Array(3)
y=new T.b(z)
y.t(b)
y.a6(0,c)
y.D(0)
x=d.bZ(y)
x.D(0)
w=y.bZ(x)
w.D(0)
v=x.aU(b)
u=w.aU(b)
t=y.aU(b)
s=x.a
r=s[0]
q=w.a
p=q[0]
o=z[0]
n=s[1]
m=q[1]
l=z[1]
s=s[2]
q=q[2]
z=z[2]
k=a.a
k[15]=1
k[14]=-t
k[13]=-u
k[12]=-v
k[11]=0
k[10]=z
k[9]=q
k[8]=s
k[7]=0
k[6]=l
k[5]=m
k[4]=n
k[3]=0
k[2]=o
k[1]=p
k[0]=r},
eP:function(a,b,c,d,e){var z,y,x
z=Math.tan(b*0.5)
y=d-e
a.b8()
x=a.a
x[0]=1/(z*c)
x[5]=1/z
x[10]=(e+d)/y
x[11]=-1
x[14]=2*d*e/y},
ai:{"^":"d;a",
t:function(a){var z,y
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
k:function(a){return"[0] "+this.V(0).k(0)+"\n[1] "+this.V(1).k(0)+"\n[2] "+this.V(2).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ai){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bQ(this.a)},
V:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.f(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.f(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.f(y,x)
z[2]=y[x]
return new T.b(z)},
dP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.t(a)
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
return m}},
J:{"^":"d;a",
t:function(a){var z,y
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
k:function(a){return"[0] "+this.V(0).k(0)+"\n[1] "+this.V(1).k(0)+"\n[2] "+this.V(2).k(0)+"\n[3] "+this.V(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.f(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bQ(this.a)},
V:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.f(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.f(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.f(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.f(y,x)
z[3]=y[x]
return new T.aX(z)},
b8:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=0
z[6]=0
z[7]=0
z[8]=0
z[9]=0
z[10]=0
z[11]=0
z[12]=0
z[13]=0
z[14]=0
z[15]=0},
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
aw:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7},
p:{
c5:function(){return new T.J(new Float32Array(16))}}},
iV:{"^":"d;a",
cJ:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gah())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gl:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
k:function(a){var z=this.a
return H.h(z[0])+", "+H.h(z[1])+", "+H.h(z[2])+" @ "+H.h(z[3])}},
r:{"^":"d;a",
u:function(a,b){var z=this.a
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
gB:function(a){return A.bQ(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gM:function(a){return this.a[0]},
gK:function(a){return this.a[1]}},
b:{"^":"d;a",
q:function(a,b,c){var z=this.a
C.b.j(z,0,a)
C.b.j(z,1,b)
C.b.j(z,2,c)},
t:function(a){var z,y
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
gB:function(a){return A.bQ(this.a)},
I:function(a,b){var z=new T.b(new Float32Array(3))
z.t(this)
z.h(0,b)
return z},
i:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gl:function(a){return Math.sqrt(this.gah())},
gah:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
D:function(a){var z,y,x
z=Math.sqrt(this.gah())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aU:function(a){var z,y
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
z=new T.b(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
h:function(a,b){var z,y
z=H.j(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
at:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
a6:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
O:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
az:function(a){var z=new T.b(new Float32Array(3))
z.t(this)
z.O(0,a)
return z},
sM:function(a,b){C.b.j(this.a,0,b)
return b},
sK:function(a,b){C.b.j(this.a,1,b)
return b},
sR:function(a,b){C.b.j(this.a,2,b)
return b},
gM:function(a){return this.a[0]},
gK:function(a){return this.a[1]},
gR:function(a){return this.a[2]},
p:{
F:function(a,b,c){var z=new T.b(new Float32Array(3))
z.q(a,b,c)
return z},
bk:function(){return new T.b(new Float32Array(3))}}},
aX:{"^":"d;a",
k:function(a){var z=this.a
return H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+","+H.h(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aX){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bQ(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
gl:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gM:function(a){return this.a[0]},
gK:function(a){return this.a[1]},
gR:function(a){return this.a[2]},
gcE:function(a){return this.a[3]}}}],["","",,L,{"^":"",
hL:function(a){var z,y
P.a6(H.h(a)+" toggle ")
z=$.an()
$.ch=z.i(0,a)
z.i(0,a).c=!0
for(z=new H.ah(z,[H.o(z,0)]),z=z.gC(z);z.v();){y=z.d
if(y!=a)$.an().i(0,y).c=!1}},
nu:[function(a){a.stopPropagation()},"$1","lS",4,0,13],
eL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z={}
y=document
x=C.j.cH(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.jh(0,0,x,w,y.createElement("div"),R.kl("blue","gray",90,30))
u.d2(x,"blue","gray")
t=H.j(C.j.e5(y,"#webgl-canvas"),"$iscw")
s=new G.hl(t)
x=P.i
v=P.d
r=(t&&C.H).cG(t,"webgl2",P.cE(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a1(P.dC('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.h(J.fU(r))
if($.eG>0)P.a6("I: "+q)
J.fB(r,0,0,0,1)
J.bX(r,2929)
r=new Float32Array(3)
q=D.i9(null)
p=D.is(t)
o=new T.J(new Float32Array(16))
o.F()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.iG(25,10,0,0,new T.b(r),-0.02,q,p,o,new T.b(n),new T.b(m),new T.b(l),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
t.width=t.clientWidth
t.height=t.clientHeight
r=$.lH
q=$.lG
p=new T.J(new Float32Array(16))
p.F()
o=new T.J(new Float32Array(16))
o.F()
j=new G.iJ(k,50,1,r,q,p,o,new T.J(new Float32Array(16)),P.S(x,v),"perspective",!1,!0)
j.bl()
r=H.c([],[G.bc])
q=new Float32Array(64)
i=new G.hW(r,q,new Float32Array(4),P.S(x,v),"illumination",!1,!0)
for(q=$.an(),q=q.geg(q),p=q.a,q=new H.dO(p.gC(p),q.b,[H.o(q,0),H.o(q,1)]);q.v();)C.a.h(r,q.a)
r=P.S(x,v)
q=new G.ar(r,"uniforms",!1,!0)
h=new R.j9(s,q)
p=new T.r(new Float32Array(2))
p.u(512,512)
h.y=p
g=G.e6(s,"frame::color",512,512,32856,$.f2())
o=G.e6(s,"frame::depth",512,512,33190,$.f3())
h.b=o
n=new G.dE(s,null,g,o,null)
m=J.fD(s.a)
n.b=m
J.cn(s.a,36160,m)
J.da(s.a,36160,36064,3553,g.b,0)
J.da(s.a,36160,36096,3553,o.b,0)
f=J.fz(s.a,36160)
if(f!==36053)H.a1("Error Incomplete Framebuffer: "+H.h(f))
J.cn(s.a,36160,null)
h.d=n
n=A.cH("compute-shadow",s,n)
n.z=512
n.Q=512
h.c=n
r.j(0,"uTexture",o)
r.j(0,"uCutOff",0)
r.j(0,"uCameraNear",0.5)
r.j(0,"uCameraFar",20)
r=G.c7("shadowCompute",s,$.fo(),$.fn())
m=[G.ar]
l=H.c([q],m)
e=[A.aD]
d=H.c([],e)
r=new A.bJ(r,l,d,"shadowCompute",!1,!0)
h.e=r
C.a.h(n.f,r)
r=A.cH("visualize-shadow",s,null)
r.r&=4294950911
h.f=r
n=G.c7("shadowVisualize",s,$.ft(),$.fs())
q=H.c([q],m)
l=H.c([],e)
q=new A.bJ(n,q,l,"shadowVisualize",!1,!0)
h.x=q
d=new T.b(new Float32Array(3))
d.q(-1,-1,0)
c=new T.b(new Float32Array(3))
c.q(1,-1,0)
b=new T.b(new Float32Array(3))
b.q(1,1,0)
a=new T.b(new Float32Array(3))
a.q(-1,1,0)
a0=[T.b]
a1=H.c([d,c,b,a],a0)
d=new T.r(new Float32Array(2))
d.u(0,0)
c=new T.r(new Float32Array(2))
c.u(1,0)
b=new T.r(new Float32Array(2))
b.u(1,1)
a=new T.r(new Float32Array(2))
a.u(0,1)
a2=H.c([d,c,b,a],[T.r])
a3=new T.b(new Float32Array(3))
a3.q(0,0,1)
a4=H.c([a3,a3,a3,a3],a0)
a5=new G.bB(!1,H.c([],[G.Y]),H.c([],[G.ap]),H.c([],a0),P.S(x,[P.a,,]))
a5.S("aTexUV")
a5.cU(a1)
a5.ak("aTexUV",a2)
a5.S("aNormal")
a5.al("aNormal",a4)
a6=G.bC("quad",n,a5)
n=$.f_()
d=H.c([],e)
c=new Float32Array(9)
b=new T.J(new Float32Array(16))
b.F()
a=new T.J(new Float32Array(16))
a.F()
a0=new Float32Array(3)
a7=new Float32Array(3)
a8=new Float32Array(3)
C.a.h(l,new A.aD(n,a6,d,new T.ai(c),b,a,new T.b(a0),new T.b(a7),new T.b(a8),new T.b(new Float32Array(3)),"unit-mesh",!1,!0))
C.a.h(r.f,q)
x=P.S(x,v)
a9=new G.ar(x,"plain",!1,!0)
x.j(0,"uShadowMap",o)
x.j(0,"uCanvasSize",p)
x.j(0,"uShadowBias",0.03)
b0=A.cH("main",s,null)
x=G.c7("solid",s,$.fj(),$.fh())
p=H.c([j,i,a9],m)
o=H.c([],e)
v=b0.f
C.a.h(v,new A.bJ(x,p,o,"solid",!1,!0))
p=G.c7("solid",s,$.fq(),$.fp())
m=H.c([j,i],m)
r=H.c([],e)
b1=new A.bJ(p,m,r,"solid",!1,!0)
C.a.h(v,b1)
v=G.bC("icosahedron-3",x,B.hV(3,1,!0))
r=$.fl()
q=H.c([],e)
p=new Float32Array(9)
n=new T.J(new Float32Array(16))
n.F()
m=new T.J(new Float32Array(16))
m.F()
l=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
v=new A.aD(r,v,q,new T.ai(p),n,m,new T.b(l),new T.b(d),new T.b(c),new T.b(new Float32Array(3)),"sphere",!1,!0)
v.a1(0,0,0)
C.a.h(o,v)
v=R.dW(x,!0,1,0,1,0,1,1,1)
q=H.c([],e)
p=new Float32Array(9)
n=new T.J(new Float32Array(16))
n.F()
m=new T.J(new Float32Array(16))
m.F()
l=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
v=new A.aD(r,v,q,new T.ai(p),n,m,new T.b(l),new T.b(d),new T.b(c),new T.b(new Float32Array(3)),"cube",!1,!0)
v.a1(-5,0,-5)
C.a.h(o,v)
v=G.bC("cylinder-32",x,B.hx(3,6,2,32,!0))
q=H.c([],e)
p=new Float32Array(9)
n=new T.J(new Float32Array(16))
n.F()
m=new T.J(new Float32Array(16))
m.F()
l=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
v=new A.aD(r,v,q,new T.ai(p),n,m,new T.b(l),new T.b(d),new T.b(c),new T.b(new Float32Array(3)),"cylinder",!1,!0)
v.a1(5,0,-5)
C.a.h(o,v)
v=G.bC("torusknot",x,B.ja(!0,!0,1,2,3,1,128,16,0.4,!1))
q=H.c([],e)
p=new Float32Array(9)
n=new T.J(new Float32Array(16))
n.F()
m=new T.J(new Float32Array(16))
m.F()
l=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
v=new A.aD(r,v,q,new T.ai(p),n,m,new T.b(l),new T.b(d),new T.b(c),new T.b(new Float32Array(3)),"torusknot",!1,!0)
v.a1(5,0,5)
C.a.h(o,v)
x=R.dW(x,!0,1,0,1,0,30,0.1,30)
v=$.fk()
r=H.c([],e)
q=new Float32Array(9)
p=new T.J(new Float32Array(16))
p.F()
n=new T.J(new Float32Array(16))
n.F()
m=new Float32Array(3)
l=new Float32Array(3)
d=new Float32Array(3)
x=new A.aD(v,x,r,new T.ai(q),p,n,new T.b(m),new T.b(l),new T.b(d),new T.b(new Float32Array(3)),"plane",!1,!0)
x.a1(0,-10,0)
C.a.h(o,x)
for(x=o.length,b2=0;b2<o.length;o.length===x||(0,H.D)(o),++b2){a3=o[b2]
C.a.h(h.e.f,a3)}x=b1.d
b3=G.dP("light",x.d,1,x.e.x)
b3.a8(new Float32Array(3))
b3.be(H.c([0,0],[P.B]))
x=$.fi()
e=H.c([],e)
v=new Float32Array(9)
r=new T.J(new Float32Array(16))
r.F()
q=new T.J(new Float32Array(16))
q.F()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
C.a.h(b1.f,new A.aD(x,b3,e,new T.ai(v),r,q,new T.b(p),new T.b(o),new T.b(n),new T.b(new Float32Array(3)),"light",!1,!0))
for(x=C.j.aY(y,"input"),v=x.length,b2=0;b2<x.length;x.length===v||(0,H.D)(x),++b2){r=H.j(x[b2],"$isU")
q=J.l(r)
p=q.gcb(r)
o=H.o(p,0)
W.ac(p.a,p.b,H.n(new L.lL(),{func:1,ret:-1,args:[o]}),!1,o)
o=q.gcc(r)
p=H.o(o,0)
W.ac(o.a,o.b,H.n(new L.lM(),{func:1,ret:-1,args:[p]}),!1,p)
r=q.gax(r)
q=H.o(r,0)
W.ac(r.a,r.b,H.n(L.lS(),{func:1,ret:-1,args:[q]}),!1,q)}for(x=C.j.aY(y,"input"),v=x.length,b2=0;b2<x.length;x.length===v||(0,H.D)(x),++b2){r=H.j(x[b2],"$isU")
H.bS("initialize inputs "+H.h(r.id))
b4=C.j.bv(y,"Event")
J.d6(b4,"change",!0,!0)
q=J.l(r)
q.c1(r,b4)
b4=C.j.bv(y,"Event")
J.d6(b4,"input",!0,!0)
q.c1(r,b4)}y=new L.lN(t,j,b0,h)
y.$1(null)
x=W.R
W.ac(window,"resize",H.n(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
new L.lK(z,k,b3,u,h,a9,b0).$1(0)},
lL:{"^":"p:12;",
$1:function(a){var z=H.M(J.dc(a),"$iscz")
if(z.type==="radio")L.hL(z.id)}},
lM:{"^":"p:12;",
$1:function(a){var z,y,x,w
z=H.M(J.dc(a),"$iscz")
if(z.type==="range"){y=z.id
x=P.lo(z.value,null)
if(J.fZ(y,"pos")){P.a6("EventPositionChanged "+y+" "+H.h(x))
switch(y){case"posx":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").z.sM(0,x)
H.M(w.i(0,"idPoint"),"$isbI").z.sM(0,x)
break
case"posy":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").z.sK(0,x)
H.M(w.i(0,"idPoint"),"$isbI").z.sK(0,x)
break
case"posz":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").z.sR(0,x)
H.M(w.i(0,"idPoint"),"$isbI").z.sR(0,x)
break}}else if(C.h.aB(y,"dir")){P.a6("EventDirectionChanged "+y+" "+H.h(x))
switch(y){case"dirx":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").Q.sM(0,x)
H.M(w.i(0,"idDirectional"),"$isbx").z.sM(0,x)
break
case"diry":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").Q.sK(0,x)
H.M(w.i(0,"idDirectional"),"$isbx").z.sK(0,x)
break
case"dirz":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").Q.sR(0,x)
H.M(w.i(0,"idDirectional"),"$isbx").z.sR(0,x)
break}}else if(y==="cutoff")P.a6("set cutoff "+H.h(x))}}},
lN:{"^":"p:13;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.a6("size change "+H.h(y)+" "+H.h(x))
if(typeof y!=="number")return y.bd()
z=C.d.Z(y,2)
this.b.cV(z,x)
w=this.c
w.z=z
w.Q=x
w=this.d.f
w.x=z
w.y=0
w.z=z
w.Q=x}},
lK:{"^":"p:29;a,b,c,d,e,f,r",
$1:function(b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
H.cX(b0)
if(typeof b0!=="number")return b0.bb()
z=this.a
z.a=b0+0
y=this.b
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b5()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b5()
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
if(typeof v!=="number")return v.b5()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.t.dN(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a1(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d
u=v.a
r=t.a
u[12]=u[12]+r[0]
u[13]=u[13]+r[1]
u[14]=u[14]+r[2]
q=u[12]
p=u[13]
o=u[14]
n=new T.b(new Float32Array(3))
n.q(0,1,0)
r=y.e
m=r.a
m[0]=u[12]
m[1]=u[13]
m[2]=u[14]
T.cZ(v,r,t,n)
u[12]=q
u[13]=p
u[14]=o
t=y.f
r=t.a
r[0]=u[2]
r[1]=u[6]
r[2]=u[10]
y=-y.k1
l=Math.sqrt(t.gah())
q=r[0]/l
p=r[1]/l
o=r[2]/l
k=Math.cos(y)
j=Math.sin(y)
i=1-k
h=q*q*i+k
y=o*j
g=q*p*i-y
r=p*j
f=q*o*i+r
e=p*q*i+y
d=p*p*i+k
y=q*j
c=p*o*i-y
b=o*q*i-r
a=o*p*i+y
a0=o*o*i+k
y=u[0]
r=u[4]
t=u[8]
v=u[1]
m=u[5]
a1=u[9]
a2=u[2]
a3=u[6]
a4=u[10]
a5=u[3]
a6=u[7]
a7=u[11]
u[0]=y*h+r*e+t*b
u[1]=v*h+m*e+a1*b
u[2]=a2*h+a3*e+a4*b
u[3]=a5*h+a6*e+a7*b
u[4]=y*g+r*d+t*a
u[5]=v*g+m*d+a1*a
u[6]=a2*g+a3*d+a4*a
u[7]=a5*g+a6*d+a7*a
u[8]=y*f+r*c+t*a0
u[9]=v*f+m*c+a1*a0
u[10]=a2*f+a3*c+a4*a0
u[11]=a5*f+a6*c+a7*a0
w.c.af(0)
w.b.af(0)
x.e=0
x.d=0
x.f=0
x.c.af(0)
x.b.af(0)
a8=$.ch.aE()
x=this.c
a9=$.ch
y=J.C(a9)
if(!!y.$isbx){y=a9.Q
R.jz(x,y,y/4,a9.z)}else if(!!y.$isaJ)R.jB(x,a9.z,a9.Q,a9.ch,a9.cx)
else if(!!y.$isbI)R.jA(x,a9.z,a9.Q)
y=this.d
C.n.b7(y.c,H.h($.ch))
x=this.e
x.r.d.j(0,"uLightPerspectiveViewMatrix",a8)
x.c.bg()
this.f.d.j(0,"uLightPerspectiveViewMatrix",a8)
this.r.bg()
w=x.a
v=x.b
J.av(w.a,3553,v.b)
J.a7(w.a,3553,34892,0)
J.a7(w.a,3553,10240,9728)
J.a7(w.a,3553,10241,9728)
J.av(w.a,3553,null)
x.f.bh(H.c([],[G.by]))
x=x.b
J.av(w.a,3553,x.b)
J.a7(w.a,3553,34892,34894)
J.a7(w.a,3553,10240,9729)
J.a7(w.a,3553,10241,9729)
J.av(w.a,3553,null)
C.ac.gdG(window).cm(this,-1)
y.d4(z.a)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dH.prototype
return J.dG.prototype}if(typeof a=="string")return J.bG.prototype
if(a==null)return J.i3.prototype
if(typeof a=="boolean")return J.i2.prototype
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.d)return a
return J.cj(a)}
J.bq=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.d)return a
return J.cj(a)}
J.eH=function(a){if(a==null)return a
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.d)return a
return J.cj(a)}
J.lr=function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bj.prototype
return a}
J.ls=function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bj.prototype
return a}
J.ci=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bj.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.d)return a
return J.cj(a)}
J.bP=function(a){if(a==null)return a
if(!(a instanceof P.d))return J.bj.prototype
return a}
J.aS=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).G(a,b)}
J.af=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lr(a).a0(a,b)}
J.bt=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lF(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bq(a).i(a,b)}
J.d5=function(a,b){return J.ci(a).ab(a,b)}
J.d6=function(a,b,c,d){return J.l(a).dl(a,b,c,d)}
J.bV=function(a,b){return J.l(a).ds(a,b)}
J.fu=function(a,b,c){return J.l(a).dt(a,b,c)}
J.d7=function(a,b){return J.l(a).bF(a,b)}
J.fv=function(a,b,c,d){return J.l(a).dD(a,b,c,d)}
J.d8=function(a,b,c){return J.l(a).bH(a,b,c)}
J.fw=function(a,b){return J.l(a).dI(a,b)}
J.cm=function(a,b,c){return J.l(a).bI(a,b,c)}
J.cn=function(a,b,c){return J.l(a).bK(a,b,c)}
J.av=function(a,b,c){return J.l(a).bL(a,b,c)}
J.bW=function(a,b){return J.l(a).dL(a,b)}
J.fx=function(a,b){return J.l(a).bM(a,b)}
J.fy=function(a,b,c){return J.l(a).bN(a,b,c)}
J.d9=function(a,b,c,d){return J.l(a).bO(a,b,c,d)}
J.fz=function(a,b){return J.l(a).bP(a,b)}
J.fA=function(a,b){return J.l(a).bQ(a,b)}
J.fB=function(a,b,c,d,e){return J.l(a).bR(a,b,c,d,e)}
J.fC=function(a,b){return J.ls(a).T(a,b)}
J.co=function(a,b,c){return J.bq(a).dO(a,b,c)}
J.cp=function(a){return J.l(a).bU(a)}
J.fD=function(a){return J.l(a).bV(a)}
J.fE=function(a){return J.l(a).bW(a)}
J.fF=function(a){return J.l(a).bY(a)}
J.fG=function(a){return J.l(a).dT(a)}
J.fH=function(a,b){return J.l(a).c_(a,b)}
J.cq=function(a,b){return J.l(a).c0(a,b)}
J.fI=function(a,b,c,d){return J.l(a).c2(a,b,c,d)}
J.fJ=function(a,b,c,d,e){return J.l(a).dV(a,b,c,d,e)}
J.fK=function(a,b,c,d,e){return J.l(a).c3(a,b,c,d,e)}
J.fL=function(a,b,c,d,e,f){return J.l(a).dW(a,b,c,d,e,f)}
J.fM=function(a,b){return J.eH(a).w(a,b)}
J.bX=function(a,b){return J.l(a).c4(a,b)}
J.fN=function(a,b){return J.l(a).c5(a,b)}
J.fO=function(a){return J.l(a).dX(a)}
J.fP=function(a,b){return J.l(a).H(a,b)}
J.da=function(a,b,c,d,e,f){return J.l(a).c8(a,b,c,d,e,f)}
J.db=function(a){return J.bP(a).gas(a)}
J.fQ=function(a){return J.l(a).gdH(a)}
J.aw=function(a){return J.C(a).gB(a)}
J.bY=function(a){return J.eH(a).gC(a)}
J.b5=function(a){return J.bq(a).gl(a)}
J.fR=function(a){return J.l(a).ge4(a)}
J.fS=function(a){return J.l(a).gea(a)}
J.dc=function(a){return J.l(a).gcj(a)}
J.fT=function(a){return J.bP(a).gcE(a)}
J.bZ=function(a){return J.bP(a).gM(a)}
J.cr=function(a){return J.bP(a).gK(a)}
J.dd=function(a){return J.bP(a).gR(a)}
J.cs=function(a,b){return J.l(a).a5(a,b)}
J.fU=function(a){return J.l(a).ay(a)}
J.fV=function(a){return J.l(a).aZ(a)}
J.fW=function(a,b){return J.l(a).b_(a,b)}
J.fX=function(a,b,c){return J.l(a).b0(a,b,c)}
J.de=function(a,b,c){return J.l(a).b4(a,b,c)}
J.fY=function(a,b){return J.l(a).c9(a,b)}
J.df=function(a){return J.l(a).e6(a)}
J.fZ=function(a,b){return J.ci(a).aB(a,b)}
J.h_=function(a,b,c,d){return J.l(a).ba(a,b,c,d)}
J.h0=function(a,b,c,d){return J.l(a).ck(a,b,c,d)}
J.a7=function(a,b,c,d){return J.l(a).cl(a,b,c,d)}
J.h1=function(a,b,c,d,e,f){return J.l(a).eb(a,b,c,d,e,f)}
J.h2=function(a){return J.ci(a).ec(a)}
J.bu=function(a){return J.C(a).k(a)}
J.h3=function(a,b,c,d){return J.l(a).ee(a,b,c,d)}
J.h4=function(a){return J.ci(a).ef(a)}
J.h5=function(a,b,c){return J.l(a).cp(a,b,c)}
J.h6=function(a,b,c){return J.l(a).cq(a,b,c)}
J.ct=function(a,b,c){return J.l(a).cr(a,b,c)}
J.h7=function(a,b,c){return J.l(a).cs(a,b,c)}
J.dg=function(a,b,c){return J.l(a).ct(a,b,c)}
J.dh=function(a,b,c){return J.l(a).cu(a,b,c)}
J.di=function(a,b,c){return J.l(a).cv(a,b,c)}
J.dj=function(a,b,c,d){return J.l(a).cw(a,b,c,d)}
J.dk=function(a,b,c,d){return J.l(a).cz(a,b,c,d)}
J.h8=function(a,b){return J.l(a).cA(a,b)}
J.h9=function(a,b,c){return J.l(a).eh(a,b,c)}
J.ha=function(a,b,c,d,e,f,g){return J.l(a).cB(a,b,c,d,e,f,g)}
J.hb=function(a,b,c,d,e){return J.l(a).cD(a,b,c,d,e)}
I.b3=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.c_.prototype
C.H=W.cw.prototype
C.x=W.hs.prototype
C.n=W.hB.prototype
C.I=W.hD.prototype
C.J=W.hT.prototype
C.j=W.hU.prototype
C.K=J.k.prototype
C.a=J.bE.prototype
C.r=J.dG.prototype
C.d=J.dH.prototype
C.t=J.bF.prototype
C.h=J.bG.prototype
C.R=J.bH.prototype
C.b=H.ix.prototype
C.o=H.iz.prototype
C.V=W.iA.prototype
C.A=J.iK.prototype
C.B=W.iW.prototype
C.G=W.jn.prototype
C.w=J.bj.prototype
C.ab=W.aY.prototype
C.ac=W.jE.prototype
C.f=new P.kx()
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.S=H.c(I.b3(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.T=H.c(I.b3(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.U=H.c(I.b3([]),[P.i])
C.u=H.c(I.b3(["bind","if","ref","repeat","syntax"]),[P.i])
C.v=H.c(I.b3(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.W=new G.E("vec3","vertex btangents",0)
C.e=new G.E("vec3","",0)
C.X=new G.E("vec4","delta from light",0)
C.p=new G.E("","",0)
C.C=new G.E("vec3","vertex coordinates",0)
C.Y=new G.E("vec3","vertex binormals",0)
C.D=new G.E("vec4","for wireframe",0)
C.Z=new G.E("vec4","per vertex color",0)
C.a_=new G.E("float","for normal maps",0)
C.k=new G.E("mat4","",0)
C.a1=new G.E("mat4","",4)
C.a0=new G.E("mat4","",128)
C.c=new G.E("float","",0)
C.a2=new G.E("float","",4)
C.a3=new G.E("float","depth for shadowmaps",0)
C.i=new G.E("sampler2D","",0)
C.a4=new G.E("float","for bump maps",0)
C.a5=new G.E("vec2","texture uvs",0)
C.a6=new G.E("float","time since program start in sec",0)
C.l=new G.E("vec2","",0)
C.a7=new G.E("samplerCube","",0)
C.m=new G.E("vec4","",0)
C.a8=new G.E("vec3","vertex normals",0)
C.a9=new G.E("sampler2DShadow","",0)
C.E=new G.E("vec3","per vertex color",0)
C.F=new G.E("mat3","",0)
C.aa=new G.E("vec3","vertex tangents",0)
$.ag=0
$.b6=null
$.dn=null
$.cO=!1
$.eJ=null
$.eA=null
$.eO=null
$.cf=null
$.ck=null
$.cV=null
$.b_=null
$.bm=null
$.bn=null
$.cP=!1
$.L=C.f
$.ao=null
$.cy=null
$.dA=null
$.dz=null
$.dv=null
$.du=null
$.dt=null
$.ds=null
$.eG=0
$.ch=null
$.lH=0.1
$.lG=50
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
I.$lazy(y,x,w)}})(["me","eZ",function(){return H.eI("_$dart_dartClosure")},"mT","d0",function(){return H.eI("_$dart_js")},"nG","f4",function(){return H.ak(H.c8({
toString:function(){return"$receiver$"}}))},"nH","f5",function(){return H.ak(H.c8({$method$:null,
toString:function(){return"$receiver$"}}))},"nI","f6",function(){return H.ak(H.c8(null))},"nJ","f7",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nM","fa",function(){return H.ak(H.c8(void 0))},"nN","fb",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nL","f9",function(){return H.ak(H.e4(null))},"nK","f8",function(){return H.ak(function(){try{null.$method$}catch(z){return z.message}}())},"nP","fd",function(){return H.ak(H.e4(void 0))},"nO","fc",function(){return H.ak(function(){try{(void 0).$method$}catch(z){return z.message}}())},"o_","d1",function(){return P.jH()},"og","bs",function(){return[]},"mb","eY",function(){return{}},"o7","ff",function(){return P.cF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"o8","d2",function(){return P.S(P.i,P.bA)},"oh","d3",function(){return T.F(0,1,0)},"oi","d4",function(){return T.F(0,0,1)},"nq","f1",function(){return new G.e3(1281,0,4294967295)},"m1","eR",function(){return new G.e2(1281,1281,1281)},"oe","ae",function(){return P.cE(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.c,"iaColor",C.e,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a9,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a7,"uAnimationTable",C.i,"uTime",C.a6,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.c,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.i,G.E)},"nA","f2",function(){var z=G.e1()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"nB","f3",function(){var z=G.e1()
z.d=!1
z.b=!0
z.a=!1
z.c=!0
return z},"ml","f_",function(){return G.c4("empty-mat")},"m7","eV",function(){return T.F(0.4,0.4,0.4)},"m6","eU",function(){return T.F(0.2,0.2,0.2)},"m4","eS",function(){return T.F(0,0,0)},"m5","eT",function(){return T.F(0,0,1)},"m8","eW",function(){return T.F(0,0,0.5)},"m9","eX",function(){return T.F(1,1,0)},"ov","fo",function(){var z,y
z=G.aF("ShadowMapV")
y=[P.i]
z.aj(H.c(["aPosition"],y))
z.X(H.c(["uLightPerspectiveViewMatrix","uModelMatrix"],y))
z.Y(H.c(["    gl_Position = uLightPerspectiveViewMatrix * uModelMatrix *\n                  vec4(aPosition, 1.0);\n    "],y))
return z},"ou","fn",function(){var z=G.aF("ShadowMapF")
z.Y(H.c(["oFragColor.r = 1.0;"],[P.i]))
return z},"oA","ft",function(){var z,y
z=G.aF("copyV")
y=[P.i]
z.aj(H.c(["aPosition","aTexUV"],y))
z.am(H.c(["vTexUV"],y))
z.Y(H.c(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"oz","fs",function(){var z,y
z=G.aF("copyF")
y=[P.i]
z.am(H.c(["vTexUV"],y))
z.X(H.c(["uTexture","uCutOff","uCameraFar","uCameraNear"],y))
z.Y(H.c(["   float d = texture(uTexture,  vTexUV).x;\n   float near = uCameraNear;\n   float far = uCameraFar;\n   float gray = (2.0 * near) / (far + near - d * (far - near));\n   oFragColor.rgb = vec3(gray);\n   // oFragColor.rgb = vec3(d >= uCutOff ? d : 0.0);\n   // oFragColor.rgb = vec3(d);\n"],y))
return z},"ox","fq",function(){var z,y
z=G.aF("SolidColor")
y=[P.i]
z.aj(H.c(["aPosition"],y))
z.X(H.c(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.Y(H.c(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"ow","fp",function(){var z,y
z=G.aF("SolidColorF")
y=[P.i]
z.X(H.c(["uColor"],y))
z.Y(H.c(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"o4","fe",function(){return H.c([T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)],[T.b])},"mK","f0",function(){return H.c([G.N(0,11,5),G.N(0,5,1),G.N(0,1,7),G.N(0,7,10),G.N(0,10,11),G.N(1,5,9),G.N(5,11,4),G.N(11,10,2),G.N(10,7,6),G.N(7,1,8),G.N(3,9,4),G.N(3,4,2),G.N(3,2,6),G.N(3,6,8),G.N(3,8,9),G.N(4,9,5),G.N(2,4,11),G.N(6,2,10),G.N(8,6,7),G.N(9,8,1)],[G.Y])},"oy","fr",function(){return(1+P.lT(5))/2},"mL","d_",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.fr()
y=T.F(-1,z,0)
y.D(0)
x=T.F(1,z,0)
x.D(0)
if(typeof z!=="number")return z.ei()
w=T.F(-1,-z,0)
w.D(0)
v=T.F(1,-z,0)
v.D(0)
u=T.F(0,-1,z)
u.D(0)
t=T.F(0,1,z)
t.D(0)
s=T.F(0,-1,-z)
s.D(0)
r=T.F(0,1,-z)
r.D(0)
q=T.F(z,0,-1)
q.D(0)
p=T.F(z,0,1)
p.D(0)
o=T.F(-z,0,-1)
o.D(0)
z=T.F(-z,0,1)
z.D(0)
return H.c([y,x,w,v,u,t,s,r,q,p,o,z],[T.b])},"oq","fj",function(){var z,y
z=G.aF("LightBlinnPhongShadowV")
y=[P.i]
z.aj(H.c(["aPosition","aNormal"],y))
z.am(H.c(["vPosition","vNormal","vPositionFromLight"],y))
z.X(H.c(["uPerspectiveViewMatrix","uLightPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.Y(H.c(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        vPositionFromLight = uLightPerspectiveViewMatrix * pos;\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        "],y))
return z},"on","fh",function(){var z,y
z=G.aF("LightBlinnPhongShadowF")
y=[P.i]
z.am(H.c(["vPosition","vNormal","vPositionFromLight"],y))
z.X(H.c(["uLightDescs","uLightTypes","uShininess"],y))
z.X(H.c(["uShadowMap","uEyePosition","uColor","uShadowBias"],y))
z.bk(H.c(["\n    vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n\t\t// depth is in [-1, 1] but we want [0, 1] for the texture lookup\n\t\tdepth = 0.5 * depth + vec3(0.5);\n\n    float shadow = GetShadow(depth, uShadowMap, 0.001, 0.001);\n\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n    if (shadow > 0.0) {\n        acc = CombinedLight(vPosition, vNormal, uEyePosition,\n                            uLightDescs, uLightTypes, uShininess);\n    }\n\n    oFragColor.rgb = shadow * acc.diffuse +\n                       shadow * acc.specular +\n                       uColor;\n    oFragColor.a = 1.0;\n    // if ( oFragColor.r != 66.0)  gl_FragColor.rgb = vec3(shadow);\n\n      "],y),H.c(["","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n","\nfloat GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {\n    depth.z = depth.z - bias1;\n    return texture(shadowMap, depth);\n    //return 1.0 - smoothstep(bias1, bias2, depth.z - d);\n}\n"],y))
return z},"ot","fm",function(){return T.F(11,20,0)},"ol","fg",function(){return T.F(0,-30,0)},"op","an",function(){var z,y,x,w,v
z=$.fg()
y=$.eT()
x=$.eS()
w=new G.bx(z,40,T.c5(),T.c5(),1,T.bk(),T.bk(),"dir",!1,!0)
w.aG("dir",1,y,x)
v=$.fm()
z=new G.aJ(v,z,40,0.5235987755982988,0.5,1,0.5,44,T.c5(),T.c5(),2,T.bk(),T.bk(),"spot",!1,!0)
z.aG("spot",2,y,x)
x=$.eW()
v=new G.bI(v,40,3,T.bk(),T.bk(),"point",!1,!0)
v.aG("point",3,x,y)
return P.cE(["idDirectional",w,"idSpot",z,"idPoint",v],P.i,G.bc)},"or","fk",function(){var z=G.c4("matGray")
z.a9("uColor",$.eV())
z.a9("uShininess",10)
return z},"os","fl",function(){var z=G.c4("objects")
z.a9("uColor",$.eU())
z.a9("uShininess",10)
return z},"oo","fi",function(){var z=G.c4("light")
z.a9("uColor",$.eX())
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[W.W]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.i,args:[P.B]},{func:1,ret:P.X,args:[W.aj]},{func:1,ret:P.X,args:[P.i]},{func:1,ret:P.G,args:[W.ba]},{func:1,ret:P.G,args:[W.R]},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.X,args:[W.U,P.i,P.i,W.bM]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a9]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:P.X,args:[W.v]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.G,args:[P.H]},{func:1,args:[W.R]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[P.a5,T.b]},{func:1,ret:P.G,args:[W.aY]},{func:1,ret:P.B,args:[P.B,P.d]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.lV(d||a)
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
Isolate.b3=a.b3
Isolate.bp=a.bp
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
if(typeof dartMainRunner==="function")dartMainRunner(L.eL,[])
else L.eL([])})})()
//# sourceMappingURL=shadow.dart.js.map
