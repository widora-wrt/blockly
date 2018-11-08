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

goog.provide('Blockly.Python.tcpip');

goog.require('Blockly.Python');

Blockly.Python['tcpip_ipaddress'] = function(block) {
    var text_name =  Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var number_port =  Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = text_name+","+number_port;
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['tcpip_connect'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var value = dropdown_name.replace(/[^0-9]/ig,""); 
    var code ="connect_"+value+".connect("+dropdown_name+value_name+")\n";
    var def = "connect_"+value+"=socket.socket(socket.AF_INET, socket.SOCK_STREAM)";
    Blockly.Python.definitions_['import_socket'] = 'import socket';
    Blockly.Python.definitions_[def] = def;
    return code;
  };
  Blockly.Python['tcpip_send'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var value = dropdown_name.replace(/[^0-9]/ig,""); 
    var code ="connect_"+value+".sendall(str("+value_name+"))\n";
    Blockly.Python.definitions_['import_socket'] = 'import socket';
    return code;
  };
  Blockly.Python['tcpip_recv'] = function(block) {
    var dropdown_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var value = dropdown_name.replace(/[^0-9]/ig,""); 
    var code ="connect_"+value+".recv("+value_name+")";
    Blockly.Python.definitions_['import_socket'] = 'import socket';
    return [code, Blockly.Python.ORDER_NONE];
  };