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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ca(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cc=function(){}
var dart=[["","",,H,{"^":"",kE:{"^":"c;a"}}],["","",,J,{"^":"",
cf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bh:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ce==null){H.jy()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dc("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.ci()]
if(v!=null)return v
v=H.jD(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.ci(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
f:{"^":"c;",
E:function(a,b){return a===b},
gw:function(a){return H.aU(a)},
k:["bK",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fr:{"^":"f;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isJ:1},
cO:{"^":"f;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isH:1},
bW:{"^":"f;",
gw:function(a){return 0},
k:["bM",function(a){return String(a)}]},
fT:{"^":"bW;"},
ba:{"^":"bW;"},
aP:{"^":"bW;",
k:function(a){var z=a[$.dV()]
if(z==null)return this.bM(a)
return"JavaScript function for "+H.e(J.b4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isb7:1},
aM:{"^":"f;$ti",
n:function(a,b){H.v(b,H.p(a,0))
if(!!a.fixed$length)H.L(P.w("add"))
a.push(b)},
F:function(a,b){var z
H.x(b,"$isi",[H.p(a,0)],"$asi")
if(!!a.fixed$length)H.L(P.w("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.j(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
bD:function(a,b,c,d,e){var z,y,x
z=H.p(a,0)
H.x(d,"$isi",[z],"$asi")
if(!!a.immutable$list)H.L(P.w("setRange"))
P.h3(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
H.x(d,"$isb",[z],"$asb")
z=J.aA(d)
if(e+y>z.gi(d))throw H.a(H.fo())
if(e<b)for(x=y-1;x>=0;--x)a[b+x]=z.h(d,e+x)
else for(x=0;x<y;++x)a[b+x]=z.h(d,e+x)},
X:function(a,b,c,d){return this.bD(a,b,c,d,0)},
b0:function(a,b){var z,y
H.k(b,{func:1,ret:P.J,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.ag(a))}return!1},
bE:function(a,b){if(!!a.immutable$list)H.L(P.w("sort"))
H.hh(a,J.j6(),H.p(a,0))},
az:function(a){return this.bE(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aG(a[z],b))return!0
return!1},
k:function(a){return P.bU(a,"[","]")},
gB:function(a){return new J.eM(a,a.length,0,[H.p(a,0)])},
gw:function(a){return H.aU(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.L(P.w("set length"))
if(b<0)throw H.a(P.aW(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.a(H.bf(a,b))
return a[b]},
j:function(a,b,c){H.v(c,H.p(a,0))
if(!!a.immutable$list)H.L(P.w("indexed set"))
if(b>=a.length||b<0)throw H.a(H.bf(a,b))
a[b]=c},
t:function(a,b){var z,y
z=[H.p(a,0)]
H.x(b,"$isb",z,"$asb")
y=C.b.t(a.length,b.gi(b))
z=H.q([],z)
this.si(z,y)
this.X(z,0,a.length,a)
this.X(z,a.length,y,b)
return z},
$isi:1,
$isb:1,
p:{
fq:function(a,b){return J.bV(H.q(a,[b]))},
bV:function(a){H.bF(a)
a.fixed$length=Array
return a},
kC:[function(a,b){return J.ei(H.dO(a,"$isO"),H.dO(b,"$isO"))},"$2","j6",8,0,25]}},
kD:{"^":"aM;$ti"},
eM:{"^":"c;a,b,c,0d,$ti",
saP:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.a3(z))
x=this.c
if(x>=y){this.saP(null)
return!1}this.saP(z[x]);++this.c
return!0},
$isaL:1},
aN:{"^":"f;",
S:function(a,b){var z
H.cg(b)
if(typeof b!=="number")throw H.a(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gal(b)
if(this.gal(a)===z)return 0
if(this.gal(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gal:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.a(H.ay(b))
return a+b},
bO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aY(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.aY(a,b)},
aY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.w("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var z
if(a>0)z=this.cp(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cp:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.ay(b))
return a>b},
$isO:1,
$asO:function(){return[P.E]},
$isaz:1,
$isE:1},
cN:{"^":"aN;",$isD:1},
fs:{"^":"aN;"},
aO:{"^":"f;",
Z:function(a,b){if(b>=a.length)throw H.a(H.bf(a,b))
return a.charCodeAt(b)},
t:function(a,b){H.u(b)
if(typeof b!=="string")throw H.a(P.cx(b,null,null))
return a+b},
bG:function(a,b,c){var z
if(c>a.length)throw H.a(P.aW(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bF:function(a,b){return this.bG(a,b,0)},
bJ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.a(P.bt(b,null,null))
if(b>c)throw H.a(P.bt(b,null,null))
if(c>a.length)throw H.a(P.bt(c,null,null))
return a.substring(b,c)},
bI:function(a,b){return this.bJ(a,b,null)},
cZ:function(a){return a.toLowerCase()},
cD:function(a,b,c){if(c>a.length)throw H.a(P.aW(c,0,a.length,null,null))
return H.jJ(a,b,c)},
S:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.a(H.ay(b))
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
gi:function(a){return a.length},
$isO:1,
$asO:function(){return[P.d]},
$isfS:1,
$isd:1}}],["","",,H,{"^":"",
fn:function(){return new P.bu("No element")},
fp:function(){return new P.bu("Too many elements")},
fo:function(){return new P.bu("Too few elements")},
hh:function(a,b,c){H.x(a,"$isb",[c],"$asb")
H.k(b,{func:1,ret:P.D,args:[c,c]})
H.b9(a,0,J.ae(a)-1,b,c)},
b9:function(a,b,c,d,e){H.x(a,"$isb",[e],"$asb")
H.k(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.hg(a,b,c,d,e)
else H.hf(a,b,c,d,e)},
hg:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isb",[e],"$asb")
H.k(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aA(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.X(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hf:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isb",[a2],"$asb")
H.k(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.b.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.W(b+a0,2)
v=w-z
u=w+z
t=J.aA(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.X(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.X(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.X(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.X(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.X(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.X(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.X(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.X(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.X(a1.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aG(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.M()
if(i<0){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.I()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.j(a,k,t.h(a,m))
g=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=h
m=g
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.M()
if(e<0){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.I()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.I()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.M()
h=l-1
if(i<0){t.j(a,k,t.h(a,m))
g=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=g}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.j(a,b,t.h(a,c))
t.j(a,c,r)
c=l+1
t.j(a,a0,t.h(a,c))
t.j(a,c,p)
H.b9(a,b,m-2,a1,a2)
H.b9(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aG(a1.$2(t.h(a,m),r),0);)++m
for(;J.aG(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.M()
h=l-1
if(i<0){t.j(a,k,t.h(a,m))
g=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=g}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=h
break}}H.b9(a,m,l,a1,a2)}else H.b9(a,m,l,a1,a2)},
cH:{"^":"i;"},
bs:{"^":"cH;$ti",
gB:function(a){return new H.cS(this,this.gi(this),0,[H.cd(this,"bs",0)])},
an:function(a,b){return this.bL(0,H.k(b,{func:1,ret:P.J,args:[H.cd(this,"bs",0)]}))}},
cS:{"^":"c;a,b,c,0d,$ti",
saH:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aA(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.ag(z))
w=this.c
if(w>=x){this.saH(null)
return!1}this.saH(y.q(z,w));++this.c
return!0},
$isaL:1},
fD:{"^":"bs;a,b,$ti",
gi:function(a){return J.ae(this.a)},
q:function(a,b){return this.b.$1(J.eq(this.a,b))},
$asbs:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dd:{"^":"i;a,b,$ti",
gB:function(a){return new H.hz(J.bm(this.a),this.b,this.$ti)}},
hz:{"^":"aL;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
br:{"^":"c;$ti"}}],["","",,H,{"^":"",
aF:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jq:function(a){return init.types[H.K(a)]},
jB:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$ist},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b4(a)
if(typeof z!=="string")throw H.a(H.ay(a))
return z},
aU:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){return H.fU(a)+H.c8(H.a5(a),0,null)},
fU:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.J||!!z.$isba){u=C.x(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aF(w.length>1&&C.h.Z(w,0)===36?C.h.bI(w,1):w)},
am:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h0:function(a){var z=H.am(a).getFullYear()+0
return z},
fZ:function(a){var z=H.am(a).getMonth()+1
return z},
fV:function(a){var z=H.am(a).getDate()+0
return z},
fW:function(a){var z=H.am(a).getHours()+0
return z},
fY:function(a){var z=H.am(a).getMinutes()+0
return z},
h_:function(a){var z=H.am(a).getSeconds()+0
return z},
fX:function(a){var z=H.am(a).getMilliseconds()+0
return z},
bD:function(a){throw H.a(H.ay(a))},
j:function(a,b){if(a==null)J.ae(a)
throw H.a(H.bf(a,b))},
bf:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,"index",null)
z=H.K(J.ae(a))
if(!(b<0)){if(typeof z!=="number")return H.bD(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.bt(b,"index",null)},
ay:function(a){return new P.af(!0,a,null,null)},
dG:function(a){if(typeof a!=="number")throw H.a(H.ay(a))
return a},
a:function(a){var z
if(a==null)a=new P.cY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dR})
z.name=""}else z.toString=H.dR
return z},
dR:function(){return J.b4(this.dartException)},
L:function(a){throw H.a(a)},
a3:function(a){throw H.a(P.ag(a))},
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.aW(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bX(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cX(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dX()
u=$.dY()
t=$.dZ()
s=$.e_()
r=$.e2()
q=$.e3()
p=$.e1()
$.e0()
o=$.e5()
n=$.e4()
m=v.G(y)
if(m!=null)return z.$1(H.bX(H.u(y),m))
else{m=u.G(y)
if(m!=null){m.method="call"
return z.$1(H.bX(H.u(y),m))}else{m=t.G(y)
if(m==null){m=s.G(y)
if(m==null){m=r.G(y)
if(m==null){m=q.G(y)
if(m==null){m=p.G(y)
if(m==null){m=s.G(y)
if(m==null){m=o.G(y)
if(m==null){m=n.G(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cX(H.u(y),m))}}return z.$1(new H.hv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.af(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d2()
return a},
b2:function(a){var z
if(a==null)return new H.ds(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ds(a)},
jk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
jA:function(a,b,c,d,e,f){H.h(a,"$isb7")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cK("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.K(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jA)
a.$identity=z
return z},
eX:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isb){z.$reflectionInfo=d
x=H.h5(z).r}else x=d
w=e?Object.create(new H.hi().constructor.prototype):Object.create(new H.bO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.Y
if(typeof u!=="number")return u.t()
$.Y=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cB(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jq,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cA:H.bP
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.a("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cB(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eU:function(a,b,c,d){var z=H.bP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cB:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eW(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eU(y,!w,z,b)
if(y===0){w=$.Y
if(typeof w!=="number")return w.t()
$.Y=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aI
if(v==null){v=H.bo("self")
$.aI=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Y
if(typeof w!=="number")return w.t()
$.Y=w+1
t+=w
w="return function("+t+"){return this."
v=$.aI
if(v==null){v=H.bo("self")
$.aI=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
eV:function(a,b,c,d){var z,y
z=H.bP
y=H.cA
switch(b?-1:a){case 0:throw H.a(H.ha("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eW:function(a,b){var z,y,x,w,v,u,t,s
z=$.aI
if(z==null){z=H.bo("self")
$.aI=z}y=$.cz
if(y==null){y=H.bo("receiver")
$.cz=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eV(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.Y
if(typeof y!=="number")return y.t()
$.Y=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.Y
if(typeof y!=="number")return y.t()
$.Y=y+1
return new Function(z+y+"}")()},
ca:function(a,b,c,d,e,f,g){return H.eX(a,b,H.K(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.U(a,"String"))},
bB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.U(a,"double"))},
cg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.U(a,"num"))},
bz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.U(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.U(a,"int"))},
ch:function(a,b){throw H.a(H.U(a,H.aF(H.u(b).substring(3))))},
jH:function(a,b){throw H.a(H.eS(a,H.aF(H.u(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.ch(a,b)},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.jH(a,b)},
dO:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.ch(a,b)},
bF:function(a){if(a==null)return a
if(!!J.C(a).$isb)return a
throw H.a(H.U(a,"List<dynamic>"))},
jC:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isb)return a
if(z[b])return a
H.ch(a,b)},
cb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.K(z)]
else return a.$S()}return},
bg:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cb(J.C(a))
if(z==null)return!1
return H.dx(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.c5)return a
$.c5=!0
try{if(H.bg(a,b))return a
z=H.bj(b)
y=H.U(a,z)
throw H.a(y)}finally{$.c5=!1}},
bC:function(a,b){if(a!=null&&!H.c9(a,b))H.L(H.U(a,H.bj(b)))
return a},
dB:function(a){var z,y
z=J.C(a)
if(!!z.$isn){y=H.cb(z)
if(y!=null)return H.bj(y)
return"Closure"}return H.aV(a)},
jK:function(a){throw H.a(new P.f1(H.u(a)))},
dJ:function(a){return init.getIsolateTag(a)},
q:function(a,b){a.$ti=b
return a},
a5:function(a){if(a==null)return
return a.$ti},
m6:function(a,b,c){return H.aE(a["$as"+H.e(c)],H.a5(b))},
aB:function(a,b,c,d){var z
H.u(c)
H.K(d)
z=H.aE(a["$as"+H.e(c)],H.a5(b))
return z==null?null:z[d]},
cd:function(a,b,c){var z
H.u(b)
H.K(c)
z=H.aE(a["$as"+H.e(b)],H.a5(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.K(b)
z=H.a5(a)
return z==null?null:z[b]},
bj:function(a){return H.ac(a,null)},
ac:function(a,b){var z,y
H.x(b,"$isb",[P.d],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aF(a[0].builtin$cls)+H.c8(a,1,b)
if(typeof a=="function")return H.aF(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.j5(a,b)
if('futureOr' in a)return"FutureOr<"+H.ac("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
j5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.x(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.q([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.n(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.h.t(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.ac(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ac(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ac(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ac(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jj(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.ac(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
c8:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isb",[P.d],"$asb")
if(a==null)return""
z=new P.c1("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ac(u,c)}return"<"+z.k(0)+">"},
jp:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isn){y=H.cb(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.a5(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
be:function(a,b,c,d){var z,y
H.u(b)
H.bF(c)
H.u(d)
if(a==null)return!1
z=H.a5(a)
y=J.C(a)
if(y[b]==null)return!1
return H.dE(H.aE(y[d],z),null,c,null)},
x:function(a,b,c,d){H.u(b)
H.bF(c)
H.u(d)
if(a==null)return a
if(H.be(a,b,c,d))return a
throw H.a(H.U(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.c8(c,0,null),init.mangledGlobalNames)))},
dE:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.R(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.R(a[y],b,c[y],d))return!1
return!0},
m2:function(a,b,c){return a.apply(b,H.aE(J.C(b)["$as"+H.e(c)],H.a5(b)))},
dM:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="H"||a===-1||a===-2||H.dM(z)}return!1},
c9:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="H"||b===-1||b===-2||H.dM(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.c9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bg(a,b)}z=J.C(a).constructor
y=H.a5(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.R(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.c9(a,b))throw H.a(H.U(a,H.bj(b)))
return a},
R:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.R(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.dx(a,b,c,d)
if('func' in a)return c.builtin$cls==="b7"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.R("type" in a?a.type:null,b,x,d)
else if(H.R(a,b,x,d))return!0
else{if(!('$is'+"aK" in y.prototype))return!1
w=y.prototype["$as"+"aK"]
v=H.aE(w,z?a.slice(1):null)
return H.R(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dE(H.aE(r,z),b,u,d)},
dx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.R(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.R(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.R(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.R(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jG(m,b,l,d)},
jG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.R(c[w],d,a[w],b))return!1}return!0},
m3:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
jD:function(a){var z,y,x,w,v,u
z=H.u($.dK.$1(a))
y=$.bA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.dD.$2(a,z))
if(z!=null){y=$.bA[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bG(x)
$.bA[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bE[z]=x
return x}if(v==="-"){u=H.bG(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dP(a,x)
if(v==="*")throw H.a(P.dc(z))
if(init.leafTags[z]===true){u=H.bG(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dP(a,x)},
dP:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cf(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bG:function(a){return J.cf(a,!1,null,!!a.$ist)},
jF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bG(z)
else return J.cf(z,c,null,null)},
jy:function(){if(!0===$.ce)return
$.ce=!0
H.jz()},
jz:function(){var z,y,x,w,v,u,t,s
$.bA=Object.create(null)
$.bE=Object.create(null)
H.ju()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dQ.$1(v)
if(u!=null){t=H.jF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ju:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.ax(C.K,H.ax(C.P,H.ax(C.w,H.ax(C.w,H.ax(C.O,H.ax(C.L,H.ax(C.M(C.x),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dK=new H.jv(v)
$.dD=new H.jw(u)
$.dQ=new H.jx(t)},
ax:function(a,b){return a(b)||b},
jJ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h4:{"^":"c;a,b,c,d,e,f,r,0x",p:{
h5:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bV(z)
y=z[0]
x=z[1]
return new H.h4(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hr:{"^":"c;a,b,c,d,e,f",
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
a0:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.q([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
d9:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fR:{"^":"I;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cX:function(a,b){return new H.fR(a,b==null?null:b.method)}}},
ft:{"^":"I;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
bX:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ft(a,y,z?null:b.receiver)}}},
hv:{"^":"I;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jL:{"^":"n:4;a",
$1:function(a){if(!!J.C(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ds:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isT:1},
n:{"^":"c;",
k:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gbz:function(){return this},
$isb7:1,
gbz:function(){return this}},
d4:{"^":"n;"},
hi:{"^":"d4;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aF(z)+"'"}},
bO:{"^":"d4;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aU(this.a)
else y=typeof z!=="object"?J.aH(z):H.aU(z)
return(y^H.aU(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
p:{
bP:function(a){return a.a},
cA:function(a){return a.c},
bo:function(a){var z,y,x,w,v
z=new H.bO("self","target","receiver","name")
y=J.bV(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hs:{"^":"I;a",
k:function(a){return this.a},
p:{
U:function(a,b){return new H.hs("TypeError: "+P.bq(a)+": type '"+H.dB(a)+"' is not a subtype of type '"+b+"'")}}},
eR:{"^":"I;a",
k:function(a){return this.a},
p:{
eS:function(a,b){return new H.eR("CastError: "+P.bq(a)+": type '"+H.dB(a)+"' is not a subtype of type '"+b+"'")}}},
h9:{"^":"I;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
ha:function(a){return new H.h9(a)}}},
da:{"^":"c;a,0b,0c,0d",
ga1:function(){var z=this.b
if(z==null){z=H.bj(this.a)
this.b=z}return z},
k:function(a){return this.ga1()},
gw:function(a){var z=this.d
if(z==null){z=C.h.gw(this.ga1())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.da&&this.ga1()===b.ga1()}},
cP:{"^":"cT;a,0b,0c,0d,0e,0f,r,$ti",
gi:function(a){return this.a},
gD:function(a){return new H.aS(this,[H.p(this,0)])},
aj:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c8(z,b)}else{y=this.cN(b)
return y}},
cN:function(a){var z=this.d
if(z==null)return!1
return this.ak(this.ad(z,J.aH(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a_(w,b)
x=y==null?null:y.b
return x}else return this.cO(b)},
cO:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ad(z,J.aH(a)&0x3ffffff)
x=this.ak(y,a)
if(x<0)return
return y[x].b},
j:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.p(this,0))
H.v(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ae()
this.b=z}this.aI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ae()
this.c=y}this.aI(y,b,c)}else{x=this.d
if(x==null){x=this.ae()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.ad(x,w)
if(v==null)this.ah(x,w,[this.a7(b,c)])
else{u=this.ak(v,b)
if(u>=0)v[u].b=c
else v.push(this.a7(b,c))}}},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.ag(this))
z=z.c}},
aI:function(a,b,c){var z
H.v(b,H.p(this,0))
H.v(c,H.p(this,1))
z=this.a_(a,b)
if(z==null)this.ah(a,b,this.a7(b,c))
else z.b=c},
aT:function(){this.r=this.r+1&67108863},
a7:function(a,b){var z,y
z=new H.fy(H.v(a,H.p(this,0)),H.v(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aT()
return z},
ak:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
k:function(a){return P.cU(this)},
a_:function(a,b){return a[b]},
ad:function(a,b){return a[b]},
ah:function(a,b,c){a[b]=c},
c9:function(a,b){delete a[b]},
c8:function(a,b){return this.a_(a,b)!=null},
ae:function(){var z=Object.create(null)
this.ah(z,"<non-identifier-key>",z)
this.c9(z,"<non-identifier-key>")
return z},
$iscQ:1},
fy:{"^":"c;a,b,0c,0d"},
aS:{"^":"cH;a,$ti",
gi:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.fz(z,z.r,this.$ti)
y.c=z.e
return y}},
fz:{"^":"c;a,b,0c,0d,$ti",
saJ:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.ag(z))
else{z=this.c
if(z==null){this.saJ(null)
return!1}else{this.saJ(z.a)
this.c=this.c.c
return!0}}},
$isaL:1},
jv:{"^":"n:4;a",
$1:function(a){return this.a(a)}},
jw:{"^":"n:12;a",
$2:function(a,b){return this.a(a,b)}},
jx:{"^":"n:13;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
jj:function(a){return J.fq(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
a2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.bf(b,a))},
fL:{"^":"f;","%":"DataView;ArrayBufferView;c_|dl|dm|cV|dn|dp|ab"},
c_:{"^":"fL;",
gi:function(a){return a.length},
$ist:1,
$ast:I.cc},
cV:{"^":"dm;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
j:function(a,b,c){H.bB(c)
H.a2(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.az]},
$asm:function(){return[P.az]},
$isi:1,
$asi:function(){return[P.az]},
$isb:1,
$asb:function(){return[P.az]},
"%":"Float64Array"},
ab:{"^":"dp;",
j:function(a,b,c){H.K(c)
H.a2(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.D]},
$asm:function(){return[P.D]},
$isi:1,
$asi:function(){return[P.D]},
$isb:1,
$asb:function(){return[P.D]}},
fK:{"^":"cV;",$isb6:1,"%":"Float32Array"},
kO:{"^":"ab;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kP:{"^":"ab;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
$iskB:1,
"%":"Int32Array"},
kQ:{"^":"ab;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kR:{"^":"ab;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kS:{"^":"ab;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kT:{"^":"ab;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kU:{"^":"ab;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dl:{"^":"c_+m;"},
dm:{"^":"dl+br;"},
dn:{"^":"c_+m;"},
dp:{"^":"dn+br;"}}],["","",,P,{"^":"",
hD:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jd()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.hF(z),1)).observe(y,{childList:true})
return new P.hE(z,y,x)}else if(self.setImmediate!=null)return P.je()
return P.jf()},
lM:[function(a){self.scheduleImmediate(H.b1(new P.hG(H.k(a,{func:1,ret:-1})),0))},"$1","jd",4,0,3],
lN:[function(a){self.setImmediate(H.b1(new P.hH(H.k(a,{func:1,ret:-1})),0))},"$1","je",4,0,3],
lO:[function(a){H.k(a,{func:1,ret:-1})
P.iO(0,a)},"$1","jf",4,0,3],
j9:function(a,b){if(H.bg(a,{func:1,args:[P.c,P.T]}))return H.k(a,{func:1,ret:null,args:[P.c,P.T]})
if(H.bg(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.a(P.cx(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
j8:function(){var z,y
for(;z=$.aw,z!=null;){$.b0=null
y=z.b
$.aw=y
if(y==null)$.b_=null
z.a.$0()}},
m0:[function(){$.c6=!0
try{P.j8()}finally{$.b0=null
$.c6=!1
if($.aw!=null)$.cj().$1(P.dF())}},"$0","dF",0,0,1],
dA:function(a){var z=new P.de(H.k(a,{func:1,ret:-1}))
if($.aw==null){$.b_=z
$.aw=z
if(!$.c6)$.cj().$1(P.dF())}else{$.b_.b=z
$.b_=z}},
jc:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aw
if(z==null){P.dA(a)
$.b0=$.b_
return}y=new P.de(a)
x=$.b0
if(x==null){y.b=z
$.b0=y
$.aw=y}else{y.b=x.b
x.b=y
$.b0=y
if(y.b==null)$.b_=y}},
jI:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.B
if(C.e===y){P.by(null,null,C.e,a)
return}y.toString
P.by(null,null,y,H.k(y.b3(a),z))},
bx:function(a,b,c,d,e){var z={}
z.a=d
P.jc(new P.ja(z,e))},
dy:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.B
if(y===c)return d.$0()
$.B=c
z=y
try{y=d.$0()
return y}finally{$.B=z}},
dz:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.B
if(y===c)return d.$1(e)
$.B=c
z=y
try{y=d.$1(e)
return y}finally{$.B=z}},
jb:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.B
if(y===c)return d.$2(e,f)
$.B=c
z=y
try{y=d.$2(e,f)
return y}finally{$.B=z}},
by:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.b3(d):c.cA(d,-1)
P.dA(d)},
hF:{"^":"n:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hE:{"^":"n:14;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hG:{"^":"n:0;a",
$0:function(){this.a.$0()}},
hH:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iN:{"^":"c;a,0b,c",
c3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.iP(this,b),0),a)
else throw H.a(P.w("`setTimeout()` not found."))},
p:{
iO:function(a,b){var z=new P.iN(!0,0)
z.c3(a,b)
return z}}},
iP:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hK:{"^":"c;$ti"},
iI:{"^":"hK;a,$ti"},
av:{"^":"c;0a,b,c,d,e,$ti",
cQ:function(a){if(this.c!==6)return!0
return this.b.b.am(H.k(this.d,{func:1,ret:P.J,args:[P.c]}),a.a,P.J,P.c)},
cM:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bg(z,{func:1,args:[P.c,P.T]}))return H.bC(w.cV(z,a.a,a.b,null,y,P.T),x)
else return H.bC(w.am(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
a1:{"^":"c;aX:a<,b,0cm:c<,$ti",
bo:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.B
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.j9(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a1(0,$.B,[c])
w=b==null?1:3
this.aL(new P.av(x,w,a,b,[z,c]))
return x},
bn:function(a,b){return this.bo(a,null,b)},
aL:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isav")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa1")
z=y.a
if(z<4){y.aL(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.by(null,null,z,H.k(new P.hW(this,a),{func:1,ret:-1}))}},
aU:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isav")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa1")
y=u.a
if(y<4){u.aU(a)
return}this.a=y
this.c=u.c}z.a=this.a0(a)
y=this.b
y.toString
P.by(null,null,y,H.k(new P.i0(z,this),{func:1,ret:-1}))}},
ag:function(){var z=H.h(this.c,"$isav")
this.c=null
return this.a0(z)},
a0:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a9:function(a){var z,y,x
z=H.p(this,0)
H.bC(a,{futureOr:1,type:z})
y=this.$ti
if(H.be(a,"$isaK",y,"$asaK"))if(H.be(a,"$isa1",y,null))P.dh(a,this)
else P.hX(a,this)
else{x=this.ag()
H.v(a,z)
this.a=4
this.c=a
P.aZ(this,x)}},
aN:function(a,b){var z
H.h(b,"$isT")
z=this.ag()
this.a=8
this.c=new P.Q(a,b)
P.aZ(this,z)},
$isaK:1,
p:{
hX:function(a,b){var z,y,x
b.a=1
try{a.bo(new P.hY(b),new P.hZ(b),null)}catch(x){z=H.W(x)
y=H.b2(x)
P.jI(new P.i_(b,z,y))}},
dh:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa1")
if(z>=4){y=b.ag()
b.a=a.a
b.c=a.c
P.aZ(b,y)}else{y=H.h(b.c,"$isav")
b.a=2
b.c=a
a.aU(y)}},
aZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isQ")
y=y.b
u=v.a
t=v.b
y.toString
P.bx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aZ(z.a,b)}y=z.a
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
if(p){H.h(r,"$isQ")
y=y.b
u=r.a
t=r.b
y.toString
P.bx(null,null,y,u,t)
return}o=$.B
if(o!=q)$.B=q
else o=null
y=b.c
if(y===8)new P.i3(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.i2(x,b,r).$0()}else if((y&2)!==0)new P.i1(z,x,b).$0()
if(o!=null)$.B=o
y=x.b
if(!!J.C(y).$isaK){if(y.a>=4){n=H.h(t.c,"$isav")
t.c=null
b=t.a0(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dh(y,t)
return}}m=b.b
n=H.h(m.c,"$isav")
m.c=null
b=m.a0(n)
y=x.a
u=x.b
if(!y){H.v(u,H.p(m,0))
m.a=4
m.c=u}else{H.h(u,"$isQ")
m.a=8
m.c=u}z.a=m
y=m}}}},
hW:{"^":"n:0;a,b",
$0:function(){P.aZ(this.a,this.b)}},
i0:{"^":"n:0;a,b",
$0:function(){P.aZ(this.b,this.a.a)}},
hY:{"^":"n:5;a",
$1:function(a){var z=this.a
z.a=0
z.a9(a)}},
hZ:{"^":"n:15;a",
$2:function(a,b){H.h(b,"$isT")
this.a.aN(a,b)},
$1:function(a){return this.$2(a,null)}},
i_:{"^":"n:0;a,b,c",
$0:function(){this.a.aN(this.b,this.c)}},
i3:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bm(H.k(w.d,{func:1}),null)}catch(v){y=H.W(v)
x=H.b2(v)
if(this.d){w=H.h(this.a.a.c,"$isQ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isQ")
else u.b=new P.Q(y,x)
u.a=!0
return}if(!!J.C(z).$isaK){if(z instanceof P.a1&&z.gaX()>=4){if(z.gaX()===8){w=this.b
w.b=H.h(z.gcm(),"$isQ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bn(new P.i4(t),null)
w.a=!1}}},
i4:{"^":"n:16;a",
$1:function(a){return this.a}},
i2:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.v(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.am(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.W(t)
y=H.b2(t)
x=this.a
x.b=new P.Q(z,y)
x.a=!0}}},
i1:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isQ")
w=this.c
if(w.cQ(z)&&w.e!=null){v=this.b
v.b=w.cM(z)
v.a=!1}}catch(u){y=H.W(u)
x=H.b2(u)
w=H.h(this.a.a.c,"$isQ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Q(y,x)
s.a=!0}}},
de:{"^":"c;a,0b"},
hk:{"^":"c;$ti",
gi:function(a){var z,y,x,w
z={}
y=new P.a1(0,$.B,[P.D])
z.a=0
x=H.p(this,0)
w=H.k(new P.hm(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hn(z,y),{func:1,ret:-1})
W.c3(this.a,this.b,w,!1,x)
return y}},
hm:{"^":"n;a,b",
$1:function(a){H.v(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.p(this.b,0)]}}},
hn:{"^":"n:0;a,b",
$0:function(){this.b.a9(this.a.a)}},
hl:{"^":"c;"},
Q:{"^":"c;a,b",
k:function(a){return H.e(this.a)},
$isI:1},
iV:{"^":"c;",$islK:1},
ja:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.k(0)
throw x}},
ir:{"^":"iV;",
cW:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.B){a.$0()
return}P.dy(null,null,this,a,-1)}catch(x){z=H.W(x)
y=H.b2(x)
P.bx(null,null,this,z,H.h(y,"$isT"))}},
cX:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.e===$.B){a.$1(b)
return}P.dz(null,null,this,a,b,-1,c)}catch(x){z=H.W(x)
y=H.b2(x)
P.bx(null,null,this,z,H.h(y,"$isT"))}},
cA:function(a,b){return new P.it(this,H.k(a,{func:1,ret:b}),b)},
b3:function(a){return new P.is(this,H.k(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.iu(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
bm:function(a,b){H.k(a,{func:1,ret:b})
if($.B===C.e)return a.$0()
return P.dy(null,null,this,a,b)},
am:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.B===C.e)return a.$1(b)
return P.dz(null,null,this,a,b,c,d)},
cV:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.B===C.e)return a.$2(b,c)
return P.jb(null,null,this,a,b,c,d,e,f)}},
it:{"^":"n;a,b,c",
$0:function(){return this.a.bm(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
is:{"^":"n:1;a,b",
$0:function(){return this.a.cW(this.b)}},
iu:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.cX(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cR:function(a,b,c){H.bF(a)
return H.x(H.jk(a,new H.cP(0,0,[b,c])),"$iscQ",[b,c],"$ascQ")},
a9:function(a,b){return new H.cP(0,0,[a,b])},
aa:function(a,b,c,d){return new P.ib(0,0,[d])},
fm:function(a,b,c){var z,y
if(P.c7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.q([],[P.d])
y=$.b3()
C.a.n(y,a)
try{P.j7(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.d3(b,H.jC(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bU:function(a,b,c){var z,y,x
if(P.c7(a))return b+"..."+c
z=new P.c1(b)
y=$.b3()
C.a.n(y,a)
try{x=z
x.a=P.d3(x.gO(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gO()+c
y=z.gO()
return y.charCodeAt(0)==0?y:y},
c7:function(a){var z,y
for(z=0;y=$.b3(),z<y.length;++z)if(a===y[z])return!0
return!1},
j7:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isb",[P.d],"$asb")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gA(z))
C.a.n(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.u()){if(x<=4){C.a.n(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.u();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.n(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.n(b,q)
C.a.n(b,u)
C.a.n(b,v)},
bY:function(a,b){var z,y,x
z=P.aa(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.a3)(a),++x)z.n(0,H.v(a[x],b))
return z},
cU:function(a){var z,y,x
z={}
if(P.c7(a))return"{...}"
y=new P.c1("")
try{C.a.n($.b3(),a)
x=y
x.a=x.gO()+"{"
z.a=!0
J.et(a,new P.fC(z,y))
z=y
z.a=z.gO()+"}"}finally{z=$.b3()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gO()
return z.charCodeAt(0)==0?z:z},
ib:{"^":"i5;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){return P.dk(this,this.r,H.p(this,0))},
gi:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbd")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbd")!=null}else return this.c7(b)},
c7:function(a){var z=this.d
if(z==null)return!1
return this.ac(this.aQ(z,a),a)>=0},
n:function(a,b){var z,y
H.v(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c4()
this.b=z}return this.aK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c4()
this.c=y}return this.aK(y,b)}else return this.c4(0,b)},
c4:function(a,b){var z,y,x
H.v(b,H.p(this,0))
z=this.d
if(z==null){z=P.c4()
this.d=z}y=this.aO(b)
x=z[y]
if(x==null)z[y]=[this.af(b)]
else{if(this.ac(x,b)>=0)return!1
x.push(this.af(b))}return!0},
cU:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aV(this.c,b)
else return this.cg(0,b)},
cg:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aQ(z,b)
x=this.ac(y,b)
if(x<0)return!1
this.aZ(y.splice(x,1)[0])
return!0},
ai:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.a8()}},
aK:function(a,b){H.v(b,H.p(this,0))
if(H.h(a[b],"$isbd")!=null)return!1
a[b]=this.af(b)
return!0},
aV:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbd")
if(z==null)return!1
this.aZ(z)
delete a[b]
return!0},
a8:function(){this.r=this.r+1&67108863},
af:function(a){var z,y
z=new P.bd(H.v(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.a8()
return z},
aZ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.a8()},
aO:function(a){return J.aH(a)&0x3ffffff},
aQ:function(a,b){return a[this.aO(b)]},
ac:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
p:{
c4:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bd:{"^":"c;a,0b,0c"},
ic:{"^":"c;a,b,0c,0d,$ti",
saM:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.ag(z))
else{z=this.c
if(z==null){this.saM(null)
return!1}else{this.saM(H.v(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaL:1,
p:{
dk:function(a,b,c){var z=new P.ic(a,b,[c])
z.c=a.e
return z}}},
i5:{"^":"hb;"},
fA:{"^":"id;",$isi:1,$isb:1},
m:{"^":"c;$ti",
gB:function(a){return new H.cS(a,this.gi(a),0,[H.aB(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
cL:function(a,b,c,d){var z,y,x
H.v(b,d)
H.k(c,{func:1,ret:d,args:[d,H.aB(this,a,"m",0)]})
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.ag(a))}return y},
t:function(a,b){var z,y
z=[H.aB(this,a,"m",0)]
H.x(b,"$isb",z,"$asb")
y=H.q([],z)
C.a.si(y,C.b.t(this.gi(a),b.gi(b)))
C.a.X(y,0,this.gi(a),a)
C.a.X(y,this.gi(a),y.length,b)
return y},
k:function(a){return P.bU(a,"[","]")}},
cT:{"^":"N;"},
fC:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
N:{"^":"c;$ti",
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.aB(this,a,"N",0),H.aB(this,a,"N",1)]})
for(z=J.bm(this.gD(a));z.u();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.ae(this.gD(a))},
k:function(a){return P.cU(a)},
$isF:1},
hc:{"^":"c;$ti",
F:function(a,b){var z
for(z=J.bm(H.x(b,"$isi",this.$ti,"$asi"));z.u();)this.n(0,z.gA(z))},
k:function(a){return P.bU(this,"{","}")},
$isi:1,
$islb:1},
hb:{"^":"hc;"},
id:{"^":"c+m;"}}],["","",,P,{"^":"",
fd:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.aV(a)+"'"},
bq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fd(a)},
cK:function(a){return new P.hT(a)},
aD:function(a){H.bi(H.e(a))},
J:{"^":"c;"},
"+bool":0,
bp:{"^":"c;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&!0},
S:function(a,b){return C.b.S(this.a,H.h(b,"$isbp").a)},
gw:function(a){var z=this.a
return(z^C.b.aW(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.f2(H.h0(this))
y=P.b5(H.fZ(this))
x=P.b5(H.fV(this))
w=P.b5(H.fW(this))
v=P.b5(H.fY(this))
u=P.b5(H.h_(this))
t=P.f3(H.fX(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isO:1,
$asO:function(){return[P.bp]},
p:{
f2:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b5:function(a){if(a>=10)return""+a
return"0"+a}}},
az:{"^":"E;"},
"+double":0,
a7:{"^":"c;a",
t:function(a,b){return new P.a7(C.b.t(this.a,H.h(b,"$isa7").a))},
I:function(a,b){return C.b.I(this.a,H.h(b,"$isa7").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,H.h(b,"$isa7").a)},
k:function(a){var z,y,x,w,v
z=new P.fa()
y=this.a
if(y<0)return"-"+new P.a7(0-y).k(0)
x=z.$1(C.b.W(y,6e7)%60)
w=z.$1(C.b.W(y,1e6)%60)
v=new P.f9().$1(y%1e6)
return""+C.b.W(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isO:1,
$asO:function(){return[P.a7]},
p:{
f8:function(a,b,c,d,e,f){return new P.a7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f9:{"^":"n:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fa:{"^":"n:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"c;"},
cY:{"^":"I;",
k:function(a){return"Throw of null."}},
af:{"^":"I;a,b,c,d",
gab:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaa:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gab()+y+x
if(!this.a)return w
v=this.gaa()
u=P.bq(this.b)
return w+v+": "+u},
p:{
cx:function(a,b,c){return new P.af(!0,a,b,c)}}},
cZ:{"^":"af;e,f,a,b,c,d",
gab:function(){return"RangeError"},
gaa:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bt:function(a,b,c){return new P.cZ(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.cZ(b,c,!0,a,d,"Invalid value")},
h3:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.aW(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.aW(b,a,c,"end",f))
return b}}},
fl:{"^":"af;e,i:f>,a,b,c,d",
gab:function(){return"RangeError"},
gaa:function(){var z,y
z=H.K(this.b)
if(typeof z!=="number")return z.M()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
z:function(a,b,c,d,e){var z=H.K(e==null?J.ae(b):e)
return new P.fl(b,z,!0,a,c,"Index out of range")}}},
hw:{"^":"I;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
w:function(a){return new P.hw(a)}}},
hu:{"^":"I;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dc:function(a){return new P.hu(a)}}},
bu:{"^":"I;a",
k:function(a){return"Bad state: "+this.a},
p:{
c0:function(a){return new P.bu(a)}}},
eY:{"^":"I;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bq(z)+"."},
p:{
ag:function(a){return new P.eY(a)}}},
d2:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isI:1},
f1:{"^":"I;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hT:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
b7:{"^":"c;"},
D:{"^":"E;"},
"+int":0,
i:{"^":"c;$ti",
an:["bL",function(a,b){var z=H.cd(this,"i",0)
return new H.dd(this,H.k(b,{func:1,ret:P.J,args:[z]}),[z])}],
gi:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.L(P.aW(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.z(b,this,"index",null,y))},
k:function(a){return P.fm(this,"(",")")}},
aL:{"^":"c;$ti"},
b:{"^":"c;$ti",$isi:1},
"+List":0,
F:{"^":"c;$ti"},
H:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
E:{"^":"c;",$isO:1,
$asO:function(){return[P.E]}},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gw:function(a){return H.aU(this)},
k:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.k(this)}},
T:{"^":"c;"},
d:{"^":"c;",$isO:1,
$asO:function(){return[P.d]},
$isfS:1},
"+String":0,
c1:{"^":"c;O:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d3:function(a,b,c){var z=J.bm(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.u())}else{a+=H.e(z.gA(z))
for(;z.u();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
ji:function(){return document},
fb:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).H(z,a,b,c)
y.toString
z=W.r
z=new H.dd(new W.V(y),H.k(new W.fc(),{func:1,ret:P.J,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.L(H.fn())
w=x.gA(x)
if(x.u())H.L(H.fp())
return H.h(w,"$isZ")},
aJ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.ew(a)
if(typeof y==="string")z=a.tagName}catch(x){H.W(x)}return z},
bw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dj:function(a,b,c,d){var z,y
z=W.bw(W.bw(W.bw(W.bw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dC:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.B
if(z===C.e)return a
return z.cB(a,b)},
G:{"^":"Z;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jM:{"^":"f;0i:length=","%":"AccessibleNodeList"},
eK:{"^":"G;",
k:function(a){return String(a)},
$iseK:1,
"%":"HTMLAnchorElement"},
jN:{"^":"G;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cy:{"^":"G;",$iscy:1,"%":"HTMLBaseElement"},
eP:{"^":"f;","%":";Blob"},
bn:{"^":"G;",$isbn:1,"%":"HTMLBodyElement"},
bQ:{"^":"G;0m:height=,0l:width=",
bA:function(a,b,c){var z=this.cc(a,b,P.jg(c,null))
return z},
cc:function(a,b,c){return a.getContext(b,c)},
$isbQ:1,
"%":"HTMLCanvasElement"},
jT:{"^":"f;",
a3:function(a){return P.S(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
jU:{"^":"r;0i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
eZ:{"^":"bR;",$iseZ:1,"%":"CSSNumericValue|CSSUnitValue"},
jV:{"^":"f0;0i:length=","%":"CSSPerspective"},
ah:{"^":"f;",$isah:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jW:{"^":"hL;0i:length=",
ar:function(a,b){var z=this.cd(a,this.c6(a,b))
return z==null?"":z},
c6:function(a,b){var z,y
z=$.dU()
y=z[b]
if(typeof y==="string")return y
y=this.cq(a,b)
z[b]=y
return y},
cq:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f4()+b
if(z in a)return z
return b},
cd:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f_:{"^":"c;",
gm:function(a){return this.ar(a,"height")},
gl:function(a){return this.ar(a,"width")}},
bR:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
f0:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jY:{"^":"bR;0i:length=","%":"CSSTransformValue"},
jZ:{"^":"bR;0i:length=","%":"CSSUnparsedValue"},
k0:{"^":"f;0i:length=","%":"DataTransferItemList"},
bS:{"^":"G;",$isbS:1,"%":"HTMLDivElement"},
f5:{"^":"r;",
ct:function(a,b){return a.adoptNode(b)},
bl:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
k1:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
f6:{"^":"f;",
cG:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
k2:{"^":"hN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.x(c,"$isP",[P.E],"$asP")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.P,P.E]]},
$asm:function(){return[[P.P,P.E]]},
$isi:1,
$asi:function(){return[[P.P,P.E]]},
$isb:1,
$asb:function(){return[[P.P,P.E]]},
$aso:function(){return[[P.P,P.E]]},
"%":"ClientRectList|DOMRectList"},
f7:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gl(a))+" x "+H.e(this.gm(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.be(b,"$isP",[P.E],"$asP"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gl(a)===z.gl(b)&&this.gm(a)===z.gm(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.dj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gl(a)&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
$isP:1,
$asP:function(){return[P.E]},
"%":";DOMRectReadOnly"},
k3:{"^":"hP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.u(c)
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.d]},
$asm:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isb:1,
$asb:function(){return[P.d]},
$aso:function(){return[P.d]},
"%":"DOMStringList"},
k4:{"^":"f;0i:length=","%":"DOMTokenList"},
Z:{"^":"r;0cY:tagName=",
gcw:function(a){return new W.hQ(a)},
k:function(a){return a.localName},
H:["a6",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cJ
if(z==null){z=H.q([],[W.a_])
y=new W.cW(z)
C.a.n(z,W.di(null))
C.a.n(z,W.dt())
$.cJ=y
d=y}else d=z
z=$.cI
if(z==null){z=new W.dw(d)
$.cI=z
c=z}else{z.a=d
c=z}}if($.a4==null){z=document
y=z.implementation
y=(y&&C.H).cG(y,"")
$.a4=y
$.bT=y.createRange()
y=$.a4
y.toString
y=y.createElement("base")
H.h(y,"$iscy")
y.href=z.baseURI
z=$.a4.head;(z&&C.I).R(z,y)}z=$.a4
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbn")}z=$.a4
if(!!this.$isbn)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.a4.body;(z&&C.o).R(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.v(C.S,a.tagName)){z=$.bT;(z&&C.A).bB(z,x)
z=$.bT
w=(z&&C.A).cE(z,b)}else{x.innerHTML=b
w=$.a4.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.R(w,y)}z=$.a4.body
if(x==null?z!=null:x!==z)J.ct(x)
c.av(w)
C.p.ct(document,w)
return w},function(a,b,c){return this.H(a,b,c,null)},"cF",null,null,"gd2",5,5,null],
bC:function(a,b,c,d){a.textContent=null
this.R(a,this.H(a,b,c,d))},
ax:function(a,b){return this.bC(a,b,null,null)},
T:function(a,b){return a.getAttribute(b)},
ci:function(a,b){return a.removeAttribute(b)},
$isZ:1,
"%":";Element"},
fc:{"^":"n:17;",
$1:function(a){return!!J.C(H.h(a,"$isr")).$isZ}},
k6:{"^":"G;0m:height=,0l:width=","%":"HTMLEmbedElement"},
a8:{"^":"f;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
M:{"^":"f;",
cs:function(a,b,c,d){H.k(c,{func:1,args:[W.a8]})
if(c!=null)this.c5(a,b,c,!1)},
c5:function(a,b,c,d){return a.addEventListener(b,H.b1(H.k(c,{func:1,args:[W.a8]}),1),!1)},
$isM:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dq|dr|du|dv"},
ai:{"^":"eP;",$isai:1,"%":"File"},
kn:{"^":"hV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isai")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ai]},
$asm:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isb:1,
$asb:function(){return[W.ai]},
$aso:function(){return[W.ai]},
"%":"FileList"},
ko:{"^":"M;0i:length=","%":"FileWriter"},
kr:{"^":"G;0i:length=","%":"HTMLFormElement"},
aj:{"^":"f;",$isaj:1,"%":"Gamepad"},
ks:{"^":"f;0cR:pressed=","%":"GamepadButton"},
fj:{"^":"G;","%":"HTMLHeadElement"},
kt:{"^":"f;0i:length=","%":"History"},
ku:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isr")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]},
$aso:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fk:{"^":"f5;","%":"HTMLDocument"},
kv:{"^":"G;0m:height=,0l:width=","%":"HTMLIFrameElement"},
kw:{"^":"f;0m:height=,0l:width=","%":"ImageBitmap"},
kx:{"^":"f;0m:height=,0l:width=","%":"ImageData"},
ky:{"^":"G;0m:height=,0l:width=","%":"HTMLImageElement"},
kA:{"^":"G;0m:height=,0l:width=","%":"HTMLInputElement"},
aQ:{"^":"db;",$isaQ:1,"%":"KeyboardEvent"},
fB:{"^":"f;",
k:function(a){return String(a)},
$isfB:1,
"%":"Location"},
fF:{"^":"G;","%":"HTMLAudioElement;HTMLMediaElement"},
kK:{"^":"f;0i:length=","%":"MediaList"},
kL:{"^":"ie;",
h:function(a,b){return P.S(a.get(H.u(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gD:function(a){var z=H.q([],[P.d])
this.C(a,new W.fH(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.d,null]},
$isF:1,
$asF:function(){return[P.d,null]},
"%":"MIDIInputMap"},
fH:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
kM:{"^":"ig;",
h:function(a,b){return P.S(a.get(H.u(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gD:function(a){var z=H.q([],[P.d])
this.C(a,new W.fI(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.d,null]},
$isF:1,
$asF:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
fI:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ak:{"^":"f;",$isak:1,"%":"MimeType"},
kN:{"^":"ii;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isak")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ak]},
$asm:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isb:1,
$asb:function(){return[W.ak]},
$aso:function(){return[W.ak]},
"%":"MimeTypeArray"},
fJ:{"^":"db;","%":"WheelEvent;DragEvent|MouseEvent"},
fM:{"^":"fN;",
ao:function(a){var z=a.getGamepads()
if(z.prototype==null)z.prototype=Object.create(null)
return z},
"%":"Navigator"},
fN:{"^":"f;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
V:{"^":"fA;a",
gY:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c0("No elements"))
if(y>1)throw H.a(P.c0("More than one element"))
return z.firstChild},
F:function(a,b){var z,y,x,w,v
H.x(b,"$isi",[W.r],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.l(y),v=0;v<x;++v)w.R(y,z.firstChild)
return},
j:function(a,b,c){var z,y
H.h(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.j(y,b)
J.eb(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.cM(z,z.length,-1,[H.aB(C.V,z,"o",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$asm:function(){return[W.r]},
$asi:function(){return[W.r]},
$asb:function(){return[W.r]}},
r:{"^":"M;0cS:previousSibling=",
cT:function(a){var z=a.parentNode
if(z!=null)J.bk(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.bK(a):z},
R:function(a,b){return a.appendChild(b)},
cj:function(a,b){return a.removeChild(b)},
ck:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
fO:{"^":"ik;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isr")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]},
$aso:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
kX:{"^":"G;0m:height=,0l:width=","%":"HTMLObjectElement"},
kZ:{"^":"M;0m:height=,0l:width=","%":"OffscreenCanvas"},
l_:{"^":"f;0m:height=,0l:width=","%":"PaintSize"},
al:{"^":"f;0i:length=",$isal:1,"%":"Plugin"},
l1:{"^":"ip;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isal")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.al]},
$asm:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isb:1,
$asb:function(){return[W.al]},
$aso:function(){return[W.al]},
"%":"PluginArray"},
l3:{"^":"fJ;0m:height=,0l:width=","%":"PointerEvent"},
h2:{"^":"f;",
cE:function(a,b){return a.createContextualFragment(b)},
bB:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
l8:{"^":"iv;",
h:function(a,b){return P.S(a.get(H.u(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gD:function(a){var z=H.q([],[P.d])
this.C(a,new W.h8(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.d,null]},
$isF:1,
$asF:function(){return[P.d,null]},
"%":"RTCStatsReport"},
h8:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
l9:{"^":"f;0m:height=,0l:width=","%":"Screen"},
la:{"^":"G;0i:length=","%":"HTMLSelectElement"},
an:{"^":"M;",$isan:1,"%":"SourceBuffer"},
lc:{"^":"dr;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isan")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.an]},
$asm:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isb:1,
$asb:function(){return[W.an]},
$aso:function(){return[W.an]},
"%":"SourceBufferList"},
ao:{"^":"f;",$isao:1,"%":"SpeechGrammar"},
ld:{"^":"iB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isao")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ao]},
$asm:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isb:1,
$asb:function(){return[W.ao]},
$aso:function(){return[W.ao]},
"%":"SpeechGrammarList"},
ap:{"^":"f;0i:length=",$isap:1,"%":"SpeechRecognitionResult"},
lg:{"^":"iE;",
h:function(a,b){return this.aR(a,H.u(b))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cf(a,z)
if(y==null)return
b.$2(y,this.aR(a,y))}},
gD:function(a){var z=H.q([],[P.d])
this.C(a,new W.hj(z))
return z},
gi:function(a){return a.length},
aR:function(a,b){return a.getItem(b)},
cf:function(a,b){return a.key(b)},
$asN:function(){return[P.d,P.d]},
$isF:1,
$asF:function(){return[P.d,P.d]},
"%":"Storage"},
hj:{"^":"n:18;a",
$2:function(a,b){return C.a.n(this.a,a)}},
aq:{"^":"f;",$isaq:1,"%":"CSSStyleSheet|StyleSheet"},
ho:{"^":"G;",
H:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.a6(a,b,c,d)
z=W.fb("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.V(y).F(0,new W.V(z))
return y},
"%":"HTMLTableElement"},
lj:{"^":"G;",
H:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.a6(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.H(z.createElement("table"),b,c,d)
z.toString
z=new W.V(z)
x=z.gY(z)
x.toString
z=new W.V(x)
w=z.gY(z)
y.toString
w.toString
new W.V(y).F(0,new W.V(w))
return y},
"%":"HTMLTableRowElement"},
lk:{"^":"G;",
H:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.a6(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.H(z.createElement("table"),b,c,d)
z.toString
z=new W.V(z)
x=z.gY(z)
y.toString
x.toString
new W.V(y).F(0,new W.V(x))
return y},
"%":"HTMLTableSectionElement"},
d5:{"^":"G;",$isd5:1,"%":"HTMLTemplateElement"},
ll:{"^":"f;0l:width=","%":"TextMetrics"},
ar:{"^":"M;",$isar:1,"%":"TextTrack"},
as:{"^":"M;",$isas:1,"%":"TextTrackCue|VTTCue"},
lm:{"^":"iM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isas")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.as]},
$asm:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isb:1,
$asb:function(){return[W.as]},
$aso:function(){return[W.as]},
"%":"TextTrackCueList"},
ln:{"^":"dv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isar")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ar]},
$asm:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isb:1,
$asb:function(){return[W.ar]},
$aso:function(){return[W.ar]},
"%":"TextTrackList"},
lo:{"^":"f;0i:length=","%":"TimeRanges"},
at:{"^":"f;",$isat:1,"%":"Touch"},
lp:{"^":"iR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isat")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.at]},
$asm:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isb:1,
$asb:function(){return[W.at]},
$aso:function(){return[W.at]},
"%":"TouchList"},
lq:{"^":"f;0i:length=","%":"TrackDefaultList"},
db:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lD:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
lG:{"^":"fF;0m:height=,0l:width=","%":"HTMLVideoElement"},
lH:{"^":"M;0i:length=","%":"VideoTrackList"},
lI:{"^":"M;0m:height=,0l:width=","%":"VisualViewport"},
lJ:{"^":"f;0l:width=","%":"VTTRegion"},
hA:{"^":"M;",
gcv:function(a){var z,y,x
z=P.E
y=new P.a1(0,$.B,[z])
x=H.k(new W.hB(new P.iI(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cb(a)
this.cl(a,W.dC(x,z))
return y},
cl:function(a,b){return a.requestAnimationFrame(H.b1(H.k(b,{func:1,ret:-1,args:[P.E]}),1))},
cb:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hB:{"^":"n:19;a",
$1:function(a){var z=this.a
a=H.bC(H.cg(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.L(P.c0("Future already completed"))
z.a9(a)}},
df:{"^":"r;",$isdf:1,"%":"Attr"},
lP:{"^":"iX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isah")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ah]},
$asm:function(){return[W.ah]},
$isi:1,
$asi:function(){return[W.ah]},
$isb:1,
$asb:function(){return[W.ah]},
$aso:function(){return[W.ah]},
"%":"CSSRuleList"},
lQ:{"^":"f7;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.be(b,"$isP",[P.E],"$asP"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gw:function(a){return W.dj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lS:{"^":"iZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isaj")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aj]},
$asm:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isb:1,
$asb:function(){return[W.aj]},
$aso:function(){return[W.aj]},
"%":"GamepadList"},
lX:{"^":"j0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isr")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]},
$aso:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lY:{"^":"j2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isap")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ap]},
$asm:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isb:1,
$asb:function(){return[W.ap]},
$aso:function(){return[W.ap]},
"%":"SpeechRecognitionResultList"},
lZ:{"^":"j4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$isaq")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aq]},
$asm:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isb:1,
$asb:function(){return[W.aq]},
$aso:function(){return[W.aq]},
"%":"StyleSheetList"},
hI:{"^":"cT;ca:a<",
C:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.a3)(z),++v){u=z[v]
b.$2(u,w.T(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.q([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.h(z[w],"$isdf")
if(v.namespaceURI==null)C.a.n(y,v.name)}return y},
$asN:function(){return[P.d,P.d]},
$asF:function(){return[P.d,P.d]}},
hQ:{"^":"hI;a",
h:function(a,b){return J.bM(this.a,H.u(b))},
gi:function(a){return this.gD(this).length}},
lR:{"^":"hk;a,b,c,$ti"},
hR:{"^":"hl;a,b,c,d,e,$ti",p:{
c3:function(a,b,c,d,e){var z=W.dC(new W.hS(c),W.a8)
if(z!=null&&!0)J.ec(a,b,z,!1)
return new W.hR(0,a,b,z,!1,[e])}}},
hS:{"^":"n:20;a",
$1:function(a){return this.a.$1(H.h(a,"$isa8"))}},
bc:{"^":"c;a",
c0:function(a){var z,y
z=$.ck()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.R[y],W.js())
for(y=0;y<12;++y)z.j(0,C.r[y],W.jt())}},
P:function(a){return $.e6().v(0,W.aJ(a))},
K:function(a,b,c){var z,y,x
z=W.aJ(a)
y=$.ck()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bz(x.$4(a,b,c,this))},
$isa_:1,
p:{
di:function(a){var z,y
z=document.createElement("a")
y=new W.iw(z,window.location)
y=new W.bc(y)
y.c0(a)
return y},
lV:[function(a,b,c,d){H.h(a,"$isZ")
H.u(b)
H.u(c)
H.h(d,"$isbc")
return!0},"$4","js",16,0,11],
lW:[function(a,b,c,d){var z,y,x
H.h(a,"$isZ")
H.u(b)
H.u(c)
z=H.h(d,"$isbc").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","jt",16,0,11]}},
o:{"^":"c;$ti",
gB:function(a){return new W.cM(a,this.gi(a),-1,[H.aB(this,a,"o",0)])}},
cW:{"^":"c;a",
P:function(a){return C.a.b0(this.a,new W.fQ(a))},
K:function(a,b,c){return C.a.b0(this.a,new W.fP(a,b,c))},
$isa_:1},
fQ:{"^":"n:8;a",
$1:function(a){return H.h(a,"$isa_").P(this.a)}},
fP:{"^":"n:8;a,b,c",
$1:function(a){return H.h(a,"$isa_").K(this.a,this.b,this.c)}},
ix:{"^":"c;",
c2:function(a,b,c,d){var z,y,x
this.a.F(0,c)
z=b.an(0,new W.iy())
y=b.an(0,new W.iz())
this.b.F(0,z)
x=this.c
x.F(0,C.T)
x.F(0,y)},
P:function(a){return this.a.v(0,W.aJ(a))},
K:["bN",function(a,b,c){var z,y
z=W.aJ(a)
y=this.c
if(y.v(0,H.e(z)+"::"+b))return this.d.cu(c)
else if(y.v(0,"*::"+b))return this.d.cu(c)
else{y=this.b
if(y.v(0,H.e(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.e(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}],
$isa_:1},
iy:{"^":"n:9;",
$1:function(a){return!C.a.v(C.r,H.u(a))}},
iz:{"^":"n:9;",
$1:function(a){return C.a.v(C.r,H.u(a))}},
iJ:{"^":"ix;e,a,b,c,d",
K:function(a,b,c){if(this.bN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bM(a,"template")==="")return this.e.v(0,b)
return!1},
p:{
dt:function(){var z,y,x,w,v
z=P.d
y=P.bY(C.q,z)
x=H.p(C.q,0)
w=H.k(new W.iK(),{func:1,ret:z,args:[x]})
v=H.q(["TEMPLATE"],[z])
y=new W.iJ(y,P.aa(null,null,null,z),P.aa(null,null,null,z),P.aa(null,null,null,z),null)
y.c2(null,new H.fD(C.q,w,[x,z]),v,null)
return y}}},
iK:{"^":"n:21;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
iH:{"^":"c;",
P:function(a){var z=J.C(a)
if(!!z.$isd_)return!1
z=!!z.$isA
if(z&&W.aJ(a)==="foreignObject")return!1
if(z)return!0
return!1},
K:function(a,b,c){if(b==="is"||C.h.bF(b,"on"))return!1
return this.P(a)},
$isa_:1},
cM:{"^":"c;a,b,c,0d,$ti",
saS:function(a){this.d=H.v(a,H.p(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saS(J.bH(this.a,z))
this.c=z
return!0}this.saS(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaL:1},
a_:{"^":"c;"},
iw:{"^":"c;a,b",$islC:1},
dw:{"^":"c;a",
av:function(a){new W.iU(this).$2(a,null)},
V:function(a,b){if(b==null)J.ct(a)
else J.bk(b,a)},
co:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eu(a)
x=J.bM(y.gca(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.W(t)}v="element unprintable"
try{v=J.b4(a)}catch(t){H.W(t)}try{u=W.aJ(a)
this.cn(H.h(a,"$isZ"),b,z,v,u,H.h(y,"$isF"),H.u(x))}catch(t){if(H.W(t) instanceof P.af)throw t
else{this.V(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cn:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.V(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.P(a)){this.V(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.K(a,"is",g)){this.V(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.q(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.K(a,J.eC(v),w.T(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.T(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.T(z,v)
w.ci(z,v)}}if(!!J.C(a).$isd5)this.av(a.content)},
$iskV:1},
iU:{"^":"n:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.co(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.V(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ev(z)}catch(w){H.W(w)
v=H.h(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bk(u,v)}else J.bk(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isr")}}},
hL:{"^":"f+f_;"},
hM:{"^":"f+m;"},
hN:{"^":"hM+o;"},
hO:{"^":"f+m;"},
hP:{"^":"hO+o;"},
hU:{"^":"f+m;"},
hV:{"^":"hU+o;"},
i6:{"^":"f+m;"},
i7:{"^":"i6+o;"},
ie:{"^":"f+N;"},
ig:{"^":"f+N;"},
ih:{"^":"f+m;"},
ii:{"^":"ih+o;"},
ij:{"^":"f+m;"},
ik:{"^":"ij+o;"},
io:{"^":"f+m;"},
ip:{"^":"io+o;"},
iv:{"^":"f+N;"},
dq:{"^":"M+m;"},
dr:{"^":"dq+o;"},
iA:{"^":"f+m;"},
iB:{"^":"iA+o;"},
iE:{"^":"f+N;"},
iL:{"^":"f+m;"},
iM:{"^":"iL+o;"},
du:{"^":"M+m;"},
dv:{"^":"du+o;"},
iQ:{"^":"f+m;"},
iR:{"^":"iQ+o;"},
iW:{"^":"f+m;"},
iX:{"^":"iW+o;"},
iY:{"^":"f+m;"},
iZ:{"^":"iY+o;"},
j_:{"^":"f+m;"},
j0:{"^":"j_+o;"},
j1:{"^":"f+m;"},
j2:{"^":"j1+o;"},
j3:{"^":"f+m;"},
j4:{"^":"j3+o;"}}],["","",,P,{"^":"",
S:function(a){var z,y,x,w,v
if(a==null)return
z=P.a9(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a3)(y),++w){v=H.u(y[w])
z.j(0,v,a[v])}return z},
jg:function(a,b){var z={}
a.C(0,new P.jh(z))
return z},
cG:function(){var z=$.cF
if(z==null){z=J.bJ(window.navigator.userAgent,"Opera",0)
$.cF=z}return z},
f4:function(){var z,y
z=$.cC
if(z!=null)return z
y=$.cD
if(y==null){y=J.bJ(window.navigator.userAgent,"Firefox",0)
$.cD=y}if(y)z="-moz-"
else{y=$.cE
if(y==null){y=!P.cG()&&J.bJ(window.navigator.userAgent,"Trident/",0)
$.cE=y}if(y)z="-ms-"
else z=P.cG()?"-o-":"-webkit-"}$.cC=z
return z},
jh:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",i8:{"^":"c;",
L:function(){return Math.random()}},iq:{"^":"c;"},P:{"^":"iq;$ti"}}],["","",,P,{"^":"",eL:{"^":"f;",$iseL:1,"%":"SVGAnimatedLength"},k7:{"^":"A;0m:height=,0l:width=","%":"SVGFEBlendElement"},k8:{"^":"A;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},k9:{"^":"A;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},ka:{"^":"A;0m:height=,0l:width=","%":"SVGFECompositeElement"},kb:{"^":"A;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},kc:{"^":"A;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},kd:{"^":"A;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},ke:{"^":"A;0m:height=,0l:width=","%":"SVGFEFloodElement"},kf:{"^":"A;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},kg:{"^":"A;0m:height=,0l:width=","%":"SVGFEImageElement"},kh:{"^":"A;0m:height=,0l:width=","%":"SVGFEMergeElement"},ki:{"^":"A;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},kj:{"^":"A;0m:height=,0l:width=","%":"SVGFEOffsetElement"},kk:{"^":"A;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},kl:{"^":"A;0m:height=,0l:width=","%":"SVGFETileElement"},km:{"^":"A;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},kp:{"^":"A;0m:height=,0l:width=","%":"SVGFilterElement"},kq:{"^":"b8;0m:height=,0l:width=","%":"SVGForeignObjectElement"},fh:{"^":"b8;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b8:{"^":"A;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},kz:{"^":"b8;0m:height=,0l:width=","%":"SVGImageElement"},aR:{"^":"f;",$isaR:1,"%":"SVGLength"},kG:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return this.J(a,b)},
j:function(a,b,c){H.h(c,"$isaR")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aR]},
$isi:1,
$asi:function(){return[P.aR]},
$isb:1,
$asb:function(){return[P.aR]},
$aso:function(){return[P.aR]},
"%":"SVGLengthList"},kH:{"^":"A;0m:height=,0l:width=","%":"SVGMaskElement"},aT:{"^":"f;",$isaT:1,"%":"SVGNumber"},kW:{"^":"im;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return this.J(a,b)},
j:function(a,b,c){H.h(c,"$isaT")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aT]},
$isi:1,
$asi:function(){return[P.aT]},
$isb:1,
$asb:function(){return[P.aT]},
$aso:function(){return[P.aT]},
"%":"SVGNumberList"},l0:{"^":"A;0m:height=,0l:width=","%":"SVGPatternElement"},l2:{"^":"f;0i:length=","%":"SVGPointList"},l4:{"^":"f;0m:height=,0l:width=","%":"SVGRect"},l5:{"^":"fh;0m:height=,0l:width=","%":"SVGRectElement"},d_:{"^":"A;",$isd_:1,"%":"SVGScriptElement"},lh:{"^":"iG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return this.J(a,b)},
j:function(a,b,c){H.u(c)
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isb:1,
$asb:function(){return[P.d]},
$aso:function(){return[P.d]},
"%":"SVGStringList"},A:{"^":"Z;",
H:function(a,b,c,d){var z,y,x,w,v,u
z=H.q([],[W.a_])
C.a.n(z,W.di(null))
C.a.n(z,W.dt())
C.a.n(z,new W.iH())
c=new W.dw(new W.cW(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).cF(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.V(w)
u=z.gY(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.R(v,x)
return v},
$isA:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},li:{"^":"b8;0m:height=,0l:width=","%":"SVGSVGElement"},aY:{"^":"f;",$isaY:1,"%":"SVGTransform"},lr:{"^":"iT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return this.J(a,b)},
j:function(a,b,c){H.h(c,"$isaY")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aY]},
$isi:1,
$asi:function(){return[P.aY]},
$isb:1,
$asb:function(){return[P.aY]},
$aso:function(){return[P.aY]},
"%":"SVGTransformList"},lE:{"^":"b8;0m:height=,0l:width=","%":"SVGUseElement"},i9:{"^":"f+m;"},ia:{"^":"i9+o;"},il:{"^":"f+m;"},im:{"^":"il+o;"},iF:{"^":"f+m;"},iG:{"^":"iF+o;"},iS:{"^":"f+m;"},iT:{"^":"iS+o;"}}],["","",,P,{"^":"",b6:{"^":"c;",$isi:1,
$asi:function(){return[P.az]},
$isb:1,
$asb:function(){return[P.az]}}}],["","",,P,{"^":"",jO:{"^":"f;0i:length=","%":"AudioBuffer"},jP:{"^":"hJ;",
h:function(a,b){return P.S(a.get(H.u(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gD:function(a){var z=H.q([],[P.d])
this.C(a,new P.eN(z))
return z},
gi:function(a){return a.size},
$asN:function(){return[P.d,null]},
$isF:1,
$asF:function(){return[P.d,null]},
"%":"AudioParamMap"},eN:{"^":"n:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},jQ:{"^":"M;0i:length=","%":"AudioTrackList"},eO:{"^":"M;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kY:{"^":"eO;0i:length=","%":"OfflineAudioContext"},hJ:{"^":"f+N;"}}],["","",,P,{"^":"",eQ:{"^":"f;",$iseQ:1,"%":"WebGLBuffer"},h1:{"^":"f;",$ish1:1,"%":"WebGLProgram"},l6:{"^":"f;",
b_:function(a,b){return a.activeTexture(b)},
b1:function(a,b,c){return a.attachShader(b,c)},
b2:function(a,b,c){return a.bindBuffer(b,c)},
b4:function(a,b,c){return a.bindTexture(b,c)},
b5:function(a,b){return a.blendEquation(b)},
b6:function(a,b,c){return a.blendFunc(b,c)},
b7:function(a,b,c,d){return a.bufferData(b,c,d)},
b8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b9:function(a,b){return a.compileShader(b)},
ba:function(a){return a.createBuffer()},
bb:function(a){return a.createProgram()},
bc:function(a,b){return a.createShader(b)},
bd:function(a,b){return a.depthMask(b)},
be:function(a,b){return a.disable(b)},
bf:function(a,b,c,d){return a.drawArrays(b,c,d)},
bg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bh:function(a,b){return a.enable(b)},
bi:function(a,b){return a.enableVertexAttribArray(b)},
a3:function(a){return P.S(a.getContextAttributes())},
ap:function(a,b){return a.getProgramInfoLog(b)},
aq:function(a,b,c){return a.getProgramParameter(b,c)},
as:function(a,b){return a.getShaderInfoLog(b)},
at:function(a,b,c){return a.getShaderParameter(b,c)},
au:function(a,b,c){return a.getUniformLocation(b,c)},
bk:function(a,b){return a.linkProgram(b)},
ay:function(a,b,c){return a.shaderSource(b,c)},
aA:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bp:function(a,b,c){return a.uniform1f(b,c)},
bq:function(a,b,c){return a.uniform1i(b,c)},
br:function(a,b,c){return a.uniform2fv(b,c)},
bs:function(a,b,c){return a.uniform3fv(b,c)},
bt:function(a,b,c){return a.uniform4fv(b,c)},
bu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bw:function(a,b){return a.useProgram(b)},
bx:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},l7:{"^":"f;",
cz:function(a,b){return a.beginTransformFeedback(b)},
cC:function(a,b){return a.bindVertexArray(b)},
cH:function(a){return a.createVertexArray()},
cI:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cJ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cK:function(a){return a.endTransformFeedback()},
d_:function(a,b,c,d){this.cr(a,b,H.x(c,"$isb",[P.d],"$asb"),d)
return},
cr:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
d0:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b_:function(a,b){return a.activeTexture(b)},
b1:function(a,b,c){return a.attachShader(b,c)},
b2:function(a,b,c){return a.bindBuffer(b,c)},
b4:function(a,b,c){return a.bindTexture(b,c)},
b5:function(a,b){return a.blendEquation(b)},
b6:function(a,b,c){return a.blendFunc(b,c)},
b7:function(a,b,c,d){return a.bufferData(b,c,d)},
b8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
b9:function(a,b){return a.compileShader(b)},
ba:function(a){return a.createBuffer()},
bb:function(a){return a.createProgram()},
bc:function(a,b){return a.createShader(b)},
bd:function(a,b){return a.depthMask(b)},
be:function(a,b){return a.disable(b)},
bf:function(a,b,c,d){return a.drawArrays(b,c,d)},
bg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bh:function(a,b){return a.enable(b)},
bi:function(a,b){return a.enableVertexAttribArray(b)},
a3:function(a){return P.S(a.getContextAttributes())},
ap:function(a,b){return a.getProgramInfoLog(b)},
aq:function(a,b,c){return a.getProgramParameter(b,c)},
as:function(a,b){return a.getShaderInfoLog(b)},
at:function(a,b,c){return a.getShaderParameter(b,c)},
au:function(a,b,c){return a.getUniformLocation(b,c)},
bk:function(a,b){return a.linkProgram(b)},
ay:function(a,b,c){return a.shaderSource(b,c)},
aA:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bp:function(a,b,c){return a.uniform1f(b,c)},
bq:function(a,b,c){return a.uniform1i(b,c)},
br:function(a,b,c){return a.uniform2fv(b,c)},
bs:function(a,b,c){return a.uniform3fv(b,c)},
bt:function(a,b,c){return a.uniform4fv(b,c)},
bu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bw:function(a,b){return a.useProgram(b)},
bx:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},hd:{"^":"f;",$ishd:1,"%":"WebGLShader"},hq:{"^":"f;",$ishq:1,"%":"WebGLTexture"},ht:{"^":"f;",$isht:1,"%":"WebGLUniformLocation"},hy:{"^":"f;",$ishy:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",le:{"^":"iD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.z(b,a,null,null,null))
return P.S(this.ce(a,b))},
j:function(a,b,c){H.h(c,"$isF")
throw H.a(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
ce:function(a,b){return a.item(b)},
$asm:function(){return[[P.F,,,]]},
$isi:1,
$asi:function(){return[[P.F,,,]]},
$isb:1,
$asb:function(){return[[P.F,,,]]},
$aso:function(){return[[P.F,,,]]},
"%":"SQLResultSetRowList"},iC:{"^":"f+m;"},iD:{"^":"iC+o;"}}],["","",,G,{"^":"",
hC:function(a){var z,y,x,w
z=H.q(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.j(z,y,w+H.e(z[y]))}return C.a.a2(z,"\n")},
dg:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bc(a,b)
z.ay(a,y,c)
z.b9(a,y)
x=H.bz(z.at(a,y,35713))
if(x!=null&&!x){w=z.as(a,y)
P.aD("E:Compilation failed:")
P.aD("E:"+G.hC(c))
P.aD("E:Failure:")
P.aD(C.h.t("E:",w))
throw H.a(w)}return y},
bZ:{"^":"c;"},
c2:{"^":"bZ;",
k:function(a){var z,y,x,w
z=H.q(["{"+new H.da(H.jp(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.aS(y,[H.p(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.n(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a2(z,"\n")}},
eT:{"^":"c;0a,b",
bj:function(a,b,c){J.er(this.a,b)
if(c>0)J.eI(this.a,b,c)},
by:function(a,b,c,d,e,f,g,h){J.cp(this.a,34962,b)
J.eJ(this.a,c,d,e,!1,g,h)}},
d8:{"^":"c;a,b,c"},
d6:{"^":"c;a,b,c",p:{
d7:function(a,b,c){return new G.d6(a,b,c)}}},
fE:{"^":"c2;d,a,b,c"},
fG:{"^":"bZ;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
aD:function(a,b,c){var z,y
C.h.Z(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.cp(z.a,34962,y)
J.eg(z.a,34962,b,35048)},
aE:function(a){this.ch=a
this.aD("aPosition",a,3)},
bS:function(){return this.ch.length/3|0},
aB:function(a,b,c){var z,y,x,w,v
z=C.h.Z(a,0)===105
if(z&&this.z===0)this.z=C.b.bO(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.cr(x.a))
this.aD(a,b,c)
w=$.ad().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bI(x.a,this.e)
x.bj(0,v,z?1:0)
x.by(0,y.h(0,a),v,w.aF(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=H.q(["Faces:0"],[P.d])
for(y=this.cy,x=new H.aS(y,[H.p(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.n(z,H.e(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a2(z,"  ")}},
k5:{"^":"c;"},
h6:{"^":"bZ;d,e,f,r,x,y,z,Q,0ch,a,b,c",
bW:function(a,b,c,d){var z,y,x,w,v,u
for(z=this.e.d,y=this.y,x=this.d,w=this.r,v=0;!1;++v){if(v>=0)return H.j(z,v)
u=z[v]
y.j(0,u,J.cs(x.a,w,u))}for(z=this.f.d,v=0;!1;++v){if(v>=0)return H.j(z,v)
u=z[v]
y.j(0,u,J.cs(x.a,w,u))}},
bY:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.q([],[P.d])
x=H.q([],[P.d])
for(y=new H.aS(y,[H.p(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.aj(0,w))C.a.n(x,w)}for(z=this.x,z=P.dk(z,z.r,H.p(z,0)),y=this.Q;z.u();){w=z.d
if(!y.v(0,w))C.a.n(x,w)}return x},
bZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isF",[P.d,P.c],"$asF")
z=Date.now()
for(y=new H.aS(b,[H.p(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.ea(s,0)){case 117:if(w.aj(0,s)){r=b.h(0,s)
if(v.aj(0,s))H.bi("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.j(0,s,a)
q=$.ad().h(0,s)
if(q==null)H.L("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.K(r)
J.bN(x.a,p,r)}break
case"float":if(q.c===0){H.bB(r)
J.eE(x.a,p,r)}break
case"mat4":if(q.c===0){s=C.i.gN(H.a6(r,"$iskJ"))
J.eG(x.a,p,!1,s)}break
case"mat3":if(q.c===0){s=C.i.gN(H.a6(r,"$iskI"))
J.eF(x.a,p,!1,s)}break
case"vec4":if(q.c===0){s=C.i.gN(H.a6(r,"$islF"))
J.cw(x.a,p,s)}else{H.h(r,"$isb6")
J.cw(x.a,p,r)}break
case"vec3":if(q.c===0){s=C.i.gN(H.a6(r,"$isbb"))
J.cv(x.a,p,s)}else{H.h(r,"$isb6")
J.cv(x.a,p,r)}break
case"vec2":if(q.c===0){s=C.i.gN(H.a6(r,"$isau"))
J.cu(x.a,p,s)}else{H.h(r,"$isb6")
J.cu(x.a,p,r)}break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bD(s)
J.cn(x.a,33984+s)
s=H.a6(r,"$ishp").bT()
J.cq(x.a,3553,s)
s=this.ch
J.bN(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.t()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bD(s)
J.cn(x.a,33984+s)
s=H.a6(r,"$ishp").bT()
J.cq(x.a,34067,s)
s=this.ch
J.bN(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.t()
this.ch=s+1
break
default:H.bi("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=x.a
if(r===!0)J.bl(s,2929)
else J.bK(s,2929)
break
case"cStencilFunc":H.a6(r,"$isd8")
s=r.a
o=x.a
if(s===1281)J.bK(o,2960)
else{J.bl(o,2960)
o=r.b
n=r.c
J.eB(x.a,s,o,n)}break
case"cDepthWrite":H.bz(r)
J.el(x.a,r)
break
case"cBlendEquation":H.a6(r,"$isd6")
s=r.a
o=x.a
if(s===1281)J.bK(o,3042)
else{J.bl(o,3042)
o=r.b
n=r.c
J.ef(x.a,o,n)
J.ee(x.a,s)}break}++t
break}}m=P.f8(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
""+t
m.k(0)},
bR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isb",[G.c2],"$asb")
Date.now()
z=this.d
J.eH(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aT()}for(x=0;x<1;++x){w=b[x]
this.bZ(w.a,w.d)}y=this.Q
y.ai(0)
for(v=a.cy,v=new H.aS(v,[H.p(v,0)]),v=v.gB(v);v.u();)y.n(0,v.d)
u=this.bY()
if(u.length!==0)P.aD("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bI(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bS()
s=a.Q
r=a.z
if(t)J.ed(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.ep(q,y,v,s,0,r)
else J.eo(q,y,v,s,0)}else{s=z.a
if(r>1)J.en(s,y,0,v,r)
else J.em(s,y,0,v)}if(t)J.es(z.a)},
bQ:function(a,b){return this.bR(a,b,null)},
p:{
h7:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.aa(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isb",[z],"$asb")
u=J.ej(b.a)
t=G.dg(b.a,35633,x)
J.co(b.a,u,t)
s=G.dg(b.a,35632,w)
J.co(b.a,u,s)
if(v.length>0)J.eD(b.a,u,v,35980)
J.eA(b.a,u)
if(!H.bz(J.ez(b.a,u,35714)))H.L(J.ey(b.a,u))
z=new G.h6(b,c,d,u,P.bY(c.c,z),P.a9(z,P.c),P.a9(z,z),y,a,!1,!0)
z.bW(a,b,c,d)
return z}}},
y:{"^":"c;a,b,c",
aF:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
he:{"^":"c;a,0b,c,d,e,f,r,x",
bP:function(a){var z,y,x,w
H.x(a,"$isb",[P.d],"$asb")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.n(z,w)
y.j(0,w,this.r);++this.r}C.a.az(z)},
aC:function(a){var z,y
H.x(a,"$isb",[P.d],"$asb")
for(z=this.e,y=0;y<1;++y)C.a.n(z,a[y])
C.a.az(z)},
bX:function(a,b){this.b=this.c_(!1,H.x(a,"$isb",[P.d],"$asb"),b)},
aG:function(a){return this.bX(a,null)},
c_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.x(b,"$isb",z,"$asb")
y=this.c
x=y.length===0
w=H.q(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.a3)(y),++u){t=y[u]
s=$.ad().h(0,t)
C.a.n(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){q=z[u]
s=$.ad().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a3)(z),++u){q=z[u]
s=$.ad().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}C.a.n(w,"")
for(z=this.d,u=0;!1;++u){if(u>=0)return H.j(z,u)
q=z[u]
s=$.ad().h(0,q)
y=s.c
p=y===0?"":"["+y+"]"
C.a.n(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.n(w,"")
C.a.F(w,b)
return C.a.a2(w,"\n")},
p:{
d0:function(a){var z,y
z=P.d
y=[z]
return new G.he(a,H.q([],y),H.q([],y),H.q([],y),H.q([],y),0,P.a9(z,P.D))}}}}],["","",,D,{"^":"",fu:{"^":"c;a,b,c",
bU:function(a){var z,y
a=document
z=W.aQ
y={func:1,ret:-1,args:[z]}
W.c3(a,"keydown",H.k(new D.fw(this),y),!1,z)
W.c3(a,"keyup",H.k(new D.fx(this),y),!1,z)},
p:{
fv:function(a){var z=P.D
z=new D.fu(P.aa(null,null,null,z),P.aa(null,null,null,z),P.aa(null,null,null,z))
z.bU(a)
return z}}},fw:{"^":"n:10;a",
$1:function(a){var z
H.h(a,"$isaQ")
z=this.a
z.a.n(0,a.which)
z.b.n(0,a.which)}},fx:{"^":"n:10;a",
$1:function(a){var z
H.h(a,"$isaQ")
z=this.a
z.a.cU(0,a.which)
z.c.n(0,a.which)}}}],["","",,A,{"^":"",
dL:function(a){var z,y
z=C.U.cL(H.x(a,"$isi",[P.c],"$asi"),0,new A.jr(),P.D)
if(typeof z!=="number")return H.bD(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jr:{"^":"n:23;",
$2:function(a,b){var z,y
H.K(a)
z=J.aH(b)
if(typeof a!=="number")return a.t()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",au:{"^":"c;a",
gN:function(a){return this.a},
U:function(a,b){var z=this.a
z[0]=a
z[1]=b},
a4:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.au){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.dL(this.a)},
t:function(a,b){var z,y,x
H.h(b,"$isau")
z=new Float32Array(2)
y=new T.au(z)
y.a4(this)
x=b.a
z[0]=C.j.t(z[0],x.h(0,0))
z[1]=C.j.t(z[1],x.h(0,1))
return y},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
bH:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
p:{
hx:function(a,b){var z=new T.au(new Float32Array(2))
z.U(a,b)
return z}}},bb:{"^":"c;a",
gN:function(a){return this.a},
a4:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bb){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.dL(this.a)},
t:function(a,b){var z,y,x
H.h(b,"$isbb")
z=new Float32Array(3)
y=new T.bb(z)
y.a4(this)
x=b.a
z[0]=C.j.t(z[0],x.h(0,0))
z[1]=C.j.t(z[1],x.h(0,1))
z[2]=C.j.t(z[2],x.h(0,2))
return y},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)}}}],["","",,D,{"^":"",
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(a,"$isb",[D.aX],"$asb")
for(z=a.length,y=b.length,x=0,w=0;w<a.length;a.length===z||(0,H.a3)(a),++w){v=a[w]
u=x+1
t=x+2
s=x+3
r=v.c.a
if(v.a){q=Math.sin(v.d)
p=Math.cos(v.d)
o=-p*0.05
n=q*0.05
m=r[0]
if(x>=y)return H.j(b,x)
b[x]=m+q*0.07
m=r[1]
if(u>=y)return H.j(b,u)
b[u]=m+p*0.07
if(t>=y)return H.j(b,t)
b[t]=0
t=r[0]
if(s>=y)return H.j(b,s)
b[s]=t+o
t=s+1
m=r[1]
if(t>=y)return H.j(b,t)
b[t]=m+n
m=s+2
if(m>=y)return H.j(b,m)
b[m]=0
x=s+3
s=r[0]
if(x>=y)return H.j(b,x)
b[x]=s-o
s=x+1
r=r[1]
if(s>=y)return H.j(b,s)
b[s]=r-n
r=x+2
if(r>=y)return H.j(b,r)
b[r]=0
x+=3}else{m=r[0]
if(x>=y)return H.j(b,x)
b[x]=m
r=r[1]
if(u>=y)return H.j(b,u)
b[u]=r
if(t>=y)return H.j(b,t)
b[t]=0
x=s}}},
fe:function(a,b){var z,y,x,w,v,u,t,s,r
H.x(a,"$isb",[D.aX],"$asb")
for(z=a.length,y=b.length,x=0,w=0;w<z;++w){v=a[w]
u=v.r.a
t=u[0]
if(x<0||x>=y)return H.j(b,x)
b[x]=t
t=x+1
s=u[1]
if(t>=y)return H.j(b,t)
b[t]=s
s=x+2
t=u[2]
if(s>=y)return H.j(b,s)
b[s]=t
x+=3
if(v.a)for(r=0;r<2;++r){t=u[0]
if(x>=y)return H.j(b,x)
b[x]=t*0.5
t=x+1
s=u[1]
if(t>=y)return H.j(b,t)
b[t]=s*0.5
s=x+2
t=u[2]
if(s>=y)return H.j(b,s)
b[s]=t*0.5
x+=3}}},
ff:function(a,b){var z,y,x,w,v,u,t
H.x(a,"$isb",[D.aX],"$asb")
for(z=a.length,y=b.length,x=0,w=0;w<z;++w){v=a[w]
u=v.b
if(x<0||x>=y)return H.j(b,x)
b[x]=u;++x
if(v.a)for(t=0;t<2;++t){if(x>=y)return H.j(b,x)
b[x]=u;++x}}},
fi:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.x(c,"$isb",[D.aX],"$asb")
b.bV()
z=a.a
if(!z.v(0,37)){y=b.c
if(typeof y!=="number")return y.M()
y=y<-0.5}else y=!0
if(y){if(0>=c.length)return H.j(c,0)
z=c[0]
z.aw(z.d-0.031415926535897934)}else{if(!z.v(0,39)){y=b.c
if(typeof y!=="number")return y.I()
y=y>0.5}else y=!0
if(y){if(0>=c.length)return H.j(c,0)
z=c[0]
z.aw(z.d+0.031415926535897934)}else{if(!z.v(0,38)){y=b.d
if(typeof y!=="number")return y.M()
y=y<-0.5}else y=!0
if(y){if(0>=c.length)return H.j(c,0)
z=c[0]
z.a5(z.e+0.05)}else{if(!z.v(0,40)){z=b.d
if(typeof z!=="number")return z.I()
z=z>0.5}else z=!0
if(z){if(0>=c.length)return H.j(c,0)
z=c[0]
z.a5(z.e-0.05)}else if(a.b.v(0,32)||b.f){P.aD("fire")
for(z=c.length,x=0;x<c.length;c.length===z||(0,H.a3)(c),++x){w=c[x]
v=c[0]
if(w.cP()){u=v.c.a
z=w.c.a
z[1]=u[1]
z[0]=u[0]
z=v.d
w.d=z
y=w.e
z=Math.sin(z)
t=w.e
s=Math.cos(w.d)
r=w.f.a
r[0]=y*z
r[1]=t*s
w.a5(10)
break}}}}}}b.f=!1
b.r=!1
a.c.ai(0)
a.b.ai(0)},
dN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
y=H.h(C.p.bl(document,"#webgl-canvas"),"$isbQ")
x=y.clientWidth
w=y.clientHeight
v=Math.min(H.dG(x),H.dG(w))
y.width=v
y.height=v
u=D.fv(null)
t=H.q([D.d1(!0,50,C.u)],[D.aX])
for(s=0;s<10;++s)C.a.n(t,D.d1(!1,20,C.u))
r=new G.eT(y)
q=P.d
p=P.c
o=(y&&C.G).bA(y,"webgl2",P.cR(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],q,p))
r.a=o
if(o==null)H.L(P.cK('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.ex(o))
if($.jl>0)P.aD("I: "+n)
J.eh(o,0,0,0,1)
J.bl(o,2929)
m=G.h7("basic",r,$.e8(),$.e7())
o=t.length
l=new Float32Array(3*(o+2))
o=t.length
k=new Float32Array(o+2)
o=t.length
j=new Float32Array(3*(o+2))
D.cL(t,l)
D.ff(t,k)
D.fe(t,j)
o=m.d
n=m.e.x
i=P.a9(q,p)
h=J.ek(o.a)
g=new G.fG(o,h,0,i,n,0,-1,P.a9(q,P.b6),"meshdata:points",!1,!0)
i.j(0,"aPosition",J.cr(o.a))
g.aE(l)
f=$.ad().h(0,"aPosition")
if(f==null)H.L("Unknown canonical aPosition")
e=n.h(0,"aPosition")
J.bI(o.a,h)
o.bj(0,e,0)
o.by(0,i.h(0,"aPosition"),e,f.aF(),5126,!1,0,0)
g.aB("aPointSize",k,1)
g.aB("aColor",j,3)
q=P.a9(q,p)
q.j(0,"cDepthTest",!0)
q.j(0,"cDepthWrite",!0)
q.j(0,"cBlendEquation",$.dT())
q.j(0,"cStencilFunc",$.dW())
q.j(0,"cBlendEquation",$.dS())
q.j(0,"cDepthTest",!1)
q.j(0,"cDepthWrite",!1)
z.a=0
new D.jE(z,t,u,new D.fg(-1,0,0,!1,!1,!1),l,g,m,new G.fE(q,"nodepth",!1,!0)).$1(0)},
aX:{"^":"c;a,b,c,d,e,f,r",
aw:function(a){this.d=a
this.f.U(this.e*Math.sin(a),this.e*Math.cos(this.d))},
a5:function(a){if(a>10)a=10
if(a<0)a=0
this.e=a
this.f.U(a*Math.sin(this.d),this.e*Math.cos(this.d))},
cP:function(){var z,y
if(this.a)return!1
z=this.c.a
y=z[0]
if(!(y>1))if(!(y<-1)){z=z[1]
z=z>1||z<-1}else z=!0
else z=!0
return z},
p:{
d1:function(a,b,c){var z,y,x,w,v,u,t,s
z=new T.au(new Float32Array(2))
y=c.L()
x=c.L()
w=new Float32Array(2)
v=new T.au(w)
v.U(y,x)
v.bH(0,$.e9())
w[1]=w[1]*2
w[0]=w[0]*2
w=c.L()
x=6.283185307179586*c.L()
y=c.L()
u=c.L()
t=c.L()
s=new Float32Array(3)
s[0]=y
s[1]=u
s[2]=t
z.U(w*Math.sin(x),w*Math.cos(x))
return new D.aX(a,b,v,x,w,z,new T.bb(s))}}},
fg:{"^":"c;a,0b,c,d,e,f,r",
c1:function(){var z,y,x,w,v,u,t
if(this.b!=null)return!0
z=window.navigator
y=(z&&C.y).ao(z)
for(z=y.length,x=this.a,w=x===-1,v=0,u=0;u<z;++u){t=y[u]
if((v===x||w)&&t!=null){H.bi("found gamepad: "+H.e(t.id)+" "+H.e(t.mapping))
H.bi("buttons: "+t.buttons.length+" axes: "+J.ae(t.axes))
this.b=t
this.a=v
return!0}++v}return!1},
bV:function(){var z,y,x,w
if(!this.c1()){z=$.cl();(z&&C.v).ax(z,"no joystick detected")
return}z=window.navigator
z=(z&&C.y).ao(z)
y=this.a
if(y<0||y>=z.length)return H.j(z,y)
this.b=z[y]
x=H.q([],[P.J])
for(z=this.b.buttons,y=z.length,w=0;w<z.length;z.length===y||(0,H.a3)(z),++w)C.a.n(x,J.bL(z[w]))
z=$.cl();(z&&C.v).ax(z,"device["+this.a+"]: "+H.e(this.b.id)+"<br>axes: "+H.e(this.b.axes)+"<br>buttons: "+H.e(x))
this.c=H.bB(J.cm(J.bH(this.b.axes,0),0))
this.d=H.bB(J.cm(J.bH(this.b.axes,1),0))
z=this.e
y=this.b.buttons
if(0>=y.length)return H.j(y,0)
if(z!=J.bL(y[0]))if(this.e)this.r=!0
else this.f=!0
z=this.b.buttons
if(0>=z.length)return H.j(z,0)
this.e=J.bL(z[0])}},
jE:{"^":"n:24;a,b,c,d,e,f,r,x",
$1:function(a){var z,y,x,w,v,u,t,s
H.cg(a)
z=this.a
y=z.a
if(typeof a!=="number")return a.d1()
z.a=a+0
for(z=this.b,x=z.length,y=(a-y)/1e4,w=0;w<x;++w){v=z[w]
u=v.f.a
t=v.c.a
t[0]=t[0]+u[0]*y
t[1]=t[1]+u[1]*y
if(v.a){s=t[0]
if(s<-1)t[0]=2-s
s=t[0]
if(s>1)t[0]=-2+s
s=t[1]
if(s<-1)t[1]=2-s
s=t[1]
if(s>1)t[1]=-2+s}}D.fi(this.c,this.d,z)
y=this.e
D.cL(z,y)
z=this.f
z.aE(y)
this.r.bQ(z,H.q([this.x],[G.c2]))
C.ab.gcv(window).bn(this,-1)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cN.prototype
return J.fs.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.cO.prototype
if(typeof a=="boolean")return J.fr.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.c)return a
return J.bh(a)}
J.jm=function(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.c)return a
return J.bh(a)}
J.aA=function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.c)return a
return J.bh(a)}
J.dH=function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.c)return a
return J.bh(a)}
J.jn=function(a){if(typeof a=="number")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.jo=function(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.dI=function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.c)return a
return J.bh(a)}
J.cm=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jm(a).t(a,b)}
J.aG=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).E(a,b)}
J.X=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jn(a).I(a,b)}
J.bH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jB(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aA(a).h(a,b)}
J.ea=function(a,b){return J.dI(a).Z(a,b)}
J.bk=function(a,b){return J.l(a).cj(a,b)}
J.eb=function(a,b,c){return J.l(a).ck(a,b,c)}
J.cn=function(a,b){return J.l(a).b_(a,b)}
J.ec=function(a,b,c,d){return J.l(a).cs(a,b,c,d)}
J.co=function(a,b,c){return J.l(a).b1(a,b,c)}
J.ed=function(a,b){return J.l(a).cz(a,b)}
J.cp=function(a,b,c){return J.l(a).b2(a,b,c)}
J.cq=function(a,b,c){return J.l(a).b4(a,b,c)}
J.bI=function(a,b){return J.l(a).cC(a,b)}
J.ee=function(a,b){return J.l(a).b5(a,b)}
J.ef=function(a,b,c){return J.l(a).b6(a,b,c)}
J.eg=function(a,b,c,d){return J.l(a).b7(a,b,c,d)}
J.eh=function(a,b,c,d,e){return J.l(a).b8(a,b,c,d,e)}
J.ei=function(a,b){return J.jo(a).S(a,b)}
J.bJ=function(a,b,c){return J.aA(a).cD(a,b,c)}
J.cr=function(a){return J.l(a).ba(a)}
J.ej=function(a){return J.l(a).bb(a)}
J.ek=function(a){return J.l(a).cH(a)}
J.el=function(a,b){return J.l(a).bd(a,b)}
J.bK=function(a,b){return J.l(a).be(a,b)}
J.em=function(a,b,c,d){return J.l(a).bf(a,b,c,d)}
J.en=function(a,b,c,d,e){return J.l(a).cI(a,b,c,d,e)}
J.eo=function(a,b,c,d,e){return J.l(a).bg(a,b,c,d,e)}
J.ep=function(a,b,c,d,e,f){return J.l(a).cJ(a,b,c,d,e,f)}
J.eq=function(a,b){return J.dH(a).q(a,b)}
J.bl=function(a,b){return J.l(a).bh(a,b)}
J.er=function(a,b){return J.l(a).bi(a,b)}
J.es=function(a){return J.l(a).cK(a)}
J.et=function(a,b){return J.l(a).C(a,b)}
J.eu=function(a){return J.l(a).gcw(a)}
J.aH=function(a){return J.C(a).gw(a)}
J.bm=function(a){return J.dH(a).gB(a)}
J.ae=function(a){return J.aA(a).gi(a)}
J.bL=function(a){return J.l(a).gcR(a)}
J.ev=function(a){return J.l(a).gcS(a)}
J.ew=function(a){return J.l(a).gcY(a)}
J.bM=function(a,b){return J.l(a).T(a,b)}
J.ex=function(a){return J.l(a).a3(a)}
J.ey=function(a,b){return J.l(a).ap(a,b)}
J.ez=function(a,b,c){return J.l(a).aq(a,b,c)}
J.cs=function(a,b,c){return J.l(a).au(a,b,c)}
J.eA=function(a,b){return J.l(a).bk(a,b)}
J.ct=function(a){return J.l(a).cT(a)}
J.eB=function(a,b,c,d){return J.l(a).aA(a,b,c,d)}
J.eC=function(a){return J.dI(a).cZ(a)}
J.b4=function(a){return J.C(a).k(a)}
J.eD=function(a,b,c,d){return J.l(a).d_(a,b,c,d)}
J.eE=function(a,b,c){return J.l(a).bp(a,b,c)}
J.bN=function(a,b,c){return J.l(a).bq(a,b,c)}
J.cu=function(a,b,c){return J.l(a).br(a,b,c)}
J.cv=function(a,b,c){return J.l(a).bs(a,b,c)}
J.cw=function(a,b,c){return J.l(a).bt(a,b,c)}
J.eF=function(a,b,c,d){return J.l(a).bu(a,b,c,d)}
J.eG=function(a,b,c,d){return J.l(a).bv(a,b,c,d)}
J.eH=function(a,b){return J.l(a).bw(a,b)}
J.eI=function(a,b,c){return J.l(a).d0(a,b,c)}
J.eJ=function(a,b,c,d,e,f,g){return J.l(a).bx(a,b,c,d,e,f,g)}
I.aC=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bn.prototype
C.G=W.bQ.prototype
C.v=W.bS.prototype
C.H=W.f6.prototype
C.I=W.fj.prototype
C.p=W.fk.prototype
C.J=J.f.prototype
C.a=J.aM.prototype
C.b=J.cN.prototype
C.i=J.cO.prototype
C.j=J.aN.prototype
C.h=J.aO.prototype
C.Q=J.aP.prototype
C.U=H.fK.prototype
C.y=W.fM.prototype
C.V=W.fO.prototype
C.z=J.fT.prototype
C.A=W.h2.prototype
C.F=W.ho.prototype
C.t=J.ba.prototype
C.ab=W.hA.prototype
C.u=new P.i8()
C.e=new P.ir()
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.M=function(getTagFallback) {
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
C.N=function() {
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
C.O=function(hooks) {
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
C.P=function(hooks) {
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
C.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.R=H.q(I.aC(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.S=H.q(I.aC(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.T=H.q(I.aC([]),[P.d])
C.q=H.q(I.aC(["bind","if","ref","repeat","syntax"]),[P.d])
C.r=H.q(I.aC(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.W=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.X=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.B=new G.y("vec3","vertex coordinates",0)
C.Y=new G.y("vec3","vertex binormals",0)
C.C=new G.y("vec4","for wireframe",0)
C.Z=new G.y("vec4","per vertex color",0)
C.a_=new G.y("float","for normal maps",0)
C.k=new G.y("mat4","",0)
C.a1=new G.y("mat4","",4)
C.a0=new G.y("mat4","",128)
C.c=new G.y("float","",0)
C.a2=new G.y("float","",4)
C.a3=new G.y("float","depth for shadowmaps",0)
C.f=new G.y("sampler2D","",0)
C.a4=new G.y("float","for bump maps",0)
C.a5=new G.y("vec2","texture uvs",0)
C.a6=new G.y("float","time since program start in sec",0)
C.l=new G.y("vec2","",0)
C.a7=new G.y("samplerCube","",0)
C.m=new G.y("vec4","",0)
C.a8=new G.y("vec3","vertex normals",0)
C.a9=new G.y("sampler2DShadow","",0)
C.D=new G.y("vec3","per vertex color",0)
C.E=new G.y("mat3","",0)
C.aa=new G.y("vec3","vertex tangents",0)
$.Y=0
$.aI=null
$.cz=null
$.c5=!1
$.dK=null
$.dD=null
$.dQ=null
$.bA=null
$.bE=null
$.ce=null
$.aw=null
$.b_=null
$.b0=null
$.c6=!1
$.B=C.e
$.a4=null
$.bT=null
$.cJ=null
$.cI=null
$.cF=null
$.cE=null
$.cD=null
$.cC=null
$.jl=0
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
I.$lazy(y,x,w)}})(["k_","dV",function(){return H.dJ("_$dart_dartClosure")},"kF","ci",function(){return H.dJ("_$dart_js")},"ls","dX",function(){return H.a0(H.bv({
toString:function(){return"$receiver$"}}))},"lt","dY",function(){return H.a0(H.bv({$method$:null,
toString:function(){return"$receiver$"}}))},"lu","dZ",function(){return H.a0(H.bv(null))},"lv","e_",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ly","e2",function(){return H.a0(H.bv(void 0))},"lz","e3",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"lx","e1",function(){return H.a0(H.d9(null))},"lw","e0",function(){return H.a0(function(){try{null.$method$}catch(z){return z.message}}())},"lB","e5",function(){return H.a0(H.d9(void 0))},"lA","e4",function(){return H.a0(function(){try{(void 0).$method$}catch(z){return z.message}}())},"lL","cj",function(){return P.hD()},"m1","b3",function(){return[]},"jX","dU",function(){return{}},"lT","e6",function(){return P.bY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"lU","ck",function(){return P.a9(P.d,P.b7)},"lf","dW",function(){return new G.d8(1281,0,4294967295)},"jS","dT",function(){return G.d7(1281,1281,1281)},"jR","dS",function(){return G.d7(32774,1,1)},"m_","ad",function(){return P.cR(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.D,"aColorAlpha",C.Z,"aPosition",C.B,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.C,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.D,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.B,"vPositionFromLight",C.X,"vCenter",C.C,"vDepth",C.a3,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.E,"uConvolutionMatrix",C.E,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a9,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a7,"uAnimationTable",C.f,"uTime",C.a6,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.c,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.d,G.y)},"m5","e8",function(){var z,y
z=G.d0("demoVertexShader")
y=[P.d]
z.bP(H.q(["aPosition","aPointSize","aColor"],y))
z.aC(H.q(["vColor"],y))
z.aG(H.q(["void main(void) {\n    gl_Position = vec4(aPosition.xy, 0.0, 1.0);\n    gl_PointSize = aPointSize;\n    vColor = aColor;\n} \n"],y))
return z},"m4","e7",function(){var z,y
z=G.d0("demoFragmentShader")
y=[P.d]
z.aC(H.q(["vColor"],y))
z.aG(H.q(["void main(void) {\n    float r = length(gl_PointCoord.xy - vec2(0.5, 0.5));\n    oFragColor.rgb = r*r < 0.2 ? vColor : vec3(0.0, 0.0, 0.0);\n}\n"],y))
return z},"m8","e9",function(){return T.hx(0.5,0.5)},"m7","cl",function(){return H.h(C.p.bl(W.ji(),"#info"),"$isbS")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.J,args:[W.a_]},{func:1,ret:P.J,args:[P.d]},{func:1,ret:P.H,args:[W.aQ]},{func:1,ret:P.J,args:[W.Z,P.d,P.d,W.bc]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,],opt:[P.T]},{func:1,ret:[P.a1,,],args:[,]},{func:1,ret:P.J,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.H,args:[P.E]},{func:1,args:[W.a8]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.D,args:[P.D,P.c]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.jK(d||a)
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
Isolate.aC=a.aC
Isolate.cc=a.cc
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
if(typeof dartMainRunner==="function")dartMainRunner(D.dN,[])
else D.dN([])})})()
//# sourceMappingURL=game.dart.js.map
