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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cY(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bq=function(){}
var dart=[["","",,H,{"^":"",mJ:{"^":"b;a"}}],["","",,J,{"^":"",
d2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cg:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d1==null){H.lJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cN("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.d5()]
if(v!=null)return v
v=H.lN(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.d5(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
k:{"^":"b;",
F:function(a,b){return a===b},
gw:function(a){return H.bi(a)},
k:["cR",function(a){return"Instance of '"+H.bj(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i1:{"^":"k;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isY:1},
i2:{"^":"k;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isB:1},
cD:{"^":"k;",
gw:function(a){return 0},
k:["cT",function(a){return String(a)}]},
iK:{"^":"cD;"},
bn:{"^":"cD;"},
bE:{"^":"cD;",
k:function(a){var z=a[$.eU()]
if(z==null)return this.cT(a)
return"JavaScript function for "+H.e(J.bv(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbz:1},
bB:{"^":"k;$ti",
l:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.ac(P.D("add"))
a.push(b)},
J:function(a,b){var z,y
H.p(b,"$isl",[H.q(a,0)],"$asl")
if(!!a.fixed$length)H.ac(P.D("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.ar(a))}},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
geu:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cB())},
bG:function(a,b){var z,y
H.m(b,{func:1,ret:P.Y,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.ar(a))}return!1},
cL:function(a,b){if(!!a.immutable$list)H.ac(P.D("sort"))
H.j9(a,J.lh(),H.q(a,0))},
ao:function(a){return this.cL(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aU(a[z],b))return!0
return!1},
k:function(a){return P.cA(a,"[","]")},
gA:function(a){return new J.dp(a,a.length,0,[H.q(a,0)])},
gw:function(a){return H.bi(a)},
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aP(a,b))
if(b>=a.length||b<0)throw H.d(H.aP(a,b))
return a[b]},
i:function(a,b,c){H.j(b)
H.A(c,H.q(a,0))
if(!!a.immutable$list)H.ac(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aP(a,b))
if(b>=a.length||b<0)throw H.d(H.aP(a,b))
a[b]=c},
$isy:1,
$asy:I.bq,
$isl:1,
$isa:1,
p:{
i0:function(a,b){return J.cC(H.f(a,[b]))},
cC:function(a){H.K(a)
a.fixed$length=Array
return a},
mH:[function(a,b){return J.fp(H.eN(a,"$isa4"),H.eN(b,"$isa4"))},"$2","lh",8,0,34]}},
mI:{"^":"bB;$ti"},
dp:{"^":"b;a,b,c,0d,$ti",
sbk:function(a){this.d=H.A(a,H.q(this,0))},
gv:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.N(z))
x=this.c
if(x>=y){this.sbk(null)
return!1}this.sbk(z[x]);++this.c
return!0},
$isb9:1},
bC:{"^":"k;",
N:function(a,b){var z
H.d3(b)
if(typeof b!=="number")throw H.d(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
cl:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.D(""+a+".toInt()"))},
e3:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.D(""+a+".ceil()"))},
en:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.D(""+a+".floor()"))},
e4:function(a,b,c){if(this.N(b,c)>0)throw H.d(H.av(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
eH:function(a){return a},
eJ:function(a,b){var z
if(b>20)throw H.d(P.c2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.d(H.av(b))
return a/b},
b1:function(a,b){var z
if(typeof b!=="number")throw H.d(H.av(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
b8:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bC(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bC(a,b)},
bC:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.D("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bA:function(a,b){var z
if(a>0)z=this.dQ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dQ:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.d(H.av(b))
return a>b},
$isa4:1,
$asa4:function(){return[P.I]},
$isS:1,
$isI:1},
dN:{"^":"bC;",$isE:1},
dM:{"^":"bC;"},
bD:{"^":"k;",
av:function(a,b){if(b>=a.length)throw H.d(H.aP(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.w(b)
if(typeof b!=="string")throw H.d(P.dn(b,null,null))
return a+b},
cN:function(a,b,c){var z
if(c>a.length)throw H.d(P.c2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cM:function(a,b){return this.cN(a,b,0)},
cP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.c3(b,null,null))
if(b>c)throw H.d(P.c3(b,null,null))
if(c>a.length)throw H.d(P.c3(c,null,null))
return a.substring(b,c)},
cO:function(a,b){return this.cP(a,b,null)},
eI:function(a){return a.toLowerCase()},
e7:function(a,b,c){if(c>a.length)throw H.d(P.c2(c,0,a.length,null,null))
return H.lV(a,b,c)},
N:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.d(H.av(b))
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
h:function(a,b){H.j(b)
if(b>=a.length||!1)throw H.d(H.aP(a,b))
return a[b]},
$isy:1,
$asy:I.bq,
$isa4:1,
$asa4:function(){return[P.c]},
$isiI:1,
$isc:1}}],["","",,H,{"^":"",
cB:function(){return new P.cL("No element")},
i_:function(){return new P.cL("Too many elements")},
j9:function(a,b,c){H.p(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.E,args:[c,c]})
H.bG(a,0,J.aW(a)-1,b,c)},
bG:function(a,b,c,d,e){H.p(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.j8(a,b,c,d,e)
else H.j7(a,b,c,d,e)},
j8:function(a,b,c,d,e){var z,y,x,w,v
H.p(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.H(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.aj(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
j7:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.p(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.c.I(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.I(b+a0,2)
v=w-z
u=w+z
t=J.H(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.aj(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aj(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aj(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aj(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aj(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aj(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aj(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aj(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aj(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aU(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.V()
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
if(typeof d!=="number")return d.V()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.V()
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
H.bG(a,b,m-2,a1,a2)
H.bG(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aU(a1.$2(t.h(a,m),r),0);)++m
for(;J.aU(a1.$2(t.h(a,l),p),0);)--l
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
break}}H.bG(a,m,l,a1,a2)}else H.bG(a,m,l,a1,a2)},
dE:{"^":"l;"},
bc:{"^":"dE;$ti",
gA:function(a){return new H.dP(this,this.gj(this),0,[H.d0(this,"bc",0)])},
aT:function(a,b){return this.cS(0,H.m(b,{func:1,ret:P.Y,args:[H.d0(this,"bc",0)]}))}},
dP:{"^":"b;a,b,c,0d,$ti",
sbl:function(a){this.d=H.A(a,H.q(this,0))},
gv:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.H(z)
x=y.gj(z)
if(this.b!==x)throw H.d(P.ar(z))
w=this.c
if(w>=x){this.sbl(null)
return!1}this.sbl(y.t(z,w));++this.c
return!0},
$isb9:1},
im:{"^":"bc;a,b,$ti",
gj:function(a){return J.aW(this.a)},
t:function(a,b){return this.b.$1(J.fz(this.a,b))},
$asbc:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
ea:{"^":"l;a,b,$ti",
gA:function(a){return new H.jy(J.ad(this.a),this.b,this.$ti)}},
jy:{"^":"b9;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gv(z)))return!0
return!1},
gv:function(a){var z=this.a
return z.gv(z)}},
bY:{"^":"b;$ti"}}],["","",,H,{"^":"",
aT:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lB:function(a){return init.types[H.j(a)]},
lM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isz},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bv(a)
if(typeof z!=="string")throw H.d(H.av(a))
return z},
bi:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bj:function(a){return H.iL(a)+H.cb(H.ay(a),0,null)},
iL:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbn){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aT(w.length>1&&C.i.av(w,0)===36?C.i.cO(w,1):w)},
a0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iS:function(a){return a.b?H.a0(a).getUTCFullYear()+0:H.a0(a).getFullYear()+0},
iQ:function(a){return a.b?H.a0(a).getUTCMonth()+1:H.a0(a).getMonth()+1},
iM:function(a){return a.b?H.a0(a).getUTCDate()+0:H.a0(a).getDate()+0},
iN:function(a){return a.b?H.a0(a).getUTCHours()+0:H.a0(a).getHours()+0},
iP:function(a){return a.b?H.a0(a).getUTCMinutes()+0:H.a0(a).getMinutes()+0},
iR:function(a){return a.b?H.a0(a).getUTCSeconds()+0:H.a0(a).getSeconds()+0},
iO:function(a){return a.b?H.a0(a).getUTCMilliseconds()+0:H.a0(a).getMilliseconds()+0},
ap:function(a){throw H.d(H.av(a))},
h:function(a,b){if(a==null)J.aW(a)
throw H.d(H.aP(a,b))},
aP:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aA(!0,b,"index",null)
z=H.j(J.aW(a))
if(!(b<0)){if(typeof z!=="number")return H.ap(z)
y=b>=z}else y=!0
if(y)return P.J(b,a,"index",null,z)
return P.c3(b,"index",null)},
av:function(a){return new P.aA(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.c0()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eQ})
z.name=""}else z.toString=H.eQ
return z},
eQ:function(){return J.bv(this.dartException)},
ac:function(a){throw H.d(a)},
N:function(a){throw H.d(P.ar(a))},
a2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lX(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dW(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eX()
u=$.eY()
t=$.eZ()
s=$.f_()
r=$.f2()
q=$.f3()
p=$.f1()
$.f0()
o=$.f5()
n=$.f4()
m=v.M(y)
if(m!=null)return z.$1(H.cF(H.w(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cF(H.w(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dW(H.w(y),m))}}return z.$1(new H.ju(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aA(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e0()
return a},
aQ:function(a){var z
if(a==null)return new H.er(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.er(a)},
ly:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
lL:function(a,b,c,d,e,f){H.i(a,"$isbz")
switch(H.j(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.dI("Unsupported number of arguments for wrapped closure"))},
ax:function(a,b){var z
H.j(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lL)
a.$identity=z
return z},
he:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iW(z).r}else x=d
w=e?Object.create(new H.ja().constructor.prototype):Object.create(new H.ct(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ak
if(typeof u!=="number")return u.L()
$.ak=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dw(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lB,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.du:H.cu
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dw(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
hb:function(a,b,c,d){var z=H.cu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dw:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hd(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hb(y,!w,z,b)
if(y===0){w=$.ak
if(typeof w!=="number")return w.L()
$.ak=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.bV("self")
$.b6=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ak
if(typeof w!=="number")return w.L()
$.ak=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.bV("self")
$.b6=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
hc:function(a,b,c,d){var z,y
z=H.cu
y=H.du
switch(b?-1:a){case 0:throw H.d(H.j1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hd:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.bV("self")
$.b6=z}y=$.dt
if(y==null){y=H.bV("receiver")
$.dt=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hc(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ak
if(typeof y!=="number")return y.L()
$.ak=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ak
if(typeof y!=="number")return y.L()
$.ak=y+1
return new Function(z+y+"}")()},
cY:function(a,b,c,d,e,f,g){return H.he(a,b,H.j(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.af(a,"String"))},
b3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.af(a,"double"))},
d3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.af(a,"num"))},
cd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.af(a,"bool"))},
j:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.af(a,"int"))},
d4:function(a,b){throw H.d(H.af(a,H.aT(H.w(b).substring(3))))},
lT:function(a,b){throw H.d(H.dv(a,H.aT(H.w(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.d4(a,b)},
aq:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.lT(a,b)},
eN:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.d4(a,b)},
K:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.d(H.af(a,"List<dynamic>"))},
aR:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.d4(a,b)},
cZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.j(z)]
else return a.$S()}return},
bL:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cZ(J.C(a))
if(z==null)return!1
return H.ew(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cU)return a
$.cU=!0
try{if(H.bL(a,b))return a
z=H.bO(b)
y=H.af(a,z)
throw H.d(y)}finally{$.cU=!1}},
b4:function(a,b){if(a!=null&&!H.cX(a,b))H.ac(H.af(a,H.bO(b)))
return a},
eA:function(a){var z,y
z=J.C(a)
if(!!z.$iso){y=H.cZ(z)
if(y!=null)return H.bO(y)
return"Closure"}return H.bj(a)},
lW:function(a){throw H.d(new P.hm(H.w(a)))},
eJ:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
ay:function(a){if(a==null)return
return a.$ti},
ob:function(a,b,c){return H.b5(a["$as"+H.e(c)],H.ay(b))},
bs:function(a,b,c,d){var z
H.w(c)
H.j(d)
z=H.b5(a["$as"+H.e(c)],H.ay(b))
return z==null?null:z[d]},
d0:function(a,b,c){var z
H.w(b)
H.j(c)
z=H.b5(a["$as"+H.e(b)],H.ay(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.j(b)
z=H.ay(a)
return z==null?null:z[b]},
bO:function(a){return H.aO(a,null)},
aO:function(a,b){var z,y
H.p(b,"$isa",[P.c],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aT(a[0].builtin$cls)+H.cb(a,1,b)
if(typeof a=="function")return H.aT(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.j(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.e(b[y])}if('func' in a)return H.lg(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.c]
H.p(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lx(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cb:function(a,b,c){var z,y,x,w,v,u
H.p(c,"$isa",[P.c],"$asa")
if(a==null)return""
z=new P.cM("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}return"<"+z.k(0)+">"},
lA:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$iso){y=H.cZ(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ay(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aw:function(a,b,c,d){var z,y
H.w(b)
H.K(c)
H.w(d)
if(a==null)return!1
z=H.ay(a)
y=J.C(a)
if(y[b]==null)return!1
return H.eD(H.b5(y[d],z),null,c,null)},
bP:function(a,b,c,d){H.w(b)
H.K(c)
H.w(d)
if(a==null)return a
if(H.aw(a,b,c,d))return a
throw H.d(H.dv(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aT(b.substring(3))+H.cb(c,0,null),init.mangledGlobalNames)))},
p:function(a,b,c,d){H.w(b)
H.K(c)
H.w(d)
if(a==null)return a
if(H.aw(a,b,c,d))return a
throw H.d(H.af(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aT(b.substring(3))+H.cb(c,0,null),init.mangledGlobalNames)))},
eD:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aa(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aa(a[y],b,c[y],d))return!1
return!0},
o7:function(a,b,c){return a.apply(b,H.b5(J.C(b)["$as"+H.e(c)],H.ay(b)))},
eL:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="B"||a===-1||a===-2||H.eL(z)}return!1},
cX:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="B"||b===-1||b===-2||H.eL(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cX(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bL(a,b)}z=J.C(a).constructor
y=H.ay(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aa(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cX(a,b))throw H.d(H.af(a,H.bO(b)))
return a},
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aa(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.ew(a,b,c,d)
if('func' in a)return c.builtin$cls==="bz"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aa("type" in a?a.type:null,b,x,d)
else if(H.aa(a,b,x,d))return!0
else{if(!('$is'+"a5" in y.prototype))return!1
w=y.prototype["$as"+"a5"]
v=H.b5(w,z?a.slice(1):null)
return H.aa(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eD(H.b5(r,z),b,u,d)},
ew:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aa(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aa(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aa(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aa(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lS(m,b,l,d)},
lS:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aa(c[w],d,a[w],b))return!1}return!0},
o8:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
lN:function(a){var z,y,x,w,v,u
z=H.w($.eK.$1(a))
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.eC.$2(a,z))
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ci(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ch[z]=x
return x}if(v==="-"){u=H.ci(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eO(a,x)
if(v==="*")throw H.d(P.cN(z))
if(init.leafTags[z]===true){u=H.ci(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eO(a,x)},
eO:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d2(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ci:function(a){return J.d2(a,!1,null,!!a.$isz)},
lR:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ci(z)
else return J.d2(z,c,null,null)},
lJ:function(){if(!0===$.d1)return
$.d1=!0
H.lK()},
lK:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.ch=Object.create(null)
H.lF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eP.$1(v)
if(u!=null){t=H.lR(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lF:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.b2(C.N,H.b2(C.S,H.b2(C.A,H.b2(C.A,H.b2(C.R,H.b2(C.O,H.b2(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eK=new H.lG(v)
$.eC=new H.lH(u)
$.eP=new H.lI(t)},
b2:function(a,b){return a(b)||b},
lV:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iV:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iW:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cC(z)
y=z[0]
x=z[1]
return new H.iV(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jo:{"^":"b;a,b,c,d,e,f",
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
am:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.c])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jo(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e7:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iF:{"^":"U;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dW:function(a,b){return new H.iF(a,b==null?null:b.method)}}},
i3:{"^":"U;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i3(a,y,z?null:b.receiver)}}},
ju:{"^":"U;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lX:{"^":"o:8;a",
$1:function(a){if(!!J.C(a).$isU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
er:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isV:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.bj(this).trim()+"'"},
gcD:function(){return this},
$isbz:1,
gcD:function(){return this}},
e2:{"^":"o;"},
ja:{"^":"e2;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aT(z)+"'"}},
ct:{"^":"e2;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ct))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.bi(this.a)
else y=typeof z!=="object"?J.az(z):H.bi(z)
return(y^H.bi(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bj(z)+"'")},
p:{
cu:function(a){return a.a},
du:function(a){return a.c},
bV:function(a){var z,y,x,w,v
z=new H.ct("self","target","receiver","name")
y=J.cC(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jp:{"^":"U;a",
k:function(a){return this.a},
p:{
af:function(a,b){return new H.jp("TypeError: "+H.e(P.bX(a))+": type '"+H.eA(a)+"' is not a subtype of type '"+b+"'")}}},
h9:{"^":"U;a",
k:function(a){return this.a},
p:{
dv:function(a,b){return new H.h9("CastError: "+H.e(P.bX(a))+": type '"+H.eA(a)+"' is not a subtype of type '"+b+"'")}}},
j0:{"^":"U;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
j1:function(a){return new H.j0(a)}}},
e8:{"^":"b;a,0b,0c,0d",
gah:function(){var z=this.b
if(z==null){z=H.bO(this.a)
this.b=z}return z},
k:function(a){return this.gah()},
gw:function(a){var z=this.d
if(z==null){z=C.i.gw(this.gah())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.e8&&this.gah()===b.gah()}},
cE:{"^":"cI;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gE:function(a){return new H.au(this,[H.q(this,0)])},
B:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dk(z,b)}else{y=this.er(b)
return y}},
er:function(a){var z=this.d
if(z==null)return!1
return this.aN(this.aB(z,J.az(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ae(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ae(w,b)
x=y==null?null:y.b
return x}else return this.es(b)},
es:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aB(z,J.az(a)&0x3ffffff)
x=this.aN(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.bm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.bm(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.az(b)&0x3ffffff
v=this.aB(x,w)
if(v==null)this.aF(x,w,[this.at(b,c)])
else{u=this.aN(v,b)
if(u>=0)v[u].b=c
else v.push(this.at(b,c))}}},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bo()}},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.ar(this))
z=z.c}},
bm:function(a,b,c){var z
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
z=this.ae(a,b)
if(z==null)this.aF(a,b,this.at(b,c))
else z.b=c},
bo:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.ib(H.A(a,H.q(this,0)),H.A(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bo()
return z},
aN:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aU(a[y].a,b))return y
return-1},
k:function(a){return P.dQ(this)},
ae:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aF:function(a,b,c){a[b]=c},
dm:function(a,b){delete a[b]},
dk:function(a,b){return this.ae(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aF(z,"<non-identifier-key>",z)
this.dm(z,"<non-identifier-key>")
return z},
$isdO:1},
ib:{"^":"b;a,b,0c,0d"},
au:{"^":"dE;a,$ti",
gj:function(a){return this.a.a},
gA:function(a){var z,y
z=this.a
y=new H.ic(z,z.r,this.$ti)
y.c=z.e
return y},
u:function(a,b){return this.a.B(0,b)}},
ic:{"^":"b;a,b,0c,0d,$ti",
sbn:function(a){this.d=H.A(a,H.q(this,0))},
gv:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.ar(z))
else{z=this.c
if(z==null){this.sbn(null)
return!1}else{this.sbn(z.a)
this.c=this.c.c
return!0}}},
$isb9:1},
lG:{"^":"o:8;a",
$1:function(a){return this.a(a)}},
lH:{"^":"o:35;a",
$2:function(a,b){return this.a(a,b)}},
lI:{"^":"o:16;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
lx:function(a){return J.i0(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ca:function(a){var z,y
if(!!J.C(a).$isy)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ao:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aP(b,a))},
iA:{"^":"k;",$isjq:1,"%":"DataView;ArrayBufferView;cJ|el|em|dT|en|eo|aF"},
cJ:{"^":"iA;",
gj:function(a){return a.length},
$isy:1,
$asy:I.bq,
$isz:1,
$asz:I.bq},
dT:{"^":"em;",
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
i:function(a,b,c){H.j(b)
H.b3(c)
H.ao(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.S]},
$asr:function(){return[P.S]},
$isl:1,
$asl:function(){return[P.S]},
$isa:1,
$asa:function(){return[P.S]},
"%":"Float64Array"},
aF:{"^":"eo;",
i:function(a,b,c){H.j(b)
H.j(c)
H.ao(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.E]},
$asr:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
iz:{"^":"dT;",$isat:1,"%":"Float32Array"},
mS:{"^":"aF;",
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mT:{"^":"aF;",
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
$ishY:1,
"%":"Int32Array"},
mU:{"^":"aF;",
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mV:{"^":"aF;",
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
iB:{"^":"aF;",
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
$isnG:1,
"%":"Uint32Array"},
mW:{"^":"aF;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mX:{"^":"aF;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
H.ao(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
el:{"^":"cJ+r;"},
em:{"^":"el+bY;"},
en:{"^":"cJ+r;"},
eo:{"^":"en+bY;"}}],["","",,P,{"^":"",
jF:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ax(new P.jH(z),1)).observe(y,{childList:true})
return new P.jG(z,y,x)}else if(self.setImmediate!=null)return P.lq()
return P.lr()},
nQ:[function(a){self.scheduleImmediate(H.ax(new P.jI(H.m(a,{func:1,ret:-1})),0))},"$1","lp",4,0,3],
nR:[function(a){self.setImmediate(H.ax(new P.jJ(H.m(a,{func:1,ret:-1})),0))},"$1","lq",4,0,3],
nS:[function(a){H.m(a,{func:1,ret:-1})
P.kX(0,a)},"$1","lr",4,0,3],
hG:function(a,b,c){var z
H.i(b,"$isV")
if(a==null)a=new P.c0()
z=$.F
if(z!==C.f)z.toString
z=new P.R(0,z,[c])
z.bs(a,b)
return z},
hH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.p(a,"$isl",[[P.a5,d]],"$asl")
s=[P.a,d]
r=[s]
y=new P.R(0,$.F,r)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hJ(z,b,!1,y)
try{for(q=a,p=q.length,o=0,n=0;o<q.length;q.length===p||(0,H.N)(q),++o){w=q[o]
v=n
w.aR(new P.hI(z,v,y,b,!1,d),x,null)
n=++z.b}if(n===0){r=new P.R(0,$.F,r)
r.br(C.Z)
return r}r=new Array(n)
r.fixed$length=Array
z.a=H.f(r,[d])}catch(m){u=H.a2(m)
t=H.aQ(m)
if(z.b===0||!1)return P.hG(u,t,s)
else{z.c=u
z.d=t}}return y},
ll:function(a,b){if(H.bL(a,{func:1,args:[P.b,P.V]}))return H.m(a,{func:1,ret:null,args:[P.b,P.V]})
if(H.bL(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.dn(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lj:function(){var z,y
for(;z=$.b0,z!=null;){$.bp=null
y=z.b
$.b0=y
if(y==null)$.bo=null
z.a.$0()}},
o3:[function(){$.cV=!0
try{P.lj()}finally{$.bp=null
$.cV=!1
if($.b0!=null)$.d6().$1(P.eE())}},"$0","eE",0,0,1],
ez:function(a){var z=new P.ec(H.m(a,{func:1,ret:-1}))
if($.b0==null){$.bo=z
$.b0=z
if(!$.cV)$.d6().$1(P.eE())}else{$.bo.b=z
$.bo=z}},
lo:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.b0
if(z==null){P.ez(a)
$.bp=$.bo
return}y=new P.ec(a)
x=$.bp
if(x==null){y.b=z
$.bp=y
$.b0=y}else{y.b=x.b
x.b=y
$.bp=y
if(y.b==null)$.bo=y}},
lU:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.F
if(C.f===y){P.b1(null,null,C.f,a)
return}y.toString
P.b1(null,null,y,H.m(y.bJ(a),z))},
le:function(a,b,c){a.e2(0)
b.ac(c)},
cc:function(a,b,c,d,e){var z={}
z.a=d
P.lo(new P.lm(z,e))},
ex:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
ey:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
ln:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
b1:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bJ(d):c.dZ(d,-1)
P.ez(d)},
jH:{"^":"o:9;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jG:{"^":"o:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jI:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jJ:{"^":"o:0;a",
$0:function(){this.a.$0()}},
kW:{"^":"b;a,0b,c",
df:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ax(new P.kY(this,b),0),a)
else throw H.d(P.D("`setTimeout()` not found."))},
p:{
kX:function(a,b){var z=new P.kW(!0,0)
z.df(a,b)
return z}}},
kY:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a5:{"^":"b;$ti"},
hJ:{"^":"o:17;a,b,c,d",
$2:function(a,b){var z,y
H.i(b,"$isV")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.H(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.H(z.c,z.d)}},
hI:{"^":"o;a,b,c,d,e,f",
$1:function(a){var z,y
H.A(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bu(z.a)}else if(z.b===0&&!this.e)this.c.H(z.c,z.d)},
$S:function(){return{func:1,ret:P.B,args:[this.f]}}},
ef:{"^":"b;$ti",
e6:function(a,b){if(a==null)a=new P.c0()
if(this.a.a!==0)throw H.d(P.bH("Future already completed"))
$.F.toString
this.H(a,b)},
e5:function(a){return this.e6(a,null)}},
cQ:{"^":"ef;a,$ti",
a8:function(a,b){var z
H.b4(b,{futureOr:1,type:H.q(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.bH("Future already completed"))
z.br(b)},
H:function(a,b){this.a.bs(a,b)}},
kR:{"^":"ef;a,$ti",
a8:function(a,b){var z
H.b4(b,{futureOr:1,type:H.q(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.bH("Future already completed"))
z.ac(b)},
H:function(a,b){this.a.H(a,b)}},
aZ:{"^":"b;0a,b,c,d,e,$ti",
ew:function(a){if(this.c!==6)return!0
return this.b.b.aQ(H.m(this.d,{func:1,ret:P.Y,args:[P.b]}),a.a,P.Y,P.b)},
eq:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bL(z,{func:1,args:[P.b,P.V]}))return H.b4(w.eD(z,a.a,a.b,null,y,P.V),x)
else return H.b4(w.aQ(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
R:{"^":"b;bB:a<,b,0dJ:c<,$ti",
aR:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.f){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ll(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.R(0,$.F,[c])
w=b==null?1:3
this.bq(new P.aZ(x,w,a,b,[z,c]))
return x},
ak:function(a,b){return this.aR(a,null,b)},
bq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.i(this.c,"$isR")
z=y.a
if(z<4){y.bq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.b1(null,null,z,H.m(new P.k_(this,a),{func:1,ret:-1}))}},
by:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isR")
y=u.a
if(y<4){u.by(a)
return}this.a=y
this.c=u.c}z.a=this.ag(a)
y=this.b
y.toString
P.b1(null,null,y,H.m(new P.k6(z,this),{func:1,ret:-1}))}},
af:function(){var z=H.i(this.c,"$isaZ")
this.c=null
return this.ag(z)},
ag:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ac:function(a){var z,y,x
z=H.q(this,0)
H.b4(a,{futureOr:1,type:z})
y=this.$ti
if(H.aw(a,"$isa5",y,"$asa5"))if(H.aw(a,"$isR",y,null))P.c7(a,this)
else P.eg(a,this)
else{x=this.af()
H.A(a,z)
this.a=4
this.c=a
P.b_(this,x)}},
bu:function(a){var z
H.A(a,H.q(this,0))
z=this.af()
this.a=4
this.c=a
P.b_(this,z)},
H:function(a,b){var z
H.i(b,"$isV")
z=this.af()
this.a=8
this.c=new P.a9(a,b)
P.b_(this,z)},
br:function(a){var z
H.b4(a,{futureOr:1,type:H.q(this,0)})
if(H.aw(a,"$isa5",this.$ti,"$asa5")){this.di(a)
return}this.a=1
z=this.b
z.toString
P.b1(null,null,z,H.m(new P.k1(this,a),{func:1,ret:-1}))},
di:function(a){var z=this.$ti
H.p(a,"$isa5",z,"$asa5")
if(H.aw(a,"$isR",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.b1(null,null,z,H.m(new P.k5(this,a),{func:1,ret:-1}))}else P.c7(a,this)
return}P.eg(a,this)},
bs:function(a,b){var z
H.i(b,"$isV")
this.a=1
z=this.b
z.toString
P.b1(null,null,z,H.m(new P.k0(this,a,b),{func:1,ret:-1}))},
$isa5:1,
p:{
eg:function(a,b){var z,y,x
b.a=1
try{a.aR(new P.k2(b),new P.k3(b),null)}catch(x){z=H.a2(x)
y=H.aQ(x)
P.lU(new P.k4(b,z,y))}},
c7:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isR")
if(z>=4){y=b.af()
b.a=a.a
b.c=a.c
P.b_(b,y)}else{y=H.i(b.c,"$isaZ")
b.a=2
b.c=a
a.by(y)}},
b_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa9")
y=y.b
u=v.a
t=v.b
y.toString
P.cc(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b_(z.a,b)}y=z.a
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
if(p){H.i(r,"$isa9")
y=y.b
u=r.a
t=r.b
y.toString
P.cc(null,null,y,u,t)
return}o=$.F
if(o!=q)$.F=q
else o=null
y=b.c
if(y===8)new P.k9(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k8(x,b,r).$0()}else if((y&2)!==0)new P.k7(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.C(y).$isa5){if(y.a>=4){n=H.i(t.c,"$isaZ")
t.c=null
b=t.ag(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c7(y,t)
return}}m=b.b
n=H.i(m.c,"$isaZ")
m.c=null
b=m.ag(n)
y=x.a
u=x.b
if(!y){H.A(u,H.q(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa9")
m.a=8
m.c=u}z.a=m
y=m}}}},
k_:{"^":"o:0;a,b",
$0:function(){P.b_(this.a,this.b)}},
k6:{"^":"o:0;a,b",
$0:function(){P.b_(this.b,this.a.a)}},
k2:{"^":"o:9;a",
$1:function(a){var z=this.a
z.a=0
z.ac(a)}},
k3:{"^":"o:18;a",
$2:function(a,b){H.i(b,"$isV")
this.a.H(a,b)},
$1:function(a){return this.$2(a,null)}},
k4:{"^":"o:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
k1:{"^":"o:0;a,b",
$0:function(){var z=this.a
z.bu(H.A(this.b,H.q(z,0)))}},
k5:{"^":"o:0;a,b",
$0:function(){P.c7(this.b,this.a)}},
k0:{"^":"o:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
k9:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cf(H.m(w.d,{func:1}),null)}catch(v){y=H.a2(v)
x=H.aQ(v)
if(this.d){w=H.i(this.a.a.c,"$isa9").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa9")
else u.b=new P.a9(y,x)
u.a=!0
return}if(!!J.C(z).$isa5){if(z instanceof P.R&&z.gbB()>=4){if(z.gbB()===8){w=this.b
w.b=H.i(z.gdJ(),"$isa9")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ak(new P.ka(t),null)
w.a=!1}}},
ka:{"^":"o:19;a",
$1:function(a){return this.a}},
k8:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.A(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aQ(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a2(t)
y=H.aQ(t)
x=this.a
x.b=new P.a9(z,y)
x.a=!0}}},
k7:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa9")
w=this.c
if(w.ew(z)&&w.e!=null){v=this.b
v.b=w.eq(z)
v.a=!1}}catch(u){y=H.a2(u)
x=H.aQ(u)
w=H.i(this.a.a.c,"$isa9")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a9(y,x)
s.a=!0}}},
ec:{"^":"b;a,0b"},
je:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.R(0,$.F,[P.E])
z.a=0
x=H.q(this,0)
w=H.m(new P.jj(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.jk(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y},
gem:function(a){var z,y,x,w
z={}
y=new P.R(0,$.F,this.$ti)
z.a=null
x=H.q(this,0)
w=H.m(new P.jh(z,this,y),{func:1,ret:-1,args:[x]})
H.m(new P.ji(y),{func:1,ret:-1})
z.a=W.ah(this.a,this.b,w,!1,x)
return y}},
jj:{"^":"o;a,b",
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.q(this.b,0)]}}},
jk:{"^":"o:0;a,b",
$0:function(){this.b.ac(this.a.a)}},
jh:{"^":"o;a,b,c",
$1:function(a){H.A(a,H.q(this.b,0))
P.le(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.B,args:[H.q(this.b,0)]}}},
ji:{"^":"o:0;a",
$0:function(){var z,y,x,w
try{x=H.cB()
throw H.d(x)}catch(w){z=H.a2(w)
y=H.aQ(w)
$.F.toString
this.a.H(z,y)}}},
jf:{"^":"b;"},
jg:{"^":"b;"},
a9:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isU:1},
l3:{"^":"b;",$isnO:1},
lm:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c0()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.k(0)
throw x}},
kA:{"^":"l3;",
eE:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.f===$.F){a.$0()
return}P.ex(null,null,this,a,-1)}catch(x){z=H.a2(x)
y=H.aQ(x)
P.cc(null,null,this,z,H.i(y,"$isV"))}},
eF:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.F){a.$1(b)
return}P.ey(null,null,this,a,b,-1,c)}catch(x){z=H.a2(x)
y=H.aQ(x)
P.cc(null,null,this,z,H.i(y,"$isV"))}},
dZ:function(a,b){return new P.kC(this,H.m(a,{func:1,ret:b}),b)},
bJ:function(a){return new P.kB(this,H.m(a,{func:1,ret:-1}))},
e_:function(a,b){return new P.kD(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
cf:function(a,b){H.m(a,{func:1,ret:b})
if($.F===C.f)return a.$0()
return P.ex(null,null,this,a,b)},
aQ:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.F===C.f)return a.$1(b)
return P.ey(null,null,this,a,b,c,d)},
eD:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.F===C.f)return a.$2(b,c)
return P.ln(null,null,this,a,b,c,d,e,f)}},
kC:{"^":"o;a,b,c",
$0:function(){return this.a.cf(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kB:{"^":"o:1;a,b",
$0:function(){return this.a.eE(this.b)}},
kD:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.eF(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cG:function(a,b,c){H.K(a)
return H.p(H.ly(a,new H.cE(0,0,[b,c])),"$isdO",[b,c],"$asdO")},
a6:function(a,b){return new H.cE(0,0,[a,b])},
id:function(){return new H.cE(0,0,[null,null])},
ae:function(a,b,c,d){return new P.kk(0,0,[d])},
hZ:function(a,b,c){var z,y
if(P.cW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.f([],[P.c])
y=$.bt()
C.a.l(y,a)
try{P.li(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.e1(b,H.aR(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.cW(a))return b+"..."+c
z=new P.cM(b)
y=$.bt()
C.a.l(y,a)
try{x=z
x.a=P.e1(x.gY(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gY()+c
y=z.gY()
return y.charCodeAt(0)==0?y:y},
cW:function(a){var z,y
for(z=0;y=$.bt(),z<y.length;++z)if(a===y[z])return!0
return!1},
li:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.p(b,"$isa",[P.c],"$asa")
z=a.gA(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.e(z.gv(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gv(z);++x
if(!z.q()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gv(z);++x
for(;z.q();t=s,s=r){r=z.gv(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cH:function(a,b){var z,y,x
z=P.ae(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.A(a[x],b))
return z},
dQ:function(a){var z,y,x
z={}
if(P.cW(a))return"{...}"
y=new P.cM("")
try{C.a.l($.bt(),a)
x=y
x.a=x.gY()+"{"
z.a=!0
J.fC(a,new P.il(z,y))
z=y
z.a=z.gY()+"}"}finally{z=$.bt()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gY()
return z.charCodeAt(0)==0?z:z},
kk:{"^":"kc;a,0b,0c,0d,0e,0f,r,$ti",
gA:function(a){var z=new P.ek(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbK")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbK")!=null}else return this.dj(b)},
dj:function(a){var z=this.d
if(z==null)return!1
return this.az(this.bx(z,a),a)>=0},
l:function(a,b){var z,y
H.A(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cS()
this.b=z}return this.bp(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cS()
this.c=y}return this.bp(y,b)}else return this.dg(0,b)},
dg:function(a,b){var z,y,x
H.A(b,H.q(this,0))
z=this.d
if(z==null){z=P.cS()
this.d=z}y=this.bv(b)
x=z[y]
if(x==null)z[y]=[this.aE(b)]
else{if(this.az(x,b)>=0)return!1
x.push(this.aE(b))}return!0},
cd:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.dD(0,b)},
dD:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bx(z,b)
x=this.az(y,b)
if(x<0)return!1
this.bD(y.splice(x,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
bp:function(a,b){H.A(b,H.q(this,0))
if(H.i(a[b],"$isbK")!=null)return!1
a[b]=this.aE(b)
return!0},
bz:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbK")
if(z==null)return!1
this.bD(z)
delete a[b]
return!0},
aC:function(){this.r=this.r+1&67108863},
aE:function(a){var z,y
z=new P.bK(H.A(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aC()
return z},
bD:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aC()},
bv:function(a){return J.az(a)&0x3ffffff},
bx:function(a,b){return a[this.bv(b)]},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aU(a[y].a,b))return y
return-1},
p:{
cS:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bK:{"^":"b;a,0b,0c"},
ek:{"^":"b;a,b,0c,0d,$ti",
sbt:function(a){this.d=H.A(a,H.q(this,0))},
gv:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.ar(z))
else{z=this.c
if(z==null){this.sbt(null)
return!1}else{this.sbt(H.A(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isb9:1,
p:{
kl:function(a,b,c){var z=new P.ek(a,b,[c])
z.c=a.e
return z}}},
kc:{"^":"j2;"},
ie:{"^":"km;",$isl:1,$isa:1},
r:{"^":"b;$ti",
gA:function(a){return new H.dP(a,this.gj(a),0,[H.bs(this,a,"r",0)])},
t:function(a,b){return this.h(a,b)},
eo:function(a,b,c,d){var z,y,x
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bs(this,a,"r",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.d(P.ar(a))}return y},
k:function(a){return P.cA(a,"[","]")}},
cI:{"^":"X;"},
il:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
X:{"^":"b;$ti",
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bs(this,a,"X",0),H.bs(this,a,"X",1)]})
for(z=J.ad(this.gE(a));z.q();){y=z.gv(z)
b.$2(y,this.h(a,y))}},
B:function(a,b){return J.fq(this.gE(a),b)},
gj:function(a){return J.aW(this.gE(a))},
k:function(a){return P.dQ(a)},
$isu:1},
j3:{"^":"b;$ti",
J:function(a,b){var z
for(z=J.ad(H.p(b,"$isl",this.$ti,"$asl"));z.q();)this.l(0,z.gv(z))},
k:function(a){return P.cA(this,"{","}")},
$isl:1,
$isne:1},
j2:{"^":"j3;"},
km:{"^":"b+r;"}}],["","",,P,{"^":"",
lk:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.d(H.av(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.a2(x)
w=String(y)
throw H.d(new P.hD(w,null,null))}w=P.c9(z)
return w},
c9:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.kg(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.c9(a[z])
return a},
kg:{"^":"cI;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dC(b):y}},
gj:function(a){return this.b==null?this.c.a:this.ad().length},
gE:function(a){var z
if(this.b==null){z=this.c
return new H.au(z,[H.q(z,0)])}return new P.kh(this)},
B:function(a,b){if(this.b==null)return this.c.B(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
D:function(a,b){var z,y,x,w
H.m(b,{func:1,ret:-1,args:[P.c,,]})
if(this.b==null)return this.c.D(0,b)
z=this.ad()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c9(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.d(P.ar(this))}},
ad:function(){var z=H.K(this.c)
if(z==null){z=H.f(Object.keys(this.a),[P.c])
this.c=z}return z},
dC:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c9(this.a[a])
return this.b[a]=z},
$asX:function(){return[P.c,null]},
$asu:function(){return[P.c,null]}},
kh:{"^":"bc;a",
gj:function(a){var z=this.a
return z.gj(z)},
t:function(a,b){var z=this.a
if(z.b==null)z=z.gE(z).t(0,b)
else{z=z.ad()
if(b<0||b>=z.length)return H.h(z,b)
z=z[b]}return z},
gA:function(a){var z=this.a
if(z.b==null){z=z.gE(z)
z=z.gA(z)}else{z=z.ad()
z=new J.dp(z,z.length,0,[H.q(z,0)])}return z},
u:function(a,b){return this.a.B(0,b)},
$asbc:function(){return[P.c]},
$asl:function(){return[P.c]}},
dx:{"^":"b;$ti"},
dy:{"^":"jg;$ti"},
i4:{"^":"dx;a,b",
ef:function(a,b,c){var z=P.lk(b,this.geg().a)
return z},
ee:function(a,b){return this.ef(a,b,null)},
geg:function(){return C.V},
$asdx:function(){return[P.b,P.c]}},
i5:{"^":"dy;a",
$asdy:function(){return[P.c,P.b]}}}],["","",,P,{"^":"",
hy:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.bj(a)+"'"},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bv(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hy(a)},
dI:function(a){return new P.jX(a)},
ab:function(a){H.bN(H.e(a))},
Y:{"^":"b;"},
"+bool":0,
bx:{"^":"b;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a&&this.b===b.b},
N:function(a,b){return C.c.N(this.a,H.i(b,"$isbx").a)},
gw:function(a){var z=this.a
return(z^C.c.bA(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hn(H.iS(this))
y=P.by(H.iQ(this))
x=P.by(H.iM(this))
w=P.by(H.iN(this))
v=P.by(H.iP(this))
u=P.by(H.iR(this))
t=P.ho(H.iO(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa4:1,
$asa4:function(){return[P.bx]},
p:{
hn:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ho:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
by:function(a){if(a>=10)return""+a
return"0"+a}}},
S:{"^":"I;"},
"+double":0,
b7:{"^":"b;a",
V:function(a,b){return C.c.V(this.a,H.i(b,"$isb7").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.c.N(this.a,H.i(b,"$isb7").a)},
k:function(a){var z,y,x,w,v
z=new P.hv()
y=this.a
if(y<0)return"-"+new P.b7(0-y).k(0)
x=z.$1(C.c.I(y,6e7)%60)
w=z.$1(C.c.I(y,1e6)%60)
v=new P.hu().$1(y%1e6)
return""+C.c.I(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa4:1,
$asa4:function(){return[P.b7]},
p:{
ht:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hu:{"^":"o:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hv:{"^":"o:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
U:{"^":"b;"},
c0:{"^":"U;",
k:function(a){return"Throw of null."}},
aA:{"^":"U;a,b,c,d",
gax:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaw:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gax()+y+x
if(!this.a)return w
v=this.gaw()
u=P.bX(this.b)
return w+v+": "+H.e(u)},
p:{
cr:function(a){return new P.aA(!1,null,null,a)},
dn:function(a,b,c){return new P.aA(!0,a,b,c)}}},
dX:{"^":"aA;e,f,a,b,c,d",
gax:function(){return"RangeError"},
gaw:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
c3:function(a,b,c){return new P.dX(null,null,!0,a,b,"Value not in range")},
c2:function(a,b,c,d,e){return new P.dX(b,c,!0,a,d,"Invalid value")}}},
hX:{"^":"aA;e,j:f>,a,b,c,d",
gax:function(){return"RangeError"},
gaw:function(){var z,y
z=H.j(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
J:function(a,b,c,d,e){var z=H.j(e==null?J.aW(b):e)
return new P.hX(b,z,!0,a,c,"Index out of range")}}},
jv:{"^":"U;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
D:function(a){return new P.jv(a)}}},
jt:{"^":"U;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cN:function(a){return new P.jt(a)}}},
cL:{"^":"U;a",
k:function(a){return"Bad state: "+this.a},
p:{
bH:function(a){return new P.cL(a)}}},
hf:{"^":"U;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bX(z))+"."},
p:{
ar:function(a){return new P.hf(a)}}},
e0:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isU:1},
hm:{"^":"U;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jX:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
hD:{"^":"b;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
bz:{"^":"b;"},
E:{"^":"I;"},
"+int":0,
l:{"^":"b;$ti",
aT:["cS",function(a,b){var z=H.d0(this,"l",0)
return new H.ea(this,H.m(b,{func:1,ret:P.Y,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gA(this)
for(y=0;z.q();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.ac(P.c2(b,0,null,"index",null))
for(z=this.gA(this),y=0;z.q();){x=z.gv(z)
if(b===y)return x;++y}throw H.d(P.J(b,this,"index",null,y))},
k:function(a){return P.hZ(this,"(",")")}},
b9:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
u:{"^":"b;$ti"},
B:{"^":"b;",
gw:function(a){return P.b.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
I:{"^":"b;",$isa4:1,
$asa4:function(){return[P.I]}},
"+num":0,
b:{"^":";",
F:function(a,b){return this===b},
gw:function(a){return H.bi(this)},
k:function(a){return"Instance of '"+H.bj(this)+"'"},
toString:function(){return this.k(this)}},
V:{"^":"b;"},
c:{"^":"b;",$isa4:1,
$asa4:function(){return[P.c]},
$isiI:1},
"+String":0,
cM:{"^":"b;Y:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e1:function(a,b,c){var z=J.ad(b)
if(!z.q())return a
if(c.length===0){do a+=H.e(z.gv(z))
while(z.q())}else{a+=H.e(z.gv(z))
for(;z.q();)a=a+c+H.e(z.gv(z))}return a}}}}],["","",,W,{"^":"",
hw:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.r).O(z,a,b,c)
y.toString
z=W.x
z=new H.ea(new W.ag(y),H.m(new W.hx(),{func:1,ret:P.Y,args:[z]}),[z])
x=z.gA(z)
if(!x.q())H.ac(H.cB())
w=x.gv(x)
if(x.q())H.ac(H.i_())
return H.i(w,"$isT")},
dH:function(a){H.i(a,"$isO")
return"wheel"},
b8:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fG(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a2(x)}return z},
jU:function(a,b){return document.createElement(a)},
c8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ej:function(a,b,c,d){var z,y
z=W.c8(W.c8(W.c8(W.c8(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
cT:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jO(a)
if(!!J.C(z).$isO)return z
return}else return H.i(a,"$isO")},
lf:function(a){if(!!J.C(a).$iscw)return a
return new P.jC([],[],!1).e8(a,!0)},
eB:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.f)return a
return z.e_(a,b)},
Q:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lY:{"^":"k;0j:length=","%":"AccessibleNodeList"},
h0:{"^":"Q;",
k:function(a){return String(a)},
$ish0:1,
"%":"HTMLAnchorElement"},
lZ:{"^":"Q;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
dq:{"^":"Q;",$isdq:1,"%":"HTMLBaseElement"},
h5:{"^":"k;","%":";Blob"},
bU:{"^":"Q;",$isbU:1,"%":"HTMLBodyElement"},
bw:{"^":"Q;0n:height=,0m:width=",
cE:function(a,b,c){var z=this.dr(a,b,P.ls(c,null))
return z},
dr:function(a,b,c){return a.getContext(b,c)},
$isbw:1,
"%":"HTMLCanvasElement"},
m3:{"^":"k;",
am:function(a){return P.W(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
m4:{"^":"x;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hi:{"^":"cv;",$ishi:1,"%":"CSSNumericValue|CSSUnitValue"},
m6:{"^":"hl;0j:length=","%":"CSSPerspective"},
aB:{"^":"k;",$isaB:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hj:{"^":"jM;0j:length=",
aY:function(a,b){var z=this.ds(a,this.au(a,b))
return z==null?"":z},
au:function(a,b){var z,y
z=$.eT()
y=z[b]
if(typeof y==="string")return y
y=this.dR(a,b)
z[b]=y
return y},
dR:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hp()+b
if(z in a)return z
return b},
ds:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hk:{"^":"b;",
gn:function(a){return this.aY(a,"height")},
gm:function(a){return this.aY(a,"width")}},
cv:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
hl:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
m8:{"^":"cv;0j:length=","%":"CSSTransformValue"},
m9:{"^":"cv;0j:length=","%":"CSSUnparsedValue"},
mb:{"^":"k;0j:length=",
h:function(a,b){return a[H.j(b)]},
"%":"DataTransferItemList"},
hq:{"^":"Q;","%":"HTMLDivElement"},
cw:{"^":"x;",
dU:function(a,b){return a.adoptNode(b)},
dl:function(a,b){return a.createEvent(b)},
aU:function(a,b){return a.getElementsByTagName(b)},
cF:function(a,b){return a.getElementById(b)},
ez:function(a,b){return a.querySelector(b)},
gc8:function(a){return new W.bI(a,"mousedown",!1,[W.a_])},
gc9:function(a){return new W.bI(a,"mousemove",!1,[W.a_])},
gca:function(a){return new W.bI(a,"mouseup",!1,[W.a_])},
gcb:function(a){return new W.bI(a,H.w(W.dH(a)),!1,[W.aX])},
$iscw:1,
"%":"XMLDocument;Document"},
mc:{"^":"k;",
k:function(a){return String(a)},
"%":"DOMException"},
hr:{"^":"k;",
ec:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
md:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.p(c,"$isa1",[P.I],"$asa1")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[[P.a1,P.I]]},
$isz:1,
$asz:function(){return[[P.a1,P.I]]},
$asr:function(){return[[P.a1,P.I]]},
$isl:1,
$asl:function(){return[[P.a1,P.I]]},
$isa:1,
$asa:function(){return[[P.a1,P.I]]},
$asv:function(){return[[P.a1,P.I]]},
"%":"ClientRectList|DOMRectList"},
hs:{"^":"k;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aw(b,"$isa1",[P.I],"$asa1"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.ej(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa1:1,
$asa1:function(){return[P.I]},
"%":";DOMRectReadOnly"},
me:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.w(c)
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[P.c]},
$isz:1,
$asz:function(){return[P.c]},
$asr:function(){return[P.c]},
$isl:1,
$asl:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asv:function(){return[P.c]},
"%":"DOMStringList"},
mf:{"^":"k;0j:length=","%":"DOMTokenList"},
T:{"^":"x;0eG:tagName=",
gdX:function(a){return new W.jT(a)},
k:function(a){return a.localName},
O:["ap",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dG
if(z==null){z=H.f([],[W.al])
y=new W.dV(z)
C.a.l(z,W.eh(null))
C.a.l(z,W.es())
$.dG=y
d=y}else d=z
z=$.dF
if(z==null){z=new W.ev(d)
$.dF=z
c=z}else{z.a=d
c=z}}if($.as==null){z=document
y=z.implementation
y=(y&&C.K).ec(y,"")
$.as=y
$.cx=y.createRange()
y=$.as
y.toString
y=y.createElement("base")
H.i(y,"$isdq")
y.href=z.baseURI
z=$.as.head;(z&&C.L).K(z,y)}z=$.as
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbU")}z=$.as
if(!!this.$isbU)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.as.body;(z&&C.r).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.X,a.tagName)){z=$.cx;(z&&C.D).cH(z,x)
z=$.cx
w=(z&&C.D).ea(z,b)}else{x.innerHTML=b
w=$.as.createDocumentFragment()
for(z=J.n(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.as.body
if(x==null?z!=null:x!==z)J.dg(x)
c.b3(w)
C.j.dU(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"eb",null,null,"geN",5,5,null],
cK:function(a,b,c,d){a.textContent=null
this.K(a,this.O(a,b,c,d))},
cJ:function(a,b){return this.cK(a,b,null,null)},
a3:function(a,b){return a.getAttribute(b)},
dt:function(a,b){return a.hasAttribute(b)},
dE:function(a,b){return a.removeAttribute(b)},
gc7:function(a){return new W.aY(a,"change",!1,[W.L])},
gc8:function(a){return new W.aY(a,"mousedown",!1,[W.a_])},
gc9:function(a){return new W.aY(a,"mousemove",!1,[W.a_])},
gca:function(a){return new W.aY(a,"mouseup",!1,[W.a_])},
gcb:function(a){return new W.aY(a,H.w(W.dH(a)),!1,[W.aX])},
$isT:1,
"%":";Element"},
hx:{"^":"o:23;",
$1:function(a){return!!J.C(H.i(a,"$isx")).$isT}},
mh:{"^":"Q;0n:height=,0m:width=","%":"HTMLEmbedElement"},
L:{"^":"k;",
gcg:function(a){return W.cT(a.target)},
du:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isL:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
O:{"^":"k;",
bF:["cQ",function(a,b,c,d){H.m(c,{func:1,args:[W.L]})
if(c!=null)this.dh(a,b,c,!1)}],
dh:function(a,b,c,d){return a.addEventListener(b,H.ax(H.m(c,{func:1,args:[W.L]}),1),!1)},
ei:function(a,b){return a.dispatchEvent(b)},
dG:function(a,b,c,d){return a.removeEventListener(b,H.ax(H.m(c,{func:1,args:[W.L]}),1),!1)},
$isO:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ep|eq|et|eu"},
aC:{"^":"h5;",$isaC:1,"%":"File"},
my:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaC")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aC]},
$isz:1,
$asz:function(){return[W.aC]},
$asr:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asv:function(){return[W.aC]},
"%":"FileList"},
mz:{"^":"O;0j:length=","%":"FileWriter"},
mC:{"^":"Q;0j:length=","%":"HTMLFormElement"},
aD:{"^":"k;",$isaD:1,"%":"Gamepad"},
hM:{"^":"Q;","%":"HTMLHeadElement"},
mD:{"^":"k;0j:length=","%":"History"},
mE:{"^":"ke;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isx")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.x]},
$isz:1,
$asz:function(){return[W.x]},
$asr:function(){return[W.x]},
$isl:1,
$asl:function(){return[W.x]},
$isa:1,
$asa:function(){return[W.x]},
$asv:function(){return[W.x]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hN:{"^":"cw;","%":"HTMLDocument"},
hO:{"^":"hP;",
eP:function(a,b,c,d,e,f){return a.open(b,c)},
ex:function(a,b,c){return a.open(b,c)},
cI:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hP:{"^":"O;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mF:{"^":"Q;0n:height=,0m:width=","%":"HTMLIFrameElement"},
cy:{"^":"k;0n:height=,0m:width=",$iscy:1,"%":"ImageBitmap"},
cz:{"^":"k;0n:height=,0m:width=",$iscz:1,"%":"ImageData"},
c_:{"^":"Q;0n:height=,0m:width=",$isc_:1,"%":"HTMLImageElement"},
dL:{"^":"Q;0n:height=,0m:width=",$isdL:1,"%":"HTMLInputElement"},
ba:{"^":"e9;",$isba:1,"%":"KeyboardEvent"},
ik:{"^":"k;",
k:function(a){return String(a)},
$isik:1,
"%":"Location"},
ip:{"^":"Q;","%":"HTMLAudioElement;HTMLMediaElement"},
mN:{"^":"k;0j:length=","%":"MediaList"},
mO:{"^":"O;",
bF:function(a,b,c,d){H.m(c,{func:1,args:[W.L]})
if(b==="message")a.start()
this.cQ(a,b,c,!1)},
"%":"MessagePort"},
mP:{"^":"kp;",
B:function(a,b){return P.W(a.get(b))!=null},
h:function(a,b){return P.W(a.get(H.w(b)))},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gE:function(a){var z=H.f([],[P.c])
this.D(a,new W.ir(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.c,null]},
$isu:1,
$asu:function(){return[P.c,null]},
"%":"MIDIInputMap"},
ir:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mQ:{"^":"kq;",
B:function(a,b){return P.W(a.get(b))!=null},
h:function(a,b){return P.W(a.get(H.w(b)))},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gE:function(a){var z=H.f([],[P.c])
this.D(a,new W.is(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.c,null]},
$isu:1,
$asu:function(){return[P.c,null]},
"%":"MIDIOutputMap"},
is:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aE:{"^":"k;",$isaE:1,"%":"MimeType"},
mR:{"^":"ks;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaE")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aE]},
$isz:1,
$asz:function(){return[W.aE]},
$asr:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$asv:function(){return[W.aE]},
"%":"MimeTypeArray"},
a_:{"^":"e9;",
gc6:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.bh(a.offsetX,a.offsetY,[P.I])
else{z=a.target
if(!J.C(W.cT(z)).$isT)throw H.d(P.D("offsetX is only supported on elements"))
y=H.i(W.cT(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.I]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.p(new P.bh(u,v,w),"$isbh",w,"$asbh")
if(typeof z!=="number")return z.b7()
if(typeof x!=="number")return x.b7()
return new P.bh(C.o.cl(z-u),C.o.cl(x-v),w)}},
$isa_:1,
"%":";DragEvent|MouseEvent"},
ag:{"^":"ie;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.bH("No elements"))
if(y>1)throw H.d(P.bH("More than one element"))
return z.firstChild},
J:function(a,b){var z,y,x,w,v
H.p(b,"$isl",[W.x],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.n(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
i:function(a,b,c){var z
H.j(b)
z=this.a
J.fh(z,H.i(c,"$isx"),C.w.h(z.childNodes,b))},
gA:function(a){var z=this.a.childNodes
return new W.dK(z,z.length,-1,[H.bs(C.w,z,"v",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){H.j(b)
return C.w.h(this.a.childNodes,b)},
$asr:function(){return[W.x]},
$asl:function(){return[W.x]},
$asa:function(){return[W.x]}},
x:{"^":"O;0ey:previousSibling=",
eA:function(a){var z=a.parentNode
if(z!=null)J.bQ(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cR(a):z},
K:function(a,b){return a.appendChild(b)},
dF:function(a,b){return a.removeChild(b)},
dH:function(a,b,c){return a.replaceChild(b,c)},
$isx:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iC:{"^":"ku;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isx")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.x]},
$isz:1,
$asz:function(){return[W.x]},
$asr:function(){return[W.x]},
$isl:1,
$asl:function(){return[W.x]},
$isa:1,
$asa:function(){return[W.x]},
$asv:function(){return[W.x]},
"%":"NodeList|RadioNodeList"},
n_:{"^":"Q;0n:height=,0m:width=","%":"HTMLObjectElement"},
n1:{"^":"O;0n:height=,0m:width=","%":"OffscreenCanvas"},
n2:{"^":"k;0n:height=,0m:width=","%":"PaintSize"},
aG:{"^":"k;0j:length=",$isaG:1,"%":"Plugin"},
n4:{"^":"ky;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaG")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aG]},
$isz:1,
$asz:function(){return[W.aG]},
$asr:function(){return[W.aG]},
$isl:1,
$asl:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$asv:function(){return[W.aG]},
"%":"PluginArray"},
n6:{"^":"a_;0n:height=,0m:width=","%":"PointerEvent"},
bF:{"^":"L;",$isbF:1,"%":"ProgressEvent|ResourceProgressEvent"},
iU:{"^":"k;",
ea:function(a,b){return a.createContextualFragment(b)},
cH:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nb:{"^":"kE;",
B:function(a,b){return P.W(a.get(b))!=null},
h:function(a,b){return P.W(a.get(H.w(b)))},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gE:function(a){var z=H.f([],[P.c])
this.D(a,new W.j_(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.c,null]},
$isu:1,
$asu:function(){return[P.c,null]},
"%":"RTCStatsReport"},
j_:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
nc:{"^":"k;0n:height=,0m:width=","%":"Screen"},
nd:{"^":"Q;0j:length=","%":"HTMLSelectElement"},
aH:{"^":"O;",$isaH:1,"%":"SourceBuffer"},
nf:{"^":"eq;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaH")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aH]},
$isz:1,
$asz:function(){return[W.aH]},
$asr:function(){return[W.aH]},
$isl:1,
$asl:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$asv:function(){return[W.aH]},
"%":"SourceBufferList"},
aI:{"^":"k;",$isaI:1,"%":"SpeechGrammar"},
ng:{"^":"kK;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaI")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aI]},
$isz:1,
$asz:function(){return[W.aI]},
$asr:function(){return[W.aI]},
$isl:1,
$asl:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$asv:function(){return[W.aI]},
"%":"SpeechGrammarList"},
aJ:{"^":"k;0j:length=",$isaJ:1,"%":"SpeechRecognitionResult"},
nj:{"^":"kN;",
B:function(a,b){return this.aA(a,b)!=null},
h:function(a,b){return this.aA(a,H.w(b))},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=0;!0;++z){y=this.dw(a,z)
if(y==null)return
b.$2(y,this.aA(a,y))}},
gE:function(a){var z=H.f([],[P.c])
this.D(a,new W.jd(z))
return z},
gj:function(a){return a.length},
aA:function(a,b){return a.getItem(b)},
dw:function(a,b){return a.key(b)},
$asX:function(){return[P.c,P.c]},
$isu:1,
$asu:function(){return[P.c,P.c]},
"%":"Storage"},
jd:{"^":"o:20;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aK:{"^":"k;",$isaK:1,"%":"CSSStyleSheet|StyleSheet"},
jl:{"^":"Q;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=W.hw("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ag(y).J(0,new W.ag(z))
return y},
"%":"HTMLTableElement"},
nm:{"^":"Q;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.O(z.createElement("table"),b,c,d)
z.toString
z=new W.ag(z)
x=z.ga9(z)
x.toString
z=new W.ag(x)
w=z.ga9(z)
y.toString
w.toString
new W.ag(y).J(0,new W.ag(w))
return y},
"%":"HTMLTableRowElement"},
nn:{"^":"Q;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.O(z.createElement("table"),b,c,d)
z.toString
z=new W.ag(z)
x=z.ga9(z)
y.toString
x.toString
new W.ag(y).J(0,new W.ag(x))
return y},
"%":"HTMLTableSectionElement"},
e3:{"^":"Q;",$ise3:1,"%":"HTMLTemplateElement"},
no:{"^":"k;0m:width=","%":"TextMetrics"},
aL:{"^":"O;",$isaL:1,"%":"TextTrack"},
aM:{"^":"O;",$isaM:1,"%":"TextTrackCue|VTTCue"},
np:{"^":"kV;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaM")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aM]},
$isz:1,
$asz:function(){return[W.aM]},
$asr:function(){return[W.aM]},
$isl:1,
$asl:function(){return[W.aM]},
$isa:1,
$asa:function(){return[W.aM]},
$asv:function(){return[W.aM]},
"%":"TextTrackCueList"},
nq:{"^":"eu;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaL")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aL]},
$isz:1,
$asz:function(){return[W.aL]},
$asr:function(){return[W.aL]},
$isl:1,
$asl:function(){return[W.aL]},
$isa:1,
$asa:function(){return[W.aL]},
$asv:function(){return[W.aL]},
"%":"TextTrackList"},
ns:{"^":"k;0j:length=","%":"TimeRanges"},
aN:{"^":"k;",$isaN:1,"%":"Touch"},
nt:{"^":"l_;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaN")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aN]},
$isz:1,
$asz:function(){return[W.aN]},
$asr:function(){return[W.aN]},
$isl:1,
$asl:function(){return[W.aN]},
$isa:1,
$asa:function(){return[W.aN]},
$asv:function(){return[W.aN]},
"%":"TouchList"},
nu:{"^":"k;0j:length=","%":"TrackDefaultList"},
e9:{"^":"L;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nI:{"^":"k;",
k:function(a){return String(a)},
"%":"URL"},
cP:{"^":"ip;0n:height=,0m:width=",$iscP:1,"%":"HTMLVideoElement"},
nL:{"^":"O;0j:length=","%":"VideoTrackList"},
nM:{"^":"O;0n:height=,0m:width=","%":"VisualViewport"},
nN:{"^":"k;0m:width=","%":"VTTRegion"},
aX:{"^":"a_;",
geh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.D("deltaY is not supported"))},
$isaX:1,
"%":"WheelEvent"},
jz:{"^":"O;",
gdW:function(a){var z,y,x
z=P.I
y=new P.R(0,$.F,[z])
x=H.m(new W.jA(new P.kR(y,[z])),{func:1,ret:-1,args:[P.I]})
this.dq(a)
this.dI(a,W.eB(x,z))
return y},
dI:function(a,b){return a.requestAnimationFrame(H.ax(H.m(b,{func:1,ret:-1,args:[P.I]}),1))},
dq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iseb:1,
"%":"DOMWindow|Window"},
jA:{"^":"o:21;a",
$1:function(a){this.a.a8(0,H.d3(a))}},
ed:{"^":"x;",$ised:1,"%":"Attr"},
nT:{"^":"l5;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaB")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aB]},
$isz:1,
$asz:function(){return[W.aB]},
$asr:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asv:function(){return[W.aB]},
"%":"CSSRuleList"},
nU:{"^":"hs;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aw(b,"$isa1",[P.I],"$asa1"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.ej(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nV:{"^":"l7;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaD")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aD]},
$isz:1,
$asz:function(){return[W.aD]},
$asr:function(){return[W.aD]},
$isl:1,
$asl:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asv:function(){return[W.aD]},
"%":"GamepadList"},
o_:{"^":"l9;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isx")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.x]},
$isz:1,
$asz:function(){return[W.x]},
$asr:function(){return[W.x]},
$isl:1,
$asl:function(){return[W.x]},
$isa:1,
$asa:function(){return[W.x]},
$asv:function(){return[W.x]},
"%":"MozNamedAttrMap|NamedNodeMap"},
o0:{"^":"lb;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaJ")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aJ]},
$isz:1,
$asz:function(){return[W.aJ]},
$asr:function(){return[W.aJ]},
$isl:1,
$asl:function(){return[W.aJ]},
$isa:1,
$asa:function(){return[W.aJ]},
$asv:function(){return[W.aJ]},
"%":"SpeechRecognitionResultList"},
o1:{"^":"ld;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.j(b)
H.i(c,"$isaK")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.aK]},
$isz:1,
$asz:function(){return[W.aK]},
$asr:function(){return[W.aK]},
$isl:1,
$asl:function(){return[W.aK]},
$isa:1,
$asa:function(){return[W.aK]},
$asv:function(){return[W.aK]},
"%":"StyleSheetList"},
jK:{"^":"cI;dn:a<",
D:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=this.gE(this),y=z.length,x=this.a,w=J.n(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.a3(x,u))}},
gE:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.c])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.i(z[w],"$ised")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asX:function(){return[P.c,P.c]},
$asu:function(){return[P.c,P.c]}},
jT:{"^":"jK;a",
B:function(a,b){return J.fe(this.a,b)},
h:function(a,b){return J.cp(this.a,H.w(b))},
gj:function(a){return this.gE(this).length}},
bI:{"^":"je;a,b,c,$ti"},
aY:{"^":"bI;a,b,c,$ti"},
jV:{"^":"jf;a,b,c,d,e,$ti",
sdz:function(a){this.d=H.m(a,{func:1,args:[W.L]})},
e2:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.m(y,{func:1,args:[W.L]})
if(x)J.fg(z,this.c,y,!1)}this.b=null
this.sdz(null)
return},
p:{
ah:function(a,b,c,d,e){var z=W.eB(new W.jW(c),W.L)
if(z!=null&&!0)J.fi(a,b,z,!1)
return new W.jV(0,a,b,z,!1,[e])}}},
jW:{"^":"o:22;a",
$1:function(a){return this.a.$1(H.i(a,"$isL"))}},
bJ:{"^":"b;a",
dd:function(a){var z,y
z=$.d7()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.lD())
for(y=0;y<12;++y)z.i(0,C.v[y],W.lE())}},
Z:function(a){return $.f6().u(0,W.b8(a))},
S:function(a,b,c){var z,y,x
z=W.b8(a)
y=$.d7()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.cd(x.$4(a,b,c,this))},
$isal:1,
p:{
eh:function(a){var z,y
z=document.createElement("a")
y=new W.kF(z,window.location)
y=new W.bJ(y)
y.dd(a)
return y},
nY:[function(a,b,c,d){H.i(a,"$isT")
H.w(b)
H.w(c)
H.i(d,"$isbJ")
return!0},"$4","lD",16,0,13],
nZ:[function(a,b,c,d){var z,y,x
H.i(a,"$isT")
H.w(b)
H.w(c)
z=H.i(d,"$isbJ").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lE",16,0,13]}},
v:{"^":"b;$ti",
gA:function(a){return new W.dK(a,this.gj(a),-1,[H.bs(this,a,"v",0)])}},
dV:{"^":"b;a",
Z:function(a){return C.a.bG(this.a,new W.iE(a))},
S:function(a,b,c){return C.a.bG(this.a,new W.iD(a,b,c))},
$isal:1},
iE:{"^":"o:10;a",
$1:function(a){return H.i(a,"$isal").Z(this.a)}},
iD:{"^":"o:10;a,b,c",
$1:function(a){return H.i(a,"$isal").S(this.a,this.b,this.c)}},
kG:{"^":"b;",
de:function(a,b,c,d){var z,y,x
this.a.J(0,c)
z=b.aT(0,new W.kH())
y=b.aT(0,new W.kI())
this.b.J(0,z)
x=this.c
x.J(0,C.Y)
x.J(0,y)},
Z:function(a){return this.a.u(0,W.b8(a))},
S:["cU",function(a,b,c){var z,y
z=W.b8(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dV(c)
else if(y.u(0,"*::"+b))return this.d.dV(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isal:1},
kH:{"^":"o:5;",
$1:function(a){return!C.a.u(C.v,H.w(a))}},
kI:{"^":"o:5;",
$1:function(a){return C.a.u(C.v,H.w(a))}},
kS:{"^":"kG;e,a,b,c,d",
S:function(a,b,c){if(this.cU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cp(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
es:function(){var z,y,x,w,v
z=P.c
y=P.cH(C.u,z)
x=H.q(C.u,0)
w=H.m(new W.kT(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.kS(y,P.ae(null,null,null,z),P.ae(null,null,null,z),P.ae(null,null,null,z),null)
y.de(null,new H.im(C.u,w,[x,z]),v,null)
return y}}},
kT:{"^":"o:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.w(a))}},
kQ:{"^":"b;",
Z:function(a){var z=J.C(a)
if(!!z.$isdZ)return!1
z=!!z.$isM
if(z&&W.b8(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.cM(b,"on"))return!1
return this.Z(a)},
$isal:1},
dK:{"^":"b;a,b,c,0d,$ti",
sbw:function(a){this.d=H.A(a,H.q(this,0))},
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbw(J.a8(this.a,z))
this.c=z
return!0}this.sbw(null)
this.c=y
return!1},
gv:function(a){return this.d},
$isb9:1},
jN:{"^":"b;a",$isO:1,$iseb:1,p:{
jO:function(a){if(a===window)return H.i(a,"$iseb")
else return new W.jN(a)}}},
al:{"^":"b;"},
kF:{"^":"b;a,b",$isnH:1},
ev:{"^":"b;a",
b3:function(a){new W.l2(this).$2(a,null)},
a7:function(a,b){if(b==null)J.dg(a)
else J.bQ(b,a)},
dN:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fD(a)
x=J.cp(y.gdn(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a2(t)}v="element unprintable"
try{v=J.bv(a)}catch(t){H.a2(t)}try{u=W.b8(a)
this.dM(H.i(a,"$isT"),b,z,v,u,H.i(y,"$isu"),H.w(x))}catch(t){if(H.a2(t) instanceof P.aA)throw t
else{this.a7(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dM:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a7(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a7(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a7(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gE(f)
y=H.f(z.slice(0),[H.q(z,0)])
for(x=f.gE(f).length-1,z=f.a,w=J.n(z);x>=0;--x){if(x>=y.length)return H.h(y,x)
v=y[x]
if(!this.a.S(a,J.fS(v),w.a3(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.a3(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a3(z,v)
w.dE(z,v)}}if(!!J.C(a).$ise3)this.b3(a.content)},
$ismY:1},
l2:{"^":"o:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dN(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fF(z)}catch(w){H.a2(w)
v=H.i(z,"$isx")
if(x){u=v.parentNode
if(u!=null)J.bQ(u,v)}else J.bQ(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isx")}}},
jM:{"^":"k+hk;"},
jP:{"^":"k+r;"},
jQ:{"^":"jP+v;"},
jR:{"^":"k+r;"},
jS:{"^":"jR+v;"},
jY:{"^":"k+r;"},
jZ:{"^":"jY+v;"},
kd:{"^":"k+r;"},
ke:{"^":"kd+v;"},
kp:{"^":"k+X;"},
kq:{"^":"k+X;"},
kr:{"^":"k+r;"},
ks:{"^":"kr+v;"},
kt:{"^":"k+r;"},
ku:{"^":"kt+v;"},
kx:{"^":"k+r;"},
ky:{"^":"kx+v;"},
kE:{"^":"k+X;"},
ep:{"^":"O+r;"},
eq:{"^":"ep+v;"},
kJ:{"^":"k+r;"},
kK:{"^":"kJ+v;"},
kN:{"^":"k+X;"},
kU:{"^":"k+r;"},
kV:{"^":"kU+v;"},
et:{"^":"O+r;"},
eu:{"^":"et+v;"},
kZ:{"^":"k+r;"},
l_:{"^":"kZ+v;"},
l4:{"^":"k+r;"},
l5:{"^":"l4+v;"},
l6:{"^":"k+r;"},
l7:{"^":"l6+v;"},
l8:{"^":"k+r;"},
l9:{"^":"l8+v;"},
la:{"^":"k+r;"},
lb:{"^":"la+v;"},
lc:{"^":"k+r;"},
ld:{"^":"lc+v;"}}],["","",,P,{"^":"",
eF:function(a){return a},
W:function(a){var z,y,x,w,v
if(a==null)return
z=P.a6(P.c,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.w(y[w])
z.i(0,v,a[v])}return z},
ls:function(a,b){var z={}
a.D(0,new P.lt(z))
return z},
lu:function(a){var z,y
z=new P.R(0,$.F,[null])
y=new P.cQ(z,[null])
a.then(H.ax(new P.lv(y),1))["catch"](H.ax(new P.lw(y),1))
return z},
dD:function(){var z=$.dC
if(z==null){z=J.cl(window.navigator.userAgent,"Opera",0)
$.dC=z}return z},
hp:function(){var z,y
z=$.dz
if(z!=null)return z
y=$.dA
if(y==null){y=J.cl(window.navigator.userAgent,"Firefox",0)
$.dA=y}if(y)z="-moz-"
else{y=$.dB
if(y==null){y=!P.dD()&&J.cl(window.navigator.userAgent,"Trident/",0)
$.dB=y}if(y)z="-ms-"
else z=P.dD()?"-o-":"-webkit-"}$.dz=z
return z},
jB:{"^":"b;",
c3:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aS:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.ac(P.cr("DateTime is outside valid range: "+y))
return new P.bx(y,!0)}if(a instanceof RegExp)throw H.d(P.cN("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lu(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.c3(a)
x=this.b
if(v>=x.length)return H.h(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.id()
z.a=u
C.a.i(x,v,u)
this.ep(a,new P.jD(z,this))
return z.a}if(a instanceof Array){t=a
v=this.c3(t)
x=this.b
if(v>=x.length)return H.h(x,v)
u=x[v]
if(u!=null)return u
s=J.H(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.i(x,v,u)
for(x=J.br(u),q=0;q<r;++q)x.i(u,q,this.aS(s.h(t,q)))
return u}return a},
e8:function(a,b){this.c=b
return this.aS(a)}},
jD:{"^":"o:26;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aS(b)
J.fd(z,a,y)
return y}},
lt:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
jC:{"^":"jB;a,b,c",
ep:function(a,b){var z,y,x,w
H.m(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.N)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lv:{"^":"o:11;a",
$1:function(a){return this.a.a8(0,a)}},
lw:{"^":"o:11;a",
$1:function(a){return this.a.e5(a)}}}],["","",,P,{"^":"",iG:{"^":"iZ;",$isiG:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},iZ:{"^":"O;","%":";IDBRequest"},nK:{"^":"L;0cg:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
ei:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bh:{"^":"b;a1:a>,U:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aw(b,"$isbh",[P.I],null)&&this.a==J.bS(b)&&this.b==b.gU(b)},
gw:function(a){var z,y,x
z=J.az(this.a)
y=J.az(this.b)
y=P.ei(P.ei(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kz:{"^":"b;"},
a1:{"^":"kz;$ti"}}],["","",,P,{"^":"",h1:{"^":"k;",$ish1:1,"%":"SVGAnimatedLength"},mi:{"^":"M;0n:height=,0m:width=","%":"SVGFEBlendElement"},mj:{"^":"M;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},mk:{"^":"M;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},ml:{"^":"M;0n:height=,0m:width=","%":"SVGFECompositeElement"},mm:{"^":"M;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},mn:{"^":"M;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},mo:{"^":"M;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},mp:{"^":"M;0n:height=,0m:width=","%":"SVGFEFloodElement"},mq:{"^":"M;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},mr:{"^":"M;0n:height=,0m:width=","%":"SVGFEImageElement"},ms:{"^":"M;0n:height=,0m:width=","%":"SVGFEMergeElement"},mt:{"^":"M;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},mu:{"^":"M;0n:height=,0m:width=","%":"SVGFEOffsetElement"},mv:{"^":"M;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},mw:{"^":"M;0n:height=,0m:width=","%":"SVGFETileElement"},mx:{"^":"M;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mA:{"^":"M;0n:height=,0m:width=","%":"SVGFilterElement"},mB:{"^":"bA;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hL:{"^":"bA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bA:{"^":"M;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mG:{"^":"bA;0n:height=,0m:width=","%":"SVGImageElement"},bb:{"^":"k;",$isbb:1,"%":"SVGLength"},mL:{"^":"kj;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.j(b)
H.i(c,"$isbb")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asr:function(){return[P.bb]},
$isl:1,
$asl:function(){return[P.bb]},
$isa:1,
$asa:function(){return[P.bb]},
$asv:function(){return[P.bb]},
"%":"SVGLengthList"},mM:{"^":"M;0n:height=,0m:width=","%":"SVGMaskElement"},bg:{"^":"k;",$isbg:1,"%":"SVGNumber"},mZ:{"^":"kw;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.j(b)
H.i(c,"$isbg")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asr:function(){return[P.bg]},
$isl:1,
$asl:function(){return[P.bg]},
$isa:1,
$asa:function(){return[P.bg]},
$asv:function(){return[P.bg]},
"%":"SVGNumberList"},n3:{"^":"M;0n:height=,0m:width=","%":"SVGPatternElement"},n5:{"^":"k;0j:length=","%":"SVGPointList"},n7:{"^":"k;0n:height=,0m:width=","%":"SVGRect"},n8:{"^":"hL;0n:height=,0m:width=","%":"SVGRectElement"},dZ:{"^":"M;",$isdZ:1,"%":"SVGScriptElement"},nk:{"^":"kP;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.j(b)
H.w(c)
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asr:function(){return[P.c]},
$isl:1,
$asl:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asv:function(){return[P.c]},
"%":"SVGStringList"},M:{"^":"T;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.al])
C.a.l(z,W.eh(null))
C.a.l(z,W.es())
C.a.l(z,new W.kQ())
c=new W.ev(new W.dV(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).eb(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ag(w)
u=z.ga9(z)
for(z=J.n(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
gc7:function(a){return new W.aY(a,"change",!1,[W.L])},
$isM:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nl:{"^":"bA;0n:height=,0m:width=","%":"SVGSVGElement"},bl:{"^":"k;",$isbl:1,"%":"SVGTransform"},nv:{"^":"l1;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.j(b)
H.i(c,"$isbl")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asr:function(){return[P.bl]},
$isl:1,
$asl:function(){return[P.bl]},
$isa:1,
$asa:function(){return[P.bl]},
$asv:function(){return[P.bl]},
"%":"SVGTransformList"},nJ:{"^":"bA;0n:height=,0m:width=","%":"SVGUseElement"},ki:{"^":"k+r;"},kj:{"^":"ki+v;"},kv:{"^":"k+r;"},kw:{"^":"kv+v;"},kO:{"^":"k+r;"},kP:{"^":"kO+v;"},l0:{"^":"k+r;"},l1:{"^":"l0+v;"}}],["","",,P,{"^":"",at:{"^":"b;",$isl:1,
$asl:function(){return[P.S]},
$isa:1,
$asa:function(){return[P.S]},
$isjq:1}}],["","",,P,{"^":"",m_:{"^":"k;0j:length=","%":"AudioBuffer"},m0:{"^":"jL;",
B:function(a,b){return P.W(a.get(b))!=null},
h:function(a,b){return P.W(a.get(H.w(b)))},
D:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gE:function(a){var z=H.f([],[P.c])
this.D(a,new P.h3(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.c,null]},
$isu:1,
$asu:function(){return[P.c,null]},
"%":"AudioParamMap"},h3:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},m1:{"^":"O;0j:length=","%":"AudioTrackList"},h4:{"^":"O;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n0:{"^":"h4;0j:length=","%":"OfflineAudioContext"},jL:{"^":"k+X;"}}],["","",,P,{"^":"",h7:{"^":"k;",$ish7:1,"%":"WebGLBuffer"},hF:{"^":"k;",$ishF:1,"%":"WebGLFramebuffer"},iT:{"^":"k;",$isiT:1,"%":"WebGLProgram"},n9:{"^":"k;",
bE:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindFramebuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b){return a.clear(b)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.W(a.getContextAttributes())},
aV:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
cc:function(a,b,c){return a.pixelStorei(b,c)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b6:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aj:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.aG(a,b,c,d,e,f,g,h,i,j)
return}y=J.C(g)
if(!!y.$iscz&&h==null&&z&&j==null){this.aH(a,b,c,d,e,f,P.eF(g))
return}if(!!y.$isc_&&h==null&&z&&j==null){this.aI(a,b,c,d,e,f,g)
return}if(!!y.$isbw&&h==null&&z&&j==null){this.aJ(a,b,c,d,e,f,g)
return}if(!!y.$iscP&&h==null&&z&&j==null){this.aK(a,b,c,d,e,f,g)
return}if(!!y.$iscy&&h==null&&z&&j==null){this.aL(a,b,c,d,e,f,g)
return}throw H.d(P.cr("Incorrect number or type of arguments"))},
ci:function(a,b,c,d,e,f,g){return this.aj(a,b,c,d,e,f,g,null,null,null)},
aG:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
aH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cj:function(a,b,c,d){return a.texParameterf(b,c,d)},
ck:function(a,b,c,d){return a.texParameteri(b,c,d)},
cn:function(a,b,c){return a.uniform1f(b,c)},
co:function(a,b,c){return a.uniform1fv(b,c)},
cp:function(a,b,c){return a.uniform1i(b,c)},
cq:function(a,b,c){return a.uniform1iv(b,c)},
cr:function(a,b,c){return a.uniform2fv(b,c)},
cs:function(a,b,c){return a.uniform3fv(b,c)},
ct:function(a,b,c){return a.uniform4fv(b,c)},
cu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},na:{"^":"k;",
dY:function(a,b){return a.beginTransformFeedback(b)},
e0:function(a,b){return a.bindVertexArray(b)},
ed:function(a){return a.createVertexArray()},
ej:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ek:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
el:function(a){return a.endTransformFeedback()},
eK:function(a,b,c,d){this.dS(a,b,H.p(c,"$isa",[P.c],"$asa"),d)
return},
dS:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eL:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bE:function(a,b){return a.activeTexture(b)},
bH:function(a,b,c){return a.attachShader(b,c)},
bI:function(a,b,c){return a.bindBuffer(b,c)},
bK:function(a,b,c){return a.bindFramebuffer(b,c)},
bL:function(a,b,c){return a.bindTexture(b,c)},
bM:function(a,b){return a.blendEquation(b)},
bN:function(a,b,c){return a.blendFunc(b,c)},
bO:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b){return a.clear(b)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bR:function(a,b){return a.compileShader(b)},
bS:function(a){return a.createBuffer()},
bT:function(a){return a.createProgram()},
bU:function(a,b){return a.createShader(b)},
bV:function(a){return a.createTexture()},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.W(a.getContextAttributes())},
aV:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
cc:function(a,b,c){return a.pixelStorei(b,c)},
b5:function(a,b,c){return a.shaderSource(b,c)},
b6:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aj:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.aG(a,b,c,d,e,f,g,h,i,j)
return}y=J.C(g)
if(!!y.$iscz&&h==null&&z&&j==null){this.aH(a,b,c,d,e,f,P.eF(g))
return}if(!!y.$isc_&&h==null&&z&&j==null){this.aI(a,b,c,d,e,f,g)
return}if(!!y.$isbw&&h==null&&z&&j==null){this.aJ(a,b,c,d,e,f,g)
return}if(!!y.$iscP&&h==null&&z&&j==null){this.aK(a,b,c,d,e,f,g)
return}if(!!y.$iscy&&h==null&&z&&j==null){this.aL(a,b,c,d,e,f,g)
return}throw H.d(P.cr("Incorrect number or type of arguments"))},
ci:function(a,b,c,d,e,f,g){return this.aj(a,b,c,d,e,f,g,null,null,null)},
aG:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
aH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cj:function(a,b,c,d){return a.texParameterf(b,c,d)},
ck:function(a,b,c,d){return a.texParameteri(b,c,d)},
cn:function(a,b,c){return a.uniform1f(b,c)},
co:function(a,b,c){return a.uniform1fv(b,c)},
cp:function(a,b,c){return a.uniform1i(b,c)},
cq:function(a,b,c){return a.uniform1iv(b,c)},
cr:function(a,b,c){return a.uniform2fv(b,c)},
cs:function(a,b,c){return a.uniform3fv(b,c)},
ct:function(a,b,c){return a.uniform4fv(b,c)},
cu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cw:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},j4:{"^":"k;",$isj4:1,"%":"WebGLShader"},jm:{"^":"k;",$isjm:1,"%":"WebGLTexture"},js:{"^":"k;",$isjs:1,"%":"WebGLUniformLocation"},jx:{"^":"k;",$isjx:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",nh:{"^":"kM;",
gj:function(a){return a.length},
h:function(a,b){H.j(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return P.W(this.dv(a,b))},
i:function(a,b,c){H.j(b)
H.i(c,"$isu")
throw H.d(P.D("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dv:function(a,b){return a.item(b)},
$asr:function(){return[[P.u,,,]]},
$isl:1,
$asl:function(){return[[P.u,,,]]},
$isa:1,
$asa:function(){return[[P.u,,,]]},
$asv:function(){return[[P.u,,,]]},
"%":"SQLResultSetRowList"},kL:{"^":"k+r;"},kM:{"^":"kL+v;"}}],["","",,L,{"^":"",
cO:function(b1,b2,b3,b4,b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.p(b1,"$isa",[L.a3],"$asa")
z=new Float32Array(16)
y=new T.P(z)
for(x=b3.b,w=x.length,v=b4.a,u=v.length,t=0;t<b1.length;++t){s=b1[t]
if(t>=u)return H.h(v,t)
r=v[t]
q=s.e
if(q<0)r.G()
else{if(q>=u)return H.h(v,q)
r.C(v[q])}if(t>=w)return H.h(x,t)
p=x[t]
if(p!=null){o=L.cs(p.f,b5)
n=L.cs(p.b,b5)
m=L.cs(p.d,b5)
q=p.r
if(o>=q.length)return H.h(q,o)
l=q[o]
q=p.c
if(n>=q.length)return H.h(q,n)
q=q[n]
k=p.e
if(m>=k.length)return H.h(k,m)
j=k[m].a
i=j[0]
h=j[1]
g=j[2]
f=j[3]
e=i+i
d=h+h
c=g+g
b=i*e
a=i*d
a0=i*c
a1=h*d
a2=h*c
a3=g*c
a4=f*e
a5=f*d
a6=f*c
a7=q.a
z[0]=1-(a1+a3)
z[1]=a+a6
z[2]=a0-a5
z[3]=0
z[4]=a-a6
z[5]=1-(b+a3)
z[6]=a2+a4
z[7]=0
z[8]=a0+a5
z[9]=a2-a4
z[10]=1-(b+a1)
z[11]=0
z[12]=a7[0]
z[13]=a7[1]
z[14]=a7[2]
z[15]=1
q=l.a
a8=q[0]
a9=q[1]
b0=q[2]
z[0]=z[0]*a8
z[1]=z[1]*a8
z[2]=z[2]*a8
z[3]=z[3]*a8
z[4]=z[4]*a9
z[5]=z[5]*a9
z[6]=z[6]*a9
z[7]=z[7]*a9
z[8]=z[8]*b0
z[9]=z[9]*b0
z[10]=z[10]*b0
z[11]=z[11]*b0
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
r.a0(0,y)}else r.a0(0,s.b)}for(z=b4.b,x=z.length,t=0;t<b1.length;++t){if(t>=x)return H.h(z,t)
r=z[t]
r.C(b2)
if(t>=u)return H.h(v,t)
r.a0(0,v[t])
if(t>=b1.length)return H.h(b1,t)
r.a0(0,b1[t].c)}},
hh:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.p(a,"$isa",[L.a3],"$asa")
H.p(d,"$isa",[P.S],"$asa")
z=L.dm(a.length)
y=a.length
x=d.length
w=new Float32Array(y*16*x)
for(y=d.length,x=z.b,v=x.length,u=w.length,t=0,s=0;s<d.length;d.length===y||(0,H.N)(d),++s){L.cO(a,b,c,z,d[s])
for(r=0;r<v;++r){q=x[r]
for(p=0;p<16;++p){o=t+p
n=q.a[p]
if(o<0||o>=u)return H.h(w,o)
w[o]=n}t+=16}}return w},
a3:{"^":"b;a,b,c,d,e",
k:function(a){return"BONE["+this.d+"] ("+this.e+") "+H.e(this.a)+"\ntrans:\n"+this.b.k(0)+"offset:\n"+this.c.k(0)}},
h2:{"^":"b;a,b",
cX:function(a){var z,y,x
for(z=this.b,y=this.a,x=0;x<a;++x){C.a.i(y,x,new T.P(new Float32Array(16)))
C.a.i(z,x,new T.P(new Float32Array(16)))}},
p:{
dm:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=[T.P]
z=H.f(z,y)
x=new Array(a)
x.fixed$length=Array
y=new L.h2(z,H.f(x,y))
y.cX(a)
return y}}},
dr:{"^":"b;a,b,c,d,e,f,r",
sdA:function(a){this.b=H.p(a,"$isa",[P.S],"$asa")},
sdB:function(a){this.c=H.p(a,"$isa",[T.t],"$asa")},
sdK:function(a){this.d=H.p(a,"$isa",[P.S],"$asa")},
sdL:function(a){this.e=H.p(a,"$isa",[T.c1],"$asa")},
sdO:function(a){this.f=H.p(a,"$isa",[P.S],"$asa")},
sdP:function(a){this.r=H.p(a,"$isa",[T.t],"$asa")},
k:function(a){var z=H.f([],[P.c])
C.a.l(z,H.e(this.a.a))
C.a.l(z,""+this.b.length+": "+H.e(this.c))
C.a.l(z,""+this.d.length+": "+H.e(this.e))
C.a.l(z,""+this.f.length+": "+H.e(this.r))
return C.a.a_(z,"\n")},
p:{
cs:function(a,b){var z,y,x,w
H.p(a,"$isa",[P.S],"$asa")
for(z=a.length-1,y=0;y<z;y=x){x=y+1
w=a[x]
if(typeof b!=="number")return b.a4()
if(b<w)return y}return 0}}},
j6:{"^":"b;a,b,c",
k:function(a){return"SkeletalAnimation["+H.e(this.a)+", duration: "+H.e(this.c)+", frames: "+this.b.length+"]"}}}],["","",,G,{"^":"",
jE:function(a){var z,y,x,w
z=H.f(a.split("\n"),[P.c])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.h(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a_(z,"\n")},
ee:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bU(a,b)
z.b5(a,y,c)
z.bR(a,y)
x=H.cd(z.b_(a,y,35713))
if(x!=null&&!x){w=z.aZ(a,y)
P.ab("E:Compilation failed:")
P.ab("E:"+G.jE(c))
P.ab("E:Failure:")
P.ab(C.i.L("E:",w))
throw H.d(w)}return y},
bZ:function(a,b){var z,y,x
H.p(a,"$isa",[T.t],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.i(b,z,J.bS(a[y]))
if(y>=a.length)return H.h(a,y)
C.b.i(b,z+1,J.co(a[y]))
z+=2
if(y>=a.length)return H.h(a,y)
x=J.dd(a[y])
if(z>=b.length)return H.h(b,z)
b[z]=x}return b},
hB:function(a,b){var z,y
H.p(a,"$isa",[T.an],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.i(b,z,J.bS(a[y]))
if(y>=a.length)return H.h(a,y)
C.b.i(b,z+1,J.co(a[y]))}return b},
hC:function(a,b){var z,y,x,w,v
H.p(a,"$isa",[T.a7],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.i(b,z,J.bS(a[y]))
if(y>=a.length)return H.h(a,y)
C.b.i(b,z+1,J.co(a[y]))
x=z+2
if(y>=a.length)return H.h(a,y)
w=J.dd(a[y])
v=b.length
if(x>=v)return H.h(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.h(a,y)
w=J.fI(a[y])
if(z>=v)return H.h(b,z)
b[z]=w}return b},
hA:function(a,b){var z,y
H.p(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.p.i(b,z,J.a8(a[y],0))
if(y>=a.length)return H.h(a,y)
C.p.i(b,z+1,J.a8(a[y],1))
if(y>=a.length)return H.h(a,y)
C.p.i(b,z+2,J.a8(a[y],2))
if(y>=a.length)return H.h(a,y)
C.p.i(b,z+3,J.a8(a[y],3))}return b},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.au(z,[H.q(z,0)]),y=y.gA(y),x=b.x,w=[[P.a,P.E]],v=[P.S],u=[T.a7],t=[T.t],s=[T.an];y.q();){r=y.d
if(!x.B(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.eH>0)H.bN("I: "+r)
continue}q=z.h(0,r)
switch($.ai().h(0,r).a){case"vec2":b.a5(r,G.hB(H.bP(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a5(r,G.bZ(H.bP(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a5(r,G.hC(H.bP(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a5(r,new Float32Array(H.ca(H.bP(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a5(r,G.hA(H.bP(q,"$isa",w,"$asa"),null),4)
break}}},
ia:function(a,b,c){var z,y,x,w
H.p(c,"$isa",[T.t],"$asa")
z=G.dS(a,b.d,1,b.e.x)
z.ab(G.bZ(c,null))
y=new Array(c.length)
y.fixed$length=Array
x=H.f(y,[P.E])
for(w=0;w<c.length;++w)C.a.i(x,w,w)
z.ba(x)
return z},
be:{"^":"b;"},
bm:{"^":"be;d,a,b,c",
be:function(){return this.d},
k:function(a){var z,y,x,w
z=H.f(["{"+new H.e8(H.lA(this)).k(0)+"}["+this.a+"]"],[P.c])
for(y=this.d,x=new H.au(y,[H.q(y,0)]),x=x.gA(x);x.q();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a_(z,"\n")}},
h8:{"^":"e_;"},
ha:{"^":"b;0a,b",
c2:function(a,b,c){J.fA(this.a,b)
if(c>0)J.fY(this.a,b,c)},
cA:function(a,b,c,d,e,f,g,h){J.ck(this.a,34962,b)
J.fZ(this.a,c,d,e,!1,g,h)}},
hE:{"^":"b;a,b,c,d,e"},
dJ:{"^":"b;a,b,c"},
hz:{"^":"b;"},
hK:{"^":"b;a,b,c,d,e",
X:function(a){switch($.ai().h(0,a).a){case"vec2":this.e.i(0,a,H.f([],[T.an]))
break
case"vec3":this.e.i(0,a,H.f([],[T.t]))
break
case"vec4":this.e.i(0,a,H.f([],[T.a7]))
break
case"float":this.e.i(0,a,H.f([],[P.S]))
break
case"uvec4":this.e.i(0,a,H.f([],[[P.a,P.E]]))
break}},
ab:function(a){var z,y,x,w,v
H.p(a,"$isa",[T.t],"$asa")
for(z=a.length,y=this.d,x=0;x<z;++x){w=a[x]
w.toString
v=new T.t(new Float32Array(3))
v.C(w)
C.a.l(y,v)}},
cV:function(a,b){var z,y,x,w,v,u,t
z=[T.an]
H.p(b,"$isa",z,"$asa")
y=H.p(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<z;++w){v=b[w]
v.toString
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.an(u))}},
ar:function(a,b){var z,y,x,w,v,u
z=[T.t]
H.p(b,"$isa",z,"$asa")
y=H.p(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<z;++w){v=b[w]
v.toString
u=new T.t(new Float32Array(3))
u.C(v)
x.l(y,u)}},
b9:function(a,b){var z,y,x,w,v,u
z=[T.a7]
H.p(b,"$isa",z,"$asa")
y=H.p(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<z;++w){v=b[w]
v.toString
u=new T.a7(new Float32Array(4))
u.C(v)
x.l(y,u)}},
d0:function(){var z,y,x,w,v,u,t
z=this.b
y=new Array(z.length*3)
y.fixed$length=Array
x=H.f(y,[P.E])
for(y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
C.a.i(x,w,u.a)
C.a.i(x,w+1,u.b)
C.a.i(x,w+2,u.c)
w+=3}for(z=this.c,v=0;!1;++v){if(v>=0)return H.h(z,v)
t=z[v]
C.a.i(x,w,t.gdT(t))
C.a.i(x,w+1,t.geM(t))
C.a.i(x,w+2,t.ge1(t))
C.a.i(x,w+3,t.gdT(t))
C.a.i(x,w+4,t.ge1(t))
C.a.i(x,w+5,t.geO(t))
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.f(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"],[P.c])
for(y=this.e,x=new H.au(y,[H.q(y,0)]),x=x.gA(x);x.q();){w=x.d
v=$.ai().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a_(z," ")}},
e6:{"^":"b;a,b,c"},
e5:{"^":"b;a,b,c"},
io:{"^":"bm;d,a,b,c",p:{
dR:function(a){var z=P.a6(P.c,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eR())
z.i(0,"cStencilFunc",$.eV())
return new G.io(z,a,!1,!0)}}},
iq:{"^":"be;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
say:function(a){this.cx=H.p(a,"$isa",[P.E],"$asa")},
bb:function(a,b,c){var z,y
C.i.av(a,0)
H.i(b,"$isat")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.ck(z.a,34962,y)
J.db(z.a,34962,b,35048)},
bc:function(a){this.ch=a
this.bb("aPosition",a,3)},
d1:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a5:function(a,b,c){var z,y,x,w,v
z=J.d8(a,0)===105
if(z&&this.z===0)this.z=C.c.b8(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.cm(x.a))
this.bb(a,b,c)
w=$.ai().h(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.h(0,a)
J.bR(x.a,this.e)
x.c2(0,v,z?1:0)
x.cA(0,y.h(0,a),v,w.bd(),5126,!1,0,0)},
ab:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.cm(y.a))
this.bc(a)
x=$.ai().h(0,"aPosition")
if(x==null)throw H.d("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bR(y.a,this.e)
y.c2(0,w,0)
y.cA(0,z.h(0,"aPosition"),w,x.bd(),5126,!1,0,0)},
ba:function(a){var z,y,x
H.p(a,"$isa",[P.E],"$asa")
z=this.d
this.y=J.cm(z.a)
y=this.ch.length
if(y<768){this.say(new Uint8Array(H.ca(a)))
this.Q=5121}else if(y<196608){this.say(new Uint16Array(H.ca(a)))
this.Q=5123}else{this.say(new Uint32Array(H.ca(a)))
this.Q=5125}J.bR(z.a,this.e)
y=this.y
x=this.cx
J.ck(z.a,34963,y)
J.db(z.a,34963,x,35048)},
k:function(a){var z,y,x,w
z=this.cx
y=H.f(["Faces:"+(z==null?0:z.length)],[P.c])
for(z=this.cy,x=new H.au(z,[H.q(z,0)]),x=x.gA(x);x.q();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a_(y,"  ")},
p:{
dS:function(a,b,c,d){var z=P.c
return new G.iq(b,J.fs(b.a),c,P.a6(z,P.b),d,0,-1,P.a6(z,P.at),"meshdata:"+a,!1,!0)}}},
iJ:{"^":"bm;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cW:function(a,b){var z
if(typeof a!=="number")return a.a2()
if(typeof b!=="number")return H.ap(b)
z=a/b
if(this.z===z)return
this.z=z
this.bi()},
bi:function(){var z,y,x,w,v,u
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
be:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.t(new Float32Array(3))
u.W(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.C(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.C(t)
x=!!y.$isa7
q=x?t.gcC(t):1
if(!!y.$ist){p=t.ga1(t)
s=t.gU(t)
r=t.gal(t)
t=p}else if(x){p=t.ga1(t)
s=t.gU(t)
r=t.gal(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.ap(t)
x=z[4]
if(typeof s!=="number")return H.ap(s)
w=z[8]
if(typeof r!=="number")return H.ap(r)
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
c.C(this.db)
c.a0(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
mg:{"^":"b;"},
dY:{"^":"be;d,e,f,r,x,y,z,Q,0ch,a,b,c",
d5:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.df(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.df(w.a,v,t))}},
d8:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.f([],[P.c])
x=H.f([],[P.c])
for(y=new H.au(y,[H.q(y,0)]),y=y.gA(y);y.q();){w=y.d
if(!z.B(0,w))C.a.l(x,w)}for(z=this.x,z=P.kl(z,z.r,H.q(z,0)),y=this.Q;z.q();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
dc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.p(b,"$isu",[P.c,P.b],"$asu")
z=Date.now()
for(y=new H.au(b,[H.q(b,0)]),y=y.gA(y),x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.d8(t,0)){case 117:if(w.B(0,t)){s=b.h(0,t)
if(v.B(0,t))H.bN("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.ai().h(0,t)
if(r==null)H.ac("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.j(s)
J.cq(x.a,q,s)}else if(!!J.C(s).$ishY)J.fW(x.a,q,s)
break
case"float":if(r.c===0){H.b3(s)
J.fU(x.a,q,s)}else if(!!J.C(s).$isat)J.fV(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.aq(s,"$isP").a
J.dl(x.a,q,!1,t)}else if(!!J.C(s).$isat)J.dl(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.aq(s,"$isbd").a
J.dk(x.a,q,!1,t)}else if(!!J.C(s).$isat)J.dk(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.dj(p,q,H.aq(s,"$isa7").a)
else J.dj(p,q,H.i(s,"$isat"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.di(p,q,H.aq(s,"$ist").a)
else J.di(p,q,H.i(s,"$isat"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.dh(p,q,H.aq(s,"$isan").a)
else J.dh(p,q,H.i(s,"$isat"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.ap(t)
J.d9(x.a,33984+t)
t=H.aq(s,"$isc5").b
J.aV(x.a,3553,t)
t=this.ch
J.cq(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.L()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.ap(t)
J.d9(x.a,33984+t)
t=H.aq(s,"$isc5").b
J.aV(x.a,34067,t)
t=this.ch
J.cq(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.L()
this.ch=t+1
break
default:H.bN("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aU(s,!0)
p=x.a
if(t)J.bu(p,2929)
else J.cn(p,2929)
break
case"cStencilFunc":H.aq(s,"$ise6")
t=s.a
p=x.a
if(t===1281)J.cn(p,2960)
else{J.bu(p,2960)
p=s.b
o=s.c
J.fO(x.a,t,p,o)}break
case"cDepthWrite":H.cd(s)
J.ft(x.a,s)
break
case"cBlendEquation":H.aq(s,"$ise5")
t=s.a
p=x.a
if(t===1281)J.cn(p,3042)
else{J.bu(p,3042)
p=s.b
o=s.c
J.fm(x.a,p,o)
J.fl(x.a,t)}break}++u
break}}n=P.ht(0,0,0,Date.now()-new P.bx(z,!1).a,0,0)
""+u
n.k(0)},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.p(b,"$isa",[G.bm],"$asa")
Date.now()
z=this.d
J.fX(z.a,this.r)
this.ch=0
this.z.T(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.N)(b),++x){w=b[x]
this.dc(w.a,w.be())}y=this.Q
y.T(0)
for(v=a.cy,v=new H.au(v,[H.q(v,0)]),v=v.gA(v);v.q();)y.l(0,v.d)
u=this.d8()
if(u.length!==0)P.ab("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bR(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.d1()
s=a.Q
r=a.z
if(t)J.fj(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fy(q,v,y,s,0,r)
else J.fx(q,v,y,s,0)}else{s=z.a
if(r>1)J.fw(s,v,0,y,r)
else J.fv(s,v,0,y)}if(t)J.fB(z.a)},
p:{
cK:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.c
y=P.ae(null,null,null,z)
x=c.b
w=d.b
v=H.p(c.f,"$isa",[z],"$asa")
u=J.fr(b.a)
t=G.ee(b.a,35633,x)
J.da(b.a,u,t)
s=G.ee(b.a,35632,w)
J.da(b.a,u,s)
if(v.length>0)J.fT(b.a,u,v,35980)
J.fM(b.a,u)
if(!H.cd(J.fL(b.a,u,35714)))H.ac(J.fK(b.a,u))
z=new G.dY(b,c,d,u,P.cH(c.c,z),P.a6(z,P.b),P.a6(z,z),y,a,!1,!0)
z.d5(a,b,c,d)
return z}}},
G:{"^":"b;a,b,c",
bd:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
j5:{"^":"b;a,0b,c,d,e,f,r,x",
aq:function(a){var z,y,x,w,v
H.p(a,"$isa",[P.c],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.ao(y)},
a6:function(a){var z,y,x
H.p(a,"$isa",[P.c],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.ao(y)},
aa:function(a){var z,y
H.p(a,"$isa",[P.c],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ao(z)},
bh:function(a,b){var z=[P.c]
this.b=this.bj(!0,H.p(a,"$isa",z,"$asa"),H.p(b,"$isa",z,"$asa"))},
as:function(a){return this.bh(a,null)},
d6:function(a,b){this.b=this.bj(!1,H.p(a,"$isa",[P.c],"$asa"),b)},
bg:function(a){return this.d6(a,null)},
bj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.c]
H.p(b,"$isa",z,"$asa")
H.p(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.f(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.ai().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.ai().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.ai().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.ai().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.J(w,c)
if(a)C.a.l(w,"void main(void) {")
C.a.J(w,b)
if(a)C.a.l(w,"}")
return C.a.a_(w,"\n")},
p:{
bk:function(a){var z,y
z=P.c
y=[z]
return new G.j5(a,H.f([],y),H.f([],y),H.f([],y),H.f([],y),0,P.a6(z,P.E))}}},
e_:{"^":"be;",
ev:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
b=new T.t(new Float32Array(3))
b.W(0,1,0)
u=this.e
t=u.a
t[0]=y[12]
t[1]=y[13]
t[2]=y[14]
t=new Float32Array(3)
s=new T.t(t)
s.C(u)
r=a.a
t[0]=t[0]-r[0]
t[1]=t[1]-r[1]
t[2]=t[2]-r[2]
s.aP(0)
q=b.bW(s)
q.aP(0)
p=s.bW(q)
p.aP(0)
o=q.aM(u)
n=p.aM(u)
u=s.aM(u)
m=q.a
l=p.a
z.b4(m[0],l[0],t[0],0,m[1],l[1],t[1],0,m[2],l[2],t[2],0,-o,-n,-u,1)
y[12]=x
y[13]=w
y[14]=v},
aO:function(a){return this.ev(a,null)}},
e4:{"^":"b;a,b,c,d,e,f,r",
bf:function(a,b){var z=this.e
if(z!==1)J.fR(a.a,b,34046,z)
z=this.r
J.bT(a.a,b,10240,z)
z=this.f
J.bT(a.a,b,10241,z)
if(this.b){J.bT(a.a,b,10242,33071)
J.bT(a.a,b,10243,33071)}},
p:{
jn:function(){return new G.e4(!1,!1,!1,!0,1,9729,9729)}}},
c5:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
jr:{"^":"c5;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}},
hQ:{"^":"c5;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
cR:function(a){var z,y,x,w
z=J.H(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.f(y,[P.S])
for(w=0;w<z.gj(a);++w){y=z.h(a,w)
if(typeof y==="number"&&Math.floor(y)===y)C.a.i(x,w,J.Z(z.h(a,w)))
else{y=z.h(a,w)
if(typeof y==="number")C.a.i(x,w,H.b3(z.h(a,w)))}}return x},
kf:function(a){var z,y,x,w
z=J.H(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.f(y,[P.E])
for(w=0;w<z.gj(a);++w)C.a.i(x,w,H.j(z.h(a,w)))
return x},
kn:function(a){var z,y,x,w
z=J.H(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.f(y,[[P.a,P.E]])
for(w=0;w<z.gj(a);++w)C.a.i(x,w,Y.kf(H.K(z.h(a,w))))
return x},
hT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=P.c
y=[z,null]
H.p(a,"$isu",y,"$asu")
x=L.a3
H.p(b,"$isa",[x],"$asa")
w=H.f([],[G.dJ])
v=new G.hK(!1,w,H.f([],[G.hz]),H.f([],[T.t]),P.a6(z,[P.a,,]))
u=J.H(a)
t=H.w(u.h(a,"name"))
v.ab(Y.bW(H.K(u.h(a,"vertices"))))
if(u.B(a,"normals")){v.X("aNormal")
v.ar("aNormal",Y.bW(H.K(u.h(a,"normals"))))}if(u.B(a,"texturecoords")){v.X("aTexUV")
v.cV("aTexUV",Y.hg(H.K(J.a8(u.h(a,"texturecoords"),0))))}if(u.B(a,"tangents")){v.X("aTangent")
v.ar("aTangent",Y.bW(H.K(u.h(a,"tangents"))))}if(u.B(a,"bitangents")){v.X("aBitangent")
v.ar("aBitangent",Y.bW(H.K(u.h(a,"bitangents"))))}s=Y.kn(H.K(u.h(a,"faces")))
for(r=s.length,q=0;q<r;++q){p=s[q]
o=p.length
if(0>=o)return H.h(p,0)
n=p[0]
if(1>=o)return H.h(p,1)
m=p[1]
if(2>=o)return H.h(p,2)
o=p[2]
C.a.l(w,new G.dJ(H.j(n),H.j(m),H.j(o)))}l=P.a6(z,x)
C.a.D(b,new Y.hU(l))
z=J.aW(u.h(a,"normals"))
if(typeof z!=="number")return z.b8()
z=C.o.I(z,3)
x=new Array(z)
x.fixed$length=Array
w=[T.a7]
k=H.f(x,w)
x=new Array(z)
x.fixed$length=Array
j=H.f(x,w)
for(i=0;i<z;++i){C.a.i(k,i,new T.a7(new Float32Array(4)))
C.a.i(j,i,new T.a7(new Float32Array(4)))}for(z=J.ad(H.aR(u.h(a,"bones"),"$isl")),x=[P.S];z.q();){h=H.p(z.gv(z),"$isu",y,"$asu")
w=J.H(h)
g=l.h(0,w.h(h,"name"))
r=g.c
o=H.p(Y.cR(H.K(w.h(h,"offsetmatrix"))),"$isa",x,"$asa")
n=r.a
if(15>=o.length)return H.h(o,15)
C.b.i(n,15,o[15])
C.b.i(n,14,o[14])
C.b.i(n,13,o[13])
C.b.i(n,12,o[12])
C.b.i(n,11,o[11])
C.b.i(n,10,o[10])
C.b.i(n,9,o[9])
C.b.i(n,8,o[8])
C.b.i(n,7,o[7])
C.b.i(n,6,o[6])
C.b.i(n,5,o[5])
C.b.i(n,4,o[4])
C.b.i(n,3,o[3])
C.b.i(n,2,o[2])
C.b.i(n,1,o[1])
C.b.i(n,0,o[0])
r.cm()
if(w.B(h,"weights")){f=g.d
for(w=J.ad(H.aR(w.h(h,"weights"),"$isl"));w.q();){r=H.K(w.gv(w))
o=J.H(r)
e=H.j(o.h(r,0))
for(d=0;d<4;++d)if(C.a.h(j,e).a[d]===0)break
n=C.a.h(j,e)
r=J.Z(o.h(r,1))
n=n.a
if(d>=4)return H.h(n,d)
n[d]=r
C.a.h(k,e).a[d]=f}}}v.X("aBoneIndex")
v.X("aBoneWeight")
v.b9("aBoneIndex",k)
v.b9("aBoneWeight",j)
P.ab("mesh "+H.e(t)+" "+v.k(0)+" "+H.e(u.gE(a)))
return v},
hV:function(a){var z,y,x,w,v
z={}
y=[P.c,null]
H.p(a,"$isu",y,"$asu")
x=H.f([],[L.a3])
z.a=0
w=new Y.hW(z,x)
for(v=J.ad(H.aR(J.a8(H.p(J.a8(a,"rootnode"),"$isu",y,"$asu"),"children"),"$isl"));v.q();)w.$2(H.p(v.gv(v),"$isu",y,"$asu"),-1)
return x},
hR:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=P.c
y=[z,null]
H.p(a1,"$isu",y,"$asu")
x=L.a3
H.p(a2,"$isa",[x],"$asa")
w=P.a6(z,x)
C.a.D(a2,new Y.hS(w))
x=J.H(a1)
v=H.w(x.h(a1,"name"))
u=J.Z(x.h(a1,"tickspersecond"))
t=H.b3(x.h(a1,"duration"))
s=H.K(x.h(a1,"channels"))
x=new Array(a2.length)
x.fixed$length=Array
x=H.f(x,[L.dr])
z=J.H(s)
P.ab("animated bones: "+z.gj(s))
for(z=z.gA(s),r=[P.S],q=[T.t],p=[T.c1];z.q();){o=H.p(z.gv(z),"$isu",y,"$asu")
n=J.H(o)
m=w.h(0,n.h(o,"name"))
l=H.f([],r)
k=H.f([],q)
for(j=J.ad(H.aR(n.h(o,"positionkeys"),"$isl"));j.q();){i=H.K(j.gv(j))
h=J.H(i)
C.a.l(l,H.b3(J.cj(h.h(i,0),u)))
i=H.K(h.h(i,1))
h=J.H(i)
g=J.Z(h.h(i,0))
f=J.Z(h.h(i,1))
i=J.Z(h.h(i,2))
h=new Float32Array(3)
h[0]=g
h[1]=f
h[2]=i
C.a.l(k,new T.t(h))}e=H.f([],r)
d=H.f([],p)
for(j=J.ad(H.aR(n.h(o,"rotationkeys"),"$isl"));j.q();){i=H.K(j.gv(j))
h=J.H(i)
C.a.l(e,H.b3(J.cj(h.h(i,0),u)))
c=Y.cR(H.K(h.h(i,1)))
i=c.length
if(1>=i)return H.h(c,1)
h=c[1]
if(2>=i)return H.h(c,2)
g=c[2]
if(3>=i)return H.h(c,3)
i=c[3]
f=c[0]
b=new Float32Array(4)
C.b.i(b,0,h)
C.b.i(b,1,g)
C.b.i(b,2,i)
C.b.i(b,3,f)
C.a.l(d,new T.c1(b))}a=H.f([],r)
a0=H.f([],q)
for(n=J.ad(H.aR(n.h(o,"scalingkeys"),"$isl"));n.q();){j=H.K(n.gv(n))
i=J.H(j)
C.a.l(a,H.b3(J.cj(i.h(j,0),u)))
j=H.K(i.h(j,1))
i=J.H(j)
h=J.Z(i.h(j,0))
g=J.Z(i.h(j,1))
j=J.Z(i.h(j,2))
i=new Float32Array(3)
i[0]=h
i[1]=g
i[2]=j
C.a.l(a0,new T.t(i))}n=new L.dr(m,l,k,e,d,a,a0)
j=l.length
if(j===0){n.sdA(H.f([0],r))
j=new Float32Array(3)
j[0]=0
j[1]=0
j[2]=0
n.sdB(H.f([new T.t(j)],q))}j=n.d
if(j==null||j.length===0){n.sdK(H.f([0],r))
j=new Float32Array(4)
j[0]=0
j[1]=0
j[2]=0
j[3]=1
n.sdL(H.f([new T.c1(j)],p))}j=n.f
if(j==null||j.length===0){n.sdO(H.f([0],r))
j=new Float32Array(3)
j[0]=1
j[1]=1
j[2]=1
n.sdP(H.f([new T.t(j)],q))}C.a.i(x,m.d,n)}return new L.j6(v,x,t)},
bW:function(a){var z,y,x,w,v,u,t,s
z=J.H(a)
y=new Array(C.c.I(z.gj(a),3))
y.fixed$length=Array
x=H.f(y,[T.t])
for(w=0;w<z.gj(a);w+=3){y=C.c.I(w,3)
v=J.Z(z.h(a,w))
u=J.Z(z.h(a,w+1))
t=J.Z(z.h(a,w+2))
s=new Float32Array(3)
s[0]=v
s[1]=u
s[2]=t
C.a.i(x,y,new T.t(s))}return x},
hg:function(a){var z,y,x,w,v,u,t
z=J.H(a)
y=new Array(C.c.I(z.gj(a),2))
y.fixed$length=Array
x=H.f(y,[T.an])
for(w=0;w<z.gj(a);w+=2){y=C.c.I(w,2)
v=J.Z(z.h(a,w))
u=J.Z(z.h(a,w+1))
t=new Float32Array(2)
t[0]=v
t[1]=u
C.a.i(x,y,new T.an(t))}return x},
hU:{"^":"o:12;a",
$1:function(a){H.i(a,"$isa3")
this.a.i(0,a.a,a)
return a}},
hW:{"^":"o:36;a,b",
$2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[P.c,null]
H.p(a,"$isu",z,"$asu")
y=J.H(a)
x=H.w(y.h(a,"name"))
w=Y.cR(H.K(y.h(a,"transformation")))
v=new T.P(new Float32Array(16))
u=w.length
if(0>=u)return H.h(w,0)
t=w[0]
if(1>=u)return H.h(w,1)
s=w[1]
if(2>=u)return H.h(w,2)
r=w[2]
if(3>=u)return H.h(w,3)
q=w[3]
if(4>=u)return H.h(w,4)
p=w[4]
if(5>=u)return H.h(w,5)
o=w[5]
if(6>=u)return H.h(w,6)
n=w[6]
if(7>=u)return H.h(w,7)
m=w[7]
if(8>=u)return H.h(w,8)
l=w[8]
if(9>=u)return H.h(w,9)
k=w[9]
if(10>=u)return H.h(w,10)
j=w[10]
if(11>=u)return H.h(w,11)
i=w[11]
if(12>=u)return H.h(w,12)
h=w[12]
if(13>=u)return H.h(w,13)
g=w[13]
if(14>=u)return H.h(w,14)
f=w[14]
if(15>=u)return H.h(w,15)
v.b4(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,w[15])
v.cm()
e=new T.P(new Float32Array(16))
e.G()
w=this.a
u=w.a
w.a=u+1
C.a.l(this.b,new L.a3(x,v,e,u,b))
if(y.B(a,"children"))for(y=J.ad(H.aR(y.h(a,"children"),"$isl"));y.q();)this.$2(H.p(y.gv(y),"$isu",z,"$asu"),u)}},
hS:{"^":"o:12;a",
$1:function(a){H.i(a,"$isa3")
this.a.i(0,a.a,a)
return a}}}],["","",,R,{"^":"",
ds:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.p(a,"$isa",[L.a3],"$asa")
z=H.f([],[T.t])
for(y=b.a,x=y.length,w=0;w<a.length;++w){v=a[w].e
if(v===-1)continue
if(w>=x)return H.h(y,w)
u=y[w].a
t=u[14]
s=u[13]
r=u[12]
u=new Float32Array(3)
u[0]=r
u[1]=s
u[2]=t
q=new T.t(new Float32Array(3))
q.C(new T.t(u))
q.an(0,c)
C.a.l(z,q)
if(v<0||v>=x)return H.h(y,v)
q=y[v].a
t=q[14]
s=q[13]
r=q[12]
u=new Float32Array(3)
u[0]=r
u[1]=s
u[2]=t
q=new T.t(new Float32Array(3))
q.C(new T.t(u))
q.an(0,c)
C.a.l(z,q)}return z},
ko:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.jU("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).au(y,"float")
y.setProperty(x,"left","")
x=C.y.au(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.t.K(z,v)}return z},
h6:{"^":"b;a,0b,c,d,0e,0f"},
iY:{"^":"iX;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eC:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ab("size change "+H.e(y)+" "+H.e(x))
this.dx.cW(y,x)
this.z=y
this.Q=x},"$1","geB",4,0,14]},
jb:{"^":"b;",
d7:function(a,b,c){var z,y
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
jc:{"^":"jb;e,f,a,b,c,d",
da:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.n.eJ(y,2)+" fps"
C.t.cJ(this.c,b)
x=C.c.I(30*C.n.e3(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.t.K(z,w)},
d9:function(a){return this.da(a,"")}}}],["","",,A,{"^":"",
eG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.p(e,"$isa",[G.bm],"$asa")
if(!b.c)return
z=b.dx
z.C(c)
y=b.d
z.a0(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.e(b)
w=C.a.geu(e)
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
v.e9(new T.bd(u))
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
a.d_(b.cx,e,d)
if(0>=e.length)return H.h(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.N)(y),++r)A.eG(a,y[r],z,d,e)},
bf:{"^":"e_;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"},
p:{
dU:function(a,b){var z,y,x,w,v,u,t,s
z=H.f([],[A.bf])
y=new Float32Array(9)
x=new T.P(new Float32Array(16))
x.G()
w=new T.P(new Float32Array(16))
w.G()
v=new Float32Array(3)
u=new Float32Array(3)
t=new Float32Array(3)
s=new Float32Array(3)
C.a.l(z,b)
return new A.bf(null,null,z,new T.bd(y),x,w,new T.t(v),new T.t(u),new T.t(t),new T.t(s),a,!1,!0)}}},
c4:{"^":"be;d,e,f,a,b,c"},
iX:{"^":"be;",
d4:function(a,b,c){if(this.d==null)this.d=new G.hE(this.e,null,null,null,null)},
cZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.fk(v.a,36160,z)
J.h_(v.a,this.x,this.y,x,w)
if(y!==0)J.fn(v.a,y)
for(z=this.f,y=z.length,x=P.c,w=P.b,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
if(!t.c)continue
v=t.d
if(!v.c)continue
s=t.e
C.a.l(s,new G.bm(P.a6(x,w),"transforms",!1,!0))
r=new T.P(new Float32Array(16))
r.G()
for(q=t.f,p=q.length,o=0;o<q.length;q.length===p||(0,H.N)(q),++o)A.eG(v,q[o],r,a,s)
if(0>=s.length)return H.h(s,-1)
s.pop()}},
cY:function(){return this.cZ(null)}}}],["","",,V,{}],["","",,D,{"^":"",
ii:function(a){var z,y,x,w
z=[P.u,,,]
y=new P.R(0,$.F,[z])
x=new XMLHttpRequest()
C.z.ex(x,"GET",a)
w=W.bF
W.ah(x,"loadend",H.m(new D.ij(new P.cQ(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.cI(x,"")
return y},
ig:function(a){var z,y,x,w
z=W.c_
y=new P.R(0,$.F,[z])
x=document.createElement("img")
w=new W.aY(x,"load",!1,[W.L])
w.gem(w).ak(new D.ih(new P.cQ(y,[z]),x),-1)
x.src=a
return y},
ij:{"^":"o:27;a,b",
$1:function(a){H.i(a,"$isbF")
this.a.a8(0,H.b4(C.U.ee(0,H.w(W.lf(this.b.response))),{futureOr:1,type:[P.u,,,]}))}},
ih:{"^":"o:14;a,b",
$1:function(a){H.i(a,"$isL")
return this.a.a8(0,this.b)}},
i6:{"^":"b;a,b,c",
d2:function(a){var z,y
a=document
z=W.ba
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.m(new D.i8(this),y),!1,z)
W.ah(a,"keyup",H.m(new D.i9(this),y),!1,z)},
p:{
i7:function(a){var z=P.E
z=new D.i6(P.ae(null,null,null,z),P.ae(null,null,null,z),P.ae(null,null,null,z))
z.d2(a)
return z}}},
i8:{"^":"o:15;a",
$1:function(a){var z
H.i(a,"$isba")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
i9:{"^":"o:15;a",
$1:function(a){var z
H.i(a,"$isba")
z=this.a
z.a.cd(0,a.which)
z.c.l(0,a.which)}},
it:{"^":"b;a,b,c,d,e,f,r,x",
d3:function(a){var z,y,x
if(a==null)a=document
z=J.n(a)
y=z.gc9(a)
x=H.q(y,0)
W.ah(y.a,y.b,H.m(new D.iv(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gc8(a)
y=H.q(x,0)
W.ah(x.a,x.b,H.m(new D.iw(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gca(a)
x=H.q(y,0)
W.ah(y.a,y.b,H.m(new D.ix(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gcb(a)
x=H.q(z,0)
W.ah(z.a,z.b,H.m(new D.iy(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
iu:function(a){var z=P.E
z=new D.it(P.ae(null,null,null,z),P.ae(null,null,null,z),P.ae(null,null,null,z),0,0,0,0,0)
z.d3(a)
return z}}},
iv:{"^":"o:4;a",
$1:function(a){var z,y
H.i(a,"$isa_")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.j(y.gc6(a).a)
z.x=H.j(y.gc6(a).b)
z.d=a.movementX
z.e=a.movementY}},
iw:{"^":"o:4;a",
$1:function(a){var z
H.i(a,"$isa_")
a.preventDefault()
P.ab("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
ix:{"^":"o:4;a",
$1:function(a){var z
H.i(a,"$isa_")
a.preventDefault()
z=this.a
z.a.cd(0,a.button)
z.c.l(0,a.button)}},
iy:{"^":"o:29;a",
$1:function(a){H.i(a,"$isaX")
a.preventDefault()
this.a.f=H.j(C.af.geh(a))}},
iH:{"^":"h8;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bM:function(a){var z,y
z=C.b.eo(H.p(a,"$isl",[P.b],"$asl"),0,new A.lC(),P.E)
if(typeof z!=="number")return H.ap(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lC:{"^":"o:30;",
$2:function(a,b){var z,y
H.j(a)
z=J.az(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bd:{"^":"b;a",
C:function(a){var z,y
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
k:function(a){return"[0] "+this.P(0).k(0)+"\n[1] "+this.P(1).k(0)+"\n[2] "+this.P(2).k(0)+"\n"},
h:function(a,b){var z
H.j(b)
z=this.a
if(b>=9)return H.h(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bd){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
P:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.h(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.h(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.h(y,x)
z[2]=y[x]
return new T.t(z)},
e9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.C(a)
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
return m}},P:{"^":"b;a",
b4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var z=this.a
C.b.i(z,15,p)
C.b.i(z,14,o)
C.b.i(z,13,n)
C.b.i(z,12,m)
C.b.i(z,11,l)
C.b.i(z,10,k)
C.b.i(z,9,j)
C.b.i(z,8,i)
C.b.i(z,7,h)
C.b.i(z,6,g)
C.b.i(z,5,f)
C.b.i(z,4,e)
C.b.i(z,3,d)
C.b.i(z,2,c)
C.b.i(z,1,b)
C.b.i(z,0,a)},
C:function(a){var z,y
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
k:function(a){return"[0] "+this.P(0).k(0)+"\n[1] "+this.P(1).k(0)+"\n[2] "+this.P(2).k(0)+"\n[3] "+this.P(3).k(0)+"\n"},
h:function(a,b){var z
H.j(b)
z=this.a
if(b>=16)return H.h(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
P:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.h(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.h(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.h(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.h(y,x)
z[3]=y[x]
return new T.a7(z)},
ce:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x[4]
v=x[8]
u=x[5]
t=x[9]
s=x[6]
r=x[10]
q=x[7]
p=x[11]
o=-y
x[4]=w*z+v*y
x[5]=u*z+t*y
x[6]=s*z+r*y
x[7]=q*z+p*y
x[8]=w*o+v*z
x[9]=u*o+t*z
x[10]=s*o+r*z
x[11]=q*o+p*z},
G:function(){var z=this.a
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
cm:function(){var z,y
z=this.a
y=z[4]
z[4]=z[1]
z[1]=y
y=z[8]
z[8]=z[2]
z[2]=y
y=z[12]
z[12]=z[3]
z[3]=y
y=z[9]
z[9]=z[6]
z[6]=y
y=z[13]
z[13]=z[7]
z[7]=y
y=z[14]
z[14]=z[11]
z[11]=y},
a0:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},c1:{"^":"b;a",
gj:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
h:function(a,b){var z
H.j(b)
z=this.a
if(b>=4)return H.h(z,b)
return z[b]},
k:function(a){var z=this.a
return H.e(z[0])+", "+H.e(z[1])+", "+H.e(z[2])+" @ "+H.e(z[3])}},an:{"^":"b;a",
C:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.an){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
a2:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.an(z)
y.C(this)
x=1/b
z[1]=z[1]*x
z[0]=z[0]*x
return y},
h:function(a,b){var z
H.j(b)
z=this.a
if(b>=2)return H.h(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga1:function(a){return this.a[0]},
gU:function(a){return this.a[1]}},t:{"^":"b;a",
W:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
C:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.t){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
a2:function(a,b){return this.cG(1/b)},
h:function(a,b){var z
H.j(b)
z=this.a
if(b>=3)return H.h(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gc4:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aP:function(a){var z,y,x
z=Math.sqrt(this.gc4())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aM:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bW:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.t(new Float32Array(3))
z.W(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
an:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
cG:function(a){var z=new T.t(new Float32Array(3))
z.C(this)
z.an(0,a)
return z},
ga1:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gal:function(a){return this.a[2]},
p:{
jw:function(a,b,c){var z=new T.t(new Float32Array(3))
z.W(a,b,c)
return z}}},a7:{"^":"b;a",
C:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bM(this.a)},
a2:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a7(z)
y.C(this)
x=1/b
z[0]=z[0]*x
z[1]=z[1]*x
z[2]=z[2]*x
z[3]=z[3]*x
return y},
h:function(a,b){var z
H.j(b)
z=this.a
if(b>=4)return H.h(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga1:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gal:function(a){return this.a[2]},
gcC:function(a){return this.a[3]}}}],["","",,X,{"^":"",
eM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z={}
y=document
x=C.j.cF(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.jc(0,0,x,w,y.createElement("div"),R.ko("blue","gray",90,30))
u.d7(x,"blue","gray")
t=H.i(C.j.ez(y,"#webgl-canvas"),"$isbw")
s=new G.ha(t)
x=P.c
v=P.b
r=(t&&C.J).cE(t,"webgl2",P.cG(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.ac(P.dI('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.fJ(r))
if($.eH>0)P.ab("I: "+q)
J.fo(r,0,0,0,1)
J.bu(r,2929)
J.bu(r,2884)
r=new Float32Array(3)
q=D.i7(null)
p=D.iu(t)
o=new T.P(new Float32Array(16))
o.G()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.iH(5000,0,0,0,new T.t(r),-0.02,q,p,o,new T.t(n),new T.t(m),new T.t(l),new T.t(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.P(new Float32Array(16))
r.G()
q=new T.P(new Float32Array(16))
q.G()
j=new G.iJ(k,50,1,1,1e4,r,q,new T.P(new Float32Array(16)),P.a6(x,v),"perspective",!1,!0)
j.bi()
r=G.cK("animation",s,$.f8(),$.f7())
q=[G.bm]
p=H.f([j],q)
o=[A.bf]
n=H.f([],o)
i=new A.c4(r,p,n,"animation",!1,!0)
p=G.cK("solid",s,$.fc(),$.fb())
n=H.f([j],q)
m=H.f([],o)
h=new A.c4(p,n,m,"solid",!1,!0)
n=G.cK("demo",s,$.fa(),$.f9())
q=H.f([j],q)
o=H.f([],o)
g=new A.c4(n,q,o,"demo",!1,!0)
q=H.f([],[A.c4])
f=new R.iY(t,j,null,s,q,17664,0,0,0,0,"main",!1,!0)
f.d4("main",s,null)
f.eC(null)
o=W.L
W.ah(window,"resize",H.m(f.geB(),{func:1,ret:-1,args:[o]}),!1,o)
C.a.l(q,h)
C.a.l(q,i)
C.a.l(q,g)
e=G.dR("wire")
e.d.i(0,"uColor",$.eS())
d=G.dR("mat")
z.a=null
z.b=null
z.c=null
c=P.cG(["idSkeleton",p,"idStatic",n,"idAnimation",r],x,G.dY)
for(x=C.j.aU(y,"input"),r=x.length,b=0;b<x.length;x.length===r||(0,H.N)(x),++b){q=J.fE(H.i(x[b],"$isT"))
p=H.q(q,0)
W.ah(q.a,q.b,H.m(new X.lP(c),{func:1,ret:-1,args:[p]}),!1,p)}for(x=C.j.aU(y,"input"),r=x.length,b=0;b<x.length;x.length===r||(0,H.N)(x),++b){q=H.i(x[b],"$isT")
H.bN("initialize inputs "+H.e(q.id))
a=C.j.dl(y,"Event")
J.ff(a,"change",!0,!0)
J.fu(q,a)}z.d=0
d.d.i(0,"uTime",0)
P.hH(H.f([D.ii("../asset/monster/monster.json"),D.ig("../asset/monster/monster.jpg")],[[P.a5,P.b]]),null,!1,v).ak(new X.lQ(z,s,d,i,g,h,e,new X.lO(z,k,f,u,d)),null)},
lP:{"^":"o:31;a",
$1:function(a){var z=H.aq(J.fH(a),"$isdL")
P.ab(H.e(z.id)+" toggle "+H.e(z.checked))
this.a.h(0,z.id).c=z.checked}},
lO:{"^":"o:32;a,b,c,d,e",
$1:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
H.d3(a8)
if(typeof a8!=="number")return a8.b7()
z=this.a
z.d=a8+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b2()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b2()
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
if(typeof v!=="number")return v.b2()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.o.e4(y.id,-1.4707963267948965,1.4707963267948965)
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
y.aO(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gc4())
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
w.c.T(0)
w.b.T(0)
x.e=0
x.d=0
x.f=0
x.c.T(0)
x.b.T(0)
this.c.cY()
C.ag.gdW(window).ak(this,-1)
this.d.d9(z.d)
x=a8/1000
this.e.d.i(0,"uTime",C.c.b1(C.n.en(x/0.0333),z.b.length))
z=z.c
w=z.c
a6=z.a
a5=z.d
a4=z.e
q=a5.c
if(typeof q!=="number")return H.ap(q)
L.cO(w,a6,a5,a4,C.n.b1(x,q))
a7=R.ds(w,z.e,1)
z.b.bc(G.bZ(a7,null))}},
lQ:{"^":"o:33;a,b,c,d,e,f,r,x",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.K(a)
z=this.b
y=J.H(a)
x=y.h(a,1)
w=new G.e4(!1,!1,!1,!0,1,9729,9729)
v=J.dc(z.a)
J.aV(z.a,3553,v)
u=w.d?1:0
J.fN(z.a,37440,u)
J.aV(z.a,3553,v)
J.fP(z.a,3553,0,6408,6408,5121,x)
w.bf(z,3553)
J.de(z.a)
J.aV(z.a,3553,null)
u=this.c
t=u.d
t.i(0,"uTexture",new G.hQ(x,"../asset/monster/monster.jpg",v,3553,z,w))
w=[P.c,null]
s=H.p(J.a8(J.a8(y.h(a,0),"meshes"),0),"$isu",w,"$asu")
r=H.p(J.a8(J.a8(y.h(a,0),"animations"),0),"$isu",w,"$asu")
q=new T.P(new Float32Array(16))
q.G()
p=Y.hV(H.p(y.h(a,0),"$isu",w,"$asu"))
o=Y.hT(s,p)
n=Y.hR(r,p)
P.ab("Imnported "+n.k(0))
y=this.d
x=y.d
m=G.dS("../asset/monster/monster.json",x.d,4,x.e.x)
m.ab(G.bZ(o.d,null))
m.ba(o.d0())
G.kb(o,m)
x=[A.bf]
w=H.f([],x)
v=new Float32Array(9)
l=new T.P(new Float32Array(16))
l.G()
k=new T.P(new Float32Array(16))
k.G()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
k.ce(-0.785)
f=A.dU("wrapper",new A.bf(u,m,w,new T.bd(v),l,k,new T.t(j),new T.t(i),new T.t(h),new T.t(g),m.a,!1,!0))
w=new T.t(new Float32Array(3))
w.W(100,0,0)
f.aO(w)
C.a.l(this.e.f,f)
C.a.l(y.f,f)
y=this.a
y.b=H.f([],[P.S])
w=n.c
if(typeof w!=="number")return H.ap(w)
e=0
for(;e<w;e+=0.0333){v=y.b;(v&&C.a).l(v,e)}d=L.hh(p,q,n,y.b)
w=p.length*4
v=y.b.length
u=$.eW()
l=J.dc(z.a)
c=new G.jr(w,v,34836,"anim",l,3553,z,u)
J.aV(z.a,3553,l)
J.fQ(z.a,3553,0,34836,w,v,0,6408,5126,d)
u.bf(z,3553)
J.de(z.a)
J.aV(z.a,3553,null)
y.a=c
t.i(0,"uAnimationTable",c)
t=this.f
z=new T.P(new Float32Array(16))
z.G()
b=new R.h6(z,p,n)
w=L.dm(p.length)
b.e=w
L.cO(p,z,n,w,0)
w=G.ia("wire",t.d,R.ds(p,w,1))
b.b=w
x=H.f([],x)
z=new Float32Array(9)
v=new T.P(new Float32Array(16))
v.G()
u=new T.P(new Float32Array(16))
u.G()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
z=new A.bf(this.r,w,x,new T.bd(z),v,u,new T.t(l),new T.t(k),new T.t(j),new T.t(new Float32Array(3)),w.a,!1,!0)
b.f=z
y.c=b
u.ce(0.785)
f=A.dU("wrapper",z)
z=new T.t(new Float32Array(3))
z.W(100,0,0)
f.aO(z)
C.a.l(t.f,f)
this.x.$1(0)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.i2.prototype
if(typeof a=="boolean")return J.i1.prototype
if(a.constructor==Array)return J.bB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.b)return a
return J.cg(a)}
J.H=function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.bB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.b)return a
return J.cg(a)}
J.br=function(a){if(a==null)return a
if(a.constructor==Array)return J.bB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.b)return a
return J.cg(a)}
J.d_=function(a){if(typeof a=="number")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bn.prototype
return a}
J.lz=function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bn.prototype
return a}
J.eI=function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bn.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.b)return a
return J.cg(a)}
J.cf=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bn.prototype
return a}
J.cj=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.d_(a).a2(a,b)}
J.aU=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).F(a,b)}
J.aj=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.d_(a).V(a,b)}
J.a8=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.H(a).h(a,b)}
J.fd=function(a,b,c){return J.br(a).i(a,b,c)}
J.d8=function(a,b){return J.eI(a).av(a,b)}
J.fe=function(a,b){return J.n(a).dt(a,b)}
J.ff=function(a,b,c,d){return J.n(a).du(a,b,c,d)}
J.bQ=function(a,b){return J.n(a).dF(a,b)}
J.fg=function(a,b,c,d){return J.n(a).dG(a,b,c,d)}
J.fh=function(a,b,c){return J.n(a).dH(a,b,c)}
J.d9=function(a,b){return J.n(a).bE(a,b)}
J.fi=function(a,b,c,d){return J.n(a).bF(a,b,c,d)}
J.da=function(a,b,c){return J.n(a).bH(a,b,c)}
J.fj=function(a,b){return J.n(a).dY(a,b)}
J.ck=function(a,b,c){return J.n(a).bI(a,b,c)}
J.fk=function(a,b,c){return J.n(a).bK(a,b,c)}
J.aV=function(a,b,c){return J.n(a).bL(a,b,c)}
J.bR=function(a,b){return J.n(a).e0(a,b)}
J.fl=function(a,b){return J.n(a).bM(a,b)}
J.fm=function(a,b,c){return J.n(a).bN(a,b,c)}
J.db=function(a,b,c,d){return J.n(a).bO(a,b,c,d)}
J.fn=function(a,b){return J.br(a).bP(a,b)}
J.fo=function(a,b,c,d,e){return J.n(a).bQ(a,b,c,d,e)}
J.fp=function(a,b){return J.lz(a).N(a,b)}
J.fq=function(a,b){return J.H(a).u(a,b)}
J.cl=function(a,b,c){return J.H(a).e7(a,b,c)}
J.cm=function(a){return J.n(a).bS(a)}
J.fr=function(a){return J.n(a).bT(a)}
J.dc=function(a){return J.n(a).bV(a)}
J.fs=function(a){return J.n(a).ed(a)}
J.ft=function(a,b){return J.n(a).bX(a,b)}
J.cn=function(a,b){return J.n(a).bY(a,b)}
J.fu=function(a,b){return J.n(a).ei(a,b)}
J.fv=function(a,b,c,d){return J.n(a).bZ(a,b,c,d)}
J.fw=function(a,b,c,d,e){return J.n(a).ej(a,b,c,d,e)}
J.fx=function(a,b,c,d,e){return J.n(a).c_(a,b,c,d,e)}
J.fy=function(a,b,c,d,e,f){return J.n(a).ek(a,b,c,d,e,f)}
J.fz=function(a,b){return J.br(a).t(a,b)}
J.bu=function(a,b){return J.n(a).c0(a,b)}
J.fA=function(a,b){return J.n(a).c1(a,b)}
J.fB=function(a){return J.n(a).el(a)}
J.fC=function(a,b){return J.br(a).D(a,b)}
J.fD=function(a){return J.n(a).gdX(a)}
J.az=function(a){return J.C(a).gw(a)}
J.ad=function(a){return J.br(a).gA(a)}
J.aW=function(a){return J.H(a).gj(a)}
J.fE=function(a){return J.n(a).gc7(a)}
J.fF=function(a){return J.n(a).gey(a)}
J.fG=function(a){return J.n(a).geG(a)}
J.fH=function(a){return J.n(a).gcg(a)}
J.fI=function(a){return J.cf(a).gcC(a)}
J.bS=function(a){return J.cf(a).ga1(a)}
J.co=function(a){return J.cf(a).gU(a)}
J.dd=function(a){return J.cf(a).gal(a)}
J.cp=function(a,b){return J.n(a).a3(a,b)}
J.fJ=function(a){return J.n(a).am(a)}
J.de=function(a){return J.n(a).aV(a)}
J.fK=function(a,b){return J.n(a).aW(a,b)}
J.fL=function(a,b,c){return J.n(a).aX(a,b,c)}
J.df=function(a,b,c){return J.n(a).b0(a,b,c)}
J.fM=function(a,b){return J.n(a).c5(a,b)}
J.fN=function(a,b,c){return J.n(a).cc(a,b,c)}
J.dg=function(a){return J.n(a).eA(a)}
J.fO=function(a,b,c,d){return J.n(a).b6(a,b,c,d)}
J.fP=function(a,b,c,d,e,f,g){return J.n(a).ci(a,b,c,d,e,f,g)}
J.fQ=function(a,b,c,d,e,f,g,h,i,j){return J.n(a).aj(a,b,c,d,e,f,g,h,i,j)}
J.fR=function(a,b,c,d){return J.n(a).cj(a,b,c,d)}
J.bT=function(a,b,c,d){return J.n(a).ck(a,b,c,d)}
J.Z=function(a){return J.d_(a).eH(a)}
J.fS=function(a){return J.eI(a).eI(a)}
J.bv=function(a){return J.C(a).k(a)}
J.fT=function(a,b,c,d){return J.n(a).eK(a,b,c,d)}
J.fU=function(a,b,c){return J.n(a).cn(a,b,c)}
J.fV=function(a,b,c){return J.n(a).co(a,b,c)}
J.cq=function(a,b,c){return J.n(a).cp(a,b,c)}
J.fW=function(a,b,c){return J.n(a).cq(a,b,c)}
J.dh=function(a,b,c){return J.n(a).cr(a,b,c)}
J.di=function(a,b,c){return J.n(a).cs(a,b,c)}
J.dj=function(a,b,c){return J.n(a).ct(a,b,c)}
J.dk=function(a,b,c,d){return J.n(a).cu(a,b,c,d)}
J.dl=function(a,b,c,d){return J.n(a).cv(a,b,c,d)}
J.fX=function(a,b){return J.n(a).cw(a,b)}
J.fY=function(a,b,c){return J.n(a).eL(a,b,c)}
J.fZ=function(a,b,c,d,e,f,g){return J.n(a).cz(a,b,c,d,e,f,g)}
J.h_=function(a,b,c,d,e){return J.n(a).cB(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bU.prototype
C.J=W.bw.prototype
C.y=W.hj.prototype
C.t=W.hq.prototype
C.K=W.hr.prototype
C.L=W.hM.prototype
C.j=W.hN.prototype
C.z=W.hO.prototype
C.M=J.k.prototype
C.a=J.bB.prototype
C.n=J.dM.prototype
C.c=J.dN.prototype
C.o=J.bC.prototype
C.i=J.bD.prototype
C.T=J.bE.prototype
C.b=H.iz.prototype
C.p=H.iB.prototype
C.w=W.iC.prototype
C.C=J.iK.prototype
C.D=W.iU.prototype
C.I=W.jl.prototype
C.x=J.bn.prototype
C.af=W.aX.prototype
C.ag=W.jz.prototype
C.f=new P.kA()
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
C.U=new P.i4(null,null)
C.V=new P.i5(null)
C.W=H.f(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.X=H.f(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.Z=H.f(I.aS([]),[P.B])
C.Y=H.f(I.aS([]),[P.c])
C.u=H.f(I.aS(["bind","if","ref","repeat","syntax"]),[P.c])
C.v=H.f(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.a_=new G.G("vec3","vertex btangents",0)
C.e=new G.G("vec3","",0)
C.a0=new G.G("vec4","delta from light",0)
C.q=new G.G("","",0)
C.E=new G.G("vec3","vertex coordinates",0)
C.a1=new G.G("vec3","vertex binormals",0)
C.F=new G.G("vec4","for wireframe",0)
C.a2=new G.G("vec4","per vertex color",0)
C.a3=new G.G("float","for normal maps",0)
C.k=new G.G("mat4","",0)
C.a5=new G.G("mat4","",4)
C.a4=new G.G("mat4","",128)
C.d=new G.G("float","",0)
C.a6=new G.G("float","",4)
C.a7=new G.G("float","depth for shadowmaps",0)
C.h=new G.G("sampler2D","",0)
C.a8=new G.G("float","for bump maps",0)
C.a9=new G.G("vec2","texture uvs",0)
C.aa=new G.G("float","time since program start in sec",0)
C.l=new G.G("vec2","",0)
C.ab=new G.G("samplerCube","",0)
C.m=new G.G("vec4","",0)
C.ac=new G.G("vec3","vertex normals",0)
C.ad=new G.G("sampler2DShadow","",0)
C.G=new G.G("vec3","per vertex color",0)
C.H=new G.G("mat3","",0)
C.ae=new G.G("vec3","vertex tangents",0)
$.ak=0
$.b6=null
$.dt=null
$.cU=!1
$.eK=null
$.eC=null
$.eP=null
$.ce=null
$.ch=null
$.d1=null
$.b0=null
$.bo=null
$.bp=null
$.cV=!1
$.F=C.f
$.as=null
$.cx=null
$.dG=null
$.dF=null
$.dC=null
$.dB=null
$.dA=null
$.dz=null
$.eH=0
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
I.$lazy(y,x,w)}})(["ma","eU",function(){return H.eJ("_$dart_dartClosure")},"mK","d5",function(){return H.eJ("_$dart_js")},"nw","eX",function(){return H.am(H.c6({
toString:function(){return"$receiver$"}}))},"nx","eY",function(){return H.am(H.c6({$method$:null,
toString:function(){return"$receiver$"}}))},"ny","eZ",function(){return H.am(H.c6(null))},"nz","f_",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nC","f2",function(){return H.am(H.c6(void 0))},"nD","f3",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nB","f1",function(){return H.am(H.e7(null))},"nA","f0",function(){return H.am(function(){try{null.$method$}catch(z){return z.message}}())},"nF","f5",function(){return H.am(H.e7(void 0))},"nE","f4",function(){return H.am(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nP","d6",function(){return P.jF()},"o4","bt",function(){return[]},"m7","eT",function(){return{}},"nW","f6",function(){return P.cH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)},"nX","d7",function(){return P.a6(P.c,P.bz)},"ni","eV",function(){return new G.e6(1281,0,4294967295)},"m2","eR",function(){return new G.e5(1281,1281,1281)},"o2","ai",function(){return P.cG(["cBlendEquation",C.q,"cDepthWrite",C.q,"cDepthTest",C.q,"cStencilFunc",C.q,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.G,"aColorAlpha",C.a2,"aPosition",C.E,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.F,"aPointSize",C.d,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.d,"iaColor",C.e,"vColor",C.G,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.a0,"vCenter",C.F,"vDepth",C.a7,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.d,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.c,G.G)},"nr","eW",function(){var z=G.jn()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"m5","eS",function(){return T.jw(1,1,0)},"od","fc",function(){var z,y
z=G.bk("SolidColor")
y=[P.c]
z.aq(H.f(["aPosition"],y))
z.a6(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.as(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"oc","fb",function(){var z,y
z=G.bk("SolidColorF")
y=[P.c]
z.a6(H.f(["uColor"],y))
z.as(H.f(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"oa","fa",function(){var z,y
z=G.bk("FixedVertexColorV")
y=[P.c]
z.aq(H.f(["aPosition"],y))
z.a6(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aa(H.f(["vColor"],y))
z.bh(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],y),H.f(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"o9","f9",function(){var z,y
z=G.bk("FixedVertexColorF")
y=[P.c]
z.aa(H.f(["vColor"],y))
z.as(H.f(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"o6","f8",function(){var z,y
z=G.bk("AnimationV")
y=[P.c]
z.aq(H.f(["aPosition","aTexUV","aBoneIndex","aBoneWeight"],y))
z.aa(H.f(["vTexUV"],y))
z.a6(H.f(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"],y))
z.bg(H.f(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n   vTexUV = aTexUV;\n}\n\n"],y))
return z},"o5","f7",function(){var z,y
z=G.bk("AnimationV")
y=[P.c]
z.aa(H.f(["vTexUV"],y))
z.a6(H.f(["uTexture"],y))
z.bg(H.f(["void main() {\n  oFragColor = texture(uTexture, vTexUV);\n}\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[P.c,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.a_]},{func:1,ret:P.Y,args:[P.c]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.c,args:[P.E]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.Y,args:[W.al]},{func:1,ret:-1,args:[,]},{func:1,ret:L.a3,args:[L.a3]},{func:1,ret:P.Y,args:[W.T,P.c,P.c,W.bJ]},{func:1,ret:-1,args:[W.L]},{func:1,ret:P.B,args:[W.ba]},{func:1,args:[P.c]},{func:1,ret:P.B,args:[,P.V]},{func:1,ret:P.B,args:[,],opt:[P.V]},{func:1,ret:[P.R,,],args:[,]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.B,args:[P.I]},{func:1,args:[W.L]},{func:1,ret:P.Y,args:[W.x]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,args:[,,]},{func:1,ret:P.B,args:[W.bF]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.aX]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:P.B,args:[W.L]},{func:1,ret:-1,args:[P.I]},{func:1,ret:P.B,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]},{func:1,args:[,P.c]},{func:1,ret:-1,args:[[P.u,P.c,,],P.E]}]
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
if(x==y)H.lW(d||a)
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
Isolate.bq=a.bq
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
if(typeof dartMainRunner==="function")dartMainRunner(X.eM,[])
else X.eM([])})})()
//# sourceMappingURL=animation.dart.js.map
