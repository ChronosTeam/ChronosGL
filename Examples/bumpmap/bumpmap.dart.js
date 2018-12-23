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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cK(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",mg:{"^":"b;a"}}],["","",,J,{"^":"",
cP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cO==null){H.lg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cC("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cS()]
if(v!=null)return v
v=H.ll(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cS(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
h:{"^":"b;",
C:function(a,b){return a===b},
gv:function(a){return H.bc(a)},
k:["cw",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hB:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isS:1},
hC:{"^":"h;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isB:1},
cs:{"^":"h;",
gv:function(a){return 0},
k:["cA",function(a){return String(a)}]},
ig:{"^":"cs;"},
bg:{"^":"cs;"},
bw:{"^":"cs;",
k:function(a){var z=a[$.eG()]
if(z==null)return this.cA(a)
return"JavaScript function for "+H.e(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbr:1},
bt:{"^":"h;$ti",
l:function(a,b){H.z(b,H.o(a,0))
if(!!a.fixed$length)H.a2(P.C("add"))
a.push(b)},
H:function(a,b){var z,y
H.t(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.a2(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
ge1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cq())},
bq:function(a,b){var z,y
H.j(b,{func:1,ret:P.S,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aw(a))}return!1},
cq:function(a,b){if(!!a.immutable$list)H.a2(P.C("sort"))
H.iI(a,J.kP(),H.o(a,0))},
aj:function(a){return this.cq(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aP(a[z],b))return!0
return!1},
k:function(a){return P.cp(a,"[","]")},
gw:function(a){return new J.d7(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.bc(a)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aL(a,b))
if(b>=a.length||b<0)throw H.c(H.aL(a,b))
return a[b]},
i:function(a,b,c){H.r(b)
H.z(c,H.o(a,0))
if(!!a.immutable$list)H.a2(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aL(a,b))
if(b>=a.length||b<0)throw H.c(H.aL(a,b))
a[b]=c},
$isw:1,
$asw:I.bj,
$isl:1,
$isa:1,
p:{
hA:function(a,b){return J.cr(H.k(a,[b]))},
cr:function(a){H.U(a)
a.fixed$length=Array
return a},
me:[function(a,b){return J.f8(H.eA(a,"$isa_"),H.eA(b,"$isa_"))},"$2","kP",8,0,31]}},
mf:{"^":"bt;$ti"},
d7:{"^":"b;a,b,c,0d,$ti",
sb3:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.G(z))
x=this.c
if(x>=y){this.sb3(null)
return!1}this.sb3(z[x]);++this.c
return!0},
$isb6:1},
bu:{"^":"h;",
L:function(a,b){var z
H.cQ(b)
if(typeof b!=="number")throw H.c(H.aZ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaf(b)
if(this.gaf(a)===z)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf:function(a){return a===0?1/a<0:a<0},
c3:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.C(""+a+".toInt()"))},
dE:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.C(""+a+".ceil()"))},
dF:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.aZ(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
ee:function(a){return a},
eg:function(a,b){var z
if(b>20)throw H.c(P.be(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bm(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bm(a,b)},
bm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.C("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bk:function(a,b){var z
if(a>0)z=this.dq(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dq:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.c(H.aZ(b))
return a>b},
$isa_:1,
$asa_:function(){return[P.H]},
$isak:1,
$isH:1},
dy:{"^":"bu;",$isE:1},
dx:{"^":"bu;"},
bv:{"^":"h;",
an:function(a,b){if(b>=a.length)throw H.c(H.aL(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.d6(b,null,null))
return a+b},
cs:function(a,b,c){var z
if(c>a.length)throw H.c(P.be(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cr:function(a,b){return this.cs(a,b,0)},
cu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bX(b,null,null))
if(b>c)throw H.c(P.bX(b,null,null))
if(c>a.length)throw H.c(P.bX(c,null,null))
return a.substring(b,c)},
ct:function(a,b){return this.cu(a,b,null)},
ef:function(a){return a.toLowerCase()},
dI:function(a,b,c){if(c>a.length)throw H.c(P.be(c,0,a.length,null,null))
return H.ls(a,b,c)},
L:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.aZ(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aL(a,b))
return a[b]},
$isw:1,
$asw:I.bj,
$isa_:1,
$asa_:function(){return[P.d]},
$isid:1,
$isd:1}}],["","",,H,{"^":"",
cq:function(){return new P.cz("No element")},
hz:function(){return new P.cz("Too many elements")},
iI:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.E,args:[c,c]})
H.bz(a,0,J.al(a)-1,b,c)},
bz:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.iH(a,b,c,d,e)
else H.iG(a,b,c,d,e)},
iH:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.T(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iG:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.b.G(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.G(b+a0,2)
v=w-z
u=w+z
t=J.T(a)
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
if(typeof i!=="number")return i.a3()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.U()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.U()
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
H.bz(a,b,m-2,a1,a2)
H.bz(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aP(a1.$2(t.h(a,m),r),0);)++m
for(;J.aP(a1.$2(t.h(a,l),p),0);)--l
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
break}}H.bz(a,m,l,a1,a2)}else H.bz(a,m,l,a1,a2)},
dm:{"^":"l;"},
b9:{"^":"dm;$ti",
gw:function(a){return new H.dB(this,this.gj(this),0,[H.cN(this,"b9",0)])},
aK:function(a,b){return this.cz(0,H.j(b,{func:1,ret:P.S,args:[H.cN(this,"b9",0)]}))}},
dB:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.T(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aw(z))
w=this.c
if(w>=x){this.sb4(null)
return!1}this.sb4(y.q(z,w));++this.c
return!0},
$isb6:1},
hU:{"^":"b9;a,b,$ti",
gj:function(a){return J.al(this.a)},
q:function(a,b){return this.b.$1(J.fh(this.a,b))},
$asb9:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dW:{"^":"l;a,b,$ti",
gw:function(a){return new H.j4(J.bN(this.a),this.b,this.$ti)}},
j4:{"^":"b6;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bT:{"^":"b;$ti"}}],["","",,H,{"^":"",
aO:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
l8:function(a){return init.types[H.r(a)]},
lj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isy},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.c(H.aZ(a))
return z},
bc:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bd:function(a){return H.ih(a)+H.c2(H.ar(a),0,null)},
ih:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbg){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aO(w.length>1&&C.i.an(w,0)===36?C.i.ct(w,1):w)},
X:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ip:function(a){return a.b?H.X(a).getUTCFullYear()+0:H.X(a).getFullYear()+0},
im:function(a){return a.b?H.X(a).getUTCMonth()+1:H.X(a).getMonth()+1},
ii:function(a){return a.b?H.X(a).getUTCDate()+0:H.X(a).getDate()+0},
ij:function(a){return a.b?H.X(a).getUTCHours()+0:H.X(a).getHours()+0},
il:function(a){return a.b?H.X(a).getUTCMinutes()+0:H.X(a).getMinutes()+0},
io:function(a){return a.b?H.X(a).getUTCSeconds()+0:H.X(a).getSeconds()+0},
ik:function(a){return a.b?H.X(a).getUTCMilliseconds()+0:H.X(a).getMilliseconds()+0},
as:function(a){throw H.c(H.aZ(a))},
i:function(a,b){if(a==null)J.al(a)
throw H.c(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.av(!0,b,"index",null)
z=H.r(J.al(a))
if(!(b<0)){if(typeof z!=="number")return H.as(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bX(b,"index",null)},
aZ:function(a){return new P.av(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eD})
z.name=""}else z.toString=H.eD
return z},
eD:function(){return J.bn(this.dartException)},
a2:function(a){throw H.c(a)},
G:function(a){throw H.c(P.aw(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lu(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bk(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cu(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eI()
u=$.eJ()
t=$.eK()
s=$.eL()
r=$.eO()
q=$.eP()
p=$.eN()
$.eM()
o=$.eR()
n=$.eQ()
m=v.K(y)
if(m!=null)return z.$1(H.cu(H.u(y),m))
else{m=u.K(y)
if(m!=null){m.method="call"
return z.$1(H.cu(H.u(y),m))}else{m=t.K(y)
if(m==null){m=s.K(y)
if(m==null){m=r.K(y)
if(m==null){m=q.K(y)
if(m==null){m=p.K(y)
if(m==null){m=s.K(y)
if(m==null){m=o.K(y)
if(m==null){m=n.K(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(H.u(y),m))}}return z.$1(new H.j1(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dL()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.av(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dL()
return a},
aM:function(a){var z
if(a==null)return new H.ec(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ec(a)},
l5:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
li:function(a,b,c,d,e,f){H.f(a,"$isbr")
switch(H.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.dr("Unsupported number of arguments for wrapped closure"))},
aq:function(a,b){var z
H.r(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.li)
a.$identity=z
return z},
fT:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.iu(z).r}else x=d
w=e?Object.create(new H.iJ().constructor.prototype):Object.create(new H.ci(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.J()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dc(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.l8,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.da:H.cj
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dc(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fQ:function(a,b,c,d){var z=H.cj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dc:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fS(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fQ(y,!w,z,b)
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
fR:function(a,b,c,d){var z,y
z=H.cj
y=H.da
switch(b?-1:a){case 0:throw H.c(H.iB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fS:function(a,b){var z,y,x,w,v,u,t,s
z=$.b3
if(z==null){z=H.bR("self")
$.b3=z}y=$.d9
if(y==null){y=H.bR("receiver")
$.d9=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fR(w,!u,x,b)
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
cK:function(a,b,c,d,e,f,g){return H.fT(a,b,H.r(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aa(a,"String"))},
cL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"double"))},
cQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"num"))},
c4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aa(a,"bool"))},
r:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aa(a,"int"))},
cR:function(a,b){throw H.c(H.aa(a,H.aO(H.u(b).substring(3))))},
lq:function(a,b){throw H.c(H.db(a,H.aO(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cR(a,b)},
at:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.lq(a,b)},
eA:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cR(a,b)},
U:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.aa(a,"List<dynamic>"))},
lk:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cR(a,b)},
cM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.r(z)]
else return a.$S()}return},
bF:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cM(J.A(a))
if(z==null)return!1
return H.ei(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.cG)return a
$.cG=!0
try{if(H.bF(a,b))return a
z=H.bJ(b)
y=H.aa(a,z)
throw H.c(y)}finally{$.cG=!1}},
b_:function(a,b){if(a!=null&&!H.cJ(a,b))H.a2(H.aa(a,H.bJ(b)))
return a},
em:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cM(z)
if(y!=null)return H.bJ(y)
return"Closure"}return H.bd(a)},
lt:function(a){throw H.c(new P.h_(H.u(a)))},
ew:function(a){return init.getIsolateTag(a)},
k:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
nI:function(a,b,c){return H.b1(a["$as"+H.e(c)],H.ar(b))},
b0:function(a,b,c,d){var z
H.u(c)
H.r(d)
z=H.b1(a["$as"+H.e(c)],H.ar(b))
return z==null?null:z[d]},
cN:function(a,b,c){var z
H.u(b)
H.r(c)
z=H.b1(a["$as"+H.e(b)],H.ar(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.r(b)
z=H.ar(a)
return z==null?null:z[b]},
bJ:function(a){return H.aK(a,null)},
aK:function(a,b){var z,y
H.t(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aO(a[0].builtin$cls)+H.c2(a,1,b)
if(typeof a=="function")return H.aO(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.r(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.kO(a,b)
if('futureOr' in a)return"FutureOr<"+H.aK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.k([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aK(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aK(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aK(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l4(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aK(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c2:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cA("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aK(u,c)}return"<"+z.k(0)+">"},
l7:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cM(z)
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
H.u(b)
H.U(c)
H.u(d)
if(a==null)return!1
z=H.ar(a)
y=J.A(a)
if(y[b]==null)return!1
return H.ep(H.b1(y[d],z),null,c,null)},
bK:function(a,b,c,d){H.u(b)
H.U(c)
H.u(d)
if(a==null)return a
if(H.ap(a,b,c,d))return a
throw H.c(H.db(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aO(b.substring(3))+H.c2(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.u(b)
H.U(c)
H.u(d)
if(a==null)return a
if(H.ap(a,b,c,d))return a
throw H.c(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aO(b.substring(3))+H.c2(c,0,null),init.mangledGlobalNames)))},
ep:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a6(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a6(a[y],b,c[y],d))return!1
return!0},
nE:function(a,b,c){return a.apply(b,H.b1(J.A(b)["$as"+H.e(c)],H.ar(b)))},
ey:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="B"||a===-1||a===-2||H.ey(z)}return!1},
cJ:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="B"||b===-1||b===-2||H.ey(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bF(a,b)}z=J.A(a).constructor
y=H.ar(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a6(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cJ(a,b))throw H.c(H.aa(a,H.bJ(b)))
return a},
a6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a6(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.ei(a,b,c,d)
if('func' in a)return c.builtin$cls==="br"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a6("type" in a?a.type:null,b,x,d)
else if(H.a6(a,b,x,d))return!0
else{if(!('$is'+"a0" in y.prototype))return!1
w=y.prototype["$as"+"a0"]
v=H.b1(w,z?a.slice(1):null)
return H.a6(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ep(H.b1(r,z),b,u,d)},
ei:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a6(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a6(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a6(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a6(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lp(m,b,l,d)},
lp:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a6(c[w],d,a[w],b))return!1}return!0},
nF:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
ll:function(a){var z,y,x,w,v,u
z=H.u($.ex.$1(a))
y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eo.$2(a,z))
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
return u.i}if(v==="+")return H.eB(a,x)
if(v==="*")throw H.c(P.cC(z))
if(init.leafTags[z]===true){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eB(a,x)},
eB:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cP(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c9:function(a){return J.cP(a,!1,null,!!a.$isy)},
lo:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c9(z)
else return J.cP(z,c,null,null)},
lg:function(){if(!0===$.cO)return
$.cO=!0
H.lh()},
lh:function(){var z,y,x,w,v,u,t,s
$.c5=Object.create(null)
$.c8=Object.create(null)
H.lc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eC.$1(v)
if(u!=null){t=H.lo(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lc:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aY(C.N,H.aY(C.S,H.aY(C.A,H.aY(C.A,H.aY(C.R,H.aY(C.O,H.aY(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ex=new H.ld(v)
$.eo=new H.le(u)
$.eC=new H.lf(t)},
aY:function(a,b){return a(b)||b},
ls:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
it:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iu:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
y=z[0]
x=z[1]
return new H.it(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iX:{"^":"b;a,b,c,d,e,f",
K:function(a){var z,y,x
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
if(z==null)z=H.k([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ib:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dF:function(a,b){return new H.ib(a,b==null?null:b.method)}}},
hD:{"^":"P;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cu:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hD(a,y,z?null:b.receiver)}}},
j1:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lu:{"^":"n:7;a",
$1:function(a){if(!!J.A(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ec:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isQ:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gcj:function(){return this},
$isbr:1,
gcj:function(){return this}},
dN:{"^":"n;"},
iJ:{"^":"dN;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aO(z)+"'"}},
ci:{"^":"dN;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ci))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.bc(this.a)
else y=typeof z!=="object"?J.au(z):H.bc(z)
return(y^H.bc(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cj:function(a){return a.a},
da:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.ci("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iY:{"^":"P;a",
k:function(a){return this.a},
p:{
aa:function(a,b){return new H.iY("TypeError: "+P.bS(a)+": type '"+H.em(a)+"' is not a subtype of type '"+b+"'")}}},
fO:{"^":"P;a",
k:function(a){return this.a},
p:{
db:function(a,b){return new H.fO("CastError: "+P.bS(a)+": type '"+H.em(a)+"' is not a subtype of type '"+b+"'")}}},
iA:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iB:function(a){return new H.iA(a)}}},
dS:{"^":"b;a,0b,0c,0d",
gad:function(){var z=this.b
if(z==null){z=H.bJ(this.a)
this.b=z}return z},
k:function(a){return this.gad()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gad())
this.d=z}return z},
C:function(a,b){if(b==null)return!1
return b instanceof H.dS&&this.gad()===b.gad()}},
ct:{"^":"cx;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ao(this,[H.o(this,0)])},
ae:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d4(z,b)}else{y=this.e_(b)
return y}},
e_:function(a){var z=this.d
if(z==null)return!1
return this.aE(this.au(z,J.au(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aa(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aa(w,b)
x=y==null?null:y.b
return x}else return this.e0(b)},
e0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.au(z,J.au(a)&0x3ffffff)
x=this.aE(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.av()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.av()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.av()
this.d=x}w=J.au(b)&0x3ffffff
v=this.au(x,w)
if(v==null)this.ax(x,w,[this.aw(b,c)])
else{u=this.aE(v,b)
if(u>=0)v[u].b=c
else v.push(this.aw(b,c))}}},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bh()}},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aw(this))
z=z.c}},
b6:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.aa(a,b)
if(z==null)this.ax(a,b,this.aw(b,c))
else z.b=c},
bh:function(){this.r=this.r+1&67108863},
aw:function(a,b){var z,y
z=new H.hK(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bh()
return z},
aE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aP(a[y].a,b))return y
return-1},
k:function(a){return P.dC(this)},
aa:function(a,b){return a[b]},
au:function(a,b){return a[b]},
ax:function(a,b,c){a[b]=c},
d5:function(a,b){delete a[b]},
d4:function(a,b){return this.aa(a,b)!=null},
av:function(){var z=Object.create(null)
this.ax(z,"<non-identifier-key>",z)
this.d5(z,"<non-identifier-key>")
return z},
$isdz:1},
hK:{"^":"b;a,b,0c,0d"},
ao:{"^":"dm;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hL(z,z.r,this.$ti)
y.c=z.e
return y}},
hL:{"^":"b;a,b,0c,0d,$ti",
sb5:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aw(z))
else{z=this.c
if(z==null){this.sb5(null)
return!1}else{this.sb5(z.a)
this.c=this.c.c
return!0}}},
$isb6:1},
ld:{"^":"n:7;a",
$1:function(a){return this.a(a)}},
le:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
lf:{"^":"n:15;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
l4:function(a){return J.hA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c1:function(a){var z,y
if(!!J.A(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
aj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aL(b,a))},
i6:{"^":"h;",$isiZ:1,"%":"DataView;ArrayBufferView;cy|e6|e7|dD|e8|e9|aB"},
cy:{"^":"i6;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bj,
$isy:1,
$asy:I.bj},
dD:{"^":"e7;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
i:function(a,b,c){H.r(b)
H.cL(c)
H.aj(b,a,a.length)
a[b]=c},
$asbT:function(){return[P.ak]},
$asp:function(){return[P.ak]},
$isl:1,
$asl:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
aB:{"^":"e9;",
i:function(a,b,c){H.r(b)
H.r(c)
H.aj(b,a,a.length)
a[b]=c},
$asbT:function(){return[P.E]},
$asp:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
i5:{"^":"dD;",$isan:1,"%":"Float32Array"},
mp:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mq:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$ishx:1,
"%":"Int32Array"},
mr:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ms:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
i7:{"^":"aB;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$isnc:1,
"%":"Uint32Array"},
mt:{"^":"aB;",
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mu:{"^":"aB;",
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e6:{"^":"cy+p;"},
e7:{"^":"e6+bT;"},
e8:{"^":"cy+p;"},
e9:{"^":"e8+bT;"}}],["","",,P,{"^":"",
jb:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aq(new P.jd(z),1)).observe(y,{childList:true})
return new P.jc(z,y,x)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
nl:[function(a){self.scheduleImmediate(H.aq(new P.je(H.j(a,{func:1,ret:-1})),0))},"$1","kX",4,0,3],
nm:[function(a){self.setImmediate(H.aq(new P.jf(H.j(a,{func:1,ret:-1})),0))},"$1","kY",4,0,3],
nn:[function(a){H.j(a,{func:1,ret:-1})
P.ku(0,a)},"$1","kZ",4,0,3],
hj:function(a,b,c){var z
H.f(b,"$isQ")
if(a==null)a=new P.bW()
z=$.D
if(z!==C.e)z.toString
z=new P.O(0,z,[c])
z.b9(a,b)
return z},
hk:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.t(a,"$isl",[[P.a0,d]],"$asl")
s=[P.a,d]
r=[s]
y=new P.O(0,$.D,r)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hm(z,b,!1,y)
try{for(q=a,p=q.length,o=0,n=0;o<q.length;q.length===p||(0,H.G)(q),++o){w=q[o]
v=n
w.aI(new P.hl(z,v,y,b,!1,d),x,null)
n=++z.b}if(n===0){r=new P.O(0,$.D,r)
r.b8(C.Z)
return r}r=new Array(n)
r.fixed$length=Array
z.a=H.k(r,[d])}catch(m){u=H.Z(m)
t=H.aM(m)
if(z.b===0||!1)return P.hj(u,t,s)
else{z.c=u
z.d=t}}return y},
kT:function(a,b){if(H.bF(a,{func:1,args:[P.b,P.Q]}))return H.j(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bF(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.d6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kR:function(){var z,y
for(;z=$.aW,z!=null;){$.bi=null
y=z.b
$.aW=y
if(y==null)$.bh=null
z.a.$0()}},
nz:[function(){$.cH=!0
try{P.kR()}finally{$.bi=null
$.cH=!1
if($.aW!=null)$.cT().$1(P.eq())}},"$0","eq",0,0,1],
el:function(a){var z=new P.dY(H.j(a,{func:1,ret:-1}))
if($.aW==null){$.bh=z
$.aW=z
if(!$.cH)$.cT().$1(P.eq())}else{$.bh.b=z
$.bh=z}},
kW:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aW
if(z==null){P.el(a)
$.bi=$.bh
return}y=new P.dY(a)
x=$.bi
if(x==null){y.b=z
$.bi=y
$.aW=y}else{y.b=x.b
x.b=y
$.bi=y
if(y.b==null)$.bh=y}},
lr:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.D
if(C.e===y){P.aX(null,null,C.e,a)
return}y.toString
P.aX(null,null,y,H.j(y.bt(a),z))},
kM:function(a,b,c){a.dD(0)
b.a8(c)},
c3:function(a,b,c,d,e){var z={}
z.a=d
P.kW(new P.kU(z,e))},
ej:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
ek:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kV:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aX:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bt(d):c.dA(d,-1)
P.el(d)},
jd:{"^":"n:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jc:{"^":"n:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
je:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jf:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kt:{"^":"b;a,0b,c",
d_:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aq(new P.kv(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
p:{
ku:function(a,b){var z=new P.kt(!0,0)
z.d_(a,b)
return z}}},
kv:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a0:{"^":"b;$ti"},
hm:{"^":"n:16;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.F(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.F(z.c,z.d)}},
hl:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bc(z.a)}else if(z.b===0&&!this.e)this.c.F(z.c,z.d)},
$S:function(){return{func:1,ret:P.B,args:[this.f]}}},
e0:{"^":"b;$ti",
dH:function(a,b){if(a==null)a=new P.bW()
if(this.a.a!==0)throw H.c(P.bA("Future already completed"))
$.D.toString
this.F(a,b)},
dG:function(a){return this.dH(a,null)}},
cE:{"^":"e0;a,$ti",
a1:function(a,b){var z
H.b_(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bA("Future already completed"))
z.b8(b)},
F:function(a,b){this.a.b9(a,b)}},
ko:{"^":"e0;a,$ti",
a1:function(a,b){var z
H.b_(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bA("Future already completed"))
z.a8(b)},
F:function(a,b){this.a.F(a,b)}},
aU:{"^":"b;0a,b,c,d,e,$ti",
e3:function(a){if(this.c!==6)return!0
return this.b.b.aG(H.j(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
dZ:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bF(z,{func:1,args:[P.b,P.Q]}))return H.b_(w.ea(z,a.a,a.b,null,y,P.Q),x)
else return H.b_(w.aG(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
O:{"^":"b;bl:a<,b,0dl:c<,$ti",
aI:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kT(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.O(0,$.D,[c])
w=b==null?1:3
this.b7(new P.aU(x,w,a,b,[z,c]))
return x},
ag:function(a,b){return this.aI(a,null,b)},
b7:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaU")
this.c=a}else{if(z===2){y=H.f(this.c,"$isO")
z=y.a
if(z<4){y.b7(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aX(null,null,z,H.j(new P.jy(this,a),{func:1,ret:-1}))}},
bi:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaU")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isO")
y=u.a
if(y<4){u.bi(a)
return}this.a=y
this.c=u.c}z.a=this.ac(a)
y=this.b
y.toString
P.aX(null,null,y,H.j(new P.jF(z,this),{func:1,ret:-1}))}},
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
if(H.ap(a,"$isa0",y,"$asa0"))if(H.ap(a,"$isO",y,null))P.bZ(a,this)
else P.e1(a,this)
else{x=this.ab()
H.z(a,z)
this.a=4
this.c=a
P.aV(this,x)}},
bc:function(a){var z
H.z(a,H.o(this,0))
z=this.ab()
this.a=4
this.c=a
P.aV(this,z)},
F:function(a,b){var z
H.f(b,"$isQ")
z=this.ab()
this.a=8
this.c=new P.a3(a,b)
P.aV(this,z)},
b8:function(a){var z
H.b_(a,{futureOr:1,type:H.o(this,0)})
if(H.ap(a,"$isa0",this.$ti,"$asa0")){this.d2(a)
return}this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.j(new P.jA(this,a),{func:1,ret:-1}))},
d2:function(a){var z=this.$ti
H.t(a,"$isa0",z,"$asa0")
if(H.ap(a,"$isO",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.j(new P.jE(this,a),{func:1,ret:-1}))}else P.bZ(a,this)
return}P.e1(a,this)},
b9:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.j(new P.jz(this,a,b),{func:1,ret:-1}))},
$isa0:1,
p:{
e1:function(a,b){var z,y,x
b.a=1
try{a.aI(new P.jB(b),new P.jC(b),null)}catch(x){z=H.Z(x)
y=H.aM(x)
P.lr(new P.jD(b,z,y))}},
bZ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isO")
if(z>=4){y=b.ab()
b.a=a.a
b.c=a.c
P.aV(b,y)}else{y=H.f(b.c,"$isaU")
b.a=2
b.c=a
a.bi(y)}},
aV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa3")
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
if(p){H.f(r,"$isa3")
y=y.b
u=r.a
t=r.b
y.toString
P.c3(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jI(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jH(x,b,r).$0()}else if((y&2)!==0)new P.jG(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.A(y).$isa0){if(y.a>=4){n=H.f(t.c,"$isaU")
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
m.c=u}else{H.f(u,"$isa3")
m.a=8
m.c=u}z.a=m
y=m}}}},
jy:{"^":"n:0;a,b",
$0:function(){P.aV(this.a,this.b)}},
jF:{"^":"n:0;a,b",
$0:function(){P.aV(this.b,this.a.a)}},
jB:{"^":"n:8;a",
$1:function(a){var z=this.a
z.a=0
z.a8(a)}},
jC:{"^":"n:17;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.F(a,b)},
$1:function(a){return this.$2(a,null)}},
jD:{"^":"n:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
jA:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bc(H.z(this.b,H.o(z,0)))}},
jE:{"^":"n:0;a,b",
$0:function(){P.bZ(this.b,this.a)}},
jz:{"^":"n:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
jI:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c0(H.j(w.d,{func:1}),null)}catch(v){y=H.Z(v)
x=H.aM(v)
if(this.d){w=H.f(this.a.a.c,"$isa3").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa3")
else u.b=new P.a3(y,x)
u.a=!0
return}if(!!J.A(z).$isa0){if(z instanceof P.O&&z.gbl()>=4){if(z.gbl()===8){w=this.b
w.b=H.f(z.gdl(),"$isa3")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ag(new P.jJ(t),null)
w.a=!1}}},
jJ:{"^":"n:18;a",
$1:function(a){return this.a}},
jH:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aG(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Z(t)
y=H.aM(t)
x=this.a
x.b=new P.a3(z,y)
x.a=!0}}},
jG:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa3")
w=this.c
if(w.e3(z)&&w.e!=null){v=this.b
v.b=w.dZ(z)
v.a=!1}}catch(u){y=H.Z(u)
x=H.aM(u)
w=H.f(this.a.a.c,"$isa3")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a3(y,x)
s.a=!0}}},
dY:{"^":"b;a,0b"},
iN:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.O(0,$.D,[P.E])
z.a=0
x=H.o(this,0)
w=H.j(new P.iS(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.iT(z,y),{func:1,ret:-1})
W.ai(this.a,this.b,w,!1,x)
return y},
gdW:function(a){var z,y,x,w
z={}
y=new P.O(0,$.D,this.$ti)
z.a=null
x=H.o(this,0)
w=H.j(new P.iQ(z,this,y),{func:1,ret:-1,args:[x]})
H.j(new P.iR(y),{func:1,ret:-1})
z.a=W.ai(this.a,this.b,w,!1,x)
return y}},
iS:{"^":"n;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
iT:{"^":"n:0;a,b",
$0:function(){this.b.a8(this.a.a)}},
iQ:{"^":"n;a,b,c",
$1:function(a){H.z(a,H.o(this.b,0))
P.kM(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
iR:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.cq()
throw H.c(x)}catch(w){z=H.Z(w)
y=H.aM(w)
$.D.toString
this.a.F(z,y)}}},
iO:{"^":"b;"},
iP:{"^":"b;"},
a3:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isP:1},
kB:{"^":"b;",$isnj:1},
kU:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bW()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
k7:{"^":"kB;",
eb:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.D){a.$0()
return}P.ej(null,null,this,a,-1)}catch(x){z=H.Z(x)
y=H.aM(x)
P.c3(null,null,this,z,H.f(y,"$isQ"))}},
ec:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.D){a.$1(b)
return}P.ek(null,null,this,a,b,-1,c)}catch(x){z=H.Z(x)
y=H.aM(x)
P.c3(null,null,this,z,H.f(y,"$isQ"))}},
dA:function(a,b){return new P.k9(this,H.j(a,{func:1,ret:b}),b)},
bt:function(a){return new P.k8(this,H.j(a,{func:1,ret:-1}))},
dB:function(a,b){return new P.ka(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c0:function(a,b){H.j(a,{func:1,ret:b})
if($.D===C.e)return a.$0()
return P.ej(null,null,this,a,b)},
aG:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.D===C.e)return a.$1(b)
return P.ek(null,null,this,a,b,c,d)},
ea:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.D===C.e)return a.$2(b,c)
return P.kV(null,null,this,a,b,c,d,e,f)}},
k9:{"^":"n;a,b,c",
$0:function(){return this.a.c0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k8:{"^":"n:1;a,b",
$0:function(){return this.a.eb(this.b)}},
ka:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ec(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dA:function(a,b,c){H.U(a)
return H.t(H.l5(a,new H.ct(0,0,[b,c])),"$isdz",[b,c],"$asdz")},
a4:function(a,b){return new H.ct(0,0,[a,b])},
hM:function(){return new H.ct(0,0,[null,null])},
a9:function(a,b,c,d){return new P.jT(0,0,[d])},
hy:function(a,b,c){var z,y
if(P.cI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.k([],[P.d])
y=$.bk()
C.a.l(y,a)
try{P.kQ(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dM(b,H.lk(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cp:function(a,b,c){var z,y,x
if(P.cI(a))return b+"..."+c
z=new P.cA(b)
y=$.bk()
C.a.l(y,a)
try{x=z
x.a=P.dM(x.gV(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
cI:function(a){var z,y
for(z=0;y=$.bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
kQ:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cw:function(a,b){var z,y,x
z=P.a9(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x)z.l(0,H.z(a[x],b))
return z},
dC:function(a){var z,y,x
z={}
if(P.cI(a))return"{...}"
y=new P.cA("")
try{C.a.l($.bk(),a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.fk(a,new P.hT(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.bk()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
jT:{"^":"jL;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e5(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbE")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbE")!=null}else return this.d3(b)},
d3:function(a){var z=this.d
if(z==null)return!1
return this.at(this.bf(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cF()
this.b=z}return this.ba(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cF()
this.c=y}return this.ba(y,b)}else return this.d0(0,b)},
d0:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cF()
this.d=z}y=this.bd(b)
x=z[y]
if(x==null)z[y]=[this.ap(b)]
else{if(this.at(x,b)>=0)return!1
x.push(this.ap(b))}return!0},
c_:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.df(0,b)},
df:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bf(z,b)
x=this.at(y,b)
if(x<0)return!1
this.bn(y.splice(x,1)[0])
return!0},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ao()}},
ba:function(a,b){H.z(b,H.o(this,0))
if(H.f(a[b],"$isbE")!=null)return!1
a[b]=this.ap(b)
return!0},
bj:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbE")
if(z==null)return!1
this.bn(z)
delete a[b]
return!0},
ao:function(){this.r=this.r+1&67108863},
ap:function(a){var z,y
z=new P.bE(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ao()
return z},
bn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ao()},
bd:function(a){return J.au(a)&0x3ffffff},
bf:function(a,b){return a[this.bd(b)]},
at:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aP(a[y].a,b))return y
return-1},
p:{
cF:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bE:{"^":"b;a,0b,0c"},
e5:{"^":"b;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aw(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb6:1,
p:{
jU:function(a,b,c){var z=new P.e5(a,b,[c])
z.c=a.e
return z}}},
jL:{"^":"iC;"},
hN:{"^":"jV;",$isl:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dB(a,this.gj(a),0,[H.b0(this,a,"p",0)])},
q:function(a,b){return this.h(a,b)},
dX:function(a,b,c,d){var z,y,x
H.z(b,d)
H.j(c,{func:1,ret:d,args:[d,H.b0(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aw(a))}return y},
bO:function(a,b,c,d){var z
H.z(d,H.b0(this,a,"p",0))
P.is(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
k:function(a){return P.cp(a,"[","]")}},
cx:{"^":"R;"},
hT:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
R:{"^":"b;$ti",
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.b0(this,a,"R",0),H.b0(this,a,"R",1)]})
for(z=J.bN(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.al(this.gD(a))},
k:function(a){return P.dC(a)},
$isJ:1},
iD:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bN(H.t(b,"$isl",this.$ti,"$asl"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.cp(this,"{","}")},
$isl:1,
$ismM:1},
iC:{"^":"iD;"},
jV:{"^":"b+p;"}}],["","",,P,{"^":"",
kS:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.c(H.aZ(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.Z(x)
w=String(y)
throw H.c(new P.hg(w,null,null))}w=P.c0(z)
return w},
c0:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jP(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.c0(a[z])
return a},
jP:{"^":"cx;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.de(b):y}},
gj:function(a){return this.b==null?this.c.a:this.a9().length},
gD:function(a){var z
if(this.b==null){z=this.c
return new H.ao(z,[H.o(z,0)])}return new P.jQ(this)},
B:function(a,b){var z,y,x,w
H.j(b,{func:1,ret:-1,args:[P.d,,]})
if(this.b==null)return this.c.B(0,b)
z=this.a9()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c0(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.c(P.aw(this))}},
a9:function(){var z=H.U(this.c)
if(z==null){z=H.k(Object.keys(this.a),[P.d])
this.c=z}return z},
de:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c0(this.a[a])
return this.b[a]=z},
$asR:function(){return[P.d,null]},
$asJ:function(){return[P.d,null]}},
jQ:{"^":"b9;a",
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
z=new J.d7(z,z.length,0,[H.o(z,0)])}return z},
$asb9:function(){return[P.d]},
$asl:function(){return[P.d]}},
dd:{"^":"b;$ti"},
dg:{"^":"iP;$ti"},
hE:{"^":"dd;a,b",
dQ:function(a,b,c){var z=P.kS(b,this.gdR().a)
return z},
dP:function(a,b){return this.dQ(a,b,null)},
gdR:function(){return C.V},
$asdd:function(){return[P.b,P.d]}},
hF:{"^":"dg;a",
$asdg:function(){return[P.d,P.b]}}}],["","",,P,{"^":"",
hc:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.bd(a)+"'"},
bS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hc(a)},
dr:function(a){return new P.jt(a)},
a8:function(a){H.bI(H.e(a))},
S:{"^":"b;"},
"+bool":0,
bp:{"^":"b;a,b",
C:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,H.f(b,"$isbp").a)},
gv:function(a){var z=this.a
return(z^C.b.bk(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.h0(H.ip(this))
y=P.bq(H.im(this))
x=P.bq(H.ii(this))
w=P.bq(H.ij(this))
v=P.bq(H.il(this))
u=P.bq(H.io(this))
t=P.h1(H.ik(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa_:1,
$asa_:function(){return[P.bp]},
p:{
h0:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bq:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"H;"},
"+double":0,
b4:{"^":"b;a",
U:function(a,b){return C.b.U(this.a,H.f(b,"$isb4").a)},
C:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,H.f(b,"$isb4").a)},
k:function(a){var z,y,x,w,v
z=new P.h9()
y=this.a
if(y<0)return"-"+new P.b4(0-y).k(0)
x=z.$1(C.b.G(y,6e7)%60)
w=z.$1(C.b.G(y,1e6)%60)
v=new P.h8().$1(y%1e6)
return""+C.b.G(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa_:1,
$asa_:function(){return[P.b4]},
p:{
h7:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h8:{"^":"n:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h9:{"^":"n:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"b;"},
bW:{"^":"P;",
k:function(a){return"Throw of null."}},
av:{"^":"P;a,b,c,d",
gar:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaq:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gar()+y+x
if(!this.a)return w
v=this.gaq()
u=P.bS(this.b)
return w+v+": "+u},
p:{
ch:function(a){return new P.av(!1,null,null,a)},
d6:function(a,b,c){return new P.av(!0,a,b,c)}}},
dG:{"^":"av;e,f,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bX:function(a,b,c){return new P.dG(null,null,!0,a,b,"Value not in range")},
be:function(a,b,c,d,e){return new P.dG(b,c,!0,a,d,"Invalid value")},
is:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.be(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.be(b,a,c,"end",f))
return b}}},
hw:{"^":"av;e,j:f>,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y
z=H.r(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
I:function(a,b,c,d,e){var z=H.r(e==null?J.al(b):e)
return new P.hw(b,z,!0,a,c,"Index out of range")}}},
j2:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.j2(a)}}},
j0:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cC:function(a){return new P.j0(a)}}},
cz:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
p:{
bA:function(a){return new P.cz(a)}}},
fU:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bS(z)+"."},
p:{
aw:function(a){return new P.fU(a)}}},
dL:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
h_:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jt:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
hg:{"^":"b;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
br:{"^":"b;"},
E:{"^":"H;"},
"+int":0,
l:{"^":"b;$ti",
aK:["cz",function(a,b){var z=H.cN(this,"l",0)
return new H.dW(this,H.j(b,{func:1,ret:P.S,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a2(P.be(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.I(b,this,"index",null,y))},
k:function(a){return P.hy(this,"(",")")}},
b6:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
J:{"^":"b;$ti"},
B:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"b;",$isa_:1,
$asa_:function(){return[P.H]}},
"+num":0,
b:{"^":";",
C:function(a,b){return this===b},
gv:function(a){return H.bc(this)},
k:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.k(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isa_:1,
$asa_:function(){return[P.d]},
$isid:1},
"+String":0,
cA:{"^":"b;V:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dM:function(a,b,c){var z=J.bN(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
ha:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).M(z,a,b,c)
y.toString
z=W.v
z=new H.dW(new W.ab(y),H.j(new W.hb(),{func:1,ret:P.S,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a2(H.cq())
w=x.gA(x)
if(x.t())H.a2(H.hz())
return H.f(w,"$isV")},
dq:function(a){H.f(a,"$isL")
return"wheel"},
b5:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fo(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
jq:function(a,b){return document.createElement(a)},
c_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e4:function(a,b,c,d){var z,y
z=W.c_(W.c_(W.c_(W.c_(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eh:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jk(a)
if(!!J.A(z).$isL)return z
return}else return H.f(a,"$isL")},
kN:function(a){if(!!J.A(a).$iscl)return a
return new P.j8([],[],!1).dJ(a,!0)},
en:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.e)return a
return z.dB(a,b)},
M:{"^":"V;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lv:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fH:{"^":"M;",
k:function(a){return String(a)},
$isfH:1,
"%":"HTMLAnchorElement"},
lw:{"^":"M;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d8:{"^":"M;",$isd8:1,"%":"HTMLBaseElement"},
fL:{"^":"h;","%":";Blob"},
bQ:{"^":"M;",$isbQ:1,"%":"HTMLBodyElement"},
bo:{"^":"M;0n:height=,0m:width=",
ck:function(a,b,c){var z=this.d8(a,b,P.l_(c,null))
return z},
d8:function(a,b,c){return a.getContext(b,c)},
$isbo:1,
"%":"HTMLCanvasElement"},
lB:{"^":"h;",
ai:function(a){return P.a7(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lC:{"^":"v;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fW:{"^":"ck;",$isfW:1,"%":"CSSNumericValue|CSSUnitValue"},
lD:{"^":"fZ;0j:length=","%":"CSSPerspective"},
ax:{"^":"h;",$isax:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fX:{"^":"ji;0j:length=",
aP:function(a,b){var z=this.d9(a,this.am(a,b))
return z==null?"":z},
am:function(a,b){var z,y
z=$.eF()
y=z[b]
if(typeof y==="string")return y
y=this.dr(a,b)
z[b]=y
return y},
dr:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h2()+b
if(z in a)return z
return b},
d9:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fY:{"^":"b;",
gn:function(a){return this.aP(a,"height")},
gm:function(a){return this.aP(a,"width")}},
ck:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fZ:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lF:{"^":"ck;0j:length=","%":"CSSTransformValue"},
lG:{"^":"ck;0j:length=","%":"CSSUnparsedValue"},
lI:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h4:{"^":"M;","%":"HTMLDivElement"},
cl:{"^":"v;",
dt:function(a,b){return a.adoptNode(b)},
cl:function(a,b){return a.getElementById(b)},
e6:function(a,b){return a.querySelector(b)},
gbV:function(a){return new W.bC(a,"mousedown",!1,[W.W])},
gbW:function(a){return new W.bC(a,"mousemove",!1,[W.W])},
gbX:function(a){return new W.bC(a,"mouseup",!1,[W.W])},
gbY:function(a){return new W.bC(a,H.u(W.dq(a)),!1,[W.aT])},
$iscl:1,
"%":"XMLDocument;Document"},
lJ:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
h5:{"^":"h;",
dN:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lK:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.t(c,"$isY",[P.H],"$asY")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.Y,P.H]]},
$isy:1,
$asy:function(){return[[P.Y,P.H]]},
$asp:function(){return[[P.Y,P.H]]},
$isl:1,
$asl:function(){return[[P.Y,P.H]]},
$isa:1,
$asa:function(){return[[P.Y,P.H]]},
$asq:function(){return[[P.Y,P.H]]},
"%":"ClientRectList|DOMRectList"},
h6:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
C:function(a,b){var z
if(b==null)return!1
if(!H.ap(b,"$isY",[P.H],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e4(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isY:1,
$asY:function(){return[P.H]},
"%":";DOMRectReadOnly"},
lL:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.u(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.d]},
$isy:1,
$asy:function(){return[P.d]},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lM:{"^":"h;0j:length=","%":"DOMTokenList"},
V:{"^":"v;0ed:tagName=",
gdw:function(a){return new W.jp(a)},
k:function(a){return a.localName},
M:["ak",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dp
if(z==null){z=H.k([],[W.af])
y=new W.dE(z)
C.a.l(z,W.e2(null))
C.a.l(z,W.ed())
$.dp=y
d=y}else d=z
z=$.dn
if(z==null){z=new W.eg(d)
$.dn=z
c=z}else{z.a=d
c=z}}if($.am==null){z=document
y=z.implementation
y=(y&&C.K).dN(y,"")
$.am=y
$.cm=y.createRange()
y=$.am
y.toString
y=y.createElement("base")
H.f(y,"$isd8")
y.href=z.baseURI
z=$.am.head;(z&&C.L).I(z,y)}z=$.am
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbQ")}z=$.am
if(!!this.$isbQ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.am.body;(z&&C.p).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.X,a.tagName)){z=$.cm;(z&&C.D).cm(z,x)
z=$.cm
w=(z&&C.D).dL(z,b)}else{x.innerHTML=b
w=$.am.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.am.body
if(x==null?z!=null:x!==z)J.d0(x)
c.aU(w)
C.r.dt(document,w)
return w},function(a,b,c){return this.M(a,b,c,null)},"dM",null,null,"gel",5,5,null],
cp:function(a,b,c,d){a.textContent=null
this.I(a,this.M(a,b,c,d))},
co:function(a,b){return this.cp(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
dg:function(a,b){return a.removeAttribute(b)},
gbV:function(a){return new W.bB(a,"mousedown",!1,[W.W])},
gbW:function(a){return new W.bB(a,"mousemove",!1,[W.W])},
gbX:function(a){return new W.bB(a,"mouseup",!1,[W.W])},
gbY:function(a){return new W.bB(a,H.u(W.dq(a)),!1,[W.aT])},
$isV:1,
"%":";Element"},
hb:{"^":"n:19;",
$1:function(a){return!!J.A(H.f(a,"$isv")).$isV}},
lO:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
N:{"^":"h;",$isN:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
bp:["cv",function(a,b,c,d){H.j(c,{func:1,args:[W.N]})
if(c!=null)this.d1(a,b,c,!1)}],
d1:function(a,b,c,d){return a.addEventListener(b,H.aq(H.j(c,{func:1,args:[W.N]}),1),!1)},
di:function(a,b,c,d){return a.removeEventListener(b,H.aq(H.j(c,{func:1,args:[W.N]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ea|eb|ee|ef"},
ay:{"^":"fL;",$isay:1,"%":"File"},
m4:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isay")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"FileList"},
m5:{"^":"L;0j:length=","%":"FileWriter"},
m8:{"^":"M;0j:length=","%":"HTMLFormElement"},
az:{"^":"h;",$isaz:1,"%":"Gamepad"},
ho:{"^":"M;","%":"HTMLHeadElement"},
m9:{"^":"h;0j:length=","%":"History"},
ma:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isv")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asq:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hp:{"^":"cl;","%":"HTMLDocument"},
hq:{"^":"hr;",
em:function(a,b,c,d,e,f){return a.open(b,c)},
e4:function(a,b,c){return a.open(b,c)},
cn:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hr:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mb:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
cn:{"^":"h;0n:height=,0m:width=",$iscn:1,"%":"ImageBitmap"},
co:{"^":"h;0n:height=,0m:width=",$isco:1,"%":"ImageData"},
bU:{"^":"M;0n:height=,0m:width=",$isbU:1,"%":"HTMLImageElement"},
md:{"^":"M;0n:height=,0m:width=","%":"HTMLInputElement"},
b7:{"^":"dT;",$isb7:1,"%":"KeyboardEvent"},
hS:{"^":"h;",
k:function(a){return String(a)},
$ishS:1,
"%":"Location"},
hW:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
mk:{"^":"h;0j:length=","%":"MediaList"},
ml:{"^":"L;",
bp:function(a,b,c,d){H.j(c,{func:1,args:[W.N]})
if(b==="message")a.start()
this.cv(a,b,c,!1)},
"%":"MessagePort"},
mm:{"^":"jX;",
h:function(a,b){return P.a7(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a7(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.hY(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hY:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mn:{"^":"jY;",
h:function(a,b){return P.a7(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a7(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.hZ(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hZ:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aA:{"^":"h;",$isaA:1,"%":"MimeType"},
mo:{"^":"k_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaA")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"MimeTypeArray"},
W:{"^":"dT;",
gbU:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.bb(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.A(W.eh(z)).$isV)throw H.c(P.C("offsetX is only supported on elements"))
y=H.f(W.eh(z),"$isV")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.bb(u,v,w),"$isbb",w,"$asbb")
if(typeof z!=="number")return z.aX()
if(typeof x!=="number")return x.aX()
return new P.bb(C.m.c3(z-u),C.m.c3(x-v),w)}},
$isW:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"hN;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bA("No elements"))
if(y>1)throw H.c(P.bA("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.t(b,"$isl",[W.v],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.I(y,z.firstChild)
return},
i:function(a,b,c){var z
H.r(b)
z=this.a
J.f0(z,H.f(c,"$isv"),C.v.h(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.du(z,z.length,-1,[H.b0(C.v,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asp:function(){return[W.v]},
$asl:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"L;0e5:previousSibling=",
e7:function(a){var z=a.parentNode
if(z!=null)J.bL(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cw(a):z},
I:function(a,b){return a.appendChild(b)},
dh:function(a,b){return a.removeChild(b)},
dj:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i8:{"^":"k1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isv")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asq:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
mx:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
mz:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mA:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aC:{"^":"h;0j:length=",$isaC:1,"%":"Plugin"},
mC:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaC")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"PluginArray"},
mE:{"^":"W;0n:height=,0m:width=","%":"PointerEvent"},
by:{"^":"N;",$isby:1,"%":"ProgressEvent|ResourceProgressEvent"},
ir:{"^":"h;",
dL:function(a,b){return a.createContextualFragment(b)},
cm:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mJ:{"^":"kb;",
h:function(a,b){return P.a7(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a7(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.iz(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
iz:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mK:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mL:{"^":"M;0j:length=","%":"HTMLSelectElement"},
aD:{"^":"L;",$isaD:1,"%":"SourceBuffer"},
mN:{"^":"eb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaD")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aD]},
$isy:1,
$asy:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isl:1,
$asl:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"SourceBufferList"},
aE:{"^":"h;",$isaE:1,"%":"SpeechGrammar"},
mO:{"^":"kh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaE")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asp:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$asq:function(){return[W.aE]},
"%":"SpeechGrammarList"},
aF:{"^":"h;0j:length=",$isaF:1,"%":"SpeechRecognitionResult"},
mR:{"^":"kk;",
h:function(a,b){return this.bg(a,H.u(b))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.dc(a,z)
if(y==null)return
b.$2(y,this.bg(a,y))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.iM(z))
return z},
gj:function(a){return a.length},
bg:function(a,b){return a.getItem(b)},
dc:function(a,b){return a.key(b)},
$asR:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
iM:{"^":"n:20;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aG:{"^":"h;",$isaG:1,"%":"CSSStyleSheet|StyleSheet"},
iU:{"^":"M;",
M:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.ha("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).H(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
mU:{"^":"M;",
M:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.M(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga4(z)
x.toString
z=new W.ab(x)
w=z.ga4(z)
y.toString
w.toString
new W.ab(y).H(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
mV:{"^":"M;",
M:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.M(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga4(z)
y.toString
x.toString
new W.ab(y).H(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
dO:{"^":"M;",$isdO:1,"%":"HTMLTemplateElement"},
mW:{"^":"h;0m:width=","%":"TextMetrics"},
aH:{"^":"L;",$isaH:1,"%":"TextTrack"},
aI:{"^":"L;",$isaI:1,"%":"TextTrackCue|VTTCue"},
mX:{"^":"ks;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaI")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aI]},
$isy:1,
$asy:function(){return[W.aI]},
$asp:function(){return[W.aI]},
$isl:1,
$asl:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$asq:function(){return[W.aI]},
"%":"TextTrackCueList"},
mY:{"^":"ef;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaH")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aH]},
$isy:1,
$asy:function(){return[W.aH]},
$asp:function(){return[W.aH]},
$isl:1,
$asl:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$asq:function(){return[W.aH]},
"%":"TextTrackList"},
mZ:{"^":"h;0j:length=","%":"TimeRanges"},
aJ:{"^":"h;",$isaJ:1,"%":"Touch"},
n_:{"^":"kx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaJ")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aJ]},
$isy:1,
$asy:function(){return[W.aJ]},
$asp:function(){return[W.aJ]},
$isl:1,
$asl:function(){return[W.aJ]},
$isa:1,
$asa:function(){return[W.aJ]},
$asq:function(){return[W.aJ]},
"%":"TouchList"},
n0:{"^":"h;0j:length=","%":"TrackDefaultList"},
dT:{"^":"N;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ne:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
cD:{"^":"hW;0n:height=,0m:width=",$iscD:1,"%":"HTMLVideoElement"},
ng:{"^":"L;0j:length=","%":"VideoTrackList"},
nh:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
ni:{"^":"h;0m:width=","%":"VTTRegion"},
aT:{"^":"W;",
gdS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.C("deltaY is not supported"))},
$isaT:1,
"%":"WheelEvent"},
j5:{"^":"L;",
gdv:function(a){var z,y,x
z=P.H
y=new P.O(0,$.D,[z])
x=H.j(new W.j6(new P.ko(y,[z])),{func:1,ret:-1,args:[P.H]})
this.d7(a)
this.dk(a,W.en(x,z))
return y},
dk:function(a,b){return a.requestAnimationFrame(H.aq(H.j(b,{func:1,ret:-1,args:[P.H]}),1))},
d7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdX:1,
"%":"DOMWindow|Window"},
j6:{"^":"n:21;a",
$1:function(a){this.a.a1(0,H.cQ(a))}},
dZ:{"^":"v;",$isdZ:1,"%":"Attr"},
no:{"^":"kD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isax")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"CSSRuleList"},
np:{"^":"h6;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
C:function(a,b){var z
if(b==null)return!1
if(!H.ap(b,"$isY",[P.H],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e4(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nq:{"^":"kF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaz")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asp:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"GamepadList"},
nv:{"^":"kH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isv")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isy:1,
$asy:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asq:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nw:{"^":"kJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaF")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aF]},
$isy:1,
$asy:function(){return[W.aF]},
$asp:function(){return[W.aF]},
$isl:1,
$asl:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$asq:function(){return[W.aF]},
"%":"SpeechRecognitionResultList"},
nx:{"^":"kL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.r(b)
H.f(c,"$isaG")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aG]},
$isy:1,
$asy:function(){return[W.aG]},
$asp:function(){return[W.aG]},
$isl:1,
$asl:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$asq:function(){return[W.aG]},
"%":"StyleSheetList"},
jg:{"^":"cx;d6:a<",
B:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.G)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.k([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$isdZ")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asR:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
jp:{"^":"jg;a",
h:function(a,b){return J.cf(this.a,H.u(b))},
gj:function(a){return this.gD(this).length}},
bC:{"^":"iN;a,b,c,$ti"},
bB:{"^":"bC;a,b,c,$ti"},
jr:{"^":"iO;a,b,c,d,e,$ti",
sdd:function(a){this.d=H.j(a,{func:1,args:[W.N]})},
dD:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.j(y,{func:1,args:[W.N]})
if(x)J.f_(z,this.c,y,!1)}this.b=null
this.sdd(null)
return},
p:{
ai:function(a,b,c,d,e){var z=W.en(new W.js(c),W.N)
if(z!=null&&!0)J.f1(a,b,z,!1)
return new W.jr(0,a,b,z,!1,[e])}}},
js:{"^":"n:22;a",
$1:function(a){return this.a.$1(H.f(a,"$isN"))}},
bD:{"^":"b;a",
cY:function(a){var z,y
z=$.cU()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.la())
for(y=0;y<12;++y)z.i(0,C.u[y],W.lb())}},
W:function(a){return $.eS().u(0,W.b5(a))},
R:function(a,b,c){var z,y,x
z=W.b5(a)
y=$.cU()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c4(x.$4(a,b,c,this))},
$isaf:1,
p:{
e2:function(a){var z,y
z=document.createElement("a")
y=new W.kc(z,window.location)
y=new W.bD(y)
y.cY(a)
return y},
nt:[function(a,b,c,d){H.f(a,"$isV")
H.u(b)
H.u(c)
H.f(d,"$isbD")
return!0},"$4","la",16,0,11],
nu:[function(a,b,c,d){var z,y,x
H.f(a,"$isV")
H.u(b)
H.u(c)
z=H.f(d,"$isbD").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lb",16,0,11]}},
q:{"^":"b;$ti",
gw:function(a){return new W.du(a,this.gj(a),-1,[H.b0(this,a,"q",0)])}},
dE:{"^":"b;a",
W:function(a){return C.a.bq(this.a,new W.ia(a))},
R:function(a,b,c){return C.a.bq(this.a,new W.i9(a,b,c))},
$isaf:1},
ia:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isaf").W(this.a)}},
i9:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isaf").R(this.a,this.b,this.c)}},
kd:{"^":"b;",
cZ:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aK(0,new W.ke())
y=b.aK(0,new W.kf())
this.b.H(0,z)
x=this.c
x.H(0,C.Y)
x.H(0,y)},
W:function(a){return this.a.u(0,W.b5(a))},
R:["cB",function(a,b,c){var z,y
z=W.b5(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.du(c)
else if(y.u(0,"*::"+b))return this.d.du(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isaf:1},
ke:{"^":"n:10;",
$1:function(a){return!C.a.u(C.u,H.u(a))}},
kf:{"^":"n:10;",
$1:function(a){return C.a.u(C.u,H.u(a))}},
kp:{"^":"kd;e,a,b,c,d",
R:function(a,b,c){if(this.cB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cf(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
ed:function(){var z,y,x,w,v
z=P.d
y=P.cw(C.t,z)
x=H.o(C.t,0)
w=H.j(new W.kq(),{func:1,ret:z,args:[x]})
v=H.k(["TEMPLATE"],[z])
y=new W.kp(y,P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),null)
y.cZ(null,new H.hU(C.t,w,[x,z]),v,null)
return y}}},
kq:{"^":"n:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
kn:{"^":"b;",
W:function(a){var z=J.A(a)
if(!!z.$isdI)return!1
z=!!z.$isK
if(z&&W.b5(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.i.cr(b,"on"))return!1
return this.W(a)},
$isaf:1},
du:{"^":"b;a,b,c,0d,$ti",
sbe:function(a){this.d=H.z(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbe(J.b2(this.a,z))
this.c=z
return!0}this.sbe(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb6:1},
jj:{"^":"b;a",$isL:1,$isdX:1,p:{
jk:function(a){if(a===window)return H.f(a,"$isdX")
else return new W.jj(a)}}},
af:{"^":"b;"},
kc:{"^":"b;a,b",$isnd:1},
eg:{"^":"b;a",
aU:function(a){new W.kA(this).$2(a,null)},
a0:function(a,b){if(b==null)J.d0(a)
else J.bL(b,a)},
dn:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fm(a)
x=J.cf(y.gd6(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.bn(a)}catch(t){H.Z(t)}try{u=W.b5(a)
this.dm(H.f(a,"$isV"),b,z,v,u,H.f(y,"$isJ"),H.u(x))}catch(t){if(H.Z(t) instanceof P.av)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dm:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.k(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.R(a,J.fy(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.dg(z,v)}}if(!!J.A(a).$isdO)this.aU(a.content)},
$ismv:1},
kA:{"^":"n:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dn(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fn(z)}catch(w){H.Z(w)
v=H.f(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bL(u,v)}else J.bL(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isv")}}},
ji:{"^":"h+fY;"},
jl:{"^":"h+p;"},
jm:{"^":"jl+q;"},
jn:{"^":"h+p;"},
jo:{"^":"jn+q;"},
ju:{"^":"h+p;"},
jv:{"^":"ju+q;"},
jM:{"^":"h+p;"},
jN:{"^":"jM+q;"},
jX:{"^":"h+R;"},
jY:{"^":"h+R;"},
jZ:{"^":"h+p;"},
k_:{"^":"jZ+q;"},
k0:{"^":"h+p;"},
k1:{"^":"k0+q;"},
k4:{"^":"h+p;"},
k5:{"^":"k4+q;"},
kb:{"^":"h+R;"},
ea:{"^":"L+p;"},
eb:{"^":"ea+q;"},
kg:{"^":"h+p;"},
kh:{"^":"kg+q;"},
kk:{"^":"h+R;"},
kr:{"^":"h+p;"},
ks:{"^":"kr+q;"},
ee:{"^":"L+p;"},
ef:{"^":"ee+q;"},
kw:{"^":"h+p;"},
kx:{"^":"kw+q;"},
kC:{"^":"h+p;"},
kD:{"^":"kC+q;"},
kE:{"^":"h+p;"},
kF:{"^":"kE+q;"},
kG:{"^":"h+p;"},
kH:{"^":"kG+q;"},
kI:{"^":"h+p;"},
kJ:{"^":"kI+q;"},
kK:{"^":"h+p;"},
kL:{"^":"kK+q;"}}],["","",,P,{"^":"",
er:function(a){return a},
a7:function(a){var z,y,x,w,v
if(a==null)return
z=P.a4(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
l_:function(a,b){var z={}
a.B(0,new P.l0(z))
return z},
l1:function(a){var z,y
z=new P.O(0,$.D,[null])
y=new P.cE(z,[null])
a.then(H.aq(new P.l2(y),1))["catch"](H.aq(new P.l3(y),1))
return z},
dl:function(){var z=$.dk
if(z==null){z=J.cb(window.navigator.userAgent,"Opera",0)
$.dk=z}return z},
h2:function(){var z,y
z=$.dh
if(z!=null)return z
y=$.di
if(y==null){y=J.cb(window.navigator.userAgent,"Firefox",0)
$.di=y}if(y)z="-moz-"
else{y=$.dj
if(y==null){y=!P.dl()&&J.cb(window.navigator.userAgent,"Trident/",0)
$.dj=y}if(y)z="-ms-"
else z=P.dl()?"-o-":"-webkit-"}$.dh=z
return z},
j7:{"^":"b;",
bP:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aJ:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.a2(P.ch("DateTime is outside valid range: "+y))
return new P.bp(y,!0)}if(a instanceof RegExp)throw H.c(P.cC("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.l1(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bP(a)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hM()
z.a=u
C.a.i(x,v,u)
this.dY(a,new P.j9(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bP(t)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
if(u!=null)return u
s=J.T(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.i(x,v,u)
for(x=J.bG(u),q=0;q<r;++q)x.i(u,q,this.aJ(s.h(t,q)))
return u}return a},
dJ:function(a,b){this.c=b
return this.aJ(a)}},
j9:{"^":"n:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aJ(b)
J.eZ(z,a,y)
return y}},
l0:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
j8:{"^":"j7;a,b,c",
dY:function(a,b){var z,y,x,w
H.j(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
b.$2(w,a[w])}}},
l2:{"^":"n:12;a",
$1:function(a){return this.a.a1(0,a)}},
l3:{"^":"n:12;a",
$1:function(a){return this.a.dG(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
e3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bb:{"^":"b;X:a>,T:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.ap(b,"$isbb",[P.H],null)&&this.a==J.bO(b)&&this.b==b.gT(b)},
gv:function(a){var z,y,x
z=J.au(this.a)
y=J.au(this.b)
y=P.e3(P.e3(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
k6:{"^":"b;"},
Y:{"^":"k6;$ti"}}],["","",,P,{"^":"",fI:{"^":"h;",$isfI:1,"%":"SVGAnimatedLength"},lP:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},lQ:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lR:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lS:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},lT:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lU:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lV:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lW:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},lX:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lY:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},lZ:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},m_:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},m0:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},m1:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},m2:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},m3:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},m6:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},m7:{"^":"bs;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hn:{"^":"bs;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bs:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mc:{"^":"bs;0n:height=,0m:width=","%":"SVGImageElement"},b8:{"^":"h;",$isb8:1,"%":"SVGLength"},mi:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.r(b)
H.f(c,"$isb8")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b8]},
$isl:1,
$asl:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$asq:function(){return[P.b8]},
"%":"SVGLengthList"},mj:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},ba:{"^":"h;",$isba:1,"%":"SVGNumber"},mw:{"^":"k3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.r(b)
H.f(c,"$isba")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.ba]},
$isl:1,
$asl:function(){return[P.ba]},
$isa:1,
$asa:function(){return[P.ba]},
$asq:function(){return[P.ba]},
"%":"SVGNumberList"},mB:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},mD:{"^":"h;0j:length=","%":"SVGPointList"},mF:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mG:{"^":"hn;0n:height=,0m:width=","%":"SVGRectElement"},dI:{"^":"K;",$isdI:1,"%":"SVGScriptElement"},mS:{"^":"km;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.r(b)
H.u(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},K:{"^":"V;",
M:function(a,b,c,d){var z,y,x,w,v,u
z=H.k([],[W.af])
C.a.l(z,W.e2(null))
C.a.l(z,W.ed())
C.a.l(z,new W.kn())
c=new W.eg(new W.dE(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dM(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.ga4(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mT:{"^":"bs;0n:height=,0m:width=","%":"SVGSVGElement"},bf:{"^":"h;",$isbf:1,"%":"SVGTransform"},n1:{"^":"kz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.r(b)
H.f(c,"$isbf")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.bf]},
$isl:1,
$asl:function(){return[P.bf]},
$isa:1,
$asa:function(){return[P.bf]},
$asq:function(){return[P.bf]},
"%":"SVGTransformList"},nf:{"^":"bs;0n:height=,0m:width=","%":"SVGUseElement"},jR:{"^":"h+p;"},jS:{"^":"jR+q;"},k2:{"^":"h+p;"},k3:{"^":"k2+q;"},kl:{"^":"h+p;"},km:{"^":"kl+q;"},ky:{"^":"h+p;"},kz:{"^":"ky+q;"}}],["","",,P,{"^":"",an:{"^":"b;",$isl:1,
$asl:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isiZ:1}}],["","",,P,{"^":"",lx:{"^":"h;0j:length=","%":"AudioBuffer"},ly:{"^":"jh;",
h:function(a,b){return P.a7(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a7(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new P.fJ(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fJ:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},lz:{"^":"L;0j:length=","%":"AudioTrackList"},fK:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},my:{"^":"fK;0j:length=","%":"OfflineAudioContext"},jh:{"^":"h+R;"}}],["","",,P,{"^":"",fM:{"^":"h;",$isfM:1,"%":"WebGLBuffer"},hi:{"^":"h;",$ishi:1,"%":"WebGLFramebuffer"},iq:{"^":"h;",$isiq:1,"%":"WebGLProgram"},mH:{"^":"h;",
bo:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b){return a.blendEquation(b)},
bx:function(a,b,c){return a.blendFunc(b,c)},
by:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b){return a.clear(b)},
bA:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bB:function(a,b){return a.compileShader(b)},
bC:function(a){return a.createBuffer()},
bD:function(a){return a.createProgram()},
bE:function(a,b){return a.createShader(b)},
bF:function(a){return a.createTexture()},
bH:function(a,b){return a.depthMask(b)},
bI:function(a,b){return a.disable(b)},
bJ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bK:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bL:function(a,b){return a.enable(b)},
bM:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a,b){return a.generateMipmap(b)},
ai:function(a){return P.a7(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bR:function(a,b){return a.linkProgram(b)},
bZ:function(a,b,c){return a.pixelStorei(b,c)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aH:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isco)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,P.er(g))
return}if(!!z.$isbU)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,g)
return}if(!!z.$isbo)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$iscD)y=!0
else y=!1
if(y){this.aB(a,b,c,d,e,f,g)
return}if(!!z.$iscn)z=!0
else z=!1
if(z){this.aC(a,b,c,d,e,f,g)
return}throw H.c(P.ch("Incorrect number or type of arguments"))},
c1:function(a,b,c,d,e,f,g){return this.aH(a,b,c,d,e,f,g,null,null,null)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameteri(b,c,d)},
c4:function(a,b,c){return a.uniform1f(b,c)},
c5:function(a,b,c){return a.uniform1fv(b,c)},
c6:function(a,b,c){return a.uniform1i(b,c)},
c7:function(a,b,c){return a.uniform1iv(b,c)},
c8:function(a,b,c){return a.uniform2fv(b,c)},
c9:function(a,b,c){return a.uniform3fv(b,c)},
ca:function(a,b,c){return a.uniform4fv(b,c)},
cb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cd:function(a,b){return a.useProgram(b)},
ce:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cg:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mI:{"^":"h;",
dz:function(a,b){return a.beginTransformFeedback(b)},
dC:function(a,b){return a.bindVertexArray(b)},
dO:function(a){return a.createVertexArray()},
dT:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dU:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dV:function(a){return a.endTransformFeedback()},
eh:function(a,b,c,d){this.ds(a,b,H.t(c,"$isa",[P.d],"$asa"),d)
return},
ds:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ei:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bo:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b){return a.blendEquation(b)},
bx:function(a,b,c){return a.blendFunc(b,c)},
by:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b){return a.clear(b)},
bA:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bB:function(a,b){return a.compileShader(b)},
bC:function(a){return a.createBuffer()},
bD:function(a){return a.createProgram()},
bE:function(a,b){return a.createShader(b)},
bF:function(a){return a.createTexture()},
bH:function(a,b){return a.depthMask(b)},
bI:function(a,b){return a.disable(b)},
bJ:function(a,b,c,d){return a.drawArrays(b,c,d)},
bK:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bL:function(a,b){return a.enable(b)},
bM:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a,b){return a.generateMipmap(b)},
ai:function(a){return P.a7(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bR:function(a,b){return a.linkProgram(b)},
bZ:function(a,b,c){return a.pixelStorei(b,c)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aH:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isco)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,P.er(g))
return}if(!!z.$isbU)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,g)
return}if(!!z.$isbo)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$iscD)y=!0
else y=!1
if(y){this.aB(a,b,c,d,e,f,g)
return}if(!!z.$iscn)z=!0
else z=!1
if(z){this.aC(a,b,c,d,e,f,g)
return}throw H.c(P.ch("Incorrect number or type of arguments"))},
c1:function(a,b,c,d,e,f,g){return this.aH(a,b,c,d,e,f,g,null,null,null)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameteri(b,c,d)},
c4:function(a,b,c){return a.uniform1f(b,c)},
c5:function(a,b,c){return a.uniform1fv(b,c)},
c6:function(a,b,c){return a.uniform1i(b,c)},
c7:function(a,b,c){return a.uniform1iv(b,c)},
c8:function(a,b,c){return a.uniform2fv(b,c)},
c9:function(a,b,c){return a.uniform3fv(b,c)},
ca:function(a,b,c){return a.uniform4fv(b,c)},
cb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cd:function(a,b){return a.useProgram(b)},
ce:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cg:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iE:{"^":"h;",$isiE:1,"%":"WebGLShader"},iV:{"^":"h;",$isiV:1,"%":"WebGLTexture"},j_:{"^":"h;",$isj_:1,"%":"WebGLUniformLocation"},j3:{"^":"h;",$isj3:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mP:{"^":"kj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.a7(this.da(a,b))},
i:function(a,b,c){H.r(b)
H.f(c,"$isJ")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
da:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isl:1,
$asl:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},ki:{"^":"h+p;"},kj:{"^":"ki+q;"}}],["","",,G,{"^":"",
ja:function(a){var z,y,x,w
z=H.k(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a2(z,"\n")},
e_:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bE(a,b)
z.aV(a,y,c)
z.bB(a,y)
x=H.c4(z.aR(a,y,35713))
if(x!=null&&!x){w=z.aQ(a,y)
P.a8("E:Compilation failed:")
P.a8("E:"+G.ja(c))
P.a8("E:Failure:")
P.a8(C.i.J("E:",w))
throw H.c(w)}return y},
dv:function(a,b){var z,y,x
H.t(a,"$isa",[T.x],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cZ(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
he:function(a,b){var z,y
H.t(a,"$isa",[T.ah],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))}return b},
hf:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.a5],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cZ(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.fp(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
hd:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.E]],"$asa")
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
jK:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ao(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.ak],u=[T.a5],t=[T.x],s=[T.ah];y.t();){r=y.d
if(!x.ae(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.et>0)H.bI("I: "+r)
continue}q=z.h(0,r)
switch($.ac().h(0,r).a){case"vec2":b.a_(r,G.he(H.bK(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.dv(H.bK(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.hf(H.bK(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.c1(H.bK(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.hd(H.bK(q,"$isa",w,"$asa"),null),4)
break}}},
aR:{"^":"b;"},
aS:{"^":"aR;d,a,b,c",
al:function(){return this.d},
k:function(a){var z,y,x,w
z=H.k(["{"+new H.dS(H.l7(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ao(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a2(z,"\n")}},
fN:{"^":"dK;"},
fP:{"^":"b;0a,b",
bN:function(a,b,c){J.fi(this.a,b)
if(c>0)J.fE(this.a,b,c)},
cf:function(a,b,c,d,e,f,g,h){J.ca(this.a,34962,b)
J.fF(this.a,c,d,e,!1,g,h)}},
hh:{"^":"b;a,b,c,d,e"},
ds:{"^":"b;a,b,c"},
dt:{"^":"b;a,b,c,d"},
dw:{"^":"b;a,b,c,d,e",
a7:function(a){switch($.ac().h(0,a).a){case"vec2":this.e.i(0,a,H.k([],[T.ah]))
break
case"vec3":this.e.i(0,a,H.k([],[T.x]))
break
case"vec4":this.e.i(0,a,H.k([],[T.a5]))
break
case"float":this.e.i(0,a,H.k([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.k([],[[P.a,P.E]]))
break}},
cF:function(a){var z,y,x,w,v,u
H.t(a,"$isa",[T.x],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.ds(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.G)(a),++w){v=a[w]
v.toString
u=new T.x(new Float32Array(3))
u.E(v)
C.a.l(z,u)}},
cD:function(a,b){var z,y,x,w,v,u,t
z=[T.ah]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.ah(u))}},
cE:function(a,b){var z,y,x,w,v,u
z=[T.x]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new T.x(new Float32Array(3))
u.E(v)
x.l(y,u)}},
aY:function(a,b){var z,y,x,w,v,u
z=[T.a5]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new T.a5(new Float32Array(4))
u.E(v)
x.l(y,u)}},
cG:function(a){var z,y,x,w,v,u
H.t(a,"$isa",[T.x],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.dt(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.G)(a),++w){v=a[w]
v.toString
u=new T.x(new Float32Array(3))
u.E(v)
C.a.l(z,u)}},
cL:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.k(x,[P.E])
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
k:function(a){var z,y,x,w,v
z=H.k(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ao(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.ac().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a2(z," ")}},
cv:{"^":"aR;"},
h3:{"^":"cv;z,Q,ch,cx,d,e,f,a,b,c",
k:function(a){return"DL: p:"+H.e(this.z)}},
hs:{"^":"aS;x,y,z,d,a,b,c",
al:function(){var z,y,x
z=this.y
y=this.z
G.ht(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
ht:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.t(c,"$isa",[G.cv],"$asa")
z=a.length
C.f.bO(a,0,z,0)
C.f.bO(b,0,4,0)
for(y=c.length,x=0,w=0;w<y;++w){v=c[w]
u=x*16
t=u+4
s=v.z.a
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
r=v.e.a
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
s=v.f.a
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
dQ:{"^":"b;a,b,c"},
dP:{"^":"b;a,b,c"},
hV:{"^":"aS;d,a,b,c"},
hX:{"^":"aR;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sas:function(a){this.cx=H.t(a,"$isa",[P.E],"$asa")},
b_:function(a,b,c){var z,y
C.i.an(a,0)
H.f(b,"$isan")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.ca(z.a,34962,y)
J.cY(z.a,34962,b,35048)},
cM:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cV(a,0)===105
if(z&&this.z===0)this.z=C.b.a5(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.cc(x.a))
this.b_(a,b,c)
w=$.ac().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bM(x.a,this.e)
x.bN(0,v,z?1:0)
x.cf(0,y.h(0,a),v,w.b0(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.k(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ao(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a2(y,"  ")}},
ie:{"^":"aS;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cH:function(a,b){var z
if(typeof a!=="number")return a.ek()
if(typeof b!=="number")return H.as(b)
z=a/b
if(this.z===z)return
this.z=z
this.b2()},
b2:function(){var z,y,x,w,v,u
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
u=new T.x(new Float32Array(3))
u.Z(x,w,v)
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
x=!!y.$isa5
q=x?t.gci(t):1
if(!!y.$isx){p=t.gX(t)
s=t.gT(t)
r=t.gah(t)
t=p}else if(x){p=t.gX(t)
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
c.bT(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
lN:{"^":"b;"},
ix:{"^":"aR;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cQ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.d_(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.d_(w.a,v,t))}},
cT:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.k([],[P.d])
x=H.k([],[P.d])
for(y=new H.ao(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ae(0,w))C.a.l(x,w)}for(z=this.x,z=P.jU(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.ao(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cV(s,0)){case 117:if(w.ae(0,s)){r=b.h(0,s)
if(v.ae(0,s))H.bI("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.ac().h(0,s)
if(q==null)H.a2("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.r(r)
J.cg(x.a,p,r)}else if(!!J.A(r).$ishx)J.fC(x.a,p,r)
break
case"float":if(q.c===0){H.cL(r)
J.fA(x.a,p,r)}else if(!!J.A(r).$isan)J.fB(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.at(r,"$isa1").a
J.d5(x.a,p,!1,s)}else if(!!J.A(r).$isan)J.d5(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.at(r,"$isbx").a
J.d4(x.a,p,!1,s)}else if(!!J.A(r).$isan)J.d4(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d3(o,p,H.at(r,"$isa5").a)
else J.d3(o,p,H.f(r,"$isan"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d2(o,p,H.at(r,"$isx").a)
else J.d2(o,p,H.f(r,"$isan"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d1(o,p,H.at(r,"$isah").a)
else J.d1(o,p,H.f(r,"$isan"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.as(s)
J.cW(x.a,33984+s)
s=H.at(r,"$iscB").b
J.bl(x.a,3553,s)
s=this.ch
J.cg(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.as(s)
J.cW(x.a,33984+s)
s=H.at(r,"$iscB").b
J.bl(x.a,34067,s)
s=this.ch
J.cg(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
default:H.bI("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aP(r,!0)
o=x.a
if(s)J.bm(o,2929)
else J.cd(o,2929)
break
case"cStencilFunc":H.at(r,"$isdQ")
s=r.a
o=x.a
if(s===1281)J.cd(o,2960)
else{J.bm(o,2960)
o=r.b
n=r.c
J.fw(x.a,s,o,n)}break
case"cDepthWrite":H.c4(r)
J.fc(x.a,r)
break
case"cBlendEquation":H.at(r,"$isdP")
s=r.a
o=x.a
if(s===1281)J.cd(o,3042)
else{J.bm(o,3042)
o=r.b
n=r.c
J.f5(x.a,o,n)
J.f4(x.a,s)}break}++t
break}}m=P.h7(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
""+t
m.k(0)},
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[G.aS],"$asa")
Date.now()
z=this.d
J.fD(z.a,this.r)
this.ch=0
this.z.S(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x){w=b[x]
this.cW(w.a,w.al())}y=this.Q
y.S(0)
for(v=a.cy,v=new H.ao(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cT()
if(u.length!==0)P.a8("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bM(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cM()
s=a.Q
r=a.z
if(t)J.f2(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fg(q,v,y,s,0,r)
else J.ff(q,v,y,s,0)}else{s=z.a
if(r>1)J.fe(s,v,0,y,r)
else J.fd(s,v,0,y)}if(t)J.fj(z.a)},
p:{
iy:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a9(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.f9(b.a)
t=G.e_(b.a,35633,x)
J.cX(b.a,u,t)
s=G.e_(b.a,35632,w)
J.cX(b.a,u,s)
if(v.length>0)J.fz(b.a,u,v,35980)
J.fu(b.a,u)
if(!H.c4(J.ft(b.a,u,35714)))H.a2(J.fs(b.a,u))
z=new G.ix(b,c,d,u,P.cw(c.c,z),P.a4(z,P.b),P.a4(z,z),y,a,!1,!0)
z.cQ(a,b,c,d)
return z}}},
F:{"^":"b;a,b,c",
b0:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iF:{"^":"b;a,0b,c,d,e,f,r,x",
cC:function(a){var z,y,x,w
H.t(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.aj(z)},
a6:function(a){var z,y,x
H.t(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)C.a.l(y,a[x])
C.a.aj(y)},
aZ:function(a){var z,y
H.t(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<3;++y)C.a.l(z,a[y])
C.a.aj(z)},
b1:function(a,b){var z=[P.d]
this.b=this.cX(!1,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
cR:function(a){return this.b1(a,null)},
cX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.k(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.G)(y),++u){t=y[u]
s=$.ac().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){q=z[u]
s=$.ac().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.H(w,c)
C.a.H(w,b)
return C.a.a2(w,"\n")},
p:{
dJ:function(a){var z,y
z=P.d
y=[z]
return new G.iF(a,H.k([],y),H.k([],y),H.k([],y),H.k([],y),0,P.a4(z,P.E))}}},
dK:{"^":"aR;",
e2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.x(new Float32Array(3))
b.Z(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
u=new Float32Array(3)
t=new T.x(u)
t.E(v)
s=a.a
u[0]=u[0]-s[0]
u[1]=u[1]-s[1]
u[2]=u[2]-s[2]
t.aF(0)
r=b.bG(t)
r.aF(0)
q=t.bG(r)
q.aF(0)
p=r.aD(v)
o=q.aD(v)
v=t.aD(v)
n=r.a
m=n[0]
l=q.a
k=l[0]
j=u[0]
i=n[1]
h=l[1]
g=u[1]
n=n[2]
l=l[2]
u=u[2]
z[15]=1
z[14]=-v
z[13]=-o
z[12]=-p
z[11]=0
z[10]=u
z[9]=l
z[8]=n
z[7]=0
z[6]=g
z[5]=h
z[4]=i
z[3]=0
z[2]=j
z[1]=k
z[0]=m
z[12]=y
z[13]=x
z[14]=w},
bS:function(a){return this.e2(a,null)}},
iW:{"^":"b;a,b,c,d,e,f,r"},
cB:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hu:{"^":"cB;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
jx:function(a){var z,y,x,w
z=J.T(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.k(y,[P.ak])
for(w=0;w<z.gj(a);++w){y=z.h(a,w)
if(typeof y==="number"&&Math.floor(y)===y)C.a.i(x,w,J.aQ(z.h(a,w)))
else{y=z.h(a,w)
if(typeof y==="number")C.a.i(x,w,H.cL(z.h(a,w)))}}return x},
jO:function(a){var z,y,x,w
z=J.T(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.k(y,[P.E])
for(w=0;w<z.gj(a);++w)C.a.i(x,w,H.r(z.h(a,w)))
return x},
jw:function(a){var z,y,x
z=J.T(a)
y=H.U(z.h(a,"skinIndices"))
H.U(z.h(a,"skinWeights"))
if(y==null||J.al(y)===0)return 0
z=J.al(z.h(a,"vertices"))
if(typeof z!=="number")return z.a5()
z=C.m.G(z,3)
x=C.b.a5(J.al(y),z)
P.a8("Skin multiplier is "+x)
return x},
hv:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=H.k([],[G.dw])
y=Y.jw(b5)
x=J.T(b5)
w=Y.jO(H.U(x.h(b5,"faces")))
v=w.length
P.a8("faces: "+v)
u=Y.de(H.U(x.h(b5,"vertices")))
t=Y.de(H.U(x.h(b5,"normals")))
s=y===0
r=s?null:Y.df(y,H.U(x.h(b5,"skinIndices")))
q=s?null:Y.df(y,Y.jx(H.U(x.h(b5,"skinWeights"))))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.a
m=n[0]+n[1]+n[2]+n[3]
if(m<0.98||m>1.02)H.bI("bad vector: "+H.e(o))}l=Y.fV(H.U(J.b2(x.h(b5,"uvs"),0)))
for(x=y>0,s=[T.x],n=l.length>0,k=t.length>0,j=[G.ds],i=[G.dt],h=P.d,g=[P.a,,],f=[P.E],e=[T.ah],d=r&&C.a,c=q&&C.a,b=[T.a5],a=0;a<v;){a0=a+1
if(a<0)return H.i(w,a)
a1=w[a]
if(typeof a1!=="number")return a1.ej()
m=(a1&1)===0?3:4
a2=H.k([],f)
for(a=a0,a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.l(a2,w[a])}if((a1&2)!==0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
a4=w[a]
a=a0}else a4=0
a5=H.k([],e)
if((a1&8)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.l(a5,C.a.h(l,w[a]))}a6=H.k([],s)
if((a1&16)!==0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
a7=C.a.h(t,w[a])
for(a3=0;a3<m;++a3)C.a.l(a6,a7)
a=a0}if((a1&32)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.l(a6,C.a.h(t,w[a]))}a8=H.k([],f)
if((a1&64)!==0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
a9=w[a]
for(a3=0;a3<m;++a3)C.a.l(a8,a9)
a=a0}if((a1&128)!==0)for(a3=0;a3<m;++a3,a=a0){a0=a+1
if(a<0||a>=v)return H.i(w,a)
C.a.l(a8,w[a])}if(typeof a4!=="number")return H.as(a4)
for(;b0=z.length,b0<=a4;){b1=new G.dw(!1,H.k([],j),H.k([],i),H.k([],s),P.a4(h,g))
if(k)b1.a7("aNormal")
if(n)b1.a7("aTexUV")
if(x){b1.a7("aBoneIndex")
b1.a7("aBoneWeight")}C.a.l(z,b1)}if(a4<0)return H.i(z,a4)
b1=z[a4]
b2=H.k([],s)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.G)(a2),++p)C.a.l(b2,C.a.h(u,a2[p]))
if(m===3)b1.cF(b2)
else b1.cG(b2)
if(a5.length>0)b1.cD("aTexUV",a5)
if(a6.length>0)b1.cE("aNormal",a6)
if(x){b3=H.k([],b)
b4=H.k([],b)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.G)(a2),++p){a0=a2[p]
C.a.l(b3,d.h(r,a0))
C.a.l(b4,c.h(q,a0))}b1.aY("aBoneIndex",b3)
b1.aY("aBoneWeight",b4)}}x="out: "+z.length+" "
if(0>=z.length)return H.i(z,0)
P.a8(x+z[0].k(0))
return z},
de:function(a){var z,y,x,w,v,u,t,s
z=J.T(a)
y=new Array(C.b.G(z.gj(a),3))
y.fixed$length=Array
x=H.k(y,[T.x])
for(w=0;w<z.gj(a);w+=3){y=C.b.G(w,3)
v=J.aQ(z.h(a,w))
u=J.aQ(z.h(a,w+1))
t=J.aQ(z.h(a,w+2))
s=new Float32Array(3)
s[0]=v
s[1]=u
s[2]=t
C.a.i(x,y,new T.x(s))}return x},
fV:function(a){var z,y,x,w,v,u,t
z=J.T(a)
y=new Array(C.b.G(z.gj(a),2))
y.fixed$length=Array
x=H.k(y,[T.ah])
for(w=0;w<z.gj(a);w+=2){y=C.b.G(w,2)
v=J.aQ(z.h(a,w))
u=J.aQ(z.h(a,w+1))
t=new Float32Array(2)
t[0]=v
t[1]=u
C.a.i(x,y,new T.ah(t))}return x},
df:function(a,b){var z,y,x,w,v,u,t
z=J.T(b)
y=new Array(C.b.a5(z.gj(b),a))
y.fixed$length=Array
x=H.k(y,[T.a5])
for(w=0,v=0;w<z.gj(b);w+=a,++v){y=new Float32Array(4)
for(u=0;u<a;++u){t=J.aQ(z.h(b,w+u))
if(u>=4)return H.i(y,u)
y[u]=t}C.a.i(x,v,new T.a5(y))}return x}}],["","",,R,{"^":"",
jW:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.jq("span",null),"$isV")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).am(y,"float")
y.setProperty(x,"left","")
x=C.x.am(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.I(z,v)}return z},
iw:{"^":"iv;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
e9:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.a8("size change "+H.e(y)+" "+H.e(x))
this.dx.cH(y,x)
this.z=y
this.Q=x},"$1","ge8",4,0,13]},
iK:{"^":"b;",
cS:function(a,b,c){var z,y
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
y=J.m(z)
y.I(z,this.b)
y.I(z,this.d)
y.I(z,this.c)}},
iL:{"^":"iK;e,f,a,b,c,d",
cV:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.eg(y,2)+" fps"
C.q.co(this.c,b)
x=C.b.G(30*C.z.dE(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isV")
v=w.style
u=""+x+"px"
v.height=u
C.q.I(z,w)},
cU:function(a){return this.cV(a,"")}}}],["","",,A,{"^":"",
es:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(e,"$isa",[G.aS],"$asa")
z=b.dx
z.E(c)
y=b.d
z.bT(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.e(b)
w=C.a.ge1(e)
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
v.dK(new T.bx(u))
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
C.a.l(e,x)
a.cK(b.cx,e,d)
if(0>=e.length)return H.i(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.G)(y),++r)A.es(a,y[r],z,d,e)},
bV:{"^":"dK;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
dH:{"^":"aR;d,e,f,a,b,c"},
iv:{"^":"aR;",
cP:function(a,b,c){if(this.d==null)this.d=new G.hh(this.e,null,null,null,null)},
cJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f3(v.a,36160,z)
J.fG(v.a,this.x,this.y,x,w)
if(y!==0)J.f6(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.aS(P.a4(x,w),"transforms",!1,!0))
r=new T.a1(new Float32Array(16))
r.O()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.G)(v),++o)A.es(p,v[o],r,a,s)
if(0>=s.length)return H.i(s,-1)
s.pop()}},
cI:function(){return this.cJ(null)}}}],["","",,D,{"^":"",
hQ:function(a){var z,y,x,w
z=[P.J,,,]
y=new P.O(0,$.D,[z])
x=new XMLHttpRequest()
C.y.e4(x,"GET",a)
w=W.by
W.ai(x,"loadend",H.j(new D.hR(new P.cE(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.y.cn(x,"")
return y},
hO:function(a){var z,y,x,w
z=W.bU
y=new P.O(0,$.D,[z])
x=document.createElement("img")
w=new W.bB(x,"load",!1,[W.N])
w.gdW(w).ag(new D.hP(new P.cE(y,[z]),x),-1)
x.src=a
return y},
hR:{"^":"n:25;a,b",
$1:function(a){H.f(a,"$isby")
this.a.a1(0,H.b_(C.U.dP(0,H.u(W.kN(this.b.response))),{futureOr:1,type:[P.J,,,]}))}},
hP:{"^":"n:13;a,b",
$1:function(a){H.f(a,"$isN")
return this.a.a1(0,this.b)}},
hG:{"^":"b;a,b,c",
cN:function(a){var z,y
a=document
z=W.b7
y={func:1,ret:-1,args:[z]}
W.ai(a,"keydown",H.j(new D.hI(this),y),!1,z)
W.ai(a,"keyup",H.j(new D.hJ(this),y),!1,z)},
p:{
hH:function(a){var z=P.E
z=new D.hG(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z))
z.cN(a)
return z}}},
hI:{"^":"n:14;a",
$1:function(a){var z
H.f(a,"$isb7")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hJ:{"^":"n:14;a",
$1:function(a){var z
H.f(a,"$isb7")
z=this.a
z.a.c_(0,a.which)
z.c.l(0,a.which)}},
i_:{"^":"b;a,b,c,d,e,f,r,x",
cO:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gbW(a)
x=H.o(y,0)
W.ai(y.a,y.b,H.j(new D.i1(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbV(a)
y=H.o(x,0)
W.ai(x.a,x.b,H.j(new D.i2(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbX(a)
x=H.o(y,0)
W.ai(y.a,y.b,H.j(new D.i3(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbY(a)
x=H.o(z,0)
W.ai(z.a,z.b,H.j(new D.i4(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
i0:function(a){var z=P.E
z=new D.i_(P.a9(null,null,null,z),P.a9(null,null,null,z),P.a9(null,null,null,z),0,0,0,0,0)
z.cO(a)
return z}}},
i1:{"^":"n:4;a",
$1:function(a){var z,y
H.f(a,"$isW")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.r(y.gbU(a).a)
z.x=H.r(y.gbU(a).b)
z.d=a.movementX
z.e=a.movementY}},
i2:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isW")
a.preventDefault()
P.a8("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
i3:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isW")
a.preventDefault()
z=this.a
z.a.c_(0,a.button)
z.c.l(0,a.button)}},
i4:{"^":"n:27;a",
$1:function(a){H.f(a,"$isaT")
a.preventDefault()
this.a.f=H.r(C.af.gdS(a))}},
ic:{"^":"fN;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bH:function(a){var z,y
z=C.f.dX(H.t(a,"$isl",[P.b],"$asl"),0,new A.l9(),P.E)
if(typeof z!=="number")return H.as(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l9:{"^":"n:28;",
$2:function(a,b){var z,y
H.r(a)
z=J.au(b)
if(typeof a!=="number")return a.J()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bx:{"^":"b;a",
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.i(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bx){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
N:function(a){var z,y,x
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
return new T.x(z)},
dK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},a1:{"^":"b;a",
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
k:function(a){return"[0] "+this.N(0).k(0)+"\n[1] "+this.N(1).k(0)+"\n[2] "+this.N(2).k(0)+"\n[3] "+this.N(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
N:function(a){var z,y,x
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
return new T.a5(z)},
O:function(){var z=this.a
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
bT:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ah:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ah){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gT:function(a){return this.a[1]}},x:{"^":"b;a",
Z:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
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
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbQ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aF:function(a){var z,y,x
z=Math.sqrt(this.gbQ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aD:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bG:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.x(new Float32Array(3))
z.Z(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gX:function(a){return this.a[0]},
gT:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
p:{
dU:function(a,b,c){var z=new T.x(new Float32Array(3))
z.Z(a,b,c)
return z},
dV:function(a){var z=new Float32Array(3)
z[2]=a
z[1]=a
z[0]=a
return new T.x(z)}}},a5:{"^":"b;a",
E:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
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
gX:function(a){return this.a[0]},
gT:function(a){return this.a[1]},
gah:function(a){return this.a[2]},
gci:function(a){return this.a[3]}}}],["","",,L,{"^":"",
ez:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=document
x=C.r.cl(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iL(0,0,x,w,y.createElement("div"),R.jW("blue","gray",90,30))
u.cS(x,"blue","gray")
t=H.f(C.r.e6(y,"#webgl-canvas"),"$isbo")
s=new G.fP(t)
y=P.d
x=P.b
v=(t&&C.J).ck(t,"webgl2",P.dA(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a2(P.dr('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fq(v))
if($.et>0)P.a8("I: "+r)
J.f7(v,0,0,0,1)
J.bm(v,2929)
J.bm(v,2884)
v=new Float32Array(3)
r=D.hH(null)
q=D.i0(t)
p=new T.a1(new Float32Array(16))
p.O()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.ic(0.3,0,0,0,new T.x(v),-0.02,r,q,p,new T.x(o),new T.x(n),new T.x(m),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
l.k3=-0.001
v=new T.a1(new Float32Array(16))
v.O()
r=new T.a1(new Float32Array(16))
r.O()
k=new G.ie(l,50,1,0.01,1000,v,r,new T.a1(new Float32Array(16)),P.a4(y,x),"perspective",!1,!0)
k.b2()
v=$.eW()
r=$.eT()
q=$.eV()
p=new Float32Array(16)
o=new Float32Array(16)
n=new T.x(new Float32Array(3))
m=new T.x(new Float32Array(3))
n.E(r)
m.E(q)
q=H.k([],[G.cv])
r=new Float32Array(64)
j=new Float32Array(4)
C.a.l(q,new G.h3(v,40,new T.a1(p),new T.a1(o),1,n,m,"dir",!1,!0))
m=H.k([],[A.dH])
i=new R.iw(t,k,null,s,m,17664,0,0,0,0,"main",!1,!0)
i.cP("main",s,null)
i.e9(null)
n=W.N
W.ai(window,"resize",H.j(i.ge8(),{func:1,ret:-1,args:[n]}),!1,n)
n=G.iy("main",s,$.eY(),$.eX())
y=H.k([k,new G.hs(q,r,j,P.a4(y,x),"illumination",!1,!0)],[G.aS])
j=H.k([],[A.bV])
h=new A.dH(n,y,j,"main",!1,!0)
C.a.l(m,h)
z.a=0
P.hk(H.k([D.hQ("../asset/leeperrysmith/LeePerrySmith.js"),D.hO("../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg")],[[P.a0,P.b]]),null,!1,x).ag(new L.ln(s,h,new L.lm(z,l,i,u)),null)},
lm:{"^":"n:29;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cQ(a7)
if(typeof a7!=="number")return a7.aX()
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
u=y.k3
if(typeof v!=="number")return v.aT()
v=y.fy-v*u
if(v>0)y.fy=v
v=C.m.dF(y.id,-1.4707963267948965,1.4707963267948965)
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
y.bS(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gbQ())
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
this.c.cI()
C.ag.gdv(window).ag(this,-1)
this.d.cU(z.a)}},
ln:{"^":"n:30;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.U(a)
z=new G.iW(!1,!1,!1,!0,1,9729,9729)
z.a=!0
z.f=9987
z.b=!0
y=this.a
x=J.T(a)
w=x.h(a,1)
v=J.fa(y.a)
J.bl(y.a,3553,v)
J.fv(y.a,37440,1)
J.bl(y.a,3553,v)
J.fx(y.a,3553,0,6408,6408,5121,w)
u=z.r
J.bP(y.a,3553,10240,u)
u=z.f
J.bP(y.a,3553,10241,u)
if(z.b){J.bP(y.a,3553,10242,33071)
J.bP(y.a,3553,10243,33071)}if(z.a)J.fl(y.a,3553)
J.fr(y.a)
J.bl(y.a,3553,null)
u=P.d
t=P.b
s=P.a4(u,t)
s.i(0,"cDepthTest",!0)
s.i(0,"cDepthWrite",!0)
s.i(0,"cBlendEquation",$.eE())
s.i(0,"cStencilFunc",$.eH())
s.i(0,"uColor",$.eU())
s.i(0,"uShininess",10)
s.i(0,"uBumpMap",new G.hu(w,"../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg",v,3553,y,z))
s.i(0,"uBumpScale",0.01)
r=Y.hv(H.f(x.h(a,0),"$isJ"))
if(0>=r.length)return H.i(r,0)
P.a8(r[0])
x=this.b
y=x.d
if(0>=r.length)return H.i(r,0)
v=r[0]
w=y.d
y=y.e.x
t=P.a4(u,t)
q=J.fb(w.a)
p=new G.hX(w,q,4,t,y,0,-1,P.a4(u,P.an),"meshdata:../asset/leeperrysmith/LeePerrySmith.js",!1,!0)
u=G.dv(v.d,null)
t.i(0,"aPosition",J.cc(w.a))
p.ch=u
p.b_("aPosition",u,3)
o=$.ac().h(0,"aPosition")
if(o==null)H.a2("Unknown canonical aPosition")
n=y.h(0,"aPosition")
J.bM(w.a,q)
w.bN(0,n,0)
w.cf(0,t.h(0,"aPosition"),n,o.b0(),5126,!1,0,0)
y=H.t(v.cL(),"$isa",[P.E],"$asa")
p.y=J.cc(w.a)
u=p.ch.length
if(u<768){p.sas(new Uint8Array(H.c1(y)))
p.Q=5121}else if(u<196608){p.sas(new Uint16Array(H.c1(y)))
p.Q=5123}else{p.sas(new Uint32Array(H.c1(y)))
p.Q=5125}J.bM(w.a,q)
y=p.y
u=p.cx
J.ca(w.a,34963,y)
J.cY(w.a,34963,u,35048)
G.jK(v,p)
y=[A.bV]
w=H.k([],y)
v=new Float32Array(9)
u=new T.a1(new Float32Array(16))
u.O()
t=new T.a1(new Float32Array(16))
t.O()
q=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
y=H.k([],y)
j=new Float32Array(9)
i=new T.a1(new Float32Array(16))
i.O()
h=new T.a1(new Float32Array(16))
h.O()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
d=new A.bV(null,null,y,new T.bx(j),i,h,new T.x(g),new T.x(f),new T.x(e),new T.x(new Float32Array(3)),"wrapper",!1,!0)
C.a.l(y,new A.bV(new G.hV(s,"mat",!1,!0),p,w,new T.bx(v),u,t,new T.x(q),new T.x(m),new T.x(l),new T.x(k),"meshdata:../asset/leeperrysmith/LeePerrySmith.js",!1,!0))
y=new T.x(new Float32Array(3))
y.Z(100,0,0)
d.bS(y)
C.a.l(x.f,d)
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.bv.prototype
if(a==null)return J.hC.prototype
if(typeof a=="boolean")return J.hB.prototype
if(a.constructor==Array)return J.bt.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.b)return a
return J.c7(a)}
J.T=function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(a.constructor==Array)return J.bt.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.b)return a
return J.c7(a)}
J.bG=function(a){if(a==null)return a
if(a.constructor==Array)return J.bt.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.b)return a
return J.c7(a)}
J.eu=function(a){if(typeof a=="number")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.l6=function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.ev=function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.b)return a
return J.c7(a)}
J.c6=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bg.prototype
return a}
J.aP=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).C(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.eu(a).U(a,b)}
J.b2=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.T(a).h(a,b)}
J.eZ=function(a,b,c){return J.bG(a).i(a,b,c)}
J.cV=function(a,b){return J.ev(a).an(a,b)}
J.bL=function(a,b){return J.m(a).dh(a,b)}
J.f_=function(a,b,c,d){return J.m(a).di(a,b,c,d)}
J.f0=function(a,b,c){return J.m(a).dj(a,b,c)}
J.cW=function(a,b){return J.m(a).bo(a,b)}
J.f1=function(a,b,c,d){return J.m(a).bp(a,b,c,d)}
J.cX=function(a,b,c){return J.m(a).br(a,b,c)}
J.f2=function(a,b){return J.m(a).dz(a,b)}
J.ca=function(a,b,c){return J.m(a).bs(a,b,c)}
J.f3=function(a,b,c){return J.m(a).bu(a,b,c)}
J.bl=function(a,b,c){return J.m(a).bv(a,b,c)}
J.bM=function(a,b){return J.m(a).dC(a,b)}
J.f4=function(a,b){return J.m(a).bw(a,b)}
J.f5=function(a,b,c){return J.m(a).bx(a,b,c)}
J.cY=function(a,b,c,d){return J.m(a).by(a,b,c,d)}
J.f6=function(a,b){return J.bG(a).bz(a,b)}
J.f7=function(a,b,c,d,e){return J.m(a).bA(a,b,c,d,e)}
J.f8=function(a,b){return J.l6(a).L(a,b)}
J.cb=function(a,b,c){return J.T(a).dI(a,b,c)}
J.cc=function(a){return J.m(a).bC(a)}
J.f9=function(a){return J.m(a).bD(a)}
J.fa=function(a){return J.m(a).bF(a)}
J.fb=function(a){return J.m(a).dO(a)}
J.fc=function(a,b){return J.m(a).bH(a,b)}
J.cd=function(a,b){return J.m(a).bI(a,b)}
J.fd=function(a,b,c,d){return J.m(a).bJ(a,b,c,d)}
J.fe=function(a,b,c,d,e){return J.m(a).dT(a,b,c,d,e)}
J.ff=function(a,b,c,d,e){return J.m(a).bK(a,b,c,d,e)}
J.fg=function(a,b,c,d,e,f){return J.m(a).dU(a,b,c,d,e,f)}
J.fh=function(a,b){return J.bG(a).q(a,b)}
J.bm=function(a,b){return J.m(a).bL(a,b)}
J.fi=function(a,b){return J.m(a).bM(a,b)}
J.fj=function(a){return J.m(a).dV(a)}
J.fk=function(a,b){return J.m(a).B(a,b)}
J.fl=function(a,b){return J.m(a).aL(a,b)}
J.fm=function(a){return J.m(a).gdw(a)}
J.au=function(a){return J.A(a).gv(a)}
J.bN=function(a){return J.bG(a).gw(a)}
J.al=function(a){return J.T(a).gj(a)}
J.fn=function(a){return J.m(a).ge5(a)}
J.fo=function(a){return J.m(a).ged(a)}
J.fp=function(a){return J.c6(a).gci(a)}
J.bO=function(a){return J.c6(a).gX(a)}
J.ce=function(a){return J.c6(a).gT(a)}
J.cZ=function(a){return J.c6(a).gah(a)}
J.cf=function(a,b){return J.m(a).Y(a,b)}
J.fq=function(a){return J.m(a).ai(a)}
J.fr=function(a){return J.m(a).aM(a)}
J.fs=function(a,b){return J.m(a).aN(a,b)}
J.ft=function(a,b,c){return J.m(a).aO(a,b,c)}
J.d_=function(a,b,c){return J.m(a).aS(a,b,c)}
J.fu=function(a,b){return J.m(a).bR(a,b)}
J.fv=function(a,b,c){return J.m(a).bZ(a,b,c)}
J.d0=function(a){return J.m(a).e7(a)}
J.fw=function(a,b,c,d){return J.m(a).aW(a,b,c,d)}
J.fx=function(a,b,c,d,e,f,g){return J.m(a).c1(a,b,c,d,e,f,g)}
J.bP=function(a,b,c,d){return J.m(a).c2(a,b,c,d)}
J.aQ=function(a){return J.eu(a).ee(a)}
J.fy=function(a){return J.ev(a).ef(a)}
J.bn=function(a){return J.A(a).k(a)}
J.fz=function(a,b,c,d){return J.m(a).eh(a,b,c,d)}
J.fA=function(a,b,c){return J.m(a).c4(a,b,c)}
J.fB=function(a,b,c){return J.m(a).c5(a,b,c)}
J.cg=function(a,b,c){return J.m(a).c6(a,b,c)}
J.fC=function(a,b,c){return J.m(a).c7(a,b,c)}
J.d1=function(a,b,c){return J.m(a).c8(a,b,c)}
J.d2=function(a,b,c){return J.m(a).c9(a,b,c)}
J.d3=function(a,b,c){return J.m(a).ca(a,b,c)}
J.d4=function(a,b,c,d){return J.m(a).cb(a,b,c,d)}
J.d5=function(a,b,c,d){return J.m(a).cc(a,b,c,d)}
J.fD=function(a,b){return J.m(a).cd(a,b)}
J.fE=function(a,b,c){return J.m(a).ei(a,b,c)}
J.fF=function(a,b,c,d,e,f,g){return J.m(a).ce(a,b,c,d,e,f,g)}
J.fG=function(a,b,c,d,e){return J.m(a).cg(a,b,c,d,e)}
I.aN=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bQ.prototype
C.J=W.bo.prototype
C.x=W.fX.prototype
C.q=W.h4.prototype
C.K=W.h5.prototype
C.L=W.ho.prototype
C.r=W.hp.prototype
C.y=W.hq.prototype
C.M=J.h.prototype
C.a=J.bt.prototype
C.z=J.dx.prototype
C.b=J.dy.prototype
C.m=J.bu.prototype
C.i=J.bv.prototype
C.T=J.bw.prototype
C.f=H.i5.prototype
C.n=H.i7.prototype
C.v=W.i8.prototype
C.C=J.ig.prototype
C.D=W.ir.prototype
C.I=W.iU.prototype
C.w=J.bg.prototype
C.af=W.aT.prototype
C.ag=W.j5.prototype
C.e=new P.k7()
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
C.U=new P.hE(null,null)
C.V=new P.hF(null)
C.W=H.k(I.aN(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.k(I.aN(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Z=H.k(I.aN([]),[P.B])
C.Y=H.k(I.aN([]),[P.d])
C.t=H.k(I.aN(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.k(I.aN(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
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
$.d9=null
$.cG=!1
$.ex=null
$.eo=null
$.eC=null
$.c5=null
$.c8=null
$.cO=null
$.aW=null
$.bh=null
$.bi=null
$.cH=!1
$.D=C.e
$.am=null
$.cm=null
$.dp=null
$.dn=null
$.dk=null
$.dj=null
$.di=null
$.dh=null
$.et=0
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
I.$lazy(y,x,w)}})(["lH","eG",function(){return H.ew("_$dart_dartClosure")},"mh","cS",function(){return H.ew("_$dart_js")},"n2","eI",function(){return H.ag(H.bY({
toString:function(){return"$receiver$"}}))},"n3","eJ",function(){return H.ag(H.bY({$method$:null,
toString:function(){return"$receiver$"}}))},"n4","eK",function(){return H.ag(H.bY(null))},"n5","eL",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"n8","eO",function(){return H.ag(H.bY(void 0))},"n9","eP",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"n7","eN",function(){return H.ag(H.dR(null))},"n6","eM",function(){return H.ag(function(){try{null.$method$}catch(z){return z.message}}())},"nb","eR",function(){return H.ag(H.dR(void 0))},"na","eQ",function(){return H.ag(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nk","cT",function(){return P.jb()},"nA","bk",function(){return[]},"lE","eF",function(){return{}},"nr","eS",function(){return P.cw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"ns","cU",function(){return P.a4(P.d,P.br)},"mQ","eH",function(){return new G.dQ(1281,0,4294967295)},"lA","eE",function(){return new G.dP(1281,1281,1281)},"ny","ac",function(){return P.dA(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a2,"aPosition",C.E,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.a0,"vCenter",C.F,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.c,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.d,G.F)},"nJ","eY",function(){var z,y
z=G.dJ("LightBlinnPhongFancyV")
y=[P.d]
z.cC(H.k(["aPosition","aNormal","aTexUV"],y))
z.aZ(H.k(["vPosition","vNormal","vTexUV"],y))
z.a6(H.k(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.cR(H.k(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"],y))
return z},"nH","eX",function(){var z,y
z=G.dJ("LightBlinnPhongFancyF")
y=[P.d]
z.aZ(H.k(["vPosition","vNormal","vTexUV"],y))
z.a6(H.k(["uLightDescs","uLightTypes","uShininess"],y))
z.a6(H.k(["uEyePosition","uColor"],y))
z.a6(H.k(["uBumpScale","uBumpMap"],y))
z.b1(H.k(["void main() {\n   vec3 normal = normalize(vNormal);\n   vec2 uv = dHdxy_fwd(vTexUV, uBumpScale, uBumpMap);\n   normal = perturbNormalArb(vPosition, normal, uv);\n   ColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    normal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n    oFragColor.rgb = acc.diffuse \n                    + acc.specular\n                    + uColor;\n   oFragColor.a = 1.0;\n}\n"],y),H.k(["vec2 dHdxy_fwd(vec2 uv, float scale, sampler2D map) {\n    float H = texture(map, uv).x;\n    float dHx = texture(map, uv + dFdx(uv)).x - H;\n    float dHy = texture(map, uv + dFdy(uv)).x - H;\n    return vec2(dHx, dHy) * scale;\n}\n\n\nvec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {\n     vec3 vSigmaX = dFdx(surf_pos);\n     vec3 vSigmaY = dFdy(surf_pos);\n        \n     vec3 vN = surf_norm;\n     vec3 R1 = cross(vSigmaY, vN);\n     vec3 R2 = cross(vN, vSigmaX);\n     float fDet = dot(vSigmaX, R1);\n     // *= gl_FrontFacing ? 1.0 : -1.0\n     fDet *= (float(gl_FrontFacing) * 2.0 - 1.0);\n     vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);\n     return normalize(abs(fDet) * surf_norm - vGrad);\n}\n","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nC","eU",function(){return T.dU(0.333,0.157,0.067)},"nG","eW",function(){return T.dU(-1,-1,0)},"nB","eT",function(){return T.dV(0.3)},"nD","eV",function(){return T.dV(0.133)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.W]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.B,args:[,,]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.S,args:[W.af]},{func:1,ret:P.S,args:[P.d]},{func:1,ret:P.S,args:[W.V,P.d,P.d,W.bD]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.N]},{func:1,ret:P.B,args:[W.b7]},{func:1,args:[P.d]},{func:1,ret:P.B,args:[,P.Q]},{func:1,ret:P.B,args:[,],opt:[P.Q]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:P.S,args:[W.v]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.B,args:[P.H]},{func:1,args:[W.N]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:P.B,args:[W.by]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.aT]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.B,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
Isolate.aN=a.aN
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
if(typeof dartMainRunner==="function")dartMainRunner(L.ez,[])
else L.ez([])})})()
//# sourceMappingURL=bumpmap.dart.js.map
