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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isf)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cx(this,d,e,f,true,false,a1).prototype
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
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.kA()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dG("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.kF(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
f:{"^":"b;",
D:function(a,b){return a===b},
gA:function(a){return H.b1(a)},
k:["cr",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hj:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isP:1},
hk:{"^":"f;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isF:1},
cj:{"^":"f;",
gA:function(a){return 0},
k:["ct",function(a){return String(a)}]},
hQ:{"^":"cj;"},
b5:{"^":"cj;"},
br:{"^":"cj;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.ct(a)
return"JavaScript function for "+H.e(J.bk(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbm:1},
bo:{"^":"f;$ti",
l:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.W(P.y("add"))
a.push(b)},
a5:function(a,b){var z
if(!!a.fixed$length)H.W(P.y("remove"))
for(z=0;z<a.length;++z)if(J.aj(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.z(b,"$isl",[H.r(a,0)],"$asl")
if(!!a.fixed$length)H.W(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a4:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
gdN:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.dc())},
bm:function(a,b){var z,y
H.m(b,{func:1,ret:P.P,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aG(a))}return!1},
cm:function(a,b){if(!!a.immutable$list)H.W(P.y("sort"))
H.ie(a,J.kb(),H.r(a,0))},
ak:function(a){return this.cm(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aj(a[z],b))return!0
return!1},
k:function(a){return P.ch(a,"[","]")},
gC:function(a){return new J.fx(a,a.length,0,[H.r(a,0)])},
gA:function(a){return H.b1(a)},
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
return a[b]},
i:function(a,b,c){H.i(b)
H.B(c,H.r(a,0))
if(!!a.immutable$list)H.W(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
a[b]=c},
$isw:1,
$asw:I.bc,
$isl:1,
$isa:1,
p:{
hi:function(a,b){return J.ci(H.j(a,[b]))},
ci:function(a){H.bA(a)
a.fixed$length=Array
return a},
lC:[function(a,b){return J.eW(H.ej(a,"$isV"),H.ej(b,"$isV"))},"$2","kb",8,0,29]}},
lD:{"^":"bo;$ti"},
fx:{"^":"b;a,b,c,0d,$ti",
sba:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.sba(null)
return!1}this.sba(z[x]);++this.c
return!0},
$isaV:1},
bp:{"^":"f;",
L:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.c(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gah(b)
if(this.gah(a)===z)return 0
if(this.gah(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gah:function(a){return a===0?1/a<0:a<0},
c_:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.y(""+a+".toInt()"))},
du:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
dv:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.ba(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
dZ:function(a,b){var z
if(b>20)throw H.c(P.bM(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gah(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a8:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cv:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bi(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.bi(a,b)},
bi:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bg:function(a,b){var z
if(a>0)z=this.dg(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dg:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.c(H.ba(b))
return a>b},
$isV:1,
$asV:function(){return[P.G]},
$isah:1,
$isG:1},
de:{"^":"bp;",$isE:1},
dd:{"^":"bp;"},
bq:{"^":"f;",
ao:function(a,b){if(b>=a.length)throw H.c(H.aA(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cU(b,null,null))
return a+b},
co:function(a,b,c){var z
if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cn:function(a,b){return this.co(a,b,0)},
cq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bN(b,null,null))
if(b>c)throw H.c(P.bN(b,null,null))
if(c>a.length)throw H.c(P.bN(c,null,null))
return a.substring(b,c)},
cp:function(a,b){return this.cq(a,b,null)},
dY:function(a){return a.toLowerCase()},
dw:function(a,b,c){if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
return H.kN(a,b,c)},
L:function(a,b){var z
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
h:function(a,b){H.i(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||!1)throw H.c(H.aA(a,b))
return a[b]},
$isw:1,
$asw:I.bc,
$isV:1,
$asV:function(){return[P.d]},
$ishO:1,
$isd:1}}],["","",,H,{"^":"",
dc:function(){return new P.co("No element")},
hh:function(){return new P.co("Too many elements")},
ie:function(a,b,c){H.z(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.E,args:[c,c]})
H.bu(a,0,J.aE(a)-1,b,c)},
bu:function(a,b,c,d,e){H.z(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.id(a,b,c,d,e)
else H.ic(a,b,c,d,e)},
id:function(a,b,c,d,e){var z,y,x,w,v
H.z(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.bd(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ic:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.z(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.b.Y(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.Y(b+a0,2)
v=w-z
u=w+z
t=J.bd(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a7(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a7(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a7(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a7(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aj(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a7()
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
if(typeof e!=="number")return e.a7()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.V()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.V()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a7()
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
H.bu(a,b,m-2,a1,a2)
H.bu(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aj(a1.$2(t.h(a,m),r),0);)++m
for(;J.aj(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a7()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bu(a,m,l,a1,a2)}else H.bu(a,m,l,a1,a2)},
d4:{"^":"l;"},
bL:{"^":"d4;$ti",
gC:function(a){return new H.di(this,this.gj(this),0,[H.cz(this,"bL",0)])},
aG:function(a,b){return this.cs(0,H.m(b,{func:1,ret:P.P,args:[H.cz(this,"bL",0)]}))}},
di:{"^":"b;a,b,c,0d,$ti",
sb1:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.bd(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aG(z))
w=this.c
if(w>=x){this.sb1(null)
return!1}this.sb1(y.t(z,w));++this.c
return!0},
$isaV:1},
hv:{"^":"bL;a,b,$ti",
gj:function(a){return J.aE(this.a)},
t:function(a,b){return this.b.$1(J.f4(this.a,b))},
$asbL:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dH:{"^":"l;a,b,$ti",
gC:function(a){return new H.iB(J.aQ(this.a),this.b,this.$ti)}},
iB:{"^":"aV;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gB(z)))return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
bK:{"^":"b;$ti"}}],["","",,H,{"^":"",
aD:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ks:function(a){return init.types[H.i(a)]},
kD:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bk(a)
if(typeof z!=="string")throw H.c(H.ba(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.hR(a)+H.bT(H.ai(a),0,null)},
hR:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.O||!!z.$isb5){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aD(w.length>1&&C.i.ao(w,0)===36?C.i.cp(w,1):w)},
aH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hY:function(a){var z=H.aH(a).getFullYear()+0
return z},
hW:function(a){var z=H.aH(a).getMonth()+1
return z},
hS:function(a){var z=H.aH(a).getDate()+0
return z},
hT:function(a){var z=H.aH(a).getHours()+0
return z},
hV:function(a){var z=H.aH(a).getMinutes()+0
return z},
hX:function(a){var z=H.aH(a).getSeconds()+0
return z},
hU:function(a){var z=H.aH(a).getMilliseconds()+0
return z},
aB:function(a){throw H.c(H.ba(a))},
n:function(a,b){if(a==null)J.aE(a)
throw H.c(H.aA(a,b))},
aA:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.i(J.aE(a))
if(!(b<0)){if(typeof z!=="number")return H.aB(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bN(b,"index",null)},
ba:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dr()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bk(this.dartException)},
W:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aG(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bg(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dq(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
u=$.et()
t=$.eu()
s=$.ev()
r=$.ey()
q=$.ez()
p=$.ex()
$.ew()
o=$.eB()
n=$.eA()
m=v.J(y)
if(m!=null)return z.$1(H.ck(H.u(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.u(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dq(H.u(y),m))}}return z.$1(new H.ix(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
bf:function(a){var z
if(a==null)return new H.dX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dX(a)},
ko:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kC:function(a,b,c,d,e,f){H.h(a,"$isbm")
switch(H.i(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d8("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var z
H.i(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kC)
a.$identity=z
return z},
fJ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.i1(z).r}else x=d
w=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.cb(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.G()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ks,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cc
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cZ(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fG:function(a,b,c,d){var z=H.cc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fI(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fG(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.G()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aR
if(v==null){v=H.bH("self")
$.aR=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.G()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aR
if(v==null){v=H.bH("self")
$.aR=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fH:function(a,b,c,d){var z,y
z=H.cc
y=H.cX
switch(b?-1:a){case 0:throw H.c(H.i7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fI:function(a,b){var z,y,x,w,v,u,t,s
z=$.aR
if(z==null){z=H.bH("self")
$.aR=z}y=$.cW
if(y==null){y=H.bH("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fH(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a8
if(typeof y!=="number")return y.G()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.G()
$.a8=y+1
return new Function(z+y+"}")()},
cx:function(a,b,c,d,e,f,g){return H.fJ(a,b,H.i(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
bW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
i:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
cD:function(a,b){throw H.c(H.a3(a,H.aD(H.u(b).substring(3))))},
kL:function(a,b){throw H.c(H.cY(a,H.aD(H.u(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cD(a,b)},
ad:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.kL(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cD(a,b)},
bA:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
kE:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cD(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.i(z)]
else return a.$S()}return},
by:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cy(J.C(a))
if(z==null)return!1
return H.e2(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.by(a,b))return a
z=H.bB(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.ct=!1}},
bY:function(a,b){if(a!=null&&!H.cw(a,b))H.W(H.a3(a,H.bB(b)))
return a},
e6:function(a){var z,y
z=J.C(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return H.bB(y)
return"Closure"}return H.b2(a)},
kO:function(a){throw H.c(new P.fQ(H.u(a)))},
ef:function(a){return init.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
n1:function(a,b,c){return H.aP(a["$as"+H.e(c)],H.ai(b))},
be:function(a,b,c,d){var z
H.u(c)
H.i(d)
z=H.aP(a["$as"+H.e(c)],H.ai(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.u(b)
H.i(c)
z=H.aP(a["$as"+H.e(b)],H.ai(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.i(b)
z=H.ai(a)
return z==null?null:z[b]},
bB:function(a){return H.az(a,null)},
az:function(a,b){var z,y
H.z(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aD(a[0].builtin$cls)+H.bT(a,1,b)
if(typeof a=="function")return H.aD(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.i(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.e(b[y])}if('func' in a)return H.ka(a,b)
if('futureOr' in a)return"FutureOr<"+H.az("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ka:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.z(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.j([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.az(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.az(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.az(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.az(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kn(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.az(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bT:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return"<"+z.k(0)+">"},
kr:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$iso){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ai(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aN:function(a,b,c,d){var z,y
H.u(b)
H.bA(c)
H.u(d)
if(a==null)return!1
z=H.ai(a)
y=J.C(a)
if(y[b]==null)return!1
return H.e9(H.aP(y[d],z),null,c,null)},
bC:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.aN(a,b,c,d))return a
throw H.c(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bT(c,0,null),init.mangledGlobalNames)))},
z:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.aN(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bT(c,0,null),init.mangledGlobalNames)))},
e9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
n_:function(a,b,c){return a.apply(b,H.aP(J.C(b)["$as"+H.e(c)],H.ai(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.by(a,b)}z=J.C(a).constructor
y=H.ai(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
B:function(a,b){if(a!=null&&!H.cw(a,b))throw H.c(H.a3(a,H.bB(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.e2(a,b,c,d)
if('func' in a)return c.builtin$cls==="bm"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"aU" in y.prototype))return!1
w=y.prototype["$as"+"aU"]
v=H.aP(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e9(H.aP(r,z),b,u,d)},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kK(m,b,l,d)},
kK:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
n0:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kF:function(a){var z,y,x,w,v,u
z=H.u($.eg.$1(a))
y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.e8.$2(a,z))
if(z!=null){y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c2(x)
$.bX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c1[z]=x
return x}if(v==="-"){u=H.c2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.dG(z))
if(init.leafTags[z]===true){u=H.c2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c2:function(a){return J.cB(a,!1,null,!!a.$isx)},
kJ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c2(z)
else return J.cB(z,c,null,null)},
kA:function(){if(!0===$.cA)return
$.cA=!0
H.kB()},
kB:function(){var z,y,x,w,v,u,t,s
$.bX=Object.create(null)
$.c1=Object.create(null)
H.kw()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kJ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kw:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.aM(C.P,H.aM(C.U,H.aM(C.B,H.aM(C.B,H.aM(C.T,H.aM(C.Q,H.aM(C.R(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kx(v)
$.e8=new H.ky(u)
$.el=new H.kz(t)},
aM:function(a,b){return a(b)||b},
kN:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i0:{"^":"b;a,b,c,d,e,f,r,0x",p:{
i1:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.i0(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
is:{"^":"b;a,b,c,d,e,f",
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
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.j([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.is(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hM:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dq:function(a,b){return new H.hM(a,b==null?null:b.method)}}},
hl:{"^":"O;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hl(a,y,z?null:b.receiver)}}},
ix:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kP:{"^":"o:5;a",
$1:function(a){if(!!J.C(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dX:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa2:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gce:function(){return this},
$isbm:1,
gce:function(){return this}},
dy:{"^":"o;"},
ig:{"^":"dy;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aD(z)+"'"}},
cb:{"^":"dy;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.ak(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
cc:function(a){return a.a},
cX:function(a){return a.c},
bH:function(a){var z,y,x,w,v
z=new H.cb("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
it:{"^":"O;a",
k:function(a){return this.a},
p:{
a3:function(a,b){return new H.it("TypeError: "+H.e(P.bJ(a))+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
fE:{"^":"O;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fE("CastError: "+H.e(P.bJ(a))+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
i6:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i7:function(a){return new H.i6(a)}}},
dE:{"^":"b;a,0b,0c,0d",
gae:function(){var z=this.b
if(z==null){z=H.bB(this.a)
this.b=z}return z},
k:function(a){return this.gae()},
gA:function(a){var z=this.d
if(z==null){z=C.i.gA(this.gae())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gae()===b.gae()}},
df:{"^":"dj;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.aY(this,[H.r(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cY(z,b)}else{y=this.dL(b)
return y}},
dL:function(a){var z=this.d
if(z==null)return!1
return this.aC(this.au(z,J.ak(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ac(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ac(w,b)
x=y==null?null:y.b
return x}else return this.dM(b)},
dM:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.au(z,J.ak(a)&0x3ffffff)
x=this.aC(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aw()
this.b=z}this.b2(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aw()
this.c=y}this.b2(y,b,c)}else{x=this.d
if(x==null){x=this.aw()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.au(x,w)
if(v==null)this.az(x,w,[this.am(b,c)])
else{u=this.aC(v,b)
if(u>=0)v[u].b=c
else v.push(this.am(b,c))}}},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aG(this))
z=z.c}},
b2:function(a,b,c){var z
H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
z=this.ac(a,b)
if(z==null)this.az(a,b,this.am(b,c))
else z.b=c},
b4:function(){this.r=this.r+1&67108863},
am:function(a,b){var z,y
z=new H.hq(H.B(a,H.r(this,0)),H.B(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b4()
return z},
aC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aj(a[y].a,b))return y
return-1},
k:function(a){return P.dk(this)},
ac:function(a,b){return a[b]},
au:function(a,b){return a[b]},
az:function(a,b,c){a[b]=c},
cZ:function(a,b){delete a[b]},
cY:function(a,b){return this.ac(a,b)!=null},
aw:function(){var z=Object.create(null)
this.az(z,"<non-identifier-key>",z)
this.cZ(z,"<non-identifier-key>")
return z},
$isdg:1},
hq:{"^":"b;a,b,0c,0d"},
aY:{"^":"d4;a,$ti",
gj:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.hr(z,z.r,this.$ti)
y.c=z.e
return y}},
hr:{"^":"b;a,b,0c,0d,$ti",
sb3:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sb3(null)
return!1}else{this.sb3(z.a)
this.c=this.c.c
return!0}}},
$isaV:1},
kx:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
ky:{"^":"o:14;a",
$2:function(a,b){return this.a(a,b)}},
kz:{"^":"o:15;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kn:function(a){return J.hi(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bS:function(a){var z,y
if(!!J.C(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aA(b,a))},
hH:{"^":"f;",$isiu:1,"%":"DataView;ArrayBufferView;cm|dR|dS|dn|dT|dU|ap"},
cm:{"^":"hH;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bc,
$isx:1,
$asx:I.bc},
dn:{"^":"dS;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.i(b)
H.eb(c)
H.ac(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.ah]},
$asq:function(){return[P.ah]},
$isl:1,
$asl:function(){return[P.ah]},
$isa:1,
$asa:function(){return[P.ah]},
"%":"Float64Array"},
ap:{"^":"dU;",
i:function(a,b,c){H.i(b)
H.i(c)
H.ac(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.E]},
$asq:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
hG:{"^":"dn;",$isaf:1,"%":"Float32Array"},
lM:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lN:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
$ishf:1,
"%":"Int32Array"},
lO:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lP:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hI:{"^":"ap;",
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
$ismy:1,
"%":"Uint32Array"},
lQ:{"^":"ap;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lR:{"^":"ap;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dR:{"^":"cm+q;"},
dS:{"^":"dR+bK;"},
dT:{"^":"cm+q;"},
dU:{"^":"dT+bK;"}}],["","",,P,{"^":"",
iF:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ki()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bb(new P.iH(z),1)).observe(y,{childList:true})
return new P.iG(z,y,x)}else if(self.setImmediate!=null)return P.kj()
return P.kk()},
mJ:[function(a){self.scheduleImmediate(H.bb(new P.iI(H.m(a,{func:1,ret:-1})),0))},"$1","ki",4,0,4],
mK:[function(a){self.setImmediate(H.bb(new P.iJ(H.m(a,{func:1,ret:-1})),0))},"$1","kj",4,0,4],
mL:[function(a){H.m(a,{func:1,ret:-1})
P.jT(0,a)},"$1","kk",4,0,4],
ke:function(a,b){if(H.by(a,{func:1,args:[P.b,P.a2]}))return H.m(a,{func:1,ret:null,args:[P.b,P.a2]})
if(H.by(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kd:function(){var z,y
for(;z=$.aL,z!=null;){$.b9=null
y=z.b
$.aL=y
if(y==null)$.b8=null
z.a.$0()}},
mY:[function(){$.cu=!0
try{P.kd()}finally{$.b9=null
$.cu=!1
if($.aL!=null)$.cF().$1(P.ea())}},"$0","ea",0,0,1],
e5:function(a){var z=new P.dJ(H.m(a,{func:1,ret:-1}))
if($.aL==null){$.b8=z
$.aL=z
if(!$.cu)$.cF().$1(P.ea())}else{$.b8.b=z
$.b8=z}},
kh:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aL
if(z==null){P.e5(a)
$.b9=$.b8
return}y=new P.dJ(a)
x=$.b9
if(x==null){y.b=z
$.b9=y
$.aL=y}else{y.b=x.b
x.b=y
$.b9=y
if(y.b==null)$.b8=y}},
kM:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.J
if(C.f===y){P.bV(null,null,C.f,a)
return}y.toString
P.bV(null,null,y,H.m(y.bp(a),z))},
bU:function(a,b,c,d,e){var z={}
z.a=d
P.kh(new P.kf(z,e))},
e3:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
e4:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kg:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
bV:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bp(d):c.dr(d,-1)
P.e5(d)},
iH:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iG:{"^":"o:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iI:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iJ:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jS:{"^":"b;a,0b,c",
cU:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bb(new P.jU(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jT:function(a,b){var z=new P.jS(!0,0)
z.cU(a,b)
return z}}},
jU:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iM:{"^":"b;$ti"},
jN:{"^":"iM;a,$ti"},
aK:{"^":"b;0a,b,c,d,e,$ti",
dO:function(a){if(this.c!==6)return!0
return this.b.b.aE(H.m(this.d,{func:1,ret:P.P,args:[P.b]}),a.a,P.P,P.b)},
dK:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.by(z,{func:1,args:[P.b,P.a2]}))return H.bY(w.dU(z,a.a,a.b,null,y,P.a2),x)
else return H.bY(w.aE(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ab:{"^":"b;bh:a<,b,0dc:c<,$ti",
bZ:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.f){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ke(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ab(0,$.J,[c])
w=b==null?1:3
this.b6(new P.aK(x,w,a,b,[z,c]))
return x},
bY:function(a,b){return this.bZ(a,null,b)},
b6:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaK")
this.c=a}else{if(z===2){y=H.h(this.c,"$isab")
z=y.a
if(z<4){y.b6(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bV(null,null,z,H.m(new P.j0(this,a),{func:1,ret:-1}))}},
be:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaK")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isab")
y=u.a
if(y<4){u.be(a)
return}this.a=y
this.c=u.c}z.a=this.ad(a)
y=this.b
y.toString
P.bV(null,null,y,H.m(new P.j5(z,this),{func:1,ret:-1}))}},
ay:function(){var z=H.h(this.c,"$isaK")
this.c=null
return this.ad(z)},
ad:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ap:function(a){var z,y,x
z=H.r(this,0)
H.bY(a,{futureOr:1,type:z})
y=this.$ti
if(H.aN(a,"$isaU",y,"$asaU"))if(H.aN(a,"$isab",y,null))P.dM(a,this)
else P.j1(a,this)
else{x=this.ay()
H.B(a,z)
this.a=4
this.c=a
P.b7(this,x)}},
b8:function(a,b){var z
H.h(b,"$isa2")
z=this.ay()
this.a=8
this.c=new P.X(a,b)
P.b7(this,z)},
$isaU:1,
p:{
j1:function(a,b){var z,y,x
b.a=1
try{a.bZ(new P.j2(b),new P.j3(b),null)}catch(x){z=H.a5(x)
y=H.bf(x)
P.kM(new P.j4(b,z,y))}},
dM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isab")
if(z>=4){y=b.ay()
b.a=a.a
b.c=a.c
P.b7(b,y)}else{y=H.h(b.c,"$isaK")
b.a=2
b.c=a
a.be(y)}},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isX")
y=y.b
u=v.a
t=v.b
y.toString
P.bU(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b7(z.a,b)}y=z.a
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
if(p){H.h(r,"$isX")
y=y.b
u=r.a
t=r.b
y.toString
P.bU(null,null,y,u,t)
return}o=$.J
if(o!=q)$.J=q
else o=null
y=b.c
if(y===8)new P.j8(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j7(x,b,r).$0()}else if((y&2)!==0)new P.j6(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.C(y).$isaU){if(y.a>=4){n=H.h(t.c,"$isaK")
t.c=null
b=t.ad(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dM(y,t)
return}}m=b.b
n=H.h(m.c,"$isaK")
m.c=null
b=m.ad(n)
y=x.a
u=x.b
if(!y){H.B(u,H.r(m,0))
m.a=4
m.c=u}else{H.h(u,"$isX")
m.a=8
m.c=u}z.a=m
y=m}}}},
j0:{"^":"o:0;a,b",
$0:function(){P.b7(this.a,this.b)}},
j5:{"^":"o:0;a,b",
$0:function(){P.b7(this.b,this.a.a)}},
j2:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.ap(a)}},
j3:{"^":"o:17;a",
$2:function(a,b){H.h(b,"$isa2")
this.a.b8(a,b)},
$1:function(a){return this.$2(a,null)}},
j4:{"^":"o:0;a,b,c",
$0:function(){this.a.b8(this.b,this.c)}},
j8:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bV(H.m(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.bf(v)
if(this.d){w=H.h(this.a.a.c,"$isX").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isX")
else u.b=new P.X(y,x)
u.a=!0
return}if(!!J.C(z).$isaU){if(z instanceof P.ab&&z.gbh()>=4){if(z.gbh()===8){w=this.b
w.b=H.h(z.gdc(),"$isX")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bY(new P.j9(t),null)
w.a=!1}}},
j9:{"^":"o:18;a",
$1:function(a){return this.a}},
j7:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.B(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.aE(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.bf(t)
x=this.a
x.b=new P.X(z,y)
x.a=!0}}},
j6:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isX")
w=this.c
if(w.dO(z)&&w.e!=null){v=this.b
v.b=w.dK(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.bf(u)
w=H.h(this.a.a.c,"$isX")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.X(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ik:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ab(0,$.J,[P.E])
z.a=0
x=H.r(this,0)
w=H.m(new P.im(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.io(z,y),{func:1,ret:-1})
W.ag(this.a,this.b,w,!1,x)
return y}},
im:{"^":"o;a,b",
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}},
io:{"^":"o:0;a,b",
$0:function(){this.b.ap(this.a.a)}},
il:{"^":"b;"},
X:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
k_:{"^":"b;",$ismH:1},
kf:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dr()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jw:{"^":"k_;",
dV:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.f===$.J){a.$0()
return}P.e3(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.bf(x)
P.bU(null,null,this,z,H.h(y,"$isa2"))}},
dW:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.J){a.$1(b)
return}P.e4(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.bf(x)
P.bU(null,null,this,z,H.h(y,"$isa2"))}},
dr:function(a,b){return new P.jy(this,H.m(a,{func:1,ret:b}),b)},
bp:function(a){return new P.jx(this,H.m(a,{func:1,ret:-1}))},
ds:function(a,b){return new P.jz(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bV:function(a,b){H.m(a,{func:1,ret:b})
if($.J===C.f)return a.$0()
return P.e3(null,null,this,a,b)},
aE:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.J===C.f)return a.$1(b)
return P.e4(null,null,this,a,b,c,d)},
dU:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.J===C.f)return a.$2(b,c)
return P.kg(null,null,this,a,b,c,d,e,f)}},
jy:{"^":"o;a,b,c",
$0:function(){return this.a.bV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jx:{"^":"o:1;a,b",
$0:function(){return this.a.dV(this.b)}},
jz:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dW(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dh:function(a,b,c){H.bA(a)
return H.z(H.ko(a,new H.df(0,0,[b,c])),"$isdg",[b,c],"$asdg")},
Y:function(a,b){return new H.df(0,0,[a,b])},
a0:function(a,b,c,d){return new P.jh(0,0,[d])},
hg:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.j([],[P.d])
y=$.bg()
C.a.l(y,a)
try{P.kc(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dx(b,H.kE(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cq(b)
y=$.bg()
C.a.l(y,a)
try{x=z
x.a=P.dx(x.gX(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bg(),z<y.length;++z)if(a===y[z])return!0
return!1},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.z(b,"$isa",[P.d],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gB(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.u();t=s,s=r){r=z.gB(z);++x
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
cl:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.B(a[x],b))
return z},
dk:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cq("")
try{C.a.l($.bg(),a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.f7(a,new P.hu(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.bg()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
jh:{"^":"jb;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){var z=new P.dQ(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbx")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbx")!=null}else return this.cX(b)},
cX:function(a){var z=this.d
if(z==null)return!1
return this.at(this.bb(z,a),a)>=0},
l:function(a,b){var z,y
H.B(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b5(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b5(y,b)}else return this.cV(0,b)},
cV:function(a,b){var z,y,x
H.B(b,H.r(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.b9(b)
x=z[y]
if(x==null)z[y]=[this.ax(b)]
else{if(this.at(x,b)>=0)return!1
x.push(this.ax(b))}return!0},
a5:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bf(this.c,b)
else return this.d6(0,b)},
d6:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bb(z,b)
x=this.at(y,b)
if(x<0)return!1
this.bj(y.splice(x,1)[0])
return!0},
a3:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.av()}},
b5:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$isbx")!=null)return!1
a[b]=this.ax(b)
return!0},
bf:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbx")
if(z==null)return!1
this.bj(z)
delete a[b]
return!0},
av:function(){this.r=this.r+1&67108863},
ax:function(a){var z,y
z=new P.bx(H.B(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.av()
return z},
bj:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.av()},
b9:function(a){return J.ak(a)&0x3ffffff},
bb:function(a,b){return a[this.b9(b)]},
at:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aj(a[y].a,b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bx:{"^":"b;a,0b,0c"},
dQ:{"^":"b;a,b,0c,0d,$ti",
sb7:function(a){this.d=H.B(a,H.r(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sb7(null)
return!1}else{this.sb7(H.B(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaV:1,
p:{
ji:function(a,b,c){var z=new P.dQ(a,b,[c])
z.c=a.e
return z}}},
jb:{"^":"i8;"},
hs:{"^":"jj;",$isl:1,$isa:1},
q:{"^":"b;$ti",
gC:function(a){return new H.di(a,this.gj(a),0,[H.be(this,a,"q",0)])},
t:function(a,b){return this.h(a,b)},
dJ:function(a,b,c,d){var z,y,x
H.B(b,d)
H.m(c,{func:1,ret:d,args:[d,H.be(this,a,"q",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aG(a))}return y},
k:function(a){return P.ch(a,"[","]")}},
dj:{"^":"S;"},
hu:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.be(this,a,"S",0),H.be(this,a,"S",1)]})
for(z=J.aQ(this.gF(a));z.u();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aE(this.gF(a))},
k:function(a){return P.dk(a)},
$isK:1},
i9:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.aQ(H.z(b,"$isl",this.$ti,"$asl"));z.u();)this.l(0,z.gB(z))},
k:function(a){return P.ch(this,"{","}")},
$isl:1,
$ism7:1},
i8:{"^":"i9;"},
jj:{"^":"b+q;"}}],["","",,P,{"^":"",
h2:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b2(a)+"'"},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bk(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h2(a)},
d8:function(a){return new P.iY(a)},
aC:function(a){H.c3(H.e(a))},
P:{"^":"b;"},
"+bool":0,
bI:{"^":"b;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.bI&&this.a===b.a&&!0},
L:function(a,b){return C.b.L(this.a,H.h(b,"$isbI").a)},
gA:function(a){var z=this.a
return(z^C.b.bg(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fR(H.hY(this))
y=P.bl(H.hW(this))
x=P.bl(H.hS(this))
w=P.bl(H.hT(this))
v=P.bl(H.hV(this))
u=P.bl(H.hX(this))
t=P.fS(H.hU(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bI]},
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
bl:function(a){if(a>=10)return""+a
return"0"+a}}},
ah:{"^":"G;"},
"+double":0,
aS:{"^":"b;a",
V:function(a,b){return C.b.V(this.a,H.h(b,"$isaS").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,H.h(b,"$isaS").a)},
k:function(a){var z,y,x,w,v
z=new P.h_()
y=this.a
if(y<0)return"-"+new P.aS(0-y).k(0)
x=z.$1(C.b.Y(y,6e7)%60)
w=z.$1(C.b.Y(y,1e6)%60)
v=new P.fZ().$1(y%1e6)
return""+C.b.Y(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isV:1,
$asV:function(){return[P.aS]},
p:{
fY:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fZ:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h_:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
dr:{"^":"O;",
k:function(a){return"Throw of null."}},
aF:{"^":"O;a,b,c,d",
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
u=P.bJ(this.b)
return w+v+": "+H.e(u)},
p:{
cU:function(a,b,c){return new P.aF(!0,a,b,c)}}},
ds:{"^":"aF;e,f,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bN:function(a,b,c){return new P.ds(null,null,!0,a,b,"Value not in range")},
bM:function(a,b,c,d,e){return new P.ds(b,c,!0,a,d,"Invalid value")}}},
he:{"^":"aF;e,j:f>,a,b,c,d",
gar:function(){return"RangeError"},
gaq:function(){var z,y
z=H.i(this.b)
if(typeof z!=="number")return z.a7()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.i(e==null?J.aE(b):e)
return new P.he(b,z,!0,a,c,"Index out of range")}}},
iy:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.iy(a)}}},
iw:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dG:function(a){return new P.iw(a)}}},
co:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
cp:function(a){return new P.co(a)}}},
fK:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bJ(z))+"."},
p:{
aG:function(a){return new P.fK(a)}}},
dw:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fQ:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iY:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bm:{"^":"b;"},
E:{"^":"G;"},
"+int":0,
l:{"^":"b;$ti",
aG:["cs",function(a,b){var z=H.cz(this,"l",0)
return new H.dH(this,H.m(b,{func:1,ret:P.P,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gC(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.W(P.bM(b,0,null,"index",null))
for(z=this.gC(this),y=0;z.u();){x=z.gB(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.hg(this,"(",")")}},
aV:{"^":"b;$ti"},
a:{"^":"b;$ti",$isl:1},
"+List":0,
K:{"^":"b;$ti"},
F:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isV:1,
$asV:function(){return[P.G]}},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.b1(this)},
k:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.k(this)}},
a2:{"^":"b;"},
d:{"^":"b;",$isV:1,
$asV:function(){return[P.d]},
$ishO:1},
"+String":0,
cq:{"^":"b;X:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dx:function(a,b,c){var z=J.aQ(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gB(z))
while(z.u())}else{a+=H.e(z.gB(z))
for(;z.u();)a=a+c+H.e(z.gB(z))}return a}}}}],["","",,W,{"^":"",
h0:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).M(z,a,b,c)
y.toString
z=W.v
z=new H.dH(new W.a4(y),H.m(new W.h1(),{func:1,ret:P.P,args:[z]}),[z])
x=z.gC(z)
if(!x.u())H.W(H.dc())
w=x.gB(x)
if(x.u())H.W(H.hh())
return H.h(w,"$isQ")},
d7:function(a){H.h(a,"$isM")
return"wheel"},
aT:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fb(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
iV:function(a,b){return document.createElement(a)},
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dP:function(a,b,c,d){var z,y
z=W.bR(W.bR(W.bR(W.bR(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iP(a)
if(!!J.C(z).$isM)return z
return}else return H.h(a,"$isM")},
e7:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.f)return a
return z.ds(a,b)},
L:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kQ:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fv:{"^":"L;",
k:function(a){return String(a)},
$isfv:1,
"%":"HTMLAnchorElement"},
kR:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"L;",$iscV:1,"%":"HTMLBaseElement"},
fA:{"^":"f;","%":";Blob"},
bG:{"^":"L;",$isbG:1,"%":"HTMLBodyElement"},
cd:{"^":"L;0n:height=,0m:width=",
aI:function(a,b,c){if(c!=null)return this.d1(a,b,P.kl(c,null))
return this.d2(a,b)},
cf:function(a,b){return this.aI(a,b,null)},
d1:function(a,b,c){return a.getContext(b,c)},
d2:function(a,b){return a.getContext(b)},
$iscd:1,
"%":"HTMLCanvasElement"},
fD:{"^":"f;",
af:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
ce:{"^":"f;",
bA:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dI:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aj:function(a){return P.a_(a.getContextAttributes())},
$isce:1,
"%":"CanvasRenderingContext2D"},
kX:{"^":"v;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fL:{"^":"cf;",$isfL:1,"%":"CSSNumericValue|CSSUnitValue"},
kY:{"^":"fO;0j:length=","%":"CSSPerspective"},
al:{"^":"f;",$isal:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fM:{"^":"iN;0j:length=",
aM:function(a,b){var z=this.d3(a,this.an(a,b))
return z==null?"":z},
an:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.dh(a,b)
z[b]=y
return y},
dh:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fT()+b
if(z in a)return z
return b},
d3:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fN:{"^":"b;",
gn:function(a){return this.aM(a,"height")},
gm:function(a){return this.aM(a,"width")}},
cf:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fO:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l_:{"^":"cf;0j:length=","%":"CSSTransformValue"},
l0:{"^":"cf;0j:length=","%":"CSSUnparsedValue"},
l2:{"^":"f;0j:length=",
h:function(a,b){return a[H.i(b)]},
"%":"DataTransferItemList"},
fU:{"^":"L;","%":"HTMLDivElement"},
fV:{"^":"v;",
dk:function(a,b){return a.adoptNode(b)},
cg:function(a,b){return a.getElementById(b)},
bU:function(a,b){return a.querySelector(b)},
gbP:function(a){return new W.bv(a,"mousedown",!1,[W.T])},
gbQ:function(a){return new W.bv(a,"mousemove",!1,[W.T])},
gbR:function(a){return new W.bv(a,"mouseup",!1,[W.T])},
gbS:function(a){return new W.bv(a,H.u(W.d7(a)),!1,[W.aJ])},
"%":"XMLDocument;Document"},
l3:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
fW:{"^":"f;",
dC:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l4:{"^":"iR;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.z(c,"$isU",[P.G],"$asU")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.U,P.G]]},
$isx:1,
$asx:function(){return[[P.U,P.G]]},
$asq:function(){return[[P.U,P.G]]},
$isl:1,
$asl:function(){return[[P.U,P.G]]},
$isa:1,
$asa:function(){return[[P.U,P.G]]},
$ast:function(){return[[P.U,P.G]]},
"%":"ClientRectList|DOMRectList"},
fX:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.aN(b,"$isU",[P.G],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.G]},
"%":";DOMRectReadOnly"},
l5:{"^":"iT;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asq:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"DOMStringList"},
l6:{"^":"f;0j:length=","%":"DOMTokenList"},
Q:{"^":"v;0dX:tagName=",
gdn:function(a){return new W.iU(a)},
k:function(a){return a.localName},
M:["al",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.j([],[W.a9])
y=new W.dp(z)
C.a.l(z,W.dN(null))
C.a.l(z,W.dY())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e0(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.M).dC(y,"")
$.ae=y
$.cg=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.h(y,"$iscV")
y.href=z.baseURI
z=$.ae.head;(z&&C.N).H(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbG")}z=$.ae
if(!!this.$isbG)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.q).H(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.X,a.tagName)){z=$.cg;(z&&C.F).ci(z,x)
z=$.cg
w=(z&&C.F).dA(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.H(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cN(x)
c.aS(w)
C.j.dk(document,w)
return w},function(a,b,c){return this.M(a,b,c,null)},"dB",null,null,"ge5",5,5,null],
cl:function(a,b,c,d){a.textContent=null
this.H(a,this.M(a,b,c,d))},
ck:function(a,b){return this.cl(a,b,null,null)},
a0:function(a,b){return a.getAttribute(b)},
d7:function(a,b){return a.removeAttribute(b)},
cj:function(a,b,c){return a.setAttribute(b,c)},
gbP:function(a){return new W.bQ(a,"mousedown",!1,[W.T])},
gbQ:function(a){return new W.bQ(a,"mousemove",!1,[W.T])},
gbR:function(a){return new W.bQ(a,"mouseup",!1,[W.T])},
gbS:function(a){return new W.bQ(a,H.u(W.d7(a)),!1,[W.aJ])},
$isQ:1,
"%":";Element"},
h1:{"^":"o:19;",
$1:function(a){return!!J.C(H.h(a,"$isv")).$isQ}},
l8:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
R:{"^":"f;",$isR:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
M:{"^":"f;",
bl:function(a,b,c,d){H.m(c,{func:1,args:[W.R]})
if(c!=null)this.cW(a,b,c,d)},
dj:function(a,b,c){return this.bl(a,b,c,null)},
cW:function(a,b,c,d){return a.addEventListener(b,H.bb(H.m(c,{func:1,args:[W.R]}),1),d)},
$isM:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dV|dW|dZ|e_"},
am:{"^":"fA;",$isam:1,"%":"File"},
lp:{"^":"j_;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isam")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.am]},
$isx:1,
$asx:function(){return[W.am]},
$asq:function(){return[W.am]},
$isl:1,
$asl:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$ast:function(){return[W.am]},
"%":"FileList"},
lq:{"^":"M;0j:length=","%":"FileWriter"},
lt:{"^":"L;0j:length=","%":"HTMLFormElement"},
an:{"^":"f;",$isan:1,"%":"Gamepad"},
hb:{"^":"L;","%":"HTMLHeadElement"},
lu:{"^":"f;0j:length=","%":"History"},
lv:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isv")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hc:{"^":"fV;","%":"HTMLDocument"},
lw:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lx:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
ly:{"^":"f;0n:height=,0m:width=","%":"ImageData"},
lz:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lB:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
aW:{"^":"dF;",$isaW:1,"%":"KeyboardEvent"},
ht:{"^":"f;",
k:function(a){return String(a)},
$isht:1,
"%":"Location"},
hw:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lI:{"^":"f;0j:length=","%":"MediaList"},
lJ:{"^":"jl;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.hy(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hy:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lK:{"^":"jm;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.hz(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hz:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ao:{"^":"f;",$isao:1,"%":"MimeType"},
lL:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isao")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ao]},
$isx:1,
$asx:function(){return[W.ao]},
$asq:function(){return[W.ao]},
$isl:1,
$asl:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$ast:function(){return[W.ao]},
"%":"MimeTypeArray"},
T:{"^":"dF;",
gbO:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b0(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.C(W.e1(z)).$isQ)throw H.c(P.y("offsetX is only supported on elements"))
y=H.h(W.e1(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.z(new P.b0(u,v,w),"$isb0",w,"$asb0")
if(typeof z!=="number")return z.aW()
if(typeof x!=="number")return x.aW()
return new P.b0(C.u.c_(z-u),C.u.c_(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a4:{"^":"hs;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cp("No elements"))
if(y>1)throw H.c(P.cp("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.z(b,"$isl",[W.v],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.H(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.i(b)
H.h(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.eO(z,c,y[b])},
gC:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.be(C.D,z,"t",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){H.i(b)
return C.D.h(this.a.childNodes,b)},
$asq:function(){return[W.v]},
$asl:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"M;0dQ:previousSibling=",
dR:function(a){var z=a.parentNode
if(z!=null)J.bD(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cr(a):z},
H:function(a,b){return a.appendChild(b)},
d8:function(a,b){return a.removeChild(b)},
d9:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hJ:{"^":"jq;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isv")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
lU:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
lW:{"^":"M;0n:height=,0m:width=","%":"OffscreenCanvas"},
lX:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
aq:{"^":"f;0j:length=",$isaq:1,"%":"Plugin"},
lZ:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asq:function(){return[W.aq]},
$isl:1,
$asl:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$ast:function(){return[W.aq]},
"%":"PluginArray"},
m0:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
i_:{"^":"f;",
dA:function(a,b){return a.createContextualFragment(b)},
ci:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m5:{"^":"jA;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.i5(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i5:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m6:{"^":"f;0n:height=,0m:width=","%":"Screen"},
du:{"^":"L;0j:length=",$isdu:1,"%":"HTMLSelectElement"},
as:{"^":"M;",$isas:1,"%":"SourceBuffer"},
m8:{"^":"dW;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isas")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asq:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$ast:function(){return[W.as]},
"%":"SourceBufferList"},
at:{"^":"f;",$isat:1,"%":"SpeechGrammar"},
m9:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isat")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asq:function(){return[W.at]},
$isl:1,
$asl:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$ast:function(){return[W.at]},
"%":"SpeechGrammarList"},
au:{"^":"f;0j:length=",$isau:1,"%":"SpeechRecognitionResult"},
mc:{"^":"jJ;",
h:function(a,b){return this.bc(a,H.u(b))},
i:function(a,b,c){this.df(a,b,H.u(c))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d5(a,z)
if(y==null)return
b.$2(y,this.bc(a,y))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new W.ij(z))
return z},
gj:function(a){return a.length},
bc:function(a,b){return a.getItem(b)},
d5:function(a,b){return a.key(b)},
df:function(a,b,c){return a.setItem(b,c)},
$asS:function(){return[P.d,P.d]},
$isK:1,
$asK:function(){return[P.d,P.d]},
"%":"Storage"},
ij:{"^":"o:20;a",
$2:function(a,b){return C.a.l(this.a,a)}},
av:{"^":"f;",$isav:1,"%":"CSSStyleSheet|StyleSheet"},
ip:{"^":"L;",
M:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.al(a,b,c,d)
z=W.h0("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a4(y).I(0,new W.a4(z))
return y},
"%":"HTMLTableElement"},
mf:{"^":"L;",
M:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.al(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga9(z)
x.toString
z=new W.a4(x)
w=z.ga9(z)
y.toString
w.toString
new W.a4(y).I(0,new W.a4(w))
return y},
"%":"HTMLTableRowElement"},
mg:{"^":"L;",
M:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.al(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.K.M(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga9(z)
y.toString
x.toString
new W.a4(y).I(0,new W.a4(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"L;",$isdz:1,"%":"HTMLTemplateElement"},
mh:{"^":"f;0m:width=","%":"TextMetrics"},
aw:{"^":"M;",$isaw:1,"%":"TextTrack"},
ax:{"^":"M;",$isax:1,"%":"TextTrackCue|VTTCue"},
mi:{"^":"jR;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isax")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"TextTrackCueList"},
mj:{"^":"e_;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isaw")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$ast:function(){return[W.aw]},
"%":"TextTrackList"},
mk:{"^":"f;0j:length=","%":"TimeRanges"},
ay:{"^":"f;",$isay:1,"%":"Touch"},
ml:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isay")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asq:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$ast:function(){return[W.ay]},
"%":"TouchList"},
mm:{"^":"f;0j:length=","%":"TrackDefaultList"},
dF:{"^":"R;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mA:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mD:{"^":"hw;0n:height=,0m:width=","%":"HTMLVideoElement"},
mE:{"^":"M;0j:length=","%":"VideoTrackList"},
mF:{"^":"M;0n:height=,0m:width=","%":"VisualViewport"},
mG:{"^":"f;0m:width=","%":"VTTRegion"},
aJ:{"^":"T;",
gdE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
$isaJ:1,
"%":"WheelEvent"},
iC:{"^":"M;",
gdm:function(a){var z,y,x
z=P.G
y=new P.ab(0,$.J,[z])
x=H.m(new W.iD(new P.jN(y,[z])),{func:1,ret:-1,args:[P.G]})
this.d0(a)
this.da(a,W.e7(x,z))
return y},
da:function(a,b){return a.requestAnimationFrame(H.bb(H.m(b,{func:1,ret:-1,args:[P.G]}),1))},
d0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iD:{"^":"o:21;a",
$1:function(a){var z=this.a
a=H.bY(H.cC(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.W(P.cp("Future already completed"))
z.ap(a)}},
dK:{"^":"v;",$isdK:1,"%":"Attr"},
mM:{"^":"k1;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isal")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.al]},
$isx:1,
$asx:function(){return[W.al]},
$asq:function(){return[W.al]},
$isl:1,
$asl:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$ast:function(){return[W.al]},
"%":"CSSRuleList"},
mO:{"^":"fX;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.aN(b,"$isU",[P.G],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mP:{"^":"k3;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isan")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$asq:function(){return[W.an]},
$isl:1,
$asl:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$ast:function(){return[W.an]},
"%":"GamepadList"},
mU:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isv")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mV:{"^":"k7;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isau")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asq:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$ast:function(){return[W.au]},
"%":"SpeechRecognitionResultList"},
mW:{"^":"k9;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(b)
H.h(c,"$isav")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asq:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"StyleSheetList"},
iK:{"^":"dj;d_:a<",
E:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.a0(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.j([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.h(z[w],"$isdK")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.d,P.d]},
$asK:function(){return[P.d,P.d]}},
iU:{"^":"iK;a",
h:function(a,b){return J.c9(this.a,H.u(b))},
i:function(a,b,c){J.fj(this.a,b,H.u(c))},
gj:function(a){return this.gF(this).length}},
bv:{"^":"ik;a,b,c,$ti"},
bQ:{"^":"bv;a,b,c,$ti"},
iW:{"^":"il;a,b,c,d,e,$ti",p:{
ag:function(a,b,c,d,e){var z=W.e7(new W.iX(c),W.R)
if(z!=null&&!0)J.eP(a,b,z,!1)
return new W.iW(0,a,b,z,!1,[e])}}},
iX:{"^":"o:22;a",
$1:function(a){return this.a.$1(H.h(a,"$isR"))}},
bw:{"^":"b;a",
cS:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.ku())
for(y=0;y<12;++y)z.i(0,C.w[y],W.kv())}},
Z:function(a){return $.eE().w(0,W.aT(a))},
T:function(a,b,c){var z,y,x
z=W.aT(a)
y=$.cG()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bW(x.$4(a,b,c,this))},
$isa9:1,
p:{
dN:function(a){var z,y
z=document.createElement("a")
y=new W.jB(z,window.location)
y=new W.bw(y)
y.cS(a)
return y},
mS:[function(a,b,c,d){H.h(a,"$isQ")
H.u(b)
H.u(c)
H.h(d,"$isbw")
return!0},"$4","ku",16,0,13],
mT:[function(a,b,c,d){var z,y,x
H.h(a,"$isQ")
H.u(b)
H.u(c)
z=H.h(d,"$isbw").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kv",16,0,13]}},
t:{"^":"b;$ti",
gC:function(a){return new W.da(a,this.gj(a),-1,[H.be(this,a,"t",0)])}},
dp:{"^":"b;a",
Z:function(a){return C.a.bm(this.a,new W.hL(a))},
T:function(a,b,c){return C.a.bm(this.a,new W.hK(a,b,c))},
$isa9:1},
hL:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isa9").Z(this.a)}},
hK:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isa9").T(this.a,this.b,this.c)}},
jC:{"^":"b;",
cT:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aG(0,new W.jD())
y=b.aG(0,new W.jE())
this.b.I(0,z)
x=this.c
x.I(0,C.Y)
x.I(0,y)},
Z:function(a){return this.a.w(0,W.aT(a))},
T:["cu",function(a,b,c){var z,y
z=W.aT(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.dl(c)
else if(y.w(0,"*::"+b))return this.d.dl(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isa9:1},
jD:{"^":"o:10;",
$1:function(a){return!C.a.w(C.w,H.u(a))}},
jE:{"^":"o:10;",
$1:function(a){return C.a.w(C.w,H.u(a))}},
jO:{"^":"jC;e,a,b,c,d",
T:function(a,b,c){if(this.cu(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c9(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
dY:function(){var z,y,x,w,v
z=P.d
y=P.cl(C.v,z)
x=H.r(C.v,0)
w=H.m(new W.jP(),{func:1,ret:z,args:[x]})
v=H.j(["TEMPLATE"],[z])
y=new W.jO(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cT(null,new H.hv(C.v,w,[x,z]),v,null)
return y}}},
jP:{"^":"o:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jM:{"^":"b;",
Z:function(a){var z=J.C(a)
if(!!z.$isdt)return!1
z=!!z.$isI
if(z&&W.aT(a)==="foreignObject")return!1
if(z)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.cn(b,"on"))return!1
return this.Z(a)},
$isa9:1},
da:{"^":"b;a,b,c,0d,$ti",
sbd:function(a){this.d=H.B(a,H.r(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbd(J.bh(this.a,z))
this.c=z
return!0}this.sbd(null)
this.c=y
return!1},
gB:function(a){return this.d},
$isaV:1},
iO:{"^":"b;a",$isM:1,$isdI:1,p:{
iP:function(a){if(a===window)return H.h(a,"$isdI")
else return new W.iO(a)}}},
a9:{"^":"b;"},
jB:{"^":"b;a,b",$ismz:1},
e0:{"^":"b;a",
aS:function(a){new W.jZ(this).$2(a,null)},
a2:function(a,b){if(b==null)J.cN(a)
else J.bD(b,a)},
de:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f8(a)
x=J.c9(y.gd_(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bk(a)}catch(t){H.a5(t)}try{u=W.aT(a)
this.dd(H.h(a,"$isQ"),b,z,v,u,H.h(y,"$isK"),H.u(x))}catch(t){if(H.a5(t) instanceof P.aF)throw t
else{this.a2(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dd:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a2(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a2(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.a2(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.j(z.slice(0),[H.r(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.T(a,J.fm(v),w.a0(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.a0(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a0(z,v)
w.d7(z,v)}}if(!!J.C(a).$isdz)this.aS(a.content)},
$islS:1},
jZ:{"^":"o:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.de(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a2(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fa(z)}catch(w){H.a5(w)
v=H.h(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bD(u,v)}else J.bD(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isv")}}},
iN:{"^":"f+fN;"},
iQ:{"^":"f+q;"},
iR:{"^":"iQ+t;"},
iS:{"^":"f+q;"},
iT:{"^":"iS+t;"},
iZ:{"^":"f+q;"},
j_:{"^":"iZ+t;"},
jc:{"^":"f+q;"},
jd:{"^":"jc+t;"},
jl:{"^":"f+S;"},
jm:{"^":"f+S;"},
jn:{"^":"f+q;"},
jo:{"^":"jn+t;"},
jp:{"^":"f+q;"},
jq:{"^":"jp+t;"},
jt:{"^":"f+q;"},
ju:{"^":"jt+t;"},
jA:{"^":"f+S;"},
dV:{"^":"M+q;"},
dW:{"^":"dV+t;"},
jF:{"^":"f+q;"},
jG:{"^":"jF+t;"},
jJ:{"^":"f+S;"},
jQ:{"^":"f+q;"},
jR:{"^":"jQ+t;"},
dZ:{"^":"M+q;"},
e_:{"^":"dZ+t;"},
jV:{"^":"f+q;"},
jW:{"^":"jV+t;"},
k0:{"^":"f+q;"},
k1:{"^":"k0+t;"},
k2:{"^":"f+q;"},
k3:{"^":"k2+t;"},
k4:{"^":"f+q;"},
k5:{"^":"k4+t;"},
k6:{"^":"f+q;"},
k7:{"^":"k6+t;"},
k8:{"^":"f+q;"},
k9:{"^":"k8+t;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.Y(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
kl:function(a,b){var z={}
a.E(0,new P.km(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c5(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fT:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c5(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c5(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
km:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
je:{"^":"b;",
dP:function(){return Math.random()}},
b0:{"^":"b;a_:a>,U:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.aN(b,"$isb0",[P.G],null)&&this.a==J.bF(b)&&this.b==b.gU(b)},
gA:function(a){var z,y,x
z=J.ak(this.a)
y=J.ak(this.b)
y=P.dO(P.dO(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jv:{"^":"b;"},
U:{"^":"jv;$ti"}}],["","",,P,{"^":"",fw:{"^":"f;",$isfw:1,"%":"SVGAnimatedLength"},l9:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},la:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lb:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lc:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},ld:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},le:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lf:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lg:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lh:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},ls:{"^":"bn;0n:height=,0m:width=","%":"SVGForeignObjectElement"},ha:{"^":"bn;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bn:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lA:{"^":"bn;0n:height=,0m:width=","%":"SVGImageElement"},aX:{"^":"f;",$isaX:1,"%":"SVGLength"},lG:{"^":"jg;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(b)
H.h(c,"$isaX")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.aX]},
$isl:1,
$asl:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$ast:function(){return[P.aX]},
"%":"SVGLengthList"},lH:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b_:{"^":"f;",$isb_:1,"%":"SVGNumber"},lT:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(b)
H.h(c,"$isb_")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b_]},
$isl:1,
$asl:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$ast:function(){return[P.b_]},
"%":"SVGNumberList"},lY:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},m_:{"^":"f;0j:length=","%":"SVGPointList"},m1:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},m2:{"^":"ha;0n:height=,0m:width=","%":"SVGRectElement"},dt:{"^":"I;",$isdt:1,"%":"SVGScriptElement"},md:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(b)
H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"Q;",
M:function(a,b,c,d){var z,y,x,w,v,u
z=H.j([],[W.a9])
C.a.l(z,W.dN(null))
C.a.l(z,W.dY())
C.a.l(z,new W.jM())
c=new W.e0(new W.dp(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dB(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a4(w)
u=z.ga9(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.H(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},me:{"^":"bn;0n:height=,0m:width=","%":"SVGSVGElement"},b3:{"^":"f;",$isb3:1,"%":"SVGTransform"},mn:{"^":"jY;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.S(a,b)},
i:function(a,b,c){H.i(b)
H.h(c,"$isb3")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
S:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b3]},
$isl:1,
$asl:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$ast:function(){return[P.b3]},
"%":"SVGTransformList"},mB:{"^":"bn;0n:height=,0m:width=","%":"SVGUseElement"},jf:{"^":"f+q;"},jg:{"^":"jf+t;"},jr:{"^":"f+q;"},js:{"^":"jr+t;"},jK:{"^":"f+q;"},jL:{"^":"jK+t;"},jX:{"^":"f+q;"},jY:{"^":"jX+t;"}}],["","",,P,{"^":"",af:{"^":"b;",$isl:1,
$asl:function(){return[P.ah]},
$isa:1,
$asa:function(){return[P.ah]},
$isiu:1}}],["","",,P,{"^":"",kS:{"^":"f;0j:length=","%":"AudioBuffer"},kT:{"^":"iL;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.j([],[P.d])
this.E(a,new P.fy(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.c(P.y("Not supported"))},
$asS:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"AudioParamMap"},fy:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kU:{"^":"M;0j:length=","%":"AudioTrackList"},fz:{"^":"M;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lV:{"^":"fz;0j:length=","%":"OfflineAudioContext"},iL:{"^":"f+S;"}}],["","",,P,{"^":"",fB:{"^":"f;",$isfB:1,"%":"WebGLBuffer"},h8:{"^":"f;",$ish8:1,"%":"WebGLFramebuffer"},hZ:{"^":"f;",$ishZ:1,"%":"WebGLProgram"},m3:{"^":"f;",
bk:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindFramebuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bv:function(a,b){return a.clear(b)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
aj:function(a){return P.a_(a.getContextAttributes())},
aJ:function(a){return a.getError()},
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bM:function(a,b){return a.linkProgram(b)},
bT:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aF:function(a,b,c,d,e,f,g,h,i,j){this.aA(a,b,c,d,e,f,g)
return},
bW:function(a,b,c,d,e,f,g){return this.aF(a,b,c,d,e,f,g,null,null,null)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},m4:{"^":"f;",
dq:function(a,b){return a.beginTransformFeedback(b)},
dt:function(a,b){return a.bindVertexArray(b)},
dD:function(a){return a.createVertexArray()},
dF:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dG:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dH:function(a){return a.endTransformFeedback()},
e_:function(a,b,c,d){this.di(a,b,H.z(c,"$isa",[P.d],"$asa"),d)
return},
di:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e0:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bk:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bq:function(a,b,c){return a.bindFramebuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bv:function(a,b){return a.clear(b)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
aj:function(a){return P.a_(a.getContextAttributes())},
aJ:function(a){return a.getError()},
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bM:function(a,b){return a.linkProgram(b)},
bT:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aF:function(a,b,c,d,e,f,g,h,i,j){this.aA(a,b,c,d,e,f,g)
return},
bW:function(a,b,c,d,e,f,g){return this.aF(a,b,c,d,e,f,g,null,null,null)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"},ia:{"^":"f;",$isia:1,"%":"WebGLShader"},iq:{"^":"f;",$isiq:1,"%":"WebGLTexture"},iv:{"^":"f;",$isiv:1,"%":"WebGLUniformLocation"},iA:{"^":"f;",$isiA:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ma:{"^":"jI;",
gj:function(a){return a.length},
h:function(a,b){H.i(b)
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a_(this.d4(a,b))},
i:function(a,b,c){H.i(b)
H.h(c,"$isK")
throw H.c(P.y("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
d4:function(a,b){return a.item(b)},
$asq:function(){return[[P.K,,,]]},
$isl:1,
$asl:function(){return[[P.K,,,]]},
$isa:1,
$asa:function(){return[[P.K,,,]]},
$ast:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},jH:{"^":"f+q;"},jI:{"^":"jH+t;"}}],["","",,G,{"^":"",
iE:function(a){var z,y,x,w
z=H.j(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a4(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bB(a,b)
z.aU(a,y,c)
z.bx(a,y)
x=H.bW(z.aO(a,y,35713))
if(x!=null&&!x){w=z.aN(a,y)
P.aC("E:Compilation failed:")
P.aC("E:"+G.iE(c))
P.aC("E:Failure:")
P.aC(C.i.G("E:",w))
throw H.c(w)}return y},
db:function(a,b){var z,y,x
H.z(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.e.i(b,z,J.bF(a[y]))
if(y>=a.length)return H.n(a,y)
C.e.i(b,z+1,J.c8(a[y]))
z+=2
if(y>=a.length)return H.n(a,y)
x=J.cL(a[y])
if(z>=b.length)return H.n(b,z)
b[z]=x}return b},
h5:function(a,b){var z,y
H.z(a,"$isa",[T.A],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.e.i(b,z,J.bF(a[y]))
if(y>=a.length)return H.n(a,y)
C.e.i(b,z+1,J.c8(a[y]))}return b},
h6:function(a,b){var z,y,x,w,v
H.z(a,"$isa",[T.aI],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.e.i(b,z,J.bF(a[y]))
if(y>=a.length)return H.n(a,y)
C.e.i(b,z+1,J.c8(a[y]))
x=z+2
if(y>=a.length)return H.n(a,y)
w=J.cL(a[y])
v=b.length
if(x>=v)return H.n(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.n(a,y)
w=J.fc(a[y])
if(z>=v)return H.n(b,z)
b[z]=w}return b},
h4:function(a,b){var z,y
H.z(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.i(b,z,J.bh(a[y],0))
if(y>=a.length)return H.n(a,y)
C.o.i(b,z+1,J.bh(a[y],1))
if(y>=a.length)return H.n(a,y)
C.o.i(b,z+2,J.bh(a[y],2))
if(y>=a.length)return H.n(a,y)
C.o.i(b,z+3,J.bh(a[y],3))}return b},
ja:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aY(z,[H.r(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.E]],v=[P.ah],u=[T.aI],t=[T.p],s=[T.A];y.u();){r=y.d
if(!x.ag(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ed>0)H.c3("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.a1(r,G.h5(H.bC(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a1(r,G.db(H.bC(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a1(r,G.h6(H.bC(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a1(r,new Float32Array(H.bS(H.bC(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a1(r,G.h4(H.bC(q,"$isa",w,"$asa"),null),4)
break}}},
aZ:{"^":"b;"},
b4:{"^":"aZ;d,a,b,c",
b_:function(){return this.d},
k:function(a){var z,y,x,w
z=H.j(["{"+new H.dE(H.kr(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.aY(y,[H.r(y,0)]),x=x.gC(x);x.u();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a4(z,"\n")}},
fC:{"^":"dv;"},
fF:{"^":"b;0a,b",
bK:function(a,b,c){J.f5(this.a,b)
if(c>0)J.fs(this.a,b,c)},
cb:function(a,b,c,d,e,f,g,h){J.c4(this.a,34962,b)
J.ft(this.a,c,d,e,!1,g,h)}},
h7:{"^":"b;a,b,c,d,e"},
h3:{"^":"b;"},
d9:{"^":"b;a,b,c,d"},
h9:{"^":"b;a,b,c,d,e",
aY:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.j([],[T.A]))
break
case"vec3":this.e.i(0,a,H.j([],[T.p]))
break
case"vec4":this.e.i(0,a,H.j([],[T.aI]))
break
case"float":this.e.i(0,a,H.j([],[P.ah]))
break
case"uvec4":this.e.i(0,a,H.j([],[[P.a,P.E]]))
break}},
cA:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.d9(z,z+1,z+2,z+3))},
ab:function(a){var z,y,x,w
H.z(a,"$isa",[T.p],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.p(new Float32Array(3))
w.K(x)
C.a.l(z,w)}},
cw:function(a,b){var z,y,x,w,v,u
z=[T.A]
H.z(b,"$isa",z,"$asa")
y=H.z(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.A(v))}},
cz:function(a,b){var z,y,x,w,v
z=[T.p]
H.z(b,"$isa",z,"$asa")
y=H.z(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.p(new Float32Array(3))
v.K(w)
z.l(y,v)}},
cF:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.j(y,[P.E])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.i(x,w,u.ge2(u))
C.a.i(x,w+1,u.ge3(u))
C.a.i(x,w+2,u.ge4(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){t=z[v]
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
z=H.j(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.aY(y,[H.r(y,0)]),x=x.gC(x);x.u();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a4(z," ")}},
dC:{"^":"b;a,b,c"},
dA:{"^":"b;a,b,c",p:{
dB:function(a,b,c){return new G.dA(a,b,c)}}},
dl:{"^":"b4;d,a,b,c"},
hx:{"^":"aZ;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sas:function(a){this.cx=H.z(a,"$isa",[P.E],"$asa")},
aX:function(a,b,c){var z,y
C.i.ao(a,0)
H.h(b,"$isaf")
J.eN(this.cy,a,b)
z=this.d
y=this.r.h(0,a)
J.c4(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cG:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a1:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.b.cv(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c6(x.a))
this.aX(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bE(x.a,this.e)
x.bK(0,v,z?1:0)
x.cb(0,y.h(0,a),v,w.aZ(),5126,!1,0,0)},
ab:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c6(y.a))
this.ch=a
this.aX("aPosition",a,3)
x=$.a6().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bE(y.a,this.e)
y.bK(0,w,0)
y.cb(0,z.h(0,"aPosition"),w,x.aZ(),5126,!1,0,0)},
k:function(a){var z,y,x,w,v
z=this.cx
y=H.j(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=J.k(z),w=J.aQ(x.gF(z));w.u();){v=w.gB(w)
C.a.l(y,H.e(v)+":"+H.e(J.aE(x.h(z,v))))}return"MESH["+this.a+"] "+C.a.a4(y,"  ")},
p:{
dm:function(a,b,c,d){var z=P.d
return new G.hx(b,J.eZ(b.a),c,P.Y(z,P.b),d,0,-1,P.Y(z,P.af),"meshdata:"+a,!1,!0)}}},
hP:{"^":"b4;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cB:function(a,b){var z
if(typeof a!=="number")return a.e1()
if(typeof b!=="number")return H.aB(b)
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
b_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.p(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.K(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.C(t)
x=!!y.$isaI
q=x?t.gcd(t):1
if(!!y.$isp){p=t.ga_(t)
s=t.gU(t)
r=t.gai(t)
t=p}else if(x){p=t.ga_(t)
s=t.gU(t)
r=t.gai(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aB(t)
x=z[4]
if(typeof s!=="number")return H.aB(s)
w=z[8]
if(typeof r!=="number")return H.aB(r)
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
c.K(this.db)
c.bN(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
l7:{"^":"b;"},
i4:{"^":"aZ;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cK:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cM(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cM(w.a,v,t))}},
cN:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.j([],[P.d])
x=H.j([],[P.d])
for(y=new H.aY(y,[H.r(y,0)]),y=y.gC(y);y.u();){w=y.d
if(!z.ag(0,w))C.a.l(x,w)}for(z=this.x,z=P.ji(z,z.r,H.r(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(b,"$isK",[P.d,P.b],"$asK")
z=Date.now()
for(y=new H.aY(b,[H.r(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cH(t,0)){case 117:if(w.ag(0,t)){s=b.h(0,t)
if(v.ag(0,t))H.c3("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.a6().h(0,t)
if(r==null)H.W("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.i(s)
J.ca(x.a,q,s)}else if(!!J.C(s).$ishf)J.fq(x.a,q,s)
break
case"float":if(r.c===0){H.eb(s)
J.fo(x.a,q,s)}else if(!!J.C(s).$isaf)J.fp(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.ad(s,"$isa1").a
J.cT(x.a,q,!1,t)}else if(!!J.C(s).$isaf)J.cT(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.ad(s,"$isbs").a
J.cS(x.a,q,!1,t)}else if(!!J.C(s).$isaf)J.cS(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cR(p,q,H.ad(s,"$isaI").a)
else J.cR(p,q,H.h(s,"$isaf"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cQ(p,q,H.ad(s,"$isp").a)
else J.cQ(p,q,H.h(s,"$isaf"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cP(p,q,H.ad(s,"$isA").a)
else J.cP(p,q,H.h(s,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aB(t)
J.cI(x.a,33984+t)
t=H.ad(s,"$iscr").b
J.bi(x.a,3553,t)
t=this.ch
J.ca(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.G()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aB(t)
J.cI(x.a,33984+t)
t=H.ad(s,"$iscr").b
J.bi(x.a,34067,t)
t=this.ch
J.ca(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.G()
this.ch=t+1
break
default:H.c3("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aj(s,!0)
p=x.a
if(t)J.bj(p,2929)
else J.c7(p,2929)
break
case"cStencilFunc":H.ad(s,"$isdC")
t=s.a
p=x.a
if(t===1281)J.c7(p,2960)
else{J.bj(p,2960)
p=s.b
o=s.c
J.fk(x.a,t,p,o)}break
case"cDepthWrite":H.bW(s)
J.f_(x.a,s)
break
case"cBlendEquation":H.ad(s,"$isdA")
t=s.a
p=x.a
if(t===1281)J.c7(p,3042)
else{J.bj(p,3042)
p=s.b
o=s.c
J.eT(x.a,p,o)
J.eS(x.a,t)}break}++u
break}}n=P.fY(0,0,0,Date.now()-new P.bI(z,!1).a,0,0)
""+u
n.k(0)},
cE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.z(b,"$isa",[G.b4],"$asa")
Date.now()
z=this.d
J.fr(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b4()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.N)(b),++x){w=b[x]
this.cQ(w.a,w.b_())}y=this.Q
y.a3(0)
for(v=J.aQ(J.f9(a.cy));v.u();)y.l(0,v.gB(v))
u=this.cN()
if(u.length!==0)P.aC("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bE(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cG()
s=a.Q
r=a.z
if(t)J.eQ(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f3(q,y,v,s,0,r)
else J.f2(q,y,v,s,0)}else{s=z.a
if(r>1)J.f1(s,y,0,v,r)
else J.f0(s,y,0,v)}if(t)J.f6(z.a)},
p:{
bO:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.z(c.f,"$isa",[z],"$asa")
u=J.eX(b.a)
t=G.dL(b.a,35633,x)
J.cJ(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cJ(b.a,u,s)
if(v.length>0)J.fn(b.a,u,v,35980)
J.fh(b.a,u)
if(!H.bW(J.fg(b.a,u,35714)))H.W(J.ff(b.a,u))
z=new G.i4(b,c,d,u,P.cl(c.c,z),P.Y(z,P.b),P.Y(z,z),y,a,!1,!0)
z.cK(a,b,c,d)
return z}}},
D:{"^":"b;a,b,c",
aZ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ib:{"^":"b;a,0b,c,d,e,f,r,x",
aa:function(a){var z,y,x,w,v
H.z(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.ak(y)},
P:function(a){var z,y,x
H.z(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.ak(y)},
W:function(a){var z,y
H.z(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ak(z)},
cL:function(a,b){this.b=this.cR(!0,H.z(a,"$isa",[P.d],"$asa"),b)},
R:function(a){return this.cL(a,null)},
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.z(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.j(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.I(w,b)
C.a.l(w,"}")
return C.a.a4(w,"\n")},
p:{
ar:function(a){var z,y
z=P.d
y=[z]
return new G.ib(a,H.j([],y),H.j([],y),H.j([],y),H.j([],y),0,P.Y(z,P.E))}}},
dv:{"^":"aZ;",
aH:function(){var z,y,x
z=this.f
y=this.d.a
x=z.a
x[0]=y[2]
x[1]=y[6]
x[2]=y[10]
return z},
aQ:function(){var z,y,x
z=this.r
y=this.d.a
x=z.a
x[0]=y[1]
x[1]=y[5]
x[2]=y[9]
return z},
aT:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
ir:{"^":"b;a,b,c,d,e,f,r"},
cr:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hd:{"^":"cr;f,a,b,c,d,e"}}],["","",,R,{"^":"",
iz:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eC().dP()
if(v>=w)return H.n(x,v)
x[v]=(u-0.5)*c}y=G.dm(z,a.d,0,a.e.x)
y.ab(x)
return y},
jk:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.iV("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).an(y,"float")
y.setProperty(x,"left","")
x=C.z.an(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.t.H(z,v)}return z},
i3:{"^":"i2;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dT:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aC("size change "+H.e(y)+" "+H.e(x))
this.dx.cB(y,x)
this.z=y
this.Q=x},"$1","gdS",4,0,25]},
ih:{"^":"b;",
cM:function(a,b,c){var z,y
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
y.H(z,this.b)
y.H(z,this.d)
y.H(z,this.c)}},
ii:{"^":"ih;e,f,a,b,c,d",
cP:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dZ(y,2)+" fps"
C.t.ck(this.c,b)
x=C.b.Y(30*C.A.du(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.t.H(z,w)},
cO:function(a){return this.cP(a,"")}}}],["","",,A,{"^":"",
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.z(e,"$isa",[G.b4],"$asa")
z=b.dx
z.K(c)
y=b.d
z.bN(0,y)
x=b.cx
H.e(b)
w=C.a.gdN(e)
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
v.dz(new T.bs(u))
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
C.a.l(e,b.ch)
a.cE(x,e,d)
if(0>=e.length)return H.n(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.n(y,r)
A.ec(a,y[r],z,d,e)}},
cn:{"^":"dv;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
bt:{"^":"aZ;d,e,f,a,b,c"},
i2:{"^":"aZ;",
cJ:function(a,b,c){if(this.d==null)this.d=new G.h7(this.e,null,null,null,null)},
cD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eR(v.a,36160,z)
J.fu(v.a,this.x,this.y,x,w)
if(y!==0)J.eU(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b4(P.Y(x,w),"transforms",!1,!0))
r=new T.a1(new Float32Array(16))
r.O()
for(v=t.f,q=v.length,p=0;p<v.length;v.length===q||(0,H.N)(v),++p){o=v[p]
A.ec(t.d,o,r,a,s)}if(0>=s.length)return H.n(s,-1)
s.pop()}},
cC:function(){return this.cD(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fP:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.p(new Float32Array(3))
x.q(z,y,b2)
w=new T.p(new Float32Array(3))
w.q(b0,y,b2)
v=new T.p(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.p(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.p(new Float32Array(3))
s.q(z,y,t)
r=new T.p(new Float32Array(3))
r.q(z,b1,t)
q=new T.p(new Float32Array(3))
q.q(b0,b1,t)
p=new T.p(new Float32Array(3))
p.q(b0,y,t)
o=new T.p(new Float32Array(3))
o.q(z,b1,t)
n=new T.p(new Float32Array(3))
n.q(z,b1,b2)
m=new T.p(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.p(new Float32Array(3))
l.q(b0,b1,t)
k=new T.p(new Float32Array(3))
k.q(b0,y,b2)
j=new T.p(new Float32Array(3))
j.q(z,y,b2)
i=new T.p(new Float32Array(3))
i.q(z,y,t)
h=new T.p(new Float32Array(3))
h.q(b0,y,t)
g=new T.p(new Float32Array(3))
g.q(b0,y,t)
f=new T.p(new Float32Array(3))
f.q(b0,b1,t)
e=new T.p(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.p(new Float32Array(3))
d.q(b0,y,b2)
c=new T.p(new Float32Array(3))
c.q(z,y,t)
b=new T.p(new Float32Array(3))
b.q(z,y,b2)
y=new T.p(new Float32Array(3))
y.q(z,b1,b2)
a=new T.p(new Float32Array(3))
a.q(z,b1,t)
t=[T.p]
a0=H.j([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.A(new Float32Array(2))
z.v(a7,a9)
y=new T.A(new Float32Array(2))
y.v(a6,a9)
x=new T.A(new Float32Array(2))
x.v(a6,a8)
w=new T.A(new Float32Array(2))
w.v(a7,a8)
v=new T.A(new Float32Array(2))
v.v(a6,a9)
u=new T.A(new Float32Array(2))
u.v(a6,a8)
s=new T.A(new Float32Array(2))
s.v(a7,a8)
r=new T.A(new Float32Array(2))
r.v(a7,a9)
q=new T.A(new Float32Array(2))
q.v(a7,a8)
p=new T.A(new Float32Array(2))
p.v(a7,a9)
o=new T.A(new Float32Array(2))
o.v(a6,a9)
n=new T.A(new Float32Array(2))
n.v(a6,a8)
m=new T.A(new Float32Array(2))
m.v(a6,a8)
l=new T.A(new Float32Array(2))
l.v(a7,a8)
k=new T.A(new Float32Array(2))
k.v(a7,a9)
j=new T.A(new Float32Array(2))
j.v(a6,a9)
i=new T.A(new Float32Array(2))
i.v(a6,a9)
h=new T.A(new Float32Array(2))
h.v(a6,a8)
g=new T.A(new Float32Array(2))
g.v(a7,a8)
f=new T.A(new Float32Array(2))
f.v(a7,a9)
e=new T.A(new Float32Array(2))
e.v(a7,a9)
d=new T.A(new Float32Array(2))
d.v(a6,a9)
c=new T.A(new Float32Array(2))
c.v(a6,a8)
b=new T.A(new Float32Array(2))
b.v(a7,a8)
a1=H.j([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.A])
a2=new G.h9(!1,H.j([],[G.h3]),H.j([],[G.d9]),H.j([],t),P.Y(P.d,[P.a,,]))
a2.aY("aTexUV")
a2.aY("aNormal")
a2.cA(6)
a2.ab(a0)
a2.cw("aTexUV",a1)
for(a3=0;z=$.eD(),a3<6;++a3){a4=z[a3]
a2.cz("aNormal",H.j([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",hm:{"^":"b;a,b,c",
cH:function(a){var z,y
a=document
z=W.aW
y={func:1,ret:-1,args:[z]}
W.ag(a,"keydown",H.m(new D.ho(this),y),!1,z)
W.ag(a,"keyup",H.m(new D.hp(this),y),!1,z)},
p:{
hn:function(a){var z=P.E
z=new D.hm(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cH(a)
return z}}},ho:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaW")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},hp:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaW")
z=this.a
z.a.a5(0,a.which)
z.c.l(0,a.which)}},hA:{"^":"b;a,b,c,d,e,f,r,x",
cI:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbQ(a)
x=H.r(y,0)
W.ag(y.a,y.b,H.m(new D.hC(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbP(a)
y=H.r(x,0)
W.ag(x.a,x.b,H.m(new D.hD(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbR(a)
x=H.r(y,0)
W.ag(y.a,y.b,H.m(new D.hE(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbS(a)
x=H.r(z,0)
W.ag(z.a,z.b,H.m(new D.hF(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hB:function(a){var z=P.E
z=new D.hA(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cI(a)
return z}}},hC:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isT")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.i(y.gbO(a).a)
z.x=H.i(y.gbO(a).b)
z.d=a.movementX
z.e=a.movementY}},hD:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isT")
a.preventDefault()
P.aC("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hE:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isT")
a.preventDefault()
z=this.a
z.a.a5(0,a.button)
z.c.l(0,a.button)}},hF:{"^":"o:26;a",
$1:function(a){H.h(a,"$isaJ")
a.preventDefault()
this.a.f=H.i(C.ae.gdE(a))}},hN:{"^":"fC;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bz:function(a){var z,y
z=C.e.dJ(H.z(a,"$isl",[P.b],"$asl"),0,new A.kt(),P.E)
if(typeof z!=="number")return H.aB(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kt:{"^":"o:27;",
$2:function(a,b){var z,y
H.i(a)
z=J.ak(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bs:{"^":"b;a",
K:function(a){var z,y
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
h:function(a,b){return C.e.h(this.a,H.i(b))},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bs){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.bz(this.a)},
N:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.n(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.n(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.n(y,x)
z[2]=y[x]
return new T.p(z)},
dz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.K(a)
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
K:function(a){var z,y
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
h:function(a,b){return C.e.h(this.a,H.i(b))},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.bz(this.a)},
N:function(a){var z,y,x
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
return new T.aI(z)},
a6:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=Math.sqrt(a5.gbL())
y=a5.a
x=y[0]/z
w=y[1]/z
v=y[2]/z
u=Math.cos(a6)
t=Math.sin(a6)
s=1-u
r=x*x*s+u
q=v*t
p=x*w*s-q
o=w*t
n=x*v*s+o
m=w*x*s+q
l=w*w*s+u
q=x*t
k=w*v*s-q
j=v*x*s-o
i=v*w*s+q
h=v*v*s+u
q=this.a
o=q[0]
g=q[4]
f=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
a=q[6]
a0=q[10]
a1=q[3]
a2=q[7]
a3=q[11]
q[0]=o*r+g*m+f*j
q[1]=e*r+d*m+c*j
q[2]=b*r+a*m+a0*j
q[3]=a1*r+a2*m+a3*j
q[4]=o*p+g*l+f*i
q[5]=e*p+d*l+c*i
q[6]=b*p+a*l+a0*i
q[7]=a1*p+a2*l+a3*i
q[8]=o*n+g*k+f*h
q[9]=e*n+d*k+c*h
q[10]=b*n+a*k+a0*h
q[11]=a1*n+a2*k+a3*h},
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
bN:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},A:{"^":"b;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bz(this.a)},
h:function(a,b){return C.e.h(this.a,H.i(b))},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga_:function(a){return this.a[0]},
gU:function(a){return this.a[1]}},p:{"^":"b;a",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
K:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bz(this.a)},
h:function(a,b){return C.e.h(this.a,H.i(b))},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbL:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aD:function(a){var z,y,x
z=Math.sqrt(this.gbL())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aB:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ga_:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gai:function(a){return this.a[2]},
p:{
b6:function(a,b,c){var z=new T.p(new Float32Array(3))
z.q(a,b,c)
return z}}},aI:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aI){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bz(this.a)},
h:function(a,b){return C.e.h(this.a,H.i(b))},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ga_:function(a){return this.a[0]},
gU:function(a){return this.a[1]},
gai:function(a){return this.a[2]},
gcd:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z={}
y=document
x=C.j.cg(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ii(0,0,x,w,y.createElement("div"),R.jk("blue","gray",90,30))
u.cM(x,"blue","gray")
t=H.h(C.j.bU(y,"#webgl-canvas"),"$iscd")
s=new G.fF(t)
x=P.d
v=P.b
r=(t&&C.y).aI(t,"webgl2",P.dh(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.W(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.fd(r))
if($.ed>0)P.aC("I: "+q)
J.eV(r,0,0,0,1)
J.bj(r,2929)
J.bj(r,2884)
r=new Float32Array(3)
q=D.hn(null)
p=D.hB(t)
o=new T.a1(new Float32Array(16))
o.O()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hN(65,0,0,0,new T.p(r),-0.02,q,p,o,new T.p(n),new T.p(m),new T.p(l),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.a1(new Float32Array(16))
r.O()
q=new T.a1(new Float32Array(16))
q.O()
j=new G.hP(k,50,1,0.1,1000,r,q,new T.a1(new Float32Array(16)),P.Y(x,v),"perspective",!1,!0)
j.b0()
r=[A.bt]
q=H.j([],r)
i=new R.i3(t,j,null,s,q,17664,0,0,0,0,"main",!1,!0)
i.cJ("main",s,null)
i.dT(null)
p=W.R
o={func:1,ret:-1,args:[p]}
W.ag(window,"resize",H.m(i.gdS(),o),!1,p)
n=G.bO("plasma1",s,$.eI(),$.eF())
m=[G.b4]
l=H.j([j],m)
h=[A.cn]
g=H.j([],h)
f=G.bO("plasma2",s,$.eJ(),$.eG())
e=H.j([j],m)
d=H.j([],h)
c=G.bO("plasma3",s,$.eK(),$.eH())
b=H.j([j],m)
a=H.j([],h)
a0=H.j([new A.bt(n,l,g,"plasma1",!1,!0),new A.bt(f,e,d,"plasma2",!1,!0),new A.bt(c,b,a,"plasma3",!1,!0)],r)
for(a1=0;a1<3;++a1)C.a.l(q,a0[a1])
r=P.Y(x,v)
a2=new G.dl(r,"mat",!1,!0)
r.i(0,"cDepthTest",!0)
r.i(0,"cDepthWrite",!0)
r.i(0,"cBlendEquation",$.eo())
n=$.er()
r.i(0,"cStencilFunc",n)
r=a0[0].d
a3=B.fP(!0,1,0,1,0,10,10,10)
a4=G.dm("cube",r.d,4,r.e.x)
a4.ab(G.db(a3.d,null))
r=H.z(a3.cF(),"$isa",[P.E],"$asa")
l=a4.d
a4.y=J.c6(l.a)
g=a4.ch.length
if(g<768){a4.sas(new Uint8Array(H.bS(r)))
a4.Q=5121}else if(g<196608){a4.sas(new Uint16Array(H.bS(r)))
a4.Q=5123}else{a4.sas(new Uint32Array(H.bS(r)))
a4.Q=5125}J.bE(l.a,a4.e)
r=a4.y
g=a4.cx
J.c4(l.a,34963,r)
J.cK(l.a,34963,g,35048)
G.ja(a3,a4)
r=H.j([],h)
l=new Float32Array(9)
g=new T.a1(new Float32Array(16))
g.O()
f=new Float32Array(16)
e=new T.a1(f)
e.O()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a5=new T.p(a)
a6=new A.cn(a2,a4,r,new T.bs(l),g,e,new T.p(d),new T.p(c),new T.p(b),a5,a4.a,!1,!0)
a6.aT(0,0,0)
a[0]=f[0]
a[1]=f[4]
a[2]=f[8]
e.a6(0,a5,-1)
e.a6(0,a6.aQ(),-0.7)
z.a=0
if(0>=3)return H.n(a0,0)
C.a.l(a0[0].f,a6)
C.j.dj(y,"keypress",new Q.kH(z,a0,a6))
a7=H.ad(C.j.bU(y,"#myselect"),"$isdu")
a7.toString
W.ag(a7,"change",H.m(new Q.kI(z,a0,a6,a7),o),!1,p)
p=G.bO("stars",s,$.eM(),$.eL())
m=H.j([j],m)
o=H.j([],h)
r=p.d
l=$.en()
v=P.Y(x,v)
v.i(0,"cDepthTest",!0)
v.i(0,"cDepthWrite",!1)
v.i(0,"cBlendEquation",l)
v.i(0,"cStencilFunc",n)
a8=y.createElement("canvas")
a8.width=64
a8.height=64
a9=H.h(C.y.cf(a8,"2d"),"$isce")
b0=(a9&&C.r).bA(a9,32,32,1,32,32,22);(b0&&C.n).af(b0,0,"gray")
C.n.af(b0,1,"black")
a9.fillStyle=b0
C.r.dI(a9,0,0,64,64)
b0=C.r.bA(a9,32,32,1,32,32,6);(b0&&C.n).af(b0,0,"white")
C.n.af(b0,1,"gray")
a9.globalAlpha=0.9
a9.fillStyle=b0
a9.arc(32,32,4,0,6.283185307179586,!1)
a9.fill()
y=J.eY(r.a)
J.bi(r.a,3553,y)
J.fi(r.a,37440,1)
J.bi(r.a,3553,y)
J.fl(r.a,3553,0,6408,6408,5121,a8)
J.cO(r.a,3553,10240,9729)
J.cO(r.a,3553,10241,9729)
J.fe(r.a)
J.bi(r.a,3553,null)
v.i(0,"uTexture",new G.hd(a8,"Utils::Particles",y,3553,r,new G.ir(!1,!1,!1,!0,1,9729,9729)))
v.i(0,"uPointSize",1000)
a4=R.iz(p,2000,100)
y=H.j([],h)
x=new Float32Array(9)
r=new T.a1(new Float32Array(16))
r.O()
n=new T.a1(new Float32Array(16))
n.O()
l=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
C.a.l(o,new A.cn(new G.dl(v,"stars",!1,!0),a4,y,new T.bs(x),r,n,new T.p(l),new T.p(h),new T.p(g),new T.p(new Float32Array(3)),a4.a,!1,!0))
C.a.l(q,new A.bt(p,m,o,"stars",!1,!0))
z.b=0
new Q.kG(z,k,a6,a2,i,u).$1(0)},
kH:{"^":"o:12;a,b,c",
$1:function(a){var z,y,x,w
H.h(a,"$isR")
z=this.b
y=this.a
x=y.a
if(typeof x!=="number")return x.a8()
w=this.c
C.a.a5(z[C.b.a8(x,3)].f,w)
x=y.a
if(typeof x!=="number")return x.G()
C.a.l(z[C.b.a8(x+1,3)].f,w)
w=y.a
if(typeof w!=="number")return w.G()
y.a=C.b.a8(w+1,3)}},
kI:{"^":"o:12;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.b
y=this.a
x=this.c
C.a.a5(C.a.h(z,y.a).f,x)
w=this.d.selectedIndex
y.a=w
C.a.l(C.a.h(z,w).f,x)}},
kG:{"^":"o:28;a,b,c,d,e,f",
$1:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.cC(a1)
z=this.a
y=z.b
if(typeof a1!=="number")return a1.aW()
z.b=a1+0
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.aR()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.aR()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.w(0,37))x.go+=0.03
else if(u.w(0,39))x.go-=0.03
if(u.w(0,38))x.id+=0.03
else if(u.w(0,40))x.id-=0.03
if(u.w(0,33))x.fy*=0.99
else if(u.w(0,34))x.fy*=1.01
if(u.w(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.aR()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.u.dv(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
x.aT(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=x.d
u=s.a
t=x.k2.a
u[12]=u[12]+t[0]
u[13]=u[13]+t[1]
u[14]=u[14]+t[2]
q=u[12]
p=u[13]
o=u[14]
n=new T.p(new Float32Array(3))
n.q(0,1,0)
m=x.e
l=m.a
l[0]=u[12]
l[1]=u[13]
l[2]=u[14]
l=new Float32Array(3)
k=new T.p(l)
k.K(m)
l[0]=l[0]-t[0]
l[1]=l[1]-t[1]
l[2]=l[2]-t[2]
k.aD(0)
j=n.bD(k)
j.aD(0)
i=k.bD(j)
i.aD(0)
t=j.aB(m)
h=i.aB(m)
m=k.aB(m)
g=j.a
f=g[0]
e=i.a
d=e[0]
c=l[0]
b=g[1]
a=e[1]
a0=l[1]
g=g[2]
e=e[2]
l=l[2]
u[15]=1
u[14]=-m
u[13]=-h
u[12]=-t
u[11]=0
u[10]=l
u[9]=e
u[8]=g
u[7]=0
u[6]=a0
u[5]=a
u[4]=b
u[3]=0
u[2]=c
u[1]=d
u[0]=f
u[12]=q
u[13]=p
u[14]=o
s.a6(0,x.aH(),-x.k1)
v.c.a3(0)
v.b.a3(0)
w.e=0
w.d=0
w.f=0
w.c.a3(0)
w.b.a3(0)
w=this.c
v=w.d
y=-((a1-y)*0.0005)
v.a6(0,w.aH(),y)
v.a6(0,w.aQ(),y)
this.d.d.i(0,"uTime",a1/1000)
this.e.cC()
C.af.gdm(window).bY(this,-1)
this.f.cO(z.b)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.hk.prototype
if(typeof a=="boolean")return J.hj.prototype
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.bd=function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.bZ=function(a){if(a==null)return a
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.kp=function(a){if(typeof a=="number")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.kq=function(a){if(typeof a=="number")return J.bp.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.aj=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).D(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kp(a).V(a,b)}
J.bh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kD(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).h(a,b)}
J.eN=function(a,b,c){return J.bZ(a).i(a,b,c)}
J.cH=function(a,b){return J.ee(a).ao(a,b)}
J.bD=function(a,b){return J.k(a).d8(a,b)}
J.eO=function(a,b,c){return J.k(a).d9(a,b,c)}
J.cI=function(a,b){return J.k(a).bk(a,b)}
J.eP=function(a,b,c,d){return J.k(a).bl(a,b,c,d)}
J.cJ=function(a,b,c){return J.k(a).bn(a,b,c)}
J.eQ=function(a,b){return J.k(a).dq(a,b)}
J.c4=function(a,b,c){return J.k(a).bo(a,b,c)}
J.eR=function(a,b,c){return J.k(a).bq(a,b,c)}
J.bi=function(a,b,c){return J.k(a).br(a,b,c)}
J.bE=function(a,b){return J.k(a).dt(a,b)}
J.eS=function(a,b){return J.k(a).bs(a,b)}
J.eT=function(a,b,c){return J.k(a).bt(a,b,c)}
J.cK=function(a,b,c,d){return J.k(a).bu(a,b,c,d)}
J.eU=function(a,b){return J.k(a).bv(a,b)}
J.eV=function(a,b,c,d,e){return J.k(a).bw(a,b,c,d,e)}
J.eW=function(a,b){return J.kq(a).L(a,b)}
J.c5=function(a,b,c){return J.bd(a).dw(a,b,c)}
J.c6=function(a){return J.k(a).by(a)}
J.eX=function(a){return J.k(a).bz(a)}
J.eY=function(a){return J.k(a).bC(a)}
J.eZ=function(a){return J.k(a).dD(a)}
J.f_=function(a,b){return J.k(a).bE(a,b)}
J.c7=function(a,b){return J.k(a).bF(a,b)}
J.f0=function(a,b,c,d){return J.k(a).bG(a,b,c,d)}
J.f1=function(a,b,c,d,e){return J.k(a).dF(a,b,c,d,e)}
J.f2=function(a,b,c,d,e){return J.k(a).bH(a,b,c,d,e)}
J.f3=function(a,b,c,d,e,f){return J.k(a).dG(a,b,c,d,e,f)}
J.f4=function(a,b){return J.bZ(a).t(a,b)}
J.bj=function(a,b){return J.k(a).bI(a,b)}
J.f5=function(a,b){return J.k(a).bJ(a,b)}
J.f6=function(a){return J.k(a).dH(a)}
J.f7=function(a,b){return J.k(a).E(a,b)}
J.f8=function(a){return J.k(a).gdn(a)}
J.ak=function(a){return J.C(a).gA(a)}
J.aQ=function(a){return J.bZ(a).gC(a)}
J.f9=function(a){return J.k(a).gF(a)}
J.aE=function(a){return J.bd(a).gj(a)}
J.fa=function(a){return J.k(a).gdQ(a)}
J.fb=function(a){return J.k(a).gdX(a)}
J.fc=function(a){return J.c_(a).gcd(a)}
J.bF=function(a){return J.c_(a).ga_(a)}
J.c8=function(a){return J.c_(a).gU(a)}
J.cL=function(a){return J.c_(a).gai(a)}
J.c9=function(a,b){return J.k(a).a0(a,b)}
J.fd=function(a){return J.k(a).aj(a)}
J.fe=function(a){return J.k(a).aJ(a)}
J.ff=function(a,b){return J.k(a).aK(a,b)}
J.fg=function(a,b,c){return J.k(a).aL(a,b,c)}
J.cM=function(a,b,c){return J.k(a).aP(a,b,c)}
J.fh=function(a,b){return J.k(a).bM(a,b)}
J.fi=function(a,b,c){return J.k(a).bT(a,b,c)}
J.cN=function(a){return J.bZ(a).dR(a)}
J.fj=function(a,b,c){return J.k(a).cj(a,b,c)}
J.fk=function(a,b,c,d){return J.k(a).aV(a,b,c,d)}
J.fl=function(a,b,c,d,e,f,g){return J.k(a).bW(a,b,c,d,e,f,g)}
J.cO=function(a,b,c,d){return J.k(a).bX(a,b,c,d)}
J.fm=function(a){return J.ee(a).dY(a)}
J.bk=function(a){return J.C(a).k(a)}
J.fn=function(a,b,c,d){return J.k(a).e_(a,b,c,d)}
J.fo=function(a,b,c){return J.k(a).c0(a,b,c)}
J.fp=function(a,b,c){return J.k(a).c1(a,b,c)}
J.ca=function(a,b,c){return J.k(a).c2(a,b,c)}
J.fq=function(a,b,c){return J.k(a).c3(a,b,c)}
J.cP=function(a,b,c){return J.k(a).c4(a,b,c)}
J.cQ=function(a,b,c){return J.k(a).c5(a,b,c)}
J.cR=function(a,b,c){return J.k(a).c6(a,b,c)}
J.cS=function(a,b,c,d){return J.k(a).c7(a,b,c,d)}
J.cT=function(a,b,c,d){return J.k(a).c8(a,b,c,d)}
J.fr=function(a,b){return J.k(a).c9(a,b)}
J.fs=function(a,b,c){return J.k(a).e0(a,b,c)}
J.ft=function(a,b,c,d,e,f,g){return J.k(a).ca(a,b,c,d,e,f,g)}
J.fu=function(a,b,c,d,e){return J.k(a).cc(a,b,c,d,e)}
I.aO=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bG.prototype
C.y=W.cd.prototype
C.n=W.fD.prototype
C.r=W.ce.prototype
C.z=W.fM.prototype
C.t=W.fU.prototype
C.M=W.fW.prototype
C.N=W.hb.prototype
C.j=W.hc.prototype
C.O=J.f.prototype
C.a=J.bo.prototype
C.A=J.dd.prototype
C.b=J.de.prototype
C.u=J.bp.prototype
C.i=J.bq.prototype
C.V=J.br.prototype
C.e=H.hG.prototype
C.o=H.hI.prototype
C.D=W.hJ.prototype
C.E=J.hQ.prototype
C.F=W.i_.prototype
C.K=W.ip.prototype
C.x=J.b5.prototype
C.ae=W.aJ.prototype
C.af=W.iC.prototype
C.L=new P.je()
C.f=new P.jw()
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.W=H.j(I.aO(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.j(I.aO(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.j(I.aO([]),[P.d])
C.v=H.j(I.aO(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.j(I.aO(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.D("vec3","vertex btangents",0)
C.d=new G.D("vec3","",0)
C.a_=new G.D("vec4","delta from light",0)
C.p=new G.D("","",0)
C.G=new G.D("vec3","vertex coordinates",0)
C.a0=new G.D("vec3","vertex binormals",0)
C.H=new G.D("vec4","for wireframe",0)
C.a1=new G.D("vec4","per vertex color",0)
C.a2=new G.D("float","for normal maps",0)
C.k=new G.D("mat4","",0)
C.a4=new G.D("mat4","",4)
C.a3=new G.D("mat4","",128)
C.c=new G.D("float","",0)
C.a5=new G.D("float","",4)
C.a6=new G.D("float","depth for shadowmaps",0)
C.h=new G.D("sampler2D","",0)
C.a7=new G.D("float","for bump maps",0)
C.a8=new G.D("vec2","texture uvs",0)
C.a9=new G.D("float","time since program start in sec",0)
C.l=new G.D("vec2","",0)
C.aa=new G.D("samplerCube","",0)
C.m=new G.D("vec4","",0)
C.ab=new G.D("vec3","vertex normals",0)
C.ac=new G.D("sampler2DShadow","",0)
C.I=new G.D("vec3","per vertex color",0)
C.J=new G.D("mat3","",0)
C.ad=new G.D("vec3","vertex tangents",0)
$.a8=0
$.aR=null
$.cW=null
$.ct=!1
$.eg=null
$.e8=null
$.el=null
$.bX=null
$.c1=null
$.cA=null
$.aL=null
$.b8=null
$.b9=null
$.cu=!1
$.J=C.f
$.ae=null
$.cg=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
$.ed=0
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
I.$lazy(y,x,w)}})(["l1","eq",function(){return H.ef("_$dart_dartClosure")},"lF","cE",function(){return H.ef("_$dart_js")},"mo","es",function(){return H.aa(H.bP({
toString:function(){return"$receiver$"}}))},"mp","et",function(){return H.aa(H.bP({$method$:null,
toString:function(){return"$receiver$"}}))},"mq","eu",function(){return H.aa(H.bP(null))},"mr","ev",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mu","ey",function(){return H.aa(H.bP(void 0))},"mv","ez",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mt","ex",function(){return H.aa(H.dD(null))},"ms","ew",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"mx","eB",function(){return H.aa(H.dD(void 0))},"mw","eA",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mI","cF",function(){return P.iF()},"mZ","bg",function(){return[]},"kZ","ep",function(){return{}},"mQ","eE",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mR","cG",function(){return P.Y(P.d,P.bm)},"mb","er",function(){return new G.dC(1281,0,4294967295)},"kW","eo",function(){return G.dB(1281,1281,1281)},"kV","en",function(){return G.dB(32774,770,769)},"mX","a6",function(){return P.dh(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.I,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.D)},"mC","eC",function(){return C.L},"n9","eM",function(){var z,y
z=G.ar("PointSpritesV")
y=[P.d]
z.aa(H.j(["aPosition"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.R(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"n8","eL",function(){var z,y
z=G.ar("PointSpritesF")
y=[P.d]
z.P(H.j(["uTexture"],y))
z.R(H.j(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mN","eD",function(){return H.j([T.b6(0,0,1),T.b6(0,0,-1),T.b6(0,1,0),T.b6(0,-1,0),T.b6(1,0,0),T.b6(-1,0,0)],[T.p])},"n5","eI",function(){var z,y
z=G.ar("Plasma1V")
y=[P.d]
z.aa(H.j(["aPosition","aTexUV"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.W(H.j(["vTexUV"],y))
z.R(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"n2","eF",function(){var z,y
z=G.ar("Plasma1F")
y=[P.d]
z.W(H.j(["vTexUV"],y))
z.P(H.j(["uTime"],y))
z.R(H.j(["    #define PI 3.1415926535897932384626433832795\n    float u_time = uTime * 5.0;\n    vec2 u_k = vec2(10.0,10.0);\n\n    float v = 0.0;\n    vec2 c = vTexUV * u_k - u_k/2.0;\n    v += sin((c.x+u_time));\n    v += sin((c.y+u_time)/2.0);\n    v += sin((c.x+c.y+u_time)/2.0);\n    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));\n    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);\n    v = v / 2.0;\n    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));\n    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);\n    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);\n    oFragColor = vec4(col*.5 + .5, 1.0);\n"],y))
return z},"n6","eJ",function(){var z,y
z=G.ar("Plasma2V")
y=[P.d]
z.aa(H.j(["aPosition","aTexUV"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.W(H.j(["vTexUV"],y))
z.R(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"n3","eG",function(){var z,y
z=G.ar("Plasma2F")
y=[P.d]
z.W(H.j(["vTexUV"],y))
z.P(H.j(["uTime"],y))
z.R(H.j(["    float x = vTexUV.x;\n    float y = vTexUV.y;\n    float v = sin(x * cos(uTime/15.0) * 120.0) +\n              cos(y * sin(uTime/10.0) * 120.0) +\n              sin(sqrt(y * y + x * x) * 40.0);\n    oFragColor = vec4(1, v,1,1);\n  "],y))
return z},"n7","eK",function(){var z,y
z=G.ar("Plasma3V")
y=[P.d]
z.aa(H.j(["aPosition","aTexUV"],y))
z.P(H.j(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.W(H.j(["vTexUV"],y))
z.R(H.j(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"n4","eH",function(){var z,y
z=G.ar("Plasma3F")
y=[P.d]
z.W(H.j(["vTexUV"],y))
z.P(H.j(["uTime"],y))
z.R(H.j(["    float x = vTexUV.x*1000.0; // gl_FragCoord.x;\n    float y = vTexUV.y*1000.0; // gl_FragCoord.y;\n    float time = uTime;\n    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;\n    float mov1 = y / 720.0 / 0.2 + time;\n    float mov2 = x / 1280.0 / 0.2;\n    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);\n    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));\n    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));\n    oFragColor = vec4( c1,c2,c3,1.0);\n  "],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.P,args:[W.a9]},{func:1,ret:P.P,args:[P.d]},{func:1,ret:P.F,args:[W.aW]},{func:1,ret:P.F,args:[W.R]},{func:1,ret:P.P,args:[W.Q,P.d,P.d,W.bw]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a2]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.P,args:[W.v]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.G]},{func:1,args:[W.R]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.F,args:[W.aJ]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kO(d||a)
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
Isolate.aO=a.aO
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.ei,[])
else Q.ei([])})})()
//# sourceMappingURL=plasma.dart.js.map
