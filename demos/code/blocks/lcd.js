/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.lcd');  // Deprecated
goog.provide('Blockly.Constants.Lcd');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Msg.LCD_HUE = '276';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "lcd_writeline",
        "message0":"%{BKY_CATLCD_WRITELINE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE"
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_clear",
        "message0":"%{BKY_CATLCD_DRAWCLEAR_TITLE}",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE_C"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawdot",
        "message0":"%{BKY_CATLCD_DRAWDOT_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y"
          },
          {
            "type": "input_value",
            "name": "VALUE_C"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawline",
        "message0":"%{BKY_CATLCD_DRAWLINE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X1"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y1"
          },
          {
            "type": "input_value",
            "name": "VALUE_X2"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y2"
          },
          {
            "type": "input_value",
            "name": "VALUE_C"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawrect",
        "message0":"%{BKY_CATLCD_DRAWRECT_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X1"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y1"
          },
          {
            "type": "input_value",
            "name": "VALUE_X2"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y2"
          },
          {
            "type": "input_value",
            "name": "VALUE_C"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawrectfill",
        "message0":"%{BKY_CATLCD_DRAWRECTFILL_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X1"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y1"
          },
          {
            "type": "input_value",
            "name": "VALUE_X2"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y2"
          },
          {
            "type": "input_value",
            "name": "VALUE_C"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawcircle",
        "message0":"%{BKY_CATLCD_DRAWCIRCLE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X1"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y1"
          },
          {
            "type": "input_value",
            "name": "VALUE_R"
          },
          {
            "type": "input_value",
            "name": "VALUE_C"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawcirclefill",
        "message0":"%{BKY_CATLCD_DRAWCIRCLEFILL_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X1"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y1"
          },
          {
            "type": "input_value",
            "name": "VALUE_R"
          },
          {
            "type": "input_value",
            "name": "VALUE_C"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      }
]);
