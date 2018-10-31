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

goog.provide('Blockly.Python.lcd');

goog.require('Blockly.Python');


Blockly.Python['lcd_writeline'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'lcd.writeLine(str('+value_name+'))\n';
    Blockly.Python.definitions_['import_lcd'] = 'import lcd';
    return code;
  };
  Blockly.Python['lcd_drawdot'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    // TODO: Assemble Python into code variable.
    var code = 'lcd0.drawDot('+value_x+','+value_y+','+value_c+')\n';
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['lcd_clear'] = function(block) {
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    var code = 'lcd0.drawClear('+value_c+')\n';
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return code;
  };
  Blockly.Python['lcd_drawline'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawLine('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawrect'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawRect('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawrectfill'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'VALUE_X2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'VALUE_Y2', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawRectfill('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawcircle'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'VALUE_R', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawCircle('+value_x1+','+value_y1+','+value_r+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_drawcirclefill'] = function(block) {
    var value_x1 = Blockly.Python.valueToCode(block, 'VALUE_X1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'VALUE_Y1', Blockly.Python.ORDER_ATOMIC);
    var value_r = Blockly.Python.valueToCode(block, 'VALUE_R', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'VALUE_C', Blockly.Python.ORDER_ATOMIC);
    value_c="0x"+value_c.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawCirclefill('+value_x1+','+value_y1+','+value_r+','+value_c+')\n';
    return code;
  };
  Blockly.Python['lcd_writestring'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_font =block.getFieldValue('VALUE_FONT');
    var value_x = Blockly.Python.valueToCode(block, 'VALUE_X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'VALUE_Y', Blockly.Python.ORDER_ATOMIC);
    var value_fc = Blockly.Python.valueToCode(block, 'VALUE_FC', Blockly.Python.ORDER_ATOMIC);
    var value_bc = Blockly.Python.valueToCode(block, 'VALUE_BC', Blockly.Python.ORDER_ATOMIC);
    var value_ac = Blockly.Python.valueToCode(block, 'VALUE_AC', Blockly.Python.ORDER_ATOMIC);
    value_fc="0x"+value_fc.toString().replace(/[^0-9^a-z]/ig, "");
    value_bc="0x"+value_bc.toString().replace(/[^0-9^a-z]/ig, "");
    value_ac="0x"+value_ac.toString().replace(/[^0-9^a-z]/ig, "");
    var def ="lcd0=mraa.Lcd(0)";
    Blockly.Python.definitions_[def] = def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    var code = 'lcd0.drawString('+value_font+','+value_x+','+value_y+','+value_value+','+value_fc+','+value_bc+','+value_ac+')\n';
    return code;
  };