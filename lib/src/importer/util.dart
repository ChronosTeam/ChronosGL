part of importer;

List<VM.Vector3> ConvertToVector3List(List<num> lst) {
  List<VM.Vector3> out = new List<VM.Vector3>(lst.length ~/ 3);
  for (int i = 0; i < lst.length; i += 3) {
    //print("${lst[i + 0]}  ${lst[i + 1]}  ${lst[i + 2]}");
    out[i ~/ 3] = new VM.Vector3(
        lst[i + 0].toDouble(), lst[i + 1].toDouble(), lst[i + 2].toDouble());
  }
  return out;
}

List<VM.Vector2> ConvertToVector2List(List<num> lst) {
  List<VM.Vector2> out = new List<VM.Vector2>(lst.length ~/ 2);
  for (int i = 0; i < lst.length; i += 2) {
    out[i ~/ 2] = new VM.Vector2(lst[i + 0].toDouble(), lst[i + 1].toDouble());
  }
  return out;
}

List<VM.Vector4> ConvertToVector4List(int nFill, List<double> lst) {
  List<VM.Vector4> out = new List<VM.Vector4>(lst.length ~/ nFill);
  for (int i = 0, pos = 0; i < lst.length; i += nFill, pos++) {
    VM.Vector4 v = new VM.Vector4.zero();
    for (int x = 0; x < nFill; ++x) {
      v[x] = lst[i + x].toDouble();
    }
    out[pos] = v;
  }
  return out;
}

VM.Vector3 MakeVector3(List<num> lst) {
  return new VM.Vector3(
      lst[0].toDouble(), lst[1].toDouble(), lst[2].toDouble());
}

VM.Vector3 MakeTransVector3(List<num> lst) {
  if (lst == null) return new VM.Vector3.zero();
  return MakeVector3(lst);
}

VM.Vector3 MakeScaleVector3(List<num> lst) {
  if (lst == null) return new VM.Vector3(1.0, 1.0, 1.0);
  return MakeVector3(lst);
}

VM.Quaternion MakeQuaternion(List<num> lst) {
  if (lst == null) return new VM.Quaternion.identity();

  return new VM.Quaternion(lst[0].toDouble(), lst[1].toDouble(),
      lst[2].toDouble(), lst[3].toDouble());
}