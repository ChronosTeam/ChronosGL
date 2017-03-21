#!/usr/bin/python

import sys

def doVertices(t):
    for i in range(0, len(t)-1, 8):
        print "v  %s %s %s" % (t[i], t[i+1], t[i+2])
        print "vn %s %s %s" % (t[i+3], t[i+4], t[i+5])
        print "vt %s %s" % (t[6], t[i+7])

def doFaces(t):
    for i in range(0, len(t)-1, 3):
        print "f  %d %d %d" % (1 + int(t[i]), 1+int(t[i+1]), 1+int(t[i+2]))

for line  in sys.stdin:
    t = line.split(",")
    if len(t) < 3: continue
    x = t[0]
    t[0] = t[0].split("[")[-1]
    t[-1] = t[-1].replace("]", "")
    #print t[0], len(t)
    if "vert" in x: doVertices(t)
    if "indi" in x: doFaces(t)
