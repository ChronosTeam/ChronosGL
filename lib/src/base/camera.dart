part of base;

/// ## Class Camera (is a Spatial)
/// provides helpers to set up a view matrix.
class Camera extends Spatial {
  Camera(String name) : super(name);
  // Get the model view matrix.  This overwrites the content of parameter m.
  // The view matrix is the inverse of the camera’s transformation matrix
  // in world-space.
  void getViewMatrix(VM.Matrix4 m) {
    // why does this seem to be already inverted/transposed ?
    m.setFrom(transform);
    m[12] = 0.0;
    m[13] = 0.0;
    m[14] = 0.0;
    m[15] = 1.0;
    // The eye position is negated which is equivalent to the inverse of the translation matrix: T(v)^-1 == T(-v)
    // T = translation matrix, v = eye position.
    // short cut for rotationMatrixInverted * translationMatrixInverted,
    // see http://3dgep.com/understanding-the-view-matrix/#Look_At_Camera
    m.translate(-transform[12], -transform[13], -transform[14]);
  }

  VM.Vector3 getEyePosition() {
    return new VM.Vector3(transform[12], transform[13], transform[14]);
  }
}
