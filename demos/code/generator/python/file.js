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

goog.provide('Blockly.Python.file');

goog.require('Blockly.Python');


Blockly.Python['file_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code ="'"+dropdown_name+"'";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Blockly.Python['file_write'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    var value_value= Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code ="file.write("+value_name+",str("+value_value+'))\n';
    Blockly.Python.definitions_['import_file'] = 'import file';
    return code;
  };
  Blockly.Python['file_create'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    var value_value= Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code ="file.create("+value_name+",str("+value_value+'))\n';
    Blockly.Python.definitions_['import_file'] = 'import file';
    return code;
  };
  Blockly.Python['file_writeline'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    var value_value= Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code ="file.writeline("+value_name+",str("+value_value+'))\n';
    Blockly.Python.definitions_['import_file'] = 'import file';
    return code;
  };
  Blockly.Python['file_read'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="file.read("+value_name+")";
    Blockly.Python.definitions_['import_file'] = 'import file';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['file_readline'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="file.readline("+value_name+","+value_value+")";
    Blockly.Python.definitions_['import_file'] = 'import file';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['file_readlines'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="file.readlines("+value_name+")";
    Blockly.Python.definitions_['import_file'] = 'import file';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['file_wget'] = function(block) {
    var input_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="file.wget("+input_value+")";
     Blockly.Python.definitions_['import_file'] = 'import file';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };