/*
  This code was heavily inspired by:
  John McCutchan's implementation in the spectre engine.
*/

part of animation;

/// Bone.
class Bone {
  final String boneName;
  final VM.Matrix4 localTransform;
  final VM.Matrix4 offsetTransform;
  final List<Bone> children = new List<Bone>();
  final int boneIndex;

  Bone(
      this.boneName, this.boneIndex, this.localTransform, this.offsetTransform);
}

/// Skeleton ready to be used for skinning.
class PosedSkeleton {
  // one for each bone
  final List<VM.Matrix4> globalTransforms;
  final List<VM.Matrix4> skinningTransforms;

  PosedSkeleton(int length)
      : globalTransforms = new List<VM.Matrix4>(length),
        skinningTransforms = new List<VM.Matrix4>(length) {
    for (int i = 0; i < length; i++) {
      globalTransforms[i] = new VM.Matrix4.zero();
      skinningTransforms[i] = new VM.Matrix4.zero();
    }
  }
}

class SkeletonPoser {
  final VM.Matrix4 _scratchMatrix = new VM.Matrix4.zero();

  void _updateMatrices(Bone bone, BoneAnimation boneAnimation, double t,
      VM.Matrix4 parentTransform, VM.Matrix4 globalTransform) {
    VM.Matrix4 transform = _scratchMatrix;
    if (boneAnimation != null) {
      boneAnimation.setBoneMatrixAtTick(t, transform);
    } else {
      transform = bone.localTransform;
    }
    // globalTransform = parentTransform * nodeTransform;
    // TODO: use "multiply into" if available
    globalTransform.setFrom(parentTransform);
    globalTransform.multiply(transform);
  }

  void _updateGlobalTransform(Bone bone, VM.Matrix4 parentTransform,
      SkeletonAnimation animation, PosedSkeleton posedSkeleton, double t) {
    final int boneIndex = bone.boneIndex;
    final VM.Matrix4 globalTransform =
        posedSkeleton.globalTransforms[boneIndex];
    _updateMatrices(bone, animation.animList[boneIndex], t, parentTransform,
        globalTransform);

    // recurse
    for (int i = 0; i < bone.children.length; i++) {
      Bone childBone = bone.children[i];
      _updateGlobalTransform(
          childBone, globalTransform, animation, posedSkeleton, t);
    }
  }

  void _updateSkinningTransform(PosedSkeleton posedSkeleton,
      List<Bone> skeleton, VM.Matrix4 globalOffsetTransform) {
    for (int i = 0; i < skeleton.length; i++) {
      final VM.Matrix4 skinningTransform = posedSkeleton.skinningTransforms[i];

      //  skinningTransform = skeleton.globalOffsetTransform *
      //                          globalTransform * offsetTransform
      // TODO: use "multiply into" if available
      skinningTransform.setFrom(globalOffsetTransform);
      skinningTransform.multiply(posedSkeleton.globalTransforms[i]);
      skinningTransform.multiply(skeleton[i].offsetTransform);
    }
  }

  void pose(List<Bone> skeleton, VM.Matrix4 globalOffsetTransform,
      SkeletonAnimation animation, PosedSkeleton posedSkeleton, double t) {
    VM.Matrix4 parentTransform = new VM.Matrix4.identity();
    _updateGlobalTransform(
        skeleton[0], parentTransform, animation, posedSkeleton, t);
    _updateSkinningTransform(posedSkeleton, skeleton, globalOffsetTransform);
  }
}

/// Key frame animation data for a single bone in a skeleton.
class BoneAnimation {
  final int boneIndex;

  List<double> _positionTimes;
  List<VM.Vector3> _positionValues;
  List<double> _rotationTimes;
  List<VM.Quaternion> _rotationValues;
  List<double> _scaleTimes;
  List<VM.Vector3> _scaleValues;

  /// Construct bone animation with [boneName]. Animation key frames
  /// will be loaded from [positions], [rotations], and [scales].
  BoneAnimation(
      this.boneIndex,
      this._positionTimes,
      this._positionValues,
      this._rotationTimes,
      this._rotationValues,
      this._scaleTimes,
      this._scaleValues) {
    if (_positionTimes == null || _positionTimes.length == 0) {
      _positionTimes = [0.0];
      _positionValues = [new VM.Vector3(0.0, 0.0, 0.0)];
    }

    if (_rotationTimes == null || _rotationTimes.length == 0) {
      _rotationTimes = [0.0];
      _rotationValues = [new VM.Quaternion(0.0, 0.0, 0.0, 1.0)];
    }

    if (_scaleTimes == null || _scaleTimes.length == 0) {
      _scaleTimes = [0.0];
      _scaleValues = [new VM.Vector3(1.0, 1.0, 1.0)];
    }

    assert(_rotationTimes.length > 0);
    assert(_positionTimes.length > 0);
    assert(_scaleTimes.length > 0);
    assert(_rotationTimes.length == _rotationValues.length);
    assert(_positionTimes.length == _positionValues.length);
    assert(_scaleTimes.length == _scaleValues.length);
  }

  static int _findTime(List<double> timeList, double t) {
    for (int i = 0; i < timeList.length - 1; i++) {
      if (t < timeList[i + 1]) {
        return i;
      }
    }
    return 0;
  }

  /// Set [boneMatrix] to correspond to bone animation at time [t].
  /// Does not interpolate between key frames.
  void setBoneMatrixAtTick(double tick, VM.Matrix4 boneMatrix) {
    final int scaleIndex = _findTime(_scaleTimes, tick);
    assert(scaleIndex >= 0);
    final int positionIndex = _findTime(_positionTimes, tick);
    assert(positionIndex >= 0);
    final int rotationIndex = _findTime(_rotationTimes, tick);
    assert(rotationIndex >= 0);
    VM.Vector3 s = _scaleValues[scaleIndex];
    VM.Vector3 t = _positionValues[positionIndex];
    VM.Quaternion r = _rotationValues[rotationIndex];
    boneMatrix.setFromTranslationRotationScale(t, r, s);
  }
}

/// Key frame animation data for an entire skeleton.
class SkeletonAnimation {
  final String name;
  final List<BoneAnimation> animList;
  final double duration;

  SkeletonAnimation(
      this.name, this.duration, int length)
      : animList = new List<BoneAnimation>(length);

  void InsertBone(BoneAnimation ba) {
    assert(animList[ba.boneIndex] == null);
    animList[ba.boneIndex] = ba;
  }
}
