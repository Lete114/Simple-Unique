var unique = (function () {
  'use strict';

  /**
   * Completely random generation of unique strings
   * @param {Boolean} dot Whether to append to generate '.' Random string
   * @default false
   * @returns {String} Randomly generated string
   */
  function unique() {
    var dot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var r = Math.random;
    var before = r().toString(36).slice(2);
    var nonce = Number(r().toString().slice(2));
    var after = (Date.now() + nonce).toString(36).slice(2);
    var dotNonce = dot ? r().toString(36).slice(1) : '';
    var result = before + after + dotNonce;
    return result;
  }

  return unique;

})();
