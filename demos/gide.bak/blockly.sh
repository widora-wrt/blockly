java -jar closure-compiler.jar \
  --js='../../core/**.js' \
  --js='../../../closure-library/closure/goog/**.js' \
  --js='../../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --externs ../../externs/svg-externs.js \
  --compilation_level ADVANCED_OPTIMIZATIONS \
  --dependency_mode=STRICT --entry_point=Blockly \
  --js_output_file blockly_compressed.js
