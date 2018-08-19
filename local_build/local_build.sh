#!/bin/bash

# Locally build and compress the core Blockly files into a single JavaScript
# file.
#
# Copyright 2018 Google Inc.
# https://developers.google.com/blockly/
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Usage: local_build.sh.
#
# This script generates only local_blockly_compressed.js.  You may modify it as
# needed to build other files.
#
# The compressed file is a concatenation of all of Blockly's core files, run
# through a local copy of Google's Closure Compiler with simple optimizations
# turned on.

# Future work:
# - Trim down Google's Apache licenses, to match the output of build.py.
# - Generate other compressed files generated by build.py normally.
# - Add a good error message if multiple versions of the closure compiler were
#   found.

# Find the Closure Compiler.
if [ -f "$(npm root)/google-closure-compiler/compiler.jar" ]; then
  COMPILER="$(npm root)/google-closure-compiler/compiler.jar"
elif [ -f closure-compiler*.jar ]; then
  COMPILER="closure-compiler*.jar"
  # TODO: Check whether multiple files were found.
else
  echo "ERROR: Closure Compiler not found."
  echo "Download from this URL, and place jar file in current directory."
  echo "https://dl.google.com/closure-compiler/compiler-latest.zip"
  exit 1
fi
function_core()
{
rm $1 2> /dev/null
echo Compiling Blockly core...
rm ../blockly_compressed.js 2> /dev/null
echo Compiling Blockly core...
java -jar $COMPILER \
  --js='../core/**.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --warning_level='DEFAULT' \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=STRICT \
  --entry_point=Blockly \
  --js_output_file ../blockly_compressed.js

if [ -s ../blockly_compressed.js ]; then
  echo Compilation OK.
else
  echo Compilation FAIL.
  exit 1
fi
}
function_accessible()
{
rm $1 2> /dev/null
echo Compiling Blockly accessible...
java -jar $COMPILER \
  --js='../core/**.js' \
  --js='../accessible/**.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --warning_level='DEFAULT' \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=STRICT \
  --entry_point=../accessible/app.component.js \
  --js_output_file $1

if [ -s $1 ]; then
  echo Compilation $1 OK.
else
  echo Compilation FAIL.
fi
}
function_blocks()
{
rm $1 2> /dev/null
echo Compiling Blockly blocks...
java -jar $COMPILER \
  --js='generators/blocks.js' \
  --js='../blocks/**.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --warning_level='DEFAULT' \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=STRICT \
  --entry_point=Main \
  --js_output_file $1

if [ -s $1 ]; then
  echo Compilation $1 OK.
else
  echo Compilation FAIL.
fi
}
function_generators()
{
rm $2 2> /dev/null
echo Compiling Blockly generators $1...
java -jar $COMPILER \
  --js='generators/'$1'.js' \
  --js='../generators/'$1'.js' \
  --js='../generators/'$1'/**.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --compilation_level ADVANCED_OPTIMIZATIONS \
  --dependency_mode=STRICT \
  --entry_point=Main \
  --js_output_file $2

if [ -s $2 ]; then
  echo Compilation $2 OK.
else
  echo Compilation FAIL.
fi
}
echo Using $COMPILER as the compiler.
case $1 in
    core)
    function_core ../blockly_compressed.js  
    ;;
    accessible)
    function_accessible ../accessible_compressed.js  
    ;;
    blocks)
    function_blocks ../blocks_compressed.js  
    ;;
    python)
    function_generators python ../python_compressed.js  
    ;;
    lua)
    function_generators lua ../lua_compressed.js  
    ;;
    dart)
    function_generators dart ../dart_compressed.js  
    ;;
    javascript)
    function_generators javascript ../javascript_compressed.js  
    ;;
    php)
    function_generators php ../php_compressed.js  
    ;;
    all)
    function_core ../blockly_compressed.js  
    function_accessible ../accessible_compressed.js  
    function_blocks ../blocks_compressed.js 
    function_generators python ../python_compressed.js
    function_generators lua ../lua_compressed.js
    function_generators dart ../dart_compressed.js
    function_generators javascript ../javascript_compressed.js  
    function_generators php ../php_compressed.js  
    ;;
    *)
    echo core
    echo accessible
    echo blocks
    echo lua dart python javascript  
    ;;
esac
