// Created by DJ Uittenbogaard - duittenb@cisco.com
// Goal: use xAPI + Macro + GUI to change video unit language - as compact/easy
//    as possible. It's based on/inspired by an existing macro (see end of code)
// Audience: Partner event
// Date: November 2020

const xapi = require('xapi');
 var lang_dict = {};
 var newlang = "English";  // default


function setLanguage(language) {
  // // CHANGE LANGUAGE
  xapi.config.set('UserInterface Language', language).catch((error) => { console.error(error); });
  // CLOSE PANEL ON SCREEN
  xapi.command('UserInterface Extensions Panel Close').catch((error) => { console.error(error); });
}

function onGui(event) {
  if (event.Type === 'pressed' && event.WidgetId === 'lang_selector'){
    newlang = event.Value.substring(5)
    setLanguage(newlang);
    console.log(">>>> you clicked " + newlang);
  }
}

xapi.event.on('UserInterface Extensions Widget Action', onGui);


// Original https://github.com/CiscoDevNet/roomdevices-macros-samples/tree/master/Language%20Selector