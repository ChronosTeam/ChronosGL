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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cE(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.be=function(){}
var dart=[["","",,H,{"^":"",m5:{"^":"b;a"}}],["","",,J,{"^":"",
cJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cH==null){H.kY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cy("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cL()]
if(v!=null)return v
v=H.l2(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cL(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.b7(a)},
k:["cr",function(a){return"Instance of '"+H.b8(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hq:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isT:1},
dp:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isz:1},
cp:{"^":"h;",
gv:function(a){return 0},
k:["ct",function(a){return String(a)}]},
i1:{"^":"cp;"},
ba:{"^":"cp;"},
bq:{"^":"cp;",
k:function(a){var z=a[$.ez()]
if(z==null)return this.ct(a)
return"JavaScript function for "+H.e(J.bj(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"h;$ti",
l:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.N(P.C("add"))
a.push(b)},
H:function(a,b){var z,y
H.w(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.N(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.J)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
bo:function(a,b){var z,y
H.m(b,{func:1,ret:P.T,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aL(a))}return!1},
cm:function(a,b){if(!!a.immutable$list)H.N(P.C("sort"))
H.ir(a,J.kv(),H.o(a,0))},
ah:function(a){return this.cm(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
k:function(a){return P.cn(a,"[","]")},
gw:function(a){return new J.fD(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b7(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.ak(a,b))
return a[b]},
h:function(a,b,c){H.r(b)
H.y(c,H.o(a,0))
if(!!a.immutable$list)H.N(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ak(a,b))
if(b>=a.length||b<0)throw H.c(H.ak(a,b))
a[b]=c},
$isv:1,
$asv:I.be,
$isl:1,
$isa:1,
p:{
hp:function(a,b){return J.co(H.i(a,[b]))},
co:function(a){H.bg(a)
a.fixed$length=Array
return a},
m3:[function(a,b){return J.f_(H.es(a,"$isZ"),H.es(b,"$isZ"))},"$2","kv",8,0,31]}},
m4:{"^":"bn;$ti"},
fD:{"^":"b;a,b,c,0d,$ti",
sb1:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.J(z))
x=this.c
if(x>=y){this.sb1(null)
return!1}this.sb1(z[x]);++this.c
return!0},
$isb2:1},
bo:{"^":"h;",
K:function(a,b){var z
H.cK(b)
if(typeof b!=="number")throw H.c(H.aF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gad(b)
if(this.gad(a)===z)return 0
if(this.gad(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gad:function(a){return a===0?1/a<0:a<0},
c_:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.C(""+a+".toInt()"))},
dm:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.C(""+a+".ceil()"))},
dn:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.aF(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dX:function(a,b){var z
if(b>20)throw H.c(P.bO(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gad(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cv:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bl(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.C("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.d9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d9:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.c(H.aF(b))
return a>b},
$isZ:1,
$asZ:function(){return[P.G]},
$isal:1,
$isG:1},
dn:{"^":"bo;",$isD:1},
dm:{"^":"bo;"},
bp:{"^":"h;",
bA:function(a,b){if(b<0)throw H.c(H.ak(a,b))
if(b>=a.length)H.N(H.ak(a,b))
return a.charCodeAt(b)},
a_:function(a,b){if(b>=a.length)throw H.c(H.ak(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.d0(b,null,null))
return a+b},
cn:function(a,b){var z=H.i(a.split(b),[P.d])
return z},
cp:function(a,b,c){var z
if(c>a.length)throw H.c(P.bO(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
co:function(a,b){return this.cp(a,b,0)},
aQ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bP(b,null,null))
if(b>c)throw H.c(P.bP(b,null,null))
if(c>a.length)throw H.c(P.bP(c,null,null))
return a.substring(b,c)},
cq:function(a,b){return this.aQ(a,b,null)},
dW:function(a){return a.toLowerCase()},
dZ:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a_(z,0)===133){x=J.hr(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bA(z,w)===133?J.hs(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
ds:function(a,b,c){if(c>a.length)throw H.c(P.bO(c,0,a.length,null,null))
return H.la(a,b,c)},
K:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.aF(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.c(H.ak(a,b))
return a[b]},
$isv:1,
$asv:I.be,
$isZ:1,
$asZ:function(){return[P.d]},
$isdA:1,
$isd:1,
p:{
dq:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hr:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.a_(a,b)
if(y!==32&&y!==13&&!J.dq(y))break;++b}return b},
hs:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bA(a,z)
if(y!==32&&y!==13&&!J.dq(y))break}return b}}}}],["","",,H,{"^":"",
hn:function(){return new P.cv("No element")},
ho:function(){return new P.cv("Too many elements")},
ir:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.D,args:[c,c]})
H.bs(a,0,J.aY(a)-1,b,c)},
bs:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.iq(a,b,c,d,e)
else H.ip(a,b,c,d,e)},
iq:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aU(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
ip:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.f.T(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.T(b+a0,2)
v=w-z
u=w+z
t=J.aU(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
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
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.U(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.R()
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
if(typeof e!=="number")return e.a4()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.R()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.R()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a4()
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
H.bs(a,b,m-2,a1,a2)
H.bs(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.U(a1.$2(t.i(a,m),r),0);)++m
for(;J.U(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a4()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
dc:{"^":"l;"},
bL:{"^":"dc;$ti",
gw:function(a){return new H.du(this,this.gj(this),0,[H.cG(this,"bL",0)])},
aE:function(a,b){return this.cs(0,H.m(b,{func:1,ret:P.T,args:[H.cG(this,"bL",0)]}))}},
du:{"^":"b;a,b,c,0d,$ti",
sb2:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aU(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aL(z))
w=this.c
if(w>=x){this.sb2(null)
return!1}this.sb2(y.q(z,w));++this.c
return!0},
$isb2:1},
hH:{"^":"bL;a,b,$ti",
gj:function(a){return J.aY(this.a)},
q:function(a,b){return this.b.$1(J.f9(this.a,b))},
$asbL:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dQ:{"^":"l;a,b,$ti",
gw:function(a){return new H.iO(J.bE(this.a),this.b,this.$ti)}},
iO:{"^":"b2;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bK:{"^":"b;$ti"}}],["","",,H,{"^":"",
aK:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kQ:function(a){return init.types[H.r(a)]},
l0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bj(a)
if(typeof z!=="string")throw H.c(H.aF(a))
return z},
b7:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ib:function(a,b){var z,y
if(typeof a!=="string")H.N(H.aF(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=H.t(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
ia:function(a){var z,y
if(typeof a!=="string")H.N(H.aF(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fs(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b8:function(a){return H.i2(a)+H.bV(H.am(a),0,null)},
i2:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isba){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aK(w.length>1&&C.h.a_(w,0)===36?C.h.cq(w,1):w)},
X:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i9:function(a){return a.b?H.X(a).getUTCFullYear()+0:H.X(a).getFullYear()+0},
i7:function(a){return a.b?H.X(a).getUTCMonth()+1:H.X(a).getMonth()+1},
i3:function(a){return a.b?H.X(a).getUTCDate()+0:H.X(a).getDate()+0},
i4:function(a){return a.b?H.X(a).getUTCHours()+0:H.X(a).getHours()+0},
i6:function(a){return a.b?H.X(a).getUTCMinutes()+0:H.X(a).getMinutes()+0},
i8:function(a){return a.b?H.X(a).getUTCSeconds()+0:H.X(a).getSeconds()+0},
i5:function(a){return a.b?H.X(a).getUTCMilliseconds()+0:H.X(a).getMilliseconds()+0},
ae:function(a){throw H.c(H.aF(a))},
j:function(a,b){if(a==null)J.aY(a)
throw H.c(H.ak(a,b))},
ak:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=H.r(J.aY(a))
if(!(b<0)){if(typeof z!=="number")return H.ae(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bP(b,"index",null)},
aF:function(a){return new P.ao(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ev})
z.name=""}else z.toString=H.ev
return z},
ev:function(){return J.bj(this.dartException)},
N:function(a){throw H.c(a)},
J:function(a){throw H.c(P.aL(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dz(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eC()
u=$.eD()
t=$.eE()
s=$.eF()
r=$.eI()
q=$.eJ()
p=$.eH()
$.eG()
o=$.eL()
n=$.eK()
m=v.I(y)
if(m!=null)return z.$1(H.cr(H.t(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.cr(H.t(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dz(H.t(y),m))}}return z.$1(new H.iK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dG()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dG()
return a},
aV:function(a){var z
if(a==null)return new H.e7(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e7(a)},
kM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
l_:function(a,b,c,d,e,f){H.f(a,"$isbl")
switch(H.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.df("Unsupported number of arguments for wrapped closure"))},
aG:function(a,b){var z
H.r(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l_)
a.$identity=z
return z},
fO:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.ig(z).r}else x=d
w=e?Object.create(new H.it().constructor.prototype):Object.create(new H.ce(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.F()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d5(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kQ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d3:H.cf
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d5(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fL:function(a,b,c,d){var z=H.cf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d5:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fN(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fL(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.F()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aZ
if(v==null){v=H.bI("self")
$.aZ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.F()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aZ
if(v==null){v=H.bI("self")
$.aZ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fM:function(a,b,c,d){var z,y
z=H.cf
y=H.d3
switch(b?-1:a){case 0:throw H.c(H.ik("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fN:function(a,b){var z,y,x,w,v,u,t,s
z=$.aZ
if(z==null){z=H.bI("self")
$.aZ=z}y=$.d2
if(y==null){y=H.bI("receiver")
$.d2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fM(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.F()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.F()
$.aa=y+1
return new Function(z+y+"}")()},
cE:function(a,b,c,d,e,f,g){return H.fO(a,b,H.r(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a6(a,"String"))},
em:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"double"))},
cK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"num"))},
bX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a6(a,"bool"))},
r:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
c5:function(a,b){throw H.c(H.a6(a,H.aK(H.t(b).substring(3))))},
l8:function(a,b){throw H.c(H.d4(a,H.aK(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.c5(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.l8(a,b)},
es:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.c5(a,b)},
nz:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.B(a)[b])return a
H.c5(a,b)},
bg:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a6(a,"List<dynamic>"))},
l1:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.c5(a,b)},
cF:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.r(z)]
else return a.$S()}return},
bx:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cF(J.B(a))
if(z==null)return!1
return H.ed(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cA)return a
$.cA=!0
try{if(H.bx(a,b))return a
z=H.by(b)
y=H.a6(a,z)
throw H.c(y)}finally{$.cA=!1}},
aT:function(a,b){if(a!=null&&!H.cD(a,b))H.N(H.a6(a,H.by(b)))
return a},
eh:function(a){var z,y
z=J.B(a)
if(!!z.$isn){y=H.cF(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b8(a)},
lf:function(a){throw H.c(new P.fU(H.t(a)))},
eo:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
nw:function(a,b,c){return H.aX(a["$as"+H.e(c)],H.am(b))},
bf:function(a,b,c,d){var z
H.t(c)
H.r(d)
z=H.aX(a["$as"+H.e(c)],H.am(b))
return z==null?null:z[d]},
cG:function(a,b,c){var z
H.t(b)
H.r(c)
z=H.aX(a["$as"+H.e(b)],H.am(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.r(b)
z=H.am(a)
return z==null?null:z[b]},
by:function(a){return H.aE(a,null)},
aE:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aK(a[0].builtin$cls)+H.bV(a,1,b)
if(typeof a=="function")return H.aK(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.r(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.ku(a,b)
if('futureOr' in a)return"FutureOr<"+H.aE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ku:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.h.F(t,b[r])
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
for(z=H.kL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aE(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bV:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cw("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aE(u,c)}return"<"+z.k(0)+">"},
kP:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isn){y=H.cF(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.am(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aj:function(a,b,c,d){var z,y
H.t(b)
H.bg(c)
H.t(d)
if(a==null)return!1
z=H.am(a)
y=J.B(a)
if(y[b]==null)return!1
return H.ek(H.aX(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.t(b)
H.bg(c)
H.t(d)
if(a==null)return a
if(H.aj(a,b,c,d))return a
throw H.c(H.d4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aK(b.substring(3))+H.bV(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.t(b)
H.bg(c)
H.t(d)
if(a==null)return a
if(H.aj(a,b,c,d))return a
throw H.c(H.a6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aK(b.substring(3))+H.bV(c,0,null),init.mangledGlobalNames)))},
ek:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
ns:function(a,b,c){return a.apply(b,H.aX(J.B(b)["$as"+H.e(c)],H.am(b)))},
eq:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.eq(z)}return!1},
cD:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.eq(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}z=J.B(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cD(a,b))throw H.c(H.a6(a,H.by(b)))
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
if('func' in c)return H.ed(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"a_" in y.prototype))return!1
w=y.prototype["$as"+"a_"]
v=H.aX(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ek(H.aX(r,z),b,u,d)},
ed:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.l7(m,b,l,d)},
l7:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
nt:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
l2:function(a){var z,y,x,w,v,u
z=H.t($.ep.$1(a))
y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.ej.$2(a,z))
if(z!=null){y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c4(x)
$.bY[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c3[z]=x
return x}if(v==="-"){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.et(a,x)
if(v==="*")throw H.c(P.cy(z))
if(init.leafTags[z]===true){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.et(a,x)},
et:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cJ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cJ(a,!1,null,!!a.$isx)},
l6:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cJ(z,c,null,null)},
kY:function(){if(!0===$.cH)return
$.cH=!0
H.kZ()},
kZ:function(){var z,y,x,w,v,u,t,s
$.bY=Object.create(null)
$.c3=Object.create(null)
H.kU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eu.$1(v)
if(u!=null){t=H.l6(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kU:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aS(C.O,H.aS(C.T,H.aS(C.B,H.aS(C.B,H.aS(C.S,H.aS(C.P,H.aS(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ep=new H.kV(v)
$.ej=new H.kW(u)
$.eu=new H.kX(t)},
aS:function(a,b){return a(b)||b},
la:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
lc:function(a,b,c,d){var z=b.cX(a,d)
if(z==null)return a
return H.le(a,z.b.index,z.gdC(z),c)},
lb:function(a,b,c){var z,y
z=b.gbg()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
ld:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.lc(a,b,c,d)},
le:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ie:{"^":"b;a,b,c,d,e,f,r,0x",p:{
ig:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.co(z)
y=z[0]
x=z[1]
return new H.ie(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iE:{"^":"b;a,b,c,d,e,f",
I:function(a){var z,y,x
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
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dM:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dz:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hu:{"^":"O;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hu(a,y,z?null:b.receiver)}}},
iK:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lg:{"^":"n:7;a",
$1:function(a){if(!!J.B(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e7:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isS:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.b8(this).trim()+"'"},
gce:function(){return this},
$isbl:1,
gce:function(){return this}},
dI:{"^":"n;"},
it:{"^":"dI;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aK(z)+"'"}},
ce:{"^":"dI;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ce))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b7(this.a)
else y=typeof z!=="object"?J.an(z):H.b7(z)
return(y^H.b7(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b8(z)+"'")},
p:{
cf:function(a){return a.a},
d3:function(a){return a.c},
bI:function(a){var z,y,x,w,v
z=new H.ce("self","target","receiver","name")
y=J.co(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iF:{"^":"O;a",
k:function(a){return this.a},
p:{
a6:function(a,b){return new H.iF("TypeError: "+H.e(P.bJ(a))+": type '"+H.eh(a)+"' is not a subtype of type '"+b+"'")}}},
fJ:{"^":"O;a",
k:function(a){return this.a},
p:{
d4:function(a,b){return new H.fJ("CastError: "+H.e(P.bJ(a))+": type '"+H.eh(a)+"' is not a subtype of type '"+b+"'")}}},
ij:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
ik:function(a){return new H.ij(a)}}},
dN:{"^":"b;a,0b,0c,0d",
gab:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.gab()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.gab())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dN&&this.gab()===b.gab()}},
cq:{"^":"dv;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.as(this,[H.o(this,0)])},
ac:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cT(z,b)}else{y=this.dH(b)
return y}},
dH:function(a){var z=this.d
if(z==null)return!1
return this.az(this.at(z,J.an(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a8(w,b)
x=y==null?null:y.b
return x}else return this.dI(b)},
dI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.at(z,J.an(a)&0x3ffffff)
x=this.az(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.av()
this.b=z}this.b3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.av()
this.c=y}this.b3(y,b,c)}else{x=this.d
if(x==null){x=this.av()
this.d=x}w=J.an(b)&0x3ffffff
v=this.at(x,w)
if(v==null)this.ax(x,w,[this.am(b,c)])
else{u=this.az(v,b)
if(u>=0)v[u].b=c
else v.push(this.am(b,c))}}},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aL(this))
z=z.c}},
b3:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.a8(a,b)
if(z==null)this.ax(a,b,this.am(b,c))
else z.b=c},
b5:function(){this.r=this.r+1&67108863},
am:function(a,b){var z,y
z=new H.hz(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b5()
return z},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
k:function(a){return P.dw(this)},
a8:function(a,b){return a[b]},
at:function(a,b){return a[b]},
ax:function(a,b,c){a[b]=c},
cU:function(a,b){delete a[b]},
cT:function(a,b){return this.a8(a,b)!=null},
av:function(){var z=Object.create(null)
this.ax(z,"<non-identifier-key>",z)
this.cU(z,"<non-identifier-key>")
return z},
$isds:1},
hz:{"^":"b;a,b,0c,0d"},
as:{"^":"dc;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hA(z,z.r,this.$ti)
y.c=z.e
return y}},
hA:{"^":"b;a,b,0c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aL(z))
else{z=this.c
if(z==null){this.sb4(null)
return!1}else{this.sb4(z.a)
this.c=this.c.c
return!0}}},
$isb2:1},
kV:{"^":"n:7;a",
$1:function(a){return this.a(a)}},
kW:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
kX:{"^":"n:14;a",
$1:function(a){return this.a(H.t(a))}},
ht:{"^":"b;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gbg:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dr(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cX:function(a,b){var z,y
z=this.gbg()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jC(this,y)},
$isdA:1,
p:{
dr:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.cm("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jC:{"^":"b;a,b",
gdC:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.j(z,b)
return z[b]}}}],["","",,H,{"^":"",
kL:function(a){return J.hp(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bU:function(a){var z,y
if(!!J.B(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ak(b,a))},
hU:{"^":"h;",$isiG:1,"%":"DataView;ArrayBufferView;ct|e1|e2|dx|e3|e4|au"},
ct:{"^":"hU;",
gj:function(a){return a.length},
$isv:1,
$asv:I.be,
$isx:1,
$asx:I.be},
dx:{"^":"e2;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
h:function(a,b,c){H.r(b)
H.em(c)
H.ad(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.al]},
$asp:function(){return[P.al]},
$isl:1,
$asl:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
"%":"Float64Array"},
au:{"^":"e4;",
h:function(a,b,c){H.r(b)
H.r(c)
H.ad(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.D]},
$asp:function(){return[P.D]},
$isl:1,
$asl:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hT:{"^":"dx;",$isai:1,"%":"Float32Array"},
me:{"^":"au;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mf:{"^":"au;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ishl:1,
"%":"Int32Array"},
mg:{"^":"au;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mh:{"^":"au;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hV:{"^":"au;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isn2:1,
"%":"Uint32Array"},
mi:{"^":"au;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mj:{"^":"au;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e1:{"^":"ct+p;"},
e2:{"^":"e1+bK;"},
e3:{"^":"ct+p;"},
e4:{"^":"e3+bK;"}}],["","",,P,{"^":"",
iV:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aG(new P.iX(z),1)).observe(y,{childList:true})
return new P.iW(z,y,x)}else if(self.setImmediate!=null)return P.kD()
return P.kE()},
nc:[function(a){self.scheduleImmediate(H.aG(new P.iY(H.m(a,{func:1,ret:-1})),0))},"$1","kC",4,0,3],
nd:[function(a){self.setImmediate(H.aG(new P.iZ(H.m(a,{func:1,ret:-1})),0))},"$1","kD",4,0,3],
ne:[function(a){H.m(a,{func:1,ret:-1})
P.kb(0,a)},"$1","kE",4,0,3],
hb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isl",[[P.a_,d]],"$asl")
s=[[P.a,d]]
y=new P.Q(0,$.E,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hd(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.J)(r),++p){w=r[p]
v=o
w.aC(new P.hc(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.Q(0,$.E,s)
r.b8(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.i(r,[d])}catch(n){u=H.a3(n)
t=H.aV(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bN()
r=$.E
if(r!==C.e)r.toString
s=new P.Q(0,r,s)
s.b9(m,t)
return s}else{z.c=u
z.d=t}}return y},
ky:function(a,b){if(H.bx(a,{func:1,args:[P.b,P.S]}))return H.m(a,{func:1,ret:null,args:[P.b,P.S]})
if(H.bx(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.d0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kx:function(){var z,y
for(;z=$.aQ,z!=null;){$.bd=null
y=z.b
$.aQ=y
if(y==null)$.bc=null
z.a.$0()}},
nq:[function(){$.cB=!0
try{P.kx()}finally{$.bd=null
$.cB=!1
if($.aQ!=null)$.cM().$1(P.el())}},"$0","el",0,0,1],
eg:function(a){var z=new P.dS(H.m(a,{func:1,ret:-1}))
if($.aQ==null){$.bc=z
$.aQ=z
if(!$.cB)$.cM().$1(P.el())}else{$.bc.b=z
$.bc=z}},
kB:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aQ
if(z==null){P.eg(a)
$.bd=$.bc
return}y=new P.dS(a)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aQ=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
l9:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.E
if(C.e===y){P.aR(null,null,C.e,a)
return}y.toString
P.aR(null,null,y,H.m(y.br(a),z))},
bW:function(a,b,c,d,e){var z={}
z.a=d
P.kB(new P.kz(z,e))},
ee:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
ef:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
kA:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
aR:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.br(d):c.dj(d,-1)
P.eg(d)},
iX:{"^":"n:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iW:{"^":"n:25;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iY:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iZ:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ka:{"^":"b;a,0b,c",
cO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aG(new P.kc(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
p:{
kb:function(a,b){var z=new P.ka(!0,0)
z.cO(a,b)
return z}}},
kc:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a_:{"^":"b;$ti"},
hd:{"^":"n:15;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isS")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.G(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.G(z.c,z.d)}},
hc:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bb(z.a)}else if(z.b===0&&!this.e)this.c.G(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dW:{"^":"b;$ti",
dr:function(a,b){if(a==null)a=new P.bN()
if(this.a.a!==0)throw H.c(P.bt("Future already completed"))
$.E.toString
this.G(a,b)},
dq:function(a){return this.dr(a,null)}},
dT:{"^":"dW;a,$ti",
bC:function(a,b){var z
H.aT(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bt("Future already completed"))
z.b8(b)},
G:function(a,b){this.a.b9(a,b)}},
k5:{"^":"dW;a,$ti",
G:function(a,b){this.a.G(a,b)}},
aO:{"^":"b;0a,b,c,d,e,$ti",
dJ:function(a){if(this.c!==6)return!0
return this.b.b.aB(H.m(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
dG:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.b,P.S]}))return H.aT(w.dR(z,a.a,a.b,null,y,P.S),x)
else return H.aT(w.aB(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
Q:{"^":"b;bk:a<,b,0d6:c<,$ti",
aC:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.e){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ky(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Q(0,$.E,[c])
w=b==null?1:3
this.b7(new P.aO(x,w,a,b,[z,c]))
return x},
ae:function(a,b){return this.aC(a,null,b)},
b7:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.f(this.c,"$isQ")
z=y.a
if(z<4){y.b7(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aR(null,null,z,H.m(new P.jg(this,a),{func:1,ret:-1}))}},
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
P.aR(null,null,y,H.m(new P.jn(z,this),{func:1,ret:-1}))}},
a9:function(){var z=H.f(this.c,"$isaO")
this.c=null
return this.aa(z)},
aa:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ao:function(a){var z,y,x
z=H.o(this,0)
H.aT(a,{futureOr:1,type:z})
y=this.$ti
if(H.aj(a,"$isa_",y,"$asa_"))if(H.aj(a,"$isQ",y,null))P.bS(a,this)
else P.dX(a,this)
else{x=this.a9()
H.y(a,z)
this.a=4
this.c=a
P.aP(this,x)}},
bb:function(a){var z
H.y(a,H.o(this,0))
z=this.a9()
this.a=4
this.c=a
P.aP(this,z)},
G:function(a,b){var z
H.f(b,"$isS")
z=this.a9()
this.a=8
this.c=new P.a0(a,b)
P.aP(this,z)},
b8:function(a){var z
H.aT(a,{futureOr:1,type:H.o(this,0)})
if(H.aj(a,"$isa_",this.$ti,"$asa_")){this.cR(a)
return}this.a=1
z=this.b
z.toString
P.aR(null,null,z,H.m(new P.ji(this,a),{func:1,ret:-1}))},
cR:function(a){var z=this.$ti
H.w(a,"$isa_",z,"$asa_")
if(H.aj(a,"$isQ",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aR(null,null,z,H.m(new P.jm(this,a),{func:1,ret:-1}))}else P.bS(a,this)
return}P.dX(a,this)},
b9:function(a,b){var z
H.f(b,"$isS")
this.a=1
z=this.b
z.toString
P.aR(null,null,z,H.m(new P.jh(this,a,b),{func:1,ret:-1}))},
$isa_:1,
p:{
dX:function(a,b){var z,y,x
b.a=1
try{a.aC(new P.jj(b),new P.jk(b),null)}catch(x){z=H.a3(x)
y=H.aV(x)
P.l9(new P.jl(b,z,y))}},
bS:function(a,b){var z,y
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
if(b==null){if(w){v=H.f(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.bW(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.bW(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.jq(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jp(x,b,r).$0()}else if((y&2)!==0)new P.jo(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.B(y).$isa_){if(y.a>=4){n=H.f(t.c,"$isaO")
t.c=null
b=t.aa(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bS(y,t)
return}}m=b.b
n=H.f(m.c,"$isaO")
m.c=null
b=m.aa(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
jg:{"^":"n:0;a,b",
$0:function(){P.aP(this.a,this.b)}},
jn:{"^":"n:0;a,b",
$0:function(){P.aP(this.b,this.a.a)}},
jj:{"^":"n:8;a",
$1:function(a){var z=this.a
z.a=0
z.ao(a)}},
jk:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isS")
this.a.G(a,b)},
$1:function(a){return this.$2(a,null)}},
jl:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
ji:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bb(H.y(this.b,H.o(z,0)))}},
jm:{"^":"n:0;a,b",
$0:function(){P.bS(this.b,this.a)}},
jh:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
jq:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bX(H.m(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aV(v)
if(this.d){w=H.f(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.B(z).$isa_){if(z instanceof P.Q&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.f(z.gd6(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ae(new P.jr(t),null)
w.a=!1}}},
jr:{"^":"n:17;a",
$1:function(a){return this.a}},
jp:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aB(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aV(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
jo:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa0")
w=this.c
if(w.dJ(z)&&w.e!=null){v=this.b
v.b=w.dG(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aV(u)
w=H.f(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dS:{"^":"b;a,0b"},
ix:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.E,[P.D])
z.a=0
x=H.o(this,0)
w=H.m(new P.iz(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.iA(z,y),{func:1,ret:-1})
W.aD(this.a,this.b,w,!1,x)
return y}},
iz:{"^":"n;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
iA:{"^":"n:0;a,b",
$0:function(){this.b.ao(this.a.a)}},
iy:{"^":"b;"},
a0:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
ki:{"^":"b;",$isna:1},
kz:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jO:{"^":"ki;",
dS:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.e===$.E){a.$0()
return}P.ee(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aV(x)
P.bW(null,null,this,z,H.f(y,"$isS"))}},
dT:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.E){a.$1(b)
return}P.ef(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aV(x)
P.bW(null,null,this,z,H.f(y,"$isS"))}},
dj:function(a,b){return new P.jQ(this,H.m(a,{func:1,ret:b}),b)},
br:function(a){return new P.jP(this,H.m(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.jR(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bX:function(a,b){H.m(a,{func:1,ret:b})
if($.E===C.e)return a.$0()
return P.ee(null,null,this,a,b)},
aB:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.E===C.e)return a.$1(b)
return P.ef(null,null,this,a,b,c,d)},
dR:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.E===C.e)return a.$2(b,c)
return P.kA(null,null,this,a,b,c,d,e,f)}},
jQ:{"^":"n;a,b,c",
$0:function(){return this.a.bX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jP:{"^":"n:1;a,b",
$0:function(){return this.a.dS(this.b)}},
jR:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dT(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dt:function(a,b,c){H.bg(a)
return H.w(H.kM(a,new H.cq(0,0,[b,c])),"$isds",[b,c],"$asds")},
R:function(a,b){return new H.cq(0,0,[a,b])},
hB:function(){return new H.cq(0,0,[null,null])},
a4:function(a,b,c,d){return new P.jy(0,0,[d])},
hm:function(a,b,c){var z,y
if(P.cC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.i([],[P.d])
y=$.bh()
C.a.l(y,a)
try{P.kw(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dH(b,H.l1(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cn:function(a,b,c){var z,y,x
if(P.cC(a))return b+"..."+c
z=new P.cw(b)
y=$.bh()
C.a.l(y,a)
try{x=z
x.a=P.dH(x.gS(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gS()+c
y=z.gS()
return y.charCodeAt(0)==0?y:y},
cC:function(a){var z,y
for(z=0;y=$.bh(),z<y.length;++z)if(a===y[z])return!0
return!1},
kw:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cs:function(a,b){var z,y,x
z=P.a4(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x)z.l(0,H.y(a[x],b))
return z},
dw:function(a){var z,y,x
z={}
if(P.cC(a))return"{...}"
y=new P.cw("")
try{C.a.l($.bh(),a)
x=y
x.a=x.gS()+"{"
z.a=!0
J.fc(a,new P.hG(z,y))
z=y
z.a=z.gS()+"}"}finally{z=$.bh()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gS()
return z.charCodeAt(0)==0?z:z},
jy:{"^":"jt;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e0(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbw")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbw")!=null}else return this.cS(b)},
cS:function(a){var z=this.d
if(z==null)return!1
return this.as(this.be(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cz()
this.b=z}return this.b6(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cz()
this.c=y}return this.b6(y,b)}else return this.cP(0,b)},
cP:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.cz()
this.d=z}y=this.bc(b)
x=z[y]
if(x==null)z[y]=[this.aw(b)]
else{if(this.as(x,b)>=0)return!1
x.push(this.aw(b))}return!0},
bW:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.be(z,b)
x=this.as(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.au()}},
b6:function(a,b){H.y(b,H.o(this,0))
if(H.f(a[b],"$isbw")!=null)return!1
a[b]=this.aw(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbw")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
au:function(){this.r=this.r+1&67108863},
aw:function(a){var z,y
z=new P.bw(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.au()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.au()},
bc:function(a){return J.an(a)&0x3ffffff},
be:function(a,b){return a[this.bc(b)]},
as:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
p:{
cz:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bw:{"^":"b;a,0b,0c"},
e0:{"^":"b;a,b,0c,0d,$ti",
sba:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aL(z))
else{z=this.c
if(z==null){this.sba(null)
return!1}else{this.sba(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb2:1,
p:{
jz:function(a,b,c){var z=new P.e0(a,b,[c])
z.c=a.e
return z}}},
jt:{"^":"il;"},
hC:{"^":"jA;",$isl:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.du(a,this.gj(a),0,[H.bf(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
dE:function(a,b,c,d){var z,y,x
H.y(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bf(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aL(a))}return y},
k:function(a){return P.cn(a,"[","]")}},
dv:{"^":"W;"},
hG:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
W:{"^":"b;$ti",
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bf(this,a,"W",0),H.bf(this,a,"W",1)]})
for(z=J.bE(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aY(this.gD(a))},
k:function(a){return P.dw(a)},
$isK:1},
im:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bE(H.w(b,"$isl",this.$ti,"$asl"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.cn(this,"{","}")},
$isl:1,
$ismB:1},
il:{"^":"im;"},
jA:{"^":"b+p;"}}],["","",,P,{"^":"",
cI:function(a,b,c){var z
H.t(a)
z=H.ib(a,c)
if(z!=null)return z
throw H.c(P.cm(a,null,null))},
aH:function(a,b){var z
H.t(a)
z=H.ia(a)
if(z!=null)return z
throw H.c(P.cm("Invalid double",a,null))},
h5:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b8(a)+"'"},
dC:function(a,b,c){return new H.ht(a,H.dr(a,!1,!0,!1))},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h5(a)},
df:function(a){return new P.jd(a)},
aJ:function(a){H.aW(H.e(a))},
T:{"^":"b;"},
"+bool":0,
b_:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a&&this.b===b.b},
K:function(a,b){return C.f.K(this.a,H.f(b,"$isb_").a)},
gv:function(a){var z=this.a
return(z^C.f.bj(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fV(H.i9(this))
y=P.bk(H.i7(this))
x=P.bk(H.i3(this))
w=P.bk(H.i4(this))
v=P.bk(H.i6(this))
u=P.bk(H.i8(this))
t=P.fW(H.i5(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isZ:1,
$asZ:function(){return[P.b_]},
p:{
fV:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
al:{"^":"G;"},
"+double":0,
b0:{"^":"b;a",
R:function(a,b){return C.f.R(this.a,H.f(b,"$isb0").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.f.K(this.a,H.f(b,"$isb0").a)},
k:function(a){var z,y,x,w,v
z=new P.h1()
y=this.a
if(y<0)return"-"+new P.b0(0-y).k(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.h0().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isZ:1,
$asZ:function(){return[P.b0]},
p:{
db:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h0:{"^":"n:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h1:{"^":"n:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
bN:{"^":"O;",
k:function(a){return"Throw of null."}},
ao:{"^":"O;a,b,c,d",
gaq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gap:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gaq()+y+x
if(!this.a)return w
v=this.gap()
u=P.bJ(this.b)
return w+v+": "+H.e(u)},
p:{
fC:function(a){return new P.ao(!1,null,null,a)},
d0:function(a,b,c){return new P.ao(!0,a,b,c)}}},
dB:{"^":"ao;e,f,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bP:function(a,b,c){return new P.dB(null,null,!0,a,b,"Value not in range")},
bO:function(a,b,c,d,e){return new P.dB(b,c,!0,a,d,"Invalid value")}}},
hk:{"^":"ao;e,j:f>,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y
z=H.r(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.r(e==null?J.aY(b):e)
return new P.hk(b,z,!0,a,c,"Index out of range")}}},
iL:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.iL(a)}}},
iJ:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cy:function(a){return new P.iJ(a)}}},
cv:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bt:function(a){return new P.cv(a)}}},
fP:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bJ(z))+"."},
p:{
aL:function(a){return new P.fP(a)}}},
dG:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fU:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jd:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
h9:{"^":"b;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aQ(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
cm:function(a,b,c){return new P.h9(a,b,c)}}},
bl:{"^":"b;"},
D:{"^":"G;"},
"+int":0,
l:{"^":"b;$ti",
aE:["cs",function(a,b){var z=H.cG(this,"l",0)
return new H.dQ(this,H.m(b,{func:1,ret:P.T,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.N(P.bO(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.hm(this,"(",")")}},
b2:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
K:{"^":"b;$ti"},
z:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isZ:1,
$asZ:function(){return[P.G]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b7(this)},
k:function(a){return"Instance of '"+H.b8(this)+"'"},
toString:function(){return this.k(this)}},
S:{"^":"b;"},
d:{"^":"b;",$isZ:1,
$asZ:function(){return[P.d]},
$isdA:1},
"+String":0,
cw:{"^":"b;S:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dH:function(a,b,c){var z=J.bE(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
kK:function(){return document},
h2:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).L(z,a,b,c)
y.toString
z=W.u
z=new H.dQ(new W.a7(y),H.m(new W.h3(),{func:1,ret:P.T,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.N(H.hn())
w=x.gA(x)
if(x.t())H.N(H.ho())
return H.f(w,"$isV")},
h4:function(a){H.f(a,"$isL")
return"wheel"},
b1:function(a){var z,y,x
z="element tag unavailable"
try{y=J.ff(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
j9:function(a,b){return document.createElement(a)},
bT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e_:function(a,b,c,d){var z,y
z=W.bT(W.bT(W.bT(W.bT(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ec:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j3(a)
if(!!J.B(z).$isL)return z
return}else return H.f(a,"$isL")},
kt:function(a){var z
if(!!J.B(a).$isci)return a
z=new P.iS([],[],!1)
z.c=!0
return z.aD(a)},
ei:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.e)return a
return z.dk(a,b)},
M:{"^":"V;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lh:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fA:{"^":"M;",
k:function(a){return String(a)},
$isfA:1,
"%":"HTMLAnchorElement"},
li:{"^":"M;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d1:{"^":"M;",$isd1:1,"%":"HTMLBaseElement"},
fG:{"^":"h;","%":";Blob"},
bH:{"^":"M;",$isbH:1,"%":"HTMLBodyElement"},
cg:{"^":"M;0n:height=,0m:width=",
cf:function(a,b,c){var z=this.cY(a,b,P.kF(c,null))
return z},
cY:function(a,b,c){return a.getContext(b,c)},
$iscg:1,
"%":"HTMLCanvasElement"},
ln:{"^":"h;",
ag:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lo:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fQ:{"^":"ch;",$isfQ:1,"%":"CSSNumericValue|CSSUnitValue"},
lq:{"^":"fT;0j:length=","%":"CSSPerspective"},
ap:{"^":"h;",$isap:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fR:{"^":"j1;0j:length=",
aI:function(a,b){var z=this.cZ(a,this.an(a,b))
return z==null?"":z},
an:function(a,b){var z,y
z=$.ey()
y=z[b]
if(typeof y==="string")return y
y=this.da(a,b)
z[b]=y
return y},
da:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fX()+b
if(z in a)return z
return b},
cZ:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fS:{"^":"b;",
gn:function(a){return this.aI(a,"height")},
gm:function(a){return this.aI(a,"width")}},
ch:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fT:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ls:{"^":"ch;0j:length=","%":"CSSTransformValue"},
lt:{"^":"ch;0j:length=","%":"CSSUnparsedValue"},
lv:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fY:{"^":"M;","%":"HTMLDivElement"},
ci:{"^":"u;",
de:function(a,b){return a.adoptNode(b)},
cg:function(a,b){return a.getElementById(b)},
bV:function(a,b){return a.querySelector(b)},
$isci:1,
"%":"XMLDocument;Document"},
lw:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fZ:{"^":"h;",
dv:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lx:{"^":"j5;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.w(c,"$isY",[P.G],"$asY")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.Y,P.G]]},
$isx:1,
$asx:function(){return[[P.Y,P.G]]},
$asp:function(){return[[P.Y,P.G]]},
$isl:1,
$asl:function(){return[[P.Y,P.G]]},
$isa:1,
$asa:function(){return[[P.Y,P.G]]},
$asq:function(){return[[P.Y,P.G]]},
"%":"ClientRectList|DOMRectList"},
h_:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aj(b,"$isY",[P.G],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isY:1,
$asY:function(){return[P.G]},
"%":";DOMRectReadOnly"},
ly:{"^":"j7;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.t(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lz:{"^":"h;0j:length=","%":"DOMTokenList"},
V:{"^":"u;0dU:tagName=",
gdh:function(a){return new W.j8(a)},
k:function(a){return a.localName},
L:["ai",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.de
if(z==null){z=H.i([],[W.ab])
y=new W.dy(z)
C.a.l(z,W.dY(null))
C.a.l(z,W.e8())
$.de=y
d=y}else d=z
z=$.dd
if(z==null){z=new W.eb(d)
$.dd=z
c=z}else{z.a=d
c=z}}if($.ag==null){z=document
y=z.implementation
y=(y&&C.K).dv(y,"")
$.ag=y
$.cj=y.createRange()
y=$.ag
y.toString
y=y.createElement("base")
H.f(y,"$isd1")
y.href=z.baseURI
z=$.ag.head;(z&&C.L).E(z,y)}z=$.ag
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbH")}z=$.ag
if(!!this.$isbH)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ag.body;(z&&C.q).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.cj;(z&&C.E).ci(z,x)
z=$.cj
w=(z&&C.E).dt(z,b)}else{x.innerHTML=b
w=$.ag.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.ag.body
if(x==null?z!=null:x!==z)J.cV(x)
c.aN(w)
C.n.de(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"du",null,null,"ge2",5,5,null],
cl:function(a,b,c,d){a.textContent=null
this.E(a,this.L(a,b,c,d))},
ck:function(a,b){return this.cl(a,b,null,null)},
W:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
gdK:function(a){return new W.bR(a,"mousedown",!1,[W.a5])},
gdL:function(a){return new W.bR(a,"mousemove",!1,[W.a5])},
gdM:function(a){return new W.bR(a,"mouseup",!1,[W.a5])},
gdN:function(a){return new W.bR(a,H.t(W.h4(a)),!1,[W.bb])},
$isV:1,
"%":";Element"},
h3:{"^":"n:18;",
$1:function(a){return!!J.B(H.f(a,"$isu")).$isV}},
lB:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
ah:{"^":"h;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
dd:function(a,b,c,d){H.m(c,{func:1,args:[W.ah]})
if(c!=null)this.cQ(a,b,c,!1)},
cQ:function(a,b,c,d){return a.addEventListener(b,H.aG(H.m(c,{func:1,args:[W.ah]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e5|e6|e9|ea"},
aq:{"^":"fG;",$isaq:1,"%":"File"},
lS:{"^":"jf;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaq")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isl:1,
$asl:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"FileList"},
lT:{"^":"L;0j:length=","%":"FileWriter"},
lW:{"^":"M;0j:length=","%":"HTMLFormElement"},
ar:{"^":"h;",$isar:1,"%":"Gamepad"},
hf:{"^":"M;","%":"HTMLHeadElement"},
lX:{"^":"h;0j:length=","%":"History"},
lY:{"^":"jv;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isu")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hg:{"^":"ci;","%":"HTMLDocument"},
hh:{"^":"hi;",
e3:function(a,b,c,d,e,f){return a.open(b,c)},
dO:function(a,b,c){return a.open(b,c)},
cj:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hi:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lZ:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
m_:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
m0:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
m1:{"^":"M;0n:height=,0m:width=","%":"HTMLImageElement"},
dl:{"^":"M;0n:height=,0m:width=",$isdl:1,"%":"HTMLInputElement"},
b3:{"^":"dP;",$isb3:1,"%":"KeyboardEvent"},
hF:{"^":"h;",
k:function(a){return String(a)},
$ishF:1,
"%":"Location"},
hJ:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
ma:{"^":"h;0j:length=","%":"MediaList"},
mb:{"^":"jD;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.i([],[P.d])
this.C(a,new W.hL(z))
return z},
gj:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hL:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mc:{"^":"jE;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.i([],[P.d])
this.C(a,new W.hM(z))
return z},
gj:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hM:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"MimeType"},
md:{"^":"jG;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isat")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asp:function(){return[W.at]},
$isl:1,
$asl:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"MimeTypeArray"},
a5:{"^":"dP;",
gbU:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b6(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.B(W.ec(z)).$isV)throw H.c(P.C("offsetX is only supported on elements"))
y=H.f(W.ec(z),"$isV")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b6(u,v,w),"$isb6",w,"$asb6")
if(typeof z!=="number")return z.Y()
if(typeof x!=="number")return x.Y()
return new P.b6(C.t.c_(z-u),C.t.c_(x-v),w)}},
$isa5:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"hC;a",
ga6:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bt("No elements"))
if(y>1)throw H.c(P.bt("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isl",[W.u],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
h:function(a,b,c){var z
H.r(b)
z=this.a
J.eS(z,H.f(c,"$isu"),C.w.i(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,[H.bf(C.w,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){return C.w.i(this.a.childNodes,b)},
$asp:function(){return[W.u]},
$asl:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"L;0dP:previousSibling=",
dQ:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cr(a):z},
E:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d4:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hW:{"^":"jI;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isu")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
mm:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
mo:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mp:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
av:{"^":"h;0j:length=",$isav:1,"%":"Plugin"},
mr:{"^":"jM;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isav")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asp:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"PluginArray"},
mt:{"^":"a5;0n:height=,0m:width=","%":"PointerEvent"},
br:{"^":"ah;",$isbr:1,"%":"ProgressEvent|ResourceProgressEvent"},
id:{"^":"h;",
dt:function(a,b){return a.createContextualFragment(b)},
ci:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
my:{"^":"jS;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.i([],[P.d])
this.C(a,new W.ii(z))
return z},
gj:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"RTCStatsReport"},
ii:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mz:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mA:{"^":"M;0j:length=","%":"HTMLSelectElement"},
aw:{"^":"L;",$isaw:1,"%":"SourceBuffer"},
mC:{"^":"e6;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaw")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"SourceBufferList"},
ax:{"^":"h;",$isax:1,"%":"SpeechGrammar"},
mD:{"^":"jZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isax")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SpeechGrammarList"},
ay:{"^":"h;0j:length=",$isay:1,"%":"SpeechRecognitionResult"},
mG:{"^":"k1;",
i:function(a,b){return this.bf(a,H.t(b))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d0(a,z)
if(y==null)return
b.$2(y,this.bf(a,y))}},
gD:function(a){var z=H.i([],[P.d])
this.C(a,new W.iw(z))
return z},
gj:function(a){return a.length},
bf:function(a,b){return a.getItem(b)},
d0:function(a,b){return a.key(b)},
$asW:function(){return[P.d,P.d]},
$isK:1,
$asK:function(){return[P.d,P.d]},
"%":"Storage"},
iw:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
az:{"^":"h;",$isaz:1,"%":"CSSStyleSheet|StyleSheet"},
iB:{"^":"M;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=W.h2("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).H(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
mJ:{"^":"M;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
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
new W.a7(y).H(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mK:{"^":"M;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga6(z)
y.toString
x.toString
new W.a7(y).H(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dJ:{"^":"M;",$isdJ:1,"%":"HTMLTemplateElement"},
mL:{"^":"h;0m:width=","%":"TextMetrics"},
aA:{"^":"L;",$isaA:1,"%":"TextTrack"},
aB:{"^":"L;",$isaB:1,"%":"TextTrackCue|VTTCue"},
mM:{"^":"k9;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaB")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TextTrackCueList"},
mN:{"^":"ea;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaA")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"TextTrackList"},
mP:{"^":"h;0j:length=","%":"TimeRanges"},
aC:{"^":"h;",$isaC:1,"%":"Touch"},
mQ:{"^":"ke;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaC")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aC]},
$isx:1,
$asx:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"TouchList"},
mR:{"^":"h;0j:length=","%":"TrackDefaultList"},
dP:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
n4:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
n6:{"^":"hJ;0n:height=,0m:width=","%":"HTMLVideoElement"},
n7:{"^":"L;0j:length=","%":"VideoTrackList"},
n8:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
n9:{"^":"h;0m:width=","%":"VTTRegion"},
bb:{"^":"a5;",
gdz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.C("deltaY is not supported"))},
$isbb:1,
"%":"WheelEvent"},
iP:{"^":"L;",
gdg:function(a){var z,y,x
z=P.G
y=new P.Q(0,$.E,[z])
x=H.m(new W.iQ(new P.k5(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cW(a)
this.d5(a,W.ei(x,z))
return y},
d5:function(a,b){return a.requestAnimationFrame(H.aG(H.m(b,{func:1,ret:-1,args:[P.G]}),1))},
cW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdR:1,
"%":"DOMWindow|Window"},
iQ:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.aT(H.cK(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.N(P.bt("Future already completed"))
z.ao(a)}},
dU:{"^":"u;",$isdU:1,"%":"Attr"},
nf:{"^":"kk;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isap")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$isl:1,
$asl:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"CSSRuleList"},
ng:{"^":"h_;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aj(b,"$isY",[P.G],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nh:{"^":"km;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isar")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isl:1,
$asl:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"GamepadList"},
nm:{"^":"ko;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isu")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nn:{"^":"kq;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isay")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"SpeechRecognitionResultList"},
no:{"^":"ks;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaz")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asp:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"StyleSheetList"},
j_:{"^":"dv;cV:a<",
C:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.J)(z),++v){u=z[v]
b.$2(u,w.W(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.i([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.f(z[w],"$isdU")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asW:function(){return[P.d,P.d]},
$asK:function(){return[P.d,P.d]}},
j8:{"^":"j_;a",
i:function(a,b){return J.cc(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
ja:{"^":"ix;a,b,c,$ti"},
bR:{"^":"ja;a,b,c,$ti"},
jb:{"^":"iy;a,b,c,d,e,$ti",p:{
aD:function(a,b,c,d,e){var z=W.ei(new W.jc(c),W.ah)
if(z!=null&&!0)J.eT(a,b,z,!1)
return new W.jb(0,a,b,z,!1,[e])}}},
jc:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isah"))}},
bv:{"^":"b;a",
cM:function(a){var z,y
z=$.cN()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.V[y],W.kS())
for(y=0;y<12;++y)z.h(0,C.v[y],W.kT())}},
U:function(a){return $.eM().u(0,W.b1(a))},
O:function(a,b,c){var z,y,x
z=W.b1(a)
y=$.cN()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bX(x.$4(a,b,c,this))},
$isab:1,
p:{
dY:function(a){var z,y
z=document.createElement("a")
y=new W.jU(z,window.location)
y=new W.bv(y)
y.cM(a)
return y},
nk:[function(a,b,c,d){H.f(a,"$isV")
H.t(b)
H.t(c)
H.f(d,"$isbv")
return!0},"$4","kS",16,0,11],
nl:[function(a,b,c,d){var z,y,x
H.f(a,"$isV")
H.t(b)
H.t(c)
z=H.f(d,"$isbv").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kT",16,0,11]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dg(a,this.gj(a),-1,[H.bf(this,a,"q",0)])}},
dy:{"^":"b;a",
U:function(a){return C.a.bo(this.a,new W.hY(a))},
O:function(a,b,c){return C.a.bo(this.a,new W.hX(a,b,c))},
$isab:1},
hY:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isab").U(this.a)}},
hX:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isab").O(this.a,this.b,this.c)}},
jV:{"^":"b;",
cN:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aE(0,new W.jW())
y=b.aE(0,new W.jX())
this.b.H(0,z)
x=this.c
x.H(0,C.X)
x.H(0,y)},
U:function(a){return this.a.u(0,W.b1(a))},
O:["cu",function(a,b,c){var z,y
z=W.b1(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.df(c)
else if(y.u(0,"*::"+b))return this.d.df(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isab:1},
jW:{"^":"n:10;",
$1:function(a){return!C.a.u(C.v,H.t(a))}},
jX:{"^":"n:10;",
$1:function(a){return C.a.u(C.v,H.t(a))}},
k6:{"^":"jV;e,a,b,c,d",
O:function(a,b,c){if(this.cu(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cc(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
e8:function(){var z,y,x,w,v
z=P.d
y=P.cs(C.u,z)
x=H.o(C.u,0)
w=H.m(new W.k7(),{func:1,ret:z,args:[x]})
v=H.i(["TEMPLATE"],[z])
y=new W.k6(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cN(null,new H.hH(C.u,w,[x,z]),v,null)
return y}}},
k7:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
k4:{"^":"b;",
U:function(a){var z=J.B(a)
if(!!z.$isdE)return!1
z=!!z.$isI
if(z&&W.b1(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.h.co(b,"on"))return!1
return this.U(a)},
$isab:1},
dg:{"^":"b;a,b,c,0d,$ti",
sbd:function(a){this.d=H.y(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbd(J.bi(this.a,z))
this.c=z
return!0}this.sbd(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb2:1},
j2:{"^":"b;a",$isL:1,$isdR:1,p:{
j3:function(a){if(a===window)return H.f(a,"$isdR")
else return new W.j2(a)}}},
ab:{"^":"b;"},
jU:{"^":"b;a,b",$isn3:1},
eb:{"^":"b;a",
aN:function(a){new W.kh(this).$2(a,null)},
a0:function(a,b){if(b==null)J.cV(a)
else J.bA(b,a)},
d8:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fd(a)
x=J.cc(y.gcV(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bj(a)}catch(t){H.a3(t)}try{u=W.b1(a)
this.d7(H.f(a,"$isV"),b,z,v,u,H.f(y,"$isK"),H.t(x))}catch(t){if(H.a3(t) instanceof P.ao)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.U(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.i(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.O(a,J.fq(v),w.W(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.W(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.W(z,v)
w.d2(z,v)}}if(!!J.B(a).$isdJ)this.aN(a.content)},
$ismk:1},
kh:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d8(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fe(z)}catch(w){H.a3(w)
v=H.f(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isu")}}},
j1:{"^":"h+fS;"},
j4:{"^":"h+p;"},
j5:{"^":"j4+q;"},
j6:{"^":"h+p;"},
j7:{"^":"j6+q;"},
je:{"^":"h+p;"},
jf:{"^":"je+q;"},
ju:{"^":"h+p;"},
jv:{"^":"ju+q;"},
jD:{"^":"h+W;"},
jE:{"^":"h+W;"},
jF:{"^":"h+p;"},
jG:{"^":"jF+q;"},
jH:{"^":"h+p;"},
jI:{"^":"jH+q;"},
jL:{"^":"h+p;"},
jM:{"^":"jL+q;"},
jS:{"^":"h+W;"},
e5:{"^":"L+p;"},
e6:{"^":"e5+q;"},
jY:{"^":"h+p;"},
jZ:{"^":"jY+q;"},
k1:{"^":"h+W;"},
k8:{"^":"h+p;"},
k9:{"^":"k8+q;"},
e9:{"^":"L+p;"},
ea:{"^":"e9+q;"},
kd:{"^":"h+p;"},
ke:{"^":"kd+q;"},
kj:{"^":"h+p;"},
kk:{"^":"kj+q;"},
kl:{"^":"h+p;"},
km:{"^":"kl+q;"},
kn:{"^":"h+p;"},
ko:{"^":"kn+q;"},
kp:{"^":"h+p;"},
kq:{"^":"kp+q;"},
kr:{"^":"h+p;"},
ks:{"^":"kr+q;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.R(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=H.t(y[w])
z.h(0,v,a[v])}return z},
kF:function(a,b){var z={}
a.C(0,new P.kG(z))
return z},
kH:function(a){var z,y
z=new P.Q(0,$.E,[null])
y=new P.dT(z,[null])
a.then(H.aG(new P.kI(y),1))["catch"](H.aG(new P.kJ(y),1))
return z},
da:function(){var z=$.d9
if(z==null){z=J.c8(window.navigator.userAgent,"Opera",0)
$.d9=z}return z},
fX:function(){var z,y
z=$.d6
if(z!=null)return z
y=$.d7
if(y==null){y=J.c8(window.navigator.userAgent,"Firefox",0)
$.d7=y}if(y)z="-moz-"
else{y=$.d8
if(y==null){y=!P.da()&&J.c8(window.navigator.userAgent,"Trident/",0)
$.d8=y}if(y)z="-ms-"
else z=P.da()?"-o-":"-webkit-"}$.d6=z
return z},
iR:{"^":"b;",
bQ:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aD:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.N(P.fC("DateTime is outside valid range: "+y))
return new P.b_(y,!0)}if(a instanceof RegExp)throw H.c(P.cy("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kH(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bQ(a)
x=this.b
if(v>=x.length)return H.j(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hB()
z.a=u
C.a.h(x,v,u)
this.dF(a,new P.iT(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bQ(t)
x=this.b
if(v>=x.length)return H.j(x,v)
u=x[v]
if(u!=null)return u
s=J.aU(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.bZ(u),q=0;q<r;++q)x.h(u,q,this.aD(s.i(t,q)))
return u}return a}},
iT:{"^":"n:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aD(b)
J.eR(z,a,y)
return y}},
kG:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
iS:{"^":"iR;a,b,c",
dF:function(a,b){var z,y,x,w
H.m(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kI:{"^":"n:12;a",
$1:function(a){return this.a.bC(0,a)}},
kJ:{"^":"n:12;a",
$1:function(a){return this.a.dq(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b6:{"^":"b;V:a>,P:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aj(b,"$isb6",[P.G],null)&&this.a==J.bF(b)&&this.b==b.gP(b)},
gv:function(a){var z,y,x
z=J.an(this.a)
y=J.an(this.b)
y=P.dZ(P.dZ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jN:{"^":"b;"},
Y:{"^":"jN;$ti"}}],["","",,P,{"^":"",fB:{"^":"h;",$isfB:1,"%":"SVGAnimatedLength"},lC:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lD:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lE:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lF:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lG:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lH:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lI:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lJ:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lK:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lL:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lM:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lN:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lO:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lP:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lQ:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lR:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lU:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lV:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},he:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},m2:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},b4:{"^":"h;",$isb4:1,"%":"SVGLength"},m7:{"^":"jx;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.f(c,"$isb4")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b4]},
$isl:1,
$asl:function(){return[P.b4]},
$isa:1,
$asa:function(){return[P.b4]},
$asq:function(){return[P.b4]},
"%":"SVGLengthList"},m8:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b5:{"^":"h;",$isb5:1,"%":"SVGNumber"},ml:{"^":"jK;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.f(c,"$isb5")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b5]},
$isl:1,
$asl:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asq:function(){return[P.b5]},
"%":"SVGNumberList"},mq:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},ms:{"^":"h;0j:length=","%":"SVGPointList"},mu:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mv:{"^":"he;0n:height=,0m:width=","%":"SVGRectElement"},dE:{"^":"I;",$isdE:1,"%":"SVGScriptElement"},mH:{"^":"k3;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.t(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"V;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.i([],[W.ab])
C.a.l(z,W.dY(null))
C.a.l(z,W.e8())
C.a.l(z,new W.k4())
c=new W.eb(new W.dy(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).du(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga6(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mI:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},b9:{"^":"h;",$isb9:1,"%":"SVGTransform"},mS:{"^":"kg;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.f(c,"$isb9")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b9]},
$isl:1,
$asl:function(){return[P.b9]},
$isa:1,
$asa:function(){return[P.b9]},
$asq:function(){return[P.b9]},
"%":"SVGTransformList"},n5:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},jw:{"^":"h+p;"},jx:{"^":"jw+q;"},jJ:{"^":"h+p;"},jK:{"^":"jJ+q;"},k2:{"^":"h+p;"},k3:{"^":"k2+q;"},kf:{"^":"h+p;"},kg:{"^":"kf+q;"}}],["","",,P,{"^":"",ai:{"^":"b;",$isl:1,
$asl:function(){return[P.al]},
$isa:1,
$asa:function(){return[P.al]},
$isiG:1}}],["","",,P,{"^":"",lj:{"^":"h;0j:length=","%":"AudioBuffer"},lk:{"^":"j0;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.i([],[P.d])
this.C(a,new P.fE(z))
return z},
gj:function(a){return a.size},
$asW:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"AudioParamMap"},fE:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},ll:{"^":"L;0j:length=","%":"AudioTrackList"},fF:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mn:{"^":"fF;0j:length=","%":"OfflineAudioContext"},j0:{"^":"h+W;"}}],["","",,P,{"^":"",fH:{"^":"h;",$isfH:1,"%":"WebGLBuffer"},ha:{"^":"h;",$isha:1,"%":"WebGLFramebuffer"},ic:{"^":"h;",$isic:1,"%":"WebGLProgram"},mw:{"^":"h;",
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b){return a.checkFramebufferStatus(b)},
by:function(a,b){return a.clear(b)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bB:function(a,b){return a.compileShader(b)},
bD:function(a){return a.createBuffer()},
bE:function(a){return a.createFramebuffer()},
bF:function(a){return a.createProgram()},
bG:function(a,b){return a.createShader(b)},
bH:function(a){return a.createTexture()},
bJ:function(a,b){return a.depthMask(b)},
bK:function(a,b){return a.disable(b)},
bL:function(a,b,c,d){return a.drawArrays(b,c,d)},
bM:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bN:function(a,b){return a.enable(b)},
bO:function(a,b){return a.enableVertexAttribArray(b)},
bR:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ag:function(a){return P.a2(a.getContextAttributes())},
aF:function(a){return a.getError()},
aG:function(a,b){return a.getProgramInfoLog(b)},
aH:function(a,b,c){return a.getProgramParameter(b,c)},
aJ:function(a,b){return a.getShaderInfoLog(b)},
aK:function(a,b,c){return a.getShaderParameter(b,c)},
aL:function(a,b,c){return a.getUniformLocation(b,c)},
bT:function(a,b){return a.linkProgram(b)},
aO:function(a,b,c){return a.shaderSource(b,c)},
aP:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bY:function(a,b,c,d){return a.texParameterf(b,c,d)},
bZ:function(a,b,c,d){return a.texParameteri(b,c,d)},
c0:function(a,b,c){return a.uniform1f(b,c)},
c1:function(a,b,c){return a.uniform1fv(b,c)},
c2:function(a,b,c){return a.uniform1i(b,c)},
c3:function(a,b,c){return a.uniform1iv(b,c)},
c4:function(a,b,c){return a.uniform2fv(b,c)},
c5:function(a,b,c){return a.uniform3fv(b,c)},
c6:function(a,b,c){return a.uniform4fv(b,c)},
c7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c9:function(a,b){return a.useProgram(b)},
ca:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cc:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mx:{"^":"h;",
di:function(a,b){return a.beginTransformFeedback(b)},
dl:function(a,b){return a.bindVertexArray(b)},
dw:function(a){return a.createVertexArray()},
dA:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dB:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dD:function(a){return a.endTransformFeedback()},
dV:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dY:function(a,b,c,d){this.dc(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
dc:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e_:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b){return a.checkFramebufferStatus(b)},
by:function(a,b){return a.clear(b)},
bz:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bB:function(a,b){return a.compileShader(b)},
bD:function(a){return a.createBuffer()},
bE:function(a){return a.createFramebuffer()},
bF:function(a){return a.createProgram()},
bG:function(a,b){return a.createShader(b)},
bH:function(a){return a.createTexture()},
bJ:function(a,b){return a.depthMask(b)},
bK:function(a,b){return a.disable(b)},
bL:function(a,b,c,d){return a.drawArrays(b,c,d)},
bM:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bN:function(a,b){return a.enable(b)},
bO:function(a,b){return a.enableVertexAttribArray(b)},
bR:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ag:function(a){return P.a2(a.getContextAttributes())},
aF:function(a){return a.getError()},
aG:function(a,b){return a.getProgramInfoLog(b)},
aH:function(a,b,c){return a.getProgramParameter(b,c)},
aJ:function(a,b){return a.getShaderInfoLog(b)},
aK:function(a,b,c){return a.getShaderParameter(b,c)},
aL:function(a,b,c){return a.getUniformLocation(b,c)},
bT:function(a,b){return a.linkProgram(b)},
aO:function(a,b,c){return a.shaderSource(b,c)},
aP:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bY:function(a,b,c,d){return a.texParameterf(b,c,d)},
bZ:function(a,b,c,d){return a.texParameteri(b,c,d)},
c0:function(a,b,c){return a.uniform1f(b,c)},
c1:function(a,b,c){return a.uniform1fv(b,c)},
c2:function(a,b,c){return a.uniform1i(b,c)},
c3:function(a,b,c){return a.uniform1iv(b,c)},
c4:function(a,b,c){return a.uniform2fv(b,c)},
c5:function(a,b,c){return a.uniform3fv(b,c)},
c6:function(a,b,c){return a.uniform4fv(b,c)},
c7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c9:function(a,b){return a.useProgram(b)},
ca:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cc:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},io:{"^":"h;",$isio:1,"%":"WebGLShader"},iC:{"^":"h;",$isiC:1,"%":"WebGLTexture"},iI:{"^":"h;",$isiI:1,"%":"WebGLUniformLocation"},iN:{"^":"h;",$isiN:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mE:{"^":"k0;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a2(this.d_(a,b))},
h:function(a,b,c){H.r(b)
H.f(c,"$isK")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
d_:function(a,b){return a.item(b)},
$asp:function(){return[[P.K,,,]]},
$isl:1,
$asl:function(){return[[P.K,,,]]},
$isa:1,
$asa:function(){return[[P.K,,,]]},
$asq:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},k_:{"^":"h+p;"},k0:{"^":"k_+q;"}}],["","",,G,{"^":"",
iU:function(a){var z,y,x,w
z=H.i(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a2(z,"\n")},
dV:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bG(a,b)
z.aO(a,y,c)
z.bB(a,y)
x=H.bX(z.aK(a,y,35713))
if(x!=null&&!x){w=z.aJ(a,y)
P.aJ("E:Compilation failed:")
P.aJ("E:"+G.iU(c))
P.aJ("E:Failure:")
P.aJ(C.h.F("E:",w))
throw H.c(w)}return y},
dh:function(a,b){var z,y,x
H.w(a,"$isa",[T.A],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bF(a[y]))
if(y>=a.length)return H.j(a,y)
C.b.h(b,z+1,J.cb(a[y]))
z+=2
if(y>=a.length)return H.j(a,y)
x=J.cT(a[y])
if(z>=b.length)return H.j(b,z)
b[z]=x}return b},
h7:function(a,b){var z,y
H.w(a,"$isa",[T.P],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bF(a[y]))
if(y>=a.length)return H.j(a,y)
C.b.h(b,z+1,J.cb(a[y]))}return b},
h8:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.aN],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bF(a[y]))
if(y>=a.length)return H.j(a,y)
C.b.h(b,z+1,J.cb(a[y]))
x=z+2
if(y>=a.length)return H.j(a,y)
w=J.cT(a[y])
v=b.length
if(x>=v)return H.j(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.j(a,y)
w=J.fg(a[y])
if(z>=v)return H.j(b,z)
b[z]=w}return b},
h6:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.h(b,z,J.bi(a[y],0))
if(y>=a.length)return H.j(a,y)
C.o.h(b,z+1,J.bi(a[y],1))
if(y>=a.length)return H.j(a,y)
C.o.h(b,z+2,J.bi(a[y],2))
if(y>=a.length)return H.j(a,y)
C.o.h(b,z+3,J.bi(a[y],3))}return b},
js:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.as(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.D]],v=[P.al],u=[T.aN],t=[T.A],s=[T.P];y.t();){r=y.d
if(!x.ac(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.en>0)H.aW("I: "+r)
continue}q=z.i(0,r)
switch($.a8().i(0,r).a){case"vec2":b.Z(r,G.h7(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Z(r,G.dh(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Z(r,G.h8(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Z(r,new Float32Array(H.bU(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Z(r,G.h6(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
dk:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.R(x,P.b)
v=J.f3(z.a)
u=new G.hK(z,v,4,w,y,0,-1,P.R(x,P.ai),"meshdata:"+a,!1,!0)
x=G.dh(c.d,null)
w.h(0,"aPosition",J.c9(z.a))
u.ch=x
u.aX("aPosition",x,3)
t=$.a8().i(0,"aPosition")
if(t==null)H.N("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bC(z.a,v)
z.bP(0,s,0)
z.cb(0,w.i(0,"aPosition"),s,t.aY(),5126,!1,0,0)
y=H.w(c.cB(),"$isa",[P.D],"$asa")
u.y=J.c9(z.a)
x=u.ch.length
if(x<768){u.sar(new Uint8Array(H.bU(y)))
u.Q=5121}else if(x<196608){u.sar(new Uint16Array(H.bU(y)))
u.Q=5123}else{u.sar(new Uint32Array(H.bU(y)))
u.Q=5125}J.bC(z.a,v)
y=u.y
x=u.cx
J.c6(z.a,34963,y)
J.cR(z.a,34963,x,35048)
G.js(c,u)
return u},
bM:{"^":"b;"},
bu:{"^":"bM;d,a,b,c",
aZ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.i(["{"+new H.dN(H.kP(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.as(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a2(z,"\n")}},
fI:{"^":"is;"},
fK:{"^":"b;0a,b",
bP:function(a,b,c){J.fa(this.a,b)
if(c>0)J.fx(this.a,b,c)},
cb:function(a,b,c,d,e,f,g,h){J.c6(this.a,34962,b)
J.fy(this.a,c,d,e,!1,g,h)}},
di:{"^":"b;a,b,c,d,e",
aR:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.c7(z.a,36160,y)
J.fz(z.a,b,c,d,e)
if(a!==0)J.eY(z.a,a)}},
ck:{"^":"b;a,b,c"},
cl:{"^":"b;a,b,c,d"},
dj:{"^":"b;a,b,c,d,e",
a7:function(a){switch($.a8().i(0,a).a){case"vec2":this.e.h(0,a,H.i([],[T.P]))
break
case"vec3":this.e.h(0,a,H.i([],[T.A]))
break
case"vec4":this.e.h(0,a,H.i([],[T.aN]))
break
case"float":this.e.h(0,a,H.i([],[P.al]))
break
case"uvec4":this.e.h(0,a,H.i([],[[P.a,P.D]]))
break}},
cw:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.A],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.ck(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.J)(a),++w){v=a[w]
u=new T.A(new Float32Array(3))
u.N(v)
C.a.l(z,u)}},
aT:function(a,b){var z,y,x,w,v,u,t
z=[T.P]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.P(u))}},
aU:function(a,b){var z,y,x,w,v,u
z=[T.A]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new T.A(new Float32Array(3))
u.N(v)
x.l(y,u)}},
aW:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.A],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.cl(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.J)(a),++w){v=a[w]
u=new T.A(new Float32Array(3))
u.N(v)
C.a.l(z,u)}},
cB:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.i(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.J)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
k:function(a){var z,y,x,w,v
z=H.i(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.as(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a8().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a2(z," ")}},
dL:{"^":"b;a,b,c"},
dK:{"^":"b;a,b,c"},
hI:{"^":"bu;d,a,b,c"},
hK:{"^":"bM;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sar:function(a){this.cx=H.w(a,"$isa",[P.D],"$asa")},
aX:function(a,b,c){var z,y
C.h.a_(a,0)
H.f(b,"$isai")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c6(z.a,34962,y)
J.cR(z.a,34962,b,35048)},
cC:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Z:function(a,b,c){var z,y,x,w,v
z=J.cO(a,0)===105
if(z&&this.z===0)this.z=C.f.cv(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c9(x.a))
this.aX(a,b,c)
w=$.a8().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bC(x.a,this.e)
x.bP(0,v,z?1:0)
x.cb(0,y.i(0,a),v,w.aY(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.i(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.as(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a2(y,"  ")}},
i0:{"^":"bu;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cz:function(a,b){var z
if(typeof a!=="number")return a.e0()
if(typeof b!=="number")return H.ae(b)
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
aZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.A(new Float32Array(3))
u.J(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.N(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.B(t)
y=!!z.$isaN
q=y?t.gcd(t):1
if(!!z.$isA){p=t.gV(t)
s=t.gP(t)
r=t.gaf(t)
t=p}else if(y){p=t.gV(t)
s=t.gP(t)
r=t.gaf(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.ae(t)
y=u[4]
if(typeof s!=="number")return H.ae(s)
x=u[8]
if(typeof r!=="number")return H.ae(r)
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
d.N(this.db)
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
v.h(0,"uPerspectiveViewMatrix",d)
return v}},
lA:{"^":"b;"},
ih:{"^":"bM;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cF:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cU(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cU(w.a,v,t))}},
cI:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.i([],[P.d])
x=H.i([],[P.d])
for(y=new H.as(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ac(0,w))C.a.l(x,w)}for(z=this.x,z=P.jz(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isK",[P.d,P.b],"$asK")
z=Date.now()
for(y=new H.as(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cO(t,0)){case 117:if(w.ac(0,t)){s=b.i(0,t)
if(v.ac(0,t))H.aW("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.h(0,t,a)
r=$.a8().i(0,t)
if(r==null)H.N("unknown "+t)
q=w.i(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.r(s)
J.cd(x.a,q,s)}else if(!!J.B(s).$ishl)J.fv(x.a,q,s)
break
case"float":if(r.c===0){H.em(s)
J.ft(x.a,q,s)}else if(!!J.B(s).$isai)J.fu(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.af(s,"$isaM").a
J.d_(x.a,q,!1,t)}else if(!!J.B(s).$isai)J.d_(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=C.N.ge1(H.af(s,"$ism9"))
J.cZ(x.a,q,!1,t)}else if(!!J.B(s).$isai)J.cZ(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cY(p,q,H.af(s,"$isaN").a)
else J.cY(p,q,H.f(s,"$isai"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cX(p,q,H.af(s,"$isA").a)
else J.cX(p,q,H.f(s,"$isai"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cW(p,q,H.af(s,"$isP").a)
else J.cW(p,q,H.f(s,"$isai"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.ae(t)
J.cP(x.a,33984+t)
t=H.af(s,"$iscx").b
J.bB(x.a,3553,t)
t=this.ch
J.cd(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.ae(t)
J.cP(x.a,33984+t)
t=H.af(s,"$iscx").b
J.bB(x.a,34067,t)
t=this.ch
J.cd(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
default:H.aW("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.i(0,t)
switch(t){case"cDepthTest":t=J.U(s,!0)
p=x.a
if(t)J.bD(p,2929)
else J.ca(p,2929)
break
case"cStencilFunc":H.af(s,"$isdL")
t=s.a
p=x.a
if(t===1281)J.ca(p,2960)
else{J.bD(p,2960)
p=s.b
o=s.c
J.fn(x.a,t,p,o)}break
case"cDepthWrite":H.bX(s)
J.f4(x.a,s)
break
case"cBlendEquation":H.af(s,"$isdK")
t=s.a
p=x.a
if(t===1281)J.ca(p,3042)
else{J.bD(p,3042)
p=s.b
o=s.c
J.eW(x.a,p,o)
J.eV(x.a,t)}break}++u
break}}n=P.db(0,0,0,Date.now()-new P.b_(z,!1).a,0,0)
""+u
n.k(0)},
cA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bu],"$asa")
Date.now()
z=this.d
J.fw(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b5()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.J)(b),++x){w=b[x]
this.cL(w.a,w.aZ())}y=this.Q
y.a1(0)
for(v=a.cy,v=new H.as(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cI()
if(u.length!==0)P.aJ("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bC(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cC()
s=a.Q
r=a.z
if(t)J.eU(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.f8(q,v,y,s,0,r)
else J.f7(q,v,y,s,0)}else{s=z.a
if(r>1)J.f6(s,v,0,y,r)
else J.f5(s,v,0,y)}if(t)J.fb(z.a)},
ak:function(a,b){return this.cA(a,b,null)},
p:{
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.f1(b.a)
t=G.dV(b.a,35633,x)
J.cQ(b.a,u,t)
s=G.dV(b.a,35632,w)
J.cQ(b.a,u,s)
if(v.length>0)J.fr(b.a,u,v,35980)
J.fl(b.a,u)
if(!H.bX(J.fk(b.a,u,35714)))H.N(J.fj(b.a,u))
z=new G.ih(b,c,d,u,P.cs(c.c,z),P.R(z,P.b),P.R(z,z),y,a,!1,!0)
z.cF(a,b,c,d)
return z}}},
F:{"^":"b;a,b,c",
aY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
cu:{"^":"b;a,0b,c,d,e,f,r,x",
aS:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.J)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.ah(y)},
aj:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x)C.a.l(y,a[x])
C.a.ah(y)},
aV:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ah(z)},
cG:function(a,b){this.b=this.al(!0,H.w(a,"$isa",[P.d],"$asa"),b)},
b_:function(a){return this.cG(a,null)},
al:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){t=y[u]
s=$.a8().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a2(w,"\n")},
p:{
dF:function(a){var z,y
z=P.d
y=[z]
return new G.cu(a,H.i([],y),H.i([],y),H.i([],y),H.i([],y),0,P.R(z,P.D))}}},
is:{"^":"bM;"},
iD:{"^":"b;a,b,c,d,e,f,r"},
cx:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iH:{"^":"cx;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dO:function(a,b,c,d,e,f){var z,y
z=J.f2(a.a)
J.bB(a.a,3553,z)
J.fp(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.fo(a.a,3553,34046,y)
y=f.r
J.bG(a.a,3553,10240,y)
y=f.f
J.bG(a.a,3553,10241,y)
if(f.b){J.bG(a.a,3553,10242,33071)
J.bG(a.a,3553,10243,33071)}f.c
J.fi(a.a)
J.bB(a.a,3553,null)
return new G.iH(c,d,e,b,z,3553,a,f)}}}}],["","",,Y,{"^":"",
hj:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.A]
y=P.d
x=new G.dj(!1,H.i([],[G.ck]),H.i([],[G.cl]),H.i([],z),P.R(y,[P.a,,]))
x.a7("aTexUV")
x.a7("aNormal")
w=P.R(y,P.D)
v=a2.split("\n")
u=H.i([],z)
t=H.i([],z)
y=[T.P]
s=H.i([],y)
r=Date.now()
q=P.dC("\\s+",!0,!1)
p=P.dC("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.J)(v),++n){m=v[n]
m.toString
l=H.lb(m,q," ")
k=H.ld(l,p,"",0)
l=k.length
if(l!==0){if(0>=l)return H.j(k,0)
l=k[0]==="#"}else l=!0
if(l)continue
j=k.split(" ")
l=j.length
if(0>=l)return H.j(j,0)
i=j[0]
if(J.U(i,"g")){if(1>=l)return H.j(j,1)
w.h(0,j[1],u.length)}else if(J.U(i,"v")){if(1>=l)return H.j(j,1)
i=P.aH(j[1],null)
if(2>=l)return H.j(j,2)
h=P.aH(j[2],null)
if(3>=l)return H.j(j,3)
l=P.aH(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(u,new T.A(g))}else if(J.U(i,"vt")){if(1>=l)return H.j(j,1)
i=P.aH(j[1],null)
if(2>=l)return H.j(j,2)
l=P.aH(j[2],null)
h=new Float32Array(2)
C.b.h(h,0,i)
C.b.h(h,1,l)
C.a.l(s,new T.P(h))}else if(J.U(i,"vn")){if(1>=l)return H.j(j,1)
i=P.aH(j[1],null)
if(2>=l)return H.j(j,2)
h=P.aH(j[2],null)
if(3>=l)return H.j(j,3)
l=P.aH(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(t,new T.A(g))}else if(J.U(i,"f")){if(l!==4&&l!==5){H.aW("*** Error: face '"+k+"' not handled")
continue}f=H.i([],z)
e=H.i([],z)
d=H.i([],y)
for(c=1;l=j.length,c<l;++c){b=J.fm(j[c],"/")
for(;b.length<3;)C.a.l(b,"")
l=P.cI(b[0],null,null)
if(typeof l!=="number")return l.Y()
a=l-1
if(1>=b.length)return H.j(b,1)
if(J.U(b[1],""))a0=-1
else{if(1>=b.length)return H.j(b,1)
l=P.cI(b[1],null,null)
if(typeof l!=="number")return l.Y()
a0=l-1}if(2>=b.length)return H.j(b,2)
if(J.U(b[2],""))a1=-1
else{if(2>=b.length)return H.j(b,2)
l=P.cI(b[2],null,null)
if(typeof l!=="number")return l.Y()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.j(u,a)
C.a.l(f,u[a])}else C.a.l(f,new T.A(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.j(s,a0)
C.a.l(d,s[a0])}else{H.aW("problem uv "+c+" "+a0)
C.a.l(d,new T.P(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.j(t,a1)
C.a.l(e,t[a1])}else{H.aW("problem normals "+c+" "+a1)
C.a.l(e,new T.A(new Float32Array(3)))}}if(l===4)x.cw(f)
else x.aW(f)
x.aU("aNormal",e)
x.aT("aTexUV",d)}}P.aJ("loaded ("+P.db(0,0,0,Date.now()-new P.b_(r,!1).a,0,0).k(0)+") "+x.k(0))
return x}}],["","",,R,{"^":"",
jB:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.j9("span",null),"$isV")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).an(y,"float")
y.setProperty(x,"left","")
x=C.y.an(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.E(z,v)}return z},
iu:{"^":"b;",
cH:function(a,b,c){var z,y
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
y.E(z,this.b)
y.E(z,this.d)
y.E(z,this.c)}},
iv:{"^":"iu;e,f,a,b,c,d",
cK:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dX(y,2)+" fps"
C.r.ck(this.c,b)
x=C.f.T(30*C.A.dm(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isV")
v=w.style
u=""+x+"px"
v.height=u
C.r.E(z,w)},
cJ:function(a){return this.cK(a,"")}}}],["","",,V,{"^":""}],["","",,D,{"^":"",
hD:function(a){var z,y,x,w
z=P.d
y=new P.Q(0,$.E,[z])
x=new XMLHttpRequest()
C.z.dO(x,"GET",a)
w=W.br
W.aD(x,"loadend",H.m(new D.hE(new P.dT(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.cj(x,"")
return y},
hE:{"^":"n:24;a,b",
$1:function(a){H.f(a,"$isbr")
this.a.bC(0,H.aT(W.kt(this.b.response),{futureOr:1,type:P.d}))}},
hv:{"^":"b;a,b,c",
cD:function(a){var z,y
a=document
z=W.b3
y={func:1,ret:-1,args:[z]}
W.aD(a,"keydown",H.m(new D.hx(this),y),!1,z)
W.aD(a,"keyup",H.m(new D.hy(this),y),!1,z)},
p:{
hw:function(a){var z=P.D
z=new D.hv(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cD(a)
return z}}},
hx:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isb3")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hy:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isb3")
z=this.a
z.a.bW(0,a.which)
z.c.l(0,a.which)}},
hN:{"^":"b;a,b,c,d,e,f,r,x",
cE:function(a){var z,y
z=C.j.gdL(a)
y=H.o(z,0)
W.aD(z.a,z.b,H.m(new D.hP(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdK(a)
z=H.o(y,0)
W.aD(y.a,y.b,H.m(new D.hQ(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.j.gdM(a)
y=H.o(z,0)
W.aD(z.a,z.b,H.m(new D.hR(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdN(a)
z=H.o(y,0)
W.aD(y.a,y.b,H.m(new D.hS(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
hO:function(a){var z=P.D
z=new D.hN(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cE(a)
return z}}},
hP:{"^":"n:4;a",
$1:function(a){var z,y
H.f(a,"$isa5")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.r(y.gbU(a).a)
z.x=H.r(y.gbU(a).b)
z.d=a.movementX
z.e=a.movementY}},
hQ:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isa5")
a.preventDefault()
P.aJ("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hR:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isa5")
a.preventDefault()
z=this.a
z.a.bW(0,a.button)
z.c.l(0,a.button)}},
hS:{"^":"n:26;a",
$1:function(a){H.f(a,"$isbb")
a.preventDefault()
this.a.f=H.r(C.ae.gdz(a))}},
i_:{"^":"fI;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c2:function(a){var z,y
z=C.b.dE(H.w(a,"$isl",[P.b],"$asl"),0,new A.kR(),P.D)
if(typeof z!=="number")return H.ae(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kR:{"^":"n:27;",
$2:function(a,b){var z,y
H.r(a)
z=J.an(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aM:{"^":"b;a",
N:function(a){var z,y
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
k:function(a){return"[0] "+this.a3(0).k(0)+"\n[1] "+this.a3(1).k(0)+"\n[2] "+this.a3(2).k(0)+"\n[3] "+this.a3(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.j(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aM){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.c2(this.a)},
a3:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.j(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.j(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.j(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.j(y,x)
z[3]=y[x]
return new T.aN(z)},
a5:function(){var z=this.a
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
z[15]=1}},P:{"^":"b;a",
X:function(a,b){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.c2(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.j(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gV:function(a){return this.a[0]},
gP:function(a){return this.a[1]}},A:{"^":"b;a",
J:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
N:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.c2(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbS:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aA:function(a){var z,y,x
z=Math.sqrt(this.gbS())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ay:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bI:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.A(new Float32Array(3))
z.J(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gV:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
gaf:function(a){return this.a[2]},
p:{
iM:function(a,b,c){var z=new T.A(new Float32Array(3))
z.J(a,b,c)
return z}}},aN:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aN){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.c2(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.j(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gV:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
gaf:function(a){return this.a[2]},
gcd:function(a){return this.a[3]}}}],["","",,B,{"^":"",
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z={}
y=document
x=C.n.cg(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iv(0,0,x,w,y.createElement("div"),R.jB("blue","gray",90,30))
u.cH(x,"blue","gray")
t=H.f(C.n.bV(y,"#webgl-canvas"),"$iscg")
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
q=new G.fK(t)
y=P.d
x=P.b
v=(t&&C.j).cf(t,"webgl2",P.dt(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
q.a=v
if(v==null)H.N(P.df('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.e(J.fh(v))
if($.en>0)P.aJ("I: "+p)
J.eZ(v,0,0,0,1)
J.bD(v,2929)
v=new Float32Array(3)
p=D.hw(null)
o=D.hO(t)
n=new T.aM(new Float32Array(16))
n.a5()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
j=new D.i_(15,-45,0.3,0,new T.A(v),-0.02,p,o,n,new T.A(m),new T.A(l),new T.A(k),new T.A(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aM(new Float32Array(16))
v.a5()
p=new T.aM(new Float32Array(16))
p.a5()
i=new G.i0(j,50,1,0.1,2520,v,p,new T.aM(new Float32Array(16)),P.R(y,x),"perspective",!1,!0)
i.b0()
i.cz(s,r)
v=$.eB()
p=G.dO(q,"frame::color",s,r,32856,v)
v=G.dO(q,"frame::depth",s,r,33190,v)
h=new G.di(q,null,p,v,null)
o=J.f0(q.a)
h.b=o
J.c7(q.a,36160,o)
J.cS(q.a,36160,36064,3553,p.b,0)
J.cS(q.a,36160,36096,3553,v.b,0)
g=J.eX(q.a,36160)
if(g!==36053)H.N("Error Incomplete Framebuffer: "+H.e(g))
J.c7(q.a,36160,null)
f=G.dD("solid",q,$.eQ(),$.eP())
o=[y]
n=P.D
m=new G.cu("SSAOV",H.i([],o),H.i([],o),H.i([],o),H.i([],o),0,P.R(y,n))
m.aS(H.i(["aPosition","aTexUV"],o))
m.aV(H.i(["vTexUV"],o))
m.b=m.al(!0,H.w(H.i(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],o),"$isa",o,"$asa"),null)
n=new G.cu("SSAOF",H.i([],o),H.i([],o),H.i([],o),H.i([],o),0,P.R(y,n))
n.aV(H.i(["vTexUV"],o))
n.aj(H.i(["uCanvasSize","uCameraNear","uCameraFar","uTexture","uDepthMap"],o))
n.b=n.al(!1,H.w(H.i([$.jT],o),"$isa",o,"$asa"),null)
e=[m,n]
d=G.dD("ssao",q,e[0],e[1])
n=P.R(y,x)
n.h(0,"uCameraNear",0.1)
n.h(0,"uCameraFar",2529)
if(typeof s!=="number")return H.ae(s)
if(typeof r!=="number")return H.ae(r)
o=new T.P(new Float32Array(2))
o.X(s,r)
n.h(0,"uCanvasSize",o)
n.h(0,"uDepthMap",v)
n.h(0,"uTexture",p)
v=new T.A(new Float32Array(3))
v.J(-1,-1,0)
p=new T.A(new Float32Array(3))
p.J(1,-1,0)
o=new T.A(new Float32Array(3))
o.J(1,1,0)
m=new T.A(new Float32Array(3))
m.J(-1,1,0)
l=[T.A]
c=H.i([v,p,o,m],l)
v=new T.P(new Float32Array(2))
v.X(0,0)
p=new T.P(new Float32Array(2))
p.X(1,0)
o=new T.P(new Float32Array(2))
o.X(1,1)
m=new T.P(new Float32Array(2))
m.X(0,1)
b=H.i([v,p,o,m],[T.P])
a=new T.A(new Float32Array(3))
a.J(0,0,1)
a0=H.i([a,a,a,a],l)
a1=new G.dj(!1,H.i([],[G.ck]),H.i([],[G.cl]),H.i([],l),P.R(y,[P.a,,]))
a1.a7("aTexUV")
a1.aW(c)
a1.aT("aTexUV",b)
a1.a7("aNormal")
a1.aU("aNormal",a0)
a2=G.dk("quad",d,a1)
z.a=null
a3=D.hD("../ct_logo.obj")
a3.ae(new B.l4(z,f),null)
v=$.eN()
C.a.l(v,a3)
y=P.R(y,x)
y.h(0,"cDepthTest",!0)
y.h(0,"cDepthWrite",!0)
y.h(0,"cBlendEquation",$.ew())
y.h(0,"cStencilFunc",$.eA())
y.h(0,"uColor",$.ex())
p=new Float32Array(16)
o=new T.aM(p)
o.a5()
a4=Math.cos(1.5707963267948966)
a5=Math.sin(1.5707963267948966)
m=p[4]
l=p[8]
k=p[5]
a6=p[9]
a7=p[6]
a8=p[10]
a9=p[7]
b0=p[11]
b1=-a5
p[4]=m*a4+l*a5
p[5]=k*a4+a6*a5
p[6]=a7*a4+a8*a5
p[7]=a9*a4+b0*a5
p[8]=m*b1+l*a4
p[9]=k*b1+a6*a4
p[10]=a7*b1+a8*a4
p[11]=a9*b1+b0*a4
y.h(0,"uModelMatrix",o)
z.b=0
P.hb(v,null,!1,x).ae(new B.l5(new B.l3(z,j,h,s,r,f,i,new G.hI(y,"mat",!1,!0),new G.di(q,null,null,null,null),d,a2,new G.bu(n,"plain",!1,!0),u)),null)},
l4:{"^":"n:28;a,b",
$1:function(a){this.a.a=G.dk("",this.b,Y.hj(H.t(a)))}},
l3:{"^":"n:29;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cK(b2)
if(typeof b2!=="number")return b2.Y()
z=this.a
z.b=b2+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aM()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aM()
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
if(typeof v!=="number")return v.aM()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.t.dn(y.id,-1.4707963267948965,1.4707963267948965)
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
m=new T.A(new Float32Array(3))
m.J(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.A(u)
l.N(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
l.aA(0)
k=m.bI(l)
k.aA(0)
j=l.bI(k)
j.aA(0)
t=k.ay(v)
r=j.ay(v)
v=l.ay(v)
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
a=Math.sqrt(h.gbS())
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
y=this.f
x=this.r
w=this.x
v=[G.bu]
if($.eO().checked){u=this.d
t=this.e
this.c.aR(17664,0,0,u,t)
y.ak(z.a,H.i([x,w],v))
this.y.aR(17664,0,0,u,t)
this.z.ak(this.Q,H.i([this.ch],v))}else y.ak(z.a,H.i([x,w],v))
C.af.gdg(window).ae(this,-1)
this.cx.cJ(z.b)}},
l5:{"^":"n:30;a",
$1:function(a){H.bg(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dn.prototype
return J.dm.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dp.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.aU=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.bZ=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.kN=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.kO=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.c_=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.c0=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.ba.prototype
return a}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).B(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kN(a).R(a,b)}
J.bi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aU(a).i(a,b)}
J.eR=function(a,b,c){return J.bZ(a).h(a,b,c)}
J.cO=function(a,b){return J.c_(a).a_(a,b)}
J.bA=function(a,b){return J.k(a).d3(a,b)}
J.eS=function(a,b,c){return J.k(a).d4(a,b,c)}
J.cP=function(a,b){return J.k(a).bn(a,b)}
J.eT=function(a,b,c,d){return J.k(a).dd(a,b,c,d)}
J.cQ=function(a,b,c){return J.k(a).bp(a,b,c)}
J.eU=function(a,b){return J.k(a).di(a,b)}
J.c6=function(a,b,c){return J.k(a).bq(a,b,c)}
J.c7=function(a,b,c){return J.k(a).bs(a,b,c)}
J.bB=function(a,b,c){return J.k(a).bt(a,b,c)}
J.bC=function(a,b){return J.k(a).dl(a,b)}
J.eV=function(a,b){return J.k(a).bu(a,b)}
J.eW=function(a,b,c){return J.k(a).bv(a,b,c)}
J.cR=function(a,b,c,d){return J.k(a).bw(a,b,c,d)}
J.eX=function(a,b){return J.k(a).bx(a,b)}
J.eY=function(a,b){return J.k(a).by(a,b)}
J.eZ=function(a,b,c,d,e){return J.k(a).bz(a,b,c,d,e)}
J.f_=function(a,b){return J.kO(a).K(a,b)}
J.c8=function(a,b,c){return J.aU(a).ds(a,b,c)}
J.c9=function(a){return J.k(a).bD(a)}
J.f0=function(a){return J.k(a).bE(a)}
J.f1=function(a){return J.k(a).bF(a)}
J.f2=function(a){return J.k(a).bH(a)}
J.f3=function(a){return J.k(a).dw(a)}
J.f4=function(a,b){return J.k(a).bJ(a,b)}
J.ca=function(a,b){return J.k(a).bK(a,b)}
J.f5=function(a,b,c,d){return J.k(a).bL(a,b,c,d)}
J.f6=function(a,b,c,d,e){return J.k(a).dA(a,b,c,d,e)}
J.f7=function(a,b,c,d,e){return J.k(a).bM(a,b,c,d,e)}
J.f8=function(a,b,c,d,e,f){return J.k(a).dB(a,b,c,d,e,f)}
J.f9=function(a,b){return J.bZ(a).q(a,b)}
J.bD=function(a,b){return J.k(a).bN(a,b)}
J.fa=function(a,b){return J.k(a).bO(a,b)}
J.fb=function(a){return J.k(a).dD(a)}
J.fc=function(a,b){return J.k(a).C(a,b)}
J.cS=function(a,b,c,d,e,f){return J.k(a).bR(a,b,c,d,e,f)}
J.fd=function(a){return J.k(a).gdh(a)}
J.an=function(a){return J.B(a).gv(a)}
J.bE=function(a){return J.bZ(a).gw(a)}
J.aY=function(a){return J.aU(a).gj(a)}
J.fe=function(a){return J.k(a).gdP(a)}
J.ff=function(a){return J.k(a).gdU(a)}
J.fg=function(a){return J.c0(a).gcd(a)}
J.bF=function(a){return J.c0(a).gV(a)}
J.cb=function(a){return J.c0(a).gP(a)}
J.cT=function(a){return J.c0(a).gaf(a)}
J.cc=function(a,b){return J.k(a).W(a,b)}
J.fh=function(a){return J.k(a).ag(a)}
J.fi=function(a){return J.k(a).aF(a)}
J.fj=function(a,b){return J.k(a).aG(a,b)}
J.fk=function(a,b,c){return J.k(a).aH(a,b,c)}
J.cU=function(a,b,c){return J.k(a).aL(a,b,c)}
J.fl=function(a,b){return J.k(a).bT(a,b)}
J.cV=function(a){return J.k(a).dQ(a)}
J.fm=function(a,b){return J.c_(a).cn(a,b)}
J.fn=function(a,b,c,d){return J.k(a).aP(a,b,c,d)}
J.fo=function(a,b,c,d){return J.k(a).bY(a,b,c,d)}
J.bG=function(a,b,c,d){return J.k(a).bZ(a,b,c,d)}
J.fp=function(a,b,c,d,e,f){return J.k(a).dV(a,b,c,d,e,f)}
J.fq=function(a){return J.c_(a).dW(a)}
J.bj=function(a){return J.B(a).k(a)}
J.fr=function(a,b,c,d){return J.k(a).dY(a,b,c,d)}
J.fs=function(a){return J.c_(a).dZ(a)}
J.ft=function(a,b,c){return J.k(a).c0(a,b,c)}
J.fu=function(a,b,c){return J.k(a).c1(a,b,c)}
J.cd=function(a,b,c){return J.k(a).c2(a,b,c)}
J.fv=function(a,b,c){return J.k(a).c3(a,b,c)}
J.cW=function(a,b,c){return J.k(a).c4(a,b,c)}
J.cX=function(a,b,c){return J.k(a).c5(a,b,c)}
J.cY=function(a,b,c){return J.k(a).c6(a,b,c)}
J.cZ=function(a,b,c,d){return J.k(a).c7(a,b,c,d)}
J.d_=function(a,b,c,d){return J.k(a).c8(a,b,c,d)}
J.fw=function(a,b){return J.k(a).c9(a,b)}
J.fx=function(a,b,c){return J.k(a).e_(a,b,c)}
J.fy=function(a,b,c,d,e,f,g){return J.k(a).ca(a,b,c,d,e,f,g)}
J.fz=function(a,b,c,d,e){return J.k(a).cc(a,b,c,d,e)}
I.aI=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bH.prototype
C.j=W.cg.prototype
C.y=W.fR.prototype
C.r=W.fY.prototype
C.K=W.fZ.prototype
C.L=W.hf.prototype
C.n=W.hg.prototype
C.z=W.hh.prototype
C.M=J.h.prototype
C.a=J.bn.prototype
C.A=J.dm.prototype
C.f=J.dn.prototype
C.N=J.dp.prototype
C.t=J.bo.prototype
C.h=J.bp.prototype
C.U=J.bq.prototype
C.b=H.hT.prototype
C.o=H.hV.prototype
C.w=W.hW.prototype
C.D=J.i1.prototype
C.E=W.id.prototype
C.J=W.iB.prototype
C.x=J.ba.prototype
C.ae=W.bb.prototype
C.af=W.iP.prototype
C.e=new P.jO()
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
C.V=H.i(I.aI(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.i(I.aI(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.i(I.aI([]),[P.z])
C.X=H.i(I.aI([]),[P.d])
C.u=H.i(I.aI(["bind","if","ref","repeat","syntax"]),[P.d])
C.v=H.i(I.aI(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.F("vec3","vertex btangents",0)
C.d=new G.F("vec3","",0)
C.a_=new G.F("vec4","delta from light",0)
C.p=new G.F("","",0)
C.F=new G.F("vec3","vertex coordinates",0)
C.a0=new G.F("vec3","vertex binormals",0)
C.G=new G.F("vec4","for wireframe",0)
C.a1=new G.F("vec4","per vertex color",0)
C.a2=new G.F("float","for normal maps",0)
C.k=new G.F("mat4","",0)
C.a4=new G.F("mat4","",4)
C.a3=new G.F("mat4","",128)
C.c=new G.F("float","",0)
C.a5=new G.F("float","",4)
C.a6=new G.F("float","depth for shadowmaps",0)
C.i=new G.F("sampler2D","",0)
C.a7=new G.F("float","for bump maps",0)
C.a8=new G.F("vec2","texture uvs",0)
C.a9=new G.F("float","time since program start in sec",0)
C.l=new G.F("vec2","",0)
C.aa=new G.F("samplerCube","",0)
C.m=new G.F("vec4","",0)
C.ab=new G.F("vec3","vertex normals",0)
C.ac=new G.F("sampler2DShadow","",0)
C.H=new G.F("vec3","per vertex color",0)
C.I=new G.F("mat3","",0)
C.ad=new G.F("vec3","vertex tangents",0)
$.aa=0
$.aZ=null
$.d2=null
$.cA=!1
$.ep=null
$.ej=null
$.eu=null
$.bY=null
$.c3=null
$.cH=null
$.aQ=null
$.bc=null
$.bd=null
$.cB=!1
$.E=C.e
$.ag=null
$.cj=null
$.de=null
$.dd=null
$.d9=null
$.d8=null
$.d7=null
$.d6=null
$.en=0
$.jT="    //uniform bool fogEnabled;\n    const bool fogEnabled=false;\n\n    //uniform bool onlyAO;\n    const bool onlyAO=false;\n\n\n    //uniform float aoClamp;\n    const float aoClamp = 0.45;\n\n    //uniform float lumInfluence;\n    const float lumInfluence = 0.4;\n\n    //varying vec2 vUv;\n    \n    #define DL 2.399963229728653\n    #define EULER 2.718281828459045\n    \n\n\n    const int samples = 8;\n    const float radius = 5.0;\n    const bool useNoise = false;\n    const float noiseAmount = 0.0003;\n    const float diffArea = 0.4;\n    const float gDisplace = 0.4;\n    const vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );\n    \n    float unpackDepth( const in vec4 rgba_depth ) {\n      return rgba_depth.r;\n    }\n\n    float unpackDepth2(vec4 rgba_depth) {\n      const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n      float depth = dot( rgba_depth, bit_shift );\n      return depth;\n    }\n    \n    vec2 rand( const vec2 coord ) {\n      vec2 noise;\n      if ( useNoise ) {\n        float nx = dot ( coord, vec2( 12.9898, 78.233 ) );\n        float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\n        noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n      } else {\n        float width = uCanvasSize.x;\n        float height = uCanvasSize.y;\n        float ff = fract( 1.0 - coord.s * ( width / 2.0 ) );\n        float gg = fract( coord.t * ( height / 2.0 ) );\n        noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n      }\n      return ( noise * 2.0  - 1.0 ) * noiseAmount;\n    }\n    \n/*\n    float doFog() {\n      float zdepth = unpackDepth( texture(uDepthMap, vTexUV ) );\n      float depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );\n      return smoothstep( fogNear, fogFar, depth );\n    }\n*/  \n\n    float readDepth(vec2 coord) {\n      float cameraFarPlusNear = uCameraFar + uCameraNear;\n      float cameraFarMinusNear = uCameraFar - uCameraNear;\n      float cameraCoef = 2.0 * uCameraNear;\n      return cameraCoef / ( cameraFarPlusNear - unpackDepth( texture(uDepthMap, coord ) ) * cameraFarMinusNear );\n    }\n    \n    float compareDepths( const in float depth1, const in float depth2, inout int far ) {\n      float garea = 2.0;\n      float diff = ( depth1 - depth2 ) * 100.0;\n      if ( diff < gDisplace ) {\n        garea = diffArea;\n      } else {\n        far = 1;\n      }\n    \n      float dd = diff - gDisplace;\n      float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );\n      return gauss;\n    }\n    \n    float calcAO( float depth, float dw, float dh ) {\n      float dd = radius - depth * radius;\n      vec2 vv = vec2( dw, dh );\n      vec2 coord1 = vTexUV + dd * vv;\n      vec2 coord2 = vTexUV - dd * vv;\n      float temp1 = 0.0;\n      float temp2 = 0.0;\n      int far = 0;\n      temp1 = compareDepths( depth, readDepth( coord1 ), far );\n      if ( far > 0 ) {\n        temp2 = compareDepths( readDepth( coord2 ), depth, far );\n        temp1 += ( 1.0 - temp1 ) * temp2;\n      }\n      return temp1;\n    }\n    \n    void main() {\n      float width = uCanvasSize.x;\n      float height = uCanvasSize.y;\n\n      vec2 noise = rand( vTexUV );\n      float depth = readDepth( vTexUV );\n      float tt = clamp( depth, aoClamp, 1.0 );\n      float w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );\n      float h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );\n      float pw;\n      float ph;\n      float ao;\n      float dz = 1.0 / float( samples );\n      float z = 1.0 - dz / 2.0;\n      float l = 0.0;\n      for ( int i = 0; i <= samples; i ++ ) {\n        float r = sqrt( 1.0 - z );\n        pw = cos( l ) * r;\n        ph = sin( l ) * r;\n        ao += calcAO( depth, pw * w, ph * h );\n        z = z - dz;\n        l = l + DL;\n      }\n    \n      ao /= float( samples );\n      ao = 1.0 - ao;\n\n/*\n      if ( fogEnabled ) {\n        ao = mix( ao, 1.0, doFog() );\n      }\n*/\n\n      // Diffuse\n      vec3 color = texture(uTexture, vTexUV ).rgb;\n      vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\n      float lum = dot( color.rgb, lumcoeff );\n      vec3 luminance = vec3( lum );\n      vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n    \n      if ( onlyAO ) {\n        final = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n      }\n      oFragColor = vec4( final, 1.0 );\n      //oFragColor = vec4( color, 1.0 );\n    }\n    \n    "
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
I.$lazy(y,x,w)}})(["lu","ez",function(){return H.eo("_$dart_dartClosure")},"m6","cL",function(){return H.eo("_$dart_js")},"mT","eC",function(){return H.ac(H.bQ({
toString:function(){return"$receiver$"}}))},"mU","eD",function(){return H.ac(H.bQ({$method$:null,
toString:function(){return"$receiver$"}}))},"mV","eE",function(){return H.ac(H.bQ(null))},"mW","eF",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mZ","eI",function(){return H.ac(H.bQ(void 0))},"n_","eJ",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mY","eH",function(){return H.ac(H.dM(null))},"mX","eG",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"n1","eL",function(){return H.ac(H.dM(void 0))},"n0","eK",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nb","cM",function(){return P.iV()},"nr","bh",function(){return[]},"lr","ey",function(){return{}},"ni","eM",function(){return P.cs(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"nj","cN",function(){return P.R(P.d,P.bl)},"mF","eA",function(){return new G.dL(1281,0,4294967295)},"lm","ew",function(){return new G.dK(1281,1281,1281)},"np","a8",function(){return P.dt(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.H,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.F)},"mO","eB",function(){var z=new G.iD(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"lp","ex",function(){return T.iM(0.8,0.8,0.8)},"ny","eQ",function(){var z,y
z=G.dF("SolidColor")
y=[P.d]
z.aS(H.i(["aPosition"],y))
z.aj(H.i(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b_(H.i(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nx","eP",function(){var z,y
z=G.dF("SolidColorF")
y=[P.d]
z.aj(H.i(["uColor"],y))
z.b_(H.i(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"nu","eN",function(){return H.i([],[[P.a_,P.b]])},"nv","eO",function(){return H.af(C.n.bV(W.kK(),"#activate"),"$isdl")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.a5]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.z,args:[,,]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.T,args:[W.ab]},{func:1,ret:P.T,args:[P.d]},{func:1,ret:P.T,args:[W.V,P.d,P.d,W.bv]},{func:1,ret:-1,args:[,]},{func:1,ret:P.z,args:[W.b3]},{func:1,args:[P.d]},{func:1,ret:P.z,args:[,P.S]},{func:1,ret:P.z,args:[,],opt:[P.S]},{func:1,ret:[P.Q,,],args:[,]},{func:1,ret:P.T,args:[W.u]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.z,args:[P.G]},{func:1,args:[W.ah]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.z,args:[W.br]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.bb]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:P.z,args:[P.d]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.D,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
if(x==y)H.lf(d||a)
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
Isolate.aI=a.aI
Isolate.be=a.be
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
if(typeof dartMainRunner==="function")dartMainRunner(B.er,[])
else B.er([])})})()
//# sourceMappingURL=ssao.dart.js.map
