part of core;

// TODO: use proper return type
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

// TODO: use proper return type
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


List GetSupportedExtensions(WEBGL.RenderingContext gl) {
  return gl.getSupportedExtensions();
}
