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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cN(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bk=function(){}
var dart=[["","",,H,{"^":"",mm:{"^":"c;a"}}],["","",,J,{"^":"",
cS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cR==null){H.ll()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cE("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cV()]
if(v!=null)return v
v=H.lq(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cV(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"c;",
C:function(a,b){return a===b},
gv:function(a){return H.bd(a)},
l:["cG",function(a){return"Instance of '"+H.be(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hG:{"^":"h;",
l:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isT:1},
hH:{"^":"h;",
C:function(a,b){return null==b},
l:function(a){return"null"},
gv:function(a){return 0},
$isD:1},
ct:{"^":"h;",
gv:function(a){return 0},
l:["cI",function(a){return String(a)}]},
il:{"^":"ct;"},
bh:{"^":"ct;"},
bx:{"^":"ct;",
l:function(a){var z=a[$.eK()]
if(z==null)return this.cI(a)
return"JavaScript function for "+H.e(J.bo(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbs:1},
bu:{"^":"h;$ti",
k:function(a,b){H.z(b,H.o(a,0))
if(!!a.fixed$length)H.a8(P.B("add"))
a.push(b)},
H:function(a,b){var z,y
H.t(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.a8(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
ge8:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.cr())},
bx:function(a,b){var z,y
H.k(b,{func:1,ret:P.T,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.aw(a))}return!1},
cA:function(a,b){if(!!a.immutable$list)H.a8(P.B("sort"))
H.iM(a,J.kU(),H.o(a,0))},
aj:function(a){return this.cA(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aP(a[z],b))return!0
return!1},
l:function(a){return P.cq(a,"[","]")},
gw:function(a){return new J.db(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.bd(a)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aL(a,b))
if(b>=a.length||b<0)throw H.b(H.aL(a,b))
return a[b]},
i:function(a,b,c){H.u(b)
H.z(c,H.o(a,0))
if(!!a.immutable$list)H.a8(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aL(a,b))
if(b>=a.length||b<0)throw H.b(H.aL(a,b))
a[b]=c},
$isx:1,
$asx:I.bk,
$isl:1,
$isa:1,
p:{
hF:function(a,b){return J.cs(H.j(a,[b]))},
cs:function(a){H.V(a)
a.fixed$length=Array
return a},
mk:[function(a,b){return J.fe(H.eD(a,"$isa0"),H.eD(b,"$isa0"))},"$2","kU",8,0,31]}},
ml:{"^":"bu;$ti"},
db:{"^":"c;a,b,c,0d,$ti",
sba:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.G(z))
x=this.c
if(x>=y){this.sba(null)
return!1}this.sba(z[x]);++this.c
return!0},
$isb6:1},
bv:{"^":"h;",
M:function(a,b){var z
H.cT(b)
if(typeof b!=="number")throw H.b(H.aZ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaf(b)
if(this.gaf(a)===z)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf:function(a){return a===0?1/a<0:a<0},
ca:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.B(""+a+".toInt()"))},
dK:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.B(""+a+".ceil()"))},
e2:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.B(""+a+".floor()"))},
dL:function(a,b,c){if(this.M(b,c)>0)throw H.b(H.aZ(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
el:function(a){return a},
en:function(a,b){var z
if(b>20)throw H.b(P.bf(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bt(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bt(a,b)},
bt:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.B("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
br:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dw:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.b(H.aZ(b))
return a>b},
$isa0:1,
$asa0:function(){return[P.H]},
$isak:1,
$isH:1},
dB:{"^":"bv;",$isC:1},
dA:{"^":"bv;"},
bw:{"^":"h;",
ap:function(a,b){if(b>=a.length)throw H.b(H.aL(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.v(b)
if(typeof b!=="string")throw H.b(P.da(b,null,null))
return a+b},
cC:function(a,b,c){var z
if(c>a.length)throw H.b(P.bf(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cB:function(a,b){return this.cC(a,b,0)},
cE:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bW(b,null,null))
if(b>c)throw H.b(P.bW(b,null,null))
if(c>a.length)throw H.b(P.bW(c,null,null))
return a.substring(b,c)},
cD:function(a,b){return this.cE(a,b,null)},
em:function(a){return a.toLowerCase()},
dO:function(a,b,c){if(c>a.length)throw H.b(P.bf(c,0,a.length,null,null))
return H.lx(a,b,c)},
M:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.b(H.aZ(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
l:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.b(H.aL(a,b))
return a[b]},
$isx:1,
$asx:I.bk,
$isa0:1,
$asa0:function(){return[P.d]},
$isij:1,
$isd:1}}],["","",,H,{"^":"",
cr:function(){return new P.cB("No element")},
hE:function(){return new P.cB("Too many elements")},
iM:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.C,args:[c,c]})
H.bA(a,0,J.al(a)-1,b,c)},
bA:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.iL(a,b,c,d,e)
else H.iK(a,b,c,d,e)},
iL:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.U(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iK:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.b.G(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.G(b+a0,2)
v=w-z
u=w+z
t=J.U(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
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
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aP(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.U()
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
if(typeof d!=="number")return d.U()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.U()
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
H.bA(a,b,m-2,a1,a2)
H.bA(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aP(a1.$2(t.h(a,m),r),0);)++m
for(;J.aP(a1.$2(t.h(a,l),p),0);)--l
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
break}}H.bA(a,m,l,a1,a2)}else H.bA(a,m,l,a1,a2)},
dr:{"^":"l;"},
b9:{"^":"dr;$ti",
gw:function(a){return new H.dE(this,this.gj(this),0,[H.cQ(this,"b9",0)])},
aL:function(a,b){return this.cH(0,H.k(b,{func:1,ret:P.T,args:[H.cQ(this,"b9",0)]}))}},
dE:{"^":"c;a,b,c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.U(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.aw(z))
w=this.c
if(w>=x){this.sbb(null)
return!1}this.sbb(y.q(z,w));++this.c
return!0},
$isb6:1},
hZ:{"^":"b9;a,b,$ti",
gj:function(a){return J.al(this.a)},
q:function(a,b){return this.b.$1(J.fn(this.a,b))},
$asb9:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dZ:{"^":"l;a,b,$ti",
gw:function(a){return new H.j9(J.bO(this.a),this.b,this.$ti)}},
j9:{"^":"b6;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bT:{"^":"c;$ti"}}],["","",,H,{"^":"",
aO:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ld:function(a){return init.types[H.u(a)]},
lo:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isy},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bo(a)
if(typeof z!=="string")throw H.b(H.aZ(a))
return z},
bd:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
be:function(a){return H.im(a)+H.c2(H.ar(a),0,null)},
im:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbh){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aO(w.length>1&&C.i.ap(w,0)===36?C.i.cD(w,1):w)},
Y:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iu:function(a){return a.b?H.Y(a).getUTCFullYear()+0:H.Y(a).getFullYear()+0},
is:function(a){return a.b?H.Y(a).getUTCMonth()+1:H.Y(a).getMonth()+1},
io:function(a){return a.b?H.Y(a).getUTCDate()+0:H.Y(a).getDate()+0},
ip:function(a){return a.b?H.Y(a).getUTCHours()+0:H.Y(a).getHours()+0},
ir:function(a){return a.b?H.Y(a).getUTCMinutes()+0:H.Y(a).getMinutes()+0},
it:function(a){return a.b?H.Y(a).getUTCSeconds()+0:H.Y(a).getSeconds()+0},
iq:function(a){return a.b?H.Y(a).getUTCMilliseconds()+0:H.Y(a).getMilliseconds()+0},
as:function(a){throw H.b(H.aZ(a))},
i:function(a,b){if(a==null)J.al(a)
throw H.b(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.av(!0,b,"index",null)
z=H.u(J.al(a))
if(!(b<0)){if(typeof z!=="number")return H.as(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bW(b,"index",null)},
aZ:function(a){return new P.av(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.bV()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eG})
z.name=""}else z.toString=H.eG
return z},
eG:function(){return J.bo(this.dartException)},
a8:function(a){throw H.b(a)},
G:function(a){throw H.b(P.aw(a))},
a_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.br(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dK(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eM()
u=$.eN()
t=$.eO()
s=$.eP()
r=$.eS()
q=$.eT()
p=$.eR()
$.eQ()
o=$.eV()
n=$.eU()
m=v.L(y)
if(m!=null)return z.$1(H.cv(H.v(y),m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.cv(H.v(y),m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dK(H.v(y),m))}}return z.$1(new H.j5(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dP()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.av(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dP()
return a},
aM:function(a){var z
if(a==null)return new H.ef(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ef(a)},
la:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ln:function(a,b,c,d,e,f){H.f(a,"$isbs")
switch(H.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.dv("Unsupported number of arguments for wrapped closure"))},
aq:function(a,b){var z
H.u(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ln)
a.$identity=z
return z},
fY:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.iz(z).r}else x=d
w=e?Object.create(new H.iN().constructor.prototype):Object.create(new H.ci(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.J()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dg(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ld,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.de:H.cj
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dg(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fV:function(a,b,c,d){var z=H.cj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dg:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fX(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fV(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.J()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b3
if(v==null){v=H.bR("self")
$.b3=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.J()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b3
if(v==null){v=H.bR("self")
$.b3=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fW:function(a,b,c,d){var z,y
z=H.cj
y=H.de
switch(b?-1:a){case 0:throw H.b(H.iF("Intercepted function with no arguments."))
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
z=$.b3
if(z==null){z=H.bR("self")
$.b3=z}y=$.dd
if(y==null){y=H.bR("receiver")
$.dd=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fW(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ae
if(typeof y!=="number")return y.J()
$.ae=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ae
if(typeof y!=="number")return y.J()
$.ae=y+1
return new Function(z+y+"}")()},
cN:function(a,b,c,d,e,f,g){return H.fY(a,b,H.u(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.aa(a,"String"))},
cO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aa(a,"double"))},
cT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aa(a,"num"))},
c4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.aa(a,"bool"))},
u:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.aa(a,"int"))},
cU:function(a,b){throw H.b(H.aa(a,H.aO(H.v(b).substring(3))))},
lv:function(a,b){throw H.b(H.df(a,H.aO(H.v(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cU(a,b)},
at:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.lv(a,b)},
eD:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cU(a,b)},
V:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.b(H.aa(a,"List<dynamic>"))},
lp:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cU(a,b)},
cP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.u(z)]
else return a.$S()}return},
bG:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cP(J.A(a))
if(z==null)return!1
return H.el(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cJ)return a
$.cJ=!0
try{if(H.bG(a,b))return a
z=H.bK(b)
y=H.aa(a,z)
throw H.b(y)}finally{$.cJ=!1}},
b_:function(a,b){if(a!=null&&!H.cM(a,b))H.a8(H.aa(a,H.bK(b)))
return a},
ep:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cP(z)
if(y!=null)return H.bK(y)
return"Closure"}return H.be(a)},
ly:function(a){throw H.b(new P.h4(H.v(a)))},
ez:function(a){return init.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
nO:function(a,b,c){return H.b1(a["$as"+H.e(c)],H.ar(b))},
b0:function(a,b,c,d){var z
H.v(c)
H.u(d)
z=H.b1(a["$as"+H.e(c)],H.ar(b))
return z==null?null:z[d]},
cQ:function(a,b,c){var z
H.v(b)
H.u(c)
z=H.b1(a["$as"+H.e(b)],H.ar(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.u(b)
z=H.ar(a)
return z==null?null:z[b]},
bK:function(a){return H.aK(a,null)},
aK:function(a,b){var z,y
H.t(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aO(a[0].builtin$cls)+H.c2(a,1,b)
if(typeof a=="function")return H.aO(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.u(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.kT(a,b)
if('futureOr' in a)return"FutureOr<"+H.aK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.j([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.k(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aK(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aK(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aK(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l9(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aK(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c2:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cC("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aK(u,c)}return"<"+z.l(0)+">"},
lc:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cP(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ar(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ap:function(a,b,c,d){var z,y
H.v(b)
H.V(c)
H.v(d)
if(a==null)return!1
z=H.ar(a)
y=J.A(a)
if(y[b]==null)return!1
return H.es(H.b1(y[d],z),null,c,null)},
bL:function(a,b,c,d){H.v(b)
H.V(c)
H.v(d)
if(a==null)return a
if(H.ap(a,b,c,d))return a
throw H.b(H.df(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aO(b.substring(3))+H.c2(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.v(b)
H.V(c)
H.v(d)
if(a==null)return a
if(H.ap(a,b,c,d))return a
throw H.b(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aO(b.substring(3))+H.c2(c,0,null),init.mangledGlobalNames)))},
es:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
nK:function(a,b,c){return a.apply(b,H.b1(J.A(b)["$as"+H.e(c)],H.ar(b)))},
eB:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="D"||a===-1||a===-2||H.eB(z)}return!1},
cM:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="D"||b===-1||b===-2||H.eB(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cM(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bG(a,b)}z=J.A(a).constructor
y=H.ar(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a5(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cM(a,b))throw H.b(H.aa(a,H.bK(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.el(a,b,c,d)
if('func' in a)return c.builtin$cls==="bs"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"a1" in y.prototype))return!1
w=y.prototype["$as"+"a1"]
v=H.b1(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.es(H.b1(r,z),b,u,d)},
el:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lu(m,b,l,d)},
lu:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
nL:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
lq:function(a){var z,y,x,w,v,u
z=H.v($.eA.$1(a))
y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.er.$2(a,z))
if(z!=null){y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c9(x)
$.c5[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c8[z]=x
return x}if(v==="-"){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eE(a,x)
if(v==="*")throw H.b(P.cE(z))
if(init.leafTags[z]===true){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eE(a,x)},
eE:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cS(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c9:function(a){return J.cS(a,!1,null,!!a.$isy)},
lt:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c9(z)
else return J.cS(z,c,null,null)},
ll:function(){if(!0===$.cR)return
$.cR=!0
H.lm()},
lm:function(){var z,y,x,w,v,u,t,s
$.c5=Object.create(null)
$.c8=Object.create(null)
H.lh()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eF.$1(v)
if(u!=null){t=H.lt(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lh:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aY(C.N,H.aY(C.S,H.aY(C.A,H.aY(C.A,H.aY(C.R,H.aY(C.O,H.aY(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eA=new H.li(v)
$.er=new H.lj(u)
$.eF=new H.lk(t)},
aY:function(a,b){return a(b)||b},
lx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iy:{"^":"c;a,b,c,d,e,f,r,0x",p:{
iz:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cs(z)
y=z[0]
x=z[1]
return new H.iy(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j0:{"^":"c;a,b,c,d,e,f",
L:function(a){var z,y,x
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
if(z==null)z=H.j([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ih:{"^":"P;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dK:function(a,b){return new H.ih(a,b==null?null:b.method)}}},
hI:{"^":"P;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cv:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hI(a,y,z?null:b.receiver)}}},
j5:{"^":"P;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lz:{"^":"n:7;a",
$1:function(a){if(!!J.A(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ef:{"^":"c;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isQ:1},
n:{"^":"c;",
l:function(a){return"Closure '"+H.be(this).trim()+"'"},
gcq:function(){return this},
$isbs:1,
gcq:function(){return this}},
dR:{"^":"n;"},
iN:{"^":"dR;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aO(z)+"'"}},
ci:{"^":"dR;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ci))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.bd(this.a)
else y=typeof z!=="object"?J.au(z):H.bd(z)
return(y^H.bd(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.be(z)+"'")},
p:{
cj:function(a){return a.a},
de:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.ci("self","target","receiver","name")
y=J.cs(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j1:{"^":"P;a",
l:function(a){return this.a},
p:{
aa:function(a,b){return new H.j1("TypeError: "+H.e(P.bS(a))+": type '"+H.ep(a)+"' is not a subtype of type '"+b+"'")}}},
fT:{"^":"P;a",
l:function(a){return this.a},
p:{
df:function(a,b){return new H.fT("CastError: "+H.e(P.bS(a))+": type '"+H.ep(a)+"' is not a subtype of type '"+b+"'")}}},
iE:{"^":"P;a",
l:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iF:function(a){return new H.iE(a)}}},
dW:{"^":"c;a,0b,0c,0d",
gad:function(){var z=this.b
if(z==null){z=H.bK(this.a)
this.b=z}return z},
l:function(a){return this.gad()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gad())
this.d=z}return z},
C:function(a,b){if(b==null)return!1
return b instanceof H.dW&&this.gad()===b.gad()}},
cu:{"^":"cy;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ao(this,[H.o(this,0)])},
ae:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.da(z,b)}else{y=this.e6(b)
return y}},
e6:function(a){var z=this.d
if(z==null)return!1
return this.aF(this.au(z,J.au(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aa(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aa(w,b)
x=y==null?null:y.b
return x}else return this.e7(b)},
e7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.au(z,J.au(a)&0x3ffffff)
x=this.aF(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aw()
this.b=z}this.bc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aw()
this.c=y}this.bc(y,b,c)}else{x=this.d
if(x==null){x=this.aw()
this.d=x}w=J.au(b)&0x3ffffff
v=this.au(x,w)
if(v==null)this.ay(x,w,[this.an(b,c)])
else{u=this.aF(v,b)
if(u>=0)v[u].b=c
else v.push(this.an(b,c))}}},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.be()}},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aw(this))
z=z.c}},
bc:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.aa(a,b)
if(z==null)this.ay(a,b,this.an(b,c))
else z.b=c},
be:function(){this.r=this.r+1&67108863},
an:function(a,b){var z,y
z=new H.hP(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.be()
return z},
aF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aP(a[y].a,b))return y
return-1},
l:function(a){return P.dF(this)},
aa:function(a,b){return a[b]},
au:function(a,b){return a[b]},
ay:function(a,b,c){a[b]=c},
dc:function(a,b){delete a[b]},
da:function(a,b){return this.aa(a,b)!=null},
aw:function(){var z=Object.create(null)
this.ay(z,"<non-identifier-key>",z)
this.dc(z,"<non-identifier-key>")
return z},
$isdC:1},
hP:{"^":"c;a,b,0c,0d"},
ao:{"^":"dr;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hQ(z,z.r,this.$ti)
y.c=z.e
return y}},
hQ:{"^":"c;a,b,0c,0d,$ti",
sbd:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aw(z))
else{z=this.c
if(z==null){this.sbd(null)
return!1}else{this.sbd(z.a)
this.c=this.c.c
return!0}}},
$isb6:1},
li:{"^":"n:7;a",
$1:function(a){return this.a(a)}},
lj:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
lk:{"^":"n:15;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
l9:function(a){return J.hF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c1:function(a){var z,y
if(!!J.A(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
aj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aL(b,a))},
ib:{"^":"h;",$isj2:1,"%":"DataView;ArrayBufferView;cz|e9|ea|dI|eb|ec|aB"},
cz:{"^":"ib;",
gj:function(a){return a.length},
$isx:1,
$asx:I.bk,
$isy:1,
$asy:I.bk},
dI:{"^":"ea;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
i:function(a,b,c){H.u(b)
H.cO(c)
H.aj(b,a,a.length)
a[b]=c},
$asbT:function(){return[P.ak]},
$asp:function(){return[P.ak]},
$isl:1,
$asl:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
aB:{"^":"ec;",
i:function(a,b,c){H.u(b)
H.u(c)
H.aj(b,a,a.length)
a[b]=c},
$asbT:function(){return[P.C]},
$asp:function(){return[P.C]},
$isl:1,
$asl:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
ia:{"^":"dI;",$isan:1,"%":"Float32Array"},
mv:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mw:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$ishC:1,
"%":"Int32Array"},
mx:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Int8Array"},
my:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ic:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$isni:1,
"%":"Uint32Array"},
mz:{"^":"aB;",
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mA:{"^":"aB;",
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e9:{"^":"cz+p;"},
ea:{"^":"e9+bT;"},
eb:{"^":"cz+p;"},
ec:{"^":"eb+bT;"}}],["","",,P,{"^":"",
jg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l1()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aq(new P.ji(z),1)).observe(y,{childList:true})
return new P.jh(z,y,x)}else if(self.setImmediate!=null)return P.l2()
return P.l3()},
nr:[function(a){self.scheduleImmediate(H.aq(new P.jj(H.k(a,{func:1,ret:-1})),0))},"$1","l1",4,0,3],
ns:[function(a){self.setImmediate(H.aq(new P.jk(H.k(a,{func:1,ret:-1})),0))},"$1","l2",4,0,3],
nt:[function(a){H.k(a,{func:1,ret:-1})
P.kz(0,a)},"$1","l3",4,0,3],
ho:function(a,b,c){var z
H.f(b,"$isQ")
if(a==null)a=new P.bV()
z=$.E
if(z!==C.e)z.toString
z=new P.O(0,z,[c])
z.bi(a,b)
return z},
hp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.t(a,"$isl",[[P.a1,d]],"$asl")
s=[P.a,d]
r=[s]
y=new P.O(0,$.E,r)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hr(z,b,!1,y)
try{for(q=a,p=q.length,o=0,n=0;o<q.length;q.length===p||(0,H.G)(q),++o){w=q[o]
v=n
w.aJ(new P.hq(z,v,y,b,!1,d),x,null)
n=++z.b}if(n===0){r=new P.O(0,$.E,r)
r.bh(C.Z)
return r}r=new Array(n)
r.fixed$length=Array
z.a=H.j(r,[d])}catch(m){u=H.a_(m)
t=H.aM(m)
if(z.b===0||!1)return P.ho(u,t,s)
else{z.c=u
z.d=t}}return y},
kY:function(a,b){if(H.bG(a,{func:1,args:[P.c,P.Q]}))return H.k(a,{func:1,ret:null,args:[P.c,P.Q]})
if(H.bG(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.da(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kW:function(){var z,y
for(;z=$.aW,z!=null;){$.bj=null
y=z.b
$.aW=y
if(y==null)$.bi=null
z.a.$0()}},
nF:[function(){$.cK=!0
try{P.kW()}finally{$.bj=null
$.cK=!1
if($.aW!=null)$.cW().$1(P.et())}},"$0","et",0,0,1],
eo:function(a){var z=new P.e0(H.k(a,{func:1,ret:-1}))
if($.aW==null){$.bi=z
$.aW=z
if(!$.cK)$.cW().$1(P.et())}else{$.bi.b=z
$.bi=z}},
l0:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aW
if(z==null){P.eo(a)
$.bj=$.bi
return}y=new P.e0(a)
x=$.bj
if(x==null){y.b=z
$.bj=y
$.aW=y}else{y.b=x.b
x.b=y
$.bj=y
if(y.b==null)$.bi=y}},
lw:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.E
if(C.e===y){P.aX(null,null,C.e,a)
return}y.toString
P.aX(null,null,y,H.k(y.bA(a),z))},
kR:function(a,b,c){a.dJ(0)
b.a8(c)},
c3:function(a,b,c,d,e){var z={}
z.a=d
P.l0(new P.kZ(z,e))},
em:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
en:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
l_:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
aX:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bA(d):c.dG(d,-1)
P.eo(d)},
ji:{"^":"n:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jh:{"^":"n:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jj:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jk:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ky:{"^":"c;a,0b,c",
d5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aq(new P.kA(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
p:{
kz:function(a,b){var z=new P.ky(!0,0)
z.d5(a,b)
return z}}},
kA:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a1:{"^":"c;$ti"},
hr:{"^":"n:16;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.F(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.F(z.c,z.d)}},
hq:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bk(z.a)}else if(z.b===0&&!this.e)this.c.F(z.c,z.d)},
$S:function(){return{func:1,ret:P.D,args:[this.f]}}},
e3:{"^":"c;$ti",
dN:function(a,b){if(a==null)a=new P.bV()
if(this.a.a!==0)throw H.b(P.bB("Future already completed"))
$.E.toString
this.F(a,b)},
dM:function(a){return this.dN(a,null)}},
cH:{"^":"e3;a,$ti",
a2:function(a,b){var z
H.b_(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.b(P.bB("Future already completed"))
z.bh(b)},
F:function(a,b){this.a.bi(a,b)}},
kt:{"^":"e3;a,$ti",
a2:function(a,b){var z
H.b_(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.b(P.bB("Future already completed"))
z.a8(b)},
F:function(a,b){this.a.F(a,b)}},
aU:{"^":"c;0a,b,c,d,e,$ti",
ea:function(a){if(this.c!==6)return!0
return this.b.b.aH(H.k(this.d,{func:1,ret:P.T,args:[P.c]}),a.a,P.T,P.c)},
e5:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bG(z,{func:1,args:[P.c,P.Q]}))return H.b_(w.eh(z,a.a,a.b,null,y,P.Q),x)
else return H.b_(w.aH(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
O:{"^":"c;bs:a<,b,0dt:c<,$ti",
aJ:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kY(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.O(0,$.E,[c])
w=b==null?1:3
this.bg(new P.aU(x,w,a,b,[z,c]))
return x},
ag:function(a,b){return this.aJ(a,null,b)},
bg:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaU")
this.c=a}else{if(z===2){y=H.f(this.c,"$isO")
z=y.a
if(z<4){y.bg(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aX(null,null,z,H.k(new P.jD(this,a),{func:1,ret:-1}))}},
bp:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaU")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isO")
y=u.a
if(y<4){u.bp(a)
return}this.a=y
this.c=u.c}z.a=this.ac(a)
y=this.b
y.toString
P.aX(null,null,y,H.k(new P.jK(z,this),{func:1,ret:-1}))}},
ab:function(){var z=H.f(this.c,"$isaU")
this.c=null
return this.ac(z)},
ac:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a8:function(a){var z,y,x
z=H.o(this,0)
H.b_(a,{futureOr:1,type:z})
y=this.$ti
if(H.ap(a,"$isa1",y,"$asa1"))if(H.ap(a,"$isO",y,null))P.bZ(a,this)
else P.e4(a,this)
else{x=this.ab()
H.z(a,z)
this.a=4
this.c=a
P.aV(this,x)}},
bk:function(a){var z
H.z(a,H.o(this,0))
z=this.ab()
this.a=4
this.c=a
P.aV(this,z)},
F:function(a,b){var z
H.f(b,"$isQ")
z=this.ab()
this.a=8
this.c=new P.a2(a,b)
P.aV(this,z)},
bh:function(a){var z
H.b_(a,{futureOr:1,type:H.o(this,0)})
if(H.ap(a,"$isa1",this.$ti,"$asa1")){this.d8(a)
return}this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.k(new P.jF(this,a),{func:1,ret:-1}))},
d8:function(a){var z=this.$ti
H.t(a,"$isa1",z,"$asa1")
if(H.ap(a,"$isO",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.k(new P.jJ(this,a),{func:1,ret:-1}))}else P.bZ(a,this)
return}P.e4(a,this)},
bi:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.k(new P.jE(this,a,b),{func:1,ret:-1}))},
$isa1:1,
p:{
e4:function(a,b){var z,y,x
b.a=1
try{a.aJ(new P.jG(b),new P.jH(b),null)}catch(x){z=H.a_(x)
y=H.aM(x)
P.lw(new P.jI(b,z,y))}},
bZ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isO")
if(z>=4){y=b.ab()
b.a=a.a
b.c=a.c
P.aV(b,y)}else{y=H.f(b.c,"$isaU")
b.a=2
b.c=a
a.bp(y)}},
aV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa2")
y=y.b
u=v.a
t=v.b
y.toString
P.c3(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isa2")
y=y.b
u=r.a
t=r.b
y.toString
P.c3(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.jN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jM(x,b,r).$0()}else if((y&2)!==0)new P.jL(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.A(y).$isa1){if(y.a>=4){n=H.f(t.c,"$isaU")
t.c=null
b=t.ac(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bZ(y,t)
return}}m=b.b
n=H.f(m.c,"$isaU")
m.c=null
b=m.ac(n)
y=x.a
u=x.b
if(!y){H.z(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa2")
m.a=8
m.c=u}z.a=m
y=m}}}},
jD:{"^":"n:0;a,b",
$0:function(){P.aV(this.a,this.b)}},
jK:{"^":"n:0;a,b",
$0:function(){P.aV(this.b,this.a.a)}},
jG:{"^":"n:8;a",
$1:function(a){var z=this.a
z.a=0
z.a8(a)}},
jH:{"^":"n:17;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.F(a,b)},
$1:function(a){return this.$2(a,null)}},
jI:{"^":"n:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
jF:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bk(H.z(this.b,H.o(z,0)))}},
jJ:{"^":"n:0;a,b",
$0:function(){P.bZ(this.b,this.a)}},
jE:{"^":"n:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
jN:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c7(H.k(w.d,{func:1}),null)}catch(v){y=H.a_(v)
x=H.aM(v)
if(this.d){w=H.f(this.a.a.c,"$isa2").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa2")
else u.b=new P.a2(y,x)
u.a=!0
return}if(!!J.A(z).$isa1){if(z instanceof P.O&&z.gbs()>=4){if(z.gbs()===8){w=this.b
w.b=H.f(z.gdt(),"$isa2")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ag(new P.jO(t),null)
w.a=!1}}},
jO:{"^":"n:18;a",
$1:function(a){return this.a}},
jM:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aH(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a_(t)
y=H.aM(t)
x=this.a
x.b=new P.a2(z,y)
x.a=!0}}},
jL:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa2")
w=this.c
if(w.ea(z)&&w.e!=null){v=this.b
v.b=w.e5(z)
v.a=!1}}catch(u){y=H.a_(u)
x=H.aM(u)
w=H.f(this.a.a.c,"$isa2")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a2(y,x)
s.a=!0}}},
e0:{"^":"c;a,0b"},
iR:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.O(0,$.E,[P.C])
z.a=0
x=H.o(this,0)
w=H.k(new P.iW(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.iX(z,y),{func:1,ret:-1})
W.ai(this.a,this.b,w,!1,x)
return y},
ge1:function(a){var z,y,x,w
z={}
y=new P.O(0,$.E,this.$ti)
z.a=null
x=H.o(this,0)
w=H.k(new P.iU(z,this,y),{func:1,ret:-1,args:[x]})
H.k(new P.iV(y),{func:1,ret:-1})
z.a=W.ai(this.a,this.b,w,!1,x)
return y}},
iW:{"^":"n;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.o(this.b,0)]}}},
iX:{"^":"n:0;a,b",
$0:function(){this.b.a8(this.a.a)}},
iU:{"^":"n;a,b,c",
$1:function(a){H.z(a,H.o(this.b,0))
P.kR(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.D,args:[H.o(this.b,0)]}}},
iV:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.cr()
throw H.b(x)}catch(w){z=H.a_(w)
y=H.aM(w)
$.E.toString
this.a.F(z,y)}}},
iS:{"^":"c;"},
iT:{"^":"c;"},
a2:{"^":"c;a,b",
l:function(a){return H.e(this.a)},
$isP:1},
kG:{"^":"c;",$isnp:1},
kZ:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bV()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.l(0)
throw x}},
kc:{"^":"kG;",
ei:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.E){a.$0()
return}P.em(null,null,this,a,-1)}catch(x){z=H.a_(x)
y=H.aM(x)
P.c3(null,null,this,z,H.f(y,"$isQ"))}},
ej:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.E){a.$1(b)
return}P.en(null,null,this,a,b,-1,c)}catch(x){z=H.a_(x)
y=H.aM(x)
P.c3(null,null,this,z,H.f(y,"$isQ"))}},
dG:function(a,b){return new P.ke(this,H.k(a,{func:1,ret:b}),b)},
bA:function(a){return new P.kd(this,H.k(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.kf(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c7:function(a,b){H.k(a,{func:1,ret:b})
if($.E===C.e)return a.$0()
return P.em(null,null,this,a,b)},
aH:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.E===C.e)return a.$1(b)
return P.en(null,null,this,a,b,c,d)},
eh:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.E===C.e)return a.$2(b,c)
return P.l_(null,null,this,a,b,c,d,e,f)}},
ke:{"^":"n;a,b,c",
$0:function(){return this.a.c7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kd:{"^":"n:1;a,b",
$0:function(){return this.a.ei(this.b)}},
kf:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ej(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dD:function(a,b,c){H.V(a)
return H.t(H.la(a,new H.cu(0,0,[b,c])),"$isdC",[b,c],"$asdC")},
a3:function(a,b){return new H.cu(0,0,[a,b])},
hR:function(){return new H.cu(0,0,[null,null])},
a9:function(a,b,c,d){return new P.jY(0,0,[d])},
hD:function(a,b,c){var z,y
if(P.cL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.j([],[P.d])
y=$.bl()
C.a.k(y,a)
try{P.kV(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dQ(b,H.lp(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cq:function(a,b,c){var z,y,x
if(P.cL(a))return b+"..."+c
z=new P.cC(b)
y=$.bl()
C.a.k(y,a)
try{x=z
x.a=P.dQ(x.gW(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gW()+c
y=z.gW()
return y.charCodeAt(0)==0?y:y},
cL:function(a){var z,y
for(z=0;y=$.bl(),z<y.length;++z)if(a===y[z])return!0
return!1},
kV:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.k(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.k(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.k(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.k(b,q)
C.a.k(b,u)
C.a.k(b,v)},
cx:function(a,b){var z,y,x
z=P.a9(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x)z.k(0,H.z(a[x],b))
return z},
dF:function(a){var z,y,x
z={}
if(P.cL(a))return"{...}"
y=new P.cC("")
try{C.a.k($.bl(),a)
x=y
x.a=x.gW()+"{"
z.a=!0
J.fq(a,new P.hY(z,y))
z=y
z.a=z.gW()+"}"}finally{z=$.bl()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gW()
return z.charCodeAt(0)==0?z:z},
jY:{"^":"jQ;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e8(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbF")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbF")!=null}else return this.d9(b)},
d9:function(a){var z=this.d
if(z==null)return!1
return this.at(this.bn(z,a),a)>=0},
k:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cI()
this.b=z}return this.bf(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cI()
this.c=y}return this.bf(y,b)}else return this.d6(0,b)},
d6:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cI()
this.d=z}y=this.bl(b)
x=z[y]
if(x==null)z[y]=[this.ax(b)]
else{if(this.at(x,b)>=0)return!1
x.push(this.ax(b))}return!0},
c6:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bq(this.c,b)
else return this.dl(0,b)},
dl:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bn(z,b)
x=this.at(y,b)
if(x<0)return!1
this.bu(y.splice(x,1)[0])
return!0},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.av()}},
bf:function(a,b){H.z(b,H.o(this,0))
if(H.f(a[b],"$isbF")!=null)return!1
a[b]=this.ax(b)
return!0},
bq:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbF")
if(z==null)return!1
this.bu(z)
delete a[b]
return!0},
av:function(){this.r=this.r+1&67108863},
ax:function(a){var z,y
z=new P.bF(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.av()
return z},
bu:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.av()},
bl:function(a){return J.au(a)&0x3ffffff},
bn:function(a,b){return a[this.bl(b)]},
at:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aP(a[y].a,b))return y
return-1},
p:{
cI:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bF:{"^":"c;a,0b,0c"},
e8:{"^":"c;a,b,0c,0d,$ti",
sbj:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aw(z))
else{z=this.c
if(z==null){this.sbj(null)
return!1}else{this.sbj(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb6:1,
p:{
jZ:function(a,b,c){var z=new P.e8(a,b,[c])
z.c=a.e
return z}}},
jQ:{"^":"iG;"},
hS:{"^":"k_;",$isl:1,$isa:1},
p:{"^":"c;$ti",
gw:function(a){return new H.dE(a,this.gj(a),0,[H.b0(this,a,"p",0)])},
q:function(a,b){return this.h(a,b)},
e3:function(a,b,c,d){var z,y,x
H.z(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b0(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.aw(a))}return y},
bV:function(a,b,c,d){var z
H.z(d,H.b0(this,a,"p",0))
P.ix(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
l:function(a){return P.cq(a,"[","]")}},
cy:{"^":"R;"},
hY:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
R:{"^":"c;$ti",
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.b0(this,a,"R",0),H.b0(this,a,"R",1)]})
for(z=J.bO(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.al(this.gD(a))},
l:function(a){return P.dF(a)},
$isJ:1},
iH:{"^":"c;$ti",
H:function(a,b){var z
for(z=J.bO(H.t(b,"$isl",this.$ti,"$asl"));z.t();)this.k(0,z.gA(z))},
l:function(a){return P.cq(this,"{","}")},
$isl:1,
$ismS:1},
iG:{"^":"iH;"},
k_:{"^":"c+p;"}}],["","",,P,{"^":"",
kX:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.aZ(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.a_(x)
w=String(y)
throw H.b(new P.hl(w,null,null))}w=P.c0(z)
return w},
c0:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jU(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.c0(a[z])
return a},
jU:{"^":"cy;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dk(b):y}},
gj:function(a){return this.b==null?this.c.a:this.a9().length},
gD:function(a){var z
if(this.b==null){z=this.c
return new H.ao(z,[H.o(z,0)])}return new P.jV(this)},
B:function(a,b){var z,y,x,w
H.k(b,{func:1,ret:-1,args:[P.d,,]})
if(this.b==null)return this.c.B(0,b)
z=this.a9()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c0(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(P.aw(this))}},
a9:function(){var z=H.V(this.c)
if(z==null){z=H.j(Object.keys(this.a),[P.d])
this.c=z}return z},
dk:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c0(this.a[a])
return this.b[a]=z},
$asR:function(){return[P.d,null]},
$asJ:function(){return[P.d,null]}},
jV:{"^":"b9;a",
gj:function(a){var z=this.a
return z.gj(z)},
q:function(a,b){var z=this.a
if(z.b==null)z=z.gD(z).q(0,b)
else{z=z.a9()
if(b<0||b>=z.length)return H.i(z,b)
z=z[b]}return z},
gw:function(a){var z=this.a
if(z.b==null){z=z.gD(z)
z=z.gw(z)}else{z=z.a9()
z=new J.db(z,z.length,0,[H.o(z,0)])}return z},
$asb9:function(){return[P.d]},
$asl:function(){return[P.d]}},
dh:{"^":"c;$ti"},
dk:{"^":"iT;$ti"},
hJ:{"^":"dh;a,b",
dW:function(a,b,c){var z=P.kX(b,this.gdX().a)
return z},
dV:function(a,b){return this.dW(a,b,null)},
gdX:function(){return C.V},
$asdh:function(){return[P.c,P.d]}},
hK:{"^":"dk;a",
$asdk:function(){return[P.d,P.c]}}}],["","",,P,{"^":"",
hh:function(a){if(a instanceof H.n)return a.l(0)
return"Instance of '"+H.be(a)+"'"},
bS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bo(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hh(a)},
dv:function(a){return new P.jy(a)},
a7:function(a){H.bJ(H.e(a))},
T:{"^":"c;"},
"+bool":0,
bq:{"^":"c;a,b",
C:function(a,b){if(b==null)return!1
return b instanceof P.bq&&this.a===b.a&&this.b===b.b},
M:function(a,b){return C.b.M(this.a,H.f(b,"$isbq").a)},
gv:function(a){var z=this.a
return(z^C.b.br(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t
z=P.h5(H.iu(this))
y=P.br(H.is(this))
x=P.br(H.io(this))
w=P.br(H.ip(this))
v=P.br(H.ir(this))
u=P.br(H.it(this))
t=P.h6(H.iq(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa0:1,
$asa0:function(){return[P.bq]},
p:{
h5:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
br:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"H;"},
"+double":0,
b4:{"^":"c;a",
U:function(a,b){return C.b.U(this.a,H.f(b,"$isb4").a)},
C:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.b.M(this.a,H.f(b,"$isb4").a)},
l:function(a){var z,y,x,w,v
z=new P.he()
y=this.a
if(y<0)return"-"+new P.b4(0-y).l(0)
x=z.$1(C.b.G(y,6e7)%60)
w=z.$1(C.b.G(y,1e6)%60)
v=new P.hd().$1(y%1e6)
return""+C.b.G(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa0:1,
$asa0:function(){return[P.b4]},
p:{
hc:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hd:{"^":"n:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
he:{"^":"n:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"c;"},
bV:{"^":"P;",
l:function(a){return"Throw of null."}},
av:{"^":"P;a,b,c,d",
gar:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaq:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gar()+y+x
if(!this.a)return w
v=this.gaq()
u=P.bS(this.b)
return w+v+": "+H.e(u)},
p:{
ch:function(a){return new P.av(!1,null,null,a)},
da:function(a,b,c){return new P.av(!0,a,b,c)}}},
dL:{"^":"av;e,f,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bW:function(a,b,c){return new P.dL(null,null,!0,a,b,"Value not in range")},
bf:function(a,b,c,d,e){return new P.dL(b,c,!0,a,d,"Invalid value")},
ix:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.bf(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.bf(b,a,c,"end",f))
return b}}},
hB:{"^":"av;e,j:f>,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y
z=H.u(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
I:function(a,b,c,d,e){var z=H.u(e==null?J.al(b):e)
return new P.hB(b,z,!0,a,c,"Index out of range")}}},
j6:{"^":"P;a",
l:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.j6(a)}}},
j4:{"^":"P;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cE:function(a){return new P.j4(a)}}},
cB:{"^":"P;a",
l:function(a){return"Bad state: "+this.a},
p:{
bB:function(a){return new P.cB(a)}}},
fZ:{"^":"P;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bS(z))+"."},
p:{
aw:function(a){return new P.fZ(a)}}},
dP:{"^":"c;",
l:function(a){return"Stack Overflow"},
$isP:1},
h4:{"^":"P;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jy:{"^":"c;a",
l:function(a){return"Exception: "+this.a}},
hl:{"^":"c;a,b,c",
l:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
bs:{"^":"c;"},
C:{"^":"H;"},
"+int":0,
l:{"^":"c;$ti",
aL:["cH",function(a,b){var z=H.cQ(this,"l",0)
return new H.dZ(this,H.k(b,{func:1,ret:P.T,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a8(P.bf(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.I(b,this,"index",null,y))},
l:function(a){return P.hD(this,"(",")")}},
b6:{"^":"c;$ti"},
a:{"^":"c;$ti",$isl:1},
"+List":0,
J:{"^":"c;$ti"},
D:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
H:{"^":"c;",$isa0:1,
$asa0:function(){return[P.H]}},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gv:function(a){return H.bd(this)},
l:function(a){return"Instance of '"+H.be(this)+"'"},
toString:function(){return this.l(this)}},
Q:{"^":"c;"},
d:{"^":"c;",$isa0:1,
$asa0:function(){return[P.d]},
$isij:1},
"+String":0,
cC:{"^":"c;W:a<",
gj:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dQ:function(a,b,c){var z=J.bO(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
hf:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).N(z,a,b,c)
y.toString
z=W.w
z=new H.dZ(new W.ab(y),H.k(new W.hg(),{func:1,ret:P.T,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a8(H.cr())
w=x.gA(x)
if(x.t())H.a8(H.hE())
return H.f(w,"$isW")},
du:function(a){H.f(a,"$isL")
return"wheel"},
b5:function(a){var z,y,x
z="element tag unavailable"
try{y=J.ft(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a_(x)}return z},
jv:function(a,b){return document.createElement(a)},
c_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e7:function(a,b,c,d){var z,y
z=W.c_(W.c_(W.c_(W.c_(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ek:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jp(a)
if(!!J.A(z).$isL)return z
return}else return H.f(a,"$isL")},
kS:function(a){if(!!J.A(a).$iscl)return a
return new P.jd([],[],!1).dP(a,!0)},
eq:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.e)return a
return z.dH(a,b)},
M:{"^":"W;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lA:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fM:{"^":"M;",
l:function(a){return String(a)},
$isfM:1,
"%":"HTMLAnchorElement"},
lB:{"^":"M;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
dc:{"^":"M;",$isdc:1,"%":"HTMLBaseElement"},
fQ:{"^":"h;","%":";Blob"},
bQ:{"^":"M;",$isbQ:1,"%":"HTMLBodyElement"},
bp:{"^":"M;0n:height=,0m:width=",
cr:function(a,b,c){var z=this.df(a,b,P.l4(c,null))
return z},
df:function(a,b,c){return a.getContext(b,c)},
$isbp:1,
"%":"HTMLCanvasElement"},
lG:{"^":"h;",
ai:function(a){return P.a6(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lH:{"^":"w;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
h0:{"^":"ck;",$ish0:1,"%":"CSSNumericValue|CSSUnitValue"},
lJ:{"^":"h3;0j:length=","%":"CSSPerspective"},
ax:{"^":"h;",$isax:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
h1:{"^":"jn;0j:length=",
aP:function(a,b){var z=this.dg(a,this.ao(a,b))
return z==null?"":z},
ao:function(a,b){var z,y
z=$.eJ()
y=z[b]
if(typeof y==="string")return y
y=this.dz(a,b)
z[b]=y
return y},
dz:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h7()+b
if(z in a)return z
return b},
dg:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h2:{"^":"c;",
gn:function(a){return this.aP(a,"height")},
gm:function(a){return this.aP(a,"width")}},
ck:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
h3:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lL:{"^":"ck;0j:length=","%":"CSSTransformValue"},
lM:{"^":"ck;0j:length=","%":"CSSUnparsedValue"},
lO:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h9:{"^":"M;","%":"HTMLDivElement"},
cl:{"^":"w;",
dB:function(a,b){return a.adoptNode(b)},
cs:function(a,b){return a.getElementById(b)},
ed:function(a,b){return a.querySelector(b)},
gc1:function(a){return new W.bD(a,"mousedown",!1,[W.X])},
gc2:function(a){return new W.bD(a,"mousemove",!1,[W.X])},
gc3:function(a){return new W.bD(a,"mouseup",!1,[W.X])},
gc4:function(a){return new W.bD(a,H.v(W.du(a)),!1,[W.aT])},
$iscl:1,
"%":"XMLDocument;Document"},
lP:{"^":"h;",
l:function(a){return String(a)},
"%":"DOMException"},
ha:{"^":"h;",
dT:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lQ:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.t(c,"$isZ",[P.H],"$asZ")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.Z,P.H]]},
$isy:1,
$asy:function(){return[[P.Z,P.H]]},
$asp:function(){return[[P.Z,P.H]]},
$isl:1,
$asl:function(){return[[P.Z,P.H]]},
$isa:1,
$asa:function(){return[[P.Z,P.H]]},
$asr:function(){return[[P.Z,P.H]]},
"%":"ClientRectList|DOMRectList"},
hb:{"^":"h;",
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
C:function(a,b){var z
if(b==null)return!1
if(!H.ap(b,"$isZ",[P.H],"$asZ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isZ:1,
$asZ:function(){return[P.H]},
"%":";DOMRectReadOnly"},
lR:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.v(c)
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.d]},
$isy:1,
$asy:function(){return[P.d]},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asr:function(){return[P.d]},
"%":"DOMStringList"},
lS:{"^":"h;0j:length=","%":"DOMTokenList"},
W:{"^":"w;0ek:tagName=",
gdE:function(a){return new W.ju(a)},
l:function(a){return a.localName},
N:["ak",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dt
if(z==null){z=H.j([],[W.af])
y=new W.dJ(z)
C.a.k(z,W.e5(null))
C.a.k(z,W.eg())
$.dt=y
d=y}else d=z
z=$.ds
if(z==null){z=new W.ej(d)
$.ds=z
c=z}else{z.a=d
c=z}}if($.am==null){z=document
y=z.implementation
y=(y&&C.K).dT(y,"")
$.am=y
$.cm=y.createRange()
y=$.am
y.toString
y=y.createElement("base")
H.f(y,"$isdc")
y.href=z.baseURI
z=$.am.head;(z&&C.L).I(z,y)}z=$.am
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbQ")}z=$.am
if(!!this.$isbQ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.am.body;(z&&C.p).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.X,a.tagName)){z=$.cm;(z&&C.D).cu(z,x)
z=$.cm
w=(z&&C.D).dR(z,b)}else{x.innerHTML=b
w=$.am.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.am.body
if(x==null?z!=null:x!==z)J.d3(x)
c.aU(w)
C.r.dB(document,w)
return w},function(a,b,c){return this.N(a,b,c,null)},"dS",null,null,"ges",5,5,null],
cz:function(a,b,c,d){a.textContent=null
this.I(a,this.N(a,b,c,d))},
cw:function(a,b){return this.cz(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
dm:function(a,b){return a.removeAttribute(b)},
gc1:function(a){return new W.bC(a,"mousedown",!1,[W.X])},
gc2:function(a){return new W.bC(a,"mousemove",!1,[W.X])},
gc3:function(a){return new W.bC(a,"mouseup",!1,[W.X])},
gc4:function(a){return new W.bC(a,H.v(W.du(a)),!1,[W.aT])},
$isW:1,
"%":";Element"},
hg:{"^":"n:19;",
$1:function(a){return!!J.A(H.f(a,"$isw")).$isW}},
lU:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
N:{"^":"h;",$isN:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
bw:["cF",function(a,b,c,d){H.k(c,{func:1,args:[W.N]})
if(c!=null)this.d7(a,b,c,!1)}],
d7:function(a,b,c,d){return a.addEventListener(b,H.aq(H.k(c,{func:1,args:[W.N]}),1),!1)},
dq:function(a,b,c,d){return a.removeEventListener(b,H.aq(H.k(c,{func:1,args:[W.N]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ed|ee|eh|ei"},
ay:{"^":"fQ;",$isay:1,"%":"File"},
ma:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isay")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asr:function(){return[W.ay]},
"%":"FileList"},
mb:{"^":"L;0j:length=","%":"FileWriter"},
me:{"^":"M;0j:length=","%":"HTMLFormElement"},
az:{"^":"h;",$isaz:1,"%":"Gamepad"},
ht:{"^":"M;","%":"HTMLHeadElement"},
mf:{"^":"h;0j:length=","%":"History"},
mg:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isw")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isy:1,
$asy:function(){return[W.w]},
$asp:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$asr:function(){return[W.w]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hu:{"^":"cl;","%":"HTMLDocument"},
hv:{"^":"hw;",
eu:function(a,b,c,d,e,f){return a.open(b,c)},
eb:function(a,b,c){return a.open(b,c)},
cv:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hw:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mh:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
co:{"^":"h;0n:height=,0m:width=",$isco:1,"%":"ImageBitmap"},
cp:{"^":"h;0n:height=,0m:width=",$iscp:1,"%":"ImageData"},
bU:{"^":"M;0n:height=,0m:width=",$isbU:1,"%":"HTMLImageElement"},
mj:{"^":"M;0n:height=,0m:width=","%":"HTMLInputElement"},
b7:{"^":"dX;",$isb7:1,"%":"KeyboardEvent"},
hX:{"^":"h;",
l:function(a){return String(a)},
$ishX:1,
"%":"Location"},
i0:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
mq:{"^":"h;0j:length=","%":"MediaList"},
mr:{"^":"L;",
bw:function(a,b,c,d){H.k(c,{func:1,args:[W.N]})
if(b==="message")a.start()
this.cF(a,b,c,!1)},
"%":"MessagePort"},
ms:{"^":"k1;",
h:function(a,b){return P.a6(a.get(H.v(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.B(a,new W.i2(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
i2:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
mt:{"^":"k2;",
h:function(a,b){return P.a6(a.get(H.v(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.B(a,new W.i3(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
i3:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
aA:{"^":"h;",$isaA:1,"%":"MimeType"},
mu:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaA")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asr:function(){return[W.aA]},
"%":"MimeTypeArray"},
X:{"^":"dX;",
gc0:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.bc(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.A(W.ek(z)).$isW)throw H.b(P.B("offsetX is only supported on elements"))
y=H.f(W.ek(z),"$isW")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.bc(u,v,w),"$isbc",w,"$asbc")
if(typeof z!=="number")return z.aY()
if(typeof x!=="number")return x.aY()
return new P.bc(C.m.ca(z-u),C.m.ca(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"hS;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bB("No elements"))
if(y>1)throw H.b(P.bB("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.t(b,"$isl",[W.w],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.I(y,z.firstChild)
return},
i:function(a,b,c){var z
H.u(b)
z=this.a
J.f6(z,H.f(c,"$isw"),C.w.h(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dy(z,z.length,-1,[H.b0(C.w,z,"r",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.w.h(this.a.childNodes,b)},
$asp:function(){return[W.w]},
$asl:function(){return[W.w]},
$asa:function(){return[W.w]}},
w:{"^":"L;0ec:previousSibling=",
ee:function(a){var z=a.parentNode
if(z!=null)J.bM(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cG(a):z},
I:function(a,b){return a.appendChild(b)},
dn:function(a,b){return a.removeChild(b)},
dr:function(a,b,c){return a.replaceChild(b,c)},
$isw:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
id:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isw")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isy:1,
$asy:function(){return[W.w]},
$asp:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$asr:function(){return[W.w]},
"%":"NodeList|RadioNodeList"},
mD:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
mF:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mG:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aC:{"^":"h;0j:length=",$isaC:1,"%":"Plugin"},
mI:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaC")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asr:function(){return[W.aC]},
"%":"PluginArray"},
mK:{"^":"X;0n:height=,0m:width=","%":"PointerEvent"},
bz:{"^":"N;",$isbz:1,"%":"ProgressEvent|ResourceProgressEvent"},
iw:{"^":"h;",
dR:function(a,b){return a.createContextualFragment(b)},
cu:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mP:{"^":"kg;",
h:function(a,b){return P.a6(a.get(H.v(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.B(a,new W.iD(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
iD:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
mQ:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mR:{"^":"M;0j:length=","%":"HTMLSelectElement"},
aD:{"^":"L;",$isaD:1,"%":"SourceBuffer"},
mT:{"^":"ee;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaD")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aD]},
$isy:1,
$asy:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isl:1,
$asl:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asr:function(){return[W.aD]},
"%":"SourceBufferList"},
aE:{"^":"h;",$isaE:1,"%":"SpeechGrammar"},
mU:{"^":"km;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaE")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asp:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$asr:function(){return[W.aE]},
"%":"SpeechGrammarList"},
aF:{"^":"h;0j:length=",$isaF:1,"%":"SpeechRecognitionResult"},
mX:{"^":"kp;",
h:function(a,b){return this.bo(a,H.v(b))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.di(a,z)
if(y==null)return
b.$2(y,this.bo(a,y))}},
gD:function(a){var z=H.j([],[P.d])
this.B(a,new W.iQ(z))
return z},
gj:function(a){return a.length},
bo:function(a,b){return a.getItem(b)},
di:function(a,b){return a.key(b)},
$asR:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
iQ:{"^":"n:20;a",
$2:function(a,b){return C.a.k(this.a,a)}},
aG:{"^":"h;",$isaG:1,"%":"CSSStyleSheet|StyleSheet"},
iY:{"^":"M;",
N:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.hf("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).H(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
n_:{"^":"M;",
N:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.N(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga5(z)
x.toString
z=new W.ab(x)
w=z.ga5(z)
y.toString
w.toString
new W.ab(y).H(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
n0:{"^":"M;",
N:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.N(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga5(z)
y.toString
x.toString
new W.ab(y).H(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
dS:{"^":"M;",$isdS:1,"%":"HTMLTemplateElement"},
n1:{"^":"h;0m:width=","%":"TextMetrics"},
aH:{"^":"L;",$isaH:1,"%":"TextTrack"},
aI:{"^":"L;",$isaI:1,"%":"TextTrackCue|VTTCue"},
n2:{"^":"kx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaI")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aI]},
$isy:1,
$asy:function(){return[W.aI]},
$asp:function(){return[W.aI]},
$isl:1,
$asl:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$asr:function(){return[W.aI]},
"%":"TextTrackCueList"},
n3:{"^":"ei;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaH")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aH]},
$isy:1,
$asy:function(){return[W.aH]},
$asp:function(){return[W.aH]},
$isl:1,
$asl:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$asr:function(){return[W.aH]},
"%":"TextTrackList"},
n4:{"^":"h;0j:length=","%":"TimeRanges"},
aJ:{"^":"h;",$isaJ:1,"%":"Touch"},
n5:{"^":"kC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaJ")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aJ]},
$isy:1,
$asy:function(){return[W.aJ]},
$asp:function(){return[W.aJ]},
$isl:1,
$asl:function(){return[W.aJ]},
$isa:1,
$asa:function(){return[W.aJ]},
$asr:function(){return[W.aJ]},
"%":"TouchList"},
n6:{"^":"h;0j:length=","%":"TrackDefaultList"},
dX:{"^":"N;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nk:{"^":"h;",
l:function(a){return String(a)},
"%":"URL"},
cG:{"^":"i0;0n:height=,0m:width=",$iscG:1,"%":"HTMLVideoElement"},
nm:{"^":"L;0j:length=","%":"VideoTrackList"},
nn:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
no:{"^":"h;0m:width=","%":"VTTRegion"},
aT:{"^":"X;",
gdY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
$isaT:1,
"%":"WheelEvent"},
ja:{"^":"L;",
gdD:function(a){var z,y,x
z=P.H
y=new P.O(0,$.E,[z])
x=H.k(new W.jb(new P.kt(y,[z])),{func:1,ret:-1,args:[P.H]})
this.de(a)
this.ds(a,W.eq(x,z))
return y},
ds:function(a,b){return a.requestAnimationFrame(H.aq(H.k(b,{func:1,ret:-1,args:[P.H]}),1))},
de:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise_:1,
"%":"DOMWindow|Window"},
jb:{"^":"n:21;a",
$1:function(a){this.a.a2(0,H.cT(a))}},
e1:{"^":"w;",$ise1:1,"%":"Attr"},
nu:{"^":"kI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isax")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asr:function(){return[W.ax]},
"%":"CSSRuleList"},
nv:{"^":"hb;",
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
C:function(a,b){var z
if(b==null)return!1
if(!H.ap(b,"$isZ",[P.H],"$asZ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nw:{"^":"kK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaz")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asp:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asr:function(){return[W.az]},
"%":"GamepadList"},
nB:{"^":"kM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isw")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.w]},
$isy:1,
$asy:function(){return[W.w]},
$asp:function(){return[W.w]},
$isl:1,
$asl:function(){return[W.w]},
$isa:1,
$asa:function(){return[W.w]},
$asr:function(){return[W.w]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nC:{"^":"kO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaF")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aF]},
$isy:1,
$asy:function(){return[W.aF]},
$asp:function(){return[W.aF]},
$isl:1,
$asl:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$asr:function(){return[W.aF]},
"%":"SpeechRecognitionResultList"},
nD:{"^":"kQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(b)
H.f(c,"$isaG")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aG]},
$isy:1,
$asy:function(){return[W.aG]},
$asp:function(){return[W.aG]},
$isl:1,
$asl:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$asr:function(){return[W.aG]},
"%":"StyleSheetList"},
jl:{"^":"cy;dd:a<",
B:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.G)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.j([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$ise1")
if(v.namespaceURI==null)C.a.k(y,v.name)}return y},
$asR:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
ju:{"^":"jl;a",
h:function(a,b){return J.cf(this.a,H.v(b))},
gj:function(a){return this.gD(this).length}},
bD:{"^":"iR;a,b,c,$ti"},
bC:{"^":"bD;a,b,c,$ti"},
jw:{"^":"iS;a,b,c,d,e,$ti",
sdj:function(a){this.d=H.k(a,{func:1,args:[W.N]})},
dJ:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.k(y,{func:1,args:[W.N]})
if(x)J.f5(z,this.c,y,!1)}this.b=null
this.sdj(null)
return},
p:{
ai:function(a,b,c,d,e){var z=W.eq(new W.jx(c),W.N)
if(z!=null&&!0)J.f7(a,b,z,!1)
return new W.jw(0,a,b,z,!1,[e])}}},
jx:{"^":"n:22;a",
$1:function(a){return this.a.$1(H.f(a,"$isN"))}},
bE:{"^":"c;a",
d3:function(a){var z,y
z=$.cX()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.lf())
for(y=0;y<12;++y)z.i(0,C.v[y],W.lg())}},
X:function(a){return $.eW().u(0,W.b5(a))},
R:function(a,b,c){var z,y,x
z=W.b5(a)
y=$.cX()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c4(x.$4(a,b,c,this))},
$isaf:1,
p:{
e5:function(a){var z,y
z=document.createElement("a")
y=new W.kh(z,window.location)
y=new W.bE(y)
y.d3(a)
return y},
nz:[function(a,b,c,d){H.f(a,"$isW")
H.v(b)
H.v(c)
H.f(d,"$isbE")
return!0},"$4","lf",16,0,11],
nA:[function(a,b,c,d){var z,y,x
H.f(a,"$isW")
H.v(b)
H.v(c)
z=H.f(d,"$isbE").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lg",16,0,11]}},
r:{"^":"c;$ti",
gw:function(a){return new W.dy(a,this.gj(a),-1,[H.b0(this,a,"r",0)])}},
dJ:{"^":"c;a",
X:function(a){return C.a.bx(this.a,new W.ig(a))},
R:function(a,b,c){return C.a.bx(this.a,new W.ie(a,b,c))},
$isaf:1},
ig:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isaf").X(this.a)}},
ie:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isaf").R(this.a,this.b,this.c)}},
ki:{"^":"c;",
d4:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aL(0,new W.kj())
y=b.aL(0,new W.kk())
this.b.H(0,z)
x=this.c
x.H(0,C.Y)
x.H(0,y)},
X:function(a){return this.a.u(0,W.b5(a))},
R:["cJ",function(a,b,c){var z,y
z=W.b5(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dC(c)
else if(y.u(0,"*::"+b))return this.d.dC(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isaf:1},
kj:{"^":"n:10;",
$1:function(a){return!C.a.u(C.v,H.v(a))}},
kk:{"^":"n:10;",
$1:function(a){return C.a.u(C.v,H.v(a))}},
ku:{"^":"ki;e,a,b,c,d",
R:function(a,b,c){if(this.cJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cf(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
eg:function(){var z,y,x,w,v
z=P.d
y=P.cx(C.u,z)
x=H.o(C.u,0)
w=H.k(new W.kv(),{func:1,ret:z,args:[x]})
v=H.j(["TEMPLATE"],[z])
y=new W.ku(y,P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),null)
y.d4(null,new H.hZ(C.u,w,[x,z]),v,null)
return y}}},
kv:{"^":"n:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.v(a))}},
ks:{"^":"c;",
X:function(a){var z=J.A(a)
if(!!z.$isdN)return!1
z=!!z.$isK
if(z&&W.b5(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.i.cB(b,"on"))return!1
return this.X(a)},
$isaf:1},
dy:{"^":"c;a,b,c,0d,$ti",
sbm:function(a){this.d=H.z(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbm(J.b2(this.a,z))
this.c=z
return!0}this.sbm(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb6:1},
jo:{"^":"c;a",$isL:1,$ise_:1,p:{
jp:function(a){if(a===window)return H.f(a,"$ise_")
else return new W.jo(a)}}},
af:{"^":"c;"},
kh:{"^":"c;a,b",$isnj:1},
ej:{"^":"c;a",
aU:function(a){new W.kF(this).$2(a,null)},
a1:function(a,b){if(b==null)J.d3(a)
else J.bM(b,a)},
dv:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fr(a)
x=J.cf(y.gdd(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a_(t)}v="element unprintable"
try{v=J.bo(a)}catch(t){H.a_(t)}try{u=W.b5(a)
this.du(H.f(a,"$isW"),b,z,v,u,H.f(y,"$isJ"),H.v(x))}catch(t){if(H.a_(t) instanceof P.av)throw t
else{this.a1(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
du:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a1(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.X(a)){this.a1(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.a1(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.j(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.R(a,J.fD(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.dm(z,v)}}if(!!J.A(a).$isdS)this.aU(a.content)},
$ismB:1},
kF:{"^":"n:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dv(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a1(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fs(z)}catch(w){H.a_(w)
v=H.f(z,"$isw")
if(x){u=v.parentNode
if(u!=null)J.bM(u,v)}else J.bM(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isw")}}},
jn:{"^":"h+h2;"},
jq:{"^":"h+p;"},
jr:{"^":"jq+r;"},
js:{"^":"h+p;"},
jt:{"^":"js+r;"},
jz:{"^":"h+p;"},
jA:{"^":"jz+r;"},
jR:{"^":"h+p;"},
jS:{"^":"jR+r;"},
k1:{"^":"h+R;"},
k2:{"^":"h+R;"},
k3:{"^":"h+p;"},
k4:{"^":"k3+r;"},
k5:{"^":"h+p;"},
k6:{"^":"k5+r;"},
k9:{"^":"h+p;"},
ka:{"^":"k9+r;"},
kg:{"^":"h+R;"},
ed:{"^":"L+p;"},
ee:{"^":"ed+r;"},
kl:{"^":"h+p;"},
km:{"^":"kl+r;"},
kp:{"^":"h+R;"},
kw:{"^":"h+p;"},
kx:{"^":"kw+r;"},
eh:{"^":"L+p;"},
ei:{"^":"eh+r;"},
kB:{"^":"h+p;"},
kC:{"^":"kB+r;"},
kH:{"^":"h+p;"},
kI:{"^":"kH+r;"},
kJ:{"^":"h+p;"},
kK:{"^":"kJ+r;"},
kL:{"^":"h+p;"},
kM:{"^":"kL+r;"},
kN:{"^":"h+p;"},
kO:{"^":"kN+r;"},
kP:{"^":"h+p;"},
kQ:{"^":"kP+r;"}}],["","",,P,{"^":"",
eu:function(a){return a},
a6:function(a){var z,y,x,w,v
if(a==null)return
z=P.a3(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
l4:function(a,b){var z={}
a.B(0,new P.l5(z))
return z},
l6:function(a){var z,y
z=new P.O(0,$.E,[null])
y=new P.cH(z,[null])
a.then(H.aq(new P.l7(y),1))["catch"](H.aq(new P.l8(y),1))
return z},
dq:function(){var z=$.dp
if(z==null){z=J.cb(window.navigator.userAgent,"Opera",0)
$.dp=z}return z},
h7:function(){var z,y
z=$.dl
if(z!=null)return z
y=$.dm
if(y==null){y=J.cb(window.navigator.userAgent,"Firefox",0)
$.dm=y}if(y)z="-moz-"
else{y=$.dn
if(y==null){y=!P.dq()&&J.cb(window.navigator.userAgent,"Trident/",0)
$.dn=y}if(y)z="-ms-"
else z=P.dq()?"-o-":"-webkit-"}$.dl=z
return z},
jc:{"^":"c;",
bW:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.k(z,a)
C.a.k(this.b,null)
return y},
aK:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.a8(P.ch("DateTime is outside valid range: "+y))
return new P.bq(y,!0)}if(a instanceof RegExp)throw H.b(P.cE("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.l6(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bW(a)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hR()
z.a=u
C.a.i(x,v,u)
this.e4(a,new P.je(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bW(t)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
if(u!=null)return u
s=J.U(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.i(x,v,u)
for(x=J.bH(u),q=0;q<r;++q)x.i(u,q,this.aK(s.h(t,q)))
return u}return a},
dP:function(a,b){this.c=b
return this.aK(a)}},
je:{"^":"n:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aK(b)
J.f4(z,a,y)
return y}},
l5:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
jd:{"^":"jc;a,b,c",
e4:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
b.$2(w,a[w])}}},
l7:{"^":"n:12;a",
$1:function(a){return this.a.a2(0,a)}},
l8:{"^":"n:12;a",
$1:function(a){return this.a.dM(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
e6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bc:{"^":"c;Y:a>,T:b>,$ti",
l:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.ap(b,"$isbc",[P.H],null)&&this.a==J.bP(b)&&this.b==b.gT(b)},
gv:function(a){var z,y,x
z=J.au(this.a)
y=J.au(this.b)
y=P.e6(P.e6(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kb:{"^":"c;"},
Z:{"^":"kb;$ti"}}],["","",,P,{"^":"",fN:{"^":"h;",$isfN:1,"%":"SVGAnimatedLength"},lV:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},lW:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lX:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lY:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},lZ:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},m_:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},m0:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},m1:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},m2:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},m3:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},m4:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},m5:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},m6:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},m7:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},m8:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},m9:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mc:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},md:{"^":"bt;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hs:{"^":"bt;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bt:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mi:{"^":"bt;0n:height=,0m:width=","%":"SVGImageElement"},b8:{"^":"h;",$isb8:1,"%":"SVGLength"},mo:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.u(b)
H.f(c,"$isb8")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b8]},
$isl:1,
$asl:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$asr:function(){return[P.b8]},
"%":"SVGLengthList"},mp:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},bb:{"^":"h;",$isbb:1,"%":"SVGNumber"},mC:{"^":"k8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.u(b)
H.f(c,"$isbb")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.bb]},
$isl:1,
$asl:function(){return[P.bb]},
$isa:1,
$asa:function(){return[P.bb]},
$asr:function(){return[P.bb]},
"%":"SVGNumberList"},mH:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},mJ:{"^":"h;0j:length=","%":"SVGPointList"},mL:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mM:{"^":"hs;0n:height=,0m:width=","%":"SVGRectElement"},dN:{"^":"K;",$isdN:1,"%":"SVGScriptElement"},mY:{"^":"kr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.u(b)
H.v(c)
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asr:function(){return[P.d]},
"%":"SVGStringList"},K:{"^":"W;",
N:function(a,b,c,d){var z,y,x,w,v,u
z=H.j([],[W.af])
C.a.k(z,W.e5(null))
C.a.k(z,W.eg())
C.a.k(z,new W.ks())
c=new W.ej(new W.dJ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.ga5(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mZ:{"^":"bt;0n:height=,0m:width=","%":"SVGSVGElement"},bg:{"^":"h;",$isbg:1,"%":"SVGTransform"},n7:{"^":"kE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.u(b)
H.f(c,"$isbg")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.bg]},
$isl:1,
$asl:function(){return[P.bg]},
$isa:1,
$asa:function(){return[P.bg]},
$asr:function(){return[P.bg]},
"%":"SVGTransformList"},nl:{"^":"bt;0n:height=,0m:width=","%":"SVGUseElement"},jW:{"^":"h+p;"},jX:{"^":"jW+r;"},k7:{"^":"h+p;"},k8:{"^":"k7+r;"},kq:{"^":"h+p;"},kr:{"^":"kq+r;"},kD:{"^":"h+p;"},kE:{"^":"kD+r;"}}],["","",,P,{"^":"",an:{"^":"c;",$isl:1,
$asl:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isj2:1}}],["","",,P,{"^":"",lC:{"^":"h;0j:length=","%":"AudioBuffer"},lD:{"^":"jm;",
h:function(a,b){return P.a6(a.get(H.v(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.j([],[P.d])
this.B(a,new P.fO(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fO:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},lE:{"^":"L;0j:length=","%":"AudioTrackList"},fP:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mE:{"^":"fP;0j:length=","%":"OfflineAudioContext"},jm:{"^":"h+R;"}}],["","",,P,{"^":"",fR:{"^":"h;",$isfR:1,"%":"WebGLBuffer"},hn:{"^":"h;",$ishn:1,"%":"WebGLFramebuffer"},iv:{"^":"h;",$isiv:1,"%":"WebGLProgram"},mN:{"^":"h;",
bv:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bL:function(a,b){return a.createShader(b)},
bM:function(a){return a.createTexture()},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.a6(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
c5:function(a,b,c){return a.pixelStorei(b,c)},
aW:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aI:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$iscp)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,P.eu(g))
return}if(!!z.$isbU)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$isbp)y=!0
else y=!1
if(y){this.aB(a,b,c,d,e,f,g)
return}if(!!z.$iscG)y=!0
else y=!1
if(y){this.aC(a,b,c,d,e,f,g)
return}if(!!z.$isco)z=!0
else z=!1
if(z){this.aD(a,b,c,d,e,f,g)
return}throw H.b(P.ch("Incorrect number or type of arguments"))},
c8:function(a,b,c,d,e,f,g){return this.aI(a,b,c,d,e,f,g,null,null,null)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
cb:function(a,b,c){return a.uniform1f(b,c)},
cc:function(a,b,c){return a.uniform1fv(b,c)},
cd:function(a,b,c){return a.uniform1i(b,c)},
ce:function(a,b,c){return a.uniform1iv(b,c)},
cf:function(a,b,c){return a.uniform2fv(b,c)},
cg:function(a,b,c){return a.uniform3fv(b,c)},
ci:function(a,b,c){return a.uniform4fv(b,c)},
cj:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ck:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cl:function(a,b){return a.useProgram(b)},
cm:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
co:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mO:{"^":"h;",
dF:function(a,b){return a.beginTransformFeedback(b)},
dI:function(a,b){return a.bindVertexArray(b)},
dU:function(a){return a.createVertexArray()},
dZ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e_:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e0:function(a){return a.endTransformFeedback()},
eo:function(a,b,c,d){this.dA(a,b,H.t(c,"$isa",[P.d],"$asa"),d)
return},
dA:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ep:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bv:function(a,b){return a.activeTexture(b)},
by:function(a,b,c){return a.attachShader(b,c)},
bz:function(a,b,c){return a.bindBuffer(b,c)},
bB:function(a,b,c){return a.bindFramebuffer(b,c)},
bC:function(a,b,c){return a.bindTexture(b,c)},
bD:function(a,b){return a.blendEquation(b)},
bE:function(a,b,c){return a.blendFunc(b,c)},
bF:function(a,b,c,d){return a.bufferData(b,c,d)},
bG:function(a,b){return a.clear(b)},
bH:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bI:function(a,b){return a.compileShader(b)},
bJ:function(a){return a.createBuffer()},
bK:function(a){return a.createProgram()},
bL:function(a,b){return a.createShader(b)},
bM:function(a){return a.createTexture()},
bO:function(a,b){return a.depthMask(b)},
bP:function(a,b){return a.disable(b)},
bQ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bS:function(a,b){return a.enable(b)},
bT:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.a6(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
c5:function(a,b,c){return a.pixelStorei(b,c)},
aW:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aI:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$iscp)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,P.eu(g))
return}if(!!z.$isbU)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$isbp)y=!0
else y=!1
if(y){this.aB(a,b,c,d,e,f,g)
return}if(!!z.$iscG)y=!0
else y=!1
if(y){this.aC(a,b,c,d,e,f,g)
return}if(!!z.$isco)z=!0
else z=!1
if(z){this.aD(a,b,c,d,e,f,g)
return}throw H.b(P.ch("Incorrect number or type of arguments"))},
c8:function(a,b,c,d,e,f,g){return this.aI(a,b,c,d,e,f,g,null,null,null)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c9:function(a,b,c,d){return a.texParameteri(b,c,d)},
cb:function(a,b,c){return a.uniform1f(b,c)},
cc:function(a,b,c){return a.uniform1fv(b,c)},
cd:function(a,b,c){return a.uniform1i(b,c)},
ce:function(a,b,c){return a.uniform1iv(b,c)},
cf:function(a,b,c){return a.uniform2fv(b,c)},
cg:function(a,b,c){return a.uniform3fv(b,c)},
ci:function(a,b,c){return a.uniform4fv(b,c)},
cj:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ck:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cl:function(a,b){return a.useProgram(b)},
cm:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
co:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iI:{"^":"h;",$isiI:1,"%":"WebGLShader"},iZ:{"^":"h;",$isiZ:1,"%":"WebGLTexture"},j3:{"^":"h;",$isj3:1,"%":"WebGLUniformLocation"},j8:{"^":"h;",$isj8:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mV:{"^":"ko;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return P.a6(this.dh(a,b))},
i:function(a,b,c){H.u(b)
H.f(c,"$isJ")
throw H.b(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
dh:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isl:1,
$asl:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asr:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},kn:{"^":"h+p;"},ko:{"^":"kn+r;"}}],["","",,G,{"^":"",
jf:function(a){var z,y,x,w
z=H.j(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a3(z,"\n")},
e2:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bL(a,b)
z.aW(a,y,c)
z.bI(a,y)
x=H.c4(z.aR(a,y,35713))
if(x!=null&&!x){w=z.aQ(a,y)
P.a7("E:Compilation failed:")
P.a7("E:"+G.jf(c))
P.a7("E:Failure:")
P.a7(C.i.J("E:",w))
throw H.b(w)}return y},
cn:function(a,b){var z,y,x
H.t(a,"$isa",[T.q],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bP(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.d1(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
hj:function(a,b){var z,y
H.t(a,"$isa",[T.ah],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bP(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))}return b},
hk:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.a4],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bP(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.d1(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.fu(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
hi:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b2(a[y],0))
if(y>=a.length)return H.i(a,y)
C.n.i(b,z+1,J.b2(a[y],1))
if(y>=a.length)return H.i(a,y)
C.n.i(b,z+2,J.b2(a[y],2))
if(y>=a.length)return H.i(a,y)
C.n.i(b,z+3,J.b2(a[y],3))}return b},
jP:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ao(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.C]],v=[P.ak],u=[T.a4],t=[T.q],s=[T.ah];y.t();){r=y.d
if(!x.ae(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ew>0)H.bJ("I: "+r)
continue}q=z.h(0,r)
switch($.ac().h(0,r).a){case"vec2":b.a0(r,G.hj(H.bL(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a0(r,G.cn(H.bL(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a0(r,G.hk(H.bL(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a0(r,new Float32Array(H.c1(H.bL(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a0(r,G.hi(H.bL(q,"$isa",w,"$asa"),null),4)
break}}},
aR:{"^":"c;"},
aS:{"^":"aR;d,a,b,c",
al:function(){return this.d},
l:function(a){var z,y,x,w
z=H.j(["{"+new H.dW(H.lc(this)).l(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ao(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.k(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a3(z,"\n")}},
fS:{"^":"dO;"},
fU:{"^":"c;0a,b",
bU:function(a,b,c){J.fo(this.a,b)
if(c>0)J.fJ(this.a,b,c)},
cn:function(a,b,c,d,e,f,g,h){J.ca(this.a,34962,b)
J.fK(this.a,c,d,e,!1,g,h)}},
hm:{"^":"c;a,b,c,d,e"},
dw:{"^":"c;a,b,c"},
dx:{"^":"c;a,b,c,d"},
dz:{"^":"c;a,b,c,d,e",
a7:function(a){switch($.ac().h(0,a).a){case"vec2":this.e.i(0,a,H.j([],[T.ah]))
break
case"vec3":this.e.i(0,a,H.j([],[T.q]))
break
case"vec4":this.e.i(0,a,H.j([],[T.a4]))
break
case"float":this.e.i(0,a,H.j([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.j([],[[P.a,P.C]]))
break}},
cM:function(a){var z,y,x,w,v,u
H.t(a,"$isa",[T.q],"$asa")
z=this.d
y=z.length
C.a.k(this.b,new G.dw(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.G)(a),++w){v=a[w]
v.toString
u=new T.q(new Float32Array(3))
u.E(v)
C.a.k(z,u)}},
cK:function(a,b){var z,y,x,w,v,u,t
z=[T.ah]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.k(y,new T.ah(u))}},
cL:function(a,b){var z,y,x,w,v,u
z=[T.q]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new T.q(new Float32Array(3))
u.E(v)
x.k(y,u)}},
b0:function(a,b){var z,y,x,w,v,u
z=[T.a4]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new T.a4(new Float32Array(4))
u.E(v)
x.k(y,u)}},
cN:function(a){var z,y,x,w,v,u
H.t(a,"$isa",[T.q],"$asa")
z=this.d
y=z.length
C.a.k(this.c,new G.dx(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.G)(a),++w){v=a[w]
v.toString
u=new T.q(new Float32Array(3))
u.E(v)
C.a.k(z,u)}},
cS:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.j(x,[P.C])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.G)(z),++u){t=z[u]
C.a.i(w,v,t.a)
C.a.i(w,v+1,t.b)
C.a.i(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){s=y[u]
x=s.a
C.a.i(w,v,x)
C.a.i(w,v+1,s.b)
r=s.c
C.a.i(w,v+2,r)
C.a.i(w,v+3,x)
C.a.i(w,v+4,r)
C.a.i(w,v+5,s.d)
v+=6}return w},
l:function(a){var z,y,x,w,v
z=H.j(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ao(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.ac().h(0,w).a
C.a.k(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a3(z," ")}},
cw:{"^":"aR;"},
h8:{"^":"cw;x,y,z,Q,ch,cx,d,a,b,c",
l:function(a){return"DL: p:"+H.e(this.x)}},
hx:{"^":"aS;x,y,z,d,a,b,c",
al:function(){var z,y,x
z=this.y
y=this.z
G.hy(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
hy:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.t(c,"$isa",[G.cw],"$asa")
z=a.length
C.f.bV(a,0,z,0)
C.f.bV(b,0,4,0)
for(y=c.length,x=0,w=0;w<y;++w){v=c[w]
u=x*16
t=u+4
s=v.x.a
r=s[0]
if(t>=z)return H.i(a,t)
a[t]=r
t=u+5
r=s[1]
if(t>=z)return H.i(a,t)
a[t]=r
r=u+6
s=s[2]
if(r>=z)return H.i(a,r)
a[r]=s
s=u+8
r=v.y.a
t=r[0]
if(s>=z)return H.i(a,s)
a[s]=t
t=u+9
s=r[1]
if(t>=z)return H.i(a,t)
a[t]=s
s=u+10
r=r[2]
if(s>=z)return H.i(a,s)
a[s]=r
r=u+12
s=v.z.a
t=s[0]
if(r>=z)return H.i(a,r)
a[r]=t
t=u+13
r=s[1]
if(t>=z)return H.i(a,t)
a[t]=r
u+=14
s=s[2]
if(u>=z)return H.i(a,u)
a[u]=s
if(x<0||x>=4)return H.i(b,x)
b[x]=v.d;++x}}}},
dU:{"^":"c;a,b,c"},
dT:{"^":"c;a,b,c"},
i_:{"^":"aS;d,a,b,c",p:{
dG:function(a){var z=P.a3(P.d,P.c)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eH())
z.i(0,"cStencilFunc",$.eL())
return new G.i_(z,a,!1,!0)}}},
i1:{"^":"aR;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sas:function(a){this.cx=H.t(a,"$isa",[P.C],"$asa")},
b4:function(a,b,c){var z,y
C.i.ap(a,0)
H.f(b,"$isan")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.ca(z.a,34962,y)
J.d0(z.a,34962,b,35048)},
b6:function(a){this.ch=a
this.b4("aPosition",a,3)},
cT:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a0:function(a,b,c){var z,y,x,w,v
z=J.cY(a,0)===105
if(z&&this.z===0)this.z=C.b.a6(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.cc(x.a))
this.b4(a,b,c)
w=$.ac().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bN(x.a,this.e)
x.bU(0,v,z?1:0)
x.cn(0,y.h(0,a),v,w.b7(),5126,!1,0,0)},
b3:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.cc(y.a))
this.b6(a)
x=$.ac().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bN(y.a,this.e)
y.bU(0,w,0)
y.cn(0,z.h(0,"aPosition"),w,x.b7(),5126,!1,0,0)},
b5:function(a){var z,y,x
H.t(a,"$isa",[P.C],"$asa")
z=this.ch.length
if(z<768){this.sas(new Uint8Array(H.c1(a)))
this.Q=5121}else if(z<196608){this.sas(new Uint16Array(H.c1(a)))
this.Q=5123}else{this.sas(new Uint32Array(H.c1(a)))
this.Q=5125}z=this.d
J.bN(z.a,this.e)
y=this.y
x=this.cx
J.ca(z.a,34963,y)
J.d0(z.a,34963,x,35048)},
b1:function(a){H.t(a,"$isa",[P.C],"$asa")
this.y=J.cc(this.d.a)
this.b5(a)},
l:function(a){var z,y,x,w
z=this.cx
y=H.j(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ao(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.k(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")},
p:{
dH:function(a,b,c,d){var z=P.d
return new G.i1(b,J.fh(b.a),c,P.a3(z,P.c),d,0,-1,P.a3(z,P.an),"meshdata:"+a,!1,!0)}}},
ik:{"^":"aS;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cO:function(a,b){var z
if(typeof a!=="number")return a.er()
if(typeof b!=="number")return H.as(b)
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
al:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.q(new Float32Array(3))
u.a_(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.E(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.A(t)
x=!!y.$isa4
q=x?t.gcp(t):1
if(!!y.$isq){p=t.gY(t)
s=t.gT(t)
r=t.gah(t)
t=p}else if(x){p=t.gY(t)
s=t.gT(t)
r=t.gah(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.as(t)
x=z[4]
if(typeof s!=="number")return H.as(s)
w=z[8]
if(typeof r!=="number")return H.as(r)
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
c.E(this.db)
c.c_(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
lT:{"^":"c;"},
iC:{"^":"aR;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cX:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.d2(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.d2(w.a,v,t))}},
cZ:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.j([],[P.d])
x=H.j([],[P.d])
for(y=new H.ao(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ae(0,w))C.a.k(x,w)}for(z=this.x,z=P.jZ(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.k(x,w)}return x},
d1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.t(b,"$isJ",[P.d,P.c],"$asJ")
z=Date.now()
for(y=new H.ao(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cY(t,0)){case 117:if(w.ae(0,t)){s=b.h(0,t)
if(v.ae(0,t))H.bJ("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.ac().h(0,t)
if(r==null)H.a8("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.u(s)
J.cg(x.a,q,s)}else if(!!J.A(s).$ishC)J.fH(x.a,q,s)
break
case"float":if(r.c===0){H.cO(s)
J.fF(x.a,q,s)}else if(!!J.A(s).$isan)J.fG(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.at(s,"$isS").a
J.d9(x.a,q,!1,t)}else if(!!J.A(s).$isan)J.d9(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.at(s,"$isba").a
J.d8(x.a,q,!1,t)}else if(!!J.A(s).$isan)J.d8(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.d7(p,q,H.at(s,"$isa4").a)
else J.d7(p,q,H.f(s,"$isan"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.d6(p,q,H.at(s,"$isq").a)
else J.d6(p,q,H.f(s,"$isan"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.d5(p,q,H.at(s,"$isah").a)
else J.d5(p,q,H.f(s,"$isan"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.as(t)
J.cZ(x.a,33984+t)
t=H.at(s,"$iscD").b
J.bm(x.a,3553,t)
t=this.ch
J.cg(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.J()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.as(t)
J.cZ(x.a,33984+t)
t=H.at(s,"$iscD").b
J.bm(x.a,34067,t)
t=this.ch
J.cg(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.J()
this.ch=t+1
break
default:H.bJ("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aP(s,!0)
p=x.a
if(t)J.bn(p,2929)
else J.cd(p,2929)
break
case"cStencilFunc":H.at(s,"$isdU")
t=s.a
p=x.a
if(t===1281)J.cd(p,2960)
else{J.bn(p,2960)
p=s.b
o=s.c
J.fB(x.a,t,p,o)}break
case"cDepthWrite":H.c4(s)
J.fi(x.a,s)
break
case"cBlendEquation":H.at(s,"$isdT")
t=s.a
p=x.a
if(t===1281)J.cd(p,3042)
else{J.bn(p,3042)
p=s.b
o=s.c
J.fb(x.a,p,o)
J.fa(x.a,t)}break}++u
break}}n=P.hc(0,0,0,Date.now()-new P.bq(z,!1).a,0,0)
""+u
n.l(0)},
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[G.aS],"$asa")
Date.now()
z=this.d
J.fI(z.a,this.r)
this.ch=0
this.z.S(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x){w=b[x]
this.d1(w.a,w.al())}y=this.Q
y.S(0)
for(v=a.cy,v=new H.ao(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.k(0,v.d)
u=this.cZ()
if(u.length!==0)P.a7("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bN(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cT()
s=a.Q
r=a.z
if(t)J.f8(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fm(q,v,y,s,0,r)
else J.fl(q,v,y,s,0)}else{s=z.a
if(r>1)J.fk(s,v,0,y,r)
else J.fj(s,v,0,y)}if(t)J.fp(z.a)},
p:{
dM:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a9(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.ff(b.a)
t=G.e2(b.a,35633,x)
J.d_(b.a,u,t)
s=G.e2(b.a,35632,w)
J.d_(b.a,u,s)
if(v.length>0)J.fE(b.a,u,v,35980)
J.fz(b.a,u)
if(!H.c4(J.fy(b.a,u,35714)))H.a8(J.fx(b.a,u))
z=new G.iC(b,c,d,u,P.cx(c.c,z),P.a3(z,P.c),P.a3(z,z),y,a,!1,!0)
z.cX(a,b,c,d)
return z}}},
F:{"^":"c;a,b,c",
b7:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iJ:{"^":"c;a,0b,c,d,e,f,r,x",
b_:function(a){var z,y,x,w,v
H.t(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.G)(a),++w){v=a[w]
C.a.k(y,v)
x.i(0,v,this.r);++this.r}C.a.aj(y)},
V:function(a){var z,y,x
H.t(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)C.a.k(y,a[x])
C.a.aj(y)},
b2:function(a){var z,y
H.t(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<3;++y)C.a.k(z,a[y])
C.a.aj(z)},
b8:function(a,b){var z=[P.d]
this.b=this.d2(!0,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
am:function(a){return this.b8(a,null)},
d2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.j(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){t=y[u]
s=$.ac().h(0,t)
C.a.k(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.k(w,"")
r=x?"in":"out"
if(x)C.a.k(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().h(0,q)
C.a.k(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().h(0,q)
C.a.k(w,r+" "+s.a+" "+H.e(q)+";")}C.a.k(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.k(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.k(w,"")
if(c!=null)C.a.H(w,c)
C.a.k(w,"void main(void) {")
C.a.H(w,b)
C.a.k(w,"}")
return C.a.a3(w,"\n")},
p:{
bX:function(a){var z,y
z=P.d
y=[z]
return new G.iJ(a,H.j([],y),H.j([],y),H.j([],y),H.j([],y),0,P.a3(z,P.C))}}},
dO:{"^":"aR;",
e9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.q(new Float32Array(3))
b.a_(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
u=new Float32Array(3)
t=new T.q(u)
t.E(v)
t.aZ(0,a)
t.aG(0)
s=b.bN(t)
s.aG(0)
r=t.bN(s)
r.aG(0)
q=s.aE(v)
p=r.aE(v)
v=t.aE(v)
o=s.a
n=o[0]
m=r.a
l=m[0]
k=u[0]
j=o[1]
i=m[1]
h=u[1]
o=o[2]
m=m[2]
u=u[2]
z[15]=1
z[14]=-v
z[13]=-p
z[12]=-q
z[11]=0
z[10]=u
z[9]=m
z[8]=o
z[7]=0
z[6]=h
z[5]=i
z[4]=j
z[3]=0
z[2]=k
z[1]=l
z[0]=n
z[12]=y
z[13]=x
z[14]=w},
bZ:function(a){return this.e9(a,null)}},
j_:{"^":"c;a,b,c,d,e,f,r"},
cD:{"^":"c;",
l:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hz:{"^":"cD;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
jC:function(a){var z,y,x,w
z=J.U(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.j(y,[P.ak])
for(w=0;w<z.gj(a);++w){y=z.h(a,w)
if(typeof y==="number"&&Math.floor(y)===y)C.a.i(x,w,J.aQ(z.h(a,w)))
else{y=z.h(a,w)
if(typeof y==="number")C.a.i(x,w,H.cO(z.h(a,w)))}}return x},
jT:function(a){var z,y,x,w
z=J.U(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.j(y,[P.C])
for(w=0;w<z.gj(a);++w)C.a.i(x,w,H.u(z.h(a,w)))
return x},
jB:function(a){var z,y,x
z=J.U(a)
y=H.V(z.h(a,"skinIndices"))
H.V(z.h(a,"skinWeights"))
if(y==null||J.al(y)===0)return 0
z=J.al(z.h(a,"vertices"))
if(typeof z!=="number")return z.a6()
z=C.m.G(z,3)
x=C.b.a6(J.al(y),z)
P.a7("Skin multiplier is "+x)
return x},
hA:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=H.j([],[G.dz])
y=Y.jB(b5)
x=J.U(b5)
w=Y.jT(H.V(x.h(b5,"faces")))
v=w.length
P.a7("faces: "+v)
u=Y.di(H.V(x.h(b5,"vertices")))
t=Y.di(H.V(x.h(b5,"normals")))
s=y===0
r=s?null:Y.dj(y,H.V(x.h(b5,"skinIndices")))
q=s?null:Y.dj(y,Y.jC(H.V(x.h(b5,"skinWeights"))))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.a
m=n[0]+n[1]+n[2]+n[3]
if(m<0.98||m>1.02)H.bJ("bad vector: "+H.e(o))}l=Y.h_(H.V(J.b2(x.h(b5,"uvs"),0)))
for(x=y>0,s=[T.q],n=l.length>0,k=t.length>0,j=[G.dw],i=[G.dx],h=P.d,g=[P.a,,],f=[P.C],e=[T.ah],d=r&&C.a,c=q&&C.a,b=[T.a4],a=0;a<v;){a0=a+1
if(a<0)return H.i(w,a)
a1=w[a]
if(typeof a1!=="number")return a1.eq()
m=(a1&1)===0?3:4
a2=H.j([],f)
for(a=a0,a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.k(a2,w[a])}if((a1&2)!==0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
a4=w[a]
a=a0}else a4=0
a5=H.j([],e)
if((a1&8)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.k(a5,C.a.h(l,w[a]))}a6=H.j([],s)
if((a1&16)!==0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
a7=C.a.h(t,w[a])
for(a3=0;a3<m;++a3)C.a.k(a6,a7)
a=a0}if((a1&32)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.k(a6,C.a.h(t,w[a]))}a8=H.j([],f)
if((a1&64)!==0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
a9=w[a]
for(a3=0;a3<m;++a3)C.a.k(a8,a9)
a=a0}if((a1&128)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.k(a8,w[a])}if(typeof a4!=="number")return H.as(a4)
for(;b0=z.length,b0<=a4;){b1=new G.dz(!1,H.j([],j),H.j([],i),H.j([],s),P.a3(h,g))
if(k)b1.a7("aNormal")
if(n)b1.a7("aTexUV")
if(x){b1.a7("aBoneIndex")
b1.a7("aBoneWeight")}C.a.k(z,b1)}if(a4<0)return H.i(z,a4)
b1=z[a4]
b2=H.j([],s)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.G)(a2),++p)C.a.k(b2,C.a.h(u,a2[p]))
if(m===3)b1.cM(b2)
else b1.cN(b2)
if(a5.length>0)b1.cK("aTexUV",a5)
if(a6.length>0)b1.cL("aNormal",a6)
if(x){b3=H.j([],b)
b4=H.j([],b)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.G)(a2),++p){a0=a2[p]
C.a.k(b3,d.h(r,a0))
C.a.k(b4,c.h(q,a0))}b1.b0("aBoneIndex",b3)
b1.b0("aBoneWeight",b4)}}x="out: "+z.length+" "
if(0>=z.length)return H.i(z,0)
P.a7(x+z[0].l(0))
return z},
di:function(a){var z,y,x,w,v,u,t,s
z=J.U(a)
y=new Array(C.b.G(z.gj(a),3))
y.fixed$length=Array
x=H.j(y,[T.q])
for(w=0;w<z.gj(a);w+=3){y=C.b.G(w,3)
v=J.aQ(z.h(a,w))
u=J.aQ(z.h(a,w+1))
t=J.aQ(z.h(a,w+2))
s=new Float32Array(3)
s[0]=v
s[1]=u
s[2]=t
C.a.i(x,y,new T.q(s))}return x},
h_:function(a){var z,y,x,w,v,u,t
z=J.U(a)
y=new Array(C.b.G(z.gj(a),2))
y.fixed$length=Array
x=H.j(y,[T.ah])
for(w=0;w<z.gj(a);w+=2){y=C.b.G(w,2)
v=J.aQ(z.h(a,w))
u=J.aQ(z.h(a,w+1))
t=new Float32Array(2)
t[0]=v
t[1]=u
C.a.i(x,y,new T.ah(t))}return x},
dj:function(a,b){var z,y,x,w,v,u,t
z=J.U(b)
y=new Array(C.b.a6(z.gj(b),a))
y.fixed$length=Array
x=H.j(y,[T.a4])
for(w=0,v=0;w<z.gj(b);w+=a,++v){y=new Float32Array(4)
for(u=0;u<a;++u){t=J.aQ(z.h(b,w+u))
if(u>=4)return H.i(y,u)
y[u]=t}C.a.i(x,v,new T.a4(y))}return x}}],["","",,R,{"^":"",
k0:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.jv("span",null),"$isW")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).ao(y,"float")
y.setProperty(x,"left","")
x=C.y.ao(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.I(z,v)}return z},
j7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.t.e2(y/c)
w=-x
v=d.aV(y).aV(1/z[1])
u=H.j([],[T.q])
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.q(z)
z[0]=t
z[1]=0
z[2]=s
r.k(0,v)
C.a.k(u,r)
z=new Float32Array(3)
r=new T.q(z)
z[0]=t
z[1]=0
z[2]=s
r.aZ(0,v)
C.a.k(u,r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
C.a.k(u,new T.q(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
C.a.k(u,new T.q(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
C.a.k(u,new T.q(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
C.a.k(u,new T.q(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
C.a.k(u,new T.q(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
C.a.k(u,new T.q(o))}}a.b6(G.cn(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.j(z,[P.C])
for(q=0;q<u.length;++q)C.a.i(n,q,q)
a.b5(n)},
iB:{"^":"iA;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eg:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.a7("size change "+H.e(y)+" "+H.e(x))
this.dx.cO(y,x)
this.z=y
this.Q=x},"$1","gef",4,0,13]},
iO:{"^":"c;",
cY:function(a,b,c){var z,y
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
y=J.m(z)
y.I(z,this.b)
y.I(z,this.d)
y.I(z,this.c)}},
iP:{"^":"iO;e,f,a,b,c,d",
d0:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.en(y,2)+" fps"
C.q.cw(this.c,b)
x=C.b.G(30*C.t.dK(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isW")
v=w.style
u=""+x+"px"
v.height=u
C.q.I(z,w)},
d_:function(a){return this.d0(a,"")}}}],["","",,A,{"^":"",
ev:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(e,"$isa",[G.aS],"$asa")
z=b.dx
z.E(c)
y=b.d
z.c_(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.e(b)
w=C.a.ge8(e)
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
v.dQ(new T.ba(u))
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
w.i(0,"uTransformationMatrix",y)
w.i(0,"uModelMatrix",z)
w.i(0,"uNormalMatrix",v)
C.a.k(e,x)
a.cR(b.cx,e,d)
if(0>=e.length)return H.i(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.G)(y),++r)A.ev(a,y[r],z,d,e)},
by:{"^":"dO;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
cA:{"^":"aR;d,e,f,a,b,c"},
iA:{"^":"aR;",
cW:function(a,b,c){if(this.d==null)this.d=new G.hm(this.e,null,null,null,null)},
cQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f9(v.a,36160,z)
J.fL(v.a,this.x,this.y,x,w)
if(y!==0)J.fc(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.c,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
s=t.e
C.a.k(s,new G.aS(P.a3(x,w),"transforms",!1,!0))
r=new T.S(new Float32Array(16))
r.K()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.G)(v),++o)A.ev(p,v[o],r,a,s)
if(0>=s.length)return H.i(s,-1)
s.pop()}},
cP:function(){return this.cQ(null)}}}],["","",,V,{}],["","",,D,{"^":"",
hV:function(a){var z,y,x,w
z=[P.J,,,]
y=new P.O(0,$.E,[z])
x=new XMLHttpRequest()
C.z.eb(x,"GET",a)
w=W.bz
W.ai(x,"loadend",H.k(new D.hW(new P.cH(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.cv(x,"")
return y},
hT:function(a){var z,y,x,w
z=W.bU
y=new P.O(0,$.E,[z])
x=document.createElement("img")
w=new W.bC(x,"load",!1,[W.N])
w.ge1(w).ag(new D.hU(new P.cH(y,[z]),x),-1)
x.src=a
return y},
hW:{"^":"n:25;a,b",
$1:function(a){H.f(a,"$isbz")
this.a.a2(0,H.b_(C.U.dV(0,H.v(W.kS(this.b.response))),{futureOr:1,type:[P.J,,,]}))}},
hU:{"^":"n:13;a,b",
$1:function(a){H.f(a,"$isN")
return this.a.a2(0,this.b)}},
hL:{"^":"c;a,b,c",
cU:function(a){var z,y
a=document
z=W.b7
y={func:1,ret:-1,args:[z]}
W.ai(a,"keydown",H.k(new D.hN(this),y),!1,z)
W.ai(a,"keyup",H.k(new D.hO(this),y),!1,z)},
p:{
hM:function(a){var z=P.C
z=new D.hL(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z))
z.cU(a)
return z}}},
hN:{"^":"n:14;a",
$1:function(a){var z
H.f(a,"$isb7")
z=this.a
z.a.k(0,a.which)
z.b.k(0,a.which)}},
hO:{"^":"n:14;a",
$1:function(a){var z
H.f(a,"$isb7")
z=this.a
z.a.c6(0,a.which)
z.c.k(0,a.which)}},
i4:{"^":"c;a,b,c,d,e,f,r,x",
cV:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gc2(a)
x=H.o(y,0)
W.ai(y.a,y.b,H.k(new D.i6(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc1(a)
y=H.o(x,0)
W.ai(x.a,x.b,H.k(new D.i7(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc3(a)
x=H.o(y,0)
W.ai(y.a,y.b,H.k(new D.i8(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc4(a)
x=H.o(z,0)
W.ai(z.a,z.b,H.k(new D.i9(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
i5:function(a){var z=P.C
z=new D.i4(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),0,0,0,0,0)
z.cV(a)
return z}}},
i6:{"^":"n:4;a",
$1:function(a){var z,y
H.f(a,"$isX")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.u(y.gc0(a).a)
z.x=H.u(y.gc0(a).b)
z.d=a.movementX
z.e=a.movementY}},
i7:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isX")
a.preventDefault()
P.a7("BUTTON "+H.e(a.button))
z=this.a
z.a.k(0,a.button)
z.b.k(0,a.button)}},
i8:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isX")
a.preventDefault()
z=this.a
z.a.c6(0,a.button)
z.c.k(0,a.button)}},
i9:{"^":"n:27;a",
$1:function(a){H.f(a,"$isaT")
a.preventDefault()
this.a.f=H.u(C.af.gdY(a))}},
ii:{"^":"fS;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bI:function(a){var z,y
z=C.f.e3(H.t(a,"$isl",[P.c],"$asl"),0,new A.le(),P.C)
if(typeof z!=="number")return H.as(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
le:{"^":"n:28;",
$2:function(a,b){var z,y
H.u(a)
z=J.au(b)
if(typeof a!=="number")return a.J()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ba:{"^":"c;a",
E:function(a){var z,y
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
l:function(a){return"[0] "+this.O(0).l(0)+"\n[1] "+this.O(1).l(0)+"\n[2] "+this.O(2).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.i(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ba){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bI(this.a)},
O:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.i(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.i(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.i(y,x)
z[2]=y[x]
return new T.q(z)},
dQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.E(a)
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
return m}},S:{"^":"c;a",
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
l:function(a){return"[0] "+this.O(0).l(0)+"\n[1] "+this.O(1).l(0)+"\n[2] "+this.O(2).l(0)+"\n[3] "+this.O(3).l(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bI(this.a)},
O:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.i(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.i(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.i(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.i(y,x)
z[3]=y[x]
return new T.a4(z)},
K:function(){var z=this.a
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
c_:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ah:{"^":"c;a",
l:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ah){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bI(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gY:function(a){return this.a[0]},
gT:function(a){return this.a[1]}},q:{"^":"c;a",
a_:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bI(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbX:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aG:function(a){var z,y,x
z=Math.sqrt(this.gbX())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aE:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bN:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.q(new Float32Array(3))
z.a_(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
k:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
aZ:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
ct:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
aV:function(a){var z=new T.q(new Float32Array(3))
z.E(this)
z.ct(0,a)
return z},
gY:function(a){return this.a[0]},
gT:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
p:{
cF:function(a,b,c){var z=new T.q(new Float32Array(3))
z.a_(a,b,c)
return z},
dY:function(a){var z=new Float32Array(3)
z[2]=a
z[1]=a
z[0]=a
return new T.q(z)}}},a4:{"^":"c;a",
E:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
l:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a4){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bI(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gY:function(a){return this.a[0]},
gT:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
gcp:function(a){return this.a[3]}}}],["","",,L,{"^":"",
eC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z={}
y=document
x=C.r.cs(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iP(0,0,x,w,y.createElement("div"),R.k0("blue","gray",90,30))
u.cY(x,"blue","gray")
t=H.f(C.r.ed(y,"#webgl-canvas"),"$isbp")
s=new G.fU(t)
y=P.d
x=P.c
v=(t&&C.J).cr(t,"webgl2",P.dD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a8(P.dv('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fv(v))
if($.ew>0)P.a7("I: "+r)
J.fd(v,0,0,0,1)
J.bn(v,2929)
J.bn(v,2884)
v=new Float32Array(3)
r=D.hM(null)
q=D.i5(t)
p=new T.S(new Float32Array(16))
p.K()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.ii(0.3,0,0,0,new T.q(v),-0.02,r,q,p,new T.q(o),new T.q(n),new T.q(m),new T.q(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.S(new Float32Array(16))
v.K()
r=new T.S(new Float32Array(16))
r.K()
k=new G.ik(l,50,1,0.01,1000,v,r,new T.S(new Float32Array(16)),P.a3(y,x),"perspective",!1,!0)
k.b9()
v=$.f_()
r=$.eX()
q=$.eZ()
p=new Float32Array(16)
o=new Float32Array(16)
n=H.j([],[G.cw])
m=new Float32Array(64)
j=new G.hx(n,m,new Float32Array(4),P.a3(y,x),"illumination",!1,!0)
C.a.k(n,new G.h8(v,r,q,40,new T.S(p),new T.S(o),1,"dir",!1,!0))
y=H.j([],[A.cA])
i=new R.iB(t,k,null,s,y,17664,0,0,0,0,"main",!1,!0)
i.cW("main",s,null)
i.eg(null)
r=W.N
W.ai(window,"resize",H.k(i.gef(),{func:1,ret:-1,args:[r]}),!1,r)
r=G.dM("Fixed",s,$.f2(),$.f1())
q=[G.aS]
p=H.j([k,j],q)
o=[A.by]
n=H.j([],o)
C.a.k(y,new A.cA(r,p,n,"Fixed",!1,!0))
h=G.dG("light")
h.d.i(0,"uColor",$.eI())
g=G.dH("dirLightViz",r.d,1,r.e.x)
g.b3(new Float32Array(3))
g.b1(H.j([0,0],[P.C]))
R.j7(g,40,10,v)
v=H.j([],o)
r=new Float32Array(9)
p=new T.S(new Float32Array(16))
p.K()
m=new T.S(new Float32Array(16))
m.K()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
C.a.k(n,new A.by(h,g,v,new T.ba(r),p,m,new T.q(f),new T.q(e),new T.q(d),new T.q(new Float32Array(3)),"pointLight",!1,!0))
v=G.dM("main",s,$.f3(),$.f0())
q=H.j([k,j],q)
o=H.j([],o)
c=new A.cA(v,q,o,"main",!1,!0)
C.a.k(y,c)
z.a=0
P.hp(H.j([D.hV("../asset/leeperrysmith/LeePerrySmith.js"),D.hT("../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg")],[[P.a1,P.c]]),null,!1,x).ag(new L.ls(s,c,new L.lr(z,l,i,u)),null)},
lr:{"^":"n:29;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cT(a7)
if(typeof a7!=="number")return a7.aY()
z=this.a
z.a=a7+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aT()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aT()
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
if(typeof v!=="number")return v.aT()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.m.dL(y.id,-1.4707963267948965,1.4707963267948965)
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
t=y.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
y.bZ(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gbX())
o=v[0]/p
n=v[1]/p
m=v[2]/p
l=Math.cos(y)
k=Math.sin(y)
j=1-l
i=o*o*j+l
y=m*k
h=o*n*j-y
v=n*k
g=o*m*j+v
f=n*o*j+y
e=n*n*j+l
y=o*k
d=n*m*j-y
c=m*o*j-v
b=m*n*j+y
a=m*m*j+l
y=q[0]
v=q[4]
t=q[8]
u=q[1]
r=q[5]
a0=q[9]
a1=q[2]
a2=q[6]
a3=q[10]
a4=q[3]
a5=q[7]
a6=q[11]
q[0]=y*i+v*f+t*c
q[1]=u*i+r*f+a0*c
q[2]=a1*i+a2*f+a3*c
q[3]=a4*i+a5*f+a6*c
q[4]=y*h+v*e+t*b
q[5]=u*h+r*e+a0*b
q[6]=a1*h+a2*e+a3*b
q[7]=a4*h+a5*e+a6*b
q[8]=y*g+v*d+t*a
q[9]=u*g+r*d+a0*a
q[10]=a1*g+a2*d+a3*a
q[11]=a4*g+a5*d+a6*a
w.c.S(0)
w.b.S(0)
x.e=0
x.d=0
x.f=0
x.c.S(0)
x.b.S(0)
this.c.cP()
C.ag.gdD(window).ag(this,-1)
this.d.d_(z.a)}},
ls:{"^":"n:30;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.V(a)
z=this.a
y=J.U(a)
x=y.h(a,1)
w=J.fg(z.a)
J.bm(z.a,3553,w)
J.fA(z.a,37440,1)
J.bm(z.a,3553,w)
J.fC(z.a,3553,0,6408,6408,5121,x)
J.d4(z.a,3553,10240,9729)
J.d4(z.a,3553,10241,9729)
J.fw(z.a)
J.bm(z.a,3553,null)
v=G.dG("mat")
u=v.d
u.i(0,"uColor",$.eY())
u.i(0,"uShininess",10)
u.i(0,"uBumpMap",new G.hz(x,"../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg",w,3553,z,new G.j_(!1,!1,!1,!0,1,9729,9729)))
u.i(0,"uBumpScale",12)
t=Y.hA(H.f(y.h(a,0),"$isJ"))
if(0>=t.length)return H.i(t,0)
P.a7(t[0])
y=this.b
u=y.d
if(0>=t.length)return H.i(t,0)
z=t[0]
s=G.dH("../asset/leeperrysmith/LeePerrySmith.js",u.d,4,u.e.x)
s.b3(G.cn(z.d,null))
s.b1(z.cS())
G.jP(z,s)
z=[A.by]
x=H.j([],z)
w=new Float32Array(9)
u=new T.S(new Float32Array(16))
u.K()
r=new T.S(new Float32Array(16))
r.K()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
z=H.j([],z)
m=new Float32Array(9)
l=new T.S(new Float32Array(16))
l.K()
k=new T.S(new Float32Array(16))
k.K()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.by(null,null,z,new T.ba(m),l,k,new T.q(j),new T.q(i),new T.q(h),new T.q(new Float32Array(3)),"wrapper",!1,!0)
C.a.k(z,new A.by(v,s,x,new T.ba(w),u,r,new T.q(q),new T.q(p),new T.q(o),new T.q(n),s.a,!1,!0))
z=new T.q(new Float32Array(3))
z.a_(100,0,0)
g.bZ(z)
C.a.k(y.f,g)
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dB.prototype
return J.dA.prototype}if(typeof a=="string")return J.bw.prototype
if(a==null)return J.hH.prototype
if(typeof a=="boolean")return J.hG.prototype
if(a.constructor==Array)return J.bu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.U=function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(a.constructor==Array)return J.bu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.bH=function(a){if(a==null)return a
if(a.constructor==Array)return J.bu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.ex=function(a){if(typeof a=="number")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bh.prototype
return a}
J.lb=function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bh.prototype
return a}
J.ey=function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bh.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.c6=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.bh.prototype
return a}
J.aP=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).C(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ex(a).U(a,b)}
J.b2=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lo(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.U(a).h(a,b)}
J.f4=function(a,b,c){return J.bH(a).i(a,b,c)}
J.cY=function(a,b){return J.ey(a).ap(a,b)}
J.bM=function(a,b){return J.m(a).dn(a,b)}
J.f5=function(a,b,c,d){return J.m(a).dq(a,b,c,d)}
J.f6=function(a,b,c){return J.m(a).dr(a,b,c)}
J.cZ=function(a,b){return J.m(a).bv(a,b)}
J.f7=function(a,b,c,d){return J.m(a).bw(a,b,c,d)}
J.d_=function(a,b,c){return J.m(a).by(a,b,c)}
J.f8=function(a,b){return J.m(a).dF(a,b)}
J.ca=function(a,b,c){return J.m(a).bz(a,b,c)}
J.f9=function(a,b,c){return J.m(a).bB(a,b,c)}
J.bm=function(a,b,c){return J.m(a).bC(a,b,c)}
J.bN=function(a,b){return J.m(a).dI(a,b)}
J.fa=function(a,b){return J.m(a).bD(a,b)}
J.fb=function(a,b,c){return J.m(a).bE(a,b,c)}
J.d0=function(a,b,c,d){return J.m(a).bF(a,b,c,d)}
J.fc=function(a,b){return J.bH(a).bG(a,b)}
J.fd=function(a,b,c,d,e){return J.m(a).bH(a,b,c,d,e)}
J.fe=function(a,b){return J.lb(a).M(a,b)}
J.cb=function(a,b,c){return J.U(a).dO(a,b,c)}
J.cc=function(a){return J.m(a).bJ(a)}
J.ff=function(a){return J.m(a).bK(a)}
J.fg=function(a){return J.m(a).bM(a)}
J.fh=function(a){return J.m(a).dU(a)}
J.fi=function(a,b){return J.m(a).bO(a,b)}
J.cd=function(a,b){return J.m(a).bP(a,b)}
J.fj=function(a,b,c,d){return J.m(a).bQ(a,b,c,d)}
J.fk=function(a,b,c,d,e){return J.m(a).dZ(a,b,c,d,e)}
J.fl=function(a,b,c,d,e){return J.m(a).bR(a,b,c,d,e)}
J.fm=function(a,b,c,d,e,f){return J.m(a).e_(a,b,c,d,e,f)}
J.fn=function(a,b){return J.bH(a).q(a,b)}
J.bn=function(a,b){return J.m(a).bS(a,b)}
J.fo=function(a,b){return J.m(a).bT(a,b)}
J.fp=function(a){return J.m(a).e0(a)}
J.fq=function(a,b){return J.m(a).B(a,b)}
J.fr=function(a){return J.m(a).gdE(a)}
J.au=function(a){return J.A(a).gv(a)}
J.bO=function(a){return J.bH(a).gw(a)}
J.al=function(a){return J.U(a).gj(a)}
J.fs=function(a){return J.m(a).gec(a)}
J.ft=function(a){return J.m(a).gek(a)}
J.fu=function(a){return J.c6(a).gcp(a)}
J.bP=function(a){return J.c6(a).gY(a)}
J.ce=function(a){return J.c6(a).gT(a)}
J.d1=function(a){return J.c6(a).gah(a)}
J.cf=function(a,b){return J.m(a).Z(a,b)}
J.fv=function(a){return J.m(a).ai(a)}
J.fw=function(a){return J.m(a).aM(a)}
J.fx=function(a,b){return J.m(a).aN(a,b)}
J.fy=function(a,b,c){return J.m(a).aO(a,b,c)}
J.d2=function(a,b,c){return J.m(a).aS(a,b,c)}
J.fz=function(a,b){return J.m(a).bY(a,b)}
J.fA=function(a,b,c){return J.m(a).c5(a,b,c)}
J.d3=function(a){return J.m(a).ee(a)}
J.fB=function(a,b,c,d){return J.m(a).aX(a,b,c,d)}
J.fC=function(a,b,c,d,e,f,g){return J.m(a).c8(a,b,c,d,e,f,g)}
J.d4=function(a,b,c,d){return J.m(a).c9(a,b,c,d)}
J.aQ=function(a){return J.ex(a).el(a)}
J.fD=function(a){return J.ey(a).em(a)}
J.bo=function(a){return J.A(a).l(a)}
J.fE=function(a,b,c,d){return J.m(a).eo(a,b,c,d)}
J.fF=function(a,b,c){return J.m(a).cb(a,b,c)}
J.fG=function(a,b,c){return J.m(a).cc(a,b,c)}
J.cg=function(a,b,c){return J.m(a).cd(a,b,c)}
J.fH=function(a,b,c){return J.m(a).ce(a,b,c)}
J.d5=function(a,b,c){return J.m(a).cf(a,b,c)}
J.d6=function(a,b,c){return J.m(a).cg(a,b,c)}
J.d7=function(a,b,c){return J.m(a).ci(a,b,c)}
J.d8=function(a,b,c,d){return J.m(a).cj(a,b,c,d)}
J.d9=function(a,b,c,d){return J.m(a).ck(a,b,c,d)}
J.fI=function(a,b){return J.m(a).cl(a,b)}
J.fJ=function(a,b,c){return J.m(a).ep(a,b,c)}
J.fK=function(a,b,c,d,e,f,g){return J.m(a).cm(a,b,c,d,e,f,g)}
J.fL=function(a,b,c,d,e){return J.m(a).co(a,b,c,d,e)}
I.aN=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bQ.prototype
C.J=W.bp.prototype
C.y=W.h1.prototype
C.q=W.h9.prototype
C.K=W.ha.prototype
C.L=W.ht.prototype
C.r=W.hu.prototype
C.z=W.hv.prototype
C.M=J.h.prototype
C.a=J.bu.prototype
C.t=J.dA.prototype
C.b=J.dB.prototype
C.m=J.bv.prototype
C.i=J.bw.prototype
C.T=J.bx.prototype
C.f=H.ia.prototype
C.n=H.ic.prototype
C.w=W.id.prototype
C.C=J.il.prototype
C.D=W.iw.prototype
C.I=W.iY.prototype
C.x=J.bh.prototype
C.af=W.aT.prototype
C.ag=W.ja.prototype
C.e=new P.kc()
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=new P.hJ(null,null)
C.V=new P.hK(null)
C.W=H.j(I.aN(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.j(I.aN(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Z=H.j(I.aN([]),[P.D])
C.Y=H.j(I.aN([]),[P.d])
C.u=H.j(I.aN(["bind","if","ref","repeat","syntax"]),[P.d])
C.v=H.j(I.aN(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a_=new G.F("vec3","vertex btangents",0)
C.d=new G.F("vec3","",0)
C.a0=new G.F("vec4","delta from light",0)
C.o=new G.F("","",0)
C.E=new G.F("vec3","vertex coordinates",0)
C.a1=new G.F("vec3","vertex binormals",0)
C.F=new G.F("vec4","for wireframe",0)
C.a2=new G.F("vec4","per vertex color",0)
C.a3=new G.F("float","for normal maps",0)
C.j=new G.F("mat4","",0)
C.a5=new G.F("mat4","",4)
C.a4=new G.F("mat4","",128)
C.c=new G.F("float","",0)
C.a6=new G.F("float","",4)
C.a7=new G.F("float","depth for shadowmaps",0)
C.h=new G.F("sampler2D","",0)
C.a8=new G.F("float","for bump maps",0)
C.a9=new G.F("vec2","texture uvs",0)
C.aa=new G.F("float","time since program start in sec",0)
C.k=new G.F("vec2","",0)
C.ab=new G.F("samplerCube","",0)
C.l=new G.F("vec4","",0)
C.ac=new G.F("vec3","vertex normals",0)
C.ad=new G.F("sampler2DShadow","",0)
C.G=new G.F("vec3","per vertex color",0)
C.H=new G.F("mat3","",0)
C.ae=new G.F("vec3","vertex tangents",0)
$.ae=0
$.b3=null
$.dd=null
$.cJ=!1
$.eA=null
$.er=null
$.eF=null
$.c5=null
$.c8=null
$.cR=null
$.aW=null
$.bi=null
$.bj=null
$.cK=!1
$.E=C.e
$.am=null
$.cm=null
$.dt=null
$.ds=null
$.dp=null
$.dn=null
$.dm=null
$.dl=null
$.ew=0
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
I.$lazy(y,x,w)}})(["lN","eK",function(){return H.ez("_$dart_dartClosure")},"mn","cV",function(){return H.ez("_$dart_js")},"n8","eM",function(){return H.ag(H.bY({
toString:function(){return"$receiver$"}}))},"n9","eN",function(){return H.ag(H.bY({$method$:null,
toString:function(){return"$receiver$"}}))},"na","eO",function(){return H.ag(H.bY(null))},"nb","eP",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ne","eS",function(){return H.ag(H.bY(void 0))},"nf","eT",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nd","eR",function(){return H.ag(H.dV(null))},"nc","eQ",function(){return H.ag(function(){try{null.$method$}catch(z){return z.message}}())},"nh","eV",function(){return H.ag(H.dV(void 0))},"ng","eU",function(){return H.ag(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nq","cW",function(){return P.jg()},"nG","bl",function(){return[]},"lK","eJ",function(){return{}},"nx","eW",function(){return P.cx(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"ny","cX",function(){return P.a3(P.d,P.bs)},"mW","eL",function(){return new G.dU(1281,0,4294967295)},"lF","eH",function(){return new G.dT(1281,1281,1281)},"nE","ac",function(){return P.dD(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a2,"aPosition",C.E,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.a0,"vCenter",C.F,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.c,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.d,G.F)},"lI","eI",function(){return T.cF(1,1,0)},"nQ","f2",function(){var z,y
z=G.bX("SolidColor")
y=[P.d]
z.b_(H.j(["aPosition"],y))
z.V(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.am(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nP","f1",function(){var z,y
z=G.bX("SolidColorF")
y=[P.d]
z.V(H.j(["uColor"],y))
z.am(H.j(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"nR","f3",function(){var z,y
z=G.bX("LightBlinnPhongFancyV")
y=[P.d]
z.b_(H.j(["aPosition","aNormal","aTexUV"],y))
z.b2(H.j(["vPosition","vNormal","vTexUV"],y))
z.V(H.j(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.am(H.j(["vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\ngl_Position = uPerspectiveViewMatrix * pos;\nvPosition = pos.xyz;\nvTexUV = aTexUV;\nvNormal = uNormalMatrix * aNormal;\n"],y))
return z},"nN","f0",function(){var z,y
z=G.bX("LightBlinnPhongFancyF")
y=[P.d]
z.b2(H.j(["vPosition","vNormal","vTexUV"],y))
z.V(H.j(["uLightDescs","uLightTypes","uShininess"],y))
z.V(H.j(["uEyePosition","uColor"],y))
z.V(H.j(["uBumpScale","uBumpMap"],y))
z.b8(H.j(["vec2 uv = dHdxy_fwd(vTexUV, uBumpScale, uBumpMap);\nvec3 normal =normalize(vNormal);\nnormal = perturbNormalArb(vPosition - uEyePosition, normal, uv);\nColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    normal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\noFragColor.rgb = acc.diffuse + acc.specular + uColor;\noFragColor.a = 1.0;\n\n"],y),H.j(["vec2 dHdxy_fwd(vec2 uv, float scale, sampler2D map) {\n    vec2 dSTdx = dFdx( uv );\n    vec2 dSTdy = dFdy( uv );\n\n    float Hll = scale * texture(map, uv ).x;\n    float dBx = scale * texture(map, uv + dSTdx ).x - Hll;\n    float dBy = scale * texture(map, uv + dSTdy ).x - Hll;\n\n    return vec2( dBx, dBy );\n}\n\nvec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {\n    surf_norm = normalize  (surf_norm);\n    vec3 vSigmaX = dFdx( surf_pos );\n    vec3 vSigmaY = dFdy( surf_pos );\n    vec3 vN = surf_norm;            // normalized\n\n    vec3 R1 = cross( vSigmaY, vN );\n    vec3 R2 = cross( vN, vSigmaX );\n\n    float fDet = dot( vSigmaX, R1 );\n\n    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n    return normalize( abs( fDet ) * surf_norm - vGrad );\n}\n","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nI","eY",function(){return T.cF(0.333,0.157,0.067)},"nM","f_",function(){return T.cF(-1,-1,0)},"nH","eX",function(){return T.dY(0.3)},"nJ","eZ",function(){return T.dY(0.133)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.X]},{func:1,ret:P.d,args:[P.C]},{func:1,ret:P.D,args:[,,]},{func:1,args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.T,args:[W.af]},{func:1,ret:P.T,args:[P.d]},{func:1,ret:P.T,args:[W.W,P.d,P.d,W.bE]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.N]},{func:1,ret:P.D,args:[W.b7]},{func:1,args:[P.d]},{func:1,ret:P.D,args:[,P.Q]},{func:1,ret:P.D,args:[,],opt:[P.Q]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:P.T,args:[W.w]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.D,args:[P.H]},{func:1,args:[W.N]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.D,args:[W.bz]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.aT]},{func:1,ret:P.C,args:[P.C,P.c]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.D,args:[[P.a,,]]},{func:1,ret:P.C,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
if(x==y)H.ly(d||a)
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
Isolate.aN=a.aN
Isolate.bk=a.bk
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
if(typeof dartMainRunner==="function")dartMainRunner(L.eC,[])
else L.eC([])})})()
//# sourceMappingURL=bumpmap.dart.js.map
