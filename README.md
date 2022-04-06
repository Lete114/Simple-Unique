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
