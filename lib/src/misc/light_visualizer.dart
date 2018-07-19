part of misc;

MeshData EmptyLightVisualizer(RenderProgram prog, String name) {
  MeshData md = prog.MakeMeshData(name, GL_LINES);
  md.AddVertices(Float32List(3));
  md.AddFaces([0, 0]);
  return md;
}

void UpdateDirectionalLightVisualizer(
    MeshData md, double dim, double delta, VM.Vector3 dir) {
  if (dir.y == 0.0) {
    return;
  }
  final double d = dim * 0.5;
  final double end = delta * (d / delta).floor();
  final double start = -end;
  final VM.Vector3 dir2y = dir * d / dir.y;
  List<VM.Vector3> points = [];
  for (double x = start; x <= end; x += delta) {
    for (double z = start; z <= end; z += delta) {
      // we have an intersection  point with xz plane, now get the
      // intersection with the top and bottom face of the cube
      points.add(VM.Vector3(x, 0.0, z)..add(dir2y));
      points.add(VM.Vector3(x, 0.0, z)..sub(dir2y));
    }
  }
  for (int i = 0; i < 8; ++i) {
    int x = ((i & 1) == 1) ? 1 : -1;
    int y = ((i & 2) == 2) ? 1 : -1;
    int z = ((i & 4) == 4) ? 1 : -1;
    if (x > 0) {
      points.add(VM.Vector3(x * d, y * d, z * d));
      points.add(VM.Vector3(-x * d, y * d, z * d));
    }
    if (y > 0) {
      points.add(VM.Vector3(x * d, y * d, z * d));
      points.add(VM.Vector3(x * d, -y * d, z * d));
    }
    if (z > 0) {
      points.add(VM.Vector3(x * d, y * d, z * d));
      points.add(VM.Vector3(x * d, y * d, -z * d));
    }
  }

  md.ChangeVertices(FlattenVector3List(points));
  List<int> faces = List<int>(points.length);
  for (int i = 0; i < points.length; ++i) faces[i] = i;
  md.ChangeFaces(faces);
}

VM.Vector3 GetOrthogonalVector3(VM.Vector3 dir) {
  if (dir.x != 0.0) {
    if (dir.y != 0.0) return VM.Vector3(-dir.y, dir.x, 0.0);
    if (dir.z != 0.0) return VM.Vector3(-dir.z, 0.0, dir.x);
    return VM.Vector3(0.0, 1.0, 1.0);
  } else {
    if (dir.y == 0.0) return VM.Vector3(1.0, 1.0, 0.0);
    if (dir.z == 0.0) return VM.Vector3(1.0, 0.0, 1.0);
    return VM.Vector3(0.0, -dir.z, dir.y);
  }
}

void UpdateSpotLightVisualizer(
    MeshData md, VM.Vector3 pos, VM.Vector3 dir, double range, double angle) {
  final int kSpines = 8;
  VM.Vector3 center = pos + dir.normalized() * range;
  List<VM.Vector3> points = [pos, center];
  VM.Vector3 ortho = GetOrthogonalVector3(dir)
    ..normalize()
    ..scale(Math.tan(angle) * range);
  for (int i = 0; i < kSpines; i++) {
    VM.Vector3 p = ortho.clone()
      ..applyAxisAngle(dir, i * 2.0 * Math.pi / kSpines)
      ..add(center);
    points.add(p);
  }
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
  md.ChangeVertices(FlattenVector3List(points));
  md.ChangeFaces(faces);
}

void UpdatePointLightVisualizer2(MeshData md, VM.Vector3 pos, double range) {
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

  md.AddVertices(FlattenVector3List(points));
  md.ChangeFaces(faces);
}

void UpdatePointLightVisualizer(MeshData md, VM.Vector3 pos, double range) {
  List<VM.Vector3> points = [];
  List<int> faces = [];
  // Rays from center
  for (VM.Vector3 v in IcosahedronVertexList) {
    faces.add(points.length);
    faces.add(IcosahedronVertexList.length);
    points.add(pos + (v * range));
  }
  points.add(pos);
  md.ChangeVertices(FlattenVector3List(points));
  md.ChangeFaces(faces);
}

void UpdateLightVisualizer(MeshData md, Light light) {
  if (light is DirectionalLight) {
    DirectionalLight dl = light;
    UpdateDirectionalLightVisualizer(md, dl.dim, dl.dim / 4, dl.dir);
  } else if (light is SpotLight) {
    SpotLight sl = light;
    UpdateSpotLightVisualizer(md, sl.pos, sl.dir, sl.range, sl.angle);
  } else if (light is PointLight) {
    PointLight pl = light;
    UpdatePointLightVisualizer(md, pl.pos, pl.range);
  } else {
    assert(false, "unknown light: ${light.runtimeType}");
  }
}

MeshData LightVisualizer(RenderProgram prog, Light light) {
  MeshData md = EmptyLightVisualizer(prog, "dirLightViz");
  UpdateLightVisualizer(md, light);
  return md;
}
