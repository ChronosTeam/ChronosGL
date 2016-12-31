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

  void _updateMatrices(Bone bone, BoneAnimation boneAnimation, int t,
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
      SkeletonAnimation animation, PosedSkeleton posedSkeleton, int t) {
    final int boneIndex = bone.boneIndex;
    final VM.Matrix4 globalTransform =
        posedSkeleton.globalTransforms[boneIndex];
    _updateMatrices(bone, animation.animList[boneIndex], t, parentTransform,
        globalTransform);

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
      SkeletonAnimation animation, PosedSkeleton posedSkeleton, int t) {
    VM.Matrix4 parentTransform = new VM.Matrix4.identity();
    _updateGlobalTransform(
        skeleton[0], parentTransform, animation, posedSkeleton, t);
    _updateSkinningTransform(posedSkeleton, skeleton, globalOffsetTransform);
  }
}

/// Key frame animation data for a single bone in a skeleton.
class BoneAnimation {
  final String boneName;
  final int boneIndex;

  List<int> _positionTimes;
  List<VM.Vector4> _positionValues;
  List<int> _rotationTimes;
  List<VM.Vector4> _rotationValues;
  List<int> _scaleTimes;
  List<VM.Vector4> _scaleValues;

  final VM.Matrix4 _positionMatrix = new VM.Matrix4.zero();
  final VM.Matrix4 _rotationMatrix = new VM.Matrix4.zero();
  final VM.Matrix4 _scaleMatrix = new VM.Matrix4.zero();

  /// Construct bone animation with [boneName]. Animation key frames
  /// will be loaded from [positions], [rotations], and [scales].
  BoneAnimation(
      this.boneName,
      this.boneIndex,
      this._positionTimes,
      this._positionValues,
      this._rotationTimes,
      this._rotationValues,
      this._scaleTimes,
      this._scaleValues) {
    if (_positionTimes == null || _positionTimes.length == 0) {
      setNoPositionAnimation();
    }

    if (_rotationTimes == null || _rotationTimes.length == 0) {
      setNoRotationAnimation();
    }
    if (_scaleTimes == null || _scaleTimes.length == 0) {
      setNoScaleAnimation();
    }

    assert(_rotationTimes.length > 0);
    assert(_positionTimes.length > 0);
    assert(_scaleTimes.length > 0);
    assert(_rotationTimes.length == _rotationValues.length);
    assert(_positionTimes.length == _positionValues.length);
    assert(_scaleTimes.length == _scaleValues.length);
  }

  /// Makes bone have no position animation.
  void setNoPositionAnimation() {
    _positionTimes = [0];
    _positionValues = [new VM.Vector4(0.0, 0.0, 0.0, 0.1)];
  }

  /// Makes bone have no rotation animation.
  void setNoRotationAnimation() {
    _rotationTimes = [0];
    _rotationValues = [new VM.Vector4(0.0, 0.0, 0.0, 1.0)];
  }

  /// Makes bone have no scale animation.
  void setNoScaleAnimation() {
    _scaleTimes = [0];
    _scaleValues = [new VM.Vector4(1.0, 1.0, 1.0, 1.0)];
  }

  static int _findTime(List<int> timeList, int t) {
    for (int i = 0; i < timeList.length - 1; i++) {
      if (t < timeList[i + 1]) {
        return i;
      }
    }
    return 0;
  }

  void _buildScaledMatrixAtTick(int t) {
    final int scaleIndex = _findTime(_scaleTimes, t);
    assert(scaleIndex >= 0);
    _scaleMatrix[0] = _scaleValues[scaleIndex].x;
    _scaleMatrix[5] = _scaleValues[scaleIndex].y;
    _scaleMatrix[10] = _scaleValues[scaleIndex].z;
    _scaleMatrix[15] = 1.0;
  }

  void _buildPositionMatrixAtTick(int t) {
    final int positionIndex = _findTime(_positionTimes, t);
    assert(positionIndex >= 0);
    _positionMatrix[0] = 1.0;
    _positionMatrix[5] = 1.0;
    _positionMatrix[10] = 1.0;
    _positionMatrix[12] = _positionValues[positionIndex].x;
    _positionMatrix[13] = _positionValues[positionIndex].y;
    _positionMatrix[14] = _positionValues[positionIndex].z;
    _positionMatrix[15] = 1.0;
  }

  void _buildRotationMatrixAtTick(int t) {
    final int rotationIndex = _findTime(_rotationTimes, t);
    assert(rotationIndex >= 0);

    double x = _rotationValues[rotationIndex].x;
    double y = _rotationValues[rotationIndex].y;
    double z = _rotationValues[rotationIndex].z;
    double w = _rotationValues[rotationIndex].w;
    double x2 = x + x;
    double y2 = y + y;
    double z2 = z + z;

    double xx = x * x2;
    double xy = x * y2;
    double xz = x * z2;
    double yy = y * y2;
    double yz = y * z2;
    double zz = z * z2;
    double wx = w * x2;
    double wy = w * y2;
    double wz = w * z2;

    _rotationMatrix[0] = 1.0 - (yy + zz);
    _rotationMatrix[1] = xy + wz;
    _rotationMatrix[2] = xz - wy;
    _rotationMatrix[4] = xy - wz;
    _rotationMatrix[5] = 1.0 - (xx + zz);
    _rotationMatrix[6] = yz + wx;
    _rotationMatrix[8] = xz + wy;
    _rotationMatrix[9] = yz - wx;
    _rotationMatrix[10] = 1.0 - (xx + yy);
    _rotationMatrix[15] = 1.0;
  }

  /// Set [boneMatrix] to correspond to bone animation at time [t].
  /// Does not interpolate between key frames.
  void setBoneMatrixAtTick(int t, VM.Matrix4 boneMatrix) {
    _buildRotationMatrixAtTick(t);
    _buildScaledMatrixAtTick(t);
    _buildPositionMatrixAtTick(t);
    // boneMatrix =  _positionMatrix * _scaleMatrix * _rotationMatrix
    // TODO: use "multiply into" if available
    boneMatrix.setFrom(_positionMatrix);
    boneMatrix.multiply(_scaleMatrix);
    boneMatrix.multiply(_rotationMatrix);
  }
}

/// Key frame animation data for an entire skeleton.
class SkeletonAnimation {
  final String name;
  final List<BoneAnimation> animList;
  final int durationInTicks;
  final int ticksPerSec;

  SkeletonAnimation(
      this.name, this.durationInTicks, this.ticksPerSec, int length)
      : animList = new List<BoneAnimation>(length);

  void InsertBone(BoneAnimation ba) {
    assert(animList[ba.boneIndex] == null);
    animList[ba.boneIndex] = ba;
  }
}
