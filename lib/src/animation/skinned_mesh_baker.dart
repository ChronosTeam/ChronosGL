/*
  Copyright (C) 2013 John McCutchan <john@johnmccutchan.com>

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.
*/

library mesh_baker;

import 'dart:io';
import 'dart:typed_data';
import 'dart:convert';
import 'package:vector_math/vector_math.dart';

copyMatrix(List<double> dst, List src) {
  for (int i = 0; i < 16; i++) {
    dst[i] = src[i].toDouble();
  }
}

class ModelBone {
  final String name;
  final Float32List localTransform = new Float32List(16);
  final Float32List offsetTransform = new Float32List(16);
  final ModelBone parent;
  int boneIndex;
  final List<ModelBone> children = new List<ModelBone>();
  ModelBone(this.name, this.parent, this.boneIndex) {
    // Identity Matrix.
    localTransform[0] = 1.0;
    localTransform[5] = 1.0;
    localTransform[10] = 1.0;
    localTransform[15] = 1.0;
    // Identity Matrix.
    offsetTransform[0] = 1.0;
    offsetTransform[5] = 1.0;
    offsetTransform[10] = 1.0;
    offsetTransform[15] = 1.0;
  }
  bool animationBone = false;
  void clear() {
    children.clear();
  }

  dynamic toJson() {
    Map m = new Map();
    m['name'] = name;
    m['index'] = boneIndex;
    m['localTransform'] = localTransform;
    m['offsetTransform'] = offsetTransform;
    m['parent'] = parent.name;
    m['children'] = new List();
    children.forEach((c) {
      m['children'].add(c.name);
    });
    return m;
  }
  String toString() => '$boneIndex $localTransform $offsetTransform';

  dump(int depth) {
    String indent = '';
    for (int i = 0; i < depth; i++) {
      indent += ' ';
    }
    print('$indent $name $animationBone $boneIndex');
    children.forEach((c) => c.dump(depth+1));
  }
}

class MeshVertexBoneWeight {
  final String boneName;
  final double weight;
  MeshVertexBoneWeight(this.boneName, this.weight);

  String toString() => '$boneName $weight';
}

class MeshVertex {
  final Float32List position = new Float32List(4);
  final Float32List normal = new Float32List(4);
  final Float32List textureCoord = new Float32List(4);
  final List<MeshVertexBoneWeight> skinData = new List<MeshVertexBoneWeight>();
  MeshVertex() {
    position[3] = 1.0;
  }

  String toString() => '$position $normal $textureCoord $skinData';
}

class MeshVertexAttribute {
  final String name;
  final int offset;
  final int stride;
  final String format;
  MeshVertexAttribute(this.name, this.offset, this.stride, this.format);
  dynamic toJson() {
    Map attribute = new Map();
    attribute['name'] = name;
    attribute['offset'] = offset;
    attribute['stride'] = stride;
    attribute['format'] = format;
    return attribute;
  }
}

class MeshFace {
  final int i0;
  final int i1;
  final int i2;
  MeshFace(this.i0, this.i1, this.i2);
  String toString() => '$i0 $i1 $i2';
}

class Mesh {
  final List<MeshVertex> vertices = new List<MeshVertex>();
  final List<MeshFace> faces = new List<MeshFace>();
  final Float32List min = new Float32List(3);
  final Float32List max = new Float32List(3);
  int baseVertex = 0;
  int baseIndex = 0;
  int indexCount = 0;
  Mesh();

  dynamic toJson() {
    Map m = new Map();
    m['offset'] = baseIndex;
    m['count'] = indexCount;
    m['aabbMin'] = min;
    m['aabbMax'] = max;
    return m;
  }

  buildVertexData(List positions, List normals, List tangents, List bitangents,
                  List textureCoords) {
    int numVertices = positions.length~/3;

    int positionCursor = 0;
    int normalCursor = 0;
    int tangentCursor = 0;
    int bitangentCursor = 0;
    int textureCoordCursor = 0;

    for (int i = 0; i < numVertices; i++) {
      MeshVertex vertex = new MeshVertex();
      vertex.position[0] = positions[positionCursor++].toDouble();
      vertex.position[1] = positions[positionCursor++].toDouble();
      vertex.position[2] = positions[positionCursor++].toDouble();
      vertex.position[3] = 1.0;
      if (normals != null) {
        vertex.normal[0] = normals[normalCursor++].toDouble();
        vertex.normal[1] = normals[normalCursor++].toDouble();
        vertex.normal[2] = normals[normalCursor++].toDouble();
        vertex.normal[3] = 0.0;
      }
      if (textureCoords != null) {
        vertex.textureCoord[0] =
            textureCoords[0][textureCoordCursor++].toDouble();
        vertex.textureCoord[1] =
            textureCoords[0][textureCoordCursor++].toDouble();
        vertex.textureCoord[2] = 0.0;
        vertex.textureCoord[3] = 0.0;
      }
      vertices.add(vertex);
    }
    assert(vertices.length == numVertices);
  }

  buildIndexData(List indexArray) {
    for (int i = 0; i < indexArray.length; i++) {
      List indices = indexArray[i];
      MeshFace face = new MeshFace(indices[0], indices[1], indices[2]);
      faces.add(face);
    }
  }

  buildVertexBoneData(List bones) {
    if (bones == null) {
      return;
    }
    for (int i = 0; i < bones.length; i++) {
      Map bone = bones[i];
      String boneName = bone['name'];
      List weights = bone['weights'];
      if (boneName == null) {
        throw new ArgumentError('No boneName');
      }
      if (weights == null) {
        throw new ArgumentError('$boneName has no weights.');
      }
      for (int w = 0; w < weights.length; w++) {
        List weight = weights[w];
        int vertexIndex = weight[0];
        double s = weight[1].toDouble();
        MeshVertexBoneWeight boneWeight = new MeshVertexBoneWeight(boneName, s);
        vertices[vertexIndex].skinData.add(boneWeight);
        if (vertices[vertexIndex].skinData.length > 4) {
          throw new ArgumentError(
              'Vertex $vertexIndex has more than 4 bone influences. File a Spectre bug.');
        }
      }
    }
  }
}

class ModelBaker {
  final Map inputMesh;
  final Map<String, ModelBone> boneTable = new Map<String, ModelBone>();
  final ModelBone root = new ModelBone('root', null, -1);
  final List<Mesh> meshes = new List<Mesh>();
  final List<double> vertexBuffer = new List<double>();
  final List<int> indexBuffer = new List<int>();
  final Map<String, MeshVertexAttribute> attributes =
      new Map<String, MeshVertexAttribute>();
  final Map outputMesh = new Map();
  ModelBaker(this.inputMesh);

  clear() {
    root.clear();
    meshes.clear();
  }

  buildBoneNode(Map nodeDescription, ModelBone node) {
    copyMatrix(node.localTransform, nodeDescription['transformation']);
    Matrix4 LT = new Matrix4.zero();
    LT.copyFromArray(node.localTransform);
    LT.transpose();
    LT.copyIntoArray(node.localTransform);
    List children = nodeDescription['children'];
    if (children == null) {
      return;
    }
    children.forEach((cn) {
      String childName = cn['name'];
      if (boneTable[childName] != null) {
        throw new ArgumentError('Duplicate bone name $childName');
      }
      ModelBone childNode = new ModelBone(childName, node, boneTable.length);
      boneTable[childName] = childNode;
      node.children.add(childNode);
      buildBoneNode(cn, childNode);
    });
  }

  buildBones() {
    if (inputMesh['rootnode'] == null) {
      throw new ArgumentError('No rootnode.');
    }
    buildBoneNode(inputMesh['rootnode'], root);
  }

  fillOffsetTransforms() {
    List meshes = inputMesh['meshes'];
    if (meshes == null) {
      throw new ArgumentError('Could not find any meshes.');
    }
    for (int i = 0; i < meshes.length; i++) {
      List bones = meshes[i]['bones'];
      if (bones == null) {
        continue;
      }
      for (int b = 0; b < bones.length; b++) {
        String boneName = bones[b]['name'];
        ModelBone bone = boneTable[boneName];
        if (bone == null) {
          print('could not find $boneName');
          continue;
        }
        bone.animationBone = true;
        copyMatrix(bone.offsetTransform, bones[b]['offsetmatrix']);
        Matrix4 OT = new Matrix4.zero();
        OT.copyFromArray(bone.offsetTransform);
        OT.transpose();
        OT.copyIntoArray(bone.offsetTransform);
      }
    }
  }

  bool noAnimation(ModelBone bone) {
    if (bone.animationBone == true) {
      return false;
    }
    for (int i = 0; i < bone.children.length; i++) {
      bool r = noAnimation(bone.children[i]);
      if (!r) {
        return false;
      }
    }
    return true;
  }

  pruneBones(ModelBone node) {
    List toPrune = new List();
    for (int i = 0; i < node.children.length; i++) {
      if (noAnimation(node.children[i])) {
        toPrune.add(node.children[i]);
      }
      pruneBones(node.children[i]);
    }
    toPrune.forEach((p) {
      //print('Pruning ${p.name}');
      node.children.remove(p);
      boneTable.remove(p.name);
    });
  }

  int _reflowIndexCounter = -1;
  void reflow() {
    _reflowIndexCounter = -1;
    reflowNode(root);
  }
  void reflowNode(ModelBone node) {
    node.boneIndex = _reflowIndexCounter++;
    for (int i = 0; i < node.children.length; i++) {
      reflowNode(node.children[i]);
    }
  }

  buildVertexStreams() {
    List meshList = inputMesh['meshes'];
    if (meshes == null) {
      throw new ArgumentError('Could not find any meshes.');
    }
    int baseVertex = 0;
    int baseIndex = 0;
    for (int i = 0; i < meshList.length; i++) {
      List faces = meshList[i]['faces'];
      List positions = meshList[i]['vertices'];
      List normals = meshList[i]['normals'];
      List tangents = meshList[i]['tangents'];
      List bitangents = meshList[i]['bitangents'];
      List textureCoords = meshList[i]['texturecoords'];
      List bones = meshList[i]['bones'];
      if (positions == null) {
        throw new ArgumentError('No vertices.');
      }
      if (faces == null) {
        throw new ArgumentError('No faces.');
      }
      Mesh mesh = new Mesh();
      meshes.add(mesh);
      mesh.buildVertexData(positions, normals, tangents, bitangents,
                           textureCoords);
      mesh.buildIndexData(faces);
      mesh.buildVertexBoneData(bones);
    }
  }

  buildAttributes() {
    // Hard coded for now...
    attributes['POSITION'] = new MeshVertexAttribute('POSITION', 0, 48,
                                                     'float3');
    attributes['NORMAL'] = new MeshVertexAttribute('NORMAL', 16, 48,
                                                   'float3');
    attributes['TEXCOORD0'] = new MeshVertexAttribute('TEXCOORD0', 32, 48,
                                                      'float2');
  }

  buildVertexBuffer() {
    int baseVertex = 0;
    meshes.forEach((Mesh mesh) {
      mesh.baseVertex = baseVertex;
      mesh.min[0] = mesh.vertices[0].position[0];
      mesh.min[1] = mesh.vertices[0].position[1];
      mesh.min[2] = mesh.vertices[0].position[2];
      mesh.max[0] = mesh.vertices[0].position[0];
      mesh.max[1] = mesh.vertices[0].position[1];
      mesh.max[2] = mesh.vertices[0].position[2];
      mesh.vertices.forEach((MeshVertex vertex) {
        mesh.min[0] = mesh.min[0] < vertex.position[0] ?
            mesh.min[0] : vertex.position[0];
        mesh.min[1] = mesh.min[1] < vertex.position[1] ?
            mesh.min[1] : vertex.position[1];
        mesh.min[2] = mesh.min[2] < vertex.position[2] ?
            mesh.min[2] : vertex.position[2];
        mesh.max[0] = mesh.max[0] > vertex.position[0] ?
            mesh.max[0] : vertex.position[0];
        mesh.max[1] = mesh.max[1] > vertex.position[1] ?
            mesh.max[1] : vertex.position[1];
        mesh.max[2] = mesh.max[2] > vertex.position[2] ?
            mesh.max[2] : vertex.position[2];
        vertexBuffer.add(vertex.position[0]);
        vertexBuffer.add(vertex.position[1]);
        vertexBuffer.add(vertex.position[2]);
        vertexBuffer.add(vertex.position[3]);
        vertexBuffer.add(vertex.normal[0]);
        vertexBuffer.add(vertex.normal[1]);
        vertexBuffer.add(vertex.normal[2]);
        vertexBuffer.add(vertex.normal[3]);
        vertexBuffer.add(vertex.textureCoord[0]);
        vertexBuffer.add(vertex.textureCoord[1]);
        vertexBuffer.add(vertex.textureCoord[2]);
        vertexBuffer.add(vertex.textureCoord[3]);
        baseVertex++;
      });
    });
  }

  buildIndexBuffer() {
    int baseIndex = 0;
    meshes.forEach((Mesh mesh) {
      mesh.baseIndex = baseIndex;
      int vertexOffset =  mesh.baseVertex;
      mesh.faces.forEach((MeshFace face) {
        indexBuffer.add(face.i0 + vertexOffset);
        indexBuffer.add(face.i1 + vertexOffset);
        indexBuffer.add(face.i2 + vertexOffset);
        baseIndex++;
      });
      mesh.indexCount = (baseIndex - mesh.baseIndex)*3;
      mesh.baseIndex *= 6;
    });
  }

  bake() {
    clear();
    buildBones();
    fillOffsetTransforms();
    pruneBones(root);
    reflow();
    //root.dump(0);
    buildVertexStreams();
    buildAttributes();
    buildVertexBuffer();
    buildIndexBuffer();

    // Setup output Json.
    List bones = boneTable.values.toList();
    bones.sort((A, B) => A.boneIndex - B.boneIndex);
    outputMesh['attributes'] = attributes.values.toList();
    outputMesh['boneTable'] = bones;
    outputMesh['meshes'] = meshes;
    outputMesh['primitive'] = 'triangles';
    outputMesh['vertices'] = vertexBuffer;
    outputMesh['indices'] = indexBuffer;
    // Add up number of vertices
    int totalVerts = 0;
    meshes.forEach((Mesh mesh) {
      totalVerts += mesh.vertices.length;
    });
    // Room for 4 bone influences (boneId+weight) per vertex.
    outputMesh['vertexBones'] = new List<num>(totalVerts*4);
    outputMesh['vertexWeights'] = new List<num>(totalVerts*4);
    meshes.forEach((Mesh mesh) {
      for (int v = 0; v < mesh.vertices.length; v++) {
        MeshVertex vertex = mesh.vertices[v];
        int base = (v+mesh.baseVertex)*4;
        int i;
        for (i = 0; i < vertex.skinData.length; i++) {
          MeshVertexBoneWeight sd = vertex.skinData[i];
          int boneIndex = boneTable[sd.boneName].boneIndex;
          outputMesh['vertexBones'][base+i] = boneIndex;
          outputMesh['vertexWeights'][base+i] = sd.weight;
        }
        // Zero out the rest.
        for (; i < 4; i++) {
          outputMesh['vertexBones'][base+i] = 0;
          outputMesh['vertexWeights'][base+i] = 0.0;
        }
      }
    });
  }
}

void main(List<String> arguments) {
  if (arguments.length < 1) {
    print('Invalid number of arguments.');
    print('dart skinned_mesh_baker.dart <input file> [output file]');
    return;
  }
  String inputFilename = arguments[0];
  File f = new File(inputFilename);
  String inputString;
  try {
    inputString = f.readAsStringSync();
  } catch (e) {
    print('Could not open input: $inputFilename - $e');
    return;
  }
  Map inputMesh;
  try {
    inputMesh = JSON.decode(inputString);
  } catch (e) {
    print('Could not parse input - $e');
    print('NOTE: Input file must be generated by using assimp2json.');
    return;
  }
  ModelBaker mb = new ModelBaker(inputMesh);
  mb.bake();
  String output;
  try {
    output = JSON.encode(mb.outputMesh);
  } catch (e) {
    print('Internal error. Could not generate output. Please file a bug. - $e');
    return;
  }
  if (arguments.length >= 2) {
    String outputFilename = arguments[1];
    f = new File(outputFilename);
    try {
      f.writeAsStringSync(output);
    } catch (e) {
      print('Could not write to output: $outputFilename - $e');
      return;
    }
  } else {
    print(output);
  }
}
