part of scene;

///  represents a simple scene graph.
///  Each scene is rendered by multiple invocation of a single RenderProgram
///  and contains additional UniformGroups to be passed to
///  that program at draw time.
class Scene extends NamedEntity {
  /// Scene initializes a scene
  ///
  /// @param name
  /// @param this.program
  /// @param unis
  Scene(String name, this.program, [List<UniformGroup>? unis])
      : uniforms = unis == null ? <UniformGroup>[] : unis,
        super(name);

  final RenderProgram program;
  final List<UniformGroup> uniforms;
  final List<Node> nodes = [];

  void add(Node node) {
    nodes.add(node);
  }

  void addAll(List<Node> nodes) {
    for (Node node in nodes) add(node);
  }

  void remove(Node n) {
    nodes.remove(n);
  }

  void removeAll() {
    nodes.clear();
  }
}

void drawRecursively(RenderProgram prog, Node node, final VM.Matrix4 parent,
    List<DrawStats>? stats, List<UniformGroup> uniforms) {
  if (!node.enabled) return;
  // m is read-only!
  final VM.Matrix4 m = node.UpdateModelMatrix(parent);
  if (node.SomethingToDraw()) {
    LogDebug("drawing: ${node}");
    node.UpdateTransforms(uniforms.last);
    uniforms.add(node.material);
    prog.Draw(node.meshData, uniforms, stats);
    uniforms.removeLast();
  }
  for (Node child in node.children) {
    drawRecursively(prog, child, m, stats, uniforms);
  }
}

/// represents a sequence of Scenes.
class RenderPhase extends NamedEntity {
  RenderPhase(String name, this._cgl, [Framebuffer? framebuffer])
      : _framebuffer =
            framebuffer != null ? framebuffer : Framebuffer.Screen(_cgl),
        super(name);

  late Framebuffer _framebuffer;
  final ChronosGL _cgl;
  final List<Scene> _scenes = <Scene>[];
  int _clear_mode = GL_CLEAR_ALL;

  int viewPortX = 0;
  int viewPortY = 0;
  int viewPortW = 0;
  int viewPortH = 0;

  Framebuffer get framebuffer => _framebuffer;

  void set clearColorBuffer(bool clear) {
    if (clear)
      _clear_mode |= GL_COLOR_BUFFER_BIT;
    else
      _clear_mode &= ~GL_COLOR_BUFFER_BIT;
  }

  void set clearDepthBuffer(bool clear) {
    if (clear)
      _clear_mode |= GL_DEPTH_BUFFER_BIT;
    else
      _clear_mode &= ~GL_DEPTH_BUFFER_BIT;
  }

  void set clearStencilBuffer(bool clear) {
    if (clear)
      _clear_mode |= GL_STENCIL_BUFFER_BIT;
    else
      _clear_mode &= ~GL_STENCIL_BUFFER_BIT;
  }

  void add(Scene s) {
    _scenes.add(s);
  }

  // Draw all scenes in order of registration
  void Draw([List<DrawStats>? stats]) {
    _framebuffer.Activate(
        _clear_mode, viewPortX, viewPortY, viewPortW, viewPortH);

    for (Scene scene in _scenes) {
      if (!scene.enabled) continue;
      if (!scene.program.enabled) continue;

      List<UniformGroup> uniforms = scene.uniforms;
      final UniformGroup transforms = UniformGroup("transforms");
      uniforms.add(transforms);
      final VM.Matrix4 modelMatrix = VM.Matrix4.identity();
      for (Node node in scene.nodes) {
        drawRecursively(scene.program, node, modelMatrix, stats, uniforms);
      }
      uniforms.removeLast();
    }
  }
}
