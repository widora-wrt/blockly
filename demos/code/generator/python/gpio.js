/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.pins');

goog.require('Blockly.Python');


Blockly.Python['gpio_write'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "gpio"+dropdown_name+".write("+value_name+")\n";
  var def ="gpio"+dropdown_name+"=mraa.Gpio("+dropdown_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  Blockly.Python.definitions_[def] = def;
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  return code;
};
Blockly.Python['gpio_read'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = "gpio"+dropdown_name+".read()";
  var def ="gpio"+dropdown_name+"=mraa.Gpio("+dropdown_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  Blockly.Python.definitions_[def] = def;
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['gpio_mode'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_value = block.getFieldValue('VALUE');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  var code ="gpio"+dropdown_name+".dir(mraa."+dropdown_value+")\n";
  return code;
};
Blockly.Python['gpio_value'] = function(block) {
  var dropdown_value = block.getFieldValue('VALUE');
  // TODO: Assemble Python into code variable.
  var code = dropdown_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};