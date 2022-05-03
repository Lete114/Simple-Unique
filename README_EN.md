<div align="right">
  Language:
  English
  <a title="中文" href="/README.md">中文</a>
</div>

<h1 align="center"><a href="https://github.com/lete114/XHR-Ajax" target="_blank">Simple-Unique</a></h1>
<p align="center">Completely random generation of unique strings · Ultra-lightweight</p>

<p align="center">
    <a href="https://github.com/Lete114/Simple-Unique/releases/"><img src="https://img.shields.io/npm/v/simple-unique?logo=npm" alt="Version"></a>
    <a href="https://github.com/Lete114/Simple-Unique/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Lete114/Simple-Unique?color=FF5531" alt="MIT License"></a>
</p>

## Introduction

Completely random generation of unique strings · **Ultra-lightweight**

Compressed size: 180~ Byte

gzip size: 150~ bit

## Installing

Using npm:

```bash
npm install simple-unique --save
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/simple-unique/dist/unique.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/simple-unique/dist/unique.min.js"></script>
```

## Example Usage

### CLI

You can install it globally and use it in the terminal

```bash
npm install simple-unique -g
```

You can also use `npx` to use `Simple-Unique` without installation

```bash
npx simple-unique
npx: installed 1 in 1.82s
3f7c94zs79
```

Customized unique string length

> Note that `sunique` is the alias generated after global installation, either `sunique` or `simple-unique` can be used (`sunique` is recommended)

```bash
sunique --size 20
y8n69mohr3pmf7vg19to
```

### Node.js

```js
const unique = require('simple-unique')
const arr1 = [unique(), unique()]
const arr2 = [unique(20), unique(20)]

console.log(arr1[0] === arr1[1], arr1) // false [ 'krntrfokkp', '35tftcm3tr' ]
console.log(arr2[0] === arr2[1], arr2) // false [ 'lva8timtvipgbenfjkhj', '9s32qj2chqulqxox7npq' ]
```

### ES Modules

```js
import unique from 'simple-unique'
const arr1 = [unique(), unique()]
const arr2 = [unique(20), unique(20)]

console.log(arr1[0] === arr1[1], arr1) // false [ 'sscya8ri7m', 'nbfrebutok' ]
console.log(arr2[0] === arr2[1], arr2) // false [ 'bcl5371wv3txd3d3a8zt', 'uvt8uiogn2jjbot9b07p' ]
```

### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/simple-unique/dist/unique.min.js"></script>
<script>
  const arr1 = [unique(), unique()]
  const arr2 = [unique(20), unique(20)]

  console.log(arr1[0] === arr1[1], arr1) // false [ 'gsf2e7u9fw', 'y2vm3x0tpv' ]
  console.log(arr2[0] === arr2[1], arr2) // false [ 'l399uakldce29mfev391', '36t375r2uim63wkplz1s' ]
</script>
```

## Simple-Unique VS NanoID

[Simple-Unique](https://github.com/Lete114/Simple-Unique) is compared with [NanoID](https://github.com/ai/nanoid) to generate `9999999` (10 million) unique ids with 10 digits length respectively

> The following results were tested in the browser console
>
> Simple-Unique is about 7 times more efficient than NanoID
>
> - Simple-Unique: 3775.31591796875 ms (about 3~5 seconds)
> - NanoID: 26226.182861328125 ms (about 26~28 seconds)

```js
// Simple-Unique
var SimpleUnique=function(){"use strict";return function(n){n=n||10;for(var r=function(){return Math.random().toString(36).slice(2)},t=r();t.length<n;)t+=r();return t.slice(0,n)}}();

// NanoID
let NanoID=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-"),"");

const TenMillion = 9999999

var SimpleUniqueArray = []

var NanoIDArray = []

// Testing efficiency
// Almost in 3~5 seconds
// Simple-Unique: 3775.31591796875 ms
console.time('Simple-Unique')
for (let index = 0; index < TenMillion; index++) {
  SimpleUniqueArray.push(SimpleUnique(10))
}
console.timeEnd('Simple-Unique')

// Testing efficiency
// Almost in 26~28 seconds
// NanoID: 26226.182861328125 ms
console.time('NanoID')
for (let index = 0; index < TenMillion; index++) {
  NanoIDArray.push(NanoID(10))
}
console.timeEnd('NanoID')

// Test if there are duplicate ids after generating 9999999(10 million)
// Use Set to de-duplicate the array, and finally see if the remainder is 9999999 (10 million)
const SimpleUniqueSize = new Set(SimpleUniqueArray).size
const NanoIDSize = new Set(NanoIDArray).size

// If true, it means there are no duplicate ids in 9999999 (10 million)
console.log(SimpleUniqueSize === TenMillion, SimpleUniqueSize) // true 9999999
console.log(NanoIDSize === TenMillion, NanoIDSize) // true 9999999
```
