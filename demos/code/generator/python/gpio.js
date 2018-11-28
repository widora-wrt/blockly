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

goog.provide('Blockly.Python.gpio');

goog.require('Blockly.Python');


Blockly.Python['gpio_write'] = function(block) {
  var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
  var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = "gpio"+dropdown_name+".write("+value_name+")\n";
  var def ="gpio"+dropdown_name+"=mraa.Gpio("+dropdown_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  Blockly.Python.definitions_[def] = def;
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  return code;
};
Blockly.Python['gpio_read'] = function(block) {
  var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
  var code = "gpio"+dropdown_name+".read()";
  var def ="gpio"+dropdown_name+"=mraa.Gpio("+dropdown_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  Blockly.Python.definitions_[def] = def;
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['gpio_mode'] = function(block) {
  var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  try  {
   dropdown_name=eval(dropdown_name);
  }catch(exception) {
    dropdown_name="0";
  }
  var dropdown_value = block.getFieldValue('VALUE');
  var def ="gpio"+dropdown_name+"=mraa.Gpio("+dropdown_name+")";
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  Blockly.Python.definitions_[def] = def;
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
Blockly.Python['gpio_list'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['gpio_ledlist'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['gpio_joklist'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['gpio_buttonlist'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['gpio_interrupt'] = function(block) {
  var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    try  {
     dropdown_name=eval(dropdown_name);
    }catch(exception) {
      dropdown_name="0";
    }
  
  var variables = this.workspace.getAllVariables();
  var global="  global ";
  for (var i = 0; i < variables.length; i++) {
  //alert(variables[i].name);
  var varName = Blockly.Python.variableDB_.getName(variables[i].name,
      Blockly.Variables.NAME_TYPE);
  global+=varName;
  if(i<(variables.length-1))global+=',';
  else global+="\n";
  }
  if(variables.length==0)global="";
  var statements_func =global+Blockly.Python.statementToCode(block, 'FUNC')+"  pass";
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  var func="def gpio"+dropdown_name+"_callback(userdata):\n"+statements_func;
  Blockly.Python.definitions_[func] = func;
  var code ="gpio"+dropdown_name+".isr(mraa.EDGE_BOTH,gpio"+dropdown_name+"_callback,None)\n";
  return code;
};