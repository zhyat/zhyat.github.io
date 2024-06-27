---
title: 使用Jest测试JavaScript
date: 2018-09-04
categories: 
  - 测试｜Test
---

> Jest 是 Facebook 的一套开源的 JavaScript 测试框架， 它自动集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具，是一款几乎零配置的测试框架。并且它对同样是 Facebook 的开源前端框架 React 的测试十分友好。

<!-- more -->

## 安装

  1. npm init -y
  2. npm install -D jest babel-jest babel-core babel-preset-env regenerator-runtime


## 使用
1. 在项目根目录添加`.babelrc`文件
2. 在文件中写入
  ```
  {
    "presets": ["env"]
  }
  ```
3. 打开`package.json`文件，将`script`下的`test`的值修改为`jest`：
  ```json
  "scripts": {
    "test": "jest"
  }
  ```

## 编写测试方法
1. 创建`src`和`test`目录及相关文件
  - 在项目根目录下创建`src`目录，并在`src`目录下添加`functions.js`文件
  - 在项目根目录下创建`test`目录，并在`test`目录下创建`functions.test.js`文件
  - 测试文件的文件名 = 被测试模块名 + .test.js，例如被测试模块为`functions.js`，那么对应的测试文件命名为`functions.test.js`。
  - `Jest` 会自动找到项目中所有使用`.spec.js`或`.test.js`文件命名的测试文件并执行

2. 在`src/functions.js`中创建被测试的模块
  ```js
  export default {
    sum(a, b) {
      return a + b;
    }
  }
  ```
  在`test/functions.test.js`文件中创建测试用例
  ```js
  import functions  from '../src/functions';

  test('sum(2 + 2) 等于 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
  })
  ```

