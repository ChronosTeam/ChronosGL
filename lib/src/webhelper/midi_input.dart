part of webhelper;

class MidiInput {
  final Map<int, int> _currentControlValue = Map<int, int>();
  final Set<int> _justUpdatedControls = Set<int>();

  int moveDeltaX = 0;
  int moveDeltaY = 0;
  int wheelDeltaY = 0;
  int currentX = 0;
  int currentY = 0;

  MidiInput() {
    //HTML.window.navigator.requestMidiAccess()
  }
}
