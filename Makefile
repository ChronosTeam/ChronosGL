export PATH := $(PATH):.

.PHONY=documentation examples tests presubmit buildall

PUB=/usr/lib/dart/bin/pub
PORT=8000

documentation:
	dart  tool/generate_documentation.dart > class_glossary.md

examples:
	$(PUB) build example/
	@echo
	@echo example can be found in "file://${PWD}/build/example/"
	@echo

examples_debug:
	$(PUB) build --mode=debug example/
	@echo
	@echo example can be found in "file://${PWD}/build/example/"
	@echo

buildall:
	$(PUB) build example/
	$(PUB)/bin/pub build tool/
	$(PUB) build test/


presubmit: tests buildall

# useful for testing the examples
webserver:
	@echo Launching webserver on port $(PORT)
	python -m SimpleHTTPServer $(PORT)


simple_example:
	$(PUB) build --mode=debug example/simple
	@echo
	@echo example can be found in "file://${PWD}/build/example/simple/simple.html"
	@echo

webserver_ddc:
	$(PUB) serve example/ --web-compiler=dartdevc

publish:
	$(PUB) publish

############################################################
# TESTING
############################################################
# TODO(robertm): vm tests are failing on exit:
# Invalid argument(s): Illegal argument in isolate message : (object is a regular Dart Instance)
start_test_server:
	$(PUB) serve example --web-compiler=dartdevc --port 8111

browser_tests:
	$(PUB) run test  -p chrome --pub-serve=8111 test/geometry.dart

brower_tests_old:
	-$(PUB) run test  -p chrome --pub-serve=8111 test/geometry.dart
	$(PUB) run test   -p dartium test/shader_syntax.dart
	$(PUB) run test   -p dartium test/show_extensions.dart

tests:
	-$(PUB) run test   -p vm test/polygon.dart
