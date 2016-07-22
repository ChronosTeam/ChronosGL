part of chronosgl;

Vector p1 = new Vector();
Vector p2 = new Vector();

MeshData createTorusKnotInternal(
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0}) {
  MeshData md = new MeshData();
  md.name = "torusknot";
  md.EnableAttribute(aTextureCoordinates);

  List<Vector> vertices = [];

  Vector tang = new Vector();
  Vector n = new Vector();
  Vector bitan = new Vector();
  List<List<int>> grid = new List<List<int>>(segmentsR);

  for (int i = 0; i < segmentsR; ++i) {
    grid[i] = new List<int>(segmentsT);

    double u = i / segmentsR * 2 * p * Math.PI;
    getTorusKnotPos(u, q, p, radius, heightScale, p1);
    getTorusKnotPos(u + 0.02, q, p, radius, heightScale, p2);

    tang.x = p2.x - p1.x;
    tang.y = p2.y - p1.y;
    tang.z = p2.z - p1.z;
    n.x = p2.x + p1.x;
    n.y = p2.y + p1.y;
    n.z = p2.z + p1.z;

    bitan..cross2(tang, n)..normalize();
    n..cross2(bitan, tang)..normalize();

    for (int j = 0; j < segmentsT; ++j) {
      double v = j / segmentsT * 2 * Math.PI;
      double cx, cy;

      cx = tube * Math.cos(v); // TODO: Hack: Negating it so it faces outside.
      cy = tube * Math.sin(v);

      vertices.add(new Vector(p1.x + cx * n.x + cy * bitan.x,
          p1.y + cx * n.y + cy * bitan.y, p1.z + cx * n.z + cy * bitan.z));

      grid[i][j] = vertices.length - 1;
    }
  }

  for (var i = 0; i < segmentsR; ++i) {
    for (var j = 0; j < segmentsT; ++j) {
      int ip = (i + 1) % segmentsR;
      int jp = (j + 1) % segmentsT;
      int a = grid[i][j];
      int b = grid[ip][j];
      int c = grid[ip][jp];
      int d = grid[i][jp];

      VM.Vector2 uva = new VM.Vector2(i / segmentsR, j / segmentsT);
      VM.Vector2 uvb = new VM.Vector2((i + 1) / segmentsR, j / segmentsT);
      VM.Vector2 uvc = new VM.Vector2((i + 1) / segmentsR, (j + 1) / segmentsT);
      VM.Vector2 uvd = new VM.Vector2(i / segmentsR, (j + 1) / segmentsT);

      //uva[0] = 0; uva[1] = 0;
      //uvb[0] = 1; uvb[1] = 0;
      //uvc[0] = 1; uvc[1] = 1;
      //uvd[0] = 0; uvd[1] = 1;
      /*
      uva[0] = 0.0;
      uvb[0] = 1.0;
      uvc[0] = 1.0;
      uvd[0] = 0.0;
*/
      md.AddFaces4(1);
      md.AddVertices([vertices[a], vertices[b], vertices[c], vertices[d]]);
      md.AddAttributesVector2(aTextureCoordinates, [uva, uvb, uvc, uvd]);
      /*
      uvs.addAll(uva);
      uvs.addAll(uvb);
      uvs.addAll(uvc);

      uvs.addAll(uvd);
      uvs.addAll(uvc);
      uvs.addAll(uvb);
       */
    }
  }

  return md;
}

Vector getTorusKnotPos(double u, int in_q, int in_p, double radius,
    double heightScale, Vector vec) {
  double cu = Math.cos(u);
  double su = Math.sin(u);
  double quOverP = in_q / in_p * u;
  double cs = Math.cos(quOverP);

  vec.x = radius * (2 + cs) * 0.5 * cu;
  vec.y = radius * (2 + cs) * su * 0.5;
  vec.z = heightScale * radius * Math.sin(quOverP) * 0.5;

  return vec;
}
