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
  final int boneIndex;
  final int parentNum;

  Bone(this.boneName, this.boneIndex, this.parentNum, this.localTransform,
      this.offsetTransform) {
    assert(boneIndex > parentNum);
  }
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

void PoseSkeleton(List<Bone> skeleton, VM.Matrix4 globalOffsetTransform,
    SkeletonAnimation animation, PosedSkeleton posedSkeleton, double time) {
  VM.Matrix4 parentTransform = new VM.Matrix4.identity();
  VM.Matrix4 tmp = new VM.Matrix4.zero();
  for (int i = 0; i < skeleton.length; i++) {
    Bone bone = skeleton[i];
    VM.Matrix4 t = posedSkeleton.globalTransforms[i];
    if (i == 0) {
      t.setIdentity();
    } else {
      t.setFrom(posedSkeleton.globalTransforms[bone.parentNum]);
    }

    BoneAnimation a = animation.animList[i];
    if (a != null) {
      a.setBoneMatrixAtTick(time, tmp);
      t.multiply(tmp);
    } else {
      t.multiply(bone.localTransform);
    }
  }

  for (int i = 0; i < skeleton.length; i++) {
    final VM.Matrix4 t = posedSkeleton.skinningTransforms[i];
    //  skinningTransform = skeleton.globalOffsetTransform *
    //                          globalTransform * offsetTransform
    // TODO: use "multiply into" if available
    t.setFrom(globalOffsetTransform);
    t.multiply(posedSkeleton.globalTransforms[i]);
    t..multiply(skeleton[i].offsetTransform);
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

  SkeletonAnimation(this.name, this.duration, int length)
      : animList = new List<BoneAnimation>(length);

  void InsertBone(BoneAnimation ba) {
    assert(animList[ba.boneIndex] == null);
    animList[ba.boneIndex] = ba;
  }
}

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

List<VM.Vector3> BonePosFromPosedSkeleton(
    List<Bone> bones, PosedSkeleton posed) {
  List<VM.Vector3> out = [];

  for (int i = 1; i < bones.length; ++i) {
    final int parent = bones[i].parentNum;

    out.add(posed.globalTransforms[i].getTranslation());
    out.add(posed.globalTransforms[parent].getTranslation());
  }
  print("skeleton bone ${out.length}");
  return out;
}
