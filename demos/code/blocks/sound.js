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
        "type": "sound_play",
        "message0": "%{BKY_CATSOUND_PLAY_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["music1","music1.mp3"],
                        ["music2","music2.mp3"],
                        ["music3","music3.mp3"],
                        ["music4","music4.mp3"],
                        ["music5","music5.mp3"],
                        ["music6","music6.mp3"]
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
        "type": "sound_piano",
        "message0": "%{BKY_CATSOUND_PIANO_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["do","hC1.mp3"],
                        ["re","hD2.mp3"],
                        ["mi","hE3.mp3"],
                        ["fa","hF4.mp3"],
                        ["sol","hG5.mp3"],
                        ["la","hA6.mp3"],
                        ["si","hB7.mp3"],
                       ]
          },
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options":  [["1/4","1"],
                         ["2/4","2"],
                         ["3/4","3"],
                         ["4/4","4"],
                         ["5/4","5"],
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
        "type": "sound_melody",
        "message0": "%{BKY_CATSOUND_MELODY_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["melody1","melody1.mp3"],
                        ["melody2","melody2.mp3"],
                        ["melody3","melody3.mp3"],
                        ["melody4","melody4.mp3"],
                        ["melody5","melody5.mp3"],
                        ["melody6","melody6.mp3"],
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
        "message0": "%{BKY_CATSOUND_EFFECT_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["effect1","effect1.mp3"],
                        ["effect2","effect2.mp3"],
                        ["effect3","effect3.mp3"],
                        ["effect4","effect4.mp3"],
                        ["effect5","effect5.mp3"],
                        ["effect6","effect6.mp3"],
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
        "type": "sound_dance",
        "message0": "%{BKY_CATSOUND_DANCE_TITLE}",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [["dance1","dance1.mp3"],
                        ["dance2","dance2.mp3"],
                        ["dance3","dance3.mp3"],
                        ["dance4","dance4.mp3"],
                        ["dance5","dance5.mp3"],
                        ["dance6","dance6.mp3"],
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