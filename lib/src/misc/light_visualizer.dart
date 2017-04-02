part of misc;

MeshData EmptyLightVisualizer(ChronosGL cgl, String name) {
  MeshData md = new MeshData(name, cgl, WEBGL.LINES);
  md.AddVertices(new Float32List(3));
  md.AddFaces([0, 0]);
  return md;
}

void UpdateDirectionalLightVisualizer(
    MeshData md, double cubeLen, double delta, VM.Vector3 dir) {
  if (dir.y == 0.0) {
    return;
  }
  final double d = cubeLen * 0.5;
  final double end = delta * (d / delta).floor();
  final double start = -end;
  final VM.Vector3 dir2y = dir * d / dir.y;
  List<VM.Vector3> points = [];
  for (double x = start; x <= end; x += delta) {
    for (double z = start; z <= end; z += delta) {
      // we have an intersection  point with xz plane, now get the
      // intersection with the top and bottom face of the cube
      points.add(new VM.Vector3(x, 0.0, z)..add(dir2y));
      points.add(new VM.Vector3(x, 0.0, z)..sub(dir2y));
    }
  }
  md.ChangeVertices(FlattenVector3List(points));
  List<int> faces = new List<int>(points.length);
  for (int i = 0; i < points.length; ++i) faces[i] = i;
  md.ChangeFaces(faces);
}

MeshData DirectionalLightVisualizer(
    ChronosGL cgl, double cubeLen, double delta, VM.Vector3 dir) {
  MeshData md = EmptyLightVisualizer(cgl, "dirLightViz");
  UpdateDirectionalLightVisualizer(md, cubeLen, delta, dir);
  return md;
}

VM.Vector3 GetOrthogonalVector3(VM.Vector3 dir) {
  if (dir.x != 0.0) {
    if (dir.y != 0.0) return new VM.Vector3(-dir.y, dir.x, 0.0);
    if (dir.z != 0.0) return new VM.Vector3(-dir.z, 0.0, dir.x);
    return new VM.Vector3(0.0, 1.0, 1.0);
  } else {
    if (dir.y == 0.0) return new VM.Vector3(1.0, 1.0, 0.0);
    if (dir.z == 0.0) return new VM.Vector3(1.0, 0.0, 1.0);
    return new VM.Vector3(0.0, -dir.z, dir.y);
  }
}

MeshData SpotLightVisualizer(
    ChronosGL cgl, VM.Vector3 pos, VM.Vector3 dir, double range, double angle) {
  final int kSpines = 8;
  VM.Vector3 center = pos + dir.normalized() * range;
  List<VM.Vector3> points = [pos, center];
  VM.Vector3 ortho = GetOrthogonalVector3(dir)
    ..normalize()
    ..scale(Math.tan(angle) * range);
  for (int i = 0; i < kSpines; i++) {
    VM.Vector3 p = ortho.clone()
      ..applyAxisAngle(dir, i * 2.0 * Math.PI / kSpines)
      ..add(center);
    points.add(p);
  }
  MeshData md = EmptyLightVisualizer(cgl, "spotLightViz");
  md.ChangeVertices(FlattenVector3List(points));
  List<int> faces = [];
  for (int i = 1; i < points.length; ++i) {
    faces.add(0);
    faces.add(i);
  }

  // funnel
  for (int i = 3; i < points.length; ++i) {
    faces.add(i - 1);
    faces.add(i);
  }
  faces.add(points.length - 1);
  faces.add(2);

  // cross
  for (int i = 2; i < points.length; ++i) {
    if (i % 2 == 0) {
      faces.add(1);
      faces.add(i);
    }
  }
  md.ChangeFaces(faces);
  return md;
}

/*
MeshData PointLightVisualizer(
    WEBGL.RenderingContext gl, VM.Vector3 pos, double range) {
  List<VM.Vector3> points = [];
  List<int> faces = [];
  // Rays from center
  for (VM.Vector3 v in IcosahedronVertexList) {
    faces.add(points.length);
    faces.add(IcosahedronVertexList.length);
    points.add(pos + (v * range));
  }
  points.add(pos);

  // Faces
  for (Face3 f in IcosahedronFaceList) {
    faces.add(f.a);
    faces.add(f.b);
    faces.add(f.b);
    faces.add(f.c);
    faces.add(f.c);
    faces.add(f.a);
  }

  MeshData md = new MeshData("pointlight", gl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  md.AddFaces(faces);
  return md;
}
*/
MeshData PointLightVisualizer(ChronosGL cgl, VM.Vector3 pos, double range) {
  List<VM.Vector3> points = [];
  List<int> faces = [];
  // Rays from center
  for (VM.Vector3 v in IcosahedronVertexList) {
    faces.add(points.length);
    faces.add(IcosahedronVertexList.length);
    points.add(pos + (v * range));
  }
  points.add(pos);
  MeshData md = EmptyLightVisualizer(cgl, "pointLightViz");
  md.ChangeVertices(FlattenVector3List(points));
  md.ChangeFaces(faces);
  return md;
}
