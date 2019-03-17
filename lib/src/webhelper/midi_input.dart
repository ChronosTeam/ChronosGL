part of webhelper;

class MidiInput {
   MidiInput() {
    //HTML.window.navigator.requestMidiAccess()
  }

  // Dart HTML bindings are broken
  final Map<int, int> _currentControlValue = <int, int>{};
  final Set<int> _justUpdatedControls = <int>{};

  int moveDeltaX = 0;
  int moveDeltaY = 0;
  int wheelDeltaY = 0;
  int currentX = 0;
  int currentY = 0;
}
