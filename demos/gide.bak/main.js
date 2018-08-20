goog.provide('Main');
// Messages (in some language)
goog.require('Blockly.Msg.en');
// Core
goog.require('Blockly');
// Blocks
goog.require('Blockly.Constants.Logic');
goog.require('Blockly.Constants.Loops');
goog.require('Blockly.Constants.Math');
goog.require('Blockly.Constants.Text');

goog.require('Blockly.Generator');
goog.provide('Blockly.JavaScript');
goog.provide('Blockly.Python');
goog.provide('Blockly.PHP');

Main.init = function() {
  Blockly.inject('blocklyDiv', {
    'toolbox': document.getElementById('toolbox')
  });
};
window.addEventListener('load', Main.init);
