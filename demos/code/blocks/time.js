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

goog.provide('Blockly.Blocks.time');  // Deprecated
goog.provide('Blockly.Constants.Time');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.TIME_HUE = '222';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "time_getnow",
        "message0":"%{BKY_CATTIME_GETNOW_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options":[
              ["%{BKY_CATTIME_TIMEOPTION_YEAR}","year"],
              ["%{BKY_CATTIME_TIMEOPTION_MONTH}","month"],
              ["%{BKY_CATTIME_TIMEOPTION_DAY}","day"],
              ["%{BKY_CATTIME_TIMEOPTION_HOUR}","hour"],
              ["%{BKY_CATTIME_TIMEOPTION_MINUTE}","minute"],
              ["%{BKY_CATTIME_TIMEOPTION_SECOND}","second"],
            ]
          }
        ],
        "output": null,
        "colour": "%{BKY_TIME_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "time_sleep",
        "message0": "%{BKY_CATTIME_SLEEP_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_TIME_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "time_nowdate",
        "message0": "%{BKY_CATTIME_NOWDATE_TITLE}",
        "args0": [
        ],
        "output": "String",
        "colour": "%{BKY_TIME_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "time_nowtime",
        "message0": "%{BKY_CATTIME_NOWTIME_TITLE}",
        "args0": [
        ],
        "output": "String",
        "colour": "%{BKY_TIME_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "time_timer",
        "message0": "%{BKY_CATTIME_TIMER_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "Number"
          },
          {
            "type": "input_statement",
            "name": "FUNC"
          }
        ],
        "previousStatement": null,
        "inputsInline": true,
        "nextStatement": null,
        "colour": "%{BKY_TIME_HUE}",
        "tooltip":  "",
        "helpUrl": ""
      },
    {
        "type": "timer_list",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                        ["Timer0","0"],
                        ["Timer1","1"],
                        ["Timer2","2"],
                        ["Timer3","3"],
                        ["Timer4","4"],
                        ["Timer5","5"],
                        ]
          }
        ],
        "output": "Number",
        "colour": "%{BKY_TIME_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "time_thread",
        "message0": "%{BKY_CATTIME_THREAD_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          },
          {
            "type": "input_statement",
            "name": "FUNC"
          }
        ],
        "previousStatement": null,
        "inputsInline": true,
        "nextStatement": null,
        "colour": "%{BKY_TIME_HUE}",
        "tooltip":  "",
        "helpUrl": ""
      },
      {
        "type": "thread_list",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                        ["Thread0","0"],
                        ["Thread1","1"],
                        ["Thread2","2"],
                        ["Thread3","3"],
                        ["Thread4","4"],
                        ["Thread5","5"],
                        ]
          }
        ],
        "output": "Number",
        "colour": "%{BKY_TIME_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
]);