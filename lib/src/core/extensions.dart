part of core;

// FIXME: use proper type
dynamic GetGlExtensionDepth(WEBGL.RenderingContext gl) {
  var ext;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "WEBGL_depth_texture");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionDepth NOT SUPPORTED");
  }
  return ext;
}

// FIXME: use proper type
dynamic GetGlExtensionAnisotropic(WEBGL.RenderingContext gl) {
  var ext;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "EXT_texture_filter_anisotropic");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionAnisotropic NOT SUPPORTED");
  }
  return ext;
}

// FIXME: use proper type
dynamic GetGlExtensionStandardDerivatives(WEBGL.RenderingContext gl) {
  var ext = gl.getExtension("OES_standard_derivatives");
  if (ext == null) {
    LogWarn("ExtensionStandardDerivative NOT SUPPORTED");
  }
  return ext;
}

const int kNoAnisotropicFilterLevel = 1;

int MaxAnisotropicFilterLevel(WEBGL.RenderingContext gl) {
  var ext = GetGlExtensionAnisotropic(gl);
  if (ext == null) {
    return kNoAnisotropicFilterLevel;
  }
  return gl.getParameter(
      WEBGL.ExtTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
}

bool globalUseElementIndexUint = false;

dynamic UseElementIndexUint(WEBGL.RenderingContext gl) {
  var ext = gl.getExtension("OES_element_index_uint");
  if (ext == null) {
    throw "Error: OES_element_index_uint is not supported";
  }
  globalUseElementIndexUint = true;
}
