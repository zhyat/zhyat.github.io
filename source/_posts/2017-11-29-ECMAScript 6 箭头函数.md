---
title: ES6 之 箭头函数
date: 2017-11-28
tags: 
  - FrontEnd
categories: 
  - JavaScript
  - ECMAScript 6
---

JavaScript 箭头函数是 ECMAScript 6 中引入的编写函数表达式的一种简便方法。

<!-- more -->

在 JavaScript 中创建一个函数通常有两种方式：

- 函数语句
- 函数表达式

但现在还可以使用箭头函数

用函数语句创建一个函数如下：

```js
function add(num1,mum2){
  var res = num1 + num2;
  return res;
}
```

但现在用函数表达式只需要一行：

```js
var add = (num1,num2) => {return num1 + num2;};
```



### 基本语法规则

#### 多参数传递

多个参数应该在小括号中传递，如下所示：

```js
var add = (num1,num2,num3) => {return num1 + num2 + num3;};
```

只传递一个函数的时候，小括号可以省略，如下所示：

```js
var mul = num => {return num * 666;};
```

不传递参数的时候，小括号不可以省略，如下所示：

```js
var text = () => {console.log("hello word")};
```

- 函数主体括号可选
- return 语句可选

#### 默认参数

箭头函数支持 ES6 的默认参数功能，如下：

```js
var add = (num1=1,num2=2) => num1 + num2;
```

#### 返回对象字面量

如果要使用箭头函数返回对象字面量，需要把返回对象装入小括号中，如下：

```js
var student = (name,age) =>({
  name:name,
  age:age
});
```

#### this值

箭头函数不会创建自己的`this`,它使用封闭上下文的``this``值。

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

所以在这段代码中，传递给``setInterval``的函数内的``this``与封闭函数中的``this``值相同



### 使用箭头函数的注意事项

#### 不能使用箭头函数作为构造函数，如下；

```js
var Student = (name, age) => { name = name, age = age };
var jack = new Student("Jack", 6);
```

![抛出异常](2017-11-29_抛出异常.jpg)

#### 箭头函数没有原型

```js
var Student = (name, age) => { name = name, age = age };
console.log(Student.prototype)
```

![没有原型](2017-11-29_没有原型.jpg)



