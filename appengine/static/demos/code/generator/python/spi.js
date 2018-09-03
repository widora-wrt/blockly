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

goog.provide('Blockly.Python.spi');

goog.require('Blockly.Python');

Blockly.Python['spi_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
Blockly.Python['spi_writeread'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
    var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = "spi"+dropdown_name+".write(bytearray("+value_name+"))\n";
    var def ="spi"+dropdown_name+"=mraa.Spi("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };