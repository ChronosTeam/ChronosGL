part of misc;

List<VM.Vector3> BonePosFromSkeleton(List<Bone> bones) {
  List<VM.Vector3> out = [];

  for (int i = 1; i < bones.length; ++i) {
    final Bone a = bones[i];
    final Bone b = bones[a.parentNum];

    out.add(a.localTransform.getTranslation());
    out.add(b.localTransform.getTranslation());
  }
  print("skeleton bone ${out.length}");
  return out;
}

List<VM.Vector3> BonePosFromAnimatedSkeleton(
    List<Bone> bones, AnimatedSkeleton posed,
    {double scale = 1.0}) {
  List<VM.Vector3> out = [];

  for (int i = 0; i < bones.length; ++i) {
    final int parent = bones[i].parentNum;
    if (parent == -1) continue;
    out.add(posed.globalTransforms[i].getTranslation() * scale);
    out.add(posed.globalTransforms[parent].getTranslation() * scale);
  }
  //print("skeleton bone ${out.length}");
  return out;
}

class BoneVisualizer {
  BoneVisualizer(RenderProgram prog, Material mat, this._skeleton, this._anim) {
    _animatedSkeleton = AnimatedSkeleton(_skeleton.length);
    UpdateAnimatedSkeleton(
        _skeleton, _globalOffsetTransform, _anim, _animatedSkeleton, 0.0);
    _mdWire = LineEndPointsToMeshData("wire", prog,
        BonePosFromAnimatedSkeleton(_skeleton, _animatedSkeleton));
    mesh = Node(_mdWire.name, _mdWire, mat);
  }

  VM.Matrix4 _globalOffsetTransform = VM.Matrix4.identity();
  MeshData _mdWire;
  List<Bone> _skeleton;
  SkeletalAnimation _anim;
  AnimatedSkeleton _animatedSkeleton;

  Node mesh;

  void Update(double time) {
    UpdateAnimatedSkeleton(_skeleton, _globalOffsetTransform, _anim,
        _animatedSkeleton, time % _anim.duration);
    List<VM.Vector3> bonePos =
        BonePosFromAnimatedSkeleton(_skeleton, _animatedSkeleton);
    _mdWire.ChangeVertices(FlattenVector3List(bonePos));
  }
}
