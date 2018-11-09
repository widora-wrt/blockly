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

goog.provide('Blockly.Python.print');

goog.require('Blockly.Python');

Blockly.Python['print_console'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'print(';
  if(block.getParent()==null)code="";
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['print_lcd'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'lcd0.writeLine(';
  var def ="lcd0=mraa.Lcd(0)";
  Blockly.Python.definitions_[def] = def;
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  if(block.getParent()==null)code="";
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['print_tcpip'] = function(block) {
  var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = text_name;
  var value ="connect_"+code.replace(/[^0-9]/ig,"")+".sendall("; 
  Blockly.Python.definitions_['import_socket'] = 'import socket';
  if(block.getParent()==null)value="";
  return [value, Blockly.Python.ORDER_NONE];
};
Blockly.Python['print_serial'] = function(block) {
  var text_name =  block.getFieldValue('NAME');
  var code ="serial"+text_name+".write(";
  var def ="serial"+text_name+"=mraa.Uart("+text_name+")";
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  Blockly.Python.definitions_[def] =def;
  if(block.getParent()==null)code="";
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['print_file'] = function(block) {
  var text_name =  block.getFieldValue('NAME');
  var code ="file.write('"+text_name+"',";
 // var def ="file.write()";
  Blockly.Python.definitions_['import_file'] = 'import file';
 // Blockly.Python.definitions_[def] =def;
  if(block.getParent()==null)code="";
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['print_to'] = function(block) {
  var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var value_name =Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code =value_name+ "str("+ dropdown_name +"))\n";
  return code;
};