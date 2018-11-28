/**
 * Blockly Demos: Code
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
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
  'en': 'English',
  /*'ar': 'العربية',
  'be-tarask': 'Taraškievica',
  'br': 'Brezhoneg',
  'ca': 'Català',
  'cs': 'Česky',
  'da': 'Dansk',
  'de': 'Deutsch',
  'el': 'Ελληνικά',
  'en': 'English',
  'es': 'Español',
  'et': 'Eesti',
  'fa': 'فارسی',
  'fr': 'Français',
  'he': 'עברית',
  'hrx': 'Hunsrik',
  'hu': 'Magyar',
  'ia': 'Interlingua',
  'is': 'Íslenska',
  'it': 'Italiano',
  'ja': '日本語',
  'kab': 'Kabyle',
  'ko': '한국어',
  'mk': 'Македонски',
  'ms': 'Bahasa Melayu',
  'nb': 'Norsk Bokmål',
  'nl': 'Nederlands, Vlaams',
  'oc': 'Lenga d\'òc',
  'pl': 'Polski',
  'pms': 'Piemontèis',
  'pt-br': 'Português Brasileiro',
  'ro': 'Română',
  'ru': 'Русский',
  'sc': 'Sardu',
  'sk': 'Slovenčina',
  'sr': 'Српски',
  'sv': 'Svenska',
  'ta': 'தமிழ்',
  'th': 'ภาษาไทย',
  'tlh': 'tlhIngan Hol',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'vi': 'Tiếng Việt',*/
  'zh-hans': '简体中文',
  //'zh-hant': '正體中文'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;
Code.selectname = null;
Code.targetdevice=null;
/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang=window.sessionStorage.selectlang;
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    lang = 'zh-hans';
    window.sessionStorage.selectlang=lang;
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(languageMenu.options[languageMenu.selectedIndex].value);
  window.sessionStorage.selectlang=newLang;
  if(Code.targetdevice)
  {
    BlocklyStorage.handleGetTask_=function(text)
    {
      window.location = window.location.protocol + '//' +window.location.host + window.location.pathname;
    }
    BlocklyStorage.makeGetConext("/cgi-bin/opt/shell/setfile.lua?selectlang",newLang);
  }else{
    window.location = window.location.protocol + '//' +window.location.host + window.location.pathname;
  }
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  var script = document.createElement('script');
  script.setAttribute('src', '../../patch/run_prettify.js');
  document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'python','debug'];

Code.selected = 'blocks';
Code.runSelected = 'python';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {


  if (document.getElementById('tab_blocks').className == 'tabon') {
    Code.workspace.setVisible(false);
  }
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  Code.selected = clickedName;
  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
      'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.svgResize(Code.workspace);
  if( Code.selected=="python")Code.runSelected="python";
  if( Code.selected=="javascript")Code.runSelected="javascript";
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('content_' + Code.selected);
  if (content.id == 'content_javascript') {
    Code.attemptCodeGeneration(Blockly.JavaScript, 'js');
  } else if (content.id == 'content_python') {
    Code.attemptCodeGeneration(Blockly.Python, 'py');
  } else if (content.id == 'content_php') {
    Code.attemptCodeGeneration(Blockly.PHP, 'php');
  } else if (content.id == 'content_lua') {
    Code.attemptCodeGeneration(Blockly.Lua, 'lua');
  }
};

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param generator {!Blockly.Generator} The generator to use.
 * @param prettyPrintType {string} The file type key for the pretty printer.
 */
Code.attemptCodeGeneration = function(generator, prettyPrintType) {
  var content = document.getElementById('content_' + Code.selected);
  content.textContent = '';
  if (Code.checkAllGeneratorFunctionsDefined(generator)) {
    var code = generator.workspaceToCode(Code.workspace);

    content.textContent = code+"<br><br><br>";
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, prettyPrintType);
      content.innerHTML = code;
    }
  }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.checkAllGeneratorFunctionsDefined = function(generator) {
  var blocks = Code.workspace.getAllBlocks();
  var missingBlockGenerators = [];
  for (var i = 0; i < blocks.length; i++) {
    var blockType = blocks[i].type;
    if (!generator[blockType]) {
      if (missingBlockGenerators.indexOf(blockType) === -1) {
        missingBlockGenerators.push(blockType);
      }
    }
  }

  var valid = missingBlockGenerators.length == 0;
  if (!valid) {
    var msg = 'The generator code for the following blocks not specified for '
        + generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
    Blockly.alert(msg);  // Assuming synchronous. No callback.
  }
  return valid;
};
/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
  Code.targetdevice=true;
  Code.keyInit();
  Code.initTarget();
  var rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = Code.getBBox_(container);
    for (var i = 0; i < Code.TABS_.length; i++) {
      var el = document.getElementById('content_' + Code.TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
          (Code.workspace.toolbox_.width - 38) + 'px';
          // Account for the 19 pixel margin and on each side.
    }
  };
  window.addEventListener('resize', onresize, false);

  // The toolbox XML specifies each category name using Blockly's messaging
  // format (eg. `<category name="%{BKY_CATLOGIC}">`).
  // These message keys need to be defined in `Blockly.Msg` in order to
  // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
  // been defined for each language to import each category name message
  // into `Blockly.Msg`.
  // TODO: Clean up the message files so this is done explicitly instead of
  // through this for-loop.
  for (var messageKey in MSG) {
    if (messageKey.indexOf('cat') == 0) {
      Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
    }
  }

  // Construct the toolbox XML, replacing translated variable names.
  var toolboxText = document.getElementById('toolbox').outerHTML;
  toolboxText = toolboxText.replace(/(^|[^%]){(\w+)}/g,
      function(m, p1, p2) {return p1 + MSG[p2];});
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);

  Code.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 20,
           length: 1,
           colour: '#ccc',
           snap: true},
       media: '../../media/',
       rtl: rtl,
       toolbox: toolboxXml,
       zoom:
           {controls: true,
            wheel: true}
      });

  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  Code.loadBlocks('');

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.tabClick(Code.selected);

  //Code.bindClick('trashButton',function() {Code.discard(); Code.renderContent();});
  //Code.bindClick('runButton', Code.runJS);
  //Code.bindClick('likeButton', Code.likeJS);
  // Disable the link button if page isn't backed by App Engine storage.
  //var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
  }

  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
        function(name_) {return function() {Code.tabClick(name_);};}(name));
  }
  onresize();
  Blockly.svgResize(Code.workspace);

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
};

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  document.title += ' ' + MSG['title'];
  document.getElementById('title').textContent = MSG['title'];
  document.getElementById('tab_blocks').textContent = MSG['blocks'];
  document.getElementById('tab_debug').textContent = MSG['debug'];
  document.getElementById('tab_python').textContent = MSG['code'];
  document.getElementById('copyright').textContent = MSG['copyright'];
 // document.getElementById('linkButton').title = MSG['linkTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  document.getElementById('trashButton').title = MSG['trashTooltip'];
  document.getElementById('likeButton').title = MSG['likeTooltip'];
};
/**
 * Save the blocks and reload with a different language.
 */
Code.changeTemplate = function() {
  var templateMenu = document.getElementById('TemplateMenu');
  BlocklyStorage.handleGetTask_=function(text)
  {
    Code.workspace.clear();
    var xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
    Code.tabClick("blocks");
  }
  window.sessionStorage.selectname=templateMenu.options[templateMenu.selectedIndex].value;
  BlocklyStorage.makeGetConext("/cgi-bin/opt/shell/loadfile.lua?gide."+window.sessionStorage.selectname,"null");
};
Code.endWith=function(str,end){
  
  if(end==null||end==""||str.length==0||end.length>str.length)
      return false;
  if(str.substring(str.length-end.length)==end)
      return true;
  else
      return false;
}

Code.initTargetdevice = function() {
  var objSelect = document.getElementById("TemplateMenu");
  objSelect.addEventListener('change', Code.changeTemplate, true);
  BlocklyStorage.handleGetTask_=function(text)
  {
    var objSelect = document.getElementById("TemplateMenu");
    objSelect.length=0;
    var data = text.split('\n');
    for(var i = 0; i < data.length; i++)
    {
      
      if(Code.endWith(data[i],".s"))
      {
        var temp=decodeURI(data[i]);
        if(window.sessionStorage.selectname==null)window.sessionStorage.selectname=temp.replace(".s","").replace("gide.","");
      }else 
      if(Code.endWith(data[i],".t"))
      {
        var name=decodeURI(data[i]);
        name=name.replace("gide.","");
        var new_opt = new Option(name);   
        if (name ==window.sessionStorage.selectname) {
          new_opt.selected = true;
        }
        objSelect.options.add(new_opt);
      }else
      if(Code.endWith(data[i],".s"))
      {
        var temp=decodeURI(data[i]);
        if(window.sessionStorage.selectlang==null)window.sessionStorage.selectlang=temp.replace(".l","");
      }
    }
    Code.initLanguage();
  }
  BlocklyStorage.makeGetConext("/cgi-bin/opt/shell/listfile.lua","null");
}
Code.initTargetserver = function() {

  var storage = window.sessionStoragee; 
  var objSelect = document.getElementById("TemplateMenu");
  objSelect.length=0;

  var new_opt = new Option("d");   
  objSelect.options.add(new_opt);
  Code.initLanguage();
}
Code.initTarget = function() {
  if(Code.targetdevice)Code.initTargetdevice();
  else Code.initTargetserver();
  var languageMenu = document.getElementById('languageMenu');
  if(languageMenu.options.length == 0) Code.initLanguage();
}


/**
 * Execute the user's code.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
Code.RunPython=function(){
  try {
    //alert(document.getElementById("runButton").innerHTML);
    var code="# -*- coding: utf-8 -*-\n"+Blockly.Python.workspaceToCode(Code.workspace); 
    if(document.getElementById("runButton").innerHTML.indexOf("run")>0)
    {
     // if(confirm(MSG["reallyrun"]))
      {
      Code.tabClick("debug");
      var content = document.getElementById('content_debug');
      content.textContent=MSG["start"];
      BlocklyStorage.makeGet("/cgi-bin/opt/shell/api.lua",code);
      }
    }else 
    {
      if(document.getElementById("runButton").innerHTML.indexOf("stop")>0 )
      {
        BlocklyStorage.makeGet("/cgi-bin/opt/shell/kill.lua","");
      }
    }
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
}
Code.RunJavascript=function(){
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function() {
    if (timeouts++ > 1000000) {
      throw MSG['timeout'];
    }
  };
  Code.tabClick("debug");
  var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
}
Code.keyInit=function(){
  document.onkeydown=function(event){
    var e = event;
    if(e && e.keyCode==27){ // 按 Esc 
      BlocklyStorage.makeGet("/cgi-bin/opt/shell/kill.lua","");
     }
    if(e && e.keyCode==13){ // 按 F2 
      var code="# -*- coding: utf-8 -*-\n"+Blockly.Python.workspaceToCode(Code.workspace); 
      var content = document.getElementById('content_debug');
      content.textContent=MSG["start"];
      BlocklyStorage.makeGet("/cgi-bin/opt/shell/api.lua",code);
    }
    //alert(e.keyCode);
  }; 
};
Code.Test=function(){
  var a=document.getElementById("demo1").value;
  alert(a);
}
Code.runJS = function() {
  try {

    var code="# -*- coding: utf-8 -*-\n"+Blockly.Python.workspaceToCode(Code.workspace); 
    if(document.getElementById("runButton").innerHTML.indexOf("run")>0)
    {
     // if(confirm(MSG["reallyrun"]))
      {
      Code.tabClick("debug");
      var content = document.getElementById('content_debug');
      content.textContent=MSG["start"];
      BlocklyStorage.makeGet("/cgi-bin/opt/shell/api.lua",code);
      }
    }else 
    {
      if(document.getElementById("runButton").innerHTML.indexOf("stop")>0 )
      {
       BlocklyStorage.makeGet("/cgi-bin/opt/shell/kill.lua","");
      }
    }
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
  var content = document.getElementById('content_debug');
};
Code.likeJS = function() {

  var objSelect = document.getElementById("TemplateMenu");
  var index = objSelect.selectedIndex; // 选中索引
  var text = objSelect.options[index].text; // 选中文本
  var name=prompt(MSG['likeinputtitle'],text.replace(".t",""));
  if(name==null)return; 
  var new_opt = new Option(name+".t");  
  objSelect.options.add(new_opt);
  var xml = Blockly.Xml.workspaceToDom(Code.workspace);
  var text = Blockly.Xml.domToText(xml);
  //BlocklyStorage.setItem("gide.select",name+".t");
  window.sessionStorage.selectname=name+".t";
  BlocklyStorage.handleGetTask_=function(text)
  {
    window.location = window.location.protocol + '//' +window.location.host + window.location.pathname;
  }
  BlocklyStorage.makeGetConext("/cgi-bin/opt/shell/savefile.lua?gide."+window.sessionStorage.selectname,text);
};
/**
 * Discard all blocks from the workspace.
 */

Code.discard = function() {
  var sname=window.sessionStorage.selectname;
  if(sname==undefined)sname="";
  if(Code.selected=="debug")
  {
    var content = document.getElementById('content_debug');
    content.textContent=null;
    return;
  }
  var count = Code.workspace.getAllBlocks().length;
  if (window.confirm(MSG['deletethiscontext'].replace('%1', sname).replace("%2",count))) 
      {
       BlocklyStorage.handleGetTask_=function(text)
      {
        delete window.sessionStorage.loadOnceBlocks;
        delete window.sessionStorage.selectname;
      //  var xml = Blockly.Xml.textToDom(loadOnce);
       // Blockly.Xml.domToWorkspace("", Code.workspace);
        window.location = window.location.protocol + '//' +window.location.host + window.location.pathname;
      }
      BlocklyStorage.makeGetConext("/cgi-bin/opt/shell/deletefefile.lua?gide."+window.sessionStorage.selectname,"");
  }
  
};
Code.print= function(msg) {
  var content = document.getElementById('content_debug');
     content.textContent+=msg+"\r\n";
};

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../../msg/js/' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);

