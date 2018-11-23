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

goog.provide('Blockly.Blocks.file');  // Deprecated
goog.provide('Blockly.Constants.File');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Msg.FILE_HUE = '320';
/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "file_list",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                        ["Text0.txt","/www/pyly/file/text0.txt"],
                        ["Text1.txt","/www/pyly/file/text1.txt"],
                        ["Text2.txt","/www/pyly/file/text2.txt"],
                        ["Text3.txt","/www/pyly/file/text3.txt"],
                        ]
          }
        ],
        "output": "String",
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_write",
        "message0": "%{BKY_CATFILE_WRITE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "String",
          },
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_create",
        "message0": "%{BKY_CATFILE_CREATE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "String",
          },
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_writeline",
        "message0": "%{BKY_CATFILE_WRITELINE_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "String",
          },
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_read",
        "message0": "%{BKY_CATFILE_READ_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String",
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_readline",
        "message0": "%{BKY_CATFILE_READLINE_TITLE}",
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
        "output": "String",
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_readlines",
        "message0": "%{BKY_CATFILE_READLINES_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String",
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": "%{BKY_FILE_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "file_wget",
            "message0": "%{BKY_CATFILE_WGET_TITLE}",
            "args0": [
              {
                "type": "input_value",
                "name": "VALUE",
              },
            ],
            "inputsInline": true,
            "output":"String",
            "colour": "%{BKY_FILE_HUE}",
            "tooltip": "",
            "helpUrl": ""
        }
]);