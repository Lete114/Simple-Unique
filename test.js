const unique = require('./dist/unique.cjs')

const arr1 = [unique(), unique()]
const arr2 = [unique(true), unique(true)]

console.log(arr1[0] === arr1[1], arr1)
console.log(arr2[0] === arr2[1], arr2)
