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

goog.provide('Blockly.Python.i2c');

goog.require('Blockly.Python');

Blockly.Python['i2c_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
Blockly.Python['i2c_address'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
      try  {
       dropdown_name=eval(dropdown_name);
      }catch(exception) {
        dropdown_name="0";
      }
    var value_name =block.getFieldValue('VALUE');
    // TODO: Assemble Python into code variable.
    var code = "i2c"+dropdown_name+".address("+value_name+")\n";
    var def ="i2c"+dropdown_name+"=mraa.I2c("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['i2c_readreg'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    var dropdown_reg = block.getFieldValue('REG');
      try  {
       dropdown_name=eval(dropdown_name);
      }catch(exception) {
        dropdown_name="0";
      }
    var address_name =block.getFieldValue('VALUE');
    var code = "i2c"+dropdown_name+".readReg("+dropdown_reg+")";
    var def ="i2c"+dropdown_name+"=mraa.I2c("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['i2c_writereg'] = function(block) {
    var dropdown_name =Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    var dropdown_reg = block.getFieldValue('REG');
    var dropdown_value = block.getFieldValue('VALUE');
      try  {
       dropdown_name=eval(dropdown_name);
      }catch(exception) {
        dropdown_name="0";
      }
    var address_name =block.getFieldValue('VALUE');
    var code = "i2c"+dropdown_name+".writeReg("+dropdown_reg+","+dropdown_value+")\n";
    var def ="i2c"+dropdown_name+"=mraa.I2c("+dropdown_name+")";
    // TODO: Change ORDER_NONE to the correct strength.
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['i2c_mpu6050'] = function(block) {
    var dropdown_value = block.getFieldValue('VALUE');
    // TODO: Assemble Python into code variable.
    var code ="i2c_mpu6050."+dropdown_value+"()";
    var def ="i2c_mpu6050=i2c.mpu6050()";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_i2c'] = 'import i2c';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };