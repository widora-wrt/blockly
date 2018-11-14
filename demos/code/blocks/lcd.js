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
        "type": "lcd_drawimage",
        "message0":"%{BKY_CATLCD_DRAWIMAGE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "PATH"
          },
          {
            "type": "input_value",
            "name": "VALUE_X"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y"
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
        "type": "lcd_clear",
        "message0":"%{BKY_CATLCD_DRAWCLEAR_TITLE}",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE_C",
                "check": "Colour"
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
            "name": "VALUE_C",
            "check": "Colour"
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
            "name": "VALUE_C",
            "check": "Colour"
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
            "name": "VALUE_C",
            "check": "Colour"
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
            "name": "VALUE_C",
            "check": "Colour"
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
            "name": "VALUE_C",
            "check": "Colour"
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
            "name": "VALUE_C",
            "check": "Colour"
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
        "type": "lcd_writestring",
        "message0":"%{BKY_CATLCD_WRITESTRING_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE"
          },
          {
            "type": "field_dropdown",
            "name": "VALUE_FONT",
            "options": [
                    ["12x12","1212"],
                    ["16x16(中文)","1616"],
                    ["16x24","1624"],
                    ["24x24","2424"],
                    ["32x32","4848"],
                    ]
          },
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
            "name": "VALUE_FC",
            "check": "Colour"
          },
          {
            "type": "input_value",
            "name": "VALUE_BC",
            "check": "Colour"
          },
          {
            "type": "input_value",
            "name": "VALUE_AC",
            "check": "Colour"
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
        "type": "lcd_dotarray",
        "message0": "%{BKY_CATLCD_DOTARRAY_TITLE}",
        "args0": [
          {
            "type": "field_checkbox",
            "name": "aa",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ab",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ac",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ad",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ae",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "af",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ag",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ah",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "ba",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "bb",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "bc",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "bd",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "be",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "bf",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "bg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "bh",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "ca",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "cb",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "cc",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "cd",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ce",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "cf",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "cg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ch",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "da",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "db",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "dc",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "dd",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "de",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "df",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "dg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "dh",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "ea",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "eb",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ec",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ed",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ee",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ef",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "eg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "eh",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "fa",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "fb",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "fc",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "fd",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "fe",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ff",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "fg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "fh",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "ga",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "gb",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "gc",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "gd",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "ge",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "gf",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "gg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "gh",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "ha",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "hb",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "hc",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "hd",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "he",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "hf",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "hg",
            "checked": false
          },
          {
            "type": "field_checkbox",
            "name": "hh",
            "checked": false
          }
        ],
        "output":"Array",
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "lcd_drawdotarray",
        "message0":"%{BKY_CATLCD_DRAWDOTARRAY_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
          },
          {
            "type": "input_value",
            "name": "VALUE_F",
            "check": "Colour"
          },
          {
            "type": "input_value",
            "name": "VALUE_C",
            "check": "Colour"
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
        "type": "lcd_drawdotarraybit",
        "message0":"%{BKY_CATLCD_DRAWDOTARRAYBIT_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE_C",
            "check": "Boolean"
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
        "type": "lcd_drawdotarraymove",
        "message0":"%{BKY_CATLCD_DRAWDOTARRAYMOVE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE_X",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE_Y",
            "check": "Number"
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LCD_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      
]);
