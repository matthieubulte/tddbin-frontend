if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([
  '../shortcut-manager',
  '../keyboard-util',
  './util'
],function(
  ShortcutManager,
  keyboardUtil,
  util
) {

  var toKeyCodes = util.toKeyCodes;

  describe('DOM event handling', function() {

    it('should prevent default when shortcut is `overridden`', function() {
      var callback = jasmine.createSpy('callback');
      var keyDownListeners = [];
      var keyUpListeners = [];
      spyOn(keyboardUtil, 'addKeyDownListener').andCallFake(function(fn) {
        keyDownListeners.push(fn);
      });
      spyOn(keyboardUtil, 'addKeyUpListener').andCallFake(function(fn) {
        keyUpListeners.push(fn);
      });

      var shortcut = ['Meta', 'S'];
      mapShortcuts([[shortcut, callback]]);

      keyDownListeners[0](toKeyCodes(['Meta']));
      var returnValue = keyDownListeners[0](toKeyCodes(['S']));
      keyUpListeners[0](toKeyCodes(['S']));
      keyUpListeners[0](toKeyCodes(['Meta']));

      expect(returnValue).toBe(keyboardUtil.PREVENT_DEFAULT_ACTION);

    });
  });

  function mapShortcuts(shortcuts) {
    var manager = new ShortcutManager();
    shortcuts.forEach(function(shortcut) {
      manager.registerShortcut(shortcut[0], shortcut[1]);
    });
  }

});
