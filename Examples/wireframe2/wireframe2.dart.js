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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isi)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cC(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bh=function(){}
var dart=[["","",,H,{"^":"",m1:{"^":"b;a"}}],["","",,J,{"^":"",
cH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c4:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cF==null){H.kU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cw("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cJ()]
if(v!=null)return v
v=H.kZ(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cJ(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
i:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.ba(a)},
j:["cj",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hm:{"^":"i;",
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isR:1},
hn:{"^":"i;",
B:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
$isC:1},
cp:{"^":"i;",
gv:function(a){return 0},
j:["cl",function(a){return String(a)}]},
hZ:{"^":"cp;"},
be:{"^":"cp;"},
bu:{"^":"cp;",
j:function(a){var z=a[$.eB()]
if(z==null)return this.cl(a)
return"JavaScript function for "+H.e(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbp:1},
br:{"^":"i;$ti",
l:function(a,b){H.z(b,H.o(a,0))
if(!!a.fixed$length)H.P(P.B("add"))
a.push(b)},
I:function(a,b){var z
H.w(b,"$isj",[H.o(a,0)],"$asj")
if(!!a.fixed$length)H.P(P.B("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
gdL:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.di())},
bi:function(a,b){var z,y
H.k(b,{func:1,ret:P.R,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aM(a))}return!1},
cd:function(a,b){if(!!a.immutable$list)H.P(P.B("sort"))
H.is(a,J.ks(),H.o(a,0))},
aK:function(a){return this.cd(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
j:function(a){return P.cn(a,"[","]")},
gw:function(a){return new J.fz(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.ba(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.an(a,b))
return a[b]},
h:function(a,b,c){H.t(b)
H.z(c,H.o(a,0))
if(!!a.immutable$list)H.P(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.an(a,b))
if(b>=a.length||b<0)throw H.c(H.an(a,b))
a[b]=c},
$isv:1,
$asv:I.bh,
$isj:1,
$isa:1,
p:{
hl:function(a,b){return J.co(H.n(a,[b]))},
co:function(a){H.bj(a)
a.fixed$length=Array
return a},
m_:[function(a,b){return J.f0(H.et(a,"$isY"),H.et(b,"$isY"))},"$2","ks",8,0,31]}},
m0:{"^":"br;$ti"},
fz:{"^":"b;a,b,c,0d,$ti",
saW:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.J(z))
x=this.c
if(x>=y){this.saW(null)
return!1}this.saW(z[x]);++this.c
return!0},
$isb4:1},
bs:{"^":"i;",
K:function(a,b){var z
H.cI(b)
if(typeof b!=="number")throw H.c(H.aG(b))
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
return z+0}throw H.c(P.B(""+a+".toInt()"))},
dn:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.B(""+a+".ceil()"))},
dq:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.aG(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dY:function(a,b){var z
if(b>20)throw H.c(P.bR(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gab(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cn:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bf(a,b)},
P:function(a,b){return(a|0)===a?a/b|0:this.bf(a,b)},
bf:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.B("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bd:function(a,b){var z
if(a>0)z=this.da(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
da:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a>b},
$isY:1,
$asY:function(){return[P.G]},
$isai:1,
$isG:1},
dk:{"^":"bs;",$isD:1},
dj:{"^":"bs;"},
bt:{"^":"i;",
bt:function(a,b){if(b<0)throw H.c(H.an(a,b))
if(b>=a.length)H.P(H.an(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(b>=a.length)throw H.c(H.an(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.r(b)
if(typeof b!=="string")throw H.c(P.cZ(b,null,null))
return a+b},
ce:function(a,b){var z=H.n(a.split(b),[P.d])
return z},
cg:function(a,b,c){var z
if(c>a.length)throw H.c(P.bR(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cf:function(a,b){return this.cg(a,b,0)},
aM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bS(b,null,null))
if(b>c)throw H.c(P.bS(b,null,null))
if(c>a.length)throw H.c(P.bS(c,null,null))
return a.substring(b,c)},
ci:function(a,b){return this.aM(a,b,null)},
dX:function(a){return a.toLowerCase()},
e_:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a0(z,0)===133){x=J.ho(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bt(z,w)===133?J.hp(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dt:function(a,b,c){if(c>a.length)throw H.c(P.bR(c,0,a.length,null,null))
return H.l5(a,b,c)},
K:function(a,b){var z
H.r(b)
if(typeof b!=="string")throw H.c(H.aG(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.an(a,b))
return a[b]},
$isv:1,
$asv:I.bh,
$isY:1,
$asY:function(){return[P.d]},
$isdy:1,
$isd:1,
p:{
dl:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ho:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.a0(a,b)
if(y!==32&&y!==13&&!J.dl(y))break;++b}return b},
hp:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bt(a,z)
if(y!==32&&y!==13&&!J.dl(y))break}return b}}}}],["","",,H,{"^":"",
di:function(){return new P.cu("No element")},
hk:function(){return new P.cu("Too many elements")},
is:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.D,args:[c,c]})
H.bx(a,0,J.b_(a)-1,b,c)},
bx:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.ir(a,b,c,d,e)
else H.iq(a,b,c,d,e)},
ir:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aV(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ac(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iq:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.P(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.P(b+a0,2)
v=w-z
u=w+z
t=J.aV(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ac(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ac(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ac(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ac(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ac(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ac(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ac(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ac(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ac(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.S(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.T()
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
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.T()
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
H.bx(a,b,m-2,a1,a2)
H.bx(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.S(a1.$2(t.i(a,m),r),0);)++m
for(;J.S(a1.$2(t.i(a,l),p),0);)--l
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
break}}H.bx(a,m,l,a1,a2)}else H.bx(a,m,l,a1,a2)},
da:{"^":"j;"},
bO:{"^":"da;$ti",
gw:function(a){return new H.dq(this,this.gk(this),0,[H.cE(this,"bO",0)])},
aA:function(a,b){return this.ck(0,H.k(b,{func:1,ret:P.R,args:[H.cE(this,"bO",0)]}))}},
dq:{"^":"b;a,b,c,0d,$ti",
saX:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aV(z)
x=y.gk(z)
if(this.b!==x)throw H.c(P.aM(z))
w=this.c
if(w>=x){this.saX(null)
return!1}this.saX(y.q(z,w));++this.c
return!0},
$isb4:1},
hE:{"^":"bO;a,b,$ti",
gk:function(a){return J.b_(this.a)},
q:function(a,b){return this.b.$1(J.f8(this.a,b))},
$asbO:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dP:{"^":"j;a,b,$ti",
gw:function(a){return new H.iM(J.bH(this.a),this.b,this.$ti)}},
iM:{"^":"b4;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bM:{"^":"b;$ti"}}],["","",,H,{"^":"",
aL:function(a){var z,y
z=H.r(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kM:function(a){return init.types[H.t(a)]},
kX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isy},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.c(H.aG(a))
return z},
ba:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
i8:function(a,b){var z,y
if(typeof a!=="string")H.P(H.aG(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.r(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
i7:function(a){var z,y
if(typeof a!=="string")H.P(H.aG(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fo(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bb:function(a){return H.i_(a)+H.bY(H.ao(a),0,null)},
i_:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbe){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aL(w.length>1&&C.h.a0(w,0)===36?C.h.ci(w,1):w)},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i6:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
i4:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
i0:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
i1:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
i3:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
i5:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
i2:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
aJ:function(a){throw H.c(H.aG(a))},
f:function(a,b){if(a==null)J.b_(a)
throw H.c(H.an(a,b))},
an:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
z=H.t(J.b_(a))
if(!(b<0)){if(typeof z!=="number")return H.aJ(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bS(b,"index",null)},
aG:function(a){return new P.aq(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bQ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ew})
z.name=""}else z.toString=H.ew
return z},
ew:function(){return J.bn(this.dartException)},
P:function(a){throw H.c(a)},
J:function(a){throw H.c(P.aM(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bd(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dx(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eD()
u=$.eE()
t=$.eF()
s=$.eG()
r=$.eJ()
q=$.eK()
p=$.eI()
$.eH()
o=$.eM()
n=$.eL()
m=v.J(y)
if(m!=null)return z.$1(H.cr(H.r(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.cr(H.r(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dx(H.r(y),m))}}return z.$1(new H.iJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dF()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aq(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dF()
return a},
aW:function(a){var z
if(a==null)return new H.e6(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e6(a)},
kI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kW:function(a,b,c,d,e,f){H.h(a,"$isbp")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.de("Unsupported number of arguments for wrapped closure"))},
aH:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kW)
a.$identity=z
return z},
fK:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.ic(z).r}else x=d
w=e?Object.create(new H.it().constructor.prototype):Object.create(new H.cf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.F()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d3(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kM,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d1:H.cg
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d3(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fH:function(a,b,c,d){var z=H.cg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d3:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fJ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fH(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.F()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b0
if(v==null){v=H.bK("self")
$.b0=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.F()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.b0
if(v==null){v=H.bK("self")
$.b0=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fI:function(a,b,c,d){var z,y
z=H.cg
y=H.d1
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
fJ:function(a,b){var z,y,x,w,v,u,t,s
z=$.b0
if(z==null){z=H.bK("self")
$.b0=z}y=$.d0
if(y==null){y=H.bK("receiver")
$.d0=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fI(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ad
if(typeof y!=="number")return y.F()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.F()
$.ad=y+1
return new Function(z+y+"}")()},
cC:function(a,b,c,d,e,f,g){return H.fK(a,b,H.t(c),d,!!e,!!f,g)},
r:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a7(a,"String"))},
em:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a7(a,"double"))},
cI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a7(a,"num"))},
c_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a7(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a7(a,"int"))},
c7:function(a,b){throw H.c(H.a7(a,H.aL(H.r(b).substring(3))))},
l3:function(a,b){throw H.c(H.d2(a,H.aL(H.r(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.c7(a,b)},
a9:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.l3(a,b)},
et:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.c7(a,b)},
nt:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.A(a)[b])return a
H.c7(a,b)},
bj:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a7(a,"List<dynamic>"))},
kY:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.c7(a,b)},
cD:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
bC:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cD(J.A(a))
if(z==null)return!1
return H.ec(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cy)return a
$.cy=!0
try{if(H.bC(a,b))return a
z=H.bE(b)
y=H.a7(a,z)
throw H.c(y)}finally{$.cy=!1}},
aU:function(a,b){if(a!=null&&!H.cB(a,b))H.P(H.a7(a,H.bE(b)))
return a},
eg:function(a){var z,y
z=J.A(a)
if(!!z.$isl){y=H.cD(z)
if(y!=null)return H.bE(y)
return"Closure"}return H.bb(a)},
la:function(a){throw H.c(new P.fQ(H.r(a)))},
ep:function(a){return init.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
ao:function(a){if(a==null)return
return a.$ti},
nq:function(a,b,c){return H.aY(a["$as"+H.e(c)],H.ao(b))},
bi:function(a,b,c,d){var z
H.r(c)
H.t(d)
z=H.aY(a["$as"+H.e(c)],H.ao(b))
return z==null?null:z[d]},
cE:function(a,b,c){var z
H.r(b)
H.t(c)
z=H.aY(a["$as"+H.e(b)],H.ao(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.t(b)
z=H.ao(a)
return z==null?null:z[b]},
bE:function(a){return H.aF(a,null)},
aF:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aL(a[0].builtin$cls)+H.bY(a,1,b)
if(typeof a=="function")return H.aL(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.e(b[y])}if('func' in a)return H.kr(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.n([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aF(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aF(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aF(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aF(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.r(z[l])
n=n+m+H.aF(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bY:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cv("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aF(u,c)}return"<"+z.j(0)+">"},
kL:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isl){y=H.cD(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ao(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
am:function(a,b,c,d){var z,y
H.r(b)
H.bj(c)
H.r(d)
if(a==null)return!1
z=H.ao(a)
y=J.A(a)
if(y[b]==null)return!1
return H.ej(H.aY(y[d],z),null,c,null)},
bk:function(a,b,c,d){H.r(b)
H.bj(c)
H.r(d)
if(a==null)return a
if(H.am(a,b,c,d))return a
throw H.c(H.d2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aL(b.substring(3))+H.bY(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.r(b)
H.bj(c)
H.r(d)
if(a==null)return a
if(H.am(a,b,c,d))return a
throw H.c(H.a7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aL(b.substring(3))+H.bY(c,0,null),init.mangledGlobalNames)))},
ej:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a2(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a2(a[y],b,c[y],d))return!1
return!0},
nm:function(a,b,c){return a.apply(b,H.aY(J.A(b)["$as"+H.e(c)],H.ao(b)))},
er:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="C"||a===-1||a===-2||H.er(z)}return!1},
cB:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="C"||b===-1||b===-2||H.er(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cB(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bC(a,b)}z=J.A(a).constructor
y=H.ao(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a2(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cB(a,b))throw H.c(H.a7(a,H.bE(b)))
return a},
a2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a2(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="C")return!0
if('func' in c)return H.ec(a,b,c,d)
if('func' in a)return c.builtin$cls==="bp"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a2("type" in a?a.type:null,b,x,d)
else if(H.a2(a,b,x,d))return!0
else{if(!('$is'+"Z" in y.prototype))return!1
w=y.prototype["$as"+"Z"]
v=H.aY(w,z?a.slice(1):null)
return H.a2(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ej(H.aY(r,z),b,u,d)},
ec:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a2(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a2(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a2(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a2(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l2(m,b,l,d)},
l2:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a2(c[w],d,a[w],b))return!1}return!0},
nn:function(a,b,c){Object.defineProperty(a,H.r(b),{value:c,enumerable:false,writable:true,configurable:true})},
kZ:function(a){var z,y,x,w,v,u
z=H.r($.eq.$1(a))
y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.r($.ei.$2(a,z))
if(z!=null){y=$.c0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c6(x)
$.c0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c5[z]=x
return x}if(v==="-"){u=H.c6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eu(a,x)
if(v==="*")throw H.c(P.cw(z))
if(init.leafTags[z]===true){u=H.c6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eu(a,x)},
eu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cH(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c6:function(a){return J.cH(a,!1,null,!!a.$isy)},
l1:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c6(z)
else return J.cH(z,c,null,null)},
kU:function(){if(!0===$.cF)return
$.cF=!0
H.kV()},
kV:function(){var z,y,x,w,v,u,t,s
$.c0=Object.create(null)
$.c5=Object.create(null)
H.kQ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ev.$1(v)
if(u!=null){t=H.l1(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kQ:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aT(C.N,H.aT(C.S,H.aT(C.A,H.aT(C.A,H.aT(C.R,H.aT(C.O,H.aT(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eq=new H.kR(v)
$.ei=new H.kS(u)
$.ev=new H.kT(t)},
aT:function(a,b){return a(b)||b},
l5:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
l7:function(a,b,c,d){var z=b.cY(a,d)
if(z==null)return a
return H.l9(a,z.b.index,z.gdE(z),c)},
l6:function(a,b,c){var z,y
z=b.gba()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
l8:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.l7(a,b,c,d)},
l9:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ib:{"^":"b;a,b,c,d,e,f,r,0x",p:{
ic:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.co(z)
y=z[0]
x=z[1]
return new H.ib(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iE:{"^":"b;a,b,c,d,e,f",
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
af:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.n([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hW:{"^":"N;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dx:function(a,b){return new H.hW(a,b==null?null:b.method)}}},
hr:{"^":"N;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hr(a,y,z?null:b.receiver)}}},
iJ:{"^":"N;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lb:{"^":"l:7;a",
$1:function(a){if(!!J.A(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e6:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isQ:1},
l:{"^":"b;",
j:function(a){return"Closure '"+H.bb(this).trim()+"'"},
gc6:function(){return this},
$isbp:1,
gc6:function(){return this}},
dH:{"^":"l;"},
it:{"^":"dH;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aL(z)+"'"}},
cf:{"^":"dH;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.ba(this.a)
else y=typeof z!=="object"?J.ap(z):H.ba(z)
return(y^H.ba(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cg:function(a){return a.a},
d1:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cf("self","target","receiver","name")
y=J.co(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iF:{"^":"N;a",
j:function(a){return this.a},
p:{
a7:function(a,b){return new H.iF("TypeError: "+P.bL(a)+": type '"+H.eg(a)+"' is not a subtype of type '"+b+"'")}}},
fF:{"^":"N;a",
j:function(a){return this.a},
p:{
d2:function(a,b){return new H.fF("CastError: "+P.bL(a)+": type '"+H.eg(a)+"' is not a subtype of type '"+b+"'")}}},
ij:{"^":"N;a",
j:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
ik:function(a){return new H.ij(a)}}},
dM:{"^":"b;a,0b,0c,0d",
ga9:function(){var z=this.b
if(z==null){z=H.bE(this.a)
this.b=z}return z},
j:function(a){return this.ga9()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga9())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dM&&this.ga9()===b.ga9()}},
cq:{"^":"dr;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gD:function(a){return new H.au(this,[H.o(this,0)])},
aa:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cU(z,b)}else{y=this.dJ(b)
return y}},
dJ:function(a){var z=this.d
if(z==null)return!1
return this.as(this.am(z,J.ap(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a6(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a6(w,b)
x=y==null?null:y.b
return x}else return this.dK(b)},
dK:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.am(z,J.ap(a)&0x3ffffff)
x=this.as(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ao()
this.b=z}this.aY(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ao()
this.c=y}this.aY(y,b,c)}else{x=this.d
if(x==null){x=this.ao()
this.d=x}w=J.ap(b)&0x3ffffff
v=this.am(x,w)
if(v==null)this.aq(x,w,[this.af(b,c)])
else{u=this.as(v,b)
if(u>=0)v[u].b=c
else v.push(this.af(b,c))}}},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aM(this))
z=z.c}},
aY:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.a6(a,b)
if(z==null)this.aq(a,b,this.af(b,c))
else z.b=c},
b_:function(){this.r=this.r+1&67108863},
af:function(a,b){var z,y
z=new H.hw(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b_()
return z},
as:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
j:function(a){return P.ds(this)},
a6:function(a,b){return a[b]},
am:function(a,b){return a[b]},
aq:function(a,b,c){a[b]=c},
cV:function(a,b){delete a[b]},
cU:function(a,b){return this.a6(a,b)!=null},
ao:function(){var z=Object.create(null)
this.aq(z,"<non-identifier-key>",z)
this.cV(z,"<non-identifier-key>")
return z},
$isdn:1},
hw:{"^":"b;a,b,0c,0d"},
au:{"^":"da;a,$ti",
gk:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hx(z,z.r,this.$ti)
y.c=z.e
return y}},
hx:{"^":"b;a,b,0c,0d,$ti",
saZ:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aM(z))
else{z=this.c
if(z==null){this.saZ(null)
return!1}else{this.saZ(z.a)
this.c=this.c.c
return!0}}},
$isb4:1},
kR:{"^":"l:7;a",
$1:function(a){return this.a(a)}},
kS:{"^":"l:32;a",
$2:function(a,b){return this.a(a,b)}},
kT:{"^":"l:14;a",
$1:function(a){return this.a(H.r(a))}},
hq:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gba:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dm(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cY:function(a,b){var z,y
z=this.gba()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jA(this,y)},
$isdy:1,
p:{
dm:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.cl("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jA:{"^":"b;a,b",
gdE:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]}}}],["","",,H,{"^":"",
kH:function(a){return J.hl(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bX:function(a){var z,y
if(!!J.A(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.an(b,a))},
hR:{"^":"i;",$isiG:1,"%":"DataView;ArrayBufferView;ct|e0|e1|dv|e2|e3|aw"},
ct:{"^":"hR;",
gk:function(a){return a.length},
$isv:1,
$asv:I.bh,
$isy:1,
$asy:I.bh},
dv:{"^":"e1;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
h:function(a,b,c){H.t(b)
H.em(c)
H.ah(b,a,a.length)
a[b]=c},
$asbM:function(){return[P.ai]},
$asp:function(){return[P.ai]},
$isj:1,
$asj:function(){return[P.ai]},
$isa:1,
$asa:function(){return[P.ai]},
"%":"Float64Array"},
aw:{"^":"e3;",
h:function(a,b,c){H.t(b)
H.t(c)
H.ah(b,a,a.length)
a[b]=c},
$asbM:function(){return[P.D]},
$asp:function(){return[P.D]},
$isj:1,
$asj:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hQ:{"^":"dv;",$isak:1,"%":"Float32Array"},
m9:{"^":"aw;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ma:{"^":"aw;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ishi:1,
"%":"Int32Array"},
mb:{"^":"aw;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mc:{"^":"aw;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hS:{"^":"aw;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ismX:1,
"%":"Uint32Array"},
md:{"^":"aw;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
me:{"^":"aw;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e0:{"^":"ct+p;"},
e1:{"^":"e0+bM;"},
e2:{"^":"ct+p;"},
e3:{"^":"e2+bM;"}}],["","",,P,{"^":"",
iT:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kz()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aH(new P.iV(z),1)).observe(y,{childList:true})
return new P.iU(z,y,x)}else if(self.setImmediate!=null)return P.kA()
return P.kB()},
n6:[function(a){self.scheduleImmediate(H.aH(new P.iW(H.k(a,{func:1,ret:-1})),0))},"$1","kz",4,0,3],
n7:[function(a){self.setImmediate(H.aH(new P.iX(H.k(a,{func:1,ret:-1})),0))},"$1","kA",4,0,3],
n8:[function(a){H.k(a,{func:1,ret:-1})
P.k8(0,a)},"$1","kB",4,0,3],
h7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isj",[[P.Z,d]],"$asj")
s=[[P.a,d]]
y=new P.O(0,$.E,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.h9(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.J)(r),++p){w=r[p]
v=o
w.ay(new P.h8(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.O(0,$.E,s)
r.b2(C.X)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.n(r,[d])}catch(n){u=H.a4(n)
t=H.aW(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bQ()
r=$.E
if(r!==C.f)r.toString
s=new P.O(0,r,s)
s.b3(m,t)
return s}else{z.c=u
z.d=t}}return y},
kv:function(a,b){if(H.bC(a,{func:1,args:[P.b,P.Q]}))return H.k(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bC(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ku:function(){var z,y
for(;z=$.aR,z!=null;){$.bg=null
y=z.b
$.aR=y
if(y==null)$.bf=null
z.a.$0()}},
nk:[function(){$.cz=!0
try{P.ku()}finally{$.bg=null
$.cz=!1
if($.aR!=null)$.cK().$1(P.ek())}},"$0","ek",0,0,1],
ef:function(a){var z=new P.dR(H.k(a,{func:1,ret:-1}))
if($.aR==null){$.bf=z
$.aR=z
if(!$.cz)$.cK().$1(P.ek())}else{$.bf.b=z
$.bf=z}},
ky:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aR
if(z==null){P.ef(a)
$.bg=$.bf
return}y=new P.dR(a)
x=$.bg
if(x==null){y.b=z
$.bg=y
$.aR=y}else{y.b=x.b
x.b=y
$.bg=y
if(y.b==null)$.bf=y}},
l4:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.E
if(C.f===y){P.aS(null,null,C.f,a)
return}y.toString
P.aS(null,null,y,H.k(y.bl(a),z))},
bZ:function(a,b,c,d,e){var z={}
z.a=d
P.ky(new P.kw(z,e))},
ed:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
ee:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
kx:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
aS:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bl(d):c.dk(d,-1)
P.ef(d)},
iV:{"^":"l:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iU:{"^":"l:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iW:{"^":"l:0;a",
$0:function(){this.a.$0()}},
iX:{"^":"l:0;a",
$0:function(){this.a.$0()}},
k7:{"^":"b;a,0b,c",
cP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aH(new P.k9(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
p:{
k8:function(a,b){var z=new P.k7(!0,0)
z.cP(a,b)
return z}}},
k9:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Z:{"^":"b;$ti"},
h9:{"^":"l:15;a,b,c,d",
$2:function(a,b){var z,y
H.h(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.H(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.H(z.c,z.d)}},
h8:{"^":"l;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.b5(z.a)}else if(z.b===0&&!this.e)this.c.H(z.c,z.d)},
$S:function(){return{func:1,ret:P.C,args:[this.f]}}},
dV:{"^":"b;$ti",
ds:function(a,b){if(a==null)a=new P.bQ()
if(this.a.a!==0)throw H.c(P.by("Future already completed"))
$.E.toString
this.H(a,b)},
dr:function(a){return this.ds(a,null)}},
dS:{"^":"dV;a,$ti",
bv:function(a,b){var z
H.aU(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.by("Future already completed"))
z.b2(b)},
H:function(a,b){this.a.b3(a,b)}},
k2:{"^":"dV;a,$ti",
H:function(a,b){this.a.H(a,b)}},
aP:{"^":"b;0a,b,c,d,e,$ti",
dN:function(a){if(this.c!==6)return!0
return this.b.b.aw(H.k(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dI:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bC(z,{func:1,args:[P.b,P.Q]}))return H.aU(w.dT(z,a.a,a.b,null,y,P.Q),x)
else return H.aU(w.aw(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
O:{"^":"b;be:a<,b,0d7:c<,$ti",
ay:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.f){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kv(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.O(0,$.E,[c])
w=b==null?1:3
this.b1(new P.aP(x,w,a,b,[z,c]))
return x},
ax:function(a,b){return this.ay(a,null,b)},
b1:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaP")
this.c=a}else{if(z===2){y=H.h(this.c,"$isO")
z=y.a
if(z<4){y.b1(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aS(null,null,z,H.k(new P.je(this,a),{func:1,ret:-1}))}},
bb:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaP")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isO")
y=u.a
if(y<4){u.bb(a)
return}this.a=y
this.c=u.c}z.a=this.a8(a)
y=this.b
y.toString
P.aS(null,null,y,H.k(new P.jl(z,this),{func:1,ret:-1}))}},
a7:function(){var z=H.h(this.c,"$isaP")
this.c=null
return this.a8(z)},
a8:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ah:function(a){var z,y,x
z=H.o(this,0)
H.aU(a,{futureOr:1,type:z})
y=this.$ti
if(H.am(a,"$isZ",y,"$asZ"))if(H.am(a,"$isO",y,null))P.bV(a,this)
else P.dW(a,this)
else{x=this.a7()
H.z(a,z)
this.a=4
this.c=a
P.aQ(this,x)}},
b5:function(a){var z
H.z(a,H.o(this,0))
z=this.a7()
this.a=4
this.c=a
P.aQ(this,z)},
H:function(a,b){var z
H.h(b,"$isQ")
z=this.a7()
this.a=8
this.c=new P.a_(a,b)
P.aQ(this,z)},
b2:function(a){var z
H.aU(a,{futureOr:1,type:H.o(this,0)})
if(H.am(a,"$isZ",this.$ti,"$asZ")){this.cS(a)
return}this.a=1
z=this.b
z.toString
P.aS(null,null,z,H.k(new P.jg(this,a),{func:1,ret:-1}))},
cS:function(a){var z=this.$ti
H.w(a,"$isZ",z,"$asZ")
if(H.am(a,"$isO",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aS(null,null,z,H.k(new P.jk(this,a),{func:1,ret:-1}))}else P.bV(a,this)
return}P.dW(a,this)},
b3:function(a,b){var z
H.h(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aS(null,null,z,H.k(new P.jf(this,a,b),{func:1,ret:-1}))},
$isZ:1,
p:{
dW:function(a,b){var z,y,x
b.a=1
try{a.ay(new P.jh(b),new P.ji(b),null)}catch(x){z=H.a4(x)
y=H.aW(x)
P.l4(new P.jj(b,z,y))}},
bV:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isO")
if(z>=4){y=b.a7()
b.a=a.a
b.c=a.c
P.aQ(b,y)}else{y=H.h(b.c,"$isaP")
b.a=2
b.c=a
a.bb(y)}},
aQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.bZ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aQ(z.a,b)}y=z.a
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
if(p){H.h(r,"$isa_")
y=y.b
u=r.a
t=r.b
y.toString
P.bZ(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.jo(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jn(x,b,r).$0()}else if((y&2)!==0)new P.jm(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.A(y).$isZ){if(y.a>=4){n=H.h(t.c,"$isaP")
t.c=null
b=t.a8(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bV(y,t)
return}}m=b.b
n=H.h(m.c,"$isaP")
m.c=null
b=m.a8(n)
y=x.a
u=x.b
if(!y){H.z(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
je:{"^":"l:0;a,b",
$0:function(){P.aQ(this.a,this.b)}},
jl:{"^":"l:0;a,b",
$0:function(){P.aQ(this.b,this.a.a)}},
jh:{"^":"l:8;a",
$1:function(a){var z=this.a
z.a=0
z.ah(a)}},
ji:{"^":"l:16;a",
$2:function(a,b){H.h(b,"$isQ")
this.a.H(a,b)},
$1:function(a){return this.$2(a,null)}},
jj:{"^":"l:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
jg:{"^":"l:0;a,b",
$0:function(){var z=this.a
z.b5(H.z(this.b,H.o(z,0)))}},
jk:{"^":"l:0;a,b",
$0:function(){P.bV(this.b,this.a)}},
jf:{"^":"l:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
jo:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bR(H.k(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.aW(v)
if(this.d){w=H.h(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.A(z).$isZ){if(z instanceof P.O&&z.gbe()>=4){if(z.gbe()===8){w=this.b
w.b=H.h(z.gd7(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ax(new P.jp(t),null)
w.a=!1}}},
jp:{"^":"l:17;a",
$1:function(a){return this.a}},
jn:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aw(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.aW(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
jm:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isa_")
w=this.c
if(w.dN(z)&&w.e!=null){v=this.b
v.b=w.dI(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.aW(u)
w=H.h(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
dR:{"^":"b;a,0b"},
ix:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.O(0,$.E,[P.D])
z.a=0
x=H.o(this,0)
w=H.k(new P.iz(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.iA(z,y),{func:1,ret:-1})
W.al(this.a,this.b,w,!1,x)
return y}},
iz:{"^":"l;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.o(this.b,0)]}}},
iA:{"^":"l:0;a,b",
$0:function(){this.b.ah(this.a.a)}},
iy:{"^":"b;"},
a_:{"^":"b;a,b",
j:function(a){return H.e(this.a)},
$isN:1},
kf:{"^":"b;",$isn4:1},
kw:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bQ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.j(0)
throw x}},
jM:{"^":"kf;",
dU:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.f===$.E){a.$0()
return}P.ed(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.aW(x)
P.bZ(null,null,this,z,H.h(y,"$isQ"))}},
dV:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.f===$.E){a.$1(b)
return}P.ee(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.aW(x)
P.bZ(null,null,this,z,H.h(y,"$isQ"))}},
dk:function(a,b){return new P.jO(this,H.k(a,{func:1,ret:b}),b)},
bl:function(a){return new P.jN(this,H.k(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.jP(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bR:function(a,b){H.k(a,{func:1,ret:b})
if($.E===C.f)return a.$0()
return P.ed(null,null,this,a,b)},
aw:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.E===C.f)return a.$1(b)
return P.ee(null,null,this,a,b,c,d)},
dT:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.E===C.f)return a.$2(b,c)
return P.kx(null,null,this,a,b,c,d,e,f)}},
jO:{"^":"l;a,b,c",
$0:function(){return this.a.bR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jN:{"^":"l:1;a,b",
$0:function(){return this.a.dU(this.b)}},
jP:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dV(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dp:function(a,b,c){H.bj(a)
return H.w(H.kI(a,new H.cq(0,0,[b,c])),"$isdn",[b,c],"$asdn")},
a1:function(a,b){return new H.cq(0,0,[a,b])},
hy:function(){return new H.cq(0,0,[null,null])},
a5:function(a,b,c,d){return new P.jw(0,0,[d])},
hj:function(a,b,c){var z,y
if(P.cA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.n([],[P.d])
y=$.bl()
C.a.l(y,a)
try{P.kt(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.dG(b,H.kY(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cn:function(a,b,c){var z,y,x
if(P.cA(a))return b+"..."+c
z=new P.cv(b)
y=$.bl()
C.a.l(y,a)
try{x=z
x.a=P.dG(x.gV(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
cA:function(a){var z,y
for(z=0;y=$.bl(),z<y.length;++z)if(a===y[z])return!0
return!1},
kt:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cs:function(a,b){var z,y,x
z=P.a5(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x)z.l(0,H.z(a[x],b))
return z},
ds:function(a){var z,y,x
z={}
if(P.cA(a))return"{...}"
y=new P.cv("")
try{C.a.l($.bl(),a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.fb(a,new P.hD(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.bl()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
jw:{"^":"jr;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e_(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbB")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbB")!=null}else return this.cT(b)},
cT:function(a){var z=this.d
if(z==null)return!1
return this.al(this.b8(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cx()
this.b=z}return this.b0(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cx()
this.c=y}return this.b0(y,b)}else return this.cQ(0,b)},
cQ:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cx()
this.d=z}y=this.b6(b)
x=z[y]
if(x==null)z[y]=[this.ap(b)]
else{if(this.al(x,b)>=0)return!1
x.push(this.ap(b))}return!0},
bQ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bc(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bc(this.c,b)
else return this.d2(0,b)},
d2:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b8(z,b)
x=this.al(y,b)
if(x<0)return!1
this.bg(y.splice(x,1)[0])
return!0},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.an()}},
b0:function(a,b){H.z(b,H.o(this,0))
if(H.h(a[b],"$isbB")!=null)return!1
a[b]=this.ap(b)
return!0},
bc:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbB")
if(z==null)return!1
this.bg(z)
delete a[b]
return!0},
an:function(){this.r=this.r+1&67108863},
ap:function(a){var z,y
z=new P.bB(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.an()
return z},
bg:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.an()},
b6:function(a){return J.ap(a)&0x3ffffff},
b8:function(a,b){return a[this.b6(b)]},
al:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
p:{
cx:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bB:{"^":"b;a,0b,0c"},
e_:{"^":"b;a,b,0c,0d,$ti",
sb4:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aM(z))
else{z=this.c
if(z==null){this.sb4(null)
return!1}else{this.sb4(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb4:1,
p:{
jx:function(a,b,c){var z=new P.e_(a,b,[c])
z.c=a.e
return z}}},
jr:{"^":"il;"},
hz:{"^":"jy;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dq(a,this.gk(a),0,[H.bi(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
dG:function(a,b,c,d){var z,y,x
H.z(b,d)
H.k(c,{func:1,ret:d,args:[d,H.bi(this,a,"p",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.c(P.aM(a))}return y},
j:function(a){return P.cn(a,"[","]")}},
dr:{"^":"U;"},
hD:{"^":"l:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
U:{"^":"b;$ti",
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bi(this,a,"U",0),H.bi(this,a,"U",1)]})
for(z=J.bH(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.b_(this.gD(a))},
j:function(a){return P.ds(a)},
$isK:1},
im:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bH(H.w(b,"$isj",this.$ti,"$asj"));z.t();)this.l(0,z.gA(z))},
j:function(a){return P.cn(this,"{","}")},
$isj:1,
$ismw:1},
il:{"^":"im;"},
jy:{"^":"b+p;"}}],["","",,P,{"^":"",
cG:function(a,b,c){var z
H.r(a)
z=H.i8(a,c)
if(z!=null)return z
throw H.c(P.cl(a,null,null))},
aI:function(a,b){var z
H.r(a)
z=H.i7(a)
if(z!=null)return z
throw H.c(P.cl("Invalid double",a,null))},
h0:function(a){if(a instanceof H.l)return a.j(0)
return"Instance of '"+H.bb(a)+"'"},
dA:function(a,b,c){return new H.hq(a,H.dm(a,!1,!0,!1))},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h0(a)},
de:function(a){return new P.ja(a)},
aa:function(a){H.aX(H.e(a))},
R:{"^":"b;"},
"+bool":0,
b1:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a&&this.b===b.b},
K:function(a,b){return C.d.K(this.a,H.h(b,"$isb1").a)},
gv:function(a){var z=this.a
return(z^C.d.bd(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fR(H.i6(this))
y=P.bo(H.i4(this))
x=P.bo(H.i0(this))
w=P.bo(H.i1(this))
v=P.bo(H.i3(this))
u=P.bo(H.i5(this))
t=P.fS(H.i2(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isY:1,
$asY:function(){return[P.b1]},
p:{
fR:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a}}},
ai:{"^":"G;"},
"+double":0,
b2:{"^":"b;a",
T:function(a,b){return C.d.T(this.a,H.h(b,"$isb2").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.d.K(this.a,H.h(b,"$isb2").a)},
j:function(a){var z,y,x,w,v
z=new P.fY()
y=this.a
if(y<0)return"-"+new P.b2(0-y).j(0)
x=z.$1(C.d.P(y,6e7)%60)
w=z.$1(C.d.P(y,1e6)%60)
v=new P.fX().$1(y%1e6)
return""+C.d.P(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isY:1,
$asY:function(){return[P.b2]},
p:{
d9:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fX:{"^":"l:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fY:{"^":"l:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"b;"},
bQ:{"^":"N;",
j:function(a){return"Throw of null."}},
aq:{"^":"N;a,b,c,d",
gaj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gai:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gaj()+y+x
if(!this.a)return w
v=this.gai()
u=P.bL(this.b)
return w+v+": "+u},
p:{
fy:function(a){return new P.aq(!1,null,null,a)},
cZ:function(a,b,c){return new P.aq(!0,a,b,c)}}},
dz:{"^":"aq;e,f,a,b,c,d",
gaj:function(){return"RangeError"},
gai:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bS:function(a,b,c){return new P.dz(null,null,!0,a,b,"Value not in range")},
bR:function(a,b,c,d,e){return new P.dz(b,c,!0,a,d,"Invalid value")}}},
hh:{"^":"aq;e,k:f>,a,b,c,d",
gaj:function(){return"RangeError"},
gai:function(){var z,y
z=H.t(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.t(e==null?J.b_(b):e)
return new P.hh(b,z,!0,a,c,"Index out of range")}}},
iK:{"^":"N;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.iK(a)}}},
iI:{"^":"N;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cw:function(a){return new P.iI(a)}}},
cu:{"^":"N;a",
j:function(a){return"Bad state: "+this.a},
p:{
by:function(a){return new P.cu(a)}}},
fL:{"^":"N;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bL(z)+"."},
p:{
aM:function(a){return new P.fL(a)}}},
dF:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isN:1},
fQ:{"^":"N;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ja:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
h4:{"^":"b;a,b,c",
j:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aM(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
cl:function(a,b,c){return new P.h4(a,b,c)}}},
bp:{"^":"b;"},
D:{"^":"G;"},
"+int":0,
j:{"^":"b;$ti",
aA:["ck",function(a,b){var z=H.cE(this,"j",0)
return new H.dP(this,H.k(b,{func:1,ret:P.R,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.P(P.bR(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
j:function(a){return P.hj(this,"(",")")}},
b4:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
K:{"^":"b;$ti"},
C:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isY:1,
$asY:function(){return[P.G]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.ba(this)},
j:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.j(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isY:1,
$asY:function(){return[P.d]},
$isdy:1},
"+String":0,
cv:{"^":"b;V:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dG:function(a,b,c){var z=J.bH(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
el:function(){return document},
fZ:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.u
z=new H.dP(new W.a8(y),H.k(new W.h_(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.P(H.di())
w=x.gA(x)
if(x.t())H.P(H.hk())
return H.h(w,"$isT")},
dd:function(a){H.h(a,"$isL")
return"wheel"},
b3:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fe(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
j7:function(a,b){return document.createElement(a)},
bW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dZ:function(a,b,c,d){var z,y
z=W.bW(W.bW(W.bW(W.bW(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eb:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j1(a)
if(!!J.A(z).$isL)return z
return}else return H.h(a,"$isL")},
kq:function(a){var z
if(!!J.A(a).$iscj)return a
z=new P.iQ([],[],!1)
z.c=!0
return z.az(a)},
eh:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.f)return a
return z.dl(a,b)},
M:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lc:{"^":"i;0k:length=","%":"AccessibleNodeList"},
fw:{"^":"M;",
j:function(a){return String(a)},
$isfw:1,
"%":"HTMLAnchorElement"},
ld:{"^":"M;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
d_:{"^":"M;",$isd_:1,"%":"HTMLBaseElement"},
fC:{"^":"i;","%":";Blob"},
bJ:{"^":"M;",$isbJ:1,"%":"HTMLBodyElement"},
ch:{"^":"M;0n:height=,0m:width=",
c7:function(a,b,c){var z=this.cZ(a,b,P.kC(c,null))
return z},
cZ:function(a,b,c){return a.getContext(b,c)},
$isch:1,
"%":"HTMLCanvasElement"},
li:{"^":"i;",
ad:function(a){return P.a3(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lj:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fM:{"^":"ci;",$isfM:1,"%":"CSSNumericValue|CSSUnitValue"},
lm:{"^":"fP;0k:length=","%":"CSSPerspective"},
ar:{"^":"i;",$isar:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fN:{"^":"j_;0k:length=",
aD:function(a,b){var z=this.d_(a,this.ag(a,b))
return z==null?"":z},
ag:function(a,b){var z,y
z=$.eA()
y=z[b]
if(typeof y==="string")return y
y=this.dc(a,b)
z[b]=y
return y},
dc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fT()+b
if(z in a)return z
return b},
d_:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fO:{"^":"b;",
gn:function(a){return this.aD(a,"height")},
gm:function(a){return this.aD(a,"width")}},
ci:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fP:{"^":"i;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lo:{"^":"ci;0k:length=","%":"CSSTransformValue"},
lp:{"^":"ci;0k:length=","%":"CSSUnparsedValue"},
lr:{"^":"i;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fU:{"^":"M;","%":"HTMLDivElement"},
cj:{"^":"u;",
df:function(a,b){return a.adoptNode(b)},
c8:function(a,b){return a.getElementById(b)},
av:function(a,b){return a.querySelector(b)},
gbM:function(a){return new W.bz(a,"mousedown",!1,[W.V])},
gbN:function(a){return new W.bz(a,"mousemove",!1,[W.V])},
gbO:function(a){return new W.bz(a,"mouseup",!1,[W.V])},
gbP:function(a){return new W.bz(a,H.r(W.dd(a)),!1,[W.aO])},
$iscj:1,
"%":"XMLDocument;Document"},
ls:{"^":"i;",
j:function(a){return String(a)},
"%":"DOMException"},
fV:{"^":"i;",
dz:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lt:{"^":"j3;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.w(c,"$isX",[P.G],"$asX")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.X,P.G]]},
$isy:1,
$asy:function(){return[[P.X,P.G]]},
$asp:function(){return[[P.X,P.G]]},
$isj:1,
$asj:function(){return[[P.X,P.G]]},
$isa:1,
$asa:function(){return[[P.X,P.G]]},
$asq:function(){return[[P.X,P.G]]},
"%":"ClientRectList|DOMRectList"},
fW:{"^":"i;",
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.am(b,"$isX",[P.G],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isX:1,
$asX:function(){return[P.G]},
"%":";DOMRectReadOnly"},
lu:{"^":"j5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.r(c)
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isy:1,
$asy:function(){return[P.d]},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lv:{"^":"i;0k:length=","%":"DOMTokenList"},
T:{"^":"u;0dW:tagName=",
gdi:function(a){return new W.j6(a)},
j:function(a){return a.localName},
L:["ae",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dc
if(z==null){z=H.n([],[W.ae])
y=new W.dw(z)
C.a.l(z,W.dX(null))
C.a.l(z,W.e7())
$.dc=y
d=y}else d=z
z=$.db
if(z==null){z=new W.ea(d)
$.db=z
c=z}else{z.a=d
c=z}}if($.aj==null){z=document
y=z.implementation
y=(y&&C.K).dz(y,"")
$.aj=y
$.ck=y.createRange()
y=$.aj
y.toString
y=y.createElement("base")
H.h(y,"$isd_")
y.href=z.baseURI
z=$.aj.head;(z&&C.L).E(z,y)}z=$.aj
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbJ")}z=$.aj
if(!!this.$isbJ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aj.body;(z&&C.p).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.V,a.tagName)){z=$.ck;(z&&C.D).c9(z,x)
z=$.ck
w=(z&&C.D).dv(z,b)}else{x.innerHTML=b
w=$.aj.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.aj.body
if(x==null?z!=null:x!==z)J.cT(x)
c.aI(w)
C.j.df(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dw",null,null,"ge2",5,5,null],
cc:function(a,b,c,d){a.textContent=null
this.E(a,this.L(a,b,c,d))},
cb:function(a,b){return this.cc(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
d3:function(a,b){return a.removeAttribute(b)},
gbM:function(a){return new W.bU(a,"mousedown",!1,[W.V])},
gbN:function(a){return new W.bU(a,"mousemove",!1,[W.V])},
gbO:function(a){return new W.bU(a,"mouseup",!1,[W.V])},
gbP:function(a){return new W.bU(a,H.r(W.dd(a)),!1,[W.aO])},
$isT:1,
"%":";Element"},
h_:{"^":"l:18;",
$1:function(a){return!!J.A(H.h(a,"$isu")).$isT}},
lx:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a0:{"^":"i;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"i;",
de:function(a,b,c,d){H.k(c,{func:1,args:[W.a0]})
if(c!=null)this.cR(a,b,c,!1)},
cR:function(a,b,c,d){return a.addEventListener(b,H.aH(H.k(c,{func:1,args:[W.a0]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e4|e5|e8|e9"},
as:{"^":"fC;",$isas:1,"%":"File"},
lO:{"^":"jd;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isas")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isy:1,
$asy:function(){return[W.as]},
$asp:function(){return[W.as]},
$isj:1,
$asj:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"FileList"},
lP:{"^":"L;0k:length=","%":"FileWriter"},
lS:{"^":"M;0k:length=","%":"HTMLFormElement"},
at:{"^":"i;",$isat:1,"%":"Gamepad"},
hc:{"^":"M;","%":"HTMLHeadElement"},
lT:{"^":"i;0k:length=","%":"History"},
lU:{"^":"jt;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hd:{"^":"cj;","%":"HTMLDocument"},
he:{"^":"hf;",
e3:function(a,b,c,d,e,f){return a.open(b,c)},
dO:function(a,b,c){return a.open(b,c)},
ca:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hf:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lV:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lW:{"^":"i;0n:height=,0m:width=","%":"ImageBitmap"},
lX:{"^":"i;0n:height=,0m:width=","%":"ImageData"},
lY:{"^":"M;0n:height=,0m:width=","%":"HTMLImageElement"},
cm:{"^":"M;0n:height=,0m:width=",$iscm:1,"%":"HTMLInputElement"},
b5:{"^":"dN;",$isb5:1,"%":"KeyboardEvent"},
hC:{"^":"i;",
j:function(a){return String(a)},
$ishC:1,
"%":"Location"},
hG:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
m5:{"^":"i;0k:length=","%":"MediaList"},
m6:{"^":"jB;",
i:function(a,b){return P.a3(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.hI(z))
return z},
gk:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hI:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m7:{"^":"jC;",
i:function(a,b){return P.a3(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.hJ(z))
return z},
gk:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hJ:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
av:{"^":"i;",$isav:1,"%":"MimeType"},
m8:{"^":"jE;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isav")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asp:function(){return[W.av]},
$isj:1,
$asj:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"MimeTypeArray"},
V:{"^":"dN;",
gbL:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b9(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.A(W.eb(z)).$isT)throw H.c(P.B("offsetX is only supported on elements"))
y=H.h(W.eb(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b9(u,v,w),"$isb9",w,"$asb9")
if(typeof z!=="number")return z.Z()
if(typeof x!=="number")return x.Z()
return new P.b9(C.r.bS(z-u),C.r.bS(x-v),w)}},
$isV:1,
"%":";DragEvent|MouseEvent"},
a8:{"^":"hz;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.by("No elements"))
if(y>1)throw H.c(P.by("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.w(b,"$isj",[W.u],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
h:function(a,b,c){var z
H.t(b)
z=this.a
J.eT(z,H.h(c,"$isu"),C.v.i(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dh(z,z.length,-1,[H.bi(C.v,z,"q",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){return C.v.i(this.a.childNodes,b)},
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"L;0dP:previousSibling=",
dQ:function(a){var z=a.parentNode
if(z!=null)J.bF(z,a)},
j:function(a){var z=a.nodeValue
return z==null?this.cj(a):z},
E:function(a,b){return a.appendChild(b)},
d4:function(a,b){return a.removeChild(b)},
d5:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hT:{"^":"jG;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
mh:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
mj:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mk:{"^":"i;0n:height=,0m:width=","%":"PaintSize"},
ax:{"^":"i;0k:length=",$isax:1,"%":"Plugin"},
mm:{"^":"jK;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isax")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isj:1,
$asj:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"PluginArray"},
mo:{"^":"V;0n:height=,0m:width=","%":"PointerEvent"},
bw:{"^":"a0;",$isbw:1,"%":"ProgressEvent|ResourceProgressEvent"},
ia:{"^":"i;",
dv:function(a,b){return a.createContextualFragment(b)},
c9:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mt:{"^":"jQ;",
i:function(a,b){return P.a3(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.ii(z))
return z},
gk:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"RTCStatsReport"},
ii:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mu:{"^":"i;0n:height=,0m:width=","%":"Screen"},
mv:{"^":"M;0k:length=","%":"HTMLSelectElement"},
ay:{"^":"L;",$isay:1,"%":"SourceBuffer"},
mx:{"^":"e5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isay")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isj:1,
$asj:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"SourceBufferList"},
az:{"^":"i;",$isaz:1,"%":"SpeechGrammar"},
my:{"^":"jW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isaz")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asp:function(){return[W.az]},
$isj:1,
$asj:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"SpeechGrammarList"},
aA:{"^":"i;0k:length=",$isaA:1,"%":"SpeechRecognitionResult"},
mB:{"^":"jZ;",
i:function(a,b){return this.b9(a,H.r(b))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d1(a,z)
if(y==null)return
b.$2(y,this.b9(a,y))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.iw(z))
return z},
gk:function(a){return a.length},
b9:function(a,b){return a.getItem(b)},
d1:function(a,b){return a.key(b)},
$asU:function(){return[P.d,P.d]},
$isK:1,
$asK:function(){return[P.d,P.d]},
"%":"Storage"},
iw:{"^":"l:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aB:{"^":"i;",$isaB:1,"%":"CSSStyleSheet|StyleSheet"},
iB:{"^":"M;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=W.fZ("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a8(y).I(0,new W.a8(z))
return y},
"%":"HTMLTableElement"},
mE:{"^":"M;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.ga5(z)
x.toString
z=new W.a8(x)
w=z.ga5(z)
y.toString
w.toString
new W.a8(y).I(0,new W.a8(w))
return y},
"%":"HTMLTableRowElement"},
mF:{"^":"M;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.ga5(z)
y.toString
x.toString
new W.a8(y).I(0,new W.a8(x))
return y},
"%":"HTMLTableSectionElement"},
dI:{"^":"M;",$isdI:1,"%":"HTMLTemplateElement"},
mG:{"^":"i;0m:width=","%":"TextMetrics"},
aC:{"^":"L;",$isaC:1,"%":"TextTrack"},
aD:{"^":"L;",$isaD:1,"%":"TextTrackCue|VTTCue"},
mH:{"^":"k6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isaD")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aD]},
$isy:1,
$asy:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isj:1,
$asj:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"TextTrackCueList"},
mI:{"^":"e9;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isaC")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aC]},
$isy:1,
$asy:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isj:1,
$asj:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"TextTrackList"},
mJ:{"^":"i;0k:length=","%":"TimeRanges"},
aE:{"^":"i;",$isaE:1,"%":"Touch"},
mK:{"^":"kb;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isaE")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aE]},
$isy:1,
$asy:function(){return[W.aE]},
$asp:function(){return[W.aE]},
$isj:1,
$asj:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$asq:function(){return[W.aE]},
"%":"TouchList"},
mL:{"^":"i;0k:length=","%":"TrackDefaultList"},
dN:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mZ:{"^":"i;",
j:function(a){return String(a)},
"%":"URL"},
n0:{"^":"hG;0n:height=,0m:width=","%":"HTMLVideoElement"},
n1:{"^":"L;0k:length=","%":"VideoTrackList"},
n2:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
n3:{"^":"i;0m:width=","%":"VTTRegion"},
aO:{"^":"V;",
gdB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.B("deltaY is not supported"))},
$isaO:1,
"%":"WheelEvent"},
iN:{"^":"L;",
gdh:function(a){var z,y,x
z=P.G
y=new P.O(0,$.E,[z])
x=H.k(new W.iO(new P.k2(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cX(a)
this.d6(a,W.eh(x,z))
return y},
d6:function(a,b){return a.requestAnimationFrame(H.aH(H.k(b,{func:1,ret:-1,args:[P.G]}),1))},
cX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdQ:1,
"%":"DOMWindow|Window"},
iO:{"^":"l:20;a",
$1:function(a){var z=this.a
a=H.aU(H.cI(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.P(P.by("Future already completed"))
z.ah(a)}},
dT:{"^":"u;",$isdT:1,"%":"Attr"},
n9:{"^":"kh;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isar")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isy:1,
$asy:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"CSSRuleList"},
na:{"^":"fW;",
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.am(b,"$isX",[P.G],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nb:{"^":"kj;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isat")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isy:1,
$asy:function(){return[W.at]},
$asp:function(){return[W.at]},
$isj:1,
$asj:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"GamepadList"},
ng:{"^":"kl;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nh:{"^":"kn;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isaA")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isj:1,
$asj:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"SpeechRecognitionResultList"},
ni:{"^":"kp;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.h(c,"$isaB")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isj:1,
$asj:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"StyleSheetList"},
iY:{"^":"dr;cW:a<",
C:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.J)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.n([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.h(z[w],"$isdT")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asU:function(){return[P.d,P.d]},
$asK:function(){return[P.d,P.d]}},
j6:{"^":"iY;a",
i:function(a,b){return J.cd(this.a,H.r(b))},
gk:function(a){return this.gD(this).length}},
bz:{"^":"ix;a,b,c,$ti"},
bU:{"^":"bz;a,b,c,$ti"},
j8:{"^":"iy;a,b,c,d,e,$ti",p:{
al:function(a,b,c,d,e){var z=W.eh(new W.j9(c),W.a0)
if(z!=null&&!0)J.eU(a,b,z,!1)
return new W.j8(0,a,b,z,!1,[e])}}},
j9:{"^":"l:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isa0"))}},
bA:{"^":"b;a",
cN:function(a){var z,y
z=$.cL()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.U[y],W.kO())
for(y=0;y<12;++y)z.h(0,C.u[y],W.kP())}},
W:function(a){return $.eN().u(0,W.b3(a))},
R:function(a,b,c){var z,y,x
z=W.b3(a)
y=$.cL()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c_(x.$4(a,b,c,this))},
$isae:1,
p:{
dX:function(a){var z,y
z=document.createElement("a")
y=new W.jR(z,window.location)
y=new W.bA(y)
y.cN(a)
return y},
ne:[function(a,b,c,d){H.h(a,"$isT")
H.r(b)
H.r(c)
H.h(d,"$isbA")
return!0},"$4","kO",16,0,11],
nf:[function(a,b,c,d){var z,y,x
H.h(a,"$isT")
H.r(b)
H.r(c)
z=H.h(d,"$isbA").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kP",16,0,11]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dh(a,this.gk(a),-1,[H.bi(this,a,"q",0)])}},
dw:{"^":"b;a",
W:function(a){return C.a.bi(this.a,new W.hV(a))},
R:function(a,b,c){return C.a.bi(this.a,new W.hU(a,b,c))},
$isae:1},
hV:{"^":"l:9;a",
$1:function(a){return H.h(a,"$isae").W(this.a)}},
hU:{"^":"l:9;a,b,c",
$1:function(a){return H.h(a,"$isae").R(this.a,this.b,this.c)}},
jS:{"^":"b;",
cO:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aA(0,new W.jT())
y=b.aA(0,new W.jU())
this.b.I(0,z)
x=this.c
x.I(0,C.W)
x.I(0,y)},
W:function(a){return this.a.u(0,W.b3(a))},
R:["cm",function(a,b,c){var z,y
z=W.b3(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dg(c)
else if(y.u(0,"*::"+b))return this.d.dg(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isae:1},
jT:{"^":"l:10;",
$1:function(a){return!C.a.u(C.u,H.r(a))}},
jU:{"^":"l:10;",
$1:function(a){return C.a.u(C.u,H.r(a))}},
k3:{"^":"jS;e,a,b,c,d",
R:function(a,b,c){if(this.cm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cd(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
e7:function(){var z,y,x,w,v
z=P.d
y=P.cs(C.t,z)
x=H.o(C.t,0)
w=H.k(new W.k4(),{func:1,ret:z,args:[x]})
v=H.n(["TEMPLATE"],[z])
y=new W.k3(y,P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),null)
y.cO(null,new H.hE(C.t,w,[x,z]),v,null)
return y}}},
k4:{"^":"l:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.r(a))}},
k1:{"^":"b;",
W:function(a){var z=J.A(a)
if(!!z.$isdC)return!1
z=!!z.$isI
if(z&&W.b3(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.h.cf(b,"on"))return!1
return this.W(a)},
$isae:1},
dh:{"^":"b;a,b,c,0d,$ti",
sb7:function(a){this.d=H.z(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb7(J.aZ(this.a,z))
this.c=z
return!0}this.sb7(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb4:1},
j0:{"^":"b;a",$isL:1,$isdQ:1,p:{
j1:function(a){if(a===window)return H.h(a,"$isdQ")
else return new W.j0(a)}}},
ae:{"^":"b;"},
jR:{"^":"b;a,b",$ismY:1},
ea:{"^":"b;a",
aI:function(a){new W.ke(this).$2(a,null)},
a1:function(a,b){if(b==null)J.cT(a)
else J.bF(b,a)},
d9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fc(a)
x=J.cd(y.gcW(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.bn(a)}catch(t){H.a4(t)}try{u=W.b3(a)
this.d8(H.h(a,"$isT"),b,z,v,u,H.h(y,"$isK"),H.r(x))}catch(t){if(H.a4(t) instanceof P.aq)throw t
else{this.a1(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d8:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a1(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a1(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.a1(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.n(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.R(a,J.fm(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.d3(z,v)}}if(!!J.A(a).$isdI)this.aI(a.content)},
$ismf:1},
ke:{"^":"l:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a1(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fd(z)}catch(w){H.a4(w)
v=H.h(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bF(u,v)}else J.bF(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isu")}}},
j_:{"^":"i+fO;"},
j2:{"^":"i+p;"},
j3:{"^":"j2+q;"},
j4:{"^":"i+p;"},
j5:{"^":"j4+q;"},
jc:{"^":"i+p;"},
jd:{"^":"jc+q;"},
js:{"^":"i+p;"},
jt:{"^":"js+q;"},
jB:{"^":"i+U;"},
jC:{"^":"i+U;"},
jD:{"^":"i+p;"},
jE:{"^":"jD+q;"},
jF:{"^":"i+p;"},
jG:{"^":"jF+q;"},
jJ:{"^":"i+p;"},
jK:{"^":"jJ+q;"},
jQ:{"^":"i+U;"},
e4:{"^":"L+p;"},
e5:{"^":"e4+q;"},
jV:{"^":"i+p;"},
jW:{"^":"jV+q;"},
jZ:{"^":"i+U;"},
k5:{"^":"i+p;"},
k6:{"^":"k5+q;"},
e8:{"^":"L+p;"},
e9:{"^":"e8+q;"},
ka:{"^":"i+p;"},
kb:{"^":"ka+q;"},
kg:{"^":"i+p;"},
kh:{"^":"kg+q;"},
ki:{"^":"i+p;"},
kj:{"^":"ki+q;"},
kk:{"^":"i+p;"},
kl:{"^":"kk+q;"},
km:{"^":"i+p;"},
kn:{"^":"km+q;"},
ko:{"^":"i+p;"},
kp:{"^":"ko+q;"}}],["","",,P,{"^":"",
a3:function(a){var z,y,x,w,v
if(a==null)return
z=P.a1(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=H.r(y[w])
z.h(0,v,a[v])}return z},
kC:function(a,b){var z={}
a.C(0,new P.kD(z))
return z},
kE:function(a){var z,y
z=new P.O(0,$.E,[null])
y=new P.dS(z,[null])
a.then(H.aH(new P.kF(y),1))["catch"](H.aH(new P.kG(y),1))
return z},
d8:function(){var z=$.d7
if(z==null){z=J.c9(window.navigator.userAgent,"Opera",0)
$.d7=z}return z},
fT:function(){var z,y
z=$.d4
if(z!=null)return z
y=$.d5
if(y==null){y=J.c9(window.navigator.userAgent,"Firefox",0)
$.d5=y}if(y)z="-moz-"
else{y=$.d6
if(y==null){y=!P.d8()&&J.c9(window.navigator.userAgent,"Trident/",0)
$.d6=y}if(y)z="-ms-"
else z=P.d8()?"-o-":"-webkit-"}$.d4=z
return z},
iP:{"^":"b;",
bH:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
az:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.P(P.fy("DateTime is outside valid range: "+y))
return new P.b1(y,!0)}if(a instanceof RegExp)throw H.c(P.cw("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kE(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bH(a)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hy()
z.a=u
C.a.h(x,v,u)
this.dH(a,new P.iR(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bH(t)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
if(u!=null)return u
s=J.aV(t)
r=s.gk(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.c1(u),q=0;q<r;++q)x.h(u,q,this.az(s.i(t,q)))
return u}return a}},
iR:{"^":"l:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.az(b)
J.eS(z,a,y)
return y}},
kD:{"^":"l:6;a",
$2:function(a,b){this.a[a]=b}},
iQ:{"^":"iP;a,b,c",
dH:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kF:{"^":"l:12;a",
$1:function(a){return this.a.bv(0,a)}},
kG:{"^":"l:12;a",
$1:function(a){return this.a.dr(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b9:{"^":"b;X:a>,S:b>,$ti",
j:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.am(b,"$isb9",[P.G],null)&&this.a==J.bI(b)&&this.b==b.gS(b)},
gv:function(a){var z,y,x
z=J.ap(this.a)
y=J.ap(this.b)
y=P.dY(P.dY(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jL:{"^":"b;"},
X:{"^":"jL;$ti"}}],["","",,P,{"^":"",fx:{"^":"i;",$isfx:1,"%":"SVGAnimatedLength"},ly:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lz:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lA:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lB:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lC:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lD:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lE:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lF:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lG:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lH:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lI:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lJ:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lK:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lL:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lM:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lN:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lQ:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lR:{"^":"bq;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hb:{"^":"bq;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bq:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lZ:{"^":"bq;0n:height=,0m:width=","%":"SVGImageElement"},b6:{"^":"i;",$isb6:1,"%":"SVGLength"},m3:{"^":"jv;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.t(b)
H.h(c,"$isb6")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b6]},
$isj:1,
$asj:function(){return[P.b6]},
$isa:1,
$asa:function(){return[P.b6]},
$asq:function(){return[P.b6]},
"%":"SVGLengthList"},m4:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b8:{"^":"i;",$isb8:1,"%":"SVGNumber"},mg:{"^":"jI;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.t(b)
H.h(c,"$isb8")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b8]},
$isj:1,
$asj:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$asq:function(){return[P.b8]},
"%":"SVGNumberList"},ml:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},mn:{"^":"i;0k:length=","%":"SVGPointList"},mp:{"^":"i;0n:height=,0m:width=","%":"SVGRect"},mq:{"^":"hb;0n:height=,0m:width=","%":"SVGRectElement"},dC:{"^":"I;",$isdC:1,"%":"SVGScriptElement"},mC:{"^":"k0;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.t(b)
H.r(c)
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"T;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.n([],[W.ae])
C.a.l(z,W.dX(null))
C.a.l(z,W.e7())
C.a.l(z,new W.k1())
c=new W.ea(new W.dw(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dw(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a8(w)
u=z.ga5(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mD:{"^":"bq;0n:height=,0m:width=","%":"SVGSVGElement"},bc:{"^":"i;",$isbc:1,"%":"SVGTransform"},mM:{"^":"kd;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.O(a,b)},
h:function(a,b,c){H.t(b)
H.h(c,"$isbc")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
O:function(a,b){return a.getItem(b)},
$asp:function(){return[P.bc]},
$isj:1,
$asj:function(){return[P.bc]},
$isa:1,
$asa:function(){return[P.bc]},
$asq:function(){return[P.bc]},
"%":"SVGTransformList"},n_:{"^":"bq;0n:height=,0m:width=","%":"SVGUseElement"},ju:{"^":"i+p;"},jv:{"^":"ju+q;"},jH:{"^":"i+p;"},jI:{"^":"jH+q;"},k_:{"^":"i+p;"},k0:{"^":"k_+q;"},kc:{"^":"i+p;"},kd:{"^":"kc+q;"}}],["","",,P,{"^":"",ak:{"^":"b;",$isj:1,
$asj:function(){return[P.ai]},
$isa:1,
$asa:function(){return[P.ai]},
$isiG:1}}],["","",,P,{"^":"",le:{"^":"i;0k:length=","%":"AudioBuffer"},lf:{"^":"iZ;",
i:function(a,b){return P.a3(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new P.fA(z))
return z},
gk:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"AudioParamMap"},fA:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},lg:{"^":"L;0k:length=","%":"AudioTrackList"},fB:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mi:{"^":"fB;0k:length=","%":"OfflineAudioContext"},iZ:{"^":"i+U;"}}],["","",,P,{"^":"",fD:{"^":"i;",$isfD:1,"%":"WebGLBuffer"},h6:{"^":"i;",$ish6:1,"%":"WebGLFramebuffer"},i9:{"^":"i;",$isi9:1,"%":"WebGLProgram"},mr:{"^":"i;",
bh:function(a,b){return a.activeTexture(b)},
bj:function(a,b,c){return a.attachShader(b,c)},
bk:function(a,b,c){return a.bindBuffer(b,c)},
bm:function(a,b,c){return a.bindFramebuffer(b,c)},
bn:function(a,b,c){return a.bindTexture(b,c)},
bo:function(a,b){return a.blendEquation(b)},
bp:function(a,b,c){return a.blendFunc(b,c)},
bq:function(a,b,c,d){return a.bufferData(b,c,d)},
br:function(a,b){return a.clear(b)},
bs:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createProgram()},
by:function(a,b){return a.createShader(b)},
bA:function(a,b){return a.depthMask(b)},
bB:function(a,b){return a.disable(b)},
bC:function(a,b,c,d){return a.drawArrays(b,c,d)},
bD:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bE:function(a,b){return a.enable(b)},
bF:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.a3(a.getContextAttributes())},
aB:function(a,b){return a.getProgramInfoLog(b)},
aC:function(a,b,c){return a.getProgramParameter(b,c)},
aE:function(a,b){return a.getShaderInfoLog(b)},
aF:function(a,b,c){return a.getShaderParameter(b,c)},
aG:function(a,b,c){return a.getUniformLocation(b,c)},
bJ:function(a,b){return a.linkProgram(b)},
aJ:function(a,b,c){return a.shaderSource(b,c)},
aL:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGLRenderingContext"},ms:{"^":"i;",
dj:function(a,b){return a.beginTransformFeedback(b)},
dm:function(a,b){return a.bindVertexArray(b)},
dA:function(a){return a.createVertexArray()},
dC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dF:function(a){return a.endTransformFeedback()},
dZ:function(a,b,c,d){this.dd(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
dd:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e0:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bh:function(a,b){return a.activeTexture(b)},
bj:function(a,b,c){return a.attachShader(b,c)},
bk:function(a,b,c){return a.bindBuffer(b,c)},
bm:function(a,b,c){return a.bindFramebuffer(b,c)},
bn:function(a,b,c){return a.bindTexture(b,c)},
bo:function(a,b){return a.blendEquation(b)},
bp:function(a,b,c){return a.blendFunc(b,c)},
bq:function(a,b,c,d){return a.bufferData(b,c,d)},
br:function(a,b){return a.clear(b)},
bs:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createProgram()},
by:function(a,b){return a.createShader(b)},
bA:function(a,b){return a.depthMask(b)},
bB:function(a,b){return a.disable(b)},
bC:function(a,b,c,d){return a.drawArrays(b,c,d)},
bD:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bE:function(a,b){return a.enable(b)},
bF:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.a3(a.getContextAttributes())},
aB:function(a,b){return a.getProgramInfoLog(b)},
aC:function(a,b,c){return a.getProgramParameter(b,c)},
aE:function(a,b){return a.getShaderInfoLog(b)},
aF:function(a,b,c){return a.getShaderParameter(b,c)},
aG:function(a,b,c){return a.getUniformLocation(b,c)},
bJ:function(a,b){return a.linkProgram(b)},
aJ:function(a,b,c){return a.shaderSource(b,c)},
aL:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGL2RenderingContext"},io:{"^":"i;",$isio:1,"%":"WebGLShader"},iD:{"^":"i;",$isiD:1,"%":"WebGLTexture"},iH:{"^":"i;",$isiH:1,"%":"WebGLUniformLocation"},iL:{"^":"i;",$isiL:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mz:{"^":"jY;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a3(this.d0(a,b))},
h:function(a,b,c){H.t(b)
H.h(c,"$isK")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
d0:function(a,b){return a.item(b)},
$asp:function(){return[[P.K,,,]]},
$isj:1,
$asj:function(){return[[P.K,,,]]},
$isa:1,
$asa:function(){return[[P.K,,,]]},
$asq:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},jX:{"^":"i+p;"},jY:{"^":"jX+q;"}}],["","",,G,{"^":"",
iS:function(a){var z,y,x,w
z=H.n(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a3(z,"\n")},
dU:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.by(a,b)
z.aJ(a,y,c)
z.bu(a,y)
x=H.c_(z.aF(a,y,35713))
if(x!=null&&!x){w=z.aE(a,y)
P.aa("E:Compilation failed:")
P.aa("E:"+G.iS(c))
P.aa("E:Failure:")
P.aa(C.h.F("E:",w))
throw H.c(w)}return y},
bN:function(a,b){var z,y,x
H.w(a,"$isa",[T.x],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bI(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cc(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.cR(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
h2:function(a,b){var z,y
H.w(a,"$isa",[T.ag],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bI(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cc(a[y]))}return b},
h3:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.aN],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bI(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.cc(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.cR(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.ff(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
h1:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.aZ(a[y],0))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+1,J.aZ(a[y],1))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+2,J.aZ(a[y],2))
if(y>=a.length)return H.f(a,y)
C.n.h(b,z+3,J.aZ(a[y],3))}return b},
jq:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.au(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.D]],v=[P.ai],u=[T.aN],t=[T.x],s=[T.ag];y.t();){r=y.d
if(!x.aa(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.eo>0)H.aX("I: "+r)
continue}q=z.i(0,r)
switch($.ab().i(0,r).a){case"vec2":b.a_(r,G.h2(H.bk(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.bN(H.bk(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.h3(H.bk(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.bX(H.bk(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.h1(H.bk(q,"$isa",w,"$asa"),null),4)
break}}},
jb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[P.ai]
H.w(b,"$isa",z,"$asa")
H.w(c,"$isa",z,"$asa")
z=b.length
y=2*z
x=new Float32Array(y)
for(w=x.length,v=c.length,u=0;u<z;u+=3){t=2*u
s=b[u]
if(t>=w)return H.f(x,t)
x[t]=s
s=t+1
r=u+1
if(r>=z)return H.f(b,r)
q=b[r]
if(s>=w)return H.f(x,s)
x[s]=q
q=t+2
s=u+2
if(s>=z)return H.f(b,s)
p=b[s]
if(q>=w)return H.f(x,q)
x[q]=p
p=t+3
q=b[u]
if(u>=v)return H.f(c,u)
o=c[u]
if(p>=w)return H.f(x,p)
x[p]=q+d*o
o=t+4
q=b[r]
if(r>=v)return H.f(c,r)
r=c[r]
if(o>=w)return H.f(x,o)
x[o]=q+d*r
t+=5
r=b[s]
if(s>=v)return H.f(c,s)
s=c[s]
if(t>=w)return H.f(x,t)
x[t]=r+d*s}a.aP(x)
n=C.d.P(y,3)
z=new Array(n)
z.fixed$length=Array
m=H.n(z,[P.D])
for(u=0;u<n;++u)C.a.h(m,u,u)
a.aN(m)
return a},
b7:{"^":"b;"},
bd:{"^":"b7;d,a,b,c",
aT:function(){return this.d},
j:function(a){var z,y,x,w
z=H.n(["{"+new H.dM(H.kL(this)).j(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.au(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a3(z,"\n")}},
fE:{"^":"dE;"},
fG:{"^":"b;0a,b",
bG:function(a,b,c){J.f9(this.a,b)
if(c>0)J.ft(this.a,b,c)},
c3:function(a,b,c,d,e,f,g,h){J.c8(this.a,34962,b)
J.fu(this.a,c,d,e,!1,g,h)}},
h5:{"^":"b;a,b,c,d,e"},
df:{"^":"b;a,b,c"},
dg:{"^":"b;a,b,c,d"},
ha:{"^":"b;a,b,c,d,e",
aR:function(a){switch($.ab().i(0,a).a){case"vec2":this.e.h(0,a,H.n([],[T.ag]))
break
case"vec3":this.e.h(0,a,H.n([],[T.x]))
break
case"vec4":this.e.h(0,a,H.n([],[T.aN]))
break
case"float":this.e.h(0,a,H.n([],[P.ai]))
break
case"uvec4":this.e.h(0,a,H.n([],[[P.a,P.D]]))
break}},
cr:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.x],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.df(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.J)(a),++w){v=a[w]
u=new T.x(new Float32Array(3))
u.G(v)
C.a.l(z,u)}},
cp:function(a,b){var z,y,x,w,v,u,t
z=[T.ag]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.ag(u))}},
cq:function(a,b){var z,y,x,w,v,u
z=[T.x]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new T.x(new Float32Array(3))
u.G(v)
x.l(y,u)}},
cs:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.x],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.dg(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.J)(a),++w){v=a[w]
u=new T.x(new Float32Array(3))
u.G(v)
C.a.l(z,u)}},
cz:function(){var z,y,x,w,v,u,t,s,r,q
z=this.b
y=this.c
x=new Array(z.length*6+y.length*8)
x.fixed$length=Array
w=H.n(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.J)(z),++u){t=z[u]
s=t.a
C.a.h(w,v,s)
r=t.b
C.a.h(w,v+1,r)
C.a.h(w,v+2,r)
r=t.c
C.a.h(w,v+3,r)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s)
v+=6}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){q=y[u]
x=q.a
C.a.h(w,v,x)
s=q.b
C.a.h(w,v+1,s)
C.a.h(w,v+2,s)
s=q.c
C.a.h(w,v+3,s)
C.a.h(w,v+4,s)
s=q.d
C.a.h(w,v+5,s)
C.a.h(w,v+6,s)
C.a.h(w,v+7,x)
v+=8}return w},
j:function(a){var z,y,x,w,v
z=H.n(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.au(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.ab().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a3(z," ")}},
dK:{"^":"b;a,b,c"},
dJ:{"^":"b;a,b,c"},
hF:{"^":"bd;d,a,b,c",p:{
dt:function(a){var z=P.a1(P.d,P.b)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.ex())
z.h(0,"cStencilFunc",$.eC())
return new G.hF(z,a,!1,!0)}}},
hH:{"^":"b7;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sak:function(a){this.cx=H.w(a,"$isa",[P.D],"$asa")},
aQ:function(a,b,c){var z,y
C.h.a0(a,0)
H.h(b,"$isak")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c8(z.a,34962,y)
J.cQ(z.a,34962,b,35048)},
cA:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cM(a,0)===105
if(z&&this.z===0)this.z=C.d.cn(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.ca(x.a))
this.aQ(a,b,c)
w=$.ab().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bG(x.a,this.e)
x.bG(0,v,z?1:0)
x.c3(0,y.i(0,a),v,w.aS(),5126,!1,0,0)},
aP:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.ca(y.a))
this.ch=a
this.aQ("aPosition",a,3)
x=$.ab().i(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bG(y.a,this.e)
y.bG(0,w,0)
y.c3(0,z.i(0,"aPosition"),w,x.aS(),5126,!1,0,0)},
aN:function(a){var z,y,x
H.w(a,"$isa",[P.D],"$asa")
z=this.d
this.y=J.ca(z.a)
y=this.ch.length
if(y<768){this.sak(new Uint8Array(H.bX(a)))
this.Q=5121}else if(y<196608){this.sak(new Uint16Array(H.bX(a)))
this.Q=5123}else{this.sak(new Uint32Array(H.bX(a)))
this.Q=5125}J.bG(z.a,this.e)
y=this.y
x=this.cx
J.c8(z.a,34963,y)
J.cQ(z.a,34963,x,35048)},
j:function(a){var z,y,x,w
z=this.cx
y=H.n(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.au(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")},
p:{
du:function(a,b,c,d){var z=P.d
return new G.hH(b,J.f2(b.a),c,P.a1(z,P.b),d,0,-1,P.a1(z,P.ak),"meshdata:"+a,!1,!0)}}},
hY:{"^":"bd;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ct:function(a,b){var z
if(typeof a!=="number")return a.e1()
if(typeof b!=="number")return H.aJ(b)
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
aT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.x(new Float32Array(3))
u.U(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.G(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.A(t)
x=!!y.$isaN
q=x?t.gc5(t):1
if(!!y.$isx){p=t.gX(t)
s=t.gS(t)
r=t.gac(t)
t=p}else if(x){p=t.gX(t)
s=t.gS(t)
r=t.gac(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aJ(t)
x=z[4]
if(typeof s!=="number")return H.aJ(s)
w=z[8]
if(typeof r!=="number")return H.aJ(r)
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
c.G(this.db)
c.bK(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
lw:{"^":"b;"},
ig:{"^":"b7;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cF:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cS(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cS(w.a,v,t))}},
cI:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.n([],[P.d])
x=H.n([],[P.d])
for(y=new H.au(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.aa(0,w))C.a.l(x,w)}for(z=this.x,z=P.jx(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isK",[P.d,P.b],"$asK")
z=Date.now()
for(y=new H.au(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cM(s,0)){case 117:if(w.aa(0,s)){r=b.i(0,s)
if(v.aa(0,s))H.aX("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ab().i(0,s)
if(q==null)H.P("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.t(r)
J.ce(x.a,p,r)}else if(!!J.A(r).$ishi)J.fr(x.a,p,r)
break
case"float":if(q.c===0){H.em(r)
J.fp(x.a,p,r)}else if(!!J.A(r).$isak)J.fq(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a9(r,"$isa6").a
J.cY(x.a,p,!1,s)}else if(!!J.A(r).$isak)J.cY(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.a9(r,"$isbv").a
J.cX(x.a,p,!1,s)}else if(!!J.A(r).$isak)J.cX(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cW(o,p,H.a9(r,"$isaN").a)
else J.cW(o,p,H.h(r,"$isak"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cV(o,p,H.a9(r,"$isx").a)
else J.cV(o,p,H.h(r,"$isak"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cU(o,p,H.a9(r,"$isag").a)
else J.cU(o,p,H.h(r,"$isak"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aJ(s)
J.cN(x.a,33984+s)
s=H.a9(r,"$isiC").cB()
J.cP(x.a,3553,s)
s=this.ch
J.ce(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aJ(s)
J.cN(x.a,33984+s)
s=H.a9(r,"$isiC").cB()
J.cP(x.a,34067,s)
s=this.ch
J.ce(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
default:H.aX("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.S(r,!0)
o=x.a
if(s)J.bm(o,2929)
else J.cb(o,2929)
break
case"cStencilFunc":H.a9(r,"$isdK")
s=r.a
o=x.a
if(s===1281)J.cb(o,2960)
else{J.bm(o,2960)
o=r.b
n=r.c
J.fl(x.a,s,o,n)}break
case"cDepthWrite":H.c_(r)
J.f3(x.a,r)
break
case"cBlendEquation":H.a9(r,"$isdJ")
s=r.a
o=x.a
if(s===1281)J.cb(o,3042)
else{J.bm(o,3042)
o=r.b
n=r.c
J.eY(x.a,o,n)
J.eX(x.a,s)}break}++t
break}}m=P.d9(0,0,0,Date.now()-new P.b1(z,!1).a,0,0)
""+t
m.j(0)},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bd],"$asa")
Date.now()
z=this.d
J.fs(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b_()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.J)(b),++x){w=b[x]
this.cL(w.a,w.aT())}y=this.Q
y.a2(0)
for(v=a.cy,v=new H.au(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cI()
if(u.length!==0)P.aa("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bG(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cA()
s=a.Q
r=a.z
if(t)J.eV(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f7(q,y,v,s,0,r)
else J.f6(q,y,v,s,0)}else{s=z.a
if(r>1)J.f5(s,y,0,v,r)
else J.f4(s,y,0,v)}if(t)J.fa(z.a)},
p:{
ih:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a5(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.f1(b.a)
t=G.dU(b.a,35633,x)
J.cO(b.a,u,t)
s=G.dU(b.a,35632,w)
J.cO(b.a,u,s)
if(v.length>0)J.fn(b.a,u,v,35980)
J.fj(b.a,u)
if(!H.c_(J.fi(b.a,u,35714)))H.P(J.fh(b.a,u))
z=new G.ig(b,c,d,u,P.cs(c.c,z),P.a1(z,P.b),P.a1(z,z),y,a,!1,!0)
z.cF(a,b,c,d)
return z}}},
F:{"^":"b;a,b,c",
aS:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ip:{"^":"b;a,0b,c,d,e,f,r,x",
co:function(a){var z,y,x,w
H.w(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.h(0,w,this.r);++this.r}C.a.aK(z)},
aO:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x)C.a.l(y,a[x])
C.a.aK(y)},
cG:function(a,b){this.b=this.cM(!0,H.w(a,"$isa",[P.d],"$asa"),b)},
aU:function(a){return this.cG(a,null)},
cM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.n(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){t=y[u]
s=$.ab().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.f(z,u)
q=z[u]
s=$.ab().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.ab().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.I(w,b)
C.a.l(w,"}")
return C.a.a3(w,"\n")},
p:{
dD:function(a){var z,y
z=P.d
y=[z]
return new G.ip(a,H.n([],y),H.n([],y),H.n([],y),H.n([],y),0,P.a1(z,P.D))}}},
dE:{"^":"b7;",
dM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.x(new Float32Array(3))
b.U(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
u=new Float32Array(3)
t=new T.x(u)
t.G(v)
s=a.a
u[0]=u[0]-s[0]
u[1]=u[1]-s[1]
u[2]=u[2]-s[2]
t.au(0)
r=b.bz(t)
r.au(0)
q=t.bz(r)
q.au(0)
p=r.ar(v)
o=q.ar(v)
v=t.ar(v)
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
at:function(a){return this.dM(a,null)}}}],["","",,Y,{"^":"",
hg:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.x]
y=P.d
x=new G.ha(!1,H.n([],[G.df]),H.n([],[G.dg]),H.n([],z),P.a1(y,[P.a,,]))
x.aR("aTexUV")
x.aR("aNormal")
w=P.a1(y,P.D)
v=a2.split("\n")
u=H.n([],z)
t=H.n([],z)
y=[T.ag]
s=H.n([],y)
r=Date.now()
q=P.dA("\\s+",!0,!1)
p=P.dA("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.J)(v),++n){m=v[n]
m.toString
l=H.l6(m,q," ")
k=H.l8(l,p,"",0)
l=k.length
if(l!==0){if(0>=l)return H.f(k,0)
l=k[0]==="#"}else l=!0
if(l)continue
j=k.split(" ")
l=j.length
if(0>=l)return H.f(j,0)
i=j[0]
if(J.S(i,"g")){if(1>=l)return H.f(j,1)
w.h(0,j[1],u.length)}else if(J.S(i,"v")){if(1>=l)return H.f(j,1)
i=P.aI(j[1],null)
if(2>=l)return H.f(j,2)
h=P.aI(j[2],null)
if(3>=l)return H.f(j,3)
l=P.aI(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(u,new T.x(g))}else if(J.S(i,"vt")){if(1>=l)return H.f(j,1)
i=P.aI(j[1],null)
if(2>=l)return H.f(j,2)
l=P.aI(j[2],null)
h=new Float32Array(2)
C.b.h(h,0,i)
C.b.h(h,1,l)
C.a.l(s,new T.ag(h))}else if(J.S(i,"vn")){if(1>=l)return H.f(j,1)
i=P.aI(j[1],null)
if(2>=l)return H.f(j,2)
h=P.aI(j[2],null)
if(3>=l)return H.f(j,3)
l=P.aI(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(t,new T.x(g))}else if(J.S(i,"f")){if(l!==4&&l!==5){H.aX("*** Error: face '"+k+"' not handled")
continue}f=H.n([],z)
e=H.n([],z)
d=H.n([],y)
for(c=1;l=j.length,c<l;++c){b=J.fk(j[c],"/")
for(;b.length<3;)C.a.l(b,"")
l=P.cG(b[0],null,null)
if(typeof l!=="number")return l.Z()
a=l-1
if(1>=b.length)return H.f(b,1)
if(J.S(b[1],""))a0=-1
else{if(1>=b.length)return H.f(b,1)
l=P.cG(b[1],null,null)
if(typeof l!=="number")return l.Z()
a0=l-1}if(2>=b.length)return H.f(b,2)
if(J.S(b[2],""))a1=-1
else{if(2>=b.length)return H.f(b,2)
l=P.cG(b[2],null,null)
if(typeof l!=="number")return l.Z()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.f(u,a)
C.a.l(f,u[a])}else C.a.l(f,new T.x(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.f(s,a0)
C.a.l(d,s[a0])}else{H.aX("problem uv "+c+" "+a0)
C.a.l(d,new T.ag(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.f(t,a1)
C.a.l(e,t[a1])}else{H.aX("problem normals "+c+" "+a1)
C.a.l(e,new T.x(new Float32Array(3)))}}if(l===4)x.cr(f)
else x.cs(f)
x.cq("aNormal",e)
x.cp("aTexUV",d)}}P.aa("loaded ("+P.d9(0,0,0,Date.now()-new P.b1(r,!1).a,0,0).j(0)+") "+x.j(0))
return x}}],["","",,R,{"^":"",
jz:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.j7("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ag(y,"float")
y.setProperty(x,"left","")
x=C.x.ag(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.E(z,v)}return z},
ie:{"^":"id;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dS:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aa("size change "+H.e(y)+" "+H.e(x))
this.dx.ct(y,x)
this.z=y
this.Q=x},"$1","gdR",4,0,24]},
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
y=J.m(z)
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
this.b.textContent=C.z.dY(y,2)+" fps"
C.q.cb(this.c,b)
x=C.d.P(30*C.z.dn(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.q.E(z,w)},
cJ:function(a){return this.cK(a,"")}}}],["","",,A,{"^":"",
en:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(e,"$isa",[G.bd],"$asa")
if(!b.c)return
z=b.dx
z.G(c)
y=b.d
z.bK(0,y)
x=b.cx
H.e(b)
w=C.a.gdL(e)
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
v.du(new T.bv(u))
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
C.a.l(e,b.ch)
a.cw(x,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.f(y,r)
A.en(a,y[r],z,d,e)}},
bP:{"^":"dE;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
j:function(a){return"NODE["+this.a+"]"}},
dB:{"^":"b7;d,e,f,a,b,c"},
id:{"^":"b7;",
cE:function(a,b,c){if(this.d==null)this.d=new G.h5(this.e,null,null,null,null)},
cv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eW(v.a,36160,z)
J.fv(v.a,this.x,this.y,x,w)
if(y!==0)J.eZ(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
if(!t.c)continue
v=t.d
if(!v.c)continue
s=t.e
C.a.l(s,new G.bd(P.a1(x,w),"transforms",!1,!0))
r=new T.a6(new Float32Array(16))
r.N()
for(q=t.f,p=q.length,o=0;o<q.length;q.length===p||(0,H.J)(q),++o)A.en(v,q[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
cu:function(){return this.cv(null)}}}],["","",,V,{}],["","",,D,{"^":"",
hA:function(a){var z,y,x,w
z=P.d
y=new P.O(0,$.E,[z])
x=new XMLHttpRequest()
C.y.dO(x,"GET",a)
w=W.bw
W.al(x,"loadend",H.k(new D.hB(new P.dS(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.y.ca(x,"")
return y},
hB:{"^":"l:25;a,b",
$1:function(a){H.h(a,"$isbw")
this.a.bv(0,H.aU(W.kq(this.b.response),{futureOr:1,type:P.d}))}},
hs:{"^":"b;a,b,c",
cC:function(a){var z,y
a=document
z=W.b5
y={func:1,ret:-1,args:[z]}
W.al(a,"keydown",H.k(new D.hu(this),y),!1,z)
W.al(a,"keyup",H.k(new D.hv(this),y),!1,z)},
p:{
ht:function(a){var z=P.D
z=new D.hs(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z))
z.cC(a)
return z}}},
hu:{"^":"l:13;a",
$1:function(a){var z
H.h(a,"$isb5")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hv:{"^":"l:13;a",
$1:function(a){var z
H.h(a,"$isb5")
z=this.a
z.a.bQ(0,a.which)
z.c.l(0,a.which)}},
hK:{"^":"b;a,b,c,d,e,f,r,x",
cD:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gbN(a)
x=H.o(y,0)
W.al(y.a,y.b,H.k(new D.hM(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbM(a)
y=H.o(x,0)
W.al(x.a,x.b,H.k(new D.hN(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbO(a)
x=H.o(y,0)
W.al(y.a,y.b,H.k(new D.hO(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbP(a)
x=H.o(z,0)
W.al(z.a,z.b,H.k(new D.hP(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hL:function(a){var z=P.D
z=new D.hK(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),0,0,0,0,0)
z.cD(a)
return z}}},
hM:{"^":"l:4;a",
$1:function(a){var z,y
H.h(a,"$isV")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.t(y.gbL(a).a)
z.x=H.t(y.gbL(a).b)
z.d=a.movementX
z.e=a.movementY}},
hN:{"^":"l:4;a",
$1:function(a){var z
H.h(a,"$isV")
a.preventDefault()
P.aa("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hO:{"^":"l:4;a",
$1:function(a){var z
H.h(a,"$isV")
a.preventDefault()
z=this.a
z.a.bQ(0,a.button)
z.c.l(0,a.button)}},
hP:{"^":"l:27;a",
$1:function(a){H.h(a,"$isaO")
a.preventDefault()
this.a.f=H.t(C.ad.gdB(a))}},
hX:{"^":"fE;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bD:function(a){var z,y
z=C.b.dG(H.w(a,"$isj",[P.b],"$asj"),0,new A.kN(),P.D)
if(typeof z!=="number")return H.aJ(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kN:{"^":"l:28;",
$2:function(a,b){var z,y
H.t(a)
z=J.ap(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bv:{"^":"b;a",
G:function(a){var z,y
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
j:function(a){return"[0] "+this.M(0).j(0)+"\n[1] "+this.M(1).j(0)+"\n[2] "+this.M(2).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bv){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bD(this.a)},
M:function(a){var z,y,x
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
return new T.x(z)},
du:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.G(a)
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
return m}},a6:{"^":"b;a",
G:function(a){var z,y
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
j:function(a){return"[0] "+this.M(0).j(0)+"\n[1] "+this.M(1).j(0)+"\n[2] "+this.M(2).j(0)+"\n[3] "+this.M(3).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.f(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a6){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bD(this.a)},
M:function(a){var z,y,x
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
return new T.aN(z)},
N:function(){var z=this.a
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
bK:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ag:{"^":"b;a",
j:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ag){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bD(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gS:function(a){return this.a[1]}},x:{"^":"b;a",
U:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
G:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bD(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gk:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbI:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
au:function(a){var z,y,x
z=Math.sqrt(this.gbI())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ar:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bz:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.x(new Float32Array(3))
z.U(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gX:function(a){return this.a[0]},
gS:function(a){return this.a[1]},
gac:function(a){return this.a[2]},
p:{
dO:function(a,b,c){var z=new T.x(new Float32Array(3))
z.U(a,b,c)
return z}}},aN:{"^":"b;a",
j:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aN){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bD(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gX:function(a){return this.a[0]},
gS:function(a){return this.a[1]},
gac:function(a){return this.a[2]},
gc5:function(a){return this.a[3]}}}],["","",,V,{"^":"",
es:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z={}
y=document
x=C.j.c8(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iv(0,0,x,w,y.createElement("div"),R.jz("blue","gray",90,30))
u.cH(x,"blue","gray")
t=H.h(C.j.av(y,"#webgl-canvas"),"$isch")
s=new G.fG(t)
y=P.d
x=P.b
v=(t&&C.J).c7(t,"webgl2",P.dp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.P(P.de('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fg(v))
if($.eo>0)P.aa("I: "+r)
J.f_(v,0,0,0,1)
J.bm(v,2929)
J.bm(v,2884)
v=new Float32Array(3)
r=D.ht(null)
q=D.hL(t)
p=new T.a6(new Float32Array(16))
p.N()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hX(25,10,0,0,new T.x(v),-0.02,r,q,p,new T.x(o),new T.x(n),new T.x(m),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.a6(new Float32Array(16))
v.N()
r=new T.a6(new Float32Array(16))
r.N()
k=new G.hY(l,50,1,0.1,1000,v,r,new T.a6(new Float32Array(16)),P.a1(y,x),"perspective",!1,!0)
k.aV()
y=H.n([],[A.dB])
j=new R.ie(t,k,null,s,y,17664,0,0,0,0,"main",!1,!0)
j.cE("main",s,null)
j.dS(null)
v=W.a0
W.al(window,"resize",H.k(j.gdR(),{func:1,ret:-1,args:[v]}),!1,v)
v=G.ih("solid",s,$.eR(),$.eQ())
r=H.n([k],[G.bd])
q=H.n([],[A.bP])
i=new A.dB(v,r,q,"solid",!1,!0)
C.a.l(y,i)
h=G.dt("wire")
h.d.h(0,"uColor",$.ez())
g=G.dt("normal")
g.d.h(0,"uColor",$.ey())
z.a=null
z.b=null
z.c=0
P.h7(H.n([D.hA("../asset/dragon/dragon.obj")],[[P.Z,P.b]]),null,!1,x).ax(new V.l0(z,i,h,g,new V.l_(z,l,j,u)),null)},
l_:{"^":"l:29;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cI(a7)
if(typeof a7!=="number")return a7.Z()
z=this.a
z.c=a7+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aH()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aH()
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
if(typeof v!=="number")return v.aH()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dq(y.id,-1.4707963267948965,1.4707963267948965)
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
y.at(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gbI())
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
w.c.a2(0)
w.b.a2(0)
x.e=0
x.d=0
x.f=0
x.c.a2(0)
x.b.a2(0)
z.b.c=$.eO().checked
z.a.c=$.eP().checked
this.c.cu()
C.ae.gdh(window).ax(this,-1)
this.d.cJ(z.c)}},
l0:{"^":"l:30;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=Y.hg(H.r(J.aZ(H.bj(a),0)))
P.aa(z)
y=this.b
x=y.d
w=x.d
x=x.e.x
v=G.du("../asset/dragon/dragon.obj",w,1,x)
u=z.d
v.aP(G.bN(u,null))
v.aN(z.cz())
G.jq(z,v)
P.aa(v)
t=[A.bP]
s=H.n([],t)
r=new Float32Array(9)
q=new T.a6(new Float32Array(16))
q.N()
p=new T.a6(new Float32Array(16))
p.N()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new A.bP(this.c,v,s,new T.bv(r),q,p,new T.x(o),new T.x(n),new T.x(m),new T.x(new Float32Array(3)),v.a,!1,!0)
s=this.a
s.a=l
r=new T.x(new Float32Array(3))
r.U(100,0,0)
l.at(r)
y=y.f
C.a.l(y,s.a)
k=G.jb(G.du("norm",w,1,x),G.bN(u,null),G.bN(H.bk(z.e.i(0,"aNormal"),"$isa",[T.x],"$asa"),null),0.05)
t=H.n([],t)
x=new Float32Array(9)
w=new T.a6(new Float32Array(16))
w.N()
u=new T.a6(new Float32Array(16))
u.N()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
j=new A.bP(this.d,k,t,new T.bv(x),w,u,new T.x(r),new T.x(q),new T.x(p),new T.x(new Float32Array(3)),k.a,!1,!0)
s.b=j
x=new T.x(new Float32Array(3))
x.U(100,0,0)
j.at(x)
C.a.l(y,s.b)
this.e.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.hn.prototype
if(typeof a=="boolean")return J.hm.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c4(a)}
J.aV=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c4(a)}
J.c1=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c4(a)}
J.kJ=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.be.prototype
return a}
J.kK=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.be.prototype
return a}
J.c2=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.be.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.b)return a
return J.c4(a)}
J.c3=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.be.prototype
return a}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.ac=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kJ(a).T(a,b)}
J.aZ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aV(a).i(a,b)}
J.eS=function(a,b,c){return J.c1(a).h(a,b,c)}
J.cM=function(a,b){return J.c2(a).a0(a,b)}
J.bF=function(a,b){return J.m(a).d4(a,b)}
J.eT=function(a,b,c){return J.m(a).d5(a,b,c)}
J.cN=function(a,b){return J.m(a).bh(a,b)}
J.eU=function(a,b,c,d){return J.m(a).de(a,b,c,d)}
J.cO=function(a,b,c){return J.m(a).bj(a,b,c)}
J.eV=function(a,b){return J.m(a).dj(a,b)}
J.c8=function(a,b,c){return J.m(a).bk(a,b,c)}
J.eW=function(a,b,c){return J.m(a).bm(a,b,c)}
J.cP=function(a,b,c){return J.m(a).bn(a,b,c)}
J.bG=function(a,b){return J.m(a).dm(a,b)}
J.eX=function(a,b){return J.m(a).bo(a,b)}
J.eY=function(a,b,c){return J.m(a).bp(a,b,c)}
J.cQ=function(a,b,c,d){return J.m(a).bq(a,b,c,d)}
J.eZ=function(a,b){return J.m(a).br(a,b)}
J.f_=function(a,b,c,d,e){return J.m(a).bs(a,b,c,d,e)}
J.f0=function(a,b){return J.kK(a).K(a,b)}
J.c9=function(a,b,c){return J.aV(a).dt(a,b,c)}
J.ca=function(a){return J.m(a).bw(a)}
J.f1=function(a){return J.m(a).bx(a)}
J.f2=function(a){return J.m(a).dA(a)}
J.f3=function(a,b){return J.m(a).bA(a,b)}
J.cb=function(a,b){return J.m(a).bB(a,b)}
J.f4=function(a,b,c,d){return J.m(a).bC(a,b,c,d)}
J.f5=function(a,b,c,d,e){return J.m(a).dC(a,b,c,d,e)}
J.f6=function(a,b,c,d,e){return J.m(a).bD(a,b,c,d,e)}
J.f7=function(a,b,c,d,e,f){return J.m(a).dD(a,b,c,d,e,f)}
J.f8=function(a,b){return J.c1(a).q(a,b)}
J.bm=function(a,b){return J.m(a).bE(a,b)}
J.f9=function(a,b){return J.m(a).bF(a,b)}
J.fa=function(a){return J.m(a).dF(a)}
J.fb=function(a,b){return J.m(a).C(a,b)}
J.fc=function(a){return J.m(a).gdi(a)}
J.ap=function(a){return J.A(a).gv(a)}
J.bH=function(a){return J.c1(a).gw(a)}
J.b_=function(a){return J.aV(a).gk(a)}
J.fd=function(a){return J.m(a).gdP(a)}
J.fe=function(a){return J.m(a).gdW(a)}
J.ff=function(a){return J.c3(a).gc5(a)}
J.bI=function(a){return J.c3(a).gX(a)}
J.cc=function(a){return J.c3(a).gS(a)}
J.cR=function(a){return J.c3(a).gac(a)}
J.cd=function(a,b){return J.m(a).Y(a,b)}
J.fg=function(a){return J.m(a).ad(a)}
J.fh=function(a,b){return J.m(a).aB(a,b)}
J.fi=function(a,b,c){return J.m(a).aC(a,b,c)}
J.cS=function(a,b,c){return J.m(a).aG(a,b,c)}
J.fj=function(a,b){return J.m(a).bJ(a,b)}
J.cT=function(a){return J.m(a).dQ(a)}
J.fk=function(a,b){return J.c2(a).ce(a,b)}
J.fl=function(a,b,c,d){return J.m(a).aL(a,b,c,d)}
J.fm=function(a){return J.c2(a).dX(a)}
J.bn=function(a){return J.A(a).j(a)}
J.fn=function(a,b,c,d){return J.m(a).dZ(a,b,c,d)}
J.fo=function(a){return J.c2(a).e_(a)}
J.fp=function(a,b,c){return J.m(a).bT(a,b,c)}
J.fq=function(a,b,c){return J.m(a).bU(a,b,c)}
J.ce=function(a,b,c){return J.m(a).bV(a,b,c)}
J.fr=function(a,b,c){return J.m(a).bW(a,b,c)}
J.cU=function(a,b,c){return J.m(a).bX(a,b,c)}
J.cV=function(a,b,c){return J.m(a).bY(a,b,c)}
J.cW=function(a,b,c){return J.m(a).bZ(a,b,c)}
J.cX=function(a,b,c,d){return J.m(a).c_(a,b,c,d)}
J.cY=function(a,b,c,d){return J.m(a).c0(a,b,c,d)}
J.fs=function(a,b){return J.m(a).c1(a,b)}
J.ft=function(a,b,c){return J.m(a).e0(a,b,c)}
J.fu=function(a,b,c,d,e,f,g){return J.m(a).c2(a,b,c,d,e,f,g)}
J.fv=function(a,b,c,d,e){return J.m(a).c4(a,b,c,d,e)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bJ.prototype
C.J=W.ch.prototype
C.x=W.fN.prototype
C.q=W.fU.prototype
C.K=W.fV.prototype
C.L=W.hc.prototype
C.j=W.hd.prototype
C.y=W.he.prototype
C.M=J.i.prototype
C.a=J.br.prototype
C.z=J.dj.prototype
C.d=J.dk.prototype
C.r=J.bs.prototype
C.h=J.bt.prototype
C.T=J.bu.prototype
C.b=H.hQ.prototype
C.n=H.hS.prototype
C.v=W.hT.prototype
C.C=J.hZ.prototype
C.D=W.ia.prototype
C.I=W.iB.prototype
C.w=J.be.prototype
C.ad=W.aO.prototype
C.ae=W.iN.prototype
C.f=new P.jM()
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
C.U=H.n(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.V=H.n(I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.X=H.n(I.aK([]),[P.C])
C.W=H.n(I.aK([]),[P.d])
C.t=H.n(I.aK(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.n(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Y=new G.F("vec3","vertex btangents",0)
C.e=new G.F("vec3","",0)
C.Z=new G.F("vec4","delta from light",0)
C.o=new G.F("","",0)
C.E=new G.F("vec3","vertex coordinates",0)
C.a_=new G.F("vec3","vertex binormals",0)
C.F=new G.F("vec4","for wireframe",0)
C.a0=new G.F("vec4","per vertex color",0)
C.a1=new G.F("float","for normal maps",0)
C.k=new G.F("mat4","",0)
C.a3=new G.F("mat4","",4)
C.a2=new G.F("mat4","",128)
C.c=new G.F("float","",0)
C.a4=new G.F("float","",4)
C.a5=new G.F("float","depth for shadowmaps",0)
C.i=new G.F("sampler2D","",0)
C.a6=new G.F("float","for bump maps",0)
C.a7=new G.F("vec2","texture uvs",0)
C.a8=new G.F("float","time since program start in sec",0)
C.l=new G.F("vec2","",0)
C.a9=new G.F("samplerCube","",0)
C.m=new G.F("vec4","",0)
C.aa=new G.F("vec3","vertex normals",0)
C.ab=new G.F("sampler2DShadow","",0)
C.G=new G.F("vec3","per vertex color",0)
C.H=new G.F("mat3","",0)
C.ac=new G.F("vec3","vertex tangents",0)
$.ad=0
$.b0=null
$.d0=null
$.cy=!1
$.eq=null
$.ei=null
$.ev=null
$.c0=null
$.c5=null
$.cF=null
$.aR=null
$.bf=null
$.bg=null
$.cz=!1
$.E=C.f
$.aj=null
$.ck=null
$.dc=null
$.db=null
$.d7=null
$.d6=null
$.d5=null
$.d4=null
$.eo=0
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
I.$lazy(y,x,w)}})(["lq","eB",function(){return H.ep("_$dart_dartClosure")},"m2","cJ",function(){return H.ep("_$dart_js")},"mN","eD",function(){return H.af(H.bT({
toString:function(){return"$receiver$"}}))},"mO","eE",function(){return H.af(H.bT({$method$:null,
toString:function(){return"$receiver$"}}))},"mP","eF",function(){return H.af(H.bT(null))},"mQ","eG",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mT","eJ",function(){return H.af(H.bT(void 0))},"mU","eK",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mS","eI",function(){return H.af(H.dL(null))},"mR","eH",function(){return H.af(function(){try{null.$method$}catch(z){return z.message}}())},"mW","eM",function(){return H.af(H.dL(void 0))},"mV","eL",function(){return H.af(function(){try{(void 0).$method$}catch(z){return z.message}}())},"n5","cK",function(){return P.iT()},"nl","bl",function(){return[]},"ln","eA",function(){return{}},"nc","eN",function(){return P.cs(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"nd","cL",function(){return P.a1(P.d,P.bp)},"mA","eC",function(){return new G.dK(1281,0,4294967295)},"lh","ex",function(){return new G.dJ(1281,1281,1281)},"nj","ab",function(){return P.dp(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.G,"aColorAlpha",C.a0,"aPosition",C.E,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.c,"iaColor",C.e,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.Z,"vCenter",C.F,"vDepth",C.a5,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.c,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1],P.d,G.F)},"lk","ey",function(){return T.dO(0,0,1)},"ll","ez",function(){return T.dO(1,1,0)},"ns","eR",function(){var z,y
z=G.dD("SolidColor")
y=[P.d]
z.co(H.n(["aPosition"],y))
z.aO(H.n(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aU(H.n(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nr","eQ",function(){var z,y
z=G.dD("SolidColorF")
y=[P.d]
z.aO(H.n(["uColor"],y))
z.aU(H.n(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"no","eO",function(){return H.a9(C.j.av(W.el(),"#normals"),"$iscm")},"np","eP",function(){return H.a9(C.j.av(W.el(),"#wires"),"$iscm")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[W.V]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.C,args:[,,]},{func:1,args:[,]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.R,args:[W.ae]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:P.R,args:[W.T,P.d,P.d,W.bA]},{func:1,ret:-1,args:[,]},{func:1,ret:P.C,args:[W.b5]},{func:1,args:[P.d]},{func:1,ret:P.C,args:[,P.Q]},{func:1,ret:P.C,args:[,],opt:[P.Q]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:P.R,args:[W.u]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.C,args:[P.G]},{func:1,args:[W.a0]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.C,args:[W.bw]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[W.aO]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.C,args:[[P.a,,]]},{func:1,ret:P.D,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
if(x==y)H.la(d||a)
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
Isolate.aK=a.aK
Isolate.bh=a.bh
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
if(typeof dartMainRunner==="function")dartMainRunner(V.es,[])
else V.es([])})})()
//# sourceMappingURL=wireframe2.dart.js.map
