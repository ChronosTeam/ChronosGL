part of chronosshader;

// http://www.chilliant.com/rgb2hsv.html
String ColorFunctions = """
 // range is [0, 1] 
 vec3 HUEtoRGB(float hue) {
    float r = clamp(abs(hue * 6.0 - 3.0) - 1.0, 0.0, 1.0);
    float g = clamp(2.0 - abs(hue * 6.0 - 2.0), 0.0, 1.0);
    float b = clamp(2.0 - abs(hue * 6.0 - 4.0), 0.0, 1.0);
    return vec3(r, g, b);
 }
 
 vec3 HSLtoRGB(vec3 HSL) {
     vec3 RGB = HUEtoRGB(HSL.x);
     float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;
     return (RGB - 0.5) * C + HSL.z;
  }
""";
