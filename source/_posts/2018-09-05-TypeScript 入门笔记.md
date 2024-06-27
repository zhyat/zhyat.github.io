---
title: Typescript 学习笔记—基本语法
date: 2018-09-05
categories:
  - JavaScript
  - TypeScript
---

为什么使用Typescript？类型系统使代码的可读性更高，扩展性好，是JS的超集。

<!-- more -->

# 基本语法
## 定义变量类型
* 如果在定义的时候没有定义类型，TS会自动做类型推论
### 原始数据类型 （Primitive data types）
布尔值、数值、字符串、null、undefined 、Symbol

#### 布尔值
```ts
let bur: boolean = false ;
```
但需要注意的是用`Boolean`构造函数创造的不是布尔值而是`Boolean`对象
```ts
let creatBoolean: Boolean = new Boolean();
```

#### 数值（number)
```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

#### 字符串
```ts
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
```

#### 空值
```ts
let unusable: void = undefined;
```
可以用来表示没有返回值的函数

### NULL和 Undefined
```ts
let u: undefined = undefined;
let n: null = null;
```
`undefined` 类型的变量只能被赋值为 `undefined`，`null` 类型的变量只能被赋值为 `null`。
### 对象类型（Object types）

### 任意值 （Any）
只有 Any 类型的值允许被赋值成任何类型
可以在任意值上访问任意属性和任意方法
```ts
let myNumber: any = 'seven';
myNumber = 7;
```
\*\* 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。 \*\\\*

### 未声明类型
变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型

### 联合类型(Union Types）
取值可以为多种类型中的一种
```ts
let myNumber: String | Number;
myFavoriteNumber  = 'seven';
myFavoriteNumber  = 7;
```
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，只能访问此联合类型的所有类型里共有的属性或方法