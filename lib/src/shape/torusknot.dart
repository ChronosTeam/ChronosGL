part of shape;

VM.Vector3 getTorusKnotPos(double u, int in_q, int in_p, double radius,
    double heightScale, VM.Vector3 vec) {
  double cu = Math.cos(u);
  double su = Math.sin(u);
  double quOverP = in_q / in_p * u;
  double cs = Math.cos(quOverP);

  vec.x = radius * (2 + cs) * 0.5 * cu;
  vec.y = radius * (2 + cs) * su * 0.5;
  vec.z = heightScale * radius * Math.sin(quOverP) * 0.5;

  return vec;
}

List<List<VM.Vector3>> TorusKnotVertexBands(
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0}) {
  List<List<VM.Vector3>> vertices = [];
  VM.Vector3 p1 = new VM.Vector3.zero();
  VM.Vector3 p2 = new VM.Vector3.zero();

  VM.Vector3 tang = new VM.Vector3.zero();
  VM.Vector3 n = new VM.Vector3.zero();
  VM.Vector3 bitan = new VM.Vector3.zero();

  for (int i = 0; i < segmentsR; ++i) {
    List<VM.Vector3> band = [];
    vertices.add(band);

    double u = i / segmentsR * 2 * p * Math.PI;
    getTorusKnotPos(u, q, p, radius, heightScale, p1);
    getTorusKnotPos(u + 0.02, q, p, radius, heightScale, p2);

    tang.setFrom(p2);
    tang.sub(p1);

    n.setFrom(p2);
    n.add(p1);

    bitan = tang.cross(n)..normalize();
    n = bitan.cross(tang)..normalize();

    for (int j = 0; j < segmentsT; ++j) {
      double v = j / segmentsT * 2 * Math.PI;
      double cx =
          tube * Math.cos(v); // TODO: Hack: Negating it so it faces outside.
      double cy = tube * Math.sin(v);

      band.add(new VM.Vector3(p1.x + cx * n.x + cy * bitan.x,
          p1.y + cx * n.y + cy * bitan.y, p1.z + cx * n.z + cy * bitan.z));
    }
  }
  return vertices;
}

GeometryBuilder ShapeTorusKnotGeometry(
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool useQuads: true,
    bool computeNormals: true}) {
  List<List<VM.Vector3>> bands = TorusKnotVertexBands(
      radius: radius,
      tube: tube,
      segmentsR: segmentsR,
      segmentsT: segmentsT,
      p: p,
      q: q,
      heightScale: heightScale);

  GeometryBuilder gb = new GeometryBuilder();
  gb.EnableAttribute(aTexUV);

  for (int i = 0; i < segmentsR; ++i) {
    for (int j = 0; j < segmentsT; ++j) {
      final int ip = (i + 1) % segmentsR;
      final int jp = (j + 1) % segmentsT;
      final VM.Vector3 a = bands[i][j];
      final VM.Vector3 b = bands[ip][j];
      final VM.Vector3 c = bands[ip][jp];
      final VM.Vector3 d = bands[i][jp];

      final jp1 = j + 1;

     /*
      final ip1 = i + 1;
      VM.Vector2 uva = new VM.Vector2(i / segmentsR, j / segmentsT);
      VM.Vector2 uvb = new VM.Vector2(ip1 / segmentsR, j / segmentsT);
      VM.Vector2 uvc = new VM.Vector2(ip1 / segmentsR, jp1 / segmentsT);
      VM.Vector2 uvd = new VM.Vector2(i / segmentsR, jp1 / segmentsT);
      */

      VM.Vector2 uva = new VM.Vector2(0.0, j / segmentsT);
      VM.Vector2 uvb = new VM.Vector2(1.0, j / segmentsT);
      VM.Vector2 uvc = new VM.Vector2(1.0, jp1 / segmentsT);
      VM.Vector2 uvd = new VM.Vector2(0.0, jp1 / segmentsT);

      if (useQuads) {
        gb.AddFaces4(1);
        gb.AddVertices([d, c, b, a]);
        gb.AddAttributesVector2(aTexUV, [uva, uvb, uvc, uvd]);
      } else {
        gb.AddFaces3(2);
        gb.AddVertices([a, b, c]);
        gb.AddVertices([a, c, d]);
        // TODO: explain why this choice of uvs is more appealing
        gb.AddAttributesVector2(aTexUV, [uva, uvb, uvc]);
        gb.AddAttributesVector2(aTexUV, [uvd, uvc, uvb]);
        //gb.AddAttributesVector2(aTexUV, [uva, uvc, uvd]);
      }
    }
  }
  if (computeNormals) gb.GenerateNormalsAssumingTriangleMode();
  return gb;
}

// this class lets a Camera fly through a TorusKnot like through a tunnel
class TorusKnotCamera extends Camera {
  TorusKnotCamera() : super("camera:torusknot");

  VM.Vector3 p1 = new VM.Vector3.zero();
  VM.Vector3 p2 = new VM.Vector3.zero();

  int p = 2;
  int q = 3;
  double radius = 20.0;

  double time = 0.0;
  VM.Vector3 up = new VM.Vector3.zero();

  void animate(double elapsed) {
    time += elapsed;
    getTorusKnotPos(time / 1500, q, p, radius, 1.0, p1);
    getTorusKnotPos((time / 1500) + 0.1, q, p, radius, 1.0, p2);
    up
      ..setFrom(p2)
      ..normalize();
    setPosFromVec(p1);
    lookAt(p2);
  }
}
