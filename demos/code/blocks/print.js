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

goog.provide('Blockly.Blocks.print');  // Deprecated
goog.provide('Blockly.Constants.Print');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Msg.PRINT_HUE = '300';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "print_to",
    "message0": "%{BKY_CATPRINT_TO_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": ["Tcpip", "Console","Serial","Lcd","File"],
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_PRINT_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "print_console",
    "message0": "%{BKY_CATPRINT_CONSOLE_TITLE}",
    "output": null,
    "colour": "%{BKY_PRINT_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
  "type": "print_tcpip",
    "message0": "网络 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Ipaddress",
      }
    ],
    "inputsInline": true,
    "output": "Tcpip",
    "colour": "%{BKY_PRINT_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "print_serial",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [["Serial0","0"],
                    ["Serial1","1"],
                    ["Serial2","2"]]
      }
    ],
    "output": "Serial",
    "colour": "%{BKY_PRINT_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "print_lcd",
    "message0": "%{BKY_CATPRINT_LCD_TITLE}",
    "output": "Lcd",
    "colour": "%{BKY_PRINT_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "print_file",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          ["Text0.txt","test0"],
          ["Text1.txt","text1"],
          ["Text2.txt","text2"],
          ["Text3.txt","text3"],
          ]
      }
    ],
    "output": "File",
    "colour": "%{BKY_PRINT_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
]);