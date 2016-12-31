.PHONY=documentation examples tests presubmit buildall

SDK=/usr/lib/dart
DDC=$(SDK)/bin/dartdevc
PORT=8000

documentation:
	grep "^///" --no-filename --group-separator="" -A1 -B 1 -r lib/ | sed -e 's|/// ||g'

examples:
	/usr/lib/dart/bin/pub build example/

buildall:
	/usr/lib/dart/bin/pub build example/
	/usr/lib/dart/bin/pub build tool/
	/usr/lib/dart/bin/pub build test/

tests:
	@echo "Make sure Dartiums in on the PATH - you may need to add a symlink dartium -> chrome"
	which dartium
	/usr/lib/dart/bin/pub run test   -p vm test/polygon.dart
	/usr/lib/dart/bin/pub run test   -p vm test/geometry.dart
	/usr/lib/dart/bin/pub run test   -p dartium test/shader_syntax.dart


presubmit: tests buildall

# useful for testing the examples
webserver:
	@echo Launching webserver on port $(PORT)
	python -m SimpleHTTPServer $(PORT)


buildalldev:
	$(DDC) example/wireframe/wireframe.dart --verbose --out=wireframe.js
	$(DDC) example/shadow/shadow.dart --verbose --out=shadow.js
	$(DDC) example/obj/obj.dart --verbose --out=obj.js

#		$(DDC) test/geometry.dart --out=geometry.js
