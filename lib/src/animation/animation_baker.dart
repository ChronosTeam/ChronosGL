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

library animation_baker;

import 'dart:io';
import 'dart:typed_data';
import 'dart:convert';

class BonePositionAnimation {
  final int tick;
  final Float32List position = new Float32List(3);
  BonePositionAnimation(this.tick, List values) {
    position[0] = values[0].toDouble();
    position[1] = values[1].toDouble();
    position[2] = values[2].toDouble();
  }
  Map toJson() {
    Map r = new Map();
    r['time'] = tick;
    r['value'] = position;
    return r;
  }
}

class BoneRotationAnimation {
  final int tick;
  final Float32List rotation = new Float32List(4);
  BoneRotationAnimation(this.tick, List values) {
    rotation[0] = values[1].toDouble();
    rotation[1] = values[2].toDouble();
    rotation[2] = values[3].toDouble();
    rotation[3] = values[0].toDouble();
  }
  Map toJson() {
    Map r = new Map();
    r['time'] = tick;
    r['value'] = rotation;
    return r;
  }
}

class BoneScaleAnimation {
  final int tick;
  final Float32List scale = new Float32List(3);
  BoneScaleAnimation(this.tick, List values) {
    scale[0] = values[0].toDouble();
    scale[1] = values[1].toDouble();
    scale[2] = values[2].toDouble();
  }
  Map toJson() {
    Map r = new Map();
    r['time'] = tick;
    r['value'] = scale;
    return r;
  }
}

class BoneAnimation {
  final String name;
  final List<BonePositionAnimation> positions =
      new List<BonePositionAnimation>();
  final List<BoneRotationAnimation> rotations =
      new List<BoneRotationAnimation>();
  final List<BoneScaleAnimation> scales = new List<BoneScaleAnimation>();
  BoneAnimation(this.name);

  Map toJson() {
    Map r = new Map();
    r['name'] = name;
    r['positions'] = positions;
    r['rotations'] = rotations;
    r['scales'] = scales;
    return r;
  }
}

class SkeletalAnimation {
  final String name;
  final int duration;
  final int ticksPerSecond;
  final Map<String, BoneAnimation> bones = new Map<String, BoneAnimation>();
  SkeletalAnimation(this.name, this.duration, this.ticksPerSecond);

  Map toJson() {
    Map r = new Map();
    r['name'] = name != '' ? name : 'name';
    r['duration'] = duration;
    r['ticksPerSecond'] = ticksPerSecond;
    r['boneAnimations'] = bones.values.toList();
    return r;
  }
}

class AnimationBaker {
  final Map input;
  final Map<String, SkeletalAnimation> animations =
      new Map<String, SkeletalAnimation>();
  AnimationBaker(this.input);

  clear() {
    animations.clear();
  }

  bakeBoneAnimation(SkeletalAnimation skeleton, Map input) {
    String boneName = input['name'];
    BoneAnimation boneAnimation = new BoneAnimation(boneName);
    skeleton.bones[boneName] = boneAnimation;
    List positionKeys = input['positionkeys'];
    List rotationkeys = input['rotationkeys'];
    List scaleKeys = input['scalingkeys'];
    if (positionKeys != null) {
      for (int i = 0; i < positionKeys.length; i++) {
        int tick = positionKeys[i][0];
        List positions = positionKeys[i][1];
        boneAnimation.positions.add(new BonePositionAnimation(tick, positions));
      }
    }
    if (rotationkeys != null) {
      for (int i = 0; i < rotationkeys.length; i++) {
        int tick = rotationkeys[i][0];
        List rotations = rotationkeys[i][1];
        boneAnimation.rotations.add(new BoneRotationAnimation(tick, rotations));
      }
    }
    if (scaleKeys != null) {
      for (int i = 0; i < scaleKeys.length; i++) {
        int tick = scaleKeys[i][0];
        List scales = scaleKeys[i][1];
        boneAnimation.scales.add(new BoneScaleAnimation(tick, scales));
      }
    }
  }

  bakeAnimation(Map input) {
    String name = input['name'];
    int duration = input['duration'];
    int ticksPerSecond = input['tickspersecond'];
    SkeletalAnimation animation = new SkeletalAnimation(name, duration,
                                                        ticksPerSecond);
    animations[name] = animation;
    input['channels'].forEach((channel) {
      bakeBoneAnimation(animation, channel);
    });
  }

  bake() {
    List animations = input['animations'];
    if (animations == null) {
      throw new ArgumentError('Input has no animations.');
    }
    animations.forEach((animation) {
      bakeAnimation(animation);
    });
  }
}

main(List<String> arguments) {
  if (arguments.length < 1) {
    print('Invalid number of arguments.');
    print('dart animation_baker.dart <input file> [output file]');
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
  Map inputAnimation;
  try {
    inputAnimation = JSON.decode(inputString);
  } catch (e) {
    print('Could not parse input - $e');
    print('NOTE: Input file must be generated by using assimp2json.');
    return;
  }
  AnimationBaker ab = new AnimationBaker(inputAnimation);
  ab.bake();
  String output;
  try {
    output = JSON.encode(ab.animations.values.toList());
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
