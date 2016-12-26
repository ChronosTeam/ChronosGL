.PHONY=documentation examples tests

documentation:
	grep "^///" --no-filename --group-separator="" -A1 -B 1 -r lib/ | sed -e 's|/// ||g'

examples:
	/usr/lib/dart/bin/pub build example/


tests:
	@echo "Make sure Dartiums in on the PATH - you may need to add a symlink dartium -> chrome"
	which dartium
	/usr/lib/dart/bin/pub run test   -p vm test/polygon.dart 
	/usr/lib/dart/bin/pub run test   -p dartium test/shader_syntax.dart
	/usr/lib/dart/bin/pub run test   -p dartium test/geometry.dart

