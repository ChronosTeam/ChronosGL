export PATH := $(PATH):$(HOME)/.pub-cache/bin:.

.PHONY=documentation examples tests presubmit buildall

PUB=/usr/lib/dart/bin/pub
PORT=8000

VERSION := $(shell grep version pubspec.yaml | cut -f 2 -d\ )

documentation:
	dart  tool/generate_documentation.dart > class_glossary.md

examples:
	webdev build --output web:build 
	@echo
	@echo example can be found in "file://${PWD}/build/example/"
	@echo

examples_debug:
	webdev build --mode=debug 
	@echo
	@echo example can be found in "file://${PWD}/build/example/"
	@echo

buildall:
	webdev build --output web:build
	webdev build --output web:build tool/
	webdev build --output web:build test/


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

serve:
	webdev serve example/ 

publish:
	$(PUB) publish

get:
	$(PUB) get
	${PUB} global activate webdev

tag:
	git tag $(VERSION) -m "$(VERSION)"
	git show $(VERSION)

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
