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

goog.provide('Blockly.Blocks.gpio');  // Deprecated
goog.provide('Blockly.Constants.Gpio');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "gpio_set",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "GPIO0",
            "0"
          ],
          [
            "GPIO1",
            "1"
          ],
          [
            "GPIO2",
            "2"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "IOVALUE",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "gpio_get",
    "message0": " %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "IOVALUE",
        "options": [["GPIO0", "0"], ["GPIO1", "1"], ["GPIO2", "2"]]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "%{BKY_GPIO_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }
]);  // END JSON EXTRACT (Do not delete this comment.)
