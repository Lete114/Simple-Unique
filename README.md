<div align="right">
  语言:
  中文
  <a title="English" href="/README_EN.md">English</a>
</div>

<h1 align="center"><a href="https://github.com/lete114/Simple-Unique" target="_blank">Simple-Unique</a></h1>
<p align="center">完全随机生成唯一字符串 · 超轻量</p>

<p align="center">
    <a href="https://github.com/Lete114/Simple-Unique/releases/"><img src="https://img.shields.io/npm/v/simple-unique?logo=npm" alt="Version"></a>
    <a href="https://github.com/Lete114/Simple-Unique/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Lete114/Simple-Unique?color=FF5531" alt="MIT License"></a>
</p>

## 简介

完全随机生成唯一字符串 · **超轻量**

压缩大小: 180~ Byte

gzip 大小: 150~ bit

## 安装

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

## 使用案例

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

### 浏览器

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

[Simple-Unique](https://github.com/Lete114/Simple-Unique) 与 [NanoID](https://github.com/ai/nanoid) 对比，分别生成`9999999`(一千万)个唯一 id，长度为 10 位数

> 如下结果是在浏览器控制台中进行测试的
>
> Simple-Unique 的效率大约是 NanoID 的 7 倍
> - Simple-Unique: 3775.31591796875 ms (3~5秒左右)
> - NanoID: 26226.182861328125 ms (26~28秒左右)

```js
// Simple-Unique
var SimpleUnique=function(){"use strict";return function(n){n=n||10;for(var r=function(){return Math.random().toString(36).slice(2)},t=r();t.length<n;)t+=r();return t.slice(0,n)}}();

// NanoID
let NanoID=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-"),"");

const TenMillion = 9999999

var SimpleUniqueArray = []

var NanoIDArray = []

// 测试效率
// 差不多在3~5秒左右
// Simple-Unique: 3775.31591796875 ms
console.time('Simple-Unique')
for (let index = 0; index < TenMillion; index++) {
  SimpleUniqueArray.push(SimpleUnique(10))
}
console.timeEnd('Simple-Unique')

// 测试效率
// 差不多在26~28秒左右
// NanoID: 26226.182861328125 ms
console.time('NanoID')
for (let index = 0; index < TenMillion; index++) {
  NanoIDArray.push(NanoID(10))
}
console.timeEnd('NanoID')

// 测试在生成 9999999(一千万) 后是否存在重复id
// 使用 Set 对数组去重，最后查看剩余是否是 9999999(一千万)
const SimpleUniqueSize = new Set(SimpleUniqueArray).size
const NanoIDSize = new Set(NanoIDArray).size

// 如果为true，则表示在 9999999(一千万) 中无重复id
console.log(SimpleUniqueSize === TenMillion, SimpleUniqueSize) // true 9999999
console.log(NanoIDSize === TenMillion, NanoIDSize) // true 9999999
```
