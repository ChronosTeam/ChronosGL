part of core;

/// provides helpers to set up a view matrix.
class Camera extends Spatial {
  Camera(String name) : super(name);
  // Get the model view matrix.  This overwrites the content of parameter m.
  // The view matrix is the inverse of the camera’s transformation matrix
  // in world-space.
  void getViewMatrix(VM.Matrix4 m) {
    m.setFrom(transform);
  }

  VM.Vector3 getEyePosition() {
    return VM.Vector3(transform[12], transform[13], transform[14]);
  }
}

