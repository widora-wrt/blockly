/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.camera');

goog.require('Blockly.Python');
Blockly.Python['camera_take'] = function(block) {
    var text_name =  Blockly.Python.valueToCode(block, 'DELAY', Blockly.Python.ORDER_ATOMIC);
    var code="camera.take("+text_name+")";
    Blockly.Python.definitions_['import_camera'] = 'import camera';
    return [code, Blockly.Python.ORDER_NONE];
  };