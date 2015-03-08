import React from 'react';
import View from './main-view';
import TestRunner from '../test-runner/runner';
import ShortcutProcessor from '../keyboard-shortcut/shortcut-processor';
var compiler = require('../test-runner/compiler');
var editor = require('ace-with-plugins');

export function Controller(domNode, config) {
  this._domNode = domNode;
  this._config = config;
  this._currentLanguage = compiler.ES5;

  this.availableLanguages = [
    { language: compiler.ES5, aceMode: 'ace/mode/javascript' },
    { language: compiler.ES6, aceMode: 'ace/mode/javascript' },
    { language: compiler.CoffeeScript, aceMode: 'ace/mode/coffee'}
  ];

  this.render();
}

Controller.prototype = {

  _component: null,

  render: function() {
    this._editorDomNodeId = 'editorId';
    this._runnerDomNodeId = 'runnerId';
    this._render();
    this._editor = editor(this._editorDomNodeId);
    this._runner = new TestRunner(document.getElementById(this._runnerDomNodeId));
    this._runner.render(this._config.iframeSrcUrl);
    this.setEditorContent(this._config.initialContent);
    this._registerShortcuts(this._config.shortcuts);
  },

  _render: function(shortcuts=[]) {
    var props = {
      metaKeySymbol: '⌘',
      editorId: this._editorDomNodeId,
      runnerId: this._runnerDomNodeId,
      onSave: this.onSave.bind(this),
      onResetCode: this._onResetCode,
      shortcuts: shortcuts,
      currentLanguage: this._currentLanguage,
      toggleLanguage: this._toggleLanguage.bind(this),
    };
    this._component = React.render(<View {...props}/>, this._domNode);
  },

  onSave: function() {
    window.localStorage.setItem('code', this._editor.getContent());
    this.runEditorContent();
  },

  _onResetCode: function() {
    window.localStorage.removeItem('code');
    window.location.reload();
  },

  _toggleLanguage: function() {
    var currentLanguageIndex = this._findCurrentLanguageIndex();
    var nextLanguageIndex = 1 + currentLanguageIndex;
    if(nextLanguageIndex >= this.availableLanguages.length) {
      nextLanguageIndex = 0;
    }

    var language = this.availableLanguages[nextLanguageIndex];

    this._currentLanguage = language.language;
    // TODO: that's quite uggly, we should talk about the ace-with-plugins project
    this._editor._editor._editor.getSession().setMode(language.aceMode);

    this._render();
  },

  _findCurrentLanguageIndex: function() {
    var currentLanguage = this._currentLanguage;
    return this.availableLanguages.reduce(function(foundIndex, language, index) {
      if(foundIndex === -1 && language.language === currentLanguage) {
        foundIndex = index;
      }

      return foundIndex;
    }, -1);
  },

  setEditorContent: function(sourceCode) {
    this._editor.setContent(sourceCode);
  },

  runEditorContent: function() {
    this._runner.send({
      source: this._editor.getContent(),
      language: this._currentLanguage
    });
  },

  turnOnRenameMode: function() {
    this._editor.turnOnRenameMode();
  },

  _registerShortcuts: function(shortcuts) {
    var processor = new ShortcutProcessor();
    processor.registerShortcuts(shortcuts);
    processor.onKeyDown(this._updateOverlayView.bind(this));
    processor.onShortcutEnd(this._hideOverlayView.bind(this));
  },

  _hideOverlayView: function() {
    //this._component.props = {shortcuts: []};
    //this._component.setProps({shortcuts: []});
    this._render([]);
  },

  _updateOverlayView: function(pressedKeys) {
    var allShortcuts = this._config.shortcuts;
    var applicableShortcuts = allShortcuts.filter(function(shortcut) {
      return shortcut.isStartOfKeyCombo(pressedKeys);
    });
    this._render(applicableShortcuts);
    //this._component.props = {shortcuts: applicableShortcuts};
    //this._component.props.shortcuts = applicableShortcuts;
    //this._component.setProps({shortcuts: applicableShortcuts});
  }

};
