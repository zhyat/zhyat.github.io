---
title: JavaScript 中判断 this 指向的一些方法
date: 2019-05-27
categories:
  - JavaScript
---

JavaScript 中的 this 可能是 JS 这门语言中最难的一个关键字，想要去理解 this 运作的原理对 JS 需要一定的使用经验。本文并不深究 this 为什么指向某个地方，本文是一篇方法论的文章，只说明怎么样判断 this 的指向。

### 误区
1. this 指向自身 ❌
2. this 指向函数的作用域 ❌

### 正确的说法
> this 实际上是发生在函数调用时候的绑定，它指向什么完全取决于函数在哪里调用

看得明明白白，好像自己真的懂了是不是？呵呵，不可能的。

### 绑定的几条规则

#### 默认绑定
独立函数调用。

```js
function f () {
  console.log( this.a )
}
var a = 1
f() // 1

```
f()没有加任何的修饰的函数引用，所以此函数不可能使用其他规则，进而 this 此时指向的就是全局对象。不过需要注意的是，在严格模式中，this 是不可以绑定到全局对象上的。

这条规则就是，别的规则都不生效，那就是这条规则。

#### 隐式绑定
当调用位置有上下文对象。

```js
function f () {
  console.log( this.a )
}
var o = {
  a:1,
  foo: foo
}

o.foo() // 1
```

但是这条规则有几个需要注意的场景：

```js
function f () {
  console.log( this.a )
}
var o = {
  a:1,
  foo: foo
}
var fCopy = o.foo // 别名
fCopy() // TypeError: this is undefined
```
为什么会出现这种情况呢？因为实际上`fCopy` 是 `foo` 的引用, 是一个没有修饰符，即没有上下文对象的函数调用。

#### 显示绑定
使用 `call` 和 `apply()` 方法
```js
function f () {
  console.log( this.a )
}
var o = { a: 1}

f.call(o)
```
这个很明显了，就是手动的明确的，将f的this指向绑定到o上。

#### new 绑定
```js
function F (a) {
  this.a = a
}

var f = new F(1)

f.a // 1
```
js 的 new 实际上不是面向对象如java那种创建一个对象的实例，它是基于原型关系的。

先创建了一个对象，然后连接到到原型上。关于这一块，可以参考 JavaScript 实现复用那篇文章。

### 优先级别
new > 显示绑定 > 隐式绑定 > 默认绑定

### 总结
{% asset_img this_flow.png this指向的流程图 %}