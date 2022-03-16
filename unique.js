/**
 * Completely random generation of unique strings
 * @param {Boolean} dot Whether to append to generate '.' Random string
 * @default false
 * @returns {String} Randomly generated string
 */
function unique(dot = false) {
  const r = Math.random
  const before = r().toString(36).slice(2)
  const nonce = Number(r().toString().slice(2))
  const after = (Date.now() + nonce).toString(36).slice(2)
  const dotNonce = dot ? r().toString(36).slice(1) : ''
  const result = before + after + dotNonce
  return result
}

export default unique
