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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bi=function(){}
var dart=[["","",,H,{"^":"",mf:{"^":"b;a"}}],["","",,J,{"^":"",
cP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cO==null){H.lf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cC("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cS()]
if(v!=null)return v
v=H.lk(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cS(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
h:{"^":"b;",
C:function(a,b){return a===b},
gv:function(a){return H.bb(a)},
k:["cz",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hA:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isS:1},
hB:{"^":"h;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isB:1},
cs:{"^":"h;",
gv:function(a){return 0},
k:["cB",function(a){return String(a)}]},
ie:{"^":"cs;"},
bf:{"^":"cs;"},
bw:{"^":"cs;",
k:function(a){var z=a[$.eG()]
if(z==null)return this.cB(a)
return"JavaScript function for "+H.e(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbr:1},
bt:{"^":"h;$ti",
l:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.a2(P.C("add"))
a.push(b)},
H:function(a,b){var z,y
H.r(b,"$isl",[H.o(a,0)],"$asl")
if(!!a.fixed$length)H.a2(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.G)(b),++y)a.push(b[y])},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
ge0:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cq())},
br:function(a,b){var z,y
H.j(b,{func:1,ret:P.S,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.av(a))}return!1},
cr:function(a,b){if(!!a.immutable$list)H.a2(P.C("sort"))
H.iH(a,J.kO(),H.o(a,0))},
ai:function(a){return this.cr(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aO(a[z],b))return!0
return!1},
k:function(a){return P.cp(a,"[","]")},
gw:function(a){return new J.d7(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.bb(a)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aK(a,b))
if(b>=a.length||b<0)throw H.c(H.aK(a,b))
return a[b]},
i:function(a,b,c){H.t(b)
H.y(c,H.o(a,0))
if(!!a.immutable$list)H.a2(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aK(a,b))
if(b>=a.length||b<0)throw H.c(H.aK(a,b))
a[b]=c},
$isw:1,
$asw:I.bi,
$isl:1,
$isa:1,
p:{
hz:function(a,b){return J.cr(H.k(a,[b]))},
cr:function(a){H.U(a)
a.fixed$length=Array
return a},
md:[function(a,b){return J.f8(H.eA(a,"$isa_"),H.eA(b,"$isa_"))},"$2","kO",8,0,31]}},
me:{"^":"bt;$ti"},
d7:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.G(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isb5:1},
bu:{"^":"h;",
L:function(a,b){var z
H.cQ(b)
if(typeof b!=="number")throw H.c(H.aY(b))
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
return z+0}throw H.c(P.C(""+a+".toInt()"))},
dD:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.C(""+a+".ceil()"))},
dE:function(a,b,c){if(this.L(b,c)>0)throw H.c(H.aY(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
ed:function(a){return a},
ef:function(a,b){var z
if(b>20)throw H.c(P.bd(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gae(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bn(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.bn(a,b)},
bn:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.C("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bl:function(a,b){var z
if(a>0)z=this.dn(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dn:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.aY(b))
return a>b},
$isa_:1,
$asa_:function(){return[P.H]},
$isak:1,
$isH:1},
dy:{"^":"bu;",$isE:1},
dx:{"^":"bu;"},
bv:{"^":"h;",
am:function(a,b){if(b>=a.length)throw H.c(H.aK(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.d6(b,null,null))
return a+b},
ct:function(a,b,c){var z
if(c>a.length)throw H.c(P.bd(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cs:function(a,b){return this.ct(a,b,0)},
cv:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bX(b,null,null))
if(b>c)throw H.c(P.bX(b,null,null))
if(c>a.length)throw H.c(P.bX(c,null,null))
return a.substring(b,c)},
cu:function(a,b){return this.cv(a,b,null)},
ee:function(a){return a.toLowerCase()},
dH:function(a,b,c){if(c>a.length)throw H.c(P.bd(c,0,a.length,null,null))
return H.lr(a,b,c)},
L:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.aY(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aK(a,b))
return a[b]},
$isw:1,
$asw:I.bi,
$isa_:1,
$asa_:function(){return[P.d]},
$isic:1,
$isd:1}}],["","",,H,{"^":"",
cq:function(){return new P.cz("No element")},
hy:function(){return new P.cz("Too many elements")},
iH:function(a,b,c){H.r(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.E,args:[c,c]})
H.bz(a,0,J.al(a)-1,b,c)},
bz:function(a,b,c,d,e){H.r(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.iG(a,b,c,d,e)
else H.iF(a,b,c,d,e)},
iG:function(a,b,c,d,e){var z,y,x,w,v
H.r(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.T(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.ad(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iF:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.r(a,"$isa",[a2],"$asa")
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
if(J.aO(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a1()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.T()
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
if(typeof e!=="number")return e.a1()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a1()
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
if(m<y&&l>x){for(;J.aO(a1.$2(t.h(a,m),r),0);)++m
for(;J.aO(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a1()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bz(a,m,l,a1,a2)}else H.bz(a,m,l,a1,a2)},
dm:{"^":"l;"},
b8:{"^":"dm;$ti",
gw:function(a){return new H.dB(this,this.gj(this),0,[H.cN(this,"b8",0)])},
aJ:function(a,b){return this.cA(0,H.j(b,{func:1,ret:P.S,args:[H.cN(this,"b8",0)]}))}},
dB:{"^":"b;a,b,c,0d,$ti",
sb5:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.T(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.av(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.q(z,w));++this.c
return!0},
$isb5:1},
hT:{"^":"b8;a,b,$ti",
gj:function(a){return J.al(this.a)},
q:function(a,b){return this.b.$1(J.fh(this.a,b))},
$asb8:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dW:{"^":"l;a,b,$ti",
gw:function(a){return new H.j3(J.bN(this.a),this.b,this.$ti)}},
j3:{"^":"b5;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bT:{"^":"b;$ti"}}],["","",,H,{"^":"",
aN:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
l7:function(a){return init.types[H.t(a)]},
li:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.c(H.aY(a))
return z},
bb:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bc:function(a){return H.ig(a)+H.c2(H.ar(a),0,null)},
ig:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbf){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aN(w.length>1&&C.i.am(w,0)===36?C.i.cu(w,1):w)},
X:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
io:function(a){return a.b?H.X(a).getUTCFullYear()+0:H.X(a).getFullYear()+0},
il:function(a){return a.b?H.X(a).getUTCMonth()+1:H.X(a).getMonth()+1},
ih:function(a){return a.b?H.X(a).getUTCDate()+0:H.X(a).getDate()+0},
ii:function(a){return a.b?H.X(a).getUTCHours()+0:H.X(a).getHours()+0},
ik:function(a){return a.b?H.X(a).getUTCMinutes()+0:H.X(a).getMinutes()+0},
im:function(a){return a.b?H.X(a).getUTCSeconds()+0:H.X(a).getSeconds()+0},
ij:function(a){return a.b?H.X(a).getUTCMilliseconds()+0:H.X(a).getMilliseconds()+0},
bj:function(a){throw H.c(H.aY(a))},
i:function(a,b){if(a==null)J.al(a)
throw H.c(H.aK(a,b))},
aK:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
z=H.t(J.al(a))
if(!(b<0)){if(typeof z!=="number")return H.bj(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bX(b,"index",null)},
aY:function(a){return new P.au(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eD})
z.name=""}else z.toString=H.eD
return z},
eD:function(){return J.bn(this.dartException)},
a2:function(a){throw H.c(a)},
G:function(a){throw H.c(P.av(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lt(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bl(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cu(H.e(y)+" (Error "+w+")",null))
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
if(l)return z.$1(H.dF(H.u(y),m))}}return z.$1(new H.j0(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dL()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.au(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dL()
return a},
aL:function(a){var z
if(a==null)return new H.ec(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ec(a)},
l4:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
lh:function(a,b,c,d,e,f){H.f(a,"$isbr")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.dr("Unsupported number of arguments for wrapped closure"))},
aq:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lh)
a.$identity=z
return z},
fS:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.it(z).r}else x=d
w=e?Object.create(new H.iI().constructor.prototype):Object.create(new H.ci(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.l7,x)
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
fP:function(a,b,c,d){var z=H.cj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dc:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fR(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fP(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.J()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b2
if(v==null){v=H.bR("self")
$.b2=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.J()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b2
if(v==null){v=H.bR("self")
$.b2=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fQ:function(a,b,c,d){var z,y
z=H.cj
y=H.da
switch(b?-1:a){case 0:throw H.c(H.iA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fR:function(a,b){var z,y,x,w,v,u,t,s
z=$.b2
if(z==null){z=H.bR("self")
$.b2=z}y=$.d9
if(y==null){y=H.bR("receiver")
$.d9=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fQ(w,!u,x,b)
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
cK:function(a,b,c,d,e,f,g){return H.fS(a,b,H.t(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a9(a,"String"))},
cL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a9(a,"double"))},
cQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a9(a,"num"))},
c4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a9(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a9(a,"int"))},
cR:function(a,b){throw H.c(H.a9(a,H.aN(H.u(b).substring(3))))},
lp:function(a,b){throw H.c(H.db(a,H.aN(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cR(a,b)},
as:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.lp(a,b)},
eA:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cR(a,b)},
U:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a9(a,"List<dynamic>"))},
lj:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cR(a,b)},
cM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
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
y=H.a9(a,z)
throw H.c(y)}finally{$.cG=!1}},
aZ:function(a,b){if(a!=null&&!H.cJ(a,b))H.a2(H.a9(a,H.bJ(b)))
return a},
em:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cM(z)
if(y!=null)return H.bJ(y)
return"Closure"}return H.bc(a)},
ls:function(a){throw H.c(new P.fZ(H.u(a)))},
ew:function(a){return init.getIsolateTag(a)},
k:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
nH:function(a,b,c){return H.b0(a["$as"+H.e(c)],H.ar(b))},
b_:function(a,b,c,d){var z
H.u(c)
H.t(d)
z=H.b0(a["$as"+H.e(c)],H.ar(b))
return z==null?null:z[d]},
cN:function(a,b,c){var z
H.u(b)
H.t(c)
z=H.b0(a["$as"+H.e(b)],H.ar(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.t(b)
z=H.ar(a)
return z==null?null:z[b]},
bJ:function(a){return H.aJ(a,null)},
aJ:function(a,b){var z,y
H.r(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aN(a[0].builtin$cls)+H.c2(a,1,b)
if(typeof a=="function")return H.aN(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.kN(a,b)
if('futureOr' in a)return"FutureOr<"+H.aJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.r(b,"$isa",z,"$asa")
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
if(q!=null&&q!==P.b)t+=" extends "+H.aJ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aJ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aJ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l3(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aJ(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c2:function(a,b,c){var z,y,x,w,v,u
H.r(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cA("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aJ(u,c)}return"<"+z.k(0)+">"},
l6:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cM(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ar(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b0:function(a,b){if(a==null)return b
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
return H.ep(H.b0(y[d],z),null,c,null)},
bK:function(a,b,c,d){H.u(b)
H.U(c)
H.u(d)
if(a==null)return a
if(H.ap(a,b,c,d))return a
throw H.c(H.db(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aN(b.substring(3))+H.c2(c,0,null),init.mangledGlobalNames)))},
r:function(a,b,c,d){H.u(b)
H.U(c)
H.u(d)
if(a==null)return a
if(H.ap(a,b,c,d))return a
throw H.c(H.a9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aN(b.substring(3))+H.c2(c,0,null),init.mangledGlobalNames)))},
ep:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
nD:function(a,b,c){return a.apply(b,H.b0(J.A(b)["$as"+H.e(c)],H.ar(b)))},
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
z=y}return H.a5(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cJ(a,b))throw H.c(H.a9(a,H.bJ(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.ei(a,b,c,d)
if('func' in a)return c.builtin$cls==="br"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"a0" in y.prototype))return!1
w=y.prototype["$as"+"a0"]
v=H.b0(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ep(H.b0(r,z),b,u,d)},
ei:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lo(m,b,l,d)},
lo:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
nE:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
lk:function(a){var z,y,x,w,v,u
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
c9:function(a){return J.cP(a,!1,null,!!a.$isx)},
ln:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c9(z)
else return J.cP(z,c,null,null)},
lf:function(){if(!0===$.cO)return
$.cO=!0
H.lg()},
lg:function(){var z,y,x,w,v,u,t,s
$.c5=Object.create(null)
$.c8=Object.create(null)
H.lb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eC.$1(v)
if(u!=null){t=H.ln(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lb:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aX(C.N,H.aX(C.S,H.aX(C.A,H.aX(C.A,H.aX(C.R,H.aX(C.O,H.aX(C.P(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ex=new H.lc(v)
$.eo=new H.ld(u)
$.eC=new H.le(t)},
aX:function(a,b){return a(b)||b},
lr:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
is:{"^":"b;a,b,c,d,e,f,r,0x",p:{
it:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
y=z[0]
x=z[1]
return new H.is(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iW:{"^":"b;a,b,c,d,e,f",
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
return new H.iW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ia:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dF:function(a,b){return new H.ia(a,b==null?null:b.method)}}},
hC:{"^":"P;a,b,c",
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
return new H.hC(a,y,z?null:b.receiver)}}},
j0:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lt:{"^":"n:7;a",
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
k:function(a){return"Closure '"+H.bc(this).trim()+"'"},
gck:function(){return this},
$isbr:1,
gck:function(){return this}},
dN:{"^":"n;"},
iI:{"^":"dN;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aN(z)+"'"}},
ci:{"^":"dN;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ci))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.bb(this.a)
else y=typeof z!=="object"?J.at(z):H.bb(z)
return(y^H.bb(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
p:{
cj:function(a){return a.a},
da:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.ci("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iX:{"^":"P;a",
k:function(a){return this.a},
p:{
a9:function(a,b){return new H.iX("TypeError: "+P.bS(a)+": type '"+H.em(a)+"' is not a subtype of type '"+b+"'")}}},
fN:{"^":"P;a",
k:function(a){return this.a},
p:{
db:function(a,b){return new H.fN("CastError: "+P.bS(a)+": type '"+H.em(a)+"' is not a subtype of type '"+b+"'")}}},
iz:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iA:function(a){return new H.iz(a)}}},
dS:{"^":"b;a,0b,0c,0d",
gac:function(){var z=this.b
if(z==null){z=H.bJ(this.a)
this.b=z}return z},
k:function(a){return this.gac()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gac())
this.d=z}return z},
C:function(a,b){if(b==null)return!1
return b instanceof H.dS&&this.gac()===b.gac()}},
ct:{"^":"cx;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ao(this,[H.o(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d3(z,b)}else{y=this.dZ(b)
return y}},
dZ:function(a){var z=this.d
if(z==null)return!1
return this.aD(this.at(z,J.at(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a9(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a9(w,b)
x=y==null?null:y.b
return x}else return this.e_(b)},
e_:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.at(z,J.at(a)&0x3ffffff)
x=this.aD(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.au()
this.b=z}this.b7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.au()
this.c=y}this.b7(y,b,c)}else{x=this.d
if(x==null){x=this.au()
this.d=x}w=J.at(b)&0x3ffffff
v=this.at(x,w)
if(v==null)this.aw(x,w,[this.av(b,c)])
else{u=this.aD(v,b)
if(u>=0)v[u].b=c
else v.push(this.av(b,c))}}},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bi()}},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.av(this))
z=z.c}},
b7:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.a9(a,b)
if(z==null)this.aw(a,b,this.av(b,c))
else z.b=c},
bi:function(){this.r=this.r+1&67108863},
av:function(a,b){var z,y
z=new H.hJ(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bi()
return z},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aO(a[y].a,b))return y
return-1},
k:function(a){return P.dC(this)},
a9:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
d4:function(a,b){delete a[b]},
d3:function(a,b){return this.a9(a,b)!=null},
au:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.d4(z,"<non-identifier-key>")
return z},
$isdz:1},
hJ:{"^":"b;a,b,0c,0d"},
ao:{"^":"dm;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hK(z,z.r,this.$ti)
y.c=z.e
return y}},
hK:{"^":"b;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.av(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(z.a)
this.c=this.c.c
return!0}}},
$isb5:1},
lc:{"^":"n:7;a",
$1:function(a){return this.a(a)}},
ld:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
le:{"^":"n:15;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
l3:function(a){return J.hz(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
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
aj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aK(b,a))},
i5:{"^":"h;",$isiY:1,"%":"DataView;ArrayBufferView;cy|e6|e7|dD|e8|e9|aA"},
cy:{"^":"i5;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bi,
$isx:1,
$asx:I.bi},
dD:{"^":"e7;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
i:function(a,b,c){H.t(b)
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
aA:{"^":"e9;",
i:function(a,b,c){H.t(b)
H.t(c)
H.aj(b,a,a.length)
a[b]=c},
$asbT:function(){return[P.E]},
$asp:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
i4:{"^":"dD;",$isan:1,"%":"Float32Array"},
mo:{"^":"aA;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mp:{"^":"aA;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$ishw:1,
"%":"Int32Array"},
mq:{"^":"aA;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mr:{"^":"aA;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
i6:{"^":"aA;",
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
$isnb:1,
"%":"Uint32Array"},
ms:{"^":"aA;",
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mt:{"^":"aA;",
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e6:{"^":"cy+p;"},
e7:{"^":"e6+bT;"},
e8:{"^":"cy+p;"},
e9:{"^":"e8+bT;"}}],["","",,P,{"^":"",
ja:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aq(new P.jc(z),1)).observe(y,{childList:true})
return new P.jb(z,y,x)}else if(self.setImmediate!=null)return P.kX()
return P.kY()},
nk:[function(a){self.scheduleImmediate(H.aq(new P.jd(H.j(a,{func:1,ret:-1})),0))},"$1","kW",4,0,3],
nl:[function(a){self.setImmediate(H.aq(new P.je(H.j(a,{func:1,ret:-1})),0))},"$1","kX",4,0,3],
nm:[function(a){H.j(a,{func:1,ret:-1})
P.kt(0,a)},"$1","kY",4,0,3],
hi:function(a,b,c){var z
H.f(b,"$isQ")
if(a==null)a=new P.bW()
z=$.D
if(z!==C.e)z.toString
z=new P.O(0,z,[c])
z.ba(a,b)
return z},
hj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.r(a,"$isl",[[P.a0,d]],"$asl")
s=[P.a,d]
r=[s]
y=new P.O(0,$.D,r)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hl(z,b,!1,y)
try{for(q=a,p=q.length,o=0,n=0;o<q.length;q.length===p||(0,H.G)(q),++o){w=q[o]
v=n
w.aH(new P.hk(z,v,y,b,!1,d),x,null)
n=++z.b}if(n===0){r=new P.O(0,$.D,r)
r.b9(C.Z)
return r}r=new Array(n)
r.fixed$length=Array
z.a=H.k(r,[d])}catch(m){u=H.Z(m)
t=H.aL(m)
if(z.b===0||!1)return P.hi(u,t,s)
else{z.c=u
z.d=t}}return y},
kS:function(a,b){if(H.bF(a,{func:1,args:[P.b,P.Q]}))return H.j(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bF(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.d6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kQ:function(){var z,y
for(;z=$.aV,z!=null;){$.bh=null
y=z.b
$.aV=y
if(y==null)$.bg=null
z.a.$0()}},
ny:[function(){$.cH=!0
try{P.kQ()}finally{$.bh=null
$.cH=!1
if($.aV!=null)$.cT().$1(P.eq())}},"$0","eq",0,0,1],
el:function(a){var z=new P.dY(H.j(a,{func:1,ret:-1}))
if($.aV==null){$.bg=z
$.aV=z
if(!$.cH)$.cT().$1(P.eq())}else{$.bg.b=z
$.bg=z}},
kV:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aV
if(z==null){P.el(a)
$.bh=$.bg
return}y=new P.dY(a)
x=$.bh
if(x==null){y.b=z
$.bh=y
$.aV=y}else{y.b=x.b
x.b=y
$.bh=y
if(y.b==null)$.bg=y}},
lq:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.D
if(C.e===y){P.aW(null,null,C.e,a)
return}y.toString
P.aW(null,null,y,H.j(y.bu(a),z))},
kL:function(a,b,c){a.dC(0)
b.a7(c)},
c3:function(a,b,c,d,e){var z={}
z.a=d
P.kV(new P.kT(z,e))},
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
H.y(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kU:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aW:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bu(d):c.dz(d,-1)
P.el(d)},
jc:{"^":"n:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jb:{"^":"n:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jd:{"^":"n:0;a",
$0:function(){this.a.$0()}},
je:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ks:{"^":"b;a,0b,c",
cZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aq(new P.ku(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
p:{
kt:function(a,b){var z=new P.ks(!0,0)
z.cZ(a,b)
return z}}},
ku:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a0:{"^":"b;$ti"},
hl:{"^":"n:16;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.F(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.F(z.c,z.d)}},
hk:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bd(z.a)}else if(z.b===0&&!this.e)this.c.F(z.c,z.d)},
$S:function(){return{func:1,ret:P.B,args:[this.f]}}},
e0:{"^":"b;$ti",
dG:function(a,b){if(a==null)a=new P.bW()
if(this.a.a!==0)throw H.c(P.bA("Future already completed"))
$.D.toString
this.F(a,b)},
dF:function(a){return this.dG(a,null)}},
cE:{"^":"e0;a,$ti",
Z:function(a,b){var z
H.aZ(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bA("Future already completed"))
z.b9(b)},
F:function(a,b){this.a.ba(a,b)}},
kn:{"^":"e0;a,$ti",
Z:function(a,b){var z
H.aZ(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bA("Future already completed"))
z.a7(b)},
F:function(a,b){this.a.F(a,b)}},
aT:{"^":"b;0a,b,c,d,e,$ti",
e2:function(a){if(this.c!==6)return!0
return this.b.b.aF(H.j(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
dY:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bF(z,{func:1,args:[P.b,P.Q]}))return H.aZ(w.e9(z,a.a,a.b,null,y,P.Q),x)
else return H.aZ(w.aF(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
O:{"^":"b;bm:a<,b,0dk:c<,$ti",
aH:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kS(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.O(0,$.D,[c])
w=b==null?1:3
this.b8(new P.aT(x,w,a,b,[z,c]))
return x},
af:function(a,b){return this.aH(a,null,b)},
b8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaT")
this.c=a}else{if(z===2){y=H.f(this.c,"$isO")
z=y.a
if(z<4){y.b8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aW(null,null,z,H.j(new P.jx(this,a),{func:1,ret:-1}))}},
bj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaT")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isO")
y=u.a
if(y<4){u.bj(a)
return}this.a=y
this.c=u.c}z.a=this.ab(a)
y=this.b
y.toString
P.aW(null,null,y,H.j(new P.jE(z,this),{func:1,ret:-1}))}},
aa:function(){var z=H.f(this.c,"$isaT")
this.c=null
return this.ab(z)},
ab:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a7:function(a){var z,y,x
z=H.o(this,0)
H.aZ(a,{futureOr:1,type:z})
y=this.$ti
if(H.ap(a,"$isa0",y,"$asa0"))if(H.ap(a,"$isO",y,null))P.bZ(a,this)
else P.e1(a,this)
else{x=this.aa()
H.y(a,z)
this.a=4
this.c=a
P.aU(this,x)}},
bd:function(a){var z
H.y(a,H.o(this,0))
z=this.aa()
this.a=4
this.c=a
P.aU(this,z)},
F:function(a,b){var z
H.f(b,"$isQ")
z=this.aa()
this.a=8
this.c=new P.a3(a,b)
P.aU(this,z)},
b9:function(a){var z
H.aZ(a,{futureOr:1,type:H.o(this,0)})
if(H.ap(a,"$isa0",this.$ti,"$asa0")){this.d1(a)
return}this.a=1
z=this.b
z.toString
P.aW(null,null,z,H.j(new P.jz(this,a),{func:1,ret:-1}))},
d1:function(a){var z=this.$ti
H.r(a,"$isa0",z,"$asa0")
if(H.ap(a,"$isO",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aW(null,null,z,H.j(new P.jD(this,a),{func:1,ret:-1}))}else P.bZ(a,this)
return}P.e1(a,this)},
ba:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aW(null,null,z,H.j(new P.jy(this,a,b),{func:1,ret:-1}))},
$isa0:1,
p:{
e1:function(a,b){var z,y,x
b.a=1
try{a.aH(new P.jA(b),new P.jB(b),null)}catch(x){z=H.Z(x)
y=H.aL(x)
P.lq(new P.jC(b,z,y))}},
bZ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isO")
if(z>=4){y=b.aa()
b.a=a.a
b.c=a.c
P.aU(b,y)}else{y=H.f(b.c,"$isaT")
b.a=2
b.c=a
a.bj(y)}},
aU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.aU(z.a,b)}y=z.a
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
if(y===8)new P.jH(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jG(x,b,r).$0()}else if((y&2)!==0)new P.jF(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.A(y).$isa0){if(y.a>=4){n=H.f(t.c,"$isaT")
t.c=null
b=t.ab(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bZ(y,t)
return}}m=b.b
n=H.f(m.c,"$isaT")
m.c=null
b=m.ab(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa3")
m.a=8
m.c=u}z.a=m
y=m}}}},
jx:{"^":"n:0;a,b",
$0:function(){P.aU(this.a,this.b)}},
jE:{"^":"n:0;a,b",
$0:function(){P.aU(this.b,this.a.a)}},
jA:{"^":"n:8;a",
$1:function(a){var z=this.a
z.a=0
z.a7(a)}},
jB:{"^":"n:17;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.F(a,b)},
$1:function(a){return this.$2(a,null)}},
jC:{"^":"n:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
jz:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bd(H.y(this.b,H.o(z,0)))}},
jD:{"^":"n:0;a,b",
$0:function(){P.bZ(this.b,this.a)}},
jy:{"^":"n:0;a,b,c",
$0:function(){this.a.F(this.b,this.c)}},
jH:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c1(H.j(w.d,{func:1}),null)}catch(v){y=H.Z(v)
x=H.aL(v)
if(this.d){w=H.f(this.a.a.c,"$isa3").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa3")
else u.b=new P.a3(y,x)
u.a=!0
return}if(!!J.A(z).$isa0){if(z instanceof P.O&&z.gbm()>=4){if(z.gbm()===8){w=this.b
w.b=H.f(z.gdk(),"$isa3")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.af(new P.jI(t),null)
w.a=!1}}},
jI:{"^":"n:18;a",
$1:function(a){return this.a}},
jG:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aF(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Z(t)
y=H.aL(t)
x=this.a
x.b=new P.a3(z,y)
x.a=!0}}},
jF:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa3")
w=this.c
if(w.e2(z)&&w.e!=null){v=this.b
v.b=w.dY(z)
v.a=!1}}catch(u){y=H.Z(u)
x=H.aL(u)
w=H.f(this.a.a.c,"$isa3")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a3(y,x)
s.a=!0}}},
dY:{"^":"b;a,0b"},
iM:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.O(0,$.D,[P.E])
z.a=0
x=H.o(this,0)
w=H.j(new P.iR(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.iS(z,y),{func:1,ret:-1})
W.ai(this.a,this.b,w,!1,x)
return y},
gdV:function(a){var z,y,x,w
z={}
y=new P.O(0,$.D,this.$ti)
z.a=null
x=H.o(this,0)
w=H.j(new P.iP(z,this,y),{func:1,ret:-1,args:[x]})
H.j(new P.iQ(y),{func:1,ret:-1})
z.a=W.ai(this.a,this.b,w,!1,x)
return y}},
iR:{"^":"n;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
iS:{"^":"n:0;a,b",
$0:function(){this.b.a7(this.a.a)}},
iP:{"^":"n;a,b,c",
$1:function(a){H.y(a,H.o(this.b,0))
P.kL(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
iQ:{"^":"n:0;a",
$0:function(){var z,y,x,w
try{x=H.cq()
throw H.c(x)}catch(w){z=H.Z(w)
y=H.aL(w)
$.D.toString
this.a.F(z,y)}}},
iN:{"^":"b;"},
iO:{"^":"b;"},
a3:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isP:1},
kA:{"^":"b;",$isni:1},
kT:{"^":"n:0;a,b",
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
k6:{"^":"kA;",
ea:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.D){a.$0()
return}P.ej(null,null,this,a,-1)}catch(x){z=H.Z(x)
y=H.aL(x)
P.c3(null,null,this,z,H.f(y,"$isQ"))}},
eb:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.D){a.$1(b)
return}P.ek(null,null,this,a,b,-1,c)}catch(x){z=H.Z(x)
y=H.aL(x)
P.c3(null,null,this,z,H.f(y,"$isQ"))}},
dz:function(a,b){return new P.k8(this,H.j(a,{func:1,ret:b}),b)},
bu:function(a){return new P.k7(this,H.j(a,{func:1,ret:-1}))},
dA:function(a,b){return new P.k9(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c1:function(a,b){H.j(a,{func:1,ret:b})
if($.D===C.e)return a.$0()
return P.ej(null,null,this,a,b)},
aF:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.D===C.e)return a.$1(b)
return P.ek(null,null,this,a,b,c,d)},
e9:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.D===C.e)return a.$2(b,c)
return P.kU(null,null,this,a,b,c,d,e,f)}},
k8:{"^":"n;a,b,c",
$0:function(){return this.a.c1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k7:{"^":"n:1;a,b",
$0:function(){return this.a.ea(this.b)}},
k9:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.eb(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dA:function(a,b,c){H.U(a)
return H.r(H.l4(a,new H.ct(0,0,[b,c])),"$isdz",[b,c],"$asdz")},
a4:function(a,b){return new H.ct(0,0,[a,b])},
hL:function(){return new H.ct(0,0,[null,null])},
a8:function(a,b,c,d){return new P.jS(0,0,[d])},
hx:function(a,b,c){var z,y
if(P.cI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.k([],[P.d])
y=$.bk()
C.a.l(y,a)
try{P.kP(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dM(b,H.lj(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cp:function(a,b,c){var z,y,x
if(P.cI(a))return b+"..."+c
z=new P.cA(b)
y=$.bk()
C.a.l(y,a)
try{x=z
x.a=P.dM(x.gU(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cI:function(a){var z,y
for(z=0;y=$.bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
kP:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[P.d],"$asa")
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
z=P.a8(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x)z.l(0,H.y(a[x],b))
return z},
dC:function(a){var z,y,x
z={}
if(P.cI(a))return"{...}"
y=new P.cA("")
try{C.a.l($.bk(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.fk(a,new P.hS(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bk()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
jS:{"^":"jK;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e5(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbE")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbE")!=null}else return this.d2(b)},
d2:function(a){var z=this.d
if(z==null)return!1
return this.as(this.bg(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cF()
this.b=z}return this.bb(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cF()
this.c=y}return this.bb(y,b)}else return this.d_(0,b)},
d_:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.cF()
this.d=z}y=this.be(b)
x=z[y]
if(x==null)z[y]=[this.ao(b)]
else{if(this.as(x,b)>=0)return!1
x.push(this.ao(b))}return!0},
c0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.de(0,b)},
de:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bg(z,b)
x=this.as(y,b)
if(x<0)return!1
this.bo(y.splice(x,1)[0])
return!0},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.an()}},
bb:function(a,b){H.y(b,H.o(this,0))
if(H.f(a[b],"$isbE")!=null)return!1
a[b]=this.ao(b)
return!0},
bk:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbE")
if(z==null)return!1
this.bo(z)
delete a[b]
return!0},
an:function(){this.r=this.r+1&67108863},
ao:function(a){var z,y
z=new P.bE(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.an()
return z},
bo:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.an()},
be:function(a){return J.at(a)&0x3ffffff},
bg:function(a,b){return a[this.be(b)]},
as:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aO(a[y].a,b))return y
return-1},
p:{
cF:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bE:{"^":"b;a,0b,0c"},
e5:{"^":"b;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.av(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb5:1,
p:{
jT:function(a,b,c){var z=new P.e5(a,b,[c])
z.c=a.e
return z}}},
jK:{"^":"iB;"},
hM:{"^":"jU;",$isl:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dB(a,this.gj(a),0,[H.b_(this,a,"p",0)])},
q:function(a,b){return this.h(a,b)},
dW:function(a,b,c,d){var z,y,x
H.y(b,d)
H.j(c,{func:1,ret:d,args:[d,H.b_(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.av(a))}return y},
bP:function(a,b,c,d){var z
H.y(d,H.b_(this,a,"p",0))
P.ir(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
k:function(a){return P.cp(a,"[","]")}},
cx:{"^":"R;"},
hS:{"^":"n:6;a,b",
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
H.j(b,{func:1,ret:-1,args:[H.b_(this,a,"R",0),H.b_(this,a,"R",1)]})
for(z=J.bN(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.al(this.gD(a))},
k:function(a){return P.dC(a)},
$isJ:1},
iC:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bN(H.r(b,"$isl",this.$ti,"$asl"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.cp(this,"{","}")},
$isl:1,
$ismL:1},
iB:{"^":"iC;"},
jU:{"^":"b+p;"}}],["","",,P,{"^":"",
kR:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.c(H.aY(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.Z(x)
w=String(y)
throw H.c(new P.hf(w,null,null))}w=P.c0(z)
return w},
c0:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jO(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.c0(a[z])
return a},
jO:{"^":"cx;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dd(b):y}},
gj:function(a){return this.b==null?this.c.a:this.a8().length},
gD:function(a){var z
if(this.b==null){z=this.c
return new H.ao(z,[H.o(z,0)])}return new P.jP(this)},
B:function(a,b){var z,y,x,w
H.j(b,{func:1,ret:-1,args:[P.d,,]})
if(this.b==null)return this.c.B(0,b)
z=this.a8()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c0(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.c(P.av(this))}},
a8:function(){var z=H.U(this.c)
if(z==null){z=H.k(Object.keys(this.a),[P.d])
this.c=z}return z},
dd:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c0(this.a[a])
return this.b[a]=z},
$asR:function(){return[P.d,null]},
$asJ:function(){return[P.d,null]}},
jP:{"^":"b8;a",
gj:function(a){var z=this.a
return z.gj(z)},
q:function(a,b){var z=this.a
if(z.b==null)z=z.gD(z).q(0,b)
else{z=z.a8()
if(b<0||b>=z.length)return H.i(z,b)
z=z[b]}return z},
gw:function(a){var z=this.a
if(z.b==null){z=z.gD(z)
z=z.gw(z)}else{z=z.a8()
z=new J.d7(z,z.length,0,[H.o(z,0)])}return z},
$asb8:function(){return[P.d]},
$asl:function(){return[P.d]}},
dd:{"^":"b;$ti"},
dg:{"^":"iO;$ti"},
hD:{"^":"dd;a,b",
dP:function(a,b,c){var z=P.kR(b,this.gdQ().a)
return z},
dO:function(a,b){return this.dP(a,b,null)},
gdQ:function(){return C.V},
$asdd:function(){return[P.b,P.d]}},
hE:{"^":"dg;a",
$asdg:function(){return[P.d,P.b]}}}],["","",,P,{"^":"",
hb:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.bc(a)+"'"},
bS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hb(a)},
dr:function(a){return new P.js(a)},
a7:function(a){H.bI(H.e(a))},
S:{"^":"b;"},
"+bool":0,
bp:{"^":"b;a,b",
C:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&this.b===b.b},
L:function(a,b){return C.b.L(this.a,H.f(b,"$isbp").a)},
gv:function(a){var z=this.a
return(z^C.b.bl(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.h_(H.io(this))
y=P.bq(H.il(this))
x=P.bq(H.ih(this))
w=P.bq(H.ii(this))
v=P.bq(H.ik(this))
u=P.bq(H.im(this))
t=P.h0(H.ij(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isa_:1,
$asa_:function(){return[P.bp]},
p:{
h_:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bq:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"H;"},
"+double":0,
b3:{"^":"b;a",
T:function(a,b){return C.b.T(this.a,H.f(b,"$isb3").a)},
C:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
L:function(a,b){return C.b.L(this.a,H.f(b,"$isb3").a)},
k:function(a){var z,y,x,w,v
z=new P.h8()
y=this.a
if(y<0)return"-"+new P.b3(0-y).k(0)
x=z.$1(C.b.G(y,6e7)%60)
w=z.$1(C.b.G(y,1e6)%60)
v=new P.h7().$1(y%1e6)
return""+C.b.G(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa_:1,
$asa_:function(){return[P.b3]},
p:{
h6:function(a,b,c,d,e,f){return new P.b3(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h7:{"^":"n:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h8:{"^":"n:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"b;"},
bW:{"^":"P;",
k:function(a){return"Throw of null."}},
au:{"^":"P;a,b,c,d",
gaq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gap:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaq()+y+x
if(!this.a)return w
v=this.gap()
u=P.bS(this.b)
return w+v+": "+u},
p:{
ch:function(a){return new P.au(!1,null,null,a)},
d6:function(a,b,c){return new P.au(!0,a,b,c)}}},
dG:{"^":"au;e,f,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bX:function(a,b,c){return new P.dG(null,null,!0,a,b,"Value not in range")},
bd:function(a,b,c,d,e){return new P.dG(b,c,!0,a,d,"Invalid value")},
ir:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.bd(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.bd(b,a,c,"end",f))
return b}}},
hv:{"^":"au;e,j:f>,a,b,c,d",
gaq:function(){return"RangeError"},
gap:function(){var z,y
z=H.t(this.b)
if(typeof z!=="number")return z.a1()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
I:function(a,b,c,d,e){var z=H.t(e==null?J.al(b):e)
return new P.hv(b,z,!0,a,c,"Index out of range")}}},
j1:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.j1(a)}}},
j_:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cC:function(a){return new P.j_(a)}}},
cz:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
p:{
bA:function(a){return new P.cz(a)}}},
fT:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bS(z)+"."},
p:{
av:function(a){return new P.fT(a)}}},
dL:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
fZ:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
js:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
hf:{"^":"b;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
br:{"^":"b;"},
E:{"^":"H;"},
"+int":0,
l:{"^":"b;$ti",
aJ:["cA",function(a,b){var z=H.cN(this,"l",0)
return new H.dW(this,H.j(b,{func:1,ret:P.S,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.a2(P.bd(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.I(b,this,"index",null,y))},
k:function(a){return P.hx(this,"(",")")}},
b5:{"^":"b;$ti"},
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
gv:function(a){return H.bb(this)},
k:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.k(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isa_:1,
$asa_:function(){return[P.d]},
$isic:1},
"+String":0,
cA:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dM:function(a,b,c){var z=J.bN(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
h9:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).M(z,a,b,c)
y.toString
z=W.v
z=new H.dW(new W.ab(y),H.j(new W.ha(),{func:1,ret:P.S,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.a2(H.cq())
w=x.gA(x)
if(x.t())H.a2(H.hy())
return H.f(w,"$isV")},
dq:function(a){H.f(a,"$isL")
return"wheel"},
b4:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fo(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
jp:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.jj(a)
if(!!J.A(z).$isL)return z
return}else return H.f(a,"$isL")},
kM:function(a){if(!!J.A(a).$iscl)return a
return new P.j7([],[],!1).dI(a,!0)},
en:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.e)return a
return z.dA(a,b)},
M:{"^":"V;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lu:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fH:{"^":"M;",
k:function(a){return String(a)},
$isfH:1,
"%":"HTMLAnchorElement"},
lv:{"^":"M;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d8:{"^":"M;",$isd8:1,"%":"HTMLBaseElement"},
fL:{"^":"h;","%":";Blob"},
bQ:{"^":"M;",$isbQ:1,"%":"HTMLBodyElement"},
bo:{"^":"M;0n:height=,0m:width=",
cl:function(a,b,c){var z=this.d7(a,b,P.kZ(c,null))
return z},
d7:function(a,b,c){return a.getContext(b,c)},
$isbo:1,
"%":"HTMLCanvasElement"},
lA:{"^":"h;",
ah:function(a){return P.a6(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lB:{"^":"v;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fV:{"^":"ck;",$isfV:1,"%":"CSSNumericValue|CSSUnitValue"},
lC:{"^":"fY;0j:length=","%":"CSSPerspective"},
aw:{"^":"h;",$isaw:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fW:{"^":"jh;0j:length=",
aP:function(a,b){var z=this.d8(a,this.al(a,b))
return z==null?"":z},
al:function(a,b){var z,y
z=$.eF()
y=z[b]
if(typeof y==="string")return y
y=this.dq(a,b)
z[b]=y
return y},
dq:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
d8:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fX:{"^":"b;",
gn:function(a){return this.aP(a,"height")},
gm:function(a){return this.aP(a,"width")}},
ck:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fY:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lE:{"^":"ck;0j:length=","%":"CSSTransformValue"},
lF:{"^":"ck;0j:length=","%":"CSSUnparsedValue"},
lH:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h3:{"^":"M;","%":"HTMLDivElement"},
cl:{"^":"v;",
ds:function(a,b){return a.adoptNode(b)},
cm:function(a,b){return a.getElementById(b)},
e5:function(a,b){return a.querySelector(b)},
gbW:function(a){return new W.bC(a,"mousedown",!1,[W.W])},
gbX:function(a){return new W.bC(a,"mousemove",!1,[W.W])},
gbY:function(a){return new W.bC(a,"mouseup",!1,[W.W])},
gbZ:function(a){return new W.bC(a,H.u(W.dq(a)),!1,[W.aS])},
$iscl:1,
"%":"XMLDocument;Document"},
lI:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
h4:{"^":"h;",
dM:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lJ:{"^":"jl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.r(c,"$isY",[P.H],"$asY")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.Y,P.H]]},
$isx:1,
$asx:function(){return[[P.Y,P.H]]},
$asp:function(){return[[P.Y,P.H]]},
$isl:1,
$asl:function(){return[[P.Y,P.H]]},
$isa:1,
$asa:function(){return[[P.Y,P.H]]},
$asq:function(){return[[P.Y,P.H]]},
"%":"ClientRectList|DOMRectList"},
h5:{"^":"h;",
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
lK:{"^":"jn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.u(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asp:function(){return[P.d]},
$isl:1,
$asl:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lL:{"^":"h;0j:length=","%":"DOMTokenList"},
V:{"^":"v;0ec:tagName=",
gdv:function(a){return new W.jo(a)},
k:function(a){return a.localName},
M:["aj",function(a,b,c,d){var z,y,x,w
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
y=(y&&C.K).dM(y,"")
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
z=$.am.body;(z&&C.p).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.X,a.tagName)){z=$.cm;(z&&C.D).cn(z,x)
z=$.cm
w=(z&&C.D).dK(z,b)}else{x.innerHTML=b
w=$.am.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.am.body
if(x==null?z!=null:x!==z)J.d0(x)
c.aU(w)
C.r.ds(document,w)
return w},function(a,b,c){return this.M(a,b,c,null)},"dL",null,null,"gel",5,5,null],
cq:function(a,b,c,d){a.textContent=null
this.I(a,this.M(a,b,c,d))},
cp:function(a,b){return this.cq(a,b,null,null)},
W:function(a,b){return a.getAttribute(b)},
df:function(a,b){return a.removeAttribute(b)},
gbW:function(a){return new W.bB(a,"mousedown",!1,[W.W])},
gbX:function(a){return new W.bB(a,"mousemove",!1,[W.W])},
gbY:function(a){return new W.bB(a,"mouseup",!1,[W.W])},
gbZ:function(a){return new W.bB(a,H.u(W.dq(a)),!1,[W.aS])},
$isV:1,
"%":";Element"},
ha:{"^":"n:19;",
$1:function(a){return!!J.A(H.f(a,"$isv")).$isV}},
lN:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
N:{"^":"h;",$isN:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
bq:["cw",function(a,b,c,d){H.j(c,{func:1,args:[W.N]})
if(c!=null)this.d0(a,b,c,!1)}],
d0:function(a,b,c,d){return a.addEventListener(b,H.aq(H.j(c,{func:1,args:[W.N]}),1),!1)},
dh:function(a,b,c,d){return a.removeEventListener(b,H.aq(H.j(c,{func:1,args:[W.N]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ea|eb|ee|ef"},
ax:{"^":"fL;",$isax:1,"%":"File"},
m3:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isax")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"FileList"},
m4:{"^":"L;0j:length=","%":"FileWriter"},
m7:{"^":"M;0j:length=","%":"HTMLFormElement"},
ay:{"^":"h;",$isay:1,"%":"Gamepad"},
hn:{"^":"M;","%":"HTMLHeadElement"},
m8:{"^":"h;0j:length=","%":"History"},
m9:{"^":"jM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isv")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asq:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ho:{"^":"cl;","%":"HTMLDocument"},
hp:{"^":"hq;",
em:function(a,b,c,d,e,f){return a.open(b,c)},
e3:function(a,b,c){return a.open(b,c)},
co:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hq:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
ma:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
cn:{"^":"h;0n:height=,0m:width=",$iscn:1,"%":"ImageBitmap"},
co:{"^":"h;0n:height=,0m:width=",$isco:1,"%":"ImageData"},
bU:{"^":"M;0n:height=,0m:width=",$isbU:1,"%":"HTMLImageElement"},
mc:{"^":"M;0n:height=,0m:width=","%":"HTMLInputElement"},
b6:{"^":"dT;",$isb6:1,"%":"KeyboardEvent"},
hR:{"^":"h;",
k:function(a){return String(a)},
$ishR:1,
"%":"Location"},
hV:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
mj:{"^":"h;0j:length=","%":"MediaList"},
mk:{"^":"L;",
bq:function(a,b,c,d){H.j(c,{func:1,args:[W.N]})
if(b==="message")a.start()
this.cw(a,b,c,!1)},
"%":"MessagePort"},
ml:{"^":"jW;",
h:function(a,b){return P.a6(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.hX(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hX:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mm:{"^":"jX;",
h:function(a,b){return P.a6(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.hY(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hY:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
az:{"^":"h;",$isaz:1,"%":"MimeType"},
mn:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaz")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asp:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"MimeTypeArray"},
W:{"^":"dT;",
gbV:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.ba(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.A(W.eh(z)).$isV)throw H.c(P.C("offsetX is only supported on elements"))
y=H.f(W.eh(z),"$isV")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.r(new P.ba(u,v,w),"$isba",w,"$asba")
if(typeof z!=="number")return z.aX()
if(typeof x!=="number")return x.aX()
return new P.ba(C.m.c4(z-u),C.m.c4(x-v),w)}},
$isW:1,
"%":";DragEvent|MouseEvent"},
ab:{"^":"hM;a",
ga3:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bA("No elements"))
if(y>1)throw H.c(P.bA("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.r(b,"$isl",[W.v],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.I(y,z.firstChild)
return},
i:function(a,b,c){var z
H.t(b)
z=this.a
J.f0(z,H.f(c,"$isv"),C.v.h(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.du(z,z.length,-1,[H.b_(C.v,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asp:function(){return[W.v]},
$asl:function(){return[W.v]},
$asa:function(){return[W.v]}},
v:{"^":"L;0e4:previousSibling=",
e6:function(a){var z=a.parentNode
if(z!=null)J.bL(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cz(a):z},
I:function(a,b){return a.appendChild(b)},
dg:function(a,b){return a.removeChild(b)},
di:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i7:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isv")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asq:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
mw:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
my:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mz:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aB:{"^":"h;0j:length=",$isaB:1,"%":"Plugin"},
mB:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaB")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"PluginArray"},
mD:{"^":"W;0n:height=,0m:width=","%":"PointerEvent"},
by:{"^":"N;",$isby:1,"%":"ProgressEvent|ResourceProgressEvent"},
iq:{"^":"h;",
dK:function(a,b){return a.createContextualFragment(b)},
cn:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mI:{"^":"ka;",
h:function(a,b){return P.a6(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.iy(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
iy:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mJ:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mK:{"^":"M;0j:length=","%":"HTMLSelectElement"},
aC:{"^":"L;",$isaC:1,"%":"SourceBuffer"},
mM:{"^":"eb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaC")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aC]},
$isx:1,
$asx:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isl:1,
$asl:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"SourceBufferList"},
aD:{"^":"h;",$isaD:1,"%":"SpeechGrammar"},
mN:{"^":"kg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaD")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aD]},
$isx:1,
$asx:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isl:1,
$asl:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"SpeechGrammarList"},
aE:{"^":"h;0j:length=",$isaE:1,"%":"SpeechRecognitionResult"},
mQ:{"^":"kj;",
h:function(a,b){return this.bh(a,H.u(b))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.da(a,z)
if(y==null)return
b.$2(y,this.bh(a,y))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new W.iL(z))
return z},
gj:function(a){return a.length},
bh:function(a,b){return a.getItem(b)},
da:function(a,b){return a.key(b)},
$asR:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
iL:{"^":"n:20;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aF:{"^":"h;",$isaF:1,"%":"CSSStyleSheet|StyleSheet"},
iT:{"^":"M;",
M:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=W.h9("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).H(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
mT:{"^":"M;",
M:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.M(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga3(z)
x.toString
z=new W.ab(x)
w=z.ga3(z)
y.toString
w.toString
new W.ab(y).H(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
mU:{"^":"M;",
M:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.M(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga3(z)
y.toString
x.toString
new W.ab(y).H(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
dO:{"^":"M;",$isdO:1,"%":"HTMLTemplateElement"},
mV:{"^":"h;0m:width=","%":"TextMetrics"},
aG:{"^":"L;",$isaG:1,"%":"TextTrack"},
aH:{"^":"L;",$isaH:1,"%":"TextTrackCue|VTTCue"},
mW:{"^":"kr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaH")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aH]},
$isx:1,
$asx:function(){return[W.aH]},
$asp:function(){return[W.aH]},
$isl:1,
$asl:function(){return[W.aH]},
$isa:1,
$asa:function(){return[W.aH]},
$asq:function(){return[W.aH]},
"%":"TextTrackCueList"},
mX:{"^":"ef;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaG")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aG]},
$isx:1,
$asx:function(){return[W.aG]},
$asp:function(){return[W.aG]},
$isl:1,
$asl:function(){return[W.aG]},
$isa:1,
$asa:function(){return[W.aG]},
$asq:function(){return[W.aG]},
"%":"TextTrackList"},
mY:{"^":"h;0j:length=","%":"TimeRanges"},
aI:{"^":"h;",$isaI:1,"%":"Touch"},
mZ:{"^":"kw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaI")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aI]},
$isx:1,
$asx:function(){return[W.aI]},
$asp:function(){return[W.aI]},
$isl:1,
$asl:function(){return[W.aI]},
$isa:1,
$asa:function(){return[W.aI]},
$asq:function(){return[W.aI]},
"%":"TouchList"},
n_:{"^":"h;0j:length=","%":"TrackDefaultList"},
dT:{"^":"N;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nd:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
cD:{"^":"hV;0n:height=,0m:width=",$iscD:1,"%":"HTMLVideoElement"},
nf:{"^":"L;0j:length=","%":"VideoTrackList"},
ng:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
nh:{"^":"h;0m:width=","%":"VTTRegion"},
aS:{"^":"W;",
gdR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.C("deltaY is not supported"))},
$isaS:1,
"%":"WheelEvent"},
j4:{"^":"L;",
gdu:function(a){var z,y,x
z=P.H
y=new P.O(0,$.D,[z])
x=H.j(new W.j5(new P.kn(y,[z])),{func:1,ret:-1,args:[P.H]})
this.d6(a)
this.dj(a,W.en(x,z))
return y},
dj:function(a,b){return a.requestAnimationFrame(H.aq(H.j(b,{func:1,ret:-1,args:[P.H]}),1))},
d6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdX:1,
"%":"DOMWindow|Window"},
j5:{"^":"n:21;a",
$1:function(a){this.a.Z(0,H.cQ(a))}},
dZ:{"^":"v;",$isdZ:1,"%":"Attr"},
nn:{"^":"kC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaw")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"CSSRuleList"},
no:{"^":"h5;",
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
np:{"^":"kE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isay")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"GamepadList"},
nu:{"^":"kG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isv")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.v]},
$isx:1,
$asx:function(){return[W.v]},
$asp:function(){return[W.v]},
$isl:1,
$asl:function(){return[W.v]},
$isa:1,
$asa:function(){return[W.v]},
$asq:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nv:{"^":"kI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaE")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aE]},
$isx:1,
$asx:function(){return[W.aE]},
$asp:function(){return[W.aE]},
$isl:1,
$asl:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$asq:function(){return[W.aE]},
"%":"SpeechRecognitionResultList"},
nw:{"^":"kK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(b)
H.f(c,"$isaF")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aF]},
$isx:1,
$asx:function(){return[W.aF]},
$asp:function(){return[W.aF]},
$isl:1,
$asl:function(){return[W.aF]},
$isa:1,
$asa:function(){return[W.aF]},
$asq:function(){return[W.aF]},
"%":"StyleSheetList"},
jf:{"^":"cx;d5:a<",
B:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.G)(z),++v){u=z[v]
b.$2(u,w.W(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.k([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$isdZ")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asR:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
jo:{"^":"jf;a",
h:function(a,b){return J.cf(this.a,H.u(b))},
gj:function(a){return this.gD(this).length}},
bC:{"^":"iM;a,b,c,$ti"},
bB:{"^":"bC;a,b,c,$ti"},
jq:{"^":"iN;a,b,c,d,e,$ti",
sdc:function(a){this.d=H.j(a,{func:1,args:[W.N]})},
dC:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.j(y,{func:1,args:[W.N]})
if(x)J.f_(z,this.c,y,!1)}this.b=null
this.sdc(null)
return},
p:{
ai:function(a,b,c,d,e){var z=W.en(new W.jr(c),W.N)
if(z!=null&&!0)J.f1(a,b,z,!1)
return new W.jq(0,a,b,z,!1,[e])}}},
jr:{"^":"n:22;a",
$1:function(a){return this.a.$1(H.f(a,"$isN"))}},
bD:{"^":"b;a",
cX:function(a){var z,y
z=$.cU()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.l9())
for(y=0;y<12;++y)z.i(0,C.u[y],W.la())}},
V:function(a){return $.eS().u(0,W.b4(a))},
R:function(a,b,c){var z,y,x
z=W.b4(a)
y=$.cU()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.c4(x.$4(a,b,c,this))},
$isaf:1,
p:{
e2:function(a){var z,y
z=document.createElement("a")
y=new W.kb(z,window.location)
y=new W.bD(y)
y.cX(a)
return y},
ns:[function(a,b,c,d){H.f(a,"$isV")
H.u(b)
H.u(c)
H.f(d,"$isbD")
return!0},"$4","l9",16,0,11],
nt:[function(a,b,c,d){var z,y,x
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
return z},"$4","la",16,0,11]}},
q:{"^":"b;$ti",
gw:function(a){return new W.du(a,this.gj(a),-1,[H.b_(this,a,"q",0)])}},
dE:{"^":"b;a",
V:function(a){return C.a.br(this.a,new W.i9(a))},
R:function(a,b,c){return C.a.br(this.a,new W.i8(a,b,c))},
$isaf:1},
i9:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isaf").V(this.a)}},
i8:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isaf").R(this.a,this.b,this.c)}},
kc:{"^":"b;",
cY:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aJ(0,new W.kd())
y=b.aJ(0,new W.ke())
this.b.H(0,z)
x=this.c
x.H(0,C.Y)
x.H(0,y)},
V:function(a){return this.a.u(0,W.b4(a))},
R:["cC",function(a,b,c){var z,y
z=W.b4(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dt(c)
else if(y.u(0,"*::"+b))return this.d.dt(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isaf:1},
kd:{"^":"n:10;",
$1:function(a){return!C.a.u(C.u,H.u(a))}},
ke:{"^":"n:10;",
$1:function(a){return C.a.u(C.u,H.u(a))}},
ko:{"^":"kc;e,a,b,c,d",
R:function(a,b,c){if(this.cC(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cf(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
ed:function(){var z,y,x,w,v
z=P.d
y=P.cw(C.t,z)
x=H.o(C.t,0)
w=H.j(new W.kp(),{func:1,ret:z,args:[x]})
v=H.k(["TEMPLATE"],[z])
y=new W.ko(y,P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),null)
y.cY(null,new H.hT(C.t,w,[x,z]),v,null)
return y}}},
kp:{"^":"n:23;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
km:{"^":"b;",
V:function(a){var z=J.A(a)
if(!!z.$isdI)return!1
z=!!z.$isK
if(z&&W.b4(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.i.cs(b,"on"))return!1
return this.V(a)},
$isaf:1},
du:{"^":"b;a,b,c,0d,$ti",
sbf:function(a){this.d=H.y(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbf(J.b1(this.a,z))
this.c=z
return!0}this.sbf(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb5:1},
ji:{"^":"b;a",$isL:1,$isdX:1,p:{
jj:function(a){if(a===window)return H.f(a,"$isdX")
else return new W.ji(a)}}},
af:{"^":"b;"},
kb:{"^":"b;a,b",$isnc:1},
eg:{"^":"b;a",
aU:function(a){new W.kz(this).$2(a,null)},
Y:function(a,b){if(b==null)J.d0(a)
else J.bL(b,a)},
dm:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fm(a)
x=J.cf(y.gd5(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.bn(a)}catch(t){H.Z(t)}try{u=W.b4(a)
this.dl(H.f(a,"$isV"),b,z,v,u,H.f(y,"$isJ"),H.u(x))}catch(t){if(H.Z(t) instanceof P.au)throw t
else{this.Y(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Y(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.Y(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.Y(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.k(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.R(a,J.fy(v),w.W(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.W(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.W(z,v)
w.df(z,v)}}if(!!J.A(a).$isdO)this.aU(a.content)},
$ismu:1},
kz:{"^":"n:24;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dm(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Y(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fn(z)}catch(w){H.Z(w)
v=H.f(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bL(u,v)}else J.bL(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isv")}}},
jh:{"^":"h+fX;"},
jk:{"^":"h+p;"},
jl:{"^":"jk+q;"},
jm:{"^":"h+p;"},
jn:{"^":"jm+q;"},
jt:{"^":"h+p;"},
ju:{"^":"jt+q;"},
jL:{"^":"h+p;"},
jM:{"^":"jL+q;"},
jW:{"^":"h+R;"},
jX:{"^":"h+R;"},
jY:{"^":"h+p;"},
jZ:{"^":"jY+q;"},
k_:{"^":"h+p;"},
k0:{"^":"k_+q;"},
k3:{"^":"h+p;"},
k4:{"^":"k3+q;"},
ka:{"^":"h+R;"},
ea:{"^":"L+p;"},
eb:{"^":"ea+q;"},
kf:{"^":"h+p;"},
kg:{"^":"kf+q;"},
kj:{"^":"h+R;"},
kq:{"^":"h+p;"},
kr:{"^":"kq+q;"},
ee:{"^":"L+p;"},
ef:{"^":"ee+q;"},
kv:{"^":"h+p;"},
kw:{"^":"kv+q;"},
kB:{"^":"h+p;"},
kC:{"^":"kB+q;"},
kD:{"^":"h+p;"},
kE:{"^":"kD+q;"},
kF:{"^":"h+p;"},
kG:{"^":"kF+q;"},
kH:{"^":"h+p;"},
kI:{"^":"kH+q;"},
kJ:{"^":"h+p;"},
kK:{"^":"kJ+q;"}}],["","",,P,{"^":"",
er:function(a){return a},
a6:function(a){var z,y,x,w,v
if(a==null)return
z=P.a4(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
kZ:function(a,b){var z={}
a.B(0,new P.l_(z))
return z},
l0:function(a){var z,y
z=new P.O(0,$.D,[null])
y=new P.cE(z,[null])
a.then(H.aq(new P.l1(y),1))["catch"](H.aq(new P.l2(y),1))
return z},
dl:function(){var z=$.dk
if(z==null){z=J.cb(window.navigator.userAgent,"Opera",0)
$.dk=z}return z},
h1:function(){var z,y
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
j6:{"^":"b;",
bQ:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aI:function(a){var z,y,x,w,v,u,t,s,r,q
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
if(typeof Promise!="undefined"&&a instanceof Promise)return P.l0(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bQ(a)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hL()
z.a=u
C.a.i(x,v,u)
this.dX(a,new P.j8(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bQ(t)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
if(u!=null)return u
s=J.T(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.i(x,v,u)
for(x=J.bG(u),q=0;q<r;++q)x.i(u,q,this.aI(s.h(t,q)))
return u}return a},
dI:function(a,b){this.c=b
return this.aI(a)}},
j8:{"^":"n:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aI(b)
J.eZ(z,a,y)
return y}},
l_:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
j7:{"^":"j6;a,b,c",
dX:function(a,b){var z,y,x,w
H.j(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
b.$2(w,a[w])}}},
l1:{"^":"n:12;a",
$1:function(a){return this.a.Z(0,a)}},
l2:{"^":"n:12;a",
$1:function(a){return this.a.dF(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
e3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ba:{"^":"b;ag:a>,a0:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
C:function(a,b){if(b==null)return!1
return H.ap(b,"$isba",[P.H],null)&&this.a==J.bO(b)&&this.b==b.ga0(b)},
gv:function(a){var z,y,x
z=J.at(this.a)
y=J.at(this.b)
y=P.e3(P.e3(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
k5:{"^":"b;"},
Y:{"^":"k5;$ti"}}],["","",,P,{"^":"",fI:{"^":"h;",$isfI:1,"%":"SVGAnimatedLength"},lO:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},lP:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lQ:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lR:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},lS:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lT:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lU:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lV:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},lW:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lX:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},lY:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},lZ:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},m_:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},m0:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},m1:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},m2:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},m5:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},m6:{"^":"bs;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hm:{"^":"bs;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bs:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},mb:{"^":"bs;0n:height=,0m:width=","%":"SVGImageElement"},b7:{"^":"h;",$isb7:1,"%":"SVGLength"},mh:{"^":"jR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.t(b)
H.f(c,"$isb7")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b7]},
$isl:1,
$asl:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$asq:function(){return[P.b7]},
"%":"SVGLengthList"},mi:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},b9:{"^":"h;",$isb9:1,"%":"SVGNumber"},mv:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.t(b)
H.f(c,"$isb9")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b9]},
$isl:1,
$asl:function(){return[P.b9]},
$isa:1,
$asa:function(){return[P.b9]},
$asq:function(){return[P.b9]},
"%":"SVGNumberList"},mA:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},mC:{"^":"h;0j:length=","%":"SVGPointList"},mE:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mF:{"^":"hm;0n:height=,0m:width=","%":"SVGRectElement"},dI:{"^":"K;",$isdI:1,"%":"SVGScriptElement"},mR:{"^":"kl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.t(b)
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
C.a.l(z,new W.km())
c=new W.eg(new W.dE(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dL(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.ga3(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mS:{"^":"bs;0n:height=,0m:width=","%":"SVGSVGElement"},be:{"^":"h;",$isbe:1,"%":"SVGTransform"},n0:{"^":"ky;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.t(b)
H.f(c,"$isbe")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.be]},
$isl:1,
$asl:function(){return[P.be]},
$isa:1,
$asa:function(){return[P.be]},
$asq:function(){return[P.be]},
"%":"SVGTransformList"},ne:{"^":"bs;0n:height=,0m:width=","%":"SVGUseElement"},jQ:{"^":"h+p;"},jR:{"^":"jQ+q;"},k1:{"^":"h+p;"},k2:{"^":"k1+q;"},kk:{"^":"h+p;"},kl:{"^":"kk+q;"},kx:{"^":"h+p;"},ky:{"^":"kx+q;"}}],["","",,P,{"^":"",an:{"^":"b;",$isl:1,
$asl:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isiY:1}}],["","",,P,{"^":"",lw:{"^":"h;0j:length=","%":"AudioBuffer"},lx:{"^":"jg;",
h:function(a,b){return P.a6(a.get(H.u(b)))},
B:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a6(y.value[1]))}},
gD:function(a){var z=H.k([],[P.d])
this.B(a,new P.fJ(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fJ:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},ly:{"^":"L;0j:length=","%":"AudioTrackList"},fK:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mx:{"^":"fK;0j:length=","%":"OfflineAudioContext"},jg:{"^":"h+R;"}}],["","",,P,{"^":"",fM:{"^":"h;",$isfM:1,"%":"WebGLBuffer"},hh:{"^":"h;",$ishh:1,"%":"WebGLFramebuffer"},ip:{"^":"h;",$isip:1,"%":"WebGLProgram"},mG:{"^":"h;",
bp:function(a,b){return a.activeTexture(b)},
bs:function(a,b,c){return a.attachShader(b,c)},
bt:function(a,b,c){return a.bindBuffer(b,c)},
bv:function(a,b,c){return a.bindFramebuffer(b,c)},
bw:function(a,b,c){return a.bindTexture(b,c)},
bx:function(a,b){return a.blendEquation(b)},
by:function(a,b,c){return a.blendFunc(b,c)},
bz:function(a,b,c,d){return a.bufferData(b,c,d)},
bA:function(a,b){return a.clear(b)},
bB:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bC:function(a,b){return a.compileShader(b)},
bD:function(a){return a.createBuffer()},
bE:function(a){return a.createProgram()},
bF:function(a,b){return a.createShader(b)},
bG:function(a){return a.createTexture()},
bI:function(a,b){return a.depthMask(b)},
bJ:function(a,b){return a.disable(b)},
bK:function(a,b,c,d){return a.drawArrays(b,c,d)},
bL:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bM:function(a,b){return a.enable(b)},
bN:function(a,b){return a.enableVertexAttribArray(b)},
aK:function(a,b){return a.generateMipmap(b)},
ah:function(a){return P.a6(a.getContextAttributes())},
aL:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bS:function(a,b){return a.linkProgram(b)},
c_:function(a,b,c){return a.pixelStorei(b,c)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isco)y=!0
else y=!1
if(y){this.ax(a,b,c,d,e,f,P.er(g))
return}if(!!z.$isbU)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,g)
return}if(!!z.$isbo)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,g)
return}if(!!z.$iscD)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$iscn)z=!0
else z=!1
if(z){this.aB(a,b,c,d,e,f,g)
return}throw H.c(P.ch("Incorrect number or type of arguments"))},
c2:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
"%":"WebGLRenderingContext"},mH:{"^":"h;",
dw:function(a,b){return a.beginTransformFeedback(b)},
dB:function(a,b){return a.bindVertexArray(b)},
dN:function(a){return a.createVertexArray()},
dS:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dT:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dU:function(a){return a.endTransformFeedback()},
eg:function(a,b,c,d){this.dr(a,b,H.r(c,"$isa",[P.d],"$asa"),d)
return},
dr:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eh:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bp:function(a,b){return a.activeTexture(b)},
bs:function(a,b,c){return a.attachShader(b,c)},
bt:function(a,b,c){return a.bindBuffer(b,c)},
bv:function(a,b,c){return a.bindFramebuffer(b,c)},
bw:function(a,b,c){return a.bindTexture(b,c)},
bx:function(a,b){return a.blendEquation(b)},
by:function(a,b,c){return a.blendFunc(b,c)},
bz:function(a,b,c,d){return a.bufferData(b,c,d)},
bA:function(a,b){return a.clear(b)},
bB:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bC:function(a,b){return a.compileShader(b)},
bD:function(a){return a.createBuffer()},
bE:function(a){return a.createProgram()},
bF:function(a,b){return a.createShader(b)},
bG:function(a){return a.createTexture()},
bI:function(a,b){return a.depthMask(b)},
bJ:function(a,b){return a.disable(b)},
bK:function(a,b,c,d){return a.drawArrays(b,c,d)},
bL:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bM:function(a,b){return a.enable(b)},
bN:function(a,b){return a.enableVertexAttribArray(b)},
aK:function(a,b){return a.generateMipmap(b)},
ah:function(a){return P.a6(a.getContextAttributes())},
aL:function(a){return a.getError()},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aQ:function(a,b){return a.getShaderInfoLog(b)},
aR:function(a,b,c){return a.getShaderParameter(b,c)},
aS:function(a,b,c){return a.getUniformLocation(b,c)},
bS:function(a,b){return a.linkProgram(b)},
c_:function(a,b,c){return a.pixelStorei(b,c)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aW:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.A(g)
if(!!z.$isco)y=!0
else y=!1
if(y){this.ax(a,b,c,d,e,f,P.er(g))
return}if(!!z.$isbU)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,g)
return}if(!!z.$isbo)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,g)
return}if(!!z.$iscD)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$iscn)z=!0
else z=!1
if(z){this.aB(a,b,c,d,e,f,g)
return}throw H.c(P.ch("Incorrect number or type of arguments"))},
c2:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
"%":"WebGL2RenderingContext"},iD:{"^":"h;",$isiD:1,"%":"WebGLShader"},iU:{"^":"h;",$isiU:1,"%":"WebGLTexture"},iZ:{"^":"h;",$isiZ:1,"%":"WebGLUniformLocation"},j2:{"^":"h;",$isj2:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mO:{"^":"ki;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.a6(this.d9(a,b))},
i:function(a,b,c){H.t(b)
H.f(c,"$isJ")
throw H.c(P.C("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
d9:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isl:1,
$asl:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},kh:{"^":"h+p;"},ki:{"^":"kh+q;"}}],["","",,G,{"^":"",
j9:function(a){var z,y,x,w
z=H.k(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a_(z,"\n")},
e_:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bF(a,b)
z.aV(a,y,c)
z.bC(a,y)
x=H.c4(z.aR(a,y,35713))
if(x!=null&&!x){w=z.aQ(a,y)
P.a7("E:Compilation failed:")
P.a7("E:"+G.j9(c))
P.a7("E:Failure:")
P.a7(C.i.J("E:",w))
throw H.c(w)}return y},
dv:function(a,b){var z,y,x
H.r(a,"$isa",[T.z],"$asa")
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
hd:function(a,b){var z,y
H.r(a,"$isa",[T.ah],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bO(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.i(b,z+1,J.ce(a[y]))}return b},
he:function(a,b){var z,y,x,w,v
H.r(a,"$isa",[T.aa],"$asa")
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
hc:function(a,b){var z,y
H.r(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b1(a[y],0))
if(y>=a.length)return H.i(a,y)
C.n.i(b,z+1,J.b1(a[y],1))
if(y>=a.length)return H.i(a,y)
C.n.i(b,z+2,J.b1(a[y],2))
if(y>=a.length)return H.i(a,y)
C.n.i(b,z+3,J.b1(a[y],3))}return b},
jJ:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ao(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.ak],u=[T.aa],t=[T.z],s=[T.ah];y.t();){r=y.d
if(!x.ad(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.et>0)H.bI("I: "+r)
continue}q=z.h(0,r)
switch($.ac().h(0,r).a){case"vec2":b.X(r,G.hd(H.bK(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.X(r,G.dv(H.bK(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.X(r,G.he(H.bK(q,"$isa",u,"$asa"),null),4)
break
case"float":b.X(r,new Float32Array(H.c1(H.bK(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.X(r,G.hc(H.bK(q,"$isa",w,"$asa"),null),4)
break}}},
aQ:{"^":"b;"},
aR:{"^":"aQ;d,a,b,c",
ak:function(){return this.d},
k:function(a){var z,y,x,w
z=H.k(["{"+new H.dS(H.l6(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ao(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a_(z,"\n")}},
fO:{"^":"b;0a,b",
bO:function(a,b,c){J.fi(this.a,b)
if(c>0)J.fE(this.a,b,c)},
cg:function(a,b,c,d,e,f,g,h){J.ca(this.a,34962,b)
J.fF(this.a,c,d,e,!1,g,h)}},
hg:{"^":"b;a,b,c,d,e"},
ds:{"^":"b;a,b,c"},
dt:{"^":"b;a,b,c,d"},
dw:{"^":"b;a,b,c,d,e",
a6:function(a){switch($.ac().h(0,a).a){case"vec2":this.e.i(0,a,H.k([],[T.ah]))
break
case"vec3":this.e.i(0,a,H.k([],[T.z]))
break
case"vec4":this.e.i(0,a,H.k([],[T.aa]))
break
case"float":this.e.i(0,a,H.k([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.k([],[[P.a,P.E]]))
break}},
b_:function(a){var z,y,x,w,v
H.r(a,"$isa",[T.z],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x){w=a[x]
w.toString
v=new T.z(new Float32Array(3))
v.E(w)
C.a.l(y,v)}},
cE:function(a,b){var z,y,x,w,v,u,t
z=[T.ah]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.ah(u))}},
cF:function(a,b){var z,y,x,w,v,u
z=[T.z]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new T.z(new Float32Array(3))
u.E(v)
x.l(y,u)}},
aY:function(a,b){var z,y,x,w,v,u
z=[T.aa]
H.r(b,"$isa",z,"$asa")
y=H.r(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.G)(b),++w){v=b[w]
v.toString
u=new T.aa(new Float32Array(4))
u.E(v)
x.l(y,u)}},
cK:function(){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a_(z," ")}},
cv:{"^":"aQ;"},
h2:{"^":"cv;z,Q,ch,cx,d,e,f,a,b,c",
k:function(a){return"DL: p:"+H.e(this.z)}},
hr:{"^":"aR;x,y,z,d,a,b,c",
ak:function(){var z,y,x
z=this.y
y=this.z
G.hs(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
hs:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.r(c,"$isa",[G.cv],"$asa")
z=a.length
C.f.bP(a,0,z,0)
C.f.bP(b,0,4,0)
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
hU:{"^":"aR;d,a,b,c"},
hW:{"^":"aQ;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sar:function(a){this.cx=H.r(a,"$isa",[P.E],"$asa")},
b0:function(a,b,c){var z,y
C.i.am(a,0)
H.f(b,"$isan")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.ca(z.a,34962,y)
J.cY(z.a,34962,b,35048)},
cL:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
X:function(a,b,c){var z,y,x,w,v
z=J.cV(a,0)===105
if(z&&this.z===0)this.z=C.b.a4(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.cc(x.a))
this.b0(a,b,c)
w=$.ac().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bM(x.a,this.e)
x.bO(0,v,z?1:0)
x.cg(0,y.h(0,a),v,w.b1(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.k(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ao(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a_(y,"  ")}},
id:{"^":"aR;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cG:function(a,b){var z
if(typeof a!=="number")return a.ek()
if(typeof b!=="number")return H.bj(b)
z=a/b
if(this.z===z)return
this.z=z
this.b3()},
b3:function(){var z,y,x,w,v,u
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
ak:function(){var z,y,x
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aM())
x=this.cy
x.E(z.d)
z=this.cx
z.E(this.db)
z.bU(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
lM:{"^":"b;"},
iw:{"^":"aQ;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cP:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.d_(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.G)(z),++u){t=z[u]
x.i(0,t,J.d_(w.a,v,t))}},
cS:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.k([],[P.d])
x=H.k([],[P.d])
for(y=new H.ao(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ad(0,w))C.a.l(x,w)}for(z=this.x,z=P.jT(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.r(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.ao(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cV(s,0)){case 117:if(w.ad(0,s)){r=b.h(0,s)
if(v.ad(0,s))H.bI("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.ac().h(0,s)
if(q==null)H.a2("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.t(r)
J.cg(x.a,p,r)}else if(!!J.A(r).$ishw)J.fC(x.a,p,r)
break
case"float":if(q.c===0){H.cL(r)
J.fA(x.a,p,r)}else if(!!J.A(r).$isan)J.fB(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.as(r,"$isa1").a
J.d5(x.a,p,!1,s)}else if(!!J.A(r).$isan)J.d5(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.as(r,"$isbx").a
J.d4(x.a,p,!1,s)}else if(!!J.A(r).$isan)J.d4(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.d3(o,p,H.as(r,"$isaa").a)
else J.d3(o,p,H.f(r,"$isan"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.d2(o,p,H.as(r,"$isz").a)
else J.d2(o,p,H.f(r,"$isan"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.d1(o,p,H.as(r,"$isah").a)
else J.d1(o,p,H.f(r,"$isan"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bj(s)
J.cW(x.a,33984+s)
s=H.as(r,"$iscB").b
J.bl(x.a,3553,s)
s=this.ch
J.cg(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bj(s)
J.cW(x.a,33984+s)
s=H.as(r,"$iscB").b
J.bl(x.a,34067,s)
s=this.ch
J.cg(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
default:H.bI("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aO(r,!0)
o=x.a
if(s)J.bm(o,2929)
else J.cd(o,2929)
break
case"cStencilFunc":H.as(r,"$isdQ")
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
case"cBlendEquation":H.as(r,"$isdP")
s=r.a
o=x.a
if(s===1281)J.cd(o,3042)
else{J.bm(o,3042)
o=r.b
n=r.c
J.f5(x.a,o,n)
J.f4(x.a,s)}break}++t
break}}m=P.h6(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
""+t
m.k(0)},
cJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.r(b,"$isa",[G.aR],"$asa")
Date.now()
z=this.d
J.fD(z.a,this.r)
this.ch=0
this.z.S(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.G)(b),++x){w=b[x]
this.cV(w.a,w.ak())}y=this.Q
y.S(0)
for(v=a.cy,v=new H.ao(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cS()
if(u.length!==0)P.a7("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bM(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cL()
s=a.Q
r=a.z
if(t)J.f2(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.fg(q,v,y,s,0,r)
else J.ff(q,v,y,s,0)}else{s=z.a
if(r>1)J.fe(s,v,0,y,r)
else J.fd(s,v,0,y)}if(t)J.fj(z.a)},
p:{
ix:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a8(null,null,null,z)
x=c.b
w=d.b
v=H.r(c.f,"$isa",[z],"$asa")
u=J.f9(b.a)
t=G.e_(b.a,35633,x)
J.cX(b.a,u,t)
s=G.e_(b.a,35632,w)
J.cX(b.a,u,s)
if(v.length>0)J.fz(b.a,u,v,35980)
J.fu(b.a,u)
if(!H.c4(J.ft(b.a,u,35714)))H.a2(J.fs(b.a,u))
z=new G.iw(b,c,d,u,P.cw(c.c,z),P.a4(z,P.b),P.a4(z,z),y,a,!1,!0)
z.cP(a,b,c,d)
return z}}},
F:{"^":"b;a,b,c",
b1:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iE:{"^":"b;a,0b,c,d,e,f,r,x",
cD:function(a){var z,y,x,w
H.r(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.ai(z)},
a5:function(a){var z,y,x
H.r(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.G)(a),++x)C.a.l(y,a[x])
C.a.ai(y)},
aZ:function(a){var z,y
H.r(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<3;++y)C.a.l(z,a[y])
C.a.ai(z)},
b2:function(a,b){var z=[P.d]
this.b=this.cW(!1,H.r(a,"$isa",z,"$asa"),H.r(b,"$isa",z,"$asa"))},
cQ:function(a){return this.b2(a,null)},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.r(b,"$isa",z,"$asa")
H.r(c,"$isa",z,"$asa")
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
return C.a.a_(w,"\n")},
p:{
dJ:function(a){var z,y
z=P.d
y=[z]
return new G.iE(a,H.k([],y),H.k([],y),H.k([],y),H.k([],y),0,P.a4(z,P.E))}}},
dK:{"^":"aQ;",
aM:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
e1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
b=new T.z(new Float32Array(3))
b.a2(0,1,0)
z=this.aM()
y=new Float32Array(3)
x=new T.z(y)
x.E(z)
w=a.a
y[0]=y[0]-w[0]
y[1]=y[1]-w[1]
y[2]=y[2]-w[2]
x.aE(0)
v=b.bH(x)
v.aE(0)
u=x.bH(v)
u.aE(0)
t=v.aC(z)
s=u.aC(z)
z=x.aC(z)
r=v.a
q=r[0]
p=u.a
o=p[0]
n=y[0]
m=r[1]
l=p[1]
k=y[1]
r=r[2]
p=p[2]
y=y[2]
j=this.d.a
j[15]=1
j[14]=-z
j[13]=-s
j[12]=-t
j[11]=0
j[10]=y
j[9]=p
j[8]=r
j[7]=0
j[6]=k
j[5]=l
j[4]=m
j[3]=0
j[2]=n
j[1]=o
j[0]=q},
bT:function(a){return this.e1(a,null)}},
iV:{"^":"b;a,b,c,d,e,f,r"},
cB:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ht:{"^":"cB;f,a,b,c,d,e"}}],["","",,Y,{"^":"",
jw:function(a){var z,y,x,w
z=J.T(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.k(y,[P.ak])
for(w=0;w<z.gj(a);++w){y=z.h(a,w)
if(typeof y==="number"&&Math.floor(y)===y)C.a.i(x,w,J.aP(z.h(a,w)))
else{y=z.h(a,w)
if(typeof y==="number")C.a.i(x,w,H.cL(z.h(a,w)))}}return x},
jN:function(a){var z,y,x,w
z=J.T(a)
y=new Array(z.gj(a))
y.fixed$length=Array
x=H.k(y,[P.E])
for(w=0;w<z.gj(a);++w)C.a.i(x,w,H.t(z.h(a,w)))
return x},
jv:function(a){var z,y,x
z=J.T(a)
y=H.U(z.h(a,"skinIndices"))
H.U(z.h(a,"skinWeights"))
if(y==null||J.al(y)===0)return 0
z=J.al(z.h(a,"vertices"))
if(typeof z!=="number")return z.a4()
z=C.m.G(z,3)
x=C.b.a4(J.al(y),z)
P.a7("Skin multiplier is "+x)
return x},
hu:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=H.k([],[G.dw])
y=Y.jv(b5)
x=J.T(b5)
w=Y.jN(H.U(x.h(b5,"faces")))
v=w.length
P.a7("faces: "+v)
u=Y.de(H.U(x.h(b5,"vertices")))
t=Y.de(H.U(x.h(b5,"normals")))
s=y===0
r=s?null:Y.df(y,H.U(x.h(b5,"skinIndices")))
q=s?null:Y.df(y,Y.jw(H.U(x.h(b5,"skinWeights"))))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.a
m=n[0]+n[1]+n[2]+n[3]
if(m<0.98||m>1.02)H.bI("bad vector: "+H.e(o))}l=Y.fU(H.U(J.b1(x.h(b5,"uvs"),0)))
for(x=y>0,s=[T.z],n=l.length>0,k=t.length>0,j=[G.ds],i=[G.dt],h=P.d,g=[P.a,,],f=[P.E],e=[T.ah],d=r&&C.a,c=q&&C.a,b=[T.aa],a=0;a<v;){a0=a+1
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
C.a.l(a8,w[a])}if(typeof a4!=="number")return H.bj(a4)
for(;b0=z.length,b0<=a4;){b1=new G.dw(!1,H.k([],j),H.k([],i),H.k([],s),P.a4(h,g))
if(k)b1.a6("aNormal")
if(n)b1.a6("aTexUV")
if(x){b1.a6("aBoneIndex")
b1.a6("aBoneWeight")}C.a.l(z,b1)}if(a4<0)return H.i(z,a4)
b1=z[a4]
b2=H.k([],s)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.G)(a2),++p)C.a.l(b2,C.a.h(u,a2[p]))
a0=b1.d.length
if(m===3){H.r(b2,"$isa",s,"$asa")
C.a.l(b1.b,new G.ds(a0,a0+1,a0+2))
b1.b_(b2)}else{H.r(b2,"$isa",s,"$asa")
C.a.l(b1.c,new G.dt(a0,a0+1,a0+2,a0+3))
b1.b_(b2)}if(a5.length>0)b1.cE("aTexUV",a5)
if(a6.length>0)b1.cF("aNormal",a6)
if(x){b3=H.k([],b)
b4=H.k([],b)
for(b0=a2.length,p=0;p<a2.length;a2.length===b0||(0,H.G)(a2),++p){a0=a2[p]
C.a.l(b3,d.h(r,a0))
C.a.l(b4,c.h(q,a0))}b1.aY("aBoneIndex",b3)
b1.aY("aBoneWeight",b4)}}x="out: "+z.length+" "
if(0>=z.length)return H.i(z,0)
P.a7(x+z[0].k(0))
return z},
de:function(a){var z,y,x,w,v,u,t,s
z=J.T(a)
y=new Array(C.b.G(z.gj(a),3))
y.fixed$length=Array
x=H.k(y,[T.z])
for(w=0;w<z.gj(a);w+=3){y=C.b.G(w,3)
v=J.aP(z.h(a,w))
u=J.aP(z.h(a,w+1))
t=J.aP(z.h(a,w+2))
s=new Float32Array(3)
s[0]=v
s[1]=u
s[2]=t
C.a.i(x,y,new T.z(s))}return x},
fU:function(a){var z,y,x,w,v,u,t
z=J.T(a)
y=new Array(C.b.G(z.gj(a),2))
y.fixed$length=Array
x=H.k(y,[T.ah])
for(w=0;w<z.gj(a);w+=2){y=C.b.G(w,2)
v=J.aP(z.h(a,w))
u=J.aP(z.h(a,w+1))
t=new Float32Array(2)
t[0]=v
t[1]=u
C.a.i(x,y,new T.ah(t))}return x},
df:function(a,b){var z,y,x,w,v,u,t
z=J.T(b)
y=new Array(C.b.a4(z.gj(b),a))
y.fixed$length=Array
x=H.k(y,[T.aa])
for(w=0,v=0;w<z.gj(b);w+=a,++v){y=new Float32Array(4)
for(u=0;u<a;++u){t=J.aP(z.h(b,w+u))
if(u>=4)return H.i(y,u)
y[u]=t}C.a.i(x,v,new T.aa(y))}return x}}],["","",,R,{"^":"",
jV:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.jp("span",null),"$isV")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).al(y,"float")
y.setProperty(x,"left","")
x=C.x.al(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.I(z,v)}return z},
iv:{"^":"iu;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
e8:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.a7("size change "+H.e(y)+" "+H.e(x))
this.dx.cG(y,x)
this.z=y
this.Q=x},"$1","ge7",4,0,13]},
iJ:{"^":"b;",
cR:function(a,b,c){var z,y
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
iK:{"^":"iJ;e,f,a,b,c,d",
cU:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.ef(y,2)+" fps"
C.q.cp(this.c,b)
x=C.b.G(30*C.z.dD(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isV")
v=w.style
u=""+x+"px"
v.height=u
C.q.I(z,w)},
cT:function(a){return this.cU(a,"")}}}],["","",,A,{"^":"",
es:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.r(e,"$isa",[G.aR],"$asa")
z=b.dx
z.E(c)
y=b.d
z.bU(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.e(b)
w=C.a.ge0(e)
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
v.dJ(new T.bx(u))
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
a.cJ(b.cx,e,d)
if(0>=e.length)return H.i(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.G)(y),++r)A.es(a,y[r],z,d,e)},
bV:{"^":"dK;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
dH:{"^":"aQ;d,e,f,a,b,c"},
iu:{"^":"aQ;",
cO:function(a,b,c){if(this.d==null)this.d=new G.hg(this.e,null,null,null,null)},
cI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
C.a.l(s,new G.aR(P.a4(x,w),"transforms",!1,!0))
r=new T.a1(new Float32Array(16))
r.O()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.G)(v),++o)A.es(p,v[o],r,a,s)
if(0>=s.length)return H.i(s,-1)
s.pop()}},
cH:function(){return this.cI(null)}}}],["","",,D,{"^":"",
hP:function(a){var z,y,x,w
z=[P.J,,,]
y=new P.O(0,$.D,[z])
x=new XMLHttpRequest()
C.y.e3(x,"GET",a)
w=W.by
W.ai(x,"loadend",H.j(new D.hQ(new P.cE(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.y.co(x,"")
return y},
hN:function(a){var z,y,x,w
z=W.bU
y=new P.O(0,$.D,[z])
x=document.createElement("img")
w=new W.bB(x,"load",!1,[W.N])
w.gdV(w).af(new D.hO(new P.cE(y,[z]),x),-1)
x.src=a
return y},
hQ:{"^":"n:25;a,b",
$1:function(a){H.f(a,"$isby")
this.a.Z(0,H.aZ(C.U.dO(0,H.u(W.kM(this.b.response))),{futureOr:1,type:[P.J,,,]}))}},
hO:{"^":"n:13;a,b",
$1:function(a){H.f(a,"$isN")
return this.a.Z(0,this.b)}},
hF:{"^":"b;a,b,c",
cM:function(a){var z,y
a=document
z=W.b6
y={func:1,ret:-1,args:[z]}
W.ai(a,"keydown",H.j(new D.hH(this),y),!1,z)
W.ai(a,"keyup",H.j(new D.hI(this),y),!1,z)},
p:{
hG:function(a){var z=P.E
z=new D.hF(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z))
z.cM(a)
return z}}},
hH:{"^":"n:14;a",
$1:function(a){var z
H.f(a,"$isb6")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hI:{"^":"n:14;a",
$1:function(a){var z
H.f(a,"$isb6")
z=this.a
z.a.c0(0,a.which)
z.c.l(0,a.which)}},
hZ:{"^":"b;a,b,c,d,e,f,r,x",
cN:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gbX(a)
x=H.o(y,0)
W.ai(y.a,y.b,H.j(new D.i0(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbW(a)
y=H.o(x,0)
W.ai(x.a,x.b,H.j(new D.i1(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbY(a)
x=H.o(y,0)
W.ai(y.a,y.b,H.j(new D.i2(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbZ(a)
x=H.o(z,0)
W.ai(z.a,z.b,H.j(new D.i3(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
i_:function(a){var z=P.E
z=new D.hZ(P.a8(null,null,null,z),P.a8(null,null,null,z),P.a8(null,null,null,z),0,0,0,0,0)
z.cN(a)
return z}}},
i0:{"^":"n:4;a",
$1:function(a){var z,y
H.f(a,"$isW")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.t(y.gbV(a).a)
z.x=H.t(y.gbV(a).b)
z.d=a.movementX
z.e=a.movementY}},
i1:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isW")
a.preventDefault()
P.a7("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
i2:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isW")
a.preventDefault()
z=this.a
z.a.c0(0,a.button)
z.c.l(0,a.button)}},
i3:{"^":"n:27;a",
$1:function(a){H.f(a,"$isaS")
a.preventDefault()
this.a.f=H.t(C.af.gdR(a))}},
ib:{"^":"dK;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bH:function(a){var z,y
z=C.f.dW(H.r(a,"$isl",[P.b],"$asl"),0,new A.l8(),P.E)
if(typeof z!=="number")return H.bj(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l8:{"^":"n:28;",
$2:function(a,b){var z,y
H.t(a)
z=J.at(b)
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
return new T.z(z)},
dJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return new T.aa(z)},
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
bU:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
gag:function(a){return this.a[0]},
ga0:function(a){return this.a[1]}},z:{"^":"b;a",
a2:function(a,b,c){var z=this.a
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
if(b instanceof T.z){z=this.a
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
gbR:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aE:function(a){var z,y,x
z=Math.sqrt(this.gbR())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aC:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bH:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.z(new Float32Array(3))
z.a2(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gag:function(a){return this.a[0]},
ga0:function(a){return this.a[1]},
gcj:function(a){return this.a[2]},
p:{
dU:function(a,b,c){var z=new T.z(new Float32Array(3))
z.a2(a,b,c)
return z},
dV:function(a){var z=new Float32Array(3)
z[2]=a
z[1]=a
z[0]=a
return new T.z(z)}}},aa:{"^":"b;a",
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
if(b instanceof T.aa){z=this.a
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
gag:function(a){return this.a[0]},
ga0:function(a){return this.a[1]},
gcj:function(a){return this.a[2]},
gei:function(a){return this.a[3]}}}],["","",,L,{"^":"",
ez:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=document
x=C.r.cm(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iK(0,0,x,w,y.createElement("div"),R.jV("blue","gray",90,30))
u.cR(x,"blue","gray")
t=H.f(C.r.e5(y,"#webgl-canvas"),"$isbo")
s=new G.fO(t)
y=P.d
x=P.b
v=(t&&C.J).cl(t,"webgl2",P.dA(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a2(P.dr('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fq(v))
if($.et>0)P.a7("I: "+r)
J.f7(v,0,0,0,1)
J.bm(v,2929)
J.bm(v,2884)
v=new Float32Array(3)
r=D.hG(null)
q=D.i_(t)
p=new T.a1(new Float32Array(16))
p.O()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.ib(0.3,0,0,0,new T.z(v),-0.02,r,q,p,new T.z(o),new T.z(n),new T.z(m),new T.z(new Float32Array(3)),"camera:orbit",!1,!0)
l.dy=-0.001
v=new T.a1(new Float32Array(16))
v.O()
r=new T.a1(new Float32Array(16))
r.O()
k=new G.id(l,50,1,0.01,1000,v,r,new T.a1(new Float32Array(16)),P.a4(y,x),"perspective",!1,!0)
k.b3()
v=$.eW()
r=$.eT()
q=$.eV()
p=new Float32Array(16)
o=new Float32Array(16)
n=new T.z(new Float32Array(3))
m=new T.z(new Float32Array(3))
n.E(r)
m.E(q)
q=H.k([],[G.cv])
r=new Float32Array(64)
j=new Float32Array(4)
C.a.l(q,new G.h2(v,40,new T.a1(p),new T.a1(o),1,n,m,"dir",!1,!0))
m=H.k([],[A.dH])
i=new R.iv(t,k,null,s,m,17664,0,0,0,0,"main",!1,!0)
i.cO("main",s,null)
i.e8(null)
n=W.N
W.ai(window,"resize",H.j(i.ge7(),{func:1,ret:-1,args:[n]}),!1,n)
n=G.ix("main",s,$.eY(),$.eX())
y=H.k([k,new G.hr(q,r,j,P.a4(y,x),"illumination",!1,!0)],[G.aR])
j=H.k([],[A.bV])
h=new A.dH(n,y,j,"main",!1,!0)
C.a.l(m,h)
z.a=0
P.hj(H.k([D.hP("../asset/leeperrysmith/LeePerrySmith.js"),D.hN("../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg")],[[P.a0,P.b]]),null,!1,x).af(new L.lm(s,h,new L.ll(z,l,i,u)),null)},
ll:{"^":"n:29;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
H.cQ(a7)
if(typeof a7!=="number")return a7.aX()
z=this.a
z.a=a7+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aT()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aT()
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
u=y.dy
if(typeof v!=="number")return v.aT()
v=y.ch-v*u
if(v>0)y.ch=v
v=C.m.dE(y.cy,-1.4707963267948965,1.4707963267948965)
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
t=y.dx
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
y.bT(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.db
p=Math.sqrt(t.gbR())
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
this.c.cH()
C.ag.gdu(window).af(this,-1)
this.d.cT(z.a)}},
lm:{"^":"n:30;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.U(a)
z=new G.iV(!1,!1,!1,!0,1,9729,9729)
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
s.i(0,"uBumpMap",new G.ht(w,"../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg",v,3553,y,z))
s.i(0,"uBumpScale",0.01)
r=Y.hu(H.f(x.h(a,0),"$isJ"))
if(0>=r.length)return H.i(r,0)
P.a7(r[0])
x=this.b
y=x.d
if(0>=r.length)return H.i(r,0)
v=r[0]
w=y.d
y=y.e.x
t=P.a4(u,t)
q=J.fb(w.a)
p=new G.hW(w,q,4,t,y,0,-1,P.a4(u,P.an),"meshdata:../asset/leeperrysmith/LeePerrySmith.js",!1,!0)
u=G.dv(v.d,null)
t.i(0,"aPosition",J.cc(w.a))
p.ch=u
p.b0("aPosition",u,3)
o=$.ac().h(0,"aPosition")
if(o==null)H.a2("Unknown canonical aPosition")
n=y.h(0,"aPosition")
J.bM(w.a,q)
w.bO(0,n,0)
w.cg(0,t.h(0,"aPosition"),n,o.b1(),5126,!1,0,0)
y=H.r(v.cK(),"$isa",[P.E],"$asa")
p.y=J.cc(w.a)
u=p.ch.length
if(u<768){p.sar(new Uint8Array(H.c1(y)))
p.Q=5121}else if(u<196608){p.sar(new Uint16Array(H.c1(y)))
p.Q=5123}else{p.sar(new Uint32Array(H.c1(y)))
p.Q=5125}J.bM(w.a,q)
y=p.y
u=p.cx
J.ca(w.a,34963,y)
J.cY(w.a,34963,u,35048)
G.jJ(v,p)
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
d=new A.bV(null,null,y,new T.bx(j),i,h,new T.z(g),new T.z(f),new T.z(e),new T.z(new Float32Array(3)),"wrapper",!1,!0)
C.a.l(y,new A.bV(new G.hU(s,"mat",!1,!0),p,w,new T.bx(v),u,t,new T.z(q),new T.z(m),new T.z(l),new T.z(k),"meshdata:../asset/leeperrysmith/LeePerrySmith.js",!1,!0))
y=new T.z(new Float32Array(3))
y.a2(100,0,0)
d.bT(y)
C.a.l(x.f,d)
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.bv.prototype
if(a==null)return J.hB.prototype
if(typeof a=="boolean")return J.hA.prototype
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
if(!(a instanceof P.b))return J.bf.prototype
return a}
J.l5=function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bf.prototype
return a}
J.ev=function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bf.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.b)return a
return J.c7(a)}
J.c6=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bf.prototype
return a}
J.aO=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).C(a,b)}
J.ad=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.eu(a).T(a,b)}
J.b1=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.li(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.T(a).h(a,b)}
J.eZ=function(a,b,c){return J.bG(a).i(a,b,c)}
J.cV=function(a,b){return J.ev(a).am(a,b)}
J.bL=function(a,b){return J.m(a).dg(a,b)}
J.f_=function(a,b,c,d){return J.m(a).dh(a,b,c,d)}
J.f0=function(a,b,c){return J.m(a).di(a,b,c)}
J.cW=function(a,b){return J.m(a).bp(a,b)}
J.f1=function(a,b,c,d){return J.m(a).bq(a,b,c,d)}
J.cX=function(a,b,c){return J.m(a).bs(a,b,c)}
J.f2=function(a,b){return J.m(a).dw(a,b)}
J.ca=function(a,b,c){return J.m(a).bt(a,b,c)}
J.f3=function(a,b,c){return J.m(a).bv(a,b,c)}
J.bl=function(a,b,c){return J.m(a).bw(a,b,c)}
J.bM=function(a,b){return J.m(a).dB(a,b)}
J.f4=function(a,b){return J.m(a).bx(a,b)}
J.f5=function(a,b,c){return J.m(a).by(a,b,c)}
J.cY=function(a,b,c,d){return J.m(a).bz(a,b,c,d)}
J.f6=function(a,b){return J.bG(a).bA(a,b)}
J.f7=function(a,b,c,d,e){return J.m(a).bB(a,b,c,d,e)}
J.f8=function(a,b){return J.l5(a).L(a,b)}
J.cb=function(a,b,c){return J.T(a).dH(a,b,c)}
J.cc=function(a){return J.m(a).bD(a)}
J.f9=function(a){return J.m(a).bE(a)}
J.fa=function(a){return J.m(a).bG(a)}
J.fb=function(a){return J.m(a).dN(a)}
J.fc=function(a,b){return J.m(a).bI(a,b)}
J.cd=function(a,b){return J.m(a).bJ(a,b)}
J.fd=function(a,b,c,d){return J.m(a).bK(a,b,c,d)}
J.fe=function(a,b,c,d,e){return J.m(a).dS(a,b,c,d,e)}
J.ff=function(a,b,c,d,e){return J.m(a).bL(a,b,c,d,e)}
J.fg=function(a,b,c,d,e,f){return J.m(a).dT(a,b,c,d,e,f)}
J.fh=function(a,b){return J.bG(a).q(a,b)}
J.bm=function(a,b){return J.m(a).bM(a,b)}
J.fi=function(a,b){return J.m(a).bN(a,b)}
J.fj=function(a){return J.m(a).dU(a)}
J.fk=function(a,b){return J.m(a).B(a,b)}
J.fl=function(a,b){return J.m(a).aK(a,b)}
J.fm=function(a){return J.m(a).gdv(a)}
J.at=function(a){return J.A(a).gv(a)}
J.bN=function(a){return J.bG(a).gw(a)}
J.al=function(a){return J.T(a).gj(a)}
J.fn=function(a){return J.m(a).ge4(a)}
J.fo=function(a){return J.m(a).gec(a)}
J.fp=function(a){return J.c6(a).gei(a)}
J.bO=function(a){return J.c6(a).gag(a)}
J.ce=function(a){return J.c6(a).ga0(a)}
J.cZ=function(a){return J.c6(a).gcj(a)}
J.cf=function(a,b){return J.m(a).W(a,b)}
J.fq=function(a){return J.m(a).ah(a)}
J.fr=function(a){return J.m(a).aL(a)}
J.fs=function(a,b){return J.m(a).aN(a,b)}
J.ft=function(a,b,c){return J.m(a).aO(a,b,c)}
J.d_=function(a,b,c){return J.m(a).aS(a,b,c)}
J.fu=function(a,b){return J.m(a).bS(a,b)}
J.fv=function(a,b,c){return J.m(a).c_(a,b,c)}
J.d0=function(a){return J.m(a).e6(a)}
J.fw=function(a,b,c,d){return J.m(a).aW(a,b,c,d)}
J.fx=function(a,b,c,d,e,f,g){return J.m(a).c2(a,b,c,d,e,f,g)}
J.bP=function(a,b,c,d){return J.m(a).c3(a,b,c,d)}
J.aP=function(a){return J.eu(a).ed(a)}
J.fy=function(a){return J.ev(a).ee(a)}
J.bn=function(a){return J.A(a).k(a)}
J.fz=function(a,b,c,d){return J.m(a).eg(a,b,c,d)}
J.fA=function(a,b,c){return J.m(a).c5(a,b,c)}
J.fB=function(a,b,c){return J.m(a).c6(a,b,c)}
J.cg=function(a,b,c){return J.m(a).c7(a,b,c)}
J.fC=function(a,b,c){return J.m(a).c8(a,b,c)}
J.d1=function(a,b,c){return J.m(a).c9(a,b,c)}
J.d2=function(a,b,c){return J.m(a).ca(a,b,c)}
J.d3=function(a,b,c){return J.m(a).cb(a,b,c)}
J.d4=function(a,b,c,d){return J.m(a).cc(a,b,c,d)}
J.d5=function(a,b,c,d){return J.m(a).cd(a,b,c,d)}
J.fD=function(a,b){return J.m(a).ce(a,b)}
J.fE=function(a,b,c){return J.m(a).eh(a,b,c)}
J.fF=function(a,b,c,d,e,f,g){return J.m(a).cf(a,b,c,d,e,f,g)}
J.fG=function(a,b,c,d,e){return J.m(a).ci(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bQ.prototype
C.J=W.bo.prototype
C.x=W.fW.prototype
C.q=W.h3.prototype
C.K=W.h4.prototype
C.L=W.hn.prototype
C.r=W.ho.prototype
C.y=W.hp.prototype
C.M=J.h.prototype
C.a=J.bt.prototype
C.z=J.dx.prototype
C.b=J.dy.prototype
C.m=J.bu.prototype
C.i=J.bv.prototype
C.T=J.bw.prototype
C.f=H.i4.prototype
C.n=H.i6.prototype
C.v=W.i7.prototype
C.C=J.ie.prototype
C.D=W.iq.prototype
C.I=W.iT.prototype
C.w=J.bf.prototype
C.af=W.aS.prototype
C.ag=W.j4.prototype
C.e=new P.k6()
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
C.U=new P.hD(null,null)
C.V=new P.hE(null)
C.W=H.k(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.k(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Z=H.k(I.aM([]),[P.B])
C.Y=H.k(I.aM([]),[P.d])
C.t=H.k(I.aM(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.k(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
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
$.b2=null
$.d9=null
$.cG=!1
$.ex=null
$.eo=null
$.eC=null
$.c5=null
$.c8=null
$.cO=null
$.aV=null
$.bg=null
$.bh=null
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
I.$lazy(y,x,w)}})(["lG","eG",function(){return H.ew("_$dart_dartClosure")},"mg","cS",function(){return H.ew("_$dart_js")},"n1","eI",function(){return H.ag(H.bY({
toString:function(){return"$receiver$"}}))},"n2","eJ",function(){return H.ag(H.bY({$method$:null,
toString:function(){return"$receiver$"}}))},"n3","eK",function(){return H.ag(H.bY(null))},"n4","eL",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"n7","eO",function(){return H.ag(H.bY(void 0))},"n8","eP",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"n6","eN",function(){return H.ag(H.dR(null))},"n5","eM",function(){return H.ag(function(){try{null.$method$}catch(z){return z.message}}())},"na","eR",function(){return H.ag(H.dR(void 0))},"n9","eQ",function(){return H.ag(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nj","cT",function(){return P.ja()},"nz","bk",function(){return[]},"lD","eF",function(){return{}},"nq","eS",function(){return P.cw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"nr","cU",function(){return P.a4(P.d,P.br)},"mP","eH",function(){return new G.dQ(1281,0,4294967295)},"lz","eE",function(){return new G.dP(1281,1281,1281)},"nx","ac",function(){return P.dA(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a2,"aPosition",C.E,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.a0,"vCenter",C.F,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.c,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3],P.d,G.F)},"nI","eY",function(){var z,y
z=G.dJ("LightBlinnPhongFancyV")
y=[P.d]
z.cD(H.k(["aPosition","aNormal","aTexUV"],y))
z.aZ(H.k(["vPosition","vNormal","vTexUV"],y))
z.a5(H.k(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"],y))
z.cQ(H.k(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"],y))
return z},"nG","eX",function(){var z,y
z=G.dJ("LightBlinnPhongFancyF")
y=[P.d]
z.aZ(H.k(["vPosition","vNormal","vTexUV"],y))
z.a5(H.k(["uLightDescs","uLightTypes","uShininess"],y))
z.a5(H.k(["uEyePosition","uColor"],y))
z.a5(H.k(["uBumpScale","uBumpMap"],y))
z.b2(H.k(["void main() {\n   vec3 normal = normalize(vNormal);\n   vec2 uv = dHdxy_fwd(vTexUV, uBumpScale, uBumpMap);\n   normal = perturbNormalArb(vPosition, normal, uv);\n   ColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    normal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n    oFragColor.rgb = acc.diffuse \n                    + acc.specular\n                    + uColor;\n   oFragColor.a = 1.0;\n}\n"],y),H.k(["vec2 dHdxy_fwd(vec2 uv, float scale, sampler2D map) {\n    float H = texture(map, uv).x;\n    float dHx = texture(map, uv + dFdx(uv)).x - H;\n    float dHy = texture(map, uv + dFdy(uv)).x - H;\n    return vec2(dHx, dHy) * scale;\n}\n\n\nvec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {\n     vec3 vSigmaX = dFdx(surf_pos);\n     vec3 vSigmaY = dFdy(surf_pos);\n        \n     vec3 vN = surf_norm;\n     vec3 R1 = cross(vSigmaY, vN);\n     vec3 R2 = cross(vN, vSigmaX);\n     float fDet = dot(vSigmaX, R1);\n     // *= gl_FrontFacing ? 1.0 : -1.0\n     fDet *= (float(gl_FrontFacing) * 2.0 - 1.0);\n     vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);\n     return normalize(abs(fDet) * surf_norm - vGrad);\n}\n","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nB","eU",function(){return T.dU(0.333,0.157,0.067)},"nF","eW",function(){return T.dU(-1,-1,0)},"nA","eT",function(){return T.dV(0.3)},"nC","eV",function(){return T.dV(0.133)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.W]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.B,args:[,,]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.S,args:[W.af]},{func:1,ret:P.S,args:[P.d]},{func:1,ret:P.S,args:[W.V,P.d,P.d,W.bD]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.N]},{func:1,ret:P.B,args:[W.b6]},{func:1,args:[P.d]},{func:1,ret:P.B,args:[,P.Q]},{func:1,ret:P.B,args:[,],opt:[P.Q]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:P.S,args:[W.v]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.B,args:[P.H]},{func:1,args:[W.N]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:P.B,args:[W.by]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[W.aS]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.B,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
if(x==y)H.ls(d||a)
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
Isolate.aM=a.aM
Isolate.bi=a.bi
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
