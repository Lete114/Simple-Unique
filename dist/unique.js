var unique = (function () {
  'use strict';

  /**
   * Completely random generation of unique strings
   * @param {Number} size Generate the length of a random string
   * @default 10
   * @returns {String} Randomly generated string
   */
  function unique(size) {
    size = size || 10;

    var r = function r() {
      return Math.random().toString(36).slice(2);
    };

    var result = r();

    while (result.length < size) {
      result += r();
    }

    return result.slice(0, size);
  }

  return unique;

})();
