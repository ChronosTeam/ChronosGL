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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cM(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",mP:{"^":"c;a"}}],["","",,J,{"^":"",
cR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cP==null){H.lu()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cG("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cT()]
if(v!=null)return v
v=H.lz(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cT(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
i:{"^":"c;",
C:function(a,b){return a===b},
gv:function(a){return H.bc(a)},
j:["cw",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hW:{"^":"i;",
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isW:1},
hX:{"^":"i;",
C:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
$isD:1},
cv:{"^":"i;",
gv:function(a){return 0},
j:["cA",function(a){return String(a)}]},
iA:{"^":"cv;"},
bf:{"^":"cv;"},
bu:{"^":"cv;",
j:function(a){var z=a[$.eU()]
if(z==null)return this.cA(a)
return"JavaScript function for "+H.e(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbp:1},
br:{"^":"i;$ti",
l:function(a,b){H.z(b,H.o(a,0))
if(!!a.fixed$length)H.R(P.B("add"))
a.push(b)},
I:function(a,b){var z,y
H.u(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.R(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
bs:function(a,b){var z,y
H.m(b,{func:1,ret:P.W,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aN(a))}return!1},
cr:function(a,b){if(!!a.immutable$list)H.R(P.B("sort"))
H.iZ(a,J.l0(),H.o(a,0))},
ah:function(a){return this.cr(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.X(a[z],b))return!0
return!1},
j:function(a){return P.ct(a,"[","]")},
gw:function(a){return new J.h9(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.bc(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.an(a,b))
return a[b]},
h:function(a,b,c){H.r(b)
H.z(c,H.o(a,0))
if(!!a.immutable$list)H.R(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.an(a,b))
if(b>=a.length||b<0)throw H.d(H.an(a,b))
a[b]=c},
$isx:1,
$asx:I.bj,
$isl:1,
$isa:1,
p:{
hV:function(a,b){return J.cu(H.f(a,[b]))},
cu:function(a){H.bl(a)
a.fixed$length=Array
return a},
mN:[function(a,b){return J.fx(H.eB(a,"$isa1"),H.eB(b,"$isa1"))},"$2","l0",8,0,32]}},
mO:{"^":"br;$ti"},
h9:{"^":"c;a,b,c,0d,$ti",
sb5:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.N(z))
x=this.c
if(x>=y){this.sb5(null)
return!1}this.sb5(z[x]);++this.c
return!0},
$isb6:1},
bs:{"^":"i;",
N:function(a,b){var z
H.cS(b)
if(typeof b!=="number")throw H.d(H.aH(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gae(b)
if(this.gae(a)===z)return 0
if(this.gae(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gae:function(a){return a===0?1/a<0:a<0},
c4:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.B(""+a+".toInt()"))},
ds:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.B(""+a+".ceil()"))},
dt:function(a,b,c){if(this.N(b,c)>0)throw H.d(H.aH(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
e1:function(a,b){var z
if(b>20)throw H.d(P.bU(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gae(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cC:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bp(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.bp(a,b)},
bp:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.B("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bn:function(a,b){var z
if(a>0)z=this.de(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
de:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.aH(b))
return a>b},
$isa1:1,
$asa1:function(){return[P.J]},
$isao:1,
$isJ:1},
dy:{"^":"bs;",$isF:1},
dx:{"^":"bs;"},
bt:{"^":"i;",
bE:function(a,b){if(b<0)throw H.d(H.an(a,b))
if(b>=a.length)H.R(H.an(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(b>=a.length)throw H.d(H.an(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.t(b)
if(typeof b!=="string")throw H.d(P.da(b,null,null))
return a+b},
cs:function(a,b){var z=H.f(a.split(b),[P.b])
return z},
cu:function(a,b,c){var z
if(c>a.length)throw H.d(P.bU(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ct:function(a,b){return this.cu(a,b,0)},
aR:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bV(b,null,null))
if(b>c)throw H.d(P.bV(b,null,null))
if(c>a.length)throw H.d(P.bV(c,null,null))
return a.substring(b,c)},
cv:function(a,b){return this.aR(a,b,null)},
e0:function(a){return a.toLowerCase()},
e3:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a0(z,0)===133){x=J.hY(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bE(z,w)===133?J.hZ(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dw:function(a,b,c){if(c>a.length)throw H.d(P.bU(c,0,a.length,null,null))
return H.lG(a,b,c)},
N:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.d(H.aH(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.d(H.an(a,b))
return a[b]},
$isx:1,
$asx:I.bj,
$isa1:1,
$asa1:function(){return[P.b]},
$isdJ:1,
$isb:1,
p:{
dz:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hY:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.a0(a,b)
if(y!==32&&y!==13&&!J.dz(y))break;++b}return b},
hZ:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bE(a,z)
if(y!==32&&y!==13&&!J.dz(y))break}return b}}}}],["","",,H,{"^":"",
hT:function(){return new P.cD("No element")},
hU:function(){return new P.cD("Too many elements")},
iZ:function(a,b,c){H.u(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.F,args:[c,c]})
H.bw(a,0,J.b1(a)-1,b,c)},
bw:function(a,b,c,d,e){H.u(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.iY(a,b,c,d,e)
else H.iX(a,b,c,d,e)},
iY:function(a,b,c,d,e){var z,y,x,w,v
H.u(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.F,args:[e,e]})
for(z=b+1,y=J.aX(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ac(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iX:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.u(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.F,args:[a2,a2]})
z=C.f.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.W(b+a0,2)
v=w-z
u=w+z
t=J.aX(a)
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
if(J.X(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a5()
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
if(typeof e!=="number")return e.a5()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a5()
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
H.bw(a,b,m-2,a1,a2)
H.bw(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.X(a1.$2(t.i(a,m),r),0);)++m
for(;J.X(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a5()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bw(a,m,l,a1,a2)}else H.bw(a,m,l,a1,a2)},
dn:{"^":"l;"},
bR:{"^":"dn;$ti",
gw:function(a){return new H.dD(this,this.gk(this),0,[H.cO(this,"bR",0)])},
aD:function(a,b){return this.cz(0,H.m(b,{func:1,ret:P.W,args:[H.cO(this,"bR",0)]}))}},
dD:{"^":"c;a,b,c,0d,$ti",
sb6:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.aX(z)
x=y.gk(z)
if(this.b!==x)throw H.d(P.aN(z))
w=this.c
if(w>=x){this.sb6(null)
return!1}this.sb6(y.t(z,w));++this.c
return!0},
$isb6:1},
id:{"^":"bR;a,b,$ti",
gk:function(a){return J.b1(this.a)},
t:function(a,b){return this.b.$1(J.fH(this.a,b))},
$asbR:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dZ:{"^":"l;a,b,$ti",
gw:function(a){return new H.jk(J.bK(this.a),this.b,this.$ti)}},
jk:{"^":"b6;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bQ:{"^":"c;$ti"}}],["","",,H,{"^":"",
aM:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lm:function(a){return init.types[H.r(a)]},
lx:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isy},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.d(H.aH(a))
return z},
bc:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iK:function(a,b){var z,y
if(typeof a!=="string")H.R(H.aH(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=H.t(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
iJ:function(a){var z,y
if(typeof a!=="string")H.R(H.aH(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.h_(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bd:function(a){return H.iB(a)+H.c0(H.ap(a),0,null)},
iB:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbf){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aM(w.length>1&&C.h.a0(w,0)===36?C.h.cv(w,1):w)},
a_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iI:function(a){return a.b?H.a_(a).getUTCFullYear()+0:H.a_(a).getFullYear()+0},
iG:function(a){return a.b?H.a_(a).getUTCMonth()+1:H.a_(a).getMonth()+1},
iC:function(a){return a.b?H.a_(a).getUTCDate()+0:H.a_(a).getDate()+0},
iD:function(a){return a.b?H.a_(a).getUTCHours()+0:H.a_(a).getHours()+0},
iF:function(a){return a.b?H.a_(a).getUTCMinutes()+0:H.a_(a).getMinutes()+0},
iH:function(a){return a.b?H.a_(a).getUTCSeconds()+0:H.a_(a).getSeconds()+0},
iE:function(a){return a.b?H.a_(a).getUTCMilliseconds()+0:H.a_(a).getMilliseconds()+0},
bC:function(a){throw H.d(H.aH(a))},
j:function(a,b){if(a==null)J.b1(a)
throw H.d(H.an(a,b))},
an:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
z=H.r(J.b1(a))
if(!(b<0)){if(typeof z!=="number")return H.bC(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.bV(b,"index",null)},
aH:function(a){return new P.ar(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.bT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eE})
z.name=""}else z.toString=H.eE
return z},
eE:function(){return J.bn(this.dartException)},
R:function(a){throw H.d(a)},
N:function(a){throw H.d(P.aN(a))},
a6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bn(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cx(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dI(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eX()
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
if(m!=null)return z.$1(H.cx(H.t(y),m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.cx(H.t(y),m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dI(H.t(y),m))}}return z.$1(new H.jh(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dP()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ar(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dP()
return a},
aY:function(a){var z
if(a==null)return new H.eg(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eg(a)},
li:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
lw:function(a,b,c,d,e,f){H.h(a,"$isbp")
switch(H.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.dr("Unsupported number of arguments for wrapped closure"))},
aI:function(a,b){var z
H.r(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lw)
a.$identity=z
return z},
hj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.iO(z).r}else x=d
w=e?Object.create(new H.j0().constructor.prototype):Object.create(new H.ck(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.J()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.df(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lm,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dd:H.cl
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.df(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
hg:function(a,b,c,d){var z=H.cl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
df:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hg(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.J()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b2
if(v==null){v=H.bO("self")
$.b2=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.J()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.b2
if(v==null){v=H.bO("self")
$.b2=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
hh:function(a,b,c,d){var z,y
z=H.cl
y=H.dd
switch(b?-1:a){case 0:throw H.d(H.iT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hi:function(a,b){var z,y,x,w,v,u,t,s
z=$.b2
if(z==null){z=H.bO("self")
$.b2=z}y=$.dc
if(y==null){y=H.bO("receiver")
$.dc=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ad
if(typeof y!=="number")return y.J()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.J()
$.ad=y+1
return new Function(z+y+"}")()},
cM:function(a,b,c,d,e,f,g){return H.hj(a,b,H.r(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a9(a,"String"))},
ev:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a9(a,"double"))},
cS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a9(a,"num"))},
c2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a9(a,"bool"))},
r:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a9(a,"int"))},
ca:function(a,b){throw H.d(H.a9(a,H.aM(H.t(b).substring(3))))},
lE:function(a,b){throw H.d(H.de(a,H.aM(H.t(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.ca(a,b)},
ah:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.lE(a,b)},
eB:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.ca(a,b)},
or:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.C(a)[b])return a
H.ca(a,b)},
bl:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.d(H.a9(a,"List<dynamic>"))},
ly:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.ca(a,b)},
cN:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.r(z)]
else return a.$S()}return},
bA:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cN(J.C(a))
if(z==null)return!1
return H.em(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cI)return a
$.cI=!0
try{if(H.bA(a,b))return a
z=H.bD(b)
y=H.a9(a,z)
throw H.d(y)}finally{$.cI=!1}},
aW:function(a,b){if(a!=null&&!H.cL(a,b))H.R(H.a9(a,H.bD(b)))
return a},
eq:function(a){var z,y
z=J.C(a)
if(!!z.$isn){y=H.cN(z)
if(y!=null)return H.bD(y)
return"Closure"}return H.bd(a)},
lL:function(a){throw H.d(new P.hp(H.t(a)))},
ex:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
ap:function(a){if(a==null)return
return a.$ti},
ok:function(a,b,c){return H.b_(a["$as"+H.e(c)],H.ap(b))},
bk:function(a,b,c,d){var z
H.t(c)
H.r(d)
z=H.b_(a["$as"+H.e(c)],H.ap(b))
return z==null?null:z[d]},
cO:function(a,b,c){var z
H.t(b)
H.r(c)
z=H.b_(a["$as"+H.e(b)],H.ap(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.r(b)
z=H.ap(a)
return z==null?null:z[b]},
bD:function(a){return H.aG(a,null)},
aG:function(a,b){var z,y
H.u(b,"$isa",[P.b],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aM(a[0].builtin$cls)+H.c0(a,1,b)
if(typeof a=="function")return H.aM(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.r(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.l_(a,b)
if('futureOr' in a)return"FutureOr<"+H.aG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.b]
H.u(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.h.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aG(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aG(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aG(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lh(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aG(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c0:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isa",[P.b],"$asa")
if(a==null)return""
z=new P.cE("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}return"<"+z.j(0)+">"},
ll:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isn){y=H.cN(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ap(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
am:function(a,b,c,d){var z,y
H.t(b)
H.bl(c)
H.t(d)
if(a==null)return!1
z=H.ap(a)
y=J.C(a)
if(y[b]==null)return!1
return H.et(H.b_(y[d],z),null,c,null)},
bE:function(a,b,c,d){H.t(b)
H.bl(c)
H.t(d)
if(a==null)return a
if(H.am(a,b,c,d))return a
throw H.d(H.de(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aM(b.substring(3))+H.c0(c,0,null),init.mangledGlobalNames)))},
u:function(a,b,c,d){H.t(b)
H.bl(c)
H.t(d)
if(a==null)return a
if(H.am(a,b,c,d))return a
throw H.d(H.a9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aM(b.substring(3))+H.c0(c,0,null),init.mangledGlobalNames)))},
et:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a4(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a4(a[y],b,c[y],d))return!1
return!0},
o9:function(a,b,c){return a.apply(b,H.b_(J.C(b)["$as"+H.e(c)],H.ap(b)))},
ez:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="D"||a===-1||a===-2||H.ez(z)}return!1},
cL:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="D"||b===-1||b===-2||H.ez(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bA(a,b)}z=J.C(a).constructor
y=H.ap(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a4(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cL(a,b))throw H.d(H.a9(a,H.bD(b)))
return a},
a4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a4(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.em(a,b,c,d)
if('func' in a)return c.builtin$cls==="bp"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a4("type" in a?a.type:null,b,x,d)
else if(H.a4(a,b,x,d))return!0
else{if(!('$is'+"a2" in y.prototype))return!1
w=y.prototype["$as"+"a2"]
v=H.b_(w,z?a.slice(1):null)
return H.a4(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.et(H.b_(r,z),b,u,d)},
em:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a4(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a4(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a4(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a4(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lD(m,b,l,d)},
lD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a4(c[w],d,a[w],b))return!1}return!0},
oc:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
lz:function(a){var z,y,x,w,v,u
z=H.t($.ey.$1(a))
y=$.c3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.es.$2(a,z))
if(z!=null){y=$.c3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c9(x)
$.c3[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c8[z]=x
return x}if(v==="-"){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eC(a,x)
if(v==="*")throw H.d(P.cG(z))
if(init.leafTags[z]===true){u=H.c9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eC(a,x)},
eC:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cR(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c9:function(a){return J.cR(a,!1,null,!!a.$isy)},
lC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c9(z)
else return J.cR(z,c,null,null)},
lu:function(){if(!0===$.cP)return
$.cP=!0
H.lv()},
lv:function(){var z,y,x,w,v,u,t,s
$.c3=Object.create(null)
$.c8=Object.create(null)
H.lq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eD.$1(v)
if(u!=null){t=H.lC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lq:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aV(C.N,H.aV(C.S,H.aV(C.B,H.aV(C.B,H.aV(C.R,H.aV(C.O,H.aV(C.P(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ey=new H.lr(v)
$.es=new H.ls(u)
$.eD=new H.lt(t)},
aV:function(a,b){return a(b)||b},
lG:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
lI:function(a,b,c,d){var z=b.d0(a,d)
if(z==null)return a
return H.lK(a,z.b.index,z.gdG(z),c)},
lH:function(a,b,c){var z,y
z=b.gbk()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
lJ:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.lI(a,b,c,d)},
lK:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
iN:{"^":"c;a,b,c,d,e,f,r,0x",p:{
iO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cu(z)
y=z[0]
x=z[1]
return new H.iN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jb:{"^":"c;a,b,c,d,e,f",
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
af:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.b])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jb(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ix:{"^":"T;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dI:function(a,b){return new H.ix(a,b==null?null:b.method)}}},
i0:{"^":"T;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cx:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i0(a,y,z?null:b.receiver)}}},
jh:{"^":"T;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lM:{"^":"n:5;a",
$1:function(a){if(!!J.C(a).$isT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eg:{"^":"c;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isV:1},
n:{"^":"c;",
j:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gck:function(){return this},
$isbp:1,
gck:function(){return this}},
dR:{"^":"n;"},
j0:{"^":"dR;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aM(z)+"'"}},
ck:{"^":"dR;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ck))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.bc(this.a)
else y=typeof z!=="object"?J.aq(z):H.bc(z)
return(y^H.bc(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cl:function(a){return a.a},
dd:function(a){return a.c},
bO:function(a){var z,y,x,w,v
z=new H.ck("self","target","receiver","name")
y=J.cu(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jc:{"^":"T;a",
j:function(a){return this.a},
p:{
a9:function(a,b){return new H.jc("TypeError: "+P.bP(a)+": type '"+H.eq(a)+"' is not a subtype of type '"+b+"'")}}},
he:{"^":"T;a",
j:function(a){return this.a},
p:{
de:function(a,b){return new H.he("CastError: "+P.bP(a)+": type '"+H.eq(a)+"' is not a subtype of type '"+b+"'")}}},
iS:{"^":"T;a",
j:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iT:function(a){return new H.iS(a)}}},
dW:{"^":"c;a,0b,0c,0d",
gac:function(){var z=this.b
if(z==null){z=H.bD(this.a)
this.b=z}return z},
j:function(a){return this.gac()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.gac())
this.d=z}return z},
C:function(a,b){if(b==null)return!1
return b instanceof H.dW&&this.gac()===b.gac()}},
cw:{"^":"dE;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gH:function(a){return new H.al(this,[H.o(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cX(z,b)}else{y=this.dM(b)
return y}},
dM:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.ar(z,J.aq(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a9(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a9(w,b)
x=y==null?null:y.b
return x}else return this.dN(b)},
dN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ar(z,J.aq(a)&0x3ffffff)
x=this.ax(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.at()
this.b=z}this.b7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.at()
this.c=y}this.b7(y,b,c)}else{x=this.d
if(x==null){x=this.at()
this.d=x}w=J.aq(b)&0x3ffffff
v=this.ar(x,w)
if(v==null)this.av(x,w,[this.ak(b,c)])
else{u=this.ax(v,b)
if(u>=0)v[u].b=c
else v.push(this.ak(b,c))}}},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aN(this))
z=z.c}},
b7:function(a,b,c){var z
H.z(b,H.o(this,0))
H.z(c,H.o(this,1))
z=this.a9(a,b)
if(z==null)this.av(a,b,this.ak(b,c))
else z.b=c},
b9:function(){this.r=this.r+1&67108863},
ak:function(a,b){var z,y
z=new H.i5(H.z(a,H.o(this,0)),H.z(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b9()
return z},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.X(a[y].a,b))return y
return-1},
j:function(a){return P.dF(this)},
a9:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
av:function(a,b,c){a[b]=c},
cY:function(a,b){delete a[b]},
cX:function(a,b){return this.a9(a,b)!=null},
at:function(){var z=Object.create(null)
this.av(z,"<non-identifier-key>",z)
this.cY(z,"<non-identifier-key>")
return z},
$isdB:1},
i5:{"^":"c;a,b,0c,0d"},
al:{"^":"dn;a,$ti",
gk:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.i6(z,z.r,this.$ti)
y.c=z.e
return y}},
i6:{"^":"c;a,b,0c,0d,$ti",
sb8:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aN(z))
else{z=this.c
if(z==null){this.sb8(null)
return!1}else{this.sb8(z.a)
this.c=this.c.c
return!0}}},
$isb6:1},
lr:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
ls:{"^":"n:14;a",
$2:function(a,b){return this.a(a,b)}},
lt:{"^":"n:15;a",
$1:function(a){return this.a(H.t(a))}},
i_:{"^":"c;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gbk:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dA(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
d0:function(a,b){var z,y
z=this.gbk()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.k8(this,y)},
$isdJ:1,
p:{
dA:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.cs("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
k8:{"^":"c;a,b",
gdG:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.j(z,b)
return z[b]}}}],["","",,H,{"^":"",
lh:function(a){return J.hV(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c_:function(a){var z,y
if(!!J.C(a).$isx)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.an(b,a))},
is:{"^":"i;",$isjd:1,"%":"DataView;ArrayBufferView;cA|ea|eb|dG|ec|ed|aw"},
cA:{"^":"is;",
gk:function(a){return a.length},
$isx:1,
$asx:I.bj,
$isy:1,
$asy:I.bj},
dG:{"^":"eb;",
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
h:function(a,b,c){H.r(b)
H.ev(c)
H.ag(b,a,a.length)
a[b]=c},
$asbQ:function(){return[P.ao]},
$asp:function(){return[P.ao]},
$isl:1,
$asl:function(){return[P.ao]},
$isa:1,
$asa:function(){return[P.ao]},
"%":"Float64Array"},
aw:{"^":"ed;",
h:function(a,b,c){H.r(b)
H.r(c)
H.ag(b,a,a.length)
a[b]=c},
$asbQ:function(){return[P.F]},
$asp:function(){return[P.F]},
$isl:1,
$asl:function(){return[P.F]},
$isa:1,
$asa:function(){return[P.F]}},
ir:{"^":"dG;",$isak:1,"%":"Float32Array"},
mX:{"^":"aw;",
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mY:{"^":"aw;",
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
$ishR:1,
"%":"Int32Array"},
mZ:{"^":"aw;",
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Int8Array"},
n_:{"^":"aw;",
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
it:{"^":"aw;",
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
$isnK:1,
"%":"Uint32Array"},
n0:{"^":"aw;",
gk:function(a){return a.length},
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
n1:{"^":"aw;",
gk:function(a){return a.length},
i:function(a,b){H.ag(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ea:{"^":"cA+p;"},
eb:{"^":"ea+bQ;"},
ec:{"^":"cA+p;"},
ed:{"^":"ec+bQ;"}}],["","",,P,{"^":"",
jr:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l8()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aI(new P.jt(z),1)).observe(y,{childList:true})
return new P.js(z,y,x)}else if(self.setImmediate!=null)return P.l9()
return P.la()},
nU:[function(a){self.scheduleImmediate(H.aI(new P.ju(H.m(a,{func:1,ret:-1})),0))},"$1","l8",4,0,4],
nV:[function(a){self.setImmediate(H.aI(new P.jv(H.m(a,{func:1,ret:-1})),0))},"$1","l9",4,0,4],
nW:[function(a){H.m(a,{func:1,ret:-1})
P.kH(0,a)},"$1","la",4,0,4],
hH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.u(a,"$isl",[[P.a2,d]],"$asl")
s=[[P.a,d]]
y=new P.U(0,$.G,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hJ(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.N)(r),++p){w=r[p]
v=o
w.aB(new P.hI(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.U(0,$.G,s)
r.bc(C.X)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.f(r,[d])}catch(n){u=H.a6(n)
t=H.aY(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bT()
r=$.G
if(r!==C.e)r.toString
s=new P.U(0,r,s)
s.bd(m,t)
return s}else{z.c=u
z.d=t}}return y},
l3:function(a,b){if(H.bA(a,{func:1,args:[P.c,P.V]}))return H.m(a,{func:1,ret:null,args:[P.c,P.V]})
if(H.bA(a,{func:1,args:[P.c]}))return H.m(a,{func:1,ret:null,args:[P.c]})
throw H.d(P.da(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l2:function(){var z,y
for(;z=$.aT,z!=null;){$.bi=null
y=z.b
$.aT=y
if(y==null)$.bh=null
z.a.$0()}},
o7:[function(){$.cJ=!0
try{P.l2()}finally{$.bi=null
$.cJ=!1
if($.aT!=null)$.cU().$1(P.eu())}},"$0","eu",0,0,1],
ep:function(a){var z=new P.e0(H.m(a,{func:1,ret:-1}))
if($.aT==null){$.bh=z
$.aT=z
if(!$.cJ)$.cU().$1(P.eu())}else{$.bh.b=z
$.bh=z}},
l6:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aT
if(z==null){P.ep(a)
$.bi=$.bh
return}y=new P.e0(a)
x=$.bi
if(x==null){y.b=z
$.bi=y
$.aT=y}else{y.b=x.b
x.b=y
$.bi=y
if(y.b==null)$.bh=y}},
lF:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.G
if(C.e===y){P.aU(null,null,C.e,a)
return}y.toString
P.aU(null,null,y,H.m(y.bv(a),z))},
c1:function(a,b,c,d,e){var z={}
z.a=d
P.l6(new P.l4(z,e))},
en:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.G
if(y===c)return d.$0()
$.G=c
z=y
try{y=d.$0()
return y}finally{$.G=z}},
eo:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.G
if(y===c)return d.$1(e)
$.G=c
z=y
try{y=d.$1(e)
return y}finally{$.G=z}},
l5:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.G
if(y===c)return d.$2(e,f)
$.G=c
z=y
try{y=d.$2(e,f)
return y}finally{$.G=z}},
aU:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bv(d):c.dn(d,-1)
P.ep(d)},
jt:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
js:{"^":"n:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ju:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jv:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kG:{"^":"c;a,0b,c",
cS:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aI(new P.kI(this,b),0),a)
else throw H.d(P.B("`setTimeout()` not found."))},
p:{
kH:function(a,b){var z=new P.kG(!0,0)
z.cS(a,b)
return z}}},
kI:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a2:{"^":"c;$ti"},
hJ:{"^":"n:17;a,b,c,d",
$2:function(a,b){var z,y
H.h(b,"$isV")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.K(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.K(z.c,z.d)}},
hI:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.z(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bf(z.a)}else if(z.b===0&&!this.e)this.c.K(z.c,z.d)},
$S:function(){return{func:1,ret:P.D,args:[this.f]}}},
e4:{"^":"c;$ti",
dv:function(a,b){if(a==null)a=new P.bT()
if(this.a.a!==0)throw H.d(P.bx("Future already completed"))
$.G.toString
this.K(a,b)},
du:function(a){return this.dv(a,null)}},
e1:{"^":"e4;a,$ti",
bG:function(a,b){var z
H.aW(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.bx("Future already completed"))
z.bc(b)},
K:function(a,b){this.a.bd(a,b)}},
kB:{"^":"e4;a,$ti",
K:function(a,b){this.a.K(a,b)}},
aR:{"^":"c;0a,b,c,d,e,$ti",
dO:function(a){if(this.c!==6)return!0
return this.b.b.az(H.m(this.d,{func:1,ret:P.W,args:[P.c]}),a.a,P.W,P.c)},
dK:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bA(z,{func:1,args:[P.c,P.V]}))return H.aW(w.dW(z,a.a,a.b,null,y,P.V),x)
else return H.aW(w.az(H.m(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
U:{"^":"c;bo:a<,b,0da:c<,$ti",
aB:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.G
if(y!==C.e){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.l3(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.U(0,$.G,[c])
w=b==null?1:3
this.bb(new P.aR(x,w,a,b,[z,c]))
return x},
aA:function(a,b){return this.aB(a,null,b)},
bb:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaR")
this.c=a}else{if(z===2){y=H.h(this.c,"$isU")
z=y.a
if(z<4){y.bb(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aU(null,null,z,H.m(new P.jN(this,a),{func:1,ret:-1}))}},
bl:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaR")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isU")
y=u.a
if(y<4){u.bl(a)
return}this.a=y
this.c=u.c}z.a=this.ab(a)
y=this.b
y.toString
P.aU(null,null,y,H.m(new P.jU(z,this),{func:1,ret:-1}))}},
aa:function(){var z=H.h(this.c,"$isaR")
this.c=null
return this.ab(z)},
ab:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
am:function(a){var z,y,x
z=H.o(this,0)
H.aW(a,{futureOr:1,type:z})
y=this.$ti
if(H.am(a,"$isa2",y,"$asa2"))if(H.am(a,"$isU",y,null))P.bY(a,this)
else P.e5(a,this)
else{x=this.aa()
H.z(a,z)
this.a=4
this.c=a
P.aS(this,x)}},
bf:function(a){var z
H.z(a,H.o(this,0))
z=this.aa()
this.a=4
this.c=a
P.aS(this,z)},
K:function(a,b){var z
H.h(b,"$isV")
z=this.aa()
this.a=8
this.c=new P.a3(a,b)
P.aS(this,z)},
bc:function(a){var z
H.aW(a,{futureOr:1,type:H.o(this,0)})
if(H.am(a,"$isa2",this.$ti,"$asa2")){this.cV(a)
return}this.a=1
z=this.b
z.toString
P.aU(null,null,z,H.m(new P.jP(this,a),{func:1,ret:-1}))},
cV:function(a){var z=this.$ti
H.u(a,"$isa2",z,"$asa2")
if(H.am(a,"$isU",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aU(null,null,z,H.m(new P.jT(this,a),{func:1,ret:-1}))}else P.bY(a,this)
return}P.e5(a,this)},
bd:function(a,b){var z
H.h(b,"$isV")
this.a=1
z=this.b
z.toString
P.aU(null,null,z,H.m(new P.jO(this,a,b),{func:1,ret:-1}))},
$isa2:1,
p:{
e5:function(a,b){var z,y,x
b.a=1
try{a.aB(new P.jQ(b),new P.jR(b),null)}catch(x){z=H.a6(x)
y=H.aY(x)
P.lF(new P.jS(b,z,y))}},
bY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isU")
if(z>=4){y=b.aa()
b.a=a.a
b.c=a.c
P.aS(b,y)}else{y=H.h(b.c,"$isaR")
b.a=2
b.c=a
a.bl(y)}},
aS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isa3")
y=y.b
u=v.a
t=v.b
y.toString
P.c1(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aS(z.a,b)}y=z.a
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
if(p){H.h(r,"$isa3")
y=y.b
u=r.a
t=r.b
y.toString
P.c1(null,null,y,u,t)
return}o=$.G
if(o!=q)$.G=q
else o=null
y=b.c
if(y===8)new P.jX(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jW(x,b,r).$0()}else if((y&2)!==0)new P.jV(z,x,b).$0()
if(o!=null)$.G=o
y=x.b
if(!!J.C(y).$isa2){if(y.a>=4){n=H.h(t.c,"$isaR")
t.c=null
b=t.ab(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bY(y,t)
return}}m=b.b
n=H.h(m.c,"$isaR")
m.c=null
b=m.ab(n)
y=x.a
u=x.b
if(!y){H.z(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isa3")
m.a=8
m.c=u}z.a=m
y=m}}}},
jN:{"^":"n:0;a,b",
$0:function(){P.aS(this.a,this.b)}},
jU:{"^":"n:0;a,b",
$0:function(){P.aS(this.b,this.a.a)}},
jQ:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
jR:{"^":"n:18;a",
$2:function(a,b){H.h(b,"$isV")
this.a.K(a,b)},
$1:function(a){return this.$2(a,null)}},
jS:{"^":"n:0;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
jP:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bf(H.z(this.b,H.o(z,0)))}},
jT:{"^":"n:0;a,b",
$0:function(){P.bY(this.b,this.a)}},
jO:{"^":"n:0;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
jX:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c1(H.m(w.d,{func:1}),null)}catch(v){y=H.a6(v)
x=H.aY(v)
if(this.d){w=H.h(this.a.a.c,"$isa3").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isa3")
else u.b=new P.a3(y,x)
u.a=!0
return}if(!!J.C(z).$isa2){if(z instanceof P.U&&z.gbo()>=4){if(z.gbo()===8){w=this.b
w.b=H.h(z.gda(),"$isa3")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.aA(new P.jY(t),null)
w.a=!1}}},
jY:{"^":"n:19;a",
$1:function(a){return this.a}},
jW:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.z(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.az(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a6(t)
y=H.aY(t)
x=this.a
x.b=new P.a3(z,y)
x.a=!0}}},
jV:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isa3")
w=this.c
if(w.dO(z)&&w.e!=null){v=this.b
v.b=w.dK(z)
v.a=!1}}catch(u){y=H.a6(u)
x=H.aY(u)
w=H.h(this.a.a.c,"$isa3")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a3(y,x)
s.a=!0}}},
e0:{"^":"c;a,0b"},
j4:{"^":"c;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.U(0,$.G,[P.F])
z.a=0
x=H.o(this,0)
w=H.m(new P.j6(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.j7(z,y),{func:1,ret:-1})
W.aF(this.a,this.b,w,!1,x)
return y}},
j6:{"^":"n;a,b",
$1:function(a){H.z(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.o(this.b,0)]}}},
j7:{"^":"n:0;a,b",
$0:function(){this.b.am(this.a.a)}},
j5:{"^":"c;"},
a3:{"^":"c;a,b",
j:function(a){return H.e(this.a)},
$isT:1},
kO:{"^":"c;",$isnS:1},
l4:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.j(0)
throw x}},
kk:{"^":"kO;",
dX:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.e===$.G){a.$0()
return}P.en(null,null,this,a,-1)}catch(x){z=H.a6(x)
y=H.aY(x)
P.c1(null,null,this,z,H.h(y,"$isV"))}},
dY:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.G){a.$1(b)
return}P.eo(null,null,this,a,b,-1,c)}catch(x){z=H.a6(x)
y=H.aY(x)
P.c1(null,null,this,z,H.h(y,"$isV"))}},
dn:function(a,b){return new P.km(this,H.m(a,{func:1,ret:b}),b)},
bv:function(a){return new P.kl(this,H.m(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.kn(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
c1:function(a,b){H.m(a,{func:1,ret:b})
if($.G===C.e)return a.$0()
return P.en(null,null,this,a,b)},
az:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.G===C.e)return a.$1(b)
return P.eo(null,null,this,a,b,c,d)},
dW:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.G===C.e)return a.$2(b,c)
return P.l5(null,null,this,a,b,c,d,e,f)}},
km:{"^":"n;a,b,c",
$0:function(){return this.a.c1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kl:{"^":"n:1;a,b",
$0:function(){return this.a.dX(this.b)}},
kn:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dY(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dC:function(a,b,c){H.bl(a)
return H.u(H.li(a,new H.cw(0,0,[b,c])),"$isdB",[b,c],"$asdB")},
v:function(a,b){return new H.cw(0,0,[a,b])},
i7:function(){return new H.cw(0,0,[null,null])},
a7:function(a,b,c,d){return new P.k4(0,0,[d])},
hS:function(a,b,c){var z,y
if(P.cK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.f([],[P.b])
y=$.bm()
C.a.l(y,a)
try{P.l1(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dQ(b,H.ly(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ct:function(a,b,c){var z,y,x
if(P.cK(a))return b+"..."+c
z=new P.cE(b)
y=$.bm()
C.a.l(y,a)
try{x=z
x.a=P.dQ(x.gV(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
cK:function(a){var z,y
for(z=0;y=$.bm(),z<y.length;++z)if(a===y[z])return!0
return!1},
l1:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[P.b],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.q()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.q();t=s,s=r){r=z.gA(z);++x
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
cy:function(a,b){var z,y,x
z=P.a7(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.z(a[x],b))
return z},
dF:function(a){var z,y,x
z={}
if(P.cK(a))return"{...}"
y=new P.cE("")
try{C.a.l($.bm(),a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.fK(a,new P.ic(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.bm()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
k4:{"^":"k_;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e9(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbz")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbz")!=null}else return this.cW(b)},
cW:function(a){var z=this.d
if(z==null)return!1
return this.aq(this.bi(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cH()
this.b=z}return this.ba(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cH()
this.c=y}return this.ba(y,b)}else return this.cT(0,b)},
cT:function(a,b){var z,y,x
H.z(b,H.o(this,0))
z=this.d
if(z==null){z=P.cH()
this.d=z}y=this.bg(b)
x=z[y]
if(x==null)z[y]=[this.au(b)]
else{if(this.aq(x,b)>=0)return!1
x.push(this.au(b))}return!0},
c0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bm(this.c,b)
else return this.d5(0,b)},
d5:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bi(z,b)
x=this.aq(y,b)
if(x<0)return!1
this.bq(y.splice(x,1)[0])
return!0},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.as()}},
ba:function(a,b){H.z(b,H.o(this,0))
if(H.h(a[b],"$isbz")!=null)return!1
a[b]=this.au(b)
return!0},
bm:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbz")
if(z==null)return!1
this.bq(z)
delete a[b]
return!0},
as:function(){this.r=this.r+1&67108863},
au:function(a){var z,y
z=new P.bz(H.z(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.as()
return z},
bq:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.as()},
bg:function(a){return J.aq(a)&0x3ffffff},
bi:function(a,b){return a[this.bg(b)]},
aq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.X(a[y].a,b))return y
return-1},
p:{
cH:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bz:{"^":"c;a,0b,0c"},
e9:{"^":"c;a,b,0c,0d,$ti",
sbe:function(a){this.d=H.z(a,H.o(this,0))},
gA:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aN(z))
else{z=this.c
if(z==null){this.sbe(null)
return!1}else{this.sbe(H.z(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb6:1,
p:{
k5:function(a,b,c){var z=new P.e9(a,b,[c])
z.c=a.e
return z}}},
k_:{"^":"iU;"},
i8:{"^":"k6;",$isl:1,$isa:1},
p:{"^":"c;$ti",
gw:function(a){return new H.dD(a,this.gk(a),0,[H.bk(this,a,"p",0)])},
t:function(a,b){return this.i(a,b)},
dI:function(a,b,c,d){var z,y,x
H.z(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bk(this,a,"p",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.d(P.aN(a))}return y},
j:function(a){return P.ct(a,"[","]")}},
dE:{"^":"Z;"},
ic:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
Z:{"^":"c;$ti",
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bk(this,a,"Z",0),H.bk(this,a,"Z",1)]})
for(z=J.bK(this.gH(a));z.q();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.b1(this.gH(a))},
j:function(a){return P.dF(a)},
$isO:1},
iV:{"^":"c;$ti",
I:function(a,b){var z
for(z=J.bK(H.u(b,"$isl",this.$ti,"$asl"));z.q();)this.l(0,z.gA(z))},
j:function(a){return P.ct(this,"{","}")},
$isl:1,
$isni:1},
iU:{"^":"iV;"},
k6:{"^":"c+p;"}}],["","",,P,{"^":"",
cQ:function(a,b,c){var z
H.t(a)
z=H.iK(a,c)
if(z!=null)return z
throw H.d(P.cs(a,null,null))},
aJ:function(a,b){var z
H.t(a)
z=H.iJ(a)
if(z!=null)return z
throw H.d(P.cs("Invalid double",a,null))},
hB:function(a){if(a instanceof H.n)return a.j(0)
return"Instance of '"+H.bd(a)+"'"},
dL:function(a,b,c){return new H.i_(a,H.dA(a,!1,!0,!1))},
bP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hB(a)},
dr:function(a){return new P.jK(a)},
aL:function(a){H.aZ(H.e(a))},
W:{"^":"c;"},
"+bool":0,
b3:{"^":"c;a,b",
C:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a&&this.b===b.b},
N:function(a,b){return C.f.N(this.a,H.h(b,"$isb3").a)},
gv:function(a){var z=this.a
return(z^C.f.bn(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hq(H.iI(this))
y=P.bo(H.iG(this))
x=P.bo(H.iC(this))
w=P.bo(H.iD(this))
v=P.bo(H.iF(this))
u=P.bo(H.iH(this))
t=P.hr(H.iE(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa1:1,
$asa1:function(){return[P.b3]},
p:{
hq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a}}},
ao:{"^":"J;"},
"+double":0,
b4:{"^":"c;a",
T:function(a,b){return C.f.T(this.a,H.h(b,"$isb4").a)},
C:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.f.N(this.a,H.h(b,"$isb4").a)},
j:function(a){var z,y,x,w,v
z=new P.hx()
y=this.a
if(y<0)return"-"+new P.b4(0-y).j(0)
x=z.$1(C.f.W(y,6e7)%60)
w=z.$1(C.f.W(y,1e6)%60)
v=new P.hw().$1(y%1e6)
return""+C.f.W(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa1:1,
$asa1:function(){return[P.b4]},
p:{
dl:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hw:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hx:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
T:{"^":"c;"},
bT:{"^":"T;",
j:function(a){return"Throw of null."}},
ar:{"^":"T;a,b,c,d",
gao:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gan:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gao()+y+x
if(!this.a)return w
v=this.gan()
u=P.bP(this.b)
return w+v+": "+u},
p:{
d9:function(a){return new P.ar(!1,null,null,a)},
da:function(a,b,c){return new P.ar(!0,a,b,c)}}},
dK:{"^":"ar;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bV:function(a,b,c){return new P.dK(null,null,!0,a,b,"Value not in range")},
bU:function(a,b,c,d,e){return new P.dK(b,c,!0,a,d,"Invalid value")}}},
hQ:{"^":"ar;e,k:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y
z=H.r(this.b)
if(typeof z!=="number")return z.a5()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
K:function(a,b,c,d,e){var z=H.r(e==null?J.b1(b):e)
return new P.hQ(b,z,!0,a,c,"Index out of range")}}},
ji:{"^":"T;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.ji(a)}}},
jg:{"^":"T;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cG:function(a){return new P.jg(a)}}},
cD:{"^":"T;a",
j:function(a){return"Bad state: "+this.a},
p:{
bx:function(a){return new P.cD(a)}}},
hk:{"^":"T;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bP(z)+"."},
p:{
aN:function(a){return new P.hk(a)}}},
dP:{"^":"c;",
j:function(a){return"Stack Overflow"},
$isT:1},
hp:{"^":"T;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jK:{"^":"c;a",
j:function(a){return"Exception: "+this.a}},
hF:{"^":"c;a,b,c",
j:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aR(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
cs:function(a,b,c){return new P.hF(a,b,c)}}},
bp:{"^":"c;"},
F:{"^":"J;"},
"+int":0,
l:{"^":"c;$ti",
aD:["cz",function(a,b){var z=H.cO(this,"l",0)
return new H.dZ(this,H.m(b,{func:1,ret:P.W,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gw(this)
for(y=0;z.q();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.R(P.bU(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.q();){x=z.gA(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
j:function(a){return P.hS(this,"(",")")}},
b6:{"^":"c;$ti"},
a:{"^":"c;$ti",$isl:1},
"+List":0,
O:{"^":"c;$ti"},
D:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
J:{"^":"c;",$isa1:1,
$asa1:function(){return[P.J]}},
"+num":0,
c:{"^":";",
C:function(a,b){return this===b},
gv:function(a){return H.bc(this)},
j:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.j(this)}},
V:{"^":"c;"},
b:{"^":"c;",$isa1:1,
$asa1:function(){return[P.b]},
$isdJ:1},
"+String":0,
cE:{"^":"c;V:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dQ:function(a,b,c){var z=J.bK(b)
if(!z.q())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.q())}else{a+=H.e(z.gA(z))
for(;z.q();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
lg:function(){return document},
hy:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).L(z,a,b,c)
y.toString
z=W.w
z=new H.dZ(new W.aa(y),H.m(new W.hz(),{func:1,ret:P.W,args:[z]}),[z])
x=z.gw(z)
if(!x.q())H.R(H.hT())
w=x.gA(x)
if(x.q())H.R(H.hU())
return H.h(w,"$isY")},
hA:function(a){H.h(a,"$isP")
return"wheel"},
b5:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a6(x)}return z},
jG:function(a,b){return document.createElement(a)},
bZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e8:function(a,b,c,d){var z,y
z=W.bZ(W.bZ(W.bZ(W.bZ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
el:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jA(a)
if(!!J.C(z).$isP)return z
return}else return H.h(a,"$isP")},
kZ:function(a){var z
if(!!J.C(a).$isco)return a
z=new P.jo([],[],!1)
z.c=!0
return z.aC(a)},
er:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.G
if(z===C.e)return a
return z.dq(a,b)},
Q:{"^":"Y;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lN:{"^":"i;0k:length=","%":"AccessibleNodeList"},
h7:{"^":"Q;",
j:function(a){return String(a)},
$ish7:1,
"%":"HTMLAnchorElement"},
lO:{"^":"Q;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
db:{"^":"Q;",$isdb:1,"%":"HTMLBaseElement"},
hc:{"^":"i;","%":";Blob"},
bN:{"^":"Q;",$isbN:1,"%":"HTMLBodyElement"},
cm:{"^":"Q;0n:height=,0m:width=",
cl:function(a,b,c){var z=this.d1(a,b,P.lb(c,null))
return z},
d1:function(a,b,c){return a.getContext(b,c)},
$iscm:1,
"%":"HTMLCanvasElement"},
lT:{"^":"i;",
ag:function(a){return P.a5(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lU:{"^":"w;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
hl:{"^":"cn;",$ishl:1,"%":"CSSNumericValue|CSSUnitValue"},
m7:{"^":"ho;0k:length=","%":"CSSPerspective"},
as:{"^":"i;",$isas:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
hm:{"^":"jy;0k:length=",
aI:function(a,b){var z=this.d2(a,this.al(a,b))
return z==null?"":z},
al:function(a,b){var z,y
z=$.eT()
y=z[b]
if(typeof y==="string")return y
y=this.df(a,b)
z[b]=y
return y},
df:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hs()+b
if(z in a)return z
return b},
d2:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hn:{"^":"c;",
gn:function(a){return this.aI(a,"height")},
gm:function(a){return this.aI(a,"width")}},
cn:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ho:{"^":"i;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
m9:{"^":"cn;0k:length=","%":"CSSTransformValue"},
ma:{"^":"cn;0k:length=","%":"CSSUnparsedValue"},
mc:{"^":"i;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
ht:{"^":"Q;","%":"HTMLDivElement"},
co:{"^":"w;",
di:function(a,b){return a.adoptNode(b)},
cm:function(a,b){return a.getElementById(b)},
c_:function(a,b){return a.querySelector(b)},
$isco:1,
"%":"XMLDocument;Document"},
md:{"^":"i;",
j:function(a){return String(a)},
"%":"DOMException"},
hu:{"^":"i;",
dB:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
me:{"^":"jC;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.u(c,"$isa0",[P.J],"$asa0")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a0,P.J]]},
$isy:1,
$asy:function(){return[[P.a0,P.J]]},
$asp:function(){return[[P.a0,P.J]]},
$isl:1,
$asl:function(){return[[P.a0,P.J]]},
$isa:1,
$asa:function(){return[[P.a0,P.J]]},
$asq:function(){return[[P.a0,P.J]]},
"%":"ClientRectList|DOMRectList"},
hv:{"^":"i;",
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
C:function(a,b){var z
if(b==null)return!1
if(!H.am(b,"$isa0",[P.J],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e8(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.J]},
"%":";DOMRectReadOnly"},
mf:{"^":"jE;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.t(c)
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.b]},
$isy:1,
$asy:function(){return[P.b]},
$asp:function(){return[P.b]},
$isl:1,
$asl:function(){return[P.b]},
$isa:1,
$asa:function(){return[P.b]},
$asq:function(){return[P.b]},
"%":"DOMStringList"},
mg:{"^":"i;0k:length=","%":"DOMTokenList"},
Y:{"^":"w;0dZ:tagName=",
gdl:function(a){return new W.jF(a)},
j:function(a){return a.localName},
dL:function(a,b,c,d,e){var z,y
z=this.L(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.d2(a.parentNode,z,a)
break
case"afterbegin":y=a.childNodes
this.bW(a,z,y.length>0?y[0]:null)
break
case"beforeend":this.G(a,z)
break
case"afterend":J.d2(a.parentNode,z,a.nextSibling)
break
default:H.R(P.d9("Invalid position "+b))}},
L:["ai",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dq
if(z==null){z=H.f([],[W.ae])
y=new W.dH(z)
C.a.l(z,W.e6(null))
C.a.l(z,W.eh())
$.dq=y
d=y}else d=z
z=$.dp
if(z==null){z=new W.ek(d)
$.dp=z
c=z}else{z.a=d
c=z}}if($.ai==null){z=document
y=z.implementation
y=(y&&C.K).dB(y,"")
$.ai=y
$.cp=y.createRange()
y=$.ai
y.toString
y=y.createElement("base")
H.h(y,"$isdb")
y.href=z.baseURI
z=$.ai.head;(z&&C.L).G(z,y)}z=$.ai
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbN")}z=$.ai
if(!!this.$isbN)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ai.body;(z&&C.q).G(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.V,a.tagName)){z=$.cp;(z&&C.E).cn(z,x)
z=$.cp
w=(z&&C.E).dz(z,b)}else{x.innerHTML=b
w=$.ai.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.G(w,y)}z=$.ai.body
if(x==null?z!=null:x!==z)J.d3(x)
c.aN(w)
C.n.di(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dA",null,null,"ge7",5,5,null],
cq:function(a,b,c,d){a.textContent=null
this.G(a,this.L(a,b,c,d))},
cp:function(a,b){return this.cq(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
d6:function(a,b){return a.removeAttribute(b)},
gdP:function(a){return new W.bX(a,"mousedown",!1,[W.a8])},
gdQ:function(a){return new W.bX(a,"mousemove",!1,[W.a8])},
gdR:function(a){return new W.bX(a,"mouseup",!1,[W.a8])},
gdS:function(a){return new W.bX(a,H.t(W.hA(a)),!1,[W.bg])},
$isY:1,
"%":";Element"},
hz:{"^":"n:20;",
$1:function(a){return!!J.C(H.h(a,"$isw")).$isY}},
mj:{"^":"Q;0n:height=,0m:width=","%":"HTMLEmbedElement"},
aj:{"^":"i;",$isaj:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"i;",
dh:function(a,b,c,d){H.m(c,{func:1,args:[W.aj]})
if(c!=null)this.cU(a,b,c,!1)},
cU:function(a,b,c,d){return a.addEventListener(b,H.aI(H.m(c,{func:1,args:[W.aj]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ee|ef|ei|ej"},
at:{"^":"hc;",$isat:1,"%":"File"},
mA:{"^":"jM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isat")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.at]},
$isy:1,
$asy:function(){return[W.at]},
$asp:function(){return[W.at]},
$isl:1,
$asl:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"FileList"},
mB:{"^":"P;0k:length=","%":"FileWriter"},
mE:{"^":"Q;0k:length=","%":"HTMLFormElement"},
au:{"^":"i;",$isau:1,"%":"Gamepad"},
hL:{"^":"Q;","%":"HTMLHeadElement"},
mF:{"^":"i;0k:length=","%":"History"},
mG:{"^":"k1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isw")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.w]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hM:{"^":"co;","%":"HTMLDocument"},
hN:{"^":"hO;",
e8:function(a,b,c,d,e,f){return a.open(b,c)},
dT:function(a,b,c){return a.open(b,c)},
co:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hO:{"^":"P;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mH:{"^":"Q;0n:height=,0m:width=","%":"HTMLIFrameElement"},
mI:{"^":"i;0n:height=,0m:width=","%":"ImageBitmap"},
mJ:{"^":"i;0n:height=,0m:width=","%":"ImageData"},
mK:{"^":"Q;0n:height=,0m:width=","%":"HTMLImageElement"},
mM:{"^":"Q;0n:height=,0m:width=","%":"HTMLInputElement"},
b7:{"^":"dY;",$isb7:1,"%":"KeyboardEvent"},
ib:{"^":"i;",
j:function(a){return String(a)},
$isib:1,
"%":"Location"},
ig:{"^":"Q;","%":"HTMLAudioElement;HTMLMediaElement"},
mT:{"^":"i;0k:length=","%":"MediaList"},
mU:{"^":"k9;",
i:function(a,b){return P.a5(a.get(H.t(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a5(y.value[1]))}},
gH:function(a){var z=H.f([],[P.b])
this.E(a,new W.ii(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.b,null]},
$isO:1,
$asO:function(){return[P.b,null]},
"%":"MIDIInputMap"},
ii:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mV:{"^":"ka;",
i:function(a,b){return P.a5(a.get(H.t(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a5(y.value[1]))}},
gH:function(a){var z=H.f([],[P.b])
this.E(a,new W.ij(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.b,null]},
$isO:1,
$asO:function(){return[P.b,null]},
"%":"MIDIOutputMap"},
ij:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
av:{"^":"i;",$isav:1,"%":"MimeType"},
mW:{"^":"kc;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isav")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asp:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"MimeTypeArray"},
a8:{"^":"dY;",
gbZ:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.bb(a.offsetX,a.offsetY,[P.J])
else{z=a.target
if(!J.C(W.el(z)).$isY)throw H.d(P.B("offsetX is only supported on elements"))
y=H.h(W.el(z),"$isY")
z=a.clientX
x=a.clientY
w=[P.J]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.u(new P.bb(u,v,w),"$isbb",w,"$asbb")
if(typeof z!=="number")return z.Z()
if(typeof x!=="number")return x.Z()
return new P.bb(C.t.c4(z-u),C.t.c4(x-v),w)}},
$isa8:1,
"%":";DragEvent|MouseEvent"},
aa:{"^":"i8;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.bx("No elements"))
if(y>1)throw H.d(P.bx("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.u(b,"$isl",[W.w],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.G(y,z.firstChild)
return},
h:function(a,b,c){var z
H.r(b)
z=this.a
J.fp(z,H.h(c,"$isw"),C.w.i(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.ds(z,z.length,-1,[H.bk(C.w,z,"q",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){return C.w.i(this.a.childNodes,b)},
$asp:function(){return[W.w]},
$asl:function(){return[W.w]},
$asa:function(){return[W.w]}},
w:{"^":"P;0dU:previousSibling=",
dV:function(a){var z=a.parentNode
if(z!=null)J.bG(z,a)},
j:function(a){var z=a.nodeValue
return z==null?this.cw(a):z},
G:function(a,b){return a.appendChild(b)},
bW:function(a,b,c){return a.insertBefore(b,c)},
d7:function(a,b){return a.removeChild(b)},
d8:function(a,b,c){return a.replaceChild(b,c)},
$isw:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iu:{"^":"ke;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isw")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.w]},
"%":"NodeList|RadioNodeList"},
n4:{"^":"Q;0n:height=,0m:width=","%":"HTMLObjectElement"},
n6:{"^":"P;0n:height=,0m:width=","%":"OffscreenCanvas"},
n7:{"^":"i;0n:height=,0m:width=","%":"PaintSize"},
ax:{"^":"i;0k:length=",$isax:1,"%":"Plugin"},
n9:{"^":"ki;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isax")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.ax]},
"%":"PluginArray"},
nb:{"^":"a8;0n:height=,0m:width=","%":"PointerEvent"},
bv:{"^":"aj;",$isbv:1,"%":"ProgressEvent|ResourceProgressEvent"},
iM:{"^":"i;",
dz:function(a,b){return a.createContextualFragment(b)},
cn:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ng:{"^":"ko;",
i:function(a,b){return P.a5(a.get(H.t(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a5(y.value[1]))}},
gH:function(a){var z=H.f([],[P.b])
this.E(a,new W.iR(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.b,null]},
$isO:1,
$asO:function(){return[P.b,null]},
"%":"RTCStatsReport"},
iR:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
nh:{"^":"i;0n:height=,0m:width=","%":"Screen"},
cC:{"^":"Q;0k:length=",$iscC:1,"%":"HTMLSelectElement"},
ay:{"^":"P;",$isay:1,"%":"SourceBuffer"},
nj:{"^":"ef;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isay")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.ay]},
"%":"SourceBufferList"},
az:{"^":"i;",$isaz:1,"%":"SpeechGrammar"},
nk:{"^":"ku;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isaz")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.az]},
"%":"SpeechGrammarList"},
aA:{"^":"i;0k:length=",$isaA:1,"%":"SpeechRecognitionResult"},
nn:{"^":"kx;",
i:function(a,b){return this.bj(a,H.t(b))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.b,P.b]})
for(z=0;!0;++z){y=this.d4(a,z)
if(y==null)return
b.$2(y,this.bj(a,y))}},
gH:function(a){var z=H.f([],[P.b])
this.E(a,new W.j3(z))
return z},
gk:function(a){return a.length},
bj:function(a,b){return a.getItem(b)},
d4:function(a,b){return a.key(b)},
$asZ:function(){return[P.b,P.b]},
$isO:1,
$asO:function(){return[P.b,P.b]},
"%":"Storage"},
j3:{"^":"n:21;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aB:{"^":"i;",$isaB:1,"%":"CSSStyleSheet|StyleSheet"},
j8:{"^":"Q;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=W.hy("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aa(y).I(0,new W.aa(z))
return y},
"%":"HTMLTableElement"},
nq:{"^":"Q;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.ga7(z)
x.toString
z=new W.aa(x)
w=z.ga7(z)
y.toString
w.toString
new W.aa(y).I(0,new W.aa(w))
return y},
"%":"HTMLTableRowElement"},
nr:{"^":"Q;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.ga7(z)
y.toString
x.toString
new W.aa(y).I(0,new W.aa(x))
return y},
"%":"HTMLTableSectionElement"},
dS:{"^":"Q;",$isdS:1,"%":"HTMLTemplateElement"},
ns:{"^":"i;0m:width=","%":"TextMetrics"},
aC:{"^":"P;",$isaC:1,"%":"TextTrack"},
aD:{"^":"P;",$isaD:1,"%":"TextTrackCue|VTTCue"},
nt:{"^":"kF;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isaD")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.aD]},
"%":"TextTrackCueList"},
nu:{"^":"ej;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isaC")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.aC]},
"%":"TextTrackList"},
nw:{"^":"i;0k:length=","%":"TimeRanges"},
aE:{"^":"i;",$isaE:1,"%":"Touch"},
nx:{"^":"kK;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isaE")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.aE]},
"%":"TouchList"},
ny:{"^":"i;0k:length=","%":"TrackDefaultList"},
dY:{"^":"aj;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nM:{"^":"i;",
j:function(a){return String(a)},
"%":"URL"},
nO:{"^":"ig;0n:height=,0m:width=","%":"HTMLVideoElement"},
nP:{"^":"P;0k:length=","%":"VideoTrackList"},
nQ:{"^":"P;0n:height=,0m:width=","%":"VisualViewport"},
nR:{"^":"i;0m:width=","%":"VTTRegion"},
bg:{"^":"a8;",
gdD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.B("deltaY is not supported"))},
$isbg:1,
"%":"WheelEvent"},
jl:{"^":"P;",
gdk:function(a){var z,y,x
z=P.J
y=new P.U(0,$.G,[z])
x=H.m(new W.jm(new P.kB(y,[z])),{func:1,ret:-1,args:[P.J]})
this.d_(a)
this.d9(a,W.er(x,z))
return y},
d9:function(a,b){return a.requestAnimationFrame(H.aI(H.m(b,{func:1,ret:-1,args:[P.J]}),1))},
d_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ise_:1,
"%":"DOMWindow|Window"},
jm:{"^":"n:22;a",
$1:function(a){var z=this.a
a=H.aW(H.cS(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.R(P.bx("Future already completed"))
z.am(a)}},
e2:{"^":"w;",$ise2:1,"%":"Attr"},
nX:{"^":"kQ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isas")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.as]},
$isy:1,
$asy:function(){return[W.as]},
$asp:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"CSSRuleList"},
nY:{"^":"hv;",
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
C:function(a,b){var z
if(b==null)return!1
if(!H.am(b,"$isa0",[P.J],"$asa0"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.e8(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nZ:{"^":"kS;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isau")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asp:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"GamepadList"},
o3:{"^":"kU;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isw")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.w]},
"%":"MozNamedAttrMap|NamedNodeMap"},
o4:{"^":"kW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isaA")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
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
$asq:function(){return[W.aA]},
"%":"SpeechRecognitionResultList"},
o5:{"^":"kY;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.h(c,"$isaB")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"StyleSheetList"},
jw:{"^":"dE;cZ:a<",
E:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.b,P.b]})
for(z=this.gH(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gH:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.b])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.h(z[w],"$ise2")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asZ:function(){return[P.b,P.b]},
$asO:function(){return[P.b,P.b]}},
jF:{"^":"jw;a",
i:function(a,b){return J.ci(this.a,H.t(b))},
gk:function(a){return this.gH(this).length}},
jH:{"^":"j4;a,b,c,$ti"},
bX:{"^":"jH;a,b,c,$ti"},
jI:{"^":"j5;a,b,c,d,e,$ti",p:{
aF:function(a,b,c,d,e){var z=W.er(new W.jJ(c),W.aj)
if(z!=null&&!0)J.fq(a,b,z,!1)
return new W.jI(0,a,b,z,!1,[e])}}},
jJ:{"^":"n:23;a",
$1:function(a){return this.a.$1(H.h(a,"$isaj"))}},
by:{"^":"c;a",
cQ:function(a){var z,y
z=$.cV()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.U[y],W.lo())
for(y=0;y<12;++y)z.h(0,C.v[y],W.lp())}},
X:function(a){return $.f6().u(0,W.b5(a))},
S:function(a,b,c){var z,y,x
z=W.b5(a)
y=$.cV()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.c2(x.$4(a,b,c,this))},
$isae:1,
p:{
e6:function(a){var z,y
z=document.createElement("a")
y=new W.kp(z,window.location)
y=new W.by(y)
y.cQ(a)
return y},
o1:[function(a,b,c,d){H.h(a,"$isY")
H.t(b)
H.t(c)
H.h(d,"$isby")
return!0},"$4","lo",16,0,13],
o2:[function(a,b,c,d){var z,y,x
H.h(a,"$isY")
H.t(b)
H.t(c)
z=H.h(d,"$isby").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lp",16,0,13]}},
q:{"^":"c;$ti",
gw:function(a){return new W.ds(a,this.gk(a),-1,[H.bk(this,a,"q",0)])}},
dH:{"^":"c;a",
X:function(a){return C.a.bs(this.a,new W.iw(a))},
S:function(a,b,c){return C.a.bs(this.a,new W.iv(a,b,c))},
$isae:1},
iw:{"^":"n:9;a",
$1:function(a){return H.h(a,"$isae").X(this.a)}},
iv:{"^":"n:9;a,b,c",
$1:function(a){return H.h(a,"$isae").S(this.a,this.b,this.c)}},
kq:{"^":"c;",
cR:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aD(0,new W.kr())
y=b.aD(0,new W.ks())
this.b.I(0,z)
x=this.c
x.I(0,C.W)
x.I(0,y)},
X:function(a){return this.a.u(0,W.b5(a))},
S:["cB",function(a,b,c){var z,y
z=W.b5(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dj(c)
else if(y.u(0,"*::"+b))return this.d.dj(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isae:1},
kr:{"^":"n:10;",
$1:function(a){return!C.a.u(C.v,H.t(a))}},
ks:{"^":"n:10;",
$1:function(a){return C.a.u(C.v,H.t(a))}},
kC:{"^":"kq;e,a,b,c,d",
S:function(a,b,c){if(this.cB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ci(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
eh:function(){var z,y,x,w,v
z=P.b
y=P.cy(C.u,z)
x=H.o(C.u,0)
w=H.m(new W.kD(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.kC(y,P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z),null)
y.cR(null,new H.id(C.u,w,[x,z]),v,null)
return y}}},
kD:{"^":"n:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
kA:{"^":"c;",
X:function(a){var z=J.C(a)
if(!!z.$isdN)return!1
z=!!z.$isM
if(z&&W.b5(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.h.ct(b,"on"))return!1
return this.X(a)},
$isae:1},
ds:{"^":"c;a,b,c,0d,$ti",
sbh:function(a){this.d=H.z(a,H.o(this,0))},
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbh(J.b0(this.a,z))
this.c=z
return!0}this.sbh(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb6:1},
jz:{"^":"c;a",$isP:1,$ise_:1,p:{
jA:function(a){if(a===window)return H.h(a,"$ise_")
else return new W.jz(a)}}},
ae:{"^":"c;"},
kp:{"^":"c;a,b",$isnL:1},
ek:{"^":"c;a",
aN:function(a){new W.kN(this).$2(a,null)},
a1:function(a,b){if(b==null)J.d3(a)
else J.bG(b,a)},
dd:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fL(a)
x=J.ci(y.gcZ(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a6(t)}v="element unprintable"
try{v=J.bn(a)}catch(t){H.a6(t)}try{u=W.b5(a)
this.dc(H.h(a,"$isY"),b,z,v,u,H.h(y,"$isO"),H.t(x))}catch(t){if(H.a6(t) instanceof P.ar)throw t
else{this.a1(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dc:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a1(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.X(a)){this.a1(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a1(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.f(z.slice(0),[H.o(z,0)])
for(x=f.gH(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.S(a,J.fY(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.d6(z,v)}}if(!!J.C(a).$isdS)this.aN(a.content)},
$isn2:1},
kN:{"^":"n:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dd(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a1(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fM(z)}catch(w){H.a6(w)
v=H.h(z,"$isw")
if(x){u=v.parentNode
if(u!=null)J.bG(u,v)}else J.bG(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isw")}}},
jy:{"^":"i+hn;"},
jB:{"^":"i+p;"},
jC:{"^":"jB+q;"},
jD:{"^":"i+p;"},
jE:{"^":"jD+q;"},
jL:{"^":"i+p;"},
jM:{"^":"jL+q;"},
k0:{"^":"i+p;"},
k1:{"^":"k0+q;"},
k9:{"^":"i+Z;"},
ka:{"^":"i+Z;"},
kb:{"^":"i+p;"},
kc:{"^":"kb+q;"},
kd:{"^":"i+p;"},
ke:{"^":"kd+q;"},
kh:{"^":"i+p;"},
ki:{"^":"kh+q;"},
ko:{"^":"i+Z;"},
ee:{"^":"P+p;"},
ef:{"^":"ee+q;"},
kt:{"^":"i+p;"},
ku:{"^":"kt+q;"},
kx:{"^":"i+Z;"},
kE:{"^":"i+p;"},
kF:{"^":"kE+q;"},
ei:{"^":"P+p;"},
ej:{"^":"ei+q;"},
kJ:{"^":"i+p;"},
kK:{"^":"kJ+q;"},
kP:{"^":"i+p;"},
kQ:{"^":"kP+q;"},
kR:{"^":"i+p;"},
kS:{"^":"kR+q;"},
kT:{"^":"i+p;"},
kU:{"^":"kT+q;"},
kV:{"^":"i+p;"},
kW:{"^":"kV+q;"},
kX:{"^":"i+p;"},
kY:{"^":"kX+q;"}}],["","",,P,{"^":"",
a5:function(a){var z,y,x,w,v
if(a==null)return
z=P.v(P.b,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.t(y[w])
z.h(0,v,a[v])}return z},
lb:function(a,b){var z={}
a.E(0,new P.lc(z))
return z},
ld:function(a){var z,y
z=new P.U(0,$.G,[null])
y=new P.e1(z,[null])
a.then(H.aI(new P.le(y),1))["catch"](H.aI(new P.lf(y),1))
return z},
dk:function(){var z=$.dj
if(z==null){z=J.ce(window.navigator.userAgent,"Opera",0)
$.dj=z}return z},
hs:function(){var z,y
z=$.dg
if(z!=null)return z
y=$.dh
if(y==null){y=J.ce(window.navigator.userAgent,"Firefox",0)
$.dh=y}if(y)z="-moz-"
else{y=$.di
if(y==null){y=!P.dk()&&J.ce(window.navigator.userAgent,"Trident/",0)
$.di=y}if(y)z="-ms-"
else z=P.dk()?"-o-":"-webkit-"}$.dg=z
return z},
jn:{"^":"c;",
bU:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aC:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.R(P.d9("DateTime is outside valid range: "+y))
return new P.b3(y,!0)}if(a instanceof RegExp)throw H.d(P.cG("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.ld(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bU(a)
x=this.b
if(v>=x.length)return H.j(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.i7()
z.a=u
C.a.h(x,v,u)
this.dJ(a,new P.jp(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bU(t)
x=this.b
if(v>=x.length)return H.j(x,v)
u=x[v]
if(u!=null)return u
s=J.aX(t)
r=s.gk(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.c4(u),q=0;q<r;++q)x.h(u,q,this.aC(s.i(t,q)))
return u}return a}},
jp:{"^":"n:26;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aC(b)
J.fo(z,a,y)
return y}},
lc:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
jo:{"^":"jn;a,b,c",
dJ:function(a,b){var z,y,x,w
H.m(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.N)(z),++x){w=z[x]
b.$2(w,a[w])}}},
le:{"^":"n:11;a",
$1:function(a){return this.a.bG(0,a)}},
lf:{"^":"n:11;a",
$1:function(a){return this.a.du(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
e7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
bb:{"^":"c;af:a>,a4:b>,$ti",
j:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.am(b,"$isbb",[P.J],null)&&this.a==J.bL(b)&&this.b==b.ga4(b)},
gv:function(a){var z,y,x
z=J.aq(this.a)
y=J.aq(this.b)
y=P.e7(P.e7(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
kj:{"^":"c;"},
a0:{"^":"kj;$ti"}}],["","",,P,{"^":"",h8:{"^":"i;",$ish8:1,"%":"SVGAnimatedLength"},mk:{"^":"M;0n:height=,0m:width=","%":"SVGFEBlendElement"},ml:{"^":"M;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},mm:{"^":"M;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},mn:{"^":"M;0n:height=,0m:width=","%":"SVGFECompositeElement"},mo:{"^":"M;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},mp:{"^":"M;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},mq:{"^":"M;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},mr:{"^":"M;0n:height=,0m:width=","%":"SVGFEFloodElement"},ms:{"^":"M;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},mt:{"^":"M;0n:height=,0m:width=","%":"SVGFEImageElement"},mu:{"^":"M;0n:height=,0m:width=","%":"SVGFEMergeElement"},mv:{"^":"M;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},mw:{"^":"M;0n:height=,0m:width=","%":"SVGFEOffsetElement"},mx:{"^":"M;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},my:{"^":"M;0n:height=,0m:width=","%":"SVGFETileElement"},mz:{"^":"M;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},mC:{"^":"M;0n:height=,0m:width=","%":"SVGFilterElement"},mD:{"^":"bq;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hK:{"^":"bq;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bq:{"^":"M;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mL:{"^":"bq;0n:height=,0m:width=","%":"SVGImageElement"},b8:{"^":"i;",$isb8:1,"%":"SVGLength"},mR:{"^":"k3;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.r(b)
H.h(c,"$isb8")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b8]},
$isl:1,
$asl:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$asq:function(){return[P.b8]},
"%":"SVGLengthList"},mS:{"^":"M;0n:height=,0m:width=","%":"SVGMaskElement"},ba:{"^":"i;",$isba:1,"%":"SVGNumber"},n3:{"^":"kg;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.r(b)
H.h(c,"$isba")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.ba]},
$isl:1,
$asl:function(){return[P.ba]},
$isa:1,
$asa:function(){return[P.ba]},
$asq:function(){return[P.ba]},
"%":"SVGNumberList"},n8:{"^":"M;0n:height=,0m:width=","%":"SVGPatternElement"},na:{"^":"i;0k:length=","%":"SVGPointList"},nc:{"^":"i;0n:height=,0m:width=","%":"SVGRect"},nd:{"^":"hK;0n:height=,0m:width=","%":"SVGRectElement"},dN:{"^":"M;",$isdN:1,"%":"SVGScriptElement"},no:{"^":"kz;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.r(b)
H.t(c)
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b]},
$isl:1,
$asl:function(){return[P.b]},
$isa:1,
$asa:function(){return[P.b]},
$asq:function(){return[P.b]},
"%":"SVGStringList"},M:{"^":"Y;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.ae])
C.a.l(z,W.e6(null))
C.a.l(z,W.eh())
C.a.l(z,new W.kA())
c=new W.ek(new W.dH(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dA(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aa(w)
u=z.ga7(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.G(v,x)
return v},
$isM:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},np:{"^":"bq;0n:height=,0m:width=","%":"SVGSVGElement"},be:{"^":"i;",$isbe:1,"%":"SVGTransform"},nz:{"^":"kM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.r(b)
H.h(c,"$isbe")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.be]},
$isl:1,
$asl:function(){return[P.be]},
$isa:1,
$asa:function(){return[P.be]},
$asq:function(){return[P.be]},
"%":"SVGTransformList"},nN:{"^":"bq;0n:height=,0m:width=","%":"SVGUseElement"},k2:{"^":"i+p;"},k3:{"^":"k2+q;"},kf:{"^":"i+p;"},kg:{"^":"kf+q;"},ky:{"^":"i+p;"},kz:{"^":"ky+q;"},kL:{"^":"i+p;"},kM:{"^":"kL+q;"}}],["","",,P,{"^":"",ak:{"^":"c;",$isl:1,
$asl:function(){return[P.ao]},
$isa:1,
$asa:function(){return[P.ao]},
$isjd:1}}],["","",,P,{"^":"",lP:{"^":"i;0k:length=","%":"AudioBuffer"},lQ:{"^":"jx;",
i:function(a,b){return P.a5(a.get(H.t(b)))},
E:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a5(y.value[1]))}},
gH:function(a){var z=H.f([],[P.b])
this.E(a,new P.ha(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.b,null]},
$isO:1,
$asO:function(){return[P.b,null]},
"%":"AudioParamMap"},ha:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},lR:{"^":"P;0k:length=","%":"AudioTrackList"},hb:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n5:{"^":"hb;0k:length=","%":"OfflineAudioContext"},jx:{"^":"i+Z;"}}],["","",,P,{"^":"",hd:{"^":"i;",$ishd:1,"%":"WebGLBuffer"},hG:{"^":"i;",$ishG:1,"%":"WebGLFramebuffer"},iL:{"^":"i;",$isiL:1,"%":"WebGLProgram"},ne:{"^":"i;",
br:function(a,b){return a.activeTexture(b)},
bt:function(a,b,c){return a.attachShader(b,c)},
bu:function(a,b,c){return a.bindBuffer(b,c)},
bw:function(a,b,c){return a.bindFramebuffer(b,c)},
bx:function(a,b,c){return a.bindTexture(b,c)},
by:function(a,b){return a.blendEquation(b)},
bz:function(a,b,c){return a.blendFunc(b,c)},
bA:function(a,b,c,d){return a.bufferData(b,c,d)},
bB:function(a,b){return a.checkFramebufferStatus(b)},
bC:function(a,b){return a.clear(b)},
bD:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createFramebuffer()},
bJ:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
bV:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ag:function(a){return P.a5(a.getContextAttributes())},
aE:function(a){return a.getError()},
aG:function(a,b){return a.getProgramInfoLog(b)},
aH:function(a,b,c){return a.getProgramParameter(b,c)},
aJ:function(a,b){return a.getShaderInfoLog(b)},
aK:function(a,b,c){return a.getShaderParameter(b,c)},
aL:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
aP:function(a,b,c){return a.shaderSource(b,c)},
aQ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c2:function(a,b,c,d){return a.texParameterf(b,c,d)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
c5:function(a,b,c){return a.uniform1f(b,c)},
c6:function(a,b,c){return a.uniform1fv(b,c)},
c7:function(a,b,c){return a.uniform1i(b,c)},
c8:function(a,b,c){return a.uniform1iv(b,c)},
c9:function(a,b,c){return a.uniform2fv(b,c)},
ca:function(a,b,c){return a.uniform3fv(b,c)},
cb:function(a,b,c){return a.uniform4fv(b,c)},
cc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ce:function(a,b){return a.useProgram(b)},
cf:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ci:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},nf:{"^":"i;",
dm:function(a,b){return a.beginTransformFeedback(b)},
dr:function(a,b){return a.bindVertexArray(b)},
dC:function(a){return a.createVertexArray()},
dE:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dF:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dH:function(a){return a.endTransformFeedback()},
e_:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
e2:function(a,b,c,d){this.dg(a,b,H.u(c,"$isa",[P.b],"$asa"),d)
return},
dg:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e4:function(a,b,c){return a.vertexAttribDivisor(b,c)},
br:function(a,b){return a.activeTexture(b)},
bt:function(a,b,c){return a.attachShader(b,c)},
bu:function(a,b,c){return a.bindBuffer(b,c)},
bw:function(a,b,c){return a.bindFramebuffer(b,c)},
bx:function(a,b,c){return a.bindTexture(b,c)},
by:function(a,b){return a.blendEquation(b)},
bz:function(a,b,c){return a.blendFunc(b,c)},
bA:function(a,b,c,d){return a.bufferData(b,c,d)},
bB:function(a,b){return a.checkFramebufferStatus(b)},
bC:function(a,b){return a.clear(b)},
bD:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createFramebuffer()},
bJ:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
bV:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ag:function(a){return P.a5(a.getContextAttributes())},
aE:function(a){return a.getError()},
aG:function(a,b){return a.getProgramInfoLog(b)},
aH:function(a,b,c){return a.getProgramParameter(b,c)},
aJ:function(a,b){return a.getShaderInfoLog(b)},
aK:function(a,b,c){return a.getShaderParameter(b,c)},
aL:function(a,b,c){return a.getUniformLocation(b,c)},
bY:function(a,b){return a.linkProgram(b)},
aP:function(a,b,c){return a.shaderSource(b,c)},
aQ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c2:function(a,b,c,d){return a.texParameterf(b,c,d)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
c5:function(a,b,c){return a.uniform1f(b,c)},
c6:function(a,b,c){return a.uniform1fv(b,c)},
c7:function(a,b,c){return a.uniform1i(b,c)},
c8:function(a,b,c){return a.uniform1iv(b,c)},
c9:function(a,b,c){return a.uniform2fv(b,c)},
ca:function(a,b,c){return a.uniform3fv(b,c)},
cb:function(a,b,c){return a.uniform4fv(b,c)},
cc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ce:function(a,b){return a.useProgram(b)},
cf:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ci:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},iW:{"^":"i;",$isiW:1,"%":"WebGLShader"},j9:{"^":"i;",$isj9:1,"%":"WebGLTexture"},jf:{"^":"i;",$isjf:1,"%":"WebGLUniformLocation"},jj:{"^":"i;",$isjj:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",nl:{"^":"kw;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.a5(this.d3(a,b))},
h:function(a,b,c){H.r(b)
H.h(c,"$isO")
throw H.d(P.B("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
d3:function(a,b){return a.item(b)},
$asp:function(){return[[P.O,,,]]},
$isl:1,
$asl:function(){return[[P.O,,,]]},
$isa:1,
$asa:function(){return[[P.O,,,]]},
$asq:function(){return[[P.O,,,]]},
"%":"SQLResultSetRowList"},kv:{"^":"i+p;"},kw:{"^":"kv+q;"}}],["","",,G,{"^":"",
jq:function(a){var z,y,x,w
z=H.f(a.split("\n"),[P.b])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a3(z,"\n")},
e3:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bK(a,b)
z.aP(a,y,c)
z.bF(a,y)
x=H.c2(z.aK(a,y,35713))
if(x!=null&&!x){w=z.aJ(a,y)
P.aL("E:Compilation failed:")
P.aL("E:"+G.jq(c))
P.aL("E:Failure:")
P.aL(C.h.J("E:",w))
throw H.d(w)}return y},
dt:function(a,b){var z,y,x
H.u(a,"$isa",[T.E],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bL(a[y]))
if(y>=a.length)return H.j(a,y)
C.b.h(b,z+1,J.ch(a[y]))
z+=2
if(y>=a.length)return H.j(a,y)
x=J.d0(a[y])
if(z>=b.length)return H.j(b,z)
b[z]=x}return b},
hD:function(a,b){var z,y
H.u(a,"$isa",[T.L],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bL(a[y]))
if(y>=a.length)return H.j(a,y)
C.b.h(b,z+1,J.ch(a[y]))}return b},
hE:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.aQ],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bL(a[y]))
if(y>=a.length)return H.j(a,y)
C.b.h(b,z+1,J.ch(a[y]))
x=z+2
if(y>=a.length)return H.j(a,y)
w=J.d0(a[y])
v=b.length
if(x>=v)return H.j(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.j(a,y)
w=J.fO(a[y])
if(z>=v)return H.j(b,z)
b[z]=w}return b},
hC:function(a,b){var z,y
H.u(a,"$isa",[[P.a,P.F]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.h(b,z,J.b0(a[y],0))
if(y>=a.length)return H.j(a,y)
C.o.h(b,z+1,J.b0(a[y],1))
if(y>=a.length)return H.j(a,y)
C.o.h(b,z+2,J.b0(a[y],2))
if(y>=a.length)return H.j(a,y)
C.o.h(b,z+3,J.b0(a[y],3))}return b},
jZ:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.F]],v=[P.ao],u=[T.aQ],t=[T.E],s=[T.L];y.q();){r=y.d
if(!x.ad(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ew>0)H.aZ("I: "+r)
continue}q=z.i(0,r)
switch($.ab().i(0,r).a){case"vec2":b.a_(r,G.hD(H.bE(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.dt(H.bE(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.hE(H.bE(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.c_(H.bE(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.hC(H.bE(q,"$isa",w,"$asa"),null),4)
break}}},
dw:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.b
w=P.v(x,P.c)
v=J.fB(z.a)
u=new G.ih(z,v,4,w,y,0,-1,P.v(x,P.ak),"meshdata:"+a,!1,!0)
x=G.dt(c.d,null)
w.h(0,"aPosition",J.cf(z.a))
u.ch=x
u.aZ("aPosition",x,3)
t=$.ab().i(0,"aPosition")
if(t==null)H.R("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bI(z.a,v)
z.bT(0,s,0)
z.cg(0,w.i(0,"aPosition"),s,t.b0(),5126,!1,0,0)
y=H.u(c.cF(),"$isa",[P.F],"$asa")
u.y=J.cf(z.a)
x=u.ch.length
if(x<768){u.sap(new Uint8Array(H.c_(y)))
u.Q=5121}else if(x<196608){u.sap(new Uint16Array(H.c_(y)))
u.Q=5123}else{u.sap(new Uint32Array(H.c_(y)))
u.Q=5125}J.bI(z.a,v)
y=u.y
x=u.cx
J.cc(z.a,34963,y)
J.cZ(z.a,34963,x,35048)
G.jZ(c,u)
return u},
bS:{"^":"c;"},
A:{"^":"bS;d,a,b,c",
b1:function(){return this.d},
j:function(a){var z,y,x,w
z=H.f(["{"+new H.dW(H.ll(this)).j(0)+"}["+this.a+"]"],[P.b])
for(y=this.d,x=new H.al(y,[H.o(y,0)]),x=x.gw(x);x.q();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a3(z,"\n")}},
hf:{"^":"c;0a,b",
bT:function(a,b,c){J.fI(this.a,b)
if(c>0)J.h4(this.a,b,c)},
cg:function(a,b,c,d,e,f,g,h){J.cc(this.a,34962,b)
J.h5(this.a,c,d,e,!1,g,h)}},
du:{"^":"c;a,b,c,d,e",
aS:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.cd(z.a,36160,y)
J.h6(z.a,b,c,d,e)
if(a!==0)J.fv(z.a,a)}},
cq:{"^":"c;a,b,c"},
cr:{"^":"c;a,b,c,d"},
dv:{"^":"c;a,b,c,d,e",
a8:function(a){switch($.ab().i(0,a).a){case"vec2":this.e.h(0,a,H.f([],[T.L]))
break
case"vec3":this.e.h(0,a,H.f([],[T.E]))
break
case"vec4":this.e.h(0,a,H.f([],[T.aQ]))
break
case"float":this.e.h(0,a,H.f([],[P.ao]))
break
case"uvec4":this.e.h(0,a,H.f([],[[P.a,P.F]]))
break}},
aX:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.E],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x){w=a[x]
v=new T.E(new Float32Array(3))
v.U(w)
C.a.l(y,v)}},
aU:function(a,b){var z,y,x,w,v,u,t
z=[T.L]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.N)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.L(u))}},
aV:function(a,b){var z,y,x,w,v,u
z=[T.E]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.N)(b),++w){v=b[w]
u=new T.E(new Float32Array(3))
u.U(v)
x.l(y,u)}},
aY:function(a){var z
H.u(a,"$isa",[T.E],"$asa")
z=this.d.length
C.a.l(this.c,new G.cr(z,z+1,z+2,z+3))
this.aX(a)},
cF:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.f(x,[P.F])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.N)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
j:function(a){var z,y,x,w,v
z=H.f(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.b])
for(y=this.e,x=new H.al(y,[H.o(y,0)]),x=x.gw(x);x.q();){w=x.d
v=$.ab().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a3(z," ")}},
dU:{"^":"c;a,b,c"},
dT:{"^":"c;a,b,c"},
ie:{"^":"A;d,a,b,c"},
ih:{"^":"bS;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sap:function(a){this.cx=H.u(a,"$isa",[P.F],"$asa")},
aZ:function(a,b,c){var z,y
C.h.a0(a,0)
H.h(b,"$isak")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.cc(z.a,34962,y)
J.cZ(z.a,34962,b,35048)},
cG:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cW(a,0)===105
if(z&&this.z===0)this.z=C.f.cC(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.cf(x.a))
this.aZ(a,b,c)
w=$.ab().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bI(x.a,this.e)
x.bT(0,v,z?1:0)
x.cg(0,y.i(0,a),v,w.b0(),5126,!1,0,0)},
j:function(a){var z,y,x,w
z=this.cx
y=H.f(["Faces:"+(z==null?0:z.length)],[P.b])
for(z=this.cy,x=new H.al(z,[H.o(z,0)]),x=x.gw(x);x.q();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")}},
iz:{"^":"A;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cD:function(a,b){var z
if(typeof a!=="number")return a.e6()
if(typeof b!=="number")return H.bC(b)
z=a/b
if(this.z===z)return
this.z=z
this.b4()},
b4:function(){var z,y,x,w,v,u
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
b1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aF())
x=this.cy
x.U(z.d)
z=this.cx
z.U(this.db)
w=z.a
v=w[0]
u=w[4]
t=w[8]
s=w[12]
r=w[1]
q=w[5]
p=w[9]
o=w[13]
n=w[2]
m=w[6]
l=w[10]
k=w[14]
j=w[3]
i=w[7]
h=w[11]
g=w[15]
f=x.a
e=f[0]
d=f[4]
c=f[8]
b=f[12]
a=f[1]
a0=f[5]
a1=f[9]
a2=f[13]
a3=f[2]
a4=f[6]
a5=f[10]
a6=f[14]
a7=f[3]
a8=f[7]
a9=f[11]
b0=f[15]
w[0]=v*e+u*a+t*a3+s*a7
w[4]=v*d+u*a0+t*a4+s*a8
w[8]=v*c+u*a1+t*a5+s*a9
w[12]=v*b+u*a2+t*a6+s*b0
w[1]=r*e+q*a+p*a3+o*a7
w[5]=r*d+q*a0+p*a4+o*a8
w[9]=r*c+q*a1+p*a5+o*a9
w[13]=r*b+q*a2+p*a6+o*b0
w[2]=n*e+m*a+l*a3+k*a7
w[6]=n*d+m*a0+l*a4+k*a8
w[10]=n*c+m*a1+l*a5+k*a9
w[14]=n*b+m*a2+l*a6+k*b0
w[3]=j*e+i*a+h*a3+g*a7
w[7]=j*d+i*a0+h*a4+g*a8
w[11]=j*c+i*a1+h*a5+g*a9
w[15]=j*b+i*a2+h*a6+g*b0
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
mh:{"^":"c;"},
iQ:{"^":"bS;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cJ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.h(0,t,J.d1(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.h(0,t,J.d1(w.a,v,t))}},
cM:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.f([],[P.b])
x=H.f([],[P.b])
for(y=new H.al(y,[H.o(y,0)]),y=y.gw(y);y.q();){w=y.d
if(!z.ad(0,w))C.a.l(x,w)}for(z=this.x,z=P.k5(z,z.r,H.o(z,0)),y=this.Q;z.q();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(b,"$isO",[P.b,P.c],"$asO")
z=Date.now()
for(y=new H.al(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.q();){s=y.d
switch(J.cW(s,0)){case 117:if(w.ad(0,s)){r=b.i(0,s)
if(v.ad(0,s))H.aZ("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ab().i(0,s)
if(q==null)H.R("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.r(r)
J.cj(x.a,p,r)}else if(!!J.C(r).$ishR)J.h2(x.a,p,r)
break
case"float":if(q.c===0){H.ev(r)
J.h0(x.a,p,r)}else if(!!J.C(r).$isak)J.h1(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ah(r,"$isaO").a
J.d8(x.a,p,!1,s)}else if(!!J.C(r).$isak)J.d8(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ah(r,"$iscz").a
J.d7(x.a,p,!1,s)}else if(!!J.C(r).$isak)J.d7(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d6(o,p,H.ah(r,"$isaQ").a)
else J.d6(o,p,H.h(r,"$isak"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d5(o,p,H.ah(r,"$isE").a)
else J.d5(o,p,H.h(r,"$isak"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d4(o,p,H.ah(r,"$isL").a)
else J.d4(o,p,H.h(r,"$isak"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bC(s)
J.cX(x.a,33984+s)
s=H.ah(r,"$iscF").b
J.bH(x.a,3553,s)
s=this.ch
J.cj(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bC(s)
J.cX(x.a,33984+s)
s=H.ah(r,"$iscF").b
J.bH(x.a,34067,s)
s=this.ch
J.cj(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
default:H.aZ("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.X(r,!0)
o=x.a
if(s)J.bJ(o,2929)
else J.cg(o,2929)
break
case"cStencilFunc":H.ah(r,"$isdU")
s=r.a
o=x.a
if(s===1281)J.cg(o,2960)
else{J.bJ(o,2960)
o=r.b
n=r.c
J.fV(x.a,s,o,n)}break
case"cDepthWrite":H.c2(r)
J.fC(x.a,r)
break
case"cBlendEquation":H.ah(r,"$isdT")
s=r.a
o=x.a
if(s===1281)J.cg(o,3042)
else{J.bJ(o,3042)
o=r.b
n=r.c
J.ft(x.a,o,n)
J.fs(x.a,s)}break}++t
break}}m=P.dl(0,0,0,Date.now()-new P.b3(z,!1).a,0,0)
""+t
m.j(0)},
cE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[G.A],"$asa")
Date.now()
z=this.d
J.h3(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b9()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.N)(b),++x){w=b[x]
this.cP(w.a,w.b1())}y=this.Q
y.a2(0)
for(v=a.cy,v=new H.al(v,[H.o(v,0)]),v=v.gw(v);v.q();)y.l(0,v.d)
u=this.cM()
if(u.length!==0)P.aL("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bI(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cG()
s=a.Q
r=a.z
if(t)J.fr(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fG(q,v,y,s,0,r)
else J.fF(q,v,y,s,0)}else{s=z.a
if(r>1)J.fE(s,v,0,y,r)
else J.fD(s,v,0,y)}if(t)J.fJ(z.a)},
b_:function(a,b){return this.cE(a,b,null)},
p:{
dM:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.b
y=P.a7(null,null,null,z)
x=c.b
w=d.b
v=H.u(c.f,"$isa",[z],"$asa")
u=J.fz(b.a)
t=G.e3(b.a,35633,x)
J.cY(b.a,u,t)
s=G.e3(b.a,35632,w)
J.cY(b.a,u,s)
if(v.length>0)J.fZ(b.a,u,v,35980)
J.fT(b.a,u)
if(!H.c2(J.fS(b.a,u,35714)))H.R(J.fR(b.a,u))
z=new G.iQ(b,c,d,u,P.cy(c.c,z),P.v(z,P.c),P.v(z,z),y,a,!1,!0)
z.cJ(a,b,c,d)
return z}}},
I:{"^":"c;a,b,c",
b0:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
dO:{"^":"c;a,0b,c,d,e,f,r,x",
aT:function(a){var z,y,x,w
H.u(a,"$isa",[P.b],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.h(0,w,this.r);++this.r}C.a.ah(z)},
B:function(a){var z,y,x
H.u(a,"$isa",[P.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.ah(y)},
aW:function(a){var z,y
H.u(a,"$isa",[P.b],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ah(z)},
b3:function(a,b){var z=[P.b]
this.b=this.aj(!0,H.u(a,"$isa",z,"$asa"),H.u(b,"$isa",z,"$asa"))},
b2:function(a){return this.b3(a,null)},
cK:function(a,b){this.b=this.aj(!1,H.u(a,"$isa",[P.b],"$asa"),b)},
D:function(a){return this.cK(a,null)},
aj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.b]
H.u(b,"$isa",z,"$asa")
H.u(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.f(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.ab().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.ab().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.I(w,c)
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.a3(w,"\n")},
p:{
S:function(a){var z,y
z=P.b
y=[z]
return new G.dO(a,H.f([],y),H.f([],y),H.f([],y),H.f([],y),0,P.v(z,P.F))}}},
j_:{"^":"bS;",
aF:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
ja:{"^":"c;a,b,c,d,e,f,r"},
cF:{"^":"c;",
j:function(a){return"Texture["+this.a+", "+this.c+"]"}},
je:{"^":"cF;f,r,x,a,b,c,d,e",
j:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dX:function(a,b,c,d,e,f){var z,y
z=J.fA(a.a)
J.bH(a.a,3553,z)
J.fX(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.fW(a.a,3553,34046,y)
y=f.r
J.bM(a.a,3553,10240,y)
y=f.f
J.bM(a.a,3553,10241,y)
if(f.b){J.bM(a.a,3553,10242,33071)
J.bM(a.a,3553,10243,33071)}f.c
J.fQ(a.a)
J.bH(a.a,3553,null)
return new G.je(c,d,e,b,z,3553,a,f)}}}}],["","",,Y,{"^":"",
hP:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=H.f([],[G.cq])
y=H.f([],[G.cr])
x=[T.E]
w=H.f([],x)
v=P.b
u=new G.dv(!1,z,y,w,P.v(v,[P.a,,]))
u.a8("aTexUV")
u.a8("aNormal")
t=P.v(v,P.F)
s=a4.split("\n")
r=H.f([],x)
q=H.f([],x)
v=[T.L]
p=H.f([],v)
y=Date.now()
o=P.dL("\\s+",!0,!1)
n=P.dL("\\s\\s*\\$",!0,!1)
for(m=s.length,l=0;l<s.length;s.length===m||(0,H.N)(s),++l){k=s[l]
k.toString
j=H.lH(k,o," ")
i=H.lJ(j,n,"",0)
j=i.length
if(j!==0){if(0>=j)return H.j(i,0)
j=i[0]==="#"}else j=!0
if(j)continue
h=i.split(" ")
j=h.length
if(0>=j)return H.j(h,0)
g=h[0]
if(J.X(g,"g")){if(1>=j)return H.j(h,1)
t.h(0,h[1],r.length)}else if(J.X(g,"v")){if(1>=j)return H.j(h,1)
g=P.aJ(h[1],null)
if(2>=j)return H.j(h,2)
f=P.aJ(h[2],null)
if(3>=j)return H.j(h,3)
j=P.aJ(h[3],null)
e=new Float32Array(3)
C.b.h(e,0,g)
C.b.h(e,1,f)
C.b.h(e,2,j)
C.a.l(r,new T.E(e))}else if(J.X(g,"vt")){if(1>=j)return H.j(h,1)
g=P.aJ(h[1],null)
if(2>=j)return H.j(h,2)
j=P.aJ(h[2],null)
f=new Float32Array(2)
C.b.h(f,0,g)
C.b.h(f,1,j)
C.a.l(p,new T.L(f))}else if(J.X(g,"vn")){if(1>=j)return H.j(h,1)
g=P.aJ(h[1],null)
if(2>=j)return H.j(h,2)
f=P.aJ(h[2],null)
if(3>=j)return H.j(h,3)
j=P.aJ(h[3],null)
e=new Float32Array(3)
C.b.h(e,0,g)
C.b.h(e,1,f)
C.b.h(e,2,j)
C.a.l(q,new T.E(e))}else if(J.X(g,"f")){if(j!==4&&j!==5){H.aZ("*** Error: face '"+i+"' not handled")
continue}d=H.f([],x)
c=H.f([],x)
b=H.f([],v)
for(a=1;j=h.length,a<j;++a){a0=J.fU(h[a],"/")
for(;a0.length<3;)C.a.l(a0,"")
j=P.cQ(a0[0],null,null)
if(typeof j!=="number")return j.Z()
a1=j-1
if(1>=a0.length)return H.j(a0,1)
if(J.X(a0[1],""))a2=-1
else{if(1>=a0.length)return H.j(a0,1)
j=P.cQ(a0[1],null,null)
if(typeof j!=="number")return j.Z()
a2=j-1}if(2>=a0.length)return H.j(a0,2)
if(J.X(a0[2],""))a3=-1
else{if(2>=a0.length)return H.j(a0,2)
j=P.cQ(a0[2],null,null)
if(typeof j!=="number")return j.Z()
a3=j-1}j=r.length
if(a1<j){if(a1<0)return H.j(r,a1)
C.a.l(d,r[a1])}else C.a.l(d,new T.E(new Float32Array(3)))
if(a2!==-1&&a2<p.length){if(a2<0||a2>=p.length)return H.j(p,a2)
C.a.l(b,p[a2])}else{H.aZ("problem uv "+a+" "+a2)
C.a.l(b,new T.L(new Float32Array(2)))}if(a3!==-1&&a3<q.length){if(a3<0||a3>=q.length)return H.j(q,a3)
C.a.l(c,q[a3])}else{H.aZ("problem normals "+a+" "+a3)
C.a.l(c,new T.E(new Float32Array(3)))}}if(j===4){H.u(d,"$isa",x,"$asa")
a=w.length
C.a.l(z,new G.cq(a,a+1,a+2))
u.aX(d)}else u.aY(d)
u.aV("aNormal",c)
u.aU("aTexUV",b)}}P.aL("loaded ("+P.dl(0,0,0,Date.now()-new P.b3(y,!1).a,0,0).j(0)+") "+u.j(0))
return u}}],["","",,R,{"^":"",
k7:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.jG("span",null),"$isY")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).al(y,"float")
y.setProperty(x,"left","")
x=C.y.al(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.G(z,v)}return z},
j1:{"^":"c;",
cL:function(a,b,c){var z,y
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
y=J.k(z)
y.G(z,this.b)
y.G(z,this.d)
y.G(z,this.c)}},
j2:{"^":"j1;e,f,a,b,c,d",
cO:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.e1(y,2)+" fps"
C.r.cp(this.c,b)
x=C.f.W(30*C.A.ds(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isY")
v=w.style
u=""+x+"px"
v.height=u
C.r.G(z,w)},
cN:function(a){return this.cO(a,"")}}}],["","",,V,{"^":""}],["","",,D,{"^":"",
i9:function(a){var z,y,x,w
z=P.b
y=new P.U(0,$.G,[z])
x=new XMLHttpRequest()
C.z.dT(x,"GET",a)
w=W.bv
W.aF(x,"loadend",H.m(new D.ia(new P.e1(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.co(x,"")
return y},
ia:{"^":"n:27;a,b",
$1:function(a){H.h(a,"$isbv")
this.a.bG(0,H.aW(W.kZ(this.b.response),{futureOr:1,type:P.b}))}},
i1:{"^":"c;a,b,c",
cH:function(a){var z,y
a=document
z=W.b7
y={func:1,ret:-1,args:[z]}
W.aF(a,"keydown",H.m(new D.i3(this),y),!1,z)
W.aF(a,"keyup",H.m(new D.i4(this),y),!1,z)},
p:{
i2:function(a){var z=P.F
z=new D.i1(P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z))
z.cH(a)
return z}}},
i3:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isb7")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
i4:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isb7")
z=this.a
z.a.c0(0,a.which)
z.c.l(0,a.which)}},
ik:{"^":"c;a,b,c,d,e,f,r,x",
cI:function(a){var z,y
z=C.j.gdQ(a)
y=H.o(z,0)
W.aF(z.a,z.b,H.m(new D.im(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdP(a)
z=H.o(y,0)
W.aF(y.a,y.b,H.m(new D.io(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.j.gdR(a)
y=H.o(z,0)
W.aF(z.a,z.b,H.m(new D.ip(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdS(a)
z=H.o(y,0)
W.aF(y.a,y.b,H.m(new D.iq(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
il:function(a){var z=P.F
z=new D.ik(P.a7(null,null,null,z),P.a7(null,null,null,z),P.a7(null,null,null,z),0,0,0,0,0)
z.cI(a)
return z}}},
im:{"^":"n:3;a",
$1:function(a){var z,y
H.h(a,"$isa8")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.r(y.gbZ(a).a)
z.x=H.r(y.gbZ(a).b)
z.d=a.movementX
z.e=a.movementY}},
io:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isa8")
a.preventDefault()
P.aL("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
ip:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isa8")
a.preventDefault()
z=this.a
z.a.c0(0,a.button)
z.c.l(0,a.button)}},
iq:{"^":"n:28;a",
$1:function(a){H.h(a,"$isbg")
a.preventDefault()
this.a.f=H.r(C.ae.gdD(a))}},
iy:{"^":"j_;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bB:function(a){var z,y
z=C.b.dI(H.u(a,"$isl",[P.c],"$asl"),0,new A.ln(),P.F)
if(typeof z!=="number")return H.bC(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ln:{"^":"n:29;",
$2:function(a,b){var z,y
H.r(a)
z=J.aq(b)
if(typeof a!=="number")return a.J()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",cz:{"^":"c;a",
j:function(a){return"[0] "+this.O(0).j(0)+"\n[1] "+this.O(1).j(0)+"\n[2] "+this.O(2).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.j(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.cz){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
O:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.j(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.j(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.j(y,x)
z[2]=y[x]
return new T.E(z)},
aO:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b},
p:{
b9:function(a,b,c,d,e,f,g,h,i){var z=new Float32Array(9)
z[8]=i
z[7]=h
z[6]=g
z[5]=f
z[4]=e
z[3]=d
z[2]=c
z[1]=b
z[0]=a
return new T.cz(z)}}},aO:{"^":"c;a",
U:function(a){var z,y
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
j:function(a){return"[0] "+this.O(0).j(0)+"\n[1] "+this.O(1).j(0)+"\n[2] "+this.O(2).j(0)+"\n[3] "+this.O(3).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.j(z,b)
return z[b]},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aO){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
O:function(a){var z,y,x
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
return new T.aQ(z)},
a6:function(){var z=this.a
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
z[15]=1}},L:{"^":"c;a",
F:function(a,b){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)},
j:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.j(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gaf:function(a){return this.a[0]},
ga4:function(a){return this.a[1]}},E:{"^":"c;a",
P:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
U:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.E){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gk:function(a){var z,y,x
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
ay:function(a){var z,y,x
z=Math.sqrt(this.gbX())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aw:function(a){var z,y
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
z=new T.E(new Float32Array(3))
z.P(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gaf:function(a){return this.a[0]},
ga4:function(a){return this.a[1]},
gcj:function(a){return this.a[2]},
p:{
aP:function(a,b,c){var z=new T.E(new Float32Array(3))
z.P(a,b,c)
return z}}},aQ:{"^":"c;a",
j:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aQ){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bB(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.j(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gaf:function(a){return this.a[0]},
ga4:function(a){return this.a[1]},
gcj:function(a){return this.a[2]},
ge5:function(a){return this.a[3]}}}],["","",,U,{"^":"",
cB:function(a,b,c,d){return(b-a)*(0.5+0.5*Math.cos(d))+a},
iP:function(a,b){var z,y,x,w,v
z=$.f8()
y=P.b
x=P.c
w=P.v(y,x)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"none",!1,!0))
w=$.fl()
z=P.v(y,x)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"toon",!1,!0))
z=$.ff()
w=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(0.5,0.5)
w.h(0,"uCenter2",v)
w.h(0,"uPointSize",10)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"hexalate-10",!1,!0))
w=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(0.5,0.5)
w.h(0,"uCenter2",v)
w.h(0,"uPointSize",20)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"hexalate-20",!1,!0))
w=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(0.5,0.5)
w.h(0,"uCenter2",v)
w.h(0,"uPointSize",10)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"hexalate-varying",!1,!0))
w=$.fb()
z=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(0,0)
z.h(0,"uCenter2",v)
z.h(0,"uScale",0.8)
z.h(0,"uAngle",0.5)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"dot",!1,!0))
z=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(0,0)
z.h(0,"uCenter2",v)
z.h(0,"uScale",0.3)
z.h(0,"uAngle",0.5)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"dot2",!1,!0))
z=$.fm()
w=P.v(y,x)
w.h(0,"uScale",0.0009)
w.h(0,"uTime",0)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"tv-distortion",!1,!0))
w=$.fg()
z=P.v(y,x)
z.h(0,"uScale",8)
v=new T.L(new Float32Array(2))
v.F(0.5,0.5)
z.h(0,"uCenter2",v)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"kaleidoscope8",!1,!0))
z=P.v(y,x)
z.h(0,"uScale",5)
v=new T.L(new Float32Array(2))
v.F(0.5,0.5)
z.h(0,"uCenter2",v)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"kaleidoscope5",!1,!0))
z=$.fh()
w=P.v(y,x)
w.h(0,"uPointSize",8)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"lumidots-8",!1,!0))
w=P.v(y,x)
w.h(0,"uPointSize",16)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"lumidots-16",!1,!0))
w=P.v(y,x)
w.h(0,"uPointSize",16)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"lumidots-varying",!1,!0))
w=$.fk()
z=P.v(y,x)
z.h(0,"uPointSize",8)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"square-8",!1,!0))
z=P.v(y,x)
z.h(0,"uPointSize",16)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"square-16",!1,!0))
z=P.v(y,x)
z.h(0,"uPointSize",16)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"square-varying",!1,!0))
z=$.fj()
w=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(120,240)
w.h(0,"uRange",v)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"scanline",!1,!0))
w=$.fn()
z=P.v(y,x)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"water",!1,!0))
z=[y]
w=new G.dO("crosshatchPixelateF",H.f([],z),H.f([],z),H.f([],z),H.f([],z),0,P.v(y,P.F))
w.B(H.f(["uTexture"],z))
w.b=w.aj(!1,H.u(H.f(["#define MODE 0","float level1 = 1.0;\nfloat level2 = 0.7;\nfloat level3 = 0.5;\nfloat level4 = 0.3;\n\nfloat dist = 10.0;\nfloat thickness = 0.5;\n\n#if MODE == 0\n// diagonal crosshach\nvec2 slope = vec2(1.0, 1.0);\n#elif MODE == 1\n// regular crosshatch\nvec2 slope = vec2(1.0, 0.0);\n#else\nERROR\n#endif\n\nfloat PixelColor(vec2 pixel, float lum) {\n    if (lum < level1) {\n        // main anti diagonal\n        if (mod(pixel.x * slope.x + pixel.y * slope.y, dist) <= thickness) return 0.0; \n    }  \n  \n    if (lum < level2) { \n        // main diagonal\n        if (mod(pixel.x * slope.y - pixel.y * slope.x, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level3) {\n        // inbetween anti diagonals\n        if (mod(pixel.x * slope.x + pixel.y * slope.y - dist * 0.5, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level4) {\n        // inbetween main diagonals\n        if (mod(pixel.x * slope.y - pixel.y * slope.x - dist * 0.5, dist) <= thickness) return 0.0;\n    } \n    \n    return 1.0;\n}       \n       \nvoid main()  { \n    vec2 pixel = gl_FragCoord.xy;  // this is really pixel + 0.5\n   \n    float lum = dot(vec3(0.2126, 0.7152, 0.0723), \n                    texelFetch(uTexture, ivec2(pixel), 0).rgb);\n    \n    float color = PixelColor(pixel, lum);\n    oFragColor = vec4(vec3(color), 1.0);  \n}      \n\n"],z),"$isa",z,"$asa"),null)
z=P.v(y,x)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"crosshatch",!1,!0))
z=$.fi()
w=P.v(y,x)
v=new T.L(new Float32Array(2))
v.F(0.85,0.86)
w.h(0,"uRange",v)
w.h(0,"uColorAlpha",new T.aQ(new Float32Array(4)))
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"luminosity-highpass",!1,!0))
z=$.fe()
w=P.v(y,x)
w.h(0,"uTexture",b)
U.H(a,z,new G.A(w,"fisheye",!1,!0))
w=$.fd()
z=P.v(y,x)
z.h(0,"uTexture",b)
U.H(a,w,new G.A(z,"film",!1,!0))
z=$.f7()
w=P.v(y,x)
w.h(0,"uConvolutionMatrix",$.eJ())
w.h(0,"uColor",$.eP())
U.H(a,z,new G.A(w,"emboss",!1,!0))
w=P.v(y,x)
w.h(0,"uConvolutionMatrix",$.eK())
w.h(0,"uColor",$.eQ())
U.H(a,z,new G.A(w,"emboss2",!1,!0))
w=P.v(y,x)
w.h(0,"uConvolutionMatrix",$.eL())
w.h(0,"uColor",$.eR())
U.H(a,z,new G.A(w,"engrave",!1,!0))
w=P.v(y,x)
w.h(0,"uConvolutionMatrix",$.eM())
w.h(0,"uColor",$.eS())
U.H(a,z,new G.A(w,"sharpen",!1,!0))
w=P.v(y,x)
w.h(0,"uConvolutionMatrix",$.eI())
w.h(0,"uColor",$.eO())
U.H(a,z,new G.A(w,"edges",!1,!0))
x=P.v(y,x)
x.h(0,"uConvolutionMatrix",$.eH())
x.h(0,"uColor",$.eN())
U.H(a,z,new G.A(x,"blur",!1,!0))
for(z=$.bF(),z=new H.al(z,[H.o(z,0)]),z=z.gw(z);z.q();){y=z.d
x=$.cb();(x&&C.Y).dL(x,"beforeend","<option>"+H.e(y)+"</option>",null,null)}},
eA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=C.n.cm(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.j2(0,0,x,w,y.createElement("div"),R.k7("blue","gray",90,30))
u.cL(x,"blue","gray")
t=H.h(C.n.c_(y,"#webgl-canvas"),"$iscm")
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
q=new G.hf(t)
y=P.b
x=P.c
v=(t&&C.j).cl(t,"webgl2",P.dC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
q.a=v
if(v==null)H.R(P.dr('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.e(J.fP(v))
if($.ew>0)P.aL("I: "+p)
J.fw(v,0,0,0,1)
J.bJ(v,2929)
v=new Float32Array(3)
p=D.i2(null)
o=D.il(t)
n=new T.aO(new Float32Array(16))
n.a6()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
j=new D.iy(15,-45,0.3,0,new T.E(v),-0.02,p,o,n,new T.E(m),new T.E(l),new T.E(k),new T.E(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aO(new Float32Array(16))
v.a6()
p=new T.aO(new Float32Array(16))
p.a6()
i=new G.iz(j,50,1,0.1,2520,v,p,new T.aO(new Float32Array(16)),P.v(y,x),"perspective",!1,!0)
i.b4()
i.cD(s,r)
v=$.eW()
p=G.dX(q,"frame::color",s,r,32856,v)
v=G.dX(q,"frame::depth",s,r,33190,v)
h=new G.du(q,null,p,v,null)
o=J.fy(q.a)
h.b=o
J.cd(q.a,36160,o)
J.d_(q.a,36160,36064,3553,p.b,0)
J.d_(q.a,36160,36096,3553,v.b,0)
g=J.fu(q.a,36160)
if(g!==36053)H.R("Error Incomplete Framebuffer: "+H.e(g))
J.cd(q.a,36160,null)
U.iP(q,p)
f=G.dM("demo",q,$.fa(),$.f9())
v=$.bF().i(0,"dot").b
p=new T.E(new Float32Array(3))
p.P(-1,-1,0)
o=new T.E(new Float32Array(3))
o.P(1,-1,0)
n=new T.E(new Float32Array(3))
n.P(1,1,0)
m=new T.E(new Float32Array(3))
m.P(-1,1,0)
l=[T.E]
e=H.f([p,o,n,m],l)
p=new T.L(new Float32Array(2))
p.F(0,0)
o=new T.L(new Float32Array(2))
o.F(1,0)
n=new T.L(new Float32Array(2))
n.F(1,1)
m=new T.L(new Float32Array(2))
m.F(0,1)
d=H.f([p,o,n,m],[T.L])
c=new T.E(new Float32Array(3))
c.P(0,0,1)
b=H.f([c,c,c,c],l)
a=new G.dv(!1,H.f([],[G.cq]),H.f([],[G.cr]),H.f([],l),P.v(y,[P.a,,]))
a.a8("aTexUV")
a.aY(e)
a.aU("aTexUV",d)
a.a8("aNormal")
a.aV("aNormal",b)
a0=G.dw("quad",v,a)
z.a=null
y=P.v(y,x)
y.h(0,"cDepthTest",!0)
y.h(0,"cDepthWrite",!0)
y.h(0,"cBlendEquation",$.eF())
y.h(0,"cStencilFunc",$.eV())
y.h(0,"uColor",$.eG())
v=new Float32Array(16)
p=new T.aO(v)
p.a6()
a1=Math.cos(1.5707963267948966)
a2=Math.sin(1.5707963267948966)
o=v[4]
n=v[8]
m=v[5]
l=v[9]
k=v[6]
a3=v[10]
a4=v[7]
a5=v[11]
a6=-a2
v[4]=o*a1+n*a2
v[5]=m*a1+l*a2
v[6]=k*a1+a3*a2
v[7]=a4*a1+a5*a2
v[8]=o*a6+n*a1
v[9]=m*a6+l*a1
v[10]=k*a6+a3*a1
v[11]=a4*a6+a5*a1
y.h(0,"uModelMatrix",p)
z.b=0
P.hH(H.f([D.i9("../ct_logo.obj")],[[P.a2,P.c]]),null,!1,x).aA(new U.lB(z,f,new U.lA(z,j,h,s,r,f,i,new G.ie(y,"mat",!1,!0),new G.du(q,null,null,null,null),a0,u)),null)},
dm:{"^":"c;a,b,c",p:{
H:function(a,b,c){var z,y
z=c.a
y=new U.dm(z,G.dM(z,a,$.fc(),b),c)
$.bF().h(0,z,y)
return y}}},
lA:{"^":"n:30;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.cS(b1)
if(typeof b1!=="number")return b1.Z()
z=this.a
z.b=b1+0
y=this.b
y.cx+=0.01
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aM()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aM()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.u(0,37))y.cx+=0.03
else if(v.u(0,39))y.cx-=0.03
if(v.u(0,38))y.cy+=0.03
else if(v.u(0,40))y.cy-=0.03
if(v.u(0,33))y.ch*=0.99
else if(v.u(0,34))y.ch*=1.01
if(v.u(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aM()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.t.dt(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.dx.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=new T.E(new Float32Array(3))
p.P(0,1,0)
v=y.aF()
u=new Float32Array(3)
o=new T.E(u)
o.U(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
o.ay(0)
n=p.bM(o)
n.ay(0)
m=o.bM(n)
m.ay(0)
t=n.aw(v)
r=m.aw(v)
v=o.aw(v)
l=n.a
k=l[0]
j=m.a
i=j[0]
h=u[0]
g=l[1]
f=j[1]
e=u[1]
l=l[2]
j=j[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=j
q[8]=l
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=i
q[0]=k
k=y.f
i=k.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.db
d=Math.sqrt(k.gbX())
n=i[0]/d
m=i[1]/d
o=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
i=m*b
a2=n*o*a+i
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-i
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
i=q[4]
k=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
l=q[6]
j=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a0+i*a3+k*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+l*a3+j*a6
q[3]=u*a0+t*a3+r*a6
q[4]=y*a1+i*a4+k*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+l*a4+j*a7
q[7]=u*a1+t*a4+r*a7
q[8]=y*a2+i*a5+k*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+l*a5+j*a8
q[11]=u*a2+t*a5+r*a8
w.c.a2(0)
w.b.a2(0)
x.e=0
x.d=0
x.f=0
x.c.a2(0)
x.b.a2(0)
a9=$.bF().i(0,$.cb().value)
b0=b1/1000
y=$.cb().value
if(y==="tv-distortion")a9.c.d.h(0,"uTime",b0)
else if(y==="hexalate-varying")a9.c.d.h(0,"uPointSize",U.cB(4,30,20,b0))
else if(y==="square-varying")a9.c.d.h(0,"uPointSize",U.cB(4,30,20,b0))
else if(y==="lumidots-varying")a9.c.d.h(0,"uPointSize",U.cB(4,30,20,b0))
else if(y==="water")a9.c.d.h(0,"uTime",z.b/1000)
y=this.d
x=this.e
this.c.aS(17664,0,0,y,x)
w=[G.A]
this.f.b_(z.a,H.f([this.r,this.x],w))
this.y.aS(17664,0,0,y,x)
a9.b.b_(this.z,H.f([a9.c],w))
C.af.gdk(window).aA(this,-1)
this.Q.cN(z.b)}},
lB:{"^":"n:31;a,b,c",
$1:function(a){this.a.a=G.dw("",this.b,Y.hP(H.t(J.b0(H.bl(a),0))))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.hX.prototype
if(typeof a=="boolean")return J.hW.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.aX=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.c4=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.lj=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bf.prototype
return a}
J.lk=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bf.prototype
return a}
J.c5=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bf.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.c)return a
return J.c7(a)}
J.c6=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.bf.prototype
return a}
J.X=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).C(a,b)}
J.ac=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lj(a).T(a,b)}
J.b0=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lx(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aX(a).i(a,b)}
J.fo=function(a,b,c){return J.c4(a).h(a,b,c)}
J.cW=function(a,b){return J.c5(a).a0(a,b)}
J.bG=function(a,b){return J.k(a).d7(a,b)}
J.fp=function(a,b,c){return J.k(a).d8(a,b,c)}
J.cX=function(a,b){return J.k(a).br(a,b)}
J.fq=function(a,b,c,d){return J.k(a).dh(a,b,c,d)}
J.cY=function(a,b,c){return J.k(a).bt(a,b,c)}
J.fr=function(a,b){return J.k(a).dm(a,b)}
J.cc=function(a,b,c){return J.k(a).bu(a,b,c)}
J.cd=function(a,b,c){return J.k(a).bw(a,b,c)}
J.bH=function(a,b,c){return J.k(a).bx(a,b,c)}
J.bI=function(a,b){return J.k(a).dr(a,b)}
J.fs=function(a,b){return J.k(a).by(a,b)}
J.ft=function(a,b,c){return J.k(a).bz(a,b,c)}
J.cZ=function(a,b,c,d){return J.k(a).bA(a,b,c,d)}
J.fu=function(a,b){return J.k(a).bB(a,b)}
J.fv=function(a,b){return J.k(a).bC(a,b)}
J.fw=function(a,b,c,d,e){return J.k(a).bD(a,b,c,d,e)}
J.fx=function(a,b){return J.lk(a).N(a,b)}
J.ce=function(a,b,c){return J.aX(a).dw(a,b,c)}
J.cf=function(a){return J.k(a).bH(a)}
J.fy=function(a){return J.k(a).bI(a)}
J.fz=function(a){return J.k(a).bJ(a)}
J.fA=function(a){return J.k(a).bL(a)}
J.fB=function(a){return J.k(a).dC(a)}
J.fC=function(a,b){return J.k(a).bN(a,b)}
J.cg=function(a,b){return J.k(a).bO(a,b)}
J.fD=function(a,b,c,d){return J.k(a).bP(a,b,c,d)}
J.fE=function(a,b,c,d,e){return J.k(a).dE(a,b,c,d,e)}
J.fF=function(a,b,c,d,e){return J.k(a).bQ(a,b,c,d,e)}
J.fG=function(a,b,c,d,e,f){return J.k(a).dF(a,b,c,d,e,f)}
J.fH=function(a,b){return J.c4(a).t(a,b)}
J.bJ=function(a,b){return J.k(a).bR(a,b)}
J.fI=function(a,b){return J.k(a).bS(a,b)}
J.fJ=function(a){return J.k(a).dH(a)}
J.fK=function(a,b){return J.k(a).E(a,b)}
J.d_=function(a,b,c,d,e,f){return J.k(a).bV(a,b,c,d,e,f)}
J.fL=function(a){return J.k(a).gdl(a)}
J.aq=function(a){return J.C(a).gv(a)}
J.bK=function(a){return J.c4(a).gw(a)}
J.b1=function(a){return J.aX(a).gk(a)}
J.fM=function(a){return J.k(a).gdU(a)}
J.fN=function(a){return J.k(a).gdZ(a)}
J.fO=function(a){return J.c6(a).ge5(a)}
J.bL=function(a){return J.c6(a).gaf(a)}
J.ch=function(a){return J.c6(a).ga4(a)}
J.d0=function(a){return J.c6(a).gcj(a)}
J.ci=function(a,b){return J.k(a).Y(a,b)}
J.fP=function(a){return J.k(a).ag(a)}
J.fQ=function(a){return J.k(a).aE(a)}
J.fR=function(a,b){return J.k(a).aG(a,b)}
J.fS=function(a,b,c){return J.k(a).aH(a,b,c)}
J.d1=function(a,b,c){return J.k(a).aL(a,b,c)}
J.d2=function(a,b,c){return J.k(a).bW(a,b,c)}
J.fT=function(a,b){return J.k(a).bY(a,b)}
J.d3=function(a){return J.k(a).dV(a)}
J.fU=function(a,b){return J.c5(a).cs(a,b)}
J.fV=function(a,b,c,d){return J.k(a).aQ(a,b,c,d)}
J.fW=function(a,b,c,d){return J.k(a).c2(a,b,c,d)}
J.bM=function(a,b,c,d){return J.k(a).c3(a,b,c,d)}
J.fX=function(a,b,c,d,e,f){return J.k(a).e_(a,b,c,d,e,f)}
J.fY=function(a){return J.c5(a).e0(a)}
J.bn=function(a){return J.C(a).j(a)}
J.fZ=function(a,b,c,d){return J.k(a).e2(a,b,c,d)}
J.h_=function(a){return J.c5(a).e3(a)}
J.h0=function(a,b,c){return J.k(a).c5(a,b,c)}
J.h1=function(a,b,c){return J.k(a).c6(a,b,c)}
J.cj=function(a,b,c){return J.k(a).c7(a,b,c)}
J.h2=function(a,b,c){return J.k(a).c8(a,b,c)}
J.d4=function(a,b,c){return J.k(a).c9(a,b,c)}
J.d5=function(a,b,c){return J.k(a).ca(a,b,c)}
J.d6=function(a,b,c){return J.k(a).cb(a,b,c)}
J.d7=function(a,b,c,d){return J.k(a).cc(a,b,c,d)}
J.d8=function(a,b,c,d){return J.k(a).cd(a,b,c,d)}
J.h3=function(a,b){return J.k(a).ce(a,b)}
J.h4=function(a,b,c){return J.k(a).e4(a,b,c)}
J.h5=function(a,b,c,d,e,f,g){return J.k(a).cf(a,b,c,d,e,f,g)}
J.h6=function(a,b,c,d,e){return J.k(a).ci(a,b,c,d,e)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bN.prototype
C.j=W.cm.prototype
C.y=W.hm.prototype
C.r=W.ht.prototype
C.K=W.hu.prototype
C.L=W.hL.prototype
C.n=W.hM.prototype
C.z=W.hN.prototype
C.M=J.i.prototype
C.a=J.br.prototype
C.A=J.dx.prototype
C.f=J.dy.prototype
C.t=J.bs.prototype
C.h=J.bt.prototype
C.T=J.bu.prototype
C.b=H.ir.prototype
C.o=H.it.prototype
C.w=W.iu.prototype
C.D=J.iA.prototype
C.E=W.iM.prototype
C.Y=W.cC.prototype
C.J=W.j8.prototype
C.x=J.bf.prototype
C.ae=W.bg.prototype
C.af=W.jl.prototype
C.e=new P.kk()
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
C.B=function(hooks) { return hooks; }

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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.f(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.b])
C.V=H.f(I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.b])
C.X=H.f(I.aK([]),[P.D])
C.W=H.f(I.aK([]),[P.b])
C.u=H.f(I.aK(["bind","if","ref","repeat","syntax"]),[P.b])
C.v=H.f(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.b])
C.Z=new G.I("vec3","vertex btangents",0)
C.d=new G.I("vec3","",0)
C.a_=new G.I("vec4","delta from light",0)
C.p=new G.I("","",0)
C.F=new G.I("vec3","vertex coordinates",0)
C.a0=new G.I("vec3","vertex binormals",0)
C.G=new G.I("vec4","for wireframe",0)
C.a1=new G.I("vec4","per vertex color",0)
C.a2=new G.I("float","for normal maps",0)
C.k=new G.I("mat4","",0)
C.a4=new G.I("mat4","",4)
C.a3=new G.I("mat4","",128)
C.c=new G.I("float","",0)
C.a5=new G.I("float","",4)
C.a6=new G.I("float","depth for shadowmaps",0)
C.i=new G.I("sampler2D","",0)
C.a7=new G.I("float","for bump maps",0)
C.a8=new G.I("vec2","texture uvs",0)
C.a9=new G.I("float","time since program start in sec",0)
C.l=new G.I("vec2","",0)
C.aa=new G.I("samplerCube","",0)
C.m=new G.I("vec4","",0)
C.ab=new G.I("vec3","vertex normals",0)
C.ac=new G.I("sampler2DShadow","",0)
C.H=new G.I("vec3","per vertex color",0)
C.I=new G.I("mat3","",0)
C.ad=new G.I("vec3","vertex tangents",0)
$.ad=0
$.b2=null
$.dc=null
$.cI=!1
$.ey=null
$.es=null
$.eD=null
$.c3=null
$.c8=null
$.cP=null
$.aT=null
$.bh=null
$.bi=null
$.cJ=!1
$.G=C.e
$.ai=null
$.cp=null
$.dq=null
$.dp=null
$.dj=null
$.di=null
$.dh=null
$.dg=null
$.ew=0
$.l7="\nvec3 config = vec3(1.0 / 80.0, 6.0, 3.0);\n// vec3 config = vec3(0.2, 2.0, 2.0);\n\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(ivec2 center, int dx, int dy) {\n return texelFetch(uTexture, center + ivec2(dx, dy), 0).rgb;\n}\n\n// returns pixel color using a strange kernel\n\nfloat IsEdge(ivec2 center) {\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(center, -1, -1));\n  float pix1 = avg3(get_pixel(center, -1, 0));\n  float pix2 = avg3(get_pixel(center, -1, 1));\n  float pix3 = avg3(get_pixel(center, 0, -1));\n\n  float pix5 = avg3(get_pixel(center, 0, 1));\n  float pix6 = avg3(get_pixel(center, 1, -1));\n  float pix7 = avg3(get_pixel(center, 1, 0));\n  float pix8 = avg3(get_pixel(center, 1, 1));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    ivec2 center = ivec2(gl_FragCoord.xy);\n\n    vec4 colorOrg = texelFetch(uTexture, center, 0);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    // find nearest level\n    vHSV =  ceil(vHSV * config) / config;\n    float edg = IsEdge(center);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = (edg >= 0.3) ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"
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
I.$lazy(y,x,w)}})(["mb","eU",function(){return H.ex("_$dart_dartClosure")},"mQ","cT",function(){return H.ex("_$dart_js")},"nA","eX",function(){return H.af(H.bW({
toString:function(){return"$receiver$"}}))},"nB","eY",function(){return H.af(H.bW({$method$:null,
toString:function(){return"$receiver$"}}))},"nC","eZ",function(){return H.af(H.bW(null))},"nD","f_",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"nG","f2",function(){return H.af(H.bW(void 0))},"nH","f3",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"nF","f1",function(){return H.af(H.dV(null))},"nE","f0",function(){return H.af(function(){try{null.$method$}catch(z){return z.message}}())},"nJ","f5",function(){return H.af(H.dV(void 0))},"nI","f4",function(){return H.af(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nT","cU",function(){return P.jr()},"o8","bm",function(){return[]},"m8","eT",function(){return{}},"o_","f6",function(){return P.cy(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.b)},"o0","cV",function(){return P.v(P.b,P.bp)},"nm","eV",function(){return new G.dU(1281,0,4294967295)},"lS","eF",function(){return new G.dT(1281,1281,1281)},"o6","ab",function(){return P.dC(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.H,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.b,G.I)},"nv","eW",function(){var z=new G.ja(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"lV","eG",function(){return T.aP(0.8,0.8,0.8)},"og","fc",function(){var z,y
z=G.S("null")
y=[P.b]
z.aT(H.f(["aPosition"],y))
z.D(H.f(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n}\n"],y))
return z},"ob","f8",function(){var z,y
z=G.S("copyF")
y=[P.b]
z.B(H.f(["uTexture"],y))
z.b2(H.f(["oFragColor = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);"],y))
return z},"os","fl",function(){var z,y
z=G.S("ToonF")
y=[P.b]
z.B(H.f(["uTexture"],y))
z.D(H.f(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.l7],y))
return z},"ol","ff",function(){var z,y
z=G.S("HexPixelateF")
y=[P.b]
z.B(H.f(["uCenter2","uPointSize","uTexture"],y))
z.D(H.f(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v) {\n    vec2 p = (v - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(gl_FragCoord.xy);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texelFetch(uTexture, ivec2(q), 0);\n}\n"],y))
return z},"of","fb",function(){var z,y
z=G.S("DotF")
y=[P.b]
z.B(H.f(["uCenter2","uScale","uAngle","uTexture"],y))
z.D(H.f(["// Inspired by three.js\n\nfloat pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n    vec2 center = gl_FragCoord.xy;\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texelFetch(uTexture, ivec2(center), 0);\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n    vec2 tex = center - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"],y))
return z},"ot","fm",function(){var z,y
z=G.S("DotF")
y=[P.b]
z.B(H.f(["uScale","uTime","uTexture"],y))
z.D(H.f(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec2 dim = vec2(textureSize(uTexture, 0));\n      vec2 center = gl_FragCoord.xy / dim;\n      vec3 d = rgbDistortion(center, uScale, uTime);\n      float x = center.x;\n      float y = center.y;\n\n\t\t\tfloat r = texelFetch(uTexture, ivec2(dim * vec2(x + d.r, y)), 0).r;\n\t\t\tfloat g = texelFetch(uTexture, ivec2(dim * vec2(x + d.g, y)), 0).g;\n\t\t\tfloat b = texelFetch(uTexture, ivec2(dim * vec2(x + d.b, y)), 0).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"],y))
return z},"om","fg",function(){var z,y
z=G.S("KaleidoscopeF")
y=[P.b]
z.B(H.f(["uScale","uCenter2","uTexture"],y))
z.D(H.f(["vec2 kaleidoscope( vec2 uv, float n) {\n   float PI = 3.1415926;\n    float angle = PI / n;\n    float r = length(uv);\n\t  float a = atan( uv.y, uv.x ) / angle;\n\t  a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;\n\treturn vec2( cos( a ), sin( a ) ) * r;\n}\n\nvoid main() {\n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec2 p = gl_FragCoord.xy / dim;\n    vec2 uv = uCenter2 + kaleidoscope(p - uCenter2, uScale);\n    oFragColor = texelFetch(uTexture, ivec2(uv * dim), 0);\n}\n"],y))
return z},"on","fh",function(){var z,y
z=G.S("LumidotsF")
y=[P.b]
z.B(H.f(["uPointSize","uTexture"],y))
z.D(H.f(["// Inspired by https://www.shadertoy.com/view/MtcXRB\n\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = gl_FragCoord.xy;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texelFetch(uTexture, ivec2(center), 0).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"],y))
return z},"oq","fk",function(){var z,y
z=G.S("SquarePixelateF")
y=[P.b]
z.B(H.f(["uPointSize","uTexture"],y))
z.D(H.f(["void main() {\n    float r = uPointSize;\n    vec2 center = floor(gl_FragCoord.xy / r / 2.0) * 2.0 * r + r;\n    oFragColor = texelFetch(uTexture, ivec2(center), 0);\n}\n"],y))
return z},"oo","fi",function(){var z,y
z=G.S("LuminosityHighPassF")
y=[P.b]
z.B(H.f(["uRange","uColorAlpha","uTexture"],y))
z.D(H.f(["// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n "],y))
return z},"oi","fe",function(){var z,y
z=G.S("FisheyePassF")
y=[P.b]
z.B(H.f(["uTexture"],y))
z.D(H.f(["float fisheye_radius = 1.0;\n      \nvoid main() {\n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec2 pixel = gl_FragCoord.xy / dim;\n    float y = (pixel.y-0.5) * 2.0; // [0,1] => [-1, 1]\n\n    float angle = asin(y/fisheye_radius); // [-pi/2, pi/2]\n    float arc_length = angle * fisheye_radius;\n\n    float max_arc_length = asin(1.0 / fisheye_radius) * fisheye_radius;\n    float normalized_arc_length = (arc_length + max_arc_length) / \n                                  (max_arc_length * 2.0);\n    // set arc_length as y\n    vec2 uv = vec2(pixel.x, normalized_arc_length); \n    oFragColor = texelFetch(uTexture, ivec2(dim *uv), 0); \n}\n"],y))
return z},"oh","fd",function(){var z,y
z=G.S("FilmPassF")
y=[P.b]
z.B(H.f(["uTexture"],y))
z.D(H.f(["\nvec2 translation = vec2(0.1, 0.0);\nfloat frame = 1.0;\n\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat vignette(vec2 uv) {\n    return min(1., 6000. * (uv.x * uv.y * (1. - uv.x) * (1. - uv.y) - pow(.2, 4.)));\n}\n\nfloat verticalNoise(vec2 uv) {\n    return rand(vec2(uv.x * 0.3242 + 1.4839, 1.));\n}\n\nfloat randomLines(vec2 uv, float a, float b, float c, float d) {\n    float discrete = floor(frame / 4.);\n    return step(0.0002 + 0.0005 * sin(discrete / a),\n            abs(uv.x - b + 0.05 * sin(discrete / c) * cos(discrete / d)));\n}\n\nvec3 scene(vec2 uv, vec2 pixel, vec2 dim) {\n    vec3 color = texelFetch(uTexture, ivec2(uv * dim), 0).rgb;\n    color += 0.1;\n    color *= vignette(uv);\n    color *= 0.9 + 0.1 * rand(uv);\n    color *= 0.95 + 0.05 * verticalNoise(pixel + floor(frame / 4.));\n    color = 0.5 * color + color * 0.5 * randomLines(uv, 28., 0.7, 33., 58.);\n    color = color * 0.8 + color * 0.2 * randomLines(uv, 47., 0.78, 61., 27.);\n    color = color * 0.7 + color * 0.3 * randomLines(uv, 31., 0.28, 79., 43.);\n    color = pow(max(vec3(0.),color), vec3(1.5));\n    color *= 0.8 + 0.4 * rand(vec2(floor(frame / 4.), 0.2));\n    return color;\n}\n\nvoid main() {\n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec2 pixel = gl_FragCoord.xy / dim;\n    vec2 uv = pixel;\n    uv += translation;\n    uv = vec2(pixel.x, mod(uv.y, 1.));\n    oFragColor = vec4(scene(uv, pixel, dim), 1.);\n}\n"],y))
return z},"lY","eJ",function(){return T.b9(-1,0,-1,0,4,0,-1,0,-1)},"m3","eP",function(){return T.aP(0.5,0.5,0.5)},"lZ","eK",function(){return T.b9(2,0,0,0,-1,0,0,0,-1)},"m4","eQ",function(){return T.aP(0.5,0.5,0.5)},"m_","eL",function(){return T.b9(-2,0,0,0,2,0,0,0,0)},"m5","eR",function(){return T.aP(0.37,0.37,0.37)},"m0","eM",function(){var z=T.b9(0,-2,0,-2,11,-2,0,-2,0)
z.aO(0,0.333)
return z},"m6","eS",function(){return T.aP(0,0,0)},"lX","eI",function(){return T.b9(-1,-1,-1,-1,8,-1,-1,-1,-1)},"m2","eO",function(){return T.aP(0,0,0)},"lW","eH",function(){var z=T.b9(1,2,1,2,4,2,1,2,1)
z.aO(0,0.0625)
return z},"m1","eN",function(){return T.aP(0,0,0)},"oa","f7",function(){var z,y
z=G.S("Convolution3x3F")
y=[P.b]
z.B(H.f(["uTexture","uColor","uConvolutionMatrix"],y))
z.D(H.f(["void main() {\n    mat3 m = uConvolutionMatrix;\n    ivec2 center = ivec2(gl_FragCoord.xy);\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texelFetch(uTexture, center + ivec2(x, y), 0).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n\n"],y))
return z},"op","fj",function(){var z,y
z=G.S("ScanlinePixelateF")
y=[P.b]
z.B(H.f(["uTexture","uRange"],y))
z.D(H.f(["      \n// const vec3 comp = vec3(0.05, 0.15, 0.95);\nconst vec3 comp = vec3(0.1, 0.30, 0.85);\n\nvoid main() {\n    // number scan lines: texture height * \n    vec2 sine_coord = uRange * 2.0 * 3.1415;\n                        \n    sine_coord.x = 0.0;\n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec2 pixel = gl_FragCoord.xy;\n    vec3 color =  texelFetch(uTexture, ivec2(pixel), 0).xyz;\n    float m = comp.z + \n              dot(comp.xy * sin(pixel / dim * sine_coord), vec2(1.0, 1.0));\n    oFragColor = vec4(color * m, 1.0);\n}\n"],y))
return z},"ou","fn",function(){var z,y
z=G.S("WaterPixelateF")
y=[P.b]
z.B(H.f(["uTexture","uTime"],y))
z.D(H.f(["float wave(vec2 pos, float srcX, float srcY, float t) {\n   float dist = 300.0 * length(pos - vec2(srcX, srcY));\n   return sin(dist - 0.15 * t);\n}\n\nvoid main() {\n    vec2 center = gl_FragCoord.xy;\n    vec3 color = texelFetch(uTexture, ivec2(center), 0).rgb;\n    vec2 uv = center /  vec2(textureSize(uTexture, 0)); \n    float t =  uTime * 50.0;\n    float res = 0.0;\n    res += wave(uv, 0.6, 0.7, t);\n    res += wave(uv, 0.9, 0.9, t);\n    res += wave(uv, -0.6, 0.3, t);\n    res += wave(uv, 0.1, 0.4, t);\n    // res += wave(uv, 0.1, 0.4, t);\n    res += wave(uv, 0.5, 0.5, t);\n    res += wave(uv, -1.0, 1.4, t);\n    oFragColor = vec4(color * (0.9 + 0.012 * res), 1.0);\n}\n"],y))
return z},"oe","fa",function(){var z,y
z=G.S("FixedVertexColorV")
y=[P.b]
z.aT(H.f(["aPosition"],y))
z.B(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aW(H.f(["vColor"],y))
z.b3(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],y),H.f(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"od","f9",function(){var z,y
z=G.S("FixedVertexColorF")
y=[P.b]
z.aW(H.f(["vColor"],y))
z.b2(H.f(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"oj","cb",function(){return H.ah(C.n.c_(W.lg(),"#effect"),"$iscC")},"mi","bF",function(){return P.v(P.b,U.dm)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[P.b,,]},{func:1,ret:P.D,args:[W.a8]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.b,args:[P.F]},{func:1,ret:P.W,args:[W.ae]},{func:1,ret:P.W,args:[P.b]},{func:1,ret:-1,args:[,]},{func:1,ret:P.D,args:[W.b7]},{func:1,ret:P.W,args:[W.Y,P.b,P.b,W.by]},{func:1,args:[,P.b]},{func:1,args:[P.b]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[,P.V]},{func:1,ret:P.D,args:[,],opt:[P.V]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:P.W,args:[W.w]},{func:1,ret:-1,args:[P.b,P.b]},{func:1,ret:P.D,args:[P.J]},{func:1,args:[W.aj]},{func:1,ret:P.b,args:[P.b]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,args:[,,]},{func:1,ret:P.D,args:[W.bv]},{func:1,ret:P.D,args:[W.bg]},{func:1,ret:P.F,args:[P.F,P.c]},{func:1,ret:-1,args:[P.J]},{func:1,ret:P.D,args:[[P.a,,]]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.lL(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(U.eA,[])
else U.eA([])})})()
//# sourceMappingURL=effects.dart.js.map
