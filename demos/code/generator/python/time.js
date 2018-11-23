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

goog.provide('Blockly.Python.time');

goog.require('Blockly.Python');

Blockly.Python['time_getnow'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code ="datetime.datetime.now()."+dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_['import_datetime'] = 'import datetime';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['time_sleep'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code ="time.sleep("+dropdown_name+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_['import_time'] = 'import time';
    return code;
  };
  Blockly.Python['time_nowdate'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code ="datetime.datetime.now().strftime('%Y-%m-%d')";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_['import_datetime'] = 'import datetime';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['time_nowtime'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code ="datetime.datetime.now().strftime('%H:%M:%S')";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_['import_datetime'] = 'import datetime';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['timer_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['time_timer'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
      try  {
       dropdown_name=eval(dropdown_name);
      }catch(exception) {
        dropdown_name="0";
      }
    var dropdown_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
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
    Blockly.Python.definitions_['import_threading'] = 'import threading';
    var func="def time"+dropdown_name+"_callback():\n"+statements_func;
    Blockly.Python.definitions_[func] = func;
    var code ="threading.Timer("+dropdown_value+",time"+dropdown_name+"_callback).start()\n";
    return code;
  };
  Blockly.Python['thread_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['time_thread'] = function(block) {
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
    Blockly.Python.definitions_['import_threading'] = 'import threading';
    var func="def thread"+dropdown_name+"_callback():\n"+statements_func;
    Blockly.Python.definitions_[func] = func;
    var code ="threading.Thread(target=thread"+dropdown_name+"_callback).start()\n";
    return code;
  };
  
  