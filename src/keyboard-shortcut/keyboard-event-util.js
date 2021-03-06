export const keyboardEventUtil = {

  PREVENT_DEFAULT_ACTION: 'preventDefault',

  addKeyDownListener: function(fn) {
    document.addEventListener('keydown', function(evt) {
      var whatToDo = fn(getKeyNameFromEvent(evt));
      if (whatToDo === keyboardEventUtil.PREVENT_DEFAULT_ACTION) {
        evt.preventDefault();
      }
    });
  },

  addKeyUpListener: function(fn) {
    document.addEventListener('keyup', function(evt) {
      fn(getKeyNameFromEvent(evt));
    });
  }
};


const keyCodeToReadableKeyMap = {
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  91: 'Meta', // Seems not to be correct in FF, but FF supports evt.key
  117: 'F6'
};

const mapKeyCodeToReadable = function(keyCode) {
  var keyCodeMap = keyCodeToReadableKeyMap;
  if (keyCode in keyCodeMap) {
    return keyCodeMap[keyCode];
  }
  return String.fromCharCode(keyCode);
};

const getKeyNameFromEvent = function(evt) {
  if (evt.key) {
    // Ctrl+S in FF reports evt.key='s' (which makes sense) but we handle all just in upper case.
    if (evt.key.length === 1) {
      return evt.key.toUpperCase();
    }
    return evt.key;
  }
  return mapKeyCodeToReadable(evt.keyCode);
};

