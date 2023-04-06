# int2roman

一个用于转换阿拉伯数字和罗马数字的工具包，进入 [docs](./docs/int2roman.md) 文件下查看完整类型定义

## 安装

```bash
npm install int2roman
```

## 使用

### commonjs 引入

```js
const { intToRoman, romanToInt } = require('int2roman');

console.log(intToRoman(3));
// 'III'

console.log(romanToInt('IV'));
// 4
```

### esModule 引入

```js
import { intToRoman, romanToInt } from 'int2roman';

console.log(intToRoman(3));
// 'III'

console.log(romanToInt('IV'));
// 4
```

## dist 文件夹结构

根据自身需求使用压缩版和未压缩版（默认使用未压缩版）

```bash
dist
├── index.cjs
├── index.d.ts
├── index.min.cjs
├── index.min.mjs
└── index.mjs
```