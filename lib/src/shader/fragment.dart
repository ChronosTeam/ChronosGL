part of chronosshader;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);";

const String NullVertexBody = "gl_Position = vec4(${aVertexPosition}, 1.0);";
