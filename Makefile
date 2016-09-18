.PHONY=documentation examples

documentation:
	grep "^///" --no-filename --group-separator="" -A1 -B 1 -r lib/ | sed -e 's|/// ||g'

examples:
	/usr/lib/dart/bin/pub build example/
