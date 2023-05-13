import 'package:js_bindings/bindings/all_bindings.dart';
import 'package:js_bindings/js_bindings.dart' as JS;
import 'dart:html' as HTML;

// https://users.cs.cf.ac.uk/dave/Multimedia/node158.html
const MIDI_NOTE_OFF = 8;
const MIDI_NOTE_ON = 9;
const MIDI_POLYPHONIC_KEY_PRESSURE = 10;
const MIDI_CONTROL_CHANGE = 11;
const MIDI_PROGRAM_CHANGE = 12;
const MIDI_CHANNEL_PRESSURE = 13;
const MIDI_PITCH_BEND = 14;

HTML.Element gTab = HTML.document.getElementById("tab")!;

void LogEvent(String kind, String device_channel, dynamic data) {
  print("${kind} ${device_channel} ${data}");
  if (gTab.children.length > 20) {
    gTab.children.removeAt(0);
  }
  gTab.innerHtml = gTab.innerHtml! +
      "<tr><td>${kind}</td><td>${device_channel}</td><td>${data}</td></tr>";
}

final List<MIDIPort> gMidiPorts = [];
final Map<String, int> gMidiIdToPortIndex = {};

void EventHandler(int device, dynamic msg) {
  dynamic data = msg.data;
  final int kind = data[0] >> 4;
  final int channel = data[0] & 0xf;
  if (kind == MIDI_NOTE_ON) {
    LogEvent("NoteOn", "${device}.${channel}", data);
  } else if (kind == MIDI_NOTE_OFF) {
    LogEvent("NoteOff", "${device}.${channel}", data);
  } else if (kind == MIDI_CONTROL_CHANGE) {
    LogEvent("ControlChange", "${device}.${channel}", data);
  } else {
    LogEvent("Unknown", "${device}", data);
  }
}

dynamic make_handler(int device) {
  LogEvent("Registering", "${device}", "${gMidiPorts[device]}");
  return (dynamic msg) => EventHandler(device, msg);
}

void InitMidiDevice(JS.MIDIPort port) {
  print("init");
  if (!gMidiIdToPortIndex.containsKey(port.id)) {
    LogEvent("InitDevice", "${port.type}", "${port.name}: ${port.id}");
    int index = gMidiPorts.length;
    gMidiIdToPortIndex[port.id] = index;
    gMidiPorts.add(port);

    //bool has_thru = port.name?.contains("Midi Through Port") ?? false;
    //if (!has_thru) {
    port.addEventListener('midimessage', make_handler(index));
    // }
  } else {
    LogEvent("IgnoredDevice", "${port.type}", "${port.name}: ${port.id}");
  }
}

void InitMidi() async {
  final opts = JS.MIDIOptions(sysex: false, software: true);
  final JS.MIDIAccess gMidiAccess =
      await JS.window.navigator.requestMIDIAccess(opts);

  gMidiAccess.addEventListener("statechange", (dynamic event) {
    JS.MIDIPort port = event.port;
    InitMidiDevice(port);
  });

  gMidiAccess.inputs.forEach((MIDIPort port, var k, var m) {
    InitMidiDevice(port);
  });

  gMidiAccess.outputs.forEach((MIDIPort port, var k, var m) {
    InitMidiDevice(port);
  });
}

void main() async {
  print("entering main");
  InitMidi();
  print("exiting main");
}
