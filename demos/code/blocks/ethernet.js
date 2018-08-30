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

goog.provide('Blockly.Blocks.ethernet');  // Deprecated
goog.provide('Blockly.Constants.Ethernet');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Msg.ETHERNET_HUE = '260';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
    "type": "ethernet_ipaddress",
    "message0": "%{BKY_CATETHERNET_IPADDRESS_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String",
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number",
      }
    ],
    "inputsInline": true,
    "output": "Ipaddress",
    "colour": "%{BKY_ETHERNET_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ethernet_connect",
    "message0": "%{BKY_CATETHERNET_CONNECT_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Ipaddress",
        "align": "RIGHT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ETHERNET_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ethernet_send",
    "message0": "%{BKY_CATETHERNET_SEND_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Ipaddress",
      },
      {
        "type": "input_value",
        "name": "VALUE",
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ETHERNET_HUE}",
    "tooltip": "",
    "helpUrl": ""
   },
   {
    "type": "ethernet_recv",
    "message0":"%{BKY_CATETHERNET_REVICE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Ipaddress",
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number",
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_ETHERNET_HUE}",
    "tooltip": "",
    "helpUrl": ""
   }
]);
