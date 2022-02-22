'use strict';

const eejs = require('md_mudoc-lite/node/eejs/');
const settings = require('md_mudoc-lite/node/utils/Settings');

exports.eejsBlock_mySettings = (hookName, args, cb) => {
  let checkedState = 'checked';
  if (settings.md_spellcheck) {
    if (settings.md_spellcheck.disabledByDefault === true) {
      checkedState = '';
    }
  }
  const ejsPath = 'md_spellcheck/templates/spellcheck_entry.ejs';
  args.content += eejs.require(ejsPath, { checked: checkedState });
  return cb();
};

exports.eejsBlock_dd_view = (hookName, args, cb) => {
  const li = "<li><a href='#' onClick='$(\"#options-spellcheck\").click();'>Spell Check</a></li>";
  args.content += li;
};
