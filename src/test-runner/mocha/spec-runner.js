var expect = require('referee/lib/expect');
var should = require('should');
var assert = require('assert');

import RuntimeError from '../runtime-error'
import {compile} from '../compiler'

function setErrorMessage(errorMessage) {
  document.getElementById('errorOutput').innerText = errorMessage;
}

function consumeMessage(messageData) {
  var sender = messageData.source;

  var specCodeDefinition = messageData.data;
  var specLanguage = specCodeDefinition.language;
  var specSource = specCodeDefinition.source;

  // Reset mocha env
  document.getElementById('mocha').innerHTML = '';
  var mocha = new Mocha({reporter: 'html', ui: 'bdd'});
  mocha.suite.emit('pre-require', this, null, this);

  // Run the spec source code, this calls describe, it, etc. and "fills"
  // the test runner suites which are executed later in `mocha.run()`.
  setErrorMessage('');

  var es5Code;
  try {
    es5Code = compile(specLanguage, specSource);
  } catch(e) {
    setErrorMessage('Syntax or transpile error\n\n' + e);
    return;
  }

  try {
    eval(es5Code);
  } catch(e) {
    setErrorMessage('Runtime error\n\n' + e + '\n\n' + RuntimeError.prettyPrint(e.stack, es5Code));
    return;
  }

  // Let mocha run and report the stats back to the actual sender.
  mocha.checkLeaks();
  var runner = mocha.run(function() {}); // if there is no callback given mocha will fail and not work again :(
  function onRan() {
    var stats = runner.stats;
    sender.postMessage(stats, '*');
  }
  runner.on('end', onRan);
}

window.addEventListener('message', consumeMessage, false);
