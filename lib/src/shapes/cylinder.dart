part of chronosgl;

// single color cylinder
// uv mapping is weird to help with debugging

MeshData createCylinder( double radius, double height, int radialSubdivisions) {
  
  double halfHeight = height / 2;
  
  List<double> vertices = new List<double>();
  List<double> uvs = new List<double>();
  List<int> vertIndices = new List<int>();
    
  // top center
  vertices.addAll( [0.0, halfHeight, 0.0] );    
  uvs.addAll( [0.0, 0.0] );
  // bottom center
  vertices.addAll( [0.0, -halfHeight, 0.0] );   
  uvs.addAll( [1.0, 1.0] );

  for ( int i = 0; i < radialSubdivisions; i++ )
  {

    double u = i / radialSubdivisions;

    double xpos = radius * Math.sin( u * Math.PI * 2 );
    double zpos = radius * Math.cos( u * Math.PI * 2 );

    vertices.addAll( [xpos, halfHeight, zpos] );
    uvs.addAll( [u, u]);
    vertices.addAll( [xpos, -halfHeight, zpos] );
    uvs.addAll( [1.0, u]);

    if( i > 0)
    {
      int p = (i*2) +2; // add offset for "top center" and "bottom center"
      // triangle in top circle
      vertIndices.addAll( [0, p-2, p]);
      // triangle in bottom circle
      vertIndices.addAll( [1, p-1, p+1] );
      // triangle from two verts top to one vert bottom
      vertIndices.addAll( [p-2, p, p+1] );
      // triangle from two verts bottom to one vert top
      vertIndices.addAll( [p-1, p+1, p-2] );
    }
  }

  // close the last gap
  if( true) {
    var i = radialSubdivisions;
    var p = (i*2) +2;
    // triangle in top circle
    vertIndices.addAll( [0, p-2, 2] );
    // triangle in bottom circle
    vertIndices.addAll( [1, p-1, 3] );
    // triangle from two verts top to one vert bottom
    vertIndices.addAll( [p-2, 2, 3] );
    // triangle from two verts bottom to one vert top
    vertIndices.addAll( [p-1, 3, p-2] );
  }
  
  
  return new MeshData(vertices : vertices, textureCoords : uvs, vertexIndices : vertIndices); 

}

