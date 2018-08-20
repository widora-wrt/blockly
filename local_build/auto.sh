java -jar ../node_modules/google-closure-compiler/compiler.jar --js='../demos/code/code.js' \
  --js='../blocks/**.js' \
  --js='../core/**.js' \
  --js='../generators/**.js' \
  --js='../msg/js/**.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --externs ../externs/svg-externs.js \
  --compilation_level ADVANCED_OPTIMIZATIONS \
  --dependency_mode=STRICT --entry_point=Blockly \
  --js_output_file main_compressed.js

