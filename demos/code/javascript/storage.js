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
 * @fileoverview Loading and saving blocks with localStorage and cloud storage.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

// Create a namespace.
var BlocklyStorage = {};

/**
 * Backup code blocks to localStorage.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.backupBlocks_ = function(workspace) {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    // Gets the current URL, not including the hash.
    var url = window.location.href.split('#')[0];
    window.localStorage.setItem(url, Blockly.Xml.domToText(xml));
  }
};

/**
 * Bind the localStorage backup function to the unload event.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
function reddd(){
  alert("reddd");
}
BlocklyStorage.backupOnUnload = function(opt_workspace) {
  
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  window.addEventListener('unload',function() {BlocklyStorage.backupBlocks_(workspace);}, false);
  Window.onbeforeunload =reddd;
};

/**
 * Restore code blocks from localStorage.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.restoreBlocks= function(opt_workspace) {
  var url = window.location.href.split('#')[0];
  if ('localStorage' in window && window.localStorage[url]) {
    var workspace = opt_workspace || Blockly.getMainWorkspace();
    var xml = Blockly.Xml.textToDom(window.localStorage[url]);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }
};

/**
 * Save blocks to database and return a link containing key to XML.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.link = function(opt_workspace) {
  alert("BlocklyStorage");
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  var xml = Blockly.Xml.workspaceToDom(workspace, true);
  // Remove x/y coordinates from XML if there's only one block stack.
  // There's no reason to store this, removing it helps with anonymity.
  if (workspace.getTopBlocks(false).length == 1 && xml.querySelector) {
    var block = xml.querySelector('block');
    if (block) {
      block.removeAttribute('x');
      block.removeAttribute('y');
    }
  }
  var data = Blockly.Xml.domToText(xml);
  BlocklyStorage.makeRequest_('/storage', 'xml', data, workspace);
};

/**
 * Retrieve XML text from database using given key.
 * @param {string} key Key to XML, obtained from href.
 * @param {Blockly.WorkspaceSvg=} opt_workspace Workspace.
 */
BlocklyStorage.retrieveXml = function(key, opt_workspace) {
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  alert("retrieveXml");
  BlocklyStorage.makeRequest_('/storage', 'key', key, workspace);
};

/**
 * Global reference to current AJAX request.
 * @type {XMLHttpRequest}
 * @private
 */
BlocklyStorage.httpRequest_ = null;

/**
 * Fire a new AJAX request.
 * @param {string} url URL to fetch.
 * @param {string} name Name of parameter.
 * @param {string} content Content of parameter.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.makeRequest_ = function(url, name, content, workspace) {
  alert("makeRequest_");
  if (BlocklyStorage.httpRequest_) {
    // AJAX call is in-flight.
    BlocklyStorage.httpRequest_.abort();
  }
  BlocklyStorage.httpRequest_ = new XMLHttpRequest();
  BlocklyStorage.httpRequest_.name = name;
  BlocklyStorage.httpRequest_.onreadystatechange =
      BlocklyStorage.handleRequest_;
  BlocklyStorage.httpRequest_.open('POST', url);
  BlocklyStorage.httpRequest_.setRequestHeader('Content-Type',
      'application/x-www-form-urlencoded');
  BlocklyStorage.httpRequest_.send(name + '=' + encodeURIComponent(content));
  BlocklyStorage.httpRequest_.workspace = workspace;
};
BlocklyStorage.httpPost_ = null;

var zzzzz=0;
BlocklyStorage.handlePost_ = function() {
  if (BlocklyStorage.httpPost_.readyState == 4) {
    if (BlocklyStorage.httpPost_.status != 200) {
      BlocklyStorage.alert(BlocklyStorage.HTTPREQUEST_ERROR + '\n' +
          'httpPost_.status: ' + BlocklyStorage.httpPost_.status);
    } else {
      var data = BlocklyStorage.httpPost_.responseText.trim();
      var content = document.getElementById('content_debug');
      content.textContent +=data+zzzzz+++"\r\n";
    }
    BlocklyStorage.httpPost_ = null;
  }
};

BlocklyStorage.makePost = function(url,content) {
  if (BlocklyStorage.httpPost_) {
    // AJAX call is in-flight.
    BlocklyStorage.httpPost_.abort();
  }
  BlocklyStorage.httpPost_ = new XMLHttpRequest();
  BlocklyStorage.httpPost_.name = name;
  BlocklyStorage.httpPost_.onreadystatechange =BlocklyStorage.handlePost_;
  BlocklyStorage.httpPost_.open('POST', url);
 // BlocklyStorage.httpPost_.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  BlocklyStorage.httpPost_.setRequestHeader('Content-Type','text/event-stream');
  BlocklyStorage.httpPost_.send(content);
};

BlocklyStorage.httpGet_ = null;
BlocklyStorage.handleGet_ = function() {
  var content = document.getElementById('content_debug');
  if (BlocklyStorage.httpGet_.readyState == 4) {
    if (BlocklyStorage.httpGet_.status != 200) {
     // BlocklyStorage.alert(BlocklyStorage.HTTPREQUEST_ERROR + '\n' +'httpGet_.status: ' + BlocklyStorage.httpGet_.status);
     document.getElementById("runButton").innerHTML="<img src='../../media/1x1.gif' class='run icon21'>";
     content.textContent+=MSG["fail"];
    } else {
      var data = BlocklyStorage.httpGet_.responseText.trim();
      content.textContent+=MSG["stop"];
      document.getElementById("runButton").innerHTML="<img src='../../media/1x1.gif' class='run icon21'>";
    }
    BlocklyStorage.httpGet_ = null;
  }else
  if (BlocklyStorage.httpGet_.readyState == 3) {
    var data = BlocklyStorage.httpGet_.responseText.trim();
      content.textContent=MSG["start"]+data;
  }else
  {
      document.getElementById("runButton").innerHTML="<img src='../../media/1x1.gif' class='stop icon21'>";
      content.textContent=MSG["start"];
  }
};
BlocklyStorage.makeGet = function(url,content) {
  if (BlocklyStorage.httpGet_) {
    // AJAX call is in-flight.
    BlocklyStorage.httpGet_.abort();
  }
  BlocklyStorage.httpGet_ = new XMLHttpRequest();
  BlocklyStorage.httpGet_.name = name;
  BlocklyStorage.httpGet_.onreadystatechange =BlocklyStorage.handleGet_;
  BlocklyStorage.httpGet_.open('POST', url);
 // BlocklyStorage.httpPost_.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  BlocklyStorage.httpGet_.setRequestHeader('Content-Type','text/event-stream');
  BlocklyStorage.httpGet_.send(content);
};



/**
 * Callback function for AJAX call.
 * @private
 */
BlocklyStorage.handleRequest_ = function() {

  alert("zzz");
  if (BlocklyStorage.httpRequest_.readyState == 4) {
    if (BlocklyStorage.httpRequest_.status != 200) {
      BlocklyStorage.alert(BlocklyStorage.HTTPREQUEST_ERROR + '\n' +
          'httpRequest_.status: ' + BlocklyStorage.httpRequest_.status);
    } else {
      var data = BlocklyStorage.httpRequest_.responseText.trim();
      if (BlocklyStorage.httpRequest_.name == 'xml') {
        window.location.hash = data;
        BlocklyStorage.alert(BlocklyStorage.LINK_ALERT.replace('%1',
            window.location.href));
      } else if (BlocklyStorage.httpRequest_.name == 'key') {
        if (!data.length) {
          BlocklyStorage.alert(BlocklyStorage.HASH_ERROR.replace('%1',
              window.location.hash));
        } else {
          BlocklyStorage.loadXml_(data, BlocklyStorage.httpRequest_.workspace);
        }
      }
      BlocklyStorage.monitorChanges_(BlocklyStorage.httpRequest_.workspace);
    }
    BlocklyStorage.httpRequest_ = null;
  }
};

/**
 * Start monitoring the workspace.  If a change is made that changes the XML,
 * clear the key from the URL.  Stop monitoring the workspace once such a
 * change is detected.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.monitorChanges_ = function(workspace) {
  var startXmlDom = Blockly.Xml.workspaceToDom(workspace);
  var startXmlText = Blockly.Xml.domToText(startXmlDom);
  function change() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xmlDom);
    if (startXmlText != xmlText) {
      window.location.hash = '';
      workspace.removeChangeListener(bindData);
    }
  }
  var bindData = workspace.addChangeListener(change);
};

/**
 * Load blocks from XML.
 * @param {string} xml Text representation of XML.
 * @param {!Blockly.WorkspaceSvg} workspace Workspace.
 * @private
 */
BlocklyStorage.loadXml_ = function(xml, workspace) {
  try {
    xml = Blockly.Xml.textToDom(xml);
  } catch (e) {
    BlocklyStorage.alert(BlocklyStorage.XML_ERROR + '\nXML: ' + xml);
    return;
  }
  // Clear the workspace to avoid merge.
  workspace.clear();
  Blockly.Xml.domToWorkspace(xml, workspace);
};

/**
 * 存储变量及文本
 * Designed to be overridden if an app has custom dialogs, or a butter bar.
 * @param {string} message Text to alert.
 */

BlocklyStorage.setItem = function(key, value) {
  try{
    window.localStorage.setItem(key,value);
  }catch(e){alert("setItem");}
  try{
    BlocklyStorage.makeGet("/cgi-bin/shell/savefile.lua?"+key,value);
    alert(value);
  }catch(e){alert("Savefile");}
};
BlocklyStorage.getItem = function(key) {
  try{
  return window.localStorage.getItem(key);
  }catch(e){alert("getItem");}
};
BlocklyStorage.removeItem = function(key) {
  try{
    window.localStorage.removeItem(key);
  }catch(e){alert("removeItem");}
};

BlocklyStorage.httpGetConext_ = null;
BlocklyStorage.handleGetTask_= null;
BlocklyStorage.handleGetContext_ = function() {
  if (BlocklyStorage.httpGetConext_.readyState == 4) {
    if (BlocklyStorage.httpGetConext_.status != 200) {
     // BlocklyStorage.alert(BlocklyStorage.HTTPREQUEST_ERROR + '\n' +'httpGet_.status: ' + BlocklyStorage.httpGet_.status);
    } else {
      var data = BlocklyStorage.httpGetConext_.responseText.trim();
      BlocklyStorage.httpGetConext_ = null;
      BlocklyStorage.handleGetTask_(data);
    }
    BlocklyStorage.httpGetConext_ = null;
  }
};
BlocklyStorage.makeGetConext = function(url,content) {
  if (BlocklyStorage.httpGetConext_) {
    // AJAX call is in-flight.
    //BlocklyStorage.httpGetConext_.abort();
    while(BlocklyStorage.httpGetConext_);
  }
  BlocklyStorage.httpGetConext_ = new XMLHttpRequest();
  BlocklyStorage.httpGetConext_.name = name;
  BlocklyStorage.httpGetConext_.onreadystatechange =BlocklyStorage.handleGetContext_;
  BlocklyStorage.httpGetConext_.open('POST', url);
 // BlocklyStorage.httpPost_.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  BlocklyStorage.httpGetConext_.setRequestHeader('Content-Type','text/event-stream');
  BlocklyStorage.httpGetConext_.send(content);
};

BlocklyStorage.getItems = function(key) {
var data = new Array(0);
  try{
   for(var i = 0; i < localStorage.length; i++)
   {
    data[i]=localStorage.key(i);
   }
  }catch(e){}
  return data;
}
/**
 * Present a text message to the user.
 * Designed to be overridden if an app has custom dialogs, or a butter bar.
 * @param {string} message Text to alert.
 */
BlocklyStorage.alert = function(message) {
  window.alert(message);
};
