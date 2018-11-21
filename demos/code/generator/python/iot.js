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

goog.provide('Blockly.Python.iot');

goog.require('Blockly.Python');

Blockly.Python['iot_send'] = function(block) {
    var input_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    var input_name =block.getFieldValue('NAME');
    var input_id = block.getFieldValue('ID');
    // TODO: Assemble Python into code variable.
    var code ="iot.send("+input_value+",iot."+input_name+",'"+input_id+"')\n";
     Blockly.Python.definitions_['import_iot'] = 'import iot';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};
Blockly.Python['iot_get'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var varName ="iotv_"+Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
  Blockly.Python.definitions_['import_iot'] = 'import iot';
  return ["iot.get('" + varName + "')", Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['iot_set'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var text_value =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var varName ="iotv_"+Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
  Blockly.Python.definitions_['import_iot'] = 'import iot';
  return "iot.set('" + varName + "',"+text_value+")\n";
};