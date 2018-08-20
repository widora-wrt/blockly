
'use strict';

goog.provide('Blockly.Blocks.gpio');  // Deprecated
goog.provide('Blockly.Constants.Gpio');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for creating an empty list
    // The 'list_create_with' block is preferred as it is more flexible.
    // <block type="lists_create_with">
    //   <mutation items="0"></mutation>
    // </block>
    {
      "type": "gpio_create_empty",
      "message0": "dddd",
      "output": "Array",
      "colour": 33,
      "tooltip": "",
      "helpUrl": ""
    }
]);