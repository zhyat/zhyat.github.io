---
title: JavaScript的“面向对象”
date: 2019-02-19
categories: 
  - JavaScript
---

在实现面向对象的编程中，有两种不同的描述对象的方式。一是以Java、C++为代表的基于类的编程语言，二是以JavaScript为代表的基于原型的编程语言。
基于“类”关心分类与类，基于“原型”则更关心对象实例。基于“类”的语言总是先有类，然后再去实例化一个对象，类与类之间可以形成继承、组合等关系。但基于”原型“的语言是通过“复制”来创建新的对象。
为了使JavaScript更接近基于“类”的实现方式，社区里曾有过不少接近于类Java的风格方言。但在ES6出现后，`class`已经成为一个关键字，不需要模拟即可实现“类”，但实际上这个“类”还是基于原型对象之上的。

利用class实现继承
```js
class Animal{
  constructor (name) {
    this.name = name
  }

  run() {
    console.log(`${this.name}可以跑`)
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  run(){
    console.log(`${this.name}可以四肢腿跑`)
  }
}

class Duck extends Animal {
  constructor(name) {
    super(name)
  }

  run(){
    console.log(`${this.name}可以两只腿跑`)
  }
}

let cat = new Cat('Tom')
let duck = new Duck('Donald')

cat.run() // Tom可以四肢腿跑
duck.run()// Donald可以两只腿跑
```

当然，ES6在操作对象上也提供了几个方法，使得基于原型的思想也同样可以实现继承。提供的方法如下：
- `Object.create`
- `Object.getPrototypeOf`
- `Object.sePrototypeOf`
这三个方法具体如何使用请参阅[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

用原型实现的继承
```js
let animal = {
  run(){
    console.log('我可以跑')
  }
}

let cat = Object.create(animal,{
  say(){
    console.log('我是cat')
  }
})

let duck = Object.create(animal,{
  say(){
    console.log('我是duck')
  }
})

let someCat = Object.create(cat)
let someDuck = Object.create(duck)

someCat.say()
someDuck.say()
```
