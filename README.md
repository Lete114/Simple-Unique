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

压缩大小: 320~ Byte

gzip 大小: 200~ bit

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
const arr2 = [unique(true), unique(true)]

console.log(arr1[0] === arr1[1], arr1) // false [ 'wps9v86i1icltz0y1yub', 'g1wozldayykvszuh2xyq' ]
console.log(arr2[0] === arr2[1], arr2) // false [ '2ljb1nu94l4e6y49oa2w.dp8ftwjtlzv', 'wmuogoa3lt1g45ycq0o.o7auhvika2' ]
```

### 浏览器

```html
<script src="https://cdn.jsdelivr.net/npm/simple-unique/dist/unique.min.js"></script>
<script>
  const arr1 = [unique(), unique()]
  const arr2 = [unique(true), unique(true)]

  console.log(arr1[0] === arr1[1], arr1) // false [ 'wps9v86i1icltz0y1yub', 'g1wozldayykvszuh2xyq' ]
  console.log(arr2[0] === arr2[1], arr2) // false [ '2ljb1nu94l4e6y49oa2w.dp8ftwjtlzv', 'wmuogoa3lt1g45ycq0o.o7auhvika2' ]
</script>
```
