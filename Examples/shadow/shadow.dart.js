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
b6.$ise=b5
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
var d=supportsDirectProtoAccess&&b2!="e"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cR(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bo=function(){}
var dart=[["","",,H,{"^":"",mR:{"^":"e;a"}}],["","",,J,{"^":"",
cV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ci:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cU==null){H.lB()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.e7("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.d_()]
if(v!=null)return v
v=H.lI(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.d_(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
k:{"^":"e;",
G:function(a,b){return a===b},
gB:function(a){return H.bf(a)},
k:["cN",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i1:{"^":"k;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isX:1},
i2:{"^":"k;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isG:1},
cB:{"^":"k;",
gB:function(a){return 0},
k:["cP",function(a){return String(a)}]},
iJ:{"^":"cB;"},
bj:{"^":"cB;"},
bG:{"^":"cB;",
k:function(a){var z=a[$.eY()]
if(z==null)return this.cP(a)
return"JavaScript function for "+H.d(J.bt(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbz:1},
bD:{"^":"k;$ti",
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
for(y=0;y<a.length;++y)this.j(z,y,H.d(a[y]))
return z.join(b)},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
ge1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.dE())},
bF:function(a,b){var z,y
H.n(b,{func:1,ret:P.X,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.f(P.aU(a))}return!1},
cK:function(a,b){if(!!a.immutable$list)H.a1(P.A("sort"))
H.jd(a,J.lb(),H.o(a,0))},
aA:function(a){return this.cK(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aS(a[z],b))return!0
return!1},
k:function(a){return P.cz(a,"[","]")},
gC:function(a){return new J.hd(a,a.length,0,[H.o(a,0)])},
gB:function(a){return H.bf(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.aQ(a,b))
return a[b]},
j:function(a,b,c){H.z(c,H.o(a,0))
if(!!a.immutable$list)H.a1(P.A("indexed set"))
if(b>=a.length||b<0)throw H.f(H.aQ(a,b))
a[b]=c},
$isx:1,
$asx:I.bo,
$ism:1,
$isa:1,
p:{
i0:function(a,b){return J.cA(H.c(a,[b]))},
cA:function(a){H.bQ(a)
a.fixed$length=Array
return a},
mP:[function(a,b){return J.fB(H.eL(a,"$isa0"),H.eL(b,"$isa0"))},"$2","lb",8,0,30]}},
mQ:{"^":"bD;$ti"},
hd:{"^":"e;a,b,c,0d,$ti",
sbl:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.D(z))
x=this.c
if(x>=y){this.sbl(null)
return!1}this.sbl(z[x]);++this.c
return!0},
$isaA:1},
bE:{"^":"k;",
T:function(a,b){var z
H.cW(b)
if(typeof b!=="number")throw H.f(H.aP(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gav(b)
if(this.gav(a)===z)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
cn:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.A(""+a+".toInt()"))},
dL:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.f(P.A(""+a+".ceil()"))},
dX:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.A(""+a+".floor()"))},
dM:function(a,b,c){if(this.T(b,c)>0)throw H.f(H.aP(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
ec:function(a,b){var z
if(b>20)throw H.f(P.bh(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
bc:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bC(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bC(a,b)},
bC:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.A("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bA:function(a,b){var z
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dz:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.f(H.aP(b))
return a>b},
$isa0:1,
$asa0:function(){return[P.H]},
$isa5:1,
$isH:1},
dG:{"^":"bE;",$isB:1},
dF:{"^":"bE;"},
bF:{"^":"k;",
bR:function(a,b){if(b<0)throw H.f(H.aQ(a,b))
if(b>=a.length)H.a1(H.aQ(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.f(H.aQ(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.w(b)
if(typeof b!=="string")throw H.f(P.dk(b,null,null))
return a+b},
cL:function(a,b,c){var z
if(c>a.length)throw H.f(P.bh(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aB:function(a,b){return this.cL(a,b,0)},
bb:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.c5(b,null,null))
if(b>c)throw H.f(P.c5(b,null,null))
if(c>a.length)throw H.f(P.c5(c,null,null))
return a.substring(b,c)},
cM:function(a,b){return this.bb(a,b,null)},
eb:function(a){return a.toLowerCase()},
ee:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.ab(z,0)===133){x=J.i3(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bR(z,w)===133?J.i4(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dN:function(a,b,c){if(c>a.length)throw H.f(P.bh(c,0,a.length,null,null))
return H.lT(a,b,c)},
T:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.f(H.aP(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.f(H.aQ(a,b))
return a[b]},
$isx:1,
$asx:I.bo,
$isa0:1,
$asa0:function(){return[P.i]},
$isiH:1,
$isi:1,
p:{
dH:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
i3:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.ab(a,b)
if(y!==32&&y!==13&&!J.dH(y))break;++b}return b},
i4:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bR(a,z)
if(y!==32&&y!==13&&!J.dH(y))break}return b}}}}],["","",,H,{"^":"",
dE:function(){return new P.cH("No element")},
i_:function(){return new P.cH("Too many elements")},
jd:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.B,args:[c,c]})
H.bJ(a,0,J.b5(a)-1,b,c)},
bJ:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.jc(a,b,c,d,e)
else H.jb(a,b,c,d,e)},
jc:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.bp(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.af(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.i(a,v))
w=v}y.j(a,w,x)}},
jb:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.d.Z(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.Z(b+a0,2)
v=w-z
u=w+z
t=J.bp(a)
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
H.bJ(a,b,m-2,a1,a2)
H.bJ(a,l+2,a0,a1,a2)
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
break}}H.bJ(a,m,l,a1,a2)}else H.bJ(a,m,l,a1,a2)},
dx:{"^":"m;"},
c2:{"^":"dx;$ti",
gC:function(a){return new H.dK(this,this.gl(this),0,[H.cT(this,"c2",0)])},
aW:function(a,b){return this.cO(0,H.n(b,{func:1,ret:P.X,args:[H.cT(this,"c2",0)]}))}},
dK:{"^":"e;a,b,c,0d,$ti",
saa:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bp(z)
x=y.gl(z)
if(this.b!==x)throw H.f(P.aU(z))
w=this.c
if(w>=x){this.saa(null)
return!1}this.saa(y.w(z,w));++this.c
return!0},
$isaA:1},
ih:{"^":"m;a,b,$ti",
gC:function(a){var z=this.a
return new H.dN(z.gC(z),this.b,this.$ti)},
gl:function(a){return this.a.a.a},
$asm:function(a,b){return[b]},
p:{
ii:function(a,b,c,d){H.t(a,"$ism",[c],"$asm")
H.n(b,{func:1,ret:d,args:[c]})
return new H.hG(a,b,[c,d])}}},
hG:{"^":"ih;a,b,$ti"},
dN:{"^":"aA;0a,b,c,$ti",
saa:function(a){this.a=H.z(a,H.o(this,1))},
v:function(){var z=this.b
if(z.v()){this.saa(this.c.$1(z.d))
return!0}this.saa(null)
return!1},
gE:function(a){return this.a},
$asaA:function(a,b){return[b]}},
ij:{"^":"c2;a,b,$ti",
gl:function(a){return J.b5(this.a)},
w:function(a,b){return this.b.$1(J.fL(this.a,b))},
$asc2:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
e8:{"^":"m;a,b,$ti",
gC:function(a){return new H.jC(J.bX(this.a),this.b,this.$ti)}},
jC:{"^":"aA;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
c1:{"^":"e;$ti"}}],["","",,H,{"^":"",
aR:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lt:function(a){return init.types[H.T(a)]},
lE:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isy},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bt(a)
if(typeof z!=="string")throw H.f(H.aP(a))
return z},
bf:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iS:function(a){var z,y
if(typeof a!=="string")H.a1(H.aP(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.h3(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bg:function(a){return H.iK(a)+H.ca(H.at(a),0,null)},
iK:function(a){var z,y,x,w,v,u,t,s,r
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
return H.aR(w.length>1&&C.h.ab(w,0)===36?C.h.cM(w,1):w)},
aW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iR:function(a){var z=H.aW(a).getFullYear()+0
return z},
iP:function(a){var z=H.aW(a).getMonth()+1
return z},
iL:function(a){var z=H.aW(a).getDate()+0
return z},
iM:function(a){var z=H.aW(a).getHours()+0
return z},
iO:function(a){var z=H.aW(a).getMinutes()+0
return z},
iQ:function(a){var z=H.aW(a).getSeconds()+0
return z},
iN:function(a){var z=H.aW(a).getMilliseconds()+0
return z},
au:function(a){throw H.f(H.aP(a))},
h:function(a,b){if(a==null)J.b5(a)
throw H.f(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,"index",null)
z=H.T(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.au(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.c5(b,"index",null)},
aP:function(a){return new P.aT(!0,a,null,null)},
eC:function(a){if(typeof a!=="number")throw H.f(H.aP(a))
return a},
f:function(a){var z
if(a==null)a=new P.dS()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eP})
z.name=""}else z.toString=H.eP
return z},
eP:function(){return J.bt(this.dartException)},
a1:function(a){throw H.f(a)},
D:function(a){throw H.f(P.aU(a))},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dR(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.f3()
u=$.f4()
t=$.f5()
s=$.f6()
r=$.f9()
q=$.fa()
p=$.f8()
$.f7()
o=$.fc()
n=$.fb()
m=v.P(y)
if(m!=null)return z.$1(H.cC(H.w(y),m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.w(y),m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dR(H.w(y),m))}}return z.$1(new H.jw(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aT(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dX()
return a},
bq:function(a){var z
if(a==null)return new H.eo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eo(a)},
lp:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
lD:function(a,b,c,d,e,f){H.j(a,"$isbz")
switch(H.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.dB("Unsupported number of arguments for wrapped closure"))},
bn:function(a,b){var z
H.T(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lD)
a.$identity=z
return z},
ho:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iY(z).r}else x=d
w=e?Object.create(new H.je().constructor.prototype):Object.create(new H.ct(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ag
if(typeof u!=="number")return u.I()
$.ag=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dq(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lt,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dn:H.cu
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.f("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dq(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
hl:function(a,b,c,d){var z=H.cu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dq:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hl(y,!w,z,b)
if(y===0){w=$.ag
if(typeof w!=="number")return w.I()
$.ag=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ag
if(typeof w!=="number")return w.I()
$.ag=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
hm:function(a,b,c,d){var z,y
z=H.cu
y=H.dn
switch(b?-1:a){case 0:throw H.f(H.j3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hn:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.c_("self")
$.b6=z}y=$.dm
if(y==null){y=H.c_("receiver")
$.dm=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.ag
if(typeof y!=="number")return y.I()
$.ag=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.ag
if(typeof y!=="number")return y.I()
$.ag=y+1
return new Function(z+y+"}")()},
cR:function(a,b,c,d,e,f,g){return H.ho(a,b,H.T(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aa(a,"String"))},
eD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aa(a,"double"))},
cW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aa(a,"num"))},
cd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aa(a,"bool"))},
T:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aa(a,"int"))},
cX:function(a,b){throw H.f(H.aa(a,H.aR(H.w(b).substring(3))))},
lP:function(a,b){throw H.f(H.dp(a,H.aR(H.w(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cX(a,b)},
M:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.lP(a,b)},
eL:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cX(a,b)},
bQ:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.f(H.aa(a,"List<dynamic>"))},
lH:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cX(a,b)},
cS:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.T(z)]
else return a.$S()}return},
bN:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cS(J.C(a))
if(z==null)return!1
return H.et(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cN)return a
$.cN=!0
try{if(H.bN(a,b))return a
z=H.bS(b)
y=H.aa(a,z)
throw H.f(y)}finally{$.cN=!1}},
cf:function(a,b){if(a!=null&&!H.cQ(a,b))H.a1(H.aa(a,H.bS(b)))
return a},
ex:function(a){var z,y
z=J.C(a)
if(!!z.$isp){y=H.cS(z)
if(y!=null)return H.bS(y)
return"Closure"}return H.bg(a)},
lU:function(a){throw H.f(new P.hv(H.w(a)))},
eH:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
at:function(a){if(a==null)return
return a.$ti},
ol:function(a,b,c){return H.b4(a["$as"+H.d(c)],H.at(b))},
b2:function(a,b,c,d){var z
H.w(c)
H.T(d)
z=H.b4(a["$as"+H.d(c)],H.at(b))
return z==null?null:z[d]},
cT:function(a,b,c){var z
H.w(b)
H.T(c)
z=H.b4(a["$as"+H.d(b)],H.at(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.T(b)
z=H.at(a)
return z==null?null:z[b]},
bS:function(a){return H.aO(a,null)},
aO:function(a,b){var z,y
H.t(b,"$isa",[P.i],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aR(a[0].builtin$cls)+H.ca(a,1,b)
if(typeof a=="function")return H.aR(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.T(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.d(b[y])}if('func' in a)return H.la(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
la:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(r<0)return H.h(b,r)
t=C.h.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.e)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lo(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ca:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.i],"$asa")
if(a==null)return""
z=new P.cJ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}return"<"+z.k(0)+">"},
ls:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isp){y=H.cS(z)
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
H.bQ(c)
H.w(d)
if(a==null)return!1
z=H.at(a)
y=J.C(a)
if(y[b]==null)return!1
return H.eA(H.b4(y[d],z),null,c,null)},
bT:function(a,b,c,d){H.w(b)
H.bQ(c)
H.w(d)
if(a==null)return a
if(H.b1(a,b,c,d))return a
throw H.f(H.dp(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.ca(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.w(b)
H.bQ(c)
H.w(d)
if(a==null)return a
if(H.b1(a,b,c,d))return a
throw H.f(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.ca(c,0,null),init.mangledGlobalNames)))},
eA:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a3(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a3(a[y],b,c[y],d))return!1
return!0},
oi:function(a,b,c){return a.apply(b,H.b4(J.C(b)["$as"+H.d(c)],H.at(b)))},
eJ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="e"||a.builtin$cls==="G"||a===-1||a===-2||H.eJ(z)}return!1},
cQ:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="e"||b.builtin$cls==="G"||b===-1||b===-2||H.eJ(b)
if(b==null||b===-1||b.builtin$cls==="e"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cQ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bN(a,b)}z=J.C(a).constructor
y=H.at(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a3(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cQ(a,b))throw H.f(H.aa(a,H.bS(b)))
return a},
a3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="e"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="e"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a3(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.et(a,b,c,d)
if('func' in a)return c.builtin$cls==="bz"
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
return H.eA(H.b4(r,z),b,u,d)},
et:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lO(m,b,l,d)},
lO:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a3(c[w],d,a[w],b))return!1}return!0},
oj:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
lI:function(a){var z,y,x,w,v,u
z=H.w($.eI.$1(a))
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.ez.$2(a,z))
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ck(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cj[z]=x
return x}if(v==="-"){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eM(a,x)
if(v==="*")throw H.f(P.e7(z))
if(init.leafTags[z]===true){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eM(a,x)},
eM:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cV(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck:function(a){return J.cV(a,!1,null,!!a.$isy)},
lN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ck(z)
else return J.cV(z,c,null,null)},
lB:function(){if(!0===$.cU)return
$.cU=!0
H.lC()},
lC:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.cj=Object.create(null)
H.lx()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eN.$1(v)
if(u!=null){t=H.lN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lx:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.b0(C.L,H.b0(C.Q,H.b0(C.y,H.b0(C.y,H.b0(C.P,H.b0(C.M,H.b0(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eI=new H.ly(v)
$.ez=new H.lz(u)
$.eN=new H.lA(t)},
b0:function(a,b){return a(b)||b},
lT:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iX:{"^":"e;a,b,c,d,e,f,r,0x",p:{
iY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cA(z)
y=z[0]
x=z[1]
return new H.iX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jq:{"^":"e;a,b,c,d,e,f",
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
return new H.jq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e3:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iD:{"^":"V;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dR:function(a,b){return new H.iD(a,b==null?null:b.method)}}},
i6:{"^":"V;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i6(a,y,z?null:b.receiver)}}},
jw:{"^":"V;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lV:{"^":"p:5;a",
$1:function(a){if(!!J.C(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eo:{"^":"e;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa9:1},
p:{"^":"e;",
k:function(a){return"Closure '"+H.bg(this).trim()+"'"},
gcE:function(){return this},
$isbz:1,
gcE:function(){return this}},
dZ:{"^":"p;"},
je:{"^":"dZ;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aR(z)+"'"}},
ct:{"^":"dZ;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ct))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.bf(this.a)
else y=typeof z!=="object"?J.aw(z):H.bf(z)
return(y^H.bf(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
p:{
cu:function(a){return a.a},
dn:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.ct("self","target","receiver","name")
y=J.cA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jr:{"^":"V;a",
k:function(a){return this.a},
p:{
aa:function(a,b){return new H.jr("TypeError: "+H.d(P.c0(a))+": type '"+H.ex(a)+"' is not a subtype of type '"+b+"'")}}},
hj:{"^":"V;a",
k:function(a){return this.a},
p:{
dp:function(a,b){return new H.hj("CastError: "+H.d(P.c0(a))+": type '"+H.ex(a)+"' is not a subtype of type '"+b+"'")}}},
j2:{"^":"V;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
j3:function(a){return new H.j2(a)}}},
e4:{"^":"e;a,0b,0c,0d",
gar:function(){var z=this.b
if(z==null){z=H.bS(this.a)
this.b=z}return z},
k:function(a){return this.gar()},
gB:function(a){var z=this.d
if(z==null){z=C.h.gB(this.gar())
this.d=z}return z},
G:function(a,b){if(b==null)return!1
return b instanceof H.e4&&this.gar()===b.gar()}},
dI:{"^":"dL;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gL:function(a){return new H.ah(this,[H.o(this,0)])},
gef:function(a){var z=H.o(this,0)
return H.ii(new H.ah(this,[z]),new H.i5(this),z,H.o(this,1))},
au:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.de(z,b)}else{y=this.e_(b)
return y}},
e_:function(a){var z=this.d
if(z==null)return!1
return this.aU(this.aN(z,J.aw(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ap(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ap(w,b)
x=y==null?null:y.b
return x}else return this.e0(b)},
e0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aN(z,J.aw(a)&0x3ffffff)
x=this.aU(y,a)
if(x<0)return
return y[x].b},
j:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aP()
this.b=z}this.bm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aP()
this.c=y}this.bm(y,b,c)}else{x=this.d
if(x==null){x=this.aP()
this.d=x}w=J.aw(b)&0x3ffffff
v=this.aN(x,w)
if(v==null)this.aS(x,w,[this.aG(b,c)])
else{u=this.aU(v,b)
if(u>=0)v[u].b=c
else v.push(this.aG(b,c))}}},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.aU(this))
z=z.c}},
bm:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.ap(a,b)
if(z==null)this.aS(a,b,this.aG(b,c))
else z.b=c},
bo:function(){this.r=this.r+1&67108863},
aG:function(a,b){var z,y
z=new H.ib(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bo()
return z},
aU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aS(a[y].a,b))return y
return-1},
k:function(a){return P.dM(this)},
ap:function(a,b){return a[b]},
aN:function(a,b){return a[b]},
aS:function(a,b,c){a[b]=c},
df:function(a,b){delete a[b]},
de:function(a,b){return this.ap(a,b)!=null},
aP:function(){var z=Object.create(null)
this.aS(z,"<non-identifier-key>",z)
this.df(z,"<non-identifier-key>")
return z},
$isdJ:1},
i5:{"^":"p;a",
$1:function(a){var z=this.a
return z.i(0,H.z(a,H.o(z,0)))},
$S:function(){var z=this.a
return{func:1,ret:H.o(z,1),args:[H.o(z,0)]}}},
ib:{"^":"e;a,b,0c,0d"},
ah:{"^":"dx;a,$ti",
gl:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.ic(z,z.r,this.$ti)
y.c=z.e
return y}},
ic:{"^":"e;a,b,0c,0d,$ti",
sbn:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aU(z))
else{z=this.c
if(z==null){this.sbn(null)
return!1}else{this.sbn(z.a)
this.c=this.c.c
return!0}}},
$isaA:1},
ly:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
lz:{"^":"p:15;a",
$2:function(a,b){return this.a(a,b)}},
lA:{"^":"p:16;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
lo:function(a){return J.i0(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c9:function(a){var z,y
if(!!J.C(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.j(z,y,a[y])
return z},
am:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.aQ(b,a))},
ix:{"^":"k;",$isjs:1,"%":"DataView;ArrayBufferView;cF|ei|ej|dP|ek|el|aC"},
cF:{"^":"ix;",
gl:function(a){return a.length},
$isx:1,
$asx:I.bo,
$isy:1,
$asy:I.bo},
dP:{"^":"ej;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
j:function(a,b,c){H.eD(c)
H.am(b,a,a.length)
a[b]=c},
$asc1:function(){return[P.a5]},
$asq:function(){return[P.a5]},
$ism:1,
$asm:function(){return[P.a5]},
$isa:1,
$asa:function(){return[P.a5]},
"%":"Float64Array"},
aC:{"^":"el;",
j:function(a,b,c){H.T(c)
H.am(b,a,a.length)
a[b]=c},
$asc1:function(){return[P.B]},
$asq:function(){return[P.B]},
$ism:1,
$asm:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
iw:{"^":"dP;",$isaq:1,"%":"Float32Array"},
mZ:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Int16Array"},
n_:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
$ishY:1,
"%":"Int32Array"},
n0:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Int8Array"},
n1:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
iy:{"^":"aC;",
i:function(a,b){H.am(b,a,a.length)
return a[b]},
$isnP:1,
"%":"Uint32Array"},
n2:{"^":"aC;",
gl:function(a){return a.length},
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
n3:{"^":"aC;",
gl:function(a){return a.length},
i:function(a,b){H.am(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ei:{"^":"cF+q;"},
ej:{"^":"ei+c1;"},
ek:{"^":"cF+q;"},
el:{"^":"ek+c1;"}}],["","",,P,{"^":"",
jG:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.li()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bn(new P.jI(z),1)).observe(y,{childList:true})
return new P.jH(z,y,x)}else if(self.setImmediate!=null)return P.lj()
return P.lk()},
o_:[function(a){self.scheduleImmediate(H.bn(new P.jJ(H.n(a,{func:1,ret:-1})),0))},"$1","li",4,0,4],
o0:[function(a){self.setImmediate(H.bn(new P.jK(H.n(a,{func:1,ret:-1})),0))},"$1","lj",4,0,4],
o1:[function(a){H.n(a,{func:1,ret:-1})
P.kT(0,a)},"$1","lk",4,0,4],
le:function(a,b){if(H.bN(a,{func:1,args:[P.e,P.a9]}))return H.n(a,{func:1,ret:null,args:[P.e,P.a9]})
if(H.bN(a,{func:1,args:[P.e]}))return H.n(a,{func:1,ret:null,args:[P.e]})
throw H.f(P.dk(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ld:function(){var z,y
for(;z=$.b_,z!=null;){$.bm=null
y=z.b
$.b_=y
if(y==null)$.bl=null
z.a.$0()}},
oe:[function(){$.cO=!0
try{P.ld()}finally{$.bm=null
$.cO=!1
if($.b_!=null)$.d0().$1(P.eB())}},"$0","eB",0,0,1],
ew:function(a){var z=new P.ea(H.n(a,{func:1,ret:-1}))
if($.b_==null){$.bl=z
$.b_=z
if(!$.cO)$.d0().$1(P.eB())}else{$.bl.b=z
$.bl=z}},
lh:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.ew(a)
$.bm=$.bl
return}y=new P.ea(a)
x=$.bm
if(x==null){y.b=z
$.bm=y
$.b_=y}else{y.b=x.b
x.b=y
$.bm=y
if(y.b==null)$.bl=y}},
lQ:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.L
if(C.f===y){P.cc(null,null,C.f,a)
return}y.toString
P.cc(null,null,y,H.n(y.bI(a),z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.lh(new P.lf(z,e))},
eu:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
ev:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
lg:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
cc:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bI(d):c.dI(d,-1)
P.ew(d)},
jI:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jH:{"^":"p:17;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jJ:{"^":"p:0;a",
$0:function(){this.a.$0()}},
jK:{"^":"p:0;a",
$0:function(){this.a.$0()}},
kS:{"^":"e;a,0b,c",
d9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bn(new P.kU(this,b),0),a)
else throw H.f(P.A("`setTimeout()` not found."))},
p:{
kT:function(a,b){var z=new P.kS(!0,0)
z.d9(a,b)
return z}}},
kU:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jN:{"^":"e;$ti"},
kN:{"^":"jN;a,$ti"},
aZ:{"^":"e;0a,b,c,d,e,$ti",
e2:function(a){if(this.c!==6)return!0
return this.b.b.aV(H.n(this.d,{func:1,ret:P.X,args:[P.e]}),a.a,P.X,P.e)},
dZ:function(a){var z,y,x,w
z=this.e
y=P.e
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bN(z,{func:1,args:[P.e,P.a9]}))return H.cf(w.e6(z,a.a,a.b,null,y,P.a9),x)
else return H.cf(w.aV(H.n(z,{func:1,args:[P.e]}),a.a,null,y),x)}},
al:{"^":"e;bB:a<,b,0du:c<,$ti",
cm:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.f){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.le(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.al(0,$.L,[c])
w=b==null?1:3
this.bq(new P.aZ(x,w,a,b,[z,c]))
return x},
cl:function(a,b){return this.cm(a,null,b)},
bq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.j(this.c,"$isal")
z=y.a
if(z<4){y.bq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.n(new P.k1(this,a),{func:1,ret:-1}))}},
by:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isal")
y=u.a
if(y<4){u.by(a)
return}this.a=y
this.c=u.c}z.a=this.aq(a)
y=this.b
y.toString
P.cc(null,null,y,H.n(new P.k6(z,this),{func:1,ret:-1}))}},
aR:function(){var z=H.j(this.c,"$isaZ")
this.c=null
return this.aq(z)},
aq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aI:function(a){var z,y,x
z=H.o(this,0)
H.cf(a,{futureOr:1,type:z})
y=this.$ti
if(H.b1(a,"$isb9",y,"$asb9"))if(H.b1(a,"$isal",y,null))P.ed(a,this)
else P.k2(a,this)
else{x=this.aR()
H.z(a,z)
this.a=4
this.c=a
P.bk(this,x)}},
bs:function(a,b){var z
H.j(b,"$isa9")
z=this.aR()
this.a=8
this.c=new P.a2(a,b)
P.bk(this,z)},
$isb9:1,
p:{
k2:function(a,b){var z,y,x
b.a=1
try{a.cm(new P.k3(b),new P.k4(b),null)}catch(x){z=H.ad(x)
y=H.bq(x)
P.lQ(new P.k5(b,z,y))}},
ed:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isal")
if(z>=4){y=b.aR()
b.a=a.a
b.c=a.c
P.bk(b,y)}else{y=H.j(b.c,"$isaZ")
b.a=2
b.c=a
a.by(y)}},
bk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isa2")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bk(z.a,b)}y=z.a
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
P.cb(null,null,y,u,t)
return}o=$.L
if(o!=q)$.L=q
else o=null
y=b.c
if(y===8)new P.k9(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k8(x,b,r).$0()}else if((y&2)!==0)new P.k7(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.C(y).$isb9){if(y.a>=4){n=H.j(t.c,"$isaZ")
t.c=null
b=t.aq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ed(y,t)
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
k1:{"^":"p:0;a,b",
$0:function(){P.bk(this.a,this.b)}},
k6:{"^":"p:0;a,b",
$0:function(){P.bk(this.b,this.a.a)}},
k3:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aI(a)}},
k4:{"^":"p:18;a",
$2:function(a,b){H.j(b,"$isa9")
this.a.bs(a,b)},
$1:function(a){return this.$2(a,null)}},
k5:{"^":"p:0;a,b,c",
$0:function(){this.a.bs(this.b,this.c)}},
k9:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cg(H.n(w.d,{func:1}),null)}catch(v){y=H.ad(v)
x=H.bq(v)
if(this.d){w=H.j(this.a.a.c,"$isa2").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isa2")
else u.b=new P.a2(y,x)
u.a=!0
return}if(!!J.C(z).$isb9){if(z instanceof P.al&&z.gbB()>=4){if(z.gbB()===8){w=this.b
w.b=H.j(z.gdu(),"$isa2")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.cl(new P.ka(t),null)
w.a=!1}}},
ka:{"^":"p:19;a",
$1:function(a){return this.a}},
k8:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aV(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ad(t)
y=H.bq(t)
x=this.a
x.b=new P.a2(z,y)
x.a=!0}}},
k7:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isa2")
w=this.c
if(w.e2(z)&&w.e!=null){v=this.b
v.b=w.dZ(z)
v.a=!1}}catch(u){y=H.ad(u)
x=H.bq(u)
w=H.j(this.a.a.c,"$isa2")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a2(y,x)
s.a=!0}}},
ea:{"^":"e;a,0b"},
ji:{"^":"e;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.al(0,$.L,[P.B])
z.a=0
x=H.o(this,0)
w=H.n(new P.jk(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.jl(z,y),{func:1,ret:-1})
W.ac(this.a,this.b,w,!1,x)
return y}},
jk:{"^":"p;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.o(this.b,0)]}}},
jl:{"^":"p:0;a,b",
$0:function(){this.b.aI(this.a.a)}},
jj:{"^":"e;"},
a2:{"^":"e;a,b",
k:function(a){return H.d(this.a)},
$isV:1},
l_:{"^":"e;",$isnY:1},
lf:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dS()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.k(0)
throw x}},
kw:{"^":"l_;",
e7:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.f===$.L){a.$0()
return}P.eu(null,null,this,a,-1)}catch(x){z=H.ad(x)
y=H.bq(x)
P.cb(null,null,this,z,H.j(y,"$isa9"))}},
e8:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.f===$.L){a.$1(b)
return}P.ev(null,null,this,a,b,-1,c)}catch(x){z=H.ad(x)
y=H.bq(x)
P.cb(null,null,this,z,H.j(y,"$isa9"))}},
dI:function(a,b){return new P.ky(this,H.n(a,{func:1,ret:b}),b)},
bI:function(a){return new P.kx(this,H.n(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.kz(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
cg:function(a,b){H.n(a,{func:1,ret:b})
if($.L===C.f)return a.$0()
return P.eu(null,null,this,a,b)},
aV:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.L===C.f)return a.$1(b)
return P.ev(null,null,this,a,b,c,d)},
e6:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.L===C.f)return a.$2(b,c)
return P.lg(null,null,this,a,b,c,d,e,f)}},
ky:{"^":"p;a,b,c",
$0:function(){return this.a.cg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kx:{"^":"p:1;a,b",
$0:function(){return this.a.e7(this.b)}},
kz:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.e8(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cD:function(a,b,c){H.bQ(a)
return H.t(H.lp(a,new H.dI(0,0,[b,c])),"$isdJ",[b,c],"$asdJ")},
S:function(a,b){return new H.dI(0,0,[a,b])},
a8:function(a,b,c,d){return new P.kh(0,0,[d])},
hZ:function(a,b,c){var z,y
if(P.cP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.c([],[P.i])
y=$.br()
C.a.h(y,a)
try{P.lc(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dY(b,H.lH(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cz:function(a,b,c){var z,y,x
if(P.cP(a))return b+"..."+c
z=new P.cJ(b)
y=$.br()
C.a.h(y,a)
try{x=z
x.a=P.dY(x.ga3(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.ga3()+c
y=z.ga3()
return y.charCodeAt(0)==0?y:y},
cP:function(a){var z,y
for(z=0;y=$.br(),z<y.length;++z)if(a===y[z])return!0
return!1},
lc:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.i],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.d(z.gE(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.v()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.v();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
cE:function(a,b){var z,y,x
z=P.a8(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)z.h(0,H.z(a[x],b))
return z},
dM:function(a){var z,y,x
z={}
if(P.cP(a))return"{...}"
y=new P.cJ("")
try{C.a.h($.br(),a)
x=y
x.a=x.ga3()+"{"
z.a=!0
J.fO(a,new P.ig(z,y))
z=y
z.a=z.ga3()+"}"}finally{z=$.br()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.ga3()
return z.charCodeAt(0)==0?z:z},
kh:{"^":"kc;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){var z=new P.eh(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbM")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.j(y[b],"$isbM")!=null}else return this.dd(b)},
dd:function(a){var z=this.d
if(z==null)return!1
return this.aM(this.bw(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cL()
this.b=z}return this.bp(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cL()
this.c=y}return this.bp(y,b)}else return this.da(0,b)},
da:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cL()
this.d=z}y=this.bt(b)
x=z[y]
if(x==null)z[y]=[this.aQ(b)]
else{if(this.aM(x,b)>=0)return!1
x.push(this.aQ(b))}return!0},
cf:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.dn(0,b)},
dn:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bw(z,b)
x=this.aM(y,b)
if(x<0)return!1
this.bD(y.splice(x,1)[0])
return!0},
af:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aO()}},
bp:function(a,b){H.z(b,H.o(this,0))
if(H.j(a[b],"$isbM")!=null)return!1
a[b]=this.aQ(b)
return!0},
bz:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isbM")
if(z==null)return!1
this.bD(z)
delete a[b]
return!0},
aO:function(){this.r=this.r+1&67108863},
aQ:function(a){var z,y
z=new P.bM(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aO()
return z},
bD:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aO()},
bt:function(a){return J.aw(a)&0x3ffffff},
bw:function(a,b){return a[this.bt(b)]},
aM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aS(a[y].a,b))return y
return-1},
p:{
cL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bM:{"^":"e;a,0b,0c"},
eh:{"^":"e;a,b,0c,0d,$ti",
sbr:function(a){this.d=H.z(a,H.o(this,0))},
gE:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aU(z))
else{z=this.c
if(z==null){this.sbr(null)
return!1}else{this.sbr(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isaA:1,
p:{
ki:function(a,b,c){var z=new P.eh(a,b,[c])
z.c=a.e
return z}}},
kc:{"^":"j4;"},
id:{"^":"kj;",$ism:1,$isa:1},
q:{"^":"e;$ti",
gC:function(a){return new H.dK(a,this.gl(a),0,[H.b2(this,a,"q",0)])},
w:function(a,b){return this.i(a,b)},
dY:function(a,b,c,d){var z,y,x
H.z(b,d)
H.n(c,{func:1,ret:d,args:[d,H.b2(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.f(P.aU(a))}return y},
c6:function(a,b,c,d){var z
H.z(d,H.b2(this,a,"q",0))
P.iW(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.j(a,z,d)},
k:function(a){return P.cz(a,"[","]")}},
dL:{"^":"Z;"},
ig:{"^":"p:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
Z:{"^":"e;$ti",
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.b2(this,a,"Z",0),H.b2(this,a,"Z",1)]})
for(z=J.bX(this.gL(a));z.v();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.b5(this.gL(a))},
k:function(a){return P.dM(a)},
$isO:1},
j5:{"^":"e;$ti",
J:function(a,b){var z
for(z=J.bX(H.t(b,"$ism",this.$ti,"$asm"));z.v();)this.h(0,z.gE(z))},
k:function(a){return P.cz(this,"{","}")},
$ism:1,
$isnl:1},
j4:{"^":"j5;"},
kj:{"^":"e+q;"}}],["","",,P,{"^":"",
ln:function(a,b){var z=H.iS(a)
if(z!=null)return z
throw H.f(new P.hO("Invalid double",a,null))},
hJ:function(a){if(a instanceof H.p)return a.k(0)
return"Instance of '"+H.bg(a)+"'"},
c0:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bt(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hJ(a)},
dB:function(a){return new P.jZ(a)},
a6:function(a){H.bR(H.d(a))},
X:{"^":"e;"},
"+bool":0,
bu:{"^":"e;a,b",
G:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a&&!0},
T:function(a,b){return C.d.T(this.a,H.j(b,"$isbu").a)},
gB:function(a){var z=this.a
return(z^C.d.bA(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.hx(H.iR(this))
y=P.bv(H.iP(this))
x=P.bv(H.iL(this))
w=P.bv(H.iM(this))
v=P.bv(H.iO(this))
u=P.bv(H.iQ(this))
t=P.hy(H.iN(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isa0:1,
$asa0:function(){return[P.bu]},
p:{
hx:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hy:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bv:function(a){if(a>=10)return""+a
return"0"+a}}},
a5:{"^":"H;"},
"+double":0,
b7:{"^":"e;a",
a0:function(a,b){return C.d.a0(this.a,H.j(b,"$isb7").a)},
G:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.d.T(this.a,H.j(b,"$isb7").a)},
k:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.b7(0-y).k(0)
x=z.$1(C.d.Z(y,6e7)%60)
w=z.$1(C.d.Z(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.d.Z(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isa0:1,
$asa0:function(){return[P.b7]},
p:{
dw:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"e;"},
dS:{"^":"V;",
k:function(a){return"Throw of null."}},
aT:{"^":"V;a,b,c,d",
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaK()+y+x
if(!this.a)return w
v=this.gaJ()
u=P.c0(this.b)
return w+v+": "+H.d(u)},
p:{
dk:function(a,b,c){return new P.aT(!0,a,b,c)}}},
dT:{"^":"aT;e,f,a,b,c,d",
gaK:function(){return"RangeError"},
gaJ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
c5:function(a,b,c){return new P.dT(null,null,!0,a,b,"Value not in range")},
bh:function(a,b,c,d,e){return new P.dT(b,c,!0,a,d,"Invalid value")},
iW:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.bh(a,0,c,"start",f))
if(a>b||b>c)throw H.f(P.bh(b,a,c,"end",f))
return b}}},
hX:{"^":"aT;e,l:f>,a,b,c,d",
gaK:function(){return"RangeError"},
gaJ:function(){var z,y
z=H.T(this.b)
if(typeof z!=="number")return z.ai()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
I:function(a,b,c,d,e){var z=H.T(e==null?J.b5(b):e)
return new P.hX(b,z,!0,a,c,"Index out of range")}}},
jx:{"^":"V;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jx(a)}}},
jv:{"^":"V;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
e7:function(a){return new P.jv(a)}}},
cH:{"^":"V;a",
k:function(a){return"Bad state: "+this.a},
p:{
cI:function(a){return new P.cH(a)}}},
hp:{"^":"V;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.c0(z))+"."},
p:{
aU:function(a){return new P.hp(a)}}},
dX:{"^":"e;",
k:function(a){return"Stack Overflow"},
$isV:1},
hv:{"^":"V;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jZ:{"^":"e;a",
k:function(a){return"Exception: "+this.a}},
hO:{"^":"e;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.bb(x,0,75)+"...":x
return y+"\n"+w}else return y}},
bz:{"^":"e;"},
B:{"^":"H;"},
"+int":0,
m:{"^":"e;$ti",
aW:["cO",function(a,b){var z=H.cT(this,"m",0)
return new H.e8(this,H.n(b,{func:1,ret:P.X,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gC(this)
for(y=0;z.v();)++y
return y},
ga2:function(a){var z,y
z=this.gC(this)
if(!z.v())throw H.f(H.dE())
y=z.gE(z)
if(z.v())throw H.f(H.i_())
return y},
w:function(a,b){var z,y,x
if(b<0)H.a1(P.bh(b,0,null,"index",null))
for(z=this.gC(this),y=0;z.v();){x=z.gE(z)
if(b===y)return x;++y}throw H.f(P.I(b,this,"index",null,y))},
k:function(a){return P.hZ(this,"(",")")}},
aA:{"^":"e;$ti"},
a:{"^":"e;$ti",$ism:1},
"+List":0,
O:{"^":"e;$ti"},
G:{"^":"e;",
gB:function(a){return P.e.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"e;",$isa0:1,
$asa0:function(){return[P.H]}},
"+num":0,
e:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.bf(this)},
k:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.k(this)}},
a9:{"^":"e;"},
i:{"^":"e;",$isa0:1,
$asa0:function(){return[P.i]},
$isiH:1},
"+String":0,
cJ:{"^":"e;a3:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dY:function(a,b,c){var z=J.bX(b)
if(!z.v())return a
if(c.length===0){do a+=H.d(z.gE(z))
while(z.v())}else{a+=H.d(z.gE(z))
for(;z.v();)a=a+c+H.d(z.gE(z))}return a}}}}],["","",,W,{"^":"",
hH:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).U(z,a,b,c)
y.toString
z=W.v
z=new H.e8(new W.ab(y),H.n(new W.hI(),{func:1,ret:P.X,args:[z]}),[z])
return H.j(z.ga2(z),"$isU")},
dA:function(a){H.j(a,"$isP")
return"wheel"},
b8:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fR(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ad(x)}return z},
jW:function(a,b){return document.createElement(a)},
c8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eg:function(a,b,c,d){var z,y
z=W.c8(W.c8(W.c8(W.c8(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
cM:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jQ(a)
if(!!J.C(z).$isP)return z
return}else return H.j(a,"$isP")},
ey:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.f)return a
return z.dJ(a,b)},
Q:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lW:{"^":"k;0l:length=","%":"AccessibleNodeList"},
hb:{"^":"Q;",
k:function(a){return String(a)},
$ishb:1,
"%":"HTMLAnchorElement"},
lX:{"^":"Q;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
dl:{"^":"Q;",$isdl:1,"%":"HTMLBaseElement"},
hg:{"^":"k;","%":";Blob"},
bZ:{"^":"Q;",$isbZ:1,"%":"HTMLBodyElement"},
cv:{"^":"Q;0n:height=,0m:width=",
cF:function(a,b,c){var z=this.di(a,b,P.ll(c,null))
return z},
di:function(a,b,c){return a.getContext(b,c)},
$iscv:1,
"%":"HTMLCanvasElement"},
m1:{"^":"k;",
ay:function(a){return P.a4(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
m2:{"^":"v;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hq:{"^":"cw;",$ishq:1,"%":"CSSNumericValue|CSSUnitValue"},
m9:{"^":"ht;0l:length=","%":"CSSPerspective"},
ax:{"^":"k;",$isax:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hr:{"^":"jO;0l:length=",
b0:function(a,b){var z=this.dj(a,this.aH(a,b))
return z==null?"":z},
aH:function(a,b){var z,y
z=$.eX()
y=z[b]
if(typeof y==="string")return y
y=this.dA(a,b)
z[b]=y
return y},
dA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hz()+b
if(z in a)return z
return b},
dj:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hs:{"^":"e;",
gn:function(a){return this.b0(a,"height")},
gm:function(a){return this.b0(a,"width")}},
cw:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ht:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mb:{"^":"cw;0l:length=","%":"CSSTransformValue"},
mc:{"^":"cw;0l:length=","%":"CSSUnparsedValue"},
me:{"^":"k;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hA:{"^":"Q;","%":"HTMLDivElement"},
hB:{"^":"v;",
dD:function(a,b){return a.adoptNode(b)},
bu:function(a,b){return a.createEvent(b)},
aX:function(a,b){return a.getElementsByTagName(b)},
cG:function(a,b){return a.getElementById(b)},
e4:function(a,b){return a.querySelector(b)},
gcc:function(a){return new W.bK(a,"mousedown",!1,[W.W])},
gax:function(a){return new W.bK(a,"mousemove",!1,[W.W])},
gcd:function(a){return new W.bK(a,"mouseup",!1,[W.W])},
gce:function(a){return new W.bK(a,H.w(W.dA(a)),!1,[W.aY])},
"%":"XMLDocument;Document"},
mf:{"^":"k;",
k:function(a){return String(a)},
"%":"DOMException"},
hC:{"^":"k;",
dR:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
mg:{"^":"jS;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.t(c,"$isa_",[P.H],"$asa_")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
hD:{"^":"k;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
G:function(a,b){var z
if(b==null)return!1
if(!H.b1(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.eg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa_:1,
$asa_:function(){return[P.H]},
"%":";DOMRectReadOnly"},
mh:{"^":"jU;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.w(c)
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
mi:{"^":"k;0l:length=","%":"DOMTokenList"},
U:{"^":"v;0e9:tagName=",
gdG:function(a){return new W.jV(a)},
k:function(a){return a.localName},
U:["aC",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dz
if(z==null){z=H.c([],[W.aj])
y=new W.dQ(z)
C.a.h(z,W.ee(null))
C.a.h(z,W.ep())
$.dz=y
d=y}else d=z
z=$.dy
if(z==null){z=new W.es(d)
$.dy=z
c=z}else{z.a=d
c=z}}if($.ao==null){z=document
y=z.implementation
y=(y&&C.I).dR(y,"")
$.ao=y
$.cx=y.createRange()
y=$.ao
y.toString
y=y.createElement("base")
H.j(y,"$isdl")
y.href=z.baseURI
z=$.ao.head;(z&&C.J).N(z,y)}z=$.ao
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.j(y,"$isbZ")}z=$.ao
if(!!this.$isbZ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ao.body;(z&&C.q).N(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.cx;(z&&C.B).cH(z,x)
z=$.cx
w=(z&&C.B).dP(z,b)}else{x.innerHTML=b
w=$.ao.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.N(w,y)}z=$.ao.body
if(x==null?z!=null:x!==z)J.de(x)
c.b5(w)
C.j.dD(document,w)
return w},function(a,b,c){return this.U(a,b,c,null)},"dQ",null,null,"gei",5,5,null],
cJ:function(a,b,c,d){a.textContent=null
this.N(a,this.U(a,b,c,d))},
b6:function(a,b){return this.cJ(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dq:function(a,b){return a.removeAttribute(b)},
gca:function(a){return new W.as(a,"change",!1,[W.R])},
gcb:function(a){return new W.as(a,"input",!1,[W.R])},
gcc:function(a){return new W.as(a,"mousedown",!1,[W.W])},
gax:function(a){return new W.as(a,"mousemove",!1,[W.W])},
gcd:function(a){return new W.as(a,"mouseup",!1,[W.W])},
gce:function(a){return new W.as(a,H.w(W.dA(a)),!1,[W.aY])},
$isU:1,
"%":";Element"},
hI:{"^":"p:20;",
$1:function(a){return!!J.C(H.j(a,"$isv")).$isU}},
mj:{"^":"Q;0n:height=,0m:width=","%":"HTMLEmbedElement"},
R:{"^":"k;",
gci:function(a){return W.cM(a.target)},
dk:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isR:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"k;",
dC:function(a,b,c,d){H.n(c,{func:1,args:[W.R]})
if(c!=null)this.dc(a,b,c,!1)},
dc:function(a,b,c,d){return a.addEventListener(b,H.bn(H.n(c,{func:1,args:[W.R]}),1),!1)},
c0:function(a,b){return a.dispatchEvent(b)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;em|en|eq|er"},
ay:{"^":"hg;",$isay:1,"%":"File"},
mB:{"^":"k0;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isay")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
mC:{"^":"P;0l:length=","%":"FileWriter"},
mF:{"^":"Q;0l:length=","%":"HTMLFormElement"},
az:{"^":"k;",$isaz:1,"%":"Gamepad"},
hS:{"^":"Q;","%":"HTMLHeadElement"},
mG:{"^":"k;0l:length=","%":"History"},
mH:{"^":"ke;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isv")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
hT:{"^":"hB;","%":"HTMLDocument"},
mI:{"^":"Q;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mL:{"^":"k;0n:height=,0m:width=","%":"ImageBitmap"},
mM:{"^":"k;0n:height=,0m:width=","%":"ImageData"},
mN:{"^":"Q;0n:height=,0m:width=","%":"HTMLImageElement"},
cy:{"^":"Q;0n:height=,0m:width=",$iscy:1,"%":"HTMLInputElement"},
ba:{"^":"e6;",$isba:1,"%":"KeyboardEvent"},
ie:{"^":"k;",
k:function(a){return String(a)},
$isie:1,
"%":"Location"},
il:{"^":"Q;","%":"HTMLAudioElement;HTMLMediaElement"},
mV:{"^":"k;0l:length=","%":"MediaList"},
mW:{"^":"kl;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.io(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"MIDIInputMap"},
io:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},
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
"%":"MIDIOutputMap"},
ip:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aB:{"^":"k;",$isaB:1,"%":"MimeType"},
mY:{"^":"ko;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaB")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W:{"^":"e6;",
gc9:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.be(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.C(W.cM(z)).$isU)throw H.f(P.A("offsetX is only supported on elements"))
y=H.j(W.cM(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.be(u,v,w),"$isbe",w,"$asbe")
if(typeof z!=="number")return z.ba()
if(typeof x!=="number")return x.ba()
return new P.be(C.t.cn(z-u),C.t.cn(x-v),w)}},
$isW:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"id;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.f(P.cI("No elements"))
if(y>1)throw H.f(P.cI("More than one element"))
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
if(b<0||b>=y.length)return H.h(y,b)
J.ft(z,c,y[b])},
gC:function(a){var z=this.a.childNodes
return new W.dC(z,z.length,-1,[H.b2(C.V,z,"u",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
$asq:function(){return[W.v]},
$asm:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"P;0e3:previousSibling=",
e5:function(a){var z=a.parentNode
if(z!=null)J.bU(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cN(a):z},
N:function(a,b){return a.appendChild(b)},
dr:function(a,b){return a.removeChild(b)},
ds:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iz:{"^":"kq;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isv")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
n6:{"^":"Q;0n:height=,0m:width=","%":"HTMLObjectElement"},
n8:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
n9:{"^":"k;0n:height=,0m:width=","%":"PaintSize"},
aE:{"^":"k;0l:length=",$isaE:1,"%":"Plugin"},
nb:{"^":"ku;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaE")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
nd:{"^":"W;0n:height=,0m:width=","%":"PointerEvent"},
iV:{"^":"k;",
dP:function(a,b){return a.createContextualFragment(b)},
cH:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ni:{"^":"kA;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.j1(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j1:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nj:{"^":"k;0n:height=,0m:width=","%":"Screen"},
nk:{"^":"Q;0l:length=","%":"HTMLSelectElement"},
aG:{"^":"P;",$isaG:1,"%":"SourceBuffer"},
nm:{"^":"en;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaG")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
nn:{"^":"kG;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaH")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
nq:{"^":"kJ;",
i:function(a,b){return this.bx(a,H.w(b))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=this.dm(a,z)
if(y==null)return
b.$2(y,this.bx(a,y))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new W.jh(z))
return z},
gl:function(a){return a.length},
bx:function(a,b){return a.getItem(b)},
dm:function(a,b){return a.key(b)},
$asZ:function(){return[P.i,P.i]},
$isO:1,
$asO:function(){return[P.i,P.i]},
"%":"Storage"},
jh:{"^":"p:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aK:{"^":"k;",$isaK:1,"%":"CSSStyleSheet|StyleSheet"},
jm:{"^":"Q;",
U:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
z=W.hH("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).J(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
nu:{"^":"Q;",
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
nv:{"^":"Q;",
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
e_:{"^":"Q;",$ise_:1,"%":"HTMLTemplateElement"},
nw:{"^":"k;0m:width=","%":"TextMetrics"},
aL:{"^":"P;",$isaL:1,"%":"TextTrack"},
aM:{"^":"P;",$isaM:1,"%":"TextTrackCue|VTTCue"},
nx:{"^":"kR;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaM")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
ny:{"^":"er;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaL")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
nB:{"^":"k;0l:length=","%":"TimeRanges"},
aN:{"^":"k;",$isaN:1,"%":"Touch"},
nC:{"^":"kW;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaN")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
nD:{"^":"k;0l:length=","%":"TrackDefaultList"},
e6:{"^":"R;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nR:{"^":"k;",
k:function(a){return String(a)},
"%":"URL"},
nU:{"^":"il;0n:height=,0m:width=","%":"HTMLVideoElement"},
nV:{"^":"P;0l:length=","%":"VideoTrackList"},
nW:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
nX:{"^":"k;0m:width=","%":"VTTRegion"},
aY:{"^":"W;",
gdT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.A("deltaY is not supported"))},
$isaY:1,
"%":"WheelEvent"},
jD:{"^":"P;",
gdF:function(a){var z,y,x
z=P.H
y=new P.al(0,$.L,[z])
x=H.n(new W.jE(new P.kN(y,[z])),{func:1,ret:-1,args:[P.H]})
this.dh(a)
this.dt(a,W.ey(x,z))
return y},
dt:function(a,b){return a.requestAnimationFrame(H.bn(H.n(b,{func:1,ret:-1,args:[P.H]}),1))},
dh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise9:1,
"%":"DOMWindow|Window"},
jE:{"^":"p:22;a",
$1:function(a){var z=this.a
a=H.cf(H.cW(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a1(P.cI("Future already completed"))
z.aI(a)}},
eb:{"^":"v;",$iseb:1,"%":"Attr"},
o2:{"^":"l1;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isax")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
o4:{"^":"hD;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
G:function(a,b){var z
if(b==null)return!1
if(!H.b1(b,"$isa_",[P.H],"$asa_"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.eg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o5:{"^":"l3;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaz")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
oa:{"^":"l5;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isv")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
ob:{"^":"l7;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaI")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
oc:{"^":"l9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.j(c,"$isaK")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
jL:{"^":"dL;dg:a<",
H:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.gL(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.D)(z),++v){u=z[v]
b.$2(u,w.a5(x,u))}},
gL:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.j(z[w],"$iseb")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asZ:function(){return[P.i,P.i]},
$asO:function(){return[P.i,P.i]}},
jV:{"^":"jL;a",
i:function(a,b){return J.cr(this.a,H.w(b))},
gl:function(a){return this.gL(this).length}},
bK:{"^":"ji;a,b,c,$ti"},
as:{"^":"bK;a,b,c,$ti"},
jX:{"^":"jj;a,b,c,d,e,$ti",p:{
ac:function(a,b,c,d,e){var z=W.ey(new W.jY(c),W.R)
if(z!=null&&!0)J.fu(a,b,z,!1)
return new W.jX(0,a,b,z,!1,[e])}}},
jY:{"^":"p:23;a",
$1:function(a){return this.a.$1(H.j(a,"$isR"))}},
bL:{"^":"e;a",
d7:function(a){var z,y
z=$.d1()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.S[y],W.lv())
for(y=0;y<12;++y)z.j(0,C.v[y],W.lw())}},
a4:function(a){return $.fe().A(0,W.b8(a))},
a_:function(a,b,c){var z,y,x
z=W.b8(a)
y=$.d1()
x=y.i(0,H.d(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.cd(x.$4(a,b,c,this))},
$isaj:1,
p:{
ee:function(a){var z,y
z=document.createElement("a")
y=new W.kB(z,window.location)
y=new W.bL(y)
y.d7(a)
return y},
o8:[function(a,b,c,d){H.j(a,"$isU")
H.w(b)
H.w(c)
H.j(d,"$isbL")
return!0},"$4","lv",16,0,14],
o9:[function(a,b,c,d){var z,y,x
H.j(a,"$isU")
H.w(b)
H.w(c)
z=H.j(d,"$isbL").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lw",16,0,14]}},
u:{"^":"e;$ti",
gC:function(a){return new W.dC(a,this.gl(a),-1,[H.b2(this,a,"u",0)])}},
dQ:{"^":"e;a",
a4:function(a){return C.a.bF(this.a,new W.iB(a))},
a_:function(a,b,c){return C.a.bF(this.a,new W.iA(a,b,c))},
$isaj:1},
iB:{"^":"p:9;a",
$1:function(a){return H.j(a,"$isaj").a4(this.a)}},
iA:{"^":"p:9;a,b,c",
$1:function(a){return H.j(a,"$isaj").a_(this.a,this.b,this.c)}},
kC:{"^":"e;",
d8:function(a,b,c,d){var z,y,x
this.a.J(0,c)
z=b.aW(0,new W.kD())
y=b.aW(0,new W.kE())
this.b.J(0,z)
x=this.c
x.J(0,C.U)
x.J(0,y)},
a4:function(a){return this.a.A(0,W.b8(a))},
a_:["cQ",function(a,b,c){var z,y
z=W.b8(a)
y=this.c
if(y.A(0,H.d(z)+"::"+b))return this.d.dE(c)
else if(y.A(0,"*::"+b))return this.d.dE(c)
else{y=this.b
if(y.A(0,H.d(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.d(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isaj:1},
kD:{"^":"p:10;",
$1:function(a){return!C.a.A(C.v,H.w(a))}},
kE:{"^":"p:10;",
$1:function(a){return C.a.A(C.v,H.w(a))}},
kO:{"^":"kC;e,a,b,c,d",
a_:function(a,b,c){if(this.cQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cr(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
ep:function(){var z,y,x,w,v
z=P.i
y=P.cE(C.u,z)
x=H.o(C.u,0)
w=H.n(new W.kP(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kO(y,P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),null)
y.d8(null,new H.ij(C.u,w,[x,z]),v,null)
return y}}},
kP:{"^":"p:24;",
$1:function(a){return"TEMPLATE::"+H.d(H.w(a))}},
kM:{"^":"e;",
a4:function(a){var z=J.C(a)
if(!!z.$isdU)return!1
z=!!z.$isK
if(z&&W.b8(a)==="foreignObject")return!1
if(z)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.h.aB(b,"on"))return!1
return this.a4(a)},
$isaj:1},
dC:{"^":"e;a,b,c,0d,$ti",
sbv:function(a){this.d=H.z(a,H.o(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbv(J.bs(this.a,z))
this.c=z
return!0}this.sbv(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isaA:1},
jP:{"^":"e;a",$isP:1,$ise9:1,p:{
jQ:function(a){if(a===window)return H.j(a,"$ise9")
else return new W.jP(a)}}},
aj:{"^":"e;"},
kB:{"^":"e;a,b",$isnQ:1},
es:{"^":"e;a",
b5:function(a){new W.kZ(this).$2(a,null)},
ac:function(a,b){if(b==null)J.de(a)
else J.bU(b,a)},
dw:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fP(a)
x=J.cr(y.gdg(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ad(t)}v="element unprintable"
try{v=J.bt(a)}catch(t){H.ad(t)}try{u=W.b8(a)
this.dv(H.j(a,"$isU"),b,z,v,u,H.j(y,"$isO"),H.w(x))}catch(t){if(H.ad(t) instanceof P.aT)throw t
else{this.ac(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.ac(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a4(a)){this.ac(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.ac(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gL(f)
y=H.c(z.slice(0),[H.o(z,0)])
for(x=f.gL(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.h(y,x)
v=y[x]
if(!this.a.a_(a,J.h1(v),w.a5(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.a5(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a5(z,v)
w.dq(z,v)}}if(!!J.C(a).$ise_)this.b5(a.content)},
$isn4:1},
kZ:{"^":"p:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dw(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ac(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fQ(z)}catch(w){H.ad(w)
v=H.j(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bU(u,v)}else J.bU(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.j(y,"$isv")}}},
jO:{"^":"k+hs;"},
jR:{"^":"k+q;"},
jS:{"^":"jR+u;"},
jT:{"^":"k+q;"},
jU:{"^":"jT+u;"},
k_:{"^":"k+q;"},
k0:{"^":"k_+u;"},
kd:{"^":"k+q;"},
ke:{"^":"kd+u;"},
kl:{"^":"k+Z;"},
km:{"^":"k+Z;"},
kn:{"^":"k+q;"},
ko:{"^":"kn+u;"},
kp:{"^":"k+q;"},
kq:{"^":"kp+u;"},
kt:{"^":"k+q;"},
ku:{"^":"kt+u;"},
kA:{"^":"k+Z;"},
em:{"^":"P+q;"},
en:{"^":"em+u;"},
kF:{"^":"k+q;"},
kG:{"^":"kF+u;"},
kJ:{"^":"k+Z;"},
kQ:{"^":"k+q;"},
kR:{"^":"kQ+u;"},
eq:{"^":"P+q;"},
er:{"^":"eq+u;"},
kV:{"^":"k+q;"},
kW:{"^":"kV+u;"},
l0:{"^":"k+q;"},
l1:{"^":"l0+u;"},
l2:{"^":"k+q;"},
l3:{"^":"l2+u;"},
l4:{"^":"k+q;"},
l5:{"^":"l4+u;"},
l6:{"^":"k+q;"},
l7:{"^":"l6+u;"},
l8:{"^":"k+q;"},
l9:{"^":"l8+u;"}}],["","",,P,{"^":"",
a4:function(a){var z,y,x,w,v
if(a==null)return
z=P.S(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.w(y[w])
z.j(0,v,a[v])}return z},
ll:function(a,b){var z={}
a.H(0,new P.lm(z))
return z},
dv:function(){var z=$.du
if(z==null){z=J.cn(window.navigator.userAgent,"Opera",0)
$.du=z}return z},
hz:function(){var z,y
z=$.dr
if(z!=null)return z
y=$.ds
if(y==null){y=J.cn(window.navigator.userAgent,"Firefox",0)
$.ds=y}if(y)z="-moz-"
else{y=$.dt
if(y==null){y=!P.dv()&&J.cn(window.navigator.userAgent,"Trident/",0)
$.dt=y}if(y)z="-ms-"
else z=P.dv()?"-o-":"-webkit-"}$.dr=z
return z},
lm:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",iE:{"^":"j0;",$isiE:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},j0:{"^":"P;","%":";IDBRequest"},nT:{"^":"R;0ci:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lS:function(a){return Math.sqrt(a)},
ef:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
be:{"^":"e;M:a>,K:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
G:function(a,b){if(b==null)return!1
return H.b1(b,"$isbe",[P.H],null)&&this.a==J.bY(b)&&this.b==b.gK(b)},
gB:function(a){var z,y,x
z=J.aw(this.a)
y=J.aw(this.b)
y=P.ef(P.ef(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kv:{"^":"e;"},
a_:{"^":"kv;$ti"}}],["","",,P,{"^":"",hc:{"^":"k;",$ishc:1,"%":"SVGAnimatedLength"},ml:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},mm:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},mn:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},mo:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},mp:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},mq:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},mr:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},ms:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},mt:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},mu:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},mv:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},mw:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},mx:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},my:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},mz:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},mA:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mD:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},mE:{"^":"bC;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hQ:{"^":"bC;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bC:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mO:{"^":"bC;0n:height=,0m:width=","%":"SVGImageElement"},bb:{"^":"k;",$isbb:1,"%":"SVGLength"},mT:{"^":"kg;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.j(c,"$isbb")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bb]},
$ism:1,
$asm:function(){return[P.bb]},
$isa:1,
$asa:function(){return[P.bb]},
$asu:function(){return[P.bb]},
"%":"SVGLengthList"},mU:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},bd:{"^":"k;",$isbd:1,"%":"SVGNumber"},n5:{"^":"ks;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.j(c,"$isbd")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bd]},
$ism:1,
$asm:function(){return[P.bd]},
$isa:1,
$asa:function(){return[P.bd]},
$asu:function(){return[P.bd]},
"%":"SVGNumberList"},na:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},nc:{"^":"k;0l:length=","%":"SVGPointList"},ne:{"^":"k;0n:height=,0m:width=","%":"SVGRect"},nf:{"^":"hQ;0n:height=,0m:width=","%":"SVGRectElement"},dU:{"^":"K;",$isdU:1,"%":"SVGScriptElement"},nr:{"^":"kL;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.w(c)
throw H.f(P.A("Cannot assign element of immutable List."))},
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
C.a.h(z,W.ee(null))
C.a.h(z,W.ep())
C.a.h(z,new W.kM())
c=new W.es(new W.dQ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dQ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.ga2(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.N(v,x)
return v},
gca:function(a){return new W.as(a,"change",!1,[W.R])},
gcb:function(a){return new W.as(a,"input",!1,[W.R])},
gax:function(a){return new W.as(a,"mousemove",!1,[W.W])},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ns:{"^":"bC;0n:height=,0m:width=","%":"SVGSVGElement"},bi:{"^":"k;",$isbi:1,"%":"SVGTransform"},nE:{"^":"kY;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return this.W(a,b)},
j:function(a,b,c){H.j(c,"$isbi")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.bi]},
$ism:1,
$asm:function(){return[P.bi]},
$isa:1,
$asa:function(){return[P.bi]},
$asu:function(){return[P.bi]},
"%":"SVGTransformList"},nS:{"^":"bC;0n:height=,0m:width=","%":"SVGUseElement"},kf:{"^":"k+q;"},kg:{"^":"kf+u;"},kr:{"^":"k+q;"},ks:{"^":"kr+u;"},kK:{"^":"k+q;"},kL:{"^":"kK+u;"},kX:{"^":"k+q;"},kY:{"^":"kX+u;"}}],["","",,P,{"^":"",aq:{"^":"e;",$ism:1,
$asm:function(){return[P.a5]},
$isa:1,
$asa:function(){return[P.a5]},
$isjs:1}}],["","",,P,{"^":"",lY:{"^":"k;0l:length=","%":"AudioBuffer"},lZ:{"^":"jM;",
i:function(a,b){return P.a4(a.get(H.w(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a4(y.value[1]))}},
gL:function(a){var z=H.c([],[P.i])
this.H(a,new P.he(z))
return z},
gl:function(a){return a.size},
$asZ:function(){return[P.i,null]},
$isO:1,
$asO:function(){return[P.i,null]},
"%":"AudioParamMap"},he:{"^":"p:2;a",
$2:function(a,b){return C.a.h(this.a,a)}},m_:{"^":"P;0l:length=","%":"AudioTrackList"},hf:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n7:{"^":"hf;0l:length=","%":"OfflineAudioContext"},jM:{"^":"k+Z;"}}],["","",,P,{"^":"",hh:{"^":"k;",$ishh:1,"%":"WebGLBuffer"},hP:{"^":"k;",$ishP:1,"%":"WebGLFramebuffer"},iT:{"^":"k;",$isiT:1,"%":"WebGLProgram"},ng:{"^":"k;",
bE:function(a,b){return a.activeTexture(b)},
bG:function(a,b,c){return a.attachShader(b,c)},
bH:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindFramebuffer(b,c)},
bK:function(a,b,c){return a.bindTexture(b,c)},
bL:function(a,b){return a.blendEquation(b)},
bM:function(a,b,c){return a.blendFunc(b,c)},
bN:function(a,b,c,d){return a.bufferData(b,c,d)},
bO:function(a,b){return a.checkFramebufferStatus(b)},
bP:function(a,b){return a.clear(b)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bS:function(a,b){return a.compileShader(b)},
bT:function(a){return a.createBuffer()},
bU:function(a){return a.createFramebuffer()},
bV:function(a){return a.createProgram()},
bW:function(a,b){return a.createShader(b)},
bX:function(a){return a.createTexture()},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c1:function(a,b,c,d){return a.drawArrays(b,c,d)},
c2:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
c7:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay:function(a){return P.a4(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b1:function(a,b){return a.getShaderInfoLog(b)},
b2:function(a,b,c){return a.getShaderParameter(b,c)},
b3:function(a,b,c){return a.getUniformLocation(b,c)},
c8:function(a,b){return a.linkProgram(b)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c,d){return a.texParameterf(b,c,d)},
ck:function(a,b,c,d){return a.texParameteri(b,c,d)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c){return a.uniform1fv(b,c)},
cq:function(a,b,c){return a.uniform1i(b,c)},
cr:function(a,b,c){return a.uniform1iv(b,c)},
cs:function(a,b,c){return a.uniform2fv(b,c)},
ct:function(a,b,c){return a.uniform3fv(b,c)},
cu:function(a,b,c){return a.uniform4fv(b,c)},
cv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cz:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cC:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},nh:{"^":"k;",
dH:function(a,b){return a.beginTransformFeedback(b)},
dK:function(a,b){return a.bindVertexArray(b)},
dS:function(a){return a.createVertexArray()},
dU:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dV:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dW:function(a){return a.endTransformFeedback()},
ea:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
ed:function(a,b,c,d){this.dB(a,b,H.t(c,"$isa",[P.i],"$asa"),d)
return},
dB:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eg:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bE:function(a,b){return a.activeTexture(b)},
bG:function(a,b,c){return a.attachShader(b,c)},
bH:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindFramebuffer(b,c)},
bK:function(a,b,c){return a.bindTexture(b,c)},
bL:function(a,b){return a.blendEquation(b)},
bM:function(a,b,c){return a.blendFunc(b,c)},
bN:function(a,b,c,d){return a.bufferData(b,c,d)},
bO:function(a,b){return a.checkFramebufferStatus(b)},
bP:function(a,b){return a.clear(b)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bS:function(a,b){return a.compileShader(b)},
bT:function(a){return a.createBuffer()},
bU:function(a){return a.createFramebuffer()},
bV:function(a){return a.createProgram()},
bW:function(a,b){return a.createShader(b)},
bX:function(a){return a.createTexture()},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c1:function(a,b,c,d){return a.drawArrays(b,c,d)},
c2:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
c7:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ay:function(a){return P.a4(a.getContextAttributes())},
aY:function(a){return a.getError()},
aZ:function(a,b){return a.getProgramInfoLog(b)},
b_:function(a,b,c){return a.getProgramParameter(b,c)},
b1:function(a,b){return a.getShaderInfoLog(b)},
b2:function(a,b,c){return a.getShaderParameter(b,c)},
b3:function(a,b,c){return a.getUniformLocation(b,c)},
c8:function(a,b){return a.linkProgram(b)},
b8:function(a,b,c){return a.shaderSource(b,c)},
b9:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c,d){return a.texParameterf(b,c,d)},
ck:function(a,b,c,d){return a.texParameteri(b,c,d)},
co:function(a,b,c){return a.uniform1f(b,c)},
cp:function(a,b,c){return a.uniform1fv(b,c)},
cq:function(a,b,c){return a.uniform1i(b,c)},
cr:function(a,b,c){return a.uniform1iv(b,c)},
cs:function(a,b,c){return a.uniform2fv(b,c)},
ct:function(a,b,c){return a.uniform3fv(b,c)},
cu:function(a,b,c){return a.uniform4fv(b,c)},
cv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cz:function(a,b){return a.useProgram(b)},
cA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cC:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},j6:{"^":"k;",$isj6:1,"%":"WebGLShader"},jn:{"^":"k;",$isjn:1,"%":"WebGLTexture"},ju:{"^":"k;",$isju:1,"%":"WebGLUniformLocation"},jB:{"^":"k;",$isjB:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",no:{"^":"kI;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.I(b,a,null,null,null))
return P.a4(this.dl(a,b))},
j:function(a,b,c){H.j(c,"$isO")
throw H.f(P.A("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
dl:function(a,b){return a.item(b)},
$asq:function(){return[[P.O,,,]]},
$ism:1,
$asm:function(){return[[P.O,,,]]},
$isa:1,
$asa:function(){return[[P.O,,,]]},
$asu:function(){return[[P.O,,,]]},
"%":"SQLResultSetRowList"},kH:{"^":"k+q;"},kI:{"^":"kH+u;"}}],["","",,G,{"^":"",
jF:function(a){var z,y,x,w
z=H.c(a.split("\n"),[P.i])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.h(z,y)
C.a.j(z,y,w+H.d(z[y]))}return C.a.ag(z,"\n")},
ec:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bW(a,b)
z.b8(a,y,c)
z.bS(a,y)
x=H.cd(z.b2(a,y,35713))
if(x!=null&&!x){w=z.b1(a,y)
P.a6("E:Compilation failed:")
P.a6("E:"+G.jF(c))
P.a6("E:Failure:")
P.a6(C.h.I("E:",w))
throw H.f(w)}return y},
iC:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
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
by:function(a,b){var z,y,x
H.t(a,"$isa",[T.b],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.j(b,z,J.bY(a[y]))
if(y>=a.length)return H.h(a,y)
C.b.j(b,z+1,J.cq(a[y]))
z+=2
if(y>=a.length)return H.h(a,y)
x=J.dc(a[y])
if(z>=b.length)return H.h(b,z)
b[z]=x}return b},
hM:function(a,b){var z,y
H.t(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.j(b,z,J.bY(a[y]))
if(y>=a.length)return H.h(a,y)
C.b.j(b,z+1,J.cq(a[y]))}return b},
hN:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.aX],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.j(b,z,J.bY(a[y]))
if(y>=a.length)return H.h(a,y)
C.b.j(b,z+1,J.cq(a[y]))
x=z+2
if(y>=a.length)return H.h(a,y)
w=J.dc(a[y])
v=b.length
if(x>=v)return H.h(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.h(a,y)
w=J.fS(a[y])
if(z>=v)return H.h(b,z)
b[z]=w}return b},
hL:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.j(b,z,J.bs(a[y],0))
if(y>=a.length)return H.h(a,y)
C.o.j(b,z+1,J.bs(a[y],1))
if(y>=a.length)return H.h(a,y)
C.o.j(b,z+2,J.bs(a[y],2))
if(y>=a.length)return H.h(a,y)
C.o.j(b,z+3,J.bs(a[y],3))}return b},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ah(z,[H.o(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.B]],v=[P.a5],u=[T.aX],t=[T.b],s=[T.r];y.v();){r=y.d
if(!x.au(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.eF>0)H.bR("I: "+r)
continue}q=z.i(0,r)
switch($.ae().i(0,r).a){case"vec2":b.a7(r,G.hM(H.bT(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a7(r,G.by(H.bT(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a7(r,G.hN(H.bT(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a7(r,new Float32Array(H.c9(H.bT(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a7(r,G.hL(H.bT(q,"$isa",w,"$asa"),null),4)
break}}},
bB:function(a,b,c){var z=G.dO(a,b.d,4,b.e.x)
z.a8(G.by(c.d,null))
z.bd(c.cW())
G.kb(c,z)
return z},
aV:{"^":"e;"},
ar:{"^":"aV;d,a,b,c",
a9:function(a,b){this.d.j(0,a,b)},
aF:function(){return this.d},
k:function(a){var z,y,x,w
z=H.c(["{"+new H.e4(H.ls(this)).k(0)+"}["+this.a+"]"],[P.i])
for(y=this.d,x=new H.ah(y,[H.o(y,0)]),x=x.gC(x);x.v();){w=x.d
C.a.h(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.ag(z,"\n")}},
hi:{"^":"dW;"},
hk:{"^":"e;0a,b",
c5:function(a,b,c){J.fM(this.a,b)
if(c>0)J.h8(this.a,b,c)},
cB:function(a,b,c,d,e,f,g,h){J.cl(this.a,34962,b)
J.h9(this.a,c,d,e,!1,g,h)}},
dD:{"^":"e;a,b,c,d,e"},
Y:{"^":"e;as:a>,ad:b>,ae:c>",p:{
N:function(a,b,c){return new G.Y(a,b,c)}}},
ap:{"^":"e;as:a>,ad:b>,ae:c>,d"},
bA:{"^":"e;a,b,c,d,e",
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
cR:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.h(y,new G.ap(z,z+1,z+2,z+3))},
a8:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.h(y,v)}},
cS:function(a){var z,y,x,w,v
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
cT:function(a){var z,y,x,w,v
H.t(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.h(this.c,new G.ap(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.h(z,v)}},
cW:function(){var z,y,x,w,v,u,t,s,r
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
cY:function(a,b){var z,y,x,w,v,u,t
z=H.c([],[T.r])
this.e.j(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.h(z,new T.r(t))}},
cX:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.h(z,H.d(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.ag(z," ")}},
bc:{"^":"aV;"},
bH:{"^":"bc;x,y,z,Q,d,a,b,c",
aD:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.h(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.h(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.h(a,w)
a[w]=z
z=b+8
w=this.y.a
y=w[0]
if(z>=x)return H.h(a,z)
a[z]=y
y=b+9
z=w[1]
if(y>=x)return H.h(a,y)
a[y]=z
z=b+10
w=w[2]
if(z>=x)return H.h(a,z)
a[z]=w
w=b+12
z=this.z.a
y=z[0]
if(w>=x)return H.h(a,w)
a[w]=y
y=b+13
w=z[1]
if(y>=x)return H.h(a,y)
a[y]=w
w=b+14
z=z[2]
if(w>=x)return H.h(a,w)
a[w]=z
z=b+7
if(z>=x)return H.h(a,z)
a[z]=this.Q},
aE:function(){return new T.J(new Float32Array(16))},
k:function(a){return"PL: p:"+H.d(this.x)+"  r:"+this.Q}},
bw:{"^":"bc;x,y,z,Q,ch,cx,d,a,b,c",
aD:function(a,b){var z,y,x,w
z=b+4
y=this.x.a
x=y[0]
w=a.length
if(z>=w)return H.h(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.h(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.h(a,z)
a[z]=y
y=b+8
z=this.y.a
x=z[0]
if(y>=w)return H.h(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.h(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.h(a,y)
a[y]=z
z=b+12
y=this.z.a
x=y[0]
if(z>=w)return H.h(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.h(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.h(a,z)
a[z]=y},
aE:function(){var z,y,x,w,v,u,t
z=this.ch
y=this.Q
x=-y
w=y-x
z.b7()
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
y=this.x
x=y.a
t=x[0]===0&&x[2]===0?$.d3():$.d2()
x=this.cx
T.cY(x,new T.b(new Float32Array(3)),y,t)
z.aw(0,x)
return z},
k:function(a){return"DL: p:"+H.d(this.x)}},
aJ:{"^":"bc;x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,a,b,c",
aD:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.h(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.h(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.h(a,w)
a[w]=z
z=b+4
w=this.y.a
y=w[0]
if(z>=x)return H.h(a,z)
a[z]=y
y=b+5
z=w[1]
if(y>=x)return H.h(a,y)
a[y]=z
z=b+6
w=w[2]
if(z>=x)return H.h(a,z)
a[z]=w
w=b+8
z=this.z.a
y=z[0]
if(w>=x)return H.h(a,w)
a[w]=y
y=b+9
w=z[1]
if(y>=x)return H.h(a,y)
a[y]=w
w=b+10
z=z[2]
if(w>=x)return H.h(a,w)
a[w]=z
z=b+12
w=this.Q.a
y=w[0]
if(z>=x)return H.h(a,z)
a[z]=y
y=b+13
z=w[1]
if(y>=x)return H.h(a,y)
a[y]=z
z=b+14
w=w[2]
if(z>=x)return H.h(a,z)
a[z]=w
w=b+7
if(w>=x)return H.h(a,w)
a[w]=this.ch
w=b+11
z=Math.cos(H.eC(this.cx))
if(w>=x)return H.h(a,w)
a[w]=z
z=b+15
if(z>=x)return H.h(a,z)
a[z]=this.cy},
aE:function(){var z,y,x,w
z=this.y
y=z.a
x=y[0]===0&&y[2]===0?$.d3():$.d2()
y=this.fr
w=this.x
T.cY(y,w,z.I(0,w),x)
w=this.fx
z=this.cx
if(typeof z!=="number")return H.au(z)
T.eO(w,2.1*z,this.db,this.dx,this.dy)
w.aw(0,y)
return w},
k:function(a){return"SL: p:"+H.d(this.x)+"  d:"+H.d(this.y)+"  r:"+this.ch+"  a:"+H.d(this.cx)}},
hV:{"^":"ar;x,y,z,d,a,b,c",
aF:function(){var z,y,x
z=this.y
y=this.z
G.hW(z,y,this.x)
x=this.d
x.j(0,"uLightDescs",z)
x.j(0,"uLightTypes",y)
return x},
p:{
hW:function(a,b,c){var z,y,x,w,v
H.t(c,"$isa",[G.bc],"$asa")
C.b.c6(a,0,a.length,0)
C.b.c6(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.D)(c),++x){w=c[x]
if(w.c){w.aD(a,y*16)
v=w.d
if(y>=4)return H.h(b,y)
b[y]=v;++y}}}}},
e2:{"^":"e;a,b,c"},
e1:{"^":"e;a,b,c"},
ik:{"^":"ar;d,a,b,c",p:{
c3:function(a){var z=P.S(P.i,P.e)
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.eQ())
z.j(0,"cStencilFunc",$.f0())
return new G.ik(z,a,!1,!0)}}},
im:{"^":"aV;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saL:function(a){this.cx=H.t(a,"$isa",[P.B],"$asa")},
be:function(a,b,c){var z,y
C.h.ab(a,0)
H.j(b,"$isaq")
this.cy.j(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cl(z.a,34962,y)
J.d8(z.a,34962,b,35048)},
ao:function(a){this.ch=a
this.be("aPosition",a,3)},
bh:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a7:function(a,b,c){var z,y,x,w,v
z=J.d4(a,0)===105
if(z&&this.z===0)this.z=C.d.bc(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.co(x.a))
this.be(a,b,c)
w=$.ae().i(0,a)
if(w==null)throw H.f("Unknown canonical "+a)
v=this.x.i(0,a)
J.bV(x.a,this.e)
x.c5(0,v,z?1:0)
x.cB(0,y.i(0,a),v,w.bi(),5126,!1,0,0)},
a8:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.co(y.a))
this.ao(a)
x=$.ae().i(0,"aPosition")
if(x==null)throw H.f("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bV(y.a,this.e)
y.c5(0,w,0)
y.cB(0,z.i(0,"aPosition"),w,x.bi(),5126,!1,0,0)},
an:function(a){var z,y,x
H.t(a,"$isa",[P.B],"$asa")
z=this.ch.length
if(z<768){this.saL(new Uint8Array(H.c9(a)))
this.Q=5121}else if(z<196608){this.saL(new Uint16Array(H.c9(a)))
this.Q=5123}else{this.saL(new Uint32Array(H.c9(a)))
this.Q=5125}z=this.d
J.bV(z.a,this.e)
y=this.y
x=this.cx
J.cl(z.a,34963,y)
J.d8(z.a,34963,x,35048)},
bd:function(a){H.t(a,"$isa",[P.B],"$asa")
this.y=J.co(this.d.a)
this.an(a)},
k:function(a){var z,y,x,w
z=this.cx
y=H.c(["Faces:"+(z==null?0:z.length)],[P.i])
for(z=this.cy,x=new H.ah(z,[H.o(z,0)]),x=x.gC(x);x.v();){w=x.d
C.a.h(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.ag(y,"  ")},
p:{
dO:function(a,b,c,d){var z=P.i
return new G.im(b,J.fF(b.a),c,P.S(z,P.e),d,0,-1,P.S(z,P.aq),"meshdata:"+a,!1,!0)}}},
iI:{"^":"ar;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cU:function(a,b){var z
if(typeof b!=="number")return H.au(b)
z=a/b
if(this.z===z)return
this.z=z
this.bk()},
bk:function(){T.eO(this.db,this.y*3.141592653589793/180,this.z,this.Q,this.ch)},
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
q=x?t.gcD(t):1
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
bx:{"^":"e;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
j_:{"^":"aV;d,e,f,r,x,y,z,Q,0ch,a,b,c",
d0:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.dd(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.dd(w.a,v,t))}},
d2:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.c([],[P.i])
x=H.c([],[P.i])
for(y=new H.ah(y,[H.o(y,0)]),y=y.gC(y);y.v();){w=y.d
if(!z.au(0,w))C.a.h(x,w)}for(z=this.x,z=P.ki(z,z.r,H.o(z,0)),y=this.Q;z.v();){w=z.d
if(!y.A(0,w))C.a.h(x,w)}return x},
d5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.t(b,"$isO",[P.i,P.e],"$asO")
z=Date.now()
for(y=new H.ah(b,[H.o(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=0;y.v();){t=y.d
switch(J.d4(t,0)){case 117:if(w.au(0,t)){s=b.i(0,t)
if(v.au(0,t))H.bR("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.ae().i(0,t)
if(r==null)H.a1("unknown "+t)
q=w.i(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.T(s)
J.cs(x.a,q,s)}else if(!!J.C(s).$ishY)J.h6(x.a,q,s)
break
case"float":if(r.c===0){H.eD(s)
J.h4(x.a,q,s)}else if(!!J.C(s).$isaq)J.h5(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.M(s,"$isJ").a
J.dj(x.a,q,!1,t)}else if(!!J.C(s).$isaq)J.dj(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.M(s,"$isai").a
J.di(x.a,q,!1,t)}else if(!!J.C(s).$isaq)J.di(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.dh(p,q,H.M(s,"$isaX").a)
else J.dh(p,q,H.j(s,"$isaq"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.dg(p,q,H.M(s,"$isb").a)
else J.dg(p,q,H.j(s,"$isaq"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.df(p,q,H.M(s,"$isr").a)
else J.df(p,q,H.j(s,"$isaq"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.au(t)
J.d6(x.a,33984+t)
t=H.M(s,"$iscK").b
J.av(x.a,3553,t)
t=this.ch
J.cs(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.I()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.au(t)
J.d6(x.a,33984+t)
t=H.M(s,"$iscK").b
J.av(x.a,34067,t)
t=this.ch
J.cs(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.I()
this.ch=t+1
break
default:H.bR("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.i(0,t)
switch(t){case"cDepthTest":t=J.aS(s,!0)
p=x.a
if(t)J.bW(p,2929)
else J.cp(p,2929)
break
case"cStencilFunc":H.M(s,"$ise2")
t=s.a
p=x.a
if(t===1281)J.cp(p,2960)
else{J.bW(p,2960)
p=s.b
o=s.c
J.fZ(x.a,t,p,o)}break
case"cDepthWrite":H.cd(s)
J.fG(x.a,s)
break
case"cBlendEquation":H.M(s,"$ise1")
t=s.a
p=x.a
if(t===1281)J.cp(p,3042)
else{J.bW(p,3042)
p=s.b
o=s.c
J.fx(x.a,p,o)
J.fw(x.a,t)}break}++u
break}}n=P.dw(0,0,0,Date.now()-new P.bu(z,!1).a,0,0)
""+u
n.k(0)},
cV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.t(b,"$isa",[G.ar],"$asa")
H.t(c,"$isa",[G.bx],"$asa")
z=Date.now()
y=this.d
J.h7(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bo()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.D)(b),++w){v=b[w]
this.d5(v.a,v.aF())}x=this.Q
x.af(0)
for(u=a.cy,u=new H.ah(u,[H.o(u,0)]),u=u.gC(u);u.v();)x.h(0,u.d)
t=this.d2()
if(t.length!==0)P.a6("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(t)))
J.bV(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.bh()
r=a.Q
q=a.z
if(s)J.fv(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.fK(p,x,u,r,0,q)
else J.fJ(p,x,u,r,0)}else{r=y.a
if(q>1)J.fI(r,x,0,u,q)
else J.fH(r,x,0,u)}if(s)J.fN(y.a)
if(c!=null)C.a.h(c,new G.bx(this.a,a.z,a.bh(),x,P.dw(0,0,0,Date.now()-new P.bu(z,!1).a,0,0)))},
p:{
c6:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.i
y=P.a8(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.fD(b.a)
t=G.ec(b.a,35633,x)
J.d7(b.a,u,t)
s=G.ec(b.a,35632,w)
J.d7(b.a,u,s)
if(v.length>0)J.h2(b.a,u,v,35980)
J.fX(b.a,u)
if(!H.cd(J.fW(b.a,u,35714)))H.a1(J.fV(b.a,u))
z=new G.j_(b,c,d,u,P.cE(c.c,z),P.S(z,P.e),P.S(z,z),y,a,!1,!0)
z.d0(a,b,c,d)
return z}}},
E:{"^":"e;a,b,c",
bi:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
j7:{"^":"e;a,0b,c,d,e,f,r,x",
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
bj:function(a,b){var z=[P.i]
this.b=this.d6(!0,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
Y:function(a){return this.bj(a,null)},
d6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.i]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.c(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.D)(y),++u){t=y[u]
s=$.ae().i(0,t)
C.a.h(w,"layout (location="+H.d(v.i(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.h(w,"")
r=x?"in":"out"
if(x)C.a.h(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.ae().i(0,q)
C.a.h(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.ae().i(0,q)
C.a.h(w,r+" "+s.a+" "+H.d(q)+";")}C.a.h(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.ae().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.h(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.h(w,"")
if(c!=null)C.a.J(w,c)
C.a.h(w,"void main(void) {")
C.a.J(w,b)
C.a.h(w,"}")
return C.a.ag(w,"\n")},
p:{
aF:function(a){var z,y
z=P.i
y=[z]
return new G.j7(a,H.c([],y),H.c([],y),H.c([],y),H.c([],y),0,P.S(z,P.B))}}},
dW:{"^":"aV;",
a1:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
jo:{"^":"e;a,b,c,d,e,f,r",p:{
e0:function(){return new G.jo(!1,!1,!1,!0,1,9729,9729)}}},
cK:{"^":"e;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
jt:{"^":"cK;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"},
p:{
e5:function(a,b,c,d,e,f){var z,y
z=J.fE(a.a)
J.av(a.a,3553,z)
J.h0(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.h_(a.a,3553,34046,y)
y=f.r
J.a7(a.a,3553,10240,y)
y=f.f
J.a7(a.a,3553,10241,y)
if(f.b){J.a7(a.a,3553,10242,33071)
J.a7(a.a,3553,10243,33071)}if(f.c)J.a7(a.a,3553,34892,34894)
J.fU(a.a)
J.av(a.a,3553,null)
return new G.jt(c,d,e,b,z,3553,a,f)}}}}],["","",,R,{"^":"",
dV:function(a,b,c,d,e,f,g,h,i){return G.bB("cube",a,B.hu(!0,c,d,e,f,g,h,i))},
kk:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.j(W.jW("span",null),"$isU")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).aH(y,"float")
y.setProperty(x,"left","")
x=C.x.aH(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.n.N(z,v)}return z},
jy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.r.dX(y/c)
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
C.a.h(u,new T.b(o))}}a.ao(G.by(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.c(z,[P.B])
for(q=0;q<u.length;++q)C.a.j(n,q,q)
a.an(n)},
hR:function(a){var z,y,x
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
jA:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.b(new Float32Array(3))
z.t(c)
z.D(0)
y=b.I(0,z.az(d))
x=H.c([b,y],[T.b])
w=R.hR(c)
w.D(0)
w.O(0,Math.tan(H.eC(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.b(z)
u.t(w)
t=new Float32Array(4)
new T.iU(t).cI(c,v*2*3.141592653589793/8)
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
C.a.h(f,v)}a.ao(G.by(x,null))
a.an(f)},
jz:function(a,b,c){var z,y,x,w,v,u,t
z=H.c([],[T.b])
y=H.c([],[P.B])
for(x=$.cZ(),w=0;w<12;++w){v=x[w]
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
a.ao(G.by(z,null))
a.an(y)},
jf:{"^":"e;",
d1:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.f("no element provided")
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
jg:{"^":"jf;e,f,a,b,c,d",
d4:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.ec(y,2)+" fps"
C.n.b6(this.c,b)
x=C.d.Z(30*C.r.dL(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.j(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.n.N(z,w)},
d3:function(a){return this.d4(a,"")}},
j8:{"^":"e;a,0b,0c,0d,0e,0f,r,0x,0y"}}],["","",,A,{"^":"",
eE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(d,"$isa",[G.bx],"$asa")
H.t(e,"$isa",[G.ar],"$asa")
if(!b.c)return
z=b.dx
z.t(c)
y=b.d
z.aw(0,y)
x=b.ch
if(x!=null){b.cx
w=!0}else w=!1
if(w){H.d(b)
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
v.dO(new T.ai(u))
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
a.cV(b.cx,e,d)
if(0>=e.length)return H.h(e,-1)
e.pop()}for(y=b.cy,r=0;!1;++r){if(r>=0)return H.h(y,r)
A.eE(a,y[r],z,d,e)}},
aD:{"^":"dW;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
bI:{"^":"aV;d,e,f,a,b,c"},
iZ:{"^":"aV;d,e,f,r,x,y,z,Q,a,b,c",
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.t(a,"$isa",[G.bx],"$asa")
z=this.d
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=z.a
z=z.b
J.cm(t.a,36160,z)
J.ha(t.a,x,w,v,u)
if(y!==0)J.fz(t.a,y)
for(z=this.f,y=z.length,x=P.i,w=P.e,s=0;s<z.length;z.length===y||(0,H.D)(z),++s){r=z[s]
if(!r.c)continue
v=r.d
if(!v.c)continue
q=r.e
C.a.h(q,new G.ar(P.S(x,w),"transforms",!1,!0))
p=new T.J(new Float32Array(16))
p.F()
for(u=r.f,t=u.length,o=0;o<u.length;u.length===t||(0,H.D)(u),++o)A.eE(v,u[o],p,a,q)
if(0>=q.length)return H.h(q,-1)
q.pop()}},
bf:function(){return this.bg(null)},
p:{
cG:function(a,b,c){var z=new A.iZ(c,b,H.c([],[A.bI]),17664,0,0,0,0,a,!1,!0)
if(c==null)z.d=new G.dD(b,null,null,null,null)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
hu:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
a2=new G.bA(!1,H.c([],[G.Y]),H.c([],[G.ap]),H.c([],t),P.S(P.i,[P.a,,]))
a2.S("aTexUV")
a2.S("aNormal")
a2.cR(6)
a2.a8(a0)
a2.ak("aTexUV",a1)
for(a3=0;z=$.fd(),a3<6;++a3){a4=z[a3]
a2.al("aNormal",H.c([a4,a4,a4,a4],t))}return a2},
hw:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(o>=x.length)return H.h(x,o)
C.a.h(x,x[o])
t=s+3
if(t>=x.length)return H.h(x,t)
C.a.h(x,x[t])
if(o>=w.length)return H.h(w,o)
C.a.h(w,w[o])
if(t>=w.length)return H.h(w,t)
C.a.h(w,w[t])
n=x.length
if(o>=n)return H.h(x,o)
m=x[o]
if(t>=n)return H.h(x,t)
l=x[t]
t=s+4
if(t>=n)return H.h(x,t)
k=x[t]
t=new Float32Array(3)
j=new T.b(new Float32Array(3))
G.iC(m,l,k,new T.b(t),j)
C.a.h(v,j)
C.a.h(v,j)}u=H.c([],[G.Y])
t=H.c([],[G.ap])
i=new G.bA(!1,u,t,H.c([],y),P.S(P.i,[P.a,,]))
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
hU:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.Y]
y=H.c([],z)
x=[T.b]
w=H.c([],x)
C.a.J(y,$.f_())
C.a.J(w,$.cZ())
for(v=0;v<a;++v,y=u){u=H.c([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.D)(y),++s){r=y[s]
q=J.da(r)
if(q>=w.length)return H.h(w,q)
q=w[q]
p=new T.b(new Float32Array(3))
p.t(q)
q=r.gad(r)
if(q>=w.length)return H.h(w,q)
p.h(0,w[q])
p.O(0,0.5)
p.D(0)
q=r.gad(r)
if(q>=w.length)return H.h(w,q)
q=w[q]
o=new T.b(new Float32Array(3))
o.t(q)
q=r.gae(r)
if(q>=w.length)return H.h(w,q)
o.h(0,w[q])
o.O(0,0.5)
o.D(0)
q=r.gae(r)
if(q>=w.length)return H.h(w,q)
q=w[q]
n=new T.b(new Float32Array(3))
n.t(q)
q=r.gas(r)
if(q>=w.length)return H.h(w,q)
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
C.a.h(u,new G.Y(m,l,k))}}j=new G.bA(!1,H.c([],z),H.c([],[G.ap]),H.c([],x),P.S(P.i,[P.a,,]))
j.S("aTexUV")
j.S("aNormal")
for(z=y.length,t=[T.r],s=0;s<y.length;y.length===z||(0,H.D)(y),++s){r=y[s]
q=J.da(r)
if(q>=w.length)return H.h(w,q)
i=w[q]
q=r.gad(r)
if(q>=w.length)return H.h(w,q)
h=w[q]
q=r.gae(r)
if(q>=w.length)return H.h(w,q)
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
j.cS(H.c([q,f,b],x))
j.ak("aTexUV",H.c([new T.r(e),new T.r(d),new T.r(c)],t))}return j},
j9:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.jp(B.iG(new B.ja(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.c([],[G.Y])
v=H.c([],[G.ap])
u=[T.b]
t=H.c([],u)
s=new G.bA(!1,w,v,t,P.S(P.i,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.D)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.j(q[p],"$isb")
v.toString
o=new T.b(new Float32Array(3))
o.t(v)
C.a.h(t,o)}}s.cX(z,y,!1)
s.cY(z,y)
s.S("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.D)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.h(q,o)
o=H.j(q[o],"$isb")
n=H.t(v.i(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.b(new Float32Array(3))
t.t(o);(n&&C.a).h(n,t)}}return s},
jp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(n>=p)return H.h(a,n)
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
iG:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
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
ja:{"^":"p:26;a,b,c,d",
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
b.sR(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",i7:{"^":"e;a,b,c",
cZ:function(a){var z,y
a=document
z=W.ba
y={func:1,ret:-1,args:[z]}
W.ac(a,"keydown",H.n(new D.i9(this),y),!1,z)
W.ac(a,"keyup",H.n(new D.ia(this),y),!1,z)},
p:{
i8:function(a){var z=P.B
z=new D.i7(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z))
z.cZ(a)
return z}}},i9:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isba")
z=this.a
z.a.h(0,a.which)
z.b.h(0,a.which)}},ia:{"^":"p:11;a",
$1:function(a){var z
H.j(a,"$isba")
z=this.a
z.a.cf(0,a.which)
z.c.h(0,a.which)}},iq:{"^":"e;a,b,c,d,e,f,r,x",
d_:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gax(a)
x=H.o(y,0)
W.ac(y.a,y.b,H.n(new D.is(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gcc(a)
y=H.o(x,0)
W.ac(x.a,x.b,H.n(new D.it(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gcd(a)
x=H.o(y,0)
W.ac(y.a,y.b,H.n(new D.iu(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gce(a)
x=H.o(z,0)
W.ac(z.a,z.b,H.n(new D.iv(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
ir:function(a){var z=P.B
z=new D.iq(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),0,0,0,0,0)
z.d_(a)
return z}}},is:{"^":"p:3;a",
$1:function(a){var z,y
H.j(a,"$isW")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.T(y.gc9(a).a)
z.x=H.T(y.gc9(a).b)
z.d=a.movementX
z.e=a.movementY}},it:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isW")
a.preventDefault()
P.a6("BUTTON "+H.d(a.button))
z=this.a
z.a.h(0,a.button)
z.b.h(0,a.button)}},iu:{"^":"p:3;a",
$1:function(a){var z
H.j(a,"$isW")
a.preventDefault()
z=this.a
z.a.cf(0,a.button)
z.c.h(0,a.button)}},iv:{"^":"p:27;a",
$1:function(a){H.j(a,"$isaY")
a.preventDefault()
this.a.f=H.T(C.ab.gdT(a))}},iF:{"^":"hi;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bP:function(a){var z,y
z=C.b.dY(H.t(a,"$ism",[P.e],"$asm"),0,new A.lu(),P.B)
if(typeof z!=="number")return H.au(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lu:{"^":"p:28;",
$2:function(a,b){var z,y
H.T(a)
z=J.aw(b)
if(typeof a!=="number")return a.I()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",
cY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
b.toString
z=new Float32Array(3)
y=new T.b(z)
y.t(b)
y.a6(0,c)
y.D(0)
x=d.bY(y)
x.D(0)
w=y.bY(x)
w.D(0)
v=x.aT(b)
u=w.aT(b)
t=y.aT(b)
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
eO:function(a,b,c,d,e){var z,y,x
z=Math.tan(b*0.5)
y=d-e
a.b7()
x=a.a
x[0]=1/(z*c)
x[5]=1/z
x[10]=(e+d)/y
x[11]=-1
x[14]=2*d*e/y},
ai:{"^":"e;a",
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
if(b>=9)return H.h(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ai){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bP(this.a)},
V:function(a){var z,y,x
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
return new T.b(z)},
dO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
J:{"^":"e;a",
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
if(b>=16)return H.h(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bP(this.a)},
V:function(a){var z,y,x
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
return new T.aX(z)},
b7:function(){var z=this.a
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
c4:function(){return new T.J(new Float32Array(16))}}},
iU:{"^":"e;a",
cI:function(a,b){var z,y,x,w,v
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
if(b>=4)return H.h(z,b)
return z[b]},
k:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])}},
r:{"^":"e;a",
u:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bP(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.h(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gM:function(a){return this.a[0]},
gK:function(a){return this.a[1]}},
b:{"^":"e;a",
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
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bP(this.a)},
I:function(a,b){var z=new T.b(new Float32Array(3))
z.t(this)
z.h(0,b)
return z},
i:function(a,b){var z=this.a
if(b>=3)return H.h(z,b)
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
aT:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bY:function(a){var z,y,x,w,v,u,t,s
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
return z}}},
aX:{"^":"e;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aX){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bP(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.h(z,b)
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
gcD:function(a){return this.a[3]}}}],["","",,L,{"^":"",
hK:function(a){var z,y
P.a6(H.d(a)+" toggle ")
z=$.an()
$.cg=z.i(0,a)
z.i(0,a).c=!0
for(z=new H.ah(z,[H.o(z,0)]),z=z.gC(z);z.v();){y=z.d
if(y!=a)$.an().i(0,y).c=!1}},
nt:[function(a){a.stopPropagation()},"$1","lR",4,0,13],
eK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z={}
y=document
x=C.j.cG(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.jg(0,0,x,w,y.createElement("div"),R.kk("blue","gray",90,30))
u.d1(x,"blue","gray")
t=H.j(C.j.e4(y,"#webgl-canvas"),"$iscv")
s=new G.hk(t)
x=P.i
v=P.e
r=(t&&C.H).cF(t,"webgl2",P.cD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a1(P.dB('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.d(J.fT(r))
if($.eF>0)P.a6("I: "+q)
J.fA(r,0,0,0,1)
J.bW(r,2929)
r=new Float32Array(3)
q=D.i8(null)
p=D.ir(t)
o=new T.J(new Float32Array(16))
o.F()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.iF(25,10,0,0,new T.b(r),-0.02,q,p,o,new T.b(n),new T.b(m),new T.b(l),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
t.width=t.clientWidth
t.height=t.clientHeight
r=$.lG
q=$.lF
p=new T.J(new Float32Array(16))
p.F()
o=new T.J(new Float32Array(16))
o.F()
j=new G.iI(k,50,1,r,q,p,o,new T.J(new Float32Array(16)),P.S(x,v),"perspective",!1,!0)
j.bk()
r=H.c([],[G.bc])
q=new Float32Array(64)
i=new G.hV(r,q,new Float32Array(4),P.S(x,v),"illumination",!1,!0)
for(q=$.an(),q=q.gef(q),p=q.a,q=new H.dN(p.gC(p),q.b,[H.o(q,0),H.o(q,1)]);q.v();)C.a.h(r,q.a)
r=P.S(x,v)
q=new G.ar(r,"uniforms",!1,!0)
h=new R.j8(s,q)
p=new T.r(new Float32Array(2))
p.u(512,512)
h.y=p
g=G.e5(s,"frame::color",512,512,32856,$.f1())
o=G.e5(s,"frame::depth",512,512,33190,$.f2())
h.b=o
n=new G.dD(s,null,g,o,null)
m=J.fC(s.a)
n.b=m
J.cm(s.a,36160,m)
J.d9(s.a,36160,36064,3553,g.b,0)
J.d9(s.a,36160,36096,3553,o.b,0)
f=J.fy(s.a,36160)
if(f!==36053)H.a1("Error Incomplete Framebuffer: "+H.d(f))
J.cm(s.a,36160,null)
h.d=n
n=A.cG("compute-shadow",s,n)
n.z=512
n.Q=512
h.c=n
r.j(0,"uTexture",o)
r.j(0,"uCutOff",0)
r.j(0,"uCameraNear",0.5)
r.j(0,"uCameraFar",20)
r=G.c6("shadowCompute",s,$.fn(),$.fm())
m=[G.ar]
l=H.c([q],m)
e=[A.aD]
d=H.c([],e)
r=new A.bI(r,l,d,"shadowCompute",!1,!0)
h.e=r
C.a.h(n.f,r)
r=A.cG("visualize-shadow",s,null)
r.r&=4294950911
h.f=r
n=G.c6("shadowVisualize",s,$.fs(),$.fr())
q=H.c([q],m)
l=H.c([],e)
q=new A.bI(n,q,l,"shadowVisualize",!1,!0)
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
a5=new G.bA(!1,H.c([],[G.Y]),H.c([],[G.ap]),H.c([],a0),P.S(x,[P.a,,]))
a5.S("aTexUV")
a5.cT(a1)
a5.ak("aTexUV",a2)
a5.S("aNormal")
a5.al("aNormal",a4)
a6=G.bB("quad",n,a5)
n=$.eZ()
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
b0=A.cG("main",s,null)
x=G.c6("solid",s,$.fi(),$.fg())
p=H.c([j,i,a9],m)
o=H.c([],e)
v=b0.f
C.a.h(v,new A.bI(x,p,o,"solid",!1,!0))
p=G.c6("solid",s,$.fp(),$.fo())
m=H.c([j,i],m)
r=H.c([],e)
b1=new A.bI(p,m,r,"solid",!1,!0)
C.a.h(v,b1)
v=G.bB("icosahedron-3",x,B.hU(3,1,!0))
r=$.fk()
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
v=R.dV(x,!0,1,0,1,0,1,1,1)
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
v=G.bB("cylinder-32",x,B.hw(3,6,2,32,!0))
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
v=G.bB("torusknot",x,B.j9(!0,!0,1,2,3,1,128,16,0.4,!1))
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
x=R.dV(x,!0,1,0,1,0,30,0.1,30)
v=$.fj()
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
b3=G.dO("light",x.d,1,x.e.x)
b3.a8(new Float32Array(3))
b3.bd(H.c([0,0],[P.B]))
x=$.fh()
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
for(x=C.j.aX(y,"input"),v=x.length,b2=0;b2<x.length;x.length===v||(0,H.D)(x),++b2){r=H.j(x[b2],"$isU")
q=J.l(r)
p=q.gca(r)
o=H.o(p,0)
W.ac(p.a,p.b,H.n(new L.lK(),{func:1,ret:-1,args:[o]}),!1,o)
o=q.gcb(r)
p=H.o(o,0)
W.ac(o.a,o.b,H.n(new L.lL(),{func:1,ret:-1,args:[p]}),!1,p)
r=q.gax(r)
q=H.o(r,0)
W.ac(r.a,r.b,H.n(L.lR(),{func:1,ret:-1,args:[q]}),!1,q)}for(x=C.j.aX(y,"input"),v=x.length,b2=0;b2<x.length;x.length===v||(0,H.D)(x),++b2){r=H.j(x[b2],"$isU")
H.bR("initialize inputs "+H.d(r.id))
b4=C.j.bu(y,"Event")
J.d5(b4,"change",!0,!0)
q=J.l(r)
q.c0(r,b4)
b4=C.j.bu(y,"Event")
J.d5(b4,"input",!0,!0)
q.c0(r,b4)}y=new L.lM(t,j,b0,h)
y.$1(null)
x=W.R
W.ac(window,"resize",H.n(y,{func:1,ret:-1,args:[x]}),!1,x)
z.a=0
new L.lJ(z,k,b3,u,h,a9,b0).$1(0)},
lK:{"^":"p:12;",
$1:function(a){var z=H.M(J.db(a),"$iscy")
if(z.type==="radio")L.hK(z.id)}},
lL:{"^":"p:12;",
$1:function(a){var z,y,x,w
z=H.M(J.db(a),"$iscy")
if(z.type==="range"){y=z.id
x=P.ln(z.value,null)
if(J.fY(y,"pos")){P.a6("EventPositionChanged "+y+" "+H.d(x))
switch(y){case"posx":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").x.sM(0,x)
H.M(w.i(0,"idPoint"),"$isbH").x.sM(0,x)
break
case"posy":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").x.sK(0,x)
H.M(w.i(0,"idPoint"),"$isbH").x.sK(0,x)
break
case"posz":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").x.sR(0,x)
H.M(w.i(0,"idPoint"),"$isbH").x.sR(0,x)
break}}else if(C.h.aB(y,"dir")){P.a6("EventDirectionChanged "+y+" "+H.d(x))
switch(y){case"dirx":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").y.sM(0,x)
H.M(w.i(0,"idDirectional"),"$isbw").x.sM(0,x)
break
case"diry":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").y.sK(0,x)
H.M(w.i(0,"idDirectional"),"$isbw").x.sK(0,x)
break
case"dirz":w=$.an()
H.M(w.i(0,"idSpot"),"$isaJ").y.sR(0,x)
H.M(w.i(0,"idDirectional"),"$isbw").x.sR(0,x)
break}}else if(y==="cutoff")P.a6("set cutoff "+H.d(x))}}},
lM:{"^":"p:13;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.a6("size change "+H.d(y)+" "+H.d(x))
if(typeof y!=="number")return y.bc()
z=C.d.Z(y,2)
this.b.cU(z,x)
w=this.c
w.z=z
w.Q=x
w=this.d.f
w.x=z
w.y=0
w.z=z
w.Q=x}},
lJ:{"^":"p:29;a,b,c,d,e,f,r",
$1:function(b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
H.cW(b0)
if(typeof b0!=="number")return b0.ba()
z=this.a
z.a=b0+0
y=this.b
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b4()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b4()
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
if(typeof v!=="number")return v.b4()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.t.dM(y.id,-1.4707963267948965,1.4707963267948965)
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
T.cY(v,r,t,n)
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
a8=$.cg.aE()
x=this.c
a9=$.cg
y=J.C(a9)
if(!!y.$isbw){y=a9.Q
R.jy(x,y,y/4,a9.x)}else if(!!y.$isaJ)R.jA(x,a9.x,a9.y,a9.ch,a9.cx)
else if(!!y.$isbH)R.jz(x,a9.x,a9.Q)
y=this.d
C.n.b6(y.c,H.d($.cg))
x=this.e
x.r.d.j(0,"uLightPerspectiveViewMatrix",a8)
x.c.bf()
this.f.d.j(0,"uLightPerspectiveViewMatrix",a8)
this.r.bf()
w=x.a
v=x.b
J.av(w.a,3553,v.b)
J.a7(w.a,3553,34892,0)
J.a7(w.a,3553,10240,9728)
J.a7(w.a,3553,10241,9728)
J.av(w.a,3553,null)
x.f.bg(H.c([],[G.bx]))
x=x.b
J.av(w.a,3553,x.b)
J.a7(w.a,3553,34892,34894)
J.a7(w.a,3553,10240,9729)
J.a7(w.a,3553,10241,9729)
J.av(w.a,3553,null)
C.ac.gdF(window).cl(this,-1)
y.d3(z.a)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.bF.prototype
if(a==null)return J.i2.prototype
if(typeof a=="boolean")return J.i1.prototype
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.e)return a
return J.ci(a)}
J.bp=function(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.e)return a
return J.ci(a)}
J.eG=function(a){if(a==null)return a
if(a.constructor==Array)return J.bD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.e)return a
return J.ci(a)}
J.lq=function(a){if(typeof a=="number")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bj.prototype
return a}
J.lr=function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bj.prototype
return a}
J.ch=function(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bj.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.e)return a
return J.ci(a)}
J.bO=function(a){if(a==null)return a
if(!(a instanceof P.e))return J.bj.prototype
return a}
J.aS=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).G(a,b)}
J.af=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lq(a).a0(a,b)}
J.bs=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lE(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bp(a).i(a,b)}
J.d4=function(a,b){return J.ch(a).ab(a,b)}
J.d5=function(a,b,c,d){return J.l(a).dk(a,b,c,d)}
J.bU=function(a,b){return J.l(a).dr(a,b)}
J.ft=function(a,b,c){return J.l(a).ds(a,b,c)}
J.d6=function(a,b){return J.l(a).bE(a,b)}
J.fu=function(a,b,c,d){return J.l(a).dC(a,b,c,d)}
J.d7=function(a,b,c){return J.l(a).bG(a,b,c)}
J.fv=function(a,b){return J.l(a).dH(a,b)}
J.cl=function(a,b,c){return J.l(a).bH(a,b,c)}
J.cm=function(a,b,c){return J.l(a).bJ(a,b,c)}
J.av=function(a,b,c){return J.l(a).bK(a,b,c)}
J.bV=function(a,b){return J.l(a).dK(a,b)}
J.fw=function(a,b){return J.l(a).bL(a,b)}
J.fx=function(a,b,c){return J.l(a).bM(a,b,c)}
J.d8=function(a,b,c,d){return J.l(a).bN(a,b,c,d)}
J.fy=function(a,b){return J.l(a).bO(a,b)}
J.fz=function(a,b){return J.l(a).bP(a,b)}
J.fA=function(a,b,c,d,e){return J.l(a).bQ(a,b,c,d,e)}
J.fB=function(a,b){return J.lr(a).T(a,b)}
J.cn=function(a,b,c){return J.bp(a).dN(a,b,c)}
J.co=function(a){return J.l(a).bT(a)}
J.fC=function(a){return J.l(a).bU(a)}
J.fD=function(a){return J.l(a).bV(a)}
J.fE=function(a){return J.l(a).bX(a)}
J.fF=function(a){return J.l(a).dS(a)}
J.fG=function(a,b){return J.l(a).bZ(a,b)}
J.cp=function(a,b){return J.l(a).c_(a,b)}
J.fH=function(a,b,c,d){return J.l(a).c1(a,b,c,d)}
J.fI=function(a,b,c,d,e){return J.l(a).dU(a,b,c,d,e)}
J.fJ=function(a,b,c,d,e){return J.l(a).c2(a,b,c,d,e)}
J.fK=function(a,b,c,d,e,f){return J.l(a).dV(a,b,c,d,e,f)}
J.fL=function(a,b){return J.eG(a).w(a,b)}
J.bW=function(a,b){return J.l(a).c3(a,b)}
J.fM=function(a,b){return J.l(a).c4(a,b)}
J.fN=function(a){return J.l(a).dW(a)}
J.fO=function(a,b){return J.l(a).H(a,b)}
J.d9=function(a,b,c,d,e,f){return J.l(a).c7(a,b,c,d,e,f)}
J.da=function(a){return J.bO(a).gas(a)}
J.fP=function(a){return J.l(a).gdG(a)}
J.aw=function(a){return J.C(a).gB(a)}
J.bX=function(a){return J.eG(a).gC(a)}
J.b5=function(a){return J.bp(a).gl(a)}
J.fQ=function(a){return J.l(a).ge3(a)}
J.fR=function(a){return J.l(a).ge9(a)}
J.db=function(a){return J.l(a).gci(a)}
J.fS=function(a){return J.bO(a).gcD(a)}
J.bY=function(a){return J.bO(a).gM(a)}
J.cq=function(a){return J.bO(a).gK(a)}
J.dc=function(a){return J.bO(a).gR(a)}
J.cr=function(a,b){return J.l(a).a5(a,b)}
J.fT=function(a){return J.l(a).ay(a)}
J.fU=function(a){return J.l(a).aY(a)}
J.fV=function(a,b){return J.l(a).aZ(a,b)}
J.fW=function(a,b,c){return J.l(a).b_(a,b,c)}
J.dd=function(a,b,c){return J.l(a).b3(a,b,c)}
J.fX=function(a,b){return J.l(a).c8(a,b)}
J.de=function(a){return J.l(a).e5(a)}
J.fY=function(a,b){return J.ch(a).aB(a,b)}
J.fZ=function(a,b,c,d){return J.l(a).b9(a,b,c,d)}
J.h_=function(a,b,c,d){return J.l(a).cj(a,b,c,d)}
J.a7=function(a,b,c,d){return J.l(a).ck(a,b,c,d)}
J.h0=function(a,b,c,d,e,f){return J.l(a).ea(a,b,c,d,e,f)}
J.h1=function(a){return J.ch(a).eb(a)}
J.bt=function(a){return J.C(a).k(a)}
J.h2=function(a,b,c,d){return J.l(a).ed(a,b,c,d)}
J.h3=function(a){return J.ch(a).ee(a)}
J.h4=function(a,b,c){return J.l(a).co(a,b,c)}
J.h5=function(a,b,c){return J.l(a).cp(a,b,c)}
J.cs=function(a,b,c){return J.l(a).cq(a,b,c)}
J.h6=function(a,b,c){return J.l(a).cr(a,b,c)}
J.df=function(a,b,c){return J.l(a).cs(a,b,c)}
J.dg=function(a,b,c){return J.l(a).ct(a,b,c)}
J.dh=function(a,b,c){return J.l(a).cu(a,b,c)}
J.di=function(a,b,c,d){return J.l(a).cv(a,b,c,d)}
J.dj=function(a,b,c,d){return J.l(a).cw(a,b,c,d)}
J.h7=function(a,b){return J.l(a).cz(a,b)}
J.h8=function(a,b,c){return J.l(a).eg(a,b,c)}
J.h9=function(a,b,c,d,e,f,g){return J.l(a).cA(a,b,c,d,e,f,g)}
J.ha=function(a,b,c,d,e){return J.l(a).cC(a,b,c,d,e)}
I.b3=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bZ.prototype
C.H=W.cv.prototype
C.x=W.hr.prototype
C.n=W.hA.prototype
C.I=W.hC.prototype
C.J=W.hS.prototype
C.j=W.hT.prototype
C.K=J.k.prototype
C.a=J.bD.prototype
C.r=J.dF.prototype
C.d=J.dG.prototype
C.t=J.bE.prototype
C.h=J.bF.prototype
C.R=J.bG.prototype
C.b=H.iw.prototype
C.o=H.iy.prototype
C.V=W.iz.prototype
C.A=J.iJ.prototype
C.B=W.iV.prototype
C.G=W.jm.prototype
C.w=J.bj.prototype
C.ab=W.aY.prototype
C.ac=W.jD.prototype
C.f=new P.kw()
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
$.dm=null
$.cN=!1
$.eI=null
$.ez=null
$.eN=null
$.ce=null
$.cj=null
$.cU=null
$.b_=null
$.bl=null
$.bm=null
$.cO=!1
$.L=C.f
$.ao=null
$.cx=null
$.dz=null
$.dy=null
$.du=null
$.dt=null
$.ds=null
$.dr=null
$.eF=0
$.cg=null
$.lG=0.1
$.lF=50
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
I.$lazy(y,x,w)}})(["md","eY",function(){return H.eH("_$dart_dartClosure")},"mS","d_",function(){return H.eH("_$dart_js")},"nF","f3",function(){return H.ak(H.c7({
toString:function(){return"$receiver$"}}))},"nG","f4",function(){return H.ak(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"nH","f5",function(){return H.ak(H.c7(null))},"nI","f6",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nL","f9",function(){return H.ak(H.c7(void 0))},"nM","fa",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nK","f8",function(){return H.ak(H.e3(null))},"nJ","f7",function(){return H.ak(function(){try{null.$method$}catch(z){return z.message}}())},"nO","fc",function(){return H.ak(H.e3(void 0))},"nN","fb",function(){return H.ak(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nZ","d0",function(){return P.jG()},"of","br",function(){return[]},"ma","eX",function(){return{}},"o6","fe",function(){return P.cE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"o7","d1",function(){return P.S(P.i,P.bz)},"og","d2",function(){return T.F(0,1,0)},"oh","d3",function(){return T.F(0,0,1)},"np","f0",function(){return new G.e2(1281,0,4294967295)},"m0","eQ",function(){return new G.e1(1281,1281,1281)},"od","ae",function(){return P.cD(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.m,"iaTranslation",C.e,"iaScale",C.c,"iaColor",C.e,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a9,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a7,"uAnimationTable",C.i,"uTime",C.a6,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.e,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.c,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.i,G.E)},"nz","f1",function(){var z=G.e0()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"nA","f2",function(){var z=G.e0()
z.d=!1
z.b=!0
z.a=!1
z.c=!0
return z},"mk","eZ",function(){return G.c3("empty-mat")},"m6","eU",function(){return T.F(0.4,0.4,0.4)},"m5","eT",function(){return T.F(0.2,0.2,0.2)},"m3","eR",function(){return T.F(0,0,0)},"m4","eS",function(){return T.F(0,0,1)},"m7","eV",function(){return T.F(0,0,0.5)},"m8","eW",function(){return T.F(1,1,0)},"ou","fn",function(){var z,y
z=G.aF("ShadowMapV")
y=[P.i]
z.aj(H.c(["aPosition"],y))
z.X(H.c(["uLightPerspectiveViewMatrix","uModelMatrix"],y))
z.Y(H.c(["    gl_Position = uLightPerspectiveViewMatrix * uModelMatrix *\n                  vec4(aPosition, 1.0);\n    "],y))
return z},"ot","fm",function(){var z=G.aF("ShadowMapF")
z.Y(H.c(["oFragColor.r = 1.0;"],[P.i]))
return z},"oz","fs",function(){var z,y
z=G.aF("copyV")
y=[P.i]
z.aj(H.c(["aPosition","aTexUV"],y))
z.am(H.c(["vTexUV"],y))
z.Y(H.c(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"oy","fr",function(){var z,y
z=G.aF("copyF")
y=[P.i]
z.am(H.c(["vTexUV"],y))
z.X(H.c(["uTexture","uCutOff","uCameraFar","uCameraNear"],y))
z.Y(H.c(["   float d = texture(uTexture,  vTexUV).x;\n   float near = uCameraNear;\n   float far = uCameraFar;\n   float gray = (2.0 * near) / (far + near - d * (far - near));\n   oFragColor.rgb = vec3(gray);\n   // oFragColor.rgb = vec3(d >= uCutOff ? d : 0.0);\n   // oFragColor.rgb = vec3(d);\n"],y))
return z},"ow","fp",function(){var z,y
z=G.aF("SolidColor")
y=[P.i]
z.aj(H.c(["aPosition"],y))
z.X(H.c(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.Y(H.c(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"ov","fo",function(){var z,y
z=G.aF("SolidColorF")
y=[P.i]
z.X(H.c(["uColor"],y))
z.Y(H.c(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"o3","fd",function(){return H.c([T.F(0,0,1),T.F(0,0,-1),T.F(0,1,0),T.F(0,-1,0),T.F(1,0,0),T.F(-1,0,0)],[T.b])},"mJ","f_",function(){return H.c([G.N(0,11,5),G.N(0,5,1),G.N(0,1,7),G.N(0,7,10),G.N(0,10,11),G.N(1,5,9),G.N(5,11,4),G.N(11,10,2),G.N(10,7,6),G.N(7,1,8),G.N(3,9,4),G.N(3,4,2),G.N(3,2,6),G.N(3,6,8),G.N(3,8,9),G.N(4,9,5),G.N(2,4,11),G.N(6,2,10),G.N(8,6,7),G.N(9,8,1)],[G.Y])},"ox","fq",function(){return(1+P.lS(5))/2},"mK","cZ",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.fq()
y=T.F(-1,z,0)
y.D(0)
x=T.F(1,z,0)
x.D(0)
if(typeof z!=="number")return z.eh()
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
return H.c([y,x,w,v,u,t,s,r,q,p,o,z],[T.b])},"op","fi",function(){var z,y
z=G.aF("LightBlinnPhongShadowV")
y=[P.i]
z.aj(H.c(["aPosition","aNormal"],y))
z.am(H.c(["vPosition","vNormal","vPositionFromLight"],y))
z.X(H.c(["uPerspectiveViewMatrix","uLightPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.Y(H.c(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        vPositionFromLight = uLightPerspectiveViewMatrix * pos;\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        "],y))
return z},"om","fg",function(){var z,y
z=G.aF("LightBlinnPhongShadowF")
y=[P.i]
z.am(H.c(["vPosition","vNormal","vPositionFromLight"],y))
z.X(H.c(["uLightDescs","uLightTypes","uShininess"],y))
z.X(H.c(["uShadowMap","uEyePosition","uColor","uShadowBias"],y))
z.bj(H.c(["\n    vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n\t\t// depth is in [-1, 1] but we want [0, 1] for the texture lookup\n\t\tdepth = 0.5 * depth + vec3(0.5);\n\n    float shadow = GetShadow(depth, uShadowMap, 0.001, 0.001);\n\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n    if (shadow > 0.0) {\n        acc = CombinedLight(vPosition, vNormal, uEyePosition,\n                            uLightDescs, uLightTypes, uShininess);\n    }\n\n    oFragColor.rgb = shadow * acc.diffuse +\n                       shadow * acc.specular +\n                       uColor;\n    oFragColor.a = 1.0;\n    // if ( oFragColor.r != 66.0)  gl_FragColor.rgb = vec3(shadow);\n\n      "],y),H.c(["","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n","\nfloat GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {\n    depth.z = depth.z - bias1;\n    return texture(shadowMap, depth);\n    //return 1.0 - smoothstep(bias1, bias2, depth.z - d);\n}\n"],y))
return z},"os","fl",function(){return T.F(11,20,0)},"ok","ff",function(){return T.F(0,-30,0)},"oo","an",function(){var z,y,x,w,v,u
z=$.ff()
y=$.eS()
x=$.eR()
w=T.c4()
v=T.c4()
u=$.fl()
return P.cD(["idDirectional",new G.bw(z,y,x,40,w,v,1,"dir",!1,!0),"idSpot",new G.aJ(u,z,y,x,40,0.5235987755982988,0.5,1,0.5,44,T.c4(),T.c4(),2,"spot",!1,!0),"idPoint",new G.bH(u,$.eV(),y,40,3,"point",!1,!0)],P.i,G.bc)},"oq","fj",function(){var z=G.c3("matGray")
z.a9("uColor",$.eU())
z.a9("uShininess",10)
return z},"or","fk",function(){var z=G.c3("objects")
z.a9("uColor",$.eT())
z.a9("uShininess",10)
return z},"on","fh",function(){var z=G.c3("light")
z.a9("uColor",$.eW())
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[W.W]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.i,args:[P.B]},{func:1,ret:P.X,args:[W.aj]},{func:1,ret:P.X,args:[P.i]},{func:1,ret:P.G,args:[W.ba]},{func:1,ret:P.G,args:[W.R]},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.X,args:[W.U,P.i,P.i,W.bL]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a9]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:P.X,args:[W.v]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.G,args:[P.H]},{func:1,args:[W.R]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[P.a5,T.b]},{func:1,ret:P.G,args:[W.aY]},{func:1,ret:P.B,args:[P.B,P.e]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.lU(d||a)
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
Isolate.bo=a.bo
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
if(typeof dartMainRunner==="function")dartMainRunner(L.eK,[])
else L.eK([])})})()
//# sourceMappingURL=shadow.dart.js.map
