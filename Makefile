export PATH := $(PATH):$(HOME)/.pub-cache/bin:.

.PHONY=documentation examples tests presubmit buildall

DART=/bin/dart 
PUB=/bin/dart pub
PORT=8000

VERSION := $(shell grep version pubspec.yaml | cut -f 2 -d\ )
#@ Available Targets:
#@

#@ help - Show this messsage
#@
help:
	@egrep "^#@" ${MAKEFILE_LIST} | cut -c 3-

#@ get - Download package dependencies and install tools
#@       (needs to be run at lease once after `git clone`
#@       https://dart.dev/tools/webdev
#@
get:
	$(PUB) get
	$(PUB) add build_runner build_web_compilers --dev
	${PUB} global activate webdev

#@ examples - Build (release mode) all the examples into build_example/
#@
examples:
	webdev build --verbose --release --output example:build_example
	@echo
	@echo example can be found in "file://${PWD}/build_example/example/"
	@echo

#@ examples_debug - Build (release mode) all the examples into build_example/
#@
examples_debug:
	webdev build --verbose --output example:build_example_debug
	@echo
	@echo example can be found in "file://${PWD}/build_example_debug/example/"
	@echo

#@ webserver - Launch a python webserver exporting the entire directory tree
#@             (useful to view the results of target `example`
#@
webserver:
	@echo Launching webserver on port $(PORT)
	python3 -m -m http.server $(PORT)

#@ serve - Launch the continous build webdev server
#@
serve_debug:
	webdev serve --verbose --debug example


#@ publish - Update package at pub.dartlang.org
#@
publish:
	$(PUB) publish 

buildall:
	webdev build --output web:build
	webdev build --output web:build tool/
	webdev build --output web:build test/


presubmit: tests buildall



#@ documentation - Extract the class_glossary.md files from the source
#@
documentation:
	dart  tool/generate_documentation.dart > class_glossary.md

############################################################
# TESTING
############################################################
# TODO(robertm): vm tests are failing on exit:
# Invalid argument(s): Illegal argument in isolate message : (object is a regular Dart Instance)
start_test_server:
	$(DART) serve example --web-compiler=dartdevc --port 8111

browser_tests:
	$(DART) run test  -p chrome --pub-serve=8111 test/geometry.dart

brower_tests_old:
	-$(DART) run test  -p chrome --pub-serve=8111 test/geometry.dart
	$(DART) run test   -p dartium test/shader_syntax.dart
	$(DART) run test   -p dartium test/show_extensions.dart

tests:
	$(DART) run test   -p vm test/polygon.dart
	$(DART) run test   -p chrome test/geometry.dart
	$(DART) run test   -p chrome test/shader_syntax.dart
