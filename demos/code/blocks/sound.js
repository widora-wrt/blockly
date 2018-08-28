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

goog.provide('Blockly.Blocks.pwm');  // Deprecated
goog.provide('Blockly.Constants.Sound');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.SOUND_HUE = '99';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "sound_music",
        "message0": "%{BKY_CATSOUND_MUSIC_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["music1","music1.mp3"],
                        ["music2","music2.mp3"],
                        ["music3","music3.mp3"]]
          },
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_SOUND_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "sound_piano",
        "message0": "钢琴 %1 调 %2 节拍",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["C1","0"],
                        ["C2","1"],
                        ["C3","2"],
                        ["C4","3"],
                        ["C5","4"],
                       ]
          },
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options":  [["1/4","0"],
                         ["2/4","1"],
                         ["3/4","2"],
                         ["4/4","3"],
                         ["5/4","4"],
           ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_SOUND_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "sound_marimba",
        "message0": "马琳巴 %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "马林巴1",
                "1"
              ],
              [
                "马林巴2",
                "2"
              ],
              [
                "马林巴3",
                "3"
              ]
            ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour":  "%{BKY_SOUND_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "sound_effect",
        "message0": "音效 %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "鼓掌",
                "1"
              ],
              [
                "拜拜",
                "2"
              ],
              [
                "失败",
                "3"
              ]
            ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour":  "%{BKY_SOUND_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
]);