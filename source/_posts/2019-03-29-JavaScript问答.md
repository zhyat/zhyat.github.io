---
title: JavaScript问答
date: 2019-03-29T03:32:44.976Z
tags:
  - 面试 
categories:
  - JavaScript
---

Q：为什么有的编程规范要求用void 0 代替 undefined?
A: undefined 是一个全局变量，可以被修改。为了准备的表达“未定义”，所以使用void 0

Q：underfined 与 null 的区别？
A：underfined 是Underfined类型的一个值，是一个名为underfined的变量，表达的意思是“从未赋值”“从未定义”，而null是Nulll类型的一个值，是JavaSript语言的关键字，表达的意思是“定义了但是为空”

Q：0.1+0.2 不能 = 0.3？怎么比较浮点数？
A：Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON，浮点数的特性决定了等式两边相差了微小的值，应该比较等式两边之差是否小于最小精度值

Q：为什么parseInt推荐传入第二个参数？
A：在不传入第二个参数的时候，parseInt默认转换0x开头的16进制，还支持0开头的八进制，所以推荐在任何时候都传入第二个参数。parseFloat则直接把字符串作为十进制解析。多数情况下，Number是比parseInt和parseFloat更好的选择。

Q：instanceof、typeof 和 Object.prototype.toString的区别？
Q：['1','2','3'].map(parseInt)的结果？

Q: 一个页面如果有一万个Bottom如何绑定事件？
A：事件委托，绑定父节点
```js
$('.list').on('click', 'li', function(event) { // 绑定事件到父节点
    console.log($(event.target).html()); // 注意操作对象是event.target还是this，下面会有详细说明哦
});

$('.list').on('click', function(event) {
    if (event.target.tagName === 'LI') { // 判断标签是不是li，注意tagName属性返回的是大写
        console.log($(event.target).html());
    }
});
```

Q: 我们现在要实现一个红绿灯，把一个圆形 div 绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色
A:
```js
function sleep(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}
async function changeColor(duration,color){
    document.getElementById("traffic-light").style.background = color;
    await sleep(duration);

}
async function main(){
    while(true){
        await changeColor(3000,"green");
        await changeColor(1000, "yellow");
        await changeColor(2000, "red");
    }
}
main()
```
