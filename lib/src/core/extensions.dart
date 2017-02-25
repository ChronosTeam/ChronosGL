part of core;

// TODO: use proper return type
dynamic GetGlExtensionAnisotropic(ChronosGL cgl) {
  var ext;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = cgl.gl.getExtension(prefix + "EXT_texture_filter_anisotropic");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionAnisotropic NOT SUPPORTED");
  }
  return ext;
}

// TODO: use proper return type
dynamic GetGlExtensionStandardDerivatives(ChronosGL cgl) {
  var ext = cgl.gl.getExtension("OES_standard_derivatives");
  if (ext == null) {
    LogWarn("ExtensionStandardDerivative NOT SUPPORTED");
  }
  return ext;
}

const int kNoAnisotropicFilterLevel = 1;

int MaxAnisotropicFilterLevel(ChronosGL cgl) {
  var ext = GetGlExtensionAnisotropic(cgl);
  if (ext == null) {
    return kNoAnisotropicFilterLevel;
  }
  return cgl.gl.getParameter(
      WEBGL.ExtTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
}


List GetSupportedExtensions(ChronosGL cgl) {
  return cgl.gl.getSupportedExtensions();
}
