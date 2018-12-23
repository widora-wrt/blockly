#!/bin/bash
rm -rf appengine/static/demos/*
cp -R demos/code appengine/static/demos/
rm -rf appengine/static/demos/code/blocks
rm -rf appengine/static/demos/code/generator
cp -r msg/js appengine/static/msg/
cp msg/messages.js appengine/static/msg/
cp *_compressed.js appengine/static/
