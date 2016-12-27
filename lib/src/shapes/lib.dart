library shapes;

import 'dart:math' as Math;
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:web_gl' as WEBGL;

import '../core/lib.dart';

part "shapes.dart";
part "cylinder.dart";
part "cube.dart";
part "torusknot.dart";
part "icosahedron.dart";

MeshData ShapeCube(WEBGL.RenderingContext gl,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
  GeometryBuilder gb = CubeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("cube", gl, gb);
}

MeshData ShapeWedge(WEBGL.RenderingContext gl,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
  GeometryBuilder gb = WedgeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("wedge", gl, gb);
}

MeshData ShapeCylinder(WEBGL.RenderingContext gl, double radTop, double radBot,
    double height, int radialSubdivisions) {
  GeometryBuilder gb =
      CylinderGeometry(radTop, radBot, height, radialSubdivisions);
  return GeometryBuilderToMeshData("cylinder-${radialSubdivisions}", gl, gb);
}

MeshData ShapeIcosahedron(WEBGL.RenderingContext gl,
    [int subdivisions = 4, double scale = 1.0, bool computeNormals = true]) {
  GeometryBuilder gb = IcosahedronGeometry(subdivisions, scale, computeNormals);
  return GeometryBuilderToMeshData("icosahedron-${subdivisions}", gl, gb);
}

MeshData ShapeTorusKnot(WEBGL.RenderingContext gl,
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0}) {
  GeometryBuilder gb = ShapeTorusKnotGeometry(
      radius: radius,
      tube: tube,
      segmentsR: segmentsR,
      segmentsT: segmentsT,
      p: p,
      q: q,
      heightScale: heightScale);
  return GeometryBuilderToMeshData("torusknot", gl, gb);
}

MeshData ShapeQuad(WEBGL.RenderingContext gl, int size) {
  GeometryBuilder gb = QuadGeometry(size);
  return GeometryBuilderToMeshData("quad", gl, gb);
}