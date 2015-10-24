part of chronosgl;

MeshData createCubeInternal({double x:1.0, double y:1.0, double z:1.0, double uMin:0.0, double uMax:1.0, double vMin:0.0, double vMax:1.0 }) {
  
  List<double> vertices = [// Front face
                           -x, -y,  z,
                           x, -y,  z,
                           x,  y,  z,
                           -x,  y,  z,

                           // Back face
                           -x, -y, -z,
                           -x,  y, -z,
                           x,  y, -z,
                           x, -y, -z,

                           // Top face
                           -x,  y, -z,
                           -x,  y,  z,
                           x,  y,  z,
                           x,  y, -z,

                           // Bottom face
                           -x, -y, -z,
                           x, -y, -z,
                           x, -y,  z,
                           -x, -y,  z,

                           // Right face
                           x, -y, -z,
                           x,  y, -z,
                           x,  y,  z,
                           x, -y,  z,

                           // Left face
                           -x, -y, -1.0,
                           -x, -y,  1.0,
                           -x,  y,  1.0,
                           -x,  y, -1.0];
  List<double> normals = [// Front face
                              0.0,  0.0,  1.0,
                              0.0,  0.0,  1.0,
                              0.0,  0.0,  1.0,
                              0.0,  0.0,  1.0,

                             // Back face
                              0.0,  0.0, -1.0,
                              0.0,  0.0, -1.0,
                              0.0,  0.0, -1.0,
                              0.0,  0.0, -1.0,

                             // Top face
                              0.0,  1.0,  0.0,
                              0.0,  1.0,  0.0,
                              0.0,  1.0,  0.0,
                              0.0,  1.0,  0.0,

                             // Bottom face
                              0.0, -1.0,  0.0,
                              0.0, -1.0,  0.0,
                              0.0, -1.0,  0.0,
                              0.0, -1.0,  0.0,

                             // Right face
                              1.0,  0.0,  0.0,
                              1.0,  0.0,  0.0,
                              1.0,  0.0,  0.0,
                              1.0,  0.0,  0.0,

                             // Left face
                             -1.0,  0.0,  0.0,
                             -1.0,  0.0,  0.0,
                             -1.0,  0.0,  0.0,
                             -1.0,  0.0,  0.0,];
  List<double> uvs = [// Front face
                      uMin, vMin,
                      uMax, vMin,
                      uMax, vMax,
                      uMin, vMax,

                      // Back face
                      uMax, vMin,
                      uMax, vMax,
                      uMin, vMax,
                      uMin, vMin,

                      // Top face
                      uMin, vMax,
                      uMin, vMin,
                      uMax, vMin,
                      uMax, vMax,

                      // Bottom face
                      uMax, vMax,
                      uMin, vMax,
                      uMin, vMin,
                      uMax, vMin,

                      // Right face
                      uMax, vMin,
                      uMax, vMax,
                      uMin, vMax,
                      uMin, vMin,

                      // Left face
                      uMin, vMin,
                      uMax, vMin,
                      uMax, vMax,
                      uMin, vMax];
  
  List<int> vertIndices = [0, 1, 2,      0, 2, 3,    // Front face
                           4, 5, 6,      4, 6, 7,    // Back face
                           8, 9, 10,     8, 10, 11,  // Top face
                           12, 13, 14,   12, 14, 15, // Bottom face
                           16, 17, 18,   16, 18, 19, // Right face
                           20, 21, 22,   20, 22, 23  // Left face
                           ];

  return new MeshData(vertices : vertices, normals : normals, textureCoords : uvs, vertexIndices : vertIndices); 
  
}