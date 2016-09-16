.PHONY=documentation

documentation:
	grep "^///" --no-filename --group-separator="" -A1 -B 1 -r lib/ | sed -e 's|/// ||g'
