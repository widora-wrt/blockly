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

goog.provide('Blockly.Blocks.i2c');  // Deprecated
goog.provide('Blockly.Constants.I2c');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.I2C_HUE = '146';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "i2c_list",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["I2C0","0"]]
          }
        ],
        "output": "Number",
        "colour": "%{BKY_I2C_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "i2c_address",
        "message0": "%{BKY_CATI2C_ADDRESS_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "VALUE",
            "value": 52,
            "min": 0,
            "max": 255
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_I2C_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "i2c_readreg",
        "message0":"%{BKY_CATI2C_READREG_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "field_number",
            "name": "VALUE",
            "value": 0,
            "min": 0,
            "max": 255
          }
        ],
        "output": "Number",
        "colour": "%{BKY_I2C_HUE}",
        "tooltip": "",
        "helpUrl": ""
      }
]);