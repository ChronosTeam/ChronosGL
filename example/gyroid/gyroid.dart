import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

// Simple Gyroid Isosurface (spherical crop)
//
// Mikael Hvidtfeldt Christensen
// @SyntopiaDK
//
// License:
// Creative Commons Attribution
// http://creativecommons.org/licenses/by/3.0/

//https://www.shadertoy.com/view/Md23Rd
//https://www.shadertoy.com/view/Ms2Gzd

const String _FragmentShader = """
#define MaxSteps 60
#define MinimumDistance 0.01
#define normalDistance     0.0002
#define PI 3.141592
#define FieldOfView 1.0
#define FudgeFactor 0.8

#define Ambient 0.35
#define Diffuse 0.4
#define Specular 0.08
#define LightDir vec3(1.0,1.0,-0.65048)
#define LightColor vec3(1.0,0.666667,0.6)
#define LightDir2 vec3(1.0,-0.62886,1.0)
#define LightColor2 vec3(0.9,0.8,1.0)

float time = ${uTime} + 38.0;
float scale = 0.8+(0.1*cos(time/3.0));

vec2 rotate(vec2 v, float a) {
  return vec2(cos(a)*v.x + sin(a)*v.y, -sin(a)*v.x + cos(a)*v.y);
}

// Two light source + env light
vec3 getLight(in vec3 color, in vec3 normal, in vec3 dir, int mat) {
  vec3 lightDir = normalize(LightDir);
  float specular = pow(max(0.0,dot(lightDir,-reflect(lightDir, normal))),20.0); // Phong
  float diffuse = max(0.0,dot(-normal, lightDir)); // Lambertian
  
  vec3 lightDir2 = normalize(LightDir2);
  float specular2 = pow(max(0.0,dot(lightDir2,-reflect(lightDir2, normal))),20.0); // Phong
  float diffuse2 = max(0.0,dot(-normal, lightDir2)); // Lambertian
  
  float a = pow(abs(dot(normal,dir)),2.0);
  vec3 l = vec3(0.0);
    
  //if (mat < 2) { 
    //l+=(Specular*specular)*LightColor+(diffuse*Diffuse)*(LightColor*color) +
    //(Specular*specular2)*LightColor2+(diffuse2*Diffuse)*(LightColor2*color);
    //l+=textureCube(iChannel0, reflect(dir, normal)).xyz*Specular;
  //} else {
    l+= 
      //(diffuse*0.8)*(LightColor*color) 
      +(diffuse2*0.7)*(LightColor2*color);
    
  //}
  return l*a*1.7;
}



vec3 offset = vec3(1.0+0.2*(cos(time/5.7)),0.3+0.1*(cos(time/1.7)),1.).xzy;


float DE2(vec3 z, out int mat) { 
 float sphere = abs(length(z))-15.0;
 z*= scale;
 float base = (cos(z.x) * sin(z.y) + cos(z.y) * sin(z.z) + cos(z.z) * sin(z.x));
 float inverse = -base + (1.0+cos(time/4.0))*4.0;
 if (base>inverse) {
    mat = (sphere>-0.1) ? 0 : 2;
 } else {
   mat = (sphere>-0.1) ? 1 : 3;
 }
 return max(min(base,inverse),sphere);
}

float  DE(vec3 z) {
  int i = 0;
  return DE2(z, i);
}



// Finite difference normal
vec3 getNormal(in vec3 pos) {
  vec3 e = vec3(0.0,normalDistance,0.0);

  return normalize(vec3(
      DE(pos+e.yxx)-DE(pos-e.yxx),
      DE(pos+e.xyx)-DE(pos-e.xyx),
      DE(pos+e.xxy)-DE(pos-e.xxy)));
}

// Solid color with a little bit of normal :-)
vec3 getColor(vec3 normal, vec3 pos, int material) {
  if (material == 0) {
    return vec3(0.0,0.1,0.0); 
  } else if (material == 1) {
    return vec3(1.0,0.0,0.0); 
  } else if (material == 2) {
    return vec3(1.0)*length(pos)/10.0;
  } 
  return vec3(1.0)*length(pos)/10.0;
  
}

// Filmic tone mapping:
// http://filmicgames.com/archives/75
vec3 toneMap(in vec3 c) {
  c = c*c; // <- So much for proper gamma correction :-)
  vec3 x = max(vec3(0.),c-vec3(0.004));
  c = (x*(6.2*x+.5))/(x*(6.2*x+1.7)+0.06);
  return c;
}

// Pseudo-random number
// From: lumina.sourceforge.net/Tutorials/Noise.html
float rand(vec2 co){
  return fract(cos(dot(co,vec2(4.898,7.23))) * 23421.631);
}

vec4 rayMarch(in vec3 from, in vec3 dir) {
  // Add some noise to prevent banding
  float totalDistance = rand(gl_FragCoord.xy+vec2(time));
  
  float distance;
  int steps = 0;
  vec3 pos;
  for (int i=0; i < MaxSteps; i++) {
    pos = from + totalDistance * dir;
    distance = DE(pos)*(0.7*scale);
    totalDistance += distance;
    if (distance < MinimumDistance) break;
    steps = i;
  }
  if (steps == MaxSteps-1) {
    return vec4(0.0);
  }
  
  // 'AO' is based on number of steps.
  // Try to smooth the count, to combat banding.
  float smoothStep = float(steps) + distance/MinimumDistance;
  float ao = 1.0-smoothStep/float(MaxSteps);

  // Since our distance field is not signed,
    // backstep when calc'ing normal
  vec3 normal = getNormal(pos-dir*normalDistance*3.0);  

  int material = 0;
  DE2(pos, material);
  
  vec3 color = getColor(normal, pos, material); 
  vec3 light = getLight(color, normal, dir, material);
  return vec4(toneMap((color*Ambient+light)*ao),1.0);
}

float curve(float x) {
  return cos(x);
}

void main(void)
{ 
  float angle = time/5.0; 
  
  // Camera position (eye), and camera target
  vec3 camPos =  19.0*vec3(1.0,0.5*curve(time*0.2),0.5*curve(7.0+0.3*time));
  vec3 target = vec3(0.0);
  vec3 camUp  = vec3(0.0,0.0,1.0);

  // Calculate orthonormal camera reference system
  vec3 camDir   = normalize(target-camPos); // direction for center ray
  camUp = normalize(camUp-dot(camDir,camUp)*camDir); // orthogonalize
  vec3 camRight = normalize(cross(camDir,camUp));
  
  vec2 coord =-1.0+2.0*gl_FragCoord.xy/${uCanvasSize}.xy;
  coord.x *= ${uCanvasSize}.x/${uCanvasSize}.y;
   
  // Get direction for this pixel
  vec3 rayDir = normalize(camDir + (coord.x*camRight + coord.y*camUp)*FieldOfView);
  
  gl_FragColor = rayMarch(camPos, rayDir);
}

""";

List<ShaderObject> createSphericalGyroidShader() {
  return [
    new ShaderObject("SphericalGyroid")
      ..AddAttributeVar(aVertexPosition)
      ..SetBodyWithMain([NullVertexBody]),
    new ShaderObject("SphericalGyroidF")
      ..AddUniformVar(uCanvasSize)
      ..AddUniformVar(uTime)
      ..SetBody([_FragmentShader])
  ];
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  RenderPhase phase = new RenderPhase("main", chronosGL);

  RenderProgram program = phase.createProgram(createSphericalGyroidShader());
  program.add(UnitNode(chronosGL));

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    program.ForceInput(uTime, timeMs / 1000.0);
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;

    program.ForceInput(uCanvasSize, new VM.Vector2(0.0 + w, 0.0 + h));
    phase.draw([]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
