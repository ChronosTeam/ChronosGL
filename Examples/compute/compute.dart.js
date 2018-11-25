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
b6.$isf=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ise)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="f"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.bY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.bY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.bY(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aM=function(){}
var dart=[["","",,H,{"^":"",jD:{"^":"f;a"}}],["","",,J,{"^":"",
c0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c_==null){H.iD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cT("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.c3()]
if(v!=null)return v
v=H.iH(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.c3(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
e:{"^":"f;",
E:function(a,b){return a===b},
gw:function(a){return H.aH(a)},
k:["bF",function(a){return"Instance of '"+H.aI(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fe:{"^":"e;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isM:1},
fg:{"^":"e;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaF:1},
bJ:{"^":"e;",
gw:function(a){return 0},
k:["bH",function(a){return String(a)}]},
fC:{"^":"bJ;"},
aK:{"^":"bJ;"},
aC:{"^":"bJ;",
k:function(a){var z=a[$.du()]
if(z==null)return this.bH(a)
return"JavaScript function for "+H.b(J.aS(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbe:1},
aA:{"^":"e;$ti",
n:function(a,b){H.C(b,H.t(a,0))
if(!!a.fixed$length)H.R(P.w("add"))
a.push(b)},
F:function(a,b){var z
H.u(b,"$isi",[H.t(a,0)],"$asi")
if(!!a.fixed$length)H.R(P.w("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a1:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.b(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
aP:function(a,b){var z,y
H.F(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.am(a))}return!1},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.at(a[z],b))return!0
return!1},
k:function(a){return P.bH(a,"[","]")},
gv:function(a){return new J.es(a,a.length,0,[H.t(a,0)])},
gw:function(a){return H.aH(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.aL(a,b))
return a[b]},
i:function(a,b,c){H.C(c,H.t(a,0))
if(!!a.immutable$list)H.R(P.w("indexed set"))
if(b>=a.length||b<0)throw H.d(H.aL(a,b))
a[b]=c},
$isp:1,
$asp:I.aM,
$isi:1,
$isa:1,
p:{
fd:function(a,b){return J.bI(H.m(a,[b]))},
bI:function(a){H.b0(a)
a.fixed$length=Array
return a},
jB:[function(a,b){return J.dQ(H.dp(a,"$isL"),H.dp(b,"$isL"))},"$2","ik",8,0,14]}},
jC:{"^":"aA;$ti"},
es:{"^":"f;a,b,c,0d,$ti",
saA:function(a){this.d=H.C(a,H.t(this,0))},
gu:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.ar(z))
x=this.c
if(x>=y){this.saA(null)
return!1}this.saA(z[x]);++this.c
return!0},
$isaz:1},
aV:{"^":"e;",
O:function(a,b){var z
H.iK(b)
if(typeof b!=="number")throw H.d(H.aZ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gag(b)
if(this.gag(a)===z)return 0
if(this.gag(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gag:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a4:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aN(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.aN(a,b)},
aN:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.w("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
aM:function(a,b){var z
if(a>0)z=this.cd(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cd:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.d(H.aZ(b))
return a>b},
$isL:1,
$asL:function(){return[P.H]},
$isa3:1,
$isH:1},
cz:{"^":"aV;",$isx:1},
ff:{"^":"aV;"},
aB:{"^":"e;",
a6:function(a,b){if(b>=a.length)throw H.d(H.aL(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.q(b)
if(typeof b!=="string")throw H.d(P.er(b,null,null))
return a+b},
bC:function(a,b,c){var z
if(c>a.length)throw H.d(P.bO(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bB:function(a,b){return this.bC(a,b,0)},
bE:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bg(b,null,null))
if(b>c)throw H.d(P.bg(b,null,null))
if(c>a.length)throw H.d(P.bg(c,null,null))
return a.substring(b,c)},
bD:function(a,b){return this.bE(a,b,null)},
cF:function(a){return a.toLowerCase()},
cm:function(a,b,c){if(c>a.length)throw H.d(P.bO(c,0,a.length,null,null))
return H.iL(a,b,c)},
O:function(a,b){var z
H.q(b)
if(typeof b!=="string")throw H.d(H.aZ(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gw:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.d(H.aL(a,b))
return a[b]},
$isp:1,
$asp:I.aM,
$isL:1,
$asL:function(){return[P.c]},
$isfB:1,
$isc:1}}],["","",,H,{"^":"",
fb:function(){return new P.bP("No element")},
fc:function(){return new P.bP("Too many elements")},
h_:function(a,b,c){H.u(a,"$isa",[c],"$asa")
H.F(b,{func:1,ret:P.x,args:[c,c]})
H.aX(a,0,J.av(a)-1,b,c)},
aX:function(a,b,c,d,e){H.u(a,"$isa",[e],"$asa")
H.F(d,{func:1,ret:P.x,args:[e,e]})
if(c-b<=32)H.fZ(a,b,c,d,e)
else H.fY(a,b,c,d,e)},
fZ:function(a,b,c,d,e){var z,y,x,w,v
H.u(a,"$isa",[e],"$asa")
H.F(d,{func:1,ret:P.x,args:[e,e]})
for(z=b+1,y=J.aN(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.V(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
fY:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.u(a,"$isa",[a2],"$asa")
H.F(a1,{func:1,ret:P.x,args:[a2,a2]})
z=C.c.V(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.V(b+a0,2)
v=w-z
u=w+z
t=J.aN(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.V(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.V(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.V(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.V(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.V(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.V(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.V(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.V(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.V(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.at(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.W()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.K()
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
if(typeof e!=="number")return e.W()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.K()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.K()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
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
H.aX(a,b,m-2,a1,a2)
H.aX(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.at(a1.$2(t.h(a,m),r),0);)++m
for(;J.at(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.aX(a,m,l,a1,a2)}else H.aX(a,m,l,a1,a2)},
cs:{"^":"i;"},
bf:{"^":"cs;$ti",
gv:function(a){return new H.cD(this,this.gj(this),0,[H.bZ(this,"bf",0)])},
ah:function(a,b){return this.bG(0,H.F(b,{func:1,ret:P.M,args:[H.bZ(this,"bf",0)]}))}},
cD:{"^":"f;a,b,c,0d,$ti",
saB:function(a){this.d=H.C(a,H.t(this,0))},
gu:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gj(z)
if(this.b!==x)throw H.d(P.am(z))
w=this.c
if(w>=x){this.saB(null)
return!1}this.saB(y.q(z,w));++this.c
return!0},
$isaz:1},
fn:{"^":"bf;a,b,$ti",
gj:function(a){return J.av(this.a)},
q:function(a,b){return this.b.$1(J.e_(this.a,b))},
$asbf:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
cU:{"^":"i;a,b,$ti",
gv:function(a){return new H.hg(J.b7(this.a),this.b,this.$ti)}},
hg:{"^":"az;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gu(z)))return!0
return!1},
gu:function(a){var z=this.a
return z.gu(z)}},
bd:{"^":"f;$ti"}}],["","",,H,{"^":"",
as:function(a){var z,y
z=H.q(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
iv:function(a){return init.types[H.Q(a)]},
iF:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.D(a).$isr},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aS(a)
if(typeof z!=="string")throw H.d(H.aZ(a))
return z},
aH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aI:function(a){return H.fD(a)+H.bk(H.aj(a),0,null)},
fD:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.G||!!z.$isaK){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.as(w.length>1&&C.f.a6(w,0)===36?C.f.bD(w,1):w)},
an:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fK:function(a){var z=H.an(a).getFullYear()+0
return z},
fI:function(a){var z=H.an(a).getMonth()+1
return z},
fE:function(a){var z=H.an(a).getDate()+0
return z},
fF:function(a){var z=H.an(a).getHours()+0
return z},
fH:function(a){var z=H.an(a).getMinutes()+0
return z},
fJ:function(a){var z=H.an(a).getSeconds()+0
return z},
fG:function(a){var z=H.an(a).getMilliseconds()+0
return z},
bo:function(a){throw H.d(H.aZ(a))},
j:function(a,b){if(a==null)J.av(a)
throw H.d(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
z=H.Q(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.bo(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.bg(b,"index",null)},
aZ:function(a){return new P.al(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.fA()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ds})
z.name=""}else z.toString=H.ds
return z},
ds:function(){return J.aS(this.dartException)},
R:function(a){throw H.d(a)},
ar:function(a){throw H.d(P.am(a))},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.iN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bK(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cI(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dw()
u=$.dx()
t=$.dy()
s=$.dz()
r=$.dC()
q=$.dD()
p=$.dB()
$.dA()
o=$.dF()
n=$.dE()
m=v.G(y)
if(m!=null)return z.$1(H.bK(H.q(y),m))
else{m=u.G(y)
if(m!=null){m.method="call"
return z.$1(H.bK(H.q(y),m))}else{m=t.G(y)
if(m==null){m=s.G(y)
if(m==null){m=r.G(y)
if(m==null){m=q.G(y)
if(m==null){m=p.G(y)
if(m==null){m=s.G(y)
if(m==null){m=o.G(y)
if(m==null){m=n.G(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cI(H.q(y),m))}}return z.$1(new H.hd(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cM()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.al(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cM()
return a},
ir:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
eD:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.D(d).$isa){z.$reflectionInfo=d
x=H.fO(z).r}else x=d
w=e?Object.create(new H.h0().constructor.prototype):Object.create(new H.bA(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.W
if(typeof u!=="number")return u.D()
$.W=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cm(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.iv,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cl:H.bB
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cm(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eA:function(a,b,c,d){var z=H.bB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eC(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eA(y,!w,z,b)
if(y===0){w=$.W
if(typeof w!=="number")return w.D()
$.W=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aw
if(v==null){v=H.ba("self")
$.aw=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.W
if(typeof w!=="number")return w.D()
$.W=w+1
t+=w
w="return function("+t+"){return this."
v=$.aw
if(v==null){v=H.ba("self")
$.aw=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
eB:function(a,b,c,d){var z,y
z=H.bB
y=H.cl
switch(b?-1:a){case 0:throw H.d(H.fT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eC:function(a,b){var z,y,x,w,v,u,t,s
z=$.aw
if(z==null){z=H.ba("self")
$.aw=z}y=$.ck
if(y==null){y=H.ba("receiver")
$.ck=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eB(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.W
if(typeof y!=="number")return y.D()
$.W=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.W
if(typeof y!=="number")return y.D()
$.W=y+1
return new Function(z+y+"}")()},
bY:function(a,b,c,d,e,f,g){return H.eD(a,b,H.Q(c),d,!!e,!!f,g)},
q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a_(a,"String"))},
ip:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a_(a,"double"))},
iK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a_(a,"num"))},
bX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a_(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a_(a,"int"))},
c1:function(a,b){throw H.d(H.a_(a,H.as(H.q(b).substring(3))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.D(a)[b])return a
H.c1(a,b)},
dp:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.D(a)[b])return a
H.c1(a,b)},
b0:function(a){if(a==null)return a
if(!!J.D(a).$isa)return a
throw H.d(H.a_(a,"List<dynamic>"))},
iG:function(a,b){var z
if(a==null)return a
z=J.D(a)
if(!!z.$isa)return a
if(z[b])return a
H.c1(a,b)},
de:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Q(z)]
else return a.$S()}return},
df:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.de(J.D(a))
if(z==null)return!1
return H.d9(z,null,b,null)},
F:function(a,b){var z,y
if(a==null)return a
if($.bV)return a
$.bV=!0
try{if(H.df(a,b))return a
z=H.c2(b)
y=H.a_(a,z)
throw H.d(y)}finally{$.bV=!1}},
da:function(a){var z,y
z=J.D(a)
if(!!z.$isy){y=H.de(z)
if(y!=null)return H.c2(y)
return"Closure"}return H.aI(a)},
iM:function(a){throw H.d(new P.eI(H.q(a)))},
dj:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
aj:function(a){if(a==null)return
return a.$ti},
kX:function(a,b,c){return H.aq(a["$as"+H.b(c)],H.aj(b))},
aO:function(a,b,c,d){var z
H.q(c)
H.Q(d)
z=H.aq(a["$as"+H.b(c)],H.aj(b))
return z==null?null:z[d]},
bZ:function(a,b,c){var z
H.q(b)
H.Q(c)
z=H.aq(a["$as"+H.b(b)],H.aj(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.Q(b)
z=H.aj(a)
return z==null?null:z[b]},
c2:function(a){return H.ai(a,null)},
ai:function(a,b){var z,y
H.u(b,"$isa",[P.c],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.as(a[0].builtin$cls)+H.bk(a,1,b)
if(typeof a=="function")return H.as(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.b(b[y])}if('func' in a)return H.ij(a,b)
if('futureOr' in a)return"FutureOr<"+H.ai("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ij:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.c]
H.u(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.n(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.f.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.f)t+=" extends "+H.ai(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ai(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ai(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ai(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.iq(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.q(z[l])
n=n+m+H.ai(i[h],b)+(" "+H.b(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bk:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isa",[P.c],"$asa")
if(a==null)return""
z=new P.bQ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ai(u,c)}return"<"+z.k(0)+">"},
aq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bl:function(a,b,c,d){var z,y
H.q(b)
H.b0(c)
H.q(d)
if(a==null)return!1
z=H.aj(a)
y=J.D(a)
if(y[b]==null)return!1
return H.dc(H.aq(y[d],z),null,c,null)},
b1:function(a,b,c,d){H.q(b)
H.b0(c)
H.q(d)
if(a==null)return a
if(H.bl(a,b,c,d))return a
throw H.d(H.ey(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.as(b.substring(3))+H.bk(c,0,null),init.mangledGlobalNames)))},
u:function(a,b,c,d){H.q(b)
H.b0(c)
H.q(d)
if(a==null)return a
if(H.bl(a,b,c,d))return a
throw H.d(H.a_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.as(b.substring(3))+H.bk(c,0,null),init.mangledGlobalNames)))},
dc:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.O(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.O(a[y],b,c[y],d))return!1
return!0},
kU:function(a,b,c){return a.apply(b,H.aq(J.D(b)["$as"+H.b(c)],H.aj(b)))},
dm:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="f"||a.builtin$cls==="aF"||a===-1||a===-2||H.dm(z)}return!1},
dd:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="f"||b.builtin$cls==="aF"||b===-1||b===-2||H.dm(b)
if(b==null||b===-1||b.builtin$cls==="f"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.df(a,b)}z=J.D(a).constructor
y=H.aj(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.O(z,null,b,null)},
C:function(a,b){if(a!=null&&!H.dd(a,b))throw H.d(H.a_(a,H.c2(b)))
return a},
O:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="f"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="f"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.O(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="aF")return!0
if('func' in c)return H.d9(a,b,c,d)
if('func' in a)return c.builtin$cls==="be"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.O("type" in a?a.type:null,b,x,d)
else if(H.O(a,b,x,d))return!0
else{if(!('$is'+"f4" in y.prototype))return!1
w=y.prototype["$as"+"f4"]
v=H.aq(w,z?a.slice(1):null)
return H.O(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dc(H.aq(r,z),b,u,d)},
d9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.O(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.O(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.O(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.O(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.iJ(m,b,l,d)},
iJ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.O(c[w],d,a[w],b))return!1}return!0},
kW:function(a,b,c){Object.defineProperty(a,H.q(b),{value:c,enumerable:false,writable:true,configurable:true})},
iH:function(a){var z,y,x,w,v,u
z=H.q($.dk.$1(a))
y=$.bm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.q($.db.$2(a,z))
if(z!=null){y=$.bm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bq(x)
$.bm[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bp[z]=x
return x}if(v==="-"){u=H.bq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dq(a,x)
if(v==="*")throw H.d(P.cT(z))
if(init.leafTags[z]===true){u=H.bq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dq(a,x)},
dq:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c0(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bq:function(a){return J.c0(a,!1,null,!!a.$isr)},
iI:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bq(z)
else return J.c0(z,c,null,null)},
iD:function(){if(!0===$.c_)return
$.c_=!0
H.iE()},
iE:function(){var z,y,x,w,v,u,t,s
$.bm=Object.create(null)
$.bp=Object.create(null)
H.iz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dr.$1(v)
if(u!=null){t=H.iI(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iz:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.ao(C.H,H.ao(C.M,H.ao(C.t,H.ao(C.t,H.ao(C.L,H.ao(C.I,H.ao(C.J(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dk=new H.iA(v)
$.db=new H.iB(u)
$.dr=new H.iC(t)},
ao:function(a,b){return a(b)||b},
iL:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fN:{"^":"f;a,b,c,d,e,f,r,0x",p:{
fO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bI(z)
y=z[0]
x=z[1]
return new H.fN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
h6:{"^":"f;a,b,c,d,e,f",
G:function(a){var z,y,x
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
Z:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.m([],[P.c])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.h6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fz:{"^":"G;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cI:function(a,b){return new H.fz(a,b==null?null:b.method)}}},
fh:{"^":"G;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bK:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fh(a,y,z?null:b.receiver)}}},
hd:{"^":"G;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
iN:{"^":"y:1;a",
$1:function(a){if(!!J.D(a).$isG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
y:{"^":"f;",
k:function(a){return"Closure '"+H.aI(this).trim()+"'"},
gbx:function(){return this},
$isbe:1,
gbx:function(){return this}},
cP:{"^":"y;"},
h0:{"^":"cP;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.as(z)+"'"}},
bA:{"^":"cP;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aH(this.a)
else y=typeof z!=="object"?J.au(z):H.aH(z)
return(y^H.aH(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aI(z)+"'")},
p:{
bB:function(a){return a.a},
cl:function(a){return a.c},
ba:function(a){var z,y,x,w,v
z=new H.bA("self","target","receiver","name")
y=J.bI(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
h7:{"^":"G;a",
k:function(a){return this.a},
p:{
a_:function(a,b){return new H.h7("TypeError: "+H.b(P.bc(a))+": type '"+H.da(a)+"' is not a subtype of type '"+b+"'")}}},
ex:{"^":"G;a",
k:function(a){return this.a},
p:{
ey:function(a,b){return new H.ex("CastError: "+H.b(P.bc(a))+": type '"+H.da(a)+"' is not a subtype of type '"+b+"'")}}},
fS:{"^":"G;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
fT:function(a){return new H.fS(a)}}},
cA:{"^":"cE;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gC:function(a){return new H.aE(this,[H.t(this,0)])},
a0:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c0(z,b)}else{y=this.cz(b)
return y}},
cz:function(a){var z=this.d
if(z==null)return!1
return this.af(this.aa(z,J.au(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a_(w,b)
x=y==null?null:y.b
return x}else return this.cA(b)},
cA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aa(z,J.au(a)&0x3ffffff)
x=this.af(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ab()
this.b=z}this.aC(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ab()
this.c=y}this.aC(y,b,c)}else{x=this.d
if(x==null){x=this.ab()
this.d=x}w=J.au(b)&0x3ffffff
v=this.aa(x,w)
if(v==null)this.ae(x,w,[this.a5(b,c)])
else{u=this.af(v,b)
if(u>=0)v[u].b=c
else v.push(this.a5(b,c))}}},
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.am(this))
z=z.c}},
aC:function(a,b,c){var z
H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
z=this.a_(a,b)
if(z==null)this.ae(a,b,this.a5(b,c))
else z.b=c},
aL:function(){this.r=this.r+1&67108863},
a5:function(a,b){var z,y
z=new H.fi(H.C(a,H.t(this,0)),H.C(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aL()
return z},
af:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.at(a[y].a,b))return y
return-1},
k:function(a){return P.cF(this)},
a_:function(a,b){return a[b]},
aa:function(a,b){return a[b]},
ae:function(a,b,c){a[b]=c},
c1:function(a,b){delete a[b]},
c0:function(a,b){return this.a_(a,b)!=null},
ab:function(){var z=Object.create(null)
this.ae(z,"<non-identifier-key>",z)
this.c1(z,"<non-identifier-key>")
return z},
$iscB:1},
fi:{"^":"f;a,b,0c,0d"},
aE:{"^":"cs;a,$ti",
gj:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.fj(z,z.r,this.$ti)
y.c=z.e
return y}},
fj:{"^":"f;a,b,0c,0d,$ti",
saD:function(a){this.d=H.C(a,H.t(this,0))},
gu:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.am(z))
else{z=this.c
if(z==null){this.saD(null)
return!1}else{this.saD(z.a)
this.c=this.c.c
return!0}}},
$isaz:1},
iA:{"^":"y:1;a",
$1:function(a){return this.a(a)}},
iB:{"^":"y:7;a",
$2:function(a,b){return this.a(a,b)}},
iC:{"^":"y:8;a",
$1:function(a){return this.a(H.q(a))}}}],["","",,H,{"^":"",
iq:function(a){return J.fd(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
br:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bj:function(a){var z,y
if(!!J.D(a).$isp)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aL(b,a))},
fu:{"^":"e;",$ish8:1,"%":"DataView;ArrayBufferView;bN|d_|d0|cG|d1|d2|a9"},
bN:{"^":"fu;",
gj:function(a){return a.length},
$isp:1,
$asp:I.aM,
$isr:1,
$asr:I.aM},
cG:{"^":"d0;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ip(c)
H.a0(b,a,a.length)
a[b]=c},
$asbd:function(){return[P.a3]},
$ask:function(){return[P.a3]},
$isi:1,
$asi:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
"%":"Float64Array"},
a9:{"^":"d2;",
i:function(a,b,c){H.Q(c)
H.a0(b,a,a.length)
a[b]=c},
$asbd:function(){return[P.x]},
$ask:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
$isa:1,
$asa:function(){return[P.x]}},
ft:{"^":"cG;",$isbG:1,"%":"Float32Array"},
jL:{"^":"a9;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
jM:{"^":"a9;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$isjA:1,
"%":"Int32Array"},
jN:{"^":"a9;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
jO:{"^":"a9;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
fv:{"^":"a9;",
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$isky:1,
"%":"Uint32Array"},
jP:{"^":"a9;",
gj:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
jQ:{"^":"a9;",
gj:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$iskz:1,
"%":";Uint8Array"},
d_:{"^":"bN+k;"},
d0:{"^":"d_+bd;"},
d1:{"^":"bN+k;"},
d2:{"^":"d1+bd;"}}],["","",,P,{"^":"",
cC:function(a,b,c){H.b0(a)
return H.u(H.ir(a,new H.cA(0,0,[b,c])),"$iscB",[b,c],"$ascB")},
a7:function(a,b){return new H.cA(0,0,[a,b])},
aW:function(a,b,c,d){return new P.hz(0,0,[d])},
fa:function(a,b,c){var z,y
if(P.bW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.c])
y=$.aP()
C.a.n(y,a)
try{P.il(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.cO(b,H.iG(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bH:function(a,b,c){var z,y,x
if(P.bW(a))return b+"..."+c
z=new P.bQ(b)
y=$.aP()
C.a.n(y,a)
try{x=z
x.a=P.cO(x.gL(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gL()+c
y=z.gL()
return y.charCodeAt(0)==0?y:y},
bW:function(a){var z,y
for(z=0;y=$.aP(),z<y.length;++z)if(a===y[z])return!0
return!1},
il:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[P.c],"$asa")
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gu(z))
C.a.n(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gu(z);++x
if(!z.t()){if(x<=4){C.a.n(b,H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gu(z);++x
for(;z.t();t=s,s=r){r=z.gu(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.n(b,"...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.n(b,q)
C.a.n(b,u)
C.a.n(b,v)},
bL:function(a,b){var z,y,x
z=P.aW(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.ar)(a),++x)z.n(0,H.C(a[x],b))
return z},
cF:function(a){var z,y,x
z={}
if(P.bW(a))return"{...}"
y=new P.bQ("")
try{C.a.n($.aP(),a)
x=y
x.a=x.gL()+"{"
z.a=!0
J.e2(a,new P.fm(z,y))
z=y
z.a=z.gL()+"}"}finally{z=$.aP()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gL()
return z.charCodeAt(0)==0?z:z},
hz:{"^":"hu;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){return P.cZ(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.n(z[b],"$isbT")!=null}else{y=this.c_(b)
return y}},
c_:function(a){var z=this.d
if(z==null)return!1
return this.aJ(this.c3(z,a),a)>=0},
n:function(a,b){var z,y
H.C(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bU()
this.b=z}return this.aE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bU()
this.c=y}return this.aE(y,b)}else return this.bY(0,b)},
bY:function(a,b){var z,y,x
H.C(b,H.t(this,0))
z=this.d
if(z==null){z=P.bU()
this.d=z}y=this.aH(b)
x=z[y]
if(x==null)z[y]=[this.ac(b)]
else{if(this.aJ(x,b)>=0)return!1
x.push(this.ac(b))}return!0},
aE:function(a,b){H.C(b,H.t(this,0))
if(H.n(a[b],"$isbT")!=null)return!1
a[b]=this.ac(b)
return!0},
aG:function(){this.r=this.r+1&67108863},
ac:function(a){var z,y
z=new P.bT(H.C(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aG()
return z},
aH:function(a){return J.au(a)&0x3ffffff},
c3:function(a,b){return a[this.aH(b)]},
aJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.at(a[y].a,b))return y
return-1},
p:{
bU:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bT:{"^":"f;a,0b,0c"},
hA:{"^":"f;a,b,0c,0d,$ti",
saF:function(a){this.d=H.C(a,H.t(this,0))},
gu:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.am(z))
else{z=this.c
if(z==null){this.saF(null)
return!1}else{this.saF(H.C(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaz:1,
p:{
cZ:function(a,b,c){var z=new P.hA(a,b,[c])
z.c=a.e
return z}}},
hu:{"^":"fU;"},
fk:{"^":"hB;",$isi:1,$isa:1},
k:{"^":"f;$ti",
gv:function(a){return new H.cD(a,this.gj(a),0,[H.aO(this,a,"k",0)])},
q:function(a,b){return this.h(a,b)},
cv:function(a,b,c,d){var z,y,x
H.C(b,d)
H.F(c,{func:1,ret:d,args:[d,H.aO(this,a,"k",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.d(P.am(a))}return y},
k:function(a){return P.bH(a,"[","]")}},
cE:{"^":"I;"},
fm:{"^":"y:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
I:{"^":"f;$ti",
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[H.aO(this,a,"I",0),H.aO(this,a,"I",1)]})
for(z=J.b7(this.gC(a));z.t();){y=z.gu(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.av(this.gC(a))},
k:function(a){return P.cF(a)},
$isB:1},
fV:{"^":"f;$ti",
F:function(a,b){var z
for(z=J.b7(H.u(b,"$isi",this.$ti,"$asi"));z.t();)this.n(0,z.gu(z))},
k:function(a){return P.bH(this,"{","}")},
$isi:1,
$isk7:1},
fU:{"^":"fV;"},
hB:{"^":"f+k;"}}],["","",,P,{"^":"",
eU:function(a){if(a instanceof H.y)return a.k(0)
return"Instance of '"+H.aI(a)+"'"},
bc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aS(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eU(a)},
eW:function(a){return new P.hq(a)},
ak:function(a){H.br(H.b(a))},
M:{"^":"f;"},
"+bool":0,
bb:{"^":"f;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bb&&this.a===b.a&&!0},
O:function(a,b){return C.c.O(this.a,H.n(b,"$isbb").a)},
gw:function(a){var z=this.a
return(z^C.c.aM(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.eJ(H.fK(this))
y=P.aT(H.fI(this))
x=P.aT(H.fE(this))
w=P.aT(H.fF(this))
v=P.aT(H.fH(this))
u=P.aT(H.fJ(this))
t=P.eK(H.fG(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isL:1,
$asL:function(){return[P.bb]},
p:{
eJ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aT:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"H;"},
"+double":0,
ax:{"^":"f;a",
K:function(a,b){return C.c.K(this.a,H.n(b,"$isax").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.c.O(this.a,H.n(b,"$isax").a)},
k:function(a){var z,y,x,w,v
z=new P.eR()
y=this.a
if(y<0)return"-"+new P.ax(0-y).k(0)
x=z.$1(C.c.V(y,6e7)%60)
w=z.$1(C.c.V(y,1e6)%60)
v=new P.eQ().$1(y%1e6)
return""+C.c.V(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
$isL:1,
$asL:function(){return[P.ax]},
p:{
eP:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eQ:{"^":"y:3;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eR:{"^":"y:3;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
G:{"^":"f;"},
fA:{"^":"G;",
k:function(a){return"Throw of null."}},
al:{"^":"G;a,b,c,d",
ga8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga7:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.ga8()+y+x
if(!this.a)return w
v=this.ga7()
u=P.bc(this.b)
return w+v+": "+H.b(u)},
p:{
er:function(a,b,c){return new P.al(!0,a,b,c)}}},
cJ:{"^":"al;e,f,a,b,c,d",
ga8:function(){return"RangeError"},
ga7:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bg:function(a,b,c){return new P.cJ(null,null,!0,a,b,"Value not in range")},
bO:function(a,b,c,d,e){return new P.cJ(b,c,!0,a,d,"Invalid value")}}},
f9:{"^":"al;e,j:f>,a,b,c,d",
ga8:function(){return"RangeError"},
ga7:function(){var z,y
z=H.Q(this.b)
if(typeof z!=="number")return z.W()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.b(y)},
p:{
z:function(a,b,c,d,e){var z=H.Q(e==null?J.av(b):e)
return new P.f9(b,z,!0,a,c,"Index out of range")}}},
he:{"^":"G;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
w:function(a){return new P.he(a)}}},
hc:{"^":"G;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cT:function(a){return new P.hc(a)}}},
bP:{"^":"G;a",
k:function(a){return"Bad state: "+this.a},
p:{
cN:function(a){return new P.bP(a)}}},
eE:{"^":"G;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bc(z))+"."},
p:{
am:function(a){return new P.eE(a)}}},
cM:{"^":"f;",
k:function(a){return"Stack Overflow"},
$isG:1},
eI:{"^":"G;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hq:{"^":"f;a",
k:function(a){return"Exception: "+this.a}},
be:{"^":"f;"},
x:{"^":"H;"},
"+int":0,
i:{"^":"f;$ti",
ah:["bG",function(a,b){var z=H.bZ(this,"i",0)
return new H.cU(this,H.F(b,{func:1,ret:P.M,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gv(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.R(P.bO(b,0,null,"index",null))
for(z=this.gv(this),y=0;z.t();){x=z.gu(z)
if(b===y)return x;++y}throw H.d(P.z(b,this,"index",null,y))},
k:function(a){return P.fa(this,"(",")")}},
az:{"^":"f;$ti"},
a:{"^":"f;$ti",$isi:1},
"+List":0,
B:{"^":"f;$ti"},
aF:{"^":"f;",
gw:function(a){return P.f.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"f;",$isL:1,
$asL:function(){return[P.H]}},
"+num":0,
f:{"^":";",
E:function(a,b){return this===b},
gw:function(a){return H.aH(this)},
k:function(a){return"Instance of '"+H.aI(this)+"'"},
toString:function(){return this.k(this)}},
c:{"^":"f;",$isL:1,
$asL:function(){return[P.c]},
$isfB:1},
"+String":0,
bQ:{"^":"f;L:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cO:function(a,b,c){var z=J.b7(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gu(z))
while(z.t())}else{a+=H.b(z.gu(z))
for(;z.t();)a=a+c+H.b(z.gu(z))}return a}}}}],["","",,W,{"^":"",
eS:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.n).H(z,a,b,c)
y.toString
z=W.o
z=new H.cU(new W.T(y),H.F(new W.eT(),{func:1,ret:P.M,args:[z]}),[z])
x=z.gv(z)
if(!x.t())H.R(H.fb())
w=x.gu(x)
if(x.t())H.R(H.fc())
return H.n(w,"$isX")},
ay:function(a){var z,y,x
z="element tag unavailable"
try{y=J.e5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.b2(x)}return z},
bi:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cY:function(a,b,c,d){var z,y
z=W.bi(W.bi(W.bi(W.bi(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
E:{"^":"X;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
iO:{"^":"e;0j:length=","%":"AccessibleNodeList"},
ep:{"^":"E;",
k:function(a){return String(a)},
$isep:1,
"%":"HTMLAnchorElement"},
iP:{"^":"E;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cj:{"^":"E;",$iscj:1,"%":"HTMLBaseElement"},
ev:{"^":"e;","%":";Blob"},
b9:{"^":"E;",$isb9:1,"%":"HTMLBodyElement"},
bC:{"^":"E;0m:height=,0l:width=",
by:function(a,b,c){var z=this.c4(a,b,P.im(c,null))
return z},
c4:function(a,b,c){return a.getContext(b,c)},
$isbC:1,
"%":"HTMLCanvasElement"},
iT:{"^":"e;",
a2:function(a){return P.P(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
iU:{"^":"o;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
eF:{"^":"bD;",$iseF:1,"%":"CSSNumericValue|CSSUnitValue"},
iV:{"^":"eH;0j:length=","%":"CSSPerspective"},
a4:{"^":"e;",$isa4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
iW:{"^":"hk;0j:length=",
am:function(a,b){var z=this.c5(a,this.bZ(a,b))
return z==null?"":z},
bZ:function(a,b){var z,y
z=$.dt()
y=z[b]
if(typeof y==="string")return y
y=this.ce(a,b)
z[b]=y
return y},
ce:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eL()+b
if(z in a)return z
return b},
c5:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eG:{"^":"f;",
gm:function(a){return this.am(a,"height")},
gl:function(a){return this.am(a,"width")}},
bD:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
eH:{"^":"e;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
iY:{"^":"bD;0j:length=","%":"CSSTransformValue"},
iZ:{"^":"bD;0j:length=","%":"CSSUnparsedValue"},
j0:{"^":"e;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
bE:{"^":"E;",$isbE:1,"%":"HTMLDivElement"},
eM:{"^":"o;",
cg:function(a,b){return a.adoptNode(b)},
be:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
j1:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
eN:{"^":"e;",
cp:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
j2:{"^":"hm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c,"$isJ",[P.H],"$asJ")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[[P.J,P.H]]},
$isr:1,
$asr:function(){return[[P.J,P.H]]},
$ask:function(){return[[P.J,P.H]]},
$isi:1,
$asi:function(){return[[P.J,P.H]]},
$isa:1,
$asa:function(){return[[P.J,P.H]]},
$asl:function(){return[[P.J,P.H]]},
"%":"ClientRectList|DOMRectList"},
eO:{"^":"e;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gl(a))+" x "+H.b(this.gm(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.bl(b,"$isJ",[P.H],"$asJ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.h(b)
z=this.gl(a)===z.gl(b)&&this.gm(a)===z.gm(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.cY(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gl(a)&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
$isJ:1,
$asJ:function(){return[P.H]},
"%":";DOMRectReadOnly"},
j3:{"^":"ho;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.q(c)
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.c]},
$isr:1,
$asr:function(){return[P.c]},
$ask:function(){return[P.c]},
$isi:1,
$asi:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asl:function(){return[P.c]},
"%":"DOMStringList"},
j4:{"^":"e;0j:length=","%":"DOMTokenList"},
X:{"^":"o;0cD:tagName=",
gcj:function(a){return new W.hp(a)},
k:function(a){return a.localName},
H:["a3",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cu
if(z==null){z=H.m([],[W.Y])
y=new W.cH(z)
C.a.n(z,W.cX(null))
C.a.n(z,W.d5())
$.cu=y
d=y}else d=z
z=$.ct
if(z==null){z=new W.d8(d)
$.ct=z
c=z}else{z.a=d
c=z}}if($.a2==null){z=document
y=z.implementation
y=(y&&C.E).cp(y,"")
$.a2=y
$.bF=y.createRange()
y=$.a2
y.toString
y=y.createElement("base")
H.n(y,"$iscj")
y.href=z.baseURI
z=$.a2.head;(z&&C.F).N(z,y)}z=$.a2
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.n(y,"$isb9")}z=$.a2
if(!!this.$isb9)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.a2.body;(z&&C.n).N(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.P,a.tagName)){z=$.bF;(z&&C.x).bz(z,x)
z=$.bF
w=(z&&C.x).cn(z,b)}else{x.innerHTML=b
w=$.a2.createDocumentFragment()
for(z=J.h(w);y=x.firstChild,y!=null;)z.N(w,y)}z=$.a2.body
if(x==null?z!=null:x!==z)J.cd(x)
c.aq(w)
C.o.cg(document,w)
return w},function(a,b,c){return this.H(a,b,c,null)},"co",null,null,"gcP",5,5,null],
bA:function(a,b,c,d){a.textContent=null
this.N(a,this.H(a,b,c,d))},
R:function(a,b){return this.bA(a,b,null,null)},
P:function(a,b){return a.getAttribute(b)},
c8:function(a,b){return a.removeAttribute(b)},
$isX:1,
"%":";Element"},
eT:{"^":"y:9;",
$1:function(a){return!!J.D(H.n(a,"$iso")).$isX}},
j6:{"^":"E;0m:height=,0l:width=","%":"HTMLEmbedElement"},
eV:{"^":"e;","%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
N:{"^":"e;","%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DOMWindow|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Window|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;d3|d4|d6|d7"},
a5:{"^":"ev;",$isa5:1,"%":"File"},
jn:{"^":"hs;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isa5")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$ask:function(){return[W.a5]},
$isi:1,
$asi:function(){return[W.a5]},
$isa:1,
$asa:function(){return[W.a5]},
$asl:function(){return[W.a5]},
"%":"FileList"},
jo:{"^":"N;0j:length=","%":"FileWriter"},
jr:{"^":"E;0j:length=","%":"HTMLFormElement"},
a6:{"^":"e;",$isa6:1,"%":"Gamepad"},
f7:{"^":"E;","%":"HTMLHeadElement"},
js:{"^":"e;0j:length=","%":"History"},
jt:{"^":"hw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$iso")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.o]},
$isr:1,
$asr:function(){return[W.o]},
$ask:function(){return[W.o]},
$isi:1,
$asi:function(){return[W.o]},
$isa:1,
$asa:function(){return[W.o]},
$asl:function(){return[W.o]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
f8:{"^":"eM;","%":"HTMLDocument"},
ju:{"^":"E;0m:height=,0l:width=","%":"HTMLIFrameElement"},
jv:{"^":"e;0m:height=,0l:width=","%":"ImageBitmap"},
jw:{"^":"e;0m:height=,0l:width=","%":"ImageData"},
jx:{"^":"E;0m:height=,0l:width=","%":"HTMLImageElement"},
jz:{"^":"E;0m:height=,0l:width=","%":"HTMLInputElement"},
fl:{"^":"e;",
k:function(a){return String(a)},
$isfl:1,
"%":"Location"},
fo:{"^":"E;","%":"HTMLAudioElement;HTMLMediaElement"},
jH:{"^":"e;0j:length=","%":"MediaList"},
jI:{"^":"hC;",
h:function(a,b){return P.P(a.get(H.q(b)))},
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gC:function(a){var z=H.m([],[P.c])
this.B(a,new W.fq(z))
return z},
gj:function(a){return a.size},
$asI:function(){return[P.c,null]},
$isB:1,
$asB:function(){return[P.c,null]},
"%":"MIDIInputMap"},
fq:{"^":"y:0;a",
$2:function(a,b){return C.a.n(this.a,a)}},
jJ:{"^":"hD;",
h:function(a,b){return P.P(a.get(H.q(b)))},
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gC:function(a){var z=H.m([],[P.c])
this.B(a,new W.fr(z))
return z},
gj:function(a){return a.size},
$asI:function(){return[P.c,null]},
$isB:1,
$asB:function(){return[P.c,null]},
"%":"MIDIOutputMap"},
fr:{"^":"y:0;a",
$2:function(a,b){return C.a.n(this.a,a)}},
a8:{"^":"e;",$isa8:1,"%":"MimeType"},
jK:{"^":"hF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isa8")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$ask:function(){return[W.a8]},
$isi:1,
$asi:function(){return[W.a8]},
$isa:1,
$asa:function(){return[W.a8]},
$asl:function(){return[W.a8]},
"%":"MimeTypeArray"},
fs:{"^":"ha;","%":"WheelEvent;DragEvent|MouseEvent"},
T:{"^":"fk;a",
gY:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.cN("No elements"))
if(y>1)throw H.d(P.cN("More than one element"))
return z.firstChild},
F:function(a,b){var z,y,x,w,v
H.u(b,"$isi",[W.o],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.h(y),v=0;v<x;++v)w.N(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.n(c,"$iso")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.j(y,b)
J.dK(z,c,y[b])},
gv:function(a){var z=this.a.childNodes
return new W.cw(z,z.length,-1,[H.aO(C.R,z,"l",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$ask:function(){return[W.o]},
$asi:function(){return[W.o]},
$asa:function(){return[W.o]}},
o:{"^":"N;0cB:previousSibling=",
cC:function(a){var z=a.parentNode
if(z!=null)J.b3(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.bF(a):z},
N:function(a,b){return a.appendChild(b)},
c9:function(a,b){return a.removeChild(b)},
ca:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
fw:{"^":"hH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$iso")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.o]},
$isr:1,
$asr:function(){return[W.o]},
$ask:function(){return[W.o]},
$isi:1,
$asi:function(){return[W.o]},
$isa:1,
$asa:function(){return[W.o]},
$asl:function(){return[W.o]},
"%":"NodeList|RadioNodeList"},
jT:{"^":"E;0m:height=,0l:width=","%":"HTMLObjectElement"},
jV:{"^":"N;0m:height=,0l:width=","%":"OffscreenCanvas"},
jW:{"^":"e;0m:height=,0l:width=","%":"PaintSize"},
aa:{"^":"e;0j:length=",$isaa:1,"%":"Plugin"},
jY:{"^":"hL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isaa")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$ask:function(){return[W.aa]},
$isi:1,
$asi:function(){return[W.aa]},
$isa:1,
$asa:function(){return[W.aa]},
$asl:function(){return[W.aa]},
"%":"PluginArray"},
k_:{"^":"fs;0m:height=,0l:width=","%":"PointerEvent"},
fM:{"^":"e;",
cn:function(a,b){return a.createContextualFragment(b)},
bz:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
k4:{"^":"hN;",
h:function(a,b){return P.P(a.get(H.q(b)))},
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gC:function(a){var z=H.m([],[P.c])
this.B(a,new W.fR(z))
return z},
gj:function(a){return a.size},
$asI:function(){return[P.c,null]},
$isB:1,
$asB:function(){return[P.c,null]},
"%":"RTCStatsReport"},
fR:{"^":"y:0;a",
$2:function(a,b){return C.a.n(this.a,a)}},
k5:{"^":"e;0m:height=,0l:width=","%":"Screen"},
k6:{"^":"E;0j:length=","%":"HTMLSelectElement"},
ab:{"^":"N;",$isab:1,"%":"SourceBuffer"},
k8:{"^":"d4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isab")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$ask:function(){return[W.ab]},
$isi:1,
$asi:function(){return[W.ab]},
$isa:1,
$asa:function(){return[W.ab]},
$asl:function(){return[W.ab]},
"%":"SourceBufferList"},
ac:{"^":"e;",$isac:1,"%":"SpeechGrammar"},
k9:{"^":"hT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isac")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$ask:function(){return[W.ac]},
$isi:1,
$asi:function(){return[W.ac]},
$isa:1,
$asa:function(){return[W.ac]},
$asl:function(){return[W.ac]},
"%":"SpeechGrammarList"},
ad:{"^":"e;0j:length=",$isad:1,"%":"SpeechRecognitionResult"},
kb:{"^":"hW;",
h:function(a,b){return this.aK(a,H.q(b))},
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=0;!0;++z){y=this.c7(a,z)
if(y==null)return
b.$2(y,this.aK(a,y))}},
gC:function(a){var z=H.m([],[P.c])
this.B(a,new W.h1(z))
return z},
gj:function(a){return a.length},
aK:function(a,b){return a.getItem(b)},
c7:function(a,b){return a.key(b)},
$asI:function(){return[P.c,P.c]},
$isB:1,
$asB:function(){return[P.c,P.c]},
"%":"Storage"},
h1:{"^":"y:10;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ae:{"^":"e;",$isae:1,"%":"CSSStyleSheet|StyleSheet"},
h2:{"^":"E;",
H:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.a3(a,b,c,d)
z=W.eS("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.T(y).F(0,new W.T(z))
return y},
"%":"HTMLTableElement"},
ke:{"^":"E;",
H:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.a3(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.H(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.gY(z)
x.toString
z=new W.T(x)
w=z.gY(z)
y.toString
w.toString
new W.T(y).F(0,new W.T(w))
return y},
"%":"HTMLTableRowElement"},
kf:{"^":"E;",
H:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.a3(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.H(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.gY(z)
y.toString
x.toString
new W.T(y).F(0,new W.T(x))
return y},
"%":"HTMLTableSectionElement"},
cQ:{"^":"E;",$iscQ:1,"%":"HTMLTemplateElement"},
kg:{"^":"e;0l:width=","%":"TextMetrics"},
af:{"^":"N;",$isaf:1,"%":"TextTrack"},
ag:{"^":"N;",$isag:1,"%":"TextTrackCue|VTTCue"},
kh:{"^":"i2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isag")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ag]},
$isr:1,
$asr:function(){return[W.ag]},
$ask:function(){return[W.ag]},
$isi:1,
$asi:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$asl:function(){return[W.ag]},
"%":"TextTrackCueList"},
ki:{"^":"d7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isaf")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$ask:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asl:function(){return[W.af]},
"%":"TextTrackList"},
kk:{"^":"e;0j:length=","%":"TimeRanges"},
ah:{"^":"e;",$isah:1,"%":"Touch"},
kl:{"^":"i4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isah")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ah]},
$isr:1,
$asr:function(){return[W.ah]},
$ask:function(){return[W.ah]},
$isi:1,
$asi:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asl:function(){return[W.ah]},
"%":"TouchList"},
km:{"^":"e;0j:length=","%":"TrackDefaultList"},
ha:{"^":"eV;","%":"CompositionEvent|FocusEvent|KeyboardEvent|TextEvent|TouchEvent;UIEvent"},
kB:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
kD:{"^":"fo;0m:height=,0l:width=","%":"HTMLVideoElement"},
kE:{"^":"N;0j:length=","%":"VideoTrackList"},
kF:{"^":"N;0m:height=,0l:width=","%":"VisualViewport"},
kG:{"^":"e;0l:width=","%":"VTTRegion"},
cV:{"^":"o;",$iscV:1,"%":"Attr"},
kH:{"^":"i9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isa4")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.a4]},
$isr:1,
$asr:function(){return[W.a4]},
$ask:function(){return[W.a4]},
$isi:1,
$asi:function(){return[W.a4]},
$isa:1,
$asa:function(){return[W.a4]},
$asl:function(){return[W.a4]},
"%":"CSSRuleList"},
kI:{"^":"eO;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.bl(b,"$isJ",[P.H],"$asJ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.h(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.cY(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kJ:{"^":"ib;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isa6")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$ask:function(){return[W.a6]},
$isi:1,
$asi:function(){return[W.a6]},
$isa:1,
$asa:function(){return[W.a6]},
$asl:function(){return[W.a6]},
"%":"GamepadList"},
kO:{"^":"id;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$iso")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.o]},
$isr:1,
$asr:function(){return[W.o]},
$ask:function(){return[W.o]},
$isi:1,
$asi:function(){return[W.o]},
$isa:1,
$asa:function(){return[W.o]},
$asl:function(){return[W.o]},
"%":"MozNamedAttrMap|NamedNodeMap"},
kP:{"^":"ig;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isad")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$ask:function(){return[W.ad]},
$isi:1,
$asi:function(){return[W.ad]},
$isa:1,
$asa:function(){return[W.ad]},
$asl:function(){return[W.ad]},
"%":"SpeechRecognitionResultList"},
kQ:{"^":"ii;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.n(c,"$isae")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$ask:function(){return[W.ae]},
$isi:1,
$asi:function(){return[W.ae]},
$isa:1,
$asa:function(){return[W.ae]},
$asl:function(){return[W.ae]},
"%":"StyleSheetList"},
hi:{"^":"cE;c2:a<",
B:function(a,b){var z,y,x,w,v,u
H.F(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=this.gC(this),y=z.length,x=this.a,w=J.h(x),v=0;v<z.length;z.length===y||(0,H.ar)(z),++v){u=z[v]
b.$2(u,w.P(x,u))}},
gC:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.c])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.n(z[w],"$iscV")
if(v.namespaceURI==null)C.a.n(y,v.name)}return y},
$asI:function(){return[P.c,P.c]},
$asB:function(){return[P.c,P.c]}},
hp:{"^":"hi;a",
h:function(a,b){return J.by(this.a,H.q(b))},
gj:function(a){return this.gC(this).length}},
aY:{"^":"f;a",
bW:function(a){var z,y
z=$.c4()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.O[y],W.ix())
for(y=0;y<12;++y)z.i(0,C.q[y],W.iy())}},
M:function(a){return $.dG().A(0,W.ay(a))},
J:function(a,b,c){var z,y,x
z=W.ay(a)
y=$.c4()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bX(x.$4(a,b,c,this))},
$isY:1,
p:{
cX:function(a){var z,y
z=document.createElement("a")
y=new W.hO(z,window.location)
y=new W.aY(y)
y.bW(a)
return y},
kM:[function(a,b,c,d){H.n(a,"$isX")
H.q(b)
H.q(c)
H.n(d,"$isaY")
return!0},"$4","ix",16,0,6],
kN:[function(a,b,c,d){var z,y,x
H.n(a,"$isX")
H.q(b)
H.q(c)
z=H.n(d,"$isaY").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","iy",16,0,6]}},
l:{"^":"f;$ti",
gv:function(a){return new W.cw(a,this.gj(a),-1,[H.aO(this,a,"l",0)])}},
cH:{"^":"f;a",
M:function(a){return C.a.aP(this.a,new W.fy(a))},
J:function(a,b,c){return C.a.aP(this.a,new W.fx(a,b,c))},
$isY:1},
fy:{"^":"y:4;a",
$1:function(a){return H.n(a,"$isY").M(this.a)}},
fx:{"^":"y:4;a,b,c",
$1:function(a){return H.n(a,"$isY").J(this.a,this.b,this.c)}},
hP:{"^":"f;",
bX:function(a,b,c,d){var z,y,x
this.a.F(0,c)
z=b.ah(0,new W.hQ())
y=b.ah(0,new W.hR())
this.b.F(0,z)
x=this.c
x.F(0,C.Q)
x.F(0,y)},
M:function(a){return this.a.A(0,W.ay(a))},
J:["bI",function(a,b,c){var z,y
z=W.ay(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.ci(c)
else if(y.A(0,"*::"+b))return this.d.ci(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isY:1},
hQ:{"^":"y:5;",
$1:function(a){return!C.a.A(C.q,H.q(a))}},
hR:{"^":"y:5;",
$1:function(a){return C.a.A(C.q,H.q(a))}},
i_:{"^":"hP;e,a,b,c,d",
J:function(a,b,c){if(this.bI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.by(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
d5:function(){var z,y,x,w,v
z=P.c
y=P.bL(C.p,z)
x=H.t(C.p,0)
w=H.F(new W.i0(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.i_(y,P.aW(null,null,null,z),P.aW(null,null,null,z),P.aW(null,null,null,z),null)
y.bX(null,new H.fn(C.p,w,[x,z]),v,null)
return y}}},
i0:{"^":"y:11;",
$1:function(a){return"TEMPLATE::"+H.b(H.q(a))}},
hZ:{"^":"f;",
M:function(a){var z=J.D(a)
if(!!z.$iscK)return!1
z=!!z.$isA
if(z&&W.ay(a)==="foreignObject")return!1
if(z)return!0
return!1},
J:function(a,b,c){if(b==="is"||C.f.bB(b,"on"))return!1
return this.M(a)},
$isY:1},
cw:{"^":"f;a,b,c,0d,$ti",
saI:function(a){this.d=H.C(a,H.t(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saI(J.aR(this.a,z))
this.c=z
return!0}this.saI(null)
this.c=y
return!1},
gu:function(a){return this.d},
$isaz:1},
Y:{"^":"f;"},
hO:{"^":"f;a,b",$iskA:1},
d8:{"^":"f;a",
aq:function(a){new W.i7(this).$2(a,null)},
U:function(a,b){if(b==null)J.cd(a)
else J.b3(b,a)},
cc:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.e3(a)
x=J.by(y.gc2(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.b2(t)}v="element unprintable"
try{v=J.aS(a)}catch(t){H.b2(t)}try{u=W.ay(a)
this.cb(H.n(a,"$isX"),b,z,v,u,H.n(y,"$isB"),H.q(x))}catch(t){if(H.b2(t) instanceof P.al)throw t
else{this.U(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cb:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.U(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.M(a)){this.U(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.J(a,"is",g)){this.U(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gC(f)
y=H.m(z.slice(0),[H.t(z,0)])
for(x=f.gC(f).length-1,z=f.a,w=J.h(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.J(a,J.eg(v),w.P(z,v))){window
u="Removing disallowed attribute <"+H.b(e)+" "+v+'="'+H.b(w.P(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.P(z,v)
w.c8(z,v)}}if(!!J.D(a).$iscQ)this.aq(a.content)},
$isjR:1},
i7:{"^":"y:12;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cc(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.U(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.e4(z)}catch(w){H.b2(w)
v=H.n(z,"$iso")
if(x){u=v.parentNode
if(u!=null)J.b3(u,v)}else J.b3(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.n(y,"$iso")}}},
hk:{"^":"e+eG;"},
hl:{"^":"e+k;"},
hm:{"^":"hl+l;"},
hn:{"^":"e+k;"},
ho:{"^":"hn+l;"},
hr:{"^":"e+k;"},
hs:{"^":"hr+l;"},
hv:{"^":"e+k;"},
hw:{"^":"hv+l;"},
hC:{"^":"e+I;"},
hD:{"^":"e+I;"},
hE:{"^":"e+k;"},
hF:{"^":"hE+l;"},
hG:{"^":"e+k;"},
hH:{"^":"hG+l;"},
hK:{"^":"e+k;"},
hL:{"^":"hK+l;"},
hN:{"^":"e+I;"},
d3:{"^":"N+k;"},
d4:{"^":"d3+l;"},
hS:{"^":"e+k;"},
hT:{"^":"hS+l;"},
hW:{"^":"e+I;"},
i1:{"^":"e+k;"},
i2:{"^":"i1+l;"},
d6:{"^":"N+k;"},
d7:{"^":"d6+l;"},
i3:{"^":"e+k;"},
i4:{"^":"i3+l;"},
i8:{"^":"e+k;"},
i9:{"^":"i8+l;"},
ia:{"^":"e+k;"},
ib:{"^":"ia+l;"},
ic:{"^":"e+k;"},
id:{"^":"ic+l;"},
ie:{"^":"e+k;"},
ig:{"^":"ie+l;"},
ih:{"^":"e+k;"},
ii:{"^":"ih+l;"}}],["","",,P,{"^":"",
P:function(a){var z,y,x,w,v
if(a==null)return
z=P.a7(P.c,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.ar)(y),++w){v=H.q(y[w])
z.i(0,v,a[v])}return z},
im:function(a,b){var z={}
a.B(0,new P.io(z))
return z},
cr:function(){var z=$.cq
if(z==null){z=J.bt(window.navigator.userAgent,"Opera",0)
$.cq=z}return z},
eL:function(){var z,y
z=$.cn
if(z!=null)return z
y=$.co
if(y==null){y=J.bt(window.navigator.userAgent,"Firefox",0)
$.co=y}if(y)z="-moz-"
else{y=$.cp
if(y==null){y=!P.cr()&&J.bt(window.navigator.userAgent,"Trident/",0)
$.cp=y}if(y)z="-ms-"
else z=P.cr()?"-o-":"-webkit-"}$.cn=z
return z},
io:{"^":"y:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hM:{"^":"f;"},J:{"^":"hM;$ti"}}],["","",,P,{"^":"",eq:{"^":"e;",$iseq:1,"%":"SVGAnimatedLength"},j7:{"^":"A;0m:height=,0l:width=","%":"SVGFEBlendElement"},j8:{"^":"A;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},j9:{"^":"A;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},ja:{"^":"A;0m:height=,0l:width=","%":"SVGFECompositeElement"},jb:{"^":"A;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},jc:{"^":"A;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},jd:{"^":"A;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},je:{"^":"A;0m:height=,0l:width=","%":"SVGFEFloodElement"},jf:{"^":"A;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},jg:{"^":"A;0m:height=,0l:width=","%":"SVGFEImageElement"},jh:{"^":"A;0m:height=,0l:width=","%":"SVGFEMergeElement"},ji:{"^":"A;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},jj:{"^":"A;0m:height=,0l:width=","%":"SVGFEOffsetElement"},jk:{"^":"A;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},jl:{"^":"A;0m:height=,0l:width=","%":"SVGFETileElement"},jm:{"^":"A;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},jp:{"^":"A;0m:height=,0l:width=","%":"SVGFilterElement"},jq:{"^":"aU;0m:height=,0l:width=","%":"SVGForeignObjectElement"},f6:{"^":"aU;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aU:{"^":"A;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},jy:{"^":"aU;0m:height=,0l:width=","%":"SVGImageElement"},aD:{"^":"e;",$isaD:1,"%":"SVGLength"},jF:{"^":"hy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.n(c,"$isaD")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$ask:function(){return[P.aD]},
$isi:1,
$asi:function(){return[P.aD]},
$isa:1,
$asa:function(){return[P.aD]},
$asl:function(){return[P.aD]},
"%":"SVGLengthList"},jG:{"^":"A;0m:height=,0l:width=","%":"SVGMaskElement"},aG:{"^":"e;",$isaG:1,"%":"SVGNumber"},jS:{"^":"hJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.n(c,"$isaG")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$ask:function(){return[P.aG]},
$isi:1,
$asi:function(){return[P.aG]},
$isa:1,
$asa:function(){return[P.aG]},
$asl:function(){return[P.aG]},
"%":"SVGNumberList"},jX:{"^":"A;0m:height=,0l:width=","%":"SVGPatternElement"},jZ:{"^":"e;0j:length=","%":"SVGPointList"},k0:{"^":"e;0m:height=,0l:width=","%":"SVGRect"},k1:{"^":"f6;0m:height=,0l:width=","%":"SVGRectElement"},cK:{"^":"A;",$iscK:1,"%":"SVGScriptElement"},kc:{"^":"hY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.q(c)
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$ask:function(){return[P.c]},
$isi:1,
$asi:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asl:function(){return[P.c]},
"%":"SVGStringList"},A:{"^":"X;",
H:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.Y])
C.a.n(z,W.cX(null))
C.a.n(z,W.d5())
C.a.n(z,new W.hZ())
c=new W.d8(new W.cH(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).co(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.T(w)
u=z.gY(z)
for(z=J.h(v);x=u.firstChild,x!=null;)z.N(v,x)
return v},
$isA:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kd:{"^":"aU;0m:height=,0l:width=","%":"SVGSVGElement"},aJ:{"^":"e;",$isaJ:1,"%":"SVGTransform"},kn:{"^":"i6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return this.I(a,b)},
i:function(a,b,c){H.n(c,"$isaJ")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
I:function(a,b){return a.getItem(b)},
$ask:function(){return[P.aJ]},
$isi:1,
$asi:function(){return[P.aJ]},
$isa:1,
$asa:function(){return[P.aJ]},
$asl:function(){return[P.aJ]},
"%":"SVGTransformList"},kC:{"^":"aU;0m:height=,0l:width=","%":"SVGUseElement"},hx:{"^":"e+k;"},hy:{"^":"hx+l;"},hI:{"^":"e+k;"},hJ:{"^":"hI+l;"},hX:{"^":"e+k;"},hY:{"^":"hX+l;"},i5:{"^":"e+k;"},i6:{"^":"i5+l;"}}],["","",,P,{"^":"",bG:{"^":"f;",$isi:1,
$asi:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$ish8:1}}],["","",,P,{"^":"",iQ:{"^":"e;0j:length=","%":"AudioBuffer"},iR:{"^":"hj;",
h:function(a,b){return P.P(a.get(H.q(b)))},
B:function(a,b){var z,y
H.F(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.P(y.value[1]))}},
gC:function(a){var z=H.m([],[P.c])
this.B(a,new P.et(z))
return z},
gj:function(a){return a.size},
$asI:function(){return[P.c,null]},
$isB:1,
$asB:function(){return[P.c,null]},
"%":"AudioParamMap"},et:{"^":"y:0;a",
$2:function(a,b){return C.a.n(this.a,a)}},iS:{"^":"N;0j:length=","%":"AudioTrackList"},eu:{"^":"N;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},jU:{"^":"eu;0j:length=","%":"OfflineAudioContext"},hj:{"^":"e+I;"}}],["","",,P,{"^":"",ew:{"^":"e;",$isew:1,"%":"WebGLBuffer"},f3:{"^":"e;",$isf3:1,"%":"WebGLFramebuffer"},fL:{"^":"e;",$isfL:1,"%":"WebGLProgram"},k2:{"^":"e;",
aO:function(a,b){return a.activeTexture(b)},
aQ:function(a,b,c){return a.attachShader(b,c)},
aR:function(a,b,c){return a.bindBuffer(b,c)},
aS:function(a,b,c){return a.bindFramebuffer(b,c)},
aT:function(a,b,c){return a.bindTexture(b,c)},
aU:function(a,b){return a.blendEquation(b)},
aV:function(a,b,c){return a.blendFunc(b,c)},
aW:function(a,b,c,d){return a.bufferData(b,c,d)},
aX:function(a,b){return a.checkFramebufferStatus(b)},
aY:function(a,b){return a.clear(b)},
aZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b_:function(a,b){return a.compileShader(b)},
b0:function(a){return a.createBuffer()},
b1:function(a){return a.createFramebuffer()},
b2:function(a){return a.createProgram()},
b3:function(a,b){return a.createShader(b)},
b4:function(a){return a.createTexture()},
b5:function(a,b){return a.depthMask(b)},
b6:function(a,b){return a.disable(b)},
b7:function(a,b,c,d){return a.drawArrays(b,c,d)},
b8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b9:function(a,b){return a.enable(b)},
ba:function(a,b){return a.enableVertexAttribArray(b)},
bc:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a2:function(a){return P.P(a.getContextAttributes())},
ai:function(a){return a.getError()},
aj:function(a,b){return a.getExtension(b)},
ak:function(a,b){return a.getProgramInfoLog(b)},
al:function(a,b,c){return a.getProgramParameter(b,c)},
an:function(a,b){return a.getShaderInfoLog(b)},
ao:function(a,b,c){return a.getShaderParameter(b,c)},
ap:function(a,b,c){return a.getUniformLocation(b,c)},
bd:function(a,b){return a.linkProgram(b)},
ad:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
as:function(a,b,c){return a.shaderSource(b,c)},
at:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bg:function(a,b,c,d){return a.texParameterf(b,c,d)},
bh:function(a,b,c,d){return a.texParameteri(b,c,d)},
bi:function(a,b,c){return a.uniform1f(b,c)},
bj:function(a,b,c){return a.uniform1fv(b,c)},
bk:function(a,b,c){return a.uniform1i(b,c)},
bl:function(a,b,c){return a.uniform1iv(b,c)},
bm:function(a,b,c){return a.uniform2fv(b,c)},
bn:function(a,b,c){return a.uniform3fv(b,c)},
bo:function(a,b,c){return a.uniform4fv(b,c)},
bp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
br:function(a,b){return a.useProgram(b)},
bs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
bf:function(a,b,c,d,e,f,g,h){this.ad(a,b,c,d,e,f,g,h)},
"%":"WebGLRenderingContext"},k3:{"^":"e;",
ck:function(a,b){return a.beginTransformFeedback(b)},
cl:function(a,b){return a.bindVertexArray(b)},
cq:function(a){return a.createVertexArray()},
cr:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cs:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ct:function(a){return a.endTransformFeedback()},
cE:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
cG:function(a,b,c,d){this.cf(a,b,H.u(c,"$isa",[P.c],"$asa"),d)
return},
cf:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
cH:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aO:function(a,b){return a.activeTexture(b)},
aQ:function(a,b,c){return a.attachShader(b,c)},
aR:function(a,b,c){return a.bindBuffer(b,c)},
aS:function(a,b,c){return a.bindFramebuffer(b,c)},
aT:function(a,b,c){return a.bindTexture(b,c)},
aU:function(a,b){return a.blendEquation(b)},
aV:function(a,b,c){return a.blendFunc(b,c)},
aW:function(a,b,c,d){return a.bufferData(b,c,d)},
aX:function(a,b){return a.checkFramebufferStatus(b)},
aY:function(a,b){return a.clear(b)},
aZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b_:function(a,b){return a.compileShader(b)},
b0:function(a){return a.createBuffer()},
b1:function(a){return a.createFramebuffer()},
b2:function(a){return a.createProgram()},
b3:function(a,b){return a.createShader(b)},
b4:function(a){return a.createTexture()},
b5:function(a,b){return a.depthMask(b)},
b6:function(a,b){return a.disable(b)},
b7:function(a,b,c,d){return a.drawArrays(b,c,d)},
b8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b9:function(a,b){return a.enable(b)},
ba:function(a,b){return a.enableVertexAttribArray(b)},
bc:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a2:function(a){return P.P(a.getContextAttributes())},
ai:function(a){return a.getError()},
aj:function(a,b){return a.getExtension(b)},
ak:function(a,b){return a.getProgramInfoLog(b)},
al:function(a,b,c){return a.getProgramParameter(b,c)},
an:function(a,b){return a.getShaderInfoLog(b)},
ao:function(a,b,c){return a.getShaderParameter(b,c)},
ap:function(a,b,c){return a.getUniformLocation(b,c)},
bd:function(a,b){return a.linkProgram(b)},
ad:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
as:function(a,b,c){return a.shaderSource(b,c)},
at:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bg:function(a,b,c,d){return a.texParameterf(b,c,d)},
bh:function(a,b,c,d){return a.texParameteri(b,c,d)},
bi:function(a,b,c){return a.uniform1f(b,c)},
bj:function(a,b,c){return a.uniform1fv(b,c)},
bk:function(a,b,c){return a.uniform1i(b,c)},
bl:function(a,b,c){return a.uniform1iv(b,c)},
bm:function(a,b,c){return a.uniform2fv(b,c)},
bn:function(a,b,c){return a.uniform3fv(b,c)},
bo:function(a,b,c){return a.uniform4fv(b,c)},
bp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
br:function(a,b){return a.useProgram(b)},
bs:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
bf:function(a,b,c,d,e,f,g,h){this.ad(a,b,c,d,e,f,g,h)},
"%":"WebGL2RenderingContext"},fW:{"^":"e;",$isfW:1,"%":"WebGLShader"},h4:{"^":"e;",$ish4:1,"%":"WebGLTexture"},hb:{"^":"e;",$ishb:1,"%":"WebGLUniformLocation"},hf:{"^":"e;",$ishf:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ka:{"^":"hV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.z(b,a,null,null,null))
return P.P(this.c6(a,b))},
i:function(a,b,c){H.n(c,"$isB")
throw H.d(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
c6:function(a,b){return a.item(b)},
$ask:function(){return[[P.B,,,]]},
$isi:1,
$asi:function(){return[[P.B,,,]]},
$isa:1,
$asa:function(){return[[P.B,,,]]},
$asl:function(){return[[P.B,,,]]},
"%":"SQLResultSetRowList"},hU:{"^":"e+k;"},hV:{"^":"hU+l;"}}],["","",,G,{"^":"",
hh:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.c])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.i(z,y,w+H.b(z[y]))}return C.a.a1(z,"\n")},
cW:function(a,b,c){var z,y,x,w
z=J.h(a)
y=z.b3(a,b)
z.as(a,y,c)
z.b_(a,y)
x=H.bX(z.ao(a,y,35713))
if(x!=null&&!x){w=z.an(a,y)
P.ak("E:Compilation failed:")
P.ak("E:"+G.hh(c))
P.ak("E:Failure:")
P.ak(C.f.D("E:",w))
throw H.d(w)}return y},
cx:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.K],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bw(a[y])
w=b.length
if(z>=w)return H.j(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.j(a,y)
v=J.bx(a[y])
if(x>=w)return H.j(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.j(a,y)
v=J.ca(a[y])
if(z>=w)return H.j(b,z)
b[z]=v}return b},
f0:function(a,b){var z,y,x,w
H.u(a,"$isa",[T.S],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bw(a[y])
w=b.length
if(z>=w)return H.j(b,z)
b[z]=x;++z
if(y>=a.length)return H.j(a,y)
x=J.bx(a[y])
if(z>=w)return H.j(b,z)
b[z]=x}return b},
f1:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.bS],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bw(a[y])
w=b.length
if(z>=w)return H.j(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.j(a,y)
v=J.bx(a[y])
if(x>=w)return H.j(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.j(a,y)
x=J.ca(a[y])
if(v>=w)return H.j(b,v)
b[v]=x
if(y>=a.length)return H.j(a,y)
C.v.i(b,z+3,J.e6(a[y]))}return b},
f_:function(a,b){var z,y
H.u(a,"$isa",[[P.a,P.x]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.l.i(b,z,J.aR(a[y],0))
if(y>=a.length)return H.j(a,y)
C.l.i(b,z+1,J.aR(a[y],1))
if(y>=a.length)return H.j(a,y)
C.l.i(b,z+2,J.aR(a[y],2))
if(y>=a.length)return H.j(a,y)
C.l.i(b,z+3,J.aR(a[y],3))}return b},
ht:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aE(z,[H.t(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.x]],v=[P.a3],u=[T.bS],t=[T.K],s=[T.S];y.t();){r=y.d
if(!x.a0(0,r)){r="Dropping unnecessary attribute: "+H.b(r)
if($.dg>0)H.br("I: "+r)
continue}q=z.h(0,r)
switch($.U().h(0,r).a){case"vec2":b.T(r,G.f0(H.b1(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.T(r,G.cx(H.b1(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.T(r,G.f1(H.b1(q,"$isa",u,"$asa"),null),4)
break
case"float":b.T(r,new Float32Array(H.bj(H.b1(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.T(r,G.f_(H.b1(q,"$isa",w,"$asa"),null),4)
break}}},
bM:{"^":"f;"},
cS:{"^":"bM;"},
ez:{"^":"f;0a,b",
bb:function(a,b,c){J.e0(this.a,b)
if(c>0)J.em(this.a,b,c)},
bt:function(a,b,c,d,e,f,g,h){J.bs(this.a,34962,b)
J.en(this.a,c,d,e,!1,g,h)}},
cy:{"^":"f;a,b,c,d,e",
au:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.a1(z.a,36160,y)
J.eo(z.a,b,c,d,e)
if(a!==0)J.dO(z.a,a)},
p:{
f2:function(a,b,c,d,e){var z,y,x
z=new G.cy(a,null,b,c,d)
y=J.c9(a.a)
z.b=y
J.a1(a.a,36160,y)
J.b6(a.a,36160,36064,3553,b.b,0)
if(c!=null){y=c.b
J.b6(a.a,36160,36096,3553,y,0)}x=J.c8(a.a,36160)
if(x!==36053)H.R("Error Incomplete Framebuffer: "+H.b(x))
J.a1(a.a,36160,null)
return z}}},
eZ:{"^":"f;"},
cv:{"^":"f;a,b,c,d"},
f5:{"^":"f;a,b,c,d,e",
ax:function(a){switch($.U().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.S]))
break
case"vec3":this.e.i(0,a,H.m([],[T.K]))
break
case"vec4":this.e.i(0,a,H.m([],[T.bS]))
break
case"float":this.e.i(0,a,H.m([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.x]]))
break}},
bK:function(a,b){var z,y,x,w,v,u
z=[T.S]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.n(y,new T.S(v))}},
bL:function(a,b){var z,y,x,w,v
z=[T.K]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.K(new Float32Array(3))
v.ar(w)
z.n(y,v)}},
bM:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.K],"$asa")
z=this.d
y=z.length
C.a.n(this.c,new G.cv(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.K(new Float32Array(3))
v.ar(w)
C.a.n(z,v)}},
bO:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.m(y,[P.x])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.j(y,v)
u=y[v]
C.a.i(x,w,u.gcL(u))
C.a.i(x,w+1,u.gcM(u))
C.a.i(x,w+2,u.gcN(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.ar)(z),++v){t=z[v]
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
z=H.m(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.c])
for(y=this.e,x=new H.aE(y,[H.t(y,0)]),x=x.gv(x);x.t();){w=x.d
v=$.U().h(0,w).a
C.a.n(z,H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a1(z," ")}},
fp:{"^":"bM;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sa9:function(a){this.cx=H.u(a,"$isa",[P.x],"$asa")},
av:function(a,b,c){var z,y
C.f.a6(a,0)
H.n(b,"$isbG")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bs(z.a,34962,y)
J.c7(z.a,34962,b,35048)},
bP:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
T:function(a,b,c){var z,y,x,w,v
z=J.dJ(a,0)===105
if(z&&this.z===0)this.z=C.c.a4(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bu(x.a))
this.av(a,b,c)
w=$.U().h(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.h(0,a)
J.b5(x.a,this.e)
x.bb(0,v,z?1:0)
x.bt(0,y.h(0,a),v,w.ay(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.c])
for(z=this.cy,x=new H.aE(z,[H.t(z,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(y,H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a1(y,"  ")}},
j5:{"^":"f;"},
fP:{"^":"bM;d,e,f,r,x,y,z,Q,0ch,a,b,c",
bR:function(a,b,c,d){var z,y,x,w,v,u
for(z=this.e.d,y=this.y,x=this.d,w=this.r,v=0;!1;++v){if(v>=0)return H.j(z,v)
u=z[v]
y.i(0,u,J.cb(x.a,w,u))}for(z=this.f.d,v=0;!1;++v){if(v>=0)return H.j(z,v)
u=z[v]
y.i(0,u,J.cb(x.a,w,u))}},
bT:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.c])
x=H.m([],[P.c])
for(y=new H.aE(y,[H.t(y,0)]),y=y.gv(y);y.t();){w=y.d
if(!z.a0(0,w))C.a.n(x,w)}for(z=this.x,z=P.cZ(z,z.r,H.t(z,0)),y=this.Q;z.t();){w=z.d
if(!y.A(0,w))C.a.n(x,w)}return x},
bU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.u(b,"$isB",[P.c,P.f],"$asB")
z=Date.now()
for(y=b.gC(b),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.gu(y)
switch(t.cO(0,0)){case 117:if(w.a0(0,t)){s=b.h(0,t)
if(v.a0(0,t))H.br("E:"+(H.b(t)+" : group ["+H.b(a)+"] overwrites ["+H.b(t)+"]"))
v.i(0,t,a)
r=$.U().h(0,t)
if(r==null)H.R("unknown "+H.b(t))
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bz(x.a,q,s)
else J.ek(x.a,q,s)
break
case"float":if(r.c===0)J.ei(x.a,q,s)
else J.ej(x.a,q,s)
break
case"mat4":if(r.c===0){p=s.gZ(s)
J.ci(x.a,q,!1,p)}else J.ci(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=s.gZ(s)
J.ch(x.a,q,!1,p)}else J.ch(x.a,q,!1,s)
break
case"vec4":if(r.c===0){p=s.gZ(s)
J.cg(x.a,q,p)}else J.cg(x.a,q,s)
break
case"vec3":if(r.c===0){p=s.gZ(s)
J.cf(x.a,q,p)}else J.cf(x.a,q,s)
break
case"vec2":if(r.c===0){p=s.gZ(s)
J.ce(x.a,q,p)}else J.ce(x.a,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.bo(p)
J.c5(x.a,33984+p)
p=s.bQ()
J.b4(x.a,3553,p)
p=this.ch
J.bz(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.D()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.bo(p)
J.c5(x.a,33984+p)
p=s.bQ()
J.b4(x.a,34067,p)
p=this.ch
J.bz(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.D()
this.ch=p+1
break
default:H.br("Error: unknow uniform type: "+p)}++u}break
case 99:o=b.h(0,t)
switch(t){case"cDepthTest":J.dV(x.a,2929)
break
case"cStencilFunc":o.gcw()
J.bv(x.a,2960)
p=o.gcw()
n=o.gcT(o)
m=o.gcR(o)
J.ed(x.a,p,n,m)
break
case"cDepthWrite":J.dU(x.a,o)
break
case"cBlendEquation":o.gcu()
J.bv(x.a,3042)
p=o.gcJ()
n=o.gcQ()
J.dN(x.a,p,n)
n=o.gcu()
J.dM(x.a,n)
break}++u
break}}l=P.eP(0,0,0,Date.now()-new P.bb(z,!1).a,0,0)
""+u
l.k(0)},
bN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[G.cS],"$asa")
Date.now()
z=this.d
J.el(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aL()}for(x=0;!1;++x){if(x>=0)return H.j(b,x)
w=b[x]
this.bU(w.gcS(w),w.cK())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aG()}for(v=a.cy,v=new H.aE(v,[H.t(v,0)]),v=v.gv(v);v.t();)y.n(0,v.d)
u=this.bT()
if(u.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(u)))
J.b5(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bP()
s=a.Q
r=a.z
if(t)J.dL(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.dZ(q,y,v,s,0,r)
else J.dY(q,y,v,s,0)}else{s=z.a
if(r>1)J.dX(s,y,0,v,r)
else J.dW(s,y,0,v)}if(t)J.e1(z.a)},
aw:function(a,b){return this.bN(a,b,null)},
p:{
fQ:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.c
y=P.aW(null,null,null,z)
x=c.b
w=d.b
v=H.u(c.f,"$isa",[z],"$asa")
u=J.dR(b.a)
t=G.cW(b.a,35633,x)
J.c6(b.a,u,t)
s=G.cW(b.a,35632,w)
J.c6(b.a,u,s)
if(v.length>0)J.eh(b.a,u,v,35980)
J.ec(b.a,u)
if(!H.bX(J.eb(b.a,u,35714)))H.R(J.ea(b.a,u))
z=new G.fP(b,c,d,u,P.bL(c.c,z),P.a7(z,P.f),P.a7(z,z),y,a,!1,!0)
z.bR(a,b,c,d)
return z}}},
v:{"^":"f;a,b,c",
ay:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fX:{"^":"f;a,0b,c,d,e,f,r,x",
bJ:function(a){var z,y,x,w
H.u(a,"$isa",[P.c],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.n(z,w)
y.i(0,w,this.r);++this.r}H.h_(z,J.ik(),H.t(z,0))},
bS:function(a,b){this.b=this.bV(!0,H.u(a,"$isa",[P.c],"$asa"),b)},
az:function(a){return this.bS(a,null)},
bV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.c]
H.u(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.ar)(y),++u){t=y[u]
s=$.U().h(0,t)
C.a.n(w,"layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.j(z,u)
q=z[u]
s=$.U().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.ar)(z),++u){q=z[u]
s=$.U().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.b(q)+";")}C.a.n(w,"")
for(z=this.d,u=0;!1;++u){if(u>=0)return H.j(z,u)
q=z[u]
s=$.U().h(0,q)
y=s.c
p=y===0?"":"["+y+"]"
C.a.n(w,"uniform "+s.a+" "+H.b(q)+p+";")}C.a.n(w,"")
C.a.n(w,"void main(void) {")
C.a.F(w,b)
C.a.n(w,"}")
return C.a.a1(w,"\n")},
p:{
cL:function(a){var z,y
z=P.c
y=[z]
return new G.fX(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.a7(z,P.x))}}},
h5:{"^":"f;a,b,c,d,e,f,r"},
h3:{"^":"f;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h9:{"^":"h3;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"},
p:{
bR:function(a,b,c,d,e,f){var z,y
z=J.dS(a.a)
J.b4(a.a,3553,z)
J.ef(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.ee(a.a,3553,34046,y)
y=f.r
J.b8(a.a,3553,10240,y)
y=f.f
J.b8(a.a,3553,10241,y)
if(f.b){J.b8(a.a,3553,10242,33071)
J.b8(a.a,3553,10243,33071)}f.c
J.e8(a.a)
J.b4(a.a,3553,null)
return new G.h9(c,d,e,b,z,3553,a,f)}}}}],["","",,A,{"^":"",
dl:function(a){var z,y
z=C.v.cv(H.u(a,"$isi",[P.f],"$asi"),0,new A.iw(),P.x)
if(typeof z!=="number")return H.bo(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iw:{"^":"y:13;",
$2:function(a,b){var z,y
H.Q(a)
z=J.au(b)
if(typeof a!=="number")return a.D()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",S:{"^":"f;a",
X:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.dl(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.j(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gbv:function(a){return this.a[0]},
gbw:function(a){return this.a[1]}},K:{"^":"f;a",
S:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
ar:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.K){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.dl(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbv:function(a){return this.a[0]},
gbw:function(a){return this.a[1]},
gcI:function(a){return this.a[2]}},bS:{"^":"f;"}}],["","",,B,{"^":"",
eX:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=a.a
y=a.b
J.a1(z.a,36160,y)
x=new Uint8Array(4*b*c)
J.cc(z.a,0,0,b,c,6408,5121,x)
J.a1(z.a,36160,null)
z=x.length
y=b*c
w=C.c.a4(z,y)
P.ak("Buffer length: "+z+" channels: "+w)
for(v=0,u=0,t=0,s=0;s<z;s+=w){v+=x[s]
r=s+1
if(r>=z)return H.j(x,r)
u+=x[r]
r=s+2
if(r>=z)return H.j(x,r)
t+=x[r]}return H.b(v/y)+" "+H.b(u/y)+" "+H.b(t/y)},
eY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=a.a
y=a.b
J.a1(z.a,36160,y)
x=new Float32Array(4*b*c)
J.cc(z.a,0,0,b,c,6408,5126,x)
J.a1(z.a,36160,null)
z=x.length
y=b*c
w=C.c.a4(z,y)
P.ak("Buffer length: "+z+" channels: "+w)
for(v=0,u=0,t=0,s=0,r=0;r<z;r+=w){v+=x[r]
q=r+1
if(q>=z)return H.j(x,q)
u+=x[q]
q=r+2
if(q>=z)return H.j(x,q)
t+=x[q]
q=r+3
if(q>=z)return H.j(x,q)
s+=x[q]}return H.b(v/y)+" "+H.b(u/y)+" "+H.b(t/y)+" "+H.b(s/y)},
dn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=document
y=H.n(C.o.be(z,"#results"),"$isbE")
x=H.n(C.o.be(z,"#webgl-canvas"),"$isbC")
x.width=500
x.height=500
w=new G.ez(x)
z=P.c
v=P.f
u=(x&&C.D).by(x,"webgl2",P.cC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],z,v))
w.a=u
if(u==null)H.R(P.eW('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.e7(u))
if($.dg>0)P.ak("I: "+t)
J.dP(u,0,0,0,1)
J.bv(u,2929)
s=G.fQ("program",w,$.dI(),$.dH())
u=new T.K(new Float32Array(3))
u.S(-1,-1,0)
t=new T.K(new Float32Array(3))
t.S(1,-1,0)
r=new T.K(new Float32Array(3))
r.S(1,1,0)
q=new T.K(new Float32Array(3))
q.S(-1,1,0)
p=[T.K]
o=H.m([u,t,r,q],p)
u=new T.S(new Float32Array(2))
u.X(0,0)
t=new T.S(new Float32Array(2))
t.X(1,0)
r=new T.S(new Float32Array(2))
r.X(1,1)
q=new T.S(new Float32Array(2))
q.X(0,1)
n=H.m([u,t,r,q],[T.S])
m=new T.K(new Float32Array(3))
m.S(0,0,1)
l=H.m([m,m,m,m],p)
u=H.m([],[G.eZ])
t=H.m([],[G.cv])
p=H.m([],p)
k=new G.f5(!1,u,t,p,P.a7(z,[P.a,,]))
k.ax("aTexUV")
k.bM(o)
k.bK("aTexUV",n)
k.ax("aNormal")
k.bL("aNormal",l)
u=s.d
t=s.e.x
v=P.a7(z,v)
r=J.dT(u.a)
j=new G.fp(u,r,4,v,t,0,-1,P.a7(z,P.bG),"meshdata:quad",!1,!0)
p=G.cx(p,null)
v.i(0,"aPosition",J.bu(u.a))
j.ch=p
j.av("aPosition",p,3)
i=$.U().h(0,"aPosition")
if(i==null)H.R("Unknown canonical aPosition")
h=t.h(0,"aPosition")
J.b5(u.a,r)
u.bb(0,h,0)
u.bt(0,v.h(0,"aPosition"),h,i.ay(),5126,!1,0,0)
z=H.u(k.bO(),"$isa",[P.x],"$asa")
j.y=J.bu(u.a)
v=j.ch.length
if(v<768){j.sa9(new Uint8Array(H.bj(z)))
j.Q=5121}else if(v<196608){j.sa9(new Uint16Array(H.bj(z)))
j.Q=5123}else{j.sa9(new Uint32Array(H.bj(z)))
j.Q=5125}J.b5(u.a,r)
z=j.y
v=j.cx
J.bs(u.a,34963,z)
J.c7(u.a,34963,v,35048)
G.ht(k,j)
z=$.dv()
v=G.bR(w,"frame::color",500,500,32856,z)
u=G.bR(w,"frame::depth",500,500,33190,z)
g=new G.cy(w,null,v,u,null)
t=J.c9(w.a)
g.b=t
J.a1(w.a,36160,t)
J.b6(w.a,36160,36064,3553,v.b,0)
J.b6(w.a,36160,36096,3553,u.b,0)
f=J.c8(w.a,36160)
if(f!==36053)H.R("Error Incomplete Framebuffer: "+H.b(f))
J.a1(w.a,36160,null);(y&&C.h).R(y,J.aQ(y.innerHTML,"<h3>Drawing into default format FB</h3>"))
g.au(17664,0,0,500,500)
v=[G.cS]
s.aw(j,H.m([],v))
C.h.R(y,J.aQ(y.innerHTML,B.eX(g,500,500)+"\n"))
C.h.R(y,J.aQ(y.innerHTML,"<h3>Drawing into float format FB</h3>"))
if(J.e9(w.a,"EXT_color_buffer_float")==null)C.h.R(y,J.aQ(y.innerHTML,"extension not available: EXT_color_buffer_float"))
g=G.f2(w,G.bR(w,"float",500,500,34836,z),null,null,!1)
g.au(17664,0,0,500,500)
s.aw(j,H.m([],v))
C.h.R(y,J.aQ(y.innerHTML,B.eY(g,500,500)+"\n"))}},1]]
setupProgram(dart,0,0)
J.D=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cz.prototype
return J.ff.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.fg.prototype
if(typeof a=="boolean")return J.fe.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.f)return a
return J.b_(a)}
J.is=function(a){if(typeof a=="number")return J.aV.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.f)return a
return J.b_(a)}
J.aN=function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.f)return a
return J.b_(a)}
J.dh=function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.f)return a
return J.b_(a)}
J.it=function(a){if(typeof a=="number")return J.aV.prototype
if(a==null)return a
if(!(a instanceof P.f))return J.aK.prototype
return a}
J.iu=function(a){if(typeof a=="number")return J.aV.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.f))return J.aK.prototype
return a}
J.di=function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.f))return J.aK.prototype
return a}
J.h=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.f)return a
return J.b_(a)}
J.bn=function(a){if(a==null)return a
if(!(a instanceof P.f))return J.aK.prototype
return a}
J.aQ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.is(a).D(a,b)}
J.at=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.D(a).E(a,b)}
J.V=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.it(a).K(a,b)}
J.aR=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.iF(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).h(a,b)}
J.dJ=function(a,b){return J.di(a).a6(a,b)}
J.b3=function(a,b){return J.h(a).c9(a,b)}
J.dK=function(a,b,c){return J.h(a).ca(a,b,c)}
J.c5=function(a,b){return J.h(a).aO(a,b)}
J.c6=function(a,b,c){return J.h(a).aQ(a,b,c)}
J.dL=function(a,b){return J.h(a).ck(a,b)}
J.bs=function(a,b,c){return J.h(a).aR(a,b,c)}
J.a1=function(a,b,c){return J.h(a).aS(a,b,c)}
J.b4=function(a,b,c){return J.h(a).aT(a,b,c)}
J.b5=function(a,b){return J.h(a).cl(a,b)}
J.dM=function(a,b){return J.h(a).aU(a,b)}
J.dN=function(a,b,c){return J.h(a).aV(a,b,c)}
J.c7=function(a,b,c,d){return J.h(a).aW(a,b,c,d)}
J.c8=function(a,b){return J.h(a).aX(a,b)}
J.dO=function(a,b){return J.h(a).aY(a,b)}
J.dP=function(a,b,c,d,e){return J.h(a).aZ(a,b,c,d,e)}
J.dQ=function(a,b){return J.iu(a).O(a,b)}
J.bt=function(a,b,c){return J.aN(a).cm(a,b,c)}
J.bu=function(a){return J.h(a).b0(a)}
J.c9=function(a){return J.h(a).b1(a)}
J.dR=function(a){return J.h(a).b2(a)}
J.dS=function(a){return J.h(a).b4(a)}
J.dT=function(a){return J.h(a).cq(a)}
J.dU=function(a,b){return J.h(a).b5(a,b)}
J.dV=function(a,b){return J.h(a).b6(a,b)}
J.dW=function(a,b,c,d){return J.h(a).b7(a,b,c,d)}
J.dX=function(a,b,c,d,e){return J.h(a).cr(a,b,c,d,e)}
J.dY=function(a,b,c,d,e){return J.h(a).b8(a,b,c,d,e)}
J.dZ=function(a,b,c,d,e,f){return J.h(a).cs(a,b,c,d,e,f)}
J.e_=function(a,b){return J.dh(a).q(a,b)}
J.bv=function(a,b){return J.h(a).b9(a,b)}
J.e0=function(a,b){return J.h(a).ba(a,b)}
J.e1=function(a){return J.h(a).ct(a)}
J.e2=function(a,b){return J.h(a).B(a,b)}
J.b6=function(a,b,c,d,e,f){return J.h(a).bc(a,b,c,d,e,f)}
J.e3=function(a){return J.h(a).gcj(a)}
J.au=function(a){return J.D(a).gw(a)}
J.b7=function(a){return J.dh(a).gv(a)}
J.av=function(a){return J.aN(a).gj(a)}
J.e4=function(a){return J.h(a).gcB(a)}
J.e5=function(a){return J.h(a).gcD(a)}
J.e6=function(a){return J.bn(a).gcU(a)}
J.bw=function(a){return J.bn(a).gbv(a)}
J.bx=function(a){return J.bn(a).gbw(a)}
J.ca=function(a){return J.bn(a).gcI(a)}
J.by=function(a,b){return J.h(a).P(a,b)}
J.e7=function(a){return J.h(a).a2(a)}
J.e8=function(a){return J.h(a).ai(a)}
J.e9=function(a,b){return J.h(a).aj(a,b)}
J.ea=function(a,b){return J.h(a).ak(a,b)}
J.eb=function(a,b,c){return J.h(a).al(a,b,c)}
J.cb=function(a,b,c){return J.h(a).ap(a,b,c)}
J.ec=function(a,b){return J.h(a).bd(a,b)}
J.cc=function(a,b,c,d,e,f,g,h){return J.h(a).bf(a,b,c,d,e,f,g,h)}
J.cd=function(a){return J.h(a).cC(a)}
J.ed=function(a,b,c,d){return J.h(a).at(a,b,c,d)}
J.ee=function(a,b,c,d){return J.h(a).bg(a,b,c,d)}
J.b8=function(a,b,c,d){return J.h(a).bh(a,b,c,d)}
J.ef=function(a,b,c,d,e,f){return J.h(a).cE(a,b,c,d,e,f)}
J.eg=function(a){return J.di(a).cF(a)}
J.aS=function(a){return J.D(a).k(a)}
J.eh=function(a,b,c,d){return J.h(a).cG(a,b,c,d)}
J.ei=function(a,b,c){return J.h(a).bi(a,b,c)}
J.ej=function(a,b,c){return J.h(a).bj(a,b,c)}
J.bz=function(a,b,c){return J.h(a).bk(a,b,c)}
J.ek=function(a,b,c){return J.h(a).bl(a,b,c)}
J.ce=function(a,b,c){return J.h(a).bm(a,b,c)}
J.cf=function(a,b,c){return J.h(a).bn(a,b,c)}
J.cg=function(a,b,c){return J.h(a).bo(a,b,c)}
J.ch=function(a,b,c,d){return J.h(a).bp(a,b,c,d)}
J.ci=function(a,b,c,d){return J.h(a).bq(a,b,c,d)}
J.el=function(a,b){return J.h(a).br(a,b)}
J.em=function(a,b,c){return J.h(a).cH(a,b,c)}
J.en=function(a,b,c,d,e,f,g){return J.h(a).bs(a,b,c,d,e,f,g)}
J.eo=function(a,b,c,d,e){return J.h(a).bu(a,b,c,d,e)}
I.ap=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.b9.prototype
C.D=W.bC.prototype
C.h=W.bE.prototype
C.E=W.eN.prototype
C.F=W.f7.prototype
C.o=W.f8.prototype
C.G=J.e.prototype
C.a=J.aA.prototype
C.c=J.cz.prototype
C.f=J.aB.prototype
C.N=J.aC.prototype
C.v=H.ft.prototype
C.l=H.fv.prototype
C.R=W.fw.prototype
C.w=J.fC.prototype
C.x=W.fM.prototype
C.C=W.h2.prototype
C.r=J.aK.prototype
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=H.m(I.ap(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.P=H.m(I.ap(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.Q=H.m(I.ap([]),[P.c])
C.p=H.m(I.ap(["bind","if","ref","repeat","syntax"]),[P.c])
C.q=H.m(I.ap(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.S=new G.v("vec3","vertex btangents",0)
C.d=new G.v("vec3","",0)
C.T=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.y=new G.v("vec3","vertex coordinates",0)
C.U=new G.v("vec3","vertex binormals",0)
C.z=new G.v("vec4","for wireframe",0)
C.V=new G.v("vec4","per vertex color",0)
C.W=new G.v("float","for normal maps",0)
C.i=new G.v("mat4","",0)
C.Y=new G.v("mat4","",4)
C.X=new G.v("mat4","",128)
C.b=new G.v("float","",0)
C.Z=new G.v("float","",4)
C.a_=new G.v("float","depth for shadowmaps",0)
C.e=new G.v("sampler2D","",0)
C.a0=new G.v("float","for bump maps",0)
C.a1=new G.v("vec2","texture uvs",0)
C.a2=new G.v("float","time since program start in sec",0)
C.j=new G.v("vec2","",0)
C.a3=new G.v("samplerCube","",0)
C.k=new G.v("vec4","",0)
C.a4=new G.v("vec3","vertex normals",0)
C.a5=new G.v("sampler2DShadow","",0)
C.A=new G.v("vec3","per vertex color",0)
C.B=new G.v("mat3","",0)
C.a6=new G.v("vec3","vertex tangents",0)
$.W=0
$.aw=null
$.ck=null
$.bV=!1
$.dk=null
$.db=null
$.dr=null
$.bm=null
$.bp=null
$.c_=null
$.a2=null
$.bF=null
$.cu=null
$.ct=null
$.cq=null
$.cp=null
$.co=null
$.cn=null
$.dg=0
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
I.$lazy(y,x,w)}})(["j_","du",function(){return H.dj("_$dart_dartClosure")},"jE","c3",function(){return H.dj("_$dart_js")},"ko","dw",function(){return H.Z(H.bh({
toString:function(){return"$receiver$"}}))},"kp","dx",function(){return H.Z(H.bh({$method$:null,
toString:function(){return"$receiver$"}}))},"kq","dy",function(){return H.Z(H.bh(null))},"kr","dz",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ku","dC",function(){return H.Z(H.bh(void 0))},"kv","dD",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"kt","dB",function(){return H.Z(H.cR(null))},"ks","dA",function(){return H.Z(function(){try{null.$method$}catch(z){return z.message}}())},"kx","dF",function(){return H.Z(H.cR(void 0))},"kw","dE",function(){return H.Z(function(){try{(void 0).$method$}catch(z){return z.message}}())},"kS","aP",function(){return[]},"iX","dt",function(){return{}},"kK","dG",function(){return P.bL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)},"kL","c4",function(){return P.a7(P.c,P.be)},"kR","U",function(){return P.cC(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.b,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.k,"iaTranslation",C.d,"iaScale",C.b,"iaColor",C.d,"vColor",C.A,"vTexUV",C.j,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.a5,"uTexture",C.e,"uTexture2",C.e,"uTexture3",C.e,"uTexture4",C.e,"uSpecularMap",C.e,"uNormalMap",C.e,"uBumpMap",C.e,"uDepthMap",C.e,"uCubeTexture",C.a3,"uAnimationTable",C.e,"uTime",C.a2,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.d,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.b,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W],P.c,G.v)},"kj","dv",function(){var z=new G.h5(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"kV","dI",function(){var z,y
z=G.cL("computeVertexShader")
y=[P.c]
z.bJ(H.m(["aPosition"],y))
z.az(H.m(["gl_Position = vec4(aPosition, 1.0);"],y))
return z},"kT","dH",function(){var z=G.cL("computeFragmentShader")
z.az(H.m(["oFragColor.b = gl_FragCoord.x / 500.0;\noFragColor.g = gl_FragCoord.y / 500.0;\noFragColor.r = 0.0;\n    "],[P.c]))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[P.c,,]},{func:1,args:[,]},{func:1,ret:P.aF,args:[,,]},{func:1,ret:P.c,args:[P.x]},{func:1,ret:P.M,args:[W.Y]},{func:1,ret:P.M,args:[P.c]},{func:1,ret:P.M,args:[W.X,P.c,P.c,W.aY]},{func:1,args:[,P.c]},{func:1,args:[P.c]},{func:1,ret:P.M,args:[W.o]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.o,W.o]},{func:1,ret:P.x,args:[P.x,P.f]},{func:1,ret:P.x,args:[,,]}]
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
if(x==y)H.iM(d||a)
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
Isolate.ap=a.ap
Isolate.aM=a.aM
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
if(typeof dartMainRunner==="function")dartMainRunner(B.dn,[])
else B.dn([])})})()
//# sourceMappingURL=compute.dart.js.map
