.PHONY=documentation examples tests presubmit buildall

SDK=/usr/lib/dart
PORT=8000

documentation:
	dart  tool/generate_documentation.dart > class_glossary.md

examples:
	/usr/lib/dart/bin/pub build example/

buildall:
	/usr/lib/dart/bin/pub build example/
	/usr/lib/dart/bin/pub build tool/
	/usr/lib/dart/bin/pub build test/

# TODO(robertm): vm tests are failing on exit:
# Invalid argument(s): Illegal argument in isolate message : (object is a regular Dart Instance)
tests:
	@echo "Make sure Dartiums in on the PATH - you may need to add a symlink dartium -> chrome"
	which dartium
	-/usr/lib/dart/bin/pub run test   -p vm test/polygon.dart
	-/usr/lib/dart/bin/pub run test   -p vm test/geometry.dart
	/usr/lib/dart/bin/pub run test   -p dartium test/shader_syntax.dart
	/usr/lib/dart/bin/pub run test   -p dartium test/show_extensions.dart

presubmit: tests buildall

# useful for testing the examples
webserver:
	@echo Launching webserver on port $(PORT)
	python -m SimpleHTTPServer $(PORT)


publish:
	/usr/lib/dart/bin/pub publish

