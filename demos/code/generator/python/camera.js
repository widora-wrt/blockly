<<<<<<< Updated upstream
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
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name1=Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
    var code="camera"+text_name1+".take()";
    var def ="camera"+text_name1+"=mraa.Camera("+text_name+")";
    Blockly.Python.definitions_[def]=def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['camera_takesize'] = function(block) {
    var text_size =  block.getFieldValue('SIZE');
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name1=Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
    var code="camera"+text_name1+".take("+text_size+")";
    var def ="camera"+text_name1+"=mraa.Camera("+text_name+")";
    Blockly.Python.definitions_[def]=def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['camera_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = "'"+dropdown_name+"'";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
=======
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
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name1=Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
    var code="camera.take("+text_name+")";
    Blockly.Python.definitions_['import_camera'] = 'import camera';
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['camera_previewconsole'] = function(block) {
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name1=Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
    var code="camera.preview("+text_name+",'"+window.location.host+"')\n";
    Blockly.Python.definitions_['import_camera'] = 'import camera';
    return code;
  };
  Blockly.Python['camera_showconsole'] = function(block) {
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name1=Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
    var code="camera.show("+text_name+",'"+window.location.host+"')\n";
    Blockly.Python.definitions_['import_camera'] = 'import camera';
    return code;
  };
  Blockly.Python['camera_takesize'] = function(block) {
    var text_size =  block.getFieldValue('SIZE');
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_name1=Blockly.Python.variableDB_.getName(text_name,Blockly.Variables.NAME_TYPE);
    var code="camera"+text_name1+".take("+text_size+")";
    var def ="camera"+text_name1+"=mraa.Camera("+text_name+")";
    Blockly.Python.definitions_[def]=def;
    Blockly.Python.definitions_['import_mraa'] = 'import mraa';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['camera_list'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = "'"+dropdown_name+"'";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
>>>>>>> Stashed changes
  };